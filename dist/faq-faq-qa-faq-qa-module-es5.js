(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["faq-faq-qa-faq-qa-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/website-configuration/faq/faq-qa/list/list.component.html":
    /*!****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/website-configuration/faq/faq-qa/list/list.component.html ***!
      \****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsWebsiteConfigurationFaqFaqQaListListComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <div class=\"clearFix\" style=\"padding-left: 15px;padding-right: 15px;\">\n  <section class=\"slide\">\n      <div class=\"header-section\">\n        <div class=\"header-item\" id=\"coupon\" (click)=\"toggleActiveSession('coupon')\" routerLink=\"/view/website-configuration/faq/category/list\"\n          [ngClass]=\"(activeSession=='coupon')?'active':'non-active'\">\n           <div class=\"img-container\" *ngIf=\"activeSession=='coupon'\">\n            <img src=\"../../.././../../assets/images/estore/Coupon_White.svg\" alt=\"coupon\">\n          </div>\n          <div class=\"img-container\" *ngIf=\"activeSession!='coupon'\">\n            <img src=\"../../../../../assets/images/estore/coupon_Grey.svg\" alt=\"coupon\">\n          </div> -->\n         <!-- <div class=\"model-name-container\">\n            <span>Category</span>\n          </div>\n        </div>\n        <div class=\"header-item\" id=\"voucher\" (click)=\"toggleActiveSession('voucher')\" routerLink=\"/view/website-configuration/faq/qa/list\"\n          [ngClass]=\"(activeSession=='voucher')?'active':'non-active'\">\n          <div class=\"img-container\" *ngIf=\"activeSession=='voucher'\">\n            <img src=\"../../../../../assets/images/estore/Voucher_White.svg\" alt=\"voucher\">\n          </div>\n          <div class=\"img-container\" *ngIf=\"activeSession!='voucher'\">\n            <img src=\"../../../../../assets/images/estore/Voucher_Grey.svg\" alt=\"voucher\">\n          </div> \n          <div class=\"model-name-container\">\n            <span>QA</span>\n          </div>\n        </div>\n      </div>\n    </section>\n</div>\n<section class=\"sms-table-wrapper\">\n\n    <div class=\"filter-item-2\">\n        <button type=\"button\" name=\"button\" class=\"add-class-btn\" routerLink=\"../add\" style=\"margin-right: 15px;\">\n          <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n          &nbsp;\n          Add FAQ QA\n        </button>\n      </div>\n    <app-basic-table [headers]=\"headerSetting\" [displayData]=\"staticPageData\" [tableSetting]=\"tableSetting\"\n      [rowColumnSetting]=\"rowColumns\" (editView)='editRow($event)' (deleteView)='deleteRow($event)'>\n    </app-basic-table>\n    <div style=\"padding-top: 9px;\">\n      <pagination (goPage)=\"fetchTableDataByPage($event)\" (goNext)=\"fetchNext()\" (goPrev)=\"fetchPrevious()\"\n        [pagesToShow]=\"10\" [page]=\"pageIndex\" [perPage]=\"displayBatchSize\" [sizeArr]=\"sizeArr\" [count]=\"totalRecords\"\n        (sizeChange)=\"updateTableBatchSize($event)\">\n      </pagination>\n    </div>\n\n\n  </section> -->\n   <div  class=\"set1 page-content\">\n          \n          <div class=\"display\">\n            <div><p class=\"title\">FAQs</p></div>\n            <div>\n              <select class=\"faq_select mr10\" [(ngModel)]=\"selected\" (change)=\"navigateTo($event.target.value)\">\n                <option value=\"Category\" >Category</option>\n                <option value= \"QA\"  >QA</option>\n              </select>\n              <span class=\"mr10 line\"></span>\n              <button class=\"blue_button\" data-toggle=\"modal\" data-target=\"#myModal_qa\" (click)=\"cancel()\">Add FAQ QA</button>\n            </div>\n           </div>\n          <br>\n          <div class=\"qa\">\n            <div class=\"table_head\" >\n              <div>\n                ID\n                </div>\n                <div>\n                  Category Name\n                </div>\n                <div>\n                Question\n                </div>\n                <div>Answer</div>\n                <div>Order Number</div>\n                <div>\n                  Action\n                </div>\n            </div>\n            <div class=\"table_body\" *ngFor=\"let data of staticPageData\">\n              <div>\n                {{data.id}}\n              </div>\n              <div>\n                {{data.category_name}}\n              </div>\n              <div>\n                {{data.question}}\n              </div>\n              <div>{{data.answer}}</div>\n              \n              <div>\n                {{data.order_number}}\n              </div>\n            \n              <div>\n              <a><img src=\"../../../../assets/img_web_app/edit.svg\" (click)=\"editRow(data)\" class=\"mr10\"></a>\n              <a><img src=\"../../../../assets/img_web_app/delete.svg\" (click)=\"deleteRow(data)\"></a>\n              </div>\n            </div>\n          </div>\n          <div class=\"modal\" id=\"myModal_qa\">\n           <div class=\"modal-dialog\">\n             <div class=\"modal-content\">\n         \n              \n               <div class=\"modal-header\">\n                 <h4 class=\"modal-title\">FAQ QA</h4>\n                 <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n               </div>\n               <div class=\"modal-body\">\n                 <div>\n                   <p class=\"label_p\">Category <span>*</span> </p>\n                   <select [(ngModel)]=\"pageModel.category_id\" class=\"input\">\n                    <option value=\"\">Please select Category</option>\n                    <option value=\"{{data.id}}\" *ngFor=\"let data of categoryData1\">{{data.name}} </option>\n                </select>\n                 </div>\n                 <div>\n                    <p class=\"label_p\">Question <span>*</span> </p>\n                    <textarea placeholder=\"Question\" [(ngModel)]=\"pageModel.question\" class=\"input texth\"></textarea>\n                 </div>\n                 <div>\n                  <p class=\"label_p\">Answer </p>\n                  <textarea placeholder=\"Answer\" [(ngModel)]=\"pageModel.answer\" class=\"input texth\"></textarea>\n               </div>\n               <div>\n                <p class=\"label_p\">Order Number </p>\n               <input placeholder=\"Order Number\" [(ngModel)]=\"pageModel.order_number\" class=\"input\">\n             </div>\n             <div class=\"display\">\n              <div></div>\n              <div>\n                <button data-dismiss=\"modal\" class=\"mr10 white_button\" (click)=\"cancel()\">Cancel</button>\n                <button  class=\"blue_button\"  (click)=\"saveData()\"\n                [disabled]=\"auth.isRippleLoad.getValue()\">Save</button>\n              </div>\n            </div>\n               </div>\n             \n             </div>\n           </div>\n          </div>\n        </div> \n          ";
      /***/
    },

    /***/
    "./src/app/components/website-configuration/faq/faq-qa/faq-qa-routing.module.ts":
    /*!**************************************************************************************!*\
      !*** ./src/app/components/website-configuration/faq/faq-qa/faq-qa-routing.module.ts ***!
      \**************************************************************************************/

    /*! exports provided: FaqQaRoutingModule */

    /***/
    function srcAppComponentsWebsiteConfigurationFaqFaqQaFaqQaRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FaqQaRoutingModule", function () {
        return FaqQaRoutingModule;
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


      var _faq_qa_list_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../faq-qa/list/list.component */
      "./src/app/components/website-configuration/faq/faq-qa/list/list.component.ts");
      /* harmony import */


      var _faq_qa_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./faq-qa.component */
      "./src/app/components/website-configuration/faq/faq-qa/faq-qa.component.ts");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      }; //import { AddEditComponent } from '../faq-qa/add-edit/add-edit.component';


      var routes = [{
        path: '',
        component: _faq_qa_component__WEBPACK_IMPORTED_MODULE_3__["FaqQaComponent"],
        pathMatch: 'prefix',
        children: [// {
        //   path: 'QA',
        //   component: FaqQaComponent
        // },
        {
          path: 'list',
          component: _faq_qa_list_list_component__WEBPACK_IMPORTED_MODULE_2__["ListComponent"]
        }]
      }];

      var FaqQaRoutingModule =
      /** @class */
      function () {
        var FaqQaRoutingModule = function FaqQaRoutingModule() {
          _classCallCheck(this, FaqQaRoutingModule);
        };

        FaqQaRoutingModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })], FaqQaRoutingModule);
        return FaqQaRoutingModule;
      }();
      /***/

    },

    /***/
    "./src/app/components/website-configuration/faq/faq-qa/faq-qa.module.ts":
    /*!******************************************************************************!*\
      !*** ./src/app/components/website-configuration/faq/faq-qa/faq-qa.module.ts ***!
      \******************************************************************************/

    /*! exports provided: FaqQaModule */

    /***/
    function srcAppComponentsWebsiteConfigurationFaqFaqQaFaqQaModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FaqQaModule", function () {
        return FaqQaModule;
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


      var _faq_qa_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./faq-qa-routing.module */
      "./src/app/components/website-configuration/faq/faq-qa/faq-qa-routing.module.ts");
      /* harmony import */


      var _list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./list/list.component */
      "./src/app/components/website-configuration/faq/faq-qa/list/list.component.ts");
      /* harmony import */


      var _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../components/shared/shared.module */
      "./src/app/components/shared/shared.module.ts");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      }; //import { AddEditComponent } from './add-edit/add-edit.component';


      var FaqQaModule =
      /** @class */
      function () {
        var FaqQaModule = function FaqQaModule() {
          _classCallCheck(this, FaqQaModule);
        };

        FaqQaModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
          declarations: [_list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _faq_qa_routing_module__WEBPACK_IMPORTED_MODULE_2__["FaqQaRoutingModule"], _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]
        })], FaqQaModule);
        return FaqQaModule;
      }();
      /***/

    },

    /***/
    "./src/app/components/website-configuration/faq/faq-qa/list/list.component.scss":
    /*!**************************************************************************************!*\
      !*** ./src/app/components/website-configuration/faq/faq-qa/list/list.component.scss ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsWebsiteConfigurationFaqFaqQaListListComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "* {\n  margin: 0px;\n  font-family: 'Open Sans', sans-serif;\n}\n\n.flex {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.flex2 {\n  display: flex;\n}\n\n.blue_button {\n  background-color: #109CF1;\n  color: white;\n  padding: 0px 20px;\n  font-size: 12px;\n  border: none;\n  height: 30px;\n  line-height: 30px;\n  border-radius: 5px;\n  font-weight: 500;\n  cursor: pointer;\n}\n\n.white_button {\n  background-color: #fff;\n  color: #109CF1;\n  padding: 0px 19px;\n  font-size: 12px;\n  height: 30px;\n  border: 1px solid #109CF1;\n  border-radius: 5px;\n  font-weight: 500;\n  line-height: 30px;\n  cursor: pointer;\n}\n\ninput:focus,\nselect:focus,\nbutton:focus {\n  outline: none;\n}\n\n.w98 {\n  width: 98%;\n  margin: 0px auto;\n}\n\n.w981 {\n  margin-left: 1%;\n}\n\n.main_div {\n  display: flex;\n  margin-top: 10px;\n  padding-top: 16px;\n}\n\n.sidebar {\n  width: 15%;\n  background: #F3F4F6;\n  border: 1px solid #DCDCDC;\n  box-sizing: border-box;\n height: calc(100vh - 60px);\n  position: fixed;\n\n}\n\n.sidebar ul:first-of-type {\n  height: calc(100vh - ( 60px + 100px));\n  overflow-y: auto;\n}\n\n.mr16{\n  margin-right: 16px;\n}\n\n.settings {\n  padding: 20px 10px;\n  border-bottom: 1px solid #000;\n  font-weight: bold;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n  letter-spacing: 0.01em;\n  color: #1A2334;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.settings>span>span {\n  position: relative;\n  top: -6px;\n}\n\n.menu1 {\n  margin-top: 20px;\n}\n\n.menu1 li {\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 18px;\n  letter-spacing: 0.01em;\n  padding: 20px 0px;\n  padding-left: 10px;\n  color: #1A2334;\n  cursor: pointer;\n}\n\n.menu1 li.selected {\n  background: #FFFFFF;\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n\n  letter-spacing: 0.01em;\n\n}\n\n.selected{\n  background: #FFFFFF;\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n\n  letter-spacing: 0.01em;\n}\n\na {\n  color: #1A2334;\n  text-decoration: none;\n}\n\n.menu1 li.selected>a {\n\n  color: #0097F9;\n}\n\n.display {\n  display: flex;\n  justify-content: space-between;\n}\n\n.bottom {\n  padding: 1%;\n  position: fixed;\n  bottom: 0;\n  background: #fff;\n  width: calc(100% - 15%);\n  border-top: 1px solid #EAEAEA;\n  box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.25);\n}\n\n.mr10 {\n  margin-right: 16px;\n}\n\n.set1 {\n  /*overflow-y: scroll;*/\n  padding:0 1%;\n  margin-left: 17.7%;\n}\n\n.hidden {\n  visibility: hidden;\n}\n\n.settings_label {\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n  margin-right: 30px;\n  letter-spacing: 0.01em;\n  color: #000000;\n  margin-left: -10px;\n}\n\n.checkbox {\n  display: grid;\n  grid-template-columns: -webkit-min-content auto;\n  grid-template-columns: min-content auto;\n  grid-gap: 0.5em;\n  font-size: 2rem;\n  margin-bottom: 16px;\n  color: var(--color);\n  cursor: pointer;\n}\n\n.checkbox__input input {\n  opacity: 0;\n  width: 0em;\n  height: 0em;\n}\n\n.checkbox__control {\n  display: inline-grid;\n  width: 0.5em;\n  height: 0.5em;\n  border-radius: 0.1em;\n  border: 1px solid #BBB2B2;\n  ;\n}\n\n.checkbox__input {\n  display: grid;\n  grid-template-areas: \"checkbox\";\n}\n\n.checkbox__control svg {\n  color: #fff;\n  background: #109CF1;\n  transition: transform 0.1s ease-in 25ms;\n  transform: scale(0);\n  stroke-width: 4;\n  padding: 2px;\n  width: 0.5em;\n  height: 0.5em;\n  border: none;\n  border-radius: 3px;\n  transform-origin: bottom left;\n}\n\n.checkbox__input input:checked+.checkbox__control svg {\n  transform: scale(1);\n}\n\n.checkbox__input input:checked+.checkbox__control {\n  border: none;\n}\n\n.flex1>div:nth-child(2) {\n  width: 100%;\n}\n\n.input {\n  border: 0.5px solid #2D2D2D;\n  box-sizing: border-box;\n  border-radius: 5px;\n  width: 336px;\n  height: 35px;\n  margin-bottom: 16px;\n  font-weight: normal;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n  padding-left: 10px !important;\n  letter-spacing: 0.01em;\n\n  color: #000000;\n}\n\n.input::-moz-placeholder {\n  font-weight: normal;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n\n  letter-spacing: 0.01em;\n  padding-left: 10px;\n  color: #000000;\n}\n\n.input:-ms-input-placeholder {\n  font-weight: normal;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n\n  letter-spacing: 0.01em;\n  padding-left: 10px;\n  color: #000000;\n}\n\n.input::placeholder {\n  font-weight: normal;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n\n  letter-spacing: 0.01em;\n  padding-left: 10px;\n  color: #000000;\n}\n\n.flex1>div:first-child {\n  width: 75px;\n}\n\n/*extra layout*/\n\n/*switch-tab*/\n\n.nav-item .nav-link {\n  font-weight: 400;\n  color: #405877;\n  padding-bottom: 8px;\n  cursor: pointer;\n  font-size: 13px\n}\n\n.nav-item .nav-link.active {\n  font-weight: 600;\n  border-bottom: 3px solid #109CF1 !important;\n  color: #109CF1 !important;\n}\n\n.nav-link {\n  display: block;\n  padding: 1.5rem 0rem;\n  margin-right: 1rem;\n  margin: -1rem 2.5rem;\n  margin-left: 0rem;\n}\n\n.nav>li {\n  display: inline;\n}\n\n.nav-link:hover,\n.nav-link,\n.nav-link:focus {\n  background-color: transparent;\n}\n\n.nav-link {\n  display: inline;\n}\n\n.nav-item {\n  .active {\n    border-bottom: 3px solid #109cf1 !important;\n    color: #109cf1 !important;\n  }\n}\n\n.activeSession{\n  background: #FFFFFF;\n  font-weight: 600;\nfont-size: 13px;\nline-height: 18px;\n/* identical to box height */\nbox-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);\nletter-spacing: 0.01em;\n\ncolor: #0097F9;\n}\n\n.main-shadow {\n  border-bottom: 1px solid #EFF0F5;\n  padding-bottom: 8px;\n}\n\n/*web image*/\n\n.flex2 {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.flex2.img img{\n  height:154px;\n  width: auto;\n}\n\n.flex2>div {\n  width: 50%;\n}\n\n.upload-img{\n  background: #FFFFFF;\n  border: 1px dashed #E1E1E1;\n  box-sizing: border-box;\n  border-radius: 10px;\n  height:155px;\n  width: 277px;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  justify-content: space-around;\n  margin-bottom: 4px;\n}\n\n.flex2.img .upload-img img{\n  height: 80px;\n  width: auto;\n}\n\n.flex2>div>div {\n  margin: 30px auto;\n  width: 300px;\n}\n\n.flex2 p.one {\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n  letter-spacing: 0.01em;\n  color: #1A2334;\n}\n\n.flex2 p.two {\n  font-weight: 600;\n  font-size: 10px;\n  line-height: 14px;\n  letter-spacing: 0.01em;\n  margin-bottom: 5px;\n  color: #636363;\n\n}\n\n.flex2 p.three {\n  font-weight: 400;\n  font-size: 10px;\n  line-height: 14px;\n  letter-spacing: 0.01em;\n\n  color: #636363;\n}\n\n.flex2 p.selected {\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n\n  letter-spacing: 0.01em;\n\n  color: #109CF1;\n\n}\n\n.flex2 img {\n  cursor: pointer;\n}\n\n/*Static Page (More)*/\n\n.title {\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n  letter-spacing: 0.01em;\n  color: #334D6E;\n}\n\n.table_head {\n  display: flex;\n  background: #EFF0F5;\n  border-radius: 2px;\n}\n\n.table_head>div {\n  width: calc((100% - ((160px * 4) - 100px)) / 1);\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 50px;\n  /* identical to box height */\n  padding-left: 20px;\n  letter-spacing: 0.01em;\n  color: #323C47;\n}\n\n.table_head>div:nth-child(1),\n.table_head>div:nth-child(3),\n.table_head>div:nth-child(4),\n.table_head>div:nth-child(5) {\n  width: 160px;\n}\n\n.table_body {\n  display: flex;\n  border-bottom: 1px solid #EFF0F5;\n  background-color: #fff;\n\n\n}\n\n.table_head>div:nth-child(6),\n.table_body>div:nth-child(6) {\n  width: 100px;\n}\n\n.modal-header h4{\n  margin: 0;\n display: inline-block;\n}\n\n.table_body>div {\n  width: calc((100% - ((160px * 4) - 100px)) / 1);\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 18px;\n  height: 50px;\n  letter-spacing: 0.01em;\n  padding-left: 20px;\n  display: flex;\n  align-items: center;\n  color: #323C47;\n}\n\n.table_body>div:nth-child(1),\n.table_body>div:nth-child(3),\n.table_body>div:nth-child(4),\n.table_body>div:nth-child(5) {\n  width: 160px;\n\n}\n\n.table_body img {\n  cursor: pointer;\n}\n\n.modal-title {\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n  letter-spacing: 0.01em;\n  color: #334D6E;\n  margin-bottom: 0px;\n}\n\n.modal.in .modal-dialog {\n  margin: 0px auto;\n  margin-top: 60px;\n}\n\n.modal .label_p {\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 20px;\n  letter-spacing: 0.01em;\n  color: #334D6E;\n  margin:0;\n}\n\n.modal .label_p>span,\n.modal .size>span {\n  color: #FE0A27;\n}\n\n.modal .input {\n  background: #FFFFFF;\n  border: 1px solid #C4CACE;\n  box-sizing: border-box;\n  border-radius: 5px;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 16px;\n  width: 100%;\n  margin-bottom: 10px;\n  letter-spacing: 0.01em;\n  color: #323C47;\n  padding-left: 0px;\n}\n\n.modal .input::-moz-placeholder {\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 16px;\n  letter-spacing: 0.01em;\n  color: #323C47;\n\n}\n\n.modal .input:-ms-input-placeholder {\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 16px;\n  letter-spacing: 0.01em;\n  color: #323C47;\n\n}\n\n.modal .input::placeholder {\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 16px;\n  letter-spacing: 0.01em;\n  color: #323C47;\n\n}\n\n.modal textarea {\n  height: 55px;\n  padding: 10px 0px;\n}\n\n.modal .display select {\n  width: 168px;\n}\n\n.center {\n  align-items: center;\n}\n\n.top23 {\n  position: relative;\n  top: 5px;\n}\n\n.size {\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 16px;\n  letter-spacing: 0.01em;\n  color: #211F27;\n  margin-bottom:5px;\n}\n\n@media (min-width: 768px) {\n  .modal-dialog {\n    width: 400px;\n\n  }\n}\n\n.modal-dialog {\n  width: 400px;\n\n}\n\n@media (min-width: 768px) {\n  #myModal_faq .modal-dialog {\n    width: 340px;\n  }\n}\n\n#myModal_faq .modal-dialog {\n  width: 340px;\n\n}\n\n.file_name {\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n  margin: 10px 0px;\n  letter-spacing: 0.01em;\n  display: flex;\n  align-items: center;\n\n  color: #211F27;\n}\n\n.mb16{\n  margin-bottom: 6px;\n}\n\n.pic {\n  border: 0.5px dashed #5A5A5A;\n  box-sizing: border-box;\n  border-radius: 5px;\n  padding:5px;\n  text-align: center;\n}\n\n.pic>img{\n  height:60px;\n  width: auto;\n}\n\n.img_slider .table_body>div:nth-child(1),\n.img_slider .table_head>div:nth-child(1) {\n  width: 160px;\n}\n\n.img_slider .table_head>div:nth-child(4),\n.img_slider .table_body>div:nth-child(4) {\n  width: 90px;\n}\n\n.img_slider .table_head>div,\n.img_slider .table_body>div {\n  width: calc((100% - (160px + 90px)) / 2);\n}\n\n.position_bot {\n  position: relative;\n  top: 5px;\n}\n\n.white_box {\n  background: #FFFFFF;\n  box-shadow: 0px 10px 15px rgba(26, 35, 52, 0.05);\n  display: flex;\n  padding: 18px 0px;\n  margin-right: 1.25%;\n  margin-bottom: 20px;\n}\n\n.white_box>div:first-child {\n  display: flex;\n  width: 10%;\n  justify-content: center;\n}\n\n.white_box>div:first-child>img {\n  width: 39px;\n  height: 32px;\n}\n\n.white_box>div:last-child {\n  width: 90%;\n}\n\n.white_box p {\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n  letter-spacing: 0.01em;\n  color: #1A2334;\n}\n\n.white_box input {\n  border: none;\n  width: 100%;\n  border-bottom: 1px solid #E6E6E6;\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n  letter-spacing: 0.01em;\n  color: #1A2334;\n\n}\n\n.white_box input::-moz-placeholder {\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n  letter-spacing: 0.01em;\n  color: #8191AE;\n\n}\n\n.white_box input:-ms-input-placeholder {\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n  letter-spacing: 0.01em;\n  color: #8191AE;\n\n}\n\n.white_box input::placeholder {\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n  letter-spacing: 0.01em;\n  color: #8191AE;\n\n}\n\n.white {\n  position: fixed;\n  bottom: 10px;\n  width: calc(100% - 31%);\n  padding-right: 0.75%;\n  margin-bottom: 10px;\n}\n\n.white>div {\n  display: flex;\n\n  justify-content: space-between;\n}\n\n.white2 {\n\n  background: #FFFFFF;\n  padding: 20px;\n}\n\n.white2>div:first-child {\n  display: flex;\n  justify-content: space-between;\n\n}\n\n.white2>div:first-child>div {\n  width: 32%;\n}\n\n.white2 label {\n  font-weight: 400;\n  font-size: 11px;\n  line-height: 15px;\n  /* identical to box height */\n  display: block;\n  letter-spacing: 0.01em;\n  margin-bottom: 10px;\n  color: #323C47;\n\n}\n\n.white2 input,\n.white2 select {\n\n  background: #F5F5F5;\n  border-radius: 2px;\n  letter-spacing: 0.01em;\n  font-size: 11px;\n  line-height: 15px;\n  height: 35px;\n  padding-left: 10px;\n  color: #323C47;\n}\n\n.white2 input {\n  width: 72%;\n}\n\n.white2 input:nth-child(2) {\n  width: 100%;\n}\n\n.white2 select {\n  width: 21%;\n}\n\n.white2 input::-moz-placeholder, .white2 textarea::-moz-placeholder {\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 16px;\n  letter-spacing: 0.01em;\n\n  color: #727679;\n\n}\n\n.white2 input:-ms-input-placeholder, .white2 textarea:-ms-input-placeholder {\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 16px;\n  letter-spacing: 0.01em;\n\n  color: #727679;\n\n}\n\n.white2 input::placeholder,\n.white2 textarea::placeholder {\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 16px;\n  letter-spacing: 0.01em;\n\n  color: #727679;\n\n}\n\n.white2 textarea {\n  background: #F5F5F5;\n  border-radius: 2px;\n  letter-spacing: 0.01em;\n  font-size: 11px;\n  line-height: 15px;\n  height: 90px;\n  padding-left: 10px;\n  color: #323C47;\n  width: 65%;\n}\n\n.page-content {\n  background: #F5F5F5;\n  min-height: calc(100vh - 60px);\n  height: auto;\n  padding-top: 16px;\n}\n\n.flex_white {\n  display: flex;\n  justify-content: space-between;\n  padding: 1% 1.75%;\n  background-color: #fff;\n}\n\n.white3 {\n  margin-left: 1%;\n  padding: 1%;\n  background-color: #fff;\n}\n\n.white3 p {\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n\n  letter-spacing: 0.01em;\n\n  color: #323C47;\n\n}\n\nspan.color {\n  width: 25px;\n  height: 25px;\n  margin-left: 20px;\n  background-color: #109CF1;\n}\n\nspan.color1 {\n  width: 25px;\n  height: 25px;\n  margin-left: 20px;\n  background-color:white;\n  border:solid 1px rgb(67, 143, 206);\n}\n\n.flex_white>div:first-child>div {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.flex_white>div:first-child p {\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n  letter-spacing: 0.01em;\n  color: #000000;\n}\n\n.flex_white>div:nth-child(2) {\n\n  font-weight: 400;\n  font-size: 24px;\n  line-height: 41px;\n  /* identical to box height */\n  letter-spacing: 0.01em;\n  color: #86858B;\n  display: flex;\n\n  align-items: center;\n}\n\n.flex_white>div:nth-child(3) {\n  display: flex;\n\n  align-items: center;\n}\n\nbody {\n  background: #F5F5F5;\n}\n\n/* faq*/\n\n.faq .table_body>div:nth-child(1),\n.faq .table_head>div:nth-child(1) {\n  width: 160px;\n}\n\n.faq .table_head>div:nth-child(4),\n.faq .table_body>div:nth-child(4) {\n  width: 90px;\n}\n\n.faq .table_head>div:nth-child(3),\n.faq .table_body>div:nth-child(3) {\n  width: 150px;\n}\n\n.faq .table_head>div,\n.faq .table_body>div {\n  width: calc((100% - (160px + 240px)) / 1);\n}\n\n.faq_select {\n  background: #FFFFFF;\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n  width: 103px;\n  height: 30px;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 16px;\n  /* identical to box height */\n  cursor: pointer;\n  text-align: center;\n  letter-spacing: 0.01em;\n\n  color: #334D6E;\n}\n\nspan.line {\n  border-left: 1px solid #C4C4C4;\n  height: 32px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.02);\n}\n\n/*qa*/\n\n.qa .table_body>div:nth-child(1),\n.qa .table_head>div:nth-child(1) {\n  width: 90px;\n}\n\n.qa .table_head>div:last-child,\n.qa .table_body>div:last-child {\n  width: 90px;\n}\n\n.qa .table_body>div:nth-child(5),\n.qa .table_head>div:nth-child(5) {\n  width: 160px;\n}\n\n.qa .table_head>div,\n.qa .table_body>div {\n  width: calc((100% - (90px + 150px)) / 3);\n}\n\n.texth {\n  height: 70px;\n}\n\n.blue_large_button {\n  width: 100%;\n  background: #157EBE;\n  border: 1px solid #E8E8E8;\n  box-sizing: border-box;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.03);\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n\n  letter-spacing: 0.01em;\n  height: 35px;\n  color: #FFFFFF;\n}\n\n.white_large_button {\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n  width: 100%;\n  letter-spacing: 0.01em;\n  border: none;\n  height: 20px;\n  margin-top: 10px;\n  background-color: #fff;\n  color: #406585;\n\n}\n\n/*testimonial*/\n\n.fa.fa-star {\n  color: orange;\n  margin-right: 10px;\n}\n\n.testimonial .table_body>div:nth-child(1),\n.testimonial .table_head>div:nth-child(1),\n.testimonial .table_head>div:last-child,\n.testimonial .table_body>div:last-child {\n  width: 90px;\n}\n\n.testimonial .table_head>div:nth-child(4),\n.testimonial .table_body>div:nth-child(4),\n.testimonial .table_head>div:nth-child(5),\n.testimonial .table_body>div:nth-child(5) {\n  width: 150px;\n}\n\n.testimonial .table_head>div,\n.testimonial .table_body>div {\n  width: calc((100% - (180px + 300px)) / 2);\n}\n\n.testimonial .scroll,.img_slider .scroll, .scroll-sp {\n  height: calc(100vh - (190px));\n  overflow-y: auto;\n  background-color: #fff;\n}\n\n.scroll-sp{\n  height:calc(100% - 16px);\n  overflow-y: auto;\n  overflow-x: hidden;\n  margin: 16px 0px;\n}\n\n/* width */\n\n.scroll-sp::-webkit-scrollbar {\n  width: 3px;\n}\n\n/* Track */\n\n.scroll-sp::-webkit-scrollbar-track {\n  background: #EFF0F5;\n\n}\n\n/* Handle */\n\n.scroll-sp::-webkit-scrollbar-thumb {\n  background: #0097F9;\n\n}\n\n.scroll-sp {\n  scrollbar-color: #0097F9 #EFF0F5;\n  scrollbar-width: thin;\n}\n\n.space {\n  padding-top: 10px;\n}\n\n.white_box_large {\n  background-color: #fff;\n  padding: 20px;\n}\n\n.white_box_large p {\n  font-weight: 400;\n  font-size: 11px;\n  line-height: 15px;\n  /* identical to box height */\n\n  letter-spacing: 0.01em;\n\n  color: #323C47;\n\n}\n\n.white_box_large input {\n  width: 100%;\n  background: #F5F5F5;\n  border-radius: 2px;\n  height: 35px;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 16px;\n  letter-spacing: 0.01em;\n  outline: none;\n  border: none;\n  color: #323C47;\n\n}\n\n.white_box_large input::-moz-placeholder {\n  color: #727679;\n}\n\n.white_box_large input:-ms-input-placeholder {\n  color: #727679;\n}\n\n.white_box_large input::placeholder {\n  color: #727679;\n}\n\n.white_box_large div {\n  text-align: center;\n}\n\n/* Manage Content (Other Links)*/\n\np.editable {\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n\n  letter-spacing: 0.01em;\n  height: 40vh;\n  color: #1A2334;\n}\n\np.editable2 {\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n\n  letter-spacing: 0.01em;\n  color: #1A2334;\n}\n\n.white_box5 {\n  background-color: #fff;\n  padding: 16px 30px;\n  margin-top: 15px;\n}\n\n.editbox {\n  background: #FFFFFF;\n  box-shadow: 2px 0px 10px 2px rgba(0, 0, 0, 0.1);\n  display: flex;\n  justify-content: space-around;\n  padding: 14px 20px;\n}\n\n.editbox>div:nth-child(1) img {\n  margin-right: 10px;\n  cursor: pointer;\n  width: 20.5px;\n  height: auto;\n}\n\n.editbox .line {\n  border-right: 2px solid #F3F3F6;\n  ;\n}\n\n.editbox select {\n  border: none;\n  padding: 0px 15px;\n  cursor: pointer;\n  outline: none;\n}\n\n.editbox select .sans {\n  font-weight: 600;\n  font-family: Open Sans;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n\n  letter-spacing: 0.01em;\n\n  color: #1A2334;\n\n}\n\n.editbox select.tt {\n  /*background: url(../../../../assets/img_web_app/tt.svg);*/\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n.editbox select.font {\n  /*background: url(../../../../assets/img_web_app/font.svg);*/\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n.editbox div.fonts {\n  display: flex;\n  align-items: center;\n}\n\n.editbox div.fonts img {\n  margin-right: 20px;\n}\n\n.editbox div.fonts img.underline {\n  width: 10px;\n  height: auto;\n}\n\n.editbox div.color img {\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n  margin: 0px 20px;\n}\n\n.editbox div.color {\n  display: flex;\n  align-items: center;\n}\n\n.editbox div.font_align img {\n  margin-right: 20px;\n}\n\n.editbox div.font_align {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n\n.dropdown11 {\n  position: relative;\n  display: inline-block;\n}\n\n.dropdown-content11 {\n  display: none;\n  position: absolute;\n  background-color: #fff;\n  width: 179px;\n  height: 196px;\n  bottom: 0px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1;\n}\n\n.dropdown11:hover .dropdown-content11 {\n  display: block;\n}\n\n/* app*/\n\n.flex1 {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 10px;\n}\n\n.ellipse {\n  background: #F0EFEF;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);\n  width: 19px;\n  height: 19px;\n  padding: 0px 7px;\n  border-radius: 50%;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 16px;\n  /* identical to box height, or 100% */\n\n  letter-spacing: 0.01em;\n\n  color: #0097F9;\n\n}\n\n.blue_line {\n  border-top: 1px solid #0097F9;\n  width: 22px;\n  display: inline-block;\n  margin: 0px 7px;\n  position: relative;\n  top: -4px;\n}\n\n.blue_settings {\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 22px;\n  /* identical to box height */\n  letter-spacing: 0.01em;\n  color: #0097F9;\n}\n\n.flex1>div:first-child,\n.flex3>div:first-child,\n.flex4>div:first-child {\n  width: 75px;\n}\n\n.flex3,\n.flex4 {\n  display: flex;\n}\n\np.two2 {\n  font-weight: 400;\n  font-size: 11px;\n  line-height: 15px;\n  letter-spacing: 0.01em;\n\n  color: #334D6E;\n\n}\n\np.one2 {\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n\n  letter-spacing: 0.01em;\n\n  color: #334D6E;\n}\n\n.flex3>div:nth-child(2) {\n  width: 150px;\n  margin-right: 50px;\n}\n\n.flex3>div:nth-child(3) span {\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 35px;\n  /* identical to box height */\n  letter-spacing: 0.01em;\n  margin: 0px 10px;\n  color: #211F27;\n\n}\n\n.flex3>div:nth-child(3) span img:first-of-type {\n  margin: 0px 5px;\n  position: relative;\n  top: 8px;\n}\n\n.flex3>div:nth-child(3) span img:nth-of-type(2) {\n  margin: 0px 5px;\n  position: relative;\n  top: 3px;\n}\n\n.flex3>div:nth-child(3) .pic {\n  margin-top: 20px;\n}\n\n.sepration {\n  border-bottom: 1px solid rgba(29, 29, 29, 0.5);\n  margin: 20px 0px;\n  margin-left: 65px;\n}\n\n.flex4 {\n  margin-top: 20px;\n  justify-content: space-between;\n}\n\n.flex5 {\n  margin-top: 20px;\n  justify-content: space-between;\n  display: flex;\n  margin-left: 60px;\n}\n\n.flex4>div:nth-child(2) img {\n  height: 30px;\n  width: 30px;\n  line-height: 35px;\n  margin-right: 15px;\n}\n\n.flex4>div:nth-child(3) {\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 35px;\n  /* identical to box height */\n  width: 180px;\n  letter-spacing: 0.01em;\n\n  color: #334D6E;\n}\n\nb {\n  font-weight: 600;\n}\n\n.flex4 input {\n  border: none;\n  box-sizing: border-box;\n  border-radius: 5px;\n  font-weight: normal;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n  height: 35px;\n  letter-spacing: 0.01em;\n  width: 573px;\n  color: #334D6E;\n  padding-left: 10px;\n}\n\n.flex4 input::-moz-placeholder {\n  color: #8e939a;\n}\n\n.flex4 input:-ms-input-placeholder {\n  color: #8e939a;\n}\n\n.flex4 input::placeholder {\n  color: #8e939a;\n}\n\n.white29 {\n  position: fixed;\n  bottom: 0px;\n  background: #F5F5F5;\n  padding: 1%;\n  width: calc(100% - 32.5%);\n}\n\n.white29>div {\n  display: flex;\n\n  justify-content: space-between;\n}\n\n.flex4>div:nth-child(3) span>span {\n  font-weight: 400;\n  font-size: 11px;\n  line-height: 15px;\n  letter-spacing: 0.01em;\n\n  color: #334D6E;\n}\n\n.sep_line {\n  margin-left: 65px;\n  border-bottom: 1px solid #C4C4C4;\n  margin-bottom: 16px;\n}\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 35px;\n  height: 12px;\n}\n\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  /* background-color: #ccc;*/\n  -webkit-transition: .4s;\n  border: 1px solid #BDBABA;\n  box-sizing: border-box;\n  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1));\n  transition: .4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 18px;\n  width: 18px;\n  left: -6px;\n  bottom: -4px;\n  background-color: #BDBABA;\n  transition: .4s;\n}\n\ninput:checked+.slider {\n  /*background-color: #2196F3;*/\n}\n\ninput:focus+.slider {\n  /*box-shadow: 0 0 1px #2196F3;*/\n}\n\ninput:checked+.slider:before {\n  transform: translateX(26px);\n  background-color: #19C83F;\n}\n\ninput:checked+.slider {\n  border: 1px solid #BDBABA;\n}\n\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n\n.toggle {\n  display: flex;\n\n  padding-top: 30px;\n\n  width:160px;\n}\n\n.off {\n  font-weight: 300;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n  letter-spacing: 0.01em;\n  color: #000000;\n  position: relative;\n  top: -4px;\n  margin: 0px 10px;\n}\n\n.on {\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n  margin: 0px 10px;\n  letter-spacing: 0.01em;\n  position: relative;\n  top: -4px;\n  color: #19C83F;\n}\n\n.bold_settings {\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 18px;\n  margin-bottom: 8px;\n  /* identical to box height */\n  letter-spacing: 0.01em;\n  color: #323C47;\n}\n\n.black_settings {\n  font-weight: normal;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n  margin-bottom: 16px;\n  letter-spacing: 0.01em;\n\n  color: #323C47;\n}\n\n.space16 {\n  margin-top: 16px;\n}\n\n.input1 {\n \n  box-sizing: border-box;\n  border-radius: 5px;\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 35px;\n  /* identical to box height */\n  width: 573px;\n  padding-left: 10px;\n  letter-spacing: 0.01em;\n  color: #334D6E\n}\n\n.w135 {\n  width: 225px\n}\n\n.filter-item-2 {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.filter-item-2 .add-class-btn {\n  border: 1px solid #3a66fa;\n  border-radius: 4px;\n  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);\n  padding: 4px 10px;\n  background: white;\n  color: #1283f4;\n  font-size: 14px;\n  font-weight: 600;\n  height: 30px;\n}\n\n.sms-table-wrapper {\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.slide .header-section {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  width: 20%;\n  margin-left: 40%;\n}\n\n.slide .header-section .header-item {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  padding: 5px;\n  width: 50%;\n  cursor: pointer;\n}\n\n.slide .header-section .header-item .img-container img {\n  width: 20px;\n  height: 20px;\n  margin: 0px 10px;\n}\n\n.slide .header-section .header-item .model-name-container {\n  width: 50%;\n  margin-top: 3px;\n}\n\n.slide .header-section .header-item .model-name-container span {\n  font-size: 14px;\n  font-weight: 600;\n}\n\n.slide .header-section #coupon {\n  border-top-left-radius: 25px;\n  border-bottom-left-radius: 25px;\n  border: 2px solid #3a65f8;\n}\n\n.slide .header-section #voucher {\n  border-top-right-radius: 25px;\n  border-bottom-right-radius: 25px;\n  border: 2px solid #3a65f8;\n}\n\n.active {\n  background: #3a66fa;\n  color: #fdfdfd;\n}\n\n.non-active {\n  background: #ffffff;\n  color: #b0b0b0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93ZWJzaXRlLWNvbmZpZ3VyYXRpb24vd2Vic2l0ZS1jb25maWd1cmF0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3dlYnNpdGUtY29uZmlndXJhdGlvbi9mYXEvZmFxLXFhL2xpc3QvbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLGFBQWE7QUFDZjs7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixZQUFZO0VBQ1osWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUdBOzs7RUFHRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsc0JBQXNCO0NBQ3ZCLDBCQUEwQjtFQUN6QixlQUFlOztBQUVqQjs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyxnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsNkJBQTZCO0VBQzdCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLDRCQUE0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Qzs7QUF2Q0U7RUFxQ00sNkJBQTZCO0VBQzdCLGdDQUFnQztFQUNoQyx5QkFBeUI7QUFNakM7O0FBRkU7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztBQUtsQjs7QUFIRTtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0FBTWxCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy93ZWJzaXRlLWNvbmZpZ3VyYXRpb24vZmFxL2ZhcS1xYS9saXN0L2xpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbn1cblxuLmZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4uZmxleDIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmJsdWVfYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEwOUNGMTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAwcHggMjBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGhlaWdodDogMzBweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ud2hpdGVfYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgY29sb3I6ICMxMDlDRjE7XG4gIHBhZGRpbmc6IDBweCAxOXB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGhlaWdodDogMzBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzEwOUNGMTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5cbmlucHV0OmZvY3VzLFxuc2VsZWN0OmZvY3VzLFxuYnV0dG9uOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLnc5OCB7XG4gIHdpZHRoOiA5OCU7XG4gIG1hcmdpbjogMHB4IGF1dG87XG59XG5cbi53OTgxIHtcbiAgbWFyZ2luLWxlZnQ6IDElO1xufVxuXG4ubWFpbl9kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBwYWRkaW5nLXRvcDogMTZweDtcbn1cblxuLnNpZGViYXIge1xuICB3aWR0aDogMTUlO1xuICBiYWNrZ3JvdW5kOiAjRjNGNEY2O1xuICBib3JkZXI6IDFweCBzb2xpZCAjRENEQ0RDO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuIGhlaWdodDogY2FsYygxMDB2aCAtIDYwcHgpO1xuICBwb3NpdGlvbjogZml4ZWQ7XG5cbn1cblxuLnNpZGViYXIgdWw6Zmlyc3Qtb2YtdHlwZSB7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtICggNjBweCArIDEwMHB4KSk7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG4ubXIxNntcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xufVxuLnNldHRpbmdzIHtcbiAgcGFkZGluZzogMjBweCAxMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gIGNvbG9yOiAjMUEyMzM0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnNldHRpbmdzPnNwYW4+c3BhbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtNnB4O1xufVxuXG4ubWVudTEge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4ubWVudTEgbGkge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICBwYWRkaW5nOiAyMHB4IDBweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBjb2xvcjogIzFBMjMzNDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubWVudTEgbGkuc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuXG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG5cbn1cbi5zZWxlY3RlZHtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cblxuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xufVxuYSB7XG4gIGNvbG9yOiAjMUEyMzM0O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5tZW51MSBsaS5zZWxlY3RlZD5hIHtcblxuICBjb2xvcjogIzAwOTdGOTtcbn1cblxuLmRpc3BsYXkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5ib3R0b20ge1xuICBwYWRkaW5nOiAxJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAxNSUpO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI0VBRUFFQTtcbiAgYm94LXNoYWRvdzogNHB4IDBweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbn1cblxuLm1yMTAge1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG59XG5cbi5zZXQxIHtcbiAgLypvdmVyZmxvdy15OiBzY3JvbGw7Ki9cbiAgcGFkZGluZzowIDElO1xuICBtYXJnaW4tbGVmdDogMTcuNyU7XG59XG4uaGlkZGVuIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuLnNldHRpbmdzX2xhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xufVxuXG4uY2hlY2tib3gge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbi1jb250ZW50IGF1dG87XG4gIGdyaWQtZ2FwOiAwLjVlbTtcbiAgZm9udC1zaXplOiAycmVtO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBjb2xvcjogdmFyKC0tY29sb3IpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jaGVja2JveF9faW5wdXQgaW5wdXQge1xuICBvcGFjaXR5OiAwO1xuICB3aWR0aDogMGVtO1xuICBoZWlnaHQ6IDBlbTtcbn1cblxuLmNoZWNrYm94X19jb250cm9sIHtcbiAgZGlzcGxheTogaW5saW5lLWdyaWQ7XG4gIHdpZHRoOiAwLjVlbTtcbiAgaGVpZ2h0OiAwLjVlbTtcbiAgYm9yZGVyLXJhZGl1czogMC4xZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkICNCQkIyQjI7XG4gIDtcbn1cblxuLmNoZWNrYm94X19pbnB1dCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiY2hlY2tib3hcIjtcbn1cblxuLmNoZWNrYm94X19jb250cm9sIHN2ZyB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjMTA5Q0YxO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xcyBlYXNlLWluIDI1bXM7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIHN0cm9rZS13aWR0aDogNDtcbiAgcGFkZGluZzogMnB4O1xuICB3aWR0aDogMC41ZW07XG4gIGhlaWdodDogMC41ZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gbGVmdDtcbn1cblxuLmNoZWNrYm94X19pbnB1dCBpbnB1dDpjaGVja2VkKy5jaGVja2JveF9fY29udHJvbCBzdmcge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuXG4uY2hlY2tib3hfX2lucHV0IGlucHV0OmNoZWNrZWQrLmNoZWNrYm94X19jb250cm9sIHtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uZmxleDE+ZGl2Om50aC1jaGlsZCgyKSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaW5wdXQge1xuICBib3JkZXI6IDAuNXB4IHNvbGlkICMyRDJEMkQ7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDMzNnB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG4gIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuXG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4uaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cblxuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4uZmxleDE+ZGl2OmZpcnN0LWNoaWxkIHtcbiAgd2lkdGg6IDc1cHg7XG59XG4vKmV4dHJhIGxheW91dCovXG4vKnN3aXRjaC10YWIqL1xuLm5hdi1pdGVtIC5uYXYtbGluayB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjNDA1ODc3O1xuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMTNweFxufVxuXG4ubmF2LWl0ZW0gLm5hdi1saW5rLmFjdGl2ZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMTA5Q0YxICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMTA5Q0YxICFpbXBvcnRhbnQ7XG59XG5cbi5uYXYtbGluayB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAxLjVyZW0gMHJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICBtYXJnaW46IC0xcmVtIDIuNXJlbTtcbiAgbWFyZ2luLWxlZnQ6IDByZW07XG59XG5cbi5uYXY+bGkge1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbi5uYXYtbGluazpob3Zlcixcbi5uYXYtbGluayxcbi5uYXYtbGluazpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4ubmF2LWxpbmsge1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbi5uYXYtaXRlbSB7XG4gIC5hY3RpdmUge1xuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMTA5Y2YxICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICMxMDljZjEgIWltcG9ydGFudDtcbiAgfVxufVxuLmFjdGl2ZVNlc3Npb257XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG5mb250LXNpemU6IDEzcHg7XG5saW5lLWhlaWdodDogMThweDtcbi8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG5ib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xubGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcblxuY29sb3I6ICMwMDk3Rjk7XG59XG4ubWFpbi1zaGFkb3cge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0VGRjBGNTtcbiAgcGFkZGluZy1ib3R0b206IDhweDtcbn1cbi8qd2ViIGltYWdlKi9cbi5mbGV4MiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5mbGV4Mi5pbWcgaW1ne1xuICBoZWlnaHQ6MTU0cHg7XG4gIHdpZHRoOiBhdXRvO1xufVxuLmZsZXgyPmRpdiB7XG4gIHdpZHRoOiA1MCU7XG59XG4udXBsb2FkLWltZ3tcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgYm9yZGVyOiAxcHggZGFzaGVkICNFMUUxRTE7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGhlaWdodDoxNTVweDtcbiAgd2lkdGg6IDI3N3B4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xufVxuLmZsZXgyLmltZyAudXBsb2FkLWltZyBpbWd7XG4gIGhlaWdodDogODBweDtcbiAgd2lkdGg6IGF1dG87XG59XG4uZmxleDI+ZGl2PmRpdiB7XG4gIG1hcmdpbjogMzBweCBhdXRvO1xuICB3aWR0aDogMzAwcHg7XG59XG5cbi5mbGV4MiBwLm9uZSB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gIGNvbG9yOiAjMUEyMzM0O1xufVxuXG4uZmxleDIgcC50d28ge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGNvbG9yOiAjNjM2MzYzO1xuXG59XG5cbi5mbGV4MiBwLnRocmVlIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBsaW5lLWhlaWdodDogMTRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcblxuICBjb2xvcjogIzYzNjM2Mztcbn1cblxuLmZsZXgyIHAuc2VsZWN0ZWQge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuXG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG5cbiAgY29sb3I6ICMxMDlDRjE7XG5cbn1cblxuLmZsZXgyIGltZyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLypTdGF0aWMgUGFnZSAoTW9yZSkqL1xuLnRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgY29sb3I6ICMzMzRENkU7XG59XG5cbi50YWJsZV9oZWFkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYmFja2dyb3VuZDogI0VGRjBGNTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuXG4udGFibGVfaGVhZD5kaXYge1xuICB3aWR0aDogY2FsYygoMTAwJSAtICgoMTYwcHggKiA0KSAtIDEwMHB4KSkgLyAxKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICBjb2xvcjogIzMyM0M0Nztcbn1cblxuLnRhYmxlX2hlYWQ+ZGl2Om50aC1jaGlsZCgxKSxcbi50YWJsZV9oZWFkPmRpdjpudGgtY2hpbGQoMyksXG4udGFibGVfaGVhZD5kaXY6bnRoLWNoaWxkKDQpLFxuLnRhYmxlX2hlYWQ+ZGl2Om50aC1jaGlsZCg1KSB7XG4gIHdpZHRoOiAxNjBweDtcbn1cblxuLnRhYmxlX2JvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0VGRjBGNTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcblxuXG59XG5cbi50YWJsZV9oZWFkPmRpdjpudGgtY2hpbGQoNiksXG4udGFibGVfYm9keT5kaXY6bnRoLWNoaWxkKDYpIHtcbiAgd2lkdGg6IDEwMHB4O1xufVxuLm1vZGFsLWhlYWRlciBoNHtcbiAgbWFyZ2luOiAwO1xuIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi50YWJsZV9ib2R5PmRpdiB7XG4gIHdpZHRoOiBjYWxjKCgxMDAlIC0gKCgxNjBweCAqIDQpIC0gMTAwcHgpKSAvIDEpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6ICMzMjNDNDc7XG59XG5cbi50YWJsZV9ib2R5PmRpdjpudGgtY2hpbGQoMSksXG4udGFibGVfYm9keT5kaXY6bnRoLWNoaWxkKDMpLFxuLnRhYmxlX2JvZHk+ZGl2Om50aC1jaGlsZCg0KSxcbi50YWJsZV9ib2R5PmRpdjpudGgtY2hpbGQoNSkge1xuICB3aWR0aDogMTYwcHg7XG5cbn1cblxuLnRhYmxlX2JvZHkgaW1nIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubW9kYWwtdGl0bGUge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICBjb2xvcjogIzMzNEQ2RTtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4ubW9kYWwuaW4gLm1vZGFsLWRpYWxvZyB7XG4gIG1hcmdpbjogMHB4IGF1dG87XG4gIG1hcmdpbi10b3A6IDYwcHg7XG59XG5cbi5tb2RhbCAubGFiZWxfcCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gIGNvbG9yOiAjMzM0RDZFO1xuICBtYXJnaW46MDtcbn1cblxuLm1vZGFsIC5sYWJlbF9wPnNwYW4sXG4ubW9kYWwgLnNpemU+c3BhbiB7XG4gIGNvbG9yOiAjRkUwQTI3O1xufVxuXG4ubW9kYWwgLmlucHV0IHtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgYm9yZGVyOiAxcHggc29saWQgI0M0Q0FDRTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgY29sb3I6ICMzMjNDNDc7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xufVxuXG4ubW9kYWwgLmlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gIGNvbG9yOiAjMzIzQzQ3O1xuXG59XG5cbi5tb2RhbCB0ZXh0YXJlYSB7XG4gIGhlaWdodDogNTVweDtcbiAgcGFkZGluZzogMTBweCAwcHg7XG59XG5cbi5tb2RhbCAuZGlzcGxheSBzZWxlY3Qge1xuICB3aWR0aDogMTY4cHg7XG59XG5cbi5jZW50ZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udG9wMjMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNXB4O1xufVxuXG4uc2l6ZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gIGNvbG9yOiAjMjExRjI3O1xuICBtYXJnaW4tYm90dG9tOjVweDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5tb2RhbC1kaWFsb2cge1xuICAgIHdpZHRoOiA0MDBweDtcblxuICB9XG59XG5cbi5tb2RhbC1kaWFsb2cge1xuICB3aWR0aDogNDAwcHg7XG5cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICNteU1vZGFsX2ZhcSAubW9kYWwtZGlhbG9nIHtcbiAgICB3aWR0aDogMzQwcHg7XG4gIH1cbn1cblxuI215TW9kYWxfZmFxIC5tb2RhbC1kaWFsb2cge1xuICB3aWR0aDogMzQwcHg7XG5cbn1cblxuLmZpbGVfbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG4gIG1hcmdpbjogMTBweCAwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgY29sb3I6ICMyMTFGMjc7XG59XG4ubWIxNntcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xufVxuLnBpYyB7XG4gIGJvcmRlcjogMC41cHggZGFzaGVkICM1QTVBNUE7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzo1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5waWM+aW1ne1xuICBoZWlnaHQ6NjBweDtcbiAgd2lkdGg6IGF1dG87XG59XG4uaW1nX3NsaWRlciAudGFibGVfYm9keT5kaXY6bnRoLWNoaWxkKDEpLFxuLmltZ19zbGlkZXIgLnRhYmxlX2hlYWQ+ZGl2Om50aC1jaGlsZCgxKSB7XG4gIHdpZHRoOiAxNjBweDtcbn1cblxuLmltZ19zbGlkZXIgLnRhYmxlX2hlYWQ+ZGl2Om50aC1jaGlsZCg0KSxcbi5pbWdfc2xpZGVyIC50YWJsZV9ib2R5PmRpdjpudGgtY2hpbGQoNCkge1xuICB3aWR0aDogOTBweDtcbn1cblxuLmltZ19zbGlkZXIgLnRhYmxlX2hlYWQ+ZGl2LFxuLmltZ19zbGlkZXIgLnRhYmxlX2JvZHk+ZGl2IHtcbiAgd2lkdGg6IGNhbGMoKDEwMCUgLSAoMTYwcHggKyA5MHB4KSkgLyAyKTtcbn1cblxuLnBvc2l0aW9uX2JvdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA1cHg7XG59XG5cbi53aGl0ZV9ib3gge1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICBib3gtc2hhZG93OiAwcHggMTBweCAxNXB4IHJnYmEoMjYsIDM1LCA1MiwgMC4wNSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDE4cHggMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEuMjUlO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4ud2hpdGVfYm94PmRpdjpmaXJzdC1jaGlsZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ud2hpdGVfYm94PmRpdjpmaXJzdC1jaGlsZD5pbWcge1xuICB3aWR0aDogMzlweDtcbiAgaGVpZ2h0OiAzMnB4O1xufVxuXG4ud2hpdGVfYm94PmRpdjpsYXN0LWNoaWxkIHtcbiAgd2lkdGg6IDkwJTtcbn1cblxuLndoaXRlX2JveCBwIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgY29sb3I6ICMxQTIzMzQ7XG59XG5cbi53aGl0ZV9ib3ggaW5wdXQge1xuICBib3JkZXI6IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0U2RTZFNjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgY29sb3I6ICMxQTIzMzQ7XG5cbn1cblxuLndoaXRlX2JveCBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICBjb2xvcjogIzgxOTFBRTtcblxufVxuXG4ud2hpdGUge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMTBweDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDMxJSk7XG4gIHBhZGRpbmctcmlnaHQ6IDAuNzUlO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4ud2hpdGU+ZGl2IHtcbiAgZGlzcGxheTogZmxleDtcblxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi53aGl0ZTIge1xuXG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi53aGl0ZTI+ZGl2OmZpcnN0LWNoaWxkIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG59XG5cbi53aGl0ZTI+ZGl2OmZpcnN0LWNoaWxkPmRpdiB7XG4gIHdpZHRoOiAzMiU7XG59XG5cbi53aGl0ZTIgbGFiZWwge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDExcHg7XG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuICBkaXNwbGF5OiBibG9jaztcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgY29sb3I6ICMzMjNDNDc7XG5cbn1cblxuLndoaXRlMiBpbnB1dCxcbi53aGl0ZTIgc2VsZWN0IHtcblxuICBiYWNrZ3JvdW5kOiAjRjVGNUY1O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gIGhlaWdodDogMzVweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBjb2xvcjogIzMyM0M0Nztcbn1cblxuLndoaXRlMiBpbnB1dCB7XG4gIHdpZHRoOiA3MiU7XG59XG4ud2hpdGUyIGlucHV0Om50aC1jaGlsZCgyKSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLndoaXRlMiBzZWxlY3Qge1xuICB3aWR0aDogMjElO1xufVxuXG4ud2hpdGUyIGlucHV0OjpwbGFjZWhvbGRlcixcbi53aGl0ZTIgdGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcblxuICBjb2xvcjogIzcyNzY3OTtcblxufVxuXG4ud2hpdGUyIHRleHRhcmVhIHtcbiAgYmFja2dyb3VuZDogI0Y1RjVGNTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICBmb250LXNpemU6IDExcHg7XG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICBoZWlnaHQ6IDkwcHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgY29sb3I6ICMzMjNDNDc7XG4gIHdpZHRoOiA2NSU7XG59XG5cbi5wYWdlLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiAjRjVGNUY1O1xuICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjBweCk7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZy10b3A6IDE2cHg7XG59XG5cbi5mbGV4X3doaXRlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAxJSAxLjc1JTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLndoaXRlMyB7XG4gIG1hcmdpbi1sZWZ0OiAxJTtcbiAgcGFkZGluZzogMSU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbi53aGl0ZTMgcCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG5cbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcblxuICBjb2xvcjogIzMyM0M0NztcblxufVxuXG5zcGFuLmNvbG9yIHtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMDlDRjE7XG59XG5zcGFuLmNvbG9yMSB7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xuICBib3JkZXI6c29saWQgMXB4IHJnYig2NywgMTQzLCAyMDYpO1xufVxuLmZsZXhfd2hpdGU+ZGl2OmZpcnN0LWNoaWxkPmRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZmxleF93aGl0ZT5kaXY6Zmlyc3QtY2hpbGQgcCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4uZmxleF93aGl0ZT5kaXY6bnRoLWNoaWxkKDIpIHtcblxuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxpbmUtaGVpZ2h0OiA0MXB4O1xuICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICBjb2xvcjogIzg2ODU4QjtcbiAgZGlzcGxheTogZmxleDtcblxuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZmxleF93aGl0ZT5kaXY6bnRoLWNoaWxkKDMpIHtcbiAgZGlzcGxheTogZmxleDtcblxuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZDogI0Y1RjVGNTtcbn1cblxuLyogZmFxKi9cbi5mYXEgLnRhYmxlX2JvZHk+ZGl2Om50aC1jaGlsZCgxKSxcbi5mYXEgLnRhYmxlX2hlYWQ+ZGl2Om50aC1jaGlsZCgxKSB7XG4gIHdpZHRoOiAxNjBweDtcbn1cblxuLmZhcSAudGFibGVfaGVhZD5kaXY6bnRoLWNoaWxkKDQpLFxuLmZhcSAudGFibGVfYm9keT5kaXY6bnRoLWNoaWxkKDQpIHtcbiAgd2lkdGg6IDkwcHg7XG59XG5cbi5mYXEgLnRhYmxlX2hlYWQ+ZGl2Om50aC1jaGlsZCgzKSxcbi5mYXEgLnRhYmxlX2JvZHk+ZGl2Om50aC1jaGlsZCgzKSB7XG4gIHdpZHRoOiAxNTBweDtcbn1cblxuLmZhcSAudGFibGVfaGVhZD5kaXYsXG4uZmFxIC50YWJsZV9ib2R5PmRpdiB7XG4gIHdpZHRoOiBjYWxjKCgxMDAlIC0gKDE2MHB4ICsgMjQwcHgpKSAvIDEpO1xufVxuXG4uZmFxX3NlbGVjdCB7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDEwM3B4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuXG4gIGNvbG9yOiAjMzM0RDZFO1xufVxuXG5zcGFuLmxpbmUge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNDNEM0QzQ7XG4gIGhlaWdodDogMzJweDtcbiAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjAyKTtcbn1cblxuLypxYSovXG4ucWEgLnRhYmxlX2JvZHk+ZGl2Om50aC1jaGlsZCgxKSxcbi5xYSAudGFibGVfaGVhZD5kaXY6bnRoLWNoaWxkKDEpIHtcbiAgd2lkdGg6IDkwcHg7XG59XG5cbi5xYSAudGFibGVfaGVhZD5kaXY6bGFzdC1jaGlsZCxcbi5xYSAudGFibGVfYm9keT5kaXY6bGFzdC1jaGlsZCB7XG4gIHdpZHRoOiA5MHB4O1xufVxuXG4ucWEgLnRhYmxlX2JvZHk+ZGl2Om50aC1jaGlsZCg1KSxcbi5xYSAudGFibGVfaGVhZD5kaXY6bnRoLWNoaWxkKDUpIHtcbiAgd2lkdGg6IDE2MHB4O1xufVxuXG4ucWEgLnRhYmxlX2hlYWQ+ZGl2LFxuLnFhIC50YWJsZV9ib2R5PmRpdiB7XG4gIHdpZHRoOiBjYWxjKCgxMDAlIC0gKDkwcHggKyAxNTBweCkpIC8gMyk7XG59XG5cbi50ZXh0aCB7XG4gIGhlaWdodDogNzBweDtcbn1cblxuLmJsdWVfbGFyZ2VfYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICMxNTdFQkU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNFOEU4RTg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4wMyk7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG5cbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgaGVpZ2h0OiAzNXB4O1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cblxuLndoaXRlX2xhcmdlX2J1dHRvbiB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG4gIHdpZHRoOiAxMDAlO1xuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICBib3JkZXI6IG5vbmU7XG4gIGhlaWdodDogMjBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgY29sb3I6ICM0MDY1ODU7XG5cbn1cblxuLyp0ZXN0aW1vbmlhbCovXG4uZmEuZmEtc3RhciB7XG4gIGNvbG9yOiBvcmFuZ2U7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLnRlc3RpbW9uaWFsIC50YWJsZV9ib2R5PmRpdjpudGgtY2hpbGQoMSksXG4udGVzdGltb25pYWwgLnRhYmxlX2hlYWQ+ZGl2Om50aC1jaGlsZCgxKSxcbi50ZXN0aW1vbmlhbCAudGFibGVfaGVhZD5kaXY6bGFzdC1jaGlsZCxcbi50ZXN0aW1vbmlhbCAudGFibGVfYm9keT5kaXY6bGFzdC1jaGlsZCB7XG4gIHdpZHRoOiA5MHB4O1xufVxuXG4udGVzdGltb25pYWwgLnRhYmxlX2hlYWQ+ZGl2Om50aC1jaGlsZCg0KSxcbi50ZXN0aW1vbmlhbCAudGFibGVfYm9keT5kaXY6bnRoLWNoaWxkKDQpLFxuLnRlc3RpbW9uaWFsIC50YWJsZV9oZWFkPmRpdjpudGgtY2hpbGQoNSksXG4udGVzdGltb25pYWwgLnRhYmxlX2JvZHk+ZGl2Om50aC1jaGlsZCg1KSB7XG4gIHdpZHRoOiAxNTBweDtcbn1cblxuLnRlc3RpbW9uaWFsIC50YWJsZV9oZWFkPmRpdixcbi50ZXN0aW1vbmlhbCAudGFibGVfYm9keT5kaXYge1xuICB3aWR0aDogY2FsYygoMTAwJSAtICgxODBweCArIDMwMHB4KSkgLyAyKTtcbn1cblxuLnRlc3RpbW9uaWFsIC5zY3JvbGwsLmltZ19zbGlkZXIgLnNjcm9sbCwgLnNjcm9sbC1zcCB7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtICgxOTBweCkpO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuLnNjcm9sbC1zcHtcbiAgaGVpZ2h0OmNhbGMoMTAwJSAtIDE2cHgpO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG1hcmdpbjogMTZweCAwcHg7XG59XG5cbi8qIHdpZHRoICovXG4uc2Nyb2xsLXNwOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAzcHg7XG59XG5cbi8qIFRyYWNrICovXG4uc2Nyb2xsLXNwOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQ6ICNFRkYwRjU7XG5cbn1cblxuLyogSGFuZGxlICovXG4uc2Nyb2xsLXNwOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6ICMwMDk3Rjk7XG5cbn1cblxuLnNjcm9sbC1zcCB7XG4gIHNjcm9sbGJhci1jb2xvcjogIzAwOTdGOSAjRUZGMEY1O1xuICBzY3JvbGxiYXItd2lkdGg6IHRoaW47XG59XG5cbi5zcGFjZSB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG4ud2hpdGVfYm94X2xhcmdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLndoaXRlX2JveF9sYXJnZSBwIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBsaW5lLWhlaWdodDogMTVweDtcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cblxuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuXG4gIGNvbG9yOiAjMzIzQzQ3O1xuXG59XG5cbi53aGl0ZV9ib3hfbGFyZ2UgaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogI0Y1RjVGNTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICMzMjNDNDc7XG5cbn1cblxuLndoaXRlX2JveF9sYXJnZSBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzcyNzY3OTtcbn1cblxuLndoaXRlX2JveF9sYXJnZSBkaXYge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi8qIE1hbmFnZSBDb250ZW50IChPdGhlciBMaW5rcykqL1xucC5lZGl0YWJsZSB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG5cbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgaGVpZ2h0OiA0MHZoO1xuICBjb2xvcjogIzFBMjMzNDtcbn1cblxucC5lZGl0YWJsZTIge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuXG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gIGNvbG9yOiAjMUEyMzM0O1xufVxuXG4ud2hpdGVfYm94NSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDE2cHggMzBweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLmVkaXRib3gge1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICBib3gtc2hhZG93OiAycHggMHB4IDEwcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIHBhZGRpbmc6IDE0cHggMjBweDtcbn1cblxuLmVkaXRib3g+ZGl2Om50aC1jaGlsZCgxKSBpbWcge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDIwLjVweDtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uZWRpdGJveCAubGluZSB7XG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICNGM0YzRjY7XG4gIDtcbn1cblxuLmVkaXRib3ggc2VsZWN0IHtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAwcHggMTVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uZWRpdGJveCBzZWxlY3QgLnNhbnMge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuXG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG5cbiAgY29sb3I6ICMxQTIzMzQ7XG5cbn1cblxuLmVkaXRib3ggc2VsZWN0LnR0IHtcbiAgLypiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2ltZ193ZWJfYXBwL3R0LnN2Zyk7Ki9cbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuXG4uZWRpdGJveCBzZWxlY3QuZm9udCB7XG4gIC8qYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9pbWdfd2ViX2FwcC9mb250LnN2Zyk7Ki9cbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuXG4uZWRpdGJveCBkaXYuZm9udHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZWRpdGJveCBkaXYuZm9udHMgaW1nIHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4uZWRpdGJveCBkaXYuZm9udHMgaW1nLnVuZGVybGluZSB7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5lZGl0Ym94IGRpdi5jb2xvciBpbWcge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbjogMHB4IDIwcHg7XG59XG5cbi5lZGl0Ym94IGRpdi5jb2xvciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5lZGl0Ym94IGRpdi5mb250X2FsaWduIGltZyB7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLmVkaXRib3ggZGl2LmZvbnRfYWxpZ24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cblxuLmRyb3Bkb3duMTEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmRyb3Bkb3duLWNvbnRlbnQxMSB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgd2lkdGg6IDE3OXB4O1xuICBoZWlnaHQ6IDE5NnB4O1xuICBib3R0b206IDBweDtcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5kcm9wZG93bjExOmhvdmVyIC5kcm9wZG93bi1jb250ZW50MTEge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLyogYXBwKi9cbi5mbGV4MSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmVsbGlwc2Uge1xuICBiYWNrZ3JvdW5kOiAjRjBFRkVGO1xuICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIHdpZHRoOiAxOXB4O1xuICBoZWlnaHQ6IDE5cHg7XG4gIHBhZGRpbmc6IDBweCA3cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQsIG9yIDEwMCUgKi9cblxuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuXG4gIGNvbG9yOiAjMDA5N0Y5O1xuXG59XG5cbi5ibHVlX2xpbmUge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzAwOTdGOTtcbiAgd2lkdGg6IDIycHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwcHggN3B4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTRweDtcbn1cblxuLmJsdWVfc2V0dGluZ3Mge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICBjb2xvcjogIzAwOTdGOTtcbn1cblxuLmZsZXgxPmRpdjpmaXJzdC1jaGlsZCxcbi5mbGV4Mz5kaXY6Zmlyc3QtY2hpbGQsXG4uZmxleDQ+ZGl2OmZpcnN0LWNoaWxkIHtcbiAgd2lkdGg6IDc1cHg7XG59XG5cbi5mbGV4Myxcbi5mbGV4NCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbnAudHdvMiB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG5cbiAgY29sb3I6ICMzMzRENkU7XG5cbn1cblxucC5vbmUyIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cblxuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuXG4gIGNvbG9yOiAjMzM0RDZFO1xufVxuXG4uZmxleDM+ZGl2Om50aC1jaGlsZCgyKSB7XG4gIHdpZHRoOiAxNTBweDtcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xufVxuXG4uZmxleDM+ZGl2Om50aC1jaGlsZCgzKSBzcGFuIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMzVweDtcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgbWFyZ2luOiAwcHggMTBweDtcbiAgY29sb3I6ICMyMTFGMjc7XG5cbn1cblxuLmZsZXgzPmRpdjpudGgtY2hpbGQoMykgc3BhbiBpbWc6Zmlyc3Qtb2YtdHlwZSB7XG4gIG1hcmdpbjogMHB4IDVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDhweDtcbn1cblxuLmZsZXgzPmRpdjpudGgtY2hpbGQoMykgc3BhbiBpbWc6bnRoLW9mLXR5cGUoMikge1xuICBtYXJnaW46IDBweCA1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAzcHg7XG59XG5cbi5mbGV4Mz5kaXY6bnRoLWNoaWxkKDMpIC5waWMge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uc2VwcmF0aW9uIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjksIDI5LCAyOSwgMC41KTtcbiAgbWFyZ2luOiAyMHB4IDBweDtcbiAgbWFyZ2luLWxlZnQ6IDY1cHg7XG59XG5cbi5mbGV4NCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5mbGV4NSB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWxlZnQ6IDYwcHg7XG59XG5cbi5mbGV4ND5kaXY6bnRoLWNoaWxkKDIpIGltZyB7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbi5mbGV4ND5kaXY6bnRoLWNoaWxkKDMpIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMzVweDtcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cbiAgd2lkdGg6IDE4MHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuXG4gIGNvbG9yOiAjMzM0RDZFO1xufVxuXG5iIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmZsZXg0IGlucHV0IHtcbiAgYm9yZGVyOiBub25lO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG4gIGhlaWdodDogMzVweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgd2lkdGg6IDU3M3B4O1xuICBjb2xvcjogIzMzNEQ2RTtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG4uZmxleDQgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICM4ZTkzOWE7XG59XG5cbi53aGl0ZTI5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDBweDtcbiAgYmFja2dyb3VuZDogI0Y1RjVGNTtcbiAgcGFkZGluZzogMSU7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAzMi41JSk7XG59XG5cbi53aGl0ZTI5PmRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG5cbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uZmxleDQ+ZGl2Om50aC1jaGlsZCgzKSBzcGFuPnNwYW4ge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDExcHg7XG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuXG4gIGNvbG9yOiAjMzM0RDZFO1xufVxuXG4uc2VwX2xpbmUge1xuICBtYXJnaW4tbGVmdDogNjVweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNDNEM0QzQ7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbi5zd2l0Y2gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDM1cHg7XG4gIGhlaWdodDogMTJweDtcbn1cblxuLnN3aXRjaCBpbnB1dCB7XG4gIG9wYWNpdHk6IDA7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG59XG5cbi5zbGlkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjOyovXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xuICBib3JkZXI6IDFweCBzb2xpZCAjQkRCQUJBO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKSk7XG4gIHRyYW5zaXRpb246IC40cztcbn1cblxuLnNsaWRlcjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogMThweDtcbiAgd2lkdGg6IDE4cHg7XG4gIGxlZnQ6IC02cHg7XG4gIGJvdHRvbTogLTRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0JEQkFCQTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XG4gIHRyYW5zaXRpb246IC40cztcbn1cblxuaW5wdXQ6Y2hlY2tlZCsuc2xpZGVyIHtcbiAgLypiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NkYzOyovXG59XG5cbmlucHV0OmZvY3VzKy5zbGlkZXIge1xuICAvKmJveC1zaGFkb3c6IDAgMCAxcHggIzIxOTZGMzsqL1xufVxuXG5pbnB1dDpjaGVja2VkKy5zbGlkZXI6YmVmb3JlIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5QzgzRjtcbn1cblxuaW5wdXQ6Y2hlY2tlZCsuc2xpZGVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI0JEQkFCQTtcbn1cblxuLnNsaWRlci5yb3VuZCB7XG4gIGJvcmRlci1yYWRpdXM6IDM0cHg7XG59XG5cbi5zbGlkZXIucm91bmQ6YmVmb3JlIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4udG9nZ2xlIHtcbiAgZGlzcGxheTogZmxleDtcblxuICBwYWRkaW5nLXRvcDogMzBweDtcblxuICB3aWR0aDoxNjBweDtcbn1cblxuLm9mZiB7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTRweDtcbiAgbWFyZ2luOiAwcHggMTBweDtcbn1cblxuLm9uIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cbiAgbWFyZ2luOiAwcHggMTBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC00cHg7XG4gIGNvbG9yOiAjMTlDODNGO1xufVxuXG4uYm9sZF9zZXR0aW5ncyB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgY29sb3I6ICMzMjNDNDc7XG59XG5cbi5ibGFja19zZXR0aW5ncyB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG5cbiAgY29sb3I6ICMzMjNDNDc7XG59XG5cbi5zcGFjZTE2IHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cblxuLmlucHV0MSB7XG4gXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMzVweDtcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cbiAgd2lkdGg6IDU3M3B4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gIGNvbG9yOiAjMzM0RDZFXG59XG5cbi53MTM1IHtcbiAgd2lkdGg6IDIyNXB4XG59XG4iLCJAaW1wb3J0IHVybCgnLi4vLi4vLi4vd2Vic2l0ZS1jb25maWd1cmF0aW9uLmNvbXBvbmVudC5zY3NzJyk7XG4uZmlsdGVyLWl0ZW0tMiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIC5hZGQtY2xhc3MtYnRuIHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMzYTY2ZmE7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgICAgIHBhZGRpbmc6IDRweCAxMHB4O1xuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICBjb2xvcjogIzEyODNmNDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgfVxuICB9XG4gIC5zbXMtdGFibGUtd3JhcHBlciB7XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIH1cblxuICAuc2xpZGUge1xuICAgIC5oZWFkZXItc2VjdGlvbiB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgd2lkdGg6IDIwJTtcbiAgICAgIG1hcmdpbi1sZWZ0OiA0MCU7XG4gICAgICAvLyBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgLmhlYWRlci1pdGVtIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAuaW1nLWNvbnRhaW5lciB7XG4gICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwcHggMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLm1vZGVsLW5hbWUtY29udGFpbmVyIHtcbiAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDNweDtcbiAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAjY291cG9uIHtcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjVweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjVweDtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzNhNjVmODtcbiAgICAgIH1cbiAgICAgICN2b3VjaGVyIHtcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDI1cHg7XG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyNXB4O1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjM2E2NWY4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAuYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiAjM2E2NmZhO1xuICAgIGNvbG9yOiAjZmRmZGZkO1xuICB9XG4gIC5ub24tYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIGNvbG9yOiAjYjBiMGIwO1xuICB9Il19 */";
      /***/
    },

    /***/
    "./src/app/components/website-configuration/faq/faq-qa/list/list.component.ts":
    /*!************************************************************************************!*\
      !*** ./src/app/components/website-configuration/faq/faq-qa/list/list.component.ts ***!
      \************************************************************************************/

    /*! exports provided: ListComponent */

    /***/
    function srcAppComponentsWebsiteConfigurationFaqFaqQaListListComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListComponent", function () {
        return ListComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../services/authenticator.service */
      "./src/app/services/authenticator.service.ts");
      /* harmony import */


      var _services_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../services/products.service */
      "./src/app/services/products.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _services_message_show_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../services/message-show.service */
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

      var ListComponent =
      /** @class */
      function () {
        var ListComponent = /*#__PURE__*/function () {
          function ListComponent(httpService, auth, router, msgService, productService) {
            _classCallCheck(this, ListComponent);

            this.httpService = httpService;
            this.auth = auth;
            this.router = router;
            this.msgService = msgService;
            this.productService = productService;
            this.sizeArr = [25, 50, 100, 150, 200, 500, 1000];
            this.pageIndex = 1;
            this.totalRecords = 0;
            this.displayBatchSize = 25;
            this.staticPageData = [];
            this.staticPageDataSouece = [];
            this.selectedPageId = '';
            this.categoryData = [];
            this.categoryData1 = [];
            this.pageModel = {
              category_id: '',
              question: '',
              answer: '',
              order_number: ''
            };
            this.selected = 'QA';
          }

          _createClass(ListComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.getFaqCategoryData();
              this.activeSession = 'voucher';
              this.getFaqCategoryData1();
            }
          }, {
            key: "getFaqCategoryData1",
            value: function getFaqCategoryData1() {
              var _this = this;

              this.auth.showLoader();
              this.productService.getMethod('/api/v2/website/faq/category/institute/' + sessionStorage.getItem('institute_id'), null).subscribe(function (res) {
                _this.auth.hideLoader();

                _this.categoryData1 = res.result; //this.fetchTableDataByPage(this.pageIndex);
              }, function (err) {
                _this.auth.hideLoader();
              });
            }
          }, {
            key: "getFaqCategoryData",
            value: function getFaqCategoryData() {
              var _this2 = this;

              this.auth.showLoader();
              this.httpService.getMethod('api/v2/website/faq/institute/' + sessionStorage.getItem('institute_id'), null).subscribe(function (res) {
                _this2.auth.hideLoader();

                _this2.staticPageDataSouece = res.result;
                console.log(_this2.staticPageDataSouece);
                _this2.totalRecords = _this2.staticPageDataSouece.length; // if (this.staticPageDataSouece.length) {

                _this2.staticPageData = _this2.getDataFromDataSource(0); // }
                //this.fetchTableDataByPage(this.pageIndex);
              }, function (err) {
                _this2.auth.hideLoader();
              });
            }
          }, {
            key: "toggleActiveSession",
            value: function toggleActiveSession(item) {
              this.activeSession = item;
            } // pagination functions 

          }, {
            key: "fetchTableDataByPage",
            value: function fetchTableDataByPage(index) {
              this.pageIndex = index;
              var startindex = this.displayBatchSize * (index - 1);
              this.staticPageData = this.getDataFromDataSource(startindex);
            }
          }, {
            key: "fetchNext",
            value: function fetchNext() {
              this.pageIndex++;
              this.fetchTableDataByPage(this.pageIndex);
            }
          }, {
            key: "fetchPrevious",
            value: function fetchPrevious() {
              if (this.pageIndex != 1) {
                this.pageIndex--;
                this.fetchTableDataByPage(this.pageIndex);
              }
            }
          }, {
            key: "getDataFromDataSource",
            value: function getDataFromDataSource(startindex) {
              var t = this.staticPageDataSouece.slice(startindex, startindex + this.displayBatchSize);
              return t;
            }
          }, {
            key: "updateTableBatchSize",
            value: function updateTableBatchSize(event) {
              this.pageIndex = 1;
              this.displayBatchSize = event;
              this.fetchTableDataByPage(this.pageIndex);
            }
          }, {
            key: "editRow",
            value: function editRow(object) {
              this.selectedPageId = true;
              $('#myModal_qa').modal('show');
              this.pageModel.id = object.id;
              this.pageModel.category_id = object.category_id;
              this.pageModel.question = object.question;
              this.pageModel.order_number = object.order_number; // console.log(object);
              // sessionStorage.setItem('faqqaData', JSON.stringify(object.data));
              // this.router.navigate(['view/website-configuration/faq/qa/edit/' + object.data.id])
            }
          }, {
            key: "deleteRow",
            value: function deleteRow(obj) {
              var _this3 = this;

              //https://productsit.proctur.com/prod/api/v2/website/faq/category/166
              this.auth.showLoader();
              this.productService.deleteFile('/prod/api/v2/website/faq/' + obj.id).subscribe(function (res) {
                _this3.auth.hideLoader();

                _this3.msgService.showErrorMessage('success', '', 'FAQ Deleted Successfully');

                _this3.getFaqCategoryData();
              }, function (err) {
                _this3.auth.hideLoader();
              });
            }
          }, {
            key: "navigateTo",
            value: function navigateTo(value) {
              this.selected = value;

              if (value == 'Category') {
                this.router.navigate(['/view/website-configuration/faq/category/list']);
              } else if (value == 'QA') {
                this.router.navigate(['/view/website-configuration/faq/qa/list']);
              }

              return false;
            } //add

          }, {
            key: "cancel",
            value: function cancel() {
              // this.router.navigate(['view/website-configuration/faq/qa/list']);
              this.pageModel = {
                category_id: '',
                question: '',
                answer: '',
                order_number: ''
              };
            }
          }, {
            key: "saveData",
            value: function saveData() {
              this.selectedPageId ? this.updateData() : this.createData();
            }
          }, {
            key: "updateData",
            value: function updateData() {
              var _this4 = this;

              if (this.pageModel.category_id != '' && this.pageModel.category_id != null) {
                if (this.pageModel.question != '' && this.pageModel.question != null) {
                  var data = {
                    // institute_id: sessionStorage.getItem('institute_id'),
                    id: this.pageModel.id,
                    category_id: this.pageModel.category_id,
                    question: this.pageModel.question,
                    answer: this.pageModel.answer,
                    order_number: this.pageModel.order_number
                  };
                  this.auth.showLoader();
                  this.productService.putMethod('api/v2/website/faq/update', data).then(function (result) {
                    _this4.auth.hideLoader();

                    var response = result['body'];

                    if (response.validate) {
                      _this4.msgService.showErrorMessage('success', '', 'FAQ updated successfully');

                      _this4.router.navigate(['view/website-configuration/faq/qa/list']);

                      _this4.getFaqCategoryData();

                      $('#myModal_qa').modal('hide');
                    } else {
                      _this4.msgService.showErrorMessage('error', response.error[0].error_message, '');
                    }
                  }, function (err) {
                    _this4.auth.hideLoader();

                    console.log(err);
                  });
                } else {
                  this.msgService.showErrorMessage('error', '', 'Please enter Question');
                }
              } else {
                this.msgService.showErrorMessage('error', '', 'Please select category');
              }
            }
          }, {
            key: "createData",
            value: function createData() {
              var _this5 = this;

              if (this.pageModel.category_id != '' && this.pageModel.category_id != null) {
                if (this.pageModel.question != '' && this.pageModel.question != null) {
                  var data = {
                    // institute_id: sessionStorage.getItem('institute_id'),
                    category_id: this.pageModel.category_id,
                    question: this.pageModel.question,
                    answer: this.pageModel.answer,
                    order_number: this.pageModel.order_number
                  };
                  this.auth.showLoader();
                  this.productService.postMethod('api/v2/website/faq/create', data).then(function (result) {
                    _this5.auth.hideLoader();

                    var response = result['body'];

                    if (response.validate) {
                      _this5.msgService.showErrorMessage('success', '', 'FAQ created successfully');

                      _this5.router.navigate(['view/website-configuration/faq/qa/list']);

                      $('#myModal_qa').modal('hide');

                      _this5.getFaqCategoryData();
                    } else {
                      _this5.msgService.showErrorMessage('error', response.error[0].error_message, '');
                    }
                  }, function (err) {
                    _this5.auth.hideLoader();

                    console.log(err);
                  });
                } else {
                  this.msgService.showErrorMessage('error', '', 'Please enter Question');
                }
              } else {
                this.msgService.showErrorMessage('error', '', 'Please select category');
              }
            }
          }]);

          return ListComponent;
        }();

        ListComponent.ctorParameters = function () {
          return [{
            type: _services_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]
          }, {
            type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticatorService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: _services_message_show_service__WEBPACK_IMPORTED_MODULE_4__["MessageShowService"]
          }, {
            type: _services_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]
          }];
        };

        ListComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
          selector: 'app-list',
          template: __importDefault(__webpack_require__(
          /*! raw-loader!./list.component.html */
          "./node_modules/raw-loader/dist/cjs.js!./src/app/components/website-configuration/faq/faq-qa/list/list.component.html"))["default"],
          styles: [__importDefault(__webpack_require__(
          /*! ./list.component.scss */
          "./src/app/components/website-configuration/faq/faq-qa/list/list.component.scss"))["default"]]
        }), __metadata("design:paramtypes", [_services_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"], _services_authenticator_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticatorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_message_show_service__WEBPACK_IMPORTED_MODULE_4__["MessageShowService"], _services_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]])], ListComponent);
        return ListComponent;
      }();
      /***/

    }
  }]);
})();
//# sourceMappingURL=faq-faq-qa-faq-qa-module-es5.js.map