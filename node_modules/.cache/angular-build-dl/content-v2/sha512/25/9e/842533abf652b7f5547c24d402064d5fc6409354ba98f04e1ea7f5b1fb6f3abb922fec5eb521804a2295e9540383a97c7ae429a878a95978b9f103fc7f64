(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-components-leads-leads-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/leads/data-setup/data-setup.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/leads/data-setup/data-setup.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"editCityArea\" class=\"modal fade\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h3 class=\"modal-title\">Edit Area</h3>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"edit-container\">\n          <div class=\"edit-item field-wrapper\">\n            <span class=\"edit-title\">Country Name </span>\n            <span>{{ (!editrecord?.country_name) ? '-' : editrecord.country_name}}</span>\n          </div>\n          <div class=\"edit-item field-wrapper\">\n            <span class=\"edit-title\">State Name </span>\n            <span>{{(!editrecord?.state_name) ? '-' : editrecord.state_name}}</span>\n          </div>\n          <div class=\"edit-item field-wrapper\">\n            <span class=\"edit-title\">City Name </span>\n            <span>{{ (!editrecord?.city) ? '-' : editrecord.city}}</span>\n          </div>\n          <div class=\"edit-item field-wrapper\">\n            <span class=\"edit-title\">Area Name </span>\n            <input type=\"text\" name=\"\" value=\"\" [(ngModel)]=\"editAreaName\" placeholder=\"Enter area name\"\n              class=\"edit-area-item form-ctrl\">\n          </div>\n          <div class=\"edit-item field-checkbox-wrapper\" style=\"width: 100px !important\">\n            <span class=\"edit-title\" style=\"width: 100%;\">Is Active</span>\n            <input type=\"checkbox\" id=\"active\" value=\"\" name=\"\" class=\"form-checkbox\" [(ngModel)]=\"editIsActiveStatus\">\n            <label for=\"active\"></label>\n          </div>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"updateArea()\">Update</button>\n      </div>\n    </div>\n\n  </div>\n</div>\n\n<div id=\"deleteModal\" class=\"modal fade\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <div class=\"alert-title-container\">\n          <i class=\"fa fa-exclamation-circle\" aria-hidden=\"true\"></i>\n          <h4 class=\"modal-title\">Alert</h4>\n        </div>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"msg-container\">\n          <span>Are you sure you want to delete it?</span>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">No, cancel!</button>\n        <button *ngIf=\"activeSession == 'city_area'\" type=\"button\" class=\"btn btn-default delete-btn\" (click)=\"deleteArea()\">Yes, delete it!</button>\n        <button *ngIf=\"activeSession == 'source'\" type=\"button\" class=\"btn btn-default delete-btn\" (click)=\"deleteSource(deleteAreaId)\">Yes, delete it!</button>\n        <button *ngIf=\"activeSession == 'Referred_by'\" type=\"button\" class=\"btn btn-default delete-btn\" (click)=\"deleteRefer(deleteAreaId)\">Yes, delete it!</button>\n        <button *ngIf=\"activeSession == 'customForm-field'\" type=\"button\" class=\"btn btn-default delete-btn\" (click)=\"deleteCustumfomField(component_id)\">Yes, delete it!</button>\n\n      </div>\n    </div>\n\n  </div>\n</div>\n<main class=\"page-content\" style=\"padding-left: 0 !important;\">\n  <div>\n     <div class=\"w98 p-15\">\n    <nav aria-label=\"breadcrumb \">\n        <ol style=\"padding-left: 0%;\" class=\"breadcrumb arr-right\">\n          <li class=\"breadcrumb-item \"><a>Leads</a></li>\n          <li class=\"breadcrumb-item \"><a >Setup</a></li>\n       </ol>\n      </nav>\n      <!-- Nav tabs -->\n<ul class=\"nav main-shadow\">\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" [ngClass]=\"(activeSession == 'source') ? 'active' : ''\" (click)=\"toggle('source');getSourceDetails()\">Source</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" [ngClass]=\"(activeSession == 'closing_reason') ? 'active' : ''\"(click)=\"toggle('closing_reason');getAllReasons()\">Closing Reason</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" [ngClass]=\"(activeSession == 'city_area') ? 'active' : ''\" (click)=\"toggle('city_area');getCountryList();searchArea();\" >City/Area</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" [ngClass]=\"(activeSession == 'Referred_by') ? 'active' : ''\" (click)=\"toggle('Referred_by');fetchReferInfo()\">Referred By</a>\n  </li>\n  <li class=\"nav-item\" *ngIf=\"!schoolModel && !isProfessional\">\n    <a class=\"nav-link\" [ngClass]=\"(activeSession == 'customForm-field') ? 'active' : ''\" (click)=\"toggle('customForm-field');fetchCustomFild()\">Custom Field</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" [ngClass]=\"(activeSession == 'settings') ? 'active' : ''\" (click)=\"toggle('settings');fetchSettingsInfo()\">Settings </a>\n  </li>\n</ul>\n  </div>\n</div>\n<!-- Tab panes -->\n<div class=\"tab-content\" style=\"margin-top: 10px;\">\n  <div id=\"Source\" *ngIf=\"activeSession == 'source'\" [ngClass]=\"(activeSession == 'source') ? 'active' : ''\" class=\"tab-pane\">\n    <div class=\"w96\">\n        <div style=\"margin-bottom: 10px;\">\n                  <input type=\"text\" [(ngModel)]=\"createSource.name\" class=\"reason-input\" name=\"soure\" placeholder=\"Add Source*\">\n                  <button (click)=\"addSourceData()\" class=\"add_master_tag\">Add</button>\n        </div>\n        <div>\n          <div class=\"tableContainer\" >\n            <!-- <div> -->\n              <div class=\"tableHeader\">\n                <div style=\"width: 80%;\" class=\"tableData\">\n                  Source Name\n                </div>\n                <div style=\"width: 20%;\" class=\"tableData\">\n                   <span class=\"right pr-40\">\n                    Action\n                  </span>\n                </div>\n              </div>\n            <!-- </div> -->\n            <div class=\"section\" *ngIf=\"sourceDetails?.length > 0\">\n              <div class=\"tableBody\" style=\"box-shadow:-1px 1px 6px 0px rgb(0 0 0 / 10%)\" *ngFor=\"let data of sourceDetails\">\n                <div style=\"width: 80%;\" [ngStyle]=\"{'padding':data.isEdit ? '0' : '10px 15px'}\" class=\"tableData\">\n                  <span *ngIf=\"!data.isEdit\">{{data.name}}</span> \n                  <span *ngIf=\"data.isEdit\">\n                    <input style=\"margin: 0\" type=\"text\" [(ngModel)]=\"data.new_source_name\" class=\"reason-input\" name=\"soure\">\n                  </span> \n                </div>\n                <div style=\"width: 20%;\" *ngIf=\"!data.isEdit\" class=\"tableData\">\n                  <span class=\"right pr-40\" style=\"padding-right: 20px;\">\n                  <a (click)=\"EditSource(data, data.name)\" style=\"vertical-align: middle;cursor: pointer;\">\n                    <img src=\"../../../../assets/images/EDit.png\">\n                  </a>\n                  <a aria-hidden=\"true\" data-toggle=\"modal\" data-target=\"#deleteModal\" (click)=\"setDeleteAreaId(data)\" style=\"cursor: pointer;\" class=\"pl-10\">\n                    <i style=\"color: red;font-size: 18px;font-weight: 400;\" class=\"fa fa-trash\"></i>\n                  </a>\n                </span>\n              </div>\n              <div style=\"width: 20%;\" *ngIf=\"data.isEdit\" class=\"tableData\">\n                <span class=\"updateAction\" (click)=\"updateSource(data)\">Update</span>\n                <span class=\"updateAction\" (click)=\"cancelEditSource(data)\">Cancel</span>\n              </div>\n              </div>\n            </div>\n            <div class=\"section no-records\" *ngIf=\"!sourceDetails?.length && !auth.isRippleLoad.getValue()\">\n              No Records found\n            </div>\n          </div>\n        </div>\n      </div>\n  </div>\n  <div id=\"closing_reason\" *ngIf=\"activeSession == 'closing_reason'\" [ngClass]=\"(activeSession == 'closing_reason') ? 'active' : ''\" class=\"tab-pane\">\n    <div class=\"w96\">\n        <div style=\"margin-bottom: 10px;\">\n                  <input type=\"text\" class=\"reason-input\" name=\"\" [(ngModel)]=\"createNewReasonObj.closing_desc\" placeholder=\"Add closing reason*\">\n                  <button (click)=\"createNewReason()\" class=\"add_master_tag\">Add</button>\n        </div>\n        <div>\n          <div class=\"tableContainer\" >\n            <!-- <div> -->\n              <div class=\"tableHeader\">\n                <div style=\"width: 80%;\" class=\"tableData\">\n                  Closing Reason\n                </div>\n                <div style=\"width: 20%;\" class=\"tableData\">\n                   <span class=\"right pr-40\">\n                    Action\n                  </span>\n                </div>\n              </div>\n            <!-- </div> -->\n            <div class=\"section\" *ngIf=\"getAllClosingReasons?.length > 0\">\n              <div class=\"tableBody\" style=\"box-shadow:-1px 1px 6px 0px rgb(0 0 0 / 10%)\" *ngFor=\"let data of getAllClosingReasons\">\n                <div style=\"width: 80%;\" [ngStyle]=\"{'padding':data.isEdit ? '0' : '10px 15px'}\" class=\"tableData\">\n                  <span *ngIf=\"!data.isEdit\">{{data.closing_desc}}</span> \n                  <span *ngIf=\"data.isEdit\">\n                    <input style=\"margin: 0\" type=\"text\" [(ngModel)]=\"data.new_source_name\" class=\"reason-input\" name=\"soure\">\n                  </span> \n                </div>\n                <div style=\"width: 20%;\" *ngIf=\"!data.isEdit\" class=\"tableData\">\n                  <span class=\"right pr-40\">\n                  <a (click)=\"EditSource(data, data.closing_desc)\" style=\"vertical-align: middle;cursor: pointer;\">\n                    <img src=\"../../../../assets/images/EDit.png\">\n                  </a>\n                </span>\n              </div>\n              <div style=\"width: 20%;\" *ngIf=\"data.isEdit\" class=\"tableData\">\n                <span class=\"updateAction\" (click)=\"saveInformation(data, 0)\">Update</span>\n                <span class=\"updateAction\" (click)=\"cancelEditSource(data)\">Cancel</span>\n              </div>\n              </div>\n            </div>\n            <div class=\"section no-records\" *ngIf=\"!getAllClosingReasons?.length && !auth.isRippleLoad.getValue()\">\n              No Records found\n            </div>\n          </div>\n        </div>\n      </div>\n  </div>\n  <div id=\"city_area\" *ngIf=\"activeSession == 'city_area'\" [ngClass]=\"(activeSession == 'city_area') ? 'active' : ''\" class=\"tab-pane\">\n    <div class=\"w96\">\n        <div style=\"margin-bottom: 10px;\">\n          <div class=\"row\">\n            <div class=\"col-lg-12 col-12\" style=\"padding: 0;\">\n              <div class=\"row\">\n                <div class=\"col-lg-9 col-12\" style=\"padding: 0;display: -webkit-box;-webkit-box-align: center;\">\n                  <!-- <form class=\"p-10\"> -->\n                    <div class=\"row\">\n                      <div class=\"filter-item field-wrapper\" style=\"margin-left: 0px;\">\n                        <select class=\"form-ctrl input-select\" name=\"\" [(ngModel)]=\"filter.country_ids\" (ngModelChange)=\"getStateList()\">\n                          <option value=\"-1\">Select Country</option>\n                          <option title=\"{{country.country_name}}\" [value]=\"country.id\" *ngFor=\"let country of countryList\">\n                            {{ (country.country_name.length > 30) ? (country.country_name | slice:0:30) + '...' : country.country_name }}\n                          </option>\n                        </select>\n                      </div>\n                      <div class=\"filter-item field-wrapper\">\n                        <select class=\"form-ctrl input-select\" name=\"\" [(ngModel)]=\"filter.state_ids\" (ngModelChange)=\"getCityList()\">\n                          <option value=\"-1\">Select State</option>\n                          <option title=\"{{state.state_name}}\" [value]=\"state.state_id\" *ngFor=\"let state of stateList\">\n                            {{ (state.state_name.length > 30) ? (state.state_name | slice:0:30) + '...' : state.state_name }}</option>\n                        </select>\n                      </div>\n                      <div class=\"filter-item field-wrapper\">\n                        <select class=\"form-ctrl input-select\" name=\"\" [(ngModel)]=\"filter.city_ids\">\n                          <option value=\"-1\">Select City</option>\n                          <option title=\"{{city.city_name}}\" [value]=\"city.city_id\" *ngFor=\"let city of cityList\">\n                            {{ (city.city_name.length > 30) ? (city.city_name | slice:0:30) + '...' : city.city_name }}</option>\n                        </select>\n                      </div>\n                      <div class=\"filter-item field-checkbox-wrapper\" style=\"width: 100px !important; margin-top: 30px;\">\n                        <span class=\"edit-title\" style=\"width: 100%;\">Is Active</span>\n                        <input type=\"checkbox\" id=\"active\" value=\"\" name=\"\" class=\"form-checkbox\" [(ngModel)]=\"filter.is_active\">\n                        <label for=\"active\"></label>\n                      </div>\n                      <div class=\"col-lg-1 col-12\">\n                          <button class=\"search\" (click)=\"searchArea()\">Search</button>\n                      </div>\n                    </div>\n                  <!-- </form> -->\n                </div>\n                <div class=\"col-lg-3 col-12\" style=\"padding: 0;\">\n                 <span class=\"right\">\n                  <input type=\"text\" [(ngModel)]=\"areaSearchInput\" name=\"areaSearchInput\"\n                  (keyup)=\"searchDatabase(search)\" placeholder=\"Search\" class=\"input magnifying-glass\">\n                  <button class=\"add_master_tag\" (click)=\"toggleAddArea()\">Add Area</button>\n              </span>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        \n        <div>\n          <div class=\"tableContainer\">\n            <div class=\"tableHeader\">\n              <div class=\"tableData small\">\n                <span>State</span>\n              </div>\n              <div class=\"tableData small\">\n                <span>City</span>\n              </div>\n              <div class=\"tableData large\" style=\"width: 50%;\">\n                <span>Area</span>\n              </div>\n              <!-- <div class=\"tableData align-center medium\">\n                <span>Active Status</span>\n              </div> -->\n              <div class=\"tableData align-center medium\">\n                <span class=\"pr-40 right\">Action</span>\n              </div>\n            </div>\n            <div class=\"section\" *ngIf=\"countryStateAreaList?.length > 0\">\n              <div class=\"tableBody\" style=\"box-shadow:-1px 1px 6px 0px rgb(0 0 0 / 10%)\" *ngFor=\"let record of countryStateAreaList\">\n                <div class=\"tableData small\">\n                  <span\n                    title=\"{{record?.state_name}}\">{{ (!record.state_name) ? '-' : (record.state_name.length > 20) ? (record.state_name | slice:0:20) + '...' : record.state_name}}</span>\n                </div>\n                <div class=\"tableData small\">\n                  <span\n                    title=\"{{record?.city}}\">{{ (!record.city) ? '-' : (record.city.length > 20) ? (record.city | slice:0:20) + '...' : record.city}}</span>\n                </div>\n                <div class=\"tableData large\" style=\"width: 50%;\">\n                  <span\n                    title=\"{{record?.area}}\">{{ (!record.area) ? '-' : (record.area.length > 50) ? (record.area | slice:0:50) + '...' : record.area }}</span>\n                </div>\n                <!-- <div class=\"tableData align-center medium\">\n                  <span *ngIf=\"record?.is_active == 'Y'\" class=\"yes\">Yes</span>\n                  <span *ngIf=\"record?.is_active == 'N'\" class=\"no\">No</span>\n                </div> -->\n                <div class=\"tableData align-center medium\">\n                  <span class=\"right pr-40\" style=\"padding-right: 25px\">\n                    <a (click)=\"editArea(record)\" data-toggle=\"modal\" data-target=\"#editCityArea\" style=\"vertical-align: middle;cursor: pointer;\">\n                      <img src=\"../../../../assets/images/EDit.png\">\n                    </a>\n                    <a aria-hidden=\"true\" data-toggle=\"modal\" data-target=\"#deleteModal\" (click)=\"setDeleteAreaId(record)\" style=\"cursor: pointer;\" class=\"pl-10\">\n                      <i style=\"color: red;font-size: 18px;font-weight: 400;\" class=\"fa fa-trash\"></i>\n                    </a>\n                  </span>\n                </div>\n              </div>\n            </div>\n            <div class=\"section no-records\" *ngIf=\"!countryStateAreaList.length && !auth.isRippleLoad.getValue()\">\n              <span>No Records Found</span>\n            </div>\n          </div>\n        </div>\n        \n    </div>\n  </div>\n  <div id=\"Referred_by\" *ngIf=\"activeSession == 'Referred_by'\" [ngClass]=\"(activeSession == 'Referred_by') ? 'active' : ''\" class=\"tab-pane\">\n    <div class=\"w96\">\n        <div style=\"margin-bottom: 10px;\">\n                  <input type=\"text\" [(ngModel)]=\"createReferer.name\" class=\"reason-input\" name=\"\" placeholder=\"Add Referrer*\">\n                  <button (click)=\"addReferData()\" class=\"add_master_tag\">Add</button>\n        </div>\n        <div>\n          <div class=\"tableContainer\" >\n            <!-- <div> -->\n              <div class=\"tableHeader\">\n                <div style=\"width: 80%;\" class=\"tableData\">\n                  Referrer Name\n                </div>\n                <div style=\"width: 20%;\" class=\"tableData\">\n                   <span class=\"right pr-40\">\n                    Action\n                  </span>\n                </div>\n              </div>\n            <!-- </div> -->\n            <div class=\"section\" *ngIf=\"referList?.length > 0\">\n              <div class=\"tableBody\" style=\"box-shadow:-1px 1px 6px 0px rgb(0 0 0 / 10%)\" *ngFor=\"let data of referList\">\n                <div style=\"width: 80%;\" [ngStyle]=\"{'padding':data.isEdit ? '0' : '10px 15px'}\" class=\"tableData\">\n                  <span *ngIf=\"!data.isEdit\">{{data.name}}</span> \n                  <span *ngIf=\"data.isEdit\">\n                    <input style=\"margin: 0\" type=\"text\" [(ngModel)]=\"data.new_source_name\" class=\"reason-input\" name=\"soure\">\n                  </span> \n                </div>\n                <div style=\"width: 20%;\" *ngIf=\"!data.isEdit\" class=\"tableData\">\n                  <span class=\"right pr-40\" style=\"padding-right: 25px;\">\n                  <a (click)=\"EditSource(data, data.name)\" style=\"vertical-align: middle;cursor: pointer;\">\n                    <img src=\"../../../../assets/images/EDit.png\">\n                  </a>\n                  <a aria-hidden=\"true\" data-toggle=\"modal\" data-target=\"#deleteModal\" (click)=\"setDeleteAreaId(data)\" style=\"cursor: pointer;\" class=\"pl-10\">\n                    <i style=\"color: red;font-size: 18px;font-weight: 400;\" class=\"fa fa-trash\"></i>\n                  </a>\n                </span>\n              </div>\n              <div style=\"width: 20%;\" *ngIf=\"data.isEdit\" class=\"tableData\">\n                <span class=\"updateAction\" (click)=\"updateRefer(data)\">Update</span>\n                <span class=\"updateAction\" (click)=\"cancelEditSource(data)\">Cancel</span>\n              </div>\n              </div>\n            </div>\n            <div class=\"section no-records\" *ngIf=\"!referList.length && !auth.isRippleLoad.getValue()\">\n              <span>No Records Found</span>\n            </div>\n          </div>\n        </div>\n      </div>\n  </div>\n  <!-- ====custom-field-table=================== -->\n  <div id=\"customForm-field\" *ngIf=\"activeSession == 'customForm-field'\" [ngClass]=\"(activeSession == 'customForm-field') ? 'active' : ''\" class=\"tab-pane\">\n    <div class=\"w96\">\n        <div style=\"margin-bottom: 10px;\">\n          <!-- <input type=\"text\" class=\"reason-input\" name=\"\" [(ngModel)]=\"createNewReasonObj.closing_desc\" placeholder=\"Add closing reason*\"> -->\n          <button  class=\"add_master_tag2\" (click)=\"onClickAddField('Add')\">Add Custom Field</button>\n        </div>\n        <div>\n          <div class=\"tableContainer custTable\" >\n            <!-- <div> -->\n              <div class=\"tableHeader\">\n                <div  class=\"tableData\">\n                  Field Name\n                </div>\n                <div  class=\"tableData\">\n                  Type\n                </div>\n                <div  class=\"tableData\" style=\"padding-top: 0;\">\n                  Show On Student\n                </div>\n                <div  class=\"tableData\">\n                  Is Required\n                </div><div  class=\"tableData\">\n                  Is Searchable\n                </div>\n                <div  class=\"tableData\">\n                  Sequence\n                </div>\n                <div  class=\"tableData\">\n                  Max Length\n                </div>\n                <div  class=\"tableData\">\n                  Default Value\n                </div>\n                <div  class=\"tableData\">\n                  Is External\n                </div>\n                <div style=\"padding-right: 4%;\" class=\"tableData\">\n                   <span class=\"right pr-40\">\n                    Action\n                  </span>\n                </div>\n              </div>\n            <div class=\"section\" *ngIf=\"custumFieldList?.length > 0\">\n              <div class=\"tableBody\" style=\"box-shadow:-1px 1px 6px 0px rgb(0 0 0 / 10%)\" *ngFor=\"let item of custumFieldList\">\n                <div   class=\"tableData\">\n                  <span title=\"{{item.label}}\">{{(!item.label) ? '-' : (item.label.length > 10) ? (item.label | slice : 0:10)+ '...' : item.label }}</span> \n               \n                </div>\n                <div  class=\"tableData\">\n                  <span title=\"{{item.type|checkBoxConverter}}\">{{item.type|checkBoxConverter}}</span> \n\n                </div>\n                <div  class=\"tableData\">\n                  <span title=\"{{item.on_both}}\">{{item.on_both}}</span> \n\n                </div>\n                <div   class=\"tableData\">\n                  <span title=\"{{item.is_required}}\">{{item.is_required}}</span> \n\n                </div>\n                <div   class=\"tableData\">\n                  <span title=\"{{item.is_searchable}}\">{{item.is_searchable}}</span> \n\n                </div>\n                <div   class=\"tableData\">\n                  <span title=\"{{item.sequence_number}}\">{{item.sequence_number}}</span> \n\n                </div>\n                <div  class=\"tableData\">\n                  <span title=\"{{item.comp_length}}\">{{item.comp_length}}</span> \n\n                </div>\n                <div   class=\"tableData\">\n                  <span title=\"{{item.defaultValue}}\">{{item.defaultValue}}</span> \n\n                </div>\n                <div  class=\"tableData\">\n                  <span title=\"{{item.is_external}}\">{{item.is_external}}</span> \n\n                </div>\n\n                <div   class=\"tableData\">\n                  <span class=\"right pr-40\" style=\"padding-right: 25px;\">\n                  <a  (click)=\"onClickeditCustomField(item)\"  style=\"vertical-align: middle;cursor: pointer;\">\n                    <img src=\"../../../../assets/images/EDit.png\">\n                  </a>\n                 \n                  <a aria-hidden=\"true\" data-toggle=\"modal\" data-target=\"#deleteModal\" (click)=\"selecteCustomformId(item.component_id)\" style=\"cursor: pointer;\" class=\"pl-10\">\n                    <i style=\"color: red;font-size: 18px;font-weight: 400;\" class=\"fa fa-trash\"></i>\n                  </a>\n                </span>\n              </div>\n             \n              </div>\n              \n            </div>\n            <div class=\"empdata\" *ngIf=\"!custumFieldList?.length\">\n              <b>Note:</b>\n              <p > If want to add additional fields in enquiry form then click on <b>Add Custom Field</b>. Multiple types of field can be created through custom form field.</p>\n            </div>\n          </div>\n        </div>\n      </div>\n      </div>\n  \n  <!-- =======end============== -->\n</div>\n</main>\n\n<app-add-city-area *ngIf=addArea (closePopup)=\"toggleAddArea($event)\" [selectedData]=\"selectedData\">\n</app-add-city-area>\n<!-----------------------------Setting tab code ------------------------------------------->\n<div class=\"page-content settingDiv\" *ngIf=\"jsonFlagForSetting\">\n</div>\n<!-----------------------------Setting tab code ------------------------------------------->\n\n<div class=\"page-content\" *ngIf=\"activeSession == 'settings'\">\n  <div class=\"w981 main_div\" data-spy=\"scroll\" data-target=\".menu\" data-offset=\"50\">\n    <div>\n      <div class=\"settings\">\n        <span>\n          <img src=\"../../../../assets/images/settings.svg\">\n           <span class=\"position\"> Settings</span>\n        </span>\n      </div>\n      <ul class=\"menu\">\n        <li  (click)=\"scrollTo('section1')\" [ngClass]=\"{ 'selected': currentSection === 'section1'}\"><a>Email Notification</a></li>\n        <li (click)=\"scrollTo('section2')\" [ngClass]=\"{ 'selected': currentSection === 'section2'}\" ><a >General Setting</a> </li>\n        <li (click)=\"scrollTo('section3')\" [ngClass]=\"{ 'selected': currentSection === 'section3'}\"><a>Enable Enquiry Notifications SMS </a></li>\n        <li (click)=\"scrollTo('section4')\" [ngClass]=\"{ 'selected': currentSection === 'section4'}\"><a >External Lead Sources\n            <br>Integration </a></li>\n      </ul>\n    </div>\n    <div class=\"scrool1\" >\n      <div class=\"flex1\" id=\"section1\">\n        <!-- main settings -->\n        <div>\n          <span class=\"ellipse\">E</span><span class=\"blue_line\"></span>\n        </div>\n        <div>\n          <p class=\"blue_settings\">\n            Email Notifications\n          </p>\n          <p class=\"bold_settings\">\n            Enquiry Follow Up Notifications On Email\n          </p>\n           <p class=\"black_settings\">\n            Get notifications on Email  for all enquiry follow ups.\n           </p>\n        </div>\n        <div class=\"toggle\">\n          <span>\n            <span class=\"off\">OFF</span>\n            <label class=\"switch\">\n              <input type=\"checkbox\" [(ngModel)]=\"leadSettings.enable_daily_enquiry_follow_email\" name=\"enable_daily_enquiry_follow_email\" id=\"enable_daily_enquiry_follow_email\">\n              <span class=\"slider round\"></span>\n            </label>\n            <span class=\"on\">ON</span>\n          </span>\n          \n        </div>\n      </div>\n        <div class=\"sep_line\"></div>\n      <div class=\"flex1 \" id=\"section2\">\n        <!-- main settings -->\n        <div>\n          <span class=\"ellipse\">G</span><span class=\"blue_line\"></span>\n        </div>\n        <div>\n          <p class=\"blue_settings\">\n            General Setting \n          </p>\n          <p class=\"bold_settings\">\n            Open Enquiry Visibility Feature\n          </p>\n           <p class=\"black_settings\">\n            Enable open enquiries visible to all users.\n           </p>\n        </div>\n        <div class=\"toggle\">\n          <span>\n            <span class=\"off\">OFF</span>\n            <label class=\"switch\">\n              <input type=\"checkbox\" [(ngModel)]=\"leadSettings.open_enq_Visibility_feature\" name=\"open_enq_Visibility_feature\" id=\"open_enq_Visibility_feature\" >\n              <span class=\"slider round\"></span>\n            </label>\n            <span class=\"on\">ON</span>\n          </span>\n          \n        </div>\n      </div>\n        <div class=\"sep_line\"></div>\n      <div class=\"flex1 \">\n        <!-- main settings -->\n        <div>\n          <span class=\"ellipse hidden\">E</span><span class=\"blue_line hidden\"></span>\n        </div>\n        <div>\n         \n          <p class=\"bold_settings\">\n            Enable Duplicate Enquiry Contact No Feature\n          </p>\n           <p class=\"black_settings\">\n            Allow to add same contact no in Enquiry.\n           </p>\n        </div>\n        <div class=\"toggle s_toggle\">\n          <span>\n            <span class=\"off\">OFF</span>\n            <label class=\"switch\">\n              <input type=\"checkbox\" [(ngModel)]=\"leadSettings.enable_duplicate_enquiry_contact_no_feature\" name=\"enable_duplicate_enquiry_contact_no_feature\" id=\"enable_duplicate_enquiry_contact_no_feature\"  >\n              <span class=\"slider round\"></span>\n            </label>\n            <span class=\"on\">ON</span>\n          </span>\n          \n        </div>\n      </div>\n        <div class=\"sep_line\"></div>\n      <div class=\"flex1\" id=\"section3\" >\n        <!-- main settings -->\n        <div>\n          <span class=\"ellipse\">S</span><span class=\"blue_line\"></span>\n        </div>\n        <div>\n          <p class=\"blue_settings\">\n          Enable Enquiry Notifications SMS\n          </p>\n          <p class=\"bold_settings\">\n            Master Enquiry Notification\n          </p>\n           <p class=\"black_settings\">\n            Get notifications SMS on/off for all below enquiry settings.\n           </p>\n        </div>\n        <div class=\"toggle\">\n          <span>\n            <span class=\"off\">OFF</span>\n            <label class=\"switch\">\n              <input type=\"checkbox\" [(ngModel)]=\"leadSettings.enable_enquiry_notification\" name=\"enable_enquiry_notification\" id=\"enable_enquiry_notification\"  >\n              <span class=\"slider round\"></span>\n            </label>\n            <span class=\"on\">ON</span>\n          </span>\n          \n        </div>\n      </div>\n      <div class=\"flex1\" >\n        <!-- main settings -->\n        <div>\n          <span class=\"ellipse hidden\">S</span><span class=\"blue_line hidden\"></span>\n        </div>\n        <div>\n          <p class=\"bold_settings\">\n            External Lead Notification (Admin)\n          </p>\n           <p class=\"black_settings\">\n            Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n           </p>\n           <div class=\"flex\">\n             <div class=\"flex\">\n               <div>\n                 <label class=\"checkbox\">\n                    <span class=\"checkbox__input\">\n                      <input type=\"checkbox\" name=\"checked\" [(ngModel)]=\"leadSettings.external_lead_notification_admin.admin\"\n                      id=\"external_lead_notification_admin_1\" >\n                      <span class=\"checkbox__control\">\n                       <svg viewBox='0 0 24 24' aria-hidden=\"true\" focusable=\"false\">\n                          <path fill='none' stroke='currentColor'  d='M1.3 12.91l6.37 6.37L22.79 4.59' /></svg>\n                      </span>\n                    </span>\n                  </label>\n               </div>\n                <div>\n                 <p class=\"settings_label\">\n                   Facebook\n                 </p>\n               </div>\n             </div>\n              <div class=\"flex\">\n               <div>\n                 <label class=\"checkbox\">\n                    <span class=\"checkbox__input\">\n                      <input type=\"checkbox\" name=\"checked\"  [(ngModel)]=\"leadSettings.external_lead_notification_admin.student\"\n                      id=\"external_lead_notification_admin_2\">\n                      <span class=\"checkbox__control\">\n                       <svg viewBox='0 0 24 24' aria-hidden=\"true\" focusable=\"false\">\n                          <path fill='none' stroke='currentColor'  d='M1.3 12.91l6.37 6.37L22.79 4.59' /></svg>\n                      </span>\n                    </span>\n                  </label>\n               </div>\n                <div>\n                 <p class=\"settings_label\">\n                   Justdail\n                 </p>\n               </div>\n             </div>\n             <div class=\"flex\">\n               <div>\n                 <label class=\"checkbox\">\n                    <span class=\"checkbox__input\">\n                      <input type=\"checkbox\" name=\"checked\"  [(ngModel)]=\"leadSettings.external_lead_notification_admin.parent\"\n                      id=\"external_lead_notification_admin_3\">\n                      <span class=\"checkbox__control\">\n                       <svg viewBox='0 0 24 24' aria-hidden=\"true\" focusable=\"false\">\n                          <path fill='none' stroke='currentColor'  d='M1.3 12.91l6.37 6.37L22.79 4.59' /></svg>\n                      </span>\n                    </span>\n                  </label>\n               </div>\n                <div>\n                 <p class=\"settings_label\">\n                 Sulekha\n                 </p>\n               </div>\n             </div>\n             <div class=\"flex\">\n               <div>\n                 <label class=\"checkbox\">\n                    <span class=\"checkbox__input\">\n                      <input type=\"checkbox\" name=\"checked\"  [(ngModel)]=\"leadSettings.external_lead_notification_admin.teacher\"\n                      id=\"external_lead_notification_admin_4\">\n                      <span class=\"checkbox__control\">\n                       <svg viewBox='0 0 24 24' aria-hidden=\"true\" focusable=\"false\">\n                          <path fill='none' stroke='currentColor'  d='M1.3 12.91l6.37 6.37L22.79 4.59' /></svg>\n                      </span>\n                    </span>\n                  </label>\n               </div>\n                <div>\n                 <p class=\"settings_label\">\n                  Urban Pro \n                 </p>\n               </div>\n             </div>\n             <div class=\"flex\">\n               <div>\n                 <label class=\"checkbox\">\n                   \n                    <span class=\"checkbox__input\">\n                      <input type=\"checkbox\" name=\"checked\"   [(ngModel)]=\"leadSettings.external_lead_notification_admin.gaurdian\"\n                      id=\"external_lead_notification_admin_5\">\n                      <span class=\"checkbox__control\">\n                       <svg viewBox='0 0 24 24' aria-hidden=\"true\" focusable=\"false\">\n                          <path fill='none' stroke='currentColor'  d='M1.3 12.91l6.37 6.37L22.79 4.59' /></svg>\n                      </span>\n                    </span>\n                  </label>\n               </div>\n                <div>\n                 <p class=\"settings_label\">\n                Website\n                 </p>\n               </div>\n             </div>\n           </div>\n        </div>\n      \n      </div>\n      <div class=\"flex1 \" >\n        <!-- main settings -->\n        <div>\n          <span class=\"ellipse hidden\">S</span><span class=\"blue_line hidden\"></span>\n        </div>\n        <div>\n          <p class=\"bold_settings\">\n           External Lead Notification (Enquirer)\n          </p>\n           <p class=\"black_settings\">\n            Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n           </p>\n           <div class=\"flex\">\n             <div class=\"flex\">\n               <div>\n                 <label class=\"checkbox\">\n                    <span class=\"checkbox__input\">\n                      <input type=\"checkbox\" name=\"checked\"    [(ngModel)]=\"leadSettings.external_lead_notification_enquirer.admin\"\n                      id=\"external_lead_notification_enquirer_1\" >\n                      <span class=\"checkbox__control\">\n                       <svg viewBox='0 0 24 24' aria-hidden=\"true\" focusable=\"false\">\n                          <path fill='none' stroke='currentColor'  d='M1.3 12.91l6.37 6.37L22.79 4.59' /></svg>\n                      </span>\n                    </span>\n                  </label>\n               </div>\n                <div>\n                 <p class=\"settings_label\">\n                   Facebook\n                 </p>\n               </div>\n             </div>\n              <div class=\"flex\">\n               <div>\n                 <label class=\"checkbox\">\n                    <span class=\"checkbox__input\">\n                      <input type=\"checkbox\" name=\"checked\" [(ngModel)]=\"leadSettings.external_lead_notification_enquirer.student\"\n                      id=\"external_lead_notification_enquirer_2\">\n                      <span class=\"checkbox__control\">\n                       <svg viewBox='0 0 24 24' aria-hidden=\"true\" focusable=\"false\">\n                          <path fill='none' stroke='currentColor'  d='M1.3 12.91l6.37 6.37L22.79 4.59' /></svg>\n                      </span>\n                    </span>\n                  </label>\n               </div>\n                <div>\n                 <p class=\"settings_label\">\n                   Justdail\n                 </p>\n               </div>\n             </div>\n             <div class=\"flex\">\n               <div>\n                 <label class=\"checkbox\">\n                    <span class=\"checkbox__input\">\n                      <input type=\"checkbox\" name=\"checked\"  [(ngModel)]=\"leadSettings.external_lead_notification_enquirer.parent\"\n                      id=\"external_lead_notification_enquirer_3\">\n                      <span class=\"checkbox__control\">\n                       <svg viewBox='0 0 24 24' aria-hidden=\"true\" focusable=\"false\">\n                          <path fill='none' stroke='currentColor'  d='M1.3 12.91l6.37 6.37L22.79 4.59' /></svg>\n                      </span>\n                    </span>\n                  </label>\n               </div>\n                <div>\n                 <p class=\"settings_label\">\n                 Sulekha\n                 </p>\n               </div>\n             </div>\n             <div class=\"flex\">\n               <div>\n                 <label class=\"checkbox\">\n                    <span class=\"checkbox__input\">\n                      <input type=\"checkbox\" name=\"checked\"   [(ngModel)]=\"leadSettings.external_lead_notification_enquirer.teacher\"\n                      id=\"external_lead_notification_enquirer_4\">\n                      <span class=\"checkbox__control\">\n                       <svg viewBox='0 0 24 24' aria-hidden=\"true\" focusable=\"false\">\n                          <path fill='none' stroke='currentColor'  d='M1.3 12.91l6.37 6.37L22.79 4.59' /></svg>\n                      </span>\n                    </span>\n                  </label>\n               </div>\n                <div>\n                 <p class=\"settings_label\">\n                  Urban Pro \n                 </p>\n               </div>\n             </div>\n             <div class=\"flex\">\n               <div>\n                 <label class=\"checkbox\">\n                    <span class=\"checkbox__input\">\n                      <input type=\"checkbox\" name=\"checked\" [(ngModel)]=\"leadSettings.external_lead_notification_enquirer.gaurdian\"\n                      id=\"external_lead_notification_enquirer_5\">\n                      <span class=\"checkbox__control\">\n                       <svg viewBox='0 0 24 24' aria-hidden=\"true\" focusable=\"false\">\n                          <path fill='none' stroke='currentColor' d='M1.3 12.91l6.37 6.37L22.79 4.59' /></svg>\n                      </span>\n                    </span>\n                  </label>\n               </div>\n                <div>\n                 <p class=\"settings_label\">\n                Website\n                 </p>\n               </div>\n             </div>\n           </div>\n        </div>\n      \n      </div>\n      <div class=\"flex1 \">\n        <!-- main settings -->\n        <div>\n          <span class=\"ellipse hidden\">S</span><span class=\"blue_line hidden\"></span>\n        </div>\n        <div>\n          <p class=\"bold_settings\">\n           New Enquiry Message\n          </p>\n           <p class=\"black_settings\">\n            SMS notifications on adding new enquiry.\n           </p>\n           <div class=\"flex\">\n             <div class=\"flex\">\n               <div>\n                 <label class=\"checkbox\">\n                    <span class=\"checkbox__input\">\n                      <input type=\"checkbox\" name=\"checked\" class=\"form-checkbox\"\n                      [(ngModel)]=\"leadSettings.enquiry_notification.student\" id=\"ch26\">\n                      <span class=\"checkbox__control\">\n                       <svg viewBox='0 0 24 24' aria-hidden=\"true\" focusable=\"false\">\n                          <path fill='none' stroke='currentColor'  d='M1.3 12.91l6.37 6.37L22.79 4.59' /></svg>\n                      </span>\n                    </span>\n                  </label>\n               </div>\n                <div>\n                 <p class=\"settings_label\">\n                   Student\n                 </p>\n               </div>\n             </div>\n              <div class=\"flex\">\n               <div>\n                 <label class=\"checkbox\">\n                    <span class=\"checkbox__input\">\n                      <input type=\"checkbox\" name=\"checked\" [(ngModel)]=\"leadSettings.enquiry_notification.admin\" id=\"ch27\">\n                      <span class=\"checkbox__control\">\n                       <svg viewBox='0 0 24 24' aria-hidden=\"true\" focusable=\"false\">\n                          <path fill='none' stroke='currentColor'  d='M1.3 12.91l6.37 6.37L22.79 4.59' /></svg>\n                      </span>\n                    </span>\n                  </label>\n               </div>\n                <div>\n                 <p class=\"settings_label\">\n                   Admin\n                 </p>\n               </div>\n             </div>\n           </div>\n        </div>\n      \n      </div>\n       <div class=\"sep_line\"></div>\n      <div class=\"flex1\">\n        <!-- main settings -->\n        <div>\n          <span class=\"ellipse hidden\">G</span><span class=\"blue_line hidden\"></span>\n        </div>\n        <div>\n          <div class=\"flex\">\n            <!-- <div>\n              <label class=\"checkbox\">\n                 <span class=\"checkbox__input\">\n                   <input type=\"checkbox\" name=\"checked\" id=\"enquiryInSMS\"\n                   [(ngModel)]=\"leadSettings.enable_counsellor_number_to_enquirer_in_sms\">\n                   <span class=\"checkbox__control\">\n                    <svg viewBox='0 0 24 24' aria-hidden=\"true\" focusable=\"false\">\n                       <path fill='none' stroke='currentColor'  d='M1.3 12.91l6.37 6.37L22.79 4.59' /></svg>\n                   </span>\n                 </span>\n               </label>\n            </div> -->\n             <div>\n              <p class=\"bold_settings\">\n                Send councellor no. to enquirers in SMS on enquiry addition\n\n              </p>\n            </div>\n          </div>\n          <p class=\"bold_settings\">\n          </p>\n           <!-- <p class=\"black_settings\">\n          Share councellor no. to enquirers once enquiry is added.\n           </p> -->\n           <div  *ngIf=\"leadSettings.enable_counsellor_number_to_enquirer_in_sms==1 ||leadSettings.enable_counsellor_number_to_enquirer_in_sms==true \">\n            <p class=\"black_settings1\">\n          Contact No. of  councellor(s) for SMS\n           </p>\n           <input type=\"text\" class=\"input\"  (keyup)=\"maxlenth(leadSettings.inst_enquiry_handler_no,10)\"  name=\"inst_enquiry_handler_no\" min=\"0\" max=\"9999999999\" id=\"instenquiry\"\n           [(ngModel)]=\"leadSettings.inst_enquiry_handler_no\"   onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57)\" placeholder=\"Enter Contact No.\">\n       </div>\n          </div>\n        <div class=\"toggle\">\n          <span>\n            <span class=\"off\">OFF</span>\n            <label class=\"switch\">\n              <input type=\"checkbox\"  name=\"checked\" id=\"enquiryInSMS\"\n              [(ngModel)]=\"leadSettings.enable_counsellor_number_to_enquirer_in_sms\">\n              <span class=\"slider round\"></span>\n            </label>\n            <span class=\"on\">ON</span>\n          </span>\n          \n        </div>\n      </div>\n        <div class=\"sep_line\"></div>\n      <div class=\"flex1\">\n        <!-- main settings -->\n        <div>\n          <span class=\"ellipse hidden\">G</span><span class=\"blue_line hidden\"></span>\n        </div>\n        <div>\n          \n          <p class=\"bold_settings\">\n           Enquiry Follow up reminder (pre) to assignee\n          </p>\n           <p class=\"black_settings\">\n           Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n           </p>\n            <select class=\"input\" id=\"pre_enquiry_follow_up_reminder_time\"  name=\"pre_enquiry_follow_up_reminder_time\"\n            [(ngModel)]=\"leadSettings.pre_enquiry_follow_up_reminder_time\">\n            <option value=\"\">Select </option>\n            <option value=\"00:15\">15 minutes before</option>\n            <option value=\"00:30\">30 minutes before</option>\n            <option value=\"01:00\">1 hour before</option>\n            <option value=\"02:00\">2 hour before</option>\n            <option value=\"24:00\">1 day before</option>\n            </select>\n        </div>\n        \n      </div>\n        <div class=\"sep_line\"></div>\n      <div class=\"flex1\">\n        <!-- main settings -->\n        <div>\n          <span class=\"ellipse hidden\">G</span><span class=\"blue_line hidden\"></span>\n        </div>\n        <div>\n          \n          <p class=\"bold_settings\">\n           Enquiry Follow up reminder (post) to assignee\n          </p>\n           <p class=\"black_settings\">\n           Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n           </p>\n           \n         <select class=\"input\" id=\"post_enquiry_follow_up_reminder_time\" \n         name=\"instituteSettingDet.post_enquiry_follow_up_reminder_time\"\n         [(ngModel)]=\"leadSettings.post_enquiry_follow_up_reminder_time\">\n         <option value=\"\">Select</option>\n         <option value=\"00:15\">After 15 minutes</option>\n         <option value=\"00:30\">After 30 minutes</option>\n         <option value=\"01:00\">After 1 hour</option>\n         <option value=\"02:00\">After 2 hour</option>\n         <option value=\"24:00\">After 1 day</option>\n            </select>\n        </div>\n     \n      </div>\n        <div class=\"sep_line\"></div>\n       <div class=\"flex1\">\n        <!-- main settings -->\n        <div>\n          <span class=\"ellipse hidden\">G</span><span class=\"blue_line hidden\"></span>\n        </div>\n        <div>\n          \n          <p class=\"bold_settings\">\n           Enable Daily Enquiry Routing Report of External Leads\n           \n          </p>\n           <p class=\"black_settings\">\n           Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum \n            is simply dummy text of the printing and typesetting industry.\n           </p>\n        </div>\n        <div class=\"toggle s_toggle\">\n          <span>\n            <span class=\"off\">OFF</span>\n            <label class=\"switch\">\n              <input type=\"checkbox\" >\n              <span class=\"slider round\"></span>\n            </label>\n            <span class=\"on\">ON</span>\n          </span>\n          \n        </div>\n      </div>\n        <div class=\"sep_line\"></div>\n      <div class=\"flex1\" id=\"section4\">\n        <!-- main settings -->\n        <div>\n          <span class=\"ellipse\">S</span><span class=\"blue_line\"></span>\n        </div>\n        <div>\n          <p class=\"blue_settings\">\n         External Lead Sources Integration\n          </p>\n          <p class=\"bold_settings\">\n          External Lead Sources Integration \n          </p>\n           <p class=\"black_settings\">\n            Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n           </p>\n            <div class=\"flex\">\n             <div class=\"flex\">\n               <div>\n                 <label class=\"checkbox\">\n                    <span class=\"checkbox__input\">\n                      <input type=\"checkbox\"   id=\"enable_fb_integration\"  name=\"enable_fb_integration\"\n                      [(ngModel)]=\"leadSettings.enable_fb_integration\" >\n                      <span class=\"checkbox__control\">\n                       <svg viewBox='0 0 24 24' aria-hidden=\"true\" focusable=\"false\">\n                          <path fill='none' stroke='currentColor'  d='M1.3 12.91l6.37 6.37L22.79 4.59' /></svg>\n                      </span>\n                    </span>\n                  </label>\n               </div>\n                <div>\n                 <p class=\"settings_label\">\n                   Facebook\n                 </p>\n               </div>\n             </div>\n              <div class=\"flex\">\n               <div>\n                 <label class=\"checkbox\">\n                    <span class=\"checkbox__input\">\n                      <input type=\"checkbox\"   id=\"enable_jd_integration\"  name=\"enable_jd_integration\"\n                      [(ngModel)]=\"leadSettings.enable_jd_integration\" (click)=\"disjusdialContId()\">\n                      <span class=\"checkbox__control\">\n                       <svg viewBox='0 0 24 24' aria-hidden=\"true\" focusable=\"false\">\n                          <path fill='none' stroke='currentColor'  d='M1.3 12.91l6.37 6.37L22.79 4.59' /></svg>\n                      </span>\n                    </span>\n                  </label>\n               </div>\n                <div>\n                 <p class=\"settings_label\">\n                   Justdail\n                 </p>\n               </div>\n             </div>\n             <div class=\"flex\">\n               <div>\n                 <label class=\"checkbox\">\n                    <span class=\"checkbox__input\">\n                      <input type=\"checkbox\" id=\"enable_sulekha_integration\"  name=\"enable_sulekha_integration\"\n                      [(ngModel)]=\"leadSettings.enable_sulekha_integration\">\n                      <span class=\"checkbox__control\">\n                       <svg viewBox='0 0 24 24' aria-hidden=\"true\" focusable=\"false\">\n                          <path fill='none' stroke='currentColor'  d='M1.3 12.91l6.37 6.37L22.79 4.59' /></svg>\n                      </span>\n                    </span>\n                  </label>\n               </div>\n                <div>\n                 <p class=\"settings_label\">\n                 Sulekha\n                 </p>\n               </div>\n             </div>\n             <div class=\"flex\">\n               <div>\n                 <label class=\"checkbox\">\n                    <span class=\"checkbox__input\">\n                      <input type=\"checkbox\"   id=\"enable_urbanpro_integration\"  name=\"enable_urbanpro_integration\"\n                      [(ngModel)]=\"leadSettings.enable_urbanpro_integration\">\n                      <span class=\"checkbox__control\">\n                       <svg viewBox='0 0 24 24' aria-hidden=\"true\" focusable=\"false\">\n                          <path fill='none' stroke='currentColor'  d='M1.3 12.91l6.37 6.37L22.79 4.59' /></svg>\n                      </span>\n                    </span>\n                  </label>\n               </div>\n                <div>\n                 <p class=\"settings_label\">\n                  Urban Pro \n                 </p>\n               </div>\n             </div>\n             <div class=\"flex\">\n               <div>\n                 <label class=\"checkbox\">\n                    <span class=\"checkbox__input\">\n                      <input type=\"checkbox\" id=\"enable_website_integration\"  name=\"enable_website_integration\"\n                      [(ngModel)]=\"leadSettings.enable_website_integration\">\n                      <span class=\"checkbox__control\">\n                       <svg viewBox='0 0 24 24' aria-hidden=\"true\" focusable=\"false\">\n                          <path fill='none' stroke='currentColor'  d='M1.3 12.91l6.37 6.37L22.79 4.59' /></svg>\n                      </span>\n                    </span>\n                  </label>\n               </div>\n                <div>\n                 <p class=\"settings_label\">\n                Website\n                 </p>\n               </div>\n             </div>\n              <div class=\"flex\">\n               <div>\n                 <label class=\"checkbox\">\n                    <span class=\"checkbox__input\">\n                      <input type=\"checkbox\" id=\"enable_routing\"  name=\"enable_routing\"\n                      [(ngModel)]=\"leadSettings.enable_routing\">\n                      <span class=\"checkbox__control\">\n                       <svg viewBox='0 0 24 24' aria-hidden=\"true\" focusable=\"false\">\n                          <path fill='none' stroke='currentColor'  d='M1.3 12.91l6.37 6.37L22.79 4.59' /></svg>\n                      </span>\n                    </span>\n                  </label>\n               </div>\n                <div>\n                 <p class=\"settings_label\">\n                Enable Enquiry Routing\n                 </p>\n               </div>\n             </div>\n           </div>\n        </div>\n    \n      </div>\n        <div class=\"sep_line\"></div>\n      <div class=\"flex1\" *ngIf=\"leadSettings.enable_jd_integration==1 || leadSettings.enable_jd_integration==true\">\n        <!-- main settings -->\n        <div>\n          <span class=\"ellipse hidden\">G</span><span class=\"blue_line hidden\"></span>\n        </div>\n        <div>\n          \n          <p class=\"bold_settings\">\n          JustDial Contract ID\n          </p>\n           <p class=\"black_settings1\">\n           Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n           </p>\n           <input type=\"text\" class=\"input\" name=\"jd_contract_id\"   [(ngModel)]=\"leadSettings.jd_contract_id\"  [style.cursor]=\"disabled==true?'not-allowed':'pointer'\" placeholder=\"JustDial Contract ID\" disabled={{disabled}}>\n        </div>\n        \n      </div>\n        <div class=\"sep_line\" *ngIf=\"leadSettings.enable_jd_integration==1 || leadSettings.enable_jd_integration==true\"></div>\n    </div>\n  </div>\n  <div class=\"w98\">\n     <div class=\"bottom\">\n        <div class=\"display\">\n          <div>\n            \n          </div>\n          <div>\n            <button class=\"white_button mr10\" (click)=\"cancel()\">Cancel</button>\n            <button (click)=\"saveLeadSettings()\" class=\"blue_button mr10\">Save</button>\n          </div>\n        </div>\n      </div>\n  </div>\n</div> \n\n\n<!-- ============custom-field-popups====================== -->\n<div class=\"custom-popus\">\n\n<proctur-popup [sizeWidth]=\"'large'\"  *ngIf=\"isEditCustumFormField=='Add'|| isEditCustumFormField=='Edit'\">\n  <span class=\"closePopup pos-abs fbold show\" (click)=\"cleareForm()\" close-button>\n    <svg class=\"artdeco-icon\" focusable=\"false\" height=\"24px\" preserveAspectRatio=\"xMinYMin meet\" viewBox=\"0 0 24 24\"\n      width=\"24px\" x=\"0\" y=\"0\">\n      <path class=\"large-icon\"\n        d=\"M20,5.32L13.32,12,20,18.68,18.66,20,12,13.33,5.34,20,4,18.68,10.68,12,4,5.32,5.32,4,12,10.69,18.68,4Z\"\n        style=\"fill: currentColor\"></path>\n    </svg>\n  </span>\n\n  <h2 popup-header  *ngIf=\"isEditCustumFormField=='Add'\">Add Field</h2>\n  <h2 popup-header *ngIf=\"isEditCustumFormField=='Edit'\">Edit Field</h2>\n\n  <div class=\"row updatecomponent-wrapper\" style=\"display: flex;flex-wrap: wrap;\" popup-content>\n\n    <div class=\"c-lg-4\">\n      <div class=\"field-wrapper\" >\n        <label for=\"label\">Label\n          <span class=\"text-danger\">*</span>\n        </label>\n        <input type=\"text\" class=\"form-ctrl\"  name=\"label\" [(ngModel)]=\"editCustomFormField.label\">\n\n      </div>\n    </div>\n\n    <div class=\"c-lg-4\">\n      <div class=\"field-wrapper\" >\n        <label for=\"opt.data_value\">Type\n          <span class=\"text-danger\">*</span>\n        </label>\n        <select id=\"opt.data_value\" class=\"form-ctrl\"  name=\"opt.data_value\"  [(ngModel)]=\"editCustomFormField.type\" (ngModelChange)=\"checkValuetype($event)\">\n          <option value=\"-1\">Select</option>\n          <option value=\"{{opt.data_key}}\" *ngFor=\"let opt of componentShell\"> \n            {{opt.data_value}}</option>\n         \n        </select>\n      </div>\n    </div>\n\n    <div class=\"c-lg-4\">\n      <div class=\"field-wrapper\" >\n        <label for=\"prefilledData\">Prefilled Data (Non-Empty And Separated By ,)</label>\n        <input type=\"text\" class=\"form-ctrl\"  id=\"prefilledData\" name=\"prefilledData\" [(ngModel)]=\"editCustomFormField.prefilled_data\">\n\n      </div>\n    </div>\n\n    <div class=\"c-lg-4\">\n      <div class=\"field-wrapper\" >\n        <label for=\"description\">Description</label>\n        <input type=\"text\" class=\"form-ctrl\"  name=\"description\" id=\"description\" [(ngModel)]=\"editCustomFormField.description\">\n\n      </div>\n    </div>\n\n    <div class=\"c-lg-4\">\n      <div class=\"field-wrapper\" >\n        <label for=\"onboth\">Show On Student</label>\n        <select id=\"onboth\" class=\"form-ctrl\" name=\"onboth\" [(ngModel)]=\"editCustomFormField.on_both\">\n          <option value=\"Y\">Yes</option>\n          <option value=\"N\">No</option>\n        </select>\n\n      </div>\n    </div>\n\n    <div class=\"c-lg-4\">\n      <div class=\"field-wrapper\" >\n        <label for=\"isrequired\">Is Required</label>\n        <select id=\"isrequired\" class=\"form-ctrl\" name=\"isrequired\" [(ngModel)]=\"editCustomFormField.is_required\">\n          <option value=\"Y\">Yes</option>\n          <option value=\"N\" selected>No</option>\n        </select>\n\n      </div>\n    </div>\n\n    <div class=\"c-lg-4\">\n      <div class=\"field-wrapper\" >\n        <label for=\"issearchable\">Is Searchable</label>\n        <select id=\"issearchable\" class=\"form-ctrl\" name=\"issearchable\" [(ngModel)]=\"editCustomFormField.is_searchable\">\n          <option value=\"Y\">Yes</option>\n          <option value=\"N\" selected>No</option>\n        </select>\n\n      </div>\n    </div>\n\n    <div class=\"c-lg-4\">\n      <div class=\"field-wrapper\" >\n        <label for=\"sequencenumber\">Sequence (Numerals Only)</label>\n        <input type=\"text\" class=\"form-ctrl\" onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57)\"\n          maxlength=\"3\"  name=\"sequencenumber\"  id=\"sequencenumber\" [(ngModel)]=\"editCustomFormField.sequence_number\">\n\n      </div>\n    </div>\n\n    <div class=\"c-lg-4\">\n      <div class=\"field-wrapper\" >\n        <label for=\"complength\">Max- Length (Numerals Only)</label>\n        <input type=\"text\" class=\"form-ctrl\" onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57)\"\n           name=\"complength\" id=\"complength\" [(ngModel)]=\"editCustomFormField.comp_length\">\n\n      </div>\n    </div>\n\n    <div class=\"c-lg-4\">\n      <div class=\"field-wrapper\" >\n        <label for=\"defVal\">Default Value</label>\n        <input type=\"text\" class=\"form-ctrl\"  name=\"defVal\"\n          id=\"defVal\" [(ngModel)]=\"editCustomFormField.defaultValue\">\n      </div>\n    </div>\n\n    <div class=\"c-lg-4\">\n      <div class=\"field-wrapper\" >\n        <label for=\"isexternal\">Is External</label>\n        <select id=\"isexternal\" class=\"form-ctrl\" name=\"isexternal\" [(ngModel)]=\"editCustomFormField.is_external\">\n          <option value=\"Y\">Yes</option>\n          <option value=\"N\" selected>No</option>\n        </select>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"\" popup-footer>\n    <div class=\"clearfix\">\n      <aside class=\"pull-right popup-btn\" style=\"margin-top: 1%;\">\n         <input type=\"button\" value=\"Cancel\" class=\"btn txt_font\" style=\"background: white;color: #0084f6;\" (click)=\"cleareForm()\" >&nbsp;\n        <input type=\"button\" value=\"Add\" *ngIf=\"isEditCustumFormField =='Add'\" (click)=\"addNewCustomField()\" class=\"fullBlue btn txt_font\"\n        >\n        <input type=\"button\" value=\"Update \" *ngIf=\"isEditCustumFormField =='Edit'\" class=\"fullBlue btn txt_font\"\n          (click)=\"updateCustumField()\">\n      \n      </aside>\n    </div>\n  </div>\n<!-- </div> -->\n</proctur-popup>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/leads/enquiry-add/enquiry-add.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/leads/enquiry-add/enquiry-add.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"homewrap  clearFix\">\n    <form novalidate class=\"scroll-content\" #myForm=\"ngForm\" (ngSubmit)=\"submitForm(myForm)\">\n        <!-- Left Side Form -->\n        <aside class=\"pull-left middle-left \" id=\"addNewEnquiry\">\n            <!-- Header -->\n            <section class=\"middle-top clearFix\">\n                <div class=\"row\">\n                    <h1 class=\"pull-left\">\n                        Add New Enquiry\n                    </h1>\n                    <aside class=\"pull-right\" *ngIf=\"permission != true && BulkEnqHide\">\n                        <input type=\"button\" value=\"Upload Enquiry\" routerLink=\"/view/leads/enquiry/upload\"\n                            class=\"uploadBtn\" id=\"btnUpload\">\n                    </aside>\n                </div>\n            </section>\n            <!-- Accordian Menu Element -->\n            <section class=\"middle-main clearFix\" id=\"middleMain\">\n                <aside>\n                <div class=\"add-new-enquiry-form accordian-section\">\n                    <ul class=\"accordian\">\n                        <!-- Basic Form -->\n                        <li class=\"active data-filled\" id=\"basicDetails\">\n                            <!-- Accordian Toggler -->\n                            <div class=\"accordian-heading\">\n                                <h4>\n                                    <span class=\"circle-accor\">1</span> Basic Details\n                                    <span class=\"open-accor\" id=\"openBasic\" (click)=\"toggleForm($event)\">+</span>\n                                    <span class=\"close-accor\" id=\"closeBasic\" (click)=\"toggleForm($event)\">-</span>\n                                </h4>\n                            </div>\n                            <!-- Accordian Form 1 -->\n                            <div class=\"accordian-content AdFilter-field middle-left-auto\">\n                                <div class=\"row\">\n                                    <div class=\"c-lg-6 c-md-6 c-sm-6\">\n                                        <!-- Source -->\n                                        <div class=\"field-wrapper\">\n                                            <label for=\"source\">Source<span class=\"text-danger\">*</span></label>\n                                            <select id=\"source\" class=\"form-ctrl\" [(ngModel)]=\"newEnqData.source_id\"\n                                                name=\"source\" style=\"border-radius: 4px;width: 20rem;\">\n                                                <option value=\"-1\"></option>\n                                                <option *ngFor=\"let source of sourceLead\" [value]=\"source.id\">\n                                                    {{source.name}}</option>\n                                            </select>\n                                            <span (click)=\"showAddSourcePops()\" class=\"sourceI iconPlus\"\n                                                style=\"left: 20rem;\">+</span>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"row\">\n\n                                    <!-- Name -->\n                                    <div class=\"c-lg-6 c-md-6 c-sm-6\">\n                                        <div class=\"field-wrapper\">\n                                            <label for=\"name\">Name\n                                                <span class=\"text-danger\">*</span>\n                                            </label>\n                                            <input type=\"text\" value=\"\" id=\"name\" #name=\"ngModel\" class=\"form-ctrl\"\n                                                [(ngModel)]=\"newEnqData.name\" name=\"name\" maxlength=\"50\" required\n                                                style=\"border-radius: 4px;width: 20rem;\" />\n\n                                            <div *ngIf=\"name.invalid && (name.dirty || name.touched)\"\n                                                class=\"alert invalid-alert\">\n                                                <div class=\"text-danger\" *ngIf=\"name.errors.required\">\n                                                    name is required.\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <!-- Phone No -->\n                                    <div class=\"c-lg-6 c-md-6 c-sm-6\">\n                                        <div class=\"field-wrapper\">\n                                            <label for=\"phone\">Phone No<span class=\"text-danger\">*</span></label><br>\n                                            <span class=\"countryCallingCode\" style=\"width: 22%\">\n                                                <select id=\"country_id\" class=\"form-ctrl\"\n                                                    [(ngModel)]=\"newEnqData.country_id\" name=\"country_id\"\n                                                    [disabled]=\"countryDetails.length<=1\"\n                                                    (change)=\"onChangeObj($event.target.value)\"\n                                                    style=\"height: 29px;padding: 0;border-radius: 4px;\">\n                                                    <option value=\"\"></option>\n                                                    <option [value]=\"data.id\" selected\n                                                        *ngFor='let data of countryDetails'>\n                                                        {{data.country_code}} +{{data.country_calling_code}}\n                                                    </option>\n                                                </select>\n                                            </span>\n                                            <input type=\"text\" value=\"\" id=\"phone\" class=\"form-ctrl\"\n                                                [(ngModel)]=\"newEnqData.phone\" name=\"phone\"\n                                                onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57)\"\n                                                style=\"border-radius: 4px;width: 14rem;\" />\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"row\" *ngIf=\"schoolModel\">\n                                    <div class=\"c-lg-6 c-md-6 c-sm-6\">\n                                        <!-- standard Course-->\n                                        <div *ngIf=\"!isProfessional\" class=\"field-wrapper\">\n                                            <label for=\"editStandard\">Standard</label>\n                                            <select id=\"editStandard\" class=\"form-ctrl\" [(ngModel)]=\"course_standard_id\"\n                                                (ngModelChange)=\"fetchSubject($event)\" name=\"editStandard\"\n                                                style=\"border-radius: 4px;width: 20rem;\">\n                                                <option value=\"-1\"></option>\n                                                <option *ngFor=\"let std of enqStd\" [value]=\"std.standard_id\">\n                                                    {{std.standard_name}}</option>\n                                            </select>\n                                        </div>\n                                    </div>\n                                    <div class=\"c-lg-6 c-md-6 c-sm-6\">\n                                        <!-- Academic Yr -->\n                                        <div class=\"field-wrapper\">\n                                            <label for=\"editMc\">Academic Year</label>\n                                            <select id=\"editMc\" class=\"form-ctrl\" name=\"editMc\"\n                                                [(ngModel)]=\"newEnqData.inst_acad_year_id\"\n                                                style=\"border-radius: 4px;width: 20rem;\">\n                                                <option value=\"-1\"></option>\n                                                <option *ngFor=\"let data of instAcademicYrList\"\n                                                    [value]=\"data.inst_acad_year_id\">\n                                                    {{data.inst_acad_year}}</option>\n                                            </select>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"row\">\n                                    <div class=\"c-lg-9 c-md-9 c-sm-9\">\n\n                                    </div>\n                                    <!-- fetch more details -->\n                                    <div class=\"c-lg-3 c-md-3 c-sm-3\">\n                                        <div class=\"more-detail\">\n                                            <a (click)=\"getLeadDetails()\" style=\"cursor:pointer\" id=\"getLeadAnch8\">Fetch\n                                                Lead Details</a>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"row\">\n                                    <div class=\"c-lg-6 c-md-6 c-sm-6\">\n                                        <!-- email enq -->\n                                        <div class=\"field-wrapper\">\n                                            <label for=\"email\">Email ID</label>\n                                            <input type=\"text\" value=\"\" id=\"email\" #email=\"ngModel\" class=\"form-ctrl\"\n                                                [(ngModel)]=\"newEnqData.email\" name=\"email\"\n                                                pattern=\"[a-zA-Z0-9._%+-]+@[a-zA-Z]+\\.[a-zA-Z.]{2,5}$\"\n                                                style=\"border-radius: 4px;width: 20rem;\" />\n\n                                            <div *ngIf=\"email.invalid && (email.dirty || email.touched)\"\n                                                class=\"alert invalid-alert\">\n                                                <div class=\"text-danger\" *ngIf=\"email.errors.pattern\">\n                                                    Enter email in format eg. someone@xyz.com\n                                                </div>\n                                            </div>\n                                        </div>\n\n\n                                    </div>\n                                    <div class=\"c-lg-6 c-md-6 c-sm-6\">\n                                        <!-- gender -->\n                                        <div class=\"field-wrapper\">\n                                            <label for=\"gender\">Gender</label>\n                                            <select class=\"form-ctrl\" [(ngModel)]=\"newEnqData.gender\" name=\"gender\"\n                                                id=\"gender\" style=\"border-radius: 4px;width: 20rem;\">\n                                                <option value=\"\"></option>\n                                                <option value=\"M\">Male</option>\n                                                <option value=\"F\">Female</option>\n                                                <option value=\"NA\">NA</option>\n                                            </select>\n\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"row\">\n                                    <div class=\"c-lg-6 c-md-6 c-sm-6\">\n                                        <div class=\"field-wrapper datePickerBox2\">\n                                            <label for=\"dob\">Date of Birth</label>\n                                            <input type=\"text\" value=\"\" id=\"dob\" class=\"form-ctrl bsDatepicker\"\n                                                [(ngModel)]=\"newEnqData.dob\" name=\"dob\" readonly='true' bsDatepicker\n                                                style=\"border-radius: 4px;width: 20rem;\">\n                                                <span name=\"clear\" (click)=\"newEnqData.dob = ''\" class=\"date-clear\" style=\"margin-right: 5%;top: 58px;right: 0;\">clear</span>\n                                            <!-- <span class=\"date-clear\" name=\"dob\" (click)=\"newEnqData.dob = ''\"\n                        style=\"left: 18rem;top: 3.5rem;\">clear</span> -->\n                                        </div>\n                                    </div>\n                                    <div class=\"c-lg-6 c-md-6 c-sm-6\">\n                                        <div class=\"field-wrapper\">\n                                            <label for=\"state\">\n                                                State\n                                                <span *ngIf=\"isStateMandatory == 1\"><span\n                                                        class=\"text-danger\">*</span></span>\n                                            </label>\n                                            <select id=\"state\" class=\"form-ctrl\" [(ngModel)]=\"newEnqData.state_id\"\n                                                name=\"state\" (ngModelChange)=\"getNewCityList()\"\n                                                style=\"border-radius: 4px;width: 20rem;\">\n                                                <option value=\"\">Select State</option>\n                                                <option title=\"{{state.state_name}}\" [value]=\"state.state_id\"\n                                                    *ngFor=\"let state of stateList\">\n                                                    {{ (state.state_name.length > 30) ? (state.state_name | slice:0:30)\n                                                    + '...' : state.state_name }}\n                                                </option>\n                                            </select>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"row\">\n                                    <!-- City -->\n                                    <div class=\"c-lg-6 c-md-6 c-sm-6\">\n                                        <div class=\"field-wrapper\">\n                                            <label for=\"city\">\n                                                City\n                                                <span *ngIf=\"isCityMandatory == 1\"><span\n                                                        class=\"text-danger\">*</span></span>\n                                            </label>\n                                            <select id=\"city\" class=\"form-ctrl\" [(ngModel)]=\"newEnqData.city_id\"\n                                                name=\"city\" (ngModelChange)=\"getNewAreaList()\"\n                                                style=\"border-radius: 4px;width: 20rem;\">\n                                                <option value=\"\">Select City</option>\n                                                <option title=\"{{city.city_name}}\" [value]=\"city.city_id\"\n                                                    *ngFor=\"let city of cityList\">\n                                                    {{ (city.city_name.length > 30) ? (city.city_name | slice:0:30) +\n                                                    '...' : city.city_name }}\n                                                </option>\n                                            </select>\n                                        </div>\n                                    </div>\n                                    <div class=\"c-lg-6 c-md-6 c-sm-6\" style=\"width: 47%;\">\n                                        <!-- area -->\n                                        <div class=\"field-wrapper\">\n                                            <label for=\"addArea\">Area</label>\n                                            <select id=\"area_id\" class=\"form-ctrl\" [(ngModel)]=\"newEnqData.area_id\"\n                                                name=\"area_id\" style=\"border-radius: 4px;width: 20rem;\">\n                                                <option value=\"\">Select Area</option>\n                                                <option title=\"{{area.area}}\" [value]=\"area.id\"\n                                                    *ngFor=\"let area of areaList\">\n                                                    {{ (area.area.length > 30) ? (area.area | slice:0:30) + '...' :\n                                                    area.area }}\n                                                </option>\n                                            </select>\n                                            <span (click)=\"toggleAddArea()\" class=\"sourceI iconPlus\">+</span>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"row\">\n                                    <div class=\"c-lg-6 c-md-6 c-sm-6\">\n                                        <div class=\"field-wrapper\">\n                                            <label for=\"pin_code\">Pin code</label>\n                                            <input type=\"text\" value=\"\" onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57)\" id=\"pin_code\" class=\"form-ctrl\"\n                                                [(ngModel)]=\"newEnqData.pin_code\" name=\"pin_code\" #pin_code=\"ngModel\"\n                                                style=\"border-radius: 4px;width: 20rem;\" />\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"row\">\n                                    <div class=\"c-lg-6 c-md-6 c-sm-6\">\n                                        <div class=\"field-wrapper\">\n                                            <label for=\"userAddress\">Current Address</label>\n                                            <textarea type=\"text\" value=\"\" id=\"userAddress\" class=\"form-ctrl\" row=\"5\"\n                                                cols=\"5\" [(ngModel)]=\"newEnqData.curr_address\" name=\"address\"\n                                                style=\"border-radius: 4px;width: 20rem;height: 13vh;\"></textarea>\n\n                                        </div>\n                                    </div>\n                                    <div class=\"c-lg-6 c-md-6 c-sm-6\">\n                                        <div class=\"field-wrapper\">\n                                            <label for=\"address\">Residential Address </label>\n                                            <textarea type=\"text\" value=\"\" id=\"address\" class=\"form-ctrl\" row=\"5\"\n                                                cols=\"5\" [(ngModel)]=\"newEnqData.address\" name=\"address\"\n                                                style=\"border-radius: 4px;width: 20rem;height: 13vh;\"></textarea>\n\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"row\">\n                                    <div class=\"c-lg-6 c-md-6 c-sm-6\">\n                                        <!-- Phone -->\n                                        <div class=\"field-wrapper\">\n                                            <label for=\"altContact\">Alternate Contact</label><br>\n\n                                            <span class=\"countryCallingCode\">\n                                                <select id=\"country_id\" class=\"form-ctrl\"\n                                                    [(ngModel)]=\"newEnqData.country_id\" name=\"country_id\"\n                                                    [disabled]=\"countryDetails.length<=1\"\n                                                    (change)=\"onChangeObj($event.target.value)\"\n                                                    style=\"height: 29px;padding: 0\">\n                                                    <option value=\"\"></option>\n                                                    <option [value]=\"data.id\" selected\n                                                        *ngFor='let data of countryDetails'>\n                                                        {{data.country_code}} +{{data.country_calling_code}}\n                                                    </option>\n                                                </select>\n                                            </span>\n                                            <input type=\"text\" value=\"\" id=\"altContact\" #phone2=\"ngModel\"\n                                                class=\"form-ctrl\" [(ngModel)]=\"newEnqData.phone2\" name=\"phone2\"\n                                                style=\"border-radius: 4px;width: 15.5rem;\"\n                                                onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57)\" />\n\n                                        </div>\n                                    </div>\n                                    <div class=\"c-lg-6 c-md-6 c-sm-6\">\n                                        <!-- Email -->\n                                        <div class=\"field-wrapper\">\n                                            <label for=\"email2\">Alternate Email ID</label>\n                                            <input type=\"text\" value=\"\" id=\"email2\" #email2=\"ngModel\" class=\"form-ctrl\"\n                                                [(ngModel)]=\"newEnqData.email2\" name=\"email2\"\n                                                pattern=\"[a-zA-Z0-9._%+-]+@[a-zA-Z]+\\.[a-zA-Z.]{2,5}$\"\n                                                style=\"border-radius: 4px;width: 20rem;\" />\n\n                                            <div *ngIf=\"email2.invalid && (email2.dirty || email2.touched)\"\n                                                class=\"alert invalid-alert\">\n                                                <div class=\"text-danger\"*ngIf=\"email2.errors.pattern\">\n                                                    Enter email in format eg. someone@xyz.com\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <!-- School related new field -->\n                                <div>\n                                    <div class=\"row\">\n                                        <div class=\"c-lg-6 c-md-6 c-sm-6\">\n                                            <div class=\"field-wrapper\">\n                                                <label for=\"nationality\">Nationality</label>\n                                                <input type=\"text\" value=\"\" id=\"nationality\" class=\"form-ctrl\"\n                                                    [(ngModel)]=\"newEnqData.nationality\" name=\"nationality\"\n                                                    #nationality=\"ngModel\" style=\"border-radius: 4px;width: 20rem;\" />\n                                            </div>\n                                        </div>\n                                        <div class=\"c-lg-6 c-md-6 c-sm-6\">\n                                            <div class=\"field-wrapper\">\n                                                <label for=\"birth_place\">Birth Place</label>\n                                                <input type=\"text\" value=\"\" id=\"birth_place\" class=\"form-ctrl\"\n                                                    [(ngModel)]=\"newEnqData.birth_place\" name=\"birth_place\"\n                                                    #birth_place=\"ngModel\" style=\"border-radius: 4px;width: 20rem;\" />\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"row\">\n                                        <div class=\"c-lg-6 c-md-6 c-sm-6\">\n                                            <div class=\"field-wrapper\">\n                                                <label for=\"feeCommitted\">Mother Tongue</label>\n                                                <select id=\"mother_tounge\" class=\"form-ctrl\"\n                                                    [(ngModel)]=\"newEnqData.mother_tounge\" name=\"mother_tounge\"\n                                                    style=\"border-radius: 4px;width: 20rem;\">\n                                                    <option value=\"-1\"></option>\n                                                    <option *ngFor=\"let data of masterDataList.MOTHER_TOUNGE\"\n                                                        [value]=\"data.data_key\">\n                                                        {{data.data_value}}</option>\n                                                </select>\n                                            </div>\n                                        </div>\n                                        <div class=\"c-lg-6 c-md-6 c-sm-6\">\n                                            <div class=\"field-wrapper\">\n                                                <label for=\"discount\">Category</label>\n                                                <select id=\"category\" class=\"form-ctrl\"\n                                                    [(ngModel)]=\"newEnqData.category\" name=\"category\"\n                                                    style=\"border-radius: 4px;width: 20rem;\">\n                                                    <option value=\"-1\"></option>\n                                                    <option *ngFor=\"let data of masterDataList.CASTE_CATEGORY\"\n                                                        [value]=\"data.data_key\">\n                                                        {{data.data_value}}</option>\n                                                </select>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"row\">\n                                        <div class=\"c-lg-6 c-md-6 c-sm-6\">\n                                            <div class=\"field-wrapper\">\n                                                <label for=\"religion\">Religion</label>\n                                                <input type=\"text\" value=\"\" id=\"religion\" class=\"form-ctrl\"\n                                                    [(ngModel)]=\"newEnqData.religion\" name=\"religion\"\n                                                    #religion=\"ngModel\" style=\"border-radius: 4px;width: 20rem;\" />\n                                            </div>\n                                        </div>\n                                        <div class=\"c-lg-6 c-md-6 c-sm-6\">\n                                            <div class=\"field-wrapper\">\n                                                <label for=\"discount\">Blood Group</label>\n                                                <select id=\"blood_group\" class=\"form-ctrl\"\n                                                    [(ngModel)]=\"newEnqData.blood_group\" name=\"blood_group\"\n                                                    style=\"border-radius: 4px;width: 20rem;\">\n                                                    <option value=\"-1\"></option>\n                                                    <option *ngFor=\"let data of masterDataList.BLOOD_GROUP\"\n                                                        [value]=\"data.data_key\">\n                                                        {{data.data_value}}</option>\n                                                </select>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"row\">\n                                        <div class=\"c-lg-6 c-md-6 c-sm-6\">\n                                            <div class=\"field-wrapper\">\n                                                <label for=\"student_adhar_no\">Aadhar No.</label>\n                                                <input type=\"text\" value=\"\" id=\"feeCommitted\" class=\"form-ctrl\" maxlength=\"12\"\n                                                    [(ngModel)]=\"newEnqData.student_adhar_no\" name=\"student_adhar_no\"\n                                                    #student_adhar_no=\"ngModel\"\n                                                    onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57)\"\n                                                    style=\"border-radius: 4px;width: 20rem;\" />\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"row\">\n                                    <div class=\"c-lg-6 c-md-6 c-sm-6\">\n                                        <!-- Name -->\n                                        <div class=\"field-wrapper\">\n                                            <label for=\"guardianName\">Parent Name</label>\n                                            <input type=\"text\" value=\"\" id=\"guardianName\" class=\"form-ctrl\"\n                                                [(ngModel)]=\"newEnqData.parent_name\" name=\"guardianName\" maxlength=\"50\"\n                                                #guardianName=\"ngModel\" style=\"border-radius: 4px;width: 20rem;\" />\n                                            <div *ngIf=\"guardianName.invalid && (guardianName.dirty || guardianName.touched)\"\n                                                class=\"alert invalid-alert\">\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"c-lg-6 c-md-6 c-sm-6\">\n                                        <!-- Phone -->\n                                        <div class=\"field-wrapper\">\n                                            <label for=\"guardianContact\">Parent Contact</label><br>\n                                            <span class=\"countryCallingCode\">\n                                                <select id=\"country_id\" class=\"form-ctrl\"\n                                                    [(ngModel)]=\"newEnqData.country_id\" name=\"country_id\"\n                                                    [disabled]=\"countryDetails.length<=1\"\n                                                    (change)=\"onChangeObj($event.target.value)\"\n                                                    style=\"height: 29px;padding: 0\">\n                                                    <option value=\"\"></option>\n                                                    <option [value]=\"data.id\" selected\n                                                        *ngFor='let data of countryDetails'>\n                                                        {{data.country_code}} +{{data.country_calling_code}}\n                                                    </option>\n                                                </select>\n                                            </span>\n                                            <input type=\"text\" value=\"\" id=\"guardianContact\" class=\"form-ctrl\"\n                                                [(ngModel)]=\"newEnqData.parent_phone\" name=\"guardianContact\"\n                                                onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57)\"\n                                                style=\"border-radius: 4px;width: 15.5rem;\" />\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"row\">\n                                    <div class=\"c-lg-6 c-md-6 c-sm-6\">\n                                        <div class=\"field-wrapper\">\n                                            <label for=\"guardianEmail\">Parent Email ID</label>\n                                            <input type=\"text\" value=\"\" id=\"guardianEmail\" class=\"form-ctrl\"\n                                                [(ngModel)]=\"newEnqData.parent_email\" name=\"guardianEmail\"\n                                                pattern=\"[a-zA-Z0-9._%+-]+@[a-zA-Z]+\\.[a-zA-Z.]{2,5}$\"\n                                                #guardianEmail=\"ngModel\" style=\"border-radius: 4px;width: 20rem;\" />\n\n                                            <div *ngIf=\"guardianEmail.invalid && (guardianEmail.dirty || guardianEmail.touched)\"\n                                                class=\"alert invalid-alert\">\n                                                <div class=\"text-danger\" *ngIf=\"guardianEmail.errors.pattern\">\n                                                    Enter email in format eg. someone@xyz.com\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"c-lg-6 c-md-6 c-sm-6\">\n                                        <div class=\"field-wrapper\">\n                                            <label for=\"enquirerLink\">Parent profession</label>\n                                            <select id=\"parent_profession\" class=\"form-ctrl\"\n                                                [(ngModel)]=\"newEnqData.parent_profession\" name=\"parent_profession\"\n                                                style=\"border-radius: 4px;width: 20rem;\">\n                                                <option value=\"-1\"></option>\n                                                <option *ngFor=\"let data of masterDataList.PROFESSION\"\n                                                    [value]=\"data.data_key\">\n                                                    {{data.data_value}}</option>\n                                            </select>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"row\">\n                                    <div class=\"c-lg-6 c-md-6 c-sm-6\">\n                                        <div class=\"field-wrapper\">\n                                            <label for=\"guardianEmail\">Parent Aadhar No.</label>\n                                            <input type=\"text\" value=\"\" id=\"parent_adhar_no\" class=\"form-ctrl\" maxlength=\"12\"\n                                                [(ngModel)]=\"newEnqData.parent_adhar_no\" name=\"parent_adhar_no\"\n                                                onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57)\"\n                                                #parent_adhar_no=\"ngModel\" style=\"border-radius: 4px;width: 20rem;\" />\n                                        </div>\n                                    </div>\n                                    <div class=\"c-lg-6 c-md-6 c-sm-6\">\n                                        <div class=\"field-wrapper\">\n                                            <label for=\"guardian_name\">Guardian Name</label>\n                                            <input type=\"text\" value=\"\" id=\"guardian_name\" class=\"form-ctrl\"\n                                                [(ngModel)]=\"newEnqData.guardian_name\" name=\"guardian_name\"\n                                                #guardian_name=\"ngModel\" style=\"border-radius: 4px;width: 20rem;\" />\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"row\">\n                                    <div class=\"c-lg-6 c-md-6 c-sm-6\">\n                                        <!-- Phone -->\n                                        <div class=\"field-wrapper\">\n                                            <label for=\"guardian_phone\">Guardian Contact</label><br>\n                                            <span class=\"countryCallingCode\">\n                                                <select id=\"country_id\" class=\"form-ctrl\"\n                                                    [(ngModel)]=\"newEnqData.country_id\" name=\"country_id\"\n                                                    [disabled]=\"countryDetails.length<=1\"\n                                                    (change)=\"onChangeObj($event.target.value)\"\n                                                    style=\"height: 29px;padding: 0\">\n                                                    <option value=\"\"></option>\n                                                    <option [value]=\"data.id\" selected\n                                                        *ngFor='let data of countryDetails'>\n                                                        {{data.country_code}} +{{data.country_calling_code}}\n                                                    </option>\n                                                </select>\n                                            </span>\n                                            <input type=\"text\" value=\"\" id=\"guardian_phone\" class=\"form-ctrl\"\n                                                [(ngModel)]=\"newEnqData.guardian_phone\" name=\"guardian_phone\"\n                                                onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57)\"\n                                                style=\"border-radius: 4px;width: 15.5rem;\" />\n                                        </div>\n                                    </div>\n                                    <div class=\"c-lg-6 c-md-6 c-sm-6\">\n                                        <div class=\"field-wrapper\">\n                                            <label for=\"guardian_email\">Guardian Email ID</label>\n                                            <input type=\"text\" value=\"\" id=\"guardian_email\" class=\"form-ctrl\"\n                                                [(ngModel)]=\"newEnqData.guardian_email\" name=\"guardian_email\"\n                                                pattern=\"[a-zA-Z0-9._%+-]+@[a-zA-Z]+\\.[a-zA-Z.]{2,5}$\"\n                                                #guardian_email=\"ngModel\" style=\"border-radius: 4px;width: 20rem;\" />\n                                                <div *ngIf=\"guardian_email.invalid && (guardian_email.dirty || guardianEmail.touched)\"\n                                                class=\"alert invalid-alert\">\n                                                <div class=\"text-danger\" *ngIf=\"guardian_email.errors.pattern\">\n                                                    Enter email in format eg. someone@xyz.com\n                                                </div>\n                                            </div>\n\n                                            </div>\n                                    </div>\n                                </div>\n                                <div class=\"row\">\n                                    <div class=\"c-lg-6 c-md-6 c-sm-6\">\n                                        <!-- Link -->\n                                        <div class=\"field-wrapper\">\n                                            <label for=\"enquirerLink\">Link Details</label>\n                                            <input type=\"text\" value=\"\" id=\"enquirerLink\" class=\"form-ctrl\"\n                                                [(ngModel)]=\"newEnqData.link\" name=\"enquirerLink\"\n                                                style=\"border-radius: 4px;width: 20rem;\" />\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"row\">\n                                    <div class=\"c-lg-6 c-md-6 c-sm-6\">\n                                        <!-- Fee Commited -->\n                                        <div class=\"field-wrapper\">\n                                            <label for=\"feeCommitted\">Fees Committed Details</label>\n                                            <input type=\"text\" value=\"\" id=\"feeCommitted\" class=\"form-ctrl\"\n                                                [(ngModel)]=\"newEnqData.fee_committed\" name=\"feeCommitted\"\n                                                onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57)\"\n                                                #feeCommitted=\"ngModel\" style=\"border-radius: 4px;width: 20rem;\" />\n                                        </div>\n                                    </div>\n                                    <!-- Discount -->\n                                    <div class=\"c-lg-6 c-md-6 c-sm-6\">\n                                        <div class=\"field-wrapper\">\n                                            <label for=\"discount\">Discount Offered Details</label>\n                                            <input type=\"text\" value=\"\" id=\"discount\" class=\"form-ctrl\"\n                                                [(ngModel)]=\"newEnqData.discount_offered\" name=\"discount\"\n                                                #discount=\"ngModel\" style=\"border-radius: 4px;width: 20rem;\" />\n                                        </div>\n                                    </div>\n                                </div>\n\n                            </div>\n                        </li>\n                        <!-- Academic Form 2-->\n                        <li class=\"data-filled\" id=\"academicDetails\" style=\"padding-bottom: 60px;\">\n                            <div class=\"accordian-heading\">\n                                <h4>\n                                    <span class=\"circle-accor\">2</span> {{schoolModel?'Other Details':'Academics\n                                    Details'}}\n                                    <span class=\"close-accor\" id=\"closeAcademic\" (click)=\"toggleForm($event)\">-</span>\n                                    <span class=\"open-accor\" id=\"openAcademic\" (click)=\"toggleForm($event)\">+</span>\n                                </h4>\n                            </div>\n                            <div class=\"accordian-content middle-left-auto\">\n                                <div class=\"row\">\n                                    <div class=\"c-lg-6 c-md-6 c-sm-6\">\n                                        <!-- school -->\n                                        <div class=\"field-wrapper\">\n                                            <label for=\"institutionName\">{{schoolModel ? 'School' : 'Institution'}} Name</label>\n                                            <select id=\"institutionName\" class=\"form-ctrl\"\n                                                [(ngModel)]=\"newEnqData.school_id\" name=\"institutename\"\n                                                style=\"border-radius: 4px;width: 20rem;\">\n                                                <option value=\"-1\"></option>\n                                                <option *ngFor=\"let institute of school\" [value]=\"institute.school_id\">\n                                                    {{institute.school_name}}\n                                                </option>\n                                            </select>\n                                            <a (click)=\"openAddInstitute()\" class=\"create-institution\"\n                                                style=\"cursor: pointer;margin-right: -20%;\" id=\"openinstAnchor4\">+</a>\n                                        </div>\n                                    </div>\n                                    <div class=\"c-lg-6 c-md-6 c-sm-6\">\n                                    </div>\n                                </div>\n                                <div class=\"row\" *ngIf=\"!schoolModel\">\n                                    <div class=\"c-lg-6 c-md-6 c-sm-6\">\n                                        <!-- standard Course-->\n                                        <div *ngIf=\"!isProfessional\" class=\"field-wrapper\">\n                                            <label for=\"editStandard\">Standard</label>\n                                            <select id=\"editStandard\" class=\"form-ctrl\" [(ngModel)]=\"course_standard_id\"\n                                                (ngModelChange)=\"fetchSubject($event)\" name=\"editStandard\"\n                                                style=\"border-radius: 4px;width: 20rem;\">\n                                                <option value=\"-1\"></option>\n                                                <option *ngFor=\"let std of enqStd\" [value]=\"std.standard_id\">\n                                                    {{std.standard_name}}</option>\n                                            </select>\n                                        </div>\n                                    </div>\n                                    <div class=\"c-lg-6 c-md-6 c-sm-6\">\n                                        <!-- masterCourse course -->\n                                        <div *ngIf=\"!isProfessional\" class=\"field-wrapper\">\n                                            <!-- changes by Nalini - to handle school model conditions -->\n                                            <label for=\"editMc\">{{schoolModel ? 'Standard' : 'Master Course'}}</label>\n                                            <select id=\"editMc\" class=\"form-ctrl\" name=\"editMc\"\n                                                [(ngModel)]=\"course_mastercourse_id\"\n                                                (ngModelChange)=\"courseMasterChange($event)\"\n                                                style=\"border-radius: 4px;width: 20rem;\">\n                                                <option value=\"-1\"></option>\n                                                <option *ngFor=\"let master of masterCourseData\"\n                                                    [value]=\"master.master_course\">\n                                                    {{master.master_course}}</option>\n                                            </select>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"row\">\n                                    <div class=\"c-lg-6 c-md-6 c-sm-6\">\n                                        <div class=\"field-wrapper\">\n                                            <label for=\"educational_group\">Group</label>\n                                            <input type=\"text\" value=\"\" id=\"educational_group\" class=\"form-ctrl\"\n                                                [(ngModel)]=\"newEnqData.educational_group\" name=\"educational_group\"\n                                                #educational_group=\"ngModel\" style=\"border-radius: 4px;width: 20rem;\" />\n                                        </div>\n                                    </div>\n                                    <div class=\"c-lg-6 c-md-6 c-sm-6\">\n                                        <div class=\"field-wrapper\">\n                                            <label for=\"extra_curricular_activities\">Extra Curricular Activities</label>\n                                            <input type=\"text\" value=\"\" id=\"extra_curricular_activities\"\n                                                class=\"form-ctrl\" [(ngModel)]=\"newEnqData.extra_curricular_activities\"\n                                                name=\"extra_curricular_activities\"\n                                                #extra_curricular_activities=\"ngModel\"\n                                                style=\"border-radius: 4px;width: 20rem;\" />\n                                        </div>\n                                    </div>\n\n                                </div>\n\n                                <div class=\"row\" *ngIf='!schoolModel'>\n                                    <div class=\"c-lg-6 c-md-6 c-sm-6\">\n                                        <!-- subject Course -->\n                                        <div *ngIf=\"!isProfessional\" class=\"field-wrapper\">\n                                            <label for=\"forSubject\">Subject</label>\n                                            <select multiple id=\"forSubject\" class=\"form-ctrl form-ctrl-multiple\"\n                                                [(ngModel)]=\"selectedSubjectIds\" name=\"subject\"\n                                                style=\"border-radius: 4px;width: 20rem;\">\n                                                <option value=\"-1\"></option>\n                                                <option *ngFor=\"let subject of enqSub\" [value]=\"subject.subject_id\">\n                                                    {{subject.subject_name}}\n                                                </option>\n                                            </select>\n                                        </div>\n                                    </div>\n                                    <div class=\"c-lg-6 c-md-6 c-sm-6\">\n                                        <!-- course course-->\n                                        <div *ngIf=\"!isProfessional\" class=\"field-wrapper\">\n                                            <label for=\"editCC\">Course</label>\n                                            <select id=\"editCC\" class=\"form-ctrl form-ctrl-multiple\"\n                                                [(ngModel)]=\"selectedCourseIds\" name=\"editCC\" multiple\n                                                style=\"border-radius: 4px;width: 20rem;\">\n                                                <option value=\"-1\"></option>\n                                                <option *ngFor=\"let cc of course_course\" [value]=\"cc.course_id\">\n                                                    {{cc.course_name}}</option>\n                                            </select>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"row\">\n                                    <div class=\"c-lg-6 c-md-6 c-sm-6\">\n                                        <!-- master Professional -->\n                                        <div *ngIf=\"isProfessional\" class=\"field-wrapper\">\n                                            <label for=\"editStandard\">Master Course</label>\n                                            <select id=\"editStandard\" class=\"form-ctrl\"\n                                                [(ngModel)]=\"newEnqData.standard_id\"\n                                                (ngModelChange)=\"fetchSubject($event)\" name=\"editStandard\"\n                                                style=\"border-radius: 4px;width: 20rem;\">\n                                                <option value=\"-1\"></option>\n                                                <option *ngFor=\"let std of enqStd\" [value]=\"std.standard_id\">\n                                                    {{std.standard_name}}</option>\n                                            </select>\n                                        </div>\n                                    </div>\n                                    <div class=\"c-lg-6 c-md-6 c-sm-6\">\n                                        <!-- course Professional -->\n                                        <div *ngIf=\"isProfessional\" class=\"field-wrapper\">\n                                            <label for=\"forSubject\">Course</label>\n                                            <select id=\"forSubject\" class=\"form-ctrl form-ctrl-multiple\"\n                                                [(ngModel)]=\"newEnqData.subjectIdArray\" name=\"subject\" multiple\n                                                style=\"border-radius: 4px;width: 20rem;\">\n                                                <option value=\"-1\"></option>\n                                                <option *ngFor=\"let subject of enqSub\" [value]=\"subject.subject_id\">\n                                                    {{subject.subject_name}}\n                                                </option>\n                                            </select>\n                                        </div>\n                                    </div>\n                                </div>\n                                <!-- custom -->\n                                <ng-template [ngIf]=\"true\" *ngFor=\"let component of customComponents; let i= index;\">\n                                    <div class=\"row\" *ngIf=\"checkCustomeComponentElement(i)\">\n                                        <ng-template [ngIf]=\"true\"\n                                            *ngFor=\"let component of customComponents |slice:i:i+3\">\n                                            <div class=\"c-lg-6 c-md-6 c-sm-6\" *ngIf=\"component.type == 1\" input-def>\n                                                <div class=\"field-wrapper\"\n                                                    [ngClass]=\"{'has-value': component.value != ''}\">\n                                                    <label *ngIf=\"component.is_required == 'Y'\"\n                                                        for=\"{{component.id}}\">{{component.label}}<span\n                                                            class=\"text-danger\">*</span></label>\n                                                    <label *ngIf=\"component.is_required == 'N'\"\n                                                        for=\"{{component.id}}\">{{component.label}}\n                                                    </label>\n                                                    <input type=\"text\" value=\"\" id=\"{{component.id}}\"\n                                                        [(ngModel)]=\"component.value\" class=\"form-ctrl\"\n                                                        style=\"border-radius: 4px;width: 20rem;\"\n                                                        name=\"{{component.label}}\" />\n                                                </div>\n                                            </div>\n\n                                            <div class=\"c-lg-6 c-md-6 c-sm-6\" *ngIf=\"component.type == 2\" input-def>\n                                                <br>\n                                                <div class=\"field-checkbox-wrapper\">\n                                                    <input class=\"form-checkbox\" id=\"{{component.id}}\" type=\"checkbox\"\n                                                        [(ngModel)]=\"component.value\"\n                                                        style=\"border-radius: 4px;width: 20rem;\"\n                                                        name=\"{{component.label}}\" value=\"\">\n                                                    <label *ngIf=\"component.is_required == 'Y'\"\n                                                        for=\"{{component.id}}\">{{component.label}}<span\n                                                            class=\"text-danger\">*</span></label>\n                                                    <label style=\"margin-top: -7px;\" *ngIf=\"component.is_required == 'N'\"\n                                                        for=\"{{component.id}}\">{{component.label}}\n                                                    </label>\n                                                </div>\n                                            </div>\n                                            <div class=\"c-lg-6 c-md-6 c-sm-6\" *ngIf=\"component.type == 3\" input-def>\n                                                <div class=\"field-wrapper\"\n                                                    [ngClass]=\"{'has-value': component.value != ''}\">\n                                                    <label *ngIf=\"component.is_required == 'Y'\"\n                                                        for=\"{{component.id}}\">{{component.label}}<span\n                                                            class=\"text-danger\">*</span></label>\n                                                    <label *ngIf=\"component.is_required == 'N'\"\n                                                        for=\"{{component.id}}\">{{component.label}}\n                                                    </label>\n                                                    <select id=\"{{component.id}}\" class=\"form-ctrl\"\n                                                        [(ngModel)]=\"component.value\"\n                                                        style=\"border-radius: 4px;width: 20rem;\"\n                                                        name=\"{{component.label}}\">\n                                                        <option value=\"\"></option>\n                                                        <option *ngFor=\"let opt of component.prefilled_data\"\n                                                            value=\"{{opt.data}}\">\n                                                            {{opt.data}}\n                                                        </option>\n                                                    </select>\n                                                </div>\n                                            </div>\n                                            <div class=\"c-lg-6 c-md-6 c-sm-6\" *ngIf=\"component.type == 4 \" input-def>\n                                                <div id=\"{{component.id}}wrapper\" class=\"field-wrapper\"\n                                                    (click)=\"multiselectVisible($event.target.id)\">\n                                                    <label *ngIf=\"component.is_required == 'Y'\"\n                                                        for=\"{{component.id}}\">{{component.label}}<span\n                                                            class=\"text-danger\">*</span></label>\n                                                    <label *ngIf=\"component.is_required == 'N'\"\n                                                        for=\"{{component.id}}\">{{component.label}}\n                                                    </label>\n                                                    <input id=\"{{component.id}}\" type=\"text\"\n                                                        [ngModel]=\"component.selectedString\"\n                                                        style=\"border-radius: 4px;width: 20rem;\"\n                                                        name=\"{{component.label}}\" class=\"form-ctrl\" readonly=\"true\" />\n                                                </div>\n                                                <div id=\"{{component.id}}multi\" class=\"hide multiselect-wrapper\"\n                                                    (mouseleave)=\"multiselectVisible(component.id)\">\n                                                    <div class=\"multiselect-wrapper-inner\">\n                                                        <ul class=\"\">\n                                                            <li *ngFor=\"let opt of component.prefilled_data\">\n                                                                <div class=\"field-checkbox-wrapper\">\n                                                                    <input type=\"checkbox\" value=\"\" name=\"{{opt.data}}\"\n                                                                        [(ngModel)]=\"opt.checked\"\n                                                                        style=\"border-radius: 4px;width: 20rem;\"\n                                                                        (ngModelChange)=\"updateMultiSelect(opt, component.id)\"\n                                                                        class=\"form-checkbox\" id=\"{{opt.data}}\">\n                                                                    <label for=\"opt.data\">{{opt.data}}</label>\n                                                                </div>\n                                                            </li>\n                                                        </ul>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                            <div class=\"c-lg-6 c-md-6 c-sm-6\" *ngIf=\"component.type == 5 \" input-def>\n                                                <div class=\"field-wrapper datePickerBox1\"\n                                                    [ngClass]=\"{'has-value': component.value != 'Invalid date'}\">\n                                                    <label *ngIf=\"component.is_required == 'Y'\"\n                                                        for=\"{{component.id}}\">{{component.label}}<span\n                                                            class=\"text-danger\">*</span></label>\n                                                    <label *ngIf=\"component.is_required == 'N'\"\n                                                        for=\"{{component.id}}\">{{component.label}}\n                                                    </label>\n                                                    <input type=\"text\" value=\"\" readonly=\"true\" id=\"{{component.id}}\"\n                                                        [(ngModel)]=\"component.value\"\n                                                        style=\"border-radius: 4px;width: 20rem;\"\n                                                        class=\"form-ctrl bsDatepicker\" name=\"{{component.label}}\"\n                                                        bsDatepicker />\n                                                </div>\n                                            </div>\n                                        </ng-template>\n                                    </div>\n                                </ng-template>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"c-lg-6 c-md-6 c-sm-6\">\n                                </div>\n                                <div class=\"c-lg-6 c-md-6 c-sm-6\">\n                                </div>\n                            </div>\n                        </li>\n                    </ul>\n                </div>\n            </aside>\n            </section>\n            <!-- Footer for Accordian Menu -->\n            <section class=\"middle-bottom clearFix\">\n                <div class=\"pull-left\" style=\"margin-left: 25px;\">\n                    <div class=\"clear-detail\" style=\"padding: 10px 10px;\">\n                        <a (click)=\"clearFormData()\" style=\"color: red;font-weight: 600;cursor:pointer\"\n                            id=\"clearFormAnch7\">Clear\n                            Details</a>\n                    </div>\n                </div>\n                <aside class=\"pull-right\">\n                    <div style=\"display: inline-block;\" class=\"field-checkbox-wrapper\">\n\n                        <input type=\"checkbox\" value=\"\" [(ngModel)]=\"addNextCheck\" class=\"form-checkbox\"\n                            id=\"addNextEnquiry\" name=\"addNextEnquiry\">\n                        <label for=\"addNextEnquiry\">Add Next Enquiry</label>\n                    </div>\n                    <input style=\"display: inline-block;\" type=\"button\" value=\"Cancel\" class=\"btn cancle\"\n                        (click)=\"cancelForm()\" id=\"btnCancel2\">\n                    <input *ngIf=\"newEnqData.status != 12 && newEnqData.status != 1\" style=\"display: inline-block;\"\n                        type=\"button\" value=\"Add & Admit Enquiry\" class=\"btn fullBlue\" (click)=\"submitRegisterForm()\"\n                        id=\"btnAddUpdate\">\n                    <input style=\"display: inline-block;\" type=\"button\" value=\"Add Enquiry\" class=\"btn fullBlue\"\n                        (click)=\"submitForm(myForm)\" id=\"btnSubmitForm\">\n                </aside>\n            </section>\n        </aside>\n        <!-- Right side form for Office purrpose only -->\n        <aside class=\"pull-right middle-right\" id=\"rightSideBar\">\n            <!--Last enquiry information-->\n            <section class=\"shadow-box clearfix\">\n                <div class=\"last-added-info\">\n                    <ul>\n                        <li>\n                            <span class=\"last-user-name\">\n                                <strong>Last Added Name -</strong>\n                                <dfn>{{getLastAddName()}}</dfn>\n                            </span>\n                            <span class=\"view-details\">\n                                <a style=\"cursor:pointer\" (click)=\"navigateToEdit()\" id=\"navigateAnch10\">View\n                                    details</a>\n                            </span>\n                        </li>\n                        <li>\n                            <span class=\"last-Enquiry-no\">\n                                <strong>Enquiry No. -</strong>\n                                <dfn>{{getLastEnqNum()}}</dfn>\n                            </span>\n                            <span class=\"enquiry-time\">{{getLastUpdateTime()}}</span>\n                        </li>\n                    </ul>\n                </div>\n            </section>\n            <!-- Enquiry Details official use-->\n            <section class=\"enquiry-detail common-right-section\">\n                <h4>\n                    <strong>Enquiry Details</strong> (Official Use)\n                </h4>\n                <div class=\"box-shadow-lite\">\n                    <div class=\"row\">\n                        <div class=\"c-lg-6 c-md-6 c-sm-6\">\n                            <div class=\"field-wrapper datePickerBox\"\n                                [ngClass]=\"{'has-value': newEnqData.enquiry_date != 'Invalid date'}\">\n                                <label for=\"\">Enquiry Date</label>\n                                <input type=\"text\" value=\"\" id=\"idNewEnqData\" class=\"form-ctrl bsDatepicker\"\n                                    [(ngModel)]=\"newEnqData.enquiry_date\" name=\"enqDate\"\n                                    value=\"{{ newEnqData.enquiry_date | date:'yyyy-MM-dd' }}\" readonly=\"true\"\n                                    bsDatepicker style=\"width: 9rem;border-radius: 4px;\">\n                            </div>\n\n                        </div>\n                        <div class=\"c-lg-6 c-md-6 c-sm-6\">\n                            <div class=\"field-wrapper\" [ngClass]=\"{'has-value': newEnqData.status != '-1'}\">\n                                <label for=\"eStatus\">Enquiry Status</label>\n                                <select id=\"eStatus\" class=\"form-ctrl\" [(ngModel)]=\"newEnqData.status\" name=\"status\"\n                                    style=\"width: 8rem;border-radius: 4px;\" disabled>\n                                    <option value=\"-1\"></option>\n                                    <option *ngFor=\"let status of enqstatus\" [value]=\"status.data_key\"\n                                        [attr.selected]=\"status.data_value == 'Open' ? '' : null\"\n                                        [hidden]=\"status.data_key == 12 ? true : false\">{{status.data_value}}</option>\n                                </select>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"c-lg-6 c-md-6 c-sm-6\">\n                            <div class=\"field-wrapper\" [ngClass]=\"{'has-value': newEnqData.priority != '-1'}\">\n                                <label for=\"priority\">Enquiry Priority</label>\n                                <select id=\"priority\" class=\"form-ctrl\" [(ngModel)]=\"newEnqData.priority\"\n                                    style=\"width: 9rem;border-radius: 4px;\" name=\"priority\">\n                                    <option value=\"-1\"></option>\n                                    <option *ngFor=\"let priority of enqPriority\" [value]=\"priority.data_key\"\n                                        [attr.selected]=\"priority.data_value == 'cold_call'? '' : null\">\n                                        {{priority.data_value}}\n                                    </option>\n                                </select>\n                            </div>\n                        </div>\n                        <div class=\"c-lg-6 c-md-6 c-sm-6\">\n                            <div class=\"field-wrapper\">\n                                <label for=\"followUpType\">Follow Up Type <span class=\"text-danger\">*</span>\n                                </label>\n                                <select id=\"followUpType\" class=\"form-ctrl\" [(ngModel)]=\"newEnqData.follow_type\"\n                                    name=\"followtype\" style=\"width: 8rem;border-radius: 4px;\">\n                                    <option value=\"-1\"></option>\n                                    <option *ngFor=\"let followUp of enqFollowType\" [value]=\"followUp.data_key\">\n                                        {{followUp.data_value}}\n                                    </option>\n                                </select>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"c-lg-6 c-md-6 c-sm-6\">\n                            <div class=\"field-wrapper datePickerBox\">\n                                <label for=\"followUpDate\">Follow Up Date</label>\n                                <input type=\"text\" value=\"\" id=\"followUpDate\" class=\"form-ctrl bsDatepicker\"\n                                    name=\"followUpDate\" [(ngModel)]=\"newEnqData.followUpDate\" readonly=\"true\"\n                                    bsDatepicker style=\"width: 9rem;border-radius: 4px;\"\n                                    (ngModelChange)=\"notifyMeCheckBoxChangesDetect()\">\n                                <span class=\"date-clear\" name=\"followupdate\" (click)=\"newEnqData.followUpDate = '';\"\n                                    style=\"left: 7rem;top: 56px;\">clear</span>\n                            </div>\n                        </div>\n                        <div class=\"c-lg-3 c-md-3 c-sm-3\">\n                            <div class=\"field-wrapper\" id=\"hourpar\">\n                                <label for=\"hour\">Hour</label>\n                                <select id=\"hour\" class=\"form-ctrl ng-valid ng-touched ng-dirty\"\n                                    [(ngModel)]=\"followUpTime\" name=\"hour\" style=\"width: 71px;border-radius: 4px;\"\n                                    (ngModelChange)=\"timeChanges($event)\">\n                                    <option *ngFor=\"let time of times\" [value]=\"time\">\n                                        {{time}}\n                                    </option>\n                                </select>\n                            </div>\n                        </div>\n                        <div class=\"c-lg-3 c-md-3 c-sm-3\" style=\"margin-left: -6px;\">\n                            <div class=\"field-wrapper\" id=\"minutepar\">\n                                <label for=\"minute\">Minute</label>\n                                <select id=\"minute\" class=\"form-ctrl ng-valid ng-touched ng-dirty\" [(ngModel)]=\"minute\"\n                                    name=\"minute\" style=\"width: 50px;border-radius: 4px;\"\n                                    (ngModelChange)=\"notifyMeCheckBoxChangesDetect()\">\n                                    <option *ngFor=\"let minute of minArr\" [value]=\"minute\">\n                                        {{minute}}\n                                    </option>\n                                </select>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"c-lg-6 c-md-6 c-sm-6\">\n                            <div class=\"change-wrapper\">\n                                <div class=\"field-checkbox-wrapper\"\n                                    *ngIf=\"followUpTime != '' && minute != '' && newEnqData.followUpDate.length != 0\">\n                                    <input type=\"checkbox\" class=\"form-checkbox\" id=\"notify\"\n                                        [(ngModel)]=\"newEnqData.is_follow_up_time_notification\" name=\"person\">\n                                    <label for=\"notify\">Notify Me</label>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"c-lg-6 c-md-6 c-sm-6\">\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"c-lg-6 c-md-6 c-sm-6\">\n                            <div class=\"field-wrapper datePickerBox\" *ngIf=\"newEnqData.follow_type == 'Walkin'\">\n                                <label for=\"WalkinDate\">Walkin Date<span class=\"text-danger\">*</span></label>\n                                <input type=\"text\" value=\"\" id=\"WalkinDate\" class=\"form-ctrl bsDatepicker\"\n                                    name=\"WalkinDate\" [(ngModel)]=\"newEnqData.walkin_followUpDate\" readonly=\"true\"\n                                    bsDatepicker style=\"width: 9rem;border-radius: 4px;\">\n                                <span class=\"date-clear\" name=\"walkin_followUpDate\"\n                                    (click)=\"newEnqData.walkin_followUpDate = ''\"\n                                    style=\"left: 7rem;top: 56px;\">clear</span>\n                            </div>\n                        </div>\n                        <div class=\"c-lg-3 c-md-3 c-sm-3\" *ngIf=\"newEnqData.follow_type == 'Walkin'\">\n                            <div class=\"field-wrapper\" id=\"hourpar\" style=\"padding-right: 10px;\">\n                                <label for=\"hour\">Hour<span class=\"text-danger\">*</span></label>\n                                <select id=\"hour\" class=\"form-ctrl ng-valid ng-touched ng-dirty\"\n                                    [(ngModel)]=\"walkinTime.hour\" name=\"hour\" style=\"width: 71px;border-radius: 4px;\">\n                                    <option *ngFor=\"let time of times\" [value]=\"time\">\n                                        {{time}}\n                                    </option>\n                                </select>\n                            </div>\n                        </div>\n                        <div class=\"c-lg-3 c-md-3 c-sm-3\" *ngIf=\"newEnqData.follow_type == 'Walkin'\">\n                            <div class=\"field-wrapper\" id=\"minutepar\" style=\"padding-right: 10px;\">\n                                <label for=\"minute\">Minute<span class=\"text-danger\">*</span></label>\n                                <select id=\"minute\" class=\"form-ctrl ng-valid ng-touched ng-dirty\"\n                                    [(ngModel)]=\"walkinTime.minute\" name=\"minute\"\n                                    style=\"width: 50px;border-radius: 4px;\">\n                                    <option *ngFor=\"let minute of minArr\" [value]=\"minute\">\n                                        {{minute}}\n                                    </option>\n                                </select>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"field-wrapper\" [ngClass]=\"{'has-value': newEnqData.referred_by != '-1'}\"\n                        style=\"margin-top: 4%;\">\n                        <label for=\"refferedBy\">Referred By</label>\n                        <select id=\"refferedBy\" class=\"form-ctrl\" [(ngModel)]=\"newEnqData.referred_by\" name=\"reffered\"\n                            style=\"border-radius: 4px;\">\n                            <option value=\"-1\"></option>\n                            <option *ngFor=\"let refer of referList\" [value]=\"refer.id\">{{refer.name}}</option>\n                        </select>\n\n                        <span style=\"right: 5px;\" class=\"sourceI iconPlus\" (click)=\"showAddReferPops()\">+</span>\n                    </div>\n\n                    <div class=\"field-wrapper\"\n                        *ngIf=\"(isMainBranch == 'Y' || subBranchSelected == true) && isEnquiryAdmin\"\n                        [ngClass]=\"{'has-value': newEnqData.source_instituteId != '-1'}\">\n                        <label for=\"selectBranch\">Branch</label>\n                        <select id=\"selectBranch\" class=\"form-ctrl\" [(ngModel)]=\"newEnqData.source_instituteId\"\n                            name=\"selectBranch\" (ngModelChange)=\"branchUpdated($event)\" style=\"border-radius: 4px;\">\n                            <option *ngFor=\"let data of branchesList\" [value]=\"data.institute_id\">\n                                {{data.institute_name}}</option>\n                        </select>\n                    </div>\n\n                    <div class=\"field-wrapper\" *ngIf=\"isEnquiryAdmin\"\n                        [ngClass]=\"{'has-value': newEnqData.assigned_to != '-1'}\">\n                        <label for=\"assignedTo\">Assigned To</label>\n                        <select id=\"assignedTo\" class=\"form-ctrl\" [(ngModel)]=\"newEnqData.assigned_to\"\n                            name=\"assigned_to\" style=\"border-radius: 4px;\">\n                            <option value=\"-1\"></option>\n                            <option *ngFor=\"let assign of enqAssignTo\" [value]=\"assign.userid\">{{assign.name}}</option>\n                        </select>\n\n                    </div>\n                    <div class=\"field-wrapper\" [ngClass]=\"{'has-value': newEnqData.enquiry != ''}\">\n                        <label for=\"Remarks\">Comment</label>\n                        <textarea type=\"text\" value=\"\" id=\"Remarks\" class=\"form-ctrl\" [(ngModel)]=\"newEnqData.enquiry\"\n                            name=\"remarks\" style=\"border-radius: 4px;height: 14vh;\"></textarea>\n\n                    </div>\n                </div>\n            </section>\n        </aside>\n    </form>\n</section>\n\n\n<!-- Confirmation PopUp -->\n<section id=\"popup\" class=\"popupWrapper fadeIn\" *ngIf=\"confimationPop\">\n    <div class=\"popup pos-abs\" style=\"top: 13%;\">\n        <div class=\"popup-wrapper pos-rel\">\n            <span class=\"closePopup pos-abs fbold show\" id=\"popupCloseBtn\" (click)=\"closePopUp()\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"9310 2185 16 16\">\n                    <g id=\"Group_1228\" data-name=\"Group 1228\" transform=\"translate(8298 1888)\">\n                        <g id=\"Group_1213\" data-name=\"Group 1213\" transform=\"translate(34.189 -7.77)\">\n                            <line id=\"Line_274\" data-name=\"Line 274\" class=\"cls-1\" y2=\"19.798\"\n                                transform=\"translate(992.81 305.77) rotate(45)\" />\n                            <line id=\"Line_275\" data-name=\"Line 275\" class=\"cls-1\" x1=\"19.798\"\n                                transform=\"translate(978.81 305.77) rotate(45)\" />\n                        </g>\n                        <rect id=\"Rectangle_686\" data-name=\"Rectangle 686\" style=\"stroke:none;\" class=\"cls-2\" width=\"16\"\n                            height=\"16\" transform=\"translate(1012 297)\" />\n                    </g>\n                </svg>\n            </span>\n            <div class=\"popup-content\">\n                <h2>Confirmation</h2>\n                <div class=\"confirmation-popup-content\">\n                    <div class=\"\">\n                        <p>Thank you for submitting New Enquiry.</p>\n                        <p>If you like to make any changes to the last submitted enquiry, kindly click\n                            <a style=\"cursor:pointer\" (click)=\"navigateToEdit()\" id=\"navigateanch11\">Edit</a>\n                        </p>\n                    </div>\n                    <div class=\"\">\n                        <p>You have submitted\n                            <strong>{{enquiryConfirm?.otherDetails?.total_new_enquiries}} New Enquiry </strong> as on\n                            <strong>{{todayDate | date }}</strong>\n                        </p>\n                        <p>If you like to view complete Enquiry List now, click\n                            <a style=\"cursor:pointer\" routerLink=\"/view/leads/enquiry\" id=\"enquiryAnch6\">More Info</a>\n                        </p>\n                    </div>\n                    <div>\n                        <div class=\"pull-right add-form-btns\">\n                            <a style=\"cursor:pointer\" (click)=\"reloadEnquiryForm()\" id=\"reloadEnquiryAnch12\">Add new\n                                enquiry</a>\n                            <a style=\"cursor:pointer\" *ngIf=\"permission != true && BulkEnqHide\"\n                                routerLink=\"/view/leads/enquiry/upload\" id=\"uploadAnch13\">Add Bulk enquiry</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n\n\n\n<app-add-city-area *ngIf=addArea (closePopup)=\"toggleAddArea($event)\" [selectedData]=\"selectedData\">\n</app-add-city-area>\n\n<!-- Add New institute -->\n<proctur-popup [hidden]=\"!isInstitutePop\">\n\n    <span class=\"closePopup pos-abs fbold show\" id=\"popupCloseBtn\" (click)=\"closeInstituteAdder()\" close-button>\n        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"9310 2185 16 16\">\n            <g id=\"Group_1228\" data-name=\"Group 1228\" transform=\"translate(8298 1888)\">\n                <g id=\"Group_1213\" data-name=\"Group 1213\" transform=\"translate(34.189 -7.77)\">\n                    <line id=\"Line_274\" data-name=\"Line 274\" class=\"cls-1\" y2=\"19.798\"\n                        transform=\"translate(992.81 305.77) rotate(45)\" />\n                    <line id=\"Line_275\" data-name=\"Line 275\" class=\"cls-1\" x1=\"19.798\"\n                        transform=\"translate(978.81 305.77) rotate(45)\" />\n                </g>\n                <rect id=\"Rectangle_686\" data-name=\"Rectangle 686\" style=\"stroke:none;\" class=\"cls-2\" width=\"16\"\n                    height=\"16\" transform=\"translate(1012 297)\" />\n            </g>\n        </svg>\n    </span>\n\n    <h2 popup-header>Institute Editor</h2>\n\n    <div class=\"institute-editor\" popup-content>\n\n        <div class=\"row clearFix add-edit\">\n            <a class=\"expend-box\" (click)=\"toggleInstituteAdd()\" id=\"addInstAnch14\">\n                <i id=\"add-institute-icon\">-</i>\n                <span>Create New Institute</span>\n            </a>\n        </div>\n\n        <section class=\"row clearFix input-section\" *ngIf=\"isNewInstitute\">\n\n            <div class=\"c-lg-4 c-md-4 c-sm-4 c-xs-4\">\n                <div class=\"field-wrapper\">\n                    <label for=\"instituteName\">Institute Name</label>\n                    <input type=\"text\" value=\"\" id=\"instituteName\" class=\"form-ctrl\"\n                        [(ngModel)]=\"createInstitute.instituteName\" name=\"instituteName\" />\n                </div>\n            </div>\n\n            <div class=\"c-lg-4 c-md-4 c-sm-4 c-xs-4 btn-grp\">\n                <input type=\"button\" value=\"Cancel\" class=\"btn\" (click)=\"closeAddInstitute()\" id=\"cancel3\">\n                <input type=\"button\" value=\"Add\" class=\"fullBlue btn\" (click)=\"addInstituteData()\" id=\"add3\">\n            </div>\n\n        </section>\n\n        <div class=\"row\">\n            <div class=\"table-responsive institute-table\">\n                <table>\n                    <thead>\n                        <tr>\n                            <th>Institute Id</th>\n                            <th>Institute Name</th>\n                            <th> </th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let sch of instituteList\">\n\n                            <td *ngIf=\"!sch.edit\">\n                                <div class=\"inst-id\">\n                                    {{sch.school_id}}\n                                </div>\n                            </td>\n\n                            <td *ngIf=\"sch.edit\">\n                                <div class=\"inst-id\">\n                                    {{sch.school_id}}\n                                </div>\n                            </td>\n\n\n                            <td *ngIf=\"!sch.edit\">\n                                <div class=\"inst-name\">\n                                    {{sch.school_name}}\n                                </div>\n                            </td>\n\n                            <td *ngIf=\"sch.edit\">\n                                <div class=\"field-wrapper\">\n                                    <input type=\"text\" [(ngModel)]=\"sch.school_name\" class=\"form-ctrl\"\n                                        name=\"instituteName\" id=\"schoolName\" />\n                                </div>\n                            </td>\n\n                            <td class=\"edit-view-btn\" *ngIf=\"!sch.edit\">\n                                <div class=\"\">\n                                    <a (click)=\"editInstitute(sch.school_id)\" style=\"cursor:pointer\" id=\"anchEdit\">\n                                        <i class=\"edit-icon cursor-icon\" aria-hidden=\"true\" id=\"iconEdit\"></i>Edit\n                                    </a>\n                                </div>\n                                <div class=\"\">\n                                    <a (click)=\"deleteInstitute(sch.school_id)\" style=\"cursor:pointer\" id=\"deletedAnch\">\n                                        <i class=\"view-icon cursor-icon\" aria-hidden=\"true\" id=\"iconView\"></i>Delete\n                                    </a>\n                                </div>\n                            </td>\n\n                            <td class=\"edit-view-btn\" *ngIf=\"sch.edit\">\n                                <div class=\"\">\n                                    <a (click)=\"cancelEditInstitute(sch.school_id)\" style=\"cursor:pointer\"\n                                        id=\"cancxelAnch\">\n                                        <i class=\"edit-icon\" aria-hidden=\"true\" class=\"icon2\"></i>Cancel\n                                    </a>\n                                </div>\n                                <div class=\"\">\n                                    <a (click)=\"updateInstitute(sch.school_id)\" style=\"cursor:pointer\" id=\"updateAnch\">\n                                        <i class=\"view-icon update-icon\" aria-hidden=\"true\" id=\"icon3\"></i>Update\n                                    </a>\n                                </div>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n\n</proctur-popup>\n\n\n\n<!-- Add New Source -->\n<proctur-popup [hidden]=\"!isSourcePop\">\n    <span class=\"closePopup pos-abs fbold show\" id=\"popupCloseBtn\" (click)=\"hideAddSourcePops()\" close-button>\n        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"9310 2185 16 16\">\n            <g id=\"Group_1228\" data-name=\"Group 1228\" transform=\"translate(8298 1888)\">\n                <g id=\"Group_1213\" data-name=\"Group 1213\" transform=\"translate(34.189 -7.77)\">\n                    <line id=\"Line_274\" data-name=\"Line 274\" class=\"cls-1\" y2=\"19.798\"\n                        transform=\"translate(992.81 305.77) rotate(45)\" />\n                    <line id=\"Line_275\" data-name=\"Line 275\" class=\"cls-1\" x1=\"19.798\"\n                        transform=\"translate(978.81 305.77) rotate(45)\" />\n                </g>\n                <rect id=\"Rectangle_686\" data-name=\"Rectangle 686\" style=\"stroke:none;\" class=\"cls-2\" width=\"16\"\n                    height=\"16\" transform=\"translate(1012 297)\" />\n            </g>\n        </svg>\n    </span>\n    <h2 popup-header> Source Editor</h2>\n\n    <div class=\"institute-editor\" popup-content>\n\n        <div class=\"row clearFix add-edit\">\n            <a class=\"expend-box\" (click)=\"toggleSourceAdd()\" id=\"icon4\">\n                <i id=\"add-source-icon\">-</i>\n                <span>Create New Source</span>\n            </a>\n        </div>\n\n        <section class=\"row clearFix input-section\" *ngIf=\"isNewSource\">\n            <div class=\"c-lg-4 c-md-4 c-sm-4 c-xs-4\">\n                <div class=\"field-wrapper\">\n                    <label for=\"sourceName\">Source Name</label>\n                    <input type=\"text\" value=\"\" id=\"sourceName\" class=\"form-ctrl\" [(ngModel)]=\"createSource.name\"\n                        name=\"sourceName\" />\n                </div>\n            </div>\n            <div class=\"c-lg-4 c-md-4 c-sm-4 c-xs-4 btn-grp\">\n                <input type=\"button\" value=\"Cancel\" class=\"btn\" (click)=\"closeAddSource()\" id=\"btnCancel4\">\n                <input type=\"button\" value=\"Add\" class=\"fullBlue btn\" (click)=\"addSourceData()\" id=\"btnAdd4\">\n            </div>\n        </section>\n\n        <div class=\"row\">\n            <div class=\"table-responsive institute-table\">\n                <table>\n                    <thead>\n                        <tr>\n                            <th style=\"width: 70%;\">Source</th>\n                            <th>Action </th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let sch of sourceList\">\n                            <td *ngIf=\"!sch.edit\" style=\"width: 70%;\">\n                                <div class=\"inst-name\">\n                                    {{sch.name}}\n                                </div>\n                            </td>\n\n                            <td *ngIf=\"sch.edit\" style=\"width: 70%;\">\n                                <div class=\"field-wrapper \">\n                                    <input type=\"text\" [(ngModel)]=\"sch.new_source_name\" class=\"form-ctrl\"\n                                        name=\"sourceName\" id=\"schName\" />\n                                </div>\n                            </td>\n\n                            <td class=\"edit-view-btn\" *ngIf=\"!sch.edit\">\n                                <div class=\"\" style=\"width: 20%;\">\n                                    <a (click)=\"editSource(sch.id)\" style=\"cursor:pointer\" id=\"editAnchor\">\n                                        <i class=\"cursor-icon fa fa-edit\" title=\"Edit\" aria-hidden=\"true\"></i>\n                                    </a>\n                                </div>\n                                <div class=\"\">\n                                    <a (click)=\"deleteSource(sch.id)\" style=\"cursor:pointer;color: red;\"\n                                        id=\"deleteAnchor\">\n                                        <i class=\"view-icon cursor-icon fa fa-trash\" title=\"Delete\" aria-hidden=\"true\"\n                                            id=\"deleteIcon3\"></i>\n                                    </a>\n                                </div>\n                            </td>\n\n                            <td class=\"edit-view-btn\" *ngIf=\"sch.edit\">\n                                <div class=\"\">\n                                    <a (click)=\"cancelEditSource(sch.id)\" style=\"cursor:pointer\" id=\"cancelEditAnch4\">\n                                        <i aria-hidden=\"true\" id=\"icon5\"></i>Cancel\n                                    </a>\n                                </div>\n                                <div class=\"\">\n                                    <a (click)=\"updateSource(sch.id)\" style=\"cursor:pointer\" id=\"anch5\">\n                                        <i class=\"view-icon update-icon\" aria-hidden=\"true\"></i>Update\n                                    </a>\n                                </div>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</proctur-popup>\n<!-- Add New Reference -->\n<proctur-popup [hidden]=\"!isReferPop\">\n\n    <span class=\"closePopup pos-abs fbold show\" id=\"popupCloseBtn\" (click)=\"hideAddReferPops()\" close-button>\n        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"9310 2185 16 16\">\n            <g id=\"Group_1228\" data-name=\"Group 1228\" transform=\"translate(8298 1888)\">\n                <g id=\"Group_1213\" data-name=\"Group 1213\" transform=\"translate(34.189 -7.77)\">\n                    <line id=\"Line_274\" data-name=\"Line 274\" class=\"cls-1\" y2=\"19.798\"\n                        transform=\"translate(992.81 305.77) rotate(45)\" />\n                    <line id=\"Line_275\" data-name=\"Line 275\" class=\"cls-1\" x1=\"19.798\"\n                        transform=\"translate(978.81 305.77) rotate(45)\" />\n                </g>\n                <rect id=\"Rectangle_686\" data-name=\"Rectangle 686\" style=\"stroke:none;\" class=\"cls-2\" width=\"16\"\n                    height=\"16\" transform=\"translate(1012 297)\" />\n            </g>\n        </svg>\n    </span>\n    <h2 popup-header>Add Referrer </h2>\n\n    <div class=\"institute-editor\" popup-content>\n\n        <div class=\"row clearFix add-edit\">\n            <a class=\"expend-box\" (click)=\"toggleReferAdd()\" id=\"toggleAnch\">\n                <i id=\"add-refer-icon\">-</i>\n                <span>Create New Reference</span>\n            </a>\n        </div>\n\n        <section class=\"row clearFix input-section\" *ngIf=\"isNewRefer\">\n            <div class=\"c-lg-6 c-md-6 c-sm-6 c-xs-6\">\n                <div class=\"field-wrapper\">\n                    <label for=\"referName\">Referrer Name</label>\n                    <input type=\"text\" value=\"\" id=\"referName\" class=\"form-ctrl\" [(ngModel)]=\"createReferer.name\"\n                        name=\"referName\" />\n                </div>\n            </div>\n\n            <div class=\"c-lg-6 c-md-6 c-sm-6 c-xs-6 btn-grp\">\n                <input type=\"button\" value=\"Cancel\" class=\"btn\" (click)=\"closeAddRefer()\" id=\"btnCancel5\">\n                <input type=\"button\" value=\"Add\" class=\"fullBlue btn\" (click)=\"addReferData()\" id=\"btnAdd5\">\n            </div>\n        </section>\n\n        <div class=\"row\">\n            <div class=\"table-responsive institute-table\">\n                <table>\n                    <thead>\n                        <tr>\n                            <th style=\"width: 70%;\">Referrer Name</th>\n                            <th>Action</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let sch of referList\">\n                            <td *ngIf=\"!sch.edit\" style=\"width:70%\">\n                                <div class=\"inst-name\">\n                                    {{sch.name}}\n                                </div>\n                            </td>\n\n                            <td *ngIf=\"sch.edit\" style=\"width: 70%;\">\n                                <div class=\"field-wrapper \">\n                                    <input type=\"text\" [(ngModel)]=\"sch.new_referrer_name\" class=\"form-ctrl\"\n                                        name=\"sourceName\" id=\"sourceName\" />\n                                </div>\n                            </td>\n\n                            <td class=\"edit-view-btn\" *ngIf=\"!sch.edit\">\n                                <div class=\"\" style=\"width: 20%;\">\n                                    <a (click)=\"editRefer(sch.id)\" style=\"cursor:pointer\" id=\"editAnch5\">\n                                        <i class=\"cursor-icon fa fa-edit\" title=\"Edit\" aria-hidden=\"true\"\n                                            id=\"editIcon5\"></i>\n                                    </a>\n                                </div>\n                                <div class=\"\">\n                                    <a (click)=\"deleteRefer(sch.id, sch.name)\" style=\"cursor:pointer;color: red;\"\n                                        id=\"deleteAnch5\">\n                                        <i class=\"view-icon cursor-icon fa fa-trash\" title=\"Delete\" aria-hidden=\"true\"\n                                            id=\"deleteIcon5\"></i>\n                                    </a>\n                                </div>\n                            </td>\n\n                            <td class=\"edit-view-btn\" *ngIf=\"sch.edit\">\n                                <div class=\"\">\n                                    <a (click)=\"cancelEditRefer(sch.id)\" style=\"cursor:pointer\" id=\"cancelAnch6\">\n                                        <i aria-hidden=\"true\" id=\"cancelIcon6\"></i>Cancel\n                                    </a>\n                                </div>\n                                <div class=\"\">\n                                    <a (click)=\"updateRefer(sch.id)\" style=\"cursor:pointer\" id=\"updateAnch7\">\n                                        <i class=\"view-icon update-icon\" aria-hidden=\"true\" id=\"updateIcon7\"></i>Update\n                                    </a>\n                                </div>\n                            </td>\n\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n\n    </div>\n\n</proctur-popup>\n\n<!-- Add New City Area -->\n<proctur-popup *ngIf=\"addCityAreaPopUp.showPopUp\">\n\n    <span class=\"closePopup pos-abs fbold show\" id=\"popupCloseBtn\" (click)=\"closeCityAreaPopup()\" close-button>\n        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"9310 2185 16 16\">\n            <g id=\"Group_1228\" data-name=\"Group 1228\" transform=\"translate(8298 1888)\">\n                <g id=\"Group_1213\" data-name=\"Group 1213\" transform=\"translate(34.189 -7.77)\">\n                    <line id=\"Line_274\" data-name=\"Line 274\" class=\"cls-1\" y2=\"19.798\"\n                        transform=\"translate(992.81 305.77) rotate(45)\" />\n                    <line id=\"Line_275\" data-name=\"Line 275\" class=\"cls-1\" x1=\"19.798\"\n                        transform=\"translate(978.81 305.77) rotate(45)\" />\n                </g>\n                <rect id=\"Rectangle_686\" data-name=\"Rectangle 686\" style=\"stroke:none;\" class=\"cls-2\" width=\"16\"\n                    height=\"16\" transform=\"translate(1012 297)\" />\n            </g>\n        </svg>\n    </span>\n\n    <h2 popup-header>Add Area And City </h2>\n\n    <div class=\"institute-editor\" popup-content>\n\n        <div class=\"row clearFix add-edit\">\n            <a class=\"expend-box\" (click)=\"toggleCityAreaAdd()\" id=\"toggleAnch\">\n                <i id=\"add-areaCity-icon\">+</i>\n                <span>Create New Area And City</span>\n            </a>\n        </div>\n\n        <section class=\"row clearFix input-section\" *ngIf=\"addCityAreaPopUp.addNew\">\n            <div class=\"c-lg-3 c-md-3 c-sm-3 c-xs-3\">\n                <div class=\"field-wrapper\">\n                    <label for=\"CityName\">City<span class=\"text-danger\">*</span></label>\n                    <input type=\"text\" value=\"\" id=\"CityName\" class=\"form-ctrl\"\n                        [(ngModel)]=\"addCityAreaPopUp.newCity.city\" name=\"CityName\" />\n                </div>\n            </div>\n\n            <div class=\"c-lg-3 c-md-3 c-sm-3 c-xs-3\">\n                <div class=\"field-wrapper\">\n                    <label for=\"AreaName\">Area</label>\n                    <input type=\"text\" value=\"\" id=\"AreaName\" class=\"form-ctrl\"\n                        [(ngModel)]=\"addCityAreaPopUp.newCity.area\" name=\"AreaName\" />\n                </div>\n            </div>\n\n            <div class=\"c-lg-3 c-md-3 c-sm-3 c-xs-3 hide\">\n                <div class=\"field-wrapper\">\n                    <label for=\"selectBranchPop\">Branch</label>\n                    <select id=\"selectBranchPop\" class=\"form-ctrl\" [(ngModel)]=\"addCityAreaPopUp.newCity.branch\"\n                        name=\"selectBranchPop\">\n                        <option *ngFor=\"let data of branchesList\" [value]=\"data.institute_id\">{{data.institute_name}}\n                        </option>\n                    </select>\n                </div>\n            </div>\n\n            <div class=\"c-lg-3 c-md-3 c-sm-3 c-xs-3 btn-grp\">\n                <input type=\"button\" value=\"Add\" class=\"fullBlue btn\" (click)=\"addNewCityArea()\" id=\"btnAdd5\">\n            </div>\n        </section>\n\n        <div class=\"row\">\n            <div class=\"table-responsive institute-table\">\n                <table>\n                    <thead>\n                        <tr>\n                            <th>City</th>\n                            <th>Area</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let sch of cityListDataSource\">\n                            <td>{{sch.city}}</td>\n                            <td>{{sch.area}}</td>\n                        </tr>\n\n                        <tr *ngIf=\"cityListDataSource.length ==0\">\n                            <td colspan=\"2\" style=\"text-align: center\">\n                                No City Area List Available\n                            </td>\n                        </tr>\n\n                    </tbody>\n                </table>\n            </div>\n        </div>\n\n    </div>\n\n</proctur-popup>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/leads/enquiry/enquiry-custom/user-enquiry.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/leads/enquiry/enquiry-custom/user-enquiry.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-content select=\"[input-def]\">\n  \n</ng-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/leads/leads-home/leads-home.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/leads/leads-home/leads-home.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section style=\"padding-right: 2%;;\">\n  <div class=\"status-wise-container\">\n    <div class=\"status-wise-header-container\">\n      <div class=\"header-title\">\n        <span>Lead</span>\n      </div>\n      <div class=\"filter-date-container\">\n        <button class=\"pull-right\" (click)=\"openCalendar('enqWidDate')\">\n\n          <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n            <g fill=\"#0084F6\" fill-rule=\"nonzero\">\n              <path\n                d=\"M18.667 5.5H16.5v-1a.5.5 0 1 0-1 0v1h-3v-1a.5.5 0 1 0-1 0v1h-3v-1a.5.5 0 1 0-1 0v1H5.333C4.598 5.5 4 6.096 4 6.833v11.833C4 19.403 4.597 20 5.333 20h13.334c.736 0 1.333-.597 1.333-1.334V6.833c0-.737-.596-1.333-1.333-1.333zM19 18.666c0 .184-.15.334-.333.334H5.333A.334.334 0 0 1 5 18.666V6.833c0-.184.15-.333.333-.333H7.5v1a.5.5 0 1 0 1 0v-1h3v1a.5.5 0 1 0 1 0v-1h3v1a.5.5 0 1 0 1 0v-1h2.167c.183 0 .333.15.333.333v11.833z\" />\n              <path\n                d=\"M7.5 10h2v1.5h-2zM7.5 12.5h2V14h-2zM7.5 15h2v1.5h-2zM11 15h2v1.5h-2zM11 12.5h2V14h-2zM11 10h2v1.5h-2zM14.5 15h2v1.5h-2zM14.5 12.5h2V14h-2zM14.5 10h2v1.5h-2z\" />\n            </g>\n          </svg>\n        </button>\n        <input type=\"text\" value=\"\" id=\"enqWidDate\" class=\"widgetDatepicker bsDatepicker\" name=\"enqWidDate\"\n          [(ngModel)]=\"enquiryDate\" (ngModelChange)=\"updateEnqChartByDate($event)\" readonly=\"true\" bsDaterangepicker />\n        <span class=\"enquiry-state-date pull-right\">\n          {{getEnqStartDate()| date: 'dd MMM yyyy'}} To {{getEnqEndDate()| date: 'dd MMM yyyy'}}\n        </span>\n      </div>\n    </div>\n    <div class=\"status-wise-dashboard-container\">\n\n      <div class=\"status-wise-dashboard-item all\">\n        <div class=\"count-container\">\n          <span>{{totalEnquiryCount}}</span>\n        </div>\n        <div class=\"dashboard-item-name\">\n          <span>All Enquiry</span>\n        </div>\n      </div>\n      <div class=\"status-wise-dashboard-item hot\">\n        <div class=\"count-container\">\n          <span>{{enquiryStatus.Open}}</span>\n        </div>\n        <div class=\"dashboard-item-name\">\n          <span>Open</span>\n        </div>\n      </div>\n      <div class=\"status-wise-dashboard-item pending\">\n        <div class=\"count-container\">\n          <span>{{enquiryStatus['In Progress']}}</span>\n        </div>\n        <div class=\"dashboard-item-name\">\n          <span>In Progress</span>\n        </div>\n      </div>\n\n\n      <div class=\"status-wise-dashboard-item admitted\">\n        <div class=\"count-container\">\n          <span>{{enquiryStatus['Student Admitted']}}</span>\n        </div>\n        <div class=\"dashboard-item-name\">\n          <span> Admitted</span>\n        </div>\n      </div>\n      <div class=\"status-wise-dashboard-item not-converted\">\n        <div class=\"count-container\">\n          <span>{{enquiryStatus.Closed}}</span>\n        </div>\n        <div class=\"dashboard-item-name\">\n          <span>Closed</span>\n        </div>\n      </div>\n    </div>\n  </div>\n  <section>\n    <div class=\"item_type_2\" *ngIf=\"jsonRolesFlags.isShowAddEnquiry || jsonRolesFlags.isShowDataSetup \">\n\n      <div class=\"dropdown dropleft\">\n        <button style=\"background: #0084f6;color: white;\" class=\"btn btn-light btn-xs dropdown-toggle round\"\n          type=\"button\" (click)=\"toggleActionMenu($event)\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n          aria-expanded=\"false\">\n          +\n        </button>\n        <div class=\"dropdown-menu horizontal-menu\" aria-labelledby=\"actionMenu\">&nbsp;\n          <div style=\"margin-top: -8%;\"><a routerLink=\"/view/leads/add\" *ngIf=\"jsonRolesFlags.isShowAddEnquiry\"\n              title=\"Add enquiries one by one or Upload in bulk with XLS\" class=\"dropdown-item\">&nbsp;&nbsp;Add\n              Enquiry&nbsp;\n            </a></div><br>\n          <div style=\"margin-top: -5%;margin-bottom: 2%;\"><a routerLink=\"/view/leads/setup\"\n              *ngIf=\"jsonRolesFlags.isShowDataSetup\" title=\"Set up sources of leads and enquiry closing reasons\"\n              class=\"dropdown-item\">&nbsp;&nbsp;Add\n              Closing\n              Reason</a></div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <section>\n    <div class=\"leads-menu-section-container\"><br><br><br><br><br>\n      <!-- <div class=\"leads-menu-item\" routerLink=\"/view/leads/setup\" *ngIf=\"jsonRolesFlags.isShowDataSetup\">\n        <div class=\"menu-title\">\n          <img src=\"./assets/images/leads/data-setup.svg\" alt=\"data setup\">\n          <span>Data Setup</span>\n        </div>\n        <div class=\"menu-description\">\n          <span>Set up sources of leads and enquiry closing reasons.</span>\n        </div>\n      </div> -->\n      <div class=\"leads-menu-item\" routerLink=\"/view/leads/campaign\" *ngIf=\"jsonRolesFlags.isShowAddCampaign\">\n        <div class=\"menu-title\">\n          <img src=\"./assets/images/leads/add-campaign.svg\" alt=\"campaign\">\n          <span>Add Campaign</span>\n        </div>\n        <div class=\"menu-description\">\n          <span>Upload Leads in bulk to run SMS Marketing Campaigns.</span>\n        </div>\n      </div>\n      <div class=\"leads-menu-item\" routerLink=\"/view/leads/manage-campaign\" *ngIf=\"jsonRolesFlags.isShowCampaign\">\n        <div class=\"menu-title\">\n          <img src=\"./assets/images/leads/manage-campaign.svg\" alt=\"campaign\">\n          <span>Manage Campaign</span>\n        </div>\n        <div class=\"menu-description\">\n          <span>Manage, download and convert leads to enquiries.</span>\n        </div>\n      </div>\n      <!-- <div class=\"leads-menu-item\" routerLink=\"/view/leads/add\" *ngIf=\"jsonRolesFlags.isShowAddEnquiry\">\n        <div class=\"menu-title\">\n          <img src=\"./assets/images/leads/add-enquiry.svg\" alt=\"add enquiry\">\n          <span>Add Enquiry</span>\n        </div>\n        <div class=\"menu-description\">\n          <span>Add enquiries one by one or Upload in bulk with XLS.</span>\n        </div>\n      </div> -->\n      <div class=\"leads-menu-item\" routerLink=\"/view/leads/enquiry\" *ngIf=\"jsonRolesFlags.isShowManageEnquiry\">\n        <div class=\"menu-title\">\n          <img src=\"./assets/images/leads/manage.svg\" alt=\"manage enq\">\n          <span>Manage Enquiry</span>\n        </div>\n        <div class=\"menu-description\">\n          <span>Manage all enquiries, maintain status, conversation history and covert to admissions.</span>\n        </div>\n      </div>\n      <!--<div class=\"leads-menu-item\" routerLink=\"/view/leads/enquiryReport\" *ngIf=\"jsonRolesFlags.isShowReport\">\n        <div class=\"menu-title\" *ngIf=\"jsonRolesFlags.isShowReport\">\n          <img src=\"./assets/images/leads/reports.svg\" alt=\"reports\">\n          <span>Enquiry Report</span>\n        </div>\n        <div class=\"menu-description\">\n          <span>Enquiry reports counsellor wise, source wise and referral wise.</span>\n        </div>\n      </div>-->\n\n     <!-- <div class=\"leads-menu-item\" routerLink=\"/view/leads/campaign-reports\" *ngIf=\"jsonRolesFlags.isShowCampaignReport\">\n        <div class=\"menu-title\">\n          <img src=\"./assets/images/fee/campaign_sms_report.svg\" alt=\"reports\">\n          <span>Campaign Report</span>\n        </div>\n        <div class=\"menu-description\">\n          <span>Campaign reports for the SMS sent to Leads.</span>\n        </div>\n      </div>-->\n      <!-- <div class=\"leads-menu-item\" routerLink=\"/view/activity/timeTable\">\n      <div class=\"menu-title\">\n        <span>Settings</span>\n      </div>\n      <div class=\"menu-description\">\n        <span></span>\n      </div>\n    </div>\n    <div class=\"leads-menu-item\" routerLink=\"/view/activity/timeTable\">\n      <div class=\"menu-title\">\n        <span>Integration</span>\n      </div>\n      <div class=\"menu-description\">\n        <span></span>\n      </div>\n    </div> -->\n    </div>\n  </section>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/leads/leads.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/leads/leads.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/leads/manage-campaign/manage-campaign.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/leads/manage-campaign/manage-campaign.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Modal -->\n<div id=\"editLead\" class=\"modal\" role=\"dialog\">\n  <div class=\"modal-dialog\" role=\"document\">\n\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h4 class=\"modal-title\">Update Lead</h4>\n      </div>\n      <div class=\"modal-body\" style=\"padding-top: 0px;\">\n        <div class=\"form-container\">\n\n          <div class=\"form-item field-wrapper\">\n            <!-- // changes done by Nalini - To add country calling code -->\n            <label style=\"width: 100%;\" for=\"mobile_no\">Mobile\n              <span class=\"text-danger\">*</span>\n            </label>\n            <span class=\"countryCallingCode\" style=\"width: 22%\">\n              <select id=\"country_id\" class=\"form-ctrl\"\n                  [(ngModel)]=\"editLead.country_id\" name=\"country_id\"\n                  [disabled]=\"countryDetails.length<=1\"\n                  (change)=\"onChangeObj($event.target.value)\"\n                  style=\"height: 29px;padding: 0;border-radius: 4px;width: 25%;float: left;\">\n                  <option value=\"\"></option>\n                  <option [value]=\"data.id\" selected\n                      *ngFor='let data of countryDetails'>\n                      {{data.country_code}} +{{data.country_calling_code}}\n                  </option>\n              </select>\n          </span>\n            <input type=\"text\" style=\"width: 75%;\" value=\"\" id=\"mobile_no\"\n              onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57)\" class=\"form-ctrl\"\n              [(ngModel)]=\"editLead.phone\" name=\"name\" autocomplete=\"off\" maxlength=\"10\" required placeholder=\"Contact Number\" />\n          </div>\n\n          <div class=\"form-item field-wrapper\">\n            <label for=\"name\">Name\n              <span class=\"text-danger\">*</span>\n            </label>\n            <input type=\"text\" value=\"\" id=\"name\" class=\"form-ctrl\" [(ngModel)]=\"editLead.name\" name=\"name\"\n              maxlength=\"50\" required placeholder=\"Name\" />\n          </div>\n\n          <div class=\"form-item field-wrapper\">\n            <label for=\"gender\">Gender</label>\n            <select class=\"form-ctrl\" [(ngModel)]=\"editLead.gender\" name=\"gender\" id=\"gender\">\n              <option value=\"M\">Male</option>\n              <option value=\"F\">Female</option>\n              <option value=\"NA\">NA</option>\n            </select>\n          </div>\n\n          <div class=\"form-item field-wrapper\">\n            <label for=\"email2\">Email ID</label>\n            <input type=\"text\" value=\"\" id=\"email2\" class=\"form-ctrl\" [(ngModel)]=\"editLead.emailId\" name=\"email2\"\n              placeholder=\"Email ID\" pattern=\"[a-zA-Z0-9._%+-]+@[a-zA-Z]+\\.[a-zA-Z.]{2,5}$\" />\n          </div>\n\n          <div class=\"form-item field-wrapper\">\n            <label for=\"address\">Address</label>\n            <input type=\"text\" value=\"\" id=\"address\" class=\"form-ctrl\" [(ngModel)]=\"editLead.address\" name=\"address\"\n              maxlength=\"50\" required placeholder=\"Address\" />\n          </div>\n\n          <div class=\"form-item field-wrapper\">\n            <label for=\"city\">City</label>\n            <input type=\"text\" value=\"\" id=\"city\" class=\"form-ctrl\" [(ngModel)]=\"editLead.city\" name=\"city\"\n              maxlength=\"50\" required placeholder=\"City\" />\n          </div>\n\n          <div class=\"form-item field-wrapper\">\n            <label for=\"referredBy\">Referred By</label>\n            <select class=\"form-ctrl\" name=\"referredBy\" [(ngModel)]=\"editLead.referredBy\">\n              <option value=\"-1\">Select Referred By</option>\n              <option [value]=\"referred.id\" *ngFor=\"let referred of referredByList\">{{referred.name}}</option>\n            </select>\n          </div>\n\n          <div class=\"form-item field-wrapper\">\n            <label for=\"source\">Source</label>\n            <select class=\"form-ctrl\" name=\"source\" [(ngModel)]=\"editLead.source\">\n              <option value=\"-1\">Select Source</option>\n              <option [value]=\"source.id\" *ngFor=\"let source of sourceList\">{{source.name}}</option>\n            </select>\n          </div>\n\n        </div>\n\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"fullBlue btn\" (click)=\"updateLead()\">Save</button>\n      </div>\n    </div>\n\n  </div>\n</div>\n\n<!-- Modal -->\n<div id=\"addLead\" class=\"modal\" role=\"dialog\">\n  <div class=\"modal-dialog\" style=\"margin-top: 10%;\">\n\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h4 class=\"modal-title\">Create Lead</h4>\n      </div>\n      <div class=\"modal-body\" style=\"padding-top: 0px;\">\n        <div class=\"form-container\">\n\n          <div class=\"form-item field-wrapper\">\n            <label for=\"mobile_no\" style=\"width: 100%;\">Mobile\n              <span class=\"text-danger\">*</span>\n            </label>\n            <!-- // changes done by Nalini - To add country calling code -->\n            <span class=\"countryCallingCode\" style=\"width: 22%\">\n              <select id=\"country_id\" class=\"form-ctrl\"\n                  [(ngModel)]=\"addLead.country_id\" name=\"country_id\"\n                  [disabled]=\"countryDetails.length<=1\"\n                  (change)=\"onChangeObj($event.target.value)\"\n                  style=\"height: 29px;padding: 0;border-radius: 4px;width: 25%;float: left;\">\n                  <option value=\"\"></option>\n                  <option [value]=\"data.id\" selected\n                      *ngFor='let data of countryDetails'>\n                      {{data.country_code}} +{{data.country_calling_code}}\n                  </option>\n              </select>\n          </span>\n            <input type=\"text\" style=\"width: 75%;\" value=\"\" id=\"mobile_no\"\n              onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57)\" class=\"form-ctrl\"\n              [(ngModel)]=\"addLead.phone\" autocomplete=\"off\" name=\"name\" maxlength=\"10\" required placeholder=\"Contact Number\" />\n          </div>\n\n          <div class=\"form-item field-wrapper\">\n            <label for=\"name\">Name\n              <span class=\"text-danger\">*</span>\n            </label>\n            <input type=\"text\" value=\"\" id=\"name\" class=\"form-ctrl\" [(ngModel)]=\"addLead.name\" name=\"name\"\n              maxlength=\"50\" required placeholder=\"Name\" />\n          </div>\n\n          <div class=\"form-item field-wrapper\">\n            <label for=\"gender\">Gender</label>\n            <select class=\"form-ctrl\" [(ngModel)]=\"addLead.gender\" name=\"gender\" id=\"gender\">\n              <option value=\"M\">Male</option>\n              <option value=\"F\">Female</option>\n              <option value=\"NA\">NA</option>\n            </select>\n          </div>\n\n          <div class=\"form-item field-wrapper\">\n            <label for=\"email2\">Email ID</label>\n            <input type=\"text\" value=\"\" id=\"email2\" class=\"form-ctrl\" [(ngModel)]=\"addLead.emailId\" name=\"email2\"\n              placeholder=\"Email ID\" pattern=\"[a-zA-Z0-9._%+-]+@[a-zA-Z]+\\.[a-zA-Z.]{2,5}$\" />\n          </div>\n\n          <div class=\"form-item field-wrapper\">\n            <label for=\"address\">Address</label>\n            <input type=\"text\" value=\"\" id=\"address\" class=\"form-ctrl\" [(ngModel)]=\"addLead.address\" name=\"address\"\n              maxlength=\"50\" required placeholder=\"Address\" />\n          </div>\n\n          <div class=\"form-item field-wrapper\">\n            <label for=\"city\">City</label>\n            <input type=\"text\" value=\"\" id=\"city\" class=\"form-ctrl\" [(ngModel)]=\"addLead.city\" name=\"city\"\n              maxlength=\"50\" required placeholder=\"City\" />\n          </div>\n\n          <div class=\"form-item field-wrapper\">\n            <label for=\"referredBy\">Referred By</label>\n            <select class=\"form-ctrl\" name=\"referredBy\" [(ngModel)]=\"addLead.referredBy\">\n              <option value=\"-1\">Select Referred By</option>\n              <option [value]=\"referred.id\" *ngFor=\"let referred of referredByList\">{{referred.name}}</option>\n            </select>\n          </div>\n\n          <div class=\"form-item field-wrapper\">\n            <label for=\"source\">Source\n              <span class=\"text-danger\">*</span>\n            </label>\n            <select class=\"form-ctrl\" name=\"source\" [(ngModel)]=\"addLead.source\">\n              <option value=\"-1\">Select Source</option>\n              <option [value]=\"source.id\" *ngFor=\"let source of sourceList\">{{source.name}}</option>\n            </select>\n          </div>\n\n        </div>\n\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"fullBlue btn\" (click)=\"saveNewLead()\">Save</button>\n      </div>\n    </div>\n\n  </div>\n</div>\n\n<!-- Modal -->\n<div id=\"SMS\" class=\"modal\" role=\"dialog\">\n  <div class=\"modal-dialog\" style=\"width: 723px;margin-top: 5%;\">\n\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h4 class=\"modal-title\" style=\"font-weight: 500;\">Send Promotional SMS</h4>\n      </div>\n      <table style=\"width: 96%;margin-left: 2%;\" class=\"camp-table\">\n        <thead>\n          <th style=\"padding: 8px;\">\n            Message\n          </th>\n\n        </thead>\n        <!-- <tr>\n          <th></th>\n          <th></th>\n        </tr> -->\n        <tbody>\n          <tr *ngFor=\"let msg of promoSMSList; let i = index;\">\n            <td class=\"c-lg-12 c-md-12 c-sm-12\" style=\"width: 12%;padding-left: 15px;\">\n              <div class=\"field-checkbox-wrapper\">\n                <input type=\"checkbox\" (click)=\"selectMsg(msg)\" id=\"check{{i}}\" value=\"\" name=\"\" class=\"form-checkbox\"\n                  style=\"cursor: pointer;\">\n                <label for=\"check{{i}}\"></label>\n              </div>\n            </td>\n            <td style=\"text-align: left;width: 92%;\">\n              {{msg.message}}\n            </td>\n          </tr>\n        </tbody>\n      </table>\n      <!-- <div class=\"modal-body\">\n        <p>Message\n          <span class=\"text-danger\">*</span>\n        </p>\n        <div class=\"msg-list-container\" style=\"border-radius: 4px;\">\n          <div class=\"msg-item\" *ngFor=\"let msg of promoSMSList; let i = index;\"\n            style=\"border-bottom: 1px solid lightgrey;padding-bottom: 0px;\">\n            <div class=\"msg-checkbox field-checkbox-wrapper\">\n              <input type=\"checkbox\" (click)=\"selectMsg(msg)\" id=\"check{{i}}\" value=\"\" name=\"\" class=\"form-checkbox\">\n              <label for=\"check{{i}}\"></label>\n            </div>\n            <div class=\"msg-span\">\n              <span>{{msg.message}}</span>\n            </div>\n          </div>\n        </div>\n      </div> -->\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"add-class-btn btn-default\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"add-class-btn btn-default\" (click)=\"sendSMS()\">Send</button>\n      </div>\n    </div>\n\n  </div>\n</div>\n\n\n<section class=\"clearFix\" style=\"padding-right: 2%;padding-top: 2px !important;\">\n  <!-- Header and Navigation -->\n  <div>\n    <div class=\"w98 p-15\">\n        <nav aria-label=\"breadcrumb \">\n            <ol class=\"breadcrumb arr-right\">\n                <li class=\"breadcrumb-item \"><a>Leads</a></li>\n                <li class=\"breadcrumb-item \"><a>SMS Campaign</a></li>\n            </ol>\n        </nav>\n        <!-- Nav tabs -->\n        <ul class=\"nav main-shadow\">\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" data-toggle=\"tab\" routerLink=\"/view/leads/campaign\">Add Campaign</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link active\" data-toggle=\"tab\" routerLink=\"/view/leads/manage-campaign\">Manage Campaign</a>\n            </li>\n        </ul>\n    </div>\n  </div>\n  <section>\n    <div class=\"filter-container\">\n      <div class=\"filter-first-row-container\" [ngClass]=\"(jsonFlag.toggle)? 'show-filter' : 'hide-filter'\">\n        <div class=\"filter-item field-wrapper\">\n          <input type=\"text\" class=\"form-ctrl\" name=\"\" value=\"\" placeholder=\"Name\" [(ngModel)]=\"filters.stundetName\">\n        </div>\n        <div class=\"filter-item field-wrapper\">\n          <input type=\"text\" class=\"form-ctrl\" name=\"\" value=\"\" placeholder=\"Contact Number\"\n            [(ngModel)]=\"filters.contactNumber\">\n        </div>\n        <div class=\"filter-item field-wrapper\">\n          <select class=\"form-ctrl\" name=\"\" [(ngModel)]=\"filters.campaignName\">\n            <option value=\"-1\">Select Campaign</option>\n            <option title=\"{{campaign.list_name}}\" [value]=\"campaign.list_id\" *ngFor=\"let campaign of campaignList\">\n              {{ (campaign.list_name.length > 30) ? (campaign.list_name | slice:0:30) + '...' : campaign.list_name }}\n            </option>\n          </select>\n        </div>\n        <div class=\"filter-item\" style=\"width: 8%;\" id=\"searchBtn1\">\n          <button type=\"button\" class=\"search-btn fullBlue\" name=\"button\" (click)=\"searchCampaign(0)\">Search</button>\n        </div>\n        <div class=\"filter-item\" id=\"advBtn1\">\n          <button type=\"button\" class=\"advance-filter-btn\" name=\"button\" (click)=\"toggleFilter()\">Show Advance\n            Filter</button>\n        </div>\n      </div>\n      <div class=\"filter-second-row-container\" id=\"advance_filter\"\n        [ngClass]=\"(jsonFlag.toggle)? 'show-filter' : 'hide-filter'\">\n        <div class=\"filter-item field-wrapper\">\n          <select class=\"form-ctrl\" name=\"\" [(ngModel)]=\"filters.referredBy\">\n            <option value=\"-1\">Select Referred By</option>\n            <option title=\"{{referred.name}}\" [value]=\"referred.id\" *ngFor=\"let referred of referredByList\">\n              {{ (referred.name.length > 30) ? (referred.name | slice:0:30) + '...' : referred.name }}</option>\n          </select>\n        </div>\n        <div class=\"filter-item field-wrapper\">\n          <select class=\"form-ctrl\" name=\"\" [(ngModel)]=\"filters.source\">\n            <option value=\"-1\">Select Source</option>\n            <option title=\"{{source.name}}\" [value]=\"source.id\" *ngFor=\"let source of sourceList\">\n              {{ (source.name.length > 30) ? (source.name | slice:0:30) + '...' : source.name }}</option>\n          </select>\n        </div>\n        <div class=\"filter-item field-wrapper\">\n          <select class=\"form-ctrl\" name=\"\" [(ngModel)]=\"filters.assignedTo\">\n            <option value=\"-1\">Select Assigned To</option>\n            <option [value]=\"assigned.userid\" *ngFor=\"let assigned of assignedToList\">{{assigned.name}}</option>\n          </select>\n        </div>\n        <div class=\"filter-item\" style=\"width: 8%;\" id=\"searchBtn2\">\n          <button type=\"button\" class=\"search-btn fullBlue\" name=\"button\" (click)=\"searchCampaign(0)\">Search</button>\n        </div>\n        <div class=\"filter-item\" id=\"advBtn2\">\n          <button type=\"button\" class=\"advance-filter-btn\" name=\"button\" (click)=\"toggleFilter()\">Hide Advance\n            Filter</button>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <section>\n    <div class=\"campaign-activity-container\">\n      <div class=\"activity-item field-wrapper\">\n        <input type=\"text\" value=\"\" id=\"search_bar\" [(ngModel)]=\"leadSearchInput\" name=\"leadSearchInput\"\n          (keyup)=\"searchDatabase(search)\" placeholder=\"Search here...\" class=\"search-box\" #search>\n      </div>\n      <div class=\"activity-item\">\n        <button type=\"button\" name=\"button\" class=\"add-student-btn\" data-toggle=\"modal\" data-target=\"#addLead\">Add\n          Lead</button>\n      </div>\n      <div class=\"activity-item\" *ngIf=\"downloadEnquiryReportAccess\">\n        <i class=\"fa fa-file-pdf-o\"\n          style=\"font-size: 28px;color: darkred;cursor: pointer;margin-right: 5px;margin-left: -13px;\"\n          aria-hidden=\"true\" (click)=\"downloadPdf()\"></i>\n        <!-- <button type=\"button\" title=\"Download PDF\" name=\"button\" class=\"download-btn\" (click)=\"downloadPdf()\">\n          <i class=\"fa fa-download\" aria-hidden=\"true\"></i> -->\n        <!-- PDF\n        </button> -->\n      </div>\n    </div>\n  </section>\n\n  <section>\n    <div class=\"student-list-table-container\">\n      <div class=\"list-heading-container\">\n        <div class=\"heading-item sm-item field-checkbox-wrapper\" style=\"margin-top: 8px;\">\n          <input type=\"checkbox\" value=\"\" id=\"check_all\" name=\"check_all\" class=\"form-checkbox\"\n            (click)=\"checkAllLead($event)\" [(ngModel)]=\"checkAll\">\n          <label for=\"check_all\"></label>\n        </div>\n        <div class=\"heading-item md-item\">\n          <span>Contact No.</span>\n        </div>\n        <div class=\"heading-item lg-item\">\n          <span>Name</span>\n        </div>\n        <div class=\"heading-item lg-item\">\n          <span>Email</span>\n        </div>\n        <div class=\"heading-item lg-item\">\n          <span>City</span>\n        </div>\n        <div class=\"heading-item lg-item\">\n          <span>Address</span>\n        </div>\n        <div class=\"heading-item sm-item align-center\">\n          <span>Gender</span>\n        </div>\n        <div class=\"heading-item lg-item align-center\">\n          <span>Referred By</span>\n        </div>\n        <div class=\"heading-item lg-item align-center\">\n          <span>Source</span>\n        </div>\n        <div class=\"heading-item lg-item align-center\">\n          <span>Action</span>\n        </div>\n      </div>\n      <div class=\"list-value-outer-container\" id=\"lead-value-container\">\n        <div class=\"list-value-container\" *ngFor=\"let lead of leadsList; let i = index; trackBy: i;\"\n          [ngClass]=\"{'converted-lead': lead.converted != '0'}\">\n          <div class=\"value-item sm-item field-checkbox-wrapper\" style=\"margin-top: 8px;\">\n            <input type=\"checkbox\" (click)=\"rowCheckBoxClick(lead)\" id=\"check{{i}}\" value=\"\" name=\"\"\n              class=\"form-checkbox\" *ngIf=\"lead.converted == 0\" [(ngModel)]=\"lead.select\">\n            <label for=\"check{{i}}\" *ngIf=\"lead.converted == 0\"></label>\n          </div>\n          <div class=\"value-item md-item\">\n            <span>{{lead.mobile}}</span>\n          </div>\n          <div class=\"value-item lg-item\">\n            <span *ngIf=\"lead.name.length == 0\">-</span>\n            <span *ngIf=\"lead.name.length != 0\"\n              title=\"{{lead.name}}\">{{ (lead.name.length > 15) ? (lead.name | slice:0:15) + '...' : lead.name }}</span>\n          </div>\n          <div class=\"value-item lg-item\">\n            <span *ngIf=\"lead.email.length == 0\">-</span>\n            <span *ngIf=\"lead.email.length != 0\"\n              title=\"{{lead.email}}\">{{ (lead.email.length > 15) ? (lead.email | slice:0:15) + '...' : lead.email }}</span>\n          </div>\n          <div class=\"value-item lg-item\">\n            <span *ngIf=\"lead.city.length == 0\">-</span>\n            <span *ngIf=\"lead.city.length != 0\">{{lead.city}}</span>\n          </div>\n          <div class=\"value-item lg-item\">\n            <span *ngIf=\"lead.address.length == 0\">-</span>\n            <span *ngIf=\"lead.address.length != 0\"\n              title=\"{{lead.address}}\">{{ (lead.address.length > 15) ? (lead.address | slice:0:15) + '...' : lead.address }}</span>\n          </div>\n          <div class=\"value-item sm-item align-center\">\n            <span *ngIf=\"lead.gender.length == 0\">-</span>\n            <span *ngIf=\"lead.gender.length != 0\">{{lead.gender}}</span>\n          </div>\n          <div class=\"value-item lg-item align-center\">\n            <span *ngIf=\"lead.referred_name.length == 0\">-</span>\n            <span *ngIf=\"lead.referred_name.length != 0\">{{lead.referred_name}}</span>\n          </div>\n          <div class=\"value-item lg-item align-center\">\n            <span *ngIf=\"lead.source_name.length == 0\">-</span>\n            <span *ngIf=\"lead.source_name.length != 0\">{{lead.source_name}}</span>\n          </div>\n          <div class=\"value-item lg-item align-center\">\n            <div *ngIf=\"lead.converted == 0\">\n              <i class=\"fa fa-pencil edit-lead\" title=\"Edit Lead\" *ngIf=\"lead.converted == 0\" data-toggle=\"modal\"\n                data-target=\"#editLead\" aria-hidden=\"true\" (click)=\"editLeadRow(lead)\"></i>\n              <i class=\"fa fa-trash delete-lead\" title=\"Delete Lead\" *ngIf=\"lead.converted == 0\" aria-hidden=\"true\"\n                (click)=\"deleteLead(lead)\"></i>\n            </div>\n            <div *ngIf=\"lead.converted != 0\">\n              <span>-</span>\n            </div>\n          </div>\n        </div>\n        <div class=\"no-records\" *ngIf=\"leadsList?.length == 0\">\n          <span>No Records Found</span>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <section>\n    <div class=\"campaign-footer-section\">\n      <div class=\"pagination-container\">\n        <div class=\"row filter-res pagination\" #pager id=\"pager\" style=\"width: 100%;\">\n          <div class=\"c-lg-12 c-md-12 c-sm-12 align-right\">\n            <pagination (goPage)=\"fectchTableDataByPage($event)\" (goNext)=\"fetchNext()\" (goPrev)=\"fetchPrevious()\"\n              [pagesToShow]=\"5\" [page]=\"pageIndex\" [perPage]=\"displayBatchSize\"\n              (sizeChange)=\"updateTableBatchSize($event)\" [count]=\"totalCount\">\n            </pagination>\n          </div>\n        </div>\n      </div>\n      <div class=\"campaign-action-btn-container\">\n        <div class=\"action-btn-item\">\n          <button type=\"button\" name=\"button\" class=\"action-btn\" (click)=\"showPromoSMS()\">Send Promotional SMS</button>\n        </div>\n        <div class=\"action-btn-item\">\n          <button type=\"button\" name=\"button\" class=\"action-btn\" (click)=\"convertToEnq()\">Convert to Enquiry</button>\n        </div>\n        <div class=\"action-btn-item\" style=\"margin-right: 10px;\">\n          <button type=\"button\" name=\"button\" class=\"action-btn\" (click)=\"deleteMultipleLeads()\">Delete Leads</button>\n        </div>\n      </div>\n    </div>\n\n  </section>\n\n</section>");

/***/ }),

/***/ "./src/app/components/leads/data-setup/data-setup.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/leads/data-setup/data-setup.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* ===============================header colors=======================*/\n.table-format-first .table-responsive table th,\n.table-format-first .table-responsive table td {\n  text-align: center;\n  padding: 10px 5px;\n}\n.table-format-first .table-responsive table th {\n  text-transform: capitalize;\n  font-size: 14px;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper {\n  display: inline-block;\n  overflow: initial;\n  margin-left: 0;\n  width: auto;\n  position: relative;\n  background: transparent;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox {\n  z-index: 2;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label {\n  font-size: 16px;\n  margin-left: 7px;\n  font-weight: 600;\n  vertical-align: middle;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:after, .table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:before {\n  z-index: 1;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper:after {\n  content: '';\n  width: 20px;\n  height: 20px;\n  background: #fff;\n  left: 0;\n  top: 0;\n  position: absolute;\n}\n.table-format-first .table-responsive table tbody tr td .fa-trash-o {\n  color: #f44336;\n  font-size: 20px;\n}\n.table-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-top: 10px;\n}\n.table-container .heading-container {\n  background: #e0eaec;\n  display: flex;\n  flex-direction: row;\n  font-size: 14px;\n  font-weight: 600;\n  text-align: left;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n}\n.table-container .heading-container .heading-item {\n  width: 10%;\n  text-align: center;\n}\n.table-container .value-outer-container {\n  display: flex;\n  flex-direction: column;\n  min-height: 53vh;\n  max-height: 54vh;\n  overflow-x: hidden;\n  overflow-y: auto;\n  border: 1px solid #ccc;\n}\n.table-container .value-outer-container .value-container {\n  display: flex;\n  flex-direction: row;\n  text-align: left;\n  padding: 4px;\n  font-size: 12px;\n  border-bottom: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n  border-top: none;\n}\n.table-container .value-outer-container .value-container .value-item {\n  width: 10%;\n  text-align: center;\n}\n.middle-section {\n  padding: 1%;\n}\n.filter-item-2 {\n  width: 20%;\n  display: flex;\n  justify-content: flex-end;\n}\n.filter-item-2 .add-class-btn {\n  border: 1px solid #3a66fa;\n  border-radius: 4px;\n  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);\n  padding: 4px 10px;\n  background: white;\n  color: #1283f4;\n  font-weight: 600;\n  height: 30px;\n  margin-top: 15px;\n}\n.btn {\n  background: #0084f6;\n  color: white;\n}\n.horizontal-menu {\n  display: flex;\n  flex-direction: row;\n}\n.horizontal-menu .horizontal-menu-item {\n  display: inline-block;\n  margin: 0 16px;\n  font-weight: bold;\n  position: relative;\n  bottom: -1px;\n}\n.horizontal-menu .horizontal-menu-item span {\n  color: #528ff0;\n  border-bottom: 3px solid #528ff0;\n  padding-bottom: 10px;\n  cursor: pointer;\n}\nth {\n  background-color: #e0eaec;\n  color: black;\n}\ntr {\n  border-radius: 12px;\n  border-left: 5px solid #e0eaec;\n  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);\n  margin-bottom: 5px;\n  margin-top: 5px;\n}\n.tableBodyScroll tbody {\n  display: block;\n  overflow-y: auto;\n  background: #ffffff;\n}\n.tableBodyScroll thead,\ntbody tr {\n  display: table;\n  table-layout: fixed;\n}\n.create-standard-field {\n  margin-bottom: 10px;\n  background-color: #f4f5f7;\n  height: auto;\n  margin-left: 10px;\n  width: 99%;\n  border-radius: 34px;\n  padding-bottom: 15px;\n}\n.attendance-container {\n  padding: 1%;\n}\n.add-edit {\n  text-align: right;\n}\n.skeleton {\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 12px;\n  background: #efefef;\n  border-radius: 2px;\n}\n.skeleton::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(90deg, #efefef, white, #efefef);\n  -webkit-animation: progress 1s ease-in-out infinite;\n          animation: progress 1s ease-in-out infinite;\n}\n.main-course {\n  text-align: left;\n}\ntable thead tr th {\n  padding-bottom: 10px;\n  padding-top: 10px;\n  text-align: left;\n  background: #e0eaec;\n  font-weight: 600;\n  font-size: 14px;\n}\ntable tbody {\n  font-size: 12px;\n}\ntable tbody td .col-new {\n  text-align: center;\n}\ntable tbody tr td {\n  padding-bottom: 10px;\n  padding-top: 10px;\n  text-align: left;\n}\ntable tbody tr td .edit {\n  cursor: pointer;\n}\ntable tbody tr td .anchorTag {\n  margin-left: 10px;\n}\ntable tbody tr td .editOptions li {\n  display: inline-block;\n}\ntable tbody .displayComp .edit-comp {\n  display: none;\n}\ntable tbody .editComp .view-comp {\n  display: none;\n}\n.anchorTagCursor {\n  cursor: pointer;\n}\n.pointer-way:hover {\n  cursor: pointer;\n}\n.table-scroll {\n  overflow: hidden;\n  overflow-y: auto;\n}\n.table-scroll .dummy-scroll {\n  height: 100%;\n  overflow-y: auto;\n}\n* {\n  margin: 0px;\n}\nbody {\n  font-family: \"Open Sans\", sans-serif;\n}\nheader {\n  height: 60px;\n  position: fixed;\n  right: 0%;\n  width: calc(100% - 161px);\n  background-color: #fff;\n  border-bottom: 1px solid #9ba4ab;\n  background-color: #fff;\n  z-index: 1;\n  /*box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2), 0 4px 16px 0 rgba(0, 0, 0, 0.19);*/\n}\n.breadcrumb-item + .breadcrumb-item::before {\n  content: \">\";\n  color: #6c757d;\n}\n.breadcrumb {\n  background-color: #fff;\n  margin-bottom: 0px;\n}\n.breadcrumb-item > a {\n  color: #334d6e;\n  font-weight: 600;\n  font-size: 16px;\n}\nul {\n  list-style-type: none;\n  padding: 0;\n}\n/*main*/\n/*swiching tabs*/\n.w98 {\n  width: 100%;\n  margin: 0px auto;\n}\n.nav-item .nav-link {\n  font-weight: 600;\n  color: #405877;\n  padding-bottom: 8px;\n  cursor: pointer;\n  font-size: 13px;\n  width: auto;\n  float: left;\n  background: none;\n}\n.nav-item .active {\n  border-bottom: 3px solid #109cf1 !important;\n  color: #109cf1 !important;\n}\n.nav-link {\n  display: block;\n  padding: 1.5rem 0rem;\n  margin: -1rem 3.5rem;\n  margin-left: 0rem;\n}\n.flex {\n  display: flex;\n}\n.w15 {\n  width: 15%;\n  background-color: #dfe5f0;\n  padding: 10px;\n}\n.add_master_tag {\n  background-color: #109cf1;\n  color: white;\n  padding: 10px 20px;\n  font-size: 12px;\n  border: none;\n  border-radius: 5px;\n  margin-top: 15px;\n  margin-left: 10px;\n  font-weight: 600;\n}\n.add_master_tag2 {\n  background-color: #109cf1;\n  color: white;\n  padding: 10px 20px;\n  font-size: 12px;\n  border: none;\n  border-radius: 5px;\n  margin-top: 15px;\n  margin-left: 87%;\n  font-weight: 600;\n}\nselect {\n  padding: 10px 20px;\n  margin: 8px 0;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-size: 10px;\n  font-weight: 500;\n  background-color: #f5f6f8;\n}\n.input {\n  margin-top: 15px;\n  margin-left: 10px;\n  padding: 10px 20px;\n  font-size: 12px;\n  padding: 10px 20px;\n  margin: 8px 0;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-size: 10px;\n  font-weight: 500;\n  /*background-color: #f5f6f8;\n  */\n}\n.magnifying-glass {\n  background-image: url('Vector-n.png');\n  background-repeat: no-repeat;\n  background-position: left center;\n}\n.main-shadow {\n  box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.2);\n  -webkit-box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.2);\n  -moz-box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.2);\n  padding-bottom: 15px;\n}\n.p-15 {\n  padding-bottom: 15px;\n}\nselect {\n  width: 250px;\n  color: #b6b8bb;\n}\n.w85 {\n  width: 85%;\n}\n.w90 {\n  width: 90%;\n  margin: 0px auto;\n}\n.right {\n  float: right;\n}\n.section::before {\n  height: 0.4em;\n  display: table-row;\n  content: \"\";\n}\n/*closing reason*/\n.textarea {\n  height: 80px;\n}\n.reason-input {\n  padding: 10px 20px;\n  font-size: 11px;\n  margin: 8px 0;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-weight: 600;\n  width: 500px;\n  color: #4a627f;\n  height: 38px;\n}\n.textarea::-moz-placeholder {\n  font-size: 12px;\n  color: #334d6e;\n}\n.textarea:-ms-input-placeholder {\n  font-size: 12px;\n  color: #334d6e;\n}\n.textarea::placeholder {\n  font-size: 12px;\n  color: #334d6e;\n}\n/*Fee Types*/\n.boundry {\n  border: 1px solid #d4d0d0;\n  border-radius: 5px;\n  padding: 15px 0px;\n  margin: 0px 15px;\n  text-indent: 10px;\n  color: #323c47;\n}\n.center {\n  text-indent: 0px;\n  text-align: center;\n}\n.table_heading {\n  color: #787a7d;\n  font-size: 10px;\n  font-weight: 500;\n  margin: 0px 15px;\n}\n/*city_area*/\n.w96 {\n  width: 99%;\n  margin-top: -20px;\n}\n.p-10 {\n  padding-top: 10px;\n}\n.p-30 {\n  padding-top: 30px;\n}\n.p-10-0 {\n  padding: 9px 0px;\n}\n.yes {\n  background-color: #ccffac;\n  color: #323c47;\n  padding: 5px 20px;\n  border-radius: 6px;\n}\n.no {\n  background-color: #ffcf88;\n  color: #323c47;\n  padding: 5px 20px;\n  border-radius: 6px;\n}\n.search {\n  background-color: #109cf1;\n  color: white;\n  padding: 10px 20px;\n  font-size: 12px;\n  border: none;\n  border-radius: 5px;\n  margin-top: 15px;\n  margin-left: 10px;\n  font-weight: 600;\n}\n.area-select {\n  font-size: 12px;\n  color: #787a7d;\n}\n.input-width {\n  width: 180px;\n}\n.pl-10 {\n  padding-left: 10px;\n}\n.pr-40 {\n  padding-right: 0px;\n}\n.tableContainer .section {\n  min-height: 55vh;\n  max-height: 55vh;\n  overflow-y: auto;\n}\n.tableContainer .tableHeader {\n  display: flex;\n  flex-direction: row;\n  background-color: #dfe5f0;\n  font-weight: 600;\n  font-size: 12px;\n  border-radius: 5px;\n  height: 40px;\n}\n.tableContainer .tableBody {\n  display: flex;\n  height: 40px;\n  margin-bottom: 5px;\n}\n.tableContainer .tableData {\n  padding: 10px 15px;\n  font-size: 12px;\n}\n.tableContainer .updateAction {\n  cursor: pointer;\n  margin-right: 15px;\n  float: right;\n  color: #0084f6;\n  font-size: 12px;\n  font-weight: 600;\n}\n.tableContainer .small {\n  width: 15%;\n}\n.tableContainer .medium {\n  width: 20%;\n}\n.tableContainer .large {\n  width: 30%;\n}\n.tableContainer .align-center {\n  text-align: center;\n}\n.tableContainer .no-records {\n  display: block;\n  text-align: center;\n  padding: 10px;\n  font-size: 14px;\n  font-weight: 600;\n}\n.filter-item {\n  width: 170px;\n  float: left;\n  margin: 0px 1%;\n}\n.filter-item .form-ctrl {\n  width: 100%;\n  padding: .375rem .75rem;\n  font-size: 12px;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  border-radius: .25rem;\n  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;\n}\n.filter-item select {\n  color: #787A7D;\n}\n.modal {\n  left: 30%;\n  top: 15%;\n}\n.edit-container {\n  display: flex;\n  flex-direction: column;\n  width: 80%;\n  margin-right: 20%;\n}\n.edit-container .edit-item {\n  width: 80%;\n  margin-bottom: 10px;\n  display: flex;\n  flex-direction: row;\n}\n.edit-container .edit-item .edit-title {\n  font-size: 14px;\n  font-weight: 600;\n  margin-right: 10px;\n  width: 30%;\n  color: gray;\n}\n.edit-container .edit-item input {\n  border: 1px solid #ccc;\n  width: 70%;\n}\n.alert-title-container {\n  display: flex;\n  flex-direction: row;\n}\n.alert-title-container .fa-exclamation-circle {\n  margin-top: 1px;\n  margin-right: 5px;\n  font-size: 16px;\n}\n.msg-container {\n  text-align: left;\n  font-weight: 600;\n}\n.msg-container span {\n  font-size: 14px;\n}\n.delete-btn {\n  background: #d9534f;\n  border-radius: 4px;\n  box-shadow: none;\n  color: white;\n}\n.input-select {\n  padding: 9px 20px !important;\n  margin: 8px 0 !important;\n  border: 1px solid #ccc !important;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-size: 12px !important;\n  font-weight: 500;\n  color: #787A7D !important;\n  background-color: #fff !important;\n}\n.custom-popus .btn2 {\n  background: white;\n  color: #0084f6;\n}\n.custom-popus .createcomponent-wrapper {\n  padding: 10px 5px;\n  background: #efefef;\n  border: 1px solid #d8d8d8;\n  height: 100%;\n  width: 100%;\n}\n.custom-popus .createcomponent-wrapper .form-ctrl {\n  background: transparent;\n  border-bottom: solid 1px #cccccc !important;\n}\n.custom-popus .createcomponent-wrapper .field-wrapper .form-ctrl {\n  display: block;\n  width: 100%;\n  box-sizing: border-box;\n  padding: 10px 0 5px;\n  outline: none;\n  border: 0;\n  height: 36px;\n  box-shadow: none;\n  border-radius: 0;\n  line-height: 24px;\n}\n.custom-popus .updatecomponent-wrapper {\n  padding: 10px 5px;\n  background: #efefef;\n  border-radius: 5px;\n  border: 1px solid #d8d8d8;\n  height: 100%;\n  width: 100%;\n  max-height: 400px;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.custom-popus .updatecomponent-wrapper ::-webkit-scrollbar {\n  display: block;\n  width: 7px;\n  height: 7px;\n}\n.custom-popus .updatecomponent-wrapper .form-ctrl {\n  background: transparent;\n  border-bottom: solid 1px #cccccc !important;\n}\n.custom-popus .updatecomponent-wrapper .field-wrapper .form-ctrl {\n  display: block;\n  width: 100%;\n  box-sizing: border-box;\n  padding: 10px 0 5px;\n  outline: none;\n  height: 36px;\n  box-shadow: none;\n  line-height: 24px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  margin-top: 2px;\n}\n.custom-popus .closePopup {\n  right: 10px;\n  top: 10px;\n  font-size: 18px;\n  cursor: pointer;\n  line-height: 20px;\n  width: 26px;\n  height: 26px;\n  box-sizing: border-box;\n  text-align: center;\n  padding-top: 3px;\n  display: none;\n}\n.custom-popus .closePopup.bottomRight {\n  bottom: 2px;\n  top: auto;\n  left: auto;\n  right: 0;\n}\n.custom-popus .closePopup.topLeft {\n  left: 0;\n  right: auto;\n  top: 1px;\n  bottom: auto;\n}\n.custom-popus .closePopup.bottomLeft {\n  left: 0;\n  right: auto;\n  bottom: 2px;\n  top: auto;\n}\n.custom-popus .closePopup svg {\n  width: 16px;\n}\n.custom-popus .closePopup svg .cls-1 {\n  stroke: #c1c1c1;\n  stroke-width: 2px;\n}\n.custom-popus .closePopup:hover .cls-1 {\n  stroke: #0084f6;\n}\n.custTable .tableData {\n  width: 10%;\n}\n.settingDiv {\n  margin: 0px;\n}\nbody {\n  font-family: 'Open Sans', sans-serif;\n}\n.flex {\n  display: flex;\n  flex-wrap: wrap;\n}\n.blue_button {\n  background-color: #109CF1;\n  color: white;\n  padding: 9px 20px;\n  font-size: 12px;\n  border: none;\n  border-radius: 5px;\n  font-weight: 500;\n  cursor: pointer;\n}\n.white_button {\n  background-color: #fff;\n  color: #109CF1;\n  padding: 8px 19px;\n  font-size: 12px;\n  border: 1px solid #109CF1;\n  border-radius: 5px;\n  font-weight: 500;\n  cursor: pointer;\n}\n.select {\n  padding: 7px 20px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-size: 13px;\n  font-weight: 500;\n  color: #787A7D;\n}\ninput:focus, select:focus, button:focus {\n  outline: none;\n}\n.w98 {\n  width: 98%;\n  margin: 0px auto;\n}\n.w981 {\n  margin-left: 1%;\n}\n.main_div {\n  display: flex;\n  margin-top: 10px;\n}\n.main_div > div:first-child {\n  width: 15%;\n  background: #F3F4F6;\n  border: 1px solid #DCDCDC;\n  box-sizing: border-box;\n  height: 89vh;\n  position: fixed;\n}\n.settings {\n  padding: 20px 10px;\n  border-bottom: 1px solid #000;\n  font-weight: bold;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n  letter-spacing: 0.01em;\n  color: #1A2334;\n}\n.menu {\n  margin-top: 20px;\n}\n.menu li {\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 18px;\n  letter-spacing: 0.01em;\n  padding: 20px 0px;\n  padding-left: 10px;\n  color: #1A2334;\n  cursor: pointer;\n}\n.menu li.selected {\n  background: #FFFFFF;\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);\n  letter-spacing: 0.01em;\n  color: #0097F9;\n}\n.display {\n  display: flex;\n  justify-content: space-between;\n}\n.bottom {\n  padding: 1%;\n  position: fixed;\n  bottom: 0;\n  background: #fff;\n  width: calc(100% - 15%);\n  border-top: 1px solid #EAEAEA;\n  box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.25);\n}\n.mr10 {\n  margin-right: 10px;\n}\n.main_div > div:last-child {\n  width: 80%;\n  margin-left: 20%;\n  /*overflow-y: scroll;*/\n  padding-right: 1%;\n  margin-bottom: 70px;\n}\n.ellipse {\n  background: #F0EFEF;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);\n  width: 19px;\n  height: 19px;\n  padding: 0px 7px;\n  border-radius: 50%;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 16px;\n  /* identical to box height, or 100% */\n  letter-spacing: 0.01em;\n  color: #0097F9;\n}\n.blue_line {\n  border-top: 1px solid #0097F9;\n  width: 22px;\n  display: inline-block;\n  margin: 0px 7px;\n  position: relative;\n  top: -4px;\n}\n.blue_settings {\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 22px;\n  /* identical to box height */\n  letter-spacing: 0.01em;\n  color: #0097F9;\n}\n.bold_settings {\n  font-weight: bold;\n  font-size: 13px;\n  line-height: 18px;\n  margin-bottom: 8px;\n  /* identical to box height */\n  letter-spacing: 0.01em;\n  color: #323C47;\n}\n.black_settings {\n  font-weight: normal;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n  margin-bottom: 16px;\n  letter-spacing: 0.01em;\n  color: #323C47;\n}\n.black_settings1 {\n  font-weight: normal;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n  margin-bottom: 16px;\n  letter-spacing: 0.01em;\n  color: #323C47;\n}\n.flex1 {\n  display: flex;\n  margin-top: 10px;\n}\n.sep_line {\n  margin-left: 65px;\n  border-bottom: 1px solid  #C4C4C4;\n  margin-bottom: 16px;\n}\n.toggle.s_toggle {\n  padding-top: 16px;\n}\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 35px;\n  height: 12px;\n}\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  /* background-color: #ccc;*/\n  -webkit-transition: .4s;\n  border: 1px solid #BDBABA;\n  box-sizing: border-box;\n  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1));\n  transition: .4s;\n}\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 18px;\n  width: 18px;\n  left: -6px;\n  bottom: -4px;\n  background-color: #BDBABA;\n  transition: .4s;\n}\ninput:checked + .slider {\n  /*background-color: #2196F3;*/\n}\ninput:focus + .slider {\n  /*box-shadow: 0 0 1px #2196F3;*/\n}\ninput:checked + .slider:before {\n  transform: translateX(26px);\n  background-color: #19C83F;\n}\ninput:checked + .slider {\n  border: 1px solid #BDBABA;\n}\n.slider.round {\n  border-radius: 34px;\n}\n.slider.round:before {\n  border-radius: 50%;\n}\n.toggle {\n  display: flex;\n  margin-left: auto;\n  padding-right: 50px;\n  padding-top: 30px;\n}\n.off {\n  font-weight: 300;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n  letter-spacing: 0.01em;\n  color: #000000;\n  position: relative;\n  top: -6px;\n  margin: 0px 10px;\n}\n.on {\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n  margin: 0px 10px;\n  letter-spacing: 0.01em;\n  position: relative;\n  top: -6px;\n  color: #19C83F;\n}\n.hidden {\n  visibility: hidden;\n}\n.settings_label {\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n  margin-right: 40px;\n  letter-spacing: 0.01em;\n  color: #000000;\n  margin-left: -10px;\n}\n.checkbox {\n  display: grid;\n  grid-template-columns: -webkit-min-content auto;\n  grid-template-columns: min-content auto;\n  grid-gap: 0.5em;\n  font-size: 2rem;\n  color: var(--color);\n  cursor: pointer;\n  margin-bottom: 16px;\n}\n.checkbox__input input {\n  opacity: 0;\n  width: 0em;\n  height: 0em;\n}\n.checkbox__control {\n  display: inline-grid;\n  width: 0.5em;\n  height: 0.5em;\n  border-radius: 0.1em;\n  border: 1px solid #BBB2B2;\n}\n.checkbox__input {\n  display: grid;\n  grid-template-areas: \"checkbox\";\n}\n.checkbox__control svg {\n  color: #fff;\n  background: #109CF1;\n  transition: transform 0.1s ease-in 25ms;\n  transform: scale(0);\n  stroke-width: 4;\n  padding: 2px;\n  width: 0.5em;\n  height: 0.5em;\n  border: none;\n  border-radius: 3px;\n  transform-origin: bottom left;\n}\n.checkbox__input input:checked\n+ .checkbox__control svg {\n  transform: scale(1);\n}\n.checkbox__input input:checked\n+ .checkbox__control {\n  border: none;\n}\n.flex1 > div:nth-child(2) {\n  width: 60%;\n}\n.input {\n  box-sizing: border-box;\n  background: #F5F5F5;\n  border-radius: 2px;\n  width: 336px;\n  height: 35px;\n  margin-bottom: 16px;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 16px;\n  letter-spacing: 0.01em;\n  border: none;\n  outline: none;\n  text-indent: 10px;\n  color: #323C47;\n}\n.input::-moz-placeholder {\n  color: #8e939a;\n}\n.input:-ms-input-placeholder {\n  color: #8e939a;\n}\n.input::placeholder, option[disabled] {\n  color: #8e939a;\n}\n.flex1 > div:first-child {\n  width: 65px;\n}\n.position[_ngcontent-wtt-c180] {\n  position: relative;\n  top: -7px;\n  margin-left: 10px;\n}\n/*extra*/\n.scrool1 {\n  overflow-y: scroll;\n  height: calc(100vh - 218px);\n}\n.no-pointer-class {\n  cursor: not-allowed;\n  pointer-events: none;\n}\n.no-pointer-class {\n  cursor: not-allowed;\n  pointer-events: none;\n}\n.has-value label {\n  transform: translateY(-5px);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY3NzL2NvbW1vbi92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9sZWFkcy9kYXRhLXNldHVwL2RhdGEtc2V0dXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWUEsdUVBQUE7QUFXQTs7RUFLZ0Isa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQ3hCakM7QURrQkE7RUFTZ0IsMEJBQTBCO0VBQzFCLGVBQWU7QUN2Qi9CO0FEYUE7RUFnQjRCLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsdUJBQXVCO0FDekJuRDtBRElBO0VBdUJnQyxVQUFVO0FDdkIxQztBREFBO0VBMEJnQyxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixzQkFBc0I7QUN0QnREO0FEUEE7RUFnQ29DLFVBQVU7QUNyQjlDO0FEWEE7RUFvQ2dDLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixPQUFPO0VBQ1AsTUFBTTtFQUNOLGtCQUFrQjtBQ3JCbEQ7QURyQkE7RUE4QzRCLGNBbERiO0VBbURhLGVBQWU7QUNyQjNDO0FEOEJBO0VBQ0ksYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsZ0JBQWdCO0FDM0JwQjtBRHVCQTtFQU1NLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLHlCQUF5QjtBQ3pCL0I7QURVQTtFQWlCUSxVQUFVO0VBQ1Ysa0JBQWtCO0FDdkIxQjtBREtBO0VBc0JNLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtBQ3ZCNUI7QURMQTtFQThCUSxhQUFh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QUNuQixvQkFBbUI7QUFnTHZCO0FBOUtBO0VBRU0sMkJBQTJCO0FBZ0xqQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGVhZHMvZGF0YS1zZXR1cC9kYXRhLXNldHVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHB1bGwtTDogbGVmdDtcbiRwdWxsLVI6IHJpZ2h0O1xuJHB1bGwtbm9uZTogbm9uZTtcbiRmdWxsLXdpZHRoOiAxMDAlO1xuJGJvcmRlci1ib3g6IGJvcmRlci1ib3g7XG4kYm9yZGVyLWNvbG9yOiAjZGVlYWVlO1xuJGJnLXdoaXRlOiAjZmZmO1xuJGVycm9yLWNvbG9yOiAjZmYwMDAwO1xuJGNvbW1vbi1ibHVlOiAjMDA4NGY2O1xuJHByaW1hcnktY29sb3I6ICMzMzM7XG4kYm9yZGVyLWNvbW1vbjojZWFlYWViO1xuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09aGVhZGVyIGNvbG9ycz09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuJGhlYWRlci1iZzojMDA2MEEzO1xuJGhlYWRlci1ib3JkZXI6I2VhZWFlYjtcbiRsZWZ0TWVudUJnOiNmYWZhZmE7XG4kbGVmdE1lbnVIb3ZlckJnOiMwMDg0ZjY7XG4kbGVmdE1lbnVUZXh0SG92ZXJDb2xvcjojZmZmO1xuJHJlZEJ0bjojZjQ0MzM2O1xuJGJvcmRlcmNjYzojY2NjO1xuJGxpZ2h0Qmx1ZTojZWZmN2ZmO1xuJHRhYmxlSGVhZGluZ0JnQ29sb3I6ICMwMDRhN2U7XG4udGFibGUtZm9ybWF0LWZpcnN0IHtcbiAgICAudGFibGUtcmVzcG9uc2l2ZSB7XG4gICAgICAgIHRhYmxlIHtcbiAgICAgICAgICAgIHRoLFxuICAgICAgICAgICAgdGQge1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoIHtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0Ym9keSB7XG4gICAgICAgICAgICAgICAgdHIge1xuICAgICAgICAgICAgICAgICAgICB0ZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuZmllbGQtY2hlY2tib3gtd3JhcHBlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBpbml0aWFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZm9ybS1jaGVja2JveCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mb3JtLWNoZWNrYm94K2xhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogN3B4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmFmdGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLmZhLXRyYXNoLW8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkcmVkQnRuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnRhYmxlLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgLmhlYWRpbmctY29udGFpbmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICNlMGVhZWM7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgICAuaGVhZGluZy1pdGVtIHtcbiAgICAgICAgd2lkdGg6IDEwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgIH1cbiAgICAudmFsdWUtb3V0ZXItY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgbWluLWhlaWdodDogNTN2aDtcbiAgICAgIG1heC1oZWlnaHQ6IDU0dmg7XG4gICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgIC52YWx1ZS1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgICAgICBib3JkZXItdG9wOiBub25lO1xuICAgICAgICAudmFsdWUtaXRlbSB7XG4gICAgICAgICAgd2lkdGg6IDEwJTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0iLCJAaW1wb3J0IFwiLi9zcmMvYXNzZXRzL2Nzcy9jb21tb24vdmFyaWFibGVzLnNjc3NcIjtcblxuLm1pZGRsZS1zZWN0aW9uIHtcbiAgICBwYWRkaW5nOiAxJTtcbn1cblxuLmZpbHRlci1pdGVtLTIge1xuICAgIHdpZHRoOiAyMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIC5hZGQtY2xhc3MtYnRuIHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzNhNjZmYTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgICAgICAgcGFkZGluZzogNHB4IDEwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICBjb2xvcjogIzEyODNmNDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIH1cbn1cbi5idG4ge1xuICAgIGJhY2tncm91bmQ6ICMwMDg0ZjY7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuLmhvcml6b250YWwtbWVudSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIC5ob3Jpem9udGFsLW1lbnUtaXRlbSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgbWFyZ2luOiAwIDE2cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGJvdHRvbTogLTFweDtcbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBjb2xvcjogIzUyOGZmMDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjNTI4ZmYwO1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICB9XG59XG50aCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZWFlYztcbiAgICBjb2xvcjogYmxhY2s7XG59XG50ciB7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNlMGVhZWM7XG4gICAgYm94LXNoYWRvdzogMCAzcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xufVxuLnRhYmxlQm9keVNjcm9sbCB0Ym9keSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgLy8gbWF4LWhlaWdodDogNzB2aDtcbiAgICAvLyBtaW4taGVpZ2h0OiA3MHZoO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAvLyBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgLy8gYm9yZGVyLXJhZGl1czogMXB4IHNvbGlkIHJnYmEoMjExLCAyMTIsIDIxMywgMC41KTtcbn1cbi50YWJsZUJvZHlTY3JvbGwgdGhlYWQsXG50Ym9keSB0ciB7XG4gICAgZGlzcGxheTogdGFibGU7XG5cbiAgICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xufVxuXG4vLyBjbG9zaW5nIHJlYXNvbiBDU1NcblxuLmNyZWF0ZS1zdGFuZGFyZC1maWVsZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNWY3O1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICB3aWR0aDogOTklO1xuICAgIGJvcmRlci1yYWRpdXM6IDM0cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgI2UwZWFlYztcbn1cblxuLmF0dGVuZGFuY2UtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAxJTtcbn1cbi5hZGQtZWRpdCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4kY29sb3ItYmFzZTogI2VmZWZlZjtcbiRjb2xvci1iYXNlOiAjZWZlZmVmO1xuJGNvbG9yLWhpZ2hsaWdodDogbGlnaHRlbigkY29sb3ItYmFzZSwgNyUpO1xuLnNrZWxldG9uIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEycHg7XG4gICAgYmFja2dyb3VuZDogJGNvbG9yLWJhc2U7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICY6OmFmdGVyIHtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgJGNvbG9yLWJhc2UsICRjb2xvci1oaWdobGlnaHQsICRjb2xvci1iYXNlKTtcbiAgICAgICAgYW5pbWF0aW9uOiBwcm9ncmVzcyAxcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbiAgICB9XG59XG5cbi5tYWluLWNvdXJzZSB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxudGFibGUge1xuICAgIHRoZWFkIHtcbiAgICAgICAgdHIge1xuICAgICAgICAgICAgdGgge1xuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2UwZWFlYztcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICB0Ym9keSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgdGQge1xuICAgICAgICAgICAgLmNvbC1uZXcge1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0ciB7XG4gICAgICAgICAgICB0ZCB7XG4gICAgICAgICAgICAgICAgLmVkaXQge1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5hbmNob3JUYWcge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICAuZWRpdE9wdGlvbnMgbGkge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5kaXNwbGF5Q29tcCB7XG4gICAgICAgICAgICAuZWRpdC1jb21wIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5lZGl0Q29tcCB7XG4gICAgICAgICAgICAudmlldy1jb21wIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uYW5jaG9yVGFnQ3Vyc29yIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wb2ludGVyLXdheTpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGFibGUtc2Nyb2xsIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgLmR1bW15LXNjcm9sbCB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICB9XG59XG5cbioge1xuICAgIG1hcmdpbjogMHB4O1xufVxuYm9keSB7XG4gICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG59XG5oZWFkZXIge1xuICAgIGhlaWdodDogNjBweDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgcmlnaHQ6IDAlO1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxNjFweCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzliYTRhYjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHotaW5kZXg6IDE7XG4gICAgLypib3gtc2hhZG93OiAwIDFweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNHB4IDE2cHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpOyovXG59XG4uYnJlYWRjcnVtYi1pdGVtICsgLmJyZWFkY3J1bWItaXRlbTo6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIj5cIjtcbiAgICBjb2xvcjogIzZjNzU3ZDtcbn1cbi5icmVhZGNydW1iIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbn1cbi5icmVhZGNydW1iLWl0ZW0gPiBhIHtcbiAgICBjb2xvcjogIzMzNGQ2ZTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cblxudWwge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBwYWRkaW5nOiAwO1xufVxuLyptYWluKi9cblxuLypzd2ljaGluZyB0YWJzKi9cbi53OTgge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMHB4IGF1dG87XG59XG4ubmF2LWl0ZW0ge1xuICAgIC5uYXYtbGluayB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGNvbG9yOiAjNDA1ODc3O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIH1cbn1cblxuLm5hdi1pdGVtIHtcbiAgICAuYWN0aXZlIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICMxMDljZjEgIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6ICMxMDljZjEgIWltcG9ydGFudDtcbiAgICB9XG59XG4ubmF2LWxpbmsge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IDEuNXJlbSAwcmVtO1xuICAgIG1hcmdpbjogLTFyZW0gMy41cmVtO1xuICAgIG1hcmdpbi1sZWZ0OiAwcmVtO1xufVxuLmZsZXgge1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG4udzE1IHtcbiAgICB3aWR0aDogMTUlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZmU1ZjA7XG4gICAgcGFkZGluZzogMTBweDtcbn1cbi5hZGRfbWFzdGVyX3RhZyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEwOWNmMTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5hZGRfbWFzdGVyX3RhZzIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMDljZjE7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiA4NyU7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbnNlbGVjdCB7XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgIG1hcmdpbjogOHB4IDA7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNmY4O1xufVxuLmlucHV0IHtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgIG1hcmdpbjogOHB4IDA7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAvKmJhY2tncm91bmQtY29sb3I6ICNmNWY2Zjg7XG4gICovXG59XG4ubWFnbmlmeWluZy1nbGFzcyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvVmVjdG9yLW4ucG5nKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgY2VudGVyO1xufVxuLm1haW4tc2hhZG93IHtcbiAgICBib3gtc2hhZG93OiAwcHggN3B4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA3cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDdweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59XG4ucC0xNSB7XG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59XG5zZWxlY3Qge1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICBjb2xvcjogI2I2YjhiYjtcbn1cblxuLnc4NSB7XG4gICAgd2lkdGg6IDg1JTtcbn1cbi53OTAge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luOiAwcHggYXV0bztcbn1cbi5yaWdodCB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuLnNlY3Rpb246OmJlZm9yZSB7XG4gICAgaGVpZ2h0OiAwLjRlbTtcbiAgICBkaXNwbGF5OiB0YWJsZS1yb3c7XG4gICAgY29udGVudDogXCJcIjtcbn1cbi8qY2xvc2luZyByZWFzb24qL1xuLnRleHRhcmVhIHtcbiAgICBoZWlnaHQ6IDgwcHg7XG59XG4ucmVhc29uLWlucHV0IHtcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIG1hcmdpbjogOHB4IDA7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHdpZHRoOiA1MDBweDtcbiAgICBjb2xvcjogIzRhNjI3ZjtcbiAgICBoZWlnaHQ6IDM4cHg7XG59XG4udGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICMzMzRkNmU7XG59XG4vKkZlZSBUeXBlcyovXG4uYm91bmRyeSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Q0ZDBkMDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZzogMTVweCAwcHg7XG4gICAgbWFyZ2luOiAwcHggMTVweDtcbiAgICB0ZXh0LWluZGVudDogMTBweDtcbiAgICBjb2xvcjogIzMyM2M0Nztcbn1cbi5jZW50ZXIge1xuICAgIHRleHQtaW5kZW50OiAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnRhYmxlX2hlYWRpbmcge1xuICAgIGNvbG9yOiAjNzg3YTdkO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIG1hcmdpbjogMHB4IDE1cHg7XG59XG5cbi8qY2l0eV9hcmVhKi9cbi53OTYge1xuICAgIHdpZHRoOiA5OSU7XG4gICAgLy8gbWFyZ2luOiAwcHggMXJlbTtcbiAgICBtYXJnaW4tdG9wOiAtMjBweDtcbn1cbi5wLTEwIHtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbn1cbi5wLTMwIHtcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcbn1cbi5wLTEwLTAge1xuICAgIHBhZGRpbmc6IDlweCAwcHg7XG59XG4ueWVzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NmZmFjO1xuICAgIGNvbG9yOiAjMzIzYzQ3O1xuICAgIHBhZGRpbmc6IDVweCAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cbi5ubyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmY2Y4ODtcbiAgICBjb2xvcjogIzMyM2M0NztcbiAgICBwYWRkaW5nOiA1cHggMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG4uc2VhcmNoIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTA5Y2YxO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuLmFyZWEtc2VsZWN0IHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICM3ODdhN2Q7XG59XG4uaW5wdXQtd2lkdGgge1xuICAgIHdpZHRoOiAxODBweDtcbn1cbi5wbC0xMCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuLnByLTQwIHtcbiAgICAvL3BhZGRpbmctcmlnaHQ6IDQwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xufVxuLnRhYmxlQ29udGFpbmVyIHtcbiAgICAuc2VjdGlvbiB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDU1dmg7XG4gICAgICAgIG1heC1oZWlnaHQ6IDU1dmg7XG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgfVxuICAgIC50YWJsZUhlYWRlciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkZmU1ZjA7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgfVxuICAgIC50YWJsZUJvZHkge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICB9XG4gICAgLnRhYmxlRGF0YSB7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cbiAgICAudXBkYXRlQWN0aW9uIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgY29sb3I6ICMwMDg0ZjY7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG4gICAgLnNtYWxse1xuICAgICAgICB3aWR0aDogMTUlO1xuICAgICAgfVxuICAgICAgLm1lZGl1bXtcbiAgICAgICAgd2lkdGg6IDIwJTtcbiAgICAgIH1cbiAgICAgIC5sYXJnZXtcbiAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgIH1cbiAgICAgIC5hbGlnbi1jZW50ZXJ7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICAgIC5uby1yZWNvcmRze1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICB9XG59XG4uZmlsdGVyLWl0ZW17XG4gICAgd2lkdGg6IDE3MHB4O1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbjogMHB4IDElO1xuICAgIC5mb3JtLWN0cmx7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiAuMzc1cmVtIC43NXJlbTtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICBjb2xvcjogIzQ5NTA1NztcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xuICAgICAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgLjE1cyBlYXNlLWluLW91dCxib3gtc2hhZG93IC4xNXMgZWFzZS1pbi1vdXQ7XG4gICAgfVxuICAgIHNlbGVjdCB7XG4gICAgICAgIGNvbG9yOiM3ODdBN0Q7XG4gICAgfVxuICB9XG4ubW9kYWwge1xuICAgIGxlZnQ6IDMwJTtcbiAgICB0b3A6IDE1JTtcbn1cbi5lZGl0LWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwJTtcbiAgICAuZWRpdC1pdGVte1xuICAgICAgd2lkdGg6IDgwJTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIC5lZGl0LXRpdGxle1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICB9XG4gICAgICBpbnB1dHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIC5hbGVydC10aXRsZS1jb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIC5mYS1leGNsYW1hdGlvbi1jaXJjbGV7XG4gICAgICBtYXJnaW4tdG9wOiAxcHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG4gIH1cbiAgLm1zZy1jb250YWluZXJ7XG4gICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgIHNwYW57XG4gICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgIH1cbiAgfVxuICAuZGVsZXRlLWJ0bntcbiAgICBiYWNrZ3JvdW5kOiAjZDk1MzRmO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICAuaW5wdXQtc2VsZWN0e1xuICAgIHBhZGRpbmc6IDlweCAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiA4cHggMCAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2MgIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAjNzg3QTdEICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICB9XG4vLyAgID09PT09PT09PT09Y3VzdG9tLWZpZWxkLXBvcHVwcz09PT09PT09PT09PT09PVxuLmN1c3RvbS1wb3B1c3tcbi5idG4yIHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBjb2xvcjogIzAwODRmNjtcbn1cbi5jcmVhdGVjb21wb25lbnQtd3JhcHBlciB7XG4gICAgcGFkZGluZzogMTBweCA1cHg7XG4gICAgYmFja2dyb3VuZDogI2VmZWZlZjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDhkOGQ4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbi5mb3JtLWN0cmwge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjY2NjY2NjICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZmllbGQtd3JhcHBlciAuZm9ybS1jdHJsIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBhZGRpbmc6IDEwcHggMCA1cHg7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6IDA7XG4gICAgaGVpZ2h0OiAzNnB4O1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgfVxufVxuLnVwZGF0ZWNvbXBvbmVudC13cmFwcGVyIHtcbiAgICBwYWRkaW5nOiAxMHB4IDVweDtcbiAgIC8vIG1hcmdpbjogMjBweCAwO1xuICAgIGJhY2tncm91bmQ6ICNlZmVmZWY7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkOGQ4ZDg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICBcbiAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgd2lkdGg6IDdweDtcbiAgICAgIGhlaWdodDogN3B4O1xuICAgIH1cbiAgXG4gICAgLmZvcm0tY3RybCB7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjY2NjY2NjICFpbXBvcnRhbnQ7XG4gICAgfVxuICBcbiAgICAuZmllbGQtd3JhcHBlciAuZm9ybS1jdHJsIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgcGFkZGluZzogMTBweCAwIDVweDtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgIC8vIGJvcmRlcjogMDtcbiAgICAgIGhlaWdodDogMzZweDtcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgIC8vIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICBtYXJnaW4tdG9wOiAycHg7XG5cbiAgICB9XG4gIH1cbiAgXG4gIC5jbG9zZVBvcHVwIHtcbiAgICByaWdodDogMTBweDtcbiAgICB0b3A6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICB3aWR0aDogMjZweDtcbiAgICBoZWlnaHQ6IDI2cHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDNweDtcbiAgICBkaXNwbGF5OiBub25lO1xuICBcbiAgICAmLmJvdHRvbVJpZ2h0IHtcbiAgICAgIGJvdHRvbTogMnB4O1xuICAgICAgdG9wOiBhdXRvO1xuICAgICAgbGVmdDogYXV0bztcbiAgICAgIHJpZ2h0OiAwO1xuICAgIH1cbiAgXG4gICAgJi50b3BMZWZ0IHtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICByaWdodDogYXV0bztcbiAgICAgIHRvcDogMXB4O1xuICAgICAgYm90dG9tOiBhdXRvO1xuICAgIH1cbiAgXG4gICAgJi5ib3R0b21MZWZ0IHtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICByaWdodDogYXV0bztcbiAgICAgIGJvdHRvbTogMnB4O1xuICAgICAgdG9wOiBhdXRvO1xuICAgIH1cbiAgXG4gICAgc3ZnIHtcbiAgICAgIHdpZHRoOiAxNnB4O1xuICBcbiAgICAgIC5jbHMtMSB7XG4gICAgICAgIHN0cm9rZTogI2MxYzFjMTtcbiAgICAgICAgc3Ryb2tlLXdpZHRoOiAycHg7XG4gICAgICB9XG4gICAgfVxuICBcbiAgICAmOmhvdmVyIHtcbiAgICAgIC5jbHMtMSB7XG4gICAgICAgIHN0cm9rZTogJGNvbW1vbi1ibHVlO1xuICAgICAgfVxuICAgICAgIFxuICAgIH1cbiAgICBcbiAgICBcbiAgfVxufVxuLmN1c3RUYWJsZSB7XG4gICAgLnRhYmxlRGF0YSB7XG4gICAgICAgIHdpZHRoOjEwJTtcbiAgICB9XG4gIH1cbiBcbiAgICAuc2V0dGluZ0RpdntcbiAgICAgIG1hcmdpbjogMHB4O1xuICAgIH1cbiAgICBib2R5e1xuICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICAgIH1cbiAgICAuZmxleHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgfVxuICAgIC5ibHVlX2J1dHRvbiB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTA5Q0YxO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgcGFkZGluZzogOXB4IDIwcHg7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgICAud2hpdGVfYnV0dG9uIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICBjb2xvcjogIzEwOUNGMTtcbiAgICAgIHBhZGRpbmc6IDhweCAxOXB4O1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgYm9yZGVyOjFweCBzb2xpZCAjMTA5Q0YxO1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gICAgIC5zZWxlY3R7XG4gICAgICBwYWRkaW5nOiA3cHggMjBweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGNvbG9yOiAjNzg3QTdEO1xuICAgIH1cbiAgICBcbiAgICAgaW5wdXQ6Zm9jdXMsIHNlbGVjdDpmb2N1cyxidXR0b246Zm9jdXN7XG4gICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICB9XG4gICAgXG4gICAgLnc5OHtcbiAgICAgIHdpZHRoOiA5OCU7XG4gICAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgIH1cbiAgICAudzk4MXtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxJTtcbiAgICB9XG4gICAgXG4gICAgLm1haW5fZGl2e1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgfVxuICAgIC5tYWluX2Rpdj5kaXY6Zmlyc3QtY2hpbGR7XG4gICAgd2lkdGg6IDE1JTtcbiAgICBiYWNrZ3JvdW5kOiAjRjNGNEY2O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNEQ0RDREM7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBoZWlnaHQ6IDg5dmg7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIH1cbiAgICAuc2V0dGluZ3N7XG4gICAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gICAgY29sb3I6ICMxQTIzMzQ7XG4gICAgfVxuICAgIC5tZW51IHtcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgfVxuICAgIC5tZW51IGxpe1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgICBwYWRkaW5nOiAyMHB4IDBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgY29sb3I6ICMxQTIzMzQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgICAubWVudSBsaS5zZWxlY3RlZHtcbiAgICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgICBcbiAgICBjb2xvcjogIzAwOTdGOTtcbiAgICB9XG4gICAgLmRpc3BsYXl7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIH1cbiAgICAuYm90dG9te1xuICAgICAgcGFkZGluZzogMSU7XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICBib3R0b206IDA7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDE1JSk7XG4gICAgICBib3JkZXItdG9wOjFweCBzb2xpZCAjRUFFQUVBO1xuICAgIGJveC1zaGFkb3c6IDRweCAwcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gICAgfVxuICAgIC5tcjEwe1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIH1cbiAgICAubWFpbl9kaXY+ZGl2Omxhc3QtY2hpbGR7XG4gICAgICB3aWR0aDogODAlO1xuICAgICAgbWFyZ2luLWxlZnQ6IDIwJTtcbiAgICAgXG4gICAgICAvKm92ZXJmbG93LXk6IHNjcm9sbDsqL1xuICAgICAgcGFkZGluZy1yaWdodDogMSU7XG4gICAgICBtYXJnaW4tYm90dG9tOiA3MHB4O1xuICAgIH1cbiAgICAuZWxsaXBzZXtcbiAgICAgIGJhY2tncm91bmQ6ICNGMEVGRUY7XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIHdpZHRoOiAxOXB4O1xuICAgIGhlaWdodDogMTlweDtcbiAgICBwYWRkaW5nOiAwcHggN3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCwgb3IgMTAwJSAqL1xuICAgIFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gICAgXG4gICAgY29sb3I6ICMwMDk3Rjk7XG4gICAgXG4gICAgfVxuICAgIC5ibHVlX2xpbmV7XG4gICAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzAwOTdGOTtcbiAgICAgIHdpZHRoOiAyMnB4O1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgbWFyZ2luOiAwcHggN3B4O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgdG9wOiAtNHB4O1xuICAgIH1cbiAgICAuYmx1ZV9zZXR0aW5nc3tcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgICBjb2xvcjogIzAwOTdGOTtcbiAgICB9XG4gICAgLmJvbGRfc2V0dGluZ3N7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgICBjb2xvcjogIzMyM0M0NztcbiAgICB9XG4gICAgLmJsYWNrX3NldHRpbmdze1xuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gICAgXG4gICAgY29sb3I6ICMzMjNDNDc7XG4gICAgfVxuICAgIC5ibGFja19zZXR0aW5nczF7XG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgICBcbiAgICBjb2xvcjogIzMyM0M0NztcbiAgICB9XG4gICAgLmZsZXgxe1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgfVxuICAgICAgLnNlcF9saW5le1xuICAgICAgICBtYXJnaW4tbGVmdDogNjVweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICAjQzRDNEM0O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgfVxuICAgICAudG9nZ2xlLnNfdG9nZ2xle1xuICAgICAgICBwYWRkaW5nLXRvcDogMTZweDsgXG4gICAgICB9XG4gICAgXG4gICAgLnN3aXRjaCB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgIHdpZHRoOiAzNXB4O1xuICAgIGhlaWdodDogMTJweDtcbiAgICB9XG4gICAgXG4gICAgLnN3aXRjaCBpbnB1dCB7IFxuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHdpZHRoOiAwO1xuICAgICAgaGVpZ2h0OiAwO1xuICAgIH1cbiAgICBcbiAgICAuc2xpZGVyIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICByaWdodDogMDtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgLyogYmFja2dyb3VuZC1jb2xvcjogI2NjYzsqL1xuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjQkRCQUJBO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSkpO1xuICAgICAgdHJhbnNpdGlvbjogLjRzO1xuICAgIH1cbiAgICBcbiAgICAuc2xpZGVyOmJlZm9yZSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgaGVpZ2h0OiAxOHB4O1xuICAgICAgd2lkdGg6IDE4cHg7XG4gICAgICBsZWZ0OiAtNnB4O1xuICAgICAgYm90dG9tOiAtNHB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0JEQkFCQTtcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xuICAgICAgdHJhbnNpdGlvbjogLjRzO1xuICAgIH1cbiAgICBcbiAgICBpbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XG4gICAgICAvKmJhY2tncm91bmQtY29sb3I6ICMyMTk2RjM7Ki9cbiAgICB9XG4gICAgXG4gICAgaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcbiAgICAgIC8qYm94LXNoYWRvdzogMCAwIDFweCAjMjE5NkYzOyovXG4gICAgfVxuICAgIFxuICAgIGlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcbiAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XG4gICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE5QzgzRjtcbiAgICB9XG4gICAgaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXJ7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjQkRCQUJBO1xuICAgIH1cbiAgICAuc2xpZGVyLnJvdW5kIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDM0cHg7XG4gICAgfVxuICAgIFxuICAgIC5zbGlkZXIucm91bmQ6YmVmb3JlIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB9XG4gICAgLnRvZ2dsZXtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIFxuICAgICAgcGFkZGluZy1yaWdodDogNTBweDtcbiAgICAgIHBhZGRpbmctdG9wOiAzMHB4OyBcbiAgICB9XG4gICAgLm9mZntcbiAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAtNnB4O1xuICAgIG1hcmdpbjogMHB4IDEwcHg7XG4gICAgfVxuICAgIC5vbntcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG4gICAgbWFyZ2luOiAwcHggMTBweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IC02cHg7XG4gICAgY29sb3I6ICMxOUM4M0Y7XG4gICAgfVxuICAgIC5oaWRkZW57XG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgfVxuICAgIC5zZXR0aW5nc19sYWJlbHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG4gICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xuICAgIH1cbiAgICAuY2hlY2tib3gge1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IGF1dG87XG4gICAgICAgIGdyaWQtZ2FwOiAwLjVlbTtcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICBjb2xvcjogdmFyKC0tY29sb3IpO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgfVxuICAgIC5jaGVja2JveF9faW5wdXQgaW5wdXQge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB3aWR0aDogMGVtO1xuICAgICAgICBoZWlnaHQ6IDBlbTtcbiAgICAgIH1cbiAgICAuY2hlY2tib3hfX2NvbnRyb2wge1xuICAgICAgZGlzcGxheTogaW5saW5lLWdyaWQ7XG4gICAgICB3aWR0aDogMC41ZW07XG4gICAgICBoZWlnaHQ6IDAuNWVtO1xuICAgICAgYm9yZGVyLXJhZGl1czogMC4xZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0JCQjJCMjtcbiAgICA7XG4gICAgfVxuICAgIC5jaGVja2JveF9faW5wdXQge1xuICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiY2hlY2tib3hcIjtcbiAgICB9XG4gICAgLmNoZWNrYm94X19jb250cm9sIHN2ZyB7XG4gICAgICAgIGNvbG9yOiAgI2ZmZjtcbiAgICAgICAgYmFja2dyb3VuZDogIzEwOUNGMTtcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjFzIGVhc2UtaW4gMjVtcztcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgICBzdHJva2Utd2lkdGg6NDtcbiAgICAgIHBhZGRpbmc6MnB4O1xuICAgICAgICB3aWR0aDogMC41ZW07XG4gICAgICBoZWlnaHQ6IDAuNWVtO1xuICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gbGVmdDtcbiAgICB9XG4gICAgLmNoZWNrYm94X19pbnB1dCBpbnB1dDpjaGVja2VkXG4gICAgICsgLmNoZWNrYm94X19jb250cm9sIHN2ZyB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIH1cbiAgICAuY2hlY2tib3hfX2lucHV0IGlucHV0OmNoZWNrZWRcbiAgICAgKyAuY2hlY2tib3hfX2NvbnRyb2wge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICB9XG4gICAgLmZsZXgxPmRpdjpudGgtY2hpbGQoMil7XG4gICAgICB3aWR0aDogNjAlO1xuICAgIH1cbiAgICAuaW5wdXR7XG4gICAgICBcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICBiYWNrZ3JvdW5kOiAjRjVGNUY1O1xuICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgd2lkdGg6IDMzNnB4O1xuICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICAgIGJvcmRlcjpub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgdGV4dC1pbmRlbnQ6IDEwcHg7XG4gICAgY29sb3I6ICMzMjNDNDc7XG4gICAgfVxuICAgIC5pbnB1dDo6cGxhY2Vob2xkZXIgLCBvcHRpb25bZGlzYWJsZWRde1xuICAgIGNvbG9yOiM4ZTkzOWE7XG4gICAgfVxuICAgIC5mbGV4MT5kaXY6Zmlyc3QtY2hpbGQge1xuICAgICAgd2lkdGg6IDY1cHg7XG4gICAgfVxuICAgIC5wb3NpdGlvbltfbmdjb250ZW50LXd0dC1jMTgwXSB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB0b3A6IC03cHg7XG4gICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgfVxuICAgIC8qZXh0cmEqL1xuICAgIC5zY3Jvb2wxe1xuICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDIxOHB4KTtcbiAgICB9XG4gICAgLm5vLXBvaW50ZXItY2xhc3Mge1xuICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgIHBvaW50ZXItZXZlbnRzOm5vbmU7XG4gIH1cbiAgLm5vLXBvaW50ZXItY2xhc3Mge1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgcG9pbnRlci1ldmVudHM6bm9uZTtcbn1cbi5oYXMtdmFsdWUge1xuICBsYWJlbCB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/leads/data-setup/data-setup.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/leads/data-setup/data-setup.component.ts ***!
  \*********************************************************************/
/*! exports provided: DataSetupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSetupComponent", function() { return DataSetupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_closing_reason_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/closing-reason.service */ "./src/app/components/leads/services/closing-reason.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_message_show_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/message-show.service */ "./src/app/services/message-show.service.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/authenticator.service */ "./src/app/services/authenticator.service.ts");
/* harmony import */ var _services_enquiry_services_post_enquiry_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/enquiry-services/post-enquiry-data.service */ "./src/app/services/enquiry-services/post-enquiry-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_institute_setting_service_institute_setting_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/institute-setting-service/institute-setting.service */ "./src/app/services/institute-setting-service/institute-setting.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/common-service */ "./src/app/services/common-service.ts");
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










let DataSetupComponent = /** @class */ (() => {
    let DataSetupComponent = class DataSetupComponent {
        constructor(service, appC, services, httpService, auth, postData, router, apiService, commonService) {
            this.service = service;
            this.appC = appC;
            this.services = services;
            this.httpService = httpService;
            this.auth = auth;
            this.postData = postData;
            this.router = router;
            this.apiService = apiService;
            this.commonService = commonService;
            this.showToggle = false;
            this.createNewReasonObj = {
                closing_desc: "",
                institution_id: this.service.institute_id
            };
            this.getAllClosingReasons = [];
            this.dummyArr = [0, 1, 2, 0, 1, 2];
            this.columnMaps = [0, 1];
            this.dataStatus = false;
            this.schoolModel = false;
            this.activeSession = 'source';
            this.sourceDetails = [];
            this.referList = [];
            this.custumFieldList = [];
            this.componentShell = [];
            this.createSource = {
                name: "",
                inst_id: sessionStorage.getItem('institute_id'),
            };
            this.createReferer = {
                name: "",
                inst_id: sessionStorage.getItem('institute_id')
            };
            /// city/Area
            this.filter = {
                country_ids: "-1",
                state_ids: "-1",
                city_ids: "-1",
                is_active: true
            };
            this.isEditcustumfield = "";
            this.editAreaName = '';
            this.editIsActiveStatus = true;
            this.countryStateAreaList = [];
            this.countryList = [];
            this.stateList = [];
            this.cityList = [];
            this.tempArealist = [];
            this.addArea = false;
            this.deleteAreaId = '';
            this.component_id = '';
            this.isProfessional = false;
            this.isEditCustumFormField = '';
            this.selectedData = {
                country: '',
                state: '',
                city: ''
            };
            this.editCustomFormField = {
                comp_length: '',
                description: "",
                institution_id: sessionStorage.getItem('institute_id'),
                is_required: "N",
                is_searchable: "N",
                label: "",
                page: 1,
                prefilled_data: "",
                sequence_number: "",
                type: "-1",
                on_both: "Y",
                defaultValue: "",
                is_external: "N"
            };
            //fetch settings tab switch info
            this.jsonFlagForSetting = false;
            this.disabled = true;
            this.currentSection = 'section1';
            this.leadSettings = {
                enable_daily_enquiry_follow_email: '',
                open_enq_Visibility_feature: '',
                enable_duplicate_enquiry_contact_no_feature: 0,
                enable_enquiry_notification: '',
                institute_id: sessionStorage.getItem('institute_id'),
                enable_counsellor_number_to_enquirer_in_sms: '',
                pre_enquiry_follow_up_reminder_time: '',
                post_enquiry_follow_up_reminder_time: '',
                inst_enquiry_handler_no: '',
                external_lead_notification_admin: {
                    student: '',
                    parent: '',
                    gaurdian: '',
                    teacher: '',
                    admin: '',
                },
                external_lead_notification_enquirer: {
                    student: '',
                    parent: '',
                    gaurdian: '',
                    teacher: '',
                    admin: '',
                },
                enquiry_notification: {
                    student: '',
                    admin: '',
                },
                enable_website_integration: 0,
                enable_jd_integration: 0,
                enable_sulekha_integration: 0,
                enable_urbanpro_integration: 0,
                enable_fb_integration: 0,
                enable_routing: 0,
                jd_contract_id: 0,
            };
        }
        ngOnInit() {
            this.auth.schoolModel.subscribe(res => {
                this.schoolModel = false;
                if (res) {
                    this.schoolModel = true;
                }
            });
            this.auth.institute_type.subscribe(res => {
                if (res == 'LANG') {
                    this.isProfessional = true; // batch module
                }
                else {
                    this.isProfessional = false; //course module
                }
            });
            // this.getAllReasons();
            this.getSourceDetails();
            this.fetchPrefillData();
        }
        toggleCreateNewReason() {
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
        getAllReasons() {
            this.dataStatus = true;
            this.auth.showLoader();
            this.service.getAllReasons().subscribe((data) => {
                this.auth.hideLoader();
                this.dataStatus = false;
                this.getAllClosingReasons = data;
            }, (error) => {
                this.auth.hideLoader();
                this.dataStatus = false;
                // this.errorMessage(error);
            });
        }
        saveInformation(row, index) {
            if (row.new_source_name == "" || row.new_source_name == null) {
                this.appC.popToast({ type: 'error', body: "Closing reason can't be empty" });
            }
            else {
                // if (this.isName(row.new_source_name) == true) {
                //   this.services.showErrorMessage("error", "", "Please enter alphabets only")
                // }
                if (row.new_source_name.trim() == '') {
                    this.services.showErrorMessage("error", "", "Please enter closing reason");
                }
                else if (this.checkLength(row.new_source_name) == false) {
                    this.services.showErrorMessage("error", "", "Limits should not be more than 50");
                }
                else {
                    let obj = {
                        closing_desc: row.new_source_name,
                        institution_id: this.service.institute_id
                    };
                    this.auth.showLoader();
                    this.service.updateClosingReason(obj, row.closing_reason_id).subscribe((data) => {
                        this.auth.hideLoader();
                        this.services.showErrorMessage("success", "", "Reason updated successfully");
                        this.getAllReasons();
                    }, err => {
                        this.auth.hideLoader();
                        this.errorMessage(err);
                    });
                }
            }
        }
        createNewReason() {
            if (this.createNewReasonObj.closing_desc == "") {
                this.services.showErrorMessage("error", "", "Closing reason can't be empty");
            }
            else {
                // if (this.isName(this.createNewReasonObj.closing_desc) == true) {
                //   this.services.showErrorMessage("error", "", "Please enter alphabets only")
                // }
                if (this.createNewReasonObj.closing_desc.trim() == '') {
                    this.services.showErrorMessage("error", "", "Please enter closing reason");
                }
                else if (this.checkLength(this.createNewReasonObj.closing_desc) == false) {
                    this.services.showErrorMessage("error", "", "Limits should not be more than 50");
                }
                else {
                    this.auth.showLoader();
                    this.service.createReason(this.createNewReasonObj).subscribe((data) => {
                        this.auth.hideLoader();
                        this.services.showErrorMessage("success", "", "Reason Created Successfully");
                        this.showToggle = false;
                        this.getAllReasons();
                        this.createNewReasonObj.closing_desc = "";
                        document.getElementById('showAddBtn').style.display = "inline-block";
                        document.getElementById('showCloseBtn').style.display = "none";
                    }, (error) => {
                        this.auth.hideLoader();
                        this.errorMessage(error);
                    });
                }
            }
        }
        checkLength(el) {
            if (el.length > 50) {
                return false;
            }
            else {
                return true;
            }
        }
        isName(str) {
            let letters = /^[A-Za-z \n]+$/;
            if (letters.test(str)) {
                return false;
            }
            else {
                return true;
            }
        }
        errorMessage(error) {
            this.services.showErrorMessage("success", "", error.error.message);
        }
        toggle(id) {
            this.activeSession = id;
            this.createSource.name = '';
            this.createReferer.name = '';
            this.createNewReasonObj.closing_desc = '';
        }
        EditSource(obj, name) {
            obj.isEdit = true;
            obj.new_source_name = name;
        }
        cancelEditSource(obj) {
            obj.isEdit = false;
            obj.new_source_name = '';
        }
        updateSource(obj) {
            let data = {
                id: obj.id,
                name: obj.new_source_name,
                inst_id: sessionStorage.getItem('institute_id')
            };
            if (obj.new_source_name.trim() != '') {
                if ((this.sourceDetails.filter(x => (x.name == obj.new_source_name.trim() && x.id != obj.id))).length == 0) {
                    this.auth.showLoader();
                    this.httpService.putData("/api/v1/enquiry_campaign/master/lead_source", data).subscribe(res => {
                        this.auth.hideLoader();
                        this.services.showErrorMessage('success', '', 'Source updated successfully');
                        this.getSourceDetails();
                    }, err => {
                        this.auth.hideLoader();
                        this.services.showErrorMessage('error', '', err.error.message);
                    });
                }
                else {
                    this.services.showErrorMessage('error', '', 'Source name already exist!');
                }
            }
            else {
                this.services.showErrorMessage('error', '', 'Please enter source name');
            }
        }
        deleteSource(obj) {
            let data = {
                id: obj.id,
                name: obj.name,
                inst_id: sessionStorage.getItem('institute_id')
            };
            this.auth.showLoader();
            this.httpService.deleteData('/api/v1/enquiry_campaign/master/lead_source', data).subscribe(res => {
                this.auth.hideLoader();
                this.services.showErrorMessage('success', '', 'Source deleted successfully');
                $('#deleteModal').modal('hide');
                this.getSourceDetails();
            }, err => {
                this.auth.hideLoader();
                this.services.showErrorMessage('error', '', err.error.message);
                $('#deleteModal').modal('hide');
            });
        }
        getSourceDetails() {
            let url = "/api/v1/enquiry_campaign/master/lead_source/" + sessionStorage.getItem('institute_id') + "/all";
            this.auth.showLoader();
            this.httpService.getData(url).subscribe((res) => {
                this.auth.hideLoader();
                this.sourceDetails = res;
            }, err => {
                this.auth.hideLoader();
            });
        }
        addSourceData() {
            let url = "/api/v1/enquiry_campaign/master/lead_source";
            if (this.createSource.name.trim() != '') {
                if ((this.sourceDetails.filter(x => x.name == this.createSource.name.trim())).length == 0) {
                    this.auth.showLoader();
                    this.httpService.postData(url, this.createSource).subscribe(el => {
                        this.auth.hideLoader();
                        this.services.showErrorMessage('success', '', 'Source added successfully');
                        this.getSourceDetails();
                        this.createSource.name = '';
                    }, err => {
                        this.auth.hideLoader();
                        this.services.showErrorMessage('error', '', err.error.message);
                    });
                }
                else {
                    this.services.showErrorMessage('error', '', 'Source name already exist!');
                }
            }
            else {
                this.services.showErrorMessage('error', '', 'Please enter source name');
            }
        }
        addReferData() {
            if (this.createReferer.name.trim() != '') {
                if ((this.referList.filter(x => x.name == this.createReferer.name.trim())).length == 0) {
                    this.auth.showLoader();
                    this.httpService.postData('/api/v1/enquiry_campaign/master/lead_referred_by', this.createReferer).subscribe(el => {
                        this.createReferer.name = '';
                        this.auth.hideLoader();
                        this.fetchReferInfo();
                        this.services.showErrorMessage('success', '', 'Referrer Added Successfully');
                    }, err => {
                        this.auth.hideLoader();
                        this.services.showErrorMessage('error', '', err.error.message);
                    });
                }
                else {
                    this.services.showErrorMessage('error', '', 'Referrer name already exist!');
                }
            }
            else {
                this.services.showErrorMessage('error', '', 'Please enter Referrer name');
            }
        }
        fetchReferInfo() {
            this.auth.showLoader();
            this.httpService.getData('/api/v1/enquiry_campaign/master/lead_referred_by/' + sessionStorage.getItem('institute_id') + "/all").subscribe(data => {
                this.auth.hideLoader();
                this.referList = data;
            }, err => {
                this.auth.hideLoader();
                this.referList = [];
            });
        }
        // =====================custm-frm-field================
        checkValuetype(value) {
            this.editCustomFormField.comp_length = value == 1 ? 50 : 0;
        }
        fetchPrefillData() {
            this.auth.showLoader();
            let url = '/api/v1/masterData/type/CUSTOM_COMPONENT_TYPE';
            this.httpService.getData(url).subscribe((res) => {
                this.auth.hideLoader();
                this.componentShell = res;
                console.log("type value", this.componentShell);
            }, (err) => {
                this.auth.hideLoader();
            });
        }
        fetchCustomFild() {
            this.auth.showLoader();
            let url = '/api/v1/instCustomComp/getAll/' + sessionStorage.getItem('institute_id') + "?page=1";
            this.httpService.getData(url).subscribe(res => {
                this.auth.hideLoader();
                this.custumFieldList = res;
                console.log("custom filed data", this.custumFieldList);
            }, err => {
                this.auth.hideLoader();
                this.custumFieldList = [];
            });
        }
        addNewCustomField() {
            //Case 1 Label/Type is not empty and MaxLength and Sequence
            if (this.editCustomFormField.label.trim() != "-1") {
                if (this.editCustomFormField.type != "-1") {
                    //Case 2 if its a select or multiselect dropdown list cannot be empty or duplicate
                    if (this.editCustomFormField.type == "3" ||
                        this.editCustomFormField.type == "4") {
                        /* Validate Prefilled Data */
                        if (this.validateDropDown(this.editCustomFormField.prefilled_data)) {
                            if (this.validateDropdownDefvalue(this.editCustomFormField.prefilled_data, this.editCustomFormField.defaultValue)) {
                                this.auth.showLoader();
                                this.postData.addNewCustomComponent(this.editCustomFormField).subscribe(res => {
                                    this.auth.hideLoader();
                                    this.services.showErrorMessage('success', '', 'Form-Field added successfully');
                                    this.fetchCustomFild();
                                    this.cleareForm();
                                }, err => {
                                    this.auth.hideLoader();
                                    this.services.showErrorMessage('error', '', 'Label name is already created with the same name');
                                });
                            }
                            else {
                                this.services.showErrorMessage('error', '', 'dropdown default value should be present in prefilled data');
                            }
                        }
                        else {
                            this.services.showErrorMessage('error', '', 'Prefill data has to be unique and non-empty');
                        }
                    }
                    /* Date Custom Component */
                    else if (this.editCustomFormField.type == "5") {
                        /* Date cannot be searchable and does not a default value */
                        if (this.editCustomFormField.is_searchable == "N" && this.editCustomFormField.defaultValue.trim() == "") {
                            this.auth.showLoader();
                            this.postData.addNewCustomComponent(this.editCustomFormField).subscribe(res => {
                                this.auth.hideLoader();
                                this.services.showErrorMessage('success', '', 'Form-Field added successfully');
                                this.fetchCustomFild();
                                this.cleareForm();
                            }, err => {
                                this.auth.hideLoader();
                                this.services.showErrorMessage('error', '', 'There was an error processing your request' + err.error.message);
                            });
                        }
                        else {
                            this.services.showErrorMessage('error', '', 'Date Field Cannot Be Searchable Or have any default value');
                        }
                    }
                    /* Textbox and Checkbox */
                    else if (this.editCustomFormField.type != "3" && this.editCustomFormField.type != "4" && this.editCustomFormField.type != "5") {
                        this.auth.showLoader();
                        this.postData.addNewCustomComponent(this.editCustomFormField).subscribe(res => {
                            this.auth.hideLoader();
                            this.services.showErrorMessage('success', '', 'Form-Field added successfully');
                            this.fetchCustomFild();
                            this.cleareForm();
                        }, err => {
                            this.auth.hideLoader();
                            this.services.showErrorMessage('error', '', 'Label name already exists');
                        });
                    }
                }
                else {
                    this.services.showErrorMessage('error', '', 'Please mention a type');
                }
            }
            else {
                this.services.showErrorMessage('error', '', 'Please mention a Label');
            }
        }
        onClickeditCustomField(obj) {
            //this.component_id = obj.component_id
            this.editCustomFormField = obj;
            this.isEditCustumFormField = 'Edit';
        }
        onClickAddField(types) {
            this.isEditCustumFormField = types;
        }
        updateCustumField() {
            let data = this.editCustomFormField;
            //Case 1 Label/Type is not empty and MaxLength and Sequence
            if (data.label.trim() != "" && data.type != "") {
                //Case 2 if its a select or multiselect dropdown list cannot be empty or duplicate
                if (data.type == "3" || data.type == "4") {
                    /* Validate Prefilled Data */
                    if (this.validateDropDown(data.prefilled_data)) {
                        if (this.validateDropdownDefvalue(data.prefilled_data, data.defaultValue)) {
                            this.auth.showLoader();
                            this.postData.updateCustomComponent(data).subscribe(res => {
                                this.auth.hideLoader();
                                this.services.showErrorMessage('success', '', 'Form-Field  Updated Successfully');
                                this.cleareForm();
                            }, err => {
                                this.auth.hideLoader();
                                this.services.showErrorMessage('error', '', err.error.message);
                            });
                        }
                        else {
                            this.services.showErrorMessage('error', 'dropdown default value should be present in prefilled data', '');
                        }
                    }
                    else {
                        this.services.showErrorMessage('error', 'Prefill data has to be unique and non-empty', '');
                    }
                }
                /* Date Custom Component */
                else if (data.type == "5") {
                    /* Date cannot be searchable and does not a default value */
                    if (data.is_searchable == "N" && data.defaultValue.trim() == "") {
                        this.auth.showLoader();
                        this.postData.updateCustomComponent(data).subscribe(res => {
                            this.auth.hideLoader();
                            this.services.showErrorMessage('success', '', 'Form-Field updated successfully');
                            this.cleareForm();
                        }, err => {
                            this.auth.hideLoader();
                            this.services.showErrorMessage('error', '', err.error.message);
                        });
                    }
                    else {
                        this.services.showErrorMessage('error', 'Date field cannot be searchable Or have any default value', '');
                    }
                }
                /* Textbox and Checkbox */
                else if (data.type != "3" && data.type != "4" && data.type != "5") {
                    this.auth.showLoader();
                    this.postData.updateCustomComponent(data).subscribe(res => {
                        this.auth.hideLoader();
                        this.services.showErrorMessage('success', '', 'Form-Field updated successfully');
                        this.fetchCustomFild();
                        this.cleareForm();
                    }, err => {
                        this.auth.hideLoader();
                        this.services.showErrorMessage('error', '', err.error.message);
                    });
                }
            }
            else {
                this.services.showErrorMessage('error', '', 'Please mention a label/type');
            }
        }
        // this.isEditCustumFormField='Edit'
        // let obj =this.editCustomFormField
        // this.auth.showLoader();
        // this.postData.updateCustomComponent(obj).subscribe(
        //   res => {
        //     this.auth.hideLoader();
        //     this.services.showErrorMessage('success', '', 'Form-Field  Updated Successfully');
        //     this.cleareForm()
        //     $('#customField').modal('hide');
        //   },
        //   err => {
        //     this.auth.hideLoader();
        //     this.services.showErrorMessage('error', '', err.error.message);
        //   }
        // );
        selecteCustomformId(obj) {
            this.component_id = obj;
        }
        deleteCustumfomField() {
            let obj = this.component_id;
            this.auth.showLoader();
            this.postData.deleteCustomComponent(obj).subscribe(res => {
                this.auth.hideLoader();
                this.services.showErrorMessage('success', 'Form-field Deleted ', 'requested form-field deleted Successfully');
                this.fetchCustomFild();
                $('#deleteModal').modal('hide');
            }, err => {
                this.auth.hideLoader();
                this.services.showErrorMessage('error', '', err.error.message);
            });
        }
        cleareForm() {
            this.isEditCustumFormField = "";
            this.emptyCustomField();
        }
        emptyCustomField() {
            this.editCustomFormField = {
                comp_length: '',
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
        // =========================end===============================
        updateRefer(obj) {
            let data = {
                id: obj.id,
                name: obj.new_source_name,
                inst_id: sessionStorage.getItem('institute_id')
            };
            if (obj.new_source_name.trim() != '') {
                if ((this.referList.filter(x => (x.name == obj.new_source_name.trim() && x.id != obj.id))).length == 0) {
                    this.auth.showLoader();
                    this.httpService.putData('/api/v1/enquiry_campaign/master/lead_referred_by', data).subscribe(res => {
                        this.auth.hideLoader();
                        this.services.showErrorMessage('success', '', 'Reference updated Successfully');
                        this.fetchReferInfo();
                    }, err => {
                        this.auth.hideLoader();
                        this.services.showErrorMessage('error', '', err.error.message);
                    });
                }
                else {
                    this.services.showErrorMessage('error', '', 'Referrer name already exist!');
                }
            }
            else {
                this.services.showErrorMessage('error', '', 'Please enter Referrer name');
            }
        }
        deleteRefer(obj) {
            let data = {
                id: obj.id,
                name: obj.name,
                inst_id: sessionStorage.getItem('institute_id')
            };
            this.auth.showLoader();
            this.httpService.deleteData('/api/v1/enquiry_campaign/master/lead_referred_by', data).subscribe(res => {
                this.auth.hideLoader();
                this.services.showErrorMessage('success', '', 'Reference deleted Successfully');
                $('#deleteModal').modal('hide');
                this.fetchReferInfo();
            }, err => {
                this.auth.hideLoader();
                $('#deleteModal').modal('hide');
                if (err.status == 500) {
                    // msg = JSON.parse(err._body);
                    this.services.showErrorMessage('error', '', err.error.message);
                }
                else {
                    this.services.showErrorMessage('error', '', err.error.message);
                }
            });
        }
        ///// City/Areaa
        // get all country list
        getCountryList() {
            this.areaSearchInput = '';
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
                this.services.showErrorMessage('error', '', err);
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
                this.services.showErrorMessage('error', '', err);
            });
        }
        searchArea() {
            this.countryStateAreaList = [];
            let is_active_status = this.filter.is_active ? 'Y' : 'N';
            const url = `/api/v1/cityArea/area/view/${sessionStorage.getItem('institute_id')}?country_ids=${this.filter.country_ids}&state_ids=${this.filter.state_ids}&city_ids=${this.filter.city_ids}&is_active=${is_active_status}`;
            this.auth.showLoader();
            this.httpService.getData(url).subscribe((res) => {
                this.auth.hideLoader();
                this.countryStateAreaList = res.result;
                this.tempArealist = res.result;
            }, err => {
                this.auth.hideLoader();
                this.services.showErrorMessage('error', '', 'Please check your internet connection or contact at support@proctur.com if the issue persist');
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
                    "main_branch_instId": sessionStorage.getItem("institute_id"),
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
                    this.services.showErrorMessage('success', '', res.message);
                    $('#editCityArea').modal('hide');
                    this.searchArea();
                }, err => {
                    this.auth.hideLoader();
                    this.services.showErrorMessage('error', '', err);
                });
            }
            else {
                this.services.showErrorMessage('error', '', 'Please enter Area name');
            }
        }
        setDeleteAreaId(areaId) {
            this.deleteAreaId = areaId;
        }
        deleteArea() {
            const url = `/api/v1/cityArea/area/delete/${sessionStorage.getItem('institute_id')}/${this.deleteAreaId.id}`;
            this.auth.showLoader();
            this.httpService.deleteData(url, null).subscribe((res) => {
                this.auth.hideLoader();
                this.services.showErrorMessage('success', '', res.message);
                this.deleteAreaId = '';
                $('#deleteModal').modal('hide');
                this.searchArea();
            }, err => {
                this.auth.hideLoader();
                this.services.showErrorMessage('error', '', err.error.message);
            });
        }
        toggleAddArea() {
            if (this.addArea) {
                this.addArea = false;
                this.searchArea();
            }
            else {
                this.addArea = true;
                this.selectedData.country = this.filter.country_ids;
                this.selectedData.state = this.filter.state_ids;
                this.selectedData.city = this.filter.city_ids;
            }
        }
        toggleNewPopupsVisisbility(type) {
            this.isEditcustumfield = type;
            //this.emptyObject();
        }
        cancelRow() {
            this.isEditcustumfield = '';
        }
        validateDropDown(data) {
            let arr = data.split(',');
            /* boolean for non empty value */
            let test1 = arr.every(function checkNonEmpty(el) {
                return (el != "" && el != " ");
            });
            /* convert array to set unique value */
            this.editCustomFormField.prefilled_data = Array.from(new Set(arr)).join(',');
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
        fetchSettingsInfo() {
            this.jsonFlagForSetting = true;
        }
        scrollTo(section) {
            document.querySelector('#' + section)
                .scrollIntoView();
            this.currentSection = section;
        }
        //lead settings
        // obj.sms_notification = this.convertBoolenToNumber(this.instituteSettingDet.sms_notification);
        convertBoolenToNumber(data) {
            if (data) {
                return 1;
            }
            else {
                return 0;
            }
        }
        getSumOfTableField(data) {
            let total = 0;
            for (let i = 0; i < Object.keys(data).length; i++) {
                if (Object.keys(data)[i] == 'student' && data.student == true) {
                    total = total + 2;
                }
                else if (Object.keys(data)[i] == 'parent' && data.parent == true) {
                    total = total + 4;
                }
                else if (Object.keys(data)[i] == 'gaurdian' && data.gaurdian == true) {
                    total = total + 32;
                }
                else if (Object.keys(data)[i] == 'teacher' && data.teacher == true) {
                    total = total + 8;
                }
                else if (Object.keys(data)[i] == 'admin' && data.admin == true) {
                    total = total + 16;
                }
                else if (Object.keys(data)[i] == 'openApp' && data.openApp == true) {
                    total = total + 64;
                }
            }
            return total;
        }
        constructJsonToSend() {
            // let obj: any = Object.assign({}, this.leadSettings);
            let obj = this.leadSettings;
            obj.institute_id = Number(this.leadSettings.institute_id);
            obj.enable_routing = this.convertBoolenToNumber(this.leadSettings.enable_routing);
            obj.enable_fb_integration = this.convertBoolenToNumber(this.leadSettings.enable_fb_integration);
            obj.enable_urbanpro_integration = this.convertBoolenToNumber(this.leadSettings.enable_urbanpro_integration);
            obj.enable_sulekha_integration = this.convertBoolenToNumber(this.leadSettings.enable_sulekha_integration);
            obj.enable_jd_integration = this.convertBoolenToNumber(this.leadSettings.enable_jd_integration);
            obj.enable_website_integration = this.convertBoolenToNumber(this.leadSettings.enable_website_integration);
            obj.enable_daily_enquiry_follow_email = this.convertBoolenToNumber(this.leadSettings.enable_daily_enquiry_follow_email);
            obj.open_enq_Visibility_feature = this.convertBoolenToNumber(this.leadSettings.open_enq_Visibility_feature);
            obj.enable_duplicate_enquiry_contact_no_feature = this.convertBoolenToNumber(this.leadSettings.enable_duplicate_enquiry_contact_no_feature);
            obj.enable_enquiry_notification = this.convertBoolenToNumber(this.leadSettings.enable_enquiry_notification);
            obj.enable_counsellor_number_to_enquirer_in_sms = this.convertBoolenToNumber(this.leadSettings.enable_counsellor_number_to_enquirer_in_sms);
            obj.pre_enquiry_follow_up_reminder_time = (this.leadSettings.pre_enquiry_follow_up_reminder_time);
            obj.post_enquiry_follow_up_reminder_time = (this.leadSettings.post_enquiry_follow_up_reminder_time);
            obj.external_lead_notification_admin = this.getSumOfTableField(this.leadSettings.external_lead_notification_admin);
            obj.external_lead_notification_enquirer = this.getSumOfTableField(this.leadSettings.external_lead_notification_enquirer);
            obj.enquiry_notification = this.getSumOfTableField(this.leadSettings.enquiry_notification);
            if (this.leadSettings.inst_enquiry_handler_no != null && this.leadSettings.inst_enquiry_handler_no != '') {
                var regExPattern = /^[0-9]*$/;
                if (!regExPattern.test(this.leadSettings.inst_enquiry_handler_no)) {
                    this.auth.hideLoader();
                    this.commonService.showErrorMessage('error', '', 'Please enter numbers only');
                    return false;
                }
            }
            return obj;
        }
        saveLeadSettings() {
            let dataToSend = {};
            // if (this.leadSettings.gst_enabled) {
            //   if (this.leadSettings.gst_no == "" || this.leadSettings.gst_no == null) {
            //     //this.commonService.showErrorMessage('error', '', "Please specify " + this.instituteTaxType + " NO.");
            //     return;
            //   }
            // }
            // dataToSend = this.lead;
            dataToSend = this.constructJsonToSend();
            console.log(dataToSend);
            this.auth.showLoader();
            this.apiService.savePartialData(dataToSend).subscribe(res => {
                this.auth.hideLoader();
                this.commonService.showErrorMessage('success', '', "All your setting saved successfully");
                this.cancel();
            }, err => {
                this.auth.hideLoader();
                this.commonService.showErrorMessage('error', '', err.error.message);
                this.cancel();
            });
        }
        maxlenth(data, limit) {
            if (data.length > limit) {
                this.services.showErrorMessage(this.services.toastTypes.info, '', "Please Enter upto" + " " + limit + " " + "character only");
            }
        }
        disjusdialContId() {
            this.disabled = !this.disabled;
        }
        cancel() {
            this.leadSettings = {
                enable_daily_enquiry_follow_email: '',
                open_enq_Visibility_feature: '',
                enable_duplicate_enquiry_contact_no_feature: 0,
                enable_enquiry_notification: '',
                institute_id: sessionStorage.getItem('institute_id'),
                enable_counsellor_number_to_enquirer_in_sms: '',
                pre_enquiry_follow_up_reminder_time: '',
                post_enquiry_follow_up_reminder_time: '',
                inst_enquiry_handler_no: '',
                external_lead_notification_admin: {
                    student: '',
                    parent: '',
                    gaurdian: '',
                    teacher: '',
                    admin: '',
                },
                external_lead_notification_enquirer: {
                    student: '',
                    parent: '',
                    gaurdian: '',
                    teacher: '',
                    admin: '',
                },
                enquiry_notification: {
                    student: '',
                    admin: '',
                },
                enable_website_integration: 0,
                enable_jd_integration: 0,
                enable_sulekha_integration: 0,
                enable_urbanpro_integration: 0,
                enable_fb_integration: 0,
                enable_routing: 0,
                jd_contract_id: 0,
            };
        }
    };
    DataSetupComponent.ctorParameters = () => [
        { type: _services_closing_reason_service__WEBPACK_IMPORTED_MODULE_1__["ClosingReasonService"] },
        { type: _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"] },
        { type: _services_message_show_service__WEBPACK_IMPORTED_MODULE_3__["MessageShowService"] },
        { type: _services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"] },
        { type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticatorService"] },
        { type: _services_enquiry_services_post_enquiry_data_service__WEBPACK_IMPORTED_MODULE_6__["PostEnquiryDataService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: _services_institute_setting_service_institute_setting_service__WEBPACK_IMPORTED_MODULE_8__["InstituteSettingService"] },
        { type: _services_common_service__WEBPACK_IMPORTED_MODULE_9__["CommonServiceFactory"] }
    ];
    DataSetupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-data-setup',
            template: __importDefault(__webpack_require__(/*! raw-loader!./data-setup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/leads/data-setup/data-setup.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./data-setup.component.scss */ "./src/app/components/leads/data-setup/data-setup.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_services_closing_reason_service__WEBPACK_IMPORTED_MODULE_1__["ClosingReasonService"],
            _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
            _services_message_show_service__WEBPACK_IMPORTED_MODULE_3__["MessageShowService"],
            _services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"],
            _services_authenticator_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticatorService"],
            _services_enquiry_services_post_enquiry_data_service__WEBPACK_IMPORTED_MODULE_6__["PostEnquiryDataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _services_institute_setting_service_institute_setting_service__WEBPACK_IMPORTED_MODULE_8__["InstituteSettingService"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_9__["CommonServiceFactory"]])
    ], DataSetupComponent);
    return DataSetupComponent;
})();



/***/ }),

/***/ "./src/app/components/leads/enquiry-add/enquiry-add.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/leads/enquiry-add/enquiry-add.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* ===============================header colors=======================*/\n.table-format-first .table-responsive table th,\n.table-format-first .table-responsive table td {\n  text-align: center;\n  padding: 10px 5px;\n}\n.table-format-first .table-responsive table th {\n  text-transform: capitalize;\n  font-size: 14px;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper {\n  display: inline-block;\n  overflow: initial;\n  margin-left: 0;\n  width: auto;\n  position: relative;\n  background: transparent;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox {\n  z-index: 2;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label {\n  font-size: 16px;\n  margin-left: 7px;\n  font-weight: 600;\n  vertical-align: middle;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:after, .table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:before {\n  z-index: 1;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper:after {\n  content: '';\n  width: 20px;\n  height: 20px;\n  background: #fff;\n  left: 0;\n  top: 0;\n  position: absolute;\n}\n.table-format-first .table-responsive table tbody tr td .fa-trash-o {\n  color: #f44336;\n  font-size: 20px;\n}\n.table-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-top: 10px;\n}\n.table-container .heading-container {\n  background: #e0eaec;\n  display: flex;\n  flex-direction: row;\n  font-size: 14px;\n  font-weight: 600;\n  text-align: left;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n}\n.table-container .heading-container .heading-item {\n  width: 10%;\n  text-align: center;\n}\n.table-container .value-outer-container {\n  display: flex;\n  flex-direction: column;\n  min-height: 53vh;\n  max-height: 54vh;\n  overflow-x: hidden;\n  overflow-y: auto;\n  border: 1px solid #ccc;\n}\n.table-container .value-outer-container .value-container {\n  display: flex;\n  flex-direction: row;\n  text-align: left;\n  padding: 4px;\n  font-size: 12px;\n  border-bottom: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n  border-top: none;\n}\n.table-container .value-outer-container .value-container .value-item {\n  width: 10%;\n  text-align: center;\n}\n.homewrap {\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n.homewrap ::-webkit-scrollbar {\n  display: block;\n  width: 7px;\n  height: 7px;\n}\n.homewrap .scroll-content {\n  overflow-x: hidden;\n  padding-bottom: 15px;\n}\n* {\n  font-weight: 600;\n}\n.multiselect-wrapper {\n  padding: 5px;\n  border: 1px solid #deeaee;\n  position: relative;\n  z-index: 100;\n  background: white;\n  min-width: 400px;\n  min-height: 50px;\n  top: 0px;\n}\n.multiselect-wrapper .multiselect-wrapper-inner {\n  padding: 10px;\n}\n.multiselect-wrapper .multiselect-wrapper-inner ul li {\n  height: 40px;\n  padding: 10px 0px 0px 5px;\n}\n.institute-table table tr th {\n  text-align: left;\n  padding: 5px 20px;\n  font-size: 14px;\n}\n.institute-table table tr td {\n  text-align: left;\n}\n.institute-table table tr td:first-child {\n  padding-left: 20px !important;\n}\n.institute-table table tr td.edit-view-btn div {\n  display: inline-block;\n}\n.institute-table table tr td .field-wrapper {\n  background: transparent;\n}\n.institute-table table tr td .field-wrapper .invalid-alert {\n  color: red;\n  background: rgba(255, 255, 255, 0);\n}\n.institute-table table tr td .field-wrapper .form-ctrl {\n  display: block;\n  width: 100%;\n  background: transparent;\n  font: 400 12px 'Open sans',sans-serif;\n  box-sizing: border-box;\n  padding: 0px 0px 0px 6px;\n  outline: none;\n  border: 0;\n  border-bottom: solid 1px #0084f6;\n  height: 36px;\n  box-shadow: none;\n  border-radius: 0;\n  line-height: 24px;\n}\n.institute-table table tr td .field-wrapper label {\n  position: absolute;\n  top: 22px;\n  font-size: 14px;\n  left: 0px;\n  transition: all 0.2s ease-in-out;\n  color: #777;\n}\n.institute-table table tr td .field-wrapper .form-ctrl:focus {\n  padding: 12px 0 6px;\n  border-bottom: solid 2px #0084f6;\n  box-shadow: none;\n  line-height: 26px;\n}\n.institute-table table tr td .field-wrapper.has-value .form-ctrl + label,\n.institute-table table tr td .field-wrapper .form-ctrl:focus + label {\n  font: 400 12px 'Open sans',sans-serif;\n  top: 6px;\n  left: 0px;\n}\n.institute-table table tr td .field-wrapper.has-value .form-ctrl + label,\n.institute-table table tr td .field-wrapper .form-ctrl:focus + label {\n  color: #0084f6;\n  font: 400 12px 'Open sans',sans-serif;\n}\n.institute-table table tr td:first-child {\n  padding-left: 50px;\n}\n.add-edit {\n  margin-bottom: 0;\n  margin-top: 10px;\n}\n.add-edit i {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  line-height: 1rem;\n  text-align: center;\n  font-size: 17px;\n  vertical-align: middle;\n}\n.add-edit span {\n  display: inline-block;\n}\n.add-edit .expend-box i {\n  line-height: 16px;\n  font-size: 16px;\n}\n.add-edit a {\n  cursor: pointer;\n}\n.sourceI {\n  cursor: pointer;\n  line-height: 20px;\n  position: absolute;\n  right: -35px;\n  bottom: 5px;\n}\n.iconPlus {\n  float: right;\n  width: 24px;\n  font-size: 24px;\n  height: 24px;\n  text-align: center;\n  border-radius: 50%;\n  line-height: 22px;\n  margin-right: 4px;\n  margin-top: 3px;\n  cursor: pointer;\n  color: #0084f6;\n  cursor: pointer;\n}\n.iconPlus:hover {\n  background: #0084f6;\n  color: white;\n}\n.enquiry-detail .field-wrapper {\n  position: relative;\n  padding-top: 10px;\n}\n.enquiry-detail .field-wrapper.datePickerBox .form-ctrl {\n  cursor: pointer;\n  position: relative;\n  z-index: 1;\n  background: transparent;\n}\n.enquiry-detail .field-wrapper.datePickerBox:after {\n  content: '';\n  background: url('calendar.svg') no-repeat;\n  position: absolute;\n  right: 5px;\n  top: 28px;\n  width: 21px;\n  height: 21px;\n  z-index: 0;\n}\n.enquiry-detail .field-wrapper .date-clear {\n  position: absolute;\n  right: 5px;\n  top: 28px;\n  cursor: pointer;\n  color: #0084f6;\n}\n.enquiry-detail .field-wrapper {\n  position: relative;\n  padding-top: 10px;\n}\n.enquiry-detail .field-wrapper.datePickerBox .form-ctrl {\n  cursor: pointer;\n  position: relative;\n  z-index: 1;\n  background: transparent;\n}\n.enquiry-detail .field-wrapper.datePickerBox:after {\n  content: '';\n  background: url('calendar.svg') no-repeat;\n  position: absolute;\n  right: 5px;\n  top: 29px;\n  width: 21px;\n  height: 21px;\n  z-index: 0;\n}\n.field-wrapper.datePickerBox1:after {\n  content: '';\n  background: url(/./assets/images/calendar.svg) no-repeat;\n  position: absolute;\n  right: 30px;\n  top: 28px;\n  width: 21px;\n  height: 21px;\n  z-index: 0;\n}\n.middle-section {\n  padding: 15px;\n}\n.boxPadding15, .middle-left, .middle-left-auto, .middle-right {\n  box-sizing: border-box;\n  padding: 0 15px;\n}\n.middle-left {\n  width: 70%;\n}\n.middle-left-auto {\n  height: 62vh;\n  overflow-y: auto;\n}\n.middle-right {\n  width: 30%;\n  box-sizing: border-box;\n  padding: 0 15px;\n}\n.accordian-section {\n  padding: 15px 10px 0;\n}\n.accordian-section .accordian-heading h4 {\n  font-size: 14px;\n  font-weight: 600;\n  color: #ddd;\n}\n.accordian-section .accordian-heading h4 .open-accor {\n  display: none;\n  float: right;\n  width: 24px;\n  font-size: 24px;\n  height: 24px;\n  text-align: center;\n  border: none;\n  border-radius: 50%;\n  line-height: 24px;\n  margin-right: 4px;\n  margin-top: 3px;\n  cursor: pointer;\n  color: #0084f6;\n}\n.accordian-section .accordian-heading h4 .close-accor {\n  float: right;\n  width: 24px;\n  font-size: 31px;\n  height: 24px;\n  text-align: center;\n  border: none;\n  border-radius: 50%;\n  line-height: 16px;\n  margin-right: 4px;\n  margin-top: 5px;\n  cursor: pointer;\n  color: #0084f6;\n  font-weight: 400;\n}\n.accordian-section .accordian-content {\n  padding-left: 50px;\n}\n.accordian-section .accordian > li {\n  position: relative;\n  padding-bottom: 25px;\n}\n.accordian-section .accordian > li:before {\n  content: '';\n  width: 1px;\n  height: 90.5%;\n  position: absolute;\n  background: #cccccc;\n  z-index: 0;\n  left: 15px;\n  top: 34px;\n  display: block;\n}\n.accordian-section .accordian > li:last-child:before {\n  display: none;\n}\n.accordian-section .accordian > li.active .circle-accor, .accordian-section .accordian > li.data-filled .circle-accor {\n  background: #0084f6;\n  color: #fff;\n  border-color: #0084f6;\n}\n.accordian-section .accordian > li.active .accordian-heading h4, .accordian-section .accordian > li.data-filled .accordian-heading h4 {\n  color: #333;\n}\n.accordian-section .accordian > li.data-filled .accordian-content {\n  display: none;\n}\n.accordian-section .accordian > li.data-filled .accordian-heading h4 {\n  color: #444;\n  border: 1px solid #eaecee;\n  padding: 1px;\n  border-radius: 20px;\n  background: #e6f2fe;\n}\n.accordian-section .accordian > li.data-filled .accordian-heading h4 .open-accor {\n  display: block;\n}\n.accordian-section .accordian > li.data-filled .accordian-heading h4 .close-accor {\n  display: none;\n}\n.accordian-section .accordian > li.data-filled.active .accordian-content {\n  display: block;\n}\n.accordian-section .accordian > li.data-filled.active .accordian-heading h4 .open-accor {\n  display: none;\n}\n.accordian-section .accordian > li.data-filled.active .accordian-heading h4 .close-accor {\n  display: block;\n}\n.more-detail {\n  margin-top: 10px;\n  font-size: 12px;\n}\n.circle-accor {\n  display: inline-block;\n  width: 32px;\n  border-radius: 50%;\n  text-align: center;\n  box-sizing: border-box;\n  padding-top: 4px;\n  font-size: 14px;\n  background: #f0f0f0;\n  height: 32px;\n  border: 1px solid #bbb;\n  margin-right: 5px;\n  color: #ceced1;\n  padding: 0;\n  line-height: 30px;\n}\n.form-type2,\n.form-type1 {\n  max-width: 360px;\n}\n.form-type2 .field-wrapper .invalid-alert,\n.form-type1 .field-wrapper .invalid-alert {\n  color: red;\n  background: rgba(255, 255, 255, 0);\n}\n.paddingR30 {\n  padding-right: 30px;\n}\n.form-type2 .field-wrapper {\n  padding-right: 35px;\n}\n.form-type2 .customSelectWrapper:after {\n  right: 35px;\n}\n.newDate .field-wrapper .date-clear {\n  position: absolute;\n  right: 5px;\n  top: 28px;\n  cursor: pointer;\n  color: #0084f6;\n}\n.newDate .field-wrapper.datePickerBox:after {\n  content: '';\n  background: url('calendar.svg') no-repeat;\n  position: absolute;\n  left: 82% !important;\n  top: 32px !important;\n  width: 21px;\n  height: 21px;\n  z-index: 0;\n}\n.datePickerBox2:after {\n  content: '';\n  background: url('calendar.svg') no-repeat;\n  position: absolute;\n  right: 30px;\n  top: 30px !important;\n  width: 21px;\n  height: 21px;\n  z-index: 0;\n}\n.date-clear {\n  position: absolute;\n  right: -35px;\n  top: 35px;\n  cursor: pointer;\n  color: #0084f6;\n}\n.AdFilter-field .field-wrapper.datePickerBox:after {\n  content: '';\n  background: url('calendar.svg') no-repeat;\n  position: absolute;\n  left: 92% !important;\n  top: 29px !important;\n  width: 21px;\n  height: 21px;\n  z-index: 0;\n}\n.questionInfo {\n  position: relative;\n  left: 100%;\n  top: -17px;\n  height: 20px;\n  width: 20px;\n  z-index: 2;\n}\n.questionInfo .tooltip-box-field {\n  color: black;\n  min-height: 22px;\n  width: 179px;\n}\n.questionInfo .qInfoIcon {\n  margin-left: 5px;\n  width: 20px;\n  height: 20px;\n  border: 1px solid #ccc;\n  border-radius: 50%;\n  display: block;\n  text-align: center;\n  box-sizing: border-box;\n  line-height: 20px;\n  font-weight: 600;\n  font-size: 12px;\n  cursor: pointer;\n  box-shadow: 0px 0px 1px 0px #ccc inset;\n  color: #888;\n  transition: all 0.2s linear;\n}\n.questionInfo .qInfoIcon:hover {\n  border-color: #0060A3;\n  box-shadow: 0px 0px 1px 0px #0060A3 inset;\n}\n.create-institution {\n  position: absolute;\n  right: 66px;\n  bottom: 4px;\n  font-size: 25px;\n}\n.shadow-box {\n  box-shadow: 0px 2px 2px #7d7d7d;\n  padding: 7px;\n  border-radius: 2px;\n  background: #eff7ff;\n}\n.last-added-info {\n  font-size: 12px;\n}\n.last-added-info ul li {\n  line-height: normal;\n  padding: 2px 0;\n  display: inline-block;\n  width: 100%;\n  vertical-align: top;\n}\n.last-added-info strong {\n  font-weight: 600;\n  color: #28384a;\n}\n.last-added-info .view-details {\n  float: right;\n  font-size: 11px;\n}\n.last-added-info .view-details a:hover {\n  text-decoration: underline;\n}\n.last-added-info .enquiry-time {\n  float: right;\n  font-size: 10px;\n  color: #28384a;\n  margin-top: 4px;\n}\n/*=======================Right bottom lite shadow box======================*/\n.box-shadow-lite {\n  box-shadow: 0px 1px 2px 0px #ccc;\n  padding: 10px 0 10px 10px;\n  border-top: 1px solid #e8e8e8;\n}\n.box-shadow-lite .field-wrapper {\n  padding-right: 40px;\n}\n.box-shadow-lite .field-wrapper .open-accor {\n  width: 17px;\n  font-size: 17px;\n  height: 17px;\n  line-height: 18px;\n  position: absolute;\n  right: 4px;\n  top: 19px;\n  z-index: 2;\n}\n.box-shadow-lite .field-wrapper:first-child {\n  margin-top: -2px;\n}\n.common-right-section {\n  margin-top: 30px;\n}\n.common-right-section h4 {\n  margin-bottom: 7px;\n  color: #28383A;\n  font-size: 16px;\n}\n.common-right-section h4 strong {\n  font-weight: 600;\n}\n.common-right-section .clear-detail {\n  margin-top: 10px;\n  font-size: 12px;\n  margin-bottom: 10px;\n}\n.follow-up-date-icon {\n  position: absolute;\n  position: absolute;\n  right: 7px;\n  top: 20px;\n  cursor: pointer;\n}\n.follow-up-date-icon img {\n  width: 21px;\n}\n/* popUp Scss */\n.popupWrapper {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  bottom: 0;\n  top: 0px;\n  right: 0;\n  left: 0px;\n  background: rgba(230, 230, 230, 0.5);\n  z-index: 100;\n  visibility: hidden;\n  opacity: 0;\n  transition: all 0.1s ease-in;\n}\n.popupWrapper .popup {\n  max-width: 850px;\n  width: 100%;\n  height: auto;\n  left: 0;\n  right: 0;\n  top: 5%;\n  bottom: 0;\n  margin: auto;\n}\n.popup-wrapper {\n  padding: 20px 20px;\n  box-sizing: border-box;\n  box-shadow: 1px 8px 20px 5px #9c9c9c;\n  transition: unset;\n  background: #fff;\n}\n.popup-wrapper h2 {\n  margin-bottom: 15px;\n  font-size: 14px;\n}\n.popup-wrapper h4 {\n  margin: 25px 0 15px;\n  font-weight: 600;\n}\n.closePopup {\n  right: 10px;\n  top: 10px;\n  font-size: 18px;\n  cursor: pointer;\n  line-height: 20px;\n  width: 26px;\n  height: 26px;\n  box-sizing: border-box;\n  text-align: center;\n  padding-top: 3px;\n  display: none;\n}\n.closePopup.bottomRight {\n  bottom: 2px;\n  top: auto;\n  left: auto;\n  right: 0;\n}\n.closePopup.topLeft {\n  left: 0;\n  right: auto;\n  top: 1px;\n  bottom: auto;\n}\n.closePopup.bottomLeft {\n  left: 0;\n  right: auto;\n  bottom: 2px;\n  top: auto;\n}\n.closePopup svg {\n  width: 16px;\n}\n.closePopup svg .cls-1 {\n  stroke: #c1c1c1;\n  stroke-width: 2px;\n}\n.closePopup:hover .cls-1 {\n  stroke: #0084f6;\n}\n.popup-content {\n  height: 100%;\n  overflow: hidden;\n  visibility: visible;\n}\n.fadeIn {\n  opacity: 1;\n  visibility: visible;\n}\n.popupWrapperMob {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  bottom: 0;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 100;\n  background: rgba(0, 0, 0, 0.5);\n  visibility: hidden;\n  transition: all 0.1s ease-in;\n}\n.popupWrapperMob .closePopup {\n  right: -25px;\n  top: -27px;\n  display: block;\n}\n.popup-mob {\n  left: 0;\n  width: 100%;\n  max-height: 70%;\n  background: #fff;\n  padding: 30px;\n  box-sizing: border-box;\n  height: 100%;\n  overflow: auto;\n  z-index: 1;\n  bottom: -70%;\n  transition: all 0.1s ease-in;\n}\n.popupWrapperMob.showPopupMob {\n  z-index: 100;\n  visibility: visible;\n  opacity: 1;\n}\n.popupWrapperMob.showPopupMob .popup-mob {\n  bottom: 0;\n}\n/*=========================================registration popup form css==================*/\n.registration-fee-form {\n  overflow: hidden;\n}\n.print-output-section {\n  margin: 35px 0 25px;\n  border-top: 1px solid #deeaee;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  border-bottom: 1px solid #deeaee;\n  text-align: center;\n  font-size: 0;\n}\n.print-output-section li {\n  display: inline-block;\n  padding: 0 15px;\n  box-sizing: border-box;\n  width: 25%;\n  border-right: 1px solid #deeaee;\n  font-size: 15px;\n  cursor: pointer;\n  color: #929292;\n}\n.print-output-section li:last-child {\n  border-right: 0;\n}\n.print-output-section li:hover {\n  color: #0084f6;\n}\n.print-output-section li svg {\n  width: 30px;\n  display: inline-block;\n  vertical-align: middle;\n  margin-right: 8px;\n}\n.print-output-section li svg .cls-1 {\n  stroke: none;\n  stroke: #929292;\n}\n.print-output-section li.svg-icon .cls-1 {\n  stroke: none;\n}\n.print-output-section li.svg-icon .cls-2 {\n  stroke: #929292;\n}\n.print-output-section li.svg-icon:hover .cls-2 {\n  stroke: #0084f6;\n}\n.print-output-section li:first-child:hover svg .cls-1 {\n  stroke: #0084f6;\n}\n/*=======================================confirmation =========================*/\n.confirmation-popup-content {\n  line-height: normal;\n}\n.confirmation-popup-content > div {\n  margin-bottom: 10px;\n}\n.confirmation-popup-content > div:first-child {\n  margin-bottom: 20px;\n}\n.confirmation-popup-content > div a,\n.confirmation-popup-content > div p {\n  font-size: 16px;\n  line-height: 22px;\n}\n.confirmation-popup-content > div a {\n  font-weight: 600;\n}\n.confirmation-popup-content > div a:hover {\n  text-decoration: underline;\n}\n.confirmation-popup-content strong {\n  font-weight: 600;\n}\n.confirmation-popup-content .add-form-btns a {\n  margin-left: 20px;\n  font-size: 14px;\n}\n.popup-btn {\n  margin-top: 20px;\n}\n.popup-btn .btn {\n  font-size: 16px;\n  height: 40px;\n  /* color: #333; */\n}\n.popup-btn .btn.redBtn {\n  color: #fff;\n  min-width: 160px;\n}\n.add-btn {\n  border: 1px solid #3a66fa;\n  border-radius: 4px;\n  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);\n  padding: 4px 10px;\n  background: white;\n  color: #1283f4;\n  font-weight: 600;\n  height: 30px;\n  margin-left: 15px;\n}\n.update-enquiry-form table th {\n  text-align: left;\n  padding: 10px;\n  font-size: 14px;\n}\n.uploadBtn {\n  border: 1px solid #3a66fa;\n  border-radius: 4px;\n  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);\n  padding: 4px 10px;\n  background: white;\n  color: #1283f4;\n  font-weight: 600;\n  height: 30px;\n}\n.update-enquiry-form table td {\n  text-align: left;\n  padding: 10px;\n  font-size: 14px;\n}\n.enquiry-update-history {\n  max-height: 110px;\n  overflow: auto;\n}\n.update-enquiry-form .row {\n  margin: 10px -15px 20px;\n}\n.confirmation-popup-content:after {\n  content: '';\n  height: 8px;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  background: #8bc34a;\n}\n.institute-editor {\n  overflow-x: hidden;\n}\n.institute-editor .row {\n  margin: 0 0 5px 0;\n}\n.institute-editor .input-section {\n  background: #efefef;\n  padding: 10px;\n}\n.institute-editor .input-section .field-wrapper {\n  padding-top: 0;\n}\n.institute-editor .input-section .field-wrapper .form-ctrl {\n  background: white;\n}\n.institute-editor .input-section .btn-grp {\n  padding-top: 16px;\n}\n.institute-editor .cursor-icon {\n  cursor: pointer;\n}\n.row.extraMargin {\n  margin: 10px -15px 20px;\n}\n@media only screen and (max-width: 767px) {\n  .middle-left {\n    width: 100%;\n  }\n  .middle-right {\n    width: 100%;\n    padding: 0;\n  }\n  .accordian-section {\n    padding: 15px 0px 0;\n  }\n  .accordian-section .accordian-content {\n    padding-left: 40px;\n  }\n}\n.middle-bottom {\n  position: absolute;\n  bottom: 0px;\n  width: 84.5%;\n  left: 14.5%;\n  background: #f4f5f7;\n  padding: 10px;\n  border-top: 1px solid rgba(10, 10, 10, 0.3);\n  z-index: 100;\n  /* margin-top: 10px; */\n}\n.countryCallingCode {\n  float: left;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY3NzL2NvbW1vbi92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9sZWFkcy9lbnF1aXJ5LWFkZC9lbnF1aXJ5LWFkZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZQSx1RUFBQTtBQVdBOztFQUtnQixrQkFBa0I7RUFDbEIsaUJBQWlCO0FDeEJqQztBRGtCQTtFQVNnQiwwQkFBMEI7RUFDMUIsZUFBZTtBQ3ZCL0I7QURhQTtFQWdCNEIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsV0FBVztFQUNYLGtCQUFrQjtFQUNsQix1QkFBdUI7QUN6Qm5EO0FESUE7RUF1QmdDLFVBQVU7QUN2QjFDO0FEQUE7RUEwQmdDLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtBQ3RCdEQ7QURQQTtFQWdDb0MsVUFBVTtBQ3JCOUM7QURYQTtFQW9DZ0MsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLE9BQU87RUFDUCxNQUFNO0VBQ04sa0JBQWtCO0FDckJsRDtBRHJCQTtFQThDNEIsY0FsRGI7RUFtRGEsZUFBZTtBQ3JCM0M7QUQ4QkE7RUFDSSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxnQkFBZ0I7QUMzQnBCO0FEdUJBO0VBTU0sbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIseUJBQXlCO0FDekIvQjtBRFVBO0VBaUJRLFVBQVU7RUFDVixrQkFBa0I7QUN2QjFCO0FES0E7RUFzQk0sYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0FDdkI1QjtBRExBO0VBOEJRLGFB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LGFBQWE7RUFDYiwyQ0FBMkM7RUFDM0MsWUFBWTtFQUNaLHNCQUFBO0FBb0hGO0FBbEhBO0VBQ0ksV0FBVztBQXFIZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGVhZHMvZW5xdWlyeS1hZGQvZW5xdWlyeS1hZGQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkcHVsbC1MOiBsZWZ0O1xuJHB1bGwtUjogcmlnaHQ7XG4kcHVsbC1ub25lOiBub25lO1xuJGZ1bGwtd2lkdGg6IDEwMCU7XG4kYm9yZGVyLWJveDogYm9yZGVyLWJveDtcbiRib3JkZXItY29sb3I6ICNkZWVhZWU7XG4kYmctd2hpdGU6ICNmZmY7XG4kZXJyb3ItY29sb3I6ICNmZjAwMDA7XG4kY29tbW9uLWJsdWU6ICMwMDg0ZjY7XG4kcHJpbWFyeS1jb2xvcjogIzMzMztcbiRib3JkZXItY29tbW9uOiNlYWVhZWI7XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1oZWFkZXIgY29sb3JzPT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4kaGVhZGVyLWJnOiMwMDYwQTM7XG4kaGVhZGVyLWJvcmRlcjojZWFlYWViO1xuJGxlZnRNZW51Qmc6I2ZhZmFmYTtcbiRsZWZ0TWVudUhvdmVyQmc6IzAwODRmNjtcbiRsZWZ0TWVudVRleHRIb3ZlckNvbG9yOiNmZmY7XG4kcmVkQnRuOiNmNDQzMzY7XG4kYm9yZGVyY2NjOiNjY2M7XG4kbGlnaHRCbHVlOiNlZmY3ZmY7XG4kdGFibGVIZWFkaW5nQmdDb2xvcjogIzAwNGE3ZTtcbi50YWJsZS1mb3JtYXQtZmlyc3Qge1xuICAgIC50YWJsZS1yZXNwb25zaXZlIHtcbiAgICAgICAgdGFibGUge1xuICAgICAgICAgICAgdGgsXG4gICAgICAgICAgICB0ZCB7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGgge1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRib2R5IHtcbiAgICAgICAgICAgICAgICB0ciB7XG4gICAgICAgICAgICAgICAgICAgIHRkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maWVsZC1jaGVja2JveC13cmFwcGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGluaXRpYWw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mb3JtLWNoZWNrYm94IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZvcm0tY2hlY2tib3grbGFiZWwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA3cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6YWZ0ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuZmEtdHJhc2gtbyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRyZWRCdG47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4udGFibGUtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAuaGVhZGluZy1jb250YWluZXIge1xuICAgICAgYmFja2dyb3VuZDogI2UwZWFlYztcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICAgIC5oZWFkaW5nLWl0ZW0ge1xuICAgICAgICB3aWR0aDogMTAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgfVxuICAgIC52YWx1ZS1vdXRlci1jb250YWluZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBtaW4taGVpZ2h0OiA1M3ZoO1xuICAgICAgbWF4LWhlaWdodDogNTR2aDtcbiAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgLnZhbHVlLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgICAgIC52YWx1ZS1pdGVtIHtcbiAgICAgICAgICB3aWR0aDogMTAlO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSIsIkBpbXBvcnQgXCIuL3NyYy9hc3NldHMvY3NzL2NvbW1vbi92YXJpYWJsZXMuc2Nzc1wiO1xuLmhvbWV3cmFwIHtcbiAgICAvLyBtYXgtaGVpZ2h0OiAxMDB2aDtcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiA3cHg7XG4gICAgICAgIGhlaWdodDogN3B4O1xuICAgIH1cbiAgICAuc2Nyb2xsLWNvbnRlbnQge1xuICAgICAgICAvLyBtYXgtaGVpZ2h0OiA5MHZoO1xuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICAgIC8vIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gICAgfVxufVxuKntcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuLm11bHRpc2VsZWN0LXdyYXBwZXIge1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkYm9yZGVyLWNvbG9yO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAxMDA7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgbWluLXdpZHRoOiA0MDBweDtcbiAgICBtaW4taGVpZ2h0OiA1MHB4O1xuICAgIHRvcDogMHB4O1xuICAgIC5tdWx0aXNlbGVjdC13cmFwcGVyLWlubmVyIHtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgdWwge1xuICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDBweCAwcHggNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uaW5zdGl0dXRlLXRhYmxlIHtcbiAgICB0YWJsZSB7XG4gICAgICAgIHRyIHtcbiAgICAgICAgICAgIHRoIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAyMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRkIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJi5lZGl0LXZpZXctYnRuIHtcbiAgICAgICAgICAgICAgICAgICAgZGl2IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZmllbGQtd3JhcHBlciB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgICAgICAuaW52YWxpZC1hbGVydCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZmllbGQtd3JhcHBlciAuZm9ybS1jdHJsIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgZm9udDogNDAwIDEycHggJ09wZW4gc2Fucycsc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMHB4IDBweCAwcHggNnB4O1xuICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjMDA4NGY2O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM2cHg7XG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZmllbGQtd3JhcHBlciBsYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAyMnB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNzc3O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZmllbGQtd3JhcHBlciAuZm9ybS1jdHJsOmZvY3VzIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTJweCAwIDZweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4ICRjb21tb24tYmx1ZTtcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5maWVsZC13cmFwcGVyLmhhcy12YWx1ZSAuZm9ybS1jdHJsK2xhYmVsLFxuICAgICAgICAgICAgICAgIC5maWVsZC13cmFwcGVyIC5mb3JtLWN0cmw6Zm9jdXMrbGFiZWwge1xuICAgICAgICAgICAgICAgICAgICBmb250OiA0MDAgMTJweCAnT3BlbiBzYW5zJyxzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDZweDtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZmllbGQtd3JhcHBlci5oYXMtdmFsdWUgLmZvcm0tY3RybCtsYWJlbCxcbiAgICAgICAgICAgICAgICAuZmllbGQtd3JhcHBlciAuZm9ybS1jdHJsOmZvY3VzK2xhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRjb21tb24tYmx1ZTtcbiAgICAgICAgICAgICAgICAgICAgZm9udDogNDAwIDEycHggJ09wZW4gc2Fucycsc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5hZGQtZWRpdCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGkge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDFyZW07XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyAvL21hcmdpbi1yaWdodDogNHB4O1xuICAgIH1cbiAgICBzcGFuIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIH1cbiAgICAuZXhwZW5kLWJveCB7XG4gICAgICAgIGkge1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYSB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG59XG5cbi5zb3VyY2VJIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAtMzVweDtcbiAgICBib3R0b206IDVweDtcbn1cblxuLmljb25QbHVzIHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgd2lkdGg6IDI0cHg7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGhlaWdodDogMjRweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgIG1hcmdpbi10b3A6IDNweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6ICMwMDg0ZjY7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMDA4NGY2O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxufVxuXG4uZW5xdWlyeS1kZXRhaWwge1xuICAgIC5maWVsZC13cmFwcGVyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgJi5kYXRlUGlja2VyQm94IHtcbiAgICAgICAgICAgIC5mb3JtLWN0cmwge1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvY2FsZW5kYXIuc3ZnXCIpIG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDVweDtcbiAgICAgICAgICAgICAgICB0b3A6IDI4cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDIxcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMXB4O1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmRhdGUtY2xlYXIge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgcmlnaHQ6IDVweDtcbiAgICAgICAgICAgIHRvcDogMjhweDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGNvbG9yOiAjMDA4NGY2O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5maWVsZC13cmFwcGVyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgJi5kYXRlUGlja2VyQm94IHtcbiAgICAgICAgICAgIC5mb3JtLWN0cmwge1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9jYWxlbmRhci5zdmcnKSBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiA1cHg7XG4gICAgICAgICAgICAgICAgdG9wOiAyOXB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyMXB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjFweDtcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuLmZpZWxkLXdyYXBwZXIuZGF0ZVBpY2tlckJveDE6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGJhY2tncm91bmQ6IHVybCgvLi9hc3NldHMvaW1hZ2VzL2NhbGVuZGFyLnN2Zykgbm8tcmVwZWF0O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMzBweDtcbiAgICB0b3A6IDI4cHg7XG4gICAgd2lkdGg6IDIxcHg7XG4gICAgaGVpZ2h0OiAyMXB4O1xuICAgIHotaW5kZXg6IDA7XG59XG4ubWlkZGxlLXNlY3Rpb24ge1xuICAgIHBhZGRpbmc6IDE1cHg7XG59XG5cbi5ib3hQYWRkaW5nMTUge1xuICAgIGJveC1zaXppbmc6ICRib3JkZXItYm94O1xuICAgIHBhZGRpbmc6IDAgMTVweDtcbn1cblxuLm1pZGRsZS1sZWZ0IHtcbiAgICB3aWR0aDogNzAlO1xuICAgIEBleHRlbmQgLmJveFBhZGRpbmcxNTtcbn1cbi5taWRkbGUtbGVmdC1hdXRvIHtcbiAgICBAZXh0ZW5kIC5ib3hQYWRkaW5nMTU7XG4gICAgaGVpZ2h0OiA2MnZoO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5taWRkbGUtcmlnaHQge1xuICAgIHdpZHRoOiAzMCU7XG4gICAgYm94LXNpemluZzogJGJvcmRlci1ib3g7XG4gICAgcGFkZGluZzogMCAxNXB4O1xuICAgIEBleHRlbmQgLmJveFBhZGRpbmcxNTtcbn1cblxuLmFjY29yZGlhbi1zZWN0aW9uIHtcbiAgICBwYWRkaW5nOiAxNXB4IDEwcHggMDtcbiAgICAuYWNjb3JkaWFuLWhlYWRpbmcge1xuICAgICAgICBoNCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgY29sb3I6ICNkZGQ7XG4gICAgICAgICAgICAub3Blbi1hY2NvciB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICBmbG9hdDogJHB1bGwtUjtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjRweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDNweDtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgY29sb3I6ICRjb21tb24tYmx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jbG9zZS1hY2NvciB7XG4gICAgICAgICAgICAgICAgLy9kaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgIGZsb2F0OiAkcHVsbC1SO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzFweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICBjb2xvcjogJGNvbW1vbi1ibHVlO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmFjY29yZGlhbi1jb250ZW50IHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xuICAgIH1cbiAgICAuYWNjb3JkaWFuIHtcbiAgICAgICAgJj5saSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjVweDtcbiAgICAgICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgICAgICB3aWR0aDogMXB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogOTAuNSU7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNjY2NjY2M7XG4gICAgICAgICAgICAgICAgei1pbmRleDogMDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAxNXB4O1xuICAgICAgICAgICAgICAgIHRvcDogMzRweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICY6bGFzdC1jaGlsZDpiZWZvcmUge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmLmFjdGl2ZSxcbiAgICAgICAgICAgICYuZGF0YS1maWxsZWQge1xuICAgICAgICAgICAgICAgIC5jaXJjbGUtYWNjb3Ige1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkbGVmdE1lbnVIb3ZlckJnO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGJnLXdoaXRlO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICRsZWZ0TWVudUhvdmVyQmc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5hY2NvcmRpYW4taGVhZGluZyB7XG4gICAgICAgICAgICAgICAgICAgIGg0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJi5kYXRhLWZpbGxlZCB7XG4gICAgICAgICAgICAgICAgLmFjY29yZGlhbi1jb250ZW50IHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmFjY29yZGlhbi1oZWFkaW5nIHtcbiAgICAgICAgICAgICAgICAgICAgaDQge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM0NDQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWFlY2VlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlNmYyZmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAub3Blbi1hY2NvciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuY2xvc2UtYWNjb3Ige1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmLmRhdGEtZmlsbGVkLmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgLmFjY29yZGlhbi1jb250ZW50IHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5hY2NvcmRpYW4taGVhZGluZyB7XG4gICAgICAgICAgICAgICAgICAgIGg0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC5vcGVuLWFjY29yIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNsb3NlLWFjY29yIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLm1vcmUtZGV0YWlsIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmNpcmNsZS1hY2NvciB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAzMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwYWRkaW5nLXRvcDogNHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xuICAgIGhlaWdodDogMzJweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYmJiO1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgIGNvbG9yOiAjY2VjZWQxO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG59XG5cbi5mb3JtLXR5cGUyLFxuLmZvcm0tdHlwZTEge1xuICAgIG1heC13aWR0aDogMzYwcHg7XG4gICAgLmZpZWxkLXdyYXBwZXIge1xuICAgICAgICAuaW52YWxpZC1hbGVydCB7XG4gICAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnBhZGRpbmdSMzAge1xuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG59XG5cbi5mb3JtLXR5cGUyIHtcbiAgICAuZmllbGQtd3JhcHBlciB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDM1cHg7XG4gICAgfVxuICAgIC5jdXN0b21TZWxlY3RXcmFwcGVyOmFmdGVyIHtcbiAgICAgICAgcmlnaHQ6IDM1cHg7XG4gICAgfVxufVxuXG4ubmV3RGF0ZSB7XG4gICAgLmZpZWxkLXdyYXBwZXIge1xuICAgICAgICAvLyBtYXJnaW46IDE1cHggMDtcbiAgICAgICAgLmRhdGUtY2xlYXIge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgcmlnaHQ6IDVweDtcbiAgICAgICAgICAgIHRvcDogMjhweDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGNvbG9yOiAjMDA4NGY2O1xuICAgICAgICB9XG4gICAgICAgICYuZGF0ZVBpY2tlckJveCB7XG4gICAgICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvY2FsZW5kYXIuc3ZnJykgbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBsZWZ0OiA4MiUgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB0b3A6IDMycHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjFweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIxcHg7XG4gICAgICAgICAgICAgICAgei1pbmRleDogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbi5kYXRlUGlja2VyQm94MiB7XG4gICAgJjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvY2FsZW5kYXIuc3ZnJykgbm8tcmVwZWF0O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIC8vIGxlZnQ6IDcxJSAhaW1wb3J0YW50O1xuICAgICAgICByaWdodDogMzBweDtcbiAgICAgICAgdG9wOiAzMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIHdpZHRoOiAyMXB4O1xuICAgICAgICBoZWlnaHQ6IDIxcHg7XG4gICAgICAgIHotaW5kZXg6IDA7XG4gICAgfVxufVxuLmRhdGUtY2xlYXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogLTM1cHg7XG4gICAgdG9wOiAzNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogIzAwODRmNjtcbn1cbi5BZEZpbHRlci1maWVsZCB7XG4gICAgLmZpZWxkLXdyYXBwZXIge1xuICAgICAgICAvLyBtYXJnaW46IDE1cHggMDtcbiAgICAgICBcbiAgICAgICAgJi5kYXRlUGlja2VyQm94IHtcbiAgICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9jYWxlbmRhci5zdmcnKSBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDkyJSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIHRvcDogMjlweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyMXB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjFweDtcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4ucXVlc3Rpb25JbmZvIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogMTAwJTtcbiAgICB0b3A6IC0xN3B4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICB3aWR0aDogMjBweDtcbiAgICB6LWluZGV4OiAyO1xuICAgIC50b29sdGlwLWJveC1maWVsZCB7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgbWluLWhlaWdodDogMjJweDtcbiAgICAgICAgd2lkdGg6IDE3OXB4O1xuICAgIH1cbiAgICAucUluZm9JY29uIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDBweCAjY2NjIGluc2V0O1xuICAgICAgICBjb2xvcjogIzg4ODtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJGhlYWRlci1iZztcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDBweCAkaGVhZGVyLWJnIGluc2V0O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uY3JlYXRlLWluc3RpdHV0aW9uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDY2cHg7XG4gICAgYm90dG9tOiA0cHg7XG4gICAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4uc2hhZG93LWJveCB7XG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAycHggIzdkN2Q3ZDtcbiAgICBwYWRkaW5nOiA3cHg7IC8vIGJhY2tncm91bmQ6ICRoZWFkZXItYmc7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIGJhY2tncm91bmQ6ICRsaWdodEJsdWU7XG59XG5cbi5sYXN0LWFkZGVkLWluZm8ge1xuICAgIHVsIHtcbiAgICAgICAgbGkge1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDJweCAwO1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBzdHJvbmcge1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBjb2xvcjogIzI4Mzg0YTtcbiAgICB9XG4gICAgLnZpZXctZGV0YWlscyB7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICBhIHtcbiAgICAgICAgICAgIC8vIGNvbG9yOiAjNzc3Nzc3O1xuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmVucXVpcnktdGltZSB7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICBjb2xvcjogIzI4Mzg0YTtcbiAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xuICAgIH1cbn1cblxuLyo9PT09PT09PT09PT09PT09PT09PT09PVJpZ2h0IGJvdHRvbSBsaXRlIHNoYWRvdyBib3g9PT09PT09PT09PT09PT09PT09PT09Ki9cblxuLmJveC1zaGFkb3ctbGl0ZSB7XG4gICAgYm94LXNoYWRvdzogMHB4IDFweCAycHggMHB4ICNjY2M7XG4gICAgcGFkZGluZzogMTBweCAwIDEwcHggMTBweDtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2U4ZThlODtcbiAgICAuZmllbGQtd3JhcHBlciB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG4gICAgICAgIC5vcGVuLWFjY29yIHtcbiAgICAgICAgICAgIHdpZHRoOiAxN3B4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxN3B4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICByaWdodDogNHB4O1xuICAgICAgICAgICAgdG9wOiAxOXB4O1xuICAgICAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgfVxuICAgICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC0ycHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5jb21tb24tcmlnaHQtc2VjdGlvbiB7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBoNCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDdweDtcbiAgICAgICAgY29sb3I6ICMyODM4M0E7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgc3Ryb25nIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmNsZWFyLWRldGFpbCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB9XG59XG5cbi5mb2xsb3ctdXAtZGF0ZS1pY29uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiA3cHg7XG4gICAgdG9wOiAyMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBpbWcge1xuICAgICAgICB3aWR0aDogMjFweDtcbiAgICB9XG59XG5cbi8qIHBvcFVwIFNjc3MgKi9cblxuLnBvcHVwV3JhcHBlciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3R0b206IDA7XG4gICAgdG9wOiAwcHg7XG4gICAgcmlnaHQ6IDA7XG4gICAgbGVmdDogMHB4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjMwLCAyMzAsIDIzMCwgMC41KTtcbiAgICB6LWluZGV4OiAxMDA7IC8vIGRpc3BsYXk6IG5vbmU7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluO1xuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1pbjtcbiAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1pbjtcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UtaW47XG4gICAgLnBvcHVwIHtcbiAgICAgICAgbWF4LXdpZHRoOiA4NTBweDsgLy8gbWF4LWhlaWdodDogMzUwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB0b3A6IDUlO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIG1hcmdpbjogYXV0bzsgLy8gdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIH1cbn1cblxuLnBvcHVwLXdyYXBwZXIge1xuICAgIHBhZGRpbmc6IDIwcHggMjBweDsgLy8gaGVpZ2h0OiAxMDAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm94LXNoYWRvdzogMXB4IDhweCAyMHB4IDVweCAjOWM5YzljO1xuICAgIHRyYW5zaXRpb246IHVuc2V0O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgaDIge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuICAgIGg0IHtcbiAgICAgICAgbWFyZ2luOiAyNXB4IDAgMTVweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG59XG5cbi5jbG9zZVBvcHVwIHtcbiAgICByaWdodDogMTBweDtcbiAgICB0b3A6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICB3aWR0aDogMjZweDtcbiAgICBoZWlnaHQ6IDI2cHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDNweDtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgICYuYm90dG9tUmlnaHQge1xuICAgICAgICBib3R0b206IDJweDtcbiAgICAgICAgdG9wOiBhdXRvO1xuICAgICAgICBsZWZ0OiBhdXRvO1xuICAgICAgICByaWdodDogMDtcbiAgICB9XG4gICAgJi50b3BMZWZ0IHtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICAgIHRvcDogMXB4O1xuICAgICAgICBib3R0b206IGF1dG87XG4gICAgfVxuICAgICYuYm90dG9tTGVmdCB7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgICBib3R0b206IDJweDtcbiAgICAgICAgdG9wOiBhdXRvO1xuICAgIH1cbiAgICBzdmcge1xuICAgICAgICB3aWR0aDogMTZweDtcbiAgICAgICAgLmNscy0xIHtcbiAgICAgICAgICAgIHN0cm9rZTogI2MxYzFjMTtcbiAgICAgICAgICAgIHN0cm9rZS13aWR0aDogMnB4O1xuICAgICAgICB9XG4gICAgfVxuICAgICY6aG92ZXIge1xuICAgICAgICAuY2xzLTEge1xuICAgICAgICAgICAgc3Ryb2tlOiAkY29tbW9uLWJsdWU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5wb3B1cC1jb250ZW50IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4uZmFkZUluIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PWNzcyBmb3IgbW9iIHBvcHVwXG4ucG9wdXBXcmFwcGVyTW9iIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvdHRvbTogMDtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgbGVmdDogMDtcbiAgICB6LWluZGV4OiAxMDA7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjsgLy8gb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UtaW47XG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluO1xuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluO1xuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UtaW47XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1pbjtcbiAgICAuY2xvc2VQb3B1cCB7XG4gICAgICAgIHJpZ2h0OiAtMjVweDtcbiAgICAgICAgdG9wOiAtMjdweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxufVxuXG4ucG9wdXAtbW9iIHtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC1oZWlnaHQ6IDcwJTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgei1pbmRleDogMTtcbiAgICBib3R0b206IC03MCU7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluO1xuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1pbjtcbiAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1pbjtcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UtaW47XG59XG5cbi5wb3B1cFdyYXBwZXJNb2Iuc2hvd1BvcHVwTW9iIHtcbiAgICB6LWluZGV4OiAxMDA7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4ucG9wdXBXcmFwcGVyTW9iLnNob3dQb3B1cE1vYiAucG9wdXAtbW9iIHtcbiAgICBib3R0b206IDA7XG59XG5cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1yZWdpc3RyYXRpb24gcG9wdXAgZm9ybSBjc3M9PT09PT09PT09PT09PT09PT0qL1xuXG4ucmVnaXN0cmF0aW9uLWZlZS1mb3JtIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ucHJpbnQtb3V0cHV0LXNlY3Rpb24ge1xuICAgIG1hcmdpbjogMzVweCAwIDI1cHg7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICRib3JkZXItY29sb3I7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRib3JkZXItY29sb3I7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMDtcbiAgICBsaSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgcGFkZGluZzogMCAxNXB4O1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICB3aWR0aDogMjUlO1xuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAkYm9yZGVyLWNvbG9yO1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgY29sb3I6ICM5MjkyOTI7XG4gICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IDA7XG4gICAgICAgIH1cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBjb2xvcjogJGNvbW1vbi1ibHVlO1xuICAgICAgICB9XG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgICAgICAgIC5jbHMtMSB7XG4gICAgICAgICAgICAgICAgc3Ryb2tlOiBub25lO1xuICAgICAgICAgICAgICAgIHN0cm9rZTogIzkyOTI5MjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmLnN2Zy1pY29uIHtcbiAgICAgICAgICAgIC5jbHMtMSB7XG4gICAgICAgICAgICAgICAgc3Ryb2tlOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNscy0yIHtcbiAgICAgICAgICAgICAgICBzdHJva2U6ICM5MjkyOTI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAuY2xzLTIge1xuICAgICAgICAgICAgICAgICAgICBzdHJva2U6ICRjb21tb24tYmx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJjpmaXJzdC1jaGlsZDpob3ZlciB7XG4gICAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgICAgIC5jbHMtMSB7XG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZTogJGNvbW1vbi1ibHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1jb25maXJtYXRpb24gPT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cbi5jb25maXJtYXRpb24tcG9wdXAtY29udGVudCB7XG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICAmPmRpdiB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgfVxuICAgICAgICBhLFxuICAgICAgICBwIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgICAgICB9XG4gICAgICAgIGEge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgfVxuICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0cm9uZyB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgfVxuICAgIC5hZGQtZm9ybS1idG5zIHtcbiAgICAgICAgYSB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnBvcHVwLWJ0biB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAuYnRuIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIC8qIGNvbG9yOiAjMzMzOyAqL1xuICAgICAgICAmLnJlZEJ0biB7XG4gICAgICAgICAgICBjb2xvcjogJGJnLXdoaXRlO1xuICAgICAgICAgICAgbWluLXdpZHRoOiAxNjBweDtcbiAgICAgICAgfVxuICAgIH1cbn1cbi5hZGQtYnRue1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzYTY2ZmE7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDNweCA2cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gICAgcGFkZGluZzogNHB4IDEwcHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgY29sb3I6ICMxMjgzZjQ7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG4udXBkYXRlLWVucXVpcnktZm9ybSB0YWJsZSB0aCB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnVwbG9hZEJ0bntcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjM2E2NmZhO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAzcHggNnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICAgIHBhZGRpbmc6IDRweCAxMHB4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGNvbG9yOiAjMTI4M2Y0O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgaGVpZ2h0OiAzMHB4O1xufVxuLnVwZGF0ZS1lbnF1aXJ5LWZvcm0gdGFibGUgdGQge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5lbnF1aXJ5LXVwZGF0ZS1oaXN0b3J5IHtcbiAgICBtYXgtaGVpZ2h0OiAxMTBweDtcbiAgICBvdmVyZmxvdzogYXV0bztcbn1cblxuLnVwZGF0ZS1lbnF1aXJ5LWZvcm0ge1xuICAgIC5yb3cge1xuICAgICAgICBtYXJnaW46IDEwcHggLTE1cHggMjBweDtcbiAgICB9XG59XG5cbi5jb25maXJtYXRpb24tcG9wdXAtY29udGVudDphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgaGVpZ2h0OiA4cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6ICM4YmMzNGE7XG59XG5cbi5pbnN0aXR1dGUtZWRpdG9yIHtcbiAgICAvLyBwYWRkaW5nOiAxMHB4O1xuICAgIC5yb3cge1xuICAgICAgICBtYXJnaW46IDAgMCA1cHggMDtcbiAgICB9XG4gICAgLmlucHV0LXNlY3Rpb24ge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAuZmllbGQtd3JhcHBlciB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMDtcbiAgICAgICAgICAgIC5mb3JtLWN0cmwge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5idG4tZ3JwIHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxNnB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAuY3Vyc29yLWljb24ge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxufVxuXG4ucm93LmV4dHJhTWFyZ2luIHtcbiAgICBtYXJnaW46IDEwcHggLTE1cHggMjBweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgIC5taWRkbGUtbGVmdCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICAubWlkZGxlLXJpZ2h0IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxuICAgIC5hY2NvcmRpYW4tc2VjdGlvbiB7XG4gICAgICAgIHBhZGRpbmc6IDE1cHggMHB4IDA7XG4gICAgfVxuICAgIC5hY2NvcmRpYW4tc2VjdGlvbiAuYWNjb3JkaWFuLWNvbnRlbnQge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gICAgfVxufVxuXG5cbi8vIEZvb3RlciBCb3R0b20gU2VjdGlvblxuLm1pZGRsZS1ib3R0b217XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwcHg7XG4gIHdpZHRoOiA4NC41JTtcbiAgbGVmdDogMTQuNSU7XG4gIGJhY2tncm91bmQ6ICNmNGY1Zjc7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDEwLCAxMCwgMTAsIDAuMyk7XG4gIHotaW5kZXg6IDEwMDtcbiAgLyogbWFyZ2luLXRvcDogMTBweDsgKi9cbn1cbi5jb3VudHJ5Q2FsbGluZ0NvZGV7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/components/leads/enquiry-add/enquiry-add.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/leads/enquiry-add/enquiry-add.component.ts ***!
  \***********************************************************************/
/*! exports provided: EnquiryAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnquiryAddComponent", function() { return EnquiryAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs/Rx.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _model_role_features__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../model/role_features */ "./src/app/model/role_features.ts");
/* harmony import */ var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/authenticator.service */ "./src/app/services/authenticator.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/common-service */ "./src/app/services/common-service.ts");
/* harmony import */ var _services_enquiry_services_post_enquiry_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/enquiry-services/post-enquiry-data.service */ "./src/app/services/enquiry-services/post-enquiry-data.service.ts");
/* harmony import */ var _services_fetchprefilldata_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/fetchprefilldata.service */ "./src/app/services/fetchprefilldata.service.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_login_services_login_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../services/login-services/login.service */ "./src/app/services/login-services/login.service.ts");
/* harmony import */ var _services_multiBranchdata_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../services/multiBranchdata.service */ "./src/app/services/multiBranchdata.service.ts");
/* harmony import */ var _services_common_api_call_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../services/common-api-call.service */ "./src/app/services/common-api-call.service.ts");
/* harmony import */ var _utils_commonUtils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../utils/commonUtils */ "./src/app/utils/commonUtils.ts");
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














let EnquiryAddComponent = /** @class */ (() => {
    let EnquiryAddComponent = class EnquiryAddComponent {
        constructor(prefill, router, poster, login, auth, multiBranchService, commonServiceFactory, httpService, commonApiCallService) {
            this.prefill = prefill;
            this.router = router;
            this.poster = poster;
            this.login = login;
            this.auth = auth;
            this.multiBranchService = multiBranchService;
            this.commonServiceFactory = commonServiceFactory;
            this.httpService = httpService;
            this.commonApiCallService = commonApiCallService;
            this.isRegisterStudent = false;
            /* Variable Declarations */
            this.countryDetails = [];
            this.enqstatus = [];
            this.enqPriority = [];
            this.enqFollowType = [];
            this.enqAssignTo = [];
            this.enqStd = [];
            this.isProfessional = false;
            this.enqSub = [];
            this.enqScholarship = [];
            this.enqSub2 = [];
            this.school = [];
            this.sourceLead = [];
            this.occupation = [];
            this.lastDetail = {
                name: '',
                enquiry_no: null,
                enquiry_creation_datetime: null,
            };
            this.enquiryConfirm = [];
            this.confimationPop = false;
            this.updatePop = false;
            this.newEnqData = {
                name: "",
                country_id: "",
                state_id: "",
                city_id: "",
                area_id: "",
                phone: "",
                email: "",
                gender: "",
                phone2: "",
                email2: "",
                dob: null,
                curr_address: "",
                parent_name: "",
                parent_phone: "",
                parent_email: "",
                city: -1,
                area: -1,
                occupation_id: "-1",
                school_id: "-1",
                qualification: "",
                grade: "",
                enquiry_date: moment__WEBPACK_IMPORTED_MODULE_2__().format('YYYY-MM-DD'),
                standard_id: "-1",
                subject_id: "-1",
                referred_by: "-1",
                source_id: "-1",
                fee_committed: "",
                discount_offered: "",
                priority: "cold_call",
                enquiry: "",
                follow_type: "call",
                followUpDate: moment__WEBPACK_IMPORTED_MODULE_2__().format('YYYY-MM-DD'),
                religion: null,
                link: "",
                slot_id: null,
                closedReason: "",
                master_course_name: "",
                demo_by_id: "",
                status: "0",
                subjectIdArray: null,
                assigned_to: sessionStorage.getItem('userid'),
                followUpTime: "",
                lead_id: -1,
                enqCustomLi: [],
                source_instituteId: '-1',
                walkin_followUpDate: '',
                walkin_followUpTime: '',
                closing_reason_id: '',
                is_follow_up_time_notification: false,
                birth_place: '',
                blood_group: '-1',
                category: '-1',
                nationality: '',
                student_adhar_no: '',
                parent_adhar_no: '',
                parent_profession: '-1',
                mother_tounge: '-1',
                extra_curricular_activities: '',
                educational_group: '',
                pin_code: '',
                inst_acad_year_id: '-1',
                guardian_name: '',
                guardian_phone: '',
                guardian_email: '',
                address: ''
            };
            this.additionDetails = false;
            this.todayDate = Date.now();
            this.isSourcePop = false;
            this.isInstitutePop = false;
            this.isReferPop = false;
            this.componentPrefill = [];
            this.componentListObject = {};
            this.componentRenderer = [];
            this.isCustomComponentValid = true;
            this.isCustomComponentStillValid = false;
            this.isFormValid = false;
            this.submitError = false;
            this.addNextCheck = false;
            this.isEnquiryAdmin = false;
            this.isNewInstitute = true;
            this.customComponents = [];
            this.isNewSource = true;
            this.sourceList = [];
            this.isNewRefer = true;
            this.referList = [];
            this.minArr = ['', '00', '15', '30', '45'];
            this.hour = '';
            this.minute = '';
            this.meridian = '';
            this.times = ['', '1 AM', '2 AM', '3 AM', '4 AM', '5 AM', '6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM', '9 PM', '10 PM', '11 PM', '12 AM'];
            this.timeObj = {
                fhour: '',
                fminute: '',
                fmeridian: '',
                whour: '',
                wminute: '',
                wmeridian: '',
            };
            this.followUpTime = "";
            this.createInstitute = {
                instituteName: "",
                isActive: "Y"
            };
            this.createSource = {
                name: "",
                inst_id: sessionStorage.getItem('institute_id'),
            };
            this.createReferer = {
                name: "",
                inst_id: sessionStorage.getItem('institute_id')
            };
            this.cityListDataSource = [];
            this.areaListDataSource = [];
            this.course_standard_id = '-1';
            this.course_subject = [];
            this.course_mastercourse_id = '-1';
            this.course_course = [];
            this.isMainBranch = "N";
            this.branchesList = [];
            this.subBranchSelected = false;
            this.masterCourseData = [];
            this.selectedCourseIds = null;
            this.selectedSubjectIds = null;
            this.isEnquirySubmit = true;
            this.permission = false;
            this.instituteCountryDetObj = {};
            this.maxlength = 10;
            this.country_id = null;
            this.walkinTime = {
                hour: '',
                minute: ''
            };
            this.minuteArr = ['', '00', '15', '30', '45'];
            this.addCityAreaPopUp = {
                showPopUp: false,
                addNew: false,
                newCity: {
                    city: '',
                    area: '',
                    branch: '-1'
                }
            };
            this.isRippleLoad = false;
            // state and city list
            this.stateList = [];
            this.cityList = [];
            this.areaList = [];
            this.addArea = false;
            this.selectedData = {
                country: '',
                state: '',
                city: ''
            };
            this.convertEnquiry = false;
            this.role_feature = _model_role_features__WEBPACK_IMPORTED_MODULE_4__["role"].features;
            this.schoolModel = false;
            // Changes by - Nalini to hide Add bulk Enquiry and Upload Enq for custom user (As discussed with Nitin)
            this.BulkEnqHide = false;
            this.masterDataList = {};
            this.instAcademicYrList = [];
            this.auth.institute_type.subscribe(res => {
                if (res == 'LANG') {
                    this.isProfessional = true;
                }
                else {
                    this.isProfessional = false;
                }
            });
            // changes by Nalini - to handle school model conditions
            this.auth.schoolModel.subscribe(res => {
                this.schoolModel = false;
                if (res) {
                    this.schoolModel = true;
                }
            });
            if (sessionStorage.getItem('userid') == null) {
                this.router.navigate(['/authPage']);
            }
            commonApiCallService.fetchMasterData().subscribe(data => {
                this.masterDataList = data;
            });
            if (this.schoolModel) {
                commonApiCallService.getAllFinancialYear().subscribe(data => {
                    this.instAcademicYrList = data;
                });
            }
        }
        /* OnInit Initialized */
        ngOnInit() {
            this.isCityMandatory = sessionStorage.getItem('enable_routing');
            this.isStateMandatory = sessionStorage.getItem('enable_routing');
            if (sessionStorage.getItem('permissions') == undefined || sessionStorage.getItem('permissions') == '' || sessionStorage.getItem('permissions') == null || this.role_feature.LEAD_ENQUIRY_FULL_ACCESS) {
                this.permission = false;
                this.BulkEnqHide = true;
            }
            else {
                this.BulkEnqHide = this.role_feature.LEAD_ENQUIRY_FULL_ACCESS;
                if (JSON.parse(sessionStorage.getItem('permissions')).length == 1) {
                    if (this.role_feature.LEAD_MANAGE_ENQUIRY)
                        this.permission = true;
                }
            }
            this.isEnquiryAdministrator();
            this.fetchEnquiryPrefilledData();
            /* Model for Enquiry Data */
            this.newEnqData = {
                name: "",
                country_id: "",
                state_id: "",
                city_id: "",
                area_id: "",
                phone: "",
                email: "",
                gender: "",
                phone2: "",
                email2: "",
                curr_address: "",
                parent_name: "",
                parent_phone: "",
                parent_email: "",
                city: -1,
                area: -1,
                occupation_id: "-1",
                school_id: "-1",
                qualification: "",
                grade: "",
                master_course_name: "",
                enquiry_date: moment__WEBPACK_IMPORTED_MODULE_2__().format('YYYY-MM-DD'),
                standard_id: "-1",
                subject_id: "-1",
                subjectIdArray: null,
                referred_by: "-1",
                source_id: "-1",
                fee_committed: "",
                discount_offered: "",
                priority: "cold_call",
                enquiry: "",
                follow_type: "call",
                followUpDate: moment__WEBPACK_IMPORTED_MODULE_2__().format('YYYY-MM-DD'),
                religion: null,
                link: "",
                slot_id: null,
                closedReason: "",
                demo_by_id: "",
                status: "0",
                assigned_to: sessionStorage.getItem('userid'),
                followUpTime: "",
                lead_id: -1,
                enqCustomLi: [],
                source_instituteId: '-1',
                walkin_followUpDate: '',
                walkin_followUpTime: '',
                closing_reason_id: '',
                is_follow_up_time_notification: false,
                birth_place: '',
                blood_group: '-1',
                category: '-1',
                nationality: '',
                student_adhar_no: '',
                parent_adhar_no: '',
                parent_profession: '-1',
                mother_tounge: '-1',
                extra_curricular_activities: '',
                educational_group: '',
                pin_code: '',
                inst_acad_year_id: '-1',
                guardian_name: '',
                guardian_phone: '',
                guardian_email: '',
                address: ''
            };
            if (sessionStorage.getItem('enquiryPrefill') != null && sessionStorage.getItem('enquiryPrefill') != undefined) {
                this.convertToEnquiryDetected();
            }
            // Multi Branch Check
            this.auth.isMainBranch.subscribe((value) => {
                this.isMainBranch = value;
                if (this.isMainBranch == "Y") {
                    this.newEnqData.source_instituteId = sessionStorage.getItem('institute_id');
                    this.multiBranchInstituteFound(this.newEnqData.source_instituteId);
                }
            });
            this.multiBranchService.subBranchSelected.subscribe(res => {
                this.subBranchSelected = res;
                if (this.subBranchSelected) {
                    this.newEnqData.source_instituteId = sessionStorage.getItem('institute_id');
                    const mainBranchId = sessionStorage.getItem('mainBranchId');
                    if (mainBranchId != null) {
                        this.multiBranchInstituteFound(mainBranchId);
                    }
                }
            });
            this.fetchDataForCountryDetails();
            this.getStateList();
        }
        ngOnDestroy() {
            sessionStorage.removeItem('enquiryPrefill');
        }
        checkCustomeComponentElement(index) {
            if (!(index % 3)) {
                return true;
            }
            else {
                return false;
            }
        }
        convertToEnquiryDetected() {
            this.convertEnquiry = true;
            let data = JSON.parse(sessionStorage.getItem('enquiryPrefill'));
            this.newEnqData = {
                name: data.name,
                phone: data.phone,
                email: data.email,
                gender: data.gender,
                dob: data.dob,
                parent_email: data.parent_email,
                standard_id: data.standard_id,
                parent_name: data.parent_name,
                parent_phone: data.parent_phone,
                school_id: data.school_id,
                curr_address: data.address,
                country_id: data.country_id,
                walkin_followUpDate: '',
                walkin_followUpTime: '',
                closing_reason_id: '',
                user_id: data.user_id,
                city_id: data.city_id,
                state_id: data.state_id,
                source_id: data.source,
                enquiry_date: moment__WEBPACK_IMPORTED_MODULE_2__().format('YYYY-MM-DD'),
                status: '0'
            };
            this.course_mastercourse_id = data.master_course;
            this.selectedCourseIds = data.course_assign;
        }
        // created by: Nalini Walunj
        // Below three functions are written to fetch country details from the session stored at the time of login of institute
        fetchDataForCountryDetails() {
            let encryptedData = sessionStorage.getItem('country_data');
            let data = JSON.parse(encryptedData);
            if (data.length > 0) {
                this.countryDetails = data;
                let defacult_Country = this.countryDetails.filter((country) => {
                    return country.is_default == 'Y';
                });
                if (this.newEnqData.country_id == "") {
                    this.newEnqData.country_id = defacult_Country[0].id;
                    this.instituteCountryDetObj = defacult_Country[0];
                    this.maxlength = defacult_Country[0].country_phone_number_length;
                    this.country_id = defacult_Country[0].id;
                }
            }
        }
        getStateList() {
            const url = `/api/v1/country/state?country_ids=${this.newEnqData.country_id}`;
            this.auth.showLoader();
            this.httpService.getData(url).subscribe((res) => {
                this.auth.hideLoader();
                if (res.result.length > 0) {
                    this.stateList = res.result[0].stateList;
                }
            }, err => {
                this.auth.hideLoader();
                this.showErrorMessage('error', '', err);
            });
        }
        resetStateCityArea() {
            this.stateList = [];
            this.cityList = [];
            this.areaList = [];
            this.newEnqData.state_id = "";
            this.newEnqData.city_id = "";
            this.newEnqData.area_id = "";
            this.getStateList();
        }
        getNewCityList() {
            this.cityList = [];
            this.areaList = [];
            this.newEnqData.city_id = "";
            this.newEnqData.area_id = "";
            this.getCityList();
        }
        getNewAreaList() {
            this.areaList = [];
            this.getAreaList();
        }
        // get city list as per state selection
        getCityList() {
            if (this.newEnqData.state_id != '') {
                const url = `/api/v1/country/city?state_ids=${this.newEnqData.state_id}`;
                this.auth.showLoader();
                this.httpService.getData(url).subscribe((res) => {
                    this.auth.hideLoader();
                    if (res.result.length > 0) {
                        this.cityList = res.result[0].cityList;
                    }
                }, err => {
                    this.auth.hideLoader();
                    this.showErrorMessage('error', '', err);
                });
            }
        }
        getAreaList() {
            if (this.newEnqData.city_id != "" && this.newEnqData.city_id != "-1") {
                const url = `/api/v1/cityArea/area/${this.createSource.inst_id}?city_ids=${this.newEnqData.city_id}`;
                this.auth.showLoader();
                this.httpService.getData(url).subscribe((res) => {
                    this.auth.hideLoader();
                    if (res.result && res.result.length > 0) {
                        this.areaList = res.result[0].areaList;
                    }
                }, err => {
                    this.auth.hideLoader();
                    this.showErrorMessage('error', '', err);
                });
            }
        }
        toggleAddArea() {
            if (this.addArea) {
                this.addArea = false;
                this.getAreaList();
            }
            else {
                this.addArea = true;
                this.selectedData.country = this.newEnqData.country_id;
                this.selectedData.state = this.newEnqData.state_id;
                this.selectedData.city = this.newEnqData.city_id;
            }
        }
        onChangeObj(event) {
            console.log(event);
            this.countryDetails.forEach(element => {
                if (element.id == event) {
                    this.instituteCountryDetObj = element;
                    this.newEnqData.country_id = element.id;
                    this.maxlength = this.instituteCountryDetObj.country_phone_number_length;
                    this.country_id = element.id;
                }
            });
            this.resetStateCityArea();
        }
        /* Function for Toggling Form Visibility */
        toggleForm(event) {
            let eleid = event.srcElement.id;
            //console.log(eleid);
            if (eleid == "openBasic") {
                this.toggleObjectClass(document.getElementById('basicDetails').classList, document.getElementById('academicDetails').classList);
            }
            else if (eleid == "closeBasic") {
                this.toggleObjectClass(document.getElementById('academicDetails').classList, document.getElementById('basicDetails').classList);
            }
            else if (eleid == "openAcademic") {
                this.toggleObjectClass(document.getElementById('academicDetails').classList, document.getElementById('basicDetails').classList);
            }
            else if (eleid == "closeAcademic") {
                this.toggleObjectClass(document.getElementById('basicDetails').classList, document.getElementById('academicDetails').classList);
            }
        }
        toggleObjectClass(addActive, removeActive) {
            addActive.add('active');
            removeActive.remove('active');
        }
        /* Function to fetch prefill data for form creation */
        fetchEnquiryPrefilledData() {
            this.prefill.getEnqStatus().subscribe(data => { this.enqstatus = data; }, err => {
                //  console.log(err);
            });
            this.prefill.getEnqPriority().subscribe(data => { this.enqPriority = data; }, err => {
                //  console.log(err);
            });
            this.prefill.getFollowupType().subscribe(data => { this.enqFollowType = data; }, err => { });
            this.prefill.getAssignTo().subscribe(data => { this.enqAssignTo = data; }, err => {
                //   console.log(err);
            });
            this.prefill.getEnqStardards().subscribe(data => { this.enqStd = data; }, err => {
            });
            this.prefill.getSchoolDetails().subscribe(data => {
                this.school = data;
                this.instituteList = this.school;
                this.instituteList.forEach(el => {
                    el.edit = false;
                });
            }, err => {
                //  console.log(err);
            });
            this.prefill.getLeadSource().subscribe(data => {
                this.sourceLead = data;
                this.sourceList = this.sourceLead;
                this.sourceList.forEach(el => {
                    el.edit = false;
                });
            }, err => {
                //   console.log(err);
            });
            this.fetchReferInfo();
            this.prefill.getOccupation().subscribe(data => { this.occupation = data; }, err => {
                //   console.log(err);
            });
            this.prefill.fetchLastDetail().subscribe(data => {
                this.lastDetail = data;
            }, err => {
                // console.log(err);
            });
            this.getCityAreaList();
            this.fetchCustomComponentData();
            if (!this.isProfessional) {
                this.fetchMasterCourseDetails();
            }
        }
        getCityAreaList() {
            this.prefill.getCityList().subscribe(data => {
                this.cityListDataSource = data;
            }, err => {
            });
        }
        fetchMasterCourseDetails() {
            this.prefill.getMasterCourseData().subscribe((res) => {
                this.masterCourseData = res;
            });
        }
        fetchCustomComponentData() {
            this.customComponents = [];
            this.prefill.fetchCustomComponentEmpty()
                .subscribe(data => {
                if (data != null) {
                    data.forEach(el => {
                        let max_length = el.comp_length == 0 ? 100 : el.comp_length;
                        let obj = {
                            data: el,
                            id: el.component_id,
                            is_required: el.is_required,
                            is_searchable: el.is_searchable,
                            label: el.label,
                            prefilled_data: this.createPrefilledData(el.prefilled_data.split(',')),
                            selected: [],
                            selectedString: '',
                            type: el.type,
                            value: el.enq_custom_value,
                            comp_length: max_length
                        };
                        if (el.type == 4) {
                            obj = {
                                data: el,
                                id: el.component_id,
                                is_required: el.is_required,
                                is_searchable: el.is_searchable,
                                label: el.label,
                                prefilled_data: this.createPrefilledDataType4(el.prefilled_data.split(','), el.enq_custom_value.split(','), el.defaultValue.split(',')),
                                selected: (el.enq_custom_value.trim().split(',').length == 1 && el.enq_custom_value.trim().split(',')[0] == "") ? this.getDefaultArr(el.defaultValue) : el.enq_custom_value.split(','),
                                selectedString: (el.enq_custom_value.trim().split(',').length == 1 && el.enq_custom_value.trim().split(',')[0] == "") ? el.defaultValue : el.enq_custom_value,
                                type: el.type,
                                value: (el.enq_custom_value.trim().split(',').length == 1 && el.enq_custom_value.trim().split(',')[0] == "") ? el.defaultValue : el.enq_custom_value,
                                comp_length: max_length
                            };
                        }
                        if (el.type == 3) {
                            obj = {
                                data: el,
                                id: el.component_id,
                                is_required: el.is_required,
                                is_searchable: el.is_searchable,
                                label: el.label,
                                prefilled_data: this.createPrefilledData(el.prefilled_data.split(',')),
                                selected: [],
                                selectedString: "",
                                type: el.type,
                                value: (el.enq_custom_value.trim().split(',').length == 1 && el.enq_custom_value.trim().split(',')[0] == "") ? el.defaultValue : el.enq_custom_value,
                                comp_length: max_length
                            };
                        }
                        if (el.type == 2) {
                            obj = {
                                data: el,
                                id: el.component_id,
                                is_required: el.is_required,
                                is_searchable: el.is_searchable,
                                label: el.label,
                                prefilled_data: this.createPrefilledData(el.prefilled_data.split(',')),
                                selected: [],
                                selectedString: '',
                                type: el.type,
                                value: el.enq_custom_value == "" ? false : true,
                                comp_length: max_length
                            };
                        }
                        else if (el.type != 2 && el.type != 4 && el.type != 3) {
                            obj = {
                                data: el,
                                id: el.component_id,
                                is_required: el.is_required,
                                is_searchable: el.is_searchable,
                                label: el.label,
                                prefilled_data: this.createPrefilledData(el.prefilled_data.split(',')),
                                selected: [],
                                selectedString: '',
                                type: el.type,
                                value: el.enq_custom_value,
                                comp_length: max_length
                            };
                        }
                        this.customComponents.push(obj);
                    });
                }
            });
        }
        getDefaultArr(d) {
            let a = [];
            a.push(d);
            return a;
        }
        createPrefilledDataType4(dataArr, selected, def) {
            let customPrefilled = [];
            if (selected.length != 0 && selected[0] != "") {
                dataArr.forEach(el => {
                    let obj = {
                        data: el,
                        checked: selected.includes(el)
                    };
                    customPrefilled.push(obj);
                });
            }
            else {
                dataArr.forEach(el => {
                    let obj = {
                        data: el,
                        checked: def.indexOf(el) != -1
                    };
                    customPrefilled.push(obj);
                });
            }
            return customPrefilled;
        }
        /* Custom Compoenent array creater */
        createPrefilledData(dataArr) {
            let customPrefilled = [];
            dataArr.forEach(el => {
                let obj = {
                    data: el.toString(),
                    checked: false
                };
                customPrefilled.push(obj);
            });
            return customPrefilled;
        }
        /* if custom component is of type multielect then toggle the visibility of the dropdowm */
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
        /* if custom component is of type multielect then update the selected or unselected data*/
        updateMultiSelect(data, id) {
            this.customComponents.forEach(el => {
                if (el.id == id) {
                    let x = [];
                    let y = el.prefilled_data;
                    y.forEach(e => {
                        if (e.checked) {
                            x.push(e.data);
                        }
                    });
                    el.selected = x;
                    el.selectedString = el.selected.join(',');
                    el.value = el.selectedString;
                }
            });
        }
        /* Function to Toggle visibility of additional details div */
        showAdditionDetails() {
            this.additionDetails = !this.additionDetails;
        }
        /* On Phone Number input by user update model and fetch lead records if any */
        updatePhoneFetchRecords() {
            this.prefill.fetchLeadDetails(this.newEnqData.phone).subscribe(data => { this.updateForm(data); }, err => { });
        }
        /* Function to fetch lead details on basis of the phone number provided by user */
        getLeadDetails() {
            //console.log(this.newEnqData.phone);
            if (this.validatePhone(this.newEnqData.phone)) {
                this.prefill.fetchLeadDetails(this.newEnqData.phone).subscribe(data => { this.updateForm(data); }, err => {
                    this.showErrorMessage('error', "Unable to fetch lead", err.error.message);
                });
            }
        }
        /* Function to validate the number provided by user  and return data back to getLeadDetails*/
        validatePhone(num) {
            //console.log(num);
            if (num != null) {
                return this.newEnqData.phone.length === this.maxlength;
            }
        }
        /* Update the form fields onn basis of the data retreived from getLeadDetails*/
        updateForm(data) {
            this.newEnqData.curr_address = data.address;
            this.newEnqData.assigned_to = data.assigned_to;
            this.newEnqData.city = data.city;
            this.newEnqData.email = data.email;
            this.newEnqData.gender = data.gender;
            this.newEnqData.name = data.name;
            this.newEnqData.referred_by = data.referred_by;
            this.newEnqData.source_id = data.source_id;
        }
        /* Function to fetch subject when user selects a standard from dropdown */
        fetchSubject(value) {
            if (value != null && value != '' && value != '-1') {
                this.newEnqData.subject_id = '-1';
                this.enqSub = [];
                this.newEnqData.standard_id = value;
                this.prefill.getEnqSubjects(this.newEnqData.standard_id).subscribe(data => {
                    this.enqSub = data;
                });
            }
            else {
                this.newEnqData.subject_id = '-1';
                this.newEnqData.subjectIdArray = null;
                this.enqSub = [];
            }
        }
        /* Function to clear the form data */
        clearFormData() {
            this.newEnqData = {
                name: "",
                phone: "",
                email: "",
                gender: "",
                phone2: "",
                email2: "",
                curr_address: "",
                parent_name: "",
                parent_phone: "",
                parent_email: "",
                city: "",
                occupation_id: "-1",
                school_id: "-1",
                qualification: "",
                grade: "",
                master_course_name: "",
                enquiry_date: moment__WEBPACK_IMPORTED_MODULE_2__().format('YYYY-MM-DD'),
                standard_id: "-1",
                subject_id: "-1",
                subjectIdArray: null,
                referred_by: "-1",
                source_id: "-1",
                fee_committed: "",
                discount_offered: "",
                priority: "cold_call",
                enquiry: "",
                follow_type: "call",
                followUpDate: moment__WEBPACK_IMPORTED_MODULE_2__().format('YYYY-MM-DD'),
                religion: '',
                link: "",
                slot_id: null,
                closedReason: "",
                demo_by_id: "",
                status: "0",
                assigned_to: sessionStorage.getItem('userid'),
                followUpTime: "",
                lead_id: -1,
                enqCustomLi: [],
                walkin_followUpDate: '',
                walkin_followUpTime: '',
                closing_reason_id: '',
                is_follow_up_time_notification: false,
                country_id: this.country_id,
                state_id: "",
                city_id: "",
                area_id: ""
            };
            this.course_standard_id = '-1';
            this.selectedSubjectIds = null;
            this.course_mastercourse_id = '-1';
            this.selectedCourseIds = null;
            this.enqSub = [];
            this.followUpTime = "";
            this.hour = '';
            this.minute = '';
            this.meridian = '';
            this.customComponents.forEach(el => {
                el.value = '';
            });
            this.isEnquirySubmit = true;
            this.fetchCustomComponentData();
            // this.fetchDataForCountryDetails();
        }
        updateCustomComponent(v, comp) {
            if (v) {
                this.customComponents.forEach(e => {
                    if (e.id === comp.id) {
                        e.value = v;
                    }
                });
            }
            else {
                this.customComponents.forEach(e => {
                    if (e.id === comp.id) {
                        e.value = v;
                    }
                });
            }
        }
        getCustomComponents() {
            let tempArr = [];
            this.customComponents.forEach(e => {
                if (e.type == 5) {
                    if (e.hasOwnProperty('value')) {
                        let dd = moment__WEBPACK_IMPORTED_MODULE_2__(e.value).format("YYYY-MM-DD");
                        if (dd != '' && dd != "Invalid date" && dd != null) {
                            let obj = {};
                            obj.component_id = e.id;
                            obj.enq_custom_id = 0;
                            obj.enq_custom_value = moment__WEBPACK_IMPORTED_MODULE_2__(e.value).format("YYYY-MM-DD");
                            tempArr.push(obj);
                        }
                    }
                }
                else {
                    if (e.hasOwnProperty('value')) {
                        if (typeof e.value == 'string') {
                            if (e.value.trim() != '') {
                                let obj = {};
                                obj.component_id = e.id;
                                obj.enq_custom_id = 0;
                                obj.enq_custom_value = e.value;
                                tempArr.push(obj);
                            }
                        }
                        else if (typeof e.value == 'boolean') {
                            if (e.value) {
                                let obj = {};
                                obj.component_id = e.id;
                                obj.enq_custom_id = 0;
                                obj.enq_custom_value = "Y";
                                tempArr.push(obj);
                            }
                            else {
                                let obj = {};
                                obj.component_id = e.id;
                                obj.enq_custom_id = 0;
                                obj.enq_custom_value = "N";
                                tempArr.push(obj);
                            }
                        }
                    }
                }
            });
            return tempArr;
        }
        submitRegisterForm(form) {
            this.isRegisterStudent = true;
            this.newEnqData.follow_type = "Walkin";
            this.newEnqData.walkin_followUpDate = moment__WEBPACK_IMPORTED_MODULE_2__(new Date()).format('YYYY-MM-DD');
            this.newEnqData.walkin_followUpTime = this.getFollowupTime();
            this.submitForm(form);
        }
        /* Function to submit validated form data */
        submitForm(form) {
            console.log("Form", form);
            //Validates if the custom component required fields are selected or not
            let customComponentValidator = this.customComponents.every(el => { return this.getCustomValid(el); });
            /* Validate the predefine required fields of the form */
            this.isFormValid = this.ValidateFormDataBeforeSubmit();
            // Validate If Area And City Settings is enable
            let validate = this.validateAreaAndCityFields();
            if (validate == false) {
                return;
            }
            /* Upload Data if the formData is valid */
            if (this.isFormValid && customComponentValidator) {
                if (this.validateTime()) {
                    this.newEnqData.enqCustomLi = this.getCustomComponents();
                    /* Check if user has entered any followup date time */
                    if (this.hour != '') {
                        this.newEnqData.followUpTime = this.hour + ":" + this.minute + " " + this.meridian;
                    }
                    /* is Main Branch No,sub Branch Selected */
                    if (this.isMainBranch == "N" && this.subBranchSelected == false) {
                        this.newEnqData.source_instituteId = '-1';
                    }
                    /* is Main Branch Yes,sub Branch Selected */
                    else if (this.isMainBranch == "Y" && this.subBranchSelected == false) {
                        this.newEnqData.source_instituteId = this.newEnqData.source_instituteId;
                    }
                    /* convert dob to standard format */
                    this.newEnqData.dob = this.fetchDate(this.newEnqData.dob);
                    this.newEnqData.enquiry_date = this.fetchDate(this.newEnqData.enquiry_date);
                    this.newEnqData.followUpDate = this.fetchDate(this.newEnqData.followUpDate);
                    if (this.isRegisterStudent == false) {
                        if (this.newEnqData.walkin_followUpDate == "" || this.newEnqData.walkin_followUpDate == "Invalid date") {
                            this.newEnqData.walkin_followUpDate = "";
                        }
                        else {
                            this.newEnqData.walkin_followUpDate = moment__WEBPACK_IMPORTED_MODULE_2__(this.newEnqData.walkin_followUpDate).format('YYYY-MM-DD');
                        }
                        if (this.walkinTime.hour == "" || this.walkinTime.minute == "") {
                            this.newEnqData.walkin_followUpTime = "";
                        }
                        else {
                            if (this.walkinTime.hour != "") {
                                let time = this.walkinTime.hour.split(' ');
                                this.newEnqData.walkin_followUpTime = time[0] + ':' + this.walkinTime.minute + " " + time[1];
                            }
                        }
                    }
                    if (this.newEnqData.follow_type == "Walkin") {
                        if (this.newEnqData.walkin_followUpDate == "") {
                            this.showErrorMessage('error', '', 'Please enter walkin date for follow up type walkin');
                            return;
                        }
                        if (this.newEnqData.walkin_followUpTime == "") {
                            this.showErrorMessage('error', '', 'Please enter walkin time for follow up type walkin');
                            return;
                        }
                    }
                    if (this.selectedSubjectIds == '-1') {
                        this.selectedSubjectIds = null;
                    }
                    if (this.selectedCourseIds == '-1') {
                        this.selectedCourseIds = null;
                    }
                    if (this.newEnqData.subjectIdArray == '-1') {
                        this.selectedCourseIds = null;
                    }
                    if (this.newEnqData.is_follow_up_time_notification == true) {
                        this.newEnqData.is_follow_up_time_notification = 1;
                    }
                    else {
                        this.newEnqData.is_follow_up_time_notification = 0;
                    }
                    if (_utils_commonUtils__WEBPACK_IMPORTED_MODULE_13__["default"].isOptionalValidEmailId(this.newEnqData.email)) {
                        this.showErrorMessage('error', '', "Please enter valid email id");
                        return;
                    }
                    if (_utils_commonUtils__WEBPACK_IMPORTED_MODULE_13__["default"].isOptionalValidEmailId(this.newEnqData.email2)) {
                        this.showErrorMessage('error', '', "Please enter valid alternate email ID");
                        return;
                    }
                    if (_utils_commonUtils__WEBPACK_IMPORTED_MODULE_13__["default"].isOptionalValidEmailId(this.newEnqData.parent_email)) {
                        this.showErrorMessage('error', '', "Please enter valid parent email ID");
                        return;
                    }
                    if (_utils_commonUtils__WEBPACK_IMPORTED_MODULE_13__["default"].isOptionalValidEmailId(this.newEnqData.guardian_email)) {
                        this.showErrorMessage('error', '', "Please enter valid guardian email ID");
                        return;
                    }
                    if (!this.isProfessional && (this.isEnquirySubmit)) {
                        this.isEnquirySubmit = false;
                        let obj = {
                            area: this.newEnqData.area,
                            assigned_to: this.newEnqData.assigned_to,
                            city: this.newEnqData.city,
                            country_id: this.newEnqData.country_id,
                            state_id: this.newEnqData.state_id,
                            city_id: this.newEnqData.city_id,
                            area_id: this.newEnqData.area_id,
                            closedReason: this.newEnqData.closedReason,
                            courseIdArray: this.selectedCourseIds,
                            curr_address: this.newEnqData.curr_address,
                            demo_by_id: this.newEnqData.demo_by_id,
                            discount_offered: this.newEnqData.discount_offered,
                            dob: this.newEnqData.dob,
                            email: this.newEnqData.email.trim(),
                            email2: this.newEnqData.email2,
                            enqCustomLi: this.newEnqData.enqCustomLi,
                            enquiry: this.newEnqData.enquiry,
                            enquiry_date: this.newEnqData.enquiry_date,
                            fee_committed: this.newEnqData.fee_committed,
                            followUpDate: this.newEnqData.followUpDate,
                            followUpTime: this.newEnqData.followUpTime,
                            follow_type: this.newEnqData.follow_type,
                            gender: this.newEnqData.gender,
                            grade: this.newEnqData.grade,
                            lead_id: this.newEnqData.lead_id,
                            link: this.newEnqData.link,
                            name: this.newEnqData.name,
                            occupation_id: this.newEnqData.occupation_id,
                            parent_email: this.newEnqData.parent_email,
                            parent_name: this.newEnqData.parent_name,
                            parent_phone: this.newEnqData.parent_phone,
                            phone: this.newEnqData.phone,
                            phone2: this.newEnqData.phone2,
                            priority: this.newEnqData.priority,
                            qualification: this.newEnqData.qualification,
                            referred_by: this.newEnqData.referred_by,
                            religion: this.newEnqData.religion,
                            school_id: this.newEnqData.school_id,
                            standard_id: this.newEnqData.standard_id,
                            slot_id: this.newEnqData.slot_id,
                            source_id: this.newEnqData.source_id,
                            source_instituteId: this.newEnqData.source_instituteId,
                            status: this.newEnqData.status,
                            subjectIdArray: this.selectedSubjectIds,
                            walkin_followUpDate: this.newEnqData.walkin_followUpDate,
                            walkin_followUpTime: this.newEnqData.walkin_followUpTime,
                            is_follow_up_time_notification: this.newEnqData.is_follow_up_time_notification,
                            birth_place: this.newEnqData.birth_place,
                            blood_group: this.newEnqData.blood_group,
                            category: this.newEnqData.category,
                            nationality: this.newEnqData.nationality,
                            student_adhar_no: this.newEnqData.student_adhar_no,
                            parent_adhar_no: this.newEnqData.parent_adhar_no,
                            parent_profession: this.newEnqData.parent_profession,
                            mother_tounge: this.newEnqData.mother_tounge,
                            extra_curricular_activities: this.newEnqData.extra_curricular_activities,
                            educational_group: this.newEnqData.educational_group,
                            pin_code: this.newEnqData.pin_code,
                            inst_acad_year_id: this.newEnqData.inst_acad_year_id,
                            guardian_name: this.newEnqData.guardian_name,
                            guardian_phone: this.newEnqData.guardian_phone,
                            guardian_email: this.newEnqData.guardian_email,
                            address: this.newEnqData.address
                        };
                        this.newEnqData.parent_email = (this.newEnqData.parent_email) ? this.newEnqData.parent_email.trim() : '';
                        this.newEnqData.guardian_email = (this.newEnqData.guardian_email) ? this.newEnqData.guardian_email.trim() : '';
                        this.newEnqData.email2 = (this.newEnqData.email2) ? this.newEnqData.email2.trim() : '';
                        if (this.convertEnquiry) {
                            obj.user_id = this.newEnqData.user_id;
                        }
                        console.log(obj);
                        this.auth.showLoader();
                        this.poster.postNewEnquiry(obj).subscribe((data) => {
                            this.auth.hideLoader();
                            this.enquiryConfirm = data;
                            let instituteEnqId = data.generated_id;
                            this.prefill.fetchLastDetail().subscribe(data => {
                                this.lastDetail = data;
                                if (this.isRegisterStudent) {
                                    this.convertTOStudent(instituteEnqId);
                                }
                                else {
                                    if (this.addNextCheck) {
                                        //form.reset();
                                        this.showErrorMessage('success', "", "Enquiry added successfully");
                                        this.clearFormData();
                                    }
                                    else {
                                        this.openConfirmationPopup();
                                        this.clearFormData();
                                    }
                                }
                            }, err => {
                            });
                        }, err => {
                            this.auth.hideLoader();
                            this.isEnquirySubmit = true;
                            this.showErrorMessage('error', '', err.error.message);
                        });
                    }
                    else {
                        this.auth.showLoader();
                        if (this.isEnquirySubmit) {
                            this.isEnquirySubmit = false;
                            this.poster.postNewEnquiry(this.newEnqData).subscribe((data) => {
                                this.auth.hideLoader();
                                this.enquiryConfirm = data;
                                let instituteEnqId = data.generated_id;
                                this.prefill.fetchLastDetail().subscribe(data => {
                                    this.lastDetail = data;
                                    if (this.isRegisterStudent) {
                                        this.convertTOStudent(instituteEnqId);
                                    }
                                    else {
                                        if (this.addNextCheck) {
                                            //form.reset();
                                            this.showErrorMessage('success', "", "Enquiry added successfully");
                                            this.clearFormData();
                                        }
                                        else {
                                            this.openConfirmationPopup();
                                            this.clearFormData();
                                        }
                                    }
                                }, err => {
                                });
                            }, err => {
                                this.auth.hideLoader();
                                this.isEnquirySubmit = true;
                                this.showErrorMessage('error', '', err.error.message);
                            });
                        }
                    }
                }
                else {
                    this.isEnquirySubmit = true;
                    this.showErrorMessage('error', '', 'Please select a valid time for follow up');
                }
            }
            else {
                this.isEnquirySubmit = true;
                this.submitError = true;
            }
        }
        convertTOStudent(instituteEnqId) {
            let obj = {
                name: this.newEnqData.name,
                phone: this.newEnqData.phone,
                email: this.newEnqData.email,
                gender: this.newEnqData.gender,
                dob: this.fetchDate(this.newEnqData.dob),
                parent_email: this.newEnqData.parent_email,
                school_name: this.newEnqData.school_id,
                standard_id: this.newEnqData.standard_id,
                parent_name: this.newEnqData.parent_name,
                parent_phone: this.newEnqData.parent_phone,
                enquiry_id: instituteEnqId,
                institute_enquiry_id: instituteEnqId,
                school_id: this.newEnqData.school_id,
                curr_address: this.newEnqData.curr_address,
                country_id: this.newEnqData.country_id,
                assigned_to: this.newEnqData.assigned_to,
                state_id: this.newEnqData.state_id,
                area_id: this.newEnqData.area_id,
                city_id: this.newEnqData.city_id,
                comments: this.newEnqData.enquiry,
            };
            obj.birth_place = this.newEnqData.birth_place,
                obj.blood_group = this.newEnqData.blood_group,
                obj.category = this.newEnqData.category,
                obj.nationality = this.newEnqData.nationality,
                obj.student_adhar_no = this.newEnqData.student_adhar_no,
                obj.parent_adhar_no = this.newEnqData.parent_adhar_no,
                obj.parent_profession = this.newEnqData.parent_profession,
                obj.mother_tounge = this.newEnqData.mother_tounge,
                obj.extra_curricular_activities = this.newEnqData.extra_curricular_activities,
                obj.educational_group = this.newEnqData.educational_group,
                obj.pin_code = this.newEnqData.pin_code,
                obj.student_perm_addr = this.newEnqData.address,
                obj.guardian_name = this.newEnqData.guardian_name,
                obj.guardian_email = this.newEnqData.guardian_email,
                obj.guardian_phone = this.newEnqData.guardian_phone,
                obj.religion = this.newEnqData.religion;
            if (!this.isProfessional) {
                obj.standard_id = this.course_standard_id;
            }
            else {
                obj.standard_id = this.course_mastercourse_id;
            }
            sessionStorage.setItem('studentPrefill', JSON.stringify(obj));
            this.router.navigate(['/view/students/add']);
        }
        getFollowupTime() {
            let hour = parseInt(moment__WEBPACK_IMPORTED_MODULE_2__(new Date()).format('hh'));
            let min = moment__WEBPACK_IMPORTED_MODULE_2__(new Date()).format('mm');
            let mer = moment__WEBPACK_IMPORTED_MODULE_2__(new Date()).format('A');
            if (parseInt(min) % 5 != 0) {
                min = Math.ceil(parseInt(min) / 5) * 5;
                if (min >= 60) {
                    min = '00';
                    if (hour == 12) {
                        hour = '1';
                        if (mer == 'AM') {
                            mer = 'PM';
                        }
                        else {
                            mer = 'AM';
                        }
                    }
                    else {
                        hour += 1;
                        // let formattedNumber = (hour).slice(-2);
                        hour = hour.toString();
                    }
                }
            }
            return (hour + ":" + min + " " + mer);
        }
        fetchDate(e) {
            if (e == null || e == '' || e == "Invalid date") {
                return '';
            }
            else {
                return moment__WEBPACK_IMPORTED_MODULE_2__(e).format('YYYY-MM-DD');
            }
        }
        validateAreaAndCityFields() {
            if (this.isCityMandatory == 1 && this.isStateMandatory == 1) {
                if (this.newEnqData.state_id == "") {
                    return this.showErrorMessage('error', '', 'Please enter State details');
                }
                else {
                    if (this.newEnqData.city_id == '') {
                        return this.showErrorMessage('error', '', 'Please enter City details');
                    }
                    else {
                        return true;
                    }
                }
            }
            else {
                return true;
            }
        }
        validateTime() {
            /* some time selected by user or nothing*/
            if ((this.hour != '' && this.minute != '' && this.meridian != '') || (this.hour == '' && this.minute == '' && this.meridian == '')) {
                if (this.hour == "Invalid date") {
                    this.hour = '';
                }
                if (this.minute == "Invalid date") {
                    this.minute = '';
                }
                if (this.meridian == "INVALID DATE") {
                    this.meridian = '';
                }
                return true;
            }
            else {
                return false;
            }
        }
        notifyMeCheckBoxChangesDetect() {
            if (this.newEnqData.followUpDate != "" && this.newEnqData.followUpDate != null) {
                if (this.hour != "" && this.meridian != "" && this.minute != "") {
                    // Do nothing
                }
                else {
                    this.newEnqData.is_follow_up_time_notification = false;
                }
            }
            else {
                this.newEnqData.is_follow_up_time_notification = false;
            }
        }
        getCustomValid(element) {
            if (element.is_required == "Y" && element.value != "") {
                if (element.type == 5) {
                    if (element.value != "" && element.value != null && element.value != "Invalid date") {
                        return true;
                    }
                    else {
                        return this.showErrorMessage('error', '', 'Please add required field(s) in academics details section');
                    }
                }
                else {
                    return true;
                }
            }
            else if (element.is_required == "Y" && element.value == "") {
                return this.showErrorMessage('error', '', 'Please add required field(s) in academics details section');
            }
            else if (element.is_required == "N") {
                return true;
            }
        }
        /* Validate the Entire FormData Once Before Uploading= */
        ValidateFormDataBeforeSubmit() {
            let msg = 'Enter '.concat(this.maxlength).concat(' Digit Contact Number');
            let phoneFlag = this.commonServiceFactory.phonenumberCheck(this.newEnqData.phone, this.maxlength, this.country_id);
            if (phoneFlag == false || phoneFlag == 'noNumber') {
                if (phoneFlag == 'noNumber') {
                    return this.showErrorMessage('error', 'Please enter valid contact no.', '');
                }
                else {
                    return this.showErrorMessage('error', msg, '');
                }
            }
            // else if (this.commonServiceFactory.checkValueType(moment(this.newEnqData.enquiry_date).format("YYYY-MM-DD"))) {
            //   return this.showErrorMessage('error', '', 'Please select enquiry date ');
            // }
            else if (this.commonServiceFactory.sourceValueCheck(this.newEnqData.source_id)) {
                return this.showErrorMessage('error', '', 'Please select enquiry source');
            }
            else if (this.newEnqData.name == '' || this.newEnqData.name == null) {
                return this.showErrorMessage('error', '', 'Please enter name');
            }
            else if (this.newEnqData.follow_type == '' || this.newEnqData.follow_type == null) {
                return this.showErrorMessage('error', '', 'Please select follow up type');
            }
            else {
                if (this.validateEnquiryDate()) { //newEnqData.parent_phone
                    if (this.newEnqData.parent_phone != '' && this.newEnqData.parent_phone != null) {
                        if (this.commonServiceFactory.phonenumberCheck(this.newEnqData.parent_phone, this.maxlength, this.country_id) == false && this.newEnqData.parent_phone != "") {
                            return this.showErrorMessage('error', '', msg);
                        }
                    }
                    if (this.newEnqData.phone2 != '' && this.newEnqData.phone2 != null) {
                        if (this.commonServiceFactory.phonenumberCheck(this.newEnqData.phone2, this.maxlength, this.country_id) == false && this.newEnqData.phone2 != "") {
                            return this.showErrorMessage('error', '', msg);
                        }
                    }
                    if (this.hour == '' && Number(this.minute) > 0) {
                        return this.showErrorMessage('error', '', 'Please select time');
                    }
                    return true;
                }
                else {
                    return this.showErrorMessage('error', '', 'Cannot set future enquiry date');
                }
            }
        }
        showErrorMessage(objType, massage, body) {
            this.commonServiceFactory.showErrorMessage(objType, massage, body);
            return false;
        }
        validateEnquiryDate() {
            let a = moment__WEBPACK_IMPORTED_MODULE_2__();
            let b = moment__WEBPACK_IMPORTED_MODULE_2__(this.newEnqData.enquiry_date);
            let d = a.diff(b);
            if (d < 0) {
                return false;
            }
            else {
                return true;
            }
        }
        /* fetch the data of last updated enquiry */
        updateLastUpdatedDetails() {
            this.prefill.fetchLastDetail().subscribe(data => {
                this.lastDetail = data;
            }, err => {
                //  console.log(err);
            });
        }
        /* Function to open confirmation popup on succesfull form submission  */
        openConfirmationPopup() {
            //  console.log("confirmation popup opened");
            this.confimationPop = true;
        }
        /* Function to close the confirmation popup */
        closePopUp() {
            // console.log("confirmation popup closed");
            this.confimationPop = false;
        }
        /* function to open update popup */
        openUpdatePopup() {
            this.closePopUp();
            this.updatePop = true;
            // console.log("edit popup opened");
        }
        /* Function to close update popup */
        closeUpdatePopup() {
            this.updatePop = false;
        }
        /* function to open popup to add source */
        showAddSourcePops() {
            //console.log('clicked');
            this.isSourcePop = true;
        }
        /* function to hide popup to add source */
        hideAddSourcePops() {
            this.isSourcePop = false;
        }
        /* function to show popup for adding reference */
        showAddReferPops() {
            this.isReferPop = true;
        }
        /* function to hide popup for adding reference */
        hideAddReferPops() {
            this.isReferPop = false;
        }
        /* Reload the Enquiry Form and clear data */
        reloadEnquiryForm() {
            this.clearFormData();
            this.closePopUp();
        }
        customComponentUpdated(val, data) {
            this.componentListObject[data.component_id].enq_custom_value = val;
            // console.log(this.componentListObject);
        }
        navigateToEdit() {
            let val;
            this.prefill.fetchLastDetail().subscribe(el => {
                this.router.navigate(['/view/leads/enquiry/edit/' + el.institute_enquiry_id]);
            });
        }
        /* --------------------------------------------------------------------------------------------------------- */
        /* ---------------------------------------------- Institute Editor Logic ------------------------------------------------- */
        /* --------------------------------------------------------------------------------------------------------- */
        /* function to open popup to add institute */
        openAddInstitute() {
            this.isInstitutePop = true;
        }
        /* function to hide popup to add institute */
        closeInstituteAdder() {
            this.isInstitutePop = false;
            this.isNewInstitute = false;
            this.createInstitute.instituteName = '';
            this.fetchInstituteInfo();
        }
        /* function to set-unset isActive status for add institute */
        toggleInstituteActive(event) {
            if (event) {
                this.createInstitute.isActive = "Y";
            }
            else {
                this.createInstitute.isActive = "N";
            }
        }
        /* function to add institute data to server */
        addInstituteData() {
            this.prefill.createNewInstitute(this.createInstitute).subscribe(el => {
                if (el.message === "OK") {
                    this.prefill.getSchoolDetails().subscribe(data => {
                        this.school = data;
                        this.instituteList = this.school;
                        this.instituteList.forEach(el => {
                            el.edit = false;
                        });
                        this.closeAddInstitute();
                    }, err => {
                        this.showErrorMessage('error', '', err.error.message);
                    });
                    // console.log("institute Added");
                }
                else {
                    // console.log("Institute Name already exist!");
                }
            }, err => {
                //console.log(err);
                this.showErrorMessage('error', '', err.error.message);
            });
        }
        /* toggle visibility of new institute form */
        toggleInstituteAdd() {
            let icon = document.getElementById('add-institute-icon').innerHTML;
            if (icon == '+') {
                this.isNewInstitute = true;
                document.getElementById('add-institute-icon').innerHTML = '-';
            }
            else if (icon == '-') {
                this.isNewInstitute = false;
                this.createInstitute.instituteName = '';
                document.getElementById('add-institute-icon').innerHTML = '+';
            }
        }
        /* close add new institute */
        closeAddInstitute() {
            this.isNewInstitute = false;
            document.getElementById('add-institute-icon').innerHTML = '+';
            this.createInstitute.instituteName = '';
        }
        fetchInstituteInfo() {
            this.prefill.getSchoolDetails().subscribe(data => {
                this.school = data;
                this.instituteList = this.school;
                this.instituteList.forEach(el => {
                    el.edit = false;
                });
            });
        }
        editInstitute(id) {
            this.instituteList.forEach(el => {
                if (el.school_id == id) {
                    el.edit = true;
                }
            });
        }
        cancelEditInstitute(id) {
            this.fetchInstituteInfo();
        }
        updateInstitute(id) {
            this.instituteList.forEach(el => {
                if (el.school_id == id) {
                    this.poster.updateInstituteDetails(id, el).subscribe(res => {
                        this.showErrorMessage('success', '', 'Institute name updated');
                        this.fetchInstituteInfo();
                    }, err => {
                        this.showErrorMessage('error', 'We couldn\'t process your request', err.error.message);
                        this.fetchInstituteInfo();
                    });
                }
            });
        }
        deleteInstitute(id) {
            this.poster.deleteInstitute(id).subscribe(res => {
                this.showErrorMessage('success', '', " Institute record deleted successfully");
                this.fetchInstituteInfo();
            }, err => {
                this.showErrorMessage('error', 'Your request has been denied', err.error.message);
                this.fetchInstituteInfo();
            });
        }
        /* --------------------------------------------------------------------------------------------------------- */
        /* ---------------------------------------------- Reference Editor Logic ------------------------------------------------- */
        /* --------------------------------------------------------------------------------------------------------- */
        /* function to open popup to add Reference */
        openAddRefer() {
            this.isReferPop = true;
        }
        /* function to hide popup to add Reference */
        closeReferAdder() {
            this.isReferPop = false;
            this.isNewRefer = false;
            this.createReferer.name = '';
        }
        /* function to add Reference data to server */
        addReferData() {
            if (this.createReferer.name.trim() != '') {
                if ((this.referList.filter(x => x.name == this.createReferer.name.trim())).length == 0) {
                    this.prefill.createReferer(this.createReferer).subscribe(el => {
                        this.closeAddRefer();
                        this.fetchReferInfo();
                    }, err => {
                        this.showErrorMessage('error', '', err.error.message);
                    });
                }
                else {
                    this.showErrorMessage('error', '', 'Referrer name already exist!');
                }
            }
            else {
                this.showErrorMessage('info', '', 'Please enter Referrer name');
            }
        }
        /* toggle visibility of new Reference form */
        toggleReferAdd() {
            let icon = document.getElementById('add-refer-icon').innerHTML;
            if (icon == '+') {
                this.isNewRefer = true;
                document.getElementById('add-refer-icon').innerHTML = '-';
            }
            else if (icon == '-') {
                this.isNewRefer = false;
                this.createReferer.name = '';
                document.getElementById('add-refer-icon').innerHTML = '+';
            }
        }
        /* close add new Reference */
        closeAddRefer() {
            this.isNewRefer = false;
            document.getElementById('add-refer-icon').innerHTML = '+';
            this.createReferer.name = '';
        }
        fetchReferInfo() {
            this.prefill.getLeadReffered().subscribe(data => {
                this.referList = data;
                this.referList.forEach(el => {
                    el.edit = false;
                });
            }, err => {
                this.referList = [];
            });
        }
        editRefer(id) {
            this.referList.forEach(el => {
                if (el.id == id) {
                    el.edit = true;
                    el.new_referrer_name = el.name;
                }
            });
        }
        cancelEditRefer(id) {
            let temp = this.referList.filter(el => el.id == id);
            if (temp) {
                temp[0].edit = false;
                temp[0].new_referrer_name = temp[0].name;
            }
        }
        updateRefer(id) {
            this.referList.forEach(el => {
                if (el.id == id) {
                    let data = {
                        id: id,
                        name: el.new_referrer_name,
                        inst_id: sessionStorage.getItem('institute_id')
                    };
                    this.auth.showLoader();
                    this.poster.updateReferDetails(data).subscribe(res => {
                        this.auth.hideLoader();
                        this.showErrorMessage('success', '', 'Reference updated Successfully');
                        this.fetchReferInfo();
                    }, err => {
                        this.auth.hideLoader();
                        this.showErrorMessage('error', '', err.error.message);
                    });
                }
            });
        }
        deleteRefer(id, name) {
            let data = {
                id: id,
                name: name,
                inst_id: sessionStorage.getItem('institute_id')
            };
            this.auth.showLoader();
            this.poster.deleteRefer(data).subscribe(res => {
                this.auth.hideLoader();
                this.showErrorMessage('success', '', 'Reference deleted Successfully');
                this.referList.filter(x => (x.id == id)).splice(0, 1);
                this.fetchReferInfo();
            }, err => {
                this.auth.hideLoader();
                let msg;
                if (err.status == 500) {
                    msg = JSON.parse(err._body);
                    this.showErrorMessage('error', '', msg.message);
                }
                else {
                    this.showErrorMessage('error', '', err.error.message);
                }
            });
        }
        /* --------------------------------------------------------------------------------------------------------- */
        /* ---------------------------------------------- Source Editor Logic ------------------------------------------------- */
        /* --------------------------------------------------------------------------------------------------------- */
        /* function to open popup to add Source */
        openAddSource() {
            this.isSourcePop = true;
        }
        /* function to hide popup to add Source */
        closeSourceAdder() {
            this.isSourcePop = false;
            this.isNewSource = false;
            this.createSource.name = '';
            this.fetchSourceInfo();
        }
        /* function to add Source data to server */
        addSourceData() {
            if (this.createSource.name.trim() != '') {
                if ((this.sourceList.filter(x => x.name == this.createSource.name.trim())).length == 0) {
                    this.auth.showLoader();
                    this.prefill.createSource(this.createSource).subscribe(el => {
                        this.auth.hideLoader();
                        this.fetchSourceInfo();
                        this.closeAddSource();
                    }, err => {
                        this.auth.hideLoader();
                        this.showErrorMessage('error', '', err.error.message);
                    });
                }
                else {
                    this.showErrorMessage('error', '', 'Source name already exist!');
                }
            }
            else {
                this.showErrorMessage('info', '', 'Please enter source name');
            }
        }
        /* toggle visibility of new Source form */
        toggleSourceAdd() {
            let icon = document.getElementById('add-source-icon').innerHTML;
            if (icon == '+') {
                this.isNewSource = true;
                document.getElementById('add-source-icon').innerHTML = '-';
            }
            else if (icon == '-') {
                this.isNewSource = false;
                this.createSource.name = '';
                document.getElementById('add-source-icon').innerHTML = '+';
            }
        }
        /* close add new Source */
        closeAddSource() {
            this.isNewSource = false;
            document.getElementById('add-source-icon').innerHTML = '+';
            this.createSource.name = '';
        }
        /* Source fetch via API*/
        fetchSourceInfo() {
            this.prefill.getLeadSource().subscribe(data => {
                this.sourceLead = data;
                this.sourceList = this.sourceLead;
                this.sourceList.forEach(el => {
                    el.edit = false;
                });
            }, err => {
                this.sourceList = [];
            });
        }
        /* Source edit open*/
        editSource(id) {
            this.sourceList.forEach(el => {
                if (el.id == id) {
                    el.edit = true;
                    el.new_source_name = el.name;
                }
            });
        }
        /* Source edit cancel*/
        cancelEditSource(id) {
            // this.fetchSourceInfo();
            let temp = this.sourceList.filter(el => el.id == id);
            if (temp) {
                temp[0].edit = false;
                temp[0].new_source_name = temp[0].name;
            }
        }
        /* Source update*/
        updateSource(id) {
            this.sourceList.forEach(el => {
                if (el.id == id) {
                    let data = {
                        id: id,
                        name: el.new_source_name,
                        inst_id: sessionStorage.getItem('institute_id')
                    };
                    this.auth.showLoader();
                    this.poster.updateSourceDetails(data).subscribe(res => {
                        this.auth.hideLoader();
                        this.showErrorMessage('success', '', 'Source updated successfully');
                        this.fetchSourceInfo();
                    }, err => {
                        this.auth.hideLoader();
                        this.showErrorMessage('error', '', err.error.message);
                    });
                }
            });
        }
        /* =================================================== have not used ========================================================================= */
        timeChanges(ev, id) {
            if (ev.split(' ')[0] != '') {
                this.hour = ev.split(' ')[0];
                this.meridian = ev.split(' ')[1];
                if (this.minute == "") {
                    this.minute = this.minArr[1];
                }
            }
            else {
                this.hour = '';
                this.meridian = '';
                this.minute = this.minArr[0];
            }
            this.notifyMeCheckBoxChangesDetect();
        }
        /* Source delete*/
        deleteSource(id) {
            this.sourceList.forEach(el => {
                if (el.id == id) {
                    let data = {
                        id: id,
                        name: el.name,
                        inst_id: sessionStorage.getItem('institute_id')
                    };
                    this.auth.showLoader();
                    this.poster.deleteSource(data).subscribe(res => {
                        this.auth.hideLoader();
                        this.showErrorMessage('success', '', 'Source deleted successfully');
                        this.fetchSourceInfo();
                    }, err => {
                        this.auth.hideLoader();
                        this.showErrorMessage('error', '', err.error.message);
                    });
                }
            });
        }
        isEnquiryAdministrator() {
            if (sessionStorage.getItem('permissions') == null || sessionStorage.getItem('permissions') == undefined
                || sessionStorage.getItem('permissions') == '' || sessionStorage.getItem('username') == 'admin') {
                this.isEnquiryAdmin = true;
            }
            else {
                let permissions = [];
                permissions = JSON.parse(sessionStorage.getItem('permissions'));
                /* User has permission to view all enquiries */
                if (this.role_feature.LEAD_ENQUIRY_FULL_ACCESS) {
                    this.isEnquiryAdmin = true;
                }
                /* User is not authorized as enquiry admin and see only enquiry assigned to him */
                else {
                    this.isEnquiryAdmin = false;
                }
            }
        }
        getLastAddName() {
            if (this.lastDetail != null) {
                return this.lastDetail.name;
            }
            else {
                return "";
            }
        }
        getLastEnqNum() {
            if (this.lastDetail != null) {
                return this.lastDetail.enquiry_no;
            }
            else {
                return "";
            }
        }
        getLastUpdateTime() {
            if (this.lastDetail != null) {
                return moment__WEBPACK_IMPORTED_MODULE_2__(this.lastDetail.enquiry_creation_datetime).fromNow();
            }
            else {
                return "";
            }
        }
        clearAddEnquiryDate() {
            this.newEnqData.enquiry_date = "";
        }
        clearAddFollowUpDate() {
            this.newEnqData.followUpDate = "";
            this.hour = '';
            this.minute = '';
            this.meridian = '';
        }
        // MultiBranch
        multiBranchInstituteFound(id) {
            this.prefill.getAllSubBranches(id).subscribe((res) => {
                this.branchesList = res;
            }, err => {
                console.log(err);
            });
        }
        branchUpdated(e) {
            this.auth.showLoader();
            this.newEnqData.source_instituteId = e;
            this.prefill.fetchAssignedToData(e).subscribe(res => {
                this.auth.hideLoader();
                this.enqAssignTo = res;
                this.newEnqData.assigned_to = "-1";
            }, err => {
                this.auth.hideLoader();
            });
        }
        courseMasterChange(e) {
            if (e != '-1') {
                this.masterCourseData.map(el => {
                    if (el.master_course == e) {
                        if (el.coursesList == null || el.coursesList.length == 0) {
                            this.course_course = [];
                        }
                        else {
                            this.course_course = el.coursesList;
                        }
                    }
                });
            }
            else {
                this.course_course = [];
            }
        }
        cancelForm() {
            this.router.navigate(['/view/leads/enquiry']);
            sessionStorage.removeItem('enquiryPrefill');
        }
    };
    EnquiryAddComponent.ctorParameters = () => [
        { type: _services_fetchprefilldata_service__WEBPACK_IMPORTED_MODULE_8__["FetchprefilldataService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _services_enquiry_services_post_enquiry_data_service__WEBPACK_IMPORTED_MODULE_7__["PostEnquiryDataService"] },
        { type: _services_login_services_login_service__WEBPACK_IMPORTED_MODULE_10__["LoginService"] },
        { type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticatorService"] },
        { type: _services_multiBranchdata_service__WEBPACK_IMPORTED_MODULE_11__["MultiBranchDataService"] },
        { type: _services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonServiceFactory"] },
        { type: _services_http_service__WEBPACK_IMPORTED_MODULE_9__["HttpService"] },
        { type: _services_common_api_call_service__WEBPACK_IMPORTED_MODULE_12__["CommonApiCallService"] }
    ];
    EnquiryAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-enquiry-add',
            template: __importDefault(__webpack_require__(/*! raw-loader!./enquiry-add.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/leads/enquiry-add/enquiry-add.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./enquiry-add.component.scss */ "./src/app/components/leads/enquiry-add/enquiry-add.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_services_fetchprefilldata_service__WEBPACK_IMPORTED_MODULE_8__["FetchprefilldataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_enquiry_services_post_enquiry_data_service__WEBPACK_IMPORTED_MODULE_7__["PostEnquiryDataService"],
            _services_login_services_login_service__WEBPACK_IMPORTED_MODULE_10__["LoginService"],
            _services_authenticator_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticatorService"],
            _services_multiBranchdata_service__WEBPACK_IMPORTED_MODULE_11__["MultiBranchDataService"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonServiceFactory"],
            _services_http_service__WEBPACK_IMPORTED_MODULE_9__["HttpService"],
            _services_common_api_call_service__WEBPACK_IMPORTED_MODULE_12__["CommonApiCallService"]])
    ], EnquiryAddComponent);
    return EnquiryAddComponent;
})();



/***/ }),

/***/ "./src/app/components/leads/enquiry/enquiry-custom/user-enquiry.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/components/leads/enquiry/enquiry-custom/user-enquiry.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGVhZHMvZW5xdWlyeS9lbnF1aXJ5LWN1c3RvbS91c2VyLWVucXVpcnkuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/leads/enquiry/enquiry-custom/user-enquiry.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/leads/enquiry/enquiry-custom/user-enquiry.component.ts ***!
  \***********************************************************************************/
/*! exports provided: UserEnquiryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEnquiryComponent", function() { return UserEnquiryComponent; });
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

let UserEnquiryComponent = /** @class */ (() => {
    let UserEnquiryComponent = class UserEnquiryComponent {
        constructor() { }
        ngOnInit() {
        }
    };
    UserEnquiryComponent.ctorParameters = () => [];
    UserEnquiryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'custom-enquiry',
            template: __importDefault(__webpack_require__(/*! raw-loader!./user-enquiry.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/leads/enquiry/enquiry-custom/user-enquiry.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./user-enquiry.component.scss */ "./src/app/components/leads/enquiry/enquiry-custom/user-enquiry.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], UserEnquiryComponent);
    return UserEnquiryComponent;
})();



/***/ }),

/***/ "./src/app/components/leads/leads-home/leads-home.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/leads/leads-home/leads-home.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* ===============================header colors=======================*/\n.table-format-first .table-responsive table th,\n.table-format-first .table-responsive table td {\n  text-align: center;\n  padding: 10px 5px;\n}\n.table-format-first .table-responsive table th {\n  text-transform: capitalize;\n  font-size: 14px;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper {\n  display: inline-block;\n  overflow: initial;\n  margin-left: 0;\n  width: auto;\n  position: relative;\n  background: transparent;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox {\n  z-index: 2;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label {\n  font-size: 16px;\n  margin-left: 7px;\n  font-weight: 600;\n  vertical-align: middle;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:after, .table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:before {\n  z-index: 1;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper:after {\n  content: '';\n  width: 20px;\n  height: 20px;\n  background: #fff;\n  left: 0;\n  top: 0;\n  position: absolute;\n}\n.table-format-first .table-responsive table tbody tr td .fa-trash-o {\n  color: #f44336;\n  font-size: 20px;\n}\n.table-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-top: 10px;\n}\n.table-container .heading-container {\n  background: #e0eaec;\n  display: flex;\n  flex-direction: row;\n  font-size: 14px;\n  font-weight: 600;\n  text-align: left;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n}\n.table-container .heading-container .heading-item {\n  width: 10%;\n  text-align: center;\n}\n.table-container .value-outer-container {\n  display: flex;\n  flex-direction: column;\n  min-height: 53vh;\n  max-height: 54vh;\n  overflow-x: hidden;\n  overflow-y: auto;\n  border: 1px solid #ccc;\n}\n.table-container .value-outer-container .value-container {\n  display: flex;\n  flex-direction: row;\n  text-align: left;\n  padding: 4px;\n  font-size: 12px;\n  border-bottom: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n  border-top: none;\n}\n.table-container .value-outer-container .value-container .value-item {\n  width: 10%;\n  text-align: center;\n}\n/* ===============================header colors=======================*/\n.table-format-first .table-responsive table th,\n.table-format-first .table-responsive table td {\n  text-align: center;\n  padding: 10px 5px;\n}\n.table-format-first .table-responsive table th {\n  text-transform: capitalize;\n  font-size: 14px;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper {\n  display: inline-block;\n  overflow: initial;\n  margin-left: 0;\n  width: auto;\n  position: relative;\n  background: transparent;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox {\n  z-index: 2;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label {\n  font-size: 16px;\n  margin-left: 7px;\n  font-weight: 600;\n  vertical-align: middle;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:after, .table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:before {\n  z-index: 1;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper:after {\n  content: '';\n  width: 20px;\n  height: 20px;\n  background: #fff;\n  left: 0;\n  top: 0;\n  position: absolute;\n}\n.table-format-first .table-responsive table tbody tr td .fa-trash-o {\n  color: #f44336;\n  font-size: 20px;\n}\n.table-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-top: 10px;\n}\n.table-container .heading-container {\n  background: #e0eaec;\n  display: flex;\n  flex-direction: row;\n  font-size: 14px;\n  font-weight: 600;\n  text-align: left;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n}\n.table-container .heading-container .heading-item {\n  width: 10%;\n  text-align: center;\n}\n.table-container .value-outer-container {\n  display: flex;\n  flex-direction: column;\n  min-height: 53vh;\n  max-height: 54vh;\n  overflow-x: hidden;\n  overflow-y: auto;\n  border: 1px solid #ccc;\n}\n.table-container .value-outer-container .value-container {\n  display: flex;\n  flex-direction: row;\n  text-align: left;\n  padding: 4px;\n  font-size: 12px;\n  border-bottom: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n  border-top: none;\n}\n.table-container .value-outer-container .value-container .value-item {\n  width: 10%;\n  text-align: center;\n}\n/** these css for gear icon download options\n* created by laxmi\n*/\nsvg:hover #gearIcon {\n  fill: #0084f6;\n}\n.asHover:hover {\n  color: #0084f6 !important;\n}\n.download:hover {\n  cursor: pointer;\n}\n.made-in {\n  font-size: 17px;\n  font-weight: bold;\n  text-align: left;\n}\n.dropdown > ul {\n  background: #fff;\n  padding: 10px 20px;\n  border: 1px solid #eaeaeb;\n  border-top: 0;\n  margin-top: 3px;\n  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 6px 10px 0 rgba(0, 0, 0, 0.12);\n}\n.dropdown > ul li {\n  color: #333;\n}\n.dropdown > ul li strong {\n  font-weight: 600;\n  display: block;\n}\n.dropdown > ul li a {\n  display: block;\n  color: #333;\n}\n.login-tube nav > ul > li {\n  display: inline-block;\n  position: relative;\n}\n.login-tube nav > ul > li > a {\n  color: #333;\n  text-decoration: none;\n  padding: 5px 10px;\n  display: block;\n  transition: all .4s;\n}\n.login-tube nav > ul > li > a:hover,\n.login-tube nav > ul > li:hover > a {\n  text-decoration: none;\n  background: #ccc;\n}\n.login-tube nav > ul > li .dropdown {\n  position: absolute;\n  visibility: hidden;\n  right: 0;\n  top: 100%;\n  min-width: 200px;\n  border-top: 0;\n  opacity: 0;\n  transition: all 0.1s cubic-bezier(0.55, 0, 0.55, 0.2);\n  transition-duration: .2s;\n  transform: scale(0.5);\n}\n.login-tube nav > ul > li .dropdown > ul li {\n  line-height: normal;\n}\n.login-tube nav > ul > li .dropdown > ul li a {\n  display: block;\n  margin: 5px 0;\n}\n.login-tube nav > ul > li .dropdown > ul li a:hover {\n  color: #0084f6;\n}\n.login-tube nav > ul > li .dropdown > ul ul {\n  padding-left: 15px;\n  padding-top: 10px;\n}\n.login-tube nav > ul > li .dropdown > ul ul ul {\n  padding-top: 0;\n}\n.login-tube nav > ul > li:hover .dropdown {\n  visibility: visible;\n  position: absolute;\n  opacity: 1;\n  right: 0;\n  top: 100%;\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition-duration: .5s;\n  transform: scale(1);\n}\n.span-button {\n  border: 1px solid #0084f6;\n  padding: 4px 8px;\n  color: #0084f6;\n  font-size: .9em;\n  border-radius: 2px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.span-button svg {\n  margin: -3px 0;\n  height: 14px;\n}\nlogin-nav > li {\n  display: inline-block;\n  padding: 0 7px;\n  cursor: pointer;\n  vertical-align: text-bottom;\n}\nlogin-nav > li .dropdown {\n  position: absolute;\n  right: 0;\n  top: 100%;\n  padding-top: 10px;\n}\nlogin-nav > li .icons {\n  width: 35px;\n  height: 35px;\n  display: block;\n  text-align: center;\n  box-sizing: border-box;\n  border-radius: 50%;\n  padding-top: 3px;\n  transition: all 0.1s;\n  border: 1px solid transparent;\n}\nlogin-nav > li .icons svg {\n  width: 25px;\n  color: #034979;\n}\nlogin-nav > li .icons svg .cls-1 {\n  stroke: #034979;\n  stroke-linejoin: unset;\n  border: none;\n}\nlogin-nav > li .user-info {\n  white-space: nowrap;\n  margin-right: 40px;\n  width: auto;\n  display: block;\n  position: relative;\n}\nlogin-nav > li .user-info > .icons {\n  display: inline-block;\n  vertical-align: middle;\n}\nlogin-nav > li .user-info > span {\n  vertical-align: middle;\n  display: inline-block;\n}\nlogin-nav > li .user-info:after {\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  content: \"\\f107\";\n  font-size: 17px;\n  position: absolute;\n  right: -20px;\n  top: 10px;\n}\n/**\n  this css is for report section css for cards\n  added by laxmi\n*/\n.report-box {\n  width: 100%;\n  height: 100%;\n  padding: 10px;\n}\n.report-box ul.card-box li.card-row {\n  margin: 10px 0px;\n}\n.report-box ul.card {\n  padding: 15px 10px;\n  border: 1px solid #efefef;\n  background: #fff;\n  height: 120px;\n  border-radius: 4px;\n  cursor: pointer;\n  text-align: left;\n  margin: 10px 0px;\n  box-shadow: 0px 0px 2px 0px;\n}\n.report-box ul.card li {\n  padding: 5px;\n}\n.report-box ul.card li:first-child {\n  font-size: 14px;\n  font-weight: 600;\n  padding: 10px 5px;\n}\n.report-box ul.card li:nth-child(2n) {\n  font-size: 12px;\n}\n.disabled {\n  cursor: not-allowed;\n  background: lightgrey;\n}\n/* =================================================================================== */\n.middle-section {\n  padding: 1%;\n}\n.round {\n  border-radius: 43px;\n  font-size: 30px;\n  padding-left: 15px;\n  padding-right: 15px;\n  padding-top: 1px;\n  padding-bottom: 0px;\n}\n.status-wise-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  border-bottom: 1px solid rgba(10, 10, 10, 0.5);\n  padding-bottom: 2%;\n}\n.status-wise-container .status-wise-header-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n.status-wise-container .status-wise-header-container .header-title {\n  text-align: left;\n  font-size: 14px;\n  font-weight: 600;\n  color: #0084f6;\n}\n.status-wise-container .status-wise-header-container .filter-date-container .enquiry-state-date {\n  font-size: 14px;\n  color: #666;\n  margin-right: 10px;\n  padding-top: 4px;\n  display: inline-block;\n}\n.status-wise-container .status-wise-dashboard-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 100%;\n  margin-top: 10px;\n}\n.status-wise-container .status-wise-dashboard-container .status-wise-dashboard-item {\n  display: flex;\n  flex-direction: column;\n  width: 18%;\n  text-align: center;\n  font-size: 12px;\n  border-radius: 6px;\n  color: white;\n}\n.status-wise-container .status-wise-dashboard-container .status-wise-dashboard-item .count-container {\n  padding: 10px;\n  border-bottom: 1px solid white;\n  font-size: 20px;\n  font-weight: 600;\n}\n.status-wise-container .status-wise-dashboard-container .status-wise-dashboard-item .dashboard-item-name {\n  font-weight: 600;\n  padding: 10px;\n}\n.status-wise-container .all {\n  background: #40C7F1;\n}\n.status-wise-container .pending {\n  background: darkorange;\n}\n.status-wise-container .hot {\n  background: #F05050;\n}\n.status-wise-container .admitted {\n  background: #29C24B;\n}\n.status-wise-container .not-converted {\n  background: #528FF0;\n}\n.leads-menu-section-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  flex-wrap: wrap;\n  padding-top: 20px;\n  margin-top: 20px;\n  width: 100%;\n}\n.leads-menu-section-container .leads-menu-item {\n  padding: 15px 10px;\n  width: 27%;\n  background: #fff;\n  height: 100px;\n  border-radius: 4px;\n  cursor: pointer;\n  text-align: left;\n  margin: 1%;\n  margin-right: 5%;\n  box-shadow: 0px 3px 6px #696969;\n}\n.leads-menu-section-container .leads-menu-item .menu-title {\n  width: 100%;\n  justify-content: flex-start;\n  font-size: 14px;\n  font-weight: 600;\n  display: flex;\n  flex-direction: row;\n}\n.leads-menu-section-container .leads-menu-item .menu-title img {\n  width: 25px;\n  height: 25px;\n}\n.leads-menu-section-container .leads-menu-item .menu-title span {\n  margin-left: 10px;\n  margin-top: 5px;\n}\n.leads-menu-section-container .leads-menu-item .menu-description {\n  padding: 10px;\n  font-size: 12px;\n}\n.widgetDatepicker {\n  position: absolute;\n  margin-left: -10%;\n  width: 1px;\n  visibility: hidden;\n  opacity: 0;\n}\nbutton {\n  background: transparent;\n}\nbutton.drag-button {\n  cursor: all-scroll;\n  margin-left: 16px;\n}\n.dropdown {\n  position: absolute;\n  top: 35%;\n  right: 1%;\n}\n.dropdown-menu {\n  top: 6%;\n  left: -162px;\n  border: 1px solid #0f0e0e;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY3NzL2NvbW1vbi92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9sZWFkcy9sZWFkcy1ob21lL2xlYWRzLWhvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXNzZXRzL2Nzcy9jb21tb24vY29tbW9uLXdlYi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVlBLHVFQUFBO0FBV0E7O0VBS2dCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUN4QmpDO0FEa0JBO0VBU2dCLDBCQUEwQjtFQUMxQixlQUFlO0FDdkIvQjtBRGFBO0VBZ0I0QixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHVCQUF1QjtBQ3pCbkQ7QURJQTtFQXVCZ0MsVUFBVTtBQ3ZCMUM7QURBQTtFQTBCZ0MsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0FDdEJ0RDtBRFBBO0VBZ0NvQyxVQUFVO0FDckI5QztBRFhBO0VBb0NnQyxXQUFXO0VBQ1gsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsT0FBTztFQUNQLE1BQU07RUFDTixrQkFBa0I7QUNyQmxEO0FEckJBO0VBOEM0QixjQWxEYjtFQW1EYSxlQUFlO0FDckIzQztBRDhCQTtFQUNJLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGdCQUFnQjtBQzNCcEI7QUR1QkE7RUFNTSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQix5QkFBeUI7QUN6Qi9CO0FEVUE7RUFpQlEsVUFBVTtFQUNWLGtCQUFrQjtBQ3ZCMUI7QURLQTtFQXNCTSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdC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RUErQ1EsZ0JBQWdCO0VBQ2hCLGFBQWE7QUF1Y3JCO0FBdmZBO0VBcURJLG1CQUFtQjtBQXNjdkI7QUEzZkE7RUF3REksc0JBQXNCO0FBdWMxQjtBQS9mQTtFQTJESSxtQkFBbUI7QUF3Y3ZCO0FBbmdCQTtFQThESSxtQkFBbUI7QUF5Y3ZCO0FBdmdCQTtFQWlFSSxtQkFBbUI7QUEwY3ZCO0FBdGNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0IsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFFaEIsV0FBVztBQXdjYjtBQWhkQTtFQVVJLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsZ0JBQWdCO0VBRWhCLCtCQUFnQztBQTBjcEM7QUE5ZEE7RUFzQk0sV0FBVztFQUNYLDJCQUEyQjtFQUMzQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixtQkFBbUI7QUE0Y3pCO0FBdmVBO0VBNkJRLFdBQVc7RUFDWCxZQUFZO0FBOGNwQjtBQTVlQTtFQWlDUSxpQkFBaUI7RUFDakIsZUFBZTtBQStjdkI7QUFqZkE7RUFzQ00sYUFBYTtFQUNiLGVBQWU7QUErY3JCO0FBemNBO0VBQ0ksa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFVBQVU7QUE0Y2Q7QUF6Y0E7RUFDSSx1QkFBdUI7QUE0YzNCO0FBN2NBO0VBR1Esa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQThjekI7QUEzY0E7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7QUE4Y1g7QUEzY0E7RUFDRSxPQUFPO0VBQ0wsWUFBWTtFQUNaLHlCQUFpQztBQThjckMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xlYWRzL2xlYWRzLWhvbWUvbGVhZHMtaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRwdWxsLUw6IGxlZnQ7XG4kcHVsbC1SOiByaWdodDtcbiRwdWxsLW5vbmU6IG5vbmU7XG4kZnVsbC13aWR0aDogMTAwJTtcbiRib3JkZXItYm94OiBib3JkZXItYm94O1xuJGJvcmRlci1jb2xvcjogI2RlZWFlZTtcbiRiZy13aGl0ZTogI2ZmZjtcbiRlcnJvci1jb2xvcjogI2ZmMDAwMDtcbiRjb21tb24tYmx1ZTogIzAwODRmNjtcbiRwcmltYXJ5LWNvbG9yOiAjMzMzO1xuJGJvcmRlci1jb21tb246I2VhZWFlYjtcblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PWhlYWRlciBjb2xvcnM9PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiRoZWFkZXItYmc6IzAwNjBBMztcbiRoZWFkZXItYm9yZGVyOiNlYWVhZWI7XG4kbGVmdE1lbnVCZzojZmFmYWZhO1xuJGxlZnRNZW51SG92ZXJCZzojMDA4NGY2O1xuJGxlZnRNZW51VGV4dEhvdmVyQ29sb3I6I2ZmZjtcbiRyZWRCdG46I2Y0NDMzNjtcbiRib3JkZXJjY2M6I2NjYztcbiRsaWdodEJsdWU6I2VmZjdmZjtcbiR0YWJsZUhlYWRpbmdCZ0NvbG9yOiAjMDA0YTdlO1xuLnRhYmxlLWZvcm1hdC1maXJzdCB7XG4gICAgLnRhYmxlLXJlc3BvbnNpdmUge1xuICAgICAgICB0YWJsZSB7XG4gICAgICAgICAgICB0aCxcbiAgICAgICAgICAgIHRkIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aCB7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGJvZHkge1xuICAgICAgICAgICAgICAgIHRyIHtcbiAgICAgICAgICAgICAgICAgICAgdGQge1xuICAgICAgICAgICAgICAgICAgICAgICAgLmZpZWxkLWNoZWNrYm94LXdyYXBwZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaW5pdGlhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZvcm0tY2hlY2tib3gge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZm9ybS1jaGVja2JveCtsYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDdweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJjphZnRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5mYS10cmFzaC1vIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHJlZEJ0bjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi50YWJsZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIC5oZWFkaW5nLWNvbnRhaW5lciB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZTBlYWVjO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgICAgLmhlYWRpbmctaXRlbSB7XG4gICAgICAgIHdpZHRoOiAxMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICB9XG4gICAgLnZhbHVlLW91dGVyLWNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIG1pbi1oZWlnaHQ6IDUzdmg7XG4gICAgICBtYXgtaGVpZ2h0OiA1NHZoO1xuICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICAudmFsdWUtY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgcGFkZGluZzogNHB4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICAgICAgLnZhbHVlLWl0ZW0ge1xuICAgICAgICAgIHdpZHRoOiAxMCU7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IiwiQGltcG9ydCBcIi4vc3JjL2Fzc2V0cy9jc3MvY29tbW9uL3ZhcmlhYmxlcy5zY3NzXCI7XG5AaW1wb3J0IFwiLi9zcmMvYXNzZXRzL2Nzcy9jb21tb24vY29tbW9uLXdlYi5zY3NzXCI7XG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4ubWlkZGxlLXNlY3Rpb257XG4gIHBhZGRpbmc6IDElO1xufVxuLnJvdW5ke1xuICBib3JkZXItcmFkaXVzOiA0M3B4O1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgICBwYWRkaW5nLXRvcDogMXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG59XG4uc3RhdHVzLXdpc2UtY29udGFpbmVye1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMTAsMTAsMTAsMC41KTtcbiAgcGFkZGluZy1ib3R0b206IDIlO1xuICAuc3RhdHVzLXdpc2UtaGVhZGVyLWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIC5oZWFkZXItdGl0bGV7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGNvbG9yOiAkY29tbW9uLWJsdWU7XG4gICAgfVxuICAgIC5maWx0ZXItZGF0ZS1jb250YWluZXJ7XG4gICAgICAuZW5xdWlyeS1zdGF0ZS1kYXRlIHtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgY29sb3I6ICM2NjY7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgIHBhZGRpbmctdG9wOiA0cHg7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAuc3RhdHVzLXdpc2UtZGFzaGJvYXJkLWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgLnN0YXR1cy13aXNlLWRhc2hib2FyZC1pdGVte1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICB3aWR0aDogMTglO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgLmNvdW50LWNvbnRhaW5lcntcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICB9XG4gICAgICAuZGFzaGJvYXJkLWl0ZW0tbmFtZXtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLmFsbHtcbiAgICBiYWNrZ3JvdW5kOiAjNDBDN0YxO1xuICB9XG4gIC5wZW5kaW5ne1xuICAgIGJhY2tncm91bmQ6IGRhcmtvcmFuZ2U7XG4gIH1cbiAgLmhvdHtcbiAgICBiYWNrZ3JvdW5kOiAjRjA1MDUwO1xuICB9XG4gIC5hZG1pdHRlZHtcbiAgICBiYWNrZ3JvdW5kOiAjMjlDMjRCO1xuICB9XG4gIC5ub3QtY29udmVydGVke1xuICAgIGJhY2tncm91bmQ6ICM1MjhGRjA7XG4gIH1cbn1cblxuLmxlYWRzLW1lbnUtc2VjdGlvbi1jb250YWluZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgLy8gYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMTAsMTAsMTAsMC41KTtcbiAgd2lkdGg6IDEwMCU7XG4gIC5sZWFkcy1tZW51LWl0ZW17XG4gICAgcGFkZGluZzogMTVweCAxMHB4O1xuICAgIHdpZHRoOiAyNyU7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBtYXJnaW46IDElO1xuICAgIG1hcmdpbi1yaWdodDogNSU7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggM3B4IDZweCAjNjk2OTY5O1xuICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4ICM2OTY5NjlcdDtcbiAgICAubWVudS10aXRsZXtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgaW1ne1xuICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgfVxuICAgICAgc3BhbntcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgIH1cbiAgICB9XG4gICAgLm1lbnUtZGVzY3JpcHRpb257XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cbiAgfVxufVxuXG5cbi53aWRnZXREYXRlcGlja2VyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luLWxlZnQ6IC0xMCU7XG4gICAgd2lkdGg6IDFweDtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgb3BhY2l0eTogMDtcbn1cblxuYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAmLmRyYWctYnV0dG9uIHtcbiAgICAgICAgY3Vyc29yOiBhbGwtc2Nyb2xsO1xuICAgICAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICB9XG59XG4uZHJvcGRvd257XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzNSU7XG4gIHJpZ2h0OiAxJTtcblxufVxuLmRyb3Bkb3duLW1lbnV7XG4gIHRvcDogNiU7XG4gICAgbGVmdDogLTE2MnB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxNSwgMTQsIDE0KVxuICB9IiwiQGltcG9ydCBcIi4vc3JjL2Fzc2V0cy9jc3MvY29tbW9uL3ZhcmlhYmxlcy5zY3NzXCI7XG4vKiogdGhlc2UgY3NzIGZvciBnZWFyIGljb24gZG93bmxvYWQgb3B0aW9uc1xuKiBjcmVhdGVkIGJ5IGxheG1pXG4qL1xuc3ZnOmhvdmVyICNnZWFySWNvbiB7XG4gIGZpbGw6ICMwMDg0ZjY7XG59XG5cbi5hc0hvdmVyOmhvdmVyIHtcbiAgY29sb3I6ICMwMDg0ZjYgIWltcG9ydGFudDtcbn1cblxuLmRvd25sb2FkOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubWFkZS1pbiB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5kcm9wZG93biB7XG4gICYgPiB1bCB7XG4gICAgYmFja2dyb3VuZDogJGJnLXdoaXRlO1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDsgLy8gd2lkdGg6IDIwMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICRoZWFkZXItYm9yZGVyO1xuICAgIGJvcmRlci10b3A6IDA7XG4gICAgbWFyZ2luLXRvcDogM3B4O1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA0cHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCA2cHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG5cbiAgICBsaSB7XG4gICAgICBjb2xvcjogIzMzMztcblxuICAgICAgc3Ryb25nIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG5cbiAgICAgIGEge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5sb2dpbi10dWJlIG5hdiA+IHVsID4gbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmxvZ2luLXR1YmUgbmF2ID4gdWwgPiBsaSA+IGEge1xuICBjb2xvcjogIzMzMztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRyYW5zaXRpb246IGFsbCAuNHM7XG59XG5cbi5sb2dpbi10dWJlIG5hdiA+IHVsID4gbGkgPiBhOmhvdmVyLFxuLmxvZ2luLXR1YmUgbmF2ID4gdWwgPiBsaTpob3ZlciA+IGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJhY2tncm91bmQ6ICNjY2M7XG59XG5cbi5sb2dpbi10dWJlIG5hdiA+IHVsID4gbGkgLmRyb3Bkb3duIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDEwMCU7XG4gIG1pbi13aWR0aDogMjAwcHg7XG4gIGJvcmRlci10b3A6IDA7XG4gIG9wYWNpdHk6IDA7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4xcyBjdWJpYy1iZXppZXIoLjU1LCAwLCAuNTUsIC4yKTtcbiAgdHJhbnNpdGlvbjogYWxsIC4xcyBjdWJpYy1iZXppZXIoLjU1LCAwLCAuNTUsIC4yKTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAuMjVzO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuMnM7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcblxuICAmID4gdWwge1xuICAgIGxpIHtcbiAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG5cbiAgICAgIGEge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWFyZ2luOiA1cHggMDtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBjb2xvcjogJGNvbW1vbi1ibHVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdWwge1xuICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG5cbiAgICAgIHVsIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5sb2dpbi10dWJlIG5hdiA+IHVsID4gbGk6aG92ZXIgLmRyb3Bkb3duIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvcGFjaXR5OiAxO1xuICByaWdodDogMDtcbiAgdG9wOiAxMDAlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuNHMgY3ViaWMtYmV6aWVyKC4yNSwgLjgsIC4yNSwgMSk7XG4gIHRyYW5zaXRpb246IGFsbCAuNHMgY3ViaWMtYmV6aWVyKC4yNSwgLjgsIC4yNSwgMSk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogLjVzO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuNXM7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG5cbi5wdWxsLXJpZ2h0IHtcbiAgLy8gbWFyZ2luLXRvcDogMjZweDtcbiAgLy8gbWFyZ2luLWxlZnQ6IDEyMnB4O1xufVxuXG4uc3Bhbi1idXR0b24ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDA4NGY2O1xuICBwYWRkaW5nOiA0cHggOHB4O1xuICBjb2xvcjogIzAwODRmNjtcbiAgZm9udC1zaXplOiAuOWVtO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICBzdmcge1xuICAgIG1hcmdpbjogLTNweCAwO1xuICAgIGhlaWdodDogMTRweDtcbiAgfVxufVxuXG5sb2dpbi1uYXYge1xuICAgICY+bGkge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHBhZGRpbmc6IDAgN3B4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbTtcbiAgICAgICAgLmRyb3Bkb3duIHtcbiAgICAgICAgICAgIC8vIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIHRvcDogMTAwJTtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgLmRyb3Bkb3duIHtcbiAgICAgICAgICAgICAgICAvLyBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5pY29ucyB7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuaWNvbnMge1xuICAgICAgICAgICAgd2lkdGg6IDM1cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDM1cHg7IC8vIGJvcmRlcjogMXB4IHNvbGlkICRib3JkZXItY29sb3I7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogM3B4O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMXM7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIHN2ZyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICAgICAgICAgICAgY29sb3I6IzAzNDk3OTtcblxuICAgICAgICAgICAgICAgIC5jbHMtMSB7XG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZTogIzAzNDk3OTtcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlLWxpbmVqb2luOiB1bnNldDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAudXNlci1pbmZvIHtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XG4gICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgJj4uaWNvbnMge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJj5zcGFuIHtcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICBmb250OiBub3JtYWwgbm9ybWFsIG5vcm1hbCAxNHB4LzEgRm9udEF3ZXNvbWU7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgICAgICAgICAgICAgIHRleHQtcmVuZGVyaW5nOiBhdXRvO1xuICAgICAgICAgICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXFxmMTA3XCI7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICByaWdodDogLTIwcHg7XG4gICAgICAgICAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4vKipcbiAgdGhpcyBjc3MgaXMgZm9yIHJlcG9ydCBzZWN0aW9uIGNzcyBmb3IgY2FyZHNcbiAgYWRkZWQgYnkgbGF4bWlcbiovXG4ucmVwb3J0LWJveCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHVsIHtcbiAgICAgICYuY2FyZC1ib3gge1xuICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgJi5jYXJkLXJvdyB7XG4gICAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgICAgJi5jYXJkIHtcbiAgICAgICAgICBwYWRkaW5nOiAxNXB4IDEwcHg7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VmZWZlZjtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgIGhlaWdodDogMTIwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgIG1hcmdpbjogMTBweCAwcHg7XG4gICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAycHggMHB4O1xuICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCA1cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgJjpudGgtY2hpbGQoMm4pe1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICB9XG4gICAgICB9XG4gIH1cbn1cblxuLmRpc2FibGVke1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICBiYWNrZ3JvdW5kOiBsaWdodGdyZXk7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/components/leads/leads-home/leads-home.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/leads/leads-home/leads-home.component.ts ***!
  \*********************************************************************/
/*! exports provided: LeadsHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeadsHomeComponent", function() { return LeadsHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _model_role_features__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../model/role_features */ "./src/app/model/role_features.ts");
/* harmony import */ var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/authenticator.service */ "./src/app/services/authenticator.service.ts");
/* harmony import */ var _services_enquiry_services_fetchenquiry_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/enquiry-services/fetchenquiry.service */ "./src/app/services/enquiry-services/fetchenquiry.service.ts");
/* harmony import */ var _services_fetchprefilldata_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/fetchprefilldata.service */ "./src/app/services/fetchprefilldata.service.ts");
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







let LeadsHomeComponent = /** @class */ (() => {
    let LeadsHomeComponent = class LeadsHomeComponent {
        constructor(router, cd, auth, enquire, prefill) {
            this.router = router;
            this.cd = cd;
            this.auth = auth;
            this.enquire = enquire;
            this.prefill = prefill;
            this.enquiryDate = [];
            this.jsonFlag = {
                isProfessional: false
            };
            this.jsonRolesFlags = {
                isShowManageEnquiry: false,
                isShowDataSetup: false,
                isShowCampaign: false,
                isShowCampaignReport: false,
                isShowAddCampaign: false,
                isShowAddEnquiry: false,
                isShowReport: false
            };
            this.enquiryStatus = [];
            this.role_feature = _model_role_features__WEBPACK_IMPORTED_MODULE_3__["role"].features;
            this.enquiryDate[0] = new Date(moment__WEBPACK_IMPORTED_MODULE_2__().date(1).format("YYYY-MM-DD"));
            this.enquiryDate[1] = new Date();
        }
        ngOnInit() {
            this.auth.institute_type.subscribe(res => {
                if (res == 'LANG') {
                    this.jsonFlag.isProfessional = true;
                }
                else {
                    this.jsonFlag.isProfessional = false;
                }
            });
            this.checkpermissinDetails();
            this.fetchenquiry();
        }
        checkpermissinDetails() {
            let userType = sessionStorage.getItem('userType');
            let username = sessionStorage.getItem('username');
            let array = Object.keys(this.jsonRolesFlags);
            if (sessionStorage.getItem('permissions') == '' && userType == '0' && username == 'admin') { // user role is admin
                array.forEach((flag) => {
                    this.jsonRolesFlags[flag] = true;
                });
            }
            else {
                array.forEach((flag) => {
                    this.jsonRolesFlags[flag] = false;
                });
                // quick enquiry  --110
                if (this.role_feature.LEAD_MANAGE_ENQUIRY) {
                    this.jsonRolesFlags.isShowManageEnquiry = true;
                    this.jsonRolesFlags.isShowAddEnquiry = true;
                }
                // enquiry  admin --115
                // if (this.role_feature.LEAD_ADD_CAMPAIGN) {
                //   this.jsonRolesFlags.isShowAddCampaign = true;
                // }
                if (this.role_feature.LEAD_MANAGE_CAMPAIGN) {
                    this.jsonRolesFlags.isShowCampaign = true;
                }
                if (this.role_feature.REPORTS_ENQUIRY_CAMPAIGN) {
                    this.jsonRolesFlags.isShowCampaignReport = true;
                }
                // enquiry  report --722
                if (this.role_feature.REPORTS_ENQUIRY_REFFER_BY
                    || this.role_feature.REPORTS_ENQUIRY_SOURCE || this.role_feature.REPORT_ENQUIRY_COUNSELLOR) {
                    this.jsonRolesFlags.isShowReport = true;
                }
            }
        }
        fetchenquiry() {
            let obj = {
                updateDateFrom: moment__WEBPACK_IMPORTED_MODULE_2__().date(1).format("YYYY-MM-DD"),
                updateDateTo: moment__WEBPACK_IMPORTED_MODULE_2__().format("YYYY-MM-DD")
            };
            this.auth.showLoader();
            this.enquire.fetchEnquiryWidgetView(obj).subscribe(res => {
                let result;
                result = res;
                this.enquiryStatus = result.statusMap;
                this.totalEnquiryCount = result.totalcount;
                console.log(res);
                this.auth.hideLoader();
            }, err => {
                this.auth.hideLoader();
            });
        }
        getEnqStartDate() {
            this.cd.markForCheck();
            let date = moment__WEBPACK_IMPORTED_MODULE_2__().date(1).format("YYYY-MM-DD");
            return this.enquiryDate[0];
        }
        getEnqEndDate() {
            this.cd.markForCheck();
            return this.enquiryDate[1];
        }
        updateEnqChartByDate(e) {
            this.cd.markForCheck();
            let obj = {
                updateDateFrom: moment__WEBPACK_IMPORTED_MODULE_2__(e[0]).format("YYYY-MM-DD"),
                updateDateTo: moment__WEBPACK_IMPORTED_MODULE_2__(e[1]).format("YYYY-MM-DD")
            };
            this.auth.showLoader();
            this.enquire.fetchEnquiryWidgetView(obj).subscribe((res) => {
                this.auth.hideLoader();
                this.cd.markForCheck();
                let result;
                result = res;
                this.enquiryStatus = result.statusMap;
                this.totalEnquiryCount = result.totalcount;
            });
        }
        openCalendar(id) {
            document.getElementById(id).click();
        }
    };
    LeadsHomeComponent.ctorParameters = () => [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticatorService"] },
        { type: _services_enquiry_services_fetchenquiry_service__WEBPACK_IMPORTED_MODULE_5__["FetchenquiryService"] },
        { type: _services_fetchprefilldata_service__WEBPACK_IMPORTED_MODULE_6__["FetchprefilldataService"] }
    ];
    LeadsHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-leads-home',
            template: __importDefault(__webpack_require__(/*! raw-loader!./leads-home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/leads/leads-home/leads-home.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./leads-home.component.scss */ "./src/app/components/leads/leads-home/leads-home.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _services_authenticator_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticatorService"],
            _services_enquiry_services_fetchenquiry_service__WEBPACK_IMPORTED_MODULE_5__["FetchenquiryService"],
            _services_fetchprefilldata_service__WEBPACK_IMPORTED_MODULE_6__["FetchprefilldataService"]])
    ], LeadsHomeComponent);
    return LeadsHomeComponent;
})();



/***/ }),

/***/ "./src/app/components/leads/leads-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/leads/leads-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: LeadsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeadsRoutingModule", function() { return LeadsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _leads_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./leads.component */ "./src/app/components/leads/leads.component.ts");
/* harmony import */ var _leads_home_leads_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./leads-home/leads-home.component */ "./src/app/components/leads/leads-home/leads-home.component.ts");
/* harmony import */ var _enquiry_add_enquiry_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./enquiry-add/enquiry-add.component */ "./src/app/components/leads/enquiry-add/enquiry-add.component.ts");
/* harmony import */ var _data_setup_data_setup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data-setup/data-setup.component */ "./src/app/components/leads/data-setup/data-setup.component.ts");
/* harmony import */ var _manage_campaign_manage_campaign_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./manage-campaign/manage-campaign.component */ "./src/app/components/leads/manage-campaign/manage-campaign.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







let LeadsRoutingModule = /** @class */ (() => {
    let LeadsRoutingModule = class LeadsRoutingModule {
    };
    LeadsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _leads_component__WEBPACK_IMPORTED_MODULE_2__["LeadsComponent"],
                        pathMatch: 'prefix',
                        children: [
                            {
                                path: '',
                                component: _leads_home_leads_home_component__WEBPACK_IMPORTED_MODULE_3__["LeadsHomeComponent"]
                            },
                            {
                                path: 'home',
                                component: _leads_home_leads_home_component__WEBPACK_IMPORTED_MODULE_3__["LeadsHomeComponent"],
                                pathMatch: 'prefix'
                            },
                            {
                                path: 'campaign',
                                loadChildren: () => __webpack_require__.e(/*! import() | app-components-leads-campaign-campaign-module */ "app-components-leads-campaign-campaign-module").then(__webpack_require__.bind(null, /*! app/components/leads/campaign/campaign.module */ "./src/app/components/leads/campaign/campaign.module.ts")).then(m => m.CampaignModule),
                                //   loadChildren: 'app/components/leads/campaign/campaign.module#CampaignModule',
                                pathMatch: 'prefix'
                            },
                            {
                                path: 'manage-campaign',
                                component: _manage_campaign_manage_campaign_component__WEBPACK_IMPORTED_MODULE_6__["ManageCampaignComponent"],
                                pathMatch: 'prefix'
                            },
                            {
                                path: 'add',
                                component: _enquiry_add_enquiry_add_component__WEBPACK_IMPORTED_MODULE_4__["EnquiryAddComponent"],
                                pathMatch: 'prefix'
                            },
                            {
                                path: 'enquiry',
                                loadChildren: () => __webpack_require__.e(/*! import() | app-components-leads-enquiry-enquiry-module */ "app-components-leads-enquiry-enquiry-module").then(__webpack_require__.bind(null, /*! app/components/leads/enquiry/enquiry.module */ "./src/app/components/leads/enquiry/enquiry.module.ts")).then(m => m.EnquiryModule),
                                //   loadChildren: 'app/components/leads/enquiry/enquiry.module#EnquiryModule',
                                pathMatch: 'prefix'
                            },
                            {
                                path: 'enquiryReport',
                                loadChildren: () => __webpack_require__.e(/*! import() | app-components-leads-enquiry-report-enquiry-report-module */ "app-components-leads-enquiry-report-enquiry-report-module").then(__webpack_require__.bind(null, /*! app/components/leads/enquiry-report/enquiry-report.module */ "./src/app/components/leads/enquiry-report/enquiry-report.module.ts")).then(m => m.EnquiryReportModule),
                                //   loadChildren: 'app/components/leads/enquiry-report/enquiry-report.module#EnquiryReportModule',
                                pathMatch: 'prefix'
                            },
                            {
                                path: 'setup',
                                component: _data_setup_data_setup_component__WEBPACK_IMPORTED_MODULE_5__["DataSetupComponent"],
                                pathMatch: 'prefix'
                            },
                            {
                                path: 'campaign-reports',
                                loadChildren: () => Promise.all(/*! import() | app-components-leads-campaign-reports-campaign-reports-module */[__webpack_require__.e("common"), __webpack_require__.e("app-components-leads-campaign-reports-campaign-reports-module")]).then(__webpack_require__.bind(null, /*! app/components/leads/campaign-reports/campaign-reports.module */ "./src/app/components/leads/campaign-reports/campaign-reports.module.ts")).then(m => m.CampaignReportsModule),
                                //   loadChildren: 'app/components/leads/campaign-reports/campaign-reports.module#CampaignReportsModule',
                                pathMatch: 'prefix'
                            },
                        ]
                    }
                ])],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], LeadsRoutingModule);
    return LeadsRoutingModule;
})();



/***/ }),

/***/ "./src/app/components/leads/leads.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/leads/leads.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGVhZHMvbGVhZHMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/leads/leads.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/leads/leads.component.ts ***!
  \*****************************************************/
/*! exports provided: LeadsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeadsComponent", function() { return LeadsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _model_role_features__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/role_features */ "./src/app/model/role_features.ts");
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


let LeadsComponent = /** @class */ (() => {
    let LeadsComponent = class LeadsComponent {
        constructor() {
            this.role_feature = _model_role_features__WEBPACK_IMPORTED_MODULE_1__["role"].features;
        }
        ngOnInit() {
            this.checkDownloadPermissionAccess();
        }
        ngOnDestroy() {
            sessionStorage.removeItem('downloadEnquiryReportAccess');
        }
        // to check user has permission to download any Enquiry reports 
        // Nalini
        checkDownloadPermissionAccess() {
            if (this.role_feature.DOWNLOAD_ENQUIRY_REPORT || (sessionStorage.getItem('username') == 'admin')) {
                sessionStorage.setItem('downloadEnquiryReportAccess', String(true));
            }
        }
    };
    LeadsComponent.ctorParameters = () => [];
    LeadsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-leads',
            template: __importDefault(__webpack_require__(/*! raw-loader!./leads.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/leads/leads.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./leads.component.scss */ "./src/app/components/leads/leads.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], LeadsComponent);
    return LeadsComponent;
})();



/***/ }),

/***/ "./src/app/components/leads/leads.module.ts":
/*!**************************************************!*\
  !*** ./src/app/components/leads/leads.module.ts ***!
  \**************************************************/
/*! exports provided: LeadsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeadsModule", function() { return LeadsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/timepicker */ "./node_modules/ngx-bootstrap/timepicker/fesm2015/ngx-bootstrap-timepicker.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_enquiry_services_popup_handler_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/enquiry-services/popup-handler.service */ "./src/app/services/enquiry-services/popup-handler.service.ts");
/* harmony import */ var _services_export_to_pdf_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/export-to-pdf.service */ "./src/app/services/export-to-pdf.service.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _master_master_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../master/master.module */ "./src/app/components/master/master.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/components/shared/shared.module.ts");
/* harmony import */ var _data_setup_data_setup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./data-setup/data-setup.component */ "./src/app/components/leads/data-setup/data-setup.component.ts");
/* harmony import */ var _enquiry_add_enquiry_add_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./enquiry-add/enquiry-add.component */ "./src/app/components/leads/enquiry-add/enquiry-add.component.ts");
/* harmony import */ var _enquiry_enquiry_custom_user_enquiry_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./enquiry/enquiry-custom/user-enquiry.component */ "./src/app/components/leads/enquiry/enquiry-custom/user-enquiry.component.ts");
/* harmony import */ var _leads_home_leads_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./leads-home/leads-home.component */ "./src/app/components/leads/leads-home/leads-home.component.ts");
/* harmony import */ var _leads_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./leads-routing.module */ "./src/app/components/leads/leads-routing.module.ts");
/* harmony import */ var _leads_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./leads.component */ "./src/app/components/leads/leads.component.ts");
/* harmony import */ var _manage_campaign_manage_campaign_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./manage-campaign/manage-campaign.component */ "./src/app/components/leads/manage-campaign/manage-campaign.component.ts");
/* harmony import */ var _services_campaign_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/campaign.service */ "./src/app/components/leads/services/campaign.service.ts");
/* harmony import */ var _services_closing_reason_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/closing-reason.service */ "./src/app/components/leads/services/closing-reason.service.ts");
/* harmony import */ var _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @tinymce/tinymce-angular */ "./node_modules/@tinymce/tinymce-angular/__ivy_ngcc__/fesm2015/tinymce-tinymce-angular.js");
/* harmony import */ var _custom_common_check_box_converter_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../custom-common/check-box-converter.pipe */ "./src/app/components/custom-common/check-box-converter.pipe.ts");
/* harmony import */ var _services_institute_setting_service_institute_setting_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../services/institute-setting-service/institute-setting.service */ "./src/app/services/institute-setting-service/institute-setting.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import { EnquiryReportComponent } from './enquiry-report/enquiry-report.component';
/* Modules */

// import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';



















let LeadsModule = /** @class */ (() => {
    let LeadsModule = class LeadsModule {
    };
    LeadsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                // BsDatepickerModule,
                ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_3__["TimepickerModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_4__["FileUploadModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_4__["SplitButtonModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_4__["MenuModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
                _leads_routing_module__WEBPACK_IMPORTED_MODULE_14__["LeadsRoutingModule"],
                _master_master_module__WEBPACK_IMPORTED_MODULE_8__["ManageExamModule"],
                _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_19__["EditorModule"]
            ],
            declarations: [
                _leads_component__WEBPACK_IMPORTED_MODULE_15__["LeadsComponent"],
                _leads_home_leads_home_component__WEBPACK_IMPORTED_MODULE_13__["LeadsHomeComponent"],
                _enquiry_add_enquiry_add_component__WEBPACK_IMPORTED_MODULE_11__["EnquiryAddComponent"],
                _data_setup_data_setup_component__WEBPACK_IMPORTED_MODULE_10__["DataSetupComponent"],
                _enquiry_enquiry_custom_user_enquiry_component__WEBPACK_IMPORTED_MODULE_12__["UserEnquiryComponent"],
                _manage_campaign_manage_campaign_component__WEBPACK_IMPORTED_MODULE_16__["ManageCampaignComponent"],
                _custom_common_check_box_converter_pipe__WEBPACK_IMPORTED_MODULE_20__["CheckBoxConverterPipe"]
                // EnquiryReportComponent
            ],
            entryComponents: [
                _leads_component__WEBPACK_IMPORTED_MODULE_15__["LeadsComponent"],
                _enquiry_enquiry_custom_user_enquiry_component__WEBPACK_IMPORTED_MODULE_12__["UserEnquiryComponent"]
            ],
            providers: [
                _services_campaign_service__WEBPACK_IMPORTED_MODULE_17__["CampaignService"],
                _services_enquiry_services_popup_handler_service__WEBPACK_IMPORTED_MODULE_5__["PopupHandlerService"],
                _services_closing_reason_service__WEBPACK_IMPORTED_MODULE_18__["ClosingReasonService"],
                _services_export_to_pdf_service__WEBPACK_IMPORTED_MODULE_6__["ExportToPdfService"],
                _services_http_service__WEBPACK_IMPORTED_MODULE_7__["HttpService"],
                _services_institute_setting_service_institute_setting_service__WEBPACK_IMPORTED_MODULE_21__["InstituteSettingService"]
            ],
            exports: [
                _enquiry_enquiry_custom_user_enquiry_component__WEBPACK_IMPORTED_MODULE_12__["UserEnquiryComponent"]
            ]
        })
    ], LeadsModule);
    return LeadsModule;
})();



/***/ }),

/***/ "./src/app/components/leads/manage-campaign/manage-campaign.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/components/leads/manage-campaign/manage-campaign.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".middle-section {\n  padding: 1%;\n}\n\n.breadcrumb-item + .breadcrumb-item::before {\n  content: \">\";\n  color: #334D6E;\n}\n\n.breadcrumb {\n  background-color: #fff;\n  margin-bottom: 0px;\n  padding-left: 0;\n}\n\n.breadcrumb-item > a {\n  color: #334D6E;\n  font-weight: 600;\n  font-size: 16px;\n}\n\n.w98 {\n  width: 100%;\n  margin: 0px auto;\n}\n\n.nav-item .nav-link {\n  font-weight: 600;\n  color: #405877;\n  padding-bottom: 8px;\n  cursor: pointer;\n  font-size: 13px;\n  float: left;\n  background: none;\n}\n\n.nav-item .active {\n  border-bottom: 3px solid #109cf1 !important;\n  color: #109cf1 !important;\n}\n\n.nav-link {\n  display: block;\n  padding: 1.5rem 0rem;\n  margin: -1rem 3.5rem;\n  margin-left: 0rem;\n}\n\n.flex {\n  display: flex;\n}\n\n.main-shadow {\n  box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  -webkit-box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  -moz-box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  padding-bottom: 15px;\n}\n\n.p-15 {\n  padding-bottom: 15px;\n}\n\n.filter-container {\n  display: flex;\n  flex-direction: column;\n  border-bottom: 1px solid #ccc;\n  padding-bottom: 10px;\n}\n\n.filter-container .filter-first-row-container, .filter-container .filter-second-row-container {\n  display: flex;\n  flex-direction: row;\n}\n\n.filter-container .filter-item {\n  width: 20%;\n  margin: 0px 1%;\n}\n\n.filter-container .filter-item .form-ctrl {\n  border: 1px solid #ccc;\n  border-radius: 4px;\n}\n\n.filter-container #advance_filter {\n  display: none;\n}\n\n.filter-container .search-btn {\n  background: #0084f6;\n  color: white;\n  padding: 6px 10px;\n  border: 2px solid #0084f6;\n  box-shadow: none;\n  border-radius: 4px;\n  margin-top: 10px;\n}\n\n.filter-container .advance-filter-btn {\n  background: #f4f5f7;\n  color: #0084f6;\n  border: none;\n  margin-top: 20px;\n}\n\n.show-filter #searchBtn1, .show-filter #advBtn1 {\n  display: none;\n}\n\n.show-filter #searchBtn2, .show-filter #advBtn2 {\n  display: block;\n}\n\n.show-filter #lead-value-container {\n  min-height: 57vh;\n}\n\n.hide-filter #searchBtn1, .hide-filter #advBtn1 {\n  display: block;\n}\n\n.hide-filter #searchBtn2, .hide-filter #advBtn2 {\n  display: none;\n}\n\n.hide-filter #lead-value-container {\n  min-height: 61vh;\n}\n\n.campaign-activity-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  margin: 10px 0px;\n}\n\n.campaign-activity-container .activity-item {\n  margin: 0px 1%;\n  padding-top: 0px !important;\n}\n\n.campaign-activity-container .search-box {\n  border-radius: 4px;\n  border: 1px solid #b4b6bd;\n  width: 100%;\n  line-height: 30px;\n  padding: 0 10px;\n  font-size: 12px;\n}\n\n.campaign-activity-container .add-student-btn {\n  background: #0084f6;\n  color: white;\n  padding: 6px 10px;\n  border: 2px solid #0084f6;\n  box-shadow: none;\n  border-radius: 4px;\n}\n\n.campaign-activity-container .download-btn {\n  background: white;\n  color: #0084f6;\n  border: none;\n  padding: 6px 10px;\n  border: 1px solid #0084f6;\n  border-radius: 4px;\n}\n\n.modal-title {\n  margin: 0px !important;\n}\n\n.student-list-table-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.student-list-table-container .list-heading-container {\n  border: 1px solid #ccc;\n  display: flex;\n  flex-direction: row;\n  background: #e0eaec;\n  font-weight: 600;\n  text-align: left;\n  border-left: 3px solid #e0eaec;\n  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);\n  margin-bottom: 5px;\n  margin-top: 5px;\n  border-radius: 6px;\n  border-left: 5px solid #e0eaec;\n}\n\n.student-list-table-container .list-heading-container .heading-item {\n  padding: 10px;\n}\n\n.student-list-table-container .list-value-outer-container {\n  display: flex;\n  flex-direction: column;\n  border-top: none;\n  min-height: 47vh;\n  max-height: 47vh;\n  overflow-y: auto;\n}\n\n.student-list-table-container .list-value-outer-container .list-value-container {\n  display: flex;\n  flex-direction: row;\n  border-left: 3px solid white;\n  text-align: left;\n  border-bottom: 1px solid #ccc;\n}\n\n.student-list-table-container .list-value-outer-container .list-value-container .value-item {\n  padding: 10px;\n}\n\n.student-list-table-container .list-value-outer-container .list-value-container {\n  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);\n  margin-bottom: 5px;\n  margin-top: 5px;\n  border-radius: 6px;\n  border-left: 5px solid #e0eaec;\n}\n\n.student-list-table-container .list-value-outer-container .list-value-container:last-child {\n  border-bottom: none;\n}\n\n.student-list-table-container .list-value-outer-container .converted-lead {\n  border-left: 3px solid tomato;\n  background: bisque;\n}\n\n.student-list-table-container .list-value-outer-container .non-converted {\n  border-left: 3px solid white;\n  background: white;\n}\n\n.student-list-table-container .no-records {\n  display: block;\n  text-align: center;\n  padding: 10px;\n  font-size: 14px;\n  font-weight: 600;\n}\n\n.student-list-table-container .lg-item {\n  width: 13%;\n}\n\n.student-list-table-container .md-item {\n  width: 12%;\n}\n\n.student-list-table-container .sm-item {\n  width: 10%;\n}\n\n.student-list-table-container .align-center {\n  text-align: center;\n}\n\n.student-list-table-container .edit-lead {\n  margin: 0 5px;\n  cursor: pointer;\n  color: #0084f6;\n}\n\n.student-list-table-container .delete-lead {\n  margin: 0 5px;\n  cursor: pointer;\n  color: red;\n}\n\n.student-list-table-container .field-checkbox-wrapper {\n  width: 30px !important;\n  overflow: hidden;\n  background: transparent;\n  box-sizing: border-box;\n  height: 22px !important;\n  padding-left: 25px !important;\n  margin-bottom: 0;\n  margin-left: 5px;\n  background: transparent;\n  border-radius: 1px;\n}\n\n.student-list-table-container .field-checkbox-wrapper .form-checkbox {\n  opacity: 0;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 22px;\n  height: 22px;\n  z-index: 1;\n  cursor: pointer;\n}\n\n.student-list-table-container .field-checkbox-wrapper .form-checkbox + label {\n  vertical-align: middle;\n  transition: all 0s;\n  font-size: 14px;\n  display: inline-block;\n}\n\n.student-list-table-container .field-checkbox-wrapper .form-checkbox + label:after {\n  content: '';\n  width: 19px;\n  height: 19px;\n  border: 2px solid #ccc;\n  border-radius: 2px;\n  position: absolute;\n  left: 0;\n  top: 0;\n  transition: all 0s;\n}\n\n.student-list-table-container .field-checkbox-wrapper .form-checkbox:checked + label:after {\n  border: 2px solid #0084f6;\n}\n\n.student-list-table-container .field-checkbox-wrapper .form-checkbox + label:before {\n  transition: all 0s;\n  width: 1px;\n  height: 1px;\n  left: 8px;\n  top: 9px;\n  position: absolute;\n  content: '';\n  border-top: 0;\n  border-right: 0;\n  border-left: 2px solid transparent;\n  border-bottom: 2px solid transparent;\n  transform: rotate(-45deg);\n}\n\n.student-list-table-container .field-checkbox-wrapper .form-checkbox:checked + label:before {\n  border-left: 2px solid #0084f6;\n  border-bottom: 2px solid #0084f6;\n  width: 12px;\n  height: 7px;\n  left: 3.5px;\n  top: 4px;\n}\n\n.student-list-table-container .field-checkbox-wrapper .form-checkbox:checked + label {\n  color: #0084f6;\n}\n\n.msg-list-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  border: 1px solid #ccc;\n  margin: 10px 0;\n}\n\n.msg-list-container .msg-item {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  padding: 10px;\n}\n\n.msg-list-container .msg-item .msg-span {\n  width: 90%;\n}\n\n#SMS {\n  display: none;\n}\n\n.campaign-footer-section {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  margin-top: 6px;\n}\n\n.campaign-footer-section .pagination-container {\n  width: 50%;\n}\n\n.campaign-action-btn-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  margin: 10px 0px;\n  width: 50%;\n}\n\n.campaign-action-btn-container .action-btn-item {\n  margin: 0 2%;\n  margin-top: 10px;\n}\n\n.campaign-action-btn-container .action-btn-item .action-btn {\n  background: #0084f6;\n  color: white;\n  padding: 6px 10px;\n  border: 2px solid #0084f6;\n  box-shadow: none;\n  border-radius: 4px;\n}\n\n.form-container {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n\n.form-container .form-item {\n  width: 48%;\n}\n\n.form-container .form-item select, .form-container .form-item input {\n  border: 1px solid #ccc;\n}\n\n.form-ctrl {\n  border: 1px solid #ccc;\n  border-radius: 4px;\n}\n\n.add-class-btn {\n  border: 1px solid #3a66fa;\n  border-radius: 4px;\n  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);\n  padding: 4px 10px;\n  background: #1283f4;\n  color: white;\n  font-weight: 600;\n  height: 30px;\n  margin-left: 15px;\n}\n\nth {\n  background-color: #e0eaec;\n  color: black;\n}\n\ntr {\n  border-radius: 12px;\n  border-left: 5px solid #e0eaec;\n  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);\n  margin-bottom: 5px;\n  margin-top: 5px;\n}\n\n.tableBodyScoll tbody {\n  display: block;\n  overflow-y: auto;\n  background: #ffffff;\n}\n\n.tableBodyScoll thead,\ntbody tr {\n  display: table;\n  width: 100%;\n  table-layout: fixed;\n}\n\n.tableBodyScroll thead,\ntbody tr {\n  display: table;\n  width: 100%;\n  table-layout: fixed;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sZWFkcy9tYW5hZ2UtY2FtcGFpZ24vbWFuYWdlLWNhbXBhaWduLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiOztBQUNBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7QUFFaEI7O0FBQUE7RUFDQSxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFHZjs7QUFEQTtFQUNBLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZUFBZTtBQUlmOztBQUNBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtBQUVsQjs7QUFBQTtFQUVNLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixlQUFlO0VBQ2YsV0FBVztFQUNYLGdCQUFnQjtBQUV0Qjs7QUFWQTtFQVdNLDJDQUEyQztFQUMzQyx5QkFBeUI7QUFHL0I7O0FBQ0E7RUFDRSxjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLG9CQUFvQjtFQUNwQixpQkFBaUI7QUFFbkI7O0FBQUE7RUFDRSxhQUFhO0FBR2Y7O0FBREE7RUFDRSwrQ0FBK0M7RUFDL0MsdURBQXVEO0VBQ3ZELG9EQUFvRDtFQUNwRCxvQkFBb0I7QUFJdEI7O0FBRkE7RUFDRSxvQkFBb0I7QUFLdEI7O0FBSEE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDZCQUE2QjtFQUM3QixvQkFBb0I7QUFNdEI7O0FBVkE7RUFNSSxhQUFhO0VBQ2IsbUJBQW1CO0FBUXZCOztBQWZBO0VBVUksVUFBVTtFQUNWLGNBQWM7QUFTbEI7O0FBcEJBO0VBYU0sc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQVd4Qjs7QUF6QkE7RUFrQkksYUFBYTtBQVdqQjs7QUE3QkE7RUFxQkksbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBWXBCOztBQXZDQTtFQThCSSxtQkFB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a0NwQjs7QUFoQ0E7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLCtDQUErQztFQUMvQyxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGlCQUFpQjtBQW1DbkI7O0FBakNBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFvQ2Q7O0FBbENBO0VBQ0UsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QiwyQ0FBMkM7RUFDM0Msa0JBQWtCO0VBQ2xCLGVBQWU7QUFxQ2pCOztBQW5DQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBc0NyQjs7QUFuQ0E7O0VBRUUsY0FBYztFQUNmLFdBQVk7RUFDWCxtQkFBbUI7QUFzQ3JCOztBQXBDQTs7RUFFRSxjQUFjO0VBQ2YsV0FBVztFQUNWLG1CQUFtQjtBQXVDckIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xlYWRzL21hbmFnZS1jYW1wYWlnbi9tYW5hZ2UtY2FtcGFpZ24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWlkZGxlLXNlY3Rpb24ge1xuICBwYWRkaW5nOiAxJTtcbn1cbi5icmVhZGNydW1iLWl0ZW0gKyAuYnJlYWRjcnVtYi1pdGVtOjpiZWZvcmUge1xuICBjb250ZW50OiBcIj5cIjtcbiAgY29sb3I6ICMzMzRENkU7XG59XG4uYnJlYWRjcnVtYntcbmJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5tYXJnaW4tYm90dG9tOiAwcHg7XG5wYWRkaW5nLWxlZnQ6IDA7XG59XG4uYnJlYWRjcnVtYi1pdGVtPmF7XG5jb2xvcjogIzMzNEQ2RTtcbmZvbnQtd2VpZ2h0OiA2MDA7XG5mb250LXNpemU6IDE2cHg7XG59XG5cblxuXG4udzk4IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMHB4IGF1dG87XG59XG4ubmF2LWl0ZW0ge1xuICAubmF2LWxpbmsge1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGNvbG9yOiAjNDA1ODc3O1xuICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgfVxuICAuYWN0aXZlIHtcbiAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMTA5Y2YxICFpbXBvcnRhbnQ7XG4gICAgICBjb2xvcjogIzEwOWNmMSAhaW1wb3J0YW50O1xuICB9XG59XG5cbi5uYXYtbGluayB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAxLjVyZW0gMHJlbTtcbiAgbWFyZ2luOiAtMXJlbSAzLjVyZW07XG4gIG1hcmdpbi1sZWZ0OiAwcmVtO1xufVxuLmZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLm1haW4tc2hhZG93IHtcbiAgYm94LXNoYWRvdzogMHB4IDdweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDdweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDdweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xufVxuLnAtMTUge1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbn1cbi5maWx0ZXItY29udGFpbmVye1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIC5maWx0ZXItZmlyc3Qtcm93LWNvbnRhaW5lciwgLmZpbHRlci1zZWNvbmQtcm93LWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIH1cbiAgLmZpbHRlci1pdGVte1xuICAgIHdpZHRoOiAyMCU7XG4gICAgbWFyZ2luOiAwcHggMSU7XG4gICAgLmZvcm0tY3RybHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgfVxuICB9XG4gICNhZHZhbmNlX2ZpbHRlcntcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5zZWFyY2gtYnRue1xuICAgIGJhY2tncm91bmQ6ICMwMDg0ZjY7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDZweCAxMHB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDg0ZjY7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxuICAuYWR2YW5jZS1maWx0ZXItYnRue1xuICAgIGJhY2tncm91bmQ6ICNmNGY1Zjc7XG4gICAgY29sb3I6ICMwMDg0ZjY7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gIH1cbn1cblxuLnNob3ctZmlsdGVye1xuICAjc2VhcmNoQnRuMSwgI2FkdkJ0bjF7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAjc2VhcmNoQnRuMiwgI2FkdkJ0bjJ7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgI2xlYWQtdmFsdWUtY29udGFpbmVye1xuICAgIG1pbi1oZWlnaHQ6IDU3dmg7XG4gIH1cbiAgLy8gI2FkdmFuY2VfZmlsdGVye1xuICAvLyAgIGRpc3BsYXk6IGZsZXg7XG4gIC8vIH1cbn1cbi5oaWRlLWZpbHRlcntcbiAgI3NlYXJjaEJ0bjEsICNhZHZCdG4xe1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gICNzZWFyY2hCdG4yLCAjYWR2QnRuMntcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gICNsZWFkLXZhbHVlLWNvbnRhaW5lcntcbiAgICBtaW4taGVpZ2h0OiA2MXZoO1xuICB9XG4gIC8vICNhZHZhbmNlX2ZpbHRlcntcbiAgLy8gICBkaXNwbGF5OiBub25lO1xuICAvLyB9XG59XG5cbi5jYW1wYWlnbi1hY3Rpdml0eS1jb250YWluZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIG1hcmdpbjogMTBweCAwcHg7XG4gIC5hY3Rpdml0eS1pdGVte1xuICAgIG1hcmdpbjogMHB4IDElO1xuICAgIHBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcbiAgfVxuICAuc2VhcmNoLWJveHtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2I0YjZiZDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG4gIC5hZGQtc3R1ZGVudC1idG57XG4gICAgYmFja2dyb3VuZDogIzAwODRmNjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogNnB4IDEwcHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzAwODRmNjtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgfVxuICAuZG93bmxvYWQtYnRue1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGNvbG9yOiAjMDA4NGY2O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBwYWRkaW5nOiA2cHggMTBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDA4NGY2O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgfVxufVxuLm1vZGFsLXRpdGxlIHtcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbn1cbi5zdHVkZW50LWxpc3QtdGFibGUtY29udGFpbmVye1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAubGlzdC1oZWFkaW5nLWNvbnRhaW5lcntcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBiYWNrZ3JvdW5kOiAjZTBlYWVjO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkICNlMGVhZWM7XG4gICAgYm94LXNoYWRvdzogMCAzcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNlMGVhZWM7XG4gICAgLmhlYWRpbmctaXRlbXtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgfVxuICB9XG4gIC5saXN0LXZhbHVlLW91dGVyLWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3JkZXItdG9wOiBub25lO1xuICAgIG1pbi1oZWlnaHQ6IDQ3dmg7XG4gICAgbWF4LWhlaWdodDogNDd2aDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIFxuICAgIC5saXN0LXZhbHVlLWNvbnRhaW5lcntcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCB3aGl0ZTtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgICAgIC52YWx1ZS1pdGVte1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgfVxuICAgIH1cbiAgICAubGlzdC12YWx1ZS1jb250YWluZXJcbiAgICB7XG4gICAgICBib3gtc2hhZG93OiAwIDNweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjZTBlYWVjO1xuICAgIH1cbiAgICAubGlzdC12YWx1ZS1jb250YWluZXI6bGFzdC1jaGlsZHtcbiAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgICBcblxuICAgIH1cbiAgICAuY29udmVydGVkLWxlYWR7XG4gICAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHRvbWF0bztcbiAgICAgIGJhY2tncm91bmQ6IGJpc3F1ZTtcbiAgICB9XG4gICAgLm5vbi1jb252ZXJ0ZWR7XG4gICAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHdoaXRlO1xuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgfVxuICB9XG4gIC5uby1yZWNvcmRze1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICB9XG4gIC5sZy1pdGVte1xuICAgIHdpZHRoOiAxMyU7XG4gIH1cbiAgLm1kLWl0ZW17XG4gICAgd2lkdGg6IDEyJVxuICB9XG4gIC5zbS1pdGVte1xuICAgIHdpZHRoOiAxMCU7XG4gIH1cbiAgLmFsaWduLWNlbnRlcntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLmVkaXQtbGVhZHtcbiAgICBtYXJnaW46IDAgNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogIzAwODRmNjtcbiAgfVxuICAuZGVsZXRlLWxlYWR7XG4gICAgbWFyZ2luOiAwIDVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6IHJlZDtcbiAgfVxuXG4gIC5maWVsZC1jaGVja2JveC13cmFwcGVyIHtcbiAgICAgIHdpZHRoOiAzMHB4ICFpbXBvcnRhbnQ7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgaGVpZ2h0OiAyMnB4ICFpbXBvcnRhbnQ7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDI1cHggIWltcG9ydGFudDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICBib3JkZXItcmFkaXVzOiAxcHg7XG4gIH1cbiAgLmZpZWxkLWNoZWNrYm94LXdyYXBwZXIgLmZvcm0tY2hlY2tib3gge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB0b3A6IDA7XG4gICAgICB3aWR0aDogMjJweDtcbiAgICAgIGhlaWdodDogMjJweDtcbiAgICAgIHotaW5kZXg6IDE7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgLmZpZWxkLWNoZWNrYm94LXdyYXBwZXIgLmZvcm0tY2hlY2tib3grbGFiZWwge1xuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwcztcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuICAuZmllbGQtY2hlY2tib3gtd3JhcHBlciAuZm9ybS1jaGVja2JveCtsYWJlbDphZnRlciB7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIHdpZHRoOiAxOXB4O1xuICAgICAgaGVpZ2h0OiAxOXB4O1xuICAgICAgYm9yZGVyOiAycHggc29saWQgI2NjYztcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB0b3A6IDA7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMHM7XG4gIH1cbiAgLmZpZWxkLWNoZWNrYm94LXdyYXBwZXIgLmZvcm0tY2hlY2tib3g6Y2hlY2tlZCtsYWJlbDphZnRlciB7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjMDA4NGY2O1xuICB9XG4gIC5maWVsZC1jaGVja2JveC13cmFwcGVyIC5mb3JtLWNoZWNrYm94K2xhYmVsOmJlZm9yZSB7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMHM7XG4gICAgICB3aWR0aDogMXB4O1xuICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICBsZWZ0OiA4cHg7XG4gICAgICB0b3A6IDlweDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgYm9yZGVyLXRvcDogMDtcbiAgICAgIGJvcmRlci1yaWdodDogMDtcbiAgICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICB9XG4gIC5maWVsZC1jaGVja2JveC13cmFwcGVyIC5mb3JtLWNoZWNrYm94OmNoZWNrZWQrbGFiZWw6YmVmb3JlIHtcbiAgICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzAwODRmNjtcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDA4NGY2O1xuICAgICAgd2lkdGg6IDEycHg7XG4gICAgICBoZWlnaHQ6IDdweDtcbiAgICAgIGxlZnQ6IDMuNXB4O1xuICAgICAgdG9wOiA0cHg7XG4gIH1cbiAgLmZpZWxkLWNoZWNrYm94LXdyYXBwZXIgLmZvcm0tY2hlY2tib3g6Y2hlY2tlZCtsYWJlbCB7XG4gICAgICBjb2xvcjogIzAwODRmNjtcbiAgfVxuXG59XG5cbi5tc2ctbGlzdC1jb250YWluZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBtYXJnaW46IDEwcHggMDtcbiAgLm1zZy1pdGVte1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICAubXNnLXNwYW57XG4gICAgICB3aWR0aDogOTAlO1xuICAgIH1cbiAgfVxufVxuXG4jU01Te1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5cbi5jYW1wYWlnbi1mb290ZXItc2VjdGlvbntcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDZweDtcbiAgLnBhZ2luYXRpb24tY29udGFpbmVye1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbn1cbi8vIGFjdGlvbi1idG5cbi5jYW1wYWlnbi1hY3Rpb24tYnRuLWNvbnRhaW5lcntcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgbWFyZ2luOiAxMHB4IDBweDtcbiAgd2lkdGg6IDUwJTtcbiAgLmFjdGlvbi1idG4taXRlbXtcbiAgICBtYXJnaW46IDAgMiU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAuYWN0aW9uLWJ0bntcbiAgICAgIGJhY2tncm91bmQ6ICMwMDg0ZjY7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBwYWRkaW5nOiA2cHggMTBweDtcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDg0ZjY7XG4gICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIH1cbiAgfVxufVxuXG5cbi8vIEFkZCBMZWFkXG4uZm9ybS1jb250YWluZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAuZm9ybS1pdGVte1xuICAgIHdpZHRoOiA0OCU7XG4gICAgc2VsZWN0LCBpbnB1dHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgfVxuICB9XG59XG5cbi5mb3JtLWN0cmx7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5hZGQtY2xhc3MtYnRue1xuICBib3JkZXI6IDFweCBzb2xpZCAjM2E2NmZhO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICBwYWRkaW5nOiA0cHggMTBweDtcbiAgYmFja2dyb3VuZDogIzEyODNmNDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNjAwO1xuICBoZWlnaHQ6IDMwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxudGh7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGVhZWM7XG4gIGNvbG9yOiBibGFjaztcbn1cbnRyIHtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjZTBlYWVjO1xuICBib3gtc2hhZG93OiAwIDNweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cbi50YWJsZUJvZHlTY29sbCB0Ym9keSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuXG59XG4udGFibGVCb2R5U2NvbGwgdGhlYWQsXG50Ym9keSB0ciB7XG4gIGRpc3BsYXk6IHRhYmxlO1xuIHdpZHRoIDogMTAwJTtcbiAgdGFibGUtbGF5b3V0OiBmaXhlZDtcbn1cbi50YWJsZUJvZHlTY3JvbGwgdGhlYWQsXG50Ym9keSB0ciB7XG4gIGRpc3BsYXk6IHRhYmxlO1xuIHdpZHRoOiAxMDAlO1xuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/leads/manage-campaign/manage-campaign.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/leads/manage-campaign/manage-campaign.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ManageCampaignComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageCampaignComponent", function() { return ManageCampaignComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_message_show_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/message-show.service */ "./src/app/services/message-show.service.ts");
/* harmony import */ var _services_campaign_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/campaign.service */ "./src/app/components/leads/services/campaign.service.ts");
/* harmony import */ var _services_export_to_pdf_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/export-to-pdf.service */ "./src/app/services/export-to-pdf.service.ts");
/* harmony import */ var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/authenticator.service */ "./src/app/services/authenticator.service.ts");
/* harmony import */ var _model_role_features__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../model/role_features */ "./src/app/model/role_features.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/common-service */ "./src/app/services/common-service.ts");
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







let ManageCampaignComponent = /** @class */ (() => {
    let ManageCampaignComponent = class ManageCampaignComponent {
        constructor(campaignService, msgService, auth, _pdfService, commonServiceFactory) {
            this.campaignService = campaignService;
            this.msgService = msgService;
            this.auth = auth;
            this._pdfService = _pdfService;
            this.commonServiceFactory = commonServiceFactory;
            // global variables
            this.jsonFlag = {
                isProfessional: false,
                institute_id: '',
                isRippleLoad: false,
                toggle: false
            };
            // Search filter variables
            this.filters = {
                stundetName: "",
                contactNumber: "",
                campaignName: "-1",
                referredBy: "-1",
                source: "-1",
                assignedTo: "-1"
            };
            this.checkedIds = [];
            this.selectedSMSList = [];
            // leads variables
            //Add lead
            this.addLead = {
                phone: "",
                name: "",
                gender: "M",
                emailId: "",
                address: "",
                city: "",
                referredBy: "-1",
                source: "-1",
                country_id: ""
            };
            // Edit lead
            this.editLead = {
                phone: "",
                name: "",
                gender: "M",
                emailId: "",
                address: "",
                city: "",
                referredBy: "-1",
                source: "-1",
                list_id: "",
                base_id: "",
                country_id: ""
            };
            this.checkAll = false;
            this.downloadEnquiryReportAccess = false;
            // FOR PAGINATION
            this.pageIndex = 1;
            this.displayBatchSize = 50;
            this.totalCount = 0;
            this.sizeArr = [20, 50, 100, 150, 200, 500];
            this.startindex = 0;
            this.role_feature = _model_role_features__WEBPACK_IMPORTED_MODULE_5__["role"].features;
            this.countryDetails = [];
            this.maxlength = 10;
            this.country_id = null;
        }
        ngOnInit() {
            this.fetchPreFillData();
            this.checkRoleAccess();
            this.fetchDataForCountryDetails();
        }
        checkRoleAccess() {
            if (sessionStorage.getItem('downloadEnquiryReportAccess') == 'true') {
                this.downloadEnquiryReportAccess = true;
            }
        }
        // created by: Nalini Walunj
        // Below three functions are written to fetch country details from the session stored at the time of login of institute
        fetchDataForCountryDetails() {
            let encryptedData = sessionStorage.getItem('country_data');
            let data = JSON.parse(encryptedData);
            if (data.length > 0) {
                this.countryDetails = data;
                this.addLead.country_id = this.countryDetails[0].id;
                this.maxlength = this.countryDetails[0].country_phone_number_length;
                this.country_id = this.countryDetails[0].id;
            }
        }
        onChangeObj(event) {
            console.log(event);
            this.countryDetails.forEach(element => {
                if (element.id == event) {
                    this.editLead.country_id = element.id;
                    this.maxlength = element.country_phone_number_length;
                    this.country_id = element.id;
                }
            });
        }
        fetchPreFillData() {
            this.auth.showLoader();
            // get all source list
            this.campaignService.getAllSources().subscribe(res => {
                this.sourceList = res;
            }, err => {
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please check your internet connection or contact at support@proctur.com if the issue persist');
                this.auth.hideLoader();
            });
            // get all assigned list
            this.campaignService.getAssignedList().subscribe(res => {
                this.assignedToList = res;
            }, err => {
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err.error.message);
                this.auth.hideLoader();
            });
            // get all referred by list
            this.campaignService.getReferredByList().subscribe(res => {
                this.referredByList = res;
            }, err => {
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err.error.message);
                this.auth.hideLoader();
            });
            // fetch all leads(students)
            this.campaignService.getCampaignList().subscribe(res => {
                this.campaignList = res;
            }, err => {
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err.error.message);
                this.auth.hideLoader();
            });
            this.searchCampaign(this.startindex);
        }
        searchCampaign(index) {
            if (index == 0) {
                this.pageIndex = 1;
            }
            this.checkedIds = [];
            this.auth.showLoader();
            let obj = {
                "assigned_to": this.filters.assignedTo,
                "name": this.filters.stundetName,
                "mobile": this.filters.contactNumber,
                "list_id": this.filters.campaignName,
                "source_id": this.filters.source,
                "referred_by": this.filters.referredBy,
                "start_index": index,
                "batch_size": 100
            };
            if (this.role_feature.LEAD_ENQUIRY_FULL_ACCESS) {
                obj.is_admin_role_access = true;
            }
            this.campaignService.searchLeads(obj).subscribe(res => {
                let result;
                result = res;
                this.auth.hideLoader();
                this.leadsList = res;
                this.tempLeadlist = res;
                this.totalCount = 0;
                if (result.length > 0) {
                    for (let i = 0; i < this.leadsList.length; i++) {
                        if (this.leadsList[i].converted == 0) {
                            this.leadsList[i].select = false;
                        }
                    }
                    this.totalCount = this.leadsList[0].totalCount;
                }
            }, err => {
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err.error.message);
                this.auth.hideLoader();
            });
        }
        searchDatabase() {
            this.leadsList = this.tempLeadlist;
            if (this.leadSearchInput == undefined || this.leadSearchInput == null) {
                this.leadSearchInput = "";
            }
            else {
                let searchData = this.tempLeadlist.filter(item => Object.keys(item).some(k => item[k] != null && item[k].toString().toLowerCase().includes(this.leadSearchInput.toLowerCase())));
                this.leadsList = searchData;
            }
        }
        downloadPdf() {
            let arr = [];
            for (let i = 0; i < this.tempLeadlist.length; i++) {
                this.tempLeadlist[i].converted_status = "-";
                if (this.tempLeadlist[i].converted == 1) {
                    this.tempLeadlist[i].converted_status = "Converted";
                }
                if (this.tempLeadlist[i].name.length == 0) {
                    this.tempLeadlist[i].name = "-";
                }
                if (this.tempLeadlist[i].email.length == 0) {
                    this.tempLeadlist[i].email = "-";
                }
                if (this.tempLeadlist[i].address.length == 0) {
                    this.tempLeadlist[i].address = "-";
                }
                if (this.tempLeadlist[i].city.length == 0) {
                    this.tempLeadlist[i].city = "-";
                }
                if (this.tempLeadlist[i].referred_name.length == 0) {
                    this.tempLeadlist[i].referred_name = "-";
                }
                if (this.tempLeadlist[i].source_name.length == 0) {
                    this.tempLeadlist[i].source_name = "-";
                }
            }
            this.tempLeadlist.map((ele) => {
                let json = [
                    ele.mobile,
                    ele.name,
                    ele.email,
                    ele.address,
                    ele.city,
                    ele.gender,
                    ele.referred_name,
                    ele.source_name,
                    ele.converted_status
                ];
                arr.push(json);
            });
            let rows = [];
            rows = [['Mobile', 'Name', 'Email', 'Address', 'City', 'Gender', 'Referred By', 'Source', 'Status']];
            let columns = arr;
            this._pdfService.exportToPdf(rows, columns, 'Leads List');
        }
        // checkbox checked/unchecked activiity
        rowCheckBoxClick(row) {
            let validate_check = false;
            for (let i = 0; i < this.checkedIds.length; i++) {
                if (this.checkedIds[i] == row.base_id) {
                    this.checkedIds.splice(i, 1);
                    this.checkAll = false;
                    return validate_check = true;
                }
            }
            if (!validate_check) {
                this.checkedIds.push(row.base_id);
            }
        }
        // check all checkbox
        checkAllLead(event) {
            this.checkedIds = [];
            let event_flag = event.target.checked;
            for (let i = 0; i < this.leadsList.length; i++) {
                this.leadsList[i].select = event_flag;
                if (this.leadsList[i].converted == 0) {
                    if (event_flag) {
                        this.checkedIds.push(this.leadsList[i].base_id);
                    }
                }
            }
        }
        // fetch promotional msg and show pop up
        showPromoSMS() {
            if (this.checkedIds.length == 0) {
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'No lead is selected. Kindly select at least one!');
                $('#SMS').modal('hide');
            }
            else {
                let obj = {
                    "status": 1,
                    "sms_type": "Promotional"
                };
                this.auth.showLoader();
                $('#SMS').modal('show');
                this.campaignService.getPromoSMS(obj).subscribe(res => {
                    this.promoSMSList = res;
                    this.auth.hideLoader();
                }, err => {
                    this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err.error.message);
                    this.auth.hideLoader();
                });
            }
        }
        selectMsg(msg) {
            let validate_check = false;
            for (let i = 0; i < this.selectedSMSList.length; i++) {
                if (this.selectedSMSList[i] == msg.message_id) {
                    this.selectedSMSList.splice(i, 1);
                    return validate_check = true;
                }
            }
            if (!validate_check) {
                this.selectedSMSList.push(msg.message_id);
            }
        }
        // Send checked msg
        sendSMS() {
            if (this.selectedSMSList.length == 0) {
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'No SMS is selected. Kindly select at least one!');
            }
            else {
                let obj = {
                    "baseIds": this.checkedIds,
                    "messageArray": this.selectedSMSList
                };
                this.auth.showLoader();
                this.campaignService.sendPromoSMS(obj).subscribe(res => {
                    this.msgService.showErrorMessage(this.msgService.toastTypes.success, '', 'Message has been sent successfully.');
                    this.auth.hideLoader();
                    this.selectedSMSList = [];
                    $('#SMS').modal('hide');
                    this.checkedIds = [];
                    this.searchCampaign(this.startindex);
                }, err => {
                    this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err.error.message);
                    this.auth.hideLoader();
                    this.selectedSMSList = [];
                    $('#SMS').modal('hide');
                });
            }
        }
        // Convert lead to enq
        convertToEnq() {
            if (this.checkedIds.length == 0) {
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'No lead is selected. Kindly select at least one!');
            }
            else {
                let obj = {
                    "baseIds": this.checkedIds
                };
                this.auth.showLoader();
                this.campaignService.convertToEnq(obj).subscribe(res => {
                    this.auth.hideLoader();
                    this.checkedIds = [];
                    this.searchCampaign(this.startindex);
                }, err => {
                    this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err.error.message);
                    this.auth.hideLoader();
                });
            }
        }
        //  Delete multiple leads
        deleteMultipleLeads() {
            if (this.checkedIds.length == 0) {
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'No lead is selected. Kindly select at least one!');
            }
            else {
                let obj = {
                    "baseIds": this.checkedIds.toString()
                };
                this.auth.showLoader();
                this.campaignService.deleteMultiLeads(obj).subscribe(res => {
                    this.msgService.showErrorMessage(this.msgService.toastTypes.success, '', 'Lead(s) deleted successfully!');
                    this.auth.hideLoader();
                    this.checkedIds = [];
                    this.searchCampaign(this.startindex);
                }, err => {
                    this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err.error.message);
                    this.auth.hideLoader();
                });
            }
        }
        // changes done by Nalini - To validate phone numbers
        validateNum(phone) {
            let msg = 'Enter '.concat(this.maxlength).concat(' Digit Contact Number');
            let phoneFlag = this.commonServiceFactory.phonenumberCheck(phone, this.maxlength, this.country_id);
            if (phoneFlag == false || phoneFlag == 'noNumber') {
                if (phoneFlag == 'noNumber') {
                    this.msgService.showErrorMessage('error', 'Please enter valid contact no.', '');
                    return false;
                }
                else {
                    this.msgService.showErrorMessage('error', msg, '');
                    return false;
                }
            }
            else {
                return true;
            }
        }
        // CRUD operation on leads
        saveNewLead() {
            if (this.addLead.phone != null && this.addLead.phone != "") {
                if (this.validateNum(this.addLead.phone)) {
                    if (this.addLead.name != null && this.addLead.name != "") {
                        if (this.addLead.source != "-1") {
                            this.addNewLead();
                        }
                        else {
                            this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please select source details');
                        }
                    }
                    else {
                        this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please enter name');
                    }
                }
            }
            else {
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Enter contact details');
            }
        }
        addNewLead() {
            let obj = {
                "name": this.addLead.name,
                "mobile": this.addLead.phone,
                "address": this.addLead.address,
                "email": this.addLead.emailId,
                "gender": this.addLead.gender,
                "city": this.addLead.city,
                "source_id": this.addLead.source,
                "referred_by": this.addLead.referredBy,
                "country_id": this.country_id
            };
            this.auth.showLoader();
            this.campaignService.createLead(obj).subscribe(res => {
                this.msgService.showErrorMessage(this.msgService.toastTypes.success, '', 'Lead added successfully');
                this.auth.hideLoader();
                $('#addLead').modal('hide');
                this.clearLeadForm();
                this.searchCampaign(this.startindex);
            }, err => {
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err.error.message);
                this.auth.hideLoader();
            });
        }
        editLeadRow(row) {
            this.editLead.name = row.name;
            this.editLead.phone = (row.mobile.substring(row.mobile.lastIndexOf("-") + 1, row.mobile.length));
            this.editLead.address = row.address;
            this.editLead.emailId = row.email;
            this.editLead.gender = row.gender;
            this.editLead.city = row.city;
            this.editLead.source = row.source_id;
            this.editLead.referredBy = row.referred_by;
            this.editLead.list_id = row.list_id;
            this.editLead.base_id = row.base_id;
            this.editLead.country_id = row.country_id;
        }
        updateLead() {
            if (this.editLead.phone != null && this.editLead.phone != "") {
                if (this.validateNum(this.editLead.phone)) {
                    if (this.editLead.name != null && this.editLead.name != "") {
                        if (this.editLead.source != "-1") {
                            this.modifyLead();
                        }
                        else {
                            this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please select source details');
                        }
                    }
                    else {
                        this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please enter name');
                    }
                }
            }
            else {
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Enter contact details');
            }
        }
        modifyLead() {
            let obj = {
                "name": this.editLead.name,
                "mobile": this.editLead.phone,
                "address": this.editLead.address,
                "email": this.editLead.emailId,
                "gender": this.editLead.gender,
                "city": this.editLead.city,
                "source_id": this.editLead.source,
                "referred_by": this.editLead.referredBy,
                "is_active": "Y",
                "country_id": this.country_id
            };
            this.auth.showLoader();
            this.campaignService.updateLead(obj, this.editLead.list_id, this.editLead.base_id).subscribe(res => {
                this.msgService.showErrorMessage(this.msgService.toastTypes.success, '', 'Lead updated successfully');
                this.auth.hideLoader();
                $('#editLead').modal('hide');
                this.clearEditLeadForm();
                this.searchCampaign(this.startindex);
            }, err => {
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err.error.message);
                this.auth.hideLoader();
            });
        }
        deleteLead(row) {
            console.log(row.list_id);
            if (confirm('Are you sure you want to delete lead?')) {
                this.auth.showLoader();
                this.campaignService.deleteLead(row.list_id, row.base_id).subscribe(res => {
                    this.msgService.showErrorMessage(this.msgService.toastTypes.success, '', 'Lead deleted successfully');
                    this.auth.hideLoader();
                    this.searchCampaign(this.startindex);
                }, err => {
                    this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err.error.message);
                    this.auth.hideLoader();
                });
            }
        }
        clearEditLeadForm() {
            this.editLead.name = "";
            this.editLead.phone = "";
            this.editLead.address = "";
            this.editLead.emailId = "";
            this.editLead.gender = "M";
            this.editLead.city = "";
            this.editLead.source = "-1";
            this.editLead.referredBy = "-1";
            this.editLead.list_id = "";
            this.editLead.base_id = "";
        }
        clearLeadForm() {
            this.addLead.name = "";
            this.addLead.phone = "";
            this.addLead.address = "";
            this.addLead.emailId = "";
            this.addLead.gender = "M";
            this.addLead.city = "";
            this.addLead.source = "-1";
            this.addLead.referredBy = "-1";
        }
        /*** pagination functions */
        /* Fetch next set of data from server and update table */
        fetchNext() {
            this.pageIndex++;
            this.fectchTableDataByPage(this.pageIndex);
        }
        /* Fetch previous set of data from server and update table */
        fetchPrevious() {
            this.pageIndex--;
            this.fectchTableDataByPage(this.pageIndex);
        }
        /* Fetch table data by page index */
        fectchTableDataByPage(index) {
            this.pageIndex = index;
            let startindex = this.displayBatchSize * (index - 1);
            this.searchCampaign(startindex);
        }
        /* Fetches Data as per the user selected batch size */
        updateTableBatchSize(num) {
            this.pageIndex = 1;
            this.displayBatchSize = parseInt(num);
            this.searchCampaign(this.startindex);
        }
        toggleFilter() {
            var x = document.getElementById("advance_filter");
            if (x.style.display == "none" || x.style.display == "") {
                x.style.display = "flex";
                this.jsonFlag.toggle = true;
            }
            else {
                x.style.display = "none";
                this.jsonFlag.toggle = false;
            }
        }
    };
    ManageCampaignComponent.ctorParameters = () => [
        { type: _services_campaign_service__WEBPACK_IMPORTED_MODULE_2__["CampaignService"] },
        { type: _services_message_show_service__WEBPACK_IMPORTED_MODULE_1__["MessageShowService"] },
        { type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticatorService"] },
        { type: _services_export_to_pdf_service__WEBPACK_IMPORTED_MODULE_3__["ExportToPdfService"] },
        { type: _services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonServiceFactory"] }
    ];
    ManageCampaignComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-manage-campaign',
            template: __importDefault(__webpack_require__(/*! raw-loader!./manage-campaign.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/leads/manage-campaign/manage-campaign.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./manage-campaign.component.scss */ "./src/app/components/leads/manage-campaign/manage-campaign.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_services_campaign_service__WEBPACK_IMPORTED_MODULE_2__["CampaignService"],
            _services_message_show_service__WEBPACK_IMPORTED_MODULE_1__["MessageShowService"],
            _services_authenticator_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticatorService"],
            _services_export_to_pdf_service__WEBPACK_IMPORTED_MODULE_3__["ExportToPdfService"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonServiceFactory"]])
    ], ManageCampaignComponent);
    return ManageCampaignComponent;
})();



/***/ }),

/***/ "./src/app/components/leads/services/campaign.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/leads/services/campaign.service.ts ***!
  \***************************************************************/
/*! exports provided: CampaignService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampaignService", function() { return CampaignService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs/Rx.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/authenticator.service */ "./src/app/services/authenticator.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let CampaignService = /** @class */ (() => {
    let CampaignService = class CampaignService {
        /* initialize the value of variables on service call */
        constructor(http, auth) {
            this.http = http;
            this.auth = auth;
            this.instituteFormData = {};
            this.row = [];
            this.filtered = [];
            this.baseUrl = "";
            this.auth.currentAuthKey.subscribe(key => {
                this.Authorization = key;
                this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ "Content-Type": "application/json", "Authorization": this.Authorization });
            });
            this.auth.currentInstituteId.subscribe(id => {
                this.institute_id = id;
            });
            this.baseUrl = this.auth.getBaseUrl();
            this.url = this.baseUrl + "/api/v1/enquiry/dashboard/" + this.institute_id;
        }
        /* return the template user has to edit */
        fetchDownloadTemplate() {
            if (this.baseUrl == 'http://test999.proctur.com/StdMgmtWebAPI') {
                this.urlDownloadTemplate = "http://test999.proctur.com/doc/lead_upload_form.xls";
                return this.http.get(this.urlDownloadTemplate).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(data => { return data; }, err => { return err; }));
            }
            else {
                this.urlDownloadTemplate = "https://app.proctur.com/doc/lead_upload_form.xls";
                return this.http.get(this.urlDownloadTemplate).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(data => { return data; }, err => { return err; }));
            }
        }
        uploadFileStep2(response) {
            let data = response;
            this.urlDownloadAllEnquiry = this.baseUrl + "/api/v1/campaign/list/" + this.institute_id + "/upload";
            return this.http.post(this.urlDownloadAllEnquiry, data, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(data => { return data; }, err => { return err; }));
        }
        verifyUploadFileName(name) {
            let data = { campaign_list_name: name };
            this.urlDownloadAllEnquiry = this.baseUrl + "/api/v1/campaign/list/" + this.institute_id + "/checkListName";
            return this.http.post(this.urlDownloadAllEnquiry, data, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(data => { return data; }, err => { return err; }));
        }
        campaignUploadList(values) {
            values.institute_id = this.institute_id;
            let data = {};
            this.urlDownloadAllEnquiry = this.baseUrl + "/api/v1/campaign/list/" + this.institute_id;
            return this.http.post(this.urlDownloadAllEnquiry, data, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(data => { return data; }, err => { return err; }));
        }
        campaignMessageList(data) {
            this.urlDownloadAllEnquiry = this.baseUrl + "/api/v1/campaign/message/" + this.institute_id + "/all";
            return this.http.post(this.urlDownloadAllEnquiry, data, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(data => { return data; }, err => { return err; }));
        }
        saveSMSservice(data) {
            this.urlDownloadAllEnquiry = this.baseUrl + "/api/v1/campaign/create/" + this.institute_id;
            return this.http.post(this.urlDownloadAllEnquiry, data, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(data => { return data; }, err => { return err; }));
        }
        campaignSMSTestService(data) {
            this.url = this.baseUrl + "/api/v1/campaign/sendTestSMS/" + this.institute_id;
            return this.http.post(this.url, data, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(data => { return data; }, err => { return err; }));
        }
        downloadFailureListFile(campaign_id) {
            this.url = this.baseUrl + "/api/v1/campaign/list/" + this.institute_id + "/download/" + campaign_id;
            return this.http.get(this.url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(data => { return data; }, err => { return err; }));
        }
        deleteMessage(id) {
            let url = this.baseUrl + "/api/v1/campaign/message/" + this.institute_id + "/" + id;
            let obj = {
                status: 400
            };
            return this.http.put(url, obj, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(data => { return data; }, err => { return err; }));
        }
        updateMessage(obj, id) {
            let url = this.baseUrl + "/api/v1/campaign/message/" + this.institute_id + "/" + id;
            return this.http.put(url, obj, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(data => { return data; }, err => { return err; }));
        }
        addNewMessage(obj) {
            let url = this.baseUrl + "/api/v1/campaign/message/" + this.institute_id;
            return this.http.post(url, obj, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(data => { return data; }, err => { return err; }));
        }
        approveMessage(id) {
            let url = this.baseUrl + "/api/v1/campaign/message/" + this.institute_id + "/" + id;
            let obj = {
                status: 1
            };
            return this.http.put(url, obj, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(data => { return data; }, err => { return err; }));
        }
        fetchAllSms() {
            this.urlFetchAllSms = this.baseUrl + "/api/v1/campaign/message/" + this.institute_id + "/all";
            let data = {
                feature_type: 2,
                sms_type: "Transactional"
            };
            return this.http.post(this.urlFetchAllSms, data, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(data => { return data; }, err => { return err; }));
        }
        // manage campaign services
        getAllSources() {
            this.url = this.baseUrl + "/api/v1/enquiry_campaign/master/lead_source/" + this.institute_id + "/all";
            return this.http.get(this.url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(data => { return data; }, err => { return err; }));
        }
        getAssignedList() {
            let obj = {
                "user_Type": 0
            };
            this.url = this.baseUrl + "/api/v1/profiles/" + this.institute_id;
            return this.http.post(this.url, obj, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(data => { return data; }, err => { return err; }));
        }
        getReferredByList() {
            this.url = this.baseUrl + "/api/v1/enquiry_campaign/master/lead_referred_by/" + this.institute_id + "/all";
            return this.http.get(this.url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(data => { return data; }, err => { return err; }));
        }
        getCampaignList() {
            let obj = {};
            this.url = this.baseUrl + "/api/v1/campaign/list/" + this.institute_id;
            return this.http.post(this.url, obj, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(data => { return data; }, err => { return err; }));
        }
        searchLeads(obj) {
            this.url = this.baseUrl + "/api/v1/lead_manager/search/" + this.institute_id;
            return this.http.post(this.url, obj, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(data => { return data; }, err => { return err; }));
        }
        convertToEnq(obj) {
            this.url = this.baseUrl + "/api/v1/enquiry_manager/convertToEnquiry/" + this.institute_id;
            return this.http.put(this.url, obj, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(data => { return data; }, err => { return err; }));
        }
        getPromoSMS(obj) {
            this.url = this.baseUrl + "/api/v1/campaign/message/" + this.institute_id + "/all";
            return this.http.post(this.url, obj, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(data => { return data; }, err => { return err; }));
        }
        sendPromoSMS(obj) {
            this.url = this.baseUrl + "/api/v1/lead_manager/sendPromotionalSMS/" + this.institute_id;
            return this.http.post(this.url, obj, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(data => { return data; }, err => { return err; }));
        }
        createLead(obj) {
            this.url = this.baseUrl + "/api/v1/campaign/list/" + this.institute_id + "/createLead";
            return this.http.post(this.url, obj, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(data => { return data; }, err => { return err; }));
        }
        updateLead(obj, list_id, base_id) {
            this.url = this.baseUrl + "/api/v1/campaign/list/" + this.institute_id + "/base/" + list_id + "/" + base_id;
            return this.http.put(this.url, obj, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(data => { return data; }, err => { return err; }));
        }
        deleteLead(list_id, base_id) {
            this.url = this.baseUrl + "/api/v1/campaign/list/" + this.institute_id + "/base/delete/" + list_id + "/" + base_id;
            return this.http.delete(this.url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(data => { return data; }, err => { return err; }));
        }
        deleteMultiLeads(obj) {
            this.url = this.baseUrl + "/api/v1/campaign/list/" + this.institute_id + "/bulkDeleteLeads";
            return this.http.post(this.url, obj, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(data => { return data; }, err => { return err; }));
        }
        fetchSmsReport(obj) {
            this.url = this.baseUrl + "/api/v1/lead_manager/smsReport";
            return this.http.post(this.url, obj, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(data => { return data; }, err => { return err; }));
        }
    };
    CampaignService.ctorParameters = () => [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticatorService"] }
    ];
    CampaignService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _services_authenticator_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticatorService"]])
    ], CampaignService);
    return CampaignService;
})();



/***/ }),

/***/ "./src/app/components/leads/services/closing-reason.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/leads/services/closing-reason.service.ts ***!
  \*********************************************************************/
/*! exports provided: ClosingReasonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClosingReasonService", function() { return ClosingReasonService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/authenticator.service */ "./src/app/services/authenticator.service.ts");
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




let ClosingReasonService = /** @class */ (() => {
    let ClosingReasonService = class ClosingReasonService {
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
        getAllReasons() {
            let url = this.baseUrl + "/api/v2/enquiry_manager/fetchEnquiryClosingReason/" + this.institute_id;
            return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((data) => {
                return data;
            }, (error) => {
                return error;
            }));
        }
        createReason(obj) {
            let url = this.baseUrl + "/api/v2/enquiry_manager/enquiryClosingReason";
            return this.http.post(url, obj, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((data) => {
                return data;
            }, (error) => {
                return error;
            }));
        }
        updateClosingReason(obj, id) {
            let url = this.baseUrl + "/api/v2/enquiry_manager/updateEnquiryClosingReason/" + id;
            return this.http.put(url, obj, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((data) => {
                return data;
            }, (error) => {
                return error;
            }));
        }
    };
    ClosingReasonService.ctorParameters = () => [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticatorService"] }
    ];
    ClosingReasonService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticatorService"]])
    ], ClosingReasonService);
    return ClosingReasonService;
})();



/***/ }),

/***/ "./src/app/services/enquiry-services/popup-handler.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/services/enquiry-services/popup-handler.service.ts ***!
  \********************************************************************/
/*! exports provided: PopupHandlerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupHandlerService", function() { return PopupHandlerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let PopupHandlerService = /** @class */ (() => {
    let PopupHandlerService = class PopupHandlerService {
        constructor() {
            this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
            this.rowDataSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
            this.actionButtonSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
            this.smsButtonSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
            /* Message variable */
            this.currentMessage = this.messageSource.asObservable();
            this.currentRowJson = this.rowDataSource.asObservable();
            this.currentActionValue = this.actionButtonSource.asObservable();
            this.currentSms = this.smsButtonSource.asObservable();
        }
        /* Function to update the message which can be read across multiple components */
        changeMessage(message) {
            this.messageSource.next(message);
        }
        /* Function to update the user selected rowData to JSON.stringify */
        changeRowData(data) {
            this.rowDataSource.next(data);
        }
        /* Function to update disable and enable action button */
        changeActionStatus(data) {
            this.actionButtonSource.next(data);
        }
        changeSmsMessage(sms) {
            this.smsButtonSource.next(sms);
        }
    };
    PopupHandlerService.ctorParameters = () => [];
    PopupHandlerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], PopupHandlerService);
    return PopupHandlerService;
})();



/***/ })

}]);
//# sourceMappingURL=app-components-leads-leads-module-es2015.js.map