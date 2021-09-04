(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-components-institute-details-institute-details-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/institute-details/institute-details.component.html":
    /*!*********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/institute-details/institute-details.component.html ***!
      \*********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsInstituteDetailsInstituteDetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"clearFix middle-one\" style=\"width: 96%;\">\n\n  <section id=\"divGeneral\" class=\"setting-visible\">\n    <h2 class=\"heading-setting-main\">General</h2>\n\n    <div class=\"general-setting\">\n      <div class=\"row\">\n        <div class=\"c-lg-10 c-sm-10 c-md-10\">\n          <h3 class=\"heading-setting\">Basic Information</h3>\n        </div>\n        <div class=\"c-lg-2 c-sm-2 c-md-2\">\n          <a (click)=\"toggleUpAndDownButton('0')\">\n            <i *ngIf='!dividersObj[0]' id=\"showAddBtn\" class=\"fa fa-angle-up\"\n              style=\"border:none;margin-top: 15px;font-weight: bold;\"></i>\n            <i *ngIf='dividersObj[0]' id=\"showCloseBtn\" style=\"border:none;margin-top: 15px;font-weight: bold;\"\n              class=\"fa fa-angle-down\"></i>\n          </a>\n        </div>\n      </div>\n      <div [hidden]='!dividersObj[0]' class=\"show-left\">\n        <div class=\"row\">\n          <div class=\"c-sm-3 c-md-3 c-lg-3 main-setting\">\n            <label for=\"ch3\">Institute Name\n              <span class=\"text-danger\">*</span>\n            </label>\n          </div>\n          <div class=\"c-sm-6 c-md-6 c-lg-6\">\n            <div class=\"field-wrapper\" [ngClass]=\"{'has-value':instDetails.institute_name != ''}\">\n              <input type=\"text\" disabled class=\"form-ctrl newDisabled\" name=\"slotNew\" id=\"ch3\"\n                [(ngModel)]=\"instDetails.institute_name\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"c-sm-3 c-md-3 c-lg-3 main-setting\">\n            <label for=\"ch4\">Institute Contact\n              <span class=\"text-danger\">*</span>\n            </label>\n          </div>\n          <div class=\"c-sm-6 c-md-6 c-lg-6\">\n            <div class=\"field-wrapper\" [ngClass]=\"{'has-value':instDetails.institute_primary_phone != ''}\">\n              <input type=\"text\" disabled class=\"form-ctrl newDisabled\" name=\"slotNew\"\n                [(ngModel)]=\"instDetails.institute_primary_phone\" id=\"ch4\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"c-sm-3 c-md-3 c-lg-3 main-setting\">\n            <label for=\"ch4\">Alternate Institute Contact(comma separated)\n            </label>\n          </div>\n          <div class=\"c-sm-6 c-md-6 c-lg-6\">\n            <div class=\"field-wrapper\"\n              [ngClass]=\"{'has-value':instDetails.alternate_institute_primary_contact_numbers != ''}\">\n              <input type=\"text\" class=\"form-ctrl newDisabled\" name=\"slotNew\"\n                [(ngModel)]=\"instDetails.alternate_institute_primary_contact_numbers\" id=\"ch4\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"c-sm-3 c-md-3 c-lg-3 main-setting\">\n            <label for=\"ch5\">Institute Address\n              <span class=\"text-danger\">*</span>\n            </label>\n          </div>\n          <div class=\"c-sm-6 c-md-6 c-lg-6\">\n            <div class=\"field-wrapper\" [ngClass]=\"{'has-value':instDetails.institute_primary_addr != ''}\">\n              <input type=\"text\" disabled class=\"form-ctrl newDisabled\" name=\"slotNew\"\n                [(ngModel)]=\"instDetails.institute_primary_addr\" id=\"ch5\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"c-sm-3 c-md-3 c-lg-3 main-setting\">\n            <label for=\"ch6\">Email ID\n              <span class=\"text-danger\">*</span>\n            </label>\n          </div>\n          <div class=\"c-sm-6 c-md-6 c-lg-6\">\n            <div class=\"field-wrapper\" [ngClass]=\"{'has-value':instDetails.institute_primary_email != ''}\">\n              <input type=\"text\" id=\"ch6\" class=\"form-ctrl newDisabled\" name=\"slotNew\" disabled\n                [(ngModel)]=\"instDetails.institute_primary_email\">\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"c-lg-10 c-sm-10 c-md-10\">\n          <h3 class=\"heading-setting\">Owner Details</h3>\n        </div>\n        <div class=\"c-lg-2 c-sm-2 c-md-2\">\n          <a (click)=\"toggleUpAndDownButton('1')\">\n            <i *ngIf='!dividersObj[1]' id=\"showAddBtn\" class=\"fa fa-angle-up\"\n              style=\"border:none;margin-top: 15px;font-weight: bold;\"></i>\n            <i *ngIf='dividersObj[1]' id=\"showCloseBtn\" style=\"border:none;margin-top: 15px;font-weight: bold;\"\n              class=\"fa fa-angle-down\"></i>\n          </a>\n        </div>\n      </div>\n      <div [hidden]='!dividersObj[1]' class=\"show-left\">\n        <div class=\"row\">\n          <div class=\"c-sm-3 c-md-3 c-lg-3 main-setting\">\n            <label for=\"ch7\">Owner Name(s)\n            </label>\n          </div>\n          <div class=\"c-sm-6 c-md-6 c-lg-6\">\n            <div class=\"field-wrapper\" [ngClass]=\"{'has-value':instDetails.owner_name != ''}\">\n              <input type=\"text\" id=\"ch7\" disabled class=\"form-ctrl newDisabled\" name=\"slotNew\"\n                [(ngModel)]=\"instDetails.owner_name\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"c-sm-3 c-md-3 c-lg-3 main-setting\">\n            <label for=\"ch8\">\n              Owner Contact No(s)\n            </label>\n          </div>\n          <div class=\"c-sm-6 c-md-6 c-lg-6\">\n            <div class=\"field-wrapper\" [ngClass]=\"{'has-value':instDetails.owner_primary_phone != ''}\">\n              <input type=\"text\" disabled class=\"form-ctrl newDisabled\" name=\"slotNew\"\n                [(ngModel)]=\"instDetails.owner_primary_phone\" id=\"ch8\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"c-sm-3 c-md-3 c-lg-3 main-setting\">\n            <label for=\"ch9\">Owner Primary Email ID\n            </label>\n          </div>\n          <div class=\"c-sm-6 c-md-6 c-lg-6\">\n            <div class=\"field-wrapper\" [ngClass]=\"{'has-value':instDetails.owner_primary_email != ''}\">\n              <input type=\"text\" disabled class=\"form-ctrl newDisabled\" name=\"slotNew\"\n                [(ngModel)]=\"instDetails.owner_primary_email\" id=\"ch9\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"c-sm-3 c-md-3 c-lg-3 main-setting\">\n            <label for=\"ch10\">Owner Secondary Email ID\n            </label>\n          </div>\n          <div class=\"c-sm-6 c-md-6 c-lg-6\">\n            <div class=\"field-wrapper\" [ngClass]=\"{'has-value':instDetails.owner_secondary_email != ''}\">\n              <input type=\"text\" disabled class=\"form-ctrl newDisabled\" name=\"slotNew\"\n                [(ngModel)]=\"instDetails.owner_secondary_email\" id=\"ch10\">\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"c-lg-10 c-md-10 c-sm-10\">\n          <h3 class=\"heading-setting\">Admin Details</h3>\n        </div>\n        <div class=\"c-lg-2 c-sm-2 c-md-2\">\n          <a (click)=\"toggleUpAndDownButton('2')\">\n            <i id=\"showAddBtn\" *ngIf='!dividersObj[2]' class=\"fa fa-angle-up\"\n              style=\"border:none;margin-top: 15px;font-weight: bold;\"></i>\n            <i id=\"showCloseBtn\" *ngIf='dividersObj[2]' style=\"border:none;margin-top: 15px;font-weight: bold;\"\n              class=\"fa fa-angle-down\"></i>\n          </a>\n        </div>\n      </div>\n      <div [hidden]='!dividersObj[2]' class=\"show-left\">\n        <div class=\"row\">\n          <div class=\"c-sm-3 c-md-3 c-lg-3 main-setting\">\n            <label for=\"ch11\">Admin Name\n            </label>\n          </div>\n          <div class=\"c-sm-6 c-md-6 c-lg-6\">\n            <div class=\"field-wrapper\" [ngClass]=\"{'has-value':instDetails.admin_name != ''}\">\n              <input type=\"text\" class=\"form-ctrl newDisabled\" id=\"ch11\" name=\"slotNew\"\n                [(ngModel)]=\"instDetails.admin_name\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"c-sm-3 c-md-3 c-lg-3 main-setting\">\n            <label for=\"ch12\">Admin Contact No.\n            </label>\n          </div>\n          <div class=\"c-sm-6 c-md-6 c-lg-6\">\n            <div class=\"field-wrapper\" [ngClass]=\"{'has-value':instDetails.admin_primary_phone != ''}\">\n              <input type=\"text\" maxlength=\"10\" id=\"ch12\" class=\"form-ctrl newDisabled\" name=\"slotNew\"\n                [(ngModel)]=\"instDetails.admin_primary_phone\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"c-sm-3 c-md-3 c-lg-3 main-setting\">\n            <label for=\"ch13\">Admin Email ID</label>\n          </div>\n          <div class=\"c-sm-6 c-md-6 c-lg-6\">\n            <div class=\"field-wrapper\" [ngClass]=\"{'has-value':instDetails.admin_primary_email != ''}\">\n              <input type=\"text\" id=\"ch11\" class=\"form-ctrl newDisabled\" name=\"slotNew\"\n                [(ngModel)]=\"instDetails.admin_primary_email\">\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"c-lg-10 c-sm-10 c-md-10\">\n          <h3 class=\"heading-setting\">Additional Details</h3>\n        </div>\n        <div class=\"c-lg-2 c-sm-2 c-md-2\">\n          <a (click)=\"toggleUpAndDownButton('3')\">\n            <i *ngIf='!dividersObj[3]' id=\"showAddBtn\" class=\"fa fa-angle-up\"\n              style=\"border:none;margin-top: 15px;font-weight: bold;\"></i>\n            <i *ngIf='dividersObj[3]' id=\"showCloseBtn\" style=\"border:none;margin-top: 15px;font-weight: bold;\"\n              class=\"fa fa-angle-down\"></i>\n          </a>\n        </div>\n      </div>\n      <div [hidden]='!dividersObj[3]' class=\"show-left\">\n        <div class=\"row\">\n          <div class=\"c-sm-3 c-md-3 c-lg-3 main-setting\">\n            <label for=\"hour\">KYC Document Type</label>\n          </div>\n          <div class=\"c-sm-6 c-md-6 c-lg-6\">\n            <div class=\"field-wrapper\" [ngClass]=\"{'has-value':instDetails.kyc_document_type != ''}\">\n              <select id=\"hour\" class=\"form-ctrl ng-valid ng-touched ng-dirty newDisabled\" name=\"hour\"\n                [(ngModel)]=\"instDetails.kyc_document_type\" (ngModelChange)=\"changeKYCInformation($event)\">\n                <option value=\"-1\">Select KYC Document Type</option>\n                <option *ngFor=\"let opt of kycType\" [value]=\"opt.data_key\">\n                  {{opt.data_value}}\n                </option>\n              </select>\n            </div>\n          </div>\n          <div class=\"c-sm-3 c-md-3 c-lg-3\" *ngIf=\"instDetails.kyc_document_type != '-1'\">\n            <div class=\"field-wrapper\">\n              <input type=\"file\" class=\"hide\" #idUploadDoc accept=\"image/gif,image/jpeg,image/jpg,image/png\">\n              <button class=\"btn\" (click)=\"uploadDocument()\">Upload Document</button>\n              <i class=\"fa fa-download hide\" *ngIf=\"instDetails.kyc_document_type!=''\"></i>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"c-sm-3 c-md-3 c-lg-3 main-setting\">\n            <label for=\"ch14\">FB Page Url\n            </label>\n          </div>\n          <div class=\"c-sm-6 c-md-6 c-lg-6\">\n            <div class=\"field-wrapper\" [ngClass]=\"{'has-value':instDetails.fb_page_url != ''}\">\n              <input type=\"text\" class=\"form-ctrl newDisabled\" name=\"slotNew\" [(ngModel)]=\"instDetails.fb_page_url\"\n                id=\"ch14\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"c-sm-3 c-md-3 c-lg-3 main-setting\">\n            <label for=\"ch15\">Website Url\n            </label>\n          </div>\n          <div class=\"c-sm-6 c-md-6 c-lg-6\">\n            <div class=\"field-wrapper\" [ngClass]=\"{'has-value':instDetails.website_url != ''}\">\n              <input type=\"text\" class=\"form-ctrl newDisabled\" name=\"slotNew\" [(ngModel)]=\"instDetails.website_url\"\n                id=\"ch15\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"c-sm-3 c-md-3 c-lg-3 main-setting\">\n            <label for=\"ch15\">Youtube Url\n            </label>\n          </div>\n          <div class=\"c-sm-6 c-md-6 c-lg-6\">\n            <div class=\"field-wrapper\" [ngClass]=\"{'has-value':instDetails.youtube_url != ''}\">\n              <input type=\"text\" class=\"form-ctrl newDisabled\" name=\"slotNew\" [(ngModel)]=\"instDetails.youtube_url\"\n                id=\"ch15\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"c-sm-3 c-md-3 c-lg-3 main-setting\">\n            <label for=\"ch15\">WhatsApp Url\n            </label>\n          </div>\n          <div class=\"c-sm-6 c-md-6 c-lg-6\">\n            <div class=\"field-wrapper\" [ngClass]=\"{'has-value':instDetails.whatsapp_url != ''}\">\n              <input type=\"text\" class=\"form-ctrl newDisabled\" name=\"slotNew\" [(ngModel)]=\"instDetails.whatsapp_url\"\n                id=\"ch15\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"c-sm-3 c-md-3 c-lg-3 main-setting\">\n            <label for=\"ch15\">Instagram Url\n            </label>\n          </div>\n          <div class=\"c-sm-6 c-md-6 c-lg-6\">\n            <div class=\"field-wrapper\" [ngClass]=\"{'has-value':instDetails.instagram_url != ''}\">\n              <input type=\"text\" class=\"form-ctrl newDisabled\" name=\"slotNew\" [(ngModel)]=\"instDetails.instagram_url\"\n                id=\"ch15\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"c-sm-3 c-md-3 c-lg-3 main-setting\">\n            <label for=\"ch15\">LinkedIn Url\n            </label>\n          </div>\n          <div class=\"c-sm-6 c-md-6 c-lg-6\">\n            <div class=\"field-wrapper\" [ngClass]=\"{'has-value':instDetails.linkedin_url != ''}\">\n              <input type=\"text\" class=\"form-ctrl newDisabled\" name=\"slotNew\" [(ngModel)]=\"instDetails.linkedin_url\"\n                id=\"ch15\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"c-sm-3 c-md-3 c-lg-3 main-setting\">\n            <label for=\"ch15\">Question & Doubt Url\n            </label>\n          </div>\n          <div class=\"c-sm-6 c-md-6 c-lg-6\">\n            <div class=\"field-wrapper\" [ngClass]=\"{'has-value':instDetails.qna_doubt_url != ''}\">\n              <input type=\"text\" class=\"form-ctrl newDisabled\" name=\"slotNew\" [(ngModel)]=\"instDetails.qna_doubt_url\"\n                id=\"ch15\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"c-sm-3 c-md-3 c-lg-3 main-setting\">\n            <label for=\"ch15\">Feedback Url\n            </label>\n          </div>\n          <div class=\"c-sm-6 c-md-6 c-lg-6\">\n            <div class=\"field-wrapper\" [ngClass]=\"{'has-value':instDetails.feedback_url != ''}\">\n              <input type=\"text\" class=\"form-ctrl newDisabled\" name=\"slotNew\" [(ngModel)]=\"instDetails.feedback_url\"\n                id=\"ch15\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"c-sm-3 c-md-3 c-lg-3 main-setting\">\n            <label for=\"ch15\">Help Url\n            </label>\n          </div>\n          <div class=\"c-sm-6 c-md-6 c-lg-6\">\n            <div class=\"field-wrapper\" [ngClass]=\"{'has-value':instDetails.help_url != ''}\">\n              <input type=\"text\" class=\"form-ctrl newDisabled\" name=\"slotNew\" [(ngModel)]=\"instDetails.help_url\"\n                id=\"ch15\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"c-sm-3 c-md-3 c-lg-3 main-setting\">\n            <label for=\"ch15\">Privacy Policy Url\n            </label>\n          </div>\n          <div class=\"c-sm-6 c-md-6 c-lg-6\">\n            <div class=\"field-wrapper\" [ngClass]=\"{'has-value':instDetails.privacy_policy_url != ''}\">\n              <input type=\"text\" class=\"form-ctrl newDisabled\" name=\"slotNew\"\n                [(ngModel)]=\"instDetails.privacy_policy_url\" id=\"ch15\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"c-sm-3 c-md-3 c-lg-3 main-setting\">\n            <label for=\"ch15\">Terms and Conditions Url\n            </label>\n          </div>\n          <div class=\"c-sm-6 c-md-6 c-lg-6\">\n            <div class=\"field-wrapper\" [ngClass]=\"{'has-value':instDetails.terms_and_condition_url != ''}\">\n              <input type=\"text\" class=\"form-ctrl newDisabled\" name=\"slotNew\"\n                [(ngModel)]=\"instDetails.terms_and_condition_url\" id=\"ch15\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"c-sm-3 c-md-3 c-lg-3 main-setting\">\n            <label for=\"ch15\">Form Url\n            </label>\n          </div>\n          <div class=\"c-sm-6 c-md-6 c-lg-6\">\n            <div class=\"field-wrapper\" [ngClass]=\"{'has-value':instDetails.form_url != ''}\">\n              <input type=\"text\" class=\"form-ctrl newDisabled\" name=\"slotNew\"\n                [(ngModel)]=\"instDetails.form_url\" id=\"ch15\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"c-sm-3 c-md-3 c-lg-3 main-setting\">\n            <label for=\"ch15\">Blog Url\n            </label>\n          </div>\n          <div class=\"c-sm-6 c-md-6 c-lg-6\">\n            <div class=\"field-wrapper\" [ngClass]=\"{'has-value':instDetails.blog_url != ''}\">\n              <input type=\"text\" class=\"form-ctrl newDisabled\" name=\"slotNew\"\n                [(ngModel)]=\"instDetails.blog_url\" id=\"ch15\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"c-sm-3 c-md-3 c-lg-3 main-setting\">\n            <label for=\"ch15\">Copyright Url\n            </label>\n          </div>\n          <div class=\"c-sm-6 c-md-6 c-lg-6\">\n            <div class=\"field-wrapper\" [ngClass]=\"{'has-value':instDetails.copyright_url != ''}\">\n              <input type=\"text\" class=\"form-ctrl newDisabled\" name=\"slotNew\"\n                [(ngModel)]=\"instDetails.copyright_url\" id=\"ch15\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"c-sm-3 c-md-3 c-lg-3 main-setting\">\n            <label for=\"ch15\">Twitter Url\n            </label>\n          </div>\n          <div class=\"c-sm-6 c-md-6 c-lg-6\">\n            <div class=\"field-wrapper\" [ngClass]=\"{'has-value':instDetails.twitter_url != ''}\">\n              <input type=\"text\" class=\"form-ctrl newDisabled\" name=\"slotNew\"\n                [(ngModel)]=\"instDetails.twitter_url\" id=\"ch15\">\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <h2 class=\"heading-setting-main\">Plan</h2>\n\n    <div class=\"general-setting\">\n      <div class=\"row\">\n        <div class=\"c-lg-8\">\n          <h3 class=\"heading-setting\">Current Plans</h3>\n        </div>\n        <div class=\"c-lg-2\">\n\n        </div>\n        <div class=\"c-lg-2\" style=\"padding-right: 5%;\">\n          <a class=\"pull-right\" style=\"cursor: pointer;padding-top: 15px;\" (click)=\"getPaymentDeatils()\">View\n            History</a>\n        </div>\n      </div>\n\n      <div class=\"table-scroll-wrapper show-left\">\n        <div class=\"table table-responsive\">\n          <table class=\"assign-width\">\n\n            <thead>\n              <tr>\n                <th>\n                  Plan Name\n                </th>\n                <th>\n                  Students Limit\n                </th>\n                <th>\n                  Expiry Date\n                </th>\n                <th>\n                  No. of SMS\n                </th>\n                <th>\n                  Download Limit(GB)\n                </th>\n                <th>\n                  Price\n                </th>\n                <th>\n                  Tax(%)\n                </th>\n                <th>\n                  Total Price (Rs.)\n                </th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr id=\"rowPlan{{i}}\" *ngFor=\"let row of planDetail; let i = index; trackBy: i;\">\n                <td>\n                  {{row.plan_name}}\n                </td>\n                <td>\n                  {{row.student_limit}}\n                </td>\n                <td>\n                  {{row.expiry_months}}\n                </td>\n                <td>\n                  {{row.sms_allocation}}\n                </td>\n                <td>\n                  {{row.download_limit}}\n                </td>\n                <td>\n                  {{row.subscription_price}}\n                </td>\n                <td>\n                  {{row.tax}}\n                </td>\n                <td>\n                  {{row.total_price}}\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"c-lg-10\">\n          <h3 class=\"heading-setting\">Additional Plans</h3>\n        </div>\n      </div>\n\n      <div class=\"table-scroll-wrapper show-left\">\n        <div class=\"table table-responsive\">\n          <table class=\"assign-width\">\n            <thead>\n              <tr>\n                <th>\n                  Option Name\n                </th>\n                <th>\n                  Price(1st Time in Rs)\n                </th>\n                <th>\n                  Price (2nd Time Onwards in Rs)\n                </th>\n                <th>\n                  Tax\n                </th>\n                <th>\n                  Total Price (Rs.)\n                </th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr id=\"rowPlan{{i}}\" *ngFor=\"let row of instituteOptions; let i = index; trackBy: i;\">\n                <td>\n                  {{row.option_name}}\n                </td>\n                <td>\n                  {{row.subscription_price}}\n                </td>\n                <td>\n                  {{row.renewal_price}}\n                </td>\n                <td>\n                  {{row.tax}}\n                </td>\n                <td>\n                  {{row.total_price}}\n                </td>\n              </tr>\n              <tr *ngIf=\"instituteOptions.length == 0\">\n                <td colspan=\"5\">\n                  No Option Available\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n\n      <div class=\"row show-left\">\n        <div class=\"c-sm-3 c-md-3 c-lg-3 main-setting \">\n          <label for=\"ch16\">Total Price (Rs.)\n          </label>\n        </div>\n        <div class=\"c-sm-6 c-md-6 c-lg-6\">\n          <div class=\"field-wrapper\"\n            [ngClass]=\"{'has-value':instDetails.total_price_based_on_chosen_plan_and_option >= '0'}\">\n            <input type=\"text\" class=\"form-ctrl newDisabled\" name=\"slotNew\"\n              [(ngModel)]=\"instDetails.total_price_based_on_chosen_plan_and_option\" id=\"ch16\" disabled>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <h2 class=\"heading-setting-main\">General Settings</h2>\n\n    <div class=\"general-setting\">\n      <div class=\"row\">\n        <div class=\"c-lg-10\">\n          <h3 class=\"heading-setting\">Basic Information</h3>\n        </div>\n      </div>\n      <div class=\"show-left\">\n        <div class=\"row\">\n          <div class=\"c-sm-3 c-md-3 c-lg-3 main-setting\">\n            <label for=\"ch17\">Institute code\n              <span class=\"text-danger\">*</span>\n            </label>\n          </div>\n          <div class=\"c-sm-6 c-md-6 c-lg-6\">\n            <div class=\"field-wrapper\" [ngClass]=\"{'has-value':instDetails.institute_name != ''}\">\n              <input type=\"text\" disabled class=\"form-ctrl newDisabled\" name=\"slotNew\" id=\"ch17\"\n                [(ngModel)]=\"instDetails.institute_name\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"c-sm-3 c-md-3 c-lg-3 main-setting\">\n            <label for=\"ch18\">Generate student id manually\n            </label>\n          </div>\n          <div class=\"c-sm-6 c-md-6 c-lg-6\">\n            <label class=\"switch switch-n\">\n              <input type=\"checkbox\" [checked]=\"!(this.instDetails.is_student_displayId_manual == 0)\"\n                (click)=\"checkInputType($event)\" name=\"sFilter\" class=\"form-radio\" value=\"Automatic\" id=\"idAutomatic\">\n              <span class=\"slider round\"></span>\n            </label>\n          </div>\n        </div>\n        <div class=\"row\" *ngIf=\"(showPrefix == true)\">\n          <div class=\"c-sm-3 c-md-3 c-lg-3 main-setting\">\n            <label for=\"ch20\">Student Id Prefix\n            </label>\n          </div>\n          <div class=\"c-sm-6 c-md-6 c-lg-6\">\n            <div class=\"field-wrapper\" [ngClass]=\"{'has-value':instDetails.student_id_prefix != ''}\">\n              <input type=\"text\" class=\"form-ctrl newDisabled\" name=\"slotNew\"\n                [(ngModel)]=\"instDetails.student_id_prefix\" id=\"ch20\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"c-sm-3 c-md-3 c-lg-3 main-setting\">\n            <label for=\"ch21\">Tag Line\n            </label>\n          </div>\n          <div class=\"c-sm-6 c-md-6 c-lg-6\">\n            <div class=\"field-wrapper\" [ngClass]=\"{'has-value':instDetails.tag_line != ''}\">\n              <input type=\"text\" class=\"form-ctrl newDisabled\" name=\"slotNew\" [(ngModel)]=\"instDetails.tag_line\"\n                id=\"ch21\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"c-sm-3 c-md-3 c-lg-3 main-setting\">\n            <label for=\"logo_url\">Fee Logo URL\n            </label>\n          </div>\n          <div class=\"c-sm-5 c-md-5 c-lg-5\">\n            <div class=\"field-wrapper\" [ngClass]=\"{'has-value':instDetails.logo_url != ''}\">\n              <input type=\"text\" [disabled]=\"instDetails.institute_logo!='' && instDetails.institute_logo!=null\"\n                style=\"width: 91%;\" class=\"form-ctrl newDisabled\" name=\"slotNew\" [(ngModel)]=\"instDetails.logo_url\"\n                id=\"logo_url\">\n            </div>\n          </div>\n          \n          <div class=\"c-md-1\" *ngIf=\"instDetails.logo_url!=''\"\n            style=\"padding: 0;width: 4%;margin-top: 1%;margin-right: 5px;\">\n            <img src=\"{{instDetails.logo_url}}\">\n          </div>\n          <div class=\"c-md-1\" style=\"padding: 0;width: 2%;margin-top: 1%;\">OR</div>\n          <div class=\"c-sm-2 c-md-2 c-lg-2\">\n            <div class=\"field-wrapper\" [ngClass]=\"{'has-value':instDetails.institute_logo != ''}\">\n              <input type=\"file\" style=\"width: 100%;\"\n                [disabled]=\"instDetails.logo_url!='' && instDetails.logo_url!=null\"\n                accept=\"image/gif,image/jpeg,image/jpg,image/png\" class=\"form-ctrl newDisabled\" (change)=\"file($event)\"\n                name=\"slotNew\" [(ngModel)]=\"instDetails.institute_logo\" id=\"institute_logo\">\n            </div>\n            <span style=\"font-size: 12px;\">(Size 300X200)</span>\n          </div>\n          <div class=\"c-md-1 clearFile\" (click)=\"clearFile()\">X</div>\n        </div>\n        <div class=\"row\">\n          <div class=\"c-sm-3 c-md-3 c-lg-3 main-setting\">\n            <label for=\"ch18\">Single Device Login\n              <div class=\"questionInfo inline-relative\">\n                <span class=\"qInfoIcon i-class\">i</span>\n                <div class=\"tooltip-box-field\">\n                  This setting allows Students\n                  <br>to login only from one device\n                  <br>at a time. Please confirm with\n                  <br>Proctur Team before you Enable\n                  <br>this setting, as this may\n                  <br>require App to be Updated\n                </div>\n              </div>\n            </label>\n          </div>\n          <div class=\"c-sm-1 c-md-1 c-lg-1\">\n            <label class=\"switch switch-n\">\n              <input type=\"checkbox\" [checked]=\"(instDetails.single_device_login)\" (click)=\"checkSingleDevice($event)\"\n                [(ngModel)]=\"singleDevice\" name=\"sFilter\" class=\"form-radio\" value=\"singleDeviceLogin\"\n                id=\"singleDeviceLogin\">\n              <span class=\"slider round\"></span>\n            </label>\n          </div>\n          <div class=\"c-sm-3 c-md-3 c-lg-3 main-setting\" *ngIf=\"singleDevice\">\n            <input type=\"checkbox\" style=\"-webkit-appearance: checkbox;\" [checked]=\"(instDetails.distinct_device_login)\"\n              [(ngModel)]=\"instDetails.distinct_device_login\" name=\"sFilter\" class=\"form-radio\"\n              value=\"distinct_device_login\" id=\"distinct_device_login\">\n            <label for=\"distinct_device_login\">SSO (restriction on multiple devices)\n            </label>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <h2 class=\"heading-setting-main\">SMS Settings</h2>\n\n    <div class=\"general-setting show-left\">\n\n      <!-- <div class=\"row\">\n        <div class=\"c-sm-3 c-md-3 c-lg-3 main-setting\">\n          <label for=\"ch90\">SMS sender id\n            <span class=\"text-danger\">*</span>\n          </label>\n        </div>\n        <div class=\"c-sm-6 c-md-6 c-lg-6\">\n          <div class=\"field-wrapper\">\n            <input type=\"text\" class=\"form-ctrl\" name=\"slotNew\" [(ngModel)]=\"instDetails.sms_shortcode\" id=\"ch90\">\n          </div>\n        </div>\n\n      </div> -->\n      <div class=\"row\">\n        <div class=\"row\">\n          <div class=\"c-lg-8 c-sm-8 c-md-8\">\n            <h3 class=\"heading-setting\">Transactional SMS</h3>\n          </div>\n          <div class=\"c-lg-4 c-sm-4 c-md-4\" style=\"padding-right: 5%;\">\n            <a class=\"pull-right\" style=\"cursor: pointer;padding-top: 15px;\" (click)=\"smsAllocationHistoryDeatils()\">SMS\n              Allocation History\n            </a>\n          </div>\n        </div>\n\n        <div class=\"table table-responsive show-left\">\n          <table class=\"assign-width\">\n            <thead>\n              <tr>\n                <th>\n                  Allocated Quota\n                </th>\n                <th>\n                  Used Quota\n                </th>\n                <th>\n                  Available Quota\n                </th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td>\n                  {{instDetails.institute_sms_quota}}\n                </td>\n                <td>\n                  {{instDetails.institute_sms_quota_used}}\n                </td>\n                <td>\n                  {{instDetails.institute_sms_quota_available}}\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"row\">\n          <div class=\"c-lg-10\">\n            <h3 class=\"heading-setting\">Promotional SMS</h3>\n          </div>\n        </div>\n        <div class=\"table table-responsive show-left\">\n          <table class=\"assign-width\">\n            <thead>\n              <tr>\n                <th>\n                  Allocated Quota\n                </th>\n                <th>\n                  Used Quota\n                </th>\n                <th>\n                  Available Quota\n                </th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td>\n                  {{instDetails.institute_campaign_sms_quota}}\n                </td>\n                <td>\n                  {{instDetails.institute_campaign_sms_quota_used}}\n                </td>\n                <td>\n                  {{instDetails.institute_campaign_sms_quota_available}}\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n\n    <h2 class=\"heading-setting-main\">Email Settings</h2>\n\n    <div class=\"general-setting show-left\">\n      <div class=\"row\">\n        <div class=\"c-sm-3 c-md-3 c-lg-3 main-setting\">\n          <label for=\"ch28\">Accounts Email sender id\n          </label>\n        </div>\n        <div class=\"c-sm-6 c-md-6 c-lg-6\">\n          <div class=\"field-wrapper\" [ngClass]=\"{'has-value':instDetails.email_sender_id != ''}\">\n            <input type=\"text\" class=\"form-ctrl newDisabled\" id=\"ch28\" name=\"slotNew\"\n              [(ngModel)]=\"instDetails.email_sender_id\" style=\"float: left;\">\n            <div class=\"questionInfo inline-relative\" style=\"margin-top: 5px;\">\n              <span class=\"qInfoIcon i-class\" style=\"border-color: #0084f6;color: #0084f6;\">?</span>\n              <div class=\"tooltip-box-field\">\n                For sending emails take approval <br>\n                from AWS server for which you <br>\n                have to contact with support team <br>\n                or drop a mail.\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"c-sm-3 c-md-3 c-lg-3 main-setting\">\n          <label for=\"notification_email_sender_id\">Notification Email sender id\n          </label>\n        </div>\n        <div class=\"c-sm-6 c-md-6 c-lg-6\">\n          <div class=\"field-wrapper\" [ngClass]=\"{'has-value':instDetails.notification_email_sender_id != ''}\">\n            <input type=\"text\" class=\"form-ctrl newDisabled\" id=\"notification_email_sender_id\" name=\"slotNew\"\n              [(ngModel)]=\"instDetails.notification_email_sender_id\">\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <h2 class=\"heading-setting-main\">FEE</h2>\n\n    <div class=\"general-setting show-left\">\n      <div class=\"row\">\n        <div class=\"c-sm-3 c-md-3 c-lg-3 main-setting\">\n          <label for=\"ch29\">GSTIN\n          </label>\n        </div>\n        <div class=\"c-sm-6 c-md-6 c-lg-6\">\n          <div class=\"field-wrapper\" [ngClass]=\"{'has-value':instDetails.gst_in != null }\">\n            <input type=\"text\" id=\"ch29\" class=\"form-ctrl newDisabled\" name=\"slotNew\" [(ngModel)]=\"instDetails.gst_in\">\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <h2 class=\"heading-setting-main\">Storage</h2>\n\n    <div class=\"general-setting show-left\">\n      <div class=\"row\" *ngIf=\"(storageInfo != '')\">\n        <div class=\"c-sm-3 c-md-3 c-lg-3 main-setting\">\n          <label for=\"ch30\">Total Storage\n          </label>\n\n        </div>\n        <div class=\"c-sm-6 c-md-6 c-lg-6\">\n          <div class=\"field-wrapper\" [ngClass]=\"{'has-value': (storageInfo.limit_allocated != '') }\">\n            <input type=\"text\" disabled id=\"ch30\" class=\"form-ctrl newDisabled\" name=\"slotNew\"\n              [(ngModel)]=\"storageInfo.storage_allocated\">\n          </div>\n        </div>\n        <div class=\"c-lg-3 c-md-3 c-sm-3\" style=\"padding: 2%;\">\n          <a style=\"cursor: pointer;padding-top: 15px;\" (click)=\"downLoadLimitAllocationHistory()\">Download Limit\n            Allocation History</a>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"c-sm-3 c-md-3 c-lg-3 main-setting\">\n          <label for=\"ch31\">Used\n          </label>\n        </div>\n        <div class=\"c-sm-6 c-md-6 c-lg-6\">\n          <div class=\"field-wrapper\" [ngClass]=\"{'has-value':instDetails.sms_shortcode != ''}\">\n            <input type=\"text\" id=\"ch31\" disabled class=\"form-ctrl newDisabled\" name=\"slotNew\"\n              [(ngModel)]=\"storageInfo.limit_allocated\">\n          </div>\n        </div>\n\n      </div>\n    </div>\n\n    <h2 class=\"heading-setting-main\">Mobile app details</h2>\n\n    <div class=\"general-setting show-left\">\n      <div class=\"row\">\n        <div class=\"c-sm-3 c-md-3 c-lg-3 main-setting\">\n          <label for=\"logo_url\">App Home Page URL\n          </label>\n        </div>\n        <div class=\"c-sm-5 c-md-5 c-lg-5\">\n          <div class=\"field-wrapper\" [ngClass]=\"{'has-value':instDetails.announcement_image_url != ''}\">\n            <input type=\"file\" style=\"width: 91%;\" accept=\"image/gif,image/jpeg,image/jpg,image/png\"\n              class=\"form-ctrl newDisabled\" (change)=\"uploadFile($event)\" name=\"slotNew\"\n              [(ngModel)]=\"announcement_image_url\" id=\"announcementImageURL\">\n          </div>\n          <span style=\"font-size: 12px;\">(Size 300X200)</span>\n        </div>\n        <div class=\"c-md-1 clearFile\" (click)=\"clearAnnouncementFile()\">X</div>\n        <div class=\"c-md-1 announcementImg\"\n          *ngIf=\"instDetails.announcement_image_url!='' && instDetails.announcement_image_status!=3\">\n          <img src=\"{{new_announcement_image_url}}\">\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"c-sm-3 c-md-3 c-lg-3 main-setting\">\n          <label for=\"ch32\">Announcement\n          </label>\n        </div>\n        <div class=\"c-sm-6 c-md-6 c-lg-6\" style=\"margin-top: 10px;width: 39%;\">\n          <span> <span style=\"font-weight: 600;\"> Note - </span> Don’t use ‘#' anywhere in the announcement. If on the\n            link '#’ comes please change to short URL through bitly.</span>\n          <div class=\"field-wrapper\" [ngClass]=\"{'has-value':instDetails.announcement != ''}\">\n            <!-- <input type=\"textbox\" id=\"ch32\" class=\"form-ctrl newDisabled\" name=\"slotNew\" [(ngModel)]=\"instDetails.announcement\"> -->\n            <editor [init]=\"editorConf\" apiKey=\"xix5hq71alw64jp2ufl9fo6nddnhg91n6h7w2afn043v538t\"\n              [(ngModel)]=\"instDetails.announcement\"></editor>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"c-sm-3 c-md-3 c-lg-3 main-setting\">\n          <label for=\"ch33\">About Us\n          </label>\n        </div>\n        <div class=\"c-sm-6 c-md-6 c-lg-6\">\n          <div class=\"field-wrapper\" [ngClass]=\"{'has-value':instDetails.about_us_text != ''}\">\n            <input type=\"textbox\" id=\"ch33\" class=\"form-ctrl newDisabled\" name=\"slotNew\"\n              [(ngModel)]=\"instDetails.about_us_text\">\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"c-sm-3 c-md-3 c-lg-3 main-setting\">\n          <div class=\"field-checkbox-wrapper\" style=\"width: 100%\">\n            <input type=\"checkbox\" value=\"\" name=\"enable_student_app_url\" class=\"form-checkbox\"\n              [(ngModel)]=\"instDetails.enable_student_app_url\" id=\"enable_student_app_url\">\n            <label for=\"enable_student_app_url\">Enable student app URL\n            </label>\n          </div>\n        </div>\n        <div class=\"c-sm-1 c-md-1 c-lg-1 main-setting\">\n          <label for=\"ch34\">App Url\n          </label>\n        </div>\n        <div class=\"c-sm-5 c-md-5 c-lg-5\" style=\"padding: 0;\">\n          <div class=\"field-wrapper\" [ngClass]=\"{'has-value':instDetails.student_app_url != ''}\">\n            <input type=\"textbox\" id=\"ch34\" class=\"form-ctrl newDisabled\" name=\"slotNew\"\n              [disabled]=\"!instDetails.enable_student_app_url\" style=\"width: 69%;\"\n              [(ngModel)]=\"instDetails.student_app_url\">\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"c-sm-3 c-md-3 c-lg-3 main-setting\">\n          <label for=\"student_app_ios_url\">Student IOS App URL\n          </label>\n        </div>\n        <div class=\"c-sm-6 c-md-6 c-lg-6\">\n          <div class=\"field-wrapper\" [ngClass]=\"{'has-value' : instDetails.student_ios_app_url != ''}\">\n            <input type=\"textbox\" style=\"width: 75%;\" [(ngModel)]=\"instDetails.student_ios_app_url\" class=\"form-ctrl\"\n              id=\"student_app_ios_url\">\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"c-sm-3 c-md-3 c-lg-3 main-setting\">\n          <label for=\"share_app_url\">Share App URL(Android)\n          </label>\n        </div>\n        <div class=\"c-sm-6 c-md-6 c-lg-6\">\n          <div class=\"field-wrapper\" [ngClass]=\"{'has-value' : instDetails.share_app_url != ''}\">\n            <input type=\"textbox\" style=\"width: 75%;\" [(ngModel)]=\"instDetails.share_app_url\" class=\"form-ctrl\"\n              id=\"share_app_url\">\n          </div>\n        </div>\n      </div>\n      <!-- Added By Ashwini Gupta   ticket 1254 -->\n      <div class=\"row\">\n        <div class=\"c-sm-3 c-md-3 c-lg-3 main-setting\">\n          <label for=\"share_app_url\">Share App URL(iOS)\n          </label>\n        </div>\n        <div class=\"c-sm-6 c-md-6 c-lg-6\">\n          <div class=\"field-wrapper\" [ngClass]=\"{'has-value' : instDetails.share_ios_app_url != ''}\">\n            <input type=\"textbox\" style=\"width: 75%;\" [(ngModel)]=\"instDetails.share_ios_app_url\" class=\"form-ctrl\"\n              id=\"share_ios_app_url\">\n          </div>\n        </div>\n      </div>\n      <!-- End -->\n    </div>\n\n    <h2 class=\"heading-setting-main\" *ngIf=\"instDetails.is_proctur_live_recording_allow == 1\">Live class</h2>\n\n    <div class=\"general-setting show-left\" *ngIf=\"instDetails.is_proctur_live_recording_allow == 1\">\n      <div class=\"row\" style=\"margin: 0;margin-top: 10px;margin-bottom: 10px;\">\n        <div class=\"c-sm-3 c-md-3 c-lg-3\">Proctur Live Recorded Session Download Visibility\n          <label for=\"proctur_live_recorded_session_download_visibilty\" style=\"font-size: 14px;padding-left: 5px;\">\n          </label>\n        </div>\n        <div class=\"c-sm-6 c-md-6 c-lg-6\">\n          <div class=\"field-wrapper c-md-2\"\n            [ngClass]=\"{'has-value':proctur_live_recorded_session_download_visibilty.student != ''}\">\n            <input type=\"checkbox\" style=\"-webkit-appearance: checkbox;\"\n              [(ngModel)]=\"proctur_live_recorded_session_download_visibilty.student\" name=\"proctur_live_student\"\n              id=\"proctur_live_student\">\n            <label for=\"proctur_live_student\">Student</label>\n          </div>\n          <div class=\"field-wrapper c-md-2\"\n            [ngClass]=\"{'has-value':proctur_live_recorded_session_download_visibilty.teacher != ''}\">\n            <input type=\"checkbox\" style=\"-webkit-appearance: checkbox;\"\n              [(ngModel)]=\"proctur_live_recorded_session_download_visibilty.teacher\" name=\"proctur_live_teacher\"\n              id=\"proctur_live_teacher\">\n            <label for=\"proctur_live_teacher\">Teacher</label>\n          </div>\n          <div class=\"field-wrapper c-md-2\"\n            [ngClass]=\"{'has-value':proctur_live_recorded_session_download_visibilty.admin != ''}\">\n            <input type=\"checkbox\" style=\"-webkit-appearance: checkbox;\"\n              [(ngModel)]=\"proctur_live_recorded_session_download_visibilty.admin\" name=\"proctur_live_admin\"\n              id=\"proctur_live_admin\">\n            <label for=\"proctur_live_admin\">Admin</label>\n          </div>\n          <div class=\"field-wrapper c-md-3\"\n            [ngClass]=\"{'has-value':proctur_live_recorded_session_download_visibilty.openApp != ''}\">\n            <input type=\"checkbox\" style=\"-webkit-appearance: checkbox;\"\n              [(ngModel)]=\"proctur_live_recorded_session_download_visibilty.openApp\" name=\"proctur_live_open_app\"\n              id=\"proctur_live_open_app\">\n            <label for=\"proctur_live_open_app\">Open App</label>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\" style=\"margin: 0;\">\n        <div class=\"c-sm-3 c-md-3 c-lg-3\">Proctur Live Recorded Session View Visibility\n          <label for=\"proctur_live_recorded_session_view_visibility\" style=\"font-size: 14px;padding-left: 5px;\">\n          </label>\n        </div>\n        <div class=\"c-sm-6 c-md-6 c-lg-6\">\n          <div class=\"field-wrapper c-md-2\"\n            [ngClass]=\"{'has-value':proctur_live_recorded_session_view_visibility.student != ''}\">\n            <input type=\"checkbox\" style=\"-webkit-appearance: checkbox;\"\n              [(ngModel)]=\"proctur_live_recorded_session_view_visibility.student\" name=\"proctur_view_student\"\n              id=\"proctur_view_student\">\n            <label for=\"proctur_view_student\">Student</label>\n          </div>\n          <div class=\"field-wrapper c-md-2\"\n            [ngClass]=\"{'has-value':proctur_live_recorded_session_view_visibility.teacher != ''}\">\n            <input type=\"checkbox\" style=\"-webkit-appearance: checkbox;\"\n              [(ngModel)]=\"proctur_live_recorded_session_view_visibility.teacher\" name=\"proctur_view_teacher\"\n              id=\"proctur_view_teacher\">\n            <label for=\"proctur_view_teacher\">Teacher</label>\n          </div>\n          <div class=\"field-wrapper c-md-2\"\n            [ngClass]=\"{'has-value':proctur_live_recorded_session_view_visibility.admin != ''}\">\n            <input type=\"checkbox\" style=\"-webkit-appearance: checkbox;\"\n              [(ngModel)]=\"proctur_live_recorded_session_view_visibility.admin\" name=\"proctur_view_admin\"\n              id=\"proctur_view_admin\">\n            <label for=\"proctur_view_admin\">Admin</label>\n          </div>\n          <div class=\"field-wrapper c-md-3\"\n            [ngClass]=\"{'has-value':proctur_live_recorded_session_view_visibility.openApp != ''}\">\n            <input type=\"checkbox\" style=\"-webkit-appearance: checkbox;\"\n              [(ngModel)]=\"proctur_live_recorded_session_view_visibility.openApp\" name=\"proctur_view_open_app\"\n              id=\"proctur_view_open_app\">\n            <label for=\"proctur_view_open_app\">Open App</label>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <h2 class=\"heading-setting-main\" *ngIf=\"instDetails.enable_jd_integration == 1\">Integration</h2>\n\n    <div class=\"general-setting show-left\" *ngIf=\"instDetails.enable_jd_integration == 1\">\n      <div class=\"row\">\n        <div class=\"c-sm-3 c-md-3 c-lg-3 main-setting\">\n          <label for=\"jd_contract_id\">JustDial Contract ID\n          </label>\n        </div>\n        <div class=\"c-sm-6 c-md-6 c-lg-6\">\n          <div class=\"field-wrapper\" [ngClass]=\"{'has-value':instDetails.jd_contract_id != ''}\">\n            <input type=\"textbox\" id=\"jd_contract_id\" class=\"form-ctrl newDisabled\" name=\"jd_contract_id\"\n              [(ngModel)]=\"instDetails.jd_contract_id\">\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <h2 class=\"heading-setting-main\">Miscellaneous setting </h2>\n\n    <div class=\"general-setting show-left\">\n      <div class=\"row\">\n        <div class=\"c-sm-6 c-md-6 c-lg-6\">\n          <div class=\"field-wrapper\" [ngClass]=\"{'has-value':instDetails.enable_faculty_all_file_access != ''}\">\n            <input type=\"checkbox\" style=\"-webkit-appearance: checkbox;\"\n              [(ngModel)]=\"instDetails.enable_faculty_all_file_access\" name=\"enable_faculty_all_file_access\"\n              id=\"enable_faculty_all_file_access\">\n            <label for=\"enable_faculty_all_file_access\" style=\"font-size: 14px;padding-left: 5px;\">File Manager\n              (Teacher)\n            </label>\n            <div class=\"questionInfo inline-relative\">\n              <span class=\"qInfoIcon i-class\">i</span>\n              <div class=\"tooltip-box-field\">\n                After enabling teacher can view all<br> files in file manager but they can’t<br> delete and download the\n                files.\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"c-sm-3 c-md-3 c-lg-3 main-setting\">\n\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"c-sm-3 c-md-3 c-lg-3 main-setting\">\n          <label for=\"ch21\">Daily reporting SMS\n          </label>\n        </div>\n        <div class=\"c-sm-6 c-md-6 c-lg-6\">\n          <div class=\"field-wrapper\" [ngClass]=\"{'has-value':instDetails.eod_report_multiple_mobile != ''}\">\n            <small style=\"font-size: 12px;\">(Enter contact(s) number with comma\n              separated.)</small>\n            <input type=\"text\" class=\"form-ctrl newDisabled\" name=\"slotNew\"\n              [(ngModel)]=\"instDetails.eod_report_multiple_mobile\" id=\"ch21\">\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"c-sm-3 c-md-3 c-lg-3 main-setting\">\n          <label for=\"ch21\">Daily reporting Email\n          </label>\n        </div>\n        <div class=\"c-sm-6 c-md-6 c-lg-6\">\n          <div class=\"field-wrapper\" [ngClass]=\"{'has-value':instDetails.eod_report_multiple_emails != ''}\">\n            <small style=\"font-size: 12px;\">(Enter email\n              id(s) with comma separated)</small>\n            <input type=\"text\" class=\"form-ctrl newDisabled\" name=\"slotNew\"\n              [(ngModel)]=\"instDetails.eod_report_multiple_emails\" id=\"ch21\">\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div *ngIf=\"instituteDetailsAll?.zoom_enabled && instituteDetailsAll?.zoom_account_type == 'CLIENT'\">\n      <h2 class=\"heading-setting-main\">Zoom details &nbsp;<span *ngIf=\"instituteDetailsAll?.no_of_zoom_hosts\"\n          style=\"font-weight: normal;\">(You can add upto {{instituteDetailsAll?.no_of_zoom_hosts}} hosts.)</span></h2>\n\n      <div class=\"general-setting show-left\">\n        <div class=\"row\">\n          <div class=\"c-sm-3 c-md-3 c-lg-3 main-setting\">\n            <label for=\"ch32\">Zoom Account Name\n            </label>\n          </div>\n          <div class=\"c-sm-6 c-md-6 c-lg-6\">\n            <div class=\"field-wrapper\" [ngClass]=\"{'has-value':zoomOBJ.account_name != ''}\">\n              <input type=\"textbox\" id=\"ch32\" class=\"form-ctrl newDisabled\" name=\"slotNew\"\n                [(ngModel)]=\"zoomOBJ.account_name\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"c-sm-3 c-md-3 c-lg-3 main-setting\">\n            <label for=\"ch33\">Zoom Email ID\n            </label>\n          </div>\n          <div class=\"c-sm-6 c-md-6 c-lg-6\">\n            <div class=\"field-wrapper\" [ngClass]=\"{'has-value':zoomOBJ.email_id != ''}\">\n              <input type=\"textbox\" id=\"ch33\" class=\"form-ctrl newDisabled\" name=\"slotNew\"\n                [(ngModel)]=\"zoomOBJ.email_id\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"c-sm-3 c-md-3 c-lg-3 main-setting\">\n            <label for=\"ch34\">API Key\n            </label>\n          </div>\n          <div class=\"c-sm-6 c-md-6 c-lg-6\">\n            <div class=\"field-wrapper\" [ngClass]=\"{'has-value':zoomOBJ.jwt_api_key != ''}\">\n              <input type=\"textbox\" id=\"ch34\" class=\"form-ctrl newDisabled\" name=\"slotNew\"\n                [(ngModel)]=\"zoomOBJ.jwt_api_key\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"c-sm-3 c-md-3 c-lg-3 main-setting\">\n            <label for=\"ch34\">API Secret\n            </label>\n          </div>\n          <div class=\"c-sm-6 c-md-6 c-lg-6\">\n            <div class=\"field-wrapper\" [ngClass]=\"{'has-value':zoomOBJ.jwt_api_secret != ''}\">\n              <input type=\"textbox\" id=\"ch34\" class=\"form-ctrl newDisabled\" name=\"slotNew\"\n                [(ngModel)]=\"zoomOBJ.jwt_api_secret\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"c-sm-3 c-md-3 c-lg-3 main-setting\">\n            <label for=\"ch34\">JWT Token\n            </label>\n          </div>\n          <div class=\"c-sm-6 c-md-6 c-lg-6\">\n            <div class=\"field-wrapper\" [ngClass]=\"{'has-value':zoomOBJ.jwt_access_token != ''}\">\n              <input type=\"textbox\" id=\"ch34\" class=\"form-ctrl newDisabled\" name=\"slotNew\"\n                [(ngModel)]=\"zoomOBJ.jwt_access_token\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"c-sm-3 c-md-3 c-lg-3 main-setting\">\n            <label for=\"ch34\">SDK Key\n            </label>\n          </div>\n          <div class=\"c-sm-6 c-md-6 c-lg-6\">\n            <div class=\"field-wrapper\" [ngClass]=\"{'has-value':zoomOBJ.sdk_api_key != ''}\">\n              <input type=\"textbox\" id=\"ch34\" class=\"form-ctrl newDisabled\" name=\"slotNew\"\n                [(ngModel)]=\"zoomOBJ.sdk_api_key\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"c-sm-3 c-md-3 c-lg-3 main-setting\">\n            <label for=\"ch34\">SDK Secret\n            </label>\n          </div>\n          <div class=\"c-sm-6 c-md-6 c-lg-6\">\n            <div class=\"field-wrapper\" [ngClass]=\"{'has-value':zoomOBJ.sdk_api_secret != ''}\">\n              <input type=\"textbox\" id=\"ch34\" class=\"form-ctrl newDisabled\" name=\"slotNew\"\n                [(ngModel)]=\"zoomOBJ.sdk_api_secret\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"c-sm-3 c-md-3 c-lg-3 main-setting\">\n            <label for=\"ch34\">User Limit\n            </label>\n          </div>\n          <div class=\"c-sm-6 c-md-6 c-lg-6\">\n            <div class=\"field-wrapper\" [ngClass]=\"{'has-value':zoomOBJ.user_limit != ''}\">\n              <input type=\"textbox\" id=\"ch34\" class=\"form-ctrl newDisabled\" name=\"slotNew\"\n                [(ngModel)]=\"zoomOBJ.user_limit\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"c-sm-3 c-md-3 c-lg-3 main-setting\">\n            <label for=\"ch34\">Zoom Recording Enable\n            </label>\n          </div>\n          <div class=\"c-sm-6 c-md-6 c-lg-6\" style=\"margin:1% -1% 0% 0%\">\n            <div class=\"field-wrapper\">\n              <input type=\"checkbox\" style=\"-webkit-appearance: checkbox;\" [(ngModel)]=\"zoomOBJ.enable_recording\"\n                name=\"enable_recording\" id=\"enable_recording\">\n            </div>\n          </div>\n        </div>\n\n        <div class=\"row\" *ngIf=\"instituteDetailsAll?.zoom_attendance_enable\">\n          <div class=\"c-sm-3 c-md-3 c-lg-3 main-setting\">\n            <label for=\"enable_attendance\">Enable zoom Attendance \n            </label>\n          </div>\n          <div class=\"c-sm-6 c-md-6 c-lg-6\" style=\"margin:1% -1% 0% 0%\">\n            <div class=\"field-wrapper\">\n              <input type=\"checkbox\" style=\"-webkit-appearance: checkbox;\" [(ngModel)]=\"zoomOBJ.enable_attendance\"\n                name=\"enable_attendance\" id=\"enable_attendance\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"c-sm-3 c-md-3 c-lg-3\" style=\"float: right;\">\n            <button class=\"btn\" (click)=\"ClearZoomJSON()\">Cancel</button>\n            <button class=\"btn fullBlue\" (click)=\"saveZoomDetails()\"\n              [disabled]=\"!(instituteDetailsAll?.no_of_zoom_hosts > zoomDetails?.length)\">Add</button>\n          </div>\n        </div>\n        <div class=\"row\">\n          <!-- <div class=\"row\">\n          <div class=\"c-lg-10\">\n            <h3 class=\"heading-setting\">Promotional SMS</h3>\n          </div>\n        </div> -->\n          <div class=\"table table-responsive show-left\" style=\"margin-top: 15px;\">\n            <table class=\"assign-width zoomTable\">\n              <thead>\n                <tr>\n                  <th>\n                    Zoom Account Name\n                  </th>\n                  <th>\n                    Zoom Email ID\n                  </th>\n                  <th>\n                    API Key\n                  </th>\n                  <th>\n                    API Secret\n                  </th>\n                  <th style=\"width: 20%;\">\n                    JWT Token\n                  </th>\n                  <th>\n                    SDK Key\n                  </th>\n                  <th>\n                    SDK Secret\n                  </th>\n                  <th>\n                    User Limit\n                  </th>\n                  <th>\n                    Zoom Recording Enable\n                  </th>\n                  <th *ngIf=\"instituteDetailsAll?.zoom_attendance_enable\">\n                    Enable zoom Attendance\n                  </th>\n                  <th>\n                    Action\n                  </th>\n                </tr>\n              </thead>\n              <tbody *ngIf=\"zoomDetails.length>0\">\n                <tr class=\"displayComp\" id=\"data{{i}}\" *ngFor=\"let data of zoomDetails;let i = index\">\n                  <td>\n                    <span class=\"view-comp\" title=\"{{data.account_name}}\">\n                      {{data.account_name}}\n                    </span>\n                    <span class=\"edit-comp\">\n                      <div class=\"field-wrapper\" style=\"margin:0;padding: 0;\">\n                        <input type=\"text\" [(ngModel)]=\"data.account_name\" class=\"form-ctrl\" id=\"data.account_name\">\n                      </div>\n                    </span>\n                  </td>\n                  <td>\n                    <span class=\"view-comp\" title=\"{{data.email_id}}\">\n                      {{data.email_id}}\n                    </span>\n                    <span class=\"edit-comp\">\n                      <div class=\"field-wrapper\" style=\"margin:0;padding: 0;\">\n                        <input type=\"text\" [(ngModel)]=\"data.email_id\" class=\"form-ctrl\" id=\"data.email_id\">\n                      </div>\n                    </span>\n                  </td>\n                  <td>\n                    <span class=\"view-comp\" title=\"{{data.jwt_api_key}}\">\n                      {{data.jwt_api_key}}\n                      <!-- {{(data.jwt_api_key?.length > 10) ? (data.jwt_api_key | slice:0:10) + '...' : data.jwt_api_key}} -->\n                    </span>\n                    <span class=\"edit-comp\">\n                      <div class=\"field-wrapper\" style=\"margin:0;padding: 0;\">\n                        <input type=\"text\" [(ngModel)]=\"data.jwt_api_key\" class=\"form-ctrl\" id=\"data.jwt_api_key\">\n                      </div>\n                    </span>\n                  </td>\n                  <td>\n                    <span class=\"view-comp\" title=\"{{data.jwt_api_secret}}\">\n                      {{data.jwt_api_secret}}\n                    </span>\n                    <span class=\"edit-comp\">\n                      <div class=\"field-wrapper\" style=\"margin:0;padding: 0;\">\n                        <input type=\"text\" [(ngModel)]=\"data.jwt_api_secret\" class=\"form-ctrl\" id=\"data.jwt_api_secret\">\n                      </div>\n                    </span>\n                  </td>\n                  <td style=\"width: 20%;\">\n                    <span class=\"view-comp\" title=\"{{data.jwt_access_token}}\">\n                      {{data.jwt_access_token}}\n                    </span>\n                    <span class=\"edit-comp\">\n                      <div class=\"field-wrapper\" style=\"margin:0;padding: 0;\">\n                        <input type=\"text\" [(ngModel)]=\"data.jwt_access_token\" class=\"form-ctrl\"\n                          id=\"data.jwt_access_token\">\n                      </div>\n                    </span>\n                  </td>\n                  <td>\n                    <span class=\"view-comp\" title=\"{{data.sdk_api_key}}\">\n                      {{data.sdk_api_key}}\n                    </span>\n                    <span class=\"edit-comp\">\n                      <div class=\"field-wrapper\" style=\"margin:0;padding: 0;\">\n                        <input type=\"text\" [(ngModel)]=\"data.sdk_api_key\" class=\"form-ctrl\" id=\"data.sdk_api_key\">\n                      </div>\n                    </span>\n                  </td>\n                  <td>\n                    <span class=\"view-comp\" title=\"{{data.sdk_api_secret}}\">\n                      {{data.sdk_api_secret}}\n                    </span>\n                    <span class=\"edit-comp\">\n                      <div class=\"field-wrapper\" style=\"margin:0;padding: 0;\">\n                        <input type=\"text\" [(ngModel)]=\"data.sdk_api_secret\" class=\"form-ctrl\" id=\"data.sdk_api_secret\">\n                      </div>\n                    </span>\n                  </td>\n                  <td>\n                    <span class=\"view-comp\" title=\"{{data.user_limit}}\">\n                      {{data.user_limit}}\n                    </span>\n                    <span class=\"edit-comp\">\n                      <div class=\"field-wrapper\" style=\"margin:0;padding: 0;\">\n                        <input type=\"text\" [(ngModel)]=\"data.user_limit\" class=\"form-ctrl\" id=\"data.user_limit\">\n                      </div>\n                    </span>\n                  </td>\n                  <!-- <td>\n                    <input type=\"checkbox\" [(ngModel)]=\"data.enable_recording\" class=\"form-ctrl\"\n                      id=\"data.enable_recording\">\n                  </td> -->\n                  <td>\n                    <span class=\"view-comp\" title=\"{{data.enable_recording}}\">\n                      {{data.enable_recording}}\n                    </span>\n                    <span class=\"edit-comp\">\n                      <input type=\"checkbox\" style=\"-webkit-appearance: checkbox;\" [(ngModel)]=\"data.enable_recording\"\n                        name=\"data.enable_recording\" id=\"data.enable_recording\">\n                    </span>\n\n                  </td>\n                  <td *ngIf=\"instituteDetailsAll?.zoom_attendance_enable\">\n                    <span class=\"view-comp\" title=\"{{data.enable_attendance}}\">\n                      {{data.enable_attendance}}\n                    </span>\n                    <span class=\"edit-comp\">\n                      <input type=\"checkbox\" style=\"-webkit-appearance: checkbox;\" [(ngModel)]=\"data.enable_attendance\"\n                        name=\"data.enable_attendance\" id=\"data.enable_attendance\">\n                    </span>\n                  </td>\n                  <td>\n                    <span class=\"view-comp\">\n                      <span title=\"Edit\" class=\"fa fa-edit\" (click)=\"editZoom(i)\" style=\"color: #0084f6;\"></span>\n                    </span>&nbsp;\n                    <span class=\"edit-comp\">\n                      <span (click)=\"updateZoom(data)\"><i _ngcontent-c26=\"\" class=\"fas fa-check\"\n                          style=\"font-family: FontAwesome ;font-size: 19px;color: #0084f6;\" title=\"Update\"></i></span>\n                    </span>&nbsp;\n                    <span class=\"view-comp\">\n                      <span title=\"Delete\" class=\"fa fa-trash\" (click)=\"deleteZoom(data.id)\" style=\"color: red;\"></span>\n                    </span>\n                    <span class=\"edit-comp\">\n                      <span (click)=\"cancelRow(i)\"><i _ngcontent-c26=\"\" class=\"fas fa fa-times\"\n                          style=\"font-family: FontAwesome ;font-size: 19px;color: red;\" title=\"Cancel\"></i></span>\n                    </span>\n                  </td>\n                </tr>\n              </tbody>\n              <tbody *ngIf=\"zoomDetails.length == 0\">\n                <tr>\n                  <td colspan=\"10\"> No Data Found</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div style=\"padding-bottom: 10%;\"></div>\n    <section class=\"row setting-footer\">\n      <button class=\"btn\" routerLink=\"/view/dashboard/admin\">Cancel</button>\n      <button class=\"btn fullBlue\" (click)=\"updateAllDetails()\">Update</button>\n    </section>\n  </section>\n\n  <!-- <section id=\"divPlanOption\">\n\n      </section>\n\n      <section id=\"divAccount\" class=\"general-wrapper\"></section>\n      <section id=\"divAppDetail\" class=\"general-wrapper\"></section> -->\n\n  <!-- <aside class=\"pull-right setting-right\" style=\"width:80%;\">\n\n      <section id=\"divGeneral\" class=\"general-wrapper\">\n\n\n\n\n        <div class=\"row\">\n\n          <fieldset style=\"margin-top: 10px;margin-left: 15px;\">\n            <legend>Student ID</legend>\n            <div class=\"c-sm-4 c-md-4 c-lg-4\" style=\"margin-top: 10px;margin-left: -15px;\">\n              <div class=\"radio-options\">\n                <div class=\"field-radio-wrapper\">\n                  <input type=\"radio\" disabled [checked]=\"(this.instDetails.is_student_displayId_manual == 0)\" (click)=\"checkInputType($event)\"\n                    name=\"sFilter\" class=\"form-radio\" value=\"Automatic\" id=\"idAutomatic\">\n                  <label for=\"active\">Automatic</label>\n                </div>\n                <div class=\"field-radio-wrapper\">\n                  <input type=\"radio\" disabled [checked]=\"(this.instDetails.is_student_displayId_manual == 1)\" (click)=\"checkInputType($event)\"\n                    name=\"sFilter\" value=\"Manual\" class=\"form-radio\" id=\"idManual\">\n                  <label for=\"Inactive\">Manual</label>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"c-sm-4 c-md-4 c-lg-4\" *ngIf=\"(showPrefix == true)\">\n              <div class=\"field-wrapper\" [ngClass]=\"{'has-value':instDetails.student_id_prefix != ''}\">\n                <input type=\"text\" class=\"form-ctrl\" name=\"slotNew\" [(ngModel)]=\"instDetails.student_id_prefix\" id=\"ch20\">\n                <label for=\"ch20\">\n                  Student ID Prefix\n                </label>\n              </div>\n            </div>\n          </fieldset>\n\n\n        </div>\n\n\n\n\n        <div class=\"row borderClass\" style=\"margin-top:20px\">\n          <h3 class='c-sm-4 c-md-4 c-lg-4'>SMS Setting</h3>\n          <a class=\"pull-right\" style=\"cursor: pointer;padding-top: 15px;\" (click)=\"smsAllocationHistoryDeatils()\">SMS Allocation History\n          </a>\n        </div>\n\n\n        <div class=\"row borderClass\" style=\"margin-top:20px\">\n          <h3 class=\"c-sm-4 c-md-4 c-lg-4\">Storage Setting</h3>\n          <a class=\"pull-right\" style=\"cursor: pointer;padding-top: 15px;\" (click)=\"downLoadLimitAllocationHistory()\">Download Limit Allocation History</a>\n        </div>\n\n      </section>\n\n    </aside> -->\n\n\n\n</div>\n\n\n\n<!-- /////////////////////////////Pop UP HERERERERERRERER     /*///////// -->\n\n\n\n<section id=\"popup\" class=\"popupWrapper fadeIn\" *ngIf=\"showAllocationPopup\">\n  <div class=\"popup pos-abs\">\n    <div class=\"popup-wrapper pos-rel\">\n      <span class=\"closePopup pos-abs fbold show\" id=\"popupCloseBtn\" (click)=\"closeDeletePopup()\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"9310 2185 16 16\">\n          <g id=\"Group_1228\" data-name=\"Group 1228\" transform=\"translate(8298 1888)\">\n            <g id=\"Group_1213\" data-name=\"Group 1213\" transform=\"translate(34.189 -7.77)\">\n              <line id=\"Line_274\" data-name=\"Line 274\" class=\"cls-1\" y2=\"19.798\"\n                transform=\"translate(992.81 305.77) rotate(45)\" />\n              <line id=\"Line_275\" data-name=\"Line 275\" class=\"cls-1\" x1=\"19.798\"\n                transform=\"translate(978.81 305.77) rotate(45)\" />\n            </g>\n            <rect id=\"Rectangle_686\" data-name=\"Rectangle 686\" style=\"stroke:none;\" class=\"cls-2\" width=\"16\" height=\"16\"\n              transform=\"translate(1012 297)\" />\n          </g>\n        </svg>\n      </span>\n      <div class=\"popup-content\" style=\"padding: 0px 15px;margin-bottom: 20px;\" *ngIf=\"openPopUpName == 'SMSHistory'\">\n        <div class=\"\">\n          <h2>SMS Allocation History Details</h2>\n        </div>\n        <div class=\"row\" style=\"margin-top: 30px;\">\n          <table>\n            <thead>\n              <tr>\n                <th>\n                  SMS Type\n                </th>\n                <th>\n                  Quota Allocated\n                </th>\n                <th>\n                  Reason\n                </th>\n                <th>\n                  Updated On\n                </th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr id=\"row{{i}}\" *ngFor=\"let row of smsAllocation; let i = index; trackBy: i;\">\n                <td>\n                  {{row.quoto_type}}\n                </td>\n                <td>\n                  {{row.sms_quota_allocated}}\n                </td>\n                <td>\n                  {{row.reason}}\n                </td>\n                <td>\n                  {{row.created_date}}\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n\n      <div class=\"popup-content\" style=\"padding: 0px 15px;margin-bottom: 20px;\"\n        *ngIf=\"openPopUpName == 'PaymentHistory'\">\n\n        <div class=\"\">\n          <h2>Payment Details</h2>\n        </div>\n        <div class=\"\" style=\"margin-top: 30px;\">\n          <table>\n            <thead>\n              <tr>\n                <th>\n                  Created Date\n                </th>\n                <th>\n                  Item\n                </th>\n                <th>\n                  Detail\n                </th>\n                <th>\n                  Due Date\n                </th>\n                <th>\n                  Added Date\n                </th>\n                <th>\n                  Amount Paid\n                </th>\n                <th>\n                  Payment Status\n                </th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr id=\"row{{i}}\" *ngFor=\"let row of paymentTable; let i = index; trackBy: i;\">\n                <td>\n                  {{row.added_date}}\n                </td>\n                <td>\n                  {{row.item}}\n                </td>\n                <td>\n                  {{row.detail}}\n                </td>\n                <td>\n                  {{row.due_date}}\n                </td>\n                <td>\n                  {{row.added_date}}\n                </td>\n                <td>\n                  <span *ngIf=\"row.amount_with_tax!=null\">\n                    {{ commonService.currency_default_symbol}}{{row.amount_with_tax.toLocaleString()}}\n                  </span>\n                </td>\n                <td>\n                  {{row.pmt_status}}\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n\n      </div>\n\n      <div class=\"popup-content\" style=\"padding: 0px 15px;margin-bottom: 20px;\"\n        *ngIf=\"openPopUpName == 'DownloadLimit'\">\n\n        <div class=\"\">\n          <h2>Download Limit Allocation History Details</h2>\n        </div>\n        <div class=\"\" style=\"margin-top: 30px;\">\n          <table>\n            <thead>\n              <tr>\n                <th>\n                  Download Limit(GB)\n                </th>\n                <th>\n                  Reason\n                </th>\n                <th>\n                  Updated On\n                </th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr id=\"row{{i}}\" *ngFor=\"let row of limitTable; let i = index; trackBy: i;\">\n                <td>\n                  {{row.limit_allocated}}\n                </td>\n                <td>\n                  {{row.reason}}\n                </td>\n                <td>\n                  {{row.created_date}}\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</section>";
      /***/
    },

    /***/
    "./src/app/components/institute-details/institute-details.component.scss":
    /*!*******************************************************************************!*\
      !*** ./src/app/components/institute-details/institute-details.component.scss ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsInstituteDetailsInstituteDetailsComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/* ===============================header colors=======================*/\n.table-format-first .table-responsive table th,\n.table-format-first .table-responsive table td {\n  text-align: center;\n  padding: 10px 5px;\n}\n.table-format-first .table-responsive table th {\n  text-transform: capitalize;\n  font-size: 14px;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper {\n  display: inline-block;\n  overflow: initial;\n  margin-left: 0;\n  width: auto;\n  position: relative;\n  background: transparent;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox {\n  z-index: 2;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label {\n  font-size: 16px;\n  margin-left: 7px;\n  font-weight: 600;\n  vertical-align: middle;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:after, .table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:before {\n  z-index: 1;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper:after {\n  content: '';\n  width: 20px;\n  height: 20px;\n  background: #fff;\n  left: 0;\n  top: 0;\n  position: absolute;\n}\n.table-format-first .table-responsive table tbody tr td .fa-trash-o {\n  color: #f44336;\n  font-size: 20px;\n}\n.table-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-top: 10px;\n}\n.table-container .heading-container {\n  background: #e0eaec;\n  display: flex;\n  flex-direction: row;\n  font-size: 14px;\n  font-weight: 600;\n  text-align: left;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n}\n.table-container .heading-container .heading-item {\n  width: 10%;\n  text-align: center;\n}\n.table-container .value-outer-container {\n  display: flex;\n  flex-direction: column;\n  min-height: 53vh;\n  max-height: 54vh;\n  overflow-x: hidden;\n  overflow-y: auto;\n  border: 1px solid #ccc;\n}\n.table-container .value-outer-container .value-container {\n  display: flex;\n  flex-direction: row;\n  text-align: left;\n  padding: 4px;\n  font-size: 12px;\n  border-bottom: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n  border-top: none;\n}\n.table-container .value-outer-container .value-container .value-item {\n  width: 10%;\n  text-align: center;\n}\n.setting-footer {\n  margin-top: 5px;\n  position: fixed;\n  float: right;\n  bottom: 0%;\n  width: 84.5%;\n  background: white;\n  left: 14.5%;\n  display: flex;\n  justify-content: flex-end;\n  padding: 10px;\n  border-top: 1px solid #ccc;\n  margin: 0px;\n}\n.general-setting {\n  height: auto;\n  /* width: 70%; */\n  /* margin-left: 2%; */\n  background: white;\n  margin-bottom: 10px;\n  padding-bottom: 15px;\n}\n.assign-width {\n  width: 96%;\n}\n.show-left {\n  padding-left: 2%;\n}\n.heading-setting {\n  padding-top: 2%;\n  padding-left: 2%;\n}\n.switch {\n  margin-top: 25px;\n  position: relative;\n  display: inline-block;\n  width: 50px;\n  height: 21px;\n}\n.switch input {\n  display: none;\n}\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: .4s;\n}\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 16px;\n  width: 16px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  transition: .4s;\n  top: 3px;\n}\n.switch-n input:checked + .slider {\n  background-color: #2196F3;\n}\n.switch-n input:focus + .slider {\n  box-shadow: 0 0 1px #2196F3;\n}\n.switch-n input:checked + .slider:before {\n  transform: translateX(26px);\n}\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n.newDisabled:disabled {\n  background: #efefef !important;\n  cursor: no-drop;\n}\n.newDisabled {\n  width: 75%;\n  padding: 5px;\n  height: 30px;\n}\n.slider.round:before {\n  border-radius: 50%;\n}\n.heading-setting-main {\n  margin: 2% 0% 0% 0%;\n}\n.main-setting {\n  margin: 2% -1% 0% 1%;\n}\n.middle-section {\n  padding: 1%;\n  width: 98%;\n  box-sizing: border-box;\n}\n.showDivClass {\n  display: '';\n}\n.hideDivClass {\n  display: none;\n}\n.extraMarginTen {\n  margin-top: 10px !important;\n  margin-bottom: 10px;\n}\ninput[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n.borderClass {\n  border-top: 0.1px solid #f1f1f1;\n  margin-top: 20px;\n}\n.popupWrapper {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  bottom: 0;\n  top: 0px;\n  right: 0;\n  left: 0px;\n  background: rgba(230, 230, 230, 0.5);\n  z-index: 100;\n  visibility: hidden;\n  opacity: 0;\n  transition: all 0.5s ease-in;\n}\n.popupWrapper .popup {\n  max-width: 850px;\n  width: 100%;\n  height: auto;\n  left: 0;\n  right: 0;\n  top: 5%;\n  bottom: 0;\n  margin: auto;\n}\n.popup-wrapper {\n  padding: 20px 20px;\n  box-sizing: border-box;\n  box-shadow: 1px 8px 20px 5px #9c9c9c;\n  transition: unset;\n  background: #fff;\n}\n.popup-wrapper h2 {\n  margin-bottom: 15px;\n  font-size: 14px;\n}\n.popup-wrapper h4 {\n  margin: 25px 0 15px;\n  font-weight: 600;\n}\n.closePopup {\n  right: 10px;\n  top: 10px;\n  font-size: 18px;\n  cursor: pointer;\n  line-height: 20px;\n  width: 26px;\n  height: 26px;\n  box-sizing: border-box;\n  text-align: center;\n  padding-top: 3px;\n  display: none;\n}\n.closePopup.bottomRight {\n  bottom: 2px;\n  top: auto;\n  left: auto;\n  right: 0;\n}\n.closePopup.topLeft {\n  left: 0;\n  right: auto;\n  top: 1px;\n  bottom: auto;\n}\n.closePopup.bottomLeft {\n  left: 0;\n  right: auto;\n  bottom: 2px;\n  top: auto;\n}\n.closePopup svg {\n  width: 16px;\n}\n.closePopup svg .cls-1 {\n  stroke: #c1c1c1;\n  stroke-width: 2px;\n}\n.closePopup:hover .cls-1 {\n  stroke: #0084f6;\n}\n.popup-content {\n  height: 100%;\n  overflow: hidden;\n  visibility: visible;\n}\n.fadeIn {\n  opacity: 1;\n  visibility: visible;\n}\n.popupWrapperMob {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  bottom: 0;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 100;\n  background: rgba(0, 0, 0, 0.5);\n  visibility: hidden;\n  transition: all 0.5s ease-in;\n}\n.popupWrapperMob .closePopup {\n  right: -25px;\n  top: -27px;\n  display: block;\n}\n.popup-mob {\n  left: 0;\n  width: 100%;\n  max-height: 70%;\n  background: #fff;\n  padding: 30px;\n  box-sizing: border-box;\n  height: 100%;\n  overflow: auto;\n  z-index: 1;\n  bottom: -70%;\n  transition: all 0.5s ease-in;\n}\n.popupWrapperMob.showPopupMob {\n  z-index: 100;\n  visibility: visible;\n  opacity: 1;\n}\n.popupWrapperMob.showPopupMob .popup-mob {\n  bottom: 0;\n}\ntable thead tr th {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\ntable tbody tr td {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n.field-checkbox-wrapper,\n.field-radio-wrapper {\n  position: relative;\n  padding-left: 25px;\n  margin-bottom: 10px;\n}\n.field-radio-wrapper .form-radio {\n  opacity: 0;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 20px;\n  height: 20px;\n  z-index: 1;\n}\n.field-radio-wrapper .form-radio + label {\n  vertical-align: middle;\n  transition: all 0.1s;\n}\n.field-radio-wrapper .form-radio + label:after {\n  content: '';\n  width: 16px;\n  height: 16px;\n  border: 2px solid #ccc;\n  border-radius: 50%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  transition: all 0.1s;\n}\n.field-radio-wrapper .form-radio:checked + label:after {\n  border: 2px solid #0084f6;\n}\n.field-radio-wrapper .form-radio + label:before {\n  transition: all 0.1s;\n  width: 1px;\n  height: 1px;\n  left: 9px;\n  top: 9px;\n  position: absolute;\n  content: '';\n}\n.field-radio-wrapper .form-radio:checked + label:before {\n  content: '';\n  width: 10px;\n  height: 10px;\n  background: #0084f6;\n  border-radius: 50%;\n  left: 3px;\n  top: 3px;\n}\n.field-radio-wrapper .form-radio:checked + label {\n  color: #0084f6;\n}\n.tableDataContainer {\n  display: flex;\n  flex-direction: row;\n  padding: 10px !important;\n  border-bottom: 1px solid #eee;\n}\n.tableValueContainer {\n  display: flex;\n  flex-direction: column;\n  width: 13%;\n  font-size: 12px;\n}\n.addIP {\n  margin-top: 25px;\n  width: 50px;\n  padding: 5px;\n  border: 1px solid #0084f6;\n  color: #0084f6;\n  border-radius: 4px;\n  text-align: center;\n}\n.displayComp {\n  height: 0%;\n}\n.displayComp .edit-comp {\n  display: none;\n}\n.editComp .view-comp {\n  display: none;\n}\n.webkitBox {\n  display: -webkit-box;\n  -webkit-box-align: center;\n}\n.zoomTable th {\n  width: 10%;\n}\n.zoomTable td {\n  width: 10%;\n  word-break: break-all;\n}\n.qInfoIcon {\n  width: 20px;\n  margin-left: 5px;\n  height: 20px;\n  border: 1px solid #ccc;\n  border-radius: 50%;\n  display: block;\n  text-align: center;\n  box-sizing: border-box;\n  line-height: 20px;\n  font-weight: 600;\n  font-size: 12px;\n  cursor: pointer;\n  box-shadow: 0px 0px 1px 0px #ccc inset;\n  color: #888;\n  transition: all 0.2s linear;\n}\n.qInfoIcon:hover {\n  border-color: #0060A3;\n  box-shadow: 0px 0px 1px 0px #0060A3 inset;\n  color: #0060A3;\n}\n.tooltip-box-field {\n  width: 200px;\n  white-space: nowrap;\n  min-height: 41px;\n  line-height: 18px;\n  padding: 5px 5px;\n  overflow: visible;\n  color: black;\n  font-weight: bold;\n}\n.tooltip-box-field.lg {\n  width: 200px;\n  white-space: nowrap;\n  min-height: 50px;\n  line-height: 20px;\n  padding: 5px 5px;\n}\n.tooltip-box-field.sm {\n  width: 100px;\n  white-space: nowrap;\n  min-height: 40px;\n  padding: 5px 5px;\n}\n.qInfoIcon {\n  width: 20px;\n  margin-left: 5px;\n  height: 20px;\n  border: 1px solid #ccc;\n  border-radius: 50%;\n  display: block;\n  text-align: center;\n  box-sizing: border-box;\n  line-height: 20px;\n  font-weight: 600;\n  font-size: 12px;\n  cursor: pointer;\n  box-shadow: 0px 0px 1px 0px #ccc inset;\n  color: #888;\n  transition: all 0.2s linear;\n}\n.qInfoIcon:hover {\n  border-color: #0060A3;\n  box-shadow: 0px 0px 1px 0px #0060A3 inset;\n  color: #0060A3;\n}\n.tooltip-box-field {\n  width: 200px;\n  white-space: nowrap;\n  min-height: 41px;\n  line-height: 18px;\n  padding: 5px 5px;\n  overflow: visible;\n  color: black;\n  font-weight: bold;\n}\n.tooltip-box-field.lg {\n  width: 200px;\n  white-space: nowrap;\n  min-height: 50px;\n  line-height: 20px;\n  padding: 5px 5px;\n}\n.tooltip-box-field.sm {\n  width: 100px;\n  white-space: nowrap;\n  min-height: 40px;\n  padding: 5px 5px;\n}\n.clearFile {\n  padding: 5px;\n  width: 2%;\n  margin-top: 12px;\n  color: white;\n  cursor: pointer;\n  border: 1px solid;\n  font-weight: 600;\n  background: red;\n}\n:host ::ng-deep .ck-editor__editable_inline {\n  border: 1px solid #ccc;\n  min-height: 100px;\n}\n.ck-editor__editable {\n  border: 1px solid #ccc;\n}\n.announcementImg {\n  padding: 0;\n  width: 4%;\n  margin-top: 15px;\n  margin-right: 5px;\n  margin-left: 5px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY3NzL2NvbW1vbi92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9pbnN0aXR1dGUtZGV0YWlscy9pbnN0aXR1dGUtZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZQSx1RUFBQTtBQVdBOztFQUtnQixrQkFBa0I7RUFDbEIsaUJBQWlCO0FDeEJqQztBRGtCQTtFQVNnQiwwQkFBMEI7RUFDMUIsZUFBZTtBQ3ZCL0I7QURhQTtFQWdCNEIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsV0FBVztFQUNYLGtCQUFrQjtFQUNsQix1QkFBdUI7QUN6Qm5EO0FESUE7RUF1QmdDLFVBQVU7QUN2QjFDO0FEQUE7RUEwQmdDLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtBQ3RCdEQ7QURQQTtFQWdDb0MsVUFBVTtBQ3JCOUM7QURYQTtFQW9DZ0MsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLE9BQU87RUFDUCxNQUFNO0VBQ04sa0JBQWtCO0FDckJsRDtBRHJCQTtFQThDNEIsY0FsRGI7RUFtRGEsZUFBZTtBQ3JCM0M7QUQ4QkE7RUFDSSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxnQkFBZ0I7QUMzQnBCO0FEdUJBO0VBTU0sbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIseUJBQXlCO0FDekIvQjtBRFVBO0VBaUJRLFVBQVU7RUFDVixrQkFBa0I7QUN2QjFCO0FES0E7RUFzQk0sYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0FDdkI1QjtBRExBO0VBOEJRLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLG9CQUFvQjtFQUNwQix5QkFBeUI7RUFDekIsZ0JBQWdCO0FDckJ4QjtBRGpCQTtFQXdDVSxVQUFVO0VBQ1Ysa0JBQWtCO0FDbkI1QjtBQXBHQTtFQUNFLGVBQWU7RUFDZixlQUFlO0VBQ2YsWUFBWTtFQUNaLFVBQVU7RUFDVixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYiwwQkFBMEI7RUFDMUIsV0FBVztBQXVHYjtBQXBHQTtFQUNJLFlBQVk7RUFDWixnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixvQkFBb0I7QUF1R3hCO0FBcEdBO0VBQ0ksVUFBUztBQXVHYjtBQXBHQTtFQUNJLGdCQUFnQjtBQXVHcEI7QUFwR0E7RUFDSSxlQUFlO0VBQ2YsZ0JBQWdCO0FBdUdwQjtBQXBHQTtFQUNJLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0FBdUdoQjtBQXBHQTtFQUNJLGFBQWE7QUF1R2pCO0FBcEdBO0VBQ0ksa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0VBQ1Qsc0JBQXNCO0VBRXRCLGVBQWU7QUF1R25CO0FBcEdBO0VBQ0ksa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUNYLFNBQVM7RUFDVCxXQUFXO0VBQ1gsdUJBQXVCO0VBRXZCLGVBQWU7RUFDZixRQUFPO0FBdUdYO0FBcEdBO0VBQ0kseUJBQXlCO0FBdUc3QjtBQXBHQTtFQUNJLDJCQUEyQjtBQXVHL0I7QUFwR0E7RUFHSSwyQkFBMkI7QUF1Ry9CO0FBcEdBLG9CQUFBO0FBRUE7RUFDSSxtQkFBbUI7QUFzR3ZCO0FBbkdBO0VBQ0ksOEJBQThCO0VBQzlCLGVBQWU7QUFzR25CO0FBbkdBO0VBQ0ksVUFBUztFQUNULFlBQVk7RUFDWixZQUFZO0FBc0doQjtBQW5HQTtFQUNJLGtCQUFrQjtBQXNHdEI7QUFuR0E7RUFDSSxtQkFDSjtBQXFHQTtBQW5HQTtFQUNJLG9CQUFvQjtBQXNHeEI7QUFuR0E7RUFDSSxXQUFXO0VBQ1gsVUFBVTtFQUNWLHNCQUFzQjtBQXNHMUI7QUFuR0E7RUFDSSxXQUFXO0FBc0dmO0FBbkdBO0VBQ0ksYUFBYTtBQXNHakI7QUFuR0E7RUFDSSwyQkFBMkI7RUFDM0IsbUJBQW1CO0FBc0d2QjtBQWxHQTs7RUFFSSx3QkFBd0I7RUFDeEIsU0FBUztBQXFHYjtBQWxHQTtFQUNJLCtCQUErQjtFQUMvQixnQkFBZ0I7QUFxR3BCO0FBakdBO0VBQ0ksZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0VBQ1osU0FBUztFQUNULFFBQVE7RUFDUixRQUFRO0VBQ1IsU0FBUztFQUNULG9DQUFvQztFQUNwQyxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFVBQVU7RUFLViw0QkFBNEI7QUFvR2hDO0FBcEhBO0VBa0JRLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsWUFBWTtFQUNaLE9BQU87RUFDUCxRQUFRO0VBQ1IsT0FBTztFQUNQLFNBQVM7RUFDVCxZQUFZO0FBc0dwQjtBQWxHQTtFQUNJLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsb0NBQW9DO0VBQ3BDLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFxR3BCO0FBMUdBO0VBT1EsbUJBQW1CO0VBQ25CLGVBQWU7QUF1R3ZCO0FBL0dBO0VBV1EsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQXdHeEI7QUFwR0E7RUFDSSxXQUFXO0VBQ1gsU0FBUztFQUNULGVBQWU7RUFDZixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsYUFBYTtBQXVHakI7QUFsSEE7RUFhUSxXQUFXO0VBQ1gsU0FBUztFQUNULFVBQVU7RUFDVixRQUFRO0FBeUdoQjtBQXpIQTtFQW1CUSxPQUFPO0VBQ1AsV0FBVztFQUNYLFFBQVE7RUFDUixZQUFZO0FBMEdwQjtBQWhJQTtFQXlCUSxPQUFPO0VBQ1AsV0FBVztFQUNYLFdBQVc7RUFDWCxTQUFTO0FBMkdqQjtBQXZJQTtFQStCUSxXQUFXO0FBNEduQjtBQTNJQTtFQWlDWSxlQUFlO0VBQ2YsaUJBQWlCO0FBOEc3QjtBQWhKQTtFQXVDWSxlRGxPUztBQytVckI7QUF4R0E7RUFDSSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQTJHdkI7QUF4R0E7RUFDSSxVQUFVO0VBQ1YsbUJBQW1CO0FBMkd2QjtBQXpHQTtFQUNJLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLFNBQVM7RUFDVCxNQUFNO0VBQ04sUUFBUTtFQUNSLE9BQU87RUFDUCxZQUFZO0VBQ1osOEJBQThCO0VBQzlCLGtCQUFrQjtFQUtsQiw0QkFBNEI7QUE0R2hDO0FBM0hBO0VBaUJRLFlBQVk7RUFDWixVQUFVO0VBQ1YsY0FBYztBQThHdEI7QUExR0E7RUFDSSxPQUFPO0VBQ1AsV0FBVztFQUNYLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osY0FBYztFQUNkLFVBQVU7RUFDVixZQUFZO0VBS1osNEJBQTRCO0FBNkdoQztBQTFHQTtFQUNJLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsVUFBVTtBQTZHZDtBQTFHQTtFQUNJLFNBQVM7QUE2R2I7QUF6R0E7RUFJZ0IsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQXlHcEM7QUE5R0E7RUFZZ0IsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQXNHcEM7QUFoR0E7O0VBRUksa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFtR3ZCO0FBaEdBO0VBQ0ksVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsTUFBTTtFQUNOLFdBQVc7RUFDWCxZQUFZO0VBQ1osVUFBVTtBQW1HZDtBQWhHQTtFQUNJLHNCQUFzQjtFQUN0QixvQkFBb0I7QUFtR3hCO0FBaEdBO0VBQ0ksV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsT0FBTztFQUNQLE1BQU07RUFDTixvQkFBb0I7QUFtR3hCO0FBaEdBO0VBQ0kseUJEM1ZpQjtBQzhickI7QUFoR0E7RUFDSSxvQkFBb0I7RUFDcEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxTQUFTO0VBQ1QsUUFBUTtFQUNSLGtCQUFrQjtFQUNsQixXQUFXO0FBbUdmO0FBaEdBO0VBQ0ksV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJENVdpQjtFQzZXakIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxRQUFRO0FBbUdaO0FBaEdBO0VBQ0ksY0RuWGlCO0FDc2RyQjtBQWpHQTtFQUNJLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsd0JBQXdCO0VBQ3hCLDZCQUE2QjtBQW9HakM7QUFsR0E7RUFDSSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixlQUFlO0FBcUduQjtBQWxHQTtFQUNJLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQXFHdEI7QUFsR0E7RUFDSSxVQUFVO0FBcUdkO0FBdEdBO0VBSVMsYUFDSjtBQXFHTDtBQW5HQztFQUVRLGFBQ0o7QUFvR0w7QUFqR0M7RUFDRyxvQkFBb0I7RUFDcEIseUJBQXlCO0FBb0c3QjtBQWxHQTtFQUVRLFVBQVU7QUFvR2xCO0FBdEdBO0VBS1EsVUFBVTtFQUNWLHFCQUFxQjtBQXFHN0I7QUFqR0E7RUFDSSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGVBQWU7RUFDZixzQ0FBc0M7RUFDdEMsV0FBVztFQUNYLDJCQUEyQjtBQW9HL0I7QUFuSEE7RUFpQlEscUJEbGJVO0VDbWJWLHlDQUE0QztFQUM1QyxjRHBiVTtBQzBoQmxCO0FBbEdBO0VBQ0ksWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGlCQUFpQjtBQXFHckI7QUE3R0E7RUFVUSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBdUd4QjtBQXJIQTtFQWlCUSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUF3R3hCO0FBckdBO0VBQ0ksV0FBVztFQUNYLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixlQUFlO0VBQ2Ysc0NBQXNDO0VBQ3RDLFdBQVc7RUFDWCwyQkFBMkI7QUF3Ry9CO0FBdkhBO0VBaUJRLHFCRGhlVTtFQ2llVix5Q0FBNEM7RUFDNUMsY0RsZVU7QUM0a0JsQjtBQXRHQTtFQUNJLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixpQkFBaUI7QUF5R3JCO0FBakhBO0VBVVEsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQTJHeEI7QUF6SEE7RUFpQlEsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBNEd4QjtBQXpHQTtFQUNJLFlBQVk7RUFDWixTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixlQUFlO0FBNEduQjtBQTFHQTtFQUNJLHNCQUFzQjtFQUN0QixpQkFBaUI7QUE2R3JCO0FBM0dFO0VBQ0Usc0JBQXNCO0FBOEcxQjtBQTVHRTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUErR3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9pbnN0aXR1dGUtZGV0YWlscy9pbnN0aXR1dGUtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRwdWxsLUw6IGxlZnQ7XG4kcHVsbC1SOiByaWdodDtcbiRwdWxsLW5vbmU6IG5vbmU7XG4kZnVsbC13aWR0aDogMTAwJTtcbiRib3JkZXItYm94OiBib3JkZXItYm94O1xuJGJvcmRlci1jb2xvcjogI2RlZWFlZTtcbiRiZy13aGl0ZTogI2ZmZjtcbiRlcnJvci1jb2xvcjogI2ZmMDAwMDtcbiRjb21tb24tYmx1ZTogIzAwODRmNjtcbiRwcmltYXJ5LWNvbG9yOiAjMzMzO1xuJGJvcmRlci1jb21tb246I2VhZWFlYjtcblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PWhlYWRlciBjb2xvcnM9PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiRoZWFkZXItYmc6IzAwNjBBMztcbiRoZWFkZXItYm9yZGVyOiNlYWVhZWI7XG4kbGVmdE1lbnVCZzojZmFmYWZhO1xuJGxlZnRNZW51SG92ZXJCZzojMDA4NGY2O1xuJGxlZnRNZW51VGV4dEhvdmVyQ29sb3I6I2ZmZjtcbiRyZWRCdG46I2Y0NDMzNjtcbiRib3JkZXJjY2M6I2NjYztcbiRsaWdodEJsdWU6I2VmZjdmZjtcbiR0YWJsZUhlYWRpbmdCZ0NvbG9yOiAjMDA0YTdlO1xuLnRhYmxlLWZvcm1hdC1maXJzdCB7XG4gICAgLnRhYmxlLXJlc3BvbnNpdmUge1xuICAgICAgICB0YWJsZSB7XG4gICAgICAgICAgICB0aCxcbiAgICAgICAgICAgIHRkIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aCB7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGJvZHkge1xuICAgICAgICAgICAgICAgIHRyIHtcbiAgICAgICAgICAgICAgICAgICAgdGQge1xuICAgICAgICAgICAgICAgICAgICAgICAgLmZpZWxkLWNoZWNrYm94LXdyYXBwZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaW5pdGlhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZvcm0tY2hlY2tib3gge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZm9ybS1jaGVja2JveCtsYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDdweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJjphZnRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5mYS10cmFzaC1vIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHJlZEJ0bjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi50YWJsZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIC5oZWFkaW5nLWNvbnRhaW5lciB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZTBlYWVjO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgICAgLmhlYWRpbmctaXRlbSB7XG4gICAgICAgIHdpZHRoOiAxMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICB9XG4gICAgLnZhbHVlLW91dGVyLWNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIG1pbi1oZWlnaHQ6IDUzdmg7XG4gICAgICBtYXgtaGVpZ2h0OiA1NHZoO1xuICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICAudmFsdWUtY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgcGFkZGluZzogNHB4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICAgICAgLnZhbHVlLWl0ZW0ge1xuICAgICAgICAgIHdpZHRoOiAxMCU7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IiwiQGltcG9ydCBcIi4vc3JjL2Fzc2V0cy9jc3MvY29tbW9uL3ZhcmlhYmxlcy5zY3NzXCI7XG4uc2V0dGluZy1mb290ZXIge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBib3R0b206IDAlO1xuICB3aWR0aDogODQuNSU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBsZWZ0OiAxNC41JTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjY2M7XG4gIG1hcmdpbjogMHB4O1xufVxuXG4uZ2VuZXJhbC1zZXR0aW5nIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgLyogd2lkdGg6IDcwJTsgKi9cbiAgICAvKiBtYXJnaW4tbGVmdDogMiU7ICovXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbn1cblxuLmFzc2lnbi13aWR0aHtcbiAgICB3aWR0aDo5NiU7XG59XG5cbi5zaG93LWxlZnR7XG4gICAgcGFkZGluZy1sZWZ0OiAyJTtcbn1cblxuLmhlYWRpbmctc2V0dGluZyB7XG4gICAgcGFkZGluZy10b3A6IDIlO1xuICAgIHBhZGRpbmctbGVmdDogMiU7XG59XG5cbi5zd2l0Y2gge1xuICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDIxcHg7XG59XG5cbi5zd2l0Y2ggaW5wdXQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zbGlkZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XG4gICAgdHJhbnNpdGlvbjogLjRzO1xufVxuXG4uc2xpZGVyOmJlZm9yZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIHdpZHRoOiAxNnB4O1xuICAgIGxlZnQ6IDRweDtcbiAgICBib3R0b206IDRweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcbiAgICB0cmFuc2l0aW9uOiAuNHM7XG4gICAgdG9wOjNweDtcbn1cblxuLnN3aXRjaC1uIGlucHV0OmNoZWNrZWQrLnNsaWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZGMztcbn1cblxuLnN3aXRjaC1uIGlucHV0OmZvY3VzKy5zbGlkZXIge1xuICAgIGJveC1zaGFkb3c6IDAgMCAxcHggIzIxOTZGMztcbn1cblxuLnN3aXRjaC1uIGlucHV0OmNoZWNrZWQrLnNsaWRlcjpiZWZvcmUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xufVxuXG4vKiBSb3VuZGVkIHNsaWRlcnMgKi9cblxuLnNsaWRlci5yb3VuZCB7XG4gICAgYm9yZGVyLXJhZGl1czogMzRweDtcbn1cblxuLm5ld0Rpc2FibGVkOmRpc2FibGVkIHtcbiAgICBiYWNrZ3JvdW5kOiAjZWZlZmVmICFpbXBvcnRhbnQ7XG4gICAgY3Vyc29yOiBuby1kcm9wO1xufVxuXG4ubmV3RGlzYWJsZWR7XG4gICAgd2lkdGg6NzUlO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBoZWlnaHQ6IDMwcHg7O1xufVxuXG4uc2xpZGVyLnJvdW5kOmJlZm9yZSB7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uaGVhZGluZy1zZXR0aW5nLW1haW4ge1xuICAgIG1hcmdpbjogMiUgMCUgMCUgMCVcbn1cblxuLm1haW4tc2V0dGluZyB7XG4gICAgbWFyZ2luOiAyJSAtMSUgMCUgMSU7XG59XG5cbi5taWRkbGUtc2VjdGlvbiB7XG4gICAgcGFkZGluZzogMSU7XG4gICAgd2lkdGg6IDk4JTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uc2hvd0RpdkNsYXNzIHtcbiAgICBkaXNwbGF5OiAnJztcbn1cblxuLmhpZGVEaXZDbGFzcyB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLmV4dHJhTWFyZ2luVGVuIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLy8vLy8vIFR1cm4gb2ZmIHNwaW5uZXJcbmlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcbmlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgIG1hcmdpbjogMDtcbn1cblxuLmJvcmRlckNsYXNzIHtcbiAgICBib3JkZXItdG9wOiAwLjFweCBzb2xpZCAjZjFmMWYxO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi8vLy9QT1AgVVAgQ1NTLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4ucG9wdXBXcmFwcGVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvdHRvbTogMDtcbiAgICB0b3A6IDBweDtcbiAgICByaWdodDogMDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyMzAsIDIzMCwgMjMwLCAwLjUpO1xuICAgIHotaW5kZXg6IDEwMDsgLy8gZGlzcGxheTogbm9uZTtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbjtcbiAgICAucG9wdXAge1xuICAgICAgICBtYXgtd2lkdGg6IDg1MHB4OyAvLyBtYXgtaGVpZ2h0OiAzNTBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHRvcDogNSU7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgbWFyZ2luOiBhdXRvOyAvLyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgfVxufVxuXG4ucG9wdXAtd3JhcHBlciB7XG4gICAgcGFkZGluZzogMjBweCAyMHB4OyAvLyBoZWlnaHQ6IDEwMCU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3gtc2hhZG93OiAxcHggOHB4IDIwcHggNXB4ICM5YzljOWM7XG4gICAgdHJhbnNpdGlvbjogdW5zZXQ7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBoMiB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG4gICAgaDQge1xuICAgICAgICBtYXJnaW46IDI1cHggMCAxNXB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cbn1cblxuLmNsb3NlUG9wdXAge1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIHRvcDogMTBweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiAyNnB4O1xuICAgIGhlaWdodDogMjZweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogM3B4O1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgJi5ib3R0b21SaWdodCB7XG4gICAgICAgIGJvdHRvbTogMnB4O1xuICAgICAgICB0b3A6IGF1dG87XG4gICAgICAgIGxlZnQ6IGF1dG87XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgIH1cbiAgICAmLnRvcExlZnQge1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogYXV0bztcbiAgICAgICAgdG9wOiAxcHg7XG4gICAgICAgIGJvdHRvbTogYXV0bztcbiAgICB9XG4gICAgJi5ib3R0b21MZWZ0IHtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICAgIGJvdHRvbTogMnB4O1xuICAgICAgICB0b3A6IGF1dG87XG4gICAgfVxuICAgIHN2ZyB7XG4gICAgICAgIHdpZHRoOiAxNnB4O1xuICAgICAgICAuY2xzLTEge1xuICAgICAgICAgICAgc3Ryb2tlOiAjYzFjMWMxO1xuICAgICAgICAgICAgc3Ryb2tlLXdpZHRoOiAycHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgJjpob3ZlciB7XG4gICAgICAgIC5jbHMtMSB7XG4gICAgICAgICAgICBzdHJva2U6ICRjb21tb24tYmx1ZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnBvcHVwLWNvbnRlbnQge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi5mYWRlSW4ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn0gLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Y3NzIGZvciBtb2IgcG9wdXBcbi5wb3B1cFdyYXBwZXJNb2Ige1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm90dG9tOiAwO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHotaW5kZXg6IDEwMDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuOyAvLyBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbjtcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xuICAgIC5jbG9zZVBvcHVwIHtcbiAgICAgICAgcmlnaHQ6IC0yNXB4O1xuICAgICAgICB0b3A6IC0yN3B4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG59XG5cbi5wb3B1cC1tb2Ige1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LWhlaWdodDogNzAlO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgcGFkZGluZzogMzBweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICB6LWluZGV4OiAxO1xuICAgIGJvdHRvbTogLTcwJTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbjtcbn1cblxuLnBvcHVwV3JhcHBlck1vYi5zaG93UG9wdXBNb2Ige1xuICAgIHotaW5kZXg6IDEwMDtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIG9wYWNpdHk6IDE7XG59XG5cbi5wb3B1cFdyYXBwZXJNb2Iuc2hvd1BvcHVwTW9iIC5wb3B1cC1tb2Ige1xuICAgIGJvdHRvbTogMDtcbn1cblxuLy8vLy8vXG50YWJsZSB7XG4gICAgdGhlYWQge1xuICAgICAgICB0ciB7XG4gICAgICAgICAgICB0aCB7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgdGJvZHkge1xuICAgICAgICB0ciB7XG4gICAgICAgICAgICB0ZCB7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5maWVsZC1jaGVja2JveC13cmFwcGVyLFxuLmZpZWxkLXJhZGlvLXdyYXBwZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmZpZWxkLXJhZGlvLXdyYXBwZXIgLmZvcm0tcmFkaW8ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICB6LWluZGV4OiAxO1xufVxuXG4uZmllbGQtcmFkaW8td3JhcHBlciAuZm9ybS1yYWRpbytsYWJlbCB7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xcztcbn1cblxuLmZpZWxkLXJhZGlvLXdyYXBwZXIgLmZvcm0tcmFkaW8rbGFiZWw6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHdpZHRoOiAxNnB4O1xuICAgIGhlaWdodDogMTZweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMXM7XG59XG5cbi5maWVsZC1yYWRpby13cmFwcGVyIC5mb3JtLXJhZGlvOmNoZWNrZWQrbGFiZWw6YWZ0ZXIge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICRjb21tb24tYmx1ZTtcbn1cblxuLmZpZWxkLXJhZGlvLXdyYXBwZXIgLmZvcm0tcmFkaW8rbGFiZWw6YmVmb3JlIHtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xcztcbiAgICB3aWR0aDogMXB4O1xuICAgIGhlaWdodDogMXB4O1xuICAgIGxlZnQ6IDlweDtcbiAgICB0b3A6IDlweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY29udGVudDogJyc7XG59XG5cbi5maWVsZC1yYWRpby13cmFwcGVyIC5mb3JtLXJhZGlvOmNoZWNrZWQrbGFiZWw6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICB3aWR0aDogMTBweDtcbiAgICBoZWlnaHQ6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogJGNvbW1vbi1ibHVlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBsZWZ0OiAzcHg7XG4gICAgdG9wOiAzcHg7XG59XG5cbi5maWVsZC1yYWRpby13cmFwcGVyIC5mb3JtLXJhZGlvOmNoZWNrZWQrbGFiZWwge1xuICAgIGNvbG9yOiAkY29tbW9uLWJsdWU7XG59XG4udGFibGVEYXRhQ29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XG59XG4udGFibGVWYWx1ZUNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDEzJTtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG5cbi5hZGRJUHtcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDA4NGY2O1xuICAgIGNvbG9yOiAjMDA4NGY2O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICAgIFxufVxuXG4uZGlzcGxheUNvbXAge1xuICAgIGhlaWdodDogMCU7XG4gICAgIC52aWV3LWNvbXAge31cbiAgICAgLmVkaXQtY29tcCB7XG4gICAgICAgICBkaXNwbGF5OiBub25lXG4gICAgIH1cbiB9XG4gLmVkaXRDb21wIHtcbiAgICAgLnZpZXctY29tcCB7XG4gICAgICAgICBkaXNwbGF5OiBub25lXG4gICAgIH1cbiAgICAgLmVkaXQtY29tcCB7fVxuIH1cbiAud2Via2l0Qm94e1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG59XG4uem9vbVRhYmxlIHtcbiAgICB0aHtcbiAgICAgICAgd2lkdGg6IDEwJTtcbiAgICB9XG4gICAgdGR7XG4gICAgICAgIHdpZHRoOiAxMCU7XG4gICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgICB9XG59XG5cbi5xSW5mb0ljb24ge1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAwcHggI2NjYyBpbnNldDtcbiAgICBjb2xvcjogIzg4ODtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XG4gICAgJjpob3ZlciB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJGhlYWRlci1iZztcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggMHB4ICRoZWFkZXItYmcgaW5zZXQ7XG4gICAgICAgIGNvbG9yOiAkaGVhZGVyLWJnO1xuICAgIH1cbn1cblxuLnRvb2x0aXAtYm94LWZpZWxkIHtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBtaW4taGVpZ2h0OiA0MXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgIHBhZGRpbmc6IDVweCA1cHg7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICYubGcge1xuICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDUwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBwYWRkaW5nOiA1cHggNXB4O1xuICAgIH1cbiAgICAmLnNtIHtcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBtaW4taGVpZ2h0OiA0MHB4O1xuICAgICAgICBwYWRkaW5nOiA1cHggNXB4O1xuICAgIH1cbn1cbi5xSW5mb0ljb24ge1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAwcHggI2NjYyBpbnNldDtcbiAgICBjb2xvcjogIzg4ODtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XG4gICAgJjpob3ZlciB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJGhlYWRlci1iZztcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggMHB4ICRoZWFkZXItYmcgaW5zZXQ7XG4gICAgICAgIGNvbG9yOiAkaGVhZGVyLWJnO1xuICAgIH1cbn1cblxuLnRvb2x0aXAtYm94LWZpZWxkIHtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBtaW4taGVpZ2h0OiA0MXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgIHBhZGRpbmc6IDVweCA1cHg7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICYubGcge1xuICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDUwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBwYWRkaW5nOiA1cHggNXB4O1xuICAgIH1cbiAgICAmLnNtIHtcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBtaW4taGVpZ2h0OiA0MHB4O1xuICAgICAgICBwYWRkaW5nOiA1cHggNXB4O1xuICAgIH1cbn1cbi5jbGVhckZpbGV7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIHdpZHRoOiAyJTtcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyOiAxcHggc29saWQ7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLmNrLWVkaXRvcl9fZWRpdGFibGVfaW5saW5lIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICB9XG4gIC5jay1lZGl0b3JfX2VkaXRhYmxle1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIH1cbiAgLmFubm91bmNlbWVudEltZyB7XG4gICAgcGFkZGluZzogMDtcbiAgICB3aWR0aDogNCU7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICB9Il19 */";
      /***/
    },

    /***/
    "./src/app/components/institute-details/institute-details.component.ts":
    /*!*****************************************************************************!*\
      !*** ./src/app/components/institute-details/institute-details.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: InstituteDetailsComponent */

    /***/
    function srcAppComponentsInstituteDetailsInstituteDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InstituteDetailsComponent", function () {
        return InstituteDetailsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../services/authenticator.service */
      "./src/app/services/authenticator.service.ts");
      /* harmony import */


      var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/common-service */
      "./src/app/services/common-service.ts");
      /* harmony import */


      var _services_institute_details_institute_details_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/institute-details/institute-details.service */
      "./src/app/services/institute-details/institute-details.service.ts");
      /* harmony import */


      var _services_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/http.service */
      "./src/app/services/http.service.ts");

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

      var InstituteDetailsComponent =
      /** @class */
      function () {
        var InstituteDetailsComponent = /*#__PURE__*/function () {
          function InstituteDetailsComponent(apiService, commonService, auth, httpService) {
            _classCallCheck(this, InstituteDetailsComponent);

            this.apiService = apiService;
            this.commonService = commonService;
            this.auth = auth;
            this.httpService = httpService;
            this.instituteLogoDetails = [];
            this.kycType = [];
            this.instituteOptions = [];
            this.instituteOptionDataSource = [];
            this.planDetail = [];
            this.planDetailDataSource = [];
            this.instDetails = {};
            this.showAllocationPopup = false;
            this.openPopUpName = '';
            this.smsAllocation = [];
            this.paymentTable = [];
            this.limitTable = [];
            this.storageInfo = {};
            this.showPrefix = false;
            this.createNewSlot = false;
            this.zoomDetails = [];
            this.zoomOBJ = {
              institute_id: sessionStorage.getItem('institute_id'),
              account_name: '',
              email_id: '',
              sdk_api_key: '',
              sdk_api_secret: '',
              jwt_access_token: '',
              jwt_api_key: '',
              jwt_api_secret: '',
              user_limit: '',
              enable_recording: '',
              enable_attendance: false
            };
            this.dividersObj = {
              0: true,
              1: true,
              2: true,
              3: true,
              4: true,
              5: true
            };
            this.proctur_live_recorded_session_download_visibilty = {
              student: '',
              openApp: '',
              teacher: '',
              admin: ''
            };
            this.proctur_live_recorded_session_view_visibility = {
              student: '',
              openApp: '',
              teacher: '',
              admin: ''
            };
            this.editorConf = {
              height: 150,
              menubar: false,
              branding: false,
              plugins: ['preview anchor', 'visualblocks code ', 'insertdatetime  table paste code  wordcount'],
              toolbar: 'undo redo  | bold italic backcolor | \
             | \ bullist numlist outdent indent'
            };
          }

          _createClass(InstituteDetailsComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.commonService.removeSelectionFromSideNav();
              this.updatePrefillData();
            }
          }, {
            key: "updatePrefillData",
            value: function updatePrefillData() {
              this.getInstituteDetails();
              this.getInstituteKYCDetails();
              this.getOptionDetailsFromServer();
              this.getPlanDetailsFromServer();
              this.getStorageInformation();
              this.getZoomDetails();
            }
          }, {
            key: "getInstituteDetails",
            value: function getInstituteDetails() {
              var _this = this;

              this.apiService.getInstituDetailsAll().subscribe(function (res) {
                _this.auth.hideLoader();

                _this.instituteDetailsAll = res;
                _this.instDetails = Object.assign({}, res);
                _this.singleDevice = _this.instDetails.single_device_login;

                if (_this.instDetails.is_student_displayId_manual == 0) {
                  _this.showPrefix = true;
                }

                if (_this.instDetails.enable_student_app_url == 1) {
                  _this.instDetails.enable_student_app_url = true;
                }

                _this.instDetails.announcement_image_status = 2;
                _this.announcement_image_url = _this.instDetails.announcement_image_url;
                _this.new_announcement_image_url = _this.instDetails.announcement_image_url + '?' + Math.random().toFixed(2);

                _this.fillTableCheckboxValue(_this.proctur_live_recorded_session_download_visibilty, _this.instDetails.proctur_live_recorded_session_download_visibilty);

                _this.fillTableCheckboxValue(_this.proctur_live_recorded_session_view_visibility, _this.instDetails.proctur_live_recorded_session_view_visibility);
              }, function (err) {
                _this.auth.hideLoader(); //console.log(err);


                _this.commonService.showErrorMessage('error', '', err.error.message);
              });
            }
          }, {
            key: "getInstituteKYCDetails",
            value: function getInstituteKYCDetails() {
              var _this2 = this;

              this.apiService.getKycTypeDetails().subscribe(function (res) {
                _this2.auth.hideLoader();

                _this2.kycType = res;
              }, function (err) {
                _this2.auth.hideLoader();

                _this2.commonService.showErrorMessage('error', '', err.error.message);
              });
            }
          }, {
            key: "getOptionDetailsFromServer",
            value: function getOptionDetailsFromServer() {
              var _this3 = this;

              this.apiService.getOptionDetails().subscribe(function (res) {
                _this3.auth.hideLoader();

                _this3.instituteOptionDataSource = res;
              }, function (err) {
                _this3.auth.hideLoader();

                _this3.commonService.showErrorMessage('error', '', err.error.message);
              });
            }
          }, {
            key: "getPlanDetailsFromServer",
            value: function getPlanDetailsFromServer() {
              var _this4 = this;

              this.apiService.getPlanDetails().subscribe(function (res) {
                _this4.auth.hideLoader();

                _this4.planDetailDataSource = res;
                _this4.instituteOptions = _this4.getOptionOfInstitute(_this4.instituteOptionDataSource);
                _this4.planDetail = _this4.getPlanOfInstitute(_this4.planDetailDataSource);
              }, function (err) {
                _this4.auth.hideLoader();

                _this4.commonService.showErrorMessage('error', '', err.error.message);
              });
            }
          }, {
            key: "updateAllDetails",
            value: function updateAllDetails() {
              var _this5 = this;

              var dataToSend = this.formatDataJsonToSend();

              if (dataToSend) {
                this.auth.showLoader();
                this.apiService.updateDetailsToServer(dataToSend).subscribe(function (res) {
                  _this5.auth.hideLoader();

                  _this5.getInstituteDetails();

                  _this5.commonService.showErrorMessage('success', '', 'Details updated successfully');
                }, function (err) {
                  _this5.auth.hideLoader();

                  _this5.commonService.showErrorMessage('error', '', err.error.message);
                });
              }
            }
          }, {
            key: "getPaymentDeatils",
            value: function getPaymentDeatils() {
              var _this6 = this;

              this.paymentTable = [];
              this.auth.showLoader();
              this.apiService.getPayementInfoFromServer().subscribe(function (res) {
                _this6.auth.hideLoader();

                _this6.paymentTable = res;
                _this6.showAllocationPopup = true;
                _this6.openPopUpName = "PaymentHistory";
              }, function (err) {
                _this6.auth.hideLoader();

                _this6.commonService.showErrorMessage('error', '', err.error.message);
              });
            }
          }, {
            key: "smsAllocationHistoryDeatils",
            value: function smsAllocationHistoryDeatils() {
              var _this7 = this;

              this.smsAllocation = [];
              this.auth.showLoader();
              this.apiService.getSmsInfoFromServer().subscribe(function (res) {
                _this7.auth.hideLoader();

                _this7.smsAllocation = res;
                _this7.showAllocationPopup = true;
                _this7.openPopUpName = "SMSHistory";
              }, function (err) {
                _this7.auth.hideLoader();

                _this7.commonService.showErrorMessage('error', '', err.error.message);
              });
            }
          }, {
            key: "downLoadLimitAllocationHistory",
            value: function downLoadLimitAllocationHistory() {
              var _this8 = this;

              this.limitTable = [];
              this.auth.showLoader();
              this.apiService.getDownloadLimitFromServer().subscribe(function (res) {
                _this8.auth.hideLoader();

                _this8.limitTable = res;
                _this8.showAllocationPopup = true;
                _this8.openPopUpName = "DownloadLimit";
              }, function (err) {
                _this8.auth.hideLoader(); //console.log(err);


                _this8.commonService.showErrorMessage('error', '', err.error.message);
              });
            }
          }, {
            key: "getStorageInformation",
            value: function getStorageInformation() {
              var _this9 = this;

              this.apiService.getStorageLimitFromServer().subscribe(function (res) {
                _this9.storageInfo = res;
                _this9.storageInfo.storage_allocated = _this9.storageInfo.storage_allocated;
              }, function (err) {
                _this9.auth.hideLoader(); //console.log(err);


                _this9.commonService.showErrorMessage('error', '', err.error.message);
              });
            }
          }, {
            key: "closeDeletePopup",
            value: function closeDeletePopup() {
              this.showAllocationPopup = false;
              this.openPopUpName = "";
            }
          }, {
            key: "changeKYCInformation",
            value: function changeKYCInformation(event) {
              for (var i = 0; i < this.kycType.length; i++) {
                if (this.kycType[i].data_key == event) {
                  this.instDetails.kyc_document_name = this.kycType[i].kyc_document_name;
                  this.instDetails.kyc_document = this.kycType[i].kyc_document;
                  this.instDetails.kyc_document_type = this.kycType[i].kyc_document_type.toString();
                } else {
                  this.instDetails.kyc_document_name = '';
                  this.instDetails.kyc_document = '';
                  this.instDetails.kyc_document_type = event;
                }
              }
            }
          }, {
            key: "formatDataJsonToSend",
            value: function formatDataJsonToSend() {
              var obj = {};
              obj.institute_header1 = this.instDetails.institute_header1;
              obj.institute_header2 = this.instDetails.institute_header2;
              obj.institute_header3 = this.instDetails.institute_header3;
              obj.institute_footer = this.instDetails.institute_footer;
              obj.fb_page_url = this.instDetails.fb_page_url;
              obj.website_url = this.instDetails.website_url;
              obj.youtube_url = this.instDetails.youtube_url;
              obj.whatsapp_url = this.instDetails.whatsapp_url;
              obj.instagram_url = this.instDetails.instagram_url;
              obj.linkedin_url = this.instDetails.linkedin_url;
              obj.qna_doubt_url = this.instDetails.qna_doubt_url;
              obj.institute_short_code = this.instDetails.institute_short_code;
              obj.tag_line = this.instDetails.tag_line;
              obj.sms_shortcode = this.instDetails.sms_shortcode;
              obj.about_us_text = this.instDetails.about_us_text;
              obj.student_ios_app_url = this.instDetails.student_ios_app_url;
              obj.student_app_url = this.instDetails.student_app_url;
              obj.institute_testprep_logo = this.instDetails.institute_testprep_logo;
              obj.announcement = this.instDetails.announcement;
              obj.owner_name = this.instDetails.owner_name;
              obj.owner_primary_email = this.instDetails.owner_primary_email;
              obj.owner_secondary_email = this.instDetails.owner_secondary_email;
              obj.owner_primary_phone = this.instDetails.owner_primary_phone;
              obj.admin_name = this.instDetails.admin_name;
              obj.single_device_login = this.instDetails.single_device_login;
              obj.feedback_url = this.instDetails.feedback_url;
              obj.help_url = this.instDetails.help_url;
              obj.privacy_policy_url = this.instDetails.privacy_policy_url;
              obj.terms_and_condition_url = this.instDetails.terms_and_condition_url;
              obj.jd_contract_id = this.instDetails.jd_contract_id;
              obj.notification_email_sender_id = this.instDetails.notification_email_sender_id;
              obj.email_sender_id = this.instDetails.email_sender_id;
              obj.form_url = this.instDetails.form_url;
              obj.blog_url = this.instDetails.blog_url;
              obj.copyright_url = this.instDetails.copyright_url;
              obj.twitter_url = this.instDetails.twitter_url;

              if (this.instDetails.eod_report_multiple_mobile && this.instDetails.eod_report_multiple_mobile != '' && !this.checkContactNoPattern(this.instDetails.eod_report_multiple_mobile)) {
                this.commonService.showErrorMessage('error', '', 'Please check contact number');
                return;
              }

              obj.eod_report_multiple_mobile = this.instDetails.eod_report_multiple_mobile;
              obj.eod_report_multiple_emails = this.instDetails.eod_report_multiple_emails;
              obj.is_student_displayId_manual = 1;

              if (this.showPrefix) {
                obj.is_student_displayId_manual = 0;
              }

              obj.logo_url = this.instDetails.logo_url;
              obj.institute_logo = this.institute_logo;

              if (this.instDetails.announcement_image_url == this.announcement_image_url && this.instDetails.announcement_image_status == 2) {
                this.announcement_image_url = '';
              }

              obj.announcement_image_status = this.instDetails.announcement_image_status;
              obj.announcement_image_url = this.announcement_image_url;
              obj.proctur_live_recorded_session_download_visibilty = this.getSumOfTableField(this.proctur_live_recorded_session_download_visibilty);
              obj.proctur_live_recorded_session_view_visibility = this.getSumOfTableField(this.proctur_live_recorded_session_view_visibility);
              obj.share_app_url = this.instDetails.share_app_url;
              obj.share_ios_app_url = this.instDetails.share_ios_app_url; //Added by Ashwini Gupta for Share App IOS Url 1254

              if (!this.validatePhoneNumber(this.instDetails.admin_primary_phone)) {
                this.commonService.showErrorMessage('error', '', 'Please check contact number');
                return;
              }

              if (!this.validateCaseSensitiveEmail(this.instDetails.admin_primary_email)) {
                this.commonService.showErrorMessage('error', '', 'Please check email address');
                return;
              }

              obj.alternate_institute_primary_contact_numbers = this.instDetails.alternate_institute_primary_contact_numbers;

              if (this.instDetails.alternate_institute_primary_contact_numbers != null && this.instDetails.alternate_institute_primary_contact_numbers != 'NULL' && this.instDetails.alternate_institute_primary_contact_numbers != '') {
                if (!this.checkContactNoPattern(this.instDetails.alternate_institute_primary_contact_numbers)) {
                  this.commonService.showErrorMessage('error', '', 'Please enter numbers only');
                  return false;
                }
              }

              obj.admin_primary_phone = this.instDetails.admin_primary_phone;
              obj.admin_primary_email = this.instDetails.admin_primary_email;

              if (this.instDetails.student_id_type == null) {
                obj.student_id_type = "Automatic";
              } else {
                obj.student_id_type = this.instDetails.student_id_type;
              }

              if (this.instDetails.student_id_type == "Manual") {
                obj.student_id_prefix = '';
              } else {
                obj.student_id_prefix = this.instDetails.student_id_prefix;
              } //Please check this case


              if (this.instDetails.gst_in == "" || this.instDetails.gst_in == null) {
                obj.gst_in = '';
              } else {
                obj.gst_in = this.instDetails.gst_in;
              }

              obj.enable_faculty_all_file_access = 0;

              if (this.instDetails.enable_faculty_all_file_access) {
                obj.enable_faculty_all_file_access = 1;
              }

              obj.kyc_document_name = this.instDetails.kyc_document_name;
              obj.kyc_document = this.instDetails.kyc_document;
              obj.kyc_document_type = this.instDetails.kyc_document_type;
              obj.distinct_device_login = this.instDetails.distinct_device_login;
              this.instDetails.enable_student_app_url ? obj.enable_student_app_url = 1 : obj.enable_student_app_url = 0;
              return obj;
            }
          }, {
            key: "checkInputType",
            value: function checkInputType(event) {
              if (!event.target.checked) {
                this.showPrefix = true;
                this.instDetails.student_id_type = "Manual";
              } else {
                this.showPrefix = false;
                this.instDetails.student_id_type = "Automatic";
              }
            }
          }, {
            key: "checkSingleDevice",
            value: function checkSingleDevice(event) {
              console.log(event);
              console.log(this.singleDevice);

              if (this.singleDevice) {
                this.instDetails.single_device_login = false;
              } else {
                this.instDetails.single_device_login = true;
              }
            } //check contact no pattern (comma seperator)

          }, {
            key: "checkContactNoPattern",
            value: function checkContactNoPattern(pattern) {
              var regExPattern = /^[0-9]+(,[0-9]+)*$/;

              if (!regExPattern.test(pattern)) {
                return false;
              } else {
                return true;
              }
            }
          }, {
            key: "getPlanOfInstitute",
            value: function getPlanOfInstitute(data) {
              var obj = [];

              for (var i = 0; i < data.length; i++) {
                if (data[i].id == this.instDetails.plan_id) {
                  obj.push(data[i]);
                }
              }

              return obj;
            }
          }, {
            key: "getOptionOfInstitute",
            value: function getOptionOfInstitute(data) {
              var obj = [];
              var arr = [];

              if (this.instDetails.hasOwnProperty('option_selected_id')) {
                if (this.instDetails.option_selected_id != null && this.instDetails.option_selected_id != "") {
                  arr = this.instDetails.option_selected_id.split(',');

                  for (var i = 0; i < data.length; i++) {
                    for (var j = 0; j < arr.length; j++) {
                      if (data[i].id == arr[i]) {
                        obj.push(data[i]);
                      }
                    }
                  }
                } else {
                  return obj;
                }
              }

              return obj;
            }
          }, {
            key: "toggleUpAndDownButton",
            value: function toggleUpAndDownButton(index) {
              if (this.dividersObj[index] == true) {
                this.dividersObj[index] = false;
              } else {
                this.dividersObj[index] = true;
              }
            }
          }, {
            key: "uploadDocument",
            value: function uploadDocument() {
              this.uploadDoc.nativeElement.click();
            }
          }, {
            key: "validatePhoneNumber",
            value: function validatePhoneNumber(data) {
              var check = false;

              if (data != "" && data != null) {
                if (isNaN(data) == false && data.length == 10) {
                  check = true;
                } else {
                  check = false;
                }

                return check;
              } else {
                return true;
              }
            }
          }, {
            key: "validateCaseSensitiveEmail",
            value: function validateCaseSensitiveEmail(email) {
              if (email != '' && email != null) {
                var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{1,9})+$/;

                if (reg.test(email)) {
                  return true;
                } else {
                  return false;
                }
              } else {
                return true;
              }
            }
          }, {
            key: "getZoomDetails",
            value: function getZoomDetails() {
              var _this10 = this;

              this.auth.showLoader();
              this.httpService.getData('/api/v1/meeting_manager/getAllZoomAccount/' + sessionStorage.getItem('institute_id')).subscribe(function (res) {
                _this10.auth.hideLoader();

                _this10.zoomDetails = res.result;
              }, function (err) {
                _this10.auth.hideLoader();

                _this10.commonService.showErrorMessage('error', '', err.error.message);
              });
            }
          }, {
            key: "validateZoomDetails",
            value: function validateZoomDetails(obj) {
              var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{1,9})+$/;

              if (obj.account_name.trim() != '') {
                if (obj.email_id.trim() != '' && reg.test(obj.email_id)) {
                  if (obj.sdk_api_key != '' && obj.sdk_api_key.trim() != '') {
                    if (obj.sdk_api_secret != '' && obj.sdk_api_secret.trim() != '') {
                      if (obj.jwt_access_token != '' && obj.jwt_access_token != null && obj.jwt_access_token.trim() != '') {
                        if (obj.jwt_api_key != '' && obj.jwt_api_key != null && obj.jwt_api_key.trim() != '') {
                          if (obj.jwt_api_secret != '' && obj.jwt_api_secret != null && obj.jwt_api_secret.trim() != '') {
                            if (obj.user_limit != '' && obj.user_limit > 0) {
                              return true;
                            } else {
                              this.commonService.showErrorMessage('error', '', 'User limit should be greater than 0');
                            }
                          } else {
                            this.commonService.showErrorMessage('error', '', 'Please enter JWT API Secret Key');
                            return false;
                          }
                        } else {
                          this.commonService.showErrorMessage('error', '', 'Please enter JWT API key');
                          return false;
                        }
                      } else {
                        this.commonService.showErrorMessage('error', '', 'Please enter JWT Access Token');
                        return false;
                      }
                    } else {
                      this.commonService.showErrorMessage('error', '', 'Please enter SDK secret key');
                      return false;
                    }
                  } else {
                    this.commonService.showErrorMessage('error', '', 'Please enter SDK API key');
                    return false;
                  }
                } else {
                  this.commonService.showErrorMessage('error', '', 'Please enter valid Email ID');
                  return false;
                }
              } else {
                this.commonService.showErrorMessage('error', '', 'Please enter Account Name');
                return false;
              }
            }
          }, {
            key: "updateZoom",
            value: function updateZoom(obj) {
              var _this11 = this;

              if (this.validateZoomDetails(obj)) {
                this.auth.showLoader();
                this.httpService.putData('/api/v1/meeting_manager/updateZoomAccount', obj).subscribe(function (res) {
                  _this11.auth.hideLoader();

                  _this11.commonService.showErrorMessage('success', '', 'Updated successfully');

                  _this11.getZoomDetails();
                }, function (err) {
                  _this11.auth.hideLoader();

                  _this11.commonService.showErrorMessage('error', '', err.error.message);
                });
              }
            }
          }, {
            key: "deleteZoom",
            value: function deleteZoom(id) {
              var _this12 = this;

              if (confirm('Do you really want to delete?')) {
                this.auth.showLoader();
                this.httpService.deleteData('/api/v1/meeting_manager/deleteZoomAccount/' + id, '').subscribe(function (res) {
                  _this12.auth.hideLoader();

                  _this12.commonService.showErrorMessage('success', '', 'Deleted successfully');

                  _this12.getZoomDetails();
                }, function (err) {
                  _this12.auth.hideLoader();

                  _this12.commonService.showErrorMessage('error', '', err.error.message);
                });
              }
            }
          }, {
            key: "editZoom",
            value: function editZoom(id) {
              if (document.getElementById(("data" + id).toString()).classList) {
                document.getElementById(("data" + id).toString()).classList.remove('displayComp');
                document.getElementById(("data" + id).toString()).classList.add('editComp');
              }
            }
          }, {
            key: "cancelRow",
            value: function cancelRow(id) {
              if (document.getElementById(("data" + id).toString()).classList) {
                document.getElementById(("data" + id).toString()).classList.remove('editComp');
                document.getElementById(("data" + id).toString()).classList.add('displayComp');
              }

              this.getZoomDetails();
            }
          }, {
            key: "ClearZoomJSON",
            value: function ClearZoomJSON() {
              this.zoomOBJ = {
                institute_id: sessionStorage.getItem('institute_id'),
                email_id: '',
                account_name: '',
                sdk_api_key: '',
                sdk_api_secret: '',
                jwt_access_token: '',
                jwt_api_key: '',
                jwt_api_secret: '',
                user_limit: '',
                enable_recording: '',
                enable_attendance: false
              };
            }
          }, {
            key: "saveZoomDetails",
            value: function saveZoomDetails() {
              var _this13 = this;

              if (this.validateZoomDetails(this.zoomOBJ)) {
                this.auth.showLoader();
                this.httpService.postData('/api/v1/meeting_manager/createZoomAccount', this.zoomOBJ).subscribe(function (res) {
                  _this13.auth.hideLoader();

                  _this13.commonService.showErrorMessage('success', '', 'Created successfully');

                  _this13.getZoomDetails();

                  _this13.zoomOBJ = {
                    institute_id: sessionStorage.getItem('institute_id'),
                    email_id: '',
                    account_name: '',
                    sdk_api_key: '',
                    sdk_api_secret: '',
                    jwt_access_token: '',
                    jwt_api_key: '',
                    jwt_api_secret: '',
                    user_limit: '',
                    enable_recording: '',
                    enable_attendance: false
                  };
                }, function (err) {
                  _this13.auth.hideLoader();

                  _this13.commonService.showErrorMessage('error', '', err.error.message);
                });
              }
            }
          }, {
            key: "getSumOfTableField",
            value: function getSumOfTableField(data) {
              var total = 0;
              var keys = Object.keys(data);

              for (var i = 0; i < keys.length; i++) {
                switch (keys[i]) {
                  case 'student':
                    {
                      total = data.student == true ? total + 2 : total;
                      break;
                    }

                  case 'parent':
                    {
                      total = data.parent == true ? total + 4 : total;
                      break;
                    }

                  case 'teacher':
                    {
                      total = data.teacher == true ? total + 8 : total;
                      break;
                    }

                  case 'admin':
                    {
                      total = data.admin == true ? total + 16 : total;
                      break;
                    }

                  case 'gaurdian':
                    {
                      total = data.gaurdian == true ? total + 32 : total;
                      break;
                    }

                  case 'openApp':
                    {
                      total = data.openApp == true ? total + 64 : total;
                      break;
                    }
                }
              }

              return total;
            }
          }, {
            key: "fillTableCheckboxValue",
            value: function fillTableCheckboxValue(dataJSON, res) {
              if (res) {
                res = parseInt(res);

                if (res > 0) {
                  var count = 1;
                  var i = 2;

                  while (i != res) {
                    i = i + 2;
                    count++;
                  }

                  var binaryConversion = count.toString(2);
                  var binaryArray = [0, 0, 0, 0, 0, 0];
                  var k = 0;

                  for (var p = binaryConversion.length - 1; p >= 0; p--) {
                    binaryArray[k] = parseInt(binaryConversion[p]);
                    k++;
                  }

                  if (dataJSON.hasOwnProperty('student')) {
                    dataJSON.student = binaryArray[0] == 1 ? true : false;
                  }

                  if (dataJSON.hasOwnProperty('parent')) {
                    dataJSON.parent = binaryArray[1] == 1 ? true : false;
                  }

                  if (dataJSON.hasOwnProperty('teacher')) {
                    dataJSON.teacher = binaryArray[2] == 1 ? true : false;
                  }

                  if (dataJSON.hasOwnProperty('admin')) {
                    dataJSON.admin = binaryArray[3] == 1 ? true : false;
                  }

                  if (dataJSON.hasOwnProperty('openApp')) {
                    dataJSON.openApp = binaryArray[5] == 1 ? true : false;
                  }
                }
              }
            }
          }, {
            key: "file",
            value: function file(event) {
              var file = event.target.files[0];
              var fileData = this.readFile(file);
            }
          }, {
            key: "uploadFile",
            value: function uploadFile(event) {
              var _this14 = this;

              var file = event.target.files[0]; // this.instDetails.announcement_image_url = this.readFile(file);

              var reader = new FileReader();

              if (file) {
                reader.readAsDataURL(file);

                reader.onloadend = function () {
                  _this14.announcement_image_url = reader.result.split(',')[1];

                  if ((_this14.instDetails.announcement_image_url == null || _this14.instDetails.announcement_image_url == '') && _this14.announcement_image_url != '') {
                    _this14.instDetails.announcement_image_status = 1;
                  }

                  return reader.result.split(',')[1];
                };
              }
            }
          }, {
            key: "readFile",
            value: function readFile(file) {
              var _this15 = this;

              console.log(file);
              var reader = new FileReader();

              if (file) {
                reader.readAsDataURL(file);

                reader.onloadend = function () {
                  _this15.institute_logo = reader.result.split(',')[1];
                  return reader.result.split(',')[1];
                };
              }
            }
          }, {
            key: "clearFile",
            value: function clearFile() {
              this.institute_logo = '';
              this.instDetails.institute_logo = '';
            }
          }, {
            key: "clearAnnouncementFile",
            value: function clearAnnouncementFile() {
              this.instDetails.announcement_image_status = 3; // this.announcement_image_url = '';

              this.instDetails.announcement_image_url = '';
            }
          }]);

          return InstituteDetailsComponent;
        }();

        InstituteDetailsComponent.ctorParameters = function () {
          return [{
            type: _services_institute_details_institute_details_service__WEBPACK_IMPORTED_MODULE_3__["InstituteDetailService"]
          }, {
            type: _services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonServiceFactory"]
          }, {
            type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticatorService"]
          }, {
            type: _services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]
          }];
        };

        InstituteDetailsComponent.propDecorators = {
          uploadDoc: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['idUploadDoc', {
              "static": false
            }]
          }]
        };
        InstituteDetailsComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
          selector: 'app-institute-details',
          template: __importDefault(__webpack_require__(
          /*! raw-loader!./institute-details.component.html */
          "./node_modules/raw-loader/dist/cjs.js!./src/app/components/institute-details/institute-details.component.html"))["default"],
          styles: [__importDefault(__webpack_require__(
          /*! ./institute-details.component.scss */
          "./src/app/components/institute-details/institute-details.component.scss"))["default"]]
        }), __metadata("design:paramtypes", [_services_institute_details_institute_details_service__WEBPACK_IMPORTED_MODULE_3__["InstituteDetailService"], _services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonServiceFactory"], _services_authenticator_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticatorService"], _services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]])], InstituteDetailsComponent);
        return InstituteDetailsComponent;
      }();
      /***/

    },

    /***/
    "./src/app/components/institute-details/institute-details.module.ts":
    /*!**************************************************************************!*\
      !*** ./src/app/components/institute-details/institute-details.module.ts ***!
      \**************************************************************************/

    /*! exports provided: InstituteDetailsModule */

    /***/
    function srcAppComponentsInstituteDetailsInstituteDetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InstituteDetailsModule", function () {
        return InstituteDetailsModule;
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


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../shared/shared.module */
      "./src/app/components/shared/shared.module.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _institute_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./institute-details.component */
      "./src/app/components/institute-details/institute-details.component.ts");
      /* harmony import */


      var _services_institute_details_institute_details_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/institute-details/institute-details.service */
      "./src/app/services/institute-details/institute-details.service.ts");
      /* harmony import */


      var _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @tinymce/tinymce-angular */
      "./node_modules/@tinymce/tinymce-angular/__ivy_ngcc__/fesm2015/tinymce-tinymce-angular.js");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var InstituteDetailsModule =
      /** @class */
      function () {
        var InstituteDetailsModule = function InstituteDetailsModule() {
          _classCallCheck(this, InstituteDetailsModule);
        };

        InstituteDetailsModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
            path: '',
            component: _institute_details_component__WEBPACK_IMPORTED_MODULE_4__["InstituteDetailsComponent"],
            pathMatch: 'prefix'
          }]), _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_6__["EditorModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          declarations: [_institute_details_component__WEBPACK_IMPORTED_MODULE_4__["InstituteDetailsComponent"]],
          providers: [_services_institute_details_institute_details_service__WEBPACK_IMPORTED_MODULE_5__["InstituteDetailService"]]
        })], InstituteDetailsModule);
        return InstituteDetailsModule;
      }();
      /***/

    },

    /***/
    "./src/app/services/institute-details/institute-details.service.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/services/institute-details/institute-details.service.ts ***!
      \*************************************************************************/

    /*! exports provided: InstituteDetailService */

    /***/
    function srcAppServicesInstituteDetailsInstituteDetailsServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InstituteDetailService", function () {
        return InstituteDetailService;
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

      var InstituteDetailService =
      /** @class */
      function () {
        var InstituteDetailService = /*#__PURE__*/function () {
          function InstituteDetailService(http, auth) {
            var _this16 = this;

            _classCallCheck(this, InstituteDetailService);

            this.http = http;
            this.auth = auth;
            this.baseURL = "";
            this.auth.currentAuthKey.subscribe(function (key) {
              _this16.Authorization = key;
              _this16.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Authorization": _this16.Authorization
              });
            });
            this.auth.currentInstituteId.subscribe(function (id) {
              _this16.institute_id = id;
            });
            this.baseURL = this.auth.getBaseUrl();
          }

          _createClass(InstituteDetailService, [{
            key: "successCallback",
            value: function successCallback(res) {
              return res;
            }
          }, {
            key: "errorCallBack",
            value: function errorCallBack(error) {
              return error;
            }
          }, {
            key: "getInstituDetailsAll",
            value: function getInstituDetailsAll() {
              var url = this.baseURL + "/api/v1/institutes/" + this.institute_id;
              return this.http.get(url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(this.successCallback, this.errorCallBack));
            }
          }, {
            key: "getInstituteLogoDetailsFromServer",
            value: function getInstituteLogoDetailsFromServer() {
              var url = this.baseURL + "/api/v1/institutes/getlogo/" + this.institute_id;
              return this.http.get(url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(this.successCallback, this.errorCallBack));
            }
          }, {
            key: "getSubBranchDetails",
            value: function getSubBranchDetails() {
              var url = this.baseURL + "/api/v1/institutes/all/subBranches/" + this.institute_id;
              return this.http.get(url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(this.successCallback, this.errorCallBack));
            }
          }, {
            key: "getPlanDetails",
            value: function getPlanDetails() {
              var url = this.baseURL + "/api/v1/proctur/getAllPlans";
              return this.http.get(url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(this.successCallback, this.errorCallBack));
            }
          }, {
            key: "getOptionDetails",
            value: function getOptionDetails() {
              var url = this.baseURL + "/api/v1/proctur/getAllOptions";
              return this.http.get(url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(this.successCallback, this.errorCallBack));
            }
          }, {
            key: "getKycTypeDetails",
            value: function getKycTypeDetails() {
              var url = this.baseURL + "/api/v1/masterData/type/KYC_DOCUMENT_TYPE";
              return this.http.get(url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(this.successCallback, this.errorCallBack));
            }
          }, {
            key: "updateDetailsToServer",
            value: function updateDetailsToServer(data) {
              data.institute_id = this.institute_id;
              var url = this.baseURL + "/api/v1/institutes/my-account-update/" + this.institute_id;
              return this.http.put(url, data, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(this.successCallback, this.errorCallBack));
            }
          }, {
            key: "getPayementInfoFromServer",
            value: function getPayementInfoFromServer() {
              var data = {
                inst_id: this.institute_id
              };
              var url = this.baseURL + "/api/v1/institute/payment/getReport/";
              return this.http.post(url, data, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(this.successCallback, this.errorCallBack));
            }
          }, {
            key: "getSmsInfoFromServer",
            value: function getSmsInfoFromServer() {
              var data = {
                institution_id: this.institute_id
              };
              var url = this.baseURL + "/api/v1/institute/SMS/transaction/getReport";
              return this.http.post(url, data, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(this.successCallback, this.errorCallBack));
            }
          }, {
            key: "getDownloadLimitFromServer",
            value: function getDownloadLimitFromServer() {
              var data = {
                institution_id: this.institute_id
              };
              var url = this.baseURL + "/api/v1/institute/download_limit/transaction/getReport";
              return this.http.post(url, data, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(this.successCallback, this.errorCallBack));
            }
          }, {
            key: "getStorageLimitFromServer",
            value: function getStorageLimitFromServer() {
              var url = this.baseURL + "/api/v1/instFileSystem/getUsedSpace/" + this.institute_id;
              return this.http.get(url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(this.successCallback, this.errorCallBack));
            }
          }]);

          return InstituteDetailService;
        }();

        InstituteDetailService.ctorParameters = function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }, {
            type: _authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"]
          }];
        };

        InstituteDetailService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"]])], InstituteDetailService);
        return InstituteDetailService;
      }();
      /***/

    }
  }]);
})();
//# sourceMappingURL=app-components-institute-details-institute-details-module-es5.js.map