(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-components-course-module-data-setup-academic-year-academic-year-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/data-setup/academic-year/academic-year.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/data-setup/academic-year/academic-year.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/data-setup/academic-year/home/home.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/data-setup/academic-year/home/home.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"middle-section clearFix\" style=\"margin-top: 2px;\">\n\n  <section class=\"middle-main clearFix\">\n\n    <!-- <div class=\"clearFix add-edit\">\n      <a (click)=\"toggleCreateNewAcademicYear()\" id=\"toggleCreate\">\n        <i id=\"showAddBtn\" class=\"addBtnClass\">+</i>\n        <i id=\"showCloseBtn\" class=\"closeBtnClass\" style=\"display:none;\">-</i>\n        <span>Add Academic Year</span>\n      </a>\n    </div> -->\n    <!-- <section>\n      <app-basic-table [headers]=\"headerSetting\" [displayData]=\"academicTableList\" [tableSetting]=\"tableSetting\"\n        [rowColumnSetting]=\"rowColumns\" (editView)='editFee($event)' (viewView)='studentsAssigned($event)'>\n    </section> -->\n    <div id=\"Acadmic_Year\" class=\"tab-pane \">\n      <div class=\"w96\">\n        <div>\n          <div class=\"row\">\n            <div class=\"col-lg-12 col-12\">\n              <div class=\"row\">\n                <div class=\"form-inline\">\n                  <div class=\"c-lg-2 c-md-2 c-sm-2\">\n                    <input type=\"text\" class=\"form-control input\" placeholder=\"Acadmic Year*\" name=\"academicYear\"\n                      id=\"academicYear\" [(ngModel)]=\"addAcademicYearTemplate.inst_acad_year\"\n                      style=\"border-radius: 4px;\">\n\n                  </div>\n                  <div class=\"c-lg-2 c-md-2 c-sm-2\" style=\"margin:0px 10px\">\n\n\n                    <input type=\"text\" class=\"form-control input\" name=\"academicYearDescription\"\n                      id=\"academicYearDescription\" [(ngModel)]=\"addAcademicYearTemplate.desc\"\n                      placeholder=\"Description*\" style=\"border-radius: 4px;\">\n\n                  </div>\n                  <div class=\"c-lg-2 c-md-2 c-sm-2\">\n                    <div class=\"datePickerBox\" [ngClass]=\"{'has-value':addAcademicYearTemplate.start_date!=''}\">\n\n\n                      <input type=\"text\" class=\"form-ctrl input\" readonly=\"true\" name=\"startDate\" id=\"startDate\"\n                        [(ngModel)]=\"addAcademicYearTemplate.start_date\" placeholder=\"Start Date*\" bsDatepicker\n                        style=\"box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);cursor: pointer;\" />\n\n                    </div>\n                  </div>\n                  <div class=\"c-lg-2 c-md-2 c-sm-2\" style=\"margin:0px 10px\">\n                    <div class=\"datePickerBox\" [ngClass]=\"{'has-value':addAcademicYearTemplate.end_date!=''}\">\n\n\n                      <input type=\"text\" class=\"form-ctrl input\" readonly=\"true\" name=\"academicYear\" id=\"academicYear\"\n                        [(ngModel)]=\"addAcademicYearTemplate.end_date\" placeholder=\"End Date*\" bsDatepicker\n                        style=\"box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);cursor: pointer;\" />\n\n                    </div>\n                  </div>\n                  <button style=\"margin-top: 8px;margin-left: 10px;\" (click)=\"addAcademicYearDetails()\"\n                    class=\"add\">Add</button>\n                </div>\n\n              </div>\n              <!-- </section> -->\n              <!-- <div class=\"row \"  *ngIf=\"!varJson.createNewAcademicYear\" id=\"click\">\n                          <div class=\"col-lg-9 col-12\"></div>\n                          <div class=\"col-lg-3 col-12\">\n                              <span class=\"right\">\n                                  <button (click)=\"toggleCreateNewAcademicYear()\" class=\"search click\">Add Academic Year</button>\n                              </span>\n                          </div>\n                      </div> -->\n            </div>\n          </div>\n        </div>\n        <div>\n        </div>\n      </div>\n    </div>\n    <section>\n      <div id=\"divSlotTable\">\n        <div class=\"table-scroll-wrapper\">\n          <div class=\"table table-responsive\">\n            <table class=\"tableBodyScroll\">\n              <thead>\n                <tr>\n                  <th style=\"text-align: left;\">\n                    Id\n                  </th>\n                  <th style=\"text-align: left;\">\n                    Academic Year\n                  </th>\n                  <th style=\"text-align: left;padding-left: 4%;\">\n                    Description\n                  </th>\n                  <th>\n                    Start Date\n                  </th>\n                  <th>\n                    End Date\n                  </th>\n                  <th>\n                    Added Date\n                  </th>\n                  <th>\n                    Is Default\n                  </th>\n                  <th>\n                    Action\n                  </th>\n                </tr>\n              </thead>\n              <tbody\n                [ngStyle]=\"{'max-height':varJson.createNewAcademicYear == true ? '58vh' : '66vh','min-height':varJson.createNewAcademicYear == true ? '58vh' : '66vh' }\">\n                <tr style=\"box-shadow:-1px 1px 6px 0px rgb(0 0 0 / 10%)\" id=\"row{{i}}\" class=\"displayComp\"\n                  *ngFor=\"let row of academicTableList; let i = index; trackBy: i;\">\n                  <td style=\"text-align: left;\">\n                    {{i + 1}}\n                  </td>\n\n                  <td class=\"view-comp\" style=\"text-align: left;\">\n                    {{row.inst_acad_year}}\n                  </td>\n                  <td class=\"edit-comp\">\n                    <div class=\"field-wrapper\">\n                      <input type=\"text\" class=\"form-ctrl editCellInput\" [(ngModel)]=\"row.inst_acad_year\" name=\"label\"\n                        id=\"txtRowInst\">\n                    </div>\n                  </td>\n                  <td class=\"view-comp\" style=\"padding-left: 4%;\">\n                    {{row.desc}}\n                  </td>\n                  <td class=\"edit-comp\">\n                    <div class=\"field-wrapper\">\n                      <input type=\"text\" class=\"form-ctrl editCellInput\" [(ngModel)]=\"row.desc\" name=\"label\"\n                        id=\"txtRowDesc\">\n                    </div>\n                  </td>\n\n                  <td class=\"view-comp\">\n                    {{row.start_date | date:'dd-MMM-yy'}}\n                  </td>\n                  <td class=\"edit-comp edit\">\n                    <div class=\"field-wrapper has-Value\">\n                      <input type=\"text\" value=\"\" class=\"form-ctrl editCellInput\" name=\"createdDate\" readonly=\"true\"\n                        [(ngModel)]=\"row.start_date\" bsDatepicker id=\"txtRowStartDate\">\n                    </div>\n                  </td>\n                  <td class=\"view-comp edit\">\n                    {{row.end_date | date:'dd-MMM-yy'}}\n                  </td>\n                  <td class=\"edit-comp\">\n                    <div class=\"field-wrapper has-value\">\n                      <input type=\"text\" value=\"\" class=\"form-ctrl editCellInput\" name=\"endDate\" readonly=\"true\"\n                        [(ngModel)]=\"row.end_date\" bsDatepicker id=\"rowEndDate\">\n                    </div>\n                  </td>\n                  <td class=\"view-comp\">\n                    {{row.created_date | date:'dd-MMM-yy'}}\n                  </td>\n                  <td class=\"edit-comp\">\n                    {{row.created_date | date:'dd-MMM-yy'}}\n                    <!-- <div class=\"field-wrapper has-value\">\n                      <input type=\"text\" value=\"\" class=\"form-ctrl editCellInput\" name=\"endDate\" readonly=\"true\"\n                        [(ngModel)]=\"row.created_date\" bsDatepicker id=\"rowCreatedYear\">\n                    </div> -->\n                  </td>\n                  <td class=\"view-comp\">\n                    <span *ngIf=\"row.default_academic_year == 0\">No</span>\n                    <span *ngIf=\"row.default_academic_year == 1\">Yes</span>\n                  </td>\n                  <td class=\"edit-comp\">\n                    <div class=\"field-wrapper has-value\">\n                      <select id=\"issearchable\" class=\"form-ctrl\" name=\"issearchable\"\n                        [(ngModel)]=\"row.default_academic_year\" style=\"margin: auto\">\n                        <option value=\"1\">Yes</option>\n                        <option value=\"0\">No</option>\n                      </select>\n                    </div>\n                  </td>\n                  <td class=\"view-comp\">\n                    <span class=\"right pr-40\">\n                      <a (click)=\"editRowTable(row, i)\" style=\"vertical-align: middle;cursor: pointer;\">\n                        <img src=\"../../../../assets/images/EDit.png\">\n                      </a>\n                      <a aria-hidden=\"true\" (click)=\"deleteAcademicYear(row)\" style=\"cursor: pointer;\" class=\"pl-10\">\n                        <i style=\"color: red;font-size: 18px;font-weight: 400;\" class=\"fa fa-trash\"></i>\n                      </a>\n                    </span>\n                  </td>\n                  <td class=\"edit-comp\">\n                    <span class=\"right pr-40\">\n                      <i class=\"fa fa-floppy-o\" title=\"Save\" style=\"color: blue;margin-right: 10px;font-size: 18px;\"\n                        aria-hidden=\"true\" (click)=\"saveAcademicYearInformation(row , i)\" id=\"saveAcademic\"></i>\n                      <i class=\"fa fa-times\" title=\"Cancel\" style=\"color: red;font-size: 18px;\" aria-hidden=\"true\"\n                        (click)=\"cancelEditRow(i)\" id=\"cancelBtn\"></i>\n                    </span>\n                  </td>\n                </tr>\n                <tr *ngIf=\"academicTableList.length ==0\">\n                  <td class=\"col-new\" colspan=\"8\" style=\"color: black;font-weight: 600\">\n                    No Academic Year List Available\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <!-- Paginator Here -->\n    <div class=\"row filter-res pagination\" style=\"width: 100%;\"\n      [ngStyle]=\"{'margin-top':varJson.createNewAcademicYear == true ? '2px' : '4px','margin-bottom':varJson.createNewAcademicYear == true ? '-10px' : '-20px' }\">\n      <div class=\"c-lg-12 c-md-12 c-sm-12 align-right\">\n        <pagination (goPage)=\"fetchTableDataByPage($event)\" (goNext)=\"fetchNext()\" (goPrev)=\"fetchPrevious()\"\n          [pagesToShow]=\"10\" [page]=\"varJson.PageIndex\" [perPage]=\"varJson.studentdisplaysize\" [sizeArr]=\"sizeArr\"\n          [count]=\"varJson.totalRow\" (sizeChange)=\"updateTableBatchSize($event)\">\n        </pagination>\n      </div>\n    </div>\n  </section>\n\n</div>");

/***/ }),

/***/ "./src/app/components/course-module/data-setup/academic-year/academic-year-routing.module.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/course-module/data-setup/academic-year/academic-year-routing.module.ts ***!
  \***************************************************************************************************/
/*! exports provided: AcademicYearRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcademicYearRoutingModule", function() { return AcademicYearRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _academic_year_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./academic-year.component */ "./src/app/components/course-module/data-setup/academic-year/academic-year.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/components/course-module/data-setup/academic-year/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let AcademicYearRoutingModule = /** @class */ (() => {
    let AcademicYearRoutingModule = class AcademicYearRoutingModule {
    };
    AcademicYearRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _academic_year_component__WEBPACK_IMPORTED_MODULE_2__["AcademicYearComponent"],
                        pathMatch: 'prefix',
                        children: [
                            {
                                path: '',
                                component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
                            },
                            {
                                path: 'list',
                                component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
                                pathMatch: 'prefix',
                            },
                        ]
                    }
                ])
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]
            ],
            providers: [],
            declarations: []
        })
    ], AcademicYearRoutingModule);
    return AcademicYearRoutingModule;
})();



/***/ }),

/***/ "./src/app/components/course-module/data-setup/academic-year/academic-year.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/components/course-module/data-setup/academic-year/academic-year.component.scss ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY291cnNlLW1vZHVsZS9kYXRhLXNldHVwL2FjYWRlbWljLXllYXIvYWNhZGVtaWMteWVhci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/course-module/data-setup/academic-year/academic-year.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/course-module/data-setup/academic-year/academic-year.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: AcademicYearComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcademicYearComponent", function() { return AcademicYearComponent; });
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

let AcademicYearComponent = /** @class */ (() => {
    let AcademicYearComponent = class AcademicYearComponent {
        constructor() {
        }
        /* OnInit recheck the status of li tab and set it to active here */
        ngOnInit() {
            let classArray = ['lione', 'litwo', 'lithree', 'lifour', 'lifive', 'lisix', 'liseven', 'lieight', 'linine', 'lizero'];
            classArray.forEach(function (className) {
                document.getElementById(className) && document.getElementById(className).classList.remove('active');
            });
        }
    };
    AcademicYearComponent.ctorParameters = () => [];
    AcademicYearComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'academic-year',
            template: __importDefault(__webpack_require__(/*! raw-loader!./academic-year.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/data-setup/academic-year/academic-year.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./academic-year.component.scss */ "./src/app/components/course-module/data-setup/academic-year/academic-year.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], AcademicYearComponent);
    return AcademicYearComponent;
})();



/***/ }),

/***/ "./src/app/components/course-module/data-setup/academic-year/academic-year.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/course-module/data-setup/academic-year/academic-year.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: AcademicYearModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcademicYearModule", function() { return AcademicYearModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _master_master_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../master/master.module */ "./src/app/components/master/master.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/components/shared/shared.module.ts");
/* harmony import */ var _academic_year_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./academic-year-routing.module */ "./src/app/components/course-module/data-setup/academic-year/academic-year-routing.module.ts");
/* harmony import */ var _academic_year_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./academic-year.component */ "./src/app/components/course-module/data-setup/academic-year/academic-year.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/components/course-module/data-setup/academic-year/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// import {BsDatepickerConfig, BsDatepickerModule} from 'ngx-bootstrap/datepicker';






let AcademicYearModule = /** @class */ (() => {
    let AcademicYearModule = class AcademicYearModule {
    };
    AcademicYearModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _academic_year_routing_module__WEBPACK_IMPORTED_MODULE_6__["AcademicYearRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                // BsDatepickerModule,
                _master_master_module__WEBPACK_IMPORTED_MODULE_4__["ManageExamModule"]
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ],
            declarations: [
                _academic_year_component__WEBPACK_IMPORTED_MODULE_7__["AcademicYearComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"]
            ],
            providers: [
                _services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]
            ],
            entryComponents: [
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _academic_year_component__WEBPACK_IMPORTED_MODULE_7__["AcademicYearComponent"]
            ]
        })
    ], AcademicYearModule);
    return AcademicYearModule;
})();



/***/ }),

/***/ "./src/app/components/course-module/data-setup/academic-year/home/home.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/components/course-module/data-setup/academic-year/home/home.component.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".breadcrumb-item + .breadcrumb-item::before {\n  content: \">\";\n  color: #334D6E;\n}\n\n.breadcrumb {\n  background-color: #fff;\n  margin-bottom: 0px;\n  padding-left: 0;\n}\n\n.breadcrumb-item > a {\n  color: #334D6E;\n  font-weight: 600;\n  font-size: 16px;\n}\n\n.w98 {\n  width: 100%;\n  margin: 0px auto;\n}\n\n.nav-item .nav-link {\n  font-weight: 600;\n  color: #405877;\n  padding-bottom: 8px;\n  cursor: pointer;\n  font-size: 13px;\n  float: left;\n  background: none;\n}\n\n.nav-item .active {\n  border-bottom: 3px solid #109cf1 !important;\n  color: #109cf1 !important;\n}\n\n.nav-link {\n  display: block;\n  padding: 1.5rem 0rem;\n  margin: -1rem 3.5rem;\n  margin-left: 0rem;\n}\n\n.flex {\n  display: flex;\n}\n\n.w15 {\n  width: 15%;\n  background-color: #dfe5f0;\n  padding: 10px;\n}\n\n.list li {\n  background-color: #fff;\n  padding: 7px 0px;\n  margin: 7px 0px;\n}\n\n.list li a span {\n  text-decoration: none;\n  font-size: 10px;\n  font-weight: 500;\n  color: #334d6e;\n}\n\n.list li img {\n  padding: 0px 10px;\n}\n\n.add_master_tag {\n  background-color: #109cf1;\n  color: white;\n  padding: 10px 20px;\n  font-size: 12px;\n  border: none;\n  border-radius: 5px;\n  margin-top: 15px;\n  margin-left: 10px;\n  font-weight: 600;\n}\n\nselect {\n  padding: 10px 20px;\n  margin: 8px 0;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-size: 10px;\n  font-weight: 500;\n  background-color: #f5f6f8;\n}\n\n.input {\n  margin-top: 15px;\n  margin-left: 10px;\n  padding: 10px 20px;\n  font-size: 12px;\n  padding: 10px 20px;\n  margin: 8px 0;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-size: 12px;\n  font-weight: 500;\n  /*background-color: #f5f6f8;\n*/\n}\n\n.magnifying-glass {\n  background-image: url('Frame1.svg');\n  background-repeat: no-repeat;\n  background-position: left center;\n  text-indent: 5px;\n}\n\n.header-input {\n  padding: 10px 20px;\n  font-size: 12px;\n  padding: 10px 20px;\n  margin: 8px 0;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-size: 10px;\n  font-weight: 600;\n  width: 700px;\n  color: #61758e;\n  background-image: url('Frame1.svg');\n  background-repeat: no-repeat;\n  background-position: left center;\n  /*background-color: #f5f6f8;*/\n}\n\n.header-input::-moz-placeholder {\n  padding-left: 10px;\n}\n\n.header-input:-ms-input-placeholder {\n  padding-left: 10px;\n}\n\n.header-input::placeholder {\n  padding-left: 10px;\n}\n\n.main-shadow {\n  box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  -webkit-box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  -moz-box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  padding-bottom: 15px;\n}\n\n.p-15 {\n  padding-bottom: 15px;\n}\n\nselect {\n  width: 250px;\n  color: #b6b8bb;\n}\n\ntable {\n  width: 100%;\n  font-size: 12px;\n  font-weight: 500;\n  margin-top: 15px;\n}\n\nthead {\n  background-color: #DFE5F0;\n  font-weight: 600;\n}\n\nthead td {\n  background: #DFE5F0;\n}\n\ntd {\n  padding: 10px 15px;\n  color: #323C47;\n  font-size: 12px;\n}\n\ntbody {\n  font-weight: 500;\n}\n\ntr {\n  box-shadow: -1px 1px 6px 0px rgba(0, 0, 0, 0.1);\n  -webkit-box-shadow: -1px 1px 6px 0px rgba(0, 0, 0, 0.1);\n  -moz-box-shadow: -1px 1px 6px 0px rgba(0, 0, 0, 0.1);\n}\n\n.section::before {\n  height: 0.4em;\n  display: table-row;\n  content: '';\n}\n\n.w96 {\n  width: calc(100% - 1rem);\n}\n\n.p-10 {\n  padding-top: 10px;\n}\n\n.p-30 {\n  padding-top: 30px;\n}\n\n.p-10-0 {\n  padding: 9px 0px;\n}\n\n.yes {\n  background-color: #CCFFAC;\n  color: #323C47;\n  padding: 5px 20px;\n  border-radius: 6px;\n}\n\n.no {\n  background-color: #FFCF88;\n  color: #323C47;\n  padding: 5px 20px;\n  border-radius: 6px;\n}\n\n.search {\n  background-color: #109CF1;\n  color: white;\n  padding: 10px 20px;\n  font-size: 12px;\n  border: none;\n  border-radius: 5px;\n  margin-top: 8px;\n  margin-left: 10px;\n  font-weight: 600;\n}\n\n.area-select {\n  font-size: 12px;\n  color: #787A7D;\n}\n\n.input-width {\n  width: 180px;\n}\n\n.pl-10 {\n  padding-left: 10px;\n}\n\n.pr-40 {\n  padding-right: 40px;\n}\n\n.cancel {\n  background-color: #fff;\n  border: 1px solid #109CF1;\n  color: #109CF1;\n  padding: 9px 15px;\n  font-size: 12px;\n  border-radius: 5px;\n  margin-top: 8px;\n  margin-left: 10px;\n  font-weight: 600;\n}\n\n.form-check-label {\n  margin-bottom: 0;\n  color: #334D6E;\n  font-size: 12px;\n  font-weight: 600;\n}\n\n.width205 {\n  width: 205px;\n}\n\n.description {\n  width: 200px;\n  margin: 0px 10px;\n}\n\ninput[type=\"date\"]::-webkit-calendar-picker-indicator {\n  color: rgba(0, 0, 0, 0);\n  opacity: 1;\n  display: block;\n  background: url('Icon.svg') no-repeat;\n  width: 20px;\n  height: 20px;\n  border-width: thin;\n  padding: 2px 0px;\n}\n\ninput[type=\"date\"] {\n  padding: 6px 4px;\n  margin-right: 10px;\n}\n\n.add {\n  background-color: #109CF1;\n  color: white;\n  padding: 10px 20px;\n  font-size: 12px;\n  border: none;\n  border-radius: 5px;\n  font-weight: 600;\n}\n\n.mr-10 {\n  margin-right: 10px;\n}\n\n.center {\n  text-align: center;\n}\n\n.gray {\n  background-color: #F4F3F8;\n  height: 92vh;\n}\n\n/*chatbox*/\n\n.chatbox1 {\n  width: 466px;\n  text-align: center;\n  background-color: #29ACFC;\n  color: #fff;\n  border-radius: 2rem 2rem 0rem 2rem;\n  padding: 8px 0px;\n  font-size: 13px;\n  font-weight: 500;\n}\n\n.chatbox2 {\n  width: 1153px;\n  border-radius: 2rem 2rem 0rem 2rem;\n  background-color: #fff;\n  padding: 10px 0px;\n  font-size: 10px;\n  font-weight: 500;\n}\n\n.chatbox3 {\n  width: 466px;\n  text-align: center;\n  background-color: #29ACFC;\n  color: #fff;\n  border-radius: 2rem 2rem 0rem 2rem;\n  padding: 8px 0px;\n  font-size: 13px;\n  font-weight: 500;\n}\n\n.chatbox4 {\n  width: 1153px;\n  border-radius: 2rem 2rem 0rem 2rem;\n  background-color: #fff;\n  padding: 10px 0px;\n  font-size: 10px;\n  font-weight: 500;\n}\n\n.chatbox5 {\n  width: 466px;\n  text-align: center;\n  background-color: #29ACFC;\n  color: #fff;\n  border-radius: 2rem 2rem 0rem 2rem;\n  padding: 8px 0px;\n  font-size: 13px;\n  font-weight: 500;\n}\n\n.chatbox6 {\n  width: 1033px;\n  border-radius: 2rem 2rem 0rem 2rem;\n  background-color: #fff;\n  padding: 10px 0px;\n  font-size: 10px;\n  font-weight: 500;\n}\n\n.chatbox7 {\n  width: 90px;\n  text-align: center;\n  background-color: #29ACFC;\n  color: #fff;\n  border-radius: 2rem 2rem 0rem 2rem;\n  padding: 8px 0px;\n  font-size: 13px;\n  font-weight: 500;\n}\n\n.chatbox8 {\n  width: 466px;\n  text-align: center;\n  background-color: #29ACFC;\n  color: #fff;\n  border-radius: 2rem 2rem 0rem 2rem;\n  padding: 8px 0px;\n  font-size: 13px;\n  font-weight: 500;\n}\n\n.chatbox9 {\n  width: 819px;\n  border-radius: 2rem 2rem 0rem 2rem;\n  background-color: #fff;\n  padding: 10px 0px;\n  font-size: 10px;\n  font-weight: 500;\n}\n\n.chatbox-select {\n  font-size: 10px;\n}\n\n.chatbox-input {\n  margin-top: 15px;\n  margin-left: 10px;\n  padding: 10px 20px;\n  font-size: 12px;\n  padding: 10px 20px;\n  margin: 8px 0;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-size: 12px;\n  font-weight: 500;\n  background-color: #f3f3f3;\n}\n\n.col-form-label {\n  font-size: 13px;\n  font-weight: 400;\n  color: #AFB3B7;\n}\n\n.upload {\n  background-color: #29ACFC;\n}\n\ninput[type=\"file\"] {\n  visibility: hidden;\n}\n\n#yourBtn {\n  position: relative;\n  top: 40px;\n  width: 100px;\n  padding: 10px;\n  background-color: #29ACFC;\n  cursor: pointer;\n  color: #fff;\n  border-radius: 10px;\n}\n\n.top {\n  position: relative;\n  top: 40px;\n}\n\n.division {\n  border-right: 2px solid #C4C4C4;\n  margin: 40px 0px;\n}\n\n.radio {\n  font-size: 11px;\n  font-weight: 400;\n}\n\n.containerc {\n  display: block;\n  position: relative;\n  padding-left: 20px;\n  margin-bottom: 12px;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.containerc input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n\n.checkmark {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 15px;\n  width: 15px;\n  border: 1px solid #109CF1;\n}\n\n.containerc input:checked ~ .checkmark {\n  background-color: #2196F3;\n}\n\n.checkmark:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n\n.containerc input:checked ~ .checkmark:after {\n  display: block;\n}\n\n.containerc .checkmark:after {\n  left: 5px;\n  top: 0px;\n  width: 5px;\n  height: 10px;\n  border: solid white;\n  border-width: 0 3px 3px 0;\n  transform: rotate(45deg);\n}\n\n.top2 {\n  position: relative;\n  top: 10px;\n}\n\n.login {\n  position: relative;\n  top: -7px;\n  left: 2px;\n}\n\n.thumb {\n  padding-left: 10px;\n}\n\nmain {\n  padding-left: 0 !important;\n}\n\n.right {\n  float: right;\n}\n\nthead td, thead th {\n  border-top: none;\n  border-bottom: none;\n}\n\n/* ===============================header colors=======================*/\n\n.table-format-first .table-responsive table th,\n.table-format-first .table-responsive table td {\n  text-align: center;\n  padding: 10px 5px;\n}\n\n.table-format-first .table-responsive table th {\n  text-transform: capitalize;\n  font-size: 14px;\n}\n\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper {\n  display: inline-block;\n  overflow: initial;\n  margin-left: 0;\n  width: auto;\n  position: relative;\n  background: transparent;\n}\n\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox {\n  z-index: 2;\n}\n\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label {\n  font-size: 16px;\n  margin-left: 7px;\n  font-weight: 600;\n  vertical-align: middle;\n}\n\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:after, .table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:before {\n  z-index: 1;\n}\n\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper:after {\n  content: '';\n  width: 20px;\n  height: 20px;\n  background: #fff;\n  left: 0;\n  top: 0;\n  position: absolute;\n}\n\n.table-format-first .table-responsive table tbody tr td .fa-trash-o {\n  color: #f44336;\n  font-size: 20px;\n}\n\n.table-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-top: 10px;\n}\n\n.table-container .heading-container {\n  background: #e0eaec;\n  display: flex;\n  flex-direction: row;\n  font-size: 14px;\n  font-weight: 600;\n  text-align: left;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n}\n\n.table-container .heading-container .heading-item {\n  width: 10%;\n  text-align: center;\n}\n\n.table-container .value-outer-container {\n  display: flex;\n  flex-direction: column;\n  min-height: 53vh;\n  max-height: 54vh;\n  overflow-x: hidden;\n  overflow-y: auto;\n  border: 1px solid #ccc;\n}\n\n.table-container .value-outer-container .value-container {\n  display: flex;\n  flex-direction: row;\n  text-align: left;\n  padding: 4px;\n  font-size: 12px;\n  border-bottom: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n  border-top: none;\n}\n\n.table-container .value-outer-container .value-container .value-item {\n  width: 10%;\n  text-align: center;\n}\n\ntable thead tr th {\n  padding-bottom: 10px;\n  padding-top: 10px;\n}\n\ntable tbody td {\n  padding: 5px 15px !important;\n  border-top: none !important;\n  border-bottom: none !important;\n}\n\ntable tbody td .col-new {\n  text-align: center;\n}\n\ntable tbody tr {\n  border-left: none;\n  border-radius: 0;\n}\n\ntable tbody tr td .edit {\n  cursor: pointer;\n}\n\ntable tbody tr td .anchorTag {\n  margin-left: 10px;\n}\n\ntable tbody tr td .editOptions li {\n  display: inline-block;\n}\n\ntable tbody tr .field-wrapper {\n  padding: 0px !important;\n}\n\ntable tbody tr .field-wrapper .form-ctrl {\n  display: block;\n  box-sizing: border-box;\n  padding: 0px 0px 0px 5px;\n  outline: none;\n  border: 0;\n  height: 26px;\n  box-shadow: none;\n  border-radius: 0;\n  line-height: 25px;\n  background: transparent;\n  width: 80px;\n  text-align: center;\n  border-bottom: 1px solid #ccc;\n}\n\ntable tbody tr .datePickerBox {\n  padding-right: 10px;\n  padding-bottom: 10px;\n}\n\ntable tbody .displayComp .edit-comp {\n  display: none;\n}\n\ntable tbody .editComp .view-comp {\n  display: none;\n}\n\n.anchorTagCursor {\n  cursor: pointer;\n}\n\n@media screen and (max-width: 995px), screen and (max-height: 768px) {\n  #divSlotTable {\n    margin-left: 0px !important;\n    margin-right: 15px !important;\n    overflow: hidden;\n    width: 100%;\n  }\n  #divSlotTable ::-webkit-scrollbar {\n    display: block;\n    width: 7px;\n    height: 7px;\n  }\n}\n\n.middle-section {\n  padding: 5px 0px;\n  width: 100%;\n  box-sizing: border-box;\n}\n\n.btn {\n  background: #0084f6;\n  color: white;\n  margin-top: -2rem;\n}\n\nth {\n  background-color: #e0eaec;\n  color: black;\n}\n\ntr {\n  border-radius: 12px;\n  border-left: 5px solid #e0eaec;\n  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);\n  margin-bottom: 5px;\n  margin-top: 5px;\n}\n\n.tableBodyScroll tbody {\n  display: block;\n  overflow-y: auto;\n  background: #ffffff;\n}\n\n.tableBodyScroll thead,\ntbody tr {\n  display: table;\n  width: 100%;\n  table-layout: fixed;\n}\n\n.add-edit {\n  margin-top: 15px;\n}\n\n.add-edit i {\n  display: inline-block;\n  width: 17px;\n  height: 17px;\n  line-height: 16px;\n  text-align: center;\n  font-size: 17px;\n  vertical-align: middle;\n  margin-right: 4px;\n}\n\n.add-edit span {\n  display: inline-block;\n}\n\n.add-edit .expend-box i {\n  line-height: 12px;\n  font-size: 22px;\n}\n\n.add-edit a {\n  cursor: pointer;\n}\n\n.create-standard-form {\n  margin: 10px 0;\n  padding: 10px 20px 20px;\n  background: #efefef;\n  border-top: 1px solid #d8d8d8;\n}\n\n.create-standard-form .form-ctrl {\n  background: transparent;\n  border-bottom: solid 1px #cccccc;\n}\n\n.closeBtnClass {\n  line-height: 11px !important;\n}\n\n.editCellInput {\n  margin: auto;\n  display: block;\n}\n\n.middle-section .middle-top {\n  margin-bottom: 10px;\n}\n\n.middle-section .middle-main .addBtnClass {\n  border: none;\n}\n\n.middle-section .middle-main .closeBtnClass {\n  border: none;\n}\n\n.middle-section .middle-main .row .btn {\n  margin-left: 0px;\n  margin-top: 10px;\n}\n\n.middle-section .middle-main .row .field-wrapper {\n  display: inline-block;\n  margin-left: 5px;\n}\n\n.middle-section .middle-main .row .field-wrapper label {\n  font-size: 12px;\n}\n\n.middle-section .middle-main .row .field-wrapper span {\n  color: red;\n  display: inline-block;\n}\n\n.datePickerBox:after {\n  content: '';\n  background: url('calendar.svg') no-repeat;\n  position: absolute;\n  right: 0px;\n  top: 15px;\n  width: 21px;\n  height: 21px;\n  z-index: 0;\n}\n\ninput {\n  height: 40px;\n}\n\n.form-inline .c-lg-2 {\n  width: 180px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb3Vyc2UtbW9kdWxlL2RhdGEtc2V0dXAvZGF0YS1zZXR1cC1ob21lL2RhdGEtc2V0dXAtaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jb3Vyc2UtbW9kdWxlL2RhdGEtc2V0dXAvYWNhZGVtaWMteWVhci9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXNzZXRzL2Nzcy9jb21tb24vdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osY0FBYztBQ0NoQjs7QURDQTtFQUNBLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsZUFBZTtBQ0VmOztBREFBO0VBQ0EsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixlQUFlO0FDR2Y7O0FERUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0FDQ2xCOztBRENBO0VBRU0sZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGVBQWU7RUFDZixXQUFXO0VBQ1gsZ0JBQWdCO0FDQ3RCOztBRFRBO0VBV00sMkNBQTJDO0VBQzNDLHlCQUF5QjtBQ0UvQjs7QURFQTtFQUNFLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsb0JBQW9CO0VBQ3BCLGlCQUFpQjtBQ0NuQjs7QURDQTtFQUNFLGFBQWE7QUNFZjs7QURBQTtFQUNFLFVBQVU7RUFDVix5QkFBeUI7RUFDekIsYUFBYTtBQ0dmOztBRERBO0VBQ0Usc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixlQUFlO0FDSWpCOztBRFBBO0VBS00scUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztBQ01wQjs7QURkQTtFQVlNLGlCQUFpQjtBQ012Qjs7QURGQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixpQkFB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QUNuQiw2QkFBNkI7QUErbkJqQzs7QUFub0JBO0VBTVEsdUJBQXVCO0VBQ3ZCLGdDQUFnQztBQWlvQnhDOztBQTduQkE7RUFDSSw0QkFBNEI7QUFnb0JoQzs7QUE3bkJBO0VBQ0ksWUFBWTtFQUNaLGNBQWM7QUFnb0JsQjs7QUE3bkJBO0VBRVEsbUJBQW1CO0FBK25CM0I7O0FBam9CQTtFQU1ZLFlBQVk7QUErbkJ4Qjs7QUFyb0JBO0VBU1ksWUFBWTtBQWdvQnhCOztBQXpvQkE7RUFhZ0IsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQWdvQmhDOztBQTlvQkE7RUFpQmdCLHFCQUFxQjtFQUNyQixnQkFBZ0I7QUFpb0JoQzs7QUFucEJBO0VBb0JvQixlQUFlO0FBbW9CbkM7O0FBdnBCQTtFQXVCb0IsVUFBVTtFQUNWLHFCQUFxQjtBQW9vQnpDOztBQTluQkE7RUFDSSxXQUFXO0VBQ1gseUNBQXVFO0VBQ3ZFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsU0FBUztFQUNULFdBQVc7RUFDWCxZQUFZO0VBQ1osVUFBVTtBQWlvQmQ7O0FBL25CQTtFQUNJLFlBQVk7QUFrb0JoQjs7QUFob0JBO0VBRVEsWUFBWTtBQWtvQnBCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb3Vyc2UtbW9kdWxlL2RhdGEtc2V0dXAvYWNhZGVtaWMteWVhci9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnJlYWRjcnVtYi1pdGVtICsgLmJyZWFkY3J1bWItaXRlbTo6YmVmb3JlIHtcbiAgY29udGVudDogXCI+XCI7XG4gIGNvbG9yOiAjMzM0RDZFO1xufVxuLmJyZWFkY3J1bWJ7XG5iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xubWFyZ2luLWJvdHRvbTogMHB4O1xucGFkZGluZy1sZWZ0OiAwO1xufVxuLmJyZWFkY3J1bWItaXRlbT5he1xuY29sb3I6ICMzMzRENkU7XG5mb250LXdlaWdodDogNjAwO1xuZm9udC1zaXplOiAxNnB4O1xufVxuXG5cblxuLnc5OCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDBweCBhdXRvO1xufVxuLm5hdi1pdGVtIHtcbiAgLm5hdi1saW5rIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjb2xvcjogIzQwNTg3NztcbiAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICBmbG9hdDogbGVmdDtcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gIH1cbiAgLmFjdGl2ZSB7XG4gICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzEwOWNmMSAhaW1wb3J0YW50O1xuICAgICAgY29sb3I6ICMxMDljZjEgIWltcG9ydGFudDtcbiAgfVxufVxuXG4ubmF2LWxpbmsge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMS41cmVtIDByZW07XG4gIG1hcmdpbjogLTFyZW0gMy41cmVtO1xuICBtYXJnaW4tbGVmdDogMHJlbTtcbn1cbi5mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi53MTUge1xuICB3aWR0aDogMTUlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZlNWYwO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLmxpc3QgeyBsaSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDdweCAwcHg7XG4gIG1hcmdpbjogN3B4IDBweDtcbiAgYSB7IHNwYW4ge1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGNvbG9yOiAjMzM0ZDZlO1xuICB9XG4gIH1cbiAgaW1nIHtcbiAgICAgIHBhZGRpbmc6IDBweCAxMHB4O1xuICB9XG59XG59XG4uYWRkX21hc3Rlcl90YWcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTA5Y2YxO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5zZWxlY3Qge1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIG1hcmdpbjogOHB4IDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNmY4O1xufVxuLmlucHV0IHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIG1hcmdpbjogOHB4IDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICAvKmJhY2tncm91bmQtY29sb3I6ICNmNWY2Zjg7XG4qL1xufVxuLm1hZ25pZnlpbmctZ2xhc3Mge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9GcmFtZTEuc3ZnKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCBjZW50ZXI7XG4gIHRleHQtaW5kZW50OiA1cHg7XG59XG4uaGVhZGVyLWlucHV0IHtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgbWFyZ2luOiA4cHggMDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHdpZHRoOiA3MDBweDtcbiAgY29sb3I6ICM2MTc1OGU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9GcmFtZTEuc3ZnJyk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgY2VudGVyO1xuICAvKmJhY2tncm91bmQtY29sb3I6ICNmNWY2Zjg7Ki9cbn1cbi5oZWFkZXItaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuLm1haW4tc2hhZG93IHtcbiAgYm94LXNoYWRvdzogMHB4IDdweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDdweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDdweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xufVxuLnAtMTUge1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbn1cbnNlbGVjdCB7XG4gIHdpZHRoOiAyNTBweDtcbiAgY29sb3I6ICNiNmI4YmI7XG59XG5cblxuXG50YWJsZXtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLXRvcDoxNXB4O1xufVxudGhlYWR7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjREZFNUYwO1xuICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgIHRke1xuICAgICAgIGJhY2tncm91bmQ6ICNERkU1RjA7XG4gICB9XG59XG50ZHtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICBjb2xvcjogIzMyM0M0NztcbiAgZm9udC1zaXplOiAxMnB4O1xufVxudGJvZHl7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG50cntcbiAgICBib3gtc2hhZG93OiAtMXB4IDFweCA2cHggMHB4IHJnYmEoMCwwLDAsMC4xKTtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6LTFweCAxcHggNnB4IDBweCByZ2JhKDAsMCwwLDAuMSk7XG4gICAgLW1vei1ib3gtc2hhZG93OiAtMXB4IDFweCA2cHggMHB4IHJnYmEoMCwwLDAsMC4xKTtcbn1cbi5zZWN0aW9uOjpiZWZvcmUge1xuICBoZWlnaHQ6IDAuNGVtO1xuICBkaXNwbGF5OiB0YWJsZS1yb3c7XG4gIGNvbnRlbnQ6ICcnO1xufVxuXG5cbi53OTZ7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAxcmVtKTtcbiAgLy8gbWFyZ2luOiAwcHggMXJlbTtcbiAgLy8gbWFyZ2luLXRvcDogLTIwcHg7XG59XG4ucC0xMHtwYWRkaW5nLXRvcDogMTBweDt9XG4ucC0zMHtwYWRkaW5nLXRvcDogMzBweDt9XG4ucC0xMC0weyBwYWRkaW5nOiA5cHggMHB4O31cbi55ZXN7XG4gIGJhY2tncm91bmQtY29sb3I6ICNDQ0ZGQUM7XG4gIGNvbG9yOiAjMzIzQzQ3O1xuICBwYWRkaW5nOiA1cHggMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuLm5ve1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZDRjg4O1xuICBjb2xvcjogIzMyM0M0NztcbiAgcGFkZGluZzogNXB4IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cbi5zZWFyY2h7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMDlDRjE7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBmb250LXdlaWdodDogNjAwXG59XG4uYXJlYS1zZWxlY3R7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiAjNzg3QTdEO1xufVxuLmlucHV0LXdpZHRoe1xuICB3aWR0aDogMTgwcHg7XG59XG4ucGwtMTB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbi5wci00MHtcbiAgcGFkZGluZy1yaWdodDogNDBweDtcbn1cblxuLmNhbmNlbHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOjFweCBzb2xpZCAjMTA5Q0YxO1xuICAgY29sb3I6ICMxMDlDRjE7XG4gICBwYWRkaW5nOiA5cHggMTVweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDBcbn1cbi5mb3JtLWNoZWNrLWxhYmVsIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIGNvbG9yOiAjMzM0RDZFO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNjAwXG59XG4ud2lkdGgyMDV7XG4gIHdpZHRoOiAyMDVweDtcbn1cbi5kZXNjcmlwdGlvbntcbiAgd2lkdGg6IDIwMHB4O1xuICBtYXJnaW46IDBweCAxMHB4O1xufVxuIGlucHV0W3R5cGU9XCJkYXRlXCJdOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL0ljb24uc3ZnJykgbm8tcmVwZWF0O1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBib3JkZXItd2lkdGg6IHRoaW47XG4gICAgcGFkZGluZzogMnB4IDBweDtcbn1cbmlucHV0W3R5cGU9XCJkYXRlXCJde1xuICBwYWRkaW5nOiA2cHggNHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4uYWRke1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTA5Q0YxO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC13ZWlnaHQ6IDYwMFxufVxuLm1yLTEwe1xubWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLmNlbnRlcntcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmdyYXl7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNEYzRjg7XG4gIGhlaWdodDogOTJ2aDtcbn1cbi8qY2hhdGJveCovXG4uY2hhdGJveDF7XG4gIHdpZHRoOiA0NjZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjlBQ0ZDO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMnJlbSAycmVtIDByZW0gMnJlbTtcbiAgcGFkZGluZzogOHB4IDBweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmNoYXRib3gye1xuICB3aWR0aDogMTE1M3B4O1xuICBib3JkZXItcmFkaXVzOiAycmVtIDJyZW0gMHJlbSAycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmNoYXRib3gze1xuICB3aWR0aDogNDY2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI5QUNGQztcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDJyZW0gMnJlbSAwcmVtIDJyZW07XG4gIHBhZGRpbmc6IDhweCAwcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5jaGF0Ym94NHtcbiAgd2lkdGg6IDExNTNweDtcbiAgYm9yZGVyLXJhZGl1czogMnJlbSAycmVtIDByZW0gMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTBweCAwcHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5jaGF0Ym94NXtcbiAgd2lkdGg6IDQ2NnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyOUFDRkM7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAycmVtIDJyZW0gMHJlbSAycmVtO1xuICBwYWRkaW5nOiA4cHggMHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uY2hhdGJveDZ7XG4gIHdpZHRoOiAxMDMzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDJyZW0gMnJlbSAwcmVtIDJyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDEwcHggMHB4O1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uY2hhdGJveDd7XG4gIHdpZHRoOjkwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI5QUNGQztcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDJyZW0gMnJlbSAwcmVtIDJyZW07XG4gIHBhZGRpbmc6IDhweCAwcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5jaGF0Ym94OHtcbiAgd2lkdGg6IDQ2NnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyOUFDRkM7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAycmVtIDJyZW0gMHJlbSAycmVtO1xuICBwYWRkaW5nOiA4cHggMHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uY2hhdGJveDl7XG4gIHdpZHRoOiA4MTlweDtcbiAgYm9yZGVyLXJhZGl1czogMnJlbSAycmVtIDByZW0gMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTBweCAwcHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5jaGF0Ym94LXNlbGVjdHtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuLmNoYXRib3gtaW5wdXR7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBtYXJnaW46IDhweCAwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmMztcbn1cbi5jb2wtZm9ybS1sYWJlbHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogI0FGQjNCNztcbn1cbi51cGxvYWR7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyOUFDRkM7XG59XG5pbnB1dFt0eXBlPVwiZmlsZVwiXXtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuI3lvdXJCdG4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNDBweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjlBQ0ZDO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLnRvcHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDQwcHg7XG59XG4uZGl2aXNpb257XG4gIGJvcmRlci1yaWdodDogIDJweCBzb2xpZCAjQzRDNEM0OyBcbiAgbWFyZ2luOiA0MHB4IDBweDtcbn1cbi5yYWRpb3tcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuLmNvbnRhaW5lcmMge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuXG4uY29udGFpbmVyYyBpbnB1dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3BhY2l0eTogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBoZWlnaHQ6IDA7XG4gIHdpZHRoOiAwO1xufVxuXG5cbi5jaGVja21hcmsge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAxNXB4O1xuICB3aWR0aDogMTVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzEwOUNGMTtcbn1cblxuLmNvbnRhaW5lcmMgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NkYzO1xufVxuXG5cbi5jaGVja21hcms6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cblxuLmNvbnRhaW5lcmMgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcms6YWZ0ZXIge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuXG4uY29udGFpbmVyYyAuY2hlY2ttYXJrOmFmdGVyIHtcbiAgbGVmdDogNXB4O1xuICB0b3A6IDBweDtcbiAgd2lkdGg6IDVweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBib3JkZXI6IHNvbGlkIHdoaXRlO1xuICBib3JkZXItd2lkdGg6IDAgM3B4IDNweCAwO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufVxuLnRvcDJ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxMHB4O1xufVxuLmxvZ2lueyAgIFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IC03cHg7XG4gICAgbGVmdDogMnB4O1xufVxuLnRodW1ie1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5tYWluIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcbn1cbi5yaWdodCB7IFxuICAgIGZsb2F0OiByaWdodDtcbn1cbnRoZWFkIHtcbiAgdGQsIHRoIHtcbiAgICBib3JkZXItdG9wOiBub25lO1xuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIH1cbn0iLCJAaW1wb3J0IFwiLi4vLi4vZGF0YS1zZXR1cC1ob21lL2RhdGEtc2V0dXAtaG9tZS5jb21wb25lbnQuc2Nzc1wiO1xuQGltcG9ydCBcIi4vc3JjL2Fzc2V0cy9jc3MvY29tbW9uL3ZhcmlhYmxlcy5zY3NzXCI7XG50YWJsZSB7XG4gICAgdGhlYWQge1xuICAgICAgICB0ciB7XG4gICAgICAgICAgICB0aCB7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgdGJvZHkge1xuICAgICAgICB0ZCB7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMTVweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgLmNvbC1uZXcge1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0ciB7XG4gICAgICAgICAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgICAgICB0ZCB7XG4gICAgICAgICAgICAgICAgLmVkaXQge1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5hbmNob3JUYWcge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgICAgLy8gcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICAgICAgICAgICAgLmVkaXRPcHRpb25zIGxpIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5maWVsZC13cmFwcGVyIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAuZm9ybS1jdHJsIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDVweDtcbiAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI2cHg7XG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmRhdGVQaWNrZXJCb3gge1xuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmRpc3BsYXlDb21wIHtcbiAgICAgICAgICAgIC52aWV3LWNvbXAge31cbiAgICAgICAgICAgIC5lZGl0LWNvbXAge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuZWRpdENvbXAge1xuICAgICAgICAgICAgLnZpZXctY29tcCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmVkaXQtY29tcCB7fVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uYW5jaG9yVGFnQ3Vyc29yIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wYWdpbmF0aW9uIHtcbiAgICAvLyBwYWRkaW5nLXRvcDogMjVweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTk1cHgpLFxuc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNzY4cHgpIHtcbiAgICAjZGl2U2xvdFRhYmxlIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICAgICAgICAvLyBtYXJnaW4tdG9wOiAxNXB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHggIWltcG9ydGFudDtcbiAgICAgICAgLy8gbWF4LWhlaWdodDogNDgwcHg7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAudGFibGUtc2Nyb2xsLXdyYXBwZXIge1xuICAgICAgICAgICAgLy8gbWF4LWhlaWdodDogNDMwcHg7XG4gICAgICAgIH1cbiAgICAgICAgOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHdpZHRoOiA3cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDdweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLm1pZGRsZS1zZWN0aW9uIHtcbiAgICBwYWRkaW5nOiA1cHggMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4uYnRuIHtcbiAgICBiYWNrZ3JvdW5kOiAjMDA4NGY2O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tdG9wOiAtMnJlbTtcbn1cbnRoe1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGVhZWM7XG4gICAgY29sb3I6IGJsYWNrO1xufVxudHIge1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjZTBlYWVjO1xuICAgIGJveC1zaGFkb3c6IDAgM3B4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIG1hcmdpbi10b3A6IDVweDtcbn1cbi50YWJsZUJvZHlTY3JvbGwgdGJvZHkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIC8vIG1heC1oZWlnaHQ6IDcwdmg7XG4gICAgLy8gbWluLWhlaWdodDogNzB2aDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgLy8gYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIC8vIGJvcmRlci1yYWRpdXM6IDFweCBzb2xpZCByZ2JhKDIxMSwgMjEyLCAyMTMsIDAuNSk7XG59XG4udGFibGVCb2R5U2Nyb2xsIHRoZWFkLFxudGJvZHkgdHIge1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRhYmxlLWxheW91dDogZml4ZWQ7XG59XG4uYWRkLWVkaXQge1xuICAgIC8vIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBpIHtcbiAgICAgICAgLy8gYm9yZGVyOiAxcHggc29saWQgJGNvbW1vbi1ibHVlO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHdpZHRoOiAxN3B4O1xuICAgICAgICBoZWlnaHQ6IDE3cHg7XG4gICAgICAgIC8vIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgICB9XG4gICAgc3BhbiB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB9XG4gICAgLmV4cGVuZC1ib3gge1xuICAgICAgICBpIHtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMnB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIGEge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxufVxuXG4uY3JlYXRlLXN0YW5kYXJkLWZvcm0ge1xuICAgIG1hcmdpbjogMTBweCAwO1xuICAgIHBhZGRpbmc6IDEwcHggMjBweCAyMHB4O1xuICAgIGJhY2tncm91bmQ6ICNlZmVmZWY7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkOGQ4ZDg7XG4gICAgLmZvcm0tY3RybCB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2NjY2NjYztcbiAgICB9XG59XG5cbi5jbG9zZUJ0bkNsYXNzIHtcbiAgICBsaW5lLWhlaWdodDogMTFweCAhaW1wb3J0YW50O1xufVxuXG4uZWRpdENlbGxJbnB1dCB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubWlkZGxlLXNlY3Rpb24ge1xuICAgIC5taWRkbGUtdG9wIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB9XG4gICAgLm1pZGRsZS1tYWluIHtcbiAgICAgICAgLmFkZEJ0bkNsYXNzIHtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAuY2xvc2VCdG5DbGFzcyB7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgLnJvdyB7XG4gICAgICAgICAgICAuYnRuIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZmllbGQtd3JhcHBlciB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICAgICAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuLmRhdGVQaWNrZXJCb3g6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2NhbGVuZGFyLnN2Zykgbm8tcmVwZWF0O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMHB4O1xuICAgIHRvcDogMTVweDtcbiAgICB3aWR0aDogMjFweDtcbiAgICBoZWlnaHQ6IDIxcHg7XG4gICAgei1pbmRleDogMDtcbn1cbmlucHV0IHtcbiAgICBoZWlnaHQ6IDQwcHg7XG59XG4uZm9ybS1pbmxpbmUge1xuICAgIC5jLWxnLTJ7XG4gICAgICAgIHdpZHRoOiAxODBweDtcbiAgICB9XG59IiwiJHB1bGwtTDogbGVmdDtcbiRwdWxsLVI6IHJpZ2h0O1xuJHB1bGwtbm9uZTogbm9uZTtcbiRmdWxsLXdpZHRoOiAxMDAlO1xuJGJvcmRlci1ib3g6IGJvcmRlci1ib3g7XG4kYm9yZGVyLWNvbG9yOiAjZGVlYWVlO1xuJGJnLXdoaXRlOiAjZmZmO1xuJGVycm9yLWNvbG9yOiAjZmYwMDAwO1xuJGNvbW1vbi1ibHVlOiAjMDA4NGY2O1xuJHByaW1hcnktY29sb3I6ICMzMzM7XG4kYm9yZGVyLWNvbW1vbjojZWFlYWViO1xuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09aGVhZGVyIGNvbG9ycz09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuJGhlYWRlci1iZzojMDA2MEEzO1xuJGhlYWRlci1ib3JkZXI6I2VhZWFlYjtcbiRsZWZ0TWVudUJnOiNmYWZhZmE7XG4kbGVmdE1lbnVIb3ZlckJnOiMwMDg0ZjY7XG4kbGVmdE1lbnVUZXh0SG92ZXJDb2xvcjojZmZmO1xuJHJlZEJ0bjojZjQ0MzM2O1xuJGJvcmRlcmNjYzojY2NjO1xuJGxpZ2h0Qmx1ZTojZWZmN2ZmO1xuJHRhYmxlSGVhZGluZ0JnQ29sb3I6ICMwMDRhN2U7XG4udGFibGUtZm9ybWF0LWZpcnN0IHtcbiAgICAudGFibGUtcmVzcG9uc2l2ZSB7XG4gICAgICAgIHRhYmxlIHtcbiAgICAgICAgICAgIHRoLFxuICAgICAgICAgICAgdGQge1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoIHtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0Ym9keSB7XG4gICAgICAgICAgICAgICAgdHIge1xuICAgICAgICAgICAgICAgICAgICB0ZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuZmllbGQtY2hlY2tib3gtd3JhcHBlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBpbml0aWFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZm9ybS1jaGVja2JveCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mb3JtLWNoZWNrYm94K2xhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogN3B4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmFmdGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLmZhLXRyYXNoLW8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkcmVkQnRuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnRhYmxlLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgLmhlYWRpbmctY29udGFpbmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICNlMGVhZWM7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgICAuaGVhZGluZy1pdGVtIHtcbiAgICAgICAgd2lkdGg6IDEwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgIH1cbiAgICAudmFsdWUtb3V0ZXItY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgbWluLWhlaWdodDogNTN2aDtcbiAgICAgIG1heC1oZWlnaHQ6IDU0dmg7XG4gICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgIC52YWx1ZS1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgICAgICBib3JkZXItdG9wOiBub25lO1xuICAgICAgICAudmFsdWUtaXRlbSB7XG4gICAgICAgICAgd2lkdGg6IDEwJTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/components/course-module/data-setup/academic-year/home/home.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/components/course-module/data-setup/academic-year/home/home.component.ts ***!
  \******************************************************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../services/authenticator.service */ "./src/app/services/authenticator.service.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_message_show_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../services/message-show.service */ "./src/app/services/message-show.service.ts");
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
        constructor(_http, msgService, auth) {
            this._http = _http;
            this.msgService = msgService;
            this.auth = auth;
            this.academicYearDataSource = [];
            this.academicTableList = [];
            this.varJson = {
                PageIndex: 1,
                studentdisplaysize: 15,
                totalRow: 0,
                createNewAcademicYear: false
            };
            this.sizeArr = [15, 25, 50, 100, 150, 200, 500, 1000];
            this.type = '';
            this.addAcademicYearTemplate = {
                inst_acad_year: "",
                desc: "",
                start_date: "",
                end_date: "",
                inst_id: "",
                created_date: "",
                default_academic_year: 0
            };
        }
        ngOnInit() {
            this.getAllAcademicFromServer();
            this.addAcademicYearTemplate.inst_id = sessionStorage.getItem('institute_id');
            this.auth.institute_type.subscribe(res => {
                if (res == "LANG") {
                    this.type = 'batch';
                }
                else {
                    this.type = 'course';
                }
            });
        }
        getAllAcademicFromServer() {
            this._http.getData("/api/v1/academicYear/all/" + sessionStorage.getItem('institute_id')).subscribe((resp) => {
                this.academicYearDataSource = resp;
                this.varJson.totalRow = resp.length;
                this.fetchTableDataByPage(this.varJson.PageIndex);
            }, (err) => {
                // this.isRippleLoad = false;
                this.showErrorMessage(this.msgService.toastTypes.error, '', err.error.message);
            });
        }
        addAcademicYearDetails() {
            let start_date_new = this.addAcademicYearTemplate.start_date;
            let end_date_new = this.addAcademicYearTemplate.end_date;
            let academic_year_new = this.addAcademicYearTemplate.inst_acad_year.toString().split("-");
            if (this.addAcademicYearTemplate.inst_acad_year.trim() == "" || this.addAcademicYearTemplate.desc.trim() == ""
                || this.addAcademicYearTemplate.start_date == "" || this.addAcademicYearTemplate.end_date === "" || this.addAcademicYearTemplate.start_date == null || this.addAcademicYearTemplate.end_date == null) {
                this.showErrorMessage(this.msgService.toastTypes.error, '', "Please fill All The Required Details");
            }
            else if (moment__WEBPACK_IMPORTED_MODULE_1__(start_date_new).valueOf() > moment__WEBPACK_IMPORTED_MODULE_1__(end_date_new).valueOf()) {
                this.showErrorMessage(this.msgService.toastTypes.error, '', "Start date cannot be less than end date");
            }
            else if (moment__WEBPACK_IMPORTED_MODULE_1__(start_date_new).valueOf() == moment__WEBPACK_IMPORTED_MODULE_1__(end_date_new).valueOf()) {
                {
                    this.showErrorMessage(this.msgService.toastTypes.error, '', "Start date and end date cannot be same");
                }
            }
            else if (moment__WEBPACK_IMPORTED_MODULE_1__(start_date_new).get('year') > moment__WEBPACK_IMPORTED_MODULE_1__(end_date_new).get('year')) {
                this.showErrorMessage(this.msgService.toastTypes.error, '', "Start year should be greater than end year");
            }
            else if (academic_year_new[0] == academic_year_new[1]) {
                this.showErrorMessage(this.msgService.toastTypes.error, '', "Start year and end year cannot be same");
            }
            else {
                let obj = this.addAcademicYearTemplate;
                let start_date = this.addAcademicYearTemplate.start_date;
                let end_date = this.addAcademicYearTemplate.end_date;
                obj.start_date = moment__WEBPACK_IMPORTED_MODULE_1__(start_date).format("YYYY-MM-DD");
                obj.end_date = moment__WEBPACK_IMPORTED_MODULE_1__(end_date).format("YYYY-MM-DD");
                let url = "/api/v1/academicYear";
                this._http.postData(url, obj).subscribe((res) => {
                    this.showErrorMessage(this.msgService.toastTypes.success, '', "Academic year created successfully!");
                    obj.start_date = moment__WEBPACK_IMPORTED_MODULE_1__(this.addAcademicYearTemplate.start_date).format("YYYY-MM-DD");
                    obj.end_date = moment__WEBPACK_IMPORTED_MODULE_1__(this.addAcademicYearTemplate.end_date).format("YYYY-MM-DD");
                    this.addAcademicYearTemplate = {
                        inst_acad_year: "",
                        desc: "",
                        start_date: "",
                        end_date: "",
                        inst_id: this.addAcademicYearTemplate.inst_id,
                        default_academic_year: 0
                    };
                    // this.toggleCreateNewAcademicYear();
                    this.getAllAcademicFromServer();
                }, err => {
                    this.showErrorMessage(this.msgService.toastTypes.error, '', err.error.message);
                    obj.start_date = moment__WEBPACK_IMPORTED_MODULE_1__(this.addAcademicYearTemplate.start_date).format("YYYY-MM-DD");
                    obj.end_date = moment__WEBPACK_IMPORTED_MODULE_1__(this.addAcademicYearTemplate.end_date).format("YYYY-MM-DD");
                });
            }
        }
        editRowTable(row, index) {
            this.addOrRemoveClass("row" + index, 'editComp', 'displayComp');
            row.created_date = moment__WEBPACK_IMPORTED_MODULE_1__(row.created_date).format("YYYY-MM-DD");
            row.end_date = moment__WEBPACK_IMPORTED_MODULE_1__(row.end_date).format("YYYY-MM-DD");
            row.start_date = moment__WEBPACK_IMPORTED_MODULE_1__(row.start_date).format("YYYY-MM-DD");
        }
        cancelEditRow(index) {
            this.addOrRemoveClass("row" + index, 'displayComp', 'editComp');
            this.getAllAcademicFromServer();
        }
        addOrRemoveClass(object, addClassObj, removeClassObj) {
            document.getElementById(object).classList.add(addClassObj);
            document.getElementById(object).classList.remove(removeClassObj);
        }
        saveAcademicYearInformation(row2, index) {
            let start_date_new = row2.start_date;
            let end_date_new = row2.end_date;
            if (moment__WEBPACK_IMPORTED_MODULE_1__(start_date_new).valueOf() > moment__WEBPACK_IMPORTED_MODULE_1__(end_date_new).valueOf()) {
                this.showErrorMessage(this.msgService.toastTypes.error, '', "Start date cannot be less than end date");
            }
            else if (row2.academicyear == "" || row2.desc == "") {
                this.showErrorMessage(this.msgService.toastTypes.error, '', "Fields cannot be empty");
            }
            else if (moment__WEBPACK_IMPORTED_MODULE_1__(start_date_new).get('year') > moment__WEBPACK_IMPORTED_MODULE_1__(end_date_new).get('year')) {
                this.showErrorMessage(this.msgService.toastTypes.error, '', "Start year should be greater than end year");
            }
            else {
                let data = {
                    inst_acad_year: row2.inst_acad_year,
                    desc: row2.desc,
                    start_date: moment__WEBPACK_IMPORTED_MODULE_1__(row2.start_date).format("YYYY-MM-DD"),
                    end_date: moment__WEBPACK_IMPORTED_MODULE_1__(row2.end_date).format("YYYY-MM-DD"),
                    inst_id: row2.inst_id,
                    default_academic_year: row2.default_academic_year,
                    created_date: moment__WEBPACK_IMPORTED_MODULE_1__(row2.created_date).format("DD-MM-YYYY")
                };
                this._http.putData("/api/v1/academicYear/" + row2.inst_acad_year_id, data).subscribe(res => {
                    this.cancelEditRow(index);
                    this.getAllAcademicFromServer();
                    this.showErrorMessage(this.msgService.toastTypes.success, '', 'Academic year updated successfully');
                }, error => {
                    this.showErrorMessage(this.msgService.toastTypes.error, '', error.error.message);
                    this.getAllAcademicFromServer();
                });
            }
        }
        deleteAcademicYear(row) {
            let inst_id = row.inst_acad_year_id;
            if (confirm('Are you sure, you want to delete?')) {
                this._http.deleteDataById("/api/v1/academicYear/" + row.inst_acad_year_id).subscribe((data) => {
                    this.showErrorMessage(this.msgService.toastTypes.success, '', 'Academic year deleted successfully');
                    this.getAllAcademicFromServer();
                }, (error) => {
                    this.showErrorMessage(this.msgService.toastTypes.error, '', error.error.message);
                });
            }
        }
        toggleCreateNewAcademicYear() {
            this.varJson.createNewAcademicYear = this.varJson.createNewAcademicYear == false ? true : false;
            document.getElementById('showCloseBtn').style.display = this.varJson.createNewAcademicYear == true ? '' : 'none';
            document.getElementById('showAddBtn').style.display = this.varJson.createNewAcademicYear == true ? 'none' : '';
        }
        // pagination functions
        fetchTableDataByPage(index) {
            this.varJson.PageIndex = index;
            let startindex = this.varJson.studentdisplaysize * (index - 1);
            this.academicTableList = this.getDataFromDataSource(startindex);
        }
        fetchNext() {
            this.varJson.PageIndex++;
            this.fetchTableDataByPage(this.varJson.PageIndex);
        }
        fetchPrevious() {
            if (this.varJson.PageIndex != 1) {
                this.varJson.PageIndex--;
                this.fetchTableDataByPage(this.varJson.PageIndex);
            }
        }
        getDataFromDataSource(startindex) {
            let t = this.academicYearDataSource.slice(startindex, startindex + this.varJson.studentdisplaysize);
            return t;
        }
        updateTableBatchSize(event) {
            this.varJson.studentdisplaysize = event;
            this.fetchTableDataByPage(this.varJson.PageIndex);
        }
        // toast function
        showErrorMessage(objType, massage, body) {
            this.msgService.showErrorMessage(objType, massage, body);
        }
    };
    HomeComponent.ctorParameters = () => [
        { type: _services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] },
        { type: _services_message_show_service__WEBPACK_IMPORTED_MODULE_4__["MessageShowService"] },
        { type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticatorService"] }
    ];
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'home',
            template: __importDefault(__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/data-setup/academic-year/home/home.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./home.component.scss */ "./src/app/components/course-module/data-setup/academic-year/home/home.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"],
            _services_message_show_service__WEBPACK_IMPORTED_MODULE_4__["MessageShowService"],
            _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticatorService"]])
    ], HomeComponent);
    return HomeComponent;
})();



/***/ })

}]);
//# sourceMappingURL=app-components-course-module-data-setup-academic-year-academic-year-module-es2015.js.map