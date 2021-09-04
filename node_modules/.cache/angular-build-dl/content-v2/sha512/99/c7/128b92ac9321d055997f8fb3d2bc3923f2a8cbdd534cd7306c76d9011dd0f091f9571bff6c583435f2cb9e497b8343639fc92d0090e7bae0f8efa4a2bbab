(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-components-expense-management-expense-management-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/expense-management/data-setup/add-edit-account/add-edit-account.component.html":
    /*!*************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/expense-management/data-setup/add-edit-account/add-edit-account.component.html ***!
      \*************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsExpenseManagementDataSetupAddEditAccountAddEditAccountComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div id=\"addAccountModal\" class=\"modal fade\" role=\"dialog\" data-backdrop=\"static\">\n  <div class=\"modal-dialog\">\n\n    <!-- Modal content-->\n    <div class=\"modal-content\" style=\"margin-top: 10%;\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" (click)=\"closePopups()\">&times;</button>\n        <h3 class=\"modal-title\" *ngIf=\"isEditAccount\">Update Account Details</h3>\n        <h3 class=\"modal-title\" *ngIf=\"!isEditAccount\">Create Account</h3>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"payee-container\">\n          <div class=\"payee-item field-wrapper\">\n\n            <div class=\"payee-item field-wrapper\">\n              <label for=\"\">Payee/Payer<span class=\"danger\">*</span></label>\n              <select class=\"form-ctrl\" name=\"\" [(ngModel)]=\"accountDetails.valuType\">\n                 <option value=\"0\">Payee</option>\n                <option value=\"1\">Payer</option>\n              </select>\n            </div>\n\n\n\n            <div class=\"payee-item field-wrapper\" *ngIf=\"accountDetails.valuType == '0'\">\n              <label for=\"\">Payee<span class=\"danger\">*</span></label>\n              <select class=\"form-ctrl\" name=\"\" [(ngModel)]=\"accountDetails.displayPayeeName\">\n                <option [value]=\"payee.party_id\" *ngFor=\"let payee of payeeAccount\">\n                  {{ payee.display_name }}\n                </option>\n              </select>\n            </div>\n\n\n\n            <div class=\"payee-item field-wrapper\" *ngIf=\"accountDetails.valuType == '1'\">\n              <label for=\"\">Payer<span class=\"danger\">*</span></label>\n              <select class=\"form-ctrl\" name=\"\" [(ngModel)]=\"accountDetails.displayPayeeName\">\n                 <option [value]=\"payeer.party_id\" *ngFor=\"let payeer of payeerAccount\">\n                  {{payeer.display_name}}</option>\n              </select>\n            </div>\n\n\n            <div class=\"payee-item field-wrapper\">\n              <label for=\"\">Account Name <span class=\"danger\">*</span><span class=\"danger\" *ngIf=\"accountDetails.valuType == '3'\">*</span></label>\n              <input type=\"text\" name=\"\" value=\"\" [(ngModel)]=\"accountDetails.accountName\"\n                placeholder=\"Enter Account Name\" class=\"form-ctrl\">\n            </div>\n\n            <div class=\"payee-item field-wrapper\">\n              <label for=\"\">Account Type<span class=\"danger\">*</span></label>\n              <select class=\"form-ctrl\" name=\"\" [(ngModel)]=\"accountDetails.accountType\">\n                <option title=\"{{acc.data_value}}\" [value]=\"acc.data_key\" *ngFor=\"let acc of account\">\n                  {{ (acc.data_value.length > 30) ? (acc.data_value | slice:0:30) + '...' : acc.data_value }}</option>\n              </select>\n            </div>\n\n            <div class=\"payee-item field-wrapper\" *ngIf=\"accountDetails.accountType == '3' || accountDetails.accountType == '0'\">\n              <!-- <label for=\"\">Account Number<span class=\"danger\" *ngIf=\"accountDetails.valuType == '0'\">*</span></label> -->\n              <label for=\"\">Account Number</label>\n\n              <input type=\"text\" name=\"\" value=\"\" [(ngModel)]=\"accountDetails.accountNumber\"\n                placeholder=\"Enter Account Number\" class=\"form-ctrl\">\n            </div>\n\n\n\n            <div class=\"payee-item field-wrapper\" *ngIf=\"accountDetails.accountType == '3' || accountDetails.accountType == '0'\">\n              <!-- <label for=\"\">IFSC Code<span class=\"danger\" *ngIf=\"accountDetails.valuType !== '1'\">*</span></label> -->\n              <label for=\"\">IFSC Code</label>\n\n              <input type=\"text\" name=\"\" value=\"\" [(ngModel)]=\"accountDetails.IFSC_Code\" placeholder=\"Enter IFSC Code\"\n                class=\"form-ctrl\">\n            </div>\n\n\n\n            <div class=\"payee-item field-wrapper\">\n              <label for=\"\">Description</label>\n              <input type=\"text\" name=\"\" value=\"\" [(ngModel)]=\"accountDetails.accountDescription\"\n                placeholder=\"Enter Account Description\" class=\"form-ctrl\">\n            </div>\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <!-- <button type=\"button\" class=\"btn btn-default\" (click)=\"closePopups()\">Close</button> -->\n          <button type=\"button\" class=\"btn btn-default add-area-btn\" (click)=\"saveAccountDetails()\">Save</button>\n        </div>\n      </div>\n\n    </div>\n  </div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/expense-management/data-setup/add-edit-category/add-edit-category.component.html":
    /*!***************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/expense-management/data-setup/add-edit-category/add-edit-category.component.html ***!
      \***************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsExpenseManagementDataSetupAddEditCategoryAddEditCategoryComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div id=\"addCategory\" class=\"modal fade\" role=\"dialog\" data-backdrop=\"static\">\n  <div class=\"modal-dialog\">\n\n    <!-- Modal content-->\n    <div class=\"modal-content\" style=\"margin-top: 10%;\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" (click)=\"closePopups()\">&times;</button>\n        <h3 class=\"modal-title\">{{isEditCategory ? 'Update Category Details' : 'Create Category'}}</h3>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"payee-container\">\n          <div class=\"payee-item field-wrapper\">\n            <label for=\"\">Category Name<span class=\"danger\">*</span></label>\n            <input type=\"text\" name=\"\" value=\"\" [(ngModel)]=\"addCategory.Name\" placeholder=\"Enter Category Name\"\n              class=\"form-ctrl\">\n          </div>\n          <div class=\"payee-item field-wrapper\">\n            <label for=\"\">Description</label>\n            <input type=\"text\" name=\"\" value=\"\" [(ngModel)]=\"addCategory.Description\"\n              placeholder=\"Enter Category Description\" class=\"form-ctrl\">\n          </div>\n          <!-- <div class=\"payee-item field-wrapper\" *ngIf=\"!isEditCategory && showCategoryDropdown\"> -->\n            <div class=\"payee-item field-wrapper\">\n              <label for=\"\">Category Type</label>\n            <select class=\"form-ctrl\" name=\"\" [(ngModel)]=\"addCategory.expense_category_type\">\n              <option value=\"\">Select category type</option>\n              <option value=\"2\">Expense</option>\n              <option value=\"3\">Income</option>\n            </select>\n          </div>\n          <div *ngIf=\"isEditCategory\" class=\"payee-item field-checkbox-wrapper\" style=\"margin-top: 10px;font-size: 12px;padding-left: 0;\">\n            <input style=\"appearance: checkbox;\" type=\"checkbox\" id=\"isActive\" name=\"isActive\" [(ngModel)]=\"addCategory.isActive\" class=\"form-ctrl\">\n            <label for=\"isActive\" style=\"padding-left: 5px\">Is Active</label>\n          </div>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <!-- <button type=\"button\" class=\"btn btn-default\" (click)=\"closePopups()\">Close</button> -->\n        <button type=\"button\" class=\"btn btn-default add-area-btn\" (click)=\"saveCategoryDetails()\">Save</button>\n      </div>\n    </div>\n\n  </div>\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/expense-management/data-setup/add-edit-payee/add-edit-payee.component.html":
    /*!*********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/expense-management/data-setup/add-edit-payee/add-edit-payee.component.html ***!
      \*********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsExpenseManagementDataSetupAddEditPayeeAddEditPayeeComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div id=\"addPayeeModal\" class=\"modal fade\" role=\"dialog\"  data-backdrop=\"static\">\n  <div class=\"modal-dialog\">\n\n    <!-- Modal content-->\n    <div class=\"modal-content\" style=\"margin-top: 10%;\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" (click)=\"closePopups()\">&times;</button>\n        <h3 class=\"modal-title\" *ngIf=\"isEditPayee\">Update Payee Details</h3>\n        <h3 class=\"modal-title\" *ngIf=\"!isEditPayee\">Create Institute Payment Party</h3>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"payee-container\">\n          <div class=\"payee-item field-wrapper\">\n            <label for=\"\">Title</label>\n            <select class=\"form-ctrl\" name=\"\" [(ngModel)]=\"payeeDetails.title\">\n              <option value=\"Mr.\">Mr.</option>\n              <option value=\"Ms.\">Ms.</option>\n            </select>\n          </div>\n          <div class=\"payee-item field-wrapper\">\n            <label for=\"\">Payee Name</label>\n            <input type=\"text\" name=\"\" value=\"\" [(ngModel)]=\"payeeDetails.name\" placeholder=\"Enter Payee Name\"\n              class=\"form-ctrl\">\n          </div>\n          <div class=\"payee-item field-wrapper\">\n            <label for=\"\">Vendor Type</label>\n            <select class=\"form-ctrl\" name=\"\" [(ngModel)]=\"payeeDetails.vendorType\">\n              <option title=\"{{party.data_value}}\" [value]=\"party.data_key\" *ngFor=\"let party of partyDetails\">\n                {{ (party.data_value.length > 30) ? (party.data_value | slice:0:30) + '...' : party.data_value }}\n              </option>\n            </select>\n          </div>\n          <div class=\"payee-item field-wrapper\">\n            <label for=\"\">Primary Contact No.</label>\n            <input type=\"text\" name=\"\" value=\"\" [(ngModel)]=\"payeeDetails.primaryContactNo\"\n              onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57)\" maxlength=\"10\"\n              placeholder=\"Enter Primary Contact Number\" class=\"form-ctrl\">\n          </div>\n          <div class=\"payee-item field-wrapper\">\n            <label for=\"\">Company Name</label>\n            <input type=\"text\" name=\"\" value=\"\" [(ngModel)]=\"payeeDetails.companyName\" placeholder=\"Enter Company Name\"\n              class=\"form-ctrl\">\n          </div>\n          <div class=\"payee-item field-wrapper\">\n            <label for=\"\">Alternative Contact No.</label>\n            <input type=\"text\" name=\"\" value=\"\" [(ngModel)]=\"payeeDetails.secondaryContactNo\"\n              onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57)\" maxlength=\"10\"\n              placeholder=\"Enter Alternative Contact Number\" class=\"form-ctrl\">\n          </div>\n          <div class=\"payee-item field-wrapper\">\n            <label for=\"\">Email ID</label>\n            <input type=\"text\" name=\"\" value=\"\" [(ngModel)]=\"payeeDetails.emailId\" placeholder=\"Enter Email Id\"\n              class=\"form-ctrl\">\n          </div>\n          <div class=\"payee-item field-wrapper\">\n            <label for=\"\">Display Name <span class=\"danger\">*</span></label>\n            <input type=\"text\" name=\"\" value=\"\" [(ngModel)]=\"payeeDetails.displayName\" placeholder=\"Enter Display Name\"\n              class=\"form-ctrl\">\n          </div>\n          <div class=\"payee-item field-wrapper\">\n            <label for=\"\">Address</label>\n            <input type=\"text\" name=\"\" value=\"\" [(ngModel)]=\"payeeDetails.address\" placeholder=\"Enter Address\"\n              class=\"form-ctrl\">\n          </div>\n          <div class=\"payee-item field-wrapper\">\n            <label for=\"\">Notes</label>\n            <input type=\"text\" name=\"\" value=\"\" [(ngModel)]=\"payeeDetails.notes\" placeholder=\"Enter Notes\"\n              class=\"form-ctrl\">\n          </div>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <!-- <button type=\"button\" class=\"btn btn-default\" (click)=\"closePopups()\">Close</button> -->\n        <button type=\"button\" class=\"btn btn-default add-area-btn\" (click)=\"savePayeeDetails()\">Save</button>\n      </div>\n    </div>\n\n  </div>\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/expense-management/data-setup/add-edit-payer/add-edit-payer.component.html":
    /*!*********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/expense-management/data-setup/add-edit-payer/add-edit-payer.component.html ***!
      \*********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsExpenseManagementDataSetupAddEditPayerAddEditPayerComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div id=\"addPayerModal\" class=\"modal fade\" role=\"dialog\" data-backdrop=\"static\">\n  <div class=\"modal-dialog\">\n\n    <!-- Modal content-->\n    <div class=\"modal-content\" style=\"margin-top: 10%;\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" (click)=\"closePopups()\">&times;</button>\n        <h3 class=\"modal-title\" *ngIf=\"isEditPayer\">Update Customer</h3>\n        <h3 class=\"modal-title\" *ngIf=\"!isEditPayer\">Create Customer</h3>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"payee-container\">\n          <div class=\"payee-item field-wrapper\">\n            <label for=\"\">Title</label>\n            <select class=\"form-ctrl\" name=\"\" [(ngModel)]=\"payerDetails.title\">\n              <option value=\"Mr.\">Mr.</option>\n              <option value=\"Ms.\">Ms.</option>\n            </select>\n          </div>\n          <div class=\"payee-item field-wrapper\">\n            <label for=\"\">Payer Name</label>\n            <input type=\"text\" name=\"\" value=\"\" [(ngModel)]=\"payerDetails.name\" placeholder=\"Enter Payer Name\"\n              class=\"form-ctrl\">\n          </div>\n          <div class=\"payee-item field-wrapper\">\n            <label for=\"\">Vendor Type</label>\n            <select class=\"form-ctrl\" name=\"\" [(ngModel)]=\"payerDetails.vendorType\">\n              <option title=\"{{party.data_value}}\" [value]=\"party.data_key\" *ngFor=\"let party of partyDetails\">\n                {{ (party.data_value.length > 30) ? (party.data_value | slice:0:30) + '...' : party.data_value }}\n              </option>\n            </select>\n          </div>\n          <div class=\"payee-item field-wrapper\">\n            <label for=\"\">Primary Contact No.</label>\n            <input type=\"text\" name=\"\" value=\"\" [(ngModel)]=\"payerDetails.primaryContactNo\"\n              onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57)\" maxlength=\"10\"\n              placeholder=\"Enter Primary Contact Number\" class=\"form-ctrl\">\n          </div>\n          <div class=\"payee-item field-wrapper\">\n            <label for=\"\">Company Name</label>\n            <input type=\"text\" name=\"\" value=\"\" [(ngModel)]=\"payerDetails.companyName\" placeholder=\"Enter Company Name\"\n              class=\"form-ctrl\">\n          </div>\n          <div class=\"payee-item field-wrapper\">\n            <label for=\"\">Alternative Contact No.</label>\n            <input type=\"text\" name=\"\" value=\"\" [(ngModel)]=\"payerDetails.secondaryContactNo\"\n              onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57)\" maxlength=\"10\"\n              placeholder=\"Enter Alternative Contact Number\" class=\"form-ctrl\">\n          </div>\n          <div class=\"payee-item field-wrapper\">\n            <label for=\"\">Email ID</label>\n            <input type=\"text\" name=\"\" value=\"\" [(ngModel)]=\"payerDetails.emailId\" placeholder=\"Enter Email Id\"\n              class=\"form-ctrl\">\n          </div>\n          <div class=\"payee-item field-wrapper\">\n            <label for=\"\">Display Name <span class=\"danger\">*</span></label>\n            <input type=\"text\" name=\"\" value=\"\" [(ngModel)]=\"payerDetails.displayName\" placeholder=\"Enter Display Name\"\n              class=\"form-ctrl\">\n          </div>\n          <div class=\"payee-item field-wrapper\">\n            <label for=\"\">Address</label>\n            <input type=\"text\" name=\"\" value=\"\" [(ngModel)]=\"payerDetails.address\" placeholder=\"Enter Address\"\n              class=\"form-ctrl\">\n          </div>\n          <div class=\"payee-item field-wrapper\">\n            <label for=\"\">Notes</label>\n            <input type=\"text\" name=\"\" value=\"\" [(ngModel)]=\"payerDetails.notes\" placeholder=\"Enter Notes\"\n              class=\"form-ctrl\">\n          </div>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <!-- <button type=\"button\" class=\"btn btn-default\" (click)=\"closePopups()\">Close</button> -->\n        <button type=\"button\" class=\"btn btn-default add-area-btn\" (click)=\"savepayerDetails()\">Save</button>\n      </div>\n    </div>\n\n  </div>\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/expense-management/data-setup/data-setup.component.html":
    /*!**************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/expense-management/data-setup/data-setup.component.html ***!
      \**************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsExpenseManagementDataSetupDataSetupComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<section class=\"clearFix\" style=\"padding-right: 2%;\">\n  <!-- Header and Navigation -->\n  <section class=\"middle-top mb0 clearFix\">\n    <h1 class=\"pull-left\">\n      <!-- <a routerLink=\"/view/expense\">\n        Expense\n      </a> -->\n      <!-- <i style=\"font-family: 'FontAwesome';\" class=\"fas fa-angle-right\"></i> -->\n      <span>Data Setup</span>\n    </h1>\n  </section>\n\n\n  <div class=\"common-tab\">\n    <ul>\n      <!-- changes done by Nalini - Manage category and code refactoring changes -->\n      <li id=\"payee\" [ngClass]=\"{'active': selectedSection == 'payee'}\" (click)=\"switchActiveView('payee')\" class=\"\">\n        <span>Manage Payee</span>\n      </li>\n      <li id=\"payer\" [ngClass]=\"{'active': selectedSection == 'payer'}\" (click)=\"switchActiveView('payer')\" class=\"\">\n        <span>Manage Payer</span>\n      </li>\n      <li id=\"account\" [ngClass]=\"{'active': selectedSection == 'account'}\" (click)=\"switchActiveView('account')\"\n        class=\"\">\n        <span>Manage Account</span>\n      </li>\n      <li id=\"account\" [ngClass]=\"{'active': selectedSection == 'category'}\" (click)=\"switchActiveView('category')\"\n        class=\"\">\n        <span>Manage Category</span>\n      </li>\n    </ul>\n  </div>\n\n  <div class=\"add-container\">\n    <button type=\"button\" name=\"button\" class=\"add-btn\" *ngIf=\"selectedSection == 'payee'\" (click)=\"togglePayee()\">Add\n      Payee</button>\n    <button type=\"button\" name=\"button\" class=\"add-btn\" *ngIf=\"selectedSection == 'payer'\" (click)=\"togglePayer()\">Add\n      Payer</button>\n    <button type=\"button\" name=\"button\" class=\"add-btn\" *ngIf=\"selectedSection == 'account'\"\n      (click)=\"toggleAccount()\">Add Account</button>\n    <button type=\"button\" name=\"button\" class=\"add-btn\" *ngIf=\"selectedSection == 'category'\"\n      (click)=\"toggleCategory()\">Add Category</button>\n  </div>\n\n  <div class=\"table-container\" *ngIf=\"headerList?.length > 0\">\n    <div class=\"table-header-container\">\n      <div class=\"table-header-item\" *ngFor=\"let head of headerList\">\n        <span>{{head.header}}</span>\n      </div>\n    </div>\n    <!-- For account Details -->\n    <div class=\"table-value-outer-container\" *ngIf=\"selectedSection == 'account'\">\n      <div class=\"table-value-container\" *ngFor=\"let detail of tableValueData\">\n        <div class=\"table-value-item\">\n          <span title=\"{{detail?.party_type}}\">\n            {{detail?.party_type == 0 ? 'Payee' : 'Payer'}}\n          </span>\n        </div>\n        <div class=\"table-value-item\">\n          <span title=\"{{detail?.party_name}}\">{{ (!detail.party_name) ? '-' : (detail.party_name.length > 10) ?\n            (detail.party_name| slice:0:10) + '...' : detail.party_name}}</span>\n        </div>\n        <div class=\"table-value-item\">\n          <span title=\"{{detail?.display_name}}\">{{ (!detail.display_name) ? '-' : (detail.display_name.length > 10) ?\n            (detail.display_name | slice:0:10) + '...' : detail.display_name}}</span>\n        </div>\n\n        <div class=\"table-value-item\">\n          <span title=\"{{detail?.type_value}}\">{{ (!detail.type_value) ? '-' : (detail.type_value.length > 10) ?\n            (detail.type_value | slice:0:10) + '...' : detail.type_value}}</span>\n        </div>\n\n        <div class=\"table-value-item\">\n          <span title=\"{{detail?.account_number}}\">{{ (!detail.account_number) ? '-' : (detail.account_number.length >\n            10) ? (detail.account_number | slice:0:10) + '...' : detail.account_number}}</span>\n        </div>\n\n        <div class=\"table-value-item\">\n          <span title=\"{{detail?.ifsc_code}}\">{{ (!detail.ifsc_code) ? '-' : (detail.ifsc_code.length >\n            10) ? (detail.ifsc_code | slice:0:10) + '...' : detail.ifsc_code}}</span>\n        </div>\n\n        <div class=\"table-value-item\">\n          <span title=\"{{detail?.notes}}\">{{ (!detail.notes) ? '-' : (detail.notes.length > 10) ? (detail.notes |\n            slice:0:10) + '...' : detail.notes}}</span>\n        </div>\n\n        <div class=\"table-value-item\">\n          <i class=\"fa fa-pencil\" aria-hidden=\"true\" title=\"Edit Account\" (click)=\"editAccount(detail.account_id)\"></i>\n        </div>\n      </div>\n    </div>\n    <!-- changes done by Nalini - category table data -->\n    <div class=\"table-value-outer-container\" *ngIf=\"selectedSection == 'category'\">\n      <div class=\"table-value-container\" *ngFor=\"let detail of tableValueData\">\n        <div class=\"table-value-item\">\n          <span title=\"{{detail?.category_name}}\">{{ (!detail.category_name) ? '-' : (detail.category_name.length > 20)\n            ? (detail.category_name | slice:0:20) + '...' : detail.category_name}}</span>\n        </div>\n        <div class=\"table-value-item\">\n          <span title=\"{{detail?.category_desc}}\">{{ (!detail.category_desc) ? '-' : (detail.category_desc.length > 20)\n            ? (detail.category_desc | slice:0:20) + '...' : detail.category_desc}}</span>\n        </div>\n        <div class=\"table-value-item\">\n          <span>{{ (detail.expense_category_type == 2) ? 'Expense' : (detail.expense_category_type == 3) ? 'Income' :\n            ''}}</span>\n        </div>\n        <div class=\"table-value-item\">\n          <i class=\"fa fa-pencil\" aria-hidden=\"true\" title=\"Edit Account\" (click)=\"editCategoryFun(detail)\"></i>\n        </div>\n      </div>\n    </div>\n    <!-- For Payee & Payer -->\n    <div class=\"table-value-outer-container\" *ngIf=\"selectedSection == 'payee' || selectedSection == 'payer'\">\n      <div class=\"table-value-container\" *ngFor=\"let detail of tableValueData\">\n        <div class=\"table-value-item\">\n          <span title=\"{{detail?.display_name}}\">{{ (!detail.display_name) ? '-' : (detail.display_name.length > 20) ?\n            (detail.display_name | slice:0:20) + '...' : detail.display_name}}</span>\n        </div>\n        <div class=\"table-value-item\">\n          <span title=\"{{detail?.type_value}}\">{{ (!detail.type_value) ? '-' : (detail.type_value.length > 20) ?\n            (detail.type_value | slice:0:20) + '...' : detail.type_value}}</span>\n        </div>\n        <div class=\"table-value-item\">\n          <span title=\"{{detail?.company_name}}\">{{ (!detail.company_name) ? '-' : (detail.company_name.length > 20) ?\n            (detail.company_name | slice:0:20) + '...' : detail.company_name}}</span>\n        </div>\n        <div class=\"table-value-item\">\n          <span title=\"{{detail?.primary_mobile_no}}\">{{ (!detail.primary_mobile_no) ? '-' :\n            (detail.primary_mobile_no.length > 20) ? (detail.primary_mobile_no | slice:0:20) + '...' :\n            detail.primary_mobile_no}}</span>\n        </div>\n        <div class=\"table-value-item\">\n          <span title=\"{{detail?.email_id}}\">{{ (!detail.email_id) ? '-' : (detail.email_id.length > 20) ?\n            (detail.email_id | slice:0:20) + '...' : detail.email_id}}</span>\n        </div>\n        <div class=\"table-value-item\">\n          <i class=\"fa fa-pencil\" aria-hidden=\"true\" title=\"Edit\" *ngIf=\"selectedSection == 'payee'\"\n            (click)=\"editPayee(detail.party_id)\"></i>\n          <i class=\"fa fa-pencil\" aria-hidden=\"true\" title=\"Edit\" *ngIf=\"selectedSection == 'payer'\"\n            (click)=\"editPayer(detail.party_id)\"></i>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</section>\n\n<app-add-edit-payee *ngIf=payeeVisibilty (closePopup)=\"togglePayee($event)\" [isEditPayee]=\"isEditPayee\"\n  [editPayeeId]=\"editPayeeId\">\n</app-add-edit-payee>\n\n<app-add-edit-payer *ngIf=payerVisibilty (closePopup)=\"togglePayer($event)\" [isEditPayer]=\"isEditPayer\"\n  [editPayerId]=\"editPayerId\">\n</app-add-edit-payer>\n\n<app-add-edit-account *ngIf=accountVisibilty (closePopup)=\"toggleAccount($event)\" [isEditAccount]=\"isEditAccount\"\n  [editAccountId]=\"editAccountId\">\n</app-add-edit-account>\n\n<app-add-edit-category *ngIf=categoryVisibilty (closePopup)=\"toggleCategory($event)\" [isEditCategory]=\"isEditCategory\"\n  [editCategory]=\"editCategory\">\n</app-add-edit-category>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/expense-management/expense-home/expense-home.component.html":
    /*!******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/expense-management/expense-home/expense-home.component.html ***!
      \******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsExpenseManagementExpenseHomeExpenseHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<section class=\"clearFix\" style=\"padding-right: 2%;\">\n  <!-- Header and Navigation -->\n  <section class=\"middle-top mb0 clearFix\" style=\"border-bottom: 2px solid darkgrey;\">\n    <h1 class=\"pull-left\">\n      <span>Expense</span>\n    </h1>\n  </section>\n\n  <div class=\"leads-menu-section-container\">\n    <div class=\"leads-menu-item\" routerLink=\"/view/expense/setup\">\n      <div class=\"menu-title\">\n        <img src=\"./assets/images/leads/data-setup.svg\" alt=\"data setup\">\n        <span>Data Setup</span>\n      </div>\n      <div class=\"menu-description\">\n        <span>Add / Manage Payee, Payer and Account Details.</span>\n      </div>\n    </div>\n    <div class=\"leads-menu-item\" routerLink=\"/view/expense/manage-expense\">\n      <div class=\"menu-title\">\n        <img src=\"./assets/images/activity/cheque.svg\" alt=\"\">\n        <span>Manage Expense</span>\n      </div>\n      <div class=\"menu-description\">\n        <span>Add / Manage Expense details of the institution.</span>\n      </div>\n    </div>\n    <div class=\"leads-menu-item\" routerLink=\"/view/expense/manage-income\">\n      <div class=\"menu-title\">\n        <img src=\"./assets/images/activity/cheque.svg\" alt=\"\">\n        <span>Manage Income</span>\n      </div>\n      <div class=\"menu-description\">\n        <span>Add / Manage Income details of the institution (Other then Fees (if any)).</span>\n      </div>\n    </div>\n    <!-- <div class=\"leads-menu-item\" routerLink=\"/view/expense/report\">\n      <div class=\"menu-title\">\n        <img src=\"./assets/images/leads/reports.svg\" alt=\"reports\">\n        <span>Report</span>\n      </div>\n      <div class=\"menu-description\">\n        <span>Income and Expenses report of the institution.</span>\n      </div>\n    </div> -->\n  </div>\n</section>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/expense-management/expense-management.component.html":
    /*!***********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/expense-management/expense-management.component.html ***!
      \***********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsExpenseManagementExpenseManagementComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<router-outlet></router-outlet>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/expense-management/manage-expense/add-edit-expense/add-edit-expense.component.html":
    /*!*****************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/expense-management/manage-expense/add-edit-expense/add-edit-expense.component.html ***!
      \*****************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsExpenseManagementManageExpenseAddEditExpenseAddEditExpenseComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<section class=\"clearFix\" style=\"padding-right: 2%;\">\n  <!-- Header and Navigation -->\n  <section class=\"middle-top mb0 clearFix\">\n    <h1 class=\"pull-left\">\n      <!-- <a routerLink=\"/view/expense\">\n        Expense\n      </a>\n      <i style=\"font-family: 'FontAwesome';\" class=\"fas fa-angle-right\"></i> -->\n      <a routerLink=\"/view/expense/manage-expense\">\n        Manage Expense\n      </a>\n      <i style=\"font-family: 'FontAwesome';\" class=\"fas fa-angle-right\"></i>\n      <span>{{sectionName}} Expense</span>\n    </h1>\n  </section>\n\n  <!-- payment details section -->\n  <section>\n    <div class=\"payment-details-container\">\n      <div class=\"payment-details-item field-wrapper\" *ngIf=\"jsonFlag.isAuthoriseUser\">\n        <label for=\"payee\">Payee Name <span class=\"danger\">*</span> <span class=\"customeAdd\" (click)=\"togglePayee()\">Add\n            Payee</span></label>\n        <select class=\"form-ctrl\" name=\"payee\" id=\"payee\" [(ngModel)]=\"paymentDetails.payeeName\">\n          <option value=\"-1\">Select Payee Name</option>\n          <option [value]=\"payee.party_id\" *ngFor=\"let payee of payeeList\">{{payee.display_name}}</option>\n        </select>\n      </div>\n\n      <div class=\"payment-details-item field-wrapper\" *ngIf=\"jsonFlag.isAuthoriseUser\">\n        <label for=\"account-name\">Account Name <span class=\"danger\">*</span><span class=\"customeAdd\"\n            (click)=\"toggleAccount()\">Add Account</span></label>\n        <select class=\"form-ctrl\" name=\"account-name\" id=\"account-name\" [disabled]=\"addedItemList.length >= 1\" [(ngModel)]=\"paymentDetails.accountName\"\n          (ngModelChange)=\"setAccountIfscCode($event)\">\n          <option value=\"-1\">Select Account</option>\n          <option [value]=\"account.account_id\" *ngFor=\"let account of accountNamelist\">{{account.display_name}}</option>\n        </select>\n      </div> \n\n      <div class=\"payment-details-item field-wrapper\" *ngIf=\"paymentDetails.paymentmode == '3'\">\n        <label for=\" account-name\">Account Number\n        </label>\n        <input type=\"text\" class=\"form-ctrl\" name=\"account-number\" disabled id=\"account-name\"\n          [(ngModel)]=\"paymentDetails.accountNumber\" placeholder=\"Account Number\">\n\n      </div>\n\n      <div class=\"payment-details-item field-wrapper\" *ngIf=\"paymentDetails.paymentmode == '3'\">\n        <label for=\"ifsc-code\">IFSC Code</label>\n        <input type=\"text\" class=\"form-ctrl\" name=\"account-name\" disabled id=\"ifsc-code\"\n          [(ngModel)]=\"paymentDetails.IfscCode\" placeholder=\"IFSC Code\">\n\n      </div>\n\n\n    </div>\n  </section>\n\n  <section>\n    <div class=\"payment-details-container\">\n      <div class=\"payment-details-item field-wrapper datePickerBox\" *ngIf=\"jsonFlag.isAuthoriseUser\">\n        <label for=\"payment-date\">Payment Date <span class=\"danger\">*</span></label>\n        <input type=\"text\" value=\"\" id=\"payment-date\" class=\"form-ctrl widgetDatepicker bsDatepicker\"\n          [(ngModel)]=\"paymentDetails.paymentDate\" style=\"padding: 6px;\" readonly=\"true\" name=\"paymentDate\"\n          placeholder=\"Date\"  (ngModelChange)=\"checkFututreDate()\" bsDatepicker/>\n      </div>\n\n      <div class=\"payment-details-item field-wrapper\">\n        <label for=\"payment-mode\">Payment Mode</label>\n        <input type=\"text\" class=\"form-ctrl\" name=\"account-name\" disabled id=\"payment-mode\"\n        [(ngModel)]=\"paymentDetails.paymentValue\" placeholder=\"Payment Mode\">\n\n        <!-- <select class=\"form-ctrl\" name=\"payment-mode\" disabled id=\"payment-mode\" [(ngModel)]=\"paymentDetails.paymentmode\">\n          <option value=\"-1\">Select Payment Mode</option>\n          <option [value]=\"mode.data_key\" *ngFor=\"let mode of paymentModelist\">{{mode.data_value}}</option>\n       </select> -->\n      </div>\n      <div class=\"payment-details-item field-wrapper\" *ngIf=\"paymentDetails.paymentmode =='3'\">\n        <label for=\"trans-id\">Transaction Id </label>\n        <input type=\"text\" class=\"form-ctrl\" value=\"\" name=\"transacId\" id=\"trans-id\"\n          [(ngModel)]=\"paymentDetails.transacId\" placeholder=\"Enter Transaction Id\">\n\n      </div>\n\n\n      <div class=\"payment-details-item field-wrapper\" *ngIf=\"paymentDetails.paymentmode =='1'\">\n        <label for=\"Cheque-number\">Cheque Number</label>\n        <input type=\"text\" class=\"form-ctrl\" value=\"\" name=\"ChequeNumber\" id=\"Cheque-number\"\n          [(ngModel)]=\"paymentDetails.ChequeNumber\" placeholder=\"Enter Cheque Number\">\n\n      </div>\n\n\n    </div>\n  </section>\n\n\n  <!-- Account Details  -->\n  <section>\n    <div class=\"account-details-container\">\n      <div class=\"account-details-heading-container\">\n        <div class=\"account-heading-item\">\n          <div>Item/Category<span class=\"danger\">*</span> <span style=\"right: auto;margin-left: 2%;\" class=\"customeAdd\"\n              (click)=\"toggleCategory()\">Add Category</span></div>\n        </div>\n        <div class=\"account-heading-item\">\n          <span>Description</span>\n        </div>\n        <div class=\"account-heading-item\">\n          <span>Remark</span>\n        </div>\n        <div class=\"account-heading-item\">\n          <span>Quantity</span>\n        </div>\n        <div class=\"account-heading-item\">\n          <span>Amount <span class=\"danger\">*</span></span>\n        </div>\n      </div>\n\n      <div class=\"account-details-input-container\">\n        <!-- changes done by Nalini - To select category by dropdown -->\n        <div class=\"payment-details-item field-wrapper\"\n          style=\"width: 15%;float: left;margin-right: 20px;padding-top: 0;\">\n          <select class=\"form-ctrl\" name=\"payee\" id=\"payee\" [(ngModel)]=\"accountDetails.itemName\"\n            (ngModelChange)=\"setDescription($event)\">\n            <option value=\"-1\">Select Category</option>\n            <option [value]=\"payee.category_id\" *ngFor=\"let payee of categoryList\">{{payee.category_name}}</option>\n          </select>\n        </div>\n        <div class=\"account-input-item field-wrapper\" style=\"padding-top: 0;margin-left: 0;margin-right: 20px;\">\n          <input type=\"text\" value=\"\" disabled id=\"item-name\" class=\"form-ctrl\" [(ngModel)]=\"accountDetails.description\"\n            style=\"padding: 6px;\" name=\"item-name\" placeholder=\"Category Description\">\n        </div>\n        <div class=\"account-input-item field-wrapper\" style=\"padding-top: 0;margin-left: 0;\">\n          <input type=\"text\" value=\"\" id=\"item-name\" class=\"form-ctrl\" [(ngModel)]=\"accountDetails.remarks\"\n            style=\"padding: 6px;\" name=\"item-name\" placeholder=\"Remark\">\n        </div>\n        <div class=\"account-input-item field-wrapper\" style=\"padding-top: 0;\">\n          <input type=\"text\" value=\"\" id=\"item-name\" class=\"form-ctrl\" [(ngModel)]=\"accountDetails.quantity\"\n            style=\"padding: 6px;\" name=\"item-name\" placeholder=\"Item Quantity\"\n            onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57)\">\n        </div>\n        <div class=\"account-input-item field-wrapper\" style=\"padding-top: 0;\">\n          <input type=\"text\" value=\"\" id=\"item-name\" maxlength=\"10\" class=\"form-ctrl\" [(ngModel)]=\"accountDetails.amount\"\n            style=\"padding: 6px;\" name=\"item-name\" placeholder=\"Item Amount\"\n            onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57)\">\n        </div>\n        <div class=\"account-input-item\">\n          <button type=\"button\" name=\"button\" class=\"add-item-btn\" [disabled]=\"!jsonFlag.isAuthoriseUser\"\n            (click)=\"addItem()\">Add</button>\n        </div>\n      </div>\n      <div class=\"account-value-outer-container\">\n        <div class=\"list-table-container\">\n\n          <div class=\"list-header-container\" *ngIf=\"addedItemList.length\">\n            <div class=\"list-header-item small-item\">\n              <span>Item/Category</span>\n            </div>\n            <div class=\"list-header-item small-item\">\n              <span>Description </span>\n            </div>\n            <div class=\"list-header-item medium-item\">\n              <span>Payment Mode</span>\n            </div>\n            <div class=\"list-header-item medium-item\">\n              <span>Transaction Id</span>\n            </div>\n            <div class=\"list-header-item medium-item\">\n              <span>Cheque Number</span>\n            </div>\n            <div class=\"list-header-item medium-item\">\n              <span>Remark</span>\n            </div>\n            <div class=\"list-header-item small-item align-center\">\n              <span>Quantity</span>\n            </div>\n            <div class=\"list-header-item small-item align-center\">\n              <span>Amount</span>\n            </div>\n            <div class=\"list-header-item small-item align-center\">\n            </div>\n          </div>\n        </div>\n\n        <div class=\"account-value-container\" *ngFor=\"let item of addedItemList\">\n          <div class=\"account-value-item\">\n            <span>{{item.itemName}}</span>\n          </div>\n          <div class=\"account-value-item\">\n            <span title=\"{{item?.description}}\">{{ (!item.description) ? '-' : (item.description.length > 20) ?\n              (item.description | slice:0:20) + '...' : item.description}}</span>\n          </div>\n\n\n          <div class=\"account-value-item\">\n            <span *ngIf=\"item.payment_mode == 2\">\n              Credit/Debit card\n            </span>\n            <span *ngIf=\"item.payment_mode == 1\">\n              Cheque\n            </span>\n            <span *ngIf=\"item.payment_mode == 0\">\n              Cash\n            </span>\n            <span *ngIf=\"item.payment_mode == 3\">\n              Net Banking\n            </span>\n          </div>\n\n\n\n          <div class=\"account-value-item\">\n            <span title=\"{{item?.transaction_id}}\">{{ (!item.transaction_id) ? '-'\n              :\n              (item.transaction_id.length > 20) ?\n              (item.transaction_id | slice:0:20) + '...' : item.transaction_id}}</span>\n          </div>\n\n\n\n          <div class=\"account-value-item\">\n            <span title=\"{{item?.ChequeNumber}}\">{{ (!item.cheque_number) ? '-' :\n              (item.cheque_number.length > 20) ?\n              (item.cheque_number | slice:0:20) + '...' : item.cheque_number}}</span>\n          </div>\n\n\n\n          <div class=\"account-value-item\">\n            <span title=\"{{item?.remarks}}\">{{ (!item.remarks) ? '-' : (item.remarks.length > 20) ? (item.remarks |\n              slice:0:20) + '...' : item.remarks}}</span>\n          </div>\n          <div class=\"account-value-item\">\n            <span>{{item.quantity}}</span>\n          </div>\n          <div class=\"account-value-item right-align\">\n\n            <span> Rs.{{item.amount}}</span>\n          </div>\n          <div class=\"account-value-item\">\n            <i class=\"fa fa-times remove-icon\" aria-hidden=\"true\"\n              [ngStyle]=\"{cursor: !jsonFlag.isAuthoriseUser ? 'no-drop':'pointer'}\" (click)=\"removeItem(item.itemName)\"\n              title=\"Remove Item\"></i>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <div class=\"total-amount-container\" *ngIf=\"totalAmount > 0\">\n    <span style=\"font-size:14px; font-weight: 600;margin-right: 10px;\">Total Amount:</span>\n    <span>Rs.{{totalAmount}}</span>\n  </div>\n\n  <!-- Upload Document Details -->\n  <section class=\"hide\">\n    <div class=\"upload-docs-container\">\n      <span class=\"upload-title\">Upload Attachments</span>\n      <div class=\"upload-docs-input-container\">\n        <div class=\"upload-docs-input-item field-wrapper\">\n          <input type=\"file\" class=\"form-ctrl\" id=\"uploadFileControl\" name=\"uploadFileBox\" accept=\"application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,\n          text/plain, application/pdf, image/*\" />\n        </div>\n        <div class=\"upload-docs-input-item field-wrapper\">\n          <input type=\"text\" value=\"\" id=\"item-name\" class=\"form-ctrl\" style=\"padding: 6px;\" name=\"item-name\"\n            placeholder=\"Document Description\" [(ngModel)]=\"docDescription\">\n        </div>\n        <div class=\"upload-docs-input-item\">\n          <button type=\"button\" name=\"button\" class=\"upload-docs-btn\" (click)=\"uploadHandler()\">Add</button>\n        </div>\n      </div>\n      <div class=\"upload-docs-value-outer-container\">\n        <div class=\"upload-docs-value-container\" *ngFor=\"let doc of docsList\">\n          <div class=\"upload-docs-value-item\">\n            <span *ngIf=\"sectionName == 'Add'\" title=\"{{doc.fileName}}\">{{ (doc.fileName.length > 20) ? (doc.fileName |\n              slice:0:20) + '...' : doc.fileName }}</span>\n            <span *ngIf=\"sectionName == 'Edit'\" title=\"{{doc.fileName}}\">\n              {{ (doc.fileName.length > 20) ? (doc.fileName | slice:0:20) + '...' : doc.fileName }}\n              <i class=\"fa fa-download download-icon\" aria-hidden=\"true\"\n                (click)=\"downloadattachemnt(doc.file_id, doc.file_extn, doc.fileName)\"></i>\n              <a id=\"downloadFileClick\" [href]=\"fileUrl\" class=\"hide\"></a>\n            </span>\n          </div>\n          <div class=\"upload-docs-value-item\">\n            <span *ngIf=\"doc?.file_desc && !!doc.file_desc\" title=\"{{doc.file_desc}}\">{{ (doc.file_desc.length > 20) ?\n              (doc.file_desc | slice:0:20) + '...' : doc.file_desc }}</span>\n          </div>\n          <div class=\"upload-docs-value-item\">\n            <i class=\"fa fa-times remove-icon\" aria-hidden=\"true\" style=\"margin-left:0\"\n              (click)=\"removeDoc(doc.fileName)\" title=\"Remove Attachment\"></i>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <section>\n    <footer>\n      <div class=\"action-container\">\n        <button type=\"button\" name=\"button\" class=\"cancel-btn\"\n          routerLink=\"/view/expense/manage-expense\">{{(!jsonFlag.isAuthoriseUser) ? 'Back To Expense' : 'Cancel'}}\n        </button>\n\n        <button type=\"button\" name=\"button\" class=\"save-btn\" [disabled]=\"!jsonFlag.isAuthoriseUser\"\n          (click)=\"addExpense()\">Save </button>\n      </div>\n    </footer>\n  </section>\n\n</section>\n\n<app-add-edit-payee *ngIf=payeeVisibilty (closePopup)=\"togglePayee($event)\">\n</app-add-edit-payee>\n\n<app-add-edit-account *ngIf=accountVisibilty (closePopup)=\"toggleAccount($event)\">\n</app-add-edit-account>\n\n<app-add-edit-category *ngIf=categoryVisibility (closePopup)=\"toggleCategory($event)\">\n</app-add-edit-category>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/expense-management/manage-expense/manage-expense.component.html":
    /*!**********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/expense-management/manage-expense/manage-expense.component.html ***!
      \**********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsExpenseManagementManageExpenseManageExpenseComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<section class=\"clearFix\" style=\"padding-right: 2%;\">\n  <!-- Header and Navigation -->\n  <section class=\"middle-top mb0 clearFix\">\n    <h1 class=\"pull-left\">\n      <!-- <a routerLink=\"/view/expense\">\n        Expense\n      </a>\n      <i style=\"font-family: 'FontAwesome';\" class=\"fas fa-angle-right\"></i> -->\n      Manage Expense\n    </h1>\n  </section>\n\n  <section>\n    <div class=\"filter-search-data-container\">\n\n      <div class=\"filter-container\">\n        <div class=\"filter-item field-wrapper\">\n          <label for=\"filter\">Filter</label>\n          <select class=\"form-ctrl\" name=\"filter\" id=\"filter\" [(ngModel)]=\"expenseFilter.dateFilter\"\n            (ngModelChange)=\"getExpenseRecords()\">\n            <option value=\"month\">Current Month</option>\n            <option value=\"date\">Till Date</option>\n            <option value=\"range\">Date Range</option>\n          </select>\n        </div>\n        <div class=\"filter-item field-wrapper datePickerBox\" style=\"margin-left: 10px;\"\n          *ngIf=\"expenseFilter.dateFilter == 'range'\">\n          <label for=\"date-range\">Select Date Range</label>\n          <input type=\"text\" value=\"\" id=\"date-range\" [(ngModel)]=\"dateFilterRange\"\n            (ngModelChange)=\"dateRangeChange($event)\" class=\"form-ctrl widgetDatepicker bsDatepicker\"\n            style=\"padding: 6px;\" readonly=\"true\" name=\"date-range\" placeholder=\"Date\" bsDaterangepicker />\n        </div>\n      </div>\n\n      <div class=\"search-data-container\">\n        <div class=\"activity-item field-wrapper\">\n          <input type=\"text\" value=\"\" id=\"search_bar\" [(ngModel)]=\"expenseSearchInput\" name=\"expenseSearchInput\"\n            (keyup)=\"searchDatabase(search)\" placeholder=\"Search here...\" class=\"search-box\" #search>\n        </div>\n        <div class=\"activity-item\">\n          <button type=\"button\" name=\"button\" class=\"add-expense-btn\" [routerLink]=\"['/view/expense/add-expense']\">Add\n            Expense</button>\n        </div>\n      </div>\n\n    </div>\n  </section>\n\n  <div class=\"excel-container\">\n    <i class=\"fa fa-file-excel-o excel\" aria-hidden=\"true\" title=\"Export to excel\" (click)=\"exportToExcel()\"></i>\n  </div>\n\n  <section>\n    <div class=\"list-table-container\">\n      <div class=\"list-header-container\">\n        <div class=\"list-header-item small-item\">\n          <span>Payment Date</span>\n        </div>\n        <div class=\"list-header-item small-item\">\n          <span>Reference No. </span>\n        </div>\n        <div class=\"list-header-item medium-item\">\n          <span>Payee</span>\n        </div>\n        <div class=\"list-header-item medium-item\">\n          <span>Item/Category</span>\n        </div>\n        <div class=\"list-header-item small-item align-center\">\n          <span>Total(Rs.)</span>\n        </div>\n        <div class=\"list-header-item small-item align-center\">\n          <span>Edit</span>\n        </div>\n      </div>\n      <div class=\"list-value-outer-container\">\n        <div class=\"list-value-container\" *ngFor=\"let expense of expenseRecordList\">\n          <div class=\"list-value-item small-item\">\n            <span>{{expense.payment_date}}</span>\n          </div>\n          <div class=\"list-value-item small-item\">\n            <span>{{expense.reference_no}}</span>\n          </div>\n          <div class=\"list-value-item medium-item\">\n            <span title=\"{{expense?.party_name}}\">{{ (!expense.party_name) ? '-' : (expense.party_name.length > 30) ?\n              (expense.party_name | slice:0:30) + '...' : expense.party_name}}</span>\n          </div>\n          <div class=\"list-value-item medium-item\">\n            <span title=\"{{expense?.category}}\">{{ (!expense.category) ? '-' : (expense.category.length > 30) ?\n              (expense.category | slice:0:30) + '...' : expense.category}}</span>\n          </div>\n          <div class=\"list-value-item small-item align-right\" style=\"padding-right: 50px;\">\n            <span>{{expense.amount}}</span>\n          </div>\n          <div class=\"list-value-item small-item align-center\">\n            <i class=\"fa fa-pencil\" aria-hidden=\"true\" title=\"Edit Expense\"\n              (click)=\"editExpense(expense.expense_id)\"></i>\n          </div>\n        </div>\n        <div class=\"no-records\" *ngIf=\"expenseRecordList.length  == 0\">\n          <span>No Records Found</span>\n        </div>\n      </div>\n    </div>\n  </section>\n</section>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/expense-management/manage-income/add-edit-income/add-edit-income.component.html":
    /*!**************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/expense-management/manage-income/add-edit-income/add-edit-income.component.html ***!
      \**************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsExpenseManagementManageIncomeAddEditIncomeAddEditIncomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<section class=\"clearFix\" style=\"padding-right: 2%;\">\n  <!-- Header and Navigation -->\n  <section class=\"middle-top mb0 clearFix\">\n    <h1 class=\"pull-left\">\n      <!-- <a routerLink=\"/view/expense\">\n        Expense\n      </a>\n      <i style=\"font-family: 'FontAwesome';\" class=\"fas fa-angle-right\"></i> -->\n      <a routerLink=\"/view/expense/manage-income\">\n        Manage Income\n      </a>\n      <i style=\"font-family: 'FontAwesome';\" class=\"fas fa-angle-right\"></i>\n      <span>{{sectionName}} Income</span>\n    </h1>\n  </section>\n\n  <!-- payment details section -->\n  <section>\n    <div class=\"payment-details-container\">\n      <div class=\"payment-details-item field-wrapper\" *ngIf=\"jsonFlag.isAuthoriseUser\">\n        <label for=\"payer\">Payer Name <span class=\"danger\">*</span><span class=\"customeAdd\" (click)=\"togglePayer()\">Add\n            Payer</span></label>\n        <select class=\"form-ctrl\" name=\"payer\" id=\"payer\" [(ngModel)]=\"paymentDetails.payerName\">\n          <option value=\"-1\">Select Payer Name</option>\n          <option [value]=\"payer.party_id\" *ngFor=\"let payer of payerList\">{{payer.display_name}}</option>\n        </select>\n      </div>\n\n      <div class=\"payment-details-item field-wrapper\" *ngIf=\"jsonFlag.isAuthoriseUser\">\n        <label for=\"account-name\">Account Name <span class=\"danger\">*</span><span class=\"customeAdd\"\n            (click)=\"toggleAccount()\">Add Account</span></label>\n        <select class=\"form-ctrl\" name=\"account-name\" id=\"account-name\" [disabled]=\"addedItemList.length >= 1\" [(ngModel)]=\"paymentDetails.accountName\"\n          (ngModelChange)=\"setAccountIfscIncome($event)\">\n          <option value=\"-1\">Select Account</option>\n          <option [value]=\"account.account_id\" *ngFor=\"let account of accountNamelist\">{{account.display_name}}</option>\n        </select>\n      </div>\n\n      <div class=\"payment-details-item field-wrapper\" *ngIf=\"paymentDetails.paymentmode == '3'\">\n        <label for=\" account-name\">Account Number \n        </label>\n        <input type=\"text\" class=\"form-ctrl\" name=\"account-number\" disabled id=\"account-name\"\n          [(ngModel)]=\"paymentDetails.accountNumber\" placeholder=\"Account Number\">\n\n      </div>\n\n      <div class=\"payment-details-item field-wrapper\" *ngIf=\"paymentDetails.paymentmode == '3'\">\n        <label for=\"account-name\">IFSC Code </label>\n        <input type=\"text\" class=\"form-ctrl\" name=\"ifsc-code\" disabled id=\"ifsc-code\"\n          [(ngModel)]=\"paymentDetails.IfscCode\" placeholder=\"IFSC Code\">\n\n      </div>\n\n\n\n    </div>\n  </section>\n  <section>\n    <div class=\"payment-details-container\">\n\n      <div class=\"payment-details-item field-wrapper datePickerBox\" *ngIf=\"jsonFlag.isAuthoriseUser\">\n        <label for=\"payee\">Payment Date <span class=\"danger\">*</span></label>\n        <input type=\"text\" value=\"\" id=\"payment-date\" class=\"form-ctrl widgetDatepicker bsDatepicker\"\n          [(ngModel)]=\"paymentDetails.receivedDate\" style=\"padding: 6px;\" readonly=\"true\" name=\"payment-date\"\n          placeholder=\"Date\" bsDatepicker (ngModelChange)=\"checkFututreDate()\" />\n      </div>\n\n      <div class=\"payment-details-item field-wrapper\">\n        <label for=\"payment-mode\">Payment Mode</label>\n        <input type=\"text\" class=\"form-ctrl\" name=\"account-name\" disabled id=\"payment-mode\"\n        [(ngModel)]=\"paymentDetails.paymentValue\" placeholder=\"Payment Mode\">\n\n        <!-- <select class=\"form-ctrl\" name=\"payment-mode\"  disabled id=\"payment-mode\" [(ngModel)]=\"paymentDetails.paymentmode\">\n          <option value=\"-1\">Select Payment Mode</option>\n          <option [value]=\"mode.data_key\" *ngFor=\"let mode of paymentModelist\">{{mode.data_value}}</option>\n        </select> -->\n      </div>\n\n\n      <div class=\"payment-details-item field-wrapper\" *ngIf=\"paymentDetails.paymentmode =='3'\">\n        <label for=\"account-name\">Transaction Id</label>\n        <input type=\"text\" class=\"form-ctrl\" name=\"trans-id\" id=\"trans-id\" [(ngModel)]=\"paymentDetails.transacId\"\n          placeholder=\"Enter Transaction Id\">\n\n      </div>\n\n\n      <div class=\"payment-details-item field-wrapper\" *ngIf=\"paymentDetails.paymentmode =='1'\">\n        <label for=\"account-name\">Cheque Number</label>\n        <input type=\"text\" class=\"form-ctrl\" name=\"Cheque-number\" id=\"ifsc-code\"\n          [(ngModel)]=\"paymentDetails.ChequeNumber\" placeholder=\"Enter Cheque Number\">\n\n      </div>\n\n\n\n\n\n    </div>\n  </section>\n\n  <!-- Account Details  -->\n  <section>\n    <div class=\"account-details-container\">\n      <div class=\"account-details-heading-container\">\n        <div class=\"account-heading-item\">\n          <div>Item/Category<span class=\"danger\">*</span> <span style=\"right: auto;margin-left: 2%;\" class=\"customeAdd\"\n              (click)=\"toggleCategory()\">Add Category</span></div>\n        </div>\n        <div class=\"account-heading-item\">\n          <span>Category Description</span>\n        </div>\n        <div class=\"account-heading-item\">\n          <span>Remark</span>\n        </div>\n        <div class=\"account-heading-item\">\n          <span>Quantity</span>\n        </div>\n        <div class=\"account-heading-item\">\n          <span>Amount <span class=\"danger\">*</span></span>\n        </div>\n      </div>\n\n      <div class=\"account-details-input-container\">\n        <!-- changes done by Nalini - To select category by dropdown -->\n        <div class=\"payment-details-item field-wrapper\"\n          style=\"width: 15%;float: left;margin-right: 20px;padding-top: 0;\">\n          <select class=\"form-ctrl\" name=\"payee\" id=\"payee\" [(ngModel)]=\"accountDetails.itemName\"\n            (ngModelChange)=\"setDescription($event)\">\n            <option value=\"-1\">Select Category</option>\n            <option [value]=\"payee.category_id\" *ngFor=\"let payee of categoryList\">{{payee.category_name}}</option>\n          </select>\n        </div>\n        <div class=\"account-input-item field-wrapper\" style=\"padding-top: 0;margin-left: 0;margin-right: 20px;\">\n          <input type=\"text\" value=\"\" disabled id=\"item-name\" class=\"form-ctrl\" [(ngModel)]=\"accountDetails.description\"\n            style=\"padding: 6px;\" name=\"item-name\" placeholder=\"Category Description\">\n        </div>\n        <div class=\"account-input-item field-wrapper\" style=\"padding-top: 0;margin-left: 0;margin-right: 20px;\">\n          <input type=\"text\" value=\"\" id=\"item-name\" class=\"form-ctrl\" [(ngModel)]=\"accountDetails.remarks\"\n            style=\"padding: 6px;\" name=\"item-name\" placeholder=\"Remark\">\n        </div>\n        <div class=\"account-input-item field-wrapper\" style=\"padding-top: 0;margin-left: 0;\">\n          <input type=\"number\" value=\"\" id=\"item-name\" class=\"form-ctrl\" [(ngModel)]=\"accountDetails.quantity\"\n            style=\"padding: 6px;\" name=\"item-name\" placeholder=\"Item Quantity\"\n            onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57)\">\n        </div>\n        <div class=\"account-input-item field-wrapper\" style=\"padding-top: 0;\">\n          <input type=\"text\" value=\"\" id=\"item-name\"  maxlength=\"10\" class=\"form-ctrl\" [(ngModel)]=\"accountDetails.amount\"\n            style=\"padding: 6px;\" name=\"item-name\" placeholder=\"Item Amount\"\n            onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57)\">\n        </div>\n        <div class=\"account-input-item\">\n          <button type=\"button\" name=\"button\" class=\"add-item-btn\" [disabled]=\"!jsonFlag.isAuthoriseUser\"\n            (click)=\"addItem()\">Add</button>\n        </div>\n      </div>\n      <div class=\"account-value-outer-container\">\n        <div class=\"list-table-container\">\n\n          <div class=\"list-header-container\" *ngIf=\"addedItemList.length\">\n            <div class=\"list-header-item small-item\">\n              <span>Item/Category</span>\n            </div>\n            <div class=\"list-header-item small-item\">\n              <span>Description </span>\n            </div>\n            <div class=\"list-header-item medium-item\">\n              <span>Payment Mode</span>\n            </div>\n            <div class=\"list-header-item medium-item\">\n              <span>Transaction Id</span>\n            </div>\n            <div class=\"list-header-item medium-item\">\n              <span>Cheque Number</span>\n            </div>\n            <div class=\"list-header-item medium-item\">\n              <span>Remark</span>\n            </div>\n            <div class=\"list-header-item small-item align-center\">\n              <span>Quantity</span>\n            </div>\n            <div class=\"list-header-item small-item align-center\">\n              <span>Amount</span>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"account-value-container\" *ngFor=\"let item of addedItemList\">\n          <div class=\"account-value-item\">\n            <span>{{item.itemName}}</span>\n          </div>\n          <div class=\"account-value-item\">\n            <span title=\"{{item?.description}}\">{{ (!item.description) ? '-' : (item.description.length > 20) ?\n              (item.description | slice:0:20) + '...' : item.description}}</span>\n          </div>\n\n\n\n\n          <div class=\"account-value-item\">\n            <span *ngIf=\"item.payment_mode == 2\">\n              Credit/Debit card\n            </span>\n            <span *ngIf=\"item.payment_mode == 1\">\n              Cheque\n            </span>\n            <span *ngIf=\"item.payment_mode == 0\">\n              Cash\n            </span>\n            <span *ngIf=\"item.payment_mode == 3\">\n              Net Banking\n            </span>\n          </div>\n\n\n\n          <div class=\"account-value-item\">\n            <span title=\"{{item?.transaction_id}}\">{{ (!item.transaction_id) ? '-' :\n              (item.transaction_id.length > 20) ?\n              (item.transaction_id | slice:0:20) + '...' : item.transaction_id}}</span>\n          </div>\n\n\n\n          <div class=\"account-value-item\">\n            <span title=\"{{item?.cheque_number}}\">{{ (!item.cheque_number) ? '-' :\n              (item.cheque_number.length > 20) ?\n              (item.cheque_number | slice:0:20) + '...' : item.cheque_number}}</span>\n          </div>\n\n\n          <div class=\"account-value-item\">\n            <span title=\"{{item?.remarks}}\">{{ (!item.remarks) ? '-' : (item.remarks.length > 20) ? (item.remarks |\n              slice:0:20) + '...' : item.remarks}}</span>\n          </div>\n          <div class=\"account-value-item\">\n            <span>{{item.quantity}}</span>\n          </div>\n          <div class=\"account-value-item right-align\">\n            <span>Rs.{{item.amount}}</span>\n          </div>\n          <div class=\"account-value-item\">\n            <i class=\"fa fa-times remove-icon\" [ngStyle]=\"{cursor: !jsonFlag.isAuthoriseUser ? 'no-drop':'pointer'}\"\n              aria-hidden=\"true\" (click)=\"removeItem(item.itemName)\" title=\"Remove Item\"></i>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <div class=\"total-amount-container\" *ngIf=\"totalAmount > 0\">\n    <span style=\"font-size:14px; font-weight: 600;margin-right: 10px;\">Total Amount:</span>\n    <span>Rs.{{totalAmount}}</span>\n  </div>\n\n  <!-- Upload Document Details -->\n  <section class=\"hide\">>\n    <div class=\"upload-docs-container\">\n      <span class=\"upload-title\">Upload Attachments</span>\n      <div class=\"upload-docs-input-container\">\n        <div class=\"upload-docs-input-item field-wrapper\">\n          <input type=\"file\" class=\"form-ctrl\" id=\"uploadFileControl\" name=\"uploadFileBox\" accept=\"application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,\n          text/plain, application/pdf, image/*\" />\n        </div>\n        <div class=\"upload-docs-input-item field-wrapper\">\n          <input type=\"text\" value=\"\" id=\"item-name\" class=\"form-ctrl\" style=\"padding: 6px;\" name=\"item-name\"\n            placeholder=\"Document Description\" [(ngModel)]=\"docDescription\">\n        </div>\n        <div class=\"upload-docs-input-item\">\n          <button type=\"button\" name=\"button\" class=\"upload-docs-btn\" (click)=\"uploadHandler()\">Add</button>\n        </div>\n      </div>\n      <div class=\"upload-docs-value-outer-container\">\n        <div class=\"upload-docs-value-container\" *ngFor=\"let doc of docsList\">\n          <div class=\"upload-docs-value-item\">\n            <span *ngIf=\"sectionName == 'Add'\" title=\"{{doc.fileName}}\">{{ (doc.fileName.length > 20) ? (doc.fileName |\n              slice:0:20) + '...' : doc.fileName }}</span>\n            <span *ngIf=\"sectionName == 'Edit'\" title=\"{{doc.fileName}}\">\n              {{ (doc.file_name.length > 20) ? (doc.file_name | slice:0:20) + '...' : doc.file_name }}\n              <a [href]=\"doc.file_path\" class=\"btn-ga-white-download\" [download]=\"doc.file_path\"><i\n                  class=\"fa fa-download\" aria-hidden=\"true\"></i></a>\n            </span>\n          </div>\n          <div class=\"upload-docs-value-item\">\n            <span *ngIf=\"doc?.file_desc && !!doc.file_desc\" title=\"{{doc.file_desc}}\">{{ (doc.file_desc.length > 20) ?\n              (doc.file_desc | slice:0:20) + '...' : doc.file_desc }}</span>\n          </div>\n          <div class=\"upload-docs-value-item\">\n            <i class=\"fa fa-times remove-icon\" aria-hidden=\"true\" style=\"margin-left:0\"\n              (click)=\"removeDoc(doc.fileName)\" title=\"Remove Attachment\"></i>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <section>\n    <footer>\n      <div class=\"action-container\">\n        <button type=\"button\" name=\"button\" class=\"cancel-btn\"\n          routerLink=\"/view/expense/manage-income\">{{(!jsonFlag.isAuthoriseUser) ? 'Back To Income' :\n          'Cancel'}}</button>\n        <button type=\"button\" name=\"button\" class=\"save-btn\" [disabled]=\"!jsonFlag.isAuthoriseUser\"\n          (click)=\"addIncome()\">Save</button>\n      </div>\n    </footer>\n  </section>\n\n</section>\n\n\n<app-add-edit-payer *ngIf=payerVisibilty (closePopup)=\"togglePayer($event)\">\n</app-add-edit-payer>\n\n<app-add-edit-account *ngIf=accountVisibilty (closePopup)=\"toggleAccount($event)\">\n</app-add-edit-account>\n\n<app-add-edit-category *ngIf=categoryVisibility (closePopup)=\"toggleCategory($event)\">\n</app-add-edit-category>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/expense-management/manage-income/manage-income.component.html":
    /*!********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/expense-management/manage-income/manage-income.component.html ***!
      \********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsExpenseManagementManageIncomeManageIncomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<section class=\"clearFix\" style=\"padding-right: 2%;\">\n  <!-- Header and Navigation -->\n  <section class=\"middle-top mb0 clearFix\">\n    <h1 class=\"pull-left\">\n      <!-- <a routerLink=\"/view/expense\">\n        Expense\n      </a> -->\n      <!-- <i style=\"font-family: 'FontAwesome';\" class=\"fas fa-angle-right\"></i> -->\n      Manage Income\n    </h1>\n  </section>\n\n  <section>\n    <div class=\"filter-search-data-container\">\n\n      <div class=\"filter-container\">\n        <div class=\"filter-item field-wrapper\">\n          <label for=\"filter\">Filter</label>\n          <select class=\"form-ctrl\" name=\"filter\" id=\"filter\" [(ngModel)]=\"incomeFilter.dateFilter\"\n            (ngModelChange)=\"getIncomeRecords()\">\n            <option value=\"month\">Current Month</option>\n            <option value=\"date\">Till Date</option>\n            <option value=\"range\">Date Range</option>\n          </select>\n        </div>\n        <div class=\"filter-item field-wrapper datePickerBox\" style=\"margin-left: 10px;\"\n          *ngIf=\"incomeFilter.dateFilter == 'range'\">\n          <label for=\"date-range\">Select Date Range</label>\n          <input type=\"text\" value=\"\" id=\"date-range\" [(ngModel)]=\"dateFilterRange\"\n            (ngModelChange)=\"dateRangeChange($event)\" class=\"form-ctrl widgetDatepicker bsDatepicker\"\n            style=\"padding: 6px;\" readonly=\"true\" name=\"date-range\" placeholder=\"Date\" bsDaterangepicker />\n        </div>\n      </div>\n\n      <div class=\"search-data-container\">\n        <div class=\"activity-item field-wrapper\">\n          <input type=\"text\" value=\"\" id=\"search_bar\" [(ngModel)]=\"incomeSearchInput\" name=\"incomeSearchInput\"\n            (keyup)=\"searchDatabase(search)\" placeholder=\"Search here...\" class=\"search-box\" #search>\n        </div>\n        <div class=\"activity-item\">\n          <button type=\"button\" name=\"button\" class=\"add-income-btn\" [routerLink]=\"['/view/expense/add-income']\">Add\n            Income</button>\n        </div>\n      </div>\n\n    </div>\n  </section>\n\n  <div class=\"excel-container\">\n    <i class=\"fa fa-file-excel-o excel\" aria-hidden=\"true\" title=\"Export to excel\" (click)=\"exportToExcel()\"></i>\n  </div>\n\n  <section>\n    <div class=\"list-table-container\">\n      <div class=\"list-header-container\">\n        <div class=\"list-header-item small-item\">\n          <span>Payment Date</span>\n        </div>\n        <div class=\"list-header-item small-item\">\n          <span>Reference No. </span>\n        </div>\n        <div class=\"list-header-item medium-item\">\n          <span>Payer</span>\n        </div>\n        <div class=\"list-header-item medium-item\">\n          <span>Item/Category</span>\n        </div>\n        <div class=\"list-header-item small-item align-center\">\n          <span>Total(Rs.)</span>\n        </div>\n        <div class=\"list-header-item small-item align-center\">\n          <span>Edit</span>\n        </div>\n      </div>\n      <div class=\"list-value-outer-container\">\n        <div class=\"list-value-container\" *ngFor=\"let income of incomeRecordList\">\n          <div class=\"list-value-item small-item\">\n            <span>{{income.payment_date}}</span>\n          </div>\n          <div class=\"list-value-item small-item\">\n            <span>{{income.reference_no}}</span>\n          </div>\n          <div class=\"list-value-item medium-item\">\n            <span\n              title=\"{{income?.party_name}}\">{{ (!income.party_name) ? '-' : (income.party_name.length > 30) ? (income.party_name | slice:0:30) + '...' : income.party_name}}</span>\n          </div>\n          <div class=\"list-value-item medium-item\">\n            <span\n              title=\"{{income?.category}}\">{{ (!income.category) ? '-' : (income.category.length > 30) ? (income.category | slice:0:30) + '...' : income.category}}</span>\n          </div>\n          <div class=\"list-value-item small-item align-right\" style=\"padding-right: 50px;\">\n            <span>{{income.amount}}</span>\n          </div>\n          <div class=\"list-value-item small-item align-center\">\n            <i class=\"fa fa-pencil\" aria-hidden=\"true\" title=\"Edit Income\" (click)=\"editIncome(income.income_id)\"></i>\n          </div>\n        </div>\n        <div class=\"no-records\" *ngIf=\"incomeRecordList.length  == 0\">\n          <span>No Records Found</span>\n        </div>\n      </div>\n    </div>\n  </section>\n</section>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/expense-management/reports/reports.component.html":
    /*!********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/expense-management/reports/reports.component.html ***!
      \********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsExpenseManagementReportsReportsComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<section class=\"clearFix\" style=\"padding-right: 2%;\">\n  <!-- Header and Navigation -->\n  <section class=\"middle-top mb0 clearFix\">\n    <h1 class=\"pull-left\">\n      <a routerLink=\"/view/reports/list\">\n        Reports\n      </a>\n      <i style=\"font-family: 'FontAwesome';\" class=\"fas fa-angle-right\"></i>\n      Income and Expense \n    </h1>\n  </section>\n\n  <section>\n    <div class=\"filter-search-data-container\">\n\n      <div class=\"filter-container\">\n        <div class=\"filter-item field-wrapper\">\n          <label for=\"filter\">Filter</label>\n          <select class=\"form-ctrl\" name=\"filter\" id=\"filter\" [(ngModel)]=\"recordFilter.dateFilter\"\n            (ngModelChange)=\"getAllRecords()\">\n            <option value=\"month\">Current Month</option>\n            <option value=\"date\">Till Date</option>\n            <option value=\"range\">Date Range</option>\n          </select>\n        </div>\n        <div class=\"filter-item field-wrapper datePickerBox\" style=\"margin-left: 10px;\"\n          *ngIf=\"recordFilter.dateFilter == 'range'\">\n          <label for=\"date-range\">Select Date Range</label>\n          <input type=\"text\" value=\"\" id=\"date-range\" [(ngModel)]=\"dateFilterRange\"\n            (ngModelChange)=\"dateRangeChange($event)\" class=\"form-ctrl widgetDatepicker bsDatepicker\"\n            style=\"padding: 6px;\" readonly=\"true\" name=\"date-range\" placeholder=\"Date\" bsDaterangepicker />\n        </div>\n\n\n      </div>\n\n      <div class=\"net-worth-container\">\n        <span class=\"heading\">Net Income:</span>\n        <span>₹{{netIncome?.toLocaleString('en-IN')}}</span>\n      </div>\n\n    </div>\n\n  </section>\n\n  <!-- Expense & Income Outer container -->\n  <section>\n    <div class=\"outer-container\">\n\n      <div class=\"section-container\">\n        <div class=\"title-container\">\n          <span>Expenses Details <span style=\"float: right;\"><i class=\"fa fa-file-excel-o\"\n                style=\"font-size: 24px;color: green;cursor: pointer;\" aria-hidden=\"true\" title=\"Export Expenses Details\"\n                (click)=\"exportToExcel()\"></i></span> </span>\n        </div>\n\n        <div class=\"section-table-container\">\n          <div class=\"table-header-container\">\n\n            <div class=\"header-item\">\n              <span>Payment Date </span>\n            </div>\n            <div class=\"header-item\">\n              <span>Payee</span>\n            </div>\n            <div class=\"header-item\">\n              <span>Item/Category</span>\n            </div>\n            <div class=\"header-item align-center\">\n              <span>Amount(Rs)</span>\n            </div>\n          </div>\n          <div class=\"table-value-outer-container\" style=\"padding-bottom: 60px;\">\n            <div class=\"table-value-container\" *ngFor=\"let expense of expenseRecordList\">\n\n              <div class=\"value-item\">\n                <span>{{expense.payment_date}}</span>\n              </div>\n              <div class=\"value-item\">\n                <span>{{expense.party_name}}</span>\n              </div>\n              <div class=\"value-item\">\n                <span\n                  title=\"{{expense?.category}}\">{{ (!expense.category) ? '-' : (expense.category.length > 25) ? (expense.category | slice:0:25) + '...' : expense.category}}</span>\n              </div>\n              <div class=\"value-item align-right\" style=\"padding-right: 55px;\">\n                <span>₹{{expense?.amount.toLocaleString('en-IN')}}</span>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"section-total-container\">\n          <div class=\"section-total-item\">\n            <span class=\"total-header\">Expenses On Inventories</span>\n            <span>₹{{expenseInventoryTotal?.toLocaleString('en-IN')}}</span>\n          </div>\n          <div class=\"section-total-item\">\n            <span>\n              <label for=\"\">\n                <div class=\"questionInfo inline-relative\">\n                  <span class=\"qInfoIcon i-class\">i</span>\n                  <div class=\"tooltip-box-field\">\n                    Sum of all expenses &\n                    <br>expenses on inventories\n                  </div>\n                </div>\n              </label>\n            </span>\n            <span class=\"total-header\">Total Expenses</span>\n            <span>₹{{expenseTotal?.toLocaleString('en-IN')}}</span>\n          </div>\n        </div>\n\n      </div>\n\n      <div class=\"section-container\">\n        <div class=\"title-container\">\n          <span>Income Details<span style=\"float: right;\"><i class=\"fa fa-file-excel-o\"\n                style=\"font-size: 24px;color: green;cursor: pointer;\" aria-hidden=\"true\" title=\"Export Income Details\"\n                (click)=\"exportToExcel1()\"></i></span></span>\n        </div>\n\n        <div class=\"section-table-container\">\n          <div class=\"table-header-container\">\n\n            <div class=\"header-item\">\n              <span>Received Date </span>\n            </div>\n            <div class=\"header-item\">\n              <span>Payer</span>\n            </div>\n            <div class=\"header-item\">\n              <span>Item/Category</span>\n            </div>\n            <div class=\"header-item align-center\">\n              <span>Amount(Rs)</span>\n            </div>\n          </div>\n          <div class=\"table-value-outer-container\" style=\"padding-bottom: 55px;\">\n            <div class=\"table-value-container\" *ngFor=\"let income of incomeRecordList\">\n\n              <div class=\"value-item\">\n                <span>{{income.payment_date}}</span>\n              </div>\n              <div class=\"value-item\">\n                <span>{{income.party_name}}</span>\n              </div>\n              <div class=\"value-item\">\n                <span\n                  title=\"{{income?.category}}\">{{ (!income.category) ? '-' : (income.category.length > 25) ? (income.category | slice:0:25) + '...' : income.category}}</span>\n              </div>\n              <div class=\"value-item align-right\" style=\"padding-right: 55px;\">\n                <span>₹{{income.amount.toLocaleString('en-IN')}}</span>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"section-total-container\">\n          <div class=\"section-total-item\">\n            <span class=\"total-header\">Total Fees Collection </span>\n            <span>₹{{totalFeeCollection?.toLocaleString('en-IN')}}</span>\n          </div>\n          <!-- <div class=\"section-total-item\">\n            <span class=\"total-header\">Total Fees Collection(Others)\t</span>\n            <span>₹{{totalOtherFeeCollection?.toLocaleString('en-IN')}}</span>\n          </div> -->\n          <div class=\"section-total-item\">\n            <span>\n              <label for=\"\">\n                <div class=\"questionInfo inline-relative\">\n                  <span class=\"qInfoIcon i-class\">i</span>\n                  <div class=\"tooltip-box-field\">\n                    Sum of all incomes &\n                    <br>total fees collection\n                  </div>\n                </div>\n              </label>\n            </span>\n            <span class=\"total-header\">Total Sales Revenue</span>\n            <span>₹{{totalSalesRevenue?.toLocaleString('en-IN')}}</span>\n          </div>\n        </div>\n      </div>\n\n\n    </div>\n  </section>\n\n</section>";
      /***/
    },

    /***/
    "./src/app/components/expense-management/data-setup/add-edit-account/add-edit-account.component.scss":
    /*!***********************************************************************************************************!*\
      !*** ./src/app/components/expense-management/data-setup/add-edit-account/add-edit-account.component.scss ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsExpenseManagementDataSetupAddEditAccountAddEditAccountComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".payee-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding-bottom: 10px;\n  flex-wrap: wrap;\n}\n\n.payee-container .payee-item {\n  width: 90%;\n}\n\ninput[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n.form-ctrl {\n  border: 1px solid #ccc;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9leHBlbnNlLW1hbmFnZW1lbnQvZGF0YS1zZXR1cC9hZGQtZWRpdC1hY2NvdW50L2FkZC1lZGl0LWFjY291bnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDhCQUE4QjtFQUM5QixvQkFBb0I7RUFDcEIsZUFBZTtBQUNqQjs7QUFOQTtFQU9JLFVBQVU7QUFHZDs7QUFDQTs7RUFFRSx3QkFBd0I7RUFDeEIsU0FBUztBQUVYOztBQUNBO0VBQ0Usc0JBQXNCO0FBRXhCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9leHBlbnNlLW1hbmFnZW1lbnQvZGF0YS1zZXR1cC9hZGQtZWRpdC1hY2NvdW50L2FkZC1lZGl0LWFjY291bnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGF5ZWUtY29udGFpbmVye1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIC5wYXllZS1pdGVte1xuICAgIHdpZHRoOiA5MCU7XG4gIH1cbn1cblxuaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxuaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBtYXJnaW46IDA7XG59XG5cbi5mb3JtLWN0cmx7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG59XG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/components/expense-management/data-setup/add-edit-account/add-edit-account.component.ts":
    /*!*********************************************************************************************************!*\
      !*** ./src/app/components/expense-management/data-setup/add-edit-account/add-edit-account.component.ts ***!
      \*********************************************************************************************************/

    /*! exports provided: AddEditAccountComponent */

    /***/
    function srcAppComponentsExpenseManagementDataSetupAddEditAccountAddEditAccountComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddEditAccountComponent", function () {
        return AddEditAccountComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _services_message_show_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../services/message-show.service */
      "./src/app/services/message-show.service.ts");
      /* harmony import */


      var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../services/http.service */
      "./src/app/services/http.service.ts");
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

      var AddEditAccountComponent =
      /** @class */
      function () {
        var AddEditAccountComponent = /*#__PURE__*/function () {
          function AddEditAccountComponent(msgService, httpService, auth) {
            _classCallCheck(this, AddEditAccountComponent);

            this.msgService = msgService;
            this.httpService = httpService;
            this.auth = auth; // global variables

            this.jsonFlag = {
              isProfessional: false,
              institute_id: ''
            };
            this.accountDetails = {
              displayPayeeName: '',
              displayPayeerName: '',
              accountName: '',
              accountType: '2',
              accountDescription: '',
              accountNumber: '',
              IFSC_Code: '',
              valuType: ''
            };
            this.account = [];
            this.payeeAccount = [];
            this.payeerAccount = [];
            this.closePopup = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.jsonFlag.institute_id = sessionStorage.getItem('institution_id');
          }

          _createClass(AddEditAccountComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              $('#addAccountModal').modal('show');
              this.getAccountTypes();

              if (this.isEditAccount) {
                this.setEditValues();
              }

              this.getPayeeAccount();
              this.getPayeerAccount();
            }
          }, {
            key: "getAccountTypes",
            value: function getAccountTypes() {
              var _this = this;

              this.auth.showLoader();
              var url = "/api/v1/masterData/type/ACCOUNT_TYPE";
              this.httpService.getData(url).subscribe(function (res) {
                _this.auth.hideLoader();

                _this.account = res;
              }, function (err) {
                _this.auth.hideLoader();

                _this.msgService.showErrorMessage(_this.msgService.toastTypes.error, '', err);
              });
            }
          }, {
            key: "getPayeeAccount",
            value: function getPayeeAccount() {
              var _this2 = this;

              this.auth.showLoader();
              var url = '/api/v1/payment/party/expense/all/' + this.jsonFlag.institute_id;
              this.httpService.getData(url).subscribe(function (res) {
                _this2.auth.hideLoader();

                _this2.payeeAccount = res;
              }, function (err) {
                _this2.auth.hideLoader();

                _this2.msgService.showErrorMessage(_this2.msgService.toastTypes.error, '', err);
              });
            }
          }, {
            key: "getPayeerAccount",
            value: function getPayeerAccount() {
              var _this3 = this;

              this.auth.showLoader();
              var url = '/api/v1/payment/party/income/all/' + this.jsonFlag.institute_id;
              this.httpService.getData(url).subscribe(function (res) {
                _this3.auth.hideLoader();

                _this3.payeerAccount = res;
              }, function (err) {
                _this3.auth.hideLoader();

                _this3.msgService.showErrorMessage(_this3.msgService.toastTypes.error, '', err);
              });
            }
          }, {
            key: "setEditValues",
            value: function setEditValues() {
              var _this4 = this;

              this.auth.showLoader();
              var url = "/api/v1/account/".concat(this.editAccountId);
              this.httpService.getData(url).subscribe(function (res) {
                _this4.auth.hideLoader();

                _this4.editAccountDetails = res;

                _this4.setValue();
              }, function (err) {
                _this4.auth.hideLoader();

                _this4.msgService.showErrorMessage(_this4.msgService.toastTypes.error, '', err);
              });
            }
          }, {
            key: "setValue",
            value: function setValue() {
              this.accountDetails.accountName = this.editAccountDetails.display_name;
              this.accountDetails.accountType = this.editAccountDetails.type;
              this.accountDetails.accountDescription = this.editAccountDetails.notes;
              this.accountDetails.accountNumber = this.editAccountDetails.account_number;
              this.accountDetails.IFSC_Code = this.editAccountDetails.ifsc_code;
              this.accountDetails.displayPayeeName = this.editAccountDetails.party_id; // this.accountDetails.displayPayeerName = this.editAccountDetails.party_id;

              this.accountDetails.valuType = this.editAccountDetails.party_type;
            }
          }, {
            key: "saveAccountDetails",
            value: function saveAccountDetails() {
              var _this5 = this;

              if (this.validateAccountDetailsInput()) {
                var obj = {
                  display_name: this.accountDetails.accountName,
                  notes: this.accountDetails.accountDescription,
                  institution_id: this.jsonFlag.institute_id,
                  type: this.accountDetails.accountType,
                  ifsc_code: this.accountDetails.IFSC_Code,
                  account_number: this.accountDetails.accountNumber,
                  party_id: this.accountDetails.displayPayeeName,
                  //party_id: this.accountDetails.displayPayeerName,
                  // party_type: this.accountDetails.valuType,
                  account_id: ''
                };
                var url = "/api/v1/account";

                if (this.isEditAccount) {
                  obj.account_id = this.editAccountId;
                  this.auth.showLoader();
                  this.httpService.putData(url, obj).subscribe(function (res) {
                    _this5.auth.hideLoader();

                    console.log("post data", obj);

                    if (res.statusCode == 200) {
                      _this5.msgService.showErrorMessage(_this5.msgService.toastTypes.success, '', 'Account updated successfully');

                      _this5.closePopups(false);
                    }
                  }, function (err) {
                    _this5.auth.hideLoader();

                    _this5.msgService.showErrorMessage(_this5.msgService.toastTypes.error, '', err.error.message);
                  });
                } else {
                  delete obj.account_id;
                  this.auth.showLoader();
                  this.httpService.postData(url, obj).subscribe(function (res) {
                    _this5.auth.hideLoader();

                    if (res.statusCode == 200) {
                      _this5.msgService.showErrorMessage(_this5.msgService.toastTypes.success, '', 'Account created successfully');

                      _this5.closePopups(false);
                    }
                  }, function (err) {
                    _this5.auth.hideLoader();

                    _this5.msgService.showErrorMessage(_this5.msgService.toastTypes.error, '', err.error.message);
                  });
                }
              }
            }
          }, {
            key: "validateAccountDetailsInput",
            value: function validateAccountDetailsInput() {
              if (this.accountDetails.accountName.trim() == '') {
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please specify Account Name!');
                return;
              } // if (this.accountDetails.accountNumber == '' && this.accountDetails.valuType == '0') {
              //   this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please specify Account Number!');
              //   return
              // }
              // if (this.accountDetails.valuType == '0' && this.accountDetails.IFSC_Code == '' && this.accountDetails.accountType == '0') {
              //   this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please specify IFSC Code!');
              //   return
              // }
              // if (this.accountDetails.accountDescription.trim() == '') {
              //   this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please specify Account Description!');
              //   return
              // }


              if (this.accountDetails.valuType != '0' && this.accountDetails.valuType != '1') {
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please specify Payee/Payer!');
                return;
              }

              if (this.accountDetails.displayPayeeName == '') {
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please specify Payee/Payer!');
                return;
              }

              return true;
            }
          }, {
            key: "closePopups",
            value: function closePopups($event) {
              $('#addAccountModal').modal('hide');
              this.closePopup.emit(false);
            }
          }]);

          return AddEditAccountComponent;
        }();

        AddEditAccountComponent.ctorParameters = function () {
          return [{
            type: _services_message_show_service__WEBPACK_IMPORTED_MODULE_1__["MessageShowService"]
          }, {
            type: _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]
          }, {
            type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"]
          }];
        };

        AddEditAccountComponent.propDecorators = {
          closePopup: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          isEditAccount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          editAccountId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        };
        AddEditAccountComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
          selector: 'app-add-edit-account',
          template: __importDefault(__webpack_require__(
          /*! raw-loader!./add-edit-account.component.html */
          "./node_modules/raw-loader/dist/cjs.js!./src/app/components/expense-management/data-setup/add-edit-account/add-edit-account.component.html"))["default"],
          styles: [__importDefault(__webpack_require__(
          /*! ./add-edit-account.component.scss */
          "./src/app/components/expense-management/data-setup/add-edit-account/add-edit-account.component.scss"))["default"]]
        }), __metadata("design:paramtypes", [_services_message_show_service__WEBPACK_IMPORTED_MODULE_1__["MessageShowService"], _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"]])], AddEditAccountComponent);
        return AddEditAccountComponent;
      }();
      /***/

    },

    /***/
    "./src/app/components/expense-management/data-setup/add-edit-category/add-edit-category.component.scss":
    /*!*************************************************************************************************************!*\
      !*** ./src/app/components/expense-management/data-setup/add-edit-category/add-edit-category.component.scss ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsExpenseManagementDataSetupAddEditCategoryAddEditCategoryComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXhwZW5zZS1tYW5hZ2VtZW50L2RhdGEtc2V0dXAvYWRkLWVkaXQtY2F0ZWdvcnkvYWRkLWVkaXQtY2F0ZWdvcnkuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/components/expense-management/data-setup/add-edit-category/add-edit-category.component.ts":
    /*!***********************************************************************************************************!*\
      !*** ./src/app/components/expense-management/data-setup/add-edit-category/add-edit-category.component.ts ***!
      \***********************************************************************************************************/

    /*! exports provided: AddEditCategoryComponent */

    /***/
    function srcAppComponentsExpenseManagementDataSetupAddEditCategoryAddEditCategoryComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddEditCategoryComponent", function () {
        return AddEditCategoryComponent;
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


      var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../services/http.service */
      "./src/app/services/http.service.ts");
      /* harmony import */


      var _services_message_show_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../services/message-show.service */
      "./src/app/services/message-show.service.ts");

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

      var AddEditCategoryComponent =
      /** @class */
      function () {
        var AddEditCategoryComponent = /*#__PURE__*/function () {
          function AddEditCategoryComponent(httpService, auth, msgService) {
            _classCallCheck(this, AddEditCategoryComponent);

            this.httpService = httpService;
            this.auth = auth;
            this.msgService = msgService;
            this.jsonFlag = {
              isProfessional: false,
              institute_id: ''
            };
            this.addCategory = {
              Name: '',
              Description: '',
              isActive: true,
              category_id: '',
              expense_category_type: ''
            };
            this.account = [];
            this.showCategoryDropdown = '';
            this.closePopup = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.jsonFlag.institute_id = sessionStorage.getItem('institution_id');
          }

          _createClass(AddEditCategoryComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              $('#addCategory').modal('show'); // this.getCategoryDetails()

              if (sessionStorage.getItem('expense_category_type')) {
                this.showCategoryDropdown = false;
              } else {
                this.showCategoryDropdown = true;
              }

              if (this.isEditCategory) {
                this.setEditValues();
                this.showCategoryDropdown = false;
              }
            }
          }, {
            key: "setEditValues",
            value: function setEditValues() {
              console.log(this.editCategory);
              this.addCategory.Name = this.editCategory.category_name;
              this.addCategory.Description = this.editCategory.category_desc;
              this.addCategory.isActive = this.editCategory.is_active == 'Y' ? true : false;
              this.addCategory.category_id = this.editCategory.category_id;
              this.addCategory.expense_category_type = this.editCategory.expense_category_type;
            }
          }, {
            key: "saveCategoryDetails",
            value: function saveCategoryDetails() {
              var _this6 = this;

              if (this.addCategory.Name != '') {
                if (this.isEditCategory || !this.showCategoryDropdown || this.addCategory.expense_category_type != '') {
                  var obj = {
                    category_name: this.addCategory.Name,
                    category_desc: this.addCategory.Description,
                    is_active: 'Y',
                    expense_category_type: this.addCategory.expense_category_type
                  };

                  if (this.isEditCategory) {
                    obj.category_id = this.addCategory.category_id;
                    obj.is_active = this.addCategory.isActive ? 'Y' : 'N';
                  } else {
                    obj.institute_id = this.jsonFlag.institute_id;
                    obj.expense_category_type = this.addCategory.expense_category_type;

                    if (sessionStorage.getItem('expense_category_type')) {
                      obj.expense_category_type = sessionStorage.getItem('expense_category_type');
                    }
                  }

                  this.auth.showLoader();
                  var url = !this.isEditCategory ? '/api/v1/expense/category/add' : '/api/v1/expense/category/update';

                  if (this.isEditCategory) {
                    this.httpService.putData(url, obj).subscribe(function (res) {
                      _this6.auth.hideLoader();

                      _this6.msgService.showErrorMessage('success', '', "Category Updated successfully");

                      $('#addCategory').modal('hide');

                      _this6.closePopups(false);
                    }, function (err) {
                      _this6.auth.hideLoader();

                      _this6.msgService.showErrorMessage(_this6.msgService.toastTypes.error, '', err.error.message);
                    });
                  } else {
                    this.httpService.postData(url, obj).subscribe(function (res) {
                      _this6.auth.hideLoader();

                      _this6.msgService.showErrorMessage('success', '', "Category added successfully");

                      $('#addCategory').modal('hide');

                      _this6.closePopups(false);
                    }, function (err) {
                      _this6.auth.hideLoader();

                      _this6.msgService.showErrorMessage(_this6.msgService.toastTypes.error, '', err.error.message);
                    });
                  }
                } else {
                  this.msgService.showErrorMessage('error', '', "Please Select Category type");
                }
              } else {
                this.msgService.showErrorMessage('error', '', "Please Enter Category Name");
              }
            }
          }, {
            key: "closePopups",
            value: function closePopups($event) {
              $('#addCategory').modal('hide');
              this.closePopup.emit(false);
            }
          }]);

          return AddEditCategoryComponent;
        }();

        AddEditCategoryComponent.ctorParameters = function () {
          return [{
            type: _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]
          }, {
            type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticatorService"]
          }, {
            type: _services_message_show_service__WEBPACK_IMPORTED_MODULE_3__["MessageShowService"]
          }];
        };

        AddEditCategoryComponent.propDecorators = {
          closePopup: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          isEditCategory: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          editCategory: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        };
        AddEditCategoryComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
          selector: 'app-add-edit-category',
          template: __importDefault(__webpack_require__(
          /*! raw-loader!./add-edit-category.component.html */
          "./node_modules/raw-loader/dist/cjs.js!./src/app/components/expense-management/data-setup/add-edit-category/add-edit-category.component.html"))["default"],
          styles: [__importDefault(__webpack_require__(
          /*! ./add-edit-category.component.scss */
          "./src/app/components/expense-management/data-setup/add-edit-category/add-edit-category.component.scss"))["default"]]
        }), __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _services_authenticator_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticatorService"], _services_message_show_service__WEBPACK_IMPORTED_MODULE_3__["MessageShowService"]])], AddEditCategoryComponent);
        return AddEditCategoryComponent;
      }();
      /***/

    },

    /***/
    "./src/app/components/expense-management/data-setup/add-edit-payee/add-edit-payee.component.scss":
    /*!*******************************************************************************************************!*\
      !*** ./src/app/components/expense-management/data-setup/add-edit-payee/add-edit-payee.component.scss ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsExpenseManagementDataSetupAddEditPayeeAddEditPayeeComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".payee-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding-bottom: 10px;\n  flex-wrap: wrap;\n}\n\n.payee-container .payee-item {\n  width: 49%;\n}\n\ninput[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n.form-ctrl {\n  border: 1px solid #ccc;\n}\n\n.modal-dialog {\n  width: 800px;\n  margin: 30px auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9leHBlbnNlLW1hbmFnZW1lbnQvZGF0YS1zZXR1cC9hZGQtZWRpdC1wYXllZS9hZGQtZWRpdC1wYXllZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLG9CQUFvQjtFQUNwQixlQUFlO0FBQ2pCOztBQU5BO0VBT0ksVUFBVTtBQUdkOztBQUNBOztFQUVFLHdCQUF3QjtFQUN4QixTQUFTO0FBRVg7O0FBQ0E7RUFDRSxzQkFBc0I7QUFFeEI7O0FBQUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0FBR25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9leHBlbnNlLW1hbmFnZW1lbnQvZGF0YS1zZXR1cC9hZGQtZWRpdC1wYXllZS9hZGQtZWRpdC1wYXllZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYXllZS1jb250YWluZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgLnBheWVlLWl0ZW17XG4gICAgd2lkdGg6IDQ5JTtcbiAgfVxufVxuXG5pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXG5pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIG1hcmdpbjogMDtcbn1cblxuLmZvcm0tY3RybHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbn1cbi5tb2RhbC1kaWFsb2cge1xuICB3aWR0aDogODAwcHg7XG4gIG1hcmdpbjogMzBweCBhdXRvO1xufVxuIl19 */";
      /***/
    },

    /***/
    "./src/app/components/expense-management/data-setup/add-edit-payee/add-edit-payee.component.ts":
    /*!*****************************************************************************************************!*\
      !*** ./src/app/components/expense-management/data-setup/add-edit-payee/add-edit-payee.component.ts ***!
      \*****************************************************************************************************/

    /*! exports provided: AddEditPayeeComponent */

    /***/
    function srcAppComponentsExpenseManagementDataSetupAddEditPayeeAddEditPayeeComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddEditPayeeComponent", function () {
        return AddEditPayeeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _services_message_show_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../services/message-show.service */
      "./src/app/services/message-show.service.ts");
      /* harmony import */


      var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../services/http.service */
      "./src/app/services/http.service.ts");
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

      var AddEditPayeeComponent =
      /** @class */
      function () {
        var AddEditPayeeComponent = /*#__PURE__*/function () {
          function AddEditPayeeComponent(msgService, httpService, auth) {
            _classCallCheck(this, AddEditPayeeComponent);

            this.msgService = msgService;
            this.httpService = httpService;
            this.auth = auth;
            this.closePopup = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // global variables

            this.jsonFlag = {
              isProfessional: false,
              institute_id: ''
            };
            this.payeeDetails = {
              title: 'Mr.',
              name: '',
              vendorType: '',
              primaryContactNo: '',
              companyName: '',
              secondaryContactNo: '',
              emailId: '',
              displayName: '',
              address: '',
              notes: ''
            };
            this.partyDetails = [];
            this.jsonFlag.institute_id = sessionStorage.getItem('institution_id');
          }

          _createClass(AddEditPayeeComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              $('#addPayeeModal').modal('show');
              this.getVendorDetails();

              if (this.isEditPayee) {
                this.setEditValues();
              }
            }
          }, {
            key: "getVendorDetails",
            value: function getVendorDetails() {
              var _this7 = this;

              this.auth.showLoader();
              var url = "/api/v1/masterData/type/PARTY_TYPE";
              this.httpService.getData(url).subscribe(function (res) {
                _this7.auth.hideLoader();

                if (res.length > 0) {
                  for (var index = 0; index < res.length; index++) {
                    if (res[index].data_value != 'Customer') {
                      _this7.partyDetails.push(res[index]);

                      _this7.payeeDetails.vendorType = _this7.partyDetails[0].data_key;
                    }
                  }
                }
              }, function (err) {
                _this7.auth.hideLoader();

                _this7.msgService.showErrorMessage(_this7.msgService.toastTypes.error, '', err);
              });
            }
          }, {
            key: "setEditValues",
            value: function setEditValues() {
              var _this8 = this;

              this.auth.showLoader();
              var url = "/api/v1/payment/party/".concat(this.editPayeeId);
              this.httpService.getData(url).subscribe(function (res) {
                _this8.auth.hideLoader();

                _this8.editPartyDetails = res;

                _this8.setValue();
              }, function (err) {
                _this8.auth.hideLoader();

                _this8.msgService.showErrorMessage(_this8.msgService.toastTypes.error, '', err);
              });
            }
          }, {
            key: "setValue",
            value: function setValue() {
              this.payeeDetails.name = this.editPartyDetails.name;
              this.payeeDetails.address = this.editPartyDetails.address;
              this.payeeDetails.vendorType = this.editPartyDetails.type;
              this.payeeDetails.companyName = this.editPartyDetails.company_name;
              this.payeeDetails.displayName = this.editPartyDetails.display_name;
              this.payeeDetails.emailId = this.editPartyDetails.email_id;
              this.payeeDetails.primaryContactNo = this.editPartyDetails.primary_mobile_no;
              this.payeeDetails.secondaryContactNo = this.editPartyDetails.secondary_phone_no;
              this.payeeDetails.notes = this.editPartyDetails.notes;
              this.payeeDetails.title = this.editPartyDetails.title;
            }
          }, {
            key: "savePayeeDetails",
            value: function savePayeeDetails() {
              var _this9 = this;

              if (this.payeeDetails.emailId.trim() != "") {
                if (!this.ValidateEmail(this.payeeDetails.emailId)) {
                  this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please enter valid email Id');
                  return;
                }
              }

              if (this.payeeDetails.primaryContactNo.trim() != "" && this.payeeDetails.primaryContactNo.length < 10) {
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please enter valid primary contact number');
                return;
              }

              if (this.payeeDetails.secondaryContactNo.trim() != "" && this.payeeDetails.secondaryContactNo.length < 10) {
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please enter valid secondary contact number');
                return;
              }

              if (this.payeeDetails.displayName.trim() != "") {
                var obj = {
                  name: this.payeeDetails.name,
                  address: this.payeeDetails.address,
                  institution_id: this.jsonFlag.institute_id,
                  type: this.payeeDetails.vendorType,
                  company_name: this.payeeDetails.companyName,
                  display_name: this.payeeDetails.displayName,
                  email_id: this.payeeDetails.emailId,
                  primary_mobile_no: this.payeeDetails.primaryContactNo,
                  secondary_phone_no: this.payeeDetails.secondaryContactNo,
                  notes: this.payeeDetails.notes,
                  title: this.payeeDetails.title,
                  party_id: ''
                };
                var url = "/api/v1/payment/party";

                if (this.isEditPayee) {
                  obj.party_id = this.editPartyDetails.party_id;
                  this.auth.showLoader();
                  this.httpService.putData(url, obj).subscribe(function (res) {
                    _this9.auth.hideLoader();

                    if (res.statusCode == 200) {
                      _this9.msgService.showErrorMessage(_this9.msgService.toastTypes.success, '', 'Details updated successfully');

                      _this9.closePopups(false);
                    }
                  }, function (err) {
                    _this9.auth.hideLoader();

                    _this9.msgService.showErrorMessage(_this9.msgService.toastTypes.error, '', err.error.message);
                  });
                } else {
                  delete obj.party_id;
                  this.auth.showLoader();
                  this.httpService.postData(url, obj).subscribe(function (res) {
                    _this9.auth.hideLoader();

                    if (res.statusCode == 200) {
                      _this9.msgService.showErrorMessage(_this9.msgService.toastTypes.success, '', 'Payee added successfully');

                      _this9.closePopups(false);
                    }
                  }, function (err) {
                    _this9.auth.hideLoader();

                    _this9.msgService.showErrorMessage(_this9.msgService.toastTypes.error, '', err.error.message);
                  });
                }
              } else {
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please specify Display Name!');
              }
            }
          }, {
            key: "ValidateEmail",
            value: function ValidateEmail(mail) {
              if (/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(mail)) {
                return true;
              }

              return false;
            }
          }, {
            key: "closePopups",
            value: function closePopups($event) {
              $('#addPayeeModal').modal('hide');
              this.closePopup.emit(false);
            }
          }]);

          return AddEditPayeeComponent;
        }();

        AddEditPayeeComponent.ctorParameters = function () {
          return [{
            type: _services_message_show_service__WEBPACK_IMPORTED_MODULE_1__["MessageShowService"]
          }, {
            type: _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]
          }, {
            type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"]
          }];
        };

        AddEditPayeeComponent.propDecorators = {
          closePopup: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          isEditPayee: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          editPayeeId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        };
        AddEditPayeeComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
          selector: 'app-add-edit-payee',
          template: __importDefault(__webpack_require__(
          /*! raw-loader!./add-edit-payee.component.html */
          "./node_modules/raw-loader/dist/cjs.js!./src/app/components/expense-management/data-setup/add-edit-payee/add-edit-payee.component.html"))["default"],
          styles: [__importDefault(__webpack_require__(
          /*! ./add-edit-payee.component.scss */
          "./src/app/components/expense-management/data-setup/add-edit-payee/add-edit-payee.component.scss"))["default"]]
        }), __metadata("design:paramtypes", [_services_message_show_service__WEBPACK_IMPORTED_MODULE_1__["MessageShowService"], _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"]])], AddEditPayeeComponent);
        return AddEditPayeeComponent;
      }();
      /***/

    },

    /***/
    "./src/app/components/expense-management/data-setup/add-edit-payer/add-edit-payer.component.scss":
    /*!*******************************************************************************************************!*\
      !*** ./src/app/components/expense-management/data-setup/add-edit-payer/add-edit-payer.component.scss ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsExpenseManagementDataSetupAddEditPayerAddEditPayerComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".payee-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding-bottom: 10px;\n  flex-wrap: wrap;\n}\n\n.payee-container .payee-item {\n  width: 49%;\n}\n\ninput[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n.form-ctrl {\n  border: 1px solid #ccc;\n}\n\n.modal-dialog {\n  width: 800px;\n  margin: 30px auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9leHBlbnNlLW1hbmFnZW1lbnQvZGF0YS1zZXR1cC9hZGQtZWRpdC1wYXllci9hZGQtZWRpdC1wYXllci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLG9CQUFvQjtFQUNwQixlQUFlO0FBQ2pCOztBQU5BO0VBT0ksVUFBVTtBQUdkOztBQUNBOztFQUVFLHdCQUF3QjtFQUN4QixTQUFTO0FBRVg7O0FBQ0E7RUFDRSxzQkFBc0I7QUFFeEI7O0FBQUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0FBR25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9leHBlbnNlLW1hbmFnZW1lbnQvZGF0YS1zZXR1cC9hZGQtZWRpdC1wYXllci9hZGQtZWRpdC1wYXllci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYXllZS1jb250YWluZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgLnBheWVlLWl0ZW17XG4gICAgd2lkdGg6IDQ5JTtcbiAgfVxufVxuXG5pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXG5pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIG1hcmdpbjogMDtcbn1cblxuLmZvcm0tY3RybHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbn1cbi5tb2RhbC1kaWFsb2cge1xuICB3aWR0aDogODAwcHg7XG4gIG1hcmdpbjogMzBweCBhdXRvO1xufVxuIl19 */";
      /***/
    },

    /***/
    "./src/app/components/expense-management/data-setup/add-edit-payer/add-edit-payer.component.ts":
    /*!*****************************************************************************************************!*\
      !*** ./src/app/components/expense-management/data-setup/add-edit-payer/add-edit-payer.component.ts ***!
      \*****************************************************************************************************/

    /*! exports provided: AddEditPayerComponent */

    /***/
    function srcAppComponentsExpenseManagementDataSetupAddEditPayerAddEditPayerComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddEditPayerComponent", function () {
        return AddEditPayerComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _services_message_show_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../services/message-show.service */
      "./src/app/services/message-show.service.ts");
      /* harmony import */


      var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../services/http.service */
      "./src/app/services/http.service.ts");
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

      var AddEditPayerComponent =
      /** @class */
      function () {
        var AddEditPayerComponent = /*#__PURE__*/function () {
          function AddEditPayerComponent(msgService, httpService, auth) {
            _classCallCheck(this, AddEditPayerComponent);

            this.msgService = msgService;
            this.httpService = httpService;
            this.auth = auth;
            this.closePopup = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // global variables

            this.jsonFlag = {
              isProfessional: false,
              institute_id: '',
              isRippleLoad: false
            };
            this.payerDetails = {
              title: 'Mr.',
              name: '',
              vendorType: '',
              primaryContactNo: '',
              companyName: '',
              secondaryContactNo: '',
              emailId: '',
              displayName: '',
              address: '',
              notes: ''
            };
            this.partyDetails = [];
            this.jsonFlag.institute_id = sessionStorage.getItem('institution_id');
          }

          _createClass(AddEditPayerComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              $('#addPayerModal').modal('show');
              this.getVendorDetails();

              if (this.isEditPayer) {
                this.setEditValues();
              }
            }
          }, {
            key: "getVendorDetails",
            value: function getVendorDetails() {
              var _this10 = this;

              this.auth.showLoader();
              var url = "/api/v1/masterData/type/PARTY_TYPE";
              this.httpService.getData(url).subscribe(function (res) {
                _this10.auth.hideLoader();

                if (res.length > 0) {
                  for (var index = 0; index < res.length; index++) {
                    if (res[index].data_value == 'Customer') {
                      _this10.partyDetails.push(res[index]);

                      _this10.payerDetails.vendorType = _this10.partyDetails[0].data_key;
                    }
                  }
                }
              }, function (err) {
                _this10.auth.hideLoader();

                _this10.msgService.showErrorMessage(_this10.msgService.toastTypes.error, '', err);
              });
            }
          }, {
            key: "setEditValues",
            value: function setEditValues() {
              var _this11 = this;

              this.auth.showLoader();
              var url = "/api/v1/payment/party/".concat(this.editPayerId);
              this.httpService.getData(url).subscribe(function (res) {
                _this11.auth.hideLoader();

                _this11.editPartyDetails = res;

                _this11.setValue();
              }, function (err) {
                _this11.auth.hideLoader();

                _this11.msgService.showErrorMessage(_this11.msgService.toastTypes.error, '', err);
              });
            }
          }, {
            key: "setValue",
            value: function setValue() {
              this.payerDetails.name = this.editPartyDetails.name;
              this.payerDetails.address = this.editPartyDetails.address;
              this.payerDetails.vendorType = this.editPartyDetails.type;
              this.payerDetails.companyName = this.editPartyDetails.company_name;
              this.payerDetails.displayName = this.editPartyDetails.display_name;
              this.payerDetails.emailId = this.editPartyDetails.email_id;
              this.payerDetails.primaryContactNo = this.editPartyDetails.primary_mobile_no;
              this.payerDetails.secondaryContactNo = this.editPartyDetails.secondary_phone_no;
              this.payerDetails.notes = this.editPartyDetails.notes;
              this.payerDetails.title = this.editPartyDetails.title;
            }
          }, {
            key: "savepayerDetails",
            value: function savepayerDetails() {
              var _this12 = this;

              if (this.payerDetails.emailId.trim() != "") {
                if (!this.ValidateEmail(this.payerDetails.emailId)) {
                  this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please enter valid email Id');
                  return;
                }
              }

              if (this.payerDetails.primaryContactNo.trim() != "" && this.payerDetails.primaryContactNo.length < 10) {
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please enter valid primary contact number');
                return;
              }

              if (this.payerDetails.secondaryContactNo.trim() != "" && this.payerDetails.secondaryContactNo.length < 10) {
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please enter valid secondary contact number');
                return;
              }

              if (this.payerDetails.displayName.trim() != "") {
                var obj = {
                  name: this.payerDetails.name,
                  address: this.payerDetails.address,
                  institution_id: this.jsonFlag.institute_id,
                  type: this.payerDetails.vendorType,
                  company_name: this.payerDetails.companyName,
                  display_name: this.payerDetails.displayName,
                  email_id: this.payerDetails.emailId,
                  primary_mobile_no: this.payerDetails.primaryContactNo,
                  secondary_phone_no: this.payerDetails.secondaryContactNo,
                  notes: this.payerDetails.notes,
                  title: this.payerDetails.title,
                  party_id: ''
                };
                var url = "/api/v1/payment/party";

                if (this.isEditPayer) {
                  obj.party_id = this.editPartyDetails.party_id;
                  this.auth.showLoader();
                  this.httpService.putData(url, obj).subscribe(function (res) {
                    _this12.auth.hideLoader();

                    if (res.statusCode == 200) {
                      _this12.msgService.showErrorMessage(_this12.msgService.toastTypes.success, '', 'Details updated successfully');

                      _this12.closePopups(false);
                    }
                  }, function (err) {
                    _this12.auth.hideLoader();

                    _this12.msgService.showErrorMessage(_this12.msgService.toastTypes.error, '', err.error.message);
                  });
                } else {
                  delete obj.party_id;
                  this.auth.showLoader();
                  this.httpService.postData(url, obj).subscribe(function (res) {
                    _this12.auth.hideLoader();

                    if (res.statusCode == 200) {
                      _this12.msgService.showErrorMessage(_this12.msgService.toastTypes.success, '', 'Payer added successfully');

                      _this12.closePopups(false);
                    }
                  }, function (err) {
                    _this12.auth.hideLoader();

                    _this12.msgService.showErrorMessage(_this12.msgService.toastTypes.error, '', err.error.message);
                  });
                }
              } else {
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please specify Display Name!');
              }
            }
          }, {
            key: "ValidateEmail",
            value: function ValidateEmail(mail) {
              if (/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(mail)) {
                return true;
              }

              return false;
            }
          }, {
            key: "closePopups",
            value: function closePopups($event) {
              $('#addPayerModal').modal('hide');
              this.closePopup.emit(false);
            }
          }]);

          return AddEditPayerComponent;
        }();

        AddEditPayerComponent.ctorParameters = function () {
          return [{
            type: _services_message_show_service__WEBPACK_IMPORTED_MODULE_1__["MessageShowService"]
          }, {
            type: _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]
          }, {
            type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"]
          }];
        };

        AddEditPayerComponent.propDecorators = {
          closePopup: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          isEditPayer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          editPayerId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        };
        AddEditPayerComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
          selector: 'app-add-edit-payer',
          template: __importDefault(__webpack_require__(
          /*! raw-loader!./add-edit-payer.component.html */
          "./node_modules/raw-loader/dist/cjs.js!./src/app/components/expense-management/data-setup/add-edit-payer/add-edit-payer.component.html"))["default"],
          styles: [__importDefault(__webpack_require__(
          /*! ./add-edit-payer.component.scss */
          "./src/app/components/expense-management/data-setup/add-edit-payer/add-edit-payer.component.scss"))["default"]]
        }), __metadata("design:paramtypes", [_services_message_show_service__WEBPACK_IMPORTED_MODULE_1__["MessageShowService"], _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"]])], AddEditPayerComponent);
        return AddEditPayerComponent;
      }();
      /***/

    },

    /***/
    "./src/app/components/expense-management/data-setup/data-setup.component.scss":
    /*!************************************************************************************!*\
      !*** ./src/app/components/expense-management/data-setup/data-setup.component.scss ***!
      \************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsExpenseManagementDataSetupDataSetupComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".middle-section {\n  padding: 1%;\n}\n\n.common-tab {\n  padding-top: 5px;\n}\n\n.common-tab ul {\n  margin-top: 5px;\n}\n\n.common-tab ul li {\n  margin-right: 1px;\n  display: inline-block;\n  width: 12%;\n  max-width: 158px;\n  cursor: pointer;\n}\n\n.common-tab ul li span {\n  display: block;\n  padding: 7px 5px;\n  border: 1px solid #cccdcd;\n  color: #9b9b9b;\n  text-align: center;\n  font-size: 14px;\n  font-weight: 600;\n  text-decoration: none;\n}\n\n.common-tab ul li:hover span, .common-tab ul li.active span {\n  background: #e1f3ff;\n  color: #1283f4;\n  border-color: #1283f4;\n  font-weight: normal;\n  font-weight: 600;\n}\n\n.fa-pencil {\n  color: #1283f4;\n  cursor: pointer;\n}\n\n.add-container {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.add-container .add-btn {\n  background: #0084f6;\n  color: white;\n  padding: 6px 10px;\n  border: 2px solid #0084f6;\n  box-shadow: none;\n  border-radius: 4px;\n  margin-top: 10px;\n  margin-left: 15px;\n}\n\n.table-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-top: 10px;\n}\n\n.table-container .table-header-container {\n  border: 1px solid #ccc;\n  display: flex;\n  flex-direction: row;\n  background: #e0eaec;\n  font-weight: 600;\n  text-align: left;\n  justify-content: space-evenly;\n}\n\n.table-container .table-header-container .table-header-item {\n  width: 15%;\n  padding: 10px;\n}\n\n.table-container .table-value-outer-container {\n  display: flex;\n  flex-direction: column;\n  border: 1px solid #ccc;\n  border-top: none;\n  min-height: 57vh;\n  max-height: 57vh;\n  overflow-y: auto;\n}\n\n.table-container .table-value-outer-container .table-value-container {\n  display: flex;\n  flex-direction: row;\n  text-align: left;\n  border-bottom: 1px solid #ccc;\n  justify-content: space-evenly;\n}\n\n.table-container .table-value-outer-container .table-value-container .table-value-item {\n  align-items: center;\n  padding: 10px;\n  width: 15%;\n}\n\n.table-container .table-value-outer-container .table-value-container:last-child {\n  border-bottom: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9leHBlbnNlLW1hbmFnZW1lbnQvZGF0YS1zZXR1cC9kYXRhLXNldHVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiOztBQUdBO0VBQ0ksZ0JBQWdCO0FBQXBCOztBQURBO0VBR1EsZUFBZTtBQUV2Qjs7QUFMQTtFQUtZLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixlQUFlO0FBSTNCOztBQWJBO0VBV2dCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixxQkFBcUI7QUFNckM7O0FBeEJBO0VBdUJvQixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBS3BDOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0FBQzNCOztBQUhBO0VBSUksbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUdyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFMQTtFQU1JLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLDZCQUE2QjtBQUdqQzs7QUFmQTtFQWNNLFVBQVU7RUFDVixhQUFhO0FBS25COztBQXBCQTtFQW1CSSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFLcEI7O0FBOUJBO0VBMkJNLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLDZCQUE2QjtFQUM3Qiw2QkFBNkI7QUFPbkM7O0FBdENBO0VBaUNRLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsVUFBVTtBQVNsQjs7QUE1Q0E7RUF1Q00sbUJBQW1CO0FBU3pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9leHBlbnNlLW1hbmFnZW1lbnQvZGF0YS1zZXR1cC9kYXRhLXNldHVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1pZGRsZS1zZWN0aW9uIHtcbiAgcGFkZGluZzogMSU7XG59XG5cblxuLmNvbW1vbi10YWIge1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgdWwge1xuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgIGxpIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMXB4O1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgd2lkdGg6IDEyJTtcbiAgICAgICAgICAgIG1heC13aWR0aDogMTU4cHg7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA3cHggNXB4O1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2NkY2Q7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM5YjliOWI7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICY6aG92ZXIsXG4gICAgICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlMWYzZmY7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMTI4M2Y0O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICMxMjgzZjQ7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uZmEtcGVuY2lse1xuICBjb2xvcjogIzEyODNmNDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYWRkLWNvbnRhaW5lcntcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgLmFkZC1idG57XG4gICAgYmFja2dyb3VuZDogIzAwODRmNjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogNnB4IDEwcHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzAwODRmNjtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICB9XG59XG5cblxuLnRhYmxlLWNvbnRhaW5lcntcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIC50YWJsZS1oZWFkZXItY29udGFpbmVye1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGJhY2tncm91bmQ6ICNlMGVhZWM7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIC50YWJsZS1oZWFkZXItaXRlbXtcbiAgICAgIHdpZHRoOiAxNSU7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgIH1cbiAgfVxuICAudGFibGUtdmFsdWUtb3V0ZXItY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgbWluLWhlaWdodDogNTd2aDtcbiAgICBtYXgtaGVpZ2h0OiA1N3ZoO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgLnRhYmxlLXZhbHVlLWNvbnRhaW5lcntcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgICAudGFibGUtdmFsdWUtaXRlbXtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgd2lkdGg6IDE1JTtcbiAgICAgIH1cbiAgICB9XG4gICAgLnRhYmxlLXZhbHVlLWNvbnRhaW5lcjpsYXN0LWNoaWxke1xuICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/components/expense-management/data-setup/data-setup.component.ts":
    /*!**********************************************************************************!*\
      !*** ./src/app/components/expense-management/data-setup/data-setup.component.ts ***!
      \**********************************************************************************/

    /*! exports provided: DataSetupComponent */

    /***/
    function srcAppComponentsExpenseManagementDataSetupDataSetupComponentTs(module, __webpack_exports__, __webpack_require__) {
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


      var _services_message_show_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../services/message-show.service */
      "./src/app/services/message-show.service.ts");
      /* harmony import */


      var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../services/http.service */
      "./src/app/services/http.service.ts");
      /* harmony import */


      var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
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
          function DataSetupComponent(msgService, httpService, auth) {
            _classCallCheck(this, DataSetupComponent);

            this.msgService = msgService;
            this.httpService = httpService;
            this.auth = auth; // global variables

            this.jsonFlag = {
              isProfessional: false,
              institute_id: '',
              isRippleLoad: false,
              toggle: false
            };
            this.headerList = [];
            this.payeeHeader = [];
            this.payerHeader = [];
            this.accountHeader = [];
            this.categoryHeader = [];
            this.payeeVisibilty = false;
            this.payerVisibilty = false;
            this.accountVisibilty = false;
            this.categoryVisibilty = false;
            this.editPayeeId = '';
            this.editPayerId = '';
            this.editAccountId = '';
            this.editCategory = {};
            this.isEditPayee = false;
            this.isEditPayer = false;
            this.isEditAccount = false;
            this.isEditCategory = false;
            this.tableValueData = [];
            this.selectedSection = '';
            this.jsonFlag.institute_id = sessionStorage.getItem('institution_id');
          }

          _createClass(DataSetupComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.payeeHeader = [{
                header: 'Name',
                "class": 'medium-item'
              }, {
                header: 'Vendor Type',
                "class": 'medium-item'
              }, {
                header: 'Company Name',
                "class": 'medium-item'
              }, {
                header: 'Contact No.',
                "class": 'medium-item'
              }, {
                header: 'Email ID',
                "class": 'medium-item'
              }, {
                header: 'Edit',
                "class": 'small-item'
              }];
              this.payerHeader = [{
                header: 'Name',
                "class": 'medium-item'
              }, {
                header: 'Vendor Type',
                "class": 'medium-item'
              }, {
                header: 'Company Name',
                "class": 'medium-item'
              }, {
                header: 'Contact No.',
                "class": 'medium-item'
              }, {
                header: 'Email ID',
                "class": 'medium-item'
              }, {
                header: 'Edit',
                "class": 'small-item'
              }];
              this.accountHeader = [{
                header: 'Payee/Payer	',
                "class": 'medium-item'
              }, {
                header: 'Name	',
                "class": 'medium-item'
              }, {
                header: 'Account Name	',
                "class": 'medium-item'
              }, {
                header: 'Type	',
                "class": 'medium-item'
              }, {
                header: 'Account Number	',
                "class": 'medium-item'
              }, {
                header: 'IFSC Code	',
                "class": 'medium-item'
              }, {
                header: 'Description	',
                "class": 'medium-item'
              }, {
                header: 'Edit',
                "class": 'small-item'
              }];
              this.categoryHeader = [{
                header: 'Category Name',
                "class": 'large-item'
              }, {
                header: 'Description	',
                "class": 'large-item'
              }, {
                header: 'Category Type',
                "class": 'large-item'
              }, {
                header: 'Edit',
                "class": 'small-item'
              }];
              this.switchActiveView('payee');
            }
          }, {
            key: "switchActiveView",
            value: function switchActiveView(showId) {
              // changes done by - Nalini
              // code refactoring
              this.selectedSection = showId;
              this.getTableData(showId);
            }
          }, {
            key: "getTableData",
            value: function getTableData(showId) {
              var _this13 = this;

              var url = "";

              if (showId == 'payee') {
                this.headerList = this.payeeHeader;
                url = "/api/v1/payment/party/expense/all/".concat(this.jsonFlag.institute_id);
              }

              if (showId == 'payer') {
                this.headerList = this.payerHeader;
                url = "/api/v1/payment/party/income/all/".concat(this.jsonFlag.institute_id);
              }

              if (showId == 'account') {
                this.headerList = this.accountHeader;
                url = "/api/v1/account/all/".concat(this.jsonFlag.institute_id);
              } // Category changes added


              if (showId == 'category') {
                this.headerList = this.categoryHeader;
                url = "/api/v1/expense/category/all/".concat(this.jsonFlag.institute_id, "?expense_category_type=2,3");
              }

              this.auth.showLoader();
              this.httpService.getData(url).subscribe(function (res) {
                _this13.auth.hideLoader();

                _this13.tableValueData = res;
              }, function (err) {
                _this13.auth.hideLoader();

                _this13.msgService.showErrorMessage(_this13.msgService.toastTypes.error, '', err);
              });
            }
          }, {
            key: "editPayee",
            value: function editPayee(party_id) {
              this.isEditPayee = true;
              this.editPayeeId = party_id;
              this.payeeVisibilty = true;
            }
          }, {
            key: "editPayer",
            value: function editPayer(party_id) {
              this.isEditPayer = true;
              this.editPayerId = party_id;
              this.payerVisibilty = true;
            }
          }, {
            key: "editAccount",
            value: function editAccount(account_id) {
              this.isEditAccount = true;
              this.editAccountId = account_id;
              this.accountVisibilty = true;
            } // changes done by Nalini - to handle manage category changes

          }, {
            key: "editCategoryFun",
            value: function editCategoryFun(obj) {
              this.isEditCategory = true;
              this.editCategory = obj;
              this.categoryVisibilty = true;
            }
          }, {
            key: "toggleCategory",
            value: function toggleCategory() {
              if (this.categoryVisibilty) {
                this.categoryVisibilty = false;
                this.getTableData(this.selectedSection);
              } else {
                this.editCategory = {};
                this.isEditCategory = false;
                this.categoryVisibilty = true;
              }
            }
          }, {
            key: "togglePayee",
            value: function togglePayee() {
              if (this.payeeVisibilty) {
                this.payeeVisibilty = false;
                this.getTableData(this.selectedSection);
              } else {
                this.payeeVisibilty = true;
                this.editPayeeId = '';
                this.isEditPayee = false;
              }
            }
          }, {
            key: "togglePayer",
            value: function togglePayer() {
              if (this.payerVisibilty) {
                this.payerVisibilty = false;
                this.getTableData(this.selectedSection);
              } else {
                this.editPayerId = '';
                this.isEditPayer = false;
                this.payerVisibilty = true;
              }
            }
          }, {
            key: "toggleAccount",
            value: function toggleAccount() {
              if (this.accountVisibilty) {
                this.accountVisibilty = false;
                this.getTableData(this.selectedSection);
              } else {
                this.editAccountId = '';
                this.isEditAccount = false;
                this.accountVisibilty = true;
              }
            }
          }]);

          return DataSetupComponent;
        }();

        DataSetupComponent.ctorParameters = function () {
          return [{
            type: _services_message_show_service__WEBPACK_IMPORTED_MODULE_1__["MessageShowService"]
          }, {
            type: _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]
          }, {
            type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"]
          }];
        };

        DataSetupComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
          selector: 'app-data-setup',
          template: __importDefault(__webpack_require__(
          /*! raw-loader!./data-setup.component.html */
          "./node_modules/raw-loader/dist/cjs.js!./src/app/components/expense-management/data-setup/data-setup.component.html"))["default"],
          styles: [__importDefault(__webpack_require__(
          /*! ./data-setup.component.scss */
          "./src/app/components/expense-management/data-setup/data-setup.component.scss"))["default"]]
        }), __metadata("design:paramtypes", [_services_message_show_service__WEBPACK_IMPORTED_MODULE_1__["MessageShowService"], _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"]])], DataSetupComponent);
        return DataSetupComponent;
      }();
      /***/

    },

    /***/
    "./src/app/components/expense-management/expense-home/expense-home.component.scss":
    /*!****************************************************************************************!*\
      !*** ./src/app/components/expense-management/expense-home/expense-home.component.scss ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsExpenseManagementExpenseHomeExpenseHomeComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".middle-section {\n  padding: 1%;\n}\n\n.leads-menu-section-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  flex-wrap: wrap;\n  width: 100%;\n}\n\n.leads-menu-section-container .leads-menu-item {\n  padding: 15px 10px;\n  width: 31%;\n  background: #fff;\n  height: 120px;\n  border-radius: 4px;\n  cursor: pointer;\n  text-align: left;\n  margin: 1%;\n  box-shadow: 0px 3px 6px #696969;\n}\n\n.leads-menu-section-container .leads-menu-item .menu-title {\n  width: 100%;\n  justify-content: flex-start;\n  font-size: 14px;\n  font-weight: 600;\n  display: flex;\n  flex-direction: row;\n}\n\n.leads-menu-section-container .leads-menu-item .menu-title img {\n  width: 25px;\n  height: 25px;\n}\n\n.leads-menu-section-container .leads-menu-item .menu-title span {\n  margin-left: 10px;\n  margin-top: 5px;\n}\n\n.leads-menu-section-container .leads-menu-item .menu-description {\n  padding: 10px;\n  font-size: 12px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9leHBlbnNlLW1hbmFnZW1lbnQvZXhwZW5zZS1ob21lL2V4cGVuc2UtaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBTkE7RUFPSSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsVUFBVTtFQUVWLCtCQUErQjtBQUduQzs7QUFuQkE7RUFrQk0sV0FBVztFQUNYLDJCQUEyQjtFQUMzQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixtQkFBbUI7QUFLekI7O0FBNUJBO0VBeUJRLFdBQVc7RUFDWCxZQUFZO0FBT3BCOztBQWpDQTtFQTZCUSxpQkFBaUI7RUFDakIsZUFBZTtBQVF2Qjs7QUF0Q0E7RUFrQ00sYUFBYTtFQUNiLGVBQWU7QUFRckIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2V4cGVuc2UtbWFuYWdlbWVudC9leHBlbnNlLWhvbWUvZXhwZW5zZS1ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1pZGRsZS1zZWN0aW9ue1xuICBwYWRkaW5nOiAxJTtcbn1cblxuLmxlYWRzLW1lbnUtc2VjdGlvbi1jb250YWluZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICB3aWR0aDogMTAwJTtcbiAgLmxlYWRzLW1lbnUtaXRlbXtcbiAgICBwYWRkaW5nOiAxNXB4IDEwcHg7XG4gICAgd2lkdGg6IDMxJTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGhlaWdodDogMTIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIG1hcmdpbjogMSU7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggM3B4IDZweCAjNjk2OTY5O1xuICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4ICM2OTY5Njk7XG4gICAgLm1lbnUtdGl0bGV7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGltZ3tcbiAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgIH1cbiAgICAgIHNwYW57XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICB9XG4gICAgfVxuICAgIC5tZW51LWRlc2NyaXB0aW9ue1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/components/expense-management/expense-home/expense-home.component.ts":
    /*!**************************************************************************************!*\
      !*** ./src/app/components/expense-management/expense-home/expense-home.component.ts ***!
      \**************************************************************************************/

    /*! exports provided: ExpenseHomeComponent */

    /***/
    function srcAppComponentsExpenseManagementExpenseHomeExpenseHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExpenseHomeComponent", function () {
        return ExpenseHomeComponent;
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

      var ExpenseHomeComponent =
      /** @class */
      function () {
        var ExpenseHomeComponent = /*#__PURE__*/function () {
          function ExpenseHomeComponent() {
            _classCallCheck(this, ExpenseHomeComponent);
          }

          _createClass(ExpenseHomeComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {}
          }]);

          return ExpenseHomeComponent;
        }();

        ExpenseHomeComponent.ctorParameters = function () {
          return [];
        };

        ExpenseHomeComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
          selector: 'app-expense-home',
          template: __importDefault(__webpack_require__(
          /*! raw-loader!./expense-home.component.html */
          "./node_modules/raw-loader/dist/cjs.js!./src/app/components/expense-management/expense-home/expense-home.component.html"))["default"],
          styles: [__importDefault(__webpack_require__(
          /*! ./expense-home.component.scss */
          "./src/app/components/expense-management/expense-home/expense-home.component.scss"))["default"]]
        }), __metadata("design:paramtypes", [])], ExpenseHomeComponent);
        return ExpenseHomeComponent;
      }();
      /***/

    },

    /***/
    "./src/app/components/expense-management/expense-management-routing.module.ts":
    /*!************************************************************************************!*\
      !*** ./src/app/components/expense-management/expense-management-routing.module.ts ***!
      \************************************************************************************/

    /*! exports provided: ExpenseManagementRoutingModule */

    /***/
    function srcAppComponentsExpenseManagementExpenseManagementRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExpenseManagementRoutingModule", function () {
        return ExpenseManagementRoutingModule;
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


      var _expense_management_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./expense-management.component */
      "./src/app/components/expense-management/expense-management.component.ts");
      /* harmony import */


      var _data_setup_data_setup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./data-setup/data-setup.component */
      "./src/app/components/expense-management/data-setup/data-setup.component.ts");
      /* harmony import */


      var _manage_expense_manage_expense_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./manage-expense/manage-expense.component */
      "./src/app/components/expense-management/manage-expense/manage-expense.component.ts");
      /* harmony import */


      var _manage_income_manage_income_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./manage-income/manage-income.component */
      "./src/app/components/expense-management/manage-income/manage-income.component.ts");
      /* harmony import */


      var _reports_reports_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./reports/reports.component */
      "./src/app/components/expense-management/reports/reports.component.ts");
      /* harmony import */


      var _expense_home_expense_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./expense-home/expense-home.component */
      "./src/app/components/expense-management/expense-home/expense-home.component.ts");
      /* harmony import */


      var _manage_expense_add_edit_expense_add_edit_expense_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./manage-expense/add-edit-expense/add-edit-expense.component */
      "./src/app/components/expense-management/manage-expense/add-edit-expense/add-edit-expense.component.ts");
      /* harmony import */


      var _manage_income_add_edit_income_add_edit_income_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./manage-income/add-edit-income/add-edit-income.component */
      "./src/app/components/expense-management/manage-income/add-edit-income/add-edit-income.component.ts");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var ExpenseManagementRoutingModule =
      /** @class */
      function () {
        var ExpenseManagementRoutingModule = function ExpenseManagementRoutingModule() {
          _classCallCheck(this, ExpenseManagementRoutingModule);
        };

        ExpenseManagementRoutingModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
            path: '',
            component: _expense_management_component__WEBPACK_IMPORTED_MODULE_2__["ExpenseManagementComponent"],
            pathMatch: 'prefix',
            children: [{
              path: '',
              component: _expense_home_expense_home_component__WEBPACK_IMPORTED_MODULE_7__["ExpenseHomeComponent"],
              pathMatch: 'prefix'
            }, {
              path: 'home',
              component: _expense_home_expense_home_component__WEBPACK_IMPORTED_MODULE_7__["ExpenseHomeComponent"],
              pathMatch: 'prefix'
            }, {
              path: 'setup',
              component: _data_setup_data_setup_component__WEBPACK_IMPORTED_MODULE_3__["DataSetupComponent"],
              pathMatch: 'prefix'
            }, {
              path: 'manage-expense',
              component: _manage_expense_manage_expense_component__WEBPACK_IMPORTED_MODULE_4__["ManageExpenseComponent"],
              pathMatch: 'prefix'
            }, {
              path: 'add-expense',
              component: _manage_expense_add_edit_expense_add_edit_expense_component__WEBPACK_IMPORTED_MODULE_8__["AddEditExpenseComponent"],
              pathMatch: 'prefix'
            }, {
              path: 'edit-expense/:id',
              component: _manage_expense_add_edit_expense_add_edit_expense_component__WEBPACK_IMPORTED_MODULE_8__["AddEditExpenseComponent"],
              pathMatch: 'prefix'
            }, {
              path: 'manage-income',
              component: _manage_income_manage_income_component__WEBPACK_IMPORTED_MODULE_5__["ManageIncomeComponent"],
              pathMatch: 'prefix'
            }, {
              path: 'add-income',
              component: _manage_income_add_edit_income_add_edit_income_component__WEBPACK_IMPORTED_MODULE_9__["AddEditIncomeComponent"],
              pathMatch: 'prefix'
            }, {
              path: 'edit-income/:id',
              component: _manage_income_add_edit_income_add_edit_income_component__WEBPACK_IMPORTED_MODULE_9__["AddEditIncomeComponent"],
              pathMatch: 'prefix'
            }, {
              path: 'report',
              component: _reports_reports_component__WEBPACK_IMPORTED_MODULE_6__["ReportsComponent"],
              pathMatch: 'prefix'
            }]
          }])],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })], ExpenseManagementRoutingModule);
        return ExpenseManagementRoutingModule;
      }();
      /***/

    },

    /***/
    "./src/app/components/expense-management/expense-management.component.scss":
    /*!*********************************************************************************!*\
      !*** ./src/app/components/expense-management/expense-management.component.scss ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsExpenseManagementExpenseManagementComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXhwZW5zZS1tYW5hZ2VtZW50L2V4cGVuc2UtbWFuYWdlbWVudC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/components/expense-management/expense-management.component.ts":
    /*!*******************************************************************************!*\
      !*** ./src/app/components/expense-management/expense-management.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: ExpenseManagementComponent */

    /***/
    function srcAppComponentsExpenseManagementExpenseManagementComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExpenseManagementComponent", function () {
        return ExpenseManagementComponent;
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

      var ExpenseManagementComponent =
      /** @class */
      function () {
        var ExpenseManagementComponent = /*#__PURE__*/function () {
          function ExpenseManagementComponent() {
            _classCallCheck(this, ExpenseManagementComponent);
          }

          _createClass(ExpenseManagementComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {}
          }]);

          return ExpenseManagementComponent;
        }();

        ExpenseManagementComponent.ctorParameters = function () {
          return [];
        };

        ExpenseManagementComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
          selector: 'app-expense-management',
          template: __importDefault(__webpack_require__(
          /*! raw-loader!./expense-management.component.html */
          "./node_modules/raw-loader/dist/cjs.js!./src/app/components/expense-management/expense-management.component.html"))["default"],
          styles: [__importDefault(__webpack_require__(
          /*! ./expense-management.component.scss */
          "./src/app/components/expense-management/expense-management.component.scss"))["default"]]
        }), __metadata("design:paramtypes", [])], ExpenseManagementComponent);
        return ExpenseManagementComponent;
      }();
      /***/

    },

    /***/
    "./src/app/components/expense-management/expense-management.module.ts":
    /*!****************************************************************************!*\
      !*** ./src/app/components/expense-management/expense-management.module.ts ***!
      \****************************************************************************/

    /*! exports provided: ExpenseManagementModule */

    /***/
    function srcAppComponentsExpenseManagementExpenseManagementModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExpenseManagementModule", function () {
        return ExpenseManagementModule;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var primeng_primeng__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! primeng/primeng */
      "./node_modules/primeng/primeng.js");
      /* harmony import */


      var primeng_primeng__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! moment */
      "./node_modules/moment/moment.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var _services_excel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/excel.service */
      "./src/app/services/excel.service.ts");
      /* harmony import */


      var _expense_management_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./expense-management-routing.module */
      "./src/app/components/expense-management/expense-management-routing.module.ts");
      /* harmony import */


      var _expense_management_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./expense-management.component */
      "./src/app/components/expense-management/expense-management.component.ts");
      /* harmony import */


      var _data_setup_data_setup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./data-setup/data-setup.component */
      "./src/app/components/expense-management/data-setup/data-setup.component.ts");
      /* harmony import */


      var _manage_expense_manage_expense_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./manage-expense/manage-expense.component */
      "./src/app/components/expense-management/manage-expense/manage-expense.component.ts");
      /* harmony import */


      var _manage_income_manage_income_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./manage-income/manage-income.component */
      "./src/app/components/expense-management/manage-income/manage-income.component.ts");
      /* harmony import */


      var _reports_reports_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./reports/reports.component */
      "./src/app/components/expense-management/reports/reports.component.ts");
      /* harmony import */


      var _expense_home_expense_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./expense-home/expense-home.component */
      "./src/app/components/expense-management/expense-home/expense-home.component.ts");
      /* harmony import */


      var _manage_expense_add_edit_expense_add_edit_expense_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./manage-expense/add-edit-expense/add-edit-expense.component */
      "./src/app/components/expense-management/manage-expense/add-edit-expense/add-edit-expense.component.ts");
      /* harmony import */


      var _manage_income_add_edit_income_add_edit_income_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./manage-income/add-edit-income/add-edit-income.component */
      "./src/app/components/expense-management/manage-income/add-edit-income/add-edit-income.component.ts");
      /* harmony import */


      var _data_setup_add_edit_payee_add_edit_payee_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./data-setup/add-edit-payee/add-edit-payee.component */
      "./src/app/components/expense-management/data-setup/add-edit-payee/add-edit-payee.component.ts");
      /* harmony import */


      var _data_setup_add_edit_payer_add_edit_payer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./data-setup/add-edit-payer/add-edit-payer.component */
      "./src/app/components/expense-management/data-setup/add-edit-payer/add-edit-payer.component.ts");
      /* harmony import */


      var _data_setup_add_edit_account_add_edit_account_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./data-setup/add-edit-account/add-edit-account.component */
      "./src/app/components/expense-management/data-setup/add-edit-account/add-edit-account.component.ts");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../shared/shared.module */
      "./src/app/components/shared/shared.module.ts");
      /* harmony import */


      var _data_setup_add_edit_category_add_edit_category_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./data-setup/add-edit-category/add-edit-category.component */
      "./src/app/components/expense-management/data-setup/add-edit-category/add-edit-category.component.ts");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      }; // import {BsDatepickerConfig, BsDatepickerModule} from 'ngx-bootstrap/datepicker';


      var ExpenseManagementModule =
      /** @class */
      function () {
        var ExpenseManagementModule = function ExpenseManagementModule() {
          _classCallCheck(this, ExpenseManagementModule);
        };

        ExpenseManagementModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
          imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], // BsDatepickerModule,
          primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["FileUploadModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["SplitButtonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _expense_management_routing_module__WEBPACK_IMPORTED_MODULE_6__["ExpenseManagementRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_18__["SharedModule"]],
          declarations: [_expense_management_component__WEBPACK_IMPORTED_MODULE_7__["ExpenseManagementComponent"], _data_setup_data_setup_component__WEBPACK_IMPORTED_MODULE_8__["DataSetupComponent"], _manage_expense_manage_expense_component__WEBPACK_IMPORTED_MODULE_9__["ManageExpenseComponent"], _manage_income_manage_income_component__WEBPACK_IMPORTED_MODULE_10__["ManageIncomeComponent"], _reports_reports_component__WEBPACK_IMPORTED_MODULE_11__["ReportsComponent"], _expense_home_expense_home_component__WEBPACK_IMPORTED_MODULE_12__["ExpenseHomeComponent"], _manage_expense_add_edit_expense_add_edit_expense_component__WEBPACK_IMPORTED_MODULE_13__["AddEditExpenseComponent"], _manage_income_add_edit_income_add_edit_income_component__WEBPACK_IMPORTED_MODULE_14__["AddEditIncomeComponent"], _data_setup_add_edit_payee_add_edit_payee_component__WEBPACK_IMPORTED_MODULE_15__["AddEditPayeeComponent"], _data_setup_add_edit_payer_add_edit_payer_component__WEBPACK_IMPORTED_MODULE_16__["AddEditPayerComponent"], _data_setup_add_edit_account_add_edit_account_component__WEBPACK_IMPORTED_MODULE_17__["AddEditAccountComponent"], _data_setup_add_edit_category_add_edit_category_component__WEBPACK_IMPORTED_MODULE_19__["AddEditCategoryComponent"]],
          providers: [_services_excel_service__WEBPACK_IMPORTED_MODULE_5__["ExcelService"]]
        })], ExpenseManagementModule);
        return ExpenseManagementModule;
      }();
      /***/

    },

    /***/
    "./src/app/components/expense-management/manage-expense/add-edit-expense/add-edit-expense.component.scss":
    /*!***************************************************************************************************************!*\
      !*** ./src/app/components/expense-management/manage-expense/add-edit-expense/add-edit-expense.component.scss ***!
      \***************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsExpenseManagementManageExpenseAddEditExpenseAddEditExpenseComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".middle-section {\n  padding: 1%;\n}\n\n.payment-details-container {\n  display: flex;\n  flex-direction: row;\n}\n\n.payment-details-container .payment-details-item {\n  width: 15%;\n  margin-left: 20px;\n}\n\n.payment-details-container .payment-details-item:first-child {\n  margin-left: 0px;\n}\n\n.total-amount-container {\n  display: flex;\n  flex-direction: row;\n  width: 77%;\n  justify-content: flex-end;\n}\n\n.account-details-container {\n  display: flex;\n  flex-direction: column;\n  margin: 10px 0px;\n  margin-bottom: 0;\n}\n\n.account-details-container .account-details-heading-container, .account-details-container .account-details-input-container {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n}\n\n.account-details-container .account-details-heading-container .account-heading-item, .account-details-container .account-details-heading-container .account-input-item, .account-details-container .account-details-input-container .account-heading-item, .account-details-container .account-details-input-container .account-input-item {\n  width: 15%;\n  margin-left: 20px;\n  font-size: 12px;\n}\n\n.account-details-container .account-details-heading-container .account-heading-item:first-child, .account-details-container .account-details-heading-container .account-input-item:first-child, .account-details-container .account-details-input-container .account-heading-item:first-child, .account-details-container .account-details-input-container .account-input-item:first-child {\n  margin-left: 0;\n}\n\n.account-details-container .add-item-btn {\n  background: #0084f6;\n  color: white;\n  padding: 6px 10px;\n  border: 2px solid #0084f6;\n  box-shadow: none;\n  border-radius: 4px;\n}\n\n.account-details-container .account-value-outer-container {\n  display: flex;\n  flex-direction: column;\n  margin-top: 10px;\n  border-top: 1px solid #ccc;\n  padding-top: 15px;\n}\n\n.account-details-container .account-value-outer-container .account-value-container {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n}\n\n.account-details-container .account-value-outer-container .account-value-container .account-value-item {\n  width: calc(100%/9);\n  padding: 10px;\n  text-align: center;\n}\n\n.customeAdd {\n  position: absolute;\n  right: 0px;\n  color: #0084f6;\n  cursor: pointer;\n}\n\n.customeAdd:hover {\n  text-decoration: underline;\n}\n\n.remove-icon {\n  color: red;\n  font-size: 18px;\n  cursor: pointer;\n  margin-left: 20px;\n}\n\n.download-icon {\n  font-size: 18px;\n  cursor: pointer;\n  color: #0084f6;\n}\n\n.upload-docs-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.upload-docs-container .upload-title {\n  font-size: 14px;\n  font-weight: 600;\n  margin: 10px 0;\n}\n\n.upload-docs-container .upload-docs-input-container {\n  display: flex;\n  flex-direction: row;\n}\n\n.upload-docs-container .upload-docs-input-container .upload-docs-input-item {\n  width: 18%;\n  margin-left: 1%;\n}\n\n.upload-docs-container .upload-docs-input-container .upload-docs-input-item:first-child {\n  margin-left: 0;\n}\n\n.upload-docs-container .upload-docs-input-container .upload-docs-btn {\n  background: #0084f6;\n  color: white;\n  padding: 6px 10px;\n  border: 2px solid #0084f6;\n  box-shadow: none;\n  border-radius: 4px;\n  margin-top: 10px;\n}\n\n.upload-docs-container .upload-docs-value-outer-container {\n  display: flex;\n  flex-direction: column;\n  margin-top: 10px;\n}\n\n.upload-docs-container .upload-docs-value-outer-container .upload-docs-value-container {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  padding: 10px;\n}\n\n.upload-docs-container .upload-docs-value-outer-container .upload-docs-value-container .upload-docs-value-item {\n  font-size: 12px;\n  width: 18%;\n  margin-left: 20px;\n}\n\n.upload-docs-container .upload-docs-value-outer-container .upload-docs-value-container .upload-docs-value-item:first-child {\n  margin-left: 0;\n}\n\n.right-align {\n  text-align: right;\n}\n\n.action-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  position: fixed;\n  bottom: 1%;\n  right: 2%;\n  border-top: 1px solid #ccc;\n  padding: 10px;\n  background: white;\n  width: 86%;\n}\n\n.action-container .save-btn {\n  background: #0084f6;\n  color: white;\n  padding: 6px 15px;\n  border: 2px solid #0084f6;\n  box-shadow: none;\n  border-radius: 4px;\n}\n\n.action-container .cancel-btn {\n  background: white;\n  color: red;\n  padding: 6px 15px;\n  border: 1px solid red;\n  box-shadow: none;\n  border-radius: 4px;\n  margin-right: 20px;\n}\n\ninput[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n.field-wrapper .form-ctrl {\n  border-radius: 4px;\n  border-color: #ccc;\n}\n\n.field-wrapper.datePickerBox:after {\n  content: '';\n  background: url(/./assets/images/calendar.svg) no-repeat;\n  position: absolute;\n  right: 5px;\n  top: 30px;\n  width: 21px;\n  height: 21px;\n  z-index: 0;\n}\n\nbutton[disabled] {\n  cursor: no-drop;\n}\n\n.list-table-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n\n.list-table-container .list-header-container {\n  display: flex;\n  flex-direction: row;\n  font-weight: 600;\n  text-align: center;\n}\n\n.list-table-container .list-header-item {\n  padding: 10px;\n  width: 15%;\n  width: calc(100%/9);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9leHBlbnNlLW1hbmFnZW1lbnQvbWFuYWdlLWV4cGVuc2UvYWRkLWVkaXQtZXhwZW5zZS9hZGQtZWRpdC1leHBlbnNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiOztBQUdBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUFyQjs7QUFGQTtFQUlJLFVBQVU7RUFDVixpQkFBaUI7QUFFckI7O0FBUEE7RUFRSSxnQkFBZ0I7QUFHcEI7O0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVix5QkFBeUI7QUFFM0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBTEE7RUFRSSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFdBQVc7QUFDZjs7QUFYQTtFQVlNLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsZUFBZTtBQUdyQjs7QUFqQkE7RUFpQk0sY0FBYztBQUlwQjs7QUFyQkE7RUFxQkksbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixpQkFBaUI7RUFDakIseUJBQXlCO0VBRXpCLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFJdEI7O0FBL0JBO0VBZ0NJLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLDBCQUEwQjtFQUMxQixpQkFBaUI7QUFHckI7O0FBdkNBO0VBc0NNLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsV0FBVztBQUtqQjs7QUE3Q0E7RUEwQ1EsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixrQkFBa0I7QUFPMUI7O0FBRkE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGNBQWM7RUFDZCxlQUFlO0FBS2pCOztBQVRBO0VBTUksMEJBQTBCO0FBTzlCOztBQUpBO0VBQ0UsVUFBVTtFQUNWLGVBQWU7RUFDZixlQUFlO0VBQ2YsaUJBQWlCO0FBT25COztBQUxBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7RUFDZixjQUFjO0FBUWhCOztBQUpBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQU94Qjs7QUFUQTtFQUlJLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztBQVNsQjs7QUFmQTtFQVNJLGFBQWE7RUFDYixtQkFBbUI7QUFVdkI7O0FBcEJBO0VBWU0sVUFBVTtFQUNWLGVBQWU7QUFZckI7O0FBekJBO0VBZ0JRLGNBQWM7QUFhdEI7O0FBN0JBO0VBbUJRLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUV6QixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQWN4Qjs7QUF4Q0E7RUE4QkksYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixnQkFBZ0I7QUFjcEI7O0FBOUNBO0VBa0NNLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGFBQWE7QUFnQm5COztBQXJEQTtFQXVDUSxlQUFlO0VBQ2YsVUFBVTtFQUNWLGlCQUFpQjtBQWtCekI7O0FBM0RBO0VBNENRLGNBQWM7QUFtQnRCOztBQWJBO0VBQ0UsaUJBQWlCO0FBZ0JuQjs7QUFiQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixVQUFVO0VBQ1YsU0FBUztFQUNULDBCQUEwQjtFQUMxQixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLFVBQVU7QUFnQlo7O0FBMUJBO0VBWUksbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixpQkFBaUI7RUFDakIseUJBQXlCO0VBRXpCLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFrQnRCOztBQXBDQTtFQXFCSSxpQkFBaUI7RUFDakIsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFFckIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFtQnRCOztBQWZBOztFQUVFLHdCQUF3QjtFQUN4QixTQUFTO0FBa0JYOztBQWhCQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFtQnBCOztBQWpCQTtFQUNFLFdBQVc7RUFDWCx3REFBd0Q7RUFDeEQsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVk7RUFDWixVQUFVO0FBb0JaOztBQWxCQTtFQUNFLGVBQWU7QUFxQmpCOztBQWxCQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsV0FBVztBQXFCYjs7QUF4QkE7RUFNSSxhQUFhO0VBQ2IsbUJBQW1CO0VBRW5CLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFxQnRCOztBQS9CQTtFQWVFLGFBQWE7RUFDYixVQUFVO0VBQ1YsbUJBQW1CO0FBb0JyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXhwZW5zZS1tYW5hZ2VtZW50L21hbmFnZS1leHBlbnNlL2FkZC1lZGl0LWV4cGVuc2UvYWRkLWVkaXQtZXhwZW5zZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5taWRkbGUtc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDElO1xufVxuXG4vLyBQYXltZW50IERldGFpbHMgc3R5bGVcbi5wYXltZW50LWRldGFpbHMtY29udGFpbmVye1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAucGF5bWVudC1kZXRhaWxzLWl0ZW17XG4gICAgd2lkdGg6IDE1JTtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgfVxuICAucGF5bWVudC1kZXRhaWxzLWl0ZW06Zmlyc3QtY2hpbGR7XG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgfVxufVxuXG4udG90YWwtYW1vdW50LWNvbnRhaW5lcntcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgd2lkdGg6IDc3JTtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLy8gQWNjb3VudCBEZXRhaWxzIHN0eWxlXG4uYWNjb3VudC1kZXRhaWxzLWNvbnRhaW5lcntcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luOiAxMHB4IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgLy8gYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgLy8gcGFkZGluZzogMTBweDtcbiAgLmFjY291bnQtZGV0YWlscy1oZWFkaW5nLWNvbnRhaW5lciwgLmFjY291bnQtZGV0YWlscy1pbnB1dC1jb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC5hY2NvdW50LWhlYWRpbmctaXRlbSwgLmFjY291bnQtaW5wdXQtaXRlbXtcbiAgICAgIHdpZHRoOiAxNSU7XG4gICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG4gICAgLmFjY291bnQtaGVhZGluZy1pdGVtOmZpcnN0LWNoaWxkLCAuYWNjb3VudC1pbnB1dC1pdGVtOmZpcnN0LWNoaWxke1xuICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgfVxuICB9XG4gIC5hZGQtaXRlbS1idG57XG4gICAgYmFja2dyb3VuZDogIzAwODRmNjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogNnB4IDEwcHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzAwODRmNjtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgLy8gbWFyZ2luLXRvcDogMTBweDtcblxuICB9XG4gIC5hY2NvdW50LXZhbHVlLW91dGVyLWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2NjYztcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgICAuYWNjb3VudC12YWx1ZS1jb250YWluZXJ7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgLmFjY291bnQtdmFsdWUtaXRlbXtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJS85KTtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuICAgICAgXG59fX1cblxuLmN1c3RvbWVBZGR7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDBweDtcbiAgY29sb3I6ICMwMDg0ZjY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgJjpob3ZlcntcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgfVxufVxuLnJlbW92ZS1pY29ue1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG4uZG93bmxvYWQtaWNvbntcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjMDA4NGY2O1xufVxuXG5cbi51cGxvYWQtZG9jcy1jb250YWluZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIC51cGxvYWQtdGl0bGV7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbWFyZ2luOiAxMHB4IDA7XG4gIH1cbiAgLnVwbG9hZC1kb2NzLWlucHV0LWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgLnVwbG9hZC1kb2NzLWlucHV0LWl0ZW17XG4gICAgICB3aWR0aDogMTglO1xuICAgICAgbWFyZ2luLWxlZnQ6IDElO1xuICAgICAgfVxuICAgICAgLnVwbG9hZC1kb2NzLWlucHV0LWl0ZW06Zmlyc3QtY2hpbGR7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgfVxuICAgICAgLnVwbG9hZC1kb2NzLWJ0bntcbiAgICAgICAgYmFja2dyb3VuZDogIzAwODRmNjtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBwYWRkaW5nOiA2cHggMTBweDtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzAwODRmNjtcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICB9XG4gIH1cbiAgLnVwbG9hZC1kb2NzLXZhbHVlLW91dGVyLWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAudXBsb2FkLWRvY3MtdmFsdWUtY29udGFpbmVye1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAudXBsb2FkLWRvY3MtdmFsdWUtaXRlbXtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICB3aWR0aDogMTglO1xuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgIH1cbiAgICAgIC51cGxvYWQtZG9jcy12YWx1ZS1pdGVtOmZpcnN0LWNoaWxke1xuICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLnJpZ2h0LWFsaWdue1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmFjdGlvbi1jb250YWluZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAxJTtcbiAgcmlnaHQ6IDIlO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2NjYztcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHdpZHRoOiA4NiU7XG4gIC5zYXZlLWJ0bntcbiAgICBiYWNrZ3JvdW5kOiAjMDA4NGY2O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiA2cHggMTVweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDA4NGY2O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgfVxuICAuY2FuY2VsLWJ0bntcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBjb2xvcjogcmVkO1xuICAgIHBhZGRpbmc6IDZweCAxNXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICB9XG59XG5cbmlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcbmlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xufVxuLmZpZWxkLXdyYXBwZXIgLmZvcm0tY3RybHtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXItY29sb3I6ICNjY2M7XG59XG4uZmllbGQtd3JhcHBlci5kYXRlUGlja2VyQm94OmFmdGVyIHtcbiAgY29udGVudDogJyc7XG4gIGJhY2tncm91bmQ6IHVybCgvLi9hc3NldHMvaW1hZ2VzL2NhbGVuZGFyLnN2Zykgbm8tcmVwZWF0O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA1cHg7XG4gIHRvcDogMzBweDtcbiAgd2lkdGg6IDIxcHg7XG4gIGhlaWdodDogMjFweDtcbiAgei1pbmRleDogMDtcbn1cbmJ1dHRvbltkaXNhYmxlZF17XG4gIGN1cnNvcjogbm8tZHJvcDtcbn1cblxuLmxpc3QtdGFibGUtY29udGFpbmVye1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbiAgLmxpc3QtaGVhZGVyLWNvbnRhaW5lcntcbiAgICAvL2JvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIC8vYmFja2dyb3VuZDogI2UwZWFlYztcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG5cbi5saXN0LWhlYWRlci1pdGVte1xuICBwYWRkaW5nOiAxMHB4O1xuICB3aWR0aDogMTUlO1xuICB3aWR0aDogY2FsYygxMDAlLzkpO1xufVxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/components/expense-management/manage-expense/add-edit-expense/add-edit-expense.component.ts":
    /*!*************************************************************************************************************!*\
      !*** ./src/app/components/expense-management/manage-expense/add-edit-expense/add-edit-expense.component.ts ***!
      \*************************************************************************************************************/

    /*! exports provided: AddEditExpenseComponent */

    /***/
    function srcAppComponentsExpenseManagementManageExpenseAddEditExpenseAddEditExpenseComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddEditExpenseComponent", function () {
        return AddEditExpenseComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! moment */
      "./node_modules/moment/moment.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _services_message_show_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../services/message-show.service */
      "./src/app/services/message-show.service.ts");
      /* harmony import */


      var _services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../services/http.service */
      "./src/app/services/http.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
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
      }; // // import { document } from 'ngx-bootstrap-custome/utils/facade/browser';


      var AddEditExpenseComponent =
      /** @class */
      function () {
        var AddEditExpenseComponent = /*#__PURE__*/function () {
          function AddEditExpenseComponent(msgService, httpService, router, sanitizer, auth) {
            _classCallCheck(this, AddEditExpenseComponent);

            this.msgService = msgService;
            this.httpService = httpService;
            this.router = router;
            this.sanitizer = sanitizer;
            this.auth = auth; // global variables

            this.jsonFlag = {
              isProfessional: false,
              institute_id: '',
              isRippleLoad: false,
              toggle: false,
              isAuthoriseUser: false,
              created_by: ''
            };
            this.sectionName = '';
            this.addedItemList = [];
            this.accountDetails = {
              itemName: -1,
              description: '',
              quantity: 1,
              amount: 0,
              remarks: '',
              accountNumber: '',
              ifscCode: ''
            };
            this.paymentDetails = {
              payeeName: '-1',
              accountName: '-1',
              paymentDate: moment__WEBPACK_IMPORTED_MODULE_1__(new Date()).format('YYYY-MM-DD'),
              paymentmode: '-1',
              accountNumber: '',
              IfscCode: '',
              dataKey: '',
              transacId: '',
              ChequeNumber: '',
              paymentValue: ''
            };
            this.payeeList = [];
            this.accountNamelist = [];
            this.paymentModelist = [];
            this.docsList = [];
            this.totalAmount = 0;
            this.fileName = null;
            this.payeeVisibilty = false;
            this.accountVisibilty = false;
            this.categoryVisibility = false;
            this.categoryList = [];
            this.categoryName = '';
            this.addCategory = {
              Name: '',
              Description: ''
            };
            this.account_type_value = '';
            this.jsonFlag.institute_id = sessionStorage.getItem('institution_id');
          }

          _createClass(AddEditExpenseComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.getPayeeDetails();
              this.getAccountDetails();
              this.getPaymentMode();
              this.getCategoryDetails();
              var currentURL = window.location.href;

              if (currentURL.includes('add-expense')) {
                this.sectionName = 'Add';
                this.jsonFlag.isAuthoriseUser = true;
              } else {
                this.sectionName = 'Edit';
                var splitURL = currentURL.split("/");
                this.editExpenseId = splitURL[splitURL.length - 1];
                this.getEditExpenseDetails();
              }
            }
          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {
              sessionStorage.removeItem('expense_category_type');
            } // changes done by Nalini - To fetch category details

          }, {
            key: "getCategoryDetails",
            value: function getCategoryDetails() {
              var _this14 = this;

              this.auth.showLoader();
              var url1 = "/api/v1/expense/category/all/".concat(this.jsonFlag.institute_id, "?expense_category_type=2&is_active=Y");
              this.httpService.getData(url1).subscribe(function (res) {
                _this14.auth.hideLoader();

                _this14.categoryList = res;
              }, function (err) {
                _this14.auth.hideLoader();

                _this14.msgService.showErrorMessage(_this14.msgService.toastTypes.error, '', err);
              });
            }
          }, {
            key: "getPayeeDetails",
            value: function getPayeeDetails() {
              var _this15 = this;

              this.auth.showLoader();
              var url1 = "/api/v1/payment/party/expense/all/".concat(this.jsonFlag.institute_id);
              this.httpService.getData(url1).subscribe(function (res) {
                _this15.auth.hideLoader();

                _this15.payeeList = res;
              }, function (err) {
                _this15.auth.hideLoader();

                _this15.msgService.showErrorMessage(_this15.msgService.toastTypes.error, '', err);
              });
            }
          }, {
            key: "getAccountDetails",
            value: function getAccountDetails() {
              var _this16 = this;

              this.auth.showLoader();
              var url2 = "/api/v1/account/all/".concat(this.jsonFlag.institute_id);
              this.httpService.getData(url2).subscribe(function (res) {
                _this16.auth.hideLoader();

                _this16.accountNamelist = res;
                console.log("AAAAAAAAA", _this16.accountNamelist);
              }, function (err) {
                _this16.auth.hideLoader();

                _this16.msgService.showErrorMessage(_this16.msgService.toastTypes.error, '', err);
              });
            }
          }, {
            key: "getPaymentMode",
            value: function getPaymentMode() {
              var _this17 = this;

              this.auth.showLoader();
              var url3 = "/api/v1/masterData/type/PAYMENT_MODE";
              this.httpService.getData(url3).subscribe(function (res) {
                _this17.auth.hideLoader();

                _this17.paymentModelist = res;
                console.log("sdffffff", _this17.paymentModelist);
              }, function (err) {
                _this17.auth.hideLoader();

                _this17.msgService.showErrorMessage(_this17.msgService.toastTypes.error, '', err);
              });
            }
          }, {
            key: "checkpermissinForEditExpense",
            value: function checkpermissinForEditExpense() {
              var userType = sessionStorage.getItem('userType');
              var username = sessionStorage.getItem('username');

              if (sessionStorage.getItem('userType') == '0' && username == 'admin') {
                this.jsonFlag.isAuthoriseUser = true;
              } else if (sessionStorage.getItem('userid') == this.jsonFlag.created_by) {
                this.jsonFlag.isAuthoriseUser = true;
              }
            }
          }, {
            key: "getEditExpenseDetails",
            value: function getEditExpenseDetails() {
              var _this18 = this;

              this.auth.showLoader();
              var url = "/api/v1/expense/".concat(this.jsonFlag.institute_id, "/").concat(this.editExpenseId);
              this.httpService.getData(url).subscribe(function (res) {
                _this18.auth.hideLoader();

                _this18.editExpenseDetails = res;
                _this18.jsonFlag.created_by = res.created_by;

                _this18.checkpermissinForEditExpense();

                _this18.paymentDetails.payeeName = _this18.editExpenseDetails.party_id;
                _this18.paymentDetails.accountName = _this18.editExpenseDetails.account_id;
                _this18.paymentDetails.paymentDate = _this18.editExpenseDetails.payment_date;
                _this18.paymentDetails.paymentmode = _this18.editExpenseDetails.payment_mode;
                _this18.totalAmount = _this18.editExpenseDetails.amount;

                for (var index = 0; index < _this18.editExpenseDetails.itemList.length; index++) {
                  var obj = {
                    itemName: _this18.editExpenseDetails.itemList[index].item_account,
                    description: _this18.editExpenseDetails.itemList[index].item_desc,
                    quantity: _this18.editExpenseDetails.itemList[index].item_quantity,
                    amount: _this18.editExpenseDetails.itemList[index].item_amount,
                    id: _this18.editExpenseDetails.itemList[index].item_id,
                    category_id: _this18.editExpenseDetails.itemList[index].category_id,
                    item_id: _this18.editExpenseDetails.itemList[index].item_id,
                    remarks: _this18.editExpenseDetails.itemList[index].remarks,
                    cheque_number: _this18.editExpenseDetails.itemList[index].cheque_number,
                    transaction_id: _this18.editExpenseDetails.itemList[index].transaction_id,
                    payment_mode: _this18.editExpenseDetails.itemList[index].payment_mode
                  };

                  _this18.addedItemList.push(obj);
                }

                if (!!_this18.editExpenseDetails.attachmentList) {
                  for (var _index = 0; _index < _this18.editExpenseDetails.attachmentList.length; _index++) {
                    var _obj = {
                      fileName: _this18.editExpenseDetails.attachmentList[_index].file_name,
                      file_desc: _this18.editExpenseDetails.attachmentList[_index].file_desc,
                      file_id: _this18.editExpenseDetails.attachmentList[_index].file_id,
                      file: _this18.editExpenseDetails.attachmentList[_index].file,
                      file_path: _this18.editExpenseDetails.attachmentList[_index].file_path,
                      file_extn: _this18.editExpenseDetails.attachmentList[_index].file_extn
                    };

                    _this18.docsList.push(_obj);
                  }
                }
              }, function (err) {
                _this18.auth.hideLoader();

                _this18.msgService.showErrorMessage('error', '', err);
              });
            }
          }, {
            key: "checkPaymentModeVal",
            value: function checkPaymentModeVal() {
              if (this.paymentDetails.paymentmode == '0') {
                return true;
              } else if (this.paymentDetails.paymentmode == '2') {
                return true;
              } // else if (this.paymentDetails.paymentmode == '3' && this.paymentDetails.transacId.trim() != '') {
              //   return true;
              // } 
              // else if (this.paymentDetails.paymentmode == '1' && this.paymentDetails.ChequeNumber.trim() != '') {
              //   return true;
              // }

            }
          }, {
            key: "addItem",
            value: function addItem() {
              if (this.accountDetails.itemName != -1) {
                if (this.accountDetails.amount != 0) {
                  if (this.paymentDetails.accountName != '-1') {
                    // if (this.paymentDetails.paymentmode != "-1") {
                    // if (this.checkPaymentModeVal()) {
                    var obj = {
                      itemName: this.categoryName,
                      description: this.accountDetails.description,
                      quantity: this.accountDetails.quantity,
                      amount: this.accountDetails.amount,
                      item_id: 0,
                      category_id: this.accountDetails.itemName,
                      remarks: this.accountDetails.remarks,
                      payment_mode: this.paymentDetails.paymentmode,
                      transaction_id: this.paymentDetails.transacId,
                      cheque_number: this.paymentDetails.ChequeNumber
                    };
                    this.totalAmount = this.totalAmount + Number(obj.amount);
                    this.addedItemList.push(obj);
                    this.accountDetails.itemName = -1;
                    this.accountDetails.description = '';
                    this.accountDetails.quantity = 1;
                    this.accountDetails.amount = 0;
                    this.accountDetails.remarks = '';
                    this.paymentDetails.transacId = '';
                    this.paymentDetails.ChequeNumber = '';
                    this.paymentDetails.paymentmode = '-1';
                  } //   else {
                  //     let msg = (this.paymentDetails.paymentmode == '1') ? 'Enter Cheque Number' : 'Enter Transaction Id';
                  //     this.msgService.showErrorMessage('error', '', msg);
                  //   }
                  // }
                  //   else {
                  //     this.msgService.showErrorMessage('error', '', 'Please select Payment Mode');
                  //   }
                  // }
                  else {
                      this.msgService.showErrorMessage('error', '', 'Please select Account Name');
                    }
                } else {
                  this.msgService.showErrorMessage('error', '', "Enter Item Amount");
                }
              } else {
                this.msgService.showErrorMessage('error', '', "Select Item Name");
              }

              console.log(this.addedItemList);
            }
          }, {
            key: "uploadHandler",
            value: function uploadHandler() {
              var _this19 = this;

              var fileTypes = ['jpg', 'jpeg', 'png', 'docs', 'pdf', 'doc', 'svg', 'txt']; //acceptable file types

              var preview = document.getElementById('uploadFileControl').files[0];

              if (preview != null || preview != undefined) {
                var extension = preview.name.split('.').pop().toLowerCase(),
                    //file extension from input file
                isSuccess = fileTypes.indexOf(extension) > -1; //is extension in acceptable types

                if (isSuccess) {
                  var myReader = new FileReader();
                  var temp = {};
                  myReader.readAsDataURL(preview);

                  myReader.onloadend = function () {
                    temp = {
                      // "title": this.category_id,
                      "fileName": preview.name,
                      "file_desc": _this19.docDescription,
                      "file": myReader.result.split(',')[1],
                      "file_extn": extension,
                      "file_id": 0
                    };

                    _this19.docsList.push(temp);

                    _this19.docDescription = "";

                    _this19.msgService.showErrorMessage('success', '', "File uploaded successfully");

                    document.getElementById('uploadFileControl').value = null;
                  };
                } else {
                  this.msgService.showErrorMessage('error', '', "Please check file type.");
                }
              } else {
                this.msgService.showErrorMessage('error', '', "No file selected");
              }
            }
          }, {
            key: "addExpense",
            value: function addExpense() {
              if (this.paymentDetails.payeeName != '-1') {
                // if (this.paymentDetails.accountName != '-1') {
                // if (this.paymentDetails.paymentmode != "-1") {
                if (this.addedItemList.length > 0) {
                  var itemlist = [];

                  for (var index = 0; index < this.addedItemList.length; index++) {
                    var item = {
                      "category_id": this.addedItemList[index].category_id,
                      "item_quantity": this.addedItemList[index].quantity,
                      "item_amount": this.addedItemList[index].amount,
                      "item_id": this.addedItemList[index].item_id,
                      "remarks": this.addedItemList[index].remarks,
                      "payment_mode": this.addedItemList[index].payment_mode,
                      "transaction_id": this.addedItemList[index].transaction_id,
                      "cheque_number": this.addedItemList[index].cheque_number
                    };
                    itemlist.push(item);
                  }

                  var attachList = [];

                  for (var _index2 = 0; _index2 < this.docsList.length; _index2++) {
                    var file = {
                      file_id: this.docsList[_index2].file_id,
                      file: this.docsList[_index2].file,
                      file_extn: this.docsList[_index2].file_extn,
                      file_desc: this.docsList[_index2].file_desc,
                      file_name: this.docsList[_index2].fileName
                    };
                    attachList.push(file);
                  }

                  var obj = {
                    party_id: this.paymentDetails.payeeName,
                    account_id: this.paymentDetails.accountName,
                    payment_date: moment__WEBPACK_IMPORTED_MODULE_1__(this.paymentDetails.paymentDate).format('YYYY-MM-DD'),
                    paying_mode: this.paymentDetails.paymentmode,
                    itemList: itemlist,
                    attachmentList: attachList,
                    amount: this.totalAmount
                  };
                  console.log(obj);

                  if (this.sectionName == 'Edit') {
                    this.updateExpense(obj);
                  } else {
                    this.addNewExpense(obj);
                  }
                } else {
                  this.msgService.showErrorMessage('error', '', 'Please specify at least one item of expense!');
                }
              } // else {
              //   this.msgService.showErrorMessage('error', '', 'Please select Payment Mode');
              // }
              // else {
              //   this.msgService.showErrorMessage('error', '', 'Please select Account Name');
              // }
              // }
              else {
                  this.msgService.showErrorMessage('error', '', 'Please select Payee Name');
                }
            }
          }, {
            key: "setDescription",
            value: function setDescription(obj) {
              var _this20 = this;

              if (this.categoryList && this.categoryList.length) {
                var categoryObj = this.categoryList.filter(function (category) {
                  if (category.category_id == _this20.accountDetails.itemName) {
                    _this20.categoryName = category.category_name;
                    _this20.accountDetails.description = category.category_desc;
                  }
                });
              }
            }
          }, {
            key: "setAccountIfscCode",
            value: function setAccountIfscCode(obj) {
              var _this21 = this;

              if (this.accountNamelist && this.accountNamelist.length) {
                var accuntIfscObj = this.accountNamelist.filter(function (nameSet) {
                  if (nameSet.account_id == obj) {
                    console.log(nameSet); // this.account_type_value = nameSet.type_value;

                    _this21.paymentDetails.paymentmode = nameSet.payment_mode;
                    _this21.paymentDetails.paymentValue = nameSet.type_value;
                    _this21.paymentDetails.accountNumber = nameSet.account_number;
                    _this21.paymentDetails.IfscCode = nameSet.ifsc_code; // if( this.addedItemList.length < 1 ){
                    //   this.msgService.showErrorMessage('error', '', 'Please delete existing entries for changing account');
                    // }
                  }
                });
              }
            }
          }, {
            key: "addNewExpense",
            value: function addNewExpense(obj) {
              var _this22 = this;

              this.auth.showLoader();
              var url = "/api/v1/expense/".concat(this.jsonFlag.institute_id);
              this.httpService.postData(url, obj).subscribe(function (res) {
                _this22.auth.hideLoader();

                _this22.msgService.showErrorMessage('success', '', "Expense added successfully");

                _this22.router.navigate(['/view/expense/manage-expense']);
              }, function (err) {
                _this22.auth.hideLoader();

                _this22.msgService.showErrorMessage(_this22.msgService.toastTypes.error, '', err.error.message);
              });
            }
          }, {
            key: "updateExpense",
            value: function updateExpense(obj) {
              var _this23 = this;

              this.auth.showLoader();
              var url = "/api/v1/expense/".concat(this.jsonFlag.institute_id, "/").concat(this.editExpenseId);
              this.httpService.putData(url, obj).subscribe(function (res) {
                _this23.auth.hideLoader();

                _this23.msgService.showErrorMessage('success', '', "Expense updated successfully");

                _this23.router.navigate(['/view/expense/manage-expense']);
              }, function (err) {
                _this23.auth.hideLoader();

                _this23.msgService.showErrorMessage(_this23.msgService.toastTypes.error, '', err.error.message);
              });
            }
          }, {
            key: "removeItem",
            value: function removeItem(itemName) {
              if (this.jsonFlag.isAuthoriseUser) {
                for (var index = 0; index < this.addedItemList.length; index++) {
                  if (this.addedItemList[index].itemName == itemName) {
                    this.totalAmount = this.totalAmount - Number(this.addedItemList[index].amount);
                    this.addedItemList.splice(index, 1);
                    break;
                  }
                }
              }
            }
          }, {
            key: "removeDoc",
            value: function removeDoc(fileName) {
              for (var index = 0; index < this.docsList.length; index++) {
                if (this.docsList[index].fileName == fileName) {
                  this.docsList.splice(index, 1);
                  break;
                }
              }
            }
          }, {
            key: "downloadattachemnt",
            value: function downloadattachemnt(file_id, file_type, fileName) {
              var _this24 = this;

              this.auth.showLoader();
              var url = "/api/v1/expense/download/" + this.jsonFlag.institute_id + "/" + file_id;
              this.httpService.downloadItem(url, file_type).subscribe(function (response) {
                _this24.auth.hideLoader();

                if (response) {
                  var blob = new Blob([response.document], {
                    type: file_type
                  });
                  _this24.fileUrl = _this24.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));

                  if (_this24.fileUrl != null) {
                    _this24.fileName = fileName;
                    setTimeout(function () {
                      var hiddenDownload = document.getElementById('downloadFileClick');
                      hiddenDownload.href = _this24.fileUrl.changingThisBreaksApplicationSecurity;
                      hiddenDownload.download = fileName;
                      hiddenDownload.click();
                    }, 500);
                  }
                }
              }, function (err) {
                _this24.auth.hideLoader();

                console.log(err);
              });
            }
          }, {
            key: "checkFututreDate",
            value: function checkFututreDate() {
              var today = moment__WEBPACK_IMPORTED_MODULE_1__(new Date());
              var selectedDate = moment__WEBPACK_IMPORTED_MODULE_1__(this.paymentDetails.paymentDate);
              var diff = moment__WEBPACK_IMPORTED_MODULE_1__(selectedDate.diff(today))['_i'];

              if (diff > 0) {
                this.msgService.showErrorMessage('info', '', "Future date is not allowed");
                this.paymentDetails.paymentDate = moment__WEBPACK_IMPORTED_MODULE_1__(new Date()).format('YYYY-MM-DD');
              }
            }
          }, {
            key: "changeAccount",
            value: function changeAccount(obj) {
              var _this25 = this;

              // this.accountNamelist= this.accountNamelist.find(e => e.type_value == obj)
              var array = this.accountNamelist.filter(function (x) {
                return x.type == _this25.accountNamelist;
              })[0].type_value;
              console.log("list", array);
            }
          }, {
            key: "togglePayee",
            value: function togglePayee() {
              if (this.payeeVisibilty) {
                this.payeeVisibilty = false;
                this.getPayeeDetails();
              } else {
                this.payeeVisibilty = true;
              }
            }
          }, {
            key: "toggleAccount",
            value: function toggleAccount() {
              if (this.accountVisibilty) {
                this.accountVisibilty = false;
                this.getAccountDetails();
              } else {
                this.accountVisibilty = true;
              }
            }
          }, {
            key: "toggleCategory",
            value: function toggleCategory() {
              if (this.categoryVisibility) {
                this.categoryVisibility = false;
                this.getCategoryDetails();
              } else {
                sessionStorage.setItem('expense_category_type', '2');
                this.categoryVisibility = true;
              }
            }
          }]);

          return AddEditExpenseComponent;
        }();

        AddEditExpenseComponent.ctorParameters = function () {
          return [{
            type: _services_message_show_service__WEBPACK_IMPORTED_MODULE_2__["MessageShowService"]
          }, {
            type: _services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]
          }, {
            type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticatorService"]
          }];
        };

        AddEditExpenseComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
          selector: 'app-add-edit-expense',
          template: __importDefault(__webpack_require__(
          /*! raw-loader!./add-edit-expense.component.html */
          "./node_modules/raw-loader/dist/cjs.js!./src/app/components/expense-management/manage-expense/add-edit-expense/add-edit-expense.component.html"))["default"],
          styles: [__importDefault(__webpack_require__(
          /*! ./add-edit-expense.component.scss */
          "./src/app/components/expense-management/manage-expense/add-edit-expense/add-edit-expense.component.scss"))["default"]]
        }), __metadata("design:paramtypes", [_services_message_show_service__WEBPACK_IMPORTED_MODULE_2__["MessageShowService"], _services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"], _services_authenticator_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticatorService"]])], AddEditExpenseComponent);
        return AddEditExpenseComponent;
      }();
      /***/

    },

    /***/
    "./src/app/components/expense-management/manage-expense/manage-expense.component.scss":
    /*!********************************************************************************************!*\
      !*** ./src/app/components/expense-management/manage-expense/manage-expense.component.scss ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsExpenseManagementManageExpenseManageExpenseComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".middle-section {\n  padding: 1%;\n}\n\n.filter-search-data-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.filter-search-data-container .filter-container {\n  display: flex;\n  flex-direction: row;\n  width: 50%;\n}\n\n.filter-search-data-container .filter-container .filter-item {\n  width: 35%;\n}\n\n.filter-search-data-container .search-data-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  width: 50%;\n}\n\n.filter-search-data-container .search-data-container .activity-item {\n  margin-top: 10px;\n}\n\n.filter-search-data-container .search-data-container .search-box {\n  border-radius: 4px;\n  border: 1px solid #b4b6bd;\n  width: 100%;\n  line-height: 30px;\n  padding: 0 10px;\n  font-size: 12px;\n}\n\n.filter-search-data-container .search-data-container .add-expense-btn {\n  background: #0084f6;\n  color: white;\n  padding: 6px 10px;\n  border: 2px solid #0084f6;\n  box-shadow: none;\n  border-radius: 4px;\n  margin-top: 10px;\n  margin-left: 15px;\n}\n\n.field-wrapper .form-ctrl {\n  border-radius: 4px;\n  border-color: #ccc;\n}\n\n.list-table-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n\n.list-table-container .list-header-container {\n  border: 1px solid #ccc;\n  display: flex;\n  flex-direction: row;\n  background: #e0eaec;\n  font-weight: 600;\n  text-align: left;\n}\n\n.list-table-container .list-header-item {\n  padding: 10px;\n}\n\n.list-table-container .list-value-outer-container {\n  display: flex;\n  flex-direction: column;\n  border: 1px solid #ccc;\n  border-top: none;\n  min-height: 58vh;\n  max-height: 58vh;\n  overflow-y: auto;\n}\n\n.list-table-container .list-value-outer-container .list-value-container {\n  display: flex;\n  flex-direction: row;\n  text-align: left;\n  border-bottom: 1px solid #ccc;\n}\n\n.list-table-container .list-value-outer-container .list-value-container .list-value-item {\n  padding: 10px;\n}\n\n.list-table-container .list-value-outer-container .list-value-container:last-child {\n  border-bottom: none;\n}\n\n.list-table-container .small-item {\n  width: 15%;\n}\n\n.list-table-container .medium-item {\n  width: 20%;\n}\n\n.list-table-container .align-center {\n  text-align: center;\n}\n\n.list-table-container .align-right {\n  text-align: right;\n}\n\n.list-table-container .no-records {\n  display: block;\n  text-align: center;\n  padding: 10px;\n  font-size: 14px;\n  font-weight: 600;\n}\n\n.list-table-container .fa-pencil {\n  color: #0084f6;\n  cursor: pointer;\n}\n\n.excel-container {\n  display: flex;\n  justify-content: flex-end;\n  padding: 10px;\n}\n\n.excel-container .excel {\n  font-size: 20px;\n  color: green;\n  cursor: pointer;\n}\n\n.field-wrapper.datePickerBox:after {\n  content: '';\n  background: url(/./assets/images/calendar.svg) no-repeat;\n  position: absolute;\n  right: 5px;\n  top: 30px;\n  width: 21px;\n  height: 21px;\n  z-index: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9leHBlbnNlLW1hbmFnZW1lbnQvbWFuYWdlLWV4cGVuc2UvbWFuYWdlLWV4cGVuc2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtBQUVoQzs7QUFMQTtFQUtJLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsVUFBVTtBQUlkOztBQVhBO0VBU00sVUFBVTtBQU1oQjs7QUFmQTtFQWFJLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLFVBQVU7QUFNZDs7QUF0QkE7RUFrQk0sZ0JBQWdCO0FBUXRCOztBQTFCQTtFQXFCTSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGVBQWU7QUFTckI7O0FBbkNBO0VBNkJNLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFVdkI7O0FBTkE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0FBU3BCOztBQVBBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0FBVWI7O0FBYkE7RUFLSSxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQVlwQjs7QUF0QkE7RUFhSSxhQUFhO0FBYWpCOztBQTFCQTtFQWdCSSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFjcEI7O0FBcENBO0VBd0JNLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLDZCQUE2QjtBQWdCbkM7O0FBM0NBO0VBNkJRLGFBQWE7QUFrQnJCOztBQS9DQTtFQWlDTSxtQkFBbUI7QUFrQnpCOztBQW5EQTtFQXFDSSxVQUFVO0FBa0JkOztBQXZEQTtFQXdDSSxVQUFVO0FBbUJkOztBQTNEQTtFQTJDSSxrQkFBa0I7QUFvQnRCOztBQS9EQTtFQThDSSxpQkFBaUI7QUFxQnJCOztBQW5FQTtFQWlESSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixlQUFlO0VBQ2YsZ0JBQWdCO0FBc0JwQjs7QUEzRUE7RUF3REksY0FBYztFQUNkLGVBQWU7QUF1Qm5COztBQWxCQTtFQUNFLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsYUFBYTtBQXFCZjs7QUF4QkE7RUFLSSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGVBQWU7QUF1Qm5COztBQWxCQTtFQUNFLFdBQVc7RUFDWCx3REFBd0Q7RUFDeEQsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVk7RUFDWixVQUFVO0FBcUJaIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9leHBlbnNlLW1hbmFnZW1lbnQvbWFuYWdlLWV4cGVuc2UvbWFuYWdlLWV4cGVuc2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWlkZGxlLXNlY3Rpb24ge1xuICBwYWRkaW5nOiAxJTtcbn1cbi5maWx0ZXItc2VhcmNoLWRhdGEtY29udGFpbmVye1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIC5maWx0ZXItY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICB3aWR0aDogNTAlO1xuICAgIC5maWx0ZXItaXRlbXtcbiAgICAgIHdpZHRoOiAzNSU7XG4gICAgfVxuICB9XG4gIC5zZWFyY2gtZGF0YS1jb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgd2lkdGg6IDUwJTtcbiAgICAuYWN0aXZpdHktaXRlbXtcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgfVxuICAgIC5zZWFyY2gtYm94e1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2I0YjZiZDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxuICAgIC5hZGQtZXhwZW5zZS1idG57XG4gICAgICBiYWNrZ3JvdW5kOiAjMDA4NGY2O1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgcGFkZGluZzogNnB4IDEwcHg7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjMDA4NGY2O1xuICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICB9XG4gIH1cbn1cbi5maWVsZC13cmFwcGVyIC5mb3JtLWN0cmx7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyLWNvbG9yOiAjY2NjO1xufVxuLmxpc3QtdGFibGUtY29udGFpbmVye1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbiAgLmxpc3QtaGVhZGVyLWNvbnRhaW5lcntcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBiYWNrZ3JvdW5kOiAjZTBlYWVjO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuICAubGlzdC1oZWFkZXItaXRlbXtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG4gIC5saXN0LXZhbHVlLW91dGVyLWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3JkZXItdG9wOiBub25lO1xuICAgIG1pbi1oZWlnaHQ6IDU4dmg7XG4gICAgbWF4LWhlaWdodDogNTh2aDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIC5saXN0LXZhbHVlLWNvbnRhaW5lcntcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICAgICAgLmxpc3QtdmFsdWUtaXRlbXtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIH1cbiAgICB9XG4gICAgLmxpc3QtdmFsdWUtY29udGFpbmVyOmxhc3QtY2hpbGR7XG4gICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgIH1cbiAgfVxuICAuc21hbGwtaXRlbXtcbiAgICB3aWR0aDogMTUlO1xuICB9XG4gIC5tZWRpdW0taXRlbXtcbiAgICB3aWR0aDogMjAlO1xuICB9XG4gIC5hbGlnbi1jZW50ZXJ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5hbGlnbi1yaWdodHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgfVxuICAubm8tcmVjb3Jkc3tcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgfVxuICAuZmEtcGVuY2lse1xuICAgIGNvbG9yOiAjMDA4NGY2O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG59XG5cbi5leGNlbC1jb250YWluZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIC5leGNlbHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3I6IGdyZWVuO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufVxuXG5cbi5maWVsZC13cmFwcGVyLmRhdGVQaWNrZXJCb3g6YWZ0ZXIge1xuICBjb250ZW50OiAnJztcbiAgYmFja2dyb3VuZDogdXJsKC8uL2Fzc2V0cy9pbWFnZXMvY2FsZW5kYXIuc3ZnKSBuby1yZXBlYXQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDVweDtcbiAgdG9wOiAzMHB4O1xuICB3aWR0aDogMjFweDtcbiAgaGVpZ2h0OiAyMXB4O1xuICB6LWluZGV4OiAwO1xufVxuIl19 */";
      /***/
    },

    /***/
    "./src/app/components/expense-management/manage-expense/manage-expense.component.ts":
    /*!******************************************************************************************!*\
      !*** ./src/app/components/expense-management/manage-expense/manage-expense.component.ts ***!
      \******************************************************************************************/

    /*! exports provided: ManageExpenseComponent */

    /***/
    function srcAppComponentsExpenseManagementManageExpenseManageExpenseComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ManageExpenseComponent", function () {
        return ManageExpenseComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! moment */
      "./node_modules/moment/moment.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _services_message_show_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../services/message-show.service */
      "./src/app/services/message-show.service.ts");
      /* harmony import */


      var _services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../services/http.service */
      "./src/app/services/http.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../services/authenticator.service */
      "./src/app/services/authenticator.service.ts");
      /* harmony import */


      var _services_excel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../services/excel.service */
      "./src/app/services/excel.service.ts");

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

      var ManageExpenseComponent =
      /** @class */
      function () {
        var ManageExpenseComponent = /*#__PURE__*/function () {
          function ManageExpenseComponent(msgService, httpService, router, auth, excelService) {
            _classCallCheck(this, ManageExpenseComponent);

            this.msgService = msgService;
            this.httpService = httpService;
            this.router = router;
            this.auth = auth;
            this.excelService = excelService; // global variables

            this.jsonFlag = {
              isProfessional: false,
              institute_id: '',
              toggle: false
            };
            this.expenseFilter = {
              dateFilter: "month"
            };
            this.expenseRecordList = [];
            this.tempExpenselist = [];
            this.jsonFlag.institute_id = sessionStorage.getItem('institution_id');
          }

          _createClass(ManageExpenseComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.getExpenseRecords();
            }
          }, {
            key: "getExpenseRecords",
            value: function getExpenseRecords() {
              var obj = {
                type: "0",
                institute_id: this.jsonFlag.institute_id
              };

              if (this.expenseFilter.dateFilter == "date") {
                obj.type = "1", obj["startdate"] = "";
                obj["enddate"] = "";
              }

              if (this.expenseFilter.dateFilter != "range") {
                this.getExpenseList(obj);
              } else {
                this.dateFilterRange = "";
              }
            }
          }, {
            key: "getExpenseList",
            value: function getExpenseList(obj) {
              var _this26 = this;

              var url = "/api/v1/expense/all/".concat(this.jsonFlag.institute_id);
              this.auth.showLoader();
              this.httpService.postData(url, obj).subscribe(function (res) {
                _this26.auth.hideLoader();

                _this26.expenseRecordList = res;
                _this26.tempExpenselist = res;
              }, function (err) {
                _this26.auth.hideLoader();

                _this26.msgService.showErrorMessage(_this26.msgService.toastTypes.error, '', err);
              });
            }
          }, {
            key: "searchDatabase",
            value: function searchDatabase() {
              var _this27 = this;

              this.expenseRecordList = this.tempExpenselist;

              if (this.expenseSearchInput == undefined || this.expenseSearchInput == null) {
                this.expenseSearchInput = "";
              } else {
                var searchData = this.tempExpenselist.filter(function (item) {
                  return Object.keys(item).some(function (k) {
                    return item[k] != null && item[k].toString().toLowerCase().includes(_this27.expenseSearchInput.toLowerCase());
                  });
                });
                this.expenseRecordList = searchData;
              }
            }
          }, {
            key: "dateRangeChange",
            value: function dateRangeChange(e) {
              this.startDate = moment__WEBPACK_IMPORTED_MODULE_1__(e[0]).format("YYYY-MM-DD");
              this.endDate = moment__WEBPACK_IMPORTED_MODULE_1__(e[1]).format("YYYY-MM-DD");
              var obj = {
                type: "2",
                institute_id: this.jsonFlag.institute_id,
                startdate: this.startDate,
                enddate: this.endDate
              };
              this.getExpenseList(obj);
            }
          }, {
            key: "editExpense",
            value: function editExpense(id) {
              this.router.navigate(['/view/expense/edit-expense/' + id]);
            }
          }, {
            key: "exportToExcel",
            value: function exportToExcel(event) {
              var temp = [];
              temp = this.tempExpenselist.map(function (e) {
                var obj = {
                  Payment_Date: e.payment_date,
                  Reference_No: e.reference_no,
                  Payee: e.party_name,
                  Category: e.category,
                  Category_Description: e.category_description,
                  Total: e.amount,
                  Remarks: e.remarks
                };
                return obj;
              });
              this.excelService.exportAsExcelFile(temp, 'Expense_report');
            }
          }]);

          return ManageExpenseComponent;
        }();

        ManageExpenseComponent.ctorParameters = function () {
          return [{
            type: _services_message_show_service__WEBPACK_IMPORTED_MODULE_2__["MessageShowService"]
          }, {
            type: _services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }, {
            type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticatorService"]
          }, {
            type: _services_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExcelService"]
          }];
        };

        ManageExpenseComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
          selector: 'app-manage-expense',
          template: __importDefault(__webpack_require__(
          /*! raw-loader!./manage-expense.component.html */
          "./node_modules/raw-loader/dist/cjs.js!./src/app/components/expense-management/manage-expense/manage-expense.component.html"))["default"],
          styles: [__importDefault(__webpack_require__(
          /*! ./manage-expense.component.scss */
          "./src/app/components/expense-management/manage-expense/manage-expense.component.scss"))["default"]]
        }), __metadata("design:paramtypes", [_services_message_show_service__WEBPACK_IMPORTED_MODULE_2__["MessageShowService"], _services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_authenticator_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticatorService"], _services_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExcelService"]])], ManageExpenseComponent);
        return ManageExpenseComponent;
      }();
      /***/

    },

    /***/
    "./src/app/components/expense-management/manage-income/add-edit-income/add-edit-income.component.scss":
    /*!************************************************************************************************************!*\
      !*** ./src/app/components/expense-management/manage-income/add-edit-income/add-edit-income.component.scss ***!
      \************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsExpenseManagementManageIncomeAddEditIncomeAddEditIncomeComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".middle-section {\n  padding: 1%;\n}\n\n.payment-details-container {\n  display: flex;\n  flex-direction: row;\n}\n\n.payment-details-container .payment-details-item {\n  width: 15%;\n  margin-left: 20px;\n}\n\n.payment-details-container .payment-details-item:first-child {\n  margin-left: 0px;\n}\n\n.total-amount-container {\n  display: flex;\n  flex-direction: row;\n  width: 77%;\n  justify-content: flex-end;\n}\n\n.account-details-container {\n  display: flex;\n  flex-direction: column;\n  margin: 10px 0px;\n  margin-bottom: 0;\n}\n\n.account-details-container .account-details-heading-container, .account-details-container .account-details-input-container {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n}\n\n.account-details-container .account-details-heading-container .account-heading-item, .account-details-container .account-details-heading-container .account-input-item, .account-details-container .account-details-input-container .account-heading-item, .account-details-container .account-details-input-container .account-input-item {\n  width: 15%;\n  margin-left: 20px;\n  font-size: 12px;\n}\n\n.account-details-container .account-details-heading-container .account-heading-item:first-child, .account-details-container .account-details-heading-container .account-input-item:first-child, .account-details-container .account-details-input-container .account-heading-item:first-child, .account-details-container .account-details-input-container .account-input-item:first-child {\n  margin-left: 0;\n}\n\n.account-details-container .add-item-btn {\n  background: #0084f6;\n  color: white;\n  padding: 6px 10px;\n  border: 2px solid #0084f6;\n  box-shadow: none;\n  border-radius: 4px;\n}\n\n.account-details-container .account-value-outer-container {\n  display: flex;\n  flex-direction: column;\n  margin-top: 10px;\n  border-top: 1px solid #ccc;\n  padding-top: 15px;\n}\n\n.account-details-container .account-value-outer-container .account-value-container {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n}\n\n.account-details-container .account-value-outer-container .account-value-container .account-value-item {\n  width: calc(100%/9);\n  padding: 10px;\n  text-align: center;\n}\n\n.account-details-container .account-value-outer-container .account-value-item:first-child {\n  margin-left: 0;\n}\n\n.remove-icon {\n  color: red;\n  font-size: 18px;\n  cursor: pointer;\n  margin-left: 20px;\n}\n\n.customeAdd {\n  position: absolute;\n  right: 0px;\n  color: #0084f6;\n  cursor: pointer;\n}\n\n.customeAdd:hover {\n  text-decoration: underline;\n}\n\n.download-icon {\n  font-size: 18px;\n  cursor: pointer;\n  color: #0084f6;\n}\n\n.upload-docs-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.upload-docs-container .upload-title {\n  font-size: 14px;\n  font-weight: 600;\n  margin: 10px 0;\n}\n\n.upload-docs-container .upload-docs-input-container {\n  display: flex;\n  flex-direction: row;\n}\n\n.upload-docs-container .upload-docs-input-container .upload-docs-input-item {\n  width: 18%;\n  margin-left: 1%;\n}\n\n.upload-docs-container .upload-docs-input-container .upload-docs-input-item:first-child {\n  margin-left: 0;\n}\n\n.upload-docs-container .upload-docs-input-container .upload-docs-btn {\n  background: #0084f6;\n  color: white;\n  padding: 6px 10px;\n  border: 2px solid #0084f6;\n  box-shadow: none;\n  border-radius: 4px;\n  margin-top: 10px;\n}\n\n.upload-docs-container .upload-docs-value-outer-container {\n  display: flex;\n  flex-direction: column;\n  margin-top: 10px;\n}\n\n.upload-docs-container .upload-docs-value-outer-container .upload-docs-value-container {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  padding: 10px;\n}\n\n.upload-docs-container .upload-docs-value-outer-container .upload-docs-value-container .upload-docs-value-item {\n  font-size: 12px;\n  width: 18%;\n  margin-left: 20px;\n}\n\n.upload-docs-container .upload-docs-value-outer-container .upload-docs-value-container .upload-docs-value-item:first-child {\n  margin-left: 0;\n}\n\n.right-align {\n  text-align: right;\n}\n\n.action-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  position: fixed;\n  bottom: 1%;\n  right: 2%;\n  border-top: 1px solid #ccc;\n  padding: 10px;\n  background: white;\n  width: 86%;\n}\n\n.action-container .save-btn {\n  background: #0084f6;\n  color: white;\n  padding: 6px 15px;\n  border: 2px solid #0084f6;\n  box-shadow: none;\n  border-radius: 4px;\n}\n\n.action-container .cancel-btn {\n  background: white;\n  color: red;\n  padding: 6px 15px;\n  border: 1px solid red;\n  box-shadow: none;\n  border-radius: 4px;\n  margin-right: 20px;\n}\n\ninput[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n.field-wrapper .form-ctrl {\n  border-radius: 4px;\n  border-color: #ccc;\n}\n\n.field-wrapper.datePickerBox:after {\n  content: '';\n  background: url(/./assets/images/calendar.svg) no-repeat;\n  position: absolute;\n  right: 5px;\n  top: 30px;\n  width: 21px;\n  height: 21px;\n  z-index: 0;\n}\n\nbutton[disabled] {\n  cursor: no-drop;\n}\n\n.list-table-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n\n.list-table-container .list-header-container {\n  display: flex;\n  flex-direction: row;\n  font-weight: 600;\n  text-align: center;\n}\n\n.list-table-container .list-header-item {\n  padding: 10px;\n  width: 15%;\n  width: calc(100%/9);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9leHBlbnNlLW1hbmFnZW1lbnQvbWFuYWdlLWluY29tZS9hZGQtZWRpdC1pbmNvbWUvYWRkLWVkaXQtaW5jb21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiOztBQUdBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUFyQjs7QUFGQTtFQUlJLFVBQVU7RUFDVixpQkFBaUI7QUFFckI7O0FBUEE7RUFRSSxnQkFBZ0I7QUFHcEI7O0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVix5QkFBeUI7QUFFM0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBTEE7RUFRSSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFdBQVc7QUFDZjs7QUFYQTtFQVlNLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsZUFBZTtBQUdyQjs7QUFqQkE7RUFpQk0sY0FBYztBQUlwQjs7QUFyQkE7RUFxQkksbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixpQkFBaUI7RUFDakIseUJBQXlCO0VBRXpCLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFJdEI7O0FBL0JBO0VBZ0NJLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLDBCQUEwQjtFQUMxQixpQkFBaUI7QUFHckI7O0FBdkNBO0VBc0NNLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsV0FBVztBQUtqQjs7QUE3Q0E7RUEwQ1EsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixrQkFBa0I7QUFPMUI7O0FBbkRBO0VBaURRLGNBQWM7QUFNdEI7O0FBQUE7RUFDRSxVQUFVO0VBQ1YsZUFBZTtFQUNmLGVBQWU7RUFDZixpQkFBaUI7QUFHbkI7O0FBREE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGNBQWM7RUFDZCxlQUFlO0FBSWpCOztBQVJBO0VBTUksMEJBQTBCO0FBTTlCOztBQUhBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7RUFDZixjQUFjO0FBTWhCOztBQUZBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUt4Qjs7QUFQQTtFQUlJLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztBQU9sQjs7QUFiQTtFQVNJLGFBQWE7RUFDYixtQkFBbUI7QUFRdkI7O0FBbEJBO0VBWU0sVUFBVTtFQUNWLGVBQWU7QUFVckI7O0FBdkJBO0VBZ0JRLGNBQWM7QUFXdEI7O0FBM0JBO0VBbUJRLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUV6QixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQVl4Qjs7QUF0Q0E7RUE4QkksYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixnQkFBZ0I7QUFZcEI7O0FBNUNBO0VBa0NNLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGFBQWE7QUFjbkI7O0FBbkRBO0VBdUNRLGVBQWU7RUFDZixVQUFVO0VBQ1YsaUJBQWlCO0FBZ0J6Qjs7QUF6REE7RUE0Q1EsY0FBYztBQWlCdEI7O0FBWEE7RUFDRSxpQkFBaUI7QUFjbkI7O0FBWEE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsVUFBVTtFQUNWLFNBQVM7RUFDVCwwQkFBMEI7RUFDMUIsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixVQUFVO0FBY1o7O0FBeEJBO0VBWUksbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixpQkFBaUI7RUFDakIseUJBQXlCO0VBRXpCLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFnQnRCOztBQWxDQTtFQXFCSSxpQkFBaUI7RUFDakIsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFFckIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFpQnRCOztBQWJBOztFQUVFLHdCQUF3QjtFQUN4QixTQUFTO0FBZ0JYOztBQWRBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQWlCcEI7O0FBZkE7RUFDRSxXQUFXO0VBQ1gsd0RBQXdEO0VBQ3hELGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsU0FBUztFQUNULFdBQVc7RUFDWCxZQUFZO0VBQ1osVUFBVTtBQWtCWjs7QUFoQkE7RUFDRSxlQUFlO0FBbUJqQjs7QUFoQkE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7QUFtQmI7O0FBdEJBO0VBTUksYUFBYTtFQUNiLG1CQUFtQjtFQUVuQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBbUJ0Qjs7QUE3QkE7RUFlRSxhQUFhO0VBQ2IsVUFBVTtFQUNWLG1CQUFtQjtBQWtCckIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2V4cGVuc2UtbWFuYWdlbWVudC9tYW5hZ2UtaW5jb21lL2FkZC1lZGl0LWluY29tZS9hZGQtZWRpdC1pbmNvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWlkZGxlLXNlY3Rpb24ge1xuICBwYWRkaW5nOiAxJTtcbn1cblxuLy8gUGF5bWVudCBEZXRhaWxzIHN0eWxlXG4ucGF5bWVudC1kZXRhaWxzLWNvbnRhaW5lcntcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgLnBheW1lbnQtZGV0YWlscy1pdGVte1xuICAgIHdpZHRoOiAxNSU7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIH1cbiAgLnBheW1lbnQtZGV0YWlscy1pdGVtOmZpcnN0LWNoaWxke1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIH1cbn1cblxuLnRvdGFsLWFtb3VudC1jb250YWluZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHdpZHRoOiA3NyU7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi8vIEFjY291bnQgRGV0YWlscyBzdHlsZVxuLmFjY291bnQtZGV0YWlscy1jb250YWluZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbjogMTBweCAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIC8vIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIC8vIHBhZGRpbmc6IDEwcHg7XG4gIC5hY2NvdW50LWRldGFpbHMtaGVhZGluZy1jb250YWluZXIsIC5hY2NvdW50LWRldGFpbHMtaW5wdXQtY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICB3aWR0aDogMTAwJTtcbiAgICAuYWNjb3VudC1oZWFkaW5nLWl0ZW0sIC5hY2NvdW50LWlucHV0LWl0ZW17XG4gICAgICB3aWR0aDogMTUlO1xuICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxuICAgIC5hY2NvdW50LWhlYWRpbmctaXRlbTpmaXJzdC1jaGlsZCwgLmFjY291bnQtaW5wdXQtaXRlbTpmaXJzdC1jaGlsZHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIH1cbiAgfVxuICAuYWRkLWl0ZW0tYnRue1xuICAgIGJhY2tncm91bmQ6ICMwMDg0ZjY7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDZweCAxMHB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDg0ZjY7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIC8vIG1hcmdpbi10b3A6IDEwcHg7XG5cbiAgfVxuICAuYWNjb3VudC12YWx1ZS1vdXRlci1jb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjY2M7XG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgLmFjY291bnQtdmFsdWUtY29udGFpbmVye1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIC5hY2NvdW50LXZhbHVlLWl0ZW17XG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUvOSk7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxufVxuICAgICAgfVxuICAgICAgLmFjY291bnQtdmFsdWUtaXRlbTpmaXJzdC1jaGlsZHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cblxuLnJlbW92ZS1pY29ue1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG4uY3VzdG9tZUFkZHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMHB4O1xuICBjb2xvcjogIzAwODRmNjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAmOmhvdmVye1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICB9XG59XG4uZG93bmxvYWQtaWNvbntcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjMDA4NGY2O1xufVxuXG5cbi51cGxvYWQtZG9jcy1jb250YWluZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIC51cGxvYWQtdGl0bGV7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbWFyZ2luOiAxMHB4IDA7XG4gIH1cbiAgLnVwbG9hZC1kb2NzLWlucHV0LWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgLnVwbG9hZC1kb2NzLWlucHV0LWl0ZW17XG4gICAgICB3aWR0aDogMTglO1xuICAgICAgbWFyZ2luLWxlZnQ6IDElO1xuICAgICAgfVxuICAgICAgLnVwbG9hZC1kb2NzLWlucHV0LWl0ZW06Zmlyc3QtY2hpbGR7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgfVxuICAgICAgLnVwbG9hZC1kb2NzLWJ0bntcbiAgICAgICAgYmFja2dyb3VuZDogIzAwODRmNjtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBwYWRkaW5nOiA2cHggMTBweDtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzAwODRmNjtcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICB9XG4gIH1cbiAgLnVwbG9hZC1kb2NzLXZhbHVlLW91dGVyLWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAudXBsb2FkLWRvY3MtdmFsdWUtY29udGFpbmVye1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAudXBsb2FkLWRvY3MtdmFsdWUtaXRlbXtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICB3aWR0aDogMTglO1xuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgIH1cbiAgICAgIC51cGxvYWQtZG9jcy12YWx1ZS1pdGVtOmZpcnN0LWNoaWxke1xuICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLnJpZ2h0LWFsaWdue1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmFjdGlvbi1jb250YWluZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAxJTtcbiAgcmlnaHQ6IDIlO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2NjYztcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHdpZHRoOiA4NiU7XG4gIC5zYXZlLWJ0bntcbiAgICBiYWNrZ3JvdW5kOiAjMDA4NGY2O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiA2cHggMTVweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDA4NGY2O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgfVxuICAuY2FuY2VsLWJ0bntcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBjb2xvcjogcmVkO1xuICAgIHBhZGRpbmc6IDZweCAxNXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICB9XG59XG5cbmlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcbmlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xufVxuLmZpZWxkLXdyYXBwZXIgLmZvcm0tY3RybHtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXItY29sb3I6ICNjY2M7XG59XG4uZmllbGQtd3JhcHBlci5kYXRlUGlja2VyQm94OmFmdGVyIHtcbiAgY29udGVudDogJyc7XG4gIGJhY2tncm91bmQ6IHVybCgvLi9hc3NldHMvaW1hZ2VzL2NhbGVuZGFyLnN2Zykgbm8tcmVwZWF0O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA1cHg7XG4gIHRvcDogMzBweDtcbiAgd2lkdGg6IDIxcHg7XG4gIGhlaWdodDogMjFweDtcbiAgei1pbmRleDogMDtcbn1cbmJ1dHRvbltkaXNhYmxlZF17XG4gIGN1cnNvcjogbm8tZHJvcDtcbn1cblxuLmxpc3QtdGFibGUtY29udGFpbmVye1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbiAgLmxpc3QtaGVhZGVyLWNvbnRhaW5lcntcbiAgICAvL2JvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIC8vYmFja2dyb3VuZDogI2UwZWFlYztcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG5cbi5saXN0LWhlYWRlci1pdGVte1xuICBwYWRkaW5nOiAxMHB4O1xuICB3aWR0aDogMTUlO1xuICB3aWR0aDogY2FsYygxMDAlLzkpO1xuXG59XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/components/expense-management/manage-income/add-edit-income/add-edit-income.component.ts":
    /*!**********************************************************************************************************!*\
      !*** ./src/app/components/expense-management/manage-income/add-edit-income/add-edit-income.component.ts ***!
      \**********************************************************************************************************/

    /*! exports provided: AddEditIncomeComponent */

    /***/
    function srcAppComponentsExpenseManagementManageIncomeAddEditIncomeAddEditIncomeComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddEditIncomeComponent", function () {
        return AddEditIncomeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! moment */
      "./node_modules/moment/moment.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _services_message_show_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../services/message-show.service */
      "./src/app/services/message-show.service.ts");
      /* harmony import */


      var _services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../services/http.service */
      "./src/app/services/http.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
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
      }; // import { document } from 'ngx-bootstrap-custome/utils/facade/browser';


      var AddEditIncomeComponent =
      /** @class */
      function () {
        var AddEditIncomeComponent = /*#__PURE__*/function () {
          function AddEditIncomeComponent(msgService, httpService, router, auth) {
            _classCallCheck(this, AddEditIncomeComponent);

            this.msgService = msgService;
            this.httpService = httpService;
            this.router = router;
            this.auth = auth; // global variables

            this.jsonFlag = {
              isProfessional: false,
              institute_id: '',
              toggle: false,
              isAuthoriseUser: false,
              created_by: ''
            };
            this.sectionName = '';
            this.addedItemList = [];
            this.accountDetails = {
              itemName: -1,
              description: '',
              quantity: 1,
              amount: 0,
              remarks: ''
            };
            this.paymentDetails = {
              payerName: '-1',
              accountName: '-1',
              receivedDate: moment__WEBPACK_IMPORTED_MODULE_1__(new Date()).format('YYYY-MM-DD'),
              paymentmode: '-1',
              accounNumber: '',
              IfscCode: '',
              transacId: '',
              ChequeNumber: '',
              accountNumber: '',
              paymentValue: ''
            };
            this.payerList = [];
            this.accountNamelist = [];
            this.paymentModelist = [];
            this.docsList = [];
            this.totalAmount = 0;
            this.payerVisibilty = false;
            this.accountVisibilty = false;
            this.categoryVisibility = false;
            this.categoryList = [];
            this.categoryName = '';
            this.addCategory = {
              Name: '',
              Description: ''
            };
            this.jsonFlag.institute_id = sessionStorage.getItem('institution_id');
          }

          _createClass(AddEditIncomeComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.getPayerList();
              this.getAccountDetails();
              this.getPaymentMode();
              this.getCategoryDetails();
              var currentURL = window.location.href;

              if (currentURL.includes('add-income')) {
                this.sectionName = 'Add';
                this.jsonFlag.isAuthoriseUser = true;
              } else {
                this.sectionName = 'Edit';
                var splitURL = currentURL.split("/");
                this.editIncomeId = splitURL[splitURL.length - 1];
                this.getEditIncomeDetails();
              }
            }
          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {
              sessionStorage.removeItem('expense_category_type');
            } // changes done by Nalini - To fetch category details

          }, {
            key: "getCategoryDetails",
            value: function getCategoryDetails() {
              var _this28 = this;

              this.auth.showLoader();
              var url1 = "/api/v1/expense/category/all/".concat(this.jsonFlag.institute_id, "?expense_category_type=3&is_active=Y");
              this.httpService.getData(url1).subscribe(function (res) {
                _this28.auth.hideLoader();

                _this28.categoryList = res;
              }, function (err) {
                _this28.auth.hideLoader();

                _this28.msgService.showErrorMessage(_this28.msgService.toastTypes.error, '', err);
              });
            }
          }, {
            key: "getPayerList",
            value: function getPayerList() {
              var _this29 = this;

              this.auth.showLoader();
              var url1 = "/api/v1/payment/party/income/all/".concat(this.jsonFlag.institute_id);
              this.httpService.getData(url1).subscribe(function (res) {
                _this29.auth.hideLoader();

                _this29.payerList = res;
              }, function (err) {
                _this29.auth.hideLoader();

                _this29.msgService.showErrorMessage(_this29.msgService.toastTypes.error, '', err);
              });
            }
          }, {
            key: "getAccountDetails",
            value: function getAccountDetails() {
              var _this30 = this;

              this.auth.showLoader();
              var url2 = "/api/v1/account/all/".concat(this.jsonFlag.institute_id);
              this.httpService.getData(url2).subscribe(function (res) {
                _this30.auth.hideLoader();

                _this30.accountNamelist = res;
              }, function (err) {
                _this30.auth.hideLoader();

                _this30.msgService.showErrorMessage(_this30.msgService.toastTypes.error, '', err);
              });
            }
          }, {
            key: "getPaymentMode",
            value: function getPaymentMode() {
              var _this31 = this;

              this.auth.showLoader();
              var url3 = "/api/v1/masterData/type/PAYMENT_MODE";
              this.httpService.getData(url3).subscribe(function (res) {
                _this31.auth.hideLoader();

                _this31.paymentModelist = res;
              }, function (err) {
                _this31.auth.hideLoader();

                _this31.msgService.showErrorMessage(_this31.msgService.toastTypes.error, '', err);
              });
            }
          }, {
            key: "checkpermissinForEditIncome",
            value: function checkpermissinForEditIncome() {
              var userType = sessionStorage.getItem('userType');
              var username = sessionStorage.getItem('username');

              if (sessionStorage.getItem('userType') == '0' && username == 'admin') {
                this.jsonFlag.isAuthoriseUser = true;
              } else if (sessionStorage.getItem('userid') == this.jsonFlag.created_by) {
                this.jsonFlag.isAuthoriseUser = true;
              }
            }
          }, {
            key: "getEditIncomeDetails",
            value: function getEditIncomeDetails() {
              var _this32 = this;

              this.auth.showLoader();
              var url = "/api/v1/income/".concat(this.jsonFlag.institute_id, "/").concat(this.editIncomeId);
              this.httpService.getData(url).subscribe(function (res) {
                _this32.auth.hideLoader();

                _this32.editIncomeDetails = res;
                _this32.jsonFlag.created_by = res.created_by;

                _this32.checkpermissinForEditIncome();

                _this32.paymentDetails.payerName = _this32.editIncomeDetails.party_id;
                _this32.paymentDetails.accountName = _this32.editIncomeDetails.account_id;
                _this32.paymentDetails.receivedDate = _this32.editIncomeDetails.payment_date;
                _this32.paymentDetails.paymentmode = _this32.editIncomeDetails.paying_mode;
                _this32.totalAmount = _this32.editIncomeDetails.amount;

                for (var index = 0; index < _this32.editIncomeDetails.itemList.length; index++) {
                  var obj = {
                    itemName: _this32.editIncomeDetails.itemList[index].item_account,
                    description: _this32.editIncomeDetails.itemList[index].item_desc,
                    quantity: _this32.editIncomeDetails.itemList[index].item_quantity,
                    amount: _this32.editIncomeDetails.itemList[index].item_amount,
                    id: _this32.editIncomeDetails.itemList[index].item_id,
                    category_id: _this32.editIncomeDetails.itemList[index].category_id,
                    item_id: _this32.editIncomeDetails.itemList[index].item_id,
                    remarks: _this32.editIncomeDetails.itemList[index].remarks,
                    cheque_number: _this32.editIncomeDetails.itemList[index].cheque_number,
                    transaction_id: _this32.editIncomeDetails.itemList[index].transaction_id,
                    payment_mode: _this32.editIncomeDetails.itemList[index].payment_mode
                  };

                  _this32.addedItemList.push(obj);
                }

                if (!!_this32.editIncomeDetails.attachmentList) {
                  for (var _index3 = 0; _index3 < _this32.editIncomeDetails.attachmentList.length; _index3++) {
                    var _obj2 = {
                      fileName: _this32.editIncomeDetails.attachmentList[_index3].file_name + "." + _this32.editIncomeDetails.attachmentList[_index3].file_extn,
                      file_desc: _this32.editIncomeDetails.attachmentList[_index3].file_desc,
                      file_id: _this32.editIncomeDetails.attachmentList[_index3].file_id,
                      file: _this32.editIncomeDetails.attachmentList[_index3].file,
                      file_path: _this32.editIncomeDetails.attachmentList[_index3].file_path
                    };

                    _this32.docsList.push(_obj2);
                  }
                }
              }, function (err) {
                _this32.auth.hideLoader();

                _this32.msgService.showErrorMessage('error', '', err);
              });
            }
          }, {
            key: "checkPaymentModeVal",
            value: function checkPaymentModeVal() {
              if (this.paymentDetails.paymentmode == '0') {
                return true;
              } else if (this.paymentDetails.paymentmode == '2') {
                return true;
              } // else if (this.paymentDetails.paymentmode == '3' && this.paymentDetails.transacId.trim() != '') {
              //   return true;
              // } 
              // else if (this.paymentDetails.paymentmode == '1' && this.paymentDetails.ChequeNumber.trim() != '') {
              //   return true;
              // }

            }
          }, {
            key: "addItem",
            value: function addItem() {
              if (this.accountDetails.itemName != -1) {
                if (this.accountDetails.amount != 0) {
                  if (this.paymentDetails.accountName != '-1') {
                    // if (this.paymentDetails.paymentmode != "-1") {
                    // if (this.checkPaymentModeVal()) {
                    var obj = {
                      itemName: this.categoryName,
                      description: this.accountDetails.description,
                      quantity: this.accountDetails.quantity,
                      amount: this.accountDetails.amount,
                      item_id: 0,
                      category_id: this.accountDetails.itemName,
                      remarks: this.accountDetails.remarks,
                      payment_mode: this.paymentDetails.paymentmode,
                      transaction_id: this.paymentDetails.transacId,
                      cheque_number: this.paymentDetails.ChequeNumber
                    };
                    this.totalAmount = this.totalAmount + Number(obj.amount);
                    this.addedItemList.push(obj);
                    this.accountDetails.itemName = -1;
                    this.accountDetails.description = '';
                    this.accountDetails.quantity = 1;
                    this.accountDetails.amount = 0;
                    this.accountDetails.remarks = '';
                    this.paymentDetails.paymentmode = '-1';
                    this.paymentDetails.transacId = '';
                    this.paymentDetails.ChequeNumber = '';
                  } //   else {
                  //     let msg = (this.paymentDetails.paymentmode == '1') ? 'Enter Cheque Number' : 'Enter Transaction Id';
                  //     this.msgService.showErrorMessage('error', '', msg);
                  //   }
                  // }
                  //   else {
                  //     this.msgService.showErrorMessage('error', '', 'Please select Payment Mode');
                  //   }
                  // }
                  else {
                      this.msgService.showErrorMessage('error', '', 'Please select Account Name');
                    }
                } else {
                  this.msgService.showErrorMessage('error', '', "Enter Item Amount");
                }
              } else {
                this.msgService.showErrorMessage('error', '', "Select Item Name");
              }

              console.log(this.addedItemList);
            }
          }, {
            key: "uploadHandler",
            value: function uploadHandler() {
              var _this33 = this;

              var fileTypes = ['jpg', 'jpeg', 'png', 'docs', 'pdf', 'doc', 'svg', 'txt']; //acceptable file types

              var preview = document.getElementById('uploadFileControl').files[0];

              if (preview != null || preview != undefined) {
                var extension = preview.name.split('.').pop().toLowerCase(),
                    //file extension from input file
                isSuccess = fileTypes.indexOf(extension) > -1; //is extension in acceptable types

                if (isSuccess) {
                  var myReader = new FileReader();
                  var temp = {};
                  myReader.readAsDataURL(preview);

                  myReader.onloadend = function () {
                    temp = {
                      // "title": this.category_id,
                      "fileName": preview.name,
                      "file_desc": _this33.docDescription,
                      "encodedFile": myReader.result.split(',')[1],
                      "file_extn": extension,
                      "file_id": 0
                    };

                    _this33.docsList.push(temp);

                    _this33.docDescription = "";

                    _this33.msgService.showErrorMessage('success', '', "File uploaded successfully");

                    document.getElementById('uploadFileControl').value = null;
                  };
                } else {
                  this.msgService.showErrorMessage('error', '', "Please check file type.");
                }
              } else {
                this.msgService.showErrorMessage('error', '', "No file selected");
              }
            }
          }, {
            key: "addIncome",
            value: function addIncome() {
              if (this.paymentDetails.payerName != '-1') {
                // if (this.paymentDetails.accountName != '-1') {
                if (this.addedItemList.length > 0) {
                  var itemlist = [];

                  for (var index = 0; index < this.addedItemList.length; index++) {
                    var item = {
                      "category_id": this.addedItemList[index].category_id,
                      //  "item_desc": this.addedItemList[index].description,
                      "item_quantity": this.addedItemList[index].quantity,
                      "item_amount": this.addedItemList[index].amount,
                      "item_id": this.addedItemList[index].item_id,
                      "remarks": this.addedItemList[index].remarks,
                      "payment_mode": this.addedItemList[index].payment_mode,
                      "transaction_id": this.addedItemList[index].transaction_id,
                      "cheque_number": this.addedItemList[index].cheque_number
                    };
                    itemlist.push(item);
                  }

                  var attachList = [];

                  for (var _index4 = 0; _index4 < this.docsList.length; _index4++) {
                    var file = {
                      file_id: this.docsList[_index4].file_id,
                      file: this.docsList[_index4].encodedFile,
                      file_extn: this.docsList[_index4].file_extn,
                      file_desc: this.docsList[_index4].file_desc,
                      file_name: this.docsList[_index4].fileName
                    };
                    attachList.push(file);
                  }

                  var obj = {
                    party_id: this.paymentDetails.payerName,
                    account_id: this.paymentDetails.accountName,
                    payment_date: moment__WEBPACK_IMPORTED_MODULE_1__(this.paymentDetails.receivedDate).format('YYYY-MM-DD'),
                    paying_mode: this.paymentDetails.paymentmode,
                    itemList: itemlist,
                    attachmentList: attachList,
                    amount: this.totalAmount
                  };
                  console.log(obj);

                  if (this.sectionName == 'Edit') {
                    this.updateIncome(obj);
                  } else {
                    this.addNewIncome(obj);
                  }
                } else {
                  this.msgService.showErrorMessage('error', '', 'Please specify at least one item of income!');
                }
              } //   else {
              //     this.msgService.showErrorMessage('error', '', 'Please select Account Name');
              //   }
              // }
              else {
                  this.msgService.showErrorMessage('error', '', 'Please select Payer Name');
                }
            }
          }, {
            key: "addNewIncome",
            value: function addNewIncome(obj) {
              var _this34 = this;

              this.auth.showLoader();
              var url = "/api/v1/income/".concat(this.jsonFlag.institute_id);
              this.httpService.postData(url, obj).subscribe(function (res) {
                _this34.auth.hideLoader();

                _this34.msgService.showErrorMessage('success', '', "Income added successfully");

                _this34.router.navigate(['/view/expense/manage-income']);
              }, function (err) {
                _this34.auth.hideLoader();

                _this34.msgService.showErrorMessage(_this34.msgService.toastTypes.error, '', err.error.message);
              });
            }
          }, {
            key: "updateIncome",
            value: function updateIncome(obj) {
              var _this35 = this;

              this.auth.showLoader();
              var url = "/api/v1/income/".concat(this.jsonFlag.institute_id, "/").concat(this.editIncomeId);
              this.httpService.putData(url, obj).subscribe(function (res) {
                _this35.auth.hideLoader();

                _this35.msgService.showErrorMessage('success', '', "Income updated successfully");

                _this35.router.navigate(['/view/expense/manage-income']);
              }, function (err) {
                _this35.auth.hideLoader();

                _this35.msgService.showErrorMessage(_this35.msgService.toastTypes.error, '', err.error.message);
              });
            }
          }, {
            key: "removeItem",
            value: function removeItem(itemName) {
              if (this.jsonFlag.isAuthoriseUser) {
                for (var index = 0; index < this.addedItemList.length; index++) {
                  if (this.addedItemList[index].itemName == itemName) {
                    this.totalAmount = this.totalAmount - Number(this.addedItemList[index].amount);
                    this.addedItemList.splice(index, 1);
                    break;
                  }
                }
              }
            }
          }, {
            key: "removeDoc",
            value: function removeDoc(fileName) {
              for (var index = 0; index < this.docsList.length; index++) {
                if (this.docsList[index].fileName == fileName) {
                  this.docsList.splice(index, 1);
                  break;
                }
              }
            }
          }, {
            key: "checkFututreDate",
            value: function checkFututreDate() {
              var today = moment__WEBPACK_IMPORTED_MODULE_1__(new Date());
              var selectedDate = moment__WEBPACK_IMPORTED_MODULE_1__(this.paymentDetails.receivedDate);
              var diff = moment__WEBPACK_IMPORTED_MODULE_1__(selectedDate.diff(today))['_i'];

              if (diff > 0) {
                this.msgService.showErrorMessage('info', '', "Future date is not allowed");
                this.paymentDetails.receivedDate = moment__WEBPACK_IMPORTED_MODULE_1__(new Date()).format('YYYY-MM-DD');
              }
            }
          }, {
            key: "togglePayer",
            value: function togglePayer() {
              if (this.payerVisibilty) {
                this.payerVisibilty = false;
                this.getPayerList();
              } else {
                this.payerVisibilty = true;
              }
            }
          }, {
            key: "toggleAccount",
            value: function toggleAccount() {
              if (this.accountVisibilty) {
                this.accountVisibilty = false;
                this.getAccountDetails();
              } else {
                this.accountVisibilty = true;
              }
            }
          }, {
            key: "setDescription",
            value: function setDescription(obj) {
              var _this36 = this;

              if (this.categoryList && this.categoryList.length) {
                var categoryObj = this.categoryList.filter(function (category) {
                  if (category.category_id == _this36.accountDetails.itemName) {
                    _this36.categoryName = category.category_name;
                    _this36.accountDetails.description = category.category_desc;
                  }
                });
              }
            }
          }, {
            key: "setAccountIfscIncome",
            value: function setAccountIfscIncome(obj) {
              var _this37 = this;

              if (this.accountNamelist && this.accountNamelist.length) {
                var accuntIfscObj = this.accountNamelist.filter(function (nameSet) {
                  if (nameSet.account_id == obj) {
                    _this37.paymentDetails.paymentmode = nameSet.payment_mode;
                    _this37.paymentDetails.paymentValue = nameSet.type_value;
                    _this37.paymentDetails.accountNumber = nameSet.account_number;
                    _this37.paymentDetails.IfscCode = nameSet.ifsc_code; // if( this.addedItemList.length < 1 ){
                    //   this.msgService.showErrorMessage('error', '', 'Please delete existing entries for changing account');
                    // }
                  }
                });
              }
            }
          }, {
            key: "toggleCategory",
            value: function toggleCategory() {
              if (this.categoryVisibility) {
                this.categoryVisibility = false;
                this.getCategoryDetails();
              } else {
                sessionStorage.setItem('expense_category_type', '3');
                this.categoryVisibility = true;
              }
            }
          }]);

          return AddEditIncomeComponent;
        }();

        AddEditIncomeComponent.ctorParameters = function () {
          return [{
            type: _services_message_show_service__WEBPACK_IMPORTED_MODULE_2__["MessageShowService"]
          }, {
            type: _services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }, {
            type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticatorService"]
          }];
        };

        AddEditIncomeComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
          selector: 'app-add-edit-income',
          template: __importDefault(__webpack_require__(
          /*! raw-loader!./add-edit-income.component.html */
          "./node_modules/raw-loader/dist/cjs.js!./src/app/components/expense-management/manage-income/add-edit-income/add-edit-income.component.html"))["default"],
          styles: [__importDefault(__webpack_require__(
          /*! ./add-edit-income.component.scss */
          "./src/app/components/expense-management/manage-income/add-edit-income/add-edit-income.component.scss"))["default"]]
        }), __metadata("design:paramtypes", [_services_message_show_service__WEBPACK_IMPORTED_MODULE_2__["MessageShowService"], _services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_authenticator_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticatorService"]])], AddEditIncomeComponent);
        return AddEditIncomeComponent;
      }();
      /***/

    },

    /***/
    "./src/app/components/expense-management/manage-income/manage-income.component.scss":
    /*!******************************************************************************************!*\
      !*** ./src/app/components/expense-management/manage-income/manage-income.component.scss ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsExpenseManagementManageIncomeManageIncomeComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".middle-section {\n  padding: 1%;\n}\n\n.filter-search-data-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.filter-search-data-container .filter-container {\n  display: flex;\n  flex-direction: row;\n  width: 50%;\n}\n\n.filter-search-data-container .filter-container .filter-item {\n  width: 35%;\n}\n\n.filter-search-data-container .search-data-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  width: 50%;\n}\n\n.filter-search-data-container .search-data-container .activity-item {\n  margin-top: 10px;\n}\n\n.filter-search-data-container .search-data-container .search-box {\n  border-radius: 4px;\n  border: 1px solid #b4b6bd;\n  width: 100%;\n  line-height: 30px;\n  padding: 0 10px;\n  font-size: 12px;\n}\n\n.filter-search-data-container .search-data-container .add-income-btn {\n  background: #0084f6;\n  color: white;\n  padding: 6px 10px;\n  border: 2px solid #0084f6;\n  box-shadow: none;\n  border-radius: 4px;\n  margin-top: 10px;\n  margin-left: 15px;\n}\n\n.field-wrapper .form-ctrl {\n  border-radius: 4px;\n  border-color: #ccc;\n}\n\n.list-table-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n\n.list-table-container .list-header-container {\n  border: 1px solid #ccc;\n  display: flex;\n  flex-direction: row;\n  background: #e0eaec;\n  font-weight: 600;\n  text-align: left;\n}\n\n.list-table-container .list-header-item {\n  padding: 10px;\n}\n\n.list-table-container .list-value-outer-container {\n  display: flex;\n  flex-direction: column;\n  border: 1px solid #ccc;\n  border-top: none;\n  min-height: 58vh;\n  max-height: 58vh;\n  overflow-y: auto;\n}\n\n.list-table-container .list-value-outer-container .list-value-container {\n  display: flex;\n  flex-direction: row;\n  text-align: left;\n  border-bottom: 1px solid #ccc;\n}\n\n.list-table-container .list-value-outer-container .list-value-container .list-value-item {\n  padding: 10px;\n}\n\n.list-table-container .list-value-outer-container .list-value-container:last-child {\n  border-bottom: none;\n}\n\n.list-table-container .small-item {\n  width: 15%;\n}\n\n.list-table-container .medium-item {\n  width: 20%;\n}\n\n.list-table-container .align-center {\n  text-align: center;\n}\n\n.list-table-container .align-right {\n  text-align: right;\n}\n\n.list-table-container .no-records {\n  display: block;\n  text-align: center;\n  padding: 10px;\n  font-size: 14px;\n  font-weight: 600;\n}\n\n.list-table-container .fa-pencil {\n  color: #0084f6;\n  cursor: pointer;\n}\n\n.excel-container {\n  display: flex;\n  justify-content: flex-end;\n  padding: 10px;\n}\n\n.excel-container .excel {\n  font-size: 20px;\n  color: green;\n  cursor: pointer;\n}\n\n.field-wrapper.datePickerBox:after {\n  content: '';\n  background: url(/./assets/images/calendar.svg) no-repeat;\n  position: absolute;\n  right: 5px;\n  top: 30px;\n  width: 21px;\n  height: 21px;\n  z-index: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9leHBlbnNlLW1hbmFnZW1lbnQvbWFuYWdlLWluY29tZS9tYW5hZ2UtaW5jb21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiOztBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7QUFFaEM7O0FBTEE7RUFLSSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFVBQVU7QUFJZDs7QUFYQTtFQVNNLFVBQVU7QUFNaEI7O0FBZkE7RUFhSSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixVQUFVO0FBTWQ7O0FBdEJBO0VBa0JNLGdCQUFnQjtBQVF0Qjs7QUExQkE7RUFxQk0sa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixlQUFlO0FBU3JCOztBQW5DQTtFQTZCTSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBVXZCOztBQU5BO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQVNwQjs7QUFQQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsV0FBVztBQVViOztBQWJBO0VBS0ksc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFZcEI7O0FBdEJBO0VBYUksYUFBYTtBQWFqQjs7QUExQkE7RUFnQkksYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBY3BCOztBQXBDQTtFQXdCTSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQiw2QkFBNkI7QUFnQm5DOztBQTNDQTtFQTZCUSxhQUFhO0FBa0JyQjs7QUEvQ0E7RUFpQ00sbUJBQW1CO0FBa0J6Qjs7QUFuREE7RUFxQ0ksVUFBVTtBQWtCZDs7QUF2REE7RUF3Q0ksVUFBVTtBQW1CZDs7QUEzREE7RUEyQ0ksa0JBQWtCO0FBb0J0Qjs7QUEvREE7RUE4Q0ksaUJBQWlCO0FBcUJyQjs7QUFuRUE7RUFpREksY0FBYztFQUNkLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsZUFBZTtFQUNmLGdCQUFnQjtBQXNCcEI7O0FBM0VBO0VBd0RJLGNBQWM7RUFDZCxlQUFlO0FBdUJuQjs7QUFqQkE7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGFBQWE7QUFvQmY7O0FBdkJBO0VBS0ksZUFBZTtFQUNmLFlBQVk7RUFDWixlQUFlO0FBc0JuQjs7QUFqQkE7RUFDRSxXQUFXO0VBQ1gsd0RBQXdEO0VBQ3hELGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsU0FBUztFQUNULFdBQVc7RUFDWCxZQUFZO0VBQ1osVUFBVTtBQW9CWiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXhwZW5zZS1tYW5hZ2VtZW50L21hbmFnZS1pbmNvbWUvbWFuYWdlLWluY29tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5taWRkbGUtc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDElO1xufVxuLmZpbHRlci1zZWFyY2gtZGF0YS1jb250YWluZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgLmZpbHRlci1jb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIHdpZHRoOiA1MCU7XG4gICAgLmZpbHRlci1pdGVte1xuICAgICAgd2lkdGg6IDM1JTtcbiAgICB9XG4gIH1cbiAgLnNlYXJjaC1kYXRhLWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICB3aWR0aDogNTAlO1xuICAgIC5hY3Rpdml0eS1pdGVte1xuICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB9XG4gICAgLnNlYXJjaC1ib3h7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjYjRiNmJkO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG4gICAgLmFkZC1pbmNvbWUtYnRue1xuICAgICAgYmFja2dyb3VuZDogIzAwODRmNjtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIHBhZGRpbmc6IDZweCAxMHB4O1xuICAgICAgYm9yZGVyOiAycHggc29saWQgIzAwODRmNjtcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgfVxuICB9XG59XG4uZmllbGQtd3JhcHBlciAuZm9ybS1jdHJse1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlci1jb2xvcjogI2NjYztcbn1cbi5saXN0LXRhYmxlLWNvbnRhaW5lcntcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG4gIC5saXN0LWhlYWRlci1jb250YWluZXJ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYmFja2dyb3VuZDogI2UwZWFlYztcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cbiAgLmxpc3QtaGVhZGVyLWl0ZW17XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxuICAubGlzdC12YWx1ZS1vdXRlci1jb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICBtaW4taGVpZ2h0OiA1OHZoO1xuICAgIG1heC1oZWlnaHQ6IDU4dmg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAubGlzdC12YWx1ZS1jb250YWluZXJ7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgICAgIC5saXN0LXZhbHVlLWl0ZW17XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICB9XG4gICAgfVxuICAgIC5saXN0LXZhbHVlLWNvbnRhaW5lcjpsYXN0LWNoaWxke1xuICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICB9XG4gIH1cbiAgLnNtYWxsLWl0ZW17XG4gICAgd2lkdGg6IDE1JTtcbiAgfVxuICAubWVkaXVtLWl0ZW17XG4gICAgd2lkdGg6IDIwJTtcbiAgfVxuICAuYWxpZ24tY2VudGVye1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuYWxpZ24tcmlnaHR7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIH1cbiAgLm5vLXJlY29yZHN7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIH1cbiAgLmZhLXBlbmNpbHtcbiAgICBjb2xvcjogIzAwODRmNjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxufVxuXG5cbi5leGNlbC1jb250YWluZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIC5leGNlbHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3I6IGdyZWVuO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufVxuXG5cbi5maWVsZC13cmFwcGVyLmRhdGVQaWNrZXJCb3g6YWZ0ZXIge1xuICBjb250ZW50OiAnJztcbiAgYmFja2dyb3VuZDogdXJsKC8uL2Fzc2V0cy9pbWFnZXMvY2FsZW5kYXIuc3ZnKSBuby1yZXBlYXQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDVweDtcbiAgdG9wOiAzMHB4O1xuICB3aWR0aDogMjFweDtcbiAgaGVpZ2h0OiAyMXB4O1xuICB6LWluZGV4OiAwO1xufVxuXG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/components/expense-management/manage-income/manage-income.component.ts":
    /*!****************************************************************************************!*\
      !*** ./src/app/components/expense-management/manage-income/manage-income.component.ts ***!
      \****************************************************************************************/

    /*! exports provided: ManageIncomeComponent */

    /***/
    function srcAppComponentsExpenseManagementManageIncomeManageIncomeComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ManageIncomeComponent", function () {
        return ManageIncomeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! moment */
      "./node_modules/moment/moment.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _services_message_show_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../services/message-show.service */
      "./src/app/services/message-show.service.ts");
      /* harmony import */


      var _services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../services/http.service */
      "./src/app/services/http.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../services/authenticator.service */
      "./src/app/services/authenticator.service.ts");
      /* harmony import */


      var _services_excel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../services/excel.service */
      "./src/app/services/excel.service.ts");

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

      var ManageIncomeComponent =
      /** @class */
      function () {
        var ManageIncomeComponent = /*#__PURE__*/function () {
          function ManageIncomeComponent(msgService, httpService, router, auth, excelService) {
            _classCallCheck(this, ManageIncomeComponent);

            this.msgService = msgService;
            this.httpService = httpService;
            this.router = router;
            this.auth = auth;
            this.excelService = excelService; // global variables

            this.jsonFlag = {
              isProfessional: false,
              institute_id: '',
              toggle: false
            };
            this.incomeFilter = {
              dateFilter: "month"
            };
            this.incomeRecordList = [];
            this.tempIncomelist = [];
            this.jsonFlag.institute_id = sessionStorage.getItem('institution_id');
          }

          _createClass(ManageIncomeComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.getIncomeRecords();
            }
          }, {
            key: "getIncomeRecords",
            value: function getIncomeRecords() {
              var obj = {
                type: "0",
                institute_id: this.jsonFlag.institute_id
              };

              if (this.incomeFilter.dateFilter == "date") {
                obj.type = "1", obj["startdate"] = "";
                obj["enddate"] = "";
              }

              if (this.incomeFilter.dateFilter != "range") {
                this.getIncomeList(obj);
              } else {
                this.dateFilterRange = "";
              }
            }
          }, {
            key: "getIncomeList",
            value: function getIncomeList(obj) {
              var _this38 = this;

              var url = "/api/v1/income/all/".concat(this.jsonFlag.institute_id);
              this.auth.showLoader();
              this.httpService.postData(url, obj).subscribe(function (res) {
                _this38.auth.hideLoader();

                _this38.incomeRecordList = res;
                _this38.tempIncomelist = res;
              }, function (err) {
                _this38.auth.hideLoader();

                _this38.msgService.showErrorMessage(_this38.msgService.toastTypes.error, '', err);
              });
            }
          }, {
            key: "searchDatabase",
            value: function searchDatabase() {
              var _this39 = this;

              this.incomeRecordList = this.tempIncomelist;

              if (this.incomeSearchInput == undefined || this.incomeSearchInput == null) {
                this.incomeSearchInput = "";
              } else {
                var searchData = this.tempIncomelist.filter(function (item) {
                  return Object.keys(item).some(function (k) {
                    return item[k] != null && item[k].toString().toLowerCase().includes(_this39.incomeSearchInput.toLowerCase());
                  });
                });
                this.incomeRecordList = searchData;
              }
            }
          }, {
            key: "dateRangeChange",
            value: function dateRangeChange(e) {
              this.startDate = moment__WEBPACK_IMPORTED_MODULE_1__(e[0]).format("YYYY-MM-DD");
              this.endDate = moment__WEBPACK_IMPORTED_MODULE_1__(e[1]).format("YYYY-MM-DD");
              var obj = {
                type: "2",
                institute_id: this.jsonFlag.institute_id,
                startdate: this.startDate,
                enddate: this.endDate
              };
              this.getIncomeList(obj);
            }
          }, {
            key: "editIncome",
            value: function editIncome(id) {
              this.router.navigate(['/view/expense/edit-income/' + id]);
            }
          }, {
            key: "exportToExcel",
            value: function exportToExcel(event) {
              var temp = [];
              temp = this.tempIncomelist.map(function (e) {
                var obj = {
                  Payment_Date: e.payment_date,
                  Reference_No: e.reference_no,
                  Payer: e.party_name,
                  Category: e.category,
                  Category_Description: e.category_description,
                  Total: e.amount,
                  Remarks: e.remarks
                };
                return obj;
              });
              this.excelService.exportAsExcelFile(temp, 'Income_report');
            }
          }]);

          return ManageIncomeComponent;
        }();

        ManageIncomeComponent.ctorParameters = function () {
          return [{
            type: _services_message_show_service__WEBPACK_IMPORTED_MODULE_2__["MessageShowService"]
          }, {
            type: _services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }, {
            type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticatorService"]
          }, {
            type: _services_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExcelService"]
          }];
        };

        ManageIncomeComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
          selector: 'app-manage-income',
          template: __importDefault(__webpack_require__(
          /*! raw-loader!./manage-income.component.html */
          "./node_modules/raw-loader/dist/cjs.js!./src/app/components/expense-management/manage-income/manage-income.component.html"))["default"],
          styles: [__importDefault(__webpack_require__(
          /*! ./manage-income.component.scss */
          "./src/app/components/expense-management/manage-income/manage-income.component.scss"))["default"]]
        }), __metadata("design:paramtypes", [_services_message_show_service__WEBPACK_IMPORTED_MODULE_2__["MessageShowService"], _services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_authenticator_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticatorService"], _services_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExcelService"]])], ManageIncomeComponent);
        return ManageIncomeComponent;
      }();
      /***/

    },

    /***/
    "./src/app/components/expense-management/reports/reports.component.scss":
    /*!******************************************************************************!*\
      !*** ./src/app/components/expense-management/reports/reports.component.scss ***!
      \******************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsExpenseManagementReportsReportsComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".middle-section {\n  padding: 1%;\n}\n\n.filter-search-data-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.filter-search-data-container .filter-container {\n  display: flex;\n  flex-direction: row;\n  width: 50%;\n}\n\n.filter-search-data-container .filter-container .filter-item {\n  width: 35%;\n}\n\n.filter-search-data-container .net-worth-container {\n  display: flex;\n  flex-direction: row;\n  width: 50%;\n  justify-content: flex-end;\n  padding-top: 30px;\n  font-weight: 600;\n}\n\n.filter-search-data-container .net-worth-container .heading {\n  margin-right: 10px;\n}\n\n.outer-container {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  justify-content: space-between;\n  margin-top: 15px;\n}\n\n.outer-container .section-container {\n  display: flex;\n  flex-direction: column;\n  border: 1px solid #ccc;\n  width: 49%;\n  position: relative;\n}\n\n.outer-container .section-container .title-container {\n  width: 100%;\n  background: #e0eaec;\n  text-align: center;\n  font-size: 14px;\n  font-weight: 600;\n  padding: 10px;\n}\n\n.outer-container .section-container .section-table-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n\n.outer-container .section-container .section-table-container .table-header-container {\n  border: 1px solid #ccc;\n  display: flex;\n  flex-direction: row;\n  font-weight: 600;\n  text-align: left;\n}\n\n.outer-container .section-container .section-table-container .table-header-container .header-item {\n  padding: 7px;\n  width: 33%;\n}\n\n.outer-container .section-container .section-table-container .table-value-outer-container {\n  display: flex;\n  flex-direction: column;\n  border: 1px solid #ccc;\n  border-top: none;\n  min-height: 58vh;\n  max-height: 58vh;\n  overflow-y: auto;\n}\n\n.outer-container .section-container .section-table-container .table-value-outer-container .table-value-container {\n  display: flex;\n  flex-direction: row;\n  text-align: left;\n  border-bottom: 1px solid #ccc;\n}\n\n.outer-container .section-container .section-table-container .table-value-outer-container .table-value-container .value-item {\n  padding: 7px;\n  width: 33%;\n}\n\n.outer-container .section-container .align-right {\n  text-align: right;\n}\n\n.outer-container .section-container .align-center {\n  text-align: center;\n}\n\n.section-total-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  position: absolute;\n  bottom: 0px;\n  justify-content: flex-end;\n}\n\n.section-total-container .section-total-item {\n  display: flex;\n  flex-direction: row;\n  background: #e0eaec;\n  padding: 7px;\n  justify-content: flex-end;\n  font-weight: 600;\n  border-bottom: 1px solid #ccc;\n}\n\n.section-total-container .section-total-item .total-header {\n  margin-right: 10px;\n}\n\n.qInfoIcon {\n  width: 20px;\n  margin-left: 5px;\n  height: 20px;\n  border: 1px solid #0084f6;\n  border-radius: 50%;\n  display: block;\n  text-align: center;\n  box-sizing: border-box;\n  line-height: 20px;\n  font-weight: 600;\n  font-size: 12px;\n  cursor: pointer;\n  box-shadow: 0px 0px 1px 0px #ccc inset;\n  color: #888;\n  transition: all 0.2s linear;\n}\n\n.qInfoIcon:hover {\n  border-color: #0084f6;\n  box-shadow: 0px 0px 1px 0px #0084f6 inset;\n  color: #0084f6;\n}\n\n.tooltip-box-field {\n  width: 150px;\n  white-space: nowrap;\n  min-height: 41px;\n  line-height: 18px;\n  padding: 5px 5px;\n  overflow: visible;\n  color: black;\n  font-weight: bold;\n}\n\n.tooltip-box-field.lg {\n  width: 200px;\n  white-space: nowrap;\n  min-height: 50px;\n  line-height: 20px;\n  padding: 5px 5px;\n}\n\n.tooltip-box-field.sm {\n  width: 100px;\n  white-space: nowrap;\n  min-height: 40px;\n  padding: 5px 5px;\n}\n\n.field-wrapper.datePickerBox:after {\n  content: '';\n  background: url(/./assets/images/calendar.svg) no-repeat;\n  position: absolute;\n  right: 5px;\n  top: 30px;\n  width: 21px;\n  height: 21px;\n  z-index: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9leHBlbnNlLW1hbmFnZW1lbnQvcmVwb3J0cy9yZXBvcnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiOztBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7QUFFaEM7O0FBTEE7RUFLSSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFVBQVU7QUFJZDs7QUFYQTtFQVNNLFVBQVU7QUFNaEI7O0FBZkE7RUFhSSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQU1wQjs7QUF4QkE7RUFvQk0sa0JBQWtCO0FBUXhCOztBQUZBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsOEJBQThCO0VBQzlCLGdCQUFnQjtBQUtsQjs7QUFWQTtFQU9JLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixrQkFBa0I7QUFPdEI7O0FBbEJBO0VBYU0sV0FBVztFQUNYLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixhQUFhO0FBU25COztBQTNCQTtFQXFCTSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7QUFVakI7O0FBakNBO0VBeUJRLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFZeEI7O0FBekNBO0VBK0JVLFlBQVk7RUFDWixVQUFVO0FBY3BCOztBQTlDQTtFQW9DUSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFjeEI7O0FBeERBO0VBNENVLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLDZCQUE2QjtBQWdCdkM7O0FBL0RBO0VBaURZLFlBQVk7RUFDWixVQUFVO0FBa0J0Qjs7QUFwRUE7RUF3RE0saUJBQWlCO0FBZ0J2Qjs7QUF4RUE7RUEyRE0sa0JBQWtCO0FBaUJ4Qjs7QUFaQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gseUJBQXlCO0FBZTNCOztBQXJCQTtFQVFJLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLDZCQUE2QjtBQWlCakM7O0FBL0JBO0VBZ0JNLGtCQUFrQjtBQW1CeEI7O0FBYkE7RUFDSSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGVBQWU7RUFDZixzQ0FBc0M7RUFDdEMsV0FBVztFQUNYLDJCQUEyQjtBQWdCL0I7O0FBL0JBO0VBaUJRLHFCQUFxQjtFQUNyQix5Q0FBeUM7RUFDekMsY0FBYztBQWtCdEI7O0FBZEE7RUFDSSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osaUJBQWlCO0FBaUJyQjs7QUF6QkE7RUFVUSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBbUJ4Qjs7QUFqQ0E7RUFpQlEsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBb0J4Qjs7QUFkQTtFQUNFLFdBQVc7RUFDWCx3REFBd0Q7RUFDeEQsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVk7RUFDWixVQUFVO0FBaUJaIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9leHBlbnNlLW1hbmFnZW1lbnQvcmVwb3J0cy9yZXBvcnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1pZGRsZS1zZWN0aW9uIHtcbiAgcGFkZGluZzogMSU7XG59XG4uZmlsdGVyLXNlYXJjaC1kYXRhLWNvbnRhaW5lcntcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAuZmlsdGVyLWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgd2lkdGg6IDUwJTtcbiAgICAuZmlsdGVyLWl0ZW17XG4gICAgICB3aWR0aDogMzUlO1xuICAgIH1cbiAgfVxuICAubmV0LXdvcnRoLWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgLmhlYWRpbmd7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgfVxuICB9XG5cbn1cblxuLm91dGVyLWNvbnRhaW5lcntcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgd2lkdGg6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgLnNlY3Rpb24tY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIHdpZHRoOiA0OSU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC50aXRsZS1jb250YWluZXJ7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGJhY2tncm91bmQ6ICNlMGVhZWM7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICB9XG4gICAgLnNlY3Rpb24tdGFibGUtY29udGFpbmVye1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIC50YWJsZS1oZWFkZXItY29udGFpbmVye1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAuaGVhZGVyLWl0ZW17XG4gICAgICAgICAgcGFkZGluZzogN3B4O1xuICAgICAgICAgIHdpZHRoOiAzMyU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC50YWJsZS12YWx1ZS1vdXRlci1jb250YWluZXJ7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDU4dmg7XG4gICAgICAgIG1heC1oZWlnaHQ6IDU4dmg7XG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICAgIC50YWJsZS12YWx1ZS1jb250YWluZXJ7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgICAgLnZhbHVlLWl0ZW17XG4gICAgICAgICAgICBwYWRkaW5nOiA3cHg7XG4gICAgICAgICAgICB3aWR0aDogMzMlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAuYWxpZ24tcmlnaHR7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICB9XG4gICAgLmFsaWduLWNlbnRlcntcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gIH1cbn1cblxuLnNlY3Rpb24tdG90YWwtY29udGFpbmVye1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDBweDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgLnNlY3Rpb24tdG90YWwtaXRlbXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYmFja2dyb3VuZDogI2UwZWFlYztcbiAgICBwYWRkaW5nOiA3cHg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICAgIC50b3RhbC1oZWFkZXJ7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgfVxuICB9XG59XG5cblxuLnFJbmZvSWNvbiB7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwODRmNjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDBweCAjY2NjIGluc2V0O1xuICAgIGNvbG9yOiAjODg4O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcbiAgICAmOmhvdmVyIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDA4NGY2O1xuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAwcHggIzAwODRmNiBpbnNldDtcbiAgICAgICAgY29sb3I6ICMwMDg0ZjY7XG4gICAgfVxufVxuXG4udG9vbHRpcC1ib3gtZmllbGQge1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG1pbi1oZWlnaHQ6IDQxcHg7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgcGFkZGluZzogNXB4IDVweDtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgJi5sZyB7XG4gICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgbWluLWhlaWdodDogNTBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIHBhZGRpbmc6IDVweCA1cHg7XG4gICAgfVxuICAgICYuc20ge1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDQwcHg7XG4gICAgICAgIHBhZGRpbmc6IDVweCA1cHg7XG4gICAgfVxufVxuXG5cblxuLmZpZWxkLXdyYXBwZXIuZGF0ZVBpY2tlckJveDphZnRlciB7XG4gIGNvbnRlbnQ6ICcnO1xuICBiYWNrZ3JvdW5kOiB1cmwoLy4vYXNzZXRzL2ltYWdlcy9jYWxlbmRhci5zdmcpIG5vLXJlcGVhdDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNXB4O1xuICB0b3A6IDMwcHg7XG4gIHdpZHRoOiAyMXB4O1xuICBoZWlnaHQ6IDIxcHg7XG4gIHotaW5kZXg6IDA7XG59XG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/components/expense-management/reports/reports.component.ts":
    /*!****************************************************************************!*\
      !*** ./src/app/components/expense-management/reports/reports.component.ts ***!
      \****************************************************************************/

    /*! exports provided: ReportsComponent */

    /***/
    function srcAppComponentsExpenseManagementReportsReportsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReportsComponent", function () {
        return ReportsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! moment */
      "./node_modules/moment/moment.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _services_message_show_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../services/message-show.service */
      "./src/app/services/message-show.service.ts");
      /* harmony import */


      var _services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../services/http.service */
      "./src/app/services/http.service.ts");
      /* harmony import */


      var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../services/authenticator.service */
      "./src/app/services/authenticator.service.ts");
      /* harmony import */


      var _services_excel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../services/excel.service */
      "./src/app/services/excel.service.ts");

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

      var ReportsComponent =
      /** @class */
      function () {
        var ReportsComponent = /*#__PURE__*/function () {
          function ReportsComponent(msgService, httpService, auth, _excelService) {
            _classCallCheck(this, ReportsComponent);

            this.msgService = msgService;
            this.httpService = httpService;
            this.auth = auth;
            this._excelService = _excelService; // global variables

            this.jsonFlag = {
              isProfessional: false,
              institute_id: '',
              toggle: false
            };
            this.recordFilter = {
              dateFilter: "month"
            };
            this.expenseRecordList = [];
            this.incomeRecordList = [];
            this.profitLostList = [];
            this.feeCollectionList = [];
            this.jsonFlag.institute_id = sessionStorage.getItem('institution_id');
          }

          _createClass(ReportsComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.getAllRecords();
            }
          }, {
            key: "getAllRecords",
            value: function getAllRecords() {
              var obj = {
                type: "0",
                institute_id: this.jsonFlag.institute_id
              };

              if (this.recordFilter.dateFilter == "date") {
                obj.type = "1", obj["startdate"] = "";
                obj["enddate"] = "";
              }

              if (this.recordFilter.dateFilter != "range") {
                this.getExpenseList(obj);
              } else {
                this.dateFilterRange = "";
              }
            }
          }, {
            key: "getExpenseList",
            value: function getExpenseList(obj) {
              var _this40 = this;

              this.expenseTotal = 0;
              var url = "/api/v1/expense/all/".concat(this.jsonFlag.institute_id);
              this.auth.showLoader();
              this.httpService.postData(url, obj).subscribe(function (res) {
                _this40.auth.hideLoader();

                _this40.expenseRecordList = res;

                if (_this40.expenseRecordList.length > 0) {
                  for (var index = 0; index < _this40.expenseRecordList.length; index++) {
                    _this40.expenseTotal = Number(_this40.expenseTotal) + Number(_this40.expenseRecordList[index].amount);
                  }
                }

                _this40.getIncomeList(obj);
              }, function (err) {
                _this40.auth.hideLoader();

                _this40.msgService.showErrorMessage(_this40.msgService.toastTypes.error, '', err);
              });
            }
          }, {
            key: "getIncomeList",
            value: function getIncomeList(obj) {
              var _this41 = this;

              this.incomeTotal = 0;
              var url = "/api/v1/income/all/".concat(this.jsonFlag.institute_id);
              this.auth.showLoader();
              this.httpService.postData(url, obj).subscribe(function (res) {
                _this41.auth.hideLoader();

                _this41.incomeRecordList = res;

                if (_this41.incomeRecordList.length > 0) {
                  for (var index = 0; index < _this41.incomeRecordList.length; index++) {
                    _this41.incomeTotal = Number(_this41.incomeTotal) + Number(_this41.incomeRecordList[index].amount);
                  }
                }

                _this41.getProfitLossList(obj);
              }, function (err) {
                _this41.auth.hideLoader();

                _this41.msgService.showErrorMessage(_this41.msgService.toastTypes.error, '', err);
              });
            }
          }, {
            key: "getProfitLossList",
            value: function getProfitLossList(obj) {
              var _this42 = this;

              var url = "/api/v1/inventory/item/getProfit_Lost/".concat(this.jsonFlag.institute_id);
              this.auth.showLoader();
              this.httpService.postData(url, obj).subscribe(function (res) {
                _this42.auth.hideLoader();

                _this42.profitLostList = res;
                _this42.expenseInventoryTotal = res.expense_inventory;
                _this42.expenseTotal = Number(_this42.expenseTotal) + Number(_this42.expenseInventoryTotal);

                _this42.getFeeCollection(obj);
              }, function (err) {
                _this42.auth.hideLoader();

                _this42.msgService.showErrorMessage(_this42.msgService.toastTypes.error, '', err);
              });
            }
          }, {
            key: "getFeeCollection",
            value: function getFeeCollection(obj) {
              var _this43 = this;

              var url = "/api/v1/income/feesCollection/".concat(this.jsonFlag.institute_id);
              this.auth.showLoader();
              this.httpService.postData(url, obj).subscribe(function (res) {
                _this43.auth.hideLoader();

                _this43.feeCollectionList = res;
                _this43.totalFeeCollection = res.total_fees_collected;
                _this43.totalOtherFeeCollection = res.total_fees_collected_other; // this.totalSalesRevenue = Number(this.incomeTotal) + Number(this.totalFeeCollection) + Number(this.totalOtherFeeCollection);

                _this43.totalSalesRevenue = Number(_this43.incomeTotal) + Number(_this43.totalFeeCollection);

                var tempSalesRevenue = _this43.totalSalesRevenue.toFixed(2);

                _this43.totalSalesRevenue = Number(tempSalesRevenue);
                _this43.netIncome = Number(_this43.totalSalesRevenue) - Number(_this43.expenseTotal);

                var tempNetWorth = _this43.netIncome.toFixed(2);

                _this43.netIncome = Number(tempNetWorth);
              }, function (err) {
                _this43.auth.hideLoader();

                _this43.msgService.showErrorMessage(_this43.msgService.toastTypes.error, '', err);
              });
            }
          }, {
            key: "dateRangeChange",
            value: function dateRangeChange(e) {
              this.startDate = moment__WEBPACK_IMPORTED_MODULE_1__(e[0]).format("YYYY-MM-DD");
              this.endDate = moment__WEBPACK_IMPORTED_MODULE_1__(e[1]).format("YYYY-MM-DD");
              var obj = {
                type: "2",
                institute_id: this.jsonFlag.institute_id,
                startdate: this.startDate,
                enddate: this.endDate
              };
              this.getExpenseList(obj);
            }
          }, {
            key: "exportToExcel",
            value: function exportToExcel() {
              var exportedArray = [];
              this.expenseRecordList.map(function (data) {
                var obj = {};
                obj["Received Date"] = data.payment_date;
                obj["Payee"] = data.party_name;
                obj["Item/Category"] = data.category;
                obj["Category_Description"] = data.category_description, obj["Amount(Rs)"] = data.amount;
                obj["Remarks"] = data.remarks;
                exportedArray.push(obj);
              });

              this._excelService.exportAsExcelFile(exportedArray, 'Expense Details Report');
            }
          }, {
            key: "exportToExcel1",
            value: function exportToExcel1() {
              var exportedArray = [];
              this.incomeRecordList.map(function (data) {
                var obj = {};
                obj["Received Date"] = data.payment_date;
                obj["Payer"] = data.party_name;
                obj["Item/Category"] = data.category;
                obj["Category_Description"] = data.category_description, obj["Amount(Rs)"] = data.amount;
                obj["Remarks"] = data.remarks;
                exportedArray.push(obj);
              });

              this._excelService.exportAsExcelFile(exportedArray, 'Income Details Report');
            }
          }]);

          return ReportsComponent;
        }();

        ReportsComponent.ctorParameters = function () {
          return [{
            type: _services_message_show_service__WEBPACK_IMPORTED_MODULE_2__["MessageShowService"]
          }, {
            type: _services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]
          }, {
            type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticatorService"]
          }, {
            type: _services_excel_service__WEBPACK_IMPORTED_MODULE_5__["ExcelService"]
          }];
        };

        ReportsComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
          selector: 'app-reports',
          template: __importDefault(__webpack_require__(
          /*! raw-loader!./reports.component.html */
          "./node_modules/raw-loader/dist/cjs.js!./src/app/components/expense-management/reports/reports.component.html"))["default"],
          styles: [__importDefault(__webpack_require__(
          /*! ./reports.component.scss */
          "./src/app/components/expense-management/reports/reports.component.scss"))["default"]]
        }), __metadata("design:paramtypes", [_services_message_show_service__WEBPACK_IMPORTED_MODULE_2__["MessageShowService"], _services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"], _services_authenticator_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticatorService"], _services_excel_service__WEBPACK_IMPORTED_MODULE_5__["ExcelService"]])], ReportsComponent);
        return ReportsComponent;
      }();
      /***/

    }
  }]);
})();
//# sourceMappingURL=app-components-expense-management-expense-management-module-es5.js.map