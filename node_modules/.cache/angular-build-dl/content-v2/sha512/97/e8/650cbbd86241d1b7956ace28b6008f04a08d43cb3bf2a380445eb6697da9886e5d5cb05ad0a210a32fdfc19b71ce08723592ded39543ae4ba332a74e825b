(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-components-users-management-role-management-role-management-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/users-management/role-management/add-edit-role/add-edit-role.component.html":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/users-management/role-management/add-edit-role/add-edit-role.component.html ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main class=\"page-content\">\n  <div class=\"bshadow\">\n     <div class=\"w98 \">\n     <div class=\"page_heading \">\n       <p>Role Permissions</p>\n     </div> \n     </div>\n  </div>\n     <div class=\"w98\">\n     <div class=\"row mt15 g-0\" >\n       <div class=\"col-lg-8 pl0 webkit\" *ngIf=\"roleId == '-1'\">\n         <!-- <a href=\"#\" data-toggle=\"modal\" data-target=\"#rolemyModal\"><span class=\"add_role\">Add Role</span></a>\n         <select id=\"selector\" class=\"select\" [(ngModel)]=\"roleId\" (ngModelChange)=\"getRolesOfUser($event)\">\n           <option value=\"-1\">Select</option>\n           <option *ngFor=\"let data of existingRolesData\" value=\"{{data.role_id}}\">{{data.role_name}}</option>\n         </select> -->\n         <div class=\"col-lg-4 pl0\">\n          <label for=\"role_name\" class=\"role_name\">Role Name <span class=\"text-danger\">*</span></label>\n           <input type=\"\" name=\"roleName\" [(ngModel)]=\"roleName\" class=\"input w100\" placeholder=\"Role\"></div>\n         <div class=\"col-lg-4 pl0\">\n          <label for=\"role_name\" class=\"role_name\">Role Description</label>\n           <input type=\"\" name=\"roleDesc\" [(ngModel)]=\"roleDesc\" class=\"input w100\" placeholder=\"Role Description\"></div>\n       </div>\n       <div class=\"col-lg-8 pl0 webkit\" *ngIf=\"roleId != '-1'\">\n        <!-- <a href=\"#\" data-toggle=\"modal\" data-target=\"#rolemyModal\"><span class=\"add_role\">Add Role</span></a>\n        <select id=\"selector\" class=\"select\" [(ngModel)]=\"roleId\" (ngModelChange)=\"getRolesOfUser($event)\">\n          <option value=\"-1\">Select</option>\n          <option *ngFor=\"let data of existingRolesData\" value=\"{{data.role_id}}\">{{data.role_name}}</option>\n        </select> -->\n        <div class=\"col-lg-4 pl0\"><span><b>Role Name : <span class=\"text-danger\">*</span></b> {{userData.role_name}}</span></div>\n        <div class=\"col-lg-4 pl0\">\n          <label for=\"role_name\" class=\"role_name\">Role Description</label>\n          <input type=\"\" name=\"roleDesc\" [(ngModel)]=\"userData.role_desc\" class=\"input w100\" placeholder=\"Role Description\"></div>\n      </div>\n       <div class=\"col-lg-4 g-0\">\n         <span class=\"right\"><p class=\"select_no\">No. of Selections: <span>{{selectedRoleLength}}</span></p></span>\n       </div>\n     </div>\n     <br>\n     <div class=\"global\">\n                <!--  Global -->\n            <div class=\"head_border\" *ngFor=\"let roleTitle of procturRoles;let j=index\">\n               <div class=\"section_heading\">\n                  <label class=\"switch\">\n                     <input type=\"checkbox\" [(ngModel)]=\"roleTitle.isToggleChecked\" (ngModelChange)=\"sliderChanges(roleTitle)\">\n                     <span class=\"slider round\"></span>\n                   </label>\n                   <p>{{roleTitle.category_name}}</p>\n             </div >\n             <div class=\"section border-brown\">\n               <div *ngFor=\"let feature of roleTitle.feature_list;let i=index\">\n                 <div  class=\"field-checkbox-wrapper\">\n                       <label class=\"checkbox\">\n                           <span class=\"checkbox__input\">\n                             <input type=\"checkbox\" name=\"checked\" [id]=\"'checkbox-'+i+j\" [disabled]=\"!roleTitle.isToggleChecked\" [checked]=\"feature.isChecked\" [(ngModel)]=\"feature.isChecked\" (change)=\"checkLengthofRole($event.target.checked)\">\n                             <span class=\"checkbox__control\" [ngStyle]=\"{'cursor':!roleTitle.isToggleChecked ? 'no-drop' : 'pointer'}\">\n                              <svg viewBox='0 0 24 24' aria-hidden=\"true\" focusable=\"false\">\n                                 <path fill='none' stroke='currentColor'  d='M1.3 12.91l6.37 6.37L22.79 4.59' /></svg>\n                             </span>\n                           </span>\n                         </label>\n                         <label for=\"'checkbox-'+i+j\" class=\"label1\">{{feature.feature_unique_name}}</label>\n                         <div class=\"tooltip-box-field\">\n                          \" This section is used to manage the location at which the management stores its assets.\"\n                       </div>\n                       <div *ngIf=\"feature.help_msg!='' && feature.help_msg!=null\" class=\"questionInfo inline-relative\">\n                        <span data-toggle=\"tooltip\" class=\"helpIcon\" data-placement=\"right\"><img src=\"../../../assets/images/InfoIcon.svg\"></span>\n                        <div class=\"tooltip-box-field\">\n                           {{feature.help_msg}}\n                        </div>\n                    </div>\n                 </div>\n               </div>\n             </div>\n            </div>\n            <br>\n             <!-- Exam Desk Settings --> \n             <div *ngIf=\"isShoweOnlineExam\">\n             <div class=\"flex1\">\n              <p class=\"form_heading\"><span>Exam Desk Settings (Online Exam)</span></p>\n              <div class=\"borderbottom\"></div>\n             </div>\n            \n             <div class=\"head_border\" *ngFor=\"let roleTitle of examDeskRoles;let j=index\">\n              <div class=\"section_heading\">\n                 <label class=\"switch\">\n                    <input type=\"checkbox\" [(ngModel)]=\"roleTitle.isToggleChecked\">\n                    <span class=\"slider round\"></span>\n                  </label>\n                  <p>{{roleTitle.category_name}}</p>\n            </div >\n            <div class=\"section border-brown\">\n              <div *ngFor=\"let feature of roleTitle.feature_list;let i=index\">\n                <div  class=\"field-checkbox-wrapper\">\n                      <label class=\"checkbox\">\n                          <span class=\"checkbox__input\" [ngStyle]=\"{'cursor':!roleTitle.isToggleChecked ? 'no-drop' : 'pointer'}\">\n                            <input type=\"checkbox\" name=\"checked\" [id]=\"'checkboxe-'+i+j\" [disabled]=\"!roleTitle.isToggleChecked\" [checked]=\"feature.isChecked\" [(ngModel)]=\"feature.isChecked\" (change)=\"checkLengthofRole($event.target.checked)\">\n                            <span class=\"checkbox__control\">\n                             <svg viewBox='0 0 24 24' aria-hidden=\"true\" focusable=\"false\">\n                                <path fill='none' stroke='currentColor'  d='M1.3 12.91l6.37 6.37L22.79 4.59' /></svg>\n                            </span>\n                          </span>\n                        </label>\n                        <label for=\"'checkboxe-'+i+j\" class=\"label1\">{{feature.feature_unique_name}}</label>\n                        <div *ngIf=\"feature.help_msg!='' && feature.help_msg!=null\" class=\"questionInfo inline-relative\">\n                          <span data-toggle=\"tooltip\" class=\"helpIcon\" data-placement=\"right\"><img src=\"../../../assets/images/InfoIcon.svg\"></span>\n                          <div class=\"tooltip-box-field\">\n                             {{feature.help_msg}}\n                          </div>\n                      </div>\n                </div>\n              </div>\n            </div>\n           </div>\n          </div>\n     </div>\n   </div>\n   <div class=\"white bottom_button\">\n     <div class=\"w98\">\n        <button class=\"white_button mr10\"  routerLink='/view/manage/role'>Back</button>\n             \n                 <button class=\"blue_button right\" *ngIf=\"roleId == '-1'\" (click)=\"createNewRole()\">\n                  Save\n                </button>\n                <button class=\"blue_button right\" *ngIf=\"roleId != '-1'\" (click)=\"updateRole()\">\n                 Update\n               </button>\n            \n     </div>\n </div>\n </main>\n <!-- The Modal -->\n <div class=\"modal\" id=\"rolemyModal\" style=\"top: 10%;\">\n   <div class=\"modal-dialog \">\n     <div class=\"modal-content\">\n       <div class=\"modal-header\">\n         <h4 class=\"modal-title\" >Add Role</h4>\n         <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n       </div>\n       <div class=\"modal-body\">\n        <div>\n           <div ><input type=\"\" name=\"roleName\" [(ngModel)]=\"roleName\" class=\"input w100\" placeholder=\"Role*\"></div>\n           <div class=\"padding20\"><input type=\"\" name=\"roleDesc\" [(ngModel)]=\"roleDesc\" class=\"input w100\" placeholder=\"Role Description*\"></div>\n           <div class=\"padding20\">\n             <span class=\"right\">\n              \n               <button class=\"white_button mr10\" data-dismiss=\"modal\">\n                 Cancel\n               </button>\n                <button class=\"blue_button \" *ngIf=\"roleId == '-1'\" (click)=\"createNewRole()\">\n                 Save\n               </button>\n               <button class=\"blue_button \" *ngIf=\"roleId != '-1'\" (click)=\"updateRole()\">\n                Update\n              </button>\n             </span>\n           </div>\n         </div>\n        \n       </div>        \n     </div>\n   </div>\n </div>  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/users-management/role-management/role-management.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/users-management/role-management/role-management.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"common-tab\" style=\"padding: 2%;padding-top: 2px\">\n  <ul>\n    <li id=\"liUser\" (click)=\"switchActiveView('liUser')\" class=\"\">\n      <a routerLink=\"/view/manage\">User</a>\n    </li>\n    <li id=\"liRole\" (click)=\"switchActiveView('liRole')\" class=\"active\">\n      <a routerLink=\"/view/manage/role\">Role</a>\n    </li>\n  </ul>\n</div>\n\n<section class=\"clearFix\" style=\"padding: 2%;padding-top: 2px;\">\n  <div class=\"content-contaioner\">\n\n    <div class=\"head\">\n      <div class=\"row\">\n        <div class=\"pull-left\" style=\"display: inline-flex;\">\n          <h3>Roles</h3>&nbsp;&nbsp;\n          <div style=\"margin-top: -8px\">\n            <rob-tooltip [textMessage]=\"'?'\" [message]=\"toottip\" [placement]=\"'left'\" [customClass]=\"'left'\">\n            </rob-tooltip>\n          </div>\n        </div>\n        <div class=\"btnWrapper\">\n          <button type=\"button\" class=\"btn pull-right\" name=\"button\" routerLink='./addedit'>\n            <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n            &nbsp; Add Role\n          </button>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"table-container\">\n      <div class=\"heading-container\">\n        <div class=\"heading-item\">\n          <span>S No.</span>\n        </div>\n        <div class=\"heading-item\" style=\"width: 25%;text-align: left;\">\n          <span>Role</span>\n        </div>\n        <div class=\"heading-item\" style=\"width: 30%;\">\n          <span>Description</span>\n        </div>\n        <div class=\"heading-item\" style=\"width: 19%;\">\n          <span>Assigned User</span>\n        </div>\n        <div class=\"heading-item\">\n          <span>Action</span>\n        </div>\n      </div>\n      <div class=\"value-outer-container\" *ngIf=\"rolesList?.length>0\">\n        <div class=\"value-container\" *ngFor=\"let data of rolesList; let i = index; trackBy: i\">\n          <div class=\"value-item\">\n            {{i+1}}\n          </div>\n          <div class=\"value-item\" style=\"width: 25%;text-align: left;\">\n            <span\n              title=\"{{data.role_name}}\">{{(data.role_name > 30) ? (data.role_name | slice:0:30) + '...' : data.role_name}}</span>\n          </div>\n          <div class=\"value-item\" style=\"width: 30%;\">\n            <span title=\"{{data.role_desc}}\"\n              *ngIf=\"data.role_desc!=null || data.role_desc!=''\">{{(data.role_desc > 30) ? (data.role_desc | slice:0:30) + '...' : data.role_desc}}</span>\n            <span *ngIf=\"data.role_desc==null || data.role_desc==''\">-</span>\n          </div>\n          <div class=\"value-item\" style=\"width: 19%;\">\n            <a class=\"viewTag\" (click)=\"showAssignedUserList(data)\" style=\"cursor:pointer\"\n              title=\"Click here to see assigned user list\">{{data.total_user_count}}</a>\n          </div>\n          <div class=\"value-item\">\n            <div class=\"action-menu\" style=\"font-size: 14px;\">\n              <a [routerLink]='[\"./addedit\" , data.role_id]' title=\"Edit\"><i class=\"fa fa-edit\"></i></a>\n              <a *ngIf=\"data.master_role_id == 0\" (click)=\"deleteRole(data)\" title=\"Delete\" style=\"color: red;\"><i class=\"fa fa-trash\"></i> </a>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"value-outer-container\" *ngIf=\"rolesList?.length == 0\"\n        style=\"text-align: center;padding: 10%;font-weight: 600;\">\n        No data found\n      </div>\n    </div>\n\n    <!-- Paginator Here -->\n    <div class=\"row filter-res pagination\" style=\"width: 100%;\">\n      <div class=\"c-lg-12 c-md-12 c-sm-12 align-right\">\n        <pagination (goPage)=\"fetchTableDataByPage($event)\" (goNext)=\"fetchNext()\" (goPrev)=\"fetchPrevious()\"\n          [pagesToShow]=\"10\" [page]=\"PageIndex\" [perPage]=\"displayBatchSize\" [sizeArr]=\"sizeArr\" [count]=\"totalRow\"\n          (sizeChange)=\"updateTableBatchSize($event)\">\n        </pagination>\n      </div>\n    </div>\n\n  </div>\n</section>\n\n\n\n<!-- ///////// POPUP/////////////////////////////////// -->\n<!-- ///////// POPUP/////////////////////////////////// -->\n<!-- ///////// POPUP/////////////////////////////////// -->\n\n\n<div class=\"modal\" id=\"myModal\" style=\"top: 10%;\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\" >Assigned User List</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      </div>\n      <div class=\"modal-body\">\n         <div class=\"rolepopup\">\n          <div class=\"table_heading\">\n            <div>Name</div>\n            <div>Email Id</div>\n            <div>Contact No</div>\n            <div>Username</div>\n          </div>\n          <div *ngFor=\"let s of userList\" class=\"table_body\">\n            <div>{{s.name}}</div>\n            <div>{{s.email_id}}</div>\n            <div>{{s.phone}}</div>\n            <div>{{s.username}}</div>\n          </div>\n      </div>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./src/app/components/users-management/role-management/add-edit-role/add-edit-role.component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/components/users-management/role-management/add-edit-role/add-edit-role.component.scss ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  margin: 0px;\n}\n\nmain {\n  padding-left: 0 !important;\n}\n\nbody {\n  font-family: 'Open Sans', sans-serif;\n  overflow-x: hidden;\n}\n\n.main-shadow {\n  box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.2);\n  -webkit-box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.2);\n  -moz-box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.2);\n  padding-bottom: 15px;\n}\n\n.w98 {\n  width: 98%;\n  margin: 0px auto;\n}\n\n/*swiching tabs*/\n\n.nav-item .nav-link {\n  font-weight: 600;\n  color: #405877;\n  padding-bottom: 8px;\n  cursor: pointer;\n  font-size: 13px;\n}\n\n.nav-item .nav-link.active {\n  border-bottom: 3px solid #109CF1 !important;\n  color: #109CF1 !important;\n}\n\n.nav-link {\n  display: block;\n  padding: 1.5rem 0rem;\n  margin: -1rem 1.5rem;\n  margin-left: 0rem;\n}\n\n/*content css(marks settings)*/\n\n.flex {\n  display: flex;\n}\n\n.page_heading > p {\n  margin: 20px 0px 10px 0px;\n  color: #334D6E;\n  font-weight: 600;\n  font-size: 14px;\n}\n\n/*.page_heading>p{\n      margin-bottom: 0px;\n  }*/\n\n.select {\n  color: #787A7D;\n  width: 100%;\n  padding: 7px 20px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-size: 13px;\n  font-weight: 500;\n  margin-right: 10px;\n  background-color: #fff;\n}\n\n.text_heading {\n  color: #334D6E;\n  font-weight: 600;\n  font-size: 13px;\n  margin-top: 10px;\n}\n\nselect {\n  outline: none;\n}\n\n.mt15 {\n  margin-top: 17px;\n}\n\n.section_heading {\n  color: #334D6E;\n  padding: 10px 0px 10px 10px;\n  font-weight: 600;\n  font-size: 14px;\n}\n\n.section_heading > p {\n  margin-bottom: 0px;\n  display: inline;\n  vertical-align: super;\n  padding-left: 15px;\n  font-size: 14px;\n}\n\n.border-brown {\n  /*    border:1px solid #EEF1F4; */\n  margin-bottom: 16px;\n  width: 100%;\n}\n\n.section {\n  background: #F8F9FB;\n  border: 1px solid #F8F9FB;\n  height: auto;\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  margin-right: 1%;\n}\n\n.section > div {\n  margin: 12px 0px;\n  padding: 0px 9px;\n  width: 19%;\n  float: left;\n}\n\n.label1 {\n  color: #323C47;\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 17px;\n  margin-left: 16px;\n}\n\n.field-checkbox-wrapper {\n  padding-left: 50px;\n  display: flex;\n}\n\n.mark {\n  color: #fff;\n  background: linear-gradient(90deg, #e18e12 0%, #f1db10 100%);\n  float: right;\n  border-radius: 4px;\n  margin: 6px 4px;\n  padding: 6px 20px;\n  font-weight: 500;\n  font-size: 13px;\n}\n\n.blue_button {\n  background-color: #109CF1;\n  color: #fff;\n  padding: 0px 20px;\n  font-size: 12px;\n  border: 1px solid #109CF1;\n  border-radius: 5px;\n  font-weight: 600;\n  height: 35px;\n  cursor: pointer;\n}\n\nbutton:focus {\n  outline: none;\n}\n\n.class_num {\n  color: #fff;\n  text-align: center;\n  background: linear-gradient(270deg, #46b9ff 25%, #109cf1 80%, #109cf1 100%);\n  float: left;\n  border-radius: 0px 150px 150px 0px / 0px 150px 150px 0px;\n  margin: 6px 4px;\n  padding: 6px 0px;\n  font-weight: 500;\n  font-size: 13px;\n  width: 94px;\n}\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 10px;\n  height: 8px;\n  padding-left: 20px;\n}\n\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\ninput:checked + .slider {\n  /*background-color: #2196F3;*/\n  border: 2px solid #2196F3;\n  background-color: #fff;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196F3;\n}\n\ninput:checked + .slider:before {\n  transform: translateX(26px);\n  background-color: #19C83F;\n}\n\n/* Rounded sliders */\n\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n\n.bottom_button {\n  padding: 15px 0px;\n  height: 75px;\n  z-index: 200;\n  position: fixed;\n  bottom: 0px;\n}\n\n.add_role {\n  color: #109CF1;\n  font-weight: 600;\n  font-size: 12px;\n  float: right;\n  margin-bottom: 5px;\n}\n\n.modal-title {\n  color: #2B2626;\n  font-weight: 600;\n  font-size: 13px;\n}\n\n.padding20 {\n  padding-top: 21px;\n}\n\n.w100 {\n  width: 100%;\n}\n\n.white_button {\n  background-color: #fff;\n  color: #109CF1;\n  padding: 7px 20px;\n  font-size: 12px;\n  border: 1px solid #109CF1;\n  border-radius: 5px;\n  font-weight: 500;\n  cursor: pointer;\n}\n\n.select_no {\n  font-weight: 400;\n  font-size: 14px;\n  position: relative;\n  top: 25px;\n  line-height: 35px;\n}\n\n.select_no > span {\n  font-weight: 600;\n  background: linear-gradient(90deg, #E18E12 3.41%, #F1DB10 164.77%);\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);\n  border-radius: 4px;\n  color: #fff;\n  text-align: center;\n  margin-left: 5px;\n  font-size: 16px;\n  display: inline-block;\n  height: 100%;\n  width: 85px;\n}\n\ninput:focus, select:focus, button:focus {\n  outline: none;\n}\n\n.table_heading {\n  width: 100%;\n  background-color: #EEF1F4;\n  /* padding: 10px 0px;*/\n  line-height: 35px;\n  margin: 20px 0px 10px 0px;\n  display: flex;\n  border-radius: 5px;\n  box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  -webkit-box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  -moz-box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n}\n\n.role .table_heading > div {\n  width: calc(100%  / 5);\n}\n\n.role .table_body > div {\n  width: calc(100%  / 5);\n}\n\n.table_heading > div {\n  text-align: center;\n  font-weight: 600;\n  font-size: 12px;\n  color: #323C47;\n}\n\n.table_body {\n  width: 100%;\n  margin-bottom: 20px;\n  display: flex;\n  border-radius: 5px;\n  box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  -webkit-box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  -moz-box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  line-height: 35px;\n}\n\n.table_body > div {\n  text-align: center;\n  font-weight: 500;\n  font-size: 13px;\n  color: #807C7C;\n  padding: 5px 0px;\n  margin: auto;\n}\n\n.bottom_pagignation {\n  padding-top: 10px;\n  background-color: #fff;\n  position: fixed;\n  bottom: 0px;\n  z-index: 100;\n}\n\n.bottom_pagignation p {\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 20px;\n}\n\n.bottom_pagignation select {\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-size: 13px;\n  font-weight: 500;\n  color: #0079FF;\n  display: inline;\n}\n\n.bottom_pagignation .w20 {\n  width: 20%;\n}\n\n.bottom_pagignation .w10 {\n  width: 10%;\n}\n\n.bottom_pagignation .w50 {\n  width: 50%;\n}\n\n.bottom_pagignation .w40 {\n  width: 40%;\n}\n\n.number {\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 20px;\n  letter-spacing: 0.01em;\n  color: #000000;\n  margin: 0px 4px;\n}\n\n.active_circle {\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 20px;\n  letter-spacing: 0.01em;\n  color: #fff;\n  padding: 2px 7px;\n  border-radius: 50%;\n  background: #0079FF;\n}\n\n.next {\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 20px;\n  letter-spacing: 0.01em;\n  color: #0079FF;\n}\n\n.w450 {\n  width: 450px;\n}\n\n.role {\n  margin: 10px 0px;\n}\n\n.mr10 {\n  margin-right: 10px;\n}\n\n.info {\n  border: 1px solid;\n  padding: 1px 7px;\n  background: #fff;\n  border: 1px solid #ccc;\n  margin-left: 10px;\n  display: inline-block;\n  font-size: 14px;\n  font-weight: 600;\n  box-sizing: border-box;\n  border-radius: 50%;\n  height: 25px;\n  cursor: pointer;\n  color: #0084f6;\n  background: #efefef;\n  outline: none;\n}\n\n.info_box {\n  display: none;\n}\n\n/*.info:hover{\n    display: none;\n  }\n  .info:hover + .info_box {\n    display: block;\n  }*/\n\n.checkbox {\n  display: flex;\n  grid-template-columns: -webkit-min-content auto;\n  grid-template-columns: min-content auto;\n  grid-gap: 0.5em;\n  font-size: 2rem;\n  margin-bottom: 0px;\n  color: var(--color);\n}\n\n.checkbox__input input {\n  opacity: 0;\n  width: 0em;\n  height: 0em;\n}\n\n.checkbox__control {\n  display: inline-grid;\n  width: 20px;\n  height: 20px;\n  border-radius: 0.1em;\n  border: 1px solid #BBB2B2;\n}\n\n.checkbox__input {\n  display: grid;\n  grid-template-areas: \"checkbox\";\n}\n\n.checkbox__control svg {\n  color: #fff;\n  transition: transform 0.1s ease-in 25ms;\n  transform: scale(0);\n  stroke-width: 4;\n  transform-origin: bottom left;\n  padding: 2px;\n}\n\n.checkbox__input input:checked\n+ .checkbox__control svg {\n  transform: scale(1);\n  background-color: #119CF1;\n  border-radius: 0.1em;\n  width: 20px;\n  height: 20px;\n}\n\n.checkbox__input input:checked + .checkbox__control {\n  border: none;\n}\n\n.global {\n  margin-bottom: 90px;\n  margin-right: 1%;\n}\n\n.form_heading > span {\n  z-index: 1;\n  font-size: 16px;\n  font-weight: 600;\n  position: relative;\n  background: #E8E8E8;\n  border-radius: 20px;\n  /* or 154% */\n  padding: 15px 15px;\n  letter-spacing: 0.01em;\n  color: #4D4D4D;\n}\n\n.borderbottom {\n  border-bottom: 1px solid #DFE5F0;\n  top: -25px;\n  position: relative;\n  z-index: 0;\n}\n\n.rolepopup .table_heading > div {\n  width: calc(100%  / 4);\n}\n\n.rolepopup .table_body > div {\n  width: calc(100%  / 4);\n}\n\n.rolepopup .table_heading {\n  margin-top: 0px;\n}\n\n.tooltip {\n  position: relative;\n  display: inline-block;\n  border-bottom: 1px dotted black;\n}\n\n.tooltip .tooltiptext {\n  visibility: hidden;\n  width: 120px;\n  background-color: black;\n  color: #fff;\n  text-align: center;\n  border-radius: 6px;\n  padding: 5px 0;\n  /* Position the tooltip */\n  position: absolute;\n  z-index: 1;\n}\n\n.tooltip:hover .tooltiptext {\n  visibility: visible;\n}\n\n.input {\n  padding: 7px 20px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-size: 12px;\n  font-weight: 500;\n  /*background-color: #f5f6f8;\n  */\n}\n\n.modal-content {\n  width: 500px;\n}\n\n.div_line {\n  border-bottom: 1px solid #EBEFF2;\n}\n\n.modal-dialog {\n  overflow-y: auto;\n  width: 500px;\n  overflow-x: auto;\n}\n\n.bshadow {\n  border-bottom: 1px solid #EFF0F5;\n}\n\n.head_border {\n  border-radius: 4px;\n}\n\n.white {\n  background-color: #fff;\n  width: calc(100% - 227px);\n  border-top: 3px solid #Ededed;\n}\n\n.user {\n  color: #109CF1;\n  font-weight: 600;\n}\n\n.right {\n  float: right;\n}\n\n.modal-dialog {\n  max-width: 500px;\n  margin: 1.75rem auto;\n}\n\n.modal-header {\n  display: flex;\n}\n\n.modal-header .close {\n  padding: 1rem;\n  margin: -1rem -1rem -1rem auto;\n}\n\n.modal-body {\n  height: 200px;\n}\n\n.pl0 {\n  padding-left: 0;\n}\n\n.role_name {\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 15px;\n  margin-bottom: 5px;\n}\n\n.webkit {\n  display: -webkit-box;\n  -webkit-box-align: center;\n}\n\n.toggle {\n  display: flex;\n  margin-left: auto;\n  align-items: center;\n  padding-right: 20px;\n}\n\n.off {\n  font-weight: 300;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n  letter-spacing: 0.01em;\n  color: #000000;\n  position: relative;\n  top: -4px;\n  margin: 0px 10px;\n}\n\n.on {\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n  margin: 0px 10px;\n  letter-spacing: 0.01em;\n  position: relative;\n  top: -4px;\n  color: #19C83F;\n}\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 35px;\n  height: 12px;\n}\n\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  /* background-color: #ccc;*/\n  -webkit-transition: .4s;\n  border: 1px solid #BDBABA;\n  box-sizing: border-box;\n  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1));\n  transition: .4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 18px;\n  width: 18px;\n  left: -6px;\n  bottom: -4px;\n  background-color: #BDBABA;\n  transition: .4s;\n}\n\ninput:checked + .slider {\n  /*background-color: #2196F3;*/\n}\n\ninput:focus + .slider {\n  /*box-shadow: 0 0 1px #2196F3;*/\n}\n\ninput:checked + .slider {\n  border: 1px solid #BDBABA;\n}\n\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n\n.flex1 {\n  display: flex;\n  justify-content: center;\n  margin: 20px 0px;\n}\n\n.flex1 > div {\n  width: 71%;\n}\n\n.flex1 > p {\n  width: 29%;\n}\n\n.helpIcon {\n  margin-left: 5px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2Vycy1tYW5hZ2VtZW50L3JvbGUtbWFuYWdlbWVudC9hZGQtZWRpdC1yb2xlL2FkZC1lZGl0LXJvbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXO0FBQ2Y7O0FBQ0U7RUFDSSwwQkFBMEI7QUFFaEM7O0FBQUU7RUFDRSxvQ0FBb0M7RUFDcEMsa0JBQWtCO0FBR3RCOztBQURFO0VBQ0ksK0NBQTRDO0VBQzVDLHVEQUFvRDtFQUNwRCxvREFBaUQ7RUFDakQsb0JBQW9CO0FBSTFCOztBQUZFO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtBQUtwQjs7QUFIRSxnQkFBQTs7QUFFQTtFQUNJLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixlQUNKO0FBSUY7O0FBRkU7RUFDTSwyQ0FBMkM7RUFDN0MseUJBQXlCO0FBSy9COztBQUhFO0VBQ0ksY0FBYztFQUNkLG9CQUFvQjtFQUNwQixvQkFBb0I7RUFDcEIsaUJBQWlCO0FBTXZCOztBQUpFLDhCQUFBOztBQUNBO0VBQ0UsYUFBYTtBQU9qQjs7QUFMRTtFQUNJLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFRckI7O0FBTkU7O0lBVUU7O0FBUEQ7RUFDQyxjQUFjO0VBQ2QsV0FBVztFQUNYLGlCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixzQkFBc0I7QUFTMUI7O0FBUEU7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQkFBZ0I7QUFVcEI7O0FBUkU7RUFDRSxhQUFhO0FBV2pCOztBQVRFO0VBQ0UsZ0JBQWdCO0FBWXBCOztBQVZFO0VBRUUsY0FBYztFQUVkLDJCQUEyQjtFQUMzQixnQkFBZ0I7RUFDaEIsZUFBZTtBQVduQjs7QUFU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ZW1lbnQvcm9sZS1tYW5hZ2VtZW50L2FkZC1lZGl0LXJvbGUvYWRkLWVkaXQtcm9sZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XG4gICAgbWFyZ2luOiAwcHg7XG4gIH1cbiAgbWFpbiB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgfVxuICBib2R5e1xuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIH1cbiAgLm1haW4tc2hhZG93e1xuICAgICAgYm94LXNoYWRvdzogMHB4IDdweCA1cHggLTNweCByZ2JhKDAsMCwwLDAuMik7XG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA3cHggNXB4IC0zcHggcmdiYSgwLDAsMCwwLjIpO1xuICAgICAgLW1vei1ib3gtc2hhZG93OiAwcHggN3B4IDVweCAtM3B4IHJnYmEoMCwwLDAsMC4yKTtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICB9XG4gIC53OTh7XG4gICAgd2lkdGg6IDk4JTtcbiAgICBtYXJnaW46IDBweCBhdXRvO1xuICB9XG4gIC8qc3dpY2hpbmcgdGFicyovXG4gIFxuICAubmF2LWl0ZW0gLm5hdi1saW5re1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGNvbG9yOiAjNDA1ODc3O1xuICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogMTNweFxuICB9XG4gIFxuICAubmF2LWl0ZW0gLm5hdi1saW5rLmFjdGl2ZSB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMTA5Q0YxICFpbXBvcnRhbnQ7XG4gICAgICBjb2xvcjogIzEwOUNGMSAhaW1wb3J0YW50O1xuICB9XG4gIC5uYXYtbGluayB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHBhZGRpbmc6IDEuNXJlbSAwcmVtO1xuICAgICAgbWFyZ2luOiAtMXJlbSAxLjVyZW07XG4gICAgICBtYXJnaW4tbGVmdDogMHJlbTtcbiAgfVxuICAvKmNvbnRlbnQgY3NzKG1hcmtzIHNldHRpbmdzKSovXG4gIC5mbGV4e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbiAgLnBhZ2VfaGVhZGluZz5we1xuICAgICAgbWFyZ2luOiAyMHB4IDBweCAxMHB4IDBweDtcbiAgICAgIGNvbG9yOiAjMzM0RDZFO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuICAvKi5wYWdlX2hlYWRpbmc+cHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgfSovXG4gICAuc2VsZWN0e1xuICAgIGNvbG9yOiAjNzg3QTdEO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6N3B4IDIwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgfVxuICAudGV4dF9oZWFkaW5ne1xuICAgIGNvbG9yOiAjMzM0RDZFO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbiAgc2VsZWN0e1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cbiAgLm10MTV7XG4gICAgbWFyZ2luLXRvcDogMTdweDtcbiAgfVxuICAuc2VjdGlvbl9oZWFkaW5ne1xuICAgIC8vIG1hcmdpbjogMjVweCAwcHggMTBweCAwcHg7XG4gICAgY29sb3I6ICMzMzRENkU7XG4gICAgLy8gIGJvcmRlci1ib3R0b206MXB4IHNvbGlkICNFRUYxRjQ7XG4gICAgcGFkZGluZzogMTBweCAwcHggMTBweCAxMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG4gIC5zZWN0aW9uX2hlYWRpbmc+cHtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIHZlcnRpY2FsLWFsaWduOiBzdXBlcjtcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG4gICAuYm9yZGVyLWJyb3due1xuICAvKiAgICBib3JkZXI6MXB4IHNvbGlkICNFRUYxRjQ7ICovXG4gICAgICBtYXJnaW4tYm90dG9tOjE2cHg7XG4gICAgICAvLyBwYWRkaW5nLWxlZnQ6IDEwMHB4OyBcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAuc2VjdGlvbntcbiAgICBiYWNrZ3JvdW5kOiAjRjhGOUZCO1xuICBib3JkZXI6IDFweCBzb2xpZCAjRjhGOUZCO1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAvLyAgcGFkZGluZzogMTBweCAwcHggMHB4IDBweDtcbiAgICAgbWFyZ2luLXJpZ2h0OiAxJTtcbiAgfVxuICBcbiAgLnNlY3Rpb24+ZGl2e1xuICAgIG1hcmdpbjogMTJweCAwcHg7XG4gIFxuICAgIHBhZGRpbmc6IDBweCA5cHg7XG4gICAgd2lkdGg6MTklO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgfVxuICAgLmxhYmVsMXtcbiAgICBjb2xvcjogIzMyM0M0NztcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBsaW5lLWhlaWdodDogMTdweDtcbiAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLmZpZWxkLWNoZWNrYm94LXdyYXBwZXJ7XG4gICAgICAgIHBhZGRpbmctbGVmdDogNTBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIH1cbiAgLm1hcmt7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDIyNSwxNDIsMTgsMSkgMCUsIHJnYmEoMjQxLDIxOSwxNiwxKSAxMDAlKTtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIG1hcmdpbjogNnB4IDRweDtcbiAgICBwYWRkaW5nOiA2cHggMjBweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgXG4gICB9XG4gIC5ibHVlX2J1dHRvbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTA5Q0YxO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDBweCAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMTA5Q0YxO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGhlaWdodDogMzVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgYnV0dG9uOmZvY3Vze1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cbiAgLmNsYXNzX251bXtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDI3MGRlZywgcmdiYSg3MCwxODUsMjU1LDEpIDI1JSwgcmdiYSgxNiwxNTYsMjQxLDEpIDgwJSwgcmdiYSgxNiwxNTYsMjQxLDEpIDEwMCUpO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgYm9yZGVyLXJhZGl1czogMHB4IDE1MHB4IDE1MHB4IDBweCAvIDBweCAxNTBweCAxNTBweCAwcHg7XG4gICAgbWFyZ2luOiA2cHggNHB4O1xuICAgIHBhZGRpbmc6IDZweCAwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgd2lkdGg6IDk0cHg7XG4gIH1cbiAgLnN3aXRjaCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMTBweDtcbiAgICBoZWlnaHQ6IDhweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIH1cbiAgXG4gIC5zd2l0Y2ggaW5wdXQgeyBcbiAgICBvcGFjaXR5OiAwO1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbiAgfVxuICBcbiAgXG4gIGlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcbiAgICAvKmJhY2tncm91bmQtY29sb3I6ICMyMTk2RjM7Ki9cbiAgICBib3JkZXI6MnB4IHNvbGlkICMyMTk2RjM7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgfVxuICBcbiAgaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4ICMyMTk2RjM7XG4gIH1cbiAgXG4gIGlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE5QzgzRjtcbiAgfVxuICBcbiAgLyogUm91bmRlZCBzbGlkZXJzICovXG4gIC5zbGlkZXIucm91bmQge1xuICAgIGJvcmRlci1yYWRpdXM6IDM0cHg7XG4gIH1cbiAgXG4gIC5zbGlkZXIucm91bmQ6YmVmb3JlIHtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH1cbiAgLmJvdHRvbV9idXR0b257XG4gICAgcGFkZGluZzogMTVweCAwcHg7XG4gICAgaGVpZ2h0OiA3NXB4O1xuICAgIHotaW5kZXg6IDIwMDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAwcHg7XG4gIH1cbiAgXG4gIFxuICAuYWRkX3JvbGV7XG4gICAgICBjb2xvcjogIzEwOUNGMTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIH1cbiAgLm1vZGFsLXRpdGxle1xuICAgIGNvbG9yOiAjMkIyNjI2O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICB9XG4gIC5wYWRkaW5nMjB7XG4gICAgcGFkZGluZy10b3A6IDIxcHggO1xuICAgfVxuICAgLncxMDB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICB9XG4gICAud2hpdGVfYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGNvbG9yOiAjMTA5Q0YxO1xuICAgIHBhZGRpbmc6IDdweCAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMTA5Q0YxO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAuc2VsZWN0X25ve1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICB0b3A6IDI1cHg7XG4gICAgICBsaW5lLWhlaWdodDogMzVweDtcbiAgICAgIFxuICB9XG4gIC5zZWxlY3Rfbm8+c3BhbntcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjRTE4RTEyIDMuNDElLCAjRjFEQjEwIDE2NC43NyUpO1xuICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDg1cHg7XG4gIH1cbiAgaW5wdXQ6Zm9jdXMsIHNlbGVjdDpmb2N1cyxidXR0b246Zm9jdXN7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgIH1cbiAgLnRhYmxlX2hlYWRpbmd7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VFRjFGNDtcbiAgIC8qIHBhZGRpbmc6IDEwcHggMHB4OyovXG4gICBsaW5lLWhlaWdodDogMzVweDtcbiAgICBtYXJnaW46IDIwcHggMHB4IDEwcHggMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICBib3gtc2hhZG93OiAwcHggN3B4IDVweCAtM3B4IHJnYmEoMCwwLDAsMC4xKTtcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDdweCA1cHggLTNweCByZ2JhKDAsMCwwLDAuMSk7XG4gICAgICAtbW96LWJveC1zaGFkb3c6IDBweCA3cHggNXB4IC0zcHggcmdiYSgwLDAsMCwwLjEpO1xuICB9XG4gIC5yb2xlIC50YWJsZV9oZWFkaW5nPmRpdntcbiAgICB3aWR0aDogY2FsYygxMDAlICAvIDUpO1xuICB9XG4gIC5yb2xlIC50YWJsZV9ib2R5PmRpdntcbiAgICB3aWR0aDogY2FsYygxMDAlICAvIDUpO1xuICB9XG4gIC50YWJsZV9oZWFkaW5nPmRpdntcbiAgICBcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICMzMjNDNDc7XG4gIFxuICB9XG4gIFxuICAudGFibGVfYm9keXtcbiAgICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgYm94LXNoYWRvdzogMHB4IDdweCA1cHggLTNweCByZ2JhKDAsMCwwLDAuMSk7XG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA3cHggNXB4IC0zcHggcmdiYSgwLDAsMCwwLjEpO1xuICAgICAgLW1vei1ib3gtc2hhZG93OiAwcHggN3B4IDVweCAtM3B4IHJnYmEoMCwwLDAsMC4xKTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICB9XG4gIC50YWJsZV9ib2R5PmRpdntcbiAgICBcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgY29sb3I6ICM4MDdDN0M7XG4gICAgcGFkZGluZzogNXB4IDBweDtcbiAgICAgbWFyZ2luOiBhdXRvO1xuICBcbiAgfVxuICAuYm90dG9tX3BhZ2lnbmF0aW9ue1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDBweDtcbiAgICB6LWluZGV4OiAxMDA7XG4gIH1cbiAgLmJvdHRvbV9wYWdpZ25hdGlvbiBwe1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICB9XG4gIC5ib3R0b21fcGFnaWduYXRpb24gc2VsZWN0e1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICMwMDc5RkY7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICB9XG4gIC5ib3R0b21fcGFnaWduYXRpb24gLncyMHtcbiAgICB3aWR0aDogMjAlO1xuICB9XG4gIC5ib3R0b21fcGFnaWduYXRpb24gLncxMHtcbiAgICB3aWR0aDogMTAlO1xuICB9XG4gIC5ib3R0b21fcGFnaWduYXRpb24gLnc1MHtcbiAgICB3aWR0aDogNTAlO1xuICB9XG4gIC5ib3R0b21fcGFnaWduYXRpb24gLnc0MHtcbiAgICB3aWR0aDogNDAlO1xuICB9XG4gIC5udW1iZXJ7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgbWFyZ2luOjBweCA0cHg7XG4gIH1cbiAgLmFjdGl2ZV9jaXJjbGV7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6MnB4IDdweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiAjMDA3OUZGO1xuICB9XG4gIC5uZXh0e1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gIGNvbG9yOiAjMDA3OUZGO1xuICBcbiAgfVxuICAudzQ1MHtcbiAgICB3aWR0aDogNDUwcHg7XG4gIH1cbiAgLnJvbGV7XG4gIG1hcmdpbjoxMHB4IDBweDtcbiAgfVxuICAubXIxMHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cbiAgLmluZm97XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkO1xuICAgICAgICBwYWRkaW5nOiAxcHggN3B4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGNvbG9yOiAjMDA4NGY2O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICB9XG4gIC5pbmZvX2JveHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC8qLmluZm86aG92ZXJ7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuaW5mbzpob3ZlciArIC5pbmZvX2JveCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH0qL1xuICAgICAuY2hlY2tib3gge1xuICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCBhdXRvO1xuICAgICAgZ3JpZC1nYXA6IDAuNWVtO1xuICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgICAgY29sb3I6IHZhcigtLWNvbG9yKTtcbiAgfVxuICAuY2hlY2tib3hfX2lucHV0IGlucHV0IHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB3aWR0aDogMGVtO1xuICAgICAgaGVpZ2h0OiAwZW07XG4gICAgfVxuICAuY2hlY2tib3hfX2NvbnRyb2wge1xuICAgIGRpc3BsYXk6IGlubGluZS1ncmlkO1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAwLjFlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgI0JCQjJCMjtcbiAgO1xuICB9XG4gIC5jaGVja2JveF9faW5wdXQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJjaGVja2JveFwiO1xuICB9XG4gIC5jaGVja2JveF9fY29udHJvbCBzdmcge1xuICAgICAgY29sb3I6ICAjZmZmO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjFzIGVhc2UtaW4gMjVtcztcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgIHN0cm9rZS13aWR0aDo0O1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSBsZWZ0O1xuICAgIHBhZGRpbmc6IDJweDtcbiAgfVxuICAuY2hlY2tib3hfX2lucHV0IGlucHV0OmNoZWNrZWRcbiAgICsgLmNoZWNrYm94X19jb250cm9sIHN2ZyB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTE5Q0YxO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMWVtO1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCAjQkJCMkIyO1xuICB9XG4gIC5jaGVja2JveF9faW5wdXQgaW5wdXQ6Y2hlY2tlZCArIC5jaGVja2JveF9fY29udHJvbCB7XG4gICAgYm9yZGVyIDpub25lO1xuICB9XG4gIC5nbG9iYWx7XG4gICAgbWFyZ2luLWJvdHRvbTogOTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDElO1xuICB9XG5cbiAgLmZvcm1faGVhZGluZz5zcGFue1xuICAgIHotaW5kZXg6IDE7XG5cbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZDogI0U4RThFODtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuLyogb3IgMTU0JSAqL1xucGFkZGluZzogMTVweCAxNXB4O1xubGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbmNvbG9yOiAjNEQ0RDREO1xuXG4gIH1cbiAgLmJvcmRlcmJvdHRvbXtcbiAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjREZFNUYwO1xuICAgIHRvcDogLTI1cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDA7XG4gIH1cbiAgLnJvbGVwb3B1cCAudGFibGVfaGVhZGluZz5kaXZ7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAgLyA0KTtcbiAgfVxuICAucm9sZXBvcHVwIC50YWJsZV9ib2R5PmRpdntcbiAgICB3aWR0aDogY2FsYygxMDAlICAvIDQpO1xuICB9XG4gIC5yb2xlcG9wdXAgLnRhYmxlX2hlYWRpbmd7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICB9XG4gIC50b29sdGlwIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgYmxhY2s7XG4gIH1cbiAgXG4gIC50b29sdGlwIC50b29sdGlwdGV4dCB7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIHdpZHRoOiAxMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIHBhZGRpbmc6IDVweCAwO1xuICBcbiAgICAvKiBQb3NpdGlvbiB0aGUgdG9vbHRpcCAqL1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAxO1xuICB9XG4gIFxuICAudG9vbHRpcDpob3ZlciAudG9vbHRpcHRleHQge1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIH1cbiAgLmlucHV0e1xuICAgIHBhZGRpbmc6IDdweCAyMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgLypiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNmY4O1xuICAqL31cbiAgLm1vZGFsLWNvbnRlbnQge1xuICAgIHdpZHRoOiA1MDBweDtcbiAgfVxuICAuZGl2X2xpbmV7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFQkVGRjI7XG4gIH1cbiAgLm1vZGFsLWRpYWxvZyB7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICB3aWR0aDogNTAwcHg7XG4gICAgb3ZlcmZsb3cteDogYXV0bztcbiAgfVxuICAuYnNoYWRvd3tcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0VGRjBGNTtcbiAgIFxuICB9XG4gIC5oZWFkX2JvcmRlcntcbiAgICAvLyBib3gtc2hhZG93OiAwcHggM3B4IDZweCAjZWVlNGU0O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgIFxuICB9XG4gIC53aGl0ZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMjdweCk7XG4gICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICNFZGVkZWQ7XG4gIH1cbiAgLnVzZXJ7XG4gICAgY29sb3I6ICMxMDlDRjE7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgfVxuICAucmlnaHQge1xuICAgIGZsb2F0OiByaWdodDtcbn1cbi5tb2RhbC1kaWFsb2cge1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICBtYXJnaW46IDEuNzVyZW0gYXV0bztcbn1cbi5tb2RhbC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuLmNsb3NlIHtcbiAgcGFkZGluZzogMXJlbTtcbiAgbWFyZ2luOiAtMXJlbSAtMXJlbSAtMXJlbSBhdXRvO1xufVxufVxuLm1vZGFsLWJvZHkge1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuLnBsMHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuLnJvbGVfbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi53ZWJraXR7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xufVxuXG4udG9nZ2xle1xuICBkaXNwbGF5OiBmbGV4O1xuIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICBcbn1cbi5vZmZ7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG5mb250LXNpemU6IDEzcHg7XG5saW5lLWhlaWdodDogMThweDtcbi8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG5sZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuY29sb3I6ICMwMDAwMDA7XG5wb3NpdGlvbjogcmVsYXRpdmU7XG50b3A6IC00cHg7XG5tYXJnaW46IDBweCAxMHB4O1xufVxuLm9ue1xuICBmb250LXdlaWdodDogNDAwO1xuZm9udC1zaXplOiAxM3B4O1xubGluZS1oZWlnaHQ6IDE4cHg7XG4vKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xubWFyZ2luOiAwcHggMTBweDtcbmxldHRlci1zcGFjaW5nOiAwLjAxZW07XG5wb3NpdGlvbjogcmVsYXRpdmU7XG50b3A6IC00cHg7XG5jb2xvcjogIzE5QzgzRjtcbn1cblxuXG4uc3dpdGNoIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gd2lkdGg6IDM1cHg7XG5oZWlnaHQ6IDEycHg7XG59XG5cbi5zd2l0Y2ggaW5wdXQgeyBcbiAgb3BhY2l0eTogMDtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbn1cblxuLnNsaWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gLyogYmFja2dyb3VuZC1jb2xvcjogI2NjYzsqL1xuICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcbiAgYm9yZGVyOiAxcHggc29saWQgI0JEQkFCQTtcbmJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5maWx0ZXI6IGRyb3Atc2hhZG93KDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKSk7XG4gIHRyYW5zaXRpb246IC40cztcbn1cblxuLnNsaWRlcjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogMThweDtcbiAgd2lkdGg6IDE4cHg7XG4gIGxlZnQ6IC02cHg7XG4gIGJvdHRvbTogLTRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0JEQkFCQTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XG4gIHRyYW5zaXRpb246IC40cztcbn1cblxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xuICAvKmJhY2tncm91bmQtY29sb3I6ICMyMTk2RjM7Ki9cbn1cblxuaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcbiAgLypib3gtc2hhZG93OiAwIDAgMXB4ICMyMTk2RjM7Ki9cbn1cblxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXJ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNCREJBQkE7XG59XG4uc2xpZGVyLnJvdW5kIHtcbiAgYm9yZGVyLXJhZGl1czogMzRweDtcbn1cblxuLnNsaWRlci5yb3VuZDpiZWZvcmUge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uZmxleDF7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW46IDIwcHggMHB4O1xufVxuLmZsZXgxPmRpdntcbndpZHRoOiA3MSU7XG59XG4uZmxleDE+cHtcbiAgd2lkdGg6IDI5JTtcbiAgfVxuICAuaGVscEljb24ge1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/components/users-management/role-management/add-edit-role/add-edit-role.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/components/users-management/role-management/add-edit-role/add-edit-role.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: AddEditRoleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEditRoleComponent", function() { return AddEditRoleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_user_management_role_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/user-management/role.service */ "./src/app/services/user-management/role.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _model_role_features__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../model/role_features */ "./src/app/model/role_features.ts");
/* harmony import */ var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/authenticator.service */ "./src/app/services/authenticator.service.ts");
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






let AddEditRoleComponent = /** @class */ (() => {
    let AddEditRoleComponent = class AddEditRoleComponent {
        constructor(activatedRoute, route, apiService, toastCtrl, auth) {
            this.activatedRoute = activatedRoute;
            this.route = route;
            this.apiService = apiService;
            this.toastCtrl = toastCtrl;
            this.auth = auth;
            this.roleId = "-1";
            this.featuresArray = [];
            this.userData = "";
            this.targetFeatures = [];
            this.cloneFeatureArray = [];
            this.roleName = "";
            this.roleDesc = "";
            this.selectedRoleLength = 0;
            this.examDeskRoles = [];
            this.procturRoles = [];
            this.role_feature = _model_role_features__WEBPACK_IMPORTED_MODULE_4__["role"].features;
            this.isShoweOnlineExam = false;
            this.existingRolesData = [];
            this.schoolModel = false;
        }
        ngOnInit() {
            this.schoolModel = this.auth.schoolModel.getValue();
            this.instituteId = sessionStorage.getItem('institute_id');
            this.isShoweOnlineExam = sessionStorage.getItem('isShoweOnlineExam') == 'true';
            this.libraryRoleInstituteId = 101077;
            this.kakadeRoleInstituteId = 100767;
            this.activatedRoute.params.subscribe((res) => {
                this.getAllRolesList();
                // this.getAllExistingRoles();
                if (res.hasOwnProperty('id')) {
                    this.roleId = res.id;
                }
                else {
                    this.targetFeatures = [];
                }
            });
        }
        getAllExistingRoles() {
            this.apiService.getRoles().subscribe((data) => {
                this.existingRolesData = data;
            });
        }
        getAllRolesList() {
            this.auth.showLoader();
            this.apiService.getAllFeature().subscribe(res => {
                this.auth.hideLoader();
                this.featuresArray = res;
                // Changes by Nalini - libarary role will be visible only if enabled from super admin and study material role will be visible for all users
                this.cloneFeatureArray = this.keepCloning(res);
                for (let i = 0; i < this.cloneFeatureArray.length; i++) {
                    if (this.cloneFeatureArray[i].product_name == 'Examdesk') {
                        this.examDeskRoles = this.cloneFeatureArray[i].category_list;
                    }
                    else if (this.cloneFeatureArray[i].product_name == 'Proctur') {
                        this.procturRoles = this.cloneFeatureArray[i].category_list;
                    }
                }
                // hide super admin feature condition based -- Nalini
                if (sessionStorage.getItem('enable_library_feature') != '1') {
                    this.checkSuperAdminSettings(5031);
                }
                if (sessionStorage.getItem('isShowLiveclass') != 'true') {
                    this.checkSuperAdminSettings(5022);
                }
                if (!this.isShoweOnlineExam) {
                    this.checkSuperAdminSettings(5033);
                }
                if (sessionStorage.getItem('enable_eLearn_feature') != '1') {
                    this.checkSuperAdminSettings(5027);
                }
                if (sessionStorage.getItem('enable_client_website') != 'true') {
                    this.checkSuperAdminSettings(5122);
                }
                if (sessionStorage.getItem('enable_online_assignment_feature') != '1') {
                    this.checkSuperAdminSettings(5116);
                }
                if (sessionStorage.getItem('isShowExpense') != 'true') {
                    this.checkSuperAdminSettings(5084);
                    this.checkSuperAdminSettingsSubRole(5034, 5117);
                }
                // if(sessionStorage.getItem('enable_chat_with_parent') != '1') {
                //   this.checkSuperAdminSettingsSubRole(9999, 5066); 
                // }
                if (this.schoolModel) {
                    this.checkSuperAdminSettings(5027);
                    this.checkSuperAdminSettingsSubRole(5019, 5109);
                    this.checkSuperAdminSettingsSubRole(5020, 5047);
                    this.checkSuperAdminSettingsSubRole(5034, 5048);
                    this.checkSuperAdminSettingsSubRole(5034, 5049);
                }
                // Manage branch menu hide -- Nalini
                this.checkSuperAdminSettings(5052);
                if (this.roleId != "-1") {
                    this.getRolesOfUser(this.roleId);
                }
            }, err => {
                this.auth.hideLoader();
                console.log(err);
            });
        }
        checkSuperAdminSettings(category_id) {
            for (let t = 0; t < this.procturRoles.length; t++) {
                if (this.procturRoles[t].category_id == category_id) {
                    this.procturRoles.splice(t, 1);
                }
            }
        }
        checkSuperAdminSettingsSubRole(category_id, feature_id) {
            for (let t = 0; t < this.procturRoles.length; t++) {
                if (this.procturRoles[t].category_id == category_id) {
                    for (let feature = 0; feature < this.procturRoles[t].feature_list.length; feature++) {
                        if (this.procturRoles[t].feature_list[feature].feature_id == feature_id) {
                            this.procturRoles[t].feature_list.splice(feature, 1);
                        }
                    }
                }
            }
        }
        getRolesOfUser(id) {
            this.auth.showLoader();
            this.apiService.getPerticularRoles(id).subscribe((res) => {
                this.auth.hideLoader();
                this.userData = res;
                let role = this.keepCloning(res);
                // for (let t = 0; t < this.cloneFeatureArray.length; t++) {
                //   for (let j = 0; j < this.cloneFeatureArray[t].category_list.length; j++) {
                //     for (let feature = 0; feature < this.cloneFeatureArray[t].category_list[j].feature_list.length; feature++) {
                //       this.cloneFeatureArray[t].category_list[j].isToggleChecked = false;
                //       this.cloneFeatureArray[t].category_list[j].feature_list[feature].isChecked = false;
                //       this.selectedRoleLength++;
                //     }
                //   }
                // }
                this.makeTargetArray(role.feautreList);
            }, err => {
                this.auth.hideLoader();
                console.log(err);
            });
        }
        makeTargetArray(arr) {
            this.auth.showLoader();
            this.targetFeatures = [];
            this.selectedRoleLength = 0;
            if (arr.length > 0) {
                for (let i = 0; i < arr.length; i++) {
                    for (let t = 0; t < this.cloneFeatureArray.length; t++) {
                        for (let j = 0; j < this.cloneFeatureArray[t].category_list.length; j++) {
                            if (arr[i] == this.cloneFeatureArray[t].category_list[j].category_id) {
                                this.cloneFeatureArray[t].category_list[j].isToggleChecked = true;
                                this.selectedRoleLength++;
                            }
                            for (let feature = 0; feature < this.cloneFeatureArray[t].category_list[j].feature_list.length; feature++) {
                                if (arr[i] == this.cloneFeatureArray[t].category_list[j].feature_list[feature].feature_id) {
                                    this.cloneFeatureArray[t].category_list[j].isToggleChecked = true;
                                    this.cloneFeatureArray[t].category_list[j].feature_list[feature].isChecked = true;
                                    this.selectedRoleLength++;
                                }
                            }
                        }
                    }
                }
                this.auth.hideLoader();
            }
            else {
                this.targetFeatures = [];
                this.auth.hideLoader();
            }
        }
        createNewRole() {
            let data = this.makeJsonTOSend();
            if (data.role_name == "" || data.role_name == null) {
                this.messageNotifier('error', '', 'Please Provide Role Name');
                return;
            }
            else if (data.feautreList.length == 0) {
                this.messageNotifier('error', '', 'Please Select Role');
                return;
            }
            else {
                this.apiService.createRole(data).subscribe(res => {
                    this.messageNotifier('success', '', 'Role Added Successfully');
                    this.route.navigateByUrl('/view/manage/role');
                }, err => {
                    this.messageNotifier('error', '', err.error.message);
                });
            }
        }
        updateRole() {
            let data = this.makeJsonTOSend();
            if (data.feautreList.length == 0) {
                this.messageNotifier('error', '', 'Please Select Role');
                return;
            }
            else {
                this.apiService.updateRole(data, this.userData.role_id).subscribe(res => {
                    this.messageNotifier('success', '', 'Role Updated Successfully');
                    this.route.navigateByUrl('/view/manage/role');
                }, err => {
                    console.log(err);
                    this.messageNotifier('error', '', err.error.message);
                });
            }
        }
        makeJsonTOSend() {
            let obj = {
                feautreList: []
            };
            if (this.roleId == '-1') {
                obj.role_name = this.roleName;
                obj.role_desc = this.roleDesc;
            }
            else {
                obj.role_id = this.userData.role_id;
                obj.role_desc = this.userData.role_desc;
            }
            for (let t = 0; t < this.cloneFeatureArray.length; t++) {
                for (let j = 0; j < this.cloneFeatureArray[t].category_list.length; j++) {
                    if (this.cloneFeatureArray[t].category_list[j].isToggleChecked) {
                        obj.feautreList.push(this.cloneFeatureArray[t].category_list[j].category_id);
                    }
                    for (let feature = 0; feature < this.cloneFeatureArray[t].category_list[j].feature_list.length; feature++) {
                        if (this.cloneFeatureArray[t].category_list[j].feature_list[feature].isChecked) {
                            obj.feautreList.push(this.cloneFeatureArray[t].category_list[j].feature_list[feature].feature_id);
                        }
                    }
                }
            }
            return obj;
        }
        messageNotifier(type, title, msg) {
            let data = {
                type: type,
                title: title,
                body: msg
            };
            this.toastCtrl.popToast(data);
        }
        keepCloning(objectpassed) {
            if (objectpassed === null || typeof objectpassed !== 'object') {
                return objectpassed;
            }
            let temporaryStorage = objectpassed.constructor();
            for (var key in objectpassed) {
                temporaryStorage[key] = this.keepCloning(objectpassed[key]);
            }
            return temporaryStorage;
        }
        checkLengthofRole(event) {
            event ? this.selectedRoleLength++ : this.selectedRoleLength--;
        }
        sliderChanges(obj) {
            if (!obj.isToggleChecked) {
                this.selectedRoleLength--;
                for (let i = 0; i < obj.feature_list.length; i++) {
                    if (obj.feature_list[i].isChecked) {
                        obj.feature_list[i].isChecked = false;
                        this.selectedRoleLength--;
                    }
                }
            }
            else {
                this.selectedRoleLength++;
            }
        }
    };
    AddEditRoleComponent.ctorParameters = () => [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _services_user_management_role_service__WEBPACK_IMPORTED_MODULE_2__["RoleService"] },
        { type: _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"] },
        { type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticatorService"] }
    ];
    AddEditRoleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-edit-role',
            template: __importDefault(__webpack_require__(/*! raw-loader!./add-edit-role.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/users-management/role-management/add-edit-role/add-edit-role.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./add-edit-role.component.scss */ "./src/app/components/users-management/role-management/add-edit-role/add-edit-role.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_user_management_role_service__WEBPACK_IMPORTED_MODULE_2__["RoleService"],
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _services_authenticator_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticatorService"]])
    ], AddEditRoleComponent);
    return AddEditRoleComponent;
})();



/***/ }),

/***/ "./src/app/components/users-management/role-management/role-management.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/components/users-management/role-management/role-management.component.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* ===============================header colors=======================*/\n.table-format-first .table-responsive table th,\n.table-format-first .table-responsive table td {\n  text-align: center;\n  padding: 10px 5px;\n}\n.table-format-first .table-responsive table th {\n  text-transform: capitalize;\n  font-size: 14px;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper {\n  display: inline-block;\n  overflow: initial;\n  margin-left: 0;\n  width: auto;\n  position: relative;\n  background: transparent;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox {\n  z-index: 2;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label {\n  font-size: 16px;\n  margin-left: 7px;\n  font-weight: 600;\n  vertical-align: middle;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:after, .table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:before {\n  z-index: 1;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper:after {\n  content: '';\n  width: 20px;\n  height: 20px;\n  background: #fff;\n  left: 0;\n  top: 0;\n  position: absolute;\n}\n.table-format-first .table-responsive table tbody tr td .fa-trash-o {\n  color: #f44336;\n  font-size: 20px;\n}\n.table-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-top: 10px;\n}\n.table-container .heading-container {\n  background: #e0eaec;\n  display: flex;\n  flex-direction: row;\n  font-size: 14px;\n  font-weight: 600;\n  text-align: left;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n}\n.table-container .heading-container .heading-item {\n  width: 10%;\n  text-align: center;\n}\n.table-container .value-outer-container {\n  display: flex;\n  flex-direction: column;\n  min-height: 53vh;\n  max-height: 54vh;\n  overflow-x: hidden;\n  overflow-y: auto;\n  border: 1px solid #ccc;\n}\n.table-container .value-outer-container .value-container {\n  display: flex;\n  flex-direction: row;\n  text-align: left;\n  padding: 4px;\n  font-size: 12px;\n  border-bottom: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n  border-top: none;\n}\n.table-container .value-outer-container .value-container .value-item {\n  width: 10%;\n  text-align: center;\n}\n.middle-section {\n  padding: 10px 10px;\n}\n.row {\n  margin: 5px 0px;\n}\n.btnWrapper .btn .tooltip {\n  position: relative;\n  top: -30px;\n  right: -30px;\n  min-width: 100px;\n  font-size: 12px;\n  padding: 6px;\n  height: 35px;\n  border-radius: 5px;\n  background: rgba(0, 0, 0, 0.541);\n  color: white;\n  visibility: hidden;\n  opacity: 0;\n}\n.btnWrapper .btn:hover {\n  background: #d8d6d6;\n}\n.btnWrapper .btn:hover .tooltip {\n  position: relative;\n  top: -20px;\n  right: 120px;\n  min-width: 100px;\n  padding: 6px;\n  border-radius: 5px;\n  font-size: 12px;\n  height: 30px;\n  background: rgba(0, 0, 0, 0.541);\n  color: white;\n  visibility: visible;\n  opacity: 1;\n  transition: all 0.2s;\n}\n.btnWrapper .btn:focus {\n  outline: none;\n}\n.btnWrapper .btn:active {\n  box-shadow: none;\n}\n/* popUp Scss */\n.popupWrapper {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  bottom: 0;\n  top: 0px;\n  right: 0;\n  left: 0px;\n  background: rgba(230, 230, 230, 0.5);\n  z-index: 100;\n  visibility: hidden;\n  opacity: 0;\n  transition: all 0.5s ease-in;\n}\n.popupWrapper .popup {\n  max-width: 65%;\n  width: 100%;\n  height: auto;\n  left: 0;\n  right: 0;\n  top: 5%;\n  bottom: 0;\n  margin: auto;\n}\n.popup-wrapper {\n  padding: 20px 20px;\n  box-sizing: border-box;\n  box-shadow: 1px 8px 20px 5px #9c9c9c;\n  transition: unset;\n  background: #fff;\n}\n.popup-wrapper h2 {\n  margin-bottom: 15px;\n  font-size: 14px;\n}\n.popup-wrapper h4 {\n  margin: 25px 0 15px;\n  font-weight: 600;\n}\n.closePopup {\n  right: 10px;\n  top: 10px;\n  font-size: 18px;\n  cursor: pointer;\n  line-height: 20px;\n  width: 26px;\n  height: 26px;\n  box-sizing: border-box;\n  text-align: center;\n  padding-top: 3px;\n  display: none;\n}\n.closePopup.bottomRight {\n  bottom: 2px;\n  top: auto;\n  left: auto;\n  right: 0;\n}\n.closePopup.topLeft {\n  left: 0;\n  right: auto;\n  top: 1px;\n  bottom: auto;\n}\n.closePopup.bottomLeft {\n  left: 0;\n  right: auto;\n  bottom: 2px;\n  top: auto;\n}\n.closePopup svg {\n  width: 16px;\n}\n.closePopup svg .cls-1 {\n  stroke: #c1c1c1;\n  stroke-width: 2px;\n}\n.closePopup:hover .cls-1 {\n  stroke: #0084f6;\n}\n.popup-content {\n  height: 100%;\n  overflow: hidden;\n  visibility: visible;\n}\n.fadeIn {\n  opacity: 1;\n  visibility: visible;\n}\n.popupWrapperMob {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  bottom: 0;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 100;\n  background: rgba(0, 0, 0, 0.5);\n  visibility: hidden;\n  transition: all 0.5s ease-in;\n}\n.popupWrapperMob .closePopup {\n  right: -25px;\n  top: -27px;\n  display: block;\n}\n.popup-mob {\n  left: 0;\n  width: 100%;\n  max-height: 70%;\n  background: #fff;\n  padding: 30px;\n  box-sizing: border-box;\n  height: 100%;\n  overflow: auto;\n  z-index: 1;\n  bottom: -70%;\n  transition: all 0.5s ease-in;\n}\n.popupWrapperMob.showPopupMob {\n  z-index: 100;\n  visibility: visible;\n  opacity: 1;\n}\n.popupWrapperMob.showPopupMob .popup-mob {\n  bottom: 0;\n}\n.spanText {\n  font-size: 12px;\n}\n.roles-table-wrapper {\n  max-height: 385px;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.action-menu a {\n  margin-left: 10px;\n  cursor: pointer;\n}\n.value-outer-container {\n  min-height: 53vh !important;\n  max-height: 53vh !important;\n}\n.heading-container, .value-container {\n  padding: 10px !important;\n}\n.common-tab {\n  padding-top: 5px;\n}\n.common-tab ul {\n  font-size: 0;\n}\n.common-tab ul li {\n  margin-right: 1%;\n  display: inline-block;\n  width: 9%;\n  max-width: 158px;\n  cursor: pointer;\n}\n.common-tab ul li a {\n  display: block;\n  padding: 6px 20px 6px;\n  background: white;\n  border: 1px solid #0084f6;\n  color: #0084f6;\n  text-align: center;\n  font-size: 14px;\n  font-weight: 600;\n  border-radius: 4px;\n  height: 30px;\n}\n.common-tab ul li:hover a, .common-tab ul li.active a {\n  background: #0084f6;\n  color: #fff;\n  border-color: #0084f6;\n  font-weight: normal;\n  border-radius: 4px;\n}\n.rolepopup .table_heading > div {\n  width: calc(100%  / 4);\n}\n.rolepopup .table_body > div {\n  width: calc(100%  / 4);\n}\n.rolepopup .table_heading {\n  margin-top: 0px;\n}\n.modal-dialog {\n  overflow-y: auto;\n  width: 550px;\n  overflow-x: auto;\n}\n.modal-content {\n  width: 550px;\n}\n.table_heading {\n  width: 100%;\n  background-color: #EEF1F4;\n  /* padding: 10px 0px;*/\n  line-height: 35px;\n  margin: 20px 0px 10px 0px;\n  display: flex;\n  border-radius: 5px;\n  box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  -webkit-box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  -moz-box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n}\n.table_heading > div {\n  text-align: center;\n  font-weight: 600;\n  font-size: 12px;\n  color: #323C47;\n}\n.table_body {\n  width: 100%;\n  margin-bottom: 20px;\n  display: flex;\n  border-radius: 5px;\n  box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  -webkit-box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  -moz-box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  line-height: 35px;\n}\n.table_body > div {\n  text-align: center;\n  font-weight: 500;\n  font-size: 13px;\n  color: #807C7C;\n  padding: 5px 0px;\n  margin: auto;\n}\n.modal-title {\n  margin-bottom: 0;\n  line-height: 1.5;\n  float: left;\n}\n.modal-header .close {\n  padding: 1rem;\n  margin: -1rem -1rem -1rem auto;\n}\n.modal-header .close :hover {\n  color: #000;\n  text-decoration: none;\n  opacity: .75;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY3NzL2NvbW1vbi92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy91c2Vycy1tYW5hZ2VtZW50L3JvbGUtbWFuYWdlbWVudC9yb2xlLW1hbmFnZW1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWUEsdUVBQUE7QUFXQTs7RUFLZ0Isa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQ3hCakM7QURrQkE7RUFTZ0IsMEJBQTBCO0VBQzFCLGVBQWU7QUN2Qi9CO0FEYUE7RUFnQjRCLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsdUJBQXVCO0FDekJuRDtBRElBO0VBdUJnQyxVQUFVO0FDdkIxQztBREFBO0VBMEJnQyxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixzQkFBc0I7QUN0QnREO0FEUEE7RUFnQ29DLFVBQVU7QUNyQjlDO0FEWEE7RUFvQ2dDLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixPQUFPO0VBQ1AsTUFBTTtFQUNOLGtCQUFrQjtBQ3JCbEQ7QURyQkE7RUE4QzRCLGNBbERiO0VBbURhLGVBQWU7QUNyQjNDO0FEOEJBO0VBQ0ksYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsZ0JBQWdCO0FDM0JwQjtBRHVCQTtFQU1NLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLHlCQUF5QjtBQ3pCL0I7QURVQTtFQWlCUSxVQUFVO0VBQ1Ysa0JBQWtCO0FDdkIxQjtBREtBO0VBc0JNLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtB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QUNuQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2pCLCtDQUE0QztFQUMzQyx1REFBb0Q7RUFDcEQsb0RBQWlEO0VBQ2pELGlCQUFpQjtBQTBHdkI7QUF4R0U7RUFFRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2YsWUFBWTtBQTBHakI7QUF2R0U7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFdBQVc7QUEwR2Y7QUF4R0U7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0FBMkdsQztBQTdHRTtFQUlNLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsWUFBWTtBQTZHcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3VzZXJzLW1hbmFnZW1lbnQvcm9sZS1tYW5hZ2VtZW50L3JvbGUtbWFuYWdlbWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRwdWxsLUw6IGxlZnQ7XG4kcHVsbC1SOiByaWdodDtcbiRwdWxsLW5vbmU6IG5vbmU7XG4kZnVsbC13aWR0aDogMTAwJTtcbiRib3JkZXItYm94OiBib3JkZXItYm94O1xuJGJvcmRlci1jb2xvcjogI2RlZWFlZTtcbiRiZy13aGl0ZTogI2ZmZjtcbiRlcnJvci1jb2xvcjogI2ZmMDAwMDtcbiRjb21tb24tYmx1ZTogIzAwODRmNjtcbiRwcmltYXJ5LWNvbG9yOiAjMzMzO1xuJGJvcmRlci1jb21tb246I2VhZWFlYjtcblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PWhlYWRlciBjb2xvcnM9PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiRoZWFkZXItYmc6IzAwNjBBMztcbiRoZWFkZXItYm9yZGVyOiNlYWVhZWI7XG4kbGVmdE1lbnVCZzojZmFmYWZhO1xuJGxlZnRNZW51SG92ZXJCZzojMDA4NGY2O1xuJGxlZnRNZW51VGV4dEhvdmVyQ29sb3I6I2ZmZjtcbiRyZWRCdG46I2Y0NDMzNjtcbiRib3JkZXJjY2M6I2NjYztcbiRsaWdodEJsdWU6I2VmZjdmZjtcbiR0YWJsZUhlYWRpbmdCZ0NvbG9yOiAjMDA0YTdlO1xuLnRhYmxlLWZvcm1hdC1maXJzdCB7XG4gICAgLnRhYmxlLXJlc3BvbnNpdmUge1xuICAgICAgICB0YWJsZSB7XG4gICAgICAgICAgICB0aCxcbiAgICAgICAgICAgIHRkIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aCB7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGJvZHkge1xuICAgICAgICAgICAgICAgIHRyIHtcbiAgICAgICAgICAgICAgICAgICAgdGQge1xuICAgICAgICAgICAgICAgICAgICAgICAgLmZpZWxkLWNoZWNrYm94LXdyYXBwZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaW5pdGlhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZvcm0tY2hlY2tib3gge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZm9ybS1jaGVja2JveCtsYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDdweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJjphZnRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5mYS10cmFzaC1vIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHJlZEJ0bjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi50YWJsZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIC5oZWFkaW5nLWNvbnRhaW5lciB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZTBlYWVjO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgICAgLmhlYWRpbmctaXRlbSB7XG4gICAgICAgIHdpZHRoOiAxMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICB9XG4gICAgLnZhbHVlLW91dGVyLWNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIG1pbi1oZWlnaHQ6IDUzdmg7XG4gICAgICBtYXgtaGVpZ2h0OiA1NHZoO1xuICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICAudmFsdWUtY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgcGFkZGluZzogNHB4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICAgICAgLnZhbHVlLWl0ZW0ge1xuICAgICAgICAgIHdpZHRoOiAxMCU7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IiwiQGltcG9ydCBcIi4vc3JjL2Fzc2V0cy9jc3MvY29tbW9uL3ZhcmlhYmxlcy5zY3NzXCI7XG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4ubWlkZGxlLXNlY3Rpb24ge1xuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcbn1cblxuLnJvdyB7XG4gICAgbWFyZ2luOiA1cHggMHB4O1xufVxuXG4uYnRuV3JhcHBlciB7XG4gICAgLmJ0biB7XG4gICAgICAgIC8vIHBhZGRpbmc6IDJweCAwcHggMHB4IDBweDtcbiAgICAgICAgLy8gYm9yZGVyOiBub25lO1xuICAgICAgICAvLyBoZWlnaHQ6IDM1cHg7XG4gICAgICAgIC8vIHdpZHRoOiAzNXB4O1xuICAgICAgICAvLyBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIC50b29sdGlwIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHRvcDogLTMwcHg7XG4gICAgICAgICAgICByaWdodDogLTMwcHg7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgcGFkZGluZzogNnB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjU0MSk7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB9XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDIxNiwgMjE0LCAyMTQpO1xuICAgICAgICAgICAgLnRvb2x0aXAge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICB0b3A6IC0yMHB4O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAxMjBweDtcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDZweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNTQxKTtcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAmOmFjdGl2ZSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLy8vLy8vLy8vLy8vL1BPUFVQIENTU1MvLy8vLy8vLy8vLy8vLy8vL1xuLyogcG9wVXAgU2NzcyAqL1xuXG4ucG9wdXBXcmFwcGVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvdHRvbTogMDtcbiAgICB0b3A6IDBweDtcbiAgICByaWdodDogMDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyMzAsIDIzMCwgMjMwLCAwLjUpO1xuICAgIHotaW5kZXg6IDEwMDsgLy8gZGlzcGxheTogbm9uZTtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbjtcbiAgICAucG9wdXAge1xuICAgICAgICBtYXgtd2lkdGg6IDY1JTsgLy8gbWF4LWhlaWdodDogMzUwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB0b3A6IDUlO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIG1hcmdpbjogYXV0bzsgLy8gdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIH1cbn1cblxuLnBvcHVwLXdyYXBwZXIge1xuICAgIHBhZGRpbmc6IDIwcHggMjBweDsgLy8gaGVpZ2h0OiAxMDAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm94LXNoYWRvdzogMXB4IDhweCAyMHB4IDVweCAjOWM5YzljO1xuICAgIHRyYW5zaXRpb246IHVuc2V0O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgaDIge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuICAgIGg0IHtcbiAgICAgICAgbWFyZ2luOiAyNXB4IDAgMTVweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG59XG5cbi5jbG9zZVBvcHVwIHtcbiAgICByaWdodDogMTBweDtcbiAgICB0b3A6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICB3aWR0aDogMjZweDtcbiAgICBoZWlnaHQ6IDI2cHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDNweDtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgICYuYm90dG9tUmlnaHQge1xuICAgICAgICBib3R0b206IDJweDtcbiAgICAgICAgdG9wOiBhdXRvO1xuICAgICAgICBsZWZ0OiBhdXRvO1xuICAgICAgICByaWdodDogMDtcbiAgICB9XG4gICAgJi50b3BMZWZ0IHtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICAgIHRvcDogMXB4O1xuICAgICAgICBib3R0b206IGF1dG87XG4gICAgfVxuICAgICYuYm90dG9tTGVmdCB7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgICBib3R0b206IDJweDtcbiAgICAgICAgdG9wOiBhdXRvO1xuICAgIH1cbiAgICBzdmcge1xuICAgICAgICB3aWR0aDogMTZweDtcbiAgICAgICAgLmNscy0xIHtcbiAgICAgICAgICAgIHN0cm9rZTogI2MxYzFjMTtcbiAgICAgICAgICAgIHN0cm9rZS13aWR0aDogMnB4O1xuICAgICAgICB9XG4gICAgfVxuICAgICY6aG92ZXIge1xuICAgICAgICAuY2xzLTEge1xuICAgICAgICAgICAgc3Ryb2tlOiAkY29tbW9uLWJsdWU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5wb3B1cC1jb250ZW50IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4uZmFkZUluIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PWNzcyBmb3IgbW9iIHBvcHVwXG4ucG9wdXBXcmFwcGVyTW9iIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvdHRvbTogMDtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgbGVmdDogMDtcbiAgICB6LWluZGV4OiAxMDA7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjsgLy8gb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbjtcbiAgICAuY2xvc2VQb3B1cCB7XG4gICAgICAgIHJpZ2h0OiAtMjVweDtcbiAgICAgICAgdG9wOiAtMjdweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxufVxuXG4ucG9wdXAtbW9iIHtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC1oZWlnaHQ6IDcwJTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgei1pbmRleDogMTtcbiAgICBib3R0b206IC03MCU7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbjtcbiAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbjtcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XG59XG5cbi5wb3B1cFdyYXBwZXJNb2Iuc2hvd1BvcHVwTW9iIHtcbiAgICB6LWluZGV4OiAxMDA7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4ucG9wdXBXcmFwcGVyTW9iLnNob3dQb3B1cE1vYiAucG9wdXAtbW9iIHtcbiAgICBib3R0b206IDA7XG59XG5cbi5zcGFuVGV4dCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLnJvbGVzLXRhYmxlLXdyYXBwZXIge1xuICAgIG1heC1oZWlnaHQ6IDM4NXB4O1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4uYWN0aW9uLW1lbnUge1xuICAgIGEge1xuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbn1cbi52YWx1ZS1vdXRlci1jb250YWluZXIge1xuICAgICAgICBtaW4taGVpZ2h0OiA1M3ZoICFpbXBvcnRhbnQ7XG4gICAgICAgIG1heC1oZWlnaHQ6IDUzdmggIWltcG9ydGFudDtcbn1cbi5oZWFkaW5nLWNvbnRhaW5lciwgLnZhbHVlLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xufVxuLmNvbW1vbi10YWIge1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgdWwge1xuICAgICAgICBmb250LXNpemU6IDA7XG4gICAgICAgIC8vIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjFmMWYxO1xuICAgICAgICBsaSB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDElO1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgd2lkdGg6IDklO1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAxNThweDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDZweCAyMHB4IDZweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDA4NGY2O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAkY29tbW9uLWJsdWU7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmOmhvdmVyLFxuICAgICAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkY29tbW9uLWJsdWU7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkYmctd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJGNvbW1vbi1ibHVlO1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuLnJvbGVwb3B1cCAudGFibGVfaGVhZGluZz5kaXZ7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAgLyA0KTtcbiAgfVxuICAucm9sZXBvcHVwIC50YWJsZV9ib2R5PmRpdntcbiAgICB3aWR0aDogY2FsYygxMDAlICAvIDQpO1xuICB9XG4gIC5yb2xlcG9wdXAgLnRhYmxlX2hlYWRpbmd7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICB9XG4gIC5tb2RhbC1kaWFsb2cge1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgd2lkdGg6IDU1MHB4O1xuICAgIG92ZXJmbG93LXg6IGF1dG87XG4gIH1cbiAgLm1vZGFsLWNvbnRlbnQge1xuICAgIHdpZHRoOiA1NTBweDtcbiAgfVxuICAudGFibGVfaGVhZGluZ3tcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVGMUY0O1xuICAgLyogcGFkZGluZzogMTBweCAwcHg7Ki9cbiAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICAgIG1hcmdpbjogMjBweCAwcHggMTBweCAwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgIGJveC1zaGFkb3c6IDBweCA3cHggNXB4IC0zcHggcmdiYSgwLDAsMCwwLjEpO1xuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggN3B4IDVweCAtM3B4IHJnYmEoMCwwLDAsMC4xKTtcbiAgICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDdweCA1cHggLTNweCByZ2JhKDAsMCwwLDAuMSk7XG4gIH1cbiAgLnRhYmxlX2hlYWRpbmc+ZGl2e1xuICBcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICMzMjNDNDc7XG4gIFxuICB9XG4gIFxuICAudGFibGVfYm9keXtcbiAgICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgYm94LXNoYWRvdzogMHB4IDdweCA1cHggLTNweCByZ2JhKDAsMCwwLDAuMSk7XG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA3cHggNXB4IC0zcHggcmdiYSgwLDAsMCwwLjEpO1xuICAgICAgLW1vei1ib3gtc2hhZG93OiAwcHggN3B4IDVweCAtM3B4IHJnYmEoMCwwLDAsMC4xKTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICB9XG4gIC50YWJsZV9ib2R5PmRpdntcbiAgICBcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgY29sb3I6ICM4MDdDN0M7XG4gICAgcGFkZGluZzogNXB4IDBweDtcbiAgICAgbWFyZ2luOiBhdXRvO1xuICBcbiAgfVxuICAubW9kYWwtdGl0bGUge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBmbG9hdDogbGVmdDtcbiAgfVxuICAubW9kYWwtaGVhZGVyIC5jbG9zZSB7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBtYXJnaW46IC0xcmVtIC0xcmVtIC0xcmVtIGF1dG87XG4gICAgOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgb3BhY2l0eTogLjc1O1xuICAgIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/users-management/role-management/role-management.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/components/users-management/role-management/role-management.component.ts ***!
  \******************************************************************************************/
/*! exports provided: RoleManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleManagementComponent", function() { return RoleManagementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_user_management_role_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/user-management/role.service */ "./src/app/services/user-management/role.service.ts");
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




let RoleManagementComponent = /** @class */ (() => {
    let RoleManagementComponent = class RoleManagementComponent {
        constructor(apiService, toastCtrl, router) {
            this.apiService = apiService;
            this.toastCtrl = toastCtrl;
            this.router = router;
            this.rolesList = [];
            this.userList = [];
            this.showUserListPopUp = false;
            this.rolesListDataSource = [];
            this.PageIndex = 1;
            this.displayBatchSize = 10;
            this.searchDataFlag = false;
            this.totalRow = 0;
            this.searchedData = [];
            this.toottip = "We can customize roles by defining multiple activities to a user";
            this.sizeArr = [25, 50, 100, 150, 200, 500, 1000];
        }
        ngOnInit() {
            this.checkWhichTabIsOpen();
            this.getRolesList();
        }
        checkWhichTabIsOpen() {
            let url = this.router.url;
            if (url.includes('user')) {
                this.switchActiveView('liUser');
            }
            else {
                this.switchActiveView('liRole');
            }
        }
        switchActiveView(id) {
            document.getElementById('liUser').classList.remove('active');
            document.getElementById('liRole').classList.remove('active');
            document.getElementById(id).classList.add('active');
        }
        getRolesList() {
            this.PageIndex = 1;
            this.apiService.getRoles().subscribe((res) => {
                this.rolesListDataSource = res;
                this.totalRow = res.length;
                this.fetchTableDataByPage(this.PageIndex);
            }, err => {
                console.log(err);
            });
        }
        deleteRole(data) {
            if (confirm('Are you sure, you want to delete the role?')) {
                this.apiService.deleteRole(data.role_id).subscribe(res => {
                    this.messageNotifier('success', '', 'Role deleted successfully');
                    this.getRolesList();
                }, err => {
                    //console.log(err);
                    this.messageNotifier('error', '', err.error.message);
                });
            }
        }
        showAssignedUserList(data) {
            if (data.total_user_count > 0) {
                this.apiService.getAssignedUserList(data.role_id).subscribe(res => {
                    this.showUserListPopUp = true;
                    $('#myModal').modal('show');
                    this.userList = res;
                }, err => {
                    //console.log(err);
                    this.messageNotifier('error', '', err.error.message);
                });
            }
            else {
                this.messageNotifier('error', '', 'No user is assigned to this role');
            }
        }
        closePopUp() {
            this.showUserListPopUp = false;
            this.userList = [];
        }
        // pagination functions 
        fetchTableDataByPage(index) {
            this.PageIndex = index;
            let startindex = this.displayBatchSize * (index - 1);
            this.rolesList = this.getDataFromDataSource(startindex);
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
        updateTableBatchSize(event) {
            this.displayBatchSize = event;
            this.fetchTableDataByPage(this.PageIndex);
        }
        getDataFromDataSource(startindex) {
            let data = [];
            if (this.searchDataFlag == true) {
                data = this.searchedData.slice(startindex, startindex + this.displayBatchSize);
            }
            else {
                data = this.rolesListDataSource.slice(startindex, startindex + this.displayBatchSize);
            }
            return data;
        }
        messageNotifier(type, title, msg) {
            let data = {
                type: type,
                title: title,
                body: msg
            };
            this.toastCtrl.popToast(data);
        }
    };
    RoleManagementComponent.ctorParameters = () => [
        { type: _services_user_management_role_service__WEBPACK_IMPORTED_MODULE_3__["RoleService"] },
        { type: _app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ];
    RoleManagementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-role-management',
            template: __importDefault(__webpack_require__(/*! raw-loader!./role-management.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/users-management/role-management/role-management.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./role-management.component.scss */ "./src/app/components/users-management/role-management/role-management.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_services_user_management_role_service__WEBPACK_IMPORTED_MODULE_3__["RoleService"],
            _app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RoleManagementComponent);
    return RoleManagementComponent;
})();



/***/ }),

/***/ "./src/app/components/users-management/role-management/role-management.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/users-management/role-management/role-management.module.ts ***!
  \***************************************************************************************/
/*! exports provided: RoleManagementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleManagementModule", function() { return RoleManagementModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/components/shared/shared.module.ts");
/* harmony import */ var _role_management_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./role-management.component */ "./src/app/components/users-management/role-management/role-management.component.ts");
/* harmony import */ var _role_management_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./role-management.routing */ "./src/app/components/users-management/role-management/role-management.routing.ts");
/* harmony import */ var _services_user_management_role_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/user-management/role.service */ "./src/app/services/user-management/role.service.ts");
/* harmony import */ var _add_edit_role_add_edit_role_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-edit-role/add-edit-role.component */ "./src/app/components/users-management/role-management/add-edit-role/add-edit-role.component.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/authenticator.service */ "./src/app/services/authenticator.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';







let RoleManagementModule = /** @class */ (() => {
    let RoleManagementModule = class RoleManagementModule {
    };
    RoleManagementModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _role_management_component__WEBPACK_IMPORTED_MODULE_4__["RoleManagementComponent"],
                _add_edit_role_add_edit_role_component__WEBPACK_IMPORTED_MODULE_7__["AddEditRoleComponent"]
            ],
            exports: [],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                // BsDatepickerModule,
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _role_management_routing__WEBPACK_IMPORTED_MODULE_5__["RoleManagementRouting"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_8__["PickListModule"]
            ],
            providers: [
                _services_user_management_role_service__WEBPACK_IMPORTED_MODULE_6__["RoleService"],
                _services_authenticator_service__WEBPACK_IMPORTED_MODULE_9__["AuthenticatorService"]
            ]
        })
    ], RoleManagementModule);
    return RoleManagementModule;
})();



/***/ }),

/***/ "./src/app/components/users-management/role-management/role-management.routing.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/components/users-management/role-management/role-management.routing.ts ***!
  \****************************************************************************************/
/*! exports provided: RoleManagementRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleManagementRouting", function() { return RoleManagementRouting; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _role_management_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./role-management.component */ "./src/app/components/users-management/role-management/role-management.component.ts");
/* harmony import */ var _add_edit_role_add_edit_role_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-edit-role/add-edit-role.component */ "./src/app/components/users-management/role-management/add-edit-role/add-edit-role.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let RoleManagementRouting = /** @class */ (() => {
    let RoleManagementRouting = class RoleManagementRouting {
    };
    RoleManagementRouting = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _role_management_component__WEBPACK_IMPORTED_MODULE_2__["RoleManagementComponent"],
                        pathMatch: 'prefix',
                    },
                    {
                        path: 'addedit',
                        component: _add_edit_role_add_edit_role_component__WEBPACK_IMPORTED_MODULE_3__["AddEditRoleComponent"]
                    },
                    {
                        path: 'addedit/:id',
                        component: _add_edit_role_add_edit_role_component__WEBPACK_IMPORTED_MODULE_3__["AddEditRoleComponent"]
                    }
                ])
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], RoleManagementRouting);
    return RoleManagementRouting;
})();



/***/ })

}]);
//# sourceMappingURL=app-components-users-management-role-management-role-management-module-es2015.js.map