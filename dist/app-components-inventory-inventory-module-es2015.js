(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-components-inventory-inventory-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/inventory/inventory-category/inventory-category.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/inventory/inventory-category/inventory-category.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"divCategory\" class=\"c-lg-12 c-md-12 c-sm-12\" style=\"padding: 2%;\">\n  <section>\n    <div class=\"clearFix create-standard-form\" *ngIf=\"createNewCategory\">\n      <div class=\"c-sm-3\" style=\"padding-left: 0px;\">\n        <div class=\"field-wrapper\">\n          <label for=\"ctgryName\">Category Name\n            <span class=\"text-danger\">*</span>\n          </label>\n          <input id=\"ctgryName\" type=\"text\" #categoryName class=\"form-ctrl\" name=\"label\">\n        </div>\n      </div>\n      <div class=\"c-sm-3\">\n        <div class=\"field-wrapper\">\n          <label for=\"ctgrydesc\">Category Description\n          </label>\n          <input id=\"ctgrydesc\" type=\"text\" #categoryDesc class=\"form-ctrl\" name=\"label\">\n        </div>\n      </div>\n      <div class=\"c-sm-3\" style=\"padding-top: 10px; margin-top:16px;\">\n        <button class=\"btn fullBlue\" (click)=\"addNewCategoryRow(categoryName ,categoryDesc )\">Add</button>\n      </div>\n\n    </div>\n  </section>\n\n  <section>\n    <div id=\"category-table\">\n      <div class=\"table-scroll-wrapper\">\n        <div class=\"table table-responsive\">\n          <table id=\"tbLCategory\">\n            <thead>\n              <tr>\n                <th class=\"text-align-left\">\n                  Category Name\n                </th>\n                <th class=\"text-align-left\">\n                  Category Description\n                </th>\n                <th>\n                  Action\n                </th>\n              </tr>\n            </thead>\n            <tbody id=\"tbodyCategory\">\n              <tr id=\"row{{i}}\" class=\"displayComp\" *ngFor=\"let row of categoryList;\n              let i = index; trackBy: i;\">\n                <td class=\"view-comp text-align-left\">\n                  {{row.category_name}}\n                </td>\n                <td class=\"edit-comp text-align-left\">\n                  <div class=\"field-wrapper\">\n                    <input type=\"text\" class=\"form-ctrl editCellInput\" [(ngModel)]=\"row.category_name\" name=\"label\">\n                  </div>\n                </td>\n                <td class=\"view-comp text-align-left\">\n                  {{row.desc}}\n                </td>\n                <td class=\"edit-comp text-align-left\">\n                  <div class=\"field-wrapper\">\n                    <input type=\"text\" class=\"form-ctrl editCellInput\" [(ngModel)]=\"row.desc\" name=\"label\">\n                  </div>\n                </td>\n                <td class=\"view-comp\">\n                  <a style=\"cursor:pointer\" (click)=\"editRow(i)\">\n                    <i class=\"edit-icon\" aria-hidden=\"true\" title=\"Edit\"></i>Edit\n                  </a>\n                </td>\n                <td class=\"edit-comp\">\n                  <a style=\"cursor:pointer ; margin-right:10px\" (click)=\"updateTableRow(row , i)\">\n                    <i class=\"fas fa-check\" style=\"font-family: FontAwesome ;font-size: 19px;\" title=\"Update\"></i>\n                  </a>\n                  <a style=\"cursor:pointer\" (click)=\"cancelTableRow(row)\">\n                    <i class=\"fas fa fa-times\" style=\"font-family: FontAwesome ;font-size: 19px;\" title=\"Cancel\"></i>\n                  </a>\n                </td>\n              </tr>\n              <tr *ngIf=\"categoryList.length == 0\">\n                <td colspan=\"3\" style=\"text-align: center\">\n                  No data found\n                </td>\n              </tr>\n\n            </tbody>\n          </table>\n        </div>\n      </div>\n\n    </div>\n    <!-- Paginator Here -->\n    <div class=\"row filter-res pagination\" style=\"width:100%\">\n      <div class=\"c-lg-12 c-md-12 c-sm-12 align-right\">\n        <pagination (goPage)=\"fetchTableDataByPage($event)\" (goNext)=\"fetchNext()\" (goPrev)=\"fetchPrevious()\"\n          [pagesToShow]=\"10\" [page]=\"PageIndex\" [perPage]=\"studentdisplaysize\" [count]=\"totalRow\">\n        </pagination>\n      </div>\n    </div>\n  </section>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/inventory/inventory-home/inventory-home.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/inventory/inventory-home/inventory-home.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"clearFix\" style=\"padding: 2%;margin-top: -36px;\">\n  <div class=\"boxPadding15\">\n    <aside class=\"middle-full row\">\n      <!-- Header and Navigation -->\n      <section class=\"clearFix\">\n\n\n        <!-- Export and Toggler Here -->\n        <div class=\"row\">\n          <div class=\"c-lg-6 c-md-6 c-sm-6 align-left\">\n          </div>\n          <div class=\"c-lg-6 c-md-6 c-sm-6 align-left\">\n            <div class=\"field-wrapper\">\n              <div class=\"btnWrapper\">\n                <button class=\"btn pull-right\" (click)=\"addItemDetails()\">\n                  Add Item\n                </button>\n              </div>\n            </div>\n            <div class=\"search-filter-wrapper\">\n              <input #search type=\"text\" class=\"normal-field pull-right\" placeholder=\"Search\"\n                style=\"font-size:12px; margin: 0px 5px 2px -5px;width: 30%\" id=\"search\" name=\"searchData\"\n                (keyup)=\"searchDatabase(search)\">\n            </div>\n          </div>\n        </div>\n\n        <!-- Enquiry DataTable -->\n        <div class=\"table table-responsive inventory-table\" #ActionInv>\n          <table id=\"item-Table\" class=\"align-center\">\n            <thead>\n              <tr id=\"table-header\" class=\"displayComp\">\n                <th class=\"text-align-left\">\n                  <label>\n                    <a class=\"cursor-icon\"\n                      (click)=\"sortTableById(header.list_name.title)\">{{header.inventory_item.title}}</a>\n                  </label>\n                </th>\n\n                <th class=\"text-align-left\">\n                  <label>\n                    <a class=\"cursor-icon\"\n                      (click)=\"sortTableById(header.referred_by.title)\">{{header.category.title}}</a>\n                  </label>\n                </th>\n\n                <th class=\"text-align-left\">\n                  <label>\n                    <a class=\"cursor-icon\"\n                      (click)=\"sortTableById(header.referred_by.title)\">{{header.description.title}}</a>\n                  </label>\n                </th>\n\n                <th class=\"text-align-left\">\n                  <label>\n                    <a class=\"cursor-icon\" (click)=\"sortTableById(header.referred_by.title)\"\n                      *ngIf=\"!isProfessional\">{{header.standard_name.title}}</a>\n                    <a class=\"cursor-icon\" (click)=\"sortTableById(header.referred_by.title)\"\n                      *ngIf=\"isProfessional\">Master Course</a>\n                  </label>\n                </th>\n\n                <th class=\"text-align-left\">\n                  <label>\n                    <a class=\"cursor-icon\" (click)=\"sortTableById(header.referred_by.title)\"\n                      *ngIf=\"!isProfessional\">{{header.subject_name.title}}</a>\n                    <a class=\"cursor-icon\" (click)=\"sortTableById(header.referred_by.title)\"\n                      *ngIf=\"isProfessional\">Course</a>\n                  </label>\n                </th>\n\n                <th>\n                  <label>\n                    <a class=\"cursor-icon\" (click)=\"sortTableById(header.status.title)\">{{header.total_units.title}}</a>\n                  </label>\n                </th>\n\n                <th>\n                  <label>\n                    <a class=\"cursor-icon\"\n                      (click)=\"sortTableById(header.total_count.title)\">{{header.available.title}}</a>\n                  </label>\n                </th>\n\n                <th>\n                  <label>\n                    <a class=\"cursor-icon\" (click)=\"sortTableById(header.total_count.title)\">{{header.cost.title}}</a>\n                  </label>\n                </th>\n\n                <th>\n                  <label>\n                    <a class=\"cursor-icon\">Low Stock Indicator Units</a>\n                  </label>\n                </th>\n\n                <th *ngIf=\"enable_eLearn_feature_flag\">\n                  <label>\n                    <a class=\"cursor-icon\">Status</a>\n                  </label>\n                </th>\n\n                <th>\n                  <label>\n                    <a class=\"cursor-icon\" (click)=\"sortTableById(header.success_count.title)\">{{header.edit.title}}</a>\n                  </label>\n                </th>\n\n              </tr>\n            </thead>\n            <tbody class=\"\" *ngIf=\"itemList.length != 0\">\n              <tr id=\"row{{i}}\" class=\"displayComp\" *ngFor=\"let row of itemList; let i = index; trackBy: i;\">\n\n                <td class=\"view-comp text-align-left\">\n                  {{row.item_name}}\n                </td>\n                <td class=\"edit-comp \">\n                  <div class=\"field-wrapper editCellAllignment\">\n                    <input type=\"text\" class=\"form-ctrl\" [(ngModel)]=\"row.item_name\" name=\"label\">\n                  </div>\n                </td>\n\n                <td class=\"view-comp text-align-left\">\n                  {{row.category_name}}\n                </td>\n                <td class=\"edit-comp \">\n                  <div class=\"field-wrapper editCellAllignment\">\n                    <select id=\"\" class=\"form-ctrl\" name=\"row.category_id\" [(ngModel)]=\"row.category_id\">\n                      <option *ngFor=\"let opt of categoryList\" [value]=\"opt.category_id\">\n                        {{opt.category_name}}\n                      </option>\n                    </select>\n                  </div>\n                </td>\n\n                <td class=\"view-comp text-align-left\">\n                  <div class=\"field-wrapper\">\n                    <span *ngIf=\"row?.desc.length != 0\">{{row.desc}}</span>\n                    <span *ngIf=\"row?.desc.length == 0\">-</span>\n                  </div>\n                </td>\n                <td class=\"edit-comp editCellAllignment\">\n                  <div class=\"field-wrapper\">\n                    <input type=\"text\" class=\"form-ctrl\" [(ngModel)]=\"row.desc\" name=\"label\">\n                  </div>\n                </td>\n\n                <td class=\"view-comp text-align-left\">\n                  <div class=\"field-wrapper\">\n                    <span *ngIf=\"row?.standard_name.length > 0\">{{row.standard_name}}</span>\n                    <span *ngIf=\"row?.standard_name.length == 0\">-</span>\n                  </div>\n                </td>\n                <td class=\"edit-comp editCellAllignment\">\n                  <div class=\"field-wrapper\">\n                    <select id=\"\" class=\"form-ctrl\" name=\"row.standard_name\" [(ngModel)]=\"editStandSubject.standard_id\"\n                      (change)=\"masterCourseChanged()\">\n                      <option *ngFor=\"let opt of masterCategoryList\" [value]=\"opt.standard_id\">\n                        {{opt.standard_name}}\n                      </option>\n                    </select>\n                  </div>\n                </td>\n\n                <td class=\"view-comp text-align-left\">\n                  <div class=\"field-wrapper\">\n                    <span *ngIf=\"row?.subject_name.length != 0\">{{row.subject_name}}</span>\n                    <span *ngIf=\"row?.subject_name.length == 0\">-</span>\n                  </div>\n                </td>\n                <td class=\"edit-comp editCellAllignment\">\n                  <div class=\"field-wrapper\">\n                    <select id=\"\" class=\"form-ctrl\" name=\"row.subject_name\" [(ngModel)]=\"editStandSubject.subject_id\">\n                      <option value=\"-1\"></option>\n                      <option *ngFor=\"let opt of editCourseList\" [value]=\"opt.subject_id\">\n                        {{opt.subject_name}}\n                      </option>\n                    </select>\n\n                  </div>\n                </td>\n\n                <td>\n                  {{row.alloted_units}}\n                </td>\n                <td [ngClass]=\"{lowquantity : row.available_units <= row.out_of_stock_indicator_units}\">\n                  {{row.available_units}}\n                </td>\n\n                <td class=\"view-comp\">\n                  <div class=\"field-wrapper\">\n                    {{row.unit_cost}}\n                  </div>\n                </td>\n                <td class=\"edit-comp editCellAllignment\">\n                  <div class=\"field-wrapper\">\n                    <input type=\"number\" class=\"form-ctrl\" [(ngModel)]=\"row.unit_cost\" name=\"label\">\n                  </div>\n                </td>\n\n\n                <td class=\"view-comp\">\n                  <div class=\"field-wrapper\">\n                    {{row.out_of_stock_indicator_units}}\n                  </div>\n                </td>\n                <td class=\"edit-comp editCellAllignment\">\n                  <div class=\"field-wrapper\">\n                    <input type=\"number\" class=\"form-ctrl\" style=\"margin:auto\"\n                      [(ngModel)]=\"row.out_of_stock_indicator_units\" name=\"label\">\n                  </div>\n                </td>\n\n                <td class=\"view-comp\" *ngIf=\"enable_eLearn_feature_flag\">\n                  <div class=\"field-wrapper\">\n                    <span *ngIf=\"row?.is_offline_or_online != null\">{{row.is_offline_or_online}}</span>\n                    <span *ngIf=\"row?.is_offline_or_online == null || row?.is_offline_or_online ==''\">-</span>\n                  </div>\n                </td>\n                <td class=\"edit-comp editCellAllignment\" *ngIf=\"enable_eLearn_feature_flag\">\n                  <div class=\"field-wrapper\">\n                    <select id=\"is_offline_or_online\" class=\"form-ctrl\" name=\"is_offline_or_online\"\n                      [(ngModel)]=\"row.is_offline_or_online\" style=\"margin: auto;\">\n                      <option value=\"Online\">Online</option>\n                      <option value=\"Offline\">Offline</option>\n                      <option value=\"Both\">Both</option>\n                    </select>\n                  </div>\n                </td>\n\n                <td class=\"edit-comp\" *ngIf=\"isAddUnit\">\n                  <div class=\"field-wrapper\">\n                    <input type=\"number\" class=\"form-ctrl\" [(ngModel)]=\"row.unit_cost\" name=\"label\">\n                  </div>\n                </td>\n                <td class=\"table-action edit-comp\">\n                  <a style=\"cursor:pointer\" (click)=\"updateRow(row , i)\">\n                    <i class=\"fas fa-check\" style=\"font-family: FontAwesome ;font-size: 19px;\" title=\"Update\"></i>\n                  </a>\n                  <a style=\"cursor:pointer\" (click)=\"cancelRow(i)\">\n                    <i class=\"fas fa fa-times\" style=\"font-family: FontAwesome ;font-size: 19px;\" title=\"Cancel\"></i>\n                  </a>\n                </td>\n                <td class=\"enquiry-action table-action view-comp\" id=\"action-view\">\n                  <div>\n                    <button aria-expanded=\"true\" class=\"dropdown-trigger\" (click)=\"openMenu(i)\">\n                      <span class=\"svg-icon-wrap\">\n                        <span class=\"visually-hidden\"></span>\n                        <div aria-hidden=\"true\" type=\"ellipsis-horizontal-icon\">\n                          <svg viewBox=\"0 0 24 24\" width=\"24px\" height=\"24px\" x=\"0\" y=\"0\"\n                            preserveAspectRatio=\"xMinYMin meet\" class=\"artdeco-icon\" focusable=\"false\">\n                            <path d=\"M2,10H6v4H2V10Zm8,4h4V10H10v4Zm8-4v4h4V10H18Z\" class=\"large-icon\"\n                              style=\"fill: currentColor\"></path>\n                          </svg>\n                        </div>\n                      </span>\n                    </button>\n\n                    <div id=\"menuList{{i}}\" class=\"dd-list-container hide\">\n                      <div class=\"dropdown-list\">\n                        <div class=\"dd-list-inner\">\n                          <ul class=\"actions-menu\">\n                            <li class=\"action-item \" (click)=\"editRow(i,row.item_id, row)\">\n                              <span class=\"textContent\">\n                                Edit Details\n                              </span>\n                            </li>\n                            <li class=\"action-item\" (click)=\"deleteRow(row, i)\">\n                              <span class=\"textContent\">\n                                Delete Entry\n                              </span>\n                            </li>\n                            <li class=\"action-item\" (click)=\"allocationDetails(row , i)\">\n                              <span class=\"textContent\">\n                                Allocation History\n                              </span>\n                            </li>\n                            <li class=\"action-item\" *ngIf=\"showAllocateOption\"\n                              (click)=\"allocateQuantityToSubBranches(row)\">\n                              <span class=\"textContent\">\n                                Allocate To Sub Branches\n                              </span>\n                            </li>\n                            <li class=\"action-item\" (click)=\"showManageUnit(row)\">\n                              <span class=\"textContent\">\n                                Manage Unit\n                              </span>\n                            </li>\n                          </ul>\n                        </div>\n                      </div>\n                    </div>\n\n                  </div>\n                </td>\n\n              </tr>\n            </tbody>\n            <tbody *ngIf=\"itemList.length == 0\">\n              <tr>\n                <td colspan=\"10\" style=\"text-align: center\">\n                  No data found\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n\n\n        <!-- Paginator Here -->\n        <div class=\"row filter-res pagination\" style=\"width: 83%;position: fixed;bottom: 0px;\">\n          <div class=\"c-lg-12 c-md-12 c-sm-12 align-right\">\n            <pagination (goPage)=\"fetchTableDataByPage($event)\" (goNext)=\"fetchNext()\" (goPrev)=\"fetchPrevious()\"\n              [pagesToShow]=\"10\" [page]=\"PageIndex\" [perPage]=\"studentdisplaysize\" [count]=\"totalRow\">\n            </pagination>\n          </div>\n        </div>\n\n      </section>\n    </aside>\n  </div>\n</section>\n\n\n<!-- Manage Unit -->\n<div id=\"manageUnit\" class=\"modal fade\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h4 class=\"modal-title\">Manage Unit</h4>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"row\">\n\n          <div class=\"c-lg-7 c-md-7 c-sm-7 c-xs-7\">\n            <div class=\"item-container\">\n              <span class=\"item-title\">Available Units : </span>\n              <span>{{editManageUnit.availableUnits}}</span>\n            </div>\n          </div>\n\n          <div class=\"c-lg-7 c-md-7 c-sm-7 c-xs-7\">\n            <div class=\"item-container\">\n              <span class=\"item-title\">Total units : </span>\n              <span>{{editManageUnit.totalUnits}}</span>\n            </div>\n          </div>\n\n          <div class=\"c-lg-7 c-md-7 c-sm-7 c-xs-7\">\n            <div class=\"item-container\">\n              <span class=\"item-title\">Manage Unit</span>\n              <select class=\"form-ctrl select-container\" name=\"\" [(ngModel)]=\"editManageUnit.newUnit\">\n                <!-- <option [value]=\"x\" *ngFor=\"let dummy of ' '.repeat(201).split(''), let x = index\">{{x}}</option> -->\n                <option [value]=\"x\" *ngFor=\"let x of arr\">{{x}}</option>\n              </select>\n            </div>\n          </div>\n\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cancel</button>\n        <button type=\"button\" class=\"btn fullBlue\" (click)=\"allocateUnit()\">Save</button>\n      </div>\n    </div>\n\n  </div>\n</div>\n\n\n\n<!-- Delete PopUp -->\n<!-- =============================================================================== -->\n<section id=\"popup\" class=\"popupWrapper fadeIn\" *ngIf=\"deleteItemPopUp\">\n  <div class=\"popup pos-abs\">\n    <div class=\"popup-wrapper pos-rel\">\n      <span class=\"closePopup pos-abs fbold show\" id=\"popupCloseBtn\" (click)=\"closeDeletePopup()\">\n        <svg class=\"artdeco-icon\" focusable=\"false\" height=\"24px\" preserveAspectRatio=\"xMinYMin meet\"\n          viewBox=\"0 0 24 24\" width=\"24px\" x=\"0\" y=\"0\">\n          <path class=\"large-icon\"\n            d=\"M20,5.32L13.32,12,20,18.68,18.66,20,12,13.33,5.34,20,4,18.68,10.68,12,4,5.32,5.32,4,12,10.69,18.68,4Z\"\n            style=\"fill: currentColor\"></path>\n        </svg>\n      </span>\n      <div class=\"popup-content\">\n        <h2>Delete Inventory Item - Item Name: {{deleteRowDetails.item_name}}</h2>\n        <div class=\"update-enquiry-form overflowHidden\">\n          <div class=\"enquiry-update-history\">\n            <h4>Are you Sure you wish to delete this data, it cannot be recovered later.</h4>\n          </div>\n          <div class=\"\">\n            <div class=\"clearfix\">\n              <aside class=\"pull-right popup-btn\">\n                <input type=\"button\" value=\"Cancel\" class=\"btn\" (click)=\"closeDeletePopup()\">\n                <input type=\"button\" value=\"Delete\" class=\"redBtn btn\" (click)=\"deleteStudent()\">\n              </aside>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- Create Item Pop Up -->\n<!-- =============================================================================== -->\n<section id=\"popup\" class=\"popupWrapper fadeIn\" *ngIf=\"createItemPopUp\">\n  <div class=\"popup pos-abs popup-body-container\" style=\"top: 15%;\">\n    <div class=\"popup-wrapper pos-rel\">\n      <span class=\"closePopup pos-abs fbold show\" id=\"popupCloseBtn\" (click)=\"closeCreatePopup()\">\n        <svg class=\"artdeco-icon\" focusable=\"false\" height=\"24px\" preserveAspectRatio=\"xMinYMin meet\"\n          viewBox=\"0 0 24 24\" width=\"24px\" x=\"0\" y=\"0\">\n          <path class=\"large-icon\"\n            d=\"M20,5.32L13.32,12,20,18.68,18.66,20,12,13.33,5.34,20,4,18.68,10.68,12,4,5.32,5.32,4,12,10.69,18.68,4Z\"\n            style=\"fill: currentColor\"></path>\n        </svg>\n      </span>\n      <div class=\"popup-content\">\n        <div class=\"\">\n          <h2>Add Inventory Item</h2>\n        </div>\n\n        <div class=\"row\">\n          <form [formGroup]=\"addItemForm\" novalidate (ngSubmit)=\"saveItemDetails()\">\n\n\n            <div class=\"row\">\n              <div class=\"c-lg-6 c-md-6 c-sm-6 c-xs-6\">\n                <div class=\"field-wrapper\">\n                  <label for=\"In\">Item Name\n                    <span class=\"text-danger\">*</span>\n                  </label>\n                  <input type=\"text\" class=\"form-ctrl\" formControlName=\"item_name\" id=\"In\" name=\"item\">\n\n                  <div\n                    *ngIf=\"addItemForm.controls['item_name'].invalid && (addItemForm.controls['item_name'].dirty || addItemForm.controls['item_name'].touched)\"\n                    class=\"alert alert-danger\">\n                    <div *ngIf=\"addItemForm.controls['item_name'].hasError('required')\">\n                      Item Name is required.\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"c-lg-6 c-md-6 c-sm-6 c-xs-6\">\n                <div class=\"field-wrapper\">\n                  <label for=\"label\">Item Description\n                  </label>\n                  <input type=\"text\" class=\"form-ctrl\" formControlName=\"desc\" id=\"label\" name=\"label\">\n\n                </div>\n              </div>\n            </div>\n\n            <div class=\"row\">\n              <div class=\"c-lg-6 c-md-6 c-sm-6 c-xs-6\">\n                <div class=\"field-wrapper\">\n                  <label for=\"cat\">Category\n                    <span class=\"text-danger\">*</span>\n                  </label>\n                  <select id=\"cat\" class=\"form-ctrl\" formControlName=\"categoryDet\">\n                    <option value=\"-1\"></option>\n                    <option *ngFor=\"let opt of categoryList\" [value]=\"opt.category_id\">\n                      {{opt.category_name}}\n                    </option>\n                  </select>\n\n                  <div\n                    *ngIf=\"addItemForm.controls['categoryDet'].invalid && (addItemForm.controls['categoryDet'].dirty || addItemForm.controls['categoryDet'].touched)\"\n                    class=\"alert alert-danger\">\n                    <div *ngIf=\"addItemForm.controls['categoryDet'].hasError('required')\">\n                      Category Name is required.\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"c-lg-6 c-md-6 c-sm-6 c-xs-6\">\n                <div class=\"field-wrapper\">\n                  <label for=\"Unit\">Available Unit\n                    <span class=\"text-danger\">*</span>\n                  </label>\n                  <input type=\"number\" class=\"form-ctrl\" formControlName=\"alloted_units\" id=\"Unit\" name=\"Unit\">\n\n                  <div\n                    *ngIf=\"addItemForm.controls['alloted_units'].invalid && (addItemForm.controls['alloted_units'].dirty || addItemForm.controls['alloted_units'].touched)\"\n                    class=\"alert alert-danger\">\n                    <div *ngIf=\"addItemForm.controls['alloted_units'].hasError('required')\">\n                      Units is required.\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"row\">\n              <div class=\"c-lg-6 c-md-6 c-sm-6 c-xs-6\">\n                <div class=\"field-wrapper\">\n                  <label for=\"master\" *ngIf=\"isProfessional\">Master Course </label>\n                  <label for=\"master\" *ngIf=\"!isProfessional\">Standard </label>\n                  <select id=\"master\" class=\"form-ctrl\" formControlName=\"standardDet\" (change)=\"masterCourseSelected()\">\n                    <option value=\"-1\"></option>\n                    <option *ngFor=\"let opt of masterCategoryList\" [value]=\"opt.standard_id\">\n                      {{opt.standard_name}}\n                    </option>\n                  </select>\n\n                </div>\n              </div>\n\n              <div class=\"c-lg-6 c-md-6 c-sm-6 c-xs-6\">\n                <div class=\"field-wrapper\">\n                  <label for=\"course\" *ngIf=\"isProfessional\">Course </label>\n                  <label for=\"course\" *ngIf=\"!isProfessional\">Subject </label>\n                  <select id=\"course\" class=\"form-ctrl\" formControlName=\"subjectDet\">\n                    <option value=\"-1\"></option>\n                    <option *ngFor=\"let opt of courseList\" [value]=\"opt.subject_id\">\n                      {{opt.subject_name}}\n                    </option>\n                  </select>\n\n                </div>\n              </div>\n            </div>\n\n            <div class=\"row\">\n              <div class=\"c-lg-6 c-md-6 c-sm-6 c-xs-6\">\n                <div class=\"field-wrapper\">\n                  <label for=\"UnitCost\">Unit Cost\n                  </label>\n                  <input type=\"number\" class=\"form-ctrl\" min=\"0\" id=\"UnitCost\" formControlName=\"unit_cost\"\n                    name=\"UnitCost\">\n\n                </div>\n              </div>\n              <div class=\"c-lg-6 c-md-6 c-sm-6 c-xs-6 madeDate\" style=\"margin-top:0px;\">\n                <div class=\"field-wrapper datePickerBox\">\n                  <label for=\"followupdate\">Date\n                  </label>\n                  <input type=\"text\" value=\"\" id=\"followupdate\" class=\"form-ctrl\" formControlName=\"created_date\"\n                    style=\"cursor: pointer;\" name=\"createdDate\" readonly=\"true\" bsDatepicker />\n                  <span class=\"date-clear\" name=\"createdDate\" (click)=\"clearDate($event)\"></span>\n                </div>\n\n              </div>\n            </div>\n\n            <div class=\"row\">\n              <div class=\"c-lg-6 c-md-6 c-sm-6 c-xs-6\">\n                <div class=\"field-wrapper\">\n                  <label for=\"lowUnit\">Low Stock Indicator Units\n                  </label>\n                  <input type=\"number\" class=\"form-ctrl\" formControlName=\"out_of_stock_indicator_units\" id=\"lowUnit\"\n                    name=\"lowUnit\">\n\n                </div>\n              </div>\n\n\n              <div class=\"c-lg-6 c-md-6 c-sm-6 c-xs-6\" *ngIf=\"enable_eLearn_feature_flag\">\n                <div class=\"field-wrapper\">\n                  <br>\n                  <input type=\"radio\" class=\"form-ctrl\" name=\"is_offline_or_online\" value=\"Online\"\n                    formControlName=\"is_offline_or_online\" id=\"is_offline_or_online\"><label\n                    class=\"online_offline_label\">Online</label>\n                  <input type=\"radio\" class=\"form-ctrl\" name=\"is_offline_or_online\" value=\"Offline\"\n                    formControlName=\"is_offline_or_online\" id=\"is_offline_or_online\"><label\n                    class=\"online_offline_label\">Offline</label>\n                  <input type=\"radio\" class=\"form-ctrl\" name=\"is_offline_or_online\" value=\"Both\"\n                    formControlName=\"is_offline_or_online\" id=\"is_offline_or_online\"><label\n                    class=\"online_offline_label\">Both</label>\n                </div>\n              </div>\n            </div>\n            <div class=\"row pull-right\" style=\"margin-right:20px\">\n              <button [disabled]='!addItemForm.valid' id=\"btnSave\" class=\"btn fullBlue\" type=\"submit\"> Save </button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n\n<!-- Allocate Item Sub Branch -->\n<!-- =============================================================================== -->\n<section id=\"popup\" class=\"popupWrapper fadeIn\" *ngIf=\"showAllocationBranchPopUp\">\n  <div class=\"popup pos-abs popup-body-container\">\n    <div class=\"popup-wrapper pos-rel\">\n      <span class=\"closePopup pos-abs fbold show\" id=\"popupCloseBtn\" (click)=\"closeAllocateSubBranchPopup()\">\n        <svg class=\"artdeco-icon\" focusable=\"false\" height=\"24px\" preserveAspectRatio=\"xMinYMin meet\"\n          viewBox=\"0 0 24 24\" width=\"24px\" x=\"0\" y=\"0\">\n          <path class=\"large-icon\"\n            d=\"M20,5.32L13.32,12,20,18.68,18.66,20,12,13.33,5.34,20,4,18.68,10.68,12,4,5.32,5.32,4,12,10.69,18.68,4Z\"\n            style=\"fill: currentColor\"></path>\n        </svg>\n      </span>\n      <div class=\"popup-content\">\n        <div class=\"row\">\n          <div class=\"c-lg-6 c-md-6 c-sm-6\">\n            <h2>Item Name : {{allocateItemRowClicked.item_name}} </h2>\n          </div>\n          <div class=\"c-lg-6 c-md-6 c-sm-6\">\n            <h2>Available Unit : {{allocateItemRowClicked.available_units}}</h2>\n          </div>\n        </div>\n\n        <div class=\"\" style=\"padding: 0 15px;\">\n          <h3>Allocate Inventory Item To Sub Branch</h3>\n        </div>\n\n        <form [formGroup]=\"allocateItemForm\" novalidate (ngSubmit)=\"allocateItemToBranches()\">\n          <div class=\"row \">\n            <div class=\"c-lg-6 c-md-6 c-sm-6 c-xs-6\">\n              <div class=\"field-wrapper has-value\">\n                <label for=\"item\">Sub Branch\n                  <span class=\"text-danger\">*</span>\n                </label>\n                <select id=\"\" class=\"form-ctrl\" formControlName=\"sub_branch_id\" (change)=\"onSubBranchSelection()\">\n                  <option value=\"-1\">Select Branch</option>\n                  <option *ngFor=\"let opt of subBranchList\" [value]=\"opt.institute_id\">\n                    {{opt.institute_name}}\n                  </option>\n                </select>\n\n                <div\n                  *ngIf=\"allocateItemForm.controls['sub_branch_id'].invalid && (allocateItemForm.controls['sub_branch_id'].dirty || allocateItemForm.controls['sub_branch_id'].touched)\"\n                  class=\"alert alert-danger\">\n                  <div *ngIf=\"allocateItemForm.controls['sub_branch_id'].hasError('required')\">\n                    Sub Branch Name is required.\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"c-lg-6 c-md-6 c-sm-6 c-xs-6\">\n              <div class=\"field-wrapper\">\n                <label for=\"label\">Sub Branch Item\n                  <span class=\"text-danger\">*</span>\n                </label>\n                <select id=\"\" class=\"form-ctrl\" formControlName=\"sub_branch_item_id\" (click)=\"onSelectSubBranchItem()\">\n                  <option value=\"\">Select Sub branch Item</option>\n                  <option *ngFor=\"let opt of subBranchItemList\" [value]=\"opt.item_id\">\n                    {{opt.item_name}}({{opt.category_name}})\n                  </option>\n                </select>\n\n                <span *ngIf=\"showAvailableUnits\">Units available in Sub Branch: {{availabelItemCount}}</span>\n                <div\n                  *ngIf=\"allocateItemForm.controls['sub_branch_item_id'].invalid && (allocateItemForm.controls['sub_branch_item_id'].dirty || allocateItemForm.controls['sub_branch_item_id'].touched)\"\n                  class=\"alert alert-danger\">\n                  <div *ngIf=\"allocateItemForm.controls['sub_branch_item_id'].hasError('required')\">\n                    Sub Branch Item is required.\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n\n          <div class=\"row \">\n            <div class=\"c-lg-6 c-md-6 c-sm-6 c-xs-6\">\n              <div class=\"field-wrapper\">\n                <label for=\"item\">Allocate Unit\n                  <span class=\"text-danger\">*</span>\n                </label>\n                <input type=\"number\" class=\"form-ctrl\" formControlName=\"alloted_units\" name=\"item\"\n                  placeholder=\"Enter unit\">\n\n                <div\n                  *ngIf=\"allocateItemForm.controls['alloted_units'].invalid && (allocateItemForm.controls['alloted_units'].dirty || allocateItemForm.controls['alloted_units'].touched)\"\n                  class=\"alert alert-danger\">\n                  <div *ngIf=\"allocateItemForm.controls['alloted_units'].hasError('required')\">\n                    Alloted Unit is required.\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"c-lg-6 c-md-6 c-sm-6 c-xs-6\">\n              <div class=\"field-wrapper\">\n                <label for=\"label\">Transport\n                </label>\n                <input type=\"text\" class=\"form-ctrl\" formControlName=\"transport\" name=\"label\"\n                  placeholder=\"Enter transport details\">\n              </div>\n            </div>\n          </div>\n\n\n          <div class=\"row \">\n            <div class=\"c-lg-6 c-md-6 c-sm-6 c-xs-6\">\n              <div class=\"field-wrapper\">\n                <label for=\"item\">Challan No.\n                </label>\n                <input type=\"number\" class=\"form-ctrl\" formControlName=\"challan_no\" name=\"item\">\n\n              </div>\n            </div>\n            <div class=\"c-lg-6 c-md-6 c-sm-6 c-xs-6\">\n              <div class=\"field-wrapper datePickerBox\">\n                <label for=\"createdDate\">Challan Date</label>\n                <input type=\"text\" value=\"\" id=\"followupdate\" class=\"form-ctrl\" formControlName=\"challan_date\"\n                  style=\"cursor: pointer;\" name=\"createdDate\" readonly=\"true\" bsDatepicker />\n\n              </div>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"c-lg-6 c-md-6 c-sm-6 c-xs-6\">\n              <div class=\"field-wrapper\">\n                <label for=\"item\">Challan Amount (Rs)\n                </label>\n                <input type=\"number\" class=\"form-ctrl\" formControlName=\"challan_amount\" name=\"item\">\n\n              </div>\n            </div>\n          </div>\n\n          <div class=\"row pull-right\" style=\"margin-right:20px\">\n            <button id=\"btnSave\" class=\"btn fullBlue\" type=\"submit\"> Allocate </button>\n          </div>\n\n        </form>\n\n      </div>\n    </div>\n  </div>\n</section>\n\n\n<!-- Allocation Item History -->\n<!-- =============================================================================== -->\n<section id=\"popup\" class=\"popupWrapper fadeIn\" *ngIf=\"showAllocationHistoryPopUp\">\n  <div class=\"popup pos-abs popup-body-container\">\n    <div class=\"popup-wrapper pos-rel\">\n      <span class=\"closePopup pos-abs fbold show\" id=\"popupCloseBtn\" (click)=\"closeAllocationItemHistoryPopup()\">\n        <svg class=\"artdeco-icon\" focusable=\"false\" height=\"24px\" preserveAspectRatio=\"xMinYMin meet\"\n          viewBox=\"0 0 24 24\" width=\"24px\" x=\"0\" y=\"0\">\n          <path class=\"large-icon\"\n            d=\"M20,5.32L13.32,12,20,18.68,18.66,20,12,13.33,5.34,20,4,18.68,10.68,12,4,5.32,5.32,4,12,10.69,18.68,4Z\"\n            style=\"fill: currentColor\"></path>\n        </svg>\n      </span>\n      <div class=\"popup-content\">\n        <div>\n          <h2>Inventory Item Transaction History</h2>\n        </div>\n        <div>\n          <h4>Item Name : {{itemName}} </h4>\n        </div>\n\n        <div style=\"margin-top: 15px;max-height: 250px;overflow: auto;\">\n          <table>\n            <thead>\n              <th>\n                S No.\n              </th>\n              <th>\n                Date\n              </th>\n              <th>\n                From/To\n              </th>\n              <th>\n                Contact No.\n              </th>\n              <th>\n                Quantity\n              </th>\n              <th>\n                IN/OUT\n              </th>\n              <th>\n                Others\n              </th>\n            </thead>\n            <tbody>\n              <tr id=\"row{{i}}\" *ngFor=\"let row of allocationHistoryList; let i = index; trackBy: i;\">\n                <td>\n                  {{i + 1}}\n                </td>\n                <td>\n                  {{row.created_date}}\n                </td>\n                <td>\n                  {{row.user_name}}\n                </td>\n                <td>\n                  {{row.contact_no}}\n                </td>\n                <td>\n                  {{row.alloted_units}}\n                </td>\n                <td>\n                  <span *ngIf=\"(row.inventory_type == 1)\"> IN </span>\n                  <span *ngIf=\"(row.inventory_type == 2)\"> OUT </span>\n                </td>\n                <td>\n                  <span [innerHTML]=\"row.other_details\" style=\"float: left; text-align: left\"></span>\n                </td>\n              </tr>\n              <tr *ngIf=\"(allocationHistoryList.length == 0)\">\n                <td colspan=\"7\">\n                  No data found\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/inventory/inventory.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/inventory/inventory.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"clearFix\" style=\"padding-right: 2%;\">\n    <section class=\"middle-top mb0 clearFix\">\n        <h1 class=\"pull-left\">\n            Manage Inventory\n        </h1>\n    </section>\n\n    <section class=\"middle-main clearFix\">\n        <div class=\"common-tab\" style=\"padding-top: 0;\">\n            <ul>\n                <li id=\"item\" (click)=\"switchActiveView('item')\" class=\"active\">\n                    <a routerLink=\"/view/inventory/item\">Item</a>\n                </li>\n                <li id=\"category\" (click)=\"switchActiveView('category')\">\n                    <a routerLink=\"/view/inventory/category\">Category</a>\n                </li>\n            </ul>\n        </div>\n\n        <div class=\"router-container\">\n            <router-outlet></router-outlet>\n        </div>\n    </section>\n\n</div>");

/***/ }),

/***/ "./src/app/components/inventory/inventory-category/inventory-category.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/inventory/inventory-category/inventory-category.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* ===============================header colors=======================*/\n.table-format-first .table-responsive table th,\n.table-format-first .table-responsive table td {\n  text-align: center;\n  padding: 10px 5px;\n}\n.table-format-first .table-responsive table th {\n  text-transform: capitalize;\n  font-size: 14px;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper {\n  display: inline-block;\n  overflow: initial;\n  margin-left: 0;\n  width: auto;\n  position: relative;\n  background: transparent;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox {\n  z-index: 2;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label {\n  font-size: 16px;\n  margin-left: 7px;\n  font-weight: 600;\n  vertical-align: middle;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:after, .table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:before {\n  z-index: 1;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper:after {\n  content: '';\n  width: 20px;\n  height: 20px;\n  background: #fff;\n  left: 0;\n  top: 0;\n  position: absolute;\n}\n.table-format-first .table-responsive table tbody tr td .fa-trash-o {\n  color: #f44336;\n  font-size: 20px;\n}\n.table-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-top: 10px;\n}\n.table-container .heading-container {\n  background: #e0eaec;\n  display: flex;\n  flex-direction: row;\n  font-size: 14px;\n  font-weight: 600;\n  text-align: left;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n}\n.table-container .heading-container .heading-item {\n  width: 10%;\n  text-align: center;\n}\n.table-container .value-outer-container {\n  display: flex;\n  flex-direction: column;\n  min-height: 53vh;\n  max-height: 54vh;\n  overflow-x: hidden;\n  overflow-y: auto;\n  border: 1px solid #ccc;\n}\n.table-container .value-outer-container .value-container {\n  display: flex;\n  flex-direction: row;\n  text-align: left;\n  padding: 4px;\n  font-size: 12px;\n  border-bottom: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n  border-top: none;\n}\n.table-container .value-outer-container .value-container .value-item {\n  width: 10%;\n  text-align: center;\n}\ntable thead tr th {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\ntable tbody tr td {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\ntable tbody tr td .editOptions li {\n  display: inline-block;\n}\ntable tbody tr .field-wrapper {\n  padding: 0px !important;\n}\ntable tbody tr .field-wrapper .form-ctrl {\n  display: block;\n  box-sizing: border-box;\n  padding: 0px 0px 0px 5px;\n  outline: none;\n  border: 0;\n  height: 26px;\n  box-shadow: none;\n  border-radius: 0;\n  line-height: 25px;\n  background: transparent;\n  width: 80px;\n  text-align: center;\n  border-bottom: 1px solid #ccc;\n}\ntable tbody .displayComp .view-comp {\n  padding: 6px 6px;\n}\ntable tbody .displayComp .edit-comp {\n  padding: 6px 6px;\n  display: none;\n}\ntable tbody .editComp .view-comp {\n  display: none;\n}\n@media screen and (max-width: 995px), screen and (max-height: 768px) {\n  #category-table {\n    margin-left: 0px !important;\n    margin-top: 15px;\n    margin-right: 15px !important;\n    max-height: 480px;\n    overflow: hidden;\n    width: 100%;\n  }\n  #category-table .table-scroll-wrapper {\n    max-height: 430px;\n  }\n  #category-table ::-webkit-scrollbar {\n    display: block;\n    width: 7px;\n    height: 7px;\n  }\n}\n.addNewButton {\n  text-decoration: none;\n  color: #0084f6;\n}\ninput[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n.editCellInput {\n  display: block;\n}\n.add-edit {\n  margin-bottom: 15px;\n  margin-top: 15px;\n}\n.add-edit i {\n  border: 1px solid #0084f6;\n  display: inline-block;\n  width: 17px;\n  height: 17px;\n  border-radius: 50%;\n  line-height: 16px;\n  text-align: center;\n  font-size: 17px;\n  vertical-align: middle;\n  margin-right: 4px;\n}\n.add-edit span {\n  display: inline-block;\n}\n.add-edit .expend-box i {\n  line-height: 12px;\n  font-size: 22px;\n}\n.add-edit a {\n  cursor: pointer;\n}\n.closeBtnClass {\n  line-height: 11px !important;\n}\n.create-standard-form {\n  margin: 10px 0;\n  border-top: 1px solid #d8d8d8;\n}\n.create-standard-form .form-ctrl {\n  background: transparent;\n  border: solid 1px #cccccc;\n}\n#category-table {\n  max-height: 333px;\n  margin-bottom: 0px;\n  padding-bottom: 0px;\n  overflow: auto;\n}\n.text-align-left {\n  text-align: left;\n}\n#tbLCategory th {\n  padding: 10px;\n  background: #eff1f5;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY3NzL2NvbW1vbi92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9pbnZlbnRvcnkvaW52ZW50b3J5LWNhdGVnb3J5L2ludmVudG9yeS1jYXRlZ29yeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZQSx1RUFBQTtBQVdBOztFQUtnQixrQkFBa0I7RUFDbEIsaUJBQWlCO0FDeEJqQztBRGtCQTtFQVNnQiwwQkFBMEI7RUFDMUIsZUFBZTtBQ3ZCL0I7QURhQTtFQWdCNEIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsV0FBVztFQUNYLGtCQUFrQjtFQUNsQix1QkFBdUI7QUN6Qm5EO0FESUE7RUF1QmdDLFVBQVU7QUN2QjFDO0FEQUE7RUEwQmdDLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtBQ3RCdEQ7QURQQTtFQWdDb0MsVUFBVTtBQ3JCOUM7QURYQTtFQW9DZ0MsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLE9BQU87RUFDUCxNQUFNO0VBQ04sa0JBQWtCO0FDckJsRDtBRHJCQTtFQThDNEIsY0FsRGI7RUFtRGEsZUFBZTtBQ3JCM0M7QUQ4QkE7RUFDSSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxnQkFBZ0I7QUMzQnBCO0FEdUJBO0VBTU0sbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIseUJBQXlCO0FDekIvQjtBRFVBO0VBaUJRLFVBQVU7RUFDVixrQkFBa0I7QUN2QjFCO0FES0E7RUFzQk0sYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0FDdkI1QjtBRExBO0VBOEJRLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLG9CQUFvQjtFQUNwQix5QkFBeUI7RUFDekIsZ0JBQWdCO0FDckJ4QjtBRGpCQTtFQXdDVSxVQUFVO0VBQ1Ysa0JBQWtCO0FDbkI1QjtBQXBHQTtFQUlnQixpQkFBaUI7RUFDakIsb0JBQW9CO0FBb0dwQztBQXpHQTtFQVlnQixpQkFBaUI7RUFDakIsb0JBQW9CO0FBaUdwQztBQTlHQTtFQWVvQixxQkFBcUI7QUFtR3pDO0FBbEhBO0VBbUJnQix1QkFBdUI7QUFtR3ZDO0FBdEhBO0VBcUJvQixjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLHdCQUF3QjtFQUN4QixhQUFhO0VBQ2IsU0FBUztFQUNULFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQiw2QkFBNkI7QUFxR2pEO0FBdElBO0VBMENnQixnQkFBZ0I7QUFnR2hDO0FBMUlBO0VBNkNnQixnQkFBaUI7RUFDakIsYUFFSjtBQStGWjtBQS9JQTtFQW9EZ0IsYUFDSjtBQThGWjtBQXhGQTtFQUVJO0lBQ0ksMkJBQTJCO0lBQzNCLGdCQUFnQjtJQUNoQiw2QkFBNkI7SUFDN0IsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixXQUFXO0VBMEZqQjtFQWhHRTtJQVFRLGlCQUFpQjtFQTJGM0I7RUFuR0U7SUFXUSxjQUFjO0lBQ2QsVUFBVTtJQUNWLFdBQVc7RUEyRnJCO0FBQ0Y7QUF2RkE7RUFDSSxxQkFBcUI7RUFDckIsY0FBYztBQTBGbEI7QUF4RkE7O0VBRUksd0JBQXdCO0VBQ3hCLFNBQVM7QUEyRmI7QUF4RkE7RUFFSSxjQUFjO0FBMEZsQjtBQXZGQTtFQUNJLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUEwRnBCO0FBNUZBO0VBSVEseUJEM0ZhO0VDNEZiLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsaUJBQWlCO0FBNEZ6QjtBQXpHQTtFQWdCUSxxQkFBcUI7QUE2RjdCO0FBN0dBO0VBb0JZLGlCQUFpQjtFQUNqQixlQUFlO0FBNkYzQjtBQWxIQTtFQXlCUSxlQUFlO0FBNkZ2QjtBQXpGQTtFQUNJLDRCQUE0QjtBQTRGaEM7QUF6RkE7RUFDSSxjQUFjO0VBQ2QsNkJBQTZCO0FBNEZqQztBQTlGQTtFQUlRLHVCQUF1QjtFQUN2Qix5QkFBeUI7QUE4RmpDO0FBMUZBO0VBQ0ksaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsY0FBYztBQTZGbEI7QUExRkE7RUFDRSxnQkFBZ0I7QUE2RmxCO0FBMUZBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQTZGckIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2ludmVudG9yeS9pbnZlbnRvcnktY2F0ZWdvcnkvaW52ZW50b3J5LWNhdGVnb3J5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHB1bGwtTDogbGVmdDtcbiRwdWxsLVI6IHJpZ2h0O1xuJHB1bGwtbm9uZTogbm9uZTtcbiRmdWxsLXdpZHRoOiAxMDAlO1xuJGJvcmRlci1ib3g6IGJvcmRlci1ib3g7XG4kYm9yZGVyLWNvbG9yOiAjZGVlYWVlO1xuJGJnLXdoaXRlOiAjZmZmO1xuJGVycm9yLWNvbG9yOiAjZmYwMDAwO1xuJGNvbW1vbi1ibHVlOiAjMDA4NGY2O1xuJHByaW1hcnktY29sb3I6ICMzMzM7XG4kYm9yZGVyLWNvbW1vbjojZWFlYWViO1xuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09aGVhZGVyIGNvbG9ycz09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuJGhlYWRlci1iZzojMDA2MEEzO1xuJGhlYWRlci1ib3JkZXI6I2VhZWFlYjtcbiRsZWZ0TWVudUJnOiNmYWZhZmE7XG4kbGVmdE1lbnVIb3ZlckJnOiMwMDg0ZjY7XG4kbGVmdE1lbnVUZXh0SG92ZXJDb2xvcjojZmZmO1xuJHJlZEJ0bjojZjQ0MzM2O1xuJGJvcmRlcmNjYzojY2NjO1xuJGxpZ2h0Qmx1ZTojZWZmN2ZmO1xuJHRhYmxlSGVhZGluZ0JnQ29sb3I6ICMwMDRhN2U7XG4udGFibGUtZm9ybWF0LWZpcnN0IHtcbiAgICAudGFibGUtcmVzcG9uc2l2ZSB7XG4gICAgICAgIHRhYmxlIHtcbiAgICAgICAgICAgIHRoLFxuICAgICAgICAgICAgdGQge1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoIHtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0Ym9keSB7XG4gICAgICAgICAgICAgICAgdHIge1xuICAgICAgICAgICAgICAgICAgICB0ZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuZmllbGQtY2hlY2tib3gtd3JhcHBlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBpbml0aWFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZm9ybS1jaGVja2JveCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mb3JtLWNoZWNrYm94K2xhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogN3B4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmFmdGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLmZhLXRyYXNoLW8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkcmVkQnRuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnRhYmxlLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgLmhlYWRpbmctY29udGFpbmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICNlMGVhZWM7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgICAuaGVhZGluZy1pdGVtIHtcbiAgICAgICAgd2lkdGg6IDEwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgIH1cbiAgICAudmFsdWUtb3V0ZXItY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgbWluLWhlaWdodDogNTN2aDtcbiAgICAgIG1heC1oZWlnaHQ6IDU0dmg7XG4gICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgIC52YWx1ZS1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgICAgICBib3JkZXItdG9wOiBub25lO1xuICAgICAgICAudmFsdWUtaXRlbSB7XG4gICAgICAgICAgd2lkdGg6IDEwJTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0iLCJAaW1wb3J0IFwiLi9zcmMvYXNzZXRzL2Nzcy9jb21tb24vdmFyaWFibGVzLnNjc3NcIjtcbnRhYmxlIHtcbiAgICB0aGVhZCB7XG4gICAgICAgIHRyIHtcbiAgICAgICAgICAgIHRoIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICB0Ym9keSB7XG4gICAgICAgIHRyIHtcbiAgICAgICAgICAgIHRkIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgICAuZWRpdE9wdGlvbnMgbGkge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZpZWxkLXdyYXBwZXIge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIC5mb3JtLWN0cmwge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMHB4IDBweCAwcHggNXB4O1xuICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjZweDtcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogODBweDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmRpc3BsYXlDb21wIHtcblxuXG5cbiAgICAgICAgICAgIC52aWV3LWNvbXAge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDZweCA2cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZWRpdC1jb21wIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAgNnB4IDZweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuZWRpdENvbXAge1xuICAgICAgICAgICAgLnZpZXctY29tcCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmVkaXQtY29tcCB7fVxuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTVweCksXG5zY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA3NjhweCkge1xuICAgICNjYXRlZ29yeS10YWJsZSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIG1heC1oZWlnaHQ6IDQ4MHB4O1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgLnRhYmxlLXNjcm9sbC13cmFwcGVyIHtcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDQzMHB4O1xuICAgICAgICB9XG4gICAgICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgd2lkdGg6IDdweDtcbiAgICAgICAgICAgIGhlaWdodDogN3B4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uYWRkTmV3QnV0dG9uIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6ICMwMDg0ZjY7XG59IC8vLy8vLyBUdXJuIG9mZiBzcGlubmVyXG5pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXG5pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5lZGl0Q2VsbElucHV0IHtcbiAgICAvLyBtYXJnaW46IGF1dG87XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5hZGQtZWRpdCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIGkge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkY29tbW9uLWJsdWU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgd2lkdGg6IDE3cHg7XG4gICAgICAgIGhlaWdodDogMTdweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgIH1cbiAgICBzcGFuIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIH1cbiAgICAuZXhwZW5kLWJveCB7XG4gICAgICAgIGkge1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEycHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYSB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG59XG5cbi5jbG9zZUJ0bkNsYXNzIHtcbiAgICBsaW5lLWhlaWdodDogMTFweCAhaW1wb3J0YW50O1xufVxuXG4uY3JlYXRlLXN0YW5kYXJkLWZvcm0ge1xuICAgIG1hcmdpbjogMTBweCAwO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZDhkOGQ4O1xuICAgIC5mb3JtLWN0cmwge1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggI2NjY2NjYztcbiAgICB9XG59XG5cbiNjYXRlZ29yeS10YWJsZXtcbiAgICBtYXgtaGVpZ2h0OiAzMzNweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgICBvdmVyZmxvdzogYXV0bztcbn1cblxuLnRleHQtYWxpZ24tbGVmdHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuI3RiTENhdGVnb3J5IHRoIHtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZDogI2VmZjFmNTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/inventory/inventory-category/inventory-category.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/inventory/inventory-category/inventory-category.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: InventoryCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryCategoryComponent", function() { return InventoryCategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_inventory_services_inventory_category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/inventory-services/inventory-category.service */ "./src/app/services/inventory-services/inventory-category.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app.component */ "./src/app/app.component.ts");
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



let InventoryCategoryComponent = /** @class */ (() => {
    let InventoryCategoryComponent = class InventoryCategoryComponent {
        constructor(categoryService, appC) {
            this.categoryService = categoryService;
            this.appC = appC;
            this.newCategory = {};
            this.categoryList = [];
            this.dataSourceCategory = [];
            this.totalRow = 0;
            this.studentdisplaysize = 10;
            this.PageIndex = 1;
            this.sizeArr = [10, 25, 50, 100];
            this.displayBatchSize = 10;
            this.createNewCategory = true;
        }
        ngOnInit() {
            this.getAllCategoryList();
            this.switchActiveView('category');
        }
        addNewCategoryRow(categoryElement, descriptionElement) {
            this.newCategory.category_name = categoryElement.value;
            this.newCategory.desc = descriptionElement.value;
            this.addTableRow(this.newCategory);
        }
        //  Add Row Of Table
        addTableRow(data) {
            if (data.category_name == "" || data.category_name == null) {
                let data = {
                    type: 'error',
                    title: '',
                    body: "Please fill Category Name."
                };
                this.appC.popToast(data);
                return;
            }
            this.categoryService.setNewCategory(data).subscribe(data => {
                this.getAllCategoryList();
                document.getElementById('ctgryName').value = "";
                document.getElementById('ctgrydesc').value = "";
                let msg = {
                    type: 'success',
                    title: "",
                    body: "New Category Added."
                };
                this.appC.popToast(msg);
            }, error => {
                let msg = {
                    type: "error",
                    title: "",
                    body: error.error.message
                };
                this.appC.popToast(msg);
            });
        }
        // Cancel
        cancelTableRow(event) {
            this.getAllCategoryList();
        }
        // edit perticular row
        editRow(id) {
            document.getElementById(("row" + id).toString()).classList.remove('displayComp');
            document.getElementById(("row" + id).toString()).classList.add('editComp');
        }
        // update the current table row
        updateTableRow(rowData, id) {
            document.getElementById(("row" + id).toString()).classList.remove('editComp');
            document.getElementById(("row" + id).toString()).classList.add('displayComp');
            let data = {};
            data.category_id = rowData.category_id;
            data.category_name = rowData.category_name;
            data.desc = rowData.desc;
            data.institution_id = rowData.institution_id;
            this.categoryService.updateExisting(data).subscribe(data => {
                let msg = {
                    type: 'success',
                    title: "",
                    body: "Category Updated."
                };
                this.appC.popToast(msg);
            }, error => {
                let msg = {
                    type: "error",
                    title: "",
                    body: error.error.message
                };
                this.appC.popToast(msg);
            });
        }
        // to fetch all category items
        getAllCategoryList() {
            this.categoryService.getCategoryList().subscribe((data) => {
                this.totalRow = data.length;
                this.dataSourceCategory = data;
                this.fetchTableDataByPage(this.PageIndex);
            }, err => {
                let msg = {
                    type: "error",
                    title: "",
                    body: "An Error Occured"
                };
                this.appC.popToast(msg);
            });
        }
        toggleCreateNewSlot() {
            if (this.createNewCategory == false) {
                this.createNewCategory = true;
                document.getElementById('showCloseBtn').style.display = '';
                document.getElementById('showAddBtn').style.display = 'none';
            }
            else {
                this.createNewCategory = false;
                document.getElementById('showCloseBtn').style.display = 'none';
                document.getElementById('showAddBtn').style.display = '';
            }
        }
        // pagination functions
        fetchTableDataByPage(index) {
            this.PageIndex = index;
            let startindex = this.displayBatchSize * (index - 1);
            this.categoryList = this.getDataFromDataSource(startindex);
        }
        fetchNext() {
            this.PageIndex++;
            this.fetchTableDataByPage(this.PageIndex);
        }
        fetchPrevious() {
            if (this.PageIndex != 1) {
                this.PageIndex--;
                this.fetchTableDataByPage(this.PageIndex);
            }
        }
        getDataFromDataSource(startindex) {
            let t = this.dataSourceCategory.slice(startindex, startindex + this.displayBatchSize);
            return t;
        }
        switchActiveView(tabName) {
            document.getElementById('item').classList.remove('active');
            document.getElementById('category').classList.remove('active');
            document.getElementById(tabName).classList.add('active');
        }
    };
    InventoryCategoryComponent.ctorParameters = () => [
        { type: _services_inventory_services_inventory_category_service__WEBPACK_IMPORTED_MODULE_1__["InventoryCategoryService"] },
        { type: _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"] }
    ];
    InventoryCategoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-inventory-category',
            template: __importDefault(__webpack_require__(/*! raw-loader!./inventory-category.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/inventory/inventory-category/inventory-category.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./inventory-category.component.scss */ "./src/app/components/inventory/inventory-category/inventory-category.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_services_inventory_services_inventory_category_service__WEBPACK_IMPORTED_MODULE_1__["InventoryCategoryService"],
            _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]])
    ], InventoryCategoryComponent);
    return InventoryCategoryComponent;
})();



/***/ }),

/***/ "./src/app/components/inventory/inventory-home/inventory-home.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/inventory/inventory-home/inventory-home.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/* ===============================header colors=======================*/\n.table-format-first .table-responsive table th,\n.table-format-first .table-responsive table td {\n  text-align: center;\n  padding: 10px 5px;\n}\n.table-format-first .table-responsive table th {\n  text-transform: capitalize;\n  font-size: 14px;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper {\n  display: inline-block;\n  overflow: initial;\n  margin-left: 0;\n  width: auto;\n  position: relative;\n  background: transparent;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox {\n  z-index: 2;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label {\n  font-size: 16px;\n  margin-left: 7px;\n  font-weight: 600;\n  vertical-align: middle;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:after, .table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:before {\n  z-index: 1;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper:after {\n  content: '';\n  width: 20px;\n  height: 20px;\n  background: #fff;\n  left: 0;\n  top: 0;\n  position: absolute;\n}\n.table-format-first .table-responsive table tbody tr td .fa-trash-o {\n  color: #f44336;\n  font-size: 20px;\n}\n.table-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-top: 10px;\n}\n.table-container .heading-container {\n  background: #e0eaec;\n  display: flex;\n  flex-direction: row;\n  font-size: 14px;\n  font-weight: 600;\n  text-align: left;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n}\n.table-container .heading-container .heading-item {\n  width: 10%;\n  text-align: center;\n}\n.table-container .value-outer-container {\n  display: flex;\n  flex-direction: column;\n  min-height: 53vh;\n  max-height: 54vh;\n  overflow-x: hidden;\n  overflow-y: auto;\n  border: 1px solid #ccc;\n}\n.table-container .value-outer-container .value-container {\n  display: flex;\n  flex-direction: row;\n  text-align: left;\n  padding: 4px;\n  font-size: 12px;\n  border-bottom: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n  border-top: none;\n}\n.table-container .value-outer-container .value-container .value-item {\n  width: 10%;\n  text-align: center;\n}\n.inventory-table {\n  max-height: 400px;\n  overflow: visible;\n}\n.inventory-table #item-Table {\n  max-height: 400px;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.dropdown-trigger {\n  background: transparent;\n  padding: 8px 8px 0px 8px;\n  border-radius: 50%;\n}\n.dropdown-trigger:hover {\n  background: #dadada;\n}\n.svg-icon-wrap {\n  display: inline-block;\n}\n.visually-hidden {\n  display: block;\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n}\n.dd-list-container {\n  position: absolute;\n  border: 1px solid rgba(119, 119, 119, 0.29);\n  right: 100%;\n  z-index: 100;\n  bottom: -100%;\n  width: 200px;\n  height: auto;\n  background: white;\n  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.611765);\n}\n.actions-menu {\n  list-style-type: none;\n  padding-left: 0;\n  margin-top: 0;\n}\n.actions-menu .action-item {\n  padding: 8px;\n  background: white;\n  display: flex !important;\n  margin: 0 !important;\n  cursor: pointer;\n  border-bottom: 1px solid #ccc;\n}\n.actions-menu .action-item span {\n  font-size: 14px;\n  font-weight: 600;\n}\n.actions-menu .action-item img {\n  max-width: 100%;\n  height: auto;\n  margin-right: 8px;\n}\n.actions-menu .action-item:hover {\n  background: white;\n}\n#table-header th {\n  padding: 10px;\n  background: #eff1f5;\n}\n#table-header td {\n  padding: 0px 10px;\n}\n.text-align-left {\n  text-align: left;\n}\n.middle-section {\n  padding: 5px 15px;\n  width: 100%;\n  box-sizing: border-box;\n}\ntable tr td {\n  padding: 0px 10px;\n}\n.search-filter-wrapper .normal-field {\n  padding: 7px 10px;\n  border: 1px solid #ccc;\n  width: 50%;\n  box-sizing: border-box;\n  margin: 0;\n  float: left;\n  font-size: 12px;\n}\n.search-filter-wrapper .field-wrapper {\n  position: relative;\n  padding-top: 0px !important;\n  width: 30%;\n  float: left !important;\n}\n.search-filter-wrapper .field-wrapper .form-ctrl {\n  font: 400 12px \"Open sans\", sans-serif;\n  border-top: none !important;\n  border-right: none !important;\n  border-left: none !important;\n}\n.search-filter-wrapper .field-wrapper label {\n  position: absolute !important;\n  left: 10% !important;\n  top: 1% !important;\n}\n.search-filter-wrapper .field-wrapper label:after {\n  left: 85% !important;\n  top: 10px !important;\n}\n.middle-top h1 {\n  margin-top: 8px;\n  margin-bottom: 10px;\n  float: none;\n}\n.middle-top aside {\n  float: left;\n}\n/*=======================filter type==============*/\n.filter-res label {\n  font-size: 14px;\n  font-weight: 600;\n}\n.pagination .first:before {\n  content: \"« \";\n  font-size: 16px;\n  font-weight: 800;\n}\n.pagination .last:after {\n  content: \" »\";\n  font-size: 16px;\n  font-weight: 800;\n}\n.pagination .batch-size {\n  font-size: 16px;\n  font-weight: 800;\n  border-bottom: 1px solid black;\n}\n.pagination li {\n  border-right: 1px solid #ccc;\n  padding: 0px 7px;\n  margin: 0;\n  line-height: 10px;\n  font-weight: 800;\n  cursor: pointer;\n}\n.pagination li a {\n  line-height: 10px;\n  font-size: 16px;\n  font-weight: 800;\n  border: none;\n  padding: 0px 14px;\n}\n.pagination li:last-child {\n  border-right: 0;\n  padding-right: 0;\n}\n/*===========================================action tooltip of table===================*/\n/**===============================search data=========================*/\n.search-data th {\n  padding: 10px 20px;\n  font-weight: 500;\n}\n.search-data td {\n  font-size: 14px;\n  line-height: normal;\n  padding: 6px 5px;\n}\n.search-data tr th:first-child,\n.search-data tr td:first-child {\n  padding: 15px 2px;\n}\n.search-data tr th:first-child .field-checkbox-wrapper,\n.search-data tr td:first-child .field-checkbox-wrapper {\n  background: transparent;\n}\n.search-data tr th:last-child {\n  padding: 0;\n}\n/*=====================================mobile head menu css===========================*/\n/* popUp Scss */\n.popupWrapper {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  bottom: 0;\n  top: 0px;\n  right: 0;\n  left: 0px;\n  background: rgba(230, 230, 230, 0.5);\n  z-index: 100;\n  visibility: hidden;\n  opacity: 0;\n  transition: all 0.5s ease-in;\n}\n.popupWrapper .popup {\n  max-width: 850px;\n  width: 100%;\n  height: auto;\n  left: 0;\n  right: 0;\n  top: 5%;\n  bottom: 0;\n  margin: auto;\n}\n.popup-wrapper {\n  padding: 20px 20px;\n  box-sizing: border-box;\n  box-shadow: 1px 8px 20px 5px #9c9c9c;\n  transition: unset;\n  background: #fff;\n}\n.popup-wrapper h2 {\n  margin-bottom: 15px;\n  font-size: 14px;\n}\n.popup-wrapper h4 {\n  margin: 25px 0 15px;\n  font-weight: 600;\n}\n.closePopup {\n  right: 10px;\n  top: 10px;\n  font-size: 18px;\n  cursor: pointer;\n  line-height: 20px;\n  width: 26px;\n  height: 26px;\n  box-sizing: border-box;\n  text-align: center;\n  padding-top: 3px;\n  display: none;\n}\n.closePopup.bottomRight {\n  bottom: 2px;\n  top: auto;\n  left: auto;\n  right: 0;\n}\n.closePopup.topLeft {\n  left: 0;\n  right: auto;\n  top: 1px;\n  bottom: auto;\n}\n.closePopup.bottomLeft {\n  left: 0;\n  right: auto;\n  bottom: 2px;\n  top: auto;\n}\n.closePopup svg {\n  width: 16px;\n}\n.closePopup svg .cls-1 {\n  stroke: #c1c1c1;\n  stroke-width: 2px;\n}\n.closePopup:hover .cls-1 {\n  stroke: #0084f6;\n}\n.popup-content {\n  height: 100%;\n  overflow: hidden;\n  visibility: visible;\n}\n.popup-content th {\n  padding: 10px;\n}\n.popup-content td {\n  padding: 10px;\n}\n.fadeIn {\n  opacity: 1;\n  visibility: visible;\n}\n.popupWrapperMob {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  bottom: 0;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 100;\n  background: rgba(0, 0, 0, 0.5);\n  visibility: hidden;\n  transition: all 0.5s ease-in;\n}\n.popupWrapperMob .closePopup {\n  right: -25px;\n  top: -27px;\n  display: block;\n}\n.popup-mob {\n  left: 0;\n  width: 100%;\n  max-height: 70%;\n  background: #fff;\n  padding: 30px;\n  box-sizing: border-box;\n  height: 100%;\n  overflow: auto;\n  z-index: 1;\n  bottom: -70%;\n  transition: all 0.5s ease-in;\n}\n.popupWrapperMob.showPopupMob {\n  z-index: 100;\n  visibility: visible;\n  opacity: 1;\n}\n.popupWrapperMob.showPopupMob .popup-mob {\n  bottom: 0;\n}\n/*=========================================registration popup form css==================*/\n/*=======================================confirmation =========================*/\n.popup-btn {\n  margin-top: 20px;\n}\n.popup-btn .btn {\n  font-size: 14px;\n  height: 30px;\n  color: #333;\n}\n.popup-btn .btn.redBtn {\n  color: #fff;\n}\ntable {\n  border: 1px solid #ccc;\n}\ntable thead tr th {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\ntable thead .displayComp .edit-comp {\n  display: none;\n}\ntable thead .editComp .view-comp {\n  display: none;\n}\ntable tbody tr td .editOptions li {\n  display: inline-block;\n}\ntable tbody tr td .field-wrapper {\n  padding: 0px !important;\n}\ntable tbody tr td .field-wrapper .form-ctrl {\n  display: block;\n  box-sizing: border-box;\n  padding: 0px 0px 0px 5px;\n  outline: none;\n  border: 0;\n  height: 26px;\n  box-shadow: none;\n  border-radius: 0;\n  line-height: 25px;\n  background: transparent;\n  width: 80px;\n  text-align: center;\n  border-bottom: 1px solid #ccc;\n}\ntable tbody .displayComp .view-comp .displayAddItem .edit-addItem {\n  display: none;\n}\ntable tbody .displayComp .view-comp .editAddItem .view-addItem {\n  display: none;\n}\ntable tbody .displayComp .edit-comp {\n  display: none;\n}\ntable tbody .editComp .view-comp {\n  display: none;\n}\n.table-action ul li {\n  display: inline-block;\n  margin: 0px 5px;\n}\n.row.extraMargin {\n  margin: 10px 0px 25px 0px;\n}\n.btn.fullBlue {\n  background: #0084f6;\n  border: 1px solid #0084f6;\n  color: #fff;\n}\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n/*===========================================action tooltip of table===================*/\n.enquiry-action {\n  position: relative;\n  cursor: pointer;\n}\n.enquiry-action .cls-1,\n.enquiry-action .cls-2 {\n  fill: none;\n  stroke: transparent;\n}\n.enquiry-action svg {\n  width: 18px;\n}\n.enquiry-action .cls-2 {\n  stroke: #7d7f80;\n  stroke-miterlimit: 10;\n}\n.enquiry-action:hover .action-icon svg .cls-2 {\n  stroke: #0084f6;\n  stroke-miterlimit: 10;\n}\n.action-menu {\n  position: absolute;\n  background: #fff;\n  width: 200px;\n  border-radius: 0;\n  border: 1px solid #ccc;\n  bottom: 15px;\n  box-shadow: 0px 2px 4px 1px #ccc;\n  transform: translateX(-50%);\n  left: 50%;\n  visibility: hidden;\n  opacity: 0;\n  transition: all 0.6s;\n}\n.madeDate .field-wrapper {\n  margin: 0px 0;\n}\n.madeDate .field-wrapper.datePickerBox:after {\n  content: \"\";\n  background: url('calendar.svg') no-repeat;\n  position: absolute;\n  right: 5px;\n  top: 29px;\n  width: 21px;\n  height: 21px;\n  z-index: 0;\n}\n.enquiry-action:hover .action-menu {\n  visibility: visible;\n  opacity: 1;\n  bottom: 8px;\n}\n.action-menu-inner ul {\n  font-size: 0;\n  position: relative;\n}\n.action-menu-inner ul:after {\n  content: \"\";\n  position: absolute;\n  right: 0;\n  left: 0;\n  bottom: -15px;\n  margin: auto;\n  border-top: 8px solid #fff;\n  border-bottom: 8px solid transparent;\n  border-right: 8px solid transparent;\n  border-left: 8px solid transparent;\n  width: 0;\n  height: 0;\n}\n.action-menu-inner ul li {\n  display: inline-block;\n  text-align: center;\n  vertical-align: top;\n  font-size: 12px;\n  padding: 0 8px;\n  box-sizing: border-box;\n  cursor: pointer;\n  width: 18%;\n}\n.action-menu-inner ul li:last-child {\n  width: 28%;\n}\n.action-menu-inner ul li:last-child svg {\n  width: 33px;\n}\n.action-menu-inner ul li.edit-detail-icon svg * {\n  fill: none;\n  stroke: #8b8b8b;\n}\n.action-menu-inner ul li.edit-detail-icon svg .cls-1 {\n  stroke: none;\n  /* stroke: #8b8b8b; */\n}\n.action-menu-inner ul li:hover {\n  color: #0084f6;\n}\n.action-menu-inner ul li:hover .cls-2,\n.action-menu-inner ul li:hover .cls-3 {\n  fill: none;\n  stroke: #0084f6;\n}\n.action-menu-inner ul li span {\n  display: block;\n  font-size: 9px;\n  text-align: center;\n  line-height: 10px;\n}\n.action-menu-inner .close {\n  position: absolute;\n  right: 4px;\n  top: 2px;\n}\n.action-menu-inner i {\n  display: block;\n  height: 32px;\n}\n.enquiry-action li svg {\n  width: 28px;\n}\n.listClasses {\n  height: 50px;\n  width: 25%;\n}\n.listClasses .imageContent {\n  height: 25px;\n}\n.listClasses .textContent {\n  font-weight: 700;\n}\n.boxPadding15 {\n  box-sizing: border-box;\n}\n.editCellAllignment {\n  text-align: center;\n}\n.btnWrapper .btn {\n  padding: 4px 10px;\n  border-radius: 0px;\n}\n.addQuantityInput {\n  max-width: 35px;\n  text-align: center;\n  margin-left: 30px;\n}\n.lowquantity {\n  color: red;\n}\ninput[type=\"radio\"] {\n  -webkit-appearance: radio;\n  width: 5%;\n  margin-top: 0;\n  float: left;\n}\n.online_offline_label {\n  float: left;\n  margin-right: 5%;\n}\n.item-container {\n  display: flex;\n  flex-direction: row;\n  margin-bottom: 10px;\n  font-size: 14px;\n  font-weight: 600;\n}\n.item-container .item-title {\n  margin-right: 10px;\n  width: 40%;\n}\n.item-container .select-container {\n  display: block;\n  box-sizing: border-box;\n  padding: 5px;\n  outline: none;\n  border: solid 1px #e2ebee;\n  background: #fff;\n  z-index: 10;\n  font: 400 12px 'Open sans',sans-serif;\n  box-shadow: none;\n  border-radius: 0;\n  color: #000;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbnZlbnRvcnkvaW52ZW50b3J5LWhvbWUvaW52ZW50b3J5LWhvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXNzZXRzL2Nzcy9jb21tb24vdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDWWhCLHVFQUFBO0FBV0E7O0VBS2dCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUR2QmpDO0FDaUJBO0VBU2dCLDBCQUEwQjtFQUMxQixlQUFlO0FEdEIvQjtBQ1lBO0VBZ0I0QixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHVCQUF1QjtBRHhCbkQ7QUNHQTtFQXVCZ0MsVUFBVTtBRHRCMUM7QUNEQTtFQTBCZ0MsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0FEckJ0RDtBQ1JBO0VBZ0NvQyxVQUFVO0FEcEI5QztBQ1pBO0VBb0NnQyxXQUFXO0VBQ1gsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsT0FBTztFQUNQLE1BQU07RUFDTixrQkFBa0I7QURwQmxEO0FDdEJBO0VBOEM0QixjQWxEYjtFQW1EYSxlQUFlO0FEcEIzQztBQzZCQTtFQUNJLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGdCQUFnQjtBRDFCcEI7QUNzQkE7RUFNTSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQix5QkFBeUI7QUR4Qi9CO0FDU0E7RUFpQlEsVUFBVTtFQUNWLGtCQUFrQjtBRHRCMUI7QUNJQTtFQXNCTSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixzQkFBc0I7QUR0QjVCO0FDTkE7RUE4QlEsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0Isb0JBQW9CO0VBQ3BCLHlCQUF5QjtFQUN6QixnQkFBZ0I7QURwQnhCO0FDbEJBO0VBd0NVLFVBQVU7RUFDVixrQkFBa0I7QURsQjVCO0FBckdBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQXdHbkI7QUExR0E7RUFJSSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQTBHcEI7QUF0R0E7RUFDRSx1QkFBdUI7RUFDdkIsd0JBQXdCO0VBQ3hCLGtCQUFrQjtBQXlHcEI7QUE1R0E7RUFLSSxtQkFBbUI7QUEyR3ZCO0FBdkdBO0VBQ0UscUJBQXFCO0FBMEd2QjtBQXZHQTtFQUNFLGNBQWM7RUFDZCxTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLFVBQVU7QUEwR1o7QUF2R0E7RUFDRSxrQkFBa0I7RUFDbEIsMkNBQTJDO0VBQzNDLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLG1EQUE0RDtBQTBHOUQ7QUFyR0E7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGFBQWE7QUF3R2Y7QUEzR0E7RUFLSSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLHdCQUF3QjtFQUN4QixvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLDZCQUE2QjtBQTBHakM7QUFwSEE7RUFZTSxlQUFlO0VBQ2YsZ0JBQWdCO0FBNEd0QjtBQXpIQTtFQWdCTSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGlCQUFpQjtBQTZHdkI7QUEvSEE7RUFxQk0saUJBQWlCO0FBOEd2QjtBQXpHQTtFQUVJLGFBQWE7RUFDYixtQkFDRjtBQTBHRjtBQTlHQTtFQU1JLGlCQUFpQjtBQTRHckI7QUF6R0E7RUFDRSxnQkFBZ0I7QUE0R2xCO0FBMUdBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxzQkFBc0I7QUE2R3hCO0FBMUdBO0VBQ0UsaUJBQWlCO0FBNkduQjtBQTNHQTtFQUVJLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsV0FBVztFQUNYLGVBQWU7QUE2R25CO0FBckhBO0VBV0ksa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQixVQUFVO0VBQ1Ysc0JBQXNCO0FBOEcxQjtBQTVIQTtFQWdCTSxzQ0FBc0M7RUFDdEMsMkJBQTJCO0VBQzNCLDZCQUE2QjtFQUM3Qiw0QkFBNEI7QUFnSGxDO0FBbklBO0VBdUJJLDZCQUE2QjtFQUM3QixvQkFBb0I7RUFDcEIsa0JBQWtCO0FBZ0h0QjtBQXpJQTtFQTJCTSxvQkFBb0I7RUFDcEIsb0JBQW9CO0FBa0gxQjtBQTVHQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsV0FBVztBQStHYjtBQTVHQTtFQUVJLFdBQVc7QUE4R2Y7QUExR0EsbURBQUE7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUE0R2xCO0FBckdBO0VBR00sYUFBYTtFQUNiLGVBQWU7RUFDZixnQkFBZ0I7QUFzR3RCO0FBM0dBO0VBVU0sYUFBYTtFQUNiLGVBQWU7RUFDZixnQkFBZ0I7QUFxR3RCO0FBakhBO0VBZ0JJLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsOEJBQThCO0FBcUdsQztBQXZIQTtFQXFCSSw0QkFBNEI7RUFDNUIsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFzR25CO0FBaElBO0VBNEJNLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixpQkFBaUI7QUF3R3ZCO0FBbkdBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQXNHbEI7QUEvRkEsd0ZBQUE7QUFFQSx1RUFBQTtBQUVBO0VBRUksa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQStGcEI7QUFsR0E7RUFNSSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQWdHcEI7QUF4R0E7O0VBYU0saUJBQWlCO0FBZ0d2QjtBQTdHQTs7RUFlUSx1QkFBdUI7QUFtRy9CO0FBbEhBO0VBbUJNLFVBQVU7QUFtR2hCO0FBOUZBLHVGQUFBO0FBRUEsZUFBQTtBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0VBQ1osU0FBUztFQUNULFFBQVE7RUFDUixRQUFRO0VBQ1IsU0FBUztFQUNULG9DQUFvQztFQUNwQyxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFVBQVU7RUFLViw0QkFBNEI7QUErRjlCO0FBL0dBO0VBa0JJLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsWUFBWTtFQUNaLE9BQU87RUFDUCxRQUFRO0VBQ1IsT0FBTztFQUNQLFNBQVM7RUFDVCxZQUFZO0FBaUdoQjtBQTdGQTtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsb0NBQW9DO0VBQ3BDLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFnR2xCO0FBckdBO0VBT0ksbUJBQW1CO0VBQ25CLGVBQWU7QUFrR25CO0FBMUdBO0VBV0ksbUJBQW1CO0VBQ25CLGdCQUFnQjtBQW1HcEI7QUEvRkE7RUFDRSxXQUFXO0VBQ1gsU0FBUztFQUNULGVBQWU7RUFDZixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsYUFBYTtBQWtHZjtBQTdHQTtFQWFJLFdBQVc7RUFDWCxTQUFTO0VBQ1QsVUFBVTtFQUNWLFFBQVE7QUFvR1o7QUFwSEE7RUFtQkksT0FBTztFQUNQLFdBQVc7RUFDWCxRQUFRO0VBQ1IsWUFBWTtBQXFHaEI7QUEzSEE7RUF5QkksT0FBTztFQUNQLFdBQVc7RUFDWCxXQUFXO0VBQ1gsU0FBUztBQXNHYjtBQWxJQTtFQStCSSxXQUFXO0FBdUdmO0FBdElBO0VBaUNNLGVBQWU7RUFDZixpQkFBaUI7QUF5R3ZCO0FBM0lBO0VBdUNNLGVDclRlO0FENlpyQjtBQW5HQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBc0dyQjtBQXpHQTtFQUtJLGFBQWE7QUF3R2pCO0FBN0dBO0VBUUksYUFBYTtBQXlHakI7QUFyR0E7RUFDRSxVQUFVO0VBQ1YsbUJBQW1CO0FBd0dyQjtBQXRHQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLFNBQVM7RUFDVCxNQUFNO0VBQ04sUUFBUTtFQUNSLE9BQU87RUFDUCxZQUFZO0VBQ1osOEJBQThCO0VBQzlCLGtCQUFrQjtFQUtsQiw0QkFBNEI7QUF5RzlCO0FBeEhBO0VBaUJJLFlBQVk7RUFDWixVQUFVO0VBQ1YsY0FBYztBQTJHbEI7QUF2R0E7RUFDRSxPQUFPO0VBQ1AsV0FBVztFQUNYLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osY0FBYztFQUNkLFVBQVU7RUFDVixZQUFZO0VBS1osNEJBQTRCO0FBMEc5QjtBQXZHQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsVUFBVTtBQTBHWjtBQXZHQTtFQUNFLFNBQVM7QUEwR1g7QUF2R0EseUZBQUE7QUFFQSxnRkFBQTtBQUVBO0VBQ0UsZ0JBQWdCO0FBd0dsQjtBQXpHQTtFQUdJLGVBQWU7RUFDZixZQUFZO0VBQ1osV0FBVztBQTBHZjtBQS9HQTtFQU9NLFdDMVlTO0FEc2ZmO0FBdEdBO0VBQ0Usc0JBQXNCO0FBeUd4QjtBQTFHQTtFQUtRLGlCQUFpQjtFQUNqQixvQkFBb0I7QUF5RzVCO0FBL0dBO0VBYVEsYUFBYTtBQXNHckI7QUFuSEE7RUFrQlEsYUFBYTtBQXFHckI7QUF2SEE7RUE0QlUscUJBQXFCO0FBK0YvQjtBQTNIQTtFQStCVSx1QkFBdUI7QUFnR2pDO0FBL0hBO0VBaUNZLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsd0JBQXdCO0VBQ3hCLGFBQWE7RUFDYixTQUFTO0VBQ1QsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLDZCQUE2QjtBQWtHekM7QUEvSUE7RUF3RFksYUFBYTtBQTJGekI7QUFuSkE7RUE2RFksYUFBYTtBQTBGekI7QUF2SkE7RUFvRVEsYUFBYTtBQXVGckI7QUEzSkE7RUF5RVEsYUFBYTtBQXNGckI7QUE5RUE7RUFHTSxxQkFBcUI7RUFDckIsZUFBZTtBQStFckI7QUF4RUE7RUFDRSx5QkFBeUI7QUEyRTNCO0FBeEVBO0VBQ0UsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixXQUFXO0FBMkViO0FBeEVBOztFQUVFLHdCQUF3QjtFQUN4QixTQUFTO0FBMkVYO0FBeEVBLHdGQUFBO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtBQTBFakI7QUE1RUE7O0VBS0ksVUFBVTtFQUNWLG1CQUFtQjtBQTRFdkI7QUFsRkE7RUFTSSxXQUFXO0FBNkVmO0FBdEZBO0VBWUksZUFBZTtFQUNmLHFCQUFxQjtBQThFekI7QUEzRkE7RUFtQlUsZUMvZ0JXO0VEZ2hCWCxxQkFBcUI7QUE0RS9CO0FBckVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osZ0NBQWdDO0VBQ2hDLDJCQUEyQjtFQUMzQixTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixvQkFBb0I7QUF3RXRCO0FBckVBO0VBRUksYUFBYTtBQXVFakI7QUF6RUE7RUFLUSxXQUFXO0VBQ1gseUNBQW1FO0VBQ25FLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsU0FBUztFQUNULFdBQVc7RUFDWCxZQUFZO0VBQ1osVUFBVTtBQXdFbEI7QUFsRUE7RUFDRSxtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLFdBQVc7QUFxRWI7QUFsRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0FBcUVwQjtBQWxFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLE9BQU87RUFDUCxhQUFhO0VBQ2IsWUFBWTtFQUNaLDBCQUEwQjtFQUMxQixvQ0FBb0M7RUFDcEMsbUNBQW1DO0VBQ25DLGtDQUFrQztFQUNsQyxRQUFRO0VBQ1IsU0FBUztBQXFFWDtBQWxFQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixVQUFVO0FBcUVaO0FBN0VBO0VBVUksVUFBVTtBQXVFZDtBQWpGQTtFQVlNLFdBQVc7QUF5RWpCO0FBckZBO0VBaUJNLFVBQVU7RUFDVixlQUFlO0FBd0VyQjtBQTFGQTtFQXFCTSxZQUFZO0VBQ1oscUJBQUE7QUF5RU47QUEvRkE7RUErQkksY0NqbkJpQjtBRHFyQnJCO0FBbkdBOztFQTRCTSxVQUFVO0VBQ1YsZUMvbUJlO0FEMnJCckI7QUF0RUE7RUFDRSxjQUFjO0VBQ2QsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixpQkFBaUI7QUF5RW5CO0FBdEVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixRQUFRO0FBeUVWO0FBdEVBO0VBQ0UsY0FBYztFQUNkLFlBQVk7QUF5RWQ7QUF0RUE7RUFDRSxXQUFXO0FBeUViO0FBdEVBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7QUF5RVo7QUEzRUE7RUFJSSxZQUFZO0FBMkVoQjtBQS9FQTtFQU9JLGdCQUFnQjtBQTRFcEI7QUF4RUE7RUFDRSxzQkMzcEJxQjtBRHN1QnZCO0FBeEVBO0VBQ0Usa0JBQWtCO0FBMkVwQjtBQXhFQTtFQUVJLGlCQUFpQjtFQUNqQixrQkFBa0I7QUEwRXRCO0FBckVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixpQkFBaUI7QUF3RW5CO0FBckVBO0VBQ0UsVUFBVTtBQXdFWjtBQXRFQTtFQUNFLHlCQUF5QjtFQUN6QixTQUFTO0VBQ1QsYUFBYTtFQUNiLFdBQVc7QUF5RWI7QUF0RUM7RUFDRyxXQUFXO0VBQ1gsZ0JBQWdCO0FBeUVwQjtBQXBFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixnQkFBZ0I7QUF1RWxCO0FBNUVBO0VBT0ksa0JBQWtCO0VBQ2xCLFVBQVU7QUF5RWQ7QUFqRkE7RUFXSSxjQUFjO0VBRWQsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gscUNBQXFDO0VBRXJDLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsV0FBVztBQTBFZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW52ZW50b3J5L2ludmVudG9yeS1ob21lL2ludmVudG9yeS1ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4vc3JjL2Fzc2V0cy9jc3MvY29tbW9uL3ZhcmlhYmxlcy5zY3NzXCI7XG4uaW52ZW50b3J5LXRhYmxlIHtcbiAgbWF4LWhlaWdodDogNDAwcHg7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICAjaXRlbS1UYWJsZSB7XG4gICAgbWF4LWhlaWdodDogNDAwcHg7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gIH1cbn1cblxuLmRyb3Bkb3duLXRyaWdnZXIge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgcGFkZGluZzogOHB4IDhweCAwcHggOHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICNkYWRhZGE7XG4gIH1cbn1cblxuLnN2Zy1pY29uLXdyYXAge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi52aXN1YWxseS1oaWRkZW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyOiAwO1xuICBjbGlwOiByZWN0KDAgMCAwIDApO1xuICBoZWlnaHQ6IDFweDtcbiAgbWFyZ2luOiAtMXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHdpZHRoOiAxcHg7XG59XG5cbi5kZC1saXN0LWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTsgLy90b3A6IDQwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTE5LCAxMTksIDExOSwgMC4yOSk7XG4gIHJpZ2h0OiAxMDAlO1xuICB6LWluZGV4OiAxMDA7XG4gIGJvdHRvbTogLTEwMCU7XG4gIHdpZHRoOiAyMDBweDsgLy9tYXgtd2lkdGg6IDI1MHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjYxMTc2NDcwNTg4MjM1Myk7XG4gIC5kcm9wZG93bi1saXN0IHtcbiAgfVxufVxuXG4uYWN0aW9ucy1tZW51IHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIG1hcmdpbi10b3A6IDA7XG4gIC5hY3Rpb24taXRlbSB7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gICAgc3BhbiB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cbiAgICBpbWcge1xuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgfVxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgfVxuICB9XG59XG5cbiN0YWJsZS1oZWFkZXJ7XG4gIHRoe1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogI2VmZjFmNVxuICB9XG4gIHRke1xuICAgIHBhZGRpbmc6IDBweCAxMHB4O1xuICB9XG59XG4udGV4dC1hbGlnbi1sZWZ0e1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLm1pZGRsZS1zZWN0aW9uIHtcbiAgcGFkZGluZzogNXB4IDE1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG50YWJsZSB0ciB0ZHtcbiAgcGFkZGluZzogMHB4IDEwcHg7XG59XG4uc2VhcmNoLWZpbHRlci13cmFwcGVyIHtcbiAgLm5vcm1hbC1maWVsZCB7XG4gICAgcGFkZGluZzogN3B4IDEwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICB3aWR0aDogNTAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxuICAuZmllbGQtd3JhcHBlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogMzAlO1xuICAgIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XG4gICAgLmZvcm0tY3RybCB7XG4gICAgICBmb250OiA0MDAgMTJweCBcIk9wZW4gc2Fuc1wiLCBzYW5zLXNlcmlmO1xuICAgICAgYm9yZGVyLXRvcDogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgYm9yZGVyLXJpZ2h0OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICBib3JkZXItbGVmdDogbm9uZSAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuICAuZmllbGQtd3JhcHBlciBsYWJlbCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gICAgbGVmdDogMTAlICFpbXBvcnRhbnQ7XG4gICAgdG9wOiAxJSAhaW1wb3J0YW50O1xuICAgICY6YWZ0ZXIge1xuICAgICAgbGVmdDogODUlICFpbXBvcnRhbnQ7XG4gICAgICB0b3A6IDEwcHggIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbn1cblxuXG4ubWlkZGxlLXRvcCBoMSB7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZmxvYXQ6IG5vbmU7XG59XG5cbi5taWRkbGUtdG9wIHtcbiAgYXNpZGUge1xuICAgIGZsb2F0OiBsZWZ0O1xuICB9XG59XG5cbi8qPT09PT09PT09PT09PT09PT09PT09PT1maWx0ZXIgdHlwZT09PT09PT09PT09PT09Ki9cblxuLmZpbHRlci1yZXMgbGFiZWwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5maWx0ZXItcmVzLnBhZ2luYXRpb24ge1xuICAvLyBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4ucGFnaW5hdGlvbiB7XG4gIC5maXJzdCB7XG4gICAgJjpiZWZvcmUge1xuICAgICAgY29udGVudDogXCLCqyBcIjtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgfVxuICB9XG4gIC5sYXN0IHtcbiAgICAmOmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6IFwiIMK7XCI7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBmb250LXdlaWdodDogODAwO1xuICAgIH1cbiAgfVxuICAuYmF0Y2gtc2l6ZSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xuICB9XG4gIGxpIHtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjY2NjO1xuICAgIHBhZGRpbmc6IDBweCA3cHg7XG4gICAgbWFyZ2luOiAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGEge1xuICAgICAgbGluZS1oZWlnaHQ6IDEwcHg7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgcGFkZGluZzogMHB4IDE0cHg7XG4gICAgfVxuICB9XG59XG5cbi5wYWdpbmF0aW9uIGxpOmxhc3QtY2hpbGQge1xuICBib3JkZXItcmlnaHQ6IDA7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG59XG5cbi5maWx0ZXItcmVzIHtcbiAgLy8gbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09YWN0aW9uIHRvb2x0aXAgb2YgdGFibGU9PT09PT09PT09PT09PT09PT09Ki9cblxuLyoqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PXNlYXJjaCBkYXRhPT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cbi5zZWFyY2gtZGF0YSB7XG4gIHRoIHtcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxuICB0ZCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgcGFkZGluZzogNnB4IDVweDtcbiAgfVxuICB0ciB7XG4gICAgdGg6Zmlyc3QtY2hpbGQsXG4gICAgdGQ6Zmlyc3QtY2hpbGQge1xuICAgICAgcGFkZGluZzogMTVweCAycHg7XG4gICAgICAuZmllbGQtY2hlY2tib3gtd3JhcHBlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgfVxuICAgIH1cbiAgICB0aDpsYXN0LWNoaWxkIHtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxuICB9XG59XG5cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PW1vYmlsZSBoZWFkIG1lbnUgY3NzPT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuLyogcG9wVXAgU2NzcyAqL1xuXG4ucG9wdXBXcmFwcGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3R0b206IDA7XG4gIHRvcDogMHB4O1xuICByaWdodDogMDtcbiAgbGVmdDogMHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIzMCwgMjMwLCAyMzAsIDAuNSk7XG4gIHotaW5kZXg6IDEwMDsgLy8gZGlzcGxheTogbm9uZTtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBvcGFjaXR5OiAwO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbjtcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XG4gIC5wb3B1cCB7XG4gICAgbWF4LXdpZHRoOiA4NTBweDsgLy8gbWF4LWhlaWdodDogMzUwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiA1JTtcbiAgICBib3R0b206IDA7XG4gICAgbWFyZ2luOiBhdXRvOyAvLyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIH1cbn1cblxuLnBvcHVwLXdyYXBwZXIge1xuICBwYWRkaW5nOiAyMHB4IDIwcHg7IC8vIGhlaWdodDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNoYWRvdzogMXB4IDhweCAyMHB4IDVweCAjOWM5YzljO1xuICB0cmFuc2l0aW9uOiB1bnNldDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgaDIge1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG4gIGg0IHtcbiAgICBtYXJnaW46IDI1cHggMCAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIH1cbn1cblxuLmNsb3NlUG9wdXAge1xuICByaWdodDogMTBweDtcbiAgdG9wOiAxMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyNnB4O1xuICBoZWlnaHQ6IDI2cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDNweDtcbiAgZGlzcGxheTogbm9uZTtcbiAgJi5ib3R0b21SaWdodCB7XG4gICAgYm90dG9tOiAycHg7XG4gICAgdG9wOiBhdXRvO1xuICAgIGxlZnQ6IGF1dG87XG4gICAgcmlnaHQ6IDA7XG4gIH1cbiAgJi50b3BMZWZ0IHtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiBhdXRvO1xuICAgIHRvcDogMXB4O1xuICAgIGJvdHRvbTogYXV0bztcbiAgfVxuICAmLmJvdHRvbUxlZnQge1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IGF1dG87XG4gICAgYm90dG9tOiAycHg7XG4gICAgdG9wOiBhdXRvO1xuICB9XG4gIHN2ZyB7XG4gICAgd2lkdGg6IDE2cHg7XG4gICAgLmNscy0xIHtcbiAgICAgIHN0cm9rZTogI2MxYzFjMTtcbiAgICAgIHN0cm9rZS13aWR0aDogMnB4O1xuICAgIH1cbiAgfVxuICAmOmhvdmVyIHtcbiAgICAuY2xzLTEge1xuICAgICAgc3Ryb2tlOiAkY29tbW9uLWJsdWU7XG4gICAgfVxuICB9XG59XG5cbi5wb3B1cC1jb250ZW50IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB0aHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG4gIHRke1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cbn1cblxuLmZhZGVJbiB7XG4gIG9wYWNpdHk6IDE7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59IC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PWNzcyBmb3IgbW9iIHBvcHVwXG4ucG9wdXBXcmFwcGVyTW9iIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3R0b206IDA7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDEwMDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47IC8vIG9wYWNpdHk6IDA7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbjtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xuICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbjtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbjtcbiAgLmNsb3NlUG9wdXAge1xuICAgIHJpZ2h0OiAtMjVweDtcbiAgICB0b3A6IC0yN3B4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5cbi5wb3B1cC1tb2Ige1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogNzAlO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiAzMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBhdXRvO1xuICB6LWluZGV4OiAxO1xuICBib3R0b206IC03MCU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbjtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xuICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbjtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbjtcbn1cblxuLnBvcHVwV3JhcHBlck1vYi5zaG93UG9wdXBNb2Ige1xuICB6LWluZGV4OiAxMDA7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5wb3B1cFdyYXBwZXJNb2Iuc2hvd1BvcHVwTW9iIC5wb3B1cC1tb2Ige1xuICBib3R0b206IDA7XG59XG5cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1yZWdpc3RyYXRpb24gcG9wdXAgZm9ybSBjc3M9PT09PT09PT09PT09PT09PT0qL1xuXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PWNvbmZpcm1hdGlvbiA9PT09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuLnBvcHVwLWJ0biB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIC5idG4ge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgY29sb3I6ICMzMzM7XG4gICAgJi5yZWRCdG4ge1xuICAgICAgY29sb3I6ICRiZy13aGl0ZTtcbiAgICAgIC8vIG1pbi13aWR0aDogMTYwcHg7XG4gICAgfVxuICB9XG59XG5cbnRhYmxlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgdGhlYWQge1xuICAgIHRyIHtcbiAgICAgIHRoIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgfVxuICAgIH1cbiAgICAuZGlzcGxheUNvbXAge1xuICAgICAgLnZpZXctY29tcCB7XG4gICAgICB9XG4gICAgICAuZWRpdC1jb21wIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gICAgLmVkaXRDb21wIHtcbiAgICAgIC52aWV3LWNvbXAge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgICAgLmVkaXQtY29tcCB7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHRib2R5IHtcbiAgICB0ciB7XG4gICAgICB0ZCB7XG4gICAgICAgIC5lZGl0T3B0aW9ucyBsaSB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB9XG4gICAgICAgIC5maWVsZC13cmFwcGVyIHtcbiAgICAgICAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAuZm9ybS1jdHJsIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDVweDtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICBoZWlnaHQ6IDI2cHg7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICB3aWR0aDogODBweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAuZGlzcGxheUNvbXAge1xuICAgICAgLnZpZXctY29tcCB7XG4gICAgICAgIC5kaXNwbGF5QWRkSXRlbSB7XG4gICAgICAgICAgLnZpZXctYWRkSXRlbSB7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5lZGl0LWFkZEl0ZW0ge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmVkaXRBZGRJdGVtIHtcbiAgICAgICAgICAudmlldy1hZGRJdGVtIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5lZGl0LWFkZEl0ZW0ge1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLmVkaXQtY29tcCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuICAgIC5lZGl0Q29tcCB7XG4gICAgICAudmlldy1jb21wIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICAgIC5lZGl0LWNvbXAge1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4udGFibGUtYWN0aW9uIHtcbiAgdWwge1xuICAgIGxpIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIG1hcmdpbjogMHB4IDVweDtcbiAgICAgIGEge1xuICAgICAgICAvLyBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG4gICAgfVxuICB9XG59IC8vLy8vLy8vLy8vIEFkZCBpdGVtXG4ucm93LmV4dHJhTWFyZ2luIHtcbiAgbWFyZ2luOiAxMHB4IDBweCAyNXB4IDBweDtcbn1cblxuLmJ0bi5mdWxsQmx1ZSB7XG4gIGJhY2tncm91bmQ6ICMwMDg0ZjY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDg0ZjY7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG5pbnB1dFt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxuaW5wdXRbdHlwZT1cIm51bWJlclwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xufVxuXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1hY3Rpb24gdG9vbHRpcCBvZiB0YWJsZT09PT09PT09PT09PT09PT09PT0qL1xuXG4uZW5xdWlyeS1hY3Rpb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLmNscy0xLFxuICAuY2xzLTIge1xuICAgIGZpbGw6IG5vbmU7XG4gICAgc3Ryb2tlOiB0cmFuc3BhcmVudDtcbiAgfVxuICBzdmcge1xuICAgIHdpZHRoOiAxOHB4O1xuICB9XG4gIC5jbHMtMiB7XG4gICAgc3Ryb2tlOiAjN2Q3ZjgwO1xuICAgIHN0cm9rZS1taXRlcmxpbWl0OiAxMDtcbiAgfVxuICAmOmhvdmVyIHtcbiAgICAuYWN0aW9uLWljb24ge1xuICAgICAgc3ZnIHtcbiAgICAgICAgLmNscy0yIHtcbiAgICAgICAgICBzdHJva2U6ICRjb21tb24tYmx1ZTtcbiAgICAgICAgICBzdHJva2UtbWl0ZXJsaW1pdDogMTA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmFjdGlvbi1tZW51IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB3aWR0aDogMjAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvdHRvbTogMTVweDtcbiAgYm94LXNoYWRvdzogMHB4IDJweCA0cHggMXB4ICNjY2M7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgbGVmdDogNTAlO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjZzO1xufVxuXG4ubWFkZURhdGUge1xuICAuZmllbGQtd3JhcHBlciB7XG4gICAgbWFyZ2luOiAwcHggMDtcbiAgICAmLmRhdGVQaWNrZXJCb3gge1xuICAgICAgJjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvY2FsZW5kYXIuc3ZnXCIpIG5vLXJlcGVhdDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogNXB4O1xuICAgICAgICB0b3A6IDI5cHg7XG4gICAgICAgIHdpZHRoOiAyMXB4O1xuICAgICAgICBoZWlnaHQ6IDIxcHg7XG4gICAgICAgIHotaW5kZXg6IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5lbnF1aXJ5LWFjdGlvbjpob3ZlciAuYWN0aW9uLW1lbnUge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICBvcGFjaXR5OiAxO1xuICBib3R0b206IDhweDtcbn1cblxuLmFjdGlvbi1tZW51LWlubmVyIHVsIHtcbiAgZm9udC1zaXplOiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IC8vIHBhZGRpbmc6IDVweCA1cHg7XG59XG5cbi5hY3Rpb24tbWVudS1pbm5lciB1bDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogLTE1cHg7XG4gIG1hcmdpbjogYXV0bztcbiAgYm9yZGVyLXRvcDogOHB4IHNvbGlkICNmZmY7XG4gIGJvcmRlci1ib3R0b206IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0OiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1sZWZ0OiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG59XG5cbi5hY3Rpb24tbWVudS1pbm5lciB1bCBsaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBmb250LXNpemU6IDEycHg7XG4gIHBhZGRpbmc6IDAgOHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdpZHRoOiAxOCU7XG4gICY6bGFzdC1jaGlsZCB7XG4gICAgd2lkdGg6IDI4JTtcbiAgICBzdmcge1xuICAgICAgd2lkdGg6IDMzcHg7XG4gICAgfVxuICB9XG4gICYuZWRpdC1kZXRhaWwtaWNvbiB7XG4gICAgc3ZnICoge1xuICAgICAgZmlsbDogbm9uZTtcbiAgICAgIHN0cm9rZTogIzhiOGI4YjtcbiAgICB9XG4gICAgc3ZnIC5jbHMtMSB7XG4gICAgICBzdHJva2U6IG5vbmU7XG4gICAgICAvKiBzdHJva2U6ICM4YjhiOGI7ICovXG4gICAgfVxuICB9XG4gICY6aG92ZXIge1xuICAgIC5jbHMtMixcbiAgICAuY2xzLTMge1xuICAgICAgZmlsbDogbm9uZTtcbiAgICAgIHN0cm9rZTogJGNvbW1vbi1ibHVlO1xuICAgIH1cbiAgICBjb2xvcjogJGNvbW1vbi1ibHVlO1xuICB9XG59XG5cbi5hY3Rpb24tbWVudS1pbm5lciB1bCBsaSBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogOXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAxMHB4O1xufVxuXG4uYWN0aW9uLW1lbnUtaW5uZXIgLmNsb3NlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNHB4O1xuICB0b3A6IDJweDtcbn1cblxuLmFjdGlvbi1tZW51LWlubmVyIGkge1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAzMnB4O1xufVxuXG4uZW5xdWlyeS1hY3Rpb24gbGkgc3ZnIHtcbiAgd2lkdGg6IDI4cHg7XG59XG5cbi5saXN0Q2xhc3NlcyB7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDI1JTtcbiAgLmltYWdlQ29udGVudCB7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICB9XG4gIC50ZXh0Q29udGVudCB7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgfVxufVxuXG4uYm94UGFkZGluZzE1IHtcbiAgYm94LXNpemluZzogJGJvcmRlci1ib3g7XG59XG5cbi5lZGl0Q2VsbEFsbGlnbm1lbnQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5idG5XcmFwcGVyIHtcbiAgLmJ0biB7XG4gICAgcGFkZGluZzogNHB4IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICB9XG59XG5cblxuLmFkZFF1YW50aXR5SW5wdXQge1xuICBtYXgtd2lkdGg6IDM1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG59XG5cbi5sb3dxdWFudGl0eSB7XG4gIGNvbG9yOiByZWQ7XG59XG5pbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IHJhZGlvO1xuICB3aWR0aDogNSU7XG4gIG1hcmdpbi10b3A6IDA7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4gLm9ubGluZV9vZmZsaW5lX2xhYmVse1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbi1yaWdodDogNSU7XG4gfVxuXG5cbi8vIE1hbmFnZSBVbml0IHN0eWxlXG4uaXRlbS1jb250YWluZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgLml0ZW0tdGl0bGV7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIHdpZHRoOiA0MCU7XG4gIH1cbiAgLnNlbGVjdC1jb250YWluZXJ7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2UyZWJlZTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIHotaW5kZXg6IDEwO1xuICAgIGZvbnQ6IDQwMCAxMnB4ICdPcGVuIHNhbnMnLHNhbnMtc2VyaWY7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBjb2xvcjogIzAwMDtcbiAgfVxufVxuIiwiJHB1bGwtTDogbGVmdDtcbiRwdWxsLVI6IHJpZ2h0O1xuJHB1bGwtbm9uZTogbm9uZTtcbiRmdWxsLXdpZHRoOiAxMDAlO1xuJGJvcmRlci1ib3g6IGJvcmRlci1ib3g7XG4kYm9yZGVyLWNvbG9yOiAjZGVlYWVlO1xuJGJnLXdoaXRlOiAjZmZmO1xuJGVycm9yLWNvbG9yOiAjZmYwMDAwO1xuJGNvbW1vbi1ibHVlOiAjMDA4NGY2O1xuJHByaW1hcnktY29sb3I6ICMzMzM7XG4kYm9yZGVyLWNvbW1vbjojZWFlYWViO1xuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09aGVhZGVyIGNvbG9ycz09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuJGhlYWRlci1iZzojMDA2MEEzO1xuJGhlYWRlci1ib3JkZXI6I2VhZWFlYjtcbiRsZWZ0TWVudUJnOiNmYWZhZmE7XG4kbGVmdE1lbnVIb3ZlckJnOiMwMDg0ZjY7XG4kbGVmdE1lbnVUZXh0SG92ZXJDb2xvcjojZmZmO1xuJHJlZEJ0bjojZjQ0MzM2O1xuJGJvcmRlcmNjYzojY2NjO1xuJGxpZ2h0Qmx1ZTojZWZmN2ZmO1xuJHRhYmxlSGVhZGluZ0JnQ29sb3I6ICMwMDRhN2U7XG4udGFibGUtZm9ybWF0LWZpcnN0IHtcbiAgICAudGFibGUtcmVzcG9uc2l2ZSB7XG4gICAgICAgIHRhYmxlIHtcbiAgICAgICAgICAgIHRoLFxuICAgICAgICAgICAgdGQge1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoIHtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0Ym9keSB7XG4gICAgICAgICAgICAgICAgdHIge1xuICAgICAgICAgICAgICAgICAgICB0ZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuZmllbGQtY2hlY2tib3gtd3JhcHBlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBpbml0aWFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZm9ybS1jaGVja2JveCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mb3JtLWNoZWNrYm94K2xhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogN3B4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmFmdGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLmZhLXRyYXNoLW8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkcmVkQnRuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnRhYmxlLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgLmhlYWRpbmctY29udGFpbmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICNlMGVhZWM7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgICAuaGVhZGluZy1pdGVtIHtcbiAgICAgICAgd2lkdGg6IDEwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgIH1cbiAgICAudmFsdWUtb3V0ZXItY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgbWluLWhlaWdodDogNTN2aDtcbiAgICAgIG1heC1oZWlnaHQ6IDU0dmg7XG4gICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgIC52YWx1ZS1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgICAgICBib3JkZXItdG9wOiBub25lO1xuICAgICAgICAudmFsdWUtaXRlbSB7XG4gICAgICAgICAgd2lkdGg6IDEwJTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/components/inventory/inventory-home/inventory-home.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/inventory/inventory-home/inventory-home.component.ts ***!
  \*********************************************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs/Rx.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/authenticator.service */ "./src/app/services/authenticator.service.ts");
/* harmony import */ var _services_inventory_services_inventory_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/inventory-services/inventory.service */ "./src/app/services/inventory-services/inventory.service.ts");
/* harmony import */ var _services_message_show_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/message-show.service */ "./src/app/services/message-show.service.ts");
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
        constructor(inventoryApi, fb, msg, auth) {
            this.inventoryApi = inventoryApi;
            this.fb = fb;
            this.msg = msg;
            this.auth = auth;
            this.courseList = [];
            this.itemTableDatasource = [];
            this.itemList = [];
            this.categoryList = [];
            this.masterCategoryList = [];
            this.subBranchList = [];
            this.searchData = [];
            this.selectedRow = "";
            this.operationFlag = "";
            this.itemName = "";
            this.PageIndex = 1;
            this.studentdisplaysize = 10;
            this.totalRow = 0;
            this.isAddUnit = false;
            this.subtractFlag = false;
            this.deleteItemPopUp = false;
            this.createItemPopUp = false;
            this.showAllocateOption = false;
            this.showAllocationBranchPopUp = false;
            this.showAvailableUnits = false;
            this.isProfessional = false;
            this.showAllocationHistoryPopUp = false;
            this.searchDataFlag = false;
            this.showMenu = false;
            this.enable_eLearn_feature_flag = false;
            this.header = {
                inventory_item: { id: 'inventory_item', title: 'Inventory Item', filter: false, show: true },
                category: { id: 'category', title: 'Category', filter: false, show: true },
                description: { id: 'description', title: 'Description', filter: false, show: true },
                standard_name: { id: 'standard_name', title: 'Standard', filter: false, show: true },
                subject_name: { id: 'subject_name', title: 'Subject', filter: false, show: true },
                master_course: { id: 'master_course', title: 'Master Course', filter: false, show: true },
                course: { id: 'course', title: 'Course', filter: false, show: true },
                total_units: { id: 'total_units', title: 'Total Units', filter: false, show: true },
                available: { id: 'available', title: 'Available Units', filter: false, show: true },
                edit: { id: 'edit', title: 'Action', filter: false, show: true },
                add_units: { id: 'add_units', title: 'Add Units', filter: false, show: true },
                cost: { id: 'cost', title: 'Unit Cost', filter: false, show: true },
            };
            this.editManageUnit = {
                availableUnits: 0,
                totalUnits: 0,
                newUnit: 0,
                item_id: ""
            };
            this.editStandSubject = {
                standard_id: "",
                standard_name: "",
                subject_id: "-1",
                subject_name: ""
            };
            this.editCourseList = [];
            this.arr = Array(1000).fill(0).map((e, i) => i - 500);
        }
        ngOnInit() {
            this.auth.institute_type.subscribe(res => {
                if (res == 'LANG') { // batch
                    this.isProfessional = true;
                }
                else {
                    this.isProfessional = false;
                }
            });
            this.checkMainBranchOrSubBranch();
            this.loadTableDatatoSource();
            this.loadItemCategories();
            this.loadItemCategoryMaster();
            this.checkEnableElearnFeature();
        }
        checkEnableElearnFeature() {
            let enable_eLearn_feature;
            enable_eLearn_feature = sessionStorage.getItem('enable_eLearn_feature');
            if (enable_eLearn_feature == 1) {
                this.enable_eLearn_feature_flag = true;
            }
        }
        checkMainBranchOrSubBranch() {
            let sessionData = sessionStorage.getItem('is_main_branch');
            if (sessionData == "Y") {
                this.showAllocateOption = true;
            }
            else {
                this.showAllocateOption = false;
            }
        }
        loadTableDatatoSource() {
            this.itemList = [];
            this.auth.showLoader();
            this.itemTableDatasource = [];
            this.inventoryApi.fetchAllItems().subscribe((data) => {
                this.auth.hideLoader();
                this.totalRow = data.length;
                this.itemTableDatasource = data;
                this.fetchTableDataByPage(this.PageIndex);
                this.selectedRow = "";
            }, error => {
                this.auth.hideLoader();
                //console.log(error);
            });
        }
        loadItemCategories() {
            this.auth.showLoader();
            this.inventoryApi.fetchAllCategories().subscribe(data => {
                this.auth.hideLoader();
                this.categoryList = data;
            }, error => {
                this.auth.hideLoader();
                //console.log(error)
            });
        }
        loadItemCategoryMaster() {
            this.auth.showLoader();
            this.inventoryApi.fetchAllMasterCategoryItem().subscribe(data => {
                this.auth.hideLoader();
                this.masterCategoryList = data;
            }, error => {
                this.auth.hideLoader();
                //console.log(error);
            });
        }
        editRow(row_no, item_id, row) {
            this.isAddUnit = false;
            if (this.selectedRow !== "") {
                document.getElementById(("row" + this.selectedRow).toString()).classList.add('displayComp');
                document.getElementById(("row" + this.selectedRow).toString()).classList.remove('editComp');
            }
            this.selectedRow = row_no;
            document.getElementById(("table-header").toString()).classList.remove('displayComp');
            document.getElementById(("table-header").toString()).classList.add('editComp');
            document.getElementById(("row" + row_no).toString()).classList.remove('displayComp');
            document.getElementById(("row" + row_no).toString()).classList.add('editComp');
            this.editStandSubject.standard_id = row.standard_id;
            this.editStandSubject.standard_name = row.standard_name;
            this.getCourseList(row);
        }
        getCourseList(row) {
            let courseId = this.editStandSubject.standard_id;
            this.auth.showLoader();
            this.inventoryApi.getCourseOnBasisOfMasterCourse(courseId).subscribe(data => {
                this.auth.hideLoader();
                this.editCourseList = data;
                this.editStandSubject.subject_id = row.subject_id;
                this.editStandSubject.subject_name = row.subject_name;
            }, error => {
                this.auth.hideLoader();
                //console.log('', error);
            });
        }
        masterCourseChanged() {
            let courseId = this.editStandSubject.standard_id;
            this.auth.showLoader();
            this.editStandSubject.subject_id = "-1";
            this.editStandSubject.subject_name = "";
            this.inventoryApi.getCourseOnBasisOfMasterCourse(courseId).subscribe(data => {
                this.auth.hideLoader();
                this.editCourseList = data;
            }, error => {
                this.auth.hideLoader();
                //console.log('', error);
            });
        }
        cancelRow(row_no) {
            this.isAddUnit = false;
            this.loadTableDatatoSource();
            document.getElementById(("table-header").toString()).classList.add('displayComp');
            document.getElementById(("table-header").toString()).classList.remove('editComp');
            document.getElementById(("row" + row_no).toString()).classList.add('displayComp');
            document.getElementById(("row" + row_no).toString()).classList.remove('editComp');
        }
        addItemsEnable(i) {
            document.getElementById(("add-item" + i).toString()).classList.add('editAddItem');
            document.getElementById(("add-item" + i).toString()).classList.remove('displayAddItem');
        }
        subtractItemsEnable(i) {
            document.getElementById(("add-item" + i).toString()).classList.add('editAddItem');
            document.getElementById(("add-item" + i).toString()).classList.remove('displayAddItem');
            this.subtractFlag = true;
        }
        addItemsQuantity(row) {
            if (row.units_added > 0) {
                let data = {};
                data.item_id = row.item_id;
                if (this.subtractFlag) {
                    data.units_added = "-" + Math.floor(row.units_added);
                }
                else {
                    data.units_added = Math.floor(row.units_added);
                }
                this.auth.showLoader();
                this.inventoryApi.addQuantityInStock(data).subscribe(data => {
                    this.auth.hideLoader();
                    this.loadTableDatatoSource();
                    this.subtractFlag = false;
                }, error => {
                    this.auth.hideLoader();
                    this.subtractFlag = false;
                    this.msg.showErrorMessage("error", '', error.error.message);
                    this.loadTableDatatoSource();
                    //console.log('Add Stock Error', error);
                });
            }
        }
        cancelItem(i) {
            document.getElementById(("add-item" + i).toString()).classList.add('displayAddItem');
            document.getElementById(("add-item" + i).toString()).classList.remove('editAddItem');
            this.fetchTableDataByPage(this.PageIndex);
            this.totalRow = this.itemTableDatasource.length;
        }
        updateRow(row, i) {
            let postdata = {
                category_id: row.category_id,
                desc: row.desc,
                institution_id: "",
                item_id: row.item_id.toString(),
                item_name: row.item_name,
                standard_id: this.editStandSubject.standard_id.toString(),
                subject_id: this.editStandSubject.subject_id.toString(),
                standard_name: this.editStandSubject.standard_name.toString(),
                subject_name: this.editStandSubject.subject_name.toString(),
                unit_cost: row.unit_cost.toString(),
                out_of_stock_indicator_units: row.out_of_stock_indicator_units.toString(),
                is_offline_or_online: row.is_offline_or_online
            };
            this.auth.showLoader();
            this.inventoryApi.updateInventoryItem(postdata).subscribe(data => {
                this.auth.hideLoader();
                this.loadTableDatatoSource();
                document.getElementById(("row" + i).toString()).classList.add('displayComp');
                document.getElementById(("row" + i).toString()).classList.remove('editComp');
            }, error => {
                this.auth.hideLoader();
                this.msg.showErrorMessage("error", '', error.error.message);
            });
        }
        deleteRow(row, index) {
            this.deleteItemPopUp = true;
            this.deleteRowDetails = row;
        }
        closeDeletePopup() {
            this.deleteItemPopUp = false;
        }
        showManageUnit(row) {
            $('#manageUnit').modal('show');
            this.editManageUnit.availableUnits = row.available_units;
            this.editManageUnit.totalUnits = row.alloted_units;
            this.editManageUnit.item_id = row.item_id;
        }
        allocateUnit() {
            // if (this.editManageUnit.newUnit > 0) {
            let data = {};
            data.item_id = this.editManageUnit.item_id;
            data.units_added = this.editManageUnit.newUnit;
            this.auth.showLoader();
            this.inventoryApi.addQuantityInStock(data).subscribe(data => {
                this.auth.hideLoader();
                this.editManageUnit.item_id = "";
                this.editManageUnit.newUnit = 0;
                this.editManageUnit.availableUnits = 0;
                this.editManageUnit.totalUnits = 0;
                $('#manageUnit').modal('hide');
                this.loadTableDatatoSource();
            }, error => {
                this.auth.hideLoader();
                this.msg.showErrorMessage("error", '', error.error.message);
                this.loadTableDatatoSource();
            });
            // }
        }
        deleteStudent() {
            this.auth.showLoader();
            this.inventoryApi.deleteRowFromItem(this.deleteRowDetails.item_id).subscribe(data => {
                this.auth.hideLoader();
                this.loadTableDatatoSource();
                this.deleteItemPopUp = false;
                this.msg.showErrorMessage("success", "", "Inventory Deleted Successfully");
            }, error => {
                this.auth.hideLoader();
                this.msg.showErrorMessage("error", '', error.error.message);
            });
        }
        allocationDetails(row, i) {
            //console.log(i);
            this.itemName = row.item_name;
            this.auth.showLoader();
            this.inventoryApi.getInventoryItemHistory(row.item_id).subscribe(data => {
                this.auth.hideLoader();
                this.showAllocationHistoryPopUp = true;
                this.allocationHistoryList = data;
            }, error => {
                this.auth.hideLoader();
                this.msg.showErrorMessage("error", '', error.error.message);
            });
        }
        closeAllocationItemHistoryPopup() {
            this.showAllocationHistoryPopUp = false;
        }
        searchDatabase(element) {
            if (element.value != "" && element.value != undefined && element.value != null) {
                let searchData = this.itemTableDatasource.filter(item => Object.keys(item).some(k => item[k] != null && item[k].toString().toLowerCase().includes(element.value.toLowerCase())));
                this.searchData = searchData;
                this.totalRow = searchData.length;
                this.searchDataFlag = true;
                this.fetchTableDataByPage(this.PageIndex);
            }
            else {
                this.searchDataFlag = false;
                this.fetchTableDataByPage(this.PageIndex);
                this.totalRow = this.itemTableDatasource.length;
            }
        }
        // pagination functions
        fetchTableDataByPage(index) {
            this.PageIndex = index;
            let startindex = this.studentdisplaysize * (index - 1);
            this.itemList = Array.from(this.getDataFromDataSource(startindex));
            //console.log(this.itemList);
        }
        fetchNext() {
            this.PageIndex++;
            this.fetchTableDataByPage(this.PageIndex);
        }
        fetchPrevious() {
            if (this.PageIndex != 1) {
                this.PageIndex--;
                this.fetchTableDataByPage(this.PageIndex);
            }
        }
        getDataFromDataSource(startindex) {
            let data = [];
            if (this.searchDataFlag) {
                data = this.searchData.slice(startindex, startindex + this.studentdisplaysize);
            }
            else {
                data = this.itemTableDatasource.slice(startindex, startindex + this.studentdisplaysize);
            }
            return data;
        }
        //// Add Item Form
        createAddItemForm() {
            this.addItemForm = this.fb.group({
                item_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                desc: [''],
                categoryDet: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                alloted_units: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                standardDet: [''],
                subjectDet: [''],
                unit_cost: [''],
                created_date: [moment__WEBPACK_IMPORTED_MODULE_2__().format("YYYY-MM-DD")],
                out_of_stock_indicator_units: [''],
                is_offline_or_online: ['']
            });
        }
        ///// To add a Item
        addItemDetails() {
            this.createAddItemForm();
            this.createItemPopUp = true;
        }
        //// Add Item Pop Up Function
        closeCreatePopup() {
            this.createItemPopUp = false;
        }
        masterCourseSelected() {
            let courseId = this.addItemForm.value.standardDet;
            this.auth.showLoader();
            this.inventoryApi.getCourseOnBasisOfMasterCourse(courseId).subscribe(data => {
                this.auth.hideLoader();
                this.courseList = data;
            }, error => {
                this.auth.hideLoader();
                //console.log('', error);
            });
        }
        saveItemDetails() {
            let data = {};
            data.alloted_units = this.addItemForm.value.alloted_units.toString();
            data.category_id = this.addItemForm.value.categoryDet;
            if (data.category_id == -1) {
                this.msg.showErrorMessage("error", '', "Please enter category");
                return;
            }
            data.created_date = this.addItemForm.value.created_date;
            data.desc = this.addItemForm.value.desc;
            data.item_name = this.addItemForm.value.item_name;
            data.standard_id = this.addItemForm.value.standardDet;
            if (data.standard_id == null || data.standard_id == "") {
                data.standard_id = -1;
            }
            data.subject_id = this.addItemForm.value.subjectDet;
            if (data.subject_id == null || data.subject_id == "") {
                data.subject_id = -1;
            }
            data.unit_cost = this.addItemForm.value.unit_cost.toString();
            data.out_of_stock_indicator_units = this.addItemForm.value.out_of_stock_indicator_units;
            data.is_offline_or_online = this.addItemForm.value.is_offline_or_online;
            this.auth.showLoader();
            this.inventoryApi.addItemDetailsInCategory(data).subscribe(data => {
                this.auth.hideLoader();
                this.loadTableDatatoSource();
                this.createItemPopUp = false;
            }, error => {
                this.auth.hideLoader();
                this.msg.showErrorMessage("error", '', error.error.message);
            });
        }
        /////// Multi Branch Data And Function Check Point
        allocateQuantityToSubBranches(row) {
            //console.log(row);
            this.allocateItemRowClicked = row;
            this.showAllocationBranchPopUp = true;
            this.createAllocationForm();
            this.getItemInformation(row.item_id);
            this.getAllSubBranchesInformation();
        }
        createAllocationForm() {
            this.allocateItemForm = this.fb.group({
                transport: [''],
                challan_no: [''],
                challan_amount: [''],
                alloted_units: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                challan_date: [''],
                sub_branch_id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                sub_branch_item_id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                item_id: ['']
            });
        }
        getItemInformation(rowId) {
            this.auth.showLoader();
            this.inventoryApi.getItemDetailsForSubBranches(rowId).subscribe(data => {
                this.auth.hideLoader();
                //console.log("getItemInfo", data);
                this.allocateItemDetails = data;
            }, error => {
                this.auth.hideLoader();
                this.msg.showErrorMessage("error", '', error.error.message);
            });
        }
        getAllSubBranchesInformation() {
            this.auth.showLoader();
            this.inventoryApi.getAllSubBranchesInfo().subscribe(data => {
                this.auth.hideLoader();
                this.subBranchList = data;
                //console.log('All Branches', data);
            }, error => {
                this.auth.hideLoader();
                //console.log(error);
            });
        }
        onSubBranchSelection() {
            let data_id = this.allocateItemForm.value.sub_branch_id;
            if (data_id != "-1") {
                this.auth.showLoader();
                this.inventoryApi.getSubBranchItemInfo(data_id).subscribe(data => {
                    this.auth.hideLoader();
                    this.subBranchItemList = data;
                }, error => {
                    this.auth.hideLoader();
                    console.log('', error);
                });
            }
            else {
                this.subBranchItemList = [];
            }
        }
        onSelectSubBranchItem() {
            let subBranchItemId = this.allocateItemForm.value.sub_branch_item_id;
            this.subBranchItemList.forEach(element => {
                if (element.item_id == subBranchItemId) {
                    this.showAvailableUnits = true;
                    this.availabelItemCount = element.available_units;
                }
            });
        }
        /* open action menu on click */
        openMenu(index) {
            this.selectedRow = index;
            let len = this.itemList.length;
            for (var i = 0; i < len; i++) {
                if (i == index) {
                    document.getElementById('menuList' + i).classList.toggle('hide');
                }
                else if (i != index) {
                    document.getElementById('menuList' + i).classList.add('hide');
                }
            }
        }
        /* close action menu on events  */
        closeMenu() {
            document.getElementById('menuList' + this.selectedRow).classList.add('hide');
        }
        onWindowClick(event) {
            if (this.ActionInv.nativeElement.contains(event.target)) {
                //console.log("clicked inside table");
            }
            else {
                if (document.getElementById('menuList' + this.selectedRow) != null) {
                    document.getElementById('menuList' + this.selectedRow).classList.add('hide');
                }
            }
        }
        validateMandatoryFields() {
            if (this.allocateItemForm.value.sub_branch_id == "" || this.allocateItemForm.value.sub_branch_id == null || this.allocateItemForm.value.sub_branch_id == '-1') {
                this.msg.showErrorMessage("error", '', "Please enter sub branch");
                return false;
            }
            if (this.allocateItemForm.value.sub_branch_item_id == "" || this.allocateItemForm.value.sub_branch_item_id == null) {
                this.msg.showErrorMessage("error", '', "Please enter sub branch item");
                return false;
            }
            if (this.allocateItemForm.value.alloted_units == "" || this.allocateItemForm.value.alloted_units == null) {
                this.msg.showErrorMessage("error", '', "Please enter no of allocation units");
                return false;
            }
            return true;
        }
        allocateItemToBranches() {
            let check = this.validateMandatoryFields();
            if (check == false) {
                return;
            }
            let data = {};
            data.alloted_units = this.allocateItemForm.value.alloted_units;
            data.challan_amount = this.allocateItemForm.value.challan_amount;
            data.challan_date = this.allocateItemForm.value.challan_date;
            data.challan_no = this.allocateItemForm.value.challan_no;
            data.transport = this.allocateItemForm.value.transport;
            data.sub_branch_item_id = this.allocateItemForm.value.sub_branch_item_id;
            data.sub_branch_id = this.allocateItemForm.value.sub_branch_id;
            data.item_id = this.allocateItemRowClicked.item_id.toString();
            this.inventoryApi.allocateItemToSubBranch(data).subscribe(data => {
                this.msg.showErrorMessage("success", '', "Successfully allocated to sub branch");
                this.showAllocationBranchPopUp = false;
                this.loadTableDatatoSource();
            }, error => {
                //console.log("Allocate Item", error);
                this.msg.showErrorMessage("error", '', error.error.message);
            });
        }
        closeAllocateSubBranchPopup() {
            this.showAllocationBranchPopUp = false;
            this.showAvailableUnits = false;
        }
    };
    HomeComponent.ctorParameters = () => [
        { type: _services_inventory_services_inventory_service__WEBPACK_IMPORTED_MODULE_5__["InventoryService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
        { type: _services_message_show_service__WEBPACK_IMPORTED_MODULE_6__["MessageShowService"] },
        { type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticatorService"] }
    ];
    HomeComponent.propDecorators = {
        ActionInv: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['ActionInv', { static: false },] }],
        onWindowClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ["document:click", ['$event'],] }]
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __importDefault(__webpack_require__(/*! raw-loader!./inventory-home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/inventory/inventory-home/inventory-home.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./inventory-home.component.scss */ "./src/app/components/inventory/inventory-home/inventory-home.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_services_inventory_services_inventory_service__WEBPACK_IMPORTED_MODULE_5__["InventoryService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_message_show_service__WEBPACK_IMPORTED_MODULE_6__["MessageShowService"],
            _services_authenticator_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticatorService"]])
    ], HomeComponent);
    return HomeComponent;
})();



/***/ }),

/***/ "./src/app/components/inventory/inventory-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/inventory/inventory-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: InventoryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryRoutingModule", function() { return InventoryRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _inventory_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inventory.component */ "./src/app/components/inventory/inventory.component.ts");
/* harmony import */ var _inventory_home_inventory_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inventory-home/inventory-home.component */ "./src/app/components/inventory/inventory-home/inventory-home.component.ts");
/* harmony import */ var _inventory_category_inventory_category_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inventory-category/inventory-category.component */ "./src/app/components/inventory/inventory-category/inventory-category.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let InventoryRoutingModule = /** @class */ (() => {
    let InventoryRoutingModule = class InventoryRoutingModule {
    };
    InventoryRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _inventory_component__WEBPACK_IMPORTED_MODULE_2__["InventoryComponent"],
                        pathMatch: 'prefix',
                        children: [
                            {
                                path: '',
                                redirectTo: 'item'
                            },
                            {
                                path: 'item',
                                component: _inventory_home_inventory_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
                            },
                            {
                                path: 'category',
                                component: _inventory_category_inventory_category_component__WEBPACK_IMPORTED_MODULE_4__["InventoryCategoryComponent"]
                            }
                        ]
                    }
                ])
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], InventoryRoutingModule);
    return InventoryRoutingModule;
})();



/***/ }),

/***/ "./src/app/components/inventory/inventory.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/inventory/inventory.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* ===============================header colors=======================*/\n.table-format-first .table-responsive table th,\n.table-format-first .table-responsive table td {\n  text-align: center;\n  padding: 10px 5px;\n}\n.table-format-first .table-responsive table th {\n  text-transform: capitalize;\n  font-size: 14px;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper {\n  display: inline-block;\n  overflow: initial;\n  margin-left: 0;\n  width: auto;\n  position: relative;\n  background: transparent;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox {\n  z-index: 2;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label {\n  font-size: 16px;\n  margin-left: 7px;\n  font-weight: 600;\n  vertical-align: middle;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:after, .table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:before {\n  z-index: 1;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper:after {\n  content: '';\n  width: 20px;\n  height: 20px;\n  background: #fff;\n  left: 0;\n  top: 0;\n  position: absolute;\n}\n.table-format-first .table-responsive table tbody tr td .fa-trash-o {\n  color: #f44336;\n  font-size: 20px;\n}\n.table-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-top: 10px;\n}\n.table-container .heading-container {\n  background: #e0eaec;\n  display: flex;\n  flex-direction: row;\n  font-size: 14px;\n  font-weight: 600;\n  text-align: left;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n}\n.table-container .heading-container .heading-item {\n  width: 10%;\n  text-align: center;\n}\n.table-container .value-outer-container {\n  display: flex;\n  flex-direction: column;\n  min-height: 53vh;\n  max-height: 54vh;\n  overflow-x: hidden;\n  overflow-y: auto;\n  border: 1px solid #ccc;\n}\n.table-container .value-outer-container .value-container {\n  display: flex;\n  flex-direction: row;\n  text-align: left;\n  padding: 4px;\n  font-size: 12px;\n  border-bottom: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n  border-top: none;\n}\n.table-container .value-outer-container .value-container .value-item {\n  width: 10%;\n  text-align: center;\n}\n.router-container {\n  width: 100%;\n}\n.common-tab {\n  padding-top: 5px;\n}\n.common-tab ul {\n  font-size: 0;\n}\n.common-tab ul li {\n  margin-right: 1px;\n  display: inline-block;\n  width: 8%;\n  max-width: 158px;\n  cursor: pointer;\n}\n.common-tab ul li a {\n  display: block;\n  padding: 7px 5px;\n  background: white;\n  border: 1px solid #cccdcd;\n  text-align: center;\n  color: #0084f6;\n  font-size: 14px;\n  font-weight: 600;\n}\n.common-tab ul li:hover a, .common-tab ul li.active a {\n  background: #e1f3ff;\n  color: #0084f6;\n  border-color: #0084f6;\n}\n@media only screen and (max-width: 420px) {\n  .common-tab ul li {\n    width: auto;\n  }\n  .common-tab ul li a {\n    font-size: 10px;\n  }\n  .field-checkbox-wrapper .form-checkbox + label {\n    font-size: 12px;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .common-tab ul li {\n    margin-right: 0;\n    width: 20%;\n  }\n  .common-tab ul li a {\n    padding: 5px 5px;\n    font-size: 12px;\n  }\n}\n.boxPadding15 {\n  box-sizing: border-box;\n}\n.middle-section {\n  padding: 5px 15px;\n  width: 100%;\n  box-sizing: border-box;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY3NzL2NvbW1vbi92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9pbnZlbnRvcnkvaW52ZW50b3J5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVlBLHVFQUFBO0FBV0E7O0VBS2dCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUN4QmpDO0FEa0JBO0VBU2dCLDBCQUEwQjtFQUMxQixlQUFlO0FDdkIvQjtBRGFBO0VBZ0I0QixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHVCQUF1QjtBQ3pCbkQ7QURJQTtFQXVCZ0MsVUFBVTtBQ3ZCMUM7QURBQTtFQTBCZ0MsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0FDdEJ0RDtBRFBBO0VBZ0NvQyxVQUFVO0FDckI5QztBRFhBO0VBb0NnQyxXQUFXO0VBQ1gsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsT0FBTztFQUNQLE1BQU07RUFDTixrQkFBa0I7QUNyQmxEO0FEckJBO0VBOEM0QixjQWxEYjtFQW1EYSxlQUFlO0FDckIzQztBRDhCQTtFQUNJLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGdCQUFnQjtBQzNCcEI7QUR1QkE7RUFNTSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQix5QkFBeUI7QUN6Qi9CO0FEVUE7RUFpQlEsVUFBVTtFQUNWLGtCQUFrQjtBQ3ZCMUI7QURLQTtFQXNCTSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixzQkFBc0I7QUN2QjVCO0FETEE7RUE4QlEsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0Isb0JBQW9CO0VBQ3BCLHlCQUF5QjtFQUN6QixnQkFBZ0I7QUNyQnhCO0FEakJBO0VBd0NVLFVBQVU7RUFDVixrQkFBa0I7QUNuQjVCO0FBcEdBO0VBQ0ksV0FBVztBQXVHZjtBQXBHQTtFQUNJLGdCQUFnQjtBQXVHcEI7QUF4R0E7RUFHUSxZQUFZO0FBeUdwQjtBQTVHQTtFQUtZLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsU0FBUztFQUNULGdCQUFnQjtFQUNoQixlQUFlO0FBMkczQjtBQXBIQTtFQVdnQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGNEYks7RUNjTCxlQUFlO0VBQ2YsZ0JBQWdCO0FBNkdoQztBQS9IQTtFQXVCb0IsbUJBQW1CO0VBQ25CLGNEckJDO0VDc0JELHFCRHRCQztBQ2tJckI7QUFyR0E7RUFDSTtJQUNJLFdBQVc7RUF3R2pCO0VBekdFO0lBR1EsZUFBZTtFQXlHekI7RUF0R0U7SUFDSSxlQUFlO0VBd0dyQjtBQUNGO0FBckdBO0VBQ0k7SUFDSSxlQUFlO0lBQ2YsVUFBVTtFQXdHaEI7RUExR0U7SUFJUSxnQkFBZ0I7SUFDaEIsZUFBZTtFQXlHekI7QUFDRjtBQXJHQTtFQUNFLHNCRHpEcUI7QUNpS3ZCO0FBckdBO0VBQ0ksaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxzQkFBc0I7QUF3RzFCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9pbnZlbnRvcnkvaW52ZW50b3J5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHB1bGwtTDogbGVmdDtcbiRwdWxsLVI6IHJpZ2h0O1xuJHB1bGwtbm9uZTogbm9uZTtcbiRmdWxsLXdpZHRoOiAxMDAlO1xuJGJvcmRlci1ib3g6IGJvcmRlci1ib3g7XG4kYm9yZGVyLWNvbG9yOiAjZGVlYWVlO1xuJGJnLXdoaXRlOiAjZmZmO1xuJGVycm9yLWNvbG9yOiAjZmYwMDAwO1xuJGNvbW1vbi1ibHVlOiAjMDA4NGY2O1xuJHByaW1hcnktY29sb3I6ICMzMzM7XG4kYm9yZGVyLWNvbW1vbjojZWFlYWViO1xuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09aGVhZGVyIGNvbG9ycz09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuJGhlYWRlci1iZzojMDA2MEEzO1xuJGhlYWRlci1ib3JkZXI6I2VhZWFlYjtcbiRsZWZ0TWVudUJnOiNmYWZhZmE7XG4kbGVmdE1lbnVIb3ZlckJnOiMwMDg0ZjY7XG4kbGVmdE1lbnVUZXh0SG92ZXJDb2xvcjojZmZmO1xuJHJlZEJ0bjojZjQ0MzM2O1xuJGJvcmRlcmNjYzojY2NjO1xuJGxpZ2h0Qmx1ZTojZWZmN2ZmO1xuJHRhYmxlSGVhZGluZ0JnQ29sb3I6ICMwMDRhN2U7XG4udGFibGUtZm9ybWF0LWZpcnN0IHtcbiAgICAudGFibGUtcmVzcG9uc2l2ZSB7XG4gICAgICAgIHRhYmxlIHtcbiAgICAgICAgICAgIHRoLFxuICAgICAgICAgICAgdGQge1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoIHtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0Ym9keSB7XG4gICAgICAgICAgICAgICAgdHIge1xuICAgICAgICAgICAgICAgICAgICB0ZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuZmllbGQtY2hlY2tib3gtd3JhcHBlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBpbml0aWFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZm9ybS1jaGVja2JveCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mb3JtLWNoZWNrYm94K2xhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogN3B4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmFmdGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLmZhLXRyYXNoLW8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkcmVkQnRuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnRhYmxlLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgLmhlYWRpbmctY29udGFpbmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICNlMGVhZWM7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgICAuaGVhZGluZy1pdGVtIHtcbiAgICAgICAgd2lkdGg6IDEwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgIH1cbiAgICAudmFsdWUtb3V0ZXItY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgbWluLWhlaWdodDogNTN2aDtcbiAgICAgIG1heC1oZWlnaHQ6IDU0dmg7XG4gICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgIC52YWx1ZS1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgICAgICBib3JkZXItdG9wOiBub25lO1xuICAgICAgICAudmFsdWUtaXRlbSB7XG4gICAgICAgICAgd2lkdGg6IDEwJTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0iLCJAaW1wb3J0IFwiLi9zcmMvYXNzZXRzL2Nzcy9jb21tb24vdmFyaWFibGVzLnNjc3NcIjtcbi5yb3V0ZXItY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbW1vbi10YWIge1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgdWwge1xuICAgICAgICBmb250LXNpemU6IDA7XG4gICAgICAgIGxpIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMXB4O1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgd2lkdGg6IDglO1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAxNThweDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDdweCA1cHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjY2RjZDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgY29sb3I6ICRjb21tb24tYmx1ZTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICY6aG92ZXIsXG4gICAgICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlMWYzZmY7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkY29tbW9uLWJsdWU7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJGNvbW1vbi1ibHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjBweCkge1xuICAgIC5jb21tb24tdGFiIHVsIGxpIHtcbiAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgIGEge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5maWVsZC1jaGVja2JveC13cmFwcGVyIC5mb3JtLWNoZWNrYm94K2xhYmVsIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2N3B4KSB7XG4gICAgLmNvbW1vbi10YWIgdWwgbGkge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgIHdpZHRoOiAyMCU7XG4gICAgICAgIGEge1xuICAgICAgICAgICAgcGFkZGluZzogNXB4IDVweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmJveFBhZGRpbmcxNSB7XG4gIGJveC1zaXppbmc6ICRib3JkZXItYm94O1xufVxuXG4ubWlkZGxlLXNlY3Rpb24ge1xuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/inventory/inventory.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/inventory/inventory.component.ts ***!
  \*************************************************************/
/*! exports provided: InventoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryComponent", function() { return InventoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
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


let InventoryComponent = /** @class */ (() => {
    let InventoryComponent = class InventoryComponent {
        constructor(router) {
            this.router = router;
        }
        ngOnInit() {
            if (this.router.url.includes('category')) {
                this.switchActiveView('category');
            }
            else {
                this.switchActiveView('item');
            }
        }
        switchActiveView(tabName) {
            document.getElementById('item').classList.remove('active');
            document.getElementById('category').classList.remove('active');
            document.getElementById(tabName).classList.add('active');
        }
    };
    InventoryComponent.ctorParameters = () => [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ];
    InventoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-inventory',
            template: __importDefault(__webpack_require__(/*! raw-loader!./inventory.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/inventory/inventory.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./inventory.component.scss */ "./src/app/components/inventory/inventory.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], InventoryComponent);
    return InventoryComponent;
})();



/***/ }),

/***/ "./src/app/components/inventory/inventory.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/inventory/inventory.module.ts ***!
  \**********************************************************/
/*! exports provided: InventoryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryModule", function() { return InventoryModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _inventory_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inventory.component */ "./src/app/components/inventory/inventory.component.ts");
/* harmony import */ var _inventory_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inventory-routing.module */ "./src/app/components/inventory/inventory-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _inventory_home_inventory_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./inventory-home/inventory-home.component */ "./src/app/components/inventory/inventory-home/inventory-home.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/components/shared/shared.module.ts");
/* harmony import */ var _inventory_category_inventory_category_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./inventory-category/inventory-category.component */ "./src/app/components/inventory/inventory-category/inventory-category.component.ts");
/* harmony import */ var _services_inventory_services_inventory_category_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/inventory-services/inventory-category.service */ "./src/app/services/inventory-services/inventory-category.service.ts");
/* harmony import */ var _services_inventory_services_inventory_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/inventory-services/inventory.service */ "./src/app/services/inventory-services/inventory.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';




//import { HomeComponent } from './home/home.component';




let InventoryModule = /** @class */ (() => {
    let InventoryModule = class InventoryModule {
    };
    InventoryModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _inventory_routing_module__WEBPACK_IMPORTED_MODULE_3__["InventoryRoutingModule"],
                // BsDatepickerModule,
                primeng_primeng__WEBPACK_IMPORTED_MODULE_5__["FileUploadModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_5__["SplitButtonModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_5__["MenuModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"]
            ],
            declarations: [
                _inventory_component__WEBPACK_IMPORTED_MODULE_2__["InventoryComponent"],
                _inventory_home_inventory_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _inventory_category_inventory_category_component__WEBPACK_IMPORTED_MODULE_10__["InventoryCategoryComponent"]
            ],
            entryComponents: [],
            providers: [
                _services_inventory_services_inventory_service__WEBPACK_IMPORTED_MODULE_12__["InventoryService"],
                _services_inventory_services_inventory_category_service__WEBPACK_IMPORTED_MODULE_11__["InventoryCategoryService"]
            ]
        })
    ], InventoryModule);
    return InventoryModule;
})();



/***/ }),

/***/ "./src/app/services/inventory-services/inventory-category.service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/services/inventory-services/inventory-category.service.ts ***!
  \***************************************************************************/
/*! exports provided: InventoryCategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryCategoryService", function() { return InventoryCategoryService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _authenticator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../authenticator.service */ "./src/app/services/authenticator.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let InventoryCategoryService = /** @class */ (() => {
    let InventoryCategoryService = class InventoryCategoryService {
        constructor(http, auth) {
            this.http = http;
            this.auth = auth;
            this.baseUrl = '';
            this.auth.currentAuthKey.subscribe(key => {
                this.Authorization = key;
                this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ "Content-Type": "application/json", "Authorization": this.Authorization });
            });
            this.auth.currentInstituteId.subscribe(id => {
                this.institute_id = id;
            });
            this.baseUrl = this.auth.getBaseUrl();
        }
        // Getting all category list from server
        getCategoryList() {
            let institution_id = parseInt(this.institute_id);
            let url = this.baseUrl + '/api/v1/inventory/category/all/' + institution_id;
            return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(success => {
                return success;
            }, err => {
                return err;
            }));
        }
        // Add new category to the category list
        setNewCategory(data) {
            data.institution_id = parseInt(this.institute_id);
            let url = this.baseUrl + '/api/v1/inventory/category';
            return this.http.post(url, data, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(success => {
                return success;
            }, err => {
                return err;
            }));
        }
        // to update the existing row
        updateExisting(data) {
            let url = this.baseUrl + '/api/v1/inventory/category';
            return this.http.put(url, data, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(success => {
                return success;
            }, err => {
                return err;
            }));
        }
    };
    InventoryCategoryService.ctorParameters = () => [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _authenticator_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticatorService"] }
    ];
    InventoryCategoryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _authenticator_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticatorService"]])
    ], InventoryCategoryService);
    return InventoryCategoryService;
})();



/***/ }),

/***/ "./src/app/services/inventory-services/inventory.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/services/inventory-services/inventory.service.ts ***!
  \******************************************************************/
/*! exports provided: InventoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryService", function() { return InventoryService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _authenticator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../authenticator.service */ "./src/app/services/authenticator.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let InventoryService = /** @class */ (() => {
    let InventoryService = class InventoryService {
        constructor(http, auth) {
            this.http = http;
            this.auth = auth;
            this.baseUrl = "";
            this.auth.currentAuthKey.subscribe(key => {
                this.Authorization = key;
                this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "Content-Type": "application/json", "Authorization": this.Authorization });
            });
            this.auth.currentInstituteId.subscribe(id => {
                this.institute_id = id;
            });
            this.baseUrl = this.auth.getBaseUrl();
        }
        fetchAllItems() {
            let url = this.baseUrl + "/api/v1/inventory/item/all/" + this.institute_id;
            return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(data => { return data; }, err => { return err; }));
        }
        fetchAllCategories() {
            let url = this.baseUrl + "/api/v1/inventory/category/all/" + this.institute_id;
            return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(data => { return data; }, err => { return err; }));
        }
        updateInventoryItem(data) {
            data.institution_id = this.institute_id;
            let url = this.baseUrl + "/api/v1/inventory/item";
            return this.http.put(url, data, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(data => { return data; }, err => { return err; }));
        }
        fetchAllMasterCategoryItem() {
            let url = this.baseUrl + "/api/v1/standards/all/" + this.institute_id;
            return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(data => { return data; }, err => { return err; }));
        }
        deleteRowFromItem(rowID) {
            this.url = this.baseUrl + "/api/v1/inventory/item/" + rowID;
            return this.http.delete(this.url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(data => { return data; }, err => { return err; }));
        }
        getCourseOnBasisOfMasterCourse(data_id) {
            let url = this.baseUrl + "/api/v1/subjects/standards/" + data_id;
            return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(data => { return data; }, err => { return err; }));
        }
        addItemDetailsInCategory(data) {
            data.institution_id = this.institute_id;
            let url = this.baseUrl + "/api/v1/inventory/item";
            return this.http.post(url, data, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(data => { return data; }, err => { return err; }));
        }
        addQuantityInStock(data) {
            data.institution_id = this.institute_id;
            let url = this.baseUrl + "/api/v1/inventory/item/stockUpdate/";
            return this.http.put(url, data, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(data => { return data; }, err => { return err; }));
        }
        getItemDetailsForSubBranches(item_id) {
            let url = this.baseUrl + "/api/v1/inventory/item/" + this.institute_id + "/" + item_id;
            return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(data => { return data; }, err => { return err; }));
        }
        getAllSubBranchesInfo() {
            let url = this.baseUrl + '/api/v1/institutes/all/subBranches/' + this.institute_id;
            return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(data => { return data; }, err => { return err; }));
        }
        getSubBranchItemInfo(dataId) {
            let url = this.baseUrl + '/api/v1/inventory/item/all/' + dataId;
            return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(data => { return data; }, err => { return err; }));
        }
        allocateItemToSubBranch(data) {
            data.institution_id = this.institute_id;
            let url = this.baseUrl + '/api/v1/inventory/item/allocate/subBranch';
            return this.http.post(url, data, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(data => { return data; }, err => { return err; }));
        }
        getInventoryItemHistory(item_id) {
            let url = this.baseUrl + "/api/v1/inventory/item/txHistory/" + item_id;
            return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(data => { return data; }, err => { return err; }));
        }
    };
    InventoryService.ctorParameters = () => [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"] }
    ];
    InventoryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"]])
    ], InventoryService);
    return InventoryService;
})();



/***/ })

}]);
//# sourceMappingURL=app-components-inventory-inventory-module-es2015.js.map