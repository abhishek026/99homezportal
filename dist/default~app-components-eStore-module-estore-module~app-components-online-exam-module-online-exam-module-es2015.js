(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-components-eStore-module-estore-module~app-components-online-exam-module-online-exam-module"],{

/***/ "./node_modules/primeng/fileupload.js":
/*!********************************************!*\
  !*** ./node_modules/primeng/fileupload.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/fileupload/fileupload */ "./node_modules/primeng/components/fileupload/fileupload.js"));

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/eStore-module/home/home.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/eStore-module/home/home.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"clearFix\" style=\"padding-right: 2%;\">\n  <section class=\"header-section\">\n    <div>\n      <div class=\"header-title\">\n        <span> Store</span>\n      </div>\n    </div>\n  </section>\n  <aside class=\"middle-full\">\n    <section class=\"middle-main clearFix\">\n      <section class=\"activity-box-container\">\n        <div class=\"activity-container\">\n\n          <div class=\"activity-item-container\" *ngIf=\"jsonEstoreFlags.isManageProduct\" routerLink=\"../details\">\n            <div class=\"img_name_container\">\n              <img src=\"./assets/images/activity/cheque.svg\" alt=\"\">\n              <span>Manage Product</span>\n            </div>\n            <div class=\"activity-description\">\n              <span>Add / Manage products for selling or assigning to students directly.</span>\n            </div>\n          </div>\n          <div class=\"activity-item-container\" *ngIf=\"jsonEstoreFlags.isRegisterUser\" routerLink=\"../registered-user\">\n            <div class=\"img_name_container\">\n              <img src=\"./assets/images/activity/registered_student.png\" alt=\"\">\n              <span>Registered Users</span>\n            </div>\n            <div class=\"activity-description\">\n              <span>Manage and communicate with registered users from App/Website.</span>\n            </div>\n          </div>\n          <!-- E-course -->\n\n\n          <!--<div class=\"activity-item-container\" routerLink=\"../sales-report\">\n            <div class=\"img_name_container\">\n              <img src=\"./assets/images/activity/cheque.svg\" alt=\"\">\n              <span>Sales Report</span>\n            </div>\n            <div class=\"activity-description\">\n              <span>Report of products sold to students.</span>\n            </div>\n          </div>-->\n\n\n          <div class=\"activity-item-container\" *ngIf=\"jsonEstoreFlags.isManageOffer\" routerLink=\"../manage-offers\">\n            <div class=\"img_name_container\">\n              <img src=\"../../../../assets/images/estore/Manage_Offer.svg\" alt=\"\">\n              <span>Offers/ Discounts</span>\n            </div>\n            <div class=\"activity-description\">\n              <span>Manage coupoun / voucher for product discounts and offers. </span>\n            </div>\n          </div>\n\n          <!--<div class=\"activity-item-container\" routerLink=\"../offer-history\">\n            <div class=\"img_name_container\">\n              <img src=\"../../../../assets/images/estore/Offer_History.svg\" alt=\"\">\n              <span>Offer History</span>\n            </div>\n            <div class=\"activity-description\">\n              <span> Coupoun / Vouchers usage report.</span>\n            </div>\n          </div>-->\n          <!--<div class=\"activity-item-container\" *ngIf=\"jsonFlag.isShowEcourseMapping\" routerLink=\"/view/course/ecoursemapping\">\n            <div class=\"img_name_container\">\n              <img src=\"./assets/images/activity/ecourse.svg\" alt=\"\">\n              <span>eCourse Mapping</span>\n            </div>\n            <div class=\"activity-description\">\n              <span *ngIf=\"!isLangInstitue\">Manage eCourse (Online Courses) for Online Tests, Study Material and eStore\n                Products.</span>\n              <span *ngIf=\"isLangInstitue\">Manage eCourse (Online Courses) for Online Tests, Study Material and eStore\n                Products.</span>\n            </div>\n          </div>-->\n          <!-- <div class=\"activity-item-container\" routerLink=\"../master-tag\">\n            <div class=\"img_name_container\">\n              <img src=\"./assets/images/activity/manage_tag.svg\" alt=\"\">\n              <span>Manage Tag</span>\n            </div>\n            <div class=\"activity-description\">\n              <span>Create tags for future reference while creating products.</span>\n            </div>\n          </div> -->\n\n          <!-- <div class=\"activity-item-container\" routerLink=\"../groups\">\n                <div class=\"img_name_container\">\n                  <img src=\"./assets/images/activity/ptm.svg\" alt=\"\">\n                  <span>Manage Group </span>\n                </div>\n                <div class=\"activity-description\">\n                  <span>Create and Manage Products Groups </span>\n                </div>\n              </div> -->\n        </div>\n\n      </section>\n    </section>\n  </aside>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/eStore-module/offer-history/offer-history.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/eStore-module/offer-history/offer-history.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid product-wrapper p-0\">\n    <div class=\"row m-0 pt-3 pb-3\">\n        <div class=\"col-md-8\" style=\"padding-left: 0;\">\n            <section class=\"middle-top clearFix bulk-header\">\n                <div>\n                    <h1 class=\"pull-left\">\n                        <a routerLink=\"/view/reports/list\" style=\"padding:0px; \">\n                          Reports\n                        </a>\n                        <i style=\"font-family: 'FontAwesome';\" class=\"fas fa-angle-right\"></i>\n                        <span> Offer History </span>\n                    </h1>\n                </div>\n            </section>\n        </div>\n    </div>\n\n    <div class=\"search-filter\">\n        <div class=\"filter-item-1\">\n            <div class=\"header-item\">\n                <input type=\"text\" name=\"\" [(ngModel)]=\"searchFilter\" class=\"filer-input\" placeholder=\"Search here... \"\n                    (keyup.enter)=\"fectchTableDataByPage(1)\">\n            </div>\n\n            <div class=\"go-btn-container\">\n                <button type=\"button\" name=\"button\" class=\"fullBlue gobtn\" (click)=\"fectchTableDataByPage(1)\">GO</button>\n            </div>\n\n        </div>\n        <!-- Excel Export Added by ashwini gupta  and used the app-basic-table shared component and implemented pagination separately-->\n        <div style=\"margin-top: 1%;margin-left: 18%;\" *ngIf=\"this.varJson.total_items != 0\">\n            <i class=\"fa fa-file-pdf-o\"\n                style=\"font-size: 28px;color: darkred;cursor: pointer;margin-right: 5px;margin-left: -36px;\"\n                aria-hidden=\"true\" (click)=\"exportToPdf()\"></i>\n            <i class=\"fa fa-file-excel-o\" style=\"font-size: 28px;color: green;cursor: pointer;\" aria-hidden=\"true\"\n                (click)=\"exportToExcel()\"></i>\n        </div>\n\n    </div>\n\n    <div class=\"table table-responsive\">\n        <app-basic-table [headers]=\"headerSetting\" [displayData]=\"offerHistoryData\" [tableSetting]=\"tableSetting\"\n            [rowColumnSetting]=\"rowColumns\">\n        </app-basic-table>\n\n        <!-- <data-display-table #child [displayKeys]=\"tableSetting\" [displayData]=\"offerHistoryData\"\n            (editView)='optionSelected($event)'>\n        </data-display-table> -->\n    </div>\n    <div>\n        <pagination (goPage)=\"fectchTableDataByPage($event)\" (goNext)=\"fetchNext()\" (goPrev)=\"fetchPrevious()\"\n            [pagesToShow]=\"10\" [page]=\"varJson.PageIndex\" [perPage]=\"varJson.displayBatchSize\"\n            [sizeArr]=\"varJson.sizeArr\" (sizeChange)=\"updateTableBatchSize($event)\" [count]=\"varJson.total_items\">\n        </pagination>\n\n    </div>\n    <!-- End -->\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/eStore-module/product-creation/basic-info/basic-info.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/eStore-module/product-creation/basic-info/basic-info.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-md-1\"></div>\n  <div class=\"col-md-10\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"form-group\">\n          <label class=\"text-bold\">Product Name\n            <span class=\"text-danger\">*</span>\n          </label>\n          <input type=\"text\" [disabled]=\"isAdvanceProductEdit\" autocomplete=\"off\" [(ngModel)]=\"prodForm.title\"\n            name=\"title\" #title=\"ngModel\" class=\"form-control form-control-sm\" placeholder=\"Product Name\" required />\n          <div *ngIf=\"title.invalid && (title.dirty || title.touched)\" class=\"alert alert-danger\">\n            <div *ngIf=\"title.errors.required\">\n              product name should not be empty\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"text-bold\">E-courses <span class=\"text-danger\">*</span>\n            <div class=\"questionInfo inline-relative\">\n              <i class=\"fa fa-info-circle infomation-icon\" aria-hidden=\"true\"></i>\n              <div class=\"tooltip-box-field\">\n                Multiple Ecourses can be selected to create a product.\n                Product items from all the selected Ecourses will be fetched\n              </div>\n            </div>\n          </label>\n          <ng-multiselect-dropdown [placeholder]=\"'Select E-courses'\" [(ngModel)]=\"products_ecourse_maps\"\n            [data]=\"ecourseList\" [settings]=\"moderatorSettings\" [disabled]=\"isAdvanceProductEdit\">\n          </ng-multiselect-dropdown>\n        </div>\n      </div>\n\n\n      <div class=\"col-md-12\">\n        <div class=\"form-group\">\n          <label class=\"text-bold\">Description <span class=\"text-danger\">*</span>\n            <div class=\"questionInfo inline-relative\">\n              <i class=\"fa fa-info-circle infomation-icon\" aria-hidden=\"true\"></i>\n              <div class=\"tooltip-box-field\">\n                The given description will be shown as\n                short description of the product on the website\n              </div>\n            </div>\n          </label>\n          <!-- <textarea [(ngModel)]=\"prodForm.about\" name=\"description\" class=\"form-control form-control-sm\"\n              placeholder=\"Write a short description about this product\" maxLength=\"1500\" ></textarea> -->\n          <editor [init]=\"editorConf\" apiKey=\"xix5hq71alw64jp2ufl9fo6nddnhg91n6h7w2afn043v538t\"\n            [(ngModel)]=\"prodForm.about\" placeholder=\"Write a short description about this product\"></editor>\n        </div>\n      </div>\n\n      <div class=\"col-md-12\">\n        <div class=\"col-md-6\" style=\" padding-left: 0px;\">\n          <div class=\"form-group\">\n            <label class=\"text-bold\">Product Sell Limit <span class=\"text-danger\">*</span>\n              <div class=\"questionInfo inline-relative\">\n                <i class=\"fa fa-info-circle infomation-icon\" aria-hidden=\"true\"></i>\n                <div class=\"tooltip-box-field\">\n                  No. of products which can be sold from the\n                  website will be as per the defined product sell limit\n                </div>\n              </div>\n            </label>\n            <input type=\"text\" [disabled]=\"isAdvanceProductEdit\" maxlength=\"6\"\n              onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57)\" autocomplete=\"off\"\n              [(ngModel)]=\"prodForm.purchase_limit\" name=\"purchase_limit\" class=\"form-control form-control-sm\">\n          </div>\n        </div>\n        <div class=\"col-md-2\" style=\"padding-top: 4%;padding-left: 10%;\">\n          <span class=\"field-checkbox-wrapper\">\n            <input class=\"form-checkbox\" type=\"checkbox\" id=\"free_price\" [(ngModel)]=\"prodForm.is_paid\"\n              (ngModelChange)=\"prodForm.is_paid = $event ? 1 : 0;prodForm.price_before_discount =0;prodForm.price =0;prodForm.discount_percentage =0\"\n              name=\"free_price\" name=\"is_paid\" [disabled]=\"isAdvanceProductEdit\">\n            <label for=\"free_price\">Free</label>\n          </span>\n        </div>\n        <div class=\"col-md-3\">\n          <div class=\"form-group\">\n            <label for=\"text\">Currency<span class=\"text-danger\">*</span></label>\n            <select id=\"country_id\" class=\"form-ctrl\" [(ngModel)]=\"prodForm.country_id\"\n              [disabled]=\"isAdvanceProductEdit\">\n              <option [value]=\"data.id\" *ngFor='let data of countryDetails'>\n                {{data.currency_code}}\n              </option>\n            </select>\n          </div>\n        </div>\n\n      </div>\n      <div class=\"col-md-12\">\n        <div class=\"col-md-4\">\n          <div class=\"form-group\">\n            <label class=\"text-bold\">Actual Price</label>\n            <span class=\"field-checkbox-wrapper\">\n              <input class=\"form-checkbox\" type=\"checkbox\" id=\"free_price\" [(ngModel)]=\"prodForm.is_paid\"\n                (ngModelChange)=\"prodForm.is_paid = $event ? 1 : 0;prodForm.discount_percentage =0\" name=\"free_price\"\n                name=\"is_paid\" [disabled]=\"isAdvanceProductEdit\">\n            </span>\n            <input type=\"text\" value=\"0\" onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57)\"\n              [(ngModel)]=\"prodForm.price_before_discount\" [disabled]=\"prodForm.is_paid ||isAdvanceProductEdit \"\n              name=\"price\" class=\"form-control form-control-sm\" (ngModelChange)=\"calc()\">\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"form-group\">\n            <label class=\"text-bold\">Discount(%age)</label>\n            <span class=\"field-checkbox-wrapper\">\n              <input class=\"form-checkbox\" type=\"checkbox\" id=\"discount\" [(ngModel)]=\"prodForm.is_paid\"\n                (ngModelChange)=\"prodForm.is_paid = $event ? 1 : 0;prodForm.discount_percentage =0\" name=\"free_price\"\n                name=\"is_paid\" [disabled]=\"isAdvanceProductEdit\">\n\n            </span>\n            <input type=\"text\" value=\"0\" onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57)\"\n              [(ngModel)]=\"prodForm.discount_percentage\" [disabled]=\"prodForm.is_paid ||isAdvanceProductEdit \"\n              name=\"price\" class=\"form-control form-control-sm\" (ngModelChange)=\"calc()\">\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"form-group\">\n            <label class=\"text-bold\">Final Price</label>\n            <span class=\"field-checkbox-wrapper\">\n              <input class=\"form-checkbox\" type=\"checkbox\" id=\"free_price\" [(ngModel)]=\"prodForm.is_paid\"\n                (ngModelChange)=\"prodForm.is_paid = $event ? 1 : 0;prodForm.price =0\" name=\"free_price\" name=\"is_paid\"\n                [disabled]=\"prodForm.is_paid||isAdvanceProductEdit\">\n            </span>\n\n            <input type=\"text\" value=\"0\" onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57)\"\n              [(ngModel)]=\"prodForm.price\" disabled name=\"price\" class=\"form-control form-control-sm\">\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-12\" style=\"padding-left: 0px;\">\n      <div class=\"col-md-4\">\n        <div class=\"form-group\">\n          <label class=\"text-bold\">Total User Purchased Product\n          </label>\n          <input type=\"text\" onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57)\" autocomplete=\"off\"\n            [(ngModel)]=\"prodForm.start_index_for_total_prod_purchase\" name=\"start_index_for_total_prod_purchase\"\n            class=\"form-control form-control-sm\">\n        </div>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"form-group\">\n          <label class=\"text-bold\">Tags</label>\n          <select name=\"\" id=\"\" [(ngModel)]=\"prodForm.tag\" class=\"form-ctrl\" style=\"border-radius: 4px;\">\n            <option value=\"\"></option>\n            <option value=\"Featured\">Featured</option>\n            <option value=\"Recommended\">Recommended</option>\n            <option value=\"Popular\">Popular</option>\n            <option value=\"Others\">Others</option>\n          </select>\n        </div>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"form-group\" *ngIf=\"prodForm.tag === 'Others'\">\n          <label class=\"text-bold\">Others\n          </label>\n          <input type=\"text\" autocomplete=\"off\" [(ngModel)]=\"others\" name=\"Others\" class=\"form-control form-control-sm\">\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-12\">\n      <div class=\"col-md-6\" style=\" padding-right: 0px;\">\n        <div class=\"form-group\" style=\"margin-top: 10px;\">\n          <span class=\"field-checkbox-wrapper\">\n            <input class=\"form-checkbox\" type=\"checkbox\" id=\"adv_product\" [(ngModel)]=\"prodForm.is_advance_product\"\n              name=\"is_advance_product\" [disabled]=\"isAdvanceProductEdit\">\n            <label for=\"adv_product\">Is Advance Product\n              <div class=\"questionInfo inline-relative\">\n                <i class=\"fa fa-info-circle infomation-icon\" aria-hidden=\"true\"></i>\n                <div class=\"tooltip-box-field\">\n                  Enabling this option published product will available for editing\n                </div>\n              </div>\n            </label>\n          </span>\n        </div>\n      </div>\n      <div class=\"col-md-6\" style=\" padding-right: 0px;\">\n        <span style=\"font-weight: 600;\">Product For</span>\n        <div class=\"form-group field-wrapper form-el-width\">\n          <span class=\"field-checkbox-wrapper\" style=\"margin-right: 10px;\">\n            <input class=\"form-checkbox\" type=\"checkbox\" id=\"forStudent\" [(ngModel)]=\"advanceProduct.forStudent\"\n              name=\"is_advance_product\">\n            <label for=\"forStudent\">Student</label>\n          </span>\n          <span class=\"field-checkbox-wrapper\">\n            <input class=\"form-checkbox\" type=\"checkbox\" id=\"forOpenUser\" [(ngModel)]=\"advanceProduct.forOpenUser\"\n              name=\"is_advance_product\">\n            <label for=\"forOpenUser\">Open User</label>\n          </span>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-12\" style=\"border: 1px solid #ccc;padding: 10px;margin-left: 10px;margin-bottom: 10px;\">\n      <div class=\"form-group\">\n        <label class=\"text-bold\">Product Items <div class=\"questionInfo inline-relative\">\n            <i class=\"fa fa-info-circle infomation-icon\" aria-hidden=\"true\"></i>\n            <div class=\"tooltip-box-field\">\n              These are the items which can be added to the product,\n              whose data will be fetched on the basis of selected Ecourses\n            </div>\n          </div></label>\n      </div>\n      <div class=\"row form-group border-bt\">\n        <div class=\"col-md-4\" *ngFor=\"let item of itemStates;let i = index\">\n          <div class=\"field-checkbox-wrapper\">\n            <input class=\"form-checkbox\" [(ngModel)]=\"prodItems[item.slug]\"\n              [disabled]=\"isAdvanceProductEdit && advanceProductItems[item.slug]\"\n              (ngModelChange)=\"updateProductItemStates($event,item)\" [name]=\"'item-'+i\" [id]=\"item.slug\" value=\"1\"\n              type=\"checkbox\">\n            <label [for]=\"item.slug\">{{item.name}} </label>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-12\" style=\"border: 1px solid #ccc;padding: 10px;margin-left: 10px;margin-bottom: 10px;\">\n      <div class=\"col-md-12 form-group m-0\" style=\"padding-left: 0;\">\n        <label class=\"text-bold\">Sales Date Range <div class=\"questionInfo inline-relative\">\n            <i class=\"fa fa-info-circle infomation-icon\" aria-hidden=\"true\"></i>\n            <div class=\"tooltip-box-field\">\n              This is the date range in which the product can be sold.\n              Sales end date cannot be prior to sales start date\n            </div>\n          </div></label>\n      </div>\n      <div class=\"col-md-6 form-group\">\n        <div class=\"col-md-12 datePickerBox\" style=\"padding-top: 0px;padding-bottom: 10px;\">\n          <label for=\"from\">From Date<span class=\"text-danger\">*</span></label>\n          <input type=\"text\" [disabled]=\"isAdvanceProductEdit\" [(ngModel)]=\"prodForm.sales_from_date\" name=\"from\"\n            class=\"form-control form-control-sm\" autocomplete=\"off\" bsDatepicker>\n        </div>\n      </div>\n      <div class=\"col-md-6 form-group\">\n        <div class=\"col-md-12 datePickerBox\" style=\"padding-top: 0px;padding-bottom: 10px;\">\n          <label for=\"from\">To Date<span class=\"text-danger\">*</span></label>\n          <input type=\"text\" [disabled]=\"isAdvanceProductEdit\" [(ngModel)]=\"prodForm.sales_to_date\" name=\"to\"\n            class=\"form-control form-control-sm\" autocomplete=\"off\" bsDatepicker>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-12\" style=\"border: 1px solid #ccc;padding: 10px;margin-left: 10px;margin-bottom: 10px;\">\n      <div class=\"col-md-9 form-group m-0\" style=\"padding-left: 0;\">\n        <label class=\"text-bold\">Visibility Date Range<div class=\"questionInfo inline-relative\">\n            <i class=\"fa fa-info-circle infomation-icon\" aria-hidden=\"true\"></i>\n            <div class=\"tooltip-box-field\">\n              This is the product validity date range.\n              The student can access the product in the defined date range only.\n              Product visibility start date cannot be prior to sales start date.\n              The extension in visibility will change the product validity for both existing and new product users.\n            </div>\n          </div></label>\n      </div>\n      <div class=\"col-md-3\" style=\" padding-right: 0px;\">\n        <div class=\"form-group\" style=\"text-align: right;\">\n          <label class=\"text-bold\" style=\"position: absolute; left: 19px;\"></label>\n          <span class=\"field-checkbox-wrapper\">\n            <input class=\"form-checkbox\" type=\"checkbox\" id=\"show_duration\" [(ngModel)]=\"prodForm.is_duration\"\n              name=\"show_duration\">\n            <label for=\"show_duration\">Show Duration </label>\n          </span>\n        </div>\n      </div>\n      <div class=\"col-md-6 form-group\" *ngIf=\"!prodForm.is_duration\">\n        <div class=\"col-md-12 datePickerBox\" style=\"padding-top: 0px;padding-bottom: 10px;\">\n          <label for=\"from\">From Date<span class=\"text-danger\">*</span></label>\n          <input type=\"text\" [(ngModel)]=\"prodForm.valid_from_date\" name=\"from\"\n            class=\"form-control bsDatepicker form-control-sm\" autocomplete=\"off\" bsDatepicker>\n        </div>\n      </div>\n      <div class=\"col-md-6 form-group\" *ngIf=\"!prodForm.is_duration\">\n        <div class=\"col-md-12 datePickerBox\" style=\"padding-top: 0px;padding-bottom: 10px;\">\n          <label for=\"from\">To Date</label>\n          <input type=\"text\" [(ngModel)]=\"prodForm.valid_to_date\" name=\"to\"\n            class=\"form-control bsDatepicker form-control-sm\" autocomplete=\"off\" bsDatepicker>\n        </div>\n      </div>\n      <div class=\"col-md-6 form-group\" *ngIf=\"prodForm.is_duration\">\n        <div class=\"col-md-12 \" style=\"padding-top: 0px;padding-bottom: 10px;\">\n          <label for=\"from\">Duration<span class=\"text-danger\">*</span></label>\n          <div class=\"questionInfo inline-relative\">\n            <i class=\"fa fa-info-circle infomation-icon\" aria-hidden=\"true\"></i>\n            <div class=\"tooltip-box-field\">\n              This is the product validity duration.\n              The student can access the product in the defined duration only,\n              starting from the purchase date.\n              Product visibility duration can be set in no. of days.\n              The extension in visibility will change the product validity for both existing and new product users.\n            </div>\n          </div>\n          <input type=\"text\" maxlength=\"4\" onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57)\"\n            [(ngModel)]=\"prodForm.duration\" name=\"from\" class=\"form-control form-control-sm\" autocomplete=\"off\">\n        </div>\n      </div>\n      <!-- <div class=\"col-md-6 form-group\"  style=\"margin-top: 1.6rem;\">\n          <div class=\"col-md-12 datePickerBox\" style=\"padding-top: 0px;padding-bottom: 10px;\">\n            <label for=\"from\">{{prodForm.valid_from_date}}</label> to <label\n              for=\"from\">{{prodForm.valid_to_date}}</label>\n          </div>\n\n          <div class=\"col-md-2 form-group text-right m-auto text-bold\" style=\"margin-top: 25px;\">\n          <label>{{calc_days()}} Day(s)</label>\n        </div>\n        </div> -->\n    </div>\n  </div>\n  <div class=\"col-md-1\"></div>\n</div>\n\n<div class=\"row basic-info-footer\">\n  <div class=\"col text-center\">\n    <button class=\"btn btn-outline-danger btn-round\" style=\"color:red;\" (click)=\"gotoBack()\"> Cancel</button>\n    <button class=\"btn btn-primary btn-round\" (click)=\"saveProduct()\">Save & Next</button>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/eStore-module/product-creation/classroom-class/classroom-class.component.html":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/eStore-module/product-creation/classroom-class/classroom-class.component.html ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"row main-topic-row\" style=\"margin-bottom: 10px;border: none;\">\n    <div class=\"form-group\">\n      <label class=\"text-bold\">Description <span class=\"text-danger\">*</span></label>\n      <!-- <textarea [(ngModel)]=\"description\" name=\"description\" style=\"height:200px\" maxLength=\"1500\"\n        class=\"form-control form-control-sm\" placeholder=\"Write a  description about this product classroom classes\"></textarea> -->\n        <editor\n         [init]=\"editorConf\" apiKey=\"xix5hq71alw64jp2ufl9fo6nddnhg91n6h7w2afn043v538t\"   [(ngModel)]=\"description\"></editor>\n    </div>\n  </div>\n\n  <div class=\"basic-info-footer\">\n      <div class=\"col text-center\">\n        <button class=\"btn btn-outline-danger btn-round\" style=\"color:red;\" (click)=\"gotoBack()\">Cancel</button>\n        <button class=\"btn btn-primary btn-round\" [disabled]=\"isRippleLoad\" (click)=\"gotoNext()\">Save & Next</button>\n      </div>\n\n    </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/eStore-module/product-creation/mock-test/mock-test.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/eStore-module/product-creation/mock-test/mock-test.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"row m-0 mb-4 filters-box\">\n  <div class=\"col-md-3\">\n    <select name=\"\" class=\"form-control form-control-sm\">\n      <option>Select Exam</option>\n      <option>SSC CGL</option>\n      <option>SSC CHSL</option>\n    </select>\n  </div>\n  <div class=\"col-md-3\">\n    <select name=\"\" class=\"form-control form-control-sm\">\n      <option>Select Subject</option>\n      <option>SSC CGL</option>\n      <option>SSC CHSL</option>\n    </select>\n  </div>\n  <div class=\"col-md-6\">\n    <button class=\"btn btn-primary btn-sm btn-round\">Add</button>\n  </div>\n</div> -->\n<div class=\"row m-0 pt-0 product-list-wrapper \">\n\n  <div class=\"row main-topic-row\" style=\"margin-bottom: 10px;border: none;\">\n    <div class=\"form-group\">\n      <label class=\"text-bold\">Description <span class=\"text-danger\">*</span></label>\n      <!-- <textarea [(ngModel)]=\"description\" name=\"description\" style=\"height:120px\" class=\"form-control form-control-sm\"\n        placeholder=\"Write a description about mock test\" maxLength=\"1500\"></textarea> -->\n      <editor [init]=\"editorConf\" apiKey=\"xix5hq71alw64jp2ufl9fo6nddnhg91n6h7w2afn043v538t\" [(ngModel)]=\"description\">\n      </editor>\n    </div>\n  </div>\n\n  <div class=\"col-md-12 table-wrapper p-0 \" style=\"margin-bottom: 10px;\" *ngIf=\"testlist?.length\">\n    <table class=\"table product-table\">\n      <thead class=\"product-table-head\">\n        <tr>\n          <th width=\"5%\">\n            <!-- <div class=\"field-checkbox-wrapper\">\n              <input type=\"checkbox\" class=\"form-checkbox\" [(ngModel)]=\"selectAll\"\n                (ngModelChange)=\"selectAllDetails($event)\" name=\"has_mock_tests\" id=\"mock_test\"> <label\n                for=\"ch2\"></label>\n            </div> -->\n          </th>\n          <th width=\"30%\" style=\"text-align: left;\">Content</th>\n          <th>Start Date</th>\n          <th>End Date</th>\n          <th width=\"10%\">Marks</th>\n          <th class=\"text-center\">Questions</th>\n          <th class=\"text-center\">Time</th>\n          <th class=\"text-center\">Difficulty</th>\n        </tr>\n      </thead>\n      <tbody class=\"product-table-body\">\n        <!-- <ng-template [ngIf]=\"ecourse.isExpand\"> -->\n        <tr *ngFor=\"let test of testlist;let i =index;\">\n          <td>\n            <div class=\"field-checkbox-wrapper\">\n              <input type=\"checkbox\" class=\"form-checkbox\" [disabled]=\"test.is_existed_checked\" [checked]=\"test.isChecked\"\n                [(ngModel)]=\"test.isChecked\" (ngModelChange)=\"selectVlaue($event,test)\" [id]=\"'ch'+index\">\n              <label [for]=\"'ch'+index\"></label>\n            </div>\n          </td>\n          <td style=\"text-align: left;\">\n            <label [for]=\"'ch'+index\" title=\"{{test.test_name}}\">\n              {{ (test.test_name.length > 20) ? (test.test_name | slice:0:20) + '...' : test.test_name }}\n            </label>\n          </td>\n          <td>{{getTime(test.start_timestamp)}}<br>\n            <span style=\"color:blue;\"><b>{{getDate(test.start_timestamp)}}</b></span>\n          </td>\n          <td>{{getTime(test.end_timestamp)}}<br>\n            <span style=\"color:blue;\"><b>{{getDate(test.end_timestamp)}}</b></span>\n          </td>\n          <td> {{test.total_marks}}</td>\n          <td>\n            {{test.total_question}}\n          </td>\n          <td>\n            {{test.duration}} &nbsp;min\n          </td>\n          <td class=\"text-center\">\n            {{test.difficulty_title}}\n          </td>\n        </tr>\n        <!-- </ng-template> -->\n        <!--read view -->\n        <!-- <ng-template [ngIf]=\"true\">\n          <ng-container *ngFor=\"let ecourse of product_ecourse_maps;\">\n            <tr>\n              <td>\n                <i class=\"fa fa-minus iconSize\" *ngIf=\"ecourse.isExpand\" (click)=\"expandEcourse(ecourse)\"></i>\n                <i class=\"fa fa-plus iconSize\" *ngIf=\"!ecourse.isExpand\" (click)=\"expandEcourse(ecourse)\"></i>\n              </td>\n              <td colspan=\"7\" class=\"text-left\">\n                <label class=\"labelSize\">{{ecourse.course_type}}</label>\n              </td>\n            </tr>\n            <ng-template [ngIf]=\"ecourse.isExpand\">\n\n              <tr *ngFor=\"let test of ecourse.testlist;let i =index;\">\n                <td>\n                  <div class=\"field-checkbox-wrapper\">\n                    <input type=\"checkbox\" class=\"form-checkbox\" [disabled]=\"test?.is_existed_checked\"\n                      [checked]=\"test.isChecked\" [(ngModel)]=\"test.isChecked\" (ngModelChange)=\"selectVlaue($event,test)\"\n                      [id]=\"'ch'+index\">\n                    <label [for]=\"'ch'+index\"></label>\n                  </div>\n                </td>\n                <td style=\"text-align: left;\">\n                  <label [for]=\"'ch'+index\" title=\"{{test.test_name}}\">\n                    {{ (test.test_name.length > 20) ? (test.test_name | slice:0:20) + '...' : test.test_name }}\n                  </label>\n                </td>\n                <td>{{getTime(test.start_timestamp)}}<br>\n                  <span style=\"color:blue;\"><b>{{getDate(test.start_timestamp)}}</b></span>\n                </td>\n                <td>{{getTime(test.end_timestamp)}}<br>\n                  <span style=\"color:blue;\"><b>{{getDate(test.end_timestamp)}}</b></span>\n                </td>\n                <td> {{test.total_marks}}</td>\n                <td>\n                  {{test.total_question}}\n                </td>\n                <td>\n                  {{test.duration}} &nbsp;min\n                </td>\n                <td class=\"text-center\">\n                  {{test.difficulty_title}}\n                </td>\n              </tr>\n            </ng-template>\n\n          </ng-container>\n        </ng-template> -->\n      </tbody>\n    </table>\n  </div>\n\n  <div class=\"filter_div\" style=\"border-bottom: 1px solid lightgrey;\">\n    <div class=\"field-wrapper\" style=\"margin-left:0px\">\n      <label *ngIf=\"!isProfessional\">Standard<span class=\"text-danger\">*</span></label>\n      <label *ngIf=\"isProfessional\">Master Course<span class=\"text-danger\">*</span></label>\n      <div class=\"dropdown-div\">\n        <select class=\"dropdown\" [(ngModel)]=\"filterData.standard_id\"\n          (change)=\"getAllSubjectListFromServer($event.target.value)\">\n          <option value=\"-1\">Select</option>\n          <option *ngFor=\"let standard of standardData;let i=index; \" [value]=\"standard.standard_id\">\n            {{standard.standard_name}}</option>\n        </select>\n      </div>\n    </div>\n    <!-- <div class=\"field-wrapper\">\n      <label *ngIf=\"!isProfessional\">Subject</label>\n      <label *ngIf=\"isProfessional\">Course</label>\n      <div class=\"dropdown-div\">\n        <select class=\"dropdown\" [(ngModel)]=\"filterData.subject_id\">\n          <option value=\"-1\">Select</option>\n          <option *ngFor=\"let subject of subjectData;let i=index; \" [value]=\"subject.subject_id\">\n            {{subject.subject_name}}</option>\n        </select>\n      </div>\n    </div> -->\n    <!-- <button class=\"btn fullBlue\" style=\"margin-bottom: 5px;\" [disabled]=\"(filterData.standard_id==-1) || (filterData.subject_id==-1)\" (click)=\"getTopicDetails('view')\" >Upload</button> -->\n    <div class=\"pull-right\">\n      <button class=\"btn fullBlue\" style=\"margin-top: 18px; font-size: 12px;\" (click)=\"fetchTestByStd()\">\n        Go\n      </button>\n    </div>\n  </div>\n  <div class=\"col-md-12 table-wrapper p-0 \" *ngIf=\"filteredTestList?.length\">\n    <table class=\"table product-table\">\n      <thead class=\"product-table-head\">\n        <tr>\n          <th width=\"5%\">\n            <!-- <div class=\"field-checkbox-wrapper\">\n              <input type=\"checkbox\" class=\"form-checkbox\" [(ngModel)]=\"selectAll\"\n                (ngModelChange)=\"selectAllDetails($event)\" name=\"has_mock_tests\" id=\"mock_test\"> <label\n                for=\"ch2\"></label>\n            </div> -->\n          </th>\n          <th width=\"30%\" style=\"text-align: left;\">Content</th>\n          <th>Start Date</th>\n          <th>End Date</th>\n          <th width=\"10%\">Marks</th>\n          <th class=\"text-center\">Questions</th>\n          <th class=\"text-center\">Time</th>\n          <th class=\"text-center\">Difficulty</th>\n        </tr>\n      </thead>\n      <tbody class=\"product-table-body\">\n        <!-- <ng-template [ngIf]=\"ecourse.isExpand\"> -->\n        <tr *ngFor=\"let test of filteredTestList;let i =index;\">\n          <td>\n            <div class=\"field-checkbox-wrapper\">\n              <input type=\"checkbox\" class=\"form-checkbox\" [checked]=\"test.isChecked\" [disabled]=\"test.disabled\" [(ngModel)]=\"test.isChecked\"\n                (ngModelChange)=\"selectVlaue($event,test)\" [id]=\"'ch'+index\">\n              <label [for]=\"'ch'+index\"></label>\n            </div>\n          </td>\n          <td style=\"text-align: left;\">\n            <label [for]=\"'ch'+index\" title=\"{{test.test_name}}\">\n              {{ (test.test_name.length > 20) ? (test.test_name | slice:0:20) + '...' : test.test_name }}\n            </label>\n          </td>\n          <td>{{getTime(test.start_timestamp)}}<br>\n            <span style=\"color:blue;\"><b>{{getDate(test.start_timestamp)}}</b></span>\n          </td>\n          <td>{{getTime(test.end_timestamp)}}<br>\n            <span style=\"color:blue;\"><b>{{getDate(test.end_timestamp)}}</b></span>\n          </td>\n          <td> {{test.total_marks}}</td>\n          <td>\n            {{test.total_question}}\n          </td>\n          <td>\n            {{test.duration}} &nbsp;min\n          </td>\n          <td class=\"text-center\">\n            {{test.difficulty_title}}\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n<div class=\"basic-info-footer\">\n  <div class=\"col text-center\">\n    <button class=\"btn btn-outline-danger btn-round\" style=\"color:red;\" (click)=\"gotoBack()\">Cancel</button>\n    <button class=\"btn btn-primary btn-round\" [disabled]=\"isRippleLoad\" (click)=\"gotoNext()\">Save & Next</button>\n  </div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/eStore-module/product-creation/offline-material/offline-material.component.html":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/eStore-module/product-creation/offline-material/offline-material.component.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row m-0 pt-0 product-list-wrapper\">\n  <div class=\"row main-topic-row\" style=\"margin-bottom: 10px;border: none;\">\n      <div class=\"form-group\">\n        <label class=\"text-bold\">Description<span class=\"text-danger\">*</span></label>\n        <!-- <textarea [(ngModel)]=\"description\" name=\"description\" style=\"height:120px\" maxLength=\"1500\"\n          class=\"form-control form-control-sm\" placeholder=\"Write a description about printed material\"></textarea> -->\n          <editor\n           [init]=\"editorConf\" apiKey=\"xix5hq71alw64jp2ufl9fo6nddnhg91n6h7w2afn043v538t\"   [(ngModel)]=\"description\"></editor>\n      </div>\n    </div>\n<div class=\"col-md-12 table-wrapper p-0\">\n  <table class=\"table product-table\">\n    <thead class=\"product-table-head\">\n      <tr>\n        <th width=\"5%\">\n          <div class=\"field-checkbox-wrapper\">\n            <input type=\"checkbox\" class=\"form-checkbox\" [(ngModel)]=\"selectAll\"\n              (ngModelChange)=\"selectAllDetails($event)\" name=\"has_mock_tests\" id=\"mock_test\"> <label\n              for=\"ch2\"></label>\n          </div>\n        </th>\n        <th style=\"text-align: left;\">ID</th>\n        <th width=\"10%\">Name</th>\n        <th class=\"text-center\">Description</th>\n        <th class=\"text-center\">Type</th>\n      </tr>\n    </thead>\n    <tbody class=\"product-table-body\">\n      <tr *ngFor=\"let inventoy of inventoryList;let i =index;\">\n        <td>\n          <div class=\"field-checkbox-wrapper\">\n            <input type=\"checkbox\" class=\"form-checkbox\" [disabled]=\"inventoy.is_existed_selected\" [checked]=\"inventoy.isChecked\" [(ngModel)]=\"inventoy.isChecked\"\n              (ngModelChange)=\"selectVlaue()\" [id]=\"'ch'+index\">\n              <label [for]=\"'ch'+index\"></label>\n            </div>\n        </td>\n        <td style=\"text-align: left;\">\n          <label [for]=\"'ch'+index\">{{inventoy.inventory_id}}</label>\n        </td>\n        <td>\n            <span title=\"{{inventoy.inventory_name}}\">\n                {{ (inventoy.inventory_name.length > 30) ? (inventoy.inventory_name | slice:0:30) + '...' : inventoy.inventory_name }}\n            </span>\n        </td>\n        <td>\n          <span title=\"{{inventoy.description}}\">{{ (inventoy.description.length > 30) ? (inventoy.description | slice:0:30) + '...' : inventoy.description}}</span>\n        </td>\n        <td>\n          {{inventoy.inventory_type}}\n        </td>\n      </tr>\n\n      <ng-container *ngIf=\"inventoryList.length < 1\">\n        <tr>\n          <td colspan=\"7\">No Records Found</td>\n        </tr>\n      </ng-container>\n    </tbody>\n  </table>\n</div>\n</div>\n\n<div class=\"basic-info-footer\">\n<div class=\"col text-center\">\n  <button class=\"btn btn-outline-danger btn-round\" (click)=\"gotoBack()\" style=\"color:red;\">Cancel</button>\n  <button class=\"btn btn-primary btn-round\" [disabled]=\"isRippleLoad\" (click)=\"gotoNext()\">Save & Next</button>\n</div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/eStore-module/product-creation/online-class/online-class.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/eStore-module/product-creation/online-class/online-class.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row main-topic-row\" style=\"margin-bottom: 10px;border: none;\">\n    <div class=\"form-group\">\n      <label class=\"text-bold\">Description<span class=\"text-danger\">*</span></label>\n      <!-- <textarea [(ngModel)]=\"description\" name=\"description\" style=\"height:200px\" maxLength=\"1500\"\n        class=\"form-control form-control-sm\" placeholder=\"Write a  description about this product online classes\"></textarea> -->\n        <editor\n         [init]=\"editorConf\" apiKey=\"xix5hq71alw64jp2ufl9fo6nddnhg91n6h7w2afn043v538t\"   [(ngModel)]=\"description\"></editor>\n    </div>\n  </div>\n\n  <div class=\"row basic-info-footer\">\n      <div class=\"col text-center\">\n        <button class=\"btn btn-outline-danger btn-round\" (click)=\"gotoBack()\" style=\"color:red;\">Cancel</button>\n        <button class=\"btn btn-primary btn-round\" [disabled]=\"isRippleLoad\" (click)=\"gotoNext()\">Save & Next</button>\n      </div>\n\n    </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/eStore-module/product-creation/online-exam/online-exam.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/eStore-module/product-creation/online-exam/online-exam.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"row m-0 mb-4 filters-box\">\n  <div class=\"col-md-3\">\n    <select name=\"\" class=\"form-control form-control-sm\">\n      <option>Select Exam</option>\n      <option>SSC CGL</option>\n      <option>SSC CHSL</option>\n    </select>\n  </div>\n  <div class=\"col-md-3\">\n    <select name=\"\" class=\"form-control form-control-sm\">\n      <option>Select Subject</option>\n      <option>SSC CGL</option>\n      <option>SSC CHSL</option>\n    </select>\n  </div>\n  <div class=\"col-md-6\">\n    <button class=\"btn btn-primary btn-sm btn-round\">Add</button>\n  </div>\n</div> -->\n<div class=\"row m-0 pt-0 product-list-wrapper \">\n\n  <div class=\"row main-topic-row\" style=\"margin-bottom: 10px;border: none;\">\n    <div class=\"form-group\">\n      <label class=\"text-bold\">Description <span class=\"text-danger\">*</span></label>\n      <!-- <textarea [(ngModel)]=\"description\" name=\"description\" style=\"height:120px\" maxLength=\"1500\"\n        class=\"form-control form-control-sm\" placeholder=\"Write a description about online test\"></textarea> -->\n      <editor [init]=\"editorConf\" apiKey=\"xix5hq71alw64jp2ufl9fo6nddnhg91n6h7w2afn043v538t\" [(ngModel)]=\"description\">\n      </editor>\n    </div>\n  </div>\n\n  <div class=\"col-md-12 table-wrapper p-0 \" style=\"margin-bottom: 10px;\" *ngIf=\"testlist?.length\">\n    <table class=\"table product-table\">\n      <thead class=\"product-table-head\">\n        <tr>\n          <th width=\"5%\">\n            <!-- <div class=\"field-checkbox-wrapper\">\n              <input type=\"checkbox\" class=\"form-checkbox\" [(ngModel)]=\"selectAll\"\n                (ngModelChange)=\"selectAllDetails($event)\" name=\"has_mock_tests\" id=\"mock_test\"> <label\n                for=\"ch2\"></label>\n            </div> -->\n          </th>\n          <th width=\"30%\" style=\"text-align: left;\">Content</th>\n          <th>Start Date</th>\n          <th>End Date</th>\n          <th width=\"10%\">Marks</th>\n          <th class=\"text-center\">Questions</th>\n          <th class=\"text-center\">Time</th>\n          <th class=\"text-center\">Difficulty</th>\n        </tr>\n      </thead>\n      <tbody class=\"product-table-body\">\n        <tr *ngFor=\"let test of testlist;let i =index;\">\n          <td>\n            <div class=\"field-checkbox-wrapper\">\n              <input type=\"checkbox\" class=\"form-checkbox\" [disabled]=\"test.is_existed_selected\" [checked]=\"test.isChecked\"\n                [(ngModel)]=\"test.isChecked\" (ngModelChange)=\"selectVlaue($event,test)\" [id]=\"'ch'+index\">\n              <label [for]=\"'ch'+index\"></label>\n            </div>\n          </td>\n          <td style=\"text-align: left;\">\n            <label [for]=\"'ch'+index\" title=\"{{test.test_name}}\">\n              {{ (test.test_name.length > 20) ? (test.test_name | slice:0:20) + '...' : test.test_name }}\n            </label>\n          </td>\n          <td>{{getTime(test.start_timestamp)}}<br>\n            <span style=\"color:blue;\"><b>{{getDate(test.start_timestamp)}}</b></span>\n          </td>\n          <td>{{getTime(test.end_timestamp)}}<br>\n            <span style=\"color:blue;\"><b>{{getDate(test.end_timestamp)}}</b></span>\n          </td>\n          <td> {{test.total_marks}}</td>\n          <td>\n            {{test.total_question}}\n          </td>\n          <td>\n            {{test.duration}} &nbsp;min\n          </td>\n          <td class=\"text-center\">\n            {{test.difficulty_title}}\n          </td>\n        </tr>\n\n        <!--read view -->\n        <!-- <ng-template [ngIf]=\"true\">\n          <ng-container *ngFor=\"let ecourse of product_ecourse_maps;\">\n            <tr>\n              <td>\n                <i class=\"fa fa-minus iconSize\" *ngIf=\"ecourse.isExpand\" (click)=\"expandEcourse(ecourse)\"></i>\n                <i class=\"fa fa-plus iconSize\" *ngIf=\"!ecourse.isExpand\" (click)=\"expandEcourse(ecourse)\"></i>\n              </td>\n              <td colspan=\"7\" class=\"text-left\">\n                <label class=\"labelSize\">{{ecourse.course_type}}</label>\n              </td>\n            </tr>\n            <ng-template [ngIf]=\"ecourse.isExpand\">\n\n              <tr *ngFor=\"let test of ecourse.testlist;let i =index;\">\n                <td>\n                  <div class=\"field-checkbox-wrapper\">\n                    <input type=\"checkbox\" class=\"form-checkbox\" [disabled]=\"test?.is_existed_selected\"\n                      [checked]=\"test.isChecked\" [(ngModel)]=\"test.isChecked\" (ngModelChange)=\"selectVlaue($event,test)\"\n                      [id]=\"'ch'+index\">\n                    <label [for]=\"'ch'+index\"></label>\n                  </div>\n                </td>\n                <td style=\"text-align: left;\">\n                  <label [for]=\"'ch'+index\" title=\"{{test.test_name}}\">\n                    {{ (test.test_name.length > 20) ? (test.test_name | slice:0:20) + '...' : test.test_name }}\n                  </label>\n                </td>\n                <td>{{getTime(test.start_timestamp)}}<br>\n                  <span style=\"color:blue;\"><b>{{getDate(test.start_timestamp)}}</b></span>\n                </td>\n                <td>{{getTime(test.end_timestamp)}}<br>\n                  <span style=\"color:blue;\"><b>{{getDate(test.end_timestamp)}}</b></span>\n                </td>\n                <td> {{test.total_marks}}</td>\n                <td>\n                  {{test.total_question}}\n                </td>\n                <td>\n                  {{test.duration}} &nbsp;min\n                </td>\n                <td class=\"text-center\">\n                  {{test.difficulty_title}}\n                </td>\n              </tr>\n            </ng-template>\n\n          </ng-container>\n        </ng-template> -->\n      </tbody>\n    </table>\n  </div>\n\n  <div class=\"filter_div\" style=\"border-bottom: 1px solid lightgrey;\">\n    <div class=\"field-wrapper\" style=\"margin-left:0px\">\n      <label *ngIf=\"!isProfessional\">Standard<span class=\"text-danger\">*</span></label>\n      <label *ngIf=\"isProfessional\">Master Course<span class=\"text-danger\">*</span></label>\n      <div class=\"dropdown-div\">\n        <select class=\"dropdown\" [(ngModel)]=\"filterData.standard_id\"\n          (change)=\"getAllSubjectListFromServer($event.target.value)\">\n          <option value=\"-1\">Select</option>\n          <option *ngFor=\"let standard of standardData;let i=index; \" [value]=\"standard.standard_id\">\n            {{standard.standard_name}}</option>\n        </select>\n      </div>\n    </div>\n    <!-- <div class=\"field-wrapper\">\n      <label *ngIf=\"!isProfessional\">Subject</label>\n      <label *ngIf=\"isProfessional\">Course</label>\n      <div class=\"dropdown-div\">\n        <select class=\"dropdown\" [(ngModel)]=\"filterData.subject_id\">\n          <option value=\"-1\">Select</option>\n          <option *ngFor=\"let subject of subjectData;let i=index; \" [value]=\"subject.subject_id\">\n            {{subject.subject_name}}</option>\n        </select>\n      </div>\n    </div> -->\n    <!-- <button class=\"btn fullBlue\" style=\"margin-bottom: 5px;\" [disabled]=\"(filterData.standard_id==-1) || (filterData.subject_id==-1)\" (click)=\"getTopicDetails('view')\" >Upload</button> -->\n    <div class=\"pull-right\">\n      <button class=\"btn fullBlue\" style=\"margin-top: 18px; font-size: 12px;\" (click)=\"fetchTestByStd()\">\n        Go\n      </button>\n    </div>\n  </div>\n  <div class=\"col-md-12 table-wrapper p-0 \" *ngIf=\"filteredTestList?.length\">\n    <table class=\"table product-table\">\n      <thead class=\"product-table-head\">\n        <tr>\n          <th width=\"5%\">\n            <!-- <div class=\"field-checkbox-wrapper\">\n              <input type=\"checkbox\" class=\"form-checkbox\" [(ngModel)]=\"selectAll\"\n                (ngModelChange)=\"selectAllDetails($event)\" name=\"has_mock_tests\" id=\"mock_test\"> <label\n                for=\"ch2\"></label>\n            </div> -->\n          </th>\n          <th width=\"30%\" style=\"text-align: left;\">Content</th>\n          <th>Start Date</th>\n          <th>End Date</th>\n          <th width=\"10%\">Marks</th>\n          <th class=\"text-center\">Questions</th>\n          <th class=\"text-center\">Time</th>\n          <th class=\"text-center\">Difficulty</th>\n        </tr>\n      </thead>\n      <tbody class=\"product-table-body\">\n        <!-- <ng-template [ngIf]=\"ecourse.isExpand\"> -->\n        <tr *ngFor=\"let test of filteredTestList;let i =index;\">\n          <td>\n            <div class=\"field-checkbox-wrapper\">\n              <input type=\"checkbox\" class=\"form-checkbox\" [checked]=\"test.isChecked\" [disabled]=\"test.disabled\" [(ngModel)]=\"test.isChecked\"\n                (ngModelChange)=\"selectVlaue($event,test)\" [id]=\"'ch'+index\">\n              <label [for]=\"'ch'+index\"></label>\n            </div>\n          </td>\n          <td style=\"text-align: left;\">\n            <label [for]=\"'ch'+index\" title=\"{{test.test_name}}\">\n              {{ (test.test_name.length > 20) ? (test.test_name | slice:0:20) + '...' : test.test_name }}\n            </label>\n          </td>\n          <td>{{getTime(test.start_timestamp)}}<br>\n            <span style=\"color:blue;\"><b>{{getDate(test.start_timestamp)}}</b></span>\n          </td>\n          <td>{{getTime(test.end_timestamp)}}<br>\n            <span style=\"color:blue;\"><b>{{getDate(test.end_timestamp)}}</b></span>\n          </td>\n          <td> {{test.total_marks}}</td>\n          <td>\n            {{test.total_question}}\n          </td>\n          <td>\n            {{test.duration}} &nbsp;min\n          </td>\n          <td class=\"text-center\">\n            {{test.difficulty_title}}\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n<div class=\"basic-info-footer\">\n  <div class=\"col text-center\">\n    <button class=\"btn btn-outline-danger btn-round\" (click)=\"gotoBack()\" style=\"color:red;\">Cancel</button>\n    <button class=\"btn btn-primary btn-round\" [disabled]=\"isRippleLoad\" (click)=\"gotoNext()\">Save & Next</button>\n  </div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/eStore-module/product-creation/product-creation.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/eStore-module/product-creation/product-creation.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid product-contents-wrapper mainDiv\">\n  <div class=\"row m-0 form-steps-wrapper\">\n    <ul id=\"progressbar\" class=\"row\">\n      <li class=\"col\" [ngClass]=\"{'active' : activeForm == 1, 'completed' : activeForm > 1}\"\n        *ngIf=\"formSequence[1].show\" (click)=\"visitForm(1,formSequence[1])\">Basic Info </li>\n      <li class=\"col\" [ngClass]=\"{'active' : activeForm == 2, 'completed' : activeForm > 2}\"\n        *ngIf=\"formSequence[2].show\" (click)=\"visitForm(2,formSequence[2])\">Study Materials</li>\n      <li class=\"col\" [ngClass]=\"{'active' : activeForm == 3, 'completed' : activeForm > 3}\"\n        *ngIf=\"formSequence[3].show\" (click)=\"visitForm(3,formSequence[3])\">Video Lecture</li>\n      <li class=\"col\" [ngClass]=\"{'active' : activeForm == 4, 'completed' : activeForm > 4}\"\n        *ngIf=\"formSequence[4].show\" (click)=\"visitForm(4,formSequence[4])\">Mock Test</li>\n      <li class=\"col\" [ngClass]=\"{'active' : activeForm == 5, 'completed' : activeForm > 5}\"\n        *ngIf=\"formSequence[5].show\" (click)=\"visitForm(5,formSequence[5])\">Online Exam</li>\n      <li class=\"col\" [ngClass]=\"{'active' : activeForm == 6, 'completed' : activeForm > 6}\"\n        *ngIf=\"formSequence[6].show\" (click)=\"visitForm(6,formSequence[6])\">Live Classes</li>\n      <li class=\"col\" [ngClass]=\"{'active' : activeForm == 7, 'completed' : activeForm > 7}\"\n        *ngIf=\"formSequence[7].show\" (click)=\"visitForm(7,formSequence[7])\">Classroom Classes</li>\n      <li class=\"col\" [ngClass]=\"{'active' : activeForm == 8, 'completed' : activeForm > 8}\"\n        *ngIf=\"formSequence[8].show\" (click)=\"visitForm(8,formSequence[8])\">Printed Materials</li>\n      <li class=\"col\" [ngClass]=\"{'active' : activeForm == 9, 'completed' : activeForm > 9}\"\n        *ngIf=\"formSequence[9].show\" (click)=\"visitForm(9,formSequence[9])\">Review Product</li>\n    </ul>\n  </div>\n  <div class=\"ml-0 mr-0 product-creation-wrapper\"\n    style=\"padding-left: 15rem;  padding-right: 15rem;\">\n    <div class=\"col-md-12 product-form-wrapper\">\n      <div class=\"divWrapper\">\n        <app-basic-info (nextForm)=\"nextForm()\" (startForm)=\"startForm($event)\" (toggleLoader)=\"toggleLoader($event)\"\n          (previewEvent)=\"previewSetter($event)\" [entity_id]=\"entity_id\" *ngIf=\"activeForm == 1\"></app-basic-info>\n        <app-study-material [entity_id]=\"entity_id\" [prodForm]=\"prodForm\" (nextForm)=\"nextForm()\"\n          (previewEvent)=\"previewSetter($event)\" (startForm)=\"startForm($event)\" (toggleLoader)=\"toggleLoader($event)\"\n          *ngIf=\"activeForm == 2\">\n        </app-study-material>\n        <app-video-lecture [entity_id]=\"entity_id\" [prodForm]=\"prodForm\" (nextForm)=\"nextForm()\"\n          (previewEvent)=\"previewSetter($event)\" (startForm)=\"startForm($event)\" (toggleLoader)=\"toggleLoader($event)\"\n          *ngIf=\"activeForm == 3\">\n        </app-video-lecture>\n        <app-mock-test [entity_id]=\"entity_id\" [prodForm]=\"prodForm\" (nextForm)=\"nextForm()\"\n          (previewEvent)=\"previewSetter($event)\" (startForm)=\"startForm($event)\" (toggleLoader)=\"toggleLoader($event)\"\n          *ngIf=\"activeForm == 4\"></app-mock-test>\n        <app-online-exam [entity_id]=\"entity_id\" [prodForm]=\"prodForm\" (nextForm)=\"nextForm()\"\n          (previewEvent)=\"previewSetter($event)\" (startForm)=\"startForm($event)\" (toggleLoader)=\"toggleLoader($event)\"\n          *ngIf=\"activeForm == 5\">\n        </app-online-exam>\n        <app-online-class [entity_id]=\"entity_id\" [prodForm]=\"prodForm\" (nextForm)=\"nextForm()\"\n          (previewEvent)=\"previewSetter($event)\" (startForm)=\"startForm($event)\" (toggleLoader)=\"toggleLoader($event)\"\n          *ngIf=\"activeForm == 6\">\n        </app-online-class>\n        <app-classroom-class [entity_id]=\"entity_id\" [prodForm]=\"prodForm\" (nextForm)=\"nextForm()\"\n          (previewEvent)=\"previewSetter($event)\" (startForm)=\"startForm($event)\" (toggleLoader)=\"toggleLoader($event)\"\n          *ngIf=\"activeForm == 7\">\n        </app-classroom-class>\n        <app-offline-material [entity_id]=\"entity_id\" [prodForm]=\"prodForm\" (nextForm)=\"nextForm()\"\n          (previewEvent)=\"previewSetter($event)\" (startForm)=\"startForm($event)\" (toggleLoader)=\"toggleLoader($event)\"\n          *ngIf=\"activeForm == 8\">\n        </app-offline-material>\n        <app-review-product [entity_id]=\"entity_id\" [prodForm]=\"prodForm\" (nextForm)=\"nextForm()\"\n          (previewEvent)=\"previewSetter($event)\" (startForm)=\"startForm($event)\" (toggleLoader)=\"toggleLoader($event)\"\n          *ngIf=\"activeForm == 9\">\n        </app-review-product>\n      </div>\n    </div>\n    <!-- <div class=\"col-md-4 product-preview-wrapper\">\n      <div>\n        <h5 class=\"head-label\">Product Preview</h5>\n        <table class=\"prod-table table\">\n          <tbody *ngIf=\"prodForm.itemStates?.length\">\n            <tr *ngFor=\"let item of prodForm.itemStates;\">\n              <th>{{item.title}}</th>\n              <th *ngIf=\"item.is_count_applicable\">{{prodForm.product_item_stats[item.slug]}}</th>\n              <th *ngIf=\"!item.is_count_applicable\"></th>\n            </tr>\n            <tr>\n              <th colspan=\"2\">Description</th>\n            </tr>\n            <tr>\n              <td colspan=\"2\" class=\"text-left wrap-text\" *ngIf=\"prodForm.short_description.length==0\">\n                No description added</td>\n              <td colspan=\"2\" class=\"text-left wrap-text\" *ngIf=\"prodForm.short_description.length!=0\">\n                {{prodForm.short_description}}</td>\n            </tr>\n            <tr>\n              <th>Cateory</th>\n              <td>{{prodForm.cateory}}</td>\n            </tr>\n            <tr>\n              <th>Price</th>\n              <td>{{prodForm.price}}</td>\n            </tr>\n            <tr>\n              <th colspan=\"2\">Visibility Date Range</th>\n            </tr>\n            <tr>\n              <td colspan=\"2\" class=\"text-left\" *ngIf=\"prodForm.start_datetime=='' && prodForm.end_datetime=='' \">Select Date Range </td>\n              <td colspan=\"2\" class=\"text-left\" *ngIf=\"prodForm.start_datetime!='' && prodForm.end_datetime!='' \">{{prodForm.start_datetime | date: 'dd MMM, yyyy'}} - {{prodForm.end_datetime| date: 'dd MMM, yyyy'}}</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div> -->\n  </div>\n</div>\n\n<div class=\"row loader-wrapper\" *ngIf=\"formLoading\">\n  <div class=\"loader-box m-auto\">\n    <i class=\"loading\"></i>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/eStore-module/product-creation/review-product/review-product.component.html":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/eStore-module/product-creation/review-product/review-product.component.html ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-md-12\">\n    <p class=\"m-0  review-title\">Review Product</p>\n  </div>\n</div>\n\n<div class=\"row\">\n  <!-- <div class=\"col-md-3\">\n      <img class=\"prod-image\" src=\"https://iasexamportal.com/sites/default/files/UPSC-LOGO.jpg\">\n  </div> -->\n\n  <div class=\"col-md-12\">\n    <div class=\"row\">\n      <div class=\"col-md-12 form-group\">\n        <label class=\"text-bold\">Product Name\n          <span class=\"text-danger\">*</span>\n        </label>\n        <input type=\"text\" [disabled]=\"isAdvanceProductEdit\" [(ngModel)]=\"prodForm.title\"\n          class=\"form-control form-control-sm\">\n      </div>\n\n      <div class=\"col-md-12\">\n        <div class=\"col-md-8 form-group\" style=\"padding-right: 0px;padding-left: 0px;\">\n          <label class=\"text-bold\">Description</label>\n          <!-- <textarea rows=\"3\" class=\"form-control form-control-sm\" maxLength=\"1500\" [(ngModel)]=\"prodForm.about\"></textarea> -->\n          <editor [init]=\"editorConf\" apiKey=\"xix5hq71alw64jp2ufl9fo6nddnhg91n6h7w2afn043v538t\"\n            [(ngModel)]=\"prodForm.about\"></editor>\n        </div>\n        <div class=\"col-md-4 form-group image-upload\" style=\"text-align:center;\">\n          <label for=\"file-input\">\n            <img\n              src=\"{{image_url==null?'https://cdn.vox-cdn.com/thumbor/30bQJLedP0p2KHehrHJyPc2dZ5A=/0x0:600x579/920x0/filters:focal(0x0:600x579):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/16019250/log_2048.png':image_url}}\" />\n          </label>\n          <span style=\" margin: 2em;\">Change Thumbnail </span>\n          <br><span style=\"color:#ccc\">(size: 250x150)</span>\n          <input id=\"file-input\" type=\"file\" (change)=\"uploadHandler($event)\" />\n        </div>\n      </div>\n\n      <div class=\"col-md-12 form-group\" style=\"pointer-events: none\">\n        <label class=\"text-bold\">E-courses\n          <span class=\"text-danger\">*</span>\n        </label>\n        <ng-multiselect-dropdown [placeholder]=\"'Select E-courses'\" [(ngModel)]=\"products_ecourse_maps\"\n          [data]=\"ecourseList\" [disabled]=\"isAdvanceProductEdit\" [settings]=\"moderatorSettings\">\n        </ng-multiselect-dropdown>\n      </div>\n      <div class=\"col-md-12\">\n        <div class=\"col-md-6\" style=\" padding-left: 0px;\">\n          <div class=\"form-group\">\n            <label class=\"text-bold\">Product Sell Limit\n              <span class=\"text-danger\">*</span>\n            </label>\n            <input type=\"text\" maxlength=\"6\" [disabled]=\"isAdvanceProductEdit\" [(ngModel)]=\"prodForm.purchase_limit\"\n              onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57)\" name=\"purchase_limit\"\n              class=\"form-control form-control-sm\">\n          </div>\n        </div>\n        <div class=\"col-md-3\" style=\"padding-top: 4%;padding-left: 10%;\">\n          <span class=\"field-checkbox-wrapper\">\n            <input class=\"form-checkbox\" type=\"checkbox\" id=\"free_price\" [disabled]=\"isAdvanceProductEdit\"\n              [(ngModel)]=\"prodForm.is_paid\"\n              (ngModelChange)=\"prodForm.is_paid = $event ? 1 : 0;prodForm.price_before_discount =0;prodForm.price =0;prodForm.discount_percentage =0\"\n              name=\"free_price\" name=\"is_paid\">\n            <label for=\"free_price\">Free</label>\n          </span>\n        </div>\n        <div class=\"col-md-3\">\n          <div class=\"form-group\">\n            <label for=\"text-bold\">Currency<span class=\"text-danger\">*</span></label>\n            <select id=\"country_id\" class=\"form-ctrl\" [(ngModel)]=\"prodForm.country_id\" name=\"country_id\"\n              [disabled]=\"isAdvanceProductEdit\" style=\"height: 29px;padding: 0\">\n              <option value=\"\"></option>\n              <option [value]=\"data.id\" selected *ngFor='let data of countryDetails'>\n                {{data.currency_code}}\n              </option>\n            </select>\n          </div>\n        </div>\n\n      </div>\n\n      <!-- <div class=\"col-md-12\">\n        <div class=\"col-md-4\" style=\" padding-right: 0px;\">\n          <div class=\"form-group\" style=\"text-align: right;\">\n            <label class=\"text-bold\" style=\"position: absolute; left: 19px;\">Price(Rs.)</label>\n\n            <input type=\"text\" value=\"0\" onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57)\"\n              [(ngModel)]=\"prodForm.price\" [disabled]=\"prodForm.is_paid || isAdvanceProductEdit\" name=\"price\"\n              class=\"form-control form-control-sm\">\n          </div>\n        </div>\n      </div> -->\n      <div class=\"col-md-12\">\n        <div class=\"col-md-4\">\n          <div class=\"form-group\">\n            <label class=\"text-bold\">Actual Price</label>\n            <input type=\"text\" value=\"0\" onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57)\"\n              [(ngModel)]=\"prodForm.price_before_discount\" [disabled]=\"prodForm.is_paid ||isAdvanceProductEdit \"\n              name=\"price\" class=\"form-control form-control-sm\" (ngModelChange)=\"calc()\">\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"form-group\">\n            <label class=\"text-bold\">Discount(%age)</label>\n            <span class=\"field-checkbox-wrapper\">\n              <input class=\"form-checkbox\" type=\"checkbox\" id=\"discount\" [(ngModel)]=\"prodForm.is_paid\"\n                (ngModelChange)=\"prodForm.is_paid = $event ? 1 : 0;prodForm.discount_percentage =0\" name=\"free_price\"\n                name=\"is_paid\" [disabled]=\"isAdvanceProductEdit\">\n\n            </span>\n            <input type=\"text\" value=\"0\" onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57)\"\n              [(ngModel)]=\"prodForm.discount_percentage\" [disabled]=\"prodForm.is_paid ||isAdvanceProductEdit \"\n              name=\"price\" class=\"form-control form-control-sm\" (ngModelChange)=\"calc()\">\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"form-group\">\n            <label class=\"text-bold\">Final Price</label>\n            <span class=\"field-checkbox-wrapper\">\n              <input class=\"form-checkbox\" type=\"checkbox\" id=\"free_price\" [(ngModel)]=\"prodForm.is_paid\"\n                (ngModelChange)=\"prodForm.is_paid = $event ? 1 : 0;prodForm.price =0\" name=\"free_price\" name=\"is_paid\"\n                [disabled]=\"isAdvanceProductEdit\">\n            </span>\n            <input type=\"text\" value=\"0\" onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57)\"\n              [(ngModel)]=\"prodForm.price\" disabled name=\"price\" class=\"form-control form-control-sm\">\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-12\">\n        <div class=\"col-md-4\">\n          <div class=\"form-group\">\n            <label class=\"text-bold\">Total User Purchased Product\n            </label>\n            <input type=\"text\" onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57)\" autocomplete=\"off\"\n              [(ngModel)]=\"prodForm.start_index_for_total_prod_purchase\" name=\"start_index_for_total_prod_purchase\"\n              class=\"form-control form-control-sm\">\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"form-group\">\n            <label class=\"text-bold\">Tags</label>\n            <select name=\"\" id=\"\" [(ngModel)]=\"prodForm.tag\" class=\"form-ctrl\" style=\"border-radius: 4px;\">\n              <option value=\"\"></option>\n              <option value=\"Featured\">Featured</option>\n              <option value=\"Recommended\">Recommended</option>\n              <option value=\"Popular\">Popular</option>\n              <option value=\"Others\">Others</option>\n            </select>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"form-group\" *ngIf=\"prodForm.tag === 'Others'\">\n            <label class=\"text-bold\">Others\n            </label>\n            <input type=\"text\" autocomplete=\"off\" [(ngModel)]=\"others\" name=\"Others\"\n              class=\"form-control form-control-sm\">\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-12\">\n        <div class=\"col-md-6\" style=\" padding-right: 0px;\">\n          <div class=\"form-group\" style=\"margin-top: 10px;\">\n            <span class=\"field-checkbox-wrapper\">\n              <input class=\"form-checkbox\" type=\"checkbox\" id=\"adv_product\" [(ngModel)]=\"prodForm.is_advance_product\"\n                name=\"is_advance_product\" [disabled]=\"isAdvanceProductEdit\">\n              <label for=\"adv_product\">Is Advance Product</label>\n            </span>\n          </div>\n        </div>\n        <div class=\"col-md-6\" style=\" padding-right: 0px;\">\n          <span style=\"font-weight: 600;\">Product For</span>\n          <div class=\"form-group field-wrapper form-el-width\">\n            <span class=\"field-checkbox-wrapper\" style=\"margin-right: 10px;\">\n              <input class=\"form-checkbox\" type=\"checkbox\" id=\"forStudent\" [(ngModel)]=\"advanceProduct.forStudent\"\n                name=\"is_advance_product\">\n              <label for=\"forStudent\">Student</label>\n            </span>\n            <span class=\"field-checkbox-wrapper\">\n              <input class=\"form-checkbox\" type=\"checkbox\" id=\"forOpenUser\" [(ngModel)]=\"advanceProduct.forOpenUser\"\n                name=\"is_advance_product\">\n              <label for=\"forOpenUser\">Open User</label>\n            </span>\n          </div>\n        </div>\n      </div>\n      <div class=\"row m-0\">\n        <div class=\"col-md-12 form-group m-0\">\n          <label class=\"text-bold\">Total Test</label>\n        </div>\n        <div class=\"col-md-6 form-group\">\n          <div style=\"padding-top: 0px;padding-bottom: 10px;\">\n            <label for=\"from\" style=\"font-weight: 600;\">Mock Test &nbsp; : {{mock_count}} </label>\n            <br>\n          </div>\n        </div>\n        <div class=\"col-md-6 form-group\">\n          <div style=\"padding-top: 0px;padding-bottom: 10px;\">\n            <label for=\"online\" style=\"font-weight: 600;\">Online Test &nbsp; : {{online_count}} </label>\n            <br>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row m-0\" style=\"border: 1px solid #ccc;padding: 10px;margin-left: 10px;margin-bottom: 10px;\">\n        <div class=\"col-md-12 form-group m-0\">\n          <label class=\"text-bold\">Sales Date Range</label>\n        </div>\n        <div class=\"col-md-6 form-group\">\n          <div class=\"col-md-12 datePickerBox\" style=\"padding: 0px;padding-bottom: 10px;\">\n            <label for=\"from\">From Date\n              <span class=\"text-danger\">*</span>\n            </label>\n            <input type=\"text\" [disabled]=\"isAdvanceProductEdit\" [(ngModel)]=\"prodForm.sales_from_date\" name=\"from\"\n              class=\"form-control form-control-sm\" autocomplete=\"off\" bsDatepicker>\n          </div>\n        </div>\n        <div class=\"col-md-6 form-group\">\n          <div class=\"col-md-12 datePickerBox\" style=\"padding: 0px;padding-bottom: 10px;\">\n            <label for=\"from\">To Date</label>\n            <input type=\"text\" [disabled]=\"isAdvanceProductEdit\" [(ngModel)]=\"prodForm.sales_to_date\" name=\"to\"\n              class=\"form-control form-control-sm\" autocomplete=\"off\" bsDatepicker>\n          </div>\n        </div>\n      </div>\n      <div class=\"row m-0\" style=\"border: 1px solid #ccc;padding: 10px;margin-left: 10px;margin-bottom: 10px;\">\n        <div class=\"col-md-9 form-group m-0\">\n          <label class=\"text-bold\">Visibility Date Range</label>\n        </div>\n        <div class=\"col-md-3\" style=\" padding-right: 0px;\">\n          <div class=\"form-group\" style=\"text-align: right;\">\n            <label class=\"text-bold\" style=\"position: absolute; left: 19px;\"></label>\n            <span class=\"field-checkbox-wrapper\">\n              <input class=\"form-checkbox\" type=\"checkbox\" id=\"duration\" [(ngModel)]=\"prodForm.is_duration\"\n                name=\"is_duration\" name=\"is_duration\">\n              <label for=\"duration\">Show Duration </label>\n            </span>\n          </div>\n        </div>\n        <div class=\"col-md-6 form-group\" *ngIf=\"!prodForm.is_duration\">\n          <div class=\"col-md-12 datePickerBox\" style=\"padding: 0px;padding-bottom: 10px;\">\n            <label for=\"from\">From Date\n              <span class=\"text-danger\">*</span>\n            </label>\n            <input type=\"text\" [(ngModel)]=\"prodForm.valid_from_date\" name=\"from\" class=\"form-control form-control-sm\"\n              autocomplete=\"off\" bsDatepicker>\n          </div>\n        </div>\n        <div class=\"col-md-6 form-group\" *ngIf=\"!prodForm.is_duration\">\n          <div class=\"col-md-12 datePickerBox\" style=\"padding: 0px;padding-bottom: 10px;\">\n            <label for=\"from\">To Date</label>\n            <input type=\"text\" [(ngModel)]=\"prodForm.valid_to_date\" name=\"to\" class=\"form-control form-control-sm\"\n              autocomplete=\"off\" bsDatepicker>\n          </div>\n        </div>\n        <div class=\"col-md-6 form-group\" *ngIf=\"prodForm.is_duration\">\n          <div class=\"col-md-12 datePickerBox\" style=\"padding: 0px;padding-bottom: 10px;\">\n            <label for=\"from\">Duration\n              <span class=\"text-danger\">*</span>\n            </label>\n            <div class=\"questionInfo inline-relative\">\n              <span class=\"qInfoIcon i-class\">i</span>\n              <div class=\"tooltip-box-field\">\n                Provide validate date duration in Days\n                <br> its start from student purchase date\n              </div>\n            </div>\n            <input type=\"text\" maxlength=\"4\" onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57)\"\n              [(ngModel)]=\"prodForm.duration\" name=\"from\" class=\"form-control form-control-sm\" autocomplete=\"off\">\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"basic-info-footer\">\n  <div class=\"col text-center\">\n    <button class=\"btn btn-outline-danger btn-round\" (click)=\"gotoBack()\" style=\"color:red;\"> Cancel</button>\n    <button class=\"btn btn-primary btn-round\" (click)=\"saveProduct()\">Save</button>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/eStore-module/product-creation/study-material/study-material.component.html":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/eStore-module/product-creation/study-material/study-material.component.html ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"row filters-box\">\n  <div class=\"col-md-3\">\n    <select name=\"\" class=\"form-control form-control-sm\">\n      <option>Select Exam</option>\n      <option>SSC CGL</option>\n      <option>SSC CHSL</option>\n    </select>\n  </div>\n  <div class=\"col-md-3\">\n    <select name=\"\" class=\"form-control form-control-sm\">\n      <option>Select Subject</option>\n      <option>SSC CGL</option>\n      <option>SSC CHSL</option>\n    </select>\n  </div>\n  <div class=\"col-md-6\">\n    <button class=\"btn btn-primary btn-sm btn-round\">Go</button>\n  </div>\n  <div class=\"col-md-12 subjects-nav-bar\">\n    <ng-container *ngFor=\"let subject of subjectList \">\n        <button class=\"btn btn-light btn-sm btn-tab\">{{subject.name}}</button>\n    </ng-container>\n  </div>\n</div> -->\n\n\n<!-- <div style=\"padding: 10px 15px;\">\n  <div class=\"field-checkbox-wrapper\">\n    <input type=\"checkbox\" class=\"form-checkbox\" [(ngModel)]=\"selectAll\" (ngModelChange)=\"selectAllDetails($event)\"\n      name=\"has_mock_tests\" id=\"mock_test\">\n    <label for=\"ch2\" style=\"font-weight: 600;\">Select All</label>\n  </div>\n</div> -->\n<div class=\"fluid-container data-wrapper\">\n  <div class=\"row main-topic-row\" style=\"margin-bottom: 10px;border: none;\">\n    <div class=\"form-group\">\n      <label class=\"text-bold\">Description<span class=\"text-danger\">*</span></label>\n      <!-- <textarea [(ngModel)]=\"description\" name=\"description\" maxLength=\"1500\" style=\"height:120px\" class=\"form-control form-control-sm\"\n        placeholder=\"Write a  description about study material \"></textarea> -->\n        <editor\n         [init]=\"editorConf\" apiKey=\"xix5hq71alw64jp2ufl9fo6nddnhg91n6h7w2afn043v538t\"   [(ngModel)]=\"description\"></editor>\n    </div>\n  </div>\n\n  <!-- <div class=\"field-checkbox-wrapper\" style=\"margin-left: 10px;\">\n    <input type=\"checkbox\"  class=\"form-checkbox\" [(ngModel)]=\"selectAll\" name=\"has_mock_tests\" id=\"Select_All\">\n    <label for=\"Select_All\">Select All</label>\n  </div> -->\n\n  <div class=\"row main-topic-row\" *ngFor=\"let ecourse of materialData;\">\n    <div class=\"row singleton-row col-md-12 topic-data main-topic-data\">\n      <div class=\"col-md-8 topic-name\">\n        <!-- <div class=\"field-checkbox-wrapper\">\n          <input type=\"checkbox\" class=\"form-checkbox\" [(ngModel)]=\"ecourse.selected\"\n            (ngModelChange)=\"selectAllDetails($event)\" name=\"has_mock_tests\" id=\"mock_test\">\n          <label for=\"ch2\"></label>\n        </div> -->\n        <button class=\"btn-ga-collapse\">\n          <i class=\"fa fa-minus\" *ngIf=\"ecourse.isExpand\" (click)=\"subjectListToggle(ecourse)\"></i>\n          <i class=\"fa fa-plus\" *ngIf=\"!ecourse.isExpand\" (click)=\"subjectListToggle(ecourse)\"></i>\n        </button> {{ecourse.ecourse_name}}\n      </div>\n      <div class=\"col-md-4\">\n      </div>\n\n    </div>\n    <!-- <div class=\"row col-md-12 p-0\" *ngIf=\"ecourse.isExpand\">\n        {{ecourse.subjectsList}}\n        <div class=\"col-md-12 topic-material-data\">\n          <ng-container *ngTemplateOutlet=\"youtubeData; context:{$implicit: topic.videosList, level: 1}\"></ng-container>\n          <ng-container *ngTemplateOutlet=\"assignmentData; context:{$implicit: topic.assignmentList, level: 1}\">\n          </ng-container>\n          <ng-container *ngTemplateOutlet=\"imagelistData; context:{$implicit: topic.imageList, level: 1}\"></ng-container>\n          <ng-container *ngTemplateOutlet=\"audioNotesData; context:{$implicit: topic.audioNotesList, level: 1}\">\n          </ng-container>\n          <ng-container *ngTemplateOutlet=\"notesData; context:{$implicit: topic.notesList, level: level+1}\">\n          </ng-container>\n          <ng-container\n            *ngTemplateOutlet=\"previousYearQuesListData; context:{$implicit: topic.previousYearQuesList, level: level+1}\">\n          </ng-container>\n          <ng-container *ngTemplateOutlet=\"slidesListData; context:{$implicit: topic.slidesList, level: level+1}\">\n          </ng-container>\n          <ng-container\n            *ngTemplateOutlet=\"studyMaterialList; context:{$implicit: topic.studyMaterialList, level: level+1}\">\n          </ng-container>\n        </div>\n        <div class=\"row col-md-12 subTopics-data\">\n          <ng-container *ngTemplateOutlet=\"recursiveNodes; context: { $implicit: topic.subTopics, subLevel: 1 } \">\n          </ng-container>\n        </div>\n      </div> -->\n    <div class=\"row col-md-12 p-0\" *ngIf=\"ecourse.isExpand\">\n      <div class=\"row col-md-12 subTopics-data\">\n        <ng-container *ngTemplateOutlet=\"subjectsNodes; context: { $implicit: ecourse.subjectsList, level: 1 } \">\n        </ng-container>\n        <div *ngIf=\"ecourse.subjectsList?.length==0\" style=\"text-align: center;\">\n          No data found\n        </div>\n      </div>\n    </div>\n  </div>\n  <div *ngIf=\"materialData?.length==0\">\n    {{outputMessage}}\n  </div>\n\n</div>\n\n\n<ng-template #subjectsNodes let-subjectList let-level=\"level\">\n  <div class=\"row topic-row\" *ngFor=\"let subject of subjectList\">\n    <div class=\"row singleton-row col-md-12 topic-data topic-name\">\n      <div class=\"col-md-12 topic-name\" [ngStyle]=\"{'padding-left': level+'em'}\">\n        <!-- <div class=\"field-checkbox-wrapper\">\n            <input type=\"checkbox\" class=\"form-checkbox\" [(ngModel)]=\"subject.selected\"\n              (ngModelChange)=\"selectAllDetails($event)\" name=\"has_mock_tests\" id=\"mock_test\">\n            <label for=\"ch2\"></label>\n          </div> -->\n        <div class=\"col-md-1\">\n        <button class=\"btn-ga-collapse\">\n          <i class=\"fa fa-minus\" *ngIf=\"subject.isExpand\" (click)=\"collapseAll(subject, false)\"></i>\n          <i class=\"fa fa-plus\" *ngIf=\"!subject.isExpand\" (click)=\"collapseAll(subject, true)\"></i>\n        </button>\n        </div>\n        <div class=\"col-md-4\">\n          {{subject.subjectName}}\n        </div>\n        <div class=\"col-md-7\" style=\"text-align: right;\">\n        <span *ngFor=\"let count of subject.category_count\" title=\"{{count.category_name}}\" class=\"category_name\" style=\"font-size: 12px;font-weight: normal;\">\n          <span *ngIf=\"count.category_name != 'VDOCipher'\">{{(count.category_name.length > 13) ? (count.category_name | slice:0:13) + '...' : count.category_name}}</span>\n          <span *ngIf=\"count.category_name == 'VDOCipher'\">Video</span>\n           - {{count.count}}\n        </span>\n      </div>\n      </div>\n    </div>\n    <div class=\"row col-md-12 p-0\" *ngIf=\"subject.isExpand\">\n      <div class=\"row col-md-12 topic-material-data\" [ngStyle]=\"{'padding-left': level+'em'}\">\n        <ng-container *ngTemplateOutlet=\"youtubeData; context:{$implicit: subject.studyMaterialMap.videosList, level: level+1}\">\n        </ng-container>\n        <ng-container *ngTemplateOutlet=\"assignmentData; context:{$implicit: subject.studyMaterialMap.Assignment, level: level+1}\">\n        </ng-container>\n        <ng-container *ngTemplateOutlet=\"imagelistData; context:{$implicit: subject.studyMaterialMap.Images, level: level+1}\">\n        </ng-container>\n        <ng-container *ngTemplateOutlet=\"audioNotesData; context:{$implicit: subject.studyMaterialMap.AudioNotes, level: level+1}\">\n        </ng-container>\n        <ng-container *ngTemplateOutlet=\"notesData; context:{$implicit: subject.studyMaterialMap.Notes, level: level+1}\">\n        </ng-container>\n        <ng-container\n          *ngTemplateOutlet=\"previousYearQuesListData; context:{$implicit: subject.studyMaterialMap.PreviousYearQuestionsPaper, level: level+1}\">\n        </ng-container>\n        <ng-container *ngTemplateOutlet=\"slidesListData; context:{$implicit: subject.studyMaterialMap.Slides, level: level+1}\">\n        </ng-container>\n        <ng-container\n          *ngTemplateOutlet=\"studyMaterialList; context:{$implicit: subject.studyMaterialMap.EBook, level: level+1}\">\n        </ng-container>\n      </div>\n      <div class=\"row col-md-12 subTopics-data\">\n        <ng-container *ngTemplateOutlet=\"recursiveNodes; context: { $implicit: subject.subtopicList, level: level+1 } \">\n        </ng-container>\n      </div>\n    </div>\n  </div>\n</ng-template>\n\n<ng-template #recursiveNodes let-subTopics let-level=\"level\">\n  <div class=\"row topic-row\" *ngFor=\"let topic of subTopics\">\n    <div class=\"row singleton-row col-md-12 topic-data\">\n      <div class=\"col-md-8 topic-name\" [ngStyle]=\"{'padding-left': level+'em'}\">\n        <!-- <div class=\"field-checkbox-wrapper\">\n          <input type=\"checkbox\" class=\"form-checkbox\" [(ngModel)]=\"topic.selected\"\n            (ngModelChange)=\"selectAllDetails($event)\" name=\"has_mock_tests\" id=\"mock_test\">\n          <label for=\"ch2\"></label>\n        </div> -->\n        <button class=\"btn-ga-collapse\">\n          <i class=\"fa fa-minus\" *ngIf=\"topic.isExpand\" (click)=\"getTopicData(topic)\"></i>\n          <i class=\"fa fa-plus\" *ngIf=\"!topic.isExpand\" (click)=\"getTopicData(topic)\"></i>\n        </button> {{topic.topicName}}\n      </div>\n      <div class=\"col-md-4\">\n      </div>\n    </div>\n    <div class=\"row col-md-12 p-0\" *ngIf=\"topic.isExpand\">\n      <div class=\"row col-md-12 topic-material-data\">\n        <ng-container *ngTemplateOutlet=\"youtubeData; context:{$implicit: topic.studyMaterialMap.videosList, level: level+1}\">\n        </ng-container>\n        <ng-container *ngTemplateOutlet=\"assignmentData; context:{$implicit: topic.studyMaterialMap.Assignment, level: level+1}\">\n        </ng-container>\n        <ng-container *ngTemplateOutlet=\"imagelistData; context:{$implicit: topic.studyMaterialMap.Images, level: level+1}\">\n        </ng-container>\n        <ng-container *ngTemplateOutlet=\"audioNotesData; context:{$implicit: topic.studyMaterialMap.AudioNotes, level: level+1}\">\n        </ng-container>\n        <ng-container *ngTemplateOutlet=\"notesData; context:{$implicit: topic.studyMaterialMap.Notes, level: level+1}\">\n        </ng-container>\n        <ng-container\n          *ngTemplateOutlet=\"previousYearQuesListData; context:{$implicit: topic.studyMaterialMap.PreviousYearQuestionsPaper, level: level+1}\">\n        </ng-container>\n        <ng-container *ngTemplateOutlet=\"slidesListData; context:{$implicit: topic.studyMaterialMap.Slides, level: level+1}\">\n        </ng-container>\n        <ng-container\n          *ngTemplateOutlet=\"studyMaterialList; context:{$implicit: topic.studyMaterialMap.EBook, level: level+1}\">\n        </ng-container>\n\n      </div>\n      <div class=\"row col-md-12 subTopics-data\">\n        <ng-container *ngTemplateOutlet=\"recursiveNodes; context: { $implicit: topic.subtopicList, level: level+1 } \">\n        </ng-container>\n      </div>\n    </div>\n  </div>\n</ng-template>\n\n\n<ng-template #youtubeData let-youtube let-level=\"level\">\n  <div class=\"row singleton-row material-row\" *ngFor=\"let video of youtube\">\n    <div class=\"col-md-8 material-title txt-color\" [ngStyle]=\"{'padding-left': level+'em'}\">\n      <div class=\"field-checkbox-wrapper\">\n        <input type=\"checkbox\" [disabled]=\"video.is_existed_selected\" class=\"form-checkbox\" [(ngModel)]=\"video.selected\"\n          (ngModelChange)=\"selectAllDetails($event,video)\" name=\"has_mock_tests\" id=\"mock_test\">\n        <label for=\"ch2\"></label>\n      </div>\n      <h4 class=\"file__title\" title=\"{{video.title}}\">\n        <i class=\"fa fa-youtube-play text-red\"></i>\n        <a target=\"_blank\" class=\"txt-color\">\n          <!-- //[href]=\"video.video_url\" -->\n          <span class=\"txt-title\">{{video.title}}  </span>\n        </a>\n      </h4>\n    </div>\n    <div class=\"col-md-4 txt-font\">\n      {{video.category_name}}\n    </div>\n  </div>\n</ng-template>\n\n<ng-template #imagelistData let-image let-level=\"level\">\n  <div class=\"row singleton-row material-row\" *ngFor=\"let file of image\">\n    <div class=\"col-md-8 material-title txt-color \" [ngStyle]=\"{'padding-left': level+'em'}\">\n      <div class=\"field-checkbox-wrapper\">\n        <input type=\"checkbox\" [disabled]=\"file.is_existed_selected\" class=\"form-checkbox\" [(ngModel)]=\"file.selected\"\n          (ngModelChange)=\"selectAllDetails($event,file)\" name=\"has_mock_tests\" id=\"mock_test\">\n        <label for=\"ch2\"></label>\n      </div>\n      <h4 class=\"file__title\" title=\"{{file.title}}\">\n        <i [class]=\"file?.extension\" aria-hidden=\"true\"></i>\n        <span class=\"txt-title\">{{file.title}} </span>\n      </h4>\n    </div>\n    <div class=\"col-md-4 txt-font\">\n      {{file.size | number:'.2-2'}}&nbsp;MB\n    </div>\n    <!-- <div class=\"col-md-4\">\n      <div class=\"action-buttons\">\n          <button class=\"btn btn-xs btn-ga-white\">\n            <a [href]=\"file.file_name\" class=\"btn-ga-white-download\" [download]=\"file.title\">Download</a>\n          </button>\n          <button class=\"btn btn-xs btn-ga-white\" (click)=\"setRemoveDataFile(file)\">Delete</button>\n        </div>\n    </div> -->\n  </div>\n</ng-template>\n\n<ng-template #assignmentData let-assignment let-level=\"level\">\n  <div class=\"row singleton-row material-row\" *ngFor=\"let file of assignment\">\n    <div class=\"col-md-8 material-title txt-color\" [ngStyle]=\"{'padding-left': level+'em'}\">\n      <div class=\"field-checkbox-wrapper\">\n        <input type=\"checkbox\" [disabled]=\"file.is_existed_selected\" class=\"form-checkbox\" [(ngModel)]=\"file.selected\"\n          (ngModelChange)=\"selectAllDetails($event,file)\" name=\"has_mock_tests\" id=\"mock_test\">\n        <label for=\"ch2\"></label>\n      </div>\n      <h4 class=\"file__title\" title=\"{{file.title}}\">\n        <i [class]=\"file?.extension\" aria-hidden=\"true\"></i>\n        <span class=\"txt-title\">{{file.title}}</span>\n      </h4>\n    </div>\n    <div class=\"col-md-4 txt-font\">\n      {{file.size | number:'.2-2'}}&nbsp;MB\n    </div>\n    <!-- <div class=\"col-md-4\">\n      <div class=\"action-buttons\">\n          <button class=\"btn btn-xs btn-ga-white\">\n            <a [href]=\"file.file_name\" class=\"btn-ga-white-download\" [download]=\"file.title\">Download</a>\n          </button>\n          <button class=\"btn btn-xs btn-ga-white\" (click)=\"setRemoveDataFile(file)\">Delete</button>\n        </div>\n    </div> -->\n  </div>\n</ng-template>\n\n<ng-template #notesData let-notes let-level=\"level\">\n  <div class=\"row singleton-row material-row\" *ngFor=\"let file of notes\">\n    <div class=\"col-md-8 material-title txt-color\" [ngStyle]=\"{'padding-left': level+'em'}\">\n      <div class=\"field-checkbox-wrapper\">\n        <input type=\"checkbox\" [disabled]=\"file.is_existed_selected\" class=\"form-checkbox\" [(ngModel)]=\"file.selected\"\n          (ngModelChange)=\"selectAllDetails($event,file)\" name=\"has_mock_tests\" id=\"mock_test\">\n        <label for=\"ch2\"></label>\n      </div>\n      <h4 class=\"file__title\" title=\"{{file.title}}\">\n        <i [class]=\"file?.extension\" aria-hidden=\"true\"></i>\n        <span class=\"txt-title\">{{file.title}}</span>\n      </h4>\n    </div>\n    <div class=\"col-md-4 txt-font\">\n      {{file.size | number :'.2-2'}}&nbsp;MB\n    </div>\n    <!-- <div class=\"col-md-4\">\n      <div class=\"action-buttons\">\n          <button class=\"btn btn-xs btn-ga-white\">\n            <a [href]=\"file.file_name\" class=\"btn-ga-white-download\" [download]=\"file.title\">Download</a>\n          </button>\n          <button class=\"btn btn-xs btn-ga-white\" (click)=\"setRemoveDataFile(file)\">Delete</button>\n        </div>\n    </div> -->\n  </div>\n</ng-template>\n\n<ng-template #audioNotesData let-audios let-level=\"level\">\n  <div class=\"row singleton-row material-row\" *ngFor=\"let audio of audios\">\n    <div class=\"col-md-8 material-title txt-color\" [ngStyle]=\"{'padding-left': level+'em'}\">\n      <div class=\"field-checkbox-wrapper\">\n        <input type=\"checkbox\" [disabled]=\"audio.is_existed_selected\" class=\"form-checkbox\" [(ngModel)]=\"audio.selected\"\n          (ngModelChange)=\"selectAllDetails($event,audio)\" name=\"has_mock_tests\" id=\"mock_test\">\n        <label for=\"ch2\"></label>}\n      </div>\n      <h4 class=\"file__title\" title=\"{{audio.title}}\">\n        <i [class]=\"audio?.extension\" aria-hidden=\"true\"></i>\n        <span class=\"txt-title\">{{audio.title}}</span>\n      </h4>\n    </div>\n    <div class=\"col-md-4 txt-font\">\n      {{audio.size | number :'.2-2'}}&nbsp;MB\n    </div>\n    <!-- <div class=\"col-md-4\">\n      <div class=\"action-buttons\">\n          <button class=\"btn btn-xs btn-ga-white\">\n            <a [href]=\"audio.file_name\" class=\"btn-ga-white\" [download]=\"audio.title\">Download</a>\n          </button>\n          <button class=\"btn btn-xs btn-ga-white\" (click)=\"setRemoveDataFile(audio)\">Delete</button>\n        </div>\n    </div> -->\n  </div>\n</ng-template>\n\n<ng-template #previousYearQuesListData let-previousYearQuesList let-level=\"level\">\n  <div class=\"row singleton-row material-row\" *ngFor=\"let file of previousYearQuesList\">\n    <div class=\"col-md-8 material-title txt-color\" [ngStyle]=\"{'padding-left': level+'em'}\">\n      <div class=\"field-checkbox-wrapper\">\n        <input type=\"checkbox\" [disabled]=\"file.is_existed_selected\" class=\"form-checkbox\" [(ngModel)]=\"file.selected\"\n          (ngModelChange)=\"selectAllDetails($event,file)\" name=\"has_mock_tests\" id=\"mock_test\">\n        <label for=\"ch2\"></label>\n      </div>\n      <h4 class=\"file__title\" title=\"{{file.title}}\">\n        <i [class]=\"file?.extension\" aria-hidden=\"true\"></i>\n        <span class=\"txt-title\">{{file.title}}</span>\n      </h4>\n    </div>\n    <div class=\"col-md-4 txt-font\">\n      {{file.size | number :'.2-2'}}&nbsp;MB\n    </div>\n    <!-- <div class=\"col-md-4\">\n      <div class=\"action-buttons\">\n          <button class=\"btn btn-xs btn-ga-white\">\n            <a [href]=\"file.file_name\" class=\"btn-ga-white-download\" [download]=\"file.title\">Download</a>\n          </button>\n          <button class=\"btn btn-xs btn-ga-white\" (click)=\"setRemoveDataFile(file)\">Delete</button>\n        </div>\n    </div> -->\n  </div>\n</ng-template>\n\n\n<ng-template #slidesListData let-slidesList let-level=\"level\">\n  <div class=\"row singleton-row material-row\" *ngFor=\"let file of slidesList\">\n    <div class=\"col-md-8 material-title txt-color\" [ngStyle]=\"{'padding-left': level+'em'}\">\n      <div class=\"field-checkbox-wrapper\">\n        <input type=\"checkbox\" [disabled]=\"file.is_existed_selected\" class=\"form-checkbox\" [(ngModel)]=\"file.selected\"\n          (ngModelChange)=\"selectAllDetails($event,file)\" name=\"has_mock_tests\" id=\"mock_test\">\n        <label for=\"ch2\"></label>\n      </div>\n      <h4 class=\"file__title\" title=\"{{file.title}}\">\n        <i [class]=\"file?.extension\" aria-hidden=\"true\"></i>\n        <span class=\"txt-title\">{{file.title}}</span>\n      </h4>\n    </div>\n    <div class=\"col-md-4 txt-font\">\n      {{file.size | number:'.2-2'}}&nbsp;MB\n    </div>\n    <!-- <div class=\"col-md-4\">\n      <div class=\"action-buttons\">\n          <button class=\"btn btn-xs btn-ga-white\">\n            <a [href]=\"file.file_name\" class=\"btn-ga-white-download\" [download]=\"file.title\">Download</a>\n          </button>\n          <button class=\"btn btn-xs btn-ga-white\" (click)=\"setRemoveDataFile(file)\">Delete</button>\n        </div>\n    </div> -->\n  </div>\n</ng-template>\n\n<ng-template #studyMaterialList let-studyList let-level=\"level\">\n  <div class=\"row singleton-row material-row\" *ngFor=\"let file of studyList\">\n    <div class=\"col-md-8 material-title txt-color\" [ngStyle]=\"{'padding-left': level+'em'}\">\n      <div class=\"field-checkbox-wrapper\">\n        <input type=\"checkbox\" [disabled]=\"file.is_existed_selected\" class=\"form-checkbox\" [(ngModel)]=\"file.selected\"\n          (ngModelChange)=\"selectAllDetails($event,file)\" name=\"has_mock_tests\" id=\"mock_test\">\n        <label for=\"ch2\"></label>\n      </div>\n      <h4 class=\"file__title\" title=\"{{file.title}}\">\n        <i [class]=\"file?.extension\" aria-hidden=\"true\"></i>\n        <span class=\"txt-title\">{{file.title}} </span>\n      </h4>\n    </div>\n    <div class=\"col-md-4 txt-font\">\n      {{file.size | number:'.2-2'}}&nbsp;MB\n    </div>\n    <!-- <div class=\"col-md-4\">\n      <div class=\"action-buttons\">\n          <button class=\"btn btn-xs btn-ga-white\">\n            <a [href]=\"file.file_name\" class=\"btn-ga-white-download\" [download]=\"file.title\">Download</a>\n          </button>\n          <button class=\"btn btn-xs btn-ga-white\" (click)=\"setRemoveDataFile(file)\">Delete</button>\n        </div>\n    </div> -->\n  </div>\n</ng-template>\n\n\n\n\n<div class=\"basic-info-footer\">\n  <div class=\"col text-center\">\n    <button class=\"btn btn-outline-danger btn-round\" (click)=\"gotoBack()\" style=\"color:red;\">Cancel</button>\n    <button class=\"btn btn-primary btn-round\" [disabled]=\"auth.isRippleLoad.getValue()\" (click)=\"gotoNext()\">Save & Next</button>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/eStore-module/product-creation/video-lecture/video-lecture.component.html":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/eStore-module/product-creation/video-lecture/video-lecture.component.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"fluid-container data-wrapper\">\n  <div class=\"row main-topic-row\" style=\"margin-bottom: 10px;border: none;\">\n    <div class=\"form-group\">\n      <label class=\"text-bold\">Description <span class=\"text-danger\">*</span></label>\n      <!-- <textarea [(ngModel)]=\"description\" name=\"description\" style=\"height:120px\" maxLength=\"1500\" class=\"form-control form-control-sm\"\n        placeholder=\"Write a description about this video lecture\"></textarea> -->\n      <editor\n       [init]=\"editorConf\" apiKey=\"xix5hq71alw64jp2ufl9fo6nddnhg91n6h7w2afn043v538t\"   [(ngModel)]=\"description\"\n     ></editor>\n    </div>\n  </div>\n\n  <div class=\"row main-topic-row\" *ngFor=\"let ecourse of materialData;\">\n    <div class=\"row singleton-row col-md-12 topic-data main-topic-data\">\n      <div class=\"col-md-8 topic-name\">\n        <button class=\"btn-ga-collapse\">\n          <i class=\"fa fa-minus\" *ngIf=\"ecourse.isExpand\" (click)=\"subjectListToggle(ecourse)\"></i>\n          <i class=\"fa fa-plus\" *ngIf=\"!ecourse.isExpand\" (click)=\"subjectListToggle(ecourse)\"></i>\n        </button> {{ecourse.ecourse_name}}\n      </div>\n      <div class=\"col-md-4\">\n      </div>\n\n    </div>\n    <div class=\"row col-md-12 p-0\" *ngIf=\"ecourse.isExpand\">\n      <div class=\"row col-md-12 subTopics-data\">\n        <ng-container *ngTemplateOutlet=\"subjectsNodes; context: { $implicit: ecourse.subjectsList, level: 1 } \">\n        </ng-container>\n        <div *ngIf=\"ecourse.subjectsList?.length==0\">\n          No data found\n        </div>\n      </div>\n    </div>\n  </div>\n  <div *ngIf=\"materialData?.length==0\">\n    {{outputMessage}}\n  </div>\n\n</div>\n\n\n<ng-template #subjectsNodes let-subjectList let-level=\"level\">\n  <div class=\"row topic-row\" *ngFor=\"let subject of subjectList\">\n    <div class=\"row singleton-row col-md-12 topic-data topic-name\">\n      <div class=\"col-md-12 topic-name\" [ngStyle]=\"{'padding-left': level+'em'}\">\n        <div class=\"col-md-1\">\n        <button class=\"btn-ga-collapse\">\n          <i class=\"fa fa-minus\" *ngIf=\"subject.isExpand\" (click)=\"collapseAll(subject, false)\"></i>\n          <i class=\"fa fa-plus\" *ngIf=\"!subject.isExpand\" (click)=\"collapseAll(subject, true)\"></i>\n        </button>\n        </div>\n        <div class=\"col-md-4\">\n          {{subject.subjectName}}\n        </div>\n        <div class=\"cd-md-7\" style=\"text-align: right;\">\n        <span *ngFor=\"let count of subject.category_count\" title=\"{{count.category_name}}\" class=\"category_name\" style=\"font-size: 12px;font-weight: normal;\">\n          <span *ngIf=\"count.category_name != 'VDOCipher'\">{{(count.category_name.length > 13) ? (count.category_name | slice:0:13) + '...' : count.category_name}}</span>\n          <span *ngIf=\"count.category_name == 'VDOCipher'\">Video</span>\n           - {{count.count}}\n        </span>\n      </div>\n      </div>\n    </div>\n    <div class=\"row col-md-12 p-0\" *ngIf=\"subject.isExpand\">\n      <div class=\"row col-md-12 topic-material-data\" [ngStyle]=\"{'padding-left': level+'em'}\">\n        <ng-container *ngTemplateOutlet=\"youtubeData; context:{$implicit: subject.studyMaterialMap.YoutubeURL, level: level+1}\">\n        </ng-container>\n        <ng-container *ngTemplateOutlet=\"youtubeData; context:{$implicit: subject.studyMaterialMap.VDOCipher, level: level+1}\">\n        </ng-container>\n        <ng-container *ngTemplateOutlet=\"youtubeData; context:{$implicit: subject.studyMaterialMap.Vimeo, level: level+1}\">\n        </ng-container>\n      </div>\n      <div class=\"row col-md-12 subTopics-data\">\n        <ng-container *ngTemplateOutlet=\"recursiveNodes; context: { $implicit: subject.subtopicList, level: level+1 } \">\n        </ng-container>\n      </div>\n    </div>\n  </div>\n</ng-template>\n\n<ng-template #recursiveNodes let-subTopics let-level=\"level\">\n  <div class=\"row topic-row\" *ngFor=\"let topic of subTopics\">\n    <div class=\"row singleton-row col-md-12 topic-data\">\n      <div class=\"col-md-8 topic-name\" [ngStyle]=\"{'padding-left': level+'em'}\">\n        <button class=\"btn-ga-collapse\">\n          <i class=\"fa fa-minus\" *ngIf=\"topic.isExpand\" (click)=\"getTopicData(topic)\"></i>\n          <i class=\"fa fa-plus\" *ngIf=\"!topic.isExpand && (calculateStudyMaterialMapLength(topic)>0 || topic.subtopicList?.length>0)\" (click)=\"getTopicData(topic)\"></i>\n        </button> {{topic.topicName}}\n      </div>\n      <div class=\"col-md-4\">\n      </div>\n    </div>\n    <div class=\"row col-md-12 p-0\" *ngIf=\"topic.isExpand\">\n      <div class=\"row col-md-12 topic-material-data\">\n        <ng-container *ngTemplateOutlet=\"youtubeData; context:{$implicit: topic.studyMaterialMap.YoutubeURL, level: level+1}\">\n        </ng-container>\n        <ng-container *ngTemplateOutlet=\"youtubeData; context:{$implicit: topic.studyMaterialMap.VDOCipher, level: level+1}\">\n        </ng-container>\n        <ng-container *ngTemplateOutlet=\"youtubeData; context:{$implicit: topic.studyMaterialMap.Vimeo, level: level+1}\">\n        </ng-container>\n      </div>\n      <div class=\"row col-md-12 subTopics-data\">\n        <ng-container *ngTemplateOutlet=\"recursiveNodes; context: { $implicit: topic.subtopicList, level: level+1 } \">\n        </ng-container>\n      </div>\n    </div>\n  </div>\n</ng-template>\n\n\n<ng-template #youtubeData let-youtube let-level=\"level\">\n  <div class=\"row singleton-row material-row\" *ngFor=\"let video of youtube\">\n    <div class=\"col-md-8 material-title txt-color\" [ngStyle]=\"{'padding-left': level+'em'}\">\n      <div class=\"field-checkbox-wrapper\">\n        <input type=\"checkbox\" [disabled]=\"video.is_existed_selected || (isPaid == 'Y' && video.category_name == 'Youtube URL')\" class=\"form-checkbox\" [(ngModel)]=\"video.selected\"\n          (ngModelChange)=\"selectAllDetails($event,video)\" name=\"has_mock_tests\" id=\"mock_test\">\n        <label for=\"ch2\"></label>\n      </div>\n      <h4 class=\"file__title\" title=\"{{video.title}}\">\n        <i class=\"fa fa-youtube-play text-red\" *ngIf=\"video.category_name!='VDOCipher' && video.category_name!='Vimeo'\"></i>\n        <i class=\"fa fa-play-circle-o\" aria-hidden=\"true\" style=\"color: blue;font-size: 16px;\" *ngIf=\"video.category_name=='VDOCipher' || video.category_name == 'Vimeo'\"></i>\n        <a target=\"_blank\" class=\"txt-color\">\n          <span class=\"txt-title\">{{video.title}}</span>\n        </a>\n      </h4>\n    </div>\n    <div class=\"col-md-4 txt-font\">\n      {{video.category_name=='VDOCipher' ? 'Video' : video.category_name}}\n    </div>\n  </div>\n</ng-template>\n\n<div class=\"basic-info-footer\">\n  <div class=\"col text-center\">\n    <button class=\"btn btn-outline-danger btn-round\" (click)=\"gotoBack()\" style=\"color:red;\">Cancel</button>\n    <button class=\"btn btn-primary btn-round\" [disabled]=\"isRippleLoad\" (click)=\"gotoNext()\">Save & Next</button>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/eStore-module/product-list/product-list.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/eStore-module/product-list/product-list.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid product-wrapper p-0\" style=\"padding: 2%;padding-top: 2px;\">\n  <div class=\"row m-0 pt-3 pb-3\" style=\"border-bottom: 1pt solid #ddd;padding-bottom:10px\">\n    <div class=\"col-md-8\">\n      <section class=\"middle-top clearFix bulk-header\">\n        <div>\n          <h1 class=\"pull-left\">\n            <a routerLink=\"/view/e-store/home\" style=\"padding:0px; \">\n              Store\n            </a>\n            <i style=\"font-family: 'FontAwesome';\" class=\"fas fa-angle-right\"></i>\n            <span> Manage Product </span>\n          </h1>\n        </div>\n      </section>\n    </div>\n    <div class=\"col-md-4 col-sm-4 text-right m-auto\">\n      <div style=\"float: right;margin-right: 30px;margin-left: 11px;margin-top: 7px;\">\n        <span data-toggle=\"modal\" data-target=\"#helpFAQ\"> <i class=\"fa fa-question-circle\"\n            style=\"cursor: pointer; font-size: 20px;\" title=\"FAQ???S & Help Descriptions\" aria-hidden=\"true\"></i></span>\n      </div>\n      <button class=\"btn btn-product pr-btn\" routerLink=\"/view/e-store/create\">\n        <i class=\"fa fa-plus\" style=\"color: white;\" aria-hidden=\"true\"></i>\n        New Product</button>\n    </div>\n  </div>\n  <div class=\"row m-0 action-bar\">\n    <div class=\"col-md-10 col-sm-10 col-lg-10 container\"\n      style=\"width: auto;display: flex; flex-wrap: wrap;bottom: 12px;\">\n\n      <!-- <div class=\"form-group field-wrapper form-el-width\">\n        <label class=\"text-bold\">eCourse</label>\n        <select [(ngModel)]=\"filter.by.ecourseId\" class=\"form-ctrl\">\n          <option value=\"-1\">All</option>\n        </select>\n      </div> -->\n\n      <div class=\"form-group field-wrapper form-el-width\">\n        <label class=\"text-bold\">Status</label>\n        <select [(ngModel)]=\"filter.by.status\" class=\"form-ctrl\" style=\"border-radius: 4px; width: 69%;\">\n          <option value=10>Draft</option>\n          <option value=20>Ready </option>\n          <option value=30>Published</option>\n          <option value=40>Unpublished</option>\n          <option value=50>Closed</option>\n        </select>\n      </div>\n\n      <div class=\"form-group field-wrapper form-el-width\">\n        <label class=\"text-bold\">Is Paid</label>\n        <select [(ngModel)]=\"filter.by.isPaid\" class=\"form-ctrl\" style=\"border-radius: 4px; width: 69%;\">\n          <option value=\"true\">Yes</option>\n          <option value=\"false\">No</option>\n        </select>\n      </div>\n\n      <div class=\"form-group field-wrapper form-el-width datePickerBox\">\n        <label class=\"text-bold\">Sales From Date</label>\n        <input type=\"text\" value=\"\" id=\"FromDate\" class=\"form-ctrl bsDatepicker dateFormat\"\n          [(ngModel)]=\"filter.between.from\" name=\"FD\" bsDatepicker readonly=\"true\" />\n      </div>\n\n      <div class=\"form-group field-wrapper form-el-width datePickerBox\">\n        <label class=\"text-bold\">Sales To Date</label>\n        <input type=\"text\" value=\"\" id=\"ToDate\" class=\"form-ctrl bsDatepicker dateFormat\"\n          [(ngModel)]=\"filter.between.to\" name=\"FD\" bsDatepicker readonly=\"true\" />\n      </div>\n      <div class=\"form-group field-wrapper form-el-width datePickerBox\">\n        <label class=\"text-bold\">Publish Date</label>\n        <input type=\"text\" value=\"\" id=\"publishDate\" class=\"form-ctrl bsDatepicker dateFormat\"\n          [(ngModel)]=\"filter.by.publishDate\" name=\"FD\" bsDatepicker readonly=\"true\" style=\"border-radius: 4px;\" />\n      </div>\n\n      <button class=\"btn pr-btn btn-product btn_go\" [disabled]=\"isRippleLoad\" (click)=\"filterData()\"\n        style=\"height: 35px;margin-top: 25px;margin-left: -18px;\">GO</button>\n      <!-- <button class=\"btn pr-btn btn-product btn_go\" >Clear Filter</button> -->\n      <!-- <button type=\"button\" name=\"button\" (click)=\"Clearfilter()\" style=\"color: red; cursor: pointer;\">Clear Filter</button> -->\n      <span (click)=\"Clearfilter()\" style=\"color: red;cursor: pointer;margin-top: 35px;margin-left: 1em;\">Clear\n        Filter</span>\n\n    </div>\n    <div class=\"col-lg-2 col-sm-2 col-md-2\" style=\"margin-top: 2rem;float: right;\"><i class=\"fa fa-square\"\n        style=\"font-family: FontAwesome; color: #27c24c;\" aria-hidden=\"true\"></i>\n      <div style=\"margin-left: 1rem;margin-top: -1.5rem;\">\n        <rob-tooltip [textMessage]=\"'?'\" [message]=\"helpMsg\" [placement]=\"'left'\" [customClass]=\"'left'\">\n        </rob-tooltip>\n      </div>\n\n      <!-- </span> -->\n    </div>\n  </div>\n\n\n  <div class=\"row m-0 pt-0 product-list-wrapper\">\n    <section style=\"margin-top: -20px;padding: 10px;\">\n      <div class=\"table-container\">\n        <div class=\"heading-container\" style=\"margin-bottom: 10px;\">\n          <!-- <div class=\"heading-item\" style=\"width: 10%;\">\n            <div class=\"field-checkbox-wrapper\">\n              <input type=\"checkbox\" class=\"form-checkbox\" [checked]=\"jsonKeys.selectAll\"  (change)=\"toggleAllCheckBox($event)\" id=\"ch2\">\n              <label for=\"ch2\"></label>\n            </div>\n          </div> -->\n          <div class=\"heading-item th\" style=\"width: 5%;padding: .2em .6em;\">\n            <span>ID</span>\n          </div>\n          <div class=\"heading-item th\" style=\"width: 5%;padding: .2em .6em;\">\n            <span>#</span>\n          </div>\n          <div class=\"heading-item th\" style=\"width: 13%;text-align: left;\">\n            <span>Product Name</span>\n          </div>\n          <div class=\"heading-item th\" style=\"width: 20%;text-align: left;\">\n            <span>E-course</span>\n          </div>\n          <div class=\"heading-item th\" style=\"width: 7%;\">\n            <span>Status</span>\n          </div>\n          <div class=\"heading-item th\" style=\"width: 8%;\">\n            <span>Sale Start Date</span>\n          </div>\n          <div class=\"heading-item th\" style=\"width: 8%;\">\n            <span>Sale End Date</span>\n          </div>\n          <div class=\"heading-item th\" style=\"width: 8%;\">\n            <span>Publish Date</span>\n          </div>\n          <div class=\"heading-item th\" style=\" width: 8%;\">\n            <span>Update Date</span>\n          </div>\n          <div class=\"heading-item th\" style=\"width: 5%;\">\n            <span>Type</span>\n          </div>\n          <div class=\"heading-item th\" style=\"width: 5%;text-align: right;\">\n            <span>Price</span>\n          </div>\n          <div class=\"heading-item th\" style=\"width: 8%;\">\n            <span>Action</span>\n          </div>\n        </div>\n        <div class=\"value-outer-container\" style=\"border: none;\" *ngIf=\"productList?.length > 0\">\n          <div class=\"value-container dataContiner\" *ngFor=\"let item of productList;let i= index\"\n            [ngClass]=\"{'adv_prod_border': item.is_advance_product==1,'normal_prod_border': item.is_advance_product==0}\">\n            <!-- <div class=\"value-item\" style=\"width: 10%;\">\n              <div class=\"field-checkbox-wrapper\">\n                <input type=\"checkbox\" class=\"form-checkbox\" [checked]=\"item.isSelected\" [(ngModel)]=\"item.isSelected\" (ngModelChange)=\"isAllSelected($event,item)\" id=\"ch2\">\n                <label for=\"ch2\"></label>\n              </div>\n            </div> -->\n            <div class=\"value-item td\" style=\"width: 5%;\">\n              <span>\n                {{i+1}}</span>\n            </div>\n            <div class=\"value-item td\" style=\"width: 5%\">\n              <span>\n                <img alt=\"product\" class=\"profile_img\"\n                  [src]=\"item.logo_url==null?'https://cdn.vox-cdn.com/thumbor/30bQJLedP0p2KHehrHJyPc2dZ5A=/0x0:600x579/920x0/filters:focal(0x0:600x579):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/16019250/log_2048.png':item.logo_url\"\n                  title=\"{{item.title}}\">\n              </span>\n            </div>\n\n            <div class=\"value-item td\" style=\"text-align: left;width: 13%;\">\n              <span>\n                <label title=\" {{item.title}}\">\n                  {{ (item.title.length > 20) ? (item.title | slice:0:20) + '...' : item.title }}\n                  <span *ngIf=\"item.product_user_type == '2'\">(For Student)</span>\n                  <span *ngIf=\"item.product_user_type == '4'\">(For Open User)</span>\n                  <span *ngIf=\"item.product_user_type == '8'\">(For Both)</span>\n                  <span *ngIf=\"item.product_user_type == '16'\">(For Offline)</span>\n                </label>\n              </span>\n\n            </div>\n            <div class=\"value-item td\" style=\"width: 20%;text-align: left;\">\n              <span class=\"ecourse-list\" *ngFor=\"let  ecourse of item.product_ecourse_maps\">\n                {{ecourse.course_type}}\n              </span>\n            </div>\n            <div class=\"value-item td\" style=\"width: 7%;\">\n              <span *ngIf=\"item.status == 10\" class=\"text-primary\">Draft</span>\n              <span *ngIf=\"item.status == 20\" class=\"text-warning\">Ready</span>\n              <span *ngIf=\"item.status == 30\" style=\"color: green;font-weight: 600;\">Published</span>\n              <span *ngIf=\"item.status == 40\" class=\"text-secondary\">Unpublished</span>\n              <span *ngIf=\"item.status == 50\" style=\"color: orangered;\">Closed</span>\n            </div>\n            <div class=\"value-item td\" style=\"width: 8%;\">\n              <p class=\"m-0 text-bold\">{{convertUTCDateToLocalDate(item.sales_from_date)}}</p>\n            </div>\n            <div class=\"value-item td\" style=\"width: 8%;\">\n              <p class=\"m-0 text-bold\">{{convertUTCDateToLocalDate(item.sales_to_date)}}</p>\n            </div>\n            <div class=\"value-item td\" style=\"width: 8%;\">\n              <p class=\"m-0 text-bold\">{{ (!item.publish_date)? '-' :convertUTCDateToLocalDate(item.publish_date)}}</p>\n            </div>\n            <div class=\"value-item td\" style=\"width: 8%;\">\n              <p class=\"m-0 text-bold\">{{convertUTCDateToLocalDate(item.updated_date)}}</p>\n            </div>\n            <div class=\"value-item td\" style=\"width: 5%;padding-left: 20px;\">\n              <span *ngIf=\"item.price <= 0\" class=\"text-active text-bold freeProduct\">Free</span>\n              <span *ngIf=\"item.price > 0\" class=\"text-bold paidProduct\">\n                Paid</span>\n            </div>\n            <div class=\"value-item td\" style=\"width: 6%;display: flex;justify-content: flex-end;margin-top: 12px;\">\n              <span class=\"text-bold\">\n                {{item.price}} &nbsp;{{item.country_details.currency_code}}\n              </span>\n            </div>\n            <div class=\"value-item td\" style=\"width: 8%;\">\n              <div class=\"dropdown dropleft\" *ngIf=\"item.status!=50\">\n                <button class=\"btn btn-light btn-xs dropdown-toggle\" type=\"button\" (click)=\"toggleActionMenu($event)\"\n                  data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                  <i class=\"fa fa-caret-left\" aria-hidden=\"true\"></i> &nbsp; Action\n                </button>\n                <div class=\"dropdown-menu horizontal-menu\" aria-labelledby=\"actionMenu\">\n                  <a class=\"dropdown-item\" *ngIf=\"item.status < 30 ||(item.is_advance_product&& item.status== 30) \"\n                    [routerLink]=\"['/view/e-store/create/'+item.entity_id+'/basic']\">Edit</a>\n                  <a class=\"dropdown-item\" *ngIf=\"item.status < 30 \"\n                    (click)=\"actionProductModal('delete', item.entity_id)\">Delete</a>\n                  <a class=\"dropdown-item\" (click)=\"actionProductModal('ready', item.entity_id)\"\n                    *ngIf=\"item.status == 10\">Ready</a>\n                  <a class=\"dropdown-item\" (click)=\"actionProductModal('publish', item.entity_id)\"\n                    *ngIf=\"item.status == 20\">Publish</a>\n                  <a class=\"dropdown-item\" (click)=\"actionProductModal('unpublish', item.entity_id)\"\n                    style=\"border: none;\" *ngIf=\"item.status == 30\">Unpublished</a>\n                  <a class=\"dropdown-item\" (click)=\"showAssignStudentPopup(item)\"\n                    *ngIf=\"item.status == 30\">Assign/Unassign\n                    Student</a>\n                  <a class=\"dropdown-item\" *ngIf=\"!(item.product_sharable_link == null) && item.status == 30\" title=\"Copy Link\"\n                    (click)=\"copyToClipboard(item)\">Copy Link</a>\n                  <a class=\"dropdown-item\" (click)=\"actionProductModal('close', item.entity_id)\" style=\"border: none;\"\n                    *ngIf=\"item.status == 40\">Closed</a>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"value-outer-container\" style=\"text-align: center;padding-top: 5%;font-weight: 600;\"\n          *ngIf=\"productList?.length < 1 && !productListLoading\">\n          <div *ngIf=\"!isRippleLoad\"> No data found </div>\n        </div>\n      </div>\n    </section>\n\n    <div class=\"row filter-res pagination\" #pager id=\"pager\" style=\"width: 100%;\">\n      <div class=\"c-lg-12 c-md-12 c-sm-12 align-right\">\n        <pagination (goPage)=\"fectchTableDataByPage($event)\" (goNext)=\"fetchNext()\" (goPrev)=\"fetchPrevious()\"\n          [pagesToShow]=\"10\" [page]=\"varJson.PageIndex\" [perPage]=\"varJson.displayBatchSize\" [sizeArr]=\"varJson.sizeArr\"\n          (sizeChange)=\"updateTableBatchSize($event)\" [count]=\"varJson.total_items\">\n        </pagination>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<!-- Delete/Publish Product Modal -->\n<div class=\"modal fade\" id=\"actionProductModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\" style=\"max-width: 600px;margin-top: 19%;\">\n      <div class=\"modal-body text-center\">\n        <div class=\"form-group\">\n          <p class=\"lead\">{{deleteItem.textTitle}}</p>\n        </div>\n        <div class=\"form-group m-0\">\n          <button type=\"submit\" class=\"btn btn-primary btn-sm\" [disabled]=\"isRippleLoad\"\n            (click)=\"confirmAction(deleteItem.operation, deleteItem.entity_id)\">Yes</button>\n          &nbsp;\n          <button type=\"button\" class=\"btn btn-sm\" data-dismiss=\"modal\">No</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal fade\" id=\"assignStudent\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog\" style=\"    margin-top: 5%;margin-left: 30%;width: 700px;\" role=\"document\">\n    <div class=\"modal-content\" style=\"max-width: 700px;\">\n      <div class=\"modal-body\">\n        <div>\n          <span style=\"font-weight: 600;margin-bottom: 10px;\">{{product_details_for_student.title}} </span>\n          <span style=\"float: right;font-weight: 600;font-size: 16px;cursor: pointer;\" (click)=\"closePopup()\">X</span>\n        </div>\n        <div class=\"row\" style=\"margin:0;margin-bottom: 10px;border-bottom: 1px solid #eee;\" *ngIf=\"!isProfessional\">\n          <div class=\"form-group field-wrapper form-el-width\" style=\"width: 40%;float: left;margin-right: 5%;\">\n            <label class=\"text-bold\">Master Course</label>\n            <select [(ngModel)]=\"master_course_name\" class=\"form-ctrl\" (change)=\"getCourseDetails($event.target.value)\">\n              <option value=\"\">Select</option>\n              <option *ngFor=\"let masterCourse of masterCourseDetails.master_course_name_list\" title=\"{{masterCourse}}\"\n                value=\"{{masterCourse}}\">\n                {{ (masterCourse?.length > 20) ? (masterCourse | slice:0:20) + '...' : masterCourse }}\n\n              </option>\n            </select>\n          </div>\n          <div class=\"form-group field-wrapper form-el-width\" style=\"width: 40%;float: left;\">\n            <label class=\"text-bold\"> Course</label>\n            <select [(ngModel)]=\"course_id\" class=\"form-ctrl\">\n              <option value=\"\">Select</option>\n              <option *ngFor=\"let course of courseDetails\" title=\"{{course.course_name}}\" [value]=\"course.course_id\">\n                {{ (course.course_name?.length > 20) ? (course.course_name | slice:0:20) + '...' : course.course_name }}\n              </option>\n            </select>\n          </div>\n          <button class=\"btn btn-primary btn-product btn_go\"\n            style=\"margin-bottom: 0;margin-top: 26px;margin-left: 2%;float: left;\" [disabled]=\"isRippleLoad\"\n            (click)=\"studentDataOnMasterCourse()\">Go</button>\n          <button class=\"btn btn-primary btn-product btn_go\" style=\"margin-bottom: 0;margin-top: 23px;margin-left: 5px;\"\n            [disabled]=\"isRippleLoad\" (click)=\"clearStudentFilter()\">Clear</button>\n        </div>\n\n        <div class=\"row\" style=\"margin:0\" *ngIf=\"isProfessional\">\n          <div class=\"form-group field-wrapper form-el-width\" style=\"width: 26%;float: left;margin-right: 3%;\">\n            <label class=\"text-bold\">Master Course</label>\n            <select [(ngModel)]=\"master_course_name\" class=\"form-ctrl\"\n              (change)=\"getSubjectDetails($event.target.value)\">\n              <option value=\"\">Select</option>\n              <option *ngFor=\"let masterCourse of masterCourseDetails.standard_list\"\n                title=\"{{masterCourse.standard_name}}\" value=\"{{masterCourse.standard_id}}\">\n                {{ (masterCourse.standard_name?.length > 20) ? (masterCourse.standard_name | slice:0:20) + '...' : masterCourse.standard_name }}\n\n              </option>\n            </select>\n          </div>\n          <div class=\"form-group field-wrapper form-el-width\" style=\"width: 26%;float: left;margin-right: 3%;\">\n            <label class=\"text-bold\"> Course</label>\n            <select [(ngModel)]=\"course_id\" class=\"form-ctrl\">\n              <option value=\"\">Select</option>\n              <option *ngFor=\"let course of courseDetails.subjectLi\" title=\"{{course.subject_name}}\"\n                [value]=\"course.subject_id\">\n                {{ (course.subject_name?.length > 20) ? (course.subject_name | slice:0:20) + '...' : course.subject_name }}\n              </option>\n            </select>\n          </div>\n\n          <div class=\"form-group field-wrapper form-el-width\" style=\"width: 26%;float: left;\">\n            <label class=\"text-bold\"> Batch</label>\n            <select [(ngModel)]=\"batch_id\" class=\"form-ctrl\">\n              <option value=\"\">Select</option>\n              <option *ngFor=\"let course of courseDetails.batchLi\" title=\"{{course.batch_name}}\"\n                [value]=\"course.batch_id\">\n                {{ (course.batch_name?.length > 20) ? (course.batch_name | slice:0:20) + '...' : course.batch_name }}\n              </option>\n            </select>\n          </div>\n          <button class=\"btn btn-primary btn-product btn_go\"\n            style=\"margin-bottom: 0;margin-top: 26px;margin-left: 2%;float: left;\" [disabled]=\"isRippleLoad\"\n            (click)=\"studentDataOnMasterCourse()\">Go</button>\n          <button class=\"btn btn-primary btn-product btn_go\" style=\"margin-bottom: 0;margin-top: 23px;margin-left: 5px;\"\n            [disabled]=\"isRippleLoad\" (click)=\"clearStudentFilter()\">Clear</button>\n        </div>\n\n        <div class=\"row\" style=\"margin:0\">\n          <div class=\"c-lg-3 c-md-3 c-sm-3\" style=\"float: right;padding-right: 0;\">\n            <div class=\"field-checkbox-wrapper\" style=\"margin-bottom: 0;\">\n              <input type=\"checkbox\" class=\"form-checkbox\" [checked]=\"notifyToStudents\" [(ngModel)]=\"notifyToStudents\"\n                id=\"notifyToStudents\">\n              <label for=\"notifyToStudents\">Notify To Students</label>\n            </div>\n          </div>\n        </div>\n        <!-- <div class=\"field-checkbox-wrapper\" style=\"float: left;margin-bottom: 15px;\">\n          <input type=\"checkbox\" [checked]=\"activeStudents\" (ngModelChange)=\"getAllActiveStudents()\" [(ngModel)]=\"activeStudents\" class=\"form-checkbox\" id=\"ch3\">\n          <label for=\"ch3\">All Active Students</label>\n        </div>         -->\n        <section style=\"margin-top: 10px;margin-bottom: 6%;\">\n          <div class=\"table-container\" style=\"margin-bottom: 10px;\">\n            <div class=\"heading-container\">\n              <div class=\"heading-item\" style=\"width: 10%;\">\n                <span>\n                  <div class=\"field-checkbox-wrapper\">\n                    <input type=\"checkbox\" class=\"form-checkbox\" [checked]=\"isAllChecked()\"\n                      [(ngModel)]=\"jsonKeys.selectAll\" (change)=\"toggleAllCheckBox()\" id=\"ch2\">\n                    <label for=\"ch2\"></label>\n                  </div>\n                </span>\n              </div>\n              <div class=\"heading-item\" style=\"text-align: left;\">\n                <span>Student Name</span>\n              </div>\n              <div class=\"heading-item\" style=\"width: 25%;\">\n                <span>Contact No.</span>\n              </div>\n              <div class=\"heading-item\" style=\"width: 35%;\">\n                <span>Status</span>\n              </div>\n            </div>\n            <div class=\"value-outer-container\" *ngIf=\"studentDetails?.length!=0\">\n              <div class=\"value-container\" *ngFor=\"let data of studentDetails;let i= index\">\n                <div class=\"value-item\" style=\"width: 10%;\">\n                  <div class=\"field-checkbox-wrapper\">\n\n                    <!-- <input type=\"checkbox\" class=\"form-checkbox\" [disabled]=\"data.is_product_already_purchased\"\n                    [checked]=\"data.isSelected\" [(ngModel)]=\"data.isSelected\" [id]=\"'checkbox-'+i\"> -->\n                    <!-- Removed disable for de-selecting the  assigned student - Ashwini Kumar Gupta -->\n                    <input type=\"checkbox\" class=\"form-checkbox\" [checked]=\"data.isSelected\"\n                      [(ngModel)]=\"data.isSelected\" [id]=\"'checkbox-'+i\">\n                    <!-- End -->\n                    <label [for]=\"'checkbox-'+i\"></label>\n                  </div>\n                </div>\n                <div class=\"value-item\" style=\"text-align: left;\">\n                  <span\n                    title=\"{{data.student_name}}\">{{(data.student_name.length > 80) ? (data.student_name | slice:0:80) + '...' : data.student_name}}</span>\n                </div>\n                <div class=\"value-item\" style=\"width: 25%;padding-left: 1%;\">\n                  {{(data.phone != '') ? (data.phone) : '-'}}\n                </div>\n                <div class=\"value-item\" style=\"width: 35%;padding-left: 1%;\">\n                  <span *ngIf=\"data.is_product_already_purchased\" style=\"color: green;font-weight: 600;\">Assigned</span>\n                  <span *ngIf=\"!data.is_product_already_purchased\" style=\"color: red;font-weight: 600;\">Not\n                    Assigned</span>\n                </div>\n              </div>\n            </div>\n            <div class=\"value-outer-container\" style=\"text-align: center;padding-top: 5%;font-weight: 600;\"\n              *ngIf=\"studentDetails?.length==0\">\n              <div *ngIf=\"!isRippleLoad\"> No data found </div>\n            </div>\n          </div>\n          <div class=\"row\" style=\"margin: 0;display: -webkit-box;-webkit-box-align: center;\">\n            <div class=\"c-lg-10 c-md-10 c-sm-10\">\n              <span>Total Students: {{studentDetails?.length}} </span>\n            </div>\n            <div class=\"c-lg-2 c-md-2 c-sm-2\" style=\"padding-right: 0;\">\n              <button class=\"btn btn-primary btn-product btn_go\" style=\"margin-bottom: 0;float: right;\"\n                [disabled]=\"isRippleLoad\" (click)=\"assignStudentToProduct()\">Assign/Unassign</button>\n            </div>\n          </div>\n        </section>\n      </div>\n    </div>\n  </div>\n</div>\n<div id=\"helpFAQ\" class=\"modal fade\" role=\"dialog\">\n  <div class=\"modal-dialog\" style=\"top: 5%;\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\" style=\"background-color: #c5dcf87a;border-radius: 6px;\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h2 class=\"modal-title\">FAQ???S & Help Descriptions.</h2>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"new-modules-list\">\n          <div class=\"row\">\n            <div class=\"leftCol col-md-3 col-sm-3 col-lg-3\">Add Product</div>\n            <div class=\"col-md-9 col-sm-9 col-lg-9\">Before creating any product, make sure e-course should be created\n              from Course > E-Courses mapping.</div>\n          </div>\n          <hr style=\"border-top: 1px solid #ccc;\">\n\n          <div class=\"row\">\n            <div class=\"leftCol col-md-3 col-sm-3 col-lg-3\">E-courses</div>\n            <div class=\"col-md-9 col-sm-9 col-lg-9\">\n              <ol style=\"list-style-type: decimal;\">\n                <li>Admin can link multiple ecourses with a single product</li>\n                <li>Product items from all the above selected ecourses will be fetched below.</li>\n              </ol>\n            </div>\n          </div>\n          <hr style=\"border-top: 1px solid #ccc;\">\n\n          <div class=\"row\">\n            <div class=\"leftCol col-md-3 col-sm-3 col-lg-3\">Description</div>\n            <div class=\"col-md-9 col-sm-9 col-lg-9\">\n              <ol style=\"list-style-type: decimal;\">\n                <li> It describes about the particular product which will be visible to end users.</li>\n                <li>Keep the description as short as possible, single liner is preferred.</li>\n              </ol>\n            </div>\n          </div>\n          <hr style=\"border-top: 1px solid #ccc;\">\n\n          <div class=\"row\">\n            <div class=\"leftCol col-md-3 col-sm-3 col-lg-3\">Product sell Limit</div>\n            <div class=\"col-md-9 col-sm-9 col-lg-9\">\n              <ol style=\"list-style-type: decimal;\">\n                <li>If admin wants to sell that particular product on limited end users then they have to give limit.\n                </li>\n                <li>Number of products which can be sold from the web/app will be as per the defined product sell limit\n                </li>\n              </ol>\n            </div>\n          </div>\n          <hr style=\"border-top: 1px solid #ccc;\">\n\n          <div class=\"row\">\n            <div class=\"leftCol col-md-3 col-sm-3 col-lg-3\">Actual Price</div>\n            <div class=\"col-md-9 col-sm-9 col-lg-9\">It is MRP of the product.</div>\n          </div>\n          <hr style=\"border-top: 1px solid #ccc;\">\n\n          <div class=\"row\">\n            <div class=\"leftCol col-md-3 col-sm-3 col-lg-3\">Discount</div>\n            <div class=\"col-md-9 col-sm-9 col-lg-9\">If want to show some %age off on product to students then admin can\n              give discount value.</div>\n          </div>\n          <hr style=\"border-top: 1px solid #ccc;\">\n\n          <div class=\"row\">\n            <div class=\"leftCol col-md-3 col-sm-3 col-lg-3\">Final Price</div>\n            <div class=\"col-md-9 col-sm-9 col-lg-9\">Total amount of the product which student has to pay after discount\n              if applied.</div>\n          </div>\n          <hr style=\"border-top: 1px solid #ccc;\">\n\n          <div class=\"row\">\n            <div class=\"leftCol col-md-3 col-sm-3 col-lg-3\">GST</div>\n            <div class=\"col-md-9 col-sm-9 col-lg-9\">\n              <ol style=\"list-style-type: decimal;\">\n                <li>If Products to be sold with GST then request proctur team to enable this. </li>\n                <li>If GST applied then Final price will be considered as incl of GST only.</li>\n              </ol>\n            </div>\n          </div>\n          <hr style=\"border-top: 1px solid #ccc;\">\n\n          <div class=\"row\">\n            <div class=\"leftCol col-md-3 col-sm-3 col-lg-3\">Total user purchased product</div>\n            <div class=\"col-md-9 col-sm-9 col-lg-9\">\n              <ol style=\"list-style-type: decimal;\">\n                <li>This option is only to show end users that how many products has been purchased.</li>\n                <li>Admin can give any value and it will be visible to end users. This is introduced only for marketing\n                  purpose. </li>\n                <li>Eg: If admin give 100 value, then on end users side it will be visible as 100 users have purchased\n                  the products and will increase the count as an when student purchase the product.</li>\n              </ol>\n            </div>\n          </div>\n          <hr style=\"border-top: 1px solid #ccc;\">\n\n          <div class=\"row\">\n            <div class=\"leftCol col-md-3 col-sm-3 col-lg-3\">Tags</div>\n            <div class=\"col-md-9 col-sm-9 col-lg-9\">If admin want to highlight any product they can select through\n              dropdown.</div>\n          </div>\n          <hr style=\"border-top: 1px solid #ccc;\">\n\n          <div class=\"row\">\n            <div class=\"leftCol col-md-3 col-sm-3 col-lg-3\">Is advanced product(Put default enabled)</div>\n            <div class=\"col-md-9 col-sm-9 col-lg-9\">\n              <ol style=\"list-style-type: decimal;\">\n                <li>Enabling this feature published product will be available for editing.</li>\n                <li>While editing admin can add the product items in published product or change the description, no\n                  access for edit the previous content.</li>\n              </ol>\n            </div>\n          </div>\n          <hr style=\"border-top: 1px solid #ccc;\">\n\n          <div class=\"row\">\n            <div class=\"leftCol col-md-3 col-sm-3 col-lg-3\">Product for- Student</div>\n            <div class=\"col-md-9 col-sm-9 col-lg-9\">If admin want to show any products to the enrolled students only\n              then he/she has to select students. </div>\n          </div>\n          <hr style=\"border-top: 1px solid #ccc;\">\n\n          <div class=\"row\">\n            <div class=\"leftCol col-md-3 col-sm-3 col-lg-3\">Product for- Open user</div>\n            <div class=\"col-md-9 col-sm-9 col-lg-9\">\n              <ol style=\"list-style-type: decimal;\">\n                <li> If admin wants to show any product to the open app users then he/she has to select open app users.\n                </li>\n                <li> Open app user - Who registered through estore on web portal or white labelled app.</li>\n              </ol>\n            </div>\n          </div>\n          <hr style=\"border-top: 1px solid #ccc;\">\n\n          <div class=\"row\">\n            <div class=\"leftCol col-md-3 col-sm-3 col-lg-3\">Product items</div>\n            <div class=\"col-md-9 col-sm-9 col-lg-9\">These are the items which can be added to the product whose data\n              will be fetched on the basis of selected e-course.\n            </div>\n          </div>\n          <hr style=\"border-top: 1px solid #ccc;\">\n\n\n          <div class=\"row\">\n            <div class=\"leftCol col-md-3 col-sm-3 col-lg-3\">Sales date range</div>\n            <div class=\"col-md-9 col-sm-9 col-lg-9\">This is the date range in which the product can be sold.</div>\n          </div>\n          <hr style=\"border-top: 1px solid #ccc;\">\n\n\n          <div class=\"row\">\n            <div class=\"leftCol col-md-3 col-sm-3 col-lg-3\">Visibility date range</div>\n            <div class=\"col-md-9 col-sm-9 col-lg-9\">\n              <ol style=\"list-style-type: decimal;\">\n                <li>This is the product validity date range. The student can access the product in the defined date\n                  range only. </li>\n                <li>Product visibility start date cannot be prior or same day to sales start date.</li>\n              </ol>\n            </div>\n          </div>\n          <hr style=\"border-top: 1px solid #ccc;\">\n\n          <div class=\"row\">\n            <div class=\"leftCol col-md-3 col-sm-3 col-lg-3\">Show Duration</div>\n            <div class=\"col-md-9 col-sm-9 col-lg-9\">This is the product validity duration. The student can access the\n              product in the defined duration only, starting from the purchase date. Duration can be set in number of\n              days. </div>\n          </div>\n          <hr style=\"border-top: 1px solid #ccc;\">\n\n\n          <div class=\"row\">\n            <div class=\"leftCol col-md-3 col-sm-3 col-lg-3\">Copy link</div>\n            <div class=\"col-md-9 col-sm-9 col-lg-9\">If admin wants to share any particular products then they can share\n              link of that products to end users. </div>\n          </div>\n          <hr style=\"border-top: 1px solid #ccc;\">\n          <div class=\"row\">\n            <span class=\"leftCol\" style=\"margin-left: 2%;\">Please note- </span>Admin can't be able to change the product\n            sales date range after\n            publish any product.\n          </div>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/eStore-module/product-registered-student/product-registered-student.component.html":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/eStore-module/product-registered-student/product-registered-student.component.html ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"clear-fix\" style=\"padding-right: 2%;;\">\n\n  <section class=\"middle-top clearFix bulk-header\">\n    <div>\n      <h1 class=\"pull-left\">\n        <a routerLink=\"/view/e-store/home\" style=\"padding:0px; \">\n          Store\n        </a>\n        <i style=\"font-family: 'FontAwesome';\" class=\"fas fa-angle-right\"></i>\n        <span>Registered User</span>\n      </h1>\n    </div>\n  </section>\n\n  <div class=\"filter-section\">\n    <div class=\"row\" style=\"display: -webkit-box;-webkit-box-align: center;\">\n      <div class=\"c-md-7\" style=\"padding: 0;\">\n        <div class=\"searchbox2 c-md-2\">\n          <div style=\"padding-right: 1%\">\n            <div class=\"search-filter-wrapper\" style=\"font-size: 12px;padding-left: 10px;padding-right: 10px;\">\n              <label for=\"slug\" style=\"width: 100%\">eCourse</label>\n              <select [(ngModel)]=\"filter.course_type_id\" [disabled]=\"filter.product_id!=''\"\n                class=\"form-ctrl form-class\">\n                <option value=\"0\" selected>Select eCourse</option>\n                <option *ngFor=\"let item of EcourseData\" [value]=\"item.course_type_id\" title=\"{{item.course_type}}\">\n                  {{ (item.course_type.length > 30) ? (item.course_type | slice:0:30) + '...' : item.course_type }}\n                </option>\n              </select>\n              <span class=\"clearButton\" (click)=\"filter.course_type_id ='0'\">Clear</span>\n            </div>\n          </div>\n        </div>\n        <div class=\"c-md-1\" style=\"margin-top: 25px;width: 5%;\">\n          <span style=\"margin-left: 15px;\">OR</span>\n        </div>\n        <div class=\"searchbox2 c-md-2\">\n          <div style=\"padding-left: 1%\">\n            <div class=\"search-filter-wrapper\" style=\"font-size: 12px;padding-left: 10px;padding-right: 10px;\">\n              <label for=\"product_id\" style=\"width: 100%\">Product</label>\n              <select [(ngModel)]=\"filter.product_id\" [disabled]=\"filter.course_type_id!=0\"\n                class=\"form-ctrl form-class\">\n                <option value=\"\" selected>Select Product</option>\n                <option *ngFor=\"let product of productList\" [value]=\"product.id\" title=\"{{product.title}}\">\n                  {{ (product.title.length > 30) ? (product.title | slice:0:30) + '...' : product.title }}\n                </option>\n              </select>\n              <span class=\"clearButton\" (click)=\"filter.product_id =''\">Clear</span>\n            </div>\n          </div>\n        </div>\n        <div class=\"searchbox2 c-md-1\"\n          style=\"padding-left: 0;padding-right: 0;margin-top: 20px;width: 20%;margin-left: 10px;\">\n          <div class=\"c-lg-1 btn-wrap\" style=\"width: 100%;padding: 0;\">\n            <button class=\"btn fullBlue\" style=\"margin-left: 50px;\" (click)=\"filterData('1')\">Search</button>\n          </div>\n        </div>\n      </div>\n      <div class=\"c-md-5\" style=\"float: right;margin-top: 10px;\">\n        <div class=\"searchbox2 c-md-1\" style=\"width: 8%;float: right;margin-top: 10px;\">\n          <section class=\"login-tube pull-right\">\n            <!-- <span title=\"Export as Excel\" style=\"cursor: pointer;\" > -->\n            <i class=\"fa fa-file-excel-o\" (click)=\"exportToExcel()\"\n              style=\"font-family: 'FontAwesome'; display: inline-block;cursor: pointer;color: green;font-size: 27px;margin-top: 6px;\"></i>\n            <!-- </span> -->\n          </section>\n        </div>\n        <div class=\"searchbox1\" style=\"width: 40%;padding-right: 0;float: right;\">\n          <div style=\"margin-top: 8px;\">\n            <div class=\"search-filter-wrapper\">\n              <input type=\"text\" class=\"normal-field form-class\" placeholder=\"Search\" name=\"searchData\"\n                [(ngModel)]=\"searchText\" (keyup)=\"searchInList()\" style=\"width: 100%;\">\n            </div>\n          </div>\n        </div>\n        <div class=\"searchbox2 c-md-3\" style=\"float: right;width: 40%;margin-top: 10px;\">\n          <div class=\"btn-container\" style=\"float: right;margin-right: 3%;\">\n            <div class=\"btn-item\">\n              <button type=\"button\" style=\"padding: 4px 10px;margin-top: 3px;\" *ngIf=\"selectedRowCount != 0\"\n                class=\"btn pull-right\" name=\"button\" (click)=\"isOptions = !isOptions\">\n                {{selectedRowCount}} Students Selected &nbsp;\n                <i class=\"fa fa-ellipsis-v\" aria-hidden=\"true\"></i>\n              </button>\n              <div class=\"more-info-container\" *ngIf=\"isOptions\" (mouseleave)=\"isOptions = false\" #optMenu>\n\n                <div class=\"more-info-item hand_icon\">\n                  <span style=\"cursor: pointer;\" (click)=\"getAllMessageFromServer()\"><i class=\"fa fa-bell\"></i> Send\n                    Notification</span>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- <div class=\"searchbox2\" style=\"text-align: right;width: 50%;\" *ngIf=\"!AdvanceFilter\">\n        <span (click)=\"AdvanceFilter = true\" class=\"advance-filter-text\" style=\"color: #0084f6;\">Advance Filter </span>\n      </div> -->\n    </div>\n  </div>\n\n  <!-- <div class=\"filter-section AdvanceFilterSection\" *ngIf=\"AdvanceFilter\">\n    <div class=\"row\">\n      <div class=\"searchbox2\" style=\"text-align: right;width: 98%;\">\n        <span (click)=\"AdvanceFilter = false\" class=\"advance-filter-text\" style=\"color: red\">X Close Advance Filter </span>\n      </div>\n    </div>\n    <div class=\"row\" style=\"display: -webkit-box;-webkit-box-align: center;\">\n\n      <div class=\"searchbox2\">\n        <div style=\"padding-right: 1%\" class=\"form-group field-wrapper form-el-width datePickerBox\">\n          <div class=\"search-filter-wrapper\" style=\"font-size: 12px;padding-left: 10px;padding-right: 10px;\">\n            <label class=\"text-bold\">Sales From Date</label>\n            <input type=\"text\" value=\"\" id=\"FromDate\" class=\"form-ctrl form-class bsDatepicker dateFormat\"\n              [(ngModel)]=\"searchText\" name=\"FD\" bsDatepicker readonly=\"true\" />\n          </div>\n        </div>\n      </div>\n\n      <div class=\"searchbox2\">\n        <div style=\"padding-right: 1%\" class=\"form-group field-wrapper form-el-width datePickerBox\">\n          <div class=\"search-filter-wrapper\" style=\"font-size: 12px;padding-left: 10px;padding-right: 10px;\">\n            <label class=\"text-bold\">Sales To Date</label>\n            <input type=\"text\" value=\"\" id=\"ToDate\" class=\"form-ctrl form-class bsDatepicker dateFormat\"\n              [(ngModel)]=\"searchText\" name=\"FD\" bsDatepicker readonly=\"true\" />\n          </div>\n        </div>\n      </div>\n\n      <div class=\"searchbox2\">\n        <div style=\"padding-right: 1%\">\n          <div class=\"search-filter-wrapper\" style=\"font-size: 12px;padding-left: 10px;padding-right: 10px;\">\n            <label for=\"slug\"style=\"width: 100%\">Status</label>\n            <select [(ngModel)]=\"filter.slug\" class=\"form-ctrl form-class\">\n              <option value=\"\" selected>Select</option>\n              <option value=\"open\">Open</option>\n              <option value=\"student admitted\">Student Admitted</option>\n              <option value=\"student enquired\">Student Enquired</option>\n            </select>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"searchbox2\">\n        <div style=\"padding-left: 1%\">\n          <div class=\"search-filter-wrapper\" style=\"font-size: 12px;padding-left: 10px;padding-right: 10px;\">\n            <label for=\"product_id\" style=\"width: 100%\">Product</label>\n            <select [(ngModel)]=\"filter.product_id\" class=\"form-ctrl form-class\">\n              <option value=\"\" selected>Select Product</option>\n              <option *ngFor=\"let product of productList\" [value]=\"product.id\" title=\"{{product.title}}\">\n                {{ (product.title.length > 30) ? (product.title | slice:0:30) + '...' : product.title }}\n              </option>\n            </select>\n          </div>\n        </div>\n      </div>\n      <div class=\"searchbox2\">\n        <div style=\"padding-right: 1%\">\n          <div class=\"search-filter-wrapper\" style=\"font-size: 12px;padding-left: 10px;padding-right: 10px;\">\n            <label for=\"slug\"style=\"width: 100%\">Item Type</label>\n            <select [(ngModel)]=\"filter.slug\" class=\"form-ctrl form-class\">\n              <option value=\"\" selected>Select Item</option>\n              <option *ngFor=\"let item of ItemTypeData\" [value]=\"item.slug\" title=\"{{item.name}}\">\n                  {{ (item.name.length > 30) ? (item.name | slice:0:30) + '...' : item.name }}\n              </option>\n            </select>\n          </div>\n        </div>\n      </div>\n      <div class=\"searchbox2\" style=\"width: 5%;\">\n        <div class=\"c-lg-1 btn-wrap\">\n          <button class=\"btn fullBlue\" (click)=\"filterData()\">Go</button>\n        </div>\n      </div>\n    </div>\n  </div> -->\n\n\n  <!-- <br> -->\n  <!-- <data-display-table #child [displayKeys]=\"tableSetting\" [displayData]=\"usersList\" (editView)='optionSelected($event)'>\n  </data-display-table> -->\n  <section>\n    <div class=\"table_container\" style=\"margin-bottom: 10px;\">\n      <div class=\"table_header\">\n        <div class=\"table_header_item\" style=\"width: 5%;\">\n          <span>\n            <div class=\"field-checkbox-wrapper\">\n              <input type=\"checkbox\" class=\"form-checkbox\" [checked]=\"isAllChecked()\" [(ngModel)]=\"selectAll\"\n                (change)=\"toggleAllCheckBox()\" id=\"ch2\">\n              <label for=\"ch2\"></label>\n            </div>\n          </span>\n        </div>\n        <div class=\"table_header_item large\" style=\"text-align: left;\">\n          <span>Name</span>\n        </div>\n        <div class=\"table_header_item\" style=\"width: 20%;\">\n          <span>Contact No.</span>\n        </div>\n        <div class=\"table_header_item\" style=\"width: 25%;\">\n          <span>Email Id</span>\n        </div>\n        <div class=\"table_header_item\" style=\"width: 25%;\">\n          <span>Ecourse</span>\n        </div>\n        <div class=\"table_header_item\" style=\"width: 15%;\">\n          <span>Registered Date</span>\n        </div>\n        <div class=\"table_header_item\" style=\"width: 10%;\">\n          <span>Status</span>\n        </div>\n        <div class=\"table_header_item\" style=\"width: 15%;\">\n          <span>Action</span>\n        </div>\n      </div>\n      <div class=\"table-value-outer-container\" *ngIf=\"searchedData?.length!=0\">\n        <div class=\"table_value\" [ngClass]=\"{'student-class': data.open_user_status == 'Student',\n                      'enquiry-class': data.open_user_status == 'Enquiry',\n                      'open-class': data.open_user_status == '-'}\" *ngFor=\"let data of searchedData;let i= index\">\n          <div class=\"table_value_item\" style=\"width: 5%;\">\n            <div class=\"field-checkbox-wrapper\">\n              <input type=\"checkbox\" class=\"form-checkbox\" [checked]=\"data.isSelected\" [(ngModel)]=\"data.isSelected\"\n                [id]=\"'checkbox-'+i\" (ngModelChange)=\"rowCheckboxChange(data)\">\n              <label [for]=\"'checkbox-'+i\"></label>\n            </div>\n          </div>\n          <div class=\"table_value_item large\" style=\"text-align: left;\">\n            <span title=\"{{data.name}}\">{{(data.name.length > 80) ? (data.name | slice:0:80) + '...' :\n              data.name}}</span>\n          </div>\n          <div class=\"table_value_item\" style=\"width: 20%\">\n            {{(data.phone != '') ? (data.phone) : '-'}}\n          </div>\n          <div class=\"table_value_item\" style=\"width: 25%;\">\n            {{(data.email_id != '') ? (data.email_id) : '-'}}\n          </div>\n          <div class=\"table_value_item\" style=\"width: 25%;padding-left: 10px;\" title=\"{{data.ecourse_list}}\">\n            <span *ngIf=\"data.ecourse_list?.length>0\">\n              {{(data.ecourse_list?.length > 30) ? (data.ecourse_list | slice:0:30) + '...' : data.ecourse_list}}\n            </span>\n            <span *ngIf=\"data.ecourse_list?.length==0\">\n              -\n            </span>\n          </div>\n          <div class=\"table_value_item\" style=\"width: 15%;\">\n            {{(data.registered_date != '') ? (data.registered_date) : '-'}}\n          </div>\n          <div class=\"table_value_item\" style=\"width: 10%;\">\n            {{(data.open_user_status != '-') ? (data.open_user_status) : '-'}}\n          </div>\n          <div class=\"table_value_item\" style=\"width: 15%;\">\n            <drop-menu [dropType]=\"dropType\" *ngIf=\"data.open_user_status == '-' && menuOptions?.length\" [info]=\"data\"\n              [menuOptions]=\"menuOptions\" (selectedRecord)=\"optionSelected($event)\"></drop-menu>\n            <span *ngIf=\"data.open_user_status != '-' || !menuOptions?.length\">\n              <button aria-expanded=\"true\" style=\"cursor: no-drop;opacity: 0.5;\" class=\"d-item dropdown-trigger\">\n                <span class=\"d-item svg-icon-wrap\">\n                  <span class=\"visually-hidden\"></span>\n                  <div aria-hidden=\"true\" type=\"ellipsis-horizontal-icon\">\n                    <svg class=\"artdeco-icon\" focusable=\"false\" height=\"24px\" preserveAspectRatio=\"xMinYMin meet\"\n                      viewBox=\"0 0 24 24\" width=\"24px\" x=\"0\" y=\"0\">\n                      <path class=\"large-icon\" d=\"M2,10H6v4H2V10Zm8,4h4V10H10v4Zm8-4v4h4V10H18Z\"\n                        style=\"fill: currentColor\"></path>\n                    </svg>\n                  </div>\n                </span>\n              </button>\n            </span>\n          </div>\n        </div>\n      </div>\n      <div class=\"table-value-outer-container\" *ngIf=\"searchedData?.length==0\">\n        <!-- <div *ngIf=\"!isRippleLoad\"> No data found </div> -->\n        <div class=\"illustration-container\">\n          <img src=\"./assets/images/course_planner/blank-illustration.svg\" alt=\"illustration\" class=\"illustration-img\">\n        </div>\n      </div>\n    </div>\n  </section>\n  <div class=\"row filter-res pagination\" #pager id=\"pager\" style=\"width: 100%;margin: 0;\">\n    <div class=\"c-lg-12 c-md-12 c-sm-12 align-right\">\n      <pagination (goPage)=\"filterData($event)\" (goNext)=\"fetchNext()\" (goPrev)=\"fetchPrevious()\" [pagesToShow]=\"10\"\n        [page]=\"varJson.PageIndex\" [perPage]=\"varJson.displayBatchSize\" [sizeArr]=\"varJson.sizeArr\"\n        (sizeChange)=\"updateTableBatchSize($event)\" [count]=\"varJson.total_items\">\n      </pagination>\n    </div>\n  </div>\n\n</div>\n\n<div *ngIf=\"notificationPopup\" class=\"notification_popup\">\n  <div class=\"row c-md-12\" style=\"padding:0;\">\n    <span style=\"width: 100%;text-align: right;\">\n      <span style=\"cursor: pointer;font-size: 16px;font-weight: 600;\" (click)=\"closeNotificationPopup()\"> X </span>\n    </span>\n  </div>\n  <div class=\"row c-md-12\" style=\"padding: 0;margin-bottom: 5px;\">\n    <div class=\"c-md-4\" *ngIf=\"!addSMS\">\n      <div class=\"c-md-12\" style=\"padding: 0\">\n        <span style=\"font-weight: 600;\"> Send Notification:</span>\n      </div>\n      <div class=\"c-md-12\" style=\"padding:0\">\n        <div class=\"c-md-12\" style=\"padding: 0;margin-top: 10px;margin-bottom: 5px;font-weight: 600;\">\n          <span>Notification Type </span>\n        </div>\n        <div class=\"c-md-6\" style=\"padding:0;width: 40%;\">\n          <input style=\"-webkit-appearance:checkbox\" type=\"checkbox\" id=\"transactional\" name=\"transactional\"\n            class=\"form-checkbox\" [checked]=\"smsNotification\" [(ngModel)]=\"smsNotification\">\n          <label for=\"transactional\">SMS</label>\n        </div>\n        <div class=\"c-md-6\" style=\"padding:0\">\n          <input style=\"-webkit-appearance:checkbox\" type=\"checkbox\" id=\"promotional\" name=\"promotional\"\n            class=\"form-checkbox\" [checked]=\"pushNotification\" [(ngModel)]=\"pushNotification\">\n          <label for=\"promotional\">App Notification</label>\n        </div>\n      </div>\n    </div>\n    <div class=\"c-md-12\" *ngIf=\"addSMS\" style=\"margin-left: 15px;background: #efefef;\">\n      <div>\n        <textarea placeholder=\"Write your message here...\" [(ngModel)]=\"message\"\n          (ngModelChange)=\"countNumberOfMessage()\" name=\"message\">\n      </textarea>\n        <div style=\"font-size: 12px;display: -webkit-box;-webkit-box-align: center;margin-top: 5px;margin-bottom: 10px;\"\n          class=\"row c-md-12\">\n          <div class=\"c-md-2\" style=\"padding:0;\">Character Count</div>\n          <div class=\"c-md-4\" style=\"padding-right: 0;\">\n            <div class=\"msgCount\">{{message?.length}}</div>\n          </div>\n          <div class=\"c-md-7\" style=\"text-align: right;\">Message Count: {{messageCount}}</div>\n        </div>\n      </div>\n    </div>\n    <div class=\"c-md-3\" [ngClass]=\"addSMS ? 'addSmsSection' : 'addSectionHide'\">\n      <!-- <div class=\"c-md-12\"> -->\n      <span *ngIf=\"!addSMS\" (click)=\"addSMS=!addSMS\"\n        style=\"border: 1px solid #0084f6;cursor: pointer;color: #0084f6;border-radius: 4px;padding: 3px;\">\n        <i *ngIf=\"!addSMS\" class=\"fa fa-plus\"></i>\n        <i *ngIf=\"addSMS\" class=\"fa fa-minus\"></i>\n        Add SMS</span>\n      <!-- </div> -->\n      <div class=\"c-md-12\" style=\"margin-top: 45px;\">\n        <div *ngIf=\"addSMS\">\n          <button class=\"btn fullBlue\" style=\"background: no-repeat;color: #0084f6;\"\n            (click)=\"addSMS = false\">Cancel</button>\n          <button class=\"btn fullBlue\" (click)=\"saveMSG()\">Save SMS</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- <div class=\"row c-md-12\" style=\"margin-top: 10px;\">\n    <div class=\"c-md-12\">\n      SMS Type\n    </div>\n    <div class=\"c-md-12\">\n      <span>Tranasactional </span>\n      <span>Promotional</span>\n    </div>\n  </div> -->\n  <div class=\"table-container\">\n    <div class=\"heading-container\" style=\"background: #fafafa;font-size: 12px;font-weight: 600;\">\n      <div class=\"heading-item\" style=\"width: 5%\">\n      </div>\n      <div class=\"heading-item\" style=\"text-align: left;\">\n        <span>SMS</span>\n      </div>\n      <div class=\"heading-item\" style=\"text-align: left;width: 15%;\">\n        <span>SMS Status</span>\n      </div>\n      <div class=\"heading-item\" style=\"width: 15%;text-align: left;\">\n        Date\n      </div>\n      <div class=\"heading-item\" style=\"width: 15%;text-align: left;\">\n        Action\n      </div>\n    </div>\n    <div class=\"value-outer-container\" *ngIf=\"messageList?.length>0\" style=\"min-height: 50vh;max-height: 50vh;\">\n      <div class=\"value-container\" *ngFor=\"let data of messageList; let i = index;\" style=\"padding:10px\">\n        <div class=\"heading-item\" style=\"width: 5%\">\n          <!-- <input type=\"radio\" class=\"form-ctrl\" name=\"selected\" [(ngModel)]=\"data.selected\" [id]=\"'selected-'+i\" [value]=\"data.selected\" [checked]=\"data.selected\"> -->\n          <!-- <div class=\"field-radio-wrapper\"> -->\n          <input style=\"-webkit-appearance:radio\" type=\"radio\" name=\"bothRadio\" [id]=\"'bothRadio-'+i\" class=\"form-radio\"\n            [value]=\"i\" [checked]=\"data.selected\" [(ngModel)]=\"data.selected\" (ngModelChange)=\"changeSelectedMsg(data)\"\n            [disabled]=\"data.statusValue == 'Open'\">\n          <!-- </div> -->\n        </div>\n        <div class=\"value-item\" style=\"text-align: left;\">\n          <span [innerHTML]=\"data.message\"></span>\n        </div>\n        <div class=\"value-item\" style=\"text-align: left;width: 15%;\">\n          {{data.statusValue}}\n        </div>\n        <div class=\"value-item\" style=\"text-align: left;width: 15%;\">\n          {{data.date}}\n        </div>\n        <div class=\"value-item\" style=\"width: 15%;text-align: left;\">\n          <span *ngIf=\"data.statusValue == 'Open'\" title=\"Approve\" (click)=\"ApproveMsg(data.message_id)\"\n            style=\"padding:10px;cursor: pointer;\"><i class=\"fa fa-check-circle\"\n              style=\"font-size: 14px;color: #01DF01;\"></i> </span>\n          <span title=\"Edit\" (click)=\"editSMS(data)\" style=\"padding:10px;cursor: pointer;\"><i\n              class=\"fa fa-pencil edit-icon-pencil\" style=\"font-size: 14px;color: #0084f6;\"></i></span>\n          <span *ngIf=\"data.statusValue == 'Open'\" title=\"Delete\" (click)=\"DeleteMsg(data.message_id)\"\n            style=\"padding:10px;cursor: pointer;\"><i class=\"fa fa-times-circle\"\n              style=\"color: red;font-size: 14px;\"></i></span>\n        </div>\n      </div>\n    </div>\n    <div class=\"value-outer-container\" *ngIf=\"messageList?.length == 0\"\n      style=\"text-align: center;padding: 10%;font-weight: 600;min-height: 50vh;max-height: 50vh;\">\n      <span>No data found</span>\n    </div>\n  </div>\n  <div class=\"c-md-12\" style=\"margin-top: 10px;text-align: right;\">\n    <button class=\"btn fullBlue\" (click)=\"sendNotification()\">Send Notification</button>\n  </div>\n</div>\n<div *ngIf=\"notificationPopup\" class=\"black-bg\" (click)=\"notificationPopup = false\"></div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/eStore-module/sales-reports/sales-reports.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/eStore-module/sales-reports/sales-reports.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"report-wrapper clearFix\" style=\"height: 100vh;padding-left: 2%;padding-right: 1%;\">\n    <aside class=\"middle-full\">\n        <section class=\"middle-main clearFix\">\n            <div class=\"middle-top mb0 clearFix header headerLink\">\n                <div class=\"row\">\n                    <h2 style=\"padding: 16px 0px 3px 10px; font-size: 14px\" class=\"pull-left\">\n                      <a routerLink=\"/view/reports/list\" style=\"padding:0px; \">\n                            Report\n                        </a>\n                       <i style=\"font-family: 'FontAwesome';\" class=\"fas fa-angle-right\"></i>\n                        <span> Sales Report </span>\n                    </h2>\n                </div>\n\n                <div class=\"row fee-filter long\" style=\"margin-left: 0px;margin-bottom: 1em;margin-top: 1em;\">\n                    <div class=\"\">\n                        <div class=\"c-lg-3 c-md-3 c-sm-3 \" style=\"top: -12px;\">\n                            <div id=\"slotwrapper\" class=\"field-wrapper dropdown1\"\n                                (click)=\"multiselectVisible($event.target.id)\">\n                                <label for=\"assignCourses\">Products</label>\n                                <input id=\"slot\" type=\"text\" [ngModel]=\"selectedSlotsString\" name=\"slots\"\n                                    class=\"form-ctrl\" readonly=\"true\" />\n                            </div>\n                            <div id=\"slotmulti\" class=\"hide multiselect-wrapper\"\n                                (mouseleave)=\"multiselectVisible('slot')\">\n                                <div class=\"multiselect-wrapper-inner\">\n                                    <ul class=\"\">\n                                        <li *ngFor=\"let product of productLists\">\n                                            <div class=\"field-checkbox-wrapper\">\n                                                <input type=\"checkbox\" [id]=\"product.title\" [value]=\"product.title\"\n                                                    name=\"{{product.title}}\" [(ngModel)]=\"product.isChecked\"\n                                                    (ngModelChange)=\"updateSlotSelected(product)\" class=\"form-checkbox\">\n                                                <label for=\"{{product.title}}\"> {{product.title}}</label>\n                                            </div>\n                                        </li>\n                                    </ul>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"c-lg-3  c-md-3 c-sm-3\">\n                            <div class=\"c-lg-12 field-wrapper datePickerBox\"\n                                style=\"padding-top: 0px;padding-bottom: 10px;\">\n                                <label for=\"from\">From Date</label>\n                                <input type=\"text\" class=\"form-ctrl\" id=\"from\" autocomplete=\"off\" bsDatepicker\n                                    [(ngModel)]=\"filterDataKeys.from_date\">\n                            </div>\n                        </div>\n                        <div class=\"c-lg-3  c-md-3 c-sm-3\">\n                            <div class=\"c-lg-12 field-wrapper datePickerBox\" style=\"padding-top: 0px;\">\n                                <label for=\"to\">To Date</label>\n                                <input type=\"text\" class=\"form-ctrl\" id=\"to\" autocomplete=\"off\" bsDatepicker\n                                    [(ngModel)]=\"filterDataKeys.to_date\">\n                            </div>\n                        </div>\n                        <div class=\"c-lg-2\" style=\"margin-top: 1em;\">\n                            <button class=\"btn fullBlue\" (click)=\"fetchSalesReportDetails()\">Go</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <section style=\"margin-top: 10px;\">\n                <div class=\"row\" style=\"display: -webkit-box;-webkit-box-align: center;\">\n                    <div class=\"c-lg-9\">\n                        <span style=\"font-weight: 600;\">Note:</span> For Razorpay settlements please refer- <a href=\"https://razorpay.com/docs/payment-gateway/dashboard-guide/settlements/\" target=\"_blank\">https://razorpay.com/docs/payment-gateway/dashboard-guide/settlements/</a>\n                    </div>\n                    <div class=\"c-lg-3\">\n                        <div id=\"basic-search\" class=\"c-lg-11\">\n                            <form autocomplete=\"off\" #form=\"ngForm\">\n                                <input type=\"text\" name=\"searchValue\" [(ngModel)]=\"searchText\" placeholder=\"Search\"\n                                    class=\"form-ctrl\" id=\"searchBar\" (keyup)=\"searchDatabase()\"\n                                    style=\"padding:7px 10px; width:200px; height:35px; float:right; margin-bottom: 10px;\">\n                            </form>\n                        </div>\n\n                        <div>\n                            <section class=\"login-tube pull-right\" style=\"position: absolute;right: 22px;\n                            margin-top: 6px;\">\n                                <nav>\n                                    <ul class=\"login-nav\">\n                                        <li class=\"pos-rel\">\n                                            <i class=\"icons\">\n                                                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\"\n                                                    viewBox=\"0 0 24 24\">\n                                                    <path id=\"gearIcon\"\n                                                        d=\"M24 14.187v-4.374c-2.148-.766-2.726-.802-3.027-1.529-.303-.729.083-1.169 1.059-3.223l-3.093-3.093c-2.026.963-2.488 1.364-3.224 1.059-.727-.302-.768-.889-1.527-3.027h-4.375c-.764 2.144-.8 2.725-1.529 3.027-.752.313-1.203-.1-3.223-1.059l-3.093 3.093c.977 2.055 1.362 2.493 1.059 3.224-.302.727-.881.764-3.027 1.528v4.375c2.139.76 2.725.8 3.027 1.528.304.734-.081 1.167-1.059 3.223l3.093 3.093c1.999-.95 2.47-1.373 3.223-1.059.728.302.764.88 1.529 3.027h4.374c.758-2.131.799-2.723 1.537-3.031.745-.308 1.186.099 3.215 1.062l3.093-3.093c-.975-2.05-1.362-2.492-1.059-3.223.3-.726.88-.763 3.027-1.528zm-4.875.764c-.577 1.394-.068 2.458.488 3.578l-1.084 1.084c-1.093-.543-2.161-1.076-3.573-.49-1.396.581-1.79 1.693-2.188 2.877h-1.534c-.398-1.185-.791-2.297-2.183-2.875-1.419-.588-2.507-.045-3.579.488l-1.083-1.084c.557-1.118 1.066-2.18.487-3.58-.579-1.391-1.691-1.784-2.876-2.182v-1.533c1.185-.398 2.297-.791 2.875-2.184.578-1.394.068-2.459-.488-3.579l1.084-1.084c1.082.538 2.162 1.077 3.58.488 1.392-.577 1.785-1.69 2.183-2.875h1.534c.398 1.185.792 2.297 2.184 2.875 1.419.588 2.506.045 3.579-.488l1.084 1.084c-.556 1.121-1.065 2.187-.488 3.58.577 1.391 1.689 1.784 2.875 2.183v1.534c-1.188.398-2.302.791-2.877 2.183zm-7.125-5.951c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3zm0-2c-2.762 0-5 2.238-5 5s2.238 5 5 5 5-2.238 5-5-2.238-5-5-5z\" />\n                                                </svg>\n                                            </i>\n                                            <div class=\"dropdown\">\n                                                <ul class=\"user-detail\">\n                                                    <li (click)=\"exportToExcel()\" class=\"asHover\">\n                                                        <i class=\"fa fa-file-excel-o\"\n                                                            style=\"font-family: 'FontAwesome'; display: inline-block;\"></i>\n                                                        <strong style=\"display: inline-block;\">Export as Excel</strong>\n                                                    </li>\n                                                    <hr>\n                                                    <li (click)=\"exportToPdf()\" class=\"asHover\">\n                                                        <i class=\"fa fa-file-pdf-o\"\n                                                            style=\"font-family: 'FontAwesome' ; display: inline-block;\"></i>\n                                                        <strong style=\"display: inline-block;\">Export as Pdf</strong>\n                                                    </li>\n                                                    <hr>\n                                                    <li (click)=\"openPreferences(true)\" class=\"asHover\">\n                                                        <i class=\"fa fa-low-vision\"\n                                                            style=\"font-family: 'FontAwesome' ; display: inline-block;\"></i>\n                                                        <strong style=\"display: inline-block;\">Show/Hide\n                                                            Columns</strong>\n                                                    </li>\n                                                </ul>\n                                            </div>\n                                        </li>\n                                    </ul>\n                                </nav>\n                            </section>\n                        </div>\n                    </div>\n                </div>\n\n            </section>\n\n            <div class=\"table table-responsive\">\n                <data-display-table *ngIf=\"displayKeys.length\" #child [displayKeys]=\"tableSetting\"\n                    [displayData]=\"salesDataSource\" (editView)='optionSelected($event)'>\n                </data-display-table>\n            </div>\n        </section>\n    </aside>\n\n    <preference-popup [settings]=\"tableSetting\" [keys]=\"feeSettings1\" (closeButton)=\"closePopup($event)\"\n        *ngIf=\"showPopupKeys.showPreference\"></preference-popup>\n</div>");

/***/ }),

/***/ "./src/app/components/eStore-module/estore-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/eStore-module/estore-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: EstoreRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstoreRoutingModule", function() { return EstoreRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! . */ "./src/app/components/eStore-module/index.ts");
/* harmony import */ var _product_creation_product_creation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-creation/product-creation.component */ "./src/app/components/eStore-module/product-creation/product-creation.component.ts");
/* harmony import */ var _product_registered_student_product_registered_student_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-registered-student/product-registered-student.component */ "./src/app/components/eStore-module/product-registered-student/product-registered-student.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





const routes = [
    {
        path: 'home',
        component: ___WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
    },
    {
        path: 'details',
        component: ___WEBPACK_IMPORTED_MODULE_2__["ProductListComponent"],
    },
    {
        path: 'sales-report',
        component: ___WEBPACK_IMPORTED_MODULE_2__["SalesReportsComponent"]
    },
    {
        path: 'create',
        component: _product_creation_product_creation_component__WEBPACK_IMPORTED_MODULE_3__["ProductCreationComponent"]
    },
    {
        path: 'create/:entity_id',
        component: _product_creation_product_creation_component__WEBPACK_IMPORTED_MODULE_3__["ProductCreationComponent"]
    },
    {
        path: 'create/:entity_id/:form',
        component: _product_creation_product_creation_component__WEBPACK_IMPORTED_MODULE_3__["ProductCreationComponent"]
    },
    {
        path: 'registered-user',
        component: _product_registered_student_product_registered_student_component__WEBPACK_IMPORTED_MODULE_4__["RegisteredStudentComponent"]
    },
    {
        path: 'manage-offers',
        loadChildren: () => __webpack_require__.e(/*! import() | app-components-eStore-module-manage-coupon-home-manage-coupon-home-module */ "app-components-eStore-module-manage-coupon-home-manage-coupon-home-module").then(__webpack_require__.bind(null, /*! app/components/eStore-module/manage-coupon-home/manage-coupon-home.module */ "./src/app/components/eStore-module/manage-coupon-home/manage-coupon-home.module.ts")).then(m => m.ManageCouponHomeModule),
        // loadChildren: 'app/components/eStore-module/manage-coupon-home/manage-coupon-home.module#ManageCouponHomeModule',
        pathMatch: 'prefix'
    },
    {
        path: 'offer-history',
        component: ___WEBPACK_IMPORTED_MODULE_2__["OfferHistoryComponent"],
        pathMatch: 'prefix'
    }
];
let EstoreRoutingModule = /** @class */ (() => {
    let EstoreRoutingModule = class EstoreRoutingModule {
    };
    EstoreRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], EstoreRoutingModule);
    return EstoreRoutingModule;
})();



/***/ }),

/***/ "./src/app/components/eStore-module/estore.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/eStore-module/estore.module.ts ***!
  \***********************************************************/
/*! exports provided: EstoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstoreModule", function() { return EstoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/components/shared/shared.module.ts");
/* harmony import */ var ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/timepicker */ "./node_modules/ngx-bootstrap/timepicker/fesm2015/ngx-bootstrap-timepicker.js");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/__ivy_ngcc__/fesm2015/ng-multiselect-dropdown.js");
/* harmony import */ var _services_message_show_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/message-show.service */ "./src/app/services/message-show.service.ts");
/* harmony import */ var _services_export_to_pdf_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/export-to-pdf.service */ "./src/app/services/export-to-pdf.service.ts");
/* harmony import */ var _services_excel_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/excel.service */ "./src/app/services/excel.service.ts");
/* harmony import */ var _services_table_preference_table_preferences_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/table-preference/table-preferences.service */ "./src/app/services/table-preference/table-preferences.service.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! . */ "./src/app/components/eStore-module/index.ts");
/* harmony import */ var _product_creation_product_creation_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./product-creation/product-creation.component */ "./src/app/components/eStore-module/product-creation/product-creation.component.ts");
/* harmony import */ var _product_registered_student_product_registered_student_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./product-registered-student/product-registered-student.component */ "./src/app/components/eStore-module/product-registered-student/product-registered-student.component.ts");
/* harmony import */ var _estore_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./estore-routing.module */ "./src/app/components/eStore-module/estore-routing.module.ts");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @tinymce/tinymce-angular */ "./node_modules/@tinymce/tinymce-angular/__ivy_ngcc__/fesm2015/tinymce-tinymce-angular.js");
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/fileupload */ "./node_modules/primeng/fileupload.js");
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(primeng_fileupload__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// import {BsDatepickerConfig, BsDatepickerModule} from 'ngx-bootstrap/datepicker';














let EstoreModule = /** @class */ (() => {
    let EstoreModule = class EstoreModule {
    };
    EstoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _estore_routing_module__WEBPACK_IMPORTED_MODULE_13__["EstoreRoutingModule"],
                _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                // BsDatepickerModule,
                ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_4__["TimepickerModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_5__["NgMultiSelectDropDownModule"].forRoot(),
                _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_15__["EditorModule"],
                primeng_fileupload__WEBPACK_IMPORTED_MODULE_16__["FileUploadModule"]
            ],
            declarations: [
                ___WEBPACK_IMPORTED_MODULE_10__["ProductListComponent"],
                _product_creation_product_creation_component__WEBPACK_IMPORTED_MODULE_11__["ProductCreationComponent"],
                ___WEBPACK_IMPORTED_MODULE_10__["BasicInfoComponent"],
                ___WEBPACK_IMPORTED_MODULE_10__["MockTestComponent"],
                ___WEBPACK_IMPORTED_MODULE_10__["OnlineExamComponent"],
                ___WEBPACK_IMPORTED_MODULE_10__["StudyMaterialComponent"],
                ___WEBPACK_IMPORTED_MODULE_10__["ReviewProductComponent"],
                ___WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                ___WEBPACK_IMPORTED_MODULE_10__["SalesReportsComponent"],
                ___WEBPACK_IMPORTED_MODULE_10__["VideoLectureComponent"],
                ___WEBPACK_IMPORTED_MODULE_10__["ClassroomClassComponent"],
                ___WEBPACK_IMPORTED_MODULE_10__["OnlineClassComponent"],
                ___WEBPACK_IMPORTED_MODULE_10__["OfflineMaterialComponent"],
                _product_registered_student_product_registered_student_component__WEBPACK_IMPORTED_MODULE_12__["RegisteredStudentComponent"],
                ___WEBPACK_IMPORTED_MODULE_10__["OfferHistoryComponent"]
            ],
            providers: [
                _services_excel_service__WEBPACK_IMPORTED_MODULE_8__["ExcelService"],
                _services_export_to_pdf_service__WEBPACK_IMPORTED_MODULE_7__["ExportToPdfService"],
                _services_message_show_service__WEBPACK_IMPORTED_MODULE_6__["MessageShowService"],
                _services_table_preference_table_preferences_service__WEBPACK_IMPORTED_MODULE_9__["TablePreferencesService"],
                _services_products_service__WEBPACK_IMPORTED_MODULE_14__["ProductService"],
                _services_http_service__WEBPACK_IMPORTED_MODULE_17__["HttpService"]
            ],
            exports: []
        })
    ], EstoreModule);
    return EstoreModule;
})();



/***/ }),

/***/ "./src/app/components/eStore-module/home/home.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/eStore-module/home/home.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".middle-section {\n  padding: 1%;\n}\n\n.activity-box-container {\n  padding: 1%;\n  height: 100%;\n}\n\n.activity-box-container .activity-container {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n}\n\n.activity-box-container .activity-container .activity-item-container {\n  padding: 15px 10px;\n  width: 31%;\n  background: #fff;\n  height: 120px;\n  border-radius: 4px;\n  cursor: pointer;\n  text-align: left;\n  margin: 1%;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.24);\n}\n\n.activity-box-container .activity-container .activity-item-container .img_name_container {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  justify-content: flex-start;\n  font-size: 14px;\n  font-weight: 600;\n  padding: 10px 5px;\n}\n\n.activity-box-container .activity-container .activity-item-container .img_name_container img {\n  width: 25px;\n  height: 25px;\n}\n\n.activity-box-container .activity-container .activity-item-container .img_name_container span {\n  margin-left: 10px;\n  margin-top: 5px;\n}\n\n.activity-box-container .activity-container .activity-item-container .activity-description {\n  font-size: 12px;\n  padding: 5px;\n}\n\n.header-section .header-title {\n  text-align: left;\n  font-size: 14px;\n  font-weight: 600;\n  color: #0084f6;\n  padding-bottom: 10px;\n  border-bottom: 1px solid rgba(10, 10, 10, 0.5);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lU3RvcmUtbW9kdWxlL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVc7QUFDZjs7QUFDRTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBRWhCOztBQUpFO0VBS0ksYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsMkJBQTJCO0FBR2pDOztBQVhFO0VBVU0sa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDViwyQ0FBeUM7QUFLakQ7O0FBdkJFO0VBb0JRLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLDJCQUEyQjtFQUMzQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQU8zQjs7QUFqQ0U7RUE0QlUsV0FBVztFQUNYLFlBQVk7QUFTeEI7O0FBdENFO0VBZ0NVLGlCQUFpQjtFQUNqQixlQUFlO0FBVTNCOztBQTNDRTtFQXFDUyxlQUFlO0VBQ2YsWUFBWTtBQVV2Qjs7QUFKRTtFQUVJLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsOENBQThDO0FBTXBEIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9lU3RvcmUtbW9kdWxlL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5taWRkbGUtc2VjdGlvbntcbiAgICBwYWRkaW5nOiAxJTtcbiAgfVxuICAuYWN0aXZpdHktYm94LWNvbnRhaW5lcntcbiAgICBwYWRkaW5nOiAxJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgLy8gYmFja2dyb3VuZDogI2Y3ZjdmNztcbiAgICAuYWN0aXZpdHktY29udGFpbmVye1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAuYWN0aXZpdHktaXRlbS1jb250YWluZXJ7XG4gICAgICAgIHBhZGRpbmc6IDE1cHggMTBweDtcbiAgICAgICAgd2lkdGg6IDMxJTtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgaGVpZ2h0OiAxMjBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIG1hcmdpbjogMSU7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwM3B4IDZweCByZ2JhKDAsMCwwLDAuMjQpO1xuICAgICAgICAuaW1nX25hbWVfY29udGFpbmVye1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgcGFkZGluZzogMTBweCA1cHg7XG4gICAgICAgICAgaW1ne1xuICAgICAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIHNwYW57XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmFjdGl2aXR5LWRlc2NyaXB0aW9ue1xuICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgXG4gIH1cbiAgLmhlYWRlci1zZWN0aW9ue1xuICAgIC5oZWFkZXItdGl0bGV7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGNvbG9yOiAjMDA4NGY2O1xuICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgxMCwgMTAsIDEwLCAwLjUpO1xuICAgIH1cbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/components/eStore-module/home/home.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/eStore-module/home/home.component.ts ***!
  \*****************************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _model_role_features__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../model/role_features */ "./src/app/model/role_features.ts");
/* harmony import */ var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/authenticator.service */ "./src/app/services/authenticator.service.ts");
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



let HomeComponent = /** @class */ (() => {
    let HomeComponent = class HomeComponent {
        constructor(auth) {
            this.auth = auth;
            this.jsonFlag = {
                isProfessional: false,
                isShowEcourseMapping: false
            };
            this.jsonEstoreFlags = {
                isEstoreMenu: false,
                isManageProduct: false,
                isManageOffer: false,
                isRegisterUser: false,
                isSalesReport: false,
                isCouponReport: false
            };
            this.role_feature = _model_role_features__WEBPACK_IMPORTED_MODULE_1__["role"].features;
        }
        ngOnInit() {
            const permittedRoles = sessionStorage.getItem('permitted_roles');
            const permissionArray = sessionStorage.getItem('permissions');
            const userType = sessionStorage.getItem('userType');
            this.auth.institute_type.subscribe(res => {
                if (res == 'LANG') {
                    this.jsonFlag.isProfessional = true;
                }
                else {
                    this.jsonFlag.isProfessional = false;
                }
            });
            if (userType == '0' && (permissionArray == "" || permissionArray == null)) {
                this.jsonFlag.isShowEcourseMapping = true;
            }
            if (sessionStorage.getItem('enable_elearn_course_mapping_feature') == '1') {
                this.jsonFlag.isShowEcourseMapping = true;
            }
            // Changes done by Nalini - To handle role based conditions
            if (sessionStorage.getItem('userType') != '0' || sessionStorage.getItem('username') != 'admin') {
                if (sessionStorage.getItem('permissions') != '' && sessionStorage.getItem('permissions') != null) {
                    this.jsonEstoreFlags.isManageOffer = this.role_feature.ESTORE_MANAGE_OFFER;
                    this.jsonEstoreFlags.isManageProduct = this.role_feature.ESTORE_MANAGE_PRODUCT;
                    this.jsonEstoreFlags.isRegisterUser = this.role_feature.ESTORE_REGISTER_USER;
                    this.jsonEstoreFlags.isSalesReport = this.role_feature.REPORT_PRODUCT_SALES;
                    this.jsonEstoreFlags.isCouponReport = this.role_feature.REPORT_PRODUCT_COUPON;
                }
            }
            else {
                let array = Object.keys(this.jsonEstoreFlags);
                array.forEach((flag) => {
                    this.jsonEstoreFlags[flag] = true;
                });
            }
        }
    };
    HomeComponent.ctorParameters = () => [
        { type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticatorService"] }
    ];
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __importDefault(__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/eStore-module/home/home.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./home.component.scss */ "./src/app/components/eStore-module/home/home.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticatorService"]])
    ], HomeComponent);
    return HomeComponent;
})();



/***/ }),

/***/ "./src/app/components/eStore-module/index.ts":
/*!***************************************************!*\
  !*** ./src/app/components/eStore-module/index.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent, SalesReportsComponent, ProductListComponent, BasicInfoComponent, ClassroomClassComponent, MockTestComponent, OfflineMaterialComponent, OnlineClassComponent, OnlineExamComponent, product_details, ReviewProductComponent, StudyMaterialComponent, VideoLectureComponent, OfferHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ "./src/app/components/eStore-module/home/home.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return _home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"]; });

/* harmony import */ var _sales_reports_sales_reports_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sales-reports/sales-reports.component */ "./src/app/components/eStore-module/sales-reports/sales-reports.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SalesReportsComponent", function() { return _sales_reports_sales_reports_component__WEBPACK_IMPORTED_MODULE_1__["SalesReportsComponent"]; });

/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-list/product-list.component */ "./src/app/components/eStore-module/product-list/product-list.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_2__["ProductListComponent"]; });

/* harmony import */ var _product_creation_basic_info_basic_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-creation/basic-info/basic-info.component */ "./src/app/components/eStore-module/product-creation/basic-info/basic-info.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BasicInfoComponent", function() { return _product_creation_basic_info_basic_info_component__WEBPACK_IMPORTED_MODULE_3__["BasicInfoComponent"]; });

/* harmony import */ var _product_creation_classroom_class_classroom_class_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-creation/classroom-class/classroom-class.component */ "./src/app/components/eStore-module/product-creation/classroom-class/classroom-class.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClassroomClassComponent", function() { return _product_creation_classroom_class_classroom_class_component__WEBPACK_IMPORTED_MODULE_4__["ClassroomClassComponent"]; });

/* harmony import */ var _product_creation_mock_test_mock_test_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-creation/mock-test/mock-test.component */ "./src/app/components/eStore-module/product-creation/mock-test/mock-test.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MockTestComponent", function() { return _product_creation_mock_test_mock_test_component__WEBPACK_IMPORTED_MODULE_5__["MockTestComponent"]; });

/* harmony import */ var _product_creation_offline_material_offline_material_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-creation/offline-material/offline-material.component */ "./src/app/components/eStore-module/product-creation/offline-material/offline-material.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OfflineMaterialComponent", function() { return _product_creation_offline_material_offline_material_component__WEBPACK_IMPORTED_MODULE_6__["OfflineMaterialComponent"]; });

/* harmony import */ var _product_creation_online_class_online_class_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product-creation/online-class/online-class.component */ "./src/app/components/eStore-module/product-creation/online-class/online-class.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OnlineClassComponent", function() { return _product_creation_online_class_online_class_component__WEBPACK_IMPORTED_MODULE_7__["OnlineClassComponent"]; });

/* harmony import */ var _product_creation_online_exam_online_exam_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product-creation/online-exam/online-exam.component */ "./src/app/components/eStore-module/product-creation/online-exam/online-exam.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OnlineExamComponent", function() { return _product_creation_online_exam_online_exam_component__WEBPACK_IMPORTED_MODULE_8__["OnlineExamComponent"]; });

/* harmony import */ var _product_creation_product_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./product-creation/product.model */ "./src/app/components/eStore-module/product-creation/product.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "product_details", function() { return _product_creation_product_model__WEBPACK_IMPORTED_MODULE_9__["product_details"]; });

/* harmony import */ var _product_creation_review_product_review_product_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./product-creation/review-product/review-product.component */ "./src/app/components/eStore-module/product-creation/review-product/review-product.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReviewProductComponent", function() { return _product_creation_review_product_review_product_component__WEBPACK_IMPORTED_MODULE_10__["ReviewProductComponent"]; });

/* harmony import */ var _product_creation_study_material_study_material_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./product-creation/study-material/study-material.component */ "./src/app/components/eStore-module/product-creation/study-material/study-material.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StudyMaterialComponent", function() { return _product_creation_study_material_study_material_component__WEBPACK_IMPORTED_MODULE_11__["StudyMaterialComponent"]; });

/* harmony import */ var _product_creation_video_lecture_video_lecture_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./product-creation/video-lecture/video-lecture.component */ "./src/app/components/eStore-module/product-creation/video-lecture/video-lecture.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VideoLectureComponent", function() { return _product_creation_video_lecture_video_lecture_component__WEBPACK_IMPORTED_MODULE_12__["VideoLectureComponent"]; });

/* harmony import */ var _offer_history_offer_history_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./offer-history/offer-history.component */ "./src/app/components/eStore-module/offer-history/offer-history.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OfferHistoryComponent", function() { return _offer_history_offer_history_component__WEBPACK_IMPORTED_MODULE_13__["OfferHistoryComponent"]; });

















/***/ }),

/***/ "./src/app/components/eStore-module/offer-history/offer-history.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/components/eStore-module/offer-history/offer-history.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".product-wrapper {\n  padding: 1%;\n  width: 100%;\n}\n\n.product-wrapper .row {\n  margin: 0;\n}\n\n.search-filter {\n  font-size: 12px;\n  display: flex;\n  flex-direction: row;\n  padding: 5px 0px;\n  border-bottom: 1px solid #d4d4d4;\n}\n\n.search-filter .filter-item-1 {\n  width: 80%;\n  display: flex;\n  flex-direction: row;\n}\n\n.search-filter .filter-item-1 .header-item {\n  width: 30%;\n  display: flex;\n  flex-direction: column;\n  padding-right: 5%;\n}\n\n.search-filter .filter-item-1 .header-item .header-select-box {\n  border-radius: 4px;\n  border: 1px solid #d4d4d4;\n  margin: 5px 0px;\n  padding: 5px 0px;\n}\n\n.search-filter .filter-item-1 .go-btn-container {\n  display: flex;\n  flex-direction: column;\n  font-size: 12px;\n  color: #3e3d4a;\n  width: auto;\n}\n\n.search-filter .filter-item-1 .go-btn-container .gobtn {\n  border: 1px solid #3a66fa;\n  border-radius: 4px;\n  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);\n  padding: 4px 10px;\n  background: #3a66fa;\n  color: #ffffff;\n  font-weight: 600;\n  height: 30px;\n  margin-top: 5px;\n}\n\n.search-filter .filer-input {\n  margin: 5px 0px;\n  border-radius: 4px;\n  border: 1px solid #d4d4d4;\n  padding: 8px 5px;\n  width: 100%;\n  height: 30px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lU3RvcmUtbW9kdWxlL29mZmVyLWhpc3Rvcnkvb2ZmZXItaGlzdG9yeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFdBQVc7RUFDWCxXQUFXO0FBQWY7O0FBRkE7RUFLTSxTQUFTO0FBQ2Y7O0FBR0E7RUFDSSxlQUFlO0VBQ2YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFFaEIsZ0NBQWdDO0FBRHBDOztBQUxBO0VBVU0sVUFBVTtFQUNWLGFBQWE7RUFDYixtQkFBbUI7QUFEekI7O0FBWEE7RUFnQlEsVUFBVTtFQUNWLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsaUJBQWlCO0FBRHpCOztBQWxCQTtFQXNCVSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixnQkFBZ0I7QUFBMUI7O0FBekJBO0VBOEJRLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGNBQWM7RUFDZCxXQUFXO0FBRG5COztBQWpDQTtFQW9DVSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLCtDQUErQztFQUMvQyxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGVBQWU7QUFDekI7O0FBN0NBO0VBaURRLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsWUFBWTtBQUFwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZVN0b3JlLW1vZHVsZS9vZmZlci1oaXN0b3J5L29mZmVyLWhpc3RvcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5wcm9kdWN0LXdyYXBwZXIge1xuICAgIHBhZGRpbmc6IDElO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIFxuICAgIC5yb3d7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxufSAgXG5cbi5zZWFyY2gtZmlsdGVyIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIHBhZGRpbmc6IDVweCAwcHg7XG4gICAgLy8gYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkNGQ0ZDQ7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkNGQ0ZDQ7XG4gIC8vICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBcbiAgICAuZmlsdGVyLWl0ZW0tMSB7XG4gICAgICB3aWR0aDogODAlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIFxuICAgICAgLmhlYWRlci1pdGVtIHtcbiAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgcGFkZGluZy1yaWdodDogNSU7XG4gIFxuICAgICAgICAuaGVhZGVyLXNlbGVjdC1ib3gge1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZDRkNGQ0O1xuICAgICAgICAgIG1hcmdpbjogNXB4IDBweDtcbiAgICAgICAgICBwYWRkaW5nOiA1cHggMHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gIFxuICAgICAgLmdvLWJ0bi1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGNvbG9yOiAjM2UzZDRhO1xuICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgLmdvYnRuIHtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjM2E2NmZhO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgICAgICAgICBwYWRkaW5nOiA0cHggMTBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjM2E2NmZhO1xuICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAuZmlsZXItaW5wdXR7XG4gICAgICAgIG1hcmdpbjogNXB4IDBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZDRkNGQ0O1xuICAgICAgICBwYWRkaW5nOiA4cHggNXB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgfVxuICB9Il19 */");

/***/ }),

/***/ "./src/app/components/eStore-module/offer-history/offer-history.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/eStore-module/offer-history/offer-history.component.ts ***!
  \***********************************************************************************/
/*! exports provided: OfferHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfferHistoryComponent", function() { return OfferHistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/authenticator.service */ "./src/app/services/authenticator.service.ts");
/* harmony import */ var _services_message_show_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/message-show.service */ "./src/app/services/message-show.service.ts");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var _services_table_preference_table_preferences_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/table-preference/table-preferences.service */ "./src/app/services/table-preference/table-preferences.service.ts");
/* harmony import */ var _services_excel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/excel.service */ "./src/app/services/excel.service.ts");
/* harmony import */ var _services_export_to_pdf_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/export-to-pdf.service */ "./src/app/services/export-to-pdf.service.ts");
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







let OfferHistoryComponent = /** @class */ (() => {
    let OfferHistoryComponent = class OfferHistoryComponent {
        // tableSetting: any = {
        //   tableDetails: { title: 'Offer Report', key: 'products.offerReport', showTitle: false },
        //   search: { title: 'Search', showSearch: false },
        //   keys: this.displayKeys,
        //   selectAll: { showSelectAll: false, option: 'single', title: 'Display report', checked: true, key: 'title' },
        //   defaultSort: { primaryKey: 'user_id', sortingType: 'asc', header: 'User Id', priority: 4, allowSortingFlag: true },
        //   actionSetting:
        //   {
        //     showActionButton: false
        //   },
        //   displayMessage: 'Data Not Found'
        // };
        constructor(_tablePreferencesService, _productService, auth, _msgService, _excelService, _pdfService) {
            this._tablePreferencesService = _tablePreferencesService;
            this._productService = _productService;
            this.auth = auth;
            this._msgService = _msgService;
            this._excelService = _excelService;
            this._pdfService = _pdfService;
            this.searchFilter = '';
            this.displayKeys = [];
            this.offerHistoryData = [];
            this.offerHistoryDataSource = [];
            this.varJson = {
                PageIndex: 1,
                sizeArr: [25, 50, 100, 150, 200, 500, 1000],
                displayBatchSize: 25,
                total_items: 0
            };
            this.feeSettings1 = [
                { primaryKey: 'offer_code', header: 'Offer Code', priority: 1, allowSortingFlag: true },
                { primaryKey: 'product_name', header: 'Product Name', priority: 2, allowSortingFlag: true },
                { primaryKey: 'user_name', header: 'User Name', priority: 4, allowSortingFlag: true },
                { primaryKey: 'discount_amount', header: 'Discount Amount', priority: 5, allowSortingFlag: true },
            ];
        }
        ngOnInit() {
            this.setTableData();
            // this.setDefaultValues();
            this.fectchTableDataByPage(1);
            //this.getOfferHistory();
        }
        setTableData() {
            this.headerSetting = [
                {
                    primary_key: 'order_id',
                    value: "Order ID",
                    charactLimit: 20,
                    sorting: true,
                    visibility: true
                },
                {
                    primary_key: 'product_name',
                    value: "Product Name",
                    charactLimit: 15,
                    sorting: false,
                    visibility: true
                },
                {
                    primary_key: 'user_name',
                    value: "Student Name",
                    charactLimit: 15,
                    sorting: false,
                    visibility: true
                },
                {
                    primary_key: 'phone',
                    value: "Phone No",
                    charactLimit: 50,
                    sorting: false,
                    visibility: true
                },
                {
                    primary_key: 'purchase_date',
                    value: "Purchase Date",
                    charactLimit: 15,
                    sorting: false,
                    visibility: true
                },
                {
                    primary_key: 'actual_amount',
                    value: "Product Price",
                    charactLimit: 30,
                    sorting: false,
                    visibility: true
                },
                {
                    primary_key: 'paid_amount',
                    value: "Paid",
                    charactLimit: 30,
                    sorting: false,
                    visibility: true
                },
                {
                    primary_key: 'offer_code',
                    value: "Offer Code",
                    charactLimit: 30,
                    sorting: false,
                    visibility: true
                },
                {
                    primary_key: 'status',
                    value: "Offer Status",
                    charactLimit: 30,
                    sorting: false,
                    visibility: true
                },
                {
                    primary_key: 'offer_type',
                    value: "Coupon/Voucher",
                    charactLimit: 30,
                    sorting: false,
                    visibility: true
                },
            ];
            this.tableSetting = {
                width: "100%",
                height: "67vh"
            };
            this.rowColumns = [
                {
                    width: "10%",
                    textAlign: "left"
                },
                {
                    width: "10%",
                    textAlign: "left"
                },
                {
                    width: "10%",
                    textAlign: "left"
                },
                {
                    width: "10%",
                    textAlign: "left"
                },
                {
                    width: "10%",
                    textAlign: "left"
                },
                {
                    width: "10%",
                    textAlign: "left"
                },
                {
                    width: "10%",
                    textAlign: "left"
                },
                {
                    width: "10%",
                    textAlign: "left"
                },
                {
                    width: "10%",
                    textAlign: "left"
                },
                {
                    width: "10%",
                    textAlign: "left"
                },
            ];
        }
        // setDefaultValues() {
        //   this.tableSetting.keys = [
        //     // As per TS 632 . Column Added. Added By Ashwini Kumar Gupta
        //     { primaryKey: 'order_id', header: 'Order ID', priority: 1, allowSortingFlag: true },
        //     { primaryKey: 'product_name', header: 'Product Name', priority: 2, allowSortingFlag: true },
        //     { primaryKey: 'user_name', header: 'Student Name', priority: 3, allowSortingFlag: true },
        //     { primaryKey: 'phone', header: 'Phone No', priority: 4, allowSortingFlag: true },
        //     { primaryKey: 'purchase_date', header: 'Purchase Date', priority: 5, allowSortingFlag: true },
        //     { primaryKey: 'actual_amount', header: 'Product Price', priority: 6, allowSortingFlag: true },
        //     { primaryKey: 'paid_amount', header: 'Paid', priority: 7, allowSortingFlag: true },
        //     { primaryKey: 'offer_code', header: 'Offer Code', priority: 8, allowSortingFlag: true },
        //     { primaryKey: 'status', header: 'Offer Status', priority: 9, allowSortingFlag: true },
        //     { primaryKey: 'offer_type', header: 'Coupon/Voucher', priority: 10, allowSortingFlag: true },
        //     // End
        //   ];
        //   this.displayKeys = this.tableSetting.keys;
        //   this._tablePreferencesService.setTablePreferences(this.tableSetting.tableDetails.key, this.displayKeys);
        // }
        getOfferHistory() {
            const object = {
                //Interchange the sequence and rename the page_no to pageNo and no_of_records to noOfRecords   -- Ashwini Kumar Gupta
                'pageNo': this.varJson.PageIndex,
                'noOfRecords': this.varJson.displayBatchSize,
                'searchValue': this.searchFilter,
            };
            this.auth.showLoader();
            this._productService.getMethod('use-offer/search-filter', object).subscribe((data) => {
                if (data.validate) {
                    this.auth.hideLoader();
                    this.offerHistoryData = data.result.results;
                    this.totalCount = this.offerHistoryData.length; //Fetching the total count of record. Added by Ashwini Gupta
                    this.varJson.total_items = this.offerHistoryData.length;
                    console.log(this.totalCount);
                }
                else {
                    this.auth.hideLoader();
                    this._msgService.showErrorMessage('error', 'something went wrong, try again', '');
                }
            }, err => {
                this.auth.hideLoader();
                this._msgService.showErrorMessage('error', '', err.error.message);
            });
        }
        optionSelected($event) {
            console.log($event);
        }
        /** this function is used to download execel
         * written by laxmi
        */
        exportToExcel() {
            let exportedArray = [];
            this.offerHistoryData.map((data) => {
                let obj = {};
                obj["Order ID"] = data.order_id;
                obj["Product Name"] = data.product_name;
                obj["Student Name"] = data.user_name;
                obj["Phone No"] = data.phone;
                obj["Purchase Date"] = data.purchase_date;
                obj["Product Price"] = data.actual_amount;
                obj["Paid"] = data.paid_amount;
                obj["Offer Code"] = data.offer_code;
                obj["Offer Status"] = data.status;
                obj["Coupon/Voucher"] = data.offer_type;
                exportedArray.push(obj);
            });
            this._excelService.exportAsExcelFile(exportedArray, 'eStore Offer History');
        }
        /** this function is used to download pdf
         * written by Aswhini Kumar Gupta
        */
        exportToPdf() {
            let arr = [];
            this.offerHistoryData.map((ele) => {
                console.log(ele.status);
                let json = [
                    ele.order_id,
                    ele.product_name,
                    ele.user_name,
                    ele.phone,
                    ele.purchase_date,
                    ele.actual_amount,
                    ele.paid_amount,
                    ele.offer_code,
                    ele.status,
                    ele.offer_type,
                ];
                arr.push(json);
            });
            let rows = [];
            rows = [['Order ID', "Product Name", "Student Name", 'Phone No', 'Purchase Date', 'Product Price', 'Paid', 'Offer Code', 'Offer Status', 'Coupon/Voucher']];
            let columns = arr;
            let columnStyles = {
                1: {
                    columnWidth: 30
                },
                2: {
                    columnWidth: 90
                },
                3: {
                    columnWidth: 30
                },
            };
            this._pdfService.exportToPdf(rows, columns, 'eStore', columnStyles);
        }
        // pagination functions Added by ashwini gupta  - Server side pagination
        /* Fetch table data by page index */
        fectchTableDataByPage(index) {
            this.varJson.PageIndex = index;
            const object = {
                //Interchange the sequence and rename the page_no to pageNo and no_of_records to noOfRecords   -- Ashwini Kumar Gupta
                'pageNo': this.varJson.PageIndex,
                'noOfRecords': this.varJson.displayBatchSize,
                'searchValue': this.searchFilter,
            };
            this.auth.showLoader();
            this._productService.getMethod('use-offer/search-filter', object).subscribe((resp) => {
                if (resp.validate) {
                    this.auth.hideLoader();
                    this.offerHistoryData = resp.result.results;
                    this.varJson.total_items = resp.result.total_records; //Fetching the total count of record. Added by Ashwini Gupta
                }
                else {
                    this.auth.hideLoader();
                    this._msgService.showErrorMessage('error', 'something went wrong, try again', '');
                }
            }, (err) => {
                this.auth.hideLoader();
                this._msgService.showErrorMessage('error', 'something went wrong, try again', '');
            });
        }
        fetchNext() {
            this.varJson.PageIndex++;
            this.fectchTableDataByPage(this.varJson.PageIndex);
        }
        fetchPrevious() {
            this.varJson.PageIndex--;
            this.fectchTableDataByPage(this.varJson.PageIndex);
        }
        updateTableBatchSize(num) {
            this.varJson.PageIndex = 1;
            this.varJson.displayBatchSize = parseInt(num);
            this.fectchTableDataByPage(this.varJson.PageIndex);
        }
    };
    OfferHistoryComponent.ctorParameters = () => [
        { type: _services_table_preference_table_preferences_service__WEBPACK_IMPORTED_MODULE_4__["TablePreferencesService"] },
        { type: _services_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] },
        { type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticatorService"] },
        { type: _services_message_show_service__WEBPACK_IMPORTED_MODULE_2__["MessageShowService"] },
        { type: _services_excel_service__WEBPACK_IMPORTED_MODULE_5__["ExcelService"] },
        { type: _services_export_to_pdf_service__WEBPACK_IMPORTED_MODULE_6__["ExportToPdfService"] }
    ];
    OfferHistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-offer-history',
            template: __importDefault(__webpack_require__(/*! raw-loader!./offer-history.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/eStore-module/offer-history/offer-history.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./offer-history.component.scss */ "./src/app/components/eStore-module/offer-history/offer-history.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_services_table_preference_table_preferences_service__WEBPACK_IMPORTED_MODULE_4__["TablePreferencesService"],
            _services_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"],
            _services_authenticator_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticatorService"],
            _services_message_show_service__WEBPACK_IMPORTED_MODULE_2__["MessageShowService"],
            _services_excel_service__WEBPACK_IMPORTED_MODULE_5__["ExcelService"],
            _services_export_to_pdf_service__WEBPACK_IMPORTED_MODULE_6__["ExportToPdfService"]])
    ], OfferHistoryComponent);
    return OfferHistoryComponent;
})();



/***/ }),

/***/ "./src/app/components/eStore-module/product-creation/basic-info/basic-info.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/components/eStore-module/product-creation/basic-info/basic-info.component.scss ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* ===============================header colors=======================*/\n.table-format-first .table-responsive table th,\n.table-format-first .table-responsive table td {\n  text-align: center;\n  padding: 10px 5px;\n}\n.table-format-first .table-responsive table th {\n  text-transform: capitalize;\n  font-size: 14px;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper {\n  display: inline-block;\n  overflow: initial;\n  margin-left: 0;\n  width: auto;\n  position: relative;\n  background: transparent;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox {\n  z-index: 2;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label {\n  font-size: 16px;\n  margin-left: 7px;\n  font-weight: 600;\n  vertical-align: middle;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:after, .table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:before {\n  z-index: 1;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper:after {\n  content: '';\n  width: 20px;\n  height: 20px;\n  background: #fff;\n  left: 0;\n  top: 0;\n  position: absolute;\n}\n.table-format-first .table-responsive table tbody tr td .fa-trash-o {\n  color: #f44336;\n  font-size: 20px;\n}\n.table-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-top: 10px;\n}\n.table-container .heading-container {\n  background: #e0eaec;\n  display: flex;\n  flex-direction: row;\n  font-size: 14px;\n  font-weight: 600;\n  text-align: left;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n}\n.table-container .heading-container .heading-item {\n  width: 10%;\n  text-align: center;\n}\n.table-container .value-outer-container {\n  display: flex;\n  flex-direction: column;\n  min-height: 53vh;\n  max-height: 54vh;\n  overflow-x: hidden;\n  overflow-y: auto;\n  border: 1px solid #ccc;\n}\n.table-container .value-outer-container .value-container {\n  display: flex;\n  flex-direction: row;\n  text-align: left;\n  padding: 4px;\n  font-size: 12px;\n  border-bottom: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n  border-top: none;\n}\n.table-container .value-outer-container .value-container .value-item {\n  width: 10%;\n  text-align: center;\n}\n/* ===============================header colors=======================*/\n.table-format-first .table-responsive table th,\n.table-format-first .table-responsive table td {\n  text-align: center;\n  padding: 10px 5px;\n}\n.table-format-first .table-responsive table th {\n  text-transform: capitalize;\n  font-size: 14px;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper {\n  display: inline-block;\n  overflow: initial;\n  margin-left: 0;\n  width: auto;\n  position: relative;\n  background: transparent;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox {\n  z-index: 2;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label {\n  font-size: 16px;\n  margin-left: 7px;\n  font-weight: 600;\n  vertical-align: middle;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:after, .table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:before {\n  z-index: 1;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper:after {\n  content: '';\n  width: 20px;\n  height: 20px;\n  background: #fff;\n  left: 0;\n  top: 0;\n  position: absolute;\n}\n.table-format-first .table-responsive table tbody tr td .fa-trash-o {\n  color: #f44336;\n  font-size: 20px;\n}\n.table-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-top: 10px;\n}\n.table-container .heading-container {\n  background: #e0eaec;\n  display: flex;\n  flex-direction: row;\n  font-size: 14px;\n  font-weight: 600;\n  text-align: left;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n}\n.table-container .heading-container .heading-item {\n  width: 10%;\n  text-align: center;\n}\n.table-container .value-outer-container {\n  display: flex;\n  flex-direction: column;\n  min-height: 53vh;\n  max-height: 54vh;\n  overflow-x: hidden;\n  overflow-y: auto;\n  border: 1px solid #ccc;\n}\n.table-container .value-outer-container .value-container {\n  display: flex;\n  flex-direction: row;\n  text-align: left;\n  padding: 4px;\n  font-size: 12px;\n  border-bottom: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n  border-top: none;\n}\n.table-container .value-outer-container .value-container .value-item {\n  width: 10%;\n  text-align: center;\n}\n/** these css for gear icon download options\n* created by laxmi\n*/\nsvg:hover #gearIcon {\n  fill: #0084f6;\n}\n.asHover:hover {\n  color: #0084f6 !important;\n}\n.download:hover {\n  cursor: pointer;\n}\n.made-in {\n  font-size: 17px;\n  font-weight: bold;\n  text-align: left;\n}\n.dropdown > ul {\n  background: #fff;\n  padding: 10px 20px;\n  border: 1px solid #eaeaeb;\n  border-top: 0;\n  margin-top: 3px;\n  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 6px 10px 0 rgba(0, 0, 0, 0.12);\n}\n.dropdown > ul li {\n  color: #333;\n}\n.dropdown > ul li strong {\n  font-weight: 600;\n  display: block;\n}\n.dropdown > ul li a {\n  display: block;\n  color: #333;\n}\n.login-tube nav > ul > li {\n  display: inline-block;\n  position: relative;\n}\n.login-tube nav > ul > li > a {\n  color: #333;\n  text-decoration: none;\n  padding: 5px 10px;\n  display: block;\n  transition: all .4s;\n}\n.login-tube nav > ul > li > a:hover,\n.login-tube nav > ul > li:hover > a {\n  text-decoration: none;\n  background: #ccc;\n}\n.login-tube nav > ul > li .dropdown {\n  position: absolute;\n  visibility: hidden;\n  right: 0;\n  top: 100%;\n  min-width: 200px;\n  border-top: 0;\n  opacity: 0;\n  transition: all 0.1s cubic-bezier(0.55, 0, 0.55, 0.2);\n  transition-duration: .2s;\n  transform: scale(0.5);\n}\n.login-tube nav > ul > li .dropdown > ul li {\n  line-height: normal;\n}\n.login-tube nav > ul > li .dropdown > ul li a {\n  display: block;\n  margin: 5px 0;\n}\n.login-tube nav > ul > li .dropdown > ul li a:hover {\n  color: #0084f6;\n}\n.login-tube nav > ul > li .dropdown > ul ul {\n  padding-left: 15px;\n  padding-top: 10px;\n}\n.login-tube nav > ul > li .dropdown > ul ul ul {\n  padding-top: 0;\n}\n.login-tube nav > ul > li:hover .dropdown {\n  visibility: visible;\n  position: absolute;\n  opacity: 1;\n  right: 0;\n  top: 100%;\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition-duration: .5s;\n  transform: scale(1);\n}\n.span-button {\n  border: 1px solid #0084f6;\n  padding: 4px 8px;\n  color: #0084f6;\n  font-size: .9em;\n  border-radius: 2px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.span-button svg {\n  margin: -3px 0;\n  height: 14px;\n}\nlogin-nav > li {\n  display: inline-block;\n  padding: 0 7px;\n  cursor: pointer;\n  vertical-align: text-bottom;\n}\nlogin-nav > li .dropdown {\n  position: absolute;\n  right: 0;\n  top: 100%;\n  padding-top: 10px;\n}\nlogin-nav > li .icons {\n  width: 35px;\n  height: 35px;\n  display: block;\n  text-align: center;\n  box-sizing: border-box;\n  border-radius: 50%;\n  padding-top: 3px;\n  transition: all 0.1s;\n  border: 1px solid transparent;\n}\nlogin-nav > li .icons svg {\n  width: 25px;\n  color: #034979;\n}\nlogin-nav > li .icons svg .cls-1 {\n  stroke: #034979;\n  stroke-linejoin: unset;\n  border: none;\n}\nlogin-nav > li .user-info {\n  white-space: nowrap;\n  margin-right: 40px;\n  width: auto;\n  display: block;\n  position: relative;\n}\nlogin-nav > li .user-info > .icons {\n  display: inline-block;\n  vertical-align: middle;\n}\nlogin-nav > li .user-info > span {\n  vertical-align: middle;\n  display: inline-block;\n}\nlogin-nav > li .user-info:after {\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  content: \"\\f107\";\n  font-size: 17px;\n  position: absolute;\n  right: -20px;\n  top: 10px;\n}\n/**\n  this css is for report section css for cards\n  added by laxmi\n*/\n.report-box {\n  width: 100%;\n  height: 100%;\n  padding: 10px;\n}\n.report-box ul.card-box li.card-row {\n  margin: 10px 0px;\n}\n.report-box ul.card {\n  padding: 15px 10px;\n  border: 1px solid #efefef;\n  background: #fff;\n  height: 120px;\n  border-radius: 4px;\n  cursor: pointer;\n  text-align: left;\n  margin: 10px 0px;\n  box-shadow: 0px 0px 2px 0px;\n}\n.report-box ul.card li {\n  padding: 5px;\n}\n.report-box ul.card li:first-child {\n  font-size: 14px;\n  font-weight: 600;\n  padding: 10px 5px;\n}\n.report-box ul.card li:nth-child(2n) {\n  font-size: 12px;\n}\n.disabled {\n  cursor: not-allowed;\n  background: lightgrey;\n}\n.form-group label {\n  font-size: 0.9em;\n  color: #555;\n  margin-bottom: 0.3em;\n  font-weight: 600;\n}\n.btn-round {\n  padding: 0.2em 1em;\n  border-radius: 4px;\n  margin: 0.2em;\n}\n.product-image .change-box {\n  max-width: 220px;\n  cursor: pointer;\n}\n.product-image .change-box img {\n  max-width: 220px;\n  width: 100%;\n  border: 6pt solid #f7f7f7;\n  box-shadow: 0pt 0pt 2pt #dadada;\n}\n.product-image .change-box .change {\n  display: none;\n}\n.product-image .change-box:hover .change {\n  display: block;\n  text-align: center;\n  background: #00968845;\n  margin-top: -2em;\n  position: relative;\n}\n.product-image .change-box:hover .change label {\n  margin: auto;\n  padding: 0.4em;\n  color: #0a6bb9;\n}\n.basic-info-footer {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  border-top: 1pt solid #f3f3f3;\n  padding: 0.5em 0.8em;\n  background: #fff;\n  box-shadow: 0pt -2pt 6pt #e6e6e6;\n  z-index: 5;\n  background: #fafafa;\n  width: 85.5%;\n  margin-left: 14.5%;\n}\n.count-input-box {\n  max-width: 61px;\n  display: inline-block;\n  height: 30px;\n  margin-left: 0.5em;\n  float: right;\n}\n.form-ctrl {\n  display: block;\n  width: 100%;\n  height: 34px;\n  padding: 6px 12px;\n  font-size: 14px;\n  line-height: 1.42857143;\n  color: #555;\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n}\ninput[type=\"checkbox\"], label {\n  vertical-align: middle;\n  margin-bottom: 0.2em !important;\n}\n.border-bt {\n  margin-bottom: 0.5rem;\n}\n.field-wrapper.datePickerBox:after {\n  position: absolute;\n  right: 20px;\n  top: 24px;\n}\n.qInfoIcon {\n  width: 20px;\n  margin-left: 5px;\n  height: 20px;\n  border: 1px solid #ccc;\n  border-radius: 50%;\n  display: block;\n  text-align: center;\n  box-sizing: border-box;\n  line-height: 20px;\n  font-weight: 600;\n  font-size: 12px;\n  cursor: pointer;\n  box-shadow: 0px 0px 1px 0px #ccc inset;\n  color: #888;\n  transition: all 0.2s linear;\n}\n.qInfoIcon:hover {\n  border-color: #0060A3;\n  box-shadow: 0px 0px 1px 0px #0060A3 inset;\n  color: #0060A3;\n}\n.black-bg {\n  background: rgba(12, 11, 11, 0.3);\n  position: fixed;\n  top: 0px;\n  height: 100%;\n  left: 0px;\n  z-index: 6;\n  width: 100%;\n}\n.datePickerBox .form-ctrl {\n  position: relative;\n  z-index: 1;\n  float: left;\n  font: 400 12px 'Open sans',sans-serif;\n  width: 100% !important;\n}\n.datePickerBox:after {\n  content: '';\n  background: url('calendar.svg') no-repeat;\n  position: absolute;\n  left: 80% !important;\n  top: 25px !important;\n  width: 21px;\n  height: 21px;\n  z-index: 0;\n}\ninput[type=\"text\"][disabled] {\n  background: #dddddd !important;\n}\n:host ::ng-deep .ck-editor__editable_inline {\n  border: 1px solid #ccc;\n  min-height: 100px;\n}\n.ck-editor__editable {\n  border: 1px solid #ccc;\n}\n.questionInfo {\n  position: absolute;\n  height: 20px;\n  width: 20px;\n  z-index: 2;\n}\n.questionInfo .qInfoIcon {\n  width: 20px;\n  height: 20px;\n  border: 1px solid rgba(0, 0, 0, 0.7);\n  border-radius: 50%;\n  display: block;\n  text-align: center;\n  box-sizing: border-box;\n  line-height: 20px;\n  font-weight: 600;\n  font-size: 12px;\n  cursor: pointer;\n  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.7) inset;\n  color: #888;\n  transition: all 0.6s linear;\n}\n.questionInfo .qInfoIcon:hover {\n  border-color: #0060A3;\n  box-shadow: 0px 0px 1px 0px #0060A3 inset;\n  color: #0060A3;\n}\n.tooltip-box-field {\n  min-width: 200px;\n  max-width: 200px;\n  overflow: visible;\n  color: #b4b6bd;\n  background: #2e3345;\n  font-weight: 400;\n  font-size: 12px;\n  padding: 1em;\n  border-radius: 4px;\n  line-height: 14px;\n}\n.tooltip-box-field:hover {\n  background: black;\n}\n.tooltip-box-field:after {\n  content: '';\n  width: 0;\n  height: 0;\n  border-right: 8px solid #2e3345;\n  border-top: 8px solid transparent;\n  border-bottom: 8px solid transparent;\n  position: absolute;\n  left: -7px;\n  top: 4px;\n  bottom: 0;\n}\n.infomation-icon {\n  color: #0060A3;\n  margin: 0 5px;\n  padding: 2px;\n  font-weight: 900;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY3NzL2NvbW1vbi92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9lU3RvcmUtbW9kdWxlL3Byb2R1Y3QtY3JlYXRpb24vYmFzaWMtaW5mby9iYXNpYy1pbmZvLmNvbXBvbmVudC5zY3NzIiwic3JjL2Fzc2V0cy9jc3MvY29tbW9uL2NvbW1vbi13ZWIuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZQSx1RUFBQTtBQVdBOztFQUtnQixrQkFBa0I7RUFDbEIsaUJBQWlCO0FDeEJqQztBRGtCQTtFQVNnQiwwQkFBMEI7RUFDMUIsZUFBZTtBQ3ZCL0I7QURhQTtFQWdCNEIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsV0FBVztFQUNYLGtCQUFrQjtFQUNsQix1QkFBdUI7QUN6Qm5EO0FESUE7RUF1QmdDLFVBQVU7QUN2QjFDO0FEQUE7RUEwQmdDLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtBQ3RCdEQ7QURQQTtFQWdDb0MsVUFBVTtBQ3JCOUM7QURYQTtFQW9DZ0MsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLE9BQU87RUFDUCxNQUFNO0VBQ04sa0JBQWtCO0FDckJsRDtBRHJCQTtFQThDNEIsY0FsRGI7RUFtRGEsZUFBZTtBQ3JCM0M7QUQ4QkE7RUFDSSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxnQkFBZ0I7QUMzQnBCO0FEdUJBO0VBTU0sbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIseUJBQXlCO0FDekIvQjtBRFVBO0VBaUJRLFVBQVU7RUFDVixrQkFBa0I7QUN2QjFCO0FES0E7RUFzQk0sYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsZ0JB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VztFQUNYLFlBQVk7RUFDWixvQ0FBa0M7RUFDbEMsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGVBQWU7RUFDZixvREFBa0Q7RUFDbEQsV0FBVztFQUNYLDJCQUEyQjtBQXdiOUI7QUEzY0E7RUFxQksscUJEbExhO0VDbUxiLHlDQUE0QztFQUM1QyxjRHBMYTtBQzhtQmxCO0FBcmJBO0VBQ0MsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBd2JsQjtBQWxjQTtFQVlFLGlCQUF5QjtBQTBiM0I7QUF0YkE7RUFDQyxXQUFXO0VBQ1gsUUFBUTtFQUNSLFNBQVM7RUFDVCwrQkFBK0I7RUFDL0IsaUNBQWlDO0VBQ2pDLG9DQUFvQztFQUNwQyxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFFBQVE7RUFDUixTQUFTO0FBeWJWO0FBdGJBO0VBQ0MsY0R2TmlCO0VDd05qQixhQUFhO0VBQ2IsWUFBWTtFQUNaLGdCQUFnQjtBQXliakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2VTdG9yZS1tb2R1bGUvcHJvZHVjdC1jcmVhdGlvbi9iYXNpYy1pbmZvL2Jhc2ljLWluZm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkcHVsbC1MOiBsZWZ0O1xuJHB1bGwtUjogcmlnaHQ7XG4kcHVsbC1ub25lOiBub25lO1xuJGZ1bGwtd2lkdGg6IDEwMCU7XG4kYm9yZGVyLWJveDogYm9yZGVyLWJveDtcbiRib3JkZXItY29sb3I6ICNkZWVhZWU7XG4kYmctd2hpdGU6ICNmZmY7XG4kZXJyb3ItY29sb3I6ICNmZjAwMDA7XG4kY29tbW9uLWJsdWU6ICMwMDg0ZjY7XG4kcHJpbWFyeS1jb2xvcjogIzMzMztcbiRib3JkZXItY29tbW9uOiNlYWVhZWI7XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1oZWFkZXIgY29sb3JzPT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4kaGVhZGVyLWJnOiMwMDYwQTM7XG4kaGVhZGVyLWJvcmRlcjojZWFlYWViO1xuJGxlZnRNZW51Qmc6I2ZhZmFmYTtcbiRsZWZ0TWVudUhvdmVyQmc6IzAwODRmNjtcbiRsZWZ0TWVudVRleHRIb3ZlckNvbG9yOiNmZmY7XG4kcmVkQnRuOiNmNDQzMzY7XG4kYm9yZGVyY2NjOiNjY2M7XG4kbGlnaHRCbHVlOiNlZmY3ZmY7XG4kdGFibGVIZWFkaW5nQmdDb2xvcjogIzAwNGE3ZTtcbi50YWJsZS1mb3JtYXQtZmlyc3Qge1xuICAgIC50YWJsZS1yZXNwb25zaXZlIHtcbiAgICAgICAgdGFibGUge1xuICAgICAgICAgICAgdGgsXG4gICAgICAgICAgICB0ZCB7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGgge1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRib2R5IHtcbiAgICAgICAgICAgICAgICB0ciB7XG4gICAgICAgICAgICAgICAgICAgIHRkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maWVsZC1jaGVja2JveC13cmFwcGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGluaXRpYWw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mb3JtLWNoZWNrYm94IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZvcm0tY2hlY2tib3grbGFiZWwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA3cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6YWZ0ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuZmEtdHJhc2gtbyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRyZWRCdG47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4udGFibGUtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAuaGVhZGluZy1jb250YWluZXIge1xuICAgICAgYmFja2dyb3VuZDogI2UwZWFlYztcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICAgIC5oZWFkaW5nLWl0ZW0ge1xuICAgICAgICB3aWR0aDogMTAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgfVxuICAgIC52YWx1ZS1vdXRlci1jb250YWluZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBtaW4taGVpZ2h0OiA1M3ZoO1xuICAgICAgbWF4LWhlaWdodDogNTR2aDtcbiAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgLnZhbHVlLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgICAgIC52YWx1ZS1pdGVtIHtcbiAgICAgICAgICB3aWR0aDogMTAlO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSIsIkBpbXBvcnQgXCIuL3NyYy9hc3NldHMvY3NzL2NvbW1vbi92YXJpYWJsZXMuc2Nzc1wiO1xuQGltcG9ydCBcIi4vc3JjL2Fzc2V0cy9jc3MvY29tbW9uL2NvbW1vbi13ZWIuc2Nzc1wiO1xuXG4uZm9ybS1ncm91cHtcbiAgICBsYWJlbHtcbiAgICAgICAgZm9udC1zaXplOiAwLjllbTtcbiAgICAgICAgY29sb3I6ICM1NTU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAuM2VtO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cbn1cblxuLmJ0bi1yb3VuZHtcbiAgICBwYWRkaW5nOiAwLjJlbSAxZW07XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIG1hcmdpbjogMC4yZW07XG59XG5cbi5wcm9kdWN0LWltYWdle1xuICAgIC5jaGFuZ2UtYm94e1xuICAgICAgICBtYXgtd2lkdGg6IDIyMHB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGltZ3tcbiAgICAgICAgICAgIG1heC13aWR0aDogMjIwcHg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGJvcmRlcjogNnB0IHNvbGlkICNmN2Y3Zjc7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHQgMHB0IDJwdCAjZGFkYWRhO1xuICAgICAgICB9XG4gICAgICAgIC5jaGFuZ2V7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICAgICY6aG92ZXJ7XG4gICAgICAgICAgICAuY2hhbmdle1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDA5Njg4NDU7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTJlbTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgbGFiZWx7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC40ZW07XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMGE2YmI5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmJhc2ljLWluZm8tZm9vdGVye1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3JkZXItdG9wOiAxcHQgc29saWQgI2YzZjNmMztcbiAgICBwYWRkaW5nOiAwLjVlbSAwLjhlbTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJveC1zaGFkb3c6IDBwdCAtMnB0IDZwdCAjZTZlNmU2O1xuICAgIHotaW5kZXg6IDU7XG4gICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgICB3aWR0aDogODUuNSU7XG4gICAgbWFyZ2luLWxlZnQ6IDE0LjUlO1xufVxuXG4uY291bnQtaW5wdXQtYm94e1xuICAgIG1heC13aWR0aDogNjFweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAwLjVlbTtcbiAgICBmbG9hdDogcmlnaHQ7XG59XG5cbi5mb3JtLWN0cmx7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzNHB4O1xuICAgIHBhZGRpbmc6IDZweCAxMnB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMS40Mjg1NzE0MztcbiAgICBjb2xvcjogIzU1NTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cblxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdLCBsYWJlbHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIG1hcmdpbi1ib3R0b206IDAuMmVtICFpbXBvcnRhbnQ7XG59XG5cblxuLmJvcmRlci1idHtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG59XG5cbi5maWVsZC13cmFwcGVyLmRhdGVQaWNrZXJCb3g6YWZ0ZXJ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAyMHB4O1xuICAgIHRvcDogMjRweDtcbn1cblxuLnFJbmZvSWNvbiB7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDBweCAjY2NjIGluc2V0O1xuICAgIGNvbG9yOiAjODg4O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcbiAgICAmOmhvdmVyIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkaGVhZGVyLWJnO1xuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAwcHggJGhlYWRlci1iZyBpbnNldDtcbiAgICAgICAgY29sb3I6ICRoZWFkZXItYmc7XG4gICAgfVxufVxuXG4uYmxhY2stYmd7XG4gICAgYmFja2dyb3VuZDogcmdiYSgxMiwgMTEsIDExLCAwLjMpO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDBweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbGVmdDogMHB4O1xuICAgIHotaW5kZXg6IDY7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuZGF0ZVBpY2tlckJveCB7XG4gICAgLmZvcm0tY3RybCB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB6LWluZGV4OiAxO1xuICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAvLyBib3JkZXItcmlnaHQ6IDA7XG4gICAgICAvLyBoZWlnaHQ6IDM1cHg7XG4gICAgICBmb250OiA0MDAgMTJweCAnT3BlbiBzYW5zJyxzYW5zLXNlcmlmO1xuICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAmOmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2NhbGVuZGFyLnN2ZycpIG5vLXJlcGVhdDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IDgwJSAhaW1wb3J0YW50O1xuICAgICAgdG9wOiAyNXB4ICFpbXBvcnRhbnQ7XG4gICAgICB3aWR0aDogMjFweDtcbiAgICAgIGhlaWdodDogMjFweDtcbiAgICAgIHotaW5kZXg6IDA7XG4gICAgfVxuICB9XG5cbmlucHV0W3R5cGU9XCJ0ZXh0XCJdW2Rpc2FibGVkXXtcbiAgYmFja2dyb3VuZDogI2RkZGRkZCAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmNrLWVkaXRvcl9fZWRpdGFibGVfaW5saW5lIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgbWluLWhlaWdodDogMTAwcHg7XG59XG4uY2stZWRpdG9yX19lZGl0YWJsZXtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbn1cblxuXG4ucXVlc3Rpb25JbmZvIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRoZWlnaHQ6IDIwcHg7XG5cdHdpZHRoOiAyMHB4O1xuXHR6LWluZGV4OiAyO1xuXHQucUluZm9JY29uIHtcblx0XHRcdHdpZHRoOiAyMHB4O1xuXHRcdFx0aGVpZ2h0OiAyMHB4O1xuXHRcdFx0Ym9yZGVyOiAxcHggc29saWQgIHJnYmEoMCwwLDAsMC43KTtcblx0XHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0XHRcdGxpbmUtaGVpZ2h0OiAyMHB4O1xuXHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdGZvbnQtc2l6ZTogMTJweDtcblx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDBweCAgcmdiYSgwLDAsMCwwLjcpIGluc2V0O1xuXHRcdFx0Y29sb3I6ICM4ODg7XG5cdFx0XHR0cmFuc2l0aW9uOiBhbGwgMC42cyBsaW5lYXI7XG5cdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0XHRib3JkZXItY29sb3I6ICRoZWFkZXItYmc7XG5cdFx0XHRcdFx0Ym94LXNoYWRvdzogMHB4IDBweCAxcHggMHB4ICRoZWFkZXItYmcgaW5zZXQ7XG5cdFx0XHRcdFx0Y29sb3I6ICRoZWFkZXItYmc7XG5cdFx0XHR9XG5cdH1cbn1cblxuLnRvb2x0aXAtYm94LWZpZWxkIHtcblx0bWluLXdpZHRoOiAyMDBweDtcblx0bWF4LXdpZHRoOiAyMDBweDtcblx0b3ZlcmZsb3c6IHZpc2libGU7XG5cdGNvbG9yOiAjYjRiNmJkO1xuXHRiYWNrZ3JvdW5kOiAjMmUzMzQ1O1xuXHRmb250LXdlaWdodDogNDAwO1xuXHRmb250LXNpemU6IDEycHg7XG5cdHBhZGRpbmc6IDFlbTtcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xuXHRsaW5lLWhlaWdodDogMTRweDtcblx0Jjpob3Zlcntcblx0XHRiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDEpO1xuXHR9XG59XG5cbi50b29sdGlwLWJveC1maWVsZDphZnRlciB7XG5cdGNvbnRlbnQ6ICcnO1xuXHR3aWR0aDogMDtcblx0aGVpZ2h0OiAwO1xuXHRib3JkZXItcmlnaHQ6IDhweCBzb2xpZCAjMmUzMzQ1O1xuXHRib3JkZXItdG9wOiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XG5cdGJvcmRlci1ib3R0b206IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRsZWZ0OiAtN3B4O1xuXHR0b3A6IDRweDtcblx0Ym90dG9tOiAwO1xufVxuXG4uaW5mb21hdGlvbi1pY29ue1xuXHRjb2xvcjogJGhlYWRlci1iZztcblx0bWFyZ2luOiAwIDVweDtcblx0cGFkZGluZzogMnB4O1xuXHRmb250LXdlaWdodDogOTAwO1xufVxuIiwiQGltcG9ydCBcIi4vc3JjL2Fzc2V0cy9jc3MvY29tbW9uL3ZhcmlhYmxlcy5zY3NzXCI7XG4vKiogdGhlc2UgY3NzIGZvciBnZWFyIGljb24gZG93bmxvYWQgb3B0aW9uc1xuKiBjcmVhdGVkIGJ5IGxheG1pXG4qL1xuc3ZnOmhvdmVyICNnZWFySWNvbiB7XG4gIGZpbGw6ICMwMDg0ZjY7XG59XG5cbi5hc0hvdmVyOmhvdmVyIHtcbiAgY29sb3I6ICMwMDg0ZjYgIWltcG9ydGFudDtcbn1cblxuLmRvd25sb2FkOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubWFkZS1pbiB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5kcm9wZG93biB7XG4gICYgPiB1bCB7XG4gICAgYmFja2dyb3VuZDogJGJnLXdoaXRlO1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDsgLy8gd2lkdGg6IDIwMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICRoZWFkZXItYm9yZGVyO1xuICAgIGJvcmRlci10b3A6IDA7XG4gICAgbWFyZ2luLXRvcDogM3B4O1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA0cHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCA2cHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG5cbiAgICBsaSB7XG4gICAgICBjb2xvcjogIzMzMztcblxuICAgICAgc3Ryb25nIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG5cbiAgICAgIGEge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5sb2dpbi10dWJlIG5hdiA+IHVsID4gbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmxvZ2luLXR1YmUgbmF2ID4gdWwgPiBsaSA+IGEge1xuICBjb2xvcjogIzMzMztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRyYW5zaXRpb246IGFsbCAuNHM7XG59XG5cbi5sb2dpbi10dWJlIG5hdiA+IHVsID4gbGkgPiBhOmhvdmVyLFxuLmxvZ2luLXR1YmUgbmF2ID4gdWwgPiBsaTpob3ZlciA+IGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJhY2tncm91bmQ6ICNjY2M7XG59XG5cbi5sb2dpbi10dWJlIG5hdiA+IHVsID4gbGkgLmRyb3Bkb3duIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDEwMCU7XG4gIG1pbi13aWR0aDogMjAwcHg7XG4gIGJvcmRlci10b3A6IDA7XG4gIG9wYWNpdHk6IDA7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4xcyBjdWJpYy1iZXppZXIoLjU1LCAwLCAuNTUsIC4yKTtcbiAgdHJhbnNpdGlvbjogYWxsIC4xcyBjdWJpYy1iZXppZXIoLjU1LCAwLCAuNTUsIC4yKTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAuMjVzO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuMnM7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcblxuICAmID4gdWwge1xuICAgIGxpIHtcbiAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG5cbiAgICAgIGEge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWFyZ2luOiA1cHggMDtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBjb2xvcjogJGNvbW1vbi1ibHVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdWwge1xuICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG5cbiAgICAgIHVsIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5sb2dpbi10dWJlIG5hdiA+IHVsID4gbGk6aG92ZXIgLmRyb3Bkb3duIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvcGFjaXR5OiAxO1xuICByaWdodDogMDtcbiAgdG9wOiAxMDAlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuNHMgY3ViaWMtYmV6aWVyKC4yNSwgLjgsIC4yNSwgMSk7XG4gIHRyYW5zaXRpb246IGFsbCAuNHMgY3ViaWMtYmV6aWVyKC4yNSwgLjgsIC4yNSwgMSk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogLjVzO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuNXM7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG5cbi5wdWxsLXJpZ2h0IHtcbiAgLy8gbWFyZ2luLXRvcDogMjZweDtcbiAgLy8gbWFyZ2luLWxlZnQ6IDEyMnB4O1xufVxuXG4uc3Bhbi1idXR0b24ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDA4NGY2O1xuICBwYWRkaW5nOiA0cHggOHB4O1xuICBjb2xvcjogIzAwODRmNjtcbiAgZm9udC1zaXplOiAuOWVtO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICBzdmcge1xuICAgIG1hcmdpbjogLTNweCAwO1xuICAgIGhlaWdodDogMTRweDtcbiAgfVxufVxuXG5sb2dpbi1uYXYge1xuICAgICY+bGkge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHBhZGRpbmc6IDAgN3B4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbTtcbiAgICAgICAgLmRyb3Bkb3duIHtcbiAgICAgICAgICAgIC8vIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIHRvcDogMTAwJTtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgLmRyb3Bkb3duIHtcbiAgICAgICAgICAgICAgICAvLyBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5pY29ucyB7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuaWNvbnMge1xuICAgICAgICAgICAgd2lkdGg6IDM1cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDM1cHg7IC8vIGJvcmRlcjogMXB4IHNvbGlkICRib3JkZXItY29sb3I7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogM3B4O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMXM7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIHN2ZyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICAgICAgICAgICAgY29sb3I6IzAzNDk3OTtcblxuICAgICAgICAgICAgICAgIC5jbHMtMSB7XG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZTogIzAzNDk3OTtcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlLWxpbmVqb2luOiB1bnNldDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAudXNlci1pbmZvIHtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XG4gICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgJj4uaWNvbnMge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJj5zcGFuIHtcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICBmb250OiBub3JtYWwgbm9ybWFsIG5vcm1hbCAxNHB4LzEgRm9udEF3ZXNvbWU7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgICAgICAgICAgICAgIHRleHQtcmVuZGVyaW5nOiBhdXRvO1xuICAgICAgICAgICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXFxmMTA3XCI7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICByaWdodDogLTIwcHg7XG4gICAgICAgICAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4vKipcbiAgdGhpcyBjc3MgaXMgZm9yIHJlcG9ydCBzZWN0aW9uIGNzcyBmb3IgY2FyZHNcbiAgYWRkZWQgYnkgbGF4bWlcbiovXG4ucmVwb3J0LWJveCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHVsIHtcbiAgICAgICYuY2FyZC1ib3gge1xuICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgJi5jYXJkLXJvdyB7XG4gICAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgICAgJi5jYXJkIHtcbiAgICAgICAgICBwYWRkaW5nOiAxNXB4IDEwcHg7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VmZWZlZjtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgIGhlaWdodDogMTIwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgIG1hcmdpbjogMTBweCAwcHg7XG4gICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAycHggMHB4O1xuICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCA1cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgJjpudGgtY2hpbGQoMm4pe1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICB9XG4gICAgICB9XG4gIH1cbn1cblxuLmRpc2FibGVke1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICBiYWNrZ3JvdW5kOiBsaWdodGdyZXk7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/components/eStore-module/product-creation/basic-info/basic-info.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/eStore-module/product-creation/basic-info/basic-info.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: BasicInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicInfoComponent", function() { return BasicInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/@angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/authenticator.service */ "./src/app/services/authenticator.service.ts");
/* harmony import */ var _services_message_show_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/message-show.service */ "./src/app/services/message-show.service.ts");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/products.service */ "./src/app/services/products.service.ts");
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






let BasicInfoComponent = /** @class */ (() => {
    let BasicInfoComponent = class BasicInfoComponent {
        constructor(http, msgService, router, auth) {
            this.http = http;
            this.msgService = msgService;
            this.router = router;
            this.auth = auth;
            this.productItems = [];
            this.product_item_list = [];
            this.isAdvanceProductEdit = false;
            this.nextForm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.startForm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.toggleLoader = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.previewEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.ecourseList = [];
            this.products_ecourse_maps = [];
            this.itemStates = [];
            this.prodItems = {};
            this.advanceProductItems = {};
            this.moderatorSettings = {
                singleSelection: false,
                idField: 'course_type_id',
                textField: 'course_type',
                enableCheckAll: false
            };
            // prodForm = new product_details();
            this.prodForm = {
                entity_id: 0,
                title: '',
                exams: '',
                product_image: '',
                exam_ids: [],
                // product_group_id: null,
                is_duration: true,
                purchase_limit: 0,
                short_description: '',
                about: '',
                is_paid: true,
                is_advance_product: true,
                tag: null,
                price: 0,
                price_before_discount: 0,
                discount_percentage: 0,
                cateory: 0,
                itemStates: [],
                valid_from_date: moment__WEBPACK_IMPORTED_MODULE_1__().format('YYYY-MM-DD'),
                valid_to_date: '',
                sales_from_date: moment__WEBPACK_IMPORTED_MODULE_1__().format('YYYY-MM-DD'),
                sales_to_date: moment__WEBPACK_IMPORTED_MODULE_1__().format('YYYY-MM-DD'),
                start_timestamp: '',
                end_timestamp: '',
                status: 10,
                duration: 0,
                publish_date: null,
                product_user_type: "-1",
                country_id: "",
                product_item_stats: {
                    mock_test: 0,
                    online_exams: 0,
                    Classroom_Class: 0,
                    Online_Class: 0,
                    Offline_Material: 0,
                    Study_Material: 0,
                    Videos: 0,
                }
            };
            this.advanceProduct = {
                forStudent: true,
                forOpenUser: true
            };
            this.countryDetails = [];
            this.editorConf = {
                height: 150,
                menubar: false,
                branding: false,
                plugins: [
                    'preview anchor',
                    'visualblocks code ',
                    'insertdatetime  table paste code  wordcount'
                ],
                toolbar: 'undo redo | formatselect | bold italic backcolor | \
              alignleft aligncenter alignright alignjustify | \
              bullist numlist outdent indent'
            };
        }
        ngOnInit() {
            this.auth.showLoader();
            this.getProductItemsData();
            this.toggleLoader.emit(true);
            this.initDataEcourse();
            this.previewEvent.emit(this.prodForm);
            this.toggleLoader.emit(false);
            let temp = JSON.parse(sessionStorage.getItem('country_data'));
            console.log("temp", temp);
            this.fetchDataForCountryDetails();
        }
        fetchDataForCountryDetails() {
            let encryptedData = sessionStorage.getItem('country_data');
            let data = JSON.parse(encryptedData);
            if (data.length > 0) {
                this.countryDetails = data;
                let defacult_Country = this.countryDetails.filter((country) => {
                    return country.is_default == 'Y';
                });
                if (this.prodForm.country_id == "") {
                    this.prodForm.country_id = defacult_Country[0].id;
                }
            }
        }
        /** get product item details in  */
        getProductItemsData() {
            this.http.getMethod('master/item-type/get', null).subscribe((resp) => {
                let response = resp.result;
                if (resp.validate) {
                    this.productItems = response;
                    this.prodForm.product_item_stats = {};
                    this.productItems.forEach((element, index) => {
                        this.itemStates.push(element); // add states
                        this.prodForm.product_item_stats[element.slug] = 0;
                        this.prodItems[element.slug] = false;
                    });
                    if (this.entity_id && this.entity_id.length > 0) {
                        this.initForm();
                    }
                    else {
                        this.auth.hideLoader();
                    }
                }
                else {
                    this.msgService.showErrorMessage('error', response.errors.message, '');
                }
            }, (err) => {
                this.msgService.showErrorMessage('error', err['error'].errors.message, '');
            });
        }
        calc() {
            if (this.prodForm.discount_percentage < 0 || this.prodForm.discount_percentage > 100) {
                this.msgService.showErrorMessage('error', 'Discount should be greater than 0 and less than 100', '');
            }
            else {
                this.prodForm.price = Math.round(((this.prodForm.price_before_discount) - ((this.prodForm.price_before_discount * this.prodForm.discount_percentage) / 100)));
            }
        }
        initForm() {
            //Fetch Product Info
            this.auth.showLoader();
            this.http.getMethod('product/get/' + this.entity_id, null).subscribe((resp) => {
                this.auth.hideLoader();
                let response = resp.result;
                console.log("REsult", response);
                if (resp.validate) {
                    this.prodForm = response;
                    if (!(this.prodForm.tag === 'Featured' || this.prodForm.tag === 'Recommended' || this.prodForm.tag === 'Popular' || this.prodForm.tag === 'Others' || this.prodForm.tag == null)) {
                        this.others = this.prodForm.tag;
                        this.prodForm.tag = "Others";
                    }
                    this.prodForm.sales_from_date = moment__WEBPACK_IMPORTED_MODULE_1__(response.sales_from_date).format('YYYY-MM-DD');
                    this.prodForm.sales_to_date = moment__WEBPACK_IMPORTED_MODULE_1__(response.sales_to_date).format('YYYY-MM-DD');
                    this.prodForm.valid_from_date = moment__WEBPACK_IMPORTED_MODULE_1__(response.valid_from_date).format('YYYY-MM-DD');
                    this.prodForm.valid_to_date = moment__WEBPACK_IMPORTED_MODULE_1__(response.valid_to_date).format('YYYY-MM-DD');
                    this.prodForm.is_paid = this.prodForm.is_paid == 'Y' ? 0 : 1;
                    this.products_ecourse_maps = [];
                    this.prodForm.product_ecourse_maps.forEach((object) => {
                        let obj = { course_type: object.course_type, course_type_id: object.course_type_id };
                        this.products_ecourse_maps.push(obj);
                    });
                    this.prodForm.is_duration = this.prodForm.duration ? true : false;
                    if (this.prodForm.product_user_type == 8) {
                        this.advanceProduct.forStudent = true;
                        this.advanceProduct.forOpenUser = true;
                    }
                    else if (this.prodForm.product_user_type == 16) {
                        this.advanceProduct.forStudent = false;
                        this.advanceProduct.forOpenUser = false;
                    }
                    else if (this.prodForm.product_user_type == 2) {
                        this.advanceProduct.forStudent = true;
                        this.advanceProduct.forOpenUser = false;
                    }
                    else if (this.prodForm.product_user_type == 4) {
                        this.advanceProduct.forStudent = false;
                        this.advanceProduct.forOpenUser = true;
                    }
                    this.prodForm.is_advance_product = this.prodForm.is_advance_product ? true : false;
                    this.isAdvanceProductEdit = (this.prodForm.is_advance_product && this.prodForm.status == 30) ? true : false;
                    this.prodForm.product_item_stats = {};
                    this.advanceProductItems = {};
                    this.prodForm.product_items_types.forEach(element => {
                        this.itemStates.forEach((object) => {
                            if (object.entity_id == element.entity_id) {
                                this.prodItems[object.slug] = true;
                                this.advanceProductItems[object.slug] = true;
                                this.prodForm.product_item_stats[object.slug] = true;
                            }
                        });
                    });
                    this.updateProductItemStates(null, null);
                }
                else {
                    this.msgService.showErrorMessage('error', response.errors.message, '');
                }
            }, (err) => {
                this.auth.hideLoader();
                this.msgService.showErrorMessage('error', err['error'].errors.message, '');
            });
        }
        initDataEcourse() {
            this.http.getMethod('ext/get-ecources?isOnline=Y', null).subscribe((resp) => {
                let response = JSON.parse(resp.result);
                console.log(response);
                if (resp.validate) {
                    this.ecourseList = response;
                }
                else {
                    this.msgService.showErrorMessage('error', response.errors.message, '');
                }
            }, (err) => {
                // this.msgService.showErrorMessage('error', err['error'].errors.message, '');
            });
        }
        gotoBack() {
            this.router.navigateByUrl('/view/e-store/details');
        }
        // update parent state data
        updateProductItemStates(event, item) {
            if (item) {
                this.prodForm.product_item_stats[item.slug] = event ? 1 : 0;
            }
            // console.log(this.prodForm);
            this.previewEvent.emit(this.prodForm);
        }
        saveProduct() {
            if (this.prodForm.title == "" ||
                this.prodForm.title == null) {
                this.msgService.showErrorMessage('error', 'Please add product name', '');
                return;
            }
            if (this.prodForm.about == '') {
                this.msgService.showErrorMessage('error', 'Please add description', '');
                return;
            }
            if (this.prodForm.about.length > 10000) {
                this.msgService.showErrorMessage('error', 'allowed description limit is 10000 characters', '');
                return;
            }
            if (this.prodForm.country_id == 0) {
                this.msgService.showErrorMessage('error', 'Currency is mandatory', '');
                return;
            }
            if (this.prodForm.purchase_limit == 0) {
                this.msgService.showErrorMessage('error', 'product sell limit should be greater than zero', '');
                return;
            }
            if (this.products_ecourse_maps.length == 0) {
                this.msgService.showErrorMessage('error', 'please select at least one Ecourse', '');
                return;
            }
            if (this.prodForm.duration <= 0 && this.prodForm.is_duration) {
                this.msgService.showErrorMessage('error', 'please enter product duration ', '');
                return;
            }
            if ((moment__WEBPACK_IMPORTED_MODULE_1__(this.prodForm.sales_to_date).valueOf() <= moment__WEBPACK_IMPORTED_MODULE_1__(this.prodForm.sales_from_date).valueOf())) {
                this.msgService.showErrorMessage('error', 'sales from date cannot be prior to than sales to date', '');
                return;
            }
            if ((!this.prodForm.is_duration) &&
                (moment__WEBPACK_IMPORTED_MODULE_1__(this.prodForm.valid_from_date).valueOf() < moment__WEBPACK_IMPORTED_MODULE_1__(this.prodForm.sales_from_date).valueOf())) {
                this.msgService.showErrorMessage('error', 'Product visibility start date cannot be prior to sales start date', '');
                return;
            }
            if (this.prodForm.tag === "Others") {
                this.prodForm.tag = this.others;
            }
            let keys = Object.keys(this.prodItems);
            let notselectedItem = keys.filter(key => this.prodItems[key] == false);
            if (this.productItems.length == notselectedItem.length) {
                this.msgService.showErrorMessage('error', 'select at least one item ', '');
                return;
            }
            this.prodForm.is_paid = Math.round(((this.prodForm.price_before_discount) - ((this.prodForm.price_before_discount * this.prodForm.discount_percentage) / 100))) ? 'Y' : 'N';
            this.prodForm.price = Math.round(((this.prodForm.price_before_discount) - ((this.prodForm.price_before_discount * this.prodForm.discount_percentage) / 100))) ? Math.round(((this.prodForm.price_before_discount) - ((this.prodForm.price_before_discount * this.prodForm.discount_percentage) / 100))) : 0;
            this.productItems.forEach(element => {
                this.prodForm.product_item_stats[element.slug] = (this.prodItems[element.slug]) ? this.prodForm.product_item_stats[element.slug] : 0;
                if (this.prodForm.product_item_stats[element.slug]) {
                    let object = {
                        "entity_id": element.entity_id
                    };
                    this.product_item_list.push(object);
                }
            });
            if (!this.prodForm.is_duration) {
                this.prodForm.duration = 0;
                this.prodForm.valid_from_date = moment__WEBPACK_IMPORTED_MODULE_1__(this.prodForm.valid_from_date).format("YYYY-MM-DD");
                this.prodForm.valid_to_date = moment__WEBPACK_IMPORTED_MODULE_1__(this.prodForm.valid_to_date).format("YYYY-MM-DD");
            }
            else {
                this.prodForm.valid_from_date = null;
                this.prodForm.valid_to_date = null;
            }
            let productFor = 16;
            if (this.advanceProduct.forStudent && this.advanceProduct.forOpenUser) {
                productFor = 8;
            }
            else if (this.advanceProduct.forStudent) {
                productFor = 2;
            }
            else if (this.advanceProduct.forOpenUser) {
                productFor = 4;
            }
            this.prodForm.product_user_type = productFor;
            const is_advance_product = this.prodForm.is_advance_product ? 1 : 0;
            let object = {
                "entity_id": this.prodForm.entity_id,
                "title": this.prodForm.title,
                "institute_id": sessionStorage.getItem('institute_id'),
                "logo_url": this.prodForm.logo_url,
                "photo_url": this.prodForm.photo_url,
                "about": this.prodForm.about,
                "is_paid": this.prodForm.is_paid,
                "is_advance_product": is_advance_product,
                "price": this.prodForm.price,
                "valid_from_date": this.prodForm.valid_from_date,
                "valid_to_date": this.prodForm.valid_to_date,
                "duration": this.prodForm.duration,
                "sales_from_date": moment__WEBPACK_IMPORTED_MODULE_1__(this.prodForm.sales_from_date).format('YYYY-MM-DD'),
                "sales_to_date": moment__WEBPACK_IMPORTED_MODULE_1__(this.prodForm.sales_to_date).format('YYYY-MM-DD'),
                "purchase_limit": this.prodForm.purchase_limit,
                "start_index_for_total_prod_purchase": this.prodForm.start_index_for_total_prod_purchase,
                "status": this.prodForm.status,
                "product_ecourse_maps": this.products_ecourse_maps,
                "product_items_types": this.product_item_list,
                "product_user_type": this.prodForm.product_user_type,
                "publish_date": this.prodForm.publish_date,
                "discount_percentage": this.prodForm.discount_percentage,
                "price_before_discount": this.prodForm.price_before_discount,
                "tag": this.prodForm.tag,
                "country_id": this.prodForm.country_id
            };
            if (this.prodForm.entity_id == null || this.prodForm.entity_id == 0) {
                this.createProduct(object);
            }
            else {
                this.updateProduct(object);
            }
        }
        createProduct(object) {
            if (!this.auth.isRippleLoad.getValue()) {
                this.auth.showLoader();
                this.http.postMethod('product/create', object).then((resp) => {
                    this.auth.hideLoader();
                    let response = resp['body'];
                    if (response.validate) {
                        this.msgService.showErrorMessage('success', "product created successfully", '');
                        response.result.product = object;
                        this.startForm.emit(response.result);
                        this.nextForm.emit();
                    }
                    else {
                        this.msgService.showErrorMessage('error', resp.body.error[0].error_message, '');
                    }
                }, (err) => {
                    this.auth.hideLoader();
                    this.msgService.showErrorMessage('error', err.error.error[0].error_message, '');
                });
            }
        }
        updateProduct(object) {
            if (!this.auth.isRippleLoad.getValue()) {
                let body = JSON.parse(JSON.stringify(object));
                this.auth.showLoader();
                this.http.postMethod('product/update', body).then((resp) => {
                    this.auth.hideLoader();
                    let data = resp['body'];
                    if (data.validate) {
                        this.msgService.showErrorMessage('success', "Product updated successfully !", '');
                        this.nextForm.emit();
                    }
                    else {
                        this.msgService.showErrorMessage('error', resp.body.error[0].error_message, '');
                    }
                }, (err) => {
                    this.auth.hideLoader();
                    this.msgService.showErrorMessage('error', err.error.error[0].error_message, '');
                    this.prodForm.is_paid = this.prodForm.is_paid == 'Y' ? 0 : 1;
                });
            }
        }
        convertUTCDateToLocalDate(date_s) {
            // var date =new Date(date_s)
            // var newDate = new Date(date.getTime()+date.getTimezoneOffset()*60*1000);
            // var offset = date.getTimezoneOffset() / 60;
            // var hours = date.getHours();
            // newDate.setHours(hours - offset);
            return moment__WEBPACK_IMPORTED_MODULE_1__(date_s).format('YYYY-MM-DD');
        }
        calc_days() {
            // this.prodForm.valid_from_date = moment(this.prodForm.sales_from_date).format('YYYY-MM-DD');
            // this.prodForm.valid_to_date = moment(this.prodForm.sales_from_date).add(this.prodForm.duration, 'd').format('YYYY-MM-DD');
            return (this.prodForm.valid_from_date != '' && this.prodForm.valid_to_date != '') ? Math.ceil(Math.abs((new Date(this.prodForm.valid_to_date).getTime()) - (new Date(this.prodForm.valid_from_date).getTime())) / (1000 * 3600 * 24)) : 'NA';
        }
    };
    BasicInfoComponent.ctorParameters = () => [
        { type: _services_products_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"] },
        { type: _services_message_show_service__WEBPACK_IMPORTED_MODULE_4__["MessageShowService"] },
        { type: _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"] }
    ];
    BasicInfoComponent.propDecorators = {
        entity_id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        product_item_stats: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        nextForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        startForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        toggleLoader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        previewEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    BasicInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-basic-info',
            template: __importDefault(__webpack_require__(/*! raw-loader!./basic-info.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/eStore-module/product-creation/basic-info/basic-info.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./basic-info.component.scss */ "./src/app/components/eStore-module/product-creation/basic-info/basic-info.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_services_products_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"],
            _services_message_show_service__WEBPACK_IMPORTED_MODULE_4__["MessageShowService"],
            _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"]])
    ], BasicInfoComponent);
    return BasicInfoComponent;
})();



/***/ }),

/***/ "./src/app/components/eStore-module/product-creation/classroom-class/classroom-class.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/components/eStore-module/product-creation/classroom-class/classroom-class.component.scss ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".basic-info-footer {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  border-top: 1pt solid #f3f3f3;\n  padding: 0.5em 0.8em;\n  background: #fff;\n  box-shadow: 0pt -2pt 6pt #e6e6e6;\n  z-index: 5;\n  background: #fafafa;\n  width: 85.5%;\n  margin-left: 14.5%;\n}\n\n.btn-round {\n  padding: 0.2em 1em;\n  border-radius: 4px;\n  margin: 0.2em;\n}\n\n.black-bg {\n  background: rgba(12, 11, 11, 0.3);\n  position: fixed;\n  top: 0px;\n  height: 100%;\n  left: 0px;\n  z-index: 6;\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lU3RvcmUtbW9kdWxlL3Byb2R1Y3QtY3JlYXRpb24vY2xhc3Nyb29tLWNsYXNzL2NsYXNzcm9vbS1jbGFzcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQWU7RUFDZixTQUFTO0VBQ1QsT0FBTztFQUNQLFFBQVE7RUFDUiw2QkFBNkI7RUFDN0Isb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixnQ0FBZ0M7RUFDaEMsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0VBQ0ksa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2pCOztBQUVBO0VBQ0ksaUNBQWlDO0VBQ2pDLGVBQWU7RUFDZixRQUFRO0VBQ1IsWUFBWTtFQUNaLFNBQVM7RUFDVCxVQUFVO0VBQ1YsV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9lU3RvcmUtbW9kdWxlL3Byb2R1Y3QtY3JlYXRpb24vY2xhc3Nyb29tLWNsYXNzL2NsYXNzcm9vbS1jbGFzcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYXNpYy1pbmZvLWZvb3RlcntcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm9yZGVyLXRvcDogMXB0IHNvbGlkICNmM2YzZjM7XG4gICAgcGFkZGluZzogMC41ZW0gMC44ZW07XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3gtc2hhZG93OiAwcHQgLTJwdCA2cHQgI2U2ZTZlNjtcbiAgICB6LWluZGV4OiA1O1xuICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XG4gICAgd2lkdGg6IDg1LjUlO1xuICAgIG1hcmdpbi1sZWZ0OiAxNC41JTtcbn1cblxuLmJ0bi1yb3VuZHtcbiAgICBwYWRkaW5nOiAwLjJlbSAxZW07XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIG1hcmdpbjogMC4yZW07XG59XG5cbi5ibGFjay1iZ3tcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDEyLCAxMSwgMTEsIDAuMyk7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBsZWZ0OiAwcHg7XG4gICAgei1pbmRleDogNjtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuIl19 */");

/***/ }),

/***/ "./src/app/components/eStore-module/product-creation/classroom-class/classroom-class.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/components/eStore-module/product-creation/classroom-class/classroom-class.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: ClassroomClassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassroomClassComponent", function() { return ClassroomClassComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/authenticator.service */ "./src/app/services/authenticator.service.ts");
/* harmony import */ var _services_message_show_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/message-show.service */ "./src/app/services/message-show.service.ts");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/products.service */ "./src/app/services/products.service.ts");
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





let ClassroomClassComponent = /** @class */ (() => {
    let ClassroomClassComponent = class ClassroomClassComponent {
        constructor(http, msgService, auth, router) {
            this.http = http;
            this.msgService = msgService;
            this.auth = auth;
            this.router = router;
            this.nextForm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.startForm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.toggleLoader = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.previewEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.description = '';
            this.selectAll = false;
            this.editorConf = {
                height: 150,
                menubar: false,
                branding: false,
                plugins: [
                    'preview anchor',
                    'visualblocks code ',
                    'insertdatetime  table paste code  wordcount'
                ],
                toolbar: 'undo redo | formatselect | bold italic backcolor | \
              alignleft aligncenter alignright alignjustify | \
              bullist numlist outdent indent'
            };
        }
        ngOnInit() {
            this.initForm();
        }
        initForm() {
            //Fetch Product Groups List
            if (this.entity_id && this.entity_id.length > 0) {
                //Fetch Product Info
                this.auth.showLoader();
                this.http.getMethod('product/get/' + this.entity_id, null).subscribe((resp) => {
                    this.auth.hideLoader();
                    let response = resp.result;
                    if (resp.validate) {
                        this.prodForm = response;
                        this.prodForm.product_item_stats = {};
                        this.description = response.page_description['Classroom_Class'];
                        this.prodForm.product_items_types.forEach(element => {
                            this.prodForm.product_item_stats[element.slug] = true;
                        });
                        this.updateProductItemStates(null, null);
                    }
                    else {
                        this.msgService.showErrorMessage('error', response.errors.message, '');
                    }
                }, (err) => {
                    this.auth.hideLoader();
                    this.msgService.showErrorMessage('error', err['error'].errors.message, '');
                });
            }
        }
        // update parent state data
        updateProductItemStates(event, item) {
            if (item) {
                this.prodForm.product_item_stats[item.slug] = event ? 1 : 0;
            }
            // console.log(this.prodForm);
            this.previewEvent.emit(this.prodForm);
        }
        gotoBack() {
            this.router.navigateByUrl('/view/e-store/details');
        }
        gotoNext() {
            if (this.description == undefined || this.description == '') {
                this.msgService.showErrorMessage('error', 'Please add description', '');
                return;
            }
            if (this.description.length > 5000) {
                this.msgService.showErrorMessage('error', 'allowed description limit is 5000 characters', '');
                return;
            }
            if ((!this.auth.isRippleLoad.getValue())) {
                //update test List
                let obj = {
                    "page_type": "Classroom_Class",
                    "item_list": [],
                    "description": this.description,
                    "is_paid": this.prodForm.is_paid
                };
                this.auth.showLoader();
                this.http.postMethod('product-item/update/' + this.entity_id, obj).then((resp) => {
                    this.auth.hideLoader();
                    let response = resp['body'];
                    if (response.validate) {
                        let details = response.result;
                        this.prodForm.product_item_list = details;
                        this.msgService.showErrorMessage('success', "Product updated successfully !", '');
                        this.nextForm.emit();
                    }
                    else {
                        response.error && this.msgService.showErrorMessage('error', response.error[0].error_message, '');
                    }
                }, (err) => {
                    this.auth.hideLoader();
                    this.msgService.showErrorMessage('error', 'There is some problem in processing your request.Please try after some time.Or contact us at support@proctur.com for further assistance. ', '');
                });
            }
        }
    };
    ClassroomClassComponent.ctorParameters = () => [
        { type: _services_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] },
        { type: _services_message_show_service__WEBPACK_IMPORTED_MODULE_3__["MessageShowService"] },
        { type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticatorService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ];
    ClassroomClassComponent.propDecorators = {
        entity_id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        prodForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        nextForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        startForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        toggleLoader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        previewEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    ClassroomClassComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-classroom-class',
            template: __importDefault(__webpack_require__(/*! raw-loader!./classroom-class.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/eStore-module/product-creation/classroom-class/classroom-class.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./classroom-class.component.scss */ "./src/app/components/eStore-module/product-creation/classroom-class/classroom-class.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_services_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"],
            _services_message_show_service__WEBPACK_IMPORTED_MODULE_3__["MessageShowService"],
            _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticatorService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ClassroomClassComponent);
    return ClassroomClassComponent;
})();



/***/ }),

/***/ "./src/app/components/eStore-module/product-creation/mock-test/mock-test.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/eStore-module/product-creation/mock-test/mock-test.component.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".basic-info-footer {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  border-top: 1pt solid #f3f3f3;\n  padding: 0.5em 0.8em;\n  background: #fff;\n  box-shadow: 0pt -2pt 6pt #e6e6e6;\n  z-index: 5;\n  background: #fafafa;\n  width: 85.5%;\n  margin-left: 14.5%;\n}\n\n.basic-info-footer .btn-round {\n  padding: 0.2em 1em;\n  border-radius: 4px;\n  margin: 0.2em;\n}\n\n.iconSize {\n  font-size: 16px;\n  padding-top: 4px;\n}\n\n.labelSize {\n  font-weight: bold;\n  font-size: 15px;\n}\n\n.row {\n  margin-left: 0px;\n  margin-right: 0px;\n}\n\n.product-list-wrapper {\n  padding: 1em;\n}\n\n.product-table .product-table-head {\n  background: #fff;\n}\n\n.product-table .product-table-head tr {\n  border: 0;\n  cursor: default;\n  border: none;\n}\n\n.product-table .product-table-head tr th {\n  border: 0;\n  color: #999;\n  font-weight: normal;\n  border-top: 0;\n  padding: 8px;\n}\n\n.table-wrapper {\n  padding: 0.2em !important;\n  border: 1pt solid #f1f1f1;\n  box-shadow: 0pt 0pt 4pt #eee;\n}\n\n.table > tr, .table > tbody > tr > td, .table > tbody > tr > th, .table > tfoot > tr > td, .table > tfoot > tr > th, .table > thead > tr > td, .table > thead > tr > th {\n  padding-left: 0;\n  padding-right: 0;\n  padding-bottom: 8px;\n  padding-top: 8px;\n  font-size: 12px;\n}\n\ntable tr {\n  border-left: 0;\n  border-right: 0;\n}\n\n.field-checkbox-wrapper {\n  margin-bottom: 0px;\n}\n\n.black-bg {\n  background: rgba(12, 11, 11, 0.3);\n  position: fixed;\n  top: 0px;\n  height: 100%;\n  left: 0px;\n  z-index: 6;\n  width: 100%;\n}\n\n.filter_div {\n  padding: 1rem;\n  border-radius: 4px;\n}\n\n.field-wrapper {\n  margin-left: 20px;\n  padding-top: 0;\n  display: inline-block;\n}\n\n.dropdown-div {\n  width: 160px;\n}\n\n.dropdown-div .dropdown {\n  width: 100%;\n  height: 30px;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lU3RvcmUtbW9kdWxlL3Byb2R1Y3QtY3JlYXRpb24vbW9jay10ZXN0L21vY2stdGVzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQWU7RUFDZixTQUFTO0VBQ1QsT0FBTztFQUNQLFFBQVE7RUFDUiw2QkFBNkI7RUFDN0Isb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixnQ0FBZ0M7RUFDaEMsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osa0JBQWtCO0FBQ3RCOztBQWJBO0VBY1Esa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixhQUFhO0FBR3JCOztBQUFBO0VBQ0UsZUFBZTtFQUNiLGdCQUFnQjtBQUdwQjs7QUFEQTtFQUNFLGlCQUFpQjtFQUNmLGVBQWU7QUFJbkI7O0FBRkE7RUFDSSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBS3JCOztBQUZBO0VBQ0ksWUFBWTtBQUtoQjs7QUFIRTtFQUVJLGdCQUFnQjtBQUt0Qjs7QUFQRTtFQUtNLFNBQVM7RUFDVCxlQUFlO0VBQ2YsWUFBWTtBQU1wQjs7QUFiRTtFQVVRLFNBQVM7RUFDVCxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixZQUFZO0FBT3RCOztBQURFO0VBQ0UseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUV6Qiw0QkFBNEI7QUFJaEM7O0FBRkU7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsZUFBZTtBQUtuQjs7QUFGRTtFQUNFLGNBQWE7RUFDYixlQUFjO0FBS2xCOztBQUZFO0VBQ0Usa0JBQWtCO0FBS3RCOztBQUZFO0VBQ0UsaUNBQWlDO0VBQ2pDLGVBQWU7RUFDZixRQUFRO0VBQ1IsWUFBWTtFQUNaLFNBQVM7RUFDVCxVQUFVO0VBQ1YsV0FBVztBQUtmOztBQUhFO0VBRUUsYUFBYTtFQUNiLGtCQUFrQjtBQUt0Qjs7QUFIRTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QscUJBQXFCO0FBTXpCOztBQUpFO0VBQ0UsWUFBWTtBQU9oQjs7QUFSRTtFQUdJLFdBQVc7RUFDWCxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQVN4QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZVN0b3JlLW1vZHVsZS9wcm9kdWN0LWNyZWF0aW9uL21vY2stdGVzdC9tb2NrLXRlc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFzaWMtaW5mby1mb290ZXJ7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvcmRlci10b3A6IDFwdCBzb2xpZCAjZjNmM2YzO1xuICAgIHBhZGRpbmc6IDAuNWVtIDAuOGVtO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm94LXNoYWRvdzogMHB0IC0ycHQgNnB0ICNlNmU2ZTY7XG4gICAgei1pbmRleDogNTtcbiAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xuICAgIHdpZHRoOiA4NS41JTtcbiAgICBtYXJnaW4tbGVmdDogMTQuNSU7XG4gICAgLmJ0bi1yb3VuZHtcbiAgICAgICAgcGFkZGluZzogMC4yZW0gMWVtO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIG1hcmdpbjogMC4yZW07XG4gICAgfVxufVxuLmljb25TaXple1xuICBmb250LXNpemU6IDE2cHg7XG4gICAgcGFkZGluZy10b3A6IDRweDtcbn1cbi5sYWJlbFNpemV7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbn1cbi5yb3cge1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG59XG5cbi5wcm9kdWN0LWxpc3Qtd3JhcHBlciB7XG4gICAgcGFkZGluZzogMWVtO1xuICB9XG4gIC5wcm9kdWN0LXRhYmxlIHtcbiAgICAucHJvZHVjdC10YWJsZS1oZWFkIHtcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG5cbiAgICAgIHRyIHtcbiAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcblxuICAgICAgICB0aCB7XG4gICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgIGNvbG9yOiAjOTk5O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgYm9yZGVyLXRvcDogMDtcbiAgICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAudGFibGUtd3JhcHBlcntcbiAgICBwYWRkaW5nOiAwLjJlbSAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMXB0IHNvbGlkICNmMWYxZjE7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHQgMHB0IDRwdCAjZWVlO1xuICAgIGJveC1zaGFkb3c6IDBwdCAwcHQgNHB0ICNlZWU7XG4gIH1cbiAgLnRhYmxlPnRyLCAudGFibGU+dGJvZHk+dHI+dGQsIC50YWJsZT50Ym9keT50cj50aCwgLnRhYmxlPnRmb290PnRyPnRkLCAudGFibGU+dGZvb3Q+dHI+dGgsIC50YWJsZT50aGVhZD50cj50ZCwgLnRhYmxlPnRoZWFkPnRyPnRoe1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XG4gICAgcGFkZGluZy10b3A6IDhweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cblxuICB0YWJsZSB0cntcbiAgICBib3JkZXItbGVmdDowO1xuICAgIGJvcmRlci1yaWdodDowO1xuICB9XG5cbiAgLmZpZWxkLWNoZWNrYm94LXdyYXBwZXJ7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICB9XG5cbiAgLmJsYWNrLWJne1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMTIsIDExLCAxMSwgMC4zKTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwcHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGxlZnQ6IDBweDtcbiAgICB6LWluZGV4OiA2O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5maWx0ZXJfZGl2IHtcbiAgICAvLyBiYWNrZ3JvdW5kOiAjZGRkO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB9XG4gIC5maWVsZC13cmFwcGVyIHtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBwYWRkaW5nLXRvcDogMDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cbiAgLmRyb3Bkb3duLWRpdiB7XG4gICAgd2lkdGg6IDE2MHB4O1xuICAgIC5kcm9wZG93biB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMzBweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgfVxuICB9Il19 */");

/***/ }),

/***/ "./src/app/components/eStore-module/product-creation/mock-test/mock-test.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/components/eStore-module/product-creation/mock-test/mock-test.component.ts ***!
  \********************************************************************************************/
/*! exports provided: MockTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockTestComponent", function() { return MockTestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/@angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/authenticator.service */ "./src/app/services/authenticator.service.ts");
/* harmony import */ var _services_message_show_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/message-show.service */ "./src/app/services/message-show.service.ts");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/products.service */ "./src/app/services/products.service.ts");
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







let MockTestComponent = /** @class */ (() => {
    let MockTestComponent = class MockTestComponent {
        constructor(http, msgService, router, auth, _httpService) {
            this.http = http;
            this.msgService = msgService;
            this.router = router;
            this.auth = auth;
            this._httpService = _httpService;
            this.nextForm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.startForm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.toggleLoader = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.previewEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.testlist = [];
            this.selectAll = false;
            this.isAdvanceProductEdit = false;
            this.description = '';
            this.product_ecourse_maps = [];
            this.standardData = [];
            this.subjectData = [];
            this.filteredTestList = [];
            this.filterData = {
                standard_id: -1,
                subject_id: -1
            };
            this.editorConf = {
                height: 150,
                menubar: false,
                branding: false,
                plugins: [
                    'preview anchor',
                    'visualblocks code ',
                    'insertdatetime  table paste code  wordcount'
                ],
                toolbar: 'undo redo | formatselect | bold italic backcolor | \
              alignleft aligncenter alignright alignjustify | \
              bullist numlist outdent indent'
            };
        }
        ngOnInit() {
            console.log(this.prodForm);
            this.initForm();
            this.getAllStandards();
        }
        expandEcourse(ecourse) {
            ecourse.isExpand = !ecourse.isExpand;
            if (ecourse.isExpand && ecourse.testlist.length == 0) {
                this.initMockTests(ecourse);
            }
        }
        selectAllDetails($event) {
            this.testlist.forEach(element => { element.isChecked = $event; });
        }
        selectVlaue($event, test) {
            // this.selectAll = false;
            // let array = this.testlist.filter(element => element.isChecked == true);
            // if (array.length == this.testlist.length) {
            //   this.selectAll = true;
            // }
            console.log($event, test);
        }
        initMockTests(ecourse) {
            //Fetch Product Groups List
            //{course_type: "KAS Prelims", course_type_id: 145}
            if (!this.auth.isRippleLoad.getValue()) {
                this.auth.showLoader();
                this.http.postMethod('ext/get-examdesk/' + ecourse.course_type, ["Mock_Test"]).then((resp) => {
                    this.auth.hideLoader();
                    let response = resp['body'];
                    if (response.validate) {
                        let details = JSON.parse(response.result['Mock_Test']);
                        ecourse.testlist = details.data;
                        // this.selectAllDetails(false);
                        if (ecourse.testlist.length && this.prodForm.product_item_list.length) {
                            this.prodForm.product_item_list.forEach((obj) => {
                                ecourse.testlist.forEach((test) => {
                                    if (test.test_id == obj.source_item_id &&
                                        obj.course_type_id == ecourse.course_type_id
                                        && obj.slug == "Mock_Test") {
                                        test.isChecked = true;
                                        test.is_existed_checked = (test.isChecked && this.isAdvanceProductEdit) ? true : false;
                                    }
                                });
                            });
                        }
                    }
                    else {
                        this.msgService.showErrorMessage('error', response.errors.message, '');
                    }
                }, (err) => {
                    this.auth.hideLoader();
                    this.msgService.showErrorMessage('error', err['error'].errors.message, '');
                });
            }
        }
        initForm() {
            //Fetch Product Groups List
            if (this.entity_id && this.entity_id.length > 0 && (!this.auth.isRippleLoad.getValue())) {
                // Fetch Product Info
                this.auth.showLoader();
                this.http.getMethod('product/get/' + this.entity_id, null).subscribe((resp) => {
                    this.auth.hideLoader();
                    let response = resp.result;
                    if (resp.validate) {
                        let productData = response;
                        this.prodForm = response;
                        console.log(response);
                        this.description = response.page_description['Mock_Test'];
                        this.product_ecourse_maps = response.product_ecourse_maps;
                        this.product_ecourse_maps.forEach((course) => {
                            course.isExpand = false;
                            course.testlist = [];
                        });
                        this.prodForm.product_item_stats = {};
                        // if (productData.product_item_list && productData.product_item_list.length) {
                        //   productData.product_item_list.forEach((object) => {
                        //     if (object.slug == 'Mock_Test') {
                        //       this.testlist.push(object);
                        //     }
                        //   });
                        // }
                        this.prodForm && this.prodForm.product_items_types && this.prodForm.product_items_types.forEach(element => {
                            this.prodForm.product_item_stats[element.slug] = true;
                        });
                        this.isAdvanceProductEdit = (this.prodForm.is_advance_product && this.prodForm.status == 30) ? true : false;
                        this.updateProductItemStates(null, null);
                        this.getTestIdByProduct();
                    }
                    else {
                        this.msgService.showErrorMessage('error', response.errors.message, '');
                    }
                }, (err) => {
                    this.auth.hideLoader();
                    this.msgService.showErrorMessage('error', err['error'].errors.message, '');
                });
            }
        }
        getTestIdByProduct() {
            this.auth.showLoader();
            const url = `user-product/get-product-test-details/Mock_Test/${this.entity_id}`;
            this.http.getMethod(url, null).subscribe((resp) => {
                this.auth.hideLoader();
                let response = resp;
                if (resp.validate) {
                    let productData = response;
                    this.testlist = [];
                    console.log(productData);
                    // this.prodForm.product_item_stats = {};
                    if (productData.data && productData.data.length) {
                        productData.data.forEach((object) => {
                            // if (object.slug == 'Mock_Test') {
                            object.isChecked = true;
                            object.is_existed_checked = (object.isChecked && this.isAdvanceProductEdit) ? true : false;
                            this.testlist.push(object);
                            // }
                        });
                        console.log(this.testlist);
                    }
                }
                else {
                    this.msgService.showErrorMessage('error', response.errors.message, '');
                }
            }, (err) => {
                this.auth.hideLoader();
                this.msgService.showErrorMessage('error', err['error'].errors.message, '');
            });
        }
        getAllStandards() {
            let url = "/api/v1/standards/standard-subject-list/" + sessionStorage.getItem('institute_id') + "?is_active=Y" + '&is_subject_required=true';
            this.auth.showLoader();
            this._httpService.getData(url).subscribe((data) => {
                this.auth.hideLoader();
                this.standardData = data.result;
                // console.log(data);
            }, (error) => {
                this.auth.hideLoader();
                console.log(error);
            });
        }
        getAllSubjectListFromServer(standards_id) {
            this.subjectData = [];
            this.filterData.subject_id = -1;
            for (let i = 0; i < this.standardData.length; i++) {
                if (this.standardData[i].standard_id == this.filterData.standard_id) {
                    this.subjectData = this.standardData[i].subject_list;
                }
            }
        }
        fetchTestByStd() {
            if (this.filterData.standard_id != -1) {
                this.auth.showLoader();
                let url = `/ext/get-examdesk-test/Mock_Test?standard_id=${this.filterData.standard_id}`;
                if (this.filterData.subject_id != -1) {
                    url = url + `&subject_id=${this.filterData.subject_id}`;
                }
                this.http.getMethod(url, null).subscribe((resp) => {
                    this.auth.hideLoader();
                    let response = resp;
                    console.log(response);
                    if (resp.validate) {
                        this.filteredTestList = response.data;
                        for (let i = 0; i < this.filteredTestList.length; i++) {
                            this.filteredTestList[i].disabled = false;
                            for (let j = 0; j < this.testlist.length; j++) {
                                if (this.filteredTestList[i].test_id == this.testlist[j].test_id) {
                                    this.filteredTestList[i].disabled = true;
                                }
                            }
                        }
                        if (!this.filteredTestList.length) {
                            this.msgService.showErrorMessage('info', '', 'No Data Found');
                        }
                    }
                    else {
                        this.msgService.showErrorMessage('error', response.errors.message, '');
                    }
                }, (err) => {
                    this.auth.hideLoader();
                    this.msgService.showErrorMessage('error', err['error'].errors.message, '');
                });
            }
            else {
                this.msgService.showErrorMessage('error', '', 'Please select Standard');
            }
        }
        // update parent state data
        updateProductItemStates(event, item) {
            if (item) {
                this.prodForm.product_item_stats[item.slug] = event ? 1 : 0;
            }
            // console.log(this.prodForm);
            this.previewEvent.emit(this.prodForm);
        }
        getTime(date) {
            let milisec = date * 1000;
            return moment__WEBPACK_IMPORTED_MODULE_1__(new Date(milisec)).format('h:mm');
        }
        getDate(date) {
            let milisec = date * 1000;
            return moment__WEBPACK_IMPORTED_MODULE_1__(new Date(milisec)).format('DD MMM YYYY');
        }
        gotoBack() {
            this.router.navigateByUrl('/view/e-store/details');
        }
        gotoNext() {
            if (this.description == undefined || this.description == '') {
                this.msgService.showErrorMessage('error', 'Please add description', '');
                return;
            }
            if (this.description.length > 5000) {
                this.msgService.showErrorMessage('error', 'allowed description limit is 5000 characters', '');
                return;
            }
            let objectArray = [];
            this.prodForm.product_item_list && this.prodForm.product_item_list.forEach((object) => {
                if (object.slug != 'Mock_Test') {
                    objectArray.push(object);
                }
            });
            // this.product_ecourse_maps.forEach(course => {
            this.testlist.forEach(element => {
                if (element.isChecked) {
                    let object = {
                        "source_item_id": element.test_id,
                        "source_subject_id": "",
                        "course_type_id": '',
                        "parent_topic_id": "",
                        "slug": "Mock_Test",
                        "category_id": 0
                    };
                    objectArray.push(object);
                }
            });
            console.log(this.filteredTestList);
            this.filteredTestList.forEach(element => {
                if (element.isChecked) {
                    let object = {
                        "source_item_id": element.test_id,
                        "source_subject_id": "",
                        "course_type_id": '',
                        "parent_topic_id": "",
                        "slug": "Mock_Test",
                        "category_id": 0
                    };
                    objectArray.push(object);
                }
            });
            // });
            if (objectArray.length == 0) {
                objectArray = this.testlist;
            }
            else {
                this.testlist.forEach((linkedtest) => {
                    let isAdded = false;
                    for (let i = 0; i < objectArray.length; i++) {
                        if (linkedtest.source_item_id == objectArray[i].source_item_id) {
                            isAdded = true;
                            break;
                        }
                    }
                    if (!isAdded) {
                        objectArray.push(linkedtest);
                    }
                });
            }
            {
                if ((!this.auth.isRippleLoad.getValue())) {
                    //update test List
                    let obj = {
                        "page_type": "Mock_Test",
                        "status": this.prodForm.status,
                        "is_advance_product": this.prodForm.is_advance_product,
                        "item_list": objectArray,
                        "description": this.description,
                        "is_paid": this.prodForm.is_paid
                    };
                    this.auth.showLoader();
                    this.http.postMethod('product-item/update/' + this.entity_id, obj).then((resp) => {
                        this.auth.hideLoader();
                        let response = resp['body'];
                        if (response.validate) {
                            let details = response.result;
                            this.prodForm.product_item_list = details;
                            console.log(this.prodForm);
                            this.msgService.showErrorMessage('success', "Product updated successfully !", '');
                            this.nextForm.emit();
                        }
                        else {
                            this.msgService.showErrorMessage('error', response.error[0].error_message, '');
                        }
                    }, (err) => {
                        this.auth.hideLoader();
                        this.msgService.showErrorMessage('error', err['error'].errors.message, '');
                    });
                }
                else {
                    this.msgService.showErrorMessage('error', " select at least one Mock Test", '');
                    return;
                }
            }
        }
    };
    MockTestComponent.ctorParameters = () => [
        { type: _services_products_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"] },
        { type: _services_message_show_service__WEBPACK_IMPORTED_MODULE_5__["MessageShowService"] },
        { type: _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticatorService"] },
        { type: _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }
    ];
    MockTestComponent.propDecorators = {
        entity_id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        prodForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        nextForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        startForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        toggleLoader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        previewEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    MockTestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mock-test',
            template: __importDefault(__webpack_require__(/*! raw-loader!./mock-test.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/eStore-module/product-creation/mock-test/mock-test.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./mock-test.component.scss */ "./src/app/components/eStore-module/product-creation/mock-test/mock-test.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_services_products_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"],
            _services_message_show_service__WEBPACK_IMPORTED_MODULE_5__["MessageShowService"],
            _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_authenticator_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticatorService"],
            _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], MockTestComponent);
    return MockTestComponent;
})();



/***/ }),

/***/ "./src/app/components/eStore-module/product-creation/offline-material/offline-material.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/components/eStore-module/product-creation/offline-material/offline-material.component.scss ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".basic-info-footer {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  border-top: 1pt solid #f3f3f3;\n  padding: 0.5em 0.8em;\n  background: #fff;\n  box-shadow: 0pt -2pt 6pt #e6e6e6;\n  z-index: 5;\n  background: #fafafa;\n  width: 85.5%;\n  margin-left: 14.5%;\n}\n\n.basic-info-footer .btn-round {\n  padding: 0.2em 1em;\n  border-radius: 4px;\n  margin: 0.2em;\n}\n\n.row {\n  margin-left: 0px;\n  margin-right: 0px;\n}\n\n.product-list-wrapper {\n  padding: 1em;\n}\n\n.product-table .product-table-head {\n  background: #fff;\n}\n\n.product-table .product-table-head tr {\n  border: 0;\n  cursor: default;\n  border: none;\n}\n\n.product-table .product-table-head tr th {\n  border: 0;\n  color: #999;\n  font-weight: normal;\n  border-top: 0;\n  padding: 8px;\n}\n\n.table-wrapper {\n  padding: 0.2em !important;\n  border: 1pt solid #f1f1f1;\n  box-shadow: 0pt 0pt 4pt #eee;\n}\n\n.table > tr, .table > tbody > tr > td, .table > tbody > tr > th, .table > tfoot > tr > td, .table > tfoot > tr > th, .table > thead > tr > td, .table > thead > tr > th {\n  padding-left: 0;\n  padding-right: 0;\n  padding-bottom: 8px;\n  padding-top: 8px;\n  font-size: 12px;\n}\n\ntable tr {\n  border-left: 0;\n  border-right: 0;\n}\n\n.field-checkbox-wrapper {\n  margin-bottom: 0px;\n}\n\n.black-bg {\n  background: rgba(12, 11, 11, 0.3);\n  position: fixed;\n  top: 0px;\n  height: 100%;\n  left: 0px;\n  z-index: 6;\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lU3RvcmUtbW9kdWxlL3Byb2R1Y3QtY3JlYXRpb24vb2ZmbGluZS1tYXRlcmlhbC9vZmZsaW5lLW1hdGVyaWFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBZTtFQUNmLFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUTtFQUNSLDZCQUE2QjtFQUM3QixvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLGdDQUFnQztFQUNoQyxVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixrQkFBa0I7QUFDdEI7O0FBYkE7RUFjUSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGFBQWE7QUFHckI7O0FBQ0E7RUFDSSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBRXJCOztBQUNBO0VBQ0ksWUFBWTtBQUVoQjs7QUFBRTtFQUVJLGdCQUFnQjtBQUV0Qjs7QUFKRTtFQUtNLFNBQVM7RUFDVCxlQUFlO0VBQ2YsWUFBWTtBQUdwQjs7QUFWRTtFQVVRLFNBQVM7RUFDVCxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixZQUFZO0FBSXRCOztBQUVFO0VBQ0UseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUV6Qiw0QkFBNEI7QUFDaEM7O0FBQ0U7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsZUFBZTtBQUVuQjs7QUFDRTtFQUNFLGNBQWE7RUFDYixlQUFjO0FBRWxCOztBQUNFO0VBQ0Usa0JBQWtCO0FBRXRCOztBQUNFO0VBQ0UsaUNBQWlDO0VBQ2pDLGVBQWU7RUFDZixRQUFRO0VBQ1IsWUFBWTtFQUNaLFNBQVM7RUFDVCxVQUFVO0VBQ1YsV0FBVztBQUVmIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9lU3RvcmUtbW9kdWxlL3Byb2R1Y3QtY3JlYXRpb24vb2ZmbGluZS1tYXRlcmlhbC9vZmZsaW5lLW1hdGVyaWFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhc2ljLWluZm8tZm9vdGVye1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3JkZXItdG9wOiAxcHQgc29saWQgI2YzZjNmMztcbiAgICBwYWRkaW5nOiAwLjVlbSAwLjhlbTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJveC1zaGFkb3c6IDBwdCAtMnB0IDZwdCAjZTZlNmU2O1xuICAgIHotaW5kZXg6IDU7XG4gICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgICB3aWR0aDogODUuNSU7XG4gICAgbWFyZ2luLWxlZnQ6IDE0LjUlO1xuICAgIC5idG4tcm91bmR7XG4gICAgICAgIHBhZGRpbmc6IDAuMmVtIDFlbTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBtYXJnaW46IDAuMmVtO1xuICAgIH1cbn1cblxuLnJvdyB7XG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbn1cblxuLnByb2R1Y3QtbGlzdC13cmFwcGVyIHtcbiAgICBwYWRkaW5nOiAxZW07XG4gIH1cbiAgLnByb2R1Y3QtdGFibGUge1xuICAgIC5wcm9kdWN0LXRhYmxlLWhlYWQge1xuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcblxuICAgICAgdHIge1xuICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuXG4gICAgICAgIHRoIHtcbiAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgY29sb3I6ICM5OTk7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICBib3JkZXItdG9wOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC50YWJsZS13cmFwcGVye1xuICAgIHBhZGRpbmc6IDAuMmVtICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiAxcHQgc29saWQgI2YxZjFmMTtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBwdCAwcHQgNHB0ICNlZWU7XG4gICAgYm94LXNoYWRvdzogMHB0IDBwdCA0cHQgI2VlZTtcbiAgfVxuICAudGFibGU+dHIsIC50YWJsZT50Ym9keT50cj50ZCwgLnRhYmxlPnRib2R5PnRyPnRoLCAudGFibGU+dGZvb3Q+dHI+dGQsIC50YWJsZT50Zm9vdD50cj50aCwgLnRhYmxlPnRoZWFkPnRyPnRkLCAudGFibGU+dGhlYWQ+dHI+dGh7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxuXG4gIHRhYmxlIHRye1xuICAgIGJvcmRlci1sZWZ0OjA7XG4gICAgYm9yZGVyLXJpZ2h0OjA7XG4gIH1cblxuICAuZmllbGQtY2hlY2tib3gtd3JhcHBlcntcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIH1cblxuICAuYmxhY2stYmd7XG4gICAgYmFja2dyb3VuZDogcmdiYSgxMiwgMTEsIDExLCAwLjMpO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDBweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbGVmdDogMHB4O1xuICAgIHotaW5kZXg6IDY7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/eStore-module/product-creation/offline-material/offline-material.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/components/eStore-module/product-creation/offline-material/offline-material.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: OfflineMaterialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfflineMaterialComponent", function() { return OfflineMaterialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/authenticator.service */ "./src/app/services/authenticator.service.ts");
/* harmony import */ var _services_message_show_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/message-show.service */ "./src/app/services/message-show.service.ts");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/products.service */ "./src/app/services/products.service.ts");
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





let OfflineMaterialComponent = /** @class */ (() => {
    let OfflineMaterialComponent = class OfflineMaterialComponent {
        constructor(http, msgService, auth, router) {
            this.http = http;
            this.msgService = msgService;
            this.auth = auth;
            this.router = router;
            this.nextForm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.startForm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.toggleLoader = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.previewEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.inventoryList = [];
            this.description = '';
            this.selectAll = false;
            this.isAdvanceProductEdit = false;
            this.editorConf = {
                height: 150,
                menubar: false,
                branding: false,
                plugins: [
                    'preview anchor',
                    'visualblocks code ',
                    'insertdatetime  table paste code  wordcount'
                ],
                toolbar: 'undo redo | formatselect | bold italic backcolor | \
              alignleft aligncenter alignright alignjustify | \
              bullist numlist outdent indent'
            };
        }
        ngOnInit() {
            this.initForm();
        }
        initOfflineMaterials() {
            //Fetch Product Groups List
            if (!this.auth.isRippleLoad.getValue()) {
                this.auth.showLoader();
                this.http.getMethod('ext/inventory', null).subscribe((resp) => {
                    this.auth.hideLoader();
                    if (resp.validate) {
                        this.inventoryList = resp.result;
                        this.inventoryList.forEach(element => {
                            element.isChecked = false;
                            for (let i = 0; i < this.prodForm.product_item_list.length; i++) {
                                let obj = this.prodForm.product_item_list[i];
                                if (element.inventory_id == obj.source_item_id && obj.slug == 'Offline_Material') {
                                    element.isChecked = true;
                                    break;
                                }
                            }
                            element.is_existed_selected = (element.isChecked && this.isAdvanceProductEdit) ? true : false;
                        });
                        this.selectVlaue();
                    }
                    else {
                        this.msgService.showErrorMessage('error', resp.error, '');
                    }
                }, (err) => {
                    this.auth.hideLoader();
                    this.msgService.showErrorMessage('error', err['error'].errors.message, '');
                });
            }
        }
        initForm() {
            //Fetch Product Groups List
            if (this.entity_id && this.entity_id.length > 0 && (!this.auth.isRippleLoad.getValue())) {
                //Fetch Product Info
                this.auth.showLoader();
                this.http.getMethod('product/get/' + this.entity_id, null).subscribe((resp) => {
                    this.auth.hideLoader();
                    let response = resp.result;
                    if (resp.validate) {
                        let productData = response;
                        this.prodForm = response;
                        this.description = response.page_description['Offline_Material'];
                        this.prodForm.product_item_stats = {};
                        this.prodForm.product_items_types.forEach(element => {
                            this.prodForm.product_item_stats[element.slug] = true;
                        });
                        this.isAdvanceProductEdit = (this.prodForm.is_advance_product && this.prodForm.status == 30) ? true : false;
                        this.updateProductItemStates(null, null);
                        this.initOfflineMaterials();
                    }
                    else {
                        this.msgService.showErrorMessage('error', response.errors.message, '');
                    }
                }, (err) => {
                    this.auth.hideLoader();
                    this.msgService.showErrorMessage('error', err['error'].errors.message, '');
                });
            }
        }
        // update parent state data
        updateProductItemStates(event, item) {
            if (item) {
                this.prodForm.product_item_stats[item.slug] = event ? 1 : 0;
            }
            // console.log(this.prodForm);
            this.previewEvent.emit(this.prodForm);
        }
        selectAllDetails($event) {
            this.inventoryList.forEach(element => {
                if (element.is_existed_selected) {
                    element.isChecked = element.is_existed_selected;
                }
                else {
                    element.isChecked = $event;
                }
            });
            this.selectVlaue();
        }
        selectVlaue() {
            this.selectAll = false;
            let array = this.inventoryList.filter(element => element.isChecked == true);
            if (array.length == this.inventoryList.length) {
                this.selectAll = true;
            }
        }
        gotoBack() {
            this.router.navigateByUrl('/view/e-store/details');
        }
        gotoNext() {
            if (this.description == undefined || this.description == '') {
                this.msgService.showErrorMessage('error', 'Please add description', '');
                return;
            }
            if (this.description.length > 5000) {
                this.msgService.showErrorMessage('error', 'allowed description limit is 5000 characters', '');
                return;
            }
            let objectArray = [];
            let array = this.inventoryList.filter((item) => item.isChecked == true);
            console.log(array);
            if (this.inventoryList.length == 0) {
                this.nextForm.emit();
            }
            else {
                let objectArray = [];
                array.forEach(element => {
                    if (element.isChecked) {
                        let object = {
                            "source_item_id": element.inventory_id,
                            "source_subject_id": "",
                            "course_type_id": "",
                            "parent_topic_id": "",
                            "slug": "Offline_Material",
                            "category_id": 0
                        };
                        objectArray.push(object);
                    }
                });
                if ((!this.auth.isRippleLoad.getValue())) {
                    //update test List
                    let obj = {
                        "page_type": "Offline_Material",
                        "status": this.prodForm.status,
                        "is_advance_product": this.prodForm.is_advance_product,
                        "item_list": objectArray,
                        "description": this.description,
                        "is_paid": this.prodForm.is_paid
                    };
                    this.auth.showLoader();
                    this.http.postMethod('product-item/update/' + this.entity_id, obj).then((resp) => {
                        this.auth.hideLoader();
                        let response = resp['body'];
                        if (response.validate) {
                            let details = response.result;
                            this.prodForm.product_item_list = details;
                            this.msgService.showErrorMessage('success', "Product updated successfully !", '');
                            this.nextForm.emit();
                        }
                        else {
                            this.nextForm.emit();
                            // this.msgService.showErrorMessage('error', response.error[0].error_message, '');
                        }
                    }, (err) => {
                        this.msgService.showErrorMessage('error', err['error'].errors.message, '');
                    });
                }
                else {
                    this.auth.hideLoader();
                    this.msgService.showErrorMessage('error', " select at least one printed materials", '');
                    return;
                }
            }
        }
    };
    OfflineMaterialComponent.ctorParameters = () => [
        { type: _services_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] },
        { type: _services_message_show_service__WEBPACK_IMPORTED_MODULE_3__["MessageShowService"] },
        { type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticatorService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ];
    OfflineMaterialComponent.propDecorators = {
        entity_id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        prodForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        nextForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        startForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        toggleLoader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        previewEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    OfflineMaterialComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-offline-material',
            template: __importDefault(__webpack_require__(/*! raw-loader!./offline-material.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/eStore-module/product-creation/offline-material/offline-material.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./offline-material.component.scss */ "./src/app/components/eStore-module/product-creation/offline-material/offline-material.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_services_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"],
            _services_message_show_service__WEBPACK_IMPORTED_MODULE_3__["MessageShowService"],
            _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticatorService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], OfflineMaterialComponent);
    return OfflineMaterialComponent;
})();



/***/ }),

/***/ "./src/app/components/eStore-module/product-creation/online-class/online-class.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/components/eStore-module/product-creation/online-class/online-class.component.scss ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".basic-info-footer {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  border-top: 1pt solid #f3f3f3;\n  padding: 0.5em 0.8em;\n  background: #fff;\n  box-shadow: 0pt -2pt 6pt #e6e6e6;\n  z-index: 5;\n  background: #fafafa;\n  width: 85.5%;\n  margin-left: 14.5%;\n}\n\n.btn-round {\n  padding: 0.2em 1em;\n  border-radius: 4px;\n  margin: 0.2em;\n}\n\n.black-bg {\n  background: rgba(12, 11, 11, 0.3);\n  position: fixed;\n  top: 0px;\n  height: 100%;\n  left: 0px;\n  z-index: 6;\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lU3RvcmUtbW9kdWxlL3Byb2R1Y3QtY3JlYXRpb24vb25saW5lLWNsYXNzL29ubGluZS1jbGFzcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQWU7RUFDZixTQUFTO0VBQ1QsT0FBTztFQUNQLFFBQVE7RUFDUiw2QkFBNkI7RUFDN0Isb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixnQ0FBZ0M7RUFDaEMsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0VBQ0ksa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2pCOztBQUVBO0VBQ0ksaUNBQWlDO0VBQ2pDLGVBQWU7RUFDZixRQUFRO0VBQ1IsWUFBWTtFQUNaLFNBQVM7RUFDVCxVQUFVO0VBQ1YsV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9lU3RvcmUtbW9kdWxlL3Byb2R1Y3QtY3JlYXRpb24vb25saW5lLWNsYXNzL29ubGluZS1jbGFzcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYXNpYy1pbmZvLWZvb3RlcntcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm9yZGVyLXRvcDogMXB0IHNvbGlkICNmM2YzZjM7XG4gICAgcGFkZGluZzogMC41ZW0gMC44ZW07XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3gtc2hhZG93OiAwcHQgLTJwdCA2cHQgI2U2ZTZlNjtcbiAgICB6LWluZGV4OiA1O1xuICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XG4gICAgd2lkdGg6IDg1LjUlO1xuICAgIG1hcmdpbi1sZWZ0OiAxNC41JTtcbn1cblxuLmJ0bi1yb3VuZHtcbiAgICBwYWRkaW5nOiAwLjJlbSAxZW07XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIG1hcmdpbjogMC4yZW07XG59XG5cbi5ibGFjay1iZ3tcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDEyLCAxMSwgMTEsIDAuMyk7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBsZWZ0OiAwcHg7XG4gICAgei1pbmRleDogNjtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuIl19 */");

/***/ }),

/***/ "./src/app/components/eStore-module/product-creation/online-class/online-class.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/components/eStore-module/product-creation/online-class/online-class.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: OnlineClassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlineClassComponent", function() { return OnlineClassComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/authenticator.service */ "./src/app/services/authenticator.service.ts");
/* harmony import */ var _services_message_show_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/message-show.service */ "./src/app/services/message-show.service.ts");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/products.service */ "./src/app/services/products.service.ts");
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





let OnlineClassComponent = /** @class */ (() => {
    let OnlineClassComponent = class OnlineClassComponent {
        constructor(http, msgService, auth, router) {
            this.http = http;
            this.msgService = msgService;
            this.auth = auth;
            this.router = router;
            this.nextForm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.startForm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.toggleLoader = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.previewEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.products_ecourse_maps = [];
            this.ecourseList = [];
            this.mock_count = 0;
            this.online_count = 0;
            this.description = '';
            this.editorConf = {
                height: 150,
                menubar: false,
                branding: false,
                plugins: [
                    'preview anchor',
                    'visualblocks code ',
                    'insertdatetime  table paste code  wordcount'
                ],
                toolbar: 'undo redo | formatselect | bold italic backcolor | \
              alignleft aligncenter alignright alignjustify | \
              bullist numlist outdent indent'
            };
        }
        ngOnInit() {
            this.initForm();
        }
        initForm() {
            //Fetch Product Groups List
            if (this.entity_id && this.entity_id.length > 0) {
                //Fetch Product Info
                this.auth.showLoader();
                this.http.getMethod('product/get/' + this.entity_id, null).subscribe((resp) => {
                    this.auth.hideLoader();
                    let response = resp.result;
                    if (resp.validate) {
                        this.prodForm = response;
                        let productData = response;
                        this.description = response.page_description['Online_Class'];
                        ;
                        this.prodForm.product_item_stats = {};
                        this.prodForm.product_items_types.forEach(element => {
                            this.prodForm.product_item_stats[element.slug] = true;
                        });
                        this.updateProductItemStates(null, null);
                    }
                    else {
                        this.msgService.showErrorMessage('error', response.errors.message, '');
                    }
                }, (err) => {
                    this.auth.hideLoader();
                    this.msgService.showErrorMessage('error', err['error'].errors.message, '');
                });
            }
        }
        // update parent state data
        updateProductItemStates(event, item) {
            if (item) {
                this.prodForm.product_item_stats[item.slug] = event ? 1 : 0;
            }
            // console.log(this.prodForm);
            this.previewEvent.emit(this.prodForm);
        }
        gotoBack() {
            this.router.navigateByUrl('/view/e-store/details');
        }
        gotoNext() {
            if (this.description == undefined || this.description == '') {
                this.msgService.showErrorMessage('error', 'Please add description', '');
                return;
            }
            if (this.description.length > 5000) {
                this.msgService.showErrorMessage('error', 'allowed description limit is 5000 characters', '');
                return;
            }
            if ((!this.auth.isRippleLoad.getValue())) {
                //update test List
                let obj = {
                    "page_type": "Online_Class",
                    "status": this.prodForm.status,
                    "is_advance_product": this.prodForm.is_advance_product,
                    "item_list": [],
                    "description": this.description,
                    "is_paid": this.prodForm.is_paid
                };
                this.auth.showLoader();
                this.http.postMethod('product-item/update/' + this.entity_id, obj).then((resp) => {
                    this.auth.hideLoader();
                    let response = resp['body'];
                    if (response.validate) {
                        let details = response.result;
                        this.prodForm.product_item_list = details;
                        this.msgService.showErrorMessage('success', "Product updated successfully !", '');
                        this.nextForm.emit();
                    }
                    else {
                        this.msgService.showErrorMessage('error', response.error[0].error_message, '');
                    }
                }, (err) => {
                    this.auth.hideLoader();
                    this.msgService.showErrorMessage('error', 'There is some problem in processing your request.Please try after some time.Or contact us at support@proctur.com for further assistance. ', '');
                });
            }
        }
    };
    OnlineClassComponent.ctorParameters = () => [
        { type: _services_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] },
        { type: _services_message_show_service__WEBPACK_IMPORTED_MODULE_3__["MessageShowService"] },
        { type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticatorService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ];
    OnlineClassComponent.propDecorators = {
        entity_id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        prodForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        nextForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        startForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        toggleLoader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        previewEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    OnlineClassComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-online-class',
            template: __importDefault(__webpack_require__(/*! raw-loader!./online-class.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/eStore-module/product-creation/online-class/online-class.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./online-class.component.scss */ "./src/app/components/eStore-module/product-creation/online-class/online-class.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_services_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"],
            _services_message_show_service__WEBPACK_IMPORTED_MODULE_3__["MessageShowService"],
            _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticatorService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], OnlineClassComponent);
    return OnlineClassComponent;
})();



/***/ }),

/***/ "./src/app/components/eStore-module/product-creation/online-exam/online-exam.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/components/eStore-module/product-creation/online-exam/online-exam.component.scss ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".basic-info-footer {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  border-top: 1pt solid #f3f3f3;\n  padding: 0.5em 0.8em;\n  background: #fff;\n  box-shadow: 0pt -2pt 6pt #e6e6e6;\n  z-index: 5;\n  background: #fafafa;\n  width: 85.5%;\n  margin-left: 14.5%;\n}\n\n.basic-info-footer .btn-round {\n  padding: 0.2em 1em;\n  border-radius: 4px;\n  margin: 0.2em;\n}\n\n.iconSize {\n  font-size: 16px;\n  padding-top: 4px;\n}\n\n.labelSize {\n  font-weight: bold;\n  font-size: 15px;\n}\n\n.row {\n  margin-left: 0px;\n  margin-right: 0px;\n}\n\n.product-list-wrapper {\n  padding: 1em;\n}\n\n.product-table .product-table-head {\n  background: #fff;\n}\n\n.product-table .product-table-head tr {\n  border: 0;\n  cursor: default;\n  border: none;\n}\n\n.product-table .product-table-head tr th {\n  border: 0;\n  color: #999;\n  font-weight: normal;\n  border-top: 0;\n  padding: 8px;\n}\n\n.table-wrapper {\n  padding: 0.2em !important;\n  border: 1pt solid #f1f1f1;\n  box-shadow: 0pt 0pt 4pt #eee;\n}\n\n.table > tr, .table > tbody > tr > td, .table > tbody > tr > th, .table > tfoot > tr > td, .table > tfoot > tr > th, .table > thead > tr > td, .table > thead > tr > th {\n  padding-left: 0;\n  padding-right: 0;\n  padding-bottom: 8px;\n  padding-top: 8px;\n  font-size: 12px;\n}\n\ntable tr {\n  border-left: 0;\n  border-right: 0;\n}\n\n.field-checkbox-wrapper {\n  margin-bottom: 0px;\n}\n\n.black-bg {\n  background: rgba(12, 11, 11, 0.3);\n  position: fixed;\n  top: 0px;\n  height: 100%;\n  left: 0px;\n  z-index: 6;\n  width: 100%;\n}\n\n.filter_div {\n  padding: 1rem;\n  border-radius: 4px;\n}\n\n.field-wrapper {\n  margin-left: 20px;\n  padding-top: 0;\n  display: inline-block;\n}\n\n.dropdown-div {\n  width: 160px;\n}\n\n.dropdown-div .dropdown {\n  width: 100%;\n  height: 30px;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lU3RvcmUtbW9kdWxlL3Byb2R1Y3QtY3JlYXRpb24vb25saW5lLWV4YW0vb25saW5lLWV4YW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0VBQ1IsNkJBQTZCO0VBQzdCLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsZ0NBQWdDO0VBQ2hDLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFiQTtFQWNNLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsYUFBYTtBQUduQjs7QUFBQTtFQUNFLGVBQWU7RUFDYixnQkFBZ0I7QUFHcEI7O0FBREE7RUFDRSxpQkFBaUI7RUFDZixlQUFlO0FBSW5COztBQUZBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUtuQjs7QUFGQTtFQUNFLFlBQVk7QUFLZDs7QUFIQTtFQUVJLGdCQUFnQjtBQUtwQjs7QUFQQTtFQUtNLFNBQVM7RUFDVCxlQUFlO0VBQ2YsWUFBWTtBQU1sQjs7QUFiQTtFQVVRLFNBQVM7RUFDVCxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixZQUFZO0FBT3BCOztBQURBO0VBQ0UseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUV6Qiw0QkFBNEI7QUFJOUI7O0FBRkE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsZUFBZTtBQUtqQjs7QUFGQTtFQUNFLGNBQWE7RUFDYixlQUFjO0FBS2hCOztBQUZBO0VBQ0Usa0JBQWtCO0FBS3BCOztBQUZBO0VBQ0UsaUNBQWlDO0VBQ2pDLGVBQWU7RUFDZixRQUFRO0VBQ1IsWUFBWTtFQUNaLFNBQVM7RUFDVCxVQUFVO0VBQ1YsV0FBVztBQUtiOztBQUhBO0VBRUUsYUFBYTtFQUNiLGtCQUFrQjtBQUtwQjs7QUFIQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QscUJBQXFCO0FBTXZCOztBQUpBO0VBQ0UsWUFBWTtBQU9kOztBQVJBO0VBR0ksV0FBVztFQUNYLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBU3RCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9lU3RvcmUtbW9kdWxlL3Byb2R1Y3QtY3JlYXRpb24vb25saW5lLWV4YW0vb25saW5lLWV4YW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFzaWMtaW5mby1mb290ZXJ7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm9yZGVyLXRvcDogMXB0IHNvbGlkICNmM2YzZjM7XG4gIHBhZGRpbmc6IDAuNWVtIDAuOGVtO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3gtc2hhZG93OiAwcHQgLTJwdCA2cHQgI2U2ZTZlNjtcbiAgei1pbmRleDogNTtcbiAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgd2lkdGg6IDg1LjUlO1xuICBtYXJnaW4tbGVmdDogMTQuNSU7XG4gIC5idG4tcm91bmR7XG4gICAgICBwYWRkaW5nOiAwLjJlbSAxZW07XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICBtYXJnaW46IDAuMmVtO1xuICB9XG59XG4uaWNvblNpemV7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgICBwYWRkaW5nLXRvcDogNHB4O1xufVxuLmxhYmVsU2l6ZXtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxNXB4O1xufVxuLnJvdyB7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xufVxuXG4ucHJvZHVjdC1saXN0LXdyYXBwZXIge1xuICBwYWRkaW5nOiAxZW07XG59XG4ucHJvZHVjdC10YWJsZSB7XG4gIC5wcm9kdWN0LXRhYmxlLWhlYWQge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG5cbiAgICB0ciB7XG4gICAgICBib3JkZXI6IDA7XG4gICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgICBib3JkZXI6IG5vbmU7XG5cbiAgICAgIHRoIHtcbiAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICBjb2xvcjogIzk5OTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgYm9yZGVyLXRvcDogMDtcbiAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4udGFibGUtd3JhcHBlcntcbiAgcGFkZGluZzogMC4yZW0gIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHQgc29saWQgI2YxZjFmMTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHQgMHB0IDRwdCAjZWVlO1xuICBib3gtc2hhZG93OiAwcHQgMHB0IDRwdCAjZWVlO1xufVxuLnRhYmxlPnRyLCAudGFibGU+dGJvZHk+dHI+dGQsIC50YWJsZT50Ym9keT50cj50aCwgLnRhYmxlPnRmb290PnRyPnRkLCAudGFibGU+dGZvb3Q+dHI+dGgsIC50YWJsZT50aGVhZD50cj50ZCwgLnRhYmxlPnRoZWFkPnRyPnRoe1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxudGFibGUgdHJ7XG4gIGJvcmRlci1sZWZ0OjA7XG4gIGJvcmRlci1yaWdodDowO1xufVxuXG4uZmllbGQtY2hlY2tib3gtd3JhcHBlcntcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4uYmxhY2stYmd7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTIsIDExLCAxMSwgMC4zKTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBsZWZ0OiAwcHg7XG4gIHotaW5kZXg6IDY7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmZpbHRlcl9kaXYge1xuICAvLyBiYWNrZ3JvdW5kOiAjZGRkO1xuICBwYWRkaW5nOiAxcmVtO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4uZmllbGQtd3JhcHBlciB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLXRvcDogMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLmRyb3Bkb3duLWRpdiB7XG4gIHdpZHRoOiAxNjBweDtcbiAgLmRyb3Bkb3duIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/eStore-module/product-creation/online-exam/online-exam.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/components/eStore-module/product-creation/online-exam/online-exam.component.ts ***!
  \************************************************************************************************/
/*! exports provided: OnlineExamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlineExamComponent", function() { return OnlineExamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/@angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/authenticator.service */ "./src/app/services/authenticator.service.ts");
/* harmony import */ var _services_message_show_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/message-show.service */ "./src/app/services/message-show.service.ts");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/products.service */ "./src/app/services/products.service.ts");
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







let OnlineExamComponent = /** @class */ (() => {
    let OnlineExamComponent = class OnlineExamComponent {
        constructor(http, msgService, auth, router, _httpService) {
            this.http = http;
            this.msgService = msgService;
            this.auth = auth;
            this.router = router;
            this._httpService = _httpService;
            this.nextForm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.startForm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.toggleLoader = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.previewEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.testlist = [];
            this.checkedList = [];
            this.product_ecourse_maps = [];
            this.description = '';
            this.selectAll = false;
            this.isAdvanceProductEdit = false;
            this.standardData = [];
            this.subjectData = [];
            this.filteredTestList = [];
            this.filterData = {
                standard_id: -1,
                subject_id: -1
            };
            this.editorConf = {
                height: 150,
                menubar: false,
                branding: false,
                plugins: [
                    'preview anchor',
                    'visualblocks code ',
                    'insertdatetime  table paste code  wordcount'
                ],
                toolbar: 'undo redo | formatselect | bold italic backcolor | \
              alignleft aligncenter alignright alignjustify | \
              bullist numlist outdent indent'
            };
        }
        ngOnInit() {
            this.initForm();
            this.getAllStandards();
        }
        expandEcourse(ecourse) {
            ecourse.isExpand = !ecourse.isExpand;
            if (ecourse.isExpand && ecourse.testlist.length == 0) {
                this.initOnlineTests(ecourse);
            }
        }
        getTime(date) {
            let milisec = date * 1000;
            return moment__WEBPACK_IMPORTED_MODULE_1__(new Date(milisec)).format('h:mm');
        }
        getDate(date) {
            let milisec = date * 1000;
            return moment__WEBPACK_IMPORTED_MODULE_1__(new Date(milisec)).format('DD MMM YYYY');
        }
        initOnlineTests(ecourse) {
            //Fetch Product Groups List
            if (!this.auth.isRippleLoad.getValue()) {
                this.auth.showLoader();
                this.http.postMethod('ext/get-examdesk/' + ecourse.course_type, ["Online_Test"]).then((resp) => {
                    this.auth.hideLoader();
                    let response = resp['body'];
                    if (response.validate) {
                        let details = JSON.parse(response.result['Online_Test']);
                        ecourse.testlist = details.data;
                        // this.selectAllDetails(false);
                        if (ecourse.testlist.length && this.prodForm.product_item_list.length) {
                            this.prodForm.product_item_list.forEach((obj) => {
                                ecourse.testlist.forEach((test) => {
                                    if (test.test_id == obj.source_item_id && obj.course_type_id == ecourse.course_type_id
                                        && obj.slug == "Online_Test") {
                                        test.isChecked = true;
                                        test.is_existed_selected = (test.isChecked && this.isAdvanceProductEdit) ? true : false;
                                    }
                                });
                            });
                        }
                    }
                    else {
                        this.checkedList = [];
                        this.msgService.showErrorMessage('error', response.errors.message, '');
                    }
                }, (err) => {
                    this.auth.hideLoader();
                    this.msgService.showErrorMessage('error', err['error'].errors.message, '');
                });
            }
        }
        initForm() {
            //Fetch Product Groups List
            if (this.entity_id && this.entity_id.length > 0 && (!this.auth.isRippleLoad.getValue())) {
                //Fetch Product Info
                this.auth.showLoader();
                this.http.getMethod('product/get/' + this.entity_id, null).subscribe((resp) => {
                    this.auth.hideLoader();
                    let response = resp.result;
                    if (resp.validate) {
                        let productData = response;
                        // this.testlist = [];
                        this.prodForm = response;
                        this.isAdvanceProductEdit = (this.prodForm.is_advance_product && this.prodForm.status == 30) ? true : false;
                        this.description = response.page_description['Online_Test'];
                        this.prodForm.product_item_stats = {};
                        this.prodForm.product_items_types.forEach(element => {
                            this.prodForm.product_item_stats[element.slug] = true;
                        });
                        this.updateProductItemStates(null, null);
                        this.getTestIdByProduct();
                        this.product_ecourse_maps = response.product_ecourse_maps;
                        this.product_ecourse_maps.forEach((course) => {
                            course.isExpand = false;
                            course.testlist = [];
                        });
                        // if (productData.product_item_list && productData.product_item_list.length) {
                        //   productData.product_item_list.forEach((object) => {
                        //     if (object.slug == 'Online_Test') {
                        //       this.testlist.push(object);
                        //     }
                        //   });
                        // }
                        this.prodForm.product_item_stats = {};
                        this.prodForm && this.prodForm.product_items_types && this.prodForm.product_items_types.forEach(element => {
                            this.prodForm.product_item_stats[element.slug] = true;
                        });
                        this.updateProductItemStates(null, null);
                    }
                    else {
                        this.msgService.showErrorMessage('error', response.errors.message, '');
                    }
                }, (err) => {
                    this.auth.hideLoader();
                    this.msgService.showErrorMessage('error', err['error'].errors.message, '');
                });
            }
        }
        getTestIdByProduct() {
            this.auth.showLoader();
            const url = `user-product/get-product-test-details/Online_Test/${this.entity_id}`;
            this.http.getMethod(url, null).subscribe((resp) => {
                this.auth.hideLoader();
                let response = resp;
                if (resp.validate) {
                    let productData = response;
                    this.testlist = [];
                    console.log(productData);
                    // this.prodForm.product_item_stats = {};
                    if (productData.data && productData.data.length) {
                        productData.data.forEach((object) => {
                            // if (object.slug == 'Mock_Test') {
                            object.isChecked = true;
                            object.is_existed_selected = (object.isChecked && this.isAdvanceProductEdit) ? true : false;
                            this.testlist.push(object);
                            // }
                        });
                    }
                }
                else {
                    this.msgService.showErrorMessage('error', response.errors.message, '');
                }
            }, (err) => {
                this.auth.hideLoader();
                this.msgService.showErrorMessage('error', err['error'].errors.message, '');
            });
        }
        getAllStandards() {
            let url = "/api/v1/standards/standard-subject-list/" + sessionStorage.getItem('institute_id') + "?is_active=Y" + '&is_subject_required=true';
            this.auth.showLoader();
            this._httpService.getData(url).subscribe((data) => {
                this.auth.hideLoader();
                this.standardData = data.result;
                // console.log(data);
            }, (error) => {
                this.auth.hideLoader();
                console.log(error);
            });
        }
        getAllSubjectListFromServer(standards_id) {
            this.subjectData = [];
            this.filterData.subject_id = -1;
            for (let i = 0; i < this.standardData.length; i++) {
                if (this.standardData[i].standard_id == this.filterData.standard_id) {
                    this.subjectData = this.standardData[i].subject_list;
                }
            }
        }
        fetchTestByStd() {
            if (this.filterData.standard_id != -1) {
                this.auth.showLoader();
                let url = `/ext/get-examdesk-test/Online_Test?standard_id=${this.filterData.standard_id}`;
                if (this.filterData.subject_id != -1) {
                    url = url + `&subject_id=${this.filterData.subject_id}`;
                }
                this.http.getMethod(url, null).subscribe((resp) => {
                    this.auth.hideLoader();
                    let response = resp;
                    console.log(response);
                    if (resp.validate) {
                        this.filteredTestList = response.data;
                        for (let i = 0; i < this.filteredTestList.length; i++) {
                            this.filteredTestList[i].disabled = false;
                            for (let j = 0; j < this.testlist.length; j++) {
                                if (this.filteredTestList[i].test_id == this.testlist[j].test_id) {
                                    this.filteredTestList[i].disabled = true;
                                }
                            }
                        }
                        if (!this.filteredTestList.length) {
                            this.msgService.showErrorMessage('info', '', 'No Data Found');
                        }
                    }
                    else {
                        this.msgService.showErrorMessage('error', response.errors.message, '');
                    }
                }, (err) => {
                    this.auth.hideLoader();
                    this.msgService.showErrorMessage('error', err['error'].errors.message, '');
                });
            }
            else {
                this.msgService.showErrorMessage('error', '', 'Please select Standard');
            }
        }
        // update parent state data
        updateProductItemStates(event, item) {
            if (item) {
                this.prodForm.product_item_stats[item.slug] = event ? 1 : 0;
            }
            // console.log(this.prodForm);
            this.previewEvent.emit(this.prodForm);
        }
        selectAllDetails($event) {
            this.testlist.forEach(element => { element.isChecked = $event; });
        }
        selectVlaue($event) {
            this.selectAll = false;
            let array = this.testlist.filter(element => element.isChecked == true);
            if (array.length == this.testlist.length) {
                this.selectAll = true;
            }
        }
        gotoBack() {
            this.router.navigateByUrl('/view/e-store/details');
        }
        gotoNext() {
            if (this.description == undefined || this.description == '') {
                this.msgService.showErrorMessage('error', 'Please add description', '');
                return;
            }
            if (this.description.length > 5000) {
                this.msgService.showErrorMessage('error', 'allowed description limit is 5000 characters', '');
                return;
            }
            // let array = this.testlist.filter((item) => item.isChecked == true);
            // console.log(array);
            // if (this.testlist.length == 0) {
            //   this.nextForm.emit();
            // } else
            let objectArray = [];
            this.prodForm.product_item_list && this.prodForm.product_item_list.forEach((object) => {
                if (object.slug != 'Online_Test') {
                    objectArray.push(object);
                }
            });
            this.testlist.forEach(element => {
                if (element.isChecked) {
                    let object = {
                        "source_item_id": element.test_id,
                        "source_subject_id": "",
                        "course_type_id": '',
                        "parent_topic_id": "",
                        "slug": "Online_Test",
                        "category_id": 0
                    };
                    objectArray.push(object);
                }
            });
            this.filteredTestList.forEach(element => {
                if (element.isChecked) {
                    let object = {
                        "source_item_id": element.test_id,
                        "source_subject_id": "",
                        "course_type_id": '',
                        "parent_topic_id": "",
                        "slug": "Online_Test",
                        "category_id": 0
                    };
                    objectArray.push(object);
                }
            });
            if (objectArray.length == 0) {
                objectArray = this.testlist;
            }
            else {
                this.testlist.forEach((linkedtest) => {
                    let isAdded = false;
                    for (let i = 0; i < objectArray.length; i++) {
                        if (linkedtest.source_item_id == objectArray[i].source_item_id) {
                            isAdded = true;
                            break;
                        }
                    }
                    if (!isAdded) {
                        objectArray.push(linkedtest);
                    }
                });
            }
            {
                if ((!this.auth.isRippleLoad.getValue())) {
                    //update test List
                    let obj = {
                        "page_type": "Online_Test",
                        "status": this.prodForm.status,
                        "is_advance_product": this.prodForm.is_advance_product,
                        "item_list": objectArray,
                        "description": this.description,
                        "is_paid": this.prodForm.is_paid
                    };
                    this.auth.showLoader();
                    this.http.postMethod('product-item/update/' + this.entity_id, obj).then((resp) => {
                        this.auth.hideLoader();
                        let response = resp['body'];
                        if (response.validate) {
                            let details = response.result;
                            this.prodForm.product_item_list = details;
                            console.log(this.prodForm);
                            this.msgService.showErrorMessage('success', "Product updated successfully !", '');
                            this.nextForm.emit();
                        }
                        else {
                            this.checkedList = [];
                            this.msgService.showErrorMessage('error', response.error[0].error_message, '');
                        }
                    }, (err) => {
                        this.auth.hideLoader();
                        this.msgService.showErrorMessage('error', err['error'].errors.message, '');
                    });
                }
                else {
                    this.msgService.showErrorMessage('error', " select at least one Online Test", '');
                    return;
                }
            }
        }
    };
    OnlineExamComponent.ctorParameters = () => [
        { type: _services_products_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"] },
        { type: _services_message_show_service__WEBPACK_IMPORTED_MODULE_5__["MessageShowService"] },
        { type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticatorService"] },
        { type: _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }
    ];
    OnlineExamComponent.propDecorators = {
        entity_id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        prodForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        nextForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        startForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        toggleLoader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        previewEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    OnlineExamComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-online-exam',
            template: __importDefault(__webpack_require__(/*! raw-loader!./online-exam.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/eStore-module/product-creation/online-exam/online-exam.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./online-exam.component.scss */ "./src/app/components/eStore-module/product-creation/online-exam/online-exam.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_services_products_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"],
            _services_message_show_service__WEBPACK_IMPORTED_MODULE_5__["MessageShowService"],
            _services_authenticator_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticatorService"],
            _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], OnlineExamComponent);
    return OnlineExamComponent;
})();



/***/ }),

/***/ "./src/app/components/eStore-module/product-creation/product-creation.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/eStore-module/product-creation/product-creation.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".product-contents-wrapper {\n  padding: 0;\n}\n\n.form-steps-wrapper {\n  width: 100%;\n  padding-top: 2rem;\n  padding-bottom: 1rem;\n}\n\n.product-form-wrapper {\n  padding-bottom: 10em;\n}\n\n.product-form-wrapper .divWrapper {\n  background: #fff;\n  border: 1pt solid #e8e8e8;\n  box-shadow: 0pt 0pt 14pt #ececec;\n  border-radius: 1em;\n  padding: 2em;\n}\n\n.product-preview-wrapper div {\n  background: #fff;\n  border: 1pt solid #e8e8e8;\n  box-shadow: 0pt 0pt 14pt #ececec;\n  border-radius: 1em;\n  padding: 2em;\n}\n\n.product-preview-wrapper div .head-label {\n  font-size: 0.9em;\n  color: #ef8e00;\n}\n\n.product-preview-wrapper div .prod-name {\n  color: #007de0;\n  font-size: 1.1em;\n  margin-top: 0.3em;\n}\n\n.product-preview-wrapper div .prod-image {\n  max-height: 150px;\n}\n\n.product-preview-wrapper div .prod-table {\n  font-size: 0.9em;\n  margin: 0.6em 0;\n}\n\n.product-preview-wrapper div .prod-table tr {\n  border-bottom: 1pt solid #eaeaea;\n}\n\n.product-preview-wrapper div .prod-table tr th {\n  color: #111;\n  font-weight: 600;\n  text-align: left;\n}\n\n.product-preview-wrapper div .prod-table tr td {\n  color: #035392;\n  font-weight: 400;\n  padding: 0.4em 0.2em;\n}\n\n.product-preview-wrapper div .prod-table tr td .wrap-text {\n  word-wrap: break-word;\n  min-width: 160px;\n  max-width: 160px;\n}\n\ntable tr {\n  border-left: none;\n  border-right: none;\n}\n\n.mainDiv {\n  height: 100%;\n}\n\n/*progressbar*/\n\n#progressbar {\n  margin-bottom: 0;\n  overflow: hidden;\n  width: 100%;\n  text-align: center;\n  position: -webkit-sticky;\n  position: sticky;\n  font-size: 1em;\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  /*CSS counters to number the steps*/\n  counter-reset: step;\n  /*marking active/completed steps green*/\n  /*The number of the step and the connector before it = green*/\n}\n\n#progressbar li {\n  list-style-type: none;\n  color: #000;\n  float: left;\n  position: relative;\n  cursor: pointer;\n}\n\n#progressbar li:before {\n  content: counter(step);\n  counter-increment: step;\n  display: block;\n  color: #333;\n  margin: 0px auto 10px auto;\n  border: 1px solid #ccc;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background: #ddd;\n  text-align: center;\n  line-height: 30px;\n  position: relative;\n  z-index: 1;\n  font-weight: 600;\n  font-size: 14px;\n}\n\n#progressbar li:after {\n  content: '';\n  width: 100%;\n  height: 2px;\n  background: #c5c5c5;\n  position: absolute;\n  left: -40%;\n  top: 16px;\n  z-index: -1;\n  /*put it behind the numbers*/\n}\n\n#progressbar li:first-child:after {\n  /*connector not needed before the first step*/\n  content: none;\n}\n\n#progressbar li.active:before, #progressbar li.active:after, #progressbar li.completed:before, #progressbar li.completed:after {\n  background: #0084f6;\n  color: white;\n  border: 1pt solid #fff;\n  border-radius: .9rem;\n}\n\n.btn-outline-danger {\n  color: indianred;\n  background-color: #fff;\n  border-color: indianred;\n}\n\n.btn-outline-danger:hover {\n  color: #fff;\n  background-color: #ac2925;\n  border-color: #761c19;\n}\n\n.btn-primary {\n  color: #007bff;\n  background-color: #fff;\n  border-color: #007bff;\n}\n\n.btn-primary:hover {\n  color: #fff;\n  background-color: #007bff;\n  border-color: #007bff;\n}\n\n.col {\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lU3RvcmUtbW9kdWxlL3Byb2R1Y3QtY3JlYXRpb24vcHJvZHVjdC1jcmVhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQVU7QUFDZDs7QUFFQTtFQUNJLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3hCOztBQU1BO0VBQ0ksb0JBQW9CO0FBSHhCOztBQUVBO0VBR1EsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixnQ0FBZ0M7RUFDaEMsa0JBQWtCO0VBQ2xCLFlBQVk7QUFEcEI7O0FBS0E7RUFFUSxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLGdDQUFnQztFQUNoQyxrQkFBa0I7RUFDbEIsWUFBWTtBQUhwQjs7QUFIQTtFQVFZLGdCQUFnQjtFQUNoQixjQUFjO0FBRDFCOztBQVJBO0VBWVksY0FBYztFQUNkLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFBN0I7O0FBZEE7RUFpQlksaUJBQWlCO0FBQzdCOztBQWxCQTtFQW9CWSxnQkFBZ0I7RUFDaEIsZUFBZTtBQUUzQjs7QUF2QkE7RUF1QmdCLGdDQUFnQztBQUloRDs7QUEzQkE7RUF5Qm9CLFdBQVc7RUFDWCxnQkFBZ0I7RUFFaEIsZ0JBQWdCO0FBS3BDOztBQWpDQTtFQStCb0IsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixvQkFBb0I7QUFNeEM7O0FBdkNBO0VBbUN3QixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQVF4Qzs7QUFBQTtFQUNJLGlCQUFnQjtFQUNoQixrQkFBaUI7QUFHckI7O0FBQUE7RUFDRSxZQUFZO0FBR2Q7O0FBQUEsY0FBQTs7QUFDQTtFQUNJLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQix3QkFBZ0I7RUFBaEIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUMxQixtQ0FBQTtFQUNHLG1CQUFtQjtFQTBDbkIsdUNBQUE7RUFDQSw2REFBQTtBQXRDSjs7QUFoQkE7RUFhUSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZUFBZTtBQU92Qjs7QUF4QkE7RUFvQlksc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QsV0FBVztFQUNYLDBCQUEwQjtFQUMxQixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsZUFBZTtBQVEzQjs7QUEzQ0E7RUFzQ1ksV0FBVztFQUNYLFdBQVc7RUFDWCxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsU0FBUztFQUNULFdBQVc7RUFBRSw0QkFBQTtBQVV6Qjs7QUF2REE7RUFnRFksNkNBQUE7RUFDQSxhQUFhO0FBV3pCOztBQTVEQTtFQXdEUSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixvQkFBb0I7QUFRNUI7O0FBSkE7RUFDSSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLHVCQUF1QjtBQU8zQjs7QUFWQTtFQU1NLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIscUJBQXFCO0FBUTNCOztBQUpFO0VBQ0UsY0FBYztFQUNkLHNCQUFzQjtFQUN0QixxQkFBcUI7QUFPekI7O0FBVkU7RUFNSSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQVEzQjs7QUFKRTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBT3RCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9lU3RvcmUtbW9kdWxlL3Byb2R1Y3QtY3JlYXRpb24vcHJvZHVjdC1jcmVhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kdWN0LWNvbnRlbnRzLXdyYXBwZXJ7XG4gICAgcGFkZGluZzogMDtcbn1cblxuLmZvcm0tc3RlcHMtd3JhcHBlcntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbn1cblxuLy8gLmNvbHtcbi8vICAgICAvLyBwYWRkaW5nLWxlZnQ6IDQwcHggIWltcG9ydGFudDtcbi8vIH1cblxuLnByb2R1Y3QtZm9ybS13cmFwcGVye1xuICAgIHBhZGRpbmctYm90dG9tOiAxMGVtO1xuICAgIC5kaXZXcmFwcGVye1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICBib3JkZXI6IDFwdCBzb2xpZCAjZThlOGU4O1xuICAgICAgICBib3gtc2hhZG93OiAwcHQgMHB0IDE0cHQgI2VjZWNlYztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMWVtO1xuICAgICAgICBwYWRkaW5nOiAyZW07XG4gICAgfVxufVxuXG4ucHJvZHVjdC1wcmV2aWV3LXdyYXBwZXJ7XG4gICAgZGl2e1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICBib3JkZXI6IDFwdCBzb2xpZCAjZThlOGU4O1xuICAgICAgICBib3gtc2hhZG93OiAwcHQgMHB0IDE0cHQgI2VjZWNlYztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMWVtO1xuICAgICAgICBwYWRkaW5nOiAyZW07XG4gICAgICAgIC5oZWFkLWxhYmVse1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjllbTtcbiAgICAgICAgICAgIGNvbG9yOiAjZWY4ZTAwO1xuICAgICAgICB9XG4gICAgICAgIC5wcm9kLW5hbWV7XG4gICAgICAgICAgICBjb2xvcjogIzAwN2RlMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xZW07XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwLjNlbTtcbiAgICAgICAgfVxuICAgICAgICAucHJvZC1pbWFnZXtcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDE1MHB4O1xuICAgICAgICB9XG4gICAgICAgIC5wcm9kLXRhYmxle1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjllbTtcbiAgICAgICAgICAgIG1hcmdpbjogMC42ZW0gMDtcbiAgICAgICAgICAgIHRye1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFwdCBzb2xpZCAjZWFlYWVhO1xuICAgICAgICAgICAgICAgIHRoe1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzExMTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICAgICAgLy8gcGFkZGluZzogMC40ZW0gMC4yZW07XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRke1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAzNTM5MjtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMC40ZW0gMC4yZW07XG4gICAgICAgICAgICAgICAgICAgIC53cmFwLXRleHR7XG4gICAgICAgICAgICAgICAgICAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDE2MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxNjBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxudGFibGUgdHJ7XG4gICAgYm9yZGVyLWxlZnQ6bm9uZTtcbiAgICBib3JkZXItcmlnaHQ6bm9uZTtcbn1cblxuLm1haW5EaXZ7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLypwcm9ncmVzc2JhciovXG4jcHJvZ3Jlc3NiYXIge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0LypDU1MgY291bnRlcnMgdG8gbnVtYmVyIHRoZSBzdGVwcyovXG4gICAgY291bnRlci1yZXNldDogc3RlcDtcbiAgICBsaXtcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IGNvdW50ZXIoc3RlcCk7XG4gICAgICAgICAgICBjb3VudGVyLWluY3JlbWVudDogc3RlcDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgICAgICBtYXJnaW46IDBweCBhdXRvIDEwcHggYXV0bztcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNkZGQ7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB9XG4gICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMnB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2M1YzVjNTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGxlZnQ6IC00MCU7XG4gICAgICAgICAgICB0b3A6IDE2cHg7XG4gICAgICAgICAgICB6LWluZGV4OiAtMTsgLypwdXQgaXQgYmVoaW5kIHRoZSBudW1iZXJzKi9cbiAgICAgICAgfVxuICAgICAgICAmOmZpcnN0LWNoaWxkOmFmdGVyIHtcbiAgICAgICAgICAgIC8qY29ubmVjdG9yIG5vdCBuZWVkZWQgYmVmb3JlIHRoZSBmaXJzdCBzdGVwKi9cbiAgICAgICAgICAgIGNvbnRlbnQ6IG5vbmU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKm1hcmtpbmcgYWN0aXZlL2NvbXBsZXRlZCBzdGVwcyBncmVlbiovXG4gICAgLypUaGUgbnVtYmVyIG9mIHRoZSBzdGVwIGFuZCB0aGUgY29ubmVjdG9yIGJlZm9yZSBpdCA9IGdyZWVuKi9cbiAgICBsaS5hY3RpdmU6YmVmb3JlLCBsaS5hY3RpdmU6YWZ0ZXIsIGxpLmNvbXBsZXRlZDpiZWZvcmUsIGxpLmNvbXBsZXRlZDphZnRlcntcbiAgICAgICAgYmFja2dyb3VuZDogIzAwODRmNjtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBib3JkZXI6IDFwdCBzb2xpZCAjZmZmO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAuOXJlbTtcbiAgICB9XG59XG5cbi5idG4tb3V0bGluZS1kYW5nZXIge1xuICAgIGNvbG9yOiBpbmRpYW5yZWQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXItY29sb3I6IGluZGlhbnJlZDtcblxuICAgICY6aG92ZXIge1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWMyOTI1O1xuICAgICAgYm9yZGVyLWNvbG9yOiAjNzYxYzE5O1xuICAgIH1cbiAgfVxuXG4gIC5idG4tcHJpbWFyeSB7XG4gICAgY29sb3I6ICMwMDdiZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXItY29sb3I6ICMwMDdiZmY7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcbiAgICAgIGJvcmRlci1jb2xvcjogIzAwN2JmZjtcbiAgICB9XG4gIH1cblxuICAuY29se1xuICAgIG1pbi1oZWlnaHQ6IDFweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgfVxuIl19 */");

/***/ }),

/***/ "./src/app/components/eStore-module/product-creation/product-creation.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/eStore-module/product-creation/product-creation.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ProductCreationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCreationComponent", function() { return ProductCreationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/@angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_message_show_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/message-show.service */ "./src/app/services/message-show.service.ts");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/products.service */ "./src/app/services/products.service.ts");
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




let ProductCreationComponent = /** @class */ (() => {
    let ProductCreationComponent = class ProductCreationComponent {
        constructor(router, http, route, msgService) {
            this.router = router;
            this.http = http;
            this.route = route;
            this.msgService = msgService;
            this.formLoading = false;
            this.activeForm = 3;
            this.entity_id = 0;
            this.productItems = [];
            // prodForm: product_details = new product_details();
            this.prodForm = {
                entity_id: 0,
                title: '',
                exams: '',
                product_image: '',
                exam_ids: [],
                product_group_id: {},
                short_description: '',
                about_product: '',
                is_free: true,
                is_paid: 0,
                price: 0,
                start_datetime: '',
                end_datetime: '',
                start_timestamp: '',
                end_timestamp: '',
                itemStates: [],
                product_item_stats: {
                    mock_test: 0,
                    online_exams: 0,
                    live_classes: 0,
                    assignments: 0
                }
            };
            this.formSequence = {
                1: {
                    slug: 'basic',
                    show: true,
                    is_completed: true,
                    index: 1
                },
                2: {
                    slug: 'Study_Material',
                    show: false,
                    is_completed: false,
                    index: 2
                },
                3: {
                    slug: 'Videos',
                    show: false,
                    is_completed: false,
                    index: 3
                },
                4: {
                    slug: 'Mock_Test',
                    show: false,
                    is_completed: false,
                    index: 4
                },
                5: {
                    slug: 'Online_Test',
                    show: false,
                    is_completed: false,
                    index: 5
                },
                6: {
                    slug: 'Online_Class',
                    show: false,
                    is_completed: false,
                    index: 6
                },
                7: {
                    slug: 'Classroom_Class',
                    show: false,
                    is_completed: false,
                    index: 7
                },
                8: {
                    slug: 'Offline_Material',
                    show: false,
                    is_completed: false,
                    index: 8
                },
                9: {
                    slug: 'review',
                    show: true,
                    is_completed: false,
                    index: 9
                }
            };
            this.route.params.subscribe(params => {
                if (Object.keys(params).length > 0) {
                    this.entity_id = params.entity_id;
                    switch (params.form) {
                        case 'basic':
                            this.activeForm = 1;
                            break;
                        case 'Study_Material':
                            this.activeForm = 2;
                            break;
                        case 'Videos':
                            this.activeForm = 3;
                            break;
                        case 'Mock_Test':
                            this.activeForm = 4;
                            break;
                        case 'Online_Test':
                            this.activeForm = 5;
                            break;
                        case 'Online_Class':
                            this.activeForm = 6;
                            break;
                        case 'Classroom_Class':
                            this.activeForm = 7;
                            break;
                        case 'Offline_Material':
                            this.activeForm = 8;
                            break;
                        case 'review':
                            this.activeForm = 9;
                            break;
                        default:
                            this.router.navigate(['/error404'], { replaceUrl: true });
                            break;
                    }
                }
                else {
                    this.activeForm = 1;
                }
            });
        }
        ngOnInit() {
            if (this.entity_id > 0) {
                this.initFormSequence();
            }
        }
        /** get product item details in  */
        getProductItemsData() {
            this.productItems = [];
            this.http.getMethod('master/item-type/get', null).subscribe((resp) => {
                let response = resp.result;
                if (resp.validate) {
                    this.productItems = response;
                    this.prodForm.product_item_stats = {};
                    this.productItems.forEach((element, index) => {
                        this.prodForm.product_item_stats[element.slug] = 0;
                    });
                    this.prodForm.product_items_types.forEach(se_state => {
                        this.productItems.forEach(actual_state => {
                            if (actual_state.entity_id == se_state.entity_id) {
                                this.prodForm.product_item_stats[actual_state.slug] = 1;
                            }
                        });
                    });
                    let keys = Object.keys(this.formSequence);
                    keys.forEach((element, index) => {
                        let i = index + 1;
                        this.formSequence[i].show = (this.prodForm.product_item_stats[this.formSequence[i].slug] > 0) ? true : false;
                    });
                    this.formSequence[1].show = true;
                    this.formSequence[9].show = true;
                }
                else {
                    this.msgService.showErrorMessage('error', response.errors.message, '');
                }
            }, (err) => {
                this.msgService.showErrorMessage('error', err['error'].errors.message, '');
            });
        }
        // get value of previedata and set
        previewSetter($event) {
            this.prodForm = $event;
            let keys = Object.keys(this.formSequence);
            keys.forEach((element, index) => {
                let i = index + 1;
                this.formSequence[i].show = (this.prodForm.product_item_stats[this.formSequence[i].slug] > 0) ? true : false;
            });
            this.formSequence[1].show = true;
            this.formSequence[9].show = true;
        }
        toggleLoader(show) {
            this.formLoading = show;
        }
        visitForm(form_id, data) {
            console.log(this.formSequence);
            let moveForward = false;
            for (let index = data.index - 1; index > 0; index--) {
                let form = this.formSequence[index];
                if (!form.show) {
                    continue;
                }
                else if (form.is_completed) {
                    moveForward = true;
                    break;
                }
                else {
                    break;
                }
            }
            if (!moveForward) {
                this.msgService.showErrorMessage('error', 'Please complete previous forms first', '');
            }
            else {
                let formUrl = this.formSequence[form_id].slug;
                this.router.navigate(['../' + formUrl], { relativeTo: this.route });
            }
        }
        startForm(data) {
            this.entity_id = data.entity_id;
            console.log('Called - ' + data.entity_id);
        }
        initFormSequence() {
            //Fetch Product Info
            this.http.getMethod('product/get/' + this.entity_id, null).subscribe((resp) => {
                if (resp.validate) {
                    let product = resp.result;
                    let keys = Object.keys(this.formSequence);
                    keys.forEach((element, index) => {
                        let i = index + 1;
                        this.formSequence[i].show = (product.product_item_stats[this.formSequence[i].slug] > 0) ? true : false;
                    });
                    this.formSequence[1].show = true;
                    this.formSequence[9].show = true;
                }
                else {
                    this.msgService.showErrorMessage('error', resp.errors.message, '');
                }
            }, (err) => {
                this.msgService.showErrorMessage('error', err['error'].errors.message, '');
            });
        }
        nextForm() {
            console.log('Called');
            // this.initFormSequence();
            this.formSequence[this.activeForm].is_completed = true;
            let index = this.activeForm + 1;
            for (; index <= Object.keys(this.formSequence).length; index++) {
                if (this.formSequence[index].show) {
                    break;
                }
                else {
                    continue;
                }
            }
            let nextFormUrl = this.formSequence[index].slug;
            this.router.navigate(['/view/e-store/create/' + this.entity_id + '/' + nextFormUrl]);
        }
    };
    ProductCreationComponent.ctorParameters = () => [
        { type: _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _services_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] },
        { type: _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _services_message_show_service__WEBPACK_IMPORTED_MODULE_2__["MessageShowService"] }
    ];
    ProductCreationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-creation',
            template: __importDefault(__webpack_require__(/*! raw-loader!./product-creation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/eStore-module/product-creation/product-creation.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./product-creation.component.scss */ "./src/app/components/eStore-module/product-creation/product-creation.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_node_modules_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"],
            _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_message_show_service__WEBPACK_IMPORTED_MODULE_2__["MessageShowService"]])
    ], ProductCreationComponent);
    return ProductCreationComponent;
})();



/***/ }),

/***/ "./src/app/components/eStore-module/product-creation/product.model.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/eStore-module/product-creation/product.model.ts ***!
  \****************************************************************************/
/*! exports provided: product_details */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "product_details", function() { return product_details; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

class product_details {
    constructor() {
        this.entity_id = null;
        this.created_date = "";
        this.updated_date = "";
        this.institute_id = "";
        this.is_active = "";
        this.title = "";
        this.logo_url = null;
        this.about = "";
        this.is_paid = true;
        this.price = 0.00;
        this.valid_from_date = moment__WEBPACK_IMPORTED_MODULE_0__().format('YYYY-MM-DD');
        this.valid_to_date = moment__WEBPACK_IMPORTED_MODULE_0__().format('YYYY-MM-DD');
        this.status = 10;
        this.purchase_limit = 0;
        this.product_ecourse_maps = [];
        this.product_items_types = [];
        this.product_item_stats = {
            study_material: 0,
            mock_test: 0,
            online_exams: 0,
            live_classes: 0,
            assignments: 0
        };
    }
}


/***/ }),

/***/ "./src/app/components/eStore-module/product-creation/review-product/review-product.component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/components/eStore-module/product-creation/review-product/review-product.component.scss ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* ===============================header colors=======================*/\n.table-format-first .table-responsive table th,\n.table-format-first .table-responsive table td {\n  text-align: center;\n  padding: 10px 5px;\n}\n.table-format-first .table-responsive table th {\n  text-transform: capitalize;\n  font-size: 14px;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper {\n  display: inline-block;\n  overflow: initial;\n  margin-left: 0;\n  width: auto;\n  position: relative;\n  background: transparent;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox {\n  z-index: 2;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label {\n  font-size: 16px;\n  margin-left: 7px;\n  font-weight: 600;\n  vertical-align: middle;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:after, .table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:before {\n  z-index: 1;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper:after {\n  content: '';\n  width: 20px;\n  height: 20px;\n  background: #fff;\n  left: 0;\n  top: 0;\n  position: absolute;\n}\n.table-format-first .table-responsive table tbody tr td .fa-trash-o {\n  color: #f44336;\n  font-size: 20px;\n}\n.table-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-top: 10px;\n}\n.table-container .heading-container {\n  background: #e0eaec;\n  display: flex;\n  flex-direction: row;\n  font-size: 14px;\n  font-weight: 600;\n  text-align: left;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n}\n.table-container .heading-container .heading-item {\n  width: 10%;\n  text-align: center;\n}\n.table-container .value-outer-container {\n  display: flex;\n  flex-direction: column;\n  min-height: 53vh;\n  max-height: 54vh;\n  overflow-x: hidden;\n  overflow-y: auto;\n  border: 1px solid #ccc;\n}\n.table-container .value-outer-container .value-container {\n  display: flex;\n  flex-direction: row;\n  text-align: left;\n  padding: 4px;\n  font-size: 12px;\n  border-bottom: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n  border-top: none;\n}\n.table-container .value-outer-container .value-container .value-item {\n  width: 10%;\n  text-align: center;\n}\n.review-title {\n  font-size: 14px;\n  font-weight: 600;\n  padding-bottom: 10px;\n}\n.basic-info-footer {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  border-top: 1pt solid #f3f3f3;\n  padding: .5em .8em;\n  background: #fff;\n  box-shadow: 0 -2pt 6pt #e6e6e6;\n  z-index: 5;\n  background: #fafafa;\n  width: 85.5%;\n  margin-left: 14.5%;\n}\n.basic-info-footer .btn-round {\n  padding: .2em 1em;\n  border-radius: 4px;\n  margin: .2em;\n}\n.row {\n  margin-left: 0;\n  margin-right: 0;\n}\n.qInfoIcon {\n  width: 20px;\n  margin-left: 5px;\n  height: 20px;\n  border: 1px solid #ccc;\n  border-radius: 50%;\n  display: block;\n  text-align: center;\n  box-sizing: border-box;\n  line-height: 20px;\n  font-weight: 600;\n  font-size: 12px;\n  cursor: pointer;\n  box-shadow: 0 0 1px 0 #ccc inset;\n  color: #888;\n  transition: all .2s linear;\n}\n.qInfoIcon:hover {\n  border-color: #0060A3;\n  box-shadow: 0 0 1px 0 #0060A3 inset;\n  color: #0060A3;\n}\n.black-bg {\n  background: rgba(12, 11, 11, 0.3);\n  position: fixed;\n  top: 0;\n  height: 100%;\n  left: 0;\n  z-index: 6;\n  width: 100%;\n}\n.prod-image {\n  max-height: 150px;\n}\n.datePickerBox .form-ctrl {\n  position: relative;\n  z-index: 1;\n  float: left;\n  font: 400 12px 'Open sans',sans-serif;\n  width: 100% !important;\n}\n.datePickerBox:after {\n  content: '';\n  background: url('calendar.svg') no-repeat;\n  position: absolute;\n  left: 87% !important;\n  top: 22px !important;\n  width: 21px;\n  height: 21px;\n  z-index: 0;\n}\n.image-upload > input {\n  display: none;\n}\n.image-upload img {\n  width: 150px;\n  cursor: pointer;\n  height: 100px;\n  border-radius: 10px;\n}\n.image-upload:hover .overlay {\n  opacity: .5;\n}\ninput[type=\"text\"][disabled] {\n  background: #dddddd !important;\n}\n.form-ctrl {\n  display: block;\n  width: 100%;\n  height: 34px;\n  padding: 6px 12px;\n  font-size: 14px;\n  line-height: 1.42857143;\n  color: #555;\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY3NzL2NvbW1vbi92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9lU3RvcmUtbW9kdWxlL3Byb2R1Y3QtY3JlYXRpb24vcmV2aWV3LXByb2R1Y3QvcmV2aWV3LXByb2R1Y3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWUEsdUVBQUE7QUFXQTs7RUFLZ0Isa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQ3hCakM7QURrQkE7RUFTZ0IsMEJBQTBCO0VBQzFCLGVBQWU7QUN2Qi9CO0FEYUE7RUFnQjRCLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsdUJBQXVCO0FDekJuRDtBRElBO0VBdUJnQyxVQUFVO0FDdkIxQztBREFBO0VBMEJnQyxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixzQkFBc0I7QUN0QnREO0FEUEE7RUFnQ29DLFVBQVU7QUNyQjlDO0FEWEE7RUFvQ2dDLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixPQUFPO0VBQ1AsTUFBTTtFQUNOLGtCQUFrQjtBQ3JCbEQ7QURyQkE7RUE4QzRCLGNBbERiO0VBbURhLGVBQWU7QUNyQjNDO0FEOEJBO0VBQ0ksYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsZ0JBQWdCO0FDM0JwQjtBRHVCQTtFQU1NLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLHlCQUF5QjtBQ3pCL0I7QURVQTtFQWlCUSxVQUFVO0VBQ1Ysa0JBQWtCO0FDdkIxQjtBREtBO0VBc0JNLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtBQ3ZCNUI7QURMQTtFQThCUSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZUFBZTtFQUNmLDZCQUE2QjtFQUM3QixvQkFBb0I7RUFDcEIseUJBQXlCO0VBQ3pCLGdCQUFnQjtBQ3JCeEI7QURqQkE7RUF3Q1UsVUFBVTtFQUNWLGtCQUFrQjtBQ25CNUI7QUFuR0E7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtBQXNHdEI7QUFuR0E7RUFDRSxlQUFlO0VBQ2YsU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0VBQ1IsNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsOEJBQThCO0VBQzlCLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGtCQUFrQjtBQXNHcEI7QUFsSEE7RUFjSSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFlBQVk7QUF3R2hCO0FBcEdBO0VBQ0UsY0FBYztFQUNkLGVBQWU7QUF1R2pCO0FBcEdBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixlQUFlO0VBQ2YsZ0NBQWdDO0VBQ2hDLFdBQVc7RUFDWCwwQkFBMEI7QUF1RzVCO0FBdEhBO0VBa0JJLHFCRHJDYztFQ3NDZCxtQ0FBc0M7RUFDdEMsY0R2Q2M7QUMrSWxCO0FBcEdBO0VBQ0UsaUNBQWlDO0VBQ2pDLGVBQWU7RUFDZixNQUFNO0VBQ04sWUFBWTtFQUNaLE9BQU87RUFDUCxVQUFVO0VBQ1YsV0FBVztBQXVHYjtBQXBHQTtFQUNFLGlCQUFpQjtBQXVHbkI7QUFwR0E7RUFFSSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7RUFHWCxxQ0FBcUM7RUFDckMsc0JBQXNCO0FBb0cxQjtBQTVHQTtFQVlJLFdBQVc7RUFDWCx5Q0FBc0U7RUFDdEUsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixvQkFBb0I7RUFDcEIsV0FBVztFQUNYLFlBQVk7RUFDWixVQUFVO0FBb0dkO0FBaEdBO0VBRUksYUFBYTtBQWtHakI7QUEvRkE7RUFFSSxZQUFZO0VBQ1osZUFBZTtFQUNmLGFBQWE7RUFDYixtQkFBbUI7QUFpR3ZCO0FBOUZBO0VBQ0UsV0FBVztBQWlHYjtBQS9GQTtFQUNFLDhCQUE4QjtBQWtHaEM7QUFoR0E7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBbUdwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZVN0b3JlLW1vZHVsZS9wcm9kdWN0LWNyZWF0aW9uL3Jldmlldy1wcm9kdWN0L3Jldmlldy1wcm9kdWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHB1bGwtTDogbGVmdDtcbiRwdWxsLVI6IHJpZ2h0O1xuJHB1bGwtbm9uZTogbm9uZTtcbiRmdWxsLXdpZHRoOiAxMDAlO1xuJGJvcmRlci1ib3g6IGJvcmRlci1ib3g7XG4kYm9yZGVyLWNvbG9yOiAjZGVlYWVlO1xuJGJnLXdoaXRlOiAjZmZmO1xuJGVycm9yLWNvbG9yOiAjZmYwMDAwO1xuJGNvbW1vbi1ibHVlOiAjMDA4NGY2O1xuJHByaW1hcnktY29sb3I6ICMzMzM7XG4kYm9yZGVyLWNvbW1vbjojZWFlYWViO1xuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09aGVhZGVyIGNvbG9ycz09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuJGhlYWRlci1iZzojMDA2MEEzO1xuJGhlYWRlci1ib3JkZXI6I2VhZWFlYjtcbiRsZWZ0TWVudUJnOiNmYWZhZmE7XG4kbGVmdE1lbnVIb3ZlckJnOiMwMDg0ZjY7XG4kbGVmdE1lbnVUZXh0SG92ZXJDb2xvcjojZmZmO1xuJHJlZEJ0bjojZjQ0MzM2O1xuJGJvcmRlcmNjYzojY2NjO1xuJGxpZ2h0Qmx1ZTojZWZmN2ZmO1xuJHRhYmxlSGVhZGluZ0JnQ29sb3I6ICMwMDRhN2U7XG4udGFibGUtZm9ybWF0LWZpcnN0IHtcbiAgICAudGFibGUtcmVzcG9uc2l2ZSB7XG4gICAgICAgIHRhYmxlIHtcbiAgICAgICAgICAgIHRoLFxuICAgICAgICAgICAgdGQge1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoIHtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0Ym9keSB7XG4gICAgICAgICAgICAgICAgdHIge1xuICAgICAgICAgICAgICAgICAgICB0ZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuZmllbGQtY2hlY2tib3gtd3JhcHBlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBpbml0aWFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZm9ybS1jaGVja2JveCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mb3JtLWNoZWNrYm94K2xhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogN3B4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmFmdGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLmZhLXRyYXNoLW8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkcmVkQnRuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnRhYmxlLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgLmhlYWRpbmctY29udGFpbmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICNlMGVhZWM7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgICAuaGVhZGluZy1pdGVtIHtcbiAgICAgICAgd2lkdGg6IDEwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgIH1cbiAgICAudmFsdWUtb3V0ZXItY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgbWluLWhlaWdodDogNTN2aDtcbiAgICAgIG1heC1oZWlnaHQ6IDU0dmg7XG4gICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgIC52YWx1ZS1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgICAgICBib3JkZXItdG9wOiBub25lO1xuICAgICAgICAudmFsdWUtaXRlbSB7XG4gICAgICAgICAgd2lkdGg6IDEwJTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0iLCJAaW1wb3J0IFwiLi9zcmMvYXNzZXRzL2Nzcy9jb21tb24vdmFyaWFibGVzLnNjc3NcIjtcblxuLnJldmlldy10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbi5iYXNpYy1pbmZvLWZvb3RlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm9yZGVyLXRvcDogMXB0IHNvbGlkICNmM2YzZjM7XG4gIHBhZGRpbmc6IC41ZW0gLjhlbTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAtMnB0IDZwdCAjZTZlNmU2O1xuICB6LWluZGV4OiA1O1xuICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xuICB3aWR0aDogODUuNSU7XG4gIG1hcmdpbi1sZWZ0OiAxNC41JTtcbiAgLmJ0bi1yb3VuZCB7XG4gICAgcGFkZGluZzogLjJlbSAxZW07XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIG1hcmdpbjogLjJlbTtcbiAgfVxufVxuXG4ucm93IHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cblxuLnFJbmZvSWNvbiB7XG4gIHdpZHRoOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3gtc2hhZG93OiAwIDAgMXB4IDAgI2NjYyBpbnNldDtcbiAgY29sb3I6ICM4ODg7XG4gIHRyYW5zaXRpb246IGFsbCAuMnMgbGluZWFyO1xuXG4gICY6aG92ZXIge1xuICAgIGJvcmRlci1jb2xvcjogJGhlYWRlci1iZztcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4IDAgJGhlYWRlci1iZyBpbnNldDtcbiAgICBjb2xvcjogJGhlYWRlci1iZztcbiAgfVxufVxuXG4uYmxhY2stYmcge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDEyLCAxMSwgMTEsIDAuMyk7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDY7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucHJvZC1pbWFnZSB7XG4gIG1heC1oZWlnaHQ6IDE1MHB4O1xufVxuXG4uZGF0ZVBpY2tlckJveCB7XG4gIC5mb3JtLWN0cmwge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAxO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIC8vIGJvcmRlci1yaWdodDogMDtcbiAgICAvLyBoZWlnaHQ6IDM1cHg7XG4gICAgZm9udDogNDAwIDEycHggJ09wZW4gc2Fucycsc2Fucy1zZXJpZjtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB9XG5cbiAgJjphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2NhbGVuZGFyLnN2ZycpIG5vLXJlcGVhdDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogODclICFpbXBvcnRhbnQ7XG4gICAgdG9wOiAyMnB4ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDIxcHg7XG4gICAgaGVpZ2h0OiAyMXB4O1xuICAgIHotaW5kZXg6IDA7XG4gIH1cbn1cblxuLmltYWdlLXVwbG9hZCA+IGlucHV0XG57XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLmltYWdlLXVwbG9hZCBpbWdcbntcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmltYWdlLXVwbG9hZDpob3ZlciAub3ZlcmxheSB7XG4gIG9wYWNpdHk6IC41O1xufVxuaW5wdXRbdHlwZT1cInRleHRcIl1bZGlzYWJsZWRde1xuICBiYWNrZ3JvdW5kOiAjZGRkZGRkICFpbXBvcnRhbnQ7XG59XG4uZm9ybS1jdHJse1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzRweDtcbiAgcGFkZGluZzogNnB4IDEycHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDM7XG4gIGNvbG9yOiAjNTU1O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/eStore-module/product-creation/review-product/review-product.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/components/eStore-module/product-creation/review-product/review-product.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: ReviewProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewProductComponent", function() { return ReviewProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/authenticator.service */ "./src/app/services/authenticator.service.ts");
/* harmony import */ var _services_message_show_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/message-show.service */ "./src/app/services/message-show.service.ts");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/products.service */ "./src/app/services/products.service.ts");
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






let ReviewProductComponent = /** @class */ (() => {
    let ReviewProductComponent = class ReviewProductComponent {
        constructor(http, msgService, router, auth) {
            this.http = http;
            this.msgService = msgService;
            this.router = router;
            this.auth = auth;
            this.isAdvanceProductEdit = false;
            this.nextForm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.startForm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.toggleLoader = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.previewEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.products_ecourse_maps = [];
            this.ecourseList = [];
            this.mock_count = 0;
            this.online_count = 0;
            this.image_url = null;
            this.moderatorSettings = {
                singleSelection: false,
                idField: 'course_type_id',
                textField: 'course_type',
                enableCheckAll: false
            };
            this.advanceProduct = {
                forStudent: true,
                forOpenUser: true
            };
            this.countryDetails = [];
            this.editorConf = {
                height: 150,
                menubar: false,
                branding: false,
                plugins: [
                    'preview anchor',
                    'visualblocks code ',
                    'insertdatetime  table paste code  wordcount'
                ],
                toolbar: 'undo redo | formatselect | bold italic backcolor | \
              alignleft aligncenter alignright alignjustify | \
              bullist numlist outdent indent'
            };
        }
        ngOnInit() {
            this.fetchDataForCountryDetails();
            if (this.entity_id != 0) {
                this.initFormSequence();
            }
            this.initDataEcourse();
            this.initForm();
            console.log(this.prodForm, this.entity_id);
        }
        initForm() {
            //Fetch Product Groups List
            if (this.entity_id && this.entity_id.length > 0 && (!this.auth.isRippleLoad.getValue())) {
                //Fetch Product Info
                this.auth.showLoader();
                this.http.getMethod('product/get/' + this.entity_id, null).subscribe((resp) => {
                    this.auth.hideLoader();
                    let response = resp.result;
                    if (resp.validate) {
                        let productData = response;
                        this.prodForm = response;
                        this.prodForm.product_item_stats = {};
                        if (this.prodForm.product_user_type == 8) {
                            this.advanceProduct.forStudent = true;
                            this.advanceProduct.forOpenUser = true;
                        }
                        else if (this.prodForm.product_user_type == 16) {
                            this.advanceProduct.forStudent = false;
                            this.advanceProduct.forOpenUser = false;
                        }
                        else if (this.prodForm.product_user_type == 2) {
                            this.advanceProduct.forStudent = true;
                            this.advanceProduct.forOpenUser = false;
                        }
                        else if (this.prodForm.product_user_type == 4) {
                            this.advanceProduct.forStudent = false;
                            this.advanceProduct.forOpenUser = true;
                        }
                        this.prodForm.product_items_types.forEach(element => {
                            this.prodForm.product_item_stats[element.slug] = true;
                        });
                        this.mock_count = 0;
                        this.online_count = 0;
                        this.prodForm.product_item_list.forEach((data) => {
                            if (data.slug == 'Mock_Test') {
                                this.mock_count++;
                            }
                            if (data.slug == 'Online_Test') {
                                this.online_count++;
                            }
                        });
                        this.updateProductItemStates(null, null);
                    }
                    else {
                        this.msgService.showErrorMessage('error', response.errors.message, '');
                    }
                }, (err) => {
                    this.auth.hideLoader();
                    this.msgService.showErrorMessage('error', err['error'].errors.message, '');
                });
            }
        }
        calc() {
            if (this.prodForm.discount_percentage < 0 || this.prodForm.discount_percentage > 100) {
                this.msgService.showErrorMessage('error', 'Discount should be greater than 0 and less than 100', '');
            }
            else {
                this.prodForm.price = Math.round(((this.prodForm.price_before_discount) - ((this.prodForm.price_before_discount * this.prodForm.discount_percentage) / 100)));
            }
        }
        // calc_days() {
        //   return (this.prodForm.valid_from_date != '' && this.prodForm.valid_to_date != '') ? Math.ceil(Math.abs((new Date(this.prodForm.valid_to_date).getTime()) - (new Date(this.prodForm.valid_from_date).getTime())) / (1000 * 3600 * 24)) : 'NA';
        // }
        initDataEcourse() {
            if (!this.auth.isRippleLoad.getValue()) {
                this.auth.showLoader();
                this.http.getMethod('ext/get-ecources', null).subscribe((resp) => {
                    this.auth.hideLoader();
                    let response = JSON.parse(resp.result);
                    console.log(resp);
                    if (resp.validate) {
                        this.ecourseList = response;
                    }
                    else {
                        this.msgService.showErrorMessage('error', response.errors.message, '');
                    }
                }, (err) => {
                    this.auth.hideLoader();
                    // this.msgService.showErrorMessage('error', err['error'].errors.message, '');
                });
            }
        }
        fetchDataForCountryDetails() {
            let encryptedData = sessionStorage.getItem('country_data');
            let data = JSON.parse(encryptedData);
            if (data.length > 0) {
                this.countryDetails = data;
                console.log("countryDetails", this.countryDetails);
            }
        }
        initFormSequence() {
            if (this.entity_id && this.entity_id.length > 0 && (!this.auth.isRippleLoad.getValue())) {
                //Fetch Product Info
                this.auth.showLoader();
                this.http.getMethod('product/get/' + this.entity_id, null).subscribe((resp) => {
                    this.auth.hideLoader();
                    let response = resp.result;
                    if (resp.validate) {
                        let productData = response;
                        this.prodForm = productData;
                        if (!(this.prodForm.tag === 'Featured' || this.prodForm.tag === 'Recommended' || this.prodForm.tag === 'Popular' || this.prodForm.tag === 'Others' || this.prodForm.tag == null)) {
                            this.others = this.prodForm.tag;
                            this.prodForm.tag = "Others";
                        }
                        this.prodForm.country_id = this.prodForm.country_id;
                        this.countryDetails.forEach(element => {
                            if (element.id == this.prodForm.country_id) {
                                this.prodForm.country_id = element.id;
                            }
                        });
                        this.prodForm.is_paid = this.prodForm.is_paid == 'Y' ? 0 : 1;
                        this.prodForm.is_duration = this.prodForm.duration == 0 ? false : true;
                        // alert(this.prodForm.valid_from_date);
                        this.prodForm.valid_from_date = moment__WEBPACK_IMPORTED_MODULE_2__(this.prodForm.valid_from_date).format('YYYY-MM-DD');
                        // alert(this.prodForm.valid_to_date);
                        this.prodForm.valid_to_date = moment__WEBPACK_IMPORTED_MODULE_2__(this.prodForm.valid_to_date).format('YYYY-MM-DD');
                        this.prodForm.sales_from_date = moment__WEBPACK_IMPORTED_MODULE_2__(this.prodForm.sales_from_date).format('YYYY-MM-DD');
                        this.prodForm.sales_to_date = moment__WEBPACK_IMPORTED_MODULE_2__(this.prodForm.sales_to_date).format('YYYY-MM-DD');
                        this.prodForm.product_item_stats = {};
                        this.isAdvanceProductEdit = (this.prodForm.is_advance_product && this.prodForm.status == 30) ? true : false;
                        // -- added by laxmi
                        // this code is used to laod image url dynamically not save in locally dont remove it
                        this.image_url = response.photo_url ? response.photo_url + "?t=" + new Date().getTime() : null;
                        this.prodForm.logo_url = response.logo_url;
                        this.prodForm.photo_url = response.photo_url;
                        this.prodForm.product_items_types.forEach(element => {
                            this.prodForm.product_item_stats[element.slug] = true;
                        });
                        if (this.prodForm.product_user_type == 8) {
                            this.advanceProduct.forStudent = true;
                            this.advanceProduct.forOpenUser = true;
                        }
                        else if (this.prodForm.product_user_type == 16) {
                            this.advanceProduct.forStudent = false;
                            this.advanceProduct.forOpenUser = false;
                        }
                        else if (this.prodForm.product_user_type == 2) {
                            this.advanceProduct.forStudent = true;
                            this.advanceProduct.forOpenUser = false;
                        }
                        else if (this.prodForm.product_user_type == 4) {
                            this.advanceProduct.forStudent = false;
                            this.advanceProduct.forOpenUser = true;
                        }
                        this.mock_count = 0;
                        this.online_count = 0;
                        this.prodForm.product_item_list.forEach((data) => {
                            if (data.slug == 'Mock_Test') {
                                this.mock_count++;
                            }
                            if (data.slug == 'Online_Test') {
                                this.online_count++;
                            }
                        });
                        this.updateProductItemStates(null, null);
                        this.products_ecourse_maps = [];
                        this.prodForm.product_ecourse_maps.forEach((object) => {
                            let obj = { course_type: object.course_type, course_type_id: object.course_type_id };
                            this.products_ecourse_maps.push(obj);
                        });
                    }
                    else {
                        this.msgService.showErrorMessage('error', response.errors.message, '');
                    }
                }, (err) => {
                    this.auth.hideLoader();
                    this.msgService.showErrorMessage('error', err['error'].errors.message, '');
                });
            }
        }
        uploadHandler(Input) {
            const files = Input.target.files;
            if (files.length) {
                let pattern = /([a-zA-Z0-9\s_\\.\-\(\):])+(.gif|.png|.jpg|.jpeg)$/i;
                if (!pattern.test(files[0].name)) {
                    this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', "please select product image ");
                    return;
                }
                let fileInfoJson = { "institute_id": sessionStorage.getItem("institute_id"), "product_id": this.prodForm.entity_id };
                let formData = new FormData();
                formData.append("file", Input.target.files[0]);
                formData.append("fileInfoJson", JSON.stringify(fileInfoJson));
                const base = this.auth.getBaseUrl();
                const urlPostXlsDocument = base + "/api/v1/instFileSystem/fileUpload";
                let newxhr = new XMLHttpRequest();
                let auths = {
                    userid: sessionStorage.getItem('userid'),
                    userType: sessionStorage.getItem('userType'),
                    password: sessionStorage.getItem('password'),
                    institution_id: sessionStorage.getItem('institute_id'),
                };
                const Authorization = btoa(auths.userid + "|" + auths.userType + ":" + auths.password + ":" + auths.institution_id);
                newxhr.open("POST", urlPostXlsDocument, true);
                newxhr.setRequestHeader("Authorization", Authorization);
                newxhr.setRequestHeader("enctype", "multipart/form-data;");
                newxhr.setRequestHeader("Accept", "application/json, text/javascript");
                newxhr.setRequestHeader("Access-Control-Allow-Origin", "*");
                this.auth.showLoader();
                newxhr.onreadystatechange = () => {
                    if (newxhr.readyState == 4) {
                        if (newxhr.status >= 200 && newxhr.status < 300) {
                            this.auth.hideLoader();
                            let res = JSON.parse(newxhr.response);
                            this.image_url = res.photo_url ? res.photo_url + "?t=" + new Date().getTime() : null;
                            this.prodForm.logo_url = res.thumbnail_url;
                            this.prodForm.photo_url = res.photo_url;
                            this.msgService.showErrorMessage('success', '', 'File uploaded successfully');
                        }
                        else {
                            this.auth.hideLoader();
                            // this.msgService.showErrorMessage('error', err['error'].errors.message, '');
                        }
                    }
                };
                newxhr.send(formData);
            }
        }
        saveProduct() {
            if (this.prodForm.title == "" ||
                this.prodForm.title == null) {
                this.msgService.showErrorMessage('error', 'title should not be shorter than one characters', '');
                return;
            }
            if (this.prodForm.purchase_limit == 0) {
                this.msgService.showErrorMessage('error', 'product sell limit should be greater than zero', '');
                return;
            }
            if (this.prodForm.country_id == 0) {
                this.msgService.showErrorMessage('error', 'product sell limit should be greater than zero', '');
                return;
            }
            if (this.prodForm.duration <= 0 && this.prodForm.is_duration) {
                this.msgService.showErrorMessage('error', 'please enter product duration ', '');
                return;
            }
            if (this.prodForm.about.length > 10000) {
                this.msgService.showErrorMessage('error', 'allowed description limit is 10000 characters', '');
                return;
            }
            if (!this.prodForm.is_duration) {
                this.prodForm.duration = 0;
                this.prodForm.valid_from_date = moment__WEBPACK_IMPORTED_MODULE_2__(this.prodForm.valid_from_date).format("YYYY-MM-DD");
                this.prodForm.valid_to_date = moment__WEBPACK_IMPORTED_MODULE_2__(this.prodForm.valid_to_date).format("YYYY-MM-DD");
            }
            else {
                this.prodForm.valid_from_date = null;
                this.prodForm.valid_to_date = null;
            }
            let productFor = 16;
            if (this.advanceProduct.forStudent && this.advanceProduct.forOpenUser) {
                productFor = 8;
            }
            else if (this.advanceProduct.forStudent) {
                productFor = 2;
            }
            else if (this.advanceProduct.forOpenUser) {
                productFor = 4;
            }
            this.prodForm.product_user_type = productFor;
            if (this.prodForm.tag === "Others") {
                this.prodForm.tag = this.others;
            }
            this.prodForm.is_paid = Math.round(((this.prodForm.price_before_discount) - ((this.prodForm.price_before_discount * this.prodForm.discount_percentage) / 100))) ? 'Y' : 'N';
            this.prodForm.price = Math.round(((this.prodForm.price_before_discount) - ((this.prodForm.price_before_discount * this.prodForm.discount_percentage) / 100))) ? Math.round(((this.prodForm.price_before_discount) - ((this.prodForm.price_before_discount * this.prodForm.discount_percentage) / 100))) : 0;
            let object = {
                "entity_id": this.prodForm.entity_id,
                "title": this.prodForm.title,
                "institute_id": sessionStorage.getItem('institute_id'),
                "logo_url": this.prodForm.logo_url,
                "photo_url": this.prodForm.photo_url,
                "about": this.prodForm.about,
                "is_paid": this.prodForm.is_paid,
                "is_advance_product": this.prodForm.is_advance_product,
                "price": this.prodForm.price,
                "valid_from_date": this.prodForm.valid_from_date,
                "valid_to_date": this.prodForm.valid_to_date,
                "sales_from_date": moment__WEBPACK_IMPORTED_MODULE_2__(this.prodForm.sales_from_date).format("YYYY-MM-DD"),
                "sales_to_date": moment__WEBPACK_IMPORTED_MODULE_2__(this.prodForm.sales_to_date).format("YYYY-MM-DD"),
                "purchase_limit": this.prodForm.purchase_limit,
                "status": this.prodForm.status,
                "duration": this.prodForm.duration,
                "product_ecourse_maps": this.products_ecourse_maps,
                "product_items_types": this.prodForm.product_items_types,
                "product_item_list": this.prodForm.product_item_list,
                "publish_date": this.prodForm.publish_date,
                "product_user_type": this.prodForm.product_user_type,
                "discount_percentage": this.prodForm.discount_percentage,
                "price_before_discount": this.prodForm.price_before_discount,
                "start_index_for_total_prod_purchase": this.prodForm.start_index_for_total_prod_purchase,
                "tag": this.prodForm.tag,
                "country_id": this.prodForm.country_id,
            };
            this.updateProduct(object);
        }
        updateProduct(object) {
            let body = JSON.parse(JSON.stringify(object));
            if (!this.auth.isRippleLoad.getValue()) {
                this.auth.showLoader();
                this.http.postMethod('product/update', body).then((resp) => {
                    this.auth.hideLoader();
                    let data = resp['body'];
                    if (data.validate) {
                        this.msgService.showErrorMessage('success', "product updated successfully", '');
                        this.gotoBack();
                    }
                    else {
                        this.msgService.showErrorMessage('error', resp.body.error[0].error_message, '');
                    }
                }, (err) => {
                    this.auth.hideLoader();
                    this.msgService.showErrorMessage('error', err.error.error[0].error_message, '');
                    this.prodForm.is_paid = this.prodForm.is_paid == 'Y' ? 0 : 1;
                });
            }
        }
        // update parent state data
        updateProductItemStates(event, item) {
            if (item) {
                this.prodForm.product_item_stats[item.slug] = event ? 1 : 0;
            }
            // console.log(this.prodForm);
            this.previewEvent.emit(this.prodForm);
        }
        gotoBack() {
            this.router.navigateByUrl('/view/e-store/details');
        }
    };
    ReviewProductComponent.ctorParameters = () => [
        { type: _services_products_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"] },
        { type: _services_message_show_service__WEBPACK_IMPORTED_MODULE_4__["MessageShowService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"] }
    ];
    ReviewProductComponent.propDecorators = {
        entity_id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        prodForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        nextForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        startForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        toggleLoader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        previewEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    ReviewProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-review-product',
            template: __importDefault(__webpack_require__(/*! raw-loader!./review-product.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/eStore-module/product-creation/review-product/review-product.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./review-product.component.scss */ "./src/app/components/eStore-module/product-creation/review-product/review-product.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_services_products_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"],
            _services_message_show_service__WEBPACK_IMPORTED_MODULE_4__["MessageShowService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"]])
    ], ReviewProductComponent);
    return ReviewProductComponent;
})();



/***/ }),

/***/ "./src/app/components/eStore-module/product-creation/study-material/study-material.component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/components/eStore-module/product-creation/study-material/study-material.component.scss ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".basic-info-footer {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  border-top: 1pt solid #f3f3f3;\n  padding: 0.5em 0.8em;\n  background: #fff;\n  box-shadow: 0pt -2pt 6pt #e6e6e6;\n  z-index: 5;\n  background: #fafafa;\n  width: 85.5%;\n  margin-left: 14.5%;\n}\n\n.basic-info-footer .btn-round {\n  padding: 0.2em 1em;\n  border-radius: 4px;\n  margin: 0.2em;\n}\n\n.black-bg {\n  background: rgba(12, 11, 11, 0.3);\n  position: fixed;\n  top: 0px;\n  height: 100%;\n  left: 0px;\n  z-index: 6;\n  width: 100%;\n}\n\n.row {\n  margin-left: 0px;\n  margin-right: 0px;\n}\n\n.row {\n  margin: 0;\n}\n\n.text-red {\n  color: red;\n}\n\n.text-blue {\n  color: #2680eb;\n}\n\n.img-color {\n  color: blueviolet;\n}\n\n.doc-color {\n  color: #3d89f0;\n}\n\n.assign-color {\n  color: #c59441;\n}\n\n.btn-ga-white-download {\n  color: #555;\n}\n\n.txt-notes {\n  color: #3d89f0;\n}\n\n.audio-color {\n  color: #9968be;\n}\n\n.pdf-color {\n  color: #d55252;\n}\n\n.topic-name {\n  color: #000;\n  font-weight: bold;\n}\n\n.epub-color {\n  color: #2bc38a;\n}\n\ni.fa {\n  margin-right: .4em;\n  margin-left: .9em;\n  font-size: 18px;\n}\n\n.txt-color {\n  color: #3f2e2e !important;\n  text-decoration: none;\n}\n\n.txt-color .txt-title {\n  font-weight: 400;\n  font-size: 12px;\n  display: inline-block;\n  overflow: hidden;\n  width: 72%;\n  text-overflow: ellipsis;\n  line-height: 15px;\n  white-space: nowrap;\n}\n\n.txt-font {\n  font-size: 12px;\n}\n\n.btn-ga-collapse {\n  vertical-align: middle;\n  background: transparent;\n}\n\n.btn-ga-collapse:hover {\n  color: #3f2e2e;\n}\n\n.btn-ga-white {\n  padding: .2em .8em;\n  height: auto;\n  box-shadow: 1pt 1pt 0 #f1f1f1;\n  color: #555;\n}\n\n.btn-ga-white:hover {\n  color: #07f;\n}\n\n.btn-ga-white:focus {\n  outline: none;\n}\n\n.btn-ga-white:active {\n  box-shadow: none;\n  color: #fff;\n  background: #0084f6;\n  border: 1px solid #0084f6;\n}\n\n.btn-xs {\n  font-size: .8em;\n}\n\n.field-checkbox-wrapper,\n.field-radio-wrapper {\n  position: absolute;\n  margin-left: -0.6em;\n}\n\n.singleton-row .action-buttons {\n  visibility: hidden;\n}\n\n.singleton-row:hover {\n  background: #ebf6ff;\n}\n\n.singleton-row:hover .action-buttons {\n  visibility: visible;\n}\n\n.material-row,\n.topic-data {\n  padding-left: 1.2em !important;\n}\n\n.main-topic-row {\n  padding: 0;\n  margin: 1em 0;\n  border: 1pt solid #ddd;\n  background: white;\n}\n\n.topic-row {\n  padding: 0;\n}\n\n.topic-data {\n  border-top: 1px solid #eee;\n  padding: .4em 0;\n  display: flex;\n}\n\n.topic-data .topic-name {\n  margin: auto;\n}\n\n.main-topic-data {\n  color: #000;\n  font-weight: bold;\n  padding-left: 0 !important;\n}\n\n.topic-material-data {\n  padding: 0;\n}\n\n.topic-material-data .material-row {\n  border-top: 1px solid #eee;\n  padding: .4em 0;\n  display: flex;\n}\n\n.topic-material-data .material-row .material-title {\n  margin: auto;\n  display: inline-block;\n  line-height: 15px;\n  padding: 0 7px;\n  word-wrap: break-word;\n}\n\n.subTopics-data {\n  padding: 0;\n}\n\n.ga-modal-wrapper {\n  right: 0;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  background: rgba(136, 136, 136, 0.6);\n  z-index: 999;\n}\n\n.ga-modal-wrapper .ga-modal-container {\n  display: flex;\n  overflow-y: auto;\n  height: 100%;\n}\n\n.ga-modal-wrapper .ga-modal-container .ga-modal {\n  margin: auto;\n  background: #fff;\n  border: 2pt solid #fff;\n  border-radius: .2em;\n  box-shadow: 0 2pt 3pt #999;\n  min-width: 30%;\n}\n\n.ga-modal-wrapper .ga-modal-container .ga-modal .ga-modal-head {\n  padding: .5em 1em;\n  border-bottom: 1pt solid #ddd;\n  font-weight: bold;\n  text-align: center;\n}\n\n.ga-modal-wrapper .ga-modal-container .ga-modal .ga-modal-body {\n  padding: 1em;\n  text-align: center;\n}\n\n.p-0 {\n  padding: 0 !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lU3RvcmUtbW9kdWxlL3Byb2R1Y3QtY3JlYXRpb24vc3R1ZHktbWF0ZXJpYWwvc3R1ZHktbWF0ZXJpYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUE7RUFDSSxlQUFlO0VBQ2YsU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0VBQ1IsNkJBQTZCO0VBQzdCLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsZ0NBQWdDO0VBQ2hDLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGtCQUFrQjtBQUx0Qjs7QUFQQTtFQWNRLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsYUFBYTtBQUhyQjs7QUFPQTtFQUNFLGlDQUFpQztFQUNqQyxlQUFlO0VBQ2YsUUFBUTtFQUNSLFlBQVk7RUFDWixTQUFTO0VBQ1QsVUFBVTtFQUNWLFdBQVc7QUFKYjs7QUFPQTtFQUNJLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFKckI7O0FBT0E7RUFDSSxTQUFTO0FBSmI7O0FBT0U7RUFDRSxVQUFVO0FBSmQ7O0FBT0U7RUFDRSxjQUFjO0FBSmxCOztBQU1FO0VBQ0UsaUJBQWlCO0FBSHJCOztBQU1FO0VBQ0UsY0FBYztBQUhsQjs7QUFNRTtFQUNFLGNBQWM7QUFIbEI7O0FBTUU7RUFDRSxXQUFXO0FBSGY7O0FBS0U7RUFDRSxjQUFjO0FBRmxCOztBQUtFO0VBQ0UsY0FBYztBQUZsQjs7QUFLRTtFQUNFLGNBQWM7QUFGbEI7O0FBSUU7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0FBRHJCOztBQUdFO0VBQ0UsY0FBYTtBQUFqQjs7QUFHRTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZUFBZTtBQUFuQjs7QUFHRTtFQUNFLHlCQUF5QjtFQUN6QixxQkFBcUI7QUFBekI7O0FBRkU7RUFJSSxnQkFBZ0I7RUFDaEIsZUFBYztFQUNkLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsbUJBQW1CO0FBRXpCOztBQUVFO0VBQ0UsZUFBYztBQUNsQjs7QUFDRTtFQUNFLHNCQUFzQjtFQUN0Qix1QkFBdUI7QUFFM0I7O0FBSkU7RUFLSSxjQUFjO0FBR3BCOztBQUNFO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IsV0FBVztBQUVmOztBQU5FO0VBT0ksV0FBVztBQUdqQjs7QUFWRTtFQVdJLGFBQWE7QUFHbkI7O0FBZEU7RUFlSSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFHL0I7O0FBQ0U7RUFDRSxlQUFlO0FBRW5COztBQUNFOztFQUVFLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFFdkI7O0FBQ0U7RUFFSSxrQkFBa0I7QUFDeEI7O0FBSEU7RUFNSSxtQkFBbUI7QUFDekI7O0FBUEU7RUFTTSxtQkFBbUI7QUFFM0I7O0FBR0U7O0VBRUUsOEJBQThCO0FBQWxDOztBQUdFO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsaUJBQWlCO0FBQXJCOztBQUdFO0VBQ0UsVUFBVTtBQUFkOztBQUdFO0VBQ0UsMEJBQTBCO0VBQzFCLGVBQWU7RUFDZixhQUFhO0FBQWpCOztBQUhFO0VBTUksWUFBWTtBQUNsQjs7QUFJRTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsMEJBQTBCO0FBRDlCOztBQUlFO0VBQ0UsVUFBVTtBQURkOztBQUFFO0VBSUksMEJBQTBCO0VBQzFCLGVBQWU7RUFDZixhQUFhO0FBQW5COztBQU5FO0VBU00sWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLHFCQUFxQjtBQUM3Qjs7QUFJRTtFQUNFLFVBQVU7QUFEZDs7QUFJRTtFQUNFLFFBQVE7RUFDUixlQUFlO0VBQ2YsTUFBTTtFQUNOLFNBQVM7RUFDVCxPQUFPO0VBQ1Asb0NBQW9DO0VBQ3BDLFlBQVk7QUFEaEI7O0FBTkU7RUFVSSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFBbEI7O0FBWkU7RUFlTSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsMEJBQTBCO0VBQzFCLGNBQWM7QUFDdEI7O0FBckJFO0VBdUJRLGlCQUFpQjtFQUNqQiw2QkFBNkI7RUFDN0IsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUU1Qjs7QUE1QkU7RUE4QlEsWUFBWTtFQUNaLGtCQUFrQjtBQUU1Qjs7QUFJRTtFQUNFLHFCQUFxQjtBQUR6QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZVN0b3JlLW1vZHVsZS9wcm9kdWN0LWNyZWF0aW9uL3N0dWR5LW1hdGVyaWFsL3N0dWR5LW1hdGVyaWFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLmJ0bi1yb3VuZHtcbi8vICAgICBib3JkZXItcmFkaXVzOiAxMGVtO1xuLy8gICAgIGxpbmUtaGVpZ2h0OiAxLjY7XG4vLyB9XG5cblxuLmJhc2ljLWluZm8tZm9vdGVye1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3JkZXItdG9wOiAxcHQgc29saWQgI2YzZjNmMztcbiAgICBwYWRkaW5nOiAwLjVlbSAwLjhlbTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJveC1zaGFkb3c6IDBwdCAtMnB0IDZwdCAjZTZlNmU2O1xuICAgIHotaW5kZXg6IDU7XG4gICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgICB3aWR0aDogODUuNSU7XG4gICAgbWFyZ2luLWxlZnQ6IDE0LjUlO1xuICAgIC5idG4tcm91bmR7XG4gICAgICAgIHBhZGRpbmc6IDAuMmVtIDFlbTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBtYXJnaW46IDAuMmVtO1xuICAgIH1cbn1cblxuLmJsYWNrLWJne1xuICBiYWNrZ3JvdW5kOiByZ2JhKDEyLCAxMSwgMTEsIDAuMyk7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgbGVmdDogMHB4O1xuICB6LWluZGV4OiA2O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnJvdyB7XG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbn1cblxuLnJvdyB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG5cbiAgLnRleHQtcmVkIHtcbiAgICBjb2xvcjogcmVkO1xuICB9XG5cbiAgLnRleHQtYmx1ZSB7XG4gICAgY29sb3I6ICMyNjgwZWI7XG4gIH1cbiAgLmltZy1jb2xvciB7XG4gICAgY29sb3I6IGJsdWV2aW9sZXQ7XG4gIH1cblxuICAuZG9jLWNvbG9yIHtcbiAgICBjb2xvcjogIzNkODlmMDtcbiAgfVxuXG4gIC5hc3NpZ24tY29sb3Ige1xuICAgIGNvbG9yOiAjYzU5NDQxO1xuICB9XG5cbiAgLmJ0bi1nYS13aGl0ZS1kb3dubG9hZCB7XG4gICAgY29sb3I6ICM1NTU7XG4gIH1cbiAgLnR4dC1ub3Rlc3tcbiAgICBjb2xvcjogIzNkODlmMDtcbiAgfVxuXG4gIC5hdWRpby1jb2xvcntcbiAgICBjb2xvcjogIzk5NjhiZTtcbiAgfVxuXG4gIC5wZGYtY29sb3Ige1xuICAgIGNvbG9yOiAjZDU1MjUyO1xuICB9XG4gIC50b3BpYy1uYW1le1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIC5lcHViLWNvbG9ye1xuICAgIGNvbG9yOiMyYmMzOGE7XG4gIH1cblxuICBpLmZhIHtcbiAgICBtYXJnaW4tcmlnaHQ6IC40ZW07XG4gICAgbWFyZ2luLWxlZnQ6IC45ZW07XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG5cbiAgLnR4dC1jb2xvciB7XG4gICAgY29sb3I6ICMzZjJlMmUgIWltcG9ydGFudDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgLnR4dC10aXRsZXtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICBmb250LXNpemU6MTJweDtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB3aWR0aDogNzIlO1xuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICBsaW5lLWhlaWdodDogMTVweDtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgfVxuICB9XG5cbiAgLnR4dC1mb250e1xuICAgIGZvbnQtc2l6ZToxMnB4O1xuICB9XG4gIC5idG4tZ2EtY29sbGFwc2Uge1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGNvbG9yOiAjM2YyZTJlOy8vIzA3ZjtcbiAgICB9XG4gIH1cblxuICAuYnRuLWdhLXdoaXRlIHtcbiAgICBwYWRkaW5nOiAuMmVtIC44ZW07XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGJveC1zaGFkb3c6IDFwdCAxcHQgMCAjZjFmMWYxO1xuICAgIGNvbG9yOiAjNTU1O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogIzA3ZjtcbiAgICB9XG5cbiAgICAmOmZvY3VzIHtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgfVxuXG4gICAgJjphY3RpdmUge1xuICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgYmFja2dyb3VuZDogIzAwODRmNjtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDg0ZjY7XG4gICAgfVxuICB9XG5cbiAgLmJ0bi14cyB7XG4gICAgZm9udC1zaXplOiAuOGVtO1xuICB9XG5cbiAgLmZpZWxkLWNoZWNrYm94LXdyYXBwZXIsXG4gIC5maWVsZC1yYWRpby13cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luLWxlZnQ6IC0wLjZlbTtcbiAgfVxuXG4gIC5zaW5nbGV0b24tcm93IHtcbiAgICAuYWN0aW9uLWJ1dHRvbnMge1xuICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIH1cblxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogI2ViZjZmZjtcblxuICAgICAgLmFjdGlvbi1idXR0b25zIHtcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubWF0ZXJpYWwtcm93LFxuICAudG9waWMtZGF0YSB7XG4gICAgcGFkZGluZy1sZWZ0OiAxLjJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1haW4tdG9waWMtcm93IHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMWVtIDA7XG4gICAgYm9yZGVyOiAxcHQgc29saWQgI2RkZDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgfVxuXG4gIC50b3BpYy1yb3cge1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cblxuICAudG9waWMtZGF0YSB7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZWU7XG4gICAgcGFkZGluZzogLjRlbSAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAudG9waWMtbmFtZSB7XG4gICAgICBtYXJnaW46IGF1dG87XG4gICAgICAvLyBjb2xvcjogIzAwODRmNjtcbiAgICB9XG4gIH1cblxuICAubWFpbi10b3BpYy1kYXRhIHtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgfVxuXG4gIC50b3BpYy1tYXRlcmlhbC1kYXRhIHtcbiAgICBwYWRkaW5nOiAwO1xuXG4gICAgLm1hdGVyaWFsLXJvdyB7XG4gICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2VlZTtcbiAgICAgIHBhZGRpbmc6IC40ZW0gMDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAgIC5tYXRlcmlhbC10aXRsZSB7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBsaW5lLWhlaWdodDogMTVweDtcbiAgICAgICAgcGFkZGluZzogMCA3cHg7XG4gICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuc3ViVG9waWNzLWRhdGEge1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cblxuICAuZ2EtbW9kYWwtd3JhcHBlciB7XG4gICAgcmlnaHQ6IDA7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDEzNiwgMTM2LCAxMzYsIDAuNik7XG4gICAgei1pbmRleDogOTk5O1xuXG4gICAgLmdhLW1vZGFsLWNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgIGhlaWdodDogMTAwJTtcblxuICAgICAgLmdhLW1vZGFsIHtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICBib3JkZXI6IDJwdCBzb2xpZCAjZmZmO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAuMmVtO1xuICAgICAgICBib3gtc2hhZG93OiAwIDJwdCAzcHQgIzk5OTtcbiAgICAgICAgbWluLXdpZHRoOiAzMCU7XG5cbiAgICAgICAgLmdhLW1vZGFsLWhlYWQge1xuICAgICAgICAgIHBhZGRpbmc6IC41ZW0gMWVtO1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFwdCBzb2xpZCAjZGRkO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5nYS1tb2RhbC1ib2R5IHtcbiAgICAgICAgICBwYWRkaW5nOiAxZW07XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnAtMCB7XG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICB9XG4iXX0= */");

/***/ }),

/***/ "./src/app/components/eStore-module/product-creation/study-material/study-material.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/components/eStore-module/product-creation/study-material/study-material.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: StudyMaterialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudyMaterialComponent", function() { return StudyMaterialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/@angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/authenticator.service */ "./src/app/services/authenticator.service.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_message_show_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/message-show.service */ "./src/app/services/message-show.service.ts");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/products.service */ "./src/app/services/products.service.ts");
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






let StudyMaterialComponent = /** @class */ (() => {
    let StudyMaterialComponent = class StudyMaterialComponent {
        constructor(router, msgService, auth, _http, http) {
            this.router = router;
            this.msgService = msgService;
            this.auth = auth;
            this._http = _http;
            this.http = http;
            this.nextForm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.startForm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.toggleLoader = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.previewEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.isAdvanceProductEdit = false;
            this.institute_id = sessionStorage.getItem('institute_id');
            this.description = '';
            this.studyMaterial = [];
            this.outputMessage = '';
            this.materialData = [];
            this.testlist = [];
            this.editorConf = {
                height: 150,
                menubar: false,
                branding: false,
                plugins: [
                    'preview anchor',
                    'visualblocks code ',
                    'insertdatetime  table paste code  wordcount'
                ],
                toolbar: 'undo redo | formatselect | bold italic backcolor | \
              alignleft aligncenter alignright alignjustify | \
              bullist numlist outdent indent'
            };
        }
        ngOnInit() {
            this.initProductForm();
        }
        toggleRows(event) {
            console.log(event);
            let operation = event.target.attributes['data'].value;
            let length = event.target.parentNode.parentNode.parentNode.children.length;
            for (let i = 1; i < length; i++) {
                let child_el = event.target.parentNode.parentNode.parentNode.children[i];
                if (operation == 'hide') {
                    child_el.classList.remove('fade-in');
                    child_el.classList.add('fade-out');
                    event.target.classList.remove('btn-close');
                    event.target.classList.add('btn-open');
                    event.target.attributes['data'].value = 'show';
                }
                else {
                    child_el.classList.remove('fade-out');
                    child_el.classList.add('fade-in');
                    event.target.classList.add('btn-close');
                    event.target.classList.remove('btn-open');
                    event.target.attributes['data'].value = 'hide';
                }
            }
        }
        gotoBack() {
            this.router.navigateByUrl('/view/e-store/details');
        }
        gotoNext() {
            if (this.description == undefined || this.description == '') {
                this.msgService.showErrorMessage('error', 'Please add description', '');
                return;
            }
            if (this.description.length > 5000) {
                this.msgService.showErrorMessage('error', 'allowed description limit is 5000 characters', '');
                return;
            }
            if ((!this.auth.isRippleLoad.getValue())) {
                //update test List
                let obj = {
                    "page_type": "Study_Material",
                    "status": this.prodForm.status,
                    "is_advance_product": this.prodForm.is_advance_product,
                    "item_list": this.testlist,
                    "description": this.description,
                    "is_paid": this.prodForm.is_paid
                };
                this.auth.showLoader();
                this.http.postMethod('product-item/update/' + this.entity_id, obj).then((resp) => {
                    this.auth.hideLoader();
                    let response = resp['body'];
                    if (response.validate) {
                        let details = response.result;
                        this.prodForm.product_item_list = details;
                        this.msgService.showErrorMessage('success', "Product updated successfully !", '');
                        this.nextForm.emit();
                    }
                    else {
                        this.testlist = [];
                        this.msgService.showErrorMessage('error', response.error[0].error_message, '');
                    }
                }, (err) => {
                    this.auth.hideLoader();
                    this.msgService.showErrorMessage('error', 'There is some problem in processing your request.Please try after some time.Or contact us at support@proctur.com for further assistance. ', '');
                });
            }
        }
        subjectListToggle(subject) {
            subject.isExpand = !subject.isExpand;
            this.getStudyMaterial(subject);
        }
        collapseAll(obj, cond) {
            obj.isExpand = cond;
            if (obj.subtopicList) {
                obj.subtopicList.forEach(element => {
                    element.isExpand = cond;
                    // changes done by = Nalini
                    // Course type id is added because course type id was getting as 0 while selecting material
                    element.course_type_id = obj.course_type_id;
                    this.addMaterialExtension(element);
                    this.collapseAll(element, cond);
                });
            }
        }
        getTopicData(obj) {
            obj.isExpand = !obj.isExpand;
            if (obj.subtopicList && obj.subtopicList.length) {
                obj.subtopicList.forEach(element => {
                    element.course_type_id = obj.course_type_id;
                    element.parent_topic_id = obj.topicId;
                    element.subjectId = obj.subjectId;
                    this.addMaterialExtension(element);
                });
            }
        }
        toggleObject(topic) {
            topic.isExpand = !topic.isExpand;
        }
        calculateStudyMaterialMapLength(object) {
            return Object.keys(object.studyMaterialMap).length;
        }
        getSlugname(key) {
            let slug = 'Slides';
            switch (key) {
                case "Notes": {
                    slug = 'Notes';
                    break;
                }
                case "Assignment": {
                    slug = 'Assignment';
                    break;
                }
                case "EBook": {
                    slug = 'eBook';
                    break;
                }
                case "videosList": {
                    slug = 'Videos';
                    break;
                }
                case "Images": {
                    slug = 'Images';
                    break;
                }
                case "PreviousYearQuestionsPaper": {
                    slug = 'Previous Year Questions Paper';
                    break;
                }
                case "AudioNotes": {
                    slug = 'Audio Notes';
                    break;
                }
                case "Slides": {
                    slug = 'Slides';
                    break;
                }
            }
            return slug;
        }
        addMaterialExtension(object) {
            let keys = ["Notes", "Assignment", "EBook", "Images", "PreviousYearQuestionsPaper", "AudioNotes", "Slides"];
            keys.forEach(key => {
                if (object.studyMaterialMap[key]) {
                    let slug = this.getSlugname(key);
                    object.studyMaterialMap[key].forEach(element => {
                        element.slug = slug;
                        element.subjectId = object.subjectId;
                        element.course_type_id = object.course_type_id;
                        element.parent_topic_id = object.parent_topic_id;
                        element.is_existed_selected = element.selected && this.isAdvanceProductEdit ? true : false;
                        let str = element.file_name;
                        element.is_Advance_prod = this.prodForm.is_advance_product ? true : false;
                        // this.isItemSelected(element, key);
                        let ext = str && str.substr(str.lastIndexOf(".") + 1, str.length);
                        switch (ext) {
                            case 'epub': {
                                element.extension = "fa fa-file epub-color";
                                break;
                            }
                            case 'pdf': {
                                element.extension = "fa fa-file-pdf-o pdf-color";
                                break;
                            }
                            case 'docx':
                            case 'doc': {
                                element.extension = "fa fa-book assign-color ";
                                break;
                            }
                            case 'xls':
                            case 'xlsx': {
                                element.extension = "fa fa-file-excel-o assign-color";
                                break;
                            }
                            case 'ppt':
                            case 'pptx': {
                                element.extension = "fa fa-file-powerpoint-o text-blue";
                                break;
                            }
                            case 'mp3':
                            case 'wav':
                            case 'aac':
                            case 'wma': {
                                element.extension = "fa fa-file-audio-o audio-color";
                                break;
                            }
                            case 'jpeg':
                            case 'jpg':
                            case 'png':
                            case 'gif': {
                                element.extension = "fa fa-file-image-o img-color";
                                break;
                            }
                            default: {
                                element.extension = "fa fa-file-o assign-color";
                            }
                        }
                    });
                }
            });
        }
        initForm() {
            //Fetch Product Groups List
            if (this.entity_id && this.entity_id.length > 0) {
                //Fetch Product Info
                this.http.getMethod('ext/get-subjects-of-ecourses/' + this.entity_id + '/Study_Material', null).subscribe((resp) => {
                    if (resp) {
                        let response = JSON.parse(resp.result);
                        this.materialData = response;
                        console.log(this.materialData);
                        this.materialData.forEach(element => {
                            element.isExpand = false;
                            element.subjectsList = [];
                        });
                    }
                }, (err) => {
                    this.msgService.showErrorMessage('error', 'There is some problem in processing your request.Please try after some time.Or contact us at support@proctur.com for further assistance. ', '');
                });
            }
        }
        getStudyMaterial(object) {
            // console.log(object);
            let obj = {
                institute_id: this.institute_id,
                ecourse_id: object.ecourse_id,
                product_id: this.entity_id,
                study_material_category: 'other_study_material'
            };
            this.auth.showLoader();
            this._http.postData('/api/v1/instFileSystem/get-study-material', obj).subscribe((res) => {
                console.log(res);
                object.subjectsList = res.result;
                if (object.subjectsList) {
                    // object.isExpand = false;
                    // object.subject_id = object.subjectId;
                    // object.course_type_id = object.ecourse_id;
                    object.parent_topic_id = '-1';
                    object.subjectsList.forEach((element) => {
                        if (element && element.subjectId) {
                            element.course_type_id = object.ecourse_id;
                            element.parent_topic_id = object.parent_topic_id;
                            this.addMaterialExtension(element);
                            if (element.subtopicList && element.subtopicList.length) {
                                element.subtopicList.forEach(sub => {
                                    sub.course_type_id = object.ecourse_id;
                                    sub.subjectId = element.subjectId;
                                    sub.parent_topic_id = element.parent_topic_id;
                                    this.addMaterialExtension(sub);
                                });
                            }
                        }
                    });
                }
                this.auth.hideLoader();
            }, err => {
                console.log(err);
                this.auth.hideLoader();
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err.message);
            });
        }
        selectAllDetails($event, object) {
            // console.log($event, object);
            if (object.selected) {
                let obj = {
                    "source_item_id": object.file_id,
                    "source_subject_id": object.subjectId,
                    "course_type_id": object.course_type_id,
                    "parent_topic_id": object.parent_topic_id,
                    "slug": object.slug,
                    "category_id": object.category_id
                };
                this.testlist.push(obj);
            }
            else {
                this.testlist.forEach((item, index) => {
                    if (item.source_item_id == object.file_id) {
                        this.testlist.splice(index, 1);
                        console.log(this.testlist);
                    }
                });
            }
            // console.log(this.testlist);
            // console.log($event, object);
        }
        initProductForm() {
            //Fetch Product Groups List
            if (this.entity_id && this.entity_id.length > 0) {
                //Fetch Product Info
                this.auth.showLoader();
                this.http.getMethod('product/get/' + this.entity_id, null).subscribe((resp) => {
                    this.auth.hideLoader();
                    this.initForm();
                    let response = resp.result;
                    if (resp.validate) {
                        this.prodForm = response;
                        let productData = response;
                        this.prodForm.entity_id = productData.entity_id;
                        this.prodForm.title = productData.title;
                        this.prodForm.about = productData.about;
                        this.prodForm.is_paid = productData.is_paid;
                        this.prodForm.price = productData.price;
                        this.prodForm.start_datetime = productData.valid_from_date;
                        this.prodForm.end_datetime = productData.valid_to_date;
                        this.prodForm.status = productData.status;
                        this.prodForm.purchase_limit = productData.purchase_limit;
                        this.prodForm.product_ecourse_maps = productData.product_ecourse_maps;
                        this.prodForm.product_items_types = productData.product_items_types;
                        this.prodForm.product_item_stats = {};
                        this.isAdvanceProductEdit = (this.prodForm.is_advance_product && this.prodForm.status == 30) ? true : false;
                        this.testlist = this.prodForm.product_item_list;
                        this.prodForm.logo_url = productData.logo_url;
                        this.prodForm.photo_url = productData.photo_url;
                        this.description = response.page_description['Study_Material'];
                        this.prodForm.product_items_types.forEach(element => {
                            this.prodForm.product_item_stats[element.slug] = true;
                        });
                        this.updateProductItemStates(null, null);
                    }
                    else {
                        this.msgService.showErrorMessage('error', response.errors.message, '');
                    }
                }, (err) => {
                    this.auth.hideLoader();
                    this.initForm();
                    this.msgService.showErrorMessage('error', err['error'].errors.message, '');
                });
            }
        }
        // update parent state data
        updateProductItemStates(event, item) {
            if (item) {
                this.prodForm.product_item_stats[item.slug] = event ? 1 : 0;
            }
            // console.log(this.prodForm);
            this.previewEvent.emit(this.prodForm);
        }
    };
    StudyMaterialComponent.ctorParameters = () => [
        { type: _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _services_message_show_service__WEBPACK_IMPORTED_MODULE_4__["MessageShowService"] },
        { type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticatorService"] },
        { type: _services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] },
        { type: _services_products_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"] }
    ];
    StudyMaterialComponent.propDecorators = {
        entity_id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        prodForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        nextForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        startForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        toggleLoader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        previewEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    StudyMaterialComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-study-material',
            template: __importDefault(__webpack_require__(/*! raw-loader!./study-material.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/eStore-module/product-creation/study-material/study-material.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./study-material.component.scss */ "./src/app/components/eStore-module/product-creation/study-material/study-material.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_node_modules_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_message_show_service__WEBPACK_IMPORTED_MODULE_4__["MessageShowService"],
            _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticatorService"],
            _services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"],
            _services_products_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"]])
    ], StudyMaterialComponent);
    return StudyMaterialComponent;
})();



/***/ }),

/***/ "./src/app/components/eStore-module/product-creation/video-lecture/video-lecture.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/components/eStore-module/product-creation/video-lecture/video-lecture.component.scss ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".basic-info-footer {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  border-top: 1pt solid #f3f3f3;\n  padding: 0.5em 0.8em;\n  background: #fff;\n  box-shadow: 0pt -2pt 6pt #e6e6e6;\n  z-index: 5;\n  background: #fafafa;\n  width: 85.5%;\n  margin-left: 14.5%;\n}\n\n.basic-info-footer .btn-round {\n  padding: 0.2em 1em;\n  border-radius: 4px;\n  margin: 0.2em;\n}\n\n.black-bg {\n  background: rgba(12, 11, 11, 0.3);\n  position: fixed;\n  top: 0px;\n  height: 100%;\n  left: 0px;\n  z-index: 6;\n  width: 100%;\n}\n\n.row {\n  margin-left: 0px;\n  margin-right: 0px;\n}\n\n.row {\n  margin: 0;\n}\n\n.text-red {\n  color: red;\n}\n\n.text-blue {\n  color: #2680eb;\n}\n\n.img-color {\n  color: blueviolet;\n}\n\n.doc-color {\n  color: #3d89f0;\n}\n\n.assign-color {\n  color: #c59441;\n}\n\n.btn-ga-white-download {\n  color: #555;\n}\n\n.txt-notes {\n  color: #3d89f0;\n}\n\n.audio-color {\n  color: #9968be;\n}\n\n.pdf-color {\n  color: #d55252;\n}\n\n.topic-name {\n  color: #000;\n  font-weight: bold;\n}\n\n.epub-color {\n  color: #2bc38a;\n}\n\ni.fa {\n  margin-right: .4em;\n  margin-left: .9em;\n  font-size: 18px;\n}\n\n.txt-color {\n  color: #3f2e2e !important;\n  text-decoration: none;\n}\n\n.txt-color .txt-title {\n  font-weight: 400;\n  font-size: 12px;\n  display: inline-block;\n  overflow: hidden;\n  width: 72%;\n  text-overflow: ellipsis;\n  line-height: 15px;\n  white-space: nowrap;\n}\n\n.txt-font {\n  font-size: 12px;\n}\n\n.btn-ga-collapse {\n  vertical-align: middle;\n  background: transparent;\n}\n\n.btn-ga-collapse:hover {\n  color: #3f2e2e;\n}\n\n.btn-ga-white {\n  padding: .2em .8em;\n  height: auto;\n  box-shadow: 1pt 1pt 0 #f1f1f1;\n  color: #555;\n}\n\n.btn-ga-white:hover {\n  color: #07f;\n}\n\n.btn-ga-white:focus {\n  outline: none;\n}\n\n.btn-ga-white:active {\n  box-shadow: none;\n  color: #fff;\n  background: #0084f6;\n  border: 1px solid #0084f6;\n}\n\n.btn-xs {\n  font-size: .8em;\n}\n\n.field-checkbox-wrapper,\n.field-radio-wrapper {\n  position: absolute;\n  margin-left: -0.6em;\n}\n\n.singleton-row .action-buttons {\n  visibility: hidden;\n}\n\n.singleton-row:hover {\n  background: #ebf6ff;\n}\n\n.singleton-row:hover .action-buttons {\n  visibility: visible;\n}\n\n.material-row,\n.topic-data {\n  padding-left: 1.2em !important;\n}\n\n.main-topic-row {\n  padding: 0;\n  margin: 1em 0;\n  border: 1pt solid #ddd;\n  background: white;\n}\n\n.topic-row {\n  padding: 0;\n}\n\n.topic-data {\n  border-top: 1px solid #eee;\n  padding: .4em 0;\n  display: flex;\n}\n\n.topic-data .topic-name {\n  margin: auto;\n}\n\n.main-topic-data {\n  color: #000;\n  font-weight: bold;\n  padding-left: 0 !important;\n}\n\n.topic-material-data {\n  padding: 0;\n}\n\n.topic-material-data .material-row {\n  border-top: 1px solid #eee;\n  padding: .4em 0;\n  display: flex;\n}\n\n.topic-material-data .material-row .material-title {\n  margin: auto;\n  display: inline-block;\n  line-height: 15px;\n  padding: 0 7px;\n  word-wrap: break-word;\n}\n\n.subTopics-data {\n  padding: 0;\n}\n\n.ga-modal-wrapper {\n  right: 0;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  background: rgba(136, 136, 136, 0.6);\n  z-index: 999;\n}\n\n.ga-modal-wrapper .ga-modal-container {\n  display: flex;\n  overflow-y: auto;\n  height: 100%;\n}\n\n.ga-modal-wrapper .ga-modal-container .ga-modal {\n  margin: auto;\n  background: #fff;\n  border: 2pt solid #fff;\n  border-radius: .2em;\n  box-shadow: 0 2pt 3pt #999;\n  min-width: 30%;\n}\n\n.ga-modal-wrapper .ga-modal-container .ga-modal .ga-modal-head {\n  padding: .5em 1em;\n  border-bottom: 1pt solid #ddd;\n  font-weight: bold;\n  text-align: center;\n}\n\n.ga-modal-wrapper .ga-modal-container .ga-modal .ga-modal-body {\n  padding: 1em;\n  text-align: center;\n}\n\n.p-0 {\n  padding: 0 !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lU3RvcmUtbW9kdWxlL3Byb2R1Y3QtY3JlYXRpb24vdmlkZW8tbGVjdHVyZS92aWRlby1sZWN0dXJlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BO0VBQ0ksZUFBZTtFQUNmLFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUTtFQUNSLDZCQUE2QjtFQUM3QixvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLGdDQUFnQztFQUNoQyxVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixrQkFBa0I7QUFMdEI7O0FBUEE7RUFjUSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGFBQWE7QUFIckI7O0FBTUE7RUFDRSxpQ0FBaUM7RUFDakMsZUFBZTtFQUNmLFFBQVE7RUFDUixZQUFZO0VBQ1osU0FBUztFQUNULFVBQVU7RUFDVixXQUFXO0FBSGI7O0FBTUE7RUFDSSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBSHJCOztBQU1BO0VBQ0ksU0FBUztBQUhiOztBQU1FO0VBQ0UsVUFBVTtBQUhkOztBQU1FO0VBQ0UsY0FBYztBQUhsQjs7QUFLRTtFQUNFLGlCQUFpQjtBQUZyQjs7QUFLRTtFQUNFLGNBQWM7QUFGbEI7O0FBS0U7RUFDRSxjQUFjO0FBRmxCOztBQUtFO0VBQ0UsV0FBVztBQUZmOztBQUlFO0VBQ0UsY0FBYztBQURsQjs7QUFJRTtFQUNFLGNBQWM7QUFEbEI7O0FBSUU7RUFDRSxjQUFjO0FBRGxCOztBQUdFO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtBQUFyQjs7QUFFRTtFQUNFLGNBQWE7QUFDakI7O0FBRUU7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDbkI7O0FBRUU7RUFDRSx5QkFBeUI7RUFDekIscUJBQXFCO0FBQ3pCOztBQUhFO0VBSUksZ0JBQWdCO0VBQ2hCLGVBQWM7RUFDZCxxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVix1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUd6Qjs7QUFDRTtFQUNFLGVBQWM7QUFFbEI7O0FBQUU7RUFDRSxzQkFBc0I7RUFDdEIsdUJBQXVCO0FBRzNCOztBQUxFO0VBS0ksY0FBYztBQUlwQjs7QUFBRTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLFdBQVc7QUFHZjs7QUFQRTtFQU9JLFdBQVc7QUFJakI7O0FBWEU7RUFXSSxhQUFhO0FBSW5COztBQWZFO0VBZUksZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIseUJBQXlCO0FBSS9COztBQUFFO0VBQ0UsZUFBZTtBQUduQjs7QUFBRTs7RUFFRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBR3ZCOztBQUFFO0VBRUksa0JBQWtCO0FBRXhCOztBQUpFO0VBTUksbUJBQW1CO0FBRXpCOztBQVJFO0VBU00sbUJBQW1CO0FBRzNCOztBQUVFOztFQUVFLDhCQUE4QjtBQUNsQzs7QUFFRTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGlCQUFpQjtBQUNyQjs7QUFFRTtFQUNFLFVBQVU7QUFDZDs7QUFFRTtFQUNFLDBCQUEwQjtFQUMxQixlQUFlO0VBQ2YsYUFBYTtBQUNqQjs7QUFKRTtFQU1JLFlBQVk7QUFFbEI7O0FBR0U7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLDBCQUEwQjtBQUE5Qjs7QUFHRTtFQUNFLFVBQVU7QUFBZDs7QUFERTtFQUlJLDBCQUEwQjtFQUMxQixlQUFlO0VBQ2YsYUFBYTtBQUNuQjs7QUFQRTtFQVNNLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxxQkFBcUI7QUFFN0I7O0FBR0U7RUFDRSxVQUFVO0FBQWQ7O0FBR0U7RUFDRSxRQUFRO0VBQ1IsZUFBZTtFQUNmLE1BQU07RUFDTixTQUFTO0VBQ1QsT0FBTztFQUNQLG9DQUFvQztFQUNwQyxZQUFZO0FBQWhCOztBQVBFO0VBVUksYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2xCOztBQWJFO0VBZU0sWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLDBCQUEwQjtFQUMxQixjQUFjO0FBRXRCOztBQXRCRTtFQXVCUSxpQkFBaUI7RUFDakIsNkJBQTZCO0VBQzdCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFHNUI7O0FBN0JFO0VBOEJRLFlBQVk7RUFDWixrQkFBa0I7QUFHNUI7O0FBR0U7RUFDRSxxQkFBcUI7QUFBekIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2VTdG9yZS1tb2R1bGUvcHJvZHVjdC1jcmVhdGlvbi92aWRlby1sZWN0dXJlL3ZpZGVvLWxlY3R1cmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAuYnRuLXJvdW5ke1xuLy8gICAgIGJvcmRlci1yYWRpdXM6IDEwZW07XG4vLyAgICAgbGluZS1oZWlnaHQ6IDEuNjtcbi8vIH1cblxuXG4uYmFzaWMtaW5mby1mb290ZXJ7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvcmRlci10b3A6IDFwdCBzb2xpZCAjZjNmM2YzO1xuICAgIHBhZGRpbmc6IDAuNWVtIDAuOGVtO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm94LXNoYWRvdzogMHB0IC0ycHQgNnB0ICNlNmU2ZTY7XG4gICAgei1pbmRleDogNTtcbiAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xuICAgIHdpZHRoOiA4NS41JTtcbiAgICBtYXJnaW4tbGVmdDogMTQuNSU7XG4gICAgLmJ0bi1yb3VuZHtcbiAgICAgICAgcGFkZGluZzogMC4yZW0gMWVtO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIG1hcmdpbjogMC4yZW07XG4gICAgfVxufVxuLmJsYWNrLWJne1xuICBiYWNrZ3JvdW5kOiByZ2JhKDEyLCAxMSwgMTEsIDAuMyk7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgbGVmdDogMHB4O1xuICB6LWluZGV4OiA2O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnJvdyB7XG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbn1cblxuLnJvdyB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG5cbiAgLnRleHQtcmVkIHtcbiAgICBjb2xvcjogcmVkO1xuICB9XG5cbiAgLnRleHQtYmx1ZSB7XG4gICAgY29sb3I6ICMyNjgwZWI7XG4gIH1cbiAgLmltZy1jb2xvciB7XG4gICAgY29sb3I6IGJsdWV2aW9sZXQ7XG4gIH1cblxuICAuZG9jLWNvbG9yIHtcbiAgICBjb2xvcjogIzNkODlmMDtcbiAgfVxuXG4gIC5hc3NpZ24tY29sb3Ige1xuICAgIGNvbG9yOiAjYzU5NDQxO1xuICB9XG5cbiAgLmJ0bi1nYS13aGl0ZS1kb3dubG9hZCB7XG4gICAgY29sb3I6ICM1NTU7XG4gIH1cbiAgLnR4dC1ub3Rlc3tcbiAgICBjb2xvcjogIzNkODlmMDtcbiAgfVxuXG4gIC5hdWRpby1jb2xvcntcbiAgICBjb2xvcjogIzk5NjhiZTtcbiAgfVxuXG4gIC5wZGYtY29sb3Ige1xuICAgIGNvbG9yOiAjZDU1MjUyO1xuICB9XG4gIC50b3BpYy1uYW1le1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIC5lcHViLWNvbG9ye1xuICAgIGNvbG9yOiMyYmMzOGE7XG4gIH1cblxuICBpLmZhIHtcbiAgICBtYXJnaW4tcmlnaHQ6IC40ZW07XG4gICAgbWFyZ2luLWxlZnQ6IC45ZW07XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG5cbiAgLnR4dC1jb2xvciB7XG4gICAgY29sb3I6ICMzZjJlMmUgIWltcG9ydGFudDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgLnR4dC10aXRsZXtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICBmb250LXNpemU6MTJweDtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB3aWR0aDogNzIlO1xuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICBsaW5lLWhlaWdodDogMTVweDtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgfVxuICB9XG5cbiAgLnR4dC1mb250e1xuICAgIGZvbnQtc2l6ZToxMnB4O1xuICB9XG4gIC5idG4tZ2EtY29sbGFwc2Uge1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGNvbG9yOiAjM2YyZTJlOy8vIzA3ZjtcbiAgICB9XG4gIH1cblxuICAuYnRuLWdhLXdoaXRlIHtcbiAgICBwYWRkaW5nOiAuMmVtIC44ZW07XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGJveC1zaGFkb3c6IDFwdCAxcHQgMCAjZjFmMWYxO1xuICAgIGNvbG9yOiAjNTU1O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogIzA3ZjtcbiAgICB9XG5cbiAgICAmOmZvY3VzIHtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgfVxuXG4gICAgJjphY3RpdmUge1xuICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgYmFja2dyb3VuZDogIzAwODRmNjtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDg0ZjY7XG4gICAgfVxuICB9XG5cbiAgLmJ0bi14cyB7XG4gICAgZm9udC1zaXplOiAuOGVtO1xuICB9XG5cbiAgLmZpZWxkLWNoZWNrYm94LXdyYXBwZXIsXG4gIC5maWVsZC1yYWRpby13cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luLWxlZnQ6IC0wLjZlbTtcbiAgfVxuXG4gIC5zaW5nbGV0b24tcm93IHtcbiAgICAuYWN0aW9uLWJ1dHRvbnMge1xuICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIH1cblxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogI2ViZjZmZjtcblxuICAgICAgLmFjdGlvbi1idXR0b25zIHtcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubWF0ZXJpYWwtcm93LFxuICAudG9waWMtZGF0YSB7XG4gICAgcGFkZGluZy1sZWZ0OiAxLjJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1haW4tdG9waWMtcm93IHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMWVtIDA7XG4gICAgYm9yZGVyOiAxcHQgc29saWQgI2RkZDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgfVxuXG4gIC50b3BpYy1yb3cge1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cblxuICAudG9waWMtZGF0YSB7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZWU7XG4gICAgcGFkZGluZzogLjRlbSAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAudG9waWMtbmFtZSB7XG4gICAgICBtYXJnaW46IGF1dG87XG4gICAgICAvLyBjb2xvcjogIzAwODRmNjtcbiAgICB9XG4gIH1cblxuICAubWFpbi10b3BpYy1kYXRhIHtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgfVxuXG4gIC50b3BpYy1tYXRlcmlhbC1kYXRhIHtcbiAgICBwYWRkaW5nOiAwO1xuXG4gICAgLm1hdGVyaWFsLXJvdyB7XG4gICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2VlZTtcbiAgICAgIHBhZGRpbmc6IC40ZW0gMDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAgIC5tYXRlcmlhbC10aXRsZSB7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBsaW5lLWhlaWdodDogMTVweDtcbiAgICAgICAgcGFkZGluZzogMCA3cHg7XG4gICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuc3ViVG9waWNzLWRhdGEge1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cblxuICAuZ2EtbW9kYWwtd3JhcHBlciB7XG4gICAgcmlnaHQ6IDA7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDEzNiwgMTM2LCAxMzYsIDAuNik7XG4gICAgei1pbmRleDogOTk5O1xuXG4gICAgLmdhLW1vZGFsLWNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgIGhlaWdodDogMTAwJTtcblxuICAgICAgLmdhLW1vZGFsIHtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICBib3JkZXI6IDJwdCBzb2xpZCAjZmZmO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAuMmVtO1xuICAgICAgICBib3gtc2hhZG93OiAwIDJwdCAzcHQgIzk5OTtcbiAgICAgICAgbWluLXdpZHRoOiAzMCU7XG5cbiAgICAgICAgLmdhLW1vZGFsLWhlYWQge1xuICAgICAgICAgIHBhZGRpbmc6IC41ZW0gMWVtO1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFwdCBzb2xpZCAjZGRkO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5nYS1tb2RhbC1ib2R5IHtcbiAgICAgICAgICBwYWRkaW5nOiAxZW07XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnAtMCB7XG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICB9XG4iXX0= */");

/***/ }),

/***/ "./src/app/components/eStore-module/product-creation/video-lecture/video-lecture.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/components/eStore-module/product-creation/video-lecture/video-lecture.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: VideoLectureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoLectureComponent", function() { return VideoLectureComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/authenticator.service */ "./src/app/services/authenticator.service.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_message_show_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/message-show.service */ "./src/app/services/message-show.service.ts");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/products.service */ "./src/app/services/products.service.ts");
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






let VideoLectureComponent = /** @class */ (() => {
    let VideoLectureComponent = class VideoLectureComponent {
        constructor(router, msgService, auth, _http, http) {
            this.router = router;
            this.msgService = msgService;
            this.auth = auth;
            this._http = _http;
            this.http = http;
            this.isRippleLoad = false;
            this.nextForm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.startForm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.toggleLoader = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.previewEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.institute_id = sessionStorage.getItem('institute_id');
            this.description = '';
            // subjectList: any[] = [{ name: 'History' }, { name: 'Geography' }, { name: 'Physics' }];
            this.studyMaterial = [];
            this.outputMessage = '';
            this.materialData = [];
            this.testlist = [];
            this.isAdvanceProductEdit = false;
            this.editorConf = {
                height: 150,
                menubar: false,
                branding: false,
                plugins: [
                    'preview anchor',
                    'visualblocks code ',
                    'insertdatetime  table paste code  wordcount'
                ],
                toolbar: 'undo redo | formatselect | bold italic backcolor | \
              alignleft aligncenter alignright alignjustify | \
              bullist numlist outdent indent'
            };
        }
        ngOnInit() {
            this.initProductForm();
        }
        gotoBack() {
            this.router.navigateByUrl('/view/e-store/details');
        }
        gotoNext() {
            if (this.description == undefined || this.description == '') {
                this.msgService.showErrorMessage('error', 'Please add description', '');
                return;
            }
            if (this.description.length > 5000) {
                this.msgService.showErrorMessage('error', 'allowed description limit is 5000 characters', '');
                return;
            }
            if ((!this.isRippleLoad)) {
                //update test List
                let obj = {
                    "page_type": "Videos",
                    "status": this.prodForm.status,
                    "is_advance_product": this.prodForm.is_advance_product,
                    "item_list": this.testlist,
                    "description": this.description,
                    "is_paid": this.prodForm.is_paid
                };
                this.auth.showLoader();
                this.http.postMethod('product-item/update/' + this.entity_id, obj).then((resp) => {
                    this.auth.hideLoader();
                    let response = resp['body'];
                    if (response.validate) {
                        let details = response.result;
                        this.prodForm.product_item_list = details;
                        this.msgService.showErrorMessage('success', "Product updated successfully !", '');
                        this.nextForm.emit();
                    }
                    else {
                        this.testlist = [];
                        this.msgService.showErrorMessage('error', response.error[0].error_message, '');
                    }
                }, (err) => {
                    this.auth.hideLoader();
                    this.msgService.showErrorMessage('error', 'There is some problem in processing your request.Please try after some time.Or contact us at support@proctur.com for further assistance. ', '');
                });
            }
        }
        subjectListToggle(subject) {
            subject.isExpand = !subject.isExpand;
            subject.parent_topic_id = subject.topic_id;
            this.getStudyMaterial(subject);
        }
        collapseAll(obj, cond) {
            obj.isExpand = cond;
            if (obj.subtopicList) {
                obj.subtopicList.forEach(element => {
                    element.isExpand = cond;
                    // changes done by = Nalini
                    // Course type id is added because course type id was getting as 0 while selecting video
                    element.course_type_id = obj.course_type_id;
                    // element.subject_id = this.subjectId;
                    this.addMaterialExtension(element);
                    this.collapseAll(element, cond);
                });
            }
        }
        getStudyMaterial(object) {
            console.log(object);
            let obj = {
                institute_id: this.institute_id,
                ecourse_id: object.ecourse_id,
                product_id: this.entity_id,
                study_material_category: 'video_study_material'
            };
            this.auth.showLoader();
            this._http.postData('/api/v1/instFileSystem/get-study-material', obj).subscribe((res) => {
                console.log(object);
                object.subjectsList = res.result;
                if (object.subjectsList) {
                    // object.isExpand = false;
                    // object.subject_id = object.subjectId;
                    // object.course_type_id = object.ecourse_id;
                    object.parent_topic_id = '-1';
                    object.subjectsList.forEach((element) => {
                        if (element && element.subjectId) {
                            element.course_type_id = object.ecourse_id;
                            element.parent_topic_id = object.parent_topic_id;
                            this.addMaterialExtension(element);
                            if (element.subtopicList && element.subtopicList.length) {
                                element.subtopicList.forEach(sub => {
                                    sub.course_type_id = object.ecourse_id;
                                    sub.subjectId = element.subjectId;
                                    sub.parent_topic_id = element.parent_topic_id;
                                    this.addMaterialExtension(sub);
                                });
                            }
                        }
                    });
                }
                this.auth.hideLoader();
            }, err => {
                console.log(err);
                this.auth.hideLoader();
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err.message);
            });
        }
        toggleObject(topic) {
            topic.isExpand = !topic.isExpand;
        }
        getTopicData(obj) {
            obj.isExpand = !obj.isExpand;
            if (obj.subtopicList && obj.subtopicList.length) {
                obj.subtopicList.forEach(element => {
                    element.course_type_id = obj.course_type_id;
                    element.parent_topic_id = element.topicId;
                    element.subjectId = obj.subjectId;
                    this.addMaterialExtension(element);
                });
            }
        }
        calculateStudyMaterialMapLength(object) {
            return Object.keys(object.studyMaterialMap).length;
        }
        getSlugname(key) {
            let slug = 'Slides';
            switch (key) {
                case "Notes": {
                    slug = 'Notes';
                    break;
                }
                case "Assignment": {
                    slug = 'Assignment';
                    break;
                }
                case "EBook": {
                    slug = 'eBook';
                    break;
                }
                case "VDOCipher": {
                    slug = 'Videos';
                    break;
                }
                case "YoutubeURL": {
                    slug = 'Videos';
                    break;
                }
                case "Images": {
                    slug = 'Images';
                    break;
                }
                case "PreviousYearQuestionsPaper": {
                    slug = 'Previous_Year_Questions_Paper';
                    break;
                }
                case "AudioNotes": {
                    slug = 'Audio_Notes';
                    break;
                }
                case "Slides": {
                    slug = 'Slides';
                    break;
                }
                case "Vimeo": {
                    slug = 'Videos';
                    break;
                }
            }
            return slug;
        }
        isItemSelected(item, key) {
            if (this.prodForm) {
                this.prodForm.product_item_list && this.prodForm.product_item_list.forEach((object) => {
                    if (object.source_item_id == item.file_id && item.slug == object.slug) {
                        // item.isSelected = true;
                        // this.testlist.push(object);
                    }
                });
            }
        }
        addMaterialExtension(object) {
            let keys = ["YoutubeURL", "VDOCipher", "Vimeo"];
            keys.forEach(key => {
                if (object.studyMaterialMap[key]) {
                    let slug = this.getSlugname(key);
                    object.studyMaterialMap[key].forEach(element => {
                        // element.isSelected = false;
                        element.slug = slug;
                        element.subjectId = object.subjectId;
                        element.course_type_id = object.course_type_id;
                        element.parent_topic_id = object.parent_topic_id;
                        element.is_existed_selected = (element.selected && this.isAdvanceProductEdit) ? true : false;
                        let str = element.file_name;
                        // this.isItemSelected(element, key);
                        let ext = str && str.substr(str.lastIndexOf(".") + 1, str.length);
                        switch (ext) {
                            case 'epub': {
                                element.extension = "fa fa-file epub-color";
                                break;
                            }
                            case 'pdf': {
                                element.extension = "fa fa-file-pdf-o pdf-color";
                                break;
                            }
                            case 'docx':
                            case 'doc': {
                                element.extension = "fa fa-book assign-color ";
                                break;
                            }
                            case 'xls':
                            case 'xlsx': {
                                element.extension = "fa fa-file-excel-o assign-color";
                                break;
                            }
                            case 'ppt':
                            case 'pptx': {
                                element.extension = "fa fa-file-powerpoint-o text-blue";
                                break;
                            }
                            case 'mp3':
                            case 'wav':
                            case 'aac':
                            case 'wma': {
                                element.extension = "fa fa-file-audio-o audio-color";
                                break;
                            }
                            case 'jpeg':
                            case 'jpg':
                            case 'png':
                            case 'gif': {
                                element.extension = "fa fa-file-image-o img-color";
                                break;
                            }
                            default: {
                                element.extension = "fa fa-file-o assign-color";
                            }
                        }
                    });
                }
            });
        }
        initForm() {
            //Fetch Product List
            if (this.entity_id && this.entity_id.length > 0) {
                this.http.getMethod('ext/get-subjects-of-ecourses/' + this.entity_id + '/Videos', null).subscribe((resp) => {
                    this.auth.hideLoader();
                    if (resp) {
                        let response = JSON.parse(resp.result);
                        console.log(response);
                        this.materialData = response;
                        console.log(this.materialData);
                        this.materialData && this.materialData.forEach(element => {
                            element.isExpand = false;
                            element.subjectsList = [];
                        });
                    }
                }, (err) => {
                    this.auth.hideLoader();
                    this.msgService.showErrorMessage('error', 'There is some problem in processing your request.Please try after some time.Or contact us at support@proctur.com for further assistance. ', '');
                });
            }
        }
        selectAllDetails($event, object) {
            // console.log('object',object);
            if (object.selected) {
                let obj = {
                    "source_item_id": object.file_id,
                    "source_subject_id": object.subjectId,
                    "course_type_id": object.course_type_id,
                    "parent_topic_id": object.parent_topic_id,
                    "slug": object.slug,
                    "category_id": object.category_id
                };
                this.testlist.push(obj);
            }
            else {
                this.testlist.forEach((item, index) => {
                    if (item.source_item_id == object.file_id) {
                        this.testlist.splice(index, 1);
                        console.log(this.testlist);
                    }
                });
            }
            // console.log(this.testlist);
            // console.log($event, object);
        }
        initProductForm() {
            this.auth.showLoader();
            if (this.entity_id && this.entity_id.length > 0) {
                //Fetch Product Info
                this.http.getMethod('product/get/' + this.entity_id, null).subscribe((resp) => {
                    let response = resp.result;
                    if (resp.validate) {
                        this.prodForm = response;
                        this.isPaid = this.prodForm.is_paid;
                        this.description = response.page_description['Videos'];
                        this.prodForm.product_item_stats = {};
                        this.testlist = this.prodForm.product_item_list;
                        this.prodForm.product_items_types.forEach(element => {
                            this.prodForm.product_item_stats[element.slug] = true;
                        });
                        this.isAdvanceProductEdit = (this.prodForm.is_advance_product && this.prodForm.status == 30) ? true : false;
                        this.updateProductItemStates(null, null);
                        this.initForm();
                    }
                    else {
                        this.msgService.showErrorMessage('error', response.errors.message, '');
                    }
                }, (err) => {
                    this.msgService.showErrorMessage('error', err['error'].errors.message, '');
                });
            }
        }
        // update parent state data
        updateProductItemStates(event, item) {
            if (item) {
                this.prodForm.product_item_stats[item.slug] = event ? 1 : 0;
            }
            this.previewEvent.emit(this.prodForm);
        }
    };
    VideoLectureComponent.ctorParameters = () => [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _services_message_show_service__WEBPACK_IMPORTED_MODULE_4__["MessageShowService"] },
        { type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticatorService"] },
        { type: _services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] },
        { type: _services_products_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"] }
    ];
    VideoLectureComponent.propDecorators = {
        entity_id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        prodForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        nextForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        startForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        toggleLoader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        previewEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    VideoLectureComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-video-lecture',
            template: __importDefault(__webpack_require__(/*! raw-loader!./video-lecture.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/eStore-module/product-creation/video-lecture/video-lecture.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./video-lecture.component.scss */ "./src/app/components/eStore-module/product-creation/video-lecture/video-lecture.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_message_show_service__WEBPACK_IMPORTED_MODULE_4__["MessageShowService"],
            _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticatorService"],
            _services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"],
            _services_products_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"]])
    ], VideoLectureComponent);
    return VideoLectureComponent;
})();



/***/ }),

/***/ "./src/app/components/eStore-module/product-list/product-list.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/eStore-module/product-list/product-list.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/* ===============================header colors=======================*/\n.table-format-first .table-responsive table th,\n.table-format-first .table-responsive table td {\n  text-align: center;\n  padding: 10px 5px;\n}\n.table-format-first .table-responsive table th {\n  text-transform: capitalize;\n  font-size: 14px;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper {\n  display: inline-block;\n  overflow: initial;\n  margin-left: 0;\n  width: auto;\n  position: relative;\n  background: transparent;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox {\n  z-index: 2;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label {\n  font-size: 16px;\n  margin-left: 7px;\n  font-weight: 600;\n  vertical-align: middle;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:after, .table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:before {\n  z-index: 1;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper:after {\n  content: '';\n  width: 20px;\n  height: 20px;\n  background: #fff;\n  left: 0;\n  top: 0;\n  position: absolute;\n}\n.table-format-first .table-responsive table tbody tr td .fa-trash-o {\n  color: #f44336;\n  font-size: 20px;\n}\n.table-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-top: 10px;\n}\n.table-container .heading-container {\n  background: #e0eaec;\n  display: flex;\n  flex-direction: row;\n  font-size: 14px;\n  font-weight: 600;\n  text-align: left;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n}\n.table-container .heading-container .heading-item {\n  width: 10%;\n  text-align: center;\n}\n.table-container .value-outer-container {\n  display: flex;\n  flex-direction: column;\n  min-height: 53vh;\n  max-height: 54vh;\n  overflow-x: hidden;\n  overflow-y: auto;\n  border: 1px solid #ccc;\n}\n.table-container .value-outer-container .value-container {\n  display: flex;\n  flex-direction: row;\n  text-align: left;\n  padding: 4px;\n  font-size: 12px;\n  border-bottom: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n  border-top: none;\n}\n.table-container .value-outer-container .value-container .value-item {\n  width: 10%;\n  text-align: center;\n}\n/** these css for gear icon download options\n* created by laxmi\n*/\nsvg:hover #gearIcon {\n  fill: #0084f6;\n}\n.asHover:hover {\n  color: #0084f6 !important;\n}\n.download:hover {\n  cursor: pointer;\n}\n.made-in {\n  font-size: 17px;\n  font-weight: bold;\n  text-align: left;\n}\n.dropdown > ul {\n  background: #fff;\n  padding: 10px 20px;\n  border: 1px solid #eaeaeb;\n  border-top: 0;\n  margin-top: 3px;\n  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 6px 10px 0 rgba(0, 0, 0, 0.12);\n}\n.dropdown > ul li {\n  color: #333;\n}\n.dropdown > ul li strong {\n  font-weight: 600;\n  display: block;\n}\n.dropdown > ul li a {\n  display: block;\n  color: #333;\n}\n.login-tube nav > ul > li {\n  display: inline-block;\n  position: relative;\n}\n.login-tube nav > ul > li > a {\n  color: #333;\n  text-decoration: none;\n  padding: 5px 10px;\n  display: block;\n  transition: all .4s;\n}\n.login-tube nav > ul > li > a:hover,\n.login-tube nav > ul > li:hover > a {\n  text-decoration: none;\n  background: #ccc;\n}\n.login-tube nav > ul > li .dropdown {\n  position: absolute;\n  visibility: hidden;\n  right: 0;\n  top: 100%;\n  min-width: 200px;\n  border-top: 0;\n  opacity: 0;\n  transition: all 0.1s cubic-bezier(0.55, 0, 0.55, 0.2);\n  transition-duration: .2s;\n  transform: scale(0.5);\n}\n.login-tube nav > ul > li .dropdown > ul li {\n  line-height: normal;\n}\n.login-tube nav > ul > li .dropdown > ul li a {\n  display: block;\n  margin: 5px 0;\n}\n.login-tube nav > ul > li .dropdown > ul li a:hover {\n  color: #0084f6;\n}\n.login-tube nav > ul > li .dropdown > ul ul {\n  padding-left: 15px;\n  padding-top: 10px;\n}\n.login-tube nav > ul > li .dropdown > ul ul ul {\n  padding-top: 0;\n}\n.login-tube nav > ul > li:hover .dropdown {\n  visibility: visible;\n  position: absolute;\n  opacity: 1;\n  right: 0;\n  top: 100%;\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition-duration: .5s;\n  transform: scale(1);\n}\n.span-button {\n  border: 1px solid #0084f6;\n  padding: 4px 8px;\n  color: #0084f6;\n  font-size: .9em;\n  border-radius: 2px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.span-button svg {\n  margin: -3px 0;\n  height: 14px;\n}\nlogin-nav > li {\n  display: inline-block;\n  padding: 0 7px;\n  cursor: pointer;\n  vertical-align: text-bottom;\n}\nlogin-nav > li .dropdown {\n  position: absolute;\n  right: 0;\n  top: 100%;\n  padding-top: 10px;\n}\nlogin-nav > li .icons {\n  width: 35px;\n  height: 35px;\n  display: block;\n  text-align: center;\n  box-sizing: border-box;\n  border-radius: 50%;\n  padding-top: 3px;\n  transition: all 0.1s;\n  border: 1px solid transparent;\n}\nlogin-nav > li .icons svg {\n  width: 25px;\n  color: #034979;\n}\nlogin-nav > li .icons svg .cls-1 {\n  stroke: #034979;\n  stroke-linejoin: unset;\n  border: none;\n}\nlogin-nav > li .user-info {\n  white-space: nowrap;\n  margin-right: 40px;\n  width: auto;\n  display: block;\n  position: relative;\n}\nlogin-nav > li .user-info > .icons {\n  display: inline-block;\n  vertical-align: middle;\n}\nlogin-nav > li .user-info > span {\n  vertical-align: middle;\n  display: inline-block;\n}\nlogin-nav > li .user-info:after {\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  content: \"\\f107\";\n  font-size: 17px;\n  position: absolute;\n  right: -20px;\n  top: 10px;\n}\n/**\n  this css is for report section css for cards\n  added by laxmi\n*/\n.report-box {\n  width: 100%;\n  height: 100%;\n  padding: 10px;\n}\n.report-box ul.card-box li.card-row {\n  margin: 10px 0px;\n}\n.report-box ul.card {\n  padding: 15px 10px;\n  border: 1px solid #efefef;\n  background: #fff;\n  height: 120px;\n  border-radius: 4px;\n  cursor: pointer;\n  text-align: left;\n  margin: 10px 0px;\n  box-shadow: 0px 0px 2px 0px;\n}\n.report-box ul.card li {\n  padding: 5px;\n}\n.report-box ul.card li:first-child {\n  font-size: 14px;\n  font-weight: 600;\n  padding: 10px 5px;\n}\n.report-box ul.card li:nth-child(2n) {\n  font-size: 12px;\n}\n.disabled {\n  cursor: not-allowed;\n  background: lightgrey;\n}\n.product-wrapper {\n  padding: .8em;\n  width: 99%;\n}\n.btn-product {\n  padding-left: .8em;\n  padding-right: .8em;\n}\n.profile_img {\n  border-radius: 25px;\n  height: 40px;\n  width: 42px;\n  max-width: 40px;\n  max-height: 40px;\n}\n.add-icon {\n  font-size: 1.2em;\n  background: #0066b7;\n  width: 24px;\n  height: 24px;\n  display: inline-block;\n  vertical-align: -2px;\n  margin-left: 4px;\n  border-radius: 100%;\n  color: #fff;\n}\n.add-icon:before {\n  content: '+';\n}\n.action-bar {\n  border-bottom: 1px solid lightgrey;\n  padding-bottom: 12px;\n}\n.action-bar .container .form-el-width {\n  width: auto;\n  min-width: 170px;\n  max-width: 170px;\n  display: inline-block;\n  margin: 8px;\n  vertical-align: middle;\n}\n.btn_go {\n  vertical-align: bottom;\n  line-height: 1.6;\n  margin-bottom: .6em;\n  font-size: 11px;\n}\n.dropdown-menu {\n  position: absolute;\n  top: -.5rem;\n  left: -9.5rem;\n  min-width: 160px;\n}\n.dropdown-menu .dropdown-item {\n  padding: .4em 1em;\n  border-right: 1pt solid #eee;\n  color: black;\n  display: flex;\n  cursor: pointer;\n}\n.dropdown-menu .dropdown-item:hover {\n  color: white;\n  background: #0084f6;\n}\n.btn-sm {\n  padding: .25rem .5rem;\n  font-size: .875rem;\n  line-height: 1.5;\n  border-radius: .2rem;\n  border-color: #bdbdbd !important;\n  padding: .4em .6em;\n  line-height: 1;\n  color: #212529;\n  background-color: #f8f9fa;\n}\n.btn-danger {\n  color: #fff;\n  background-color: #ac2925;\n  border-color: #761c19;\n}\n.btn-danger:hover {\n  border-color: #761c19 !important;\n}\n.btn-primary {\n  color: #fff;\n  background-color: #0062cc;\n  border-color: #005cbf;\n}\n.btn-primary:hover {\n  border-color: #005cbf !important;\n}\n.product-cellbox {\n  max-width: 240px;\n  cursor: default;\n  width: 100%;\n}\n.product-cellbox .image {\n  max-width: 40px;\n}\n.product-cellbox .media-body .title {\n  font-size: 1em;\n}\n.product-cellbox .media-body .description {\n  font-size: .9em;\n  color: #666;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin: 0;\n}\n.table td,\n.table th {\n  vertical-align: middle;\n}\n.product-table {\n  border-collapse: separate;\n  border-spacing: 0 .8em;\n}\n.product-table .product-table-head {\n  background: #fff;\n}\n.product-table .product-table-head tr {\n  border: 0;\n  cursor: default;\n}\n.product-table .product-table-head tr th {\n  border: 0;\n  padding: .2em .6em;\n  font-weight: normal;\n  border-top: 0;\n}\n.product-table .product-table-body tr {\n  box-shadow: 0 0 2pt #b9b9b9;\n  border-radius: .2em;\n}\n.product-table .product-table-body tr td {\n  padding: .6em;\n  font-size: 1em;\n  border-top: 0;\n}\n.btn-xs {\n  padding: .4em .6em;\n  font-size: .8em;\n  line-height: 1;\n}\n.adv_prod_border {\n  border-left: 5px solid #27c24c;\n  border-radius: .2em;\n}\n.normal_prod_border {\n  border-left: 5px solid #005cbf;\n  border-radius: .2em;\n}\n.horizontal-menu.show {\n  display: flex;\n  padding: 0;\n  border: 1pt solid #ddd;\n  box-shadow: 0 0 10pt #dadada;\n}\n.horizontal-menu.show .dropdown-item {\n  padding: .5em 1em;\n  border-right: 1pt solid #eee;\n}\n.horizontal-menu.show .dropdown-item:hover {\n  color: #07f;\n}\n.horizontal-menu.show .dropdown-item:last-child {\n  border-right: 0;\n}\n.text-bold {\n  font-weight: 600;\n}\n.btn-light {\n  border-color: #bdbdbd !important;\n  padding: .4em .6em;\n  font-size: 12px;\n  line-height: 1;\n  color: #212529 !important;\n  background-color: #f8f9fa;\n}\n.btn-light:hover {\n  color: #212529;\n  background-color: #e2e6ea;\n  border-color: #dae0e5;\n}\n.fade-out {\n  display: none;\n  transition: all 0s ease .5s;\n}\n.fade-in {\n  display: block;\n}\n.ecourse-list {\n  background: #0084f6;\n  display: inline-block;\n  padding: 2px 4px;\n  border: 1px solid #0084f6;\n  color: white;\n  border-radius: 4px;\n  margin-right: 8px;\n  font-size: 10px;\n  margin-bottom: 2px;\n}\n.table tr {\n  cursor: context-menu;\n}\n.pagination {\n  margin: 0;\n}\n.pagination .first:before {\n  content: \"?? \";\n  font-size: 16px;\n  font-weight: 800;\n}\n.pagination .last:after {\n  content: \" ??\";\n  font-size: 16px;\n  font-weight: 800;\n}\n.pagination .batch-size {\n  font-size: 16px;\n  font-weight: 800;\n  border-bottom: 1px solid black;\n}\n.pagination li {\n  border-right: 1px solid #ccc;\n  padding: 0 7px;\n  margin: 0;\n  line-height: 10px;\n  font-weight: 800;\n  cursor: pointer;\n}\n.pagination li a {\n  line-height: 10px;\n  font-size: 16px;\n  font-weight: 800;\n  border: none;\n  padding: 0 14px;\n}\n.pagination li:last-child {\n  border-right: 0;\n  padding-right: 0;\n}\n.black-bg {\n  background: rgba(12, 11, 11, 0.3);\n  position: fixed;\n  top: 0;\n  height: 100%;\n  left: 0;\n  z-index: 1055;\n  width: 100%;\n}\n.datePickerBox .form-ctrl {\n  position: relative;\n  z-index: 1;\n  float: left;\n  border-radius: 4px;\n  font: 400 12px 'Open sans',sans-serif;\n  width: 70% !important;\n}\n.datePickerBox:after {\n  content: '';\n  background: url('calendar.svg') no-repeat;\n  position: absolute;\n  left: 57% !important;\n  top: 29px !important;\n  width: 21px;\n  height: 21px;\n  z-index: 0;\n}\n.datePickerBox .black-bg {\n  background: rgba(12, 11, 11, 0.3);\n  position: fixed;\n  top: 0;\n  height: 100%;\n  left: 0;\n  z-index: 2000;\n  width: 100%;\n}\n::ng-deep .bs-datepicker-container,\n.bs-daterangepicker-container {\n  margin-left: 5% !important;\n}\n.table-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n.table-container .heading-container {\n  background: #e0eaec;\n  display: flex;\n  flex-direction: row;\n  font-size: 14px;\n  font-weight: 600;\n  text-align: left;\n  padding: 7px;\n  border: 1px solid #ccc;\n  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);\n  margin-bottom: 5px;\n  margin-top: 5px;\n  border-radius: 6px;\n  border-left: 5px solid #e0eaec;\n}\n.table-container .heading-container .heading-item {\n  width: 60%;\n  text-align: center;\n  display: -webkit-box;\n  -webkit-box-align: center;\n}\n.table-container .value-outer-container {\n  display: flex;\n  flex-direction: column;\n  min-height: 47vh;\n  max-height: 47vh;\n  overflow-x: hidden;\n  overflow-y: auto;\n  border: 1px solid #ccc;\n}\n.table-container .value-outer-container .value-container {\n  display: flex;\n  flex-direction: row;\n  text-align: left;\n  padding: 5px;\n  padding-top: 7px;\n  padding-bottom: 5px;\n  font-size: 12px;\n  border-bottom: 1px solid #ccc;\n  border-top: none;\n}\n.table-container .value-outer-container .value-container .value-item {\n  width: 60%;\n  text-align: center;\n  display: -webkit-box;\n  -webkit-box-align: center;\n}\n.table-container .th {\n  padding: .6em;\n  font-size: 12px;\n}\n.table-container .td {\n  padding: .6em;\n}\n.table-container .dataContiner {\n  margin-bottom: 10px;\n  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);\n  border-radius: 4px;\n  min-height: auto;\n  padding: 0 !important;\n}\n.freeProduct {\n  text-transform: uppercase;\n  color: green;\n}\n.paidProduct {\n  text-transform: uppercase;\n  color: orangered;\n}\n.pr-btn {\n  color: white;\n  background: #0084f6;\n}\n.fa-link {\n  display: block;\n  cursor: pointer;\n}\n.mess {\n  position: absolute;\n  margin-top: -25px;\n  border: 1px solid lightgrey;\n  background: lightgrey;\n  border-radius: 4px;\n  padding: 2px;\n}\n#helpFAQ .modal-dialog {\n  width: 800px;\n}\n#helpFAQ .modal-body {\n  height: 450px;\n  overflow-y: auto;\n}\n#helpFAQ ul, #helpFAQ ol {\n  list-style-type: decimal;\n  padding-left: 20px;\n  margin-top: 0px;\n  font-size: 14px;\n  margin-bottom: 10px;\n}\n#helpFAQ ul li, #helpFAQ ol li {\n  margin-bottom: 5px;\n}\n#helpFAQ ul {\n  color: gray;\n  list-style-type: disc;\n}\n#helpFAQ .new-modules-list {\n  margin-bottom: 20px;\n}\n#helpFAQ .module-title {\n  text-transform: uppercase;\n  width: 100%;\n  font-size: 14px;\n  font-weight: 600;\n  padding-bottom: 10px;\n  margin-bottom: 10px;\n}\n#helpFAQ .module-title span {\n  background: #00b55a;\n  padding: 5px 20px;\n  color: white;\n  border-radius: 4px;\n  font-size: 12px;\n}\n#helpFAQ .old span {\n  background: #ff6c24;\n}\n.leftCol {\n  font-weight: 600;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lU3RvcmUtbW9kdWxlL3Byb2R1Y3QtbGlzdC9wcm9kdWN0LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXNzZXRzL2Nzcy9jb21tb24vdmFyaWFibGVzLnNjc3MiLCJzcmMvYXNzZXRzL2Nzcy9jb21tb24vY29tbW9uLXdlYi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ1loQix1RUFBQTtBQVdBOztFQUtnQixrQkFBa0I7RUFDbEIsaUJBQWlCO0FEdkJqQztBQ2lCQTtFQVNnQiwwQkFBMEI7RUFDMUIsZUFBZTtBRHRCL0I7QUNZQTtFQWdCNEIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsV0FBVztFQUNYLGtCQUFrQjtFQUNsQix1QkFBdUI7QUR4Qm5EO0FDR0E7RUF1QmdDLFVBQVU7QUR0QjFDO0FDREE7RUEwQmdDLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtBRHJCdEQ7QUNSQTtFQWdDb0MsVUFBVTtBRHBCOUM7QUNaQTtFQW9DZ0MsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLE9BQU87RUFDUCxNQUFNO0VBQ04sa0JBQWtCO0FEcEJsRDtBQ3RCQTtFQThDNEIsY0FsRGI7RUFtRGEsZUFBZTtBRHBCM0M7QUM2QkE7RUFDSSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxnQkFBZ0I7QUQxQnBCO0FDc0JBO0VBTU0sbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIseUJBQXlCO0FEeEIvQjtBQ1NBO0VBaUJRLFVBQVU7RUFDVixrQkFBa0I7QUR0QjFCO0FDSUE7RUFzQk0sYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsZ0JB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VWpDO0FBNVhBO0VBb0RJLGFBQWE7RUFDYixlQUFlO0FBNFVuQjtBQWpZQTtFQXdESSxhQUFhO0FBNlVqQjtBQXJZQTtFQTRESSxtQkFBbUI7RUFDbkIsMkNBQTJDO0VBQzNDLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIscUJBQXFCO0FBNlV6QjtBQXpVQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBNFVkO0FBelVBO0VBQ0UseUJBQXlCO0VBQ3pCLGdCQUFnQjtBQTRVbEI7QUF2VUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0FBMFVyQjtBQXhVQTtFQUNFLGNBQWM7RUFDUixlQUFlO0FBMlV2QjtBQXhVQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsMkJBQTJCO0VBQzNCLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsWUFBWTtBQTJVZDtBQXpVQTtFQUVLLFlBQVk7QUEyVWpCO0FBN1VBO0VBS0ssYUFBYTtFQUNiLGdCQUFnQjtBQTRVckI7QUFsVkE7RUFTSyx3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixlQUFlO0VBRWYsbUJBQW1CO0FBNFV4QjtBQTFWQTtFQWdCTyxrQkFBa0I7QUE4VXpCO0FBOVZBO0VBb0JLLFdBQVc7RUFDWCxxQkFBcUI7QUE4VTFCO0FBbldBO0VBd0JLLG1CQUFtQjtBQStVeEI7QUF2V0E7RUEyQksseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixtQkFBbUI7QUFnVnhCO0FBaFhBO0VBa0NPLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0FBa1Z0QjtBQXhYQTtFQTBDSyxtQkFBbUI7QUFrVnhCO0FBOVVDO0VBQ0MsZ0JBQWdCO0FBaVZsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZVN0b3JlLW1vZHVsZS9wcm9kdWN0LWxpc3QvcHJvZHVjdC1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4vc3JjL2Fzc2V0cy9jc3MvY29tbW9uL2NvbW1vbi13ZWIuc2Nzc1wiO1xuXG4ucHJvZHVjdC13cmFwcGVyIHtcbiAgcGFkZGluZzogLjhlbTtcbiAgd2lkdGg6IDk5JTtcbn1cblxuLmJ0bi1wcm9kdWN0IHtcbiAgcGFkZGluZy1sZWZ0OiAuOGVtO1xuICBwYWRkaW5nLXJpZ2h0OiAuOGVtO1xufVxuXG4ucHJvZmlsZV9pbWcge1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MnB4O1xuICBtYXgtd2lkdGg6IDQwcHg7XG4gIG1heC1oZWlnaHQ6IDQwcHg7XG59XG5cbi5hZGQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGJhY2tncm91bmQ6ICMwMDY2Yjc7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IC0ycHg7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGNvbG9yOiAjZmZmO1xuXG4gICY6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnKyc7XG4gIH1cbn1cblxuLmFjdGlvbi1iYXIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmV5O1xuICAvLyBwYWRkaW5nOiAwLjVlbSAwO1xuICBwYWRkaW5nLWJvdHRvbTogMTJweDtcbiAgLy8gYmFja2dyb3VuZDogI2ZhZmFmYTtcblxuICAuY29udGFpbmVyIHtcbiAgICAuZm9ybS1lbC13aWR0aCB7XG4gICAgICB3aWR0aDogYXV0bztcbiAgICAgIG1pbi13aWR0aDogMTcwcHg7XG4gICAgICBtYXgtd2lkdGg6IDE3MHB4O1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgbWFyZ2luOiA4cHg7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIH1cbiAgfVxufVxuXG4uYnRuX2dvIHtcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgbWFyZ2luLWJvdHRvbTogLjZlbTtcbiAgZm9udC1zaXplOiAxMXB4O1xufVxuXG4uZHJvcGRvd24tbWVudSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtLjVyZW07XG4gIGxlZnQ6IC05LjVyZW07XG4gIG1pbi13aWR0aDogMTYwcHg7XG5cbiAgLmRyb3Bkb3duLWl0ZW0ge1xuICAgIHBhZGRpbmc6IC40ZW0gMWVtO1xuICAgIGJvcmRlci1yaWdodDogMXB0IHNvbGlkICNlZWU7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBiYWNrZ3JvdW5kOiAjMDA4NGY2O1xuICAgIH1cbiAgfVxufVxuXG4uYnRuLXNtIHtcbiAgcGFkZGluZzogLjI1cmVtIC41cmVtO1xuICBmb250LXNpemU6IC44NzVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGJvcmRlci1yYWRpdXM6IC4ycmVtO1xuICBib3JkZXItY29sb3I6ICNiZGJkYmQgIWltcG9ydGFudDtcbiAgcGFkZGluZzogLjRlbSAuNmVtO1xuICBsaW5lLWhlaWdodDogMTtcbiAgY29sb3I6ICMyMTI1Mjk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG59XG5cbi5idG4tZGFuZ2VyIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhYzI5MjU7XG4gIGJvcmRlci1jb2xvcjogIzc2MWMxOTtcblxuICAmOmhvdmVyIHtcbiAgICBib3JkZXItY29sb3I6ICM3NjFjMTkgIWltcG9ydGFudDtcbiAgfVxufVxuXG4uYnRuLXByaW1hcnkge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjJjYztcbiAgYm9yZGVyLWNvbG9yOiAjMDA1Y2JmO1xuXG4gICY6aG92ZXIge1xuICAgIGJvcmRlci1jb2xvcjogIzAwNWNiZiAhaW1wb3J0YW50O1xuXG4gIH1cbn1cblxuLnByb2R1Y3QtY2VsbGJveCB7XG4gIG1heC13aWR0aDogMjQwcHg7XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgLmltYWdlIHtcbiAgICBtYXgtd2lkdGg6IDQwcHg7XG4gIH1cblxuICAubWVkaWEtYm9keSB7XG4gICAgLnRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIH1cblxuICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICBmb250LXNpemU6IC45ZW07XG4gICAgICBjb2xvcjogIzY2NjtcbiAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xuICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gIH1cbn1cblxuLnRhYmxlIHtcbiAgdGQsXG4gIHRoIHtcbiAgICAvLyBwYWRkaW5nOiAxLjJlbSAuNmVtICFpbXBvcnRhbnQ7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgfVxufVxuXG4ucHJvZHVjdC10YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XG4gIGJvcmRlci1zcGFjaW5nOiAwIC44ZW07XG5cbiAgLnByb2R1Y3QtdGFibGUtaGVhZCB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcblxuICAgIHRyIHtcbiAgICAgIGJvcmRlcjogMDtcbiAgICAgIGN1cnNvcjogZGVmYXVsdDtcblxuICAgICAgdGgge1xuICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgIHBhZGRpbmc6IC4yZW0gLjZlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgYm9yZGVyLXRvcDogMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAucHJvZHVjdC10YWJsZS1ib2R5IHtcbiAgICB0ciB7XG4gICAgICBib3gtc2hhZG93OiAwIDAgMnB0ICNiOWI5Yjk7XG4gICAgICBib3JkZXItcmFkaXVzOiAuMmVtO1xuXG4gICAgICB0ZCB7XG4gICAgICAgIHBhZGRpbmc6IC42ZW07XG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgICBib3JkZXItdG9wOiAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uYnRuLXhzIHtcbiAgcGFkZGluZzogLjRlbSAuNmVtO1xuICBmb250LXNpemU6IC44ZW07XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG4uYWR2X3Byb2RfYm9yZGVyIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjMjdjMjRjO1xuICBib3JkZXItcmFkaXVzOiAuMmVtO1xufVxuXG4ubm9ybWFsX3Byb2RfYm9yZGVyIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjMDA1Y2JmO1xuICBib3JkZXItcmFkaXVzOiAuMmVtO1xufVxuXG4uaG9yaXpvbnRhbC1tZW51LnNob3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IDFwdCBzb2xpZCAjZGRkO1xuICBib3gtc2hhZG93OiAwIDAgMTBwdCAjZGFkYWRhO1xuXG4gIC5kcm9wZG93bi1pdGVtIHtcbiAgICBwYWRkaW5nOiAuNWVtIDFlbTtcbiAgICBib3JkZXItcmlnaHQ6IDFwdCBzb2xpZCAjZWVlO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogIzA3ZjtcbiAgICB9XG5cbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgYm9yZGVyLXJpZ2h0OiAwO1xuICAgIH1cbiAgfVxufVxuXG4udGV4dC1ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmJ0bi1saWdodCB7XG4gIGJvcmRlci1jb2xvcjogI2JkYmRiZCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAuNGVtIC42ZW07XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGNvbG9yOiAjMjEyNTI5ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG5cbiAgJjpob3ZlciB7XG4gICAgY29sb3I6ICMyMTI1Mjk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UyZTZlYTtcbiAgICBib3JkZXItY29sb3I6ICNkYWUwZTU7XG4gIH1cbn1cblxuLmZhZGUtb3V0IHtcbiAgZGlzcGxheTogbm9uZTtcbiAgdHJhbnNpdGlvbjogYWxsIDBzIGVhc2UgLjVzO1xufVxuXG4uZmFkZS1pbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZWNvdXJzZS1saXN0IHtcbiAgYmFja2dyb3VuZDogIzAwODRmNjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAycHggNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDA4NGY2O1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xufVxuXG4udGFibGUgdHIge1xuICBjdXJzb3I6IGNvbnRleHQtbWVudTtcbn1cblxuLnBhZ2luYXRpb24ge1xuICBtYXJnaW46IDA7XG5cbiAgLmZpcnN0IHtcbiAgICAmOmJlZm9yZSB7XG4gICAgICBjb250ZW50OiBcIsKrIFwiO1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICB9XG4gIH1cblxuICAubGFzdCB7XG4gICAgJjphZnRlciB7XG4gICAgICBjb250ZW50OiBcIiDCu1wiO1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICB9XG4gIH1cblxuICAuYmF0Y2gtc2l6ZSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xuICB9XG5cbiAgbGkge1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjY2M7XG4gICAgcGFkZGluZzogMCA3cHg7XG4gICAgbWFyZ2luOiAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgYSB7XG4gICAgICBsaW5lLWhlaWdodDogMTBweDtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBwYWRkaW5nOiAwIDE0cHg7XG4gICAgfVxuICB9XG59XG5cbi5wYWdpbmF0aW9uIGxpOmxhc3QtY2hpbGQge1xuICBib3JkZXItcmlnaHQ6IDA7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG59XG5cbi5ibGFjay1iZyB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTIsIDExLCAxMSwgMC4zKTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTA1NTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5kYXRlUGlja2VyQm94IHtcbiAgLmZvcm0tY3RybCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDE7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIC8vIGJvcmRlci1yaWdodDogMDtcbiAgICAvLyBoZWlnaHQ6IDM1cHg7XG4gICAgZm9udDogNDAwIDEycHggJ09wZW4gc2Fucycsc2Fucy1zZXJpZjtcbiAgICB3aWR0aDogNzAlICFpbXBvcnRhbnQ7XG4gIH1cbiAgJjphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2NhbGVuZGFyLnN2ZycpIG5vLXJlcGVhdDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTclICFpbXBvcnRhbnQ7XG4gICAgdG9wOiAyOXB4ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDIxcHg7XG4gICAgaGVpZ2h0OiAyMXB4O1xuICAgIHotaW5kZXg6IDA7XG4gIH1cblxuICAuYmxhY2stYmcge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMTIsIDExLCAxMSwgMC4zKTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBsZWZ0OiAwO1xuICAgIHotaW5kZXg6IDIwMDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cblxuOjpuZy1kZWVwIC5icy1kYXRlcGlja2VyLWNvbnRhaW5lcixcbi5icy1kYXRlcmFuZ2VwaWNrZXItY29udGFpbmVyIHtcbiAgbWFyZ2luLWxlZnQ6IDUlICFpbXBvcnRhbnQ7XG59XG5cbi50YWJsZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbiAgLmhlYWRpbmctY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZTBlYWVjO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmc6IDdweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJveC1zaGFkb3c6IDAgM3B4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjZTBlYWVjO1xuICAgIC5oZWFkaW5nLWl0ZW0ge1xuICAgICAgd2lkdGg6IDYwJTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gIH1cbiAgLnZhbHVlLW91dGVyLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1pbi1oZWlnaHQ6IDQ3dmg7XG4gICAgbWF4LWhlaWdodDogNDd2aDtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIC52YWx1ZS1jb250YWluZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgcGFkZGluZy10b3A6IDdweDtcbiAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgICAudmFsdWUtaXRlbSB7XG4gICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC50aHtcbiAgICBwYWRkaW5nOiAuNmVtO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxuICAudGR7XG4gICAgcGFkZGluZzogLjZlbTtcbiAgfVxuXG4gIC5kYXRhQ29udGluZXJ7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBib3gtc2hhZG93OiAwIDNweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBtaW4taGVpZ2h0OiBhdXRvO1xuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgfVxufVxuXG4uZnJlZVByb2R1Y3R7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLnBhaWRQcm9kdWN0e1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogb3JhbmdlcmVkO1xufVxuXG5cbi8vIGFkZGVkIEJ5IHN3YXBuaWxcbi5wci1idG57XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogIzAwODRmNjtcbn1cbi5mYS1saW5re1xuICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubWVzc3tcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tdG9wOiAtMjVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmV5O1xuICBiYWNrZ3JvdW5kOiBsaWdodGdyZXk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcGFkZGluZzogMnB4O1xufVxuI2hlbHBGQVF7XG4gIC5tb2RhbC1kaWFsb2d7XG4gICAgIHdpZHRoOiA4MDBweDtcbiAgIH1cbiAgIC5tb2RhbC1ib2R5e1xuICAgICBoZWlnaHQ6IDQ1MHB4O1xuICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgfVxuICAgdWwsIG9sIHtcbiAgICAgbGlzdC1zdHlsZS10eXBlOiBkZWNpbWFsO1xuICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIC8vICBmb250LXdlaWdodDogNjAwO1xuICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICBsaXtcbiAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgIH1cbiAgIH1cbiAgIHVse1xuICAgICBjb2xvcjogZ3JheTtcbiAgICAgbGlzdC1zdHlsZS10eXBlOiBkaXNjO1xuICAgfVxuICAgLm5ldy1tb2R1bGVzLWxpc3R7XG4gICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICB9XG4gICAubW9kdWxlLXRpdGxle1xuICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICB3aWR0aDogMTAwJTtcbiAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgc3BhbntcbiAgICAgICBiYWNrZ3JvdW5kOiAjMDBiNTVhO1xuICAgICAgIHBhZGRpbmc6IDVweCAyMHB4O1xuICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICB9XG4gICB9XG4gICAub2xkIHNwYW57XG4gICAgIGJhY2tncm91bmQ6ICNmZjZjMjQ7XG4gICB9XG4gfVxuXG4gLmxlZnRDb2x7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gfVxuIiwiJHB1bGwtTDogbGVmdDtcbiRwdWxsLVI6IHJpZ2h0O1xuJHB1bGwtbm9uZTogbm9uZTtcbiRmdWxsLXdpZHRoOiAxMDAlO1xuJGJvcmRlci1ib3g6IGJvcmRlci1ib3g7XG4kYm9yZGVyLWNvbG9yOiAjZGVlYWVlO1xuJGJnLXdoaXRlOiAjZmZmO1xuJGVycm9yLWNvbG9yOiAjZmYwMDAwO1xuJGNvbW1vbi1ibHVlOiAjMDA4NGY2O1xuJHByaW1hcnktY29sb3I6ICMzMzM7XG4kYm9yZGVyLWNvbW1vbjojZWFlYWViO1xuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09aGVhZGVyIGNvbG9ycz09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuJGhlYWRlci1iZzojMDA2MEEzO1xuJGhlYWRlci1ib3JkZXI6I2VhZWFlYjtcbiRsZWZ0TWVudUJnOiNmYWZhZmE7XG4kbGVmdE1lbnVIb3ZlckJnOiMwMDg0ZjY7XG4kbGVmdE1lbnVUZXh0SG92ZXJDb2xvcjojZmZmO1xuJHJlZEJ0bjojZjQ0MzM2O1xuJGJvcmRlcmNjYzojY2NjO1xuJGxpZ2h0Qmx1ZTojZWZmN2ZmO1xuJHRhYmxlSGVhZGluZ0JnQ29sb3I6ICMwMDRhN2U7XG4udGFibGUtZm9ybWF0LWZpcnN0IHtcbiAgICAudGFibGUtcmVzcG9uc2l2ZSB7XG4gICAgICAgIHRhYmxlIHtcbiAgICAgICAgICAgIHRoLFxuICAgICAgICAgICAgdGQge1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoIHtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0Ym9keSB7XG4gICAgICAgICAgICAgICAgdHIge1xuICAgICAgICAgICAgICAgICAgICB0ZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuZmllbGQtY2hlY2tib3gtd3JhcHBlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBpbml0aWFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZm9ybS1jaGVja2JveCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mb3JtLWNoZWNrYm94K2xhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogN3B4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmFmdGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLmZhLXRyYXNoLW8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkcmVkQnRuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnRhYmxlLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgLmhlYWRpbmctY29udGFpbmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICNlMGVhZWM7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgICAuaGVhZGluZy1pdGVtIHtcbiAgICAgICAgd2lkdGg6IDEwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgIH1cbiAgICAudmFsdWUtb3V0ZXItY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgbWluLWhlaWdodDogNTN2aDtcbiAgICAgIG1heC1oZWlnaHQ6IDU0dmg7XG4gICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgIC52YWx1ZS1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgICAgICBib3JkZXItdG9wOiBub25lO1xuICAgICAgICAudmFsdWUtaXRlbSB7XG4gICAgICAgICAgd2lkdGg6IDEwJTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0iLCJAaW1wb3J0IFwiLi9zcmMvYXNzZXRzL2Nzcy9jb21tb24vdmFyaWFibGVzLnNjc3NcIjtcbi8qKiB0aGVzZSBjc3MgZm9yIGdlYXIgaWNvbiBkb3dubG9hZCBvcHRpb25zXG4qIGNyZWF0ZWQgYnkgbGF4bWlcbiovXG5zdmc6aG92ZXIgI2dlYXJJY29uIHtcbiAgZmlsbDogIzAwODRmNjtcbn1cblxuLmFzSG92ZXI6aG92ZXIge1xuICBjb2xvcjogIzAwODRmNiAhaW1wb3J0YW50O1xufVxuXG4uZG93bmxvYWQ6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5tYWRlLWluIHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmRyb3Bkb3duIHtcbiAgJiA+IHVsIHtcbiAgICBiYWNrZ3JvdW5kOiAkYmctd2hpdGU7XG4gICAgcGFkZGluZzogMTBweCAyMHB4OyAvLyB3aWR0aDogMjAwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJGhlYWRlci1ib3JkZXI7XG4gICAgYm9yZGVyLXRvcDogMDtcbiAgICBtYXJnaW4tdG9wOiAzcHg7XG4gICAgYm94LXNoYWRvdzogMCAycHggNHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDRweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDZweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcblxuICAgIGxpIHtcbiAgICAgIGNvbG9yOiAjMzMzO1xuXG4gICAgICBzdHJvbmcge1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cblxuICAgICAgYSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmxvZ2luLXR1YmUgbmF2ID4gdWwgPiBsaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubG9naW4tdHViZSBuYXYgPiB1bCA+IGxpID4gYSB7XG4gIGNvbG9yOiAjMzMzO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgdHJhbnNpdGlvbjogYWxsIC40cztcbn1cblxuLmxvZ2luLXR1YmUgbmF2ID4gdWwgPiBsaSA+IGE6aG92ZXIsXG4ubG9naW4tdHViZSBuYXYgPiB1bCA+IGxpOmhvdmVyID4gYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYmFja2dyb3VuZDogI2NjYztcbn1cblxuLmxvZ2luLXR1YmUgbmF2ID4gdWwgPiBsaSAuZHJvcGRvd24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMTAwJTtcbiAgbWluLXdpZHRoOiAyMDBweDtcbiAgYm9yZGVyLXRvcDogMDtcbiAgb3BhY2l0eTogMDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjFzIGN1YmljLWJlemllciguNTUsIDAsIC41NSwgLjIpO1xuICB0cmFuc2l0aW9uOiBhbGwgLjFzIGN1YmljLWJlemllciguNTUsIDAsIC41NSwgLjIpO1xuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IC4yNXM7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IC4ycztcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xuXG4gICYgPiB1bCB7XG4gICAgbGkge1xuICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcblxuICAgICAgYSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW46IDVweCAwO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGNvbG9yOiAkY29tbW9uLWJsdWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB1bCB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgICBwYWRkaW5nLXRvcDogMTBweDtcblxuICAgICAgdWwge1xuICAgICAgICBwYWRkaW5nLXRvcDogMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmxvZ2luLXR1YmUgbmF2ID4gdWwgPiBsaTpob3ZlciAuZHJvcGRvd24ge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG9wYWNpdHk6IDE7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDEwMCU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC40cyBjdWJpYy1iZXppZXIoLjI1LCAuOCwgLjI1LCAxKTtcbiAgdHJhbnNpdGlvbjogYWxsIC40cyBjdWJpYy1iZXppZXIoLjI1LCAuOCwgLjI1LCAxKTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAuNXM7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IC41cztcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cblxuLnB1bGwtcmlnaHQge1xuICAvLyBtYXJnaW4tdG9wOiAyNnB4O1xuICAvLyBtYXJnaW4tbGVmdDogMTIycHg7XG59XG5cbi5zcGFuLWJ1dHRvbiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDg0ZjY7XG4gIHBhZGRpbmc6IDRweCA4cHg7XG4gIGNvbG9yOiAjMDA4NGY2O1xuICBmb250LXNpemU6IC45ZW07XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gIHN2ZyB7XG4gICAgbWFyZ2luOiAtM3B4IDA7XG4gICAgaGVpZ2h0OiAxNHB4O1xuICB9XG59XG5cbmxvZ2luLW5hdiB7XG4gICAgJj5saSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgcGFkZGluZzogMCA3cHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xuICAgICAgICAuZHJvcGRvd24ge1xuICAgICAgICAgICAgLy8gZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgdG9wOiAxMDAlO1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAuZHJvcGRvd24ge1xuICAgICAgICAgICAgICAgIC8vIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmljb25zIHtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5pY29ucyB7XG4gICAgICAgICAgICB3aWR0aDogMzVweDtcbiAgICAgICAgICAgIGhlaWdodDogMzVweDsgLy8gYm9yZGVyOiAxcHggc29saWQgJGJvcmRlci1jb2xvcjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAzcHg7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4xcztcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgICAgICAgICBjb2xvcjojMDM0OTc5O1xuXG4gICAgICAgICAgICAgICAgLmNscy0xIHtcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiAjMDM0OTc5O1xuICAgICAgICAgICAgICAgICAgICBzdHJva2UtbGluZWpvaW46IHVuc2V0O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC51c2VyLWluZm8ge1xuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNDBweDtcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAmPi5pY29ucyB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmPnNwYW4ge1xuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIGZvbnQ6IG5vcm1hbCBub3JtYWwgbm9ybWFsIDE0cHgvMSBGb250QXdlc29tZTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgICAgICAgICAgICAgdGV4dC1yZW5kZXJpbmc6IGF1dG87XG4gICAgICAgICAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgICAgICAgICAgICAgY29udGVudDogXCJcXGYxMDdcIjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAtMjBweDtcbiAgICAgICAgICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qKlxuICB0aGlzIGNzcyBpcyBmb3IgcmVwb3J0IHNlY3Rpb24gY3NzIGZvciBjYXJkc1xuICBhZGRlZCBieSBsYXhtaVxuKi9cbi5yZXBvcnQtYm94IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMTBweDtcbiAgdWwge1xuICAgICAgJi5jYXJkLWJveCB7XG4gICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAmLmNhcmQtcm93IHtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweCAwcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgICAmLmNhcmQge1xuICAgICAgICAgIHBhZGRpbmc6IDE1cHggMTBweDtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWZlZmVmO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgaGVpZ2h0OiAxMjBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgbWFyZ2luOiAxMHB4IDBweDtcbiAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDJweCAwcHg7XG4gICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDVweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAmOm50aC1jaGlsZCgybil7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgfVxufVxuXG4uZGlzYWJsZWR7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIGJhY2tncm91bmQ6IGxpZ2h0Z3JleTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/eStore-module/product-list/product-list.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/eStore-module/product-list/product-list.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/authenticator.service */ "./src/app/services/authenticator.service.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_message_show_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/message-show.service */ "./src/app/services/message-show.service.ts");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/products.service */ "./src/app/services/products.service.ts");
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






let ProductListComponent = /** @class */ (() => {
    let ProductListComponent = class ProductListComponent {
        constructor(http, msgService, _http, auth) {
            this.http = http;
            this.msgService = msgService;
            this._http = _http;
            this.auth = auth;
            this.filter = {
                between: {
                    from: null,
                    to: null
                },
                by: {
                    title: null,
                    publishDate: null,
                    isPaid: null,
                    ecourseId: '-1',
                    status: null,
                    productType: -1
                },
            };
            this.helpMsg = "Product on which the bar colour is green,is an advanced product";
            /* Variable to handle popups */
            this.varJson = {
                PageIndex: 1,
                sizeArr: [5, 25, 50, 100, 150, 200, 500],
                displayBatchSize: 25,
                total_items: 0
            };
            this.showMessage = false;
            this.productList = [];
            this.productDetails = [];
            this.ecourseList = [];
            this.subjectsList = [];
            this.studentDetails = [];
            this.masterCourseDetails = [];
            this.courseDetails = [];
            this.product_details_for_student = '';
            this.notifyToStudents = true;
            // activeStudents = true;
            this.isProfessional = true;
            this.deleteItem = {
                textTitle: '',
                title: '',
                entity_id: 0,
                operation: '',
                btnText: 'Loading...'
            };
            this.jsonKeys = {
                selectAll: false,
                institute_id: ''
            };
        }
        ngOnInit() {
            this.jsonKeys.institute_id = sessionStorage.getItem('institute_id');
            this.auth.institute_type.subscribe(res => {
                if (res == 'LANG') {
                    this.isProfessional = true;
                }
                else {
                    this.isProfessional = false;
                }
            });
            this.fectchTableDataByPage(1);
            this.getAllProductDetails();
        }
        /*** pagination functions */
        /* Fetch next set of data from server and update table */
        fetchNext() {
            this.varJson.PageIndex++;
            this.fectchTableDataByPage(this.varJson.PageIndex);
        }
        /* Fetch previous set of data from server and update table */
        fetchPrevious() {
            this.varJson.PageIndex--;
            this.fectchTableDataByPage(this.varJson.PageIndex);
        }
        getAllProductDetails() {
            this.auth.showLoader();
            this.http.getMethod('product/get-product-list', null).subscribe((data) => {
                this.auth.hideLoader();
                this.productDetails = data.result;
            }, (error) => {
                this.auth.hideLoader();
                this.msgService.showErrorMessage('error', error.message, '');
            });
        }
        /* Fetch table data by page index */
        fectchTableDataByPage(index) {
            this.varJson.PageIndex = index;
            let object = {
                "page_no": this.varJson.PageIndex,
                "no_of_records": this.varJson.displayBatchSize
            };
            this.auth.showLoader();
            this.http.postMethod('product/get', object).then((resp) => {
                let response = resp['body'];
                this.auth.hideLoader();
                if (response.validate) {
                    this.productList = response.result.results;
                    this.varJson.total_items = response.result.total_records;
                    // -- added by laxmi
                    // this code is used to laod image url dynamically not save in locally so dont remove it
                    this.productList.forEach(obj => {
                        if (obj.logo_url) {
                            obj.logo_url = obj.logo_url + "?t=" + new Date().getTime(); //
                        }
                    });
                }
                else {
                    this.auth.hideLoader();
                    this.msgService.showErrorMessage('error', "something went wrong, try again", '');
                }
            }, (err) => {
                this.auth.hideLoader();
                this.msgService.showErrorMessage('error', "something went wrong, try again", '');
            });
        }
        convertUTCDateToLocalDate(date_s) {
            var date = new Date(date_s);
            // var newDate = new Date(date.getTime()+date.getTimezoneOffset()*60*1000);
            //
            // var offset = date.getTimezoneOffset() / 60;
            // var hours = date.getHours();
            //
            // newDate.setHours(hours - offset);
            return moment__WEBPACK_IMPORTED_MODULE_1__(date).format('DD MMM YYYY');
        }
        /* Fetches Data as per the user selected batch size */
        updateTableBatchSize(num) {
            this.varJson.PageIndex = 1;
            this.varJson.displayBatchSize = parseInt(num);
            this.fectchTableDataByPage(this.varJson.PageIndex);
        }
        getSubjectList() {
            //  Fetch Subjects List
            //<base_url>/ecourse/{institute_id}/{ecourse_id}/subjects
            this.auth.hideLoader();
            this.filter.subject_id = '-1';
            this.subjectsList = [];
            this._http.getData('/api/v1/ecourse/' + this.jsonKeys.institute_id + '/' + this.filter.ecourse_id + '/subjects').subscribe((resp) => {
                this.auth.hideLoader();
                if (resp && resp.length) {
                    this.subjectsList = resp;
                }
            }, (err) => {
                this.auth.hideLoader();
                this.msgService.showErrorMessage('error', err['error'].errors.message, '');
            });
            // }
        }
        actionProductModal(operation, id) {
            this.deleteItem.operation = operation;
            let item = this.productList.filter(item => item.entity_id == id)[0];
            this.deleteItem.title = item.title;
            this.deleteItem.entity_id = item.entity_id;
            switch (operation) {
                case 'delete': {
                    this.deleteItem.textTitle = "Are you sure, you want to delete " + this.deleteItem.title + " ? ";
                    this.deleteItem.btnText = 'Delete';
                    break;
                }
                case 'readytopublish': {
                    this.deleteItem.textTitle = "Do you want to change the status of " + this.deleteItem.title + " to ready ";
                    this.deleteItem.btnText = 'Ready To Publish';
                    break;
                }
                case 'ready': {
                    this.deleteItem.btnText = 'Ready';
                    this.deleteItem.textTitle = "Do you want to change the status of " + this.deleteItem.title + " to ready ? ";
                    break;
                }
                case 'publish': {
                    this.deleteItem.textTitle = "Do you want to publish " + this.deleteItem.title + " ? ";
                    this.deleteItem.btnText = 'Publish';
                    break;
                }
                case 'unpublish': {
                    this.deleteItem.textTitle = "Are you sure, you want to unpublish  " + this.deleteItem.title + " ? ";
                    this.deleteItem.btnText = 'Unpublish';
                    break;
                }
                case 'close': {
                    this.deleteItem.textTitle = "Are you sure, you want to close  " + this.deleteItem.title + " ? ";
                    this.deleteItem.btnText = 'Close';
                    break;
                }
            }
            $("#actionProductModal").modal({
                backdrop: 'static',
                keyboard: false,
                show: true
            });
        }
        showAssignStudentPopup(data) {
            this.master_course_name = '';
            this.course_id = '';
            this.batch_id = '';
            this.product_details_for_student = data;
            this.courseDetails = [];
            this.getStudentDetails();
            this.getMasterCourseData();
            $("#assignStudent").modal({
                backdrop: 'static',
                keyboard: false,
                show: true
            });
        }
        getStudentDetails() {
            this.jsonKeys.selectAll = false;
            this.studentDetails = [];
            let ecourse = Array.prototype.map.call(this.product_details_for_student.product_ecourse_maps, ecourse => ecourse.course_type_id);
            let object = {};
            if (!this.isProfessional) {
                object = {
                    "ecourse_ids": ecourse,
                    "master_course_name": "",
                    "course_id": ""
                };
                if (this.course_id != '') {
                    object = {
                        "course_id": this.course_id
                    };
                }
                else if (this.master_course_name != '') {
                    object = {
                        "master_course_name": this.master_course_name,
                    };
                }
            }
            else {
                object = {
                    "ecourse_ids": ecourse,
                    'standard_id': "",
                    'subject_id': "",
                    'batch_id': ""
                };
                if (this.batch_id != "") {
                    object = {
                        "ecourse_ids": ecourse,
                        "master_course_name": this.master_course_name,
                        "course_id": this.course_id
                    };
                }
                else if (this.master_course_name != "" && this.course_id != "" && this.batch_id != "") {
                    object = {
                        "ecourse_ids": [],
                        'standard_id': "",
                        'subject_id': "",
                        'batch_id': this.batch_id
                    };
                }
                else if (this.master_course_name != "" && this.course_id != "") {
                    object = {
                        "ecourse_ids": [],
                        'standard_id': this.master_course_name,
                        'subject_id': this.course_id,
                        'batch_id': ""
                    };
                }
                else if (this.master_course_name != "") {
                    object = {
                        "ecourse_ids": [],
                        'standard_id': this.master_course_name,
                        'subject_id': "",
                        'batch_id': ""
                    };
                }
            }
            console.log(object);
            this.auth.showLoader();
            const url = `user-product/student-details/${this.product_details_for_student.entity_id}`;
            this.http.postMethod(url, object).then((resp) => {
                this.auth.hideLoader();
                if (resp) {
                    let data = resp['body'];
                    if (resp && data.validate) {
                        this.studentDetails = data.result;
                        this.toggleAllCheckBox('');
                    }
                    else {
                        this.msgService.showErrorMessage('info', 'Something went wrong, try again ', '');
                    }
                }
            }, (err) => {
                this.auth.hideLoader();
                this.msgService.showErrorMessage('info', 'Something went wrong, try again ', '');
            });
        }
        // getAllActiveStudents() {
        //   // if (!this.activeStudents) {
        //   this.master_course_name = '';
        //   this.course_id = '';
        //   this.batch_id = '';
        //   this.getStudentDetails();
        //   // } else {
        //     // this.studentDetails = [];
        //   // }
        // }
        getMasterCourseData() {
            // this.auth.showLoader();
            let ecourse = Array.prototype.map.call(this.product_details_for_student.product_ecourse_maps, ecourse => ecourse.course_type_id);
            let object = {
                'ecourse_ids': ecourse,
                'instiute_id': sessionStorage.getItem('institute_id')
            };
            this._http.postData('/api/v1/institute/courseMapping/get-mastercourse-or-standard', object).subscribe((resp) => {
                // this.auth.hideLoader();
                if (resp) {
                    this.masterCourseDetails = resp;
                }
            }, (err) => {
                // this.auth.hideLoader();
                this.msgService.showErrorMessage('error', err['error'].errors.message, '');
            });
        }
        getCourseDetails(event) {
            this.auth.showLoader();
            let ecourse = [];
            if (event == '') {
                ecourse = Array.prototype.map.call(this.product_details_for_student.product_ecourse_maps, ecourse => ecourse.course_type_id);
            }
            let object = {
                'ecourse_ids': ecourse,
                'instiute_id': sessionStorage.getItem('institute_id'),
                'master_course_name': event
            };
            this._http.postData('/api/v1/institute/courseMapping/get-courses', object).subscribe((resp) => {
                this.auth.hideLoader();
                if (resp) {
                    this.courseDetails = resp.course_list;
                }
            }, (err) => {
                this.auth.hideLoader();
                this.msgService.showErrorMessage('error', err['error'].errors.message, '');
            });
        }
        getSubjectDetails(event) {
            this.auth.showLoader();
            this._http.getData('/api/v1/batches/fetchCombinedBatchData/' + this.jsonKeys.institute_id + '?standard_id=' + event + '&subject_id =-1' + '&assigned = N').subscribe((resp) => {
                this.auth.hideLoader();
                if (resp) {
                    this.courseDetails = resp;
                }
            }, (err) => {
                this.auth.hideLoader();
                this.msgService.showErrorMessage('error', err['error'].errors.message, '');
            });
        }
        assignStudentToProduct() {
            const user_id_list = [];
            const user_id_list_deAssigned = [];
            this.studentDetails.forEach(stu => {
                if (stu.isSelected && !stu.is_product_already_purchased) {
                    user_id_list.push(stu.user_id);
                }
                if (!stu.isSelected && stu.is_product_already_purchased) {
                    user_id_list_deAssigned.push(stu.user_id);
                }
            });
            let is_send_sms = 'N';
            if (this.notifyToStudents) {
                is_send_sms = 'Y';
            }
            let object = {
                "product_id": this.product_details_for_student.entity_id,
                "user_id_list": user_id_list,
                "product_unassigned_user_ids": user_id_list_deAssigned,
                'is_send_sms': is_send_sms
            };
            console.log(object);
            this.auth.showLoader();
            this.http.postMethod('order/assign-product', object).then((resp) => {
                this.auth.hideLoader();
                if (resp) {
                    let data = resp['body'];
                    if (resp && data.validate) {
                        this.msgService.showErrorMessage('success', 'Students Assigned/Unassigned Successfully!', '');
                        this.closePopup();
                    }
                    else {
                        this.msgService.showErrorMessage('error', data.error[0].error_message, '');
                    }
                }
            }, (err) => {
                this.auth.hideLoader();
                this.msgService.showErrorMessage('info', 'Something went wrong, try again ', '');
            });
        }
        studentDataOnMasterCourse() {
            // this.activeStudents = false;
            this.getStudentDetails();
        }
        closePopup() {
            $("#assignStudent").modal('hide');
        }
        clearStudentFilter() {
            this.master_course_name = '';
            this.course_id = '';
            this.batch_id = '';
            this.getStudentDetails();
        }
        confirmAction(operation, id) {
            let item = this.productList.filter(item => item.entity_id == id)[0];
            let object = {
                "status": 10,
                "entity_id": item.entity_id
            };
            switch (operation) {
                case 'delete': {
                    this.auth.showLoader();
                    this.http.getMethod('product/delete/' + id, null).subscribe((resp) => {
                        this.auth.hideLoader();
                        console.log(resp);
                        if (resp && resp.validate) {
                            let response = resp.result;
                            this.msgService.showErrorMessage('success', 'Product deleted successfully!', '');
                            $("#actionProductModal").modal('hide');
                            this.productList.forEach((element, index) => {
                                if (element.entity_id == response.entity_id) {
                                    this.productList.splice(index, 1);
                                    console.log(this.productList);
                                }
                            });
                            this.varJson.total_items--;
                        }
                        else {
                            this.msgService.showErrorMessage('info', 'Something went wrong, try again ', '');
                        }
                    }, (err) => {
                        this.auth.hideLoader();
                        this.msgService.showErrorMessage('info', 'Something went wrong, try again ', '');
                    });
                    break;
                }
                case 'ready': {
                    object.status = 20;
                    this.tempFucntion(id, item, object, operation);
                    break;
                }
                case 'publish': {
                    object.status = 30;
                    this.tempFucntion(id, item, object, operation);
                    break;
                }
                case 'unpublish': {
                    object.status = 40;
                    this.tempFucntion(id, item, object, operation);
                    break;
                }
                case 'close': {
                    object.status = 50;
                    this.tempFucntion(id, item, object, operation);
                    break;
                }
            }
        }
        tempFucntion(id, item, body, operation) {
            this.auth.showLoader();
            this.http.postMethod('product/change-status', body).then((resp) => {
                this.auth.hideLoader();
                if (resp) {
                    let data = resp['body'];
                    item.status = body.status;
                    if (resp && data.validate) {
                        item.publish_date = data.result.publish_date;
                        this.msgService.showErrorMessage("success", 'product updated successfully', '');
                        $('#actionProductModal').modal('hide');
                    }
                    else {
                        this.msgService.showErrorMessage('info', 'Something went wrong, try again ', '');
                    }
                }
            }, (err) => {
                this.auth.hideLoader();
                this.msgService.showErrorMessage('info', 'Something went wrong, try again ', '');
            });
        }
        getPublishedDate(entity_id) {
            this.filter.by.title = entity_id;
            console.log(this.productList);
            this.productList.forEach(element => {
                if (element.entity_id == entity_id) {
                    this.filter.by.title = element.title;
                    // this.filter.by.publishDate = element.publishDate;
                }
            });
        }
        Clearfilter() {
            this.filter = {
                between: {
                    from: null,
                    to: null
                },
                by: {
                    title: null,
                    publishDate: null,
                    isPaid: null,
                    minPrice: null,
                    maxPrice: null,
                    status: null,
                    productType: -1
                },
            };
            this.fectchTableDataByPage(1);
        }
        filterData() {
            console.log("filterData");
            console.log(this.filter);
            let data;
            // this.filter.by.minPrice = Number(this.filter.by.minPrice);
            // this.filter.by.maxPrice = Number(this.filter.by.maxPrice);
            let between = {
                from: null,
                to: null
            };
            if (this.filter.between.from && this.filter.between.to) {
                between = {
                    from: this.filter.between.from ? moment__WEBPACK_IMPORTED_MODULE_1__(this.filter.between.from).format('YYYY-MM-DD') : '',
                    to: this.filter.between.to ? moment__WEBPACK_IMPORTED_MODULE_1__(this.filter.between.to).format('YYYY-MM-DD') : ''
                };
            }
            this.varJson.PageIndex = 1;
            data = {
                'page_no': this.varJson.PageIndex,
                'no_of_records': this.varJson.displayBatchSize,
                'between': between,
                'by': [
                    // {
                    //   'column': 'title',
                    //   'value': this.filter.by.title
                    // },
                    {
                        'column': 'publishDate',
                        'value': this.filter.by.publishDate ? moment__WEBPACK_IMPORTED_MODULE_1__(this.filter.by.publishDate).format('YYYY-MM-DD') : null
                    },
                    {
                        'column': 'isPaid',
                        'value': JSON.parse(this.filter.by.isPaid)
                    },
                    // {
                    //   'column': 'minPrice',
                    //   'value': Number(this.filter.by.minPrice)
                    // },
                    // {
                    //   'column': 'maxPrice',
                    //   'value': this.filter.by.maxPrice ? Number(this.filter.by.maxPrice) : this.filter.by.maxPrice
                    // },
                    {
                        'column': 'status',
                        'value': this.filter.by.status ? Number(this.filter.by.status) : this.filter.by.status
                    },
                ],
                'sort': {
                    'column': 'publishDate',
                    'assending': false
                }
            };
            this.auth.showLoader();
            this.http.postMethod('product/advance-filter', data).then((resp) => {
                this.auth.hideLoader();
                let response = resp['body'];
                console.log(response);
                if (response.validate) {
                    this.productList = response.result.results;
                    this.varJson.total_items = response.result.total_records;
                }
            }, (err) => {
                this.auth.hideLoader();
                this.msgService.showErrorMessage('info', 'Something went wrong, try again ', '');
            });
            // this.varJson.PageIndex=1;
            //   this.fectchTableDataByPage(this.varJson.PageIndex);
        }
        // Removed IF Conditon for de-selecting the  assigned student -Ashwini Kumar Gupta
        toggleAllCheckBox($event) {
            console.log('toggleAllCheckBox');
            this.studentDetails.forEach(element => {
                element.isSelected = this.jsonKeys.selectAll;
                if (element.is_product_already_purchased) {
                    element.isSelected = true;
                }
            });
        }
        // End
        isAllSelected($event, item) {
            console.log($event, item);
        }
        isAllChecked() {
            return this.studentDetails.every(_ => _.isSelected);
        }
        toggleActionMenu(event) {
            console.log(event);
            // event.target.nextElementSibling.classList.toggle('d-flex');
        }
        copyToClipboard(item) {
            const selBox = document.createElement('textarea');
            selBox.style.position = 'fixed';
            selBox.style.left = '0';
            selBox.style.top = '0';
            selBox.style.opacity = '0';
            selBox.value = item.product_sharable_link;
            document.body.appendChild(selBox);
            selBox.focus();
            selBox.select();
            document.execCommand('copy');
            document.body.removeChild(selBox);
            this.msgService.showErrorMessage('success', 'Copied to Clipboard', '');
        }
    };
    ProductListComponent.ctorParameters = () => [
        { type: _services_products_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"] },
        { type: _services_message_show_service__WEBPACK_IMPORTED_MODULE_4__["MessageShowService"] },
        { type: _services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] },
        { type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticatorService"] }
    ];
    ProductListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-list',
            template: __importDefault(__webpack_require__(/*! raw-loader!./product-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/eStore-module/product-list/product-list.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./product-list.component.scss */ "./src/app/components/eStore-module/product-list/product-list.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_services_products_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"],
            _services_message_show_service__WEBPACK_IMPORTED_MODULE_4__["MessageShowService"],
            _services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"],
            _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticatorService"]])
    ], ProductListComponent);
    return ProductListComponent;
})();



/***/ }),

/***/ "./src/app/components/eStore-module/product-registered-student/product-registered-student.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/components/eStore-module/product-registered-student/product-registered-student.component.scss ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".middle-section {\n  padding: 1%;\n  padding-right: 2%;\n  width: 99.8%;\n}\n\n.middle-top {\n  padding-bottom: 10px;\n}\n\n.row {\n  display: flex;\n  flex-direction: row;\n}\n\n.searchbox1 {\n  display: flex;\n  flex-direction: column;\n  width: 50%;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.searchbox2 {\n  display: flex;\n  flex-direction: column;\n  width: 28%;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.cleat-txt {\n  color: #f54f4f;\n  cursor: pointer;\n  margin-top: 3px;\n}\n\n.bsDatepicker:after {\n  content: '';\n  background: url(/./assets/images/calendar.svg) no-repeat;\n  position: absolute;\n  right: 5px;\n  top: 20px;\n  width: 21px;\n  height: 21px;\n  z-index: 0;\n}\n\n.blackbg {\n  background: rgba(12, 11, 11, 0.3);\n  position: fixed;\n  top: 0px;\n  height: 100%;\n  left: 0px;\n  z-index: 6;\n  width: 100%;\n}\n\nth {\n  font-size: 14px !important;\n}\n\n.a:hover {\n  content: '{{title}}';\n}\n\n.form-class {\n  border-radius: 4px;\n  border: 1px solid #ccc;\n  padding: 6px 10px;\n  width: 200px;\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n\n.AdvanceFilterSection {\n  padding-top: 10px;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n}\n\n.advance-filter-text {\n  font-weight: 600;\n  cursor: pointer;\n}\n\n.table-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n\n.table-container .heading-container {\n  background: #e0eaec;\n  display: flex;\n  flex-direction: row;\n  font-size: 14px;\n  font-weight: 600;\n  text-align: left;\n  padding: 7px;\n  border: 1px solid #ccc;\n}\n\n.table-container .heading-container .heading-item {\n  width: 50%;\n  text-align: center;\n  display: -webkit-box;\n  -webkit-box-align: center;\n}\n\n.table-container .value-outer-container {\n  display: flex;\n  flex-direction: column;\n  min-height: 64vh;\n  max-height: 64vh;\n  overflow-x: hidden;\n  overflow-y: auto;\n  border: 1px solid #ccc;\n}\n\n.table-container .value-outer-container .value-container {\n  display: flex;\n  flex-direction: row;\n  text-align: left;\n  padding: 5px;\n  padding-top: 7px;\n  padding-bottom: 5px;\n  font-size: 12px;\n  border-bottom: 1px solid #ccc;\n  border-top: none;\n}\n\n.table-container .value-outer-container .value-container .value-item {\n  width: 50%;\n  text-align: center;\n  display: -webkit-box;\n  -webkit-box-align: center;\n}\n\n.table-container .th {\n  padding: .6em;\n  font-size: 12px;\n}\n\n.table-container .td {\n  padding: .6em;\n}\n\n.table-container .dataContiner {\n  margin-bottom: 10px;\n  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);\n  border-radius: 4px;\n  min-height: 55px;\n  padding: 0 !important;\n}\n\n.btn-container {\n  display: flex;\n  flex-direction: row;\n  width: 175px;\n  height: 50px;\n}\n\n.btn-container .btn-item {\n  position: relative;\n}\n\n.btn-container .btn-item .btn {\n  height: auto;\n}\n\n.btn-container .more-info-container {\n  z-index: 100;\n  background: white;\n  position: absolute;\n  top: 35px;\n  left: 10px;\n  width: 170px;\n  border-radius: 4px;\n  border: 1px solid #0084f6;\n}\n\n.btn-container .more-info-container .more-info-item {\n  padding: 5px;\n  font-size: 12px;\n  font-weight: 600;\n  border-bottom: 1px solid #0084f6;\n}\n\n.btn-container .more-info-container .more-info-item img {\n  height: 1rem;\n}\n\n.notification_popup {\n  position: fixed;\n  top: 8%;\n  left: 21%;\n  width: 70%;\n  background: white;\n  height: 85vh;\n  padding: 15px;\n  z-index: 100;\n  border-radius: 6px;\n  box-shadow: 1px 8px 20px 5px #9c9c9c;\n}\n\n.black-bg {\n  background: rgba(10, 10, 10, 0.3);\n  position: fixed;\n  top: 0px;\n  height: 100%;\n  left: 0px;\n  z-index: 1;\n  width: 100%;\n}\n\ntextarea {\n  padding: 8px 8px;\n  height: 60px !important;\n  width: 100%;\n  /* border-radius: 4px !important; */\n  background: white !important;\n  border: 0.2px solid rgba(0, 0, 0, 0.160784);\n  /* border-radius: 4px; */\n  margin-top: 5px;\n}\n\n.msgCount {\n  padding: 2px;\n  border: 1px solid #0084f6;\n  border-radius: 10px;\n  width: 50px;\n  text-align: center;\n}\n\nselect:disabled {\n  cursor: no-drop;\n}\n\n.dropdown-trigger {\n  background: transparent;\n  position: relative;\n  right: 0px;\n  transform: rotate(90deg);\n  float: left;\n}\n\n.svg-icon-wrap {\n  display: inline-block;\n}\n\n.visually-hidden {\n  display: block;\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n}\n\n.login-tube nav > ul > li .dropdown {\n  min-width: 205px;\n}\n\n.user-detail {\n  background: #fff;\n  text-align: center;\n  padding: 5px;\n  border: 1px solid #0084f6;\n  border-radius: 4px;\n  margin-top: 4px;\n  width: 25px;\n}\n\n.clearButton {\n  font-size: 11px;\n  color: red;\n  cursor: pointer;\n  float: right;\n  width: 0;\n}\n\n.addSmsSection {\n  text-align: right;\n  padding: 0;\n  background: #efefef;\n  width: 50%;\n}\n\n.addSectionHide {\n  width: 75%;\n  background: none;\n  text-align: right;\n  padding: 0;\n  margin-top: 10px;\n}\n\n.filter-section {\n  padding: 5px 0px;\n  border-top: 1px solid #d4d4d4;\n  border-bottom: 1px solid #d4d4;\n}\n\n.table_container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n\n.table_container .table_header {\n  display: flex;\n  flex-direction: row;\n  margin-bottom: 10px;\n  padding-bottom: 5px;\n  padding-left: 5px;\n  border-bottom: 1px solid #ccc;\n  padding-top: 10px;\n  background: #e0eaec;\n}\n\n.table_container .table_header .table_header_item {\n  color: #585574;\n  font-weight: 600;\n  font-size: 12px;\n}\n\n.table_container .table-value-outer-container {\n  height: 53vh;\n  overflow-y: auto;\n}\n\n.table_container .table_value {\n  min-height: 34px;\n  display: flex;\n  flex-direction: row;\n  background: #ffffff;\n  border-radius: 4px;\n  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);\n  margin-bottom: 10px;\n  padding: 3px 0px;\n  position: relative;\n}\n\n.table_container .table_value .table_value_item {\n  color: #585574;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 1.5;\n  display: -webkit-box;\n  -webkit-box-align: center;\n  padding: 0px 5px;\n  word-break: break-all;\n}\n\n.table_container .large {\n  width: 30%;\n  font-size: 12px;\n}\n\n.table_container .action {\n  width: 10%;\n  position: absolute;\n  right: 0px;\n}\n\n.table_container .illustration-container {\n  display: block;\n}\n\n.table_container .illustration-container .illustration-img {\n  width: 40%;\n  margin-left: 12%;\n  margin-top: -2%;\n}\n\n.student-class {\n  border-left: 5px solid #00b55a;\n}\n\n.enquiry-class {\n  border-left: 5px solid #ff6c24;\n}\n\n.open-class {\n  border-left: 5px solid #8d8d8d;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lU3RvcmUtbW9kdWxlL3Byb2R1Y3QtcmVnaXN0ZXJlZC1zdHVkZW50L3Byb2R1Y3QtcmVnaXN0ZXJlZC1zdHVkZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksV0FBVztFQUNYLGlCQUFpQjtFQUNqQixZQUFZO0FBQWhCOztBQUdBO0VBQ0ksb0JBQW9CO0FBQXhCOztBQUlBO0VBQ0ksYUFBYTtFQUNiLG1CQUFtQjtBQUR2Qjs7QUFHQTtFQUNJLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFBdkI7O0FBRUE7RUFDSSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUNBO0VBQ0ksY0FBdUI7RUFDdkIsZUFBZTtFQUNmLGVBQWU7QUFFbkI7O0FBQ0U7RUFDRSxXQUFXO0VBQ1gsd0RBQXdEO0VBQ3hELGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsU0FBUztFQUNULFdBQVc7RUFDWCxZQUFZO0VBQ1osVUFBVTtBQUVkOztBQUNBO0VBQ0ksaUNBQWlDO0VBQ2pDLGVBQWU7RUFDZixRQUFRO0VBQ1IsWUFBWTtFQUNaLFNBQVM7RUFDVCxVQUFVO0VBQ1YsV0FBVztBQUVmOztBQUFBO0VBQ0ksMEJBQTBCO0FBRzlCOztBQURBO0VBQ0ksb0JBQ0o7QUFHQTs7QUE4QkU7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQjtBQTNCdEI7O0FBNkJFO0VBQ0UsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixrQkFBa0I7QUExQnRCOztBQTRCRTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0FBekJuQjs7QUEyQkU7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7QUF4QmY7O0FBcUJFO0VBS0ksbUJB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Z0JBQWdCO0VBQ2hCLDZCQUE2QjtFQUM3Qiw4QkFDRjtBQUpBOztBQU1BO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0FBSGI7O0FBQUE7RUFNSSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLDZCQUE2QjtFQUM3QixpQkFBaUI7RUFDakIsbUJBQW1CO0FBRnZCOztBQVhBO0VBZUksY0FBYztFQUNkLGdCQUFnQjtFQUNoQixlQUFlO0FBQW5COztBQWpCQTtFQXVCRSxZQUFZO0VBQ1osZ0JBQWdCO0FBRmxCOztBQXRCQTtFQTJCSSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLDJDQUEyQztFQUMzQyxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUR0Qjs7QUFsQ0E7RUFxQ00sY0FBYztFQUNkLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtBQUMzQjs7QUE3Q0E7RUFnREksVUFBVTtFQUNWLGVBQWU7QUFDbkI7O0FBbERBO0VBb0RJLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsVUFBVTtBQUVkOztBQXhEQTtFQXlESSxjQUFjO0FBR2xCOztBQTVEQTtFQTJETSxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFLckI7O0FBQUE7RUFDRSw4QkFBOEI7QUFHaEM7O0FBREE7RUFDRSw4QkFBOEI7QUFJaEM7O0FBRkE7RUFDRSw4QkFBOEI7QUFLaEMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2VTdG9yZS1tb2R1bGUvcHJvZHVjdC1yZWdpc3RlcmVkLXN0dWRlbnQvcHJvZHVjdC1yZWdpc3RlcmVkLXN0dWRlbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5taWRkbGUtc2VjdGlvbntcbiAgICBwYWRkaW5nOiAxJTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyJTtcbiAgICB3aWR0aDogOTkuOCU7XG59XG5cbi5taWRkbGUtdG9we1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIC8vIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xufVxuXG4ucm93e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbi5zZWFyY2hib3gxe1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogNTAlO1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuLnNlYXJjaGJveDJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAyOCU7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG4uY2xlYXQtdHh0IHtcbiAgICBjb2xvcjogcmdiKDI0NSwgNzksIDc5KTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbWFyZ2luLXRvcDogM3B4O1xuICB9XG5cbiAgLmJzRGF0ZXBpY2tlcjphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgYmFja2dyb3VuZDogdXJsKC8uL2Fzc2V0cy9pbWFnZXMvY2FsZW5kYXIuc3ZnKSBuby1yZXBlYXQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiA1cHg7XG4gICAgdG9wOiAyMHB4O1xuICAgIHdpZHRoOiAyMXB4O1xuICAgIGhlaWdodDogMjFweDtcbiAgICB6LWluZGV4OiAwO1xufVxuXG4uYmxhY2tiZyB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgxMiwgMTEsIDExLCAwLjMpO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDBweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbGVmdDogMHB4O1xuICAgIHotaW5kZXg6IDY7XG4gICAgd2lkdGg6IDEwMCU7XG59XG50aHtcbiAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbn1cbi5hOmhvdmVye1xuICAgIGNvbnRlbnQ6ICd7e3RpdGxlfX0nXG59XG4vLyAuZGF0ZVBpY2tlckJveCB7XG4vLyAgICAgLmZvcm0tY3RybCB7XG4vLyAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4vLyAgICAgICB6LWluZGV4OiAxO1xuLy8gICAgICAgZmxvYXQ6IGxlZnQ7XG4vLyAgICAgICAvLyBib3JkZXItcmlnaHQ6IDA7XG4vLyAgICAgICAvLyBoZWlnaHQ6IDM1cHg7XG4vLyAgICAgICBmb250OiA0MDAgMTJweCAnT3BlbiBzYW5zJyxzYW5zLXNlcmlmO1xuLy8gICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbi8vICAgICB9XG4gIFxuLy8gICAgICY6YWZ0ZXIge1xuLy8gICAgICAgY29udGVudDogJyc7XG4vLyAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvY2FsZW5kYXIuc3ZnJykgbm8tcmVwZWF0O1xuLy8gICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICAgICAgbGVmdDogODAlICFpbXBvcnRhbnQ7XG4vLyAgICAgICB0b3A6IDMzcHggIWltcG9ydGFudDtcbi8vICAgICAgIHdpZHRoOiAyMXB4O1xuLy8gICAgICAgaGVpZ2h0OiAyMXB4O1xuLy8gICAgICAgei1pbmRleDogMDtcbi8vICAgICB9XG4gIFxuLy8gICAgIC5ibGFjay1iZyB7XG4vLyAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDEyLCAxMSwgMTEsIDAuMyk7XG4vLyAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4vLyAgICAgICB0b3A6IDA7XG4vLyAgICAgICBoZWlnaHQ6IDEwMCU7XG4vLyAgICAgICBsZWZ0OiAwO1xuLy8gICAgICAgei1pbmRleDogMjAwMDtcbi8vICAgICAgIHdpZHRoOiAxMDAlO1xuLy8gICAgIH1cbi8vICAgfVxuICAuZm9ybS1jbGFzcyB7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgcGFkZGluZzogNnB4IDEwcHg7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIH1cbiAgLkFkdmFuY2VGaWx0ZXJTZWN0aW9uIHtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgfVxuICAuYWR2YW5jZS1maWx0ZXItdGV4dHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAudGFibGUtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLmhlYWRpbmctY29udGFpbmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICNlMGVhZWM7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgcGFkZGluZzogN3B4O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgIC5oZWFkaW5nLWl0ZW0ge1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgIH1cbiAgICAudmFsdWUtb3V0ZXItY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgbWluLWhlaWdodDogNjR2aDtcbiAgICAgIG1heC1oZWlnaHQ6IDY0dmg7XG4gICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgIC8vIHBhZGRpbmctYm90dG9tOiA0NXB4O1xuICAgICAgLnZhbHVlLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgcGFkZGluZy10b3A6IDdweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgICAgICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICAgICAgLnZhbHVlLWl0ZW0ge1xuICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLnRoe1xuICAgICAgcGFkZGluZzogLjZlbTtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG4gICAgLnRke1xuICAgICAgcGFkZGluZzogLjZlbTtcbiAgICB9XG4gIFxuICAgIC5kYXRhQ29udGluZXJ7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgYm94LXNoYWRvdzogMCAzcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIG1pbi1oZWlnaHQ6IDU1cHg7XG4gICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG4gIC5idG4tY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICB3aWR0aDogMTc1cHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIC5idG4taXRlbXtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIC5idG57XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgIH1cbiAgICB9XG4gICAgLm1vcmUtaW5mby1jb250YWluZXJ7XG4gICAgICB6LWluZGV4OiAxMDA7XG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMzVweDtcbiAgICAgIGxlZnQ6IDEwcHg7XG4gICAgICB3aWR0aDogMTcwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDA4NGY2O1xuICAgICAgLm1vcmUtaW5mby1pdGVte1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDg0ZjY7XG4gICAgICAgIGltZ3tcbiAgICAgICAgICAgIGhlaWdodDogMXJlbTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAubm90aWZpY2F0aW9uX3BvcHVwe1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDglO1xuICAgIGxlZnQ6IDIxJTtcbiAgICB3aWR0aDogNzAlO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGhlaWdodDogODV2aDtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIHotaW5kZXg6IDEwMDtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgYm94LXNoYWRvdzogMXB4IDhweCAyMHB4IDVweCAjOWM5YzljO1xuICB9XG4gIC5ibGFjay1iZ3tcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDEwLDEwLDEwLDAuMyk7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBsZWZ0OiAwcHg7XG4gICAgei1pbmRleDogMTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICB0ZXh0YXJlYSB7XG4gICAgcGFkZGluZzogOHB4IDhweDtcbiAgICBoZWlnaHQ6IDYwcHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvKiBib3JkZXItcmFkaXVzOiA0cHggIWltcG9ydGFudDsgKi9cbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMC4ycHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjE2MDc4NCk7XG4gICAgLyogYm9yZGVyLXJhZGl1czogNHB4OyAqL1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgfVxuXG4gIC5tc2dDb3VudCB7XG4gICAgcGFkZGluZzogMnB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDg0ZjY7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB3aWR0aDogNTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgc2VsZWN0OmRpc2FibGVkIHtcbiAgICBjdXJzb3I6IG5vLWRyb3A7XG4gIH1cbiAgLmRyb3Bkb3duLXRyaWdnZXIge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICByaWdodDogMHB4O1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICBmbG9hdDogbGVmdDtcbn1cblxuLnN2Zy1pY29uLXdyYXAge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnZpc3VhbGx5LWhpZGRlbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYm9yZGVyOiAwO1xuICAgIGNsaXA6IHJlY3QoMCAwIDAgMCk7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgbWFyZ2luOiAtMXB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcGFkZGluZzogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB3aWR0aDogMXB4O1xufVxuLmxvZ2luLXR1YmUgbmF2ID4gdWwgPiBsaSAuZHJvcGRvd24ge1xuICBtaW4td2lkdGg6IDIwNXB4O1xufVxuLnVzZXItZGV0YWlsIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwODRmNjtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgLy8gYm9yZGVyLXRvcDogMDtcbiAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgd2lkdGg6IDI1cHg7XG4gICAgLy8gYm94LXNoYWRvdzogMCAycHggNHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDRweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDZweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKVxufVxuLmNsZWFyQnV0dG9ue1xuICBmb250LXNpemU6IDExcHg7XG4gIGNvbG9yOiByZWQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB3aWR0aDogMDtcbn1cbi5hZGRTbXNTZWN0aW9uIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7XG4gIHdpZHRoOiA1MCU7XG59XG4uYWRkU2VjdGlvbkhpZGUge1xuICB3aWR0aDogNzUlO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5maWx0ZXItc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDVweCAwcHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZDRkNGQ0O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Q0ZDRcbn1cblxuLnRhYmxlX2NvbnRhaW5lcntcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG4gIC8vIG1hcmdpbi10b3A6IDEwcHg7XG4gIC50YWJsZV9oZWFkZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZTBlYWVjO1xuICAudGFibGVfaGVhZGVyX2l0ZW17XG4gICAgY29sb3I6ICM1ODU1NzQ7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgLy8gcGFkZGluZzogMHB4IDVweDtcbiAgfVxufVxuXG4udGFibGUtdmFsdWUtb3V0ZXItY29udGFpbmVye1xuICBoZWlnaHQ6IDUzdmg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG4gIC50YWJsZV92YWx1ZXtcbiAgICBtaW4taGVpZ2h0OiAzNHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3gtc2hhZG93OiAwIDNweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgcGFkZGluZzogM3B4IDBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLnRhYmxlX3ZhbHVlX2l0ZW17XG4gICAgICBjb2xvcjogIzU4NTU3NDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgICAgcGFkZGluZzogMHB4IDVweDtcbiAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgICB9XG4gIH1cbiAgLmxhcmdle1xuICAgIHdpZHRoOiAzMCU7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG4gIC5hY3Rpb257XG4gICAgd2lkdGg6IDEwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDBweDtcbiAgfVxuICAuaWxsdXN0cmF0aW9uLWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICAuaWxsdXN0cmF0aW9uLWltZ3tcbiAgICAgIHdpZHRoOiA0MCU7XG4gICAgICBtYXJnaW4tbGVmdDogMTIlO1xuICAgICAgbWFyZ2luLXRvcDogLTIlO1xuICBcbiAgICB9XG4gIH1cbn1cbi5zdHVkZW50LWNsYXNze1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICMwMGI1NWE7XG59XG4uZW5xdWlyeS1jbGFzcyB7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2ZmNmMyNDtcbn1cbi5vcGVuLWNsYXNzIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjOGQ4ZDhkO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/eStore-module/product-registered-student/product-registered-student.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/components/eStore-module/product-registered-student/product-registered-student.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: RegisteredStudentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisteredStudentComponent", function() { return RegisteredStudentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/authenticator.service */ "./src/app/services/authenticator.service.ts");
/* harmony import */ var _services_message_show_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/message-show.service */ "./src/app/services/message-show.service.ts");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var _services_table_preference_table_preferences_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/table-preference/table-preferences.service */ "./src/app/services/table-preference/table-preferences.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _services_excel_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/excel.service */ "./src/app/services/excel.service.ts");
/* harmony import */ var _model_role_features__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../model/role_features */ "./src/app/model/role_features.ts");
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










let RegisteredStudentComponent = /** @class */ (() => {
    let RegisteredStudentComponent = class RegisteredStudentComponent {
        constructor(_msgService, auth, _tablePreferencesService, http, router, httpService, excelService) {
            this._msgService = _msgService;
            this.auth = auth;
            this._tablePreferencesService = _tablePreferencesService;
            this.http = http;
            this.router = router;
            this.httpService = httpService;
            this.excelService = excelService;
            this.usersList = [];
            this.searchedData = [];
            this.productList = [];
            this.EcourseData = [];
            this.displayKeys = [];
            this.searchText = '';
            this.filter = {
                product_id: '',
                course_type_id: '0'
            };
            this.searchDataFlag = false;
            this.AdvanceFilter = false;
            this.selectedRecord = {
                name: '',
                phone: '',
                email: '',
                gender: '',
                dob: '',
                parent_email: '',
                school_name: '',
                standard_id: '',
                parent_name: '',
                parent_phone: '',
                school_id: '',
                curr_address: '',
                country_id: '',
                user_id: ''
            };
            this.selectAll = false;
            this.showDropMenu = false;
            this.selectedRowCount = 0;
            this.isOptions = false;
            this.notificationPopup = false;
            this.messageList = [];
            this.message = '';
            this.addSMS = false;
            this.editMsg = false;
            this.selectedMsg = '';
            this.smsNotification = true;
            this.pushNotification = true;
            this.messageCount = 0;
            this.role_feature = _model_role_features__WEBPACK_IMPORTED_MODULE_9__["role"].features;
            this.menuOptions = [
                {
                    key: 'student',
                    header: 'Convert to Admission',
                },
                {
                    key: 'enquiry',
                    header: 'Convert to Enquiry',
                }
            ];
            this.tableSetting = {
                keys: [
                    { primaryKey: 'name', header: 'Name' },
                    { primaryKey: 'phone', header: 'Phone' },
                    { primaryKey: 'email_id', header: 'Email ID' },
                    { primaryKey: 'registered_date', header: 'Registered Date' },
                    { primaryKey: 'open_user_status', header: 'Status' },
                ]
            };
            this.varJson = {
                PageIndex: 1,
                sizeArr: [5, 25, 50, 100, 150, 200, 500],
                displayBatchSize: 25,
                total_items: 0
            };
        }
        ngOnInit() {
            this.getProductList();
            this.getEcourseList();
            let userType = sessionStorage.getItem('userType');
            let username = sessionStorage.getItem('username');
            if (sessionStorage.getItem('permissions') != '' && userType == '0' && username != 'admin') {
                for (let i = 0; i < this.menuOptions.length; i++) {
                    if (!this.role_feature.STUDENT_ADD_UPLOAD && this.menuOptions[i].key == 'student') {
                        this.menuOptions.splice(i, 1);
                    }
                    if (!this.role_feature.LEAD_MENU_ITEM && this.menuOptions[i].key == 'enquiry') {
                        this.menuOptions.splice(i, 1);
                    }
                }
            }
        }
        getProductList() {
            this.auth.showLoader();
            this.http.getMethod('product/get-product-list', null).subscribe((data) => {
                this.productList = data.result;
                this.auth.hideLoader();
            }, err => {
                this.auth.hideLoader();
                this._msgService.showErrorMessage('error', '', err.error.message);
            });
        }
        getEcourseList() {
            this.auth.showLoader();
            this.httpService.getData('/api/v1/institute/courseMapping/' + sessionStorage.getItem('institute_id') + '?isOnline=all').subscribe((data) => {
                this.auth.hideLoader();
                this.EcourseData = data;
            }, err => {
                this.auth.hideLoader();
                this._msgService.showErrorMessage('error', '', err.error.message);
            });
        }
        filterData(PageIndex) {
            this.varJson.PageIndex = PageIndex;
            let start_index = this.varJson.displayBatchSize * (PageIndex - 1);
            let data;
            data = {
                'by': [
                    {
                        'column': 'productId',
                        'value': this.filter.product_id
                    },
                    {
                        'column': 'eCourseId',
                        'value': Number(this.filter.course_type_id)
                    }
                ],
                'start_index': start_index,
                'no_of_records': this.varJson.displayBatchSize,
            };
            this.auth.showLoader();
            this.http.postMethod('user-product/get-user-details', data).then((data) => {
                this.auth.hideLoader();
                this.selectedRowCount = 0;
                if (data.body.result != null) {
                    this.usersList = data.body.result;
                    if (this.usersList && this.usersList.length) {
                        this.varJson.total_items = this.usersList[0].total_record;
                        this.usersList.forEach(element => {
                            if (element.open_user_status == 'No Action') {
                                element.open_user_status = '-';
                            }
                            element.ecourse_list = element.ecourse_list.join();
                        });
                    }
                }
                this.searchedData = this.usersList;
            }, err => {
                this.auth.hideLoader();
                this._msgService.showErrorMessage('error', '', err.error.message);
            });
        }
        optionSelected(e) {
            let action = e.action._value;
            let obj = e.data;
            this.auth.showLoader();
            this.httpService.getData('/api/v2/user/' + obj.user_id).subscribe((res) => {
                this.selectedRecord = {
                    name: res.result.name,
                    phone: res.result.mobile_no,
                    email: res.result.email_id,
                    gender: res.result.gender,
                    dob: res.result.dob,
                    parent_email: res.result.parent_email,
                    school_name: res.result.school_id,
                    standard_id: res.result.standard_id,
                    parent_name: res.result.parent_name,
                    parent_phone: res.result.parent_phone,
                    school_id: res.result.school_id,
                    curr_address: res.result.address,
                    country_id: res.result.country_id,
                    user_id: res.result.user_id,
                    state_id: res.result.state_id,
                    city_id: res.result.city_id,
                    source: res.result.source,
                    master_course: res.result.master_course,
                    course_id: res.result.course_id,
                    course_assign: res.result.course_assign
                };
                this.auth.hideLoader();
                this.performAction(action);
            }, err => {
                this.auth.hideLoader();
                this.performAction(action);
            });
        }
        performAction(action) {
            if (action == 'Convert to Admission') {
                this.selectedRecord.institute_enquiry_id = 0;
                sessionStorage.setItem('studentPrefill', JSON.stringify(this.selectedRecord));
                this.router.navigate(['/view/students/add']);
            }
            if (action == 'Convert to Enquiry') {
                sessionStorage.setItem('enquiryPrefill', JSON.stringify(this.selectedRecord));
                this.router.navigate(['view/leads/add']);
            }
        }
        toggleAllCheckBox($event) {
            console.log('toggleAllCheckBox');
            this.usersList.forEach(element => {
                element.isSelected = this.selectAll;
            });
            this.selectAll ? (this.selectedRowCount = this.usersList.length) : (this.selectedRowCount = 0);
            // if(this.selectAll){
            //   this.selectedRowCount = this.usersList.length;
            // } else {}
        }
        isAllChecked() {
            return this.usersList.every(_ => _.isSelected);
        }
        rowCheckboxChange(record) {
            (record.isSelected) ? (this.selectedRowCount++) : (this.selectedRowCount--);
        }
        /*** pagination functions */
        /* Fetch next set of data from server and update table */
        fetchNext() {
            this.varJson.PageIndex++;
            this.filterData(this.varJson.PageIndex);
        }
        /* Fetch previous set of data from server and update table */
        fetchPrevious() {
            this.varJson.PageIndex--;
            this.filterData(this.varJson.PageIndex);
        }
        updateTableBatchSize(num) {
            this.varJson.PageIndex = 1;
            this.varJson.displayBatchSize = parseInt(num);
            this.filterData(this.varJson.PageIndex);
        }
        getAllMessageFromServer() {
            this.notificationPopup = true;
            this.messageList = [];
            let tempMessageList = [];
            this.auth.showLoader();
            let obj = {
                from_date: '',
                to_date: moment__WEBPACK_IMPORTED_MODULE_7__().format("YYYY-MM-DD"),
                source: "SMS"
            };
            this.httpService.postData('/api/v1/notification/message/' + sessionStorage.getItem('institute_id') + '/all', obj).subscribe(res => {
                this.auth.hideLoader();
                tempMessageList = res;
                for (let i = 0; i < tempMessageList.length; i++) {
                    if (tempMessageList[i].source === "SMS") {
                        this.messageList.push(tempMessageList[i]);
                    }
                }
                // this.messageList = res;
                if (this.messageList && this.messageList.length > 0) {
                    this.messageList.forEach(msg => {
                        msg.selected = false;
                    });
                }
            }, err => {
                this.auth.hideLoader();
            });
        }
        editSMS(obj) {
            this.editMsg = true;
            this.addSMS = true;
            this.editObj = obj;
            this.message = obj.message;
        }
        saveMSG() {
            (this.editMsg) ? this.updateSMS() : this.saveSMS();
        }
        saveSMS() {
            let obj = { message: this.message, source: "SMS" };
            if (this.message != '' && this.message.trim() != '') {
                this.auth.showLoader();
                this.httpService.postData('/api/v1/notification/message/' + sessionStorage.getItem('institute_id'), obj).subscribe((res) => {
                    this._msgService.showErrorMessage('success', '', 'Message created Successfully');
                    this.auth.hideLoader();
                    this.getAllMessageFromServer();
                }, err => {
                    this.auth.hideLoader();
                });
                this.addSMS = false;
            }
            else {
                this._msgService.showErrorMessage('error', '', 'Please enter message');
            }
        }
        updateSMS() {
            let obj = { message: this.message, source: "SMS" };
            if (this.message != '' && this.message.trim() != '') {
                this.auth.showLoader();
                this.httpService.putData('/api/v1/notification/message/' + sessionStorage.getItem('institute_id') + '/' + this.editObj.message_id, obj).subscribe((res) => {
                    this.auth.hideLoader();
                    this._msgService.showErrorMessage('success', '', 'Message updated Successfully');
                    this.getAllMessageFromServer();
                }, err => {
                    this.auth.hideLoader();
                });
                this.addSMS = false;
            }
            else {
                this._msgService.showErrorMessage('error', '', 'Please enter message');
            }
        }
        ApproveMsg(message_id) {
            if (confirm('Are you sure, You want to approve the message?')) {
                const obj = {
                    status: 1
                };
                this.auth.showLoader();
                this.httpService.putData('/api/v1/notification/message/' + sessionStorage.getItem('institute_id') + '/' + message_id, obj).subscribe((res) => {
                    this.auth.hideLoader();
                    this._msgService.showErrorMessage('success', '', 'Message approved successfully');
                    this.getAllMessageFromServer();
                }, err => {
                    this.auth.hideLoader();
                    this._msgService.showErrorMessage('error', '', err.error.message);
                });
            }
        }
        DeleteMsg(message_id) {
            if (confirm('Are you sure, You want to delete the message?')) {
                const obj = {
                    status: 400
                };
                this.auth.showLoader();
                this.httpService.putData('/api/v1/notification/message/' + sessionStorage.getItem('institute_id') + '/' + message_id, obj).subscribe((res) => {
                    this.auth.hideLoader();
                    this._msgService.showErrorMessage('success', '', 'Message deleted successfully');
                    this.messageList = this.messageList.filter(msg => msg.message_id != message_id);
                }, err => {
                    this.auth.hideLoader();
                    this._msgService.showErrorMessage('error', '', err.error.message);
                });
            }
        }
        changeSelectedMsg(obj) {
            this.selectedMsg = obj;
        }
        sendNotification() {
            console.log(this.smsNotification, this.pushNotification);
            this.smsNotification ? this.sendSMSNotification() : '';
            this.pushNotification ? this.sendPushNotification() : '';
            if (!this.smsNotification && !this.pushNotification) {
                this._msgService.showErrorMessage('info', 'Please select Notification type', '');
            }
        }
        sendSMSNotification() {
            if (!this.getNotificationMessage()) {
                return;
            }
            let studentID = this.getListOfIds('user_id');
            let obj = {
                delivery_mode: 0,
                notifn_message: this.selectedMsg.message,
                notifn_subject: "",
                destination: null,
                user_ids: studentID,
                cancel_date: '',
                isEnquiry_notifn: 0,
                isAlumniSMS: 0,
                isTeacherSMS: 0,
                configuredMessage: true,
                message_id: this.selectedMsg.message_id,
                is_user_notify: 1,
                institution_id: sessionStorage.getItem('institute_id')
            };
            // if (this.transational_type ==2) {
            //   obj.configuredMessage = false;
            // }
            this.auth.showLoader();
            this.httpService.postData('/api/v1/alerts/config', obj).subscribe((res) => {
                this.auth.hideLoader();
                this._msgService.showErrorMessage('success', '', 'Message sent successfully');
            }, err => {
                this.auth.hideLoader();
            });
            this.closeNotificationPopup();
        }
        closeNotificationPopup() {
            this.notificationPopup = false;
            this.smsNotification = true;
            this.pushNotification = true;
            this.addSMS = false;
        }
        sendPushNotification() {
            let student_id = this.getListOfIds('user_id');
            student_id = student_id.join(',');
            if (!this.getNotificationMessage()) {
                return;
            }
            let obj = {
                notifn_message: this.selectedMsg.message,
                message_id: this.selectedMsg.messageId,
                student_ids: student_id,
                institution_id: sessionStorage.getItem('institute_id')
            };
            this.auth.showLoader();
            this.httpService.postData('/api/v1/pushNotification/send', obj).subscribe((res) => {
                this.auth.hideLoader();
                this._msgService.showErrorMessage('success', '', 'Message sent successfully');
            }, err => {
                this.auth.hideLoader();
            });
            this.closeNotificationPopup();
        }
        getNotificationMessage() {
            if (this.selectedMsg == '') {
                this._msgService.showErrorMessage('error', '', 'Please select message');
                return false;
            }
            else {
                return true;
            }
        }
        getListOfIds(key) {
            let id = [];
            for (let t = 0; t < this.usersList.length; t++) {
                if (this.usersList[t].isSelected == true) {
                    id.push(this.usersList[t][key]);
                }
            }
            return id;
        }
        exportToExcel() {
            let data = {
                'by': [
                    {
                        'column': 'productId',
                        'value': this.filter.product_id
                    },
                    {
                        'column': 'eCourseId',
                        'value': Number(this.filter.course_type_id)
                    }
                ],
                'start_index': 0,
                'no_of_records': 0,
            };
            this.auth.showLoader();
            this.http.postMethod('user-product/get-user-details', data).then((data) => {
                this.auth.hideLoader();
                if (data.body.result != null) {
                    let arr = data.body.result;
                    if (arr && arr.length) {
                        arr.forEach(element => {
                            if (element.open_user_status == 'No Action') {
                                element.open_user_status = '-';
                            }
                        });
                    }
                    let Excelarr = [];
                    arr.map((ele) => {
                        let json = {};
                        this.tableSetting.keys.map((keys) => {
                            json[keys.header] = ele[keys.primaryKey];
                        });
                        Excelarr.push(json);
                    });
                    this.excelService.exportAsExcelFile(Excelarr, 'register_user');
                }
            }, err => {
                this.auth.hideLoader();
                this._msgService.showErrorMessage('error', '', err.error.message);
            });
        }
        clearFilter() {
            this.filter = {
                product_id: '',
                course_type_id: '0'
            };
        }
        searchInList() {
            if (this.searchText != "" && this.searchText != null) {
                let searchData = this.usersList.filter(item => Object.keys(item).some(k => item[k] != null && item[k].toString().toLowerCase().includes(this.searchText.toLowerCase())));
                this.searchedData = searchData;
                this.varJson.total_items = searchData.length;
                this.searchDataFlag = true;
                this.varJson.PageIndex = 1;
            }
            else {
                console.log(this.usersList);
                this.searchDataFlag = false;
                this.filterData(this.varJson.PageIndex);
            }
        }
        countNumberOfMessage() {
            let uniCodeFlag = this.hasUnicode(this.message);
            let charLimit = 160;
            if (uniCodeFlag) {
                charLimit = 70;
            }
            if (this.message.length == 0) {
                this.messageCount = 0;
            }
            else if (this.message.length > 0 && this.message.length <= charLimit) {
                this.messageCount = 1;
            }
            else {
                let count = Math.ceil(this.message.length / charLimit);
                this.messageCount = count;
            }
        }
        hasUnicode(str) {
            for (var i = 0; i < str.length; i++) {
                if (str.charCodeAt(i) > 127)
                    return true;
            }
            return false;
        }
    };
    RegisteredStudentComponent.ctorParameters = () => [
        { type: _services_message_show_service__WEBPACK_IMPORTED_MODULE_2__["MessageShowService"] },
        { type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticatorService"] },
        { type: _services_table_preference_table_preferences_service__WEBPACK_IMPORTED_MODULE_4__["TablePreferencesService"] },
        { type: _services_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _services_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"] },
        { type: _services_excel_service__WEBPACK_IMPORTED_MODULE_8__["ExcelService"] }
    ];
    RegisteredStudentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-registered-student',
            template: __importDefault(__webpack_require__(/*! raw-loader!./product-registered-student.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/eStore-module/product-registered-student/product-registered-student.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./product-registered-student.component.scss */ "./src/app/components/eStore-module/product-registered-student/product-registered-student.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_services_message_show_service__WEBPACK_IMPORTED_MODULE_2__["MessageShowService"],
            _services_authenticator_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticatorService"],
            _services_table_preference_table_preferences_service__WEBPACK_IMPORTED_MODULE_4__["TablePreferencesService"],
            _services_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _services_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"],
            _services_excel_service__WEBPACK_IMPORTED_MODULE_8__["ExcelService"]])
    ], RegisteredStudentComponent);
    return RegisteredStudentComponent;
})();



/***/ }),

/***/ "./src/app/components/eStore-module/sales-reports/sales-reports.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/components/eStore-module/sales-reports/sales-reports.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n@import url(\"https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800\");\n@import url(\"https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800\");\n@charset \"UTF-8\";\n/* ===============================header colors=======================*/\n.table-format-first .table-responsive table th,\n.table-format-first .table-responsive table td {\n  text-align: center;\n  padding: 10px 5px;\n}\n.table-format-first .table-responsive table th {\n  text-transform: capitalize;\n  font-size: 14px;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper {\n  display: inline-block;\n  overflow: initial;\n  margin-left: 0;\n  width: auto;\n  position: relative;\n  background: transparent;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox {\n  z-index: 2;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label {\n  font-size: 16px;\n  margin-left: 7px;\n  font-weight: 600;\n  vertical-align: middle;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:after, .table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:before {\n  z-index: 1;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper:after {\n  content: '';\n  width: 20px;\n  height: 20px;\n  background: #fff;\n  left: 0;\n  top: 0;\n  position: absolute;\n}\n.table-format-first .table-responsive table tbody tr td .fa-trash-o {\n  color: #f44336;\n  font-size: 20px;\n}\n.table-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-top: 10px;\n}\n.table-container .heading-container {\n  background: #e0eaec;\n  display: flex;\n  flex-direction: row;\n  font-size: 14px;\n  font-weight: 600;\n  text-align: left;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n}\n.table-container .heading-container .heading-item {\n  width: 10%;\n  text-align: center;\n}\n.table-container .value-outer-container {\n  display: flex;\n  flex-direction: column;\n  min-height: 53vh;\n  max-height: 54vh;\n  overflow-x: hidden;\n  overflow-y: auto;\n  border: 1px solid #ccc;\n}\n.table-container .value-outer-container .value-container {\n  display: flex;\n  flex-direction: row;\n  text-align: left;\n  padding: 4px;\n  font-size: 12px;\n  border-bottom: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n  border-top: none;\n}\n.table-container .value-outer-container .value-container .value-item {\n  width: 10%;\n  text-align: center;\n}\n/* Scrollbar thickness changed here for vertical display */\n::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #F5F5F5;\n  border-radius: 10px;\n}\n::-webkit-scrollbar {\n  width: 10px;\n  background-color: #F5F5F5;\n  height: 10px;\n}\n::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background-image: -webkit-gradient(linear, left bottom, left top, color-stop(0.44, #7a99d9), color-stop(0.72, #497dbd), color-stop(0.86, #1c3a94));\n}\n.footer-section {\n  position: absolute;\n  bottom: 0;\n  z-index: 1000;\n  background: #fff;\n  width: 100%;\n  height: 24px;\n}\n.footer-section ul {\n  list-style: none;\n}\n.footer-section ul.footer-list li {\n  display: inline-block;\n  margin: 5px 20px 0;\n}\n.footer-section ul.footer-list li i {\n  font-family: FontAwesome;\n}\n.footer-section a {\n  color: #0084f6;\n}\n/* Track */\n.danger {\n  color: #ff0000 !important;\n}\n.btn.active,\n.btn:active {\n  background-image: none;\n  outline: 0;\n  box-shadow: none;\n  border-radius: 4px;\n}\ninput[type=\"button\"],\ninput[type=\"submit\"],\ninput[type=\"reset\"],\ninput[type=\"file\"]::-webkit-file-upload-button,\nbutton {\n  border-radius: 4px;\n}\n:host ::ng-deep .tooltip-arrow {\n  display: none;\n}\n::ng-deep .tooltip-arrow {\n  display: none;\n}\n:host ::ng-deep .tooltip-left {\n  top: 0 !important;\n  min-width: 300px;\n}\n::ng-deep .tooltip-left {\n  top: 0;\n}\n:host ::ng-deep .tooltip-right {\n  top: calc(10% - 2.5px);\n  left: calc(10% - 2.5px);\n}\n::ng-deep .tooltip-right {\n  top: calc(10% - 2.5px);\n  left: calc(10% - 2.5px);\n}\n:host ::ng-deep .tooltip-top {\n  top: calc(10% - 2.5px);\n  left: calc(10% - 2.5px);\n}\n::ng-deep .tooltip-top {\n  top: calc(10% - 2.5px);\n  left: calc(10% - 2.5px);\n}\n:host ::ng-deep .bs-datepicker .bs-datepicker-container {\n  padding: 10px;\n}\n.bs-calendar-container div:nth-child(1) {\n  display: flex;\n}\n.bs-datepicker-head {\n  display: block !important;\n}\n:host ::ng-deep .bs-days-calendar-view .bs-datepicker-head {\n  color: white;\n  border-top: 1px solid white;\n  border-left: 1px solid white;\n  border-right: 1px solid white;\n  min-width: 300px !important;\n  font-weight: 800;\n}\n:host ::ng-deep .bs-days-calendar-view .bs-datepicker-body {\n  padding: 5px;\n}\n::ng-deep .bs-datepicker-head {\n  color: white;\n  border-top: 1px solid white;\n  border-left: 1px solid white;\n  border-right: 1px solid white;\n  min-width: 300px !important;\n  font-weight: 800;\n}\n::ng-deep .bs-datepicker-body {\n  padding: 0;\n  border: 1px solid rgba(119, 119, 119, 0.28);\n}\n::ng-deep .bs-datepicker-body table tbody tr td {\n  padding: 0;\n  border-top: 1px solid rgba(211, 212, 213, 0.5);\n  border-bottom: 1px solid rgba(211, 212, 213, 0.5);\n}\n:host ::ng-deep .bs-datepicker-body table tbody tr td {\n  padding: 0;\n  border-top: 1px solid rgba(211, 212, 213, 0.5);\n  border-bottom: 1px solid rgba(211, 212, 213, 0.5);\n}\n::ng-deep .bs-datepicker-body table thead tr th {\n  font-size: 14px;\n  color: black;\n  font-weight: 600;\n  text-align: center;\n}\n:host ::ng-deep .bs-datepicker-body table thead tr th {\n  font-size: 14px;\n  color: black;\n  font-weight: 600;\n  text-align: center;\n}\n.cursor-icon {\n  cursor: pointer;\n}\n.table-responsive {\n  max-width: 100%;\n}\n.table-responsive ::-webkit-scrollbar {\n  display: block;\n}\n.courses-list-table {\n  max-height: 400px;\n  overflow: auto;\n  padding: 10px;\n  margin-top: 10px;\n  box-shadow: 0 2px 5px 0 rgba(38, 0, 0, 0.2);\n}\n.courses-list-table ::-webkit-scrollbar {\n  display: block;\n}\ntextarea {\n  resize: none;\n}\n.filter-fields .field-wrapper.has-value .form-ctrl + label,\n.filter-fields .field-wrapper .form-ctrl:focus + label {\n  top: 0;\n}\n.time-picker .field-wrapper {\n  display: inline-block;\n  margin: 5px 10px 0 0;\n}\n.time-picker .field-wrapper .form-ctrl {\n  width: 70px;\n  z-index: 10;\n}\n.time-picker .field-wrapper label {\n  font-size: 12px;\n  z-index: 1;\n}\n.multiselect-wrapper {\n  padding: 5px;\n  border: 1px solid #deeaee;\n  position: absolute;\n  z-index: 100;\n  background: white;\n  min-width: 400px;\n  min-height: 50px;\n  top: 65px;\n}\n.multiselect-wrapper .multiselect-wrapper-inner {\n  padding: 10px;\n}\n.multiselect-wrapper .multiselect-wrapper-inner ul li {\n  height: 40px;\n  padding: 10px 0 0 5px;\n}\ninput[type=\"text\"][disabled] {\n  background: transparent !important;\n}\n.report-wrapper {\n  background: #efefef;\n  height: 110vh;\n  width: 100%;\n  padding: 5px;\n}\n.report-wrapper .report-header {\n  background: #fff;\n  padding: 5px;\n}\n.chipped {\n  color: white !important;\n  font-size: 14px;\n  background: #0084f6;\n  cursor: pointer;\n  border: 2px solid white;\n  border-radius: 32px;\n  display: inline-block;\n  margin: 0 !important;\n  font-weight: 400;\n  padding: .1rem .8rem;\n  outline: none;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  overflow: hidden;\n  position: relative;\n  transition: all 0.24s cubic-bezier(0.4, 0, 0.2, 1);\n  will-change: padding;\n}\n.chipped i {\n  color: #99D154;\n  position: absolute;\n  top: 6px;\n  margin-left: 1rem;\n  font-size: 48px;\n  transition: all 0.24s cubic-bezier(0.4, 0, 0.2, 1);\n  opacity: 0;\n  transform: translateX(1rem);\n  will-change: opacity, transform;\n}\n.chipped.small {\n  color: white !important;\n  font-size: 12px !important;\n  background: #0084f6;\n  cursor: pointer;\n  border: 2px solid white;\n  border-radius: 32px;\n  display: inline-block;\n  margin: 0 !important;\n  font-weight: 400;\n  padding: .2rem .5rem;\n}\n.chipped.intable {\n  color: rgba(30, 35, 40, 0.7) !important;\n  font-size: 12px !important;\n  background: transparent;\n  cursor: pointer;\n  border: 1px solid #64676b;\n  border-radius: 5px;\n  display: inline-block;\n  margin: 0 2px 0 0 !important;\n  font-weight: 400;\n  padding: .2rem;\n}\n.chipped.active {\n  background-color: #fff;\n  color: #333333;\n  padding-right: 4.5rem;\n}\n.chipped.active i {\n  opacity: 1;\n  transform: translateX(0);\n}\n/* ================================================================================================= */\n/* ================================================================================================= */\n/* ================================================================================================= */\n/* ================================================================================================= */\n/* ================================================================================================= */\n/* ================================================================================================= */\n.fbold {\n  font-weight: 700;\n}\n.sbold {\n  font-weight: 600;\n}\n.fnormal {\n  font-weight: 300;\n}\n.rupee {\n  font-family: 'WebRupee';\n}\n.line-height {\n  line-height: 1.2;\n}\n.link,\na {\n  text-decoration: none;\n  color: #0084f6;\n}\n.link:hover,\na:hover {\n  text-decoration: none;\n}\n.small,\n.small *,\np {\n  font-size: 12px;\n}\n.xsmall,\n.xsmall * {\n  font-size: 10px;\n  line-height: 14px;\n}\nh1 {\n  font-size: 14px;\n  font-weight: 700;\n  line-height: 1.2;\n}\nh2 {\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1.2;\n}\nh3 {\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1.2;\n}\n.container {\n  box-sizing: border-box;\n  margin: 0 auto;\n}\n.clearFix:after,\n.container:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.common-width {\n  width: 100%;\n  box-sizing: border-box;\n  vertical-align: top;\n  display: inline-block;\n}\n.pull-left {\n  float: left;\n}\n.pull-right {\n  float: right;\n}\n.mR10 {\n  margin-right: 10px;\n}\n.pos-rel {\n  position: relative;\n}\n.pos-abs {\n  position: absolute;\n}\n.hide {\n  display: none !important;\n}\n.show {\n  display: block !important;\n}\n.display-b {\n  display: block;\n}\n.display-ib {\n  display: inline-block;\n}\n.align-right {\n  text-align: right;\n}\n.align-left {\n  text-align: left;\n}\n.v-middle {\n  vertical-align: middle;\n}\n.radius-4 {\n  border-radius: 4px;\n}\n.overflowHidden {\n  overflow: hidden;\n}\n/*===============================call grid view css====================*/\n.container,\n.container-fluid {\n  margin-right: auto;\n  margin-left: auto;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n@media (min-width: 768px) {\n  .container {\n    width: 750px;\n  }\n}\n@media (min-width: 992px) {\n  .container {\n    width: 970px;\n  }\n}\n@media (min-width: 1200px) {\n  .container {\n    width: 1170px;\n  }\n}\n.row {\n  margin-left: -15px;\n  margin-right: -15px;\n}\n.c-lg-1,\n.c-lg-10,\n.c-lg-11,\n.c-lg-12,\n.c-lg-2,\n.c-lg-3,\n.c-lg-4,\n.c-lg-5,\n.c-lg-6,\n.c-lg-7,\n.c-lg-8,\n.c-lg-9,\n.c-md-1,\n.c-md-10,\n.c-md-11,\n.c-md-12,\n.c-md-2,\n.c-md-3,\n.c-md-4,\n.c-md-5,\n.c-md-6,\n.c-md-7,\n.c-md-8,\n.c-md-9,\n.c-sm-1,\n.c-sm-10,\n.c-sm-11,\n.c-sm-12,\n.c-sm-2,\n.c-sm-3,\n.c-sm-4,\n.c-sm-5,\n.c-sm-6,\n.c-sm-7,\n.c-sm-8,\n.c-sm-9,\n.c-xs-1,\n.c-xs-10,\n.c-xs-11,\n.c-xs-12,\n.c-xs-2,\n.c-xs-3,\n.c-xs-4,\n.c-xs-5,\n.c-xs-6,\n.c-xs-7,\n.c-xs-8,\n.c-xs-9 {\n  box-sizing: border-box;\n  position: relative;\n  min-height: 1px;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n.c-xs-1,\n.c-xs-10,\n.c-xs-11,\n.c-xs-12,\n.c-xs-2,\n.c-xs-3,\n.c-xs-4,\n.c-xs-5,\n.c-xs-6,\n.c-xs-7,\n.c-xs-8,\n.c-xs-9 {\n  float: left;\n}\n.c-xs-12 {\n  width: 100%;\n}\n.c-xs-11 {\n  width: 91.66666667%;\n}\n.c-xs-10 {\n  width: 83.33333333%;\n}\n.c-xs-9 {\n  width: 75%;\n}\n.c-xs-8 {\n  width: 66.66666667%;\n}\n.c-xs-7 {\n  width: 58.33333333%;\n}\n.c-xs-6 {\n  width: 50%;\n}\n.c-xs-5 {\n  width: 41.66666667%;\n}\n.c-xs-4 {\n  width: 33.33333333%;\n}\n.c-xs-3 {\n  width: 25%;\n}\n.c-xs-2 {\n  width: 16.66666667%;\n}\n.c-xs-1 {\n  width: 8.33333333%;\n}\n.c-xs-pull-12 {\n  right: 100%;\n}\n.c-xs-pull-11 {\n  right: 91.66666667%;\n}\n.c-xs-pull-10 {\n  right: 83.33333333%;\n}\n.c-xs-pull-9 {\n  right: 75%;\n}\n.c-xs-pull-8 {\n  right: 66.66666667%;\n}\n.c-xs-pull-7 {\n  right: 58.33333333%;\n}\n.c-xs-pull-6 {\n  right: 50%;\n}\n.c-xs-pull-5 {\n  right: 41.66666667%;\n}\n.c-xs-pull-4 {\n  right: 33.33333333%;\n}\n.c-xs-pull-3 {\n  right: 25%;\n}\n.c-xs-pull-2 {\n  right: 16.66666667%;\n}\n.c-xs-pull-1 {\n  right: 8.33333333%;\n}\n.c-xs-pull-0 {\n  right: auto;\n}\n.c-xs-push-12 {\n  left: 100%;\n}\n.c-xs-push-11 {\n  left: 91.66666667%;\n}\n.c-xs-push-10 {\n  left: 83.33333333%;\n}\n.c-xs-push-9 {\n  left: 75%;\n}\n.c-xs-push-8 {\n  left: 66.66666667%;\n}\n.c-xs-push-7 {\n  left: 58.33333333%;\n}\n.c-xs-push-6 {\n  left: 50%;\n}\n.c-xs-push-5 {\n  left: 41.66666667%;\n}\n.c-xs-push-4 {\n  left: 33.33333333%;\n}\n.c-xs-push-3 {\n  left: 25%;\n}\n.c-xs-push-2 {\n  left: 16.66666667%;\n}\n.c-xs-push-1 {\n  left: 8.33333333%;\n}\n.c-xs-push-0 {\n  left: auto;\n}\n.c-xs-offset-12 {\n  margin-left: 100%;\n}\n.c-xs-offset-11 {\n  margin-left: 91.66666667%;\n}\n.c-xs-offset-10 {\n  margin-left: 83.33333333%;\n}\n.c-xs-offset-9 {\n  margin-left: 75%;\n}\n.c-xs-offset-8 {\n  margin-left: 66.66666667%;\n}\n.c-xs-offset-7 {\n  margin-left: 58.33333333%;\n}\n.c-xs-offset-6 {\n  margin-left: 50%;\n}\n.c-xs-offset-5 {\n  margin-left: 41.66666667%;\n}\n.c-xs-offset-4 {\n  margin-left: 33.33333333%;\n}\n.c-xs-offset-3 {\n  margin-left: 25%;\n}\n.c-xs-offset-2 {\n  margin-left: 16.66666667%;\n}\n.c-xs-offset-1 {\n  margin-left: 8.33333333%;\n}\n.c-xs-offset-0 {\n  margin-left: 0;\n}\n@media (min-width: 768px) {\n  .c-sm-1,\n  .c-sm-10,\n  .c-sm-11,\n  .c-sm-12,\n  .c-sm-2,\n  .c-sm-3,\n  .c-sm-4,\n  .c-sm-5,\n  .c-sm-6,\n  .c-sm-7,\n  .c-sm-8,\n  .c-sm-9 {\n    float: left;\n  }\n  .c-sm-12 {\n    width: 100%;\n  }\n  .c-sm-11 {\n    width: 91.66666667%;\n  }\n  .c-sm-10 {\n    width: 83.33333333%;\n  }\n  .c-sm-9 {\n    width: 75%;\n  }\n  .c-sm-8 {\n    width: 66.66666667%;\n  }\n  .c-sm-7 {\n    width: 58.33333333%;\n  }\n  .c-sm-6 {\n    width: 50%;\n  }\n  .c-sm-5 {\n    width: 41.66666667%;\n  }\n  .c-sm-4 {\n    width: 33.33333333%;\n  }\n  .c-sm-3 {\n    width: 25%;\n  }\n  .c-sm-2 {\n    width: 16.66666667%;\n  }\n  .c-sm-1 {\n    width: 8.33333333%;\n  }\n  .c-sm-pull-12 {\n    right: 100%;\n  }\n  .c-sm-pull-11 {\n    right: 91.66666667%;\n  }\n  .c-sm-pull-10 {\n    right: 83.33333333%;\n  }\n  .c-sm-pull-9 {\n    right: 75%;\n  }\n  .c-sm-pull-8 {\n    right: 66.66666667%;\n  }\n  .c-sm-pull-7 {\n    right: 58.33333333%;\n  }\n  .c-sm-pull-6 {\n    right: 50%;\n  }\n  .c-sm-pull-5 {\n    right: 41.66666667%;\n  }\n  .c-sm-pull-4 {\n    right: 33.33333333%;\n  }\n  .c-sm-pull-3 {\n    right: 25%;\n  }\n  .c-sm-pull-2 {\n    right: 16.66666667%;\n  }\n  .c-sm-pull-1 {\n    right: 8.33333333%;\n  }\n  .c-sm-pull-0 {\n    right: auto;\n  }\n  .c-sm-push-12 {\n    left: 100%;\n  }\n  .c-sm-push-11 {\n    left: 91.66666667%;\n  }\n  .c-sm-push-10 {\n    left: 83.33333333%;\n  }\n  .c-sm-push-9 {\n    left: 75%;\n  }\n  .c-sm-push-8 {\n    left: 66.66666667%;\n  }\n  .c-sm-push-7 {\n    left: 58.33333333%;\n  }\n  .c-sm-push-6 {\n    left: 50%;\n  }\n  .c-sm-push-5 {\n    left: 41.66666667%;\n  }\n  .c-sm-push-4 {\n    left: 33.33333333%;\n  }\n  .c-sm-push-3 {\n    left: 25%;\n  }\n  .c-sm-push-2 {\n    left: 16.66666667%;\n  }\n  .c-sm-push-1 {\n    left: 8.33333333%;\n  }\n  .c-sm-push-0 {\n    left: auto;\n  }\n  .c-sm-offset-12 {\n    margin-left: 100%;\n  }\n  .c-sm-offset-11 {\n    margin-left: 91.66666667%;\n  }\n  .c-sm-offset-10 {\n    margin-left: 83.33333333%;\n  }\n  .c-sm-offset-9 {\n    margin-left: 75%;\n  }\n  .c-sm-offset-8 {\n    margin-left: 66.66666667%;\n  }\n  .c-sm-offset-7 {\n    margin-left: 58.33333333%;\n  }\n  .c-sm-offset-6 {\n    margin-left: 50%;\n  }\n  .c-sm-offset-5 {\n    margin-left: 41.66666667%;\n  }\n  .c-sm-offset-4 {\n    margin-left: 33.33333333%;\n  }\n  .c-sm-offset-3 {\n    margin-left: 25%;\n  }\n  .c-sm-offset-2 {\n    margin-left: 16.66666667%;\n  }\n  .c-sm-offset-1 {\n    margin-left: 8.33333333%;\n  }\n  .c-sm-offset-0 {\n    margin-left: 0;\n  }\n}\n@media (min-width: 992px) {\n  .c-md-1,\n  .c-md-10,\n  .c-md-11,\n  .c-md-12,\n  .c-md-2,\n  .c-md-3,\n  .c-md-4,\n  .c-md-5,\n  .c-md-6,\n  .c-md-7,\n  .c-md-8,\n  .c-md-9 {\n    float: left;\n  }\n  .c-md-12 {\n    width: 100%;\n  }\n  .c-md-11 {\n    width: 91.66666667%;\n  }\n  .c-md-10 {\n    width: 83.33333333%;\n  }\n  .c-md-9 {\n    width: 75%;\n  }\n  .c-md-8 {\n    width: 66.66666667%;\n  }\n  .c-md-7 {\n    width: 58.33333333%;\n  }\n  .c-md-6 {\n    width: 50%;\n  }\n  .c-md-5 {\n    width: 41.66666667%;\n  }\n  .c-md-4 {\n    width: 33.33333333%;\n  }\n  .c-md-3 {\n    width: 25%;\n  }\n  .c-md-2 {\n    width: 16.66666667%;\n  }\n  .c-md-1 {\n    width: 8.33333333%;\n  }\n  .c-md-pull-12 {\n    right: 100%;\n  }\n  .c-md-pull-11 {\n    right: 91.66666667%;\n  }\n  .c-md-pull-10 {\n    right: 83.33333333%;\n  }\n  .c-md-pull-9 {\n    right: 75%;\n  }\n  .c-md-pull-8 {\n    right: 66.66666667%;\n  }\n  .c-md-pull-7 {\n    right: 58.33333333%;\n  }\n  .c-md-pull-6 {\n    right: 50%;\n  }\n  .c-md-pull-5 {\n    right: 41.66666667%;\n  }\n  .c-md-pull-4 {\n    right: 33.33333333%;\n  }\n  .c-md-pull-3 {\n    right: 25%;\n  }\n  .c-md-pull-2 {\n    right: 16.66666667%;\n  }\n  .c-md-pull-1 {\n    right: 8.33333333%;\n  }\n  .c-md-pull-0 {\n    right: auto;\n  }\n  .c-md-push-12 {\n    left: 100%;\n  }\n  .c-md-push-11 {\n    left: 91.66666667%;\n  }\n  .c-md-push-10 {\n    left: 83.33333333%;\n  }\n  .c-md-push-9 {\n    left: 75%;\n  }\n  .c-md-push-8 {\n    left: 66.66666667%;\n  }\n  .c-md-push-7 {\n    left: 58.33333333%;\n  }\n  .c-md-push-6 {\n    left: 50%;\n  }\n  .c-md-push-5 {\n    left: 41.66666667%;\n  }\n  .c-md-push-4 {\n    left: 33.33333333%;\n  }\n  .c-md-push-3 {\n    left: 25%;\n  }\n  .c-md-push-2 {\n    left: 16.66666667%;\n  }\n  .c-md-push-1 {\n    left: 8.33333333%;\n  }\n  .c-md-push-0 {\n    left: auto;\n  }\n  .c-md-offset-12 {\n    margin-left: 100%;\n  }\n  .c-md-offset-11 {\n    margin-left: 91.66666667%;\n  }\n  .c-md-offset-10 {\n    margin-left: 83.33333333%;\n  }\n  .c-md-offset-9 {\n    margin-left: 75%;\n  }\n  .c-md-offset-8 {\n    margin-left: 66.66666667%;\n  }\n  .c-md-offset-7 {\n    margin-left: 58.33333333%;\n  }\n  .c-md-offset-6 {\n    margin-left: 50%;\n  }\n  .c-md-offset-5 {\n    margin-left: 41.66666667%;\n  }\n  .c-md-offset-4 {\n    margin-left: 33.33333333%;\n  }\n  .c-md-offset-3 {\n    margin-left: 25%;\n  }\n  .c-md-offset-2 {\n    margin-left: 16.66666667%;\n  }\n  .c-md-offset-1 {\n    margin-left: 8.33333333%;\n  }\n  .c-md-offset-0 {\n    margin-left: 0;\n  }\n}\n@media (min-width: 1200px) {\n  .c-lg-1,\n  .c-lg-10,\n  .c-lg-11,\n  .c-lg-12,\n  .c-lg-2,\n  .c-lg-3,\n  .c-lg-4,\n  .c-lg-5,\n  .c-lg-6,\n  .c-lg-7,\n  .c-lg-8,\n  .c-lg-9 {\n    float: left;\n  }\n  .c-lg-12 {\n    width: 100%;\n  }\n  .c-lg-11 {\n    width: 91.66666667%;\n  }\n  .c-lg-10 {\n    width: 83.33333333%;\n  }\n  .c-lg-9 {\n    width: 75%;\n  }\n  .c-lg-8 {\n    width: 66.66666667%;\n  }\n  .c-lg-7 {\n    width: 58.33333333%;\n  }\n  .c-lg-6 {\n    width: 50%;\n  }\n  .c-lg-5 {\n    width: 41.66666667%;\n  }\n  .c-lg-4 {\n    width: 33.33333333%;\n  }\n  .c-lg-3 {\n    width: 25%;\n  }\n  .c-lg-2 {\n    width: 16.66666667%;\n  }\n  .c-lg-1 {\n    width: 8.33333333%;\n  }\n  .c-lg-pull-12 {\n    right: 100%;\n  }\n  .c-lg-pull-11 {\n    right: 91.66666667%;\n  }\n  .c-lg-pull-10 {\n    right: 83.33333333%;\n  }\n  .c-lg-pull-9 {\n    right: 75%;\n  }\n  .c-lg-pull-8 {\n    right: 66.66666667%;\n  }\n  .c-lg-pull-7 {\n    right: 58.33333333%;\n  }\n  .c-lg-pull-6 {\n    right: 50%;\n  }\n  .c-lg-pull-5 {\n    right: 41.66666667%;\n  }\n  .c-lg-pull-4 {\n    right: 33.33333333%;\n  }\n  .c-lg-pull-3 {\n    right: 25%;\n  }\n  .c-lg-pull-2 {\n    right: 16.66666667%;\n  }\n  .c-lg-pull-1 {\n    right: 8.33333333%;\n  }\n  .c-lg-pull-0 {\n    right: auto;\n  }\n  .c-lg-push-12 {\n    left: 100%;\n  }\n  .c-lg-push-11 {\n    left: 91.66666667%;\n  }\n  .c-lg-push-10 {\n    left: 83.33333333%;\n  }\n  .c-lg-push-9 {\n    left: 75%;\n  }\n  .c-lg-push-8 {\n    left: 66.66666667%;\n  }\n  .c-lg-push-7 {\n    left: 58.33333333%;\n  }\n  .c-lg-push-6 {\n    left: 50%;\n  }\n  .c-lg-push-5 {\n    left: 41.66666667%;\n  }\n  .c-lg-push-4 {\n    left: 33.33333333%;\n  }\n  .c-lg-push-3 {\n    left: 25%;\n  }\n  .c-lg-push-2 {\n    left: 16.66666667%;\n  }\n  .c-lg-push-1 {\n    left: 8.33333333%;\n  }\n  .c-lg-push-0 {\n    left: auto;\n  }\n  .c-lg-offset-12 {\n    margin-left: 100%;\n  }\n  .c-lg-offset-11 {\n    margin-left: 91.66666667%;\n  }\n  .c-lg-offset-10 {\n    margin-left: 83.33333333%;\n  }\n  .c-lg-offset-9 {\n    margin-left: 75%;\n  }\n  .c-lg-offset-8 {\n    margin-left: 66.66666667%;\n  }\n  .c-lg-offset-7 {\n    margin-left: 58.33333333%;\n  }\n  .c-lg-offset-6 {\n    margin-left: 50%;\n  }\n  .c-lg-offset-5 {\n    margin-left: 41.66666667%;\n  }\n  .c-lg-offset-4 {\n    margin-left: 33.33333333%;\n  }\n  .c-lg-offset-3 {\n    margin-left: 25%;\n  }\n  .c-lg-offset-2 {\n    margin-left: 16.66666667%;\n  }\n  .c-lg-offset-1 {\n    margin-left: 8.33333333%;\n  }\n  .c-lg-offset-0 {\n    margin-left: 0;\n  }\n}\n.clearfix:after,\n.clearfix:before,\n.container-fluid:after,\n.container-fluid:before,\n.container:after,\n.container:before,\n.row:after,\n.row:before {\n  content: \" \";\n  display: table;\n}\n.clearfix:after,\n.container-fluid:after,\n.container:after,\n.row:after {\n  clear: both;\n}\n/* ========================================== Common Fields CSS============================*/\n.table-responsive {\n  max-width: 100%;\n}\n.filter-fields .field-wrapper.has-value .form-ctrl + label,\n.filter-fields .field-wrapper .form-ctrl:focus + label {\n  top: 0;\n}\n/* For DatePicker */\n.field-wrapper {\n  position: relative;\n  padding-top: 10px;\n}\n.field-wrapper .form-ctrl {\n  z-index: 10;\n}\n.field-wrapper.datePickerBox .form-ctrl {\n  cursor: pointer;\n  position: relative;\n  z-index: 10;\n  background: transparent;\n}\n.field-wrapper.datePickerBox:after {\n  content: '';\n  background: url(\"/./assets/images/calendar.svg\") no-repeat;\n  position: absolute;\n  right: 5px;\n  top: 28px;\n  width: 21px;\n  height: 21px;\n  z-index: 0;\n}\n.field-wrapper .date-clear {\n  position: absolute;\n  right: -35px;\n  top: 35px;\n  cursor: pointer;\n  color: #0084f6;\n}\n.field-wrapper label {\n  font-size: 12px;\n  z-index: 1;\n}\n/* text field  */\n.field-wrapper .form-ctrl {\n  display: block;\n  width: 100%;\n  box-sizing: border-box;\n  padding: 5px;\n  outline: none;\n  border: solid 1px #e2ebee;\n  background: #fff;\n  z-index: 10;\n  font: 400 12px 'Open sans', sans-serif;\n  box-shadow: none;\n  border-radius: 0;\n  color: #000;\n}\n.field-wrapper .form-ctrl.form-ctrl-multiple {\n  height: 100px;\n  overflow-y: auto;\n}\n.field-wrapper .form-ctrl:focus {\n  border: solid 2px #0084f6;\n  box-shadow: none;\n}\n.field-wrapper .form-ctrl:focus + label,\n.field-wrapper.has-value .form-ctrl + label {\n  font-size: 12px;\n  top: 6px;\n  left: 0;\n}\n.field-wrapper .form-ctrl:focus + label,\n.field-wrapper.has-value .form-ctrl + label {\n  color: #0084f6;\n  font-size: 12px;\n}\n/*radio button  */\n.field-checkbox-wrapper,\n.field-radio-wrapper {\n  position: relative;\n  padding-left: 25px;\n  margin-bottom: 10px;\n}\n.field-radio-wrapper .form-radio {\n  opacity: 0;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 20px;\n  height: 20px;\n  z-index: 1;\n}\n.field-radio-wrapper .form-radio + label {\n  vertical-align: middle;\n  transition: all .1s;\n}\n.field-radio-wrapper .form-radio + label:after {\n  content: '';\n  width: 16px;\n  height: 16px;\n  border: 2px solid #ccc;\n  border-radius: 50%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  transition: all .1s;\n}\n.field-radio-wrapper .form-radio:checked + label:after {\n  border: 2px solid #0084f6;\n}\n.field-radio-wrapper .form-radio + label:before {\n  transition: all .1s;\n  width: 1px;\n  height: 1px;\n  left: 9px;\n  top: 9px;\n  position: absolute;\n  content: '';\n}\n.field-radio-wrapper .form-radio:checked + label:before {\n  content: '';\n  width: 10px;\n  height: 10px;\n  background: #0084f6;\n  border-radius: 50%;\n  left: 3px;\n  top: 3px;\n}\n.field-radio-wrapper .form-radio:checked + label {\n  color: #0084f6;\n}\n/*checkbox  */\n.field-checkbox-wrapper .form-checkbox {\n  opacity: 0;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 20px;\n  height: 20px;\n  z-index: 1;\n}\n.field-checkbox-wrapper .form-checkbox + label {\n  vertical-align: middle;\n  font-size: 14px;\n  display: inline-block;\n}\n.field-checkbox-wrapper .form-checkbox + label:after {\n  content: '';\n  width: 16px;\n  height: 16px;\n  border: 2px solid #ccc;\n  border-radius: 2px;\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n.field-checkbox-wrapper .form-checkbox:checked + label:after {\n  border: 2px solid #0084f6;\n}\n.field-checkbox-wrapper .form-checkbox + label:before {\n  width: 1px;\n  height: 1px;\n  left: 8px;\n  top: 9px;\n  position: absolute;\n  content: '';\n  border-top: 0;\n  border-right: 0;\n  border-left: 2px solid transparent;\n  border-bottom: 2px solid transparent;\n  transform: rotate(-45deg);\n}\n.field-checkbox-wrapper .form-checkbox:checked + label:before {\n  border-left: 2px solid #0084f6;\n  border-bottom: 2px solid #0084f6;\n  width: 12px;\n  height: 5px;\n  left: 2px;\n  top: 5px;\n}\n.field-checkbox-wrapper .form-checkbox:checked + label {\n  color: #0084f6;\n}\n/*navigation   */\n.useFul li {\n  list-style-type: none;\n}\n.useFul nav {\n  margin-left: 200px;\n}\n/*===========================================common Table CSS===============================*/\n.mb0,\n.middle-top.mb0 {\n  margin-bottom: 0;\n}\n.align-center {\n  text-align: center;\n}\ntable {\n  width: 100%;\n  box-sizing: border-box;\n  border-collapse: collapse;\n  overflow-y: hidden;\n}\ntd,\nth {\n  font-size: 14px;\n  padding: 6px 2px;\n  vertical-align: middle;\n}\nth {\n  background: #fff;\n  font-size: 12px !important;\n  color: #000000;\n  font-weight: 600;\n  padding: 20px 10px;\n  border-top: 2px solid rgba(119, 119, 119, 0.11);\n}\nth label {\n  font-size: 14px !important;\n  color: #000000;\n}\nth a {\n  font-size: 14px !important;\n  color: #000000;\n}\nth:first-child {\n  border-top-left-radius: 5px;\n}\nth.No {\n  text-align: right;\n}\nth.Name {\n  text-align: left;\n}\nth.Contact {\n  text-align: right;\n}\nth.Date {\n  text-align: right;\n}\ntd {\n  border-bottom: 1px solid #fff;\n}\ntd.No {\n  text-align: right;\n}\ntd.Name {\n  text-align: left;\n}\ntd.Contact {\n  text-align: right;\n}\ntd.Date {\n  text-align: right;\n}\ntable tr {\n  transition: all .1s;\n}\ntable tr {\n  background: #ffffff;\n  border-left: 1px solid rgba(211, 212, 213, 0.5);\n  border-right: 1px solid rgba(211, 212, 213, 0.5);\n  cursor: pointer;\n}\ntable tr td {\n  border-top: 1px solid rgba(211, 212, 213, 0.5);\n  border-bottom: 2px solid rgba(211, 212, 213, 0.5);\n  padding: 5px 15px;\n  font-size: 14px;\n}\ntable tr:nth-child(even):hover {\n  background: #ececec;\n}\ntable tr:nth-child(odd):hover {\n  background: #eaeaea;\n}\ntable tr.selected {\n  background: #dceff7 !important;\n  box-shadow: 0 11px 8px -10px #CCC, 0 -11px 13px -9px #CCC;\n  transform: scale(1);\n}\n.table-responsive tr td:first-child .field-checkbox-wrapper,\n.table-responsive tr th:first-child .field-checkbox-wrapper {\n  width: 20px;\n  overflow: hidden;\n  box-sizing: border-box;\n  height: 20px;\n  padding-left: 20px;\n  margin-bottom: 0;\n  margin-left: 5px;\n  background: transparent;\n  border-radius: 2px;\n}\n.enquiry-status label {\n  display: block;\n  font-weight: 600;\n}\n.progress-status {\n  color: dodgerblue;\n}\n.inactive-status,\n.open-status {\n  color: #333;\n}\n.admitted-status {\n  color: green;\n}\n.btn {\n  padding: 6px 10px;\n  background: #fff;\n  border: 1px solid #ccc;\n  margin-left: 10px;\n  display: inline-block;\n  font-size: 14px;\n  font-weight: 600;\n  box-sizing: border-box;\n  /* height: 35px; */\n  cursor: pointer;\n  color: #0084f6;\n  border-radius: 4px;\n}\n.btn.fullBlue {\n  background: #0084f6;\n  border: 1px solid #0084f6;\n  color: #fff;\n  padding: 4px 10px;\n  border-radius: 4px;\n}\n.btn.cancle {\n  background: #fff;\n  border: 1px solid #ccc;\n  color: #0084f6;\n  font-size: 14px;\n  padding: 6px 10px;\n  border-radius: 4px;\n}\n.btn.redBtn {\n  background: #f44336;\n  border: 1px solid #f44336;\n  color: #fff;\n  font-size: 14px;\n}\n.btn.normal-btn {\n  margin: 0;\n}\n.middle-bottom .btn.redBtn {\n  margin-right: 0;\n}\n.customSelectWrapper select {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  -o-appearance: none;\n  appearance: none;\n  position: relative;\n  z-index: 1;\n  background: transparent;\n}\n.customSelectWrapper:after {\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  content: \"\\f107\";\n  font-size: 22px;\n  position: absolute;\n  right: 0;\n  top: 20px;\n}\n.box-shadow-lite .field-wrapper.customSelectWrapper:after {\n  right: 40px;\n}\n.field-wrapper.customSelectWrapper label {\n  top: 13px;\n  width: 100%;\n  height: 22px;\n  padding-top: 10px;\n  z-index: 2;\n}\n.field-wrapper.customSelectWrapper .form-ctrl:focus + label,\n.field-wrapper.customSelectWrapper.has-value label {\n  padding-top: 0;\n  height: 42px;\n}\n.customSelectWrapper .form-ctrl option {\n  opacity: 0;\n  visibility: hidden;\n  display: none;\n}\n.open-accor {\n  float: right;\n  width: 24px;\n  font-size: 24px;\n  height: 24px;\n  text-align: center;\n  border: none;\n  border-radius: 50%;\n  line-height: 24px;\n  margin-right: 4px;\n  margin-top: 3px;\n  cursor: pointer;\n  color: #0084f6;\n  cursor: pointer;\n}\n.hasError .form-ctrl,\n.hasError.form-ctrl {\n  color: red;\n  border-color: red !important;\n}\np.error-msg {\n  color: red;\n}\n.middle-bottom .questionInfo {\n  display: inline-block;\n  position: static;\n  margin-left: 10px;\n  vertical-align: middle;\n}\n.next {\n  position: relative;\n  padding-right: 12px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.next:after {\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  content: \"\\f105\";\n  font-size: 17px;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.next:hover {\n  text-decoration: underline;\n}\n.prev {\n  position: relative;\n  padding-left: 12px;\n  font-size: 12px;\n  font-weight: 600;\n  margin-right: 30px;\n}\n.prev:after {\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  content: \"\\f104\";\n  font-size: 17px;\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n.prev:hover {\n  text-decoration: underline;\n}\n.form-type1 h2,\n.form-type2 h2 {\n  margin-top: 15px;\n  font-size: 15px;\n}\n.other-heading h2,\n.other-heading h4 {\n  font-size: 16px;\n  margin-bottom: 10px;\n  font-weight: 600;\n}\n.other-heading h2 a,\n.other-heading h4 a {\n  display: inline-block;\n  margin-top: 3px;\n  font-size: 12px;\n}\n.other-heading h2 .close-btns,\n.other-heading h4 .close-btns {\n  float: right;\n  cursor: pointer;\n  width: 20px;\n  text-align: center;\n}\n.other-heading h2 .close-btns svg,\n.other-heading h4 .close-btns svg {\n  width: 13px;\n  stroke-width: 2px;\n}\n.other-heading h2 .close-btns svg .cls-1,\n.other-heading h4 .close-btns svg .cls-1 {\n  stroke: #333;\n}\n.other-heading h2 .close-btns:hover svg .cls-1,\n.other-heading h4 .close-btns:hover svg .cls-1 {\n  stroke: #0084f6;\n}\n.info-icon {\n  width: 17px;\n  height: 17px;\n  border-radius: 50%;\n  border: 1px solid #333;\n  display: inline-block;\n  vertical-align: middle;\n  font-size: 12px;\n  text-align: center;\n  font-weight: bold;\n  padding-top: 1px;\n  box-sizing: border-box;\n  cursor: pointer;\n  position: relative;\n  margin: 0 5px;\n}\n.add-edit {\n  margin-top: 15px;\n  margin-bottom: 15px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.add-edit a {\n  margin-right: 15px;\n}\n.form-new-field {\n  background: transparent;\n  width: 60px;\n  text-align: center;\n  border: 0;\n  border-bottom: 1px solid #ccc;\n  padding: 6px 0;\n}\nselect.form-new-field {\n  width: 110px;\n}\nmain {\n  padding-left: 15% !important;\n  box-sizing: border-box;\n  position: relative;\n}\n.middle-section {\n  margin-top: 48px;\n}\n.mat-h1, .mat-headline, .mat-typography h1, .mat-typography h2 {\n  font: bold 14px/20px 'Open Sans', sans-serif;\n  letter-spacing: normal;\n  margin: 0 0 16px;\n}\n.mat-body, .mat-body-1, .mat-typography {\n  font: 400 14px/20px 'Open Sans', sans-serif;\n  letter-spacing: normal;\n}\n.tooltip-box {\n  position: absolute;\n  width: 150px;\n  min-height: 30px;\n  background: #fff;\n  border: 1px solid #ccc;\n  left: -150px;\n  z-index: 1;\n  top: -8px;\n  visibility: hidden;\n  opacity: 0;\n  transition: all .1s linear .1s;\n  font-size: 11px;\n  border-radius: 4px;\n  padding: 3px 5px;\n  box-shadow: 0 0 4px #ccc;\n}\n.tooltip-box:after {\n  content: '';\n  width: 0;\n  height: 0;\n  border-left: 8px solid #fff;\n  border-top: 8px solid transparent;\n  border-bottom: 8px solid transparent;\n  position: absolute;\n  right: -8px;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n}\n.tooltip-box-field {\n  position: absolute;\n  width: 130px;\n  min-height: 30px;\n  background: #e0e0e0;\n  border: 1px solid #ccc;\n  left: 16px;\n  z-index: 1;\n  top: -2px;\n  visibility: hidden;\n  opacity: 0;\n  transition: all .1s linear .1s;\n  font-size: 11px;\n  border-radius: 4px;\n  padding: 3px 5px;\n  box-shadow: 0 0 4px #ccc;\n}\n.tooltip-box-field:after {\n  content: '';\n  width: 0;\n  height: 0;\n  border-right: 8px solid #e0e0e0;\n  border-top: 8px solid transparent;\n  border-bottom: 8px solid transparent;\n  position: absolute;\n  left: -7px;\n  top: 4px;\n  bottom: 0;\n  /* margin: auto; */\n}\n.middle-top .questionInfo {\n  position: relative;\n}\n.middle-top .questionInfo .tooltip-box-field {\n  left: auto;\n  right: 16px;\n}\n.middle-top .questionInfo .tooltip-box-field:after {\n  transform: rotate(180deg);\n  right: -7px;\n  left: auto;\n}\n.middle-top .questionInfo:hover .tooltip-box-field {\n  left: auto;\n  right: 28px;\n}\n.middle-top .questionInfo:hover .tooltip-box-field:after {\n  transform: rotate(180deg);\n  right: -7px;\n  left: auto;\n}\n.questionInfo.pos-rel {\n  position: relative;\n}\n.info-tool {\n  display: inline-block;\n}\n.info-tool .tooltip-box-field {\n  width: 100px;\n  left: 0;\n}\n.info-tool:hover .tooltip-box-field,\n.questionInfo:hover .tooltip-box-field {\n  visibility: visible;\n  opacity: 1;\n  left: 28px;\n}\n.questionInfo.inline-relative {\n  display: inline-block;\n  position: relative;\n}\n.tooltip-table:hover .tooltip-box {\n  visibility: visible;\n  opacity: 1;\n  left: -140px;\n}\n.nav-tab {\n  max-width: 700px;\n  margin: 10px auto;\n  font-size: 0;\n}\n.nav-tab li {\n  width: 15%;\n  display: inline-block;\n  vertical-align: top;\n  position: relative;\n  margin: 0 5%;\n}\n.nav-tab li div {\n  display: inline-block;\n  text-align: center;\n  position: relative;\n  cursor: pointer;\n}\n.nav-tab li div:after {\n  content: '';\n  position: absolute;\n  width: 166px;\n  height: 2px;\n  background: #ccc;\n  right: 50%;\n  top: -24px;\n  bottom: 0;\n  margin: auto;\n}\n.nav-tab li div span {\n  border: 1px solid #ccc;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background: #ddd;\n  display: inline-block;\n  text-align: center;\n  line-height: 30px;\n  position: relative;\n  z-index: 1;\n  font-weight: 600;\n  font-size: 14px;\n}\n.nav-tab li div p {\n  font-weight: 600;\n  color: #888;\n  margin-top: 10px;\n}\n.nav-tab li:first-child div:after {\n  display: none;\n}\n.nav-tab li.active div span, .nav-tab li.tab-completed div span {\n  border-color: #0084f6;\n  color: #fff;\n  background: #0084f6;\n}\n.nav-tab li.active div:after, .nav-tab li.tab-completed div:after {\n  background: #0084f6;\n}\n.nav-tab li.active div p, .nav-tab li.tab-completed div p {\n  color: #0084f6;\n}\n.student-table.table-responsive tr td:first-child .field-checkbox-wrapper,\n.student-table.table-responsive tr th:first-child .field-checkbox-wrapper {\n  display: inline-block;\n}\n@media only screen and (max-width: 767px) {\n  .nav-tab {\n    max-width: 300px;\n  }\n  .nav-tab li div:after {\n    width: 73px;\n    bottom: auto;\n    margin: 0;\n    top: 15px;\n  }\n  .tooltip-box-field {\n    right: 16px;\n    left: auto;\n  }\n  .questionInfo:hover .tooltip-box-field {\n    right: 28px;\n    left: auto;\n  }\n  .tooltip-box-field:after {\n    transform: rotate(180deg);\n    right: -7px;\n    left: auto;\n  }\n  .info-tool:hover .tooltip-box-field {\n    left: 28px;\n    right: auto;\n  }\n  .info-tool:hover .tooltip-box-field:after {\n    transform: rotate(0deg);\n    right: auto;\n    left: -7px;\n  }\n  .export-print .export-icon,\n  .export-print .report-icon {\n    margin-left: 0 !important;\n  }\n  .middle-top .questionInfo:hover .tooltip-box-field {\n    left: 28px;\n    right: auto;\n  }\n  .middle-top .questionInfo:hover .tooltip-box-field:after {\n    transform: rotate(0deg);\n    left: -7px;\n    right: auto;\n  }\n}\n/*======================================common menu icon=====================*/\n.edit-icon {\n  background: url(\"/../assets/images/edit_details.svg\") no-repeat;\n  width: 19px;\n  height: 19px;\n  display: inline-block;\n  vertical-align: middle;\n}\ninput:-webkit-autofill {\n  -webkit-box-shadow: 0 0 0 1000px white inset !important;\n}\n.view-icon {\n  background: url(\"/./assets/images/view_details.svg\") no-repeat;\n  width: 13px;\n  height: 15px;\n  display: inline-block;\n  vertical-align: middle;\n}\n.alert-danger {\n  color: red !important;\n  background-color: transparent !important;\n  border: none !important;\n}\n.alert {\n  padding: 0 !important;\n  margin-bottom: 0 !important;\n}\n.popupWrapper {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  bottom: 0;\n  top: 0px;\n  right: 0;\n  left: 0;\n  background: rgba(230, 230, 230, 0.5);\n  z-index: 100;\n  visibility: hidden;\n  opacity: 0;\n  transition: all .5s ease-in;\n}\n.popupWrapper .popup {\n  max-width: 60%;\n  width: 100%;\n  height: auto;\n  left: 0;\n  right: 0;\n  top: 5%;\n  bottom: 0;\n  margin: auto;\n}\n.popupWrapper .popup.large {\n  max-width: 80%;\n  width: 100%;\n  height: auto;\n  left: 0;\n  right: 0;\n  top: 2%;\n  bottom: 0;\n  margin: auto;\n}\n.popupWrapper .popup.small {\n  max-width: 40%;\n  width: 100%;\n  height: auto;\n  left: 0;\n  right: 0;\n  top: 5%;\n  bottom: 0;\n  margin: auto;\n}\n.popupWrapper .popup ::-webkit-scrollbar {\n  display: block;\n  width: 7px;\n  height: 7px;\n}\n.popup-wrapper {\n  padding: 20px;\n  box-sizing: border-box;\n  box-shadow: 1px 8px 20px 5px #9c9c9c;\n  transition: unset;\n  background: #fff;\n}\n.popup-wrapper h2 {\n  margin-bottom: 15px;\n  font-size: 14px;\n}\n.popup-wrapper h4 {\n  margin: 25px 0 15px;\n  font-weight: 600;\n}\n.closePopup {\n  right: 10px;\n  top: 10px;\n  font-size: 14px;\n  cursor: pointer;\n  line-height: 20px;\n  width: 26px;\n  height: 26px;\n  box-sizing: border-box;\n  text-align: center;\n  padding-top: 3px;\n  display: none;\n}\n.closePopup.bottomRight {\n  bottom: 2px;\n  top: auto;\n  left: auto;\n  right: 0;\n}\n.closePopup.topLeft {\n  left: 0;\n  right: auto;\n  top: 1px;\n  bottom: auto;\n}\n.closePopup.bottomLeft {\n  left: 0;\n  right: auto;\n  bottom: 2px;\n  top: auto;\n}\n.closePopup svg {\n  width: 16px;\n}\n.closePopup svg .cls-1 {\n  stroke: #c1c1c1;\n  stroke-width: 2px;\n}\n.closePopup:hover .cls-1 {\n  stroke: #0084f6;\n}\n.popup-content {\n  height: 100%;\n  overflow: hidden;\n  visibility: visible;\n}\n.popup-content .row {\n  margin: 0;\n}\n.popup-content .content-wrapper {\n  margin: 5px;\n  max-height: 480px;\n  overflow: hidden;\n}\n.popup-content .content-wrapper .content-scroller {\n  max-height: 475px;\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n.fadeIn {\n  opacity: 1;\n  visibility: visible;\n}\n.popupWrapperMob {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  bottom: 0;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 100;\n  background: rgba(0, 0, 0, 0.5);\n  visibility: hidden;\n  transition: all .5s ease-in;\n}\n.popupWrapperMob .closePopup {\n  right: -25px;\n  top: -27px;\n  display: block;\n}\n.popup-mob {\n  left: 0;\n  width: 100%;\n  max-height: 70%;\n  background: #fff;\n  padding: 30px;\n  box-sizing: border-box;\n  height: 100%;\n  overflow: auto;\n  z-index: 1;\n  bottom: -70%;\n  transition: all .5s ease-in;\n}\n.popupWrapperMob.showPopupMob {\n  z-index: 100;\n  visibility: visible;\n  opacity: 1;\n}\n.popupWrapperMob.showPopupMob .popup-mob {\n  bottom: 0;\n}\n.sdb {\n  cursor: pointer;\n}\n.sdb > li {\n  padding: 8px 0;\n  border-bottom: 2px solid rgba(211, 212, 213, 0.2);\n  margin-bottom: 16px;\n  cursor: pointer;\n}\n.sdb > li:last-child {\n  border-bottom: 0;\n  margin-bottom: 0;\n}\n.sdb > li h5 {\n  display: flex;\n  justify-content: space-between;\n  color: #1e2328;\n  font-size: 14px;\n  cursor: pointer;\n  margin-bottom: 12px;\n}\n.sdb > li h5 span {\n  text-transform: uppercase;\n  opacity: .8;\n  margin-bottom: 4px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.sdb > li h6 {\n  display: flex;\n  justify-content: space-between;\n  color: #1e2328;\n  font-size: 12px;\n  cursor: pointer;\n  margin-bottom: 12px;\n}\n.sdb > li h6 span {\n  text-transform: uppercase;\n  opacity: .8;\n  margin-bottom: 4px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.in-student-list > li {\n  margin-bottom: 0;\n  cursor: pointer;\n}\n.in-student-list > li a {\n  display: block;\n  margin: 0 -15px;\n  padding: 8px 15px;\n  cursor: pointer;\n}\n.in-student-list > li a:hover {\n  background: rgba(27, 96, 163, 0.0901961);\n}\n.in-student-list > li a img {\n  float: left;\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  margin-right: 12px;\n  cursor: pointer;\n}\n.in-student-list > li a .sdb-right {\n  display: block;\n  overflow: hidden;\n  color: rgba(30, 35, 40, 0.7);\n  cursor: pointer;\n}\n.in-student-list > li a .sdb-right label {\n  display: block;\n  margin-bottom: 6px;\n  cursor: pointer;\n}\n.in-student-list > li a .sdb-right label strong {\n  font-weight: 600;\n}\n.in-student-list > li a .sdb-right label.recent {\n  display: inline-block;\n  margin-bottom: 6px;\n  color: rgba(30, 35, 40, 0.7);\n  width: 85%;\n}\n.in-student-list > li a .sdb-right label.delete {\n  display: inline-block;\n  margin-bottom: 6px;\n  color: rgba(30, 35, 40, 0.7);\n  width: 10%;\n}\n.in-student-list > li a .sdb-right label.delete img {\n  float: left;\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  margin-right: 0;\n  cursor: pointer;\n}\n.in-student-list > li a .sdb-right span {\n  font-size: 12px;\n  cursor: pointer;\n}\n.in-student-list > li a.markers {\n  display: inline-block;\n  margin: 0;\n  padding: 8px 10px;\n}\n.in-student-list .holder li:last-child {\n  display: none;\n}\n.in-student-list .holder:hover li:last-child {\n  display: block;\n}\n.dropdown ul {\n  cursor: pointer;\n}\n.theme-green .bs-datepicker-body table td.week span {\n  color: #337ab7 !important;\n}\n.theme-green .bs-datepicker-head {\n  background-color: #337ab7 !important;\n}\n.theme-green .bs-datepicker-body table td span.selected {\n  background-color: #337ab7 !important;\n}\nbs-datepicker-container,\nbs-daterangepicker-container {\n  z-index: 99999999999 !important;\n  left: -5% !important;\n}\n.next:after {\n  content: \"\" !important;\n}\nbody {\n  background: #f4f5f7 !important;\n}\n.modal-backdrop.in, .modal-backdrop {\n  display: none !important;\n}\n.container,\n.container-fluid {\n  margin-right: auto;\n  margin-left: auto;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n@media (min-width: 768px) {\n  .container {\n    width: 750px;\n  }\n}\n@media (min-width: 992px) {\n  .container {\n    width: 970px;\n  }\n}\n@media (min-width: 1200px) {\n  .container {\n    width: 1170px;\n  }\n}\n.row {\n  margin-left: -15px;\n  margin-right: -15px;\n}\n.c-lg-1,\n.c-lg-10,\n.c-lg-11,\n.c-lg-12,\n.c-lg-2,\n.c-lg-3,\n.c-lg-4,\n.c-lg-5,\n.c-lg-6,\n.c-lg-7,\n.c-lg-8,\n.c-lg-9,\n.c-md-1,\n.c-md-10,\n.c-md-11,\n.c-md-12,\n.c-md-2,\n.c-md-3,\n.c-md-4,\n.c-md-5,\n.c-md-6,\n.c-md-7,\n.c-md-8,\n.c-md-9,\n.c-sm-1,\n.c-sm-10,\n.c-sm-11,\n.c-sm-12,\n.c-sm-2,\n.c-sm-3,\n.c-sm-4,\n.c-sm-5,\n.c-sm-6,\n.c-sm-7,\n.c-sm-8,\n.c-sm-9,\n.c-xs-1,\n.c-xs-10,\n.c-xs-11,\n.c-xs-12,\n.c-xs-2,\n.c-xs-3,\n.c-xs-4,\n.c-xs-5,\n.c-xs-6,\n.c-xs-7,\n.c-xs-8,\n.c-xs-9 {\n  box-sizing: border-box;\n  position: relative;\n  min-height: 1px;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n.c-xs-1,\n.c-xs-10,\n.c-xs-11,\n.c-xs-12,\n.c-xs-2,\n.c-xs-3,\n.c-xs-4,\n.c-xs-5,\n.c-xs-6,\n.c-xs-7,\n.c-xs-8,\n.c-xs-9 {\n  float: left;\n}\n.c-xs-12 {\n  width: 100%;\n}\n.c-xs-11 {\n  width: 91.66666667%;\n}\n.c-xs-10 {\n  width: 83.33333333%;\n}\n.c-xs-9 {\n  width: 75%;\n}\n.c-xs-8 {\n  width: 66.66666667%;\n}\n.c-xs-7 {\n  width: 58.33333333%;\n}\n.c-xs-6 {\n  width: 50%;\n}\n.c-xs-5 {\n  width: 41.66666667%;\n}\n.c-xs-4 {\n  width: 33.33333333%;\n}\n.c-xs-3 {\n  width: 25%;\n}\n.c-xs-2 {\n  width: 16.66666667%;\n}\n.c-xs-1 {\n  width: 8.33333333%;\n}\n.c-xs-pull-12 {\n  right: 100%;\n}\n.c-xs-pull-11 {\n  right: 91.66666667%;\n}\n.c-xs-pull-10 {\n  right: 83.33333333%;\n}\n.c-xs-pull-9 {\n  right: 75%;\n}\n.c-xs-pull-8 {\n  right: 66.66666667%;\n}\n.c-xs-pull-7 {\n  right: 58.33333333%;\n}\n.c-xs-pull-6 {\n  right: 50%;\n}\n.c-xs-pull-5 {\n  right: 41.66666667%;\n}\n.c-xs-pull-4 {\n  right: 33.33333333%;\n}\n.c-xs-pull-3 {\n  right: 25%;\n}\n.c-xs-pull-2 {\n  right: 16.66666667%;\n}\n.c-xs-pull-1 {\n  right: 8.33333333%;\n}\n.c-xs-pull-0 {\n  right: auto;\n}\n.c-xs-push-12 {\n  left: 100%;\n}\n.c-xs-push-11 {\n  left: 91.66666667%;\n}\n.c-xs-push-10 {\n  left: 83.33333333%;\n}\n.c-xs-push-9 {\n  left: 75%;\n}\n.c-xs-push-8 {\n  left: 66.66666667%;\n}\n.c-xs-push-7 {\n  left: 58.33333333%;\n}\n.c-xs-push-6 {\n  left: 50%;\n}\n.c-xs-push-5 {\n  left: 41.66666667%;\n}\n.c-xs-push-4 {\n  left: 33.33333333%;\n}\n.c-xs-push-3 {\n  left: 25%;\n}\n.c-xs-push-2 {\n  left: 16.66666667%;\n}\n.c-xs-push-1 {\n  left: 8.33333333%;\n}\n.c-xs-push-0 {\n  left: auto;\n}\n.c-xs-offset-12 {\n  margin-left: 100%;\n}\n.c-xs-offset-11 {\n  margin-left: 91.66666667%;\n}\n.c-xs-offset-10 {\n  margin-left: 83.33333333%;\n}\n.c-xs-offset-9 {\n  margin-left: 75%;\n}\n.c-xs-offset-8 {\n  margin-left: 66.66666667%;\n}\n.c-xs-offset-7 {\n  margin-left: 58.33333333%;\n}\n.c-xs-offset-6 {\n  margin-left: 50%;\n}\n.c-xs-offset-5 {\n  margin-left: 41.66666667%;\n}\n.c-xs-offset-4 {\n  margin-left: 33.33333333%;\n}\n.c-xs-offset-3 {\n  margin-left: 25%;\n}\n.c-xs-offset-2 {\n  margin-left: 16.66666667%;\n}\n.c-xs-offset-1 {\n  margin-left: 8.33333333%;\n}\n.c-xs-offset-0 {\n  margin-left: 0;\n}\n@media (min-width: 768px) {\n  .c-sm-1,\n  .c-sm-10,\n  .c-sm-11,\n  .c-sm-12,\n  .c-sm-2,\n  .c-sm-3,\n  .c-sm-4,\n  .c-sm-5,\n  .c-sm-6,\n  .c-sm-7,\n  .c-sm-8,\n  .c-sm-9 {\n    float: left;\n  }\n  .c-sm-12 {\n    width: 100%;\n  }\n  .c-sm-11 {\n    width: 91.66666667%;\n  }\n  .c-sm-10 {\n    width: 83.33333333%;\n  }\n  .c-sm-9 {\n    width: 75%;\n  }\n  .c-sm-8 {\n    width: 66.66666667%;\n  }\n  .c-sm-7 {\n    width: 58.33333333%;\n  }\n  .c-sm-6 {\n    width: 50%;\n  }\n  .c-sm-5 {\n    width: 41.66666667%;\n  }\n  .c-sm-4 {\n    width: 33.33333333%;\n  }\n  .c-sm-3 {\n    width: 25%;\n  }\n  .c-sm-2 {\n    width: 16.66666667%;\n  }\n  .c-sm-1 {\n    width: 8.33333333%;\n  }\n  .c-sm-pull-12 {\n    right: 100%;\n  }\n  .c-sm-pull-11 {\n    right: 91.66666667%;\n  }\n  .c-sm-pull-10 {\n    right: 83.33333333%;\n  }\n  .c-sm-pull-9 {\n    right: 75%;\n  }\n  .c-sm-pull-8 {\n    right: 66.66666667%;\n  }\n  .c-sm-pull-7 {\n    right: 58.33333333%;\n  }\n  .c-sm-pull-6 {\n    right: 50%;\n  }\n  .c-sm-pull-5 {\n    right: 41.66666667%;\n  }\n  .c-sm-pull-4 {\n    right: 33.33333333%;\n  }\n  .c-sm-pull-3 {\n    right: 25%;\n  }\n  .c-sm-pull-2 {\n    right: 16.66666667%;\n  }\n  .c-sm-pull-1 {\n    right: 8.33333333%;\n  }\n  .c-sm-pull-0 {\n    right: auto;\n  }\n  .c-sm-push-12 {\n    left: 100%;\n  }\n  .c-sm-push-11 {\n    left: 91.66666667%;\n  }\n  .c-sm-push-10 {\n    left: 83.33333333%;\n  }\n  .c-sm-push-9 {\n    left: 75%;\n  }\n  .c-sm-push-8 {\n    left: 66.66666667%;\n  }\n  .c-sm-push-7 {\n    left: 58.33333333%;\n  }\n  .c-sm-push-6 {\n    left: 50%;\n  }\n  .c-sm-push-5 {\n    left: 41.66666667%;\n  }\n  .c-sm-push-4 {\n    left: 33.33333333%;\n  }\n  .c-sm-push-3 {\n    left: 25%;\n  }\n  .c-sm-push-2 {\n    left: 16.66666667%;\n  }\n  .c-sm-push-1 {\n    left: 8.33333333%;\n  }\n  .c-sm-push-0 {\n    left: auto;\n  }\n  .c-sm-offset-12 {\n    margin-left: 100%;\n  }\n  .c-sm-offset-11 {\n    margin-left: 91.66666667%;\n  }\n  .c-sm-offset-10 {\n    margin-left: 83.33333333%;\n  }\n  .c-sm-offset-9 {\n    margin-left: 75%;\n  }\n  .c-sm-offset-8 {\n    margin-left: 66.66666667%;\n  }\n  .c-sm-offset-7 {\n    margin-left: 58.33333333%;\n  }\n  .c-sm-offset-6 {\n    margin-left: 50%;\n  }\n  .c-sm-offset-5 {\n    margin-left: 41.66666667%;\n  }\n  .c-sm-offset-4 {\n    margin-left: 33.33333333%;\n  }\n  .c-sm-offset-3 {\n    margin-left: 25%;\n  }\n  .c-sm-offset-2 {\n    margin-left: 16.66666667%;\n  }\n  .c-sm-offset-1 {\n    margin-left: 8.33333333%;\n  }\n  .c-sm-offset-0 {\n    margin-left: 0;\n  }\n}\n@media (min-width: 992px) {\n  .c-md-1,\n  .c-md-10,\n  .c-md-11,\n  .c-md-12,\n  .c-md-2,\n  .c-md-3,\n  .c-md-4,\n  .c-md-5,\n  .c-md-6,\n  .c-md-7,\n  .c-md-8,\n  .c-md-9 {\n    float: left;\n  }\n  .c-md-12 {\n    width: 100%;\n  }\n  .c-md-11 {\n    width: 91.66666667%;\n  }\n  .c-md-10 {\n    width: 83.33333333%;\n  }\n  .c-md-9 {\n    width: 75%;\n  }\n  .c-md-8 {\n    width: 66.66666667%;\n  }\n  .c-md-7 {\n    width: 58.33333333%;\n  }\n  .c-md-6 {\n    width: 50%;\n  }\n  .c-md-5 {\n    width: 41.66666667%;\n  }\n  .c-md-4 {\n    width: 33.33333333%;\n  }\n  .c-md-3 {\n    width: 25%;\n  }\n  .c-md-2 {\n    width: 16.66666667%;\n  }\n  .c-md-1 {\n    width: 8.33333333%;\n  }\n  .c-md-pull-12 {\n    right: 100%;\n  }\n  .c-md-pull-11 {\n    right: 91.66666667%;\n  }\n  .c-md-pull-10 {\n    right: 83.33333333%;\n  }\n  .c-md-pull-9 {\n    right: 75%;\n  }\n  .c-md-pull-8 {\n    right: 66.66666667%;\n  }\n  .c-md-pull-7 {\n    right: 58.33333333%;\n  }\n  .c-md-pull-6 {\n    right: 50%;\n  }\n  .c-md-pull-5 {\n    right: 41.66666667%;\n  }\n  .c-md-pull-4 {\n    right: 33.33333333%;\n  }\n  .c-md-pull-3 {\n    right: 25%;\n  }\n  .c-md-pull-2 {\n    right: 16.66666667%;\n  }\n  .c-md-pull-1 {\n    right: 8.33333333%;\n  }\n  .c-md-pull-0 {\n    right: auto;\n  }\n  .c-md-push-12 {\n    left: 100%;\n  }\n  .c-md-push-11 {\n    left: 91.66666667%;\n  }\n  .c-md-push-10 {\n    left: 83.33333333%;\n  }\n  .c-md-push-9 {\n    left: 75%;\n  }\n  .c-md-push-8 {\n    left: 66.66666667%;\n  }\n  .c-md-push-7 {\n    left: 58.33333333%;\n  }\n  .c-md-push-6 {\n    left: 50%;\n  }\n  .c-md-push-5 {\n    left: 41.66666667%;\n  }\n  .c-md-push-4 {\n    left: 33.33333333%;\n  }\n  .c-md-push-3 {\n    left: 25%;\n  }\n  .c-md-push-2 {\n    left: 16.66666667%;\n  }\n  .c-md-push-1 {\n    left: 8.33333333%;\n  }\n  .c-md-push-0 {\n    left: auto;\n  }\n  .c-md-offset-12 {\n    margin-left: 100%;\n  }\n  .c-md-offset-11 {\n    margin-left: 91.66666667%;\n  }\n  .c-md-offset-10 {\n    margin-left: 83.33333333%;\n  }\n  .c-md-offset-9 {\n    margin-left: 75%;\n  }\n  .c-md-offset-8 {\n    margin-left: 66.66666667%;\n  }\n  .c-md-offset-7 {\n    margin-left: 58.33333333%;\n  }\n  .c-md-offset-6 {\n    margin-left: 50%;\n  }\n  .c-md-offset-5 {\n    margin-left: 41.66666667%;\n  }\n  .c-md-offset-4 {\n    margin-left: 33.33333333%;\n  }\n  .c-md-offset-3 {\n    margin-left: 25%;\n  }\n  .c-md-offset-2 {\n    margin-left: 16.66666667%;\n  }\n  .c-md-offset-1 {\n    margin-left: 8.33333333%;\n  }\n  .c-md-offset-0 {\n    margin-left: 0;\n  }\n}\n@media (min-width: 1200px) {\n  .c-lg-1,\n  .c-lg-10,\n  .c-lg-11,\n  .c-lg-12,\n  .c-lg-2,\n  .c-lg-3,\n  .c-lg-4,\n  .c-lg-5,\n  .c-lg-6,\n  .c-lg-7,\n  .c-lg-8,\n  .c-lg-9 {\n    float: left;\n  }\n  .c-lg-12 {\n    width: 100%;\n  }\n  .c-lg-11 {\n    width: 91.66666667%;\n  }\n  .c-lg-10 {\n    width: 83.33333333%;\n  }\n  .c-lg-9 {\n    width: 75%;\n  }\n  .c-lg-8 {\n    width: 66.66666667%;\n  }\n  .c-lg-7 {\n    width: 58.33333333%;\n  }\n  .c-lg-6 {\n    width: 50%;\n  }\n  .c-lg-5 {\n    width: 41.66666667%;\n  }\n  .c-lg-4 {\n    width: 33.33333333%;\n  }\n  .c-lg-3 {\n    width: 25%;\n  }\n  .c-lg-2 {\n    width: 16.66666667%;\n  }\n  .c-lg-1 {\n    width: 8.33333333%;\n  }\n  .c-lg-pull-12 {\n    right: 100%;\n  }\n  .c-lg-pull-11 {\n    right: 91.66666667%;\n  }\n  .c-lg-pull-10 {\n    right: 83.33333333%;\n  }\n  .c-lg-pull-9 {\n    right: 75%;\n  }\n  .c-lg-pull-8 {\n    right: 66.66666667%;\n  }\n  .c-lg-pull-7 {\n    right: 58.33333333%;\n  }\n  .c-lg-pull-6 {\n    right: 50%;\n  }\n  .c-lg-pull-5 {\n    right: 41.66666667%;\n  }\n  .c-lg-pull-4 {\n    right: 33.33333333%;\n  }\n  .c-lg-pull-3 {\n    right: 25%;\n  }\n  .c-lg-pull-2 {\n    right: 16.66666667%;\n  }\n  .c-lg-pull-1 {\n    right: 8.33333333%;\n  }\n  .c-lg-pull-0 {\n    right: auto;\n  }\n  .c-lg-push-12 {\n    left: 100%;\n  }\n  .c-lg-push-11 {\n    left: 91.66666667%;\n  }\n  .c-lg-push-10 {\n    left: 83.33333333%;\n  }\n  .c-lg-push-9 {\n    left: 75%;\n  }\n  .c-lg-push-8 {\n    left: 66.66666667%;\n  }\n  .c-lg-push-7 {\n    left: 58.33333333%;\n  }\n  .c-lg-push-6 {\n    left: 50%;\n  }\n  .c-lg-push-5 {\n    left: 41.66666667%;\n  }\n  .c-lg-push-4 {\n    left: 33.33333333%;\n  }\n  .c-lg-push-3 {\n    left: 25%;\n  }\n  .c-lg-push-2 {\n    left: 16.66666667%;\n  }\n  .c-lg-push-1 {\n    left: 8.33333333%;\n  }\n  .c-lg-push-0 {\n    left: auto;\n  }\n  .c-lg-offset-12 {\n    margin-left: 100%;\n  }\n  .c-lg-offset-11 {\n    margin-left: 91.66666667%;\n  }\n  .c-lg-offset-10 {\n    margin-left: 83.33333333%;\n  }\n  .c-lg-offset-9 {\n    margin-left: 75%;\n  }\n  .c-lg-offset-8 {\n    margin-left: 66.66666667%;\n  }\n  .c-lg-offset-7 {\n    margin-left: 58.33333333%;\n  }\n  .c-lg-offset-6 {\n    margin-left: 50%;\n  }\n  .c-lg-offset-5 {\n    margin-left: 41.66666667%;\n  }\n  .c-lg-offset-4 {\n    margin-left: 33.33333333%;\n  }\n  .c-lg-offset-3 {\n    margin-left: 25%;\n  }\n  .c-lg-offset-2 {\n    margin-left: 16.66666667%;\n  }\n  .c-lg-offset-1 {\n    margin-left: 8.33333333%;\n  }\n  .c-lg-offset-0 {\n    margin-left: 0;\n  }\n}\n.clearfix:after,\n.clearfix:before,\n.container-fluid:after,\n.container-fluid:before,\n.container:after,\n.container:before,\n.row:after,\n.row:before {\n  content: \" \";\n  display: table;\n}\n.clearfix:after,\n.container-fluid:after,\n.container:after,\n.row:after {\n  clear: both;\n}\n/* ===============================header colors=======================*/\n.table-format-first .table-responsive table th,\n.table-format-first .table-responsive table td {\n  text-align: center;\n  padding: 10px 5px;\n}\n.table-format-first .table-responsive table th {\n  text-transform: capitalize;\n  font-size: 14px;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper {\n  display: inline-block;\n  overflow: initial;\n  margin-left: 0;\n  width: auto;\n  position: relative;\n  background: transparent;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox {\n  z-index: 2;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label {\n  font-size: 16px;\n  margin-left: 7px;\n  font-weight: 600;\n  vertical-align: middle;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:after, .table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:before {\n  z-index: 1;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper:after {\n  content: '';\n  width: 20px;\n  height: 20px;\n  background: #fff;\n  left: 0;\n  top: 0;\n  position: absolute;\n}\n.table-format-first .table-responsive table tbody tr td .fa-trash-o {\n  color: #f44336;\n  font-size: 20px;\n}\n.table-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-top: 10px;\n}\n.table-container .heading-container {\n  background: #e0eaec;\n  display: flex;\n  flex-direction: row;\n  font-size: 14px;\n  font-weight: 600;\n  text-align: left;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n}\n.table-container .heading-container .heading-item {\n  width: 10%;\n  text-align: center;\n}\n.table-container .value-outer-container {\n  display: flex;\n  flex-direction: column;\n  min-height: 53vh;\n  max-height: 54vh;\n  overflow-x: hidden;\n  overflow-y: auto;\n  border: 1px solid #ccc;\n}\n.table-container .value-outer-container .value-container {\n  display: flex;\n  flex-direction: row;\n  text-align: left;\n  padding: 4px;\n  font-size: 12px;\n  border-bottom: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n  border-top: none;\n}\n.table-container .value-outer-container .value-container .value-item {\n  width: 10%;\n  text-align: center;\n}\n/* ===============================header colors=======================*/\n.table-format-first .table-responsive table th,\n.table-format-first .table-responsive table td {\n  text-align: center;\n  padding: 10px 5px;\n}\n.table-format-first .table-responsive table th {\n  text-transform: capitalize;\n  font-size: 14px;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper {\n  display: inline-block;\n  overflow: initial;\n  margin-left: 0;\n  width: auto;\n  position: relative;\n  background: transparent;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox {\n  z-index: 2;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label {\n  font-size: 16px;\n  margin-left: 7px;\n  font-weight: 600;\n  vertical-align: middle;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:after, .table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:before {\n  z-index: 1;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper:after {\n  content: '';\n  width: 20px;\n  height: 20px;\n  background: #fff;\n  left: 0;\n  top: 0;\n  position: absolute;\n}\n.table-format-first .table-responsive table tbody tr td .fa-trash-o {\n  color: #f44336;\n  font-size: 20px;\n}\n.table-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-top: 10px;\n}\n.table-container .heading-container {\n  background: #e0eaec;\n  display: flex;\n  flex-direction: row;\n  font-size: 14px;\n  font-weight: 600;\n  text-align: left;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n}\n.table-container .heading-container .heading-item {\n  width: 10%;\n  text-align: center;\n}\n.table-container .value-outer-container {\n  display: flex;\n  flex-direction: column;\n  min-height: 53vh;\n  max-height: 54vh;\n  overflow-x: hidden;\n  overflow-y: auto;\n  border: 1px solid #ccc;\n}\n.table-container .value-outer-container .value-container {\n  display: flex;\n  flex-direction: row;\n  text-align: left;\n  padding: 4px;\n  font-size: 12px;\n  border-bottom: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n  border-top: none;\n}\n.table-container .value-outer-container .value-container .value-item {\n  width: 10%;\n  text-align: center;\n}\n/** these css for gear icon download options\n* created by laxmi\n*/\nsvg:hover #gearIcon {\n  fill: #0084f6;\n}\n.asHover:hover {\n  color: #0084f6 !important;\n}\n.download:hover {\n  cursor: pointer;\n}\n.made-in {\n  font-size: 17px;\n  font-weight: bold;\n  text-align: left;\n}\n.dropdown > ul {\n  background: #fff;\n  padding: 10px 20px;\n  border: 1px solid #eaeaeb;\n  border-top: 0;\n  margin-top: 3px;\n  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 6px 10px 0 rgba(0, 0, 0, 0.12);\n}\n.dropdown > ul li {\n  color: #333;\n}\n.dropdown > ul li strong {\n  font-weight: 600;\n  display: block;\n}\n.dropdown > ul li a {\n  display: block;\n  color: #333;\n}\n.login-tube nav > ul > li {\n  display: inline-block;\n  position: relative;\n}\n.login-tube nav > ul > li > a {\n  color: #333;\n  text-decoration: none;\n  padding: 5px 10px;\n  display: block;\n  transition: all .4s;\n}\n.login-tube nav > ul > li > a:hover,\n.login-tube nav > ul > li:hover > a {\n  text-decoration: none;\n  background: #ccc;\n}\n.login-tube nav > ul > li .dropdown {\n  position: absolute;\n  visibility: hidden;\n  right: 0;\n  top: 100%;\n  min-width: 200px;\n  border-top: 0;\n  opacity: 0;\n  transition: all 0.1s cubic-bezier(0.55, 0, 0.55, 0.2);\n  transition-duration: .2s;\n  transform: scale(0.5);\n}\n.login-tube nav > ul > li .dropdown > ul li {\n  line-height: normal;\n}\n.login-tube nav > ul > li .dropdown > ul li a {\n  display: block;\n  margin: 5px 0;\n}\n.login-tube nav > ul > li .dropdown > ul li a:hover {\n  color: #0084f6;\n}\n.login-tube nav > ul > li .dropdown > ul ul {\n  padding-left: 15px;\n  padding-top: 10px;\n}\n.login-tube nav > ul > li .dropdown > ul ul ul {\n  padding-top: 0;\n}\n.login-tube nav > ul > li:hover .dropdown {\n  visibility: visible;\n  position: absolute;\n  opacity: 1;\n  right: 0;\n  top: 100%;\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition-duration: .5s;\n  transform: scale(1);\n}\n.span-button {\n  border: 1px solid #0084f6;\n  padding: 4px 8px;\n  color: #0084f6;\n  font-size: .9em;\n  border-radius: 2px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.span-button svg {\n  margin: -3px 0;\n  height: 14px;\n}\nlogin-nav > li {\n  display: inline-block;\n  padding: 0 7px;\n  cursor: pointer;\n  vertical-align: text-bottom;\n}\nlogin-nav > li .dropdown {\n  position: absolute;\n  right: 0;\n  top: 100%;\n  padding-top: 10px;\n}\nlogin-nav > li .icons {\n  width: 35px;\n  height: 35px;\n  display: block;\n  text-align: center;\n  box-sizing: border-box;\n  border-radius: 50%;\n  padding-top: 3px;\n  transition: all 0.1s;\n  border: 1px solid transparent;\n}\nlogin-nav > li .icons svg {\n  width: 25px;\n  color: #034979;\n}\nlogin-nav > li .icons svg .cls-1 {\n  stroke: #034979;\n  stroke-linejoin: unset;\n  border: none;\n}\nlogin-nav > li .user-info {\n  white-space: nowrap;\n  margin-right: 40px;\n  width: auto;\n  display: block;\n  position: relative;\n}\nlogin-nav > li .user-info > .icons {\n  display: inline-block;\n  vertical-align: middle;\n}\nlogin-nav > li .user-info > span {\n  vertical-align: middle;\n  display: inline-block;\n}\nlogin-nav > li .user-info:after {\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  content: \"\\f107\";\n  font-size: 17px;\n  position: absolute;\n  right: -20px;\n  top: 10px;\n}\n/**\n  this css is for report section css for cards\n  added by laxmi\n*/\n.report-box {\n  width: 100%;\n  height: 100%;\n  padding: 10px;\n}\n.report-box ul.card-box li.card-row {\n  margin: 10px 0px;\n}\n.report-box ul.card {\n  padding: 15px 10px;\n  border: 1px solid #efefef;\n  background: #fff;\n  height: 120px;\n  border-radius: 4px;\n  cursor: pointer;\n  text-align: left;\n  margin: 10px 0px;\n  box-shadow: 0px 0px 2px 0px;\n}\n.report-box ul.card li {\n  padding: 5px;\n}\n.report-box ul.card li:first-child {\n  font-size: 14px;\n  font-weight: 600;\n  padding: 10px 5px;\n}\n.report-box ul.card li:nth-child(2n) {\n  font-size: 12px;\n}\n.disabled {\n  cursor: not-allowed;\n  background: lightgrey;\n}\n/* ===============================header colors=======================*/\n.table-format-first .table-responsive table th,\n.table-format-first .table-responsive table td {\n  text-align: center;\n  padding: 10px 5px;\n}\n.table-format-first .table-responsive table th {\n  text-transform: capitalize;\n  font-size: 14px;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper {\n  display: inline-block;\n  overflow: initial;\n  margin-left: 0;\n  width: auto;\n  position: relative;\n  background: transparent;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox {\n  z-index: 2;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label {\n  font-size: 16px;\n  margin-left: 7px;\n  font-weight: 600;\n  vertical-align: middle;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:after, .table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:before {\n  z-index: 1;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper:after {\n  content: '';\n  width: 20px;\n  height: 20px;\n  background: #fff;\n  left: 0;\n  top: 0;\n  position: absolute;\n}\n.table-format-first .table-responsive table tbody tr td .fa-trash-o {\n  color: #f44336;\n  font-size: 20px;\n}\n.table-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-top: 10px;\n}\n.table-container .heading-container {\n  background: #e0eaec;\n  display: flex;\n  flex-direction: row;\n  font-size: 14px;\n  font-weight: 600;\n  text-align: left;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n}\n.table-container .heading-container .heading-item {\n  width: 10%;\n  text-align: center;\n}\n.table-container .value-outer-container {\n  display: flex;\n  flex-direction: column;\n  min-height: 53vh;\n  max-height: 54vh;\n  overflow-x: hidden;\n  overflow-y: auto;\n  border: 1px solid #ccc;\n}\n.table-container .value-outer-container .value-container {\n  display: flex;\n  flex-direction: row;\n  text-align: left;\n  padding: 4px;\n  font-size: 12px;\n  border-bottom: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n  border-top: none;\n}\n.table-container .value-outer-container .value-container .value-item {\n  width: 10%;\n  text-align: center;\n}\n/* Import Font CSS*/\n/* @font-face {\n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: 700;\n    src: local('Open Sans Bold'), local('OpenSans-Bold'), url(https://themes.googleusercontent.com/static/fonts/opensans/v6/k3k702ZOKiLJc3WVjuplzHhCUOGz7vYGh680lGh-uXM.woff) format('woff');\n}\n\n@font-face {\n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: 300;\n    src: local('Open Sans Light'), local('OpenSans-Light'), url(https://themes.googleusercontent.com/static/fonts/opensans/v6/DXI1ORHCpsQm3Vp6mXoaTXhCUOGz7vYGh680lGh-uXM.woff) format('woff');\n}\n\n@font-face {\n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: 600;\n    src: local('Open Sans Semibold'), local('OpenSans-Semibold'), url(https://themes.googleusercontent.com/static/fonts/opensans/v6/MTP_ySUJH_bn48VBG8sNSnhCUOGz7vYGh680lGh-uXM.woff) format('woff');\n}\n\n@font-face {\n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: 400;\n    src: local('Open Sans'), local('OpenSans'), url(https://themes.googleusercontent.com/static/fonts/opensans/v6/cJZKeOuBrn4kERxqtaUH3T8E0i7KZn-EPnyo3HZu7kw.woff) format('woff');\n} */\n/*/ import reset css*/\n* {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  -webkit-font-smoothing: antialiased;\n  outline: none;\n}\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  border: 0;\n  font: inherit;\n  vertical-align: baseline;\n  margin: 0;\n  padding: 0;\n}\ninput,\nimg,\nselect,\ntextarea,\nbutton {\n  outline: none;\n}\nul,\nol {\n  list-style-type: none;\n  padding-left: 0;\n  margin-top: 0;\n}\nhtml {\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n}\nbody {\n  font-size: 14px;\n  line-height: 1.2;\n  letter-spacing: normal;\n  word-spacing: normal;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-weight: 400;\n}\ninput {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\nimg {\n  max-width: 100%;\n  height: auto;\n}\n/*/ import themes css*/\n/* import commom css*/\n/* ===============================header colors=======================*/\n.table-format-first .table-responsive table th,\n.table-format-first .table-responsive table td {\n  text-align: center;\n  padding: 10px 5px;\n}\n.table-format-first .table-responsive table th {\n  text-transform: capitalize;\n  font-size: 14px;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper {\n  display: inline-block;\n  overflow: initial;\n  margin-left: 0;\n  width: auto;\n  position: relative;\n  background: transparent;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox {\n  z-index: 2;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label {\n  font-size: 16px;\n  margin-left: 7px;\n  font-weight: 600;\n  vertical-align: middle;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:after, .table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:before {\n  z-index: 1;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper:after {\n  content: '';\n  width: 20px;\n  height: 20px;\n  background: #fff;\n  left: 0;\n  top: 0;\n  position: absolute;\n}\n.table-format-first .table-responsive table tbody tr td .fa-trash-o {\n  color: #f44336;\n  font-size: 20px;\n}\n.table-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-top: 10px;\n}\n.table-container .heading-container {\n  background: #e0eaec;\n  display: flex;\n  flex-direction: row;\n  font-size: 14px;\n  font-weight: 600;\n  text-align: left;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n}\n.table-container .heading-container .heading-item {\n  width: 10%;\n  text-align: center;\n}\n.table-container .value-outer-container {\n  display: flex;\n  flex-direction: column;\n  min-height: 53vh;\n  max-height: 54vh;\n  overflow-x: hidden;\n  overflow-y: auto;\n  border: 1px solid #ccc;\n}\n.table-container .value-outer-container .value-container {\n  display: flex;\n  flex-direction: row;\n  text-align: left;\n  padding: 4px;\n  font-size: 12px;\n  border-bottom: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n  border-top: none;\n}\n.table-container .value-outer-container .value-container .value-item {\n  width: 10%;\n  text-align: center;\n}\n/* Scrollbar thickness changed here for vertical display */\n::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #F5F5F5;\n  border-radius: 10px;\n}\n::-webkit-scrollbar {\n  width: 10px;\n  background-color: #F5F5F5;\n  height: 10px;\n}\n::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background-image: -webkit-gradient(linear, left bottom, left top, color-stop(0.44, #7a99d9), color-stop(0.72, #497dbd), color-stop(0.86, #1c3a94));\n}\n.footer-section {\n  position: absolute;\n  bottom: 0;\n  z-index: 1000;\n  background: #fff;\n  width: 100%;\n  height: 24px;\n}\n.footer-section ul {\n  list-style: none;\n}\n.footer-section ul.footer-list li {\n  display: inline-block;\n  margin: 5px 20px 0;\n}\n.footer-section ul.footer-list li i {\n  font-family: FontAwesome;\n}\n.footer-section a {\n  color: #0084f6;\n}\n/* Track */\n.danger {\n  color: #ff0000 !important;\n}\n.btn.active,\n.btn:active {\n  background-image: none;\n  outline: 0;\n  box-shadow: none;\n  border-radius: 4px;\n}\ninput[type=\"button\"],\ninput[type=\"submit\"],\ninput[type=\"reset\"],\ninput[type=\"file\"]::-webkit-file-upload-button,\nbutton {\n  border-radius: 4px;\n}\n:host ::ng-deep .tooltip-arrow {\n  display: none;\n}\n::ng-deep .tooltip-arrow {\n  display: none;\n}\n:host ::ng-deep .tooltip-left {\n  top: 0 !important;\n  min-width: 300px;\n}\n::ng-deep .tooltip-left {\n  top: 0;\n}\n:host ::ng-deep .tooltip-right {\n  top: calc(10% - 2.5px);\n  left: calc(10% - 2.5px);\n}\n::ng-deep .tooltip-right {\n  top: calc(10% - 2.5px);\n  left: calc(10% - 2.5px);\n}\n:host ::ng-deep .tooltip-top {\n  top: calc(10% - 2.5px);\n  left: calc(10% - 2.5px);\n}\n::ng-deep .tooltip-top {\n  top: calc(10% - 2.5px);\n  left: calc(10% - 2.5px);\n}\n:host ::ng-deep .bs-datepicker .bs-datepicker-container {\n  padding: 10px;\n}\n.bs-calendar-container div:nth-child(1) {\n  display: flex;\n}\n.bs-datepicker-head {\n  display: block !important;\n}\n:host ::ng-deep .bs-days-calendar-view .bs-datepicker-head {\n  color: white;\n  border-top: 1px solid white;\n  border-left: 1px solid white;\n  border-right: 1px solid white;\n  min-width: 300px !important;\n  font-weight: 800;\n}\n:host ::ng-deep .bs-days-calendar-view .bs-datepicker-body {\n  padding: 5px;\n}\n::ng-deep .bs-datepicker-head {\n  color: white;\n  border-top: 1px solid white;\n  border-left: 1px solid white;\n  border-right: 1px solid white;\n  min-width: 300px !important;\n  font-weight: 800;\n}\n::ng-deep .bs-datepicker-body {\n  padding: 0;\n  border: 1px solid rgba(119, 119, 119, 0.28);\n}\n::ng-deep .bs-datepicker-body table tbody tr td {\n  padding: 0;\n  border-top: 1px solid rgba(211, 212, 213, 0.5);\n  border-bottom: 1px solid rgba(211, 212, 213, 0.5);\n}\n:host ::ng-deep .bs-datepicker-body table tbody tr td {\n  padding: 0;\n  border-top: 1px solid rgba(211, 212, 213, 0.5);\n  border-bottom: 1px solid rgba(211, 212, 213, 0.5);\n}\n::ng-deep .bs-datepicker-body table thead tr th {\n  font-size: 14px;\n  color: black;\n  font-weight: 600;\n  text-align: center;\n}\n:host ::ng-deep .bs-datepicker-body table thead tr th {\n  font-size: 14px;\n  color: black;\n  font-weight: 600;\n  text-align: center;\n}\n.cursor-icon {\n  cursor: pointer;\n}\n.table-responsive {\n  max-width: 100%;\n}\n.table-responsive ::-webkit-scrollbar {\n  display: block;\n}\n.courses-list-table {\n  max-height: 400px;\n  overflow: auto;\n  padding: 10px;\n  margin-top: 10px;\n  box-shadow: 0 2px 5px 0 rgba(38, 0, 0, 0.2);\n}\n.courses-list-table ::-webkit-scrollbar {\n  display: block;\n}\ntextarea {\n  resize: none;\n}\n.filter-fields .field-wrapper.has-value .form-ctrl + label,\n.filter-fields .field-wrapper .form-ctrl:focus + label {\n  top: 0;\n}\n.time-picker .field-wrapper {\n  display: inline-block;\n  margin: 5px 10px 0 0;\n}\n.time-picker .field-wrapper .form-ctrl {\n  width: 70px;\n  z-index: 10;\n}\n.time-picker .field-wrapper label {\n  font-size: 12px;\n  z-index: 1;\n}\n.multiselect-wrapper {\n  padding: 5px;\n  border: 1px solid #deeaee;\n  position: absolute;\n  z-index: 100;\n  background: white;\n  min-width: 400px;\n  min-height: 50px;\n  top: 65px;\n}\n.multiselect-wrapper .multiselect-wrapper-inner {\n  padding: 10px;\n}\n.multiselect-wrapper .multiselect-wrapper-inner ul li {\n  height: 40px;\n  padding: 10px 0 0 5px;\n}\ninput[type=\"text\"][disabled] {\n  background: transparent !important;\n}\n.report-wrapper {\n  background: #efefef;\n  height: 110vh;\n  width: 100%;\n  padding: 5px;\n}\n.report-wrapper .report-header {\n  background: #fff;\n  padding: 5px;\n}\n.chipped {\n  color: white !important;\n  font-size: 14px;\n  background: #0084f6;\n  cursor: pointer;\n  border: 2px solid white;\n  border-radius: 32px;\n  display: inline-block;\n  margin: 0 !important;\n  font-weight: 400;\n  padding: .1rem .8rem;\n  outline: none;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  overflow: hidden;\n  position: relative;\n  transition: all 0.24s cubic-bezier(0.4, 0, 0.2, 1);\n  will-change: padding;\n}\n.chipped i {\n  color: #99D154;\n  position: absolute;\n  top: 6px;\n  margin-left: 1rem;\n  font-size: 48px;\n  transition: all 0.24s cubic-bezier(0.4, 0, 0.2, 1);\n  opacity: 0;\n  transform: translateX(1rem);\n  will-change: opacity, transform;\n}\n.chipped.small {\n  color: white !important;\n  font-size: 12px !important;\n  background: #0084f6;\n  cursor: pointer;\n  border: 2px solid white;\n  border-radius: 32px;\n  display: inline-block;\n  margin: 0 !important;\n  font-weight: 400;\n  padding: .2rem .5rem;\n}\n.chipped.intable {\n  color: rgba(30, 35, 40, 0.7) !important;\n  font-size: 12px !important;\n  background: transparent;\n  cursor: pointer;\n  border: 1px solid #64676b;\n  border-radius: 5px;\n  display: inline-block;\n  margin: 0 2px 0 0 !important;\n  font-weight: 400;\n  padding: .2rem;\n}\n.chipped.active {\n  background-color: #fff;\n  color: #333333;\n  padding-right: 4.5rem;\n}\n.chipped.active i {\n  opacity: 1;\n  transform: translateX(0);\n}\n/* ================================================================================================= */\n/* ================================================================================================= */\n/* ================================================================================================= */\n/* ================================================================================================= */\n/* ================================================================================================= */\n/* ================================================================================================= */\n.fbold {\n  font-weight: 700;\n}\n.sbold {\n  font-weight: 600;\n}\n.fnormal {\n  font-weight: 300;\n}\n.rupee {\n  font-family: 'WebRupee';\n}\n.line-height {\n  line-height: 1.2;\n}\n.link,\na {\n  text-decoration: none;\n  color: #0084f6;\n}\n.link:hover,\na:hover {\n  text-decoration: none;\n}\n.small,\n.small *,\np {\n  font-size: 12px;\n}\n.xsmall,\n.xsmall * {\n  font-size: 10px;\n  line-height: 14px;\n}\nh1 {\n  font-size: 14px;\n  font-weight: 700;\n  line-height: 1.2;\n}\nh2 {\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1.2;\n}\nh3 {\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1.2;\n}\n.container {\n  box-sizing: border-box;\n  margin: 0 auto;\n}\n.clearFix:after,\n.container:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.common-width {\n  width: 100%;\n  box-sizing: border-box;\n  vertical-align: top;\n  display: inline-block;\n}\n.pull-left {\n  float: left;\n}\n.pull-right {\n  float: right;\n}\n.mR10 {\n  margin-right: 10px;\n}\n.pos-rel {\n  position: relative;\n}\n.pos-abs {\n  position: absolute;\n}\n.hide {\n  display: none !important;\n}\n.show {\n  display: block !important;\n}\n.display-b {\n  display: block;\n}\n.display-ib {\n  display: inline-block;\n}\n.align-right {\n  text-align: right;\n}\n.align-left {\n  text-align: left;\n}\n.v-middle {\n  vertical-align: middle;\n}\n.radius-4 {\n  border-radius: 4px;\n}\n.overflowHidden {\n  overflow: hidden;\n}\n/*===============================call grid view css====================*/\n.container,\n.container-fluid {\n  margin-right: auto;\n  margin-left: auto;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n@media (min-width: 768px) {\n  .container {\n    width: 750px;\n  }\n}\n@media (min-width: 992px) {\n  .container {\n    width: 970px;\n  }\n}\n@media (min-width: 1200px) {\n  .container {\n    width: 1170px;\n  }\n}\n.row {\n  margin-left: -15px;\n  margin-right: -15px;\n}\n.c-lg-1,\n.c-lg-10,\n.c-lg-11,\n.c-lg-12,\n.c-lg-2,\n.c-lg-3,\n.c-lg-4,\n.c-lg-5,\n.c-lg-6,\n.c-lg-7,\n.c-lg-8,\n.c-lg-9,\n.c-md-1,\n.c-md-10,\n.c-md-11,\n.c-md-12,\n.c-md-2,\n.c-md-3,\n.c-md-4,\n.c-md-5,\n.c-md-6,\n.c-md-7,\n.c-md-8,\n.c-md-9,\n.c-sm-1,\n.c-sm-10,\n.c-sm-11,\n.c-sm-12,\n.c-sm-2,\n.c-sm-3,\n.c-sm-4,\n.c-sm-5,\n.c-sm-6,\n.c-sm-7,\n.c-sm-8,\n.c-sm-9,\n.c-xs-1,\n.c-xs-10,\n.c-xs-11,\n.c-xs-12,\n.c-xs-2,\n.c-xs-3,\n.c-xs-4,\n.c-xs-5,\n.c-xs-6,\n.c-xs-7,\n.c-xs-8,\n.c-xs-9 {\n  box-sizing: border-box;\n  position: relative;\n  min-height: 1px;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n.c-xs-1,\n.c-xs-10,\n.c-xs-11,\n.c-xs-12,\n.c-xs-2,\n.c-xs-3,\n.c-xs-4,\n.c-xs-5,\n.c-xs-6,\n.c-xs-7,\n.c-xs-8,\n.c-xs-9 {\n  float: left;\n}\n.c-xs-12 {\n  width: 100%;\n}\n.c-xs-11 {\n  width: 91.66666667%;\n}\n.c-xs-10 {\n  width: 83.33333333%;\n}\n.c-xs-9 {\n  width: 75%;\n}\n.c-xs-8 {\n  width: 66.66666667%;\n}\n.c-xs-7 {\n  width: 58.33333333%;\n}\n.c-xs-6 {\n  width: 50%;\n}\n.c-xs-5 {\n  width: 41.66666667%;\n}\n.c-xs-4 {\n  width: 33.33333333%;\n}\n.c-xs-3 {\n  width: 25%;\n}\n.c-xs-2 {\n  width: 16.66666667%;\n}\n.c-xs-1 {\n  width: 8.33333333%;\n}\n.c-xs-pull-12 {\n  right: 100%;\n}\n.c-xs-pull-11 {\n  right: 91.66666667%;\n}\n.c-xs-pull-10 {\n  right: 83.33333333%;\n}\n.c-xs-pull-9 {\n  right: 75%;\n}\n.c-xs-pull-8 {\n  right: 66.66666667%;\n}\n.c-xs-pull-7 {\n  right: 58.33333333%;\n}\n.c-xs-pull-6 {\n  right: 50%;\n}\n.c-xs-pull-5 {\n  right: 41.66666667%;\n}\n.c-xs-pull-4 {\n  right: 33.33333333%;\n}\n.c-xs-pull-3 {\n  right: 25%;\n}\n.c-xs-pull-2 {\n  right: 16.66666667%;\n}\n.c-xs-pull-1 {\n  right: 8.33333333%;\n}\n.c-xs-pull-0 {\n  right: auto;\n}\n.c-xs-push-12 {\n  left: 100%;\n}\n.c-xs-push-11 {\n  left: 91.66666667%;\n}\n.c-xs-push-10 {\n  left: 83.33333333%;\n}\n.c-xs-push-9 {\n  left: 75%;\n}\n.c-xs-push-8 {\n  left: 66.66666667%;\n}\n.c-xs-push-7 {\n  left: 58.33333333%;\n}\n.c-xs-push-6 {\n  left: 50%;\n}\n.c-xs-push-5 {\n  left: 41.66666667%;\n}\n.c-xs-push-4 {\n  left: 33.33333333%;\n}\n.c-xs-push-3 {\n  left: 25%;\n}\n.c-xs-push-2 {\n  left: 16.66666667%;\n}\n.c-xs-push-1 {\n  left: 8.33333333%;\n}\n.c-xs-push-0 {\n  left: auto;\n}\n.c-xs-offset-12 {\n  margin-left: 100%;\n}\n.c-xs-offset-11 {\n  margin-left: 91.66666667%;\n}\n.c-xs-offset-10 {\n  margin-left: 83.33333333%;\n}\n.c-xs-offset-9 {\n  margin-left: 75%;\n}\n.c-xs-offset-8 {\n  margin-left: 66.66666667%;\n}\n.c-xs-offset-7 {\n  margin-left: 58.33333333%;\n}\n.c-xs-offset-6 {\n  margin-left: 50%;\n}\n.c-xs-offset-5 {\n  margin-left: 41.66666667%;\n}\n.c-xs-offset-4 {\n  margin-left: 33.33333333%;\n}\n.c-xs-offset-3 {\n  margin-left: 25%;\n}\n.c-xs-offset-2 {\n  margin-left: 16.66666667%;\n}\n.c-xs-offset-1 {\n  margin-left: 8.33333333%;\n}\n.c-xs-offset-0 {\n  margin-left: 0;\n}\n@media (min-width: 768px) {\n  .c-sm-1,\n  .c-sm-10,\n  .c-sm-11,\n  .c-sm-12,\n  .c-sm-2,\n  .c-sm-3,\n  .c-sm-4,\n  .c-sm-5,\n  .c-sm-6,\n  .c-sm-7,\n  .c-sm-8,\n  .c-sm-9 {\n    float: left;\n  }\n  .c-sm-12 {\n    width: 100%;\n  }\n  .c-sm-11 {\n    width: 91.66666667%;\n  }\n  .c-sm-10 {\n    width: 83.33333333%;\n  }\n  .c-sm-9 {\n    width: 75%;\n  }\n  .c-sm-8 {\n    width: 66.66666667%;\n  }\n  .c-sm-7 {\n    width: 58.33333333%;\n  }\n  .c-sm-6 {\n    width: 50%;\n  }\n  .c-sm-5 {\n    width: 41.66666667%;\n  }\n  .c-sm-4 {\n    width: 33.33333333%;\n  }\n  .c-sm-3 {\n    width: 25%;\n  }\n  .c-sm-2 {\n    width: 16.66666667%;\n  }\n  .c-sm-1 {\n    width: 8.33333333%;\n  }\n  .c-sm-pull-12 {\n    right: 100%;\n  }\n  .c-sm-pull-11 {\n    right: 91.66666667%;\n  }\n  .c-sm-pull-10 {\n    right: 83.33333333%;\n  }\n  .c-sm-pull-9 {\n    right: 75%;\n  }\n  .c-sm-pull-8 {\n    right: 66.66666667%;\n  }\n  .c-sm-pull-7 {\n    right: 58.33333333%;\n  }\n  .c-sm-pull-6 {\n    right: 50%;\n  }\n  .c-sm-pull-5 {\n    right: 41.66666667%;\n  }\n  .c-sm-pull-4 {\n    right: 33.33333333%;\n  }\n  .c-sm-pull-3 {\n    right: 25%;\n  }\n  .c-sm-pull-2 {\n    right: 16.66666667%;\n  }\n  .c-sm-pull-1 {\n    right: 8.33333333%;\n  }\n  .c-sm-pull-0 {\n    right: auto;\n  }\n  .c-sm-push-12 {\n    left: 100%;\n  }\n  .c-sm-push-11 {\n    left: 91.66666667%;\n  }\n  .c-sm-push-10 {\n    left: 83.33333333%;\n  }\n  .c-sm-push-9 {\n    left: 75%;\n  }\n  .c-sm-push-8 {\n    left: 66.66666667%;\n  }\n  .c-sm-push-7 {\n    left: 58.33333333%;\n  }\n  .c-sm-push-6 {\n    left: 50%;\n  }\n  .c-sm-push-5 {\n    left: 41.66666667%;\n  }\n  .c-sm-push-4 {\n    left: 33.33333333%;\n  }\n  .c-sm-push-3 {\n    left: 25%;\n  }\n  .c-sm-push-2 {\n    left: 16.66666667%;\n  }\n  .c-sm-push-1 {\n    left: 8.33333333%;\n  }\n  .c-sm-push-0 {\n    left: auto;\n  }\n  .c-sm-offset-12 {\n    margin-left: 100%;\n  }\n  .c-sm-offset-11 {\n    margin-left: 91.66666667%;\n  }\n  .c-sm-offset-10 {\n    margin-left: 83.33333333%;\n  }\n  .c-sm-offset-9 {\n    margin-left: 75%;\n  }\n  .c-sm-offset-8 {\n    margin-left: 66.66666667%;\n  }\n  .c-sm-offset-7 {\n    margin-left: 58.33333333%;\n  }\n  .c-sm-offset-6 {\n    margin-left: 50%;\n  }\n  .c-sm-offset-5 {\n    margin-left: 41.66666667%;\n  }\n  .c-sm-offset-4 {\n    margin-left: 33.33333333%;\n  }\n  .c-sm-offset-3 {\n    margin-left: 25%;\n  }\n  .c-sm-offset-2 {\n    margin-left: 16.66666667%;\n  }\n  .c-sm-offset-1 {\n    margin-left: 8.33333333%;\n  }\n  .c-sm-offset-0 {\n    margin-left: 0;\n  }\n}\n@media (min-width: 992px) {\n  .c-md-1,\n  .c-md-10,\n  .c-md-11,\n  .c-md-12,\n  .c-md-2,\n  .c-md-3,\n  .c-md-4,\n  .c-md-5,\n  .c-md-6,\n  .c-md-7,\n  .c-md-8,\n  .c-md-9 {\n    float: left;\n  }\n  .c-md-12 {\n    width: 100%;\n  }\n  .c-md-11 {\n    width: 91.66666667%;\n  }\n  .c-md-10 {\n    width: 83.33333333%;\n  }\n  .c-md-9 {\n    width: 75%;\n  }\n  .c-md-8 {\n    width: 66.66666667%;\n  }\n  .c-md-7 {\n    width: 58.33333333%;\n  }\n  .c-md-6 {\n    width: 50%;\n  }\n  .c-md-5 {\n    width: 41.66666667%;\n  }\n  .c-md-4 {\n    width: 33.33333333%;\n  }\n  .c-md-3 {\n    width: 25%;\n  }\n  .c-md-2 {\n    width: 16.66666667%;\n  }\n  .c-md-1 {\n    width: 8.33333333%;\n  }\n  .c-md-pull-12 {\n    right: 100%;\n  }\n  .c-md-pull-11 {\n    right: 91.66666667%;\n  }\n  .c-md-pull-10 {\n    right: 83.33333333%;\n  }\n  .c-md-pull-9 {\n    right: 75%;\n  }\n  .c-md-pull-8 {\n    right: 66.66666667%;\n  }\n  .c-md-pull-7 {\n    right: 58.33333333%;\n  }\n  .c-md-pull-6 {\n    right: 50%;\n  }\n  .c-md-pull-5 {\n    right: 41.66666667%;\n  }\n  .c-md-pull-4 {\n    right: 33.33333333%;\n  }\n  .c-md-pull-3 {\n    right: 25%;\n  }\n  .c-md-pull-2 {\n    right: 16.66666667%;\n  }\n  .c-md-pull-1 {\n    right: 8.33333333%;\n  }\n  .c-md-pull-0 {\n    right: auto;\n  }\n  .c-md-push-12 {\n    left: 100%;\n  }\n  .c-md-push-11 {\n    left: 91.66666667%;\n  }\n  .c-md-push-10 {\n    left: 83.33333333%;\n  }\n  .c-md-push-9 {\n    left: 75%;\n  }\n  .c-md-push-8 {\n    left: 66.66666667%;\n  }\n  .c-md-push-7 {\n    left: 58.33333333%;\n  }\n  .c-md-push-6 {\n    left: 50%;\n  }\n  .c-md-push-5 {\n    left: 41.66666667%;\n  }\n  .c-md-push-4 {\n    left: 33.33333333%;\n  }\n  .c-md-push-3 {\n    left: 25%;\n  }\n  .c-md-push-2 {\n    left: 16.66666667%;\n  }\n  .c-md-push-1 {\n    left: 8.33333333%;\n  }\n  .c-md-push-0 {\n    left: auto;\n  }\n  .c-md-offset-12 {\n    margin-left: 100%;\n  }\n  .c-md-offset-11 {\n    margin-left: 91.66666667%;\n  }\n  .c-md-offset-10 {\n    margin-left: 83.33333333%;\n  }\n  .c-md-offset-9 {\n    margin-left: 75%;\n  }\n  .c-md-offset-8 {\n    margin-left: 66.66666667%;\n  }\n  .c-md-offset-7 {\n    margin-left: 58.33333333%;\n  }\n  .c-md-offset-6 {\n    margin-left: 50%;\n  }\n  .c-md-offset-5 {\n    margin-left: 41.66666667%;\n  }\n  .c-md-offset-4 {\n    margin-left: 33.33333333%;\n  }\n  .c-md-offset-3 {\n    margin-left: 25%;\n  }\n  .c-md-offset-2 {\n    margin-left: 16.66666667%;\n  }\n  .c-md-offset-1 {\n    margin-left: 8.33333333%;\n  }\n  .c-md-offset-0 {\n    margin-left: 0;\n  }\n}\n@media (min-width: 1200px) {\n  .c-lg-1,\n  .c-lg-10,\n  .c-lg-11,\n  .c-lg-12,\n  .c-lg-2,\n  .c-lg-3,\n  .c-lg-4,\n  .c-lg-5,\n  .c-lg-6,\n  .c-lg-7,\n  .c-lg-8,\n  .c-lg-9 {\n    float: left;\n  }\n  .c-lg-12 {\n    width: 100%;\n  }\n  .c-lg-11 {\n    width: 91.66666667%;\n  }\n  .c-lg-10 {\n    width: 83.33333333%;\n  }\n  .c-lg-9 {\n    width: 75%;\n  }\n  .c-lg-8 {\n    width: 66.66666667%;\n  }\n  .c-lg-7 {\n    width: 58.33333333%;\n  }\n  .c-lg-6 {\n    width: 50%;\n  }\n  .c-lg-5 {\n    width: 41.66666667%;\n  }\n  .c-lg-4 {\n    width: 33.33333333%;\n  }\n  .c-lg-3 {\n    width: 25%;\n  }\n  .c-lg-2 {\n    width: 16.66666667%;\n  }\n  .c-lg-1 {\n    width: 8.33333333%;\n  }\n  .c-lg-pull-12 {\n    right: 100%;\n  }\n  .c-lg-pull-11 {\n    right: 91.66666667%;\n  }\n  .c-lg-pull-10 {\n    right: 83.33333333%;\n  }\n  .c-lg-pull-9 {\n    right: 75%;\n  }\n  .c-lg-pull-8 {\n    right: 66.66666667%;\n  }\n  .c-lg-pull-7 {\n    right: 58.33333333%;\n  }\n  .c-lg-pull-6 {\n    right: 50%;\n  }\n  .c-lg-pull-5 {\n    right: 41.66666667%;\n  }\n  .c-lg-pull-4 {\n    right: 33.33333333%;\n  }\n  .c-lg-pull-3 {\n    right: 25%;\n  }\n  .c-lg-pull-2 {\n    right: 16.66666667%;\n  }\n  .c-lg-pull-1 {\n    right: 8.33333333%;\n  }\n  .c-lg-pull-0 {\n    right: auto;\n  }\n  .c-lg-push-12 {\n    left: 100%;\n  }\n  .c-lg-push-11 {\n    left: 91.66666667%;\n  }\n  .c-lg-push-10 {\n    left: 83.33333333%;\n  }\n  .c-lg-push-9 {\n    left: 75%;\n  }\n  .c-lg-push-8 {\n    left: 66.66666667%;\n  }\n  .c-lg-push-7 {\n    left: 58.33333333%;\n  }\n  .c-lg-push-6 {\n    left: 50%;\n  }\n  .c-lg-push-5 {\n    left: 41.66666667%;\n  }\n  .c-lg-push-4 {\n    left: 33.33333333%;\n  }\n  .c-lg-push-3 {\n    left: 25%;\n  }\n  .c-lg-push-2 {\n    left: 16.66666667%;\n  }\n  .c-lg-push-1 {\n    left: 8.33333333%;\n  }\n  .c-lg-push-0 {\n    left: auto;\n  }\n  .c-lg-offset-12 {\n    margin-left: 100%;\n  }\n  .c-lg-offset-11 {\n    margin-left: 91.66666667%;\n  }\n  .c-lg-offset-10 {\n    margin-left: 83.33333333%;\n  }\n  .c-lg-offset-9 {\n    margin-left: 75%;\n  }\n  .c-lg-offset-8 {\n    margin-left: 66.66666667%;\n  }\n  .c-lg-offset-7 {\n    margin-left: 58.33333333%;\n  }\n  .c-lg-offset-6 {\n    margin-left: 50%;\n  }\n  .c-lg-offset-5 {\n    margin-left: 41.66666667%;\n  }\n  .c-lg-offset-4 {\n    margin-left: 33.33333333%;\n  }\n  .c-lg-offset-3 {\n    margin-left: 25%;\n  }\n  .c-lg-offset-2 {\n    margin-left: 16.66666667%;\n  }\n  .c-lg-offset-1 {\n    margin-left: 8.33333333%;\n  }\n  .c-lg-offset-0 {\n    margin-left: 0;\n  }\n}\n.clearfix:after,\n.clearfix:before,\n.container-fluid:after,\n.container-fluid:before,\n.container:after,\n.container:before,\n.row:after,\n.row:before {\n  content: \" \";\n  display: table;\n}\n.clearfix:after,\n.container-fluid:after,\n.container:after,\n.row:after {\n  clear: both;\n}\n/* ========================================== Common Fields CSS============================*/\n.table-responsive {\n  max-width: 100%;\n}\n.filter-fields .field-wrapper.has-value .form-ctrl + label,\n.filter-fields .field-wrapper .form-ctrl:focus + label {\n  top: 0;\n}\n/* For DatePicker */\n.field-wrapper {\n  position: relative;\n  padding-top: 10px;\n}\n.field-wrapper .form-ctrl {\n  z-index: 10;\n}\n.field-wrapper.datePickerBox .form-ctrl {\n  cursor: pointer;\n  position: relative;\n  z-index: 10;\n  background: transparent;\n}\n.field-wrapper.datePickerBox:after {\n  content: '';\n  background: url(\"/./assets/images/calendar.svg\") no-repeat;\n  position: absolute;\n  right: 5px;\n  top: 28px;\n  width: 21px;\n  height: 21px;\n  z-index: 0;\n}\n.field-wrapper .date-clear {\n  position: absolute;\n  right: -35px;\n  top: 35px;\n  cursor: pointer;\n  color: #0084f6;\n}\n.field-wrapper label {\n  font-size: 12px;\n  z-index: 1;\n}\n/* text field  */\n.field-wrapper .form-ctrl {\n  display: block;\n  width: 100%;\n  box-sizing: border-box;\n  padding: 5px;\n  outline: none;\n  border: solid 1px #e2ebee;\n  background: #fff;\n  z-index: 10;\n  font: 400 12px 'Open sans', sans-serif;\n  box-shadow: none;\n  border-radius: 0;\n  color: #000;\n}\n.field-wrapper .form-ctrl.form-ctrl-multiple {\n  height: 100px;\n  overflow-y: auto;\n}\n.field-wrapper .form-ctrl:focus {\n  border: solid 2px #0084f6;\n  box-shadow: none;\n}\n.field-wrapper .form-ctrl:focus + label,\n.field-wrapper.has-value .form-ctrl + label {\n  font-size: 12px;\n  top: 6px;\n  left: 0;\n}\n.field-wrapper .form-ctrl:focus + label,\n.field-wrapper.has-value .form-ctrl + label {\n  color: #0084f6;\n  font-size: 12px;\n}\n/*radio button  */\n.field-checkbox-wrapper,\n.field-radio-wrapper {\n  position: relative;\n  padding-left: 25px;\n  margin-bottom: 10px;\n}\n.field-radio-wrapper .form-radio {\n  opacity: 0;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 20px;\n  height: 20px;\n  z-index: 1;\n}\n.field-radio-wrapper .form-radio + label {\n  vertical-align: middle;\n  transition: all .1s;\n}\n.field-radio-wrapper .form-radio + label:after {\n  content: '';\n  width: 16px;\n  height: 16px;\n  border: 2px solid #ccc;\n  border-radius: 50%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  transition: all .1s;\n}\n.field-radio-wrapper .form-radio:checked + label:after {\n  border: 2px solid #0084f6;\n}\n.field-radio-wrapper .form-radio + label:before {\n  transition: all .1s;\n  width: 1px;\n  height: 1px;\n  left: 9px;\n  top: 9px;\n  position: absolute;\n  content: '';\n}\n.field-radio-wrapper .form-radio:checked + label:before {\n  content: '';\n  width: 10px;\n  height: 10px;\n  background: #0084f6;\n  border-radius: 50%;\n  left: 3px;\n  top: 3px;\n}\n.field-radio-wrapper .form-radio:checked + label {\n  color: #0084f6;\n}\n/*checkbox  */\n.field-checkbox-wrapper .form-checkbox {\n  opacity: 0;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 20px;\n  height: 20px;\n  z-index: 1;\n}\n.field-checkbox-wrapper .form-checkbox + label {\n  vertical-align: middle;\n  font-size: 14px;\n  display: inline-block;\n}\n.field-checkbox-wrapper .form-checkbox + label:after {\n  content: '';\n  width: 16px;\n  height: 16px;\n  border: 2px solid #ccc;\n  border-radius: 2px;\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n.field-checkbox-wrapper .form-checkbox:checked + label:after {\n  border: 2px solid #0084f6;\n}\n.field-checkbox-wrapper .form-checkbox + label:before {\n  width: 1px;\n  height: 1px;\n  left: 8px;\n  top: 9px;\n  position: absolute;\n  content: '';\n  border-top: 0;\n  border-right: 0;\n  border-left: 2px solid transparent;\n  border-bottom: 2px solid transparent;\n  transform: rotate(-45deg);\n}\n.field-checkbox-wrapper .form-checkbox:checked + label:before {\n  border-left: 2px solid #0084f6;\n  border-bottom: 2px solid #0084f6;\n  width: 12px;\n  height: 5px;\n  left: 2px;\n  top: 5px;\n}\n.field-checkbox-wrapper .form-checkbox:checked + label {\n  color: #0084f6;\n}\n/*navigation   */\n.useFul li {\n  list-style-type: none;\n}\n.useFul nav {\n  margin-left: 200px;\n}\n/*===========================================common Table CSS===============================*/\n.mb0,\n.middle-top.mb0 {\n  margin-bottom: 0;\n}\n.align-center {\n  text-align: center;\n}\ntable {\n  width: 100%;\n  box-sizing: border-box;\n  border-collapse: collapse;\n  overflow-y: hidden;\n}\ntd,\nth {\n  font-size: 14px;\n  padding: 6px 2px;\n  vertical-align: middle;\n}\nth {\n  background: #fff;\n  font-size: 12px !important;\n  color: #000000;\n  font-weight: 600;\n  padding: 20px 10px;\n  border-top: 2px solid rgba(119, 119, 119, 0.11);\n}\nth label {\n  font-size: 14px !important;\n  color: #000000;\n}\nth a {\n  font-size: 14px !important;\n  color: #000000;\n}\nth:first-child {\n  border-top-left-radius: 5px;\n}\nth.No {\n  text-align: right;\n}\nth.Name {\n  text-align: left;\n}\nth.Contact {\n  text-align: right;\n}\nth.Date {\n  text-align: right;\n}\ntd {\n  border-bottom: 1px solid #fff;\n}\ntd.No {\n  text-align: right;\n}\ntd.Name {\n  text-align: left;\n}\ntd.Contact {\n  text-align: right;\n}\ntd.Date {\n  text-align: right;\n}\ntable tr {\n  transition: all .1s;\n}\ntable tr {\n  background: #ffffff;\n  border-left: 1px solid rgba(211, 212, 213, 0.5);\n  border-right: 1px solid rgba(211, 212, 213, 0.5);\n  cursor: pointer;\n}\ntable tr td {\n  border-top: 1px solid rgba(211, 212, 213, 0.5);\n  border-bottom: 2px solid rgba(211, 212, 213, 0.5);\n  padding: 5px 15px;\n  font-size: 14px;\n}\ntable tr:nth-child(even):hover {\n  background: #ececec;\n}\ntable tr:nth-child(odd):hover {\n  background: #eaeaea;\n}\ntable tr.selected {\n  background: #dceff7 !important;\n  box-shadow: 0 11px 8px -10px #CCC, 0 -11px 13px -9px #CCC;\n  transform: scale(1);\n}\n.table-responsive tr td:first-child .field-checkbox-wrapper,\n.table-responsive tr th:first-child .field-checkbox-wrapper {\n  width: 20px;\n  overflow: hidden;\n  box-sizing: border-box;\n  height: 20px;\n  padding-left: 20px;\n  margin-bottom: 0;\n  margin-left: 5px;\n  background: transparent;\n  border-radius: 2px;\n}\n.enquiry-status label {\n  display: block;\n  font-weight: 600;\n}\n.progress-status {\n  color: dodgerblue;\n}\n.inactive-status,\n.open-status {\n  color: #333;\n}\n.admitted-status {\n  color: green;\n}\n.btn {\n  padding: 6px 10px;\n  background: #fff;\n  border: 1px solid #ccc;\n  margin-left: 10px;\n  display: inline-block;\n  font-size: 14px;\n  font-weight: 600;\n  box-sizing: border-box;\n  /* height: 35px; */\n  cursor: pointer;\n  color: #0084f6;\n  border-radius: 4px;\n}\n.btn.fullBlue {\n  background: #0084f6;\n  border: 1px solid #0084f6;\n  color: #fff;\n  padding: 4px 10px;\n  border-radius: 4px;\n}\n.btn.cancle {\n  background: #fff;\n  border: 1px solid #ccc;\n  color: #0084f6;\n  font-size: 14px;\n  padding: 6px 10px;\n  border-radius: 4px;\n}\n.btn.redBtn {\n  background: #f44336;\n  border: 1px solid #f44336;\n  color: #fff;\n  font-size: 14px;\n}\n.btn.normal-btn {\n  margin: 0;\n}\n.middle-bottom .btn.redBtn {\n  margin-right: 0;\n}\n.customSelectWrapper select {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  -o-appearance: none;\n  appearance: none;\n  position: relative;\n  z-index: 1;\n  background: transparent;\n}\n.customSelectWrapper:after {\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  content: \"\\f107\";\n  font-size: 22px;\n  position: absolute;\n  right: 0;\n  top: 20px;\n}\n.box-shadow-lite .field-wrapper.customSelectWrapper:after {\n  right: 40px;\n}\n.field-wrapper.customSelectWrapper label {\n  top: 13px;\n  width: 100%;\n  height: 22px;\n  padding-top: 10px;\n  z-index: 2;\n}\n.field-wrapper.customSelectWrapper .form-ctrl:focus + label,\n.field-wrapper.customSelectWrapper.has-value label {\n  padding-top: 0;\n  height: 42px;\n}\n.customSelectWrapper .form-ctrl option {\n  opacity: 0;\n  visibility: hidden;\n  display: none;\n}\n.open-accor {\n  float: right;\n  width: 24px;\n  font-size: 24px;\n  height: 24px;\n  text-align: center;\n  border: none;\n  border-radius: 50%;\n  line-height: 24px;\n  margin-right: 4px;\n  margin-top: 3px;\n  cursor: pointer;\n  color: #0084f6;\n  cursor: pointer;\n}\n.hasError .form-ctrl,\n.hasError.form-ctrl {\n  color: red;\n  border-color: red !important;\n}\np.error-msg {\n  color: red;\n}\n.middle-bottom .questionInfo {\n  display: inline-block;\n  position: static;\n  margin-left: 10px;\n  vertical-align: middle;\n}\n.next {\n  position: relative;\n  padding-right: 12px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.next:after {\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  content: \"\\f105\";\n  font-size: 17px;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.next:hover {\n  text-decoration: underline;\n}\n.prev {\n  position: relative;\n  padding-left: 12px;\n  font-size: 12px;\n  font-weight: 600;\n  margin-right: 30px;\n}\n.prev:after {\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  content: \"\\f104\";\n  font-size: 17px;\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n.prev:hover {\n  text-decoration: underline;\n}\n.form-type1 h2,\n.form-type2 h2 {\n  margin-top: 15px;\n  font-size: 15px;\n}\n.other-heading h2,\n.other-heading h4 {\n  font-size: 16px;\n  margin-bottom: 10px;\n  font-weight: 600;\n}\n.other-heading h2 a,\n.other-heading h4 a {\n  display: inline-block;\n  margin-top: 3px;\n  font-size: 12px;\n}\n.other-heading h2 .close-btns,\n.other-heading h4 .close-btns {\n  float: right;\n  cursor: pointer;\n  width: 20px;\n  text-align: center;\n}\n.other-heading h2 .close-btns svg,\n.other-heading h4 .close-btns svg {\n  width: 13px;\n  stroke-width: 2px;\n}\n.other-heading h2 .close-btns svg .cls-1,\n.other-heading h4 .close-btns svg .cls-1 {\n  stroke: #333;\n}\n.other-heading h2 .close-btns:hover svg .cls-1,\n.other-heading h4 .close-btns:hover svg .cls-1 {\n  stroke: #0084f6;\n}\n.info-icon {\n  width: 17px;\n  height: 17px;\n  border-radius: 50%;\n  border: 1px solid #333;\n  display: inline-block;\n  vertical-align: middle;\n  font-size: 12px;\n  text-align: center;\n  font-weight: bold;\n  padding-top: 1px;\n  box-sizing: border-box;\n  cursor: pointer;\n  position: relative;\n  margin: 0 5px;\n}\n.add-edit {\n  margin-top: 15px;\n  margin-bottom: 15px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.add-edit a {\n  margin-right: 15px;\n}\n.form-new-field {\n  background: transparent;\n  width: 60px;\n  text-align: center;\n  border: 0;\n  border-bottom: 1px solid #ccc;\n  padding: 6px 0;\n}\nselect.form-new-field {\n  width: 110px;\n}\nmain {\n  padding-left: 15% !important;\n  box-sizing: border-box;\n  position: relative;\n}\n.middle-section {\n  margin-top: 48px;\n}\n.mat-h1, .mat-headline, .mat-typography h1, .mat-typography h2 {\n  font: bold 14px/20px 'Open Sans', sans-serif;\n  letter-spacing: normal;\n  margin: 0 0 16px;\n}\n.mat-body, .mat-body-1, .mat-typography {\n  font: 400 14px/20px 'Open Sans', sans-serif;\n  letter-spacing: normal;\n}\n.tooltip-box {\n  position: absolute;\n  width: 150px;\n  min-height: 30px;\n  background: #fff;\n  border: 1px solid #ccc;\n  left: -150px;\n  z-index: 1;\n  top: -8px;\n  visibility: hidden;\n  opacity: 0;\n  transition: all .1s linear .1s;\n  font-size: 11px;\n  border-radius: 4px;\n  padding: 3px 5px;\n  box-shadow: 0 0 4px #ccc;\n}\n.tooltip-box:after {\n  content: '';\n  width: 0;\n  height: 0;\n  border-left: 8px solid #fff;\n  border-top: 8px solid transparent;\n  border-bottom: 8px solid transparent;\n  position: absolute;\n  right: -8px;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n}\n.tooltip-box-field {\n  position: absolute;\n  width: 130px;\n  min-height: 30px;\n  background: #e0e0e0;\n  border: 1px solid #ccc;\n  left: 16px;\n  z-index: 1;\n  top: -2px;\n  visibility: hidden;\n  opacity: 0;\n  transition: all .1s linear .1s;\n  font-size: 11px;\n  border-radius: 4px;\n  padding: 3px 5px;\n  box-shadow: 0 0 4px #ccc;\n}\n.tooltip-box-field:after {\n  content: '';\n  width: 0;\n  height: 0;\n  border-right: 8px solid #e0e0e0;\n  border-top: 8px solid transparent;\n  border-bottom: 8px solid transparent;\n  position: absolute;\n  left: -7px;\n  top: 4px;\n  bottom: 0;\n  /* margin: auto; */\n}\n.middle-top .questionInfo {\n  position: relative;\n}\n.middle-top .questionInfo .tooltip-box-field {\n  left: auto;\n  right: 16px;\n}\n.middle-top .questionInfo .tooltip-box-field:after {\n  transform: rotate(180deg);\n  right: -7px;\n  left: auto;\n}\n.middle-top .questionInfo:hover .tooltip-box-field {\n  left: auto;\n  right: 28px;\n}\n.middle-top .questionInfo:hover .tooltip-box-field:after {\n  transform: rotate(180deg);\n  right: -7px;\n  left: auto;\n}\n.questionInfo.pos-rel {\n  position: relative;\n}\n.info-tool {\n  display: inline-block;\n}\n.info-tool .tooltip-box-field {\n  width: 100px;\n  left: 0;\n}\n.info-tool:hover .tooltip-box-field,\n.questionInfo:hover .tooltip-box-field {\n  visibility: visible;\n  opacity: 1;\n  left: 28px;\n}\n.questionInfo.inline-relative {\n  display: inline-block;\n  position: relative;\n}\n.tooltip-table:hover .tooltip-box {\n  visibility: visible;\n  opacity: 1;\n  left: -140px;\n}\n.nav-tab {\n  max-width: 700px;\n  margin: 10px auto;\n  font-size: 0;\n}\n.nav-tab li {\n  width: 15%;\n  display: inline-block;\n  vertical-align: top;\n  position: relative;\n  margin: 0 5%;\n}\n.nav-tab li div {\n  display: inline-block;\n  text-align: center;\n  position: relative;\n  cursor: pointer;\n}\n.nav-tab li div:after {\n  content: '';\n  position: absolute;\n  width: 166px;\n  height: 2px;\n  background: #ccc;\n  right: 50%;\n  top: -24px;\n  bottom: 0;\n  margin: auto;\n}\n.nav-tab li div span {\n  border: 1px solid #ccc;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background: #ddd;\n  display: inline-block;\n  text-align: center;\n  line-height: 30px;\n  position: relative;\n  z-index: 1;\n  font-weight: 600;\n  font-size: 14px;\n}\n.nav-tab li div p {\n  font-weight: 600;\n  color: #888;\n  margin-top: 10px;\n}\n.nav-tab li:first-child div:after {\n  display: none;\n}\n.nav-tab li.active div span, .nav-tab li.tab-completed div span {\n  border-color: #0084f6;\n  color: #fff;\n  background: #0084f6;\n}\n.nav-tab li.active div:after, .nav-tab li.tab-completed div:after {\n  background: #0084f6;\n}\n.nav-tab li.active div p, .nav-tab li.tab-completed div p {\n  color: #0084f6;\n}\n.student-table.table-responsive tr td:first-child .field-checkbox-wrapper,\n.student-table.table-responsive tr th:first-child .field-checkbox-wrapper {\n  display: inline-block;\n}\n@media only screen and (max-width: 767px) {\n  .nav-tab {\n    max-width: 300px;\n  }\n  .nav-tab li div:after {\n    width: 73px;\n    bottom: auto;\n    margin: 0;\n    top: 15px;\n  }\n  .tooltip-box-field {\n    right: 16px;\n    left: auto;\n  }\n  .questionInfo:hover .tooltip-box-field {\n    right: 28px;\n    left: auto;\n  }\n  .tooltip-box-field:after {\n    transform: rotate(180deg);\n    right: -7px;\n    left: auto;\n  }\n  .info-tool:hover .tooltip-box-field {\n    left: 28px;\n    right: auto;\n  }\n  .info-tool:hover .tooltip-box-field:after {\n    transform: rotate(0deg);\n    right: auto;\n    left: -7px;\n  }\n  .export-print .export-icon,\n  .export-print .report-icon {\n    margin-left: 0 !important;\n  }\n  .middle-top .questionInfo:hover .tooltip-box-field {\n    left: 28px;\n    right: auto;\n  }\n  .middle-top .questionInfo:hover .tooltip-box-field:after {\n    transform: rotate(0deg);\n    left: -7px;\n    right: auto;\n  }\n}\n/*======================================common menu icon=====================*/\n.edit-icon {\n  background: url(\"/../assets/images/edit_details.svg\") no-repeat;\n  width: 19px;\n  height: 19px;\n  display: inline-block;\n  vertical-align: middle;\n}\ninput:-webkit-autofill {\n  -webkit-box-shadow: 0 0 0 1000px white inset !important;\n}\n.view-icon {\n  background: url(\"/./assets/images/view_details.svg\") no-repeat;\n  width: 13px;\n  height: 15px;\n  display: inline-block;\n  vertical-align: middle;\n}\n.alert-danger {\n  color: red !important;\n  background-color: transparent !important;\n  border: none !important;\n}\n.alert {\n  padding: 0 !important;\n  margin-bottom: 0 !important;\n}\n.popupWrapper {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  bottom: 0;\n  top: 0px;\n  right: 0;\n  left: 0;\n  background: rgba(230, 230, 230, 0.5);\n  z-index: 100;\n  visibility: hidden;\n  opacity: 0;\n  transition: all .5s ease-in;\n}\n.popupWrapper .popup {\n  max-width: 60%;\n  width: 100%;\n  height: auto;\n  left: 0;\n  right: 0;\n  top: 5%;\n  bottom: 0;\n  margin: auto;\n}\n.popupWrapper .popup.large {\n  max-width: 80%;\n  width: 100%;\n  height: auto;\n  left: 0;\n  right: 0;\n  top: 2%;\n  bottom: 0;\n  margin: auto;\n}\n.popupWrapper .popup.small {\n  max-width: 40%;\n  width: 100%;\n  height: auto;\n  left: 0;\n  right: 0;\n  top: 5%;\n  bottom: 0;\n  margin: auto;\n}\n.popupWrapper .popup ::-webkit-scrollbar {\n  display: block;\n  width: 7px;\n  height: 7px;\n}\n.popup-wrapper {\n  padding: 20px;\n  box-sizing: border-box;\n  box-shadow: 1px 8px 20px 5px #9c9c9c;\n  transition: unset;\n  background: #fff;\n}\n.popup-wrapper h2 {\n  margin-bottom: 15px;\n  font-size: 14px;\n}\n.popup-wrapper h4 {\n  margin: 25px 0 15px;\n  font-weight: 600;\n}\n.closePopup {\n  right: 10px;\n  top: 10px;\n  font-size: 14px;\n  cursor: pointer;\n  line-height: 20px;\n  width: 26px;\n  height: 26px;\n  box-sizing: border-box;\n  text-align: center;\n  padding-top: 3px;\n  display: none;\n}\n.closePopup.bottomRight {\n  bottom: 2px;\n  top: auto;\n  left: auto;\n  right: 0;\n}\n.closePopup.topLeft {\n  left: 0;\n  right: auto;\n  top: 1px;\n  bottom: auto;\n}\n.closePopup.bottomLeft {\n  left: 0;\n  right: auto;\n  bottom: 2px;\n  top: auto;\n}\n.closePopup svg {\n  width: 16px;\n}\n.closePopup svg .cls-1 {\n  stroke: #c1c1c1;\n  stroke-width: 2px;\n}\n.closePopup:hover .cls-1 {\n  stroke: #0084f6;\n}\n.popup-content {\n  height: 100%;\n  overflow: hidden;\n  visibility: visible;\n}\n.popup-content .row {\n  margin: 0;\n}\n.popup-content .content-wrapper {\n  margin: 5px;\n  max-height: 480px;\n  overflow: hidden;\n}\n.popup-content .content-wrapper .content-scroller {\n  max-height: 475px;\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n.fadeIn {\n  opacity: 1;\n  visibility: visible;\n}\n.popupWrapperMob {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  bottom: 0;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 100;\n  background: rgba(0, 0, 0, 0.5);\n  visibility: hidden;\n  transition: all .5s ease-in;\n}\n.popupWrapperMob .closePopup {\n  right: -25px;\n  top: -27px;\n  display: block;\n}\n.popup-mob {\n  left: 0;\n  width: 100%;\n  max-height: 70%;\n  background: #fff;\n  padding: 30px;\n  box-sizing: border-box;\n  height: 100%;\n  overflow: auto;\n  z-index: 1;\n  bottom: -70%;\n  transition: all .5s ease-in;\n}\n.popupWrapperMob.showPopupMob {\n  z-index: 100;\n  visibility: visible;\n  opacity: 1;\n}\n.popupWrapperMob.showPopupMob .popup-mob {\n  bottom: 0;\n}\n.sdb {\n  cursor: pointer;\n}\n.sdb > li {\n  padding: 8px 0;\n  border-bottom: 2px solid rgba(211, 212, 213, 0.2);\n  margin-bottom: 16px;\n  cursor: pointer;\n}\n.sdb > li:last-child {\n  border-bottom: 0;\n  margin-bottom: 0;\n}\n.sdb > li h5 {\n  display: flex;\n  justify-content: space-between;\n  color: #1e2328;\n  font-size: 14px;\n  cursor: pointer;\n  margin-bottom: 12px;\n}\n.sdb > li h5 span {\n  text-transform: uppercase;\n  opacity: .8;\n  margin-bottom: 4px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.sdb > li h6 {\n  display: flex;\n  justify-content: space-between;\n  color: #1e2328;\n  font-size: 12px;\n  cursor: pointer;\n  margin-bottom: 12px;\n}\n.sdb > li h6 span {\n  text-transform: uppercase;\n  opacity: .8;\n  margin-bottom: 4px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.in-student-list > li {\n  margin-bottom: 0;\n  cursor: pointer;\n}\n.in-student-list > li a {\n  display: block;\n  margin: 0 -15px;\n  padding: 8px 15px;\n  cursor: pointer;\n}\n.in-student-list > li a:hover {\n  background: rgba(27, 96, 163, 0.0901961);\n}\n.in-student-list > li a img {\n  float: left;\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  margin-right: 12px;\n  cursor: pointer;\n}\n.in-student-list > li a .sdb-right {\n  display: block;\n  overflow: hidden;\n  color: rgba(30, 35, 40, 0.7);\n  cursor: pointer;\n}\n.in-student-list > li a .sdb-right label {\n  display: block;\n  margin-bottom: 6px;\n  cursor: pointer;\n}\n.in-student-list > li a .sdb-right label strong {\n  font-weight: 600;\n}\n.in-student-list > li a .sdb-right label.recent {\n  display: inline-block;\n  margin-bottom: 6px;\n  color: rgba(30, 35, 40, 0.7);\n  width: 85%;\n}\n.in-student-list > li a .sdb-right label.delete {\n  display: inline-block;\n  margin-bottom: 6px;\n  color: rgba(30, 35, 40, 0.7);\n  width: 10%;\n}\n.in-student-list > li a .sdb-right label.delete img {\n  float: left;\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  margin-right: 0;\n  cursor: pointer;\n}\n.in-student-list > li a .sdb-right span {\n  font-size: 12px;\n  cursor: pointer;\n}\n.in-student-list > li a.markers {\n  display: inline-block;\n  margin: 0;\n  padding: 8px 10px;\n}\n.in-student-list .holder li:last-child {\n  display: none;\n}\n.in-student-list .holder:hover li:last-child {\n  display: block;\n}\n.dropdown ul {\n  cursor: pointer;\n}\n.theme-green .bs-datepicker-body table td.week span {\n  color: #337ab7 !important;\n}\n.theme-green .bs-datepicker-head {\n  background-color: #337ab7 !important;\n}\n.theme-green .bs-datepicker-body table td span.selected {\n  background-color: #337ab7 !important;\n}\nbs-datepicker-container,\nbs-daterangepicker-container {\n  z-index: 99999999999 !important;\n  left: -5% !important;\n}\n.next:after {\n  content: \"\" !important;\n}\nbody {\n  background: #f4f5f7 !important;\n}\n.modal-backdrop.in, .modal-backdrop {\n  display: none !important;\n}\n/* import header css*/\n/* ===============================header colors=======================*/\n.table-format-first .table-responsive table th,\n.table-format-first .table-responsive table td {\n  text-align: center;\n  padding: 10px 5px;\n}\n.table-format-first .table-responsive table th {\n  text-transform: capitalize;\n  font-size: 14px;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper {\n  display: inline-block;\n  overflow: initial;\n  margin-left: 0;\n  width: auto;\n  position: relative;\n  background: transparent;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox {\n  z-index: 2;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label {\n  font-size: 16px;\n  margin-left: 7px;\n  font-weight: 600;\n  vertical-align: middle;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:after, .table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:before {\n  z-index: 1;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper:after {\n  content: '';\n  width: 20px;\n  height: 20px;\n  background: #fff;\n  left: 0;\n  top: 0;\n  position: absolute;\n}\n.table-format-first .table-responsive table tbody tr td .fa-trash-o {\n  color: #f44336;\n  font-size: 20px;\n}\n.table-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-top: 10px;\n}\n.table-container .heading-container {\n  background: #e0eaec;\n  display: flex;\n  flex-direction: row;\n  font-size: 14px;\n  font-weight: 600;\n  text-align: left;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n}\n.table-container .heading-container .heading-item {\n  width: 10%;\n  text-align: center;\n}\n.table-container .value-outer-container {\n  display: flex;\n  flex-direction: column;\n  min-height: 53vh;\n  max-height: 54vh;\n  overflow-x: hidden;\n  overflow-y: auto;\n  border: 1px solid #ccc;\n}\n.table-container .value-outer-container .value-container {\n  display: flex;\n  flex-direction: row;\n  text-align: left;\n  padding: 4px;\n  font-size: 12px;\n  border-bottom: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n  border-top: none;\n}\n.table-container .value-outer-container .value-container .value-item {\n  width: 10%;\n  text-align: center;\n}\n/*====================main section css===============*/\nmain {\n  padding-left: 150px;\n  box-sizing: border-box;\n  position: relative;\n}\n.common-nav {\n  position: fixed;\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 70px;\n  box-sizing: border-box;\n  z-index: 102;\n}\n/* @font-face {\n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: 700;\n    src: local(\"Open Sans Bold\"), local(\"OpenSans-Bold\"), url(https://themes.googleusercontent.com/static/fonts/opensans/v6/k3k702ZOKiLJc3WVjuplzHhCUOGz7vYGh680lGh-uXM.woff) format(\"woff\");\n}\n\n@font-face {\n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: 300;\n    src: local(\"Open Sans Light\"), local(\"OpenSans-Light\"), url(https://themes.googleusercontent.com/static/fonts/opensans/v6/DXI1ORHCpsQm3Vp6mXoaTXhCUOGz7vYGh680lGh-uXM.woff) format(\"woff\");\n}\n\n@font-face {\n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: 600;\n    src: local(\"Open Sans Semibold\"), local(\"OpenSans-Semibold\"), url(https://themes.googleusercontent.com/static/fonts/opensans/v6/MTP_ySUJH_bn48VBG8sNSnhCUOGz7vYGh680lGh-uXM.woff) format(\"woff\");\n}\n\n@font-face {\n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: 400;\n    src: local(\"Open Sans\"), local(\"OpenSans\"), url(https://themes.googleusercontent.com/static/fonts/opensans/v6/cJZKeOuBrn4kERxqtaUH3T8E0i7KZn-EPnyo3HZu7kw.woff) format(\"woff\");\n} */\nhtml, body {\n  font-family: 'Open Sans', sans-serif;\n}\ntable th,\ntable td {\n  text-align: center;\n}\ntable tbody .field-checkbox-wrapper {\n  background: transparent;\n  display: inline-block;\n  overflow: initial;\n}\n/*==========================================Responsive css==============================*/\n@media only screen and (min-width: 768px) and (max-width: 960px) {\n  .middle-section {\n    padding: 1%;\n  }\n  .middle-left {\n    width: 65%;\n  }\n  .middle-right {\n    width: 35%;\n  }\n  .btn {\n    height: 29px;\n    padding: 7px 6px;\n    font-size: 12px;\n  }\n  .normal-field {\n    height: 29px;\n  }\n  .middle-top h1 {\n    margin-top: 5px;\n    font-size: 15px;\n    margin-bottom: 10px;\n  }\n  .header-search .form-ctrl-head {\n    width: 200px;\n  }\n  .header-search {\n    left: 20px;\n    top: 7px;\n  }\n  .login-tube {\n    margin-right: 0;\n  }\n  .btn.cancle,\n  .btn.redBtn {\n    font-size: 14px;\n    height: 35px;\n  }\n  .popupWrapper .popup {\n    max-width: 77%;\n  }\n  .common-right-section h4 {\n    font-size: 14px;\n  }\n  .file-wrapper {\n    padding-left: 15px;\n  }\n  .file-upload-box .select-file-upload ul li label {\n    font-size: 14px;\n  }\n  .file-upload-box .select-file-upload ul li .choose-file input[type=\"text\"] {\n    height: 28px;\n  }\n  .file-upload-box .file-uploaded {\n    margin: 10px 0 15px;\n    font-size: 14px;\n  }\n  .progress-bar-wrapper {\n    width: 70%;\n  }\n  .file-upload-box .drag-drop-box {\n    margin-top: 30px;\n  }\n  .file-upload-box {\n    padding: 15px 00px;\n    max-width: none;\n  }\n  .search-data td {\n    font-size: 12px;\n  }\n}\n@media only screen and (min-width: 768px) {\n  .visible-xs {\n    display: none !important;\n  }\n}\n@media only screen and (max-width: 767px) {\n  header {\n    padding: 5px 5px;\n  }\n  header > div {\n    width: 100%;\n  }\n  header .logo {\n    text-align: center;\n    margin: 0 auto;\n    width: 129px;\n    float: left;\n    margin-left: 5px;\n  }\n  header #searchHeader {\n    display: none;\n  }\n  header .login-nav > li .user-info {\n    margin-right: 15px;\n    width: auto;\n  }\n  header .login-nav > li {\n    padding: 0 7px;\n  }\n  #middleWrapper {\n    width: 100%;\n  }\n  main {\n    padding-left: 0;\n    width: 100%;\n  }\n  #loginTube {\n    width: 100%;\n  }\n  .login-tube {\n    float: right;\n  }\n  .middle-section {\n    padding: 1%;\n    width: 100%;\n    box-sizing: border-box;\n  }\n  .middle-left {\n    width: 100%;\n    padding: 0;\n  }\n  .middle-top h1 {\n    margin-top: 8px;\n    margin-bottom: 10px;\n    float: none;\n  }\n  .middle-top aside {\n    float: left;\n  }\n  .btn {\n    padding: 4px 7px;\n    font-size: 12px;\n    margin-left: 0;\n    margin-right: 10px;\n    margin-bottom: 10px;\n    border-radius: 4px;\n  }\n  .accordian-section {\n    padding: 15px 0px 0;\n  }\n  .accordian-section .accordian-content {\n    padding-left: 40px;\n  }\n  .create-institution {\n    right: auto;\n    left: 0;\n    bottom: -15px;\n  }\n  .middle-bottom aside {\n    float: left;\n    margin-top: 10px;\n    width: 100%;\n  }\n  .btn.cancle {\n    font-size: 14px;\n    height: 35px;\n  }\n  .btn.redBtn {\n    font-size: 14px;\n    height: 35px;\n  }\n  .middle-right {\n    width: 100%;\n    margin-top: 30px;\n    padding: 0;\n  }\n  .common-right-section {\n    margin-top: 20px;\n  }\n  .normal-field {\n    height: 31px;\n  }\n  .filter-right .btn {\n    margin-top: 10px;\n  }\n  .closeFilter {\n    margin-top: 20px;\n    font-size: 12px;\n  }\n  .middle-main.hasFilter:before {\n    top: 111px;\n  }\n  .search-enquiry-type-filter {\n    margin-top: 10px;\n  }\n  .search-enquiry-type-filter .filter-label {\n    margin-bottom: 10px;\n  }\n  .type-filter li {\n    margin: 0 10px;\n    width: auto;\n    margin-top: 10px;\n    margin-left: 0;\n  }\n  .filter-res label {\n    margin-bottom: 15px;\n    display: block;\n  }\n  .login-tube {\n    margin-right: 0;\n  }\n  .boxPadding15,\n  .middle-left,\n  .middle-right,\n  .middle-full {\n    padding: 0;\n  }\n  .filter-fields .field-wrapper {\n    margin: 6px 0;\n  }\n  .file-wrapper {\n    padding-left: 15px;\n  }\n  .file-upload-box .select-file-upload ul li label {\n    font-size: 14px;\n  }\n  .file-upload-box .select-file-upload ul li .choose-file input[type=\"text\"] {\n    height: 28px;\n  }\n  .file-upload-box .file-uploaded {\n    margin: 10px 0 15px;\n    font-size: 14px;\n  }\n  .progress-bar-wrapper {\n    width: 100%;\n  }\n  .file-upload-box .drag-drop-box {\n    margin-top: 30px;\n  }\n  .file-upload-box {\n    padding: 15px 00px;\n    max-width: none;\n  }\n  .search-data td {\n    font-size: 12px;\n  }\n}\n/*===================================theme change=====================*/\n.green-theme .btn.fullBlue {\n  background: green;\n  border-color: green;\n  color: #fff;\n}\n.green-theme a,\n.green-theme .btn {\n  color: green;\n}\n.green-theme .btn.redBtn {\n  color: #fff;\n}\n.green-theme header {\n  background: #035d03;\n}\n.green-theme .cls-1 {\n  stroke: green;\n}\n.green-theme .nav-list > li:hover,\n.green-theme .nav-list > li.active {\n  background: green;\n  box-shadow: 0px 0px 0px 1px green;\n  border-bottom: 1px solid green;\n}\n.green-theme .accordian-section .accordian-heading h4 .open-accor,\n.green-theme .accordian-section .accordian-heading h4 .close-accor,\n.green-theme .close-accor,\n.green-theme .open-accor {\n  color: green;\n  border-color: green;\n}\n.green-theme .export-print .print-icon:hover,\n.green-theme .export-print .export-icon:hover,\n.green-theme .print-output-section li:hover,\n.green-theme .field-wrapper.has-value .form-ctrl + label,\n.green-theme .field-wrapper .form-ctrl:focus + label,\n.green-theme .login-tube nav > ul > li .dropdown > ul li a:hover,\n.green-theme .field-checkbox-wrapper .form-checkbox:checked + label {\n  color: green;\n}\n.green-theme .upload-bar > div,\n.green-theme .accordian-section .accordian > li.active .circle-accor,\n.green-theme .accordian-section .accordian > li.data-filled .circle-accor,\n.green-theme .table-head-menu span {\n  background: green;\n}\n.green-theme .shadow-box {\n  background: rgba(0, 128, 0, 0.26);\n}\n.green-theme th {\n  background: #035d03;\n}\n.green-theme table tr.selected {\n  background: rgba(3, 93, 3, 0.2) !important;\n}\n.green-theme .enquiry-action .cls-1 {\n  stroke: transparent;\n}\n.green-theme .closeFilter svg .cls-1,\n.green-theme .action-menu-inner ul li:hover .cls-2,\n.green-theme .action-menu-inner ul li:hover .cls-3,\n.green-theme .print-output-section li:first-child:hover svg .cls-1,\n.green-theme .print-output-section li.svg-icon:hover .cls-2,\n.green-theme .closePopup:hover .cls-1,\n.green-theme .enquiry-action:hover .action-icon svg .cls-2 {\n  stroke: green;\n}\n.green-theme .action-menu-inner ul li:hover {\n  color: green;\n}\n.green-theme .action-menu-inner ul li:hover .cls-2 {\n  stroke: green;\n}\n.green-theme .accordian-section .accordian > li.active .circle-accor,\n.green-theme .accordian-section .accordian > li.data-filled .circle-accor,\n.green-theme .field-wrapper .form-ctrl:focus,\n.green-theme .field-checkbox-wrapper .form-checkbox:checked + label:after,\n.green-theme .field-checkbox-wrapper .form-checkbox:checked + label:before {\n  border-color: green;\n  width: 12px;\n  height: 5px;\n  left: 2px;\n  top: 5px;\n}\n.green-theme .accordian-section .accordian > li.data-filled .accordian-heading h4 {\n  background: rgba(3, 93, 3, 0.29);\n}\n.green-theme .field-wrapper.datePickerBox:after {\n  background-image: url(/../../../assets/images/calendargreen.svg);\n}\n/* ===============================header colors=======================*/\n.table-format-first .table-responsive table th,\n.table-format-first .table-responsive table td {\n  text-align: center;\n  padding: 10px 5px;\n}\n.table-format-first .table-responsive table th {\n  text-transform: capitalize;\n  font-size: 14px;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper {\n  display: inline-block;\n  overflow: initial;\n  margin-left: 0;\n  width: auto;\n  position: relative;\n  background: transparent;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox {\n  z-index: 2;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label {\n  font-size: 16px;\n  margin-left: 7px;\n  font-weight: 600;\n  vertical-align: middle;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:after, .table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:before {\n  z-index: 1;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper:after {\n  content: '';\n  width: 20px;\n  height: 20px;\n  background: #fff;\n  left: 0;\n  top: 0;\n  position: absolute;\n}\n.table-format-first .table-responsive table tbody tr td .fa-trash-o {\n  color: #f44336;\n  font-size: 20px;\n}\n.table-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-top: 10px;\n}\n.table-container .heading-container {\n  background: #e0eaec;\n  display: flex;\n  flex-direction: row;\n  font-size: 14px;\n  font-weight: 600;\n  text-align: left;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n}\n.table-container .heading-container .heading-item {\n  width: 10%;\n  text-align: center;\n}\n.table-container .value-outer-container {\n  display: flex;\n  flex-direction: column;\n  min-height: 53vh;\n  max-height: 54vh;\n  overflow-x: hidden;\n  overflow-y: auto;\n  border: 1px solid #ccc;\n}\n.table-container .value-outer-container .value-container {\n  display: flex;\n  flex-direction: row;\n  text-align: left;\n  padding: 4px;\n  font-size: 12px;\n  border-bottom: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n  border-top: none;\n}\n.table-container .value-outer-container .value-container .value-item {\n  width: 10%;\n  text-align: center;\n}\n/*====================main section css===============*/\nmain {\n  padding-left: 150px;\n  box-sizing: border-box;\n  position: relative;\n}\n.common-nav {\n  position: fixed;\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 70px;\n  box-sizing: border-box;\n  z-index: 102;\n}\n.multiselect-wrapper {\n  padding: 5px;\n  border: 1px solid #deeaee;\n  z-index: 100;\n  min-width: 288px;\n  max-height: 350px;\n  overflow: scroll;\n}\n.multiselect-wrapper ::-webkit-scrollbar {\n  display: block;\n}\n.dropdown1::before {\n  position: absolute;\n  content: \"???\";\n  top: 37px;\n  right: 5px;\n  font-size: 10px;\n}\n.headerLink {\n  width: 100%;\n  border-radius: .25rem;\n}\n.row {\n  margin: 0;\n}\n.form-wrapper {\n  background: transparent;\n  margin: 10px 0;\n  align-content: center;\n}\n.form-wrapper label {\n  padding-left: 10px;\n  font-size: 12px;\n  font-weight: 400;\n  color: 84f6;\n  text-decoration: none;\n  text-transform: uppercase;\n  -webkit-font-smoothing: antialiased;\n  width: 100%;\n}\n.form-wrapper .text-label {\n  font-size: 13px;\n}\n.form-wrapper .form-ctrl {\n  background: white;\n  border: 1px solid rgba(119, 119, 119, 0.419608);\n  width: 100%;\n  padding-left: 10px;\n  margin-left: 10px;\n  height: 35px;\n  padding: 0 5px;\n  font-weight: 400;\n  font-size: 14px;\n  color: black;\n}\n.login-tube nav > ul > li .dropdown {\n  min-width: 205px;\n}\n.made-out {\n  font-size: 12px;\n  color: #666666;\n  text-transform: uppercase;\n}\n.made {\n  position: relative;\n  margin-top: 17px;\n  left: 15%;\n  right: -15%;\n  bottom: -27px;\n}\n.sky-form {\n  height: -18px;\n}\n.sky-form ::-webkit-scrollbar {\n  display: block;\n}\n.sky-form .sky-inner {\n  height: 32px;\n  overflow: auto;\n}\n.header {\n  background: #fff;\n  box-shadow: 0 0 2px 2px #dadada;\n  border-radius: 10px;\n}\n.fee-filter {\n  background: #fff;\n  width: 100%;\n}\n.fee-filter.long .filter-btn {\n  padding: 25px 0 0;\n}\n.fee-filter .filter-btn {\n  padding: 10px 0 0;\n}\n.fee-filter .radio-group {\n  padding-top: 30px;\n}\n.fee-filter .radio-group .field-radio-wrapper .form-radio:checked + label:before {\n  content: '';\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  left: 3px;\n  top: 3px;\n}\n.fee-filter .field-wrapper.datePickerBox:after {\n  content: '';\n  background: url(\"/./assets/images/calendar.svg\") no-repeat;\n  position: absolute;\n  right: 20px;\n  top: 23px;\n  width: 21px;\n  height: 21px;\n  z-index: 0;\n}\n.fee-info {\n  width: 100%;\n}\n.fee-info ul {\n  padding: 20px 5px;\n}\n.fee-info ul li {\n  display: inline-block;\n}\n.fee-info ul li.key {\n  font-weight: 400;\n  color: #777;\n  text-transform: capitalize;\n}\n.fee-info ul li.value {\n  font-weight: 600;\n  color: #000;\n}\n.fee-info .form-ctrl {\n  width: 50%;\n  float: right;\n}\n.fee-table {\n  width: 100%;\n  height: 400px;\n  margin-top: 50px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY3NzL2ZvbnRzL2ZvbnRzLnNjc3MiLCJzcmMvYXNzZXRzL2Nzcy9zdHlsZS5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2VTdG9yZS1tb2R1bGUvc2FsZXMtcmVwb3J0cy9zYWxlcy1yZXBvcnRzLmNvbXBvbmVudC5zY3NzIiwic3JjL2Fzc2V0cy9jc3MvY29tbW9uL3ZhcmlhYmxlcy5zY3NzIiwic3JjL2Fzc2V0cy9jc3MvY29tbW9uL2NvbW1vbi5zY3NzIiwic3JjL2Fzc2V0cy9jc3MvY29tbW9uL2dyaWQuc2NzcyIsInNyYy9hc3NldHMvY3NzL2NvbW1vbi9jb21tb24td2ViLnNjc3MiLCJzcmMvYXNzZXRzL2Nzcy9yZXNldC5zY3NzIiwic3JjL2Fzc2V0cy9jc3Mvd3JhcHBlci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxnRkFBWTtBQ3NCWixnRkFBWTtBQ3RCWixnQkFBZ0I7QUNZaEIsdUVBQUE7QUFXQTs7RUFLZ0Isa0JBQWtCO0VBQ2xCLGlCQUFpQjtBRHJCakM7QUNlQTtFQVNnQiwwQkFBMEI7RUFDMUIsZUFBZTtBRHBCL0I7QUNVQTtFQWdCNEIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsV0FBVztFQUNYLGtCQUFrQjtFQUNsQix1QkFBdUI7QUR0Qm5EO0FDQ0E7RUF1QmdDLFVBQVU7QURwQjFDO0FDSEE7RUEwQmdDLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtBRG5CdEQ7QUNWQTtFQWdDb0MsVUFBVTtBRGxCOUM7QUNkQTtFQW9DZ0MsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLE9BQU87RUFDUCxNQUFNO0VBQ04sa0JBQWtCO0FEbEJsRDtBQ3hCQTtFQThDNEIsY0FsRGI7RUFtRGEsZUFBZTtBRGxCM0M7QUMyQkE7RUFDSSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxnQkFBZ0I7QUR4QnBCO0FD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QUd6akJBO0VBQ0ksVUFDSjtBSDJqQkE7QUd6akJBO0VBQ0ksbUJBQ0o7QUgyakJBO0FHempCQTtFQUNJLG1CQUNKO0FIMmpCQTtBR3pqQkE7RUFDSSxVQUNKO0FIMmpCQTtBR3pqQkE7RUFDSSxtQkFDSjtBSDJqQkE7QUd6akJBO0VBQ0ksa0JBQ0o7QUgyakJBO0FHempCQTtFQUNJLFdBQ0o7QUgyakJBO0FHempCQTtFQUNJLG1CQUNKO0FIMmpCQTtBR3pqQkE7RUFDSSxtQkFDSjtBSDJqQkE7QUd6akJBO0VBQ0ksVUFDSjtBSDJqQkE7QUd6akJBO0VBQ0ksbUJBQ0o7QUgyakJBO0FHempCQTtFQUNJLG1CQUNKO0FIMmpCQTtBR3pqQkE7RUFDSSxVQUNKO0FIMmpCQTtBR3pqQkE7RUFDSSxtQkFDSjtBSDJqQkE7QUd6akJBO0VBQ0ksbUJBQ0o7QUgyakJBO0FHempCQTtFQUNJLFVBQ0o7QUgyakJBO0FHempCQTtFQUNJLG1CQUNKO0FIMmpCQTtBR3pqQkE7RUFDSSxrQkFDSjtBSDJqQkE7QUd6akJBO0VBQ0ksV0FDSjtBSDJqQkE7QUd6akJBO0VBQ0ksVUFDSjtBSDJqQkE7QUd6akJBO0VBQ0ksa0JBQ0o7QUgyakJBO0FHempCQTtFQUNJLGtCQUNKO0FIMmpCQTtBR3pqQkE7RUFDSSxTQUNKO0FIMmpCQTtBR3pqQkE7RUFDSSxrQkFDSjtBSDJqQkE7QUd6akJBO0VBQ0ksa0JBQ0o7QUgyakJBO0FHempCQTtFQUNJLFNBQ0o7QUgyakJBO0FHempCQTtFQUNJLGtCQUNKO0FIMmpCQTtBR3pqQkE7RUFDSSxrQkFDSjtBSDJqQkE7QUd6akJBO0VBQ0ksU0FDSjtBSDJqQkE7QUd6akJBO0VBQ0ksa0JBQ0o7QUgyakJBO0FHempCQTtFQUNJLGlCQUNKO0FIMmpCQTtBR3pqQkE7RUFDSSxVQUNKO0FIMmpCQTtBR3pqQkE7RUFDSSxpQkFDSjtBSDJqQkE7QUd6akJBO0VBQ0kseUJBQ0o7QUgyakJBO0FHempCQTtFQUNJLHlCQUNKO0FIMmpCQTtBR3pqQkE7RUFDSSxnQkFDSjtBSDJqQkE7QUd6akJBO0VBQ0kseUJBQ0o7QUgyakJBO0FHempCQTtFQUNJLHlCQUNKO0FIMmpCQTtBR3pqQkE7RUFDSSxnQkFDSjtBSDJqQkE7QUd6akJBO0VBQ0kseUJBQ0o7QUgyakJBO0FHempCQTtFQUNJLHlCQUNKO0FIMmpCQTtBR3pqQkE7RUFDSSxnQkFDSjtBSDJqQkE7QUd6akJBO0VBQ0kseUJBQ0o7QUgyakJBO0FHempCQTtFQUNJLHdCQUNKO0FIMmpCQTtBR3pqQkE7RUFDSSxjQUNKO0FIMmpCQTtBR3pqQkE7RUFDSTs7Ozs7Ozs7Ozs7O0lBWUksV0FDSjtFSDJqQkY7RUcxakJFO0lBQ0ksV0FDSjtFSDJqQkY7RUcxakJFO0lBQ0ksbUJBQ0o7RUgyakJGO0VHMWpCRTtJQUNJLG1CQUNKO0VIMmpCRjtFRzFqQkU7SUFDSSxVQUNKO0VIMmpCRjtFRzFqQkU7SUFDSSxtQkFDSjtFSDJqQkY7RUcxakJFO0lBQ0ksbUJBQ0o7RUgyakJGO0VHMWpCRTtJQUNJLFVBQ0o7RUgyakJGO0VHMWpCRTtJQUNJLG1CQUNKO0VIMmpCRjtFRzFqQkU7SUFDSSxtQkFDSjtFSDJqQkY7RUcxakJFO0lBQ0ksVUFDSjtFSDJqQkY7RUcxakJFO0lBQ0ksbUJBQ0o7RUgyakJGO0VHMWpCRTtJQUNJLGtCQUNKO0VIMmpCRjtFRzFqQkU7SUFDSSxXQUNKO0VIMmpCRjtFRzFqQkU7SUFDSSxtQkFDSjtFSDJqQkY7RUcxakJFO0lBQ0ksbUJBQ0o7RUgyakJGO0VHMWpCRTtJQUNJLFVBQ0o7RUgyakJGO0VHMWpCRTtJQUNJLG1CQUNKO0VIMmpCRjtFRzFqQkU7SUFDSSxtQkFDSjtFSDJqQkY7RUcxakJFO0lBQ0ksVUFDSjtFSDJqQkY7RUcxakJFO0lBQ0ksbUJBQ0o7RUgyakJGO0VHMWpCRTtJQUNJLG1CQUNKO0VIMmpCRjtFRzFqQkU7SUFDSSxVQUNKO0VIMmpCRjtFRzFqQkU7SUFDSSxtQkFDSjtFSDJqQkY7RUcxakJFO0lBQ0ksa0JBQ0o7RUgyakJGO0VHMWpCRTtJQUNJLFdBQ0o7RUgyakJGO0VHMWpCRTtJQUNJLFVBQ0o7RUgyakJGO0VHMWpCRTtJQUNJLGtCQUNKO0VIMmpCRjtFRzFqQkU7SUFDSSxrQkFDSjtFSDJqQkY7RUcxakJFO0lBQ0ksU0FDSjtFSDJqQkY7RUcxakJFO0lBQ0ksa0JBQ0o7RUgyakJGO0VHMWpCRTtJQUNJLGtCQUNKO0VIMmpCRjtFRzFqQkU7SUFDSSxTQUNKO0VIMmpCRjtFRzFqQkU7SUFDSSxrQkFDSjtFSDJqQkY7RUcxakJFO0lBQ0ksa0JBQ0o7RUgyakJGO0VHMWpCRTtJQUNJLFNBQ0o7RUgyakJGO0VHMWpCRTtJQUNJLGtCQUNKO0VIMmpCRjtFRzFqQkU7SUFDSSxpQkFDSjtFSDJqQkY7RUcxakJFO0lBQ0ksVUFDSjtFSDJqQkY7RUcxakJFO0lBQ0ksaUJBQ0o7RUgyakJGO0VHMWpCRTtJQUNJLHlCQUNKO0VIMmpCRjtFRzFqQkU7SUFDSSx5QkFDSjtFSDJqQkY7RUcxakJFO0lBQ0ksZ0JBQ0o7RUgyakJGO0VHMWpCRTtJQUNJLHlCQUNKO0VIMmpCRjtFRzFqQkU7SUFDSSx5QkFDSjtFSDJqQkY7RUcxakJFO0lBQ0ksZ0JBQ0o7RUgyakJGO0VHMWpCRTtJQUNJLHlCQUNKO0VIMmpCRjtFRzFqQkU7SUFDSSx5QkFDSjtFSDJqQkY7RUcxakJFO0lBQ0ksZ0JBQ0o7RUgyakJGO0VHMWpCRTtJQUNJLHlCQUNKO0VIMmpCRjtFRzFqQkU7SUFDSSx3QkFDSjtFSDJqQkY7RUcxakJFO0lBQ0ksY0FDSjtFSDJqQkY7QUFDRjtBR3pqQkE7RUFDSTs7Ozs7Ozs7Ozs7O0lBWUksV0FDSjtFSDJqQkY7RUcxakJFO0lBQ0ksV0FDSjtFSDJqQkY7RUcxakJFO0lBQ0ksbUJBQ0o7RUgyakJGO0VHMWpCRTtJQUNJLG1CQUNKO0VIMmpCRjtFRzFqQkU7SUFDSSxVQUNKO0VIMmpCRjtFRzFqQkU7SUFDSSxtQkFDSjtFSDJqQkY7RUcxakJFO0lBQ0ksbUJBQ0o7RUgyakJGO0VHMWpCRTtJQUNJLFVBQ0o7RUgyakJGO0VHMWpCRTtJQUNJLG1CQUNKO0VIMmpCRjtFRzFqQkU7SUFDSSxtQkFDSjtFSDJqQkY7RUcxakJFO0lBQ0ksVUFDSjtFSDJqQkY7RUcxakJFO0lBQ0ksbUJBQ0o7RUgyakJGO0VHMWpCRTtJQUNJLGtCQUNKO0VIMmpCRjtFRzFqQkU7SUFDSSxXQUNKO0VIMmpCRjtFRzFqQkU7SUFDSSxtQkFDSjtFSDJqQkY7RUcxakJFO0lBQ0ksbUJBQ0o7RUgyakJGO0VHMWpCRTtJQUNJLFVBQ0o7RUgyakJGO0VHMWpCRTtJQUNJLG1CQUNKO0VIMmpCRjtFRzFqQkU7SUFDSSxtQkFDSjtFSDJqQkY7RUcxakJFO0lBQ0ksVUFDSjtFSDJqQkY7RUcxakJFO0lBQ0ksbUJBQ0o7RUgyakJGO0VHMWpCRTtJQUNJLG1CQUNKO0VIMmpCRjtFRzFqQkU7SUFDSSxVQUNKO0VIMmpCRjtFRzFqQkU7SUFDSSxtQkFDSjtFSDJqQkY7RUcxakJFO0lBQ0ksa0JBQ0o7RUgyakJGO0VHMWpCRTtJQUNJLFdBQ0o7RUgyakJGO0VHMWpCRTtJQUNJLFVBQ0o7RUgyakJGO0VHMWpCRTtJQUNJLGtCQUNKO0VIMmpCRjtFRzFqQkU7SUFDSSxrQkFDSjtFSDJqQkY7RUcxakJFO0lBQ0ksU0FDSjtFSDJqQkY7RUcxakJFO0lBQ0ksa0JBQ0o7RUgyakJGO0VHMWpCRTtJQUNJLGtCQUNKO0VIMmpCRjtFRzFqQkU7SUFDSSxTQUNKO0VIMmpCRjtFRzFqQkU7SUFDSSxrQkFDSjtFSDJqQkY7RUcxakJFO0lBQ0ksa0JBQ0o7RUgyakJGO0VHMWpCRTtJQUNJLFNBQ0o7RUgyakJGO0VHMWpCRTtJQUNJLGtCQUNKO0VIMmpCRjtFRzFqQkU7SUFDSSxpQkFDSjtFSDJqQkY7RUcxakJFO0lBQ0ksVUFDSjtFSDJqQkY7RUcxakJFO0lBQ0ksaUJBQ0o7RUgyakJGO0VHMWpCRTtJQUNJLHlCQUNKO0VIMmpCRjtFRzFqQkU7SUFDSSx5QkFDSjtFSDJqQkY7RUcxakJFO0lBQ0ksZ0JBQ0o7RUgyakJGO0VHMWpCRTtJQUNJLHlCQUNKO0VIMmpCRjtFRzFqQkU7SUFDSSx5QkFDSjtFSDJqQkY7RUcxakJFO0lBQ0ksZ0JBQ0o7RUgyakJGO0VHMWpCRTtJQUNJLHlCQUNKO0VIMmpCRjtFRzFqQkU7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RUc5b0ZFO0lBQ0ksbUJBQ0o7RUgrb0ZGO0VHOW9GRTtJQUNJLFVBQ0o7RUgrb0ZGO0VHOW9GRTtJQUNJLG1CQUNKO0VIK29GRjtFRzlvRkU7SUFDSSxtQkFDSjtFSCtvRkY7RUc5b0ZFO0lBQ0ksVUFDSjtFSCtvRkY7RUc5b0ZFO0lBQ0ksbUJBQ0o7RUgrb0ZGO0VHOW9GRTtJQUNJLG1CQUNKO0VIK29GRjtFRzlvRkU7SUFDSSxVQUNKO0VIK29GRjtFRzlvRkU7SUFDSSxtQkFDSjtFSCtvRkY7RUc5b0ZFO0lBQ0ksa0JBQ0o7RUgrb0ZGO0VHOW9GRTtJQUNJLFdBQ0o7RUgrb0ZGO0VHOW9GRTtJQUNJLFVBQ0o7RUgrb0ZGO0VHOW9GRTtJQUNJLGtCQUNKO0VIK29GRjtFRzlvRkU7SUFDSSxrQkFDSjtFSCtvRkY7RUc5b0ZFO0lBQ0ksU0FDSjtFSCtvRkY7RUc5b0ZFO0lBQ0ksa0JBQ0o7RUgrb0ZGO0VHOW9GRTtJQUNJLGtCQUNKO0VIK29GRjtFRzlvRkU7SUFDSSxTQUNKO0VIK29GRjtFRzlvRkU7SUFDSSxrQkFDSjtFSCtvRkY7RUc5b0ZFO0lBQ0ksa0JBQ0o7RUgrb0ZGO0VHOW9GRTtJQUNJLFNBQ0o7RUgrb0ZGO0VHOW9GRTtJQUNJLGtCQUNKO0VIK29GRjtFRzlvRkU7SUFDSSxpQkFDSjtFSCtvRkY7RUc5b0ZFO0lBQ0ksVUFDSjtFSCtvRkY7RUc5b0ZFO0lBQ0ksaUJBQ0o7RUgrb0ZGO0VHOW9GRTtJQUNJLHlCQUNKO0VIK29GRjtFRzlvRkU7SUFDSSx5QkFDSjtFSCtvRkY7RUc5b0ZFO0lBQ0ksZ0JBQ0o7RUgrb0ZGO0VHOW9GRTtJQUNJLHlCQUNKO0VIK29GRjtFRzlvRkU7SUFDSSx5QkFDSjtFSCtvRkY7RUc5b0ZFO0lBQ0ksZ0JBQ0o7RUgrb0ZGO0VHOW9GRTtJQUNJLHlCQUNKO0VIK29GRjtFRzlvRkU7SUFDSSx5QkFDSjtFSCtvRkY7RUc5b0ZFO0lBQ0ksZ0JBQ0o7RUgrb0ZGO0VHOW9GRTtJQUNJLHlCQUNKO0VIK29GRjtFRzlvRkU7SUFDSSx3QkFDSjtFSCtvRkY7RUc5b0ZFO0lBQ0ksY0FDSjtFSCtvRkY7QUFDRjtBRzdvRkE7RUFDSTs7Ozs7Ozs7Ozs7O0lBWUksV0FDSjtFSCtvRkY7RUc5b0ZFO0lBQ0ksV0FDSjtFSCtvRkY7RUc5b0ZFO0lBQ0ksbUJBQ0o7RUgrb0ZGO0VHOW9GRTtJQUNJLG1CQUNKO0VIK29GRjtFRzlvRkU7SUFDSSxVQUNKO0VIK29GRjtFRzlvRkU7SUFDSSxtQkFDSjtFSCtvRkY7RUc5b0ZFO0lBQ0ksbUJBQ0o7RUgrb0ZGO0VHOW9GRTtJQUNJLFVBQ0o7RUgrb0ZGO0VHOW9GRTtJQUNJLG1CQUNKO0VIK29GRjtFRzlvRkU7SUFDSSxtQkFDSjtFSCtvRkY7RUc5b0ZFO0lBQ0ksVUFDSjtFSCtvRkY7RUc5b0ZFO0lBQ0ksbUJBQ0o7RUgrb0ZGO0VHOW9GRTtJQUNJLGtCQUNKO0VIK29GRjtFRzlvRkU7SUFDSSxXQUNKO0VIK29GRjtFRzlvRkU7SUFDSSxtQkFDSjtFSCtvRkY7RUc5b0ZFO0lBQ0ksbUJBQ0o7RUgrb0ZGO0VHOW9GRTtJQUNJLFVBQ0o7RUgrb0ZGO0VHOW9GRTtJQUNJLG1CQUNKO0VIK29GRjtFRzlvRkU7SUFDSSxtQkFDSjtFSCtvRkY7RUc5b0ZFO0lBQ0ksVUFDSjtFSCtvRkY7RUc5b0ZFO0lBQ0ksbUJBQ0o7RUgrb0ZGO0VHOW9GRTtJQUNJLG1CQUNKO0VIK29GRjtFRzlvRkU7SUFDSSxVQUNKO0VIK29GRjtFRzlvRkU7SUFDSSxtQkFDSjtFSCtvRkY7RUc5b0ZFO0lBQ0ksa0JBQ0o7RUgrb0ZGO0VHOW9GRTtJQUNJLFdBQ0o7RUgrb0ZGO0VHOW9GRTtJQUNJLFVBQ0o7RUgrb0ZGO0VHOW9GRTtJQUNJLGtCQUNKO0VIK29GRjtFRzlvRkU7SUFDSSxrQkFDSjtFSCtvRkY7RUc5b0ZFO0lBQ0ksU0FDSjtFSCtvRkY7RUc5b0ZFO0lBQ0ksa0JBQ0o7RUgrb0ZGO0VHOW9GRTtJQUNJLGtCQUNKO0VIK29GRjtFRzlvRkU7SUFDSSxTQUNKO0VIK29GRjtFRzlvRkU7SUFDSSxrQkFDSjtFSCtvRkY7RUc5b0ZFO0lBQ0ksa0JBQ0o7RUgrb0ZGO0VHOW9GRTtJQUNJLFNBQ0o7RUgrb0ZGO0VHOW9GRTtJQUNJLGtCQUNKO0VIK29GRjtFRzlvRkU7SUFDSSxpQkFDSjtFSCtvRkY7RUc5b0ZFO0lBQ0ksVUFDSjtFSCtvRkY7RUc5b0ZFO0lBQ0ksaUJBQ0o7RUgrb0ZGO0VHOW9GRTtJQUNJLHlCQUNKO0VIK29GRjtFRzlvRkU7SUFDSSx5QkFDSjtFSCtvRkY7RUc5b0ZFO0lBQ0ksZ0JBQ0o7RUgrb0ZGO0VHOW9GRTtJQUNJLHlCQUNKO0VIK29GRjtFRzlvRkU7SUFDSSx5QkFDSjtFSCtvRkY7RUc5b0ZFO0lBQ0ksZ0JBQ0o7RUgrb0ZGO0VHOW9GRTtJQUNJLHlCQUNKO0VIK29GRjtFRzlvRkU7SUFDSSx5QkFDSjtFSCtvRkY7RUc5b0ZFO0lBQ0ksZ0JBQ0o7RUgrb0ZGO0VHOW9GRTtJQUNJLHlCQUNKO0VIK29GRjtFRzlvRkU7SUFDSSx3QkFDSjtFSCtvRkY7RUc5b0ZFO0lBQ0ksY0FDSjtFSCtvRkY7QUFDRjtBRzdvRkE7RUFDSTs7Ozs7Ozs7Ozs7O0lBWUksV0FDSjtFSCtvRkY7RUc5b0ZFO0lBQ0ksV0FDSjtFSCtvRkY7RUc5b0ZFO0lBQ0ksbUJBQ0o7RUgrb0ZGO0VHOW9GRTtJQUNJLG1CQUNKO0VIK29GRjtFRzlvRkU7SUFDSSxVQUNKO0VIK29GRjtFRzlvRkU7SUFDSSxtQkFDSjtFSCtvRkY7RUc5b0ZFO0lBQ0ksbUJBQ0o7RUgrb0ZGO0VHOW9GRTtJQUNJLFVBQ0o7RUgrb0ZGO0VHOW9GRTtJQUNJLG1CQUNKO0VIK29GRjtFRzlvRkU7SUFDSSxtQkFDSjtFSCtvRkY7RUc5b0ZFO0lBQ0ksVUFDSjtFSCtvRkY7RUc5b0ZFO0lBQ0ksbUJBQ0o7RUgrb0ZGO0VHOW9GRTtJQUNJLGtCQUNKO0VIK29GRjtFRzlvRkU7SUFDSSxXQUNKO0VIK29GRjtFRzlvRkU7SUFDSSxtQkFDSjtFSCtvRkY7RUc5b0ZFO0lBQ0ksbUJBQ0o7RUgrb0ZGO0VHOW9GRTtJQUNJLFVBQ0o7RUgrb0ZGO0VHOW9GRTtJQUNJLG1CQUNKO0VIK29GRjtFRzlvRkU7SUFDSSxtQkFDSjtFSCtvRkY7RUc5b0ZFO0lBQ0ksVUFDSjtFSCtvRkY7RUc5b0ZFO0lBQ0ksbUJBQ0o7RUgrb0ZGO0VHOW9GRTtJQUNJLG1CQUNKO0VIK29GRjtFRzlvRkU7SUFDSSxVQUNKO0VIK29GRjtFRzlvRkU7SUFDSSxtQkFDSjtFSCtvRkY7RUc5b0ZFO0lBQ0ksa0JBQ0o7RUgrb0ZGO0VHOW9GRTtJQUNJLFdBQ0o7RUgrb0ZGO0VHOW9GRTtJQUNJLFVBQ0o7RUgrb0ZGO0VHOW9GRTtJQUNJLGtCQUNKO0VIK29GRjtFRzlvRkU7SUFDSSxrQkFDSjtFSCtvRkY7RUc5b0ZFO0lBQ0ksU0FDSjtFSCtvRkY7RUc5b0ZFO0lBQ0ksa0JBQ0o7RUgrb0ZGO0VHOW9GRTtJQUNJLGtCQUNKO0VIK29GRjtFRzlvRkU7SUFDSSxTQUNKO0VIK29GRjtFRzlvRkU7SUFDSSxrQkFDSjtFSCtvRkY7RUc5b0ZFO0lBQ0ksa0JBQ0o7RUgrb0ZGO0VHOW9GRTtJQUNJLFNBQ0o7RUgrb0ZGO0VHOW9GRTtJQUNJLGtCQUNKO0VIK29GRjtFRzlvRkU7SUFDSSxpQkFDSjtFSCtvRkY7RUc5b0ZFO0lBQ0ksVUFDSjtFSCtvRkY7RUc5b0ZFO0lBQ0ksaUJBQ0o7RUgrb0ZGO0VHOW9GRTtJQUNJLHlCQUNKO0VIK29GRjtFRzlvRkU7SUFDSSx5QkFDSjtFSCtvRkY7RUc5b0ZFO0lBQ0ksZ0JBQ0o7RUgrb0ZGO0VHOW9GRTtJQUNJLHlCQUNKO0VIK29GRjtFRzlvRkU7SUFDSSx5QkFDSjtFSCtvRkY7RUc5b0ZFO0lBQ0ksZ0JBQ0o7RUgrb0ZGO0VHOW9GRTtJQUNJLHlCQUNKO0VIK29GRjtFRzlvRkU7SUFDSSx5QkFDSjtFSCtvRkY7RUc5b0ZFO0lBQ0ksZ0JBQ0o7RUgrb0ZGO0VHOW9GRTtJQUNJLHlCQUNKO0VIK29GRjtFRzlvRkU7SUFDSSx3QkFDSjtFSCtvRkY7RUc5b0ZFO0lBQ0ksY0FDSjtFSCtvRkY7QUFDRjtBRzdvRkE7Ozs7Ozs7O0VBUUksWUFBWTtFQUNaLGNBQ0o7QUgrb0ZBO0FHN29GQTs7OztFQUlJLFdBQ0o7QUgrb0ZBO0FD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QUNKO0FINnRKQTtBRzN0SkE7RUFDSSxtQkFDSjtBSDZ0SkE7QUczdEpBO0VBQ0ksVUFDSjtBSDZ0SkE7QUczdEpBO0VBQ0ksbUJBQ0o7QUg2dEpBO0FHM3RKQTtFQUNJLG1CQUNKO0FINnRKQTtBRzN0SkE7RUFDSSxVQUNKO0FINnRKQTtBRzN0SkE7RUFDSSxtQkFDSjtBSDZ0SkE7QUczdEpBO0VBQ0ksa0JBQ0o7QUg2dEpBO0FHM3RKQTtFQUNJLFdBQ0o7QUg2dEpBO0FHM3RKQTtFQUNJLFVBQ0o7QUg2dEpBO0FHM3RKQTtFQUNJLGtCQUNKO0FINnRKQTtBRzN0SkE7RUFDSSxrQkFDSjtBSDZ0SkE7QUczdEpBO0VBQ0ksU0FDSjtBSDZ0SkE7QUczdEpBO0VBQ0ksa0JBQ0o7QUg2dEpBO0FHM3RKQTtFQUNJLGtCQUNKO0FINnRKQTtBRzN0SkE7RUFDSSxTQUNKO0FINnRKQTtBRzN0SkE7RUFDSSxrQkFDSjtBSDZ0SkE7QUczdEpBO0VBQ0ksa0JBQ0o7QUg2dEpBO0FHM3RKQTtFQUNJLFNBQ0o7QUg2dEpBO0FHM3RKQTtFQUNJLGtCQUNKO0FINnRKQTtBRzN0SkE7RUFDSSxpQkFDSjtBSDZ0SkE7QUczdEpBO0VBQ0ksVUFDSjtBSDZ0SkE7QUczdEpBO0VBQ0ksaUJBQ0o7QUg2dEpBO0FHM3RKQTtFQUNJLHlCQUNKO0FINnRKQTtBRzN0SkE7RUFDSSx5QkFDSjtBSDZ0SkE7QUczdEpBO0VBQ0ksZ0JBQ0o7QUg2dEpBO0FHM3RKQTtFQUNJLHlCQUNKO0FINnRKQTtBRzN0SkE7RUFDSSx5QkFDSjtBSDZ0SkE7QUczdEpBO0VBQ0ksZ0JBQ0o7QUg2dEpBO0FHM3RKQTtFQUNJLHlCQUNKO0FINnRKQTtBRzN0SkE7RUFDSSx5QkFDSjtBSDZ0SkE7QUczdEpBO0VBQ0ksZ0JBQ0o7QUg2dEpBO0FHM3RKQTtFQUNJLHlCQUNKO0FINnRKQTtBRzN0SkE7RUFDSSx3QkFDSjtBSDZ0SkE7QUczdEpBO0VBQ0ksY0FDSjtBSDZ0SkE7QUczdEpBO0VBQ0k7Ozs7Ozs7Ozs7OztJQVlJLFdBQ0o7RUg2dEpGO0VHNXRKRTtJQUNJLFdBQ0o7RUg2dEpGO0VHNXRKRTtJQUNJLG1CQUNKO0VINnRKRjtFRzV0SkU7SUFDSSxtQkFDSjtFSDZ0SkY7RUc1dEpFO0lBQ0ksVUFDSjtFSDZ0SkY7RUc1dEpFO0lBQ0ksbUJBQ0o7RUg2dEpGO0VHNXRKRTtJQUNJLG1CQUNKO0VINnRKRjtFRzV0SkU7SUFDSSxVQUNKO0VINnRKRjtFRzV0SkU7SUFDSSxtQkFDSjtFSDZ0SkY7RUc1dEpFO0lBQ0ksbUJBQ0o7RUg2dEpGO0VHNXRKRTtJQUNJLFVBQ0o7RUg2dEpGO0VHNXRKRTtJQUNJLG1CQUNKO0VINnRKRjtFRzV0SkU7SUFDSSxrQkFDSjtFSDZ0SkY7RUc1dEpFO0lBQ0ksV0FDSjtFSDZ0SkY7RUc1dEpFO0lBQ0ksbUJBQ0o7RUg2dEpGO0VHNXRKRTtJQUNJLG1CQUNKO0VINnRKRjtFRzV0SkU7SUFDSSxVQUNKO0VINnRKRjtFRzV0SkU7SUFDSSxtQkFDSjtFSDZ0SkY7RUc1dEpFO0lBQ0ksbUJBQ0o7RUg2dEpGO0VHNXRKRTtJQUNJLFVBQ0o7RUg2dEpGO0VHNXRKRTtJQUNJLG1CQUNKO0VINnRKRjtFRzV0SkU7SUFDSSxtQkFDSjtFSDZ0SkY7RUc1dEpFO0lBQ0ksVUFDSjtFSDZ0SkY7RUc1dEpFO0lBQ0ksbUJBQ0o7RUg2dEpGO0VHNXRKRTtJQUNJLGtCQUNKO0VINnRKRjtFRzV0SkU7SUFDSSxXQUNKO0VINnRKRjtFRzV0SkU7SUFDSSxVQUNKO0VINnRKRjtFRzV0SkU7SUFDSSxrQkFDSjtFSDZ0SkY7RUc1dEpFO0lBQ0ksa0JBQ0o7RUg2dEpGO0VHNXRKRTtJQUNJLFNBQ0o7RUg2dEpGO0VHNXRKRTtJQUNJLGtCQUNKO0VINnRKRjtFRzV0SkU7SUFDSSxrQkFDSjtFSDZ0SkY7RUc1dEpFO0lBQ0ksU0FDSjtFSDZ0SkY7RUc1dEpFO0lBQ0ksa0JBQ0o7RUg2dEpGO0VHNXRKRTtJQUNJLGtCQUNKO0VINnRKRjtFRzV0SkU7SUFDSSxTQUNKO0VINnRKRjtFRzV0SkU7SUFDSSxrQkFDSjtFSDZ0SkY7RUc1dEpFO0lBQ0ksaUJBQ0o7RUg2dEpGO0VHNXRKRTtJQUNJLFVBQ0o7RUg2dEpGO0VHNXRKRTtJQUNJLGlCQUNKO0VINnRKRjtFRzV0SkU7SUFDSSx5QkFDSjtFSDZ0SkY7RUc1dEpFO0lBQ0kseUJBQ0o7RUg2dEpGO0VHNXRKRTtJQUNJLGdCQUNKO0VINnRKRjtFRzV0SkU7SUFDSSx5QkFDSjtFSDZ0SkY7RUc1dEpFO0lBQ0kseUJBQ0o7RUg2dEpGO0VHNXRKRTtJQUNJLGdCQUNKO0VINnRKRjtFRzV0SkU7SUFDSSx5QkFDSjtFSDZ0SkY7RUc1dEpFO0lBQ0kseUJBQ0o7RUg2dEpGO0VHNXRKRTtJQUNJLGdCQUNKO0VINnRKRjtFRzV0SkU7SUFDSSx5QkFDSjtFSDZ0SkY7RUc1dEpFO0lBQ0ksd0JBQ0o7RUg2dEpGO0VHNXRKRTtJQUNJLGNBQ0o7RUg2dEpGO0FBQ0Y7QUczdEpBO0VBQ0k7Ozs7Ozs7Ozs7OztJQVlJLFdBQ0o7RUg2dEpGO0VHNXRKRTtJQUNJLFdBQ0o7RUg2dEpGO0VHNXRKRTtJQUNJLG1CQUNKO0VINnRKRjtFRzV0SkU7SUFDSSxtQkFDSjtFSDZ0SkY7RUc1dEpFO0lBQ0ksVUFDSjtFSDZ0SkY7RUc1dEpFO0lBQ0ksbUJBQ0o7RUg2dEpGO0VHNXRKRTtJQUNJLG1CQUNKO0VINnRKRjtFRzV0SkU7SUFDSSxVQUNKO0VINnRKRjtFRzV0SkU7SUFDSSxtQkFDSjtFSDZ0SkY7RUc1dEpFO0lBQ0ksbUJBQ0o7RUg2dEpGO0VHNXRKRTtJQUNJLFVBQ0o7RUg2dEpGO0VHNXRKRTtJQUNJLG1CQUNKO0VINnRKRjtFRzV0SkU7SUFDSSxrQkFDSjtFSDZ0SkY7RUc1dEpFO0lBQ0ksV0FDSjtFSDZ0SkY7RUc1dEpFO0lBQ0ksbUJBQ0o7RUg2dEpGO0VHNXRKRTtJQUNJLG1CQUNKO0VINnRKRjtFRzV0SkU7SUFDSSxVQUNKO0VINnRKRjtFRzV0SkU7SUFDSSxtQkFDSjtFSDZ0SkY7RUc1dEpFO0lBQ0ksbUJBQ0o7RUg2dEpGO0VHNXRKRTtJQUNJLFVBQ0o7RUg2dEpGO0VHNXRKRTtJQUNJLG1CQUNKO0VINnRKRjtFRzV0SkU7SUFDSSxtQkFDSjtFSDZ0SkY7RUc1dEpFO0lBQ0ksVUFDSjtFSDZ0SkY7RUc1dEpFO0lBQ0ksbUJBQ0o7RUg2dEpGO0VHNXRKRTtJQUNJLGtCQUNKO0VINnRKRjtFRzV0SkU7SUFDSSxXQUNKO0VINnRKRjtFRzV0SkU7SUFDSSxVQUNKO0VINnRKRjtFRzV0SkU7SUFDSSxrQkFDSjtFSDZ0SkY7RUc1dEpFO0lBQ0ksa0JBQ0o7RUg2dEpGO0VHNXRKRTtJQUNJLFNBQ0o7RUg2dEpGO0VHNXRKRTtJQUNJLGtCQUNKO0VINnRKRjtFRzV0SkU7SUFDSSxrQkFDSjtFSDZ0SkY7RUc1dEpFO0lBQ0ksU0FDSjtFSDZ0SkY7RUc1dEpFO0lBQ0ksa0JBQ0o7RUg2dEpGO0VHNXRKRTtJQUNJLGtCQUNKO0VINnRKRjtFRzV0SkU7SUFDSSxTQUNKO0VINnRKRjtFRzV0SkU7SUFDSSxrQkFDSjtFSDZ0SkY7RUc1dEpFO0lBQ0ksaUJBQ0o7RUg2dEpGO0VHNXRKRTtJQUNJLFVBQ0o7RUg2dEpGO0VHNXRKRTtJQUNJLGlCQUNKO0VINnRKRjtFRzV0SkU7SUFDSSx5QkFDSjtFSDZ0SkY7RUc1dEpFO0lBQ0kseUJBQ0o7RUg2dEpGO0VHNXRKRTtJQUNJLGdCQUNKO0VINnRKRjtFRzV0SkU7SUFDSSx5QkFDSjtFSDZ0SkY7RUc1dEpFO0lBQ0kseUJBQ0o7RUg2dEpGO0VHNXRKRTtJQUNJLGdCQUNKO0VINnRKRjtFRzV0SkU7SUFDSSx5QkFDSjtFSDZ0SkY7RUc1dEpFO0lBQ0kseUJBQ0o7RUg2dEpGO0VHNXRKRTtJQUNJLGdCQUNKO0VINnRKRjtFRzV0SkU7SUFDSSx5QkFDSjtFSDZ0SkY7RUc1dEpFO0lBQ0ksd0JBQ0o7RUg2dEpGO0VHNXRKRTtJQUNJLGNBQ0o7RUg2dEpGO0FBQ0Y7QUczdEpBO0VBQ0k7Ozs7Ozs7Ozs7OztJQVlJLFdBQ0o7RUg2dEpGO0VHNXRKRTtJQUNJLFdBQ0o7RUg2dEpGO0VHNXRKRTtJQUNJLG1CQUNKO0VINnRKRjtFRzV0SkU7SUFDSSxtQkFDSjtFSDZ0SkY7RUc1dEpFO0lBQ0ksVUFDSjtFSDZ0SkY7RUc1dEpFO0lBQ0ksbUJBQ0o7RUg2dEpGO0VHNXRKRTtJQUNJLG1CQUNKO0VINnRKRjtFRzV0SkU7SUFDSSxVQUNKO0VINnRKRjtFRzV0SkU7SUFDSSxtQkFDSjtFSDZ0SkY7RUc1dEpFO0lBQ0ksbUJBQ0o7RUg2dEpGO0VHNXRKRTtJQUNJLFVBQ0o7RUg2dEpGO0VHNXRKRTtJQUNJLG1CQUNKO0VINnRKRjtFRzV0SkU7SUFDSSxrQkFDSjtFSDZ0SkY7RUc1dEpFO0lBQ0ksV0FDSjtFSDZ0SkY7RUc1dEpFO0lBQ0ksbUJBQ0o7RUg2dEpGO0VHNXRKRTtJQUNJLG1CQUNKO0VINnRKRjtFRzV0SkU7SUFDSSxVQUNKO0VINnRKRjtFRzV0SkU7SUFDSSxtQkFDSjtFSDZ0SkY7RUc1dEpFO0lBQ0ksbUJBQ0o7RUg2dEpGO0VHNXRKRTtJQUNJLFVBQ0o7RUg2dEpGO0VHNXRKRTtJQUNJLG1CQUNKO0VINnRKRjtFRzV0SkU7SUFDSSxtQkFDSjtFSDZ0SkY7RUc1dEpFO0lBQ0ksVUFDSjtFSDZ0SkY7RUc1dEpFO0lBQ0ksbUJBQ0o7RUg2dEpGO0VHNXRKRTtJQUNJLGtCQUNKO0VINnRKRjtFRzV0SkU7SUFDSSxXQUNKO0VINnRKRjtFRzV0SkU7SUFDSSxVQUNKO0VINnRKRjtFRzV0SkU7SUFDSSxrQkFDSjtFSDZ0SkY7RUc1dEpFO0lBQ0ksa0JBQ0o7RUg2dEpGO0VHNXRKRTtJQUNJLFNBQ0o7RUg2dEpGO0VHNXRKRTtJQUNJLGtCQUNKO0VINnRKRjtFRzV0SkU7SUFDSSxrQkFDSjtFSDZ0SkY7RUc1dEpFO0lBQ0ksU0FDSjtFSDZ0SkY7RUc1dEpFO0lBQ0ksa0JBQ0o7RUg2dEpGO0VHNXRKRTtJQUNJLGtCQUNKO0VINnRKRjtFRzV0SkU7SUFDSSxTQUNKO0VINnRKRjtFRzV0SkU7SUFDSSxrQkFDSjtFSDZ0SkY7RUc1dEpFO0lBQ0ksaUJBQ0o7RUg2dEpGO0VHNXRKRTtJQUNJLFVBQ0o7RUg2dEpGO0VHNXRKRTtJQUNJLGlCQUNKO0VINnRKRjtFRzV0SkU7SUFDSSx5QkFDSjtFSDZ0SkY7RUc1dEpFO0lBQ0ks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K0JBQStCO0VBQy9CLG1CQUFtQjtBQXc2T3JCO0FBcjZPQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0FBdzZPYjtBQTE2T0E7RUFNTSxpQkFBaUI7QUF3Nk92QjtBQTk2T0E7RUFXSSxpQkFBaUI7QUF1Nk9yQjtBQWw3T0E7RUFlSSxpQkFBaUI7QUF1Nk9yQjtBQXQ3T0E7RUFrQk0sV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxRQUFRO0FBdzZPZDtBQS83T0E7RUE4QlEsV0FBVztFQUNYLDBEQUEwRDtFQUMxRCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFNBQVM7RUFDVCxXQUFXO0VBQ1gsWUFBWTtFQUNaLFVBQVU7QUFxNk9sQjtBQS81T0E7RUFDRSxXQUFXO0FBazZPYjtBQW42T0E7RUFJSSxpQkFBaUI7QUFtNk9yQjtBQXY2T0E7RUFPTSxxQkFBcUI7QUFvNk8zQjtBQTM2T0E7RUFVUSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLDBCQUEwQjtBQXE2T2xDO0FBajdPQTtFQWdCUSxnQkFBZ0I7RUFDaEIsV0FBVztBQXE2T25CO0FBdDdPQTtFQXVCSSxVQUFVO0VBQ1YsWUFBWTtBQW02T2hCO0FBLzVPQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsZ0JBQWdCO0FBazZPbEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2VTdG9yZS1tb2R1bGUvc2FsZXMtcmVwb3J0cy9zYWxlcy1yZXBvcnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnM6NDAwLDYwMCw3MDAsODAwJyk7XG4vKiBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2Fucyc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgc3JjOiBsb2NhbCgnT3BlbiBTYW5zIEJvbGQnKSwgbG9jYWwoJ09wZW5TYW5zLUJvbGQnKSwgdXJsKGh0dHBzOi8vdGhlbWVzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9zdGF0aWMvZm9udHMvb3BlbnNhbnMvdjYvazNrNzAyWk9LaUxKYzNXVmp1cGx6SGhDVU9Hejd2WUdoNjgwbEdoLXVYTS53b2ZmKSBmb3JtYXQoJ3dvZmYnKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIHNyYzogbG9jYWwoJ09wZW4gU2FucyBMaWdodCcpLCBsb2NhbCgnT3BlblNhbnMtTGlnaHQnKSwgdXJsKGh0dHBzOi8vdGhlbWVzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9zdGF0aWMvZm9udHMvb3BlbnNhbnMvdjYvRFhJMU9SSENwc1FtM1ZwNm1Yb2FUWGhDVU9Hejd2WUdoNjgwbEdoLXVYTS53b2ZmKSBmb3JtYXQoJ3dvZmYnKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHNyYzogbG9jYWwoJ09wZW4gU2FucyBTZW1pYm9sZCcpLCBsb2NhbCgnT3BlblNhbnMtU2VtaWJvbGQnKSwgdXJsKGh0dHBzOi8vdGhlbWVzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9zdGF0aWMvZm9udHMvb3BlbnNhbnMvdjYvTVRQX3lTVUpIX2JuNDhWQkc4c05TbmhDVU9Hejd2WUdoNjgwbEdoLXVYTS53b2ZmKSBmb3JtYXQoJ3dvZmYnKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIHNyYzogbG9jYWwoJ09wZW4gU2FucycpLCBsb2NhbCgnT3BlblNhbnMnKSwgdXJsKGh0dHBzOi8vdGhlbWVzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9zdGF0aWMvZm9udHMvb3BlbnNhbnMvdjYvY0paS2VPdUJybjRrRVJ4cXRhVUgzVDhFMGk3S1puLUVQbnlvM0hadTdrdy53b2ZmKSBmb3JtYXQoJ3dvZmYnKTtcbn0gKi9cbiIsIi8vICBpbXBvcnQgVkFSSUFCTEVTXG5AaW1wb3J0IFwiLi4vY3NzL2NvbW1vbi92YXJpYWJsZXNcIjtcblxuLyogSW1wb3J0IEZvbnQgQ1NTKi9cblxuQGltcG9ydCBcIi4uL2Nzcy9mb250cy9mb250c1wiO1xuXG4vKi8gaW1wb3J0IHJlc2V0IGNzcyovXG5cbkBpbXBvcnQgXCIuLi9jc3MvcmVzZXRcIjtcblxuLyovIGltcG9ydCB0aGVtZXMgY3NzKi9cblxuQGltcG9ydCBcIi4uL2Nzcy90aGVtZXMvZGVmYXVsdFwiO1xuXG4vKiBpbXBvcnQgY29tbW9tIGNzcyovXG5cbkBpbXBvcnQgXCIuLi9jc3MvY29tbW9uL2NvbW1vblwiO1xuXG4vKiBpbXBvcnQgaGVhZGVyIGNzcyovXG5cbkBpbXBvcnQgXCIuLi9jc3Mvd3JhcHBlclwiO1xuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnM6NDAwLDYwMCw3MDAsODAwJyk7XG4vKiBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2Fucyc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgc3JjOiBsb2NhbChcIk9wZW4gU2FucyBCb2xkXCIpLCBsb2NhbChcIk9wZW5TYW5zLUJvbGRcIiksIHVybChodHRwczovL3RoZW1lcy5nb29nbGV1c2VyY29udGVudC5jb20vc3RhdGljL2ZvbnRzL29wZW5zYW5zL3Y2L2szazcwMlpPS2lMSmMzV1ZqdXBsekhoQ1VPR3o3dllHaDY4MGxHaC11WE0ud29mZikgZm9ybWF0KFwid29mZlwiKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIHNyYzogbG9jYWwoXCJPcGVuIFNhbnMgTGlnaHRcIiksIGxvY2FsKFwiT3BlblNhbnMtTGlnaHRcIiksIHVybChodHRwczovL3RoZW1lcy5nb29nbGV1c2VyY29udGVudC5jb20vc3RhdGljL2ZvbnRzL29wZW5zYW5zL3Y2L0RYSTFPUkhDcHNRbTNWcDZtWG9hVFhoQ1VPR3o3dllHaDY4MGxHaC11WE0ud29mZikgZm9ybWF0KFwid29mZlwiKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHNyYzogbG9jYWwoXCJPcGVuIFNhbnMgU2VtaWJvbGRcIiksIGxvY2FsKFwiT3BlblNhbnMtU2VtaWJvbGRcIiksIHVybChodHRwczovL3RoZW1lcy5nb29nbGV1c2VyY29udGVudC5jb20vc3RhdGljL2ZvbnRzL29wZW5zYW5zL3Y2L01UUF95U1VKSF9ibjQ4VkJHOHNOU25oQ1VPR3o3dllHaDY4MGxHaC11WE0ud29mZikgZm9ybWF0KFwid29mZlwiKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIHNyYzogbG9jYWwoXCJPcGVuIFNhbnNcIiksIGxvY2FsKFwiT3BlblNhbnNcIiksIHVybChodHRwczovL3RoZW1lcy5nb29nbGV1c2VyY29udGVudC5jb20vc3RhdGljL2ZvbnRzL29wZW5zYW5zL3Y2L2NKWktlT3VCcm40a0VSeHF0YVVIM1Q4RTBpN0tabi1FUG55bzNIWnU3a3cud29mZikgZm9ybWF0KFwid29mZlwiKTtcbn0gKi9cblxuaHRtbCwgYm9keXtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG59XG5cbnRhYmxlIHtcbiAgICB0aCxcbiAgICB0ZCB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgdGJvZHkge1xuICAgICAgICAuZmllbGQtY2hlY2tib3gtd3JhcHBlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIG92ZXJmbG93OiBpbml0aWFsO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09UmVzcG9uc2l2ZSBjc3M9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDo5NjBweCkge1xuICAgIC5taWRkbGUtc2VjdGlvbiB7XG4gICAgICAgIHBhZGRpbmc6IDElO1xuICAgIH1cbiAgICAubWlkZGxlLWxlZnQge1xuICAgICAgICB3aWR0aDogNjUlO1xuICAgIH1cbiAgICAubWlkZGxlLXJpZ2h0IHtcbiAgICAgICAgd2lkdGg6IDM1JVxuICAgIH1cbiAgICAuYnRuIHtcbiAgICAgICAgaGVpZ2h0OiAyOXB4O1xuICAgICAgICBwYWRkaW5nOiA3cHggNnB4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxuICAgIC5ub3JtYWwtZmllbGQge1xuICAgICAgICBoZWlnaHQ6IDI5cHg7XG4gICAgfVxuICAgIC5taWRkbGUtdG9wIGgxIHtcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgfVxuICAgIC5oZWFkZXItc2VhcmNoIC5mb3JtLWN0cmwtaGVhZCB7XG4gICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICB9XG4gICAgLmhlYWRlci1zZWFyY2gge1xuICAgICAgICBsZWZ0OiAyMHB4O1xuICAgICAgICB0b3A6IDdweDtcbiAgICB9XG4gICAgLmxvZ2luLXR1YmUge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgfVxuICAgIC5idG4uY2FuY2xlLFxuICAgIC5idG4ucmVkQnRuIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgfVxuICAgIC5wb3B1cFdyYXBwZXIgLnBvcHVwIHtcbiAgICAgICAgbWF4LXdpZHRoOiA3NyU7XG4gICAgfVxuICAgIC5jb21tb24tcmlnaHQtc2VjdGlvbiBoNCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG4gICAgLmZpbGUtd3JhcHBlciB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICB9XG4gICAgLmZpbGUtdXBsb2FkLWJveCAuc2VsZWN0LWZpbGUtdXBsb2FkIHVsIGxpIGxhYmVsIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cbiAgICAuZmlsZS11cGxvYWQtYm94IC5zZWxlY3QtZmlsZS11cGxvYWQgdWwgbGkgLmNob29zZS1maWxlIGlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcbiAgICAgICAgaGVpZ2h0OiAyOHB4O1xuICAgIH1cbiAgICAuZmlsZS11cGxvYWQtYm94IC5maWxlLXVwbG9hZGVkIHtcbiAgICAgICAgbWFyZ2luOiAxMHB4IDAgMTVweDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cbiAgICAucHJvZ3Jlc3MtYmFyLXdyYXBwZXIge1xuICAgICAgICB3aWR0aDogNzAlO1xuICAgIH1cbiAgICAuZmlsZS11cGxvYWQtYm94IC5kcmFnLWRyb3AtYm94IHtcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICB9XG4gICAgLmZpbGUtdXBsb2FkLWJveCB7XG4gICAgICAgIHBhZGRpbmc6IDE1cHggMDBweDtcbiAgICAgICAgbWF4LXdpZHRoOiBub25lO1xuICAgIH1cbiAgICAuc2VhcmNoLWRhdGEgdGQge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NzY4cHgpIHtcbiAgICAudmlzaWJsZS14cyB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjdweCkge1xuICAgIGhlYWRlciB7XG4gICAgICAgIHBhZGRpbmc6IDVweCA1cHg7XG4gICAgICAgICY+ZGl2IHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIC5sb2dvIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgd2lkdGg6IDEyOXB4O1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgICB9XG4gICAgICAgICNzZWFyY2hIZWFkZXIge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAubG9naW4tbmF2PmxpIC51c2VyLWluZm8ge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgIH1cbiAgICAgICAgLmxvZ2luLW5hdj5saSB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDdweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAjbWlkZGxlV3JhcHBlciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICBtYWluIHtcbiAgICAgICAgLy8gcGFkZGluZy10b3A6IDkycHg7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgICNsb2dpblR1YmUge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgLmxvZ2luLXR1YmUge1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgfVxuICAgIC5taWRkbGUtc2VjdGlvbiB7XG4gICAgICAgIHBhZGRpbmc6IDElO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB9XG4gICAgLm1pZGRsZS1sZWZ0IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxuICAgIC5taWRkbGUtdG9wIGgxIHtcbiAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICBmbG9hdDogbm9uZTtcbiAgICB9XG4gICAgLm1pZGRsZS10b3Age1xuICAgICAgICBhc2lkZSB7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuYnRuIHtcbiAgICAgICAgcGFkZGluZzogNHB4IDdweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgfVxuICAgIC5hY2NvcmRpYW4tc2VjdGlvbiB7XG4gICAgICAgIHBhZGRpbmc6IDE1cHggMHB4IDA7XG4gICAgfVxuICAgIC5hY2NvcmRpYW4tc2VjdGlvbiAuYWNjb3JkaWFuLWNvbnRlbnQge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gICAgfVxuICAgIC5jcmVhdGUtaW5zdGl0dXRpb24ge1xuICAgICAgICByaWdodDogYXV0bztcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgYm90dG9tOiAtMTVweDtcbiAgICB9XG4gICAgLm1pZGRsZS1ib3R0b20ge1xuICAgICAgICBhc2lkZSB7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuYnRuLmNhbmNsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgIH1cbiAgICAuYnRuLnJlZEJ0biB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgIH1cbiAgICAubWlkZGxlLXJpZ2h0IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxuICAgIC5jb21tb24tcmlnaHQtc2VjdGlvbiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgfVxuICAgIC5ub3JtYWwtZmllbGQge1xuICAgICAgICBoZWlnaHQ6IDMxcHg7XG4gICAgfVxuICAgIC5maWx0ZXItcmlnaHQgLmJ0biB7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgfVxuICAgIC5jbG9zZUZpbHRlciB7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG4gICAgLm1pZGRsZS1tYWluLmhhc0ZpbHRlcjpiZWZvcmUge1xuICAgICAgICAvLyBkaXNwbGF5OiBub25lO1xuICAgICAgICB0b3A6IDExMXB4O1xuICAgIH1cbiAgICAuc2VhcmNoLWVucXVpcnktdHlwZS1maWx0ZXIge1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAuZmlsdGVyLWxhYmVsIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnR5cGUtZmlsdGVyIGxpIHtcbiAgICAgICAgbWFyZ2luOiAwIDEwcHg7XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICB9XG4gICAgLmZpbHRlci1yZXMgbGFiZWwge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gICAgLmxvZ2luLXR1YmUge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgfVxuICAgIC5ib3hQYWRkaW5nMTUsXG4gICAgLm1pZGRsZS1sZWZ0LFxuICAgIC5taWRkbGUtcmlnaHQsXG4gICAgLm1pZGRsZS1mdWxsIHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICB9XG4gICAgLmZpbHRlci1maWVsZHMgLmZpZWxkLXdyYXBwZXIge1xuICAgICAgICBtYXJnaW46IDZweCAwO1xuICAgIH1cbiAgICAuZmlsZS13cmFwcGVyIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgIH1cbiAgICAuZmlsZS11cGxvYWQtYm94IC5zZWxlY3QtZmlsZS11cGxvYWQgdWwgbGkgbGFiZWwge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuICAgIC5maWxlLXVwbG9hZC1ib3ggLnNlbGVjdC1maWxlLXVwbG9hZCB1bCBsaSAuY2hvb3NlLWZpbGUgaW5wdXRbdHlwZT1cInRleHRcIl0ge1xuICAgICAgICBoZWlnaHQ6IDI4cHg7XG4gICAgfVxuICAgIC5maWxlLXVwbG9hZC1ib3ggLmZpbGUtdXBsb2FkZWQge1xuICAgICAgICBtYXJnaW46IDEwcHggMCAxNXB4O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuICAgIC5wcm9ncmVzcy1iYXItd3JhcHBlciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICAuZmlsZS11cGxvYWQtYm94IC5kcmFnLWRyb3AtYm94IHtcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICB9XG4gICAgLmZpbGUtdXBsb2FkLWJveCB7XG4gICAgICAgIHBhZGRpbmc6IDE1cHggMDBweDtcbiAgICAgICAgbWF4LXdpZHRoOiBub25lO1xuICAgIH1cbiAgICAuc2VhcmNoLWRhdGEgdGQge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxufVxuXG5cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT10aGVtZSBjaGFuZ2U9PT09PT09PT09PT09PT09PT09PT0qL1xuXG4uZ3JlZW4tdGhlbWUge1xuICAgIC5idG4uZnVsbEJsdWUge1xuICAgICAgICBiYWNrZ3JvdW5kOiBncmVlbjtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiBncmVlbjtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgfVxuICAgIGEsXG4gICAgLmJ0biB7XG4gICAgICAgIGNvbG9yOiBncmVlbjtcbiAgICB9XG4gICAgLmJ0bi5yZWRCdG4ge1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICB9XG4gICAgaGVhZGVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogIzAzNWQwMztcbiAgICB9XG4gICAgLmNscy0xIHtcbiAgICAgICAgc3Ryb2tlOiBncmVlbjtcbiAgICB9XG4gICAgLm5hdi1saXN0PmxpOmhvdmVyLFxuICAgIC5uYXYtbGlzdD5saS5hY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kOiBncmVlbjtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMXB4IGdyZWVuO1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JlZW47XG4gICAgfVxuICAgIC5hY2NvcmRpYW4tc2VjdGlvbiAuYWNjb3JkaWFuLWhlYWRpbmcgaDQgLm9wZW4tYWNjb3IsXG4gICAgLmFjY29yZGlhbi1zZWN0aW9uIC5hY2NvcmRpYW4taGVhZGluZyBoNCAuY2xvc2UtYWNjb3IsXG4gICAgLmNsb3NlLWFjY29yLFxuICAgIC5vcGVuLWFjY29yIHtcbiAgICAgICAgY29sb3I6IGdyZWVuO1xuICAgICAgICBib3JkZXItY29sb3I6IGdyZWVuO1xuICAgIH1cbiAgICAuZXhwb3J0LXByaW50IC5wcmludC1pY29uOmhvdmVyLFxuICAgIC5leHBvcnQtcHJpbnQgLmV4cG9ydC1pY29uOmhvdmVyLFxuICAgIC5wcmludC1vdXRwdXQtc2VjdGlvbiBsaTpob3ZlcixcbiAgICAuZmllbGQtd3JhcHBlci5oYXMtdmFsdWUgLmZvcm0tY3RybCtsYWJlbCxcbiAgICAuZmllbGQtd3JhcHBlciAuZm9ybS1jdHJsOmZvY3VzK2xhYmVsLFxuICAgIC5sb2dpbi10dWJlIG5hdj51bD5saSAuZHJvcGRvd24+dWwgbGkgYTpob3ZlcixcbiAgICAuZmllbGQtY2hlY2tib3gtd3JhcHBlciAuZm9ybS1jaGVja2JveDpjaGVja2VkK2xhYmVsIHtcbiAgICAgICAgY29sb3I6IGdyZWVuO1xuICAgIH1cbiAgICAudXBsb2FkLWJhcj5kaXYsXG4gICAgLmFjY29yZGlhbi1zZWN0aW9uIC5hY2NvcmRpYW4+bGkuYWN0aXZlIC5jaXJjbGUtYWNjb3IsXG4gICAgLmFjY29yZGlhbi1zZWN0aW9uIC5hY2NvcmRpYW4+bGkuZGF0YS1maWxsZWQgLmNpcmNsZS1hY2NvcixcbiAgICAudGFibGUtaGVhZC1tZW51IHNwYW4ge1xuICAgICAgICBiYWNrZ3JvdW5kOiBncmVlbjtcbiAgICB9XG4gICAgLnNoYWRvdy1ib3gge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDEyOCwgMCwgMC4yNik7XG4gICAgfVxuICAgIHRoIHtcbiAgICAgICAgYmFja2dyb3VuZDogIzAzNWQwMztcbiAgICB9XG4gICAgdGFibGUgdHIuc2VsZWN0ZWQge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDMsIDkzLCAzLCAwLjIpICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5lbnF1aXJ5LWFjdGlvbiAuY2xzLTEge1xuICAgICAgICBzdHJva2U6IHRyYW5zcGFyZW50O1xuICAgIH1cbiAgICAuY2xvc2VGaWx0ZXIgc3ZnIC5jbHMtMSxcbiAgICAuYWN0aW9uLW1lbnUtaW5uZXIgdWwgbGk6aG92ZXIgLmNscy0yLFxuICAgIC5hY3Rpb24tbWVudS1pbm5lciB1bCBsaTpob3ZlciAuY2xzLTMsXG4gICAgLnByaW50LW91dHB1dC1zZWN0aW9uIGxpOmZpcnN0LWNoaWxkOmhvdmVyIHN2ZyAuY2xzLTEsXG4gICAgLnByaW50LW91dHB1dC1zZWN0aW9uIGxpLnN2Zy1pY29uOmhvdmVyIC5jbHMtMixcbiAgICAuY2xvc2VQb3B1cDpob3ZlciAuY2xzLTEsXG4gICAgLmVucXVpcnktYWN0aW9uOmhvdmVyIC5hY3Rpb24taWNvbiBzdmcgLmNscy0yIHtcbiAgICAgICAgc3Ryb2tlOiBncmVlbjtcbiAgICB9XG4gICAgLmFjdGlvbi1tZW51LWlubmVyIHVsIGxpOmhvdmVyIHtcbiAgICAgICAgY29sb3I6IGdyZWVuO1xuICAgICAgICAuY2xzLTIge1xuICAgICAgICAgICAgc3Ryb2tlOiBncmVlbjtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuYWNjb3JkaWFuLXNlY3Rpb24gLmFjY29yZGlhbj5saS5hY3RpdmUgLmNpcmNsZS1hY2NvcixcbiAgICAuYWNjb3JkaWFuLXNlY3Rpb24gLmFjY29yZGlhbj5saS5kYXRhLWZpbGxlZCAuY2lyY2xlLWFjY29yLFxuICAgIC5maWVsZC13cmFwcGVyIC5mb3JtLWN0cmw6Zm9jdXMsXG4gICAgLmZpZWxkLWNoZWNrYm94LXdyYXBwZXIgLmZvcm0tY2hlY2tib3g6Y2hlY2tlZCtsYWJlbDphZnRlcixcbiAgICAuZmllbGQtY2hlY2tib3gtd3JhcHBlciAuZm9ybS1jaGVja2JveDpjaGVja2VkK2xhYmVsOmJlZm9yZSB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogZ3JlZW47XG4gICAgICAgIHdpZHRoOiAxMnB4O1xuICAgICAgICBoZWlnaHQ6IDVweDtcbiAgICAgICAgbGVmdDogMnB4O1xuICAgICAgICB0b3A6IDVweDtcbiAgICB9XG4gICAgLmFjY29yZGlhbi1zZWN0aW9uIC5hY2NvcmRpYW4+bGkuZGF0YS1maWxsZWQgLmFjY29yZGlhbi1oZWFkaW5nIGg0IHtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgzLCA5MywgMywgMC4yOSk7XG4gICAgfVxuICAgIC5maWVsZC13cmFwcGVyLmRhdGVQaWNrZXJCb3g6YWZ0ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvY2FsZW5kYXJncmVlbi5zdmcpO1xuICAgIH1cbn1cbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9hc3NldHMvY3NzL2NvbW1vbi9jb21tb24uc2Nzc1wiO1xuQGltcG9ydCBcIi4uLy4uLy4uLy4uL2Fzc2V0cy9jc3MvY29tbW9uL2dyaWQuc2Nzc1wiO1xuQGltcG9ydCBcIi4uLy4uLy4uLy4uL2Fzc2V0cy9jc3MvY29tbW9uL3ZhcmlhYmxlcy5zY3NzXCI7XG5AaW1wb3J0IFwiLi4vLi4vLi4vLi4vYXNzZXRzL2Nzcy9jb21tb24vY29tbW9uLXdlYi5zY3NzXCI7XG5AaW1wb3J0IFwiLi4vLi4vLi4vLi4vYXNzZXRzL2Nzcy9zdHlsZS5zY3NzXCI7XG5AaW1wb3J0IFwiLi4vLi4vLi4vLi4vYXNzZXRzL2Nzcy93cmFwcGVyLnNjc3NcIjtcblxuLm11bHRpc2VsZWN0LXdyYXBwZXIge1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICRib3JkZXItY29sb3I7XG4gIHotaW5kZXg6IDEwMDtcbiAgbWluLXdpZHRoOiAyODhweDtcbiAgbWF4LWhlaWdodDogMzUwcHg7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG5cbiAgOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cblxuLmRyb3Bkb3duMTo6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIuKWvFwiO1xuICB0b3A6IDM3cHg7XG4gIHJpZ2h0OiA1cHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuLmhlYWRlckxpbmsge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xufVxuXG4ucm93e1xuICBtYXJnaW46IDA7XG59XG5cbi5mb3JtLXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcblxuICBsYWJlbCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGNvbG9yOiA4NGY2O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gLnRleHQtbGFiZWx7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiB9XG4gIC5mb3JtLWN0cmwge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTE5LCAxMTksIDExOSwgMC40MTk2MDc4NDMxMzcyNTQ5KTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIHBhZGRpbmc6IDAgNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxufVxuXG4ubG9naW4tdHViZSBuYXYgPiB1bCA+IGxpIC5kcm9wZG93biB7XG4gIG1pbi13aWR0aDogMjA1cHg7XG59XG5cbi5tYWRlLW91dCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM2NjY2NjY7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5tYWRlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiAxN3B4O1xuICBsZWZ0OiAxNSU7XG4gIHJpZ2h0OiAtMTUlO1xuICBib3R0b206IC0yN3B4O1xufVxuXG4uc2t5LWZvcm0ge1xuICBoZWlnaHQ6IC0xOHB4O1xuXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgLnNreS1pbm5lciB7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICB9XG59XG5cbi5oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAycHggMnB4ICNkYWRhZGE7XG4gIGJveC1zaGFkb3c6IDAgMCAycHggMnB4ICNkYWRhZGE7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5mZWUtZmlsdGVyIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgJi5sb25nIHtcbiAgICAuZmlsdGVyLWJ0biB7XG4gICAgICBwYWRkaW5nOiAyNXB4IDAgMDtcbiAgICB9XG4gIH1cblxuICAuZmlsdGVyLWJ0biB7XG4gICAgcGFkZGluZzogMTBweCAwIDA7XG4gIH1cblxuICAucmFkaW8tZ3JvdXAge1xuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuXG4gICAgLmZpZWxkLXJhZGlvLXdyYXBwZXIgLmZvcm0tcmFkaW86Y2hlY2tlZCtsYWJlbDpiZWZvcmUge1xuICAgICAgY29udGVudDogJyc7XG4gICAgICB3aWR0aDogMTBweDtcbiAgICAgIGhlaWdodDogMTBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGxlZnQ6IDNweDtcbiAgICAgIHRvcDogM3B4O1xuICAgIH1cbiAgfVxuXG4gIC5maWVsZC13cmFwcGVyIHtcbiAgICAmLmRhdGVQaWNrZXJCb3gge1xuICAgICAgJjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIvLi9hc3NldHMvaW1hZ2VzL2NhbGVuZGFyLnN2Z1wiKSBuby1yZXBlYXQ7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDIwcHg7XG4gICAgICAgIHRvcDogMjNweDtcbiAgICAgICAgd2lkdGg6IDIxcHg7XG4gICAgICAgIGhlaWdodDogMjFweDtcbiAgICAgICAgei1pbmRleDogMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmZlZS1pbmZvIHtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgdWwge1xuICAgIHBhZGRpbmc6IDIwcHggNXB4O1xuXG4gICAgbGkge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXG4gICAgICAmLmtleSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIGNvbG9yOiAjNzc3O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgIH1cblxuICAgICAgJi52YWx1ZSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5mb3JtLWN0cmwge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICB9XG59XG5cbi5mZWUtdGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cbiIsIiRwdWxsLUw6IGxlZnQ7XG4kcHVsbC1SOiByaWdodDtcbiRwdWxsLW5vbmU6IG5vbmU7XG4kZnVsbC13aWR0aDogMTAwJTtcbiRib3JkZXItYm94OiBib3JkZXItYm94O1xuJGJvcmRlci1jb2xvcjogI2RlZWFlZTtcbiRiZy13aGl0ZTogI2ZmZjtcbiRlcnJvci1jb2xvcjogI2ZmMDAwMDtcbiRjb21tb24tYmx1ZTogIzAwODRmNjtcbiRwcmltYXJ5LWNvbG9yOiAjMzMzO1xuJGJvcmRlci1jb21tb246I2VhZWFlYjtcblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PWhlYWRlciBjb2xvcnM9PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiRoZWFkZXItYmc6IzAwNjBBMztcbiRoZWFkZXItYm9yZGVyOiNlYWVhZWI7XG4kbGVmdE1lbnVCZzojZmFmYWZhO1xuJGxlZnRNZW51SG92ZXJCZzojMDA4NGY2O1xuJGxlZnRNZW51VGV4dEhvdmVyQ29sb3I6I2ZmZjtcbiRyZWRCdG46I2Y0NDMzNjtcbiRib3JkZXJjY2M6I2NjYztcbiRsaWdodEJsdWU6I2VmZjdmZjtcbiR0YWJsZUhlYWRpbmdCZ0NvbG9yOiAjMDA0YTdlO1xuLnRhYmxlLWZvcm1hdC1maXJzdCB7XG4gICAgLnRhYmxlLXJlc3BvbnNpdmUge1xuICAgICAgICB0YWJsZSB7XG4gICAgICAgICAgICB0aCxcbiAgICAgICAgICAgIHRkIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aCB7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGJvZHkge1xuICAgICAgICAgICAgICAgIHRyIHtcbiAgICAgICAgICAgICAgICAgICAgdGQge1xuICAgICAgICAgICAgICAgICAgICAgICAgLmZpZWxkLWNoZWNrYm94LXdyYXBwZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaW5pdGlhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZvcm0tY2hlY2tib3gge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZm9ybS1jaGVja2JveCtsYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDdweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJjphZnRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5mYS10cmFzaC1vIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHJlZEJ0bjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi50YWJsZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIC5oZWFkaW5nLWNvbnRhaW5lciB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZTBlYWVjO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgICAgLmhlYWRpbmctaXRlbSB7XG4gICAgICAgIHdpZHRoOiAxMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICB9XG4gICAgLnZhbHVlLW91dGVyLWNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIG1pbi1oZWlnaHQ6IDUzdmg7XG4gICAgICBtYXgtaGVpZ2h0OiA1NHZoO1xuICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICAudmFsdWUtY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgcGFkZGluZzogNHB4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICAgICAgLnZhbHVlLWl0ZW0ge1xuICAgICAgICAgIHdpZHRoOiAxMCU7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IiwiQGltcG9ydCBcInZhcmlhYmxlc1wiO1xuXG4vKiBTY3JvbGxiYXIgdGhpY2tuZXNzIGNoYW5nZWQgaGVyZSBmb3IgdmVydGljYWwgZGlzcGxheSAqL1xuXG4vLyA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbi8vICAgLy8gZGlzcGxheTogbm9uZTtcbi8vICAgd2lkdGg6IDdweDtcbi8vICAgaGVpZ2h0OiA3cHg7XG4vLyB9XG4vLyA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbi8vICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgM3B4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbi8vICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHg7XG4vLyAgIGJvcmRlci1yYWRpdXM6IDVweDtcbi8vIH1cbi8vXG4vLyAvKiBIYW5kbGUgKi9cbi8vIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuLy8gICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcbi8vICAgYm9yZGVyLXJhZGl1czogNXB4O1xuLy8gICBiYWNrZ3JvdW5kOiByZ2JhKDMsIDE0LCA2NSwgMC40KTtcbi8vICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgM3B4IHJnYmEoMCwgMCwgMCwgMC41KTtcbi8vIH1cbi8vXG4vLyA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOndpbmRvdy1pbmFjdGl2ZSB7XG4vLyAgIGJhY2tncm91bmQ6IHJnYmEoNywgMjcsIDExOSwgMC40KTtcbi8vIH1cbi8vIE5ldyBTY3JvbGwgQmFyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcbiAgICBoZWlnaHQ6IDEwcHg7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgYm90dG9tLCBsZWZ0IHRvcCwgY29sb3Itc3RvcCgwLjQ0LCByZ2IoMTIyLCAxNTMsIDIxNykpLCBjb2xvci1zdG9wKDAuNzIsIHJnYig3MywgMTI1LCAxODkpKSwgY29sb3Itc3RvcCgwLjg2LCByZ2IoMjgsIDU4LCAxNDgpKSk7XG59XG4vLyAubWlkZGxlLXNlY3Rpb257XG4vLyAgICAgYmFja2dyb3VuZDogI2QzZDNkMzI2O1xuLy8gfVxuLmZvb3Rlci1zZWN0aW9uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIHotaW5kZXg6IDEwMDA7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gICAgdWwge1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAmLmZvb3Rlci1saXN0IHtcbiAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiA1cHggMjBweCAwO1xuICAgICAgICAgICAgICAgIGkge1xuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogRm9udEF3ZXNvbWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGEge1xuICAgICAgICBjb2xvcjogIzAwODRmNjtcbiAgICB9XG59XG5cblxuLyogVHJhY2sgKi9cblxuLmRhbmdlciB7XG4gICAgY29sb3I6ICRlcnJvci1jb2xvciAhaW1wb3J0YW50O1xufVxuXG4uYnRuLmFjdGl2ZSxcbi5idG46YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICAgIG91dGxpbmU6IDA7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbmlucHV0W3R5cGU9XCJidXR0b25cIl0sXG5pbnB1dFt0eXBlPVwic3VibWl0XCJdLFxuaW5wdXRbdHlwZT1cInJlc2V0XCJdLFxuaW5wdXRbdHlwZT1cImZpbGVcIl06Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uLFxuYnV0dG9uIHtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbjpob3N0IDo6bmctZGVlcCAudG9vbHRpcC1hcnJvdyB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuOjpuZy1kZWVwIC50b29sdGlwLWFycm93IHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnRvb2x0aXAtbGVmdCB7XG4gICAgdG9wOiAwICFpbXBvcnRhbnQ7XG4gICAgbWluLXdpZHRoOiAzMDBweDtcbn1cblxuOjpuZy1kZWVwIC50b29sdGlwLWxlZnQge1xuICAgIHRvcDogMDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC50b29sdGlwLXJpZ2h0IHtcbiAgICB0b3A6IGNhbGMoMTAlIC0gMi41cHgpO1xuICAgIGxlZnQ6IGNhbGMoMTAlIC0gMi41cHgpO1xufVxuXG46Om5nLWRlZXAgLnRvb2x0aXAtcmlnaHQge1xuICAgIHRvcDogY2FsYygxMCUgLSAyLjVweCk7XG4gICAgbGVmdDogY2FsYygxMCUgLSAyLjVweCk7XG59XG5cbjpob3N0IDo6bmctZGVlcCAudG9vbHRpcC10b3Age1xuICAgIHRvcDogY2FsYygxMCUgLSAyLjVweCk7XG4gICAgbGVmdDogY2FsYygxMCUgLSAyLjVweCk7XG59XG5cbjo6bmctZGVlcCAudG9vbHRpcC10b3Age1xuICAgIHRvcDogY2FsYygxMCUgLSAyLjVweCk7XG4gICAgbGVmdDogY2FsYygxMCUgLSAyLjVweCk7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuYnMtZGF0ZXBpY2tlciB7XG4gICAgLmJzLWRhdGVwaWNrZXItY29udGFpbmVyIHtcbiAgICAgICAgcGFkZGluZzogMTBweDsgLy9iYWNrZ3JvdW5kOiAjMDA0YjdmO1xuICAgIH1cbn1cblxuLmJzLWNhbGVuZGFyLWNvbnRhaW5lciBkaXY6bnRoLWNoaWxkKDEpIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uYnMtZGF0ZXBpY2tlci1oZWFkIHtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmJzLWRheXMtY2FsZW5kYXItdmlldyB7XG4gICAgLmJzLWRhdGVwaWNrZXItaGVhZCB7XG4gICAgICAgIC8vYmFja2dyb3VuZC1jb2xvcjogIzAwNGM4MDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgd2hpdGU7XG4gICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgd2hpdGU7XG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHdoaXRlO1xuICAgICAgICBtaW4td2lkdGg6IDMwMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgfVxuICAgIC5icy1kYXRlcGlja2VyLWJvZHkge1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgfVxufVxuXG4vLyA6Om5nLWRlZXAgLmJzLWRhdGVwaWNrZXItY29udGFpbmVyIHtcbi8vICAgcGFkZGluZzogNXB4O1xuLy8gfVxuOjpuZy1kZWVwIC5icy1kYXRlcGlja2VyLWhlYWQge1xuICAgIC8vYmFja2dyb3VuZC1jb2xvcjogIzAwNGM4MDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHdoaXRlO1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgd2hpdGU7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgd2hpdGU7XG4gICAgbWluLXdpZHRoOiAzMDBweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbjo6bmctZGVlcCAuYnMtZGF0ZXBpY2tlci1ib2R5IHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTE5LCAxMTksIDExOSwgMC4yOCk7XG59XG5cbjo6bmctZGVlcCAuYnMtZGF0ZXBpY2tlci1ib2R5IHRhYmxlIHRib2R5IHRyIHRkIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDIxMSwgMjEyLCAyMTMsIDAuNSk7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjExLCAyMTIsIDIxMywgMC41KTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5icy1kYXRlcGlja2VyLWJvZHkgdGFibGUgdGJvZHkgdHIgdGQge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMjExLCAyMTIsIDIxMywgMC41KTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyMTEsIDIxMiwgMjEzLCAwLjUpO1xufVxuXG46Om5nLWRlZXAgLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZSB0aGVhZCB0ciB0aCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5icy1kYXRlcGlja2VyLWJvZHkgdGFibGUgdGhlYWQgdHIgdGgge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jdXJzb3ItaWNvbiB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGFibGUtcmVzcG9uc2l2ZSB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIC8vIG92ZXJmbG93OiBhdXRvO1xuICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxufVxuXG4uY291cnNlcy1saXN0LXRhYmxlIHtcbiAgICBtYXgtaGVpZ2h0OiA0MDBweDtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgzOCwgMCwgMCwgMC4yKTtcbiAgICAgOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbn1cblxudGV4dGFyZWEge1xuICAgIHJlc2l6ZTogbm9uZTtcbn1cblxuLmZpbHRlci1maWVsZHMge1xuICAgIC5maWVsZC13cmFwcGVyIHtcbiAgICAgICAgJi5oYXMtdmFsdWUgLmZvcm0tY3RybCtsYWJlbCxcbiAgICAgICAgLmZvcm0tY3RybDpmb2N1cytsYWJlbCB7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi50aW1lLXBpY2tlciB7XG4gICAgLmZpZWxkLXdyYXBwZXIge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIG1hcmdpbjogNXB4IDEwcHggMCAwO1xuICAgICAgICAuZm9ybS1jdHJsIHtcbiAgICAgICAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgIH1cbiAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLm11bHRpc2VsZWN0LXdyYXBwZXIge1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkYm9yZGVyLWNvbG9yO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAxMDA7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgbWluLXdpZHRoOiA0MDBweDtcbiAgICBtaW4taGVpZ2h0OiA1MHB4O1xuICAgIHRvcDogNjVweDtcbiAgICAubXVsdGlzZWxlY3Qtd3JhcHBlci1pbm5lciB7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIHVsIHtcbiAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAwIDAgNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5pbnB1dFt0eXBlPVwidGV4dFwiXVtkaXNhYmxlZF0ge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbi5yZXBvcnQtd3JhcHBlciB7XG4gICAgYmFja2dyb3VuZDogI2VmZWZlZjtcbiAgICBoZWlnaHQ6IDExMHZoO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICAucmVwb3J0LWhlYWRlciB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICB9XG59XG5cbi5jaGlwcGVkIHtcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgYmFja2dyb3VuZDogIzAwODRmNjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMzJweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBwYWRkaW5nOiAuMXJlbSAuOHJlbTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4yNHMgY3ViaWMtYmV6aWVyKC40LCAwLCAuMiwgMSk7XG4gICAgd2lsbC1jaGFuZ2U6IHBhZGRpbmc7XG4gICAgaSB7XG4gICAgICAgIGNvbG9yOiAjOTlEMTU0O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNnB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgICAgICAgZm9udC1zaXplOiA0OHB4O1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjI0cyBjdWJpYy1iZXppZXIoLjQsIDAsIC4yLCAxKTtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDFyZW0pO1xuICAgICAgICB3aWxsLWNoYW5nZTogb3BhY2l0eSwgdHJhbnNmb3JtO1xuICAgIH1cbiAgICAmLnNtYWxsIHtcbiAgICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMDA4NGY2O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzMnB4O1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBwYWRkaW5nOiAuMnJlbSAuNXJlbTtcbiAgICB9XG4gICAgJi5pbnRhYmxlIHtcbiAgICAgICAgY29sb3I6IHJnYmEoMzAsIDM1LCA0MCwgMC43KSAhaW1wb3J0YW50O1xuICAgICAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzY0Njc2YjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIG1hcmdpbjogMCAycHggMCAwICFpbXBvcnRhbnQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIHBhZGRpbmc6IC4ycmVtO1xuICAgIH1cbn1cblxuLmNoaXBwZWQuYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgIHBhZGRpbmctcmlnaHQ6IDQuNXJlbTtcbiAgICBpIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgIH1cbn1cblxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLmZib2xkIHtcbiAgICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uc2JvbGQge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5mbm9ybWFsIHtcbiAgICBmb250LXdlaWdodDogMzAwO1xufVxuXG4ucnVwZWUge1xuICAgIGZvbnQtZmFtaWx5OiAnV2ViUnVwZWUnO1xufVxuXG4ubGluZS1oZWlnaHQge1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG59XG5cbi5saW5rLFxuYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiAkY29tbW9uLWJsdWU7XG4gICAgJjpob3ZlciB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB9XG59XG5cbi5zbWFsbCxcbi5zbWFsbCAqLFxucCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ueHNtYWxsLFxuLnhzbWFsbCAqIHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDE0cHg7XG59XG5cbmgxIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBsaW5lLWhlaWdodDogMS4yO1xufVxuXG5oMiB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcbn1cblxuaDMge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG59XG5cbi5jb250YWluZXIge1xuICAgIGJveC1zaXppbmc6ICRib3JkZXItYm94O1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uY2xlYXJGaXg6YWZ0ZXIsXG4uY29udGFpbmVyOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgIGNsZWFyOiBib3RoO1xufVxuXG4uY29tbW9uLXdpZHRoIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3gtc2l6aW5nOiAkYm9yZGVyLWJveDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnB1bGwtbGVmdCB7XG4gICAgZmxvYXQ6ICRwdWxsLUw7XG59XG5cbi5wdWxsLXJpZ2h0IHtcbiAgICBmbG9hdDogJHB1bGwtUjtcbn1cblxuLm1SMTAge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLnBvcy1yZWwge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnBvcy1hYnMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmhpZGUge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLnNob3cge1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG59XG5cbi5kaXNwbGF5LWIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZGlzcGxheS1pYiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uYWxpZ24tcmlnaHQge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uYWxpZ24tbGVmdCB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnYtbWlkZGxlIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4ucmFkaXVzLTQge1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLm92ZXJmbG93SGlkZGVuIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PWNhbGwgZ3JpZCB2aWV3IGNzcz09PT09PT09PT09PT09PT09PT09Ki9cblxuQGltcG9ydCBcImdyaWRcIjtcblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IENvbW1vbiBGaWVsZHMgQ1NTPT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cbi50YWJsZS1yZXNwb25zaXZlIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgLy8gb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5maWx0ZXItZmllbGRzIHtcbiAgICAuZmllbGQtd3JhcHBlciB7XG4gICAgICAgICYuaGFzLXZhbHVlIC5mb3JtLWN0cmwrbGFiZWwsXG4gICAgICAgIC5mb3JtLWN0cmw6Zm9jdXMrbGFiZWwge1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8qIEZvciBEYXRlUGlja2VyICovXG5cbi5maWVsZC13cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgLmZvcm0tY3RybCB7XG4gICAgICAgIHotaW5kZXg6IDEwO1xuICAgIH1cbiAgICAmLmRhdGVQaWNrZXJCb3gge1xuICAgICAgICAuZm9ybS1jdHJsIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybChcIi8uL2Fzc2V0cy9pbWFnZXMvY2FsZW5kYXIuc3ZnXCIpIG5vLXJlcGVhdDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHJpZ2h0OiA1cHg7XG4gICAgICAgICAgICB0b3A6IDI4cHg7XG4gICAgICAgICAgICB3aWR0aDogMjFweDtcbiAgICAgICAgICAgIGhlaWdodDogMjFweDtcbiAgICAgICAgICAgIHotaW5kZXg6IDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmRhdGUtY2xlYXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAtMzVweDtcbiAgICAgICAgdG9wOiAzNXB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGNvbG9yOiAjMDA4NGY2O1xuICAgIH1cbiAgICBsYWJlbCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICB9XG59XG5cblxuLyogdGV4dCBmaWVsZCAgKi9cblxuLmZpZWxkLXdyYXBwZXIgLmZvcm0tY3RybCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAvLyBwYWRkaW5nOiAxMHB4IDVweCA1cHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIG91dGxpbmU6IG5vbmU7IC8vYm9yZGVyOiAwO1xuICAgIGJvcmRlcjogc29saWQgMXB4ICNlMmViZWU7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAvLyBoZWlnaHQ6IDM2cHg7XG4gICAgei1pbmRleDogMTA7XG4gICAgZm9udDogNDAwIDEycHggJ09wZW4gc2FucycsIHNhbnMtc2VyaWY7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIC8vIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgIGNvbG9yOiAjMDAwO1xuICAgICYuZm9ybS1jdHJsLW11bHRpcGxlIHtcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICB9XG59XG5cbi5maWVsZC13cmFwcGVyIC5mb3JtLWN0cmw6Zm9jdXMge1xuICAgIC8vcGFkZGluZzogMTJweCAwIDZweDtcbiAgICBib3JkZXI6IHNvbGlkIDJweCAkY29tbW9uLWJsdWU7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAvLyBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuLmZpZWxkLXdyYXBwZXIgLmZvcm0tY3RybDpmb2N1cytsYWJlbCxcbi5maWVsZC13cmFwcGVyLmhhcy12YWx1ZSAuZm9ybS1jdHJsK2xhYmVsIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgdG9wOiA2cHg7XG4gICAgbGVmdDogMDtcbn1cblxuLmZpZWxkLXdyYXBwZXIgLmZvcm0tY3RybDpmb2N1cytsYWJlbCxcbi5maWVsZC13cmFwcGVyLmhhcy12YWx1ZSAuZm9ybS1jdHJsK2xhYmVsIHtcbiAgICBjb2xvcjogJGNvbW1vbi1ibHVlO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuXG4vKnJhZGlvIGJ1dHRvbiAgKi9cblxuLmZpZWxkLWNoZWNrYm94LXdyYXBwZXIsXG4uZmllbGQtcmFkaW8td3JhcHBlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmctbGVmdDogMjVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uZmllbGQtcmFkaW8td3JhcHBlciAuZm9ybS1yYWRpbyB7XG4gICAgb3BhY2l0eTogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHotaW5kZXg6IDE7XG59XG5cbi5maWVsZC1yYWRpby13cmFwcGVyIC5mb3JtLXJhZGlvK2xhYmVsIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHRyYW5zaXRpb246IGFsbCAuMXM7XG59XG5cbi5maWVsZC1yYWRpby13cmFwcGVyIC5mb3JtLXJhZGlvK2xhYmVsOmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICB3aWR0aDogMTZweDtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIHRyYW5zaXRpb246IGFsbCAuMXM7XG59XG5cbi5maWVsZC1yYWRpby13cmFwcGVyIC5mb3JtLXJhZGlvOmNoZWNrZWQrbGFiZWw6YWZ0ZXIge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICRjb21tb24tYmx1ZTtcbn1cblxuLmZpZWxkLXJhZGlvLXdyYXBwZXIgLmZvcm0tcmFkaW8rbGFiZWw6YmVmb3JlIHtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjFzO1xuICAgIHdpZHRoOiAxcHg7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgbGVmdDogOXB4O1xuICAgIHRvcDogOXB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb250ZW50OiAnJztcbn1cblxuLmZpZWxkLXJhZGlvLXdyYXBwZXIgLmZvcm0tcmFkaW86Y2hlY2tlZCtsYWJlbDpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHdpZHRoOiAxMHB4O1xuICAgIGhlaWdodDogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiAkY29tbW9uLWJsdWU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGxlZnQ6IDNweDtcbiAgICB0b3A6IDNweDtcbn1cblxuLmZpZWxkLXJhZGlvLXdyYXBwZXIgLmZvcm0tcmFkaW86Y2hlY2tlZCtsYWJlbCB7XG4gICAgY29sb3I6ICRjb21tb24tYmx1ZTtcbn1cblxuXG4vKmNoZWNrYm94ICAqL1xuXG4uZmllbGQtY2hlY2tib3gtd3JhcHBlciAuZm9ybS1jaGVja2JveCB7XG4gICAgb3BhY2l0eTogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHotaW5kZXg6IDE7XG59XG5cbi5maWVsZC1jaGVja2JveC13cmFwcGVyIC5mb3JtLWNoZWNrYm94K2xhYmVsIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5maWVsZC1jaGVja2JveC13cmFwcGVyIC5mb3JtLWNoZWNrYm94K2xhYmVsOmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICB3aWR0aDogMTZweDtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xufVxuXG4uZmllbGQtY2hlY2tib3gtd3JhcHBlciAuZm9ybS1jaGVja2JveDpjaGVja2VkK2xhYmVsOmFmdGVyIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAkY29tbW9uLWJsdWU7XG59XG5cbi5maWVsZC1jaGVja2JveC13cmFwcGVyIC5mb3JtLWNoZWNrYm94K2xhYmVsOmJlZm9yZSB7XG4gICAgd2lkdGg6IDFweDtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBsZWZ0OiA4cHg7XG4gICAgdG9wOiA5cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGJvcmRlci10b3A6IDA7XG4gICAgYm9yZGVyLXJpZ2h0OiAwO1xuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG59XG5cbi5maWVsZC1jaGVja2JveC13cmFwcGVyIC5mb3JtLWNoZWNrYm94OmNoZWNrZWQrbGFiZWw6YmVmb3JlIHtcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICRjb21tb24tYmx1ZTtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJGNvbW1vbi1ibHVlO1xuICAgIHdpZHRoOiAxMnB4O1xuICAgIGhlaWdodDogNXB4O1xuICAgIGxlZnQ6IDJweDtcbiAgICB0b3A6IDVweDtcbn1cblxuLmZpZWxkLWNoZWNrYm94LXdyYXBwZXIgLmZvcm0tY2hlY2tib3g6Y2hlY2tlZCtsYWJlbCB7XG4gICAgY29sb3I6ICRjb21tb24tYmx1ZTtcbn1cblxuXG4vKm5hdmlnYXRpb24gICAqL1xuXG4udXNlRnVsIGxpIHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5cbi51c2VGdWwgbmF2IHtcbiAgICBtYXJnaW4tbGVmdDogMjAwcHg7XG59XG5cblxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Y29tbW9uIFRhYmxlIENTUz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4ubWIwLFxuLm1pZGRsZS10b3AubWIwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uYWxpZ24tY2VudGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbnRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xufVxuXG50ZCxcbnRoIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgcGFkZGluZzogNnB4IDJweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG50aCB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHBhZGRpbmc6IDIwcHggMTBweDtcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgcmdiYSgxMTksIDExOSwgMTE5LCAwLjExKTtcbiAgICBsYWJlbCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICB9XG4gICAgYSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICB9XG4gICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDsgLy9ib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICAgIH1cbiAgICAmLk5vIHtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgfVxuICAgICYuTmFtZSB7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgfVxuICAgICYuQ29udGFjdCB7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIH1cbiAgICAmLkRhdGUge1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICB9XG59XG5cbnRkIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcbiAgICAmLk5vIHtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgfVxuICAgICYuTmFtZSB7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgfVxuICAgICYuQ29udGFjdCB7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIH1cbiAgICAmLkRhdGUge1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICB9XG59XG5cbnRhYmxlIHRyIHtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjFzO1xufVxuXG50YWJsZSB0ciB7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGhzbGEoMjEwLCAyJSwgODMlLCAuNSk7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgaHNsYSgyMTAsIDIlLCA4MyUsIC41KTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdGQge1xuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgaHNsYSgyMTAsIDIlLCA4MyUsIC41KTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGhzbGEoMjEwLCAyJSwgODMlLCAuNSk7XG4gICAgICAgIHBhZGRpbmc6IDVweCAxNXB4O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxufVxuXG50YWJsZSB0cjpudGgtY2hpbGQoZXZlbik6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICNlY2VjZWM7XG59XG5cbnRhYmxlIHRyOm50aC1jaGlsZChvZGQpOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZWFlYWVhO1xufVxuXG50YWJsZSB0ci5zZWxlY3RlZCB7XG4gICAgYmFja2dyb3VuZDogI2RjZWZmNyAhaW1wb3J0YW50O1xuICAgIGJveC1zaGFkb3c6IDAgMTFweCA4cHggLTEwcHggI0NDQywgMCAtMTFweCAxM3B4IC05cHggI0NDQztcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuXG4udGFibGUtcmVzcG9uc2l2ZSB0ciB0ZDpmaXJzdC1jaGlsZCAuZmllbGQtY2hlY2tib3gtd3JhcHBlcixcbi50YWJsZS1yZXNwb25zaXZlIHRyIHRoOmZpcnN0LWNoaWxkIC5maWVsZC1jaGVja2JveC13cmFwcGVyIHtcbiAgICB3aWR0aDogMjBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuXG4uZW5xdWlyeS1zdGF0dXMgbGFiZWwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5wcm9ncmVzcy1zdGF0dXMge1xuICAgIGNvbG9yOiBkb2RnZXJibHVlO1xufVxuXG4uaW5hY3RpdmUtc3RhdHVzLFxuLm9wZW4tc3RhdHVzIHtcbiAgICBjb2xvcjogIzMzMztcbn1cblxuLmFkbWl0dGVkLXN0YXR1cyB7XG4gICAgY29sb3I6IGdyZWVuO1xufVxuXG4uYnRuIHtcbiAgICBwYWRkaW5nOiA2cHggMTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLyogaGVpZ2h0OiAzNXB4OyAqL1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogIzAwODRmNjtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5idG4uZnVsbEJsdWUge1xuICAgIGJhY2tncm91bmQ6ICMwMDg0ZjY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwODRmNjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiA0cHggMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5idG4uY2FuY2xlIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgY29sb3I6ICMwMDg0ZjY7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHBhZGRpbmc6IDZweCAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLmJ0bi5yZWRCdG4ge1xuICAgIGJhY2tncm91bmQ6ICNmNDQzMzY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Y0NDMzNjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5idG4ubm9ybWFsLWJ0biB7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4ubWlkZGxlLWJvdHRvbSAuYnRuLnJlZEJ0biB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuXG4uY3VzdG9tU2VsZWN0V3JhcHBlciBzZWxlY3Qge1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgLW8tYXBwZWFyYW5jZTogbm9uZTtcbiAgICAtbXMtYXBwZWFyYW5jZTogbm9uZTtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAxO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4uY3VzdG9tU2VsZWN0V3JhcHBlcjphZnRlciB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQ6IG5vcm1hbCBub3JtYWwgbm9ybWFsIDE0cHgvMSBGb250QXdlc29tZTtcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgdGV4dC1yZW5kZXJpbmc6IGF1dG87XG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgY29udGVudDogXCJcXGYxMDdcIjtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMjBweDtcbn1cblxuLmJveC1zaGFkb3ctbGl0ZSAuZmllbGQtd3JhcHBlci5jdXN0b21TZWxlY3RXcmFwcGVyOmFmdGVyIHtcbiAgICByaWdodDogNDBweDtcbn1cblxuLmZpZWxkLXdyYXBwZXIuY3VzdG9tU2VsZWN0V3JhcHBlciBsYWJlbCB7XG4gICAgdG9wOiAxM3B4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMjJweDtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICB6LWluZGV4OiAyO1xufVxuXG4uZmllbGQtd3JhcHBlci5jdXN0b21TZWxlY3RXcmFwcGVyIC5mb3JtLWN0cmw6Zm9jdXMrbGFiZWwsXG4uZmllbGQtd3JhcHBlci5jdXN0b21TZWxlY3RXcmFwcGVyLmhhcy12YWx1ZSBsYWJlbCB7XG4gICAgcGFkZGluZy10b3A6IDA7XG4gICAgaGVpZ2h0OiA0MnB4O1xufVxuXG4uY3VzdG9tU2VsZWN0V3JhcHBlciAuZm9ybS1jdHJsIHtcbiAgICAvLyBvcGFjaXR5OiAwO1xuICAgIG9wdGlvbiB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59XG5cbi5vcGVuLWFjY29yIHtcbiAgICBmbG9hdDogJHB1bGwtUjtcbiAgICB3aWR0aDogMjRweDtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgaGVpZ2h0OiAyNHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgIG1hcmdpbi10b3A6IDNweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6ICRjb21tb24tYmx1ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5oYXNFcnJvciAuZm9ybS1jdHJsLFxuLmhhc0Vycm9yLmZvcm0tY3RybCB7XG4gICAgY29sb3I6IHJlZDtcbiAgICBib3JkZXItY29sb3I6IHJlZCAhaW1wb3J0YW50O1xufVxuXG5wLmVycm9yLW1zZyB7XG4gICAgY29sb3I6IHJlZDtcbn1cblxuLm1pZGRsZS1ib3R0b20ge1xuICAgIC5xdWVzdGlvbkluZm8ge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIH1cbn1cblxuLm5leHQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgICY6YWZ0ZXIge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGZvbnQ6IG5vcm1hbCBub3JtYWwgbm9ybWFsIDE0cHgvMSBGb250QXdlc29tZTtcbiAgICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgICAgICB0ZXh0LXJlbmRlcmluZzogYXV0bztcbiAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgICAgIGNvbnRlbnQ6IFwiXFxmMTA1XCI7XG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgdG9wOiAwO1xuICAgIH1cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgfVxufVxuXG4ucHJldiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmctbGVmdDogMTJweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gICAgJjphZnRlciB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgZm9udDogbm9ybWFsIG5vcm1hbCBub3JtYWwgMTRweC8xIEZvbnRBd2Vzb21lO1xuICAgICAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgICAgIHRleHQtcmVuZGVyaW5nOiBhdXRvO1xuICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAgICAgY29udGVudDogXCJcXGYxMDRcIjtcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHRvcDogMDtcbiAgICB9XG4gICAgJjpob3ZlciB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIH1cbn1cblxuLmZvcm0tdHlwZTEsXG4uZm9ybS10eXBlMiB7XG4gICAgaDIge1xuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgfVxufVxuXG4ub3RoZXItaGVhZGluZyB7XG4gICAgaDIsXG4gICAgaDQge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGEge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogM3B4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICB9XG4gICAgICAgIC5jbG9zZS1idG5zIHtcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTNweDtcbiAgICAgICAgICAgICAgICBzdHJva2Utd2lkdGg6IDJweDtcbiAgICAgICAgICAgICAgICAuY2xzLTEge1xuICAgICAgICAgICAgICAgICAgICBzdHJva2U6ICMzMzM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgICAgICAgICAgLmNscy0xIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZTogJGNvbW1vbi1ibHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uaW5mby1pY29uIHtcbiAgICB3aWR0aDogMTdweDtcbiAgICBoZWlnaHQ6IDE3cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBwYWRkaW5nLXRvcDogMXB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IDAgNXB4O1xufVxuXG4uYWRkLWVkaXQge1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBhIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgIH1cbn1cblxuLmZvcm0tbmV3LWZpZWxkIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICB3aWR0aDogNjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICAgIHBhZGRpbmc6IDZweCAwO1xufVxuXG5zZWxlY3QuZm9ybS1uZXctZmllbGQge1xuICAgIHdpZHRoOiAxMTBweDtcbn1cbm1haW57XG4gICAgcGFkZGluZy1sZWZ0OiAxNSUgIWltcG9ydGFudDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgXG59XG4ubWlkZGxlLXNlY3Rpb257XG4gICAgbWFyZ2luLXRvcDogNDhweDtcbn1cbi5tYXQtaDEsIC5tYXQtaGVhZGxpbmUsIC5tYXQtdHlwb2dyYXBoeSBoMSwgLm1hdC10eXBvZ3JhcGh5IGgyIHtcbiAgICBmb250OiBib2xkIDE0cHgvMjBweCAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICAgIG1hcmdpbjogMCAwIDE2cHg7XG59XG4ubWF0LWJvZHksIC5tYXQtYm9keS0xLCAubWF0LXR5cG9ncmFwaHkge1xuICAgIGZvbnQ6IDQwMCAxNHB4LzIwcHggJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbn1cbi50b29sdGlwLWJveCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBtaW4taGVpZ2h0OiAzMHB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBsZWZ0OiAtMTUwcHg7XG4gICAgei1pbmRleDogMTtcbiAgICB0b3A6IC04cHg7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4xcyBsaW5lYXIgLjFzO1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgcGFkZGluZzogM3B4IDVweDtcbiAgICBib3gtc2hhZG93OiAwIDAgNHB4ICNjY2M7XG4gICAgJjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICBib3JkZXItbGVmdDogOHB4IHNvbGlkICNmZmY7XG4gICAgICAgIGJvcmRlci10b3A6IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAtOHB4O1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgIH1cbn1cblxuLnRvb2x0aXAtYm94LWZpZWxkIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEzMHB4O1xuICAgIG1pbi1oZWlnaHQ6IDMwcHg7XG4gICAgYmFja2dyb3VuZDogI2UwZTBlMDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGxlZnQ6IDE2cHg7XG4gICAgei1pbmRleDogMTtcbiAgICB0b3A6IC0ycHg7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4xcyBsaW5lYXIgLjFzO1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgcGFkZGluZzogM3B4IDVweDtcbiAgICBib3gtc2hhZG93OiAwIDAgNHB4ICNjY2M7XG4gICAgJjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICBib3JkZXItcmlnaHQ6IDhweCBzb2xpZCAjZTBlMGUwO1xuICAgICAgICBib3JkZXItdG9wOiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAtN3B4O1xuICAgICAgICB0b3A6IDRweDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAvKiBtYXJnaW46IGF1dG87ICovXG4gICAgfVxufVxuXG4ubWlkZGxlLXRvcCB7XG4gICAgLnF1ZXN0aW9uSW5mbyB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgLnRvb2x0aXAtYm94LWZpZWxkIHtcbiAgICAgICAgICAgIGxlZnQ6IGF1dG87XG4gICAgICAgICAgICByaWdodDogMTZweDtcbiAgICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IC03cHg7XG4gICAgICAgICAgICAgICAgbGVmdDogYXV0bztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIC50b29sdGlwLWJveC1maWVsZCB7XG4gICAgICAgICAgICAgICAgbGVmdDogYXV0bztcbiAgICAgICAgICAgICAgICByaWdodDogMjhweDtcbiAgICAgICAgICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IC03cHg7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IGF1dG87XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4ucXVlc3Rpb25JbmZvLnBvcy1yZWwge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmluZm8tdG9vbCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIC50b29sdGlwLWJveC1maWVsZCB7XG4gICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgbGVmdDogMDtcbiAgICB9XG59XG5cbi5pbmZvLXRvb2wsXG4ucXVlc3Rpb25JbmZvIHtcbiAgICAmOmhvdmVyIC50b29sdGlwLWJveC1maWVsZCB7XG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIGxlZnQ6IDI4cHg7XG4gICAgfVxufVxuXG4ucXVlc3Rpb25JbmZvIHtcbiAgICAmLmlubGluZS1yZWxhdGl2ZSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cbn1cblxuLnRvb2x0aXAtdGFibGUge1xuICAgICY6aG92ZXIgLnRvb2x0aXAtYm94IHtcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgbGVmdDogLTE0MHB4O1xuICAgIH1cbn1cblxuLm5hdi10YWIge1xuICAgIG1heC13aWR0aDogNzAwcHg7XG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XG4gICAgZm9udC1zaXplOiAwO1xuICAgIGxpIHtcbiAgICAgICAgd2lkdGg6IDE1JTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG1hcmdpbjogMCA1JTtcbiAgICAgICAgZGl2IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTY2cHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2NjYztcbiAgICAgICAgICAgICAgICByaWdodDogNTAlO1xuICAgICAgICAgICAgICAgIHRvcDogLTI0cHg7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZGRkO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjODg4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmLmFjdGl2ZSxcbiAgICAgICAgJi50YWItY29tcGxldGVkIHtcbiAgICAgICAgICAgIGRpdiB7XG4gICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJGNvbW1vbi1ibHVlO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGJnLXdoaXRlO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkY29tbW9uLWJsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkY29tbW9uLWJsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGNvbW1vbi1ibHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnN0dWRlbnQtdGFibGUge1xuICAgICYudGFibGUtcmVzcG9uc2l2ZSB0ciB0ZDpmaXJzdC1jaGlsZCAuZmllbGQtY2hlY2tib3gtd3JhcHBlcixcbiAgICAmLnRhYmxlLXJlc3BvbnNpdmUgdHIgdGg6Zmlyc3QtY2hpbGQgLmZpZWxkLWNoZWNrYm94LXdyYXBwZXIge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY3cHgpIHtcbiAgICAubmF2LXRhYiB7XG4gICAgICAgIG1heC13aWR0aDogMzAwcHg7XG4gICAgfVxuICAgIC5uYXYtdGFiIGxpIGRpdjphZnRlciB7XG4gICAgICAgIHdpZHRoOiA3M3B4O1xuICAgICAgICBib3R0b206IGF1dG87XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgdG9wOiAxNXB4OyAvLyAvKiBtYXJnaW46IGF1dG87ICovXG4gICAgfVxuICAgIC50b29sdGlwLWJveC1maWVsZCB7XG4gICAgICAgIHJpZ2h0OiAxNnB4O1xuICAgICAgICBsZWZ0OiBhdXRvO1xuICAgIH1cbiAgICAucXVlc3Rpb25JbmZvOmhvdmVyIC50b29sdGlwLWJveC1maWVsZCB7XG4gICAgICAgIHJpZ2h0OiAyOHB4O1xuICAgICAgICBsZWZ0OiBhdXRvO1xuICAgIH1cbiAgICAudG9vbHRpcC1ib3gtZmllbGQ6YWZ0ZXIge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAgICAgICByaWdodDogLTdweDtcbiAgICAgICAgbGVmdDogYXV0bztcbiAgICB9XG4gICAgLmluZm8tdG9vbDpob3ZlciAudG9vbHRpcC1ib3gtZmllbGQge1xuICAgICAgICBsZWZ0OiAyOHB4O1xuICAgICAgICByaWdodDogYXV0bztcbiAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAgICAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgbGVmdDogLTdweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuZXhwb3J0LXByaW50IHtcbiAgICAgICAgLmV4cG9ydC1pY29uLFxuICAgICAgICAucmVwb3J0LWljb24ge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAubWlkZGxlLXRvcCAucXVlc3Rpb25JbmZvOmhvdmVyIC50b29sdGlwLWJveC1maWVsZCB7XG4gICAgICAgIGxlZnQ6IDI4cHg7XG4gICAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgICAgICAgICAgbGVmdDogLTdweDtcbiAgICAgICAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjQwcHgpIHt9XG5cblxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PWNvbW1vbiBtZW51IGljb249PT09PT09PT09PT09PT09PT09PT0qL1xuXG4uZWRpdC1pY29uIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy8uLi9hc3NldHMvaW1hZ2VzL2VkaXRfZGV0YWlscy5zdmcnKSBuby1yZXBlYXQ7XG4gICAgd2lkdGg6IDE5cHg7XG4gICAgaGVpZ2h0OiAxOXB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG5pbnB1dDotd2Via2l0LWF1dG9maWxsIHtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDEwMDBweCB3aGl0ZSBpbnNldCAhaW1wb3J0YW50O1xufVxuXG4udmlldy1pY29uIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy8uL2Fzc2V0cy9pbWFnZXMvdmlld19kZXRhaWxzLnN2ZycpIG5vLXJlcGVhdDtcbiAgICB3aWR0aDogMTNweDtcbiAgICBoZWlnaHQ6IDE1cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5hbGVydC1kYW5nZXIge1xuICAgIGNvbG9yOiByZWQgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uYWxlcnQge1xuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5wb3B1cFdyYXBwZXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm90dG9tOiAwO1xuICAgIHRvcDogMHB4O1xuICAgIHJpZ2h0OiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyMzAsIDIzMCwgMjMwLCAwLjUpO1xuICAgIHotaW5kZXg6IDEwMDsgLy8gZGlzcGxheTogbm9uZTtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuNXMgZWFzZS1pbjtcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAuNXMgZWFzZS1pbjtcbiAgICAtbXMtdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlLWluO1xuICAgIC1vLXRyYW5zaXRpb246IGFsbCAuNXMgZWFzZS1pbjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjVzIGVhc2UtaW47XG4gICAgLnBvcHVwIHtcbiAgICAgICAgbWF4LXdpZHRoOiA2MCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB0b3A6IDUlO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgJi5sYXJnZSB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDgwJTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgdG9wOiAyJTtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgfVxuICAgICAgICAmLnNtYWxsIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogNDAlO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICB0b3A6IDUlO1xuICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICB9XG4gICAgICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgd2lkdGg6IDdweDtcbiAgICAgICAgICAgIGhlaWdodDogN3B4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4ucG9wdXAtd3JhcHBlciB7XG4gICAgcGFkZGluZzogMjBweDsgLy8gaGVpZ2h0OiAxMDAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm94LXNoYWRvdzogMXB4IDhweCAyMHB4IDVweCAjOWM5YzljO1xuICAgIHRyYW5zaXRpb246IHVuc2V0O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgaDIge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuICAgIGg0IHtcbiAgICAgICAgbWFyZ2luOiAyNXB4IDAgMTVweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG59XG5cbi5jbG9zZVBvcHVwIHtcbiAgICByaWdodDogMTBweDtcbiAgICB0b3A6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICB3aWR0aDogMjZweDtcbiAgICBoZWlnaHQ6IDI2cHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDNweDtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgICYuYm90dG9tUmlnaHQge1xuICAgICAgICBib3R0b206IDJweDtcbiAgICAgICAgdG9wOiBhdXRvO1xuICAgICAgICBsZWZ0OiBhdXRvO1xuICAgICAgICByaWdodDogMDtcbiAgICB9XG4gICAgJi50b3BMZWZ0IHtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICAgIHRvcDogMXB4O1xuICAgICAgICBib3R0b206IGF1dG87XG4gICAgfVxuICAgICYuYm90dG9tTGVmdCB7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgICBib3R0b206IDJweDtcbiAgICAgICAgdG9wOiBhdXRvO1xuICAgIH1cbiAgICBzdmcge1xuICAgICAgICB3aWR0aDogMTZweDtcbiAgICAgICAgLmNscy0xIHtcbiAgICAgICAgICAgIHN0cm9rZTogI2MxYzFjMTtcbiAgICAgICAgICAgIHN0cm9rZS13aWR0aDogMnB4O1xuICAgICAgICB9XG4gICAgfVxuICAgICY6aG92ZXIge1xuICAgICAgICAuY2xzLTEge1xuICAgICAgICAgICAgc3Ryb2tlOiAkY29tbW9uLWJsdWU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5wb3B1cC1jb250ZW50IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIC5yb3cge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgfVxuICAgIC5jb250ZW50LXdyYXBwZXIge1xuICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgbWF4LWhlaWdodDogNDgwcHg7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIC5jb250ZW50LXNjcm9sbGVyIHtcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDQ3NXB4O1xuICAgICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uZmFkZUluIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PWNzcyBmb3IgbW9iIHBvcHVwXG4ucG9wdXBXcmFwcGVyTW9iIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvdHRvbTogMDtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgbGVmdDogMDtcbiAgICB6LWluZGV4OiAxMDA7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjsgLy8gb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuNXMgZWFzZS1pbjtcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAuNXMgZWFzZS1pbjtcbiAgICAtbXMtdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlLWluO1xuICAgIC1vLXRyYW5zaXRpb246IGFsbCAuNXMgZWFzZS1pbjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjVzIGVhc2UtaW47XG4gICAgLmNsb3NlUG9wdXAge1xuICAgICAgICByaWdodDogLTI1cHg7XG4gICAgICAgIHRvcDogLTI3cHg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbn1cblxuLnBvcHVwLW1vYiB7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtaGVpZ2h0OiA3MCU7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBwYWRkaW5nOiAzMHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIHotaW5kZXg6IDE7XG4gICAgYm90dG9tOiAtNzAlO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlLWluO1xuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlLWluO1xuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgLjVzIGVhc2UtaW47XG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlLWluO1xuICAgIHRyYW5zaXRpb246IGFsbCAuNXMgZWFzZS1pbjtcbn1cblxuLnBvcHVwV3JhcHBlck1vYi5zaG93UG9wdXBNb2Ige1xuICAgIHotaW5kZXg6IDEwMDtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIG9wYWNpdHk6IDE7XG59XG5cbi5wb3B1cFdyYXBwZXJNb2Iuc2hvd1BvcHVwTW9iIC5wb3B1cC1tb2Ige1xuICAgIGJvdHRvbTogMDtcbn1cblxuLnNkYiB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICY+bGkge1xuICAgICAgICBwYWRkaW5nOiA4cHggMDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYmEoMjExLCAyMTIsIDIxMywgMC4yKTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIH1cbiAgICAgICAgaDUge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIGNvbG9yOiAjMWUyMzI4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAuODtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICAgICAgICB9XG4gICAgICAgIGg2IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICBjb2xvcjogIzFlMjMyODtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogLjg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmluLXN0dWRlbnQtbGlzdCB7XG4gICAgJj5saSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgYSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIG1hcmdpbjogMCAtMTVweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweCAxNXB4O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNywgOTYsIDE2MywgMC4wOTAxOTYwNzg0MzEzNzI1NSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjRweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zZGItcmlnaHQge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMzAsIDM1LCA0MCwgMC43KTtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNnB4O1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIHN0cm9uZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICYucmVjZW50IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDMwLCAzNSwgNDAsIDAuNyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogODUlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICYuZGVsZXRlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDMwLCAzNSwgNDAsIDAuNyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICYubWFya2VycyB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA4cHggMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAuaG9sZGVyIHtcbiAgICAgICAgbGkge1xuICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gYnkgbGF4bWlcbi5kcm9wZG93biB1bCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGhlbWUtZ3JlZW4gLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZSB0ZC53ZWVrIHNwYW4ge1xuICAgIGNvbG9yOiAjMzM3YWI3ICFpbXBvcnRhbnQ7XG59XG5cbi8vIC50aGVtZS1ncmVlbiAuYnMtZGF0ZXBpY2tlci1oZWFkIHtcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4NGY2ICFpbXBvcnRhbnQ7XG4vLyB9XG4udGhlbWUtZ3JlZW4gLmJzLWRhdGVwaWNrZXItaGVhZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzN2FiNyAhaW1wb3J0YW50O1xufVxuXG4udGhlbWUtZ3JlZW4gLmJzLWRhdGVwaWNrZXItYm9keSB0YWJsZSB0ZCBzcGFuLnNlbGVjdGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzM3YWI3ICFpbXBvcnRhbnQ7XG59XG5cbmJzLWRhdGVwaWNrZXItY29udGFpbmVyLFxuYnMtZGF0ZXJhbmdlcGlja2VyLWNvbnRhaW5lciB7XG4gICAgei1pbmRleDogOTk5OTk5OTk5OTkgIWltcG9ydGFudDtcbiAgICBsZWZ0OiAtNSUgIWltcG9ydGFudDtcbn1cblxuLm5leHQ6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCIgIWltcG9ydGFudDtcbn1cbmJvZHl7XG4gICAgYmFja2dyb3VuZDogI2Y0ZjVmNyAhaW1wb3J0YW50O1xufVxuLm1vZGFsLWJhY2tkcm9wLmluLC5tb2RhbC1iYWNrZHJvcCB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuIiwiLmNvbnRhaW5lcixcbi5jb250YWluZXItZmx1aWQge1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgcGFkZGluZy1yaWdodDogMTVweFxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDo3NjhweCkge1xuICAgIC5jb250YWluZXIge1xuICAgICAgICB3aWR0aDogNzUwcHhcbiAgICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOjk5MnB4KSB7XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiA5NzBweFxuICAgIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6MTIwMHB4KSB7XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAxMTcwcHhcbiAgICB9XG59XG5cbi5yb3cge1xuICAgIG1hcmdpbi1sZWZ0OiAtMTVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNXB4XG59XG5cbi5jLWxnLTEsXG4uYy1sZy0xMCxcbi5jLWxnLTExLFxuLmMtbGctMTIsXG4uYy1sZy0yLFxuLmMtbGctMyxcbi5jLWxnLTQsXG4uYy1sZy01LFxuLmMtbGctNixcbi5jLWxnLTcsXG4uYy1sZy04LFxuLmMtbGctOSxcbi5jLW1kLTEsXG4uYy1tZC0xMCxcbi5jLW1kLTExLFxuLmMtbWQtMTIsXG4uYy1tZC0yLFxuLmMtbWQtMyxcbi5jLW1kLTQsXG4uYy1tZC01LFxuLmMtbWQtNixcbi5jLW1kLTcsXG4uYy1tZC04LFxuLmMtbWQtOSxcbi5jLXNtLTEsXG4uYy1zbS0xMCxcbi5jLXNtLTExLFxuLmMtc20tMTIsXG4uYy1zbS0yLFxuLmMtc20tMyxcbi5jLXNtLTQsXG4uYy1zbS01LFxuLmMtc20tNixcbi5jLXNtLTcsXG4uYy1zbS04LFxuLmMtc20tOSxcbi5jLXhzLTEsXG4uYy14cy0xMCxcbi5jLXhzLTExLFxuLmMteHMtMTIsXG4uYy14cy0yLFxuLmMteHMtMyxcbi5jLXhzLTQsXG4uYy14cy01LFxuLmMteHMtNixcbi5jLXhzLTcsXG4uYy14cy04LFxuLmMteHMtOSB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWluLWhlaWdodDogMXB4O1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4XG59XG5cbi5jLXhzLTEsXG4uYy14cy0xMCxcbi5jLXhzLTExLFxuLmMteHMtMTIsXG4uYy14cy0yLFxuLmMteHMtMyxcbi5jLXhzLTQsXG4uYy14cy01LFxuLmMteHMtNixcbi5jLXhzLTcsXG4uYy14cy04LFxuLmMteHMtOSB7XG4gICAgZmxvYXQ6IGxlZnRcbn1cblxuLmMteHMtMTIge1xuICAgIHdpZHRoOiAxMDAlXG59XG5cbi5jLXhzLTExIHtcbiAgICB3aWR0aDogOTEuNjY2NjY2NjclXG59XG5cbi5jLXhzLTEwIHtcbiAgICB3aWR0aDogODMuMzMzMzMzMzMlXG59XG5cbi5jLXhzLTkge1xuICAgIHdpZHRoOiA3NSVcbn1cblxuLmMteHMtOCB7XG4gICAgd2lkdGg6IDY2LjY2NjY2NjY3JVxufVxuXG4uYy14cy03IHtcbiAgICB3aWR0aDogNTguMzMzMzMzMzMlXG59XG5cbi5jLXhzLTYge1xuICAgIHdpZHRoOiA1MCVcbn1cblxuLmMteHMtNSB7XG4gICAgd2lkdGg6IDQxLjY2NjY2NjY3JVxufVxuXG4uYy14cy00IHtcbiAgICB3aWR0aDogMzMuMzMzMzMzMzMlXG59XG5cbi5jLXhzLTMge1xuICAgIHdpZHRoOiAyNSVcbn1cblxuLmMteHMtMiB7XG4gICAgd2lkdGg6IDE2LjY2NjY2NjY3JVxufVxuXG4uYy14cy0xIHtcbiAgICB3aWR0aDogOC4zMzMzMzMzMyVcbn1cblxuLmMteHMtcHVsbC0xMiB7XG4gICAgcmlnaHQ6IDEwMCVcbn1cblxuLmMteHMtcHVsbC0xMSB7XG4gICAgcmlnaHQ6IDkxLjY2NjY2NjY3JVxufVxuXG4uYy14cy1wdWxsLTEwIHtcbiAgICByaWdodDogODMuMzMzMzMzMzMlXG59XG5cbi5jLXhzLXB1bGwtOSB7XG4gICAgcmlnaHQ6IDc1JVxufVxuXG4uYy14cy1wdWxsLTgge1xuICAgIHJpZ2h0OiA2Ni42NjY2NjY2NyVcbn1cblxuLmMteHMtcHVsbC03IHtcbiAgICByaWdodDogNTguMzMzMzMzMzMlXG59XG5cbi5jLXhzLXB1bGwtNiB7XG4gICAgcmlnaHQ6IDUwJVxufVxuXG4uYy14cy1wdWxsLTUge1xuICAgIHJpZ2h0OiA0MS42NjY2NjY2NyVcbn1cblxuLmMteHMtcHVsbC00IHtcbiAgICByaWdodDogMzMuMzMzMzMzMzMlXG59XG5cbi5jLXhzLXB1bGwtMyB7XG4gICAgcmlnaHQ6IDI1JVxufVxuXG4uYy14cy1wdWxsLTIge1xuICAgIHJpZ2h0OiAxNi42NjY2NjY2NyVcbn1cblxuLmMteHMtcHVsbC0xIHtcbiAgICByaWdodDogOC4zMzMzMzMzMyVcbn1cblxuLmMteHMtcHVsbC0wIHtcbiAgICByaWdodDogYXV0b1xufVxuXG4uYy14cy1wdXNoLTEyIHtcbiAgICBsZWZ0OiAxMDAlXG59XG5cbi5jLXhzLXB1c2gtMTEge1xuICAgIGxlZnQ6IDkxLjY2NjY2NjY3JVxufVxuXG4uYy14cy1wdXNoLTEwIHtcbiAgICBsZWZ0OiA4My4zMzMzMzMzMyVcbn1cblxuLmMteHMtcHVzaC05IHtcbiAgICBsZWZ0OiA3NSVcbn1cblxuLmMteHMtcHVzaC04IHtcbiAgICBsZWZ0OiA2Ni42NjY2NjY2NyVcbn1cblxuLmMteHMtcHVzaC03IHtcbiAgICBsZWZ0OiA1OC4zMzMzMzMzMyVcbn1cblxuLmMteHMtcHVzaC02IHtcbiAgICBsZWZ0OiA1MCVcbn1cblxuLmMteHMtcHVzaC01IHtcbiAgICBsZWZ0OiA0MS42NjY2NjY2NyVcbn1cblxuLmMteHMtcHVzaC00IHtcbiAgICBsZWZ0OiAzMy4zMzMzMzMzMyVcbn1cblxuLmMteHMtcHVzaC0zIHtcbiAgICBsZWZ0OiAyNSVcbn1cblxuLmMteHMtcHVzaC0yIHtcbiAgICBsZWZ0OiAxNi42NjY2NjY2NyVcbn1cblxuLmMteHMtcHVzaC0xIHtcbiAgICBsZWZ0OiA4LjMzMzMzMzMzJVxufVxuXG4uYy14cy1wdXNoLTAge1xuICAgIGxlZnQ6IGF1dG9cbn1cblxuLmMteHMtb2Zmc2V0LTEyIHtcbiAgICBtYXJnaW4tbGVmdDogMTAwJVxufVxuXG4uYy14cy1vZmZzZXQtMTEge1xuICAgIG1hcmdpbi1sZWZ0OiA5MS42NjY2NjY2NyVcbn1cblxuLmMteHMtb2Zmc2V0LTEwIHtcbiAgICBtYXJnaW4tbGVmdDogODMuMzMzMzMzMzMlXG59XG5cbi5jLXhzLW9mZnNldC05IHtcbiAgICBtYXJnaW4tbGVmdDogNzUlXG59XG5cbi5jLXhzLW9mZnNldC04IHtcbiAgICBtYXJnaW4tbGVmdDogNjYuNjY2NjY2NjclXG59XG5cbi5jLXhzLW9mZnNldC03IHtcbiAgICBtYXJnaW4tbGVmdDogNTguMzMzMzMzMzMlXG59XG5cbi5jLXhzLW9mZnNldC02IHtcbiAgICBtYXJnaW4tbGVmdDogNTAlXG59XG5cbi5jLXhzLW9mZnNldC01IHtcbiAgICBtYXJnaW4tbGVmdDogNDEuNjY2NjY2NjclXG59XG5cbi5jLXhzLW9mZnNldC00IHtcbiAgICBtYXJnaW4tbGVmdDogMzMuMzMzMzMzMzMlXG59XG5cbi5jLXhzLW9mZnNldC0zIHtcbiAgICBtYXJnaW4tbGVmdDogMjUlXG59XG5cbi5jLXhzLW9mZnNldC0yIHtcbiAgICBtYXJnaW4tbGVmdDogMTYuNjY2NjY2NjclXG59XG5cbi5jLXhzLW9mZnNldC0xIHtcbiAgICBtYXJnaW4tbGVmdDogOC4zMzMzMzMzMyVcbn1cblxuLmMteHMtb2Zmc2V0LTAge1xuICAgIG1hcmdpbi1sZWZ0OiAwXG59XG5cbkBtZWRpYSAobWluLXdpZHRoOjc2OHB4KSB7XG4gICAgLmMtc20tMSxcbiAgICAuYy1zbS0xMCxcbiAgICAuYy1zbS0xMSxcbiAgICAuYy1zbS0xMixcbiAgICAuYy1zbS0yLFxuICAgIC5jLXNtLTMsXG4gICAgLmMtc20tNCxcbiAgICAuYy1zbS01LFxuICAgIC5jLXNtLTYsXG4gICAgLmMtc20tNyxcbiAgICAuYy1zbS04LFxuICAgIC5jLXNtLTkge1xuICAgICAgICBmbG9hdDogbGVmdFxuICAgIH1cbiAgICAuYy1zbS0xMiB7XG4gICAgICAgIHdpZHRoOiAxMDAlXG4gICAgfVxuICAgIC5jLXNtLTExIHtcbiAgICAgICAgd2lkdGg6IDkxLjY2NjY2NjY3JVxuICAgIH1cbiAgICAuYy1zbS0xMCB7XG4gICAgICAgIHdpZHRoOiA4My4zMzMzMzMzMyVcbiAgICB9XG4gICAgLmMtc20tOSB7XG4gICAgICAgIHdpZHRoOiA3NSVcbiAgICB9XG4gICAgLmMtc20tOCB7XG4gICAgICAgIHdpZHRoOiA2Ni42NjY2NjY2NyVcbiAgICB9XG4gICAgLmMtc20tNyB7XG4gICAgICAgIHdpZHRoOiA1OC4zMzMzMzMzMyVcbiAgICB9XG4gICAgLmMtc20tNiB7XG4gICAgICAgIHdpZHRoOiA1MCVcbiAgICB9XG4gICAgLmMtc20tNSB7XG4gICAgICAgIHdpZHRoOiA0MS42NjY2NjY2NyVcbiAgICB9XG4gICAgLmMtc20tNCB7XG4gICAgICAgIHdpZHRoOiAzMy4zMzMzMzMzMyVcbiAgICB9XG4gICAgLmMtc20tMyB7XG4gICAgICAgIHdpZHRoOiAyNSVcbiAgICB9XG4gICAgLmMtc20tMiB7XG4gICAgICAgIHdpZHRoOiAxNi42NjY2NjY2NyVcbiAgICB9XG4gICAgLmMtc20tMSB7XG4gICAgICAgIHdpZHRoOiA4LjMzMzMzMzMzJVxuICAgIH1cbiAgICAuYy1zbS1wdWxsLTEyIHtcbiAgICAgICAgcmlnaHQ6IDEwMCVcbiAgICB9XG4gICAgLmMtc20tcHVsbC0xMSB7XG4gICAgICAgIHJpZ2h0OiA5MS42NjY2NjY2NyVcbiAgICB9XG4gICAgLmMtc20tcHVsbC0xMCB7XG4gICAgICAgIHJpZ2h0OiA4My4zMzMzMzMzMyVcbiAgICB9XG4gICAgLmMtc20tcHVsbC05IHtcbiAgICAgICAgcmlnaHQ6IDc1JVxuICAgIH1cbiAgICAuYy1zbS1wdWxsLTgge1xuICAgICAgICByaWdodDogNjYuNjY2NjY2NjclXG4gICAgfVxuICAgIC5jLXNtLXB1bGwtNyB7XG4gICAgICAgIHJpZ2h0OiA1OC4zMzMzMzMzMyVcbiAgICB9XG4gICAgLmMtc20tcHVsbC02IHtcbiAgICAgICAgcmlnaHQ6IDUwJVxuICAgIH1cbiAgICAuYy1zbS1wdWxsLTUge1xuICAgICAgICByaWdodDogNDEuNjY2NjY2NjclXG4gICAgfVxuICAgIC5jLXNtLXB1bGwtNCB7XG4gICAgICAgIHJpZ2h0OiAzMy4zMzMzMzMzMyVcbiAgICB9XG4gICAgLmMtc20tcHVsbC0zIHtcbiAgICAgICAgcmlnaHQ6IDI1JVxuICAgIH1cbiAgICAuYy1zbS1wdWxsLTIge1xuICAgICAgICByaWdodDogMTYuNjY2NjY2NjclXG4gICAgfVxuICAgIC5jLXNtLXB1bGwtMSB7XG4gICAgICAgIHJpZ2h0OiA4LjMzMzMzMzMzJVxuICAgIH1cbiAgICAuYy1zbS1wdWxsLTAge1xuICAgICAgICByaWdodDogYXV0b1xuICAgIH1cbiAgICAuYy1zbS1wdXNoLTEyIHtcbiAgICAgICAgbGVmdDogMTAwJVxuICAgIH1cbiAgICAuYy1zbS1wdXNoLTExIHtcbiAgICAgICAgbGVmdDogOTEuNjY2NjY2NjclXG4gICAgfVxuICAgIC5jLXNtLXB1c2gtMTAge1xuICAgICAgICBsZWZ0OiA4My4zMzMzMzMzMyVcbiAgICB9XG4gICAgLmMtc20tcHVzaC05IHtcbiAgICAgICAgbGVmdDogNzUlXG4gICAgfVxuICAgIC5jLXNtLXB1c2gtOCB7XG4gICAgICAgIGxlZnQ6IDY2LjY2NjY2NjY3JVxuICAgIH1cbiAgICAuYy1zbS1wdXNoLTcge1xuICAgICAgICBsZWZ0OiA1OC4zMzMzMzMzMyVcbiAgICB9XG4gICAgLmMtc20tcHVzaC02IHtcbiAgICAgICAgbGVmdDogNTAlXG4gICAgfVxuICAgIC5jLXNtLXB1c2gtNSB7XG4gICAgICAgIGxlZnQ6IDQxLjY2NjY2NjY3JVxuICAgIH1cbiAgICAuYy1zbS1wdXNoLTQge1xuICAgICAgICBsZWZ0OiAzMy4zMzMzMzMzMyVcbiAgICB9XG4gICAgLmMtc20tcHVzaC0zIHtcbiAgICAgICAgbGVmdDogMjUlXG4gICAgfVxuICAgIC5jLXNtLXB1c2gtMiB7XG4gICAgICAgIGxlZnQ6IDE2LjY2NjY2NjY3JVxuICAgIH1cbiAgICAuYy1zbS1wdXNoLTEge1xuICAgICAgICBsZWZ0OiA4LjMzMzMzMzMzJVxuICAgIH1cbiAgICAuYy1zbS1wdXNoLTAge1xuICAgICAgICBsZWZ0OiBhdXRvXG4gICAgfVxuICAgIC5jLXNtLW9mZnNldC0xMiB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMDAlXG4gICAgfVxuICAgIC5jLXNtLW9mZnNldC0xMSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA5MS42NjY2NjY2NyVcbiAgICB9XG4gICAgLmMtc20tb2Zmc2V0LTEwIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDgzLjMzMzMzMzMzJVxuICAgIH1cbiAgICAuYy1zbS1vZmZzZXQtOSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA3NSVcbiAgICB9XG4gICAgLmMtc20tb2Zmc2V0LTgge1xuICAgICAgICBtYXJnaW4tbGVmdDogNjYuNjY2NjY2NjclXG4gICAgfVxuICAgIC5jLXNtLW9mZnNldC03IHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDU4LjMzMzMzMzMzJVxuICAgIH1cbiAgICAuYy1zbS1vZmZzZXQtNiB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1MCVcbiAgICB9XG4gICAgLmMtc20tb2Zmc2V0LTUge1xuICAgICAgICBtYXJnaW4tbGVmdDogNDEuNjY2NjY2NjclXG4gICAgfVxuICAgIC5jLXNtLW9mZnNldC00IHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDMzLjMzMzMzMzMzJVxuICAgIH1cbiAgICAuYy1zbS1vZmZzZXQtMyB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyNSVcbiAgICB9XG4gICAgLmMtc20tb2Zmc2V0LTIge1xuICAgICAgICBtYXJnaW4tbGVmdDogMTYuNjY2NjY2NjclXG4gICAgfVxuICAgIC5jLXNtLW9mZnNldC0xIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDguMzMzMzMzMzMlXG4gICAgfVxuICAgIC5jLXNtLW9mZnNldC0wIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDBcbiAgICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOjk5MnB4KSB7XG4gICAgLmMtbWQtMSxcbiAgICAuYy1tZC0xMCxcbiAgICAuYy1tZC0xMSxcbiAgICAuYy1tZC0xMixcbiAgICAuYy1tZC0yLFxuICAgIC5jLW1kLTMsXG4gICAgLmMtbWQtNCxcbiAgICAuYy1tZC01LFxuICAgIC5jLW1kLTYsXG4gICAgLmMtbWQtNyxcbiAgICAuYy1tZC04LFxuICAgIC5jLW1kLTkge1xuICAgICAgICBmbG9hdDogbGVmdFxuICAgIH1cbiAgICAuYy1tZC0xMiB7XG4gICAgICAgIHdpZHRoOiAxMDAlXG4gICAgfVxuICAgIC5jLW1kLTExIHtcbiAgICAgICAgd2lkdGg6IDkxLjY2NjY2NjY3JVxuICAgIH1cbiAgICAuYy1tZC0xMCB7XG4gICAgICAgIHdpZHRoOiA4My4zMzMzMzMzMyVcbiAgICB9XG4gICAgLmMtbWQtOSB7XG4gICAgICAgIHdpZHRoOiA3NSVcbiAgICB9XG4gICAgLmMtbWQtOCB7XG4gICAgICAgIHdpZHRoOiA2Ni42NjY2NjY2NyVcbiAgICB9XG4gICAgLmMtbWQtNyB7XG4gICAgICAgIHdpZHRoOiA1OC4zMzMzMzMzMyVcbiAgICB9XG4gICAgLmMtbWQtNiB7XG4gICAgICAgIHdpZHRoOiA1MCVcbiAgICB9XG4gICAgLmMtbWQtNSB7XG4gICAgICAgIHdpZHRoOiA0MS42NjY2NjY2NyVcbiAgICB9XG4gICAgLmMtbWQtNCB7XG4gICAgICAgIHdpZHRoOiAzMy4zMzMzMzMzMyVcbiAgICB9XG4gICAgLmMtbWQtMyB7XG4gICAgICAgIHdpZHRoOiAyNSVcbiAgICB9XG4gICAgLmMtbWQtMiB7XG4gICAgICAgIHdpZHRoOiAxNi42NjY2NjY2NyVcbiAgICB9XG4gICAgLmMtbWQtMSB7XG4gICAgICAgIHdpZHRoOiA4LjMzMzMzMzMzJVxuICAgIH1cbiAgICAuYy1tZC1wdWxsLTEyIHtcbiAgICAgICAgcmlnaHQ6IDEwMCVcbiAgICB9XG4gICAgLmMtbWQtcHVsbC0xMSB7XG4gICAgICAgIHJpZ2h0OiA5MS42NjY2NjY2NyVcbiAgICB9XG4gICAgLmMtbWQtcHVsbC0xMCB7XG4gICAgICAgIHJpZ2h0OiA4My4zMzMzMzMzMyVcbiAgICB9XG4gICAgLmMtbWQtcHVsbC05IHtcbiAgICAgICAgcmlnaHQ6IDc1JVxuICAgIH1cbiAgICAuYy1tZC1wdWxsLTgge1xuICAgICAgICByaWdodDogNjYuNjY2NjY2NjclXG4gICAgfVxuICAgIC5jLW1kLXB1bGwtNyB7XG4gICAgICAgIHJpZ2h0OiA1OC4zMzMzMzMzMyVcbiAgICB9XG4gICAgLmMtbWQtcHVsbC02IHtcbiAgICAgICAgcmlnaHQ6IDUwJVxuICAgIH1cbiAgICAuYy1tZC1wdWxsLTUge1xuICAgICAgICByaWdodDogNDEuNjY2NjY2NjclXG4gICAgfVxuICAgIC5jLW1kLXB1bGwtNCB7XG4gICAgICAgIHJpZ2h0OiAzMy4zMzMzMzMzMyVcbiAgICB9XG4gICAgLmMtbWQtcHVsbC0zIHtcbiAgICAgICAgcmlnaHQ6IDI1JVxuICAgIH1cbiAgICAuYy1tZC1wdWxsLTIge1xuICAgICAgICByaWdodDogMTYuNjY2NjY2NjclXG4gICAgfVxuICAgIC5jLW1kLXB1bGwtMSB7XG4gICAgICAgIHJpZ2h0OiA4LjMzMzMzMzMzJVxuICAgIH1cbiAgICAuYy1tZC1wdWxsLTAge1xuICAgICAgICByaWdodDogYXV0b1xuICAgIH1cbiAgICAuYy1tZC1wdXNoLTEyIHtcbiAgICAgICAgbGVmdDogMTAwJVxuICAgIH1cbiAgICAuYy1tZC1wdXNoLTExIHtcbiAgICAgICAgbGVmdDogOTEuNjY2NjY2NjclXG4gICAgfVxuICAgIC5jLW1kLXB1c2gtMTAge1xuICAgICAgICBsZWZ0OiA4My4zMzMzMzMzMyVcbiAgICB9XG4gICAgLmMtbWQtcHVzaC05IHtcbiAgICAgICAgbGVmdDogNzUlXG4gICAgfVxuICAgIC5jLW1kLXB1c2gtOCB7XG4gICAgICAgIGxlZnQ6IDY2LjY2NjY2NjY3JVxuICAgIH1cbiAgICAuYy1tZC1wdXNoLTcge1xuICAgICAgICBsZWZ0OiA1OC4zMzMzMzMzMyVcbiAgICB9XG4gICAgLmMtbWQtcHVzaC02IHtcbiAgICAgICAgbGVmdDogNTAlXG4gICAgfVxuICAgIC5jLW1kLXB1c2gtNSB7XG4gICAgICAgIGxlZnQ6IDQxLjY2NjY2NjY3JVxuICAgIH1cbiAgICAuYy1tZC1wdXNoLTQge1xuICAgICAgICBsZWZ0OiAzMy4zMzMzMzMzMyVcbiAgICB9XG4gICAgLmMtbWQtcHVzaC0zIHtcbiAgICAgICAgbGVmdDogMjUlXG4gICAgfVxuICAgIC5jLW1kLXB1c2gtMiB7XG4gICAgICAgIGxlZnQ6IDE2LjY2NjY2NjY3JVxuICAgIH1cbiAgICAuYy1tZC1wdXNoLTEge1xuICAgICAgICBsZWZ0OiA4LjMzMzMzMzMzJVxuICAgIH1cbiAgICAuYy1tZC1wdXNoLTAge1xuICAgICAgICBsZWZ0OiBhdXRvXG4gICAgfVxuICAgIC5jLW1kLW9mZnNldC0xMiB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMDAlXG4gICAgfVxuICAgIC5jLW1kLW9mZnNldC0xMSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA5MS42NjY2NjY2NyVcbiAgICB9XG4gICAgLmMtbWQtb2Zmc2V0LTEwIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDgzLjMzMzMzMzMzJVxuICAgIH1cbiAgICAuYy1tZC1vZmZzZXQtOSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA3NSVcbiAgICB9XG4gICAgLmMtbWQtb2Zmc2V0LTgge1xuICAgICAgICBtYXJnaW4tbGVmdDogNjYuNjY2NjY2NjclXG4gICAgfVxuICAgIC5jLW1kLW9mZnNldC03IHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDU4LjMzMzMzMzMzJVxuICAgIH1cbiAgICAuYy1tZC1vZmZzZXQtNiB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1MCVcbiAgICB9XG4gICAgLmMtbWQtb2Zmc2V0LTUge1xuICAgICAgICBtYXJnaW4tbGVmdDogNDEuNjY2NjY2NjclXG4gICAgfVxuICAgIC5jLW1kLW9mZnNldC00IHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDMzLjMzMzMzMzMzJVxuICAgIH1cbiAgICAuYy1tZC1vZmZzZXQtMyB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyNSVcbiAgICB9XG4gICAgLmMtbWQtb2Zmc2V0LTIge1xuICAgICAgICBtYXJnaW4tbGVmdDogMTYuNjY2NjY2NjclXG4gICAgfVxuICAgIC5jLW1kLW9mZnNldC0xIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDguMzMzMzMzMzMlXG4gICAgfVxuICAgIC5jLW1kLW9mZnNldC0wIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDBcbiAgICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOjEyMDBweCkge1xuICAgIC5jLWxnLTEsXG4gICAgLmMtbGctMTAsXG4gICAgLmMtbGctMTEsXG4gICAgLmMtbGctMTIsXG4gICAgLmMtbGctMixcbiAgICAuYy1sZy0zLFxuICAgIC5jLWxnLTQsXG4gICAgLmMtbGctNSxcbiAgICAuYy1sZy02LFxuICAgIC5jLWxnLTcsXG4gICAgLmMtbGctOCxcbiAgICAuYy1sZy05IHtcbiAgICAgICAgZmxvYXQ6IGxlZnRcbiAgICB9XG4gICAgLmMtbGctMTIge1xuICAgICAgICB3aWR0aDogMTAwJVxuICAgIH1cbiAgICAuYy1sZy0xMSB7XG4gICAgICAgIHdpZHRoOiA5MS42NjY2NjY2NyVcbiAgICB9XG4gICAgLmMtbGctMTAge1xuICAgICAgICB3aWR0aDogODMuMzMzMzMzMzMlXG4gICAgfVxuICAgIC5jLWxnLTkge1xuICAgICAgICB3aWR0aDogNzUlXG4gICAgfVxuICAgIC5jLWxnLTgge1xuICAgICAgICB3aWR0aDogNjYuNjY2NjY2NjclXG4gICAgfVxuICAgIC5jLWxnLTcge1xuICAgICAgICB3aWR0aDogNTguMzMzMzMzMzMlXG4gICAgfVxuICAgIC5jLWxnLTYge1xuICAgICAgICB3aWR0aDogNTAlXG4gICAgfVxuICAgIC5jLWxnLTUge1xuICAgICAgICB3aWR0aDogNDEuNjY2NjY2NjclXG4gICAgfVxuICAgIC5jLWxnLTQge1xuICAgICAgICB3aWR0aDogMzMuMzMzMzMzMzMlXG4gICAgfVxuICAgIC5jLWxnLTMge1xuICAgICAgICB3aWR0aDogMjUlXG4gICAgfVxuICAgIC5jLWxnLTIge1xuICAgICAgICB3aWR0aDogMTYuNjY2NjY2NjclXG4gICAgfVxuICAgIC5jLWxnLTEge1xuICAgICAgICB3aWR0aDogOC4zMzMzMzMzMyVcbiAgICB9XG4gICAgLmMtbGctcHVsbC0xMiB7XG4gICAgICAgIHJpZ2h0OiAxMDAlXG4gICAgfVxuICAgIC5jLWxnLXB1bGwtMTEge1xuICAgICAgICByaWdodDogOTEuNjY2NjY2NjclXG4gICAgfVxuICAgIC5jLWxnLXB1bGwtMTAge1xuICAgICAgICByaWdodDogODMuMzMzMzMzMzMlXG4gICAgfVxuICAgIC5jLWxnLXB1bGwtOSB7XG4gICAgICAgIHJpZ2h0OiA3NSVcbiAgICB9XG4gICAgLmMtbGctcHVsbC04IHtcbiAgICAgICAgcmlnaHQ6IDY2LjY2NjY2NjY3JVxuICAgIH1cbiAgICAuYy1sZy1wdWxsLTcge1xuICAgICAgICByaWdodDogNTguMzMzMzMzMzMlXG4gICAgfVxuICAgIC5jLWxnLXB1bGwtNiB7XG4gICAgICAgIHJpZ2h0OiA1MCVcbiAgICB9XG4gICAgLmMtbGctcHVsbC01IHtcbiAgICAgICAgcmlnaHQ6IDQxLjY2NjY2NjY3JVxuICAgIH1cbiAgICAuYy1sZy1wdWxsLTQge1xuICAgICAgICByaWdodDogMzMuMzMzMzMzMzMlXG4gICAgfVxuICAgIC5jLWxnLXB1bGwtMyB7XG4gICAgICAgIHJpZ2h0OiAyNSVcbiAgICB9XG4gICAgLmMtbGctcHVsbC0yIHtcbiAgICAgICAgcmlnaHQ6IDE2LjY2NjY2NjY3JVxuICAgIH1cbiAgICAuYy1sZy1wdWxsLTEge1xuICAgICAgICByaWdodDogOC4zMzMzMzMzMyVcbiAgICB9XG4gICAgLmMtbGctcHVsbC0wIHtcbiAgICAgICAgcmlnaHQ6IGF1dG9cbiAgICB9XG4gICAgLmMtbGctcHVzaC0xMiB7XG4gICAgICAgIGxlZnQ6IDEwMCVcbiAgICB9XG4gICAgLmMtbGctcHVzaC0xMSB7XG4gICAgICAgIGxlZnQ6IDkxLjY2NjY2NjY3JVxuICAgIH1cbiAgICAuYy1sZy1wdXNoLTEwIHtcbiAgICAgICAgbGVmdDogODMuMzMzMzMzMzMlXG4gICAgfVxuICAgIC5jLWxnLXB1c2gtOSB7XG4gICAgICAgIGxlZnQ6IDc1JVxuICAgIH1cbiAgICAuYy1sZy1wdXNoLTgge1xuICAgICAgICBsZWZ0OiA2Ni42NjY2NjY2NyVcbiAgICB9XG4gICAgLmMtbGctcHVzaC03IHtcbiAgICAgICAgbGVmdDogNTguMzMzMzMzMzMlXG4gICAgfVxuICAgIC5jLWxnLXB1c2gtNiB7XG4gICAgICAgIGxlZnQ6IDUwJVxuICAgIH1cbiAgICAuYy1sZy1wdXNoLTUge1xuICAgICAgICBsZWZ0OiA0MS42NjY2NjY2NyVcbiAgICB9XG4gICAgLmMtbGctcHVzaC00IHtcbiAgICAgICAgbGVmdDogMzMuMzMzMzMzMzMlXG4gICAgfVxuICAgIC5jLWxnLXB1c2gtMyB7XG4gICAgICAgIGxlZnQ6IDI1JVxuICAgIH1cbiAgICAuYy1sZy1wdXNoLTIge1xuICAgICAgICBsZWZ0OiAxNi42NjY2NjY2NyVcbiAgICB9XG4gICAgLmMtbGctcHVzaC0xIHtcbiAgICAgICAgbGVmdDogOC4zMzMzMzMzMyVcbiAgICB9XG4gICAgLmMtbGctcHVzaC0wIHtcbiAgICAgICAgbGVmdDogYXV0b1xuICAgIH1cbiAgICAuYy1sZy1vZmZzZXQtMTIge1xuICAgICAgICBtYXJnaW4tbGVmdDogMTAwJVxuICAgIH1cbiAgICAuYy1sZy1vZmZzZXQtMTEge1xuICAgICAgICBtYXJnaW4tbGVmdDogOTEuNjY2NjY2NjclXG4gICAgfVxuICAgIC5jLWxnLW9mZnNldC0xMCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4My4zMzMzMzMzMyVcbiAgICB9XG4gICAgLmMtbGctb2Zmc2V0LTkge1xuICAgICAgICBtYXJnaW4tbGVmdDogNzUlXG4gICAgfVxuICAgIC5jLWxnLW9mZnNldC04IHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDY2LjY2NjY2NjY3JVxuICAgIH1cbiAgICAuYy1sZy1vZmZzZXQtNyB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1OC4zMzMzMzMzMyVcbiAgICB9XG4gICAgLmMtbGctb2Zmc2V0LTYge1xuICAgICAgICBtYXJnaW4tbGVmdDogNTAlXG4gICAgfVxuICAgIC5jLWxnLW9mZnNldC01IHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDQxLjY2NjY2NjY3JVxuICAgIH1cbiAgICAuYy1sZy1vZmZzZXQtNCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzMy4zMzMzMzMzMyVcbiAgICB9XG4gICAgLmMtbGctb2Zmc2V0LTMge1xuICAgICAgICBtYXJnaW4tbGVmdDogMjUlXG4gICAgfVxuICAgIC5jLWxnLW9mZnNldC0yIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE2LjY2NjY2NjY3JVxuICAgIH1cbiAgICAuYy1sZy1vZmZzZXQtMSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4LjMzMzMzMzMzJVxuICAgIH1cbiAgICAuYy1sZy1vZmZzZXQtMCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwXG4gICAgfVxufVxuXG4uY2xlYXJmaXg6YWZ0ZXIsXG4uY2xlYXJmaXg6YmVmb3JlLFxuLmNvbnRhaW5lci1mbHVpZDphZnRlcixcbi5jb250YWluZXItZmx1aWQ6YmVmb3JlLFxuLmNvbnRhaW5lcjphZnRlcixcbi5jb250YWluZXI6YmVmb3JlLFxuLnJvdzphZnRlcixcbi5yb3c6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIiBcIjtcbiAgICBkaXNwbGF5OiB0YWJsZVxufVxuXG4uY2xlYXJmaXg6YWZ0ZXIsXG4uY29udGFpbmVyLWZsdWlkOmFmdGVyLFxuLmNvbnRhaW5lcjphZnRlcixcbi5yb3c6YWZ0ZXIge1xuICAgIGNsZWFyOiBib3RoXG59IiwiQGltcG9ydCBcIi4vc3JjL2Fzc2V0cy9jc3MvY29tbW9uL3ZhcmlhYmxlcy5zY3NzXCI7XG4vKiogdGhlc2UgY3NzIGZvciBnZWFyIGljb24gZG93bmxvYWQgb3B0aW9uc1xuKiBjcmVhdGVkIGJ5IGxheG1pXG4qL1xuc3ZnOmhvdmVyICNnZWFySWNvbiB7XG4gIGZpbGw6ICMwMDg0ZjY7XG59XG5cbi5hc0hvdmVyOmhvdmVyIHtcbiAgY29sb3I6ICMwMDg0ZjYgIWltcG9ydGFudDtcbn1cblxuLmRvd25sb2FkOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubWFkZS1pbiB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5kcm9wZG93biB7XG4gICYgPiB1bCB7XG4gICAgYmFja2dyb3VuZDogJGJnLXdoaXRlO1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDsgLy8gd2lkdGg6IDIwMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICRoZWFkZXItYm9yZGVyO1xuICAgIGJvcmRlci10b3A6IDA7XG4gICAgbWFyZ2luLXRvcDogM3B4O1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA0cHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCA2cHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG5cbiAgICBsaSB7XG4gICAgICBjb2xvcjogIzMzMztcblxuICAgICAgc3Ryb25nIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG5cbiAgICAgIGEge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5sb2dpbi10dWJlIG5hdiA+IHVsID4gbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmxvZ2luLXR1YmUgbmF2ID4gdWwgPiBsaSA+IGEge1xuICBjb2xvcjogIzMzMztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRyYW5zaXRpb246IGFsbCAuNHM7XG59XG5cbi5sb2dpbi10dWJlIG5hdiA+IHVsID4gbGkgPiBhOmhvdmVyLFxuLmxvZ2luLXR1YmUgbmF2ID4gdWwgPiBsaTpob3ZlciA+IGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJhY2tncm91bmQ6ICNjY2M7XG59XG5cbi5sb2dpbi10dWJlIG5hdiA+IHVsID4gbGkgLmRyb3Bkb3duIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDEwMCU7XG4gIG1pbi13aWR0aDogMjAwcHg7XG4gIGJvcmRlci10b3A6IDA7XG4gIG9wYWNpdHk6IDA7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4xcyBjdWJpYy1iZXppZXIoLjU1LCAwLCAuNTUsIC4yKTtcbiAgdHJhbnNpdGlvbjogYWxsIC4xcyBjdWJpYy1iZXppZXIoLjU1LCAwLCAuNTUsIC4yKTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAuMjVzO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuMnM7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcblxuICAmID4gdWwge1xuICAgIGxpIHtcbiAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG5cbiAgICAgIGEge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWFyZ2luOiA1cHggMDtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBjb2xvcjogJGNvbW1vbi1ibHVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdWwge1xuICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG5cbiAgICAgIHVsIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5sb2dpbi10dWJlIG5hdiA+IHVsID4gbGk6aG92ZXIgLmRyb3Bkb3duIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvcGFjaXR5OiAxO1xuICByaWdodDogMDtcbiAgdG9wOiAxMDAlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuNHMgY3ViaWMtYmV6aWVyKC4yNSwgLjgsIC4yNSwgMSk7XG4gIHRyYW5zaXRpb246IGFsbCAuNHMgY3ViaWMtYmV6aWVyKC4yNSwgLjgsIC4yNSwgMSk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogLjVzO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuNXM7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG5cbi5wdWxsLXJpZ2h0IHtcbiAgLy8gbWFyZ2luLXRvcDogMjZweDtcbiAgLy8gbWFyZ2luLWxlZnQ6IDEyMnB4O1xufVxuXG4uc3Bhbi1idXR0b24ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDA4NGY2O1xuICBwYWRkaW5nOiA0cHggOHB4O1xuICBjb2xvcjogIzAwODRmNjtcbiAgZm9udC1zaXplOiAuOWVtO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICBzdmcge1xuICAgIG1hcmdpbjogLTNweCAwO1xuICAgIGhlaWdodDogMTRweDtcbiAgfVxufVxuXG5sb2dpbi1uYXYge1xuICAgICY+bGkge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHBhZGRpbmc6IDAgN3B4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbTtcbiAgICAgICAgLmRyb3Bkb3duIHtcbiAgICAgICAgICAgIC8vIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIHRvcDogMTAwJTtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgLmRyb3Bkb3duIHtcbiAgICAgICAgICAgICAgICAvLyBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5pY29ucyB7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuaWNvbnMge1xuICAgICAgICAgICAgd2lkdGg6IDM1cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDM1cHg7IC8vIGJvcmRlcjogMXB4IHNvbGlkICRib3JkZXItY29sb3I7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogM3B4O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMXM7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIHN2ZyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICAgICAgICAgICAgY29sb3I6IzAzNDk3OTtcblxuICAgICAgICAgICAgICAgIC5jbHMtMSB7XG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZTogIzAzNDk3OTtcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlLWxpbmVqb2luOiB1bnNldDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAudXNlci1pbmZvIHtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XG4gICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgJj4uaWNvbnMge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJj5zcGFuIHtcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICBmb250OiBub3JtYWwgbm9ybWFsIG5vcm1hbCAxNHB4LzEgRm9udEF3ZXNvbWU7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgICAgICAgICAgICAgIHRleHQtcmVuZGVyaW5nOiBhdXRvO1xuICAgICAgICAgICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXFxmMTA3XCI7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICByaWdodDogLTIwcHg7XG4gICAgICAgICAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4vKipcbiAgdGhpcyBjc3MgaXMgZm9yIHJlcG9ydCBzZWN0aW9uIGNzcyBmb3IgY2FyZHNcbiAgYWRkZWQgYnkgbGF4bWlcbiovXG4ucmVwb3J0LWJveCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHVsIHtcbiAgICAgICYuY2FyZC1ib3gge1xuICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgJi5jYXJkLXJvdyB7XG4gICAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgICAgJi5jYXJkIHtcbiAgICAgICAgICBwYWRkaW5nOiAxNXB4IDEwcHg7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VmZWZlZjtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgIGhlaWdodDogMTIwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgIG1hcmdpbjogMTBweCAwcHg7XG4gICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAycHggMHB4O1xuICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCA1cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgJjpudGgtY2hpbGQoMm4pe1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICB9XG4gICAgICB9XG4gIH1cbn1cblxuLmRpc2FibGVke1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICBiYWNrZ3JvdW5kOiBsaWdodGdyZXk7XG59XG4iLCIqIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3JkZXI6IDA7XG4gICAgLy8gdHJhbnNpdGlvbjogYWxsIDAuNXMgbGluZWFyO1xuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbmh0bWwsXG5ib2R5LFxuZGl2LFxuc3BhbixcbmFwcGxldCxcbm9iamVjdCxcbmlmcmFtZSxcbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNixcbnAsXG5ibG9ja3F1b3RlLFxucHJlLFxuYSxcbmFiYnIsXG5hY3JvbnltLFxuYWRkcmVzcyxcbmJpZyxcbmNpdGUsXG5jb2RlLFxuZGVsLFxuZGZuLFxuZW0sXG5pbWcsXG5pbnMsXG5rYmQsXG5xLFxucyxcbnNhbXAsXG5zbWFsbCxcbnN0cmlrZSxcbnN0cm9uZyxcbnN1YixcbnN1cCxcbnR0LFxudmFyLFxuYixcbnUsXG5pLFxuY2VudGVyLFxuZGwsXG5kdCxcbmRkLFxub2wsXG51bCxcbmxpLFxuZmllbGRzZXQsXG5mb3JtLFxubGFiZWwsXG5sZWdlbmQsXG50YWJsZSxcbmNhcHRpb24sXG50Ym9keSxcbnRmb290LFxudGhlYWQsXG50cixcbnRoLFxudGQsXG5hcnRpY2xlLFxuYXNpZGUsXG5jYW52YXMsXG5kZXRhaWxzLFxuZW1iZWQsXG5maWd1cmUsXG5maWdjYXB0aW9uLFxuZm9vdGVyLFxuaGVhZGVyLFxuaGdyb3VwLFxubWVudSxcbm5hdixcbm91dHB1dCxcbnJ1YnksXG5zZWN0aW9uLFxuc3VtbWFyeSxcbnRpbWUsXG5tYXJrLFxuYXVkaW8sXG52aWRlbyB7XG4gICAgYm9yZGVyOiAwO1xuICAgIGZvbnQ6IGluaGVyaXQ7XG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG5pbnB1dCxcbmltZyxcbnNlbGVjdCxcbnRleHRhcmVhLFxuYnV0dG9uIHtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG51bCxcbm9sIHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIG1hcmdpbi10b3A6IDA7XG59XG5cbmh0bWwge1xuICAgIC1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xuICAgIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcbn1cblxuYm9keSB7XG4gICAgLy9mb250LWZhbWlseTogJ09wZW4gU2FucycsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gICAgd29yZC1zcGFjaW5nOiBub3JtYWw7XG59XG5cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuaW5wdXQge1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuaW1nIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xufVxuXG5pbnB1dFt0eXBlPVwiYnV0dG9uXCJdLFxuaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSxcbmJ1dHRvbiB7XG4gICAgLy8gYmFja2dyb3VuZDogQGNvbW1vbi1ibHVlO1xufSIsIi8vICBpbXBvcnQgVkFSSUFCTEVTXG5AaW1wb3J0IFwiLi4vY3NzL2NvbW1vbi92YXJpYWJsZXNcIjtcblxuLyo9PT09PT09PT09PT09PT09PT09PW1haW4gc2VjdGlvbiBjc3M9PT09PT09PT09PT09PT0qL1xuXG5tYWluIHtcbiAgICAvLyBwYWRkaW5nLXRvcDogNjBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDE1MHB4O1xuICAgIGJveC1zaXppbmc6ICRib3JkZXItYm94O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNvbW1vbi1uYXYge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICAvLyBwYWRkaW5nLXRvcDogNjFweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDcwcHg7XG4gICAgYm94LXNpemluZzogJGJvcmRlci1ib3g7XG4gICAgLy8gYmFja2dyb3VuZDogJGhlYWRlci1iZztcbiAgICAvLyBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAkYm9yZGVyLWNvbW1vbjtcbiAgICAvLyBib3JkZXItbGVmdDogMXB4IHNvbGlkICRib3JkZXItY29tbW9uO1xuICAgIHotaW5kZXg6IDEwMjtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/eStore-module/sales-reports/sales-reports.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/eStore-module/sales-reports/sales-reports.component.ts ***!
  \***********************************************************************************/
/*! exports provided: SalesReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesReportsComponent", function() { return SalesReportsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/authenticator.service */ "./src/app/services/authenticator.service.ts");
/* harmony import */ var _services_export_to_pdf_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/export-to-pdf.service */ "./src/app/services/export-to-pdf.service.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_message_show_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/message-show.service */ "./src/app/services/message-show.service.ts");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var _services_table_preference_table_preferences_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/table-preference/table-preferences.service */ "./src/app/services/table-preference/table-preferences.service.ts");
/* harmony import */ var _shared_data_display_table_data_display_table_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/data-display-table/data-display-table.component */ "./src/app/components/shared/data-display-table/data-display-table.component.ts");
/* harmony import */ var _services_excel_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/excel.service */ "./src/app/services/excel.service.ts");
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










let SalesReportsComponent = /** @class */ (() => {
    let SalesReportsComponent = class SalesReportsComponent {
        constructor(auth, _tablePreferencesService, pdf, ref, _msgService, _http, excelService, http) {
            this.auth = auth;
            this._tablePreferencesService = _tablePreferencesService;
            this.pdf = pdf;
            this.ref = ref;
            this._msgService = _msgService;
            this._http = _http;
            this.excelService = excelService;
            this.http = http;
            this.feeDataSource = [];
            this.displayKeys = []; //need for selected keys
            this.slotIdArr = [];
            this.salesDataSource = [];
            this.productLists = [];
            this.selectedSlots = [];
            this.selectedSlotsString = '';
            this.selectedSlotsID = '';
            this.filterDataKeys = {
                to_date: moment__WEBPACK_IMPORTED_MODULE_1__().format("YYYY-MM-DD"),
                from_date: moment__WEBPACK_IMPORTED_MODULE_1__().format("YYYY-MM-DD")
            };
            this.showPopupKeys = {
                showPreference: false,
                isProfessional: false,
                isRippleLoad: false
            };
            this.feeSettings1 = [
                { primaryKey: 'order_id', header: 'Order ID', priority: 1, allowSortingFlag: true },
                { primaryKey: 'title', header: 'Product Name', priority: 2, allowSortingFlag: true },
                { primaryKey: 'name', header: 'Student Name', priority: 3, allowSortingFlag: true },
                { primaryKey: 'phone', header: 'Phone No', priority: 4, allowSortingFlag: true },
                { primaryKey: 'publish_date', header: 'Purchase Date', priority: 5, allowSortingFlag: true, dataType: 'Date', format: 'DD-MM-YYYY' },
                { primaryKey: 'price', header: 'Price', priority: 6, allowSortingFlag: true },
                {
                    primaryKey: 'status', header: 'Status', priority: 7, allowSortingFlag: true, dataType: 'array',
                    arrayValue: { '10': 'Ready', '20': 'Ready To Publish', '30': 'Published', '40': 'Unpublished', '50': 'Closed' }
                }
            ];
            this.tableSetting = {
                tableDetails: { title: 'Sales Report', key: 'products.salesReports', showTitle: false },
                search: { title: 'Search', showSearch: false },
                keys: this.displayKeys,
                selectAll: { showSelectAll: false, option: 'single', title: 'Sales report', checked: true, key: 'title' },
                defaultSort: { primaryKey: 'publish_date', sortingType: 'asc', header: 'Purchase Date', priority: 4, allowSortingFlag: true, dataType: 'Date', format: 'DD-MM-YYYY' },
                actionSetting: {
                    showActionButton: false
                },
                displayMessage: "Data Not Found"
            };
            this.searchText = "";
            this.searchflag = false;
            this.tempSalesData = [];
        }
        ngOnInit() {
            this.tableSetting.keys = this.feeSettings1;
            if (this._tablePreferencesService.getTablePreferences(this.tableSetting.tableDetails.key) != null) {
                this.displayKeys = this._tablePreferencesService.getTablePreferences(this.tableSetting.tableDetails.key);
                this.tableSetting.keys = this.displayKeys;
                if (this.displayKeys.length == 0) {
                    this.setDefaultValues();
                }
            }
            else {
                this.setDefaultValues();
            }
            console.log(this.tableSetting);
            this.fectchTableDataByPage(0);
            this.getProductDetails();
        }
        optionSelected($event) {
            console.log($event);
        }
        /* Fetch table data by page index */
        fectchTableDataByPage(index) {
            let object = {
                "page_no": 1,
                "no_of_records": 100
            };
            this.auth.showLoader();
            this.http.getMethod('product/get?module=SALES_REPORT', null).subscribe((resp) => {
                this.auth.hideLoader();
                if (resp.validate) {
                    this.productLists = resp.result;
                }
                else {
                    this._msgService.showErrorMessage('error', "something went wrong, try again", '');
                }
            }, (err) => {
                this.auth.hideLoader();
                this._msgService.showErrorMessage('error', "something went wrong, try again", '');
            });
        }
        /* Fetch table data by page index */
        getProductDetails() {
            let object = {
                "between": {
                    "from": moment__WEBPACK_IMPORTED_MODULE_1__(this.filterDataKeys.from_date).format("YYYY-MM-DD"),
                    "to": moment__WEBPACK_IMPORTED_MODULE_1__(this.filterDataKeys.to_date).format("YYYY-MM-DD")
                },
                "in": [
                    {
                        "column": "productIds",
                        "values": this.slotIdArr
                    }
                ]
            };
            this.auth.showLoader();
            this.http.postMethod('order/sales-report', object).then((resp) => {
                this.auth.hideLoader();
                let response = resp['body'];
                console.log(response);
                if (response.validate) {
                    this.salesDataSource = [];
                    let data = response.result;
                    data && data.forEach((object) => {
                        let saleData = {
                            "order_id": object.order_id,
                            "title": object.product.title,
                            "name": object.name,
                            "phone": object.phone,
                            "price": object.price + " " + object.product.country_details.currency_code,
                            "publish_date": object.purchase_date,
                            "status": object.product.status,
                        };
                        this.salesDataSource.push(saleData);
                    });
                    this.tempSalesData = this.salesDataSource;
                }
                else {
                    this._msgService.showErrorMessage('error', "something went wrong, try again", '');
                }
            }, (err) => {
                this.auth.hideLoader();
                this._msgService.showErrorMessage('error', "something went wrong, try again", '');
            });
        }
        multiselectVisible(elid) {
            let targetid = elid + "multi";
            if (elid != null && elid != '') {
                if (document.getElementById(targetid).classList.contains('hide')) {
                    document.getElementById(targetid).classList.remove('hide');
                }
                else {
                    document.getElementById(targetid).classList.add('hide');
                }
            }
        }
        /* =================================================================================================== */
        /* =================================================================================================== */
        updateSlotSelected(data) {
            /* slot checked */
            if (data.isChecked) {
                this.slotIdArr.push(data.entity_id);
                this.selectedSlots.push(data.title);
                if (this.selectedSlots.length != 0) {
                    document.getElementById('slotwrapper').classList.add('has-value');
                }
                else {
                    document.getElementById('slotwrapper').classList.remove('has-value');
                }
                this.selectedSlotsID = this.slotIdArr.join(',');
                this.selectedSlotsString = this.selectedSlots.join(',');
            }
            /* slot unchecked */
            else {
                if (this.selectedSlots.length < 0) {
                    document.getElementById('slotwrapper').classList.add('has-value');
                }
                else if (this.selectedSlots.length == 0) {
                    document.getElementById('slotwrapper').classList.remove('has-value');
                }
                else if (this.selectedSlots.length == 1) {
                    document.getElementById('slotwrapper').classList.remove('has-value');
                }
                var index = this.selectedSlots.indexOf(data.title);
                if (index > -1) {
                    this.selectedSlots.splice(index, 1);
                }
                this.selectedSlotsString = this.selectedSlots.join(',');
                var index2 = this.slotIdArr.indexOf(data.entity_id);
                if (index2 > -1) {
                    this.slotIdArr.splice(index, 1);
                }
                this.selectedSlotsID = this.slotIdArr.join(',');
            }
        }
        setDefaultValues() {
            this.tableSetting.keys = [
                { primaryKey: 'order_id', header: 'Order ID', priority: 1, allowSortingFlag: true },
                { primaryKey: 'title', header: 'Product Name', priority: 2, allowSortingFlag: true },
                { primaryKey: 'name', header: 'Student Name', priority: 3, allowSortingFlag: true },
                { primaryKey: 'phone', header: 'Phone No', priority: 4, allowSortingFlag: true },
                { primaryKey: 'publish_date', header: 'Purchase Date', priority: 5, allowSortingFlag: true, dataType: 'Date', format: 'DD-MM-YYYY' }
            ];
            this.displayKeys = this.tableSetting.keys;
            this._tablePreferencesService.setTablePreferences(this.tableSetting.tableDetails.key, this.displayKeys);
        }
        getColumns() {
            let arr2 = [];
            let arr3 = [];
            this.tableSetting.keys.map((ele) => {
                arr2.push(ele.header);
            });
            arr3.push(arr2);
            return arr3;
        }
        getRows() {
            let obj = {};
            let arr = [];
            this.tableSetting.keys.map((ele, index) => {
                obj[ele.primaryKey] = index;
            });
            this.salesDataSource.map((ele) => {
                let json2 = [];
                for (let i in obj) {
                    json2.push(ele[i]);
                }
                arr.push(json2);
            });
            return arr;
        }
        exportToPdf() {
            let rows = this.getColumns();
            let columns = this.getRows();
            this.pdf.exportToPdf(rows, columns, 'All_dues_Report');
        }
        fetchSalesReportDetails() {
            console.log('sales Details');
            this.getProductDetails();
        }
        openPreferences($event) {
            this.showPopupKeys.showPreference = !this.showPopupKeys.showPreference;
        }
        closePopup(e) {
            this.openPreferences(false);
            if (e) {
                if (this._tablePreferencesService.getTablePreferences(this.tableSetting.tableDetails.key) != null) {
                    this.displayKeys = this._tablePreferencesService.getTablePreferences(this.tableSetting.tableDetails.key);
                    this.tableSetting.keys = this.displayKeys;
                    if (e.callNotify) {
                        this.child.notifyMe(this.tableSetting);
                    }
                    this.ref.markForCheck();
                    this.ref.detectChanges();
                }
            }
            console.log(this.displayKeys);
        }
        // exportToExcel() {
        //   let exportedArray: any[] = [];
        //   this.salesDataSource.map((data: any) => {
        //     let obj = {};
        //     obj["Order ID"] = data.order_id;
        //     obj["Product Name"] = data.title;
        //     obj["Student Name"] = data.name;
        //     obj["Phone No"] = data.phone;
        //     obj["Purchase Date"] = moment(data.publish_date).format("DD MMM YYYY");
        //     exportedArray.push(obj);
        //   })
        //   this._excelService.exportAsExcelFile(
        //     exportedArray,
        //     'Sales Report'
        //   )
        // }
        /**
        * export as excel
        * Added By Ashwini Gupta
        */
        exportToExcel() {
            let arr = [];
            this.salesDataSource.map((ele) => {
                let json = {};
                this.tableSetting.keys.map((keys) => {
                    json[keys.header] = ele[keys.primaryKey];
                });
                arr.push(json);
            });
            //Adding below line below in response value of status comes as 10,20,30,40,50 and which is not user friendly. User should able to see exact means of that code.
            for (let i = 0; i < arr.length; i++) {
                switch (arr[i].Status) {
                    case 10:
                        arr[i].Status = "Ready";
                        break;
                    case 20:
                        arr[i].Status = "Ready To Publish";
                        break;
                    case 30:
                        arr[i].Status = "Published";
                        break;
                    case 40:
                        arr[i].Status = "Unpublished";
                        break;
                    case 50:
                        arr[i].Status = "Closed";
                        break;
                }
            }
            this.excelService.exportAsExcelFile(arr, 'Sales Report');
        }
        // End
        searchDatabase() {
            this.salesDataSource = this.tempSalesData;
            if (this.searchText != "" && this.searchText != null) {
                let searchData;
                searchData = this.salesDataSource.filter(item => Object.keys(item).some(k => item[k] != null && item[k].toString().toLowerCase().includes(this.searchText.toLowerCase())));
                this.salesDataSource = searchData;
                this.searchflag = true;
            }
            else {
                this.salesDataSource = this.tempSalesData;
                this.searchflag = false;
            }
        }
    };
    SalesReportsComponent.ctorParameters = () => [
        { type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticatorService"] },
        { type: _services_table_preference_table_preferences_service__WEBPACK_IMPORTED_MODULE_7__["TablePreferencesService"] },
        { type: _services_export_to_pdf_service__WEBPACK_IMPORTED_MODULE_3__["ExportToPdfService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: _services_message_show_service__WEBPACK_IMPORTED_MODULE_5__["MessageShowService"] },
        { type: _services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"] },
        { type: _services_excel_service__WEBPACK_IMPORTED_MODULE_9__["ExcelService"] },
        { type: _services_products_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"] }
    ];
    SalesReportsComponent.propDecorators = {
        child: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['child', { static: false },] }],
        form: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['form', { static: false },] }]
    };
    SalesReportsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sales-reports',
            template: __importDefault(__webpack_require__(/*! raw-loader!./sales-reports.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/eStore-module/sales-reports/sales-reports.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./sales-reports.component.scss */ "./src/app/components/eStore-module/sales-reports/sales-reports.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticatorService"],
            _services_table_preference_table_preferences_service__WEBPACK_IMPORTED_MODULE_7__["TablePreferencesService"],
            _services_export_to_pdf_service__WEBPACK_IMPORTED_MODULE_3__["ExportToPdfService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _services_message_show_service__WEBPACK_IMPORTED_MODULE_5__["MessageShowService"],
            _services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"],
            _services_excel_service__WEBPACK_IMPORTED_MODULE_9__["ExcelService"],
            _services_products_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"]])
    ], SalesReportsComponent);
    return SalesReportsComponent;
})();



/***/ })

}]);
//# sourceMappingURL=default~app-components-eStore-module-estore-module~app-components-online-exam-module-online-exam-module-es2015.js.map