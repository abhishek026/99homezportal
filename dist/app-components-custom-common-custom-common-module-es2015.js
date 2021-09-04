(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-components-custom-common-custom-common-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/custom-common/create-custom-comp/create-custom-comp.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/custom-common/create-custom-comp/create-custom-comp.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"clearFix\" id=\"enquiryList\">\n  <section class=\"middle-top clearFix custom-comp-header\">\n    <div class=\"row\">\n      <h1 class=\"pull-left\" style=\"font-size: 14px;padding-top:10px \">\n        Manage Form Field (On Both)\n      </h1>\n    </div>\n  </section>\n\n  <section class=\"middle-main clearFix\">\n    <div class=\"row\">\n      <div class=\"clearFix add-edit\">\n        <a (click)=\"toggleNewComponentVisisbility('Add')\">\n          <i id=\"addComponent-icon\" style=\"border:none;\">+</i>\n          <span class=\"txt_font\">Add New Form Field</span>\n        </a>\n      </div>\n    </div>\n    <div class=\"row\" style=\"margin-top:12px\">\n      <div class=\"c-lg-4\">\n        <h4> <span class=\"txt_font\" style=\"font-weight: 600\">Total Count</span>\n          &nbsp;:&nbsp;{{userCreatedComponent.length}}</h4>\n      </div>\n      <div class=\"c-lg-4\"></div>\n      <div class=\"c-lg-4\" class=\"txt_font\">\n        <button class=\"btn pull-right\" style=\"font-size: 12px\" [routerLink]=\"['../customizedOnly']\">Student Form\n          Fields</button>\n      </div>\n    </div>\n\n\n    <!-- Custom Component Table Here -->\n    <div class=\"custom-comp-tablewrapper\">\n      <div class=\"table-responsive\">\n        <table>\n          <thead>\n            <tr>\n              <th>Label</th>\n              <th>Type</th>\n              <th>Show On Student</th>\n              <th>Is Required</th>\n              <th>Is Searchable</th>\n              <th>Sequence</th>\n              <th>Max Length</th>\n              <th>Default Value</th>\n              <th>Is External</th>\n              <th></th>\n            </tr>\n          </thead>\n\n          <tbody>\n\n            <tr *ngFor=\"let comp of userCreatedComponent\">\n\n              <td>{{comp.label}}</td>\n\n              <td>{{comp.type|checkBoxConverter}}</td>\n\n              <td>{{comp.on_both}}</td>\n\n              <td>{{comp.is_required}}</td>\n\n              <td>{{comp.is_searchable}}</td>\n\n              <td>{{comp.sequence_number}}</td>\n\n              <td>{{comp.comp_length}}</td>\n\n              <td>{{comp.defaultValue}}</td>\n\n              <td>{{comp.is_external}}</td>\n\n              <td class=\"custom-table-action\">\n                <ul>\n                  <li>\n                    <i class=\"fa fa-pencil\" style=\"color:#1283f4;\" aria-hidden=\"true\" (click)=\"editRow(comp)\"></i>\n                  </li>\n                  <li>\n                    <i class=\"fa fa-trash\" style=\"color:#fa3145;\" aria-hidden=\"true\" (click)=\"deleteRow(comp)\"></i>\n                  </li>\n                </ul>\n              </td>\n            </tr>\n            <tr *ngIf=\"(!isRippleLoad) &&(!userCreatedComponent.length)\">\n              <td class=\"no_data_css\" colspan=\"10\">No Data Found</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n\n  </section>\n\n  <proctur-popup [sizeWidth]=\"'large'\" *ngIf=\"isEdit=='Add'||isEdit=='Edit'\">\n\n    <span class=\"closePopup pos-abs fbold show\" (click)=\"cancelRow()\" close-button>\n      <svg class=\"artdeco-icon\" focusable=\"false\" height=\"24px\" preserveAspectRatio=\"xMinYMin meet\" viewBox=\"0 0 24 24\"\n        width=\"24px\" x=\"0\" y=\"0\">\n        <path class=\"large-icon\"\n          d=\"M20,5.32L13.32,12,20,18.68,18.66,20,12,13.33,5.34,20,4,18.68,10.68,12,4,5.32,5.32,4,12,10.69,18.68,4Z\"\n          style=\"fill: currentColor\"></path>\n      </svg>\n    </span>\n\n    <h2 popup-header>{{isEdit}} Field</h2>\n\n    <div class=\"row updatecomponent-wrapper\" popup-content>\n\n      <div class=\"c-lg-4\">\n        <div class=\"field-wrapper\" [ngClass]=\"{'has-value': editCustomComponentForm.label != ''}\">\n          <label for=\"label\">Label\n            <span class=\"text-danger\">*</span>\n          </label>\n          <input type=\"text\" class=\"form-ctrl\" [(ngModel)]=\"editCustomComponentForm.label\" name=\"label\">\n\n        </div>\n      </div>\n\n      <div class=\"c-lg-4\">\n        <div class=\"field-wrapper\" [ngClass]=\"{'has-value': editCustomComponentForm.type != '' }\">\n          <label for=\"opt.data_value\">Type\n            <span class=\"text-danger\">*</span>\n          </label>\n          <select id=\"opt.data_value\" class=\"form-ctrl\" (ngModelChange)=\"checkValuetype($event)\"\n            [(ngModel)]=\"editCustomComponentForm.type\" name=\"opt.data_value\">\n            <option value=\"\"></option>\n            <option *ngFor=\"let opt of componentShell\" [value]=\"opt.data_key\">\n              {{opt.data_value}}\n            </option>\n          </select>\n\n        </div>\n      </div>\n\n      <div class=\"c-lg-4\">\n        <div class=\"field-wrapper\" [ngClass]=\"{'has-value': editCustomComponentForm.prefilled_data != ''}\">\n          <label for=\"prefilledData\">Prefilled Data (Non-Empty And Separated By ,)</label>\n          <input type=\"text\" class=\"form-ctrl\" [(ngModel)]=\"editCustomComponentForm.prefilled_data\" id=\"prefilledData\"\n            name=\"prefilledData\">\n\n        </div>\n      </div>\n\n      <div class=\"c-lg-4\">\n        <div class=\"field-wrapper\" [ngClass]=\"{'has-value': editCustomComponentForm.description != ''}\">\n          <label for=\"description\">Description</label>\n          <input type=\"text\" class=\"form-ctrl\" [(ngModel)]=\"editCustomComponentForm.description\" name=\"description\"\n            id=\"description\">\n\n        </div>\n      </div>\n\n      <div class=\"c-lg-4\">\n        <div class=\"field-wrapper\" [ngClass]=\"{'has-value': editCustomComponentForm.on_both != ''}\">\n          <label for=\"onboth\">Show On Student</label>\n          <select id=\"onboth\" class=\"form-ctrl\" name=\"onboth\" [(ngModel)]=\"editCustomComponentForm.on_both\">\n            <option value=\"Y\">Yes</option>\n            <option value=\"N\">No</option>\n          </select>\n\n        </div>\n      </div>\n\n      <div class=\"c-lg-4\">\n        <div class=\"field-wrapper\" [ngClass]=\"{'has-value': editCustomComponentForm.is_required != ''}\">\n          <label for=\"isrequired\">Is Required</label>\n          <select id=\"isrequired\" class=\"form-ctrl\" name=\"isrequired\" [(ngModel)]=\"editCustomComponentForm.is_required\">\n            <option value=\"Y\">Yes</option>\n            <option value=\"N\" selected>No</option>\n          </select>\n\n        </div>\n      </div>\n\n      <div class=\"c-lg-4\">\n        <div class=\"field-wrapper\" [ngClass]=\"{'has-value': editCustomComponentForm.is_searchable != ''}\">\n          <label for=\"issearchable\">Is Searchable</label>\n          <select id=\"issearchable\" class=\"form-ctrl\" name=\"issearchable\"\n            [(ngModel)]=\"editCustomComponentForm.is_searchable\">\n            <option value=\"Y\">Yes</option>\n            <option value=\"N\" selected>No</option>\n          </select>\n\n        </div>\n      </div>\n\n      <div class=\"c-lg-4\">\n        <div class=\"field-wrapper\" [ngClass]=\"{'has-value': editCustomComponentForm.sequence_number != ''}\">\n          <label for=\"sequencenumber\">Sequence (Numerals Only)</label>\n          <input type=\"text\" class=\"form-ctrl\" onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57)\"\n            maxlength=\"3\" [(ngModel)]=\"editCustomComponentForm.sequence_number\" name=\"sequencenumber\"\n            id=\"sequencenumber\">\n\n        </div>\n      </div>\n\n      <div class=\"c-lg-4\">\n        <div class=\"field-wrapper\" [ngClass]=\"{'has-value': editCustomComponentForm.comp_length != null}\">\n          <label for=\"complength\">Max- Length (Numerals Only)</label>\n          <input type=\"text\" class=\"form-ctrl\" onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57)\"\n            [(ngModel)]=\"editCustomComponentForm.comp_length\" name=\"complength\" id=\"complength\">\n\n        </div>\n      </div>\n\n      <div class=\"c-lg-4\">\n        <div class=\"field-wrapper\" [ngClass]=\"{'has-value': editCustomComponentForm.defaultValue != ''}\">\n          <label for=\"defVal\">Default Value</label>\n          <input type=\"text\" class=\"form-ctrl\" [(ngModel)]=\"editCustomComponentForm.defaultValue\" name=\"defVal\"\n            id=\"defVal\">\n        </div>\n      </div>\n\n      <div class=\"c-lg-4\">\n        <div class=\"field-wrapper\" [ngClass]=\"{'has-value': editCustomComponentForm.is_external != ''}\">\n          <label for=\"isexternal\">Is External</label>\n          <select id=\"isexternal\" class=\"form-ctrl\" name=\"isexternal\" [(ngModel)]=\"editCustomComponentForm.is_external\">\n            <option value=\"Y\">Yes</option>\n            <option value=\"N\" selected>No</option>\n          </select>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"\" popup-footer>\n      <div class=\"clearfix\">\n        <aside class=\"pull-right popup-btn\">\n          <input type=\"button\" value=\"Cancel\" class=\"btn txt_font\" (click)=\"cancelRow()\">\n          <input type=\"button\" value=\"Update \" *ngIf=\"isEdit=='Edit'\" class=\"fullBlue btn txt_font\"\n            (click)=\"updateRow()\">\n          <input type=\"button\" value=\"Add \" *ngIf=\"isEdit=='Add'\" class=\"fullBlue btn txt_font\"\n            (click)=\"addNewCustomComponent()\">\n        </aside>\n      </div>\n    </div>\n\n  </proctur-popup>\n\n  <proctur-popup [sizeWidth]=\"'small'\" *ngIf=\"isDelete\">\n\n    <span class=\"closePopup pos-abs fbold show\" (click)=\"cancelRow()\" close-button>\n      <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"9310 2185 16 16\">\n        <g id=\"Group_1228\" data-name=\"Group 1228\" transform=\"translate(8298 1888)\">\n          <g id=\"Group_1213\" data-name=\"Group 1213\" transform=\"translate(34.189 -7.77)\">\n            <line id=\"Line_274\" data-name=\"Line 274\" class=\"cls-1\" y2=\"19.798\"\n              transform=\"translate(992.81 305.77) rotate(45)\" />\n            <line id=\"Line_275\" data-name=\"Line 275\" class=\"cls-1\" x1=\"19.798\"\n              transform=\"translate(978.81 305.77) rotate(45)\" />\n          </g>\n          <rect id=\"Rectangle_686\" data-name=\"Rectangle 686\" style=\"stroke:none;\" class=\"cls-2\" width=\"16\" height=\"16\"\n            transform=\"translate(1012 297)\" />\n        </g>\n      </svg>\n    </span>\n\n    <h2 popup-header>Delete Field</h2>\n\n    <div class=\"row delete-wrapper\" popup-content>\n      <h5>You are about to delete {{editCustomComponentForm.label}}, kindy confirm your action.</h5>\n    </div>\n\n    <div class=\"\" popup-footer>\n      <div class=\"clearfix\">\n        <aside class=\"pull-right popup-btn\">\n          <input type=\"button\" value=\"Cancel\" class=\"btn txt_font\" (click)=\"cancelRow()\">\n          <input type=\"button\" value=\"Confirm\" class=\"fullBlue btn txt_font\" (click)=\"DeleteRowConfirmed()\">\n        </aside>\n      </div>\n    </div>\n\n  </proctur-popup>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/custom-common/custom-common.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/custom-common/custom-common.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/custom-common/student-custom-comp/student-custom-comp.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/custom-common/student-custom-comp/student-custom-comp.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"middle-section clearFix\" id=\"enquiryList\">\n  <section class=\"middle-top clearFix custom-comp-header\">\n\n    <div class=\"row\">\n      <h1 class=\"pull-left\" style=\"font-size: 14px;padding-top:10px \">\n        <a [routerLink]=\"['../home']\">\n          <i style=\"font-family: 'FontAwesome'; font-size: 20px;cursor: pointer;\" class=\"fas fa-home\"></i>\n        </a>\n        <i style=\"font-family: 'FontAwesome';\" class=\"fas fa-angle-right\"></i> Manage Student Form Field\n      </h1>\n    </div>\n\n  </section>\n\n  <section class=\"middle-main clearFix\">\n\n    <div class=\"row\">\n      <div class=\"clearFix add-edit\">\n        <a (click)=\"toggleNewComponentVisisbility('Add')\">\n          <i id=\"addComponent-icon\" style=\"border:none;\">+</i>\n          <span class=\"txt_font\">Add New Form Field</span>\n        </a>\n      </div>\n    </div>\n    <!-- Add New Custom Component Form Here -->\n    <div class=\"row createcomponent-wrapper\" *ngIf=\"isNewComponent\">\n      <div class=\"c-lg-4\">\n        <div class=\"field-wrapper\" [ngClass]=\"{'has-value': createCustomComponentForm.label != ''}\">\n          <label for=\"label\">Label\n            <span class=\"text-danger\">*</span>\n          </label>\n          <input type=\"text\" class=\"form-ctrl\" [(ngModel)]=\"createCustomComponentForm.label\" name=\"label\" id=\"label\">\n\n        </div>\n      </div>\n\n      <div class=\"c-lg-4\">\n        <div class=\"field-wrapper\" [ngClass]=\"{'has-value': createCustomComponentForm.type != '' }\">\n          <label for=\"type\">Type\n            <span class=\"text-danger\">*</span>\n          </label>\n          <select id=\"type\" class=\"form-ctrl\" [(ngModel)]=\"createCustomComponentForm.type\" name=\"opt.data_value\">\n            <option value=\"\"></option>\n            <option *ngFor=\"let opt of componentShell\" [value]=\"opt.data_key\">\n              {{opt.data_value}}\n            </option>\n          </select>\n\n        </div>\n      </div>\n\n      <div class=\"c-lg-4\">\n        <div class=\"field-wrapper\" [ngClass]=\"{'has-value': createCustomComponentForm.prefilled_data != ''}\">\n          <label for=\"prefilledData\">Prefilled Data (Non-Empty And Separated By ,)</label>\n          <input type=\"text\" class=\"form-ctrl\" [(ngModel)]=\"createCustomComponentForm.prefilled_data\" name=\"prefilledData\" id=\"prefilledData\">\n\n        </div>\n      </div>\n\n      <div class=\"c-lg-4\">\n        <div class=\"field-wrapper\" [ngClass]=\"{'has-value': createCustomComponentForm.description != ''}\">\n          <label for=\"description\">Description</label>\n          <input type=\"text\" class=\"form-ctrl\" [(ngModel)]=\"createCustomComponentForm.description\" name=\"description\" id=\"description\">\n\n        </div>\n      </div>\n      <div class=\"c-lg-4\">\n        <div class=\"field-wrapper\" [ngClass]=\"{'has-value': createCustomComponentForm.is_required != ''}\">\n          <label for=\"isrequired\">Is Required</label>\n          <select id=\"isrequired\" class=\"form-ctrl\" name=\"isrequired\" [(ngModel)]=\"createCustomComponentForm.is_required\">\n            <option value=\"Y\">Yes</option>\n            <option value=\"N\" selected>No</option>\n          </select>\n\n        </div>\n      </div>\n\n      <div class=\"c-lg-4\">\n        <div class=\"field-wrapper\" [ngClass]=\"{'has-value': createCustomComponentForm.is_searchable != ''}\">\n          <label for=\"issearchable\">Is Searchable</label>\n          <select id=\"issearchable\" class=\"form-ctrl\" name=\"issearchable\" [(ngModel)]=\"createCustomComponentForm.is_searchable\">\n            <option value=\"Y\">Yes</option>\n            <option value=\"N\" selected>No</option>\n          </select>\n\n        </div>\n      </div>\n\n      <div class=\"c-lg-4\">\n        <div class=\"field-wrapper\" [ngClass]=\"{'has-value': createCustomComponentForm.sequence_number != ''}\">\n          <label for=\"sequencenumber\">Sequence (Numerals Only)</label>\n          <input type=\"text\" id=\"sequencenumber\" class=\"form-ctrl\" onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57)\"\n            maxlength=\"3\" [(ngModel)]=\"createCustomComponentForm.sequence_number\" name=\"sequencenumber\">\n\n        </div>\n      </div>\n\n      <div class=\"c-lg-4\">\n        <div class=\"field-wrapper\" [ngClass]=\"{'has-value': createCustomComponentForm.comp_length != ''}\">\n          <label for=\"complength\">Max- Length (Numerals Only)</label>\n          <input type=\"text\" class=\"form-ctrl\" id=\"complength\" onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57)\" [(ngModel)]=\"createCustomComponentForm.comp_length\"\n            name=\"complength\">\n\n        </div>\n      </div>\n\n      <div class=\"c-lg-4\">\n        <div class=\"field-wrapper\" [ngClass]=\"{'has-value': createCustomComponentForm.defaultValue != ''}\">\n          <label for=\"defVal\">Default Value</label>\n          <input type=\"text\" class=\"form-ctrl\" [(ngModel)]=\"createCustomComponentForm.defaultValue\" name=\"defVal\" id=\"defVal\">\n\n        </div>\n      </div>\n\n      <div class=\"c-lg-12 c-md-12 c-sm-12 c-xs-12\">\n        <aside class=\"pull-right create-cancel-small\">\n          <input type=\"button\" value=\"Cancel\" (click)=\"toggleNewComponentVisisbility()\" class=\"btn cancle\">\n          <input type=\"button\" value=\"Add\" (click)=\"addNewCustomComponent()\" class=\"btn fullBlue\">\n        </aside>\n      </div>\n\n    </div>\n\n\n    <div class=\"row\" style=\"margin-top:12px\">\n      <div class=\"c-lg-4\">\n        <h4>\n          <span class=\"txt_font\" style=\"font-weight: 600\">Total Count</span> &nbsp;:&nbsp;{{userCreatedComponent?.length}}</h4>\n      </div>\n      <div class=\"c-lg-8\"></div>\n    </div>\n\n    <!-- Custom Component Table Here -->\n    <div class=\"custom-comp-tablewrapper\">\n      <div class=\"table-responsive\">\n        <table>\n          <thead>\n            <tr>\n              <th>Label</th>\n              <th>Type</th>\n              <th>Is Required</th>\n              <th>Is Searchable</th>\n              <th>Sequence</th>\n              <th>Max Length</th>\n              <th>Default Value</th>\n              <th></th>\n            </tr>\n          </thead>\n\n          <tbody>\n\n            <tr *ngFor=\"let comp of userCreatedComponent\">\n\n              <td>{{comp.label}}</td>\n\n              <td>{{comp.type|checkBoxConverter}}</td>\n\n              <td>{{comp.is_required}}</td>\n\n              <td>{{comp.is_searchable}}</td>\n\n              <td>{{comp.sequence_number}}</td>\n\n              <td>{{comp.comp_length}}</td>\n\n              <td>{{comp.defaultValue}}</td>\n\n              <td class=\"custom-table-action\">\n                <ul>\n                  <li>\n                    <i class=\"fa fa-pencil\" style=\"color:#1283f4;\" aria-hidden=\"true\" (click)=\"editRow(comp)\"></i>\n                  </li>\n                  <li>\n                    <i class=\"fa fa-trash\" style=\"color:#fa3145;\" aria-hidden=\"true\" (click)=\"deleteRow(comp)\"></i>\n                  </li>\n                </ul>\n              </td>\n            </tr>\n            <tr *ngIf=\"(!isRippleLoad) && (!userCreatedComponent?.length)\">\n              <td class=\"no_data_css\" colspan=\"8\">No Data Found</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n\n  </section>\n\n  <proctur-popup [sizeWidth]=\"'large'\" *ngIf=\"isEdit=='Add'||isEdit=='Edit'\">\n\n    <span class=\"closePopup pos-abs fbold show\" (click)=\"cancelRow()\" close-button>\n      <svg class=\"artdeco-icon\" focusable=\"false\" height=\"24px\" preserveAspectRatio=\"xMinYMin meet\" viewBox=\"0 0 24 24\" width=\"24px\"\n        x=\"0\" y=\"0\">\n        <path class=\"large-icon\" d=\"M20,5.32L13.32,12,20,18.68,18.66,20,12,13.33,5.34,20,4,18.68,10.68,12,4,5.32,5.32,4,12,10.69,18.68,4Z\"\n          style=\"fill: currentColor\"></path>\n      </svg>\n    </span>\n\n    <h2 popup-header>{{isEdit}} Field</h2>\n\n    <div class=\"row updatecomponent-wrapper\" popup-content>\n\n      <div class=\"c-lg-4\">\n        <div class=\"field-wrapper\" [ngClass]=\"{'has-value': editCustomComponentForm.label != ''}\">\n          <label for=\"label\">Label\n            <span class=\"text-danger\">*</span>\n          </label>\n          <input type=\"text\" class=\"form-ctrl\" [(ngModel)]=\"editCustomComponentForm.label\" name=\"label\">\n\n        </div>\n      </div>\n\n      <div class=\"c-lg-4\">\n        <div class=\"field-wrapper\" [ngClass]=\"{'has-value': editCustomComponentForm.type != '' }\">\n          <label for=\"opt.data_value\">Type\n            <span class=\"text-danger\">*</span>\n          </label>\n          <select id=\"opt.data_value\" class=\"form-ctrl\" [(ngModel)]=\"editCustomComponentForm.type\" name=\"opt.data_value\">\n            <option value=\"\"></option>\n            <option *ngFor=\"let opt of componentShell\" [value]=\"opt.data_key\">\n              {{opt.data_value}}\n            </option>\n          </select>\n\n        </div>\n      </div>\n\n      <div class=\"c-lg-4\">\n        <div class=\"field-wrapper\" [ngClass]=\"{'has-value': editCustomComponentForm.prefilled_data != ''}\">\n          <label for=\"prefilledData\">Prefilled Data (Non-Empty And Separated By ,)</label>\n          <input type=\"text\" class=\"form-ctrl\" [(ngModel)]=\"editCustomComponentForm.prefilled_data\" id=\"prefilledData\" name=\"prefilledData\">\n\n        </div>\n      </div>\n\n      <div class=\"c-lg-4\">\n        <div class=\"field-wrapper\" [ngClass]=\"{'has-value': editCustomComponentForm.description != ''}\">\n          <label for=\"description\">Description</label>\n          <input type=\"text\" class=\"form-ctrl\" [(ngModel)]=\"editCustomComponentForm.description\" name=\"description\" id=\"description\">\n\n        </div>\n      </div>\n\n\n      <div class=\"c-lg-4\">\n        <div class=\"field-wrapper\" [ngClass]=\"{'has-value': editCustomComponentForm.is_required != ''}\">\n          <label for=\"isrequired\">Is Required</label>\n          <select id=\"isrequired\" class=\"form-ctrl\" name=\"isrequired\" [(ngModel)]=\"editCustomComponentForm.is_required\">\n            <option value=\"Y\">Yes</option>\n            <option value=\"N\" selected>No</option>\n          </select>\n\n        </div>\n      </div>\n\n      <div class=\"c-lg-4\">\n        <div class=\"field-wrapper\" [ngClass]=\"{'has-value': editCustomComponentForm.is_searchable != ''}\">\n          <label for=\"issearchable\">Is Searchable</label>\n          <select id=\"issearchable\" class=\"form-ctrl\" name=\"issearchable\" [(ngModel)]=\"editCustomComponentForm.is_searchable\">\n            <option value=\"Y\">Yes</option>\n            <option value=\"N\" selected>No</option>\n          </select>\n\n        </div>\n      </div>\n\n      <div class=\"c-lg-4\">\n        <div class=\"field-wrapper\" [ngClass]=\"{'has-value': editCustomComponentForm.sequence_number != ''}\">\n          <label for=\"sequencenumber\">Sequence (Numerals Only)</label>\n          <input type=\"text\" class=\"form-ctrl\" onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57)\" maxlength=\"3\" [(ngModel)]=\"editCustomComponentForm.sequence_number\"\n            name=\"sequencenumber\" id=\"sequencenumber\">\n\n        </div>\n      </div>\n\n      <div class=\"c-lg-4\">\n        <div class=\"field-wrapper\" [ngClass]=\"{'has-value': editCustomComponentForm.comp_length != null}\">\n          <label for=\"complength\">Max- Length (Numerals Only)</label>\n          <input type=\"text\" class=\"form-ctrl\" onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57)\" (ngModelChange)=\"checkValuetype($event)\"\n            [(ngModel)]=\"editCustomComponentForm.comp_length\" name=\"complength\" id=\"complength\">\n\n        </div>\n      </div>\n\n      <div class=\"c-lg-4\">\n        <div class=\"field-wrapper\" [ngClass]=\"{'has-value': editCustomComponentForm.defaultValue != ''}\">\n          <label for=\"defVal\">Default Value</label>\n          <input type=\"text\" class=\"form-ctrl\" [(ngModel)]=\"editCustomComponentForm.defaultValue\" name=\"defVal\" id=\"defVal\">\n\n        </div>\n      </div>\n\n    </div>\n\n    <div class=\"\" popup-footer>\n      <div class=\"clearfix\">\n        <aside class=\"pull-right popup-btn\">\n          <input type=\"button\" value=\"Cancel\" class=\"btn txt_font\" (click)=\"cancelRow()\">\n          <input type=\"button\" value=\"Update \" *ngIf=\"isEdit=='Edit'\" class=\"fullBlue btn txt_font\" (click)=\"updateRow()\">\n          <input type=\"button\" value=\"Add \" *ngIf=\"isEdit=='Add'\" class=\"fullBlue btn txt_font\" (click)=\"addNewCustomComponent()\">\n\n        </aside>\n      </div>\n    </div>\n\n  </proctur-popup>\n\n  <proctur-popup [sizeWidth]=\"'small'\" *ngIf=\"isDelete\">\n\n    <span class=\"closePopup pos-abs fbold show\" (click)=\"cancelRow()\" close-button>\n      <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"9310 2185 16 16\">\n        <g id=\"Group_1228\" data-name=\"Group 1228\" transform=\"translate(8298 1888)\">\n          <g id=\"Group_1213\" data-name=\"Group 1213\" transform=\"translate(34.189 -7.77)\">\n            <line id=\"Line_274\" data-name=\"Line 274\" class=\"cls-1\" y2=\"19.798\" transform=\"translate(992.81 305.77) rotate(45)\" />\n            <line id=\"Line_275\" data-name=\"Line 275\" class=\"cls-1\" x1=\"19.798\" transform=\"translate(978.81 305.77) rotate(45)\" />\n          </g>\n          <rect id=\"Rectangle_686\" data-name=\"Rectangle 686\" style=\"stroke:none;\" class=\"cls-2\" width=\"16\" height=\"16\" transform=\"translate(1012 297)\"\n          />\n        </g>\n      </svg>\n    </span>\n\n    <h2 popup-header>Delete Field</h2>\n\n    <div class=\"row delete-wrapper\" popup-content>\n      <h5>You are about to delete {{editCustomComponentForm.label}}, kindy confirm your action.</h5>\n    </div>\n\n    <div class=\"\" popup-footer>\n      <div class=\"clearfix\">\n        <aside class=\"pull-right popup-btn\">\n          <input type=\"button\" value=\"Cancel\" class=\"btn txt_font\" (click)=\"cancelRow()\">\n          <input type=\"button\" value=\"Confirm\" class=\"fullBlue btn txt_font\" (click)=\"DeleteRowConfirmed()\">\n\n        </aside>\n      </div>\n    </div>\n  </proctur-popup>\n\n</div>\n");

/***/ }),

/***/ "./src/app/components/custom-common/create-custom-comp/create-custom-comp.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/custom-common/create-custom-comp/create-custom-comp.component.scss ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* ===============================header colors=======================*/\n.table-format-first .table-responsive table th,\n.table-format-first .table-responsive table td {\n  text-align: center;\n  padding: 10px 5px;\n}\n.table-format-first .table-responsive table th {\n  text-transform: capitalize;\n  font-size: 14px;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper {\n  display: inline-block;\n  overflow: initial;\n  margin-left: 0;\n  width: auto;\n  position: relative;\n  background: transparent;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox {\n  z-index: 2;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label {\n  font-size: 16px;\n  margin-left: 7px;\n  font-weight: 600;\n  vertical-align: middle;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:after, .table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:before {\n  z-index: 1;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper:after {\n  content: '';\n  width: 20px;\n  height: 20px;\n  background: #fff;\n  left: 0;\n  top: 0;\n  position: absolute;\n}\n.table-format-first .table-responsive table tbody tr td .fa-trash-o {\n  color: #f44336;\n  font-size: 20px;\n}\n.table-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-top: 10px;\n}\n.table-container .heading-container {\n  background: #e0eaec;\n  display: flex;\n  flex-direction: row;\n  font-size: 14px;\n  font-weight: 600;\n  text-align: left;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n}\n.table-container .heading-container .heading-item {\n  width: 10%;\n  text-align: center;\n}\n.table-container .value-outer-container {\n  display: flex;\n  flex-direction: column;\n  min-height: 53vh;\n  max-height: 54vh;\n  overflow-x: hidden;\n  overflow-y: auto;\n  border: 1px solid #ccc;\n}\n.table-container .value-outer-container .value-container {\n  display: flex;\n  flex-direction: row;\n  text-align: left;\n  padding: 4px;\n  font-size: 12px;\n  border-bottom: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n  border-top: none;\n}\n.table-container .value-outer-container .value-container .value-item {\n  width: 10%;\n  text-align: center;\n}\n.middle-section ::-webkit-scrollbar {\n  display: block;\n  width: 7px;\n  height: 7px;\n}\n.row {\n  margin: 0 15px;\n}\n.row.extraMargin {\n  margin: 10px 0 25px;\n}\n.custom-comp-header .row {\n  margin: 0 15px;\n}\n.txt_font {\n  font-size: 12px;\n}\n.add-edit a {\n  cursor: pointer;\n}\n.add-edit i {\n  border: 1px solid #0084f6;\n  display: inline-block;\n  width: 17px;\n  height: 17px;\n  border-radius: 50%;\n  line-height: 12px;\n  text-align: center;\n  font-size: 22px;\n  vertical-align: middle;\n  margin-right: 4px;\n}\n.createcomponent-wrapper {\n  padding: 10px 5px;\n  background: #efefef;\n  border: 1px solid #d8d8d8;\n  height: 100%;\n  width: 100%;\n}\n.createcomponent-wrapper .form-ctrl {\n  background: transparent;\n  border-bottom: solid 1px #cccccc !important;\n}\n.createcomponent-wrapper .field-wrapper .form-ctrl {\n  display: block;\n  width: 100%;\n  box-sizing: border-box;\n  padding: 10px 0 5px;\n  outline: none;\n  border: 0;\n  height: 36px;\n  box-shadow: none;\n  border-radius: 0;\n  line-height: 24px;\n}\n.custom-comp-tablewrapper {\n  margin: 15px;\n  max-height: 70vh;\n  overflow: auto;\n}\n.custom-comp-tablewrapper ::-webkit-scrollbar {\n  display: block;\n}\n.custom-comp-tablewrapper table tr {\n  /*checkbox  */\n}\n.custom-comp-tablewrapper table tr th {\n  padding: 10px;\n}\n.custom-comp-tablewrapper table tr td {\n  padding: 5px 10px !important;\n  font-size: 12px;\n}\n.custom-comp-tablewrapper table tr .field-checkbox-wrapper {\n  margin-bottom: 0 !important;\n  background: transparent;\n}\n.custom-comp-tablewrapper table tr .field-checkbox-wrapper .form-checkbox {\n  opacity: 0;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 20px;\n  height: 20px;\n  z-index: 1;\n}\n.custom-comp-tablewrapper table tr .field-checkbox-wrapper .form-checkbox + label {\n  vertical-align: middle;\n  transition: all 0s;\n  font-size: 10px;\n  display: inline-block;\n}\n.custom-comp-tablewrapper table tr .field-checkbox-wrapper .form-checkbox + label:after {\n  content: '';\n  width: 16px;\n  height: 16px;\n  border: 2px solid #ccc;\n  border-radius: 2px;\n  position: absolute;\n  left: 0;\n  top: 6px;\n  transition: all 0s;\n}\n.custom-comp-tablewrapper table tr .field-checkbox-wrapper .form-checkbox:checked + label:after {\n  border: 2px solid #0084f6;\n}\n.custom-comp-tablewrapper table tr .field-checkbox-wrapper .form-checkbox + label:before {\n  transition: all 0s;\n  width: 1px;\n  height: 1px;\n  left: 8px;\n  top: 12px;\n  position: absolute;\n  content: '';\n  border-top: 0;\n  border-right: 0;\n  border-left: 2px solid transparent;\n  border-bottom: 2px solid transparent;\n  transform: rotate(-45deg);\n}\n.custom-comp-tablewrapper table tr .field-checkbox-wrapper .form-checkbox:checked + label:before {\n  border-left: 2px solid #0084f6;\n  border-bottom: 2px solid #0084f6;\n  width: 10px;\n  height: 4px;\n  left: 4px;\n  top: 12px;\n}\n.custom-comp-tablewrapper table tr .field-checkbox-wrapper .form-checkbox:checked + label {\n  color: #0084f6;\n}\n.custom-comp-tablewrapper table tr .field-wrapper {\n  padding: 0 !important;\n}\n.custom-comp-tablewrapper table tr .field-wrapper .form-ctrl {\n  display: block;\n  box-sizing: border-box;\n  padding: 0 0 0 5px;\n  outline: none;\n  border: 0;\n  height: 26px;\n  box-shadow: none;\n  border-radius: 0;\n  line-height: 25px;\n  background: transparent;\n  width: 80px;\n  text-align: center;\n  border-bottom: 1px solid #ccc;\n}\n.custom-comp-tablewrapper table .displayComp .edit-comp {\n  display: none;\n}\n.custom-comp-tablewrapper table .editComp .view-comp {\n  display: none;\n}\n.custom-table-action ul li {\n  display: inline-block;\n  margin: 0 5px;\n}\n.custom-table-action ul li a {\n  cursor: pointer;\n}\n.updatecomponent-wrapper {\n  padding: 10px 5px;\n  margin: 20px 0;\n  background: #efefef;\n  border-radius: 5px;\n  border: 1px solid #d8d8d8;\n  height: 100%;\n  width: 100%;\n  max-height: 400px;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.updatecomponent-wrapper ::-webkit-scrollbar {\n  display: block;\n  width: 7px;\n  height: 7px;\n}\n.updatecomponent-wrapper .form-ctrl {\n  background: transparent;\n  border-bottom: solid 1px #cccccc !important;\n}\n.updatecomponent-wrapper .field-wrapper .form-ctrl {\n  display: block;\n  width: 100%;\n  box-sizing: border-box;\n  padding: 10px 0 5px;\n  outline: none;\n  border: 0;\n  height: 36px;\n  box-shadow: none;\n  border-radius: 0;\n  line-height: 24px;\n}\n.closePopup {\n  right: 10px;\n  top: 10px;\n  font-size: 18px;\n  cursor: pointer;\n  line-height: 20px;\n  width: 26px;\n  height: 26px;\n  box-sizing: border-box;\n  text-align: center;\n  padding-top: 3px;\n  display: none;\n}\n.closePopup.bottomRight {\n  bottom: 2px;\n  top: auto;\n  left: auto;\n  right: 0;\n}\n.closePopup.topLeft {\n  left: 0;\n  right: auto;\n  top: 1px;\n  bottom: auto;\n}\n.closePopup.bottomLeft {\n  left: 0;\n  right: auto;\n  bottom: 2px;\n  top: auto;\n}\n.closePopup svg {\n  width: 16px;\n}\n.closePopup svg .cls-1 {\n  stroke: #c1c1c1;\n  stroke-width: 2px;\n}\n.closePopup:hover .cls-1 {\n  stroke: #0084f6;\n}\n.delete-wrapper {\n  padding: 20px 15px;\n  margin: 10px 0;\n  background: #efefef;\n}\n.middle-main clearFix .middle {\n  font-size: 30px;\n  margin-left: 25px;\n  margin-top: 10px;\n  font-weight: 600px !important;\n}\n.no_data_css {\n  font-size: 12px !important;\n  color: #000000;\n  font-weight: 600;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY3NzL2NvbW1vbi92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jdXN0b20tY29tbW9uL2NyZWF0ZS1jdXN0b20tY29tcC9jcmVhdGUtY3VzdG9tLWNvbXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWUEsdUVBQUE7QUFXQTs7RUFLZ0Isa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQ3hCakM7QURrQkE7RUFTZ0IsMEJBQTBCO0VBQzFCLGVBQWU7QUN2Qi9CO0FEYUE7RUFnQjRCLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsdUJBQXVCO0FDekJuRDtBRElBO0VBdUJnQyxVQUFVO0FDdkIxQztBREFBO0VBMEJnQyxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixzQkFBc0I7QUN0QnREO0FEUEE7RUFnQ29DLFVBQVU7QUNyQjlDO0FEWEE7RUFvQ2dDLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixPQUFPO0VBQ1AsTUFBTTtFQUNOLGtCQUFrQjtBQ3JCbEQ7QURyQkE7RUE4QzRCLGNBbERiO0VBbURhLGVBQWU7QUNyQjNDO0FEOEJBO0VBQ0ksYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsZ0JBQWdCO0FDM0JwQjtBRHVCQTtFQU1NLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLHlCQUF5QjtBQ3pCL0I7QURVQTtFQWlCUSxVQUFVO0VBQ1Ysa0JBQWtCO0FDdkIxQjtBREtBO0VBc0JNLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtBQ3ZCNUI7QURMQTtFQThCUSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZUFBZTtFQUNmLDZCQUE2QjtFQUM3QixvQkFBb0I7RUFDcEIseUJBQXlCO0VBQ3pCLGdCQUFnQjtBQ3JCeEI7QURqQkE7RUF3Q1UsVUFBVTtFQUNWLGtCQUFrQjtBQ25CNUI7QUFuR0E7RUFFSSxjQUFjO0VBQ2QsVUFBVTtFQUNWLFdBQVc7QUFxR2Y7QUFqR0E7RUFDRSxjQUFjO0FBb0doQjtBQWpHQTtFQUNFLG1CQUFtQjtBQW9HckI7QUFqR0E7RUFFSSxjQUFjO0FBbUdsQjtBQWhHQTtFQUNJLGVBQWU7QUFtR25CO0FBaEdBO0VBRUksZUFBZTtBQWtHbkI7QUFwR0E7RUFNSSx5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixpQkFBaUI7QUFrR3JCO0FBOUZBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFdBQVc7QUFpR2I7QUF0R0E7RUFRSSx1QkFBdUI7RUFDdkIsMkNBQTJDO0FBa0cvQztBQTNHQTtFQWFJLGNBQWM7RUFDZCxXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsU0FBUztFQUNULFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQWtHckI7QUE5RkE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGNBQWM7QUFpR2hCO0FBcEdBO0VBTUksY0FBYztBQWtHbEI7QUF4R0E7RUFtQk0sYUFBQTtBQXlGTjtBQTVHQTtFQVlRLGFBQWE7QUFvR3JCO0FBaEhBO0VBZ0JRLDRCQUE0QjtFQUM1QixlQUFlO0FBb0d2QjtBQXJIQTtFQXFCUSwyQkFBMkI7RUFDM0IsdUJBQXVCO0FBb0cvQjtBQTFIQTtFQTBCUSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxNQUFNO0VBQ04sV0FBVztFQUNYLFlBQVk7RUFDWixVQUFVO0FBb0dsQjtBQXBJQTtFQW9DUSxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixxQkFBcUI7QUFvRzdCO0FBM0lBO0VBMkNRLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxRQUFRO0VBQ1Isa0JBQWtCO0FBb0cxQjtBQXZKQTtFQXVEUSx5QkR2SGE7QUMyTnJCO0FBM0pBO0VBMkRRLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztFQUNYLFNBQVM7RUFDVCxTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsZUFBZTtFQUNmLGtDQUFrQztFQUNsQyxvQ0FBb0M7RUFDcEMseUJBQXlCO0FBb0dqQztBQTFLQTtFQTBFUSw4QkQxSWE7RUMySWIsZ0NEM0lhO0VDNEliLFdBQVc7RUFDWCxXQUFXO0VBQ1gsU0FBUztFQUNULFNBQVM7QUFvR2pCO0FBbkxBO0VBbUZRLGNEbkphO0FDdVByQjtBQXZMQTtFQXVGUSxxQkFBcUI7QUFvRzdCO0FBM0xBO0VBMEZVLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixTQUFTO0VBQ1QsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLDZCQUE2QjtBQXFHdkM7QUEzTUE7RUErR1EsYUFBYTtBQWdHckI7QUEvTUE7RUFxSFEsYUFBYTtBQThGckI7QUF0RkE7RUFHTSxxQkFBcUI7RUFDckIsYUFBYTtBQXVGbkI7QUEzRkE7RUFPUSxlQUFlO0FBd0Z2QjtBQWxGQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQXFGbEI7QUEvRkE7RUFhSSxjQUFjO0VBQ2QsVUFBVTtFQUNWLFdBQVc7QUFzRmY7QUFyR0E7RUFtQkksdUJBQXVCO0VBQ3ZCLDJDQUEyQztBQXNGL0M7QUExR0E7RUF3QkksY0FBYztFQUNkLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixTQUFTO0VBQ1QsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBc0ZyQjtBQWxGQTtFQUNFLFdBQVc7RUFDWCxTQUFTO0VBQ1QsZUFBZTtFQUNmLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsV0FBVztFQUNYLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixhQUFhO0FBcUZmO0FBaEdBO0VBY0ksV0FBVztFQUNYLFNBQVM7RUFDVCxVQUFVO0VBQ1YsUUFBUTtBQXNGWjtBQXZHQTtFQXFCSSxPQUFPO0VBQ1AsV0FBVztFQUNYLFFBQVE7RUFDUixZQUFZO0FBc0ZoQjtBQTlHQTtFQTRCSSxPQUFPO0VBQ1AsV0FBVztFQUNYLFdBQVc7RUFDWCxTQUFTO0FBc0ZiO0FBckhBO0VBbUNJLFdBQVc7QUFzRmY7QUF6SEE7RUFzQ00sZUFBZTtFQUNmLGlCQUFpQjtBQXVGdkI7QUE5SEE7RUE2Q00sZUQ1UmU7QUNpWHJCO0FBaEZBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxtQkFBbUI7QUFtRnJCO0FBaEZBO0VBRUksZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsNkJBQTZCO0FBa0ZqQztBQTlFQTtFQUNFLDBCQUEwQjtFQUMxQixjQUFjO0VBQ2QsZ0JBQWdCO0FBaUZsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3VzdG9tLWNvbW1vbi9jcmVhdGUtY3VzdG9tLWNvbXAvY3JlYXRlLWN1c3RvbS1jb21wLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHB1bGwtTDogbGVmdDtcbiRwdWxsLVI6IHJpZ2h0O1xuJHB1bGwtbm9uZTogbm9uZTtcbiRmdWxsLXdpZHRoOiAxMDAlO1xuJGJvcmRlci1ib3g6IGJvcmRlci1ib3g7XG4kYm9yZGVyLWNvbG9yOiAjZGVlYWVlO1xuJGJnLXdoaXRlOiAjZmZmO1xuJGVycm9yLWNvbG9yOiAjZmYwMDAwO1xuJGNvbW1vbi1ibHVlOiAjMDA4NGY2O1xuJHByaW1hcnktY29sb3I6ICMzMzM7XG4kYm9yZGVyLWNvbW1vbjojZWFlYWViO1xuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09aGVhZGVyIGNvbG9ycz09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuJGhlYWRlci1iZzojMDA2MEEzO1xuJGhlYWRlci1ib3JkZXI6I2VhZWFlYjtcbiRsZWZ0TWVudUJnOiNmYWZhZmE7XG4kbGVmdE1lbnVIb3ZlckJnOiMwMDg0ZjY7XG4kbGVmdE1lbnVUZXh0SG92ZXJDb2xvcjojZmZmO1xuJHJlZEJ0bjojZjQ0MzM2O1xuJGJvcmRlcmNjYzojY2NjO1xuJGxpZ2h0Qmx1ZTojZWZmN2ZmO1xuJHRhYmxlSGVhZGluZ0JnQ29sb3I6ICMwMDRhN2U7XG4udGFibGUtZm9ybWF0LWZpcnN0IHtcbiAgICAudGFibGUtcmVzcG9uc2l2ZSB7XG4gICAgICAgIHRhYmxlIHtcbiAgICAgICAgICAgIHRoLFxuICAgICAgICAgICAgdGQge1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoIHtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0Ym9keSB7XG4gICAgICAgICAgICAgICAgdHIge1xuICAgICAgICAgICAgICAgICAgICB0ZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuZmllbGQtY2hlY2tib3gtd3JhcHBlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBpbml0aWFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZm9ybS1jaGVja2JveCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mb3JtLWNoZWNrYm94K2xhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogN3B4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmFmdGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLmZhLXRyYXNoLW8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkcmVkQnRuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnRhYmxlLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgLmhlYWRpbmctY29udGFpbmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICNlMGVhZWM7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgICAuaGVhZGluZy1pdGVtIHtcbiAgICAgICAgd2lkdGg6IDEwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgIH1cbiAgICAudmFsdWUtb3V0ZXItY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgbWluLWhlaWdodDogNTN2aDtcbiAgICAgIG1heC1oZWlnaHQ6IDU0dmg7XG4gICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgIC52YWx1ZS1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgICAgICBib3JkZXItdG9wOiBub25lO1xuICAgICAgICAudmFsdWUtaXRlbSB7XG4gICAgICAgICAgd2lkdGg6IDEwJTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0iLCJAaW1wb3J0IFwiLi9zcmMvYXNzZXRzL2Nzcy9jb21tb24vdmFyaWFibGVzLnNjc3NcIjtcblxuLm1pZGRsZS1zZWN0aW9uIHtcbiAgOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDdweDtcbiAgICBoZWlnaHQ6IDdweDtcbiAgfVxufVxuXG4ucm93IHtcbiAgbWFyZ2luOiAwIDE1cHg7XG59XG5cbi5yb3cuZXh0cmFNYXJnaW4ge1xuICBtYXJnaW46IDEwcHggMCAyNXB4O1xufVxuXG4uY3VzdG9tLWNvbXAtaGVhZGVyIHtcbiAgLnJvdyB7XG4gICAgbWFyZ2luOiAwIDE1cHg7XG4gIH1cbn1cbi50eHRfZm9udHtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG5cbi5hZGQtZWRpdCB7XG4gIGEge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIGkge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDg0ZjY7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAxN3B4O1xuICAgIGhlaWdodDogMTdweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgbGluZS1oZWlnaHQ6IDEycHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICB9XG59XG5cbi5jcmVhdGVjb21wb25lbnQtd3JhcHBlciB7XG4gIHBhZGRpbmc6IDEwcHggNXB4O1xuICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDhkOGQ4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIC5mb3JtLWN0cmwge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjY2NjY2NjICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZmllbGQtd3JhcHBlciAuZm9ybS1jdHJsIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBhZGRpbmc6IDEwcHggMCA1cHg7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6IDA7XG4gICAgaGVpZ2h0OiAzNnB4O1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgfVxufVxuXG4uY3VzdG9tLWNvbXAtdGFibGV3cmFwcGVyIHtcbiAgbWFyZ2luOiAxNXB4O1xuICBtYXgtaGVpZ2h0OiA3MHZoO1xuICBvdmVyZmxvdzogYXV0bztcblxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIHRhYmxlIHtcbiAgICB0ciB7XG4gICAgICB0aCB7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICB9XG5cbiAgICAgIHRkIHtcbiAgICAgICAgcGFkZGluZzogNXB4IDEwcHggIWltcG9ydGFudDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgfVxuICAgICAgLypjaGVja2JveCAgKi9cbiAgICAgIC5maWVsZC1jaGVja2JveC13cmFwcGVyIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIH1cblxuICAgICAgLmZpZWxkLWNoZWNrYm94LXdyYXBwZXIgLmZvcm0tY2hlY2tib3gge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgIH1cblxuICAgICAgLmZpZWxkLWNoZWNrYm94LXdyYXBwZXIgLmZvcm0tY2hlY2tib3grbGFiZWwge1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMHM7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgfVxuXG4gICAgICAuZmllbGQtY2hlY2tib3gtd3JhcHBlciAuZm9ybS1jaGVja2JveCtsYWJlbDphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICB3aWR0aDogMTZweDtcbiAgICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjY2NjO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgdG9wOiA2cHg7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwcztcbiAgICAgIH1cblxuICAgICAgLmZpZWxkLWNoZWNrYm94LXdyYXBwZXIgLmZvcm0tY2hlY2tib3g6Y2hlY2tlZCtsYWJlbDphZnRlciB7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRjb21tb24tYmx1ZTtcbiAgICAgIH1cblxuICAgICAgLmZpZWxkLWNoZWNrYm94LXdyYXBwZXIgLmZvcm0tY2hlY2tib3grbGFiZWw6YmVmb3JlIHtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDBzO1xuICAgICAgICB3aWR0aDogMXB4O1xuICAgICAgICBoZWlnaHQ6IDFweDtcbiAgICAgICAgbGVmdDogOHB4O1xuICAgICAgICB0b3A6IDEycHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIGJvcmRlci10b3A6IDA7XG4gICAgICAgIGJvcmRlci1yaWdodDogMDtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgICAgfVxuXG4gICAgICAuZmllbGQtY2hlY2tib3gtd3JhcHBlciAuZm9ybS1jaGVja2JveDpjaGVja2VkK2xhYmVsOmJlZm9yZSB7XG4gICAgICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgJGNvbW1vbi1ibHVlO1xuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJGNvbW1vbi1ibHVlO1xuICAgICAgICB3aWR0aDogMTBweDtcbiAgICAgICAgaGVpZ2h0OiA0cHg7XG4gICAgICAgIGxlZnQ6IDRweDtcbiAgICAgICAgdG9wOiAxMnB4O1xuICAgICAgfVxuXG4gICAgICAuZmllbGQtY2hlY2tib3gtd3JhcHBlciAuZm9ybS1jaGVja2JveDpjaGVja2VkK2xhYmVsIHtcbiAgICAgICAgY29sb3I6ICRjb21tb24tYmx1ZTtcbiAgICAgIH1cblxuICAgICAgLmZpZWxkLXdyYXBwZXIge1xuICAgICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgLmZvcm0tY3RybCB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICBwYWRkaW5nOiAwIDAgMCA1cHg7XG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgaGVpZ2h0OiAyNnB4O1xuICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICB3aWR0aDogODBweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZGlzcGxheUNvbXAge1xuICAgICAgLnZpZXctY29tcCB7fVxuXG4gICAgICAuZWRpdC1jb21wIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZWRpdENvbXAge1xuICAgICAgLnZpZXctY29tcCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIC5lZGl0LWNvbXAge31cbiAgICB9XG4gIH1cbn1cblxuLmN1c3RvbS10YWJsZS1hY3Rpb24ge1xuICB1bCB7XG4gICAgbGkge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgbWFyZ2luOiAwIDVweDtcblxuICAgICAgYSB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLnVwZGF0ZWNvbXBvbmVudC13cmFwcGVyIHtcbiAgcGFkZGluZzogMTBweCA1cHg7XG4gIG1hcmdpbjogMjBweCAwO1xuICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkOGQ4ZDg7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IGF1dG87XG5cbiAgOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDdweDtcbiAgICBoZWlnaHQ6IDdweDtcbiAgfVxuXG4gIC5mb3JtLWN0cmwge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjY2NjY2NjICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZmllbGQtd3JhcHBlciAuZm9ybS1jdHJsIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBhZGRpbmc6IDEwcHggMCA1cHg7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6IDA7XG4gICAgaGVpZ2h0OiAzNnB4O1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgfVxufVxuXG4uY2xvc2VQb3B1cCB7XG4gIHJpZ2h0OiAxMHB4O1xuICB0b3A6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgd2lkdGg6IDI2cHg7XG4gIGhlaWdodDogMjZweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogM3B4O1xuICBkaXNwbGF5OiBub25lO1xuXG4gICYuYm90dG9tUmlnaHQge1xuICAgIGJvdHRvbTogMnB4O1xuICAgIHRvcDogYXV0bztcbiAgICBsZWZ0OiBhdXRvO1xuICAgIHJpZ2h0OiAwO1xuICB9XG5cbiAgJi50b3BMZWZ0IHtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiBhdXRvO1xuICAgIHRvcDogMXB4O1xuICAgIGJvdHRvbTogYXV0bztcbiAgfVxuXG4gICYuYm90dG9tTGVmdCB7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogYXV0bztcbiAgICBib3R0b206IDJweDtcbiAgICB0b3A6IGF1dG87XG4gIH1cblxuICBzdmcge1xuICAgIHdpZHRoOiAxNnB4O1xuXG4gICAgLmNscy0xIHtcbiAgICAgIHN0cm9rZTogI2MxYzFjMTtcbiAgICAgIHN0cm9rZS13aWR0aDogMnB4O1xuICAgIH1cbiAgfVxuXG4gICY6aG92ZXIge1xuICAgIC5jbHMtMSB7XG4gICAgICBzdHJva2U6ICRjb21tb24tYmx1ZTtcbiAgICB9XG4gIH1cbn1cblxuLmRlbGV0ZS13cmFwcGVyIHtcbiAgcGFkZGluZzogMjBweCAxNXB4O1xuICBtYXJnaW46IDEwcHggMDtcbiAgYmFja2dyb3VuZDogI2VmZWZlZjtcbn1cblxuLm1pZGRsZS1tYWluIGNsZWFyRml4IHtcbiAgLm1pZGRsZSB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLm5vX2RhdGFfY3Nze1xuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/custom-common/create-custom-comp/create-custom-comp.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/custom-common/create-custom-comp/create-custom-comp.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: CreateCustomCompComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCustomCompComponent", function() { return CreateCustomCompComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/authenticator.service */ "./src/app/services/authenticator.service.ts");
/* harmony import */ var _services_enquiry_services_post_enquiry_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/enquiry-services/post-enquiry-data.service */ "./src/app/services/enquiry-services/post-enquiry-data.service.ts");
/* harmony import */ var _services_fetchprefilldata_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/fetchprefilldata.service */ "./src/app/services/fetchprefilldata.service.ts");
/* harmony import */ var _services_message_show_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/message-show.service */ "./src/app/services/message-show.service.ts");
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





/**  custome fields changes
 * updated by laxmi wapte
 */
let CreateCustomCompComponent = /** @class */ (() => {
    let CreateCustomCompComponent = class CreateCustomCompComponent {
        constructor(prefill, postdata, auth, msgService) {
            this.prefill = prefill;
            this.postdata = postdata;
            this.auth = auth;
            this.msgService = msgService;
            this.componentShell = [];
            this.userCreatedComponent = [];
            this.isDelete = false;
            this.isEdit = '';
            this.editCustomComponentForm = {
                comp_length: "",
                description: "",
                institution_id: sessionStorage.getItem('institute_id'),
                is_required: "N",
                is_searchable: "N",
                label: "",
                page: 1,
                prefilled_data: "",
                sequence_number: "",
                type: "",
                on_both: "Y",
                defaultValue: "",
                is_external: "N"
            };
        }
        ngOnInit() {
            this.fetchPrefillData();
        }
        /* fetches list of user created component and the default type */
        fetchPrefillData() {
            this.auth.showLoader();
            this.prefill.fetchComponentGenerator().subscribe((res) => {
                this.auth.hideLoader();
                this.componentShell = res;
            }, (err) => {
                this.auth.hideLoader();
            });
            this.auth.showLoader();
            return this.prefill.fetchUserCreatedComponent().subscribe((res) => {
                this.auth.hideLoader();
                if (res != null && res.length > 0) {
                    this.userCreatedComponent = res;
                }
            }, (err) => {
                this.auth.hideLoader();
            });
        }
        /* toggle the visibility of the the new component created */
        toggleNewComponentVisisbility(type) {
            this.isEdit = type;
            this.emptyObject();
        }
        addNewCustomComponent() {
            //Case 1 Label/Type is not empty and MaxLength and Sequence
            if (this.editCustomComponentForm.label.trim() != "") {
                if (this.editCustomComponentForm.type != "") {
                    //Case 2 if its a select or multiselect dropdown list cannot be empty or duplicate
                    if (this.editCustomComponentForm.type == "3" ||
                        this.editCustomComponentForm.type == "4") {
                        /* Validate Prefilled Data */
                        if (this.validateDropDown(this.editCustomComponentForm.prefilled_data)) {
                            if (this.validateDropdownDefvalue(this.editCustomComponentForm.prefilled_data, this.editCustomComponentForm.defaultValue)) {
                                this.auth.showLoader();
                                this.postdata.addNewCustomComponent(this.editCustomComponentForm).subscribe(res => {
                                    this.auth.hideLoader();
                                    this.msgService.showErrorMessage('success', '', 'Form-Field added successfully');
                                    this.cancelEditRow();
                                }, err => {
                                    this.auth.hideLoader();
                                    this.msgService.showErrorMessage('error', '', 'Label name is already created with the same name');
                                });
                            }
                            else {
                                this.msgService.showErrorMessage('error', '', 'dropdown default value should be present in prefilled data');
                            }
                        }
                        else {
                            this.msgService.showErrorMessage('error', '', 'Prefill data has to be unique and non-empty');
                        }
                    }
                    /* Date Custom Component */
                    else if (this.editCustomComponentForm.type == "5") {
                        /* Date cannot be searchable and does not a default value */
                        if (this.editCustomComponentForm.is_searchable == "N" && this.editCustomComponentForm.defaultValue.trim() == "") {
                            this.auth.showLoader();
                            this.postdata.addNewCustomComponent(this.editCustomComponentForm).subscribe(res => {
                                this.auth.hideLoader();
                                this.msgService.showErrorMessage('success', '', 'Form-Field added successfully');
                                this.cancelEditRow();
                            }, err => {
                                this.auth.hideLoader();
                                this.msgService.showErrorMessage('error', '', 'There was an error processing your request' + err.error.message);
                            });
                        }
                        else {
                            this.msgService.showErrorMessage('error', '', 'Date Field Cannot Be Searchable Or have any default value');
                        }
                    }
                    /* Textbox and Checkbox */
                    else if (this.editCustomComponentForm.type != "3" && this.editCustomComponentForm.type != "4" && this.editCustomComponentForm.type != "5") {
                        this.auth.showLoader();
                        this.postdata.addNewCustomComponent(this.editCustomComponentForm).subscribe(res => {
                            this.auth.hideLoader();
                            this.msgService.showErrorMessage('success', '', 'Form-Field added successfully');
                            this.cancelEditRow();
                        }, err => {
                            this.auth.hideLoader();
                            this.msgService.showErrorMessage('error', '', 'Label name already exists');
                        });
                    }
                }
                else {
                    this.msgService.showErrorMessage('error', '', 'Please mention a type');
                }
            }
            else {
                this.msgService.showErrorMessage('error', '', 'Please mention a Label');
            }
        }
        isDefaultEmpty(obj) {
            if (obj.defaultValue) {
                return true;
            }
        }
        validateDropDown(data) {
            let arr = data.split(',');
            /* boolean for non empty value */
            let test1 = arr.every(function checkNonEmpty(el) {
                return (el != "" && el != " ");
            });
            /* convert array to set unique value */
            this.editCustomComponentForm.prefilled_data = Array.from(new Set(arr)).join(',');
            return test1;
        }
        validateDropdownDefvalue(tocheck, tomatch) {
            let arr = tocheck.split(',');
            for (let i = 0; i < arr.length; i++) {
                if (tomatch === arr[i].trim()) {
                    return true;
                }
            }
            return false;
        }
        validateDropDownUpdate(data) {
            let arr = data.split(',');
            /* boolean for non empty value */
            let test1 = arr.every(function checkNonEmpty(el) {
                return (el != "" && el != " ");
            });
            /* convert array to set unique value */
            return test1;
        }
        //edit manage field and set editable object
        editRow(data) {
            this.editCustomComponentForm = Object.assign({}, data);
            this.checkValuetype(this.editCustomComponentForm.type);
            this.isEdit = 'Edit';
        }
        emptyObject() {
            this.editCustomComponentForm = {
                comp_length: "",
                description: "",
                institution_id: sessionStorage.getItem('institute_id'),
                is_required: "N",
                is_searchable: "N",
                label: "",
                page: 1,
                prefilled_data: "",
                sequence_number: "",
                type: "",
                on_both: "Y",
                defaultValue: "",
                is_external: "N"
            };
        }
        cancelEditRow() {
            this.emptyObject();
            this.fetchPrefillData();
            this.isEdit = '';
        }
        updateRow() {
            let data = this.editCustomComponentForm;
            //Case 1 Label/Type is not empty and MaxLength and Sequence
            if (data.label.trim() != "" && data.type != "") {
                //Case 2 if its a select or multiselect dropdown list cannot be empty or duplicate
                if (data.type == "3" || data.type == "4") {
                    /* Validate Prefilled Data */
                    if (this.validateDropDown(data.prefilled_data)) {
                        if (this.validateDropdownDefvalue(data.prefilled_data, data.defaultValue)) {
                            this.auth.showLoader();
                            this.postdata.updateCustomComponent(data).subscribe(res => {
                                this.auth.hideLoader();
                                this.cancelEditRow();
                                this.msgService.showErrorMessage('success', '', 'Form-Field  Updated Successfully');
                            }, err => {
                                this.auth.hideLoader();
                                this.msgService.showErrorMessage('error', '', err.error.message);
                            });
                        }
                        else {
                            this.msgService.showErrorMessage('error', 'dropdown default value should be present in prefilled data', '');
                        }
                    }
                    else {
                        this.msgService.showErrorMessage('error', 'Prefill data has to be unique and non-empty', '');
                    }
                }
                /* Date Custom Component */
                else if (data.type == "5") {
                    /* Date cannot be searchable and does not a default value */
                    if (data.is_searchable == "N" && data.defaultValue.trim() == "") {
                        this.auth.showLoader();
                        this.postdata.updateCustomComponent(data).subscribe(res => {
                            this.auth.hideLoader();
                            this.cancelEditRow();
                            this.msgService.showErrorMessage('success', '', 'Form-Field updated successfully');
                        }, err => {
                            this.auth.hideLoader();
                            this.msgService.showErrorMessage('error', '', err.error.message);
                        });
                    }
                    else {
                        this.msgService.showErrorMessage('error', 'Date field cannot be searchable Or have any default value', '');
                    }
                }
                /* Textbox and Checkbox */
                else if (data.type != "3" && data.type != "4" && data.type != "5") {
                    this.auth.showLoader();
                    this.postdata.updateCustomComponent(data).subscribe(res => {
                        this.auth.hideLoader();
                        this.cancelEditRow();
                        this.msgService.showErrorMessage('success', '', 'Form-Field updated successfully');
                    }, err => {
                        this.auth.hideLoader();
                        this.msgService.showErrorMessage('error', '', err.error.message);
                    });
                }
            }
            else {
                this.msgService.showErrorMessage('error', '', 'Please mention a label/type');
            }
        }
        deleteRow(data) {
            this.editCustomComponentForm = data;
            this.isDelete = true;
        }
        cancelRow() {
            this.isDelete = false;
            this.isEdit = '';
            this.emptyObject();
        }
        //this function set default max length  50 when type is textbox
        checkValuetype(value) {
            this.editCustomComponentForm.comp_length = value == 1 ? 50 : 0;
        }
        //delete manage filed
        DeleteRowConfirmed() {
            let data = this.editCustomComponentForm;
            this.auth.showLoader();
            this.postdata.deleteCustomComponent(data.component_id).subscribe(res => {
                this.auth.hideLoader();
                this.msgService.showErrorMessage('success', 'Form-field Deleted ', 'requested form-field deleted Successfully');
                this.cancelEditRow();
                this.cancelRow();
            }, err => {
                this.auth.hideLoader();
                this.msgService.showErrorMessage('error', '', err.error.message);
                this.cancelRow();
            });
        }
    };
    CreateCustomCompComponent.ctorParameters = () => [
        { type: _services_fetchprefilldata_service__WEBPACK_IMPORTED_MODULE_3__["FetchprefilldataService"] },
        { type: _services_enquiry_services_post_enquiry_data_service__WEBPACK_IMPORTED_MODULE_2__["PostEnquiryDataService"] },
        { type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticatorService"] },
        { type: _services_message_show_service__WEBPACK_IMPORTED_MODULE_4__["MessageShowService"] }
    ];
    CreateCustomCompComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-custom-comp',
            template: __importDefault(__webpack_require__(/*! raw-loader!./create-custom-comp.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/custom-common/create-custom-comp/create-custom-comp.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./create-custom-comp.component.scss */ "./src/app/components/custom-common/create-custom-comp/create-custom-comp.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_services_fetchprefilldata_service__WEBPACK_IMPORTED_MODULE_3__["FetchprefilldataService"],
            _services_enquiry_services_post_enquiry_data_service__WEBPACK_IMPORTED_MODULE_2__["PostEnquiryDataService"],
            _services_authenticator_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticatorService"],
            _services_message_show_service__WEBPACK_IMPORTED_MODULE_4__["MessageShowService"]])
    ], CreateCustomCompComponent);
    return CreateCustomCompComponent;
})();

// /* Converts Boolean into Y or N depending on condition for user preview */
// @Pipe({ name: 'booleanConverter' })
// export class BooleanConverter implements PipeTransform {
//   transform(value: any, exponent: any): any {
//     if (value === 'Y' || value) {
//       return "Y";
//     }
//     else if (value === 'N' || value) {
//       return "N";
//     }
//   }
// }


/***/ }),

/***/ "./src/app/components/custom-common/custom-common-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/custom-common/custom-common-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: CustomCommonRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomCommonRoutingModule", function() { return CustomCommonRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _student_custom_comp_student_custom_comp_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./student-custom-comp/student-custom-comp.component */ "./src/app/components/custom-common/student-custom-comp/student-custom-comp.component.ts");
/* harmony import */ var _custom_common_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./custom-common.component */ "./src/app/components/custom-common/custom-common.component.ts");
/* harmony import */ var _create_custom_comp_create_custom_comp_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-custom-comp/create-custom-comp.component */ "./src/app/components/custom-common/create-custom-comp/create-custom-comp.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/components/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let CustomCommonRoutingModule = /** @class */ (() => {
    let CustomCommonRoutingModule = class CustomCommonRoutingModule {
    };
    CustomCommonRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _custom_common_component__WEBPACK_IMPORTED_MODULE_3__["CustomCommonComponent"],
                        pathMatch: 'prefix',
                        children: [
                            {
                                path: '',
                                component: _create_custom_comp_create_custom_comp_component__WEBPACK_IMPORTED_MODULE_4__["CreateCustomCompComponent"]
                            },
                            {
                                path: 'home',
                                component: _create_custom_comp_create_custom_comp_component__WEBPACK_IMPORTED_MODULE_4__["CreateCustomCompComponent"],
                                pathMatch: 'prefix'
                            },
                            {
                                path: 'customizedOnly',
                                component: _student_custom_comp_student_custom_comp_component__WEBPACK_IMPORTED_MODULE_2__["StudentCustomComponent"],
                                pathMatch: 'prefix'
                            }
                        ]
                    }
                ])
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], CustomCommonRoutingModule);
    return CustomCommonRoutingModule;
})();



/***/ }),

/***/ "./src/app/components/custom-common/custom-common.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/custom-common/custom-common.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3VzdG9tLWNvbW1vbi9jdXN0b20tY29tbW9uLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/custom-common/custom-common.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/custom-common/custom-common.component.ts ***!
  \*********************************************************************/
/*! exports provided: CustomCommonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomCommonComponent", function() { return CustomCommonComponent; });
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

let CustomCommonComponent = /** @class */ (() => {
    let CustomCommonComponent = class CustomCommonComponent {
        constructor() { }
        ngOnInit() { }
    };
    CustomCommonComponent.ctorParameters = () => [];
    CustomCommonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-custom-common',
            template: __importDefault(__webpack_require__(/*! raw-loader!./custom-common.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/custom-common/custom-common.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./custom-common.component.scss */ "./src/app/components/custom-common/custom-common.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], CustomCommonComponent);
    return CustomCommonComponent;
})();



/***/ }),

/***/ "./src/app/components/custom-common/custom-common.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/custom-common/custom-common.module.ts ***!
  \******************************************************************/
/*! exports provided: CustomCommonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomCommonModule", function() { return CustomCommonModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _custom_common_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./custom-common.component */ "./src/app/components/custom-common/custom-common.component.ts");
/* harmony import */ var _student_custom_comp_student_custom_comp_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./student-custom-comp/student-custom-comp.component */ "./src/app/components/custom-common/student-custom-comp/student-custom-comp.component.ts");
/* harmony import */ var _custom_common_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./custom-common-routing.module */ "./src/app/components/custom-common/custom-common-routing.module.ts");
/* harmony import */ var _create_custom_comp_create_custom_comp_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-custom-comp/create-custom-comp.component */ "./src/app/components/custom-common/create-custom-comp/create-custom-comp.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/components/shared/shared.module.ts");
/* harmony import */ var _check_box_converter_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./check-box-converter.pipe */ "./src/app/components/custom-common/check-box-converter.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






/* Modules */

// import {BsDatepickerConfig, BsDatepickerModule} from 'ngx-bootstrap/datepicker';


let CustomCommonModule = /** @class */ (() => {
    let CustomCommonModule = class CustomCommonModule {
    };
    CustomCommonModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _custom_common_routing_module__WEBPACK_IMPORTED_MODULE_4__["CustomCommonRoutingModule"],
                // BsDatepickerModule,
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
            ],
            declarations: [
                _custom_common_component__WEBPACK_IMPORTED_MODULE_2__["CustomCommonComponent"],
                _create_custom_comp_create_custom_comp_component__WEBPACK_IMPORTED_MODULE_5__["CreateCustomCompComponent"],
                _student_custom_comp_student_custom_comp_component__WEBPACK_IMPORTED_MODULE_3__["StudentCustomComponent"],
                _check_box_converter_pipe__WEBPACK_IMPORTED_MODULE_8__["CheckBoxConverterPipe"]
            ],
            entryComponents: [],
            providers: [],
        })
    ], CustomCommonModule);
    return CustomCommonModule;
})();



/***/ }),

/***/ "./src/app/components/custom-common/student-custom-comp/student-custom-comp.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/custom-common/student-custom-comp/student-custom-comp.component.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* ===============================header colors=======================*/\n.table-format-first .table-responsive table th,\n.table-format-first .table-responsive table td {\n  text-align: center;\n  padding: 10px 5px;\n}\n.table-format-first .table-responsive table th {\n  text-transform: capitalize;\n  font-size: 14px;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper {\n  display: inline-block;\n  overflow: initial;\n  margin-left: 0;\n  width: auto;\n  position: relative;\n  background: transparent;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox {\n  z-index: 2;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label {\n  font-size: 16px;\n  margin-left: 7px;\n  font-weight: 600;\n  vertical-align: middle;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:after, .table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:before {\n  z-index: 1;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper:after {\n  content: '';\n  width: 20px;\n  height: 20px;\n  background: #fff;\n  left: 0;\n  top: 0;\n  position: absolute;\n}\n.table-format-first .table-responsive table tbody tr td .fa-trash-o {\n  color: #f44336;\n  font-size: 20px;\n}\n.table-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-top: 10px;\n}\n.table-container .heading-container {\n  background: #e0eaec;\n  display: flex;\n  flex-direction: row;\n  font-size: 14px;\n  font-weight: 600;\n  text-align: left;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n}\n.table-container .heading-container .heading-item {\n  width: 10%;\n  text-align: center;\n}\n.table-container .value-outer-container {\n  display: flex;\n  flex-direction: column;\n  min-height: 53vh;\n  max-height: 54vh;\n  overflow-x: hidden;\n  overflow-y: auto;\n  border: 1px solid #ccc;\n}\n.table-container .value-outer-container .value-container {\n  display: flex;\n  flex-direction: row;\n  text-align: left;\n  padding: 4px;\n  font-size: 12px;\n  border-bottom: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n  border-top: none;\n}\n.table-container .value-outer-container .value-container .value-item {\n  width: 10%;\n  text-align: center;\n}\n.middle-section ::-webkit-scrollbar {\n  display: block;\n  width: 7px;\n  height: 7px;\n}\n.row {\n  margin: 0 15px;\n}\n.row.extraMargin {\n  margin: 10px 0 25px;\n}\n.custom-comp-header .row {\n  margin: 0 15px;\n}\n.txt_font {\n  font-size: 12px;\n}\n.add-edit a {\n  cursor: pointer;\n}\n.add-edit i {\n  border: 1px solid #0084f6;\n  display: inline-block;\n  width: 17px;\n  height: 17px;\n  border-radius: 50%;\n  line-height: 12px;\n  text-align: center;\n  font-size: 22px;\n  vertical-align: middle;\n  margin-right: 4px;\n}\n.createcomponent-wrapper {\n  padding: 10px 5px;\n  background: #efefef;\n  border: 1px solid #d8d8d8;\n  height: 100%;\n  width: 100%;\n}\n.createcomponent-wrapper .form-ctrl {\n  background: transparent;\n  border-bottom: solid 1px #cccccc !important;\n}\n.createcomponent-wrapper .field-wrapper .form-ctrl {\n  display: block;\n  width: 100%;\n  box-sizing: border-box;\n  padding: 10px 0 5px;\n  outline: none;\n  border: 0;\n  height: 36px;\n  box-shadow: none;\n  border-radius: 0;\n  line-height: 24px;\n}\n.custom-comp-tablewrapper {\n  margin: 15px;\n  max-height: 70vh;\n  overflow: auto;\n}\n.custom-comp-tablewrapper ::-webkit-scrollbar {\n  display: block;\n}\n.custom-comp-tablewrapper table tr {\n  /*checkbox  */\n}\n.custom-comp-tablewrapper table tr th {\n  padding: 10px;\n}\n.custom-comp-tablewrapper table tr td {\n  padding: 5px 10px !important;\n  font-size: 12px;\n}\n.custom-comp-tablewrapper table tr .field-checkbox-wrapper {\n  margin-bottom: 0 !important;\n  background: transparent;\n}\n.custom-comp-tablewrapper table tr .field-checkbox-wrapper .form-checkbox {\n  opacity: 0;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 20px;\n  height: 20px;\n  z-index: 1;\n}\n.custom-comp-tablewrapper table tr .field-checkbox-wrapper .form-checkbox + label {\n  vertical-align: middle;\n  transition: all 0s;\n  font-size: 10px;\n  display: inline-block;\n}\n.custom-comp-tablewrapper table tr .field-checkbox-wrapper .form-checkbox + label:after {\n  content: '';\n  width: 16px;\n  height: 16px;\n  border: 2px solid #ccc;\n  border-radius: 2px;\n  position: absolute;\n  left: 0;\n  top: 6px;\n  transition: all 0s;\n}\n.custom-comp-tablewrapper table tr .field-checkbox-wrapper .form-checkbox:checked + label:after {\n  border: 2px solid #0084f6;\n}\n.custom-comp-tablewrapper table tr .field-checkbox-wrapper .form-checkbox + label:before {\n  transition: all 0s;\n  width: 1px;\n  height: 1px;\n  left: 8px;\n  top: 12px;\n  position: absolute;\n  content: '';\n  border-top: 0;\n  border-right: 0;\n  border-left: 2px solid transparent;\n  border-bottom: 2px solid transparent;\n  transform: rotate(-45deg);\n}\n.custom-comp-tablewrapper table tr .field-checkbox-wrapper .form-checkbox:checked + label:before {\n  border-left: 2px solid #0084f6;\n  border-bottom: 2px solid #0084f6;\n  width: 10px;\n  height: 4px;\n  left: 4px;\n  top: 12px;\n}\n.custom-comp-tablewrapper table tr .field-checkbox-wrapper .form-checkbox:checked + label {\n  color: #0084f6;\n}\n.custom-comp-tablewrapper table tr .field-wrapper {\n  padding: 0 !important;\n}\n.custom-comp-tablewrapper table tr .field-wrapper .form-ctrl {\n  display: block;\n  box-sizing: border-box;\n  padding: 0 0 0 5px;\n  outline: none;\n  border: 0;\n  height: 26px;\n  box-shadow: none;\n  border-radius: 0;\n  line-height: 25px;\n  background: transparent;\n  width: 80px;\n  text-align: center;\n  border-bottom: 1px solid #ccc;\n}\n.custom-comp-tablewrapper table .displayComp .edit-comp {\n  display: none;\n}\n.custom-comp-tablewrapper table .editComp .view-comp {\n  display: none;\n}\n.custom-table-action ul li {\n  display: inline-block;\n  margin: 0 5px;\n}\n.custom-table-action ul li a {\n  cursor: pointer;\n}\n.updatecomponent-wrapper {\n  padding: 10px 5px;\n  margin: 20px 0;\n  background: #efefef;\n  border-radius: 5px;\n  border: 1px solid #d8d8d8;\n  height: 100%;\n  width: 100%;\n  max-height: 400px;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.updatecomponent-wrapper ::-webkit-scrollbar {\n  display: block;\n  width: 7px;\n  height: 7px;\n}\n.updatecomponent-wrapper .form-ctrl {\n  background: transparent;\n  border-bottom: solid 1px #cccccc !important;\n}\n.updatecomponent-wrapper .field-wrapper .form-ctrl {\n  display: block;\n  width: 100%;\n  box-sizing: border-box;\n  padding: 10px 0 5px;\n  outline: none;\n  border: 0;\n  height: 36px;\n  box-shadow: none;\n  border-radius: 0;\n  line-height: 24px;\n}\n.closePopup {\n  right: 10px;\n  top: 10px;\n  font-size: 18px;\n  cursor: pointer;\n  line-height: 20px;\n  width: 26px;\n  height: 26px;\n  box-sizing: border-box;\n  text-align: center;\n  padding-top: 3px;\n  display: none;\n}\n.closePopup.bottomRight {\n  bottom: 2px;\n  top: auto;\n  left: auto;\n  right: 0;\n}\n.closePopup.topLeft {\n  left: 0;\n  right: auto;\n  top: 1px;\n  bottom: auto;\n}\n.closePopup.bottomLeft {\n  left: 0;\n  right: auto;\n  bottom: 2px;\n  top: auto;\n}\n.closePopup svg {\n  width: 16px;\n}\n.closePopup svg .cls-1 {\n  stroke: #c1c1c1;\n  stroke-width: 2px;\n}\n.closePopup:hover .cls-1 {\n  stroke: #0084f6;\n}\n.delete-wrapper {\n  padding: 20px 15px;\n  margin: 10px 0;\n  background: #efefef;\n}\n.middle-main clearFix .middle {\n  font-size: 30px;\n  margin-left: 25px;\n  margin-top: 10px;\n  font-weight: 600px !important;\n}\n.no_data_css {\n  font-size: 12px !important;\n  color: #000000;\n  font-weight: 600;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY3NzL2NvbW1vbi92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jdXN0b20tY29tbW9uL3N0dWRlbnQtY3VzdG9tLWNvbXAvc3R1ZGVudC1jdXN0b20tY29tcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZQSx1RUFBQTtBQVdBOztFQUtnQixrQkFBa0I7RUFDbEIsaUJBQWlCO0FDeEJqQztBRGtCQTtFQVNnQiwwQkFBMEI7RUFDMUIsZUFBZTtBQ3ZCL0I7QURhQTtFQWdCNEIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsV0FBVztFQUNYLGtCQUFrQjtFQUNsQix1QkFBdUI7QUN6Qm5EO0FESUE7RUF1QmdDLFVBQVU7QUN2QjFDO0FEQUE7RUEwQmdDLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtBQ3RCdEQ7QURQQTtFQWdDb0MsVUFBVTtBQ3JCOUM7QURYQTtFQW9DZ0MsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLE9BQU87RUFDUCxNQUFNO0VBQ04sa0JBQWtCO0FDckJsRDtBRHJCQTtFQThDNEIsY0FsRGI7RUFtRGEsZUFBZTtBQ3JCM0M7QUQ4QkE7RUFDSSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxnQkFBZ0I7QUMzQnBCO0FEdUJBO0VBTU0sbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIseUJBQXlCO0FDekIvQjtBRFVBO0VBaUJRLFVBQVU7RUFDVixrQkFBa0I7QUN2QjFCO0FES0E7RUFzQk0sYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0FDdkI1QjtBRExBO0VBOEJRLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLG9CQUFvQjtFQUNwQix5QkFBeUI7RUFDekIsZ0JBQWdCO0FDckJ4QjtBRGpCQTtFQXdDVSxVQUFVO0VBQ1Ysa0JBQWtCO0FDbkI1QjtBQW5HQTtFQUVJLGNBQWM7RUFDZCxVQUFVO0VBQ1YsV0FBVztBQXFHZjtBQWpHQTtFQUNFLGNBQWM7QUFvR2hCO0FBaEdBO0VBQ0UsbUJBQW1CO0FBbUdyQjtBQWhHQTtFQUVJLGNBQWM7QUFrR2xCO0FBOUZBO0VBQ0ksZUFBZTtBQWlHbkI7QUE5RkE7RUFFSSxlQUFlO0FBZ0duQjtBQWxHQTtFQU1JLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLGlCQUFpQjtBQWdHckI7QUE1RkE7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osV0FBVztBQStGYjtBQXBHQTtFQVFJLHVCQUF1QjtFQUN2QiwyQ0FBMkM7QUFnRy9DO0FBekdBO0VBYUksY0FBYztFQUNkLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixTQUFTO0VBQ1QsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBZ0dyQjtBQTVGQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsY0FBYztBQStGaEI7QUFsR0E7RUFNSSxjQUFjO0FBZ0dsQjtBQXRHQTtFQW1CTSxhQUFBO0FBdUZOO0FBMUdBO0VBWVEsYUFBYTtBQWtHckI7QUE5R0E7RUFnQlEsNEJBQTRCO0VBQzVCLGVBQWU7QUFrR3ZCO0FBbkhBO0VBcUJRLDJCQUEyQjtFQUMzQix1QkFBdUI7QUFrRy9CO0FBeEhBO0VBMEJRLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsT0FBTztFQUNQLE1BQU07RUFDTixXQUFXO0VBQ1gsWUFBWTtFQUNaLFVBQVU7QUFrR2xCO0FBbElBO0VBb0NRLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHFCQUFxQjtBQWtHN0I7QUF6SUE7RUEyQ1EsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFFBQVE7RUFDUixrQkFBa0I7QUFrRzFCO0FBckpBO0VBdURRLHlCRHpIYTtBQzJOckI7QUF6SkE7RUEyRFEsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXO0VBQ1gsU0FBUztFQUNULFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGFBQWE7RUFDYixlQUFlO0VBQ2Ysa0NBQWtDO0VBQ2xDLG9DQUFvQztFQUNwQyx5QkFBeUI7QUFrR2pDO0FBeEtBO0VBMEVRLDhCRDVJYTtFQzZJYixnQ0Q3SWE7RUM4SWIsV0FBVztFQUNYLFdBQVc7RUFDWCxTQUFTO0VBQ1QsU0FBUztBQWtHakI7QUFqTEE7RUFtRlEsY0RySmE7QUN1UHJCO0FBckxBO0VBdUZRLHFCQUFxQjtBQWtHN0I7QUF6TEE7RUEwRlUsY0FBYztFQUNkLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFNBQVM7RUFDVCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsNkJBQTZCO0FBbUd2QztBQXpNQTtFQStHUSxhQUFhO0FBOEZyQjtBQTdNQTtFQXFIUSxhQUFhO0FBNEZyQjtBQXBGQTtFQUdNLHFCQUFxQjtFQUNyQixhQUFhO0FBcUZuQjtBQXpGQTtFQU9RLGVBQWU7QUFzRnZCO0FBaEZBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osV0FBVztFQUNYLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBbUZsQjtBQTdGQTtFQWFJLGNBQWM7RUFDZCxVQUFVO0VBQ1YsV0FBVztBQW9GZjtBQW5HQTtFQW1CSSx1QkFBdUI7RUFDdkIsMkNBQTJDO0FBb0YvQztBQXhHQTtFQXdCSSxjQUFjO0VBQ2QsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLFNBQVM7RUFDVCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFvRnJCO0FBaEZBO0VBQ0UsV0FBVztFQUNYLFNBQVM7RUFDVCxlQUFlO0VBQ2YsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFtRmY7QUE5RkE7RUFjSSxXQUFXO0VBQ1gsU0FBUztFQUNULFVBQVU7RUFDVixRQUFRO0FBb0ZaO0FBckdBO0VBcUJJLE9BQU87RUFDUCxXQUFXO0VBQ1gsUUFBUTtFQUNSLFlBQVk7QUFvRmhCO0FBNUdBO0VBNEJJLE9BQU87RUFDUCxXQUFXO0VBQ1gsV0FBVztFQUNYLFNBQVM7QUFvRmI7QUFuSEE7RUFtQ0ksV0FBVztBQW9GZjtBQXZIQTtFQXNDTSxlQUFlO0VBQ2YsaUJBQWlCO0FBcUZ2QjtBQTVIQTtFQTZDTSxlRDlSZTtBQ2lYckI7QUE5RUE7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLG1CQUFtQjtBQWlGckI7QUE5RUE7RUFHSSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQiw2QkFBNEI7QUErRWhDO0FBMUVBO0VBQ0UsMEJBQTBCO0VBQzFCLGNBQWM7RUFDZCxnQkFBZ0I7QUE2RWxCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jdXN0b20tY29tbW9uL3N0dWRlbnQtY3VzdG9tLWNvbXAvc3R1ZGVudC1jdXN0b20tY29tcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRwdWxsLUw6IGxlZnQ7XG4kcHVsbC1SOiByaWdodDtcbiRwdWxsLW5vbmU6IG5vbmU7XG4kZnVsbC13aWR0aDogMTAwJTtcbiRib3JkZXItYm94OiBib3JkZXItYm94O1xuJGJvcmRlci1jb2xvcjogI2RlZWFlZTtcbiRiZy13aGl0ZTogI2ZmZjtcbiRlcnJvci1jb2xvcjogI2ZmMDAwMDtcbiRjb21tb24tYmx1ZTogIzAwODRmNjtcbiRwcmltYXJ5LWNvbG9yOiAjMzMzO1xuJGJvcmRlci1jb21tb246I2VhZWFlYjtcblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PWhlYWRlciBjb2xvcnM9PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiRoZWFkZXItYmc6IzAwNjBBMztcbiRoZWFkZXItYm9yZGVyOiNlYWVhZWI7XG4kbGVmdE1lbnVCZzojZmFmYWZhO1xuJGxlZnRNZW51SG92ZXJCZzojMDA4NGY2O1xuJGxlZnRNZW51VGV4dEhvdmVyQ29sb3I6I2ZmZjtcbiRyZWRCdG46I2Y0NDMzNjtcbiRib3JkZXJjY2M6I2NjYztcbiRsaWdodEJsdWU6I2VmZjdmZjtcbiR0YWJsZUhlYWRpbmdCZ0NvbG9yOiAjMDA0YTdlO1xuLnRhYmxlLWZvcm1hdC1maXJzdCB7XG4gICAgLnRhYmxlLXJlc3BvbnNpdmUge1xuICAgICAgICB0YWJsZSB7XG4gICAgICAgICAgICB0aCxcbiAgICAgICAgICAgIHRkIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aCB7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGJvZHkge1xuICAgICAgICAgICAgICAgIHRyIHtcbiAgICAgICAgICAgICAgICAgICAgdGQge1xuICAgICAgICAgICAgICAgICAgICAgICAgLmZpZWxkLWNoZWNrYm94LXdyYXBwZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaW5pdGlhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZvcm0tY2hlY2tib3gge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZm9ybS1jaGVja2JveCtsYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDdweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJjphZnRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5mYS10cmFzaC1vIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHJlZEJ0bjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi50YWJsZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIC5oZWFkaW5nLWNvbnRhaW5lciB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZTBlYWVjO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgICAgLmhlYWRpbmctaXRlbSB7XG4gICAgICAgIHdpZHRoOiAxMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICB9XG4gICAgLnZhbHVlLW91dGVyLWNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIG1pbi1oZWlnaHQ6IDUzdmg7XG4gICAgICBtYXgtaGVpZ2h0OiA1NHZoO1xuICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICAudmFsdWUtY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgcGFkZGluZzogNHB4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICAgICAgLnZhbHVlLWl0ZW0ge1xuICAgICAgICAgIHdpZHRoOiAxMCU7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IiwiQGltcG9ydCBcIi4vc3JjL2Fzc2V0cy9jc3MvY29tbW9uL3ZhcmlhYmxlcy5zY3NzXCI7XG5cbi5taWRkbGUtc2VjdGlvbiB7XG4gIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiA3cHg7XG4gICAgaGVpZ2h0OiA3cHg7XG4gIH1cbn1cblxuLnJvdyB7XG4gIG1hcmdpbjogMCAxNXB4O1xuXG59XG5cbi5yb3cuZXh0cmFNYXJnaW4ge1xuICBtYXJnaW46IDEwcHggMCAyNXB4O1xufVxuXG4uY3VzdG9tLWNvbXAtaGVhZGVyIHtcbiAgLnJvdyB7XG4gICAgbWFyZ2luOiAwIDE1cHg7XG4gIH1cbn1cblxuLnR4dF9mb250e1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmFkZC1lZGl0IHtcbiAgYSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgaSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwODRmNjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDE3cHg7XG4gICAgaGVpZ2h0OiAxN3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBsaW5lLWhlaWdodDogMTJweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gIH1cbn1cblxuLmNyZWF0ZWNvbXBvbmVudC13cmFwcGVyIHtcbiAgcGFkZGluZzogMTBweCA1cHg7XG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkOGQ4ZDg7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgLmZvcm0tY3RybCB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNjY2NjY2MgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5maWVsZC13cmFwcGVyIC5mb3JtLWN0cmwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcGFkZGluZzogMTBweCAwIDVweDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogMDtcbiAgICBoZWlnaHQ6IDM2cHg7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICB9XG59XG5cbi5jdXN0b20tY29tcC10YWJsZXdyYXBwZXIge1xuICBtYXJnaW46IDE1cHg7XG4gIG1heC1oZWlnaHQ6IDcwdmg7XG4gIG92ZXJmbG93OiBhdXRvO1xuXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgdGFibGUge1xuICAgIHRyIHtcbiAgICAgIHRoIHtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIH1cblxuICAgICAgdGQge1xuICAgICAgICBwYWRkaW5nOiA1cHggMTBweCAhaW1wb3J0YW50O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICB9XG4gICAgICAvKmNoZWNrYm94ICAqL1xuICAgICAgLmZpZWxkLWNoZWNrYm94LXdyYXBwZXIge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgfVxuXG4gICAgICAuZmllbGQtY2hlY2tib3gtd3JhcHBlciAuZm9ybS1jaGVja2JveCB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgfVxuXG4gICAgICAuZmllbGQtY2hlY2tib3gtd3JhcHBlciAuZm9ybS1jaGVja2JveCtsYWJlbCB7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwcztcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB9XG5cbiAgICAgIC5maWVsZC1jaGVja2JveC13cmFwcGVyIC5mb3JtLWNoZWNrYm94K2xhYmVsOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHdpZHRoOiAxNnB4O1xuICAgICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNjY2M7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB0b3A6IDZweDtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDBzO1xuICAgICAgfVxuXG4gICAgICAuZmllbGQtY2hlY2tib3gtd3JhcHBlciAuZm9ybS1jaGVja2JveDpjaGVja2VkK2xhYmVsOmFmdGVyIHtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgJGNvbW1vbi1ibHVlO1xuICAgICAgfVxuXG4gICAgICAuZmllbGQtY2hlY2tib3gtd3JhcHBlciAuZm9ybS1jaGVja2JveCtsYWJlbDpiZWZvcmUge1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMHM7XG4gICAgICAgIHdpZHRoOiAxcHg7XG4gICAgICAgIGhlaWdodDogMXB4O1xuICAgICAgICBsZWZ0OiA4cHg7XG4gICAgICAgIHRvcDogMTJweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgYm9yZGVyLXRvcDogMDtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAwO1xuICAgICAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgICB9XG5cbiAgICAgIC5maWVsZC1jaGVja2JveC13cmFwcGVyIC5mb3JtLWNoZWNrYm94OmNoZWNrZWQrbGFiZWw6YmVmb3JlIHtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAkY29tbW9uLWJsdWU7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkY29tbW9uLWJsdWU7XG4gICAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgICBoZWlnaHQ6IDRweDtcbiAgICAgICAgbGVmdDogNHB4O1xuICAgICAgICB0b3A6IDEycHg7XG4gICAgICB9XG5cbiAgICAgIC5maWVsZC1jaGVja2JveC13cmFwcGVyIC5mb3JtLWNoZWNrYm94OmNoZWNrZWQrbGFiZWwge1xuICAgICAgICBjb2xvcjogJGNvbW1vbi1ibHVlO1xuICAgICAgfVxuXG4gICAgICAuZmllbGQtd3JhcHBlciB7XG4gICAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcblxuICAgICAgICAuZm9ybS1jdHJsIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIHBhZGRpbmc6IDAgMCAwIDVweDtcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICBoZWlnaHQ6IDI2cHg7XG4gICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5kaXNwbGF5Q29tcCB7XG4gICAgICAudmlldy1jb21wIHt9XG5cbiAgICAgIC5lZGl0LWNvbXAge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5lZGl0Q29tcCB7XG4gICAgICAudmlldy1jb21wIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgLmVkaXQtY29tcCB7fVxuICAgIH1cbiAgfVxufVxuXG4uY3VzdG9tLXRhYmxlLWFjdGlvbiB7XG4gIHVsIHtcbiAgICBsaSB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBtYXJnaW46IDAgNXB4O1xuXG4gICAgICBhIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4udXBkYXRlY29tcG9uZW50LXdyYXBwZXIge1xuICBwYWRkaW5nOiAxMHB4IDVweDtcbiAgbWFyZ2luOiAyMHB4IDA7XG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q4ZDhkODtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogNDAwcHg7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogYXV0bztcblxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogN3B4O1xuICAgIGhlaWdodDogN3B4O1xuICB9XG5cbiAgLmZvcm0tY3RybCB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNjY2NjY2MgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5maWVsZC13cmFwcGVyIC5mb3JtLWN0cmwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcGFkZGluZzogMTBweCAwIDVweDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogMDtcbiAgICBoZWlnaHQ6IDM2cHg7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICB9XG59XG5cbi5jbG9zZVBvcHVwIHtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRvcDogMTBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjZweDtcbiAgaGVpZ2h0OiAyNnB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAzcHg7XG4gIGRpc3BsYXk6IG5vbmU7XG5cbiAgJi5ib3R0b21SaWdodCB7XG4gICAgYm90dG9tOiAycHg7XG4gICAgdG9wOiBhdXRvO1xuICAgIGxlZnQ6IGF1dG87XG4gICAgcmlnaHQ6IDA7XG4gIH1cblxuICAmLnRvcExlZnQge1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IGF1dG87XG4gICAgdG9wOiAxcHg7XG4gICAgYm90dG9tOiBhdXRvO1xuICB9XG5cbiAgJi5ib3R0b21MZWZ0IHtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiBhdXRvO1xuICAgIGJvdHRvbTogMnB4O1xuICAgIHRvcDogYXV0bztcbiAgfVxuXG4gIHN2ZyB7XG4gICAgd2lkdGg6IDE2cHg7XG5cbiAgICAuY2xzLTEge1xuICAgICAgc3Ryb2tlOiAjYzFjMWMxO1xuICAgICAgc3Ryb2tlLXdpZHRoOiAycHg7XG4gICAgfVxuICB9XG5cbiAgJjpob3ZlciB7XG4gICAgLmNscy0xIHtcbiAgICAgIHN0cm9rZTogJGNvbW1vbi1ibHVlO1xuICAgIH1cbiAgfVxufVxuXG4uZGVsZXRlLXdyYXBwZXIge1xuICBwYWRkaW5nOiAyMHB4IDE1cHg7XG4gIG1hcmdpbjogMTBweCAwO1xuICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xufVxuXG4ubWlkZGxlLW1haW4gY2xlYXJGaXgge1xuICAubWlkZGxlIHtcblxuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBtYXJnaW4tbGVmdDogMjVweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDBweCFpbXBvcnRhbnQ7XG4gIH1cblxufVxuXG4ubm9fZGF0YV9jc3N7XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzAwMDAwMDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/custom-common/student-custom-comp/student-custom-comp.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/custom-common/student-custom-comp/student-custom-comp.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: StudentCustomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentCustomComponent", function() { return StudentCustomComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/authenticator.service */ "./src/app/services/authenticator.service.ts");
/* harmony import */ var _services_enquiry_services_post_enquiry_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/enquiry-services/post-enquiry-data.service */ "./src/app/services/enquiry-services/post-enquiry-data.service.ts");
/* harmony import */ var _services_fetchprefilldata_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/fetchprefilldata.service */ "./src/app/services/fetchprefilldata.service.ts");
/* harmony import */ var _services_message_show_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/message-show.service */ "./src/app/services/message-show.service.ts");
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





/**  custome fields changes
 * updated by laxmi wapte
 */
let StudentCustomComponent = /** @class */ (() => {
    let StudentCustomComponent = class StudentCustomComponent {
        constructor(prefill, postdata, auth, msgService) {
            this.prefill = prefill;
            this.postdata = postdata;
            this.auth = auth;
            this.msgService = msgService;
            this.componentShell = [];
            this.userCreatedComponent = [];
            this.isDelete = false;
            this.isEdit = '';
            this.editCustomComponentForm = {
                comp_length: "",
                description: "",
                institution_id: sessionStorage.getItem('institute_id'),
                is_required: "N",
                is_searchable: "N",
                label: "",
                page: 2,
                prefilled_data: "",
                sequence_number: "",
                type: "",
                defaultValue: ""
            };
        }
        ngOnInit() {
            this.fetchPrefillData();
        }
        /* fetches list of user created component and the default type */
        fetchPrefillData() {
            this.auth.showLoader();
            this.prefill.fetchComponentGenerator().subscribe((res) => {
                this.auth.hideLoader();
                this.componentShell = res;
            }, (err) => {
                this.auth.hideLoader();
            });
            this.auth.showLoader();
            return this.prefill.fetchUserCreatedComponentStudent().subscribe((res) => {
                this.auth.hideLoader();
                this.userCreatedComponent = res;
            }, (err) => {
                this.auth.hideLoader();
            });
        }
        /* toggle the visibility of the the new component created */
        toggleNewComponentVisisbility(type) {
            this.isEdit = type;
            this.emptyObject();
        }
        addNewCustomComponent() {
            //Case 1 Label/Type is not empty and MaxLength and Sequence
            if (this.editCustomComponentForm.label != "" && this.editCustomComponentForm.label != " "
                && this.editCustomComponentForm.type != "") {
                //Case 2 if its a select or multiselect dropdown list cannot be empty or duplicate
                if (this.editCustomComponentForm.type == "3" || this.editCustomComponentForm.type == "4") {
                    /* Validate Prefilled Data */
                    if (this.validateDropDown(this.editCustomComponentForm.prefilled_data)) {
                        if (this.validateDropdownDefvalue(this.editCustomComponentForm.prefilled_data, this.editCustomComponentForm.defaultValue)) {
                            this.auth.showLoader();
                            this.postdata.addNewCustomComponent(this.editCustomComponentForm).subscribe(res => {
                                this.auth.hideLoader();
                                this.msgService.showErrorMessage('success', '', 'Form-Field  Updated Successfully');
                                this.cancelEditRow();
                            }, err => {
                                this.auth.hideLoader();
                                this.msgService.showErrorMessage('error', '', 'Label name is already created with the same name');
                            });
                        }
                        else {
                            this.msgService.showErrorMessage('error', '', 'dropdown default value should be present in prefilled data');
                        }
                    }
                    else {
                        this.msgService.showErrorMessage('error', '', 'Prefill data has to be unique and non-empty');
                    }
                }
                /* Date Custom Component */
                else if (this.editCustomComponentForm.type == "5") {
                    /* Date cannot be searchable and does not a default value */
                    if (this.editCustomComponentForm.is_searchable == "N" && this.editCustomComponentForm.defaultValue.trim() == "") {
                        this.auth.showLoader();
                        this.postdata.addNewCustomComponent(this.editCustomComponentForm).subscribe(res => {
                            this.auth.hideLoader();
                            this.msgService.showErrorMessage('success', '', 'Form-Field Updated Successfully');
                            this.fetchPrefillData();
                        }, err => {
                            this.auth.hideLoader();
                            this.msgService.showErrorMessage('error', '', 'There was an error processing your request' + err.error.message);
                        });
                    }
                    else {
                        this.msgService.showErrorMessage('error', 'Date Field Cannot Be Searchable Or have any default value', '');
                    }
                }
                /* Textbox and Checkbox */
                else if (this.editCustomComponentForm.type != "3" && this.editCustomComponentForm.type != "4" && this.editCustomComponentForm.type != "5") {
                    this.auth.showLoader();
                    this.postdata.addNewCustomComponent(this.editCustomComponentForm).subscribe(res => {
                        this.auth.hideLoader();
                        this.msgService.showErrorMessage('success', 'Form-Field Updated Successfully', '');
                        this.cancelEditRow();
                    }, err => {
                        this.auth.hideLoader();
                        this.msgService.showErrorMessage('error', '', 'Label name is already created with the same name');
                    });
                }
            }
            else {
                this.msgService.showErrorMessage('error', '', 'Please mention a Label/Type');
            }
        }
        isDefaultEmpty(obj) {
            if (obj.defaultValue) {
                return true;
            }
        }
        validateDropDown(data) {
            let arr = data.split(',');
            /* boolean for non empty value */
            let test1 = arr.every(function checkNonEmpty(el) {
                return (el != "" && el != " ");
            });
            /* convert array to set unique value */
            this.editCustomComponentForm.prefilled_data = Array.from(new Set(arr)).join(',');
            return test1;
        }
        validateDropdownDefvalue(tocheck, tomatch) {
            let arr = tocheck.split(',');
            for (let i = 0; i < arr.length; i++) {
                if (tomatch === arr[i].trim()) {
                    return true;
                }
            }
            return false;
        }
        validateDropDownUpdate(data) {
            let arr = data.split(',');
            /* boolean for non empty value */
            let test1 = arr.every(function checkNonEmpty(el) {
                return (el != "" && el != " ");
            });
            /* convert array to set unique value */
            return test1;
        }
        editRow(data) {
            this.editCustomComponentForm = data;
            this.isEdit = 'Edit';
        }
        cancelEditRow() {
            this.emptyObject();
            this.fetchPrefillData();
            this.isEdit = '';
        }
        updateRow() {
            let data = this.editCustomComponentForm;
            //Case 1 Label/Type is not empty and MaxLength and Sequence
            if (data.label.trim() != "" && data.type != "") {
                //Case 2 if its a select or multiselect dropdown list cannot be empty or duplicate
                if (data.type == "3" || data.type == "4") {
                    /* Validate Prefilled Data */
                    if (this.validateDropDown(data.prefilled_data)) {
                        if (this.validateDropdownDefvalue(data.prefilled_data, data.defaultValue)) {
                            this.postdata.updateCustomComponent(data).subscribe(res => {
                                this.msgService.showErrorMessage('success', 'Form-Field Updated', '');
                                this.cancelEditRow();
                            }, err => {
                                this.msgService.showErrorMessage('error', '', err.error.message);
                            });
                        }
                        else {
                            this.msgService.showErrorMessage('error', 'dropdown default value should be present in prefilled data', '');
                        }
                    }
                    else {
                        this.msgService.showErrorMessage('error', 'Prefill data has to be unique and non-empty', '');
                    }
                }
                /* Date Custom Component */
                else if (data.type == "5") {
                    /* Date cannot be searchable and does not a default value */
                    if (data.is_searchable == "N" && data.defaultValue.trim() == "") {
                        this.postdata.updateCustomComponent(data).subscribe(res => {
                            this.msgService.showErrorMessage('success', 'Form-Field Updated Successfully', '');
                            this.cancelEditRow();
                        }, err => {
                            this.msgService.showErrorMessage('error', '', err.error.message);
                        });
                    }
                    else {
                        this.msgService.showErrorMessage('error', 'Date Field Cannot Be Searchable Or have any default value', '');
                    }
                }
                /* Textbox and Checkbox */
                else if (data.type != "3" && data.type != "4" && data.type != "5") {
                    this.auth.showLoader();
                    this.postdata.updateCustomComponent(data).subscribe(res => {
                        this.auth.hideLoader();
                        this.msgService.showErrorMessage('success', 'Form-Field Updated', '');
                        this.cancelEditRow();
                    }, err => {
                        this.auth.hideLoader();
                        this.msgService.showErrorMessage('error', '', err.error.message);
                    });
                }
            }
            else {
                this.msgService.showErrorMessage('error', '', 'Please mention a Label/Type');
            }
        }
        emptyObject() {
            this.editCustomComponentForm = {
                comp_length: "",
                description: "",
                institution_id: sessionStorage.getItem('institute_id'),
                is_required: "N",
                is_searchable: "N",
                label: "",
                page: 2,
                prefilled_data: "",
                sequence_number: "",
                type: "",
                defaultValue: ""
            };
        }
        //this function set default max length  50 when type is textbox
        checkValuetype(value) {
            this.editCustomComponentForm.comp_length = value == 1 ? 50 : 0;
        }
        deleteRow(data) {
            this.editCustomComponentForm = data;
            this.isDelete = true;
        }
        cancelRow() {
            this.isDelete = false;
            this.isEdit = '';
            this.emptyObject();
        }
        DeleteRowConfirmed() {
            let data = this.editCustomComponentForm;
            this.auth.showLoader();
            this.postdata.deleteCustomComponent(data.component_id).subscribe(res => {
                this.auth.hideLoader();
                this.isDelete = false;
                this.msgService.showErrorMessage('success', 'Form-field Deleted', 'requested form-field deleted successfully');
                this.cancelEditRow();
            }, err => {
                this.auth.hideLoader();
                this.msgService.showErrorMessage('error', '', err.error.message);
                this.cancelRow();
            });
        }
    };
    StudentCustomComponent.ctorParameters = () => [
        { type: _services_fetchprefilldata_service__WEBPACK_IMPORTED_MODULE_3__["FetchprefilldataService"] },
        { type: _services_enquiry_services_post_enquiry_data_service__WEBPACK_IMPORTED_MODULE_2__["PostEnquiryDataService"] },
        { type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticatorService"] },
        { type: _services_message_show_service__WEBPACK_IMPORTED_MODULE_4__["MessageShowService"] }
    ];
    StudentCustomComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'student-custom-comp',
            template: __importDefault(__webpack_require__(/*! raw-loader!./student-custom-comp.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/custom-common/student-custom-comp/student-custom-comp.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./student-custom-comp.component.scss */ "./src/app/components/custom-common/student-custom-comp/student-custom-comp.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_services_fetchprefilldata_service__WEBPACK_IMPORTED_MODULE_3__["FetchprefilldataService"],
            _services_enquiry_services_post_enquiry_data_service__WEBPACK_IMPORTED_MODULE_2__["PostEnquiryDataService"],
            _services_authenticator_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticatorService"],
            _services_message_show_service__WEBPACK_IMPORTED_MODULE_4__["MessageShowService"]])
    ], StudentCustomComponent);
    return StudentCustomComponent;
})();



/***/ })

}]);
//# sourceMappingURL=app-components-custom-common-custom-common-module-es2015.js.map