(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-components-course-module-data-setup-academic-year-academic-year-module~app-components-le~468b79d7"],{

/***/ "./node_modules/primeng/treetable.js":
/*!*******************************************!*\
  !*** ./node_modules/primeng/treetable.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/treetable/treetable */ "./node_modules/primeng/components/treetable/treetable.js"));

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-city-area/add-city-area.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-city-area/add-city-area.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"addAreaModal\" class=\"modal fade\" role=\"dialog\">\n  <div class=\"modal-dialog\" style=\"top: 7%;\">\n\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" (click)=\"closePopups()\">&times;</button>\n        <h3 class=\"modal-title\">Add Area</h3>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"add-area-container\">\n          <div class=\"add-item field-wrapper\">\n            <select class=\"form-ctrl\" name=\"\" [(ngModel)]=\"addArea.country_id\" (ngModelChange)=\"getStateList()\">\n              <option value=\"-1\">Select Country</option>\n              <option title=\"{{country.country_name}}\" [value]=\"country.id\" *ngFor=\"let country of countryList\">\n                {{ (country.country_name.length > 30) ? (country.country_name | slice:0:30) + '...' : country.country_name }}\n              </option>\n            </select>\n          </div>\n          <div class=\"add-item field-wrapper\">\n            <select class=\"form-ctrl\" name=\"\" [(ngModel)]=\"addArea.state_id\" (ngModelChange)=\"getCityList()\">\n              <option value=\"-1\">Select State</option>\n              <option title=\"{{state.state_name}}\" [value]=\"state.state_id\" *ngFor=\"let state of stateList\">\n                {{ (state.state_name.length > 30) ? (state.state_name | slice:0:30) + '...' : state.state_name }}\n              </option>\n            </select>\n          </div>\n          <div class=\"add-item field-wrapper\">\n            <select class=\"form-ctrl\" name=\"\" [(ngModel)]=\"addArea.city_id\">\n              <option value=\"-1\">Select City</option>\n              <option title=\"{{city.city_name}}\" [value]=\"city.city_id\" *ngFor=\"let city of cityList\">\n                {{ (city.city_name.length > 30) ? (city.city_name | slice:0:30) + '...' : city.city_name }}</option>\n            </select>\n          </div>\n          <div class=\"add-item field-wrapper\">\n            <input type=\"text\" name=\"\" value=\"\" [(ngModel)]=\"addArea.areaName\" placeholder=\"Enter area name\"\n              class=\"edit-area-item form-ctrl\">\n          </div>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"closePopups()\">Close</button>\n        <button type=\"button\" class=\"btn btn-default add-area-btn\" (click)=\"addNewArea()\">Add Area</button>\n      </div>\n    </div>\n\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/city-area-map/city-area-map.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/city-area-map/city-area-map.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Modal -->\n<div id=\"editCityArea\" class=\"modal fade\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h3 class=\"modal-title\">Edit Area</h3>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"edit-container\">\n          <div class=\"edit-item field-wrapper\">\n            <span class=\"edit-title\">Country Name </span>\n            <span>{{ (!editrecord?.country_name) ? '-' : editrecord.country_name}}</span>\n          </div>\n          <div class=\"edit-item field-wrapper\">\n            <span class=\"edit-title\">State Name </span>\n            <span>{{(!editrecord?.state_name) ? '-' : editrecord.state_name}}</span>\n          </div>\n          <div class=\"edit-item field-wrapper\">\n            <span class=\"edit-title\">City Name </span>\n            <span>{{ (!editrecord?.city) ? '-' : editrecord.city}}</span>\n          </div>\n          <div class=\"edit-item field-wrapper\">\n            <span class=\"edit-title\">Area Name </span>\n            <input type=\"text\" name=\"\" value=\"\" [(ngModel)]=\"editAreaName\" placeholder=\"Enter area name\"\n              class=\"edit-area-item form-ctrl\">\n          </div>\n          <div class=\"edit-item field-checkbox-wrapper\" style=\"width: 100px !important\">\n            <span class=\"edit-title\" style=\"width: 100%;\">Is Active</span>\n            <input type=\"checkbox\" id=\"active\" value=\"\" name=\"\" class=\"form-checkbox\" [(ngModel)]=\"editIsActiveStatus\">\n            <label for=\"active\"></label>\n          </div>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"updateArea()\">Update</button>\n      </div>\n    </div>\n\n  </div>\n</div>\n\n<div id=\"deleteModal\" class=\"modal fade\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <div class=\"alert-title-container\">\n          <i class=\"fa fa-exclamation-circle\" aria-hidden=\"true\"></i>\n          <h4 class=\"modal-title\">Alert</h4>\n        </div>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"msg-container\">\n          <span>Are you sure you want to delete it?</span>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">No, cancel!</button>\n        <button type=\"button\" class=\"btn btn-default delete-btn\" (click)=\"deleteArea()\">Yes, delete it!</button>\n      </div>\n    </div>\n\n  </div>\n</div>\n\n<div class=\"clearFix\">\n  <section class=\"middle-top mb0 clearFix\">\n    <h1 class=\"pull-left\">\n      State/City/Area Mapping\n    </h1>\n  </section>\n\n  <section class=\"middle-main clearFix\">\n    <!-- Filter container -->\n    <section>\n      <div class=\"filter-container\">\n        <div class=\"filter-item field-wrapper\" style=\"margin-left: 0px;\">\n          <select class=\"form-ctrl\" name=\"\" [(ngModel)]=\"filter.country_ids\" (ngModelChange)=\"getStateList()\">\n            <option value=\"-1\">Select Country</option>\n            <option title=\"{{country.country_name}}\" [value]=\"country.id\" *ngFor=\"let country of countryList\">\n              {{ (country.country_name.length > 30) ? (country.country_name | slice:0:30) + '...' : country.country_name\n              }}\n            </option>\n          </select>\n        </div>\n        <div class=\"filter-item field-wrapper\">\n          <select class=\"form-ctrl\" name=\"\" [(ngModel)]=\"filter.state_ids\" (ngModelChange)=\"getCityList()\">\n            <option value=\"-1\">Select State</option>\n            <option title=\"{{state.state_name}}\" [value]=\"state.state_id\" *ngFor=\"let state of stateList\">\n              {{ (state.state_name.length > 30) ? (state.state_name | slice:0:30) + '...' : state.state_name }}</option>\n          </select>\n        </div>\n        <div class=\"filter-item field-wrapper\">\n          <select class=\"form-ctrl\" name=\"\" [(ngModel)]=\"filter.city_ids\">\n            <option value=\"-1\">Select City</option>\n            <option title=\"{{city.city_name}}\" [value]=\"city.city_id\" *ngFor=\"let city of cityList\">\n              {{ (city.city_name.length > 30) ? (city.city_name | slice:0:30) + '...' : city.city_name }}</option>\n          </select>\n        </div>\n        <div class=\"filter-item field-checkbox-wrapper\" style=\"width: 100px !important; margin-top: 15px;\">\n          <span class=\"edit-title\" style=\"width: 100%;\">Is Active</span>\n          <input type=\"checkbox\" id=\"active\" value=\"\" name=\"\" class=\"form-checkbox\" [(ngModel)]=\"filter.is_active\">\n          <label for=\"active\"></label>\n        </div>\n        <div class=\"filter-item\" style=\"width: 8%;\" id=\"searchBtn1\">\n          <button type=\"button\" class=\"search-btn fullBlue\" name=\"button\" (click)=\"searchArea()\">Search</button>\n        </div>\n        <div class=\"create-btn-container field-wrapper filter-item\"\n          style=\"margin-left: 29%;width: 8%;margin-right: 0px;\">\n          <button type=\"button\" name=\"button\" class=\"add-student-btn\" (click)=\"toggleAddArea()\">Add Area</button>\n        </div>\n      </div>\n    </section>\n\n    <!-- Search bar and Add Area btn container -->\n    <section>\n      <div class=\"search-and-create-filter-container\">\n        <div class=\"search-container field-wrapper\">\n          <input type=\"text\" value=\"\" id=\"search_bar\" [(ngModel)]=\"areaSearchInput\" name=\"areaSearchInput\"\n            (keyup)=\"searchDatabase(search)\" placeholder=\"Search here...\" class=\"search-box\" #search>\n        </div>\n      </div>\n    </section>\n\n    <!-- table container -->\n    <section>\n      <div class=\"table-container\">\n        <div class=\"table-header-container\">\n          <div class=\"header-item small\">\n            <span>State</span>\n          </div>\n          <div class=\"header-item small\">\n            <span>City</span>\n          </div>\n          <div class=\"header-item large\">\n            <span>Area</span>\n          </div>\n          <div class=\"header-item align-center medium\">\n            <span>Active Status</span>\n          </div>\n          <div class=\"header-item align-center medium\">\n            <span>Action</span>\n          </div>\n        </div>\n        <div class=\"table-value-outer-container\">\n          <div class=\"table-value-container\" *ngFor=\"let record of countryStateAreaList\">\n            <div class=\"table-value-item small\">\n              <span title=\"{{record?.state_name}}\">{{ (!record.state_name) ? '-' : (record.state_name.length > 20) ?\n                (record.state_name | slice:0:20) + '...' : record.state_name}}</span>\n            </div>\n            <div class=\"table-value-item small\">\n              <span title=\"{{record?.city}}\">{{ (!record.city) ? '-' : (record.city.length > 20) ? (record.city |\n                slice:0:20) + '...' : record.city}}</span>\n            </div>\n            <div class=\"table-value-item large\">\n              <span title=\"{{record?.area}}\">{{ (!record.area) ? '-' : (record.area.length > 50) ? (record.area |\n                slice:0:50) + '...' : record.area }}</span>\n            </div>\n            <div class=\"table-value-item align-center medium\">\n              <span *ngIf=\"record?.is_active == 'Y'\">Active</span>\n              <span *ngIf=\"record?.is_active == 'N'\" style=\"color: red;\">In-Active</span>\n            </div>\n            <div class=\"table-value-item align-center medium\">\n              <i class=\"fa fa-pencil edit-lead\" title=\"Edit Area\" aria-hidden=\"true\" (click)=\"editArea(record)\"\n                data-toggle=\"modal\" data-target=\"#editCityArea\"></i>\n              <i class=\"fa fa-trash delete-lead\" title=\"Delete Area\" aria-hidden=\"true\" data-toggle=\"modal\"\n                data-target=\"#deleteModal\" (click)=\"setDeleteAreaId(record.id)\"></i>\n            </div>\n          </div>\n          <div class=\"no-records\" *ngIf=\"!countryStateAreaList.length && !jsonFlag.isRippleLoad\">\n            <span>No Records Found</span>\n          </div>\n        </div>\n      </div>\n    </section>\n\n  </section>\n\n</div>\n\n\n<app-add-city-area *ngIf=addArea (closePopup)=\"toggleAddArea($event)\" [selectedData]=\"selectedData\">\n</app-add-city-area>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/class-room/class-room.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/class-room/class-room.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"middle-section clearFix\">\n\n  <section class=\"middle-top mb0 clearFix\" style=\"padding-bottom:0px;\">\n    <h1 class=\"pull-left marginhead\">\n      Classroom\n    </h1>\n   \n  </section>\n\n  <section class=\"middle-main clearFix\">\n\n    <div class=\"clearFix add-edit\">\n      <a (click)=\"toggleCreateNewList()\">\n        <i id=\"showAddBtn\" class=\"addBtnClass\" style=\"border:none;\">+</i>\n        <i id=\"showCloseBtn\" style=\"display:none;border:none;\" class=\"closeBtnClass\">-</i>\n        <span>Add Classroom</span>\n      </a>\n      <div class=\"pull-right\">\n          <div class=\"search-filter-wrapper\">\n            <input #search type=\"textbox\" class=\"normal-field\" placeholder=\"Search\" [(ngModel)]=\"searchText\" name=\"searchData\" (keyup)=\"searchDatabase()\">\n          </div>\n        </div> \n    \n    </div>\n  \n    \n    <section class=\"clearFix create-standard-form\" *ngIf=\"CreateNewList\">\n      <form action=\"\">\n        <div class=\"row \">\n          <div class=\"c-lg-3 c-md-3 c-sm-3 c-sx-3 \">\n\n            <div class=\"field-wrapper\" [ngClass]=\"{'has-value': enterclassdata!= ''}\">\n              <label for=\"Classroom_Name\">Classroom Name<span class=\"text-danger\">*</span></label>\n              <input type=\"text\" #idAddRoom class=\"form-ctrl\" [(ngModel)]=\"enterclassdata\" name=\"Classroom_Name\" id=\"Classroom_Name\">\n\n            </div>\n          </div>\n          <div class=\"c-lg-3 c-md-3 c-sm-3 c-sx-3\">\n            <div class=\"field-wrapper\" [ngClass]=\"{'has-value': enterclassdataDesc!= ''}\">\n              <label for=\"ClassroomDesc\">Classroom Description<span class=\"text-danger\">*</span></label>\n              <input type=\"text\" #idAddDesc class=\"form-ctrl\" [(ngModel)]=\"enterclassdataDesc\" name=\"ClassroomDesc\" id=\"ClassroomDesc\">\n\n            </div>\n          </div>\n          <div class=\"c-lg-6 c-md-6 c-sm-6 c-sx-6\" style=\"margin-top:1%;\">\n              <button class=\"btn fullBlue btnclass pull-right\" (click)=\"addNewclassRoom(idAddRoom.value,idAddDesc.value)\">Save</button>\n          </div>\n        </div>\n\n  </form>\n      </section>\n\n      <div id=\"divSlotTable\">\n          <div class=\"table-scroll-wrapper\">\n            <div class=\"table table-responsive\">\n              <table>\n                <thead>\n                  <tr>\n                    <th>\n                      S No.\n                    </th>\n                    <th>\n                      Room Name\n                    </th>\n                    <th>\n                      Description\n                    </th>\n                    <th>\n                      Edit\n                    </th>\n                  </tr>\n                </thead>\n  \n                <tbody *ngIf=\"classRoomData.length !=0\">\n  \n                  <tr id=\"row{{i}}\" class=\"displayComp\" *ngFor=\"let row of pagedclassRoomData; let i = index; trackBy: i;\">\n  \n                    <td>\n                      {{i + 1}}\n                    </td>\n    \n                    <td class=\"view-comp\">\n                      {{row.class_room_name}}\n                    </td>\n  \n                    <td class=\"edit-comp\">\n                      <div class=\"field-wrapper\">\n                        <textarea id=\"\" class=\"form-ctrl editCellInput\" [(ngModel)]=\"row.class_room_name\" style=\"overflow: hidden;\" name=\"label\" cols=\"1\" rows=\"1\"></textarea>\n                        <!-- <input type=\"text\" class=\"form-ctrl editCellInput\" [(ngModel)]=\"row.class_room_name\" name=\"label\"> -->\n                      </div>\n                    </td>\n    \n                    <td class=\"view-comp\">\n                      {{row.class_room_desc}}\n                    </td>\n    \n                    <td class=\"edit-comp\">\n                      <div class=\"field-wrapper\">\n                        <input type=\"text\" class=\"form-ctrl editCellInput\" [(ngModel)]=\"row.class_room_desc\" style=\"overflow: hidden;\"  name=\"label\">\n                      </div>\n                    </td>\n    \n                    <td class=\"view-comp\">\n                      <a class=\"anchorTagCursor\" (click)=\"editRowTable(row , i)\">Edit</a>\n                    </td>\n  \n                    <td class=\"edit-comp\">\n                      <a class=\"anchorTagCursor\" (click)=\"saveclassRoomInfo(row , i)\">Update</a>\n                    </td>\n    \n                  </tr>\n                </tbody>\n                <tbody *ngIf=\"classRoomData.length ==0\">\n                  <td colspan=\"4\" style=\"text-align: center\">\n                     No ClassList Record Found\n                  </td>\n                </tbody>\n              </table>\n            </div>\n          </div>\n        </div>\n    \n        <!-- Paginator Here -->\n        <div class=\"row filter-res pagination\" style=\"width: 100%;\">\n          <div class=\"c-lg-12 c-md-12 c-sm-12 align-right\">\n            <pagination (goPage)=\"fetchTableDataByPage($event)\" (goNext)=\"fetchNext()\" (goPrev)=\"fetchPrevious()\" [pagesToShow]=\"10\"\n              [page]=\"pageIndex\" [perPage]=\"displayBatchSize\" [count]=\"totalRow\">\n            </pagination>\n          </div>\n        </div>\n      </section>\n    </div>\n      \n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/master/manage-exam-grades/manage-exam-grades.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/master/manage-exam-grades/manage-exam-grades.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"clear-fix\">\n  <aside class=\"middle-full \">\n    <section class=\"middle-main clearFix \">\n      <section class=\"middle-top mb0 clearFix sms-header\">\n\n\n      </section>\n      <section class=\"filter-form attendance-container\">\n        <h2>Manage Grades</h2>\n        <div class=\"clearFix add-edit\">\n          <a (click)=\"toggleCreateNewgrade()\">\n            <i id=\"showAddBtn\" class=\"addBtnClass\">+</i>\n            <i id=\"showCloseBtn\" class=\"closeBtnClass\" style=\"display:none;\">-</i>\n            <span>Create Grade</span>\n          </a>\n        </div>\n        <div class=\"row create-standard-field\" *ngIf=showToggle>\n\n          <div class=\"c-lg-3 c-md-3 c-sm-3\">\n            <div class=\"field-wrapper\">\n              <label for=\"Create Grade\">Create Grade\n                <span class=\"text-danger\">*</span>\n              </label>\n              <input type=\"text\" class=\"form-ctrl\" name=\"grade\" id=\"grade\" [(ngModel)]=\"addData.grade\">\n\n            </div>\n          </div>\n          <div class=\"c-lg-3 c-md-3 c-sm-3\">\n            <div class=\"field-wrapper\">\n              <label for=\"Description\">Description\n                <span class=\"text-danger\">*</span>\n              </label>\n              <input type=\"text\" class=\"form-ctrl\" name=\"Description\" id=\"Description\" [(ngModel)]=\"addData.description\">\n\n            </div>\n          </div>\n          <div class=\"c-lg-3 c-md-3 c-sm-3\">\n            <div class=\"pull-left create-cancel-small\">\n              <aside class=\"pull-left create-cancel-small\">\n                <button class=\"btn fullBlue\" style=\"margin-top:26px;\" (click)=\"addDataToTable()\">Add</button>\n              </aside>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"table table-responsive\" style=\"margin-top:10px;\">\n          <table>\n            <thead>\n              <tr>\n                <th>\n                  Id\n                </th>\n                <th>\n                  Grade\n                </th>\n                <th>\n                  Description\n                </th>\n                <th>\n                  Create Date\n                </th>\n                <th>\n                  Edit\n                </th>\n                <th>\n                  Delete\n                </th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let row of gotGrades; let i = index; trackBy: i;\" class=\"displayComp\" id=\"row{{i}}\">\n                <td>\n                  {{i + 1}}\n                </td>\n\n                <td class=\"view-comp\">\n                  {{row.grade}}\n                </td>\n                <td class=\"edit-comp\">\n                  <div class=\"field-wrapper\">\n                    <input type=\"text\" class=\"form-ctrl editCellInput\" name=\"label\" [(ngModel)]=\"row.grade\" [value]=\"row.grade_id\">\n                  </div>\n                </td>\n                <td class=\"view-comp\">\n                  {{row.description}}\n                </td>\n                <td class=\"edit-comp\">\n                  <div class=\"field-wrapper\">\n                    <input type=\"text\" class=\"form-ctrl editCellInput\" name=\"label\" [(ngModel)]=\"row.description\">\n                  </div>\n                </td>\n                <td disabled>\n                  {{row.created_date}}\n                </td>\n                \n                <td class=\"view-comp\">\n                  <a class=\"anchorTagCursor\" (click)=\"editRowTable(row, i)\">Edit</a>\n                </td>\n                <td class=\"edit-comp\">\n                  <a class=\"anchorTagCursor\" (click)=\"saveInformation(row, i)\"> Save </a>\n                  <a class=\"anchorTagCursor anchorTag\" (click)=\"cancelEditRow(i)\"> Cancel </a>\n                </td>\n                <td>\n                    <a class=\"anchorTagCursor\" (click)=\"deletingGrade(row , index)\"> Delete </a>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </section>\n\n    </section>\n  </aside>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/master/master.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/master/master.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/master/slot/slot.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/master/slot/slot.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"middle-section clearFix\">\n  <section class=\"middle-top mb0 clearFix\" style=\"margin-bottom: 10px;\">\n    <h1 class=\"pull-left\">\n      Slots\n    </h1>\n  </section>\n\n  <section class=\"middle-main clearFix\">\n\n    <div class=\"clearFix add-edit\">\n      <a (click)=\"toggleCreateNewSlot()\">\n        <i id=\"showAddBtn\" class=\"addBtnClass\" style=\"border:none;\">+</i>\n        <i id=\"showCloseBtn\" style=\"display:none;border:none;\" class=\"closeBtnClass\">-</i>\n        <span>Add Slot</span>\n      </a>\n    </div>\n    <section class=\"clearFix create-standard-form\" *ngIf=\"createNewSlot\">\n      <div class=\"row create-standard-field\">\n\n        <div class=\"c-lg-3 c-md-3 c-sm-3\">\n          <div class=\"field-wrapper\">\n            <label for=\"slotNew\">Slot</label>\n            <input type=\"text\" #idSlot class=\"form-ctrl\" name=\"slotNew\">\n          </div>\n          <!-- <p>* You can provide time Example 10-12 PM</p> -->\n        </div>\n        <div class=\"c-lg-2 c-md-2 c-sm-2\" style=\"margin-top: 2%;\">\n          <aside class=\"pull-left create-cancel-small\">\n            <button class=\"btn fullBlue\" (click)=\"addNewSlot(idSlot)\">Add</button>\n          </aside>\n        </div>\n      </div>\n\n    </section>\n    <div id=\"divSlotTable\">\n      <div class=\"table-scroll-wrapper\">\n        <div class=\"table table-responsive\">\n          <table>\n            <thead>\n              <tr>\n                <th>\n                  Name\n                </th>\n                <th>\n                  Action\n                </th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr id=\"row{{i}}\" class=\"displayComp\" *ngFor=\"let row of slotTableList; let i = index; trackBy: i;\">\n                <td class=\"view-comp\">\n                  {{row.slot_name}}\n                </td>\n                <td class=\"edit-comp\">\n                  <div class=\"field-wrapper\">\n                    <input type=\"text\" class=\"form-ctrl editCellInput\" [(ngModel)]=\"row.slot_name\" name=\"label\">\n                  </div>\n                </td>\n\n                <td class=\"view-comp\">\n                  <a class=\"anchorTagCursor\" (click)=\"editRowTable(row , i)\">Edit</a>\n                </td>\n                <td class=\"edit-comp\">\n                  <a class=\"anchorTagCursor\" (click)=\"saveSlotInformation(row , i)\"> Save </a>\n                  <a class=\"anchorTagCursor\" (click)=\"cancelEditRow(i)\"> Cancel </a>\n                </td>\n              </tr>\n              <tr *ngIf=\"slotTableList.length ==0\">\n                <td colspan=\"2\" style=\"text-align: center\">\n                  No Slots List Available\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n\n    <!-- Paginator Here -->\n    <div class=\"row filter-res pagination\" style=\"width: 100%;\">\n      <div class=\"c-lg-12 c-md-12 c-sm-12 align-right\">\n        <pagination (goPage)=\"fetchTableDataByPage($event)\" (goNext)=\"fetchNext()\" (goPrev)=\"fetchPrevious()\"\n          [pagesToShow]=\"10\" [page]=\"PageIndex\" [perPage]=\"studentdisplaysize\" [count]=\"totalRow\">\n        </pagination>\n      </div>\n    </div>\n  </section>\n\n</div>");

/***/ }),

/***/ "./src/app/components/add-city-area/add-city-area.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/add-city-area/add-city-area.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".add-area-container {\n  display: flex;\n  flex-direction: column;\n  margin-right: 10%;\n}\n\n.add-area-container .add-item {\n  width: 100%;\n}\n\n.add-area-btn {\n  background: #0084f6;\n  color: white;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZGQtY2l0eS1hcmVhL2FkZC1jaXR5LWFyZWEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGlCQUFpQjtBQUNuQjs7QUFKQTtFQUtJLFdBQVc7QUFHZjs7QUFBQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0FBR2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FkZC1jaXR5LWFyZWEvYWRkLWNpdHktYXJlYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZGQtYXJlYS1jb250YWluZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbi1yaWdodDogMTAlO1xuICAuYWRkLWl0ZW17XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbi5hZGQtYXJlYS1idG57XG4gIGJhY2tncm91bmQ6ICMwMDg0ZjY7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/add-city-area/add-city-area.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/add-city-area/add-city-area.component.ts ***!
  \*********************************************************************/
/*! exports provided: AddCityAreaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCityAreaComponent", function() { return AddCityAreaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_message_show_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/message-show.service */ "./src/app/services/message-show.service.ts");
/* harmony import */ var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/authenticator.service */ "./src/app/services/authenticator.service.ts");
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




let AddCityAreaComponent = /** @class */ (() => {
    let AddCityAreaComponent = class AddCityAreaComponent {
        constructor(msgService, httpService, auth) {
            this.msgService = msgService;
            this.httpService = httpService;
            this.auth = auth;
            this.closePopup = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            // global variables
            this.jsonFlag = {
                isProfessional: false,
                institute_id: ''
            };
            this.countryList = [];
            this.stateList = [];
            this.cityList = [];
            this.addArea = {
                country_id: "-1",
                state_id: "-1",
                city_id: "-1",
                areaName: ""
            };
            this.jsonFlag.institute_id = sessionStorage.getItem('institution_id');
        }
        ngOnInit() {
            $('#addAreaModal').modal('show');
            this.getCountryList();
            let data = this.selectedData;
        }
        getCountryList() {
            let defaultCountryList = sessionStorage.getItem('country_data');
            this.countryList = JSON.parse(defaultCountryList);
            this.addArea.country_id = this.selectedData.country;
            if (this.selectedData.country != "-1") {
                this.getStateList();
            }
        }
        getStateList() {
            this.stateList = [];
            this.cityList = [];
            this.addArea.state_id = '-1';
            this.addArea.city_id = '-1'; // reset state and city once Country change
            const url = `/api/v1/country/state?country_ids=${this.addArea.country_id}`;
            this.auth.showLoader();
            this.httpService.getData(url).subscribe((res) => {
                this.auth.hideLoader();
                if (res.result.length > 0) {
                    this.stateList = res.result[0].stateList;
                    if (this.selectedData.state != "" && this.selectedData.state != null) {
                        this.addArea.state_id = this.selectedData.state;
                        if (this.selectedData.state != "-1") {
                            this.getCityList();
                        }
                    }
                }
            }, err => {
                this.auth.hideLoader();
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err);
            });
        }
        getCityList() {
            const url = `/api/v1/country/city?state_ids=${this.addArea.state_id}`;
            this.auth.showLoader();
            this.httpService.getData(url).subscribe((res) => {
                this.auth.hideLoader();
                if (res.result.length > 0) {
                    this.cityList = res.result[0].cityList;
                    if (this.selectedData.city != "" && this.selectedData.city != "-1" && this.selectedData.city != null) {
                        this.addArea.city_id = this.selectedData.city;
                    }
                }
            }, err => {
                this.auth.hideLoader();
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err);
            });
        }
        addNewArea() {
            let validation = this.validateInputs();
            if (validation) {
                let obj = {
                    "area": this.addArea.areaName,
                    "main_branch_instId": this.jsonFlag.institute_id,
                    "city_id": this.addArea.city_id
                };
                const url = `/api/v1/cityArea/create/area`;
                this.auth.showLoader();
                this.httpService.postData(url, obj).subscribe((res) => {
                    this.auth.hideLoader();
                    this.msgService.showErrorMessage(this.msgService.toastTypes.success, '', 'Area added successfully');
                    this.closePopups(false);
                }, err => {
                    this.auth.hideLoader();
                    this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err.error.message);
                });
            }
        }
        validateInputs() {
            if (this.addArea.country_id == "" || this.addArea.country_id == "-1") {
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please enter country details');
                return false;
            }
            else {
                if (this.addArea.state_id == "" || this.addArea.state_id == "-1") {
                    this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please enter state details');
                    return false;
                }
                else {
                    if (this.addArea.city_id == "" || this.addArea.city_id == "-1") {
                        this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please enter city details');
                        return false;
                    }
                    else {
                        if (this.addArea.areaName.trim() == "" || this.addArea.areaName.trim().length == 0) {
                            this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please enter area details');
                            return false;
                        }
                        else {
                            return true;
                        }
                    }
                }
            }
        }
        closePopups($event) {
            $('#addAreaModal').modal('hide');
            this.closePopup.emit(false);
        }
    };
    AddCityAreaComponent.ctorParameters = () => [
        { type: _services_message_show_service__WEBPACK_IMPORTED_MODULE_2__["MessageShowService"] },
        { type: _services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] },
        { type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"] }
    ];
    AddCityAreaComponent.propDecorators = {
        closePopup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        selectedData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    AddCityAreaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-city-area',
            template: __importDefault(__webpack_require__(/*! raw-loader!./add-city-area.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-city-area/add-city-area.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./add-city-area.component.scss */ "./src/app/components/add-city-area/add-city-area.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_services_message_show_service__WEBPACK_IMPORTED_MODULE_2__["MessageShowService"],
            _services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"]])
    ], AddCityAreaComponent);
    return AddCityAreaComponent;
})();



/***/ }),

/***/ "./src/app/components/city-area-map/city-area-map.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/city-area-map/city-area-map.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".edit-container {\n  display: flex;\n  flex-direction: column;\n  width: 80%;\n  margin-right: 20%;\n}\n\n.edit-container .edit-item {\n  width: 80%;\n  margin-bottom: 10px;\n  display: flex;\n  flex-direction: row;\n}\n\n.edit-container .edit-item .edit-title {\n  font-size: 14px;\n  font-weight: 600;\n  margin-right: 10px;\n  width: 30%;\n  color: gray;\n}\n\n.edit-container .edit-item input {\n  border: 1px solid #ccc;\n  width: 70%;\n}\n\n.alert-title-container {\n  display: flex;\n  flex-direction: row;\n}\n\n.alert-title-container .fa-exclamation-circle {\n  margin-top: 1px;\n  margin-right: 5px;\n  font-size: 16px;\n}\n\n.msg-container {\n  text-align: left;\n  font-weight: 600;\n}\n\n.msg-container span {\n  font-size: 14px;\n}\n\n.delete-btn {\n  background: #d9534f;\n  border-radius: 4px;\n  box-shadow: none;\n  color: white;\n}\n\n.middle-section {\n  padding: 1%;\n}\n\n.filter-container {\n  display: flex;\n  flex-direction: row;\n  border-bottom: 1px solid #ccc;\n  padding-bottom: 10px;\n}\n\n.filter-container .filter-item {\n  width: 15%;\n  margin: 0px 1%;\n}\n\n.filter-container .filter-item .form-ctrl {\n  border: 1px solid #ccc;\n  border-radius: 4px;\n}\n\n.filter-container .search-btn {\n  background: #0084f6;\n  color: white;\n  padding: 6px 10px;\n  border: 2px solid #0084f6;\n  box-shadow: none;\n  border-radius: 4px;\n  margin-top: 10px;\n}\n\n.add-student-btn {\n  background: #0084f6;\n  color: white;\n  padding: 6px 10px;\n  border: 2px solid #0084f6;\n  box-shadow: none;\n  border-radius: 4px;\n}\n\n.search-and-create-filter-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  width: 100%;\n}\n\n.search-and-create-filter-container .search-box {\n  border-radius: 4px;\n  border: 1px solid #b4b6bd;\n  width: 100%;\n  line-height: 30px;\n  padding: 0 10px;\n  font-size: 12px;\n}\n\n.table-container {\n  display: flex;\n  flex-direction: column;\n  margin-top: 10px;\n}\n\n.table-container .table-header-container {\n  border: 1px solid #ccc;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n  display: flex;\n  flex-direction: row;\n  background: #e0eaec;\n  font-weight: 600;\n  text-align: left;\n}\n\n.table-container .table-header-container .header-item {\n  padding: 10px;\n}\n\n.table-container .table-value-outer-container {\n  display: flex;\n  flex-direction: column;\n  border: 1px solid #ccc;\n  border-top: none;\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n  min-height: 62vh;\n  max-height: 62vh;\n  overflow-y: auto;\n}\n\n.table-container .table-value-outer-container .table-value-container {\n  display: flex;\n  flex-direction: row;\n  text-align: left;\n  border-bottom: 1px solid #ccc;\n}\n\n.table-container .table-value-outer-container .table-value-container .table-value-item {\n  padding: 10px;\n}\n\n.table-container .table-value-outer-container .table-value-container:last-child {\n  border-bottom: none;\n}\n\n.table-container .small {\n  width: 15%;\n}\n\n.table-container .medium {\n  width: 20%;\n}\n\n.table-container .large {\n  width: 30%;\n}\n\n.table-container .align-center {\n  text-align: center;\n}\n\n.table-container .no-records {\n  display: block;\n  text-align: center;\n  padding: 10px;\n  font-size: 14px;\n  font-weight: 600;\n}\n\n.table-container .edit-lead {\n  margin: 0 5px;\n  cursor: pointer;\n  color: #0084f6;\n}\n\n.table-container .delete-lead {\n  margin: 0 5px;\n  cursor: pointer;\n  color: red;\n}\n\n.field-checkbox-wrapper {\n  width: 30px !important;\n  overflow: hidden;\n  background: transparent;\n  box-sizing: border-box;\n  height: 22px !important;\n  padding-left: 25px !important;\n  margin-bottom: 0;\n  margin-left: 5px;\n  background: transparent;\n  border-radius: 1px;\n}\n\n.field-checkbox-wrapper .form-checkbox {\n  opacity: 0;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 22px;\n  height: 22px;\n  z-index: 1;\n  cursor: pointer;\n}\n\n.field-checkbox-wrapper .form-checkbox + label {\n  vertical-align: middle;\n  transition: all 0s;\n  font-size: 14px;\n  display: inline-block;\n}\n\n.field-checkbox-wrapper .form-checkbox + label:after {\n  content: '';\n  width: 19px;\n  height: 19px;\n  border: 2px solid #ccc;\n  border-radius: 2px;\n  position: absolute;\n  left: 0;\n  top: 0;\n  transition: all 0s;\n}\n\n.field-checkbox-wrapper .form-checkbox:checked + label:after {\n  border: 2px solid #0084f6;\n}\n\n.field-checkbox-wrapper .form-checkbox + label:before {\n  transition: all 0s;\n  width: 1px;\n  height: 1px;\n  left: 8px;\n  top: 9px;\n  position: absolute;\n  content: '';\n  border-top: 0;\n  border-right: 0;\n  border-left: 2px solid transparent;\n  border-bottom: 2px solid transparent;\n  transform: rotate(-45deg);\n}\n\n.field-checkbox-wrapper .form-checkbox:checked + label:before {\n  border-left: 2px solid #0084f6;\n  border-bottom: 2px solid #0084f6;\n  width: 12px;\n  height: 7px;\n  left: 3.5px;\n  top: 4px;\n}\n\n.field-checkbox-wrapper .form-checkbox:checked + label {\n  color: #0084f6;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaXR5LWFyZWEtbWFwL2NpdHktYXJlYS1tYXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixpQkFBaUI7QUFDbkI7O0FBTEE7RUFNSSxVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7QUFHdkI7O0FBWkE7RUFXTSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztBQUtqQjs7QUFwQkE7RUFrQk0sc0JBQXNCO0VBQ3RCLFVBQVU7QUFNaEI7O0FBREE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBSXJCOztBQU5BO0VBSUksZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixlQUFlO0FBTW5COztBQUhBO0VBQ0MsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQU1qQjs7QUFSQTtFQUlHLGVBQWU7QUFRbEI7O0FBTEE7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixZQUFZO0FBUWQ7O0FBTEE7RUFDRSxXQUFXO0FBUWI7O0FBTkE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixvQkFBb0I7QUFTdEI7O0FBYkE7RUFNSSxVQUFVO0VBQ1YsY0FBYztBQVdsQjs7QUFsQkE7RUFTTSxzQkFBc0I7RUFDdEIsa0JBQWtCO0FBYXhCOztBQXZCQTtFQWNJLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQWFwQjs7QUFWQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBYXBCOztBQVhBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsV0FBVztBQWNiOztBQWxCQTtFQU1JLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsZUFBZTtBQWdCbkI7O0FBWkE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGdCQUFnQjtBQWVsQjs7QUFsQkE7RUFLSSxzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBaUJwQjs7QUE3QkE7RUFjTSxhQUFhO0FBbUJuQjs7QUFqQ0E7RUFrQkksYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLDhCQUE4QjtFQUM5QiwrQkFBK0I7RUFDL0IsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFtQnBCOztBQTdDQTtFQTRCTSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQiw2QkFBNkI7QUFxQm5DOztBQXBEQTtFQWlDUSxhQUFhO0FBdUJyQjs7QUF4REE7RUFxQ00sbUJBQW1CO0FBdUJ6Qjs7QUE1REE7RUF5Q0ksVUFBVTtBQXVCZDs7QUFoRUE7RUE0Q0ksVUFBVTtBQXdCZDs7QUFwRUE7RUErQ0ksVUFBVTtBQXlCZDs7QUF4RUE7RUFrREksa0JBQWtCO0FBMEJ0Qjs7QUE1RUE7RUFxREksY0FBYztFQUNkLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsZUFBZTtFQUNmLGdCQUFnQjtBQTJCcEI7O0FBcEZBO0VBNERJLGFBQWE7RUFDYixlQUFlO0VBQ2YsY0FBYztBQTRCbEI7O0FBMUZBO0VBaUVJLGFBQWE7RUFDYixlQUFlO0VBQ2YsVUFBVTtBQTZCZDs7QUF2QkU7RUFDSSxzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLDZCQUE2QjtFQUM3QixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixrQkFBa0I7QUEwQnhCOztBQXhCRTtFQUNJLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsT0FBTztFQUNQLE1BQU07RUFDTixXQUFXO0VBQ1gsWUFBWTtFQUNaLFVBQVU7RUFDVixlQUFlO0FBMkJyQjs7QUF6QkU7RUFDSSxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixxQkFBcUI7QUE0QjNCOztBQTFCRTtFQUNJLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxNQUFNO0VBQ04sa0JBQWtCO0FBNkJ4Qjs7QUEzQkU7RUFDSSx5QkFBeUI7QUE4Qi9COztBQTVCRTtFQUNJLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztFQUNYLFNBQVM7RUFDVCxRQUFRO0VBQ1Isa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsZUFBZTtFQUNmLGtDQUFrQztFQUNsQyxvQ0FBb0M7RUFDcEMseUJBQXlCO0FBK0IvQjs7QUE3QkU7RUFDSSw4QkFBOEI7RUFDOUIsZ0NBQWdDO0VBQ2hDLFdBQVc7RUFDWCxXQUFXO0VBQ1gsV0FBVztFQUNYLFFBQVE7QUFnQ2Q7O0FBOUJFO0VBQ0ksY0FBYztBQWlDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NpdHktYXJlYS1tYXAvY2l0eS1hcmVhLW1hcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lZGl0LWNvbnRhaW5lcntcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luLXJpZ2h0OiAyMCU7XG4gIC5lZGl0LWl0ZW17XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAuZWRpdC10aXRsZXtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICB3aWR0aDogMzAlO1xuICAgICAgY29sb3I6IGdyYXk7XG4gICAgfVxuICAgIGlucHV0e1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgIHdpZHRoOiA3MCU7XG4gICAgfVxuICB9XG59XG5cbi5hbGVydC10aXRsZS1jb250YWluZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIC5mYS1leGNsYW1hdGlvbi1jaXJjbGV7XG4gICAgbWFyZ2luLXRvcDogMXB4O1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxufVxuLm1zZy1jb250YWluZXJ7XG4gdGV4dC1hbGlnbjogbGVmdDtcbiBmb250LXdlaWdodDogNjAwO1xuIHNwYW57XG4gICBmb250LXNpemU6IDE0cHg7XG4gfVxufVxuLmRlbGV0ZS1idG57XG4gIGJhY2tncm91bmQ6ICNkOTUzNGY7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubWlkZGxlLXNlY3Rpb24ge1xuICBwYWRkaW5nOiAxJTtcbn1cbi5maWx0ZXItY29udGFpbmVye1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIC5maWx0ZXItaXRlbXtcbiAgICB3aWR0aDogMTUlO1xuICAgIG1hcmdpbjogMHB4IDElO1xuICAgIC5mb3JtLWN0cmx7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIH1cbiAgfVxuICAuc2VhcmNoLWJ0bntcbiAgICBiYWNrZ3JvdW5kOiAjMDA4NGY2O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiA2cHggMTBweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDA4NGY2O1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbn1cbi5hZGQtc3R1ZGVudC1idG57XG4gIGJhY2tncm91bmQ6ICMwMDg0ZjY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogNnB4IDEwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDg0ZjY7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5zZWFyY2gtYW5kLWNyZWF0ZS1maWx0ZXItY29udGFpbmVye1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICB3aWR0aDogMTAwJTtcbiAgLnNlYXJjaC1ib3h7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiNGI2YmQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgcGFkZGluZzogMCAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxufVxuXG4udGFibGUtY29udGFpbmVye1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICAudGFibGUtaGVhZGVyLWNvbnRhaW5lcntcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDRweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBiYWNrZ3JvdW5kOiAjZTBlYWVjO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAuaGVhZGVyLWl0ZW17XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgIH1cbiAgfVxuICAudGFibGUtdmFsdWUtb3V0ZXItY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNHB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA0cHg7XG4gICAgbWluLWhlaWdodDogNjJ2aDtcbiAgICBtYXgtaGVpZ2h0OiA2MnZoO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgLnRhYmxlLXZhbHVlLWNvbnRhaW5lcntcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICAgICAgLnRhYmxlLXZhbHVlLWl0ZW17XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICB9XG4gICAgfVxuICAgIC50YWJsZS12YWx1ZS1jb250YWluZXI6bGFzdC1jaGlsZHtcbiAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgfVxuICB9XG4gIC5zbWFsbHtcbiAgICB3aWR0aDogMTUlO1xuICB9XG4gIC5tZWRpdW17XG4gICAgd2lkdGg6IDIwJTtcbiAgfVxuICAubGFyZ2V7XG4gICAgd2lkdGg6IDMwJTtcbiAgfVxuICAuYWxpZ24tY2VudGVye1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAubm8tcmVjb3Jkc3tcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgfVxuICAuZWRpdC1sZWFke1xuICAgIG1hcmdpbjogMCA1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiAjMDA4NGY2O1xuICB9XG4gIC5kZWxldGUtbGVhZHtcbiAgICBtYXJnaW46IDAgNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogcmVkO1xuICB9XG59XG5cblxuXG4gIC5maWVsZC1jaGVja2JveC13cmFwcGVyIHtcbiAgICAgIHdpZHRoOiAzMHB4ICFpbXBvcnRhbnQ7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgaGVpZ2h0OiAyMnB4ICFpbXBvcnRhbnQ7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDI1cHggIWltcG9ydGFudDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICBib3JkZXItcmFkaXVzOiAxcHg7XG4gIH1cbiAgLmZpZWxkLWNoZWNrYm94LXdyYXBwZXIgLmZvcm0tY2hlY2tib3gge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB0b3A6IDA7XG4gICAgICB3aWR0aDogMjJweDtcbiAgICAgIGhlaWdodDogMjJweDtcbiAgICAgIHotaW5kZXg6IDE7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgLmZpZWxkLWNoZWNrYm94LXdyYXBwZXIgLmZvcm0tY2hlY2tib3grbGFiZWwge1xuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwcztcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuICAuZmllbGQtY2hlY2tib3gtd3JhcHBlciAuZm9ybS1jaGVja2JveCtsYWJlbDphZnRlciB7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIHdpZHRoOiAxOXB4O1xuICAgICAgaGVpZ2h0OiAxOXB4O1xuICAgICAgYm9yZGVyOiAycHggc29saWQgI2NjYztcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB0b3A6IDA7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMHM7XG4gIH1cbiAgLmZpZWxkLWNoZWNrYm94LXdyYXBwZXIgLmZvcm0tY2hlY2tib3g6Y2hlY2tlZCtsYWJlbDphZnRlciB7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjMDA4NGY2O1xuICB9XG4gIC5maWVsZC1jaGVja2JveC13cmFwcGVyIC5mb3JtLWNoZWNrYm94K2xhYmVsOmJlZm9yZSB7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMHM7XG4gICAgICB3aWR0aDogMXB4O1xuICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICBsZWZ0OiA4cHg7XG4gICAgICB0b3A6IDlweDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgYm9yZGVyLXRvcDogMDtcbiAgICAgIGJvcmRlci1yaWdodDogMDtcbiAgICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICB9XG4gIC5maWVsZC1jaGVja2JveC13cmFwcGVyIC5mb3JtLWNoZWNrYm94OmNoZWNrZWQrbGFiZWw6YmVmb3JlIHtcbiAgICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzAwODRmNjtcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDA4NGY2O1xuICAgICAgd2lkdGg6IDEycHg7XG4gICAgICBoZWlnaHQ6IDdweDtcbiAgICAgIGxlZnQ6IDMuNXB4O1xuICAgICAgdG9wOiA0cHg7XG4gIH1cbiAgLmZpZWxkLWNoZWNrYm94LXdyYXBwZXIgLmZvcm0tY2hlY2tib3g6Y2hlY2tlZCtsYWJlbCB7XG4gICAgICBjb2xvcjogIzAwODRmNjtcbiAgfVxuIl19 */");

/***/ }),

/***/ "./src/app/components/city-area-map/city-area-map.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/city-area-map/city-area-map.component.ts ***!
  \*********************************************************************/
/*! exports provided: CityAreaMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityAreaMapComponent", function() { return CityAreaMapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_message_show_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/message-show.service */ "./src/app/services/message-show.service.ts");
/* harmony import */ var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/authenticator.service */ "./src/app/services/authenticator.service.ts");
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




let CityAreaMapComponent = /** @class */ (() => {
    let CityAreaMapComponent = class CityAreaMapComponent {
        constructor(msgService, httpService, auth) {
            this.msgService = msgService;
            this.httpService = httpService;
            this.auth = auth;
            // global variables
            this.jsonFlag = {
                isProfessional: false,
                institute_id: ''
            };
            this.filter = {
                country_ids: "-1",
                state_ids: "-1",
                city_ids: "-1",
                is_active: true
            };
            this.editAreaName = '';
            this.editIsActiveStatus = true;
            this.countryStateAreaList = [];
            this.countryList = [];
            this.stateList = [];
            this.cityList = [];
            this.tempArealist = [];
            this.addArea = false;
            this.deleteAreaId = '';
            this.selectedData = {
                country: '',
                state: '',
                city: ''
            };
            // FOR PAGINATION
            this.pageIndex = 1;
            this.displayBatchSize = 100;
            this.totalCount = 0;
            this.sizeArr = [20, 50, 100, 150, 200, 500];
            this.startindex = 0;
            this.jsonFlag.institute_id = sessionStorage.getItem('institution_id');
        }
        ngOnInit() {
            this.getCountryList();
            this.searchArea();
        }
        // get all country list
        getCountryList() {
            let defaultCountryList = sessionStorage.getItem('country_data');
            this.countryList = JSON.parse(defaultCountryList);
            let defaultCountry = this.countryList.filter(item => Object.keys(item).some(k => item.is_default == 'Y'));
            this.filter.country_ids = defaultCountry[0].id; //  set default country ID
            this.getStateList();
        }
        // get state list as per country selection
        getStateList() {
            this.stateList = [];
            this.cityList = [];
            this.filter.state_ids = '-1';
            this.filter.city_ids = '-1'; // reset state and city once Country change
            const url = `/api/v1/country/state?country_ids=${this.filter.country_ids}`;
            this.auth.showLoader();
            this.httpService.getData(url).subscribe((res) => {
                this.auth.hideLoader();
                if (res.result.length > 0) {
                    this.stateList = res.result[0].stateList;
                }
            }, err => {
                this.auth.hideLoader();
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err);
            });
        }
        // get city list as per state selection
        getCityList() {
            this.cityList = [];
            this.filter.city_ids = '-1';
            const url = `/api/v1/country/city?state_ids=${this.filter.state_ids}`;
            this.auth.showLoader();
            this.httpService.getData(url).subscribe((res) => {
                this.auth.hideLoader();
                if (res.result.length > 0) {
                    this.cityList = res.result[0].cityList;
                }
            }, err => {
                this.auth.hideLoader();
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err);
            });
        }
        searchArea() {
            this.countryStateAreaList = [];
            let is_active_status = this.filter.is_active ? 'Y' : 'N';
            const url = `/api/v1/cityArea/area/view/${this.jsonFlag.institute_id}?country_ids=${this.filter.country_ids}&state_ids=${this.filter.state_ids}&city_ids=${this.filter.city_ids}&is_active=${is_active_status}`;
            this.auth.showLoader();
            this.httpService.getData(url).subscribe((res) => {
                this.auth.hideLoader();
                this.countryStateAreaList = res.result;
                this.tempArealist = res.result;
            }, err => {
                this.auth.hideLoader();
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please check your internet connection or contact at support@proctur.com if the issue persist');
            });
        }
        searchDatabase() {
            this.countryStateAreaList = this.tempArealist;
            if (this.areaSearchInput == undefined || this.areaSearchInput == null) {
                this.areaSearchInput = "";
            }
            else {
                this.countryStateAreaList = this.tempArealist.filter(item => Object.keys(item).some(k => item[k] != null && item[k].toString().toLowerCase().includes(this.areaSearchInput.toLowerCase())));
            }
        }
        editArea(record) {
            this.editrecord = record;
            this.editAreaName = this.editrecord.area;
            this.editIsActiveStatus = (this.editrecord.is_active == 'Y') ? true : false;
        }
        updateArea() {
            // use trim
            if (this.editAreaName.trim().length > 0) {
                let obj = {
                    "area": this.editAreaName,
                    "main_branch_instId": this.jsonFlag.institute_id,
                    "city_id": this.editrecord.city_id,
                    "is_active": 'Y'
                };
                obj.is_active = this.editIsActiveStatus ? 'Y' : 'N';
                const url = `/api/v1/cityArea/area/update/${this.editrecord.id}`;
                this.auth.showLoader();
                this.httpService.putData(url, obj).subscribe((res) => {
                    this.auth.hideLoader();
                    this.editAreaName = '';
                    this.editIsActiveStatus = true;
                    this.msgService.showErrorMessage(this.msgService.toastTypes.success, '', res.message);
                    $('#editCityArea').modal('hide');
                    this.searchArea();
                }, err => {
                    this.auth.hideLoader();
                    this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err);
                });
            }
            else {
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please enter Area name');
            }
        }
        setDeleteAreaId(areaId) {
            this.deleteAreaId = areaId;
        }
        deleteArea() {
            const url = `/api/v1/cityArea/area/delete/${this.jsonFlag.institute_id}/${this.deleteAreaId}`;
            this.auth.showLoader();
            this.httpService.deleteData(url, null).subscribe((res) => {
                this.auth.hideLoader();
                this.msgService.showErrorMessage(this.msgService.toastTypes.success, '', res.message);
                this.deleteAreaId = '';
                $('#deleteModal').modal('hide');
                this.searchArea();
            }, err => {
                this.auth.hideLoader();
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err.error.message);
            });
        }
        toggleAddArea() {
            if (this.addArea) {
                this.addArea = false;
            }
            else {
                this.addArea = true;
                this.selectedData.country = this.filter.country_ids;
                this.selectedData.state = this.filter.state_ids;
                this.selectedData.city = this.filter.city_ids;
            }
        }
    };
    CityAreaMapComponent.ctorParameters = () => [
        { type: _services_message_show_service__WEBPACK_IMPORTED_MODULE_2__["MessageShowService"] },
        { type: _services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] },
        { type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"] }
    ];
    CityAreaMapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-city-area-map',
            template: __importDefault(__webpack_require__(/*! raw-loader!./city-area-map.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/city-area-map/city-area-map.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./city-area-map.component.scss */ "./src/app/components/city-area-map/city-area-map.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_services_message_show_service__WEBPACK_IMPORTED_MODULE_2__["MessageShowService"],
            _services_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"],
            _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"]])
    ], CityAreaMapComponent);
    return CityAreaMapComponent;
})();



/***/ }),

/***/ "./src/app/components/class-room/class-room.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/class-room/class-room.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* ===============================header colors=======================*/\n.table-format-first .table-responsive table th,\n.table-format-first .table-responsive table td {\n  text-align: center;\n  padding: 10px 5px;\n}\n.table-format-first .table-responsive table th {\n  text-transform: capitalize;\n  font-size: 14px;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper {\n  display: inline-block;\n  overflow: initial;\n  margin-left: 0;\n  width: auto;\n  position: relative;\n  background: transparent;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox {\n  z-index: 2;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label {\n  font-size: 16px;\n  margin-left: 7px;\n  font-weight: 600;\n  vertical-align: middle;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:after, .table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:before {\n  z-index: 1;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper:after {\n  content: '';\n  width: 20px;\n  height: 20px;\n  background: #fff;\n  left: 0;\n  top: 0;\n  position: absolute;\n}\n.table-format-first .table-responsive table tbody tr td .fa-trash-o {\n  color: #f44336;\n  font-size: 20px;\n}\n.table-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-top: 10px;\n}\n.table-container .heading-container {\n  background: #e0eaec;\n  display: flex;\n  flex-direction: row;\n  font-size: 14px;\n  font-weight: 600;\n  text-align: left;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n}\n.table-container .heading-container .heading-item {\n  width: 10%;\n  text-align: center;\n}\n.table-container .value-outer-container {\n  display: flex;\n  flex-direction: column;\n  min-height: 53vh;\n  max-height: 54vh;\n  overflow-x: hidden;\n  overflow-y: auto;\n  border: 1px solid #ccc;\n}\n.table-container .value-outer-container .value-container {\n  display: flex;\n  flex-direction: row;\n  text-align: left;\n  padding: 4px;\n  font-size: 12px;\n  border-bottom: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n  border-top: none;\n}\n.table-container .value-outer-container .value-container .value-item {\n  width: 10%;\n  text-align: center;\n}\ntable thead tr th {\n  padding-bottom: 10px;\n  padding-top: 10px;\n}\ntable tbody tr td {\n  padding-bottom: 10px;\n  padding-top: 10px;\n}\ntable tbody tr td .editOptions li {\n  display: inline-block;\n}\ntable tbody tr .field-wrapper {\n  padding: 0px !important;\n}\ntable tbody tr .field-wrapper .form-ctrl {\n  display: block;\n  box-sizing: border-box;\n  padding: 0px 0px 0px 5px;\n  outline: none;\n  border: 0;\n  height: 26px;\n  box-shadow: none;\n  border-radius: 0;\n  line-height: 25px;\n  background: transparent;\n  width: 60%;\n  text-align: center;\n  border-bottom: 1px solid #ccc;\n}\ntable tbody .displayComp .edit-comp {\n  display: none;\n}\ntable tbody .editComp .view-comp {\n  display: none;\n}\n.anchorTagCursor {\n  cursor: pointer;\n}\n.astrick {\n  color: red;\n}\n@media screen and (max-width: 995px), screen and (max-height: 768px) {\n  #divSlotTable {\n    margin-left: 0px !important;\n    margin-top: 15px;\n    margin-right: 15px !important;\n    max-height: 480px;\n    overflow: hidden;\n    width: 100%;\n  }\n  #divSlotTable .table-scroll-wrapper {\n    max-height: 430px;\n  }\n  #divSlotTable ::-webkit-scrollbar {\n    display: block;\n    width: 7px;\n    height: 7px;\n  }\n}\n.middle-section {\n  padding: 1%;\n  width: 100%;\n  box-sizing: border-box;\n}\n.add-edit {\n  margin-bottom: 15px;\n  margin-top: 25px;\n}\n.add-edit i {\n  border: 1px solid #0084f6;\n  display: inline-block;\n  width: 17px;\n  height: 17px;\n  border-radius: 50%;\n  line-height: 16px;\n  text-align: center;\n  font-size: 17px;\n  vertical-align: middle;\n  margin-right: 4px;\n}\n.add-edit span {\n  display: inline-block;\n  margin-bottom: 0px;\n}\n.add-edit .expend-box i {\n  line-height: 12px;\n  font-size: 14px;\n}\n.add-edit a {\n  cursor: pointer;\n}\n.create-standard-form {\n  margin: -18px 0;\n  padding-left: 20px;\n  margin-bottom: -10px;\n  background: #efefef;\n  border-top: 1px solid #d8d8d8;\n}\n.create-standard-form .form-ctrl {\n  background: transparent;\n  border-bottom: solid 1px #cccccc;\n}\n.closeBtnClass {\n  line-height: 11px !important;\n}\n.editCellInput {\n  margin: auto;\n  display: block;\n}\n.pull-right {\n  margin-left: 122px;\n}\n.grid-container {\n  display: grid;\n  grid-column-gap: -80px;\n  grid-template-columns: auto auto auto;\n  padding: 10px;\n}\n.btnclass {\n  margin-top: 13px;\n  margin-bottom: 10px;\n  margin-right: 74%;\n}\n.marginhead {\n  margin-bottom: -16px;\n}\n.row.field {\n  display: flex;\n  margin-bottom: 1em;\n}\nform {\n  margin: 0.9em 0;\n}\n.search-filter-wrapper {\n  margin: 10px 5px 10px 5px;\n  float: right;\n}\n.search-filter-wrapper .search-field {\n  font-size: 12px;\n  padding: 7px 10px;\n  width: 200px;\n  box-sizing: border-box;\n  float: right;\n  height: 35px;\n  font-size: 14px;\n}\n.filter-box {\n  padding: 0px 0px;\n  margin-bottom: 5px;\n}\n.btn-sms-search {\n  margin-top: 35px;\n  text-align: center;\n  margin-left: 280px;\n  width: 100%;\n}\n.search-filter-wrapper .normal-field {\n  padding: 7px 10px;\n  border: 1px solid #ccc;\n  box-sizing: border-box;\n  margin-right: 10px;\n  margin-bottom: 5px;\n  height: 35px;\n  font-size: 14px;\n  margin-left: 229px;\n}\n.btn-sms-search {\n  margin-top: 35px;\n  text-align: center;\n  margin-left: 280px;\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY3NzL2NvbW1vbi92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jbGFzcy1yb29tL2NsYXNzLXJvb20uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWUEsdUVBQUE7QUFXQTs7RUFLZ0Isa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQ3hCakM7QURrQkE7RUFTZ0IsMEJBQTBCO0VBQzFCLGVBQWU7QUN2Qi9CO0FEYUE7RUFnQjRCLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsdUJBQXVCO0FDekJuRDtBRElBO0VBdUJnQyxVQUFVO0FDdkIxQztBREFBO0VBMEJnQyxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixzQkFBc0I7QUN0QnREO0FEUEE7RUFnQ29DLFVBQVU7QUNyQjlDO0FEWEE7RUFvQ2dDLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixPQUFPO0VBQ1AsTUFBTTtFQUNOLGtCQUFrQjtBQ3JCbEQ7QURyQkE7RUE4QzRCLGNBbERiO0VBbURhLGVBQWU7QUNyQjNDO0FEOEJBO0VBQ0ksYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsZ0JBQWdCO0FDM0JwQjtBRHVCQTtFQU1NLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLHlCQUF5QjtBQ3pCL0I7QURVQTtFQWlCUSxVQUFVO0VBQ1Ysa0JBQWtCO0FDdkIxQjtBREtBO0VBc0JNLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtBQ3ZCNUI7QURMQTtFQThCUSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZUFBZTtFQUNmLDZCQUE2QjtFQUM3QixvQkFBb0I7RUFDcEIseUJBQXlCO0VBQ3pCLGdCQUFnQjtBQ3JCeEI7QURqQkE7RUF3Q1UsVUFBVTtFQUNWLGtCQUFrQjtBQ25CNUI7QUFwR0E7RUFJZ0Isb0JBQW9CO0VBQ3BCLGlCQUFpQjtBQW9HakM7QUF6R0E7RUFZZ0Isb0JBQW9CO0VBQ3BCLGlCQUFpQjtBQWlHakM7QUE5R0E7RUFlb0IscUJBQXFCO0FBbUd6QztBQWxIQTtFQW1CZ0IsdUJBQXVCO0FBbUd2QztBQXRIQTtFQXFCb0IsY0FBYztFQUNkLHNCQUFzQjtFQUN0Qix3QkFBd0I7RUFDeEIsYUFBYTtFQUNiLFNBQVM7RUFDVCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsNkJBQTZCO0FBcUdqRDtBQXRJQTtFQXdDZ0IsYUFDSjtBQWlHWjtBQTFJQTtFQTZDZ0IsYUFDSjtBQWdHWjtBQTFGQTtFQUNJLGVBQWU7QUE2Rm5CO0FBM0ZBO0VBQ0ksVUFBVTtBQThGZDtBQTVGQTtFQUVJO0lBQ0ksMkJBQTJCO0lBQzNCLGdCQUFnQjtJQUNoQiw2QkFBNkI7SUFDN0IsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixXQUFXO0VBOEZqQjtFQXBHRTtJQVFRLGlCQUFpQjtFQStGM0I7RUF2R0U7SUFXUSxjQUFjO0lBQ2QsVUFBVTtJQUNWLFdBQVc7RUErRnJCO0FBQ0Y7QUEzRkE7RUFDSSxXQUFXO0VBQ1gsV0FBVztFQUNYLHNCQUFzQjtBQThGMUI7QUEzRkE7RUFDSSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBOEZwQjtBQWhHQTtFQUlRLHlCRGpGYTtFQ2tGYixxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLGlCQUFpQjtBQWdHekI7QUE3R0E7RUFnQlEscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQWlHMUI7QUFsSEE7RUFxQlksaUJBQWlCO0VBQ2pCLGVBQWU7QUFpRzNCO0FBdkhBO0VBMEJRLGVBQWU7QUFpR3ZCO0FBN0ZBO0VBQ0ksZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLDZCQUE2QjtBQWdHakM7QUFyR0E7RUFPUSx1QkFBdUI7RUFDdkIsZ0NBQWdDO0FBa0d4QztBQTlGQTtFQUNJLDRCQUE0QjtBQWlHaEM7QUE5RkE7RUFDSSxZQUFZO0VBQ1osY0FBYztBQWlHbEI7QUE5RkE7RUFFSSxrQkFBa0I7QUFnR3RCO0FBN0ZBO0VBQ0ksYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixxQ0FBcUM7RUFDckMsYUFBYTtBQWdHakI7QUE3RkE7RUFDSSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQWdHckI7QUE3RkE7RUFDSSxvQkFBb0I7QUFnR3hCO0FBOUZBO0VBSUksYUFBYTtFQUVmLGtCQUFrQjtBQTZGcEI7QUF6RkE7RUFDSSxlQUFjO0FBNEZsQjtBQXpGQTtFQUNJLHlCQUF5QjtFQUN6QixZQUFZO0FBNEZoQjtBQTlGQTtFQUlRLGVBQWM7RUFDZCxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWU7QUE4RnZCO0FBM0ZBO0VBQ0ksZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQThGdEI7QUExRkE7RUFDSSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixXQUNKO0FBNEZBO0FBMUZBO0VBR1EsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQjtBQTJGMUI7QUF2RkE7RUFDSSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixXQUNKO0FBeUZBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jbGFzcy1yb29tL2NsYXNzLXJvb20uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkcHVsbC1MOiBsZWZ0O1xuJHB1bGwtUjogcmlnaHQ7XG4kcHVsbC1ub25lOiBub25lO1xuJGZ1bGwtd2lkdGg6IDEwMCU7XG4kYm9yZGVyLWJveDogYm9yZGVyLWJveDtcbiRib3JkZXItY29sb3I6ICNkZWVhZWU7XG4kYmctd2hpdGU6ICNmZmY7XG4kZXJyb3ItY29sb3I6ICNmZjAwMDA7XG4kY29tbW9uLWJsdWU6ICMwMDg0ZjY7XG4kcHJpbWFyeS1jb2xvcjogIzMzMztcbiRib3JkZXItY29tbW9uOiNlYWVhZWI7XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1oZWFkZXIgY29sb3JzPT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4kaGVhZGVyLWJnOiMwMDYwQTM7XG4kaGVhZGVyLWJvcmRlcjojZWFlYWViO1xuJGxlZnRNZW51Qmc6I2ZhZmFmYTtcbiRsZWZ0TWVudUhvdmVyQmc6IzAwODRmNjtcbiRsZWZ0TWVudVRleHRIb3ZlckNvbG9yOiNmZmY7XG4kcmVkQnRuOiNmNDQzMzY7XG4kYm9yZGVyY2NjOiNjY2M7XG4kbGlnaHRCbHVlOiNlZmY3ZmY7XG4kdGFibGVIZWFkaW5nQmdDb2xvcjogIzAwNGE3ZTtcbi50YWJsZS1mb3JtYXQtZmlyc3Qge1xuICAgIC50YWJsZS1yZXNwb25zaXZlIHtcbiAgICAgICAgdGFibGUge1xuICAgICAgICAgICAgdGgsXG4gICAgICAgICAgICB0ZCB7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGgge1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRib2R5IHtcbiAgICAgICAgICAgICAgICB0ciB7XG4gICAgICAgICAgICAgICAgICAgIHRkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maWVsZC1jaGVja2JveC13cmFwcGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGluaXRpYWw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mb3JtLWNoZWNrYm94IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZvcm0tY2hlY2tib3grbGFiZWwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA3cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6YWZ0ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuZmEtdHJhc2gtbyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRyZWRCdG47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4udGFibGUtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAuaGVhZGluZy1jb250YWluZXIge1xuICAgICAgYmFja2dyb3VuZDogI2UwZWFlYztcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICAgIC5oZWFkaW5nLWl0ZW0ge1xuICAgICAgICB3aWR0aDogMTAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgfVxuICAgIC52YWx1ZS1vdXRlci1jb250YWluZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBtaW4taGVpZ2h0OiA1M3ZoO1xuICAgICAgbWF4LWhlaWdodDogNTR2aDtcbiAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgLnZhbHVlLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgICAgIC52YWx1ZS1pdGVtIHtcbiAgICAgICAgICB3aWR0aDogMTAlO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSIsIkBpbXBvcnQgXCIuL3NyYy9hc3NldHMvY3NzL2NvbW1vbi92YXJpYWJsZXMuc2Nzc1wiO1xudGFibGUge1xuICAgIHRoZWFkIHtcbiAgICAgICAgdHIge1xuICAgICAgICAgICAgdGgge1xuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHRib2R5IHtcbiAgICAgICAgdHIge1xuICAgICAgICAgICAgdGQge1xuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICAgICAgICAgIC5lZGl0T3B0aW9ucyBsaSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZmllbGQtd3JhcHBlciB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgLmZvcm0tY3RybCB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggMHB4IDBweCA1cHg7XG4gICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNnB4O1xuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5kaXNwbGF5Q29tcCB7XG4gICAgICAgICAgICAudmlldy1jb21wIHt9XG4gICAgICAgICAgICAuZWRpdC1jb21wIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmVkaXRDb21wIHtcbiAgICAgICAgICAgIC52aWV3LWNvbXAge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5lZGl0LWNvbXAge31cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmFuY2hvclRhZ0N1cnNvciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmFzdHJpY2t7XG4gICAgY29sb3I6IHJlZDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5NXB4KSxcbnNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDc2OHB4KSB7XG4gICAgI2RpdlNsb3RUYWJsZSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIG1heC1oZWlnaHQ6IDQ4MHB4O1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgLnRhYmxlLXNjcm9sbC13cmFwcGVyIHtcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDQzMHB4O1xuICAgICAgICB9XG4gICAgICAgIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB3aWR0aDogN3B4O1xuICAgICAgICAgICAgaGVpZ2h0OiA3cHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5taWRkbGUtc2VjdGlvbiB7XG4gICAgcGFkZGluZzogMSU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmFkZC1lZGl0IHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgaSB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRjb21tb24tYmx1ZTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB3aWR0aDogMTdweDtcbiAgICAgICAgaGVpZ2h0OiAxN3B4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gICAgfVxuICAgIHNwYW4ge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICB9XG4gICAgLmV4cGVuZC1ib3gge1xuICAgICAgICBpIHtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMnB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIGEge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxufVxuXG4uY3JlYXRlLXN0YW5kYXJkLWZvcm0ge1xuICAgIG1hcmdpbjogLTE4cHggMDtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogLTEwcHg7XG4gICAgYmFja2dyb3VuZDogI2VmZWZlZjtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2Q4ZDhkODtcbiAgICAuZm9ybS1jdHJsIHtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjY2NjY2NjO1xuICAgIH1cbn1cblxuLmNsb3NlQnRuQ2xhc3Mge1xuICAgIGxpbmUtaGVpZ2h0OiAxMXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5lZGl0Q2VsbElucHV0IHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5wdWxsLXJpZ2h0IHtcbiAgICAvLyBtYXJnaW4tdG9wOiAyNnB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMjJweDtcbn1cblxuLmdyaWQtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtY29sdW1uLWdhcDogLTgwcHg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gYXV0bztcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uYnRuY2xhc3Mge1xuICAgIG1hcmdpbi10b3A6IDEzcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDc0JTtcbn1cblxuLm1hcmdpbmhlYWQge1xuICAgIG1hcmdpbi1ib3R0b206IC0xNnB4O1xufVxuLnJvd3tcblxuJi5maWVsZHtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gLy8gZmxleC1mbG93OiBjb2x1bW4tcmV2ZXJzZTtcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xufVxufVxuXG5mb3Jte1xuICAgIG1hcmdpbjowLjllbSAwO1xufVxuXG4uc2VhcmNoLWZpbHRlci13cmFwcGVyIHtcbiAgICBtYXJnaW46IDEwcHggNXB4IDEwcHggNXB4O1xuICAgIGZsb2F0OiByaWdodDtcbiAgICAuc2VhcmNoLWZpZWxkIHtcbiAgICAgICAgZm9udC1zaXplOjEycHg7XG4gICAgICAgIHBhZGRpbmc6IDdweCAxMHB4O1xuICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxufVxuLmZpbHRlci1ib3gge1xuICAgIHBhZGRpbmc6IDBweCAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuXG59XG5cbi5idG4tc21zLXNlYXJjaCB7XG4gICAgbWFyZ2luLXRvcDogMzVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IDI4MHB4O1xuICAgIHdpZHRoOiAxMDAlXG59XG5cbi5zZWFyY2gtZmlsdGVyLXdyYXBwZXIge1xuICAgIC8vIG1hcmdpbi10b3A6IC01MXB4O1xuICAgIC5ub3JtYWwtZmllbGQge1xuICAgICAgICBwYWRkaW5nOiA3cHggMTBweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYzsgLy8gd2lkdGg6IDEzMHB4O1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMjlweDtcbiAgICB9XG59XG5cbi5idG4tc21zLXNlYXJjaCB7XG4gICAgbWFyZ2luLXRvcDogMzVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IDI4MHB4O1xuICAgIHdpZHRoOiAxMDAlXG59XG5cbi8vIC5zZWFyY2gtZmlsdGVyLXdyYXBwZXIge1xuLy8gICAgIG1hcmdpbi10b3A6IDEwcHg7XG4vLyAgICAgLm5vcm1hbC1maWVsZCB7XG4vLyAgICAgICAgIHBhZGRpbmc6IDdweCAxMHB4O1xuLy8gICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjOyAvLyB3aWR0aDogMTMwcHg7XG4vLyAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4vLyAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbi8vICAgICAgICAgbWFyZ2luLWJvdHRvbTogLTVweDtcbi8vICAgICAgICAgaGVpZ2h0OiAzNXB4O1xuLy8gICAgICAgICBmb250LXNpemU6IDE0cHg7XG4vLyAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMjlweDtcbi8vICAgICB9XG4iXX0= */");

/***/ }),

/***/ "./src/app/components/class-room/class-room.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/class-room/class-room.component.ts ***!
  \***************************************************************/
/*! exports provided: ClassRoomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassRoomComponent", function() { return ClassRoomComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_class_roomService_class_roomlist_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/class-roomService/class-roomlist.service */ "./src/app/services/class-roomService/class-roomlist.service.ts");
/* harmony import */ var _services_login_services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/login-services/login.service */ "./src/app/services/login-services/login.service.ts");
/* harmony import */ var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/authenticator.service */ "./src/app/services/authenticator.service.ts");
/* harmony import */ var _services_message_show_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/message-show.service */ "./src/app/services/message-show.service.ts");
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





let ClassRoomComponent = /** @class */ (() => {
    let ClassRoomComponent = class ClassRoomComponent {
        constructor(ClassList, login, auth, msgService) {
            this.ClassList = ClassList;
            this.login = login;
            this.auth = auth;
            this.msgService = msgService;
            this.pagedclassRoomData = [];
            this.addClasslistData = [];
            this.saveclassListData = [];
            this.updateclassListData = [];
            this.classRoomData = [];
            this.searchData = [];
            this.enterclassdataDesc = "";
            this.enterclassdata = "";
            this.searchText = "";
            this.tempIndex = "";
            this.pageIndex = 1;
            this.displayBatchSize = 10;
            this.totalRow = 0;
            this.updateFlag = false;
            this.CreateNewList = false;
            this.searchflag = false;
            this.editFlag = false;
            this.removeFullscreen();
            this.removeSelectionFromSideNav();
            this.login.changeInstituteStatus(sessionStorage.getItem('institute_name'));
            this.login.changeNameStatus(sessionStorage.getItem('name'));
        }
        ngOnInit() {
            this.auth.institute_type.subscribe(res => {
                if (res == "LANG") {
                    this.isProfessional = true;
                }
                else {
                    this.isProfessional = false;
                }
            });
            this.getClassList();
        }
        /*=========================fetching class list========================================
        ====================================================================================== */
        getClassList() {
            this.ClassList.fetchClassList().subscribe((res) => {
                this.classRoomData = res;
                this.totalRow = res.length;
                this.fetchTableDataByPage(this.pageIndex);
            }),
                err => {
                };
        }
        /*=====================================================================================
        ======================================================================================*/
        editRowTable(row, index) {
            if (this.editFlag) {
                this.pagedclassRoomData[this.tempIndex] = this.tempObj;
                console.log(this.pagedclassRoomData[this.tempIndex]);
                document.getElementById(("row" + this.tempIndex).toString()).classList.remove('editComp');
                document.getElementById(("row" + this.tempIndex).toString()).classList.add('displayComp');
            }
            else {
                this.editFlag = true;
            }
            this.tempIndex = index;
            console.log(this.tempIndex);
            this.tempObj = Object.assign({}, row);
            console.log(this.tempObj);
            document.getElementById(("row" + index).toString()).classList.remove('displayComp');
            document.getElementById(("row" + index).toString()).classList.add('editComp');
        }
        /*===================================(+)(-)====================================
        =============================================================================== */
        toggleCreateNewList() {
            if (this.CreateNewList == false) {
                this.CreateNewList = true;
                document.getElementById('showCloseBtn').style.display = '';
                document.getElementById('showAddBtn').style.display = 'none';
            }
            else {
                this.CreateNewList = false;
                document.getElementById('showCloseBtn').style.display = 'none';
                document.getElementById('showAddBtn').style.display = '';
            }
        }
        /*====================================adding new class room=======================
        ================================================================================= */
        addNewclassRoom(Room_ele, Desc_ele) {
            if (Room_ele != "" && Desc_ele != "" && Room_ele != null && Desc_ele != null) {
                let classRoomobj = {
                    class_room_desc: Desc_ele,
                    class_room_name: Room_ele
                };
                for (var i = 0; i < this.classRoomData.length; i++) {
                    if (this.classRoomData[i].class_room_name == classRoomobj.class_room_name) {
                        this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Duplicate Entries are not Allowed');
                        return;
                    }
                }
                if (Desc_ele.length > 500) {
                    this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Description should not be greater than 500 Characters');
                    return;
                }
                this.ClassList.saveClassroomDetail(classRoomobj).subscribe(data => {
                    this.msgService.showErrorMessage(this.msgService.toastTypes.success, "Added", 'ClassRoom Added Successfully');
                    this.getClassList();
                    this.enterclassdata = "";
                    this.enterclassdataDesc = "";
                    this.toggleCreateNewList();
                }, error => {
                    this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', error.error.message);
                });
            }
            else {
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please fill Mandatory Fields');
                this.enterclassdata = "";
                this.enterclassdataDesc = "";
                return;
            }
        }
        /*===================================saving classroom info========================
        ================================================================================= */
        saveclassRoomInfo(row, index) {
            let data = {
                class_room_name: row.class_room_name,
                class_room_desc: row.class_room_desc,
                class_room_id: row.class_room_id,
            };
            for (var j = 0; j < this.classRoomData.length; j++) {
                if (j == index) {
                    continue;
                }
                else if (this.classRoomData[j].class_room_name === row.class_room_name) {
                    this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Duplicate Entries are not Allowed');
                    return;
                }
            }
            if (data.class_room_name != "" && data.class_room_name != null && data.class_room_desc != "" && data.class_room_desc != null) {
                if (data.class_room_desc.length > 500) {
                    this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Description should not be greater than 500');
                    return;
                }
                this.ClassList.updateclassListData(data).subscribe(res => {
                    this.msgService.showErrorMessage(this.msgService.toastTypes.success, "Updated", 'ClassRoom Updated Successfully');
                    this.editFlag = false;
                    this.tempIndex = "";
                    this.tempObj = null;
                    this.getClassList();
                }, err => {
                });
            }
            else {
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please fill classRoom name and Description');
            }
        }
        /*===================================Search============================================ */
        searchDatabase() {
            if (this.searchText != "" && this.searchText != null) {
                this.pageIndex = 1;
                let searchRes;
                searchRes = this.classRoomData.filter(item => Object.keys(item).some(k => item[k] != null && item[k].toString().toLowerCase().includes(this.searchText.toLowerCase())));
                this.searchData = searchRes;
                this.totalRow = searchRes.length;
                this.searchflag = true;
                this.fetchTableDataByPage(this.pageIndex);
            }
            else {
                this.searchflag = false;
                this.fetchTableDataByPage(this.pageIndex);
                this.totalRow = this.classRoomData.length;
            }
        }
        /*====================update for vaid field==================================================== */
        // updateValidDataField() {
        //   if (this.updateFlag == false) {
        //   }
        // }
        /*==================pagination================================================================*/
        fetchTableDataByPage(index) {
            this.pageIndex = index;
            let startindex = this.displayBatchSize * (index - 1);
            this.pagedclassRoomData = this.getClassRoomTableFromSource(startindex);
        }
        fetchNext() {
            this.pageIndex++;
            this.fetchTableDataByPage(this.pageIndex);
        }
        fetchPrevious() {
            if (this.pageIndex != 1) {
                this.pageIndex--;
                this.fetchTableDataByPage(this.pageIndex);
            }
        }
        getClassRoomTableFromSource(startindex) {
            if (this.searchflag) {
                let t = this.searchData.slice(startindex, startindex + this.displayBatchSize);
                return t;
            }
            else {
                let t = this.classRoomData.slice(startindex, startindex + this.displayBatchSize);
                return t;
            }
        }
        /*==================================================================================
        ====================================================================================== */
        removeFullscreen() {
            var header = document.getElementsByTagName('core-header');
            var sidebar = document.getElementsByTagName('core-sidednav');
            [].forEach.call(header, function (el) {
                el.classList.remove('hide');
            });
            [].forEach.call(sidebar, function (el) {
                el.classList.remove('hide');
            });
        }
        removeSelectionFromSideNav() {
            let classArray = ['lione', 'litwo', 'lithree', 'lifour', 'lifive', 'lisix', 'liseven', 'lieight', 'linine', 'lizero'];
            classArray.forEach(function (className) {
                console.log(className);
                document.getElementById(className).classList.remove('active');
            });
            /* document.getElementById('liten').classList.remove('active');
            document.getElementById('lieleven').classList.remove('active'); */
        }
    };
    ClassRoomComponent.ctorParameters = () => [
        { type: _services_class_roomService_class_roomlist_service__WEBPACK_IMPORTED_MODULE_1__["ClassRoomService"] },
        { type: _services_login_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
        { type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"] },
        { type: _services_message_show_service__WEBPACK_IMPORTED_MODULE_4__["MessageShowService"] }
    ];
    ClassRoomComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-class-room',
            template: __importDefault(__webpack_require__(/*! raw-loader!./class-room.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/class-room/class-room.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./class-room.component.scss */ "./src/app/components/class-room/class-room.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_services_class_roomService_class_roomlist_service__WEBPACK_IMPORTED_MODULE_1__["ClassRoomService"],
            _services_login_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
            _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"],
            _services_message_show_service__WEBPACK_IMPORTED_MODULE_4__["MessageShowService"]])
    ], ClassRoomComponent);
    return ClassRoomComponent;
})();



/***/ }),

/***/ "./src/app/components/master/manage-exam-grades/manage-exam-grades.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/components/master/manage-exam-grades/manage-exam-grades.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* ===============================header colors=======================*/\n.table-format-first .table-responsive table th,\n.table-format-first .table-responsive table td {\n  text-align: center;\n  padding: 10px 5px;\n}\n.table-format-first .table-responsive table th {\n  text-transform: capitalize;\n  font-size: 14px;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper {\n  display: inline-block;\n  overflow: initial;\n  margin-left: 0;\n  width: auto;\n  position: relative;\n  background: transparent;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox {\n  z-index: 2;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label {\n  font-size: 16px;\n  margin-left: 7px;\n  font-weight: 600;\n  vertical-align: middle;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:after, .table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:before {\n  z-index: 1;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper:after {\n  content: '';\n  width: 20px;\n  height: 20px;\n  background: #fff;\n  left: 0;\n  top: 0;\n  position: absolute;\n}\n.table-format-first .table-responsive table tbody tr td .fa-trash-o {\n  color: #f44336;\n  font-size: 20px;\n}\n.table-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-top: 10px;\n}\n.table-container .heading-container {\n  background: #e0eaec;\n  display: flex;\n  flex-direction: row;\n  font-size: 14px;\n  font-weight: 600;\n  text-align: left;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n}\n.table-container .heading-container .heading-item {\n  width: 10%;\n  text-align: center;\n}\n.table-container .value-outer-container {\n  display: flex;\n  flex-direction: column;\n  min-height: 53vh;\n  max-height: 54vh;\n  overflow-x: hidden;\n  overflow-y: auto;\n  border: 1px solid #ccc;\n}\n.table-container .value-outer-container .value-container {\n  display: flex;\n  flex-direction: row;\n  text-align: left;\n  padding: 4px;\n  font-size: 12px;\n  border-bottom: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n  border-top: none;\n}\n.table-container .value-outer-container .value-container .value-item {\n  width: 10%;\n  text-align: center;\n}\n.create-standard-field {\n  background-color: #efefef;\n  height: 92px;\n  margin-left: 10px;\n  width: 99%;\n}\ntable thead tr th {\n  padding-bottom: 10px;\n  padding-top: 10px;\n}\ntable tbody td .col-new {\n  text-align: center;\n}\ntable tbody tr td {\n  padding-bottom: 10px;\n  padding-top: 10px;\n}\ntable tbody tr td .edit {\n  cursor: pointer;\n}\ntable tbody tr td .anchorTag {\n  margin-left: 10px;\n}\ntable tbody tr td .editOptions li {\n  display: inline-block;\n}\ntable tbody tr .field-wrapper {\n  padding: 0px !important;\n}\ntable tbody tr .field-wrapper .form-ctrl {\n  display: block;\n  box-sizing: border-box;\n  padding: 0px 0px 0px 5px;\n  outline: none;\n  border: 0;\n  height: 26px;\n  box-shadow: none;\n  border-radius: 0;\n  line-height: 25px;\n  background: transparent;\n  width: 80px;\n  text-align: center;\n  border-bottom: 1px solid #ccc;\n}\ntable tbody tr .datePickerBox {\n  padding-right: 10px;\n  padding-bottom: 10px;\n}\ntable tbody .displayComp .edit-comp {\n  display: none;\n}\ntable tbody .editComp .view-comp {\n  display: none;\n}\n.anchorTagCursor {\n  cursor: pointer;\n}\n@media screen and (max-width: 995px), screen and (max-height: 768px) {\n  #divSlotTable {\n    margin-left: 0px !important;\n    margin-top: 15px;\n    margin-right: 15px !important;\n    max-height: 480px;\n    overflow: hidden;\n    width: 100%;\n  }\n  #divSlotTable .table-scroll-wrapper {\n    max-height: 430px;\n  }\n  #divSlotTable ::-webkit-scrollbar {\n    display: block;\n    width: 7px;\n    height: 7px;\n  }\n}\n.middle-section {\n  padding: 5px 15px;\n  width: 100%;\n  box-sizing: border-box;\n}\n.astrick {\n  color: red;\n}\n.add-edit {\n  margin-bottom: 15px;\n  margin-top: 15px;\n}\n.add-edit i {\n  border: none;\n  display: inline-block;\n  width: 17px;\n  height: 17px;\n  border-radius: 50%;\n  line-height: 16px;\n  text-align: center;\n  font-size: 17px;\n  vertical-align: middle;\n  margin-right: 4px;\n}\n.add-edit span {\n  display: inline-block;\n}\n.add-edit .expend-box i {\n  line-height: 12px;\n  font-size: 22px;\n}\n.add-edit a {\n  cursor: pointer;\n}\n.create-standard-form {\n  margin: 10px 0;\n  padding: 10px 20px 20px;\n  background: #efefef;\n  border-top: 1px solid #d8d8d8;\n}\n.create-standard-form .form-ctrl {\n  background: transparent;\n  border-bottom: solid 1px #cccccc;\n}\n.closeBtnClass {\n  line-height: 11px !important;\n}\n.editCellInput {\n  margin: auto;\n  display: block;\n}\n.middle-section .middle-top {\n  margin-bottom: 10px;\n}\n.middle-section .middle-main .addBtnClass {\n  border: none;\n}\n.middle-section .middle-main .closeBtnClass {\n  border: none;\n}\n.middle-section .middle-main .row .btn {\n  margin-left: 0px;\n  margin-top: 10px;\n}\n.middle-section .middle-main .row .field-wrapper {\n  display: inline-block;\n  margin-left: 5px;\n}\n.middle-section .middle-main .row .field-wrapper label {\n  font-size: 12px;\n}\n.middle-section .middle-main .row .field-wrapper span {\n  color: red;\n  display: inline-block;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY3NzL2NvbW1vbi92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9tYXN0ZXIvbWFuYWdlLWV4YW0tZ3JhZGVzL21hbmFnZS1leGFtLWdyYWRlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZQSx1RUFBQTtBQVdBOztFQUtnQixrQkFBa0I7RUFDbEIsaUJBQWlCO0FDeEJqQztBRGtCQTtFQVNnQiwwQkFBMEI7RUFDMUIsZUFBZTtBQ3ZCL0I7QURhQTtFQWdCNEIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsV0FBVztFQUNYLGtCQUFrQjtFQUNsQix1QkFBdUI7QUN6Qm5EO0FESUE7RUF1QmdDLFVBQVU7QUN2QjFDO0FEQUE7RUEwQmdDLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtBQ3RCdEQ7QURQQTtFQWdDb0MsVUFBVTtBQ3JCOUM7QURYQTtFQW9DZ0MsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLE9BQU87RUFDUCxNQUFNO0VBQ04sa0JBQWtCO0FDckJsRDtBRHJCQTtFQThDNEIsY0FsRGI7RUFtRGEsZUFBZTtBQ3JCM0M7QUQ4QkE7RUFDSSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxnQkFBZ0I7QUMzQnBCO0FEdUJBO0VBTU0sbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIseUJBQXlCO0FDekIvQjtBRFVBO0VBaUJRLFVBQVU7RUFDVixrQkFBa0I7QUN2QjFCO0FES0E7RUFzQk0sYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0FDdkI1QjtBRExBO0VBOEJRLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLG9CQUFvQjtFQUNwQix5QkFBeUI7RUFDekIsZ0JBQWdCO0FDckJ4QjtBRGpCQTtFQXdDVSxVQUFVO0VBQ1Ysa0JBQWtCO0FDbkI1QjtBQXBHQTtFQUNJLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLFVBQVU7QUF1R2Q7QUFyR0E7RUFJZ0Isb0JBQW9CO0VBQ3BCLGlCQUFpQjtBQXFHakM7QUExR0E7RUFZZ0Isa0JBQWtCO0FBa0dsQztBQTlHQTtFQXVCZ0Isb0JBQW9CO0VBQ3BCLGlCQUFpQjtBQTJGakM7QUFuSEE7RUFrQm9CLGVBQWU7QUFxR25DO0FBdkhBO0VBcUJvQixpQkFBaUI7QUFzR3JDO0FBM0hBO0VBMEJvQixxQkFBcUI7QUFxR3pDO0FBL0hBO0VBOEJnQix1QkFBdUI7QUFxR3ZDO0FBbklBO0VBZ0NvQixjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLHdCQUF3QjtFQUN4QixhQUFhO0VBQ2IsU0FBUztFQUNULFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQiw2QkFBNkI7QUF1R2pEO0FBbkpBO0VBZ0RnQixtQkFBbUI7RUFDbkIsb0JBQW9CO0FBdUdwQztBQXhKQTtFQXVEZ0IsYUFDSjtBQW9HWjtBQTVKQTtFQTREZ0IsYUFDSjtBQW1HWjtBQTdGQTtFQUNJLGVBQWU7QUFnR25CO0FBekZBO0VBRUk7SUFDSSwyQkFBMkI7SUFDM0IsZ0JBQWdCO0lBQ2hCLDZCQUE2QjtJQUM3QixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLFdBQVc7RUEyRmpCO0VBakdFO0lBUVEsaUJBQWlCO0VBNEYzQjtFQXBHRTtJQVdRLGNBQWM7SUFDZCxVQUFVO0lBQ1YsV0FBVztFQTRGckI7QUFDRjtBQXhGQTtFQUNJLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsc0JBQXNCO0FBMkYxQjtBQXpGQTtFQUNJLFVBQVU7QUE0RmQ7QUExRkE7RUFDSSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBNkZwQjtBQS9GQTtFQUlRLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLGlCQUFpQjtBQStGekI7QUE1R0E7RUFnQlEscUJBQXFCO0FBZ0c3QjtBQWhIQTtFQW9CWSxpQkFBaUI7RUFDakIsZUFBZTtBQWdHM0I7QUFySEE7RUF5QlEsZUFBZTtBQWdHdkI7QUE1RkE7RUFDSSxjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQiw2QkFBNkI7QUErRmpDO0FBbkdBO0VBTVEsdUJBQXVCO0VBQ3ZCLGdDQUFnQztBQWlHeEM7QUE3RkE7RUFDSSw0QkFBNEI7QUFnR2hDO0FBN0ZBO0VBQ0ksWUFBWTtFQUNaLGNBQWM7QUFnR2xCO0FBN0ZBO0VBRVEsbUJBQW1CO0FBK0YzQjtBQWpHQTtFQU1ZLFlBQVk7QUErRnhCO0FBckdBO0VBU1ksWUFBWTtBQWdHeEI7QUF6R0E7RUFhZ0IsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQWdHaEM7QUE5R0E7RUFpQmdCLHFCQUFxQjtFQUNyQixnQkFBZ0I7QUFpR2hDO0FBbkhBO0VBb0JvQixlQUFlO0FBbUduQztBQXZIQTtFQXVCb0IsVUFBVTtFQUNWLHFCQUFxQjtBQW9HekMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21hc3Rlci9tYW5hZ2UtZXhhbS1ncmFkZXMvbWFuYWdlLWV4YW0tZ3JhZGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHB1bGwtTDogbGVmdDtcbiRwdWxsLVI6IHJpZ2h0O1xuJHB1bGwtbm9uZTogbm9uZTtcbiRmdWxsLXdpZHRoOiAxMDAlO1xuJGJvcmRlci1ib3g6IGJvcmRlci1ib3g7XG4kYm9yZGVyLWNvbG9yOiAjZGVlYWVlO1xuJGJnLXdoaXRlOiAjZmZmO1xuJGVycm9yLWNvbG9yOiAjZmYwMDAwO1xuJGNvbW1vbi1ibHVlOiAjMDA4NGY2O1xuJHByaW1hcnktY29sb3I6ICMzMzM7XG4kYm9yZGVyLWNvbW1vbjojZWFlYWViO1xuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09aGVhZGVyIGNvbG9ycz09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuJGhlYWRlci1iZzojMDA2MEEzO1xuJGhlYWRlci1ib3JkZXI6I2VhZWFlYjtcbiRsZWZ0TWVudUJnOiNmYWZhZmE7XG4kbGVmdE1lbnVIb3ZlckJnOiMwMDg0ZjY7XG4kbGVmdE1lbnVUZXh0SG92ZXJDb2xvcjojZmZmO1xuJHJlZEJ0bjojZjQ0MzM2O1xuJGJvcmRlcmNjYzojY2NjO1xuJGxpZ2h0Qmx1ZTojZWZmN2ZmO1xuJHRhYmxlSGVhZGluZ0JnQ29sb3I6ICMwMDRhN2U7XG4udGFibGUtZm9ybWF0LWZpcnN0IHtcbiAgICAudGFibGUtcmVzcG9uc2l2ZSB7XG4gICAgICAgIHRhYmxlIHtcbiAgICAgICAgICAgIHRoLFxuICAgICAgICAgICAgdGQge1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoIHtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0Ym9keSB7XG4gICAgICAgICAgICAgICAgdHIge1xuICAgICAgICAgICAgICAgICAgICB0ZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuZmllbGQtY2hlY2tib3gtd3JhcHBlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBpbml0aWFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZm9ybS1jaGVja2JveCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mb3JtLWNoZWNrYm94K2xhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogN3B4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmFmdGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLmZhLXRyYXNoLW8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkcmVkQnRuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnRhYmxlLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgLmhlYWRpbmctY29udGFpbmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICNlMGVhZWM7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgICAuaGVhZGluZy1pdGVtIHtcbiAgICAgICAgd2lkdGg6IDEwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgIH1cbiAgICAudmFsdWUtb3V0ZXItY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgbWluLWhlaWdodDogNTN2aDtcbiAgICAgIG1heC1oZWlnaHQ6IDU0dmg7XG4gICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgIC52YWx1ZS1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgICAgICBib3JkZXItdG9wOiBub25lO1xuICAgICAgICAudmFsdWUtaXRlbSB7XG4gICAgICAgICAgd2lkdGg6IDEwJTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0iLCJAaW1wb3J0IFwiLi9zcmMvYXNzZXRzL2Nzcy9jb21tb24vdmFyaWFibGVzLnNjc3NcIjtcbi5jcmVhdGUtc3RhbmRhcmQtZmllbGR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcbiAgICBoZWlnaHQ6IDkycHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgd2lkdGg6IDk5JTtcbn1cbnRhYmxlIHtcbiAgICB0aGVhZCB7XG4gICAgICAgIHRyIHtcbiAgICAgICAgICAgIHRoIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICB0Ym9keSB7XG4gICAgICAgIHRkIHtcbiAgICAgICAgICAgIC5jb2wtbmV3IHtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdHIge1xuICAgICAgICAgICAgdGQge1xuICAgICAgICAgICAgICAgIC5lZGl0IHtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuYW5jaG9yVGFnIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICAgICAgICAgIC5lZGl0T3B0aW9ucyBsaSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZmllbGQtd3JhcHBlciB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgLmZvcm0tY3RybCB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggMHB4IDBweCA1cHg7XG4gICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNnB4O1xuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5kYXRlUGlja2VyQm94IHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5kaXNwbGF5Q29tcCB7XG4gICAgICAgICAgICAudmlldy1jb21wIHt9XG4gICAgICAgICAgICAuZWRpdC1jb21wIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmVkaXRDb21wIHtcbiAgICAgICAgICAgIC52aWV3LWNvbXAge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5lZGl0LWNvbXAge31cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmFuY2hvclRhZ0N1cnNvciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucGFnaW5hdGlvbiB7XG4gICAgLy8gcGFkZGluZy10b3A6IDI1cHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5NXB4KSxcbnNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDc2OHB4KSB7XG4gICAgI2RpdlNsb3RUYWJsZSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIG1heC1oZWlnaHQ6IDQ4MHB4O1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgLnRhYmxlLXNjcm9sbC13cmFwcGVyIHtcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDQzMHB4O1xuICAgICAgICB9XG4gICAgICAgIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB3aWR0aDogN3B4O1xuICAgICAgICAgICAgaGVpZ2h0OiA3cHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5taWRkbGUtc2VjdGlvbiB7XG4gICAgcGFkZGluZzogNXB4IDE1cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi5hc3RyaWNre1xuICAgIGNvbG9yOiByZWQ7XG59XG4uYWRkLWVkaXQge1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBpIHtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHdpZHRoOiAxN3B4O1xuICAgICAgICBoZWlnaHQ6IDE3cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgICB9XG4gICAgc3BhbiB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB9XG4gICAgLmV4cGVuZC1ib3gge1xuICAgICAgICBpIHtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMnB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIGEge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxufVxuXG4uY3JlYXRlLXN0YW5kYXJkLWZvcm0ge1xuICAgIG1hcmdpbjogMTBweCAwO1xuICAgIHBhZGRpbmc6IDEwcHggMjBweCAyMHB4O1xuICAgIGJhY2tncm91bmQ6ICNlZmVmZWY7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkOGQ4ZDg7XG4gICAgLmZvcm0tY3RybCB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2NjY2NjYztcbiAgICB9XG59XG5cbi5jbG9zZUJ0bkNsYXNzIHtcbiAgICBsaW5lLWhlaWdodDogMTFweCAhaW1wb3J0YW50O1xufVxuXG4uZWRpdENlbGxJbnB1dCB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubWlkZGxlLXNlY3Rpb24ge1xuICAgIC5taWRkbGUtdG9wIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB9XG4gICAgLm1pZGRsZS1tYWluIHtcbiAgICAgICAgLmFkZEJ0bkNsYXNzIHtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAuY2xvc2VCdG5DbGFzcyB7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgLnJvdyB7XG4gICAgICAgICAgICAuYnRuIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZmllbGQtd3JhcHBlciB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICAgICAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/master/manage-exam-grades/manage-exam-grades.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/master/manage-exam-grades/manage-exam-grades.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ManageExamGradesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageExamGradesComponent", function() { return ManageExamGradesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_examgradeservice_exam_grade_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/examgradeservice/exam-grade-service.service */ "./src/app/services/examgradeservice/exam-grade-service.service.ts");
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



let ManageExamGradesComponent = /** @class */ (() => {
    let ManageExamGradesComponent = class ManageExamGradesComponent {
        constructor(gradeService, appC) {
            this.gradeService = gradeService;
            this.appC = appC;
            this.showToggle = false;
            this.addData = {
                grade: "",
                description: "",
                institution_id: sessionStorage.getItem('institute_id')
            };
            this.editData = {
                description: "",
                grade: "",
                grade_id: "",
                institution_id: sessionStorage.getItem('institute_id')
            };
            this.deleteData = {
                grade_id: ""
            };
            this.gotGrades = [];
            this.addArray = [];
            this.dummyArr = [0, 1, 2, 0, 1, 2];
            this.columnMaps = [0, 1, 2];
            this.dataStatus = false;
        }
        ngOnInit() {
            this.fetchGrades();
        }
        // toggle for add grade div
        toggleCreateNewgrade() {
            if (this.showToggle == false) {
                this.showToggle = true;
                document.getElementById('showCloseBtn').style.display = '';
                document.getElementById('showAddBtn').style.display = 'none';
            }
            else {
                this.showToggle = false;
                document.getElementById('showCloseBtn').style.display = 'none';
                document.getElementById('showAddBtn').style.display = '';
            }
        }
        // fetchGrades while api hits first time
        fetchGrades() {
            this.gradeService.fetchAllData().subscribe((data) => {
                //console.log(data);
                this.gotGrades = data;
            }, (error) => {
                return error;
            });
        }
        // data added to table
        addDataToTable() {
            if (this.addData.description == "" || this.addData.grade == "" || this.addData.description == null || this.addData.grade == null) {
                let msg = {
                    type: "error",
                    title: "",
                    body: "All fields Are required"
                };
                this.appC.popToast(msg);
            }
            else if (this.addData.description != " " || this.addData.grade != " ") {
                this.gradeService.addData(this.addData).subscribe((data) => {
                    let msg = {
                        type: "success",
                        body: "Grade added successfully"
                    };
                    this.appC.popToast(msg);
                    this.addData = {
                        institution_id: sessionStorage.getItem('institute_id'),
                        description: "",
                        grade: ""
                    };
                    this.toggleCreateNewgrade();
                    this.fetchGrades();
                }, (error) => {
                    let msg = {
                        type: "error",
                        body: error.error.message
                    };
                    this.appC.popToast(msg);
                });
            }
        }
        // editing rows 
        editRowTable(row, index) {
            document.getElementById(("row" + index).toString()).classList.remove('displayComp');
            document.getElementById(("row" + index).toString()).classList.add('editComp');
        }
        // put data for edited request
        saveInformation(row, index) {
            let data = {
                description: row.description,
                grade: row.grade,
                grade_id: row.grade_id,
                institution_id: sessionStorage.getItem('institute_id')
            };
            this.gradeService.saveEdited(data).subscribe((data) => {
                this.cancelEditRow(index);
                this.fetchGrades();
                let msg = {
                    type: "success",
                    body: "Grade updated successfully"
                };
                this.appC.popToast(msg);
            }, error => {
                let acad = {
                    type: "error",
                    title: "",
                    body: error.error.message
                };
                this.appC.popToast(acad);
                this.fetchGrades();
            });
        }
        cancelEditRow(index) {
            document.getElementById(("row" + index).toString()).classList.add('displayComp');
            document.getElementById(("row" + index).toString()).classList.remove('editComp');
        }
        // delete particular grade
        deletingGrade(row, index) {
            let data = {
                grade_id: row.grade_id,
            };
            if (confirm('Are you sure, you want to delete?')) {
                this.gradeService.deleteRow(data).subscribe((data) => {
                    this.fetchGrades();
                    let msg = {
                        type: "success",
                        body: "Grade deleted successfully"
                    };
                    this.appC.popToast(msg);
                }, error => {
                    let acad = {
                        type: "error",
                        title: "Incorrect Details",
                        body: error.error.message
                    };
                    this.appC.popToast(acad);
                    this.fetchGrades();
                });
            }
        }
    };
    ManageExamGradesComponent.ctorParameters = () => [
        { type: _services_examgradeservice_exam_grade_service_service__WEBPACK_IMPORTED_MODULE_1__["ExamGradeServiceService"] },
        { type: _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"] }
    ];
    ManageExamGradesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-manage-exam-grades',
            template: __importDefault(__webpack_require__(/*! raw-loader!./manage-exam-grades.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/master/manage-exam-grades/manage-exam-grades.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./manage-exam-grades.component.scss */ "./src/app/components/master/manage-exam-grades/manage-exam-grades.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_services_examgradeservice_exam_grade_service_service__WEBPACK_IMPORTED_MODULE_1__["ExamGradeServiceService"], _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]])
    ], ManageExamGradesComponent);
    return ManageExamGradesComponent;
})();



/***/ }),

/***/ "./src/app/components/master/master-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/components/master/master-routing.module.ts ***!
  \************************************************************/
/*! exports provided: MasterRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterRoutingModule", function() { return MasterRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _master_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./master.component */ "./src/app/components/master/master.component.ts");
/* harmony import */ var _slot_slot_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./slot/slot.component */ "./src/app/components/master/slot/slot.component.ts");
/* harmony import */ var _components_city_area_map_city_area_map_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/city-area-map/city-area-map.component */ "./src/app/components/city-area-map/city-area-map.component.ts");
/* harmony import */ var _components_class_room_class_room_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/class-room/class-room.component */ "./src/app/components/class-room/class-room.component.ts");
/* harmony import */ var _manage_exam_grades_manage_exam_grades_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./manage-exam-grades/manage-exam-grades.component */ "./src/app/components/master/manage-exam-grades/manage-exam-grades.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







;

let MasterRoutingModule = /** @class */ (() => {
    let MasterRoutingModule = class MasterRoutingModule {
    };
    MasterRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _master_component__WEBPACK_IMPORTED_MODULE_3__["MasterComponent"],
                        pathMatch: 'prefix',
                        children: [
                            {
                                path: 'manage-exam-grades',
                                component: _manage_exam_grades_manage_exam_grades_component__WEBPACK_IMPORTED_MODULE_7__["ManageExamGradesComponent"],
                                pathMatch: 'prefix',
                            },
                            {
                                path: 'slot',
                                component: _slot_slot_component__WEBPACK_IMPORTED_MODULE_4__["SlotComponent"],
                                canLoad: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
                            },
                            {
                                path: 'classroom',
                                component: _components_class_room_class_room_component__WEBPACK_IMPORTED_MODULE_6__["ClassRoomComponent"],
                                canLoad: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
                            },
                            {
                                path: 'areaCity',
                                component: _components_city_area_map_city_area_map_component__WEBPACK_IMPORTED_MODULE_5__["CityAreaMapComponent"],
                            }
                        ]
                    }
                ])
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], MasterRoutingModule);
    return MasterRoutingModule;
})();



/***/ }),

/***/ "./src/app/components/master/master.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/master/master.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFzdGVyL21hc3Rlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/master/master.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/master/master.component.ts ***!
  \*******************************************************/
/*! exports provided: MasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterComponent", function() { return MasterComponent; });
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

let MasterComponent = /** @class */ (() => {
    let MasterComponent = class MasterComponent {
        constructor() {
        }
        /* OnInit recheck the status of li tab and set it to active here */
        ngOnInit() {
            // let classArray = ['lione', 'litwo', 'lithree', 'lifour', 'lifive', 'lisix', 'liseven', 'lieight', 'linine', 'lizero'];
            // classArray.forEach(function (className) {
            //   document.getElementById(className).classList.remove('active');
            // });
        }
    };
    MasterComponent.ctorParameters = () => [];
    MasterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'master',
            template: __importDefault(__webpack_require__(/*! raw-loader!./master.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/master/master.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./master.component.scss */ "./src/app/components/master/master.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], MasterComponent);
    return MasterComponent;
})();



/***/ }),

/***/ "./src/app/components/master/master.module.ts":
/*!****************************************************!*\
  !*** ./src/app/components/master/master.module.ts ***!
  \****************************************************/
/*! exports provided: ManageExamModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageExamModule", function() { return ManageExamModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var primeng_treetable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/treetable */ "./node_modules/primeng/treetable.js");
/* harmony import */ var primeng_treetable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_treetable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_city_area_map_city_area_map_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/city-area-map/city-area-map.component */ "./src/app/components/city-area-map/city-area-map.component.ts");
/* harmony import */ var _components_class_room_class_room_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/class-room/class-room.component */ "./src/app/components/class-room/class-room.component.ts");
/* harmony import */ var _services_area_city_service_area_city_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/area-city-service/area-city.service */ "./src/app/services/area-city-service/area-city.service.ts");
/* harmony import */ var _services_class_roomService_class_roomlist_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/class-roomService/class-roomlist.service */ "./src/app/services/class-roomService/class-roomlist.service.ts");
/* harmony import */ var _services_examgradeservice_exam_grade_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/examgradeservice/exam-grade-service.service */ "./src/app/services/examgradeservice/exam-grade-service.service.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_slot_service_slot_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/slot-service/slot.service */ "./src/app/services/slot-service/slot.service.ts");
/* harmony import */ var _add_city_area_add_city_area_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../add-city-area/add-city-area.component */ "./src/app/components/add-city-area/add-city-area.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/components/shared/shared.module.ts");
/* harmony import */ var _manage_exam_grades_manage_exam_grades_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./manage-exam-grades/manage-exam-grades.component */ "./src/app/components/master/manage-exam-grades/manage-exam-grades.component.ts");
/* harmony import */ var _master_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./master-routing.module */ "./src/app/components/master/master-routing.module.ts");
/* harmony import */ var _master_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./master.component */ "./src/app/components/master/master.component.ts");
/* harmony import */ var _slot_slot_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./slot/slot.component */ "./src/app/components/master/slot/slot.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';














let ManageExamModule = /** @class */ (() => {
    let ManageExamModule = class ManageExamModule {
    };
    ManageExamModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                // BsDatepickerModule,
                primeng_treetable__WEBPACK_IMPORTED_MODULE_2__["TreeTableModule"],
                _master_routing_module__WEBPACK_IMPORTED_MODULE_13__["MasterRoutingModule"]
            ],
            exports: [
                _add_city_area_add_city_area_component__WEBPACK_IMPORTED_MODULE_10__["AddCityAreaComponent"]
            ],
            declarations: [
                _master_component__WEBPACK_IMPORTED_MODULE_14__["MasterComponent"],
                _manage_exam_grades_manage_exam_grades_component__WEBPACK_IMPORTED_MODULE_12__["ManageExamGradesComponent"],
                _slot_slot_component__WEBPACK_IMPORTED_MODULE_15__["SlotComponent"],
                _components_class_room_class_room_component__WEBPACK_IMPORTED_MODULE_4__["ClassRoomComponent"],
                _components_city_area_map_city_area_map_component__WEBPACK_IMPORTED_MODULE_3__["CityAreaMapComponent"],
                _add_city_area_add_city_area_component__WEBPACK_IMPORTED_MODULE_10__["AddCityAreaComponent"]
            ],
            providers: [
                _services_examgradeservice_exam_grade_service_service__WEBPACK_IMPORTED_MODULE_7__["ExamGradeServiceService"],
                _services_slot_service_slot_service__WEBPACK_IMPORTED_MODULE_9__["SlotApiService"],
                _services_area_city_service_area_city_service__WEBPACK_IMPORTED_MODULE_5__["CityAreaService"],
                _services_http_service__WEBPACK_IMPORTED_MODULE_8__["HttpService"],
                _services_class_roomService_class_roomlist_service__WEBPACK_IMPORTED_MODULE_6__["ClassRoomService"]
            ]
        })
    ], ManageExamModule);
    return ManageExamModule;
})();



/***/ }),

/***/ "./src/app/components/master/slot/slot.component.scss":
/*!************************************************************!*\
  !*** ./src/app/components/master/slot/slot.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* ===============================header colors=======================*/\n.table-format-first .table-responsive table th,\n.table-format-first .table-responsive table td {\n  text-align: center;\n  padding: 10px 5px;\n}\n.table-format-first .table-responsive table th {\n  text-transform: capitalize;\n  font-size: 14px;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper {\n  display: inline-block;\n  overflow: initial;\n  margin-left: 0;\n  width: auto;\n  position: relative;\n  background: transparent;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox {\n  z-index: 2;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label {\n  font-size: 16px;\n  margin-left: 7px;\n  font-weight: 600;\n  vertical-align: middle;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:after, .table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:before {\n  z-index: 1;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper:after {\n  content: '';\n  width: 20px;\n  height: 20px;\n  background: #fff;\n  left: 0;\n  top: 0;\n  position: absolute;\n}\n.table-format-first .table-responsive table tbody tr td .fa-trash-o {\n  color: #f44336;\n  font-size: 20px;\n}\n.table-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-top: 10px;\n}\n.table-container .heading-container {\n  background: #e0eaec;\n  display: flex;\n  flex-direction: row;\n  font-size: 14px;\n  font-weight: 600;\n  text-align: left;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n}\n.table-container .heading-container .heading-item {\n  width: 10%;\n  text-align: center;\n}\n.table-container .value-outer-container {\n  display: flex;\n  flex-direction: column;\n  min-height: 53vh;\n  max-height: 54vh;\n  overflow-x: hidden;\n  overflow-y: auto;\n  border: 1px solid #ccc;\n}\n.table-container .value-outer-container .value-container {\n  display: flex;\n  flex-direction: row;\n  text-align: left;\n  padding: 4px;\n  font-size: 12px;\n  border-bottom: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n  border-top: none;\n}\n.table-container .value-outer-container .value-container .value-item {\n  width: 10%;\n  text-align: center;\n}\ntable thead tr th {\n  padding-bottom: 10px;\n  padding-top: 10px;\n}\ntable tbody tr td {\n  padding-bottom: 10px;\n  padding-top: 10px;\n}\ntable tbody tr td .editOptions li {\n  display: inline-block;\n}\ntable tbody tr .field-wrapper {\n  padding: 0px !important;\n}\ntable tbody tr .field-wrapper .form-ctrl {\n  display: block;\n  box-sizing: border-box;\n  padding: 0px 0px 0px 5px;\n  outline: none;\n  border: 0;\n  height: 26px;\n  box-shadow: none;\n  border-radius: 0;\n  line-height: 25px;\n  background: transparent;\n  width: 80px;\n  text-align: center;\n  border-bottom: 1px solid #ccc;\n}\ntable tbody .displayComp .edit-comp {\n  display: none;\n}\ntable tbody .editComp .view-comp {\n  display: none;\n}\n.anchorTagCursor {\n  cursor: pointer;\n}\n@media screen and (max-width: 995px), screen and (max-height: 768px) {\n  #divSlotTable {\n    margin-left: 0px !important;\n    margin-top: 15px;\n    margin-right: 15px !important;\n    max-height: 480px;\n    overflow: hidden;\n    width: 100%;\n  }\n  #divSlotTable .table-scroll-wrapper {\n    max-height: 430px;\n  }\n  #divSlotTable ::-webkit-scrollbar {\n    display: block;\n    width: 7px;\n    height: 7px;\n  }\n}\n.middle-section {\n  padding: 5px 15px;\n  width: 100%;\n  box-sizing: border-box;\n}\n.add-edit {\n  margin-bottom: 15px;\n  margin-top: 15px;\n}\n.add-edit i {\n  border: 1px solid #0084f6;\n  display: inline-block;\n  width: 17px;\n  height: 17px;\n  border-radius: 50%;\n  line-height: 16px;\n  text-align: center;\n  font-size: 17px;\n  vertical-align: middle;\n  margin-right: 4px;\n}\n.add-edit span {\n  display: inline-block;\n}\n.add-edit .expend-box i {\n  line-height: 12px;\n  font-size: 22px;\n}\n.add-edit a {\n  cursor: pointer;\n}\n.create-standard-form {\n  margin: 0 0 10px 0;\n  padding: 10px;\n  background: #efefef;\n  border-top: 1px solid #d8d8d8;\n}\n.create-standard-form .form-ctrl {\n  background: white;\n  border-bottom: solid 1px #cccccc;\n}\n.closeBtnClass {\n  line-height: 11px !important;\n}\n.editCellInput {\n  margin: auto;\n  display: block;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY3NzL2NvbW1vbi92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9tYXN0ZXIvc2xvdC9zbG90LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVlBLHVFQUFBO0FBV0E7O0VBS2dCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUN4QmpDO0FEa0JBO0VBU2dCLDBCQUEwQjtFQUMxQixlQUFlO0FDdkIvQjtBRGFBO0VBZ0I0QixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHVCQUF1QjtBQ3pCbkQ7QURJQTtFQXVCZ0MsVUFBVTtBQ3ZCMUM7QURBQTtFQTBCZ0MsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0FDdEJ0RDtBRFBBO0VBZ0NvQyxVQUFVO0FDckI5QztBRFhBO0VBb0NnQyxXQUFXO0VBQ1gsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsT0FBTztFQUNQLE1BQU07RUFDTixrQkFBa0I7QUNyQmxEO0FEckJBO0VBOEM0QixjQWxEYjtFQW1EYSxlQUFlO0FDckIzQztBRDhCQTtFQUNJLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGdCQUFnQjtBQzNCcEI7QUR1QkE7RUFNTSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQix5QkFBeUI7QUN6Qi9CO0FEVUE7RUFpQlEsVUFBVTtFQUNWLGtCQUFrQjtBQ3ZCMUI7QURLQTtFQXNCTSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixzQkFBc0I7QUN2QjVCO0FETEE7RUE4QlEsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0Isb0JBQW9CO0VBQ3BCLHlCQUF5QjtFQUN6QixnQkFBZ0I7QUNyQnhCO0FEakJBO0VBd0NVLFVBQVU7RUFDVixrQkFBa0I7QUNuQjVCO0FBcEdBO0VBSWdCLG9CQUFvQjtFQUNwQixpQkFBaUI7QUFvR2pDO0FBekdBO0VBWWdCLG9CQUFvQjtFQUNwQixpQkFBaUI7QUFpR2pDO0FBOUdBO0VBZW9CLHFCQUFxQjtBQW1HekM7QUFsSEE7RUFtQmdCLHVCQUF1QjtBQW1HdkM7QUF0SEE7RUFxQm9CLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsd0JBQXdCO0VBQ3hCLGFBQWE7RUFDYixTQUFTO0VBQ1QsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLDZCQUE2QjtBQXFHakQ7QUF0SUE7RUF3Q2dCLGFBQ0o7QUFpR1o7QUExSUE7RUE2Q2dCLGFBQ0o7QUFnR1o7QUExRkE7RUFDSSxlQUFlO0FBNkZuQjtBQTFGQTtFQUVJO0lBQ0ksMkJBQTJCO0lBQzNCLGdCQUFnQjtJQUNoQiw2QkFBNkI7SUFDN0IsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixXQUFXO0VBNEZqQjtFQWxHRTtJQVFRLGlCQUFpQjtFQTZGM0I7RUFyR0U7SUFXUSxjQUFjO0lBQ2QsVUFBVTtJQUNWLFdBQVc7RUE2RnJCO0FBQ0Y7QUF6RkE7RUFDSSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLHNCQUFzQjtBQTRGMUI7QUF6RkE7RUFDSSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBNEZwQjtBQTlGQTtFQUlRLHlCRC9FYTtFQ2dGYixxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLGlCQUFpQjtBQThGekI7QUEzR0E7RUFnQlEscUJBQXFCO0FBK0Y3QjtBQS9HQTtFQW9CWSxpQkFBaUI7RUFDakIsZUFBZTtBQStGM0I7QUFwSEE7RUF5QlEsZUFBZTtBQStGdkI7QUEzRkE7RUFDSSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw2QkFBNkI7QUE4RmpDO0FBbEdBO0VBTVEsaUJBQWlCO0VBQ2pCLGdDQUFnQztBQWdHeEM7QUE1RkE7RUFDSSw0QkFBNEI7QUErRmhDO0FBNUZBO0VBQ0ksWUFBWTtFQUNaLGNBQWM7QUErRmxCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tYXN0ZXIvc2xvdC9zbG90LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHB1bGwtTDogbGVmdDtcbiRwdWxsLVI6IHJpZ2h0O1xuJHB1bGwtbm9uZTogbm9uZTtcbiRmdWxsLXdpZHRoOiAxMDAlO1xuJGJvcmRlci1ib3g6IGJvcmRlci1ib3g7XG4kYm9yZGVyLWNvbG9yOiAjZGVlYWVlO1xuJGJnLXdoaXRlOiAjZmZmO1xuJGVycm9yLWNvbG9yOiAjZmYwMDAwO1xuJGNvbW1vbi1ibHVlOiAjMDA4NGY2O1xuJHByaW1hcnktY29sb3I6ICMzMzM7XG4kYm9yZGVyLWNvbW1vbjojZWFlYWViO1xuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09aGVhZGVyIGNvbG9ycz09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuJGhlYWRlci1iZzojMDA2MEEzO1xuJGhlYWRlci1ib3JkZXI6I2VhZWFlYjtcbiRsZWZ0TWVudUJnOiNmYWZhZmE7XG4kbGVmdE1lbnVIb3ZlckJnOiMwMDg0ZjY7XG4kbGVmdE1lbnVUZXh0SG92ZXJDb2xvcjojZmZmO1xuJHJlZEJ0bjojZjQ0MzM2O1xuJGJvcmRlcmNjYzojY2NjO1xuJGxpZ2h0Qmx1ZTojZWZmN2ZmO1xuJHRhYmxlSGVhZGluZ0JnQ29sb3I6ICMwMDRhN2U7XG4udGFibGUtZm9ybWF0LWZpcnN0IHtcbiAgICAudGFibGUtcmVzcG9uc2l2ZSB7XG4gICAgICAgIHRhYmxlIHtcbiAgICAgICAgICAgIHRoLFxuICAgICAgICAgICAgdGQge1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoIHtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0Ym9keSB7XG4gICAgICAgICAgICAgICAgdHIge1xuICAgICAgICAgICAgICAgICAgICB0ZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuZmllbGQtY2hlY2tib3gtd3JhcHBlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBpbml0aWFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZm9ybS1jaGVja2JveCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mb3JtLWNoZWNrYm94K2xhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogN3B4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmFmdGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLmZhLXRyYXNoLW8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkcmVkQnRuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnRhYmxlLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgLmhlYWRpbmctY29udGFpbmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICNlMGVhZWM7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgICAuaGVhZGluZy1pdGVtIHtcbiAgICAgICAgd2lkdGg6IDEwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgIH1cbiAgICAudmFsdWUtb3V0ZXItY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgbWluLWhlaWdodDogNTN2aDtcbiAgICAgIG1heC1oZWlnaHQ6IDU0dmg7XG4gICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgIC52YWx1ZS1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgICAgICBib3JkZXItdG9wOiBub25lO1xuICAgICAgICAudmFsdWUtaXRlbSB7XG4gICAgICAgICAgd2lkdGg6IDEwJTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0iLCJAaW1wb3J0IFwiLi9zcmMvYXNzZXRzL2Nzcy9jb21tb24vdmFyaWFibGVzLnNjc3NcIjtcbnRhYmxlIHtcbiAgICB0aGVhZCB7XG4gICAgICAgIHRyIHtcbiAgICAgICAgICAgIHRoIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICB0Ym9keSB7XG4gICAgICAgIHRyIHtcbiAgICAgICAgICAgIHRkIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgICAgICAgICAuZWRpdE9wdGlvbnMgbGkge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZpZWxkLXdyYXBwZXIge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIC5mb3JtLWN0cmwge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMHB4IDBweCAwcHggNXB4O1xuICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjZweDtcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogODBweDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmRpc3BsYXlDb21wIHtcbiAgICAgICAgICAgIC52aWV3LWNvbXAge31cbiAgICAgICAgICAgIC5lZGl0LWNvbXAge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuZWRpdENvbXAge1xuICAgICAgICAgICAgLnZpZXctY29tcCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmVkaXQtY29tcCB7fVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uYW5jaG9yVGFnQ3Vyc29yIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5NXB4KSxcbnNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDc2OHB4KSB7XG4gICAgI2RpdlNsb3RUYWJsZSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIG1heC1oZWlnaHQ6IDQ4MHB4O1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgLnRhYmxlLXNjcm9sbC13cmFwcGVyIHtcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDQzMHB4O1xuICAgICAgICB9XG4gICAgICAgIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB3aWR0aDogN3B4O1xuICAgICAgICAgICAgaGVpZ2h0OiA3cHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5taWRkbGUtc2VjdGlvbiB7XG4gICAgcGFkZGluZzogNXB4IDE1cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmFkZC1lZGl0IHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgaSB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRjb21tb24tYmx1ZTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB3aWR0aDogMTdweDtcbiAgICAgICAgaGVpZ2h0OiAxN3B4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gICAgfVxuICAgIHNwYW4ge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgfVxuICAgIC5leHBlbmQtYm94IHtcbiAgICAgICAgaSB7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTJweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbn1cblxuLmNyZWF0ZS1zdGFuZGFyZC1mb3JtIHtcbiAgICBtYXJnaW46IDAgMCAxMHB4IDA7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZDhkOGQ4O1xuICAgIC5mb3JtLWN0cmwge1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNjY2NjY2M7XG4gICAgfVxufVxuXG4uY2xvc2VCdG5DbGFzcyB7XG4gICAgbGluZS1oZWlnaHQ6IDExcHggIWltcG9ydGFudDtcbn1cblxuLmVkaXRDZWxsSW5wdXQge1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBkaXNwbGF5OiBibG9jaztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/master/slot/slot.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/master/slot/slot.component.ts ***!
  \**********************************************************/
/*! exports provided: SlotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlotComponent", function() { return SlotComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_slot_service_slot_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/slot-service/slot.service */ "./src/app/services/slot-service/slot.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/common-service */ "./src/app/services/common-service.ts");
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



let SlotComponent = /** @class */ (() => {
    let SlotComponent = class SlotComponent {
        constructor(apiService, commonService) {
            this.apiService = apiService;
            this.commonService = commonService;
            this.PageIndex = 1;
            this.studentdisplaysize = 10;
            this.slotTableList = [];
            this.createNewSlot = false;
            this.commonService.removeSelectionFromSideNav();
        }
        ngOnInit() {
            this.getAllSlotsFromServer();
        }
        getAllSlotsFromServer() {
            this.apiService.getAllSlots().subscribe((data) => {
                this.slotsDataSource = data;
                this.totalRow = data.length;
                this.fetchTableDataByPage(this.PageIndex);
            }, error => {
                this.commonService.showErrorMessage('error', '', error.error.message);
            });
        }
        addNewSlot(element) {
            if (element.value != "" && element.value != null) {
                this.apiService.addNewSlotToList({ "slot_name": element.value.trim() }).subscribe(data => {
                    this.commonService.showErrorMessage('success', 'Added', "Slot added successfully");
                    element.value = "";
                    this.getAllSlotsFromServer();
                }, error => {
                    this.commonService.showErrorMessage('error', '', error.error.message);
                });
            }
            else {
                this.commonService.showErrorMessage('error', '', "Please fill Slot Name");
            }
        }
        editRowTable(row, index) {
            document.getElementById(("row" + index).toString()).classList.remove('displayComp');
            document.getElementById(("row" + index).toString()).classList.add('editComp');
        }
        saveSlotInformation(row, index) {
            let data = { "slot_id": row.slot_id, "slot_name": row.slot_name };
            this.apiService.updateSlotName(data).subscribe(data => {
                this.cancelEditRow(index);
                this.getAllSlotsFromServer();
            }, error => {
                this.commonService.showErrorMessage('error', '', error.error.message);
            });
        }
        cancelEditRow(index) {
            document.getElementById(("row" + index).toString()).classList.add('displayComp');
            document.getElementById(("row" + index).toString()).classList.remove('editComp');
        }
        toggleCreateNewSlot() {
            if (this.createNewSlot == false) {
                this.createNewSlot = true;
                document.getElementById('showCloseBtn').style.display = '';
                document.getElementById('showAddBtn').style.display = 'none';
            }
            else {
                this.createNewSlot = false;
                document.getElementById('showCloseBtn').style.display = 'none';
                document.getElementById('showAddBtn').style.display = '';
            }
        }
        // pagination functions 
        fetchTableDataByPage(index) {
            this.PageIndex = index;
            let startindex = this.studentdisplaysize * (index - 1);
            this.slotTableList = this.getDataFromDataSource(startindex);
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
            let t = this.slotsDataSource.slice(startindex, startindex + this.studentdisplaysize);
            return t;
        }
    };
    SlotComponent.ctorParameters = () => [
        { type: _services_slot_service_slot_service__WEBPACK_IMPORTED_MODULE_1__["SlotApiService"] },
        { type: _services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonServiceFactory"] }
    ];
    SlotComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-slot',
            template: __importDefault(__webpack_require__(/*! raw-loader!./slot.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/master/slot/slot.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./slot.component.scss */ "./src/app/components/master/slot/slot.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_services_slot_service_slot_service__WEBPACK_IMPORTED_MODULE_1__["SlotApiService"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonServiceFactory"]])
    ], SlotComponent);
    return SlotComponent;
})();



/***/ }),

/***/ "./src/app/services/area-city-service/area-city.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/services/area-city-service/area-city.service.ts ***!
  \*****************************************************************/
/*! exports provided: CityAreaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityAreaService", function() { return CityAreaService; });
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




let CityAreaService = /** @class */ (() => {
    let CityAreaService = class CityAreaService {
        constructor(http, auth) {
            this.http = http;
            this.auth = auth;
            this.baseUrl = '';
            this.auth.currentAuthKey.subscribe(key => {
                this.Authorization = key;
                this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "Content-Type": "application/json", "Authorization": this.Authorization });
            });
            this.auth.currentInstituteId.subscribe(id => {
                this.institute_id = id;
            });
            // this.institute_id = this.auth.getInstituteId();
            // this.Authorization = this.auth.getAuthToken();
            this.baseUrl = this.auth.getBaseUrl();
            //this.headers = new HttpHeaders({ "Content-Type": "application/json", "Authorization": this.Authorization });
        }
        getAreaList() {
            let url = this.baseUrl + "/api/v1/cityArea/" + this.institute_id;
            return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(data => {
                return data;
            }, err => {
                return err;
            }));
        }
        saveNewCity(obj) {
            obj.main_branch_instId = this.institute_id;
            let url = this.baseUrl + "/api/v1/cityArea/create";
            return this.http.post(url, obj, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(data => {
                return data;
            }, err => {
                return err;
            }));
        }
        getBranchList() {
            let url = this.baseUrl + "/api/v1/institutes/all/Branches/" + this.institute_id;
            return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(data => {
                return data;
            }, err => {
                return err;
            }));
        }
    };
    CityAreaService.ctorParameters = () => [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"] }
    ];
    CityAreaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"]])
    ], CityAreaService);
    return CityAreaService;
})();



/***/ }),

/***/ "./src/app/services/slot-service/slot.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/slot-service/slot.service.ts ***!
  \*******************************************************/
/*! exports provided: SlotApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlotApiService", function() { return SlotApiService; });
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




let SlotApiService = /** @class */ (() => {
    let SlotApiService = class SlotApiService {
        constructor(http, auth) {
            this.http = http;
            this.auth = auth;
            this.baseUrl = '';
            this.auth.currentAuthKey.subscribe(key => {
                this.Authorization = key;
                this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "Content-Type": "application/json", "Authorization": this.Authorization });
            });
            this.auth.currentInstituteId.subscribe(id => {
                this.institute_id = id;
            });
            // this.institute_id = this.auth.getInstituteId();
            // this.Authorization = this.auth.getAuthToken();
            this.baseUrl = this.auth.getBaseUrl();
        }
        //get all slots
        getAllSlots() {
            let url = this.baseUrl + '/api/v1/inst_slot/all/' + this.institute_id;
            return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(data => {
                return data;
            }, error => {
                return error;
            }));
        }
        //add new slots
        addNewSlotToList(data) {
            data.institution_id = this.institute_id;
            let url = this.baseUrl + '/api/v1/inst_slot/';
            return this.http.post(url, data, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(data => {
                return data;
            }, error => {
                return error;
            }));
        }
        // update slot 
        updateSlotName(data) {
            data.institution_id = this.institute_id;
            let url = this.baseUrl + '/api/v1/inst_slot/' + data.slot_id;
            return this.http.put(url, data, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(data => {
                return data;
            }, error => {
                return error;
            }));
        }
    };
    SlotApiService.ctorParameters = () => [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"] }
    ];
    SlotApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"]])
    ], SlotApiService);
    return SlotApiService;
})();



/***/ })

}]);
//# sourceMappingURL=default~app-components-course-module-data-setup-academic-year-academic-year-module~app-components-le~468b79d7-es2015.js.map