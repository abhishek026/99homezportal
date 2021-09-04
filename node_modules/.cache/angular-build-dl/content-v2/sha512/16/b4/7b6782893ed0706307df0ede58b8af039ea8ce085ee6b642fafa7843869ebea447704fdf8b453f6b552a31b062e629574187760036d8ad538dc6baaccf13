(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-components-course-module-create-course-course-home-course-home-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/create-course/course-home/schedule-home.component.html":
    /*!***************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/create-course/course-home/schedule-home.component.html ***!
      \***************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsCourseModuleCreateCourseCourseHomeScheduleHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"oldUI\">\n<section *ngIf=\"isLangInstitue\" style=\"margin-top: 10px; margin-bottom: 10px;\">\n    <div class=\"c-sm-2 c-xs-2 c-lg-2 c-md-2\">\n        <div class=\"field-radio-wrapper\">\n            <input class=\"form-radio\" type=\"radio\" name=\"isActive\" [(ngModel)]=\"activeList\" [value]=\"false\" id='Active'\n                (ngModelChange)=\"getAllStandardList()\">\n            <label for=\"Active\" style=\"font-weight: 100;\">Active</label>\n        </div>\n    </div>\n    <div class=\"c-sm-2 c-xs-2 c-lg-2 c-md-2\">\n        <div class=\"field-radio-wrapper\">\n            <input class=\"form-radio\" type=\"radio\" name=\"isActive\" [(ngModel)]=\"activeList\" [value]=\"true\" id='InActive'\n                (ngModelChange)=\"getAllStandardList()\">\n            <label for=\"InActive\" style=\"font-weight: 100;\">In Active</label>\n        </div>\n    </div>\n    <div class=\"c-sm-2 c-xs-2 c-lg-2 c-md-2\"></div>\n    <div class=\"c-lg-6 c-md-6 c-sm-6\" style=\"float: right;margin-right: 1%;width: 33%;\">\n        <input type=\"text\" class=\"searchBox\" style=\"margin-right: 10px;\" placeholder=\"Search\" name=\"searchData\" #searchVal\n            (keyup)=\"searchInList(searchVal)\">\n        <button class=\"btn\" *ngIf=\"(isLangInstitue != true )\" (click)=\"toggleCreateNewStandard()\"\n            value=\"Add Standard\">Add Standard</button>\n\n        <button class=\"btn\" *ngIf=\"(isLangInstitue == true )\" (click)=\"toggleCreateNewStandard()\"\n            value=\"Add Master Course\">Add Master Course</button>\n    </div>\n</section>\n\n <section *ngIf=\"isLangInstitue\">\n    <div>\n        <div>\n            <section class=\"clearFix create-standard-form\" *ngIf=\"createNewStandard\">\n                <div class=\"c-lg-6 c-sm-6 c-md-6\">\n                    <div class=\"row create-standard-field\">\n                        <div class=\"c-lg-8 c-md-6 c-ms-6\">\n                            <div class=\"field-wrapper\">\n                                <label (click)=\"clickSN()\" *ngIf=\"(isLangInstitue != true)\" for=\"StdName\">Standard Name\n                                    <span class=\"text-danger\">*</span>\n                                </label>\n                                <label (click)=\"clickSN()\" *ngIf=\"(isLangInstitue == true)\" for=\"StdName\">Master Course\n                                    Name\n                                    <span class=\"text-danger\">*</span>\n                                </label>\n                                <input type=\"text\" class=\"form-ctrl\" [(ngModel)]=\"newStandardDetails.standard_name\"\n                                    name=\"standard_name\" id=\"StdName\" #standard_name=\"ngModel\" required courseInput>\n\n\n                                <div *ngIf=\"standard_name.invalid && (standard_name.dirty || standard_name.touched)\"\n                                    class=\"alert invalid-alert\">\n                                    <div *ngIf=\"standard_name.errors.required\">\n                                        <span *ngIf=\"(isLangInstitue != true)\">Please enter valid Standard Name</span>\n                                        <span *ngIf=\"(isLangInstitue == true)\">Please enter valid Master Course</span>\n                                    </div>\n                                </div>\n                            </div>\n                            <p>* Example X XII, B.Com</p>\n                        </div>\n                        <div class=\"c-lg-4 c-md-4 c-ms-4\" style=\"padding-top:10px\">\n                            <div class=\"field-checkbox-wrapper\">\n\n                                <input type=\"checkbox\" name=\"check\" class=\"form-checkbox\"\n                                    [(ngModel)]=\"newStandardDetails.is_active\" id=\"isAct\">\n                                <label for=\"isAct\">Is Active</label>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"c-lg-3 c-sm-4 c-md-4\">\n                    <aside class=\"\" style=\"padding-top: 20px\">\n                        <input type=\"button\" value=\"Create\" class=\"btn fullBlue\" (click)=\"addNewStandard()\">\n                        <input type=\"button\" value=\"Cancel\" class=\"btn cancel-btn\" (click)=\"toggleCreateNewStandard()\">\n                    </aside>\n                </div>\n            </section>\n            <div style=\"margin-top: 13px;\">\n                <div>\n                    <table class=\"tableBodyScroll\">\n                        <thead>\n                            <tr>\n                                <th>\n                                    <label>ID</label>\n                                </th>\n                                <th style=\"width: 32%;\">\n                                    <label *ngIf=\"(isLangInstitue != true)\">Standard</label>\n                                    <label *ngIf=\"(isLangInstitue == true)\">Master Course</label>\n                                </th>\n                                <th>\n                                    <label style=\"padding-left: 3px;\">Is\n                                        Active</label>\n                                </th>\n                                <th style=\"padding-left: 3px;\">\n                                    <i *ngIf=\"sortingDir == 'asc'\" (click)=\"sortTable('created_date')\"\n                                        class=\"fas fa-caret-up\" style=\"font-family: FontAwesome;\"></i>\n                                    <i *ngIf=\"sortingDir != 'asc'\" (click)=\"sortTable('created_date')\"\n                                        class=\"fas fa-caret-down\" style=\"font-family: FontAwesome;\"></i>\n                                    <label style=\"cursor:pointer;\" (click)=\"sortTable('created_date')\">Added\n                                        Date</label>\n                                </th>\n                                <th>\n                                    <label>Action</label>\n                                </th>\n                            </tr>\n                        </thead>\n                        <tbody *ngIf=\"( standardList.length != 0)\"\n                            [ngStyle]=\"{'max-height':createNewStandard == true ? '40vh' : '57vh','min-height':createNewStandard == true ? '40vh' : '57vh' }\">\n\n                            <tr (click)=\"rowClickEvent(i)\" class=\"displayComp\" id=\"row{{i}}\"\n                                *ngFor=\"let row of standardList; let i = index; trackBy: i;\"\n                                [class.selected]=\"i == selectedRow\">\n                                <td>\n                                    {{row.standard_id}}\n                                </td>\n\n                                <td class=\"view-comp\" style=\"width: 32%;\">\n                                    {{row.standard_name}}\n                                </td>\n                                <td class=\"edit-comp\" style=\"width: 32%;\">\n                                    <div class=\"field-wrapper\">\n                                        <input type=\"text\" class=\"form-ctrl\" [(ngModel)]=\"row.standard_name\"\n                                            name=\"label\" style=\"width:100%;text-align: left;\">\n                                    </div>\n                                </td>\n\n                                <td class=\"view-comp\">\n                                    {{row.is_active}}\n                                </td>\n                                <td class=\"edit-comp\">\n                                    <div class=\"field-wrapper has-value\">\n                                        <select id=\"issearchable\" class=\"form-ctrl\" name=\"issearchable\"\n                                            [(ngModel)]=\"row.is_active\">\n                                            <option value=\"Y\">Yes</option>\n                                            <option value=\"N\">No</option>\n                                        </select>\n                                    </div>\n                                </td>\n\n                                <td>\n                                    {{row.created_date | date: 'dd-MMM-yy'}}\n                                </td>\n\n                                <td class=\"view-comp\">\n                                    <i class=\"fa fa-pencil\" aria-hidden=\"true\"\n                                        style=\"cursor: pointer;color:#0084f6;    font-size: 14px;\" (click)=\"editRow(i)\"\n                                        title=\"Edit\"></i>\n                                    <i class=\"fa fa-trash\"\n                                        style=\"cursor: pointer;color: red;font-size: 14px;margin-left: 8px;\"\n                                        (click)=\"deleteRow(row)\" aria-hidden=\"true\" title=\"Delete\"></i>\n                                </td>\n                                <td class=\"edit-comp\">\n                                    <i class=\"fa fa-floppy-o\"\n                                        style=\"cursor: pointer;margin-right: 10px; font-size: 14px;color: green;\"\n                                        (click)=\"updateRow(row,i)\" title=\"Save\" aria-hidden=\"true\"></i>\n                                    <i class=\"fa fa-times\" style=\"cursor: pointer;font-size: 14px;color: red;\"\n                                        (click)=\"cancelRow(i)\" title=\"Cancel\" aria-hidden=\"true\"></i>\n                                </td>\n                            </tr>\n                        </tbody>\n                        <tbody *ngIf=\"standardList.length == 0 && dataStatus === 1\">\n                            <tr *ngFor=\"let dummy of dummyArr\">\n                                <td *ngFor=\"let c of columnMaps\">\n                                    <div class=\"skeleton\">\n                                    </div>\n                                </td>\n                            </tr>\n                        </tbody>\n                        <tbody *ngIf=\"standardList.length == 0 && dataStatus === 2\">\n                            <tr>\n                                <td colspan=\"5\" style=\"text-align:center\">\n                                    No data found\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n            <div class=\"row filter-res pagination pagination-correct\" style=\"width: 100%;\">\n                <div class=\"c-lg-12 c-md-12 c-sm-12 align-right\">\n                    <pagination (goPage)=\"fetchTableDataByPage($event)\" (goNext)=\"fetchNext()\"\n                        (goPrev)=\"fetchPrevious()\" [pagesToShow]=\"10\" [page]=\"PageIndex\" [perPage]=\"displayBatchSize\"\n                        [count]=\"totalRow\" [sizeArr]=\"sizeArr\" (sizeChange)=\"updateTableBatchSize($event)\">\n                    </pagination>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n</div>\n\n\n<div id=\"two\" class=\"tab-pane active\" *ngIf=\"!isLangInstitue\">\n             \n    <div class=\"display space16\">\n       <div class=\"flexc\">\n         <div>\n           <label class=\"checkbox\">\n             <span class=\"checkbox__input\">\n               <input type=\"checkbox\" [(ngModel)]=\"activeList\" id='Active'\n               (ngModelChange)=\"getAllStandardList()\" name=\"checked\">\n               <span class=\"checkbox__control\">\n                <svg viewBox='0 0 24 24' aria-hidden=\"true\" focusable=\"false\">\n                   <path fill='none' stroke='currentColor'  d='M1.3 12.91l6.37 6.37L22.79 4.59' /></svg>\n               </span>\n             </span>\n           </label>\n         </div>\n         <div>\n           <label class=\"labelactive\">Is&nbsp;Active</label>\n         </div>\n       </div>\n       <div>\n         <input type=\"text\" class=\"mr10 input search\" placeholder=\"Search\" name=\"searchData\" #searchVal\n         (keyup)=\"searchInList(searchVal)\">\n         <button class=\"blue_button buttonshadow\" data-toggle=\"modal\" data-target=\"#standardModal\"> {{(isLangInstitue != true ) ? 'Add Standard' : 'Add Master Course'}}</button>\n       </div>\n    </div>\n    <br>\n    <div class=\"standard\">\n      <div class=\"table_head\">\n        <div>ID</div>\n        <div>{{(isLangInstitue != true ) ? 'Standard' : 'Master Course'}}</div>\n        <div>Added Date</div>\n        <div>Actions</div>\n      </div>\n       <div class=\"scroll\">\n          <div class=\"table_body\" *ngFor=\"let row of standardList\">\n            <div>{{row.standard_id}}</div>\n            <div>{{row.standard_name}}</div>\n            <div>{{row.created_date | date: 'dd-MMM-yy'}}</div>\n            <div class=\"actionImg\">\n               <img src=\"../../../assets/img2/edit.svg\" (click)=\"editRow(row)\" class=\"mr10 table_action\" >\n               <img src=\"../../../assets/img2/delete.svg\" (click)=\"deleteRow(row)\" class=\"table_action\">\n            </div>\n          </div>\n       </div>\n\n    </div>\n    <!-- Paginator Here -->\n    <div class=\"row filter-res pagination pagination-correct\" style=\"width: 100%;\">\n        <div class=\"c-lg-12 c-md-12 c-sm-12 align-right\">\n            <pagination (goPage)=\"fetchTableDataByPage($event)\" (goNext)=\"fetchNext()\"\n                (goPrev)=\"fetchPrevious()\" [pagesToShow]=\"10\" [page]=\"PageIndex\" [perPage]=\"displayBatchSize\"\n                [count]=\"totalRow\" [sizeArr]=\"sizeArr\" (sizeChange)=\"updateTableBatchSize($event)\">\n            </pagination>\n        </div>\n    </div>\n    <div class=\"modal fade\" id=\"standardModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\" data-backdrop=\"static\">\n       <div class=\"modal-dialog\" role=\"document\">\n         <div class=\"modal-content\">\n           <div class=\"modal-header\">\n             <h5 class=\"modal-title\" style=\"float: left;\" id=\"exampleModalLabel\">{{isEdit ? 'Update' : 'Add'}} {{(isLangInstitue != true ) ? 'Standard' : 'Master Course'}}</h5>\n             <button type=\"button\" style=\"float: right;\" class=\"close\" (click)=\"closePopup()\" aria-label=\"Close\">\n               <span aria-hidden=\"true\">&times;</span>\n             </button>\n           </div>\n           <div class=\"modal-body\">\n           <div>\n             <p>{{(isLangInstitue != true ) ? 'Standard' : 'Master Course'}} Name <span class=\"red\">*</span></p>\n             <input type=\"text\" placeholder=\"{{(isLangInstitue != true ) ? 'Add Standard' : 'Add Master Course'}} \" [(ngModel)]=\"newStandardDetails.standard_name\" name=\"standard_name\" class=\"input\">\n            <div class=\"display\">\n             <div></div>\n             <div> <span class=\"info\">* Example X XII, B.Com</span></div>\n            </div>\n           </div>\n           <div class=\"flexc\" *ngIf=\"isEdit\">\n            <div>\n              <label class=\"checkbox\">\n                <span class=\"checkbox__input\">\n                  <input type=\"checkbox\" [(ngModel)]=\"newStandardDetails.is_active\" id='is_active' name=\"is_active\">\n                  <span class=\"checkbox__control\">\n                   <svg viewBox='0 0 24 24' aria-hidden=\"true\" focusable=\"false\">\n                      <path fill='none' stroke='currentColor'  d='M1.3 12.91l6.37 6.37L22.79 4.59' /></svg>\n                  </span>\n                </span>\n              </label>\n            </div>\n            <div>\n              <label class=\"labelactive\">Is&nbsp;Active</label>\n            </div>\n          </div>\n           </div>\n           <div class=\"modal-footer\">\n             <button type=\"button\" class=\"white_button\" (click)=\"closePopup()\">Close</button>\n             <button type=\"button\" class=\"blue_button\" (click)=\"saveStandard()\">{{isEdit ? 'Save' : 'Create'}}</button>\n           </div>\n         </div>\n       </div>\n     </div>\n </div>";
      /***/
    },

    /***/
    "./src/app/components/course-module/create-course/course-home/course-home.module.ts":
    /*!******************************************************************************************!*\
      !*** ./src/app/components/course-module/create-course/course-home/course-home.module.ts ***!
      \******************************************************************************************/

    /*! exports provided: CourseHomeModule */

    /***/
    function srcAppComponentsCourseModuleCreateCourseCourseHomeCourseHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CourseHomeModule", function () {
        return CourseHomeModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../shared/shared.module */
      "./src/app/components/shared/shared.module.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _schedule_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./schedule-home.component */
      "./src/app/components/course-module/create-course/course-home/schedule-home.component.ts");
      /* harmony import */


      var _services_course_services_standard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../services/course-services/standard.service */
      "./src/app/services/course-services/standard.service.ts");
      /* harmony import */


      var _course_home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./course-home.routing.module */
      "./src/app/components/course-module/create-course/course-home/course-home.routing.module.ts");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      }; // import {BsDatepickerConfig, BsDatepickerModule} from 'ngx-bootstrap/datepicker';


      var CourseHomeModule =
      /** @class */
      function () {
        var CourseHomeModule = function CourseHomeModule() {
          _classCallCheck(this, CourseHomeModule);
        };

        CourseHomeModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
          imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], // BsDatepickerModule,
          _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _course_home_routing_module__WEBPACK_IMPORTED_MODULE_6__["CourseHomeRouting"]],
          exports: [],
          declarations: [_schedule_home_component__WEBPACK_IMPORTED_MODULE_4__["ScheduleHomeComponent"]],
          providers: [_services_course_services_standard_service__WEBPACK_IMPORTED_MODULE_5__["StandardServices"]]
        })], CourseHomeModule);
        return CourseHomeModule;
      }();
      /***/

    },

    /***/
    "./src/app/components/course-module/create-course/course-home/course-home.routing.module.ts":
    /*!**************************************************************************************************!*\
      !*** ./src/app/components/course-module/create-course/course-home/course-home.routing.module.ts ***!
      \**************************************************************************************************/

    /*! exports provided: CourseHomeRouting */

    /***/
    function srcAppComponentsCourseModuleCreateCourseCourseHomeCourseHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CourseHomeRouting", function () {
        return CourseHomeRouting;
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


      var _schedule_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./schedule-home.component */
      "./src/app/components/course-module/create-course/course-home/schedule-home.component.ts");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var CourseHomeRouting =
      /** @class */
      function () {
        var CourseHomeRouting = function CourseHomeRouting() {
          _classCallCheck(this, CourseHomeRouting);
        };

        CourseHomeRouting = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
            path: '',
            component: _schedule_home_component__WEBPACK_IMPORTED_MODULE_2__["ScheduleHomeComponent"],
            pathMatch: 'prefix'
          }])],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })], CourseHomeRouting);
        return CourseHomeRouting;
      }();
      /***/

    },

    /***/
    "./src/app/components/course-module/create-course/course-home/schedule-home.component.scss":
    /*!*************************************************************************************************!*\
      !*** ./src/app/components/course-module/create-course/course-home/schedule-home.component.scss ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsCourseModuleCreateCourseCourseHomeScheduleHomeComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@charset \"UTF-8\";\n* {\n  margin: 0px;\n}\nbody {\n  font-family: 'Open Sans', sans-serif;\n}\n.flex {\n  display: flex;\n}\n.flexc {\n  display: flex;\n  align-items: center;\n}\n.display {\n  display: flex;\n  justify-content: space-between;\n}\n.blue_button {\n  background-color: #109CF1;\n  color: #fff;\n  padding: 9px 20px;\n  font-size: 12px;\n  border: none;\n  border-radius: 5px;\n  font-weight: 500;\n  cursor: pointer;\n  height: 35px;\n}\n.white_button {\n  background-color: #fff;\n  color: #109CF1;\n  padding: 8px 20px;\n  font-size: 12px;\n  border: 1px solid #109CF1;\n  border-radius: 5px;\n  font-weight: 500;\n  cursor: pointer;\n  height: 35px;\n  margin-right: 10px;\n}\n.buttonshadow {\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);\n}\ninput:focus,\nselect:focus,\nbutton:focus {\n  outline: none;\n}\n.head_padding {\n  padding: 15px 0px;\n}\n.main-shadow {\n  border-bottom: 1px solid #EFF0F5;\n  /*box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.02);*/\n  padding-bottom: 15px;\n}\n.w98 {\n  width: 96%;\n  margin: 0px auto;\n}\n.mr10 {\n  margin-right: 10px;\n}\n.page-content {\n  background: #F5F5F5;\n  height: calc(100vh - 60px);\n  padding-top: 16px;\n}\n/*54.2 subtract the size of header*/\n/*switching tabs*/\n.nav-item .nav-link {\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n  letter-spacing: 0.01em;\n  color: #1A2334;\n  padding-bottom: 8px;\n  cursor: pointer;\n}\n.nav-item .nav-link.active {\n  font-weight: 700;\n  border-bottom: 3px solid #109CF1 !important;\n  color: #109CF1 !important;\n}\n.nav-link {\n  display: block;\n  padding: 1.5rem 0rem;\n  margin-right: 1rem;\n  margin: -1rem 2.5rem;\n  margin-left: 0rem;\n}\n.nav > li {\n  display: inline;\n}\n.nav-link:hover,\n.nav-link,\n.nav-link:focus {\n  background-color: transparent;\n}\n.nav-link {\n  display: inline;\n}\n.nav-item .active {\n  border-bottom: 3px solid #109cf1 !important;\n  color: #109cf1 !important;\n}\n.list > li {\n  background-color: #fff;\n  padding: 7px 0px;\n  margin: 7px 0px;\n}\n.list > li > a > span {\n  text-decoration: none;\n  font-size: 10px;\n  font-weight: 500;\n  color: #334D6E;\n}\n.list > li img {\n  padding: 0px 10px;\n}\n/*standard*/\n.checkbox {\n  display: grid;\n  grid-template-columns: -webkit-min-content auto;\n  grid-template-columns: min-content auto;\n  grid-gap: 0.5em;\n  font-size: 2rem;\n  color: var(--color);\n}\n.checkbox__input input {\n  opacity: 0;\n  width: 0em;\n  height: 0em;\n}\n.checkbox__control {\n  display: inline-grid;\n  width: 0.5em;\n  height: 0.5em;\n  border-radius: 0.1em;\n  border: 1px solid #BBB2B2;\n}\n.checkbox__input {\n  display: grid;\n  grid-template-areas: \"checkbox\";\n}\n.checkbox__control svg {\n  color: #fff;\n  transition: transform 0.1s ease-in 25ms;\n  transform: scale(0);\n  stroke-width: 4;\n  margin: 2px;\n  transform-origin: bottom left;\n}\n.checkbox__input input:checked + .checkbox__control svg {\n  transform: scale(1);\n}\n.checkbox__input input:checked + .checkbox__control {\n  background: #109CF1;\n  border-radius: 3px;\n  border: 1px solid #109CF1;\n}\n.labelactive {\n  font-weight: normal;\n  font-size: 13px;\n  /* identical to box height */\n  letter-spacing: 0.01em;\n  margin-left: -10px;\n  color: #334D6E;\n}\n.input {\n  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.1);\n  background: #FFFFFF;\n  border-radius: 5px;\n  height: 35px;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 16px;\n  /* identical to box height */\n  border: none;\n  outline: none;\n  letter-spacing: 0.01em;\n  text-indent: 10px;\n  color: #1A2334;\n}\n.search {\n  width: 260px;\n  background-position: 94% center;\n}\n.table_head {\n  background: #EFF0F5;\n  border-radius: 2px;\n  height: 50px;\n  display: flex;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 50px;\n  /* identical to box height */\n  letter-spacing: 0.01em;\n  /* table_black */\n  color: #323C47;\n}\n.table_body {\n  display: flex;\n  font-weight: normal;\n  font-size: 12px;\n  min-height: 50px;\n  letter-spacing: 0.01em;\n  border-bottom: 1px solid #EFF0F5;\n  background: #fff;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.02);\n  color: #323C47;\n  padding: 16px 0px;\n}\n.table_head > div,\n.table_body > div {\n  padding-left: 20px;\n}\n.standard .table_head > div:first-child,\n.standard .table_body > div:first-child {\n  width: 10%;\n}\n.standard .table_head > div:nth-child(2),\n.standard .table_body > div:nth-child(2) {\n  width: 24%;\n}\n.standard .table_head > div:last-child,\n.standard .table_body > div:last-child {\n  width: 90px;\n}\n.standard .table_body > div:last-child {\n  justify-content: center;\n  display: flex;\n}\n.standard .table_head > div:nth-child(3),\n.standard .table_body > div:nth-child(3) {\n  width: calc((100% - 34%) - 90px);\n}\n.scroll {\n  height: calc(100vh - (60px + 16px + 36px + 15px + 32px + 36px + 50px + 42px ));\n  overflow-y: auto;\n  background-color: #fff;\n}\n.scroll::-webkit-scrollbar {\n  width: 10px;\n}\n/* Track */\n.scroll::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n/* Handle */\n.scroll::-webkit-scrollbar-thumb {\n  background: #109CF173;\n}\n/* Handle on hover */\n.scroll::-webkit-scrollbar-thumb:hover {\n  background: #555;\n}\n.table_action {\n  cursor: pointer;\n}\n.pagignation {\n  display: flex;\n  justify-content: space-between;\n  font-weight: 400;\n  font-size: 13px;\n  padding: 16px 0px;\n  /* identical to box height, or 154% */\n  letter-spacing: 0.01em;\n  width: 100%;\n  /*subtract width of sidebar*/\n  color: #000000;\n}\n.pagignation > div:first-child {\n  width: 40%;\n}\n.pagignation select {\n  background: #FFFFFF;\n  border: 1px solid #D5D0D0;\n  box-sizing: border-box;\n  border-radius: 4px;\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 20px;\n  /*width: 63px;*/\n  /*height: 35px;*/\n  /* identical to box height, or 154% */\n  letter-spacing: 0.01em;\n  color: #0079FF;\n  cursor: pointer;\n}\n.selected_no {\n  font-weight: 400;\n  font-size: 13px;\n  padding: 0px 4px;\n  line-height: 20px;\n  border-radius: 50%;\n  /* identical to box height, or 154% */\n  background: #0079FF;\n  letter-spacing: 0.01em;\n  margin-left: 20px;\n  color: #FFFFFF;\n}\n.click {\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 20px;\n  /* identical to box height, or 154% */\n  margin-left: 10px;\n  letter-spacing: 0.01em;\n  cursor: pointer;\n  color: #0079FF;\n}\n.pagignation p span {\n  cursor: pointer;\n  margin-left: 10px;\n}\n.pagignation p {\n  margin-bottom: 0px;\n}\n.modal-title {\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n  letter-spacing: 0.01em;\n  color: #334D6E;\n}\n.modal p {\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 16px;\n  letter-spacing: 0.01em;\n  color: #334D6E;\n  margin-bottom: 10px;\n}\n.modal input {\n  background: #FFFFFF;\n  border: 1px solid #C4CACE;\n  box-sizing: border-box;\n  border-radius: 5px;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 16px;\n  letter-spacing: 0.01em;\n  width: 100%;\n  /* table_black */\n  color: #323C47;\n}\n.modal input:placeholder {\n  color: #8e939a;\n}\n@media (min-width: 576px) {\n  .modal-dialog {\n    max-width: 300px;\n  }\n}\n.modal .info {\n  font-weight: normal;\n  font-size: 8px;\n  line-height: 11px;\n  /* identical to box height */\n  letter-spacing: 0.01em;\n  margin-top: 10px;\n  /* table_black */\n  color: #323C47;\n}\n.red {\n  color: #E51515;\n}\n/*subject*/\n.subject .table_head > div,\n.subject .table_body > div {\n  width: calc(((100% - 35%) - 90px) / 2);\n}\n.subject .table_head > div:first-child,\n.subject .table_body > div:first-child,\n.subject .table_head > div:nth-child(5),\n.subject .table_body > div:nth-child(5) {\n  width: 10%;\n}\n.subject .table_head > div:nth-child(4),\n.subject .table_body > div:nth-child(4) {\n  width: 15%;\n}\n.subject .table_head > div:last-child,\n.subject .table_body > div:last-child {\n  width: 90px;\n}\n.subject .table_body > div:last-child {\n  justify-content: center;\n  display: flex;\n}\n.space16 {\n  margin-top: 16px;\n}\n.modal-dialog {\n  margin: 5% auto;\n}\n.actionImg img {\n  height: 20px;\n  width: 18px;\n}\n.oldUI {\n  /* ===============================header colors=======================*/\n}\n.oldUI .table-format-first .table-responsive table th,\n.oldUI .table-format-first .table-responsive table td {\n  text-align: center;\n  padding: 10px 5px;\n}\n.oldUI .table-format-first .table-responsive table th {\n  text-transform: capitalize;\n  font-size: 14px;\n}\n.oldUI .table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper {\n  display: inline-block;\n  overflow: initial;\n  margin-left: 0;\n  width: auto;\n  position: relative;\n  background: transparent;\n}\n.oldUI .table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox {\n  z-index: 2;\n}\n.oldUI .table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label {\n  font-size: 16px;\n  margin-left: 7px;\n  font-weight: 600;\n  vertical-align: middle;\n}\n.oldUI .table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:after, .oldUI .table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:before {\n  z-index: 1;\n}\n.oldUI .table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper:after {\n  content: '';\n  width: 20px;\n  height: 20px;\n  background: #fff;\n  left: 0;\n  top: 0;\n  position: absolute;\n}\n.oldUI .table-format-first .table-responsive table tbody tr td .fa-trash-o {\n  color: #f44336;\n  font-size: 20px;\n}\n.oldUI .table-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-top: 10px;\n}\n.oldUI .table-container .heading-container {\n  background: #e0eaec;\n  display: flex;\n  flex-direction: row;\n  font-size: 14px;\n  font-weight: 600;\n  text-align: left;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n}\n.oldUI .table-container .heading-container .heading-item {\n  width: 10%;\n  text-align: center;\n}\n.oldUI .table-container .value-outer-container {\n  display: flex;\n  flex-direction: column;\n  min-height: 53vh;\n  max-height: 54vh;\n  overflow-x: hidden;\n  overflow-y: auto;\n  border: 1px solid #ccc;\n}\n.oldUI .table-container .value-outer-container .value-container {\n  display: flex;\n  flex-direction: row;\n  text-align: left;\n  padding: 4px;\n  font-size: 12px;\n  border-bottom: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n  border-top: none;\n}\n.oldUI .table-container .value-outer-container .value-container .value-item {\n  width: 10%;\n  text-align: center;\n}\n.oldUI .courses-list-table {\n  max-height: 72vh;\n  min-height: 72vh;\n  overflow: auto;\n}\n.oldUI .courses-list-table ::-webkit-scrollbar {\n  display: block;\n}\n.oldUI .courses-list-table table tr th {\n  padding-top: 20px;\n  padding-bottom: 15px;\n  height: 25px;\n  background: #f7f7f7;\n}\n.oldUI .courses-list-table table tr td {\n  padding-top: 15px;\n  padding-bottom: 3px;\n}\n.oldUI .searchBox {\n  border: 1px solid lightgrey;\n  padding: 7px;\n  border-radius: 4px;\n}\n.oldUI .btn {\n  background: #0084f6;\n  color: white;\n}\n.oldUI th {\n  background-color: #e0eaec;\n  color: black;\n}\n.oldUI tr {\n  border-radius: 12px;\n  border-left: 5px solid #e0eaec;\n  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);\n  margin-bottom: 5px;\n  margin-top: 5px;\n}\n.oldUI .tableBodyScroll tbody {\n  display: block;\n  overflow-y: auto;\n  background: #ffffff;\n}\n.oldUI table th, .oldUI table td {\n  text-align: left;\n}\n.oldUI .tableBodyScroll thead,\n.oldUI tbody tr {\n  display: table;\n  width: 100%;\n  table-layout: fixed;\n}\n.oldUI .table-change table thead tr th {\n  padding: 10px 5px;\n  font-weight: 600;\n}\n.oldUI .table-change table tbody tr td {\n  padding: 5px 5px;\n}\n.oldUI .filter-res label {\n  font-size: 14px;\n  font-weight: 600;\n}\n.oldUI .filter-res.pagination {\n  width: 100%;\n}\n.oldUI .pagination .first:before {\n  content: \"« \";\n  font-size: 16px;\n  font-weight: 800;\n}\n.oldUI .pagination .last:after {\n  content: \" »\";\n  font-size: 16px;\n  font-weight: 800;\n}\n.oldUI .pagination .batch-size {\n  font-size: 16px;\n  font-weight: 800;\n  border-bottom: 1px solid black;\n}\n.oldUI .pagination li {\n  border-right: 1px solid #ccc;\n  padding: 0px 7px;\n  margin: 0;\n  line-height: 10px;\n  font-weight: 800;\n  cursor: pointer;\n}\n.oldUI .pagination li a {\n  line-height: 10px;\n  font-size: 16px;\n  font-weight: 800;\n  border: none;\n  padding: 0px 14px;\n}\n.oldUI .pagination li :hover {\n  background-color: transparent !important;\n}\n.oldUI .pagination li:last-child {\n  border-right: 0;\n  padding-right: 0;\n}\n.oldUI .edit-view {\n  display: none;\n}\n.oldUI .edit-view .radio-options {\n  margin-top: 0;\n  display: inline-flex;\n}\n.oldUI .edit-view .field-wrapper {\n  width: 130px;\n  padding-top: 0;\n  margin: 0 auto;\n}\n.oldUI .edit-view .field-wrapper .form-ctrl {\n  padding: 0;\n  height: 28px;\n  border-bottom: solid 1px #0060a3;\n}\n.oldUI .edit-view .field-wrapper.datePickerBox:after {\n  top: 2px;\n}\n.oldUI .edit-view .radio-options > div {\n  margin-bottom: 0;\n}\n.oldUI .field-radio-wrapper .form-radio:checked + label:before {\n  left: 3px !important;\n  top: 3px !important;\n}\n.oldUI .data-view {\n  display: block;\n}\n.oldUI .edit-mod .edit-view {\n  display: block;\n}\n.oldUI .edit-mod .data-view {\n  display: none;\n}\n.oldUI .common-tab {\n  padding-top: 5px;\n}\n.oldUI .common-tab ul {\n  font-size: 0;\n}\n.oldUI .common-tab ul li {\n  margin-right: 1px;\n  display: inline-block;\n  width: 19%;\n  max-width: 158px;\n  cursor: pointer;\n}\n.oldUI .common-tab ul li a {\n  display: block;\n  padding: 10px 5px;\n  background: #eff7ff;\n  border: 1px solid #cccdcd;\n  color: #0084f6;\n  text-align: center;\n  font-size: 14px;\n  font-weight: 600;\n}\n.oldUI .common-tab ul li:hover a, .oldUI .common-tab ul li.active a {\n  background: #0084f6;\n  color: #fff;\n  border-color: #0084f6;\n  font-weight: normal;\n}\n.oldUI .view-icon,\n.oldUI .edit-icon {\n  margin-right: 5px;\n}\n.oldUI .create-standard-field {\n  margin-bottom: 10px;\n}\n.oldUI .filter-for-courses label {\n  margin-top: 15px;\n  display: block;\n  font-weight: 600;\n}\n.oldUI .filter-for-courses .form-btn-head {\n  width: 30px;\n  height: 30px;\n  background: url(\"/assets/images/search.svg\") no-repeat center center;\n  background-size: 20px 20px;\n  margin-top: 2px;\n  cursor: pointer;\n  margin-right: 20px;\n  filter: grayscale(100%);\n}\n.oldUI .filter-search {\n  margin-bottom: 10px;\n}\n.oldUI .filter-search > div {\n  margin-bottom: 0;\n}\n.oldUI .filter-search .export-print {\n  margin-top: 6px;\n  display: inline-flex;\n}\n.oldUI .filter-search .export-print .print-icon {\n  background: url(\"/assets/images/print.svg\") no-repeat;\n  color: #888;\n}\n.oldUI .filter-search .export-print .export-icon {\n  background: url(\"/assets/images/expand.svg\") no-repeat;\n  margin-left: 25px;\n}\n.oldUI .filter-search .export-print .print-icon,\n.oldUI .filter-search .export-print .export-icon {\n  background-size: 20px auto;\n  padding: 0px 0px 0px 22px;\n  cursor: pointer;\n  font-size: 14px;\n  color: #888;\n}\n.oldUI .filter-search .export-print .print-icon:hover,\n.oldUI .filter-search .export-print .export-icon:hover {\n  color: #0084f6;\n}\n.oldUI .course-second .filter-for-courses {\n  margin-top: 0;\n}\n.oldUI .course-second .filter-search {\n  margin-bottom: 0;\n}\n.oldUI .course-second .filter-for-courses label {\n  margin-top: 10px;\n}\n.oldUI .edit-view-btn > div {\n  display: inline-block;\n  margin: 0 5px;\n}\n.oldUI .cancel-btn {\n  border-radius: 4px;\n  height: 30px;\n  padding: 4px 10px;\n}\n.oldUI .add-edit {\n  margin-bottom: 0;\n  margin-top: 10px;\n}\n.oldUI .add-edit i {\n  display: inline-block;\n  width: 17px;\n  height: 17px;\n  line-height: 1rem;\n  text-align: center;\n  font-size: 17px;\n  vertical-align: middle;\n  margin-right: 4px;\n}\n.oldUI .add-edit span {\n  display: inline-block;\n}\n.oldUI .add-edit .expend-box i {\n  line-height: 12px;\n  font-size: 22px;\n}\n.oldUI .add-edit a {\n  cursor: pointer;\n}\n.oldUI .field-wrapper .invalid-alert {\n  color: red;\n  background: rgba(255, 255, 255, 0);\n  box-shadow: none;\n}\n.oldUI .create-standard-form {\n  padding: 5px;\n  border-bottom: 1px solid #d8d8d8;\n}\n.oldUI .create-standard-form .field-checkbox-wrapper {\n  margin-top: 15px;\n  background: transparent;\n}\n.oldUI .create-standard-form .field-checkbox-wrapper .form-checkbox + label {\n  font-size: 12px;\n  font-weight: 600;\n  color: #777;\n}\n.oldUI .create-standard-form .field-checkbox-wrapper .form-checkbox:checked + label {\n  color: #0084f6;\n}\n.oldUI .create-standard-form .field-checkbox-wrapper .form-checkbox + label:after {\n  width: 24px;\n  height: 24px;\n  transform: scale(0.7);\n}\n.oldUI .create-standard-form .field-checkbox-wrapper .form-checkbox + label:before {\n  transform: rotate(-45deg) scale(0.7);\n  width: 15px;\n  height: 5px;\n  left: 4px;\n  top: 9px;\n}\n.oldUI .create-standard-form .field-wrapper {\n  margin-top: -10px;\n}\n.oldUI .create-standard-form .field-wrapper .form-ctrl {\n  background: white;\n  z-index: 10;\n  margin-top: 10px;\n  border-radius: 4px;\n}\n.oldUI .create-standard-form .field-wrapper label {\n  z-index: 1;\n}\n.oldUI .create-standard-form p {\n  margin-top: 5px;\n  font-size: 10px;\n  color: #979797;\n}\n.oldUI .create-cancel-small {\n  margin-top: 10px;\n}\n.oldUI .create-cancel-small .btn {\n  font-size: 14px;\n  font-weight: normal;\n  height: 36px;\n}\n.oldUI .edit-view-of-couse > tr > td {\n  padding: 0px !important;\n}\n.oldUI .course-list-edit {\n  background: #fff;\n  padding: 20px;\n  box-shadow: 0px 0px 1px 1px #c6c4c4 inset;\n  max-height: 200px;\n  overflow: auto;\n}\n.oldUI .course-list-edit .evoc-box {\n  padding: 10px;\n}\n.oldUI .course-list-edit .evoc-box .field-checkbox-wrapper {\n  background: transparent;\n}\n.oldUI .course-list-edit .evoc-box .field-checkbox-wrapper label span {\n  font-size: 13px;\n  font-weight: 600;\n  top: -3px;\n  position: relative;\n}\n.oldUI .ce-list-top {\n  padding-bottom: 10px;\n  border-bottom: 1px solid #ccc;\n}\n.oldUI .ce-list-top label {\n  font-weight: 400;\n}\n.oldUI .ce-list-top span {\n  font-weight: 600;\n  margin: 0 5px;\n}\n.oldUI .ce-list-bottom .table-responsive tbody tr th {\n  background: #d8d8d8;\n  font-weight: 600;\n  font-size: 14px;\n  color: #333;\n  padding: 5px 10px;\n  text-align: left;\n}\n.oldUI .ce-list-bottom .table-responsive tbody tr th:last-child {\n  width: 200px;\n  text-align: center;\n}\n.oldUI .ce-list-bottom .table-responsive tbody tr th:first-child {\n  width: 100px;\n}\n.oldUI .ce-list-bottom .table-responsive tbody tr td {\n  padding: 7px 10px;\n  background: #fff;\n  font-size: 12px;\n  text-align: left;\n  border-bottom: 1px solid #ededed;\n}\n.oldUI .ce-list-bottom .table-responsive tbody tr td:last-child {\n  text-align: center;\n}\n.oldUI .ce-list-bottom .table-responsive tbody tr:hover td {\n  background: #fff;\n}\n.oldUI .ce-list-bottom .table-responsive tbody tr:last-child td {\n  border-bottom: 0;\n}\n.oldUI .ce-list-bottom .field-checkbox-wrapper .form-checkbox + label:before {\n  transform: scale(0.7) rotate(-45deg);\n}\n.oldUI .ce-list-bottom .field-checkbox-wrapper .form-checkbox + label:after {\n  transform: scale(0.6);\n}\n.oldUI tr td {\n  font-size: 12px;\n  padding: 10px;\n}\n.oldUI label {\n  font-weight: 600;\n}\n.oldUI .table-responsive th {\n  font-size: 14px !important;\n}\n.oldUI .table-responsive th:first-child {\n  padding-left: 10px !important;\n}\n.oldUI .table-responsive .field-checkbox-wrapper {\n  background: transparent !important;\n}\n.oldUI .table-responsive .field-checkbox-wrapper .form-checkbox + label:after {\n  width: 16px !important;\n  height: 16px !important;\n}\n.oldUI .delete-btn a {\n  color: #f44336;\n}\n.oldUI .delete-btn a i {\n  font-size: 18px !important;\n  vertical-align: middle;\n  margin-right: 5px;\n}\n.oldUI .close-accor {\n  float: right;\n  width: 24px;\n  font-size: 31px;\n  height: 24px;\n  text-align: center;\n  border: none;\n  border-radius: 50%;\n  line-height: 16px;\n  margin-right: 4px;\n  margin-top: 5px;\n  cursor: pointer;\n  color: #0084f6;\n  font-weight: 400;\n}\n.oldUI .schedule-class-box .filter-box .field-wrapper .form-ctrl {\n  border-bottom: 1px solid #ccc;\n}\n.oldUI .schedule-class-box .filter-box .field-wrapper {\n  margin-top: -10px;\n}\n.oldUI .schedule-class-box .filter-box .fullBlue.btn {\n  width: 120px;\n}\n.oldUI .schedule-class {\n  margin-top: 20px;\n  padding-bottom: 10px;\n  margin-bottom: 10px;\n  border-bottom: 1px solid #ccc;\n}\n.oldUI .schedule-class .btn {\n  font-weight: 600;\n  font-size: 13px;\n  height: 30px;\n}\n.oldUI .schedule-class .schedule-class-left {\n  padding-top: 10px;\n}\n.oldUI .schedule-class .schedule-class-left label {\n  font-weight: 600;\n  margin-right: 15px;\n}\n.oldUI .view-tab li {\n  display: inline-block;\n  margin-right: 0px;\n}\n.oldUI .view-tab li .btn {\n  margin-left: 0;\n  height: 25px;\n  line-height: 12px;\n  font-weight: normal;\n  font-size: 12px;\n  padding: 5px 10px;\n}\n.oldUI .view-c-detail {\n  margin-top: 5px;\n}\n.oldUI .view-c-detail .filter-search {\n  margin-bottom: 0;\n}\n.oldUI .view-c-detail .filter-search .export-print {\n  margin-bottom: 0;\n}\n.oldUI .view-c-detail .vcd-l {\n  padding-top: 10px;\n}\n.oldUI .view-c-detail .vcd-l label {\n  font-weight: 600;\n  font-size: 15px;\n}\n.oldUI .calender-course {\n  margin-bottom: 15px;\n  margin-top: 8px;\n  position: relative;\n}\n.oldUI .calender-course .c-control {\n  position: absolute;\n  width: 30px;\n  height: 100%;\n  background: #efefef;\n  border: 1px solid #cccccc;\n  cursor: pointer;\n  box-sizing: border-box;\n}\n.oldUI .calender-course .c-control.cal-left {\n  left: 0;\n  top: 0;\n  background: url(\"/assets/images/left_arrow.svg\") no-repeat center center;\n  background-size: 11px;\n}\n.oldUI .calender-course .c-control.cal-left:hover {\n  border: 1px solid #0084f6;\n}\n.oldUI .calender-course .c-control.cal-right {\n  right: 0;\n  top: 0;\n  background: url(\"/assets/images/right_arrow.svg\") no-repeat center center;\n  background-size: 11px;\n}\n.oldUI .calender-course .c-control.cal-right:hover {\n  border: 1px solid #0084f6;\n}\n.oldUI .calender-course ul {\n  text-align: center;\n  padding-left: 40px;\n  padding-right: 40px;\n}\n.oldUI .calender-course ul li {\n  display: inline-block;\n  padding: 5px 10px;\n  border: 1px solid #f0f0f0;\n  width: 8.8%;\n  background: #efefef;\n  vertical-align: top;\n}\n.oldUI .calender-course ul li span.c-date {\n  font-size: 24px;\n  color: #0084f6;\n}\n.oldUI .calender-course ul li.active {\n  background: #ddedfd;\n  border: 1px solid #ccc;\n}\n.oldUI .class-cancel {\n  display: inline-block;\n  width: 12px;\n  height: 12px;\n  text-align: center;\n  line-height: 10px;\n  font-size: 11px;\n  color: #fff;\n  cursor: pointer;\n  vertical-align: middle;\n}\n.oldUI .class-cancel.blue {\n  background: #0084f6;\n}\n.oldUI .class-cancel.red {\n  background: red;\n}\n.oldUI .class-cancel.yellow {\n  background: #f8b238;\n}\n.oldUI .exam-is {\n  display: inline-block;\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  background: #f8b238;\n  vertical-align: middle;\n}\n.oldUI .class-is {\n  display: inline-block;\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  background: #0084f6;\n  vertical-align: middle;\n}\n.oldUI .calender-class-detail > div:last-child {\n  padding-top: 5px;\n}\n.oldUI .calender-class-detail > div:last-child span {\n  margin-left: 5px;\n}\n.oldUI .calender-view1 th {\n  padding: 10px;\n  font-size: 13px;\n  text-align: center;\n}\n.oldUI .calender-view1 .table-responsive {\n  margin-top: 10px;\n}\n.oldUI .calender-view1 .table-accor-head .open-accor {\n  display: block;\n}\n.oldUI .calender-view1 .table-accor-head .close-accor {\n  display: none;\n}\n.oldUI .calender-view1 .table-accor-head.active .accordian-heading .open-accor {\n  display: none;\n}\n.oldUI .calender-view1 .table-accor-head.active .accordian-heading .close-accor {\n  display: block;\n}\n.oldUI .calender-view1 .table-accor-head td {\n  padding: 0;\n  background: #fff;\n}\n.oldUI .calender-view1 .accordian-heading h4 {\n  padding: 3px !important;\n  color: #444;\n  border: 1px solid #eaecee;\n  border-radius: 20px;\n  margin: 4px 0 2px;\n  background: #e6f2fe;\n  text-align: left;\n}\n.oldUI .calender-view1 .accordian-heading h4 .open-accor,\n.oldUI .calender-view1 .accordian-heading h4 .close-accor {\n  float: left;\n}\n.oldUI .calender-view1 .accordian-heading h4 .close-accor {\n  width: 18px;\n  height: 18px;\n  line-height: 11px;\n  margin-top: 0;\n}\n.oldUI .calender-view1 .accordian-heading h4 .open-accor {\n  width: 18px;\n  height: 18px;\n  line-height: 18px;\n  margin-top: 0;\n}\n.oldUI .calender-view1 .accordian-heading h4 .date-c {\n  font-size: 13px;\n  line-height: 20px;\n  margin-left: 10px;\n  font-weight: 600;\n}\n.oldUI .calender-view1 .accordian-heading h4 .delete-icon {\n  font-size: 18px;\n  color: #f44336;\n  margin-left: 10px;\n  margin-right: 9px;\n  cursor: pointer;\n}\n.oldUI .calender-view1 .accordian-heading h4 .delete-icon svg {\n  width: 15px;\n  vertical-align: top;\n  display: inline-block;\n  margin-top: 3px;\n}\n.oldUI .calender-view1 .accordian-heading h4 .delete-icon svg line {\n  stroke-width: 2;\n}\n.oldUI .delete-btn svg {\n  width: 15px;\n  vertical-align: top;\n  display: inline-block;\n  margin-top: 3px;\n}\n.oldUI .delete-btn svg line {\n  stroke-width: 2;\n}\n.oldUI .mail-notification {\n  width: 20px;\n  height: 20px;\n  background: url(\"/assets/images/mial_notification.svg\") no-repeat;\n  cursor: pointer;\n  display: inline-block;\n}\n.oldUI .mail-notify {\n  width: 20px;\n  height: 20px;\n  background: url(\"/assets/images/mail_notify.svg\") no-repeat;\n  cursor: pointer;\n  display: inline-block;\n}\n.oldUI .reschedule-icon {\n  width: 20px;\n  height: 20px;\n  background: url(\"/assets/images/reschedule_class.svg\") no-repeat;\n  cursor: pointer;\n  display: inline-block;\n}\n.oldUI .action-box {\n  text-align: right;\n  width: 115px;\n  float: right;\n}\n.oldUI .action-box .delete-btn {\n  font-size: 18px;\n  color: #f44336;\n}\n.oldUI .action-box span {\n  display: inline-block;\n  vertical-align: middle;\n  margin: 0 8px 0 0;\n  cursor: pointer;\n}\n.oldUI .action-box .edit-icon {\n  width: 19px;\n  height: 16px;\n}\n.oldUI .edit-icon {\n  width: 19px;\n  height: 19px;\n  display: inline-block;\n  vertical-align: middle;\n}\n.oldUI .tick-mark1 {\n  width: 15px;\n  height: 6px;\n  border-left: 2px solid green;\n  border-bottom: 2px solid green;\n  transform: rotate(-45deg);\n  display: inline-block;\n  vertical-align: top;\n  margin-top: 1px;\n}\n.oldUI .ledgend-footer {\n  margin-top: 15px;\n}\n.oldUI .ledgend-footer label {\n  font-weight: 600;\n  margin-right: 16px;\n}\n.oldUI .ledgend-footer div {\n  margin-right: 20px;\n  font-size: 11px;\n}\n.oldUI .ledgend-footer div span {\n  display: inline-block;\n  vertical-align: middle;\n  margin-right: 3px;\n}\n.oldUI .date-arrow {\n  position: relative;\n}\n.oldUI .date-arrow div {\n  position: relative;\n}\n.oldUI .date-arrow div span {\n  background: #fff;\n  display: inline-block;\n  padding: 4px 20px;\n  z-index: 1;\n  font-size: 12px;\n  font-weight: 600;\n  position: relative;\n}\n.oldUI .date-arrow div:after {\n  position: absolute;\n  left: 20px;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  content: \"\\f104\";\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  width: 5px;\n  height: 16px;\n}\n.oldUI .date-arrow div:before {\n  position: absolute;\n  right: 20px;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  content: \"\\f105\";\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  width: 5px;\n  height: 16px;\n}\n.oldUI .date-arrow:after {\n  content: '';\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 20px;\n  margin: auto;\n  width: 88%;\n  height: 0px;\n  border-bottom: 1px solid #ccc;\n}\n.oldUI .calender-view1.cal-view-2 .accordian-heading h4 .open-accor,\n.oldUI .calender-view1.cal-view-2 .accordian-heading h4 .close-accor {\n  float: right;\n  margin-right: 0;\n}\n.oldUI .calender-view1.cal-view-2 td {\n  font-weight: 600;\n  font-size: 12px;\n  padding: 0;\n}\n.oldUI .calender-view1.cal-view-2 td:first-child {\n  text-align: left;\n}\n.oldUI .calender-view1.cal-view-2 td .accordian-heading h4 .date-c {\n  color: #004a7e;\n  font-size: 14px;\n}\n.oldUI .new-action > div {\n  width: 100%;\n  box-sizing: border-box;\n}\n.oldUI .new-action > div span {\n  margin: 0;\n}\n.oldUI .new-action > div > div {\n  width: 50%;\n  box-sizing: border-box;\n  border-right: 1px solid #ccc;\n  text-align: center;\n  padding: 5px;\n}\n.oldUI .new-action > div > div:last-child {\n  border-right: 1px solid transparent;\n}\n.oldUI .new-action > div:first-child {\n  border-bottom: 1px solid #ccc;\n}\n.oldUI .cal-view-2 .action-box,\n.oldUI .cal-view-2 .new-action {\n  width: 65px;\n}\n.oldUI .cal-view-2 .action-box {\n  padding-right: 5px;\n  margin: 5px 0;\n}\n.oldUI .read-more-view {\n  font-size: 12px;\n  margin-top: 10px;\n  color: #004a7e;\n}\n.oldUI .new-tick-mark {\n  height: 72px;\n  width: 35px;\n  border-right: 2px solid #fff;\n  margin-right: 8px;\n  text-align: center;\n  position: relative;\n}\n.oldUI .new-tick-mark .tick-mark1 {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  right: 0;\n  left: 0;\n}\n.oldUI .tick-mark-new > div {\n  display: inline-block;\n  vertical-align: middle;\n}\n.oldUI .course-detail-section {\n  margin-top: 30px;\n}\n.oldUI .course-detail-section .cd-s {\n  font-size: 13px;\n  font-weight: 600;\n}\n.oldUI .course-detail-section label {\n  margin-right: 15px;\n}\n.oldUI .course-detail-section span {\n  font-weight: 600;\n  margin-right: 10px;\n}\n.oldUI .schedule-class-inner {\n  padding: 20px 15px 25px;\n  background: #efefef;\n}\n.oldUI .schedule-class-inner .form-ctrl {\n  border-bottom: 1px solid #ccc;\n  background: transparent;\n}\n.oldUI .schedule-class-inner .s-c-1 {\n  font-weight: 600;\n  font-weight: 14px;\n  padding-bottom: 10px;\n  border-bottom: 1px solid #ccc;\n}\n.oldUI .schedule-class-inner .choose-class-type {\n  margin-top: 20px;\n}\n.oldUI .schedule-class-inner .choose-class-type .field-radio-wrapper {\n  display: inline-block;\n  margin-right: 20px;\n}\n.oldUI .schedule-class-inner .select-days {\n  margin-top: 20px;\n}\n.oldUI .schedule-class-inner .select-days span {\n  float: left;\n}\n.oldUI .schedule-class-inner .select-days .field-checkbox-wrapper {\n  float: left;\n  background: transparent;\n  margin-right: 2%;\n  margin-left: 2%;\n}\n.oldUI .schedule-class-inner .select-days .field-checkbox-wrapper .form-checkbox + label:after {\n  transform: scale(0.7);\n}\n.oldUI .schedule-class-inner .select-days .field-checkbox-wrapper .form-checkbox + label:before {\n  transform: rotate(-45deg) scale(0.7);\n}\n.oldUI .create-class-schedule h4 {\n  font-size: 14px;\n  font-weight: 600;\n  margin-bottom: 10px;\n  margin-top: 15px;\n}\n.oldUI .s-form-control {\n  margin-top: 30px;\n  border-top: 1px solid #ccc;\n}\n@media only screen and (min-width: 1000px) and (max-width: 1200px) {\n  .oldUI .calender-course ul li {\n    width: 8%;\n  }\n}\n@media only screen and (min-width: 768px) and (max-width: 999px) {\n  .oldUI .calender-course ul li {\n    width: 6%;\n  }\n}\n@media only screen and (max-width: 960px) {\n  .oldUI .calender-class-detail > div {\n    width: 100%;\n    text-align: center;\n  }\n  .oldUI .calender-class-detail > div:last-child span {\n    margin: 0;\n  }\n}\n@media only screen and (max-width: 767px) {\n  .oldUI .common-tab ul li {\n    margin-right: 0;\n    width: 20%;\n  }\n  .oldUI .common-tab ul li a {\n    padding: 5px 5px;\n    font-size: 12px;\n  }\n  .oldUI .filter-for-courses label {\n    margin-top: 0;\n    margin-bottom: 5px;\n  }\n  .oldUI .filter-for-courses .filter-search .btn {\n    margin-right: 0;\n    margin-left: 10px;\n  }\n  .oldUI .radio-options {\n    text-align: left;\n  }\n  .oldUI .radio-options .field-radio-wrapper {\n    margin-bottom: 10px !important;\n  }\n  .oldUI .radio-options .field-radio-wrapper:last-child {\n    margin-bottom: 0 !important;\n  }\n  .oldUI .create-standard-form {\n    padding-left: 0;\n    padding-right: 0;\n  }\n  .oldUI .create-cancel-small .btn {\n    margin-right: 0;\n    margin-left: 10px;\n  }\n  .oldUI .schedule-class-box .filter-box .fullBlue.btn {\n    margin-top: 15px;\n    margin-bottom: 0;\n  }\n  .oldUI .schedule-class .schedule-class-left label {\n    display: block;\n    margin-bottom: 5px;\n  }\n  .oldUI .schedule-class .schedule-class-left span {\n    display: block;\n    margin-bottom: 10px;\n  }\n  .oldUI .schedule-class .btn {\n    margin-right: 0;\n    margin-left: 10px;\n    margin-bottom: 0;\n  }\n  .oldUI .view-tab li .btn {\n    margin-right: 0;\n    margin-bottom: 0;\n  }\n  .oldUI .calender-course ul li {\n    padding: 5px 5px;\n    width: 17%;\n    margin-bottom: 5px;\n  }\n  .oldUI .ledgend-footer label {\n    display: block;\n    width: 100%;\n    margin-right: 0;\n    margin-bottom: 10px;\n  }\n  .oldUI .ledgend-footer div {\n    margin-bottom: 5px;\n  }\n  .oldUI .cal-view .middle-top .btn {\n    margin-bottom: 0;\n  }\n  .oldUI .courses-list-table table,\n  .oldUI .calender-view1 table {\n    min-width: 600px;\n  }\n  .oldUI .calender-course ul li span.c-date {\n    font-size: 19px;\n  }\n  .oldUI .date-arrow:after {\n    width: 72%;\n  }\n  .oldUI .course-detail-section {\n    margin-top: 20px;\n  }\n  .oldUI .course-detail-section > div {\n    margin-bottom: 5px;\n  }\n  .oldUI .filter-box {\n    padding: 10px 0px;\n  }\n  .oldUI .popup-btn .btn {\n    font-size: 12px;\n    height: 32px;\n  }\n}\n@media only screen and (max-width: 420px) {\n  .oldUI .common-tab ul li {\n    width: auto;\n  }\n  .oldUI .common-tab ul li a {\n    font-size: 10px;\n  }\n  .oldUI .field-checkbox-wrapper .form-checkbox + label {\n    font-size: 12px;\n  }\n}\n.oldUI table thead tr th {\n  font-size: 12px;\n  font-weight: 500;\n  padding: 8px;\n}\n.oldUI table tbody tr td {\n  font-size: 12px;\n}\n.oldUI table tbody tr td .editOptions li {\n  display: inline-block;\n}\n.oldUI table tbody tr .field-wrapper {\n  padding: 0px !important;\n}\n.oldUI table tbody tr .field-wrapper .form-ctrl {\n  display: block;\n  box-sizing: border-box;\n  padding: 0px 0px 0px 5px;\n  outline: none;\n  border: 0;\n  height: 26px;\n  box-shadow: none;\n  border-radius: 0;\n  line-height: 25px;\n  background: transparent;\n  width: 80px;\n  text-align: center;\n  border-bottom: 1px solid #ccc;\n}\n.oldUI table tbody .displayComp .edit-comp {\n  display: none;\n}\n.oldUI table tbody .editComp .view-comp {\n  display: none;\n}\n.oldUI .marginExtra {\n  margin-left: 15px;\n  margin-right: 15px;\n}\n.oldUI .closeBtnClass {\n  line-height: 0.6rem !important;\n}\n.oldUI .search-filter-wrapper .normal-field {\n  padding: 4px 10px;\n  border: 1px solid #ccc;\n  box-sizing: border-box;\n  margin: 0;\n  float: left;\n  font-size: 14px;\n  border-radius: 4px;\n}\n.oldUI .search-filter-wrapper .field-wrapper {\n  position: relative;\n  padding-top: 0px !important;\n  width: 30%;\n  float: left !important;\n}\n.oldUI .search-filter-wrapper .field-wrapper .form-ctrl {\n  font: 400 12px 'Open sans',sans-serif;\n  border-top: none !important;\n  border-right: none !important;\n  border-left: none !important;\n}\n.oldUI .search-filter-wrapper .field-wrapper label {\n  position: absolute !important;\n  left: 10% !important;\n  top: 1% !important;\n}\n.oldUI .search-filter-wrapper .field-wrapper label:after {\n  left: 85% !important;\n  top: 10px !important;\n}\n.oldUI .skeleton {\n  position: relative;\n  overflow: hidden;\n  width: 80%;\n  height: 12px;\n  background: #efefef;\n  border-radius: 2px;\n}\n.oldUI .skeleton::after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(90deg, #efefef, white, #efefef);\n  -webkit-animation: progress 1s ease-in-out infinite;\n          animation: progress 1s ease-in-out infinite;\n}\n@-webkit-keyframes progress {\n  0% {\n    transform: translate3d(-100%, 0, 0);\n  }\n  100% {\n    transform: translate3d(100%, 0, 0);\n  }\n}\n@keyframes progress {\n  0% {\n    transform: translate3d(-100%, 0, 0);\n  }\n  100% {\n    transform: translate3d(100%, 0, 0);\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb3Vyc2UtbW9kdWxlL2NyZWF0ZS1jb3Vyc2UvY291cnNlLWhvbWUvc2NoZWR1bGUtaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hc3NldHMvY3NzL2NvbW1vbi92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDSSxXQUFXO0FBRWY7QUFDRTtFQUNFLG9DQUFvQztBQUV4QztBQUNFO0VBQ0UsYUFBYTtBQUVqQjtBQUNFO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUV2QjtBQUNFO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtBQUVsQztBQUNFO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixZQUFZO0FBRWhCO0FBQ0U7RUFDRSxzQkFBc0I7RUFDdEIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFlBQVk7RUFDWixrQkFBa0I7QUFFdEI7QUFDRTtFQUNFLDJDQUEyQztBQUUvQztBQUNFOzs7RUFHRSxhQUFhO0FBRWpCO0FBQ0U7RUFDRSxpQkFDRjtBQUNGO0FBQ0U7RUFDRSxnQ0FBZ0M7RUFDaEMsK0NBQUE7RUFDQSxvQkFBb0I7QUFFeEI7QUFDRTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7QUFFcEI7QUFDRTtFQUNFLGtCQUFrQjtBQUV0QjtBQUNFO0VBQ0UsbUJBQW1CO0VBQ25CLDBCQUEwQjtFQUMxQixpQkFBaUI7QUFFckI7QUFDRSxtQ0FBQTtBQUVBLGlCQUFBO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQiw0QkFBQTtFQUVBLHNCQUFzQjtFQUV0QixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGVBQWU7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Q0o7QUErRlo7QUFoMkNFO0VBd3dDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0FBNEZ0QjtBQXIyQ0U7RUE2d0NFLDhCQUE4QjtBQTRGbEM7QUF6MkNFO0VBa3hDTSxpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsV0FBVztFQUNYLGVBQWU7RUFDZixrQkFBa0I7QUEyRjFCO0FBbjNDRTtFQTJ4Q00sa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQixVQUFVO0VBQ1Ysc0JBQXNCO0FBNEY5QjtBQTEzQ0U7RUFneUNVLHFDQUFxQztFQUNyQywyQkFBMkI7RUFDM0IsNkJBQTZCO0VBQzdCLDRCQUE0QjtBQThGeEM7QUFqNENFO0VBdXlDTSw2QkFBNkI7RUFDN0Isb0JBQW9CO0VBQ3BCLGtCQUFrQjtBQThGMUI7QUF2NENFO0VBMnlDVSxvQkFBb0I7RUFDcEIsb0JBQW9CO0FBZ0doQztBQTU0Q0U7RUFxekNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLFlBQVk7RUFDWixtQkFSZ0I7RUFTaEIsa0JBQWtCO0FBMkZ0QjtBQXI1Q0U7RUE0ekNNLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLDJEQUE4RTtFQUM5RSxtREFBMkM7VUFBM0MsMkNBQTJDO0FBNkZuRDtBQXpGQTtFQUNJO0lBQ0ksbUNBQW1DO0VBNEZ6QztFQTFGRTtJQUNJLGtDQUFrQztFQTRGeEM7QUFDRjtBQWxHQTtFQUNJO0lBQ0ksbUNBQW1DO0VBNEZ6QztFQTFGRTtJQUNJLGtDQUFrQztFQTRGeEM7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY291cnNlLW1vZHVsZS9jcmVhdGUtY291cnNlL2NvdXJzZS1ob21lL3NjaGVkdWxlLWhvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgICBtYXJnaW46IDBweDtcbiAgfVxuICBcbiAgYm9keSB7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICB9XG4gIFxuICAuZmxleCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuICBcbiAgLmZsZXhjIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgXG4gIC5kaXNwbGF5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxuICBcbiAgLmJsdWVfYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTA5Q0YxO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDlweCAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGhlaWdodDogMzVweDtcbiAgfVxuICBcbiAgLndoaXRlX2J1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBjb2xvcjogIzEwOUNGMTtcbiAgICBwYWRkaW5nOiA4cHggMjBweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzEwOUNGMTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxuICBcbiAgLmJ1dHRvbnNoYWRvdyB7XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgfVxuICBcbiAgaW5wdXQ6Zm9jdXMsXG4gIHNlbGVjdDpmb2N1cyxcbiAgYnV0dG9uOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG4gIFxuICAuaGVhZF9wYWRkaW5nIHtcbiAgICBwYWRkaW5nOiAxNXB4IDBweFxuICB9XG4gIFxuICAubWFpbi1zaGFkb3cge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRUZGMEY1O1xuICAgIC8qYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjAyKTsqL1xuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICB9XG4gIFxuICAudzk4IHtcbiAgICB3aWR0aDogOTYlO1xuICAgIG1hcmdpbjogMHB4IGF1dG87XG4gIH1cbiAgXG4gIC5tcjEwIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cbiAgXG4gIC5wYWdlLWNvbnRlbnQge1xuICAgIGJhY2tncm91bmQ6ICNGNUY1RjU7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjBweCk7XG4gICAgcGFkZGluZy10b3A6IDE2cHg7XG4gIH1cbiAgXG4gIC8qNTQuMiBzdWJ0cmFjdCB0aGUgc2l6ZSBvZiBoZWFkZXIqL1xuICBcbiAgLypzd2l0Y2hpbmcgdGFicyovXG4gIC5uYXYtaXRlbSAubmF2LWxpbmsge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG4gIFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gIFxuICAgIGNvbG9yOiAjMUEyMzM0O1xuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIFxuICAubmF2LWl0ZW0gLm5hdi1saW5rLmFjdGl2ZSB7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzEwOUNGMSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjMTA5Q0YxICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC5uYXYtbGluayB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZzogMS41cmVtIDByZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgIG1hcmdpbjogLTFyZW0gMi41cmVtO1xuICAgIG1hcmdpbi1sZWZ0OiAwcmVtO1xuICB9XG4gIFxuICAubmF2PmxpIHtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gIH1cbiAgXG4gIC5uYXYtbGluazpob3ZlcixcbiAgLm5hdi1saW5rLFxuICAubmF2LWxpbms6Zm9jdXMge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG4gIFxuICAubmF2LWxpbmsge1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgfVxuICBcbiAgLm5hdi1pdGVtIHtcbiAgICAuYWN0aXZlIHtcbiAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMTA5Y2YxICFpbXBvcnRhbnQ7XG4gICAgICBjb2xvcjogIzEwOWNmMSAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuICBcbiAgLmxpc3Q+bGkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogN3B4IDBweDtcbiAgICBtYXJnaW46IDdweCAwcHg7XG4gIH1cbiAgXG4gIC5saXN0PmxpPmE+c3BhbiB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAjMzM0RDZFO1xuICB9XG4gIFxuICAubGlzdD5saSBpbWcge1xuICAgIHBhZGRpbmc6IDBweCAxMHB4O1xuICB9XG4gIFxuICAvKnN0YW5kYXJkKi9cbiAgXG4gIC5jaGVja2JveCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IGF1dG87XG4gICAgZ3JpZC1nYXA6IDAuNWVtO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBjb2xvcjogdmFyKC0tY29sb3IpO1xuICB9XG4gIFxuICAuY2hlY2tib3hfX2lucHV0IGlucHV0IHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHdpZHRoOiAwZW07XG4gICAgaGVpZ2h0OiAwZW07XG4gIH1cbiAgXG4gIC5jaGVja2JveF9fY29udHJvbCB7XG4gICAgZGlzcGxheTogaW5saW5lLWdyaWQ7XG4gICAgd2lkdGg6IDAuNWVtO1xuICAgIGhlaWdodDogMC41ZW07XG4gICAgYm9yZGVyLXJhZGl1czogMC4xZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0JCQjJCMjtcbiAgICA7XG4gIH1cbiAgXG4gIC5jaGVja2JveF9faW5wdXQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJjaGVja2JveFwiO1xuICB9XG4gIFxuICAuY2hlY2tib3hfX2NvbnRyb2wgc3ZnIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xcyBlYXNlLWluIDI1bXM7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICBzdHJva2Utd2lkdGg6IDQ7XG4gICAgbWFyZ2luOiAycHg7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIGxlZnQ7XG4gIH1cbiAgXG4gIC5jaGVja2JveF9faW5wdXQgaW5wdXQ6Y2hlY2tlZCsuY2hlY2tib3hfX2NvbnRyb2wgc3ZnIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG4gIFxuICAuY2hlY2tib3hfX2lucHV0IGlucHV0OmNoZWNrZWQrLmNoZWNrYm94X19jb250cm9sIHtcbiAgICBiYWNrZ3JvdW5kOiAjMTA5Q0YxO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMTA5Q0YxO1xuICB9XG4gIFxuICAubGFiZWxhY3RpdmUge1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICBcbiAgICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuICBcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgICBjb2xvcjogIzMzNEQ2RTtcbiAgfVxuICBcbiAgLmlucHV0IHtcbiAgICBib3gtc2hhZG93OiA0cHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIFxuICAgIGhlaWdodDogMzVweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gICAgdGV4dC1pbmRlbnQ6IDEwcHg7XG4gICAgY29sb3I6ICMxQTIzMzQ7XG4gIFxuICB9XG4gIFxuICAuc2VhcmNoIHtcbiAgICB3aWR0aDogMjYwcHg7XG4gICAgLy8gYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWdfbmV3L3NlYXJjaC5zdmcpIG5vLXJlcGVhdCAjRkZGRkZGO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDk0JSBjZW50ZXI7XG4gIH1cbiAgXG4gIC50YWJsZV9oZWFkIHtcbiAgICBiYWNrZ3JvdW5kOiAjRUZGMEY1O1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuICBcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICBcbiAgICAvKiB0YWJsZV9ibGFjayAqL1xuICBcbiAgICBjb2xvcjogIzMyM0M0NztcbiAgfVxuICBcbiAgLnRhYmxlX2JvZHkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbWluLWhlaWdodDogNTBweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRUZGMEY1O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjAyKTtcbiAgICBjb2xvcjogIzMyM0M0NztcbiAgICBwYWRkaW5nOiAxNnB4IDBweDtcbiAgXG4gIH1cbiAgXG4gIC50YWJsZV9oZWFkPmRpdixcbiAgLnRhYmxlX2JvZHk+ZGl2IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIH1cbiAgXG4gIC5zdGFuZGFyZCAudGFibGVfaGVhZD5kaXY6Zmlyc3QtY2hpbGQsXG4gIC5zdGFuZGFyZCAudGFibGVfYm9keT5kaXY6Zmlyc3QtY2hpbGQge1xuICAgIHdpZHRoOiAxMCVcbiAgfVxuICBcbiAgLnN0YW5kYXJkIC50YWJsZV9oZWFkPmRpdjpudGgtY2hpbGQoMiksXG4gIC5zdGFuZGFyZCAudGFibGVfYm9keT5kaXY6bnRoLWNoaWxkKDIpIHtcbiAgICB3aWR0aDogMjQlXG4gIH1cbiAgXG4gIC5zdGFuZGFyZCAudGFibGVfaGVhZD5kaXY6bGFzdC1jaGlsZCxcbiAgLnN0YW5kYXJkIC50YWJsZV9ib2R5PmRpdjpsYXN0LWNoaWxkIHtcbiAgICB3aWR0aDogOTBweDtcbiAgXG4gIH1cbiAgXG4gIC5zdGFuZGFyZCAudGFibGVfYm9keT5kaXY6bGFzdC1jaGlsZCB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuICBcbiAgLnN0YW5kYXJkIC50YWJsZV9oZWFkPmRpdjpudGgtY2hpbGQoMyksXG4gIC5zdGFuZGFyZCAudGFibGVfYm9keT5kaXY6bnRoLWNoaWxkKDMpIHtcbiAgICB3aWR0aDogY2FsYygoMTAwJSAtIDM0JSkgLSA5MHB4KTtcbiAgfVxuICBcbiAgLnNjcm9sbCB7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gKDYwcHggKyAxNnB4ICsgMzZweCArIDE1cHggKyAzMnB4ICsgMzZweCArIDUwcHggKyA0MnB4ICkpO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgfVxuICBcbiAgLnNjcm9sbDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiAxMHB4O1xuICB9XG4gIFxuICAvKiBUcmFjayAqL1xuICAuc2Nyb2xsOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTtcbiAgfVxuICBcbiAgLyogSGFuZGxlICovXG4gIC5zY3JvbGw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBiYWNrZ3JvdW5kOiAjMTA5Q0YxNzM7XG4gIH1cbiAgXG4gIC8qIEhhbmRsZSBvbiBob3ZlciAqL1xuICAuc2Nyb2xsOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogIzU1NTtcbiAgfVxuICBcbiAgLnRhYmxlX2FjdGlvbiB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIFxuICAucGFnaWduYXRpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICBwYWRkaW5nOjE2cHggMHB4O1xuICAgIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0LCBvciAxNTQlICovXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvKnN1YnRyYWN0IHdpZHRoIG9mIHNpZGViYXIqL1xuICAgIGNvbG9yOiAjMDAwMDAwOyBcbiAgfVxuICBcbiAgLnBhZ2lnbmF0aW9uPmRpdjpmaXJzdC1jaGlsZCB7XG4gICAgd2lkdGg6IDQwJTtcbiAgfVxuICBcbiAgLnBhZ2lnbmF0aW9uIHNlbGVjdCB7XG4gIFxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0Q1RDBEMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAvKndpZHRoOiA2M3B4OyovXG4gICAgLypoZWlnaHQ6IDM1cHg7Ki9cbiAgICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCwgb3IgMTU0JSAqL1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gICAgY29sb3I6ICMwMDc5RkY7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIFxuICAuc2VsZWN0ZWRfbm8ge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIHBhZGRpbmc6IDBweCA0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0LCBvciAxNTQlICovXG4gICAgYmFja2dyb3VuZDogIzAwNzlGRjtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICB9XG4gIFxuICAuY2xpY2sge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0LCBvciAxNTQlICovXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6ICMwMDc5RkY7XG4gIH1cbiAgXG4gIC5wYWdpZ25hdGlvbiBwIHNwYW4ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgfVxuICBcbiAgLnBhZ2lnbmF0aW9uIHAge1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgfVxuICBcbiAgLm1vZGFsLXRpdGxlIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuICBcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICBcbiAgICBjb2xvcjogIzMzNEQ2RTtcbiAgfVxuICBcbiAgLm1vZGFsIHAge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gIFxuICAgIGNvbG9yOiAjMzM0RDZFO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cbiAgXG4gIC5tb2RhbCBpbnB1dCB7XG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQzRDQUNFO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLyogdGFibGVfYmxhY2sgKi9cbiAgXG4gICAgY29sb3I6ICMzMjNDNDc7XG4gIH1cbiAgXG4gIC5tb2RhbCBpbnB1dDpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICM4ZTkzOWFcbiAgfVxuICBcbiAgQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gICAgLm1vZGFsLWRpYWxvZyB7XG4gICAgICBtYXgtd2lkdGg6IDMwMHB4O1xuICAgIH1cbiAgfVxuICBcbiAgLm1vZGFsIC5pbmZvIHtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxMXB4O1xuICAgIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIC8qIHRhYmxlX2JsYWNrICovXG4gIFxuICAgIGNvbG9yOiAjMzIzQzQ3O1xuICB9XG4gIFxuICAucmVkIHtcbiAgICBjb2xvcjogI0U1MTUxNTtcbiAgfVxuICBcbiAgLypzdWJqZWN0Ki9cbiAgLnN1YmplY3QgLnRhYmxlX2hlYWQ+ZGl2LFxuICAuc3ViamVjdCAudGFibGVfYm9keT5kaXYge1xuICAgIHdpZHRoOiBjYWxjKCgoMTAwJSAtIDM1JSkgLSA5MHB4KSAvIDIpO1xuICB9XG4gIFxuICAuc3ViamVjdCAudGFibGVfaGVhZD5kaXY6Zmlyc3QtY2hpbGQsXG4gIC5zdWJqZWN0IC50YWJsZV9ib2R5PmRpdjpmaXJzdC1jaGlsZCxcbiAgLnN1YmplY3QgLnRhYmxlX2hlYWQ+ZGl2Om50aC1jaGlsZCg1KSxcbiAgLnN1YmplY3QgLnRhYmxlX2JvZHk+ZGl2Om50aC1jaGlsZCg1KSB7XG4gICAgd2lkdGg6IDEwJVxuICB9XG4gIFxuICAuc3ViamVjdCAudGFibGVfaGVhZD5kaXY6bnRoLWNoaWxkKDQpLFxuICAuc3ViamVjdCAudGFibGVfYm9keT5kaXY6bnRoLWNoaWxkKDQpIHtcbiAgICB3aWR0aDogMTUlXG4gIH1cbiAgXG4gIC5zdWJqZWN0IC50YWJsZV9oZWFkPmRpdjpsYXN0LWNoaWxkLFxuICAuc3ViamVjdCAudGFibGVfYm9keT5kaXY6bGFzdC1jaGlsZCB7XG4gICAgd2lkdGg6IDkwcHg7XG4gIFxuICB9XG4gIFxuICAuc3ViamVjdCAudGFibGVfYm9keT5kaXY6bGFzdC1jaGlsZCB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuICAuc3BhY2UxNntcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICB9XG4gIC5tb2RhbC1kaWFsb2cge1xuICAgIG1hcmdpbjogNSUgYXV0bztcbiAgfVxuICAuYWN0aW9uSW1nIHtcbiAgICBpbWcge1xuICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgd2lkdGg6IDE4cHg7XG4gICAgfVxuICB9XG4gIC5vbGRVSSB7XG4gICAgQGltcG9ydCBcIi4vc3JjL2Fzc2V0cy9jc3MvY29tbW9uL3ZhcmlhYmxlcy5zY3NzXCI7XG5cbi5jb3Vyc2VzLWxpc3QtdGFibGUge1xuICAgIG1heC1oZWlnaHQ6IDcydmg7XG4gICAgbWluLWhlaWdodDogNzJ2aDtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAgIHRhYmxlIHtcbiAgICAgICAgdHIge1xuICAgICAgICAgICAgdGgge1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGQge1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAzcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4uc2VhcmNoQm94e1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcbiAgICBwYWRkaW5nOiA3cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuLmJ0biB7XG4gICAgYmFja2dyb3VuZDogIzAwODRmNjtcbiAgICBjb2xvcjogd2hpdGU7XG59XG50aHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlYWVjO1xuICAgIGNvbG9yOiBibGFjaztcbn1cbnRyIHtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2UwZWFlYztcbiAgICBib3gtc2hhZG93OiAwIDNweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG59XG4udGFibGVCb2R5U2Nyb2xsIHRib2R5IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICAvLyBtYXgtaGVpZ2h0OiA3MHZoO1xuICAgIC8vIG1pbi1oZWlnaHQ6IDcwdmg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIC8vIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAvLyBib3JkZXItcmFkaXVzOiAxcHggc29saWQgcmdiYSgyMTEsIDIxMiwgMjEzLCAwLjUpO1xufVxudGFibGUgdGgsIHRhYmxlIHRkIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLnRhYmxlQm9keVNjcm9sbCB0aGVhZCxcbnRib2R5IHRyIHtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xufVxuLnRhYmxlLWNoYW5nZSB7XG4gICAgdGFibGUge1xuICAgICAgICB0aGVhZCB7XG4gICAgICAgICAgICB0ciB7XG4gICAgICAgICAgICAgICAgdGgge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDVweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGJvZHkge1xuICAgICAgICAgICAgdHIge1xuICAgICAgICAgICAgICAgIHRkIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5maWx0ZXItcmVzIGxhYmVsIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmZpbHRlci1yZXMucGFnaW5hdGlvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLy8gbWFyZ2luLXRvcDogMTVweDtcbn1cblxuXG5cbi5wYWdpbmF0aW9uIHtcbiAgICAvLyBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIC5maXJzdCB7XG4gICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiwqsgXCI7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5sYXN0IHtcbiAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICBjb250ZW50OiBcIiDCu1wiO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuYmF0Y2gtc2l6ZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xuICAgIH1cbiAgICBsaSB7XG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgIHBhZGRpbmc6IDBweCA3cHg7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgYSB7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICBwYWRkaW5nOiAwcHggMTRweDtcbiAgICAgICAgfVxuICAgICAgICA6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnBhZ2luYXRpb24gbGk6bGFzdC1jaGlsZCB7XG4gICAgYm9yZGVyLXJpZ2h0OiAwO1xuICAgIHBhZGRpbmctcmlnaHQ6IDA7XG59XG5cbi5lZGl0LXZpZXcge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgLnJhZGlvLW9wdGlvbnMge1xuICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICB9XG4gICAgLmZpZWxkLXdyYXBwZXIge1xuICAgICAgICB3aWR0aDogMTMwcHg7XG4gICAgICAgIHBhZGRpbmctdG9wOiAwO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgLmZvcm0tY3RybCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgaGVpZ2h0OiAyOHB4O1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICMwMDYwYTM7XG4gICAgICAgIH1cbiAgICAgICAgJi5kYXRlUGlja2VyQm94OmFmdGVyIHtcbiAgICAgICAgICAgIHRvcDogMnB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5yYWRpby1vcHRpb25zPmRpdiB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgfVxufVxuXG4uZmllbGQtcmFkaW8td3JhcHBlciB7XG4gICAgLmZvcm0tcmFkaW86Y2hlY2tlZCtsYWJlbDpiZWZvcmUge1xuICAgICAgICBsZWZ0OiAzcHggIWltcG9ydGFudDtcbiAgICAgICAgdG9wOiAzcHggIWltcG9ydGFudDtcbiAgICB9XG59XG5cbi5kYXRhLXZpZXcge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZWRpdC1tb2Qge1xuICAgIC5lZGl0LXZpZXcge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gICAgLmRhdGEtdmlldyB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxufVxuXG4uY29tbW9uLXRhYiB7XG4gICAgcGFkZGluZy10b3A6IDVweDtcbiAgICB1bCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMDtcbiAgICAgICAgLy8gYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMWYxZjE7XG4gICAgICAgIGxpIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMXB4O1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgd2lkdGg6IDE5JTtcbiAgICAgICAgICAgIG1heC13aWR0aDogMTU4cHg7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDVweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWZmN2ZmO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2NkY2Q7XG4gICAgICAgICAgICAgICAgY29sb3I6ICRjb21tb24tYmx1ZTtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmOmhvdmVyLFxuICAgICAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkY29tbW9uLWJsdWU7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkYmctd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJGNvbW1vbi1ibHVlO1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnZpZXctaWNvbixcbi5lZGl0LWljb24ge1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4uY3JlYXRlLXN0YW5kYXJkLWZpZWxkIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uZmlsdGVyLWZvci1jb3Vyc2VzIHtcbiAgICBsYWJlbCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cbiAgICAuZm9ybS1idG4taGVhZCB7XG4gICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvc2VhcmNoLnN2ZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDIwcHggMjBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XG4gICAgfVxufVxuXG4uZmlsdGVyLXNlYXJjaCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAmPmRpdiB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgfVxuICAgIC5leHBvcnQtcHJpbnQge1xuICAgICAgICBtYXJnaW4tdG9wOiA2cHg7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICAucHJpbnQtaWNvbiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL3ByaW50LnN2ZycpIG5vLXJlcGVhdDtcbiAgICAgICAgICAgIGNvbG9yOiAjODg4O1xuICAgICAgICB9XG4gICAgICAgIC5leHBvcnQtaWNvbiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2V4cGFuZC5zdmcnKSBuby1yZXBlYXQ7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMjVweDtcbiAgICAgICAgfVxuICAgICAgICAucHJpbnQtaWNvbixcbiAgICAgICAgLmV4cG9ydC1pY29uIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMjBweCBhdXRvO1xuICAgICAgICAgICAgcGFkZGluZzogMHB4IDBweCAwcHggMjJweDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGNvbG9yOiAjODg4O1xuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICRjb21tb24tYmx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmNvdXJzZS1zZWNvbmQge1xuICAgIC5maWx0ZXItZm9yLWNvdXJzZXMge1xuICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgIH1cbiAgICAuZmlsdGVyLXNlYXJjaCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgfVxuICAgIC5maWx0ZXItZm9yLWNvdXJzZXMgbGFiZWwge1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIH1cbn1cblxuLmVkaXQtdmlldy1idG4ge1xuICAgICY+ZGl2IHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBtYXJnaW46IDAgNXB4O1xuICAgIH1cbn1cblxuLmNhbmNlbC1idG57XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBwYWRkaW5nOiA0cHggMTBweDtcbn1cblxuLmFkZC1lZGl0IHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgaSB7XG4gICAgICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkICRjb21tb24tYmx1ZTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB3aWR0aDogMTdweDtcbiAgICAgICAgaGVpZ2h0OiAxN3B4OyAvLyBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxcmVtO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gICAgfVxuICAgIHNwYW4ge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgfVxuICAgIC5leHBlbmQtYm94IHtcbiAgICAgICAgaSB7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTJweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbn1cblxuLmZpZWxkLXdyYXBwZXIge1xuICAgIC5pbnZhbGlkLWFsZXJ0IHtcbiAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICB9XG59XG5cbi5jcmVhdGUtc3RhbmRhcmQtZm9ybSB7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDhkOGQ4O1xuICAgIC5maWVsZC1jaGVja2JveC13cmFwcGVyIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIC5mb3JtLWNoZWNrYm94IHtcbiAgICAgICAgICAgICYrbGFiZWwge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjNzc3O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJjpjaGVja2VkK2xhYmVsIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogJGNvbW1vbi1ibHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5mb3JtLWNoZWNrYm94K2xhYmVsOmFmdGVyIHtcbiAgICAgICAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjcpO1xuICAgICAgICB9XG4gICAgICAgIC5mb3JtLWNoZWNrYm94K2xhYmVsOmJlZm9yZSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHNjYWxlKDAuNyk7XG4gICAgICAgICAgICB3aWR0aDogMTVweDtcbiAgICAgICAgICAgIGhlaWdodDogNXB4O1xuICAgICAgICAgICAgbGVmdDogNHB4O1xuICAgICAgICAgICAgdG9wOiA5cHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmZpZWxkLXdyYXBwZXIge1xuICAgICAgICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgICAgICAgLmZvcm0tY3RybCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgfVxuICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICB9XG4gICAgfVxuICAgIHAge1xuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgY29sb3I6ICM5Nzk3OTc7XG4gICAgfVxufVxuXG4uY3JlYXRlLWNhbmNlbC1zbWFsbCB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAuYnRuIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBoZWlnaHQ6IDM2cHg7XG4gICAgfVxufVxuXG4vLyBjc3MgZm9yIGVkaXQgLmNvdXJzZVxuLmVkaXQtdmlldy1vZi1jb3VzZSB7XG4gICAgJj50cj50ZCB7XG4gICAgICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuLmNvdXJzZS1saXN0LWVkaXQge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAxcHggI2M2YzRjNCBpbnNldDtcbiAgICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICAuZXZvYy1ib3gge1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAuZmllbGQtY2hlY2tib3gtd3JhcHBlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIGxhYmVsIHtcbiAgICAgICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgICAgICB0b3A6IC0zcHg7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5jZS1saXN0LXRvcCB7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gICAgbGFiZWwge1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgIH1cbiAgICBzcGFuIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgbWFyZ2luOiAwIDVweDtcbiAgICB9XG59XG5cbi5jZS1saXN0LWJvdHRvbSB7XG4gICAgLnRhYmxlLXJlc3BvbnNpdmUge1xuICAgICAgICB0Ym9keSB7XG4gICAgICAgICAgICB0ciB7XG4gICAgICAgICAgICAgICAgdGgge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZDhkOGQ4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0ZCB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDdweCAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWRlZGVkO1xuICAgICAgICAgICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICB0ZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgICAgIHRkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmZpZWxkLWNoZWNrYm94LXdyYXBwZXIgLmZvcm0tY2hlY2tib3grbGFiZWw6YmVmb3JlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjcpIHJvdGF0ZSgtNDVkZWcpO1xuICAgIH1cbiAgICAuZmllbGQtY2hlY2tib3gtd3JhcHBlciAuZm9ybS1jaGVja2JveCtsYWJlbDphZnRlciB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC42KTtcbiAgICB9XG59XG50ciB0ZCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5sYWJlbCB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi50YWJsZS1yZXNwb25zaXZlIHtcbiAgICB0aCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICAgICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5maWVsZC1jaGVja2JveC13cmFwcGVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICAgICAgLmZvcm0tY2hlY2tib3grbGFiZWw6YWZ0ZXIge1xuICAgICAgICAgICAgd2lkdGg6IDE2cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIGhlaWdodDogMTZweCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uZGVsZXRlLWJ0biB7XG4gICAgYSB7XG4gICAgICAgIGNvbG9yOiAjZjQ0MzM2O1xuICAgICAgICBpIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uY2xvc2UtYWNjb3Ige1xuICAgIGZsb2F0OiByaWdodDtcbiAgICB3aWR0aDogMjRweDtcbiAgICBmb250LXNpemU6IDMxcHg7XG4gICAgaGVpZ2h0OiAyNHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6ICRjb21tb24tYmx1ZTtcbiAgICBmb250LXdlaWdodDogNDAwO1xufVxuXG4vLyBzY2hlZHVsZS1jbGFzcy1ib3ggY3NzXG4uc2NoZWR1bGUtY2xhc3MtYm94IHtcbiAgICAuZmlsdGVyLWJveCB7XG4gICAgICAgIC5maWVsZC13cmFwcGVyIC5mb3JtLWN0cmwge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgIH1cbiAgICAgICAgLmZpZWxkLXdyYXBwZXIge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmZ1bGxCbHVlLmJ0biB7XG4gICAgICAgICAgICB3aWR0aDogMTIwcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5zY2hlZHVsZS1jbGFzcyB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICAgIC5idG4ge1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICB9XG4gICAgLnNjaGVkdWxlLWNsYXNzLWxlZnQge1xuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuZnVsbEJsdWUge31cbn1cblxuLnZpZXctdGFiIHtcbiAgICBsaSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgICAgIC5idG4ge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTJweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnZpZXctYy1kZXRhaWwge1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAuZmlsdGVyLXNlYXJjaCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIC5leHBvcnQtcHJpbnQge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAudmNkLWwge1xuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmNhbGVuZGVyLWNvdXJzZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC5jLWNvbnRyb2wge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQ6ICNlZmVmZWY7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2NjY2M7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgJi5jYWwtbGVmdCB7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltYWdlcy9sZWZ0X2Fycm93LnN2ZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMXB4O1xuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGNvbW1vbi1ibHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICYuY2FsLXJpZ2h0IHtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltYWdlcy9yaWdodF9hcnJvdy5zdmcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTFweDtcbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRjb21tb24tYmx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICB1bCB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xuICAgICAgICBsaSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMGYwZjA7XG4gICAgICAgICAgICB3aWR0aDogOC44JTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlZmVmZWY7XG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgICAgICAgc3Bhbi5jLWRhdGUge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogJGNvbW1vbi1ibHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNkZGVkZmQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmNsYXNzLWNhbmNlbCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAxMnB4O1xuICAgIGhlaWdodDogMTJweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICYuYmx1ZSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICRjb21tb24tYmx1ZTtcbiAgICB9XG4gICAgJi5yZWQge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZWQ7XG4gICAgfVxuICAgICYueWVsbG93IHtcbiAgICAgICAgYmFja2dyb3VuZDogI2Y4YjIzODtcbiAgICB9XG59XG5cbi5leGFtLWlzIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDEycHg7XG4gICAgaGVpZ2h0OiAxMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kOiAjZjhiMjM4O1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5jbGFzcy1pcyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAxMnB4O1xuICAgIGhlaWdodDogMTJweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZDogJGNvbW1vbi1ibHVlO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5jYWxlbmRlci1jbGFzcy1kZXRhaWwge1xuICAgICY+ZGl2Omxhc3QtY2hpbGQge1xuICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5jYWxlbmRlci12aWV3MSB7XG4gICAgdGgge1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgLnRhYmxlLXJlc3BvbnNpdmUge1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIH1cbiAgICAudGFibGUtYWNjb3ItaGVhZCB7XG4gICAgICAgIC5vcGVuLWFjY29yIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgICAgIC5jbG9zZS1hY2NvciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICAgIC5hY2NvcmRpYW4taGVhZGluZyB7XG4gICAgICAgICAgICAgICAgLm9wZW4tYWNjb3Ige1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuY2xvc2UtYWNjb3Ige1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnRhYmxlLWFjY29yLWhlYWQgdGQge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIH1cbiAgICAuYWNjb3JkaWFuLWhlYWRpbmcgaDQge1xuICAgICAgICBwYWRkaW5nOiAzcHggIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6ICM0NDQ7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlYWVjZWU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgIG1hcmdpbjogNHB4IDAgMnB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZTZmMmZlO1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAub3Blbi1hY2NvcixcbiAgICAgICAgLmNsb3NlLWFjY29yIHtcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICB9XG4gICAgICAgIC5jbG9zZS1hY2NvciB7XG4gICAgICAgICAgICB3aWR0aDogMThweDtcbiAgICAgICAgICAgIGhlaWdodDogMThweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMXB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgfVxuICAgICAgICAub3Blbi1hY2NvciB7XG4gICAgICAgICAgICB3aWR0aDogMThweDtcbiAgICAgICAgICAgIGhlaWdodDogMThweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgfVxuICAgICAgICAuZGF0ZS1jIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICB9XG4gICAgICAgIC5kZWxldGUtaWNvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICBjb2xvcjogI2Y0NDMzNjtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA5cHg7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDNweDtcbiAgICAgICAgICAgICAgICBsaW5lIHtcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlLXdpZHRoOiAyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmRlbGV0ZS1idG4ge1xuICAgIHN2ZyB7XG4gICAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIG1hcmdpbi10b3A6IDNweDtcbiAgICAgICAgbGluZSB7XG4gICAgICAgICAgICBzdHJva2Utd2lkdGg6IDI7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5tYWlsLW5vdGlmaWNhdGlvbiB7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvbWlhbF9ub3RpZmljYXRpb24uc3ZnJykgbm8tcmVwZWF0O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5tYWlsLW5vdGlmeSB7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvbWFpbF9ub3RpZnkuc3ZnJykgbm8tcmVwZWF0O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5yZXNjaGVkdWxlLWljb24ge1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL3Jlc2NoZWR1bGVfY2xhc3Muc3ZnJykgbm8tcmVwZWF0O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5hY3Rpb24tYm94IHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICB3aWR0aDogMTE1cHg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIC5kZWxldGUtYnRuIHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBjb2xvcjogI2Y0NDMzNjtcbiAgICB9XG4gICAgc3BhbiB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgbWFyZ2luOiAwIDhweCAwIDA7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gICAgLmVkaXQtaWNvbiB7XG4gICAgICAgIHdpZHRoOiAxOXB4O1xuICAgICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgfVxufVxuXG4uZWRpdC1pY29uIHtcbiAgICAvLyBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZWRpdF9kZXRhaWxzLnN2ZycpIG5vLXJlcGVhdDtcbiAgICB3aWR0aDogMTlweDtcbiAgICBoZWlnaHQ6IDE5cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi50aWNrLW1hcmsxIHtcbiAgICB3aWR0aDogMTVweDtcbiAgICBoZWlnaHQ6IDZweDtcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIGdyZWVuO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBncmVlbjtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIG1hcmdpbi10b3A6IDFweDtcbn1cblxuLmxlZGdlbmQtZm9vdGVyIHtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIGxhYmVsIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICAgIH1cbiAgICBkaXYge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5kYXRlLWFycm93IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGl2IHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBwYWRkaW5nOiA0cHggMjBweDtcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG4gICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgbGVmdDogMjBweDtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXFxmMTA0XCI7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBmb250OiBub3JtYWwgbm9ybWFsIG5vcm1hbCAxNHB4LzEgRm9udEF3ZXNvbWU7XG4gICAgICAgICAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgICAgICAgICB0ZXh0LXJlbmRlcmluZzogYXV0bztcbiAgICAgICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgICAgICAgICAgd2lkdGg6IDVweDtcbiAgICAgICAgICAgIGhlaWdodDogMTZweDtcbiAgICAgICAgfVxuICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICByaWdodDogMjBweDtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXFxmMTA1XCI7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBmb250OiBub3JtYWwgbm9ybWFsIG5vcm1hbCAxNHB4LzEgRm9udEF3ZXNvbWU7XG4gICAgICAgICAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgICAgICAgICB0ZXh0LXJlbmRlcmluZzogYXV0bztcbiAgICAgICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgICAgICAgICAgd2lkdGg6IDVweDtcbiAgICAgICAgICAgIGhlaWdodDogMTZweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAmOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHRvcDogMjBweDtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICB3aWR0aDogODglO1xuICAgICAgICBoZWlnaHQ6IDBweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gICAgfVxufVxuXG4vLyBzZWNvbmQgY2FsZW5kZXIgLmNvdXJzZS1zZWNvbmRcbi5jYWxlbmRlci12aWV3MS5jYWwtdmlldy0yIHtcbiAgICAuYWNjb3JkaWFuLWhlYWRpbmcgaDQgLm9wZW4tYWNjb3IsXG4gICAgLmFjY29yZGlhbi1oZWFkaW5nIGg0IC5jbG9zZS1hY2NvciB7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIH1cbiAgICB0ZCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICB9XG4gICAgICAgIC5hY2NvcmRpYW4taGVhZGluZyBoNCAuZGF0ZS1jIHtcbiAgICAgICAgICAgIGNvbG9yOiAjMDA0YTdlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4ubmV3LWFjdGlvbiB7XG4gICAgJj5kaXYge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cbiAgICAgICAgJj5kaXYge1xuICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uY2FsLXZpZXctMiB7XG4gICAgLmFjdGlvbi1ib3gsXG4gICAgLm5ldy1hY3Rpb24ge1xuICAgICAgICB3aWR0aDogNjVweDtcbiAgICB9XG4gICAgLmFjdGlvbi1ib3gge1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gICAgICAgIG1hcmdpbjogNXB4IDA7XG4gICAgfVxufVxuXG4ucmVhZC1tb3JlLXZpZXcge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGNvbG9yOiAjMDA0YTdlO1xufVxuXG4ubmV3LXRpY2stbWFyayB7XG4gICAgaGVpZ2h0OiA3MnB4O1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICNmZmY7XG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAudGljay1tYXJrMSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgfVxufVxuXG4udGljay1tYXJrLW5ldyB7XG4gICAgJj5kaXYge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgfVxufVxuXG4vLyBjcmVhdGUgY2xhc3MgLnNjaGVkdWxlLWNsYXNzXG4uY291cnNlLWRldGFpbC1zZWN0aW9uIHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIC5jZC1zIHtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cbiAgICBsYWJlbCB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICB9XG4gICAgc3BhbiB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICB9XG59XG5cbi5zY2hlZHVsZS1jbGFzcy1pbm5lciB7XG4gICAgcGFkZGluZzogMjBweCAxNXB4IDI1cHg7XG4gICAgYmFja2dyb3VuZDogI2VmZWZlZjtcbiAgICAuZm9ybS1jdHJsIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIH1cbiAgICAucy1jLTEge1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBmb250LXdlaWdodDogMTRweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICAgIH1cbiAgICAuY2hvb3NlLWNsYXNzLXR5cGUge1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAuZmllbGQtcmFkaW8td3JhcHBlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnNlbGVjdC1kYXlzIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgfVxuICAgICAgICAuZmllbGQtY2hlY2tib3gtd3JhcHBlciB7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyJTtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyJTtcbiAgICAgICAgICAgIC5mb3JtLWNoZWNrYm94K2xhYmVsOmFmdGVyIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZm9ybS1jaGVja2JveCtsYWJlbDpiZWZvcmUge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgc2NhbGUoMC43KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmNyZWF0ZS1jbGFzcy1zY2hlZHVsZSB7XG4gICAgaDQge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgfVxufVxuXG4ucy1mb3JtLWNvbnRyb2wge1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjY2M7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAwMHB4KSBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gICAgLmNhbGVuZGVyLWNvdXJzZSB1bCBsaSB7XG4gICAgICAgIHdpZHRoOiA4JTtcbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTlweCkge1xuICAgIC5jYWxlbmRlci1jb3Vyc2UgdWwgbGkge1xuICAgICAgICB3aWR0aDogNiU7XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XG4gICAgLmNhbGVuZGVyLWNsYXNzLWRldGFpbCB7XG4gICAgICAgICY+ZGl2IHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgICY+ZGl2Omxhc3QtY2hpbGQgc3BhbiB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjdweCkge1xuICAgIC5jb21tb24tdGFiIHVsIGxpIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICB3aWR0aDogMjAlO1xuICAgICAgICBhIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCA1cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmZpbHRlci1mb3ItY291cnNlcyB7XG4gICAgICAgIGxhYmVsIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmZpbHRlci1zZWFyY2gge1xuICAgICAgICAgICAgLmJ0biB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5yYWRpby1vcHRpb25zIHtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgLmZpZWxkLXJhZGlvLXdyYXBwZXIge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmNyZWF0ZS1zdGFuZGFyZC1mb3JtIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgIH1cbiAgICAuY3JlYXRlLWNhbmNlbC1zbWFsbCAuYnRuIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICB9XG4gICAgLnNjaGVkdWxlLWNsYXNzLWJveCAuZmlsdGVyLWJveCAuZnVsbEJsdWUuYnRuIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG4gICAgLnNjaGVkdWxlLWNsYXNzIC5zY2hlZHVsZS1jbGFzcy1sZWZ0IHtcbiAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgIH1cbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnNjaGVkdWxlLWNsYXNzIC5idG4ge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIH1cbiAgICAudmlldy10YWIgbGkgLmJ0biB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG4gICAgLmNhbGVuZGVyLWNvdXJzZSB1bCBsaSB7XG4gICAgICAgIHBhZGRpbmc6IDVweCA1cHg7XG4gICAgICAgIHdpZHRoOiAxNyU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICB9XG4gICAgLmxlZGdlbmQtZm9vdGVyIHtcbiAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgZGl2IHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuY2FsLXZpZXcge1xuICAgICAgICAubWlkZGxlLXRvcCB7XG4gICAgICAgICAgICAuYnRuIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5jb3Vyc2VzLWxpc3QtdGFibGUsXG4gICAgLmNhbGVuZGVyLXZpZXcxIHtcbiAgICAgICAgdGFibGUge1xuICAgICAgICAgICAgbWluLXdpZHRoOiA2MDBweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuY2FsZW5kZXItY291cnNlIHVsIGxpIHNwYW4uYy1kYXRlIHtcbiAgICAgICAgZm9udC1zaXplOiAxOXB4O1xuICAgIH1cbiAgICAuZGF0ZS1hcnJvdzphZnRlciB7XG4gICAgICAgIHdpZHRoOiA3MiU7XG4gICAgfVxuICAgIC5jb3Vyc2UtZGV0YWlsLXNlY3Rpb24ge1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAmPmRpdiB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmZpbHRlci1ib3gge1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgICB9XG4gICAgLnBvcHVwLWJ0biAuYnRuIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBoZWlnaHQ6IDMycHg7XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyMHB4KSB7XG4gICAgLmNvbW1vbi10YWIgdWwgbGkge1xuICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgYSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmZpZWxkLWNoZWNrYm94LXdyYXBwZXIgLmZvcm0tY2hlY2tib3grbGFiZWwge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxufVxuXG50YWJsZSB7XG4gICAgdGhlYWQge1xuICAgICAgICB0ciB7XG4gICAgICAgICAgICB0aCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHRib2R5IHtcbiAgICAgICAgdHIge1xuICAgICAgICAgICAgdGQge1xuICAgICAgICAgICAgICAgIC8vIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgIC5lZGl0T3B0aW9ucyBsaSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZmllbGQtd3JhcHBlciB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgLmZvcm0tY3RybCB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggMHB4IDBweCA1cHg7XG4gICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNnB4O1xuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuZGlzcGxheUNvbXAge1xuICAgICAgICAgICAgLnZpZXctY29tcCB7fVxuICAgICAgICAgICAgLmVkaXQtY29tcCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5lZGl0Q29tcCB7XG4gICAgICAgICAgICAudmlldy1jb21wIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZWRpdC1jb21wIHt9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5tYXJnaW5FeHRyYSB7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG4uY2xvc2VCdG5DbGFzcyB7XG4gICAgbGluZS1oZWlnaHQ6IDAuNnJlbSAhaW1wb3J0YW50O1xufVxuXG4uc2VhcmNoLWZpbHRlci13cmFwcGVyIHtcbiAgICAubm9ybWFsLWZpZWxkIHtcbiAgICAgICAgcGFkZGluZzogNHB4IDEwcHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIH1cbiAgICAuZmllbGQtd3JhcHBlciB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50O1xuICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xuICAgICAgICAuZm9ybS1jdHJsIHtcbiAgICAgICAgICAgIGZvbnQ6IDQwMCAxMnB4ICdPcGVuIHNhbnMnLHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBib3JkZXItdG9wOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmZpZWxkLXdyYXBwZXIgbGFiZWwge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbiAgICAgICAgbGVmdDogMTAlICFpbXBvcnRhbnQ7XG4gICAgICAgIHRvcDogMSUgIWltcG9ydGFudDtcbiAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICBsZWZ0OiA4NSUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIHRvcDogMTBweCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4kY29sb3ItYmFzZTogI2VmZWZlZjtcbiRjb2xvci1oaWdobGlnaHQ6IGxpZ2h0ZW4oJGNvbG9yLWJhc2UsXG43JSk7XG4uc2tlbGV0b24ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdpZHRoOiA4MCU7XG4gICAgaGVpZ2h0OiAxMnB4O1xuICAgIGJhY2tncm91bmQ6ICRjb2xvci1iYXNlO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAmOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAkY29sb3ItYmFzZSwgJGNvbG9yLWhpZ2hsaWdodCwgJGNvbG9yLWJhc2UpO1xuICAgICAgICBhbmltYXRpb246IHByb2dyZXNzIDFzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBwcm9ncmVzcyB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCk7XG4gICAgfVxufVxuXG4gIH0iLCIkcHVsbC1MOiBsZWZ0O1xuJHB1bGwtUjogcmlnaHQ7XG4kcHVsbC1ub25lOiBub25lO1xuJGZ1bGwtd2lkdGg6IDEwMCU7XG4kYm9yZGVyLWJveDogYm9yZGVyLWJveDtcbiRib3JkZXItY29sb3I6ICNkZWVhZWU7XG4kYmctd2hpdGU6ICNmZmY7XG4kZXJyb3ItY29sb3I6ICNmZjAwMDA7XG4kY29tbW9uLWJsdWU6ICMwMDg0ZjY7XG4kcHJpbWFyeS1jb2xvcjogIzMzMztcbiRib3JkZXItY29tbW9uOiNlYWVhZWI7XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1oZWFkZXIgY29sb3JzPT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4kaGVhZGVyLWJnOiMwMDYwQTM7XG4kaGVhZGVyLWJvcmRlcjojZWFlYWViO1xuJGxlZnRNZW51Qmc6I2ZhZmFmYTtcbiRsZWZ0TWVudUhvdmVyQmc6IzAwODRmNjtcbiRsZWZ0TWVudVRleHRIb3ZlckNvbG9yOiNmZmY7XG4kcmVkQnRuOiNmNDQzMzY7XG4kYm9yZGVyY2NjOiNjY2M7XG4kbGlnaHRCbHVlOiNlZmY3ZmY7XG4kdGFibGVIZWFkaW5nQmdDb2xvcjogIzAwNGE3ZTtcbi50YWJsZS1mb3JtYXQtZmlyc3Qge1xuICAgIC50YWJsZS1yZXNwb25zaXZlIHtcbiAgICAgICAgdGFibGUge1xuICAgICAgICAgICAgdGgsXG4gICAgICAgICAgICB0ZCB7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGgge1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRib2R5IHtcbiAgICAgICAgICAgICAgICB0ciB7XG4gICAgICAgICAgICAgICAgICAgIHRkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maWVsZC1jaGVja2JveC13cmFwcGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGluaXRpYWw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mb3JtLWNoZWNrYm94IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZvcm0tY2hlY2tib3grbGFiZWwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA3cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6YWZ0ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuZmEtdHJhc2gtbyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRyZWRCdG47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4udGFibGUtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAuaGVhZGluZy1jb250YWluZXIge1xuICAgICAgYmFja2dyb3VuZDogI2UwZWFlYztcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICAgIC5oZWFkaW5nLWl0ZW0ge1xuICAgICAgICB3aWR0aDogMTAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgfVxuICAgIC52YWx1ZS1vdXRlci1jb250YWluZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBtaW4taGVpZ2h0OiA1M3ZoO1xuICAgICAgbWF4LWhlaWdodDogNTR2aDtcbiAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgLnZhbHVlLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgICAgIC52YWx1ZS1pdGVtIHtcbiAgICAgICAgICB3aWR0aDogMTAlO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/components/course-module/create-course/course-home/schedule-home.component.ts":
    /*!***********************************************************************************************!*\
      !*** ./src/app/components/course-module/create-course/course-home/schedule-home.component.ts ***!
      \***********************************************************************************************/

    /*! exports provided: ScheduleHomeComponent */

    /***/
    function srcAppComponentsCourseModuleCreateCourseCourseHomeScheduleHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScheduleHomeComponent", function () {
        return ScheduleHomeComponent;
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


      var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! moment */
      "./node_modules/moment/moment.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/Rx */
      "./node_modules/rxjs/Rx.js");
      /* harmony import */


      var rxjs_Rx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _model_role_features__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../model/role_features */
      "./src/app/model/role_features.ts");
      /* harmony import */


      var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../services/authenticator.service */
      "./src/app/services/authenticator.service.ts");
      /* harmony import */


      var _services_course_services_standard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../services/course-services/standard.service */
      "./src/app/services/course-services/standard.service.ts");

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

      var ScheduleHomeComponent =
      /** @class */
      function () {
        var ScheduleHomeComponent = /*#__PURE__*/function () {
          function ScheduleHomeComponent(apiService, toastCtrl, route, auth) {
            _classCallCheck(this, ScheduleHomeComponent);

            this.apiService = apiService;
            this.toastCtrl = toastCtrl;
            this.route = route;
            this.auth = auth;
            this.no_standard_name = false;
            this.standardListDataSource = [];
            this.sizeArr = [25, 50, 100, 150, 200, 500, 1000];
            this.displayBatchSize = 25;
            this.standardList = [];
            this.PageIndex = 1;
            this.createNewStandard = false;
            this.newStandardDetails = {
              is_active: "Y",
              standard_name: ""
            };
            this.searchedData = [];
            this.searchDataFlag = false;
            this.dummyArr = [0, 1, 2, 3, 4, 0, 1, 2, 3, 4];
            this.columnMaps = [0, 1, 2, 3, 4];
            this.dataStatus = 1;
            this.isLangInstitue = false;
            this.sortingDir = "asc";
            this.role_feature = _model_role_features__WEBPACK_IMPORTED_MODULE_5__["role"].features;
            this.isEdit = false;
            this.activeList = true;
          }

          _createClass(ScheduleHomeComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.checkWhichTabIsOpen();
              this.checkInstituteType();
              this.getAllStandardList();
            }
          }, {
            key: "getAllStandardList",
            value: function getAllStandardList() {
              var _this = this;

              this.PageIndex = 1;
              this.auth.showLoader();
              this.apiService.getAllStandardListFromServer().subscribe(function (data) {
                data.sort(function (a, b) {
                  return moment__WEBPACK_IMPORTED_MODULE_2__(a.created_date).unix() - moment__WEBPACK_IMPORTED_MODULE_2__(b.created_date).unix();
                });

                if (_this.activeList == true) {
                  _this.standardListDataSource = [];

                  for (var i = 0; i < data.length; i++) {
                    if (data[i].is_active === "Y") {
                      _this.standardListDataSource.push(data[i]);
                    }
                  }

                  console.log("active", _this.standardListDataSource);
                  _this.totalRow = _this.standardListDataSource.length;

                  _this.standardListDataSource.reverse();

                  _this.fetchTableDataByPage(_this.PageIndex);

                  _this.auth.hideLoader();

                  _this.dataStatus = 2;
                } else if (_this.activeList == false) {
                  _this.standardListDataSource = [];

                  for (var _i = 0; _i < data.length; _i++) {
                    if (data[_i].is_active === "N") {
                      _this.standardListDataSource.push(data[_i]);
                    }
                  }

                  console.log("Not active", _this.standardListDataSource);
                  _this.totalRow = _this.standardListDataSource.length;

                  _this.standardListDataSource.reverse();

                  _this.fetchTableDataByPage(_this.PageIndex);

                  _this.auth.hideLoader();

                  _this.dataStatus = 2;
                } // this.standardListDataSource = data;
                // this.standardListDataSource.reverse();
                // this.fetchTableDataByPage(this.PageIndex);
                // this.auth.hideLoader();
                // this.dataStatus = 2;

              }, function (error) {
                _this.auth.hideLoader();

                var data = {
                  type: "error",
                  title: "",
                  body: "Please refresh the page."
                };

                _this.toastCtrl.popToast(data);
              });
            }
            /* Function to set the createNewStandard View On/Off */

          }, {
            key: "toggleCreateNewStandard",
            value: function toggleCreateNewStandard() {
              if (this.createNewStandard == false) {
                this.createNewStandard = true; // document.getElementById('showCloseBtn').style.display = '';
                // document.getElementById('showAddBtn').style.display = 'none';
              } else {
                this.newStandardDetails = {
                  is_active: "Y",
                  standard_name: ""
                };
                this.no_standard_name = false;
                this.createNewStandard = false; // document.getElementById('showCloseBtn').style.display = 'none';
                // document.getElementById('showAddBtn').style.display = '';
              }
            }
            /* Function to create a New Standard */

          }, {
            key: "addNewStandard",
            value: function addNewStandard() {
              var _this2 = this;

              if (this.newStandardDetails.standard_name == "") {
                this.no_standard_name = true;
                var msg = this.isLangInstitue != true ? 'Please enter valid Standard Name' : 'Please enter valid Master Course';
                var data = {
                  type: "error",
                  title: '',
                  body: msg
                };
                this.toastCtrl.popToast(data);
              } else {
                this.auth.showLoader();

                if (this.newStandardDetails.is_active == true || this.newStandardDetails.is_active == "Y") {
                  this.newStandardDetails.is_active = "Y";
                } else {
                  this.newStandardDetails.is_active = "N";
                }

                this.apiService.createNewStandard(this.newStandardDetails).subscribe(function (res) {
                  var msg = "";
                  var titleMsg = "";

                  if (_this2.isLangInstitue) {
                    titleMsg = "";
                    msg = "Master Course added successfully";
                  } else {
                    titleMsg = "";
                    msg = "Standard created successfully";
                  }

                  var data = {
                    type: "success",
                    title: titleMsg,
                    body: msg
                  };

                  _this2.toastCtrl.popToast(data);

                  _this2.closePopup();

                  _this2.getAllStandardList();

                  _this2.auth.hideLoader();

                  _this2.no_standard_name = false;

                  _this2.toggleCreateNewStandard();
                }, function (err) {
                  _this2.auth.hideLoader();

                  var data = {
                    type: "error",
                    title: "",
                    body: err.error.message
                  };

                  _this2.toastCtrl.popToast(data);
                });
              }
            }
          }, {
            key: "searchInList",
            value: function searchInList(element) {
              if (element.value != "" && element.value != null) {
                var searchData = this.standardListDataSource.filter(function (item) {
                  return Object.keys(item).some(function (k) {
                    return item[k] != null && item[k].toString().toLowerCase().includes(element.value.toLowerCase());
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
                this.totalRow = this.standardListDataSource.length;
              }
            }
          }, {
            key: "editRow",
            value: function editRow(obj) {
              this.isEdit = true;
              console.log(obj);
              this.newStandardDetails.standard_name = obj.standard_name;
              this.newStandardDetails.is_active = obj.is_active == 'Y' ? true : false;
              this.newStandardDetails.institution_id = obj.institution_id;
              this.newStandardDetails.standard_id = obj.standard_id;
              $('#standardModal').modal('show'); // document.getElementById(("row" + id).toString()).classList.remove('displayComp');
              // document.getElementById(("row" + id).toString()).classList.add('editComp');
            }
          }, {
            key: "cancelRow",
            value: function cancelRow(id) {
              document.getElementById(("row" + id).toString()).classList.remove('editComp');
              document.getElementById(("row" + id).toString()).classList.add('displayComp');
              this.getAllStandardList();
            }
          }, {
            key: "saveStandard",
            value: function saveStandard() {
              this.isEdit ? this.updateRow() : this.addNewStandard();
            }
          }, {
            key: "updateRow",
            value: function updateRow() {
              var _this3 = this;

              if (this.newStandardDetails.standard_name == "") {
                this.no_standard_name = true;
                var msg = this.isLangInstitue != true ? 'Please enter valid Standard Name' : 'Please enter valid Master Course';
                var data = {
                  type: "error",
                  title: '',
                  body: msg
                };
                this.toastCtrl.popToast(data);
              } else {
                var _data = {};
                _data.is_active = this.newStandardDetails.is_active ? 'Y' : 'N';
                _data.standard_name = this.newStandardDetails.standard_name;
                _data.institution_id = this.newStandardDetails.institution_id;
                this.auth.showLoader();
                this.apiService.updateStanadardRowData(_data, this.newStandardDetails.standard_id).subscribe(function (data) {
                  var tempMsg = _this3.isLangInstitue ? 'Master Course Updated Successfully' : 'Standard Updated Successfully!';
                  var msg = {
                    type: "success",
                    title: "",
                    body: tempMsg
                  };

                  _this3.toastCtrl.popToast(msg);

                  _this3.closePopup();

                  _this3.getAllStandardList(); // this.cancelRow(id);


                  _this3.auth.hideLoader();
                }, function (error) {
                  _this3.auth.hideLoader();

                  var data = {
                    type: "error",
                    title: "",
                    body: error.error.message
                  };

                  _this3.toastCtrl.popToast(data);
                });
              }
            }
          }, {
            key: "clickSN",
            value: function clickSN() {
              document.getElementById('StdName').focus();
            }
          }, {
            key: "deleteRow",
            value: function deleteRow(data) {
              var _this4 = this;

              if (confirm('Are you sure you want to delete?')) {
                this.auth.showLoader();
                this.apiService.deleteStandard(data.standard_id).subscribe(function (res) {
                  _this4.auth.hideLoader();

                  var data = {
                    type: "success",
                    title: '',
                    body: "Deleted Successfully"
                  };

                  _this4.toastCtrl.popToast(data);

                  _this4.getAllStandardList();
                }, function (err) {
                  _this4.auth.hideLoader();

                  var data = {
                    type: "error",
                    title: '',
                    body: err.error.message
                  };

                  _this4.toastCtrl.popToast(data);
                });
              }
            }
          }, {
            key: "closePopup",
            value: function closePopup() {
              this.isEdit = false;
              $('#standardModal').modal('hide');
              this.newStandardDetails = {
                is_active: "Y",
                standard_name: "",
                standard_id: ''
              };
            } // pagination functions

          }, {
            key: "fetchTableDataByPage",
            value: function fetchTableDataByPage(index) {
              this.PageIndex = index;
              var startindex = this.displayBatchSize * (index - 1);
              this.standardList = this.getDataFromDataSource(startindex);
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
            key: "updateTableBatchSize",
            value: function updateTableBatchSize(event) {
              this.PageIndex = 1;
              this.displayBatchSize = event;
              this.fetchTableDataByPage(this.PageIndex);
            }
          }, {
            key: "getDataFromDataSource",
            value: function getDataFromDataSource(startindex) {
              var data = [];

              if (this.searchDataFlag == true) {
                data = this.searchedData.slice(startindex, startindex + this.displayBatchSize);
              } else {
                data = this.standardListDataSource.slice(startindex, startindex + this.displayBatchSize);
              }

              return data;
            }
          }, {
            key: "rowClickEvent",
            value: function rowClickEvent(row) {
              this.selectedRow = row;
            }
          }, {
            key: "sortTable",
            value: function sortTable(str) {
              if (str == "standard_name" || str == "is_active") {
                this.standardListDataSource.sort(function (a, b) {
                  var nameA = a[str].toUpperCase(); // ignore upper and lowercase

                  var nameB = b[str].toUpperCase(); // ignore upper and lowercase

                  if (nameA < nameB) {
                    return -1;
                  }

                  if (nameA > nameB) {
                    return 1;
                  } // names must be equal


                  return 0;
                });
              } else if (str == "standard_id") {
                this.standardListDataSource.sort(function (a, b) {
                  return a[str] - b[str];
                });
              } else if (str == "created_date") {
                this.standardListDataSource.sort(function (a, b) {
                  return moment__WEBPACK_IMPORTED_MODULE_2__(a[str]).unix() - moment__WEBPACK_IMPORTED_MODULE_2__(b[str]).unix();
                });
              }

              if (this.sortingDir == "asc") {
                this.sortingDir = "dec";
              } else {
                this.sortingDir = "asc";
                this.standardListDataSource = this.standardListDataSource.reverse();
              }

              this.fetchTableDataByPage(this.PageIndex);
            }
          }, {
            key: "checkInstituteType",
            value: function checkInstituteType() {
              var _this5 = this;

              var userType = Number(sessionStorage.getItem('userType'));
              var permissionArray = sessionStorage.getItem('permissions');
              this.auth.institute_type.subscribe(function (res) {
                if (res == "LANG") {
                  _this5.isLangInstitue = true;

                  if (userType != 3) {
                    _this5.routeToSubTabsForLang(permissionArray);
                  } else {
                    _this5.teacherLoginFound();
                  }
                } else {
                  _this5.isLangInstitue = false;

                  if (userType != 3) {
                    _this5.routeToSubTabsForNotLang(permissionArray);
                  } else {
                    _this5.teacherLoginFound();
                  }
                }
              });
            }
          }, {
            key: "routeToSubTabsForLang",
            value: function routeToSubTabsForLang(data) {
              // if (this.role_feature.SETUP_MENU) {
              this.route.navigateByUrl('/view/course/create/standardlist'); // } else if (data.indexOf('502') != -1) {
              // this.route.navigateByUrl('/view/course/create/subject');
              // } else if (data.indexOf('401') != -1) {
              // this.route.navigateByUrl('/view/course/create/managebatch');
              // } else if (data.indexOf('402') >= 0 || this.role_feature.CLASS_MENU) {
              // this.route.navigateByUrl('/view/course/create/class');
              // }
            }
          }, {
            key: "routeToSubTabsForNotLang",
            value: function routeToSubTabsForNotLang(data) {
              // if (this.role_feature.SETUP_MENU) {
              this.route.navigateByUrl('/view/course/create/standardlist'); // } else if (data.indexOf('502') != -1) {
              // this.route.navigateByUrl('/view/course/create/subject');
              // } else if (data.indexOf('505') != -1) {
              // this.route.navigateByUrl('/view/course/create/courselist');
              // } else if (data.indexOf('701') >= 0 || this.role_feature.CLASS_MENU) {
              // this.route.navigateByUrl('/view/course/create/class');
              // }
            }
          }, {
            key: "teacherLoginFound",
            value: function teacherLoginFound() {
              if (this.isLangInstitue) {
                this.route.navigateByUrl('/view/course/create/managebatch');
              } else {
                this.route.navigateByUrl('/view/course/create/courselist');
              }
            }
            /* function to set-unset isActive status for add standard */

          }, {
            key: "toggleStandardActive",
            value: function toggleStandardActive(event) {
              if (event) {
                this.newStandardDetails.is_active = "Y";
              } else {
                this.newStandardDetails.is_active = "N";
              }
            }
          }, {
            key: "checkWhichTabIsOpen",
            value: function checkWhichTabIsOpen() {
              var _this6 = this;

              setTimeout(function () {
                _this6.hideAllTabs();

                if (document.getElementById('liStandard')) {
                  document.getElementById('liStandard').classList.add('active');
                }
              }, 200);
            }
          }, {
            key: "hideAllTabs",
            value: function hideAllTabs() {
              var array = ['liStandard', 'liSubject', 'liManageBatch', 'liExam', 'liClass'];
              array.forEach(function (flag) {
                if (document.getElementById(flag)) {
                  document.getElementById(flag).classList.remove('active');
                }
              });
            }
          }]);

          return ScheduleHomeComponent;
        }();

        ScheduleHomeComponent.ctorParameters = function () {
          return [{
            type: _services_course_services_standard_service__WEBPACK_IMPORTED_MODULE_7__["StandardServices"]
          }, {
            type: _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticatorService"]
          }];
        };

        ScheduleHomeComponent.propDecorators = {
          standard_name_label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['#StdName', {
              "static": false
            }]
          }]
        };
        ScheduleHomeComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
          selector: 'app-schedule-home',
          template: __importDefault(__webpack_require__(
          /*! raw-loader!./schedule-home.component.html */
          "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/create-course/course-home/schedule-home.component.html"))["default"],
          styles: [__importDefault(__webpack_require__(
          /*! ./schedule-home.component.scss */
          "./src/app/components/course-module/create-course/course-home/schedule-home.component.scss"))["default"]]
        }), __metadata("design:paramtypes", [_services_course_services_standard_service__WEBPACK_IMPORTED_MODULE_7__["StandardServices"], _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_authenticator_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticatorService"]])], ScheduleHomeComponent);
        return ScheduleHomeComponent;
      }();
      /***/

    },

    /***/
    "./src/app/services/course-services/standard.service.ts":
    /*!**************************************************************!*\
      !*** ./src/app/services/course-services/standard.service.ts ***!
      \**************************************************************/

    /*! exports provided: StandardServices */

    /***/
    function srcAppServicesCourseServicesStandardServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StandardServices", function () {
        return StandardServices;
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

      var StandardServices =
      /** @class */
      function () {
        var StandardServices = /*#__PURE__*/function () {
          function StandardServices(http, auth) {
            var _this7 = this;

            _classCallCheck(this, StandardServices);

            this.http = http;
            this.auth = auth;
            this.baseURL = "";
            this.auth.currentAuthKey.subscribe(function (key) {
              _this7.Authorization = key;
              _this7.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Authorization": _this7.Authorization
              });
            });
            this.auth.currentInstituteId.subscribe(function (id) {
              _this7.institute_id = id;
            });
            this.baseURL = this.auth.getBaseUrl();
          }

          _createClass(StandardServices, [{
            key: "getAllStandardListFromServer",
            value: function getAllStandardListFromServer() {
              var url = this.baseURL + "/api/v1/standards/all/" + this.institute_id;
              return this.http.get(url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (data) {
                return data;
              }, function (error) {
                return error;
              }));
            }
          }, {
            key: "createNewStandard",
            value: function createNewStandard(data) {
              var url = this.baseURL + "/api/v1/standards";
              data.institution_id = this.institute_id;
              return this.http.post(url, data, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }, {
            key: "updateStanadardRowData",
            value: function updateStanadardRowData(data, standard_Id) {
              var url = this.baseURL + "/api/v1/standards/" + standard_Id;
              return this.http.put(url, data, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (data) {
                return data;
              }, function (error) {
                return error;
              }));
            }
          }, {
            key: "deleteStandard",
            value: function deleteStandard(id) {
              var url = this.baseURL + "/api/v1/standards/" + id;
              return this.http["delete"](url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (data) {
                return data;
              }, function (error) {
                return error;
              }));
            }
          }]);

          return StandardServices;
        }();

        StandardServices.ctorParameters = function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }, {
            type: _authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"]
          }];
        };

        StandardServices = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"]])], StandardServices);
        return StandardServices;
      }();
      /***/

    }
  }]);
})();
//# sourceMappingURL=app-components-course-module-create-course-course-home-course-home-module-es5.js.map