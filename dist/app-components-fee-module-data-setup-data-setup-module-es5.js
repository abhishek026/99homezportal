(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-components-fee-module-data-setup-data-setup-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fee-module/data-setup/data-setup.component.html":
    /*!******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fee-module/data-setup/data-setup.component.html ***!
      \******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsFeeModuleDataSetupDataSetupComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div>\n    <div class=\"w98 p-15\">\n        <div class=\"display\">\n            <div>\n                <nav aria-label=\"breadcrumb \">\n                    <ol class=\"breadcrumb arr-right\">\n                        <li style=\"color: #0084f6;\" class=\"breadcrumb-item \">Fees</li>\n                        <li class=\"breadcrumb-item \"><a>Setup</a></li>\n\n                    </ol>\n\n                </nav>\n            </div>\n            <div>\n                <ul class=\"right_ul\">\n                    <li>\n                        <div class=\"tooltip1\">Tax Setting {{is_tax_enabled?\"Enabled\":\"Disable\"}}\n                            <span class=\"tooltiptext1\">If you want to {{is_tax_enabled?\"Enabled\":\"Disable\"}} this\n                                setting. Please connect with Proctur Support Team!</span>\n                        </div>\n                    </li>\n                    <li>\n                        <div class=\"tooltip2\">Fee Structure{{isFeeStructLinked?\" \":\" Not \"}}Linked With\n                            {{schoolModel?\"Standard\":\"Course\"}}\n                            <span class=\"tooltiptext2\">If you want to {{is_tax_enabled?\"Enabled\":\"Disable\"}} this\n                                Setting. Click on Setting Icon->Institute Settings -> Fee -> Link Fee Structure With\n                                Standard/Course</span>\n                        </div>\n                    </li>\n\n                </ul>\n\n            </div>\n        </div>\n        <ul class=\"nav main-shadow\">\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" (click)=\"toggle('fee_types')\" routerLink=\"/view/fee/data-setup/fee-type\"\n                    [ngClass]=\"(activeSession == 'fee_types') ? 'active' : ''\">Fee Types</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" (click)=\"toggle('structure')\" routerLink=\"/view/fee/data-setup/fee-structure\"\n                    [ngClass]=\"(activeSession == 'structure') ? 'active' : ''\">Fee Structure</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" (click)=\"toggle('discount')\" routerLink=\"/view/fee/data-setup/discount-reason\"\n                    [ngClass]=\"(activeSession == 'discount') ? 'active' : ''\">Discount Reason</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" (click)=\"toggle('setting')\" routerLink=\"/view/fee/data-setup/setting\"\n                    [ngClass]=\"(activeSession == 'setting') ? 'active' : ''\">Settings</a>\n            </li>\n        </ul>\n    </div>\n\n\n</div>\n<router-outlet></router-outlet>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fee-module/data-setup/discount-reason/discount-reason.component.html":
    /*!***************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fee-module/data-setup/discount-reason/discount-reason.component.html ***!
      \***************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsFeeModuleDataSetupDiscountReasonDiscountReasonComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"page-content\">\n  <div class=\"w98\">\n    <div class=\"tab-content\">\n      <div id=\"fee_types\" class=\"tab-pane active\">\n        <div class=\"padding1\">\n          <input type=\"\" class=\"input mr10 wid240\" name=\"discountReason\" [(ngModel)]=\"discountReason\" placeholder=\"Discount Reason *\">\n          <button class=\"blue_button\" (click)=\"addNewDiscountReason()\">Add</button>\n        </div>\n        <div class=\"fee_types\">\n          <div class=\"table_heading\">\n            <div>Discount Reason</div>\n            <div>Created Date</div>\n            <div>Action</div>\n          </div>\n          <div class=\"tableHeight\">\n          <div *ngFor=\"let data of discountReasonArray\">\n            <div class=\"table_body\">\n              <div>{{data.reason}}</div>\n              <div>{{data.created_date}}</div>\n              <div><a (click)=\"editReason(data)\"><img src=\"../../../../../assets/images/edit.svg\"\n                    class=\"size22 pointer\" title=\"Edit\"></a></div>\n            </div>\n          </div>\n          </div>\n        </div>\n      </div>\n        </div>\n  </div>\n <div class=\"w98\">\n    <div class=\"bottom_pagignation flex w98\">\n      <div class=\"w20\">\n      </div>\n      <div class=\"w10\">\n      </div>\n      <div class=\"w40\">\n      </div>\n      <div class=\"w30\">\n      </div>\n    </div>\n  </div> \n</div>\n\n<div class=\"modal\" id=\"discountReasonModel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Discount Reason</h4>\n        <button type=\"button\" (click)=\"clearData()\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      </div>\n      <div class=\"modal-body\" style=\"height: 116px;\">\n        <div>\n          <div><input type=\"\" name=\"discountReason\" [(ngModel)]=\"discountReason\" class=\"input w100\" placeholder=\"Discount Reason\">\n          </div>\n          <div class=\"padding11\">\n            <span class=\"right\">\n              <button class=\"white_button mr10\" (click)=\"clearData()\">\n                Cancel\n              </button>\n              <button class=\"blue_button\" (click)=\"updateDiscountReason()\">\n                Save\n              </button>\n            </span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"modal\" id=\"discountModal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Edit Discount Reason</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      </div>\n      <div class=\"modal-body\">\n        <textarea placeholder=\"Reason\" class=\"input\"></textarea>\n        <div class=\"padding1\">\n          <span class=\"right\">\n            <button class=\"white_button mr10\">\n              Cancel\n            </button>\n            <button class=\"blue_button \">\n              Save\n            </button>\n          </span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fee-module/data-setup/fee-types-v2/fee-types-v2.component.html":
    /*!*********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fee-module/data-setup/fee-types-v2/fee-types-v2.component.html ***!
      \*********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsFeeModuleDataSetupFeeTypesV2FeeTypesV2ComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"page-content\">\n  <div class=\"w98\">\n    <div class=\"tab-content\">\n      <div id=\"fee_types\" class=\"tab-pane active\">\n        <div class=\"padding1\">\n          <input type=\"\" class=\"input mr10\" name=\"fee_type\" [(ngModel)]=\"addNewFee.fee_type\" placeholder=\"Fee Type*\">\n          <input type=\"\" class=\"input mr10\" name=\"fee_type_desc\" [(ngModel)]=\"addNewFee.fee_type_desc\"\n            placeholder=\"Description\">\n          <input type=\"\" class=\"input mr10\" name=\"fee_type_tax\" *ngIf=\"is_tax_enabled\"\n            [(ngModel)]=\"addNewFee.fee_type_tax\" onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57)\" placeholder=\"Tax  (in percentage)\">\n          <button class=\"blue_button\" (click)=\"createFeeType()\">Add</button>\n        </div>\n        <div class=\"fee_types\">\n          <div class=\"table_heading\">\n            <div>Fee Type</div>\n            <div>Fee Type Description</div>\n            <div *ngIf=\"is_tax_enabled\">Tax(%) <span title=\"Enable Tax\" class=\"info\">i</span></div> \n            <div>Action</div>\n          </div>\n          <div class=\"tableHeight\">\n          <div *ngFor=\"let data of feeTypeList\">\n            <div class=\"table_body\">\n              <div>{{data.fee_type | titlecase}}</div>\n              <div>{{(data.fee_type_desc != '') ? data.fee_type_desc : '-'}}</div>\n               <div *ngIf=\"is_tax_enabled\">{{data.fee_type_tax}}</div>\n              <div><a data-toggle=\"modal\" (click)=\"editFeeTypes(data)\" class=\"pointer\"><img src=\"../../../../../assets/images/edit.svg\"\n                    class=\"size22\" title=\"Edit\"></a></div>\n            </div>\n          </div>\n          </div>\n        </div>\n      </div>\n        </div>\n  </div>\n <div class=\"w98\">\n    <!-- <div class=\"bottom_pagignation flex w98\">\n      <div class=\"w20\">\n      </div>\n      <div class=\"w10\">\n      </div>\n      <div class=\"w40\">\n      </div>\n      <div class=\"w30\">\n      </div>\n    </div> -->\n     \n  </div>\n\n</div>\n\n<!-- The Modal -->\n\n<div class=\"modal\" id=\"feetypesModal\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Edit Fee Types</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" (click)=\"clearData()\">&times;</button>\n      </div>\n      <div class=\"modal-body\">\n        <div>\n          <div><input type=\"\" name=\"fee_type\" [(ngModel)]=\"addNewFee.fee_type\" class=\"input w100\" placeholder=\"Fee*\">\n          </div>\n          <div class=\"padding11\"><input type=\"\" name=\"fee_type_desc\" [(ngModel)]=\"addNewFee.fee_type_desc\"\n              class=\"input w100\" placeholder=\"Fee Type Description\"></div>\n          <div class=\"padding11\"><input type=\"\" name=\"fee_type_tax\" *ngIf=\"is_tax_enabled\"\n              [(ngModel)]=\"addNewFee.fee_type_tax\" onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57)\" class=\"input w100\" placeholder=\"Tax(in %)\"></div>\n          <div class=\"padding11 display\">\n            <div></div>\n            <div>\n              <button class=\"white_button mr10\" (click)=\"clearData()\">\n                Cancel\n              </button>\n              <button class=\"blue_button\" (click)=\"updateFeeType()\">\n                Update\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"modal\" id=\"discountModal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Edit Discount Reason</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      </div>\n      <div class=\"modal-body\">\n        <textarea placeholder=\"Reason\" class=\"input\"></textarea>\n        <div class=\"padding1\">\n          <span class=\"right\">\n            <button class=\"white_button mr10\">\n              Cancel\n            </button>\n            <button class=\"blue_button \">\n              Save\n            </button>\n          </span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fee-module/data-setup/fee-types/fee-types.component.html":
    /*!***************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fee-module/data-setup/fee-types/fee-types.component.html ***!
      \***************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsFeeModuleDataSetupFeeTypesFeeTypesComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"clearFix\" style=\"padding-right: 2%;\">\n  <section class=\"middle-top mb0 clearFix\" style=\"margin-bottom: 10px;\">\n    <h1 class=\"pull-left\">\n      <!-- <a routerLink=\"/view/fee\">\n          Fees\n        </a> -->\n        Fees\n      <i style=\"font-family: 'FontAwesome';\" class=\"fas fa-angle-right\"></i>\n      <a routerLink=\"/view/fee/data-setup\">\n        Data-setup\n      </a>\n      <i style=\"font-family: 'FontAwesome';\" class=\"fas fa-angle-right\"></i> Additional fees\n    </h1>\n  </section>\n\n  <section class=\"middle-main clearFix\">\n\n    <!-- <div class=\"note-wrapper\">\n      <h3>Note</h3>\n      <ul>\n        <li>\n          <span>1. Create only type of Fee.</span>\n        </li>\n        <li>\n          <span>2. No need to add amount (Amount will be added during student fee schedule).</span>\n        </li>\n        <li>\n          <span>3. Create Batch Fee Schedule if required.</span>\n        </li>\n      </ul>\n    </div> -->\n\n    <div class=\"clearFix add-edit\">\n      <a (click)=\"toggleCreate()\">\n        <i id=\"showAddBtn\" class=\"addBtnClass\">+</i>\n        <i id=\"showCloseBtn\" style=\"display:none\" class=\"closeBtnClass\">-</i>\n        <span>Add Fee Types</span>\n      </a>\n    </div>\n    <section class=\"clearFix create-standard-form\" *ngIf=\"createNewFeeType\">\n      <div class=\"row create-standard-field\">\n        <div class=\"c-lg-2 c-md-2 c-sm-2\">\n          <div class=\"field-wrapper\" [ngClass]=\"{'has-value' : addNewFee.fee_type != '' }\">\n            <label for=\"slotNew\">Fee Type <span class=\"text-danger\">*</span>\n            </label>\n            <input type=\"text\" #idSlot class=\"form-ctrl\" [(ngModel)]=\"addNewFee.fee_type\" name=\"slotNew\">\n\n            <p>(Eg Registration Fee, Library)</p>\n          </div>\n        </div>\n        <div class=\"c-lg-2 c-md-2 c-sm-2\">\n          <div class=\"field-wrapper\" [ngClass]=\"{'has-value' : addNewFee.fee_type_desc != '' }\">\n            <label for=\"slotNew\">Description\n            </label>\n            <input type=\"text\" #idSlot class=\"form-ctrl\" [(ngModel)]=\"addNewFee.fee_type_desc\" name=\"slotNew\">\n          </div>\n        </div>\n        <div class=\"c-lg-2 c-md-2 c-sm-2\">\n          <div class=\"field-wrapper\" [ngClass]=\"{'has-value' : addNewFee.country_id != '' }\">\n            <label for=\"slotNew\">Country <span class=\"text-danger\">*</span></label>\n            <select id=\"country_id\" class=\"form-ctrl\" [(ngModel)]=\"addNewFee.country_id\" name=\"country_id\"\n              style=\"height: 29px;padding: 0\">\n              <option value=\"\"></option>\n              <option [value]=\"data.id\" selected *ngFor='let data of countryDetails'>\n                {{data.country_name}}\n              </option>\n            </select>\n          </div>\n        </div>\n        <div class=\"c-lg-2 c-md-2 c-sm-2\">\n          <div class=\"field-wrapper\" [ngClass]=\"{'has-value' : addNewFee.fee_amount != '' }\">\n            <label for=\"slotNew\">Fee Amount <span class=\"text-danger\">*</span>\n            </label>\n            <input type=\"text\" onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57)\" #idSlot\n              class=\"form-ctrl\" [(ngModel)]=\"addNewFee.fee_amount\" name=\"slotNew\">\n\n          </div>\n        </div>\n        <!-- <div class=\"c-lg-2 c-md-2 c-sm-2\" *ngIf=\"addNewFee.country_id==1\"> -->\n        <div class=\"c-lg-2 c-md-2 c-sm-2\" *ngIf=\"is_tax_enabled\">\n          <div class=\"field-wrapper\" [ngClass]=\"{'has-value' : addNewFee.fee_type_tax >= 0 }\">\n            <label for=\"slotNew\">{{tax_type_with_percentage}}\n            </label>\n            <input type=\"number\" max=\"99\" #idSlot class=\"form-ctrl\" [readonly]=\"isTaxEnableFeeInstallments\"\n              [(ngModel)]=\"addNewFee.fee_type_tax\" name=\"slotNew\">\n\n          </div>\n        </div>\n        <div style=\"margin-top: 1.5%;\" class=\"pull-left create-cancel-small\">\n          <button class=\"btn fullBlue\" (click)=\"addNewFeeType()\">Add</button>\n        </div>\n      </div>\n    </section>\n\n    <div class=\"table-responsive\">\n      <table>\n        <thead>\n          <th>\n            Fee Type (Eg Registration Fee, Library)\n          </th>\n          <th>\n            Fee Type Description\n          </th>\n          <th>\n            Country\n          </th>\n          <th>\n            Fee Amount\n          </th>\n          <th *ngIf=\"is_tax_enabled\">\n            {{tax_type_with_percentage}}\n            <div class=\"questionInfo inline-relative\">\n              <span class=\"qInfoIcon i-class\">i</span>\n              <div class=\"tooltip-box-field\">\n                Enable {{tax_type_with_percentage}}\n              </div>\n            </div>\n          </th>\n          <th>\n            Action\n          </th>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let row of feeTypeList; let i = index\">\n            <td>\n              <div class=\"field-wrapper\">\n                <input type=\"text\" class=\"form-ctrl editCellInput\" [(ngModel)]=\"row.fee_type\" name=\"label\">\n              </div>\n            </td>\n            <td>\n              <div class=\"field-wrapper\">\n                <input type=\"text\" class=\"form-ctrl editCellInput\" [(ngModel)]=\"row.fee_type_desc\" name=\"label\">\n              </div>\n            </td>\n            <td>\n              <select id=\"country_id\" class=\"form-ctrl input_txt\" [(ngModel)]=\"row.country_id\" name=\"country_id\"\n                (ngModelChange)=\"onRowDataChange($event,row)\">\n                <option [value]=\"data.id\" selected *ngFor='let data of countryDetails'>\n                  {{data.country_name}}\n                </option>\n              </select>\n            </td>\n            <td>\n              <span>{{getCountryDetails(row.fee_amount,row.country_id)}}</span>\n              <span class=\"field-wrapper\">\n                <input type=\"number\" class=\"form-ctrl editCellInput\" style=\"width:25%;display: inherit;\"\n                  [(ngModel)]=\"row.fee_amount\" name=\"label\">\n              </span>\n            </td>\n            <td *ngIf=\"is_tax_enabled\">\n              <div class=\"field-wrapper\">\n                <!-- disabled =row.country_id!='1' && isTaxEnableFeeInstallments -->\n                <input type=\"number\" class=\"form-ctrl editCellInput\" style=\"width:25%\" [(ngModel)]=\"row.fee_type_tax\"\n                  name=\"tax\">\n              </div>\n            </td>\n            <td>\n              <span *ngIf=\"row.fee_type_id == 0\" class=\"delete-btn\" style=\"font-family: FontAwesome; font-size: 19px\"\n                (click)=\"deleteRow(row , i)\">\n                <i class=\"fa fa-trash-o \" aria-hidden=\"true \"></i>\n              </span>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n\n    <div class=\"pull-right\" style=\"margin-top: 1.5%;\">\n      <button class=\"btn\" routerLink=\"/view/fee/home\">Back</button>\n      <button class=\"btn fullBlue\" (click)=\"updateDetails()\">Update</button>\n    </div>\n\n  </section>\n\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fee-module/data-setup/fees-settings/fees-settings.component.html":
    /*!***********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fee-module/data-setup/fees-settings/fees-settings.component.html ***!
      \***********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsFeeModuleDataSetupFeesSettingsFeesSettingsComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"page-content\">\n    <div class=\"w981 main_div\">\n      <div>\n        <div class=\"settings\">\n          <span>\n            <img src=\"../../../../assets/images/settings.svg\">\n            <span class=\"position\">Settings</span>\n          </span>\n        </div>\n        <ul class=\"menu\">\n          <li  (click)=\"scrollTo('section0')\" [ngClass]=\"{ 'selected': currentSection === 'section0'}\"><a>Fee Structure</a></li>\n          <li  (click)=\"scrollTo('section1')\" [ngClass]=\"{ 'selected': currentSection === 'section1'}\"><a>Email Settings</a></li>\n          <li  (click)=\"scrollTo('section2')\" [ngClass]=\"{ 'selected': currentSection === 'section2'}\"><a>Online Payment</a> </li>\n          <li  (click)=\"scrollTo('section3')\" [ngClass]=\"{ 'selected': currentSection === 'section3'}\"><a>Online Fee Collections </a></li>\n          <li  (click)=\"scrollTo('section4')\" [ngClass]=\"{ 'selected': currentSection === 'section4'}\"><a>Tax Setting</a></li>\n          <li  (click)=\"scrollTo('section5')\" [ngClass]=\"{ 'selected': currentSection === 'section5'}\"><a>Receipt Setting </a></li>\n          <li  (click)=\"scrollTo('section6')\" [ngClass]=\"{ 'selected': currentSection === 'section6'}\"><a>Fee Notification Setting</a></li>\n        </ul>\n      </div>\n      <div class=\"scrool1\">\n        <div class=\"flex1\">\n          <!-- main settings -->\n          <div>\n            <span class=\"ellipse\">L</span><span class=\"blue_line\"></span>\n          </div>\n          <div>\n            <p class=\"blue_settings\" id=\"section0\">\n             Fee Structure <span> &nbsp; (link with course/without course) </span>\n            </p>\n            <!-- <p class=\"bold_settings\">\n              Link Fee Structure With Standard/Course\n            </p> -->\n             <p class=\"black_settings1\">\n              Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n             </p>\n             <!-- <input type=\"text\" class=\"input\" name=\"is_fee_struct_link_with_cour_or_stand\" [(ngModel)]=\"feesSettings.is_fee_struct_link_with_cour_or_stand\"\n             id=\"is_fee_struct_link_with_cour_or_stand\" placeholder=\"Email Sender ID\"> -->\n          </div>\n          <div class=\"toggle\">\n            <span>\n              <span class=\"off\">OFF</span>\n              <label class=\"switch\">\n                <input type=\"checkbox\" (click)=\"isFeeStructureLikedWithStudent()\" name=\"is_fee_struct_link_with_cour_or_stand\"  [(ngModel)]=\"feesSettings.is_fee_struct_link_with_cour_or_stand\"  checked>\n                <span class=\"slider round\"></span>\n              </label>\n              <span class=\"on\">ON</span>\n            </span>\n            \n          </div>\n          \n        </div>\n        <div class=\"sep_line\"></div>\n        <div class=\"flex1\">\n          <!-- main settings -->\n          <div>\n            <span class=\"ellipse\">E</span><span class=\"blue_line\"></span>\n          </div>\n          <div>\n            <p class=\"blue_settings\" id=\"section1\">\n              Email Settings\n            </p>\n            <p class=\"bold_settings\">\n              Accounts Email Sender ID\n            </p>\n             <p class=\"black_settings1\">\n              Fee related notifications will recive on specified Email ID.\n             </p>\n             <input type=\"text\" class=\"input\" name=\"email_id_for_fee_receipt\" [(ngModel)]=\"feesSettings.email_id_for_fee_receipt\"\n             id=\"email_id_for_fee_receipt\" placeholder=\"Email Sender ID\">\n          </div>\n        \n        </div>\n        <div class=\"sep_line\"></div>\n         <div class=\"flex1\">\n          <!-- main settings -->\n          <div>\n            <span class=\"ellipse hidden\">E</span><span class=\"blue_line hidden\"></span>\n          </div>\n          <div>\n           \n            <p class=\"bold_settings\">\n              Specify Email-Ids for Fee Activites / Reports\n            </p>\n             <p class=\"black_settings1\">\n              The email id's to which the reports related to fees has to be shared, those email id's will be provided at comma separated format.\n             </p>\n             <input type=\"text\" class=\"input\" name=\"inst_fee_activity_email_recipients\" [(ngModel)]=\"feesSettings.inst_fee_activity_email_recipients\"\n             id=\"inst_fee_activity_email_recipients\" placeholder=\"Email Sender ID\">\n          </div>\n        \n        </div>\n        <div class=\"sep_line\"></div>\n        <div class=\"flex1\">\n          <!-- main settings -->\n          <div>\n            <span class=\"ellipse hidden\">G</span><span class=\"blue_line hidden\"></span>\n          </div>\n          <div>\n           \n            <p class=\"bold_settings\">\n              PDC Remainder\n            </p>\n             <p class=\"black_settings\">\n              By enabling the user will get reminders relevant to post dated cheques feeded in the system i.e. days before the which the cheque has to be deposited\n             </p>\n             <div  *ngIf=\"(feesSettings.pdc_reminder_setting == 1)\">\n              <p class=\"black_settings1\" >\n                No of Days before Cheque Date\n             </p>\n             <input type=\"text\" class=\"input\" name=\"pdc_reminder_sent_on\"  [(ngModel)]=\"feesSettings.pdc_reminder_sent_on\" id=\"ch90\" placeholder=\"2\">\n            </div>\n            </div>\n          <div class=\"toggle s_toggle\">\n            <span>\n              <span class=\"off\">OFF</span>\n              <label class=\"switch\">\n                <input type=\"checkbox\" name=\"pdc_reminder_setting\"  [(ngModel)]=\"feesSettings.pdc_reminder_setting\" checked>\n                <span class=\"slider round\"></span>\n              </label>\n              <span class=\"on\">ON</span>\n            </span>\n            \n          </div>\n        </div>\n        <div class=\"sep_line\"></div>\n        <div class=\"flex1\" id=\"section2\">\n          <!-- main settings -->\n          <div>\n            <span class=\"ellipse\">O</span><span class=\"blue_line\"></span>\n          </div>\n          <div>\n            <p class=\"blue_settings\">\n            Online Payment\n            </p>\n            <p class=\"bold_settings\">\n             Enable Online Payment\n            </p>\n             <p class=\"black_settings1\">\n              Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n             </p>\n             <p class=\"black_settings1\">Institute Online Payment  Account ID</p>\n             <input  type=\"text\" class=\"input\" name=\"institute_payment_account_id\"  [(ngModel)]=\"feesSettings.institute_payment_account_id\"  placeholder=\"Account ID\">\n          </div>\n          <div class=\"toggle\">\n            <span>\n              <span class=\"off\">OFF</span>\n              <label class=\"switch\">\n                <input type=\"checkbox\" name=\"enable_online_payment_feature\"  [(ngModel)]=\"feesSettings.enable_online_payment_feature\"  checked>\n                <span class=\"slider round\"></span>\n              </label>\n              <span class=\"on\">ON</span>\n            </span>\n            \n          </div>\n        </div>\n        <div class=\"sep_line\"></div>\n        <div class=\"flex1\" id=\"section3\">\n          <!-- main settings -->\n          <div>\n            <span class=\"ellipse\">O</span><span class=\"blue_line\"></span>\n          </div>\n          <div>\n            <p class=\"blue_settings\">\n           Online Fee Collection Setting\n            </p>\n            <p class=\"bold_settings\">\n           Enable Online Fee Collection Email\n            </p>\n             <p class=\"black_settings1\">\n              Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n             </p>\n             <p class=\"black_settings1\">Email ID(s) For Online Fee Collection Email</p>\n             <input type=\"text\" class=\"input\" name=\"online_payment_notify_emailIds\" [(ngModel)]=\"feesSettings.online_payment_notify_emailIds\" placeholder=\"\">\n          </div>\n          <div class=\"toggle\">\n            <span>\n              <span class=\"off\">OFF</span>\n              <label class=\"switch\">\n                <input type=\"checkbox\"  [(ngModel)]=\"feesSettings.enable_online_payment_email_notification\"  name=\"enable_online_payment_email_notification\" checked>\n                <span class=\"slider round\"></span>\n              </label>\n              <span class=\"on\">ON</span>\n            </span>\n            \n          </div>\n        </div>\n        <div class=\"sep_line\"></div>\n        <div class=\"flex1\">\n          <!-- main settings -->\n          <div>\n            <span class=\"ellipse hidden\">O</span><span class=\"blue_line hidden\"></span>\n          </div>\n          <div>\n           \n            <p class=\"bold_settings\">\n         Enable Online Fee Collection SMS\n            </p>\n             <p class=\"black_settings1\">\n              Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n             </p>\n             <p class=\"black_settings1\">Mobile No For Online Fee Collections SMS </p>\n             <input type=\"text\" class=\"input\" [(ngModel)]=\"feesSettings.online_payment_notify_mobiles\" name=\"online_payment_notify_mobiles\"  placeholder=\"\">\n          </div>\n          <div class=\"toggle s_toggle\">\n            <span>\n              <span class=\"off\">OFF</span>\n              <label class=\"switch\">\n                <input type=\"checkbox\"  [(ngModel)]=\"feesSettings.enable_online_payment_sms_notification\" name=\"enable_online_payment_sms_notification\"  checked>\n                <span class=\"slider round\"></span>\n              </label>\n              <span class=\"on\">ON</span>\n            </span>\n            \n          </div>\n        </div>\n        <div class=\"sep_line\"></div>\n        <div class=\"flex1\"  id=\"section4\">\n          <!-- main settings -->\n          <div>\n            <span class=\"ellipse\">T</span><span class=\"blue_line\"></span>\n          </div>\n          <div>\n            <p class=\"blue_settings\">\n              Tax Setting\n            </p>\n            <p class=\"bold_settings\">\n            Enable {{instituteTaxType}}\n            \n            </p>\n            \n             <p class=\"black_settings\">\n              Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n             </p>\n           \n            \n          </div>\n          <div class=\"toggle\" >\n            <span>\n              <span class=\"off\">OFF</span>\n              <label class=\"switch\">\n                <input type=\"checkbox\"  name=\"enablegst\" class=\"form-checkbox\"\n                [(ngModel)]=\"feesSettings.gst_enabled\"  (click)=\"isGstEnable()\" id=\"enablegst\">\n                <span class=\"slider round\"></span>\n              </label>\n              <span class=\"on\">ON</span>\n            </span>\n            \n          </div>\n        </div>\n        <div class=\"sep_line\"></div>\n        <div class=\"flex1\" *ngIf=\"(feesSettings.gst_enabled== '1' || feesSettings.gst_enabled == true)\">\n          <!-- main settings -->\n          <div>\n           \n          </div>\n          <div>\n           \n            <!-- <p class=\"bold_settings\">\n             Accounts Email Sender ID\n            </p>\n             <p class=\"black_settings1\">\n              Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n             </p>\n           \n             <input type=\"text\" class=\"input\" name=\"\" placeholder=\"Tax(&)\"> -->\n             <p class=\"bold_settings\">\n              GSTIN\n               </p>\n                <p class=\"black_settings1\">\n                 Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n                </p>\n   \n               <input type=\"text\" class=\"input\" [(ngModel)]=\"feesSettings.gst_no\" name=\"gst_no\" placeholder=\"\">\n          </div>\n          \n        </div>\n        <div class=\"sep_line\" *ngIf=\"(feesSettings.gst_enabled== '1' || feesSettings.gst_enabled == true)\"></div>\n\n        <div class=\"flex1\"*ngIf=\"(feesSettings.gst_enabled== '1' || feesSettings.gst_enabled == true)\" >\n          <!-- main settings -->\n          <div>\n           \n          </div>\n          <div>\n           \n            <!-- <p class=\"bold_settings\">\n             Accounts Email Sender ID\n            </p>\n             <p class=\"black_settings1\">\n              Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n             </p>\n           \n             <input type=\"text\" class=\"input\" name=\"\" placeholder=\"Tax(&)\"> -->\n             <p class=\"bold_settings\">\n              Tax Type\n               </p>\n                <p class=\"black_settings1\">\n                 Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n                </p>\n   \n                <select class=\"input\" name=\"tax_type\" id=\"tax_type\" [(ngModel)]=\"feesSettings.tax_type\">\n                  <option value=\"\">Select </option>\n                  <option value=\"Tax\" selected>Tax(%)</option>\n                  <option value=\"Vat\">Vat(%)</option>\n                 \n                  </select>\n          </div>\n          \n        </div>\n        <!--according to abhishek sir no need to display on ui-->\n        <div class=\"flex1\" *ngIf=\"(feesSettings.gst_enabled== '1' || feesSettings.gst_enabled == true)\">\n          <!-- main settings -->\n          <div>\n            \n          </div>\n          <div>\n           \n            <p class=\"bold_settings\">\n            Enable Tax Applicable (Fee Installments)\n            </p>\n             <p class=\"black_settings\">\n              Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n             </p>\n           \n            \n          </div>\n          <div class=\"toggle s_toggle\">\n            <span>\n              <span class=\"off\">OFF</span>\n              <label class=\"switch\">\n                <input type=\"checkbox\" [(ngModel)]=\"feesSettings.enable_tax_applicable_fee_installments\" name=\"enable_tax_applicable_fee_installments\"  checked>\n                <span class=\"slider round\"></span>\n              </label>\n              <span class=\"on\">ON</span>\n            </span>\n            \n          </div>\n        </div>\n        <div class=\"sep_line\" *ngIf=\"(feesSettings.gst_enabled== '1' || feesSettings.gst_enabled == true)\"></div>\n        <div class=\"flex1\">\n          <!-- main settings -->\n          <div>\n            <span class=\"ellipse hidden\">T</span><span class=\"blue_line hidden\"></span>\n          </div>\n          <div>\n           \n            <p class=\"bold_settings\">\n            Use Fee Templates\n            </p>\n             <p class=\"black_settings\">\n              Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n             </p>\n           \n            \n          </div>\n          <div class=\"toggle s_toggle\">\n            <span>\n              <span class=\"off\">OFF</span>\n              <label class=\"switch\">\n                <input type=\"checkbox\" [(ngModel)]=\"feesSettings.enable_fee_templates\" name=\"enable_fee_templates\"  checked>\n                <span class=\"slider round\"></span>\n              </label>\n              <span class=\"on\">ON</span>\n            </span>\n            \n          </div>\n        </div>\n        \n        <div class=\"flex1\">\n          <!-- main settings -->\n          <div>\n            <span class=\"ellipse hidden\">T</span><span class=\"blue_line hidden\"></span>\n          </div>\n          <div>\n           \n            <!-- <p class=\"bold_settings\">\n           GSTIN\n            </p>\n             <p class=\"black_settings1\">\n              Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n             </p>\n           \n            <input type=\"text\" class=\"input\" [(ngModel)]=\"feesSettings.gst_in\" name=\"gst_in\" placeholder=\"\"> -->\n          </div>\n        </div>\n        <div class=\"sep_line\" *ngIf=\"(feesSettings.gst_enabled== '1' || feesSettings.gst_enabled == true)\"></div>\n        <div class=\"flex1\" *ngIf=\"(feesSettings.gst_enabled== '1' || feesSettings.gst_enabled == true)\">\n          <!-- main settings -->\n          <div>\n            <span class=\"ellipse hidden\">T</span><span class=\"blue_line hidden\"></span>\n          </div>\n          <div   >\n           \n            <p class=\"bold_settings\">\n           CGST (%)\n            </p>\n             <p class=\"black_settings1\">\n              Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n             </p>\n           \n            <input type=\"text\" class=\"input\" placeholder=\"\" [(ngModel)]=\"feesSettings.cgst\" name=\"cgst\">\n          </div>\n        </div>\n        <div class=\"sep_line\" *ngIf=\"(feesSettings.gst_enabled== '1' || feesSettings.gst_enabled == true)\"></div>\n        <div class=\"flex1\"  *ngIf=\"(feesSettings.gst_enabled== '1' || feesSettings.gst_enabled == true)\">\n          <!-- main settings -->\n          <div>\n            <span class=\"ellipse hidden\">T</span><span class=\"blue_line hidden\"></span>\n          </div>\n          <div >\n           \n            <p class=\"bold_settings\">\n          SGST (%)\n            </p>\n             <p class=\"black_settings1\">\n              Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n             </p>\n           \n            <input type=\"text\" class=\"input\" placeholder=\"\" [(ngModel)]=\"feesSettings.sgst\" name=\"sgst\">\n          </div>\n        </div>\n        <div class=\"sep_line\" *ngIf=\"(feesSettings.gst_enabled== '1' || feesSettings.gst_enabled == true)\"></div>\n        <div class=\"flex1\">\n          <!-- main settings -->\n          <div>\n            <span class=\"ellipse hidden\">T</span><span class=\"blue_line hidden\"></span>\n          </div>\n          <div>\n           \n            <p class=\"bold_settings\">\n          GST No For Fee Receipt\n            </p>\n             <p class=\"black_settings1\">\n              Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n             </p>\n           \n            <input type=\"text\" class=\"input\" placeholder=\"\" name=\"Number\">\n          </div>\n        </div>\n        <div class=\"sep_line\" *ngIf=\"(feesSettings.gst_enabled== '1' || feesSettings.gst_enabled == true)\"></div>\n        <div class=\"flex1\">\n          <!-- main settings -->\n          <div>\n            <span class=\"ellipse hidden\">T</span><span class=\"blue_line hidden\"></span>\n          </div>\n          <div>\n           \n            <p class=\"bold_settings\">\n          CIN (Customer identification Number)\n            </p>\n             <p class=\"black_settings1\">\n              Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n             </p>\n           \n            <input type=\"text\" class=\"input\" [(ngModel)]=\"feesSettings.cin\"   placeholder=\"\" name=\"cin\">\n          </div>\n        </div>\n        <div class=\"sep_line\"></div>\n        <div class=\"flex1\">\n          <!-- main settings -->\n          <div>\n            <span class=\"ellipse hidden\">T</span><span class=\"blue_line hidden\"></span>\n          </div>\n          <div>\n           \n            <p class=\"bold_settings\">\n          Service Code (For Fee Receipt)\n            </p>\n             <p class=\"black_settings1\">\n              Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n             </p>\n           \n            <input type=\"text\" class=\"input\"  [(ngModel)]=\"feesSettings.service_code\" placeholder=\"\" id=\"service_code\" name=\"service_code\">\n          </div>\n        </div>\n        <div class=\"sep_line\"></div>\n        <div class=\"flex1\">\n          <!-- main settings -->\n          <div>\n            <span class=\"ellipse hidden\">T</span><span class=\"blue_line hidden\"></span>\n          </div>\n          <div>\n           \n            <p class=\"bold_settings\">\n         Accounting Code (For Fee Receipt)\n            </p>\n             <p class=\"black_settings1\">\n              Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n             </p>\n           \n            <input type=\"text\" class=\"input\" [(ngModel)]=\"feesSettings.accounting_code\" placeholder=\"\" name=\"accounting_code\">\n          </div>\n        </div>\n        <div class=\"sep_line\"></div>\n        <div class=\"flex1\">\n          <!-- main settings -->\n          <div>\n            <span class=\"ellipse hidden\">T</span><span class=\"blue_line hidden\"></span>\n          </div>\n          <div>\n           \n            <p class=\"bold_settings\">\n            State Code (For Fee Receipt)\n            </p>\n             <p class=\"black_settings1\">\n              Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n             </p>\n           \n            <input type=\"text\" class=\"input\" placeholder=\"\" id=\"state_code\" [(ngModel)]=\"feesSettings.state_code\" name=\"state_code\">\n          </div>\n        </div>\n        <div class=\"sep_line\"></div>\n        <div class=\"flex1\">\n          <!-- main settings -->\n          <div>\n            <span class=\"ellipse hidden\">T</span><span class=\"blue_line hidden\"></span>\n          </div>\n          <div>\n           \n            <p class=\"bold_settings\">\n            Tax Payable on reverse charge basis (For  Fee Receipt)\n            </p>\n             <p class=\"black_settings\">\n              Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n             </p>\n          </div>\n           <div class=\"toggle s_toggle\">\n            <span>\n              <span class=\"off\">OFF</span>\n              <label class=\"switch\">\n                <input type=\"checkbox\"   [(ngModel)]=\"feesSettings.tax_payable_on_reverse_charge_basis\" name=\"tax_payable_on_reverse_charge_basis\" id=\"taxPayEnable\" checked>\n                <span class=\"slider round\"></span>\n              </label>\n              <span class=\"on\">ON</span>\n            </span>\n            \n          </div>\n        </div>\n        <div class=\"sep_line\"></div>\n        <div class=\"flex1\" id=\"section5\">\n          <!-- main settings -->\n          <div>\n            <span class=\"ellipse \">R</span><span class=\"blue_line \"></span>\n          </div>\n          <div>\n           <p class=\"blue_settings\">\n             Receipt Setting\n           </p>\n            <p class=\"bold_settings\">\n            Fee Receipt Invoice No. Prefix\n            </p>\n             <p class=\"black_settings1\">\n              Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n             </p>\n           \n            <input type=\"text\" class=\"input\"  [(ngModel)]=\"feesSettings.fee_receipt_prefix\" name=\"fee_receipt_prefix\" id=\"fee_receipt_prefix\" placeholder=\"\" >\n          </div>\n        </div>\n        <div class=\"sep_line\"></div>\n        <div class=\"flex1\">\n          <!-- main settings -->\n          <div>\n            <span class=\"ellipse hidden\">T</span><span class=\"blue_line hidden\"></span>\n          </div>\n          <div>\n           \n            <p class=\"bold_settings\">\n          Enable Fee Receipt Invoice No. (Financial Year Wise)\n            </p>\n             <p class=\"black_settings\">\n              Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n             </p>\n          </div>\n           <div class=\"toggle s_toggle\">\n            <span>\n              <span class=\"off\">OFF</span>\n              <label class=\"switch\">\n                <input type=\"checkbox\"[(ngModel)]=\"feesSettings.enable_fee_receipt_fy_wise\" name=\"enable_fee_receipt_fy_wise\" id=\"enable_fee_receipt_fy_wise\" >\n                <span class=\"slider round\"></span>\n              </label>\n              <span class=\"on\">ON</span>\n            </span>\n            \n          </div>\n        </div>\n        <div class=\"sep_line\"></div>\n        <div class=\"flex1\">\n          <!-- main settings -->\n          <div>\n            <span class=\"ellipse hidden\">T</span><span class=\"blue_line hidden\"></span>\n          </div>\n          <div>\n           \n            <p class=\"bold_settings\">\n         Enable Fee Template. (Country Wise)? \n            </p>\n             <p class=\"black_settings\">\n              Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n             </p>\n          </div>\n           <div class=\"toggle s_toggle\">\n            <span>\n              <span class=\"off\">OFF</span>\n              <label class=\"switch\">\n                <input type=\"checkbox\" [(ngModel)]=\"feesSettings.enable_fee_template_country_wise\" name=\"enable_fee_template_country_wise\" id=\"enable_fee_template_country_wise\" >\n                <span class=\"slider round\"></span>\n              </label>\n              <span class=\"on\">ON</span>\n            </span>\n            \n          </div>\n        </div>\n        <!-- <div class=\"sep_line\"></div> -->\n        <!-- <div class=\"flex1\">\n         \n          <div>\n           \n          </div>\n          <div>\n           \n            <p class=\"bold_settings\">\n           Fee Logo URL\n            </p>\n            <div>\n            <input type=\"text\" class=\"input\"  placeholder=\"\" name=\"\">\n          </div>\n          </div>\n          <div class=\"flex\">\n            <div class=\"or bold_settings\">OR</div>\n            <div style=\"margin-left:20px;\">\n              <p class=\"size\">\n                (Size 300X200)\n              </p>\n              <input type=\"file\" id=\"fileUpload\" [disabled]=\"feesSettings.logo_url!='' && feesSettings.logo_url!=null\"\n              accept=\"image/gif,image/jpeg,image/jpg,image/png\"   name=\"slotNew\" [(ngModel)]=\"feesSettings.logo_url\" id=\"logo_url\">\n              <!-- <button class=\"blue_button\">Choose File</button> \n            </div>\n          </div>\n       \n        </div>\n        <div class=\"flex3\" style=\"float:left;\">\n         <span>Home_banner_01.Jpeg <img src=\"{{feesSettings.logo_url}}\"></span>&nbsp;&nbsp; \n          <span (click)=\"clearFile()\" style=\"color:red;\">X</span>\n        </div> -->\n        <div class=\"flex3\">\n         \n        </div>\n        <br>\n        <div class=\"sep_line\"></div>\n        <div class=\"flex1\">\n          <div>\n            <div>\n            <span class=\"ellipse hidden\">T</span><span class=\"blue_line hidden\"></span>\n          </div>\n          </div>\n          <div>\n             <div class=\"flex2\">\n            <div class=\"w40\">\n             \n                <p class=\"bold_settings\">\n                Fee Receipt Starting No.\n                </p>\n                 <p class=\"black_settings1\">\n                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n                 </p>\n                 <input type=\"text\" class=\"input width_small\" [(ngModel)]=\"feesSettings.fee_receipt_invoice_pattern\" name=\"fee_receipt_invoice_pattern\" id=\"fee_receipt_invoice_pattern\">\n            </div>\n            <div class=\"w40\">\n              \n                <p class=\"bold_settings\">\n                  Contact Number to display on fee Receipt\n                </p>\n                 <p class=\"black_settings1\">\n                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n                 </p>\n                 <input type=\"text\" class=\"input width_small\" [(ngModel)]=\"feesSettings.phone_no_fee_receipt\" name=\"phone_no_fee_receipt\" id=\"phone_no_fee_receipt\">\n            </div>\n          </div>\n          <div class=\"flex2\">\n              <div class=\"w40\">\n                  \n                <p class=\"bold_settings\">\n                   Pan Card No. (For Fee Receipt)\n                </p>\n                 <p class=\"black_settings1\">\n                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n                 </p>\n                 <input type=\"text\" class=\"input width_small\" [(ngModel)]=\"feesSettings.inst_pan_no\" name=\"inst_pan_no\" id=\"inst_pan_no\">\n              </div>\n              <!-- <div class=\"w40\">\n                  \n                <p class=\"bold_settings\">\n                Contact Number to display on fee Receipt\n                </p>\n                 <p class=\"black_settings1\">\n                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n                 </p>\n                 <input type=\"text\" class=\"input width_small\" name=\"\">\n              </div> -->\n          </div>\n          </div>\n        </div>\n        <div class=\"sep_line\"></div>\n        <div class=\"flex1\">\n          <!-- main settings -->\n          <div>\n            <span class=\"ellipse hidden\">T</span><span class=\"blue_line hidden\"></span>\n          </div>\n          <div>\n           \n            <p class=\"bold_settings\">\n          Enable to Show Fee Details In Student  App \n            </p>\n             <p class=\"black_settings\">\n              Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n             </p>\n          </div>\n           <div class=\"toggle s_toggle\">\n            <span>\n              <span class=\"off\">OFF</span>\n              <label class=\"switch\">\n                <input type=\"checkbox\" [(ngModel)]=\"feesSettings.student_report_card_fee_module\" name=\"student_report_card_fee_module\" id=\"student_report_card_fee_module\">\n                <span class=\"slider round\"></span>\n              </label>\n              <span class=\"on\">ON</span>\n            </span>\n            \n          </div>\n        </div>\n        <div class=\"sep_line\"></div>\n        <div class=\"flex1\">\n          <!-- main settings -->\n          <div>\n            <span class=\"ellipse hidden\">T</span><span class=\"blue_line hidden\"></span>\n          </div>\n          <div>\n           \n            <p class=\"bold_settings\">\n          Show Balance Amount In Fee Receipt\n            </p>\n             <p class=\"black_settings\">\n              Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n             </p>\n          </div>\n           <div class=\"toggle s_toggle\">\n            <span>\n              <span class=\"off\">OFF</span>\n              <label class=\"switch\">\n                <input type=\"checkbox\"  [(ngModel)]=\"feesSettings.balance_amount_in_fee_receipt\" name=\"balance_amount_in_fee_receipt\" id=\"balance_amount_in_fee_receipt\">\n                <span class=\"slider round\"></span>\n              </label>\n              <span class=\"on\">ON</span>\n            </span>\n            \n          </div>\n        </div>\n        <div class=\"sep_line\"></div>\n        <div class=\"flex1\">\n          <!-- main settings -->\n          <div>\n           \n          </div>\n          <div>\n           \n            <p class=\"bold_settings\">\n          Show Discount Amount in Fee Receipt\n            </p>\n             <p class=\"black_settings\">\n              Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n             </p>\n          </div>\n           <div class=\"toggle s_toggle\">\n            <span>\n              <span class=\"off\">OFF</span>\n              <label class=\"switch\">\n                <input type=\"checkbox\" [(ngModel)]=\"feesSettings.discount_amount_in_fee_receipt\" name=\"discount_amount_in_fee_receipt\" id=\"discount_amount_in_fee_receipt\">\n                <span class=\"slider round\"></span>\n              </label>\n              <span class=\"on\">ON</span>\n            </span>\n            \n          </div>\n        </div>\n        <div class=\"sep_line\"></div>\n        <div class=\"flex1\">\n          <!-- main settings -->\n          <div>\n          \n          </div>\n          <div>\n           \n            <p class=\"bold_settings\">\n         Show Amount in fee due reminder SMS\n            </p>\n             <p class=\"black_settings\">\n              Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n             </p>\n          </div>\n           <div class=\"toggle s_toggle\">\n            <span>\n              <span class=\"off\">OFF</span>\n              <label class=\"switch\">\n                <input type=\"checkbox\"  [(ngModel)]=\"feesSettings.allow_fee_due_amount_in_notification\" name=\"allow_fee_due_amount_in_notification\" id=\"allow_fee_due_amount_in_notification\">\n                <span class=\"slider round\"></span>\n              </label>\n              <span class=\"on\">ON</span>\n            </span>\n            \n          </div>\n        </div>\n        <div class=\"sep_line\"></div>\n        <div class=\"flex1\">\n          <!-- main settings -->\n          <div>\n          \n          </div>\n          <div>\n           \n            <p class=\"bold_settings\">\n         Show Due Date in Fee Receipt\n            </p>\n             <p class=\"black_settings\">\n              Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n             </p>\n          </div>\n           <div class=\"toggle s_toggle\">\n            <span>\n              <span class=\"off\">OFF</span>\n              <label class=\"switch\">\n                <input type=\"checkbox\" [(ngModel)]=\"feesSettings.due_date_in_fee_receipt\" name=\"due_date_in_fee_receipt\" id=\"due_date_in_fee_receipt\">\n                <span class=\"slider round\"></span>\n              </label>\n              <span class=\"on\">ON</span>\n            </span>\n            \n          </div>\n        </div>\n        <div class=\"sep_line\"></div>\n        <div class=\"flex1\">\n          <!-- main settings -->\n          <div>\n            \n          </div>\n          <div>\n            \n            <p class=\"bold_settings\">\n         Show Councellor Name in Fee Receipt\n            </p>\n             <p class=\"black_settings\">\n              Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n             </p>\n          </div>\n           <div class=\"toggle s_toggle\">\n            <span>\n              <span class=\"off\">OFF</span>\n              <label class=\"switch\">\n                <input type=\"checkbox\" [(ngModel)]=\"feesSettings.show_counseller_name_in_fee_receipt\" name=\"show_counseller_name_in_fee_receipt\" id=\"show_counseller_name_in_fee_receipt\">\n                <span class=\"slider round\"></span>\n              </label>\n              <span class=\"on\">ON</span>\n            </span>\n            \n          </div>\n        </div>\n        <div class=\"sep_line\"></div>\n        <div class=\"flex1\">\n          <!-- main settings -->\n          <div>\n           \n          </div>\n          <div>\n           \n            <p class=\"bold_settings\">\n          Show Total Due Amount in fee Receipt\n            </p>\n             <p class=\"black_settings\">\n              Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n             </p>\n          </div>\n           <div class=\"toggle s_toggle\">\n            <span>\n              <span class=\"off\">OFF</span>\n              <label class=\"switch\">\n                <input type=\"checkbox\" [(ngModel)]=\"feesSettings.show_total_dues_in_fee_receipt\" name=\"show_total_dues_in_fee_receipt\" id=\"show_total_dues_in_fee_receipt\">\n                <span class=\"slider round\"></span>\n              </label>\n              <span class=\"on\">ON</span>\n            </span>\n            \n          </div>\n        </div>\n        <div class=\"sep_line\"></div>\n        <div class=\"flex1\">\n          <!-- main settings -->\n          <div>\n           \n          </div>\n          <div>\n           \n            <p class=\"bold_settings\">\n         Show Master Course in fee receipt\n            </p>\n             <p class=\"black_settings\">\n              Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n             </p>\n          </div>\n           <div class=\"toggle s_toggle\">\n            <span>\n              <span class=\"off\">OFF</span>\n              <label class=\"switch\">\n                <input type=\"checkbox\"  [(ngModel)]=\"feesSettings.show_master_course_in_fee_receipt\" name=\"show_master_course_in_fee_receipt\" id=\"show_master_course_in_fee_receipt\">\n                <span class=\"slider round\"></span>\n              </label>\n              <span class=\"on\">ON</span>\n            </span>\n            \n          </div>\n        </div>\n        <div class=\"sep_line\"></div>\n        <div class=\"flex1\">\n          <!-- main settings -->\n          <div>\n            \n          </div>\n          <div>\n           \n            <p class=\"bold_settings\">\n         Show Course in fee receipt\n            </p>\n             <p class=\"black_settings\">\n              Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n             </p>\n          </div>\n           <div class=\"toggle s_toggle\">\n            <span>\n              <span class=\"off\">OFF</span>\n              <label class=\"switch\">\n                <input type=\"checkbox\" [(ngModel)]=\"feesSettings.show_course_in_fee_receipt\" name=\"show_course_in_fee_receipt\" id=\"show_course_in_fee_receipt\">\n                <span class=\"slider round\"></span>\n              </label>\n              <span class=\"on\">ON</span>\n            </span>\n            \n          </div>\n        </div>\n        <div class=\"sep_line\"></div>\n        <div class=\"flex1\" id=\"section6\">\n          <!-- main settings -->\n          <div>\n            <span class=\"ellipse\">F</span><span class=\"blue_line\"></span>\n          </div>\n          <div>\n            <p class=\"blue_settings\">\n            Fee Notification Setting \n            </p>\n            <p class=\"bold_settings\">\n            Fee Reminder- On Due Date \n            </p>\n            <div class=\"flex\">\n               <div class=\"flex\">\n                 <div>\n                   <label class=\"checkbox\">\n                      <span class=\"checkbox__input\">\n                        <input type=\"checkbox\" checked name=\"fee_dues_daily_notification.student\"  [(ngModel)]=\"feesSettings.fee_dues_daily_notification.student\">\n                        <span class=\"checkbox__control\">\n                         <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                            <path fill=\"none\" stroke=\"currentColor\"  d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                        </span>\n                      </span>\n                    </label>\n                 </div>\n                  <div>\n                   <p class=\"settings_label\">\n                    Student \n                   </p>\n                 </div>\n               </div>\n                <div class=\"flex\">\n                 <div>\n                   <label class=\"checkbox\">\n                      <span class=\"checkbox__input\">\n                        <input type=\"checkbox\" name=\"fee_dues_daily_notification.parent\" checked [(ngModel)]=\"feesSettings.fee_dues_daily_notification.parent\">\n                        <span class=\"checkbox__control\">\n                         <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                            <path fill=\"none\" stroke=\"currentColor\"  d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                        </span>\n                      </span>\n                    </label>\n                 </div>\n                  <div>\n                   <p class=\"settings_label\">\n                    Parent\n                   </p>\n                 </div>\n               </div>\n               <div class=\"flex\">\n                 <div>\n                   <label class=\"checkbox\">\n                      <span class=\"checkbox__input\">\n                        <input type=\"checkbox\" checked name=\"fee_dues_daily_notification.gaurdian\"  [(ngModel)]=\"feesSettings.fee_dues_daily_notification.gaurdian\">\n                        <span class=\"checkbox__control\">\n                         <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                            <path fill=\"none\" stroke=\"currentColor\"  d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                        </span>\n                      </span>\n                    </label>\n                 </div>\n                  <div>\n                   <p class=\"settings_label\">\n                   Guardian \n                   </p>\n                 </div>\n               </div>\n               <div class=\"flex\" *ngIf=\"!disabled\">\n                 <div *ngIf=\"!disabled\">\n                   <label class=\"checkbox\">\n                      <span class=\"checkbox__input\">\n                        <input type=\"checkbox\" name=\"checked\" checked=\"\">\n                        <span class=\"checkbox__control\">\n                         <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                            <path fill=\"none\" stroke=\"currentColor\"  d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                        </span>\n                      </span>\n                    </label>\n                 </div>\n                  <div>\n                   <p class=\"settings_label\">\n                    Faculty  \n                   </p>\n                 </div>\n               </div>\n               <div class=\"flex\" *ngIf=\"!disabled\">\n                 <div>\n                   <label class=\"checkbox\">\n                      <span class=\"checkbox__input\">\n                        <input type=\"checkbox\" name=\"checked\" checked=\"\">\n                        <span class=\"checkbox__control\">\n                         <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                            <path fill=\"none\" stroke=\"currentColor\"  d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                        </span>\n                      </span>\n                    </label>\n                 </div>\n                  <div>\n                   <p class=\"settings_label\">\n                  Admin\n                   </p>\n                 </div>\n               </div>\n             </div>\n          </div>\n           <div class=\"toggle\">\n           \n          </div>\n        </div>\n        <div class=\"sep_line\"></div>\n        <div class=\"flex1\">\n          <!-- main settings -->\n          <div>\n            <span class=\"ellipse hidden\">T</span><span class=\"blue_line hidden\"></span>\n          </div>\n          <div>\n            \n            <p class=\"bold_settings\">\n            Fee Reminder- Post Due Date\n            </p>\n            <div class=\"flex\">\n               <div class=\"flex\">\n                 <div>\n                   <label class=\"checkbox\">\n                      <span class=\"checkbox__input\">\n                        <input type=\"checkbox\" name=\"checked\"    [(ngModel)]=\"feesSettings.fee_dues_interval_notification.student\" checked=\"\">\n                        <span class=\"checkbox__control\">\n                         <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                            <path fill=\"none\" stroke=\"currentColor\"  d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                        </span>\n                      </span>\n                    </label>\n                 </div>\n                  <div>\n                   <p class=\"settings_label\">\n                    Student \n                   </p>\n                 </div>\n               </div>\n                <div class=\"flex\">\n                 <div>\n                   <label class=\"checkbox\">\n                      <span class=\"checkbox__input\">\n                        <input type=\"checkbox\" [(ngModel)]=\"feesSettings.fee_dues_interval_notification.parent\" name=\"checked\" checked=\"\">\n                        <span class=\"checkbox__control\">\n                         <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                            <path fill=\"none\" stroke=\"currentColor\"  d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                        </span>\n                      </span>\n                    </label>\n                 </div>\n                  <div>\n                   <p class=\"settings_label\">\n                    Parent\n                   </p>\n                 </div>\n               </div>\n               <div class=\"flex\">\n                 <div>\n                   <label class=\"checkbox\">\n                      <span class=\"checkbox__input\">\n                        <input type=\"checkbox\" name=\"checked\"  [(ngModel)]=\"feesSettings.fee_dues_interval_notification.gaurdian\" checked=\"\">\n                        <span class=\"checkbox__control\">\n                         <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                            <path fill=\"none\" stroke=\"currentColor\"  d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                        </span>\n                      </span>\n                    </label>\n                 </div>\n                  <div>\n                   <p class=\"settings_label\">\n                   Guardian \n                   </p>\n                 </div>\n               </div>\n             </div>\n          </div>\n           <div class=\"toggle\">\n           \n          </div>\n        </div>\n\n        <div class=\"sep_line\"></div>\n        <div class=\"flex1\">\n          <!-- main settings -->\n          <div>\n            <span class=\"ellipse hidden\">T</span><span class=\"blue_line hidden\"></span>\n          </div>\n          <div>\n            \n            <p class=\"bold_settings\">\n            Fee Reminder- Pre Due Date\n            </p>\n            <div class=\"flex\">\n               <div class=\"flex\">\n                 <div>\n                   <label class=\"checkbox\">\n                      <span class=\"checkbox__input\">\n                        <input type=\"checkbox\" name=\"checked\"     [(ngModel)]=\"feesSettings.pre_fee_dues_interval_notification.student\" checked=\"\">\n                        <span class=\"checkbox__control\">\n                         <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                            <path fill=\"none\" stroke=\"currentColor\"  d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                        </span>\n                      </span>\n                    </label>\n                 </div>\n                  <div>\n                   <p class=\"settings_label\">\n                    Student \n                   </p>\n                 </div>\n               </div>\n                <div class=\"flex\">\n                 <div>\n                   <label class=\"checkbox\">\n                      <span class=\"checkbox__input\">\n                        <input type=\"checkbox\" name=\"checked\" [(ngModel)]=\"feesSettings.pre_fee_dues_interval_notification.parent\" checked=\"\">\n                        <span class=\"checkbox__control\">\n                         <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                            <path fill=\"none\" stroke=\"currentColor\"  d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                        </span>\n                      </span>\n                    </label>\n                 </div>\n                  <div>\n                   <p class=\"settings_label\">\n                    Parent\n                   </p>\n                 </div>\n               </div>\n               <div class=\"flex\">\n                 <div>\n                   <label class=\"checkbox\">\n                      <span class=\"checkbox__input\">\n                        <input type=\"checkbox\" name=\"checked\"  [(ngModel)]=\"feesSettings.pre_fee_dues_interval_notification.gaurdian\" checked=\"\">\n                        <span class=\"checkbox__control\">\n                         <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                            <path fill=\"none\" stroke=\"currentColor\"  d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                        </span>\n                      </span>\n                    </label>\n                 </div>\n                  <div>\n                   <p class=\"settings_label\">\n                   Guardian \n                   </p>\n                 </div>\n               </div>\n              \n             </div>\n          </div>\n           <div class=\"toggle\">\n           \n          </div>\n        </div>\n        <div class=\"sep_line\"></div>\n        <div class=\"flex1\">\n          <!-- main settings -->\n          <div>\n            <span class=\"ellipse hidden\">T</span><span class=\"blue_line hidden\"></span>\n          </div>\n          <div>\n            \n            <p class=\"bold_settings\">\n            Fee Reminder- To selected Students\n            </p>\n            <div class=\"flex\">\n               <div class=\"flex\">\n                 <div>\n                   <label class=\"checkbox\">\n                      <span class=\"checkbox__input\">\n                        <input type=\"checkbox\" name=\"checked\"  [(ngModel)]=\"feesSettings.student_fee_dues_notification.student\" checked=\"\">\n                        <span class=\"checkbox__control\">\n                         <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                            <path fill=\"none\" stroke=\"currentColor\"  d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                        </span>\n                      </span>\n                    </label>\n                 </div>\n                  <div>\n                   <p class=\"settings_label\">\n                    Student \n                   </p>\n                 </div>\n               </div>\n                <div class=\"flex\">\n                 <div>\n                   <label class=\"checkbox\">\n                      <span class=\"checkbox__input\">\n                        <input type=\"checkbox\" name=\"checked\" [(ngModel)]=\"feesSettings.student_fee_dues_notification.parent\" checked=\"\">\n                        <span class=\"checkbox__control\">\n                         <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                            <path fill=\"none\" stroke=\"currentColor\"  d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                        </span>\n                      </span>\n                    </label>\n                 </div>\n                  <div>\n                   <p class=\"settings_label\">\n                    Parent\n                   </p>\n                 </div>\n               </div>\n               <div class=\"flex\">\n                 <div>\n                   <label class=\"checkbox\">\n                      <span class=\"checkbox__input\">\n                        <input type=\"checkbox\" name=\"checked\" [(ngModel)]=\"feesSettings.student_fee_dues_notification.gaurdian\"  checked=\"\">\n                        <span class=\"checkbox__control\">\n                         <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                            <path fill=\"none\" stroke=\"currentColor\"  d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                        </span>\n                      </span>\n                    </label>\n                 </div>\n                  <div>\n                   <p class=\"settings_label\">\n                   Guardian \n                   </p>\n                 </div>\n               </div>\n              \n             </div>\n          </div>\n           <div class=\"toggle\">\n           \n          </div>\n        </div>\n        <div class=\"sep_line\"></div>\n        <div class=\"flex1\">\n          <!-- main settings -->\n          <div>\n            <span class=\"ellipse hidden\">T</span><span class=\"blue_line hidden\"></span>\n          </div>\n          <div>\n            \n            <p class=\"bold_settings\">\n            Fee Payment Confirmation \n            </p>\n            <div class=\"flex\">\n               <div class=\"flex\">\n                 <div>\n                   <label class=\"checkbox\">\n                      <span class=\"checkbox__input\">\n                        <input type=\"checkbox\" name=\"checked\"  [(ngModel)]=\"feesSettings.fee_payment_notification.student\" checked=\"\">\n                        <span class=\"checkbox__control\">\n                         <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                            <path fill=\"none\" stroke=\"currentColor\" d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                        </span>\n                      </span>\n                    </label>\n                 </div>\n                  <div>\n                   <p class=\"settings_label\">\n                    Student \n                   </p>\n                 </div>\n               </div>\n                <div class=\"flex\">\n                 <div>\n                   <label class=\"checkbox\">\n                      <span class=\"checkbox__input\">\n                        <input type=\"checkbox\" name=\"checked\"  [(ngModel)]=\"feesSettings.fee_payment_notification.parent\" checked=\"\">\n                        <span class=\"checkbox__control\">\n                         <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                            <path fill=\"none\" stroke=\"currentColor\" d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                        </span>\n                      </span>\n                    </label>\n                 </div>\n                  <div>\n                   <p class=\"settings_label\">\n                    Parent\n                   </p>\n                 </div>\n               </div>\n               <div class=\"flex\">\n                 <div>\n                   <label class=\"checkbox\">\n                      <span class=\"checkbox__input\">\n                        <input type=\"checkbox\"   [(ngModel)]=\"feesSettings.fee_payment_notification.gaurdian\" name=\"checked\" checked=\"\">\n                        <span class=\"checkbox__control\">\n                         <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                            <path fill=\"none\" stroke=\"currentColor\" d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                        </span>\n                      </span>\n                    </label>\n                 </div>\n                  <div>\n                   <p class=\"settings_label\">\n                   Guardian \n                   </p>\n                 </div>\n               </div>\n               \n               <div class=\"flex\">\n                 <div>\n                   <label class=\"checkbox\">\n                      <span class=\"checkbox__input\">\n                        <input type=\"checkbox\" name=\"checked\"   [(ngModel)]=\"feesSettings.fee_payment_notification.admin\" checked=\"\">\n                        <span class=\"checkbox__control\">\n                         <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                            <path fill=\"none\" stroke=\"currentColor\" d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                        </span>\n                      </span>\n                    </label>\n                 </div>\n                  <div>\n                   <p class=\"settings_label\">\n                  Admin\n                   </p>\n                 </div>\n               </div>\n             </div>\n          </div>\n           <div class=\"toggle\">\n           \n          </div>\n        </div>\n        <div class=\"sep_line\"></div>\n        <div class=\"flex1\">\n          <!-- main settings -->\n          <div>\n            <span class=\"ellipse hidden\">T</span><span class=\"blue_line hidden\"></span>\n          </div>\n          <div>\n            \n            <p class=\"bold_settings\">\n            Cheque Dishonoured Notification\n            </p>\n            <div class=\"flex\">\n               <div class=\"flex\">\n                 <div>\n                   <label class=\"checkbox\">\n                      <span class=\"checkbox__input\">\n                        <input type=\"checkbox\" name=\"checked\" [(ngModel)]=\"feesSettings.cheque_bounce_sms_notifn.student\" checked=\"\">\n                        <span class=\"checkbox__control\">\n                         <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                            <path fill=\"none\" stroke=\"currentColor\" d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                        </span>\n                      </span>\n                    </label>\n                 </div>\n                  <div>\n                   <p class=\"settings_label\">\n                    Student \n                   </p>\n                 </div>\n               </div>\n                <div class=\"flex\">\n                 <div>\n                   <label class=\"checkbox\">\n                      <span class=\"checkbox__input\">\n                        <input type=\"checkbox\" name=\"checked\"  [(ngModel)]=\"feesSettings.cheque_bounce_sms_notifn.parent\" checked=\"\">\n                        <span class=\"checkbox__control\">\n                         <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                            <path fill=\"none\" stroke=\"currentColor\" d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                        </span>\n                      </span>\n                    </label>\n                 </div>\n                  <div>\n                   <p class=\"settings_label\">\n                    Parent\n                   </p>\n                 </div>\n               </div>\n               <div class=\"flex\">\n                 <div>\n                   <label class=\"checkbox\">\n                      <span class=\"checkbox__input\">\n                        <input type=\"checkbox\" name=\"checked\" [(ngModel)]=\"feesSettings.cheque_bounce_sms_notifn.gaurdian\"  checked=\"\">\n                        <span class=\"checkbox__control\">\n                         <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                            <path fill=\"none\" stroke=\"currentColor\" d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                        </span>\n                      </span>\n                    </label>\n                 </div>\n                  <div>\n                   <p class=\"settings_label\">\n                   Guardian \n                   </p>\n                 </div>\n               </div>\n               \n               <div class=\"flex\">\n                 <div>\n                   <label class=\"checkbox\">\n                      <span class=\"checkbox__input\">\n                        <input type=\"checkbox\" name=\"checked\"  [(ngModel)]=\"feesSettings.cheque_bounce_sms_notifn.admin\"  checked=\"\">\n                        <span class=\"checkbox__control\">\n                         <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                            <path fill=\"none\" stroke=\"currentColor\" d=\"M1.3 12.91l6.37 6.37L22.79 4.59\"></path></svg>\n                        </span>\n                      </span>\n                    </label>\n                 </div>\n                  <div>\n                   <p class=\"settings_label\">\n                  Admin\n                   </p>\n                 </div>\n               </div>\n             </div>\n          </div>\n           <div class=\"toggle\">\n           \n          </div>\n        </div>\n        <div class=\"sep_line\"></div>\n\n\n        <!-- end -->\n      </div>\n    </div>\n    <div class=\"w98\">\n       <div class=\"bottom\">\n          <div class=\"display\">\n            <div>\n              \n            </div>\n            <div>\n              <button class=\"white_button mr10\">Cancel</button>\n              <button class=\"blue_button mr10\" (click)=\"saveFeesSettings()\">Save</button>\n            </div>\n          </div>\n        </div>\n    </div>\n </div>  \n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fee-module/data-setup/menu/menu.component.html":
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fee-module/data-setup/menu/menu.component.html ***!
      \*****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsFeeModuleDataSetupMenuMenuComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"clearFix\" style=\"padding-right: 1%;\">\n  <aside class=\"middle-full\" style=\"padding: 1%\">\n    <h1 class=\"pull-left\" style=\"padding-bottom: 10px\">\n      <a routerLink=\"/view/fee\">\n        Fees\n      </a>\n      <i style=\"font-family: 'FontAwesome';\" class=\"fas fa-angle-right\"></i>\n      Data-setup\n    </h1>\n    <section class=\"middle-main clearFix report-box\" style=\"padding: 0\">\n\n      <div class=\"course-menu-section-container\">\n        <div class=\"course-menu-item\" routerLink=\"./fee-type\">\n          <div class=\"menu-title\">\n            <img src=\"./assets/images/fee/Fee_types.svg\" alt=\"fee types\">\n            <span>Additional Fee Type</span>\n          </div>\n          <div class=\"menu-description\">\n            <span>Define additional fee types for the institution.</span>\n          </div>\n        </div>\n\n        <div class=\"course-menu-item\" routerLink=\"./fee-template\">\n          <div class=\"menu-title\">\n            <img src=\"./assets/images/fee/Fee_template.svg\" alt=\"fee template\">\n            <span>Fee Structure</span>\n          </div>\n          <div class=\"menu-description\">\n            <span>Add / Manage Fee Structure to be assigned to students. </span>\n          </div>\n        </div>\n\n        <div class=\"course-menu-item\" routerLink=\"./discount-reason\">\n          <div class=\"menu-title\">\n            <img src=\"./assets/images/fee/discount_reason.svg\" alt=\"discount reason\">\n            <span> Discount Reason</span>\n          </div>\n          <div class=\"menu-description\">\n            <span>Define discount reasons to be used when giving discounts to students.</span>\n          </div>\n        </div>\n\n\n      </div>\n    </section>\n  </aside>\n</div>";
      /***/
    },

    /***/
    "./src/app/components/fee-module/data-setup/data-setup-routing.module.ts":
    /*!*******************************************************************************!*\
      !*** ./src/app/components/fee-module/data-setup/data-setup-routing.module.ts ***!
      \*******************************************************************************/

    /*! exports provided: DataSetupRoutingModule */

    /***/
    function srcAppComponentsFeeModuleDataSetupDataSetupRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataSetupRoutingModule", function () {
        return DataSetupRoutingModule;
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


      var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! . */
      "./src/app/components/fee-module/data-setup/index.ts");
      /* harmony import */


      var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../guards/auth.guard */
      "./src/app/guards/auth.guard.ts");
      /* harmony import */


      var _fee_types_v2_fee_types_v2_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./fee-types-v2/fee-types-v2.component */
      "./src/app/components/fee-module/data-setup/fee-types-v2/fee-types-v2.component.ts");
      /* harmony import */


      var _fees_settings_fees_settings_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./fees-settings/fees-settings.component */
      "./src/app/components/fee-module/data-setup/fees-settings/fees-settings.component.ts");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var routes = [{
        path: '',
        component: ___WEBPACK_IMPORTED_MODULE_2__["DataSetupComponent"],
        children: [{
          path: '',
          component: _fee_types_v2_fee_types_v2_component__WEBPACK_IMPORTED_MODULE_4__["FeeTypesV2Component"]
        }, {
          path: 'fee-template',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | app-components-fee-module-data-setup-fee-template-fee-template-module */
            "app-components-fee-module-data-setup-fee-template-fee-template-module").then(__webpack_require__.bind(null,
            /*! app/components/fee-module/data-setup/fee-template/fee-template.module */
            "./src/app/components/fee-module/data-setup/fee-template/fee-template.module.ts")).then(function (m) {
              return m.FeeTemplateModule;
            });
          },
          // loadChildren: 'app/components/fee-module/data-setup/fee-template/fee-template.module#FeeTemplateModule',
          canLoad: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
        }, {
          path: 'discount-reason',
          component: ___WEBPACK_IMPORTED_MODULE_2__["DiscountReasonComponent"]
        }, {
          path: 'setting',
          component: _fees_settings_fees_settings_component__WEBPACK_IMPORTED_MODULE_5__["FeesSettingsComponent"]
        }, {
          path: 'fee-type',
          component: _fee_types_v2_fee_types_v2_component__WEBPACK_IMPORTED_MODULE_4__["FeeTypesV2Component"]
        }, {
          path: 'fee-type-v2',
          component: ___WEBPACK_IMPORTED_MODULE_2__["FeeTypesComponent"]
        }, {
          path: 'fee-structure',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | app-components-fee-module-data-setup-fee-structure-fee-structure-module */
            "app-components-fee-module-data-setup-fee-structure-fee-structure-module").then(__webpack_require__.bind(null,
            /*! app/components/fee-module/data-setup/fee-structure/fee-structure.module */
            "./src/app/components/fee-module/data-setup/fee-structure/fee-structure.module.ts")).then(function (m) {
              return m.FeeStructureModule;
            });
          },
          canLoad: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
        }]
      }];

      var DataSetupRoutingModule =
      /** @class */
      function () {
        var DataSetupRoutingModule = function DataSetupRoutingModule() {
          _classCallCheck(this, DataSetupRoutingModule);
        };

        DataSetupRoutingModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })], DataSetupRoutingModule);
        return DataSetupRoutingModule;
      }();
      /***/

    },

    /***/
    "./src/app/components/fee-module/data-setup/data-setup.component.scss":
    /*!****************************************************************************!*\
      !*** ./src/app/components/fee-module/data-setup/data-setup.component.scss ***!
      \****************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsFeeModuleDataSetupDataSetupComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".breadcrumb-item + .breadcrumb-item::before {\n  content: \">\";\n  color: #334D6E;\n}\n\n.breadcrumb {\n  background-color: #fff;\n  margin-bottom: 0px;\n  padding-left: 0;\n}\n\n.breadcrumb-item > a {\n  color: #334D6E;\n  font-weight: 600;\n  font-size: 16px;\n}\n\n.right_ul > li {\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  padding-right: 20px;\n  list-style-type: circle;\n}\n\n.display {\n  display: flex;\n  justify-content: space-between;\n}\n\n.w98 {\n  width: 100%;\n  margin: 0px auto;\n}\n\n.nav-item .nav-link {\n  font-weight: 600;\n  color: #405877;\n  padding-bottom: 8px;\n  cursor: pointer;\n  font-size: 13px;\n  float: left;\n  background: none;\n}\n\n.nav-item .active {\n  border-bottom: 3px solid #109cf1 !important;\n  color: #109cf1 !important;\n}\n\n.nav-link {\n  display: block;\n  padding: 1.5rem 0rem;\n  margin: -1rem 3.5rem;\n  margin-left: 0rem;\n}\n\n.flex {\n  display: flex;\n}\n\n.w15 {\n  width: 15%;\n  background-color: #dfe5f0;\n  padding: 10px;\n}\n\n.list li {\n  background-color: #fff;\n  padding: 7px 0px;\n  margin: 7px 0px;\n}\n\n.list li a span {\n  text-decoration: none;\n  font-size: 10px;\n  font-weight: 500;\n  color: #334d6e;\n}\n\n.list li img {\n  padding: 0px 10px;\n}\n\n.add_master_tag {\n  background-color: #109cf1;\n  color: white;\n  padding: 10px 20px;\n  font-size: 12px;\n  border: none;\n  border-radius: 5px;\n  margin-top: 15px;\n  margin-left: 10px;\n  font-weight: 600;\n}\n\nselect {\n  padding: 10px 20px;\n  margin: 8px 0;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-size: 10px;\n  font-weight: 500;\n  background-color: #f5f6f8;\n}\n\n.input {\n  margin-top: 15px;\n  margin-left: 10px;\n  padding: 10px 20px;\n  font-size: 12px;\n  padding: 10px 20px;\n  margin: 8px 0;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-size: 12px;\n  font-weight: 500;\n  /*background-color: #f5f6f8;\n  */\n}\n\n.magnifying-glass {\n  background-image: url('Frame1.svg');\n  background-repeat: no-repeat;\n  background-position: left center;\n  text-indent: 5px;\n}\n\n.header-input {\n  padding: 10px 20px;\n  font-size: 12px;\n  padding: 10px 20px;\n  margin: 8px 0;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-size: 10px;\n  font-weight: 600;\n  width: 700px;\n  color: #61758e;\n  background-image: url('Frame1.svg');\n  background-repeat: no-repeat;\n  background-position: left center;\n  /*background-color: #f5f6f8;*/\n}\n\n.header-input::-moz-placeholder {\n  padding-left: 10px;\n}\n\n.header-input:-ms-input-placeholder {\n  padding-left: 10px;\n}\n\n.header-input::placeholder {\n  padding-left: 10px;\n}\n\n.main-shadow {\n  box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  -webkit-box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  -moz-box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  padding-bottom: 15px;\n}\n\n.p-15 {\n  padding-bottom: 15px;\n}\n\nselect {\n  width: 250px;\n  color: #b6b8bb;\n}\n\ntable {\n  width: 100%;\n  font-size: 12px;\n  font-weight: 500;\n  margin-top: 15px;\n}\n\nthead {\n  background-color: #DFE5F0;\n  font-weight: 600;\n}\n\nthead td {\n  background: #DFE5F0;\n}\n\ntd {\n  padding: 10px 15px;\n  color: #323C47;\n  font-size: 12px;\n}\n\ntbody {\n  font-weight: 500;\n}\n\ntr {\n  box-shadow: -1px 1px 6px 0px rgba(0, 0, 0, 0.1);\n  -webkit-box-shadow: -1px 1px 6px 0px rgba(0, 0, 0, 0.1);\n  -moz-box-shadow: -1px 1px 6px 0px rgba(0, 0, 0, 0.1);\n}\n\n.section::before {\n  height: 0.4em;\n  display: table-row;\n  content: '';\n}\n\n.w96 {\n  width: calc(100% - 1rem);\n}\n\n.p-10 {\n  padding-top: 10px;\n}\n\n.p-30 {\n  padding-top: 30px;\n}\n\n.p-10-0 {\n  padding: 9px 0px;\n}\n\n.yes {\n  background-color: #CCFFAC;\n  color: #323C47;\n  padding: 5px 20px;\n  border-radius: 6px;\n}\n\n.no {\n  background-color: #FFCF88;\n  color: #323C47;\n  padding: 5px 20px;\n  border-radius: 6px;\n}\n\n.search {\n  background-color: #109CF1;\n  color: white;\n  padding: 10px 20px;\n  font-size: 12px;\n  border: none;\n  border-radius: 5px;\n  margin-top: 8px;\n  margin-left: 10px;\n  font-weight: 600;\n}\n\n.area-select {\n  font-size: 12px;\n  color: #787A7D;\n}\n\n.input-width {\n  width: 180px;\n}\n\n.pl-10 {\n  padding-left: 10px;\n}\n\n.pr-40 {\n  padding-right: 40px;\n}\n\n.cancel {\n  background-color: #fff;\n  border: 1px solid #109CF1;\n  color: #109CF1;\n  padding: 9px 15px;\n  font-size: 12px;\n  border-radius: 5px;\n  margin-top: 8px;\n  margin-left: 10px;\n  font-weight: 600;\n}\n\n.form-check-label {\n  margin-bottom: 0;\n  color: #334D6E;\n  font-size: 12px;\n  font-weight: 600;\n}\n\n.width205 {\n  width: 205px;\n}\n\n.description {\n  width: 200px;\n  margin: 0px 10px;\n}\n\ninput[type=\"date\"]::-webkit-calendar-picker-indicator {\n  color: rgba(0, 0, 0, 0);\n  opacity: 1;\n  display: block;\n  background: url('Icon.svg') no-repeat;\n  width: 20px;\n  height: 20px;\n  border-width: thin;\n  padding: 2px 0px;\n}\n\ninput[type=\"date\"] {\n  padding: 6px 4px;\n  margin-right: 10px;\n}\n\n.add {\n  background-color: #109CF1;\n  color: white;\n  padding: 10px 20px;\n  font-size: 12px;\n  border: none;\n  border-radius: 5px;\n  font-weight: 600;\n}\n\n.mr-10 {\n  margin-right: 10px;\n}\n\n.center {\n  text-align: center;\n}\n\n.gray {\n  background-color: #F4F3F8;\n  height: 92vh;\n}\n\n/*chatbox*/\n\n.chatbox1 {\n  width: 466px;\n  text-align: center;\n  background-color: #29ACFC;\n  color: #fff;\n  border-radius: 2rem 2rem 0rem 2rem;\n  padding: 8px 0px;\n  font-size: 13px;\n  font-weight: 500;\n}\n\n.chatbox2 {\n  width: 1153px;\n  border-radius: 2rem 2rem 0rem 2rem;\n  background-color: #fff;\n  padding: 10px 0px;\n  font-size: 10px;\n  font-weight: 500;\n}\n\n.chatbox3 {\n  width: 466px;\n  text-align: center;\n  background-color: #29ACFC;\n  color: #fff;\n  border-radius: 2rem 2rem 0rem 2rem;\n  padding: 8px 0px;\n  font-size: 13px;\n  font-weight: 500;\n}\n\n.chatbox4 {\n  width: 1153px;\n  border-radius: 2rem 2rem 0rem 2rem;\n  background-color: #fff;\n  padding: 10px 0px;\n  font-size: 10px;\n  font-weight: 500;\n}\n\n.chatbox5 {\n  width: 466px;\n  text-align: center;\n  background-color: #29ACFC;\n  color: #fff;\n  border-radius: 2rem 2rem 0rem 2rem;\n  padding: 8px 0px;\n  font-size: 13px;\n  font-weight: 500;\n}\n\n.chatbox6 {\n  width: 1033px;\n  border-radius: 2rem 2rem 0rem 2rem;\n  background-color: #fff;\n  padding: 10px 0px;\n  font-size: 10px;\n  font-weight: 500;\n}\n\n.chatbox7 {\n  width: 90px;\n  text-align: center;\n  background-color: #29ACFC;\n  color: #fff;\n  border-radius: 2rem 2rem 0rem 2rem;\n  padding: 8px 0px;\n  font-size: 13px;\n  font-weight: 500;\n}\n\n.chatbox8 {\n  width: 466px;\n  text-align: center;\n  background-color: #29ACFC;\n  color: #fff;\n  border-radius: 2rem 2rem 0rem 2rem;\n  padding: 8px 0px;\n  font-size: 13px;\n  font-weight: 500;\n}\n\n.chatbox9 {\n  width: 819px;\n  border-radius: 2rem 2rem 0rem 2rem;\n  background-color: #fff;\n  padding: 10px 0px;\n  font-size: 10px;\n  font-weight: 500;\n}\n\n.chatbox-select {\n  font-size: 10px;\n}\n\n.chatbox-input {\n  margin-top: 15px;\n  margin-left: 10px;\n  padding: 10px 20px;\n  font-size: 12px;\n  padding: 10px 20px;\n  margin: 8px 0;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-size: 12px;\n  font-weight: 500;\n  background-color: #f3f3f3;\n}\n\n.col-form-label {\n  font-size: 13px;\n  font-weight: 400;\n  color: #AFB3B7;\n}\n\n.upload {\n  background-color: #29ACFC;\n}\n\ninput[type=\"file\"] {\n  visibility: hidden;\n}\n\n#yourBtn {\n  position: relative;\n  top: 40px;\n  width: 100px;\n  padding: 10px;\n  background-color: #29ACFC;\n  cursor: pointer;\n  color: #fff;\n  border-radius: 10px;\n}\n\n.top {\n  position: relative;\n  top: 40px;\n}\n\n.division {\n  border-right: 2px solid #C4C4C4;\n  margin: 40px 0px;\n}\n\n.radio {\n  font-size: 11px;\n  font-weight: 400;\n}\n\n.containerc {\n  display: block;\n  position: relative;\n  padding-left: 20px;\n  margin-bottom: 12px;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.containerc input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n\n.checkmark {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 15px;\n  width: 15px;\n  border: 1px solid #109CF1;\n}\n\n.containerc input:checked ~ .checkmark {\n  background-color: #2196F3;\n}\n\n.checkmark:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n\n.containerc input:checked ~ .checkmark:after {\n  display: block;\n}\n\n.containerc .checkmark:after {\n  left: 5px;\n  top: 0px;\n  width: 5px;\n  height: 10px;\n  border: solid white;\n  border-width: 0 3px 3px 0;\n  transform: rotate(45deg);\n}\n\n.top2 {\n  position: relative;\n  top: 10px;\n}\n\n.login {\n  position: relative;\n  top: -7px;\n  left: 2px;\n}\n\n.thumb {\n  padding-left: 10px;\n}\n\nmain {\n  padding-left: 0 !important;\n}\n\n.right {\n  float: right;\n}\n\nthead td, thead th {\n  border-top: none;\n  border-bottom: none;\n}\n\n.tooltip1 {\n  text-decoration: none;\n  color: #0084f6;\n  cursor: pointer;\n}\n\n.tooltip1 .tooltiptext1 {\n  visibility: hidden;\n  font-weight: 600;\n  font-size: 11px;\n  width: 400px;\n  line-height: 20px;\n  border: 1px solid #F1F3F6;\n  padding: 2px 6px;\n  background-color: #fff;\n  color: #000;\n  right: 1%;\n  top: 0.6%;\n  text-align: center;\n  border-radius: 6px;\n  /* Position the tooltip */\n  position: absolute;\n  z-index: 1;\n}\n\n.tooltip1:hover .tooltiptext1 {\n  visibility: visible;\n}\n\n.tooltip2 {\n  text-decoration: none;\n  color: #0084f6;\n  cursor: pointer;\n}\n\n.tooltip2 .tooltiptext2 {\n  visibility: hidden;\n  background-color: #fff;\n  color: #000;\n  text-align: center;\n  border-radius: 6px;\n  right: 1%;\n  width: 400px;\n  top: 0.8%;\n  font-weight: 600;\n  font-size: 11px;\n  line-height: 20px;\n  border: 1px solid #F1F3F6;\n  padding: 2px 6px;\n  /* Position the tooltip */\n  position: absolute;\n  z-index: 1;\n}\n\n.tooltip2:hover .tooltiptext2 {\n  visibility: visible;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mZWUtbW9kdWxlL2RhdGEtc2V0dXAvZGF0YS1zZXR1cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVk7RUFDWixjQUFjO0FBQ2xCOztBQUNFO0VBQ0Esc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixlQUFlO0FBRWpCOztBQUFFO0VBQ0EsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixlQUFlO0FBR2pCOztBQURFO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUkzQjs7QUFERTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7QUFJbEM7O0FBRkU7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0FBS3BCOztBQUhFO0VBRU0sZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGVBQWU7RUFDZixXQUFXO0VBQ1gsZ0JBQWdCO0FBS3hCOztBQWJFO0VBV00sMkNBQTJDO0VBQzNDLHlCQUF5QjtBQU1qQzs7QUFGRTtFQUNFLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsb0JBQW9CO0VBQ3BCLGlCQUFpQjtBQUtyQjs7QUFIRTtFQUNFLGFBQWE7QUFNakI7O0FBSkU7RUFDRSxVQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLGFBQWE7QUFPakI7O0FBTEU7RUFDRSxzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFRbkI7O0FBWEU7RUFLTSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0FBVXRCOztBQWxCRTtFQVlNLGlCQUFpQjtBQVV6Qjs7QUFORTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBU3BCOztBQVBFO0VBQ0Usa0JBQWtC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LHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIseUJBQUE7RUFDQSxrQkFBa0I7RUFDbEIsVUFBVTtBQStEZDs7QUE1REU7RUFDRSxtQkFBbUI7QUErRHZCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mZWUtbW9kdWxlL2RhdGEtc2V0dXAvZGF0YS1zZXR1cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5icmVhZGNydW1iLWl0ZW0gKyAuYnJlYWRjcnVtYi1pdGVtOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiPlwiO1xuICAgIGNvbG9yOiAjMzM0RDZFO1xuICB9XG4gIC5icmVhZGNydW1ie1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgfVxuICAuYnJlYWRjcnVtYi1pdGVtPmF7XG4gIGNvbG9yOiAjMzM0RDZFO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIH1cbiAgLnJpZ2h0X3VsPmxpe1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogY2lyY2xlO1xuICB9XG4gIFxuICAuZGlzcGxheXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxuICAudzk4IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDBweCBhdXRvO1xuICB9XG4gIC5uYXYtaXRlbSB7XG4gICAgLm5hdi1saW5rIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgY29sb3I6ICM0MDU4Nzc7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICB9XG4gICAgLmFjdGl2ZSB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMTA5Y2YxICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiAjMTA5Y2YxICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG4gIFxuICAubmF2LWxpbmsge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IDEuNXJlbSAwcmVtO1xuICAgIG1hcmdpbjogLTFyZW0gMy41cmVtO1xuICAgIG1hcmdpbi1sZWZ0OiAwcmVtO1xuICB9XG4gIC5mbGV4IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG4gIC53MTUge1xuICAgIHdpZHRoOiAxNSU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RmZTVmMDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG4gIC5saXN0IHsgbGkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogN3B4IDBweDtcbiAgICBtYXJnaW46IDdweCAwcHg7XG4gICAgYSB7IHNwYW4ge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgY29sb3I6ICMzMzRkNmU7XG4gICAgfVxuICAgIH1cbiAgICBpbWcge1xuICAgICAgICBwYWRkaW5nOiAwcHggMTBweDtcbiAgICB9XG4gIH1cbiAgfVxuICAuYWRkX21hc3Rlcl90YWcge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMDljZjE7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIH1cbiAgc2VsZWN0IHtcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgbWFyZ2luOiA4cHggMDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY2Zjg7XG4gIH1cbiAgLmlucHV0IHtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgIG1hcmdpbjogOHB4IDA7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAvKmJhY2tncm91bmQtY29sb3I6ICNmNWY2Zjg7XG4gICovXG4gIH1cbiAgLm1hZ25pZnlpbmctZ2xhc3Mge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL0ZyYW1lMS5zdmcpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCBjZW50ZXI7XG4gICAgdGV4dC1pbmRlbnQ6IDVweDtcbiAgfVxuICAuaGVhZGVyLWlucHV0IHtcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICBtYXJnaW46IDhweCAwO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgd2lkdGg6IDcwMHB4O1xuICAgIGNvbG9yOiAjNjE3NThlO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9GcmFtZTEuc3ZnJyk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IGNlbnRlcjtcbiAgICAvKmJhY2tncm91bmQtY29sb3I6ICNmNWY2Zjg7Ki9cbiAgfVxuICAuaGVhZGVyLWlucHV0OjpwbGFjZWhvbGRlciB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB9XG4gIC5tYWluLXNoYWRvdyB7XG4gICAgYm94LXNoYWRvdzogMHB4IDdweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggN3B4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAtbW96LWJveC1zaGFkb3c6IDBweCA3cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICB9XG4gIC5wLTE1IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgfVxuICBzZWxlY3Qge1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICBjb2xvcjogI2I2YjhiYjtcbiAgfVxuICBcbiAgXG4gIFxuICB0YWJsZXtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBtYXJnaW4tdG9wOjE1cHg7XG4gIH1cbiAgdGhlYWR7XG4gICAgIGJhY2tncm91bmQtY29sb3I6ICNERkU1RjA7XG4gICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgIHRke1xuICAgICAgICAgYmFja2dyb3VuZDogI0RGRTVGMDtcbiAgICAgfVxuICB9XG4gIHRke1xuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgICBjb2xvcjogIzMyM0M0NztcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbiAgdGJvZHl7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxuICB0cntcbiAgICAgIGJveC1zaGFkb3c6IC0xcHggMXB4IDZweCAwcHggcmdiYSgwLDAsMCwwLjEpO1xuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93Oi0xcHggMXB4IDZweCAwcHggcmdiYSgwLDAsMCwwLjEpO1xuICAgICAgLW1vei1ib3gtc2hhZG93OiAtMXB4IDFweCA2cHggMHB4IHJnYmEoMCwwLDAsMC4xKTtcbiAgfVxuICAuc2VjdGlvbjo6YmVmb3JlIHtcbiAgICBoZWlnaHQ6IDAuNGVtO1xuICAgIGRpc3BsYXk6IHRhYmxlLXJvdztcbiAgICBjb250ZW50OiAnJztcbiAgfVxuICBcbiAgXG4gIC53OTZ7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDFyZW0pO1xuICAgIC8vIG1hcmdpbjogMHB4IDFyZW07XG4gICAgLy8gbWFyZ2luLXRvcDogLTIwcHg7XG4gIH1cbiAgLnAtMTB7cGFkZGluZy10b3A6IDEwcHg7fVxuICAucC0zMHtwYWRkaW5nLXRvcDogMzBweDt9XG4gIC5wLTEwLTB7IHBhZGRpbmc6IDlweCAwcHg7fVxuICAueWVze1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNDQ0ZGQUM7XG4gICAgY29sb3I6ICMzMjNDNDc7XG4gICAgcGFkZGluZzogNXB4IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICB9XG4gIC5ub3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZDRjg4O1xuICAgIGNvbG9yOiAjMzIzQzQ3O1xuICAgIHBhZGRpbmc6IDVweCAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgfVxuICAuc2VhcmNoe1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMDlDRjE7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMFxuICB9XG4gIC5hcmVhLXNlbGVjdHtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGNvbG9yOiAjNzg3QTdEO1xuICB9XG4gIC5pbnB1dC13aWR0aHtcbiAgICB3aWR0aDogMTgwcHg7XG4gIH1cbiAgLnBsLTEwe1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgfVxuICAucHItNDB7XG4gICAgcGFkZGluZy1yaWdodDogNDBweDtcbiAgfVxuICBcbiAgLmNhbmNlbHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlcjoxcHggc29saWQgIzEwOUNGMTtcbiAgICAgY29sb3I6ICMxMDlDRjE7XG4gICAgIHBhZGRpbmc6IDlweCAxNXB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDBcbiAgfVxuICAuZm9ybS1jaGVjay1sYWJlbCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgY29sb3I6ICMzMzRENkU7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBmb250LXdlaWdodDogNjAwXG4gIH1cbiAgLndpZHRoMjA1e1xuICAgIHdpZHRoOiAyMDVweDtcbiAgfVxuICAuZGVzY3JpcHRpb257XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIG1hcmdpbjogMHB4IDEwcHg7XG4gIH1cbiAgIGlucHV0W3R5cGU9XCJkYXRlXCJdOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xuICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvSWNvbi5zdmcnKSBuby1yZXBlYXQ7XG4gICAgICB3aWR0aDogMjBweDtcbiAgICAgIGhlaWdodDogMjBweDtcbiAgICAgIGJvcmRlci13aWR0aDogdGhpbjtcbiAgICAgIHBhZGRpbmc6IDJweCAwcHg7XG4gIH1cbiAgaW5wdXRbdHlwZT1cImRhdGVcIl17XG4gICAgcGFkZGluZzogNnB4IDRweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cbiAgLmFkZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTA5Q0YxO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMFxuICB9XG4gIC5tci0xMHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG4gIC5jZW50ZXJ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5ncmF5e1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNEYzRjg7XG4gICAgaGVpZ2h0OiA5MnZoO1xuICB9XG4gIC8qY2hhdGJveCovXG4gIC5jaGF0Ym94MXtcbiAgICB3aWR0aDogNDY2cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyOUFDRkM7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMnJlbSAycmVtIDByZW0gMnJlbTtcbiAgICBwYWRkaW5nOiA4cHggMHB4O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG4gIC5jaGF0Ym94MntcbiAgICB3aWR0aDogMTE1M3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDJyZW0gMnJlbSAwcmVtIDJyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxuICAuY2hhdGJveDN7XG4gICAgd2lkdGg6IDQ2NnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjlBQ0ZDO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDJyZW0gMnJlbSAwcmVtIDJyZW07XG4gICAgcGFkZGluZzogOHB4IDBweDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxuICAuY2hhdGJveDR7XG4gICAgd2lkdGg6IDExNTNweDtcbiAgICBib3JkZXItcmFkaXVzOiAycmVtIDJyZW0gMHJlbSAycmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogMTBweCAwcHg7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cbiAgLmNoYXRib3g1e1xuICAgIHdpZHRoOiA0NjZweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI5QUNGQztcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAycmVtIDJyZW0gMHJlbSAycmVtO1xuICAgIHBhZGRpbmc6IDhweCAwcHg7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cbiAgLmNoYXRib3g2e1xuICAgIHdpZHRoOiAxMDMzcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMnJlbSAycmVtIDByZW0gMnJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDEwcHggMHB4O1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG4gIC5jaGF0Ym94N3tcbiAgICB3aWR0aDo5MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjlBQ0ZDO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDJyZW0gMnJlbSAwcmVtIDJyZW07XG4gICAgcGFkZGluZzogOHB4IDBweDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxuICAuY2hhdGJveDh7XG4gICAgd2lkdGg6IDQ2NnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjlBQ0ZDO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDJyZW0gMnJlbSAwcmVtIDJyZW07XG4gICAgcGFkZGluZzogOHB4IDBweDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxuICAuY2hhdGJveDl7XG4gICAgd2lkdGg6IDgxOXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDJyZW0gMnJlbSAwcmVtIDJyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxuICAuY2hhdGJveC1zZWxlY3R7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG4gIC5jaGF0Ym94LWlucHV0e1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgbWFyZ2luOiA4cHggMDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjM7XG4gIH1cbiAgLmNvbC1mb3JtLWxhYmVse1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGNvbG9yOiAjQUZCM0I3O1xuICB9XG4gIC51cGxvYWR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI5QUNGQztcbiAgfVxuICBpbnB1dFt0eXBlPVwiZmlsZVwiXXtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIH1cbiAgI3lvdXJCdG4ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDQwcHg7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI5QUNGQztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgfVxuICAudG9we1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDQwcHg7XG4gIH1cbiAgLmRpdmlzaW9ue1xuICAgIGJvcmRlci1yaWdodDogIDJweCBzb2xpZCAjQzRDNEM0OyBcbiAgICBtYXJnaW46IDQwcHggMHB4O1xuICB9XG4gIC5yYWRpb3tcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgfVxuICAuY29udGFpbmVyYyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICB9XG4gIFxuICBcbiAgLmNvbnRhaW5lcmMgaW5wdXQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBoZWlnaHQ6IDA7XG4gICAgd2lkdGg6IDA7XG4gIH1cbiAgXG4gIFxuICAuY2hlY2ttYXJrIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgaGVpZ2h0OiAxNXB4O1xuICAgIHdpZHRoOiAxNXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMxMDlDRjE7XG4gIH1cbiAgXG4gIC5jb250YWluZXJjIGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NkYzO1xuICB9XG4gIFxuICBcbiAgLmNoZWNrbWFyazphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICBcbiAgXG4gIC5jb250YWluZXJjIGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrOmFmdGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICBcbiAgXG4gIC5jb250YWluZXJjIC5jaGVja21hcms6YWZ0ZXIge1xuICAgIGxlZnQ6IDVweDtcbiAgICB0b3A6IDBweDtcbiAgICB3aWR0aDogNXB4O1xuICAgIGhlaWdodDogMTBweDtcbiAgICBib3JkZXI6IHNvbGlkIHdoaXRlO1xuICAgIGJvcmRlci13aWR0aDogMCAzcHggM3B4IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIH1cbiAgLnRvcDJ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMTBweDtcbiAgfVxuICAubG9naW57ICAgXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB0b3A6IC03cHg7XG4gICAgICBsZWZ0OiAycHg7XG4gIH1cbiAgLnRodW1ie1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgfVxuICBtYWluIHtcbiAgICAgIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xuICB9XG4gIC5yaWdodCB7IFxuICAgICAgZmxvYXQ6IHJpZ2h0O1xuICB9XG4gIHRoZWFkIHtcbiAgICB0ZCwgdGgge1xuICAgICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgfVxuICB9XG4gIC50b29sdGlwMSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiAjMDA4NGY2O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICBcbiAgLnRvb2x0aXAxIC50b29sdGlwdGV4dDEge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0YxRjNGNjtcbiAgICBwYWRkaW5nOiAycHggNnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgcmlnaHQ6IDElO1xuICAgIHRvcDowLjYlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7ICBcbiAgICAvKiBQb3NpdGlvbiB0aGUgdG9vbHRpcCAqL1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAxO1xuICB9XG4gIFxuICAudG9vbHRpcDE6aG92ZXIgLnRvb2x0aXB0ZXh0MSB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgfVxuICAudG9vbHRpcDIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogIzAwODRmNjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgXG4gIC50b29sdGlwMiAudG9vbHRpcHRleHQyIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBjb2xvcjogIzAwMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIHJpZ2h0OiAxJTtcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgdG9wOjAuOCU7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0YxRjNGNjtcbiAgICBwYWRkaW5nOiAycHggNnB4OyAgICBcbiAgICAvKiBQb3NpdGlvbiB0aGUgdG9vbHRpcCAqL1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAxO1xuICB9XG4gIFxuICAudG9vbHRpcDI6aG92ZXIgLnRvb2x0aXB0ZXh0MiB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgfSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/components/fee-module/data-setup/data-setup.component.ts":
    /*!**************************************************************************!*\
      !*** ./src/app/components/fee-module/data-setup/data-setup.component.ts ***!
      \**************************************************************************/

    /*! exports provided: DataSetupComponent */

    /***/
    function srcAppComponentsFeeModuleDataSetupDataSetupComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataSetupComponent", function () {
        return DataSetupComponent;
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
      /*! ../../../services/authenticator.service */
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

      var __importDefault = undefined && undefined.__importDefault || function (mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };

      var DataSetupComponent =
      /** @class */
      function () {
        var DataSetupComponent = /*#__PURE__*/function () {
          function DataSetupComponent(auth, router) {
            _classCallCheck(this, DataSetupComponent);

            this.auth = auth;
            this.router = router;
            this.type = '';
            this.schoolModel = false;
            this.activeSession = 'fee_types'; // this.toggle(this.activeSession) 

            this.schoolModel = this.auth.schoolModel.value;
          }

          _createClass(DataSetupComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              var _this = this;

              this.auth.institute_type.subscribe(function (res) {
                if (res == "LANG") {
                  _this.type = 'batch';
                } else {
                  _this.type = 'course';
                }
              });
              this.schoolModel = this.auth.schoolModel.value;
              this.is_tax_enabled = sessionStorage.getItem("enable_tax_applicable_fee_installments") == '1' ? true : false;
              this.isFeeStructLinked = sessionStorage.getItem("is_fee_struct_linked") == 'true';
              this.setActiveClass();
            }
          }, {
            key: "toggle",
            value: function toggle(id) {
              this.activeSession = id;
            }
          }, {
            key: "setActiveClass",
            value: function setActiveClass() {
              var pathLastURL;
              var str = window.location.href;
              var res = str.substring(str.lastIndexOf("/view/fee/data-setup") + 21, str.length);
              pathLastURL = res;
              var get_module_name = res.substring(0, res.indexOf("/"));

              if (get_module_name != '') {
                pathLastURL = get_module_name;
              }

              var routesData = {
                'fee-type': 'fee_types',
                'fee-structure': 'structure',
                'discount-reason': 'discount'
              };
              this.activeSession = routesData[pathLastURL];
            }
          }]);

          return DataSetupComponent;
        }();

        DataSetupComponent.ctorParameters = function () {
          return [{
            type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticatorService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        };

        DataSetupComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
          selector: 'app-data-setup',
          template: __importDefault(__webpack_require__(
          /*! raw-loader!./data-setup.component.html */
          "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fee-module/data-setup/data-setup.component.html"))["default"],
          styles: [__importDefault(__webpack_require__(
          /*! ./data-setup.component.scss */
          "./src/app/components/fee-module/data-setup/data-setup.component.scss"))["default"]]
        }), __metadata("design:paramtypes", [_services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])], DataSetupComponent);
        return DataSetupComponent;
      }();
      /***/

    },

    /***/
    "./src/app/components/fee-module/data-setup/data-setup.module.ts":
    /*!***********************************************************************!*\
      !*** ./src/app/components/fee-module/data-setup/data-setup.module.ts ***!
      \***********************************************************************/

    /*! exports provided: DataSetupModule */

    /***/
    function srcAppComponentsFeeModuleDataSetupDataSetupModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataSetupModule", function () {
        return DataSetupModule;
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


      var _data_setup_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./data-setup-routing.module */
      "./src/app/components/fee-module/data-setup/data-setup-routing.module.ts");
      /* harmony import */


      var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! . */
      "./src/app/components/fee-module/data-setup/index.ts");
      /* harmony import */


      var _student_module_student_fee_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../student-module/student_fee.service */
      "./src/app/components/student-module/student_fee.service.ts");
      /* harmony import */


      var _services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../services/common-service */
      "./src/app/services/common-service.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _menu_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./menu/menu.component */
      "./src/app/components/fee-module/data-setup/menu/menu.component.ts");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../shared/shared.module */
      "./src/app/components/shared/shared.module.ts");
      /* harmony import */


      var _services_http_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../services/http.service */
      "./src/app/services/http.service.ts");
      /* harmony import */


      var primeng_primeng__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! primeng/primeng */
      "./node_modules/primeng/primeng.js");
      /* harmony import */


      var primeng_primeng__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_10__);
      /* harmony import */


      var _services_feeStruc_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../services/feeStruc.service */
      "./src/app/services/feeStruc.service.ts");
      /* harmony import */


      var _fee_types_v2_fee_types_v2_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./fee-types-v2/fee-types-v2.component */
      "./src/app/components/fee-module/data-setup/fee-types-v2/fee-types-v2.component.ts");
      /* harmony import */


      var _fees_settings_fees_settings_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./fees-settings/fees-settings.component */
      "./src/app/components/fee-module/data-setup/fees-settings/fees-settings.component.ts");
      /* harmony import */


      var _services_institute_setting_service_institute_setting_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../../services/institute-setting-service/institute-setting.service */
      "./src/app/services/institute-setting-service/institute-setting.service.ts");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      }; // import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


      var DataSetupModule =
      /** @class */
      function () {
        var DataSetupModule = function DataSetupModule() {
          _classCallCheck(this, DataSetupModule);
        };

        DataSetupModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
          imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _data_setup_routing_module__WEBPACK_IMPORTED_MODULE_2__["DataSetupRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], // BsDatepickerModule,
          primeng_primeng__WEBPACK_IMPORTED_MODULE_10__["FileUploadModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_10__["SplitButtonModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_10__["MenuModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]],
          declarations: [___WEBPACK_IMPORTED_MODULE_3__["DataSetupComponent"], ___WEBPACK_IMPORTED_MODULE_3__["DiscountReasonComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_7__["MenuComponent"], ___WEBPACK_IMPORTED_MODULE_3__["FeeTypesComponent"], _fee_types_v2_fee_types_v2_component__WEBPACK_IMPORTED_MODULE_12__["FeeTypesV2Component"], _fees_settings_fees_settings_component__WEBPACK_IMPORTED_MODULE_13__["FeesSettingsComponent"]],
          providers: [_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonServiceFactory"], _student_module_student_fee_service__WEBPACK_IMPORTED_MODULE_4__["StudentFeeService"], _services_feeStruc_service__WEBPACK_IMPORTED_MODULE_11__["FeeStrucService"], _services_http_service__WEBPACK_IMPORTED_MODULE_9__["HttpService"], _services_institute_setting_service_institute_setting_service__WEBPACK_IMPORTED_MODULE_14__["InstituteSettingService"]]
        })], DataSetupModule);
        return DataSetupModule;
      }();
      /***/

    },

    /***/
    "./src/app/components/fee-module/data-setup/discount-reason/discount-reason.component.scss":
    /*!*************************************************************************************************!*\
      !*** ./src/app/components/fee-module/data-setup/discount-reason/discount-reason.component.scss ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsFeeModuleDataSetupDiscountReasonDiscountReasonComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "* {\n  margin: 0px;\n}\n\nbody {\n  font-family: 'Open Sans', sans-serif;\n}\n\n.flex {\n  display: flex;\n}\n\n.blue_button {\n  background-color: #109CF1;\n  color: white;\n  padding: 9px 20px;\n  font-size: 12px;\n  border: none;\n  height: 35px;\n  border-radius: 5px;\n  font-weight: 500;\n  cursor: pointer;\n}\n\n.select {\n  padding: 7px 20px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-size: 13px;\n  font-weight: 500;\n  color: #787A7D;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  background-image: url('arrow-down.svg');\n  background-repeat: no-repeat;\n  background-position: 210px center;\n}\n\n.input {\n  padding: 7px 10px;\n  font-size: 13px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-weight: 500;\n  height: 35px;\n}\n\ninput:focus, select:focus, button:focus {\n  outline: none;\n}\n\n/*swiching tabs*/\n\n.nav-item .nav-link {\n  font-weight: 600;\n  color: #405877;\n  padding-bottom: 8px;\n  cursor: pointer;\n  font-size: 13px;\n}\n\n.nav-item .nav-link.active {\n  border-bottom: 3px solid #109CF1 !important;\n  color: #109CF1 !important;\n}\n\n.nav-link {\n  display: block;\n  padding: 1.5rem 0rem;\n  margin: -1rem 2rem;\n  margin-left: 0rem;\n}\n\n.head_padding {\n  padding: 15px 0px;\n  box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  -webkit-box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  -moz-box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n}\n\n.w98 {\n  width: 98%;\n  margin: 0px auto;\n}\n\n.table_heading {\n  width: 100%;\n  background-color: #DFE5F0;\n  /* padding: 10px 0px;*/\n  margin: 10px 0px;\n  display: flex;\n  border-radius: 5px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);\n}\n\n.fee_types .table_heading > div {\n  width: calc(100%  / 3);\n}\n\n.table_heading > div {\n  padding-left: 20px;\n  font-weight: 600;\n  font-size: 12px;\n  color: #323C47;\n  line-height: 40px;\n}\n\n.table_body {\n  width: 100%;\n  margin-bottom: 10px;\n  display: flex;\n  border-radius: 5px;\n  line-height: 35px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);\n}\n\n.table_body > div {\n  padding-left: 20px;\n  font-weight: 500;\n  font-size: 13px;\n  color: #807C7C;\n  /* padding: 5px 0px;*/\n  margin: auto;\n  line-height: 40px;\n}\n\n.fee_types .table_body > div {\n  width: calc(100% / 3);\n}\n\n.fee_types .table_heading > div:last-child, .fee_types .table_body > div:last-child {\n  text-align: right;\n  padding-right: 50px;\n}\n\n.discount .table_heading > div {\n  width: calc(100% / 5);\n}\n\n.discount .table_body > div {\n  width: calc(100% / 5);\n}\n\n.bottom_pagignation {\n  padding-top: 10px;\n  background-color: #fff;\n  position: fixed;\n  bottom: 0px;\n  z-index: 100;\n}\n\n.bottom_pagignation p {\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 20px;\n}\n\n.bottom_pagignation select {\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-size: 13px;\n  font-weight: 500;\n  color: #0079FF;\n  display: inline;\n}\n\n.bottom_pagignation .w20 {\n  width: 20%;\n}\n\n.bottom_pagignation .w10 {\n  width: 10%;\n}\n\n.bottom_pagignation .w50 {\n  width: 50%;\n}\n\n.bottom_pagignation .w40 {\n  width: 40%;\n}\n\n.number {\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 20px;\n  letter-spacing: 0.01em;\n  color: #000000;\n  margin: 0px 4px;\n}\n\n.active_circle {\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 20px;\n  letter-spacing: 0.01em;\n  color: #fff;\n  padding: 2px 7px;\n  border-radius: 50%;\n  background: #0079FF;\n}\n\n.next {\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 20px;\n  letter-spacing: 0.01em;\n  color: #0079FF;\n}\n\n.w450 {\n  width: 345px;\n}\n\n.modal-title {\n  color: #2B2626;\n  font-weight: 600;\n  font-size: 13px;\n  font-family: 'Open Sans', sans-serif;\n  margin-bottom: 0px;\n}\n\n.white_button {\n  background-color: #fff;\n  color: #109CF1;\n  padding: 8px 20px;\n  height: 35px;\n  font-size: 12px;\n  border: 1px solid #109CF1;\n  border-radius: 5px;\n  font-weight: 500;\n}\n\n.w100 {\n  width: 100%;\n}\n\n.modal textarea {\n  height: 100px;\n  width: 100%;\n}\n\n.feestruc .table_heading > div {\n  width: calc(100% / 4);\n}\n\n.feestruc .table_body > div {\n  width: calc(100% / 4);\n}\n\n.mr10 {\n  margin-right: 10px;\n}\n\n.magnifying-glass {\n  background-image: url('Vector.png');\n  background-repeat: no-repeat;\n  background-position: left center;\n  text-indent: 15px;\n}\n\n.padding11 {\n  margin-top: 20px;\n}\n\n.text {\n  color: #8A8B8B;\n  font-weight: 300;\n  font-size: 24px;\n}\n\n.position {\n  position: relative;\n  left: 13%;\n}\n\n.center {\n  text-align: center;\n}\n\n.dummy_text {\n  height: 250px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n\n.dummy_text > p {\n  width: 600px;\n  color: #61758E;\n}\n\n.school .table_heading > div {\n  width: calc(100% / 6);\n}\n\n.school .table_body > div {\n  width: calc(100% / 6);\n}\n\n.tution .table_heading > div {\n  width: calc(100% / 5);\n}\n\n.tution .table_body > div {\n  width: calc(100% / 5);\n}\n\n.fee_new .table_heading > div {\n  width: calc((100% - 380px) / 5);\n}\n\n.fee_new .table_body > div {\n  width: calc((100% - 380px) / 5);\n  padding: 0px 0px;\n  margin: 0px;\n  margin-bottom: 10px;\n}\n\n.fee_new .table_heading > div:nth-child(2) {\n  width: 330px;\n}\n\n.fee_new .table_body > div:nth-child(2) {\n  width: 330px;\n}\n\n.fee_new .table_heading > div:first-child {\n  width: 50px;\n}\n\n.fee_new .table_body > div:first-child {\n  width: 50px;\n}\n\n.wid80 {\n  width: 70%;\n  margin: auto;\n}\n\n.rrs::-webkit-input-placeholder {\n  text-align: right;\n}\n\n.select1 {\n  color: #8e8f90;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  background-image: url('arrow-down.svg');\n  background-repeat: no-repeat;\n  background-position: 200px center;\n  line-height: 20px;\n}\n\n.select2 {\n  color: #8e8f90;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  background-image: url('arrow-down.svg');\n  background-repeat: no-repeat;\n  background-position: 82px center;\n  line-height: 20px;\n}\n\n.img {\n  width: 100%;\n  height: auto;\n}\n\n.wid240 {\n  width: 240px;\n}\n\n.green_top {\n  padding: 5px 32px;\n  background: linear-gradient(92.13deg, #19bb3c 71.19%, #90d73e 103.74%);\n  border-radius: 5px;\n  text-align: center;\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 18px;\n  letter-spacing: 0.01em;\n  color: #FFFFFF;\n}\n\n.green_top > span {\n  padding-left: 10px;\n}\n\n.itax {\n  padding-top: 8px;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 14px;\n  text-align: right;\n  letter-spacing: 0.01em;\n  color: #323C47;\n}\n\n.relative {\n  position: relative;\n}\n\n.installments {\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 15px;\n  letter-spacing: 0.01em;\n  color: #109CF1;\n}\n\n.info {\n  padding: 0px 4px;\n  color: #109CF1;\n}\n\n.save {\n  width: 100%;\n  position: fixed;\n  bottom: 47px;\n  z-index: 100;\n  height: 65px;\n  background-color: #fff;\n}\n\n.save > button {\n  position: fixed;\n  right: 15px;\n  bottom: 60px;\n}\n\n.fee_new {\n  margin-bottom: 140px;\n}\n\n.page_heading > p {\n  color: #334D6E;\n  font-weight: 600;\n  font-size: 14px;\n  margin-bottom: 0px;\n}\n\n.pageheadingspace {\n  margin-bottom: 7px;\n}\n\n.light {\n  font-weight: 500;\n  padding-left: 5px;\n}\n\n.indent {\n  float: left;\n  padding-left: 3.7rem;\n}\n\n.left {\n  float: left;\n}\n\n.wid50 {\n  width: 50%;\n}\n\n.student .table_heading > div {\n  width: calc(100% / 2);\n}\n\n.student .table_body > div {\n  width: calc(100% / 2);\n}\n\n.size22 {\n  height: auto;\n  width: 18px;\n}\n\n.select3 {\n  color: #8e8f90;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  background-image: url('arrow-down.svg');\n  background-repeat: no-repeat;\n  background-position: 430px center;\n  line-height: 20px;\n}\n\n.nav > li {\n  display: inline;\n}\n\n.nav-link {\n  display: inline;\n}\n\n.nav-link:hover, .nav-link, .nav-link:focus {\n  background-color: transparent;\n}\n\n.nav-item .nav-link {\n  font-weight: 600;\n  color: #405877;\n  padding-bottom: 8px;\n  cursor: pointer;\n  font-size: 13px;\n  float: left;\n  background: none;\n}\n\n.nav-item .active {\n  border-bottom: 3px solid #109cf1 !important;\n  color: #109cf1 !important;\n}\n\n.modal {\n  width: 100%;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n}\n\n.right {\n  float: right;\n}\n\n.modal-dialog {\n  margin: 0 auto;\n  top: 10%;\n}\n\n.modal-header:before {\n  display: none;\n}\n\n#feetypesModal .modal-content, #discountModal .modal-content {\n  min-height: 300px;\n}\n\n.left {\n  float: left;\n}\n\n.padding2 {\n  padding-left: 50px;\n}\n\n.tableHeight {\n  overflow-y: auto;\n}\n\n.pointer {\n  cursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mZWUtbW9kdWxlL2RhdGEtc2V0dXAvZGlzY291bnQtcmVhc29uL2Rpc2NvdW50LXJlYXNvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVc7QUFDZjs7QUFDRTtFQUNFLG9DQUFvQztBQUV4Qzs7QUFBRTtFQUNFLGFBQWE7QUFHakI7O0FBREU7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFJbkI7O0FBRkc7RUFDQyxpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Isd0JBQXdCO0VBQ3pCLHFCQUFxQjtFQUNyQix1Q0FBd0U7RUFDeEUsNEJBQTRCO0VBQzVCLGlDQUFnQztBQUtwQzs7QUFIRTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFNaEI7O0FBSkc7RUFDSSxhQUFhO0FBT3BCOztBQUxHLGdCQUFBOztBQUNEO0VBQ0ksZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGVBQ0o7QUFPRjs7QUFMRTtFQUNNLDJDQUEyQztFQUM3Qyx5QkFBeUI7QUFRL0I7O0FBTkU7RUFDSSxjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFTdkI7O0FBUEU7RUFDRSxpQkFBaUI7RUFDakIsK0NBQTRDO0VBQzFDLHVEQUFvRDtFQUNwRCxvREFBaUQ7QUFVdkQ7O0FBUkU7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0FBV3BCOztBQVRFO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtF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QWtCO0FBMkV4Qjs7QUF6RUk7RUFFRSxnQkFBZ0I7QUEyRXRCOztBQXpFSTtFQUNFLGVBQWU7QUE0RXJCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mZWUtbW9kdWxlL2RhdGEtc2V0dXAvZGlzY291bnQtcmVhc29uL2Rpc2NvdW50LXJlYXNvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XG4gICAgbWFyZ2luOiAwcHg7XG4gIH1cbiAgYm9keXtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gIH1cbiAgLmZsZXh7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuICAuYmx1ZV9idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMDlDRjE7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDlweCAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAgLnNlbGVjdHtcbiAgICBwYWRkaW5nOiA3cHggMjBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAjNzg3QTdEO1xuICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZmVlL2Fycm93LWRvd24uc3ZnXCIpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjoyMTBweCBjZW50ZXI7XG4gIH1cbiAgLmlucHV0e1xuICAgIHBhZGRpbmc6IDdweCAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIH1cbiAgIGlucHV0OmZvY3VzLCBzZWxlY3Q6Zm9jdXMsYnV0dG9uOmZvY3Vze1xuICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICB9XG4gICAvKnN3aWNoaW5nIHRhYnMqL1xuICAubmF2LWl0ZW0gLm5hdi1saW5re1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGNvbG9yOiAjNDA1ODc3O1xuICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogMTNweFxuICB9XG4gIFxuICAubmF2LWl0ZW0gLm5hdi1saW5rLmFjdGl2ZSB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMTA5Q0YxICFpbXBvcnRhbnQ7XG4gICAgICBjb2xvcjogIzEwOUNGMSAhaW1wb3J0YW50O1xuICB9XG4gIC5uYXYtbGluayB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHBhZGRpbmc6IDEuNXJlbSAwcmVtO1xuICAgICAgbWFyZ2luOiAtMXJlbSAycmVtO1xuICAgICAgbWFyZ2luLWxlZnQ6IDByZW07XG4gIH1cbiAgLmhlYWRfcGFkZGluZ3tcbiAgICBwYWRkaW5nOiAxNXB4IDBweDtcbiAgICBib3gtc2hhZG93OiAwcHggN3B4IDVweCAtM3B4IHJnYmEoMCwwLDAsMC4xKTtcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDdweCA1cHggLTNweCByZ2JhKDAsMCwwLDAuMSk7XG4gICAgICAtbW96LWJveC1zaGFkb3c6IDBweCA3cHggNXB4IC0zcHggcmdiYSgwLDAsMCwwLjEpO1xuICB9XG4gIC53OTh7XG4gICAgd2lkdGg6IDk4JTtcbiAgICBtYXJnaW46IDBweCBhdXRvO1xuICB9XG4gIC50YWJsZV9oZWFkaW5ne1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNERkU1RjA7XG4gICAvKiBwYWRkaW5nOiAxMHB4IDBweDsqL1xuICAgIG1hcmdpbjogMTBweCAwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICB9XG4gIC5mZWVfdHlwZXMgLnRhYmxlX2hlYWRpbmc+ZGl2e1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgIC8gMyk7XG4gIH1cbiAgLnRhYmxlX2hlYWRpbmc+ZGl2e1xuICBcbnBhZGRpbmctbGVmdDogMjBweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogIzMyM0M0NztcbiAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICB9XG4gIFxuICAudGFibGVfYm9keXtcbiAgICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBsaW5lLWhlaWdodDogMzVweDtcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIH1cbiAgLnRhYmxlX2JvZHk+ZGl2e1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBjb2xvcjogIzgwN0M3QztcbiAgIC8qIHBhZGRpbmc6IDVweCAwcHg7Ki9cbiAgICAgbWFyZ2luOiBhdXRvO1xuICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgXG4gIH1cbiAgLmZlZV90eXBlcyAudGFibGVfYm9keT5kaXZ7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAvIDMpO1xuICB9XG4gIC5mZWVfdHlwZXMgLnRhYmxlX2hlYWRpbmc+ZGl2Omxhc3QtY2hpbGQsLmZlZV90eXBlcyAudGFibGVfYm9keT5kaXY6bGFzdC1jaGlsZHtcbiAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgcGFkZGluZy1yaWdodDogNTBweDtcbiAgfVxuICAuZGlzY291bnQgLnRhYmxlX2hlYWRpbmc+ZGl2e1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyA1KTtcbiAgfVxuICAuZGlzY291bnQgLnRhYmxlX2JvZHk+ZGl2e1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyA1KTtcbiAgfVxuICBcbiAgLmJvdHRvbV9wYWdpZ25hdGlvbntcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAwcHg7XG4gICAgei1pbmRleDogMTAwO1xuICB9XG4gIC5ib3R0b21fcGFnaWduYXRpb24gcHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgfVxuICAuYm90dG9tX3BhZ2lnbmF0aW9uIHNlbGVjdHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAjMDA3OUZGO1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgfVxuICAuYm90dG9tX3BhZ2lnbmF0aW9uIC53MjB7XG4gICAgd2lkdGg6IDIwJTtcbiAgfVxuICAuYm90dG9tX3BhZ2lnbmF0aW9uIC53MTB7XG4gICAgd2lkdGg6IDEwJTtcbiAgfVxuICAuYm90dG9tX3BhZ2lnbmF0aW9uIC53NTB7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxuICAuYm90dG9tX3BhZ2lnbmF0aW9uIC53NDB7XG4gICAgd2lkdGg6IDQwJTtcbiAgfVxuICAubnVtYmVye1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIG1hcmdpbjowcHggNHB4O1xuICB9XG4gIC5hY3RpdmVfY2lyY2xle1xuICAgLy8gYmFja2dyb3VuZC1jb2xvcjogXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6MnB4IDdweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiAjMDA3OUZGO1xuICB9XG4gIC5uZXh0e1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gIGNvbG9yOiAjMDA3OUZGO1xuICBcbiAgfVxuICAudzQ1MHtcbiAgICB3aWR0aDogMzQ1cHg7XG4gIH1cbiAgLm1vZGFsLXRpdGxle1xuICAgIGNvbG9yOiAjMkIyNjI2O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIH1cbiAgLndoaXRlX2J1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBjb2xvcjogIzEwOUNGMTtcbiAgICBwYWRkaW5nOiA4cHggMjBweDtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMxMDlDRjE7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cbiAgLncxMDB7XG4gICB3aWR0aDogMTAwJTtcbiAgfVxuICAubW9kYWwgdGV4dGFyZWF7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuZmVlc3RydWMgLnRhYmxlX2hlYWRpbmc+ZGl2e1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyA0KTtcbiAgfVxuICAuZmVlc3RydWMgLnRhYmxlX2JvZHk+ZGl2e1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyA0KTtcbiAgfVxuICAubXIxMHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cbiAgLm1hZ25pZnlpbmctZ2xhc3N7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZmVlL1ZlY3Rvci5wbmcpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjpsZWZ0IGNlbnRlcjtcbiAgICB0ZXh0LWluZGVudDogMTVweDtcbiAgfVxuICAucGFkZGluZzExe1xuICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICB9XG4gIC50ZXh0e1xuICAgIGNvbG9yOiAjOEE4QjhCO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICB9XG4gIC5wb3NpdGlvbntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDoxMyU7XG4gIH1cbiAgLmNlbnRlcntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLmR1bW15X3RleHR7XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5kdW1teV90ZXh0PnB7XG4gICAgd2lkdGg6IDYwMHB4O1xuICAgIGNvbG9yOiAjNjE3NThFO1xuICB9XG4gIC5zY2hvb2wgLnRhYmxlX2hlYWRpbmc+ZGl2e1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyA2KTtcbiAgfVxuICAuc2Nob29sIC50YWJsZV9ib2R5PmRpdntcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gNik7XG4gIH1cbiAgLnR1dGlvbiAudGFibGVfaGVhZGluZz5kaXZ7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAvIDUpO1xuICB9XG4gIC50dXRpb24gLnRhYmxlX2JvZHk+ZGl2e1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyA1KTtcbiAgfVxuICAuZmVlX25ldyAudGFibGVfaGVhZGluZz5kaXZ7XG4gICAgd2lkdGg6IGNhbGMoKDEwMCUgLSAzODBweCkgLyA1KTtcbiAgfVxuICAuZmVlX25ldyAudGFibGVfYm9keT5kaXZ7XG4gICAgd2lkdGg6IGNhbGMoKDEwMCUgLSAzODBweCkgLyA1KTtcbiAgICAgcGFkZGluZzogMHB4IDBweDtcbiAgICBtYXJnaW46IDBweDsgXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxuICAuZmVlX25ldyAudGFibGVfaGVhZGluZz5kaXY6bnRoLWNoaWxkKDIpe1xuICAgIHdpZHRoOiAzMzBweCA7XG4gIH1cbiAgLmZlZV9uZXcgLnRhYmxlX2JvZHk+ZGl2Om50aC1jaGlsZCgyKXtcbiAgICB3aWR0aDogMzMwcHg7XG4gIH1cbiAgLmZlZV9uZXcgLnRhYmxlX2hlYWRpbmc+ZGl2OmZpcnN0LWNoaWxke1xuICAgIHdpZHRoOiA1MHB4IDtcbiAgfVxuICAuZmVlX25ldyAudGFibGVfYm9keT5kaXY6Zmlyc3QtY2hpbGR7XG4gICAgd2lkdGg6IDUwcHg7XG4gIH1cbiAgLndpZDgwe1xuICAgIHdpZHRoOiA3MCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICB9XG4gIC5ycnM6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIgeyB0ZXh0LWFsaWduOnJpZ2h0OyB9XG4gIC5zZWxlY3Qxe1xuICAgIGNvbG9yOiM4ZThmOTA7XG4gICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9mZWUvYXJyb3ctZG93bi5zdmdcIik7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOjIwMHB4IGNlbnRlcjtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgfVxuICAuc2VsZWN0MntcbiAgICBjb2xvcjojOGU4ZjkwO1xuICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZmVlL2Fycm93LWRvd24uc3ZnXCIpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjo4MnB4IGNlbnRlcjtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgfVxuICAuaW1ne1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuICAud2lkMjQwe1xuICAgIHdpZHRoOiAyNDBweDtcbiAgfVxuICAuZ3JlZW5fdG9we1xuICAgIHBhZGRpbmc6IDVweCAzMnB4O1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5Mi4xM2RlZywgIzE5YmIzYyA3MS4xOSUsICM5MGQ3M2UgMTAzLjc0JSk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICBcbiAgfVxuICAuZ3JlZW5fdG9wPnNwYW57XG4gICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIH1cbiAgLml0YXh7XG4gICAgcGFkZGluZy10b3A6IDhweDtcbiAgXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgICBjb2xvcjogIzMyM0M0NztcbiAgXG4gIH1cbiAgLnJlbGF0aXZle1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICAuaW5zdGFsbG1lbnRze1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gICAgY29sb3I6ICMxMDlDRjE7XG4gIH1cbiAgLmluZm97XG4gICAgcGFkZGluZzogMHB4IDRweDtcbiAgICBjb2xvcjogIzEwOUNGMTtcbiAgfVxuICAuc2F2ZXtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiA0N3B4O1xuICAgIHotaW5kZXg6IDEwMDtcbiAgICBoZWlnaHQ6IDY1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgfVxuICAuc2F2ZT5idXR0b257XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IDE1cHg7XG4gIGJvdHRvbTogNjBweDtcbiAgfVxuICAuZmVlX25ld3tcbiAgbWFyZ2luLWJvdHRvbTogMTQwcHg7XG4gIH1cbiAgLy8gLnBhZ2VfaGVhZGluZ3tcbiAgICBcbiAgLy8gfVxuICAucGFnZV9oZWFkaW5nPnB7XG4gICAgY29sb3I6ICMzMzRENkU7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICB9XG4gIC5wYWdlaGVhZGluZ3NwYWNle1xuICAgIG1hcmdpbi1ib3R0b206IDdweDtcbiAgfVxuICAubGlnaHR7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgfVxuICAuaW5kZW50e1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZy1sZWZ0OiAzLjdyZW07XG4gIH1cbiAgLmxlZnR7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gIH1cbiAgLndpZDUwe1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbiAgLnN0dWRlbnQgLnRhYmxlX2hlYWRpbmc+ZGl2e1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyAyKTtcbiAgfVxuICAuc3R1ZGVudCAudGFibGVfYm9keT5kaXZ7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAvIDIpO1xuICB9XG4gIC5zaXplMjJ7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiAxOHB4O1xuICB9XG4gIC5zZWxlY3Qze1xuICAgIGNvbG9yOiM4ZThmOTA7XG4gICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9mZWUvYXJyb3ctZG93bi5zdmdcIik7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOjQzMHB4IGNlbnRlcjtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgfVxuICAubmF2PmxpIHtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gIH1cbiAgLm5hdi1saW5re1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgfVxuICAubmF2LWxpbms6aG92ZXIsLm5hdi1saW5rLC5uYXYtbGluazpmb2N1c3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xuICAgIH1cbiAgICBcbiAgICAubmF2LWl0ZW0ge1xuICAgICAgICAubmF2LWxpbmsge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGNvbG9yOiAjNDA1ODc3O1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAuYWN0aXZlIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMTA5Y2YxICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBjb2xvcjogIzEwOWNmMSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAubW9kYWwge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgIFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICB9XG4gICAgICAgLnJpZ2h0e1xuICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgIH1cbiAgIC5tb2RhbC1kaWFsb2cge1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgdG9wOjEwJTtcbiAgICB9XG4gICAgLm1vZGFsLWhlYWRlcjpiZWZvcmV7XG4gICAgICBkaXNwbGF5Om5vbmU7XG4gICAgfVxuICAgIC8vIC5tb2RhbC1oZWFkZXJ7XG4gICAgLy8gICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICAgIC8vIH1cbiAgICAjZmVldHlwZXNNb2RhbCAubW9kYWwtY29udGVudCwgI2Rpc2NvdW50TW9kYWwgLm1vZGFsLWNvbnRlbnR7XG4gICAgICBtaW4taGVpZ2h0OiAzMDBweDtcbiAgICB9XG4gICAgLmxlZnR7XG4gICAgICBmbG9hdDogbGVmdDtcbiAgICB9XG4gICAgLnBhZGRpbmcye1xuICAgICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xuICAgIH1cbiAgICAudGFibGVIZWlnaHR7XG4gICAgICAvL2hlaWdodDogNTR2aDtcbiAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgfVxuICAgIC5wb2ludGVye1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH0iXX0= */";
      /***/
    },

    /***/
    "./src/app/components/fee-module/data-setup/discount-reason/discount-reason.component.ts":
    /*!***********************************************************************************************!*\
      !*** ./src/app/components/fee-module/data-setup/discount-reason/discount-reason.component.ts ***!
      \***********************************************************************************************/

    /*! exports provided: DiscountReasonComponent */

    /***/
    function srcAppComponentsFeeModuleDataSetupDiscountReasonDiscountReasonComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DiscountReasonComponent", function () {
        return DiscountReasonComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _student_module_student_fee_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../student-module/student_fee.service */
      "./src/app/components/student-module/student_fee.service.ts");
      /* harmony import */


      var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../services/common-service */
      "./src/app/services/common-service.ts");
      /* harmony import */


      var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../services/authenticator.service */
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

      var __importDefault = undefined && undefined.__importDefault || function (mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };

      var DiscountReasonComponent =
      /** @class */
      function () {
        var DiscountReasonComponent = /*#__PURE__*/function () {
          function DiscountReasonComponent(apiService, commonService, auth) {
            _classCallCheck(this, DiscountReasonComponent);

            this.apiService = apiService;
            this.commonService = commonService;
            this.auth = auth;
            this.discountReasonArray = [];
            this.createNewDiscount = false;
            this.discountReason = "";
            this.discount_reason_id = -1;
          }

          _createClass(DiscountReasonComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.getDiscountReson();
            }
          }, {
            key: "getDiscountReson",
            value: function getDiscountReson() {
              var _this2 = this;

              this.auth.showLoader();
              this.apiService.getAllDiscountReasons().subscribe(function (res) {
                _this2.discountReasonArray = res;

                _this2.auth.hideLoader();
              }, function (err) {
                _this2.auth.hideLoader();
              });
            }
          }, {
            key: "toggleCreateNew",
            value: function toggleCreateNew() {
              if (this.createNewDiscount == false) {
                this.createNewDiscount = true;
                document.getElementById('showCloseBtn').style.display = '';
                document.getElementById('showAddBtn').style.display = 'none';
              } else {
                this.createNewDiscount = false;
                document.getElementById('showCloseBtn').style.display = 'none';
                document.getElementById('showAddBtn').style.display = '';
              }
            }
          }, {
            key: "addNewDiscountReason",
            value: function addNewDiscountReason() {
              var _this3 = this;

              if (this.discountReason.trim() != "" && this.discountReason.trim().length > 0) {
                this.auth.showLoader();
                var obj = {
                  reason: this.discountReason
                };
                this.apiService.createDiscountReason(obj).subscribe(function (res) {
                  _this3.commonService.showErrorMessage('success', 'Discount Reason Added', '');

                  _this3.getDiscountReson();

                  _this3.auth.hideLoader();

                  _this3.discountReason = "";
                }, function (err) {
                  _this3.auth.hideLoader();

                  _this3.commonService.showErrorMessage('error', err.error.message, '');
                });
              } else {
                this.commonService.showErrorMessage('error', '', 'Please enter discount reason');
              }
            }
          }, {
            key: "editRowTable",
            value: function editRowTable(row, index) {
              document.getElementById(("row" + index).toString()).classList.remove('displayComp');
              document.getElementById(("row" + index).toString()).classList.add('editComp');
            }
          }, {
            key: "editReason",
            value: function editReason(data) {
              $('#discountReasonModel').modal('show');
              this.discountReason = data.reason;
              this.discount_reason_id = data.discount_reason_id;
            }
          }, {
            key: "updateDiscountReason",
            value: function updateDiscountReason() {
              var _this4 = this;

              if (this.discountReason != "") {
                this.auth.showLoader();
                var obj = {};
                obj.reason = this.discountReason;
                this.apiService.updateDiscountReasons(obj, this.discount_reason_id).subscribe(function (data) {
                  _this4.commonService.showErrorMessage('success', 'Discount Reason Updated!', '');

                  _this4.discountReason = "";
                  $('#discountReasonModel').modal('hide');

                  _this4.auth.hideLoader();

                  _this4.getDiscountReson();
                }, function (error) {
                  _this4.auth.hideLoader();

                  _this4.commonService.showErrorMessage('error', '', error.error.message);
                });
              } else {
                this.commonService.showErrorMessage('error', '', 'Please enter discount reason');
              }
            }
          }, {
            key: "clearData",
            value: function clearData() {
              this.discountReason = "";
              $('#discountReasonModel').modal('hide');
            }
          }, {
            key: "cancelEditRow",
            value: function cancelEditRow(index) {
              document.getElementById(("row" + index).toString()).classList.add('displayComp');
              document.getElementById(("row" + index).toString()).classList.remove('editComp');
              this.getDiscountReson();
            }
          }]);

          return DiscountReasonComponent;
        }();

        DiscountReasonComponent.ctorParameters = function () {
          return [{
            type: _student_module_student_fee_service__WEBPACK_IMPORTED_MODULE_1__["StudentFeeService"]
          }, {
            type: _services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonServiceFactory"]
          }, {
            type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"]
          }];
        };

        DiscountReasonComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
          selector: 'app-discount-reason',
          template: __importDefault(__webpack_require__(
          /*! raw-loader!./discount-reason.component.html */
          "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fee-module/data-setup/discount-reason/discount-reason.component.html"))["default"],
          styles: [__importDefault(__webpack_require__(
          /*! ./discount-reason.component.scss */
          "./src/app/components/fee-module/data-setup/discount-reason/discount-reason.component.scss"))["default"]]
        }), __metadata("design:paramtypes", [_student_module_student_fee_service__WEBPACK_IMPORTED_MODULE_1__["StudentFeeService"], _services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonServiceFactory"], _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"]])], DiscountReasonComponent);
        return DiscountReasonComponent;
      }();
      /***/

    },

    /***/
    "./src/app/components/fee-module/data-setup/fee-types-v2/fee-types-v2.component.scss":
    /*!*******************************************************************************************!*\
      !*** ./src/app/components/fee-module/data-setup/fee-types-v2/fee-types-v2.component.scss ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsFeeModuleDataSetupFeeTypesV2FeeTypesV2ComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "* {\n  margin: 0px;\n}\n\nbody {\n  font-family: 'Open Sans', sans-serif;\n}\n\n.flex {\n  display: flex;\n}\n\n.blue_button {\n  background-color: #109CF1;\n  color: white;\n  padding: 9px 20px;\n  font-size: 12px;\n  border: none;\n  height: 35px;\n  border-radius: 5px;\n  font-weight: 500;\n  cursor: pointer;\n}\n\n.select {\n  padding: 7px 20px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-size: 13px;\n  font-weight: 500;\n  color: #787A7D;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n}\n\n.input {\n  padding: 7px 10px;\n  font-size: 13px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-weight: 500;\n  height: 35px;\n}\n\ninput:focus, select:focus, button:focus {\n  outline: none;\n}\n\n/*swiching tabs*/\n\n.nav-item .nav-link {\n  font-weight: 600;\n  color: #405877;\n  padding-bottom: 8px;\n  cursor: pointer;\n  font-size: 13px;\n}\n\n.nav-item .nav-link.active {\n  border-bottom: 3px solid #109CF1 !important;\n  color: #109CF1 !important;\n}\n\n.nav-link {\n  display: block;\n  padding: 1.5rem 0rem;\n  margin: -1rem 2rem;\n  margin-left: 0rem;\n}\n\n.head_padding {\n  padding: 15px 0px;\n  box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  -webkit-box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  -moz-box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n}\n\n.w98 {\n  width: 98%;\n  margin: 0px auto;\n}\n\n.table_heading {\n  width: 100%;\n  background-color: #DFE5F0;\n  /* padding: 10px 0px;*/\n  margin: 10px 0px;\n  display: flex;\n  border-radius: 5px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);\n}\n\n.fee_types .table_heading > div {\n  width: 25%;\n  text-align: left;\n  padding-left: 20px;\n}\n\n.table_heading > div {\n  font-weight: 600;\n  font-size: 12px;\n  color: #323C47;\n  line-height: 40px;\n}\n\n.fee_types .table_heading > div:last-child, .fee_types .table_body > div:last-child {\n  text-align: right;\n  margin-left: auto;\n  margin-right: 0;\n  padding-right: 50px;\n}\n\n.table_body {\n  width: 100%;\n  margin-bottom: 10px;\n  display: flex;\n  border-radius: 5px;\n  line-height: 35px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);\n}\n\n.table_body > div {\n  font-weight: 500;\n  font-size: 13px;\n  color: #807C7C;\n  /* padding: 5px 0px;*/\n  line-height: 40px;\n}\n\n.fee_types .table_body > div {\n  width: 25%;\n  text-align: left;\n  padding-left: 20px;\n}\n\n.discount .table_heading > div {\n  width: calc(100% / 5);\n}\n\n.discount .table_body > div {\n  width: calc(100% / 5);\n}\n\n.bottom_pagignation {\n  padding-top: 10px;\n  background-color: #fff;\n  position: fixed;\n  bottom: 0px;\n  z-index: 100;\n}\n\n.bottom_pagignation p {\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 20px;\n}\n\n.bottom_pagignation select {\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-size: 13px;\n  font-weight: 500;\n  color: #0079FF;\n  display: inline;\n}\n\n.bottom_pagignation .w20 {\n  width: 20%;\n}\n\n.bottom_pagignation .w10 {\n  width: 10%;\n}\n\n.bottom_pagignation .w50 {\n  width: 50%;\n}\n\n.bottom_pagignation .w40 {\n  width: 40%;\n}\n\n.number {\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 20px;\n  letter-spacing: 0.01em;\n  color: #000000;\n  margin: 0px 4px;\n}\n\n.active_circle {\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 20px;\n  letter-spacing: 0.01em;\n  color: #fff;\n  padding: 2px 7px;\n  border-radius: 50%;\n  background: #0079FF;\n}\n\n.next {\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 20px;\n  letter-spacing: 0.01em;\n  color: #0079FF;\n}\n\n.w450 {\n  width: 345px;\n}\n\n.modal-title {\n  color: #2B2626;\n  font-weight: 600;\n  font-size: 13px;\n  font-family: 'Open Sans', sans-serif;\n  margin-bottom: 0px;\n}\n\n.white_button {\n  background-color: #fff;\n  color: #109CF1;\n  padding: 8px 20px;\n  height: 35px;\n  font-size: 12px;\n  border: 1px solid #109CF1;\n  border-radius: 5px;\n  font-weight: 500;\n}\n\n.w100 {\n  width: 100%;\n}\n\n.modal textarea {\n  height: 100px;\n  width: 100%;\n}\n\n.feestruc .table_heading > div {\n  width: calc(100% / 4);\n}\n\n.feestruc .table_body > div {\n  width: calc(100% / 4);\n}\n\n.mr10 {\n  margin-right: 10px;\n}\n\n.magnifying-glass {\n  background-image: url('Vector.png');\n  background-repeat: no-repeat;\n  background-position: left center;\n  text-indent: 15px;\n}\n\n.padding11 {\n  margin-top: 20px;\n}\n\n.text {\n  color: #8A8B8B;\n  font-weight: 300;\n  font-size: 24px;\n}\n\n.position {\n  position: relative;\n  left: 13%;\n}\n\n.center {\n  text-align: center;\n}\n\n.dummy_text {\n  height: 250px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n\n.dummy_text > p {\n  width: 600px;\n  color: #61758E;\n}\n\n.school .table_heading > div {\n  width: calc(100% / 6);\n}\n\n.school .table_body > div {\n  width: calc(100% / 6);\n}\n\n.tution .table_heading > div {\n  width: calc(100% / 5);\n}\n\n.tution .table_body > div {\n  width: calc(100% / 5);\n}\n\n.fee_new .table_heading > div {\n  width: calc((100% - 380px) / 5);\n}\n\n.fee_new .table_body > div {\n  width: calc((100% - 380px) / 5);\n  padding: 0px 0px;\n  margin: 0px;\n  margin-bottom: 10px;\n}\n\n.fee_new .table_heading > div:nth-child(2) {\n  width: 330px;\n}\n\n.fee_new .table_body > div:nth-child(2) {\n  width: 330px;\n}\n\n.fee_new .table_heading > div:first-child {\n  width: 50px;\n}\n\n.fee_new .table_body > div:first-child {\n  width: 50px;\n}\n\n.pointer {\n  cursor: pointer;\n}\n\n.wid80 {\n  width: 70%;\n  margin: auto;\n}\n\n.rrs::-webkit-input-placeholder {\n  text-align: right;\n}\n\n.select1 {\n  color: #8e8f90;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  background-image: url('arrow-down.svg');\n  background-repeat: no-repeat;\n  background-position: 200px center;\n  line-height: 20px;\n}\n\n.select2 {\n  color: #8e8f90;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  background-image: url('arrow-down.svg');\n  background-repeat: no-repeat;\n  background-position: 82px center;\n  line-height: 20px;\n}\n\n.img {\n  width: 100%;\n  height: auto;\n}\n\n.wid240 {\n  width: 240px;\n}\n\n.green_top {\n  padding: 5px 32px;\n  background: linear-gradient(92.13deg, #19bb3c 71.19%, #90d73e 103.74%);\n  border-radius: 5px;\n  text-align: center;\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 18px;\n  letter-spacing: 0.01em;\n  color: #FFFFFF;\n}\n\n.green_top > span {\n  padding-left: 10px;\n}\n\n.itax {\n  padding-top: 8px;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 14px;\n  text-align: right;\n  letter-spacing: 0.01em;\n  color: #323C47;\n}\n\n.relative {\n  position: relative;\n}\n\n.installments {\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 15px;\n  letter-spacing: 0.01em;\n  color: #109CF1;\n}\n\n.info {\n  padding: 0px 4px;\n  color: #109CF1;\n}\n\n.save {\n  width: 100%;\n  position: fixed;\n  bottom: 47px;\n  z-index: 100;\n  height: 65px;\n  background-color: #fff;\n}\n\n.save > button {\n  position: fixed;\n  right: 15px;\n  bottom: 60px;\n}\n\n.fee_new {\n  margin-bottom: 140px;\n}\n\n.page_heading > p {\n  color: #334D6E;\n  font-weight: 600;\n  font-size: 14px;\n  margin-bottom: 0px;\n}\n\n.pageheadingspace {\n  margin-bottom: 7px;\n}\n\n.light {\n  font-weight: 500;\n  padding-left: 5px;\n}\n\n.indent {\n  float: left;\n  padding-left: 3.7rem;\n}\n\n.left {\n  float: left;\n}\n\n.wid50 {\n  width: 50%;\n}\n\n.student .table_heading > div {\n  width: calc(100% / 2);\n}\n\n.student .table_body > div {\n  width: calc(100% / 2);\n}\n\n.size22 {\n  height: auto;\n  width: 18px;\n}\n\n.select3 {\n  color: #8e8f90;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  background-image: url('arrow-down.svg');\n  background-repeat: no-repeat;\n  background-position: 430px center;\n  line-height: 20px;\n}\n\n.nav > li {\n  display: inline;\n}\n\n.nav-link {\n  display: inline;\n}\n\n.nav-link:hover, .nav-link, .nav-link:focus {\n  background-color: transparent;\n}\n\n.nav-item .nav-link {\n  font-weight: 600;\n  color: #405877;\n  padding-bottom: 8px;\n  cursor: pointer;\n  font-size: 13px;\n  float: left;\n  background: none;\n}\n\n.nav-item .active {\n  border-bottom: 3px solid #109cf1 !important;\n  color: #109cf1 !important;\n}\n\n.modal {\n  width: 100%;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n}\n\n.right {\n  float: right;\n}\n\n.modal-dialog {\n  margin: 0 auto;\n  top: 10%;\n}\n\n.modal-header:before {\n  display: none;\n}\n\n.left {\n  float: left;\n}\n\n.padding2 {\n  padding-left: 50px;\n}\n\n.tableHeight {\n  overflow-y: auto;\n}\n\n.display {\n  display: flex;\n  justify-content: space-between;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mZWUtbW9kdWxlL2RhdGEtc2V0dXAvZmVlLXR5cGVzLXYyL2ZlZS10eXBlcy12Mi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjs7QUFDQTtFQUNFLG9DQUFvQztBQUV0Qzs7QUFBQTtFQUNFLGFBQWE7QUFHZjs7QUFEQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtBQUlqQjs7QUFGQztFQUNDLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDYix3QkFBd0I7RUFDekIscUJBQXFCO0FBS3ZCOztBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsWUFBWTtBQUdkOztBQURDO0VBQ0ksYUFBYTtBQUlsQjs7QUFGQyxnQkFBQTs7QUFDRDtFQUNJLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixlQUNKO0FBSUE7O0FBRkE7RUFDTSwyQ0FBMkM7RUFDN0MseUJBQXlCO0FBSzdCOztBQUhBO0VBQ0ksY0FBYztFQUNkLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBTXJCOztBQUpBO0VBQ0UsaUJBQWlCO0VBQ2pCLCtDQUE0QztFQUMxQyx1REFBb0Q7RUFDcEQsb0RBQWlEO0FBT3JEOztBQUxBO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtBQVFsQjs7QUFOQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7RUFDMUIsc0JBQUE7RUFDQyxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGtCQUFrQjtF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RXBCOztBQXJFRTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7QUF3RWxDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mZWUtbW9kdWxlL2RhdGEtc2V0dXAvZmVlLXR5cGVzLXYyL2ZlZS10eXBlcy12Mi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XG4gIG1hcmdpbjogMHB4O1xufVxuYm9keXtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xufVxuLmZsZXh7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uYmx1ZV9idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTA5Q0YxO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDlweCAyMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgaGVpZ2h0OiAzNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiAuc2VsZWN0e1xuICBwYWRkaW5nOiA3cHggMjBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjNzg3QTdEO1xuICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC8vIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZmVlL2Fycm93LWRvd24uc3ZnXCIpO1xuICAvLyBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAvLyBiYWNrZ3JvdW5kLXBvc2l0aW9uOjIxMHB4IGNlbnRlcjtcbn1cbi5pbnB1dHtcbiAgcGFkZGluZzogN3B4IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LXdlaWdodDogNTAwO1xuICBoZWlnaHQ6IDM1cHg7XG4gIH1cbiBpbnB1dDpmb2N1cywgc2VsZWN0OmZvY3VzLGJ1dHRvbjpmb2N1c3tcbiAgICAgb3V0bGluZTogbm9uZTtcbiB9XG4gLypzd2ljaGluZyB0YWJzKi9cbi5uYXYtaXRlbSAubmF2LWxpbmt7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogIzQwNTg3NztcbiAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXNpemU6IDEzcHhcbn1cblxuLm5hdi1pdGVtIC5uYXYtbGluay5hY3RpdmUge1xuICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICMxMDlDRjEgIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzEwOUNGMSAhaW1wb3J0YW50O1xufVxuLm5hdi1saW5rIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nOiAxLjVyZW0gMHJlbTtcbiAgICBtYXJnaW46IC0xcmVtIDJyZW07XG4gICAgbWFyZ2luLWxlZnQ6IDByZW07XG59XG4uaGVhZF9wYWRkaW5ne1xuICBwYWRkaW5nOiAxNXB4IDBweDtcbiAgYm94LXNoYWRvdzogMHB4IDdweCA1cHggLTNweCByZ2JhKDAsMCwwLDAuMSk7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggN3B4IDVweCAtM3B4IHJnYmEoMCwwLDAsMC4xKTtcbiAgICAtbW96LWJveC1zaGFkb3c6IDBweCA3cHggNXB4IC0zcHggcmdiYSgwLDAsMCwwLjEpO1xufVxuLnc5OHtcbiAgd2lkdGg6IDk4JTtcbiAgbWFyZ2luOiAwcHggYXV0bztcbn1cbi50YWJsZV9oZWFkaW5ne1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RGRTVGMDtcbiAvKiBwYWRkaW5nOiAxMHB4IDBweDsqL1xuICBtYXJnaW46IDEwcHggMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cbi5mZWVfdHlwZXMgLnRhYmxlX2hlYWRpbmc+ZGl2e1xuICB3aWR0aDogMjUlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG4udGFibGVfaGVhZGluZz5kaXZ7XG5cbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzMyM0M0NztcbiBsaW5lLWhlaWdodDogNDBweDtcbn1cbi5mZWVfdHlwZXMgLnRhYmxlX2hlYWRpbmc+ZGl2Omxhc3QtY2hpbGQsLmZlZV90eXBlcyAudGFibGVfYm9keT5kaXY6bGFzdC1jaGlsZHtcbnRleHQtYWxpZ246IHJpZ2h0O1xubWFyZ2luLWxlZnQ6YXV0bztcbm1hcmdpbi1yaWdodDowO1xucGFkZGluZy1yaWdodDogNTBweDtcbn1cbi50YWJsZV9ib2R5e1xuICAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cbi50YWJsZV9ib2R5PmRpdntcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogIzgwN0M3QztcbiAvKiBwYWRkaW5nOiA1cHggMHB4OyovXG4gICBsaW5lLWhlaWdodDogNDBweDtcblxufVxuLmZlZV90eXBlcyAudGFibGVfYm9keT5kaXZ7XG4gIHdpZHRoOiAyNSU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cblxuLmRpc2NvdW50IC50YWJsZV9oZWFkaW5nPmRpdntcbiAgd2lkdGg6IGNhbGMoMTAwJSAvIDUpO1xufVxuLmRpc2NvdW50IC50YWJsZV9ib2R5PmRpdntcbiAgd2lkdGg6IGNhbGMoMTAwJSAvIDUpO1xufVxuXG4uYm90dG9tX3BhZ2lnbmF0aW9ue1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwcHg7XG4gIHotaW5kZXg6IDEwMDtcbn1cbi5ib3R0b21fcGFnaWduYXRpb24gcHtcbmZvbnQtd2VpZ2h0OiA1MDA7XG5mb250LXNpemU6IDEzcHg7XG5saW5lLWhlaWdodDogMjBweDtcbn1cbi5ib3R0b21fcGFnaWduYXRpb24gc2VsZWN0e1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICMwMDc5RkY7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cbi5ib3R0b21fcGFnaWduYXRpb24gLncyMHtcbiAgd2lkdGg6IDIwJTtcbn1cbi5ib3R0b21fcGFnaWduYXRpb24gLncxMHtcbiAgd2lkdGg6IDEwJTtcbn1cbi5ib3R0b21fcGFnaWduYXRpb24gLnc1MHtcbiAgd2lkdGg6IDUwJTtcbn1cbi5ib3R0b21fcGFnaWduYXRpb24gLnc0MHtcbiAgd2lkdGg6IDQwJTtcbn1cbi5udW1iZXJ7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbmxpbmUtaGVpZ2h0OiAyMHB4O1xubGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbmNvbG9yOiAjMDAwMDAwO1xubWFyZ2luOjBweCA0cHg7XG59XG4uYWN0aXZlX2NpcmNsZXtcbiAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBcbmZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbmxpbmUtaGVpZ2h0OiAyMHB4O1xubGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbmNvbG9yOiAjZmZmO1xucGFkZGluZzoycHggN3B4O1xuYm9yZGVyLXJhZGl1czogNTAlO1xuYmFja2dyb3VuZDogIzAwNzlGRjtcbn1cbi5uZXh0e1xuICBmb250LXdlaWdodDogNjAwO1xuZm9udC1zaXplOiAxM3B4O1xubGluZS1oZWlnaHQ6IDIwcHg7XG5sZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuY29sb3I6ICMwMDc5RkY7XG5cbn1cbi53NDUwe1xuICB3aWR0aDogMzQ1cHg7XG59XG4ubW9kYWwtdGl0bGV7XG4gIGNvbG9yOiAjMkIyNjI2O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuLndoaXRlX2J1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGNvbG9yOiAjMTA5Q0YxO1xuICBwYWRkaW5nOiA4cHggMjBweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMxMDlDRjE7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi53MTAwe1xuIHdpZHRoOiAxMDAlO1xufVxuLm1vZGFsIHRleHRhcmVhe1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5mZWVzdHJ1YyAudGFibGVfaGVhZGluZz5kaXZ7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLyA0KTtcbn1cbi5mZWVzdHJ1YyAudGFibGVfYm9keT5kaXZ7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLyA0KTtcbn1cbi5tcjEwe1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4ubWFnbmlmeWluZy1nbGFzc3tcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZmVlL1ZlY3Rvci5wbmcpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOmxlZnQgY2VudGVyO1xuICB0ZXh0LWluZGVudDogMTVweDtcbn1cbi5wYWRkaW5nMTF7XG4gICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLnRleHR7XG4gIGNvbG9yOiAjOEE4QjhCO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDI0cHg7XG59XG4ucG9zaXRpb257XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDoxMyU7XG59XG4uY2VudGVye1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZHVtbXlfdGV4dHtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5kdW1teV90ZXh0PnB7XG4gIHdpZHRoOiA2MDBweDtcbiAgY29sb3I6ICM2MTc1OEU7XG59XG4uc2Nob29sIC50YWJsZV9oZWFkaW5nPmRpdntcbiAgd2lkdGg6IGNhbGMoMTAwJSAvIDYpO1xufVxuLnNjaG9vbCAudGFibGVfYm9keT5kaXZ7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLyA2KTtcbn1cbi50dXRpb24gLnRhYmxlX2hlYWRpbmc+ZGl2e1xuICB3aWR0aDogY2FsYygxMDAlIC8gNSk7XG59XG4udHV0aW9uIC50YWJsZV9ib2R5PmRpdntcbiAgd2lkdGg6IGNhbGMoMTAwJSAvIDUpO1xufVxuLmZlZV9uZXcgLnRhYmxlX2hlYWRpbmc+ZGl2e1xuICB3aWR0aDogY2FsYygoMTAwJSAtIDM4MHB4KSAvIDUpO1xufVxuLmZlZV9uZXcgLnRhYmxlX2JvZHk+ZGl2e1xuICB3aWR0aDogY2FsYygoMTAwJSAtIDM4MHB4KSAvIDUpO1xuICAgcGFkZGluZzogMHB4IDBweDtcbiAgbWFyZ2luOiAwcHg7IFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLmZlZV9uZXcgLnRhYmxlX2hlYWRpbmc+ZGl2Om50aC1jaGlsZCgyKXtcbiAgd2lkdGg6IDMzMHB4IDtcbn1cbi5mZWVfbmV3IC50YWJsZV9ib2R5PmRpdjpudGgtY2hpbGQoMil7XG4gIHdpZHRoOiAzMzBweDtcbn1cbi5mZWVfbmV3IC50YWJsZV9oZWFkaW5nPmRpdjpmaXJzdC1jaGlsZHtcbiAgd2lkdGg6IDUwcHggO1xufVxuLmZlZV9uZXcgLnRhYmxlX2JvZHk+ZGl2OmZpcnN0LWNoaWxke1xuICB3aWR0aDogNTBweDtcbn1cbi5wb2ludGVye1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ud2lkODB7XG4gIHdpZHRoOiA3MCU7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5ycnM6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIgeyB0ZXh0LWFsaWduOnJpZ2h0OyB9XG4uc2VsZWN0MXtcbiAgY29sb3I6IzhlOGY5MDtcbiAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2ZlZS9hcnJvdy1kb3duLnN2Z1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjoyMDBweCBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuLnNlbGVjdDJ7XG4gIGNvbG9yOiM4ZThmOTA7XG4gICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9mZWUvYXJyb3ctZG93bi5zdmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246ODJweCBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuLmltZ3tcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cbi53aWQyNDB7XG4gIHdpZHRoOiAyNDBweDtcbn1cbi5ncmVlbl90b3B7XG4gIHBhZGRpbmc6IDVweCAzMnB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTIuMTNkZWcsICMxOWJiM2MgNzEuMTklLCAjOTBkNzNlIDEwMy43NCUpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgY29sb3I6ICNGRkZGRkY7XG5cbn1cbi5ncmVlbl90b3A+c3BhbntcbiBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG4uaXRheHtcbiAgcGFkZGluZy10b3A6IDhweDtcblxuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgY29sb3I6ICMzMjNDNDc7XG5cbn1cbi5yZWxhdGl2ZXtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmluc3RhbGxtZW50c3tcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMTVweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgY29sb3I6ICMxMDlDRjE7XG59XG4uaW5mb3tcbiAgcGFkZGluZzogMHB4IDRweDtcbiAgY29sb3I6ICMxMDlDRjE7XG59XG4uc2F2ZXtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiA0N3B4O1xuICB6LWluZGV4OiAxMDA7XG4gIGhlaWdodDogNjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbi5zYXZlPmJ1dHRvbntcbnBvc2l0aW9uOiBmaXhlZDtcbnJpZ2h0OiAxNXB4O1xuYm90dG9tOiA2MHB4O1xufVxuLmZlZV9uZXd7XG5tYXJnaW4tYm90dG9tOiAxNDBweDtcbn1cbi8vIC5wYWdlX2hlYWRpbmd7XG4gIFxuLy8gfVxuLnBhZ2VfaGVhZGluZz5we1xuICBjb2xvcjogIzMzNEQ2RTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG4ucGFnZWhlYWRpbmdzcGFjZXtcbiAgbWFyZ2luLWJvdHRvbTogN3B4O1xufVxuLmxpZ2h0e1xuICBmb250LXdlaWdodDogNTAwO1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cbi5pbmRlbnR7XG5mbG9hdDogbGVmdDtcbnBhZGRpbmctbGVmdDogMy43cmVtO1xufVxuLmxlZnR7XG4gIGZsb2F0OiBsZWZ0O1xufVxuLndpZDUwe1xuICB3aWR0aDogNTAlO1xufVxuLnN0dWRlbnQgLnRhYmxlX2hlYWRpbmc+ZGl2e1xuICB3aWR0aDogY2FsYygxMDAlIC8gMik7XG59XG4uc3R1ZGVudCAudGFibGVfYm9keT5kaXZ7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLyAyKTtcbn1cbi5zaXplMjJ7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IDE4cHg7XG59XG4uc2VsZWN0M3tcbiAgY29sb3I6IzhlOGY5MDtcbiAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2ZlZS9hcnJvdy1kb3duLnN2Z1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjo0MzBweCBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuLm5hdj5saSB7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cbi5uYXYtbGlua3tcbiAgZGlzcGxheTogaW5saW5lO1xufVxuLm5hdi1saW5rOmhvdmVyLC5uYXYtbGluaywubmF2LWxpbms6Zm9jdXN7XG4gIGJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XG4gIH1cbiAgXG4gIC5uYXYtaXRlbSB7XG4gICAgICAubmF2LWxpbmsge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgY29sb3I6ICM0MDU4Nzc7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICB9XG4gICAgICAuYWN0aXZlIHtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzEwOWNmMSAhaW1wb3J0YW50O1xuICAgICAgICAgIGNvbG9yOiAjMTA5Y2YxICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgfVxuICAgIC5tb2RhbCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgIH1cbiAgICAgLnJpZ2h0e1xuICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgfVxuIC5tb2RhbC1kaWFsb2cge1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICB0b3A6MTAlO1xuICB9XG4gIC5tb2RhbC1oZWFkZXI6YmVmb3Jle1xuICAgIGRpc3BsYXk6bm9uZTtcbiAgfVxuICAvLyAubW9kYWwtaGVhZGVye1xuICAvLyAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gIC8vIH1cbiBcbiAgLmxlZnR7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gIH1cbiAgLnBhZGRpbmcye1xuICAgIHBhZGRpbmctbGVmdDogNTBweDtcbiAgfVxuICAudGFibGVIZWlnaHR7XG4gICAvLyBoZWlnaHQ6IDU0dmg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgfVxuICAuZGlzcGxheXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxuIl19 */";
      /***/
    },

    /***/
    "./src/app/components/fee-module/data-setup/fee-types-v2/fee-types-v2.component.ts":
    /*!*****************************************************************************************!*\
      !*** ./src/app/components/fee-module/data-setup/fee-types-v2/fee-types-v2.component.ts ***!
      \*****************************************************************************************/

    /*! exports provided: FeeTypesV2Component */

    /***/
    function srcAppComponentsFeeModuleDataSetupFeeTypesV2FeeTypesV2ComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeeTypesV2Component", function () {
        return FeeTypesV2Component;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../services/http.service */
      "./src/app/services/http.service.ts");
      /* harmony import */


      var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../services/authenticator.service */
      "./src/app/services/authenticator.service.ts");
      /* harmony import */


      var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../services/common-service */
      "./src/app/services/common-service.ts");
      /* harmony import */


      var _services_feeStruc_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
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
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var __importDefault = undefined && undefined.__importDefault || function (mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };

      var FeeTypesV2Component =
      /** @class */
      function () {
        var FeeTypesV2Component = /*#__PURE__*/function () {
          function FeeTypesV2Component(apiService, auth, commonService, http) {
            _classCallCheck(this, FeeTypesV2Component);

            this.apiService = apiService;
            this.auth = auth;
            this.commonService = commonService;
            this.http = http;
            this.type = '';
            this.activeSession = 'fee_types';
            this.addNewFee = {
              fee_type: '',
              fee_type_desc: '',
              fee_type_tax: '',
              fee_type_id: 0
            };
            this.feeTypeList = [];
            this.is_tax_enabled = sessionStorage.getItem("enable_tax_applicable_fee_installments") == '1' ? true : false;
            this.getInstituteFeeTypes();
          }

          _createClass(FeeTypesV2Component, [{
            key: "ngOnInit",
            value: function ngOnInit() {}
          }, {
            key: "toggle",
            value: function toggle(id) {
              this.activeSession = id;
            }
          }, {
            key: "getInstituteFeeTypes",
            value: function getInstituteFeeTypes() {
              var _this5 = this;

              this.auth.showLoader();
              this.apiService.getAllFeeType().subscribe(function (res) {
                _this5.auth.hideLoader();

                _this5.feeTypeList = res;
              }, function (err) {
                _this5.auth.hideLoader();

                _this5.commonService.showErrorMessage('error', '', err.error.message);
              });
            }
          }, {
            key: "editFeeTypes",
            value: function editFeeTypes(data) {
              if (data != null) {
                this.addNewFee.fee_type = data.fee_type;
                this.addNewFee.fee_type_desc = data.fee_type_desc;
                this.addNewFee.fee_type_tax = data.fee_type_tax;
                this.addNewFee.fee_type_id = data.fee_type_id;
                $('#feetypesModal').modal('show');
              }
            }
          }, {
            key: "createFeeType",
            value: function createFeeType() {
              var _this6 = this;

              if (this.validateUserInput()) {
                this.auth.showLoader();
                var url = "/api/v2/fee_types/create/" + sessionStorage.getItem('institute_id');
                var payload = {
                  fee_type_name: this.addNewFee.fee_type,
                  fee_type_desc: this.addNewFee.fee_type_desc,
                  institute_id: sessionStorage.getItem('institute_id')
                };

                if (this.is_tax_enabled) {
                  payload.tax_percentage = this.addNewFee.fee_type_tax == '' ? 0 : this.addNewFee.fee_type_tax;
                }

                this.http.postData(url, payload).subscribe(function (data) {
                  var temp = data;

                  _this6.commonService.showErrorMessage('success', '', temp.message);

                  _this6.auth.hideLoader();

                  $('#feetypesModal').modal('hide');

                  _this6.clearData();

                  _this6.getInstituteFeeTypes();
                }, function (error) {
                  _this6.auth.hideLoader();

                  _this6.commonService.showErrorMessage('error', '', error.error.message);
                });
              }
            }
          }, {
            key: "clearData",
            value: function clearData() {
              this.addNewFee = {
                fee_type: '',
                fee_type_desc: '',
                fee_type_tax: '',
                fee_type_id: 0
              };
              $('#feetypesModal').modal('hide');
            }
          }, {
            key: "validateUserInput",
            value: function validateUserInput() {
              if (this.addNewFee.fee_type.trim() == '') {
                this.commonService.showErrorMessage('info', '', "Enter Valid Fee Type!");
                return false;
              }

              return true;
            }
          }, {
            key: "updateFeeType",
            value: function updateFeeType() {
              var _this7 = this;

              if (this.validateUserInput()) {
                this.auth.showLoader();
                var url = "/api/v2/fee_types/update";
                var payload = {
                  id: this.addNewFee.fee_type_id,
                  fee_type_name: this.addNewFee.fee_type,
                  fee_type_desc: this.addNewFee.fee_type_desc,
                  institute_id: sessionStorage.getItem('institute_id')
                };

                if (this.is_tax_enabled) {
                  payload.tax_percentage = this.addNewFee.fee_type_tax == '' ? 0 : this.addNewFee.fee_type_tax;
                }

                this.http.putData(url, payload).subscribe(function (data) {
                  var temp = data;

                  _this7.commonService.showErrorMessage('success', '', temp.message);

                  _this7.auth.hideLoader();

                  $('#feetypesModal').modal('hide');

                  _this7.clearData();

                  _this7.getInstituteFeeTypes();
                }, function (error) {
                  _this7.auth.hideLoader();

                  _this7.commonService.showErrorMessage('error', '', error.error.message);
                });
              }
            }
          }]);

          return FeeTypesV2Component;
        }();

        FeeTypesV2Component.ctorParameters = function () {
          return [{
            type: _services_feeStruc_service__WEBPACK_IMPORTED_MODULE_4__["FeeStrucService"]
          }, {
            type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticatorService"]
          }, {
            type: _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonServiceFactory"]
          }, {
            type: _services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]
          }];
        };

        FeeTypesV2Component = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
          selector: 'app-fee-types-v2',
          template: __importDefault(__webpack_require__(
          /*! raw-loader!./fee-types-v2.component.html */
          "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fee-module/data-setup/fee-types-v2/fee-types-v2.component.html"))["default"],
          styles: [__importDefault(__webpack_require__(
          /*! ./fee-types-v2.component.scss */
          "./src/app/components/fee-module/data-setup/fee-types-v2/fee-types-v2.component.scss"))["default"]]
        }), __metadata("design:paramtypes", [_services_feeStruc_service__WEBPACK_IMPORTED_MODULE_4__["FeeStrucService"], _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticatorService"], _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonServiceFactory"], _services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])], FeeTypesV2Component);
        return FeeTypesV2Component;
      }();
      /***/

    },

    /***/
    "./src/app/components/fee-module/data-setup/fee-types/fee-types.component.scss":
    /*!*************************************************************************************!*\
      !*** ./src/app/components/fee-module/data-setup/fee-types/fee-types.component.scss ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsFeeModuleDataSetupFeeTypesFeeTypesComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/* ===============================header colors=======================*/\n.table-format-first .table-responsive table th,\n.table-format-first .table-responsive table td {\n  text-align: center;\n  padding: 10px 5px;\n}\n.table-format-first .table-responsive table th {\n  text-transform: capitalize;\n  font-size: 14px;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper {\n  display: inline-block;\n  overflow: initial;\n  margin-left: 0;\n  width: auto;\n  position: relative;\n  background: transparent;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox {\n  z-index: 2;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label {\n  font-size: 16px;\n  margin-left: 7px;\n  font-weight: 600;\n  vertical-align: middle;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:after, .table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:before {\n  z-index: 1;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper:after {\n  content: '';\n  width: 20px;\n  height: 20px;\n  background: #fff;\n  left: 0;\n  top: 0;\n  position: absolute;\n}\n.table-format-first .table-responsive table tbody tr td .fa-trash-o {\n  color: #f44336;\n  font-size: 20px;\n}\n.table-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-top: 10px;\n}\n.table-container .heading-container {\n  background: #e0eaec;\n  display: flex;\n  flex-direction: row;\n  font-size: 14px;\n  font-weight: 600;\n  text-align: left;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n}\n.table-container .heading-container .heading-item {\n  width: 10%;\n  text-align: center;\n}\n.table-container .value-outer-container {\n  display: flex;\n  flex-direction: column;\n  min-height: 53vh;\n  max-height: 54vh;\n  overflow-x: hidden;\n  overflow-y: auto;\n  border: 1px solid #ccc;\n}\n.table-container .value-outer-container .value-container {\n  display: flex;\n  flex-direction: row;\n  text-align: left;\n  padding: 4px;\n  font-size: 12px;\n  border-bottom: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n  border-top: none;\n}\n.table-container .value-outer-container .value-container .value-item {\n  width: 10%;\n  text-align: center;\n}\n.middle-section {\n  padding: 5px 15px;\n  width: 100%;\n  box-sizing: border-box;\n}\n.input_txt {\n  height: 29px;\n  padding: 0;\n  border: 1px solid #ccc;\n  background: transparent;\n}\n.note-wrapper {\n  padding: 10px 10px;\n  background: #efefef;\n}\n.note-wrapper h3 {\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n.note-wrapper ul li {\n  margin-top: 5px;\n}\n.table-responsive {\n  overflow-x: hidden;\n}\n.disable_input {\n  background: lightgrey !important;\n  cursor: not-allowed;\n}\n.add-edit {\n  margin-bottom: 15px;\n  margin-top: 15px;\n}\n.add-edit i {\n  display: inline-block;\n  width: 17px;\n  height: 17px;\n  border-radius: 50%;\n  line-height: 16px;\n  text-align: center;\n  font-size: 17px;\n  vertical-align: middle;\n  margin-right: 4px;\n}\n.add-edit span {\n  display: inline-block;\n}\n.add-edit .expend-box i {\n  line-height: 12px;\n  font-size: 14px;\n}\n.add-edit a {\n  cursor: pointer;\n}\n.create-standard-form {\n  margin: 10px 0;\n  padding: 10px 20px 20px;\n  background: #efefef;\n  border-top: 1px solid #d8d8d8;\n}\n.create-standard-form .form-ctrl {\n  background: transparent;\n  border-bottom: solid 1px #cccccc;\n}\n.closeBtnClass {\n  line-height: 11px !important;\n}\n.editCellInput {\n  margin: auto;\n}\ntable thead tr th {\n  padding-top: 10px !important;\n  padding-bottom: 10px !important;\n}\ntable tbody tr td {\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\ntable tbody tr .field-wrapper {\n  padding: 0px !important;\n}\ntable tbody tr .field-wrapper .form-ctrl {\n  display: block;\n  box-sizing: border-box;\n  padding: 0px 0px 0px 5px;\n  outline: none;\n  border: 0;\n  height: 26px;\n  box-shadow: none;\n  border-radius: 0;\n  line-height: 25px;\n  background: transparent;\n  width: 50%;\n  text-align: center;\n  border: 1px solid #ccc;\n}\ninput[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY3NzL2NvbW1vbi92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9mZWUtbW9kdWxlL2RhdGEtc2V0dXAvZmVlLXR5cGVzL2ZlZS10eXBlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZQSx1RUFBQTtBQVdBOztFQUtnQixrQkFBa0I7RUFDbEIsaUJBQWlCO0FDeEJqQztBRGtCQTtFQVNnQiwwQkFBMEI7RUFDMUIsZUFBZTtBQ3ZCL0I7QURhQTtFQWdCNEIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsV0FBVztFQUNYLGtCQUFrQjtFQUNsQix1QkFBdUI7QUN6Qm5EO0FESUE7RUF1QmdDLFVBQVU7QUN2QjFDO0FEQUE7RUEwQmdDLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtBQ3RCdEQ7QURQQTtFQWdDb0MsVUFBVTtBQ3JCOUM7QURYQTtFQW9DZ0MsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLE9BQU87RUFDUCxNQUFNO0VBQ04sa0JBQWtCO0FDckJsRDtBRHJCQTtFQThDNEIsY0FsRGI7RUFtRGEsZUFBZTtBQ3JCM0M7QUQ4QkE7RUFDSSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxnQkFBZ0I7QUMzQnBCO0FEdUJBO0VBTU0sbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIseUJBQXlCO0FDekIvQjtBRFVBO0VBaUJRLFVBQVU7RUFDVixrQkFBa0I7QUN2QjFCO0FES0E7RUFzQk0sYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0FDdkI1QjtBRExBO0VBOEJRLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLG9CQUFvQjtFQUNwQix5QkFBeUI7RUFDekIsZ0JBQWdCO0FDckJ4QjtBRGpCQTtFQXdDVSxVQUFVO0VBQ1Ysa0JBQWtCO0FDbkI1QjtBQXBHQTtFQUNJLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsc0JBQXNCO0FBdUcxQjtBQXBHQTtFQUNJLFlBQVk7RUFDWixVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLHVCQUF1QjtBQXVHM0I7QUFwR0E7RUFDSSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBdUd2QjtBQXpHQTtFQUlRLGVBQWU7RUFDZixrQkFBa0I7QUF5RzFCO0FBOUdBO0VBU1ksZUFBZTtBQXlHM0I7QUFwR0E7RUFDRSxrQkFBa0I7QUF1R3BCO0FBcEdBO0VBQ0ksZ0NBQWdDO0VBQ2hDLG1CQUFtQjtBQXVHdkI7QUFwR0E7RUFDSSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBdUdwQjtBQXpHQTtFQUtRLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsaUJBQWlCO0FBd0d6QjtBQXJIQTtFQWdCUSxxQkFBcUI7QUF5RzdCO0FBekhBO0VBb0JZLGlCQUFpQjtFQUNqQixlQUFlO0FBeUczQjtBQTlIQTtFQXlCUSxlQUFlO0FBeUd2QjtBQXJHQTtFQUNJLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLDZCQUE2QjtBQXdHakM7QUE1R0E7RUFNUSx1QkFBdUI7RUFDdkIsZ0NBQWdDO0FBMEd4QztBQXRHQTtFQUNJLDRCQUE0QjtBQXlHaEM7QUF0R0E7RUFDSSxZQUFZO0FBeUdoQjtBQXRHQTtFQUlnQiw0QkFBNEI7RUFDNUIsK0JBQStCO0FBc0cvQztBQTNHQTtFQVlnQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBbUduQztBQWhIQTtFQWdCZ0IsdUJBQXVCO0FBb0d2QztBQXBIQTtFQWtCb0IsY0FBYztFQUNkLHNCQUFzQjtFQUN0Qix3QkFBd0I7RUFDeEIsYUFBYTtFQUNiLFNBQVM7RUFDVCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsc0JBQXNCO0FBc0cxQztBQTlGQTs7RUFFSSx3QkFBd0I7RUFDeEIsU0FBUztBQWlHYiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZmVlLW1vZHVsZS9kYXRhLXNldHVwL2ZlZS10eXBlcy9mZWUtdHlwZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkcHVsbC1MOiBsZWZ0O1xuJHB1bGwtUjogcmlnaHQ7XG4kcHVsbC1ub25lOiBub25lO1xuJGZ1bGwtd2lkdGg6IDEwMCU7XG4kYm9yZGVyLWJveDogYm9yZGVyLWJveDtcbiRib3JkZXItY29sb3I6ICNkZWVhZWU7XG4kYmctd2hpdGU6ICNmZmY7XG4kZXJyb3ItY29sb3I6ICNmZjAwMDA7XG4kY29tbW9uLWJsdWU6ICMwMDg0ZjY7XG4kcHJpbWFyeS1jb2xvcjogIzMzMztcbiRib3JkZXItY29tbW9uOiNlYWVhZWI7XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1oZWFkZXIgY29sb3JzPT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4kaGVhZGVyLWJnOiMwMDYwQTM7XG4kaGVhZGVyLWJvcmRlcjojZWFlYWViO1xuJGxlZnRNZW51Qmc6I2ZhZmFmYTtcbiRsZWZ0TWVudUhvdmVyQmc6IzAwODRmNjtcbiRsZWZ0TWVudVRleHRIb3ZlckNvbG9yOiNmZmY7XG4kcmVkQnRuOiNmNDQzMzY7XG4kYm9yZGVyY2NjOiNjY2M7XG4kbGlnaHRCbHVlOiNlZmY3ZmY7XG4kdGFibGVIZWFkaW5nQmdDb2xvcjogIzAwNGE3ZTtcbi50YWJsZS1mb3JtYXQtZmlyc3Qge1xuICAgIC50YWJsZS1yZXNwb25zaXZlIHtcbiAgICAgICAgdGFibGUge1xuICAgICAgICAgICAgdGgsXG4gICAgICAgICAgICB0ZCB7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGgge1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRib2R5IHtcbiAgICAgICAgICAgICAgICB0ciB7XG4gICAgICAgICAgICAgICAgICAgIHRkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maWVsZC1jaGVja2JveC13cmFwcGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGluaXRpYWw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mb3JtLWNoZWNrYm94IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZvcm0tY2hlY2tib3grbGFiZWwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA3cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6YWZ0ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuZmEtdHJhc2gtbyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRyZWRCdG47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4udGFibGUtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAuaGVhZGluZy1jb250YWluZXIge1xuICAgICAgYmFja2dyb3VuZDogI2UwZWFlYztcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICAgIC5oZWFkaW5nLWl0ZW0ge1xuICAgICAgICB3aWR0aDogMTAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgfVxuICAgIC52YWx1ZS1vdXRlci1jb250YWluZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBtaW4taGVpZ2h0OiA1M3ZoO1xuICAgICAgbWF4LWhlaWdodDogNTR2aDtcbiAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgLnZhbHVlLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgICAgIC52YWx1ZS1pdGVtIHtcbiAgICAgICAgICB3aWR0aDogMTAlO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSIsIkBpbXBvcnQgXCIuL3NyYy9hc3NldHMvY3NzL2NvbW1vbi92YXJpYWJsZXMuc2Nzc1wiO1xuLm1pZGRsZS1zZWN0aW9uIHtcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uaW5wdXRfdHh0e1xuICAgIGhlaWdodDogMjlweDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7IFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4ubm90ZS13cmFwcGVyIHtcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XG4gICAgYmFja2dyb3VuZDogI2VmZWZlZjtcbiAgICBoMyB7XG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIH1cbiAgICB1bCB7XG4gICAgICAgIGxpIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnRhYmxlLXJlc3BvbnNpdmV7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cblxuLmRpc2FibGVfaW5wdXR7XG4gICAgYmFja2dyb3VuZDogbGlnaHRncmV5ICFpbXBvcnRhbnQ7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuLmFkZC1lZGl0IHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgaSB7XG4gICAgICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkICRjb21tb24tYmx1ZTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB3aWR0aDogMTdweDtcbiAgICAgICAgaGVpZ2h0OiAxN3B4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gICAgfVxuICAgIHNwYW4ge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgfVxuICAgIC5leHBlbmQtYm94IHtcbiAgICAgICAgaSB7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTJweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbn1cblxuLmNyZWF0ZS1zdGFuZGFyZC1mb3JtIHtcbiAgICBtYXJnaW46IDEwcHggMDtcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHggMjBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZDhkOGQ4O1xuICAgIC5mb3JtLWN0cmwge1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNjY2NjY2M7XG4gICAgfVxufVxuXG4uY2xvc2VCdG5DbGFzcyB7XG4gICAgbGluZS1oZWlnaHQ6IDExcHggIWltcG9ydGFudDtcbn1cblxuLmVkaXRDZWxsSW5wdXQge1xuICAgIG1hcmdpbjogYXV0bztcbn1cblxudGFibGUge1xuICAgIHRoZWFkIHtcbiAgICAgICAgdHIge1xuICAgICAgICAgICAgdGgge1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICB0Ym9keSB7XG4gICAgICAgIHRyIHtcbiAgICAgICAgICAgIHRkIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZmllbGQtd3JhcHBlciB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgLmZvcm0tY3RybCB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggMHB4IDBweCA1cHg7XG4gICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNnB4O1xuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vLy8vLyBUdXJuIG9mZiBzcGlubmVyXG5pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXG5pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICBtYXJnaW46IDA7XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/components/fee-module/data-setup/fee-types/fee-types.component.ts":
    /*!***********************************************************************************!*\
      !*** ./src/app/components/fee-module/data-setup/fee-types/fee-types.component.ts ***!
      \***********************************************************************************/

    /*! exports provided: FeeTypesComponent */

    /***/
    function srcAppComponentsFeeModuleDataSetupFeeTypesFeeTypesComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeeTypesComponent", function () {
        return FeeTypesComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../services/authenticator.service */
      "./src/app/services/authenticator.service.ts");
      /* harmony import */


      var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../services/common-service */
      "./src/app/services/common-service.ts");
      /* harmony import */


      var _services_feeStruc_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
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
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var __importDefault = undefined && undefined.__importDefault || function (mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };

      var FeeTypesComponent =
      /** @class */
      function () {
        var FeeTypesComponent = /*#__PURE__*/function () {
          function FeeTypesComponent(apiService, auth, commonService) {
            _classCallCheck(this, FeeTypesComponent);

            this.apiService = apiService;
            this.auth = auth;
            this.commonService = commonService;
            this.createNewFeeType = false;
            this.isTaxEnableFeeInstallments = false;
            this.addNewFee = {
              fee_type: '',
              fee_type_desc: '',
              fee_amount: '',
              fee_type_tax: 0,
              fee_type_id: 0,
              country_id: ''
            };
            this.feeTypeList = [];
            this.countryDetails = [];
          }

          _createClass(FeeTypesComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.getListOfFeeType();
              this.fetchDataForCountryDetails();
              this.isTaxEnableFeeInstallments = sessionStorage.getItem('enable_tax_applicable_fee_installments') == '0' ? true : false;
              this.tax_type_with_percentage = sessionStorage.getItem("tax_type_with_percentage");
              this.is_tax_enabled = sessionStorage.getItem("enable_tax_applicable_fee_installments") == '1' ? true : false;
            }
          }, {
            key: "getCurrencyDetails",
            value: function getCurrencyDetails(value, currency, lang) {
              if (value && currency && lang) {
                var formatted = value.toLocaleString(lang, {
                  maximumFractionDigits: 4,
                  style: 'currency',
                  currency: currency
                });
                formatted = formatted.replace(/[,.]/g, '');
                return formatted.replace(/[0-9]/g, '');
              } else {
                return lang;
              }
            }
          }, {
            key: "onRowDataChange",
            value: function onRowDataChange(country_id, row) {
              this.countryDetails.forEach(function (countryId) {
                if (countryId.id == country_id) {
                  row.country_id = countryId.id;
                }
              }); // if(country_id!='1'){
              //   row.fee_type_tax=0;
              // } 
            }
          }, {
            key: "getCountryDetails",
            value: function getCountryDetails(amount, country_id) {
              var symbol;

              for (var i = 0; i < this.countryDetails.length; i++) {
                if (this.countryDetails[i].id == country_id) {
                  symbol = this.countryDetails[i].symbol;
                }
              }

              return symbol;
            }
          }, {
            key: "fetchDataForCountryDetails",
            value: function fetchDataForCountryDetails() {
              var _this8 = this;

              var encryptedData = sessionStorage.getItem('country_data');
              var data = JSON.parse(encryptedData);

              if (data.length > 0) {
                this.countryDetails = data;
                this.countryDetails.forEach(function (country) {
                  if (country) {
                    country.symbol = _this8.getCurrencyDetails(1000, country.currency_code, country.country_code);
                    console.log('symbol', country.symbol);
                  }
                });
              }

              console.log(data);
            }
          }, {
            key: "getListOfFeeType",
            value: function getListOfFeeType() {
              var _this9 = this;

              this.auth.showLoader();
              this.apiService.getAllFeeType().subscribe(function (res) {
                _this9.auth.hideLoader();

                _this9.feeTypeList = res;

                _this9.feeTypeList.forEach(function (element) {
                  if (element.countryId) {
                    element.country_id = element.countryId.country_id;
                  }
                });
              }, function (err) {
                _this9.auth.hideLoader();

                _this9.commonService.showErrorMessage('error', '', err.error.message);
              });
            }
          }, {
            key: "updateDetails",
            value: function updateDetails() {
              var _this10 = this;

              var data = this.makeDataJson();

              if (!this.auth.isRippleLoad.getValue()) {
                this.auth.showLoader();
                this.apiService.upadateFeeType(data).subscribe(function (res) {
                  _this10.auth.hideLoader();

                  _this10.commonService.showErrorMessage('success', 'Updated', 'Details Updated Successfully');

                  _this10.getListOfFeeType();
                }, function (err) {
                  _this10.auth.hideLoader();

                  _this10.commonService.showErrorMessage('error', '', err.error.message);
                });
              }
            }
          }, {
            key: "makeDataJson",
            value: function makeDataJson() {
              var data = [];

              for (var t = 0; t < this.feeTypeList.length; t++) {
                var obj = {};
                obj.fee_amount = this.feeTypeList[t].fee_amount;
                obj.fee_type = this.feeTypeList[t].fee_type;
                obj.fee_type_desc = this.feeTypeList[t].fee_type_desc;
                obj.fee_type_id = this.feeTypeList[t].fee_type_id;
                obj.country_id = this.feeTypeList[t].country_id;

                if (this.feeTypeList[t].fee_type_tax == "" || this.feeTypeList[t].fee_type_tax == null) {
                  this.feeTypeList[t].fee_type_tax = 0;
                }

                obj.fee_type_tax = this.feeTypeList[t].fee_type_tax;
                data.push(obj);
              }

              return data;
            }
          }, {
            key: "addNewFeeType",
            value: function addNewFeeType() {
              if (this.addNewFee.fee_type.trim() != "") {
                if (this.addNewFee.country_id != "") {
                  if (this.addNewFee.fee_amount != "" && Number(this.addNewFee.fee_amount) > 0) {
                    var obj = this.addNewFee;
                    obj.country_id = Number(this.addNewFee.country_id);
                    this.onRowDataChange(obj.country_id, obj);
                    this.feeTypeList.push(obj);
                    this.addNewFee = {
                      fee_type: '',
                      fee_type_desc: '',
                      fee_amount: '',
                      fee_type_tax: 0,
                      fee_type_id: 0,
                      country_id: ''
                    };
                  } else {
                    this.commonService.showErrorMessage('error', '', 'Please enter fee amount');
                  }
                } else {
                  this.commonService.showErrorMessage('error', '', 'Please select the country');
                }
              } else {
                this.commonService.showErrorMessage('error', '', 'Please enter fee type');
              }
            }
          }, {
            key: "deleteRow",
            value: function deleteRow(row, index) {
              this.feeTypeList.splice(index, 1);
            }
          }, {
            key: "toggleCreate",
            value: function toggleCreate() {
              if (this.createNewFeeType == false) {
                this.createNewFeeType = true;
                document.getElementById('showCloseBtn').style.display = '';
                document.getElementById('showAddBtn').style.display = 'none';
              } else {
                this.createNewFeeType = false;
                document.getElementById('showCloseBtn').style.display = 'none';
                document.getElementById('showAddBtn').style.display = '';
              }
            }
          }]);

          return FeeTypesComponent;
        }();

        FeeTypesComponent.ctorParameters = function () {
          return [{
            type: _services_feeStruc_service__WEBPACK_IMPORTED_MODULE_3__["FeeStrucService"]
          }, {
            type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticatorService"]
          }, {
            type: _services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonServiceFactory"]
          }];
        };

        FeeTypesComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
          selector: 'app-fee-types',
          template: __importDefault(__webpack_require__(
          /*! raw-loader!./fee-types.component.html */
          "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fee-module/data-setup/fee-types/fee-types.component.html"))["default"],
          styles: [__importDefault(__webpack_require__(
          /*! ./fee-types.component.scss */
          "./src/app/components/fee-module/data-setup/fee-types/fee-types.component.scss"))["default"]]
        }), __metadata("design:paramtypes", [_services_feeStruc_service__WEBPACK_IMPORTED_MODULE_3__["FeeStrucService"], _services_authenticator_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticatorService"], _services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonServiceFactory"]])], FeeTypesComponent);
        return FeeTypesComponent;
      }();
      /***/

    },

    /***/
    "./src/app/components/fee-module/data-setup/fees-settings/fees-settings.component.scss":
    /*!*********************************************************************************************!*\
      !*** ./src/app/components/fee-module/data-setup/fees-settings/fees-settings.component.scss ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsFeeModuleDataSetupFeesSettingsFeesSettingsComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "* {\n  margin: 0px;\n  font-family: 'Open Sans', sans-serif;\n}\n\n.flex {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.flex2 {\n  display: flex;\n}\n\n.blue_button {\n  background-color: #109CF1;\n  color: white;\n  padding: 9px 20px;\n  font-size: 12px;\n  border: none;\n  border-radius: 5px;\n  font-weight: 500;\n  cursor: pointer;\n}\n\ninput[type=file]::file-selector-button {\n  background-color: #109CF1;\n  color: white;\n  padding: 9px 20px;\n  font-size: 12px;\n  border: none;\n  border-radius: 5px;\n  font-weight: 500;\n  cursor: pointer;\n}\n\n.white_button {\n  background-color: #fff;\n  color: #109CF1;\n  padding: 8px 19px;\n  font-size: 12px;\n  border: 1px solid #109CF1;\n  border-radius: 5px;\n  font-weight: 500;\n  cursor: pointer;\n}\n\ninput:focus, select:focus, button:focus {\n  outline: none;\n}\n\n.w98 {\n  width: 98%;\n  margin: 0px auto;\n}\n\n.w981 {\n  margin-left: 1%;\n}\n\n.main_div {\n  display: flex;\n  margin-top: 10px;\n}\n\n.main_div > div:first-child {\n  width: 15%;\n  background: #F3F4F6;\n  border: 1px solid #DCDCDC;\n  box-sizing: border-box;\n  height: 89vh;\n  position: fixed;\n}\n\n.settings {\n  padding: 20px 10px;\n  border-bottom: 1px solid #000;\n  font-weight: bold;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n  letter-spacing: 0.01em;\n  color: #1A2334;\n}\n\n.menu {\n  margin-top: 20px;\n}\n\n.menu li {\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 18px;\n  letter-spacing: 0.01em;\n  padding: 20px 0px;\n  padding-left: 10px;\n  color: #1A2334;\n  cursor: pointer;\n}\n\n.menu li.selected {\n  background: #FFFFFF;\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);\n  letter-spacing: 0.01em;\n}\n\na {\n  color: #1A2334;\n  text-decoration: none;\n}\n\n.menu li.selected > a {\n  color: #0097F9;\n}\n\n.display {\n  display: flex;\n  justify-content: space-between;\n}\n\n.bottom {\n  padding: 1%;\n  position: fixed;\n  bottom: 0;\n  background: #fff;\n  width: calc(100% - 15%);\n  border-top: 1px solid #EAEAEA;\n  box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.25);\n}\n\n.mr10 {\n  margin-right: 10px;\n}\n\n.main_div > div:last-child {\n  width: 80%;\n  margin-left: 20%;\n  /*overflow-y: scroll;*/\n  padding-right: 1%;\n  margin-bottom: 70px;\n}\n\n.ellipse {\n  background: #F0EFEF;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);\n  width: 19px;\n  height: 19px;\n  padding: 0px 7px;\n  border-radius: 50%;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 16px;\n  /* identical to box height, or 100% */\n  letter-spacing: 0.01em;\n  color: #0097F9;\n}\n\n.blue_line {\n  border-top: 1px solid #0097F9;\n  width: 22px;\n  display: inline-block;\n  margin: 0px 7px;\n  position: relative;\n  top: -4px;\n}\n\n.blue_settings {\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 22px;\n  /* identical to box height */\n  letter-spacing: 0.01em;\n  color: #0097F9;\n}\n\n.bold_settings {\n  font-weight: bold;\n  font-size: 13px;\n  line-height: 18px;\n  margin-bottom: 8px;\n  /* identical to box height */\n  letter-spacing: 0.01em;\n  color: #323C47;\n}\n\n.black_settings {\n  font-weight: normal;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n  margin-bottom: 16px;\n  letter-spacing: 0.01em;\n  color: #323C47;\n}\n\n.black_settings1 {\n  font-weight: normal;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n  margin-bottom: 8px;\n  letter-spacing: 0.01em;\n  color: #323C47;\n}\n\n.flex1 {\n  display: flex;\n  margin-top: 10px;\n}\n\n.sep_line {\n  margin-left: 65px;\n  border-bottom: 1px solid  #C4C4C4;\n  margin-bottom: 16px;\n}\n\n.toggle.s_toggle {\n  padding-top: 16px;\n}\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 35px;\n  height: 12px;\n}\n\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  /* background-color: #ccc;*/\n  -webkit-transition: .4s;\n  border: 1px solid #BDBABA;\n  box-sizing: border-box;\n  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1));\n  transition: .4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 18px;\n  width: 18px;\n  left: -6px;\n  bottom: -4px;\n  background-color: #BDBABA;\n  transition: .4s;\n}\n\ninput:checked + .slider {\n  /*background-color: #2196F3;*/\n}\n\ninput:focus + .slider {\n  /*box-shadow: 0 0 1px #2196F3;*/\n}\n\ninput:checked + .slider:before {\n  transform: translateX(26px);\n  background-color: #19C83F;\n}\n\ninput:checked + .slider {\n  border: 1px solid #BDBABA;\n}\n\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n\n.toggle {\n  display: flex;\n  margin-left: auto;\n  padding-right: 50px;\n  padding-top: 30px;\n}\n\n.off {\n  font-weight: 300;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n  letter-spacing: 0.01em;\n  color: #000000;\n  position: relative;\n  top: -6px;\n  margin: 0px 10px;\n}\n\n.on {\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n  margin: 0px 10px;\n  letter-spacing: 0.01em;\n  position: relative;\n  top: -6px;\n  color: #19C83F;\n}\n\n.hidden {\n  visibility: hidden;\n}\n\n.settings_label {\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n  margin-right: 40px;\n  letter-spacing: 0.01em;\n  color: #000000;\n  margin-left: -10px;\n}\n\n.checkbox {\n  display: grid;\n  grid-template-columns: -webkit-min-content auto;\n  grid-template-columns: min-content auto;\n  grid-gap: 0.5em;\n  font-size: 2rem;\n  color: var(--color);\n  cursor: pointer;\n  margin-bottom: 16px;\n}\n\n.checkbox__input input {\n  opacity: 0;\n  width: 0em;\n  height: 0em;\n}\n\n.checkbox__control {\n  display: inline-grid;\n  width: 0.5em;\n  height: 0.5em;\n  border-radius: 0.1em;\n  border: 1px solid #BBB2B2;\n}\n\n.checkbox__input {\n  display: grid;\n  grid-template-areas: \"checkbox\";\n}\n\n.checkbox__control svg {\n  color: #fff;\n  background: #109CF1;\n  transition: transform 0.1s ease-in 25ms;\n  transform: scale(0);\n  stroke-width: 4;\n  padding: 2px;\n  width: 0.5em;\n  height: 0.5em;\n  border: none;\n  border-radius: 3px;\n  transform-origin: bottom left;\n}\n\n.checkbox__input input:checked\n+ .checkbox__control svg {\n  transform: scale(1);\n}\n\n.checkbox__input input:checked\n+ .checkbox__control {\n  border: none;\n}\n\n.flex1 > div:nth-child(2) {\n  width: 60%;\n}\n\n.input {\n  box-sizing: border-box;\n  background: #F5F5F5;\n  border-radius: 2px;\n  width: 336px;\n  height: 35px;\n  margin-bottom: 16px;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 16px;\n  letter-spacing: 0.01em;\n  border: none;\n  outline: none;\n  text-indent: 10px;\n  color: #323C47;\n}\n\n.input::-moz-placeholder {\n  color: #8e939a;\n}\n\n.input:-ms-input-placeholder {\n  color: #8e939a;\n}\n\n.input::placeholder, option[disabled] {\n  color: #8e939a;\n}\n\n.width_large {\n  width: 100%;\n}\n\n.or {\n  width: 100px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.size {\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n  margin-bottom: 5px;\n  letter-spacing: 0.01em;\n  color: #334D6E;\n}\n\n.w40 {\n  width: 50%;\n}\n\n.width_small {\n  width: 80%;\n}\n\n.flex1 > div:first-child {\n  width: 65px;\n}\n\n.position {\n  position: relative;\n  top: -7px;\n  margin-left: 10px;\n}\n\n.flex3 > div:nth-child(3) span {\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 35px;\n  /* identical to box height */\n  letter-spacing: 0.01em;\n  margin: 0px 10px;\n  color: #211F27;\n}\n\n.flex3 > div:nth-child(3) span img:first-of-type {\n  margin: 0px 5px;\n  position: relative;\n  top: 8px;\n}\n\n.flex3 > div:nth-child(3) span img:nth-of-type(2) {\n  margin: 0px 5px;\n  position: relative;\n  top: 3px;\n}\n\n.flex3 > div:nth-child(3) .pic {\n  margin-top: 20px;\n}\n\n.flex3 {\n  margin-left: 65px;\n  margin-bottom: 16px;\n}\n\n.scrool1 {\n  overflow-y: scroll;\n  height: calc(100vh - 218px);\n}\n\n.clearFile {\n  padding: 5px;\n  width: 2%;\n  margin-top: 12px;\n  color: white;\n  cursor: pointer;\n  border: 1px solid;\n  font-weight: 600;\n  background: red;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mZWUtbW9kdWxlL2RhdGEtc2V0dXAvZmVlcy1zZXR0aW5ncy9mZWVzLXNldHRpbmdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVztFQUNYLG9DQUFvQztBQUN4Qzs7QUFFRTtFQUNFLGFBQWE7RUFDYixlQUFlO0FBQ25COztBQUNFO0VBQ0UsYUFBYTtBQUVqQjs7QUFBRTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0FBR25COztBQURFO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFJbkI7O0FBRkU7RUFDRSxzQkFBc0I7RUFDdEIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YseUJBQXdCO0VBQ3hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtBQUtuQjs7QUFERztFQUNJLGFBQWE7QUFJcEI7O0FBREU7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0FBSXBCOztBQUZFO0VBQ0UsZUFBZTtBQUtuQjs7QUFGRTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7QUFLcEI7O0FBSEU7RUFDQSxVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGVBQWU7QUFNakI7O0FBSkU7RUFDRSxrQkFBa0I7RUFDbEIsNkJBQTZCO0VBQzdCLGlCQUFpQjtFQUNuQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLDRCQUFBO0VBQ0Esc0JBQXNCO0VBQ3RCLGNBQWM7QUFPaEI7O0FBTEU7RUFDRSxnQkFBZ0I7QUFRcEI7O0FBTkU7RUFDRSxnQkFBZ0I7RUFDbEIsZUFBZTtFQUNmLGlCQUFp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Q2IsaUJBQWlCO0VBQ2pCLGNBQWM7QUEwQmhCOztBQXhCRTtFQUNBLGNBQWE7QUEyQmY7O0FBNUJFO0VBQ0EsY0FBYTtBQTJCZjs7QUE1QkU7RUFDQSxjQUFhO0FBMkJmOztBQXpCRTtFQUNFLFdBQVc7QUE0QmY7O0FBMUJFO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBNkJ2Qjs7QUEzQkU7RUFDRSxnQkFBZ0I7RUFDbEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQiw0QkFBQTtFQUNBLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFFdEIsY0FBYztBQTZCaEI7O0FBM0JFO0VBQ0UsVUFBVTtBQThCZDs7QUE1QkU7RUFDRSxVQUFVO0FBK0JkOztBQTdCRTtFQUNJLFdBQVc7QUFnQ2pCOztBQTlCRTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsaUJBQWlCO0FBaUNyQjs7QUEvQkE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQiw0QkFBQTtFQUNBLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsY0FBYztBQWtDaEI7O0FBL0JFO0VBQ0EsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixRQUFRO0FBa0NWOztBQWhDRTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsUUFBUTtBQW1DWjs7QUFqQ0k7RUFDRSxnQkFBZ0I7QUFvQ3RCOztBQWxDSTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFxQ3pCOztBQW5DSTtFQUNJLGtCQUFrQjtFQUNsQiwyQkFBMkI7QUFzQ25DOztBQXBDTztFQUNDLFlBQVk7RUFDWixTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixlQUFlO0FBdUN2QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZmVlLW1vZHVsZS9kYXRhLXNldHVwL2ZlZXMtc2V0dGluZ3MvZmVlcy1zZXR0aW5ncy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICB9XG4gIFxuICAuZmxleHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgfVxuICAuZmxleDJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuICAuYmx1ZV9idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMDlDRjE7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDlweCAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIGlucHV0W3R5cGU9ZmlsZV06OmZpbGUtc2VsZWN0b3ItYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTA5Q0YxO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiA5cHggMjBweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAud2hpdGVfYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGNvbG9yOiAjMTA5Q0YxO1xuICAgIHBhZGRpbmc6IDhweCAxOXB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBib3JkZXI6MXB4IHNvbGlkICMxMDlDRjE7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgXG4gICBpbnB1dDpmb2N1cywgc2VsZWN0OmZvY3VzLGJ1dHRvbjpmb2N1c3tcbiAgICAgICBvdXRsaW5lOiBub25lO1xuICAgfVxuICBcbiAgLnc5OHtcbiAgICB3aWR0aDogOTglO1xuICAgIG1hcmdpbjogMHB4IGF1dG87XG4gIH1cbiAgLnc5ODF7XG4gICAgbWFyZ2luLWxlZnQ6IDElO1xuICB9XG4gIFxuICAubWFpbl9kaXZ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICB9XG4gIC5tYWluX2Rpdj5kaXY6Zmlyc3QtY2hpbGR7XG4gIHdpZHRoOiAxNSU7XG4gIGJhY2tncm91bmQ6ICNGM0Y0RjY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNEQ0RDREM7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGhlaWdodDogODl2aDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB9XG4gIC5zZXR0aW5nc3tcbiAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gIGNvbG9yOiAjMUEyMzM0O1xuICB9XG4gIC5tZW51IHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICB9XG4gIC5tZW51IGxpe1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gIHBhZGRpbmc6IDIwcHggMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGNvbG9yOiAjMUEyMzM0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgLm1lbnUgbGkuc2VsZWN0ZWR7XG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuXG4gIH1cbiAgYXtcbiAgICBjb2xvcjogIzFBMjMzNDtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuICAubWVudSBsaS5zZWxlY3RlZD5he1xuICAgICAgXG4gIGNvbG9yOiAjMDA5N0Y5O1xuICB9XG4gIC5kaXNwbGF5e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG4gIC5ib3R0b217XG4gICAgcGFkZGluZzogMSU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxNSUpO1xuICAgIGJvcmRlci10b3A6MXB4IHNvbGlkICNFQUVBRUE7XG4gIGJveC1zaGFkb3c6IDRweCAwcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIH1cbiAgLm1yMTB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG4gIC5tYWluX2Rpdj5kaXY6bGFzdC1jaGlsZHtcbiAgICB3aWR0aDogODAlO1xuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XG4gICBcbiAgICAvKm92ZXJmbG93LXk6IHNjcm9sbDsqL1xuICAgIHBhZGRpbmctcmlnaHQ6IDElO1xuICAgIG1hcmdpbi1ib3R0b206IDcwcHg7XG4gIH1cbiAgLmVsbGlwc2V7XG4gICAgYmFja2dyb3VuZDogI0YwRUZFRjtcbiAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICB3aWR0aDogMTlweDtcbiAgaGVpZ2h0OiAxOXB4O1xuICBwYWRkaW5nOiAwcHggN3B4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0LCBvciAxMDAlICovXG4gIFxuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICBcbiAgY29sb3I6ICMwMDk3Rjk7XG4gIFxuICB9XG4gIC5ibHVlX2xpbmV7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMwMDk3Rjk7XG4gICAgd2lkdGg6IDIycHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbjogMHB4IDdweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAtNHB4O1xuICB9XG4gIC5ibHVlX3NldHRpbmdze1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gIGNvbG9yOiAjMDA5N0Y5O1xuICB9XG4gIC5ib2xkX3NldHRpbmdze1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gIGNvbG9yOiAjMzIzQzQ3O1xuIFxuICB9XG4gIC5ibGFja19zZXR0aW5nc3tcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICBcbiAgY29sb3I6ICMzMjNDNDc7XG4gIH1cbiAgLmJsYWNrX3NldHRpbmdzMXtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gIFxuICBjb2xvcjogIzMyM0M0NztcbiAgfVxuICAuZmxleDF7XG4gICAgZGlzcGxheTogZmxleDtcblxuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbiAgLnNlcF9saW5le1xuICAgIG1hcmdpbi1sZWZ0OiA2NXB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAgI0M0QzRDNDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICB9XG4gLnRvZ2dsZS5zX3RvZ2dsZXtcblxuICAgIHBhZGRpbmctdG9wOiAxNnB4OyBcbiAgfVxuICBcbiAgLnN3aXRjaCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgIHdpZHRoOiAzNXB4O1xuICBoZWlnaHQ6IDEycHg7XG4gIH1cbiAgXG4gIC5zd2l0Y2ggaW5wdXQgeyBcbiAgICBvcGFjaXR5OiAwO1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbiAgfVxuICBcbiAgLnNsaWRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjOyovXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0JEQkFCQTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSkpO1xuICAgIHRyYW5zaXRpb246IC40cztcbiAgfVxuICBcbiAgLnNsaWRlcjpiZWZvcmUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGhlaWdodDogMThweDtcbiAgICB3aWR0aDogMThweDtcbiAgICBsZWZ0OiAtNnB4O1xuICAgIGJvdHRvbTogLTRweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkRCQUJBO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xuICAgIHRyYW5zaXRpb246IC40cztcbiAgfVxuICBcbiAgaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xuICAgIC8qYmFja2dyb3VuZC1jb2xvcjogIzIxOTZGMzsqL1xuICB9XG4gIFxuICBpbnB1dDpmb2N1cyArIC5zbGlkZXIge1xuICAgIC8qYm94LXNoYWRvdzogMCAwIDFweCAjMjE5NkYzOyovXG4gIH1cbiAgXG4gIGlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XG4gICAgIGJhY2tncm91bmQtY29sb3I6ICMxOUM4M0Y7XG4gIH1cbiAgaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXJ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0JEQkFCQTtcbiAgfVxuICAuc2xpZGVyLnJvdW5kIHtcbiAgICBib3JkZXItcmFkaXVzOiAzNHB4O1xuICB9XG4gIFxuICAuc2xpZGVyLnJvdW5kOmJlZm9yZSB7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB9XG4gIC50b2dnbGV7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIC8vICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG4gICAgLy8gcGFkZGluZy10b3A6IDMwcHg7IFxuICAgIHBhZGRpbmctdG9wOjMwcHggO1xuICB9XG4gIC5vZmZ7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtNnB4O1xuICBtYXJnaW46IDBweCAxMHB4O1xuICB9XG4gIC5vbntcbiAgICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuICBtYXJnaW46IDBweCAxMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTZweDtcbiAgY29sb3I6ICMxOUM4M0Y7XG4gIH1cbiAgLmhpZGRlbntcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIH1cbiAgLnNldHRpbmdzX2xhYmVse1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG4gIG1hcmdpbi1yaWdodDogNDBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgfVxuICAuY2hlY2tib3gge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCBhdXRvO1xuICAgIGdyaWQtZ2FwOiAwLjVlbTtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgY29sb3I6IHZhcigtLWNvbG9yKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cbi5jaGVja2JveF9faW5wdXQgaW5wdXQge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgd2lkdGg6IDBlbTtcbiAgICBoZWlnaHQ6IDBlbTtcbiAgfVxuLmNoZWNrYm94X19jb250cm9sIHtcbiAgZGlzcGxheTogaW5saW5lLWdyaWQ7XG4gIHdpZHRoOiAwLjVlbTtcbiAgaGVpZ2h0OiAwLjVlbTtcbiAgYm9yZGVyLXJhZGl1czogMC4xZW07XG5ib3JkZXI6IDFweCBzb2xpZCAjQkJCMkIyO1xuO1xufVxuLmNoZWNrYm94X19pbnB1dCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiY2hlY2tib3hcIjtcbn1cbi5jaGVja2JveF9fY29udHJvbCBzdmcge1xuICAgIGNvbG9yOiAgI2ZmZjtcbiAgICBiYWNrZ3JvdW5kOiAjMTA5Q0YxO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xcyBlYXNlLWluIDI1bXM7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIHN0cm9rZS13aWR0aDo0O1xuICBwYWRkaW5nOjJweDtcbiAgICB3aWR0aDogMC41ZW07XG4gIGhlaWdodDogMC41ZW07XG4gYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSBsZWZ0O1xufVxuLmNoZWNrYm94X19pbnB1dCBpbnB1dDpjaGVja2VkXG4gKyAuY2hlY2tib3hfX2NvbnRyb2wgc3ZnIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cbi5jaGVja2JveF9faW5wdXQgaW5wdXQ6Y2hlY2tlZFxuICsgLmNoZWNrYm94X19jb250cm9sIHtcbmJvcmRlcjogbm9uZTtcbn1cbiAgLmZsZXgxPmRpdjpudGgtY2hpbGQoMil7XG4gICAgd2lkdGg6IDYwJTtcbiAgfVxuICAuaW5wdXR7XG4gIFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYmFja2dyb3VuZDogI0Y1RjVGNTtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgd2lkdGg6IDMzNnB4O1xuICAgIGhlaWdodDogMzVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICBib3JkZXI6bm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgdGV4dC1pbmRlbnQ6IDEwcHg7XG4gIGNvbG9yOiAjMzIzQzQ3O1xuICB9XG4gIC5pbnB1dDo6cGxhY2Vob2xkZXIgLCBvcHRpb25bZGlzYWJsZWRde1xuICBjb2xvcjojOGU5MzlhO1xuICB9XG4gIC53aWR0aF9sYXJnZXtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAub3J7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICAuc2l6ZXtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gIFxuICBjb2xvcjogIzMzNEQ2RTtcbiAgfVxuICAudzQwe1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbiAgLndpZHRoX3NtYWxse1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbiAgLmZsZXgxPmRpdjpmaXJzdC1jaGlsZHtcbiAgICAgIHdpZHRoOiA2NXB4O1xuICB9XG4gIC5wb3NpdGlvbntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAtN3B4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLmZsZXgzPmRpdjpudGgtY2hpbGQoMykgc3BhbntcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMzVweDtcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgbWFyZ2luOiAwcHggMTBweDtcbiAgY29sb3I6ICMyMTFGMjc7XG4gIFxuICB9XG4gIC5mbGV4Mz5kaXY6bnRoLWNoaWxkKDMpIHNwYW4gaW1nOmZpcnN0LW9mLXR5cGV7XG4gIG1hcmdpbjogMHB4IDVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDhweDtcbiAgfVxuICAuZmxleDM+ZGl2Om50aC1jaGlsZCgzKSBzcGFuIGltZzpudGgtb2YtdHlwZSgyKXtcbiAgICBtYXJnaW46IDBweCA1cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogM3B4O1xuICAgIH1cbiAgICAuZmxleDM+ZGl2Om50aC1jaGlsZCgzKSAucGlje1xuICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICB9XG4gICAgLmZsZXgze1xuICAgICAgbWFyZ2luLWxlZnQ6IDY1cHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgIH1cbiAgICAuc2Nyb29sMXtcbiAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyMThweCk7XG4gICAgICAgfVxuICAgICAgIC5jbGVhckZpbGV7XG4gICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgd2lkdGg6IDIlO1xuICAgICAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGJhY2tncm91bmQ6IHJlZDtcbiAgICB9Il19 */";
      /***/
    },

    /***/
    "./src/app/components/fee-module/data-setup/fees-settings/fees-settings.component.ts":
    /*!*******************************************************************************************!*\
      !*** ./src/app/components/fee-module/data-setup/fees-settings/fees-settings.component.ts ***!
      \*******************************************************************************************/

    /*! exports provided: FeesSettingsComponent */

    /***/
    function srcAppComponentsFeeModuleDataSetupFeesSettingsFeesSettingsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeesSettingsComponent", function () {
        return FeesSettingsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../services/common-service */
      "./src/app/services/common-service.ts");
      /* harmony import */


      var _services_message_show_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../services/message-show.service */
      "./src/app/services/message-show.service.ts");
      /* harmony import */


      var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../services/authenticator.service */
      "./src/app/services/authenticator.service.ts");
      /* harmony import */


      var _services_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../services/http.service */
      "./src/app/services/http.service.ts");
      /* harmony import */


      var _services_institute_setting_service_institute_setting_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../services/institute-setting-service/institute-setting.service */
      "./src/app/services/institute-setting-service/institute-setting.service.ts");

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
      }; //import { CommonServiceFactory } from 'src/app/services/common-service';


      var FeesSettingsComponent =
      /** @class */
      function () {
        var FeesSettingsComponent = /*#__PURE__*/function () {
          function FeesSettingsComponent(commonService, services, auth, apiService, httpService) {
            _classCallCheck(this, FeesSettingsComponent);

            this.commonService = commonService;
            this.services = services;
            this.auth = auth;
            this.apiService = apiService;
            this.httpService = httpService; //fetch settings tab switch info

            this.jsonFlagForSetting = false;
            this.currentSection = 'section0'; //keys
            //email_sender_id

            this.disabled = true;
            this.feesSettings = {
              pdc_reminder_setting: 0,
              institute_id: 100058,
              is_fee_struct_link_with_cour_or_stand: 1,
              email_id_for_fee_receipt: '',
              //email_sender_id:'',//account email
              inst_fee_activity_email_recipients: 'gdgd@gmail.com',
              pdc_reminder_sent_on: 0,
              enable_online_payment_feature: 0,
              institute_payment_account_id: 123,
              enable_online_payment_email_notification: 1,
              online_payment_notify_emailIds: 'tyut@vb.com',
              enable_online_payment_sms_notification: 0,
              online_payment_notify_mobiles: '9089999999',
              enable_tax_applicable_fee_installments: 0,
              enable_fee_templates: 0,
              gst_enabled: 0,
              gst_no: '',
              cgst: 0,
              sgst: 0,
              // gst_in:0,
              cin: 565,
              service_code: 97,
              state_code: 76,
              accounting_code: 87,
              tax_payable_on_reverse_charge_basis: 0,
              tax_type: '',
              enable_fee_receipt_fy_wise: 0,
              enable_fee_template_country_wise: '0',
              institute_logo: '',
              student_report_card_fee_module: 0,
              balance_amount_in_fee_receipt: 0,
              discount_amount_in_fee_receipt: 0,
              allow_fee_due_amount_in_notification: 0,
              due_date_in_fee_receipt: 0,
              show_counseller_name_in_fee_receipt: 0,
              show_total_dues_in_fee_receipt: 0,
              show_master_course_in_fee_receipt: 0,
              show_course_in_fee_receipt: 0,
              //fee_struct_link_with_cour_or_s:1
              fee_receipt_invoice_pattern: 1,
              phone_no_fee_receipt: '9878676778',
              inst_pan_no: '789asa87576',
              fee_receipt_prefix: 'r',
              fee_dues_daily_notification: {
                student: '',
                parent: '',
                gaurdian: ''
              },
              fee_dues_interval_notification: {
                student: '',
                parent: '',
                gaurdian: ''
              },
              pre_fee_dues_interval_notification: {
                student: '',
                parent: '',
                gaurdian: ''
              },
              student_fee_dues_notification: {
                student: '',
                parent: '',
                gaurdian: ''
              },
              fee_payment_notification: {
                student: '',
                parent: '',
                gaurdian: '',
                admin: ''
              },
              cheque_bounce_sms_notifn: {
                student: '',
                parent: '',
                gaurdian: '',
                admin: ''
              },
              logo_url: ''
            };
          }

          _createClass(FeesSettingsComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              var instituteTaxType = sessionStorage.getItem("tax_type_without_percentage") == 'Vat' ? 'Vat' : 'GST';
              this.instituteTaxType = sessionStorage.getItem("tax_type_without_percentage") == 'Vat' ? 'Vat' : 'GST';
            }
          }, {
            key: "fetchSettingsInfo",
            value: function fetchSettingsInfo() {
              this.jsonFlagForSetting = true;
            }
          }, {
            key: "scrollTo",
            value: function scrollTo(section) {
              document.querySelector('#' + section).scrollIntoView();
              this.currentSection = section;
            }
          }, {
            key: "convertBoolenToNumber",
            value: function convertBoolenToNumber(data) {
              if (data) {
                return 1;
              } else {
                return 0;
              }
            }
          }, {
            key: "getSumOfTableField",
            value: function getSumOfTableField(data) {
              var total = 0;

              for (var i = 0; i < Object.keys(data).length; i++) {
                if (Object.keys(data)[i] == 'student' && data.student == true) {
                  total = total + 2;
                } else if (Object.keys(data)[i] == 'parent' && data.parent == true) {
                  total = total + 4;
                } else if (Object.keys(data)[i] == 'gaurdian' && data.gaurdian == true) {
                  total = total + 32;
                } else if (Object.keys(data)[i] == 'teacher' && data.teacher == true) {
                  total = total + 8;
                } else if (Object.keys(data)[i] == 'admin' && data.admin == true) {
                  total = total + 16;
                } else if (Object.keys(data)[i] == 'openApp' && data.openApp == true) {
                  total = total + 64;
                }
              }

              return total;
            }
          }, {
            key: "constructJsonToSend",
            value: function constructJsonToSend() {
              var obj = Object.assign({}, this.feesSettings);
              obj.institute_id = Number(this.feesSettings.institute_id);
              obj.gst_no = Number(this.feesSettings.gst_no);
              obj.cgst = Number(this.feesSettings.cgst);
              obj.sgst = Number(this.feesSettings.sgst);
              obj.cin = Number(this.feesSettings.cin); //obj.service_code = Number(this.feesSettings.service_code);

              obj.pdc_reminder_setting = this.convertBoolenToNumber(this.feesSettings.pdc_reminder_setting);
              obj.enable_online_payment_feature = this.convertBoolenToNumber(this.feesSettings.enable_online_payment_feature);
              obj.enable_online_payment_feature = this.convertBoolenToNumber(this.feesSettings.enable_online_payment_feature);
              obj.enable_online_payment_email_notification = this.convertBoolenToNumber(this.feesSettings.enable_online_payment_email_notification);
              obj.enable_online_payment_sms_notification = this.convertBoolenToNumber(this.feesSettings.enable_online_payment_sms_notification);
              obj.enable_tax_applicable_fee_installments = this.convertBoolenToNumber(this.feesSettings.enable_tax_applicable_fee_installments);
              obj.enable_fee_templates = this.convertBoolenToNumber(this.feesSettings.enable_fee_templates);
              obj.tax_payable_on_reverse_charge_basis = this.convertBoolenToNumber(this.feesSettings.tax_payable_on_reverse_charge_basis);
              obj.enable_fee_receipt_fy_wise = this.convertBoolenToNumber(this.feesSettings.enable_fee_receipt_fy_wise);
              obj.enable_fee_template_country_wise = this.convertBoolenToNumber(this.feesSettings.enable_fee_template_country_wise);
              obj.student_report_card_fee_module = this.convertBoolenToNumber(this.feesSettings.student_report_card_fee_module);
              obj.balance_amount_in_fee_receipt = this.convertBoolenToNumber(this.feesSettings.balance_amount_in_fee_receipt);
              obj.discount_amount_in_fee_receipt = this.convertBoolenToNumber(this.feesSettings.discount_amount_in_fee_receipt);
              obj.show_counseller_name_in_fee_receipt = this.convertBoolenToNumber(this.feesSettings.show_counseller_name_in_fee_receipt);
              obj.show_total_dues_in_fee_receipt = this.convertBoolenToNumber(this.feesSettings.show_total_dues_in_fee_receipt);
              obj.show_master_course_in_fee_receipt = this.convertBoolenToNumber(this.feesSettings.show_master_course_in_fee_receipt);
              obj.show_course_in_fee_receipt = this.convertBoolenToNumber(this.feesSettings.show_course_in_fee_receipt);
              obj.fee_dues_daily_notification = this.getSumOfTableField(this.feesSettings.fee_dues_daily_notification);
              obj.fee_dues_interval_notification = this.getSumOfTableField(this.feesSettings.fee_dues_interval_notification);
              obj.pre_fee_dues_interval_notification = this.getSumOfTableField(this.feesSettings.pre_fee_dues_interval_notification);
              obj.student_fee_dues_notification = this.getSumOfTableField(this.feesSettings.student_fee_dues_notification);
              obj.fee_payment_notification = this.getSumOfTableField(this.feesSettings.fee_payment_notification);
              obj.cheque_bounce_sms_notifn = this.getSumOfTableField(this.feesSettings.cheque_bounce_sms_notifn);
              obj.logo_url = this.feesSettings.logo_url;
              obj.institute_logo = this.institute_logo;
              return obj;
            }
          }, {
            key: "saveFeesSettings",
            value: function saveFeesSettings() {
              var _this11 = this;

              var dataToSend = {};

              if (this.feesSettings.gst_enabled) {
                if (this.feesSettings.gst_no == null) {
                  this.commonService.showErrorMessage('error', '', "Please specify " + this.instituteTaxType + " NO.");
                  return;
                }
              } //dataToSend = this.feesSettings;


              dataToSend = this.constructJsonToSend();
              console.log(dataToSend);
              this.auth.showLoader();
              this.apiService.savePartialData(dataToSend).subscribe(function (res) {
                _this11.auth.hideLoader();

                _this11.commonService.showErrorMessage('success', '', "All your setting saved successfully");

                _this11.cancel();
              }, function (err) {
                _this11.auth.hideLoader();

                _this11.commonService.showErrorMessage('error', '', err.error.message);
              });
            }
          }, {
            key: "maxlenth",
            value: function maxlenth(data, limit) {
              if (data.length > limit) {
                this.services.showErrorMessage(this.services.toastTypes.info, '', "Please Enter upto" + " " + limit + " " + "character only");
              }
            }
          }, {
            key: "disjusdialContId",
            value: function disjusdialContId() {
              this.disabled = !this.disabled;
            }
          }, {
            key: "cancel",
            value: function cancel() {
              this.feesSettings = {
                logo_url: '',
                pdc_reminder_setting: 0,
                institute_id: 100058,
                is_fee_struct_link_with_cour_or_stand: 1,
                email_id_for_fee_receipt: '',
                //email_sender_id:'',//account email
                inst_fee_activity_email_recipients: 'gdgd@gmail.com',
                pdc_reminder_sent_on: 0,
                enable_online_payment_feature: 0,
                institute_payment_account_id: 123,
                enable_online_payment_email_notification: 1,
                online_payment_notify_emailIds: 'tyut@vb.com',
                enable_online_payment_sms_notification: 0,
                online_payment_notify_mobiles: '9089999999',
                enable_tax_applicable_fee_installments: 0,
                enable_fee_templates: 0,
                gst_enabled: 0,
                gst_no: '',
                cgst: 0,
                sgst: 0,
                // gst_in:0,
                cin: 565,
                service_code: 97,
                state_code: 76,
                accounting_code: 87,
                tax_payable_on_reverse_charge_basis: 0,
                tax_type: '',
                enable_fee_receipt_fy_wise: 0,
                enable_fee_template_country_wise: '0',
                institute_logo: '',
                student_report_card_fee_module: 0,
                balance_amount_in_fee_receipt: 0,
                discount_amount_in_fee_receipt: 0,
                allow_fee_due_amount_in_notification: 0,
                due_date_in_fee_receipt: 0,
                show_counseller_name_in_fee_receipt: 0,
                show_total_dues_in_fee_receipt: 0,
                show_master_course_in_fee_receipt: 0,
                show_course_in_fee_receipt: 0,
                //fee_struct_link_with_cour_or_s:1
                fee_receipt_invoice_pattern: 1,
                phone_no_fee_receipt: '9878676778',
                inst_pan_no: '789asa87576',
                fee_receipt_prefix: 'r',
                fee_dues_daily_notification: {
                  student: '',
                  parent: '',
                  gaurdian: ''
                },
                fee_dues_interval_notification: {
                  student: '',
                  parent: '',
                  gaurdian: ''
                },
                pre_fee_dues_interval_notification: {
                  student: '',
                  parent: '',
                  gaurdian: ''
                },
                student_fee_dues_notification: {
                  student: '',
                  parent: '',
                  gaurdian: ''
                },
                fee_payment_notification: {
                  student: '',
                  parent: '',
                  gaurdian: '',
                  admin: ''
                },
                cheque_bounce_sms_notifn: {
                  student: '',
                  parent: '',
                  gaurdian: '',
                  admin: ''
                }
              };
            }
          }, {
            key: "isFeeStructureLikedWithStudent",
            value: function isFeeStructureLikedWithStudent() {
              var _this12 = this;

              var prevVal = this.feesSettings.is_fee_struct_link_with_cour_or_stand;
              this.auth.showLoader();
              this.httpService.getData('/api/v1/student_wise/feeStructure/isLinked/' + sessionStorage.getItem('institute_id')).subscribe(function (res) {
                _this12.auth.hideLoader();
              }, function (err) {
                _this12.feesSettings.is_fee_struct_link_with_cour_or_stand = prevVal;

                _this12.auth.hideLoader();

                _this12.commonService.showErrorMessage('error', '', err.error.message);
              });
            }
          }, {
            key: "isGstEnable",
            value: function isGstEnable() {
              var _this13 = this;

              var prevVal = this.feesSettings.gst_enabled;
              this.auth.showLoader();
              this.httpService.getData('/api/v1/student_wise/feeStructure/isGSTLinked/' + sessionStorage.getItem('institute_id')).subscribe(function (res) {
                _this13.auth.hideLoader();
              }, function (err) {
                _this13.feesSettings.gst_enabled = prevVal;

                _this13.auth.hideLoader();

                _this13.commonService.showErrorMessage('error', '', err.error.message);
              });
            }
          }, {
            key: "readFile",
            value: function readFile(file) {
              var _this14 = this;

              console.log(file);
              var reader = new FileReader();

              if (file) {
                reader.readAsDataURL(file);

                reader.onloadend = function () {
                  _this14.institute_logo = reader.result.split(',')[1];
                  return reader.result.split(',')[1];
                };
              }
            }
          }, {
            key: "clearFile",
            value: function clearFile() {
              // alert("hh")
              this.institute_logo = '';
              this.feesSettings.institute_logo = '';
            }
          }]);

          return FeesSettingsComponent;
        }();

        FeesSettingsComponent.ctorParameters = function () {
          return [{
            type: _services_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonServiceFactory"]
          }, {
            type: _services_message_show_service__WEBPACK_IMPORTED_MODULE_2__["MessageShowService"]
          }, {
            type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"]
          }, {
            type: _services_institute_setting_service_institute_setting_service__WEBPACK_IMPORTED_MODULE_5__["InstituteSettingService"]
          }, {
            type: _services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]
          }];
        };

        FeesSettingsComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
          selector: 'app-fees-settings',
          template: __importDefault(__webpack_require__(
          /*! raw-loader!./fees-settings.component.html */
          "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fee-module/data-setup/fees-settings/fees-settings.component.html"))["default"],
          styles: [__importDefault(__webpack_require__(
          /*! ./fees-settings.component.scss */
          "./src/app/components/fee-module/data-setup/fees-settings/fees-settings.component.scss"))["default"]]
        }), __metadata("design:paramtypes", [_services_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonServiceFactory"], _services_message_show_service__WEBPACK_IMPORTED_MODULE_2__["MessageShowService"], _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"], _services_institute_setting_service_institute_setting_service__WEBPACK_IMPORTED_MODULE_5__["InstituteSettingService"], _services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]])], FeesSettingsComponent);
        return FeesSettingsComponent;
      }();
      /***/

    },

    /***/
    "./src/app/components/fee-module/data-setup/index.ts":
    /*!***********************************************************!*\
      !*** ./src/app/components/fee-module/data-setup/index.ts ***!
      \***********************************************************/

    /*! exports provided: DataSetupComponent, DiscountReasonComponent, MenuComponent, FeeTypesComponent */

    /***/
    function srcAppComponentsFeeModuleDataSetupIndexTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _data_setup_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./data-setup.component */
      "./src/app/components/fee-module/data-setup/data-setup.component.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DataSetupComponent", function () {
        return _data_setup_component__WEBPACK_IMPORTED_MODULE_0__["DataSetupComponent"];
      });
      /* harmony import */


      var _discount_reason_discount_reason_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./discount-reason/discount-reason.component */
      "./src/app/components/fee-module/data-setup/discount-reason/discount-reason.component.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DiscountReasonComponent", function () {
        return _discount_reason_discount_reason_component__WEBPACK_IMPORTED_MODULE_1__["DiscountReasonComponent"];
      });
      /* harmony import */


      var _menu_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./menu/menu.component */
      "./src/app/components/fee-module/data-setup/menu/menu.component.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "MenuComponent", function () {
        return _menu_menu_component__WEBPACK_IMPORTED_MODULE_2__["MenuComponent"];
      });
      /* harmony import */


      var _fee_types_fee_types_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./fee-types/fee-types.component */
      "./src/app/components/fee-module/data-setup/fee-types/fee-types.component.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "FeeTypesComponent", function () {
        return _fee_types_fee_types_component__WEBPACK_IMPORTED_MODULE_3__["FeeTypesComponent"];
      });
      /***/

    },

    /***/
    "./src/app/components/fee-module/data-setup/menu/menu.component.scss":
    /*!***************************************************************************!*\
      !*** ./src/app/components/fee-module/data-setup/menu/menu.component.scss ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsFeeModuleDataSetupMenuMenuComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/* ===============================header colors=======================*/\n.table-format-first .table-responsive table th,\n.table-format-first .table-responsive table td {\n  text-align: center;\n  padding: 10px 5px;\n}\n.table-format-first .table-responsive table th {\n  text-transform: capitalize;\n  font-size: 14px;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper {\n  display: inline-block;\n  overflow: initial;\n  margin-left: 0;\n  width: auto;\n  position: relative;\n  background: transparent;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox {\n  z-index: 2;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label {\n  font-size: 16px;\n  margin-left: 7px;\n  font-weight: 600;\n  vertical-align: middle;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:after, .table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:before {\n  z-index: 1;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper:after {\n  content: '';\n  width: 20px;\n  height: 20px;\n  background: #fff;\n  left: 0;\n  top: 0;\n  position: absolute;\n}\n.table-format-first .table-responsive table tbody tr td .fa-trash-o {\n  color: #f44336;\n  font-size: 20px;\n}\n.table-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-top: 10px;\n}\n.table-container .heading-container {\n  background: #e0eaec;\n  display: flex;\n  flex-direction: row;\n  font-size: 14px;\n  font-weight: 600;\n  text-align: left;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n}\n.table-container .heading-container .heading-item {\n  width: 10%;\n  text-align: center;\n}\n.table-container .value-outer-container {\n  display: flex;\n  flex-direction: column;\n  min-height: 53vh;\n  max-height: 54vh;\n  overflow-x: hidden;\n  overflow-y: auto;\n  border: 1px solid #ccc;\n}\n.table-container .value-outer-container .value-container {\n  display: flex;\n  flex-direction: row;\n  text-align: left;\n  padding: 4px;\n  font-size: 12px;\n  border-bottom: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n  border-top: none;\n}\n.table-container .value-outer-container .value-container .value-item {\n  width: 10%;\n  text-align: center;\n}\n/** these css for gear icon download options\n* created by laxmi\n*/\nsvg:hover #gearIcon {\n  fill: #0084f6;\n}\n.asHover:hover {\n  color: #0084f6 !important;\n}\n.download:hover {\n  cursor: pointer;\n}\n.made-in {\n  font-size: 17px;\n  font-weight: bold;\n  text-align: left;\n}\n.dropdown > ul {\n  background: #fff;\n  padding: 10px 20px;\n  border: 1px solid #eaeaeb;\n  border-top: 0;\n  margin-top: 3px;\n  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 6px 10px 0 rgba(0, 0, 0, 0.12);\n}\n.dropdown > ul li {\n  color: #333;\n}\n.dropdown > ul li strong {\n  font-weight: 600;\n  display: block;\n}\n.dropdown > ul li a {\n  display: block;\n  color: #333;\n}\n.login-tube nav > ul > li {\n  display: inline-block;\n  position: relative;\n}\n.login-tube nav > ul > li > a {\n  color: #333;\n  text-decoration: none;\n  padding: 5px 10px;\n  display: block;\n  transition: all .4s;\n}\n.login-tube nav > ul > li > a:hover,\n.login-tube nav > ul > li:hover > a {\n  text-decoration: none;\n  background: #ccc;\n}\n.login-tube nav > ul > li .dropdown {\n  position: absolute;\n  visibility: hidden;\n  right: 0;\n  top: 100%;\n  min-width: 200px;\n  border-top: 0;\n  opacity: 0;\n  transition: all 0.1s cubic-bezier(0.55, 0, 0.55, 0.2);\n  transition-duration: .2s;\n  transform: scale(0.5);\n}\n.login-tube nav > ul > li .dropdown > ul li {\n  line-height: normal;\n}\n.login-tube nav > ul > li .dropdown > ul li a {\n  display: block;\n  margin: 5px 0;\n}\n.login-tube nav > ul > li .dropdown > ul li a:hover {\n  color: #0084f6;\n}\n.login-tube nav > ul > li .dropdown > ul ul {\n  padding-left: 15px;\n  padding-top: 10px;\n}\n.login-tube nav > ul > li .dropdown > ul ul ul {\n  padding-top: 0;\n}\n.login-tube nav > ul > li:hover .dropdown {\n  visibility: visible;\n  position: absolute;\n  opacity: 1;\n  right: 0;\n  top: 100%;\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition-duration: .5s;\n  transform: scale(1);\n}\n.span-button {\n  border: 1px solid #0084f6;\n  padding: 4px 8px;\n  color: #0084f6;\n  font-size: .9em;\n  border-radius: 2px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.span-button svg {\n  margin: -3px 0;\n  height: 14px;\n}\nlogin-nav > li {\n  display: inline-block;\n  padding: 0 7px;\n  cursor: pointer;\n  vertical-align: text-bottom;\n}\nlogin-nav > li .dropdown {\n  position: absolute;\n  right: 0;\n  top: 100%;\n  padding-top: 10px;\n}\nlogin-nav > li .icons {\n  width: 35px;\n  height: 35px;\n  display: block;\n  text-align: center;\n  box-sizing: border-box;\n  border-radius: 50%;\n  padding-top: 3px;\n  transition: all 0.1s;\n  border: 1px solid transparent;\n}\nlogin-nav > li .icons svg {\n  width: 25px;\n  color: #034979;\n}\nlogin-nav > li .icons svg .cls-1 {\n  stroke: #034979;\n  stroke-linejoin: unset;\n  border: none;\n}\nlogin-nav > li .user-info {\n  white-space: nowrap;\n  margin-right: 40px;\n  width: auto;\n  display: block;\n  position: relative;\n}\nlogin-nav > li .user-info > .icons {\n  display: inline-block;\n  vertical-align: middle;\n}\nlogin-nav > li .user-info > span {\n  vertical-align: middle;\n  display: inline-block;\n}\nlogin-nav > li .user-info:after {\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  content: \"\\f107\";\n  font-size: 17px;\n  position: absolute;\n  right: -20px;\n  top: 10px;\n}\n/**\n  this css is for report section css for cards\n  added by laxmi\n*/\n.report-box {\n  width: 100%;\n  height: 100%;\n  padding: 10px;\n}\n.report-box ul.card-box li.card-row {\n  margin: 10px 0px;\n}\n.report-box ul.card {\n  padding: 15px 10px;\n  border: 1px solid #efefef;\n  background: #fff;\n  height: 120px;\n  border-radius: 4px;\n  cursor: pointer;\n  text-align: left;\n  margin: 10px 0px;\n  box-shadow: 0px 0px 2px 0px;\n}\n.report-box ul.card li {\n  padding: 5px;\n}\n.report-box ul.card li:first-child {\n  font-size: 14px;\n  font-weight: 600;\n  padding: 10px 5px;\n}\n.report-box ul.card li:nth-child(2n) {\n  font-size: 12px;\n}\n.disabled {\n  cursor: not-allowed;\n  background: lightgrey;\n}\n.course-menu-section-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  flex-wrap: wrap;\n  padding-top: 10px;\n  margin-top: 10px;\n  border-top: 1px solid rgba(10, 10, 10, 0.5);\n  width: 100%;\n}\n.course-menu-section-container .course-menu-item {\n  padding: 15px 10px;\n  width: 31%;\n  background: #fff;\n  height: 120px;\n  border-radius: 4px;\n  cursor: pointer;\n  text-align: left;\n  margin: 1%;\n  box-shadow: 0px 3px 6px #696969;\n}\n.course-menu-section-container .course-menu-item .menu-title {\n  width: 100%;\n  justify-content: flex-start;\n  font-size: 14px;\n  font-weight: 600;\n  display: flex;\n  flex-direction: row;\n}\n.course-menu-section-container .course-menu-item .menu-title img {\n  width: 25px;\n  height: 25px;\n}\n.course-menu-section-container .course-menu-item .menu-title span {\n  margin-left: 10px;\n  margin-top: 5px;\n}\n.course-menu-section-container .course-menu-item .menu-description {\n  padding: 10px;\n  font-size: 12px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY3NzL2NvbW1vbi92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9mZWUtbW9kdWxlL2RhdGEtc2V0dXAvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIiwic3JjL2Fzc2V0cy9jc3MvY29tbW9uL2NvbW1vbi13ZWIuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZQSx1RUFBQTtBQVdBOztFQUtnQixrQkFBa0I7RUFDbEIsaUJBQWlCO0FDeEJqQztBRGtCQTtFQVNnQiwwQkFBMEI7RUFDMUIsZUFBZTtBQ3ZCL0I7QURhQTtFQWdCNEIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsV0FBVztFQUNYLGtCQUFrQjtFQUNsQix1QkFBdUI7QUN6Qm5EO0FESUE7RUF1QmdDLFVBQVU7QUN2QjFDO0FEQUE7RUEwQmdDLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtBQ3RCdEQ7QURQQTtFQWdDb0MsVUFBVTtBQ3JCOUM7QURYQTtFQW9DZ0MsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLE9BQU87RUFDUCxNQUFNO0VBQ04sa0JBQWtCO0FDckJsRDtBRHJCQTtFQThDNEIsY0FsRGI7RUFtRGEsZUFBZTtBQ3JCM0M7QUQ4QkE7RUFDSSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxnQkFBZ0I7QUMzQnBCO0FEdUJBO0VBTU0sbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIseUJBQXlCO0FDekIvQjtBRFVBO0VBaUJRLFVBQVU7RUFDVixrQkFBa0I7QUN2QjFCO0FES0E7RUFzQk0sYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNs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WTtFQUNaLGFBQWE7QUQwRmY7QUM3RkE7RUFRa0IsZ0JBQWdCO0FEeUZsQztBQ2pHQTtFQWFVLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsMkJBQTJCO0FEd0ZyQztBQzdHQTtFQStCYyxZQUFZO0FEa0YxQjtBQ2pIQTtFQXdCa0IsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7QUQ2Rm5DO0FDdkhBO0VBNkJrQixlQUFlO0FEOEZqQztBQ3RGQTtFQUNFLG1CQUFtQjtFQUNuQixxQkFBcUI7QUR5RnZCO0FBcFZBO0VBQ0ksYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0IsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsMkNBQXdDO0VBQ3hDLFdBQVc7QUF1VmY7QUEvVkE7RUFVTSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsVUFBVTtFQUVWLCtCQUErQjtBQXlWckM7QUE1V0E7RUFxQlEsV0FBVztFQUNYLDJCQUEyQjtFQUMzQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixtQkFBbUI7QUEyVjNCO0FBclhBO0VBNEJVLFdBQVc7RUFDWCxZQUFZO0FBNlZ0QjtBQTFYQTtFQWdDVSxpQkFBaUI7RUFDakIsZUFBZTtBQThWekI7QUEvWEE7RUFxQ1EsYUFBYTtFQUNiLGVBQWU7QUE4VnZCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mZWUtbW9kdWxlL2RhdGEtc2V0dXAvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHB1bGwtTDogbGVmdDtcbiRwdWxsLVI6IHJpZ2h0O1xuJHB1bGwtbm9uZTogbm9uZTtcbiRmdWxsLXdpZHRoOiAxMDAlO1xuJGJvcmRlci1ib3g6IGJvcmRlci1ib3g7XG4kYm9yZGVyLWNvbG9yOiAjZGVlYWVlO1xuJGJnLXdoaXRlOiAjZmZmO1xuJGVycm9yLWNvbG9yOiAjZmYwMDAwO1xuJGNvbW1vbi1ibHVlOiAjMDA4NGY2O1xuJHByaW1hcnktY29sb3I6ICMzMzM7XG4kYm9yZGVyLWNvbW1vbjojZWFlYWViO1xuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09aGVhZGVyIGNvbG9ycz09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuJGhlYWRlci1iZzojMDA2MEEzO1xuJGhlYWRlci1ib3JkZXI6I2VhZWFlYjtcbiRsZWZ0TWVudUJnOiNmYWZhZmE7XG4kbGVmdE1lbnVIb3ZlckJnOiMwMDg0ZjY7XG4kbGVmdE1lbnVUZXh0SG92ZXJDb2xvcjojZmZmO1xuJHJlZEJ0bjojZjQ0MzM2O1xuJGJvcmRlcmNjYzojY2NjO1xuJGxpZ2h0Qmx1ZTojZWZmN2ZmO1xuJHRhYmxlSGVhZGluZ0JnQ29sb3I6ICMwMDRhN2U7XG4udGFibGUtZm9ybWF0LWZpcnN0IHtcbiAgICAudGFibGUtcmVzcG9uc2l2ZSB7XG4gICAgICAgIHRhYmxlIHtcbiAgICAgICAgICAgIHRoLFxuICAgICAgICAgICAgdGQge1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoIHtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0Ym9keSB7XG4gICAgICAgICAgICAgICAgdHIge1xuICAgICAgICAgICAgICAgICAgICB0ZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuZmllbGQtY2hlY2tib3gtd3JhcHBlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBpbml0aWFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZm9ybS1jaGVja2JveCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mb3JtLWNoZWNrYm94K2xhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogN3B4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmFmdGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLmZhLXRyYXNoLW8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkcmVkQnRuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnRhYmxlLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgLmhlYWRpbmctY29udGFpbmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICNlMGVhZWM7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgICAuaGVhZGluZy1pdGVtIHtcbiAgICAgICAgd2lkdGg6IDEwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgIH1cbiAgICAudmFsdWUtb3V0ZXItY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgbWluLWhlaWdodDogNTN2aDtcbiAgICAgIG1heC1oZWlnaHQ6IDU0dmg7XG4gICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgIC52YWx1ZS1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgICAgICBib3JkZXItdG9wOiBub25lO1xuICAgICAgICAudmFsdWUtaXRlbSB7XG4gICAgICAgICAgd2lkdGg6IDEwJTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0iLCJAaW1wb3J0IFwiLi9zcmMvYXNzZXRzL2Nzcy9jb21tb24vY29tbW9uLXdlYi5zY3NzXCI7XG5cbi5jb3Vyc2UtbWVudS1zZWN0aW9uLWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDEwLDEwLDEwLDAuNSk7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLmNvdXJzZS1tZW51LWl0ZW17XG4gICAgICBwYWRkaW5nOiAxNXB4IDEwcHg7XG4gICAgICB3aWR0aDogMzElO1xuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgIGhlaWdodDogMTIwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgbWFyZ2luOiAxJTtcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDNweCA2cHggIzY5Njk2OTtcbiAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4ICM2OTY5Njk7XG4gICAgICAubWVudS10aXRsZXtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBpbWd7XG4gICAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICB9XG4gICAgICAgIHNwYW57XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAubWVudS1kZXNjcmlwdGlvbntcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAiLCJAaW1wb3J0IFwiLi9zcmMvYXNzZXRzL2Nzcy9jb21tb24vdmFyaWFibGVzLnNjc3NcIjtcbi8qKiB0aGVzZSBjc3MgZm9yIGdlYXIgaWNvbiBkb3dubG9hZCBvcHRpb25zXG4qIGNyZWF0ZWQgYnkgbGF4bWlcbiovXG5zdmc6aG92ZXIgI2dlYXJJY29uIHtcbiAgZmlsbDogIzAwODRmNjtcbn1cblxuLmFzSG92ZXI6aG92ZXIge1xuICBjb2xvcjogIzAwODRmNiAhaW1wb3J0YW50O1xufVxuXG4uZG93bmxvYWQ6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5tYWRlLWluIHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmRyb3Bkb3duIHtcbiAgJiA+IHVsIHtcbiAgICBiYWNrZ3JvdW5kOiAkYmctd2hpdGU7XG4gICAgcGFkZGluZzogMTBweCAyMHB4OyAvLyB3aWR0aDogMjAwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJGhlYWRlci1ib3JkZXI7XG4gICAgYm9yZGVyLXRvcDogMDtcbiAgICBtYXJnaW4tdG9wOiAzcHg7XG4gICAgYm94LXNoYWRvdzogMCAycHggNHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDRweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDZweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcblxuICAgIGxpIHtcbiAgICAgIGNvbG9yOiAjMzMzO1xuXG4gICAgICBzdHJvbmcge1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cblxuICAgICAgYSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmxvZ2luLXR1YmUgbmF2ID4gdWwgPiBsaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubG9naW4tdHViZSBuYXYgPiB1bCA+IGxpID4gYSB7XG4gIGNvbG9yOiAjMzMzO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgdHJhbnNpdGlvbjogYWxsIC40cztcbn1cblxuLmxvZ2luLXR1YmUgbmF2ID4gdWwgPiBsaSA+IGE6aG92ZXIsXG4ubG9naW4tdHViZSBuYXYgPiB1bCA+IGxpOmhvdmVyID4gYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYmFja2dyb3VuZDogI2NjYztcbn1cblxuLmxvZ2luLXR1YmUgbmF2ID4gdWwgPiBsaSAuZHJvcGRvd24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMTAwJTtcbiAgbWluLXdpZHRoOiAyMDBweDtcbiAgYm9yZGVyLXRvcDogMDtcbiAgb3BhY2l0eTogMDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjFzIGN1YmljLWJlemllciguNTUsIDAsIC41NSwgLjIpO1xuICB0cmFuc2l0aW9uOiBhbGwgLjFzIGN1YmljLWJlemllciguNTUsIDAsIC41NSwgLjIpO1xuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IC4yNXM7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IC4ycztcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xuXG4gICYgPiB1bCB7XG4gICAgbGkge1xuICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcblxuICAgICAgYSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW46IDVweCAwO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGNvbG9yOiAkY29tbW9uLWJsdWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB1bCB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgICBwYWRkaW5nLXRvcDogMTBweDtcblxuICAgICAgdWwge1xuICAgICAgICBwYWRkaW5nLXRvcDogMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmxvZ2luLXR1YmUgbmF2ID4gdWwgPiBsaTpob3ZlciAuZHJvcGRvd24ge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG9wYWNpdHk6IDE7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDEwMCU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC40cyBjdWJpYy1iZXppZXIoLjI1LCAuOCwgLjI1LCAxKTtcbiAgdHJhbnNpdGlvbjogYWxsIC40cyBjdWJpYy1iZXppZXIoLjI1LCAuOCwgLjI1LCAxKTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAuNXM7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IC41cztcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cblxuLnB1bGwtcmlnaHQge1xuICAvLyBtYXJnaW4tdG9wOiAyNnB4O1xuICAvLyBtYXJnaW4tbGVmdDogMTIycHg7XG59XG5cbi5zcGFuLWJ1dHRvbiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDg0ZjY7XG4gIHBhZGRpbmc6IDRweCA4cHg7XG4gIGNvbG9yOiAjMDA4NGY2O1xuICBmb250LXNpemU6IC45ZW07XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gIHN2ZyB7XG4gICAgbWFyZ2luOiAtM3B4IDA7XG4gICAgaGVpZ2h0OiAxNHB4O1xuICB9XG59XG5cbmxvZ2luLW5hdiB7XG4gICAgJj5saSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgcGFkZGluZzogMCA3cHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xuICAgICAgICAuZHJvcGRvd24ge1xuICAgICAgICAgICAgLy8gZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgdG9wOiAxMDAlO1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAuZHJvcGRvd24ge1xuICAgICAgICAgICAgICAgIC8vIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmljb25zIHtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5pY29ucyB7XG4gICAgICAgICAgICB3aWR0aDogMzVweDtcbiAgICAgICAgICAgIGhlaWdodDogMzVweDsgLy8gYm9yZGVyOiAxcHggc29saWQgJGJvcmRlci1jb2xvcjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAzcHg7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4xcztcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgICAgICAgICBjb2xvcjojMDM0OTc5O1xuXG4gICAgICAgICAgICAgICAgLmNscy0xIHtcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiAjMDM0OTc5O1xuICAgICAgICAgICAgICAgICAgICBzdHJva2UtbGluZWpvaW46IHVuc2V0O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC51c2VyLWluZm8ge1xuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNDBweDtcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAmPi5pY29ucyB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmPnNwYW4ge1xuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIGZvbnQ6IG5vcm1hbCBub3JtYWwgbm9ybWFsIDE0cHgvMSBGb250QXdlc29tZTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgICAgICAgICAgICAgdGV4dC1yZW5kZXJpbmc6IGF1dG87XG4gICAgICAgICAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgICAgICAgICAgICAgY29udGVudDogXCJcXGYxMDdcIjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAtMjBweDtcbiAgICAgICAgICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qKlxuICB0aGlzIGNzcyBpcyBmb3IgcmVwb3J0IHNlY3Rpb24gY3NzIGZvciBjYXJkc1xuICBhZGRlZCBieSBsYXhtaVxuKi9cbi5yZXBvcnQtYm94IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMTBweDtcbiAgdWwge1xuICAgICAgJi5jYXJkLWJveCB7XG4gICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAmLmNhcmQtcm93IHtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweCAwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgICAmLmNhcmQge1xuICAgICAgICAgIHBhZGRpbmc6IDE1cHggMTBweDtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWZlZmVmO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgaGVpZ2h0OiAxMjBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgbWFyZ2luOiAxMHB4IDBweDtcbiAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDJweCAwcHg7XG4gICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDVweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAmOm50aC1jaGlsZCgybil7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgfVxufVxuXG4uZGlzYWJsZWR7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIGJhY2tncm91bmQ6IGxpZ2h0Z3JleTtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/components/fee-module/data-setup/menu/menu.component.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/components/fee-module/data-setup/menu/menu.component.ts ***!
      \*************************************************************************/

    /*! exports provided: MenuComponent */

    /***/
    function srcAppComponentsFeeModuleDataSetupMenuMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MenuComponent", function () {
        return MenuComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../services/authenticator.service */
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

      var __importDefault = undefined && undefined.__importDefault || function (mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };

      var MenuComponent =
      /** @class */
      function () {
        var MenuComponent = /*#__PURE__*/function () {
          function MenuComponent(auth) {
            _classCallCheck(this, MenuComponent);

            this.auth = auth;
          }

          _createClass(MenuComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              var _this15 = this;

              this.auth.institute_type.subscribe(function (res) {
                if (res == 'LANG') {
                  ///batch 
                  _this15.moduleState = 'Batch';
                } else {
                  ///course
                  _this15.moduleState = 'Course';
                }
              });
            }
          }]);

          return MenuComponent;
        }();

        MenuComponent.ctorParameters = function () {
          return [{
            type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticatorService"]
          }];
        };

        MenuComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
          selector: 'app-menu',
          template: __importDefault(__webpack_require__(
          /*! raw-loader!./menu.component.html */
          "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fee-module/data-setup/menu/menu.component.html"))["default"],
          styles: [__importDefault(__webpack_require__(
          /*! ./menu.component.scss */
          "./src/app/components/fee-module/data-setup/menu/menu.component.scss"))["default"]]
        }), __metadata("design:paramtypes", [_services_authenticator_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticatorService"]])], MenuComponent);
        return MenuComponent;
      }();
      /***/

    },

    /***/
    "./src/app/services/feeStruc.service.ts":
    /*!**********************************************!*\
      !*** ./src/app/services/feeStruc.service.ts ***!
      \**********************************************/

    /*! exports provided: FeeStrucService */

    /***/
    function srcAppServicesFeeStrucServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeeStrucService", function () {
        return FeeStrucService;
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
      /*! ./authenticator.service */
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

      var FeeStrucService =
      /** @class */
      function () {
        var FeeStrucService = /*#__PURE__*/function () {
          function FeeStrucService(http, auth) {
            var _this16 = this;

            _classCallCheck(this, FeeStrucService);

            this.http = http;
            this.auth = auth;
            this.baseUrl = '';
            this.auth.currentAuthKey.subscribe(function (key) {
              _this16.Authorization = key;
              _this16.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Authorization": _this16.Authorization
              });
            });
            this.auth.currentInstituteId.subscribe(function (id) {
              _this16.institute_id = id;
            }); // this.institute_id = this.auth.getInstituteId();
            // this.Authorization = this.auth.getAuthToken();

            this.baseUrl = this.auth.getBaseUrl();
          }

          _createClass(FeeStrucService, [{
            key: "fetchFeeStruc",
            value: function fetchFeeStruc() {
              var url = this.baseUrl + "/api/v1/student_wise/feeStructure/fetchAll/" + this.institute_id;
              return this.http.get(url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            } ///////////////////////////////////////////////////////////////////////////
            //////////////////////////////////////////////////////////////////////
            //////////////////////Fee Type////////////////////////////////////////

          }, {
            key: "getAllFeeType",
            value: function getAllFeeType() {
              var url = this.baseUrl + "/api/v1/batchFeeSched/feeType/" + this.institute_id;
              return this.http.get(url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }, {
            key: "upadateFeeType",
            value: function upadateFeeType(data) {
              var url = this.baseUrl + "/api/v1/batchFeeSched/feeType/" + this.institute_id;
              return this.http.post(url, data, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }, {
            key: "additionalFeeTypeDetail",
            value: function additionalFeeTypeDetail(country_ids) {
              var url = this.baseUrl + "/api/v1/batchFeeSched/" + this.institute_id + "/country?country_ids=" + country_ids;
              return this.http.get(url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }, {
            key: "fetchFeeDetail",
            value: function fetchFeeDetail(id) {
              var url = this.baseUrl + "/api/v1/student_wise/feeStructure/fetch/" + this.institute_id + "/" + id;
              return this.http.get(url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }, {
            key: "updateFeeTemplate",
            value: function updateFeeTemplate(data) {
              var url = this.baseUrl + "/api/v1/student_wise/feeStructure/update/" + this.institute_id;
              return this.http.post(url, data, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }, {
            key: "getAdditionalFeeDeatails",
            value: function getAdditionalFeeDeatails(id) {
              var url = this.baseUrl + "/api/v1/batchFeeSched/feeType/" + id + "/details";
              return this.http.get(url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            } // Create Fee Template

          }, {
            key: "getMasterCourse",
            value: function getMasterCourse() {
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
            key: "getCourse",
            value: function getCourse(name) {
              var url = this.baseUrl + "/api/v1/courseMaster/fetch/" + this.institute_id + "/" + name;
              return this.http.get(url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            } // Lang Model Changes

          }, {
            key: "getAllStandard",
            value: function getAllStandard() {
              var url = this.baseUrl + "/api/v1/standards/all/" + this.institute_id + "?active=Y";
              return this.http.get(url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }, {
            key: "getCoursesOfStandard",
            value: function getCoursesOfStandard(id) {
              var url = this.baseUrl + "/api/v1/subjects/standards/" + id;
              return this.http.get(url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            } // Delete Fee Structure

          }, {
            key: "deleteFeeStructure",
            value: function deleteFeeStructure(id, is_archived) {
              var url = this.baseUrl + "/api/v1/student_wise/feeStructure/" + this.institute_id + "/" + id + "?is_archived=" + is_archived;
              return this.http["delete"](url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }]);

          return FeeStrucService;
        }();

        FeeStrucService.ctorParameters = function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }, {
            type: _authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"]
          }];
        };

        FeeStrucService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"]])], FeeStrucService);
        return FeeStrucService;
      }();
      /***/

    }
  }]);
})();
//# sourceMappingURL=app-components-fee-module-data-setup-data-setup-module-es5.js.map