(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["website-configuration-static-pages-static-pages-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/website-configuration/static-pages/add-edit/add-edit.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/website-configuration/static-pages/add-edit/add-edit.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid product-wrapper p-0\" style=\"padding-top: 2px;padding: 1%;\">\n\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"row\">\n        <div class=\"col-md-12 form-group\">\n          <label class=\"text-bold\"> Title\n            <span class=\"text-danger\">*</span>\n          </label>\n          <input type=\"text\" placeholder=\"Title\" [(ngModel)]=\"pageModel.page_title\" class=\"form-control form-control-sm\">\n        </div>\n\n        <div class=\"col-md-12 form-group\">\n          <label class=\"text-bold\"> Page URL\n            <span class=\"text-danger\">*</span>\n          </label>\n          <input type=\"text\" placeholder=\"Eg:registration\" [(ngModel)]=\"pageModel.page_route\" class=\"form-control form-control-sm\">\n        </div>\n\n        <div class=\"col-md-12\">\n          <div class=\"col-md-12 form-group\" style=\"padding-right: 0px;padding-left: 0px;width: 100%;\">\n            <label class=\"text-bold\">Description</label>\n              <editor [init]=\"editorConf\" apiKey=\"xix5hq71alw64jp2ufl9fo6nddnhg91n6h7w2afn043v538t\"\n                [(ngModel)]=\"pageModel.page_data\" placeholder=\"Content\">\n              </editor>\n          </div>\n        </div>\n\n        <!-- <div class=\"row m-0\"> -->\n          <div class=\"col-md-12 form-group\">\n            <label class=\"text-bold\">Status\n            </label>\n            <select id=\"country_id\" class=\"form-control form-control-sm\" [(ngModel)]=\"pageModel.page_status\">\n              <option value=\"\">Select Status</option>\n              <option [value]=\"data.Title\" *ngFor='let data of statusData'>\n                {{data.Title | titlecase}}\n              </option>\n            </select>\n          </div>\n        <!-- </div> -->\n\n        <div class=\"col-md-12\" style=\"margin-bottom: 15px;width: 50%;height: 64px;\" *ngIf=\"selectedPageId && pageModel.banner_image_url!='' && pageModel.banner_image_url!=null\">\n          <div class=\"c-md-6\" style=\"padding: 0;margin-top: 1%;margin-right: 5px;\">\n            <label class=\"text-bold\"> Uploaded Image</label>\n            <img style=\"width: 24%;vertical-align: middle;margin-left: 25px;\" src=\"{{pageModel.banner_image_url}}\">\n          </div>\n          <div class=\"c-md-1 clearFile\" (click)=\"clearFile()\">X</div>\n        </div>\n\n        <div class=\"col-md-12 form-group\">\n          <label class=\"text-bold\"> Upload Image (Size (Width * Height) : 512px * 512px)\n          </label>\n          <input type=\"file\" class=\"form-control form-control-sm\" id=\"uploadFileControl\" name=\"uploadFileBox\"\n            [disabled]=\"pageModel.banner_image_url!='' && pageModel.banner_image_url!=null\" accept=\"image/*\"\n            [(ngModel)]=\"pageModel.image\" />\n        </div>\n\n\n        <!-- <div class=\"col-md-6 form-group\" style=\"padding-left: 0;margin-bottom: 0;margin-top: 10px;\"> -->\n          <div class=\"col-md-12 form-group\" [ngStyle]=\"{'margin-top': (selectedPageId && pageModel.banner_image_url!='' && pageModel.banner_image_url!=null) ? '30px' : ''}\">\n            <input type=\"checkbox\" id=\"inactive\" class=\"form-ctrl\" [(ngModel)]=\"pageModel.in_navbar\"\n              style=\"-webkit-appearance: checkbox !important;\">&nbsp;\n            <label for=\"inactive\">Show on website</label>\n          </div>\n        <!-- </div> -->\n      </div>\n\n      <div class=\"go-btn-container\">\n        <button type=\"button\" name=\"button\" class=\"fullBlue add-class-btn\" (click)=\"cancel()\">Cancel</button>\n        <button type=\"button\" name=\"button\" class=\"fullBlue gobtn\" (click)=\"saveData()\"\n          [disabled]=\"auth.isRippleLoad.getValue()\">Save</button>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/website-configuration/static-pages/list/list.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/website-configuration/static-pages/list/list.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <section class=\"sms-table-wrapper\">\n\n    <div class=\"filter-item-2\">\n        <button type=\"button\" name=\"button\" class=\"add-class-btn\" routerLink=\"../add\" style=\"margin-right: 15px;\">\n          <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n          &nbsp;\n          Add Page\n        </button>\n      </div>\n    <app-basic-table [headers]=\"headerSetting\" [displayData]=\"staticPageData\" [tableSetting]=\"tableSetting\"\n      [rowColumnSetting]=\"rowColumns\" (editView)='editRow($event)' (deleteView)='deleteRow($event)'>\n    </app-basic-table>\n    <div style=\"padding-top: 9px;\">\n      <pagination (goPage)=\"fetchTableDataByPage($event)\" (goNext)=\"fetchNext()\" (goPrev)=\"fetchPrevious()\"\n        [pagesToShow]=\"10\" [page]=\"pageIndex\" [perPage]=\"displayBatchSize\" [sizeArr]=\"sizeArr\" [count]=\"totalRecords\"\n        (sizeChange)=\"updateTableBatchSize($event)\">\n      </pagination>\n    </div>\n\n\n  </section> -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/website-configuration/static-pages/static-pages.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/website-configuration/static-pages/static-pages.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"container-fluid product-wrapper p-0\">\n    <div class=\"row m-0 pt-3 pb-3\" style=\"    border-bottom: 1px solid #ccc;margin-bottom: 15px;\">\n        <div class=\"col-md-8\" style=\"padding-left: 0;\">\n            <section class=\"middle-top clearFix bulk-header\">\n                <div>\n                    <h1 class=\"pull-left\" style=\"margin-bottom: 10px;\">\n                        <a routerLink=\"/view/website-configuration/images\" style=\"padding:0px; \">\n                            Website/ App\n                        </a>\n                        <i style=\"font-family: 'FontAwesome';\" class=\"fas fa-angle-right\"></i>\n                        <span>Static Page</span>\n                    </h1>\n                </div>\n            </section>\n        </div>\n    </div>\n</div> -->\n\n<!-- Static Page (More) -->\n<div class=\"set1 page-content\">\n  <div class=\"display\">\n    <div>\n      <p class=\"title\">Static Page </p>\n    </div>\n    <div><button class=\"blue_button\" data-toggle=\"modal\" data-target=\"#myModal\">Add Page</button></div>\n  </div>\n  <br>\n  <div class=\"table_head\">\n    <div>\n      ID\n    </div>\n    <div>\n      Title\n    </div>\n    <div>\n      Status\n    </div>\n    <div>\n      Page URL\n    </div>\n    <div>\n      Show on Website\n    </div>\n    <div>\n      Action\n    </div>\n  </div>\n  <div class=\"scroll-sp\">\n    <div class=\"table_body\" *ngFor=\"let data of staticPageData\">\n      <div>\n        {{data.id}}\n      </div>\n      <div>\n        {{data.page_title}}\n      </div>\n      <div>\n        {{data.page_status}}\n      </div>\n      <div>\n        {{data.page_route}}\n      </div>\n      <div>\n        {{data.in_navbar}}\n      </div>\n      <div>\n        <a (click)=\"editRow(data)\"><img src=\"../../../../assets/img_web_app/edit.svg\" class=\"mr10\"></a>\n        <a (click)=\"deleteRow(data)\"><img src=\"../../../../assets/img_web_app/delete.svg\"></a>\n      </div>\n    </div>\n  </div>\n  <div class=\"modal\" id=\"myModal\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n\n\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Add Page</h4>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        </div>\n        <div class=\"modal-body\">\n          <div>\n            <p class=\"label_p\">Title <span>*</span> </p>\n            <input class=\"input\" [(ngModel)]=\"pageModel.page_title\" name=\"page_title\" id=\"page_title\"\n              placeholder=\"Enter Title\">\n          </div>\n          <div>\n            <p class=\"label_p\">Page URL <span>*</span> </p>\n            <input class=\"input\" [(ngModel)]=\"pageModel.page_route\" name=\"page_route\" id=\"page_route\"\n              placeholder=\"Enter Page URL  \">\n          </div>\n          <div>\n            <p class=\"label_p\">Description</p>\n            <textarea class=\"input\" axLength=\"1500\" [(ngModel)]=\"pageModel.page_data\" name=\"page_data\" id=\"page_data\"\n              placeholder=\"Enter Description\"></textarea>\n          </div>\n          <div class=\"display\">\n            <div>\n              <p class=\"label_p\">Status</p>\n              <select id=\"country_id\" class=\"input\" [(ngModel)]=\"pageModel.page_status\">\n                <option value=\"\">Select Status</option>\n                <option [value]=\"data.Title\" *ngFor='let data of statusData'>\n                  {{data.Title | titlecase}}\n                </option>\n              </select>\n            </div>\n            <div class=\"flex center\">\n              <div>\n                <label class=\"checkbox position_bot\" style=\"margin-bottom:0px;\">\n                  <span class=\"checkbox__input\">\n                    <input type=\"checkbox\" name=\"checked\" [(ngModel)]=\"pageModel.in_navbar\">\n                    <span class=\"checkbox__control\">\n                      <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\">\n                        <path fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" d=\"M1.3 12.91l6.37 6.37L22.79 4.59\">\n                        </path>\n                      </svg>\n                    </span>\n                  </span>\n                </label>\n              </div>\n              <div>\n                <p class=\"label_p top23\">\n                  Show on Website\n                </p>\n              </div>\n            </div>\n          </div>\n          <p class=\"size\">Upload Image (Size (Width * Height) : 420px * 420px) <span>*</span></p>\n          <div class=\"display\">\n            <div>\n              <input type=\"file\" class=\"form-control form-control-sm\" style=\"display: none;\"\n              id=\"uploadFileControl\"\n              name=\"uploadFileBox\" accept=\"image/*\" [(ngModel)]=\"pageModel.image\" />\n              <button  [disabled]=\"pageModel.banner_image_url!='' && pageModel.banner_image_url!=null\" class=\"blue_button\" (click)=\"displayBrowe()\">Choose File</button>\n            </div>\n            <br>\n            <br>\n      \n\n        <div class=\"file_name\">\n            \n          <!-- <img src=\"../../../../assets/img_web_app/pic.svg\"> -->\n          <span *ngIf=\"selectedPageId && pageModel.banner_image_url!='' && pageModel.banner_image_url!=null\" >\n            <!-- Home_banner_01.Jpeg -->\n         \n          <img  *ngIf=\"selectedPageId && pageModel.banner_image_url!='' && pageModel.banner_image_url!=null\" src=\"../../../../assets/img_web_app/close.svg\" (click)=\"clearFile()\">\n        </span>\n      </div>\n      <br>\n    </div>\n    <br>\n    <div class=\"pic\" *ngIf=\"selectedPageId && pageModel.banner_image_url!='' && pageModel.banner_image_url!=null\">\n      <img style=\"object-fit: cover;\" src=\"{{pageModel.banner_image_url}}\">\n    </div>\n        </div>\n        <div class=\"modal-footer\">\n          <div class=\" display\">\n            <div>\n\n            </div>\n            <div>\n              <button data-dismiss=\"modal\" class=\"mr10 white_button\" (click)=\"cancel()\">Cancel</button>\n              <button class=\"blue_button\" (click)=\"saveData()\">Save</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div>\n    <pagination (goPage)=\"fetchTableDataByPage($event)\" (goNext)=\"fetchNext()\" (goPrev)=\"fetchPrevious()\"\n      [pagesToShow]=\"10\" [page]=\"pageIndex\" [perPage]=\"displayBatchSize\" [sizeArr]=\"sizeArr\" [count]=\"totalRecords\"\n      (sizeChange)=\"updateTableBatchSize($event)\">\n    </pagination>\n  </div>\n</div>\n\n<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./src/app/components/website-configuration/static-pages/add-edit/add-edit.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/components/website-configuration/static-pages/add-edit/add-edit.component.scss ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".product-wrapper {\n  padding: 1%;\n  width: 100%;\n}\n\n.row {\n  margin: 0;\n  font-size: 12px;\n}\n\n.row .form-control {\n  border: 1px solid #e0e0e0;\n  padding: 6px;\n  border-radius: 4px;\n  display: block;\n  width: 100%;\n  box-sizing: border-box;\n  outline: none;\n  background: #fff;\n  font: 400 12px \"Open sans\", sans-serif;\n  box-shadow: none;\n  color: #000;\n}\n\n.row input[type=\"radio\"] {\n  -webkit-appearance: radio;\n     -moz-appearance: radio;\n          appearance: radio;\n  width: 1%;\n  float: left;\n}\n\n.row .go-btn-container {\n  display: flex;\n  flex-direction: row;\n  font-size: 12px;\n  color: #3e3d4a;\n  width: auto;\n  justify-content: center;\n}\n\n.row .go-btn-container .gobtn {\n  border: 1px solid #3a66fa;\n  border-radius: 4px;\n  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);\n  padding: 4px 10px;\n  background: #3a66fa;\n  color: #ffffff;\n  font-weight: 600;\n  height: 30px;\n  margin-top: 15px;\n  font-size: 14px;\n}\n\n.row .go-btn-container .add-class-btn {\n  border: 1px solid #3a66fa;\n  border-radius: 4px;\n  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);\n  padding: 4px 10px;\n  background: white;\n  color: #1283f4;\n  font-size: 14px;\n  font-weight: 600;\n  height: 30px;\n  margin-top: 15px;\n  margin-right: 2%;\n}\n\n.row .dropdown-list {\n  max-height: 197px;\n  overflow-y: hidden;\n}\n\n.form-group {\n  width: 50%;\n  float: left;\n}\n\n.clearFile {\n  padding: 5px;\n  width: 4%;\n  margin-top: 6px;\n  color: white;\n  cursor: pointer;\n  border: 1px solid;\n  font-weight: 600;\n  background: red;\n}\n\nlabel {\n  margin-bottom: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93ZWJzaXRlLWNvbmZpZ3VyYXRpb24vc3RhdGljLXBhZ2VzL2FkZC1lZGl0L2FkZC1lZGl0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVztFQUNYLFdBQVc7QUFDZjs7QUFFRTtFQUNFLFNBQVM7RUFDVCxlQUFlO0FBQ25COztBQUhFO0VBS0kseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixzQ0FBc0M7RUFFdEMsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFFakI7O0FBbEJFO0VBb0JJLHlCQUFpQjtLQUFqQixzQkFBaUI7VUFBakIsaUJBQWlCO0VBQ2pCLFNBQVM7RUFDVCxXQUFXO0FBRWpCOztBQXhCRTtFQTBCSSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixjQUFjO0VBQ2QsV0FBVztFQUNYLHVCQUF1QjtBQUU3Qjs7QUFqQ0U7RUFpQ00seUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQiwrQ0FBK0M7RUFDL0MsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZUFBZTtBQUl2Qjs7QUE5Q0U7RUE4Q00seUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQiwrQ0FBK0M7RUFDL0MsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUl4Qjs7QUE1REU7RUE2REksaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUd4Qjs7QUFBRTtFQUNFLFVBQVU7RUFDVixXQUFXO0FBR2Y7O0FBQ0U7RUFDRSxZQUFZO0VBQ1osU0FBUztFQUNULGVBQWU7RUFDZixZQUFZO0VBQ1osZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsZUFBZTtBQUVuQjs7QUFBQTtFQUNFLG1CQUFtQjtBQUdyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2Vic2l0ZS1jb25maWd1cmF0aW9uL3N0YXRpYy1wYWdlcy9hZGQtZWRpdC9hZGQtZWRpdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kdWN0LXdyYXBwZXIge1xuICAgIHBhZGRpbmc6IDElO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICAucm93IHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICBcbiAgICAuZm9ybS1jb250cm9sIHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XG4gICAgICBwYWRkaW5nOiA2cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgZm9udDogNDAwIDEycHggXCJPcGVuIHNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICBjb2xvcjogIzAwMDtcbiAgICB9XG5cbiAgICBpbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xuICAgICAgYXBwZWFyYW5jZTogcmFkaW87XG4gICAgICB3aWR0aDogMSU7XG4gICAgICBmbG9hdDogbGVmdDtcbiAgICB9XG4gIFxuICAgIC5nby1idG4tY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgY29sb3I6ICMzZTNkNGE7XG4gICAgICB3aWR0aDogYXV0bztcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgLmdvYnRuIHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzNhNjZmYTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgICAgICAgcGFkZGluZzogNHB4IDEwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICMzYTY2ZmE7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIH1cbiAgXG4gICAgICAuYWRkLWNsYXNzLWJ0biB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMzYTY2ZmE7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gICAgICAgIHBhZGRpbmc6IDRweCAxMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgY29sb3I6ICMxMjgzZjQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIlO1xuICAgICAgfVxuICAgIH1cbiAgIFxuICAgIC5kcm9wZG93bi1saXN0IHtcbiAgICAgIG1heC1oZWlnaHQ6IDE5N3B4O1xuICAgICAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICAgIH1cbiAgfVxuICAuZm9ybS1ncm91cCB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICAvLyBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5jbGVhckZpbGV7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIHdpZHRoOiA0JTtcbiAgICBtYXJnaW4tdG9wOiA2cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGJhY2tncm91bmQ6IHJlZDtcbn1cbmxhYmVsIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/website-configuration/static-pages/add-edit/add-edit.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/website-configuration/static-pages/add-edit/add-edit.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: AddEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEditComponent", function() { return AddEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/authenticator.service */ "./src/app/services/authenticator.service.ts");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var _services_message_show_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/message-show.service */ "./src/app/services/message-show.service.ts");
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





let AddEditComponent = /** @class */ (() => {
    let AddEditComponent = class AddEditComponent {
        constructor(routeParam, auth, productService, msgService, router) {
            this.routeParam = routeParam;
            this.auth = auth;
            this.productService = productService;
            this.msgService = msgService;
            this.router = router;
            this.selectedPageId = '';
            this.pageModel = {
                page_route: '',
                page_status: '',
                page_title: '',
                in_navbar: false,
                page_data: '',
                image: ''
            };
            this.editorConf = {
                height: 250,
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
            this.statusData = [
                {
                    Title: 'DRAFT'
                },
                {
                    Title: 'PUBLISHED'
                }
            ];
            this.ImgData = [];
            this.routeParam.params.subscribe(params => {
                this.selectedPageId = params['id'];
            });
            console.log(this.selectedPageId);
        }
        ngOnInit() {
            if (this.selectedPageId) {
                this.getPageDataById();
            }
        }
        getPageDataById() {
            this.auth.showLoader();
            this.productService.getMethod('/api/v2/website/page/' + this.selectedPageId, null).subscribe((res) => {
                this.auth.hideLoader();
                this.pageModel = res.result;
                //this.fetchTableDataByPage(this.pageIndex);
            }, err => {
                this.auth.hideLoader();
            });
        }
        // saveData() {
        //   this.selectedPageId ? this.updatePage() : this.AddPage();
        // }
        // checkValidation(event) {
        //   if (event) {
        //     return true;
        //   } else if (this.selectedPageId) {
        //     return true;
        //   } else {
        //     this.msgService.showErrorMessage('error', '', 'Please select File')
        //     return false;
        //   }
        // }
        cancel() {
            this.router.navigate(['view/website-configuration/static-pages/list']);
        }
        saveData() {
            let file = document.getElementById('uploadFileControl').files[0];
            // if (this.checkValidation(file)) {
            if (this.pageModel.page_title != '') {
                if (this.pageModel.page_route != '') {
                    // console.log(this.material_dataFlag);
                    const formData = new FormData();
                    let data = {
                        institute_id: sessionStorage.getItem('institute_id'),
                        page_route: this.pageModel.page_route,
                        page_status: this.pageModel.page_status,
                        page_title: this.pageModel.page_title,
                        in_navbar: this.pageModel.in_navbar,
                        page_data: this.pageModel.page_data
                    };
                    data.page_status = (data.page_status == '') ? 'DRAFT' : data.page_status;
                    if (this.selectedPageId) {
                        data.id = this.selectedPageId;
                        data.banner_image_url = this.pageModel.banner_image_url;
                    }
                    formData.append('data', JSON.stringify(data));
                    if (file) {
                        formData.append('file', file);
                    }
                    let base = this.auth.getBaseUrl();
                    let urlPostXlsDocument = this.selectedPageId ? base + "/prod/api/v2/website/page/update" : base + "/prod/api/v2/website/page/create";
                    let newxhr = new XMLHttpRequest();
                    let auths = {
                        userid: sessionStorage.getItem('userid'),
                        userType: sessionStorage.getItem('userType'),
                        password: sessionStorage.getItem('password'),
                        institution_id: sessionStorage.getItem('institute_id'),
                    };
                    let Authorization = btoa(auths.userid + "|" + auths.userType + ":" + auths.password + ":" + auths.institution_id);
                    this.selectedPageId ? newxhr.open("PUT", urlPostXlsDocument, true) : newxhr.open("POST", urlPostXlsDocument, true);
                    newxhr.setRequestHeader("Authorization", Authorization);
                    newxhr.setRequestHeader("x-proc-authorization", Authorization);
                    newxhr.setRequestHeader("x-prod-inst-id", sessionStorage.getItem('institute_id'));
                    newxhr.setRequestHeader("x-prod-user-id", sessionStorage.getItem('userid'));
                    newxhr.setRequestHeader("enctype", "multipart/form-data;");
                    newxhr.setRequestHeader("Accept", "application/json, text/javascript");
                    newxhr.setRequestHeader("Access-Control-Allow-Origin", "*");
                    if (!this.auth.isRippleLoad.getValue()) {
                        this.auth.showLoader();
                        newxhr.onreadystatechange = () => {
                            this.auth.hideLoader();
                            if (newxhr.readyState == 4) {
                                if (newxhr.status >= 200 && newxhr.status < 300) {
                                    // this.clearuploadObject();
                                    // this.refreshList();
                                    let msg = this.selectedPageId ? 'Page Updated successfully' : 'Page Added Successfully';
                                    this.msgService.showErrorMessage(this.msgService.toastTypes.success, '', msg);
                                    this.cancel();
                                }
                                else {
                                    this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', JSON.parse(newxhr.response).message);
                                }
                            }
                        };
                        newxhr.send(formData);
                    }
                }
                else {
                    this.msgService.showErrorMessage('error', '', 'Please enter page route');
                }
            }
            else {
                this.msgService.showErrorMessage('error', '', 'Please enter Title');
            }
            // }
        }
        clearFile() {
            this.pageModel.banner_image_url = '';
        }
    };
    AddEditComponent.ctorParameters = () => [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticatorService"] },
        { type: _services_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] },
        { type: _services_message_show_service__WEBPACK_IMPORTED_MODULE_4__["MessageShowService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ];
    AddEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-edit',
            template: __importDefault(__webpack_require__(/*! raw-loader!./add-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/website-configuration/static-pages/add-edit/add-edit.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./add-edit.component.scss */ "./src/app/components/website-configuration/static-pages/add-edit/add-edit.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticatorService"],
            _services_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"],
            _services_message_show_service__WEBPACK_IMPORTED_MODULE_4__["MessageShowService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AddEditComponent);
    return AddEditComponent;
})();



/***/ }),

/***/ "./src/app/components/website-configuration/static-pages/list/list.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/components/website-configuration/static-pages/list/list.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".filter-item-2 {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.filter-item-2 .add-class-btn {\n  border: 1px solid #3a66fa;\n  border-radius: 4px;\n  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);\n  padding: 4px 10px;\n  background: white;\n  color: #1283f4;\n  font-size: 14px;\n  font-weight: 600;\n  height: 30px;\n}\n\n.sms-table-wrapper {\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93ZWJzaXRlLWNvbmZpZ3VyYXRpb24vc3RhdGljLXBhZ2VzL2xpc3QvbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQWE7RUFDYix5QkFBeUI7QUFDN0I7O0FBSEE7RUFJTSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLCtDQUErQztFQUMvQyxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFHbEI7O0FBQUU7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBR3ZCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy93ZWJzaXRlLWNvbmZpZ3VyYXRpb24vc3RhdGljLXBhZ2VzL2xpc3QvbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maWx0ZXItaXRlbS0yIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgLmFkZC1jbGFzcy1idG4ge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgIzNhNjZmYTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICAgICAgcGFkZGluZzogNHB4IDEwcHg7XG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgIGNvbG9yOiAjMTI4M2Y0O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGhlaWdodDogMzBweDtcbiAgICB9XG4gIH1cbiAgLnNtcy10YWJsZS13cmFwcGVyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/components/website-configuration/static-pages/list/list.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/website-configuration/static-pages/list/list.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
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





let ListComponent = /** @class */ (() => {
    let ListComponent = class ListComponent {
        constructor(httpService, auth, router, msgService) {
            this.httpService = httpService;
            this.auth = auth;
            this.router = router;
            this.msgService = msgService;
            this.sizeArr = [25, 50, 100, 150, 200, 500, 1000];
            this.pageIndex = 1;
            this.totalRecords = 0;
            this.displayBatchSize = 25;
            this.staticPageData = [];
            this.staticPageDataSouece = [];
        }
        ngOnInit() {
            this.setTableData();
            this.getStaticPageData();
        }
        setTableData() {
            this.headerSetting = [
                {
                    primary_key: 'id',
                    value: "Id",
                    charactLimit: 25,
                    sorting: true,
                    visibility: true
                },
                {
                    primary_key: 'page_title',
                    value: "Title",
                    charactLimit: 25,
                    sorting: true,
                    visibility: true
                },
                {
                    primary_key: 'page_status',
                    value: "Status",
                    charactLimit: 25,
                    sorting: false,
                    visibility: true
                },
                {
                    primary_key: 'page_route',
                    value: "Page URL",
                    charactLimit: 60,
                    sorting: false,
                    visibility: true
                },
                {
                    primary_key: 'in_navbar',
                    value: "Show on website",
                    charactLimit: 20,
                    sorting: false,
                    visibility: true
                },
                {
                    primary_key: 'action',
                    value: "Action",
                    charactLimit: 10,
                    sorting: false,
                    visibility: true,
                    edit: true,
                    delete: true,
                },
            ];
            this.tableSetting = {
                width: "100%",
                height: "58vh"
            };
            this.rowColumns = [
                {
                    width: "10%",
                    textAlign: "left"
                },
                {
                    width: "25%",
                    textAlign: "left"
                },
                {
                    width: "20%",
                    textAlign: "left"
                },
                {
                    width: "20%",
                    textAlign: "left"
                },
                {
                    width: "20%",
                    textAlign: "left"
                },
                {
                    width: "20%",
                    textAlign: "left"
                },
            ];
        }
        getStaticPageData() {
            this.auth.showLoader();
            this.httpService.getMethod('/api/v2/website/page/institute/' + sessionStorage.getItem('institute_id'), null).subscribe((res) => {
                this.auth.hideLoader();
                this.staticPageDataSouece = res.result;
                this.totalRecords = this.staticPageDataSouece.length;
                this.staticPageData = this.getDataFromDataSource(0);
                if (this.staticPageDataSouece && this.staticPageDataSouece.length) {
                    this.staticPageDataSouece.forEach(element => {
                        if (element.page_status != null && element.page_status != '') {
                            element.page_status = element.page_status.charAt(0).toUpperCase() + element.page_status.substr(1).toLowerCase();
                            element.in_navbar = (element.in_navbar) ? 'Yes' : 'No';
                        }
                    });
                }
                //this.fetchTableDataByPage(this.pageIndex);
            }, err => {
                this.auth.hideLoader();
            });
        }
        // pagination functions 
        fetchTableDataByPage(index) {
            this.pageIndex = index;
            let startindex = this.displayBatchSize * (index - 1);
            this.staticPageData = this.getDataFromDataSource(startindex);
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
        getDataFromDataSource(startindex) {
            let t = this.staticPageDataSouece.slice(startindex, startindex + this.displayBatchSize);
            return t;
        }
        updateTableBatchSize(event) {
            this.pageIndex = 1;
            this.displayBatchSize = event;
            this.fetchTableDataByPage(this.pageIndex);
        }
        editRow(object) {
            console.log(object);
            this.router.navigate(['view/website-configuration/static-pages/edit/' + object.data.id]);
        }
        deleteRow(obj) {
            this.auth.showLoader();
            this.httpService.deleteFile('/prod/api/v2/website/page/' + obj.data.id).subscribe((res) => {
                this.auth.hideLoader();
                this.msgService.showErrorMessage('success', '', 'Page Deleted Successfully');
                this.getStaticPageData();
            }, err => {
                this.auth.hideLoader();
            });
        }
    };
    ListComponent.ctorParameters = () => [
        { type: _services_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] },
        { type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticatorService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _services_message_show_service__WEBPACK_IMPORTED_MODULE_3__["MessageShowService"] }
    ];
    ListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list',
            template: __importDefault(__webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/website-configuration/static-pages/list/list.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./list.component.scss */ "./src/app/components/website-configuration/static-pages/list/list.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_services_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"],
            _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticatorService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_message_show_service__WEBPACK_IMPORTED_MODULE_3__["MessageShowService"]])
    ], ListComponent);
    return ListComponent;
})();



/***/ }),

/***/ "./src/app/components/website-configuration/static-pages/static-pages-routing.module.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/website-configuration/static-pages/static-pages-routing.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: StaticPagesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticPagesRoutingModule", function() { return StaticPagesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _add_edit_add_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-edit/add-edit.component */ "./src/app/components/website-configuration/static-pages/add-edit/add-edit.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/list.component */ "./src/app/components/website-configuration/static-pages/list/list.component.ts");
/* harmony import */ var _static_pages_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./static-pages.component */ "./src/app/components/website-configuration/static-pages/static-pages.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





const routes = [
    {
        path: '',
        component: _static_pages_component__WEBPACK_IMPORTED_MODULE_4__["StaticPagesComponent"],
        pathMatch: 'prefix',
        children: [
            {
                path: 'static-pages',
                component: _static_pages_component__WEBPACK_IMPORTED_MODULE_4__["StaticPagesComponent"]
            },
            {
                path: 'list',
                component: _list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"]
            },
            {
                path: 'add',
                component: _add_edit_add_edit_component__WEBPACK_IMPORTED_MODULE_2__["AddEditComponent"]
            },
            {
                path: 'edit/:id',
                component: _add_edit_add_edit_component__WEBPACK_IMPORTED_MODULE_2__["AddEditComponent"]
            }
            // {
            //   path: 'images',
            //   component: ImagesComponent
            // },
        ]
    }
];
let StaticPagesRoutingModule = /** @class */ (() => {
    let StaticPagesRoutingModule = class StaticPagesRoutingModule {
    };
    StaticPagesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], StaticPagesRoutingModule);
    return StaticPagesRoutingModule;
})();



/***/ }),

/***/ "./src/app/components/website-configuration/static-pages/static-pages.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/website-configuration/static-pages/static-pages.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  margin: 0px;\n  font-family: 'Open Sans', sans-serif;\n}\n\n.flex {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.flex2 {\n  display: flex;\n}\n\n.blue_button {\n  background-color: #109CF1;\n  color: white;\n  padding: 0px 20px;\n  font-size: 12px;\n  border: none;\n  height: 30px;\n  line-height: 30px;\n  border-radius: 5px;\n  font-weight: 500;\n  cursor: pointer;\n}\n\n.white_button {\n  background-color: #fff;\n  color: #109CF1;\n  padding: 0px 19px;\n  font-size: 12px;\n  height: 30px;\n  border: 1px solid #109CF1;\n  border-radius: 5px;\n  font-weight: 500;\n  line-height: 30px;\n  cursor: pointer;\n}\n\ninput:focus,\nselect:focus,\nbutton:focus {\n  outline: none;\n}\n\n.w98 {\n  width: 98%;\n  margin: 0px auto;\n}\n\n.w981 {\n  margin-left: 1%;\n}\n\n.main_div {\n  display: flex;\n  margin-top: 10px;\n  padding-top: 16px;\n}\n\n.sidebar {\n  width: 15%;\n  background: #F3F4F6;\n  border: 1px solid #DCDCDC;\n  box-sizing: border-box;\n height: calc(100vh - 60px);\n  position: fixed;\n\n}\n\n.sidebar ul:first-of-type {\n  height: calc(100vh - ( 60px + 100px));\n  overflow-y: auto;\n}\n\n.mr16{\n  margin-right: 16px;\n}\n\n.settings {\n  padding: 20px 10px;\n  border-bottom: 1px solid #000;\n  font-weight: bold;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n  letter-spacing: 0.01em;\n  color: #1A2334;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.settings>span>span {\n  position: relative;\n  top: -6px;\n}\n\n.menu1 {\n  margin-top: 20px;\n}\n\n.menu1 li {\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 18px;\n  letter-spacing: 0.01em;\n  padding: 20px 0px;\n  padding-left: 10px;\n  color: #1A2334;\n  cursor: pointer;\n}\n\n.menu1 li.selected {\n  background: #FFFFFF;\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n\n  letter-spacing: 0.01em;\n\n}\n\n.selected{\n  background: #FFFFFF;\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n\n  letter-spacing: 0.01em;\n}\n\na {\n  color: #1A2334;\n  text-decoration: none;\n}\n\n.menu1 li.selected>a {\n\n  color: #0097F9;\n}\n\n.display {\n  display: flex;\n  justify-content: space-between;\n}\n\n.bottom {\n  padding: 1%;\n  position: fixed;\n  bottom: 0;\n  background: #fff;\n  width: calc(100% - 15%);\n  border-top: 1px solid #EAEAEA;\n  box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.25);\n}\n\n.mr10 {\n  margin-right: 16px;\n}\n\n.set1 {\n  /*overflow-y: scroll;*/\n  padding:0 1%;\n  margin-left: 17.7%;\n}\n\n.hidden {\n  visibility: hidden;\n}\n\n.settings_label {\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n  margin-right: 30px;\n  letter-spacing: 0.01em;\n  color: #000000;\n  margin-left: -10px;\n}\n\n.checkbox {\n  display: grid;\n  grid-template-columns: -webkit-min-content auto;\n  grid-template-columns: min-content auto;\n  grid-gap: 0.5em;\n  font-size: 2rem;\n  margin-bottom: 16px;\n  color: var(--color);\n  cursor: pointer;\n}\n\n.checkbox__input input {\n  opacity: 0;\n  width: 0em;\n  height: 0em;\n}\n\n.checkbox__control {\n  display: inline-grid;\n  width: 0.5em;\n  height: 0.5em;\n  border-radius: 0.1em;\n  border: 1px solid #BBB2B2;\n  ;\n}\n\n.checkbox__input {\n  display: grid;\n  grid-template-areas: \"checkbox\";\n}\n\n.checkbox__control svg {\n  color: #fff;\n  background: #109CF1;\n  transition: transform 0.1s ease-in 25ms;\n  transform: scale(0);\n  stroke-width: 4;\n  padding: 2px;\n  width: 0.5em;\n  height: 0.5em;\n  border: none;\n  border-radius: 3px;\n  transform-origin: bottom left;\n}\n\n.checkbox__input input:checked+.checkbox__control svg {\n  transform: scale(1);\n}\n\n.checkbox__input input:checked+.checkbox__control {\n  border: none;\n}\n\n.flex1>div:nth-child(2) {\n  width: 100%;\n}\n\n.input {\n  border: 0.5px solid #2D2D2D;\n  box-sizing: border-box;\n  border-radius: 5px;\n  width: 336px;\n  height: 35px;\n  margin-bottom: 16px;\n  font-weight: normal;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n  padding-left: 10px !important;\n  letter-spacing: 0.01em;\n\n  color: #000000;\n}\n\n.input::-moz-placeholder {\n  font-weight: normal;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n\n  letter-spacing: 0.01em;\n  padding-left: 10px;\n  color: #000000;\n}\n\n.input:-ms-input-placeholder {\n  font-weight: normal;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n\n  letter-spacing: 0.01em;\n  padding-left: 10px;\n  color: #000000;\n}\n\n.input::placeholder {\n  font-weight: normal;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n\n  letter-spacing: 0.01em;\n  padding-left: 10px;\n  color: #000000;\n}\n\n.flex1>div:first-child {\n  width: 75px;\n}\n\n/*extra layout*/\n\n/*switch-tab*/\n\n.nav-item .nav-link {\n  font-weight: 400;\n  color: #405877;\n  padding-bottom: 8px;\n  cursor: pointer;\n  font-size: 13px\n}\n\n.nav-item .nav-link.active {\n  font-weight: 600;\n  border-bottom: 3px solid #109CF1 !important;\n  color: #109CF1 !important;\n}\n\n.nav-link {\n  display: block;\n  padding: 1.5rem 0rem;\n  margin-right: 1rem;\n  margin: -1rem 2.5rem;\n  margin-left: 0rem;\n}\n\n.nav>li {\n  display: inline;\n}\n\n.nav-link:hover,\n.nav-link,\n.nav-link:focus {\n  background-color: transparent;\n}\n\n.nav-link {\n  display: inline;\n}\n\n.nav-item {\n  .active {\n    border-bottom: 3px solid #109cf1 !important;\n    color: #109cf1 !important;\n  }\n}\n\n.activeSession{\n  background: #FFFFFF;\n  font-weight: 600;\nfont-size: 13px;\nline-height: 18px;\n/* identical to box height */\nbox-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);\nletter-spacing: 0.01em;\n\ncolor: #0097F9;\n}\n\n.main-shadow {\n  border-bottom: 1px solid #EFF0F5;\n  padding-bottom: 8px;\n}\n\n/*web image*/\n\n.flex2 {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.flex2.img img{\n  height:154px;\n  width: auto;\n}\n\n.flex2>div {\n  width: 50%;\n}\n\n.upload-img{\n  background: #FFFFFF;\n  border: 1px dashed #E1E1E1;\n  box-sizing: border-box;\n  border-radius: 10px;\n  height:155px;\n  width: 277px;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  justify-content: space-around;\n  margin-bottom: 4px;\n}\n\n.flex2.img .upload-img img{\n  height: 80px;\n  width: auto;\n}\n\n.flex2>div>div {\n  margin: 30px auto;\n  width: 300px;\n}\n\n.flex2 p.one {\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n  letter-spacing: 0.01em;\n  color: #1A2334;\n}\n\n.flex2 p.two {\n  font-weight: 600;\n  font-size: 10px;\n  line-height: 14px;\n  letter-spacing: 0.01em;\n  margin-bottom: 5px;\n  color: #636363;\n\n}\n\n.flex2 p.three {\n  font-weight: 400;\n  font-size: 10px;\n  line-height: 14px;\n  letter-spacing: 0.01em;\n\n  color: #636363;\n}\n\n.flex2 p.selected {\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n\n  letter-spacing: 0.01em;\n\n  color: #109CF1;\n\n}\n\n.flex2 img {\n  cursor: pointer;\n}\n\n/*Static Page (More)*/\n\n.title {\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n  letter-spacing: 0.01em;\n  color: #334D6E;\n}\n\n.table_head {\n  display: flex;\n  background: #EFF0F5;\n  border-radius: 2px;\n}\n\n.table_head>div {\n  width: calc((100% - ((160px * 4) - 100px)) / 1);\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 50px;\n  /* identical to box height */\n  padding-left: 20px;\n  letter-spacing: 0.01em;\n  color: #323C47;\n}\n\n.table_head>div:nth-child(1),\n.table_head>div:nth-child(3),\n.table_head>div:nth-child(4),\n.table_head>div:nth-child(5) {\n  width: 160px;\n}\n\n.table_body {\n  display: flex;\n  border-bottom: 1px solid #EFF0F5;\n  background-color: #fff;\n\n\n}\n\n.table_head>div:nth-child(6),\n.table_body>div:nth-child(6) {\n  width: 100px;\n}\n\n.modal-header h4{\n  margin: 0;\n display: inline-block;\n}\n\n.table_body>div {\n  width: calc((100% - ((160px * 4) - 100px)) / 1);\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 18px;\n  height: 50px;\n  letter-spacing: 0.01em;\n  padding-left: 20px;\n  display: flex;\n  align-items: center;\n  color: #323C47;\n}\n\n.table_body>div:nth-child(1),\n.table_body>div:nth-child(3),\n.table_body>div:nth-child(4),\n.table_body>div:nth-child(5) {\n  width: 160px;\n\n}\n\n.table_body img {\n  cursor: pointer;\n}\n\n.modal-title {\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n  letter-spacing: 0.01em;\n  color: #334D6E;\n  margin-bottom: 0px;\n}\n\n.modal.in .modal-dialog {\n  margin: 0px auto;\n  margin-top: 60px;\n}\n\n.modal .label_p {\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 20px;\n  letter-spacing: 0.01em;\n  color: #334D6E;\n  margin:0;\n}\n\n.modal .label_p>span,\n.modal .size>span {\n  color: #FE0A27;\n}\n\n.modal .input {\n  background: #FFFFFF;\n  border: 1px solid #C4CACE;\n  box-sizing: border-box;\n  border-radius: 5px;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 16px;\n  width: 100%;\n  margin-bottom: 10px;\n  letter-spacing: 0.01em;\n  color: #323C47;\n  padding-left: 0px;\n}\n\n.modal .input::-moz-placeholder {\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 16px;\n  letter-spacing: 0.01em;\n  color: #323C47;\n\n}\n\n.modal .input:-ms-input-placeholder {\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 16px;\n  letter-spacing: 0.01em;\n  color: #323C47;\n\n}\n\n.modal .input::placeholder {\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 16px;\n  letter-spacing: 0.01em;\n  color: #323C47;\n\n}\n\n.modal textarea {\n  height: 55px;\n  padding: 10px 0px;\n}\n\n.modal .display select {\n  width: 168px;\n}\n\n.center {\n  align-items: center;\n}\n\n.top23 {\n  position: relative;\n  top: 5px;\n}\n\n.size {\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 16px;\n  letter-spacing: 0.01em;\n  color: #211F27;\n  margin-bottom:5px;\n}\n\n@media (min-width: 768px) {\n  .modal-dialog {\n    width: 400px;\n\n  }\n}\n\n.modal-dialog {\n  width: 400px;\n\n}\n\n@media (min-width: 768px) {\n  #myModal_faq .modal-dialog {\n    width: 340px;\n  }\n}\n\n#myModal_faq .modal-dialog {\n  width: 340px;\n\n}\n\n.file_name {\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n  margin: 10px 0px;\n  letter-spacing: 0.01em;\n  display: flex;\n  align-items: center;\n\n  color: #211F27;\n}\n\n.mb16{\n  margin-bottom: 6px;\n}\n\n.pic {\n  border: 0.5px dashed #5A5A5A;\n  box-sizing: border-box;\n  border-radius: 5px;\n  padding:5px;\n  text-align: center;\n}\n\n.pic>img{\n  height:60px;\n  width: auto;\n}\n\n.img_slider .table_body>div:nth-child(1),\n.img_slider .table_head>div:nth-child(1) {\n  width: 160px;\n}\n\n.img_slider .table_head>div:nth-child(4),\n.img_slider .table_body>div:nth-child(4) {\n  width: 90px;\n}\n\n.img_slider .table_head>div,\n.img_slider .table_body>div {\n  width: calc((100% - (160px + 90px)) / 2);\n}\n\n.position_bot {\n  position: relative;\n  top: 5px;\n}\n\n.white_box {\n  background: #FFFFFF;\n  box-shadow: 0px 10px 15px rgba(26, 35, 52, 0.05);\n  display: flex;\n  padding: 18px 0px;\n  margin-right: 1.25%;\n  margin-bottom: 20px;\n}\n\n.white_box>div:first-child {\n  display: flex;\n  width: 10%;\n  justify-content: center;\n}\n\n.white_box>div:first-child>img {\n  width: 39px;\n  height: 32px;\n}\n\n.white_box>div:last-child {\n  width: 90%;\n}\n\n.white_box p {\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n  letter-spacing: 0.01em;\n  color: #1A2334;\n}\n\n.white_box input {\n  border: none;\n  width: 100%;\n  border-bottom: 1px solid #E6E6E6;\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n  letter-spacing: 0.01em;\n  color: #1A2334;\n\n}\n\n.white_box input::-moz-placeholder {\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n  letter-spacing: 0.01em;\n  color: #8191AE;\n\n}\n\n.white_box input:-ms-input-placeholder {\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n  letter-spacing: 0.01em;\n  color: #8191AE;\n\n}\n\n.white_box input::placeholder {\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n  letter-spacing: 0.01em;\n  color: #8191AE;\n\n}\n\n.white {\n  position: fixed;\n  bottom: 10px;\n  width: calc(100% - 31%);\n  padding-right: 0.75%;\n  margin-bottom: 10px;\n}\n\n.white>div {\n  display: flex;\n\n  justify-content: space-between;\n}\n\n.white2 {\n\n  background: #FFFFFF;\n  padding: 20px;\n}\n\n.white2>div:first-child {\n  display: flex;\n  justify-content: space-between;\n\n}\n\n.white2>div:first-child>div {\n  width: 32%;\n}\n\n.white2 label {\n  font-weight: 400;\n  font-size: 11px;\n  line-height: 15px;\n  /* identical to box height */\n  display: block;\n  letter-spacing: 0.01em;\n  margin-bottom: 10px;\n  color: #323C47;\n\n}\n\n.white2 input,\n.white2 select {\n\n  background: #F5F5F5;\n  border-radius: 2px;\n  letter-spacing: 0.01em;\n  font-size: 11px;\n  line-height: 15px;\n  height: 35px;\n  padding-left: 10px;\n  color: #323C47;\n}\n\n.white2 input {\n  width: 72%;\n}\n\n.white2 input:nth-child(2) {\n  width: 100%;\n}\n\n.white2 select {\n  width: 21%;\n}\n\n.white2 input::-moz-placeholder, .white2 textarea::-moz-placeholder {\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 16px;\n  letter-spacing: 0.01em;\n\n  color: #727679;\n\n}\n\n.white2 input:-ms-input-placeholder, .white2 textarea:-ms-input-placeholder {\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 16px;\n  letter-spacing: 0.01em;\n\n  color: #727679;\n\n}\n\n.white2 input::placeholder,\n.white2 textarea::placeholder {\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 16px;\n  letter-spacing: 0.01em;\n\n  color: #727679;\n\n}\n\n.white2 textarea {\n  background: #F5F5F5;\n  border-radius: 2px;\n  letter-spacing: 0.01em;\n  font-size: 11px;\n  line-height: 15px;\n  height: 90px;\n  padding-left: 10px;\n  color: #323C47;\n  width: 65%;\n}\n\n.page-content {\n  background: #F5F5F5;\n  min-height: calc(100vh - 60px);\n  height: auto;\n  padding-top: 16px;\n}\n\n.flex_white {\n  display: flex;\n  justify-content: space-between;\n  padding: 1% 1.75%;\n  background-color: #fff;\n}\n\n.white3 {\n  margin-left: 1%;\n  padding: 1%;\n  background-color: #fff;\n}\n\n.white3 p {\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n\n  letter-spacing: 0.01em;\n\n  color: #323C47;\n\n}\n\nspan.color {\n  width: 25px;\n  height: 25px;\n  margin-left: 20px;\n  background-color: #109CF1;\n}\n\nspan.color1 {\n  width: 25px;\n  height: 25px;\n  margin-left: 20px;\n  background-color:white;\n  border:solid 1px rgb(67, 143, 206);\n}\n\n.flex_white>div:first-child>div {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.flex_white>div:first-child p {\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n  letter-spacing: 0.01em;\n  color: #000000;\n}\n\n.flex_white>div:nth-child(2) {\n\n  font-weight: 400;\n  font-size: 24px;\n  line-height: 41px;\n  /* identical to box height */\n  letter-spacing: 0.01em;\n  color: #86858B;\n  display: flex;\n\n  align-items: center;\n}\n\n.flex_white>div:nth-child(3) {\n  display: flex;\n\n  align-items: center;\n}\n\nbody {\n  background: #F5F5F5;\n}\n\n/* faq*/\n\n.faq .table_body>div:nth-child(1),\n.faq .table_head>div:nth-child(1) {\n  width: 160px;\n}\n\n.faq .table_head>div:nth-child(4),\n.faq .table_body>div:nth-child(4) {\n  width: 90px;\n}\n\n.faq .table_head>div:nth-child(3),\n.faq .table_body>div:nth-child(3) {\n  width: 150px;\n}\n\n.faq .table_head>div,\n.faq .table_body>div {\n  width: calc((100% - (160px + 240px)) / 1);\n}\n\n.faq_select {\n  background: #FFFFFF;\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n  width: 103px;\n  height: 30px;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 16px;\n  /* identical to box height */\n  cursor: pointer;\n  text-align: center;\n  letter-spacing: 0.01em;\n\n  color: #334D6E;\n}\n\nspan.line {\n  border-left: 1px solid #C4C4C4;\n  height: 32px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.02);\n}\n\n/*qa*/\n\n.qa .table_body>div:nth-child(1),\n.qa .table_head>div:nth-child(1) {\n  width: 90px;\n}\n\n.qa .table_head>div:last-child,\n.qa .table_body>div:last-child {\n  width: 90px;\n}\n\n.qa .table_body>div:nth-child(5),\n.qa .table_head>div:nth-child(5) {\n  width: 160px;\n}\n\n.qa .table_head>div,\n.qa .table_body>div {\n  width: calc((100% - (90px + 150px)) / 3);\n}\n\n.texth {\n  height: 70px;\n}\n\n.blue_large_button {\n  width: 100%;\n  background: #157EBE;\n  border: 1px solid #E8E8E8;\n  box-sizing: border-box;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.03);\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n\n  letter-spacing: 0.01em;\n  height: 35px;\n  color: #FFFFFF;\n}\n\n.white_large_button {\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n  width: 100%;\n  letter-spacing: 0.01em;\n  border: none;\n  height: 20px;\n  margin-top: 10px;\n  background-color: #fff;\n  color: #406585;\n\n}\n\n/*testimonial*/\n\n.fa.fa-star {\n  color: orange;\n  margin-right: 10px;\n}\n\n.testimonial .table_body>div:nth-child(1),\n.testimonial .table_head>div:nth-child(1),\n.testimonial .table_head>div:last-child,\n.testimonial .table_body>div:last-child {\n  width: 90px;\n}\n\n.testimonial .table_head>div:nth-child(4),\n.testimonial .table_body>div:nth-child(4),\n.testimonial .table_head>div:nth-child(5),\n.testimonial .table_body>div:nth-child(5) {\n  width: 150px;\n}\n\n.testimonial .table_head>div,\n.testimonial .table_body>div {\n  width: calc((100% - (180px + 300px)) / 2);\n}\n\n.testimonial .scroll,.img_slider .scroll, .scroll-sp {\n  height: calc(100vh - (190px));\n  overflow-y: auto;\n  background-color: #fff;\n}\n\n.scroll-sp{\n  height:calc(100% - 16px);\n  overflow-y: auto;\n  overflow-x: hidden;\n  margin: 16px 0px;\n}\n\n/* width */\n\n.scroll-sp::-webkit-scrollbar {\n  width: 3px;\n}\n\n/* Track */\n\n.scroll-sp::-webkit-scrollbar-track {\n  background: #EFF0F5;\n\n}\n\n/* Handle */\n\n.scroll-sp::-webkit-scrollbar-thumb {\n  background: #0097F9;\n\n}\n\n.scroll-sp {\n  scrollbar-color: #0097F9 #EFF0F5;\n  scrollbar-width: thin;\n}\n\n.space {\n  padding-top: 10px;\n}\n\n.white_box_large {\n  background-color: #fff;\n  padding: 20px;\n}\n\n.white_box_large p {\n  font-weight: 400;\n  font-size: 11px;\n  line-height: 15px;\n  /* identical to box height */\n\n  letter-spacing: 0.01em;\n\n  color: #323C47;\n\n}\n\n.white_box_large input {\n  width: 100%;\n  background: #F5F5F5;\n  border-radius: 2px;\n  height: 35px;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 16px;\n  letter-spacing: 0.01em;\n  outline: none;\n  border: none;\n  color: #323C47;\n\n}\n\n.white_box_large input::-moz-placeholder {\n  color: #727679;\n}\n\n.white_box_large input:-ms-input-placeholder {\n  color: #727679;\n}\n\n.white_box_large input::placeholder {\n  color: #727679;\n}\n\n.white_box_large div {\n  text-align: center;\n}\n\n/* Manage Content (Other Links)*/\n\np.editable {\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n\n  letter-spacing: 0.01em;\n  height: 40vh;\n  color: #1A2334;\n}\n\np.editable2 {\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n\n  letter-spacing: 0.01em;\n  color: #1A2334;\n}\n\n.white_box5 {\n  background-color: #fff;\n  padding: 16px 30px;\n  margin-top: 15px;\n}\n\n.editbox {\n  background: #FFFFFF;\n  box-shadow: 2px 0px 10px 2px rgba(0, 0, 0, 0.1);\n  display: flex;\n  justify-content: space-around;\n  padding: 14px 20px;\n}\n\n.editbox>div:nth-child(1) img {\n  margin-right: 10px;\n  cursor: pointer;\n  width: 20.5px;\n  height: auto;\n}\n\n.editbox .line {\n  border-right: 2px solid #F3F3F6;\n  ;\n}\n\n.editbox select {\n  border: none;\n  padding: 0px 15px;\n  cursor: pointer;\n  outline: none;\n}\n\n.editbox select .sans {\n  font-weight: 600;\n  font-family: Open Sans;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n\n  letter-spacing: 0.01em;\n\n  color: #1A2334;\n\n}\n\n.editbox select.tt {\n  /*background: url(../../../../assets/img_web_app/tt.svg);*/\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n.editbox select.font {\n  /*background: url(../../../../assets/img_web_app/font.svg);*/\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n.editbox div.fonts {\n  display: flex;\n  align-items: center;\n}\n\n.editbox div.fonts img {\n  margin-right: 20px;\n}\n\n.editbox div.fonts img.underline {\n  width: 10px;\n  height: auto;\n}\n\n.editbox div.color img {\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n  margin: 0px 20px;\n}\n\n.editbox div.color {\n  display: flex;\n  align-items: center;\n}\n\n.editbox div.font_align img {\n  margin-right: 20px;\n}\n\n.editbox div.font_align {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n\n.dropdown11 {\n  position: relative;\n  display: inline-block;\n}\n\n.dropdown-content11 {\n  display: none;\n  position: absolute;\n  background-color: #fff;\n  width: 179px;\n  height: 196px;\n  bottom: 0px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1;\n}\n\n.dropdown11:hover .dropdown-content11 {\n  display: block;\n}\n\n/* app*/\n\n.flex1 {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 10px;\n}\n\n.ellipse {\n  background: #F0EFEF;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);\n  width: 19px;\n  height: 19px;\n  padding: 0px 7px;\n  border-radius: 50%;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 16px;\n  /* identical to box height, or 100% */\n\n  letter-spacing: 0.01em;\n\n  color: #0097F9;\n\n}\n\n.blue_line {\n  border-top: 1px solid #0097F9;\n  width: 22px;\n  display: inline-block;\n  margin: 0px 7px;\n  position: relative;\n  top: -4px;\n}\n\n.blue_settings {\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 22px;\n  /* identical to box height */\n  letter-spacing: 0.01em;\n  color: #0097F9;\n}\n\n.flex1>div:first-child,\n.flex3>div:first-child,\n.flex4>div:first-child {\n  width: 75px;\n}\n\n.flex3,\n.flex4 {\n  display: flex;\n}\n\np.two2 {\n  font-weight: 400;\n  font-size: 11px;\n  line-height: 15px;\n  letter-spacing: 0.01em;\n\n  color: #334D6E;\n\n}\n\np.one2 {\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n\n  letter-spacing: 0.01em;\n\n  color: #334D6E;\n}\n\n.flex3>div:nth-child(2) {\n  width: 150px;\n  margin-right: 50px;\n}\n\n.flex3>div:nth-child(3) span {\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 35px;\n  /* identical to box height */\n  letter-spacing: 0.01em;\n  margin: 0px 10px;\n  color: #211F27;\n\n}\n\n.flex3>div:nth-child(3) span img:first-of-type {\n  margin: 0px 5px;\n  position: relative;\n  top: 8px;\n}\n\n.flex3>div:nth-child(3) span img:nth-of-type(2) {\n  margin: 0px 5px;\n  position: relative;\n  top: 3px;\n}\n\n.flex3>div:nth-child(3) .pic {\n  margin-top: 20px;\n}\n\n.sepration {\n  border-bottom: 1px solid rgba(29, 29, 29, 0.5);\n  margin: 20px 0px;\n  margin-left: 65px;\n}\n\n.flex4 {\n  margin-top: 20px;\n  justify-content: space-between;\n}\n\n.flex5 {\n  margin-top: 20px;\n  justify-content: space-between;\n  display: flex;\n  margin-left: 60px;\n}\n\n.flex4>div:nth-child(2) img {\n  height: 30px;\n  width: 30px;\n  line-height: 35px;\n  margin-right: 15px;\n}\n\n.flex4>div:nth-child(3) {\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 35px;\n  /* identical to box height */\n  width: 180px;\n  letter-spacing: 0.01em;\n\n  color: #334D6E;\n}\n\nb {\n  font-weight: 600;\n}\n\n.flex4 input {\n  border: none;\n  box-sizing: border-box;\n  border-radius: 5px;\n  font-weight: normal;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n  height: 35px;\n  letter-spacing: 0.01em;\n  width: 573px;\n  color: #334D6E;\n  padding-left: 10px;\n}\n\n.flex4 input::-moz-placeholder {\n  color: #8e939a;\n}\n\n.flex4 input:-ms-input-placeholder {\n  color: #8e939a;\n}\n\n.flex4 input::placeholder {\n  color: #8e939a;\n}\n\n.white29 {\n  position: fixed;\n  bottom: 0px;\n  background: #F5F5F5;\n  padding: 1%;\n  width: calc(100% - 32.5%);\n}\n\n.white29>div {\n  display: flex;\n\n  justify-content: space-between;\n}\n\n.flex4>div:nth-child(3) span>span {\n  font-weight: 400;\n  font-size: 11px;\n  line-height: 15px;\n  letter-spacing: 0.01em;\n\n  color: #334D6E;\n}\n\n.sep_line {\n  margin-left: 65px;\n  border-bottom: 1px solid #C4C4C4;\n  margin-bottom: 16px;\n}\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 35px;\n  height: 12px;\n}\n\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  /* background-color: #ccc;*/\n  -webkit-transition: .4s;\n  border: 1px solid #BDBABA;\n  box-sizing: border-box;\n  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1));\n  transition: .4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 18px;\n  width: 18px;\n  left: -6px;\n  bottom: -4px;\n  background-color: #BDBABA;\n  transition: .4s;\n}\n\ninput:checked+.slider {\n  /*background-color: #2196F3;*/\n}\n\ninput:focus+.slider {\n  /*box-shadow: 0 0 1px #2196F3;*/\n}\n\ninput:checked+.slider:before {\n  transform: translateX(26px);\n  background-color: #19C83F;\n}\n\ninput:checked+.slider {\n  border: 1px solid #BDBABA;\n}\n\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n\n.toggle {\n  display: flex;\n\n  padding-top: 30px;\n\n  width:160px;\n}\n\n.off {\n  font-weight: 300;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n  letter-spacing: 0.01em;\n  color: #000000;\n  position: relative;\n  top: -4px;\n  margin: 0px 10px;\n}\n\n.on {\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n  margin: 0px 10px;\n  letter-spacing: 0.01em;\n  position: relative;\n  top: -4px;\n  color: #19C83F;\n}\n\n.bold_settings {\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 18px;\n  margin-bottom: 8px;\n  /* identical to box height */\n  letter-spacing: 0.01em;\n  color: #323C47;\n}\n\n.black_settings {\n  font-weight: normal;\n  font-size: 13px;\n  line-height: 18px;\n  /* identical to box height */\n  margin-bottom: 16px;\n  letter-spacing: 0.01em;\n\n  color: #323C47;\n}\n\n.space16 {\n  margin-top: 16px;\n}\n\n.input1 {\n \n  box-sizing: border-box;\n  border-radius: 5px;\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 35px;\n  /* identical to box height */\n  width: 573px;\n  padding-left: 10px;\n  letter-spacing: 0.01em;\n  color: #334D6E\n}\n\n.w135 {\n  width: 225px\n}\n\n.product-wrapper {\n  width: 100%;\n}\n\n.product-wrapper .row {\n  margin: 0;\n}\n\n.testimonial .scroll, .img_slider .scroll, .scroll-sp {\n  height: calc(100vh - (230px));\n  overflow-y: auto;\n  background-color: #fff;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93ZWJzaXRlLWNvbmZpZ3VyYXRpb24vd2Vic2l0ZS1jb25maWd1cmF0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3dlYnNpdGUtY29uZmlndXJhdGlvbi9zdGF0aWMtcGFnZXMvc3RhdGljLXBhZ2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsYUFBYTtBQUNmOztBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBR0E7OztFQUdFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixzQkFBc0I7Q0FDdkIsMEJBQTBCO0VBQ3pCLGVBQWU7O0FBRWpCOztBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQiw2QkFBNkI7RUFDN0IsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIs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LGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQiw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQiw0QkFBNEI7RUFDNUIsbUJBQW1CO0VBQ25CLHNCQUFzQjs7RUFFdEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLDRCQUE0QjtFQUM1QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QjtBQUNGOztBQUVBO0VBQ0U7QUFDRjs7QUNyL0NBO0VBQ0UsV0FBVztBQUFiOztBQURBO0VBSUksU0FBUztBQUNiOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLGdCQUFnQjtFQUNoQixzQkFBc0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3dlYnNpdGUtY29uZmlndXJhdGlvbi9zdGF0aWMtcGFnZXMvc3RhdGljLXBhZ2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gIG1hcmdpbjogMHB4O1xuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG59XG5cbi5mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLmZsZXgyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5ibHVlX2J1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMDlDRjE7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMHB4IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYm9yZGVyOiBub25lO1xuICBoZWlnaHQ6IDMwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLndoaXRlX2J1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGNvbG9yOiAjMTA5Q0YxO1xuICBwYWRkaW5nOiAwcHggMTlweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMxMDlDRjE7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuXG5pbnB1dDpmb2N1cyxcbnNlbGVjdDpmb2N1cyxcbmJ1dHRvbjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi53OTgge1xuICB3aWR0aDogOTglO1xuICBtYXJnaW46IDBweCBhdXRvO1xufVxuXG4udzk4MSB7XG4gIG1hcmdpbi1sZWZ0OiAxJTtcbn1cblxuLm1haW5fZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgcGFkZGluZy10b3A6IDE2cHg7XG59XG5cbi5zaWRlYmFyIHtcbiAgd2lkdGg6IDE1JTtcbiAgYmFja2dyb3VuZDogI0YzRjRGNjtcbiAgYm9yZGVyOiAxcHggc29saWQgI0RDRENEQztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiBoZWlnaHQ6IGNhbGMoMTAwdmggLSA2MHB4KTtcbiAgcG9zaXRpb246IGZpeGVkO1xuXG59XG5cbi5zaWRlYmFyIHVsOmZpcnN0LW9mLXR5cGUge1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAoIDYwcHggKyAxMDBweCkpO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuLm1yMTZ7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbn1cbi5zZXR0aW5ncyB7XG4gIHBhZGRpbmc6IDIwcHggMTBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICBjb2xvcjogIzFBMjMzNDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5zZXR0aW5ncz5zcGFuPnNwYW4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTZweDtcbn1cblxuLm1lbnUxIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLm1lbnUxIGxpIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgcGFkZGluZzogMjBweCAwcHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgY29sb3I6ICMxQTIzMzQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm1lbnUxIGxpLnNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cblxuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuXG59XG4uc2VsZWN0ZWR7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG5cbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbn1cbmEge1xuICBjb2xvcjogIzFBMjMzNDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4ubWVudTEgbGkuc2VsZWN0ZWQ+YSB7XG5cbiAgY29sb3I6ICMwMDk3Rjk7XG59XG5cbi5kaXNwbGF5IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uYm90dG9tIHtcbiAgcGFkZGluZzogMSU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB3aWR0aDogY2FsYygxMDAlIC0gMTUlKTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNFQUVBRUE7XG4gIGJveC1zaGFkb3c6IDRweCAwcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG59XG5cbi5tcjEwIHtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xufVxuXG4uc2V0MSB7XG4gIC8qb3ZlcmZsb3cteTogc2Nyb2xsOyovXG4gIHBhZGRpbmc6MCAxJTtcbiAgbWFyZ2luLWxlZnQ6IDE3LjclO1xufVxuLmhpZGRlbiB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbi5zZXR0aW5nc19sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG4gIG1hcmdpbi1yaWdodDogMzBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcbn1cblxuLmNoZWNrYm94IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW4tY29udGVudCBhdXRvO1xuICBncmlkLWdhcDogMC41ZW07XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgY29sb3I6IHZhcigtLWNvbG9yKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY2hlY2tib3hfX2lucHV0IGlucHV0IHtcbiAgb3BhY2l0eTogMDtcbiAgd2lkdGg6IDBlbTtcbiAgaGVpZ2h0OiAwZW07XG59XG5cbi5jaGVja2JveF9fY29udHJvbCB7XG4gIGRpc3BsYXk6IGlubGluZS1ncmlkO1xuICB3aWR0aDogMC41ZW07XG4gIGhlaWdodDogMC41ZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuMWVtO1xuICBib3JkZXI6IDFweCBzb2xpZCAjQkJCMkIyO1xuICA7XG59XG5cbi5jaGVja2JveF9faW5wdXQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImNoZWNrYm94XCI7XG59XG5cbi5jaGVja2JveF9fY29udHJvbCBzdmcge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogIzEwOUNGMTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMXMgZWFzZS1pbiAyNW1zO1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICBzdHJva2Utd2lkdGg6IDQ7XG4gIHBhZGRpbmc6IDJweDtcbiAgd2lkdGg6IDAuNWVtO1xuICBoZWlnaHQ6IDAuNWVtO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIGxlZnQ7XG59XG5cbi5jaGVja2JveF9faW5wdXQgaW5wdXQ6Y2hlY2tlZCsuY2hlY2tib3hfX2NvbnRyb2wgc3ZnIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cblxuLmNoZWNrYm94X19pbnB1dCBpbnB1dDpjaGVja2VkKy5jaGVja2JveF9fY29udHJvbCB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLmZsZXgxPmRpdjpudGgtY2hpbGQoMikge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmlucHV0IHtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCAjMkQyRDJEO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHdpZHRoOiAzMzZweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuICBwYWRkaW5nLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcblxuICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLmlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG5cbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLmZsZXgxPmRpdjpmaXJzdC1jaGlsZCB7XG4gIHdpZHRoOiA3NXB4O1xufVxuLypleHRyYSBsYXlvdXQqL1xuLypzd2l0Y2gtdGFiKi9cbi5uYXYtaXRlbSAubmF2LWxpbmsge1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogIzQwNTg3NztcbiAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDEzcHhcbn1cblxuLm5hdi1pdGVtIC5uYXYtbGluay5hY3RpdmUge1xuICBmb250LXdlaWdodDogNjAwO1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzEwOUNGMSAhaW1wb3J0YW50O1xuICBjb2xvcjogIzEwOUNGMSAhaW1wb3J0YW50O1xufVxuXG4ubmF2LWxpbmsge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMS41cmVtIDByZW07XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgbWFyZ2luOiAtMXJlbSAyLjVyZW07XG4gIG1hcmdpbi1sZWZ0OiAwcmVtO1xufVxuXG4ubmF2PmxpIHtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuXG4ubmF2LWxpbms6aG92ZXIsXG4ubmF2LWxpbmssXG4ubmF2LWxpbms6Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLm5hdi1saW5rIHtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuXG4ubmF2LWl0ZW0ge1xuICAuYWN0aXZlIHtcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzEwOWNmMSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjMTA5Y2YxICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi5hY3RpdmVTZXNzaW9ue1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICBmb250LXdlaWdodDogNjAwO1xuZm9udC1zaXplOiAxM3B4O1xubGluZS1oZWlnaHQ6IDE4cHg7XG4vKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbmxldHRlci1zcGFjaW5nOiAwLjAxZW07XG5cbmNvbG9yOiAjMDA5N0Y5O1xufVxuLm1haW4tc2hhZG93IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFRkYwRjU7XG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XG59XG4vKndlYiBpbWFnZSovXG4uZmxleDIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4uZmxleDIuaW1nIGltZ3tcbiAgaGVpZ2h0OjE1NHB4O1xuICB3aWR0aDogYXV0bztcbn1cbi5mbGV4Mj5kaXYge1xuICB3aWR0aDogNTAlO1xufVxuLnVwbG9hZC1pbWd7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIGJvcmRlcjogMXB4IGRhc2hlZCAjRTFFMUUxO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBoZWlnaHQ6MTU1cHg7XG4gIHdpZHRoOiAyNzdweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbn1cbi5mbGV4Mi5pbWcgLnVwbG9hZC1pbWcgaW1ne1xuICBoZWlnaHQ6IDgwcHg7XG4gIHdpZHRoOiBhdXRvO1xufVxuLmZsZXgyPmRpdj5kaXYge1xuICBtYXJnaW46IDMwcHggYXV0bztcbiAgd2lkdGg6IDMwMHB4O1xufVxuXG4uZmxleDIgcC5vbmUge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICBjb2xvcjogIzFBMjMzNDtcbn1cblxuLmZsZXgyIHAudHdvIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBsaW5lLWhlaWdodDogMTRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBjb2xvcjogIzYzNjM2MztcblxufVxuXG4uZmxleDIgcC50aHJlZSB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG5cbiAgY29sb3I6ICM2MzYzNjM7XG59XG5cbi5mbGV4MiBwLnNlbGVjdGVkIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cblxuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuXG4gIGNvbG9yOiAjMTA5Q0YxO1xuXG59XG5cbi5mbGV4MiBpbWcge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qU3RhdGljIFBhZ2UgKE1vcmUpKi9cbi50aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gIGNvbG9yOiAjMzM0RDZFO1xufVxuXG4udGFibGVfaGVhZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQ6ICNFRkYwRjU7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cblxuLnRhYmxlX2hlYWQ+ZGl2IHtcbiAgd2lkdGg6IGNhbGMoKDEwMCUgLSAoKDE2MHB4ICogNCkgLSAxMDBweCkpIC8gMSk7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgY29sb3I6ICMzMjNDNDc7XG59XG5cbi50YWJsZV9oZWFkPmRpdjpudGgtY2hpbGQoMSksXG4udGFibGVfaGVhZD5kaXY6bnRoLWNoaWxkKDMpLFxuLnRhYmxlX2hlYWQ+ZGl2Om50aC1jaGlsZCg0KSxcbi50YWJsZV9oZWFkPmRpdjpudGgtY2hpbGQoNSkge1xuICB3aWR0aDogMTYwcHg7XG59XG5cbi50YWJsZV9ib2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFRkYwRjU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5cblxufVxuXG4udGFibGVfaGVhZD5kaXY6bnRoLWNoaWxkKDYpLFxuLnRhYmxlX2JvZHk+ZGl2Om50aC1jaGlsZCg2KSB7XG4gIHdpZHRoOiAxMDBweDtcbn1cbi5tb2RhbC1oZWFkZXIgaDR7XG4gIG1hcmdpbjogMDtcbiBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4udGFibGVfYm9keT5kaXYge1xuICB3aWR0aDogY2FsYygoMTAwJSAtICgoMTYwcHggKiA0KSAtIDEwMHB4KSkgLyAxKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiAjMzIzQzQ3O1xufVxuXG4udGFibGVfYm9keT5kaXY6bnRoLWNoaWxkKDEpLFxuLnRhYmxlX2JvZHk+ZGl2Om50aC1jaGlsZCgzKSxcbi50YWJsZV9ib2R5PmRpdjpudGgtY2hpbGQoNCksXG4udGFibGVfYm9keT5kaXY6bnRoLWNoaWxkKDUpIHtcbiAgd2lkdGg6IDE2MHB4O1xuXG59XG5cbi50YWJsZV9ib2R5IGltZyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm1vZGFsLXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgY29sb3I6ICMzMzRENkU7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLm1vZGFsLmluIC5tb2RhbC1kaWFsb2cge1xuICBtYXJnaW46IDBweCBhdXRvO1xuICBtYXJnaW4tdG9wOiA2MHB4O1xufVxuXG4ubW9kYWwgLmxhYmVsX3Age1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICBjb2xvcjogIzMzNEQ2RTtcbiAgbWFyZ2luOjA7XG59XG5cbi5tb2RhbCAubGFiZWxfcD5zcGFuLFxuLm1vZGFsIC5zaXplPnNwYW4ge1xuICBjb2xvcjogI0ZFMEEyNztcbn1cblxuLm1vZGFsIC5pbnB1dCB7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNDNENBQ0U7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gIGNvbG9yOiAjMzIzQzQ3O1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbn1cblxuLm1vZGFsIC5pbnB1dDo6cGxhY2Vob2xkZXIge1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICBjb2xvcjogIzMyM0M0NztcblxufVxuXG4ubW9kYWwgdGV4dGFyZWEge1xuICBoZWlnaHQ6IDU1cHg7XG4gIHBhZGRpbmc6IDEwcHggMHB4O1xufVxuXG4ubW9kYWwgLmRpc3BsYXkgc2VsZWN0IHtcbiAgd2lkdGg6IDE2OHB4O1xufVxuXG4uY2VudGVyIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRvcDIzIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDVweDtcbn1cblxuLnNpemUge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICBjb2xvcjogIzIxMUYyNztcbiAgbWFyZ2luLWJvdHRvbTo1cHg7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAubW9kYWwtZGlhbG9nIHtcbiAgICB3aWR0aDogNDAwcHg7XG5cbiAgfVxufVxuXG4ubW9kYWwtZGlhbG9nIHtcbiAgd2lkdGg6IDQwMHB4O1xuXG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAjbXlNb2RhbF9mYXEgLm1vZGFsLWRpYWxvZyB7XG4gICAgd2lkdGg6IDM0MHB4O1xuICB9XG59XG5cbiNteU1vZGFsX2ZhcSAubW9kYWwtZGlhbG9nIHtcbiAgd2lkdGg6IDM0MHB4O1xuXG59XG5cbi5maWxlX25hbWUge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuICBtYXJnaW46IDEwcHggMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIGNvbG9yOiAjMjExRjI3O1xufVxuLm1iMTZ7XG4gIG1hcmdpbi1ib3R0b206IDZweDtcbn1cbi5waWMge1xuICBib3JkZXI6IDAuNXB4IGRhc2hlZCAjNUE1QTVBO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6NXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucGljPmltZ3tcbiAgaGVpZ2h0OjYwcHg7XG4gIHdpZHRoOiBhdXRvO1xufVxuLmltZ19zbGlkZXIgLnRhYmxlX2JvZHk+ZGl2Om50aC1jaGlsZCgxKSxcbi5pbWdfc2xpZGVyIC50YWJsZV9oZWFkPmRpdjpudGgtY2hpbGQoMSkge1xuICB3aWR0aDogMTYwcHg7XG59XG5cbi5pbWdfc2xpZGVyIC50YWJsZV9oZWFkPmRpdjpudGgtY2hpbGQoNCksXG4uaW1nX3NsaWRlciAudGFibGVfYm9keT5kaXY6bnRoLWNoaWxkKDQpIHtcbiAgd2lkdGg6IDkwcHg7XG59XG5cbi5pbWdfc2xpZGVyIC50YWJsZV9oZWFkPmRpdixcbi5pbWdfc2xpZGVyIC50YWJsZV9ib2R5PmRpdiB7XG4gIHdpZHRoOiBjYWxjKCgxMDAlIC0gKDE2MHB4ICsgOTBweCkpIC8gMik7XG59XG5cbi5wb3NpdGlvbl9ib3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNXB4O1xufVxuXG4ud2hpdGVfYm94IHtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgYm94LXNoYWRvdzogMHB4IDEwcHggMTVweCByZ2JhKDI2LCAzNSwgNTIsIDAuMDUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAxOHB4IDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxLjI1JTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLndoaXRlX2JveD5kaXY6Zmlyc3QtY2hpbGQge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLndoaXRlX2JveD5kaXY6Zmlyc3QtY2hpbGQ+aW1nIHtcbiAgd2lkdGg6IDM5cHg7XG4gIGhlaWdodDogMzJweDtcbn1cblxuLndoaXRlX2JveD5kaXY6bGFzdC1jaGlsZCB7XG4gIHdpZHRoOiA5MCU7XG59XG5cbi53aGl0ZV9ib3ggcCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gIGNvbG9yOiAjMUEyMzM0O1xufVxuXG4ud2hpdGVfYm94IGlucHV0IHtcbiAgYm9yZGVyOiBub25lO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFNkU2RTY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gIGNvbG9yOiAjMUEyMzM0O1xuXG59XG5cbi53aGl0ZV9ib3ggaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgY29sb3I6ICM4MTkxQUU7XG5cbn1cblxuLndoaXRlIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDEwcHg7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAzMSUpO1xuICBwYWRkaW5nLXJpZ2h0OiAwLjc1JTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLndoaXRlPmRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG5cbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ud2hpdGUyIHtcblxuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4ud2hpdGUyPmRpdjpmaXJzdC1jaGlsZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxufVxuXG4ud2hpdGUyPmRpdjpmaXJzdC1jaGlsZD5kaXYge1xuICB3aWR0aDogMzIlO1xufVxuXG4ud2hpdGUyIGxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBsaW5lLWhlaWdodDogMTVweDtcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cbiAgZGlzcGxheTogYmxvY2s7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGNvbG9yOiAjMzIzQzQ3O1xuXG59XG5cbi53aGl0ZTIgaW5wdXQsXG4ud2hpdGUyIHNlbGVjdCB7XG5cbiAgYmFja2dyb3VuZDogI0Y1RjVGNTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICBmb250LXNpemU6IDExcHg7XG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgY29sb3I6ICMzMjNDNDc7XG59XG5cbi53aGl0ZTIgaW5wdXQge1xuICB3aWR0aDogNzIlO1xufVxuLndoaXRlMiBpbnB1dDpudGgtY2hpbGQoMikge1xuICB3aWR0aDogMTAwJTtcbn1cbi53aGl0ZTIgc2VsZWN0IHtcbiAgd2lkdGg6IDIxJTtcbn1cblxuLndoaXRlMiBpbnB1dDo6cGxhY2Vob2xkZXIsXG4ud2hpdGUyIHRleHRhcmVhOjpwbGFjZWhvbGRlciB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG5cbiAgY29sb3I6ICM3Mjc2Nzk7XG5cbn1cblxuLndoaXRlMiB0ZXh0YXJlYSB7XG4gIGJhY2tncm91bmQ6ICNGNUY1RjU7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBsaW5lLWhlaWdodDogMTVweDtcbiAgaGVpZ2h0OiA5MHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGNvbG9yOiAjMzIzQzQ3O1xuICB3aWR0aDogNjUlO1xufVxuXG4ucGFnZS1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogI0Y1RjVGNTtcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDYwcHgpO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmctdG9wOiAxNnB4O1xufVxuXG4uZmxleF93aGl0ZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMSUgMS43NSU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbi53aGl0ZTMge1xuICBtYXJnaW4tbGVmdDogMSU7XG4gIHBhZGRpbmc6IDElO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4ud2hpdGUzIHAge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuXG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG5cbiAgY29sb3I6ICMzMjNDNDc7XG5cbn1cblxuc3Bhbi5jb2xvciB7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTA5Q0YxO1xufVxuc3Bhbi5jb2xvcjEge1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcbiAgYm9yZGVyOnNvbGlkIDFweCByZ2IoNjcsIDE0MywgMjA2KTtcbn1cbi5mbGV4X3doaXRlPmRpdjpmaXJzdC1jaGlsZD5kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmZsZXhfd2hpdGU+ZGl2OmZpcnN0LWNoaWxkIHAge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLmZsZXhfd2hpdGU+ZGl2Om50aC1jaGlsZCgyKSB7XG5cbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsaW5lLWhlaWdodDogNDFweDtcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgY29sb3I6ICM4Njg1OEI7XG4gIGRpc3BsYXk6IGZsZXg7XG5cbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmZsZXhfd2hpdGU+ZGl2Om50aC1jaGlsZCgzKSB7XG4gIGRpc3BsYXk6IGZsZXg7XG5cbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQ6ICNGNUY1RjU7XG59XG5cbi8qIGZhcSovXG4uZmFxIC50YWJsZV9ib2R5PmRpdjpudGgtY2hpbGQoMSksXG4uZmFxIC50YWJsZV9oZWFkPmRpdjpudGgtY2hpbGQoMSkge1xuICB3aWR0aDogMTYwcHg7XG59XG5cbi5mYXEgLnRhYmxlX2hlYWQ+ZGl2Om50aC1jaGlsZCg0KSxcbi5mYXEgLnRhYmxlX2JvZHk+ZGl2Om50aC1jaGlsZCg0KSB7XG4gIHdpZHRoOiA5MHB4O1xufVxuXG4uZmFxIC50YWJsZV9oZWFkPmRpdjpudGgtY2hpbGQoMyksXG4uZmFxIC50YWJsZV9ib2R5PmRpdjpudGgtY2hpbGQoMykge1xuICB3aWR0aDogMTUwcHg7XG59XG5cbi5mYXEgLnRhYmxlX2hlYWQ+ZGl2LFxuLmZhcSAudGFibGVfYm9keT5kaXYge1xuICB3aWR0aDogY2FsYygoMTAwJSAtICgxNjBweCArIDI0MHB4KSkgLyAxKTtcbn1cblxuLmZhcV9zZWxlY3Qge1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICBib3gtc2hhZG93OiAwcHggNHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHdpZHRoOiAxMDNweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcblxuICBjb2xvcjogIzMzNEQ2RTtcbn1cblxuc3Bhbi5saW5lIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjQzRDNEM0O1xuICBoZWlnaHQ6IDMycHg7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4wMik7XG59XG5cbi8qcWEqL1xuLnFhIC50YWJsZV9ib2R5PmRpdjpudGgtY2hpbGQoMSksXG4ucWEgLnRhYmxlX2hlYWQ+ZGl2Om50aC1jaGlsZCgxKSB7XG4gIHdpZHRoOiA5MHB4O1xufVxuXG4ucWEgLnRhYmxlX2hlYWQ+ZGl2Omxhc3QtY2hpbGQsXG4ucWEgLnRhYmxlX2JvZHk+ZGl2Omxhc3QtY2hpbGQge1xuICB3aWR0aDogOTBweDtcbn1cblxuLnFhIC50YWJsZV9ib2R5PmRpdjpudGgtY2hpbGQoNSksXG4ucWEgLnRhYmxlX2hlYWQ+ZGl2Om50aC1jaGlsZCg1KSB7XG4gIHdpZHRoOiAxNjBweDtcbn1cblxuLnFhIC50YWJsZV9oZWFkPmRpdixcbi5xYSAudGFibGVfYm9keT5kaXYge1xuICB3aWR0aDogY2FsYygoMTAwJSAtICg5MHB4ICsgMTUwcHgpKSAvIDMpO1xufVxuXG4udGV4dGgge1xuICBoZWlnaHQ6IDcwcHg7XG59XG5cbi5ibHVlX2xhcmdlX2J1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjMTU3RUJFO1xuICBib3JkZXI6IDFweCBzb2xpZCAjRThFOEU4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMDMpO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuXG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gIGhlaWdodDogMzVweDtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG5cbi53aGl0ZV9sYXJnZV9idXR0b24ge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuICB3aWR0aDogMTAwJTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgYm9yZGVyOiBub25lO1xuICBoZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGNvbG9yOiAjNDA2NTg1O1xuXG59XG5cbi8qdGVzdGltb25pYWwqL1xuLmZhLmZhLXN0YXIge1xuICBjb2xvcjogb3JhbmdlO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi50ZXN0aW1vbmlhbCAudGFibGVfYm9keT5kaXY6bnRoLWNoaWxkKDEpLFxuLnRlc3RpbW9uaWFsIC50YWJsZV9oZWFkPmRpdjpudGgtY2hpbGQoMSksXG4udGVzdGltb25pYWwgLnRhYmxlX2hlYWQ+ZGl2Omxhc3QtY2hpbGQsXG4udGVzdGltb25pYWwgLnRhYmxlX2JvZHk+ZGl2Omxhc3QtY2hpbGQge1xuICB3aWR0aDogOTBweDtcbn1cblxuLnRlc3RpbW9uaWFsIC50YWJsZV9oZWFkPmRpdjpudGgtY2hpbGQoNCksXG4udGVzdGltb25pYWwgLnRhYmxlX2JvZHk+ZGl2Om50aC1jaGlsZCg0KSxcbi50ZXN0aW1vbmlhbCAudGFibGVfaGVhZD5kaXY6bnRoLWNoaWxkKDUpLFxuLnRlc3RpbW9uaWFsIC50YWJsZV9ib2R5PmRpdjpudGgtY2hpbGQoNSkge1xuICB3aWR0aDogMTUwcHg7XG59XG5cbi50ZXN0aW1vbmlhbCAudGFibGVfaGVhZD5kaXYsXG4udGVzdGltb25pYWwgLnRhYmxlX2JvZHk+ZGl2IHtcbiAgd2lkdGg6IGNhbGMoKDEwMCUgLSAoMTgwcHggKyAzMDBweCkpIC8gMik7XG59XG5cbi50ZXN0aW1vbmlhbCAuc2Nyb2xsLC5pbWdfc2xpZGVyIC5zY3JvbGwsIC5zY3JvbGwtc3Age1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAoMTkwcHgpKTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbi5zY3JvbGwtc3B7XG4gIGhlaWdodDpjYWxjKDEwMCUgLSAxNnB4KTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBtYXJnaW46IDE2cHggMHB4O1xufVxuXG4vKiB3aWR0aCAqL1xuLnNjcm9sbC1zcDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogM3B4O1xufVxuXG4vKiBUcmFjayAqL1xuLnNjcm9sbC1zcDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kOiAjRUZGMEY1O1xuXG59XG5cbi8qIEhhbmRsZSAqL1xuLnNjcm9sbC1zcDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiAjMDA5N0Y5O1xuXG59XG5cbi5zY3JvbGwtc3Age1xuICBzY3JvbGxiYXItY29sb3I6ICMwMDk3RjkgI0VGRjBGNTtcbiAgc2Nyb2xsYmFyLXdpZHRoOiB0aGluO1xufVxuXG4uc3BhY2Uge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuLndoaXRlX2JveF9sYXJnZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi53aGl0ZV9ib3hfbGFyZ2UgcCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG5cbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcblxuICBjb2xvcjogIzMyM0M0NztcblxufVxuXG4ud2hpdGVfYm94X2xhcmdlIGlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNGNUY1RjU7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjMzIzQzQ3O1xuXG59XG5cbi53aGl0ZV9ib3hfbGFyZ2UgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICM3Mjc2Nzk7XG59XG5cbi53aGl0ZV9ib3hfbGFyZ2UgZGl2IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4vKiBNYW5hZ2UgQ29udGVudCAoT3RoZXIgTGlua3MpKi9cbnAuZWRpdGFibGUge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuXG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gIGhlaWdodDogNDB2aDtcbiAgY29sb3I6ICMxQTIzMzQ7XG59XG5cbnAuZWRpdGFibGUyIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cblxuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICBjb2xvcjogIzFBMjMzNDtcbn1cblxuLndoaXRlX2JveDUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxNnB4IDMwcHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi5lZGl0Ym94IHtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgYm94LXNoYWRvdzogMnB4IDBweCAxMHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBwYWRkaW5nOiAxNHB4IDIwcHg7XG59XG5cbi5lZGl0Ym94PmRpdjpudGgtY2hpbGQoMSkgaW1nIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdpZHRoOiAyMC41cHg7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLmVkaXRib3ggLmxpbmUge1xuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjRjNGM0Y2O1xuICA7XG59XG5cbi5lZGl0Ym94IHNlbGVjdCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMHB4IDE1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmVkaXRib3ggc2VsZWN0IC5zYW5zIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cblxuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuXG4gIGNvbG9yOiAjMUEyMzM0O1xuXG59XG5cbi5lZGl0Ym94IHNlbGVjdC50dCB7XG4gIC8qYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9pbWdfd2ViX2FwcC90dC5zdmcpOyovXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuLmVkaXRib3ggc2VsZWN0LmZvbnQge1xuICAvKmJhY2tncm91bmQ6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvaW1nX3dlYl9hcHAvZm9udC5zdmcpOyovXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuLmVkaXRib3ggZGl2LmZvbnRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmVkaXRib3ggZGl2LmZvbnRzIGltZyB7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLmVkaXRib3ggZGl2LmZvbnRzIGltZy51bmRlcmxpbmUge1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uZWRpdGJveCBkaXYuY29sb3IgaW1nIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW46IDBweCAyMHB4O1xufVxuXG4uZWRpdGJveCBkaXYuY29sb3Ige1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZWRpdGJveCBkaXYuZm9udF9hbGlnbiBpbWcge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi5lZGl0Ym94IGRpdi5mb250X2FsaWduIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5cbi5kcm9wZG93bjExIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5kcm9wZG93bi1jb250ZW50MTEge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHdpZHRoOiAxNzlweDtcbiAgaGVpZ2h0OiAxOTZweDtcbiAgYm90dG9tOiAwcHg7XG4gIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB6LWluZGV4OiAxO1xufVxuXG4uZHJvcGRvd24xMTpob3ZlciAuZHJvcGRvd24tY29udGVudDExIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8qIGFwcCovXG4uZmxleDEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5lbGxpcHNlIHtcbiAgYmFja2dyb3VuZDogI0YwRUZFRjtcbiAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICB3aWR0aDogMTlweDtcbiAgaGVpZ2h0OiAxOXB4O1xuICBwYWRkaW5nOiAwcHggN3B4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0LCBvciAxMDAlICovXG5cbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcblxuICBjb2xvcjogIzAwOTdGOTtcblxufVxuXG4uYmx1ZV9saW5lIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMwMDk3Rjk7XG4gIHdpZHRoOiAyMnB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMHB4IDdweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC00cHg7XG59XG5cbi5ibHVlX3NldHRpbmdzIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgY29sb3I6ICMwMDk3Rjk7XG59XG5cbi5mbGV4MT5kaXY6Zmlyc3QtY2hpbGQsXG4uZmxleDM+ZGl2OmZpcnN0LWNoaWxkLFxuLmZsZXg0PmRpdjpmaXJzdC1jaGlsZCB7XG4gIHdpZHRoOiA3NXB4O1xufVxuXG4uZmxleDMsXG4uZmxleDQge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG5wLnR3bzIge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDExcHg7XG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuXG4gIGNvbG9yOiAjMzM0RDZFO1xuXG59XG5cbnAub25lMiB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG5cbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcblxuICBjb2xvcjogIzMzNEQ2RTtcbn1cblxuLmZsZXgzPmRpdjpudGgtY2hpbGQoMikge1xuICB3aWR0aDogMTUwcHg7XG4gIG1hcmdpbi1yaWdodDogNTBweDtcbn1cblxuLmZsZXgzPmRpdjpudGgtY2hpbGQoMykgc3BhbiB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gIG1hcmdpbjogMHB4IDEwcHg7XG4gIGNvbG9yOiAjMjExRjI3O1xuXG59XG5cbi5mbGV4Mz5kaXY6bnRoLWNoaWxkKDMpIHNwYW4gaW1nOmZpcnN0LW9mLXR5cGUge1xuICBtYXJnaW46IDBweCA1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA4cHg7XG59XG5cbi5mbGV4Mz5kaXY6bnRoLWNoaWxkKDMpIHNwYW4gaW1nOm50aC1vZi10eXBlKDIpIHtcbiAgbWFyZ2luOiAwcHggNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogM3B4O1xufVxuXG4uZmxleDM+ZGl2Om50aC1jaGlsZCgzKSAucGljIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLnNlcHJhdGlvbiB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI5LCAyOSwgMjksIDAuNSk7XG4gIG1hcmdpbjogMjBweCAwcHg7XG4gIG1hcmdpbi1sZWZ0OiA2NXB4O1xufVxuXG4uZmxleDQge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uZmxleDUge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1sZWZ0OiA2MHB4O1xufVxuXG4uZmxleDQ+ZGl2Om50aC1jaGlsZCgyKSBpbWcge1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xuICBsaW5lLWhlaWdodDogMzVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG4uZmxleDQ+ZGl2Om50aC1jaGlsZCgzKSB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG4gIHdpZHRoOiAxODBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcblxuICBjb2xvcjogIzMzNEQ2RTtcbn1cblxuYiB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5mbGV4NCBpbnB1dCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuICBoZWlnaHQ6IDM1cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gIHdpZHRoOiA1NzNweDtcbiAgY29sb3I6ICMzMzRENkU7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuLmZsZXg0IGlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjOGU5MzlhO1xufVxuXG4ud2hpdGUyOSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwcHg7XG4gIGJhY2tncm91bmQ6ICNGNUY1RjU7XG4gIHBhZGRpbmc6IDElO1xuICB3aWR0aDogY2FsYygxMDAlIC0gMzIuNSUpO1xufVxuXG4ud2hpdGUyOT5kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmZsZXg0PmRpdjpudGgtY2hpbGQoMykgc3Bhbj5zcGFuIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBsaW5lLWhlaWdodDogMTVweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcblxuICBjb2xvcjogIzMzNEQ2RTtcbn1cblxuLnNlcF9saW5lIHtcbiAgbWFyZ2luLWxlZnQ6IDY1cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjQzRDNEM0O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuXG4uc3dpdGNoIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAzNXB4O1xuICBoZWlnaHQ6IDEycHg7XG59XG5cbi5zd2l0Y2ggaW5wdXQge1xuICBvcGFjaXR5OiAwO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xufVxuXG4uc2xpZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogI2NjYzsqL1xuICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcbiAgYm9yZGVyOiAxcHggc29saWQgI0JEQkFCQTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSkpO1xuICB0cmFuc2l0aW9uOiAuNHM7XG59XG5cbi5zbGlkZXI6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDE4cHg7XG4gIHdpZHRoOiAxOHB4O1xuICBsZWZ0OiAtNnB4O1xuICBib3R0b206IC00cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNCREJBQkE7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xuICB0cmFuc2l0aW9uOiAuNHM7XG59XG5cbmlucHV0OmNoZWNrZWQrLnNsaWRlciB7XG4gIC8qYmFja2dyb3VuZC1jb2xvcjogIzIxOTZGMzsqL1xufVxuXG5pbnB1dDpmb2N1cysuc2xpZGVyIHtcbiAgLypib3gtc2hhZG93OiAwIDAgMXB4ICMyMTk2RjM7Ki9cbn1cblxuaW5wdXQ6Y2hlY2tlZCsuc2xpZGVyOmJlZm9yZSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxOUM4M0Y7XG59XG5cbmlucHV0OmNoZWNrZWQrLnNsaWRlciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNCREJBQkE7XG59XG5cbi5zbGlkZXIucm91bmQge1xuICBib3JkZXItcmFkaXVzOiAzNHB4O1xufVxuXG4uc2xpZGVyLnJvdW5kOmJlZm9yZSB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLnRvZ2dsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG5cbiAgcGFkZGluZy10b3A6IDMwcHg7XG5cbiAgd2lkdGg6MTYwcHg7XG59XG5cbi5vZmYge1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC00cHg7XG4gIG1hcmdpbjogMHB4IDEwcHg7XG59XG5cbi5vbiB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG4gIG1hcmdpbjogMHB4IDEwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtNHB4O1xuICBjb2xvcjogIzE5QzgzRjtcbn1cblxuLmJvbGRfc2V0dGluZ3Mge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gIGNvbG9yOiAjMzIzQzQ3O1xufVxuXG4uYmxhY2tfc2V0dGluZ3Mge1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuXG4gIGNvbG9yOiAjMzIzQzQ3O1xufVxuXG4uc3BhY2UxNiB7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG5cbi5pbnB1dDEge1xuIFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG4gIHdpZHRoOiA1NzNweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICBjb2xvcjogIzMzNEQ2RVxufVxuXG4udzEzNSB7XG4gIHdpZHRoOiAyMjVweFxufVxuIiwiXG5AaW1wb3J0IHVybCgnLi4vd2Vic2l0ZS1jb25maWd1cmF0aW9uLmNvbXBvbmVudC5zY3NzJyk7XG4ucHJvZHVjdC13cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIFxuICAucm93e1xuICAgIG1hcmdpbjogMDtcbiAgfVxufVxuLnRlc3RpbW9uaWFsIC5zY3JvbGwsLmltZ19zbGlkZXIgLnNjcm9sbCwgLnNjcm9sbC1zcCB7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtICgyMzBweCkpO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/components/website-configuration/static-pages/static-pages.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/website-configuration/static-pages/static-pages.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: StaticPagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticPagesComponent", function() { return StaticPagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/authenticator.service */ "./src/app/services/authenticator.service.ts");
/* harmony import */ var _services_message_show_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/message-show.service */ "./src/app/services/message-show.service.ts");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/products.service */ "./src/app/services/products.service.ts");
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





let StaticPagesComponent = /** @class */ (() => {
    let StaticPagesComponent = class StaticPagesComponent {
        constructor(httpService, auth, router, productService, msgService) {
            this.httpService = httpService;
            this.auth = auth;
            this.router = router;
            this.productService = productService;
            this.msgService = msgService;
            this.activeSession = '';
            this.sizeArr = [25, 50, 100, 150, 200, 500, 1000];
            this.pageIndex = 1;
            this.totalRecords = 0;
            this.displayBatchSize = 25;
            this.staticPageData = [];
            this.staticPageDataSouece = [];
            this.selectedPageId = '';
            this.pageModel = {
                page_route: '',
                page_status: '',
                page_title: '',
                in_navbar: false,
                page_data: '',
                image: ''
            };
            this.statusData = [
                {
                    Title: 'DRAFT'
                },
                {
                    Title: 'PUBLISHED'
                }
            ];
            this.ImgData = [];
        }
        ngOnInit() {
            if (this.selectedPageId) {
                this.getPageDataById();
            }
            this.getStaticPageData();
        }
        getPageDataById() {
            this.auth.showLoader();
            this.productService.getMethod('/api/v2/website/page/' + this.selectedPageId, null).subscribe((res) => {
                this.auth.hideLoader();
                this.pageModel = res.result;
                //this.fetchTableDataByPage(this.pageIndex);
            }, err => {
                this.auth.hideLoader();
            });
        }
        getStaticPageData() {
            this.auth.showLoader();
            this.httpService.getMethod('/api/v2/website/page/institute/' + sessionStorage.getItem('institute_id'), null).subscribe((res) => {
                this.auth.hideLoader();
                this.staticPageDataSouece = res.result;
                this.totalRecords = this.staticPageDataSouece.length;
                this.staticPageData = this.getDataFromDataSource(0);
                if (this.staticPageDataSouece && this.staticPageDataSouece.length) {
                    this.staticPageDataSouece.forEach(element => {
                        if (element.page_status != null && element.page_status != '') {
                            element.page_status = element.page_status.charAt(0).toUpperCase() + element.page_status.substr(1).toLowerCase();
                            element.in_navbar = (element.in_navbar) ? 'Yes' : 'No';
                        }
                    });
                }
                //this.fetchTableDataByPage(this.pageIndex);
            }, err => {
                this.auth.hideLoader();
            });
        }
        // pagination functions 
        fetchTableDataByPage(index) {
            this.pageIndex = index;
            let startindex = this.displayBatchSize * (index - 1);
            this.staticPageData = this.getDataFromDataSource(startindex);
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
        getDataFromDataSource(startindex) {
            let t = this.staticPageDataSouece.slice(startindex, startindex + this.displayBatchSize);
            return t;
        }
        updateTableBatchSize(event) {
            this.pageIndex = 1;
            this.displayBatchSize = event;
            this.fetchTableDataByPage(this.pageIndex);
        }
        editRow(object) {
            $('#myModal').modal('show');
            this.selectedPageId = true;
            this.pageModel.id = object.id;
            this.pageModel.page_status = object.page_status;
            console.log(this.pageModel.page_status);
            this.pageModel.page_route = object.page_route;
            this.pageModel.page_title = object.page_title;
            this.pageModel.in_navbar = object.in_navbar;
            this.pageModel.page_data = object.page_data;
            this.pageModel.banner_image_url = object.banner_image_url;
            console.log(object);
            //this.router.navigate(['view/website-configuration/static-pages/edit/' + object.data.id])
        }
        deleteRow(obj) {
            confirm("Do you want to delete?");
            this.auth.showLoader();
            this.httpService.deleteFile('/prod/api/v2/website/page/' + obj.id).subscribe((res) => {
                this.auth.hideLoader();
                this.msgService.showErrorMessage('success', '', 'Page Deleted Successfully');
                this.getStaticPageData();
            }, err => {
                this.auth.hideLoader();
            });
        }
        cancel() {
            // this.router.navigate(['view/website-configuration/static-pages/list'])
            this.pageModel = {
                page_route: '',
                page_status: '',
                page_title: '',
                in_navbar: false,
                page_data: '',
                image: ''
            };
        }
        saveData() {
            let file = document.getElementById('uploadFileControl').files[0];
            // if (this.checkValidation(file)) {
            if (this.pageModel.page_title != '') {
                if (this.pageModel.page_route != '') {
                    // console.log(this.material_dataFlag);
                    const formData = new FormData();
                    let data = {
                        institute_id: sessionStorage.getItem('institute_id'),
                        page_route: this.pageModel.page_route,
                        page_status: this.pageModel.page_status,
                        page_title: this.pageModel.page_title,
                        in_navbar: this.pageModel.in_navbar,
                        page_data: this.pageModel.page_data,
                        id: this.pageModel.id
                    };
                    data.page_status = (data.page_status == '') ? 'DRAFT' : data.page_status;
                    if (this.selectedPageId) {
                        // data.id = this.selectedPageId;
                        data.banner_image_url = this.pageModel.banner_image_url;
                    }
                    formData.append('data', JSON.stringify(data));
                    if (file) {
                        formData.append('file', file);
                    }
                    let base = this.auth.getBaseUrl();
                    let urlPostXlsDocument = this.selectedPageId ? base + "/prod/api/v2/website/page/update" : base + "/prod/api/v2/website/page/create";
                    let newxhr = new XMLHttpRequest();
                    let auths = {
                        userid: sessionStorage.getItem('userid'),
                        userType: sessionStorage.getItem('userType'),
                        password: sessionStorage.getItem('password'),
                        institution_id: sessionStorage.getItem('institute_id'),
                    };
                    let Authorization = btoa(auths.userid + "|" + auths.userType + ":" + auths.password + ":" + auths.institution_id);
                    this.selectedPageId ? newxhr.open("PUT", urlPostXlsDocument, true) : newxhr.open("POST", urlPostXlsDocument, true);
                    newxhr.setRequestHeader("Authorization", Authorization);
                    newxhr.setRequestHeader("x-proc-authorization", Authorization);
                    newxhr.setRequestHeader("x-prod-inst-id", sessionStorage.getItem('institute_id'));
                    newxhr.setRequestHeader("x-prod-user-id", sessionStorage.getItem('userid'));
                    newxhr.setRequestHeader("enctype", "multipart/form-data;");
                    newxhr.setRequestHeader("Accept", "application/json, text/javascript");
                    newxhr.setRequestHeader("Access-Control-Allow-Origin", "*");
                    if (!this.auth.isRippleLoad.getValue()) {
                        this.auth.showLoader();
                        newxhr.onreadystatechange = () => {
                            this.auth.hideLoader();
                            if (newxhr.readyState == 4) {
                                if (newxhr.status >= 200 && newxhr.status < 300) {
                                    // this.clearuploadObject();
                                    // this.refreshList();
                                    let msg = this.selectedPageId ? 'Page Updated successfully' : 'Page Added Successfully';
                                    this.msgService.showErrorMessage(this.msgService.toastTypes.success, '', msg);
                                    this.cancel();
                                    this.getStaticPageData();
                                    $('#myModal').modal('hide');
                                }
                                else {
                                    this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', JSON.parse(newxhr.response).message);
                                }
                            }
                        };
                        newxhr.send(formData);
                    }
                }
                else {
                    this.msgService.showErrorMessage('error', '', 'Please enter page route');
                }
            }
            else {
                this.msgService.showErrorMessage('error', '', 'Please enter Title');
            }
            // }
        }
        clearFile() {
            this.pageModel.banner_image_url = '';
        }
        displayBrowe() {
            document.getElementById('uploadFileControl').click();
        }
    };
    StaticPagesComponent.ctorParameters = () => [
        { type: _services_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] },
        { type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticatorService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _services_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] },
        { type: _services_message_show_service__WEBPACK_IMPORTED_MODULE_3__["MessageShowService"] }
    ];
    StaticPagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-static-pages',
            template: __importDefault(__webpack_require__(/*! raw-loader!./static-pages.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/website-configuration/static-pages/static-pages.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./static-pages.component.scss */ "./src/app/components/website-configuration/static-pages/static-pages.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_services_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"],
            _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticatorService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"],
            _services_message_show_service__WEBPACK_IMPORTED_MODULE_3__["MessageShowService"]])
    ], StaticPagesComponent);
    return StaticPagesComponent;
})();



/***/ }),

/***/ "./src/app/components/website-configuration/static-pages/static-pages.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/website-configuration/static-pages/static-pages.module.ts ***!
  \**************************************************************************************/
/*! exports provided: StaticPagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticPagesModule", function() { return StaticPagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _static_pages_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./static-pages-routing.module */ "./src/app/components/website-configuration/static-pages/static-pages-routing.module.ts");
/* harmony import */ var _static_pages_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./static-pages.component */ "./src/app/components/website-configuration/static-pages/static-pages.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list/list.component */ "./src/app/components/website-configuration/static-pages/list/list.component.ts");
/* harmony import */ var _add_edit_add_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-edit/add-edit.component */ "./src/app/components/website-configuration/static-pages/add-edit/add-edit.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/components/shared/shared.module.ts");
/* harmony import */ var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/authenticator.service */ "./src/app/services/authenticator.service.ts");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tinymce/tinymce-angular */ "./node_modules/@tinymce/tinymce-angular/__ivy_ngcc__/fesm2015/tinymce-tinymce-angular.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










let StaticPagesModule = /** @class */ (() => {
    let StaticPagesModule = class StaticPagesModule {
    };
    StaticPagesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_static_pages_component__WEBPACK_IMPORTED_MODULE_3__["StaticPagesComponent"], _list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"], _add_edit_add_edit_component__WEBPACK_IMPORTED_MODULE_5__["AddEditComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _static_pages_routing_module__WEBPACK_IMPORTED_MODULE_2__["StaticPagesRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_9__["EditorModule"]
            ],
            providers: [
                _services_products_service__WEBPACK_IMPORTED_MODULE_8__["ProductService"],
                _services_authenticator_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticatorService"]
            ]
        })
    ], StaticPagesModule);
    return StaticPagesModule;
})();



/***/ })

}]);
//# sourceMappingURL=website-configuration-static-pages-static-pages-module-es2015.js.map