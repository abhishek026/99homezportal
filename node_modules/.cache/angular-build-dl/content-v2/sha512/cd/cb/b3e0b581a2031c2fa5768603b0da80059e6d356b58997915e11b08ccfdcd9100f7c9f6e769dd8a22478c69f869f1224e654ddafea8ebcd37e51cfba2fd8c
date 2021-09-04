(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-inventory-module-inventory-module-module"], {
    /***/
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/clipboard.js":
    /*!**********************************************************************!*\
      !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/clipboard.js ***!
      \**********************************************************************/

    /*! exports provided: CKD_COPY_TO_CLIPBOARD_CONFIG, CdkCopyToClipboard, Clipboard, ClipboardModule, PendingCopy */

    /***/
    function node_modulesAngularCdk__ivy_ngcc__Fesm2015ClipboardJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CKD_COPY_TO_CLIPBOARD_CONFIG", function () {
        return CKD_COPY_TO_CLIPBOARD_CONFIG;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CdkCopyToClipboard", function () {
        return CdkCopyToClipboard;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Clipboard", function () {
        return Clipboard;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClipboardModule", function () {
        return ClipboardModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PendingCopy", function () {
        return PendingCopy;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * A pending copy-to-clipboard operation.
       *
       * The implementation of copying text to the clipboard modifies the DOM and
       * forces a relayout. This relayout can take too long if the string is large,
       * causing the execCommand('copy') to happen too long after the user clicked.
       * This results in the browser refusing to copy. This object lets the
       * relayout happen in a separate tick from copying by providing a copy function
       * that can be called later.
       *
       * Destroy must be called when no longer in use, regardless of whether `copy` is
       * called.
       */


      var PendingCopy = /*#__PURE__*/function () {
        function PendingCopy(text, _document) {
          _classCallCheck(this, PendingCopy);

          this._document = _document;

          var textarea = this._textarea = this._document.createElement('textarea');

          var styles = textarea.style; // Hide the element for display and accessibility. Set an
          // absolute position so the page layout isn't affected.

          styles.opacity = '0';
          styles.position = 'absolute';
          styles.left = styles.top = '-999em';
          textarea.setAttribute('aria-hidden', 'true');
          textarea.value = text;

          this._document.body.appendChild(textarea);
        }
        /** Finishes copying the text. */


        _createClass(PendingCopy, [{
          key: "copy",
          value: function copy() {
            var textarea = this._textarea;
            var successful = false;

            try {
              // Older browsers could throw if copy is not supported.
              if (textarea) {
                var currentFocus = this._document.activeElement;
                textarea.select();
                textarea.setSelectionRange(0, textarea.value.length);
                successful = this._document.execCommand('copy');

                if (currentFocus) {
                  currentFocus.focus();
                }
              }
            } catch (_a) {// Discard error.
              // Initial setting of {@code successful} will represent failure here.
            }

            return successful;
          }
          /** Cleans up DOM changes used to perform the copy operation. */

        }, {
          key: "destroy",
          value: function destroy() {
            var textarea = this._textarea;

            if (textarea) {
              if (textarea.parentNode) {
                textarea.parentNode.removeChild(textarea);
              }

              this._textarea = undefined;
            }
          }
        }]);

        return PendingCopy;
      }();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * A service for copying text to the clipboard.
       */


      var Clipboard =
      /** @class */
      function () {
        var Clipboard = /*#__PURE__*/function () {
          function Clipboard(document) {
            _classCallCheck(this, Clipboard);

            this._document = document;
          }
          /**
           * Copies the provided text into the user's clipboard.
           *
           * @param text The string to copy.
           * @returns Whether the operation was successful.
           */


          _createClass(Clipboard, [{
            key: "copy",
            value: function copy(text) {
              var pendingCopy = this.beginCopy(text);
              var successful = pendingCopy.copy();
              pendingCopy.destroy();
              return successful;
            }
            /**
             * Prepares a string to be copied later. This is useful for large strings
             * which take too long to successfully render and be copied in the same tick.
             *
             * The caller must call `destroy` on the returned `PendingCopy`.
             *
             * @param text The string to copy.
             * @returns the pending copy operation.
             */

          }, {
            key: "beginCopy",
            value: function beginCopy(text) {
              return new PendingCopy(text, this._document);
            }
          }]);

          return Clipboard;
        }();

        Clipboard.ɵfac = function Clipboard_Factory(t) {
          return new (t || Clipboard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]));
        };

        Clipboard.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
          factory: function Clipboard_Factory() {
            return new Clipboard(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]));
          },
          token: Clipboard,
          providedIn: "root"
        });

        Clipboard.ctorParameters = function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
            }]
          }];
        };
        /*@__PURE__*/


        (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Clipboard, [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
            args: [{
              providedIn: 'root'
            }]
          }], function () {
            return [{
              type: undefined,
              decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
              }]
            }];
          }, null);
        })();

        return Clipboard;
      }();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Injection token that can be used to provide the default options to `CdkCopyToClipboard`. */


      var CKD_COPY_TO_CLIPBOARD_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('CKD_COPY_TO_CLIPBOARD_CONFIG');
      /**
       * Provides behavior for a button that when clicked copies content into user's
       * clipboard.
       */

      var CdkCopyToClipboard =
      /** @class */
      function () {
        var CdkCopyToClipboard = /*#__PURE__*/function () {
          function CdkCopyToClipboard(_clipboard, _ngZone, config) {
            _classCallCheck(this, CdkCopyToClipboard);

            this._clipboard = _clipboard;
            this._ngZone = _ngZone;
            /** Content to be copied. */

            this.text = '';
            /**
             * How many times to attempt to copy the text. This may be necessary for longer text, because
             * the browser needs time to fill an intermediate textarea element and copy the content.
             */

            this.attempts = 1;
            /**
             * Emits when some text is copied to the clipboard. The
             * emitted value indicates whether copying was successful.
             */

            this.copied = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            /** Copies that are currently being attempted. */

            this._pending = new Set();

            if (config && config.attempts != null) {
              this.attempts = config.attempts;
            }
          }
          /** Copies the current text to the clipboard. */


          _createClass(CdkCopyToClipboard, [{
            key: "copy",
            value: function copy() {
              var _this = this;

              var attempts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.attempts;

              if (attempts > 1) {
                var remainingAttempts = attempts;

                var pending = this._clipboard.beginCopy(this.text);

                this._pending.add(pending);

                var attempt = function attempt() {
                  var successful = pending.copy();

                  if (!successful && --remainingAttempts && !_this._destroyed) {
                    // We use 1 for the timeout since it's more predictable when flushing in unit tests.
                    _this._currentTimeout = _this._ngZone.runOutsideAngular(function () {
                      return setTimeout(attempt, 1);
                    });
                  } else {
                    _this._currentTimeout = null;

                    _this._pending["delete"](pending);

                    pending.destroy();

                    _this.copied.emit(successful);
                  }
                };

                attempt();
              } else {
                this.copied.emit(this._clipboard.copy(this.text));
              }
            }
          }, {
            key: "ngOnDestroy",
            value: function ngOnDestroy() {
              if (this._currentTimeout) {
                clearTimeout(this._currentTimeout);
              }

              this._pending.forEach(function (copy) {
                return copy.destroy();
              });

              this._pending.clear();

              this._destroyed = true;
            }
          }]);

          return CdkCopyToClipboard;
        }();

        CdkCopyToClipboard.ɵfac = function CdkCopyToClipboard_Factory(t) {
          return new (t || CdkCopyToClipboard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](Clipboard), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](CKD_COPY_TO_CLIPBOARD_CONFIG, 8));
        };

        CdkCopyToClipboard.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
          type: CdkCopyToClipboard,
          selectors: [["", "cdkCopyToClipboard", ""]],
          hostBindings: function CdkCopyToClipboard_HostBindings(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CdkCopyToClipboard_click_HostBindingHandler() {
                return ctx.copy();
              });
            }
          },
          inputs: {
            text: ["cdkCopyToClipboard", "text"],
            attempts: ["cdkCopyToClipboardAttempts", "attempts"]
          },
          outputs: {
            copied: "cdkCopyToClipboardCopied"
          }
        });

        CdkCopyToClipboard.ctorParameters = function () {
          return [{
            type: Clipboard
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [CKD_COPY_TO_CLIPBOARD_CONFIG]
            }]
          }];
        };

        CdkCopyToClipboard.propDecorators = {
          text: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkCopyToClipboard']
          }],
          attempts: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['cdkCopyToClipboardAttempts']
          }],
          copied: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
            args: ['cdkCopyToClipboardCopied']
          }]
        };
        /*@__PURE__*/

        (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkCopyToClipboard, [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
            args: [{
              selector: '[cdkCopyToClipboard]',
              host: {
                '(click)': 'copy()'
              }
            }]
          }], function () {
            return [{
              type: Clipboard
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
            }, {
              type: undefined,
              decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
              }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [CKD_COPY_TO_CLIPBOARD_CONFIG]
              }]
            }];
          }, {
            text: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
              args: ['cdkCopyToClipboard']
            }],
            attempts: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
              args: ['cdkCopyToClipboardAttempts']
            }],
            copied: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
              args: ['cdkCopyToClipboardCopied']
            }]
          });
        })();

        return CdkCopyToClipboard;
      }();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var ClipboardModule =
      /** @class */
      function () {
        var ClipboardModule = function ClipboardModule() {
          _classCallCheck(this, ClipboardModule);
        };

        ClipboardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
          type: ClipboardModule
        });
        ClipboardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
          factory: function ClipboardModule_Factory(t) {
            return new (t || ClipboardModule)();
          }
        });

        (function () {
          (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ClipboardModule, {
            declarations: [CdkCopyToClipboard],
            exports: [CdkCopyToClipboard]
          });
        })();
        /*@__PURE__*/


        (function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ClipboardModule, [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
            args: [{
              declarations: [CdkCopyToClipboard],
              exports: [CdkCopyToClipboard]
            }]
          }], null, null);
        })();

        return ClipboardModule;
      }();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=clipboard.js.map

      /***/

    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/inventory-module/inventory-module.component.html":
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/inventory-module/inventory-module.component.html ***!
      \*******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsInventoryModuleInventoryModuleComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n\n<router-outlet></router-outlet>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/inventory-module/item-cm/item-cm.component.html":
    /*!******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/inventory-module/item-cm/item-cm.component.html ***!
      \******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsInventoryModuleItemCmItemCmComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"page-content\">\n  <div class=\"head_padding\">\n     <div class=\"w98\">\n       <div class=\"display\">\n       <div class=\"page_heading pageheadingspace\">\n         <p>Items</p>\n       </div>\n       <div>\n\n        <button class=\"blue_button\" data-toggle=\"modal\" data-target=\"#addModal\" *ngIf=\"isaddcat\" (click)=\"cancel(false)\" >Add Category</button>\n         <button class=\"blue_button\" data-toggle=\"modal\" data-target=\"#itemModal\"  *ngIf=\"is_add_item\"  (click)=\"cancel(false)\"  >Add Item</button>\n        <!-- Two Diffrent Button On Tab Change -->\n    </div>\n       </div>\n       <!-- Nav tabs -->\n       <ul class=\"nav\">\n        <li class=\"nav-item\" >\n          <a class=\"nav-link\" (click)=\"toggle('onev',false)\"  data-toggle=\"tab\" href=\"#onev\"  [ngClass]=\"(activeSession == 'onev') ? 'active' : ''\">Category</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\"  data-toggle=\"tab\" (click)=\"toggle('twov',true)\" href=\"#twov\" [ngClass]=\"(activeSession == 'twov') ? 'active' : ''\" >Item Management</a>\n        </li>\n       </ul>\n     </div>\n   </div>\n\n\n<!--pagination for category-->\n<div class=\"tab-content\">\n  <div id=\"onev\" class=\"tab-pane active\">\n <!--  one -->\n      <div class=\"w98\">\n          <div class=\"pt15 display\">\n          <div>\n              <input type=\"text\" name=\"search\" [(ngModel)]=\"searchText\" (keyup)=\"searchDatabase()\"\n              class=\"input wid240 mr10 magnifying-glass\" name=\"\" placeholder=\"Search\">\n          </div>\n          <div class=\"right\">\n              <!-- <a href=\"\" class=\"mr10\"><img src=\"../../../assets/img1/copy2.svg\" title=\"Copy\"></a>\n              <a href=\"\" class=\"mr10\"><img src=\"../../../assets/img1/csv.svg\" title=\"CSV\"></a> -->\n              <a (click)=\"downloadPdf()\" class=\"mr10\"><img src=\"../../../assets/img1/pdf.svg\" title=\"PDF Preview\"></a> \n              <a (click)=\"exportToExcel()\" class=\"mr10\"><img src=\"../../../assets/img1/excel.svg\" title=\"Excel Download\"></a>\n         </div>\n          </div>\n           <!--table for item-->\n          <app-basic-table [headers]=\"headerSetting\" [tableSetting]=\"tableSetting\" [displayData]=\"pagedclassRoomData\"\n          [rowColumnSetting]=\"rowColumns\" (editView)='editRow($event)' (deleteView)='showconfirmCat($event)'\n          (viewView)=\"viewRow($event)\">\n      </app-basic-table>\n     </div>\n      <!--pagination for category-->\n      <pagination (goPage)=\"fetchTableDataByPage($event)\" (goNext)=\"fetchNext()\" (goPrev)=\"fetchPrevious()\"\n      [pagesToShow]=\"10\" [page]=\"pageIndex\" [perPage]=\"displayBatchSize\" [count]=\"totalRow\" [sizeArr]=\"sizeArr\"\n      (sizeChange)=\"updateTableBatchSize($event)\">\n    </pagination>\n  \n  </div>\n   <!--Data for item-->\n  <div id=\"twov\" class=\"tab-pane\">\n    <!-- two -->\n    <div class=\"w98\">\n      <div class=\"pt15 display\" style=\"padding-bottom: 15px;\">\n        <div>\n          <input type=\"text\" name=\"search\" [(ngModel)]=\"searchTextforItem\" (keyup)=\"searchDatabaseforItem()\"\n          class=\"input wid240 mr10 magnifying-glass\" name=\"\" placeholder=\"Search\" >\n    </div>\n          <div class=\"right\">\n              <!-- <a href=\"\" class=\"mr10\"><img src=\"../../../assets/img1/copy2.svg\" title=\"Copy\"></a>\n              <a href=\"\" class=\"mr10\"><img src=\"../../../assets/img1/csv.svg\" title=\"CSV\"></a>-->\n              <a (click)=\"downloadPdffoItem()\" class=\"mr10\"><img src=\"../../../assets/img1/pdf.svg\" title=\"PDF Preview\"></a> \n              <a (click)=\"exportToExcelItem()\" class=\"mr10\"><img src=\"../../../assets/img1/excel.svg\" title=\"Excel Download\"></a>\n          </div>\n      </div>\n       <!--table for item-->\n      <div class=\"item_man\">\n          <div class=\"table_heading\">\n            <div (click)=\"sortTable('item_name')\" style=\"padding-left: 20px;\">Item<span class=\"space33\"><img src=\"../../../assets/img1/down1a.svg\"></span> </div>\n            <div (click)=\"sortTable('category_name')\" >Category<span class=\"space33\"><img src=\"../../../assets/img1/down1a.svg\"></span> </div>\n            <div   (click)=\"sortTable('alloted_units')\" style=\"text-align: center;\">Total Units<span class=\"space33\"><img src=\"../../../assets/img1/down1a.svg\"></span> </div>\n            <div  (click)=\"sortTable('available_units')\" style=\"text-align: center;\">Available Units<span class=\"space33\"><img src=\"../../../assets/img1/down1a.svg\"></span> </div>\n            <div style=\"padding-top: 3px;text-align: center;\">\n              Buying Price&nbsp;(&nbsp;<i class=\"fa fa-inr\"></i>&nbsp;)<br><span style=\"font-size:10px;text-align: center;\">(Unit Price)</span>\n            </div>\n            <div style=\"padding-top: 3px;text-align: center;\">Sale Price&nbsp;(&nbsp;<i class=\"fa fa-inr\"></i>&nbsp;)<br><span style=\"font-size:10px;\">(Unit Price)</span></div>\n            <div title=\"Tax on selling price\" style=\"text-align: center;\">Tax (%)</div>\n            <div style=\"padding-top: 3px;text-align: center;\">Low Stock<br>indicator <span style=\"font-size:10px;text-align: center;\">(Unit Price)</span></div>\n            <div style=\"text-align: center;\">Actions</div>\n          </div>\n          <div class=\"table_body\" *ngFor=\"let data of pagedItemData\">\n            <p ></p>\n            <div  style=\"padding-left: 20px;\">\n             {{data.item_name}}\n            </div>\n           <div>\n            {{data.category_name}}\n           </div>\n           <div style=\"text-align: center;\">  {{data.alloted_units}}</div>\n           <div style=\"text-align: center;\" [ngClass]=\"{'lowstock':data.available_units <= data.out_of_stock_indicator_units }\">\n              {{data.available_units}}            <!--<i  class=\"fa  fa-warning\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"Purchase Inventory Name, \n            your current inventory count is going below the set threshold units\"></i>  -->\n           </div>\n           <div style=\"text-align: center;\">{{data.unit_cost}}</div>\n           <div style=\"text-align: center;\">{{data.sale_price}}</div>\n           <div style=\"text-align: center;\">{{data.tax_percent}}</div>\n           <div style=\"text-align: center;\">{{data.out_of_stock_indicator_units}}</div>\n            <div style=\"text-align: center;\">\n              \n              <div class=\"dropdown1\">\n                  <img src=\"../../../assets/img1/menu.svg\" class=\"dot3\" >\n                <div class=\"dropdown-content1\">\n                  <a data-toggle=\"modal\" data-target=\"#itemModal\" (click)=\"editItem(data)\">Edit</a>\n                  <a   (click)=\"showConfirm(data)\">Delete</a>\n                  <a *ngIf=\"data.available_units!=0\" data-toggle=\"modal\" data-target=\"#subbranchModal\"(click)=\"allocateToSubBranch(data)\">Allocate to Sub-branch</a>\n                  <a    (click)=\"showAllocationHistory(data)\">Allocation History</a>\n                  <!-- <a   data-toggle=\"modal\" data-target=\"#manageunitModal\" (click)=\"manageUnit(data)\">Manage Unit</a> -->\n                </div>\n              </div>\n            </div>\n          </div>\n          <section class=\"no-data\" *ngIf=\"pagedItemData.length == 0\">\n            <div class=\"illustration-container\">\n              <img alt=\"illustration\" class=\"illustration-img\" src=\"./assets/images/course_planner/blank-illustration.svg\">\n            </div>\n          </section>\n      </div>\n    </div>\n    <!--pagination for item-->\n    <pagination (goPage)=\"fetchTableDataByPageforItem($event)\" (goNext)=\"fetchNextItem()\" (goPrev)=\"fetchPreviousItem()\"\n    [pagesToShow]=\"10\" [page]=\"pageIndexforItem\" [perPage]=\"displayBatchSize\" [count]=\"totalItemRow\" [sizeArr]=\"sizeArr\"\n    (sizeChange)=\"updateTableBatchSizeForItem($event)\">\n  </pagination>\n  \n </div>\n <!--gfdfdfg-->\n <!-- <h1>hjfghfg</h1> -->\n\n</div>\n\n   \n        <!-- use image only when page is empty,table body class element will not be present -->\n\n</div> \n<!--model for item-->\n<div class=\"modal\" id=\"addModal\" data-backdrop=\"static\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\" >\n        <h4 class=\"modal-title\" *ngIf=\"!isedit\"> Add Category</h4>\n        <h4 class=\"modal-title\" *ngIf=\"isedit\"> Update Category</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\"  (click)=\"cancel(false)\" >&times;</button>\n      </div>\n      <div class=\"modal-body\">\n   <form  #catForm=\"ngForm\" autocomplete=\"off\">\n        <div class=\"pt10\" [class.has-error]=\"category_name.invalid && category_name.touched\">\n          <label class=\"p_title\"> Name<span class=\"text-danger\">*</span></label>\n          <input type=\"text\" class=\"input wid100\" (keyup)=\"maxlenth(category_model.category_name,30)\" id =\"category_name\"\n          name=\"category_name\" placeholder=\"Enter Category Name\"\n          [(ngModel)]=\"category_model.category_name\"\n          #category_name=\"ngModel\" required>\n        </div>\n        <!-- <p class=\"errormsg\"><span  style=\"height:10px;\" class=\"help-block\" *ngIf=\"!category_name.valid && category_name.touched\">\n          Category  name is mandatory\n       </span></p> -->\n        <div class=\"pt10\" >\n          <label class=\"p_title\">Description</label>\n          <textarea class=\"input wid100\" name=\"desc\" id=\"desc\"\n          [(ngModel)]=\"category_model.desc\" (keyup)=\"maxlenth(category_model.desc,70)\" placeholder=\"Enter description\" ></textarea>\n        </div>\n      \n        <div class=\"pt10 display\">\n          <div></div>\n          <div class=\"align\"> \n            <button type=\"button\" class=\"right blue_button cancel\"\n            data-dismiss=\"modal\" (click)=\"cancel(false)\">Cancel</button>\n            <button class=\"right blue_button\" (click)=\"saveCategoryDetails(category_model)\" *ngIf=\"!isedit\">Add Category</button>\n            <button class=\"right blue_button\" (click)=\"updateCategoryDetails(category_model)\" *ngIf=\"isedit\">Update</button></div>\n         </div>\n         </form>\n      </div>        \n    </div>\n  </div>\n</div> \n <!--delete model for category-->\n<div class=\"modal\" id=\"deleteModalCat\" data-backdrop=\"static\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"center\">\n          <span><img src=\"../../../assets/img1/alert.svg\"></span><span class=\"alert\">Alert</span>\n        </div>\n        <div >\n          <p class=\"alert_text\"> Do you want to proceed?</p>\n        </div>\n        <div class=\"pt101 display\">\n          <div>\n            <button class=\"white_button right\" data-dismiss=\"modal\">Cancel</button>\n          </div>\n          <div>\n            <button class=\"blue_button right\"  (click)=\"deleteRow(tempForCat)\">Proceed</button>\n          </div>\n        </div>\n      </div>        \n    </div>\n  </div>\n</div>\n<div class=\"modal\" id=\"deleteModal\" data-backdrop=\"static\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"center\">\n          <span><img src=\"../../../assets/img1/alert.svg\"></span><span class=\"alert\">Alert</span>\n        </div>\n        <div >\n          <p class=\"alert_text\"> Do you want to proceed?</p>\n        </div>\n        <div class=\"pt101 display\">\n          <div>\n            <button class=\"white_button right\" data-dismiss=\"modal\">Cancel</button>\n          </div>\n          <div>\n            <button class=\"blue_button right\" (click)=\"deleteItem(tempObj)\">Delete?</button>\n          </div>\n        </div>\n      </div>        \n    </div>\n  </div>\n</div>\n<div class=\"modal\" id=\"delete1Modal\" data-backdrop=\"static\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"center\">\n          <span><img src=\"../../../assets/img1/alert.svg\"></span><span class=\"alert\">Alert</span>\n        </div>\n        <div >\n          <p class=\"alert_text\">You can't delete this category since the items under this category are allocated</p>\n        </div>\n      </div>        \n    </div>\n  </div>\n</div>\n<div class=\"modal\" id=\"deleteitemModal\" data-backdrop=\"static\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"center\">\n          <span><img src=\"../../../assets/img1/alert.svg\"></span><span class=\"alert\">Alert</span>\n        </div>\n        <div ><p>\n         This items is still available which are not allocated, do you want to proceed ?</p>\n        </div> \n        <div class=\"pt101 display\">\n          <div>\n            <button class=\"white_button right\"  data-dismiss=\"modal\">Cancel</button>\n          </div>\n          <div>\n            <button class=\"blue_button right\" (click)=\"deleteItem(tempObj)\">Proceed</button>\n          </div>\n        </div>\n      </div>        \n    </div>\n  </div>\n</div>\n<div class=\"modal\" id=\"manageunitModal\" data-backdrop=\"static\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\" >Manage Unit</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" (click)=\"cancel()\">&times;</button>\n      </div>\n      <div class=\"modal-body\">\n        <form #history=\"ngForm\">\n        <div class=\"pt10\">\n          <label class=\"p_title\"> Available Unit<span class=\"text-danger\">*</span></label>\n          <input type=\"text\" class=\"input wid100\" [(ngModel)]=\"manageData.available_units\" name=\"available_units\" \n          [disabled]= \"true\" \n          placeholder=\"Available Units*\">\n        </div>\n          <div class=\"pt10\">\n                <!-- <select class=\"select wid100\" name=\"units_added\" [(ngModel)]=\"manageData.units_added\">\n                  <option value=\"\">\n                    Manage Unit*\n                    </option>\n                    <option value=\"\"></option>\n                </select> -->\n                <label class=\"p_title\">Manage Units</label>\n          <input type=\"number\" class=\"input wid100\" name=\"units_added\" \n          [(ngModel)]=\"manageData.units_added\"\n          placeholder=\" Add or Remove Units\" > \n          </div>\n        <div class=\"pt10\">\n          <label class=\"p_title\">Total Units</label>\n          <input type=\"text\" class=\"input wid100\" name=\"alloted_units\" \n          [(ngModel)]=\"manageData.alloted_units\"\n          placeholder=\"Total Unit Units*\"\n          [disabled]=\"true\">\n        </div>\n      \n        <div class=\"pt10 display\">\n          <div></div>\n          <div> \n            <button  class=\"right blue_button cancel\" (click)=\"cancel(false)\" data-dismiss=\"modal\">Cancel</button>\n            <button class=\"right blue_button\" (click)=\"updataeManageUnit(manageData.item_id)\">Update Units</button></div>\n         </div>\n        </form>\n      </div>        \n    </div>\n  </div>\n</div> \n <!--add edit model for item-->\n<div class=\"modal\" id=\"itemModal\" data-backdrop=\"static\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\" *ngIf=\"!isedit\" >Add Item</h4>\n        <h4 class=\"modal-title\" *ngIf=\"isedit\">Update Item</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\"\n        (click)=\"cancel(false)\">&times;</button>\n      </div>\n      <div class=\"modal-body\">\n        <form #itemForm =\"ngForm\" autocomplete=\"off\">\n        <div class=\"flex\">\n          <div class=\"sec1\">\n            <div class=\"pt10\"  [class.has-error]=\"item_name.invalid && item_name.touched\">\n              <label class=\"p_title\"> Item<span class=\"text-danger\">*</span></label>\n             <input type=\"text\" class=\"input wid100\" id=\"item_name\" (keyup)=\"maxlenth(item.item_name,30)\" name=\"item_name\" placeholder=\"Enter Item Name\"  [(ngModel)]=\"item.item_name\"\n                #item_name=\"ngModel\" required>\n            </div>\n            <p class=\"errormsg\"><span  style=\"height:10px;\" class=\"help-block\" *ngIf=\"!item_name.valid && item_name.touched\">\n              Item  name is mandatory\n           </span>\n           \n          </p>\n              <!-- <div class=\"pt10\">\n                <label class=\"p_title\"> Standard</label>\n               <select class=\"select wid100\" name=\"standard_id\" id=\"standard_id\"\n                [(ngModel)]=\"item.standard_id\" (ngModelChange)=\"onMasterCourseSelection($event)\">\n                  <option value=\"\">\n                   Select Standard\n                  </option>\n                  <option *ngFor=\"let opt of masterCourseList\" value=\"{{opt.standard_id}}\">\n                    {{opt.standard_name}} \n                  </option>\n                </select>\n              </div> -->\n             <!-- <p class=\"errormsg\"><span  style=\"height:10px;\" class=\"help-block\">\n             </span></p> -->\n            <!-- <div class=\"pt10\" [class.has-error]=\"alloted_units.invalid && alloted_units.touched\" >\n              <label class=\"p_title\"> Total Units<span class=\"text-danger\">*</span></label>\n           <input type=\"text\" class=\"input wid100\" id=\"alloted_units\" \n                name=\"alloted_units\" placeholder=\"Enter Total Units\"  \n                #alloted_units=\"ngModel\" \n                [(ngModel)]=\"item.alloted_units\" required\n                onkeypress=\" return (event.charCode >= 48 && event.charCode <= 57)\">\n            </div> -->\n            <!-- <p class=\"errormsg\"><span  style=\"height:10px;\" class=\"help-block\" *ngIf=\"!alloted_units.valid && alloted_units.touched\">\n              Total units are mandatory\n           </span></p> -->\n       \n          <div class=\"pt10\" [class.has-error]=\"unit_cost.invalid && unit_cost.touched\" >\n            <label class=\"p_title\"> Buying Price (Unit Price)<span class=\"text-danger\">*</span></label>\n           <input type=\"text\" class=\"input wid100\" id=\"unit_cost\" \n            name=\"unit_cost\" placeholder=\"Enter Buying Price\"  (keyup)=\"maxlenth(item.unit_cost,10)\"\n            #unit_cost=\"ngModel\" \n            [(ngModel)]=\"item.unit_cost\"\n            onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57) ||  \n                event.charCode == 46 || event.charCode == 0 \" required>\n        </div>\n          <p class=\"errormsg\"><span  style=\"height:10px;\" class=\"help-block\" *ngIf=\"!unit_cost.valid && unit_cost.touched\">\n            Buying Price or unit price is mandatory\n         </span></p>\n             <div class=\"pt10\" [class.has-error]=\"tax_percent.invalid && tax_percent.touched\" >\n              <label class=\"p_title\" title=\"Tax on sale price\"> Tax (%)<span class=\"text-danger\">*</span></label>\n             <input type=\"text\"  class=\"input wid100\" id=\"tax_percent\" \n                name=\"tax_percent\" placeholder=\"Enter tax on selling price\"  (keyup)=\"maxlenth(item.tax_percent,10)\"\n                #tax_percent=\"ngModel\" \n                [(ngModel)]=\"item.tax_percent\" onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57) ||  \n                event.charCode == 46 || event.charCode == 0 \" required>\n            </div>\n            <p class=\"errormsg\"><span  style=\"height:10px;\" *ngIf=\"tax_percent.invalid && tax_percent.touched\" class=\"help-block\">Tax is mandatory\n           </span> </p>\n          </div>\n          <div class=\"sec2\">\n            <div class=\"pt10\"  [class.has-error]=\"abc.invalid && abc.touched\">\n              <label class=\"p_title\"> Category<span class=\"text-danger\">*</span></label>\n             <select class=\"select wid100\" name=\"category_id\" id=\"category_id\"\n              [(ngModel)]=\"item.category_id\"  required #abc=\"ngModel\">\n                <option value=\"\">\n                  Select Category\n                </option>\n                <option value=\"{{data.category_id}}\" *ngFor=\"let data of categoryAllData\">\n                  {{data.category_name}}</option>\n              </select>\n            </div>\n            <p class=\"errormsg\"> <span  style=\"height:10px;\"  *ngIf=\"abc.invalid && abc.touched\"class=\"help-block\">\n              Category is mandatory\n             </span></p>\n           <!-- <div class=\"pt10\">\n          \n            <label class=\"p_title\"> Subject</label>\n            <select class=\"select wid100\" name=\"subject_id\" id=\"subject_id\"\n            [(ngModel)]=\"item.subject_id\" >\n              <option value=\"\">\n                Select Subject\n              </option>\n              <option *ngFor=\"let opt of CourseList\" value=\"{{opt.subject_id}}\">\n                {{opt.subject_name}} \n              </option>\n            </select>\n          </div> -->\n          <!-- <p class=\"errormsg\"><span  style=\"height:10px;\" class=\"help-block\">\n            </span></p> -->\n            <div class=\"pt10\" [class.has-error]=\"sale_price.invalid && sale_price.touched\" >\n              <label class=\"p_title\"> Sale Price (Unit Price)<span class=\"text-danger\">*</span></label>\n           <input type=\"text\" class=\"input wid100\" id=\"sale_price\" (keyup)=\"maxlenth(item.sale_price,10)\"\n              name=\"sale_price\" placeholder=\"Enter Sale Price\"  \n              #sale_price=\"ngModel\" \n              [(ngModel)]=\"item.sale_price\"  \n              onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57) ||  \n                event.charCode == 46 || event.charCode == 0 \"\n              required>\n          </div>\n            <p class=\"errormsg\"><span  style=\"height:10px;\" class=\"help-block\" *ngIf=\"!sale_price.valid && sale_price.touched\">\n              Sale Price or unit price is mandatory\n           </span></p>\n            <div class=\"pt10\" [class.has-error]=\"out_of_stock_indicator_units.invalid && out_of_stock_indicator_units.touched\" >\n              <label class=\"p_title\"> Low Stock Indicator<span class=\"text-danger\">*</span></label>\n              <input type=\"text\" class=\"input wid100\" id=\"out_of_stock_indicator_units\" \n              name=\"out_of_stock_indicator_units\" placeholder=\"Enter Low stock indicator\"  (keyup)=\"maxlenth(item.out_of_stock_indicator_units,10)\"\n              #out_of_stock_indicator_units=\"ngModel\" \n              onkeypress=\" return (event.charCode >= 48 && event.charCode <= 57)\"\n              [(ngModel)]=\"item.out_of_stock_indicator_units\" required>\n          </div>\n          <p class=\"errormsg\"><span  style=\"height:10px;\" class=\"help-block\" *ngIf=\"!out_of_stock_indicator_units.valid && out_of_stock_indicator_units.touched\">\n            Low stock indicator  is mandatory\n         </span></p>\n          </div>\n        </div>\n           <div class=\"pt10\">\n            <label class=\"p_title\"> Description</label>\n             <textarea class=\"input wid100\" (keyup)=\"maxlenth(item.desc,70)\" name=\"desc\" id=\"desc\" placeholder=\"Enter Description\" [(ngModel)]=\"item.desc\"></textarea>\n            </div>\n        <!-- </div> -->\n        <!-- <p class=\"errormsg\"><span  style=\"height:10px;\" class=\"help-block\">\n       </span></p> -->\n        <div class=\"pt10 display w98\">\n          <div></div>\n          <div class=\"align\"> \n            <button type=\"button\" class=\"right blue_button cancel\"\n            data-dismiss=\"modal\"  (click)=\"cancel(false)\" >Cancel</button>\n            <button class=\"right blue_button\" (click)=\"saveItemDetails(item)\" *ngIf=\"!isedit\">Add Item</button>\n            <button class=\"right blue_button\" (click)=\"updateItemDetails(item.item_id)\" *ngIf=\"isedit\">Update</button></div>\n         </div>\n        </form>\n      </div>        \n    </div>\n  </div>\n</div>\n<div class=\"modal\" id=\"subbranchModal\" data-backdrop=\"static\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\" >Allocate to Sub-branch</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" (click)=\"cancel()\">&times;</button>\n      </div>\n      <div class=\"modal-body\">\n        <form #allcateForm=\"ngForm\" autocomplete=\"off\">\n        <div class=\"flex\">\n          <div class=\"sec1\">\n            <div class=\"pt10\">\n              <label class=\"p_title\"> Item<span class=\"text-danger\">*</span></label>\n              <input type=\"text\" class=\"input wid100\" name=\"item_name\" [(ngModel)]=\"allocatedata.item_name\" [disabled]=\"true\" placeholder=\"Item*\">\n            </div>\n            <div class=\"pt10\" [class.has-error]=\"sub_branch_id.invalid && sub_branch_id.touched\">\n              <label class=\"p_title\">  Sub-Branch<span class=\"text-danger\">*</span></label>\n              <select class=\"select wid100\" name=\"sub_branch_id\" \n                [(ngModel)]=\"allocatedata.sub_branch_id\"\n                (ngModelChange)=\"getItemAgainSubBranch($event)\" #sub_branch_id=\"ngModel\" required>\n                  <option value=\"\" selected> Select sub-branch</option>\n                  <option value=\"{{data.institute_id}}\" *ngFor=\"let data of subBranchAllData\">\n                   {{data.institute_name}}\n                  </option>\n                </select>\n\n            </div>\n            <!-- <p class=\"errormsg\"> <span  style=\"height:10px;\"  *ngIf=\"sub_branch_id.invalid && sub_branch_id.touched\"class=\"help-block\">\n              Sub-Branch is mandatory\n             </span></p> -->\n             <div class=\"pt10\" [class.has-error]=\"alloted_units.invalid && alloted_units.touched\">\n              <label class=\"p_title\">  Allocate Unit<span class=\"text-danger\">*</span></label>\n              <input type=\"text\" class=\"input wid100\" [(ngModel)]=\"allocatedata.alloted_units\" name=\"alloted_units\" \n                placeholder=\"Enter Units\"\n                onkeypress=\" return (event.charCode >= 48 && event.charCode <= 57)\" \n                required #alloted_units=\"ngModel\" required>\n            </div>\n            <!-- <p class=\"errormsg\"> <span  \n              *ngIf=\"alloted_units.invalid && alloted_units.touched\" style=\"height:10px;\" class=\"help-block\" >\n              Allocate Unit is mandatory\n            </span></p> -->\n             <div class=\"pt10\">\n              <label class=\"p_title\">  Challan No</label>\n               <input type=\"text\" class=\"input wid100\" name=\"challan_no\"\n                 placeholder=\"Enter Challan No\"\n                 [(ngModel)]=\"allocatedata.challan_no\">\n            </div>\n             <div class=\"pt10\">\n              <label class=\"p_title\">  Challan Amount</label>\n              <input type=\"text\" class=\"input wid100\"   [(ngModel)]=\"allocatedata.challan_amount\" name=\"challan_amount\" placeholder=\"Challan Amount\"\n              onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57) ||  \n              event.charCode == 46 || event.charCode == 0 \">\n            </div>\n           \n          </div>\n          <div class=\"sec2\">\n            <div class=\"pt10\">\n              <label class=\"p_title\"> Available Units</label>\n              <input type=\"text\" class=\"input wid100\"  name=\"available_units\" [(ngModel)]=\"allocatedata.available_units\" [disabled]=\"true\" placeholder=\"Available Units\">\n            </div>\n           \n            <div class=\"pt10\" [class.has-error]=\"sub_branch_item_id.invalid && sub_branch_item_id.touched\">\n              <label class=\"p_title\">  Sub-branch item<span class=\"text-danger\">*</span></label>\n             <select class=\"select wid100\" name=\"sub_branch_item_id\" \n              [(ngModel)]=\"allocatedata.sub_branch_item_id\"\n             #sub_branch_item_id=\"ngModel\" required>\n                <option value=\"\">  Select sub-branch item</option>\n                <option value=\"{{data.item_id}}\" *ngFor=\"let data of itemfromSubbrach\">\n                {{data.item_name}}\n                </option>\n              </select>\n\n          </div>\n          <!-- <p class=\"errormsg\"> <span  style=\"height:10px;\"  *ngIf=\"sub_branch_item_id.invalid && sub_branch_item_id.touched\"class=\"help-block\">\n            Sub-Branch item is mandatory\n           </span></p> -->\n            <div class=\"pt10\">\n              <label class=\"p_title\"> Tranport</label>\n             <input type=\"text\" class=\"input wid100\" name=\"transport\"\n                [(ngModel)]=\"allocatedata.transport\" placeholder=\"Enter mode of Transport\">\n            </div>\n           \n            <div class=\"pt10\">\n              <label class=\"p_title\"> Challan Date</label>\n              <input type=\"date\" class=\"input wid100\" name=\"challan_date\"\n                [(ngModel)]=\"allocatedata.challan_date\" \n                 placeholder=\"Enter Challan Date\" >\n            </div>\n           \n          </div>\n        </div>\n        <div class=\"pt10 display\">\n         <div></div>\n         <div> \n          <button class=\"right blue_button cancel\" data-dismiss=\"modal\" (click)=\"cancel()\">cancel</button>\n           <button class=\"right blue_button\" (click)=\"saveAllocatedData(allocatedata)\">Allocate</button></div>\n         \n        </div>\n      </form>\n      </div>        \n    </div>\n  </div>\n</div>    \n<div class=\"modal\" id=\"historyModal\"  data-backdrop=\"static\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\" >Allocation History </h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      </div>\n      <div class=\"modal-body scrollable\" >\n         <div class=\"allo_history\">\n          <div class=\"table_heading\">\n            <div style=\"padding-left:8px;\">\n             #\n            </div>\n            <div>Date</div>\n            <div>\n              From/To\n            </div>\n            <div>Contact No.</div>\n            <div>Quantity</div>\n            <div>In/Out</div>\n          </div>\n          <div class=\"table_body\" *ngFor=\"let data of allocationHistoryData;index as i\" style=\"line-height: 3;\" >\n            <div style=\"padding-left: 8px;\">\n              {{i+1}}\n            </div>\n            <div>\n          {{data.created_date | date: 'yyyy-MM-dd'}}\n            </div>\n            <div>\n              <span  *ngIf=\"data.user_name==''\" >--</span>\n              <span  *ngIf=\"data.user_name!=''\"  title=\"{{data.user_name}}\">{{(data.user_name.length >15)?(data.user_name | slice:0:15)+ '...':data.user_name}}</span>\n              \n            </div>\n           <div>\n            <span  *ngIf=\"data.contact_no=='' ||data.user_name==null\" >--</span>\n            <span  *ngIf=\"data.contact_no!=''\" >{{data.contact_no}}</span>\n         \n           </div>\n           <div>{{data.alloted_units}}</div>\n            <div>\n              <span  *ngIf=\"data.inventory_type==1\" class=\"in1\">In</span>\n              <span  *ngIf=\"data.inventory_type==2\" class=\"out\">Out</span>\n            </div>\n           \n            \n          </div>\n      </div>\n     </div>        \n    </div>\n  </div>\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/inventory-module/purchase-add/purchase-add.component.html":
    /*!****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/inventory-module/purchase-add/purchase-add.component.html ***!
      \****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsInventoryModulePurchaseAddPurchaseAddComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"page-content\">\n  <div class=\"head_padding\">\n    <div class=\"w98\">\n      <div class=\"page_heading\">\n        <p>Purchase Item</p>\n      </div>\n    </div>\n  </div>\n  <form #purchaseForm=\"ngForm\" autocomplete=\"off\">\n  <div class=\"w98 flex\">\n   <div class=\"div_1\">\n      <div class=\"heading1\">\n        <p>Purchase</p>\n      </div>\n      <div class=\"pt102\"  [class.has-error]=\"supplier_id.invalid && supplier_id.touched\">\n        <label class=\"p_title\">  Company Name<span class=\"text-danger\">*</span></label>\n         <select class=\"select wid100\" name=\"supplier_id\" id=\"supplier_id\" [(ngModel)]=\"model.supplier_id\"\n          #supplier_id=\"ngModel\" >\n          <option value=\"\">\n            Select Company\n          </option>\n          <option value=\"{{data.supplier_id}}\" *ngFor=\"let data of supplierAllData\">\n            {{data.company_name}}</option>\n        </select>\n      </div>\n      <!-- <p class=\"errormsg\"><span style=\"height:10px;\" class=\"help-block\"\n          *ngIf=\"!supplier_id.valid && supplier_id.touched\">\n          Supplier name is mandatory\n        </span></p> -->\n      <div class=\"pt102\">\n        <label class=\"p_title\">  Date<span class=\"text-danger\">*</span></label>\n        <input type=\"Date\" class=\"input wid100\" name=\"purchase_date\" placeholder=\"Date*\"\n          [(ngModel)]=\"model.purchase_date\" #purchase_date=\"ngModel\"\n          (change)=\"validateFutureDate($event)\" required>\n      </div>\n      <div class=\"pt102\">\n        <label class=\"p_title\"> Reference No.<span class=\"text-danger\">*</span></label>\n        <input type=\"text\" class=\"input wid100\"  (keyup)=\"maxlenth(model.reference_number,30)\" name=\"reference_number\" placeholder=\"Enter Reference Number\"\n          [(ngModel)]=\"model.reference_number\" #reference_number=\"ngModel\"\n          required>\n      </div>\n      <!-- <p class=\"errormsg\"><span style=\"height:10px;\" class=\"help-block\"\n          *ngIf=\"!purchase_date.valid && purchase_date.touched\" >\n          Date is mandatory\n        </span></p> -->\n      <div class=\"pt102\">\n        <label class=\"p_title\">Bill copy</label>\n       <input type=\"File\" class=\"input wid100\" id=\"billImageFile\" title=\"Allowed file format PDF/Jpeg/png/svg/jpg and allowed  file size upto 5Mb\" (change)=\"readFile($event,'billImageFile')\" name=\"billImageFile\" placeholder=\"Date*\" \n        [disabled]=\"isedit && model.bill_image_url !='' && model.bill_image_url!=null\" \n          [(ngModel)]=\"model.bill_image_url\" accept=\".gif, .jpg, .png, .doc,.svg,.pdf,.csv|image/*\">\n      </div>\n      <div class=\"pt102\"  *ngIf=\"isedit && model.bill_image_url !='' && model.bill_image_url!=null\">\n        <ul class=\"p_title\">\n          <li>Bill Copy</li>\n          <li (click)=\"clearFile()\" title=\"Delete Bill copy\"><i class=\"fa fa-trash\" style=\"color:red;font-size: 18px;\"></i>\n          </li>\n          <li>\n              <a href=\"{{model.bill_image_url}}\" target=\"_blank\" title=\"Download Bill copy\"><i class=\"fa fa-download\"\n                      style=\"color:#064d0f;font-size: 18px;\"></i> </a>\n          </li>\n      </ul>\n        </div>\n        <br>\n      <div class=\"pt102\">\n        <label class=\"p_title\"> Description</label>\n        <textarea class=\"input wid100 textarea1\"  (keyup)=\"maxlenth(model.purchase_description,70)\" name=\"purchase_description\" placeholder=\"Enter Description\"\n          [(ngModel)]=\"model.purchase_description\"></textarea>\n      </div>\n    </div>\n    <div class=\"div_2\">\n    \n        <div class=\"heading1\">\n          <p>Purchase Item</p>\n        </div>\n        <div class=\"pt102\" [class.has-error]=\"category_id.invalid && category_id.touched\">\n          <!-- <label class=\"p_title\"> Category <span class=\"text-danger\">*</span></label>\n          <br> -->\n          <select class=\"select sel1 mr10\" name=\"categoryId\" id=\"categoryId\" ngModel\n            #category_id=\"ngModel\" (change)=\"getItemAgainscat($event)\" >\n            <option value=\"\" selected>Select Category</option>\n            <option value=\"{{data.category_id}}\" *ngFor=\"let data of categoryAllData\">\n              {{data.category_name}} </option>\n          </select>\n          <!-- <label class=\"p_title\"> Item <span class=\"text-danger\">*</span></label> -->\n          <select class=\"select sel1 mr10\" name=\"item_id\" id=\"category_id\" (ngModelChange)=\"getItemData($event)\"\n          ngModel #item_id=\"ngModel\" >\n            <option value=\"\" selected>Select Item</option>\n            <option value=\"{{data.item_id}}\" *ngFor=\"let data of itemArray\">\n              {{data.item_name}}</option>\n          </select>\n          <!-- <p class=\"errormsg\" ><span style=\"height:10px;\" class=\"help-block\" *ngIf=\"!category_id.valid && category_id.touched\">\n            Category is mandatory\n          </span> -->\n          <!-- <span style=\"height:10px;\" class=\"help-block\" *ngIf=\"!item_id.valid && item_id.touched\">\n            Item is mandatory\n          </span></p> -->\n        </div>\n        \n     \n        <div class=\"tablehead\">\n          <div>\n            Item\n          </div>\n          <div>\n            Unit Price\n          </div>\n          <div>\n            Units\n          </div>\n          <div>\n            Sub-total\n          </div>\n          <div>\n            Action\n          </div>\n        </div>\n      \n        <div class=\"tablebody\" *ngFor=\"let data of itemData;let i=index\">\n          <div>\n            {{data.item_name}}\n            <!-- ({{data.available_units}}) -->\n          </div>\n          <div>\n           \n           <input type=\"text\" [name]=\"'unit'+i\" [id]=\"'unit'+i\" [(ngModel)]=\"data.unit_cost\"\n           onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57) ||  \n           event.charCode == 46 || event.charCode == 0 \"\n              (keyup)=\"purchaselistItem()\"\n               class=\"input wid80\"\n             >\n          </div>\n          <div>\n          \n            <input type=\"text\" [name]=\"'unitsj'+i\" [id]=\"'unitsj'+i\" \n             [(ngModel)]=\"data.available_units\"\n             (keyup)=\"purchaselistItem()\"\n               onkeypress=\" return (event.charCode >= 48 && event.charCode <= 57)\" \n               class=\"input wid80\"\n               >\n          </div>\n          <div>\n            {{(data.available_units * itemData[i].unit_cost).toFixed(2) }}\n          </div>\n          <div>\n            <!-- <a (click)=\"editdata(false)\"><img src=\"../../../../assets/img1/edit.svg\" title=\"Edit\"\n                class=\"group18 mr10\"></a> -->\n            <a (click)=\"deleteItemData(i)\"><img src=\"../../../../assets/img1/delete.svg\" title=\"Delete\" class=\"group18\"></a>\n          </div>\n        </div>\n\n        <div class=\"tabletotal\" *ngIf=\"isChange\">\n          <div>\n\n          </div>\n          <div>\n            Total\n          </div>\n          <div>\n           {{totalUnits}}\n          </div>\n          <div>\n            {{total}}\n          </div>\n          <div>\n          </div>\n        </div>\n     \n    </div>\n    \n  </div>\n  </form>\n  <div class=\"h60\"></div>\n  <div class=\"white bottom_button bottom_pagignation\">\n    <div class=\"display w98\">\n      <div> <button class=\"blue_button cancel\" routerLink=\"/view/inventory-management/purchase-item\">Back </button>\n      </div>\n      <div>\n\n        <button style=\"margin-left: 10px;\" class=\"blue_button\" (click)=\"savePurchaseData()\" *ngIf=\"!isedit\" >Add Purchase</button>\n        <button style=\"margin-left: 10px;\" class=\"blue_button\" (click)=\"updatePurchaseData()\" *ngIf=\"isedit\" >Update</button> \n\n     \n      </div>\n    </div>\n    \n    <!-- pagignation div -->\n\n  </div>\n  <!-- use image only when page is empty,table body class element will not be present -->\n\n</div>\n<div class=\"modal\" id=\"addpayModal\" data-backdrop=\"static\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Add Payment</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"flex\">\n          <div class=\"sec1\">\n            <div class=\"pt10\">\n              <input type=\"Date\" class=\"input wid100\" name=\"\" placeholder=\"Date*\">\n            </div>\n            <div class=\"pt10\">\n              <select class=\"select wid100\">\n                <option>Payment Method*</option>\n              </select>\n            </div>\n            <div class=\"pt10\">\n              <input type=\"File\" class=\"input wid100\" name=\"\" placeholder=\"Date*\">\n            </div>\n          </div>\n          <div class=\"sec2\">\n            <div class=\"pt10\">\n              <input type=\"text\" class=\"input wid100\" name=\"\" placeholder=\"Refrence No.\">\n            </div>\n            <div class=\"pt10\">\n              <input type=\"text\" class=\"input wid100\" name=\"\" placeholder=\"Amount*\">\n            </div>\n\n          </div>\n        </div>\n        <div class=\"pt10\">\n          <button class=\"right blue_button\">Save</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<router-outlet></router-outlet>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/inventory-module/purchase-item/purchase-item.component.html":
    /*!******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/inventory-module/purchase-item/purchase-item.component.html ***!
      \******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsInventoryModulePurchaseItemPurchaseItemComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"page-content\">\n    <div class=\"head_padding\">\n      <div class=\"w98 display\">\n        <div class=\"page_heading\">\n          <p>Purchase Item</p>\n        </div>\n        <div>\n          <a routerLink=\"../purchase-add\" >\n            <button class=\"blue_button\"  >Add Purchase</button>\n           </a>\n        </div>\n      </div>\n    </div>\n        <div class=\"w98\">\n            <div class=\"pt15 display\" style=\"padding-bottom: 15px;\">\n              <div>\n                <input type=\"text\" class=\"input wid240 mr10 magnifying-glass\"  placeholder=\"Search\"\n                #search [(ngModel)]=\"searchParams\"\n                name=\"searchParams\" (keyup)=\"searchDatabase()\">\n            </div>\n <div class=\"right\">\n                                    <!--   <a (click)=\"copydata()\" class=\"mr10\"><img src=\"../../../../assets/img1/copy2.svg\" title=\"Copy\"></a>\n                <a href=\"\" class=\"mr10\"><img src=\"../../../../assets/img1/csv.svg\" title=\"CSV\"></a>-->\n                <a (click)=\"downloadPdf()\" class=\"mr10\"><img src=\"../../../../assets/img1/pdf.svg\" title=\"PDF Preview\"></a>\n                <a (click)=\"exportToExcel()\" class=\"mr10\"><img src=\"../../../../assets/img1/excel.svg\" title=\"Excel Download\"></a>\n            </div> \n            </div>\n            <div class=\"purchase\">\n                <div class=\"table_heading\" >\n                <!-- <div>#</div> -->\n                <div style=\"padding-left: 20px;\">Reference No. </div>\n                <div>Supplier</div>\n                <div>Date</div>\n                <div style=\"text-align: center;\">Grand Total&nbsp;(&nbsp;<i class=\"fa fa-inr\"></i>&nbsp;)</div>\n                <div style=\"text-align: center;\">Paid &nbsp;(&nbsp;<i class=\"fa fa-inr\"></i>&nbsp;)</div>\n                <div style=\"text-align: center;\">Balance &nbsp;(&nbsp;<i class=\"fa fa-inr\"></i>&nbsp;)</div>\n                <div style=\"text-align: center;\">Actions</div>\n                </div>\n                <div class=\"table_body\" *ngFor=\"let data of staticPageData;index as i\">\n            \n                <!-- <div>\n                  <a href=\"{{data.bill_image_url}}\" target=\"_blank\" download><img src=\"{{data.bill_image_url}}\" width=\"40\" height=\"40\"/></a>\n              </div> -->\n              <!-- <div>{{i +1}}</div> -->\n                <div style=\"padding-left: 20px;\">\n                  {{data.reference_number}}\n                   </div>\n                <div>\n               {{data.supplier_company_name}}\n                </div>\n                <div>\n              {{data.purchase_date | date: 'dd-MMM-yyyy'}}\n                </div>\n                <div style=\"text-align: center;\">\n                    {{data.total_amount}}\n                </div>\n                    <div style=\"text-align: center;\">\n                    {{data.total_paid_amount}}\n                    </div>\n                    <div style=\"text-align: center;\">\n                   {{data.balanced_amount}}\n                    </div>\n                    <div style=\"text-align: center;\">\n                        <div class=\"dropdown1\">\n                           <span style=\"text-align: space-beetween;\"><img src=\"../../../../assets/img1/menu.svg\"  class=\"dot3\"/></span> \n                                <div class=\"dropdown-content1\"   id=\"action_btn\" >\n                                  <a  (click)=\"viewNavigate(data.purchase_id)\">View</a>\n                                \n                                  <a  [routerLink]=\"['/view/inventory-management/edit/', data.purchase_id]\"\n                                  *ngIf=\"data.total_amount==data.balanced_amount\" >Edit</a>\n                                 \n                                  <a (click)='showConfirm(data)'*ngIf=\"data.total_amount==data.balanced_amount\">Delete</a>   \n                                  <a *ngIf=\"data.total_amount !=data.balanced_amount\" (click)=\"cancelData(data.purchase_id)\">Cancel</a>  \n                                  <a (click)=\"showAddPayment(data.purchase_id)\"*ngIf=\"data.balanced_amount!=0\" >Add Payment</a>   \n                                  <a  (click)=\"getPaymentHistory(data)\">View Payment History</a>\n                                \n                                </div>\n                               \n                        </div>\n                    </div>\n                </div>\n                <section class=\"no-data\" *ngIf=\"staticPageData.length == 0\">\n                  <div class=\"illustration-container\">\n                    <img alt=\"illustration\" class=\"illustration-img\" src=\"./assets/images/course_planner/blank-illustration.svg\">\n                  </div>\n                </section>\n            </div>\n        </div>\n        <div style=\"margin-top: 2 0px;\">\n              <pagination (goPage)=\"fetchTableDataByPage($event)\" (goNext)=\"fetchNext()\"(goPrev)=\"fetchPrevious()\"\n    [pagesToShow]=\"10\" [page]=\"pageIndex\" [perPage]=\"displayBatchSize\" [sizeArr]=\"sizeArr\"\n    [count]=\"totalRecords\" (sizeChange)=\"updateTableBatchSize($event)\">\n</pagination> \n</div>\n               \n          <!-- use image only when page is empty,table body class element will not be present -->\n</div> \n  <div class=\"modal\" id=\"addpayModal\" data-backdrop=\"static\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Add Payment</h4>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" \n          (click)=\"cancel()\">&times;</button>\n        </div>\n        <form #addform=\"ngForm\">\n        <div class=\"modal-body\">\n          <div class=\"flex\">\n            <div class=\"sec1\">\n              <div class=\"pt10\"  [class.has-error]=\"payment_date.invalid && payment_date.touched\">\n                <label class=\"p_title\"> Date<span class=\"text-danger\">*</span></label>\n                <input type=\"Date\" class=\"input wid100\" [(ngModel)]=\"paymentModel.payment_date\"\n                  name=\"payment_date\" placeholder=\"Date*\"\n                  (change)=\"validateFutureDate($event)\"\n                  #payment_date=\"ngModel\" required>\n              </div>\n              <!-- <p class=\"errormsg\"><span  style=\"height:10px;\" class=\"help-block\"\n                 *ngIf=\"!payment_date.valid && payment_date.touched\">\n               Date is  mandatory\n             </span></p> -->\n              <div class=\"pt10\"  [class.has-error]=\"payment_method.invalid && payment_method.touched\">\n                <label class=\"p_title\"> Payment Method<span class=\"text-danger\">*</span></label>\n                <select class=\"select wid100\" name=\"payment_method\" id=\"payment_method\"\n                  [(ngModel)]=\"paymentModel.payment_method\"   #payment_method=\"ngModel\"\n                  required>\n                    <option value=\"\">Select Payment Method</option>\n                    <option value=\"Cash\">Cash</option>\n                    <option value=\"Cheque\">Cheque</option>\n                    <option value=\"Card\">Card</option>\n                    <option value=\"Others\">Others</option>\n                  </select>\n              </div>\n              <!-- <p class=\"errormsg\"> <span  style=\"height:10px;\"  *ngIf=\"!payment_method.valid && payment_method.touched\"\n                class=\"help-block\">\n                Payment method is mandatory\n               </span></p> -->\n              <div class=\"pt10\">\n                <label class=\"p_title\"> Upload Receipt<span class=\"text-danger\">*</span></label>\n                <input type=\"File\" class=\"input wid100\" placeholder=\"Date*\"\n                  type=\"File\" class=\"input wid100\" name=\"billImageFile\" placeholder=\"Date*\" name=\"billImageFile\"\n              [disabled]=\"bill_image_url!=''&& isedit\" id=\"billImageFile\" style=\"margin-top:8px;\"\n              [(ngModel)]=\"bill_image_url\" accept=\".gif, .jpg, .png, .doc,.svg,.pdf,.csv|image/*\">\n              </div>\n              <!-- <p class=\"errormsg\"> <span  style=\"height:10px;\"  class=\"help-block\">\n\n               </span></p> -->\n            </div>\n            <div class=\"sec2\">\n              <div class=\"pt10\">\n                <label class=\"p_title\"> Reference No.<span class=\"text-danger\">*</span></label>\n                <input type=\"text\" class=\"input wid100\" name=\"reference_no\" [(ngModel)]=\"paymentModel.reference_no\" \n                  placeholder=\"Enter Reference Number\">\n              </div>\n              \n              <!-- <p class=\"errormsg\"> <span  style=\"height:10px;\"  class=\"help-block\">\n\n              </span></p> -->\n              <div class=\"pt10\" [class.has-error]=\"paid_amount.invalid && paid_amount.touched\">\n                <label class=\"p_title\"> Amount<span class=\"text-danger\">*</span></label>\n              \n                <input type=\"text\" class=\"input wid100\" id=\"paid_amount\" name=\"paid_amount\" placeholder=\" Enter Amount\"\n                  #paid_amount=\"ngModel\"  onkeypress=\" return (event.charCode >= 48 && event.charCode <= 57)\"\n                  required\n                  (change)=\"validatePayment(paymentModel.paid_amount)\"\n                  [(ngModel)]=\"paymentModel.paid_amount\">\n              </div>\n              <!-- <p class=\"errormsg\"> <span  style=\"height:10px;\"  \n                *ngIf=\"!paid_amount.valid && paid_amount.touched\"\n                [(ngModel)]=\"paymentModel.paid_amount\"\n                class=\"help-block\">\n                Amount* is mandatory\n               </span></p> -->\n            </div>\n          </div>\n          <div class=\"pt10 display\">\n           <div></div>\n           <div>\n            <button class=\"blue_button cancel\" (click)=\"cancel()\" data-dismiss=\"modal\">Cancel</button> \n             <button class=\"blue_button\" (click)=\"addPaymentPurchase(payment_purchase_id)\">Update</button></div>\n          </div>\n        </div>  \n        </form>      \n      </div>\n    </div>\n  </div>\n  <div class=\"modal\" id=\"viewpayModal\" data-backdrop=\"static\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\" >Payment History</h4>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        </div>\n        <div class=\"modal-body scrollable\">\n          <div class=\"history\">\n            <div class=\"table_heading\" style=\"line-height: 30px;\">\n              <div style=\"padding-left: 18px;\">\n                #\n              </div>\n              <div>Date </div>\n              <div>\n               Reference No\n              </div>\n              <div>Amount</div>\n              <div>Paid By</div>\n              <div>File</div>\n            </div>\n            <div class=\"table_body tbl-history\" style=\"margin:-3px 0px;padding:10px\" *ngFor=\"let data of paymentHistoryData;index as i\">\n              <div style=\"padding-left: 8px;\">\n               {{i+1}}\n              </div>\n              <div>\n              {{data.payment_date}}\n              </div>\n              <div>{{data.reference_no}}</div>\n              <div>\n              {{data.paid_amount}}\n              </div>\n              <div>\n              {{data.payment_method}}\n              </div>\n              <div>\n                <a *ngIf=\"data.bill_image_url==null \"  class=\"mr10\">--</a>\n                <a  *ngIf=\"data.bill_image_url!=null \" href=\"{{data.bill_image_url}}\" class=\"mr10\"><img src=\"../../../../assets/images/View.png\" title=\"View Receipt\"></a>\n </div>\n            </div>\n        </div>\n        </div>        \n      </div>\n    </div>\n  </div>\n  <div class=\"modal\" id=\"deletesModal\" data-backdrop=\"static\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        </div>\n        <div class=\"modal-body\">\n          <div class=\"center\">\n            <span><img src=\"../../../assets/img1/alert.svg\"></span><span class=\"alert\">Alert</span>\n          </div>\n         <div><p class=\"center\"> Do you want\n           to proceed ?</p>\n          </div> \n          <div class=\"pt101 display\">\n            <div>\n              <button class=\"white_button right\"data-dismiss=\"modal\">Cancel</button>\n            </div>\n            <div>\n              <button class=\"blue_button right\" (click)=\"deleteRow(tempObj)\">Proceed</button>\n            </div>\n          </div>\n        </div>        \n      </div>\n    </div>\n  </div>\n  <router-outlet></router-outlet>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/inventory-module/purchase-view/purchase-view.component.html":
    /*!******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/inventory-module/purchase-view/purchase-view.component.html ***!
      \******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsInventoryModulePurchaseViewPurchaseViewComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"page-content\">\n    <div class=\"head_padding\">\n      <div class=\"w98 display\">\n        <div class=\"page_heading\">\n          <p>Purchase Item</p>\n        </div>\n        <div>\n          <!-- <a href=\"\" class=\"mr10\"><img src=\"../../../../assets/img1/card.svg\" title=\"Card Details\" ></a>\n          <a href=\"\" class=\"mr10\"><img src=\"../../../../assets/img1/edit.svg\" title=\"Edit\" class=\"group18\"></a>\n          <a href=\"\" class=\"mr10\"><img src=\"../../../../assets/img1/email.svg\" title=\"Send To Email\"></a> -->\n          <a *ngIf=\"DataForView.bill_image_url?.length !=0\" href=\"{{DataForView.bill_image_url}}\"  target=\"_blank\" class=\"mr10\"><img src=\"../../../../assets/images/viewicon.png\" title=\"View Bill Copy\"></a>\n          <a (click)=\"printData('divforPrint')\" class=\"mr10\"><img src=\"../../../../assets/img1/print.svg\" title=\"Print\"></a>\n          <!-- <a href=\"\" class=\"mr10\"><img src=\"../../../../assets/img1/pdf.svg\" title=\"PDF Preview\"></a>-->\n        </div> \n      </div>\n    </div>\n  \n \n      <br>\n      <div id=\"divforPrint\" class=\"printdata\">\n      <div class=\"flex30\">\n         <div class=\"flex\">\n           <div class=\"name2\">From:</div>\n           <div class=\"value2\">{{DataForView.supplier_company_name}}</div>\n         </div>\n         <div class=\"flex\">\n           <div class=\"name2\">To:</div>\n           <div class=\"value2\">{{DataForView.institute_name}}</div>\n         </div>\n           <div class=\"display\">\n      <div></div>\n      <div class=\"right created_date created\">\n       <b class=\"name2\"> Created Date : </b><b >{{DataForView.created_date | date : \"d MMMM, y\" }}</b>\n      <!-- <img src=\"/assets/img1/teal_rec.svg\"/> -->\n      </div>\n    </div>\n      </div>\n      <div class=\"flex30\">\n         <div class=\"flex\">\n           <div class=\"name2\">Mobile:</div>\n           <div class=\"value2\">{{DataForView.supplier_phone}}</div>\n         </div>\n         <!-- <div class=\"flex\">\n           <div class=\"name2\">Role:</div>\n           <div class=\"value2\">Student</div>\n         </div> -->\n        <div class=\"flex\">\n           <div class=\"name2\" style=\"width: 34%;\">Reference&nbsp;No:</div>\n           <div class=\"value2 val\">{{DataForView.reference_number}}</div>\n         </div>\n\n      </div>\n      <div class=\"flex30\">\n         <div class=\"flex\">\n           <div class=\"name2\">Email:</div>\n           <div class=\"value2\">{{DataForView.supplier_email}}</div>\n         </div>\n         <div class=\"flex\">\n           <div class=\"name2\">Mobile:</div>\n           <div class=\"value2\">{{DataForView.institute_phone}}</div>\n         </div>\n         <div class=\"flex\">\n           <div class=\"name2\">Payment&nbsp;Status:</div>\n           <div class=\"value2 val\">{{DataForView.payment_status}}</div>\n         </div>\n      </div>\n      <div class=\"flex30\">\n         <div class=\"flex\">\n           \n         </div>\n         <div class=\"flex\">\n           <div class=\"name2\">Email:</div>\n           <div class=\"value2\">{{DataForView.institute_email}}</div>\n         </div>\n         <div class=\"flex\">\n         </div>\n      </div> \n      <br><br>\n      <div class=\"w98\">\n      <div class=\"item\">\n         <div class=\"tablehead thead\">\n              <div>\n                Item\n              </div>\n              <div>\n                Unit Price\n              </div>\n              <div>\n                Units\n              </div>\n              <div>\n                Subtotal\n              </div>\n            </div>\n            <div class=\"tablebody tbody\" *ngFor=\"let data of DataForView.purchased_item_list\">\n              <div>\n               {{data.item_name}}\n              </div>\n              <div>\n              {{data.unit_price}}\n              </div>\n              <div>\n              {{data.quantity}}\n              </div>\n              <div>\n                {{data.unit_price * data.quantity}}\n              </div>\n             \n            </div>\n            <div class=\"tabletotal totalss\">\n              <div>\n                \n              </div>\n              <div>\n               \n              </div>\n              <div>\n               Total Amount\n              </div>\n              <div>\n               {{DataForView.total_amount}}\n              </div>\n           \n            </div>\n            <div class=\"tabletotal\">\n              <div>\n                \n              </div>\n              <div>\n               \n              </div>\n              <div>\n               Paid (GHS)\n              </div>\n              <div>\n               {{DataForView.total_paid_amount}} \n              </div>\n              \n            </div>\n            <div class=\"tabletotal\">\n              <div>\n                \n              </div>\n              <div>\n               \n              </div>\n              <div>\n               Balance (GHS)\n              </div>\n              <div>\n              {{DataForView.balanced_amount}}\n              </div>\n          \n       </div>\n      </div>   \n    </div>\n    <br>\n    <br>\n    <div style=\"float:left;margin:10px;\" class=\"backbtn\"> <button  class=\"blue_button cancel\" routerLink=\"/view/inventory-management/purchase-item\">Back </button>\n\n  </div>\n</div> \n  <!-- <div class=\"modal\" id=\"addpayModal\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\" >Add Payment</h4>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        </div>\n        <div class=\"modal-body\">\n          <div class=\"flex\">\n            <div class=\"sec1\">\n              <div class=\"pt10\">\n                  <input type=\"Date\" class=\"input wid100\" name=\"\" placeholder=\"Date*\">\n              </div>\n              <div class=\"pt10\">\n                  <select class=\"select wid100\">\n                    <option>Payment Method*</option>\n                  </select>\n              </div>\n              <div class=\"pt10\">\n                  <input type=\"File\" class=\"input wid100\" name=\"\" placeholder=\"Date*\">\n              </div>\n            </div>\n            <div class=\"sec2\">\n              <div class=\"pt10\">\n                  <input type=\"text\" class=\"input wid100\" name=\"\" placeholder=\"Refrence No.\">\n              </div>\n              <div class=\"pt10\">\n                  <input type=\"text\" class=\"input wid100\" name=\"\" placeholder=\"Amount*\">\n              </div>\n             \n            </div>\n          </div>\n          <div class=\"pt10\">\n            <button class=\"right blue_button\">Save</button>\n          </div>\n        </div>        \n      </div>\n    </div>\n  </div> -->\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/inventory-module/sale-add/sale-add.component.html":
    /*!********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/inventory-module/sale-add/sale-add.component.html ***!
      \********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsInventoryModuleSaleAddSaleAddComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"page-content\">\n    <div class=\"head_padding\">\n      <div class=\"w98\">\n        <div class=\"page_heading\">\n          <p>Sale Item</p>\n        </div>\n      </div>\n    </div>\n    <form  #myForm=\"ngForm\" autocomplete=\"off\">\n      <div class=\"w98 flex\">\n        <div class=\"div_11\">\n          <div class=\"heading1\">\n            <p>Sale</p>\n          </div>\n           <div class=\"pt102\">\n                <label class=\"p_title\"> Role<span class=\"text-danger\">*</span></label>\n             <select class=\"select wid100\"  name=\"user_role\" id=\"user_role\"\n                  (change)=\"getUserAgainstRole($event.target.value)\" [(ngModel)]=\"model.user_role\">\n                     <option value=\"\">Select Role</option>\n                     <option value=\"0\">Student</option>\n                     <option value=\"{{datas.role_id}}\" *ngFor=\"let datas of roleAllData\">{{datas.name}}{{datas.role_name}}</option>\n                   </select>\n              </div>\n                 <div class=\"pt102\">\n                  <label class=\"p_title\"> User<span class=\"text-danger\">*</span></label>\n                 <select class=\"select wid100\" name=\"user_id\" id=\"user_id\"\n                  [(ngModel)]=\"model.user_id\">\n                    <option value=\"\">Select User</option>\n                    <option value=\"{{datas.user_id}}\" *ngFor=\"let datas of userALLdata\">{{datas.name}}</option>\n                  </select>\n              </div>\n                 <div class=\"pt102\">\n                  <label class=\"p_title\"> Refrence No.<span class=\"text-danger\">*</span></label>\n                <input type=\"text\"  (keyup)=\"maxlenth(model.reference_number,30)\" class=\"input wid100\" name=\"Enter Reference Number\"\n                    id=\"reference_number\" placeholder=\"Refrence No.\"\n                    [(ngModel)]=\"model.reference_number\">\n              </div>\n               <div class=\"pt102\">\n                <label class=\"p_title\"> Date<span class=\"text-danger\">*</span></label>\n               <input type=\"Date\" class=\"input wid100\" name=\"sale_date\" placeholder=\"Date\"\n          [(ngModel)]=\"model.sale_date\" #purchase_date=\"ngModel\"\n          (change)=\"validateFutureDate($event)\" required>\n              </div>\n               <div class=\"pt102\">\n                <label class=\"p_title\"> Payment Status<span class=\"text-danger\">*</span></label>\n                <select class=\"select wid100\" name=\"payment_status\" id=\"payment_status\" \n                   [(ngModel)]=\"model.payment_status\" required>\n                    <option value=\"\">Select Payment Status</option>\n                    <!-- <option value=\"Due\">Due</option> -->\n                    <option value=\"Pending\"> Pending</option>\n                    <option value=\"Paid\">Paid</option>\n                  </select>\n              </div>\n              <div class=\"pt102\">\n                <label class=\"p_title\"> Bill Copy</label>\n                <input type=\"File\" class=\"input wid100\" (change)=\"readFile($event,'billImageFile')\" title=\"Allowed file format PDF/Jpeg/png/svg/jpg and allowed  file size upto 5Mb\"  name=\"billImageFile\" placeholder=\"Date*\" id=\"billImageFile\"\n               style=\"margin-top:8px;\"\n               [disabled]=\"isedit && model.bill_image_url !='' && model.bill_image_url!=null\"\n                [(ngModel)]=\"model.bill_image_url\" accept=\".gif, .jpg, .png, .doc,.svg,.pdf,.csv|image/\">\n              </div>\n              <div class=\"pt102\"  *ngIf=\"isedit && model.bill_image_url !='' && model.bill_image_url!=null\">\n                <ul class=\"p_title\">\n                  <li>Bill Copy</li>\n                  <li (click)=\"clearFile()\" title=\"Delete Bill copy\"><i class=\"fa fa-trash\" style=\"color:red;font-size: 18px;\"></i>\n                  </li>\n                  <li>\n                      <a href=\"{{model.bill_image_url}}\" target=\"_blank\" title=\"Download Bill copy\"><i class=\"fa fa-download\"\n                              style=\"color:#064d0f;font-size: 18px;\"></i> </a>\n                  </li>\n              </ul>\n                </div>\n                <br>\n              <div class=\"pt102\">\n                <label class=\"p_title\"> Description</label>\n                <textarea class=\"input wid100 textarea1\" (keyup)=\"maxlenth(model.description,70)\" name=\"description\" id=\"description\" placeholder=\"Enter Description\"\n                [(ngModel)]=\"model.description\"></textarea>\n              </div>\n        </div>\n       <div  class=\"div_2\">\n          <div class=\"heading1 \">\n            <p>Sale Item</p>\n          </div>\n            <div class=\"pt102\">\n              <!-- <label class=\"p_title\"> Category <span class=\"text-danger\">*</span></label>-->\n                 <select class=\"select sel1 mr10\" id=\"category_id\" name=\"category_id\" \n                  (change)=\"getItemAgainstCat($event.target.value)\">\n                    <option value=\"\">Select Category*</option>\n                    <option value=\"{{data.category_id}}\" *ngFor=\"let data of categoryAllData\">{{data.category_name}}</option>\n                  </select>\n              <!-- <label class=\"p_title\"> Item <span class=\"text-danger\">*</span></label>-->\n                 <select class=\"select sel1 mr10\" name=\"item_id\" id=\"category_id\" (ngModelChange)=\"getItemData($event)\"\n                  ngModel #item_id=\"ngModel\">\n                    <option value=\"\" selected>Select Item*</option>\n                    <option value=\"{{data.item_id}}\" *ngFor=\"let data of itemArray\">\n                      {{data.item_name}}</option>\n                  </select>\n            </div>\n           <div class=\"sale_add\">\n              <div class=\"tablehead\">\n              <div>\n                Item\n              </div>\n              <div>\n                Sale Type\n              </div>\n              <div>\n                Sale Price\n              </div>\n              <div>\n                Units\n              </div>\n              <div>\n                Taxes\n              </div>\n              <div>\n                Sub-total\n              </div>\n              <div>\n                Action\n              </div>\n            </div>\n            <div class=\"tablebody\"*ngFor=\"let data of itemData;let i=index\">\n              <div>\n                {{data.item_name}}\n              </div>\n              <div>\n                <select class=\"input wid80\" [name]=\"'sale_type' +i \" [id]=\"'sale_type' +i\" \n                [(ngModel)]=\"data.sale_type\"\n                (ngModelChange)=\"purchaselistItem()\">\n           \n                  <option value=\"Paid\" selected>Paid</option>\n                  <option value=\"Free\">Free</option>\n                </select>\n              </div>\n              <div>\n              <input type=\"text\" [name]=\"'unit'+i\" [id]=\"'unit'+i\" [(ngModel)]=\"data.sale_price\"\n              onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57) ||  \n              event.charCode == 46 || event.charCode == 0 \"\n                (keyup)=\"purchaselistItem()\"\n                 class=\"input wid80\"\n               >\n               \n              </div>\n              <div>\n                <input type=\"text\" [name]=\"'unitsj'+i\" [id]=\"'unitsj'+i\" \n                [(ngModel)]=\"data.available_units\"\n                (keyup)=\"purchaselistItem()\"\n                  onkeypress=\" return (event.charCode >= 48 && event.charCode <= 57)\" \n                  class=\"input wid80\"\n                  >\n              </div>\n              <div>\n                <input type=\"text\" [name]=\"'quantity'+i\" [id]=\"'quantity'+i\" readonly\n                [(ngModel)]=\"data.tax_percent\"\n                (ngModelChange)=\"purchaselistItem()\"\n                  onkeypress=\" return (event.charCode >= 48 && event.charCode <= 57)\" \n                  class=\"input wid80\"\n                  >\n              </div>\n              <div >\n              <span *ngIf=\"data.sale_price !=0\">{{(data.subtotal).toFixed(2)}}</span>  \n             <sapn *ngIf=\"data.sale_price==0\">0</sapn>\n            </div>\n                <div>\n                <!-- <a (click)=\"editdata(data)\"><img src=\"../../../../assets/img1/edit.svg\" title=\"Edit\"\n                  class=\"group18 mr10\"></a> -->\n              <a (click)=\"deleteItemData(i)\"><img src=\"../../../../assets/img1/delete.svg\" title=\"Delete\" class=\"group18\"></a>\n              </div>\n            </div>\n           \n            <div class=\"tabletotal\" *ngIf=\"isChange\">\n              <div>\n                \n              </div>\n               <div>\n                \n              </div>\n              <div>\n               Total\n              </div>\n              <div>\n                {{totalUnits}}\n              </div>\n              <div>\n                {{total}}\n              </div>\n              <div>\n              </div>\n            </div>\n           </div>\n           <div *ngIf=\"model.payment_status =='Paid' \">\n            <div style=\"display:flex;justify-content: space-around;margin-top:10px;\" class=\"hi\">\n             <div> <div class=\"pt102\">\n              <label class=\"p_title\"> Refrence No.<span class=\"text-danger\">*</span></label>\n              <input type=\"text\" class=\"input wid100 a\" name=\"reference_no\" [(ngModel)]=\"model.reference_no\" \n              placeholder=\"Enter Reference Number\">\n          </div></div>\n             <div> <div class=\"pt102\">\n              <label class=\"p_title\"> Amount<span class=\"text-danger\">*</span></label>\n              <input type=\"text\" class=\"input wid100 a\" id=\"paid_amount\" name=\"paid_amount\" placeholder=\"Enter Amount\"\n              #paid_amount=\"ngModel\" (keyup)=\"amountValid(total,model.paid_amount)\" onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57) ||  \n              event.charCode == 46 || event.charCode == 0 \"\n              required\n              [(ngModel)]=\"model.paid_amount\">\n          </div></div>\n             <div> <div class=\"pt102\">\n              <label class=\"p_title\"> Payment Method<span class=\"text-danger\">*</span></label>\n              <select class=\"select wid100 a\" name=\"payment_method\" id=\"payment_method\"\n                [(ngModel)]=\"model.payment_method\"   #payment_method=\"ngModel\"\n                required>\n                  <option value=\"\">Select Payment Method</option>\n                  <option value=\"Cash\">Cash</option>\n                  <option value=\"Cheque\">Cheque</option>\n                  <option value=\"Card\">Card</option>\n                  <option value=\"Others\">Others</option>\n                </select>\n            </div></div>\n            \n           </div> \n          <div style=\"display:flex;justify-content: space-around;\" class=\"hi\">\n           \n            \n            <div> <div class=\"pt10\"  [class.has-error]=\"payment_date.invalid && payment_date.touched\">\n              <label class=\"p_title\"> Date<span class=\"text-danger\">*</span></label>\n               <input type=\"Date\" class=\"input wid100\" [(ngModel)]=\"model.payment_date\"\n                name=\"payment_date\" placeholder=\"Date*\"\n                (change)=\"validateFutureDate($event)\"\n                #payment_date=\"ngModel\" required>\n            </div></div>\n            <div> <div class=\"pt102\">\n              <label class=\"p_title\"> Upload Receipt</label>\n              <input type=\"File\" class=\"input wid100\" placeholder=\"Date*\"  (change)=\"readFile($event,'paymentBill')\" title=\"Allowed file format PDF/Jpeg/png/svg/jpg and allowed  file size upto 5Mb\"\n                type=\"File\" class=\"input wid100\" placeholder=\"Date*\" name=\"paymentBill\"\n            [disabled]=\"paymentBill  !=''&& isedit\" id=\"paymentBill\" \n            [(ngModel)]=\"paymentBill  \" accept=\".gif, .jpg, .png, .doc,.svg,.pdf,.csv|image/*\">\n            </div></div>\n            <div> <div class=\"pt102\"  style=\"display:none;\">\n              <label class=\"p_title\"> Payment Method<span class=\"text-danger\">*</span></label>\n              <select class=\"select wid100\" name=\"payment_method\" id=\"payment_method\"\n                [(ngModel)]=\"model.payment_method\"   #payment_method=\"ngModel\"\n                required>\n                  <option value=\"\">Select Payment Method</option>\n                  <option value=\"Cash\">Cash</option>\n                  <option value=\"Cheque\">Cheque</option>\n                  <option value=\"Card\">Card</option>\n                  <option value=\"Others\">Others</option>\n                </select>\n            </div></div>\n          </div> \n          </div>\n       </div>\n     \n      </div>\n     \n      </form>\n      \n       <div class=\"white bottom_button bottom_pagignation\">\n        <div class=\"display w98\">\n          <div> <button class=\"blue_button cancel\" routerLink=\"/view/inventory-management/sale-item\">Back </button>\n          </div>\n          <div style=\"margin-bottom: 10px;\">\n            <button class=\"blue_button\" (click)=\"saveSaleDetails()\" *ngIf=\"!isedit\">Add Sale</button>\n            <button class=\"blue_button\" (click)=\"updateSaleData()\" *ngIf=\"isedit\">Update</button>\n          </div>\n        </div>\n      <!-- pagignation div -->\n      \n    </div>\n     \n          <!-- use image only when page is empty,table body class element will not be present -->\n\n</div> \n  <div class=\"modal\" id=\"addpayModal\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\" >Add Payment</h4>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        </div>\n        <div class=\"modal-body\">\n          <div class=\"flex\">\n            <div class=\"sec1\">\n              <div class=\"pt10\">\n                  <input type=\"Date\" class=\"input wid100\" name=\"\" placeholder=\"Date*\">\n              </div>\n              <div class=\"pt10\">\n                  <select class=\"select wid100\">\n                    <option>Payment Method*</option>\n                  </select>\n              </div>\n              <div class=\"pt10\">\n                  <input type=\"File\" class=\"input wid100\" name=\"\" placeholder=\"Date*\">\n              </div>\n            </div>\n            <div class=\"sec2\">\n              <div class=\"pt10\">\n                  <input type=\"text\" class=\"input wid100\" name=\"\" placeholder=\"Refrence No.\">\n              </div>\n              <div class=\"pt10\">\n                  <input type=\"text\" class=\"input wid100\" name=\"\" placeholder=\"Amount*\">\n              </div>\n             \n            </div>\n          </div>\n          <div class=\"pt10\">\n            <button class=\"right blue_button\">Save</button>\n          </div>\n        </div>        \n      </div>\n    </div>\n  </div>\n  \n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/inventory-module/sale-item/sale-item.component.html":
    /*!**********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/inventory-module/sale-item/sale-item.component.html ***!
      \**********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsInventoryModuleSaleItemSaleItemComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"page-content\">\n    <div class=\"head_padding\">\n      <div class=\"w98 display\">\n        <div class=\"page_heading\">\n          <p>Sale Item</p>\n        </div>\n        <div>\n          <a routerLink=\"../sale-add\">\n            <button class=\"blue_button\" >Add Sale</button>\n           </a>\n        </div>\n      </div>\n    </div>\n      <div class=\"w98\">\n        <div class=\"pt15 display\" style=\"padding-bottom: 15px;\">\n          <div style=\"display: flex;\">\n            <input type=\"text\" class=\"input wid240 mr10 magnifying-glass\"  placeholder=\"Search\"\n            #search [(ngModel)]=\"searchParams\"\n            name=\"searchParams\" (keyup)=\"searchDatabase()\">\n             <p style=\"padding-top: 1%;\"><span style=\"font-style: bold;color:black;font-weight: 600;\">Note <span style=\"font-style: bold;color:red\">*</span> :</span> Faculty having multiple role, will get displayed only in <span style=\"font-style: bold;color:black;font-weight: 600;\">Faculty</span> list while in Sales/ Allocate.</p>\n            \n          </div>\n          <div class=\"hourlydiv\">\n            <!-- <p style=\"height:15px;visibility: hidden;\">fhgf</p> -->\n            <!-- <p><span style=\"font-style: bold;color:black;font-weight: 600;\">Note <span style=\"font-style: bold;color:red\">*</span> :</span> Faculty having multiple role, will get displayed only in <span style=\"font-style: bold;color:black;font-weight: 600;\">Faculty</span> list while in Sales/ Allocate.</p> -->\n          </div>\n          <div class=\"right\">\n                                <!--   <a (click)=\"copydata()\" class=\"mr10\"><img src=\"../../../../assets/img1/copy2.svg\" title=\"Copy\"></a>\n                <a href=\"\" class=\"mr10\"><img src=\"../../../../assets/img1/csv.svg\" title=\"CSV\"></a>-->\n                <a (click)=\"downloadPdf()\" class=\"mr10\"><img src=\"../../../../assets/img1/pdf.svg\" title=\"PDF Preview\"></a>\n                <a (click)=\"exportToExcel()\" class=\"mr10\"><img src=\"../../../../assets/img1/excel.svg\" title=\"Excel Download\"></a>\n          </div> \n        </div>\n        <div class=\"sale\">\n            <div class=\"table_heading\">\n              <!-- <div>#</div> -->\n              <div style=\"padding-left:20px;\">\n               Reference No.\n              </div>\n              <!-- <div>Item<span class=\"space33\"><img src=\"../../../../assets/img1/down1a.svg\"></span> </div> -->\n              <div>\n              Role\n              </div>\n              <div>User</div>\n              <div>Date</div>\n              <!-- <div>Sale Type<span class=\"space33\"><img src=\"../../../../assets/img1/down1a.svg\"></span></div> -->\n             \n              <div style=\"text-align: center;\">Grand Total&nbsp;(&nbsp;<i class=\"fa fa-inr\"></i>&nbsp;)</div>\n              <div style=\"text-align: center;\">Paid&nbsp;(&nbsp;<i class=\"fa fa-inr\"></i>&nbsp;)</div>\n              <div style=\"text-align: center;\">Balance &nbsp;(&nbsp;<i class=\"fa fa-inr\"></i>&nbsp;)</div>\n              <div style=\"text-align: center;\">Actions</div>\n            </div>\n            <div class=\"table_body\" *ngFor=\"let data of staticPageData;index as i \">\n              <!-- <div>{{i + 1}}</div> -->\n              <!-- <div><a href=\"{{data.bill_image_url}}\" target=\"_blank\" download>\n                <img src=\"{{data.bill_image_url}}\" height=\"40\"width=\"40\"></a></div> -->\n              <div style=\"padding-left:20px;\">\n           {{data.reference_number | replacenull}}\n              </div>\n              <!-- <div>\n             {{data.item_name}}\n              </div> -->\n              <div>{{data.role_name}}</div>\n              <div>\n                {{data.user_name}}\n              </div>\n              <div>\n            {{data.sale_date| date: 'dd-MMM-yyyy'}}\n              </div>\n              <!-- <div>\n             {{data.sale_type}}\n              </div> -->\n             \n              <div style=\"text-align: center;\">\n               {{data.total_amount}}\n              </div>\n             <div style=\"text-align: center;\">\n           {{data.total_paid_amount}}\n             </div>\n             <div style=\"text-align: center;\">\n              {{data.balanced_amount}}\n             </div>\n              <div style=\"text-align: center;\">\n               <div class=\"dropdown1\">\n                  <img src=\"../../../../assets/img1/menu.svg\" class=\"dot3\">\n                    <div class=\"dropdown-content1\">\n                      <a (click)=\"viewNavigate(data.sale_id)\">View</a>\n                     \n                      <a  [routerLink]=\"['/view/inventory-management/editSale/', data.sale_id]\"  *ngIf=\"data.total_amount==data.balanced_amount\" >Edit</a>\n                   \n                      <a (click)='showConfirm(data)' *ngIf=\"data.total_amount == data.balanced_amount\" >Delete</a> \n                     \n                      <a  *ngIf=\"data.total_amount !=data.balanced_amount\"  (click)=\"cancelData(data.sale_id)\">Cancel</a>\n                     \n                      <a (click)=\"showAddPaymentModel(data)\" *ngIf=\"data.balanced_amount!=0\">Add Payment</a>\n                     \n                      <a  (click)=\"getPaymentHistory(data.sale_id)\">View Payment History</a>\n                    \n                    </div>\n                   \n                </div>\n              </div>\n            </div>\n            <section class=\"no-data\" *ngIf=\"staticPageData.length == 0\">\n              <div class=\"illustration-container\">\n                <img alt=\"illustration\" class=\"illustration-img\" src=\"./assets/images/course_planner/blank-illustration.svg\">\n              </div>\n            </section>\n       </div>\n      </div>\n      <div style=\"margin-top: 20px;\">\n      <pagination (goPage)=\"fetchTableDataByPage($event)\" (goNext)=\"fetchNext()\" (goPrev)=\"fetchPrevious()\"\n      [pagesToShow]=\"10\" [page]=\"pageIndex\" [perPage]=\"displayBatchSize\" [sizeArr]=\"sizeArr\"\n      [count]=\"totalRecords\" (sizeChange)=\"updateTableBatchSize($event)\">\n  </pagination> \n</div>\n     <!-- <div class=\"white bottom_button bottom_pagignation\">\n     \n        <div class=\" flex w98\">\n          <div class=\"w20\">\n            <p>Showing <span>1</span> to <span>100</span> of <span>831</span></p>\n          </div>\n          <div class=\"w10\">\n            <p>Total <span>9</span> Pages</p>\n          </div>\n          <div class=\"w40\">\n            <p>Records per Page  \n              <select>\n              <option>9</option>\n              </select>\n            </p>\n          </div>\n          <div class=\"w30\" >\n           <span> <p>Previous <a><span class=\"active_circle number\" >1</span></a> <a><span class=\"number\">2</span></a> <a><span class=\"number\">3</span></a> <a><span class=\"next\">Next</span></a></p></span>\n          </div>\n        </div>\n      </div>-->\n          <!-- use image only when page is empty,table body class element will not be present -->\n\n</div> \n <div class=\"modal\" id=\"addpayModal\" data-backdrop=\"static\"> \n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Add Payment</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" \n        (click)=\"cancel()\">&times;</button>\n      </div>\n      <form #addform=\"ngForm\">\n      <div class=\"modal-body\">\n        <div class=\"flex\">\n          <div class=\"sec1\">\n            <div class=\"pt10\"  [class.has-error]=\"payment_date.invalid && payment_date.touched\">\n              <label class=\"p_title\"> Date<span class=\"text-danger\">*</span></label>\n               <input type=\"Date\" class=\"input wid100\" [(ngModel)]=\"paymentModel.payment_date\"\n                name=\"payment_date\" placeholder=\"Date*\"\n                (change)=\"validateFutureDate($event)\"\n                #payment_date=\"ngModel\" required>\n            </div>\n            <!-- <p class=\"errormsg\"><span  style=\"height:10px;\" class=\"help-block\"\n               *ngIf=\"!payment_date.valid && payment_date.touched\">\n             Date is  mandatory\n           </span></p> -->\n            <div class=\"pt10\"  [class.has-error]=\"payment_method.invalid && payment_method.touched\">\n              <label class=\"p_title\"> Payment Method<span class=\"text-danger\">*</span></label>\n               <select class=\"select wid100\" name=\"payment_method\" id=\"payment_method\"\n                [(ngModel)]=\"paymentModel.payment_method\"   #payment_method=\"ngModel\"\n                required>\n                  <option value=\"\">Select Payment Method</option>\n                  <option value=\"Cash\">Cash</option>\n                  <option value=\"Cheque\">Cheque</option>\n                  <option value=\"Card\">Card</option>\n                  <option value=\"Others\">Others</option>\n                </select>\n            </div>\n            <!-- <p class=\"errormsg\"> <span  style=\"height:10px;\"  *ngIf=\"!payment_method.valid && payment_method.touched\"\n              class=\"help-block\">\n              Payment method is mandatory\n             </span></p> -->\n            <div class=\"pt10\">\n              <label class=\"p_title\"> Upload Receipt</label>\n                <input type=\"File\" class=\"input wid100\" placeholder=\"Date*\"\n                type=\"File\" class=\"input wid100\" name=\"billImageFile\" placeholder=\"Date*\" name=\"billImageFile\"\n            [disabled]=\"bill_image_url!=''&& isedit\" id=\"billImageFile\" style=\"margin-top:8px;\"\n            [(ngModel)]=\"bill_image_url\" accept=\".gif, .jpg, .png, .doc,.svg,.pdf,.csv|image/*\">\n            </div>\n            <!-- <p class=\"errormsg\"> <span  style=\"height:10px;\"  class=\"help-block\">\n\n             </span></p> -->\n          </div>\n          <div class=\"sec2\">\n            <div class=\"pt10\">\n              <label class=\"p_title\"> Reference No.<span class=\"text-danger\">*</span></label>\n                <input type=\"text\" class=\"input wid100\" name=\"reference_no\" [(ngModel)]=\"paymentModel.reference_no\" \n                placeholder=\"Enter Reference Number\">\n            </div>\n            \n            <!-- <p class=\"errormsg\"> <span  style=\"height:10px;\"  class=\"help-block\">\n\n            </span></p> -->\n            <div class=\"pt10\" [class.has-error]=\"paid_amount.invalid && paid_amount.touched\">\n              <label class=\"p_title\"> Amount<span class=\"text-danger\">*</span></label>\n              <input type=\"text\" class=\"input wid100\" id=\"paid_amount\" name=\"paid_amount\" placeholder=\"Enter Amount\"\n                #paid_amount=\"ngModel\"  onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57) ||  \n                event.charCode == 46 || event.charCode == 0 \"\n                required\n                [(ngModel)]=\"paymentModel.paid_amount\">\n            </div>\n            <!-- <p class=\"errormsg\"> <span  style=\"height:10px;\"  \n              *ngIf=\"!paid_amount.valid && paid_amount.touched\"\n              [(ngModel)]=\"paymentModel.paid_amount\"\n              class=\"help-block\">\n              Amount* is mandatory\n             </span></p> -->\n          </div>\n        </div>\n        <div class=\"pt10 display\">\n         <div></div>\n         <div>\n          <button class=\"blue_button cancel\" data-dismiss=\"modal\">Cancel</button> \n           <button class=\"blue_button\" (click)=\"addPayment()\">Update</button></div>\n        </div>\n      </div>  \n      </form>      \n    </div>\n  </div>\n</div> \n  <div class=\"modal\" id=\"viewpayModal\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\" >Payment History</h4>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        </div>\n        <div class=\"modal-body scrollable\">\n          <div class=\"history\">\n            <div class=\"table_heading\" style=\"line-height: 30px;\">\n              <div style=\"padding-left: 10px;\"> \n                #\n              </div>\n              <div>Date </div>\n              <div>\n               Reference No\n              </div>\n              <div>Amount</div>\n              <div>Paid By</div>\n              <div>File</div>\n            </div>\n            <div class=\"table_body\" style=\"margin:-3px 0px;padding:10px\" *ngFor=\"let data of paymentHistoryData;index as i\">\n              <div  style=\"padding-left: 10px;\">\n               {{i+1}}\n              </div>\n              <div>\n              {{data.payment_date}}\n              </div>\n              <div>{{data.reference_no}}</div>\n              <div>\n              {{data.paid_amount}}\n              </div>\n              <div>\n              {{data.payment_method}}\n              </div>\n              <div>\n               <span class=\"file_name\">\n                <a *ngIf=\"data.bill_image_url==null \"  class=\"mr10\">--</a>\n            \n                <a  *ngIf=\"data.bill_image_url!=null \" href=\"{{data.bill_image_url}}\" class=\"mr10\"><img src=\"../../../../assets/images/View.png\" title=\"View Receipt\"></a>\n              </span>\n              </div>\n            </div>\n        </div>\n        </div>        \n      </div>\n    </div>\n  </div>\n  <div class=\"modal\" id=\"deletesModal\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        </div>\n        <div class=\"modal-body\">\n          <div class=\"center\">\n            <span><img src=\"../../../assets/img1/alert.svg\"></span><span class=\"alert\">Alert</span>\n          </div>\n         <div><p class=\"center\"> Do you want\n           to proceed ?</p>\n          </div> \n          <div class=\"pt101 display\">\n            <div>\n              <button class=\"white_button right\"data-dismiss=\"modal\">Cancel</button>\n            </div>\n            <div>\n              <button class=\"blue_button right\" (click)=\"deleteRow(tempObj)\">Proceed</button>\n            </div>\n          </div>\n        </div>        \n      </div>\n    </div>\n  </div>\n  <router-outlet></router-outlet>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/inventory-module/sale-view/sale-view.component.html":
    /*!**********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/inventory-module/sale-view/sale-view.component.html ***!
      \**********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsInventoryModuleSaleViewSaleViewComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"page-content\">\n    <div class=\"head_padding\">\n      <div class=\"w98 display\">\n        <div class=\"page_heading\">\n          <p>Sale Item</p>\n        </div>\n        <div>\n          <!-- <a href=\"\" class=\"mr10\"><img src=\"../../../../assets/img1/card.svg\" title=\"Card Details\" ></a>\n          <a href=\"\" class=\"mr10\"><img src=\"../../../../assets/img1/edit.svg\" title=\"Edit\" class=\"group18\"></a>\n          <a href=\"\" class=\"mr10\"><img src=\"../../../../assets/img1/email.svg\" title=\"Send To Email\"></a> -->\n          <a  *ngIf=\"DataForView.bill_image_url?.length !=0\" href=\"{{DataForView.bill_image_url}}\"  target=\"_blank\" class=\"mr10\"><img src=\"../../../../assets/images/viewicon.png\" title=\"View Bill Copy\"></a>\n        \n          <a (click)=\"printData('divforPrint')\"  class=\"mr10\"><img src=\"../../../../assets/img1/print.svg\" title=\"Print\"></a>\n</div>\n      </div>\n    </div>\n    <br>\n    <div id=\"divforPrint\" class=\"printdata\">\n      <div class=\"flex30\">\n         <div class=\"flex\">\n           <div class=\"name2\">From:</div>\n           <div class=\"value2\">{{DataForView.institute_name}}</div>\n         </div>\n         <div class=\"flex\">\n           <div class=\"name2\">To:</div>\n           <div class=\"value2\">{{DataForView.user_name}}</div>\n         </div>\n          <div class=\"display\">\n      <div></div>\n      <div class=\"right created_date created\">\n       <b class=\"name2\"> Created Date :</b> <b >{{DataForView.created_date | date : \"d MMMM, y\" }}</b>\n      </div>\n    </div>\n         \n      </div>\n      <div class=\"flex30\">\n        <div class=\"flex\">\n           <div class=\"name2\">Reference&nbsp;No:</div>\n           <div class=\"value2 val\">{{DataForView.reference_number | replacenull }}</div>\n         </div>\n         <div class=\"flex\">\n           <div class=\"name2\"style=\"width: 34%;\">Mobile:</div>\n           <div class=\"value2\">{{DataForView.user_phone}}</div>\n         </div>\n         <!-- <div class=\"flex\">\n           <div class=\"name2\">Role:</div>\n           <div class=\"value2\">Student</div>\n         </div> -->\n         \n      </div>\n      <div class=\"flex30\" style=\"text-align: justify;\">\n         <div class=\"flex\">\n           <div class=\"name2\">Email:</div>\n           <div class=\"value2\">{{DataForView.institute_email}}</div>\n         </div>\n        <div class=\"flex\">\n          <div class=\"name2\">Email:</div>\n          <div class=\"value2\">{{DataForView.user_email}}</div>\n        </div>\n         <div class=\"flex\">\n           <div class=\"name2\" style=\"width: 30%;\">Payment&nbsp;Status:&nbsp;&nbsp;</div>\n           <div class=\"value2 val\" >{{DataForView.payment_status}}</div>\n         </div>\n      </div>\n      <div class=\"flex30\">\n        <div class=\"flex\">\n          <div class=\"name2\" style=\"width: 34%;\">Mobile:</div>\n          <div class=\"value2\">{{DataForView.institute_phone}}</div>\n        </div>\n      </div> \n      <br><br>\n      <div class=\"w98\">\n      <div class=\"item\">\n         <div class=\"tablehead thead\">\n              <div>\n                Item\n              </div>\n              <div>\n                Unit Price\n              </div>\n              <div>\n                Units\n              </div>\n              <div>\n                Subtotal\n              </div>\n            </div>\n            <div class=\"tablebody tbody\" *ngFor=\"let data of DataForView.sale_item_list\">\n              <div>\n              {{data.item_name}}\n              </div>\n              <div>\n              {{data.unit_price}}\n              </div>\n              <div>\n               {{data.quantity}}\n              </div>\n              <div>\n               {{data.unit_price * data.quantity}}\n              </div>\n             \n            </div>\n            <div class=\"tabletotal totalss\">\n              <div>\n                \n              </div>\n              <div>\n               \n              </div>\n              <div>\n               Total Amount\n              </div>\n              <div>\n               {{DataForView.total_amount}}\n              </div>\n           \n            </div>\n            <div class=\"tabletotal\">\n              <div>\n                \n              </div>\n              <div>\n               \n              </div>\n              <div>\n               Paid (GHS)\n              </div>\n              <div>\n                {{DataForView.total_paid_amount}}\n              </div>\n              \n            </div>\n            <div class=\"tabletotal\">\n              <div>\n                \n              </div>\n              <div>\n               \n              </div>\n              <div>\n                Balance (GHS)\n              </div>\n              <div>\n                {{DataForView.balanced_amount}}\n              </div>\n          \n            </div>\n      </div>   \n    </div>\n    <br>\n    <br>\n    <div  style=\"float:left;margin:10px;\" class=\"backbtn\"> <button class=\"blue_button cancel\" routerLink=\"/view/inventory-management/sale-item\">Back </button>\n    </div>\n    </div>\n</div> \n  <!-- <div class=\"modal\" id=\"addpayModal\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\" >Add Payment</h4>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        </div>\n        <div class=\"modal-body\">\n          <div class=\"flex\">\n            <div class=\"sec1\">\n              <div class=\"pt10\">\n                  <input type=\"Date\" class=\"input wid100\" name=\"\" placeholder=\"Date*\">\n              </div>\n              <div class=\"pt10\">\n                  <select class=\"select wid100\">\n                    <option>Payment Method*</option>\n                  </select>\n              </div>\n              <div class=\"pt10\">\n                  <input type=\"File\" class=\"input wid100\" name=\"\" placeholder=\"Date*\">\n              </div>\n            </div>\n            <div class=\"sec2\">\n              <div class=\"pt10\">\n                  <input type=\"text\" class=\"input wid100\" name=\"\" placeholder=\"Refrence No.\">\n              </div>\n              <div class=\"pt10\">\n                  <input type=\"text\" class=\"input wid100\" name=\"\" placeholder=\"Amount*\">\n              </div>\n             \n            </div>\n          </div>\n          <div class=\"pt10\">\n            <button class=\"right blue_button\">Save</button>\n          </div>\n        </div>        \n      </div>\n    </div>\n  </div> -->\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/inventory-module/supplier/supplier.component.html":
    /*!********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/inventory-module/supplier/supplier.component.html ***!
      \********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsInventoryModuleSupplierSupplierComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"page-content\">\n    <div class=\"head_padding\">\n      <div class=\"w98 display\">\n        <div class=\"page_heading\">\n          <p>Supplier Management</p>\n        </div>\n        <div>\n\n            <button class=\"blue_button\" data-toggle=\"modal\" data-target=\"#add1Modal\">Add Supplier</button>\n            <!-- Two Diffrent Button On Tab Change -->\n        </div>\n      </div>\n      </div>\n      <div class=\"w98\">\n        <div class=\"pt15 display\">\n          <div>\n            <input type=\"text\" class=\"input wid240 mr10 magnifying-glass\" #search [(ngModel)]=\"searchParams\"\n            name=\"searchParams\" (keyup)=\"searchDatabase()\" placeholder=\"Search\">\n          </div>\n          <div >\n                <!-- <a href=\"\" class=\"mr10\"><img src=\"../../../assets/img1/copy2.svg\" title=\"Copy\"></a>\n                <a href=\"\" class=\"mr10\"><img src=\"../../../assets/img1/csv.svg\" title=\"CSV\"></a> -->\n                <a (click)=\"downloadPdf()\" class=\"mr10\"><img src=\"../../../assets/img1/pdf.svg\" title=\"PDF Preview\"></a> \n                <a (click)=\"exportToExcel()\" class=\"mr10\"><img src=\"../../../assets/img1/excel.svg\" title=\"Excel Download\"></a>\n            </div>\n        </div>\n        <app-basic-table [headers]=\"headerSetting\" [tableSetting]=\"tableSetting\" [displayData]=\"staticPageData\"\n        [rowColumnSetting]=\"rowColumns\" (editView)='editRow($event)' (deleteView)='showConfirm($event)'\n        (viewView)=\"viewRow($event)\">\n        </app-basic-table>\n        \n      </div>\n      <pagination (goPage)=\"fetchTableDataByPage($event)\" (goNext)=\"fetchNext()\" (goPrev)=\"fetchPrevious()\"\n      [pagesToShow]=\"10\" [page]=\"pageIndex\" [perPage]=\"displayBatchSize\" [sizeArr]=\"sizeArr\"\n      [count]=\"totalRecords\" (sizeChange)=\"updateTableBatchSize($event)\">\n   </pagination>\n   \n            <!-- use image only when page is empty,table body class element will not be present -->\n\n</div> \n  <div class=\"modal\" id=\"add1Modal\" data-backdrop=\"static\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\" *ngIf=\"!isedit\" >Add Supplier</h4>\n          <h4 class=\"modal-title\" *ngIf=\"isedit\">Update Supplier</h4>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        </div>\n        <div class=\"modal-body\">\n          <form #addVendorForm =\"ngForm\" autocomplete=\"off\">\n          <div class=\"flex\">\n            <div class=\"sec1\">\n              <div class=\"pt10\"  [class.has-error]=\"company_name.invalid && company_name.touched\">\n                <label class=\"p_title\"> Company<span class=\"text-danger\">*</span></label>\n                <input type=\"text\" class=\"input wid100\" id=\"company_name\" (keyup)=\"maxlenth(model.company_name,30)\" name=\"company_name\" placeholder=\"Enter Company Name\"  [(ngModel)]=\"model.company_name\"\n                #company_name=\"ngModel\" required>\n            </div>\n            <!-- <p class=\"errormsg\"><span  style=\"height:10px;\" class=\"help-block\" *ngIf=\"!company_name.valid && company_name.touched\">\n              Company  name is mandatory\n           </span></p> -->\n              <div class=\"pt10\">\n                <label class=\"p_title\"> Email Id<span class=\"text-danger\">*</span></label>\n                <input type=\"text\" class=\"input wid100\" id=\"email_id\" name=\"email_id\" placeholder=\" For Ex. abc@gmail.com\"  [(ngModel)]=\"model.email_id\"\n                #email_id=\"ngModel\"  pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\" email> </div>\n               \n             <p  class=\"errormsg\">\n                       <span class=\"help-block\" *ngIf=\"email_id.errors?.pattern\">Please enter a valid email address !</span>\n                       </p>\n             </div>\n            <div class=\"sec2\">\n              <div class=\"pt10\"  [class.has-error]=\"supplier_name.invalid && supplier_name.touched\">\n                <label class=\"p_title\"> Supplier<span class=\"text-danger\">*</span></label>\n                <input type=\"text\" class=\"input wid100\" id=\"supplier_name\" (keyup)=\"maxlenth(model.supplier_name,30)\" name=\"supplier_name\" placeholder=\"Enter Supplier Name\"  [(ngModel)]=\"model.supplier_name\"\n                #supplier_name=\"ngModel\" required>\n            </div>\n            <!-- <p class=\"errormsg\"><span  style=\"height:10px;\" class=\"help-block\" *ngIf=\"!supplier_name.valid && supplier_name.touched\">\n              Supplier  name is mandatory\n           </span></p> -->\n           <div class=\"pt10\" [class.has-error]=\"phone_no.invalid && phone_no.touched\" >\n            <label class=\"p_title\"> Mobile <span class=\"text-danger\">*</span></label>\n           <input type=\"text\" class=\"input wid100\" id=\"unit_cost\" \n            name=\"phone_no\" placeholder=\"Enter Mobile Number\"  maxlength=\"10\"\n            #phone_no=\"ngModel\" \n            (change)=\"validateMobile(this.model.phone_no)\"\n            [(ngModel)]=\"model.phone_no\"\n           onkeypress=\" return (event.charCode >= 48 && event.charCode <= 57)\" \n            required>\n        </div>\n         <!--  <span class=\"help-block\" *ngIf=\"!phone_no.valid && phone_no.touched\">\n          Mobile number is mandatory\n      </span> -->\n      <p  class=\"errormsg\">\n     <span class=\"help-block\"  *ngIf=\"phone_no.errors?.minlength\">   Please  10 digit mobile number</span>\n    </p>  \n    <!-- <div class=\"pt10\">\n      <label class=\"p_title\"> Item <span class=\"text-danger\">*</span></label>\n     <ng-multiselect-dropdown placeholder=\"Select Item\" [(ngModel)]=\"model.item_ids\"\n        [data]=\"itemAgainstCata\" [settings]=\"moderatorSettingsforitem\" name=\"item_ids\">\n       </ng-multiselect-dropdown>\n      </div>  -->\n       </div>\n          </div>\n          <div class=\"pt10\">\n            <label class=\"p_title\"> Address</label>\n         <input type=\"text\" class=\"input wid100\" name=\"address\" id=\"address\"\n            [(ngModel)]=\"model.address\"  (keyup)=\"maxlenth(model.address,70)\" placeholder=\"Enter company address\">\n          </div>\n          <div class=\"pt10 display\">\n           <div></div>\n           <div>\n            <button class=\"right blue_button cancel\" data-dismiss=\"modal\" (click)=\"cancel(false)\" >Cancel</button>\n              <button class=\"right blue_button\" *ngIf=\"!isedit\" (click)=\"saveSupplierDetails(model)\">Add Supplier</button>\n              <button class=\"right blue_button\"  *ngIf=\"isedit\" (click)=\"updateSupplierDetails(model)\">Update</button></div>\n           </div>\n        </form>\n        </div>        \n      </div>\n    </div>\n  </div>\n  <div class=\"modal\" id=\"deletesModal\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" (click)=\"cancel(false)\">&times;</button>\n        </div>\n        <div class=\"modal-body\">\n          <div class=\"center\">\n            <span><img src=\"../../../assets/img1/alert.svg\"></span><span class=\"alert\">Alert</span>\n          </div>\n         <div><p class=\"center\"> Do you want\n           to proceed ?</p>\n          </div> \n          <div class=\"pt101 display\">\n            <div>\n              <button class=\"white_button right\"data-dismiss=\"modal\" (click)=\"cancel(false)\">Cancel</button>\n            </div>\n            <div>\n              <button class=\"blue_button right\" (click)=\"deleteRow(tempObj)\">Proceed</button>\n            </div>\n          </div>\n        </div>        \n      </div>\n    </div>\n  </div>\n";
      /***/
    },

    /***/
    "./src/app/components/inventory-module/inventory-module-routing.module.ts":
    /*!********************************************************************************!*\
      !*** ./src/app/components/inventory-module/inventory-module-routing.module.ts ***!
      \********************************************************************************/

    /*! exports provided: InventoryModuleRoutingModule */

    /***/
    function srcAppComponentsInventoryModuleInventoryModuleRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InventoryModuleRoutingModule", function () {
        return InventoryModuleRoutingModule;
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


      var _inventory_module_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./inventory-module.component */
      "./src/app/components/inventory-module/inventory-module.component.ts");
      /* harmony import */


      var _supplier_supplier_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./supplier/supplier.component */
      "./src/app/components/inventory-module/supplier/supplier.component.ts");
      /* harmony import */


      var _item_cm_item_cm_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./item-cm/item-cm.component */
      "./src/app/components/inventory-module/item-cm/item-cm.component.ts");
      /* harmony import */


      var _purchase_item_purchase_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./purchase-item/purchase-item.component */
      "./src/app/components/inventory-module/purchase-item/purchase-item.component.ts");
      /* harmony import */


      var _purchase_add_purchase_add_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./purchase-add/purchase-add.component */
      "./src/app/components/inventory-module/purchase-add/purchase-add.component.ts");
      /* harmony import */


      var _purchase_view_purchase_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./purchase-view/purchase-view.component */
      "./src/app/components/inventory-module/purchase-view/purchase-view.component.ts");
      /* harmony import */


      var _sale_item_sale_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./sale-item/sale-item.component */
      "./src/app/components/inventory-module/sale-item/sale-item.component.ts");
      /* harmony import */


      var _sale_add_sale_add_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./sale-add/sale-add.component */
      "./src/app/components/inventory-module/sale-add/sale-add.component.ts");
      /* harmony import */


      var _sale_view_sale_view_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./sale-view/sale-view.component */
      "./src/app/components/inventory-module/sale-view/sale-view.component.ts");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var routes = [];

      var InventoryModuleRoutingModule =
      /** @class */
      function () {
        var InventoryModuleRoutingModule = function InventoryModuleRoutingModule() {
          _classCallCheck(this, InventoryModuleRoutingModule);
        };

        InventoryModuleRoutingModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
            path: '',
            component: _inventory_module_component__WEBPACK_IMPORTED_MODULE_2__["InventoryModuleComponent"],
            pathMatch: 'prefix',
            children: [{
              path: '',
              redirectTo: 'item'
            }, {
              path: 'supplier',
              component: _supplier_supplier_component__WEBPACK_IMPORTED_MODULE_3__["SupplierComponent"]
            }, {
              path: 'item-cm',
              component: _item_cm_item_cm_component__WEBPACK_IMPORTED_MODULE_4__["ItemCmComponent"]
            }, {
              path: 'purchase-item',
              component: _purchase_item_purchase_item_component__WEBPACK_IMPORTED_MODULE_5__["PurchaseItemComponent"]
            }, {
              path: 'purchase-add',
              component: _purchase_add_purchase_add_component__WEBPACK_IMPORTED_MODULE_6__["PurchaseAddComponent"]
            }, {
              path: 'edit/:id',
              component: _purchase_add_purchase_add_component__WEBPACK_IMPORTED_MODULE_6__["PurchaseAddComponent"]
            }, {
              path: 'purchase-view',
              component: _purchase_view_purchase_view_component__WEBPACK_IMPORTED_MODULE_7__["PurchaseViewComponent"]
            }, {
              path: 'sale-item',
              component: _sale_item_sale_item_component__WEBPACK_IMPORTED_MODULE_8__["SaleItemComponent"]
            }, {
              path: 'sale-add',
              component: _sale_add_sale_add_component__WEBPACK_IMPORTED_MODULE_9__["SaleAddComponent"]
            }, {
              path: 'sale-view',
              component: _sale_view_sale_view_component__WEBPACK_IMPORTED_MODULE_10__["SaleViewComponent"]
            }, {
              path: 'editSale/:id',
              component: _sale_add_sale_add_component__WEBPACK_IMPORTED_MODULE_9__["SaleAddComponent"]
            }]
          }])],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })], InventoryModuleRoutingModule);
        return InventoryModuleRoutingModule;
      }();
      /***/

    },

    /***/
    "./src/app/components/inventory-module/inventory-module.component.scss":
    /*!*****************************************************************************!*\
      !*** ./src/app/components/inventory-module/inventory-module.component.scss ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsInventoryModuleInventoryModuleComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "* {\n  margin: 0px;\n}\n\nbody {\n  font-family: 'Open Sans', sans-serif;\n}\n\n.flex {\n  display: flex;\n}\n\n.blue_button {\n  background-color: #109CF1;\n  color: white;\n  padding: 0px 20px;\n  font-size: 13px;\n  border: none;\n  border-radius: 5px;\n  font-weight: 600;\n  line-height: 35px;\n  cursor: pointer;\n}\n\n.white_button {\n  background-color: #fff;\n  color: #109CF1;\n  padding: 0px 20px;\n  font-size: 12px;\n  border: 1px solid #109CF1;\n  border-radius: 5px;\n  font-weight: 500;\n  line-height: 35px;\n  cursor: pointer;\n}\n\n.select {\n  padding: 7px 20px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-size: 12px;\n  font-weight: 500;\n  color: #787A7D;\n}\n\n.input {\n  padding: 7px 20px;\n  font-size: 12px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-weight: 500;\n  height: 35px;\n}\n\ninput:focus, select:focus, button:focus {\n  outline: none;\n}\n\n.page_heading > p {\n  color: #334D6E;\n  font-weight: 600;\n  font-size: 14px;\n  margin-bottom: 0px;\n}\n\n.flex {\n  display: flex;\n}\n\n.display {\n  display: flex;\n  justify-content: space-between;\n}\n\n.w98 {\n  width: 98%;\n  margin: 0px auto;\n}\n\n.head_padding {\n  box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  -webkit-box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  -moz-box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  padding: 15px 0px;\n}\n\n.pageheadingspace {\n  margin-bottom: 7px;\n}\n\n.table_heading {\n  width: 100%;\n  background-color: #DFE5F0;\n  /* padding: 10px 0px;*/\n  display: flex;\n  border-radius: 5px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);\n}\n\n.table_heading > div {\n  text-align: center;\n  font-weight: 600;\n  font-size: 12px;\n  color: #323C47;\n  line-height: 35px;\n  text-align: left;\n}\n\n.table_body {\n  width: 100%;\n  display: flex;\n  border-radius: 5px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);\n  text-align: left;\n  line-height: 18px;\n}\n\n.table_body > div {\n  text-align: left;\n  font-weight: 500;\n  font-size: 12px;\n  color: #323C47;\n  /* padding: 5px 0px;*/\n  margin: auto;\n  line-height: 18px;\n}\n\n.mr10 {\n  margin-right: 10px;\n}\n\n.w240 {\n  width: 240px;\n}\n\n.item_cat .table_body > div, .item_cat .table_heading > div {\n  width: calc((100% - 250px) / 2);\n}\n\n.item_cat .table_heading > div:first-child, .item_cat .table_body > div:first-child {\n  width: 50px;\n}\n\n.item_cat .table_heading > div:last-child, .item_cat .table_body > div:last-child {\n  width: 200px;\n}\n\n.group18 {\n  width: 18px;\n  height: auto;\n}\n\n.pt15 {\n  padding-top: 15px;\n  padding-bottom: 5px;\n}\n\n.bottom_pagignation {\n  padding-top: 10px;\n  background-color: #fff;\n  position: fixed;\n  bottom: 0px;\n  z-index: 100;\n}\n\n.bottom_pagignation p {\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 20px;\n}\n\n.bottom_pagignation select {\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-size: 13px;\n  font-weight: 500;\n  color: #0079FF;\n  display: inline;\n}\n\n.bottom_pagignation .w20 {\n  width: 20%;\n}\n\n.bottom_pagignation .w10 {\n  width: 10%;\n}\n\n.bottom_pagignation .w50 {\n  width: 50%;\n}\n\n.bottom_pagignation .w40 {\n  width: 40%;\n}\n\n.number {\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 20px;\n  letter-spacing: 0.01em;\n  color: #000000;\n  margin: 0px 4px;\n}\n\n.active_circle {\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 20px;\n  letter-spacing: 0.01em;\n  color: #fff;\n  padding: 2px 7px;\n  border-radius: 50%;\n  background: #0079FF;\n}\n\n.next {\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 20px;\n  letter-spacing: 0.01em;\n  color: #0079FF;\n}\n\n.w450 {\n  width: 450px;\n}\n\n.white {\n  background-color: #fff;\n  width: calc(100% - 227px);\n  border-top: 3px solid #Ededed;\n}\n\n.nav-item .nav-link {\n  font-weight: 600;\n  color: #405877;\n  padding-bottom: 8px;\n  cursor: pointer;\n  font-size: 13px;\n}\n\n.nav-item .nav-link.active {\n  border-bottom: 3px solid #109CF1 !important;\n  color: #109CF1 !important;\n}\n\n.nav-link {\n  display: block;\n  padding: 1.5rem 0rem;\n  margin: -1rem 1.5rem;\n  margin-left: 0rem;\n}\n\n.flex {\n  display: flex;\n}\n\n.w15 {\n  width: 15%;\n  background-color: #DFE5F0;\n  padding: 10px;\n}\n\n.list > li {\n  background-color: #fff;\n  padding: 7px 0px;\n  margin: 7px 0px;\n}\n\n.list > li > a > span {\n  text-decoration: none;\n  font-size: 10px;\n  font-weight: 500;\n  color: #334D6E;\n}\n\n.list > li img {\n  padding: 0px 10px;\n}\n\n.magnifying-glass {\n  background-image: url(\"/assets/images/assets/Vector.svg\");\n  background-repeat: no-repeat;\n  background-position: left center;\n  text-indent: 10px;\n}\n\n.space33 {\n  padding-left: 5px;\n}\n\n.item_man .table_body > div, .item_man .table_heading > div {\n  width: calc((100% - 100px) / 8);\n}\n\n.item_man .table_heading > div:last-child, .item_man .table_body > div:last-child {\n  width: 100px;\n}\n\n.item_man .table_heading > div:nth-child(5), .item_man .table_heading > div:nth-child(6), .item_man .table_heading > div:nth-child(8) {\n  line-height: 18px;\n}\n\n.dropdown1 {\n  position: relative;\n  display: inline-block;\n  line-height: 35px;\n}\n\n.dropdown-content1 {\n  display: none;\n  position: absolute;\n  background-color: #fff;\n  min-width: 200px;\n  right: 3px;\n  margin-top: 20px;\n  top: -150px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1200;\n}\n\n.dropdown-content1 a {\n  color: black;\n  text-decoration: none;\n  display: block;\n}\n\n.dropdown-content1 a:hover {\n  background-color: #ddd;\n  border-radius: 5px;\n}\n\n.dropdown1:hover .dropdown-content1 {\n  display: block;\n}\n\n.dot3 {\n  padding: 10px 0px;\n  cursor: pointer;\n}\n\n.wid100 {\n  width: 100%;\n}\n\n.wid80 {\n  width: 80%;\n}\n\n.pt10 {\n  padding-bottom: 10px;\n}\n\ninput[type=\"date\"]::-webkit-calendar-picker-indicator {\n  color: rgba(0, 0, 0, 0);\n  opacity: 1;\n  display: block;\n  background: url('cal.svg') no-repeat;\n  width: 20px;\n  height: 20px;\n  border-width: thin;\n  padding: 2px 0px;\n}\n\ninput[type=\"date\"] {\n  color: #787A7D;\n  cursor: pointer;\n}\n\ninput:focus {\n  outline: none;\n}\n\nbutton:focus {\n  outline: none;\n}\n\n.modal textarea {\n  height: 100px;\n}\n\n.alert {\n  font-weight: 400;\n  font-size: 18px;\n  line-height: 27px;\n  letter-spacing: 0.01em;\n  color: #4D5869;\n}\n\n.alert_text {\n  text-align: justify;\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 19px;\n  letter-spacing: 0.01em;\n  color: #858585;\n  margin: 0px 40px;\n  margin-top: 20px;\n}\n\n.center {\n  text-align: center;\n}\n\n.center img {\n  width: 44px;\n  height: 34px;\n}\n\n#delete1Modal .modal-dialog, #deleteitemModal .modal-dialog {\n  width: 350px;\n}\n\n@media (min-width: 576px) {\n  #delete1Modal .modal-dialog, #deleteitemModal .modal-dialog {\n    max-width: 350px;\n  }\n}\n\n#deleteModal .modal-dialog {\n  width: 350px;\n}\n\n@media (min-width: 576px) {\n  #deleteModal .modal-dialog {\n    max-width: 350px;\n  }\n}\n\n.pt101 {\n  padding-top: 30px;\n  margin: 0px 30px;\n}\n\n#itemModal .modal-dialog, #edititemModal .modal-dialog, #subbranchModal .modal-dialog, #add1Modal .modal-dialog, #addpayModal .modal-dialog, #viewpayModal .modal-dialog {\n  width: 750px;\n}\n\n@media (min-width: 576px) {\n  #itemModal .modal-dialog, #edititemModal .modal-dialog, #subbranchModal .modal-dialog, #add1Modal .modal-dialog, #addpayModal .modal-dialog, #viewpayModal .modal-dialog {\n    max-width: 750px;\n  }\n}\n\n.sec1, .sec2 {\n  width: 50%;\n}\n\n.sec1 {\n  padding-right: 10px;\n}\n\n.sec2 {\n  padding-left: 10px;\n}\n\ninput[type=\"date\"]:focus:before,\ninput[type=\"date\"]:valid:before {\n  content: \"\";\n}\n\n/* input[type=date]::-webkit-datetime-edit-text {\n      -webkit-appearance: none;\n      display: none;\n  }\n  input[type=date]::-webkit-datetime-edit-month-field{\n      -webkit-appearance: none;\n      display: none;\n  }\n  input[type=date]::-webkit-datetime-edit-day-field {\n      -webkit-appearance: none;\n      display: none;\n  }\n  input[type=date]::-webkit-datetime-edit-year-field {\n      -webkit-appearance: none;\n      display: none;\n  }*/\n\ninput[type=\"date\"]:before {\n  content: attr(placeholder) !important;\n  padding-right: 20px;\n}\n\n.allo_history .table_body > div, .allo_history .table_heading > div {\n  width: calc((100% - 50px) / 5);\n}\n\n.allo_history .table_heading > div:first-child, .allo_history .table_body > div:first-child {\n  width: 50px;\n  line-height: 4;\n}\n\n.in1 {\n  display: inline-block;\n  background: #CCFFAC;\n  border-radius: 5px;\n  width: 40px;\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 24px;\n  letter-spacing: 0.01em;\n  color: #323C47;\n  text-align: center;\n}\n\n.out {\n  display: inline-block;\n  background: #FFCF88;\n  border-radius: 5px;\n  width: 40px;\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 24px;\n  text-align: center;\n  letter-spacing: 0.01em;\n  color: #323C47;\n}\n\n#historyModal .modal-dialog, #historyModal .modal-dialog {\n  width: 650px;\n}\n\n@media (min-width: 576px) {\n  #historyModal .modal-dialog, #historyModal .modal-dialog {\n    max-width: 650px;\n  }\n}\n\n.supplier_m .table_body > div, .supplier_m .table_heading > div {\n  width: calc((100% - 200px) / 5);\n}\n\n.supplier_m .table_heading > div:last-child, .supplier_m .table_body > div:last-child {\n  width: 200px;\n}\n\n.purchase .table_body > div, .purchase .table_heading > div {\n  width: calc((100% - 100px) / 6);\n}\n\n.purchase .table_heading > div:last-child, .purchase .table_body > div:last-child {\n  width: 100px;\n}\n\ninput[type=file]::-webkit-file-upload-button {\n  border: none;\n  border-right: 2px solid #e3dadb;\n  padding: .6em .4em;\n  border-radius: .2em;\n  background-color: #fff;\n  -webkit-transition: 1s;\n  transition: 1s;\n  color: #109CF1;\n  outline: none;\n}\n\ninput[type=file] {\n  padding: 0px;\n  color: #B6B5B1;\n  cursor: pointer;\n}\n\n.div_1 {\n  border: 1px solid #D5D7DA;\n  width: 25%;\n  height: 27rem;\n  margin: 0px 10px;\n  border-radius: 5px;\n  margin-top: 20px;\n  padding: 20px;\n}\n\n.pt102 {\n  padding-bottom: 20px;\n}\n\n.textarea1 {\n  height: 100px;\n}\n\n.heading1 {\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: 0.01em;\n  color: #334D6E;\n}\n\n.div_2 {\n  width: 75%;\n  margin: 0px 10px;\n  border-radius: 5px;\n  margin-top: 20px;\n  padding: 20px;\n}\n\n.tablehead {\n  background: #DFE5F0;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n  line-height: 40px;\n  display: flex;\n}\n\n.tablehead > div {\n  text-align: center;\n  width: calc(100% / 5);\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 40px;\n  text-align: center;\n  letter-spacing: 0.01em;\n  color: #323C47;\n}\n\n.sel1 {\n  width: 252px;\n  background: #FAFAFA;\n  border: 1px solid #F0EDED;\n  border-radius: 4px;\n}\n\n.tablebody {\n  display: flex;\n  border-bottom: 1px solid #DFE5F0;\n}\n\n.tablebody > div {\n  text-align: center;\n  width: calc(100% / 5);\n  font-weight: normal;\n  font-size: 13px;\n  line-height: 60px;\n  letter-spacing: 0.01em;\n  color: #323C47;\n}\n\n.tabletotal {\n  display: flex;\n  background: #D4FFF2;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n  font-weight: 600;\n  font-size: 13px;\n  letter-spacing: 0.01em;\n  color: #323C47;\n}\n\n.tabletotal > div {\n  text-align: center;\n  line-height: 60px;\n  width: calc(100% / 5);\n}\n\n.tabletotal > div:nth-child(4) {\n  font-weight: 700;\n  font-size: 16px;\n}\n\n.created_date {\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 194px;\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 30px;\n  letter-spacing: 0.01em;\n  color: #323C47;\n  text-align: center;\n}\n\n.mr10 {\n  margin-right: 10px;\n}\n\n.flex30 {\n  display: flex;\n}\n\n.flex30 > div {\n  padding-left: 20px;\n  width: calc( 100% / 3);\n  line-height: 30px;\n  border-right: 1px solid #E5E3EE;\n}\n\n.flex30 > div:last-child {\n  border-right: none;\n}\n\n.name2 {\n  width: 34%;\n  font-weight: 600;\n  font-size: 12px;\n  letter-spacing: 0.01em;\n  color: #323C47;\n}\n\n.value2 {\n  width: 66%;\n  font-weight: 400;\n  font-size: 12px;\n  letter-spacing: 0.01em;\n  color: #323C47;\n}\n\n.flex30 > div:last-child .name2 {\n  width: 45%;\n}\n\n.flex30 > div:last-child .value2 {\n  width: 55%;\n}\n\n.item .tablehead > div, .item .tablebody > div {\n  width: calc(100% / 4);\n}\n\n.item .tabletotal {\n  border-bottom: 1px solid #DFE5F0;\n  background: #fff;\n  box-shadow: none;\n}\n\n.item .tabletotal > div {\n  width: calc(100% /4);\n}\n\n.sale .table_body > div, .sale .table_heading > div {\n  width: calc((100% - 100px) / 6);\n}\n\n.sale .table_heading > div:last-child, .sale .table_body > div:last-child {\n  width: 100px;\n}\n\n.sale .table_heading > div:nth-child(10), .sale .table_body > div:nth-child(10) {\n  line-height: 18px;\n}\n\n.div_11 {\n  border: 1px solid #D5D7DA;\n  width: 25%;\n  height: 37rem;\n  margin: 0px 10px;\n  border-radius: 5px;\n  margin-top: 20px;\n  padding: 20px;\n}\n\n.sale_add .tablehead > div {\n  width: calc(100% / 6);\n}\n\n.sale_add .tablebody > div {\n  width: calc(100% / 6);\n}\n\n.sale_add .tabletotal > div {\n  width: calc(100% / 6);\n}\n\n.sale_add .tabletotal > div:nth-child(5) {\n  font-weight: 700;\n  font-size: 16px;\n}\n\n.file_name {\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 18px;\n  letter-spacing: 0.01em;\n  color: #109CF1;\n}\n\n.history .table_body > div, .history .table_heading > div {\n  width: calc((100% - 50px) / 5);\n}\n\n.history .table_heading > div:first-child, .history .table_body > div:first-child {\n  width: 50px;\n}\n\n.nav-item .nav-link {\n  font-weight: 600;\n  color: #405877;\n  padding-bottom: 8px;\n  padding-top: 10px;\n  cursor: pointer;\n  font-size: 13px;\n  float: left;\n  background: none;\n}\n\n.nav-item .active {\n  border-bottom: 3px solid #109cf1 !important;\n  color: #109cf1 !important;\n}\n\n.modal {\n  width: 100%;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n}\n\n.right {\n  float: left;\n  margin: 5px;\n}\n\n.modal-dialog {\n  margin: 0 auto;\n  top: 10%;\n}\n\n.modal-header:before {\n  display: none;\n}\n\n.modal-title {\n  color: #2B2626;\n  font-weight: 600;\n  font-size: 13px;\n  font-family: 'Open Sans', sans-serif;\n  margin-bottom: 0px;\n}\n\n.errormsg {\n  height: 10px;\n}\n\n.help-block {\n  color: red;\n  margin-bottom: 0%;\n  padding-left: 2px;\n}\n\n.cancel {\n  background-color: white;\n  color: #109CF1;\n  padding: 0px 20px;\n  font-size: 12px;\n  border: solid 2px #109CF1;\n  border-radius: 5px;\n  font-weight: 500;\n  height: 35px;\n  margin-right: 15px;\n}\n\n.align {\n  text-align: center;\n}\n\n.multiselect {\n  width: 330px;\n  height: 35px;\n  left: 30px;\n  top: 63px;\n  background: #FFFFFF;\n  box-sizing: border-box;\n  border-radius: 4px;\n  margin-top: 20px;\n}\n\n#deletesModal .modal-dialog {\n  width: 350px;\n}\n\n@media (min-width: 576px) {\n  #deletesModal .modal-dialog {\n    max-width: 350px;\n  }\n}\n\n.center {\n  text-align: center;\n}\n\n.deleteImg, li {\n  float: left;\n  margin: 3px;\n}\n\n.p_title {\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 15px;\n  letter-spacing: 0.01em;\n  color: #323C47;\n  margin-bottom: 5px;\n}\n\n.has-error .control-label {\n  color: black;\n}\n\n.help-block {\n  color: red;\n  margin-bottom: 0%;\n}\n\n.text-danger {\n  color: red;\n  padding-left: 2px;\n}\n\n.scrollable {\n  max-height: 70vh;\n  overflow-y: auto;\n}\n\n.dropdown-content1 {\n  display: none;\n  position: absolute;\n  background-color: #fff;\n  min-width: 200px;\n  right: 3px;\n  margin-top: 20px;\n  top: -100px;\n  text-align: left;\n  border-radius: 10px;\n}\n\n.dropdown-content1 a {\n  padding-left: 8px;\n}\n\n.ser {\n  margin: 10px 0px;\n}\n\n.illustration-container {\n  display: block;\n}\n\n.illustration-container .illustration-img {\n  width: 40%;\n  margin-left: 25%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbnZlbnRvcnktbW9kdWxlL2ludmVudG9yeS1tb2R1bGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXO0FBQ2Y7O0FBRUU7RUFDRSxvQ0FBb0M7QUFDeEM7O0FBQ0U7RUFDRSxhQUFhO0FBRWpCOztBQUFFO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixlQUFlO0FBR25COztBQURFO0VBQ0Usc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLHlCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixlQUFlO0FBSW5COztBQUZHO0VBQ0MsaUJBQWlCO0VBRWpCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztBQUlsQjs7QUFGRTtFQUNFLGlCQUFpQjtFQUVqQixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2QsWUFBVztBQUlqQjs7QUFERztFQUNJLGFBQWE7QUFJcEI7O0FBRkU7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixrQkFBa0I7QUFLdEI7O0FBSEU7RUFDRSxhQUFhO0FBTWpCOztBQUpFO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtBQU9sQzs7QUFMRTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7QUFRcEI7O0FBTkU7RUFDSSwrQ0FBNEM7RUFDNUMsdURBQW9EO0VBQ3BELG9EQUFpRDtFQUNuRCxpQkFBaUI7QUFTckI7O0FBUEU7RUFDRSxrQkFBa0I7QUFVdEI7O0FBUkU7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0VB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OztBQTlGTTtFQUNBLFVBQVU7RUFDVixpQkFBaUI7QUFpR3ZCOztBQTlGTTtFQUNFLFVBQVU7RUFDVixpQkFBZ0I7QUFpR3hCOztBQS9GSTtFQUNFLGdCQUFnQjtFQUNkLGdCQUFnQjtBQWtHeEI7O0FBaEdJO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsV0FBVztFQUVYLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFrR3pCOztBQTVHSTtFQVlGLGlCQUFpQjtBQW9HbkI7O0FBakdNO0VBQ0UsZ0JBQWU7QUFvR3ZCOztBQWxHTTtFQUNFLGNBQWM7QUFxR3RCOztBQXRHTTtFQUdJLFVBQVU7RUFDVixnQkFBZ0I7QUF1RzFCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9pbnZlbnRvcnktbW9kdWxlL2ludmVudG9yeS1tb2R1bGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xuICAgIG1hcmdpbjogMHB4O1xuICAgIFxuICB9XG4gIGJvZHl7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICB9XG4gIC5mbGV4e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbiAgLmJsdWVfYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTA5Q0YxO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAwcHggMjBweDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAud2hpdGVfYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGNvbG9yOiAjMTA5Q0YxO1xuICAgIHBhZGRpbmc6IDBweCAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBib3JkZXI6MXB4IHNvbGlkICMxMDlDRjE7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gICAuc2VsZWN0e1xuICAgIHBhZGRpbmc6IDdweCAyMHB4O1xuICAgLy8gcGFkZGluZzogN3B4IDJweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAjNzg3QTdEO1xuICB9XG4gIC5pbnB1dHtcbiAgICBwYWRkaW5nOiA3cHggMjBweDtcbiAgICBcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgaGVpZ2h0OjM1cHg7XG4gICAgfVxuXG4gICBpbnB1dDpmb2N1cywgc2VsZWN0OmZvY3VzLGJ1dHRvbjpmb2N1c3tcbiAgICAgICBvdXRsaW5lOiBub25lO1xuICAgfVxuICAucGFnZV9oZWFkaW5nPnB7XG4gICAgY29sb3I6ICMzMzRENkU7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICB9XG4gIC5mbGV4e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbiAgLmRpc3BsYXl7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cbiAgLnc5OHtcbiAgICB3aWR0aDogOTglO1xuICAgIG1hcmdpbjogMHB4IGF1dG87XG4gIH1cbiAgLmhlYWRfcGFkZGluZ3tcbiAgICAgIGJveC1zaGFkb3c6IDBweCA3cHggNXB4IC0zcHggcmdiYSgwLDAsMCwwLjEpO1xuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggN3B4IDVweCAtM3B4IHJnYmEoMCwwLDAsMC4xKTtcbiAgICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDdweCA1cHggLTNweCByZ2JhKDAsMCwwLDAuMSk7XG4gICAgcGFkZGluZzogMTVweCAwcHg7XG4gIH1cbiAgLnBhZ2VoZWFkaW5nc3BhY2V7XG4gICAgbWFyZ2luLWJvdHRvbTogN3B4O1xuICB9XG4gIC50YWJsZV9oZWFkaW5ne1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNERkU1RjA7XG4gICAvKiBwYWRkaW5nOiAxMHB4IDBweDsqL1xuICAgIC8vbWFyZ2luOiAxMHB4IDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICBcbiAgfVxuICBcbiAgLnRhYmxlX2hlYWRpbmc+ZGl2e1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogIzMyM0M0NztcbiAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuICBcbiAgLnRhYmxlX2JvZHl7XG4gICAgIHdpZHRoOiAxMDAlO1xuICAgIC8vbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBsaW5lLWhlaWdodDogMThweDtcbiAgfVxuICAudGFibGVfYm9keT5kaXZ7XG4gICAgXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogIzMyM0M0NztcbiAgIC8qIHBhZGRpbmc6IDVweCAwcHg7Ki9cbiAgICAgbWFyZ2luOiBhdXRvO1xuICAgICBsaW5lLWhlaWdodDogMThweDtcbiAgXG4gIH1cbiAgXG4gIC5tcjEwe1xuICBtYXJnaW4tcmlnaHQ6MTBweDtcbiAgfVxuICAudzI0MHtcbiAgIHdpZHRoOiAyNDBweDtcbiAgfVxuICBcbiAgLml0ZW1fY2F0IC50YWJsZV9ib2R5PmRpdiwuaXRlbV9jYXQgLnRhYmxlX2hlYWRpbmc+ZGl2e1xuICAgIHdpZHRoOiBjYWxjKCgxMDAlIC0gMjUwcHgpIC8gMik7XG4gIH1cbiAgLml0ZW1fY2F0IC50YWJsZV9oZWFkaW5nPmRpdjpmaXJzdC1jaGlsZCwuaXRlbV9jYXQgLnRhYmxlX2JvZHk+ZGl2OmZpcnN0LWNoaWxke1xuICAgIHdpZHRoOiA1MHB4O1xuICB9XG4gIC5pdGVtX2NhdCAudGFibGVfaGVhZGluZz5kaXY6bGFzdC1jaGlsZCwuaXRlbV9jYXQgLnRhYmxlX2JvZHk+ZGl2Omxhc3QtY2hpbGR7XG4gICAgd2lkdGg6IDIwMHB4O1xuICB9XG4gIC5ncm91cDE4e1xuICAgIHdpZHRoOiAxOHB4O1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuICAucHQxNXtcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICB9XG4gIC5ib3R0b21fcGFnaWduYXRpb257XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMHB4O1xuICAgIHotaW5kZXg6IDEwMDtcbiAgfVxuICAuYm90dG9tX3BhZ2lnbmF0aW9uIHB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIH1cbiAgLmJvdHRvbV9wYWdpZ25hdGlvbiBzZWxlY3R7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogIzAwNzlGRjtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gIH1cbiAgLmJvdHRvbV9wYWdpZ25hdGlvbiAudzIwe1xuICAgIHdpZHRoOiAyMCU7XG4gIH1cbiAgLmJvdHRvbV9wYWdpZ25hdGlvbiAudzEwe1xuICAgIHdpZHRoOiAxMCU7XG4gIH1cbiAgLmJvdHRvbV9wYWdpZ25hdGlvbiAudzUwe1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbiAgLmJvdHRvbV9wYWdpZ25hdGlvbiAudzQwe1xuICAgIHdpZHRoOiA0MCU7XG4gIH1cbiAgLm51bWJlcntcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBtYXJnaW46MHB4IDRweDtcbiAgfVxuICAuYWN0aXZlX2NpcmNsZXtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzoycHggN3B4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICMwMDc5RkY7XG4gIH1cbiAgLm5leHR7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgY29sb3I6ICMwMDc5RkY7XG4gIFxuICB9XG4gIC53NDUwe1xuICAgIHdpZHRoOiA0NTBweDtcbiAgfVxuICAud2hpdGV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMjI3cHgpO1xuICAgIGJvcmRlci10b3A6IDNweCBzb2xpZCAjRWRlZGVkO1xuICB9XG4gIC5uYXYtaXRlbSAubmF2LWxpbmt7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY29sb3I6ICM0MDU4Nzc7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgZm9udC1zaXplOiAxM3B4XG4gIH1cbiAgXG4gIC5uYXYtaXRlbSAubmF2LWxpbmsuYWN0aXZlIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICMxMDlDRjEgIWltcG9ydGFudDtcbiAgICAgIGNvbG9yOiAjMTA5Q0YxICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm5hdi1saW5rIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgcGFkZGluZzogMS41cmVtIDByZW07XG4gICAgICBtYXJnaW46IC0xcmVtIDEuNXJlbTtcbiAgICAgIG1hcmdpbi1sZWZ0OiAwcmVtO1xuICB9XG4gIC5mbGV4e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbiAgLncxNXtcbiAgICB3aWR0aDogMTUlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNERkU1RjA7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxuICAubGlzdD5saXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDdweCAwcHg7XG4gICAgbWFyZ2luOiA3cHggMHB4O1xuICB9XG4gIC5saXN0PmxpPmE+c3BhbntcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogIzMzNEQ2RTtcbiAgfVxuICAubGlzdD5saSBpbWd7XG4gIHBhZGRpbmc6IDBweCAxMHB4O1xuICB9IFxuICAubWFnbmlmeWluZy1nbGFzc3tcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2Fzc2V0cy9WZWN0b3Iuc3ZnJyk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOmxlZnQgY2VudGVyO1xuICAgIHRleHQtaW5kZW50OiAxMHB4O1xuICB9XG4gIC5zcGFjZTMze1xuICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICB9XG4gIC5pdGVtX21hbiAudGFibGVfYm9keT5kaXYsLml0ZW1fbWFuIC50YWJsZV9oZWFkaW5nPmRpdntcbiAgICB3aWR0aDogY2FsYygoMTAwJSAtIDEwMHB4KSAvIDgpO1xuICB9XG4gIFxuICAuaXRlbV9tYW4gLnRhYmxlX2hlYWRpbmc+ZGl2Omxhc3QtY2hpbGQsLml0ZW1fbWFuIC50YWJsZV9ib2R5PmRpdjpsYXN0LWNoaWxke1xuICAgIHdpZHRoOiAxMDBweDtcbiAgfVxuICAuaXRlbV9tYW4gLnRhYmxlX2hlYWRpbmc+ZGl2Om50aC1jaGlsZCg1KSwuaXRlbV9tYW4gLnRhYmxlX2hlYWRpbmc+ZGl2Om50aC1jaGlsZCg2KSwuaXRlbV9tYW4gLnRhYmxlX2hlYWRpbmc+ZGl2Om50aC1jaGlsZCg4KXtcbiAgICBsaW5lLWhlaWdodDogMThweDt9XG4gIFxuICAuZHJvcGRvd24xIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICB9XG4gIFxuICAuZHJvcGRvd24tY29udGVudDEge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgbWluLXdpZHRoOjIwMHB4O1xuICAgIHJpZ2h0OjNweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIHRvcDogLTE1MHB4O1xuICAgIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLDAsMCwwLjIpO1xuICAgIHotaW5kZXg6IDEyMDA7XG4gIH1cbiAgXG4gIC5kcm9wZG93bi1jb250ZW50MSBhIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIFxuICAuZHJvcGRvd24tY29udGVudDEgYTpob3ZlciB7YmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O31cbiAgXG4gIC5kcm9wZG93bjE6aG92ZXIgLmRyb3Bkb3duLWNvbnRlbnQxIHtkaXNwbGF5OiBibG9jazt9XG4gIC5kb3Qze1xuICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIC53aWQxMDB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLndpZDgwe1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbiAgXG4gIC5wdDEwe1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICB9XG4gIGlucHV0W3R5cGU9XCJkYXRlXCJdOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xuICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZzEvY2FsLnN2Zykgbm8tcmVwZWF0O1xuICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICBib3JkZXItd2lkdGg6IHRoaW47XG4gICAgICBwYWRkaW5nOiAycHggMHB4O1xuICB9XG4gIGlucHV0W3R5cGU9XCJkYXRlXCJde1xuICAgIGNvbG9yOiAjNzg3QTdEO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICBpbnB1dDpmb2N1c3tcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG4gIGJ1dHRvbjpmb2N1c3tcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG4gIC5tb2RhbCB0ZXh0YXJlYXtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICB9XG4gIC5hbGVydHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBsaW5lLWhlaWdodDogMjdweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICAgIGNvbG9yOiAjNEQ1ODY5O1xuICB9XG4gIC5hbGVydF90ZXh0e1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgICBjb2xvcjogIzg1ODU4NTtcbiAgICBtYXJnaW46IDBweCA0MHB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gIFxuICB9XG4gIC5jZW50ZXJ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5jZW50ZXIgaW1ne1xuICAgIHdpZHRoOiA0NHB4O1xuICBoZWlnaHQ6IDM0cHg7XG4gIH1cblxuICBcbiAgI2RlbGV0ZTFNb2RhbCAubW9kYWwtZGlhbG9nLCNkZWxldGVpdGVtTW9kYWwgLm1vZGFsLWRpYWxvZyB7XG4gICAgICB3aWR0aDogMzUwcHg7XG4gIH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KXtcbiAgI2RlbGV0ZTFNb2RhbCAubW9kYWwtZGlhbG9nLCNkZWxldGVpdGVtTW9kYWwgLm1vZGFsLWRpYWxvZyAge1xuICAgICAgbWF4LXdpZHRoOjM1MHB4O1xuICB9XG4gIH1cbiAgI2RlbGV0ZU1vZGFsIC5tb2RhbC1kaWFsb2cge1xuICAgICAgd2lkdGg6IDM1MHB4O1xuICB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiA1NzZweCl7XG4gICAjZGVsZXRlTW9kYWwgLm1vZGFsLWRpYWxvZyB7XG4gICAgICBtYXgtd2lkdGg6MzUwcHg7XG4gIH1cbiAgfVxuICAucHQxMDF7XG4gICAgcGFkZGluZy10b3A6IDMwcHg7XG4gICAgbWFyZ2luOiAwcHggMzBweDtcbiAgfVxuICAjaXRlbU1vZGFsIC5tb2RhbC1kaWFsb2csI2VkaXRpdGVtTW9kYWwgLm1vZGFsLWRpYWxvZywjc3ViYnJhbmNoTW9kYWwgLm1vZGFsLWRpYWxvZywjYWRkMU1vZGFsIC5tb2RhbC1kaWFsb2csI2FkZHBheU1vZGFsIC5tb2RhbC1kaWFsb2csI3ZpZXdwYXlNb2RhbCAubW9kYWwtZGlhbG9nIHtcbiAgICAgIHdpZHRoOiA3NTBweDtcbiAgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpe1xuICAgI2l0ZW1Nb2RhbCAubW9kYWwtZGlhbG9nLCNlZGl0aXRlbU1vZGFsIC5tb2RhbC1kaWFsb2csI3N1YmJyYW5jaE1vZGFsIC5tb2RhbC1kaWFsb2csI2FkZDFNb2RhbCAubW9kYWwtZGlhbG9nLCNhZGRwYXlNb2RhbCAubW9kYWwtZGlhbG9nLCN2aWV3cGF5TW9kYWwgLm1vZGFsLWRpYWxvZyB7XG4gICAgICBtYXgtd2lkdGg6NzUwcHg7XG4gIH1cbiAgfVxuICAuc2VjMSwuc2VjMntcbiAgICB3aWR0aDogNTAlO1xuICB9XG4gIC5zZWMxe1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIH1cbiAgLnNlYzJ7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB9XG4gIGlucHV0W3R5cGU9XCJkYXRlXCJdOmZvY3VzOmJlZm9yZSxcbiAgICBpbnB1dFt0eXBlPVwiZGF0ZVwiXTp2YWxpZDpiZWZvcmUge1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICB9XG4gIFxuICAgLyogaW5wdXRbdHlwZT1kYXRlXTo6LXdlYmtpdC1kYXRldGltZS1lZGl0LXRleHQge1xuICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICBpbnB1dFt0eXBlPWRhdGVdOjotd2Via2l0LWRhdGV0aW1lLWVkaXQtbW9udGgtZmllbGR7XG4gICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIGlucHV0W3R5cGU9ZGF0ZV06Oi13ZWJraXQtZGF0ZXRpbWUtZWRpdC1kYXktZmllbGQge1xuICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICBpbnB1dFt0eXBlPWRhdGVdOjotd2Via2l0LWRhdGV0aW1lLWVkaXQteWVhci1maWVsZCB7XG4gICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICB9Ki9cbiAgXG4gICBpbnB1dFt0eXBlPVwiZGF0ZVwiXTpiZWZvcmUge1xuICAgICAgY29udGVudDogYXR0cihwbGFjZWhvbGRlcikgIWltcG9ydGFudDtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgfVxuICAgIC5hbGxvX2hpc3RvcnkgLnRhYmxlX2JvZHk+ZGl2LC5hbGxvX2hpc3RvcnkgLnRhYmxlX2hlYWRpbmc+ZGl2e1xuICAgIHdpZHRoOiBjYWxjKCgxMDAlIC0gNTBweCkgLyA1KTtcbiAgfVxuICAuYWxsb19oaXN0b3J5IC50YWJsZV9oZWFkaW5nPmRpdjpmaXJzdC1jaGlsZCwuYWxsb19oaXN0b3J5IC50YWJsZV9ib2R5PmRpdjpmaXJzdC1jaGlsZHtcbiAgICB3aWR0aDogNTBweDtcbiAgICBsaW5lLWhlaWdodDogNDtcbiAgfVxuICAuaW4xe1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBiYWNrZ3JvdW5kOiAjQ0NGRkFDO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB3aWR0aDogNDBweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICAgIGNvbG9yOiAjMzIzQzQ3O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAub3V0e1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBiYWNrZ3JvdW5kOiAjRkZDRjg4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB3aWR0aDogNDBweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgICBjb2xvcjogIzMyM0M0NztcbiAgfVxuICAjaGlzdG9yeU1vZGFsIC5tb2RhbC1kaWFsb2csI2hpc3RvcnlNb2RhbCAubW9kYWwtZGlhbG9nIHtcbiAgICAgIHdpZHRoOiA2NTBweDtcbiAgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpe1xuICAgI2hpc3RvcnlNb2RhbCAubW9kYWwtZGlhbG9nLCNoaXN0b3J5TW9kYWwgLm1vZGFsLWRpYWxvZyB7XG4gICAgICBtYXgtd2lkdGg6NjUwcHg7XG4gIH1cbiAgfVxuICAgIC5zdXBwbGllcl9tIC50YWJsZV9ib2R5PmRpdiwuc3VwcGxpZXJfbSAudGFibGVfaGVhZGluZz5kaXZ7XG4gICAgd2lkdGg6IGNhbGMoKDEwMCUgLSAyMDBweCkgLyA1KTtcbiAgfVxuICAuc3VwcGxpZXJfbSAudGFibGVfaGVhZGluZz5kaXY6bGFzdC1jaGlsZCwuc3VwcGxpZXJfbSAudGFibGVfYm9keT5kaXY6bGFzdC1jaGlsZHtcbiAgICB3aWR0aDogMjAwcHg7XG4gIH1cbiAgICAucHVyY2hhc2UgLnRhYmxlX2JvZHk+ZGl2LC5wdXJjaGFzZSAudGFibGVfaGVhZGluZz5kaXZ7XG4gICAgd2lkdGg6IGNhbGMoKDEwMCUgLSAxMDBweCkgLyA2KTtcbiAgfVxuICAucHVyY2hhc2UgLnRhYmxlX2hlYWRpbmc+ZGl2Omxhc3QtY2hpbGQsLnB1cmNoYXNlIC50YWJsZV9ib2R5PmRpdjpsYXN0LWNoaWxke1xuICAgIHdpZHRoOiAxMDBweDtcbiAgfVxuICBpbnB1dFt0eXBlPWZpbGVdOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICNlM2RhZGI7XG4gICAgcGFkZGluZzogLjZlbSAuNGVtO1xuICAgIGJvcmRlci1yYWRpdXM6IC4yZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICB0cmFuc2l0aW9uOiAxcztcbiAgICBjb2xvcjogIzEwOUNGMTtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG4gIFxuICBpbnB1dFt0eXBlPWZpbGVdIHtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgIGNvbG9yOiAjQjZCNUIxO1xuICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgLmRpdl8xe1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNENUQ3REE7XG4gICAgd2lkdGg6IDI1JTtcbiAgICBoZWlnaHQ6IDI3cmVtO1xuICAgIG1hcmdpbjogMHB4IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgfVxuICAucHQxMDJ7XG4gICAgcGFkZGluZy1ib3R0b206MjBweDtcbiAgfVxuICAudGV4dGFyZWExe1xuICAgIGhlaWdodDogMTAwcHg7XG4gIH1cbiAgLmhlYWRpbmcxe1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gICAgY29sb3I6ICMzMzRENkU7XG4gIH1cbiAgXG4gIC5kaXZfMntcbiAgICB3aWR0aDogNzUlO1xuICAgIG1hcmdpbjogMHB4IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgfVxuICAudGFibGVoZWFke1xuICAgIGJhY2tncm91bmQ6ICNERkU1RjA7XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG4gIC50YWJsZWhlYWQ+ZGl2e1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gNSk7XG4gICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gIGNvbG9yOiAjMzIzQzQ3O1xuICB9XG4gIC5zZWwxe1xuICAgIHdpZHRoOiAyNTJweDtcbiAgICBiYWNrZ3JvdW5kOiAjRkFGQUZBO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNGMEVERUQ7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB9XG4gIC50YWJsZWJvZHl7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjREZFNUYwO1xuICB9XG4gIC50YWJsZWJvZHk+ZGl2e1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gNSk7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbGluZS1oZWlnaHQ6IDYwcHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgICBjb2xvcjogIzMyM0M0NztcbiAgfVxuICAudGFibGV0b3RhbHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJhY2tncm91bmQ6ICNENEZGRjI7XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICAgIGNvbG9yOiAjMzIzQzQ3O1xuICB9XG4gIC50YWJsZXRvdGFsPmRpdntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IDYwcHg7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAvIDUpO1xuICB9XG4gIC50YWJsZXRvdGFsPmRpdjpudGgtY2hpbGQoNCl7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG4gIC5jcmVhdGVkX2RhdGV7XG4gICAvLyBiYWNrZ3JvdW5kOnVybCguLi8uLi8uLi9hc3NldHMvaW1nMS90ZWFsX3JlYy5zdmcpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICB3aWR0aDogMTk0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgICBjb2xvcjogIzMyM0M0NztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIFxuICB9XG4gIC5tcjEwe1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG4gIC5mbGV4MzB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBcbiAgICBcbiAgfVxuICAuZmxleDMwPmRpdntcbiAgICBwYWRkaW5nLWxlZnQ6MjBweDtcbiAgICB3aWR0aDogY2FsYyggMTAwJSAvIDMpO1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNFNUUzRUU7XG4gIH1cbiAgLmZsZXgzMD5kaXY6bGFzdC1jaGlsZHtcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gIH1cbiAgLm5hbWUye1xuICAgIHdpZHRoOiAzNCU7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgICBjb2xvcjogIzMyM0M0NztcbiAgXG4gIH1cbiAgLnZhbHVlMntcbiAgICB3aWR0aDogNjYlO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgXG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gIGNvbG9yOiAgIzMyM0M0NztcbiAgXG4gIH1cbiBcbiAgLmZsZXgzMD5kaXY6bGFzdC1jaGlsZCAubmFtZTJ7XG4gICAgd2lkdGg6IDQ1JTtcbiAgfVxuICAuZmxleDMwPmRpdjpsYXN0LWNoaWxkIC52YWx1ZTJ7XG4gICAgd2lkdGg6IDU1JTtcbiAgfVxuICAuaXRlbSAudGFibGVoZWFkPmRpdiwuaXRlbSAudGFibGVib2R5PmRpdntcbiAgXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAvIDQpO1xuICB9XG4gIC5pdGVtIC50YWJsZXRvdGFse1xuICAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjREZFNUYwO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm94LXNoYWRvdzpub25lO1xuICBcbiAgfVxuICAuaXRlbSAudGFibGV0b3RhbD5kaXZ7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAvNCk7XG4gIH1cbiAgICAuc2FsZSAudGFibGVfYm9keT5kaXYsLnNhbGUgLnRhYmxlX2hlYWRpbmc+ZGl2e1xuICAgIHdpZHRoOiBjYWxjKCgxMDAlIC0gMTAwcHgpIC8gNik7XG4gIH1cbiAgLnNhbGUgLnRhYmxlX2hlYWRpbmc+ZGl2Omxhc3QtY2hpbGQsLnNhbGUgLnRhYmxlX2JvZHk+ZGl2Omxhc3QtY2hpbGR7XG4gICAgd2lkdGg6IDEwMHB4O1xuICB9XG4gIC5zYWxlIC50YWJsZV9oZWFkaW5nPmRpdjpudGgtY2hpbGQoMTApLC5zYWxlIC50YWJsZV9ib2R5PmRpdjpudGgtY2hpbGQoMTApe1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICB9XG4gIC5kaXZfMTF7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0Q1RDdEQTtcbiAgICB3aWR0aDogMjUlO1xuICAgIGhlaWdodDogMzdyZW07XG4gICAgbWFyZ2luOiAwcHggMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICB9XG4gIFxuICAuc2FsZV9hZGQgLnRhYmxlaGVhZD5kaXZ7XG4gIFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyA2KTtcbiAgXG4gIH1cbiAgXG4gIC5zYWxlX2FkZCAudGFibGVib2R5PmRpdntcbiAgXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAvIDYpO1xuICBcbiAgfVxuICBcbiAgLnNhbGVfYWRkIC50YWJsZXRvdGFsPmRpdntcbiAgXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAvIDYpO1xuICB9XG4gIC5zYWxlX2FkZCAudGFibGV0b3RhbD5kaXY6bnRoLWNoaWxkKDUpe1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuICAuZmlsZV9uYW1le1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gICAgY29sb3I6ICMxMDlDRjE7XG4gIFxuICB9XG4gICAgLmhpc3RvcnkgLnRhYmxlX2JvZHk+ZGl2LC5oaXN0b3J5IC50YWJsZV9oZWFkaW5nPmRpdntcbiAgICB3aWR0aDogY2FsYygoMTAwJSAtIDUwcHgpIC8gNSk7XG4gIH1cbiAgLmhpc3RvcnkgLnRhYmxlX2hlYWRpbmc+ZGl2OmZpcnN0LWNoaWxkLC5oaXN0b3J5IC50YWJsZV9ib2R5PmRpdjpmaXJzdC1jaGlsZHtcbiAgICB3aWR0aDogNTBweDtcbiAgfVxuICAubmF2LWl0ZW0ge1xuICAgIC5uYXYtbGluayB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGNvbG9yOiAjNDA1ODc3O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIH1cbiAgICAuYWN0aXZlIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICMxMDljZjEgIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6ICMxMDljZjEgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbiAgLm1vZGFsIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICBcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgfVxuICAgICAgIC5yaWdodHtcbiAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgfVxuICAgLm1vZGFsLWRpYWxvZyB7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICB0b3A6MTAlO1xuICAgIH1cbiAgICAubW9kYWwtaGVhZGVyOmJlZm9yZXtcbiAgICAgIGRpc3BsYXk6bm9uZTtcbiAgICB9XG4gICAgLm1vZGFsLXRpdGxlIHtcbiAgICAgIGNvbG9yOiAjMkIyNjI2O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgfVxuICAuZXJyb3Jtc2d7XG4gICAgaGVpZ2h0OjEwcHg7XG4gIH1cbiAgLmhlbHAtYmxvY2t7XG4gICAgY29sb3I6IHJlZDtcbiAgICBtYXJnaW4tYm90dG9tOiAwJTtcbiAgICAvL3RleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nLWxlZnQ6IDJweDtcbiAgICB9XG4gICAgLmNhbmNlbHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICBjb2xvcjogIzEwOUNGMTtcbiAgICAgICAgcGFkZGluZzogMHB4IDIwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAycHggIzEwOUNGMTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICB9XG4gICAgLmFsaWdue1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICAubXVsdGlzZWxlY3R7XG4gICAgICB3aWR0aDogMzMwcHg7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIGxlZnQ6IDMwcHg7XG4gICAgdG9wOiA2M3B4O1xuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgbWFyZ2luLXRvcDoyMHB4O1xuICAgIH1cbiAgICAjZGVsZXRlc01vZGFsIC5tb2RhbC1kaWFsb2cge1xuICAgICAgd2lkdGg6IDM1MHB4O1xuICB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiA1NzZweCl7XG4gICNkZWxldGVzTW9kYWwgLm1vZGFsLWRpYWxvZyB7XG4gICAgICBtYXgtd2lkdGg6MzUwcHg7XG4gIH1cbiAgfVxuICAuY2VudGVye1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gXG4gIC5kZWxldGVJbWcsbGl7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luOjNweDtcbiAgfVxuICAucF90aXRsZXtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBsaW5lLWhlaWdodDogMTVweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICAgIC8vY29sb3I6ICMyQjI2MjY7XG4gICAgY29sb3I6IzMyM0M0NztcbiAgICBtYXJnaW4tYm90dG9tOjVweDtcbiAgICB9XG4gICAgLmhhcy1lcnJvciAuY29udHJvbC1sYWJlbHtcbiAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgIH1cbiAgICAgIC5oZWxwLWJsb2Nre1xuICAgICAgY29sb3I6IHJlZDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDAlO1xuICAgICAgXG4gICAgICB9XG4gICAgICAudGV4dC1kYW5nZXJ7XG4gICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgIHBhZGRpbmctbGVmdDoycHg7XG4gICAgICB9XG4gICAgLnNjcm9sbGFibGV7XG4gICAgICBtYXgtaGVpZ2h0OiA3MHZoO1xuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIH1cbiAgICAuZHJvcGRvd24tY29udGVudDF7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgIG1pbi13aWR0aDogMjAwcHg7XG4gICAgICByaWdodDogM3B4O1xuICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgIHRvcDogLTEwMHB4O1xuICAgICAgLy90b3A6LTExcHg7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgYXtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7O1xuICAgICB9XG4gICAgICB9XG4gICAgICAuc2Vye1xuICAgICAgICBtYXJnaW46MTBweCAwcHg7XG4gICAgICB9XG4gICAgICAuaWxsdXN0cmF0aW9uLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAuaWxsdXN0cmF0aW9uLWltZyB7XG4gICAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMjUlO1xuICAgICAgICB9XG4gICAgICB9IFxuICAgICJdfQ== */";
      /***/
    },

    /***/
    "./src/app/components/inventory-module/inventory-module.component.ts":
    /*!***************************************************************************!*\
      !*** ./src/app/components/inventory-module/inventory-module.component.ts ***!
      \***************************************************************************/

    /*! exports provided: InventoryModuleComponent */

    /***/
    function srcAppComponentsInventoryModuleInventoryModuleComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InventoryModuleComponent", function () {
        return InventoryModuleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

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

      var InventoryModuleComponent =
      /** @class */
      function () {
        var InventoryModuleComponent = /*#__PURE__*/function () {
          function InventoryModuleComponent() {
            _classCallCheck(this, InventoryModuleComponent);
          }

          _createClass(InventoryModuleComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {}
          }]);

          return InventoryModuleComponent;
        }();

        InventoryModuleComponent.ctorParameters = function () {
          return [];
        };

        InventoryModuleComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
          selector: 'app-inventory-module',
          template: __importDefault(__webpack_require__(
          /*! raw-loader!./inventory-module.component.html */
          "./node_modules/raw-loader/dist/cjs.js!./src/app/components/inventory-module/inventory-module.component.html"))["default"],
          styles: [__importDefault(__webpack_require__(
          /*! ./inventory-module.component.scss */
          "./src/app/components/inventory-module/inventory-module.component.scss"))["default"]]
        }), __metadata("design:paramtypes", [])], InventoryModuleComponent);
        return InventoryModuleComponent;
      }();
      /***/

    },

    /***/
    "./src/app/components/inventory-module/inventory-module.module.ts":
    /*!************************************************************************!*\
      !*** ./src/app/components/inventory-module/inventory-module.module.ts ***!
      \************************************************************************/

    /*! exports provided: InventoryModuleModule */

    /***/
    function srcAppComponentsInventoryModuleInventoryModuleModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InventoryModuleModule", function () {
        return InventoryModuleModule;
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


      var _inventory_module_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./inventory-module-routing.module */
      "./src/app/components/inventory-module/inventory-module-routing.module.ts");
      /* harmony import */


      var _inventory_module_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./inventory-module.component */
      "./src/app/components/inventory-module/inventory-module.component.ts");
      /* harmony import */


      var _supplier_supplier_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./supplier/supplier.component */
      "./src/app/components/inventory-module/supplier/supplier.component.ts");
      /* harmony import */


      var _item_cm_item_cm_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./item-cm/item-cm.component */
      "./src/app/components/inventory-module/item-cm/item-cm.component.ts");
      /* harmony import */


      var _purchase_item_purchase_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./purchase-item/purchase-item.component */
      "./src/app/components/inventory-module/purchase-item/purchase-item.component.ts");
      /* harmony import */


      var _purchase_add_purchase_add_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./purchase-add/purchase-add.component */
      "./src/app/components/inventory-module/purchase-add/purchase-add.component.ts");
      /* harmony import */


      var _purchase_view_purchase_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./purchase-view/purchase-view.component */
      "./src/app/components/inventory-module/purchase-view/purchase-view.component.ts");
      /* harmony import */


      var _sale_item_sale_item_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./sale-item/sale-item.component */
      "./src/app/components/inventory-module/sale-item/sale-item.component.ts");
      /* harmony import */


      var _sale_add_sale_add_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./sale-add/sale-add.component */
      "./src/app/components/inventory-module/sale-add/sale-add.component.ts");
      /* harmony import */


      var _sale_view_sale_view_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./sale-view/sale-view.component */
      "./src/app/components/inventory-module/sale-view/sale-view.component.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ng-multiselect-dropdown */
      "./node_modules/ng-multiselect-dropdown/__ivy_ngcc__/fesm2015/ng-multiselect-dropdown.js");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../shared/shared.module */
      "./src/app/components/shared/shared.module.ts");
      /* harmony import */


      var _services_user_management_role_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../.././services/user-management/role.service */
      "./src/app/services/user-management/role.service.ts");
      /* harmony import */


      var _services_export_to_pdf_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../services/export-to-pdf.service */
      "./src/app/services/export-to-pdf.service.ts");
      /* harmony import */


      var _services_excel_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../services/excel.service */
      "./src/app/services/excel.service.ts");
      /* harmony import */


      var _replacenull_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./replacenull.pipe */
      "./src/app/components/inventory-module/replacenull.pipe.ts");
      /* harmony import */


      var _order_by_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./order-by.pipe */
      "./src/app/components/inventory-module/order-by.pipe.ts");
      /* harmony import */


      var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/cdk/clipboard */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/clipboard.js");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var InventoryModuleModule =
      /** @class */
      function () {
        var InventoryModuleModule = function InventoryModuleModule() {
          _classCallCheck(this, InventoryModuleModule);
        };

        InventoryModuleModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
          declarations: [_inventory_module_component__WEBPACK_IMPORTED_MODULE_3__["InventoryModuleComponent"], _supplier_supplier_component__WEBPACK_IMPORTED_MODULE_4__["SupplierComponent"], _item_cm_item_cm_component__WEBPACK_IMPORTED_MODULE_5__["ItemCmComponent"], _purchase_item_purchase_item_component__WEBPACK_IMPORTED_MODULE_6__["PurchaseItemComponent"], _purchase_add_purchase_add_component__WEBPACK_IMPORTED_MODULE_7__["PurchaseAddComponent"], _purchase_view_purchase_view_component__WEBPACK_IMPORTED_MODULE_8__["PurchaseViewComponent"], _sale_item_sale_item_component__WEBPACK_IMPORTED_MODULE_9__["SaleItemComponent"], _sale_add_sale_add_component__WEBPACK_IMPORTED_MODULE_10__["SaleAddComponent"], _sale_view_sale_view_component__WEBPACK_IMPORTED_MODULE_11__["SaleViewComponent"], _replacenull_pipe__WEBPACK_IMPORTED_MODULE_18__["ReplacenullPipe"], _order_by_pipe__WEBPACK_IMPORTED_MODULE_19__["OrderByPipe"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _inventory_module_routing_module__WEBPACK_IMPORTED_MODULE_2__["InventoryModuleRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_20__["ClipboardModule"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_13__["NgMultiSelectDropDownModule"].forRoot()],
          providers: [_services_user_management_role_service__WEBPACK_IMPORTED_MODULE_15__["RoleService"], _services_export_to_pdf_service__WEBPACK_IMPORTED_MODULE_16__["ExportToPdfService"], _services_excel_service__WEBPACK_IMPORTED_MODULE_17__["ExcelService"]]
        })], InventoryModuleModule);
        return InventoryModuleModule;
      }();
      /***/

    },

    /***/
    "./src/app/components/inventory-module/item-cm/item-cm.component.scss":
    /*!****************************************************************************!*\
      !*** ./src/app/components/inventory-module/item-cm/item-cm.component.scss ***!
      \****************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsInventoryModuleItemCmItemCmComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "* {\n  margin: 0px;\n}\n\nbody {\n  font-family: 'Open Sans', sans-serif;\n}\n\n.flex {\n  display: flex;\n}\n\n.blue_button {\n  background-color: #109CF1;\n  color: white;\n  padding: 0px 20px;\n  font-size: 13px;\n  border: none;\n  border-radius: 5px;\n  font-weight: 600;\n  line-height: 35px;\n  cursor: pointer;\n}\n\n.white_button {\n  background-color: #fff;\n  color: #109CF1;\n  padding: 0px 20px;\n  font-size: 12px;\n  border: 1px solid #109CF1;\n  border-radius: 5px;\n  font-weight: 500;\n  line-height: 35px;\n  cursor: pointer;\n}\n\n.select {\n  padding: 7px 20px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-size: 12px;\n  font-weight: 500;\n  color: #787A7D;\n}\n\n.input {\n  padding: 7px 20px;\n  font-size: 12px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-weight: 500;\n  height: 35px;\n}\n\ninput:focus, select:focus, button:focus {\n  outline: none;\n}\n\n.page_heading > p {\n  color: #334D6E;\n  font-weight: 600;\n  font-size: 14px;\n  margin-bottom: 0px;\n}\n\n.flex {\n  display: flex;\n}\n\n.display {\n  display: flex;\n  justify-content: space-between;\n}\n\n.w98 {\n  width: 98%;\n  margin: 0px auto;\n}\n\n.head_padding {\n  box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  -webkit-box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  -moz-box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  padding: 15px 0px;\n}\n\n.pageheadingspace {\n  margin-bottom: 7px;\n}\n\n.table_heading {\n  width: 100%;\n  background-color: #DFE5F0;\n  /* padding: 10px 0px;*/\n  display: flex;\n  border-radius: 5px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);\n}\n\n.table_heading > div {\n  text-align: center;\n  font-weight: 600;\n  font-size: 12px;\n  color: #323C47;\n  line-height: 35px;\n  text-align: left;\n}\n\n.table_body {\n  width: 100%;\n  display: flex;\n  border-radius: 5px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);\n  text-align: left;\n  line-height: 18px;\n}\n\n.table_body > div {\n  text-align: left;\n  font-weight: 500;\n  font-size: 12px;\n  color: #323C47;\n  /* padding: 5px 0px;*/\n  margin: auto;\n  line-height: 18px;\n}\n\n.mr10 {\n  margin-right: 10px;\n}\n\n.w240 {\n  width: 240px;\n}\n\n.item_cat .table_body > div, .item_cat .table_heading > div {\n  width: calc((100% - 250px) / 2);\n}\n\n.item_cat .table_heading > div:first-child, .item_cat .table_body > div:first-child {\n  width: 50px;\n}\n\n.item_cat .table_heading > div:last-child, .item_cat .table_body > div:last-child {\n  width: 200px;\n}\n\n.group18 {\n  width: 18px;\n  height: auto;\n}\n\n.pt15 {\n  padding-top: 15px;\n  padding-bottom: 5px;\n}\n\n.bottom_pagignation {\n  padding-top: 10px;\n  background-color: #fff;\n  position: fixed;\n  bottom: 0px;\n  z-index: 100;\n}\n\n.bottom_pagignation p {\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 20px;\n}\n\n.bottom_pagignation select {\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-size: 13px;\n  font-weight: 500;\n  color: #0079FF;\n  display: inline;\n}\n\n.bottom_pagignation .w20 {\n  width: 20%;\n}\n\n.bottom_pagignation .w10 {\n  width: 10%;\n}\n\n.bottom_pagignation .w50 {\n  width: 50%;\n}\n\n.bottom_pagignation .w40 {\n  width: 40%;\n}\n\n.number {\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 20px;\n  letter-spacing: 0.01em;\n  color: #000000;\n  margin: 0px 4px;\n}\n\n.active_circle {\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 20px;\n  letter-spacing: 0.01em;\n  color: #fff;\n  padding: 2px 7px;\n  border-radius: 50%;\n  background: #0079FF;\n}\n\n.next {\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 20px;\n  letter-spacing: 0.01em;\n  color: #0079FF;\n}\n\n.w450 {\n  width: 450px;\n}\n\n.white {\n  background-color: #fff;\n  width: calc(100% - 227px);\n  border-top: 3px solid #Ededed;\n}\n\n.nav-item .nav-link {\n  font-weight: 600;\n  color: #405877;\n  padding-bottom: 8px;\n  cursor: pointer;\n  font-size: 13px;\n}\n\n.nav-item .nav-link.active {\n  border-bottom: 3px solid #109CF1 !important;\n  color: #109CF1 !important;\n}\n\n.nav-link {\n  display: block;\n  padding: 1.5rem 0rem;\n  margin: -1rem 1.5rem;\n  margin-left: 0rem;\n}\n\n.flex {\n  display: flex;\n}\n\n.w15 {\n  width: 15%;\n  background-color: #DFE5F0;\n  padding: 10px;\n}\n\n.list > li {\n  background-color: #fff;\n  padding: 7px 0px;\n  margin: 7px 0px;\n}\n\n.list > li > a > span {\n  text-decoration: none;\n  font-size: 10px;\n  font-weight: 500;\n  color: #334D6E;\n}\n\n.list > li img {\n  padding: 0px 10px;\n}\n\n.magnifying-glass {\n  background-image: url(\"/assets/images/assets/Vector.svg\");\n  background-repeat: no-repeat;\n  background-position: left center;\n  text-indent: 10px;\n}\n\n.space33 {\n  padding-left: 5px;\n}\n\n.item_man .table_body > div, .item_man .table_heading > div {\n  width: calc((100% - 100px) / 8);\n}\n\n.item_man .table_heading > div:last-child, .item_man .table_body > div:last-child {\n  width: 100px;\n}\n\n.item_man .table_heading > div:nth-child(5), .item_man .table_heading > div:nth-child(6), .item_man .table_heading > div:nth-child(8) {\n  line-height: 18px;\n}\n\n.dropdown1 {\n  position: relative;\n  display: inline-block;\n  line-height: 35px;\n}\n\n.dropdown-content1 {\n  display: none;\n  position: absolute;\n  background-color: #fff;\n  min-width: 200px;\n  right: 3px;\n  margin-top: 20px;\n  top: -150px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1200;\n}\n\n.dropdown-content1 a {\n  color: black;\n  text-decoration: none;\n  display: block;\n}\n\n.dropdown-content1 a:hover {\n  background-color: #ddd;\n  border-radius: 5px;\n}\n\n.dropdown1:hover .dropdown-content1 {\n  display: block;\n}\n\n.dot3 {\n  padding: 10px 0px;\n  cursor: pointer;\n}\n\n.wid100 {\n  width: 100%;\n}\n\n.wid80 {\n  width: 80%;\n}\n\n.pt10 {\n  padding-bottom: 10px;\n}\n\ninput[type=\"date\"]::-webkit-calendar-picker-indicator {\n  color: rgba(0, 0, 0, 0);\n  opacity: 1;\n  display: block;\n  background: url('cal.svg') no-repeat;\n  width: 20px;\n  height: 20px;\n  border-width: thin;\n  padding: 2px 0px;\n}\n\ninput[type=\"date\"] {\n  color: #787A7D;\n  cursor: pointer;\n}\n\ninput:focus {\n  outline: none;\n}\n\nbutton:focus {\n  outline: none;\n}\n\n.modal textarea {\n  height: 100px;\n}\n\n.alert {\n  font-weight: 400;\n  font-size: 18px;\n  line-height: 27px;\n  letter-spacing: 0.01em;\n  color: #4D5869;\n}\n\n.alert_text {\n  text-align: justify;\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 19px;\n  letter-spacing: 0.01em;\n  color: #858585;\n  margin: 0px 40px;\n  margin-top: 20px;\n}\n\n.center {\n  text-align: center;\n}\n\n.center img {\n  width: 44px;\n  height: 34px;\n}\n\n#delete1Modal .modal-dialog, #deleteitemModal .modal-dialog {\n  width: 350px;\n}\n\n@media (min-width: 576px) {\n  #delete1Modal .modal-dialog, #deleteitemModal .modal-dialog {\n    max-width: 350px;\n  }\n}\n\n#deleteModal .modal-dialog {\n  width: 350px;\n}\n\n@media (min-width: 576px) {\n  #deleteModal .modal-dialog {\n    max-width: 350px;\n  }\n}\n\n.pt101 {\n  padding-top: 30px;\n  margin: 0px 30px;\n}\n\n#itemModal .modal-dialog, #edititemModal .modal-dialog, #subbranchModal .modal-dialog, #add1Modal .modal-dialog, #addpayModal .modal-dialog, #viewpayModal .modal-dialog {\n  width: 750px;\n}\n\n@media (min-width: 576px) {\n  #itemModal .modal-dialog, #edititemModal .modal-dialog, #subbranchModal .modal-dialog, #add1Modal .modal-dialog, #addpayModal .modal-dialog, #viewpayModal .modal-dialog {\n    max-width: 750px;\n  }\n}\n\n.sec1, .sec2 {\n  width: 50%;\n}\n\n.sec1 {\n  padding-right: 10px;\n}\n\n.sec2 {\n  padding-left: 10px;\n}\n\ninput[type=\"date\"]:focus:before,\ninput[type=\"date\"]:valid:before {\n  content: \"\";\n}\n\n/* input[type=date]::-webkit-datetime-edit-text {\n      -webkit-appearance: none;\n      display: none;\n  }\n  input[type=date]::-webkit-datetime-edit-month-field{\n      -webkit-appearance: none;\n      display: none;\n  }\n  input[type=date]::-webkit-datetime-edit-day-field {\n      -webkit-appearance: none;\n      display: none;\n  }\n  input[type=date]::-webkit-datetime-edit-year-field {\n      -webkit-appearance: none;\n      display: none;\n  }*/\n\ninput[type=\"date\"]:before {\n  content: attr(placeholder) !important;\n  padding-right: 20px;\n}\n\n.allo_history .table_body > div, .allo_history .table_heading > div {\n  width: calc((100% - 50px) / 5);\n}\n\n.allo_history .table_heading > div:first-child, .allo_history .table_body > div:first-child {\n  width: 50px;\n  line-height: 4;\n}\n\n.in1 {\n  display: inline-block;\n  background: #CCFFAC;\n  border-radius: 5px;\n  width: 40px;\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 24px;\n  letter-spacing: 0.01em;\n  color: #323C47;\n  text-align: center;\n}\n\n.out {\n  display: inline-block;\n  background: #FFCF88;\n  border-radius: 5px;\n  width: 40px;\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 24px;\n  text-align: center;\n  letter-spacing: 0.01em;\n  color: #323C47;\n}\n\n#historyModal .modal-dialog, #historyModal .modal-dialog {\n  width: 650px;\n}\n\n@media (min-width: 576px) {\n  #historyModal .modal-dialog, #historyModal .modal-dialog {\n    max-width: 650px;\n  }\n}\n\n.supplier_m .table_body > div, .supplier_m .table_heading > div {\n  width: calc((100% - 200px) / 5);\n}\n\n.supplier_m .table_heading > div:last-child, .supplier_m .table_body > div:last-child {\n  width: 200px;\n}\n\n.purchase .table_body > div, .purchase .table_heading > div {\n  width: calc((100% - 100px) / 6);\n}\n\n.purchase .table_heading > div:last-child, .purchase .table_body > div:last-child {\n  width: 100px;\n}\n\ninput[type=file]::-webkit-file-upload-button {\n  border: none;\n  border-right: 2px solid #e3dadb;\n  padding: .6em .4em;\n  border-radius: .2em;\n  background-color: #fff;\n  -webkit-transition: 1s;\n  transition: 1s;\n  color: #109CF1;\n  outline: none;\n}\n\ninput[type=file] {\n  padding: 0px;\n  color: #B6B5B1;\n  cursor: pointer;\n}\n\n.div_1 {\n  border: 1px solid #D5D7DA;\n  width: 25%;\n  height: 27rem;\n  margin: 0px 10px;\n  border-radius: 5px;\n  margin-top: 20px;\n  padding: 20px;\n}\n\n.pt102 {\n  padding-bottom: 20px;\n}\n\n.textarea1 {\n  height: 100px;\n}\n\n.heading1 {\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: 0.01em;\n  color: #334D6E;\n}\n\n.div_2 {\n  width: 75%;\n  margin: 0px 10px;\n  border-radius: 5px;\n  margin-top: 20px;\n  padding: 20px;\n}\n\n.tablehead {\n  background: #DFE5F0;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n  line-height: 40px;\n  display: flex;\n}\n\n.tablehead > div {\n  text-align: center;\n  width: calc(100% / 5);\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 40px;\n  text-align: center;\n  letter-spacing: 0.01em;\n  color: #323C47;\n}\n\n.sel1 {\n  width: 252px;\n  background: #FAFAFA;\n  border: 1px solid #F0EDED;\n  border-radius: 4px;\n}\n\n.tablebody {\n  display: flex;\n  border-bottom: 1px solid #DFE5F0;\n}\n\n.tablebody > div {\n  text-align: center;\n  width: calc(100% / 5);\n  font-weight: normal;\n  font-size: 13px;\n  line-height: 60px;\n  letter-spacing: 0.01em;\n  color: #323C47;\n}\n\n.tabletotal {\n  display: flex;\n  background: #D4FFF2;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n  font-weight: 600;\n  font-size: 13px;\n  letter-spacing: 0.01em;\n  color: #323C47;\n}\n\n.tabletotal > div {\n  text-align: center;\n  line-height: 60px;\n  width: calc(100% / 5);\n}\n\n.tabletotal > div:nth-child(4) {\n  font-weight: 700;\n  font-size: 16px;\n}\n\n.created_date {\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 194px;\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 30px;\n  letter-spacing: 0.01em;\n  color: #323C47;\n  text-align: center;\n}\n\n.mr10 {\n  margin-right: 10px;\n}\n\n.flex30 {\n  display: flex;\n}\n\n.flex30 > div {\n  padding-left: 20px;\n  width: calc( 100% / 3);\n  line-height: 30px;\n  border-right: 1px solid #E5E3EE;\n}\n\n.flex30 > div:last-child {\n  border-right: none;\n}\n\n.name2 {\n  width: 34%;\n  font-weight: 600;\n  font-size: 12px;\n  letter-spacing: 0.01em;\n  color: #323C47;\n}\n\n.value2 {\n  width: 66%;\n  font-weight: 400;\n  font-size: 12px;\n  letter-spacing: 0.01em;\n  color: #323C47;\n}\n\n.flex30 > div:last-child .name2 {\n  width: 45%;\n}\n\n.flex30 > div:last-child .value2 {\n  width: 55%;\n}\n\n.item .tablehead > div, .item .tablebody > div {\n  width: calc(100% / 4);\n}\n\n.item .tabletotal {\n  border-bottom: 1px solid #DFE5F0;\n  background: #fff;\n  box-shadow: none;\n}\n\n.item .tabletotal > div {\n  width: calc(100% /4);\n}\n\n.sale .table_body > div, .sale .table_heading > div {\n  width: calc((100% - 100px) / 6);\n}\n\n.sale .table_heading > div:last-child, .sale .table_body > div:last-child {\n  width: 100px;\n}\n\n.sale .table_heading > div:nth-child(10), .sale .table_body > div:nth-child(10) {\n  line-height: 18px;\n}\n\n.div_11 {\n  border: 1px solid #D5D7DA;\n  width: 25%;\n  height: 37rem;\n  margin: 0px 10px;\n  border-radius: 5px;\n  margin-top: 20px;\n  padding: 20px;\n}\n\n.sale_add .tablehead > div {\n  width: calc(100% / 6);\n}\n\n.sale_add .tablebody > div {\n  width: calc(100% / 6);\n}\n\n.sale_add .tabletotal > div {\n  width: calc(100% / 6);\n}\n\n.sale_add .tabletotal > div:nth-child(5) {\n  font-weight: 700;\n  font-size: 16px;\n}\n\n.file_name {\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 18px;\n  letter-spacing: 0.01em;\n  color: #109CF1;\n}\n\n.history .table_body > div, .history .table_heading > div {\n  width: calc((100% - 50px) / 5);\n}\n\n.history .table_heading > div:first-child, .history .table_body > div:first-child {\n  width: 50px;\n}\n\n.nav-item .nav-link {\n  font-weight: 600;\n  color: #405877;\n  padding-bottom: 8px;\n  padding-top: 10px;\n  cursor: pointer;\n  font-size: 13px;\n  float: left;\n  background: none;\n}\n\n.nav-item .active {\n  border-bottom: 3px solid #109cf1 !important;\n  color: #109cf1 !important;\n}\n\n.modal {\n  width: 100%;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n}\n\n.right {\n  float: left;\n  margin: 5px;\n}\n\n.modal-dialog {\n  margin: 0 auto;\n  top: 10%;\n}\n\n.modal-header:before {\n  display: none;\n}\n\n.modal-title {\n  color: #2B2626;\n  font-weight: 600;\n  font-size: 13px;\n  font-family: 'Open Sans', sans-serif;\n  margin-bottom: 0px;\n}\n\n.errormsg {\n  height: 10px;\n}\n\n.help-block {\n  color: red;\n  margin-bottom: 0%;\n  padding-left: 2px;\n}\n\n.cancel {\n  background-color: white;\n  color: #109CF1;\n  padding: 0px 20px;\n  font-size: 12px;\n  border: solid 2px #109CF1;\n  border-radius: 5px;\n  font-weight: 500;\n  height: 35px;\n  margin-right: 15px;\n}\n\n.align {\n  text-align: center;\n}\n\n.multiselect {\n  width: 330px;\n  height: 35px;\n  left: 30px;\n  top: 63px;\n  background: #FFFFFF;\n  box-sizing: border-box;\n  border-radius: 4px;\n  margin-top: 20px;\n}\n\n#deletesModal .modal-dialog {\n  width: 350px;\n}\n\n@media (min-width: 576px) {\n  #deletesModal .modal-dialog {\n    max-width: 350px;\n  }\n}\n\n.center {\n  text-align: center;\n}\n\n.deleteImg, li {\n  float: left;\n  margin: 3px;\n}\n\n.p_title {\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 15px;\n  letter-spacing: 0.01em;\n  color: #323C47;\n  margin-bottom: 5px;\n}\n\n.has-error .control-label {\n  color: black;\n}\n\n.help-block {\n  color: red;\n  margin-bottom: 0%;\n}\n\n.text-danger {\n  color: red;\n  padding-left: 2px;\n}\n\n.scrollable {\n  max-height: 70vh;\n  overflow-y: auto;\n}\n\n.dropdown-content1 {\n  display: none;\n  position: absolute;\n  background-color: #fff;\n  min-width: 200px;\n  right: 3px;\n  margin-top: 20px;\n  top: -100px;\n  text-align: left;\n  border-radius: 10px;\n}\n\n.dropdown-content1 a {\n  padding-left: 8px;\n}\n\n.ser {\n  margin: 10px 0px;\n}\n\n.illustration-container {\n  display: block;\n}\n\n.illustration-container .illustration-img {\n  width: 40%;\n  margin-left: 25%;\n}\n\n.lowstock {\n  color: red !important;\n  border-radius: 4px;\n}\n\n#deleteModalCat .modal-dialog {\n  width: 350px;\n  text-align: center;\n}\n\n@media (min-width: 576px) {\n  #deleteModalCat .modal-dialog {\n    max-width: 350px;\n  }\n}\n\n.alert_text {\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbnZlbnRvcnktbW9kdWxlL2ludmVudG9yeS1tb2R1bGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaW52ZW50b3J5LW1vZHVsZS9pdGVtLWNtL2l0ZW0tY20uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXO0FDQ2Y7O0FERUU7RUFDRSxvQ0FBb0M7QUNDeEM7O0FEQ0U7RUFDRSxhQUFhO0FDRWpCOztBREFFO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixlQUFlO0FDR25COztBRERFO0VBQ0Usc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLHlCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixlQUFlO0FDSW5COztBREZHO0VBQ0MsaUJBQWlCO0VBRWpCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztBQ0lsQjs7QURGRTtFQUNFLGlCQUFpQjtFQUVqQixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2QsWUFBVztBQ0lqQjs7QURERztFQUNJLGFBQWE7QUNJcEI7O0FERkU7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixrQkFBa0I7QUNLdEI7O0FESEU7RUFDRSxhQUFhO0FDTWpCOztBREpFO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtBQ09sQzs7QURMRTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7QUNRcEI7O0FETkU7RUFDSSwrQ0FBNEM7RUFDNUMsdURBQW9EO0VBQ3BELG9EQUFpRDtFQUNu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aUI7RUFDakIsc0JBQXNCO0VBRXRCLGNBQWE7RUFDYixrQkFBaUI7QUMrRnJCOztBRDdGSTtFQUNFLFlBQVk7QUNnR2xCOztBRDlGTTtFQUNBLFVBQVU7RUFDVixpQkFBaUI7QUNpR3ZCOztBRDlGTTtFQUNFLFVBQVU7RUFDVixpQkFBZ0I7QUNpR3hCOztBRC9GSTtFQUNFLGdCQUFnQjtFQUNkLGdCQUFnQjtBQ2tHeEI7O0FEaEdJO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsV0FBVztFQUVYLGdCQUFnQjtFQUNoQixtQkFBbUI7QUNrR3pCOztBRDVHSTtFQVlGLGlCQUFpQjtBQ29HbkI7O0FEakdNO0VBQ0UsZ0JBQWU7QUNvR3ZCOztBRGxHTTtFQUNFLGNBQWM7QUNxR3RCOztBRHRHTTtFQUdJLFVBQVU7RUFDVixnQkFBZ0I7QUN1RzFCOztBQTM2QkE7RUFDSSxxQkFBcUI7RUFDckIsa0JBQWtCO0FBODZCdEI7O0FBMTZCQTtFQUNJLFlBQVk7RUFDWixrQkFBa0I7QUE2NkJ0Qjs7QUEzNkJBO0VBQ0M7SUFDRyxnQkFBZTtFQTg2QmpCO0FBQ0Y7O0FBNTZCQTtFQUNJLGtCQUFrQjtBQSs2QnRCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9pbnZlbnRvcnktbW9kdWxlL2l0ZW0tY20vaXRlbS1jbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgXG4gIH1cbiAgYm9keXtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gIH1cbiAgLmZsZXh7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuICAuYmx1ZV9idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMDlDRjE7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDBweCAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIC53aGl0ZV9idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgY29sb3I6ICMxMDlDRjE7XG4gICAgcGFkZGluZzogMHB4IDIwcHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGJvcmRlcjoxcHggc29saWQgIzEwOUNGMTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsaW5lLWhlaWdodDogMzVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgIC5zZWxlY3R7XG4gICAgcGFkZGluZzogN3B4IDIwcHg7XG4gICAvLyBwYWRkaW5nOiA3cHggMnB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICM3ODdBN0Q7XG4gIH1cbiAgLmlucHV0e1xuICAgIHBhZGRpbmc6IDdweCAyMHB4O1xuICAgIFxuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBoZWlnaHQ6MzVweDtcbiAgICB9XG5cbiAgIGlucHV0OmZvY3VzLCBzZWxlY3Q6Zm9jdXMsYnV0dG9uOmZvY3Vze1xuICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICB9XG4gIC5wYWdlX2hlYWRpbmc+cHtcbiAgICBjb2xvcjogIzMzNEQ2RTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIH1cbiAgLmZsZXh7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuICAuZGlzcGxheXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxuICAudzk4e1xuICAgIHdpZHRoOiA5OCU7XG4gICAgbWFyZ2luOiAwcHggYXV0bztcbiAgfVxuICAuaGVhZF9wYWRkaW5ne1xuICAgICAgYm94LXNoYWRvdzogMHB4IDdweCA1cHggLTNweCByZ2JhKDAsMCwwLDAuMSk7XG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA3cHggNXB4IC0zcHggcmdiYSgwLDAsMCwwLjEpO1xuICAgICAgLW1vei1ib3gtc2hhZG93OiAwcHggN3B4IDVweCAtM3B4IHJnYmEoMCwwLDAsMC4xKTtcbiAgICBwYWRkaW5nOiAxNXB4IDBweDtcbiAgfVxuICAucGFnZWhlYWRpbmdzcGFjZXtcbiAgICBtYXJnaW4tYm90dG9tOiA3cHg7XG4gIH1cbiAgLnRhYmxlX2hlYWRpbmd7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0RGRTVGMDtcbiAgIC8qIHBhZGRpbmc6IDEwcHggMHB4OyovXG4gICAgLy9tYXJnaW46IDEwcHggMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgIFxuICB9XG4gIFxuICAudGFibGVfaGVhZGluZz5kaXZ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiAjMzIzQzQ3O1xuICAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG4gIFxuICAudGFibGVfYm9keXtcbiAgICAgd2lkdGg6IDEwMCU7XG4gICAgLy9tYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICB9XG4gIC50YWJsZV9ib2R5PmRpdntcbiAgICBcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiAjMzIzQzQ3O1xuICAgLyogcGFkZGluZzogNXB4IDBweDsqL1xuICAgICBtYXJnaW46IGF1dG87XG4gICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICBcbiAgfVxuICBcbiAgLm1yMTB7XG4gIG1hcmdpbi1yaWdodDoxMHB4O1xuICB9XG4gIC53MjQwe1xuICAgd2lkdGg6IDI0MHB4O1xuICB9XG4gIFxuICAuaXRlbV9jYXQgLnRhYmxlX2JvZHk+ZGl2LC5pdGVtX2NhdCAudGFibGVfaGVhZGluZz5kaXZ7XG4gICAgd2lkdGg6IGNhbGMoKDEwMCUgLSAyNTBweCkgLyAyKTtcbiAgfVxuICAuaXRlbV9jYXQgLnRhYmxlX2hlYWRpbmc+ZGl2OmZpcnN0LWNoaWxkLC5pdGVtX2NhdCAudGFibGVfYm9keT5kaXY6Zmlyc3QtY2hpbGR7XG4gICAgd2lkdGg6IDUwcHg7XG4gIH1cbiAgLml0ZW1fY2F0IC50YWJsZV9oZWFkaW5nPmRpdjpsYXN0LWNoaWxkLC5pdGVtX2NhdCAudGFibGVfYm9keT5kaXY6bGFzdC1jaGlsZHtcbiAgICB3aWR0aDogMjAwcHg7XG4gIH1cbiAgLmdyb3VwMTh7XG4gICAgd2lkdGg6IDE4cHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG4gIC5wdDE1e1xuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIH1cbiAgLmJvdHRvbV9wYWdpZ25hdGlvbntcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAwcHg7XG4gICAgei1pbmRleDogMTAwO1xuICB9XG4gIC5ib3R0b21fcGFnaWduYXRpb24gcHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgfVxuICAuYm90dG9tX3BhZ2lnbmF0aW9uIHNlbGVjdHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAjMDA3OUZGO1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgfVxuICAuYm90dG9tX3BhZ2lnbmF0aW9uIC53MjB7XG4gICAgd2lkdGg6IDIwJTtcbiAgfVxuICAuYm90dG9tX3BhZ2lnbmF0aW9uIC53MTB7XG4gICAgd2lkdGg6IDEwJTtcbiAgfVxuICAuYm90dG9tX3BhZ2lnbmF0aW9uIC53NTB7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxuICAuYm90dG9tX3BhZ2lnbmF0aW9uIC53NDB7XG4gICAgd2lkdGg6IDQwJTtcbiAgfVxuICAubnVtYmVye1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIG1hcmdpbjowcHggNHB4O1xuICB9XG4gIC5hY3RpdmVfY2lyY2xle1xuICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOjJweCA3cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogIzAwNzlGRjtcbiAgfVxuICAubmV4dHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICBjb2xvcjogIzAwNzlGRjtcbiAgXG4gIH1cbiAgLnc0NTB7XG4gICAgd2lkdGg6IDQ1MHB4O1xuICB9XG4gIC53aGl0ZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMjdweCk7XG4gICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICNFZGVkZWQ7XG4gIH1cbiAgLm5hdi1pdGVtIC5uYXYtbGlua3tcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjb2xvcjogIzQwNTg3NztcbiAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBmb250LXNpemU6IDEzcHhcbiAgfVxuICBcbiAgLm5hdi1pdGVtIC5uYXYtbGluay5hY3RpdmUge1xuICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzEwOUNGMSAhaW1wb3J0YW50O1xuICAgICAgY29sb3I6ICMxMDlDRjEgIWltcG9ydGFudDtcbiAgfVxuICAubmF2LWxpbmsge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBwYWRkaW5nOiAxLjVyZW0gMHJlbTtcbiAgICAgIG1hcmdpbjogLTFyZW0gMS41cmVtO1xuICAgICAgbWFyZ2luLWxlZnQ6IDByZW07XG4gIH1cbiAgLmZsZXh7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuICAudzE1e1xuICAgIHdpZHRoOiAxNSU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0RGRTVGMDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG4gIC5saXN0Pmxpe1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogN3B4IDBweDtcbiAgICBtYXJnaW46IDdweCAwcHg7XG4gIH1cbiAgLmxpc3Q+bGk+YT5zcGFue1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAjMzM0RDZFO1xuICB9XG4gIC5saXN0PmxpIGltZ3tcbiAgcGFkZGluZzogMHB4IDEwcHg7XG4gIH0gXG4gIC5tYWduaWZ5aW5nLWdsYXNze1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvYXNzZXRzL1ZlY3Rvci5zdmcnKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246bGVmdCBjZW50ZXI7XG4gICAgdGV4dC1pbmRlbnQ6IDEwcHg7XG4gIH1cbiAgLnNwYWNlMzN7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIH1cbiAgLml0ZW1fbWFuIC50YWJsZV9ib2R5PmRpdiwuaXRlbV9tYW4gLnRhYmxlX2hlYWRpbmc+ZGl2e1xuICAgIHdpZHRoOiBjYWxjKCgxMDAlIC0gMTAwcHgpIC8gOCk7XG4gIH1cbiAgXG4gIC5pdGVtX21hbiAudGFibGVfaGVhZGluZz5kaXY6bGFzdC1jaGlsZCwuaXRlbV9tYW4gLnRhYmxlX2JvZHk+ZGl2Omxhc3QtY2hpbGR7XG4gICAgd2lkdGg6IDEwMHB4O1xuICB9XG4gIC5pdGVtX21hbiAudGFibGVfaGVhZGluZz5kaXY6bnRoLWNoaWxkKDUpLC5pdGVtX21hbiAudGFibGVfaGVhZGluZz5kaXY6bnRoLWNoaWxkKDYpLC5pdGVtX21hbiAudGFibGVfaGVhZGluZz5kaXY6bnRoLWNoaWxkKDgpe1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O31cbiAgXG4gIC5kcm9wZG93bjEge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gIH1cbiAgXG4gIC5kcm9wZG93bi1jb250ZW50MSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBtaW4td2lkdGg6MjAwcHg7XG4gICAgcmlnaHQ6M3B4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgdG9wOiAtMTUwcHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsMCwwLDAuMik7XG4gICAgei1pbmRleDogMTIwMDtcbiAgfVxuICBcbiAgLmRyb3Bkb3duLWNvbnRlbnQxIGEge1xuICAgIGNvbG9yOiBibGFjaztcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgXG4gIC5kcm9wZG93bi1jb250ZW50MSBhOmhvdmVyIHtiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xuICBib3JkZXItcmFkaXVzOiA1cHg7fVxuICBcbiAgLmRyb3Bkb3duMTpob3ZlciAuZHJvcGRvd24tY29udGVudDEge2Rpc3BsYXk6IGJsb2NrO31cbiAgLmRvdDN7XG4gIHBhZGRpbmc6IDEwcHggMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgLndpZDEwMHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAud2lkODB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxuICBcbiAgLnB0MTB7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIH1cbiAgaW5wdXRbdHlwZT1cImRhdGVcIl06Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XG4gICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1nMS9jYWwuc3ZnKSBuby1yZXBlYXQ7XG4gICAgICB3aWR0aDogMjBweDtcbiAgICAgIGhlaWdodDogMjBweDtcbiAgICAgIGJvcmRlci13aWR0aDogdGhpbjtcbiAgICAgIHBhZGRpbmc6IDJweCAwcHg7XG4gIH1cbiAgaW5wdXRbdHlwZT1cImRhdGVcIl17XG4gICAgY29sb3I6ICM3ODdBN0Q7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIGlucHV0OmZvY3Vze1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cbiAgYnV0dG9uOmZvY3Vze1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cbiAgLm1vZGFsIHRleHRhcmVhe1xuICAgIGhlaWdodDogMTAwcHg7XG4gIH1cbiAgLmFsZXJ0e1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyN3B4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gICAgY29sb3I6ICM0RDU4Njk7XG4gIH1cbiAgLmFsZXJ0X3RleHR7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBsaW5lLWhlaWdodDogMTlweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICAgIGNvbG9yOiAjODU4NTg1O1xuICAgIG1hcmdpbjogMHB4IDQwcHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgXG4gIH1cbiAgLmNlbnRlcntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLmNlbnRlciBpbWd7XG4gICAgd2lkdGg6IDQ0cHg7XG4gIGhlaWdodDogMzRweDtcbiAgfVxuXG4gIFxuICAjZGVsZXRlMU1vZGFsIC5tb2RhbC1kaWFsb2csI2RlbGV0ZWl0ZW1Nb2RhbCAubW9kYWwtZGlhbG9nIHtcbiAgICAgIHdpZHRoOiAzNTBweDtcbiAgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpe1xuICAjZGVsZXRlMU1vZGFsIC5tb2RhbC1kaWFsb2csI2RlbGV0ZWl0ZW1Nb2RhbCAubW9kYWwtZGlhbG9nICB7XG4gICAgICBtYXgtd2lkdGg6MzUwcHg7XG4gIH1cbiAgfVxuICAjZGVsZXRlTW9kYWwgLm1vZGFsLWRpYWxvZyB7XG4gICAgICB3aWR0aDogMzUwcHg7XG4gIH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KXtcbiAgICNkZWxldGVNb2RhbCAubW9kYWwtZGlhbG9nIHtcbiAgICAgIG1heC13aWR0aDozNTBweDtcbiAgfVxuICB9XG4gIC5wdDEwMXtcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICBtYXJnaW46IDBweCAzMHB4O1xuICB9XG4gICNpdGVtTW9kYWwgLm1vZGFsLWRpYWxvZywjZWRpdGl0ZW1Nb2RhbCAubW9kYWwtZGlhbG9nLCNzdWJicmFuY2hNb2RhbCAubW9kYWwtZGlhbG9nLCNhZGQxTW9kYWwgLm1vZGFsLWRpYWxvZywjYWRkcGF5TW9kYWwgLm1vZGFsLWRpYWxvZywjdmlld3BheU1vZGFsIC5tb2RhbC1kaWFsb2cge1xuICAgICAgd2lkdGg6IDc1MHB4O1xuICB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiA1NzZweCl7XG4gICAjaXRlbU1vZGFsIC5tb2RhbC1kaWFsb2csI2VkaXRpdGVtTW9kYWwgLm1vZGFsLWRpYWxvZywjc3ViYnJhbmNoTW9kYWwgLm1vZGFsLWRpYWxvZywjYWRkMU1vZGFsIC5tb2RhbC1kaWFsb2csI2FkZHBheU1vZGFsIC5tb2RhbC1kaWFsb2csI3ZpZXdwYXlNb2RhbCAubW9kYWwtZGlhbG9nIHtcbiAgICAgIG1heC13aWR0aDo3NTBweDtcbiAgfVxuICB9XG4gIC5zZWMxLC5zZWMye1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbiAgLnNlYzF7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgfVxuICAuc2VjMntcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIH1cbiAgaW5wdXRbdHlwZT1cImRhdGVcIl06Zm9jdXM6YmVmb3JlLFxuICAgIGlucHV0W3R5cGU9XCJkYXRlXCJdOnZhbGlkOmJlZm9yZSB7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgIH1cbiAgXG4gICAvKiBpbnB1dFt0eXBlPWRhdGVdOjotd2Via2l0LWRhdGV0aW1lLWVkaXQtdGV4dCB7XG4gICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIGlucHV0W3R5cGU9ZGF0ZV06Oi13ZWJraXQtZGF0ZXRpbWUtZWRpdC1tb250aC1maWVsZHtcbiAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgaW5wdXRbdHlwZT1kYXRlXTo6LXdlYmtpdC1kYXRldGltZS1lZGl0LWRheS1maWVsZCB7XG4gICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIGlucHV0W3R5cGU9ZGF0ZV06Oi13ZWJraXQtZGF0ZXRpbWUtZWRpdC15ZWFyLWZpZWxkIHtcbiAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gIH0qL1xuICBcbiAgIGlucHV0W3R5cGU9XCJkYXRlXCJdOmJlZm9yZSB7XG4gICAgICBjb250ZW50OiBhdHRyKHBsYWNlaG9sZGVyKSAhaW1wb3J0YW50O1xuICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICB9XG4gICAgLmFsbG9faGlzdG9yeSAudGFibGVfYm9keT5kaXYsLmFsbG9faGlzdG9yeSAudGFibGVfaGVhZGluZz5kaXZ7XG4gICAgd2lkdGg6IGNhbGMoKDEwMCUgLSA1MHB4KSAvIDUpO1xuICB9XG4gIC5hbGxvX2hpc3RvcnkgLnRhYmxlX2hlYWRpbmc+ZGl2OmZpcnN0LWNoaWxkLC5hbGxvX2hpc3RvcnkgLnRhYmxlX2JvZHk+ZGl2OmZpcnN0LWNoaWxke1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0O1xuICB9XG4gIC5pbjF7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJhY2tncm91bmQ6ICNDQ0ZGQUM7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gICAgY29sb3I6ICMzMjNDNDc7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5vdXR7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJhY2tncm91bmQ6ICNGRkNGODg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICAgIGNvbG9yOiAjMzIzQzQ3O1xuICB9XG4gICNoaXN0b3J5TW9kYWwgLm1vZGFsLWRpYWxvZywjaGlzdG9yeU1vZGFsIC5tb2RhbC1kaWFsb2cge1xuICAgICAgd2lkdGg6IDY1MHB4O1xuICB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiA1NzZweCl7XG4gICAjaGlzdG9yeU1vZGFsIC5tb2RhbC1kaWFsb2csI2hpc3RvcnlNb2RhbCAubW9kYWwtZGlhbG9nIHtcbiAgICAgIG1heC13aWR0aDo2NTBweDtcbiAgfVxuICB9XG4gICAgLnN1cHBsaWVyX20gLnRhYmxlX2JvZHk+ZGl2LC5zdXBwbGllcl9tIC50YWJsZV9oZWFkaW5nPmRpdntcbiAgICB3aWR0aDogY2FsYygoMTAwJSAtIDIwMHB4KSAvIDUpO1xuICB9XG4gIC5zdXBwbGllcl9tIC50YWJsZV9oZWFkaW5nPmRpdjpsYXN0LWNoaWxkLC5zdXBwbGllcl9tIC50YWJsZV9ib2R5PmRpdjpsYXN0LWNoaWxke1xuICAgIHdpZHRoOiAyMDBweDtcbiAgfVxuICAgIC5wdXJjaGFzZSAudGFibGVfYm9keT5kaXYsLnB1cmNoYXNlIC50YWJsZV9oZWFkaW5nPmRpdntcbiAgICB3aWR0aDogY2FsYygoMTAwJSAtIDEwMHB4KSAvIDYpO1xuICB9XG4gIC5wdXJjaGFzZSAudGFibGVfaGVhZGluZz5kaXY6bGFzdC1jaGlsZCwucHVyY2hhc2UgLnRhYmxlX2JvZHk+ZGl2Omxhc3QtY2hpbGR7XG4gICAgd2lkdGg6IDEwMHB4O1xuICB9XG4gIGlucHV0W3R5cGU9ZmlsZV06Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgI2UzZGFkYjtcbiAgICBwYWRkaW5nOiAuNmVtIC40ZW07XG4gICAgYm9yZGVyLXJhZGl1czogLjJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHRyYW5zaXRpb246IDFzO1xuICAgIGNvbG9yOiAjMTA5Q0YxO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cbiAgXG4gIGlucHV0W3R5cGU9ZmlsZV0ge1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICAgY29sb3I6ICNCNkI1QjE7XG4gICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAuZGl2XzF7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0Q1RDdEQTtcbiAgICB3aWR0aDogMjUlO1xuICAgIGhlaWdodDogMjdyZW07XG4gICAgbWFyZ2luOiAwcHggMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICB9XG4gIC5wdDEwMntcbiAgICBwYWRkaW5nLWJvdHRvbToyMHB4O1xuICB9XG4gIC50ZXh0YXJlYTF7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgfVxuICAuaGVhZGluZzF7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgICBjb2xvcjogIzMzNEQ2RTtcbiAgfVxuICBcbiAgLmRpdl8ye1xuICAgIHdpZHRoOiA3NSU7XG4gICAgbWFyZ2luOiAwcHggMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICB9XG4gIC50YWJsZWhlYWR7XG4gICAgYmFja2dyb3VuZDogI0RGRTVGMDtcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbiAgLnRhYmxlaGVhZD5kaXZ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyA1KTtcbiAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgY29sb3I6ICMzMjNDNDc7XG4gIH1cbiAgLnNlbDF7XG4gICAgd2lkdGg6IDI1MnB4O1xuICAgIGJhY2tncm91bmQ6ICNGQUZBRkE7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0YwRURFRDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIH1cbiAgLnRhYmxlYm9keXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkICNERkU1RjA7XG4gIH1cbiAgLnRhYmxlYm9keT5kaXZ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyA1KTtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBsaW5lLWhlaWdodDogNjBweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICAgIGNvbG9yOiAjMzIzQzQ3O1xuICB9XG4gIC50YWJsZXRvdGFse1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYmFja2dyb3VuZDogI0Q0RkZGMjtcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gICAgY29sb3I6ICMzMjNDNDc7XG4gIH1cbiAgLnRhYmxldG90YWw+ZGl2e1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsaW5lLWhlaWdodDogNjBweDtcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gNSk7XG4gIH1cbiAgLnRhYmxldG90YWw+ZGl2Om50aC1jaGlsZCg0KXtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbiAgLmNyZWF0ZWRfZGF0ZXtcbiAgIC8vIGJhY2tncm91bmQ6dXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcxL3RlYWxfcmVjLnN2Zyk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIHdpZHRoOiAxOTRweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICAgIGNvbG9yOiAjMzIzQzQ3O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgXG4gIH1cbiAgLm1yMTB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cbiAgLmZsZXgzMHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIFxuICAgIFxuICB9XG4gIC5mbGV4MzA+ZGl2e1xuICAgIHBhZGRpbmctbGVmdDoyMHB4O1xuICAgIHdpZHRoOiBjYWxjKCAxMDAlIC8gMyk7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI0U1RTNFRTtcbiAgfVxuICAuZmxleDMwPmRpdjpsYXN0LWNoaWxke1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgfVxuICAubmFtZTJ7XG4gICAgd2lkdGg6IDM0JTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICBcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICAgIGNvbG9yOiAjMzIzQzQ3O1xuICBcbiAgfVxuICAudmFsdWUye1xuICAgIHdpZHRoOiA2NiU7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgY29sb3I6ICAjMzIzQzQ3O1xuICBcbiAgfVxuIFxuICAuZmxleDMwPmRpdjpsYXN0LWNoaWxkIC5uYW1lMntcbiAgICB3aWR0aDogNDUlO1xuICB9XG4gIC5mbGV4MzA+ZGl2Omxhc3QtY2hpbGQgLnZhbHVlMntcbiAgICB3aWR0aDogNTUlO1xuICB9XG4gIC5pdGVtIC50YWJsZWhlYWQ+ZGl2LC5pdGVtIC50YWJsZWJvZHk+ZGl2e1xuICBcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gNCk7XG4gIH1cbiAgLml0ZW0gLnRhYmxldG90YWx7XG4gICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkICNERkU1RjA7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3gtc2hhZG93Om5vbmU7XG4gIFxuICB9XG4gIC5pdGVtIC50YWJsZXRvdGFsPmRpdntcbiAgICB3aWR0aDogY2FsYygxMDAlIC80KTtcbiAgfVxuICAgIC5zYWxlIC50YWJsZV9ib2R5PmRpdiwuc2FsZSAudGFibGVfaGVhZGluZz5kaXZ7XG4gICAgd2lkdGg6IGNhbGMoKDEwMCUgLSAxMDBweCkgLyA2KTtcbiAgfVxuICAuc2FsZSAudGFibGVfaGVhZGluZz5kaXY6bGFzdC1jaGlsZCwuc2FsZSAudGFibGVfYm9keT5kaXY6bGFzdC1jaGlsZHtcbiAgICB3aWR0aDogMTAwcHg7XG4gIH1cbiAgLnNhbGUgLnRhYmxlX2hlYWRpbmc+ZGl2Om50aC1jaGlsZCgxMCksLnNhbGUgLnRhYmxlX2JvZHk+ZGl2Om50aC1jaGlsZCgxMCl7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIH1cbiAgLmRpdl8xMXtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRDVEN0RBO1xuICAgIHdpZHRoOiAyNSU7XG4gICAgaGVpZ2h0OiAzN3JlbTtcbiAgICBtYXJnaW46IDBweCAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gIH1cbiAgXG4gIC5zYWxlX2FkZCAudGFibGVoZWFkPmRpdntcbiAgXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAvIDYpO1xuICBcbiAgfVxuICBcbiAgLnNhbGVfYWRkIC50YWJsZWJvZHk+ZGl2e1xuICBcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gNik7XG4gIFxuICB9XG4gIFxuICAuc2FsZV9hZGQgLnRhYmxldG90YWw+ZGl2e1xuICBcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gNik7XG4gIH1cbiAgLnNhbGVfYWRkIC50YWJsZXRvdGFsPmRpdjpudGgtY2hpbGQoNSl7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG4gIC5maWxlX25hbWV7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgICBjb2xvcjogIzEwOUNGMTtcbiAgXG4gIH1cbiAgICAuaGlzdG9yeSAudGFibGVfYm9keT5kaXYsLmhpc3RvcnkgLnRhYmxlX2hlYWRpbmc+ZGl2e1xuICAgIHdpZHRoOiBjYWxjKCgxMDAlIC0gNTBweCkgLyA1KTtcbiAgfVxuICAuaGlzdG9yeSAudGFibGVfaGVhZGluZz5kaXY6Zmlyc3QtY2hpbGQsLmhpc3RvcnkgLnRhYmxlX2JvZHk+ZGl2OmZpcnN0LWNoaWxke1xuICAgIHdpZHRoOiA1MHB4O1xuICB9XG4gIC5uYXYtaXRlbSB7XG4gICAgLm5hdi1saW5rIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgY29sb3I6ICM0MDU4Nzc7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgfVxuICAgIC5hY3RpdmUge1xuICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzEwOWNmMSAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogIzEwOWNmMSAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuICAubW9kYWwge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgIFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICB9XG4gICAgICAgLnJpZ2h0e1xuICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICB9XG4gICAubW9kYWwtZGlhbG9nIHtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIHRvcDoxMCU7XG4gICAgfVxuICAgIC5tb2RhbC1oZWFkZXI6YmVmb3Jle1xuICAgICAgZGlzcGxheTpub25lO1xuICAgIH1cbiAgICAubW9kYWwtdGl0bGUge1xuICAgICAgY29sb3I6ICMyQjI2MjY7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICB9XG4gIC5lcnJvcm1zZ3tcbiAgICBoZWlnaHQ6MTBweDtcbiAgfVxuICAuaGVscC1ibG9ja3tcbiAgICBjb2xvcjogcmVkO1xuICAgIG1hcmdpbi1ib3R0b206IDAlO1xuICAgIC8vdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctbGVmdDogMnB4O1xuICAgIH1cbiAgICAuY2FuY2Vse1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIGNvbG9yOiAjMTA5Q0YxO1xuICAgICAgICBwYWRkaW5nOiAwcHggMjBweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBib3JkZXI6IHNvbGlkIDJweCAjMTA5Q0YxO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgIH1cbiAgICAuYWxpZ257XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIC5tdWx0aXNlbGVjdHtcbiAgICAgIHdpZHRoOiAzMzBweDtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgbGVmdDogMzBweDtcbiAgICB0b3A6IDYzcHg7XG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBtYXJnaW4tdG9wOjIwcHg7XG4gICAgfVxuICAgICNkZWxldGVzTW9kYWwgLm1vZGFsLWRpYWxvZyB7XG4gICAgICB3aWR0aDogMzUwcHg7XG4gIH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KXtcbiAgI2RlbGV0ZXNNb2RhbCAubW9kYWwtZGlhbG9nIHtcbiAgICAgIG1heC13aWR0aDozNTBweDtcbiAgfVxuICB9XG4gIC5jZW50ZXJ7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiBcbiAgLmRlbGV0ZUltZyxsaXtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW46M3B4O1xuICB9XG4gIC5wX3RpdGxle1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gICAgLy9jb2xvcjogIzJCMjYyNjtcbiAgICBjb2xvcjojMzIzQzQ3O1xuICAgIG1hcmdpbi1ib3R0b206NXB4O1xuICAgIH1cbiAgICAuaGFzLWVycm9yIC5jb250cm9sLWxhYmVse1xuICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgfVxuICAgICAgLmhlbHAtYmxvY2t7XG4gICAgICBjb2xvcjogcmVkO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMCU7XG4gICAgICBcbiAgICAgIH1cbiAgICAgIC50ZXh0LWRhbmdlcntcbiAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OjJweDtcbiAgICAgIH1cbiAgICAuc2Nyb2xsYWJsZXtcbiAgICAgIG1heC1oZWlnaHQ6IDcwdmg7XG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgfVxuICAgIC5kcm9wZG93bi1jb250ZW50MXtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgbWluLXdpZHRoOiAyMDBweDtcbiAgICAgIHJpZ2h0OiAzcHg7XG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgdG9wOiAtMTAwcHg7XG4gICAgICAvL3RvcDotMTFweDtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICBhe1xuICBwYWRkaW5nLWxlZnQ6IDhweDs7XG4gICAgIH1cbiAgICAgIH1cbiAgICAgIC5zZXJ7XG4gICAgICAgIG1hcmdpbjoxMHB4IDBweDtcbiAgICAgIH1cbiAgICAgIC5pbGx1c3RyYXRpb24tY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIC5pbGx1c3RyYXRpb24taW1nIHtcbiAgICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyNSU7XG4gICAgICAgIH1cbiAgICAgIH0gXG4gICAgIiwiQGltcG9ydCBcIi4uL2ludmVudG9yeS1tb2R1bGUuY29tcG9uZW50LnNjc3NcIjtcblxuLmxvd3N0b2Nre1xuICAgIGNvbG9yOiByZWQgIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgXG59XG5cbiNkZWxldGVNb2RhbENhdCAubW9kYWwtZGlhbG9nIHtcbiAgICB3aWR0aDogMzUwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KXtcbiAjZGVsZXRlTW9kYWxDYXQgLm1vZGFsLWRpYWxvZyB7XG4gICAgbWF4LXdpZHRoOjM1MHB4O1xufVxufVxuLmFsZXJ0X3RleHR7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl19 */";
      /***/
    },

    /***/
    "./src/app/components/inventory-module/item-cm/item-cm.component.ts":
    /*!**************************************************************************!*\
      !*** ./src/app/components/inventory-module/item-cm/item-cm.component.ts ***!
      \**************************************************************************/

    /*! exports provided: ItemCmComponent */

    /***/
    function srcAppComponentsInventoryModuleItemCmItemCmComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ItemCmComponent", function () {
        return ItemCmComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _services_message_show_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../services/message-show.service */
      "./src/app/services/message-show.service.ts");
      /* harmony import */


      var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../services/http.service */
      "./src/app/services/http.service.ts");
      /* harmony import */


      var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../services/authenticator.service */
      "./src/app/services/authenticator.service.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./item */
      "./src/app/components/inventory-module/item-cm/item.ts");
      /* harmony import */


      var _services_export_to_pdf_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../services/export-to-pdf.service */
      "./src/app/services/export-to-pdf.service.ts");
      /* harmony import */


      var _services_excel_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../services/excel.service */
      "./src/app/services/excel.service.ts");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! moment */
      "./node_modules/moment/moment.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);

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

      var ItemCmComponent =
      /** @class */
      function () {
        var ItemCmComponent = /*#__PURE__*/function () {
          function ItemCmComponent(msgService, httpService, auth, _pdfService, excelService) {
            _classCallCheck(this, ItemCmComponent);

            this.msgService = msgService;
            this.httpService = httpService;
            this.auth = auth;
            this._pdfService = _pdfService;
            this.excelService = excelService;
            this.activeSession = 'onev';
            this.arr = [];
            this.category_model = new _item__WEBPACK_IMPORTED_MODULE_5__["Category"]();
            this.categoryAllData = [];
            this.classRoomData = [];
            this.CourseList = [];
            this.displayBatchSize = 25;
            this.is_add_item = false;
            this.isaddcat = true;
            this.isedit = false;
            this.currentKey = '';
            this.currentOrder = '';
            this.item = new _item__WEBPACK_IMPORTED_MODULE_5__["Item"]();
            this.itemAllData = [];
            this.masterCourseList = [];
            this.pagedclassRoomData = [];
            this.pagedItemData = [];
            this.pageIndex = 1;
            this.pageIndexforItem = 1;
            this.sortingDir = "asc";
            this.searchData = [];
            this.searchflag = false;
            this.searchText = "";
            this.sizeArr = [25, 50, 100, 150, 200, 500, 1000];
            this.totalItemRow = 0;
            this.totalRow = 0;
            this.type = '';
            this.url = "/api/v1/inventory/";
            this.tableRows = [];
            this.tempObj = {
              item_id: '',
              item_name: ''
            };
            /* ==========================================Download Data for category=============*/

            this.categoryDataForDownload = [{
              primary_key: 'category_name',
              value: "Name",
              charactLimit: 25,
              sorting: true,
              visibility: true
            }, {
              primary_key: 'desc',
              value: "Description",
              charactLimit: 25,
              sorting: false,
              visibility: true
            }];
            this.ItemDataForDownload = [{
              primary_key: 'item_name',
              value: "Item"
            }, {
              primary_key: 'category_name',
              value: "Category"
            }, {
              primary_key: 'alloted_units',
              value: "Total Units"
            }, {
              primary_key: 'available_units',
              value: "Available Units"
            }, {
              primary_key: 'unit_cost',
              value: "Buying/Unit Price"
            }, {
              primary_key: 'sale_price',
              value: "Sale Price"
            }, {
              primary_key: 'tax_percent',
              value: "Taxes (%)"
            }, {
              primary_key: 'out_of_stock_indicator_units',
              value: "Low Stock indicator (Units)"
            }]; //allocate to subbranch

            this.allocatedata = {
              item_name: '',
              item_id: '',
              alloted_units: '',
              date_of_dispatch: '',
              available_units: '',
              sub_branch_id: '',
              // sub_branch_name:'',
              sub_branch_item_id: '',
              institution_id: sessionStorage.getItem('institute_id')
            };
            this.subBranchAllData = [];
            this.itemfromSubbrach = [];
            this.allocationHistoryData = [];
            this.manageData = {
              item_id: '',
              units_added: '',
              available_units: '',
              alloted_units: '',
              institution_id: sessionStorage.getItem('institute_id')
            }; //sorting

            this.headElements = ['item_name', 'category_name', 'alloted_units'];
            this.isMainBranch = "N";
            this.category_model.institution_id = sessionStorage.getItem('institute_id');
            this.item.institution_id = sessionStorage.getItem('institute_id');
            this.getSubBranches();
          }

          _createClass(ItemCmComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.getCategoryDetails();
              this.setTableData();
              this.getAllMasterCourseList();
              this.getItemDetails();
              this.checkManinBranch();
            }
          }, {
            key: "toggle",
            value: function toggle(id, param) {
              this.activeSession = id;
              this.isaddcat = !param;
              this.is_add_item = param;
            }
            /*======================================CRUD For Category===============*/

          }, {
            key: "saveCategoryDetails",
            value: function saveCategoryDetails() {
              var _this2 = this;

              if (this.catForm.valid) {
                delete this.category_model.id;
                this.httpService.postData(this.url + 'category/', this.category_model).subscribe(function (res) {
                  $('#addModal').modal('hide');

                  _this2.auth.hideLoader();

                  _this2.getCategoryDetails();

                  if (res.statusCode == 200) {
                    _this2.msgService.showErrorMessage(_this2.msgService.toastTypes.success, '', 'Category Added Successfully');

                    _this2.getCategoryDetails();
                  }
                }, function (err) {
                  _this2.auth.hideLoader();

                  _this2.msgService.showErrorMessage(_this2.msgService.toastTypes.error, '', err.error.message);
                });
              } else {
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Category name is mandatory');
              }
            }
          }, {
            key: "getCategoryDetails",
            value: function getCategoryDetails() {
              var _this3 = this;

              //this.auth.showLoader();
              this.httpService.getData(this.url + 'category/all/' + this.category_model.institution_id).subscribe(function (res) {
                _this3.auth.hideLoader();

                _this3.categoryAllData = res;
                _this3.classRoomData = res;
                _this3.totalRow = res.length;

                _this3.fetchTableDataByPage(_this3.pageIndex);

                _this3.auth.hideLoader();
              }, function (err) {
                _this3.auth.hideLoader();
              });
            }
          }, {
            key: "editRow",
            value: function editRow(object) {
              this.isedit = true;
              this.category_model.id = object.data.id; //this.category_model.institution_id = object.data.institution_id;

              this.category_model.category_name = object.data.category_name;
              this.category_model.desc = object.data.desc;
              this.category_model.category_id = object.data.category_id;
              $('#addModal').modal('show');
            }
          }, {
            key: "updateCategoryDetails",
            value: function updateCategoryDetails() {
              var _this4 = this;

              var obj = {
                id: this.category_model.id,
                institution_id: this.category_model.institution_id,
                category_name: this.category_model.category_name,
                desc: this.category_model.desc,
                category_id: this.category_model.category_id
              };

              if (this.catForm.valid) {
                this.httpService.putData(this.url + 'category', obj).subscribe(function () {
                  _this4.msgService.showErrorMessage(_this4.msgService.toastTypes.success, '', " Category Updated Successfully");

                  _this4.auth.hideLoader();

                  $('#addModal').modal('hide');

                  _this4.getCategoryDetails();
                }, function (err) {
                  _this4.msgService.showErrorMessage(_this4.msgService.toastTypes.error, '', err.error.message);

                  _this4.auth.hideLoader();
                });
              } else {
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', "Please fill all mandatory field");
              }
            }
          }, {
            key: "cancel",
            value: function cancel(param) {
              this.category_model = {
                category_name: '',
                desc: '',
                institution_id: sessionStorage.getItem('institute_id'),
                id: '',
                category_id: ''
              };
              this.item = {
                category_name: '',
                standard_name: '',
                //alloted_units:'',
                category_id: '',
                desc: '',
                institution_id: sessionStorage.getItem('institute_id'),
                item_id: '',
                item_name: '',
                out_of_stock_indicator_units: '',
                sale_price: '',
                standard_id: '',
                subject_id: '',
                tax_percent: '',
                unit_cost: '',
                subject_name: ''
              };
              this.allocatedata = {
                item_name: '',
                item_id: '',
                alloted_units: '',
                date_of_dispatch: '',
                available_units: '',
                sub_branch_id: '',
                // sub_branch_name:'',
                sub_branch_item_id: '',
                institution_id: sessionStorage.getItem('institute_id')
              };
              this.manageData = {
                item_id: '',
                units_added: '',
                available_units: '',
                alloted_units: '',
                institution_id: sessionStorage.getItem('institute_id')
              };
              this.catForm.resetForm(this.category_model);
              this.itemForm.resetForm(this.item);
              this.history.resetForm(this.manageData);
              this.allcateForm.resetForm(this.allocatedata);
              this.isedit = false;
            }
          }, {
            key: "deleteRow",
            value: function deleteRow(obj) {
              var _this5 = this;

              this.auth.showLoader();
              this.httpService.deleteData(this.url + 'category/' + obj, null).subscribe(function (res) {
                _this5.auth.hideLoader();

                _this5.msgService.showErrorMessage('success', '', 'Category Deleted Successfully');

                _this5.getCategoryDetails();

                $('#deleteModalCat').modal('hide');
              }, function (err) {
                _this5.msgService.showErrorMessage('error', '', err.error.message);

                _this5.auth.hideLoader();
              });
            }
            /*======================================CRUD For Item===============*/

          }, {
            key: "saveItemDetails",
            value: function saveItemDetails() {
              var _this6 = this;

              if (this.itemForm.valid) {
                this.httpService.postData(this.url + 'item', this.item).subscribe(function (res) {
                  $('#itemModal').modal('hide');

                  _this6.auth.hideLoader();

                  _this6.getItemDetails();

                  if (res.statusCode == 200) {
                    _this6.msgService.showErrorMessage(_this6.msgService.toastTypes.success, '', 'Item Added Successfully');

                    _this6.getCategoryDetails(); //

                  }
                }, function (err) {
                  _this6.auth.hideLoader();

                  _this6.msgService.showErrorMessage(_this6.msgService.toastTypes.error, '', err.error.message);
                });
              } else {
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', "Please fill all mandatory field");
              }
            } //get item data

          }, {
            key: "getItemDetails",
            value: function getItemDetails() {
              var _this7 = this;

              this.auth.showLoader();
              this.httpService.getData(this.url + 'item/all/' + this.category_model.institution_id).subscribe(function (res) {
                _this7.auth.hideLoader();

                _this7.itemAllData = res; // this.classRoomData = res;

                _this7.totalItemRow = res.length;

                _this7.fetchTableDataByPageforItem(_this7.pageIndex);

                _this7.auth.hideLoader();
              }, function (err) {
                _this7.auth.hideLoader();
              });
            } //edit items

          }, {
            key: "editItem",
            value: function editItem(data) {
              //this.getAllMasterCourseList();
              //this.onMasterCourseSelection(data.standard_id);
              if (this.onMasterCourseSelection.length > 0) {
                this.isedit = true;
                this.item.item_id = data.item_id;
                this.item.category_id = data.category_id;
                this.item.item_name = data.item_name;
                this.item.desc = data.desc; // this.item.alloted_units =data.alloted_units;

                this.item.unit_cost = data.unit_cost;
                this.item.sale_price = data.sale_price;
                this.item.tax_percent = data.tax_percent;
                this.item.out_of_stock_indicator_units = data.out_of_stock_indicator_units; //this.item.institution_id =data.institution_id;
                //this.item.standard_id =data.standard_id;

                this.item.standard_name = data.standard_name;
                this.item.standard_id = data.standard_id;
                this.item.subject_name = data.subject_name;
                this.item.subject_id = data.subject_id;
              }
            } //update item

          }, {
            key: "updateItemDetails",
            value: function updateItemDetails() {
              var _this8 = this;

              var obj = {
                item_id: this.item.item_id,
                institution_id: sessionStorage.getItem('institution_id'),
                item_name: this.item.item_name,
                desc: this.item.desc,
                category_id: this.item.category_id,
                //alloted_units:this.item.alloted_units,
                unit_cost: this.item.unit_cost,
                sale_price: this.item.sale_price,
                tax_percent: this.item.tax_percent,
                out_of_stock_indicator_units: this.item.out_of_stock_indicator_units,
                standard_id: this.item.standard_id,
                subject_id: this.item.subject_id
              };

              if (this.itemForm.valid) {
                this.httpService.putData(this.url + 'item', obj).subscribe(function () {
                  $('#itemModal').modal('hide');

                  _this8.msgService.showErrorMessage(_this8.msgService.toastTypes.success, '', " Item Updated Successfully");

                  _this8.getItemDetails();
                }, function (err) {
                  _this8.msgService.showErrorMessage(_this8.msgService.toastTypes.error, '', err.error.message);

                  _this8.auth.hideLoader();
                });
              } else {
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', "Please fill all mandatory field");
              }
            }
          }, {
            key: "showConfirm",
            value: function showConfirm(obj) {
              this.tempObj = obj;
              this.tempObj.item_id = obj.item_id;

              if (obj.alloted_units == 0) {
                // $('#deleteModal').modal('show');
                $('#deleteModal').modal('show');
              } else {
                this.msgService.showErrorMessage('error', '', "You can't delete this item since it is allocated");
              }
            }
          }, {
            key: "showconfirmCat",
            value: function showconfirmCat(obj) {
              this.tempForCat = obj.data.category_id; //this.tempForCat= obj;

              $('#deleteModalCat').modal('show');
            } //delete

          }, {
            key: "deleteItem",
            value: function deleteItem(obj) {
              var _this9 = this;

              this.httpService.deleteData(this.url + 'item/' + obj.item_id, null).subscribe(function (res) {
                _this9.auth.hideLoader();

                _this9.msgService.showErrorMessage('success', '', 'Item Deleted Successfully');

                _this9.getItemDetails();

                $('#deleteitemModal').modal('hide');
                $('#deleteModal').modal('hide');
              }, function (err) {
                _this9.msgService.showErrorMessage('error', '', "error");

                _this9.auth.hideLoader();
              });
            }
          }, {
            key: "showAllocationHistory",
            value: function showAllocationHistory(obj) {
              this.tempObj = obj;
              this.tempObj.item_id = obj.item_id;
              $('#historyModal').modal('show');
              this.getAllocationHistrory(obj.item_id);
            }
            /*======================================APi Clla For Item===============*/

          }, {
            key: "getAllMasterCourseList",
            value: function getAllMasterCourseList() {
              var _this10 = this;

              this.masterCourseList = [];
              this.auth.showLoader();
              this.httpService.getData('/api/v1/standards/all/' + this.item.institution_id + '?active=Y').subscribe(function (res) {
                _this10.masterCourseList = res;

                _this10.auth.hideLoader();
              }, function (err) {});
            }
          }, {
            key: "onMasterCourseSelection",
            value: function onMasterCourseSelection(standard_id) {
              var _this11 = this;

              this.auth.showLoader();
              this.CourseList = [];

              if (standard_id == undefined || standard_id == '') {} else {
                // this.auth.showLoader();
                this.httpService.getData('/api/v1/subjects/standards/' + standard_id).subscribe(function (res) {
                  _this11.CourseList = res;

                  _this11.auth.hideLoader();
                }, function (err) {
                  _this11.auth.showLoader();
                });
              }
            }
            /*======================================Table setting For Category===============*/

          }, {
            key: "setTableData",
            value: function setTableData() {
              this.headerSetting = [{
                primary_key: 'category_name',
                value: "Name",
                charactLimit: 25,
                sorting: true,
                visibility: true
              }, {
                primary_key: 'desc',
                value: "Description",
                charactLimit: 25,
                sorting: false,
                visibility: true
              }, {
                primary_key: 'action',
                value: "Action",
                charactLimit: 10,
                sorting: false,
                visibility: true,
                view: false,
                edit: true,
                "delete": true
              }];
              this.tableSetting = {
                width: "100%",
                height: "58vh"
              };
              this.rowColumns = [{
                width: "45%",
                textAlign: "left"
              }, {
                width: "45%",
                textAlign: "left"
              }, {
                width: "15%",
                textAlign: "left"
              }];
            }
            /* ==========================================pagination for category=============*/

          }, {
            key: "fetchTableDataByPage",
            value: function fetchTableDataByPage(index) {
              this.pageIndex = index;
              var startindex = this.displayBatchSize * (index - 1);
              this.pagedclassRoomData = this.getClassRoomTableFromSource(startindex);
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
            key: "getClassRoomTableFromSource",
            value: function getClassRoomTableFromSource(startindex) {
              if (this.searchflag) {
                var t = this.searchData.slice(startindex, startindex + this.displayBatchSize);
                return t;
              } else {
                var _t = this.classRoomData.slice(startindex, startindex + this.displayBatchSize);

                return _t;
              }
            }
          }, {
            key: "updateTableBatchSize",
            value: function updateTableBatchSize(event) {
              this.pageIndex = 1;
              this.displayBatchSize = event;
              this.fetchTableDataByPage(this.pageIndex);
            }
            /* ==========================================pagination for item=============*/

          }, {
            key: "fetchTableDataByPageforItem",
            value: function fetchTableDataByPageforItem(index) {
              this.pageIndexforItem = index;
              var startindex = this.displayBatchSize * (index - 1);
              this.pagedItemData = this.getItemTableFromSource(startindex);
            }
          }, {
            key: "fetchNextItem",
            value: function fetchNextItem() {
              this.pageIndexforItem++;
              this.fetchTableDataByPageforItem(this.pageIndexforItem);
            }
          }, {
            key: "fetchPreviousItem",
            value: function fetchPreviousItem() {
              if (this.pageIndexforItem != 1) {
                this.pageIndexforItem--;
                this.fetchTableDataByPageforItem(this.pageIndexforItem);
              }
            }
          }, {
            key: "getItemTableFromSource",
            value: function getItemTableFromSource(startindex) {
              if (this.searchflag) {
                var t = this.searchData.slice(startindex, startindex + this.displayBatchSize);
                return t;
              } else {
                var _t2 = this.itemAllData.slice(startindex, startindex + this.displayBatchSize);

                return _t2;
              }
            }
            /* ==========================================Search for category=============*/

          }, {
            key: "searchDatabase",
            value: function searchDatabase() {
              var _this12 = this;

              if (this.searchText != "" && this.searchText != null) {
                this.pageIndex = 1;
                var searchRes;
                searchRes = this.classRoomData.filter(function (item) {
                  return Object.keys(item).some(function (k) {
                    return item[k] != null && item[k].toString().toLowerCase().includes(_this12.searchText.toLowerCase());
                  });
                });
                this.searchData = searchRes;
                this.totalRow = searchRes.length;
                this.searchflag = true;
                this.fetchTableDataByPage(this.pageIndex);
              } else {
                this.searchflag = false;
                this.fetchTableDataByPage(this.pageIndex);
                this.totalRow = this.classRoomData.length;
              }
            }
            /* ==========================================pagination for Item=============*/

          }, {
            key: "searchDatabaseforItem",
            value: function searchDatabaseforItem() {
              var _this13 = this;

              if (this.searchTextforItem != "" && this.searchTextforItem != null) {
                this.pageIndexforItem = 1;
                var searchRes;
                searchRes = this.itemAllData.filter(function (item) {
                  return Object.keys(item).some(function (k) {
                    return item[k] != null && item[k].toString().toLowerCase().includes(_this13.searchTextforItem.toLowerCase());
                  });
                });
                this.searchData = searchRes;
                this.totalItemRow = searchRes.length;
                this.searchflag = true;
                this.fetchTableDataByPageforItem(this.pageIndexforItem);
              } else {
                this.searchflag = false;
                this.fetchTableDataByPageforItem(this.pageIndexforItem);
                this.totalItemRow = this.itemAllData.length;
              }
            }
          }, {
            key: "updateTableBatchSizeForItem",
            value: function updateTableBatchSizeForItem(event) {
              this.pageIndex = 1;
              this.displayBatchSize = event;
              this.fetchTableDataByPageforItem(this.pageIndexforItem);
            } //download pdf

          }, {
            key: "downloadPdf",
            value: function downloadPdf() {
              var arr = [];

              for (var i = 0; i < this.categoryAllData.length; i++) {
                this.categoryAllData[i].id = i + 1;
              }

              this.categoryAllData.map(function (ele) {
                var json = [ele.id, ele.category_name, ele.desc];
                arr.push(json);
              });
              var rows = [];
              rows = [['#', 'Name', ' Description']];
              var columns = arr;

              this._pdfService.exportToPdf(rows, columns, 'category List');

              this.auth.hideLoader();
            } //download in excel format

          }, {
            key: "exportToExcel",
            value: function exportToExcel() {
              var _this14 = this;

              var Excelarr = [];
              this.categoryAllData.map(function (ele) {
                var json = {};

                _this14.categoryDataForDownload.map(function (keys) {
                  json[keys.value] = ele[keys.primary_key];
                });

                Excelarr.push(json);
              });
              this.excelService.exportAsExcelFile(Excelarr, 'inventory_category');
              this.auth.hideLoader();
            }
            /* ==========================================Download Data for Item=============*/

          }, {
            key: "downloadPdffoItem",
            value: function downloadPdffoItem() {
              for (var i = 0; i < this.itemAllData.length; i++) {
                this.itemAllData[i].id = i + 1;
              }

              var arrforItem = [];
              this.itemAllData.map(function (ele) {
                var json = [ele.id, ele.item_name, ele.category_name, ele.alloted_units, ele.available_units, ele.unit_cost, ele.sale_price, ele.tax_percent, ele.out_of_stock_indicator_units];
                arrforItem.push(json);
              });
              var rows = [];
              rows = [['#', 'Item', ' Category', 'Total Units', 'Available Units', 'Buying/Unit Price', 'Sale Price', 'Taxes (%)', 'Low Stock indicator (Units)']];
              var columns = arrforItem;

              this._pdfService.exportToPdf(rows, columns, 'item List');

              this.auth.hideLoader();
            }
          }, {
            key: "exportToExcelItem",
            value: function exportToExcelItem() {
              var _this15 = this;

              var Excelarr = [];
              this.itemAllData.map(function (ele) {
                var json = {};

                _this15.ItemDataForDownload.map(function (keys) {
                  json[keys.value] = ele[keys.primary_key];
                });

                Excelarr.push(json);
              });
              this.excelService.exportAsExcelFile(Excelarr, 'inventory_item');
              this.auth.hideLoader();
            }
          }, {
            key: "allocateToSubBranch",
            value: function allocateToSubBranch(data) {
              // this.allocatedata.student_id=data.student_id;
              this.allocatedata.item_id = data.item_id;
              this.allocatedata.item_name = data.item_name;
              this.allocatedata.available_units = data.available_units;
            }
          }, {
            key: "saveAllocatedData",
            value: function saveAllocatedData() {
              var _this16 = this;

              if (this.allcateForm.valid) {
                this.getSubBranches();
                this.httpService.postData(this.url + 'item/allocate/subBranch', this.allocatedata).subscribe(function (res) {
                  $('#subbranchModal').modal('hide');

                  _this16.getItemDetails();

                  _this16.auth.showLoader();

                  if (res.statusCode == 200) {
                    _this16.msgService.showErrorMessage(_this16.msgService.toastTypes.success, '', 'Item Allocated Successfully');

                    _this16.allcateForm.resetForm();

                    _this16.auth.hideLoader();
                  }
                }, function (err) {
                  _this16.auth.hideLoader();

                  _this16.msgService.showErrorMessage(_this16.msgService.toastTypes.error, '', err.error.message);
                });
              } else {
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', "Please fill all mandatory field");
              }
            }
          }, {
            key: "getSubBranches",
            value: function getSubBranches() {
              var _this17 = this;

              if (this.isMainBranch == "Y") {
                this.httpService.getData('/api/v1/institutes/all/subBranches/' + this.item.institution_id + '?active=Y').subscribe(function (res) {
                  _this17.subBranchAllData = res;

                  _this17.auth.hideLoader();
                }, function (err) {});
              } //this.auth.showloader()

            }
          }, {
            key: "getItemAgainSubBranch",
            value: function getItemAgainSubBranch(id) {
              var _this18 = this;

              this.httpService.getData('/api/v1/inventory/item/all/' + this.item.institution_id).subscribe(function (res) {
                _this18.itemfromSubbrach = res;

                _this18.auth.hideLoader();
              }, function (err) {});
            }
          }, {
            key: "getAllocationHistrory",
            value: function getAllocationHistrory(id) {
              var _this19 = this;

              this.auth.showLoader();
              this.httpService.getData('/api/v1/inventory/item/txHistory/' + id).subscribe(function (res) {
                _this19.allocationHistoryData = res;

                _this19.auth.hideLoader();
              }, function (err) {});
            } //manage units

          }, {
            key: "manageUnit",
            value: function manageUnit(data) {
              this.manageData.item_id = data.item_id;
              this.manageData.available_units = data.available_units;
              this.manageData.alloted_units = data.alloted_units;
            }
          }, {
            key: "updataeManageUnit",
            value: function updataeManageUnit() {
              var _this20 = this;

              this.httpService.putData(this.url + 'item/stockUpdate', this.manageData).subscribe(function () {
                $('#manageunitModal').modal('hide');

                _this20.msgService.showErrorMessage(_this20.msgService.toastTypes.success, '', " Units Updated Successfully");

                _this20.getItemDetails();

                _this20.manageData.units_added = '';
              }, function (err) {
                _this20.msgService.showErrorMessage(_this20.msgService.toastTypes.error, '', err.error.message);

                _this20.auth.hideLoader();
              });
            }
          }, {
            key: "sortTable",
            value: function sortTable(str) {
              if (str == "standard_name" || str == "subject_name" || str == "is_active") {
                this.pagedItemData.sort(function (a, b) {
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
              } else if (str == "subject_id") {
                this.pagedItemData.sort(function (a, b) {
                  return a[str] - b[str];
                });
              } else if (str == "created_date") {
                this.pagedItemData.sort(function (a, b) {
                  return moment__WEBPACK_IMPORTED_MODULE_8__(a[str]).unix() - moment__WEBPACK_IMPORTED_MODULE_8__(b[str]).unix();
                });
              }

              if (this.sortingDir == "asc") {
                this.sortingDir = "dec";
              } else {
                this.sortingDir = "asc";
                this.pagedItemData = this.pagedItemData.reverse();
              }

              this.fetchTableDataByPage(this.pageIndex);
            }
          }, {
            key: "maxlenth",
            value: function maxlenth(data, limit) {
              if (data.length > limit) {
                this.msgService.showErrorMessage(this.msgService.toastTypes.info, '', "Please Enter upto" + " " + limit + " " + "character only");
              }
            }
          }, {
            key: "checkManinBranch",
            value: function checkManinBranch() {
              var _this21 = this;

              this.auth.isMainBranch.subscribe(function (value) {
                if (_this21.isMainBranch != value) {
                  _this21.isMainBranch = value;

                  if (_this21.isMainBranch == "Y") {
                    _this21.getSubBranches();
                  }
                }
              });
            }
          }]);

          return ItemCmComponent;
        }();

        ItemCmComponent.ctorParameters = function () {
          return [{
            type: _services_message_show_service__WEBPACK_IMPORTED_MODULE_1__["MessageShowService"]
          }, {
            type: _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]
          }, {
            type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"]
          }, {
            type: _services_export_to_pdf_service__WEBPACK_IMPORTED_MODULE_6__["ExportToPdfService"]
          }, {
            type: _services_excel_service__WEBPACK_IMPORTED_MODULE_7__["ExcelService"]
          }];
        };

        ItemCmComponent.propDecorators = {
          catForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['catForm', {
              "static": false
            }]
          }],
          itemForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['itemForm', {
              "static": false
            }]
          }],
          allcateForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['allcateForm', {
              "static": false
            }]
          }],
          history: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['history', {
              "static": false
            }]
          }]
        };
        ItemCmComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
          selector: 'app-item-cm',
          template: __importDefault(__webpack_require__(
          /*! raw-loader!./item-cm.component.html */
          "./node_modules/raw-loader/dist/cjs.js!./src/app/components/inventory-module/item-cm/item-cm.component.html"))["default"],
          styles: [__importDefault(__webpack_require__(
          /*! ./item-cm.component.scss */
          "./src/app/components/inventory-module/item-cm/item-cm.component.scss"))["default"]]
        }), __metadata("design:paramtypes", [_services_message_show_service__WEBPACK_IMPORTED_MODULE_1__["MessageShowService"], _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"], _services_export_to_pdf_service__WEBPACK_IMPORTED_MODULE_6__["ExportToPdfService"], _services_excel_service__WEBPACK_IMPORTED_MODULE_7__["ExcelService"]])], ItemCmComponent);
        return ItemCmComponent;
      }();
      /***/

    },

    /***/
    "./src/app/components/inventory-module/item-cm/item.ts":
    /*!*************************************************************!*\
      !*** ./src/app/components/inventory-module/item-cm/item.ts ***!
      \*************************************************************/

    /*! exports provided: Item, Category */

    /***/
    function srcAppComponentsInventoryModuleItemCmItemTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Item", function () {
        return Item;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Category", function () {
        return Category;
      });

      var Item = function Item() {
        _classCallCheck(this, Item);
      };

      var Category = function Category() {
        _classCallCheck(this, Category);
      };
      /***/

    },

    /***/
    "./src/app/components/inventory-module/order-by.pipe.ts":
    /*!**************************************************************!*\
      !*** ./src/app/components/inventory-module/order-by.pipe.ts ***!
      \**************************************************************/

    /*! exports provided: OrderByPipe */

    /***/
    function srcAppComponentsInventoryModuleOrderByPipeTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderByPipe", function () {
        return OrderByPipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var OrderByPipe =
      /** @class */
      function () {
        var OrderByPipe = /*#__PURE__*/function () {
          function OrderByPipe() {
            _classCallCheck(this, OrderByPipe);
          }

          _createClass(OrderByPipe, [{
            key: "transform",
            value: function transform(value) {
              return null;
            }
          }]);

          return OrderByPipe;
        }();

        OrderByPipe = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
          name: 'orderBy'
        })], OrderByPipe);
        return OrderByPipe;
      }();
      /***/

    },

    /***/
    "./src/app/components/inventory-module/purchase-add/purchase-add.component.scss":
    /*!**************************************************************************************!*\
      !*** ./src/app/components/inventory-module/purchase-add/purchase-add.component.scss ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsInventoryModulePurchaseAddPurchaseAddComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "* {\n  margin: 0px;\n}\n\nbody {\n  font-family: 'Open Sans', sans-serif;\n}\n\n.flex {\n  display: flex;\n}\n\n.blue_button {\n  background-color: #109CF1;\n  color: white;\n  padding: 0px 20px;\n  font-size: 13px;\n  border: none;\n  border-radius: 5px;\n  font-weight: 600;\n  line-height: 35px;\n  cursor: pointer;\n}\n\n.white_button {\n  background-color: #fff;\n  color: #109CF1;\n  padding: 0px 20px;\n  font-size: 12px;\n  border: 1px solid #109CF1;\n  border-radius: 5px;\n  font-weight: 500;\n  line-height: 35px;\n  cursor: pointer;\n}\n\n.select {\n  padding: 7px 20px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-size: 12px;\n  font-weight: 500;\n  color: #787A7D;\n}\n\n.input {\n  padding: 7px 20px;\n  font-size: 12px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-weight: 500;\n  height: 35px;\n}\n\ninput:focus, select:focus, button:focus {\n  outline: none;\n}\n\n.page_heading > p {\n  color: #334D6E;\n  font-weight: 600;\n  font-size: 14px;\n  margin-bottom: 0px;\n}\n\n.flex {\n  display: flex;\n}\n\n.display {\n  display: flex;\n  justify-content: space-between;\n}\n\n.w98 {\n  width: 98%;\n  margin: 0px auto;\n}\n\n.head_padding {\n  box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  -webkit-box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  -moz-box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  padding: 15px 0px;\n}\n\n.pageheadingspace {\n  margin-bottom: 7px;\n}\n\n.table_heading {\n  width: 100%;\n  background-color: #DFE5F0;\n  /* padding: 10px 0px;*/\n  display: flex;\n  border-radius: 5px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);\n}\n\n.table_heading > div {\n  text-align: center;\n  font-weight: 600;\n  font-size: 12px;\n  color: #323C47;\n  line-height: 35px;\n  text-align: left;\n}\n\n.table_body {\n  width: 100%;\n  display: flex;\n  border-radius: 5px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);\n  text-align: left;\n  line-height: 18px;\n}\n\n.table_body > div {\n  text-align: left;\n  font-weight: 500;\n  font-size: 12px;\n  color: #323C47;\n  /* padding: 5px 0px;*/\n  margin: auto;\n  line-height: 18px;\n}\n\n.mr10 {\n  margin-right: 10px;\n}\n\n.w240 {\n  width: 240px;\n}\n\n.item_cat .table_body > div, .item_cat .table_heading > div {\n  width: calc((100% - 250px) / 2);\n}\n\n.item_cat .table_heading > div:first-child, .item_cat .table_body > div:first-child {\n  width: 50px;\n}\n\n.item_cat .table_heading > div:last-child, .item_cat .table_body > div:last-child {\n  width: 200px;\n}\n\n.group18 {\n  width: 18px;\n  height: auto;\n}\n\n.pt15 {\n  padding-top: 15px;\n  padding-bottom: 5px;\n}\n\n.bottom_pagignation {\n  padding-top: 10px;\n  background-color: #fff;\n  position: fixed;\n  bottom: 0px;\n  z-index: 100;\n}\n\n.bottom_pagignation p {\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 20px;\n}\n\n.bottom_pagignation select {\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-size: 13px;\n  font-weight: 500;\n  color: #0079FF;\n  display: inline;\n}\n\n.bottom_pagignation .w20 {\n  width: 20%;\n}\n\n.bottom_pagignation .w10 {\n  width: 10%;\n}\n\n.bottom_pagignation .w50 {\n  width: 50%;\n}\n\n.bottom_pagignation .w40 {\n  width: 40%;\n}\n\n.number {\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 20px;\n  letter-spacing: 0.01em;\n  color: #000000;\n  margin: 0px 4px;\n}\n\n.active_circle {\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 20px;\n  letter-spacing: 0.01em;\n  color: #fff;\n  padding: 2px 7px;\n  border-radius: 50%;\n  background: #0079FF;\n}\n\n.next {\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 20px;\n  letter-spacing: 0.01em;\n  color: #0079FF;\n}\n\n.w450 {\n  width: 450px;\n}\n\n.white {\n  background-color: #fff;\n  width: calc(100% - 227px);\n  border-top: 3px solid #Ededed;\n}\n\n.nav-item .nav-link {\n  font-weight: 600;\n  color: #405877;\n  padding-bottom: 8px;\n  cursor: pointer;\n  font-size: 13px;\n}\n\n.nav-item .nav-link.active {\n  border-bottom: 3px solid #109CF1 !important;\n  color: #109CF1 !important;\n}\n\n.nav-link {\n  display: block;\n  padding: 1.5rem 0rem;\n  margin: -1rem 1.5rem;\n  margin-left: 0rem;\n}\n\n.flex {\n  display: flex;\n}\n\n.w15 {\n  width: 15%;\n  background-color: #DFE5F0;\n  padding: 10px;\n}\n\n.list > li {\n  background-color: #fff;\n  padding: 7px 0px;\n  margin: 7px 0px;\n}\n\n.list > li > a > span {\n  text-decoration: none;\n  font-size: 10px;\n  font-weight: 500;\n  color: #334D6E;\n}\n\n.list > li img {\n  padding: 0px 10px;\n}\n\n.magnifying-glass {\n  background-image: url(\"/assets/images/assets/Vector.svg\");\n  background-repeat: no-repeat;\n  background-position: left center;\n  text-indent: 10px;\n}\n\n.space33 {\n  padding-left: 5px;\n}\n\n.item_man .table_body > div, .item_man .table_heading > div {\n  width: calc((100% - 100px) / 8);\n}\n\n.item_man .table_heading > div:last-child, .item_man .table_body > div:last-child {\n  width: 100px;\n}\n\n.item_man .table_heading > div:nth-child(5), .item_man .table_heading > div:nth-child(6), .item_man .table_heading > div:nth-child(8) {\n  line-height: 18px;\n}\n\n.dropdown1 {\n  position: relative;\n  display: inline-block;\n  line-height: 35px;\n}\n\n.dropdown-content1 {\n  display: none;\n  position: absolute;\n  background-color: #fff;\n  min-width: 200px;\n  right: 3px;\n  margin-top: 20px;\n  top: -150px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1200;\n}\n\n.dropdown-content1 a {\n  color: black;\n  text-decoration: none;\n  display: block;\n}\n\n.dropdown-content1 a:hover {\n  background-color: #ddd;\n  border-radius: 5px;\n}\n\n.dropdown1:hover .dropdown-content1 {\n  display: block;\n}\n\n.dot3 {\n  padding: 10px 0px;\n  cursor: pointer;\n}\n\n.wid100 {\n  width: 100%;\n}\n\n.wid80 {\n  width: 80%;\n}\n\n.pt10 {\n  padding-bottom: 10px;\n}\n\ninput[type=\"date\"]::-webkit-calendar-picker-indicator {\n  color: rgba(0, 0, 0, 0);\n  opacity: 1;\n  display: block;\n  background: url('cal.svg') no-repeat;\n  width: 20px;\n  height: 20px;\n  border-width: thin;\n  padding: 2px 0px;\n}\n\ninput[type=\"date\"] {\n  color: #787A7D;\n  cursor: pointer;\n}\n\ninput:focus {\n  outline: none;\n}\n\nbutton:focus {\n  outline: none;\n}\n\n.modal textarea {\n  height: 100px;\n}\n\n.alert {\n  font-weight: 400;\n  font-size: 18px;\n  line-height: 27px;\n  letter-spacing: 0.01em;\n  color: #4D5869;\n}\n\n.alert_text {\n  text-align: justify;\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 19px;\n  letter-spacing: 0.01em;\n  color: #858585;\n  margin: 0px 40px;\n  margin-top: 20px;\n}\n\n.center {\n  text-align: center;\n}\n\n.center img {\n  width: 44px;\n  height: 34px;\n}\n\n#delete1Modal .modal-dialog, #deleteitemModal .modal-dialog {\n  width: 350px;\n}\n\n@media (min-width: 576px) {\n  #delete1Modal .modal-dialog, #deleteitemModal .modal-dialog {\n    max-width: 350px;\n  }\n}\n\n#deleteModal .modal-dialog {\n  width: 350px;\n}\n\n@media (min-width: 576px) {\n  #deleteModal .modal-dialog {\n    max-width: 350px;\n  }\n}\n\n.pt101 {\n  padding-top: 30px;\n  margin: 0px 30px;\n}\n\n#itemModal .modal-dialog, #edititemModal .modal-dialog, #subbranchModal .modal-dialog, #add1Modal .modal-dialog, #addpayModal .modal-dialog, #viewpayModal .modal-dialog {\n  width: 750px;\n}\n\n@media (min-width: 576px) {\n  #itemModal .modal-dialog, #edititemModal .modal-dialog, #subbranchModal .modal-dialog, #add1Modal .modal-dialog, #addpayModal .modal-dialog, #viewpayModal .modal-dialog {\n    max-width: 750px;\n  }\n}\n\n.sec1, .sec2 {\n  width: 50%;\n}\n\n.sec1 {\n  padding-right: 10px;\n}\n\n.sec2 {\n  padding-left: 10px;\n}\n\ninput[type=\"date\"]:focus:before,\ninput[type=\"date\"]:valid:before {\n  content: \"\";\n}\n\n/* input[type=date]::-webkit-datetime-edit-text {\n      -webkit-appearance: none;\n      display: none;\n  }\n  input[type=date]::-webkit-datetime-edit-month-field{\n      -webkit-appearance: none;\n      display: none;\n  }\n  input[type=date]::-webkit-datetime-edit-day-field {\n      -webkit-appearance: none;\n      display: none;\n  }\n  input[type=date]::-webkit-datetime-edit-year-field {\n      -webkit-appearance: none;\n      display: none;\n  }*/\n\ninput[type=\"date\"]:before {\n  content: attr(placeholder) !important;\n  padding-right: 20px;\n}\n\n.allo_history .table_body > div, .allo_history .table_heading > div {\n  width: calc((100% - 50px) / 5);\n}\n\n.allo_history .table_heading > div:first-child, .allo_history .table_body > div:first-child {\n  width: 50px;\n  line-height: 4;\n}\n\n.in1 {\n  display: inline-block;\n  background: #CCFFAC;\n  border-radius: 5px;\n  width: 40px;\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 24px;\n  letter-spacing: 0.01em;\n  color: #323C47;\n  text-align: center;\n}\n\n.out {\n  display: inline-block;\n  background: #FFCF88;\n  border-radius: 5px;\n  width: 40px;\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 24px;\n  text-align: center;\n  letter-spacing: 0.01em;\n  color: #323C47;\n}\n\n#historyModal .modal-dialog, #historyModal .modal-dialog {\n  width: 650px;\n}\n\n@media (min-width: 576px) {\n  #historyModal .modal-dialog, #historyModal .modal-dialog {\n    max-width: 650px;\n  }\n}\n\n.supplier_m .table_body > div, .supplier_m .table_heading > div {\n  width: calc((100% - 200px) / 5);\n}\n\n.supplier_m .table_heading > div:last-child, .supplier_m .table_body > div:last-child {\n  width: 200px;\n}\n\n.purchase .table_body > div, .purchase .table_heading > div {\n  width: calc((100% - 100px) / 6);\n}\n\n.purchase .table_heading > div:last-child, .purchase .table_body > div:last-child {\n  width: 100px;\n}\n\ninput[type=file]::-webkit-file-upload-button {\n  border: none;\n  border-right: 2px solid #e3dadb;\n  padding: .6em .4em;\n  border-radius: .2em;\n  background-color: #fff;\n  -webkit-transition: 1s;\n  transition: 1s;\n  color: #109CF1;\n  outline: none;\n}\n\ninput[type=file] {\n  padding: 0px;\n  color: #B6B5B1;\n  cursor: pointer;\n}\n\n.div_1 {\n  border: 1px solid #D5D7DA;\n  width: 25%;\n  height: 27rem;\n  margin: 0px 10px;\n  border-radius: 5px;\n  margin-top: 20px;\n  padding: 20px;\n}\n\n.pt102 {\n  padding-bottom: 20px;\n}\n\n.textarea1 {\n  height: 100px;\n}\n\n.heading1 {\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: 0.01em;\n  color: #334D6E;\n}\n\n.div_2 {\n  width: 75%;\n  margin: 0px 10px;\n  border-radius: 5px;\n  margin-top: 20px;\n  padding: 20px;\n}\n\n.tablehead {\n  background: #DFE5F0;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n  line-height: 40px;\n  display: flex;\n}\n\n.tablehead > div {\n  text-align: center;\n  width: calc(100% / 5);\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 40px;\n  text-align: center;\n  letter-spacing: 0.01em;\n  color: #323C47;\n}\n\n.sel1 {\n  width: 252px;\n  background: #FAFAFA;\n  border: 1px solid #F0EDED;\n  border-radius: 4px;\n}\n\n.tablebody {\n  display: flex;\n  border-bottom: 1px solid #DFE5F0;\n}\n\n.tablebody > div {\n  text-align: center;\n  width: calc(100% / 5);\n  font-weight: normal;\n  font-size: 13px;\n  line-height: 60px;\n  letter-spacing: 0.01em;\n  color: #323C47;\n}\n\n.tabletotal {\n  display: flex;\n  background: #D4FFF2;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n  font-weight: 600;\n  font-size: 13px;\n  letter-spacing: 0.01em;\n  color: #323C47;\n}\n\n.tabletotal > div {\n  text-align: center;\n  line-height: 60px;\n  width: calc(100% / 5);\n}\n\n.tabletotal > div:nth-child(4) {\n  font-weight: 700;\n  font-size: 16px;\n}\n\n.created_date {\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 194px;\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 30px;\n  letter-spacing: 0.01em;\n  color: #323C47;\n  text-align: center;\n}\n\n.mr10 {\n  margin-right: 10px;\n}\n\n.flex30 {\n  display: flex;\n}\n\n.flex30 > div {\n  padding-left: 20px;\n  width: calc( 100% / 3);\n  line-height: 30px;\n  border-right: 1px solid #E5E3EE;\n}\n\n.flex30 > div:last-child {\n  border-right: none;\n}\n\n.name2 {\n  width: 34%;\n  font-weight: 600;\n  font-size: 12px;\n  letter-spacing: 0.01em;\n  color: #323C47;\n}\n\n.value2 {\n  width: 66%;\n  font-weight: 400;\n  font-size: 12px;\n  letter-spacing: 0.01em;\n  color: #323C47;\n}\n\n.flex30 > div:last-child .name2 {\n  width: 45%;\n}\n\n.flex30 > div:last-child .value2 {\n  width: 55%;\n}\n\n.item .tablehead > div, .item .tablebody > div {\n  width: calc(100% / 4);\n}\n\n.item .tabletotal {\n  border-bottom: 1px solid #DFE5F0;\n  background: #fff;\n  box-shadow: none;\n}\n\n.item .tabletotal > div {\n  width: calc(100% /4);\n}\n\n.sale .table_body > div, .sale .table_heading > div {\n  width: calc((100% - 100px) / 6);\n}\n\n.sale .table_heading > div:last-child, .sale .table_body > div:last-child {\n  width: 100px;\n}\n\n.sale .table_heading > div:nth-child(10), .sale .table_body > div:nth-child(10) {\n  line-height: 18px;\n}\n\n.div_11 {\n  border: 1px solid #D5D7DA;\n  width: 25%;\n  height: 37rem;\n  margin: 0px 10px;\n  border-radius: 5px;\n  margin-top: 20px;\n  padding: 20px;\n}\n\n.sale_add .tablehead > div {\n  width: calc(100% / 6);\n}\n\n.sale_add .tablebody > div {\n  width: calc(100% / 6);\n}\n\n.sale_add .tabletotal > div {\n  width: calc(100% / 6);\n}\n\n.sale_add .tabletotal > div:nth-child(5) {\n  font-weight: 700;\n  font-size: 16px;\n}\n\n.file_name {\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 18px;\n  letter-spacing: 0.01em;\n  color: #109CF1;\n}\n\n.history .table_body > div, .history .table_heading > div {\n  width: calc((100% - 50px) / 5);\n}\n\n.history .table_heading > div:first-child, .history .table_body > div:first-child {\n  width: 50px;\n}\n\n.nav-item .nav-link {\n  font-weight: 600;\n  color: #405877;\n  padding-bottom: 8px;\n  padding-top: 10px;\n  cursor: pointer;\n  font-size: 13px;\n  float: left;\n  background: none;\n}\n\n.nav-item .active {\n  border-bottom: 3px solid #109cf1 !important;\n  color: #109cf1 !important;\n}\n\n.modal {\n  width: 100%;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n}\n\n.right {\n  float: left;\n  margin: 5px;\n}\n\n.modal-dialog {\n  margin: 0 auto;\n  top: 10%;\n}\n\n.modal-header:before {\n  display: none;\n}\n\n.modal-title {\n  color: #2B2626;\n  font-weight: 600;\n  font-size: 13px;\n  font-family: 'Open Sans', sans-serif;\n  margin-bottom: 0px;\n}\n\n.errormsg {\n  height: 10px;\n}\n\n.help-block {\n  color: red;\n  margin-bottom: 0%;\n  padding-left: 2px;\n}\n\n.cancel {\n  background-color: white;\n  color: #109CF1;\n  padding: 0px 20px;\n  font-size: 12px;\n  border: solid 2px #109CF1;\n  border-radius: 5px;\n  font-weight: 500;\n  height: 35px;\n  margin-right: 15px;\n}\n\n.align {\n  text-align: center;\n}\n\n.multiselect {\n  width: 330px;\n  height: 35px;\n  left: 30px;\n  top: 63px;\n  background: #FFFFFF;\n  box-sizing: border-box;\n  border-radius: 4px;\n  margin-top: 20px;\n}\n\n#deletesModal .modal-dialog {\n  width: 350px;\n}\n\n@media (min-width: 576px) {\n  #deletesModal .modal-dialog {\n    max-width: 350px;\n  }\n}\n\n.center {\n  text-align: center;\n}\n\n.deleteImg, li {\n  float: left;\n  margin: 3px;\n}\n\n.p_title {\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 15px;\n  letter-spacing: 0.01em;\n  color: #323C47;\n  margin-bottom: 5px;\n}\n\n.has-error .control-label {\n  color: black;\n}\n\n.help-block {\n  color: red;\n  margin-bottom: 0%;\n}\n\n.text-danger {\n  color: red;\n  padding-left: 2px;\n}\n\n.scrollable {\n  max-height: 70vh;\n  overflow-y: auto;\n}\n\n.dropdown-content1 {\n  display: none;\n  position: absolute;\n  background-color: #fff;\n  min-width: 200px;\n  right: 3px;\n  margin-top: 20px;\n  top: -100px;\n  text-align: left;\n  border-radius: 10px;\n}\n\n.dropdown-content1 a {\n  padding-left: 8px;\n}\n\n.ser {\n  margin: 10px 0px;\n}\n\n.illustration-container {\n  display: block;\n}\n\n.illustration-container .illustration-img {\n  width: 40%;\n  margin-left: 25%;\n}\n\n.cancel {\n  color: #109CF1;\n  background-color: white;\n  padding: 0px 20px;\n  font-size: 12px;\n  border: solid 2px #109CF1;\n  border-radius: 5px;\n  font-weight: 500;\n  line-height: 35px;\n  cursor: pointer;\n}\n\n.bottom_pagignation {\n  padding: 10px 0px;\n}\n\n.h60 {\n  height: 60px;\n}\n\n.bntStyle {\n  border: solid 2px  #1e82a0 !important;\n}\n\n.pt102 {\n  padding-bottom: 10px;\n}\n\n.textarea1 {\n  height: 68px;\n}\n\n.div_1 {\n  height: 29rem  !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbnZlbnRvcnktbW9kdWxlL2ludmVudG9yeS1tb2R1bGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaW52ZW50b3J5LW1vZHVsZS9wdXJjaGFzZS1hZGQvcHVyY2hhc2UtYWRkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVztBQ0NmOztBREVFO0VBQ0Usb0NBQW9DO0FDQ3hDOztBRENFO0VBQ0UsYUFBYTtBQ0VqQjs7QURBRTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZUFBZTtBQ0duQjs7QURERTtFQUNFLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZix5QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZUFBZTtBQ0luQjs7QURGRztFQUNDLGlCQUFpQjtFQUVqQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7QUNJbEI7O0FERkU7RUFDRSxpQkFBaUI7RUFFakIsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNkLFlBQVc7QUNJakI7O0FEREc7RUFDSSxhQUFhO0FDSXBCOztBREZFO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysa0JBQWtCO0FDS3RCOztBREhFO0VBQ0UsYUFBYTtBQ01qQjs7QURKRTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7QUNPbEM7O0FETEU7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0FDUXBCOztBRE5FO0VBQ0ksK0NBQTRDO0VBQzVDLHVEQUFvRDtFQUNwRCxv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O0VBQ2YsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUV0QixjQUFhO0VBQ2Isa0JBQWlCO0FDK0ZyQjs7QUQ3Rkk7RUFDRSxZQUFZO0FDZ0dsQjs7QUQ5Rk07RUFDQSxVQUFVO0VBQ1YsaUJBQWlCO0FDaUd2Qjs7QUQ5Rk07RUFDRSxVQUFVO0VBQ1YsaUJBQWdCO0FDaUd4Qjs7QUQvRkk7RUFDRSxnQkFBZ0I7RUFDZCxnQkFBZ0I7QUNrR3hCOztBRGhHSTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFFWCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FDa0d6Qjs7QUQ1R0k7RUFZRixpQkFBaUI7QUNvR25COztBRGpHTTtFQUNFLGdCQUFlO0FDb0d2Qjs7QURsR007RUFDRSxjQUFjO0FDcUd0Qjs7QUR0R007RUFHSSxVQUFVO0VBQ1YsZ0JBQWdCO0FDdUcxQjs7QUE1NkJBO0VBQ0csY0FBYztFQUNiLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLHlCQUF5QjtFQUNyQixrQkFBa0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixlQUFlO0FBKzZCbkI7O0FBNzZCQTtFQUNJLGlCQUFpQjtBQWc3QnJCOztBQTk2QkE7RUFDSSxZQUFZO0FBaTdCaEI7O0FBLzZCQTtFQUVJLHFDQUFvQztBQWk3QnhDOztBQS82QkU7RUFDSSxvQkFBb0I7QUFrN0IxQjs7QUFoN0JFO0VBQ0ksWUFBWTtBQW03QmxCOztBQWo3QkU7RUFDRSx5QkFBd0I7QUFvN0I1QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW52ZW50b3J5LW1vZHVsZS9wdXJjaGFzZS1hZGQvcHVyY2hhc2UtYWRkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcbiAgICBtYXJnaW46IDBweDtcbiAgICBcbiAgfVxuICBib2R5e1xuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgfVxuICAuZmxleHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG4gIC5ibHVlX2J1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEwOUNGMTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMHB4IDIwcHg7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBsaW5lLWhlaWdodDogMzVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgLndoaXRlX2J1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBjb2xvcjogIzEwOUNGMTtcbiAgICBwYWRkaW5nOiAwcHggMjBweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgYm9yZGVyOjFweCBzb2xpZCAjMTA5Q0YxO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAgLnNlbGVjdHtcbiAgICBwYWRkaW5nOiA3cHggMjBweDtcbiAgIC8vIHBhZGRpbmc6IDdweCAycHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogIzc4N0E3RDtcbiAgfVxuICAuaW5wdXR7XG4gICAgcGFkZGluZzogN3B4IDIwcHg7XG4gICAgXG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGhlaWdodDozNXB4O1xuICAgIH1cblxuICAgaW5wdXQ6Zm9jdXMsIHNlbGVjdDpmb2N1cyxidXR0b246Zm9jdXN7XG4gICAgICAgb3V0bGluZTogbm9uZTtcbiAgIH1cbiAgLnBhZ2VfaGVhZGluZz5we1xuICAgIGNvbG9yOiAjMzM0RDZFO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgfVxuICAuZmxleHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG4gIC5kaXNwbGF5e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG4gIC53OTh7XG4gICAgd2lkdGg6IDk4JTtcbiAgICBtYXJnaW46IDBweCBhdXRvO1xuICB9XG4gIC5oZWFkX3BhZGRpbmd7XG4gICAgICBib3gtc2hhZG93OiAwcHggN3B4IDVweCAtM3B4IHJnYmEoMCwwLDAsMC4xKTtcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDdweCA1cHggLTNweCByZ2JhKDAsMCwwLDAuMSk7XG4gICAgICAtbW96LWJveC1zaGFkb3c6IDBweCA3cHggNXB4IC0zcHggcmdiYSgwLDAsMCwwLjEpO1xuICAgIHBhZGRpbmc6IDE1cHggMHB4O1xuICB9XG4gIC5wYWdlaGVhZGluZ3NwYWNle1xuICAgIG1hcmdpbi1ib3R0b206IDdweDtcbiAgfVxuICAudGFibGVfaGVhZGluZ3tcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREZFNUYwO1xuICAgLyogcGFkZGluZzogMTBweCAwcHg7Ki9cbiAgICAvL21hcmdpbjogMTBweCAwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgXG4gIH1cbiAgXG4gIC50YWJsZV9oZWFkaW5nPmRpdntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICMzMjNDNDc7XG4gICBsaW5lLWhlaWdodDogMzVweDtcbiAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cbiAgXG4gIC50YWJsZV9ib2R5e1xuICAgICB3aWR0aDogMTAwJTtcbiAgICAvL21hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIH1cbiAgLnRhYmxlX2JvZHk+ZGl2e1xuICAgIFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICMzMjNDNDc7XG4gICAvKiBwYWRkaW5nOiA1cHggMHB4OyovXG4gICAgIG1hcmdpbjogYXV0bztcbiAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIFxuICB9XG4gIFxuICAubXIxMHtcbiAgbWFyZ2luLXJpZ2h0OjEwcHg7XG4gIH1cbiAgLncyNDB7XG4gICB3aWR0aDogMjQwcHg7XG4gIH1cbiAgXG4gIC5pdGVtX2NhdCAudGFibGVfYm9keT5kaXYsLml0ZW1fY2F0IC50YWJsZV9oZWFkaW5nPmRpdntcbiAgICB3aWR0aDogY2FsYygoMTAwJSAtIDI1MHB4KSAvIDIpO1xuICB9XG4gIC5pdGVtX2NhdCAudGFibGVfaGVhZGluZz5kaXY6Zmlyc3QtY2hpbGQsLml0ZW1fY2F0IC50YWJsZV9ib2R5PmRpdjpmaXJzdC1jaGlsZHtcbiAgICB3aWR0aDogNTBweDtcbiAgfVxuICAuaXRlbV9jYXQgLnRhYmxlX2hlYWRpbmc+ZGl2Omxhc3QtY2hpbGQsLml0ZW1fY2F0IC50YWJsZV9ib2R5PmRpdjpsYXN0LWNoaWxke1xuICAgIHdpZHRoOiAyMDBweDtcbiAgfVxuICAuZ3JvdXAxOHtcbiAgICB3aWR0aDogMThweDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbiAgLnB0MTV7XG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgfVxuICAuYm90dG9tX3BhZ2lnbmF0aW9ue1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDBweDtcbiAgICB6LWluZGV4OiAxMDA7XG4gIH1cbiAgLmJvdHRvbV9wYWdpZ25hdGlvbiBwe1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICB9XG4gIC5ib3R0b21fcGFnaWduYXRpb24gc2VsZWN0e1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICMwMDc5RkY7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICB9XG4gIC5ib3R0b21fcGFnaWduYXRpb24gLncyMHtcbiAgICB3aWR0aDogMjAlO1xuICB9XG4gIC5ib3R0b21fcGFnaWduYXRpb24gLncxMHtcbiAgICB3aWR0aDogMTAlO1xuICB9XG4gIC5ib3R0b21fcGFnaWduYXRpb24gLnc1MHtcbiAgICB3aWR0aDogNTAlO1xuICB9XG4gIC5ib3R0b21fcGFnaWduYXRpb24gLnc0MHtcbiAgICB3aWR0aDogNDAlO1xuICB9XG4gIC5udW1iZXJ7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgbWFyZ2luOjBweCA0cHg7XG4gIH1cbiAgLmFjdGl2ZV9jaXJjbGV7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6MnB4IDdweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiAjMDA3OUZGO1xuICB9XG4gIC5uZXh0e1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gIGNvbG9yOiAjMDA3OUZGO1xuICBcbiAgfVxuICAudzQ1MHtcbiAgICB3aWR0aDogNDUwcHg7XG4gIH1cbiAgLndoaXRle1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIyN3B4KTtcbiAgICBib3JkZXItdG9wOiAzcHggc29saWQgI0VkZWRlZDtcbiAgfVxuICAubmF2LWl0ZW0gLm5hdi1saW5re1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGNvbG9yOiAjNDA1ODc3O1xuICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogMTNweFxuICB9XG4gIFxuICAubmF2LWl0ZW0gLm5hdi1saW5rLmFjdGl2ZSB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMTA5Q0YxICFpbXBvcnRhbnQ7XG4gICAgICBjb2xvcjogIzEwOUNGMSAhaW1wb3J0YW50O1xuICB9XG4gIC5uYXYtbGluayB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHBhZGRpbmc6IDEuNXJlbSAwcmVtO1xuICAgICAgbWFyZ2luOiAtMXJlbSAxLjVyZW07XG4gICAgICBtYXJnaW4tbGVmdDogMHJlbTtcbiAgfVxuICAuZmxleHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG4gIC53MTV7XG4gICAgd2lkdGg6IDE1JTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREZFNUYwO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cbiAgLmxpc3Q+bGl7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiA3cHggMHB4O1xuICAgIG1hcmdpbjogN3B4IDBweDtcbiAgfVxuICAubGlzdD5saT5hPnNwYW57XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICMzMzRENkU7XG4gIH1cbiAgLmxpc3Q+bGkgaW1ne1xuICBwYWRkaW5nOiAwcHggMTBweDtcbiAgfSBcbiAgLm1hZ25pZnlpbmctZ2xhc3N7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltYWdlcy9hc3NldHMvVmVjdG9yLnN2ZycpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjpsZWZ0IGNlbnRlcjtcbiAgICB0ZXh0LWluZGVudDogMTBweDtcbiAgfVxuICAuc3BhY2UzM3tcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgfVxuICAuaXRlbV9tYW4gLnRhYmxlX2JvZHk+ZGl2LC5pdGVtX21hbiAudGFibGVfaGVhZGluZz5kaXZ7XG4gICAgd2lkdGg6IGNhbGMoKDEwMCUgLSAxMDBweCkgLyA4KTtcbiAgfVxuICBcbiAgLml0ZW1fbWFuIC50YWJsZV9oZWFkaW5nPmRpdjpsYXN0LWNoaWxkLC5pdGVtX21hbiAudGFibGVfYm9keT5kaXY6bGFzdC1jaGlsZHtcbiAgICB3aWR0aDogMTAwcHg7XG4gIH1cbiAgLml0ZW1fbWFuIC50YWJsZV9oZWFkaW5nPmRpdjpudGgtY2hpbGQoNSksLml0ZW1fbWFuIC50YWJsZV9oZWFkaW5nPmRpdjpudGgtY2hpbGQoNiksLml0ZW1fbWFuIC50YWJsZV9oZWFkaW5nPmRpdjpudGgtY2hpbGQoOCl7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7fVxuICBcbiAgLmRyb3Bkb3duMSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBsaW5lLWhlaWdodDogMzVweDtcbiAgfVxuICBcbiAgLmRyb3Bkb3duLWNvbnRlbnQxIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIG1pbi13aWR0aDoyMDBweDtcbiAgICByaWdodDozcHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICB0b3A6IC0xNTBweDtcbiAgICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcbiAgICB6LWluZGV4OiAxMjAwO1xuICB9XG4gIFxuICAuZHJvcGRvd24tY29udGVudDEgYSB7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICBcbiAgLmRyb3Bkb3duLWNvbnRlbnQxIGE6aG92ZXIge2JhY2tncm91bmQtY29sb3I6ICNkZGQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDt9XG4gIFxuICAuZHJvcGRvd24xOmhvdmVyIC5kcm9wZG93bi1jb250ZW50MSB7ZGlzcGxheTogYmxvY2s7fVxuICAuZG90M3tcbiAgcGFkZGluZzogMTBweCAwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAud2lkMTAwe1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC53aWQ4MHtcbiAgICB3aWR0aDogODAlO1xuICB9XG4gIFxuICAucHQxMHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgfVxuICBpbnB1dFt0eXBlPVwiZGF0ZVwiXTo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcbiAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcxL2NhbC5zdmcpIG5vLXJlcGVhdDtcbiAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgYm9yZGVyLXdpZHRoOiB0aGluO1xuICAgICAgcGFkZGluZzogMnB4IDBweDtcbiAgfVxuICBpbnB1dFt0eXBlPVwiZGF0ZVwiXXtcbiAgICBjb2xvcjogIzc4N0E3RDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgaW5wdXQ6Zm9jdXN7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuICBidXR0b246Zm9jdXN7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuICAubW9kYWwgdGV4dGFyZWF7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgfVxuICAuYWxlcnR7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI3cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgICBjb2xvcjogIzRENTg2OTtcbiAgfVxuICAuYWxlcnRfdGV4dHtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gICAgY29sb3I6ICM4NTg1ODU7XG4gICAgbWFyZ2luOiAwcHggNDBweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICBcbiAgfVxuICAuY2VudGVye1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuY2VudGVyIGltZ3tcbiAgICB3aWR0aDogNDRweDtcbiAgaGVpZ2h0OiAzNHB4O1xuICB9XG5cbiAgXG4gICNkZWxldGUxTW9kYWwgLm1vZGFsLWRpYWxvZywjZGVsZXRlaXRlbU1vZGFsIC5tb2RhbC1kaWFsb2cge1xuICAgICAgd2lkdGg6IDM1MHB4O1xuICB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiA1NzZweCl7XG4gICNkZWxldGUxTW9kYWwgLm1vZGFsLWRpYWxvZywjZGVsZXRlaXRlbU1vZGFsIC5tb2RhbC1kaWFsb2cgIHtcbiAgICAgIG1heC13aWR0aDozNTBweDtcbiAgfVxuICB9XG4gICNkZWxldGVNb2RhbCAubW9kYWwtZGlhbG9nIHtcbiAgICAgIHdpZHRoOiAzNTBweDtcbiAgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpe1xuICAgI2RlbGV0ZU1vZGFsIC5tb2RhbC1kaWFsb2cge1xuICAgICAgbWF4LXdpZHRoOjM1MHB4O1xuICB9XG4gIH1cbiAgLnB0MTAxe1xuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgIG1hcmdpbjogMHB4IDMwcHg7XG4gIH1cbiAgI2l0ZW1Nb2RhbCAubW9kYWwtZGlhbG9nLCNlZGl0aXRlbU1vZGFsIC5tb2RhbC1kaWFsb2csI3N1YmJyYW5jaE1vZGFsIC5tb2RhbC1kaWFsb2csI2FkZDFNb2RhbCAubW9kYWwtZGlhbG9nLCNhZGRwYXlNb2RhbCAubW9kYWwtZGlhbG9nLCN2aWV3cGF5TW9kYWwgLm1vZGFsLWRpYWxvZyB7XG4gICAgICB3aWR0aDogNzUwcHg7XG4gIH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KXtcbiAgICNpdGVtTW9kYWwgLm1vZGFsLWRpYWxvZywjZWRpdGl0ZW1Nb2RhbCAubW9kYWwtZGlhbG9nLCNzdWJicmFuY2hNb2RhbCAubW9kYWwtZGlhbG9nLCNhZGQxTW9kYWwgLm1vZGFsLWRpYWxvZywjYWRkcGF5TW9kYWwgLm1vZGFsLWRpYWxvZywjdmlld3BheU1vZGFsIC5tb2RhbC1kaWFsb2cge1xuICAgICAgbWF4LXdpZHRoOjc1MHB4O1xuICB9XG4gIH1cbiAgLnNlYzEsLnNlYzJ7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxuICAuc2VjMXtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICB9XG4gIC5zZWMye1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgfVxuICBpbnB1dFt0eXBlPVwiZGF0ZVwiXTpmb2N1czpiZWZvcmUsXG4gICAgaW5wdXRbdHlwZT1cImRhdGVcIl06dmFsaWQ6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgfVxuICBcbiAgIC8qIGlucHV0W3R5cGU9ZGF0ZV06Oi13ZWJraXQtZGF0ZXRpbWUtZWRpdC10ZXh0IHtcbiAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgaW5wdXRbdHlwZT1kYXRlXTo6LXdlYmtpdC1kYXRldGltZS1lZGl0LW1vbnRoLWZpZWxke1xuICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICBpbnB1dFt0eXBlPWRhdGVdOjotd2Via2l0LWRhdGV0aW1lLWVkaXQtZGF5LWZpZWxkIHtcbiAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgaW5wdXRbdHlwZT1kYXRlXTo6LXdlYmtpdC1kYXRldGltZS1lZGl0LXllYXItZmllbGQge1xuICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgfSovXG4gIFxuICAgaW5wdXRbdHlwZT1cImRhdGVcIl06YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6IGF0dHIocGxhY2Vob2xkZXIpICFpbXBvcnRhbnQ7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgIH1cbiAgICAuYWxsb19oaXN0b3J5IC50YWJsZV9ib2R5PmRpdiwuYWxsb19oaXN0b3J5IC50YWJsZV9oZWFkaW5nPmRpdntcbiAgICB3aWR0aDogY2FsYygoMTAwJSAtIDUwcHgpIC8gNSk7XG4gIH1cbiAgLmFsbG9faGlzdG9yeSAudGFibGVfaGVhZGluZz5kaXY6Zmlyc3QtY2hpbGQsLmFsbG9faGlzdG9yeSAudGFibGVfYm9keT5kaXY6Zmlyc3QtY2hpbGR7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDQ7XG4gIH1cbiAgLmluMXtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYmFja2dyb3VuZDogI0NDRkZBQztcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgICBjb2xvcjogIzMyM0M0NztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLm91dHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYmFja2dyb3VuZDogI0ZGQ0Y4ODtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gICAgY29sb3I6ICMzMjNDNDc7XG4gIH1cbiAgI2hpc3RvcnlNb2RhbCAubW9kYWwtZGlhbG9nLCNoaXN0b3J5TW9kYWwgLm1vZGFsLWRpYWxvZyB7XG4gICAgICB3aWR0aDogNjUwcHg7XG4gIH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KXtcbiAgICNoaXN0b3J5TW9kYWwgLm1vZGFsLWRpYWxvZywjaGlzdG9yeU1vZGFsIC5tb2RhbC1kaWFsb2cge1xuICAgICAgbWF4LXdpZHRoOjY1MHB4O1xuICB9XG4gIH1cbiAgICAuc3VwcGxpZXJfbSAudGFibGVfYm9keT5kaXYsLnN1cHBsaWVyX20gLnRhYmxlX2hlYWRpbmc+ZGl2e1xuICAgIHdpZHRoOiBjYWxjKCgxMDAlIC0gMjAwcHgpIC8gNSk7XG4gIH1cbiAgLnN1cHBsaWVyX20gLnRhYmxlX2hlYWRpbmc+ZGl2Omxhc3QtY2hpbGQsLnN1cHBsaWVyX20gLnRhYmxlX2JvZHk+ZGl2Omxhc3QtY2hpbGR7XG4gICAgd2lkdGg6IDIwMHB4O1xuICB9XG4gICAgLnB1cmNoYXNlIC50YWJsZV9ib2R5PmRpdiwucHVyY2hhc2UgLnRhYmxlX2hlYWRpbmc+ZGl2e1xuICAgIHdpZHRoOiBjYWxjKCgxMDAlIC0gMTAwcHgpIC8gNik7XG4gIH1cbiAgLnB1cmNoYXNlIC50YWJsZV9oZWFkaW5nPmRpdjpsYXN0LWNoaWxkLC5wdXJjaGFzZSAudGFibGVfYm9keT5kaXY6bGFzdC1jaGlsZHtcbiAgICB3aWR0aDogMTAwcHg7XG4gIH1cbiAgaW5wdXRbdHlwZT1maWxlXTo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjZTNkYWRiO1xuICAgIHBhZGRpbmc6IC42ZW0gLjRlbTtcbiAgICBib3JkZXItcmFkaXVzOiAuMmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgdHJhbnNpdGlvbjogMXM7XG4gICAgY29sb3I6ICMxMDlDRjE7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuICBcbiAgaW5wdXRbdHlwZT1maWxlXSB7XG4gICAgcGFkZGluZzogMHB4O1xuICAgICBjb2xvcjogI0I2QjVCMTtcbiAgICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIC5kaXZfMXtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRDVEN0RBO1xuICAgIHdpZHRoOiAyNSU7XG4gICAgaGVpZ2h0OiAyN3JlbTtcbiAgICBtYXJnaW46IDBweCAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gIH1cbiAgLnB0MTAye1xuICAgIHBhZGRpbmctYm90dG9tOjIwcHg7XG4gIH1cbiAgLnRleHRhcmVhMXtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICB9XG4gIC5oZWFkaW5nMXtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICAgIGNvbG9yOiAjMzM0RDZFO1xuICB9XG4gIFxuICAuZGl2XzJ7XG4gICAgd2lkdGg6IDc1JTtcbiAgICBtYXJnaW46IDBweCAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gIH1cbiAgLnRhYmxlaGVhZHtcbiAgICBiYWNrZ3JvdW5kOiAjREZFNUYwO1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuICAudGFibGVoZWFkPmRpdntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAvIDUpO1xuICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICBjb2xvcjogIzMyM0M0NztcbiAgfVxuICAuc2VsMXtcbiAgICB3aWR0aDogMjUycHg7XG4gICAgYmFja2dyb3VuZDogI0ZBRkFGQTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRjBFREVEO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgfVxuICAudGFibGVib2R5e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgI0RGRTVGMDtcbiAgfVxuICAudGFibGVib2R5PmRpdntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAvIDUpO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gICAgY29sb3I6ICMzMjNDNDc7XG4gIH1cbiAgLnRhYmxldG90YWx7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBiYWNrZ3JvdW5kOiAjRDRGRkYyO1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgICBjb2xvcjogIzMyM0M0NztcbiAgfVxuICAudGFibGV0b3RhbD5kaXZ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyA1KTtcbiAgfVxuICAudGFibGV0b3RhbD5kaXY6bnRoLWNoaWxkKDQpe1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuICAuY3JlYXRlZF9kYXRle1xuICAgLy8gYmFja2dyb3VuZDp1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZzEvdGVhbF9yZWMuc3ZnKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgd2lkdGg6IDE5NHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gICAgY29sb3I6ICMzMjNDNDc7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBcbiAgfVxuICAubXIxMHtcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxuICAuZmxleDMwe1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgXG4gICAgXG4gIH1cbiAgLmZsZXgzMD5kaXZ7XG4gICAgcGFkZGluZy1sZWZ0OjIwcHg7XG4gICAgd2lkdGg6IGNhbGMoIDEwMCUgLyAzKTtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjRTVFM0VFO1xuICB9XG4gIC5mbGV4MzA+ZGl2Omxhc3QtY2hpbGR7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICB9XG4gIC5uYW1lMntcbiAgICB3aWR0aDogMzQlO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gICAgY29sb3I6ICMzMjNDNDc7XG4gIFxuICB9XG4gIC52YWx1ZTJ7XG4gICAgd2lkdGg6IDY2JTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIFxuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICBjb2xvcjogICMzMjNDNDc7XG4gIFxuICB9XG4gXG4gIC5mbGV4MzA+ZGl2Omxhc3QtY2hpbGQgLm5hbWUye1xuICAgIHdpZHRoOiA0NSU7XG4gIH1cbiAgLmZsZXgzMD5kaXY6bGFzdC1jaGlsZCAudmFsdWUye1xuICAgIHdpZHRoOiA1NSU7XG4gIH1cbiAgLml0ZW0gLnRhYmxlaGVhZD5kaXYsLml0ZW0gLnRhYmxlYm9keT5kaXZ7XG4gIFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyA0KTtcbiAgfVxuICAuaXRlbSAudGFibGV0b3RhbHtcbiAgICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgI0RGRTVGMDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJveC1zaGFkb3c6bm9uZTtcbiAgXG4gIH1cbiAgLml0ZW0gLnRhYmxldG90YWw+ZGl2e1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLzQpO1xuICB9XG4gICAgLnNhbGUgLnRhYmxlX2JvZHk+ZGl2LC5zYWxlIC50YWJsZV9oZWFkaW5nPmRpdntcbiAgICB3aWR0aDogY2FsYygoMTAwJSAtIDEwMHB4KSAvIDYpO1xuICB9XG4gIC5zYWxlIC50YWJsZV9oZWFkaW5nPmRpdjpsYXN0LWNoaWxkLC5zYWxlIC50YWJsZV9ib2R5PmRpdjpsYXN0LWNoaWxke1xuICAgIHdpZHRoOiAxMDBweDtcbiAgfVxuICAuc2FsZSAudGFibGVfaGVhZGluZz5kaXY6bnRoLWNoaWxkKDEwKSwuc2FsZSAudGFibGVfYm9keT5kaXY6bnRoLWNoaWxkKDEwKXtcbiAgICBsaW5lLWhlaWdodDogMThweDtcbiAgfVxuICAuZGl2XzExe1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNENUQ3REE7XG4gICAgd2lkdGg6IDI1JTtcbiAgICBoZWlnaHQ6IDM3cmVtO1xuICAgIG1hcmdpbjogMHB4IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgfVxuICBcbiAgLnNhbGVfYWRkIC50YWJsZWhlYWQ+ZGl2e1xuICBcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gNik7XG4gIFxuICB9XG4gIFxuICAuc2FsZV9hZGQgLnRhYmxlYm9keT5kaXZ7XG4gIFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyA2KTtcbiAgXG4gIH1cbiAgXG4gIC5zYWxlX2FkZCAudGFibGV0b3RhbD5kaXZ7XG4gIFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyA2KTtcbiAgfVxuICAuc2FsZV9hZGQgLnRhYmxldG90YWw+ZGl2Om50aC1jaGlsZCg1KXtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbiAgLmZpbGVfbmFtZXtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICAgIGNvbG9yOiAjMTA5Q0YxO1xuICBcbiAgfVxuICAgIC5oaXN0b3J5IC50YWJsZV9ib2R5PmRpdiwuaGlzdG9yeSAudGFibGVfaGVhZGluZz5kaXZ7XG4gICAgd2lkdGg6IGNhbGMoKDEwMCUgLSA1MHB4KSAvIDUpO1xuICB9XG4gIC5oaXN0b3J5IC50YWJsZV9oZWFkaW5nPmRpdjpmaXJzdC1jaGlsZCwuaGlzdG9yeSAudGFibGVfYm9keT5kaXY6Zmlyc3QtY2hpbGR7XG4gICAgd2lkdGg6IDUwcHg7XG4gIH1cbiAgLm5hdi1pdGVtIHtcbiAgICAubmF2LWxpbmsge1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBjb2xvcjogIzQwNTg3NztcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICB9XG4gICAgLmFjdGl2ZSB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMTA5Y2YxICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiAjMTA5Y2YxICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG4gIC5tb2RhbCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgIH1cbiAgICAgICAucmlnaHR7XG4gICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgIH1cbiAgIC5tb2RhbC1kaWFsb2cge1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgdG9wOjEwJTtcbiAgICB9XG4gICAgLm1vZGFsLWhlYWRlcjpiZWZvcmV7XG4gICAgICBkaXNwbGF5Om5vbmU7XG4gICAgfVxuICAgIC5tb2RhbC10aXRsZSB7XG4gICAgICBjb2xvcjogIzJCMjYyNjtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIH1cbiAgLmVycm9ybXNne1xuICAgIGhlaWdodDoxMHB4O1xuICB9XG4gIC5oZWxwLWJsb2Nre1xuICAgIGNvbG9yOiByZWQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMCU7XG4gICAgLy90ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy1sZWZ0OiAycHg7XG4gICAgfVxuICAgIC5jYW5jZWx7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgY29sb3I6ICMxMDlDRjE7XG4gICAgICAgIHBhZGRpbmc6IDBweCAyMHB4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGJvcmRlcjogc29saWQgMnB4ICMxMDlDRjE7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgfVxuICAgIC5hbGlnbntcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgLm11bHRpc2VsZWN0e1xuICAgICAgd2lkdGg6IDMzMHB4O1xuICAgIGhlaWdodDogMzVweDtcbiAgICBsZWZ0OiAzMHB4O1xuICAgIHRvcDogNjNweDtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIG1hcmdpbi10b3A6MjBweDtcbiAgICB9XG4gICAgI2RlbGV0ZXNNb2RhbCAubW9kYWwtZGlhbG9nIHtcbiAgICAgIHdpZHRoOiAzNTBweDtcbiAgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpe1xuICAjZGVsZXRlc01vZGFsIC5tb2RhbC1kaWFsb2cge1xuICAgICAgbWF4LXdpZHRoOjM1MHB4O1xuICB9XG4gIH1cbiAgLmNlbnRlcntcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuIFxuICAuZGVsZXRlSW1nLGxpe1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbjozcHg7XG4gIH1cbiAgLnBfdGl0bGV7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgICAvL2NvbG9yOiAjMkIyNjI2O1xuICAgIGNvbG9yOiMzMjNDNDc7XG4gICAgbWFyZ2luLWJvdHRvbTo1cHg7XG4gICAgfVxuICAgIC5oYXMtZXJyb3IgLmNvbnRyb2wtbGFiZWx7XG4gICAgICBjb2xvcjogYmxhY2s7XG4gICAgICB9XG4gICAgICAuaGVscC1ibG9ja3tcbiAgICAgIGNvbG9yOiByZWQ7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwJTtcbiAgICAgIFxuICAgICAgfVxuICAgICAgLnRleHQtZGFuZ2Vye1xuICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6MnB4O1xuICAgICAgfVxuICAgIC5zY3JvbGxhYmxle1xuICAgICAgbWF4LWhlaWdodDogNzB2aDtcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICB9XG4gICAgLmRyb3Bkb3duLWNvbnRlbnQxe1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICBtaW4td2lkdGg6IDIwMHB4O1xuICAgICAgcmlnaHQ6IDNweDtcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICB0b3A6IC0xMDBweDtcbiAgICAgIC8vdG9wOi0xMXB4O1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgIGF7XG4gIHBhZGRpbmctbGVmdDogOHB4OztcbiAgICAgfVxuICAgICAgfVxuICAgICAgLnNlcntcbiAgICAgICAgbWFyZ2luOjEwcHggMHB4O1xuICAgICAgfVxuICAgICAgLmlsbHVzdHJhdGlvbi1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgLmlsbHVzdHJhdGlvbi1pbWcge1xuICAgICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDI1JTtcbiAgICAgICAgfVxuICAgICAgfSBcbiAgICAiLCJAaW1wb3J0IFwiLi4vaW52ZW50b3J5LW1vZHVsZS5jb21wb25lbnQuc2Nzc1wiO1xuLmNhbmNlbHtcbiAgIGNvbG9yOiAjMTA5Q0YxO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDBweCAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBib3JkZXI6IHNvbGlkIDJweCAjMTA5Q0YxO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsaW5lLWhlaWdodDogMzVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYm90dG9tX3BhZ2lnbmF0aW9ue1xuICAgIHBhZGRpbmc6IDEwcHggMHB4O1xufVxuLmg2MHtcbiAgICBoZWlnaHQ6IDYwcHg7XG59XG4uYm50U3R5bGUge1xuICAgIFxuICAgIGJvcmRlcjpzb2xpZCAycHggICMxZTgyYTAgIWltcG9ydGFudDtcbiAgfVxuICAucHQxMDJ7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgfVxuICAudGV4dGFyZWExe1xuICAgICAgaGVpZ2h0OiA2OHB4O1xuICB9XG4gIC5kaXZfMXtcbiAgICBoZWlnaHQ6MjlyZW0gICFpbXBvcnRhbnQ7XG4gICAgfVxuIl19 */";
      /***/
    },

    /***/
    "./src/app/components/inventory-module/purchase-add/purchase-add.component.ts":
    /*!************************************************************************************!*\
      !*** ./src/app/components/inventory-module/purchase-add/purchase-add.component.ts ***!
      \************************************************************************************/

    /*! exports provided: PurchaseAddComponent */

    /***/
    function srcAppComponentsInventoryModulePurchaseAddPurchaseAddComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PurchaseAddComponent", function () {
        return PurchaseAddComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _services_export_to_pdf_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../services/export-to-pdf.service */
      "./src/app/services/export-to-pdf.service.ts");
      /* harmony import */


      var _services_excel_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../services/excel.service */
      "./src/app/services/excel.service.ts");
      /* harmony import */


      var _services_message_show_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../services/message-show.service */
      "./src/app/services/message-show.service.ts");
      /* harmony import */


      var _services_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../services/http.service */
      "./src/app/services/http.service.ts");
      /* harmony import */


      var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../services/authenticator.service */
      "./src/app/services/authenticator.service.ts");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! moment */
      "./node_modules/moment/moment.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

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

      var PurchaseAddComponent =
      /** @class */
      function () {
        var PurchaseAddComponent = /*#__PURE__*/function () {
          function PurchaseAddComponent(httpService, auth, msgService, _pdfService, excelService, route, router, _Activatedroute) {
            _classCallCheck(this, PurchaseAddComponent);

            this.httpService = httpService;
            this.auth = auth;
            this.msgService = msgService;
            this._pdfService = _pdfService;
            this.excelService = excelService;
            this.route = route;
            this.router = router;
            this._Activatedroute = _Activatedroute;
            this.categoryAllData = [];
            this.supplierAllData = [];
            this.pageIndex = 1;
            this.displayBatchSize = 25;
            this.itemArray = [];
            this.itemData = [];
            this.isedit = false;
            this.isDisable = false;
            this.url = "/api/v1/inventory/";
            this.model = {
              purchase_id: 0,
              supplier_id: '',
              purchase_description: '',
              institute_id: sessionStorage.getItem('institute_id'),
              total_amount: 0,
              total_paid_amount: 0,
              is_refunded: false,
              purchased_item_list: [],
              supplier_company_name: '',
              bill_image_url: '',
              purchase_date: '',
              reference_number: ''
            };
            this.status = true;
            this.isChange = false;
            this.model.institute_id = sessionStorage.getItem('institution_id');
          }

          _createClass(PurchaseAddComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.getVendorDetails();
              this.getCategoryItem();
              this.editId = this._Activatedroute.snapshot.paramMap.get("id");

              this._Activatedroute.snapshot.queryParamMap.get('isedit');

              if (this.editId != undefined) {
                // this.isadd=false;
                this.editRow(this.editId);
                this.isDisable = true;
                this.isedit = true;
              }
            }
          }, {
            key: "ngDoCheck",
            value: function ngDoCheck() {//this.totals(obj);
            }
          }, {
            key: "getCategoryItem",
            value: function getCategoryItem() {
              var _this22 = this;

              this.isChange = false;
              this.itemData = []; // this.auth.showLoader();
              ///api/v1/inventory/category/all/' + this.institution_id

              this.httpService.getData('/api/v1/inventory/category/all/' + this.model.institute_id).subscribe(function (res) {
                _this22.auth.hideLoader();

                _this22.categoryAllData = res;
                var items = [];

                _this22.auth.hideLoader();
              }, function (err) {
                _this22.auth.hideLoader();
              });
            }
          }, {
            key: "getVendorDetails",
            value: function getVendorDetails() {
              var _this23 = this;

              this.auth.showLoader();
              this.httpService.getData('/api/v1/inventory/supplier/all?pageOffset=' + this.pageIndex + '&pageSize=' + this.displayBatchSize + '&sortBy=supplierName&instituteId=' + this.model.institute_id).subscribe(function (res) {
                _this23.supplierAllData = res.result.response;

                _this23.auth.hideLoader();
              }, function (err) {
                _this23.auth.hideLoader();
              });
            }
          }, {
            key: "getItemAgainscat",
            value: function getItemAgainscat(e) {
              var _this24 = this;

              var id = e.target.value;
              id = +id; // this.categoryAllData.forEach(element => {
              //   if (element && element.categoryId === id) {
              //     this.itemArray = element.items;
              //   }
              // });
              //this.isChange = false;

              if (id != '' && id != 0) {
                this.auth.showLoader();
                this.httpService.getData('/api/v1/inventory/item/getItemsByCategory/' + this.model.institute_id + '?categoryIdList=' + id).subscribe(function (res) {
                  _this24.itemArray = res.result;

                  _this24.auth.hideLoader();

                  _this24.itemArray = _this24.itemArray[0].items;
                }, function (err) {
                  _this24.auth.hideLoader();
                });
              }
            }
          }, {
            key: "getItemData",
            value: function getItemData(id) {
              var _this25 = this;

              this.isChange = true;
              this.itemArray.forEach(function (elements) {
                if (elements && elements.item_id == id) {
                  elements.available_units = 1;

                  _this25.itemData.push(elements);

                  var data = elements; //use to remove duplicates from array

                  _this25.removeDuplicates(_this25.itemData); //for initial total and unit


                  _this25.purchaselistItem();
                }
              });
            }
          }, {
            key: "removeDuplicates",
            value: function removeDuplicates(data) {
              var _this26 = this;

              var unique = [];
              data.forEach(function (element) {
                if (!unique.includes(element)) {
                  unique.push(element);
                  _this26.itemData = unique;
                } else {
                  _this26.msgService.showErrorMessage(_this26.msgService.toastTypes.info, '', 'Selected Item Exist in the table');
                }
              });
              return this.itemData;
            }
          }, {
            key: "purchaselistItem",
            value: function purchaselistItem() {
              var subTotal = 0;
              var units = 0;

              var _iterator = _createForOfIteratorHelper(this.itemData),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var data = _step.value;
                  subTotal += data.available_units * data.unit_cost;
                  units += Number(data.available_units);
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              this.total = subTotal.toFixed(2); //num.toFixed(2);

              this.totalUnits = units;
            } //delete item row

          }, {
            key: "deleteItemData",
            value: function deleteItemData(id) {
              var _this27 = this;

              //delete item one by one
              this.itemData.forEach(function (element, index) {
                _this27.itemData.splice(id, 1);
              }); //call for total and totalunit after delete

              this.purchaselistItem(); //when delete all data hide total row

              var length = this.itemData.length;

              if (this.itemData.length == 0) {
                this.isChange = false;
              }
            }
          }, {
            key: "editdata",
            value: function editdata(param) {
              //for editrow
              this.status = param;
            }
          }, {
            key: "savePurchaseData",
            value: function savePurchaseData() {
              var _this28 = this;

              this.model.purchased_item_list = [];

              for (var i = 0; i < this.itemData.length; i++) {
                var obj = {
                  item_id: this.itemData[i].item_id,
                  "quantity": this.itemData[i].available_units,
                  "unit_price": this.itemData[i].unit_cost
                };
                this.model.purchased_item_list.push(obj);
              }

              if (this.purchaseForm.valid) {
                if (this.itemData.length) {
                  var file = document.getElementById('billImageFile').files[0];
                  this.model.institute_id = sessionStorage.getItem('institute_id');
                  var formData = new FormData();
                  var purchaseDto = {};

                  if (this.isedit) {
                    purchaseDto.purchase_id = this.model.purchase_id;
                  }

                  purchaseDto.institute_id = sessionStorage.getItem('institute_id');
                  purchaseDto.supplier_id = this.model.supplier_id;
                  purchaseDto.purchase_id = this.model.purchase_id;
                  purchaseDto.purchase_description = this.model.purchase_description;
                  purchaseDto.purchase_date = moment__WEBPACK_IMPORTED_MODULE_7__(this.model.purchase_date).format("YYYY-MM-DD");
                  purchaseDto.total_amount = this.total;
                  purchaseDto.total_paid_amount = this.model.total_paid_amount;
                  purchaseDto.is_refunded = this.model.is_refunded;
                  purchaseDto.reference_number = this.model.reference_number;
                  purchaseDto.purchased_item_list = this.model.purchased_item_list;
                  formData.append('purchaseDto', JSON.stringify(purchaseDto));

                  if (file) {
                    formData.append('billImageFile', file);
                  }

                  if (this.isedit) {} //this.isedit?this.model.id:delete(this.model.id);


                  var base = this.auth.baseUrl; // let urlPostXlsDocument = base + "/prod/api/v2/asset/purchase/create";
                  // let urlPostXlsDocument = this.isedit ? base + "/api/v1/inventory/purchase/update" : base + "/api/v1/inventory/purchase/create";

                  var urlPostXlsDocument = base + "/api/v1/inventory/purchase/create";
                  var newxhr = new XMLHttpRequest();
                  var auths = {
                    userid: sessionStorage.getItem('userid'),
                    userType: sessionStorage.getItem('userType'),
                    password: sessionStorage.getItem('password'),
                    institution_id: sessionStorage.getItem('institute_id')
                  };
                  var Authorization = btoa(auths.userid + "|" + auths.userType + ":" + auths.password + ":" + auths.institution_id); //this.isedit ? newxhr.open("PUT", urlPostXlsDocument, true) : newxhr.open("POST", urlPostXlsDocument, true);

                  newxhr.open("POST", urlPostXlsDocument, true);
                  newxhr.setRequestHeader("Authorization", Authorization);
                  newxhr.setRequestHeader("x-proc-authorization", Authorization);
                  newxhr.setRequestHeader("x-prod-inst-id", sessionStorage.getItem('institute_id'));
                  newxhr.setRequestHeader("x-prod-user-id", sessionStorage.getItem('userid'));
                  newxhr.setRequestHeader("enctype", "multipart/form-data;");
                  newxhr.setRequestHeader("Accept", "application/json, text/javascript"); //newxhr.setRequestHeader("Access-Control-Allow-Origin", "*");

                  if (!this.auth.isRippleLoad.getValue()) {
                    this.auth.showLoader();

                    newxhr.onreadystatechange = function () {
                      _this28.auth.hideLoader();

                      if (newxhr.readyState == 4) {
                        if (newxhr.status >= 200 && newxhr.status < 300) {
                          var msg = _this28.isedit ? 'Purchased Saved Successfully' : 'Purchased Saved Successfully';

                          _this28.msgService.showErrorMessage(_this28.msgService.toastTypes.success, '', msg); //$('#modelforpurchase').modal('hide');


                          _this28.router.navigate(['/view/inventory-management/purchase-item']); // this.getPurchaseDetails();
                          //this.cancel(false)

                        } else {
                          // this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', "File format is not suported");
                          _this28.msgService.showErrorMessage(_this28.msgService.toastTypes.error, '', JSON.parse(newxhr.response).error[0].errorMessage);
                        }
                      }
                    };

                    newxhr.send(formData);
                  }
                } else {
                  this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', "Please select category and Item for purchase");
                }
              } else {
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', "Please fill all mandatory fields");
              }
            }
          }, {
            key: "editRow",
            value: function editRow(editId) {
              var _this29 = this;

              //this.itemData=[];
              this.isChange = true;
              this.isDisable = true;
              this.httpService.getData('/api/v1/inventory/purchase/' + editId + '?instituteId=' + this.model.institute_id).subscribe(function (res) {
                _this29.dataForEdit = res.result;
                _this29.model = _this29.dataForEdit;

                _this29.auth.hideLoader();

                _this29.model.purchase_id = _this29.dataForEdit.purchase_id;
                _this29.model.supplier_id = _this29.dataForEdit.supplier_id;
                _this29.model.purchase_date = _this29.dataForEdit.purchase_date;
                _this29.model.purchase_description = _this29.dataForEdit.purchase_description;
                _this29.model.total_amount = _this29.dataForEdit.total_amount;
                _this29.model.bill_image_url = _this29.dataForEdit.bill_image_url;
                _this29.itemData = _this29.dataForEdit.purchased_item_list;

                if (_this29.dataForEdit.total_paid_amount > 0) {
                  _this29.isedit = true;
                }

                var newData = [];
                var newdataforcat = [];

                for (var i = 0; i < _this29.itemData.length; i++) {
                  var objforcat = {
                    category_id: _this29.itemData[i].category_id,
                    category_name: _this29.itemData[i].category_name
                  };
                  var obj = {
                    item_id: _this29.itemData[i].item_id,
                    item_name: _this29.itemData[i].item_name,
                    "available_units": _this29.itemData[i].quantity,
                    "unit_cost": _this29.itemData[i].unit_price
                  };
                  newData.push(obj);
                  newdataforcat.push(objforcat);
                }

                _this29.itemData = newData;
                _this29.categoryAllData = newdataforcat;

                _this29.purchaselistItem();
              }, function (err) {
                _this29.auth.hideLoader();
              });
            }
          }, {
            key: "validateFutureDate",
            value: function validateFutureDate() {
              var today = moment__WEBPACK_IMPORTED_MODULE_7__(new Date());
              var selectedDate = moment__WEBPACK_IMPORTED_MODULE_7__(this.model.purchase_date);
              var diff = moment__WEBPACK_IMPORTED_MODULE_7__(selectedDate.diff(today))['_i'];

              if (diff > 0) {
                this.msgService.showErrorMessage('info', '', "Future date is not allowed");
                this.model.purchase_date = moment__WEBPACK_IMPORTED_MODULE_7__(new Date()).format('YYYY-MM-DD');
              }
            }
          }, {
            key: "updatePurchaseData",
            value: function updatePurchaseData() {
              var _this30 = this;

              this.model.purchased_item_list = [];

              for (var i = 0; i < this.itemData.length; i++) {
                var obj = {
                  "item_id": this.itemData[i].item_id,
                  "quantity": this.itemData[i].available_units,
                  "unit_price": this.itemData[i].unit_cost
                };
                this.model.purchased_item_list.push(obj);
              } //this.router.navigate(['/view/inventory-management/purchase-item']);


              if (this.purchaseForm.valid) {
                var file = document.getElementById('billImageFile').files[0];
                this.model.institute_id = sessionStorage.getItem('institute_id');
                var formData = new FormData();
                var purchaseDto = {};
                purchaseDto.institute_id = sessionStorage.getItem('institute_id');
                purchaseDto.supplier_id = this.model.supplier_id;
                purchaseDto.purchase_id = this.editId;
                purchaseDto.purchase_description = this.model.purchase_description;
                purchaseDto.purchase_date = moment__WEBPACK_IMPORTED_MODULE_7__(this.model.purchase_date).format("YYYY-MM-DD");
                purchaseDto.total_amount = this.total;
                purchaseDto.reference_number = this.model.reference_number;
                purchaseDto.total_paid_amount = this.model.total_paid_amount;
                purchaseDto.is_refunded = this.model.is_refunded;
                purchaseDto.bill_image_url = this.model.bill_image_url;
                purchaseDto.purchased_item_list = this.model.purchased_item_list;
                formData.append('purchaseDto', JSON.stringify(purchaseDto));

                if (file) {
                  formData.append('billImageFile', file);
                }

                if (this.isedit) {} //this.isedit?this.model.id:delete(this.model.id);


                var base = this.auth.baseUrl; // let urlPostXlsDocument = base + "/prod/api/v2/asset/purchase/create";
                // let urlPostXlsDocument = this.isedit ? base + "/api/v1/inventory/purchase/update" : base + "/api/v1/inventory/purchase/create";

                var urlPostXlsDocument = base + "/api/v1/inventory/purchase/update";
                var newxhr = new XMLHttpRequest();
                var auths = {
                  userid: sessionStorage.getItem('userid'),
                  userType: sessionStorage.getItem('userType'),
                  password: sessionStorage.getItem('password'),
                  institution_id: sessionStorage.getItem('institute_id')
                };
                var Authorization = btoa(auths.userid + "|" + auths.userType + ":" + auths.password + ":" + auths.institution_id); //this.isedit ? newxhr.open("PUT", urlPostXlsDocument, true) : newxhr.open("POST", urlPostXlsDocument, true);

                newxhr.open("POST", urlPostXlsDocument, true);
                newxhr.setRequestHeader("Authorization", Authorization);
                newxhr.setRequestHeader("x-proc-authorization", Authorization);
                newxhr.setRequestHeader("x-prod-inst-id", sessionStorage.getItem('institute_id'));
                newxhr.setRequestHeader("x-prod-user-id", sessionStorage.getItem('userid'));
                newxhr.setRequestHeader("enctype", "multipart/form-data;");
                newxhr.setRequestHeader("Accept", "application/json, text/javascript"); //newxhr.setRequestHeader("Access-Control-Allow-Origin", "*");

                if (!this.auth.isRippleLoad.getValue()) {
                  this.auth.showLoader();

                  newxhr.onreadystatechange = function () {
                    _this30.auth.hideLoader();

                    if (newxhr.readyState == 4) {
                      if (newxhr.status >= 200 && newxhr.status < 300) {
                        var msg = 'Purchase Updated Successfully';

                        _this30.msgService.showErrorMessage(_this30.msgService.toastTypes.success, '', msg); //$('#modelforpurchase').modal('hide');


                        _this30.router.navigate(['/view/inventory-management/purchase-item']); // this.getPurchaseDetails();
                        //this.cancel(false)

                      } else {
                        // this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', "File format is not suported");
                        _this30.msgService.showErrorMessage(_this30.msgService.toastTypes.error, '', JSON.parse(newxhr.response).error[0].errorMessage);
                      }
                    }
                  };

                  newxhr.send(formData);
                }
              } else {
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', "Please Fill all required field");
              }
            }
          }, {
            key: "clearFile",
            value: function clearFile() {
              this.model.bill_image_url = ''; // this.isedit=false;
            }
          }, {
            key: "maxlenth",
            value: function maxlenth(data, limit) {
              if (data.length > limit) {
                this.msgService.showErrorMessage(this.msgService.toastTypes.info, '', "Please Enter upto" + " " + limit + " " + "characters only");
              }
            }
          }, {
            key: "readFile",
            value: function readFile(fileEvent, id) {
              var file = fileEvent.target.files[0];
              this.filesize = file.size;
              var fileSizeInKB = Math.round(this.filesize / 1024);

              if (fileSizeInKB > 5242880) {
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', "Please upload file upto 5MB");
              }

              this.filetype = file.type;
              var image = document.getElementById(id).value;

              if (image != '') {
                var checkimg = image.toLowerCase();

                if (!checkimg.match(/(\.jpg|\.png|\.JPG|\.PNG|\.jpeg|\.JPEG|\.PDF|\.pdf|\.svg |\.SVG)$/)) {
                  // validation of file extension using regular expression before file upload
                  this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', "File format is not allowed");
                  return false;
                }

                var img = document.getElementById(id); //alert(img.files[0].size);
                //  if(img.files[0].size > 5,242,880)  // validation according to file size
                //  {
                //   this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', "Please upload file upto 5MB");
                //  //document.getElementById("errorName5").innerHTML="Image size too short";
                //  return false;
                //   }

                return true;
              }
            }
          }]);

          return PurchaseAddComponent;
        }();

        PurchaseAddComponent.ctorParameters = function () {
          return [{
            type: _services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]
          }, {
            type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticatorService"]
          }, {
            type: _services_message_show_service__WEBPACK_IMPORTED_MODULE_4__["MessageShowService"]
          }, {
            type: _services_export_to_pdf_service__WEBPACK_IMPORTED_MODULE_2__["ExportToPdfService"]
          }, {
            type: _services_excel_service__WEBPACK_IMPORTED_MODULE_3__["ExcelService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]
          }];
        };

        PurchaseAddComponent.propDecorators = {
          purchaseForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['purchaseForm', {
              "static": false
            }]
          }]
        };
        PurchaseAddComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
          selector: 'app-purchase-add',
          template: __importDefault(__webpack_require__(
          /*! raw-loader!./purchase-add.component.html */
          "./node_modules/raw-loader/dist/cjs.js!./src/app/components/inventory-module/purchase-add/purchase-add.component.html"))["default"],
          styles: [__importDefault(__webpack_require__(
          /*! ./purchase-add.component.scss */
          "./src/app/components/inventory-module/purchase-add/purchase-add.component.scss"))["default"]]
        }), __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"], _services_authenticator_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticatorService"], _services_message_show_service__WEBPACK_IMPORTED_MODULE_4__["MessageShowService"], _services_export_to_pdf_service__WEBPACK_IMPORTED_MODULE_2__["ExportToPdfService"], _services_excel_service__WEBPACK_IMPORTED_MODULE_3__["ExcelService"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]])], PurchaseAddComponent);
        return PurchaseAddComponent;
      }();
      /***/

    },

    /***/
    "./src/app/components/inventory-module/purchase-item/purchase-item.component.scss":
    /*!****************************************************************************************!*\
      !*** ./src/app/components/inventory-module/purchase-item/purchase-item.component.scss ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsInventoryModulePurchaseItemPurchaseItemComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "* {\n  margin: 0px;\n}\n\nbody {\n  font-family: 'Open Sans', sans-serif;\n}\n\n.flex {\n  display: flex;\n}\n\n.blue_button {\n  background-color: #109CF1;\n  color: white;\n  padding: 0px 20px;\n  font-size: 13px;\n  border: none;\n  border-radius: 5px;\n  font-weight: 600;\n  line-height: 35px;\n  cursor: pointer;\n}\n\n.white_button {\n  background-color: #fff;\n  color: #109CF1;\n  padding: 0px 20px;\n  font-size: 12px;\n  border: 1px solid #109CF1;\n  border-radius: 5px;\n  font-weight: 500;\n  line-height: 35px;\n  cursor: pointer;\n}\n\n.select {\n  padding: 7px 20px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-size: 12px;\n  font-weight: 500;\n  color: #787A7D;\n}\n\n.input {\n  padding: 7px 20px;\n  font-size: 12px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-weight: 500;\n  height: 35px;\n}\n\ninput:focus, select:focus, button:focus {\n  outline: none;\n}\n\n.page_heading > p {\n  color: #334D6E;\n  font-weight: 600;\n  font-size: 14px;\n  margin-bottom: 0px;\n}\n\n.flex {\n  display: flex;\n}\n\n.display {\n  display: flex;\n  justify-content: space-between;\n}\n\n.w98 {\n  width: 98%;\n  margin: 0px auto;\n}\n\n.head_padding {\n  box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  -webkit-box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  -moz-box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  padding: 15px 0px;\n}\n\n.pageheadingspace {\n  margin-bottom: 7px;\n}\n\n.table_heading {\n  width: 100%;\n  background-color: #DFE5F0;\n  /* padding: 10px 0px;*/\n  display: flex;\n  border-radius: 5px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);\n}\n\n.table_heading > div {\n  text-align: center;\n  font-weight: 600;\n  font-size: 12px;\n  color: #323C47;\n  line-height: 35px;\n  text-align: left;\n}\n\n.table_body {\n  width: 100%;\n  display: flex;\n  border-radius: 5px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);\n  text-align: left;\n  line-height: 18px;\n}\n\n.table_body > div {\n  text-align: left;\n  font-weight: 500;\n  font-size: 12px;\n  color: #323C47;\n  /* padding: 5px 0px;*/\n  margin: auto;\n  line-height: 18px;\n}\n\n.mr10 {\n  margin-right: 10px;\n}\n\n.w240 {\n  width: 240px;\n}\n\n.item_cat .table_body > div, .item_cat .table_heading > div {\n  width: calc((100% - 250px) / 2);\n}\n\n.item_cat .table_heading > div:first-child, .item_cat .table_body > div:first-child {\n  width: 50px;\n}\n\n.item_cat .table_heading > div:last-child, .item_cat .table_body > div:last-child {\n  width: 200px;\n}\n\n.group18 {\n  width: 18px;\n  height: auto;\n}\n\n.pt15 {\n  padding-top: 15px;\n  padding-bottom: 5px;\n}\n\n.bottom_pagignation {\n  padding-top: 10px;\n  background-color: #fff;\n  position: fixed;\n  bottom: 0px;\n  z-index: 100;\n}\n\n.bottom_pagignation p {\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 20px;\n}\n\n.bottom_pagignation select {\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-size: 13px;\n  font-weight: 500;\n  color: #0079FF;\n  display: inline;\n}\n\n.bottom_pagignation .w20 {\n  width: 20%;\n}\n\n.bottom_pagignation .w10 {\n  width: 10%;\n}\n\n.bottom_pagignation .w50 {\n  width: 50%;\n}\n\n.bottom_pagignation .w40 {\n  width: 40%;\n}\n\n.number {\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 20px;\n  letter-spacing: 0.01em;\n  color: #000000;\n  margin: 0px 4px;\n}\n\n.active_circle {\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 20px;\n  letter-spacing: 0.01em;\n  color: #fff;\n  padding: 2px 7px;\n  border-radius: 50%;\n  background: #0079FF;\n}\n\n.next {\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 20px;\n  letter-spacing: 0.01em;\n  color: #0079FF;\n}\n\n.w450 {\n  width: 450px;\n}\n\n.white {\n  background-color: #fff;\n  width: calc(100% - 227px);\n  border-top: 3px solid #Ededed;\n}\n\n.nav-item .nav-link {\n  font-weight: 600;\n  color: #405877;\n  padding-bottom: 8px;\n  cursor: pointer;\n  font-size: 13px;\n}\n\n.nav-item .nav-link.active {\n  border-bottom: 3px solid #109CF1 !important;\n  color: #109CF1 !important;\n}\n\n.nav-link {\n  display: block;\n  padding: 1.5rem 0rem;\n  margin: -1rem 1.5rem;\n  margin-left: 0rem;\n}\n\n.flex {\n  display: flex;\n}\n\n.w15 {\n  width: 15%;\n  background-color: #DFE5F0;\n  padding: 10px;\n}\n\n.list > li {\n  background-color: #fff;\n  padding: 7px 0px;\n  margin: 7px 0px;\n}\n\n.list > li > a > span {\n  text-decoration: none;\n  font-size: 10px;\n  font-weight: 500;\n  color: #334D6E;\n}\n\n.list > li img {\n  padding: 0px 10px;\n}\n\n.magnifying-glass {\n  background-image: url(\"/assets/images/assets/Vector.svg\");\n  background-repeat: no-repeat;\n  background-position: left center;\n  text-indent: 10px;\n}\n\n.space33 {\n  padding-left: 5px;\n}\n\n.item_man .table_body > div, .item_man .table_heading > div {\n  width: calc((100% - 100px) / 8);\n}\n\n.item_man .table_heading > div:last-child, .item_man .table_body > div:last-child {\n  width: 100px;\n}\n\n.item_man .table_heading > div:nth-child(5), .item_man .table_heading > div:nth-child(6), .item_man .table_heading > div:nth-child(8) {\n  line-height: 18px;\n}\n\n.dropdown1 {\n  position: relative;\n  display: inline-block;\n  line-height: 35px;\n}\n\n.dropdown-content1 {\n  display: none;\n  position: absolute;\n  background-color: #fff;\n  min-width: 200px;\n  right: 3px;\n  margin-top: 20px;\n  top: -150px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1200;\n}\n\n.dropdown-content1 a {\n  color: black;\n  text-decoration: none;\n  display: block;\n}\n\n.dropdown-content1 a:hover {\n  background-color: #ddd;\n  border-radius: 5px;\n}\n\n.dropdown1:hover .dropdown-content1 {\n  display: block;\n}\n\n.dot3 {\n  padding: 10px 0px;\n  cursor: pointer;\n}\n\n.wid100 {\n  width: 100%;\n}\n\n.wid80 {\n  width: 80%;\n}\n\n.pt10 {\n  padding-bottom: 10px;\n}\n\ninput[type=\"date\"]::-webkit-calendar-picker-indicator {\n  color: rgba(0, 0, 0, 0);\n  opacity: 1;\n  display: block;\n  background: url('cal.svg') no-repeat;\n  width: 20px;\n  height: 20px;\n  border-width: thin;\n  padding: 2px 0px;\n}\n\ninput[type=\"date\"] {\n  color: #787A7D;\n  cursor: pointer;\n}\n\ninput:focus {\n  outline: none;\n}\n\nbutton:focus {\n  outline: none;\n}\n\n.modal textarea {\n  height: 100px;\n}\n\n.alert {\n  font-weight: 400;\n  font-size: 18px;\n  line-height: 27px;\n  letter-spacing: 0.01em;\n  color: #4D5869;\n}\n\n.alert_text {\n  text-align: justify;\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 19px;\n  letter-spacing: 0.01em;\n  color: #858585;\n  margin: 0px 40px;\n  margin-top: 20px;\n}\n\n.center {\n  text-align: center;\n}\n\n.center img {\n  width: 44px;\n  height: 34px;\n}\n\n#delete1Modal .modal-dialog, #deleteitemModal .modal-dialog {\n  width: 350px;\n}\n\n@media (min-width: 576px) {\n  #delete1Modal .modal-dialog, #deleteitemModal .modal-dialog {\n    max-width: 350px;\n  }\n}\n\n#deleteModal .modal-dialog {\n  width: 350px;\n}\n\n@media (min-width: 576px) {\n  #deleteModal .modal-dialog {\n    max-width: 350px;\n  }\n}\n\n.pt101 {\n  padding-top: 30px;\n  margin: 0px 30px;\n}\n\n#itemModal .modal-dialog, #edititemModal .modal-dialog, #subbranchModal .modal-dialog, #add1Modal .modal-dialog, #addpayModal .modal-dialog, #viewpayModal .modal-dialog {\n  width: 750px;\n}\n\n@media (min-width: 576px) {\n  #itemModal .modal-dialog, #edititemModal .modal-dialog, #subbranchModal .modal-dialog, #add1Modal .modal-dialog, #addpayModal .modal-dialog, #viewpayModal .modal-dialog {\n    max-width: 750px;\n  }\n}\n\n.sec1, .sec2 {\n  width: 50%;\n}\n\n.sec1 {\n  padding-right: 10px;\n}\n\n.sec2 {\n  padding-left: 10px;\n}\n\ninput[type=\"date\"]:focus:before,\ninput[type=\"date\"]:valid:before {\n  content: \"\";\n}\n\n/* input[type=date]::-webkit-datetime-edit-text {\n      -webkit-appearance: none;\n      display: none;\n  }\n  input[type=date]::-webkit-datetime-edit-month-field{\n      -webkit-appearance: none;\n      display: none;\n  }\n  input[type=date]::-webkit-datetime-edit-day-field {\n      -webkit-appearance: none;\n      display: none;\n  }\n  input[type=date]::-webkit-datetime-edit-year-field {\n      -webkit-appearance: none;\n      display: none;\n  }*/\n\ninput[type=\"date\"]:before {\n  content: attr(placeholder) !important;\n  padding-right: 20px;\n}\n\n.allo_history .table_body > div, .allo_history .table_heading > div {\n  width: calc((100% - 50px) / 5);\n}\n\n.allo_history .table_heading > div:first-child, .allo_history .table_body > div:first-child {\n  width: 50px;\n  line-height: 4;\n}\n\n.in1 {\n  display: inline-block;\n  background: #CCFFAC;\n  border-radius: 5px;\n  width: 40px;\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 24px;\n  letter-spacing: 0.01em;\n  color: #323C47;\n  text-align: center;\n}\n\n.out {\n  display: inline-block;\n  background: #FFCF88;\n  border-radius: 5px;\n  width: 40px;\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 24px;\n  text-align: center;\n  letter-spacing: 0.01em;\n  color: #323C47;\n}\n\n#historyModal .modal-dialog, #historyModal .modal-dialog {\n  width: 650px;\n}\n\n@media (min-width: 576px) {\n  #historyModal .modal-dialog, #historyModal .modal-dialog {\n    max-width: 650px;\n  }\n}\n\n.supplier_m .table_body > div, .supplier_m .table_heading > div {\n  width: calc((100% - 200px) / 5);\n}\n\n.supplier_m .table_heading > div:last-child, .supplier_m .table_body > div:last-child {\n  width: 200px;\n}\n\n.purchase .table_body > div, .purchase .table_heading > div {\n  width: calc((100% - 100px) / 6);\n}\n\n.purchase .table_heading > div:last-child, .purchase .table_body > div:last-child {\n  width: 100px;\n}\n\ninput[type=file]::-webkit-file-upload-button {\n  border: none;\n  border-right: 2px solid #e3dadb;\n  padding: .6em .4em;\n  border-radius: .2em;\n  background-color: #fff;\n  -webkit-transition: 1s;\n  transition: 1s;\n  color: #109CF1;\n  outline: none;\n}\n\ninput[type=file] {\n  padding: 0px;\n  color: #B6B5B1;\n  cursor: pointer;\n}\n\n.div_1 {\n  border: 1px solid #D5D7DA;\n  width: 25%;\n  height: 27rem;\n  margin: 0px 10px;\n  border-radius: 5px;\n  margin-top: 20px;\n  padding: 20px;\n}\n\n.pt102 {\n  padding-bottom: 20px;\n}\n\n.textarea1 {\n  height: 100px;\n}\n\n.heading1 {\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: 0.01em;\n  color: #334D6E;\n}\n\n.div_2 {\n  width: 75%;\n  margin: 0px 10px;\n  border-radius: 5px;\n  margin-top: 20px;\n  padding: 20px;\n}\n\n.tablehead {\n  background: #DFE5F0;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n  line-height: 40px;\n  display: flex;\n}\n\n.tablehead > div {\n  text-align: center;\n  width: calc(100% / 5);\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 40px;\n  text-align: center;\n  letter-spacing: 0.01em;\n  color: #323C47;\n}\n\n.sel1 {\n  width: 252px;\n  background: #FAFAFA;\n  border: 1px solid #F0EDED;\n  border-radius: 4px;\n}\n\n.tablebody {\n  display: flex;\n  border-bottom: 1px solid #DFE5F0;\n}\n\n.tablebody > div {\n  text-align: center;\n  width: calc(100% / 5);\n  font-weight: normal;\n  font-size: 13px;\n  line-height: 60px;\n  letter-spacing: 0.01em;\n  color: #323C47;\n}\n\n.tabletotal {\n  display: flex;\n  background: #D4FFF2;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n  font-weight: 600;\n  font-size: 13px;\n  letter-spacing: 0.01em;\n  color: #323C47;\n}\n\n.tabletotal > div {\n  text-align: center;\n  line-height: 60px;\n  width: calc(100% / 5);\n}\n\n.tabletotal > div:nth-child(4) {\n  font-weight: 700;\n  font-size: 16px;\n}\n\n.created_date {\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 194px;\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 30px;\n  letter-spacing: 0.01em;\n  color: #323C47;\n  text-align: center;\n}\n\n.mr10 {\n  margin-right: 10px;\n}\n\n.flex30 {\n  display: flex;\n}\n\n.flex30 > div {\n  padding-left: 20px;\n  width: calc( 100% / 3);\n  line-height: 30px;\n  border-right: 1px solid #E5E3EE;\n}\n\n.flex30 > div:last-child {\n  border-right: none;\n}\n\n.name2 {\n  width: 34%;\n  font-weight: 600;\n  font-size: 12px;\n  letter-spacing: 0.01em;\n  color: #323C47;\n}\n\n.value2 {\n  width: 66%;\n  font-weight: 400;\n  font-size: 12px;\n  letter-spacing: 0.01em;\n  color: #323C47;\n}\n\n.flex30 > div:last-child .name2 {\n  width: 45%;\n}\n\n.flex30 > div:last-child .value2 {\n  width: 55%;\n}\n\n.item .tablehead > div, .item .tablebody > div {\n  width: calc(100% / 4);\n}\n\n.item .tabletotal {\n  border-bottom: 1px solid #DFE5F0;\n  background: #fff;\n  box-shadow: none;\n}\n\n.item .tabletotal > div {\n  width: calc(100% /4);\n}\n\n.sale .table_body > div, .sale .table_heading > div {\n  width: calc((100% - 100px) / 6);\n}\n\n.sale .table_heading > div:last-child, .sale .table_body > div:last-child {\n  width: 100px;\n}\n\n.sale .table_heading > div:nth-child(10), .sale .table_body > div:nth-child(10) {\n  line-height: 18px;\n}\n\n.div_11 {\n  border: 1px solid #D5D7DA;\n  width: 25%;\n  height: 37rem;\n  margin: 0px 10px;\n  border-radius: 5px;\n  margin-top: 20px;\n  padding: 20px;\n}\n\n.sale_add .tablehead > div {\n  width: calc(100% / 6);\n}\n\n.sale_add .tablebody > div {\n  width: calc(100% / 6);\n}\n\n.sale_add .tabletotal > div {\n  width: calc(100% / 6);\n}\n\n.sale_add .tabletotal > div:nth-child(5) {\n  font-weight: 700;\n  font-size: 16px;\n}\n\n.file_name {\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 18px;\n  letter-spacing: 0.01em;\n  color: #109CF1;\n}\n\n.history .table_body > div, .history .table_heading > div {\n  width: calc((100% - 50px) / 5);\n}\n\n.history .table_heading > div:first-child, .history .table_body > div:first-child {\n  width: 50px;\n}\n\n.nav-item .nav-link {\n  font-weight: 600;\n  color: #405877;\n  padding-bottom: 8px;\n  padding-top: 10px;\n  cursor: pointer;\n  font-size: 13px;\n  float: left;\n  background: none;\n}\n\n.nav-item .active {\n  border-bottom: 3px solid #109cf1 !important;\n  color: #109cf1 !important;\n}\n\n.modal {\n  width: 100%;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n}\n\n.right {\n  float: left;\n  margin: 5px;\n}\n\n.modal-dialog {\n  margin: 0 auto;\n  top: 10%;\n}\n\n.modal-header:before {\n  display: none;\n}\n\n.modal-title {\n  color: #2B2626;\n  font-weight: 600;\n  font-size: 13px;\n  font-family: 'Open Sans', sans-serif;\n  margin-bottom: 0px;\n}\n\n.errormsg {\n  height: 10px;\n}\n\n.help-block {\n  color: red;\n  margin-bottom: 0%;\n  padding-left: 2px;\n}\n\n.cancel {\n  background-color: white;\n  color: #109CF1;\n  padding: 0px 20px;\n  font-size: 12px;\n  border: solid 2px #109CF1;\n  border-radius: 5px;\n  font-weight: 500;\n  height: 35px;\n  margin-right: 15px;\n}\n\n.align {\n  text-align: center;\n}\n\n.multiselect {\n  width: 330px;\n  height: 35px;\n  left: 30px;\n  top: 63px;\n  background: #FFFFFF;\n  box-sizing: border-box;\n  border-radius: 4px;\n  margin-top: 20px;\n}\n\n#deletesModal .modal-dialog {\n  width: 350px;\n}\n\n@media (min-width: 576px) {\n  #deletesModal .modal-dialog {\n    max-width: 350px;\n  }\n}\n\n.center {\n  text-align: center;\n}\n\n.deleteImg, li {\n  float: left;\n  margin: 3px;\n}\n\n.p_title {\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 15px;\n  letter-spacing: 0.01em;\n  color: #323C47;\n  margin-bottom: 5px;\n}\n\n.has-error .control-label {\n  color: black;\n}\n\n.help-block {\n  color: red;\n  margin-bottom: 0%;\n}\n\n.text-danger {\n  color: red;\n  padding-left: 2px;\n}\n\n.scrollable {\n  max-height: 70vh;\n  overflow-y: auto;\n}\n\n.dropdown-content1 {\n  display: none;\n  position: absolute;\n  background-color: #fff;\n  min-width: 200px;\n  right: 3px;\n  margin-top: 20px;\n  top: -100px;\n  text-align: left;\n  border-radius: 10px;\n}\n\n.dropdown-content1 a {\n  padding-left: 8px;\n}\n\n.ser {\n  margin: 10px 0px;\n}\n\n.illustration-container {\n  display: block;\n}\n\n.illustration-container .illustration-img {\n  width: 40%;\n  margin-left: 25%;\n}\n\n.div_1 {\n  height: 32rem  !important;\n}\n\n.tbl-history {\n  text-align: left;\n  font-weight: 500;\n  font-size: 12px;\n  color: #323C47;\n  margin: auto;\n  line-height: 4px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbnZlbnRvcnktbW9kdWxlL2ludmVudG9yeS1tb2R1bGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaW52ZW50b3J5LW1vZHVsZS9wdXJjaGFzZS1pdGVtL3B1cmNoYXNlLWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXO0FDQ2Y7O0FERUU7RUFDRSxvQ0FBb0M7QUNDeEM7O0FEQ0U7RUFDRSxhQUFhO0FDRWpCOztBREFFO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixlQUFlO0FDR25COztBRERFO0VBQ0Usc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLHlCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixlQUFlO0FDSW5COztBREZHO0VBQ0MsaUJBQWlCO0VBRWpCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztBQ0lsQjs7QURGRTtFQUNFLGlCQUFpQjtFQUVqQixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2QsWUFBVztBQ0lqQjs7QURERztFQUNJLGFBQWE7QUNJcEI7O0FERkU7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixrQkFBa0I7QUNLdEI7O0FESEU7RUFDRSxhQUFhO0FDTWpCOztBREpFO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtBQ09sQzs7QURMRTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7QUNRcEI7O0FETkU7RUFDSSwrQ0FBNEM7RUFDNUMsdURBQW9EO0VBQ3BE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QWU7RUFDZixpQkFBaUI7RUFDakIsc0JBQXNCO0VBRXRCLGNBQWE7RUFDYixrQkFBaUI7QUMrRnJCOztBRDdGSTtFQUNFLFlBQVk7QUNnR2xCOztBRDlGTTtFQUNBLFVBQVU7RUFDVixpQkFBaUI7QUNpR3ZCOztBRDlGTTtFQUNFLFVBQVU7RUFDVixpQkFBZ0I7QUNpR3hCOztBRC9GSTtFQUNFLGdCQUFnQjtFQUNkLGdCQUFnQjtBQ2tHeEI7O0FEaEdJO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsV0FBVztFQUVYLGdCQUFnQjtFQUNoQixtQkFBbUI7QUNrR3pCOztBRDVHSTtFQVlGLGlCQUFpQjtBQ29HbkI7O0FEakdNO0VBQ0UsZ0JBQWU7QUNvR3ZCOztBRGxHTTtFQUNFLGNBQWM7QUNxR3RCOztBRHRHTTtFQUdJLFVBQVU7RUFDVixnQkFBZ0I7QUN1RzFCOztBQTU2QkE7RUFDQSx5QkFBd0I7QUErNkJ4Qjs7QUE3NkJBO0VBQ0ksZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsY0FBYztFQUNkLFlBQVk7RUFDWixnQkFBZ0I7QUFnN0JwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW52ZW50b3J5LW1vZHVsZS9wdXJjaGFzZS1pdGVtL3B1cmNoYXNlLWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xuICAgIG1hcmdpbjogMHB4O1xuICAgIFxuICB9XG4gIGJvZHl7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICB9XG4gIC5mbGV4e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbiAgLmJsdWVfYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTA5Q0YxO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAwcHggMjBweDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAud2hpdGVfYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGNvbG9yOiAjMTA5Q0YxO1xuICAgIHBhZGRpbmc6IDBweCAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBib3JkZXI6MXB4IHNvbGlkICMxMDlDRjE7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gICAuc2VsZWN0e1xuICAgIHBhZGRpbmc6IDdweCAyMHB4O1xuICAgLy8gcGFkZGluZzogN3B4IDJweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAjNzg3QTdEO1xuICB9XG4gIC5pbnB1dHtcbiAgICBwYWRkaW5nOiA3cHggMjBweDtcbiAgICBcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgaGVpZ2h0OjM1cHg7XG4gICAgfVxuXG4gICBpbnB1dDpmb2N1cywgc2VsZWN0OmZvY3VzLGJ1dHRvbjpmb2N1c3tcbiAgICAgICBvdXRsaW5lOiBub25lO1xuICAgfVxuICAucGFnZV9oZWFkaW5nPnB7XG4gICAgY29sb3I6ICMzMzRENkU7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICB9XG4gIC5mbGV4e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbiAgLmRpc3BsYXl7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cbiAgLnc5OHtcbiAgICB3aWR0aDogOTglO1xuICAgIG1hcmdpbjogMHB4IGF1dG87XG4gIH1cbiAgLmhlYWRfcGFkZGluZ3tcbiAgICAgIGJveC1zaGFkb3c6IDBweCA3cHggNXB4IC0zcHggcmdiYSgwLDAsMCwwLjEpO1xuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggN3B4IDVweCAtM3B4IHJnYmEoMCwwLDAsMC4xKTtcbiAgICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDdweCA1cHggLTNweCByZ2JhKDAsMCwwLDAuMSk7XG4gICAgcGFkZGluZzogMTVweCAwcHg7XG4gIH1cbiAgLnBhZ2VoZWFkaW5nc3BhY2V7XG4gICAgbWFyZ2luLWJvdHRvbTogN3B4O1xuICB9XG4gIC50YWJsZV9oZWFkaW5ne1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNERkU1RjA7XG4gICAvKiBwYWRkaW5nOiAxMHB4IDBweDsqL1xuICAgIC8vbWFyZ2luOiAxMHB4IDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICBcbiAgfVxuICBcbiAgLnRhYmxlX2hlYWRpbmc+ZGl2e1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogIzMyM0M0NztcbiAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuICBcbiAgLnRhYmxlX2JvZHl7XG4gICAgIHdpZHRoOiAxMDAlO1xuICAgIC8vbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBsaW5lLWhlaWdodDogMThweDtcbiAgfVxuICAudGFibGVfYm9keT5kaXZ7XG4gICAgXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogIzMyM0M0NztcbiAgIC8qIHBhZGRpbmc6IDVweCAwcHg7Ki9cbiAgICAgbWFyZ2luOiBhdXRvO1xuICAgICBsaW5lLWhlaWdodDogMThweDtcbiAgXG4gIH1cbiAgXG4gIC5tcjEwe1xuICBtYXJnaW4tcmlnaHQ6MTBweDtcbiAgfVxuICAudzI0MHtcbiAgIHdpZHRoOiAyNDBweDtcbiAgfVxuICBcbiAgLml0ZW1fY2F0IC50YWJsZV9ib2R5PmRpdiwuaXRlbV9jYXQgLnRhYmxlX2hlYWRpbmc+ZGl2e1xuICAgIHdpZHRoOiBjYWxjKCgxMDAlIC0gMjUwcHgpIC8gMik7XG4gIH1cbiAgLml0ZW1fY2F0IC50YWJsZV9oZWFkaW5nPmRpdjpmaXJzdC1jaGlsZCwuaXRlbV9jYXQgLnRhYmxlX2JvZHk+ZGl2OmZpcnN0LWNoaWxke1xuICAgIHdpZHRoOiA1MHB4O1xuICB9XG4gIC5pdGVtX2NhdCAudGFibGVfaGVhZGluZz5kaXY6bGFzdC1jaGlsZCwuaXRlbV9jYXQgLnRhYmxlX2JvZHk+ZGl2Omxhc3QtY2hpbGR7XG4gICAgd2lkdGg6IDIwMHB4O1xuICB9XG4gIC5ncm91cDE4e1xuICAgIHdpZHRoOiAxOHB4O1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuICAucHQxNXtcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICB9XG4gIC5ib3R0b21fcGFnaWduYXRpb257XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMHB4O1xuICAgIHotaW5kZXg6IDEwMDtcbiAgfVxuICAuYm90dG9tX3BhZ2lnbmF0aW9uIHB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIH1cbiAgLmJvdHRvbV9wYWdpZ25hdGlvbiBzZWxlY3R7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogIzAwNzlGRjtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gIH1cbiAgLmJvdHRvbV9wYWdpZ25hdGlvbiAudzIwe1xuICAgIHdpZHRoOiAyMCU7XG4gIH1cbiAgLmJvdHRvbV9wYWdpZ25hdGlvbiAudzEwe1xuICAgIHdpZHRoOiAxMCU7XG4gIH1cbiAgLmJvdHRvbV9wYWdpZ25hdGlvbiAudzUwe1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbiAgLmJvdHRvbV9wYWdpZ25hdGlvbiAudzQwe1xuICAgIHdpZHRoOiA0MCU7XG4gIH1cbiAgLm51bWJlcntcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBtYXJnaW46MHB4IDRweDtcbiAgfVxuICAuYWN0aXZlX2NpcmNsZXtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzoycHggN3B4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICMwMDc5RkY7XG4gIH1cbiAgLm5leHR7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgY29sb3I6ICMwMDc5RkY7XG4gIFxuICB9XG4gIC53NDUwe1xuICAgIHdpZHRoOiA0NTBweDtcbiAgfVxuICAud2hpdGV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMjI3cHgpO1xuICAgIGJvcmRlci10b3A6IDNweCBzb2xpZCAjRWRlZGVkO1xuICB9XG4gIC5uYXYtaXRlbSAubmF2LWxpbmt7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY29sb3I6ICM0MDU4Nzc7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgZm9udC1zaXplOiAxM3B4XG4gIH1cbiAgXG4gIC5uYXYtaXRlbSAubmF2LWxpbmsuYWN0aXZlIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICMxMDlDRjEgIWltcG9ydGFudDtcbiAgICAgIGNvbG9yOiAjMTA5Q0YxICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm5hdi1saW5rIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgcGFkZGluZzogMS41cmVtIDByZW07XG4gICAgICBtYXJnaW46IC0xcmVtIDEuNXJlbTtcbiAgICAgIG1hcmdpbi1sZWZ0OiAwcmVtO1xuICB9XG4gIC5mbGV4e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbiAgLncxNXtcbiAgICB3aWR0aDogMTUlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNERkU1RjA7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxuICAubGlzdD5saXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDdweCAwcHg7XG4gICAgbWFyZ2luOiA3cHggMHB4O1xuICB9XG4gIC5saXN0PmxpPmE+c3BhbntcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogIzMzNEQ2RTtcbiAgfVxuICAubGlzdD5saSBpbWd7XG4gIHBhZGRpbmc6IDBweCAxMHB4O1xuICB9IFxuICAubWFnbmlmeWluZy1nbGFzc3tcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2Fzc2V0cy9WZWN0b3Iuc3ZnJyk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOmxlZnQgY2VudGVyO1xuICAgIHRleHQtaW5kZW50OiAxMHB4O1xuICB9XG4gIC5zcGFjZTMze1xuICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICB9XG4gIC5pdGVtX21hbiAudGFibGVfYm9keT5kaXYsLml0ZW1fbWFuIC50YWJsZV9oZWFkaW5nPmRpdntcbiAgICB3aWR0aDogY2FsYygoMTAwJSAtIDEwMHB4KSAvIDgpO1xuICB9XG4gIFxuICAuaXRlbV9tYW4gLnRhYmxlX2hlYWRpbmc+ZGl2Omxhc3QtY2hpbGQsLml0ZW1fbWFuIC50YWJsZV9ib2R5PmRpdjpsYXN0LWNoaWxke1xuICAgIHdpZHRoOiAxMDBweDtcbiAgfVxuICAuaXRlbV9tYW4gLnRhYmxlX2hlYWRpbmc+ZGl2Om50aC1jaGlsZCg1KSwuaXRlbV9tYW4gLnRhYmxlX2hlYWRpbmc+ZGl2Om50aC1jaGlsZCg2KSwuaXRlbV9tYW4gLnRhYmxlX2hlYWRpbmc+ZGl2Om50aC1jaGlsZCg4KXtcbiAgICBsaW5lLWhlaWdodDogMThweDt9XG4gIFxuICAuZHJvcGRvd24xIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICB9XG4gIFxuICAuZHJvcGRvd24tY29udGVudDEge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgbWluLXdpZHRoOjIwMHB4O1xuICAgIHJpZ2h0OjNweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIHRvcDogLTE1MHB4O1xuICAgIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLDAsMCwwLjIpO1xuICAgIHotaW5kZXg6IDEyMDA7XG4gIH1cbiAgXG4gIC5kcm9wZG93bi1jb250ZW50MSBhIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIFxuICAuZHJvcGRvd24tY29udGVudDEgYTpob3ZlciB7YmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O31cbiAgXG4gIC5kcm9wZG93bjE6aG92ZXIgLmRyb3Bkb3duLWNvbnRlbnQxIHtkaXNwbGF5OiBibG9jazt9XG4gIC5kb3Qze1xuICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIC53aWQxMDB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLndpZDgwe1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbiAgXG4gIC5wdDEwe1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICB9XG4gIGlucHV0W3R5cGU9XCJkYXRlXCJdOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xuICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZzEvY2FsLnN2Zykgbm8tcmVwZWF0O1xuICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICBib3JkZXItd2lkdGg6IHRoaW47XG4gICAgICBwYWRkaW5nOiAycHggMHB4O1xuICB9XG4gIGlucHV0W3R5cGU9XCJkYXRlXCJde1xuICAgIGNvbG9yOiAjNzg3QTdEO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICBpbnB1dDpmb2N1c3tcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG4gIGJ1dHRvbjpmb2N1c3tcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG4gIC5tb2RhbCB0ZXh0YXJlYXtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICB9XG4gIC5hbGVydHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBsaW5lLWhlaWdodDogMjdweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICAgIGNvbG9yOiAjNEQ1ODY5O1xuICB9XG4gIC5hbGVydF90ZXh0e1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgICBjb2xvcjogIzg1ODU4NTtcbiAgICBtYXJnaW46IDBweCA0MHB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gIFxuICB9XG4gIC5jZW50ZXJ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5jZW50ZXIgaW1ne1xuICAgIHdpZHRoOiA0NHB4O1xuICBoZWlnaHQ6IDM0cHg7XG4gIH1cblxuICBcbiAgI2RlbGV0ZTFNb2RhbCAubW9kYWwtZGlhbG9nLCNkZWxldGVpdGVtTW9kYWwgLm1vZGFsLWRpYWxvZyB7XG4gICAgICB3aWR0aDogMzUwcHg7XG4gIH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KXtcbiAgI2RlbGV0ZTFNb2RhbCAubW9kYWwtZGlhbG9nLCNkZWxldGVpdGVtTW9kYWwgLm1vZGFsLWRpYWxvZyAge1xuICAgICAgbWF4LXdpZHRoOjM1MHB4O1xuICB9XG4gIH1cbiAgI2RlbGV0ZU1vZGFsIC5tb2RhbC1kaWFsb2cge1xuICAgICAgd2lkdGg6IDM1MHB4O1xuICB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiA1NzZweCl7XG4gICAjZGVsZXRlTW9kYWwgLm1vZGFsLWRpYWxvZyB7XG4gICAgICBtYXgtd2lkdGg6MzUwcHg7XG4gIH1cbiAgfVxuICAucHQxMDF7XG4gICAgcGFkZGluZy10b3A6IDMwcHg7XG4gICAgbWFyZ2luOiAwcHggMzBweDtcbiAgfVxuICAjaXRlbU1vZGFsIC5tb2RhbC1kaWFsb2csI2VkaXRpdGVtTW9kYWwgLm1vZGFsLWRpYWxvZywjc3ViYnJhbmNoTW9kYWwgLm1vZGFsLWRpYWxvZywjYWRkMU1vZGFsIC5tb2RhbC1kaWFsb2csI2FkZHBheU1vZGFsIC5tb2RhbC1kaWFsb2csI3ZpZXdwYXlNb2RhbCAubW9kYWwtZGlhbG9nIHtcbiAgICAgIHdpZHRoOiA3NTBweDtcbiAgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpe1xuICAgI2l0ZW1Nb2RhbCAubW9kYWwtZGlhbG9nLCNlZGl0aXRlbU1vZGFsIC5tb2RhbC1kaWFsb2csI3N1YmJyYW5jaE1vZGFsIC5tb2RhbC1kaWFsb2csI2FkZDFNb2RhbCAubW9kYWwtZGlhbG9nLCNhZGRwYXlNb2RhbCAubW9kYWwtZGlhbG9nLCN2aWV3cGF5TW9kYWwgLm1vZGFsLWRpYWxvZyB7XG4gICAgICBtYXgtd2lkdGg6NzUwcHg7XG4gIH1cbiAgfVxuICAuc2VjMSwuc2VjMntcbiAgICB3aWR0aDogNTAlO1xuICB9XG4gIC5zZWMxe1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIH1cbiAgLnNlYzJ7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB9XG4gIGlucHV0W3R5cGU9XCJkYXRlXCJdOmZvY3VzOmJlZm9yZSxcbiAgICBpbnB1dFt0eXBlPVwiZGF0ZVwiXTp2YWxpZDpiZWZvcmUge1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICB9XG4gIFxuICAgLyogaW5wdXRbdHlwZT1kYXRlXTo6LXdlYmtpdC1kYXRldGltZS1lZGl0LXRleHQge1xuICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICBpbnB1dFt0eXBlPWRhdGVdOjotd2Via2l0LWRhdGV0aW1lLWVkaXQtbW9udGgtZmllbGR7XG4gICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIGlucHV0W3R5cGU9ZGF0ZV06Oi13ZWJraXQtZGF0ZXRpbWUtZWRpdC1kYXktZmllbGQge1xuICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICBpbnB1dFt0eXBlPWRhdGVdOjotd2Via2l0LWRhdGV0aW1lLWVkaXQteWVhci1maWVsZCB7XG4gICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICB9Ki9cbiAgXG4gICBpbnB1dFt0eXBlPVwiZGF0ZVwiXTpiZWZvcmUge1xuICAgICAgY29udGVudDogYXR0cihwbGFjZWhvbGRlcikgIWltcG9ydGFudDtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgfVxuICAgIC5hbGxvX2hpc3RvcnkgLnRhYmxlX2JvZHk+ZGl2LC5hbGxvX2hpc3RvcnkgLnRhYmxlX2hlYWRpbmc+ZGl2e1xuICAgIHdpZHRoOiBjYWxjKCgxMDAlIC0gNTBweCkgLyA1KTtcbiAgfVxuICAuYWxsb19oaXN0b3J5IC50YWJsZV9oZWFkaW5nPmRpdjpmaXJzdC1jaGlsZCwuYWxsb19oaXN0b3J5IC50YWJsZV9ib2R5PmRpdjpmaXJzdC1jaGlsZHtcbiAgICB3aWR0aDogNTBweDtcbiAgICBsaW5lLWhlaWdodDogNDtcbiAgfVxuICAuaW4xe1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBiYWNrZ3JvdW5kOiAjQ0NGRkFDO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB3aWR0aDogNDBweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICAgIGNvbG9yOiAjMzIzQzQ3O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAub3V0e1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBiYWNrZ3JvdW5kOiAjRkZDRjg4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB3aWR0aDogNDBweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgICBjb2xvcjogIzMyM0M0NztcbiAgfVxuICAjaGlzdG9yeU1vZGFsIC5tb2RhbC1kaWFsb2csI2hpc3RvcnlNb2RhbCAubW9kYWwtZGlhbG9nIHtcbiAgICAgIHdpZHRoOiA2NTBweDtcbiAgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpe1xuICAgI2hpc3RvcnlNb2RhbCAubW9kYWwtZGlhbG9nLCNoaXN0b3J5TW9kYWwgLm1vZGFsLWRpYWxvZyB7XG4gICAgICBtYXgtd2lkdGg6NjUwcHg7XG4gIH1cbiAgfVxuICAgIC5zdXBwbGllcl9tIC50YWJsZV9ib2R5PmRpdiwuc3VwcGxpZXJfbSAudGFibGVfaGVhZGluZz5kaXZ7XG4gICAgd2lkdGg6IGNhbGMoKDEwMCUgLSAyMDBweCkgLyA1KTtcbiAgfVxuICAuc3VwcGxpZXJfbSAudGFibGVfaGVhZGluZz5kaXY6bGFzdC1jaGlsZCwuc3VwcGxpZXJfbSAudGFibGVfYm9keT5kaXY6bGFzdC1jaGlsZHtcbiAgICB3aWR0aDogMjAwcHg7XG4gIH1cbiAgICAucHVyY2hhc2UgLnRhYmxlX2JvZHk+ZGl2LC5wdXJjaGFzZSAudGFibGVfaGVhZGluZz5kaXZ7XG4gICAgd2lkdGg6IGNhbGMoKDEwMCUgLSAxMDBweCkgLyA2KTtcbiAgfVxuICAucHVyY2hhc2UgLnRhYmxlX2hlYWRpbmc+ZGl2Omxhc3QtY2hpbGQsLnB1cmNoYXNlIC50YWJsZV9ib2R5PmRpdjpsYXN0LWNoaWxke1xuICAgIHdpZHRoOiAxMDBweDtcbiAgfVxuICBpbnB1dFt0eXBlPWZpbGVdOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICNlM2RhZGI7XG4gICAgcGFkZGluZzogLjZlbSAuNGVtO1xuICAgIGJvcmRlci1yYWRpdXM6IC4yZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICB0cmFuc2l0aW9uOiAxcztcbiAgICBjb2xvcjogIzEwOUNGMTtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG4gIFxuICBpbnB1dFt0eXBlPWZpbGVdIHtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgIGNvbG9yOiAjQjZCNUIxO1xuICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgLmRpdl8xe1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNENUQ3REE7XG4gICAgd2lkdGg6IDI1JTtcbiAgICBoZWlnaHQ6IDI3cmVtO1xuICAgIG1hcmdpbjogMHB4IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgfVxuICAucHQxMDJ7XG4gICAgcGFkZGluZy1ib3R0b206MjBweDtcbiAgfVxuICAudGV4dGFyZWExe1xuICAgIGhlaWdodDogMTAwcHg7XG4gIH1cbiAgLmhlYWRpbmcxe1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gICAgY29sb3I6ICMzMzRENkU7XG4gIH1cbiAgXG4gIC5kaXZfMntcbiAgICB3aWR0aDogNzUlO1xuICAgIG1hcmdpbjogMHB4IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgfVxuICAudGFibGVoZWFke1xuICAgIGJhY2tncm91bmQ6ICNERkU1RjA7XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG4gIC50YWJsZWhlYWQ+ZGl2e1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gNSk7XG4gICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gIGNvbG9yOiAjMzIzQzQ3O1xuICB9XG4gIC5zZWwxe1xuICAgIHdpZHRoOiAyNTJweDtcbiAgICBiYWNrZ3JvdW5kOiAjRkFGQUZBO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNGMEVERUQ7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB9XG4gIC50YWJsZWJvZHl7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjREZFNUYwO1xuICB9XG4gIC50YWJsZWJvZHk+ZGl2e1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gNSk7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbGluZS1oZWlnaHQ6IDYwcHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgICBjb2xvcjogIzMyM0M0NztcbiAgfVxuICAudGFibGV0b3RhbHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJhY2tncm91bmQ6ICNENEZGRjI7XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICAgIGNvbG9yOiAjMzIzQzQ3O1xuICB9XG4gIC50YWJsZXRvdGFsPmRpdntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IDYwcHg7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAvIDUpO1xuICB9XG4gIC50YWJsZXRvdGFsPmRpdjpudGgtY2hpbGQoNCl7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG4gIC5jcmVhdGVkX2RhdGV7XG4gICAvLyBiYWNrZ3JvdW5kOnVybCguLi8uLi8uLi9hc3NldHMvaW1nMS90ZWFsX3JlYy5zdmcpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICB3aWR0aDogMTk0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgICBjb2xvcjogIzMyM0M0NztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIFxuICB9XG4gIC5tcjEwe1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG4gIC5mbGV4MzB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBcbiAgICBcbiAgfVxuICAuZmxleDMwPmRpdntcbiAgICBwYWRkaW5nLWxlZnQ6MjBweDtcbiAgICB3aWR0aDogY2FsYyggMTAwJSAvIDMpO1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNFNUUzRUU7XG4gIH1cbiAgLmZsZXgzMD5kaXY6bGFzdC1jaGlsZHtcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gIH1cbiAgLm5hbWUye1xuICAgIHdpZHRoOiAzNCU7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgICBjb2xvcjogIzMyM0M0NztcbiAgXG4gIH1cbiAgLnZhbHVlMntcbiAgICB3aWR0aDogNjYlO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgXG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gIGNvbG9yOiAgIzMyM0M0NztcbiAgXG4gIH1cbiBcbiAgLmZsZXgzMD5kaXY6bGFzdC1jaGlsZCAubmFtZTJ7XG4gICAgd2lkdGg6IDQ1JTtcbiAgfVxuICAuZmxleDMwPmRpdjpsYXN0LWNoaWxkIC52YWx1ZTJ7XG4gICAgd2lkdGg6IDU1JTtcbiAgfVxuICAuaXRlbSAudGFibGVoZWFkPmRpdiwuaXRlbSAudGFibGVib2R5PmRpdntcbiAgXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAvIDQpO1xuICB9XG4gIC5pdGVtIC50YWJsZXRvdGFse1xuICAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjREZFNUYwO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm94LXNoYWRvdzpub25lO1xuICBcbiAgfVxuICAuaXRlbSAudGFibGV0b3RhbD5kaXZ7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAvNCk7XG4gIH1cbiAgICAuc2FsZSAudGFibGVfYm9keT5kaXYsLnNhbGUgLnRhYmxlX2hlYWRpbmc+ZGl2e1xuICAgIHdpZHRoOiBjYWxjKCgxMDAlIC0gMTAwcHgpIC8gNik7XG4gIH1cbiAgLnNhbGUgLnRhYmxlX2hlYWRpbmc+ZGl2Omxhc3QtY2hpbGQsLnNhbGUgLnRhYmxlX2JvZHk+ZGl2Omxhc3QtY2hpbGR7XG4gICAgd2lkdGg6IDEwMHB4O1xuICB9XG4gIC5zYWxlIC50YWJsZV9oZWFkaW5nPmRpdjpudGgtY2hpbGQoMTApLC5zYWxlIC50YWJsZV9ib2R5PmRpdjpudGgtY2hpbGQoMTApe1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICB9XG4gIC5kaXZfMTF7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0Q1RDdEQTtcbiAgICB3aWR0aDogMjUlO1xuICAgIGhlaWdodDogMzdyZW07XG4gICAgbWFyZ2luOiAwcHggMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICB9XG4gIFxuICAuc2FsZV9hZGQgLnRhYmxlaGVhZD5kaXZ7XG4gIFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyA2KTtcbiAgXG4gIH1cbiAgXG4gIC5zYWxlX2FkZCAudGFibGVib2R5PmRpdntcbiAgXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAvIDYpO1xuICBcbiAgfVxuICBcbiAgLnNhbGVfYWRkIC50YWJsZXRvdGFsPmRpdntcbiAgXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAvIDYpO1xuICB9XG4gIC5zYWxlX2FkZCAudGFibGV0b3RhbD5kaXY6bnRoLWNoaWxkKDUpe1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuICAuZmlsZV9uYW1le1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gICAgY29sb3I6ICMxMDlDRjE7XG4gIFxuICB9XG4gICAgLmhpc3RvcnkgLnRhYmxlX2JvZHk+ZGl2LC5oaXN0b3J5IC50YWJsZV9oZWFkaW5nPmRpdntcbiAgICB3aWR0aDogY2FsYygoMTAwJSAtIDUwcHgpIC8gNSk7XG4gIH1cbiAgLmhpc3RvcnkgLnRhYmxlX2hlYWRpbmc+ZGl2OmZpcnN0LWNoaWxkLC5oaXN0b3J5IC50YWJsZV9ib2R5PmRpdjpmaXJzdC1jaGlsZHtcbiAgICB3aWR0aDogNTBweDtcbiAgfVxuICAubmF2LWl0ZW0ge1xuICAgIC5uYXYtbGluayB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGNvbG9yOiAjNDA1ODc3O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIH1cbiAgICAuYWN0aXZlIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICMxMDljZjEgIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6ICMxMDljZjEgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbiAgLm1vZGFsIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICBcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgfVxuICAgICAgIC5yaWdodHtcbiAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgfVxuICAgLm1vZGFsLWRpYWxvZyB7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICB0b3A6MTAlO1xuICAgIH1cbiAgICAubW9kYWwtaGVhZGVyOmJlZm9yZXtcbiAgICAgIGRpc3BsYXk6bm9uZTtcbiAgICB9XG4gICAgLm1vZGFsLXRpdGxlIHtcbiAgICAgIGNvbG9yOiAjMkIyNjI2O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgfVxuICAuZXJyb3Jtc2d7XG4gICAgaGVpZ2h0OjEwcHg7XG4gIH1cbiAgLmhlbHAtYmxvY2t7XG4gICAgY29sb3I6IHJlZDtcbiAgICBtYXJnaW4tYm90dG9tOiAwJTtcbiAgICAvL3RleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nLWxlZnQ6IDJweDtcbiAgICB9XG4gICAgLmNhbmNlbHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICBjb2xvcjogIzEwOUNGMTtcbiAgICAgICAgcGFkZGluZzogMHB4IDIwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAycHggIzEwOUNGMTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICB9XG4gICAgLmFsaWdue1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICAubXVsdGlzZWxlY3R7XG4gICAgICB3aWR0aDogMzMwcHg7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIGxlZnQ6IDMwcHg7XG4gICAgdG9wOiA2M3B4O1xuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgbWFyZ2luLXRvcDoyMHB4O1xuICAgIH1cbiAgICAjZGVsZXRlc01vZGFsIC5tb2RhbC1kaWFsb2cge1xuICAgICAgd2lkdGg6IDM1MHB4O1xuICB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiA1NzZweCl7XG4gICNkZWxldGVzTW9kYWwgLm1vZGFsLWRpYWxvZyB7XG4gICAgICBtYXgtd2lkdGg6MzUwcHg7XG4gIH1cbiAgfVxuICAuY2VudGVye1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gXG4gIC5kZWxldGVJbWcsbGl7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luOjNweDtcbiAgfVxuICAucF90aXRsZXtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBsaW5lLWhlaWdodDogMTVweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICAgIC8vY29sb3I6ICMyQjI2MjY7XG4gICAgY29sb3I6IzMyM0M0NztcbiAgICBtYXJnaW4tYm90dG9tOjVweDtcbiAgICB9XG4gICAgLmhhcy1lcnJvciAuY29udHJvbC1sYWJlbHtcbiAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgIH1cbiAgICAgIC5oZWxwLWJsb2Nre1xuICAgICAgY29sb3I6IHJlZDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDAlO1xuICAgICAgXG4gICAgICB9XG4gICAgICAudGV4dC1kYW5nZXJ7XG4gICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgIHBhZGRpbmctbGVmdDoycHg7XG4gICAgICB9XG4gICAgLnNjcm9sbGFibGV7XG4gICAgICBtYXgtaGVpZ2h0OiA3MHZoO1xuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIH1cbiAgICAuZHJvcGRvd24tY29udGVudDF7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgIG1pbi13aWR0aDogMjAwcHg7XG4gICAgICByaWdodDogM3B4O1xuICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgIHRvcDogLTEwMHB4O1xuICAgICAgLy90b3A6LTExcHg7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgYXtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7O1xuICAgICB9XG4gICAgICB9XG4gICAgICAuc2Vye1xuICAgICAgICBtYXJnaW46MTBweCAwcHg7XG4gICAgICB9XG4gICAgICAuaWxsdXN0cmF0aW9uLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAuaWxsdXN0cmF0aW9uLWltZyB7XG4gICAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMjUlO1xuICAgICAgICB9XG4gICAgICB9IFxuICAgICIsIkBpbXBvcnQgXCIuLi9pbnZlbnRvcnktbW9kdWxlLmNvbXBvbmVudC5zY3NzXCI7XG4uZGl2XzF7XG5oZWlnaHQ6MzJyZW0gICFpbXBvcnRhbnQ7XG59XG4udGJsLWhpc3Rvcnl7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogIzMyM0M0NztcbiAgICBtYXJnaW46IGF1dG87XG4gICAgbGluZS1oZWlnaHQ6IDRweDtcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/components/inventory-module/purchase-item/purchase-item.component.ts":
    /*!**************************************************************************************!*\
      !*** ./src/app/components/inventory-module/purchase-item/purchase-item.component.ts ***!
      \**************************************************************************************/

    /*! exports provided: PurchaseItemComponent */

    /***/
    function srcAppComponentsInventoryModulePurchaseItemPurchaseItemComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PurchaseItemComponent", function () {
        return PurchaseItemComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _services_export_to_pdf_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../services/export-to-pdf.service */
      "./src/app/services/export-to-pdf.service.ts");
      /* harmony import */


      var _services_excel_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../services/excel.service */
      "./src/app/services/excel.service.ts");
      /* harmony import */


      var _services_message_show_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../services/message-show.service */
      "./src/app/services/message-show.service.ts");
      /* harmony import */


      var _services_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../services/http.service */
      "./src/app/services/http.service.ts");
      /* harmony import */


      var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../services/authenticator.service */
      "./src/app/services/authenticator.service.ts");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! moment */
      "./node_modules/moment/moment.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

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

      var PurchaseItemComponent =
      /** @class */
      function () {
        var PurchaseItemComponent = /*#__PURE__*/function () {
          function PurchaseItemComponent(httpService, auth, msgService, _pdfService, excelService, router) {
            _classCallCheck(this, PurchaseItemComponent);

            this.httpService = httpService;
            this.auth = auth;
            this.msgService = msgService;
            this._pdfService = _pdfService;
            this.excelService = excelService;
            this.router = router;
            this.purchaseAllData = [];
            this.paid = 1;
            this.sizeArr = [25, 50, 100, 150, 200, 500, 1000];
            this.pageIndex = 1;
            this.totalRecords = 0;
            this.displayBatchSize = 25;
            this.staticPageData = [];
            this.staticPageDataSouece = [];
            this.tempLocationList = [];
            this.assignDataforDownload = [];
            this.model = {
              purchase_id: 0,
              supplier_id: '',
              purchase_date: '',
              purchase_description: '',
              institute_id: sessionStorage.getItem('institute_id'),
              total_amount: 100,
              total_paid_amount: 0,
              is_refunded: false,
              purchased_item_list: []
            };
            this.paymentModel = {
              purchase_id: 0,
              purchased_by_user_id: 0,
              paid_amount: '',
              payment_date: '',
              reference_no: '',
              payment_method: '',
              institute_id: sessionStorage.getItem('institute_id')
            };
            this.isDelete = true;
            this.total = 100;
            this.paids = 200;
            this.paymentHistoryData = [];
            this.viewdatas = []; //download in excel format

            this.headerSetting = [{
              primary_key: 'reference_number',
              value: "Reference No."
            }, {
              primary_key: 'supplier_company_name',
              value: "Supplier"
            }, {
              primary_key: 'purchase_date',
              value: "Date"
            }, // {
            //   primary_key: 'bill_image_url',
            //   value: "File",
            // },
            {
              primary_key: 'total_amount',
              value: "Grand Total"
            }, {
              primary_key: 'total_paid_amount',
              value: "Paid"
            }, {
              primary_key: 'balanced_amount',
              value: "Balance"
            }];
            this.institution_id = sessionStorage.getItem('institution_id');
          }

          _createClass(PurchaseItemComponent, [{
            key: "editChange",
            value: function editChange() {
              this.isedit = false;
            }
          }, {
            key: "ngOnInit",
            value: function ngOnInit() {
              this.getPurchaseDetails();
              this.viewdatas = sessionStorage.getItem('viewData');
            }
          }, {
            key: "getPurchaseDetails",
            value: function getPurchaseDetails() {
              var _this31 = this;

              this.auth.showLoader();
              this.httpService.getData('/api/v1/inventory/purchase/all?pageOffset=' + this.pageIndex + '&pageSize=' + this.displayBatchSize + '&&instituteId=' + this.institution_id).subscribe(function (res) {
                var purchaseData = res.result.response;
                _this31.purchaseAllData = purchaseData;
                _this31.staticPageData = res.result.response;
                _this31.tempLocationList = res.result.response;
                _this31.totalRecords = res.result.totalElements; // for (let keys of purchaseData) {
                //   console.log(keys);
                //   console.log(keys)
                //   // console.log(this.purchaseAllData[keys]);
                //   // for (let data of keys.purchased_item_list) {
                //   //   let obj:any={};
                //   //   //obj.category=keys.category_name;
                //   //   obj.item_name=data.item_name;
                //   //   obj.category_name=data.category_name;
                //   //   obj.quantity=data.quantity;
                //   //   obj.supplier_company_name=keys.supplier_company_name;
                //   //   obj.purchase_date=keys.purchase_date;
                //   //   obj.total_amount=keys.total_amount;
                //   //   obj.total_paid_amount=keys.total_paid_amount;
                //   //   obj.purchase_date=keys.purchase_date;
                //   //   obj.balanced_amount=keys.balanced_amount;
                //   //   obj.bill_image_url=keys.bill_image_url;
                //   //   obj.paid_amount =keys.paid_amount;
                //   //   obj.purchase_id=keys.purchase_id;
                //   //   console.log(obj);
                //   //   this.purchaseAllData.push(obj)
                //   // }
                //   console.log(purchaseData)
                // }
                // this.staticPageData = res.result.response;
                // this.tempLocationList = res.result.response;
                // this.totalRecords = res.result.total_elements;

                _this31.auth.hideLoader();
              }, function (err) {
                _this31.auth.hideLoader();
              });
            }
          }, {
            key: "getAllPurchaseDetails",
            value: function getAllPurchaseDetails() {
              this.httpService.getData('/api/v1/inventory/purchase/all?pageOffset=' + this.pageIndex + '&pageSize=' + this.displayBatchSize + '&&instituteId=' + this.institution_id).subscribe(function (res) {
                var purchaseData = res.result.response;
              });
            }
          }, {
            key: "showConfirm",
            value: function showConfirm(obj) {
              document.getElementById('action_btn').style.display = "none";
              this.purchase_id = obj.purchase_id;
              $('#deletesModal').modal('show');
            }
          }, {
            key: "deleteRow",
            value: function deleteRow() {
              var _this32 = this;

              this.auth.showLoader();
              this.httpService.deleteData('/api/v1/inventory/purchase/delete/' + this.purchase_id + '?instituteId=' + this.model.institute_id, null).subscribe(function (res) {
                _this32.auth.hideLoader();

                _this32.msgService.showErrorMessage('success', '', 'Purchase Item Deleted Successfully');

                _this32.getPurchaseDetails();

                $('#deletesModal').modal('hide');
              }, function (err) {
                _this32.msgService.showErrorMessage('error', '', err.error.message);

                _this32.auth.hideLoader();
              });
            }
          }, {
            key: "showAddPayment",
            value: function showAddPayment(purchase_id) {
              document.getElementById('action_btn').style.display = "none";
              this.payment_purchase_id = purchase_id;
              $('#addpayModal').modal('show');
            } //create payment

          }, {
            key: "addPaymentPurchase",
            value: function addPaymentPurchase(payment_purchase_id) {
              var _this33 = this;

              if (this.addform.valid) {
                var file = document.getElementById('billImageFile').files[0];
                this.model.institute_id = sessionStorage.getItem('institute_id');
                var formData = new FormData();
                var paymentDto = {};
                paymentDto.institute_id = sessionStorage.getItem('institute_id');
                paymentDto.purchase_id = payment_purchase_id;
                paymentDto.purchased_by_user_id = this.paymentModel.purchased_by_user_id;
                paymentDto.paid_amount = this.paymentModel.paid_amount;
                paymentDto.payment_date = moment__WEBPACK_IMPORTED_MODULE_7__(this.paymentModel.payment_date).format("YYYY-MM-DD");
                paymentDto.reference_no = this.paymentModel.reference_no;
                paymentDto.paid_amount = this.paymentModel.paid_amount;
                paymentDto.payment_method = this.paymentModel.payment_method;
                formData.append('paymentDto', JSON.stringify(paymentDto));

                if (file) {
                  formData.append('billImageFile', file);
                }

                if (this.isedit) {} //this.isedit?this.model.id:delete(this.model.id);


                var base = this.auth.baseUrl; //let base = "https://test999.proctur.com/StdMgmtWebAPI"
                // let urlPostXlsDocument = base + "/prod/api/v2/asset/purchase/create";

                var urlPostXlsDocument = base + "/api/v1/inventory/payment/create";
                var newxhr = new XMLHttpRequest();
                var auths = {
                  userid: sessionStorage.getItem('userid'),
                  userType: sessionStorage.getItem('userType'),
                  password: sessionStorage.getItem('password'),
                  institution_id: sessionStorage.getItem('institute_id')
                };
                var Authorization = btoa(auths.userid + "|" + auths.userType + ":" + auths.password + ":" + auths.institution_id);
                newxhr.open("POST", urlPostXlsDocument, true);
                newxhr.setRequestHeader("Authorization", Authorization);
                newxhr.setRequestHeader("x-proc-authorization", Authorization);
                newxhr.setRequestHeader("x-prod-inst-id", sessionStorage.getItem('institute_id'));
                newxhr.setRequestHeader("x-prod-user-id", sessionStorage.getItem('userid'));
                newxhr.setRequestHeader("enctype", "multipart/form-data;");
                newxhr.setRequestHeader("Accept", "application/json, text/javascript"); //newxhr.setRequestHeader("Access-Control-Allow-Origin", "*");

                if (!this.auth.isRippleLoad.getValue()) {
                  this.auth.showLoader();

                  newxhr.onreadystatechange = function () {
                    _this33.auth.hideLoader();

                    if (newxhr.readyState == 4) {
                      if (newxhr.status >= 200 && newxhr.status < 300) {
                        var msg = 'Payment details is Saved Successfully';

                        _this33.msgService.showErrorMessage(_this33.msgService.toastTypes.success, '', msg);

                        $('#addpayModal').modal('hide');

                        _this33.cancel();

                        _this33.getPurchaseDetails(); //this.cancel(false)


                        _this33.addform.resetForm(_this33.paymentModel);
                      } else {
                        // this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', "File format is not suported");
                        _this33.msgService.showErrorMessage(_this33.msgService.toastTypes.error, '', JSON.parse(newxhr.response).error[0].errorMessage);
                      }
                    }
                  };

                  newxhr.send(formData);
                }
              } else {
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', "Please fill all mandatory field");
              }
            } //validate date

          }, {
            key: "validateFutureDate",
            value: function validateFutureDate() {
              var today = moment__WEBPACK_IMPORTED_MODULE_7__(new Date());
              var selectedDate = moment__WEBPACK_IMPORTED_MODULE_7__(this.paymentModel.payment_date);
              var diff = moment__WEBPACK_IMPORTED_MODULE_7__(selectedDate.diff(today))['_i'];

              if (diff > 0) {
                this.msgService.showErrorMessage('info', '', "Future date is not allowed");
                this.paymentModel.payment_date = moment__WEBPACK_IMPORTED_MODULE_7__(new Date()).format('YYYY-MM-DD');
              }
            }
          }, {
            key: "validatePayment",
            value: function validatePayment(data) {
              var balanced_amount = 2344;
              var amount = Number(this.paymentModel.paid_amount);

              if (amount < 1) {
                this.msgService.showErrorMessage(this.msgService.toastTypes.info, '', "Payment amount is less than one");
              }

              if (balanced_amount <= amount) {
                this.msgService.showErrorMessage(this.msgService.toastTypes.info, '', "Payment amount is greater than balanced amount");
              }
            }
          }, {
            key: "getPaymentHistory",
            value: function getPaymentHistory(data) {
              var _this34 = this;

              document.getElementById('action_btn').style.display = "none";

              if (data.paid_amount != 0) {
                this.auth.showLoader();
                this.httpService.getData('/api/v1/inventory/payment/all?purchaseId=' + data.purchase_id + '&instituteId=' + this.paymentModel.institute_id).subscribe(function (res) {
                  _this34.paymentHistoryData = res.result;

                  if (_this34.paymentHistoryData.length == 0) {
                    _this34.msgService.showErrorMessage(_this34.msgService.toastTypes.info, '', "Payment history not available under this record");
                  } else {
                    $('#viewpayModal').modal('show');
                  }

                  _this34.auth.hideLoader();
                }, function (err) {
                  _this34.msgService.showErrorMessage(_this34.msgService.toastTypes.error, '', err.error.message);
                });
              }
            }
          }, {
            key: "viewNavigate",
            value: function viewNavigate(obj) {
              //../purchase-view
              document.getElementById('action_btn').style.display = "none";
              sessionStorage.setItem('viewData', obj);
              this.router.navigate(['/view/inventory-management/purchase-view']);
            }
          }, {
            key: "cancelData",
            value: function cancelData(purchase_id) {
              var _this35 = this;

              ///api/v1/inventory/purchase/cancelPurchase?purchaseId=3&instituteId=100058
              this.httpService.getData('/api/v1/inventory/purchase/cancelPurchase?purchaseId=' + purchase_id + '&instituteId=' + this.paymentModel.institute_id).subscribe(function (res) {
                if (res.statusCode == 200) {
                  _this35.msgService.showErrorMessage(_this35.msgService.toastTypes.success, '', 'Purchase cancelled & initiated refund');

                  _this35.getAllPurchaseDetails();
                } else {}
              }, function (err) {
                _this35.msgService.showErrorMessage(_this35.msgService.toastTypes.error, '', err.error.message);
              });
            }
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
              this.getPurchaseDetails();
            }
          }, {
            key: "updateTableBatchSize",
            value: function updateTableBatchSize(event) {
              this.pageIndex = 1;
              this.displayBatchSize = event;
              this.fetchTableDataByPage(this.pageIndex);
            }
          }, {
            key: "searchDatabase",
            value: function searchDatabase() {
              var _this36 = this;

              if (this.searchParams == undefined || this.searchParams == null) {
                this.searchParams = "";
                this.staticPageData = this.tempLocationList;
              } else {
                var searchData = this.tempLocationList.filter(function (item) {
                  return Object.keys(item).some(function (k) {
                    return item[k] != null && item[k].toString().toLowerCase().includes(_this36.searchParams.toLowerCase());
                  });
                });
                this.staticPageData = searchData;
                this.totalRecords = this.staticPageData.length;
              }
            }
          }, {
            key: "downloadPdf",
            value: function downloadPdf() {
              var _this37 = this;

              ///api/v1/inventory/purchase/all?all=1 + '&&instituteId=' + this.institution_id
              this.httpService.getData('/api/v1/inventory/purchase/all?all=1&&instituteId=' + this.institution_id).subscribe(function (res) {
                _this37.assignDataforDownload = res.result.response;

                for (var i = 0; i < _this37.assignDataforDownload.length; i++) {
                  _this37.assignDataforDownload[i].id = i + 1;
                }

                var arr = [];

                _this37.assignDataforDownload.map(function (ele) {
                  var json = [ele.id, ele.reference_number, ele.supplier_company_name, ele.purchase_date, // ele.bill_image_url,
                  ele.total_amount, ele.total_paid_amount, ele.balanced_amount];
                  arr.push(json);
                });

                var rows = [];
                rows = [['#', 'Reference No.', ' Supplier', ' Date', 'Grand Total ', 'Paid ', 'Balance']];
                var columns = arr;

                _this37._pdfService.exportToPdf(rows, columns, 'Asset_Assign_List');

                _this37.auth.hideLoader();
              }, function (err) {
                _this37.auth.hideLoader();
              });
            }
          }, {
            key: "exportToExcel",
            value: function exportToExcel() {
              var _this38 = this;

              this.httpService.getData('/api/v1/inventory/purchase/all?all=1&&instituteId=' + this.institution_id).subscribe(function (res) {
                _this38.auth.showLoader();

                _this38.assignDataforDownload = res.result.response;
                var Excelarr = [];

                _this38.assignDataforDownload.map(function (ele) {
                  var json = {};

                  _this38.headerSetting.map(function (keys) {
                    json[keys.value] = ele[keys.primary_key];
                  });

                  Excelarr.push(json);
                });

                _this38.excelService.exportAsExcelFile(Excelarr, 'asset_assign');

                _this38.auth.hideLoader();
              }, function (err) {
                _this38.auth.hideLoader();
              });
              this.auth.hideLoader();
            }
          }, {
            key: "cancel",
            value: function cancel() {
              this.paymentModel = {
                purchase_id: 0,
                purchased_by_user_id: 0,
                paid_amount: '',
                payment_date: '',
                reference_no: '',
                payment_method: '',
                institute_id: sessionStorage.getItem('institute_id')
              };
              this.addform.resetForm(this.paymentModel);
            }
          }, {
            key: "open",
            value: function open() {
              document.getElementById('action_btn').style.display = 'block';
            }
          }]);

          return PurchaseItemComponent;
        }();

        PurchaseItemComponent.ctorParameters = function () {
          return [{
            type: _services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]
          }, {
            type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticatorService"]
          }, {
            type: _services_message_show_service__WEBPACK_IMPORTED_MODULE_4__["MessageShowService"]
          }, {
            type: _services_export_to_pdf_service__WEBPACK_IMPORTED_MODULE_2__["ExportToPdfService"]
          }, {
            type: _services_excel_service__WEBPACK_IMPORTED_MODULE_3__["ExcelService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
          }];
        };

        PurchaseItemComponent.propDecorators = {
          addform: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['addform', {
              "static": false
            }]
          }]
        };
        PurchaseItemComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
          selector: 'app-purchase-item',
          template: __importDefault(__webpack_require__(
          /*! raw-loader!./purchase-item.component.html */
          "./node_modules/raw-loader/dist/cjs.js!./src/app/components/inventory-module/purchase-item/purchase-item.component.html"))["default"],
          styles: [__importDefault(__webpack_require__(
          /*! ./purchase-item.component.scss */
          "./src/app/components/inventory-module/purchase-item/purchase-item.component.scss"))["default"]]
        }), __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"], _services_authenticator_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticatorService"], _services_message_show_service__WEBPACK_IMPORTED_MODULE_4__["MessageShowService"], _services_export_to_pdf_service__WEBPACK_IMPORTED_MODULE_2__["ExportToPdfService"], _services_excel_service__WEBPACK_IMPORTED_MODULE_3__["ExcelService"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])], PurchaseItemComponent);
        return PurchaseItemComponent;
      }();
      /***/

    },

    /***/
    "./src/app/components/inventory-module/purchase-view/purchase-view.component.scss":
    /*!****************************************************************************************!*\
      !*** ./src/app/components/inventory-module/purchase-view/purchase-view.component.scss ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsInventoryModulePurchaseViewPurchaseViewComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "* {\n  margin: 0px;\n}\n\nbody {\n  font-family: 'Open Sans', sans-serif;\n}\n\n.flex {\n  display: flex;\n}\n\n.blue_button {\n  background-color: #109CF1;\n  color: white;\n  padding: 0px 20px;\n  font-size: 13px;\n  border: none;\n  border-radius: 5px;\n  font-weight: 600;\n  line-height: 35px;\n  cursor: pointer;\n}\n\n.white_button {\n  background-color: #fff;\n  color: #109CF1;\n  padding: 0px 20px;\n  font-size: 12px;\n  border: 1px solid #109CF1;\n  border-radius: 5px;\n  font-weight: 500;\n  line-height: 35px;\n  cursor: pointer;\n}\n\n.select {\n  padding: 7px 20px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-size: 12px;\n  font-weight: 500;\n  color: #787A7D;\n}\n\n.input {\n  padding: 7px 20px;\n  font-size: 12px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-weight: 500;\n  height: 35px;\n}\n\ninput:focus, select:focus, button:focus {\n  outline: none;\n}\n\n.page_heading > p {\n  color: #334D6E;\n  font-weight: 600;\n  font-size: 14px;\n  margin-bottom: 0px;\n}\n\n.flex {\n  display: flex;\n}\n\n.display {\n  display: flex;\n  justify-content: space-between;\n}\n\n.w98 {\n  width: 98%;\n  margin: 0px auto;\n}\n\n.head_padding {\n  box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  -webkit-box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  -moz-box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  padding: 15px 0px;\n}\n\n.pageheadingspace {\n  margin-bottom: 7px;\n}\n\n.table_heading {\n  width: 100%;\n  background-color: #DFE5F0;\n  /* padding: 10px 0px;*/\n  display: flex;\n  border-radius: 5px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);\n}\n\n.table_heading > div {\n  text-align: center;\n  font-weight: 600;\n  font-size: 12px;\n  color: #323C47;\n  line-height: 35px;\n  text-align: left;\n}\n\n.table_body {\n  width: 100%;\n  display: flex;\n  border-radius: 5px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);\n  text-align: left;\n  line-height: 18px;\n}\n\n.table_body > div {\n  text-align: left;\n  font-weight: 500;\n  font-size: 12px;\n  color: #323C47;\n  /* padding: 5px 0px;*/\n  margin: auto;\n  line-height: 18px;\n}\n\n.mr10 {\n  margin-right: 10px;\n}\n\n.w240 {\n  width: 240px;\n}\n\n.item_cat .table_body > div, .item_cat .table_heading > div {\n  width: calc((100% - 250px) / 2);\n}\n\n.item_cat .table_heading > div:first-child, .item_cat .table_body > div:first-child {\n  width: 50px;\n}\n\n.item_cat .table_heading > div:last-child, .item_cat .table_body > div:last-child {\n  width: 200px;\n}\n\n.group18 {\n  width: 18px;\n  height: auto;\n}\n\n.pt15 {\n  padding-top: 15px;\n  padding-bottom: 5px;\n}\n\n.bottom_pagignation {\n  padding-top: 10px;\n  background-color: #fff;\n  position: fixed;\n  bottom: 0px;\n  z-index: 100;\n}\n\n.bottom_pagignation p {\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 20px;\n}\n\n.bottom_pagignation select {\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-size: 13px;\n  font-weight: 500;\n  color: #0079FF;\n  display: inline;\n}\n\n.bottom_pagignation .w20 {\n  width: 20%;\n}\n\n.bottom_pagignation .w10 {\n  width: 10%;\n}\n\n.bottom_pagignation .w50 {\n  width: 50%;\n}\n\n.bottom_pagignation .w40 {\n  width: 40%;\n}\n\n.number {\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 20px;\n  letter-spacing: 0.01em;\n  color: #000000;\n  margin: 0px 4px;\n}\n\n.active_circle {\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 20px;\n  letter-spacing: 0.01em;\n  color: #fff;\n  padding: 2px 7px;\n  border-radius: 50%;\n  background: #0079FF;\n}\n\n.next {\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 20px;\n  letter-spacing: 0.01em;\n  color: #0079FF;\n}\n\n.w450 {\n  width: 450px;\n}\n\n.white {\n  background-color: #fff;\n  width: calc(100% - 227px);\n  border-top: 3px solid #Ededed;\n}\n\n.nav-item .nav-link {\n  font-weight: 600;\n  color: #405877;\n  padding-bottom: 8px;\n  cursor: pointer;\n  font-size: 13px;\n}\n\n.nav-item .nav-link.active {\n  border-bottom: 3px solid #109CF1 !important;\n  color: #109CF1 !important;\n}\n\n.nav-link {\n  display: block;\n  padding: 1.5rem 0rem;\n  margin: -1rem 1.5rem;\n  margin-left: 0rem;\n}\n\n.flex {\n  display: flex;\n}\n\n.w15 {\n  width: 15%;\n  background-color: #DFE5F0;\n  padding: 10px;\n}\n\n.list > li {\n  background-color: #fff;\n  padding: 7px 0px;\n  margin: 7px 0px;\n}\n\n.list > li > a > span {\n  text-decoration: none;\n  font-size: 10px;\n  font-weight: 500;\n  color: #334D6E;\n}\n\n.list > li img {\n  padding: 0px 10px;\n}\n\n.magnifying-glass {\n  background-image: url(\"/assets/images/assets/Vector.svg\");\n  background-repeat: no-repeat;\n  background-position: left center;\n  text-indent: 10px;\n}\n\n.space33 {\n  padding-left: 5px;\n}\n\n.item_man .table_body > div, .item_man .table_heading > div {\n  width: calc((100% - 100px) / 8);\n}\n\n.item_man .table_heading > div:last-child, .item_man .table_body > div:last-child {\n  width: 100px;\n}\n\n.item_man .table_heading > div:nth-child(5), .item_man .table_heading > div:nth-child(6), .item_man .table_heading > div:nth-child(8) {\n  line-height: 18px;\n}\n\n.dropdown1 {\n  position: relative;\n  display: inline-block;\n  line-height: 35px;\n}\n\n.dropdown-content1 {\n  display: none;\n  position: absolute;\n  background-color: #fff;\n  min-width: 200px;\n  right: 3px;\n  margin-top: 20px;\n  top: -150px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1200;\n}\n\n.dropdown-content1 a {\n  color: black;\n  text-decoration: none;\n  display: block;\n}\n\n.dropdown-content1 a:hover {\n  background-color: #ddd;\n  border-radius: 5px;\n}\n\n.dropdown1:hover .dropdown-content1 {\n  display: block;\n}\n\n.dot3 {\n  padding: 10px 0px;\n  cursor: pointer;\n}\n\n.wid100 {\n  width: 100%;\n}\n\n.wid80 {\n  width: 80%;\n}\n\n.pt10 {\n  padding-bottom: 10px;\n}\n\ninput[type=\"date\"]::-webkit-calendar-picker-indicator {\n  color: rgba(0, 0, 0, 0);\n  opacity: 1;\n  display: block;\n  background: url('cal.svg') no-repeat;\n  width: 20px;\n  height: 20px;\n  border-width: thin;\n  padding: 2px 0px;\n}\n\ninput[type=\"date\"] {\n  color: #787A7D;\n  cursor: pointer;\n}\n\ninput:focus {\n  outline: none;\n}\n\nbutton:focus {\n  outline: none;\n}\n\n.modal textarea {\n  height: 100px;\n}\n\n.alert {\n  font-weight: 400;\n  font-size: 18px;\n  line-height: 27px;\n  letter-spacing: 0.01em;\n  color: #4D5869;\n}\n\n.alert_text {\n  text-align: justify;\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 19px;\n  letter-spacing: 0.01em;\n  color: #858585;\n  margin: 0px 40px;\n  margin-top: 20px;\n}\n\n.center {\n  text-align: center;\n}\n\n.center img {\n  width: 44px;\n  height: 34px;\n}\n\n#delete1Modal .modal-dialog, #deleteitemModal .modal-dialog {\n  width: 350px;\n}\n\n@media (min-width: 576px) {\n  #delete1Modal .modal-dialog, #deleteitemModal .modal-dialog {\n    max-width: 350px;\n  }\n}\n\n#deleteModal .modal-dialog {\n  width: 350px;\n}\n\n@media (min-width: 576px) {\n  #deleteModal .modal-dialog {\n    max-width: 350px;\n  }\n}\n\n.pt101 {\n  padding-top: 30px;\n  margin: 0px 30px;\n}\n\n#itemModal .modal-dialog, #edititemModal .modal-dialog, #subbranchModal .modal-dialog, #add1Modal .modal-dialog, #addpayModal .modal-dialog, #viewpayModal .modal-dialog {\n  width: 750px;\n}\n\n@media (min-width: 576px) {\n  #itemModal .modal-dialog, #edititemModal .modal-dialog, #subbranchModal .modal-dialog, #add1Modal .modal-dialog, #addpayModal .modal-dialog, #viewpayModal .modal-dialog {\n    max-width: 750px;\n  }\n}\n\n.sec1, .sec2 {\n  width: 50%;\n}\n\n.sec1 {\n  padding-right: 10px;\n}\n\n.sec2 {\n  padding-left: 10px;\n}\n\ninput[type=\"date\"]:focus:before,\ninput[type=\"date\"]:valid:before {\n  content: \"\";\n}\n\n/* input[type=date]::-webkit-datetime-edit-text {\n      -webkit-appearance: none;\n      display: none;\n  }\n  input[type=date]::-webkit-datetime-edit-month-field{\n      -webkit-appearance: none;\n      display: none;\n  }\n  input[type=date]::-webkit-datetime-edit-day-field {\n      -webkit-appearance: none;\n      display: none;\n  }\n  input[type=date]::-webkit-datetime-edit-year-field {\n      -webkit-appearance: none;\n      display: none;\n  }*/\n\ninput[type=\"date\"]:before {\n  content: attr(placeholder) !important;\n  padding-right: 20px;\n}\n\n.allo_history .table_body > div, .allo_history .table_heading > div {\n  width: calc((100% - 50px) / 5);\n}\n\n.allo_history .table_heading > div:first-child, .allo_history .table_body > div:first-child {\n  width: 50px;\n  line-height: 4;\n}\n\n.in1 {\n  display: inline-block;\n  background: #CCFFAC;\n  border-radius: 5px;\n  width: 40px;\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 24px;\n  letter-spacing: 0.01em;\n  color: #323C47;\n  text-align: center;\n}\n\n.out {\n  display: inline-block;\n  background: #FFCF88;\n  border-radius: 5px;\n  width: 40px;\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 24px;\n  text-align: center;\n  letter-spacing: 0.01em;\n  color: #323C47;\n}\n\n#historyModal .modal-dialog, #historyModal .modal-dialog {\n  width: 650px;\n}\n\n@media (min-width: 576px) {\n  #historyModal .modal-dialog, #historyModal .modal-dialog {\n    max-width: 650px;\n  }\n}\n\n.supplier_m .table_body > div, .supplier_m .table_heading > div {\n  width: calc((100% - 200px) / 5);\n}\n\n.supplier_m .table_heading > div:last-child, .supplier_m .table_body > div:last-child {\n  width: 200px;\n}\n\n.purchase .table_body > div, .purchase .table_heading > div {\n  width: calc((100% - 100px) / 6);\n}\n\n.purchase .table_heading > div:last-child, .purchase .table_body > div:last-child {\n  width: 100px;\n}\n\ninput[type=file]::-webkit-file-upload-button {\n  border: none;\n  border-right: 2px solid #e3dadb;\n  padding: .6em .4em;\n  border-radius: .2em;\n  background-color: #fff;\n  -webkit-transition: 1s;\n  transition: 1s;\n  color: #109CF1;\n  outline: none;\n}\n\ninput[type=file] {\n  padding: 0px;\n  color: #B6B5B1;\n  cursor: pointer;\n}\n\n.div_1 {\n  border: 1px solid #D5D7DA;\n  width: 25%;\n  height: 27rem;\n  margin: 0px 10px;\n  border-radius: 5px;\n  margin-top: 20px;\n  padding: 20px;\n}\n\n.pt102 {\n  padding-bottom: 20px;\n}\n\n.textarea1 {\n  height: 100px;\n}\n\n.heading1 {\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: 0.01em;\n  color: #334D6E;\n}\n\n.div_2 {\n  width: 75%;\n  margin: 0px 10px;\n  border-radius: 5px;\n  margin-top: 20px;\n  padding: 20px;\n}\n\n.tablehead {\n  background: #DFE5F0;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n  line-height: 40px;\n  display: flex;\n}\n\n.tablehead > div {\n  text-align: center;\n  width: calc(100% / 5);\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 40px;\n  text-align: center;\n  letter-spacing: 0.01em;\n  color: #323C47;\n}\n\n.sel1 {\n  width: 252px;\n  background: #FAFAFA;\n  border: 1px solid #F0EDED;\n  border-radius: 4px;\n}\n\n.tablebody {\n  display: flex;\n  border-bottom: 1px solid #DFE5F0;\n}\n\n.tablebody > div {\n  text-align: center;\n  width: calc(100% / 5);\n  font-weight: normal;\n  font-size: 13px;\n  line-height: 60px;\n  letter-spacing: 0.01em;\n  color: #323C47;\n}\n\n.tabletotal {\n  display: flex;\n  background: #D4FFF2;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n  font-weight: 600;\n  font-size: 13px;\n  letter-spacing: 0.01em;\n  color: #323C47;\n}\n\n.tabletotal > div {\n  text-align: center;\n  line-height: 60px;\n  width: calc(100% / 5);\n}\n\n.tabletotal > div:nth-child(4) {\n  font-weight: 700;\n  font-size: 16px;\n}\n\n.created_date {\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 194px;\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 30px;\n  letter-spacing: 0.01em;\n  color: #323C47;\n  text-align: center;\n}\n\n.mr10 {\n  margin-right: 10px;\n}\n\n.flex30 {\n  display: flex;\n}\n\n.flex30 > div {\n  padding-left: 20px;\n  width: calc( 100% / 3);\n  line-height: 30px;\n  border-right: 1px solid #E5E3EE;\n}\n\n.flex30 > div:last-child {\n  border-right: none;\n}\n\n.name2 {\n  width: 34%;\n  font-weight: 600;\n  font-size: 12px;\n  letter-spacing: 0.01em;\n  color: #323C47;\n}\n\n.value2 {\n  width: 66%;\n  font-weight: 400;\n  font-size: 12px;\n  letter-spacing: 0.01em;\n  color: #323C47;\n}\n\n.flex30 > div:last-child .name2 {\n  width: 45%;\n}\n\n.flex30 > div:last-child .value2 {\n  width: 55%;\n}\n\n.item .tablehead > div, .item .tablebody > div {\n  width: calc(100% / 4);\n}\n\n.item .tabletotal {\n  border-bottom: 1px solid #DFE5F0;\n  background: #fff;\n  box-shadow: none;\n}\n\n.item .tabletotal > div {\n  width: calc(100% /4);\n}\n\n.sale .table_body > div, .sale .table_heading > div {\n  width: calc((100% - 100px) / 6);\n}\n\n.sale .table_heading > div:last-child, .sale .table_body > div:last-child {\n  width: 100px;\n}\n\n.sale .table_heading > div:nth-child(10), .sale .table_body > div:nth-child(10) {\n  line-height: 18px;\n}\n\n.div_11 {\n  border: 1px solid #D5D7DA;\n  width: 25%;\n  height: 37rem;\n  margin: 0px 10px;\n  border-radius: 5px;\n  margin-top: 20px;\n  padding: 20px;\n}\n\n.sale_add .tablehead > div {\n  width: calc(100% / 6);\n}\n\n.sale_add .tablebody > div {\n  width: calc(100% / 6);\n}\n\n.sale_add .tabletotal > div {\n  width: calc(100% / 6);\n}\n\n.sale_add .tabletotal > div:nth-child(5) {\n  font-weight: 700;\n  font-size: 16px;\n}\n\n.file_name {\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 18px;\n  letter-spacing: 0.01em;\n  color: #109CF1;\n}\n\n.history .table_body > div, .history .table_heading > div {\n  width: calc((100% - 50px) / 5);\n}\n\n.history .table_heading > div:first-child, .history .table_body > div:first-child {\n  width: 50px;\n}\n\n.nav-item .nav-link {\n  font-weight: 600;\n  color: #405877;\n  padding-bottom: 8px;\n  padding-top: 10px;\n  cursor: pointer;\n  font-size: 13px;\n  float: left;\n  background: none;\n}\n\n.nav-item .active {\n  border-bottom: 3px solid #109cf1 !important;\n  color: #109cf1 !important;\n}\n\n.modal {\n  width: 100%;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n}\n\n.right {\n  float: left;\n  margin: 5px;\n}\n\n.modal-dialog {\n  margin: 0 auto;\n  top: 10%;\n}\n\n.modal-header:before {\n  display: none;\n}\n\n.modal-title {\n  color: #2B2626;\n  font-weight: 600;\n  font-size: 13px;\n  font-family: 'Open Sans', sans-serif;\n  margin-bottom: 0px;\n}\n\n.errormsg {\n  height: 10px;\n}\n\n.help-block {\n  color: red;\n  margin-bottom: 0%;\n  padding-left: 2px;\n}\n\n.cancel {\n  background-color: white;\n  color: #109CF1;\n  padding: 0px 20px;\n  font-size: 12px;\n  border: solid 2px #109CF1;\n  border-radius: 5px;\n  font-weight: 500;\n  height: 35px;\n  margin-right: 15px;\n}\n\n.align {\n  text-align: center;\n}\n\n.multiselect {\n  width: 330px;\n  height: 35px;\n  left: 30px;\n  top: 63px;\n  background: #FFFFFF;\n  box-sizing: border-box;\n  border-radius: 4px;\n  margin-top: 20px;\n}\n\n#deletesModal .modal-dialog {\n  width: 350px;\n}\n\n@media (min-width: 576px) {\n  #deletesModal .modal-dialog {\n    max-width: 350px;\n  }\n}\n\n.center {\n  text-align: center;\n}\n\n.deleteImg, li {\n  float: left;\n  margin: 3px;\n}\n\n.p_title {\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 15px;\n  letter-spacing: 0.01em;\n  color: #323C47;\n  margin-bottom: 5px;\n}\n\n.has-error .control-label {\n  color: black;\n}\n\n.help-block {\n  color: red;\n  margin-bottom: 0%;\n}\n\n.text-danger {\n  color: red;\n  padding-left: 2px;\n}\n\n.scrollable {\n  max-height: 70vh;\n  overflow-y: auto;\n}\n\n.dropdown-content1 {\n  display: none;\n  position: absolute;\n  background-color: #fff;\n  min-width: 200px;\n  right: 3px;\n  margin-top: 20px;\n  top: -100px;\n  text-align: left;\n  border-radius: 10px;\n}\n\n.dropdown-content1 a {\n  padding-left: 8px;\n}\n\n.ser {\n  margin: 10px 0px;\n}\n\n.illustration-container {\n  display: block;\n}\n\n.illustration-container .illustration-img {\n  width: 40%;\n  margin-left: 25%;\n}\n\n@media print {\n  * {\n    margin: 2px;\n  }\n  .header, .hide {\n    visibility: hidden;\n  }\n  .pr {\n    padding-left: 5px !important;\n  }\n  .name2 {\n    color: #8B817E !important;\n  }\n  .created {\n    -webkit-print-color-adjust: exact;\n    background-repeat: no-repeat !important;\n    background-size: cover !important;\n    width: 194px !important;\n    font-weight: 400 !important;\n    font-size: 13px !important;\n    line-height: 30px !important;\n    letter-spacing: 0.01em !important;\n    color: #110f0f !important;\n    text-align: center !important;\n  }\n  .thead {\n    -webkit-print-color-adjust: exact;\n    background: #DFE5F0 !important;\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1) !important;\n    border-radius: 5px;\n    line-height: 40px;\n    display: flex;\n  }\n  .tbody {\n    border-bottom: 1px solid #DFE5F0 !important;\n  }\n  .tbody > div {\n    text-align: center !important;\n    font-weight: normal !important;\n    font-size: 13px !important;\n    line-height: 60px !important;\n    letter-spacing: 0.01em !important;\n    color: #323C47 !important;\n  }\n  .totalss {\n    background: #D4FFF2 !important;\n    border-radius: 5px !important;\n    font-weight: 600 !important;\n    font-size: 13px !important;\n    letter-spacing: 0.01em !important;\n    color: #323C47 !important;\n  }\n  .totalss > div {\n    text-align: center !important;\n    line-height: 60px !important;\n  }\n  .value2 {\n    width: 66%;\n    font-weight: 400;\n    font-size: 13px;\n    letter-spacing: 0.01em;\n    color: #4C555E;\n  }\n  .val {\n    padding-left: 30px;\n  }\n}\n\n.tabletotal > div {\n  line-height: 45px;\n}\n\n.tablebody > div {\n  line-height: 45px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbnZlbnRvcnktbW9kdWxlL2ludmVudG9yeS1tb2R1bGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaW52ZW50b3J5LW1vZHVsZS9wdXJjaGFzZS12aWV3L3B1cmNoYXNlLXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXO0FDQ2Y7O0FERUU7RUFDRSxvQ0FBb0M7QUNDeEM7O0FEQ0U7RUFDRSxhQUFhO0FDRWpCOztBREFFO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixlQUFlO0FDR25COztBRERFO0VBQ0Usc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLHlCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixlQUFlO0FDSW5COztBREZHO0VBQ0MsaUJBQWlCO0VBRWpCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztBQ0lsQjs7QURGRTtFQUNFLGlCQUFpQjtFQUVqQixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2QsWUFBVztBQ0lqQjs7QURERztFQUNJLGFBQWE7QUNJcEI7O0FERkU7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixrQkFBa0I7QUNLdEI7O0FESEU7RUFDRSxhQUFhO0FDTWpCOztBREpFO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtBQ09sQzs7QURMRTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7QUNRcEI7O0FETkU7RUFDSSwrQ0FBNEM7RUFDNUMsdURBQW9EO0VBQ3BE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LDhCQUE4QjtJQUU5Qiw2QkFBNkI7SUFDN0IsMkJBQTJCO0lBQzNCLDBCQUEwQjtJQUMxQixpQ0FBaUM7SUFDakMseUJBQXlCO0VBdTZCL0I7RUFyNkJJO0lBQ0UsNkJBQTZCO0lBQzdCLDRCQUE0QjtFQXU2QmxDO0VBcDZCSTtJQUNFLFVBQVU7SUFDVixnQkFBZ0I7SUFDbEIsZUFBZTtJQUVmLHNCQUFzQjtJQUN0QixjQUFjO0VBcTZCbEI7RUFoNkJJO0lBQ0Usa0JBQWtCO0VBazZCeEI7QUFDRjs7QUEvNUJJO0VBQ0UsaUJBQWlCO0FBazZCdkI7O0FBaDZCSTtFQUNFLGlCQUFpQjtBQW02QnZCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9pbnZlbnRvcnktbW9kdWxlL3B1cmNoYXNlLXZpZXcvcHVyY2hhc2Utdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgXG4gIH1cbiAgYm9keXtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gIH1cbiAgLmZsZXh7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuICAuYmx1ZV9idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMDlDRjE7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDBweCAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIC53aGl0ZV9idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgY29sb3I6ICMxMDlDRjE7XG4gICAgcGFkZGluZzogMHB4IDIwcHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGJvcmRlcjoxcHggc29saWQgIzEwOUNGMTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsaW5lLWhlaWdodDogMzVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgIC5zZWxlY3R7XG4gICAgcGFkZGluZzogN3B4IDIwcHg7XG4gICAvLyBwYWRkaW5nOiA3cHggMnB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICM3ODdBN0Q7XG4gIH1cbiAgLmlucHV0e1xuICAgIHBhZGRpbmc6IDdweCAyMHB4O1xuICAgIFxuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBoZWlnaHQ6MzVweDtcbiAgICB9XG5cbiAgIGlucHV0OmZvY3VzLCBzZWxlY3Q6Zm9jdXMsYnV0dG9uOmZvY3Vze1xuICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICB9XG4gIC5wYWdlX2hlYWRpbmc+cHtcbiAgICBjb2xvcjogIzMzNEQ2RTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIH1cbiAgLmZsZXh7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuICAuZGlzcGxheXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxuICAudzk4e1xuICAgIHdpZHRoOiA5OCU7XG4gICAgbWFyZ2luOiAwcHggYXV0bztcbiAgfVxuICAuaGVhZF9wYWRkaW5ne1xuICAgICAgYm94LXNoYWRvdzogMHB4IDdweCA1cHggLTNweCByZ2JhKDAsMCwwLDAuMSk7XG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA3cHggNXB4IC0zcHggcmdiYSgwLDAsMCwwLjEpO1xuICAgICAgLW1vei1ib3gtc2hhZG93OiAwcHggN3B4IDVweCAtM3B4IHJnYmEoMCwwLDAsMC4xKTtcbiAgICBwYWRkaW5nOiAxNXB4IDBweDtcbiAgfVxuICAucGFnZWhlYWRpbmdzcGFjZXtcbiAgICBtYXJnaW4tYm90dG9tOiA3cHg7XG4gIH1cbiAgLnRhYmxlX2hlYWRpbmd7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0RGRTVGMDtcbiAgIC8qIHBhZGRpbmc6IDEwcHggMHB4OyovXG4gICAgLy9tYXJnaW46IDEwcHggMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgIFxuICB9XG4gIFxuICAudGFibGVfaGVhZGluZz5kaXZ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiAjMzIzQzQ3O1xuICAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG4gIFxuICAudGFibGVfYm9keXtcbiAgICAgd2lkdGg6IDEwMCU7XG4gICAgLy9tYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICB9XG4gIC50YWJsZV9ib2R5PmRpdntcbiAgICBcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiAjMzIzQzQ3O1xuICAgLyogcGFkZGluZzogNXB4IDBweDsqL1xuICAgICBtYXJnaW46IGF1dG87XG4gICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICBcbiAgfVxuICBcbiAgLm1yMTB7XG4gIG1hcmdpbi1yaWdodDoxMHB4O1xuICB9XG4gIC53MjQwe1xuICAgd2lkdGg6IDI0MHB4O1xuICB9XG4gIFxuICAuaXRlbV9jYXQgLnRhYmxlX2JvZHk+ZGl2LC5pdGVtX2NhdCAudGFibGVfaGVhZGluZz5kaXZ7XG4gICAgd2lkdGg6IGNhbGMoKDEwMCUgLSAyNTBweCkgLyAyKTtcbiAgfVxuICAuaXRlbV9jYXQgLnRhYmxlX2hlYWRpbmc+ZGl2OmZpcnN0LWNoaWxkLC5pdGVtX2NhdCAudGFibGVfYm9keT5kaXY6Zmlyc3QtY2hpbGR7XG4gICAgd2lkdGg6IDUwcHg7XG4gIH1cbiAgLml0ZW1fY2F0IC50YWJsZV9oZWFkaW5nPmRpdjpsYXN0LWNoaWxkLC5pdGVtX2NhdCAudGFibGVfYm9keT5kaXY6bGFzdC1jaGlsZHtcbiAgICB3aWR0aDogMjAwcHg7XG4gIH1cbiAgLmdyb3VwMTh7XG4gICAgd2lkdGg6IDE4cHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG4gIC5wdDE1e1xuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIH1cbiAgLmJvdHRvbV9wYWdpZ25hdGlvbntcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAwcHg7XG4gICAgei1pbmRleDogMTAwO1xuICB9XG4gIC5ib3R0b21fcGFnaWduYXRpb24gcHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgfVxuICAuYm90dG9tX3BhZ2lnbmF0aW9uIHNlbGVjdHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAjMDA3OUZGO1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgfVxuICAuYm90dG9tX3BhZ2lnbmF0aW9uIC53MjB7XG4gICAgd2lkdGg6IDIwJTtcbiAgfVxuICAuYm90dG9tX3BhZ2lnbmF0aW9uIC53MTB7XG4gICAgd2lkdGg6IDEwJTtcbiAgfVxuICAuYm90dG9tX3BhZ2lnbmF0aW9uIC53NTB7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxuICAuYm90dG9tX3BhZ2lnbmF0aW9uIC53NDB7XG4gICAgd2lkdGg6IDQwJTtcbiAgfVxuICAubnVtYmVye1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIG1hcmdpbjowcHggNHB4O1xuICB9XG4gIC5hY3RpdmVfY2lyY2xle1xuICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOjJweCA3cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogIzAwNzlGRjtcbiAgfVxuICAubmV4dHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICBjb2xvcjogIzAwNzlGRjtcbiAgXG4gIH1cbiAgLnc0NTB7XG4gICAgd2lkdGg6IDQ1MHB4O1xuICB9XG4gIC53aGl0ZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMjdweCk7XG4gICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICNFZGVkZWQ7XG4gIH1cbiAgLm5hdi1pdGVtIC5uYXYtbGlua3tcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjb2xvcjogIzQwNTg3NztcbiAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBmb250LXNpemU6IDEzcHhcbiAgfVxuICBcbiAgLm5hdi1pdGVtIC5uYXYtbGluay5hY3RpdmUge1xuICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzEwOUNGMSAhaW1wb3J0YW50O1xuICAgICAgY29sb3I6ICMxMDlDRjEgIWltcG9ydGFudDtcbiAgfVxuICAubmF2LWxpbmsge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBwYWRkaW5nOiAxLjVyZW0gMHJlbTtcbiAgICAgIG1hcmdpbjogLTFyZW0gMS41cmVtO1xuICAgICAgbWFyZ2luLWxlZnQ6IDByZW07XG4gIH1cbiAgLmZsZXh7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuICAudzE1e1xuICAgIHdpZHRoOiAxNSU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0RGRTVGMDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG4gIC5saXN0Pmxpe1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogN3B4IDBweDtcbiAgICBtYXJnaW46IDdweCAwcHg7XG4gIH1cbiAgLmxpc3Q+bGk+YT5zcGFue1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAjMzM0RDZFO1xuICB9XG4gIC5saXN0PmxpIGltZ3tcbiAgcGFkZGluZzogMHB4IDEwcHg7XG4gIH0gXG4gIC5tYWduaWZ5aW5nLWdsYXNze1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvYXNzZXRzL1ZlY3Rvci5zdmcnKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246bGVmdCBjZW50ZXI7XG4gICAgdGV4dC1pbmRlbnQ6IDEwcHg7XG4gIH1cbiAgLnNwYWNlMzN7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIH1cbiAgLml0ZW1fbWFuIC50YWJsZV9ib2R5PmRpdiwuaXRlbV9tYW4gLnRhYmxlX2hlYWRpbmc+ZGl2e1xuICAgIHdpZHRoOiBjYWxjKCgxMDAlIC0gMTAwcHgpIC8gOCk7XG4gIH1cbiAgXG4gIC5pdGVtX21hbiAudGFibGVfaGVhZGluZz5kaXY6bGFzdC1jaGlsZCwuaXRlbV9tYW4gLnRhYmxlX2JvZHk+ZGl2Omxhc3QtY2hpbGR7XG4gICAgd2lkdGg6IDEwMHB4O1xuICB9XG4gIC5pdGVtX21hbiAudGFibGVfaGVhZGluZz5kaXY6bnRoLWNoaWxkKDUpLC5pdGVtX21hbiAudGFibGVfaGVhZGluZz5kaXY6bnRoLWNoaWxkKDYpLC5pdGVtX21hbiAudGFibGVfaGVhZGluZz5kaXY6bnRoLWNoaWxkKDgpe1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O31cbiAgXG4gIC5kcm9wZG93bjEge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gIH1cbiAgXG4gIC5kcm9wZG93bi1jb250ZW50MSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBtaW4td2lkdGg6MjAwcHg7XG4gICAgcmlnaHQ6M3B4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgdG9wOiAtMTUwcHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsMCwwLDAuMik7XG4gICAgei1pbmRleDogMTIwMDtcbiAgfVxuICBcbiAgLmRyb3Bkb3duLWNvbnRlbnQxIGEge1xuICAgIGNvbG9yOiBibGFjaztcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgXG4gIC5kcm9wZG93bi1jb250ZW50MSBhOmhvdmVyIHtiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xuICBib3JkZXItcmFkaXVzOiA1cHg7fVxuICBcbiAgLmRyb3Bkb3duMTpob3ZlciAuZHJvcGRvd24tY29udGVudDEge2Rpc3BsYXk6IGJsb2NrO31cbiAgLmRvdDN7XG4gIHBhZGRpbmc6IDEwcHggMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgLndpZDEwMHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAud2lkODB7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxuICBcbiAgLnB0MTB7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIH1cbiAgaW5wdXRbdHlwZT1cImRhdGVcIl06Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XG4gICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1nMS9jYWwuc3ZnKSBuby1yZXBlYXQ7XG4gICAgICB3aWR0aDogMjBweDtcbiAgICAgIGhlaWdodDogMjBweDtcbiAgICAgIGJvcmRlci13aWR0aDogdGhpbjtcbiAgICAgIHBhZGRpbmc6IDJweCAwcHg7XG4gIH1cbiAgaW5wdXRbdHlwZT1cImRhdGVcIl17XG4gICAgY29sb3I6ICM3ODdBN0Q7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIGlucHV0OmZvY3Vze1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cbiAgYnV0dG9uOmZvY3Vze1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cbiAgLm1vZGFsIHRleHRhcmVhe1xuICAgIGhlaWdodDogMTAwcHg7XG4gIH1cbiAgLmFsZXJ0e1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyN3B4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gICAgY29sb3I6ICM0RDU4Njk7XG4gIH1cbiAgLmFsZXJ0X3RleHR7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBsaW5lLWhlaWdodDogMTlweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICAgIGNvbG9yOiAjODU4NTg1O1xuICAgIG1hcmdpbjogMHB4IDQwcHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgXG4gIH1cbiAgLmNlbnRlcntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLmNlbnRlciBpbWd7XG4gICAgd2lkdGg6IDQ0cHg7XG4gIGhlaWdodDogMzRweDtcbiAgfVxuXG4gIFxuICAjZGVsZXRlMU1vZGFsIC5tb2RhbC1kaWFsb2csI2RlbGV0ZWl0ZW1Nb2RhbCAubW9kYWwtZGlhbG9nIHtcbiAgICAgIHdpZHRoOiAzNTBweDtcbiAgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpe1xuICAjZGVsZXRlMU1vZGFsIC5tb2RhbC1kaWFsb2csI2RlbGV0ZWl0ZW1Nb2RhbCAubW9kYWwtZGlhbG9nICB7XG4gICAgICBtYXgtd2lkdGg6MzUwcHg7XG4gIH1cbiAgfVxuICAjZGVsZXRlTW9kYWwgLm1vZGFsLWRpYWxvZyB7XG4gICAgICB3aWR0aDogMzUwcHg7XG4gIH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KXtcbiAgICNkZWxldGVNb2RhbCAubW9kYWwtZGlhbG9nIHtcbiAgICAgIG1heC13aWR0aDozNTBweDtcbiAgfVxuICB9XG4gIC5wdDEwMXtcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICBtYXJnaW46IDBweCAzMHB4O1xuICB9XG4gICNpdGVtTW9kYWwgLm1vZGFsLWRpYWxvZywjZWRpdGl0ZW1Nb2RhbCAubW9kYWwtZGlhbG9nLCNzdWJicmFuY2hNb2RhbCAubW9kYWwtZGlhbG9nLCNhZGQxTW9kYWwgLm1vZGFsLWRpYWxvZywjYWRkcGF5TW9kYWwgLm1vZGFsLWRpYWxvZywjdmlld3BheU1vZGFsIC5tb2RhbC1kaWFsb2cge1xuICAgICAgd2lkdGg6IDc1MHB4O1xuICB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiA1NzZweCl7XG4gICAjaXRlbU1vZGFsIC5tb2RhbC1kaWFsb2csI2VkaXRpdGVtTW9kYWwgLm1vZGFsLWRpYWxvZywjc3ViYnJhbmNoTW9kYWwgLm1vZGFsLWRpYWxvZywjYWRkMU1vZGFsIC5tb2RhbC1kaWFsb2csI2FkZHBheU1vZGFsIC5tb2RhbC1kaWFsb2csI3ZpZXdwYXlNb2RhbCAubW9kYWwtZGlhbG9nIHtcbiAgICAgIG1heC13aWR0aDo3NTBweDtcbiAgfVxuICB9XG4gIC5zZWMxLC5zZWMye1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbiAgLnNlYzF7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgfVxuICAuc2VjMntcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIH1cbiAgaW5wdXRbdHlwZT1cImRhdGVcIl06Zm9jdXM6YmVmb3JlLFxuICAgIGlucHV0W3R5cGU9XCJkYXRlXCJdOnZhbGlkOmJlZm9yZSB7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgIH1cbiAgXG4gICAvKiBpbnB1dFt0eXBlPWRhdGVdOjotd2Via2l0LWRhdGV0aW1lLWVkaXQtdGV4dCB7XG4gICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIGlucHV0W3R5cGU9ZGF0ZV06Oi13ZWJraXQtZGF0ZXRpbWUtZWRpdC1tb250aC1maWVsZHtcbiAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgaW5wdXRbdHlwZT1kYXRlXTo6LXdlYmtpdC1kYXRldGltZS1lZGl0LWRheS1maWVsZCB7XG4gICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIGlucHV0W3R5cGU9ZGF0ZV06Oi13ZWJraXQtZGF0ZXRpbWUtZWRpdC15ZWFyLWZpZWxkIHtcbiAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gIH0qL1xuICBcbiAgIGlucHV0W3R5cGU9XCJkYXRlXCJdOmJlZm9yZSB7XG4gICAgICBjb250ZW50OiBhdHRyKHBsYWNlaG9sZGVyKSAhaW1wb3J0YW50O1xuICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICB9XG4gICAgLmFsbG9faGlzdG9yeSAudGFibGVfYm9keT5kaXYsLmFsbG9faGlzdG9yeSAudGFibGVfaGVhZGluZz5kaXZ7XG4gICAgd2lkdGg6IGNhbGMoKDEwMCUgLSA1MHB4KSAvIDUpO1xuICB9XG4gIC5hbGxvX2hpc3RvcnkgLnRhYmxlX2hlYWRpbmc+ZGl2OmZpcnN0LWNoaWxkLC5hbGxvX2hpc3RvcnkgLnRhYmxlX2JvZHk+ZGl2OmZpcnN0LWNoaWxke1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0O1xuICB9XG4gIC5pbjF7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJhY2tncm91bmQ6ICNDQ0ZGQUM7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gICAgY29sb3I6ICMzMjNDNDc7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5vdXR7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJhY2tncm91bmQ6ICNGRkNGODg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICAgIGNvbG9yOiAjMzIzQzQ3O1xuICB9XG4gICNoaXN0b3J5TW9kYWwgLm1vZGFsLWRpYWxvZywjaGlzdG9yeU1vZGFsIC5tb2RhbC1kaWFsb2cge1xuICAgICAgd2lkdGg6IDY1MHB4O1xuICB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiA1NzZweCl7XG4gICAjaGlzdG9yeU1vZGFsIC5tb2RhbC1kaWFsb2csI2hpc3RvcnlNb2RhbCAubW9kYWwtZGlhbG9nIHtcbiAgICAgIG1heC13aWR0aDo2NTBweDtcbiAgfVxuICB9XG4gICAgLnN1cHBsaWVyX20gLnRhYmxlX2JvZHk+ZGl2LC5zdXBwbGllcl9tIC50YWJsZV9oZWFkaW5nPmRpdntcbiAgICB3aWR0aDogY2FsYygoMTAwJSAtIDIwMHB4KSAvIDUpO1xuICB9XG4gIC5zdXBwbGllcl9tIC50YWJsZV9oZWFkaW5nPmRpdjpsYXN0LWNoaWxkLC5zdXBwbGllcl9tIC50YWJsZV9ib2R5PmRpdjpsYXN0LWNoaWxke1xuICAgIHdpZHRoOiAyMDBweDtcbiAgfVxuICAgIC5wdXJjaGFzZSAudGFibGVfYm9keT5kaXYsLnB1cmNoYXNlIC50YWJsZV9oZWFkaW5nPmRpdntcbiAgICB3aWR0aDogY2FsYygoMTAwJSAtIDEwMHB4KSAvIDYpO1xuICB9XG4gIC5wdXJjaGFzZSAudGFibGVfaGVhZGluZz5kaXY6bGFzdC1jaGlsZCwucHVyY2hhc2UgLnRhYmxlX2JvZHk+ZGl2Omxhc3QtY2hpbGR7XG4gICAgd2lkdGg6IDEwMHB4O1xuICB9XG4gIGlucHV0W3R5cGU9ZmlsZV06Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgI2UzZGFkYjtcbiAgICBwYWRkaW5nOiAuNmVtIC40ZW07XG4gICAgYm9yZGVyLXJhZGl1czogLjJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHRyYW5zaXRpb246IDFzO1xuICAgIGNvbG9yOiAjMTA5Q0YxO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cbiAgXG4gIGlucHV0W3R5cGU9ZmlsZV0ge1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICAgY29sb3I6ICNCNkI1QjE7XG4gICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAuZGl2XzF7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0Q1RDdEQTtcbiAgICB3aWR0aDogMjUlO1xuICAgIGhlaWdodDogMjdyZW07XG4gICAgbWFyZ2luOiAwcHggMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICB9XG4gIC5wdDEwMntcbiAgICBwYWRkaW5nLWJvdHRvbToyMHB4O1xuICB9XG4gIC50ZXh0YXJlYTF7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgfVxuICAuaGVhZGluZzF7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgICBjb2xvcjogIzMzNEQ2RTtcbiAgfVxuICBcbiAgLmRpdl8ye1xuICAgIHdpZHRoOiA3NSU7XG4gICAgbWFyZ2luOiAwcHggMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICB9XG4gIC50YWJsZWhlYWR7XG4gICAgYmFja2dyb3VuZDogI0RGRTVGMDtcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbiAgLnRhYmxlaGVhZD5kaXZ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyA1KTtcbiAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgY29sb3I6ICMzMjNDNDc7XG4gIH1cbiAgLnNlbDF7XG4gICAgd2lkdGg6IDI1MnB4O1xuICAgIGJhY2tncm91bmQ6ICNGQUZBRkE7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0YwRURFRDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIH1cbiAgLnRhYmxlYm9keXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkICNERkU1RjA7XG4gIH1cbiAgLnRhYmxlYm9keT5kaXZ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyA1KTtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBsaW5lLWhlaWdodDogNjBweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICAgIGNvbG9yOiAjMzIzQzQ3O1xuICB9XG4gIC50YWJsZXRvdGFse1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYmFja2dyb3VuZDogI0Q0RkZGMjtcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gICAgY29sb3I6ICMzMjNDNDc7XG4gIH1cbiAgLnRhYmxldG90YWw+ZGl2e1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsaW5lLWhlaWdodDogNjBweDtcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gNSk7XG4gIH1cbiAgLnRhYmxldG90YWw+ZGl2Om50aC1jaGlsZCg0KXtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbiAgLmNyZWF0ZWRfZGF0ZXtcbiAgIC8vIGJhY2tncm91bmQ6dXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcxL3RlYWxfcmVjLnN2Zyk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIHdpZHRoOiAxOTRweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICAgIGNvbG9yOiAjMzIzQzQ3O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgXG4gIH1cbiAgLm1yMTB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cbiAgLmZsZXgzMHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIFxuICAgIFxuICB9XG4gIC5mbGV4MzA+ZGl2e1xuICAgIHBhZGRpbmctbGVmdDoyMHB4O1xuICAgIHdpZHRoOiBjYWxjKCAxMDAlIC8gMyk7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI0U1RTNFRTtcbiAgfVxuICAuZmxleDMwPmRpdjpsYXN0LWNoaWxke1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgfVxuICAubmFtZTJ7XG4gICAgd2lkdGg6IDM0JTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICBcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICAgIGNvbG9yOiAjMzIzQzQ3O1xuICBcbiAgfVxuICAudmFsdWUye1xuICAgIHdpZHRoOiA2NiU7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgY29sb3I6ICAjMzIzQzQ3O1xuICBcbiAgfVxuIFxuICAuZmxleDMwPmRpdjpsYXN0LWNoaWxkIC5uYW1lMntcbiAgICB3aWR0aDogNDUlO1xuICB9XG4gIC5mbGV4MzA+ZGl2Omxhc3QtY2hpbGQgLnZhbHVlMntcbiAgICB3aWR0aDogNTUlO1xuICB9XG4gIC5pdGVtIC50YWJsZWhlYWQ+ZGl2LC5pdGVtIC50YWJsZWJvZHk+ZGl2e1xuICBcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gNCk7XG4gIH1cbiAgLml0ZW0gLnRhYmxldG90YWx7XG4gICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkICNERkU1RjA7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3gtc2hhZG93Om5vbmU7XG4gIFxuICB9XG4gIC5pdGVtIC50YWJsZXRvdGFsPmRpdntcbiAgICB3aWR0aDogY2FsYygxMDAlIC80KTtcbiAgfVxuICAgIC5zYWxlIC50YWJsZV9ib2R5PmRpdiwuc2FsZSAudGFibGVfaGVhZGluZz5kaXZ7XG4gICAgd2lkdGg6IGNhbGMoKDEwMCUgLSAxMDBweCkgLyA2KTtcbiAgfVxuICAuc2FsZSAudGFibGVfaGVhZGluZz5kaXY6bGFzdC1jaGlsZCwuc2FsZSAudGFibGVfYm9keT5kaXY6bGFzdC1jaGlsZHtcbiAgICB3aWR0aDogMTAwcHg7XG4gIH1cbiAgLnNhbGUgLnRhYmxlX2hlYWRpbmc+ZGl2Om50aC1jaGlsZCgxMCksLnNhbGUgLnRhYmxlX2JvZHk+ZGl2Om50aC1jaGlsZCgxMCl7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIH1cbiAgLmRpdl8xMXtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRDVEN0RBO1xuICAgIHdpZHRoOiAyNSU7XG4gICAgaGVpZ2h0OiAzN3JlbTtcbiAgICBtYXJnaW46IDBweCAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gIH1cbiAgXG4gIC5zYWxlX2FkZCAudGFibGVoZWFkPmRpdntcbiAgXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAvIDYpO1xuICBcbiAgfVxuICBcbiAgLnNhbGVfYWRkIC50YWJsZWJvZHk+ZGl2e1xuICBcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gNik7XG4gIFxuICB9XG4gIFxuICAuc2FsZV9hZGQgLnRhYmxldG90YWw+ZGl2e1xuICBcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gNik7XG4gIH1cbiAgLnNhbGVfYWRkIC50YWJsZXRvdGFsPmRpdjpudGgtY2hpbGQoNSl7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG4gIC5maWxlX25hbWV7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgICBjb2xvcjogIzEwOUNGMTtcbiAgXG4gIH1cbiAgICAuaGlzdG9yeSAudGFibGVfYm9keT5kaXYsLmhpc3RvcnkgLnRhYmxlX2hlYWRpbmc+ZGl2e1xuICAgIHdpZHRoOiBjYWxjKCgxMDAlIC0gNTBweCkgLyA1KTtcbiAgfVxuICAuaGlzdG9yeSAudGFibGVfaGVhZGluZz5kaXY6Zmlyc3QtY2hpbGQsLmhpc3RvcnkgLnRhYmxlX2JvZHk+ZGl2OmZpcnN0LWNoaWxke1xuICAgIHdpZHRoOiA1MHB4O1xuICB9XG4gIC5uYXYtaXRlbSB7XG4gICAgLm5hdi1saW5rIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgY29sb3I6ICM0MDU4Nzc7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgfVxuICAgIC5hY3RpdmUge1xuICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzEwOWNmMSAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogIzEwOWNmMSAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuICAubW9kYWwge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgIFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICB9XG4gICAgICAgLnJpZ2h0e1xuICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICB9XG4gICAubW9kYWwtZGlhbG9nIHtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIHRvcDoxMCU7XG4gICAgfVxuICAgIC5tb2RhbC1oZWFkZXI6YmVmb3Jle1xuICAgICAgZGlzcGxheTpub25lO1xuICAgIH1cbiAgICAubW9kYWwtdGl0bGUge1xuICAgICAgY29sb3I6ICMyQjI2MjY7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICB9XG4gIC5lcnJvcm1zZ3tcbiAgICBoZWlnaHQ6MTBweDtcbiAgfVxuICAuaGVscC1ibG9ja3tcbiAgICBjb2xvcjogcmVkO1xuICAgIG1hcmdpbi1ib3R0b206IDAlO1xuICAgIC8vdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctbGVmdDogMnB4O1xuICAgIH1cbiAgICAuY2FuY2Vse1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIGNvbG9yOiAjMTA5Q0YxO1xuICAgICAgICBwYWRkaW5nOiAwcHggMjBweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBib3JkZXI6IHNvbGlkIDJweCAjMTA5Q0YxO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgIH1cbiAgICAuYWxpZ257XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIC5tdWx0aXNlbGVjdHtcbiAgICAgIHdpZHRoOiAzMzBweDtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgbGVmdDogMzBweDtcbiAgICB0b3A6IDYzcHg7XG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBtYXJnaW4tdG9wOjIwcHg7XG4gICAgfVxuICAgICNkZWxldGVzTW9kYWwgLm1vZGFsLWRpYWxvZyB7XG4gICAgICB3aWR0aDogMzUwcHg7XG4gIH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KXtcbiAgI2RlbGV0ZXNNb2RhbCAubW9kYWwtZGlhbG9nIHtcbiAgICAgIG1heC13aWR0aDozNTBweDtcbiAgfVxuICB9XG4gIC5jZW50ZXJ7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiBcbiAgLmRlbGV0ZUltZyxsaXtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW46M3B4O1xuICB9XG4gIC5wX3RpdGxle1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gICAgLy9jb2xvcjogIzJCMjYyNjtcbiAgICBjb2xvcjojMzIzQzQ3O1xuICAgIG1hcmdpbi1ib3R0b206NXB4O1xuICAgIH1cbiAgICAuaGFzLWVycm9yIC5jb250cm9sLWxhYmVse1xuICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgfVxuICAgICAgLmhlbHAtYmxvY2t7XG4gICAgICBjb2xvcjogcmVkO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMCU7XG4gICAgICBcbiAgICAgIH1cbiAgICAgIC50ZXh0LWRhbmdlcntcbiAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OjJweDtcbiAgICAgIH1cbiAgICAuc2Nyb2xsYWJsZXtcbiAgICAgIG1heC1oZWlnaHQ6IDcwdmg7XG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgfVxuICAgIC5kcm9wZG93bi1jb250ZW50MXtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgbWluLXdpZHRoOiAyMDBweDtcbiAgICAgIHJpZ2h0OiAzcHg7XG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgdG9wOiAtMTAwcHg7XG4gICAgICAvL3RvcDotMTFweDtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICBhe1xuICBwYWRkaW5nLWxlZnQ6IDhweDs7XG4gICAgIH1cbiAgICAgIH1cbiAgICAgIC5zZXJ7XG4gICAgICAgIG1hcmdpbjoxMHB4IDBweDtcbiAgICAgIH1cbiAgICAgIC5pbGx1c3RyYXRpb24tY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIC5pbGx1c3RyYXRpb24taW1nIHtcbiAgICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyNSU7XG4gICAgICAgIH1cbiAgICAgIH0gXG4gICAgIiwiQGltcG9ydCBcIi4uL2ludmVudG9yeS1tb2R1bGUuY29tcG9uZW50LnNjc3NcIjtcbkBtZWRpYSBwcmludCB7XG4qe1xuICBtYXJnaW46MnB4O1xufVxuLmhlYWRlciwgLmhpZGUgeyB2aXNpYmlsaXR5OiBoaWRkZW4gfVxuLy8gLmJhY2tidG57XG4vLyAgIGRpc3BsYXk6IG5vbmU7XG4vLyB9XG4ucHJ7XG4gIHBhZGRpbmctbGVmdDogNXB4ICFpbXBvcnRhbnQ7XG59XG4gICAgLm5hbWUye1xuICAgIFxuICBjb2xvcjogIzhCODE3RSAhaW1wb3J0YW50O1xuICAgIFxuICAgIFxuICAgICAgfVxuICAgICAgLmNyZWF0ZWR7XG4gICAgICAtd2Via2l0LXByaW50LWNvbG9yLWFkanVzdDogZXhhY3Q7IFxuICAgICAgLy8gYmFja2dyb3VuZDp1cmwoL2Fzc2V0cy9pbWcxL3RlYWxfcmVjLnN2ZykgIWltcG9ydGFudDtcbiAgICAgICAvL2JhY2tncm91bmQtY29sb3I6IGNhZGV0Ymx1ZSAhaW1wb3J0YW50O1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0ICFpbXBvcnRhbnQ7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgICAgICAgd2lkdGg6IDE5NHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDAgIWltcG9ydGFudDtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW0gIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6ICMxMTBmMGYgIWltcG9ydGFudDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgICBcbiAgICAgIH1cbiAgICAgIC50aGVhZHtcbiAgICAgICAgLXdlYmtpdC1wcmludC1jb2xvci1hZGp1c3Q6IGV4YWN0OyBcbiAgICAgICAgYmFja2dyb3VuZDogI0RGRTVGMCAhaW1wb3J0YW50O1xuICAgICAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSkgIWltcG9ydGFudDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIH1cbiAgICAgIC50Ym9keXtcbiAgICAgICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgI0RGRTVGMCAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgICAgLnRib2R5PmRpdntcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWwgIWltcG9ydGFudDtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW0gIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6ICMzMjNDNDcgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICAgIC50b3RhbHNze1xuICAgICAgICBiYWNrZ3JvdW5kOiAjRDRGRkYyICFpbXBvcnRhbnQ7XG4gICAgICAgIC8vYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpICFpbXBvcnRhbnQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xuICAgICAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiAjMzIzQzQ3ICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgICAudG90YWxzcz5kaXZ7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICAgICAgICBsaW5lLWhlaWdodDogNjBweCAhaW1wb3J0YW50O1xuICAgICAgIFxuICAgICAgfVxuICAgICAgLnZhbHVlMntcbiAgICAgICAgd2lkdGg6IDY2JTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIFxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgICAgIGNvbG9yOiAjNEM1NTVFO1xuICAgICAgXG4gICAgICB9XG5cbiAgICAgXG4gICAgICAudmFse1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgICB9XG5cbiAgICB9XG4gICAgLnRhYmxldG90YWw+ZGl2e1xuICAgICAgbGluZS1oZWlnaHQ6IDQ1cHg7XG4gICAgfVxuICAgIC50YWJsZWJvZHk+ZGl2e1xuICAgICAgbGluZS1oZWlnaHQ6IDQ1cHg7IFxuICAgIH1cbiAgICJdfQ== */";
      /***/
    },

    /***/
    "./src/app/components/inventory-module/purchase-view/purchase-view.component.ts":
    /*!**************************************************************************************!*\
      !*** ./src/app/components/inventory-module/purchase-view/purchase-view.component.ts ***!
      \**************************************************************************************/

    /*! exports provided: PurchaseViewComponent */

    /***/
    function srcAppComponentsInventoryModulePurchaseViewPurchaseViewComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PurchaseViewComponent", function () {
        return PurchaseViewComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _services_export_to_pdf_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../services/export-to-pdf.service */
      "./src/app/services/export-to-pdf.service.ts");
      /* harmony import */


      var _services_excel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../services/excel.service */
      "./src/app/services/excel.service.ts");
      /* harmony import */


      var _services_message_show_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../services/message-show.service */
      "./src/app/services/message-show.service.ts");
      /* harmony import */


      var _services_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../services/http.service */
      "./src/app/services/http.service.ts");
      /* harmony import */


      var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../services/authenticator.service */
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

      var __importDefault = undefined && undefined.__importDefault || function (mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };

      var PurchaseViewComponent =
      /** @class */
      function () {
        var PurchaseViewComponent = /*#__PURE__*/function () {
          function PurchaseViewComponent(httpService, auth, msgService, _pdfService, excelService) {
            _classCallCheck(this, PurchaseViewComponent);

            this.httpService = httpService;
            this.auth = auth;
            this.msgService = msgService;
            this._pdfService = _pdfService;
            this.excelService = excelService;
            this.purchaseAllData = [];
            this.sizeArr = [25, 50, 100, 150, 200, 500, 1000];
            this.pageIndex = 1;
            this.totalRecords = 0;
            this.displayBatchSize = 25;
            this.staticPageData = [];
            this.staticPageDataSouece = [];
            this.viewDatas = [];
            this.institute_id = sessionStorage.getItem('institute_id');
            this.DataForView = [];
          }

          _createClass(PurchaseViewComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.viewDatas = sessionStorage.getItem('viewData');
              this.getViewDataById();
            }
          }, {
            key: "getViewDataById",
            value: function getViewDataById() {
              var _this39 = this;

              this.auth.showLoader();
              this.httpService.getData('/api/v1/inventory/purchase/' + this.viewDatas + '?instituteId=' + this.institute_id).subscribe(function (res) {
                _this39.DataForView = res.result;

                _this39.auth.hideLoader();
              }, function (err) {
                _this39.auth.hideLoader();
              });
            }
          }, {
            key: "ngOnDestory",
            value: function ngOnDestory() {
              sessionStorage.removeItem('viewData');
            }
          }, {
            key: "printData",
            value: function printData(divName) {
              //window.print();
              var printContents = document.getElementById(divName).innerHTML;
              var originalContents = document.body.innerHTML;
              document.body.innerHTML = printContents;
              window.print();
              document.body.innerHTML = originalContents;
            }
          }]);

          return PurchaseViewComponent;
        }();

        PurchaseViewComponent.ctorParameters = function () {
          return [{
            type: _services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]
          }, {
            type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticatorService"]
          }, {
            type: _services_message_show_service__WEBPACK_IMPORTED_MODULE_3__["MessageShowService"]
          }, {
            type: _services_export_to_pdf_service__WEBPACK_IMPORTED_MODULE_1__["ExportToPdfService"]
          }, {
            type: _services_excel_service__WEBPACK_IMPORTED_MODULE_2__["ExcelService"]
          }];
        };

        PurchaseViewComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
          selector: 'app-purchase-view',
          template: __importDefault(__webpack_require__(
          /*! raw-loader!./purchase-view.component.html */
          "./node_modules/raw-loader/dist/cjs.js!./src/app/components/inventory-module/purchase-view/purchase-view.component.html"))["default"],
          styles: [__importDefault(__webpack_require__(
          /*! ./purchase-view.component.scss */
          "./src/app/components/inventory-module/purchase-view/purchase-view.component.scss"))["default"]]
        }), __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"], _services_authenticator_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticatorService"], _services_message_show_service__WEBPACK_IMPORTED_MODULE_3__["MessageShowService"], _services_export_to_pdf_service__WEBPACK_IMPORTED_MODULE_1__["ExportToPdfService"], _services_excel_service__WEBPACK_IMPORTED_MODULE_2__["ExcelService"]])], PurchaseViewComponent);
        return PurchaseViewComponent;
      }();
      /***/

    },

    /***/
    "./src/app/components/inventory-module/replacenull.pipe.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/components/inventory-module/replacenull.pipe.ts ***!
      \*****************************************************************/

    /*! exports provided: ReplacenullPipe */

    /***/
    function srcAppComponentsInventoryModuleReplacenullPipeTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReplacenullPipe", function () {
        return ReplacenullPipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var ReplacenullPipe =
      /** @class */
      function () {
        var ReplacenullPipe = /*#__PURE__*/function () {
          function ReplacenullPipe() {
            _classCallCheck(this, ReplacenullPipe);
          }

          _createClass(ReplacenullPipe, [{
            key: "transform",
            value: function transform(value) {
              var repleceText = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '-';

              if (typeof value === 'undefined' || value === null) {
                return repleceText;
              }

              return value;
            }
          }]);

          return ReplacenullPipe;
        }();

        ReplacenullPipe = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
          name: 'replacenull'
        })], ReplacenullPipe);
        return ReplacenullPipe;
      }();
      /***/

    },

    /***/
    "./src/app/components/inventory-module/sale-add/sale-add.component.scss":
    /*!******************************************************************************!*\
      !*** ./src/app/components/inventory-module/sale-add/sale-add.component.scss ***!
      \******************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsInventoryModuleSaleAddSaleAddComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "* {\n  margin: 0px;\n}\n\nbody {\n  font-family: 'Open Sans', sans-serif;\n}\n\n.flex {\n  display: flex;\n}\n\n.blue_button {\n  background-color: #109CF1;\n  color: white;\n  padding: 0px 20px;\n  font-size: 13px;\n  border: none;\n  border-radius: 5px;\n  font-weight: 600;\n  line-height: 35px;\n  cursor: pointer;\n}\n\n.white_button {\n  background-color: #fff;\n  color: #109CF1;\n  padding: 0px 20px;\n  font-size: 12px;\n  border: 1px solid #109CF1;\n  border-radius: 5px;\n  font-weight: 500;\n  line-height: 35px;\n  cursor: pointer;\n}\n\n.select {\n  padding: 7px 20px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-size: 12px;\n  font-weight: 500;\n  color: #787A7D;\n}\n\n.input {\n  padding: 7px 20px;\n  font-size: 12px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-weight: 500;\n  height: 35px;\n}\n\ninput:focus, select:focus, button:focus {\n  outline: none;\n}\n\n.page_heading > p {\n  color: #334D6E;\n  font-weight: 600;\n  font-size: 14px;\n  margin-bottom: 0px;\n}\n\n.flex {\n  display: flex;\n}\n\n.display {\n  display: flex;\n  justify-content: space-between;\n}\n\n.w98 {\n  width: 98%;\n  margin: 0px auto;\n}\n\n.head_padding {\n  box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  -webkit-box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  -moz-box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  padding: 15px 0px;\n}\n\n.pageheadingspace {\n  margin-bottom: 7px;\n}\n\n.table_heading {\n  width: 100%;\n  background-color: #DFE5F0;\n  /* padding: 10px 0px;*/\n  display: flex;\n  border-radius: 5px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);\n}\n\n.table_heading > div {\n  text-align: center;\n  font-weight: 600;\n  font-size: 12px;\n  color: #323C47;\n  line-height: 35px;\n  text-align: left;\n}\n\n.table_body {\n  width: 100%;\n  display: flex;\n  border-radius: 5px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);\n  text-align: left;\n  line-height: 18px;\n}\n\n.table_body > div {\n  text-align: left;\n  font-weight: 500;\n  font-size: 12px;\n  color: #323C47;\n  /* padding: 5px 0px;*/\n  margin: auto;\n  line-height: 18px;\n}\n\n.mr10 {\n  margin-right: 10px;\n}\n\n.w240 {\n  width: 240px;\n}\n\n.item_cat .table_body > div, .item_cat .table_heading > div {\n  width: calc((100% - 250px) / 2);\n}\n\n.item_cat .table_heading > div:first-child, .item_cat .table_body > div:first-child {\n  width: 50px;\n}\n\n.item_cat .table_heading > div:last-child, .item_cat .table_body > div:last-child {\n  width: 200px;\n}\n\n.group18 {\n  width: 18px;\n  height: auto;\n}\n\n.pt15 {\n  padding-top: 15px;\n  padding-bottom: 5px;\n}\n\n.bottom_pagignation {\n  padding-top: 10px;\n  background-color: #fff;\n  position: fixed;\n  bottom: 0px;\n  z-index: 100;\n}\n\n.bottom_pagignation p {\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 20px;\n}\n\n.bottom_pagignation select {\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-size: 13px;\n  font-weight: 500;\n  color: #0079FF;\n  display: inline;\n}\n\n.bottom_pagignation .w20 {\n  width: 20%;\n}\n\n.bottom_pagignation .w10 {\n  width: 10%;\n}\n\n.bottom_pagignation .w50 {\n  width: 50%;\n}\n\n.bottom_pagignation .w40 {\n  width: 40%;\n}\n\n.number {\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 20px;\n  letter-spacing: 0.01em;\n  color: #000000;\n  margin: 0px 4px;\n}\n\n.active_circle {\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 20px;\n  letter-spacing: 0.01em;\n  color: #fff;\n  padding: 2px 7px;\n  border-radius: 50%;\n  background: #0079FF;\n}\n\n.next {\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 20px;\n  letter-spacing: 0.01em;\n  color: #0079FF;\n}\n\n.w450 {\n  width: 450px;\n}\n\n.white {\n  background-color: #fff;\n  width: calc(100% - 227px);\n  border-top: 3px solid #Ededed;\n}\n\n.nav-item .nav-link {\n  font-weight: 600;\n  color: #405877;\n  padding-bottom: 8px;\n  cursor: pointer;\n  font-size: 13px;\n}\n\n.nav-item .nav-link.active {\n  border-bottom: 3px solid #109CF1 !important;\n  color: #109CF1 !important;\n}\n\n.nav-link {\n  display: block;\n  padding: 1.5rem 0rem;\n  margin: -1rem 1.5rem;\n  margin-left: 0rem;\n}\n\n.flex {\n  display: flex;\n}\n\n.w15 {\n  width: 15%;\n  background-color: #DFE5F0;\n  padding: 10px;\n}\n\n.list > li {\n  background-color: #fff;\n  padding: 7px 0px;\n  margin: 7px 0px;\n}\n\n.list > li > a > span {\n  text-decoration: none;\n  font-size: 10px;\n  font-weight: 500;\n  color: #334D6E;\n}\n\n.list > li img {\n  padding: 0px 10px;\n}\n\n.magnifying-glass {\n  background-image: url(\"/assets/images/assets/Vector.svg\");\n  background-repeat: no-repeat;\n  background-position: left center;\n  text-indent: 10px;\n}\n\n.space33 {\n  padding-left: 5px;\n}\n\n.item_man .table_body > div, .item_man .table_heading > div {\n  width: calc((100% - 100px) / 8);\n}\n\n.item_man .table_heading > div:last-child, .item_man .table_body > div:last-child {\n  width: 100px;\n}\n\n.item_man .table_heading > div:nth-child(5), .item_man .table_heading > div:nth-child(6), .item_man .table_heading > div:nth-child(8) {\n  line-height: 18px;\n}\n\n.dropdown1 {\n  position: relative;\n  display: inline-block;\n  line-height: 35px;\n}\n\n.dropdown-content1 {\n  display: none;\n  position: absolute;\n  background-color: #fff;\n  min-width: 200px;\n  right: 3px;\n  margin-top: 20px;\n  top: -150px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1200;\n}\n\n.dropdown-content1 a {\n  color: black;\n  text-decoration: none;\n  display: block;\n}\n\n.dropdown-content1 a:hover {\n  background-color: #ddd;\n  border-radius: 5px;\n}\n\n.dropdown1:hover .dropdown-content1 {\n  display: block;\n}\n\n.dot3 {\n  padding: 10px 0px;\n  cursor: pointer;\n}\n\n.wid100 {\n  width: 100%;\n}\n\n.wid80 {\n  width: 80%;\n}\n\n.pt10 {\n  padding-bottom: 10px;\n}\n\ninput[type=\"date\"]::-webkit-calendar-picker-indicator {\n  color: rgba(0, 0, 0, 0);\n  opacity: 1;\n  display: block;\n  background: url('cal.svg') no-repeat;\n  width: 20px;\n  height: 20px;\n  border-width: thin;\n  padding: 2px 0px;\n}\n\ninput[type=\"date\"] {\n  color: #787A7D;\n  cursor: pointer;\n}\n\ninput:focus {\n  outline: none;\n}\n\nbutton:focus {\n  outline: none;\n}\n\n.modal textarea {\n  height: 100px;\n}\n\n.alert {\n  font-weight: 400;\n  font-size: 18px;\n  line-height: 27px;\n  letter-spacing: 0.01em;\n  color: #4D5869;\n}\n\n.alert_text {\n  text-align: justify;\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 19px;\n  letter-spacing: 0.01em;\n  color: #858585;\n  margin: 0px 40px;\n  margin-top: 20px;\n}\n\n.center {\n  text-align: center;\n}\n\n.center img {\n  width: 44px;\n  height: 34px;\n}\n\n#delete1Modal .modal-dialog, #deleteitemModal .modal-dialog {\n  width: 350px;\n}\n\n@media (min-width: 576px) {\n  #delete1Modal .modal-dialog, #deleteitemModal .modal-dialog {\n    max-width: 350px;\n  }\n}\n\n#deleteModal .modal-dialog {\n  width: 350px;\n}\n\n@media (min-width: 576px) {\n  #deleteModal .modal-dialog {\n    max-width: 350px;\n  }\n}\n\n.pt101 {\n  padding-top: 30px;\n  margin: 0px 30px;\n}\n\n#itemModal .modal-dialog, #edititemModal .modal-dialog, #subbranchModal .modal-dialog, #add1Modal .modal-dialog, #addpayModal .modal-dialog, #viewpayModal .modal-dialog {\n  width: 750px;\n}\n\n@media (min-width: 576px) {\n  #itemModal .modal-dialog, #edititemModal .modal-dialog, #subbranchModal .modal-dialog, #add1Modal .modal-dialog, #addpayModal .modal-dialog, #viewpayModal .modal-dialog {\n    max-width: 750px;\n  }\n}\n\n.sec1, .sec2 {\n  width: 50%;\n}\n\n.sec1 {\n  padding-right: 10px;\n}\n\n.sec2 {\n  padding-left: 10px;\n}\n\ninput[type=\"date\"]:focus:before,\ninput[type=\"date\"]:valid:before {\n  content: \"\";\n}\n\n/* input[type=date]::-webkit-datetime-edit-text {\n      -webkit-appearance: none;\n      display: none;\n  }\n  input[type=date]::-webkit-datetime-edit-month-field{\n      -webkit-appearance: none;\n      display: none;\n  }\n  input[type=date]::-webkit-datetime-edit-day-field {\n      -webkit-appearance: none;\n      display: none;\n  }\n  input[type=date]::-webkit-datetime-edit-year-field {\n      -webkit-appearance: none;\n      display: none;\n  }*/\n\ninput[type=\"date\"]:before {\n  content: attr(placeholder) !important;\n  padding-right: 20px;\n}\n\n.allo_history .table_body > div, .allo_history .table_heading > div {\n  width: calc((100% - 50px) / 5);\n}\n\n.allo_history .table_heading > div:first-child, .allo_history .table_body > div:first-child {\n  width: 50px;\n  line-height: 4;\n}\n\n.in1 {\n  display: inline-block;\n  background: #CCFFAC;\n  border-radius: 5px;\n  width: 40px;\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 24px;\n  letter-spacing: 0.01em;\n  color: #323C47;\n  text-align: center;\n}\n\n.out {\n  display: inline-block;\n  background: #FFCF88;\n  border-radius: 5px;\n  width: 40px;\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 24px;\n  text-align: center;\n  letter-spacing: 0.01em;\n  color: #323C47;\n}\n\n#historyModal .modal-dialog, #historyModal .modal-dialog {\n  width: 650px;\n}\n\n@media (min-width: 576px) {\n  #historyModal .modal-dialog, #historyModal .modal-dialog {\n    max-width: 650px;\n  }\n}\n\n.supplier_m .table_body > div, .supplier_m .table_heading > div {\n  width: calc((100% - 200px) / 5);\n}\n\n.supplier_m .table_heading > div:last-child, .supplier_m .table_body > div:last-child {\n  width: 200px;\n}\n\n.purchase .table_body > div, .purchase .table_heading > div {\n  width: calc((100% - 100px) / 6);\n}\n\n.purchase .table_heading > div:last-child, .purchase .table_body > div:last-child {\n  width: 100px;\n}\n\ninput[type=file]::-webkit-file-upload-button {\n  border: none;\n  border-right: 2px solid #e3dadb;\n  padding: .6em .4em;\n  border-radius: .2em;\n  background-color: #fff;\n  -webkit-transition: 1s;\n  transition: 1s;\n  color: #109CF1;\n  outline: none;\n}\n\ninput[type=file] {\n  padding: 0px;\n  color: #B6B5B1;\n  cursor: pointer;\n}\n\n.div_1 {\n  border: 1px solid #D5D7DA;\n  width: 25%;\n  height: 27rem;\n  margin: 0px 10px;\n  border-radius: 5px;\n  margin-top: 20px;\n  padding: 20px;\n}\n\n.pt102 {\n  padding-bottom: 20px;\n}\n\n.textarea1 {\n  height: 100px;\n}\n\n.heading1 {\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: 0.01em;\n  color: #334D6E;\n}\n\n.div_2 {\n  width: 75%;\n  margin: 0px 10px;\n  border-radius: 5px;\n  margin-top: 20px;\n  padding: 20px;\n}\n\n.tablehead {\n  background: #DFE5F0;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n  line-height: 40px;\n  display: flex;\n}\n\n.tablehead > div {\n  text-align: center;\n  width: calc(100% / 5);\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 40px;\n  text-align: center;\n  letter-spacing: 0.01em;\n  color: #323C47;\n}\n\n.sel1 {\n  width: 252px;\n  background: #FAFAFA;\n  border: 1px solid #F0EDED;\n  border-radius: 4px;\n}\n\n.tablebody {\n  display: flex;\n  border-bottom: 1px solid #DFE5F0;\n}\n\n.tablebody > div {\n  text-align: center;\n  width: calc(100% / 5);\n  font-weight: normal;\n  font-size: 13px;\n  line-height: 60px;\n  letter-spacing: 0.01em;\n  color: #323C47;\n}\n\n.tabletotal {\n  display: flex;\n  background: #D4FFF2;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n  font-weight: 600;\n  font-size: 13px;\n  letter-spacing: 0.01em;\n  color: #323C47;\n}\n\n.tabletotal > div {\n  text-align: center;\n  line-height: 60px;\n  width: calc(100% / 5);\n}\n\n.tabletotal > div:nth-child(4) {\n  font-weight: 700;\n  font-size: 16px;\n}\n\n.created_date {\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 194px;\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 30px;\n  letter-spacing: 0.01em;\n  color: #323C47;\n  text-align: center;\n}\n\n.mr10 {\n  margin-right: 10px;\n}\n\n.flex30 {\n  display: flex;\n}\n\n.flex30 > div {\n  padding-left: 20px;\n  width: calc( 100% / 3);\n  line-height: 30px;\n  border-right: 1px solid #E5E3EE;\n}\n\n.flex30 > div:last-child {\n  border-right: none;\n}\n\n.name2 {\n  width: 34%;\n  font-weight: 600;\n  font-size: 12px;\n  letter-spacing: 0.01em;\n  color: #323C47;\n}\n\n.value2 {\n  width: 66%;\n  font-weight: 400;\n  font-size: 12px;\n  letter-spacing: 0.01em;\n  color: #323C47;\n}\n\n.flex30 > div:last-child .name2 {\n  width: 45%;\n}\n\n.flex30 > div:last-child .value2 {\n  width: 55%;\n}\n\n.item .tablehead > div, .item .tablebody > div {\n  width: calc(100% / 4);\n}\n\n.item .tabletotal {\n  border-bottom: 1px solid #DFE5F0;\n  background: #fff;\n  box-shadow: none;\n}\n\n.item .tabletotal > div {\n  width: calc(100% /4);\n}\n\n.sale .table_body > div, .sale .table_heading > div {\n  width: calc((100% - 100px) / 6);\n}\n\n.sale .table_heading > div:last-child, .sale .table_body > div:last-child {\n  width: 100px;\n}\n\n.sale .table_heading > div:nth-child(10), .sale .table_body > div:nth-child(10) {\n  line-height: 18px;\n}\n\n.div_11 {\n  border: 1px solid #D5D7DA;\n  width: 25%;\n  height: 37rem;\n  margin: 0px 10px;\n  border-radius: 5px;\n  margin-top: 20px;\n  padding: 20px;\n}\n\n.sale_add .tablehead > div {\n  width: calc(100% / 6);\n}\n\n.sale_add .tablebody > div {\n  width: calc(100% / 6);\n}\n\n.sale_add .tabletotal > div {\n  width: calc(100% / 6);\n}\n\n.sale_add .tabletotal > div:nth-child(5) {\n  font-weight: 700;\n  font-size: 16px;\n}\n\n.file_name {\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 18px;\n  letter-spacing: 0.01em;\n  color: #109CF1;\n}\n\n.history .table_body > div, .history .table_heading > div {\n  width: calc((100% - 50px) / 5);\n}\n\n.history .table_heading > div:first-child, .history .table_body > div:first-child {\n  width: 50px;\n}\n\n.nav-item .nav-link {\n  font-weight: 600;\n  color: #405877;\n  padding-bottom: 8px;\n  padding-top: 10px;\n  cursor: pointer;\n  font-size: 13px;\n  float: left;\n  background: none;\n}\n\n.nav-item .active {\n  border-bottom: 3px solid #109cf1 !important;\n  color: #109cf1 !important;\n}\n\n.modal {\n  width: 100%;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n}\n\n.right {\n  float: left;\n  margin: 5px;\n}\n\n.modal-dialog {\n  margin: 0 auto;\n  top: 10%;\n}\n\n.modal-header:before {\n  display: none;\n}\n\n.modal-title {\n  color: #2B2626;\n  font-weight: 600;\n  font-size: 13px;\n  font-family: 'Open Sans', sans-serif;\n  margin-bottom: 0px;\n}\n\n.errormsg {\n  height: 10px;\n}\n\n.help-block {\n  color: red;\n  margin-bottom: 0%;\n  padding-left: 2px;\n}\n\n.cancel {\n  background-color: white;\n  color: #109CF1;\n  padding: 0px 20px;\n  font-size: 12px;\n  border: solid 2px #109CF1;\n  border-radius: 5px;\n  font-weight: 500;\n  height: 35px;\n  margin-right: 15px;\n}\n\n.align {\n  text-align: center;\n}\n\n.multiselect {\n  width: 330px;\n  height: 35px;\n  left: 30px;\n  top: 63px;\n  background: #FFFFFF;\n  box-sizing: border-box;\n  border-radius: 4px;\n  margin-top: 20px;\n}\n\n#deletesModal .modal-dialog {\n  width: 350px;\n}\n\n@media (min-width: 576px) {\n  #deletesModal .modal-dialog {\n    max-width: 350px;\n  }\n}\n\n.center {\n  text-align: center;\n}\n\n.deleteImg, li {\n  float: left;\n  margin: 3px;\n}\n\n.p_title {\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 15px;\n  letter-spacing: 0.01em;\n  color: #323C47;\n  margin-bottom: 5px;\n}\n\n.has-error .control-label {\n  color: black;\n}\n\n.help-block {\n  color: red;\n  margin-bottom: 0%;\n}\n\n.text-danger {\n  color: red;\n  padding-left: 2px;\n}\n\n.scrollable {\n  max-height: 70vh;\n  overflow-y: auto;\n}\n\n.dropdown-content1 {\n  display: none;\n  position: absolute;\n  background-color: #fff;\n  min-width: 200px;\n  right: 3px;\n  margin-top: 20px;\n  top: -100px;\n  text-align: left;\n  border-radius: 10px;\n}\n\n.dropdown-content1 a {\n  padding-left: 8px;\n}\n\n.ser {\n  margin: 10px 0px;\n}\n\n.illustration-container {\n  display: block;\n}\n\n.illustration-container .illustration-img {\n  width: 40%;\n  margin-left: 25%;\n}\n\n.pt102 {\n  padding-bottom: 10px;\n}\n\n.textarea1 {\n  height: 68px;\n}\n\n.div_11 {\n  height: 42rem;\n}\n\n.hi > div {\n  width: 31%;\n}\n\n.hi {\n  padding: 10px;\n  padding-left: 0px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbnZlbnRvcnktbW9kdWxlL2ludmVudG9yeS1tb2R1bGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaW52ZW50b3J5LW1vZHVsZS9zYWxlLWFkZC9zYWxlLWFkZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVc7QUNDZjs7QURFRTtFQUNFLG9DQUFvQztBQ0N4Qzs7QURDRTtFQUNFLGFBQWE7QUNFakI7O0FEQUU7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGVBQWU7QUNHbkI7O0FEREU7RUFDRSxzQkFBc0I7RUFDdEIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YseUJBQXdCO0VBQ3hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGVBQWU7QUNJbkI7O0FERkc7RUFDQyxpQkFBaUI7RUFFakIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0FDSWxCOztBREZFO0VBQ0UsaUJBQWlCO0VBRWpCLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDZCxZQUFXO0FDSWpCOztBRERHO0VBQ0ksYUFBYTtBQ0lwQjs7QURGRTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGtCQUFrQjtBQ0t0Qjs7QURIRTtFQUNFLGFBQWE7QUNNakI7O0FESkU7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0FDT2xDOztBRExFO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtBQ1FwQjs7QURORTtFQUNJLCtDQUE0QztFQUM1Qyx1REFBb0Q7RUFDcEQsb0RBQWlEO0VB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QUFpQjtFQUNqQixzQkFBc0I7RUFFdEIsY0FBYTtFQUNiLGtCQUFpQjtBQytGckI7O0FEN0ZJO0VBQ0UsWUFBWTtBQ2dHbEI7O0FEOUZNO0VBQ0EsVUFBVTtFQUNWLGlCQUFpQjtBQ2lHdkI7O0FEOUZNO0VBQ0UsVUFBVTtFQUNWLGlCQUFnQjtBQ2lHeEI7O0FEL0ZJO0VBQ0UsZ0JBQWdCO0VBQ2QsZ0JBQWdCO0FDa0d4Qjs7QURoR0k7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixXQUFXO0VBRVgsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQ2tHekI7O0FENUdJO0VBWUYsaUJBQWlCO0FDb0duQjs7QURqR007RUFDRSxnQkFBZTtBQ29HdkI7O0FEbEdNO0VBQ0UsY0FBYztBQ3FHdEI7O0FEdEdNO0VBR0ksVUFBVTtFQUNWLGdCQUFnQjtBQ3VHMUI7O0FBNTZCQTtFQUNJLG9CQUFvQjtBQSs2QnhCOztBQTc2QkE7RUFDSSxZQUFZO0FBZzdCaEI7O0FBOTZCQTtFQUNJLGFBQWE7QUFpN0JqQjs7QUEvNkJBO0VBQ0ksVUFBUztBQWs3QmI7O0FBaDdCQztFQUNHLGFBQWE7RUFDYixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLDBCQUEwQjtFQUMxQiwrQkFBK0I7RUFDL0IsOEJBQThCO0FBbTdCbEMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2ludmVudG9yeS1tb2R1bGUvc2FsZS1hZGQvc2FsZS1hZGQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xuICAgIG1hcmdpbjogMHB4O1xuICAgIFxuICB9XG4gIGJvZHl7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICB9XG4gIC5mbGV4e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbiAgLmJsdWVfYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTA5Q0YxO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAwcHggMjBweDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAud2hpdGVfYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGNvbG9yOiAjMTA5Q0YxO1xuICAgIHBhZGRpbmc6IDBweCAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBib3JkZXI6MXB4IHNvbGlkICMxMDlDRjE7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gICAuc2VsZWN0e1xuICAgIHBhZGRpbmc6IDdweCAyMHB4O1xuICAgLy8gcGFkZGluZzogN3B4IDJweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAjNzg3QTdEO1xuICB9XG4gIC5pbnB1dHtcbiAgICBwYWRkaW5nOiA3cHggMjBweDtcbiAgICBcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgaGVpZ2h0OjM1cHg7XG4gICAgfVxuXG4gICBpbnB1dDpmb2N1cywgc2VsZWN0OmZvY3VzLGJ1dHRvbjpmb2N1c3tcbiAgICAgICBvdXRsaW5lOiBub25lO1xuICAgfVxuICAucGFnZV9oZWFkaW5nPnB7XG4gICAgY29sb3I6ICMzMzRENkU7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICB9XG4gIC5mbGV4e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbiAgLmRpc3BsYXl7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cbiAgLnc5OHtcbiAgICB3aWR0aDogOTglO1xuICAgIG1hcmdpbjogMHB4IGF1dG87XG4gIH1cbiAgLmhlYWRfcGFkZGluZ3tcbiAgICAgIGJveC1zaGFkb3c6IDBweCA3cHggNXB4IC0zcHggcmdiYSgwLDAsMCwwLjEpO1xuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggN3B4IDVweCAtM3B4IHJnYmEoMCwwLDAsMC4xKTtcbiAgICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDdweCA1cHggLTNweCByZ2JhKDAsMCwwLDAuMSk7XG4gICAgcGFkZGluZzogMTVweCAwcHg7XG4gIH1cbiAgLnBhZ2VoZWFkaW5nc3BhY2V7XG4gICAgbWFyZ2luLWJvdHRvbTogN3B4O1xuICB9XG4gIC50YWJsZV9oZWFkaW5ne1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNERkU1RjA7XG4gICAvKiBwYWRkaW5nOiAxMHB4IDBweDsqL1xuICAgIC8vbWFyZ2luOiAxMHB4IDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICBcbiAgfVxuICBcbiAgLnRhYmxlX2hlYWRpbmc+ZGl2e1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogIzMyM0M0NztcbiAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuICBcbiAgLnRhYmxlX2JvZHl7XG4gICAgIHdpZHRoOiAxMDAlO1xuICAgIC8vbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBsaW5lLWhlaWdodDogMThweDtcbiAgfVxuICAudGFibGVfYm9keT5kaXZ7XG4gICAgXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogIzMyM0M0NztcbiAgIC8qIHBhZGRpbmc6IDVweCAwcHg7Ki9cbiAgICAgbWFyZ2luOiBhdXRvO1xuICAgICBsaW5lLWhlaWdodDogMThweDtcbiAgXG4gIH1cbiAgXG4gIC5tcjEwe1xuICBtYXJnaW4tcmlnaHQ6MTBweDtcbiAgfVxuICAudzI0MHtcbiAgIHdpZHRoOiAyNDBweDtcbiAgfVxuICBcbiAgLml0ZW1fY2F0IC50YWJsZV9ib2R5PmRpdiwuaXRlbV9jYXQgLnRhYmxlX2hlYWRpbmc+ZGl2e1xuICAgIHdpZHRoOiBjYWxjKCgxMDAlIC0gMjUwcHgpIC8gMik7XG4gIH1cbiAgLml0ZW1fY2F0IC50YWJsZV9oZWFkaW5nPmRpdjpmaXJzdC1jaGlsZCwuaXRlbV9jYXQgLnRhYmxlX2JvZHk+ZGl2OmZpcnN0LWNoaWxke1xuICAgIHdpZHRoOiA1MHB4O1xuICB9XG4gIC5pdGVtX2NhdCAudGFibGVfaGVhZGluZz5kaXY6bGFzdC1jaGlsZCwuaXRlbV9jYXQgLnRhYmxlX2JvZHk+ZGl2Omxhc3QtY2hpbGR7XG4gICAgd2lkdGg6IDIwMHB4O1xuICB9XG4gIC5ncm91cDE4e1xuICAgIHdpZHRoOiAxOHB4O1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuICAucHQxNXtcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICB9XG4gIC5ib3R0b21fcGFnaWduYXRpb257XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMHB4O1xuICAgIHotaW5kZXg6IDEwMDtcbiAgfVxuICAuYm90dG9tX3BhZ2lnbmF0aW9uIHB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIH1cbiAgLmJvdHRvbV9wYWdpZ25hdGlvbiBzZWxlY3R7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogIzAwNzlGRjtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gIH1cbiAgLmJvdHRvbV9wYWdpZ25hdGlvbiAudzIwe1xuICAgIHdpZHRoOiAyMCU7XG4gIH1cbiAgLmJvdHRvbV9wYWdpZ25hdGlvbiAudzEwe1xuICAgIHdpZHRoOiAxMCU7XG4gIH1cbiAgLmJvdHRvbV9wYWdpZ25hdGlvbiAudzUwe1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbiAgLmJvdHRvbV9wYWdpZ25hdGlvbiAudzQwe1xuICAgIHdpZHRoOiA0MCU7XG4gIH1cbiAgLm51bWJlcntcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBtYXJnaW46MHB4IDRweDtcbiAgfVxuICAuYWN0aXZlX2NpcmNsZXtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzoycHggN3B4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICMwMDc5RkY7XG4gIH1cbiAgLm5leHR7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgY29sb3I6ICMwMDc5RkY7XG4gIFxuICB9XG4gIC53NDUwe1xuICAgIHdpZHRoOiA0NTBweDtcbiAgfVxuICAud2hpdGV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMjI3cHgpO1xuICAgIGJvcmRlci10b3A6IDNweCBzb2xpZCAjRWRlZGVkO1xuICB9XG4gIC5uYXYtaXRlbSAubmF2LWxpbmt7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY29sb3I6ICM0MDU4Nzc7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgZm9udC1zaXplOiAxM3B4XG4gIH1cbiAgXG4gIC5uYXYtaXRlbSAubmF2LWxpbmsuYWN0aXZlIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICMxMDlDRjEgIWltcG9ydGFudDtcbiAgICAgIGNvbG9yOiAjMTA5Q0YxICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm5hdi1saW5rIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgcGFkZGluZzogMS41cmVtIDByZW07XG4gICAgICBtYXJnaW46IC0xcmVtIDEuNXJlbTtcbiAgICAgIG1hcmdpbi1sZWZ0OiAwcmVtO1xuICB9XG4gIC5mbGV4e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbiAgLncxNXtcbiAgICB3aWR0aDogMTUlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNERkU1RjA7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxuICAubGlzdD5saXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDdweCAwcHg7XG4gICAgbWFyZ2luOiA3cHggMHB4O1xuICB9XG4gIC5saXN0PmxpPmE+c3BhbntcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogIzMzNEQ2RTtcbiAgfVxuICAubGlzdD5saSBpbWd7XG4gIHBhZGRpbmc6IDBweCAxMHB4O1xuICB9IFxuICAubWFnbmlmeWluZy1nbGFzc3tcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2Fzc2V0cy9WZWN0b3Iuc3ZnJyk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOmxlZnQgY2VudGVyO1xuICAgIHRleHQtaW5kZW50OiAxMHB4O1xuICB9XG4gIC5zcGFjZTMze1xuICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICB9XG4gIC5pdGVtX21hbiAudGFibGVfYm9keT5kaXYsLml0ZW1fbWFuIC50YWJsZV9oZWFkaW5nPmRpdntcbiAgICB3aWR0aDogY2FsYygoMTAwJSAtIDEwMHB4KSAvIDgpO1xuICB9XG4gIFxuICAuaXRlbV9tYW4gLnRhYmxlX2hlYWRpbmc+ZGl2Omxhc3QtY2hpbGQsLml0ZW1fbWFuIC50YWJsZV9ib2R5PmRpdjpsYXN0LWNoaWxke1xuICAgIHdpZHRoOiAxMDBweDtcbiAgfVxuICAuaXRlbV9tYW4gLnRhYmxlX2hlYWRpbmc+ZGl2Om50aC1jaGlsZCg1KSwuaXRlbV9tYW4gLnRhYmxlX2hlYWRpbmc+ZGl2Om50aC1jaGlsZCg2KSwuaXRlbV9tYW4gLnRhYmxlX2hlYWRpbmc+ZGl2Om50aC1jaGlsZCg4KXtcbiAgICBsaW5lLWhlaWdodDogMThweDt9XG4gIFxuICAuZHJvcGRvd24xIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICB9XG4gIFxuICAuZHJvcGRvd24tY29udGVudDEge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgbWluLXdpZHRoOjIwMHB4O1xuICAgIHJpZ2h0OjNweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIHRvcDogLTE1MHB4O1xuICAgIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLDAsMCwwLjIpO1xuICAgIHotaW5kZXg6IDEyMDA7XG4gIH1cbiAgXG4gIC5kcm9wZG93bi1jb250ZW50MSBhIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIFxuICAuZHJvcGRvd24tY29udGVudDEgYTpob3ZlciB7YmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O31cbiAgXG4gIC5kcm9wZG93bjE6aG92ZXIgLmRyb3Bkb3duLWNvbnRlbnQxIHtkaXNwbGF5OiBibG9jazt9XG4gIC5kb3Qze1xuICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIC53aWQxMDB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLndpZDgwe1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbiAgXG4gIC5wdDEwe1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICB9XG4gIGlucHV0W3R5cGU9XCJkYXRlXCJdOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xuICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZzEvY2FsLnN2Zykgbm8tcmVwZWF0O1xuICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICBib3JkZXItd2lkdGg6IHRoaW47XG4gICAgICBwYWRkaW5nOiAycHggMHB4O1xuICB9XG4gIGlucHV0W3R5cGU9XCJkYXRlXCJde1xuICAgIGNvbG9yOiAjNzg3QTdEO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICBpbnB1dDpmb2N1c3tcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG4gIGJ1dHRvbjpmb2N1c3tcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG4gIC5tb2RhbCB0ZXh0YXJlYXtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICB9XG4gIC5hbGVydHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBsaW5lLWhlaWdodDogMjdweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICAgIGNvbG9yOiAjNEQ1ODY5O1xuICB9XG4gIC5hbGVydF90ZXh0e1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgICBjb2xvcjogIzg1ODU4NTtcbiAgICBtYXJnaW46IDBweCA0MHB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gIFxuICB9XG4gIC5jZW50ZXJ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5jZW50ZXIgaW1ne1xuICAgIHdpZHRoOiA0NHB4O1xuICBoZWlnaHQ6IDM0cHg7XG4gIH1cblxuICBcbiAgI2RlbGV0ZTFNb2RhbCAubW9kYWwtZGlhbG9nLCNkZWxldGVpdGVtTW9kYWwgLm1vZGFsLWRpYWxvZyB7XG4gICAgICB3aWR0aDogMzUwcHg7XG4gIH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KXtcbiAgI2RlbGV0ZTFNb2RhbCAubW9kYWwtZGlhbG9nLCNkZWxldGVpdGVtTW9kYWwgLm1vZGFsLWRpYWxvZyAge1xuICAgICAgbWF4LXdpZHRoOjM1MHB4O1xuICB9XG4gIH1cbiAgI2RlbGV0ZU1vZGFsIC5tb2RhbC1kaWFsb2cge1xuICAgICAgd2lkdGg6IDM1MHB4O1xuICB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiA1NzZweCl7XG4gICAjZGVsZXRlTW9kYWwgLm1vZGFsLWRpYWxvZyB7XG4gICAgICBtYXgtd2lkdGg6MzUwcHg7XG4gIH1cbiAgfVxuICAucHQxMDF7XG4gICAgcGFkZGluZy10b3A6IDMwcHg7XG4gICAgbWFyZ2luOiAwcHggMzBweDtcbiAgfVxuICAjaXRlbU1vZGFsIC5tb2RhbC1kaWFsb2csI2VkaXRpdGVtTW9kYWwgLm1vZGFsLWRpYWxvZywjc3ViYnJhbmNoTW9kYWwgLm1vZGFsLWRpYWxvZywjYWRkMU1vZGFsIC5tb2RhbC1kaWFsb2csI2FkZHBheU1vZGFsIC5tb2RhbC1kaWFsb2csI3ZpZXdwYXlNb2RhbCAubW9kYWwtZGlhbG9nIHtcbiAgICAgIHdpZHRoOiA3NTBweDtcbiAgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpe1xuICAgI2l0ZW1Nb2RhbCAubW9kYWwtZGlhbG9nLCNlZGl0aXRlbU1vZGFsIC5tb2RhbC1kaWFsb2csI3N1YmJyYW5jaE1vZGFsIC5tb2RhbC1kaWFsb2csI2FkZDFNb2RhbCAubW9kYWwtZGlhbG9nLCNhZGRwYXlNb2RhbCAubW9kYWwtZGlhbG9nLCN2aWV3cGF5TW9kYWwgLm1vZGFsLWRpYWxvZyB7XG4gICAgICBtYXgtd2lkdGg6NzUwcHg7XG4gIH1cbiAgfVxuICAuc2VjMSwuc2VjMntcbiAgICB3aWR0aDogNTAlO1xuICB9XG4gIC5zZWMxe1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIH1cbiAgLnNlYzJ7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB9XG4gIGlucHV0W3R5cGU9XCJkYXRlXCJdOmZvY3VzOmJlZm9yZSxcbiAgICBpbnB1dFt0eXBlPVwiZGF0ZVwiXTp2YWxpZDpiZWZvcmUge1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICB9XG4gIFxuICAgLyogaW5wdXRbdHlwZT1kYXRlXTo6LXdlYmtpdC1kYXRldGltZS1lZGl0LXRleHQge1xuICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICBpbnB1dFt0eXBlPWRhdGVdOjotd2Via2l0LWRhdGV0aW1lLWVkaXQtbW9udGgtZmllbGR7XG4gICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIGlucHV0W3R5cGU9ZGF0ZV06Oi13ZWJraXQtZGF0ZXRpbWUtZWRpdC1kYXktZmllbGQge1xuICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICBpbnB1dFt0eXBlPWRhdGVdOjotd2Via2l0LWRhdGV0aW1lLWVkaXQteWVhci1maWVsZCB7XG4gICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICB9Ki9cbiAgXG4gICBpbnB1dFt0eXBlPVwiZGF0ZVwiXTpiZWZvcmUge1xuICAgICAgY29udGVudDogYXR0cihwbGFjZWhvbGRlcikgIWltcG9ydGFudDtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgfVxuICAgIC5hbGxvX2hpc3RvcnkgLnRhYmxlX2JvZHk+ZGl2LC5hbGxvX2hpc3RvcnkgLnRhYmxlX2hlYWRpbmc+ZGl2e1xuICAgIHdpZHRoOiBjYWxjKCgxMDAlIC0gNTBweCkgLyA1KTtcbiAgfVxuICAuYWxsb19oaXN0b3J5IC50YWJsZV9oZWFkaW5nPmRpdjpmaXJzdC1jaGlsZCwuYWxsb19oaXN0b3J5IC50YWJsZV9ib2R5PmRpdjpmaXJzdC1jaGlsZHtcbiAgICB3aWR0aDogNTBweDtcbiAgICBsaW5lLWhlaWdodDogNDtcbiAgfVxuICAuaW4xe1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBiYWNrZ3JvdW5kOiAjQ0NGRkFDO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB3aWR0aDogNDBweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICAgIGNvbG9yOiAjMzIzQzQ3O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAub3V0e1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBiYWNrZ3JvdW5kOiAjRkZDRjg4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB3aWR0aDogNDBweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgICBjb2xvcjogIzMyM0M0NztcbiAgfVxuICAjaGlzdG9yeU1vZGFsIC5tb2RhbC1kaWFsb2csI2hpc3RvcnlNb2RhbCAubW9kYWwtZGlhbG9nIHtcbiAgICAgIHdpZHRoOiA2NTBweDtcbiAgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpe1xuICAgI2hpc3RvcnlNb2RhbCAubW9kYWwtZGlhbG9nLCNoaXN0b3J5TW9kYWwgLm1vZGFsLWRpYWxvZyB7XG4gICAgICBtYXgtd2lkdGg6NjUwcHg7XG4gIH1cbiAgfVxuICAgIC5zdXBwbGllcl9tIC50YWJsZV9ib2R5PmRpdiwuc3VwcGxpZXJfbSAudGFibGVfaGVhZGluZz5kaXZ7XG4gICAgd2lkdGg6IGNhbGMoKDEwMCUgLSAyMDBweCkgLyA1KTtcbiAgfVxuICAuc3VwcGxpZXJfbSAudGFibGVfaGVhZGluZz5kaXY6bGFzdC1jaGlsZCwuc3VwcGxpZXJfbSAudGFibGVfYm9keT5kaXY6bGFzdC1jaGlsZHtcbiAgICB3aWR0aDogMjAwcHg7XG4gIH1cbiAgICAucHVyY2hhc2UgLnRhYmxlX2JvZHk+ZGl2LC5wdXJjaGFzZSAudGFibGVfaGVhZGluZz5kaXZ7XG4gICAgd2lkdGg6IGNhbGMoKDEwMCUgLSAxMDBweCkgLyA2KTtcbiAgfVxuICAucHVyY2hhc2UgLnRhYmxlX2hlYWRpbmc+ZGl2Omxhc3QtY2hpbGQsLnB1cmNoYXNlIC50YWJsZV9ib2R5PmRpdjpsYXN0LWNoaWxke1xuICAgIHdpZHRoOiAxMDBweDtcbiAgfVxuICBpbnB1dFt0eXBlPWZpbGVdOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICNlM2RhZGI7XG4gICAgcGFkZGluZzogLjZlbSAuNGVtO1xuICAgIGJvcmRlci1yYWRpdXM6IC4yZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICB0cmFuc2l0aW9uOiAxcztcbiAgICBjb2xvcjogIzEwOUNGMTtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG4gIFxuICBpbnB1dFt0eXBlPWZpbGVdIHtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgIGNvbG9yOiAjQjZCNUIxO1xuICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgLmRpdl8xe1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNENUQ3REE7XG4gICAgd2lkdGg6IDI1JTtcbiAgICBoZWlnaHQ6IDI3cmVtO1xuICAgIG1hcmdpbjogMHB4IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgfVxuICAucHQxMDJ7XG4gICAgcGFkZGluZy1ib3R0b206MjBweDtcbiAgfVxuICAudGV4dGFyZWExe1xuICAgIGhlaWdodDogMTAwcHg7XG4gIH1cbiAgLmhlYWRpbmcxe1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gICAgY29sb3I6ICMzMzRENkU7XG4gIH1cbiAgXG4gIC5kaXZfMntcbiAgICB3aWR0aDogNzUlO1xuICAgIG1hcmdpbjogMHB4IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgfVxuICAudGFibGVoZWFke1xuICAgIGJhY2tncm91bmQ6ICNERkU1RjA7XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG4gIC50YWJsZWhlYWQ+ZGl2e1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gNSk7XG4gICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gIGNvbG9yOiAjMzIzQzQ3O1xuICB9XG4gIC5zZWwxe1xuICAgIHdpZHRoOiAyNTJweDtcbiAgICBiYWNrZ3JvdW5kOiAjRkFGQUZBO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNGMEVERUQ7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB9XG4gIC50YWJsZWJvZHl7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjREZFNUYwO1xuICB9XG4gIC50YWJsZWJvZHk+ZGl2e1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gNSk7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbGluZS1oZWlnaHQ6IDYwcHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgICBjb2xvcjogIzMyM0M0NztcbiAgfVxuICAudGFibGV0b3RhbHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJhY2tncm91bmQ6ICNENEZGRjI7XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICAgIGNvbG9yOiAjMzIzQzQ3O1xuICB9XG4gIC50YWJsZXRvdGFsPmRpdntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IDYwcHg7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAvIDUpO1xuICB9XG4gIC50YWJsZXRvdGFsPmRpdjpudGgtY2hpbGQoNCl7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG4gIC5jcmVhdGVkX2RhdGV7XG4gICAvLyBiYWNrZ3JvdW5kOnVybCguLi8uLi8uLi9hc3NldHMvaW1nMS90ZWFsX3JlYy5zdmcpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICB3aWR0aDogMTk0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgICBjb2xvcjogIzMyM0M0NztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIFxuICB9XG4gIC5tcjEwe1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG4gIC5mbGV4MzB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBcbiAgICBcbiAgfVxuICAuZmxleDMwPmRpdntcbiAgICBwYWRkaW5nLWxlZnQ6MjBweDtcbiAgICB3aWR0aDogY2FsYyggMTAwJSAvIDMpO1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNFNUUzRUU7XG4gIH1cbiAgLmZsZXgzMD5kaXY6bGFzdC1jaGlsZHtcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gIH1cbiAgLm5hbWUye1xuICAgIHdpZHRoOiAzNCU7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgICBjb2xvcjogIzMyM0M0NztcbiAgXG4gIH1cbiAgLnZhbHVlMntcbiAgICB3aWR0aDogNjYlO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgXG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gIGNvbG9yOiAgIzMyM0M0NztcbiAgXG4gIH1cbiBcbiAgLmZsZXgzMD5kaXY6bGFzdC1jaGlsZCAubmFtZTJ7XG4gICAgd2lkdGg6IDQ1JTtcbiAgfVxuICAuZmxleDMwPmRpdjpsYXN0LWNoaWxkIC52YWx1ZTJ7XG4gICAgd2lkdGg6IDU1JTtcbiAgfVxuICAuaXRlbSAudGFibGVoZWFkPmRpdiwuaXRlbSAudGFibGVib2R5PmRpdntcbiAgXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAvIDQpO1xuICB9XG4gIC5pdGVtIC50YWJsZXRvdGFse1xuICAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjREZFNUYwO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm94LXNoYWRvdzpub25lO1xuICBcbiAgfVxuICAuaXRlbSAudGFibGV0b3RhbD5kaXZ7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAvNCk7XG4gIH1cbiAgICAuc2FsZSAudGFibGVfYm9keT5kaXYsLnNhbGUgLnRhYmxlX2hlYWRpbmc+ZGl2e1xuICAgIHdpZHRoOiBjYWxjKCgxMDAlIC0gMTAwcHgpIC8gNik7XG4gIH1cbiAgLnNhbGUgLnRhYmxlX2hlYWRpbmc+ZGl2Omxhc3QtY2hpbGQsLnNhbGUgLnRhYmxlX2JvZHk+ZGl2Omxhc3QtY2hpbGR7XG4gICAgd2lkdGg6IDEwMHB4O1xuICB9XG4gIC5zYWxlIC50YWJsZV9oZWFkaW5nPmRpdjpudGgtY2hpbGQoMTApLC5zYWxlIC50YWJsZV9ib2R5PmRpdjpudGgtY2hpbGQoMTApe1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICB9XG4gIC5kaXZfMTF7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0Q1RDdEQTtcbiAgICB3aWR0aDogMjUlO1xuICAgIGhlaWdodDogMzdyZW07XG4gICAgbWFyZ2luOiAwcHggMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICB9XG4gIFxuICAuc2FsZV9hZGQgLnRhYmxlaGVhZD5kaXZ7XG4gIFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyA2KTtcbiAgXG4gIH1cbiAgXG4gIC5zYWxlX2FkZCAudGFibGVib2R5PmRpdntcbiAgXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAvIDYpO1xuICBcbiAgfVxuICBcbiAgLnNhbGVfYWRkIC50YWJsZXRvdGFsPmRpdntcbiAgXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAvIDYpO1xuICB9XG4gIC5zYWxlX2FkZCAudGFibGV0b3RhbD5kaXY6bnRoLWNoaWxkKDUpe1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuICAuZmlsZV9uYW1le1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gICAgY29sb3I6ICMxMDlDRjE7XG4gIFxuICB9XG4gICAgLmhpc3RvcnkgLnRhYmxlX2JvZHk+ZGl2LC5oaXN0b3J5IC50YWJsZV9oZWFkaW5nPmRpdntcbiAgICB3aWR0aDogY2FsYygoMTAwJSAtIDUwcHgpIC8gNSk7XG4gIH1cbiAgLmhpc3RvcnkgLnRhYmxlX2hlYWRpbmc+ZGl2OmZpcnN0LWNoaWxkLC5oaXN0b3J5IC50YWJsZV9ib2R5PmRpdjpmaXJzdC1jaGlsZHtcbiAgICB3aWR0aDogNTBweDtcbiAgfVxuICAubmF2LWl0ZW0ge1xuICAgIC5uYXYtbGluayB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGNvbG9yOiAjNDA1ODc3O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIH1cbiAgICAuYWN0aXZlIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICMxMDljZjEgIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6ICMxMDljZjEgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbiAgLm1vZGFsIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICBcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgfVxuICAgICAgIC5yaWdodHtcbiAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgfVxuICAgLm1vZGFsLWRpYWxvZyB7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICB0b3A6MTAlO1xuICAgIH1cbiAgICAubW9kYWwtaGVhZGVyOmJlZm9yZXtcbiAgICAgIGRpc3BsYXk6bm9uZTtcbiAgICB9XG4gICAgLm1vZGFsLXRpdGxlIHtcbiAgICAgIGNvbG9yOiAjMkIyNjI2O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgfVxuICAuZXJyb3Jtc2d7XG4gICAgaGVpZ2h0OjEwcHg7XG4gIH1cbiAgLmhlbHAtYmxvY2t7XG4gICAgY29sb3I6IHJlZDtcbiAgICBtYXJnaW4tYm90dG9tOiAwJTtcbiAgICAvL3RleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nLWxlZnQ6IDJweDtcbiAgICB9XG4gICAgLmNhbmNlbHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICBjb2xvcjogIzEwOUNGMTtcbiAgICAgICAgcGFkZGluZzogMHB4IDIwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAycHggIzEwOUNGMTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICB9XG4gICAgLmFsaWdue1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICAubXVsdGlzZWxlY3R7XG4gICAgICB3aWR0aDogMzMwcHg7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIGxlZnQ6IDMwcHg7XG4gICAgdG9wOiA2M3B4O1xuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgbWFyZ2luLXRvcDoyMHB4O1xuICAgIH1cbiAgICAjZGVsZXRlc01vZGFsIC5tb2RhbC1kaWFsb2cge1xuICAgICAgd2lkdGg6IDM1MHB4O1xuICB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiA1NzZweCl7XG4gICNkZWxldGVzTW9kYWwgLm1vZGFsLWRpYWxvZyB7XG4gICAgICBtYXgtd2lkdGg6MzUwcHg7XG4gIH1cbiAgfVxuICAuY2VudGVye1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gXG4gIC5kZWxldGVJbWcsbGl7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luOjNweDtcbiAgfVxuICAucF90aXRsZXtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBsaW5lLWhlaWdodDogMTVweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICAgIC8vY29sb3I6ICMyQjI2MjY7XG4gICAgY29sb3I6IzMyM0M0NztcbiAgICBtYXJnaW4tYm90dG9tOjVweDtcbiAgICB9XG4gICAgLmhhcy1lcnJvciAuY29udHJvbC1sYWJlbHtcbiAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgIH1cbiAgICAgIC5oZWxwLWJsb2Nre1xuICAgICAgY29sb3I6IHJlZDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDAlO1xuICAgICAgXG4gICAgICB9XG4gICAgICAudGV4dC1kYW5nZXJ7XG4gICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgIHBhZGRpbmctbGVmdDoycHg7XG4gICAgICB9XG4gICAgLnNjcm9sbGFibGV7XG4gICAgICBtYXgtaGVpZ2h0OiA3MHZoO1xuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIH1cbiAgICAuZHJvcGRvd24tY29udGVudDF7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgIG1pbi13aWR0aDogMjAwcHg7XG4gICAgICByaWdodDogM3B4O1xuICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgIHRvcDogLTEwMHB4O1xuICAgICAgLy90b3A6LTExcHg7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgYXtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7O1xuICAgICB9XG4gICAgICB9XG4gICAgICAuc2Vye1xuICAgICAgICBtYXJnaW46MTBweCAwcHg7XG4gICAgICB9XG4gICAgICAuaWxsdXN0cmF0aW9uLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAuaWxsdXN0cmF0aW9uLWltZyB7XG4gICAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMjUlO1xuICAgICAgICB9XG4gICAgICB9IFxuICAgICIsIkBpbXBvcnQgXCIuLi9pbnZlbnRvcnktbW9kdWxlLmNvbXBvbmVudC5zY3NzXCI7XG4ucHQxMDJ7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG4udGV4dGFyZWExe1xuICAgIGhlaWdodDogNjhweDtcbn1cbi5kaXZfMTF7XG4gICAgaGVpZ2h0OiA0MnJlbTtcbn1cbi5oaT5kaXZ7XG4gICAgd2lkdGg6MzElO1xuICB9XG4gLmhpe1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogM3B4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDNweDtcbiB9ICBcbiAiXX0= */";
      /***/
    },

    /***/
    "./src/app/components/inventory-module/sale-add/sale-add.component.ts":
    /*!****************************************************************************!*\
      !*** ./src/app/components/inventory-module/sale-add/sale-add.component.ts ***!
      \****************************************************************************/

    /*! exports provided: SaleAddComponent */

    /***/
    function srcAppComponentsInventoryModuleSaleAddSaleAddComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SaleAddComponent", function () {
        return SaleAddComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _services_export_to_pdf_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../services/export-to-pdf.service */
      "./src/app/services/export-to-pdf.service.ts");
      /* harmony import */


      var _services_excel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../services/excel.service */
      "./src/app/services/excel.service.ts");
      /* harmony import */


      var _services_message_show_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../services/message-show.service */
      "./src/app/services/message-show.service.ts");
      /* harmony import */


      var _services_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../services/http.service */
      "./src/app/services/http.service.ts");
      /* harmony import */


      var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../services/authenticator.service */
      "./src/app/services/authenticator.service.ts");
      /* harmony import */


      var _services_user_management_role_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../services/user-management/role.service */
      "./src/app/services/user-management/role.service.ts");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! moment */
      "./node_modules/moment/moment.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

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

      var SaleAddComponent =
      /** @class */
      function () {
        var SaleAddComponent = /*#__PURE__*/function () {
          function SaleAddComponent(httpService, auth, msgService, _pdfService, excelService, apiService, router, _Activatedroute) {
            _classCallCheck(this, SaleAddComponent);

            this.httpService = httpService;
            this.auth = auth;
            this.msgService = msgService;
            this._pdfService = _pdfService;
            this.excelService = excelService;
            this.apiService = apiService;
            this.router = router;
            this._Activatedroute = _Activatedroute;
            this.institution_id = sessionStorage.getItem('institution_id');
            this.roleAllData = [];
            this.isStudent = false;
            this.isedit = false;
            this.isChange = false;
            this.isDisable = false;
            this.saleAllData = [];
            this.model = {
              sale_id: 0,
              sale_type: '',
              user_id: '',
              user_role: '',
              reference_number: '',
              bill_image_url: '',
              sale_date: '',
              payment_status: '',
              description: '',
              institute_id: sessionStorage.getItem('institution_id'),
              sale_item_list: [],
              purchased_by_user_id: 0,
              paid_amount: '',
              payment_date: '',
              reference_no: '',
              payment_method: '',
              paymentBill: ''
            };
            this.userALLdata = [];
            this.categoryAllData = [];
            this.itemArray = [];
            this.itemAllData = [];
            this.itemData = [];
            this.status = true;
            this.institution_id = sessionStorage.getItem('institution_id');
          }

          _createClass(SaleAddComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.getAllRoles();
              this.getSaleDetails();
              this.getCategoryDetails();
              this.editId = this._Activatedroute.snapshot.paramMap.get("id");

              if (this.editId != undefined) {
                // this.isadd=false;
                this.editRow(this.editId);
                this.isDisable = true;
                this.isedit = true;
              }
            }
          }, {
            key: "getAllRoles",
            value: function getAllRoles() {
              var _this40 = this;

              //this.auth.showLoader();
              this.httpService.getData('/api/v1/roleApi/allRoles/' + this.institution_id).subscribe(function (res) {
                _this40.roleAllData = res;

                _this40.auth.hideLoader();
              }, function (err) {
                _this40.msgService.showErrorMessage(_this40.msgService.toastTypes.error, '', err.error.message);
              });
            }
          }, {
            key: "getUserAgainstRole",
            value: function getUserAgainstRole(role_id) {
              var _this41 = this;

              if (role_id == 0) {
                var obj = {
                  page_no: 0,
                  user_Type: "1",
                  page_offset: 0,
                  master_course_name: "",
                  course_id: 0
                };
                this.auth.showLoader();
                this.httpService.postData('/api/v1/profiles/all/' + this.institution_id + '?active=Y', obj).subscribe(function (res) {
                  _this41.userALLdata = res;

                  _this41.auth.hideLoader();
                }, function (err) {
                  _this41.auth.hideLoader();
                });
              } else {
                this.httpService.getData('/api/v1/inventory/sale/' + this.institution_id + '/getUserByRole?roleIds=' + role_id).subscribe(function (res) {
                  _this41.userALLdata = res.result;
                }, function (err) {
                  _this41.auth.hideLoader();
                });
              }
            }
          }, {
            key: "validateFutureDate",
            value: function validateFutureDate() {
              var today = moment__WEBPACK_IMPORTED_MODULE_7__(new Date());
              var selectedDate = moment__WEBPACK_IMPORTED_MODULE_7__(this.model.sale_date);
              var diff = moment__WEBPACK_IMPORTED_MODULE_7__(selectedDate.diff(today))['_i'];

              if (diff > 0) {
                this.msgService.showErrorMessage('info', '', "Future date is not allowed");
                this.model.sale_date = moment__WEBPACK_IMPORTED_MODULE_7__(new Date()).format('YYYY-MM-DD');
              }
            }
          }, {
            key: "getCategoryDetails",
            value: function getCategoryDetails() {
              var _this42 = this;

              //this.auth.showLoader();
              this.httpService.getData('/api/v1/inventory/category/all/' + this.institution_id).subscribe(function (res) {
                _this42.auth.hideLoader();

                _this42.categoryAllData = res;
              }, function (err) {
                _this42.auth.hideLoader();
              });
            }
          }, {
            key: "getItemAgainstCat",
            value: function getItemAgainstCat(category_id) {
              var _this43 = this;

              //this.isChange = false;
              this.auth.showLoader();
              this.httpService.getData('/api/v1/inventory/item/getItemsByCategory/' + this.model.institute_id + '?categoryIdList=' + category_id + '&source=sale').subscribe(function (res) {
                _this43.itemAllData = res.result;

                _this43.auth.hideLoader();

                _this43.itemArray = _this43.itemAllData[0].items;
              });
            }
          }, {
            key: "getItemData",
            value: function getItemData(id) {
              var _this44 = this;

              this.isChange = true;
              this.itemArray.forEach(function (elements) {
                if (elements && elements.item_id == id) {
                  //available units replace with one
                  elements.available_units = 1;

                  _this44.itemData.push(elements);

                  elements.sale_type = "Paid";
                  elements.isedit = false;
                  var data = elements; //use to remove duplicates from array

                  _this44.removeDuplicates(_this44.itemData); //for initial total and unit


                  _this44.purchaselistItem();
                }
              });
            }
          }, {
            key: "removeDuplicates",
            value: function removeDuplicates(data) {
              var _this45 = this;

              var unique = [];
              data.forEach(function (element) {
                if (!unique.includes(element)) {
                  unique.push(element);
                  _this45.itemData = unique;
                } else {
                  _this45.msgService.showErrorMessage(_this45.msgService.toastTypes.info, '', 'Selected Item Exist in the table');
                }
              });
              return this.itemData;
            }
          }, {
            key: "purchaselistItem",
            value: function purchaselistItem() {
              var subTotal = 0;
              var units = 0;

              var _iterator2 = _createForOfIteratorHelper(this.itemData),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var data = _step2.value;
                  data.subtotal = 0;
                  units += Number(data.available_units);

                  if (data.sale_type == "Paid") {
                    data.subtotal = data.available_units * data.sale_price + data.available_units * data.sale_price * data.tax_percent / 100; //for total calculate

                    subTotal += data.subtotal;
                  } //subtotal for each row
                  else {
                      data.sale_price = 0;
                    }
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }

              this.total = subTotal.toFixed(2);
              this.totalUnits = units;
            }
          }, {
            key: "editdata",
            value: function editdata(param) {
              param.isedit = true; //for editrow
              // if (id != undefined) {
              //   this.status = param;
              // }
            }
          }, {
            key: "deleteItemData",
            value: function deleteItemData(id) {
              var _this46 = this;

              this.itemData.forEach(function (element, index) {
                _this46.itemData.splice(id, 1);
              });
              this.purchaselistItem();

              if (this.itemData.length == 0) {
                this.isChange = !this.isChange;
              }
            }
          }, {
            key: "amountValid",
            value: function amountValid(total, paid) {
              if (paid > total) {
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Amount is greater than total amount');
              }
            }
          }, {
            key: "saveSaleDetails",
            value: function saveSaleDetails() {
              var _this47 = this;

              if (this.myForm.valid) {
                if (this.itemData.length) {
                  this.model.sale_item_list = []; //sale_type":"paid", "item_id":43, "quantity":1, "unit_price":100, "tax":0.0

                  for (var i = 0; i < this.itemData.length; i++) {
                    var obj = {
                      sale_type: this.itemData[i].sale_type,
                      item_id: this.itemData[i].item_id,
                      quantity: this.itemData[i].available_units,
                      unit_price: this.itemData[i].sale_price,
                      tax: this.itemData[i].tax_percent
                    };
                    this.model.sale_item_list.push(obj);
                  }

                  var file = document.getElementById('billImageFile').files[0];
                  this.model.institute_id = sessionStorage.getItem('institute_id');
                  var formData = new FormData();
                  var saleDto = {}; //data when paid

                  var payment_dto = {};
                  payment_dto.paid_amount = this.model.paid_amount;
                  payment_dto.payment_date = this.model.payment_date;
                  payment_dto.reference_no = this.model.reference_no;
                  payment_dto.payment_method = this.model.payment_method;
                  payment_dto.institute_id = sessionStorage.getItem('institute_id');

                  if (this.isedit) {
                    saleDto.sale_id = this.model.sale_id;
                  }

                  saleDto.institute_id = sessionStorage.getItem('institute_id');
                  saleDto.user_id = this.model.user_id;
                  saleDto.user_role = this.model.user_role;
                  saleDto.reference_number = this.model.reference_number;
                  saleDto.sale_date = moment__WEBPACK_IMPORTED_MODULE_7__(this.model.sale_date).format("YYYY-MM-DD");
                  saleDto.sale_item_list = this.model.sale_item_list;
                  saleDto.payment_status = this.model.payment_status; // saleDto.sale_type =this.model.sale_type;

                  if (this.model.payment_status == "Paid") {
                    saleDto.payment_dto = payment_dto;
                    formData.append('saleDto', JSON.stringify(saleDto)); //formData.append('payment_dto', JSON.stringify(payment_dto)); 

                    formData.append('paymentBill', file);
                  } else {
                    formData.append('saleDto', JSON.stringify(saleDto));
                  }

                  if (file) {
                    formData.append('billImageFile', file);
                  }

                  if (this.isedit) {} //this.isedit?this.model.id:delete(this.model.id);


                  var base = this.auth.baseUrl; //let base = "https://test999.proctur.com/StdMgmtWebAPI"
                  // let urlPostXlsDocument = base + "/prod/api/v2/asset/purchase/create";

                  var urlPostXlsDocument = this.isedit ? base + "/api/v1/inventory/sale/update" : base + "/api/v1/inventory/sale/create";
                  var newxhr = new XMLHttpRequest();
                  var auths = {
                    userid: sessionStorage.getItem('userid'),
                    userType: sessionStorage.getItem('userType'),
                    password: sessionStorage.getItem('password'),
                    institution_id: sessionStorage.getItem('institute_id')
                  };
                  var Authorization = btoa(auths.userid + "|" + auths.userType + ":" + auths.password + ":" + auths.institution_id);
                  this.isedit ? newxhr.open("PUT", urlPostXlsDocument, true) : newxhr.open("POST", urlPostXlsDocument, true);
                  newxhr.setRequestHeader("Authorization", Authorization);
                  newxhr.setRequestHeader("x-proc-authorization", Authorization);
                  newxhr.setRequestHeader("x-prod-inst-id", sessionStorage.getItem('institute_id'));
                  newxhr.setRequestHeader("x-prod-user-id", sessionStorage.getItem('userid'));
                  newxhr.setRequestHeader("enctype", "multipart/form-data;");
                  newxhr.setRequestHeader("Accept", "application/json, text/javascript"); //newxhr.setRequestHeader("Access-Control-Allow-Origin", "*");

                  if (!this.auth.isRippleLoad.getValue()) {
                    this.auth.showLoader();

                    newxhr.onreadystatechange = function () {
                      _this47.auth.hideLoader();

                      if (newxhr.readyState == 4) {
                        if (newxhr.status >= 200 && newxhr.status < 300) {
                          var msg = _this47.isedit ? 'Sale Added Successfully' : 'Sale Added Successfully';

                          _this47.msgService.showErrorMessage(_this47.msgService.toastTypes.success, '', msg);

                          _this47.router.navigate(['/view/inventory-management/sale-item']); //this.getPurchaseDetails();
                          //this.cancel(false)

                        } else {
                          // this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', "File format is not suported");
                          _this47.model.sale_item_list = [];

                          _this47.msgService.showErrorMessage(_this47.msgService.toastTypes.error, '', JSON.parse(newxhr.response).error[0].errorMessage);
                        }
                      }
                    };

                    newxhr.send(formData);
                  }
                } else {
                  this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', "Please select category and Item for purchase");
                }
              } else {
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', "Please fill all  mandatory field");
              }
            }
          }, {
            key: "getSaleDetails",
            value: function getSaleDetails() {
              var _this48 = this;

              this.auth.showLoader();
              this.httpService.getData('/api/v1/inventory/sale/all?instituteId=' + this.institution_id).subscribe(function (res) {
                _this48.auth.hideLoader();

                var saleData = res.result.response;

                var _iterator3 = _createForOfIteratorHelper(saleData),
                    _step3;

                try {
                  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                    var keys = _step3.value;

                    var _iterator4 = _createForOfIteratorHelper(keys.sale_item_list),
                        _step4;

                    try {
                      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                        var data = _step4.value;
                        var obj = {};
                        obj.item_name = data.item_name;
                        obj.item_name = data.item_name;
                        obj.reference_number = keys.reference_number;
                        obj.user_name = keys.user_name;
                        obj.user_role = keys.user_role;
                        obj.supplier_company_name = keys.supplier_company_name;
                        obj.sale_date = keys.sale_date;
                        obj.sale_type = data.sale_type;
                        obj.total_paid_amount = keys.total_paid_amount;
                        obj.total_amount = keys.total_amount;
                        obj.balanced_amount = keys.balanced_amount;
                        obj.bill_image_url = keys.bill_image_url;
                        obj.sale_id = keys.sale_id;

                        _this48.saleAllData.push(obj);
                      }
                    } catch (err) {
                      _iterator4.e(err);
                    } finally {
                      _iterator4.f();
                    }
                  } // this.staticPageData = res.result.response;
                  // this.tempLocationList = res.result.response;
                  // this.totalRecords = res.result.total_elements;

                } catch (err) {
                  _iterator3.e(err);
                } finally {
                  _iterator3.f();
                }

                _this48.auth.hideLoader();
              }, function (err) {
                _this48.auth.hideLoader();
              });
            }
          }, {
            key: "editRow",
            value: function editRow(editId) {
              var _this49 = this;

              this.itemData = [];
              this.isChange = true;
              this.isDisable = true;
              this.httpService.getData('/api/v1/inventory/sale/' + editId + '?instituteId=' + this.model.institute_id).subscribe(function (res) {
                _this49.dataForEdit = res.result;

                _this49.auth.hideLoader();

                _this49.model.user_role = _this49.dataForEdit.user_role;
                _this49.model.role_id = _this49.dataForEdit.user_id;

                _this49.getUserAgainstRole(_this49.model.user_role);

                _this49.model.user_id = _this49.dataForEdit.user_id;
                _this49.model.sale_type = _this49.dataForEdit.sale_type;
                _this49.model.reference_number = _this49.dataForEdit.reference_number;
                _this49.model.bill_image_url = _this49.dataForEdit.bill_image_url;
                _this49.model.sale_date = _this49.dataForEdit.sale_date;
                _this49.model.payment_status = _this49.dataForEdit.payment_status;
                _this49.model.user_name = _this49.dataForEdit.user_name;
                _this49.model.description = _this49.dataForEdit.description;
                _this49.itemData = _this49.dataForEdit.sale_item_list;
                var newData = [];

                for (var i = 0; i < _this49.itemData.length; i++) {
                  var obj = {
                    sale_type: _this49.itemData[i].sale_type,
                    item_id: _this49.itemData[i].item_id,
                    item_name: _this49.itemData[i].item_name,
                    "available_units": _this49.itemData[i].quantity,
                    "sale_price": _this49.itemData[i].unit_price,
                    "tax_percent": _this49.itemData[i].tax,
                    "isedit": false
                  };
                  newData.push(obj);
                }

                _this49.itemData = newData; //function for total and subtotal

                _this49.purchaselistItem();
              }, function (err) {
                _this49.auth.hideLoader();
              });
            }
          }, {
            key: "updateSaleData",
            value: function updateSaleData() {
              var _this50 = this;

              if (this.myForm.valid) {
                if (this.itemData.length) {
                  this.model.sale_item_list = []; //sale_type":"paid", "item_id":43, "quantity":1, "unit_price":100, "tax":0.0

                  for (var i = 0; i < this.itemData.length; i++) {
                    var obj = {
                      sale_type: this.itemData[i].sale_type,
                      item_id: this.itemData[i].item_id,
                      "quantity": this.itemData[i].available_units,
                      "unit_price": this.itemData[i].sale_price,
                      "tax": this.itemData[i].tax_percent
                    };
                    this.model.sale_item_list.push(obj);
                  }

                  var file = document.getElementById('billImageFile').files[0];
                  this.model.institute_id = sessionStorage.getItem('institute_id');
                  var formData = new FormData();
                  var saleDto = {}; //data when paid

                  var payment_dto = {};
                  payment_dto.paid_amount = this.model.paid_amount;
                  payment_dto.payment_date = this.model.payment_date;
                  payment_dto.reference_no = this.model.reference_no;
                  payment_dto.payment_method = this.model.payment_method;
                  payment_dto.institute_id = sessionStorage.getItem('institute_id');
                  payment_dto.paymentBill = this.model.paymentBill; // if (this.isedit) {
                  //   saleDto.sale_id = this.model.sale_id;
                  // }

                  saleDto.institute_id = sessionStorage.getItem('institute_id');
                  saleDto.user_id = this.model.user_id;
                  saleDto.sale_id = this.editId;
                  saleDto.user_role = this.model.user_role;
                  saleDto.reference_number = this.model.reference_number;
                  saleDto.sale_date = moment__WEBPACK_IMPORTED_MODULE_7__(this.model.sale_date).format("YYYY-MM-DD");
                  saleDto.sale_item_list = this.model.sale_item_list;
                  saleDto.payment_status = this.model.payment_status;
                  saleDto.bill_image_url = this.model.bill_image_url; // saleDto.sale_type =this.model.sale_type;

                  if (this.model.payment_status == "Paid") {
                    saleDto.payment_dto = payment_dto;
                    formData.append('saleDto', JSON.stringify(saleDto)); //formData.append('payment_dto', JSON.stringify(payment_dto)); 

                    formData.append('paymentBill', file);
                  } else {
                    formData.append('saleDto', JSON.stringify(saleDto));
                  } // formData.append('saleDto', JSON.stringify(saleDto));


                  if (file) {
                    formData.append('billImageFile', file);
                  }

                  if (this.isedit) {} //this.isedit?this.model.id:delete(this.model.id);


                  var base = this.auth.baseUrl; //let base = "https://test999.proctur.com/StdMgmtWebAPI"
                  // let urlPostXlsDocument = base + "/prod/api/v2/asset/purchase/create";

                  var urlPostXlsDocument = base + "/api/v1/inventory/sale/update";
                  var newxhr = new XMLHttpRequest();
                  var auths = {
                    userid: sessionStorage.getItem('userid'),
                    userType: sessionStorage.getItem('userType'),
                    password: sessionStorage.getItem('password'),
                    institution_id: sessionStorage.getItem('institute_id')
                  };
                  var Authorization = btoa(auths.userid + "|" + auths.userType + ":" + auths.password + ":" + auths.institution_id);
                  newxhr.open("POST", urlPostXlsDocument, true);
                  newxhr.setRequestHeader("Authorization", Authorization);
                  newxhr.setRequestHeader("x-proc-authorization", Authorization);
                  newxhr.setRequestHeader("x-prod-inst-id", sessionStorage.getItem('institute_id'));
                  newxhr.setRequestHeader("x-prod-user-id", sessionStorage.getItem('userid'));
                  newxhr.setRequestHeader("enctype", "multipart/form-data;");
                  newxhr.setRequestHeader("Accept", "application/json, text/javascript"); //newxhr.setRequestHeader("Access-Control-Allow-Origin", "*");

                  if (!this.auth.isRippleLoad.getValue()) {
                    this.auth.showLoader();

                    newxhr.onreadystatechange = function () {
                      _this50.auth.hideLoader();

                      if (newxhr.readyState == 4) {
                        if (newxhr.status >= 200 && newxhr.status < 300) {
                          var msg = _this50.isedit ? 'Sale Updated Successfully' : 'Sale Updated Successfully';

                          _this50.msgService.showErrorMessage(_this50.msgService.toastTypes.success, '', msg);

                          _this50.router.navigate(['/view/inventory-management/sale-item']); //this.getPurchaseDetails();
                          //this.cancel(false)

                        } else {
                          // this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', "File format is not suported");
                          _this50.model.sale_item_list = [];

                          _this50.msgService.showErrorMessage(_this50.msgService.toastTypes.error, '', JSON.parse(newxhr.response).error[0].errorMessage);
                        }
                      }
                    };

                    newxhr.send(formData);
                  }
                } else {
                  this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', "Please select category and Item for purchase");
                }
              } else {
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', "Fill all  mandatory field");
              }
            }
          }, {
            key: "clearFile",
            value: function clearFile() {
              this.model.bill_image_url = ''; // this.isedit=false;
            }
          }, {
            key: "maxlenth",
            value: function maxlenth(data, limit) {
              if (data.length > limit) {
                this.msgService.showErrorMessage(this.msgService.toastTypes.info, '', "Please Enter upto" + " " + limit + " " + "characters only");
              }
            }
          }, {
            key: "readFile",
            value: function readFile(fileEvent, id) {
              var file = fileEvent.target.files[0];
              this.filesize = file.size;
              var fileSizeInKB = Math.round(this.filesize / 1024);

              if (fileSizeInKB > 5242880) {
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', "Please upload file upto 5MB");
              }

              this.filetype = file.type;
              var image = document.getElementById(id).value;

              if (image != '') {
                var checkimg = image.toLowerCase();

                if (!checkimg.match(/(\.jpg|\.png|\.JPG|\.PNG|\.jpeg|\.JPEG|\.PDF|\.pdf|\.svg |\.SVG)$/)) {
                  // validation of file extension using regular expression before file upload
                  this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', "File format is not allowed");
                  return false;
                }

                var img = document.getElementById(id); //alert(img.files[0].size);
                //  if(img.files[0].size > 5,242,880)  // validation according to file size
                //  {
                //   this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', "Please upload file upto 5MB");
                //  //document.getElementById("errorName5").innerHTML="Image size too short";
                //  return false;
                //   }

                return true;
              }
            }
          }]);

          return SaleAddComponent;
        }();

        SaleAddComponent.ctorParameters = function () {
          return [{
            type: _services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]
          }, {
            type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticatorService"]
          }, {
            type: _services_message_show_service__WEBPACK_IMPORTED_MODULE_3__["MessageShowService"]
          }, {
            type: _services_export_to_pdf_service__WEBPACK_IMPORTED_MODULE_1__["ExportToPdfService"]
          }, {
            type: _services_excel_service__WEBPACK_IMPORTED_MODULE_2__["ExcelService"]
          }, {
            type: _services_user_management_role_service__WEBPACK_IMPORTED_MODULE_6__["RoleService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]
          }];
        };

        SaleAddComponent.propDecorators = {
          myForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['myForm', {
              "static": false
            }]
          }]
        };
        SaleAddComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
          selector: 'app-sale-add',
          template: __importDefault(__webpack_require__(
          /*! raw-loader!./sale-add.component.html */
          "./node_modules/raw-loader/dist/cjs.js!./src/app/components/inventory-module/sale-add/sale-add.component.html"))["default"],
          styles: [__importDefault(__webpack_require__(
          /*! ./sale-add.component.scss */
          "./src/app/components/inventory-module/sale-add/sale-add.component.scss"))["default"]]
        }), __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"], _services_authenticator_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticatorService"], _services_message_show_service__WEBPACK_IMPORTED_MODULE_3__["MessageShowService"], _services_export_to_pdf_service__WEBPACK_IMPORTED_MODULE_1__["ExportToPdfService"], _services_excel_service__WEBPACK_IMPORTED_MODULE_2__["ExcelService"], _services_user_management_role_service__WEBPACK_IMPORTED_MODULE_6__["RoleService"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]])], SaleAddComponent);
        return SaleAddComponent;
      }();
      /***/

    },

    /***/
    "./src/app/components/inventory-module/sale-item/sale-item.component.scss":
    /*!********************************************************************************!*\
      !*** ./src/app/components/inventory-module/sale-item/sale-item.component.scss ***!
      \********************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsInventoryModuleSaleItemSaleItemComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "* {\n  margin: 0px;\n}\n\nbody {\n  font-family: 'Open Sans', sans-serif;\n}\n\n.flex {\n  display: flex;\n}\n\n.blue_button {\n  background-color: #109CF1;\n  color: white;\n  padding: 0px 20px;\n  font-size: 13px;\n  border: none;\n  border-radius: 5px;\n  font-weight: 600;\n  line-height: 35px;\n  cursor: pointer;\n}\n\n.white_button {\n  background-color: #fff;\n  color: #109CF1;\n  padding: 0px 20px;\n  font-size: 12px;\n  border: 1px solid #109CF1;\n  border-radius: 5px;\n  font-weight: 500;\n  line-height: 35px;\n  cursor: pointer;\n}\n\n.select {\n  padding: 7px 20px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-size: 12px;\n  font-weight: 500;\n  color: #787A7D;\n}\n\n.input {\n  padding: 7px 20px;\n  font-size: 12px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-weight: 500;\n  height: 35px;\n}\n\ninput:focus, select:focus, button:focus {\n  outline: none;\n}\n\n.page_heading > p {\n  color: #334D6E;\n  font-weight: 600;\n  font-size: 14px;\n  margin-bottom: 0px;\n}\n\n.flex {\n  display: flex;\n}\n\n.display {\n  display: flex;\n  justify-content: space-between;\n}\n\n.w98 {\n  width: 98%;\n  margin: 0px auto;\n}\n\n.head_padding {\n  box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  -webkit-box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  -moz-box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  padding: 15px 0px;\n}\n\n.pageheadingspace {\n  margin-bottom: 7px;\n}\n\n.table_heading {\n  width: 100%;\n  background-color: #DFE5F0;\n  /* padding: 10px 0px;*/\n  display: flex;\n  border-radius: 5px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);\n}\n\n.table_heading > div {\n  text-align: center;\n  font-weight: 600;\n  font-size: 12px;\n  color: #323C47;\n  line-height: 35px;\n  text-align: left;\n}\n\n.table_body {\n  width: 100%;\n  display: flex;\n  border-radius: 5px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);\n  text-align: left;\n  line-height: 18px;\n}\n\n.table_body > div {\n  text-align: left;\n  font-weight: 500;\n  font-size: 12px;\n  color: #323C47;\n  /* padding: 5px 0px;*/\n  margin: auto;\n  line-height: 18px;\n}\n\n.mr10 {\n  margin-right: 10px;\n}\n\n.w240 {\n  width: 240px;\n}\n\n.item_cat .table_body > div, .item_cat .table_heading > div {\n  width: calc((100% - 250px) / 2);\n}\n\n.item_cat .table_heading > div:first-child, .item_cat .table_body > div:first-child {\n  width: 50px;\n}\n\n.item_cat .table_heading > div:last-child, .item_cat .table_body > div:last-child {\n  width: 200px;\n}\n\n.group18 {\n  width: 18px;\n  height: auto;\n}\n\n.pt15 {\n  padding-top: 15px;\n  padding-bottom: 5px;\n}\n\n.bottom_pagignation {\n  padding-top: 10px;\n  background-color: #fff;\n  position: fixed;\n  bottom: 0px;\n  z-index: 100;\n}\n\n.bottom_pagignation p {\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 20px;\n}\n\n.bottom_pagignation select {\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-size: 13px;\n  font-weight: 500;\n  color: #0079FF;\n  display: inline;\n}\n\n.bottom_pagignation .w20 {\n  width: 20%;\n}\n\n.bottom_pagignation .w10 {\n  width: 10%;\n}\n\n.bottom_pagignation .w50 {\n  width: 50%;\n}\n\n.bottom_pagignation .w40 {\n  width: 40%;\n}\n\n.number {\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 20px;\n  letter-spacing: 0.01em;\n  color: #000000;\n  margin: 0px 4px;\n}\n\n.active_circle {\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 20px;\n  letter-spacing: 0.01em;\n  color: #fff;\n  padding: 2px 7px;\n  border-radius: 50%;\n  background: #0079FF;\n}\n\n.next {\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 20px;\n  letter-spacing: 0.01em;\n  color: #0079FF;\n}\n\n.w450 {\n  width: 450px;\n}\n\n.white {\n  background-color: #fff;\n  width: calc(100% - 227px);\n  border-top: 3px solid #Ededed;\n}\n\n.nav-item .nav-link {\n  font-weight: 600;\n  color: #405877;\n  padding-bottom: 8px;\n  cursor: pointer;\n  font-size: 13px;\n}\n\n.nav-item .nav-link.active {\n  border-bottom: 3px solid #109CF1 !important;\n  color: #109CF1 !important;\n}\n\n.nav-link {\n  display: block;\n  padding: 1.5rem 0rem;\n  margin: -1rem 1.5rem;\n  margin-left: 0rem;\n}\n\n.flex {\n  display: flex;\n}\n\n.w15 {\n  width: 15%;\n  background-color: #DFE5F0;\n  padding: 10px;\n}\n\n.list > li {\n  background-color: #fff;\n  padding: 7px 0px;\n  margin: 7px 0px;\n}\n\n.list > li > a > span {\n  text-decoration: none;\n  font-size: 10px;\n  font-weight: 500;\n  color: #334D6E;\n}\n\n.list > li img {\n  padding: 0px 10px;\n}\n\n.magnifying-glass {\n  background-image: url(\"/assets/images/assets/Vector.svg\");\n  background-repeat: no-repeat;\n  background-position: left center;\n  text-indent: 10px;\n}\n\n.space33 {\n  padding-left: 5px;\n}\n\n.item_man .table_body > div, .item_man .table_heading > div {\n  width: calc((100% - 100px) / 8);\n}\n\n.item_man .table_heading > div:last-child, .item_man .table_body > div:last-child {\n  width: 100px;\n}\n\n.item_man .table_heading > div:nth-child(5), .item_man .table_heading > div:nth-child(6), .item_man .table_heading > div:nth-child(8) {\n  line-height: 18px;\n}\n\n.dropdown1 {\n  position: relative;\n  display: inline-block;\n  line-height: 35px;\n}\n\n.dropdown-content1 {\n  display: none;\n  position: absolute;\n  background-color: #fff;\n  min-width: 200px;\n  right: 3px;\n  margin-top: 20px;\n  top: -150px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1200;\n}\n\n.dropdown-content1 a {\n  color: black;\n  text-decoration: none;\n  display: block;\n}\n\n.dropdown-content1 a:hover {\n  background-color: #ddd;\n  border-radius: 5px;\n}\n\n.dropdown1:hover .dropdown-content1 {\n  display: block;\n}\n\n.dot3 {\n  padding: 10px 0px;\n  cursor: pointer;\n}\n\n.wid100 {\n  width: 100%;\n}\n\n.wid80 {\n  width: 80%;\n}\n\n.pt10 {\n  padding-bottom: 10px;\n}\n\ninput[type=\"date\"]::-webkit-calendar-picker-indicator {\n  color: rgba(0, 0, 0, 0);\n  opacity: 1;\n  display: block;\n  background: url('cal.svg') no-repeat;\n  width: 20px;\n  height: 20px;\n  border-width: thin;\n  padding: 2px 0px;\n}\n\ninput[type=\"date\"] {\n  color: #787A7D;\n  cursor: pointer;\n}\n\ninput:focus {\n  outline: none;\n}\n\nbutton:focus {\n  outline: none;\n}\n\n.modal textarea {\n  height: 100px;\n}\n\n.alert {\n  font-weight: 400;\n  font-size: 18px;\n  line-height: 27px;\n  letter-spacing: 0.01em;\n  color: #4D5869;\n}\n\n.alert_text {\n  text-align: justify;\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 19px;\n  letter-spacing: 0.01em;\n  color: #858585;\n  margin: 0px 40px;\n  margin-top: 20px;\n}\n\n.center {\n  text-align: center;\n}\n\n.center img {\n  width: 44px;\n  height: 34px;\n}\n\n#delete1Modal .modal-dialog, #deleteitemModal .modal-dialog {\n  width: 350px;\n}\n\n@media (min-width: 576px) {\n  #delete1Modal .modal-dialog, #deleteitemModal .modal-dialog {\n    max-width: 350px;\n  }\n}\n\n#deleteModal .modal-dialog {\n  width: 350px;\n}\n\n@media (min-width: 576px) {\n  #deleteModal .modal-dialog {\n    max-width: 350px;\n  }\n}\n\n.pt101 {\n  padding-top: 30px;\n  margin: 0px 30px;\n}\n\n#itemModal .modal-dialog, #edititemModal .modal-dialog, #subbranchModal .modal-dialog, #add1Modal .modal-dialog, #addpayModal .modal-dialog, #viewpayModal .modal-dialog {\n  width: 750px;\n}\n\n@media (min-width: 576px) {\n  #itemModal .modal-dialog, #edititemModal .modal-dialog, #subbranchModal .modal-dialog, #add1Modal .modal-dialog, #addpayModal .modal-dialog, #viewpayModal .modal-dialog {\n    max-width: 750px;\n  }\n}\n\n.sec1, .sec2 {\n  width: 50%;\n}\n\n.sec1 {\n  padding-right: 10px;\n}\n\n.sec2 {\n  padding-left: 10px;\n}\n\ninput[type=\"date\"]:focus:before,\ninput[type=\"date\"]:valid:before {\n  content: \"\";\n}\n\n/* input[type=date]::-webkit-datetime-edit-text {\n      -webkit-appearance: none;\n      display: none;\n  }\n  input[type=date]::-webkit-datetime-edit-month-field{\n      -webkit-appearance: none;\n      display: none;\n  }\n  input[type=date]::-webkit-datetime-edit-day-field {\n      -webkit-appearance: none;\n      display: none;\n  }\n  input[type=date]::-webkit-datetime-edit-year-field {\n      -webkit-appearance: none;\n      display: none;\n  }*/\n\ninput[type=\"date\"]:before {\n  content: attr(placeholder) !important;\n  padding-right: 20px;\n}\n\n.allo_history .table_body > div, .allo_history .table_heading > div {\n  width: calc((100% - 50px) / 5);\n}\n\n.allo_history .table_heading > div:first-child, .allo_history .table_body > div:first-child {\n  width: 50px;\n  line-height: 4;\n}\n\n.in1 {\n  display: inline-block;\n  background: #CCFFAC;\n  border-radius: 5px;\n  width: 40px;\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 24px;\n  letter-spacing: 0.01em;\n  color: #323C47;\n  text-align: center;\n}\n\n.out {\n  display: inline-block;\n  background: #FFCF88;\n  border-radius: 5px;\n  width: 40px;\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 24px;\n  text-align: center;\n  letter-spacing: 0.01em;\n  color: #323C47;\n}\n\n#historyModal .modal-dialog, #historyModal .modal-dialog {\n  width: 650px;\n}\n\n@media (min-width: 576px) {\n  #historyModal .modal-dialog, #historyModal .modal-dialog {\n    max-width: 650px;\n  }\n}\n\n.supplier_m .table_body > div, .supplier_m .table_heading > div {\n  width: calc((100% - 200px) / 5);\n}\n\n.supplier_m .table_heading > div:last-child, .supplier_m .table_body > div:last-child {\n  width: 200px;\n}\n\n.purchase .table_body > div, .purchase .table_heading > div {\n  width: calc((100% - 100px) / 6);\n}\n\n.purchase .table_heading > div:last-child, .purchase .table_body > div:last-child {\n  width: 100px;\n}\n\ninput[type=file]::-webkit-file-upload-button {\n  border: none;\n  border-right: 2px solid #e3dadb;\n  padding: .6em .4em;\n  border-radius: .2em;\n  background-color: #fff;\n  -webkit-transition: 1s;\n  transition: 1s;\n  color: #109CF1;\n  outline: none;\n}\n\ninput[type=file] {\n  padding: 0px;\n  color: #B6B5B1;\n  cursor: pointer;\n}\n\n.div_1 {\n  border: 1px solid #D5D7DA;\n  width: 25%;\n  height: 27rem;\n  margin: 0px 10px;\n  border-radius: 5px;\n  margin-top: 20px;\n  padding: 20px;\n}\n\n.pt102 {\n  padding-bottom: 20px;\n}\n\n.textarea1 {\n  height: 100px;\n}\n\n.heading1 {\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: 0.01em;\n  color: #334D6E;\n}\n\n.div_2 {\n  width: 75%;\n  margin: 0px 10px;\n  border-radius: 5px;\n  margin-top: 20px;\n  padding: 20px;\n}\n\n.tablehead {\n  background: #DFE5F0;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n  line-height: 40px;\n  display: flex;\n}\n\n.tablehead > div {\n  text-align: center;\n  width: calc(100% / 5);\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 40px;\n  text-align: center;\n  letter-spacing: 0.01em;\n  color: #323C47;\n}\n\n.sel1 {\n  width: 252px;\n  background: #FAFAFA;\n  border: 1px solid #F0EDED;\n  border-radius: 4px;\n}\n\n.tablebody {\n  display: flex;\n  border-bottom: 1px solid #DFE5F0;\n}\n\n.tablebody > div {\n  text-align: center;\n  width: calc(100% / 5);\n  font-weight: normal;\n  font-size: 13px;\n  line-height: 60px;\n  letter-spacing: 0.01em;\n  color: #323C47;\n}\n\n.tabletotal {\n  display: flex;\n  background: #D4FFF2;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n  font-weight: 600;\n  font-size: 13px;\n  letter-spacing: 0.01em;\n  color: #323C47;\n}\n\n.tabletotal > div {\n  text-align: center;\n  line-height: 60px;\n  width: calc(100% / 5);\n}\n\n.tabletotal > div:nth-child(4) {\n  font-weight: 700;\n  font-size: 16px;\n}\n\n.created_date {\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 194px;\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 30px;\n  letter-spacing: 0.01em;\n  color: #323C47;\n  text-align: center;\n}\n\n.mr10 {\n  margin-right: 10px;\n}\n\n.flex30 {\n  display: flex;\n}\n\n.flex30 > div {\n  padding-left: 20px;\n  width: calc( 100% / 3);\n  line-height: 30px;\n  border-right: 1px solid #E5E3EE;\n}\n\n.flex30 > div:last-child {\n  border-right: none;\n}\n\n.name2 {\n  width: 34%;\n  font-weight: 600;\n  font-size: 12px;\n  letter-spacing: 0.01em;\n  color: #323C47;\n}\n\n.value2 {\n  width: 66%;\n  font-weight: 400;\n  font-size: 12px;\n  letter-spacing: 0.01em;\n  color: #323C47;\n}\n\n.flex30 > div:last-child .name2 {\n  width: 45%;\n}\n\n.flex30 > div:last-child .value2 {\n  width: 55%;\n}\n\n.item .tablehead > div, .item .tablebody > div {\n  width: calc(100% / 4);\n}\n\n.item .tabletotal {\n  border-bottom: 1px solid #DFE5F0;\n  background: #fff;\n  box-shadow: none;\n}\n\n.item .tabletotal > div {\n  width: calc(100% /4);\n}\n\n.sale .table_body > div, .sale .table_heading > div {\n  width: calc((100% - 100px) / 6);\n}\n\n.sale .table_heading > div:last-child, .sale .table_body > div:last-child {\n  width: 100px;\n}\n\n.sale .table_heading > div:nth-child(10), .sale .table_body > div:nth-child(10) {\n  line-height: 18px;\n}\n\n.div_11 {\n  border: 1px solid #D5D7DA;\n  width: 25%;\n  height: 37rem;\n  margin: 0px 10px;\n  border-radius: 5px;\n  margin-top: 20px;\n  padding: 20px;\n}\n\n.sale_add .tablehead > div {\n  width: calc(100% / 6);\n}\n\n.sale_add .tablebody > div {\n  width: calc(100% / 6);\n}\n\n.sale_add .tabletotal > div {\n  width: calc(100% / 6);\n}\n\n.sale_add .tabletotal > div:nth-child(5) {\n  font-weight: 700;\n  font-size: 16px;\n}\n\n.file_name {\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 18px;\n  letter-spacing: 0.01em;\n  color: #109CF1;\n}\n\n.history .table_body > div, .history .table_heading > div {\n  width: calc((100% - 50px) / 5);\n}\n\n.history .table_heading > div:first-child, .history .table_body > div:first-child {\n  width: 50px;\n}\n\n.nav-item .nav-link {\n  font-weight: 600;\n  color: #405877;\n  padding-bottom: 8px;\n  padding-top: 10px;\n  cursor: pointer;\n  font-size: 13px;\n  float: left;\n  background: none;\n}\n\n.nav-item .active {\n  border-bottom: 3px solid #109cf1 !important;\n  color: #109cf1 !important;\n}\n\n.modal {\n  width: 100%;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n}\n\n.right {\n  float: left;\n  margin: 5px;\n}\n\n.modal-dialog {\n  margin: 0 auto;\n  top: 10%;\n}\n\n.modal-header:before {\n  display: none;\n}\n\n.modal-title {\n  color: #2B2626;\n  font-weight: 600;\n  font-size: 13px;\n  font-family: 'Open Sans', sans-serif;\n  margin-bottom: 0px;\n}\n\n.errormsg {\n  height: 10px;\n}\n\n.help-block {\n  color: red;\n  margin-bottom: 0%;\n  padding-left: 2px;\n}\n\n.cancel {\n  background-color: white;\n  color: #109CF1;\n  padding: 0px 20px;\n  font-size: 12px;\n  border: solid 2px #109CF1;\n  border-radius: 5px;\n  font-weight: 500;\n  height: 35px;\n  margin-right: 15px;\n}\n\n.align {\n  text-align: center;\n}\n\n.multiselect {\n  width: 330px;\n  height: 35px;\n  left: 30px;\n  top: 63px;\n  background: #FFFFFF;\n  box-sizing: border-box;\n  border-radius: 4px;\n  margin-top: 20px;\n}\n\n#deletesModal .modal-dialog {\n  width: 350px;\n}\n\n@media (min-width: 576px) {\n  #deletesModal .modal-dialog {\n    max-width: 350px;\n  }\n}\n\n.center {\n  text-align: center;\n}\n\n.deleteImg, li {\n  float: left;\n  margin: 3px;\n}\n\n.p_title {\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 15px;\n  letter-spacing: 0.01em;\n  color: #323C47;\n  margin-bottom: 5px;\n}\n\n.has-error .control-label {\n  color: black;\n}\n\n.help-block {\n  color: red;\n  margin-bottom: 0%;\n}\n\n.text-danger {\n  color: red;\n  padding-left: 2px;\n}\n\n.scrollable {\n  max-height: 70vh;\n  overflow-y: auto;\n}\n\n.dropdown-content1 {\n  display: none;\n  position: absolute;\n  background-color: #fff;\n  min-width: 200px;\n  right: 3px;\n  margin-top: 20px;\n  top: -100px;\n  text-align: left;\n  border-radius: 10px;\n}\n\n.dropdown-content1 a {\n  padding-left: 8px;\n}\n\n.ser {\n  margin: 10px 0px;\n}\n\n.illustration-container {\n  display: block;\n}\n\n.illustration-container .illustration-img {\n  width: 40%;\n  margin-left: 25%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbnZlbnRvcnktbW9kdWxlL2ludmVudG9yeS1tb2R1bGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaW52ZW50b3J5LW1vZHVsZS9zYWxlLWl0ZW0vc2FsZS1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVztBQ0NmOztBREVFO0VBQ0Usb0NBQW9DO0FDQ3hDOztBRENFO0VBQ0UsYUFBYTtBQ0VqQjs7QURBRTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZUFBZTtBQ0duQjs7QURERTtFQUNFLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZix5QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZUFBZTtBQ0luQjs7QURGRztFQUNDLGlCQUFpQjtFQUVqQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7QUNJbEI7O0FERkU7RUFDRSxpQkFBaUI7RUFFakIsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNkLFlBQVc7QUNJakI7O0FEREc7RUFDSSxhQUFhO0FDSXBCOztBREZFO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysa0JBQWtCO0FDS3RCOztBREhFO0VBQ0UsYUFBYTtBQ01qQjs7QURKRTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7QUNPbEM7O0FETEU7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0FDUXBCOztBRE5FO0VBQ0ksK0NBQTRDO0VBQzVDLHVEQUFvRDtFQUNwRCxvREFBaUQ7RUFDbkQsaUJBQWlCO0FDU3JCOztBRFBFO0VBQ0Usa0JBQWtCO0FDVXRCOztBRFJFO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtFQUMxQixzQkFBQTtFQUVDLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsMENBQTBDO0FDVTlDOztBRE5FO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsY0FBYztFQUNmLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUNTbkI7O0FETkU7RUFDRyxXQUFXO0VBRVosYUFBYTtFQUNiLGtCQUFrQjtFQUNsQiwwQ0FBMEM7RUFDMUMsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQ1FyQjs7QURORTtFQUVFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGNBQWM7RUFDZixxQkFBQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7QUNRdEI7O0FESkU7RUFDQSxrQkFBaUI7QUNPbkI7O0FETEU7RUFDQyxZQUFZO0FDUWY7O0FETEU7RUFDRSwrQkFBK0I7QUNRbkM7O0FETkU7RUFDRSxXQUFXO0FDU2Y7O0FEUEU7RUFDRSxZQUFZO0FDVWhCOztBRFJFO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUNXaEI7O0FEVEU7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0FDWXZCOztBRFZFO0VBQ0UsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUNyQixlQUFlO0VBQ2hCLFdBQVc7RUFDWCxZQUFZO0FDYWhCOztBRFhFO0VBQ0EsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpQkFBaUI7QUNjbkI7O0FEWkU7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxlQUFlO0FDZW5COztBRGJFO0VBQ0UsVUFBVTtBQ2dCZDs7QURkRTtFQUNFLFVBQVU7QUNpQmQ7O0FEZkU7RUFDRSxVQUFVO0FDa0JkOztBRGhCRTtFQUNFLFVBQVU7QUNtQmQ7O0FEakJFO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDakIsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2QsZUFBYztBQ29CaEI7O0FEbEJFO0VBQ0EsZ0JBQWdCO0VBQ2QsZUFBZTtFQUNqQixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxnQkFBZTtFQUNmLGtCQUFrQjtFQUNsQixtQkFBbUI7QUNxQnJCOztBRG5CRTtFQUNFLGdCQUFnQjtFQUNsQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixjQUFjO0FDc0JoQjs7QURuQkU7RUFDRSxZQUFZO0FDc0JoQjs7QURwQkU7RUFDRSxzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLDZCQUE2QjtBQ3VCakM7O0FEckJFO0VBQ0ksZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGVBQ0o7QUN1QkY7O0FEckJFO0VBQ00sMkNBQTJDO0VBQzdDLHlCQUF5QjtBQ3dCL0I7O0FEdEJFO0VBQ0ksY0FBYztFQUNkLG9CQUFvQjtFQUNwQixvQkFBb0I7RUFDcEIsaUJBQWlCO0FDeUJ2Qjs7QUR2QkU7RUFDRSxhQUFhO0FDMEJqQjs7QUR4QkU7RUFDRSxVQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLGFBQWE7QUMyQmpCOztBRHpCRTtFQUNFLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsZUFBZTtBQzRCbkI7O0FEMUJFO0VBQ0UscUJBQXFCO0VBQ25CLGVBQWU7RUFDakIsZ0JBQWdCO0VBQ2hCLGNBQWM7QUM2QmxCOztBRDNCRTtFQUNBLGlCQUFpQjtBQzhCbkI7O0FENUJFO0VBQ0UseURBQXlEO0VBQ3pELDRCQUE0QjtFQUM1QixnQ0FBK0I7RUFDL0IsaUJBQWlCO0FDK0JyQjs7QUQ3QkU7RUFDRSxpQkFBaUI7QUNnQ3JCOztBRDlCRTtFQUNFLCtCQUErQjtBQ2lDbkM7O0FEOUJFO0VBQ0UsWUFBWTtBQ2lDaEI7O0FEL0JFO0VBQ0UsaUJBQWlCO0FDa0NyQjs7QURoQ0U7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGlCQUFpQjtBQ21DckI7O0FEaENFO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsZ0JBQWU7RUFDZixVQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCwrQ0FBNEM7RUFDNUMsYUFBYTtBQ21DakI7O0FEaENFO0VBQ0UsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixjQUFjO0FDbUNsQjs7QURoQ0U7RUFBNEIsc0JBQXNCO0VBQ2xELGtCQUFrQjtBQ29DcEI7O0FEbENFO0VBQXFDLGNBQWM7QUNzQ3JEOztBRHJDRTtFQUNBLGlCQUFpQjtFQUNqQixlQUFlO0FDd0NqQjs7QUR0Q0U7RUFDRSxXQUFXO0FDeUNmOztBRHZDRTtFQUNFLFVBQVU7QUMwQ2Q7O0FEdkNFO0VBQ0Usb0JBQW9CO0FDMEN4Qjs7QUR4Q0U7RUFDSSx1QkFBdUI7RUFDdkIsVUFBVTtFQUNWLGNBQWM7RUFDZCxvQ0FBdUQ7RUFDdkQsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FDMkN0Qjs7QUR6Q0U7RUFDRSxjQUFjO0VBQ2QsZUFBZTtBQzRDbkI7O0FEMUNFO0VBQ0UsYUFBYTtBQzZDakI7O0FEM0NFO0VBQ0UsYUFBYTtBQzhDakI7O0FENUNFO0VBQ0UsYUFBYTtBQytDakI7O0FEN0NFO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLGNBQWM7QUNnRGxCOztBRDlDRTtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUNpRHBCOztBRDlDRTtFQUNFLGtCQUFrQjtBQ2lEdEI7O0FEL0NFO0VBQ0UsV0FBVztFQUNiLFlBQVk7QUNrRGQ7O0FEOUNFO0VBQ0ksWUFBWTtBQ2lEbEI7O0FEL0NFO0VBQ0E7SUFDSSxnQkFBZTtFQ2tEbkI7QUFDRjs7QURoREU7RUFDSSxZQUFZO0FDbURsQjs7QURqREU7RUFDQztJQUNHLGdCQUFlO0VDb0RuQjtBQUNGOztBRGxERTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUNxRHBCOztBRG5ERTtFQUNJLFlBQVk7QUNzRGxCOztBRHBERTtFQUNDO0lBQ0csZ0JBQWU7RUN1RG5CO0FBQ0Y7O0FEckRFO0VBQ0UsVUFBVTtBQ3dEZDs7QUR0REU7RUFDRSxtQkFBbUI7QUN5RHZCOztBRHZERTtFQUNFLGtCQUFrQjtBQzBEdEI7O0FEeERFOztFQUVJLFdBQVc7QUMyRGpCOztBRHhERzs7Ozs7Ozs7Ozs7Ozs7O0lDeUVDOztBRHhERDtFQUNHLHFDQUFxQztFQUNyQyxtQkFBbUI7QUMwRHpCOztBRHhESTtFQUNBLDhCQUE4QjtBQzJEbEM7O0FEekRFO0VBQ0UsV0FBVztFQUNYLGNBQWM7QUM0RGxCOztBRDFERTtFQUNFLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsY0FBYztFQUNkLGtCQUFrQjtBQzZEdEI7O0FEM0RFO0VBQ0UscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsY0FBYztBQzhEbEI7O0FENURFO0VBQ0ksWUFBWTtBQytEbEI7O0FEN0RFO0VBQ0M7SUFDRyxnQkFBZTtFQ2dFbkI7QUFDRjs7QUQ5REk7RUFDQSwrQkFBK0I7QUNpRW5DOztBRC9ERTtFQUNFLFlBQVk7QUNrRWhCOztBRGhFSTtFQUNBLCtCQUErQjtBQ21FbkM7O0FEakVFO0VBQ0UsWUFBWTtBQ29FaEI7O0FEbEVFO0VBQ0UsWUFBWTtFQUNaLCtCQUErQjtFQUMvQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixzQkFBYztFQUFkLGNBQWM7RUFDZCxjQUFjO0VBQ2QsYUFBYTtBQ3FFakI7O0FEbEVFO0VBQ0UsWUFBWTtFQUNYLGNBQWM7RUFDZCxlQUFlO0FDcUVwQjs7QURuRUU7RUFDRSx5QkFBeUI7RUFDekIsVUFBVTtFQUNWLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixhQUFhO0FDc0VqQjs7QURwRUU7RUFDRSxvQkFBbUI7QUN1RXZCOztBRHJFRTtFQUNFLGFBQWE7QUN3RWpCOztBRHRFRTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixjQUFjO0FDeUVsQjs7QUR0RUU7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsYUFBYTtBQ3lFakI7O0FEdkVFO0VBQ0UsbUJBQW1CO0VBQ25CLDBDQUEwQztFQUMxQyxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGFBQWE7QUMwRWpCOztBRHhFRTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDdEIsZ0JBQWdCO0VBQ2pCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixjQUFjO0FDMkVoQjs7QUR6RUU7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixrQkFBa0I7QUM0RXRCOztBRDFFRTtFQUNFLGFBQWE7RUFDYixnQ0FBK0I7QUM2RW5DOztBRDNFRTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLGNBQWM7QUM4RWxCOztBRDVFRTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsMENBQTBDO0VBQzFDLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixjQUFjO0FDK0VsQjs7QUQ3RUU7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHFCQUFxQjtBQ2dGekI7O0FEOUVFO0VBQ0ksZ0JBQWdCO0VBQ2hCLGVBQWU7QUNpRnJCOztBRC9FRTtFQUVFLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2Qsa0JBQWtCO0FDaUZ0Qjs7QUQ5RUU7RUFDSSxrQkFBa0I7QUNpRnhCOztBRC9FRTtFQUNFLGFBQWE7QUNrRmpCOztBRDlFRTtFQUNFLGtCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLCtCQUErQjtBQ2lGbkM7O0FEL0VFO0VBQ0Usa0JBQWtCO0FDa0Z0Qjs7QURoRkU7RUFDRSxVQUFVO0VBQ1IsZ0JBQWdCO0VBQ2xCLGVBQWU7RUFFZixzQkFBc0I7RUFDdEIsY0FBYztBQ2tGbEI7O0FEL0VFO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtFQUNsQixlQUFlO0VBRWYsc0JBQXNCO0VBQ3RCLGNBQWU7QUNpRmpCOztBRDdFRTtFQUNFLFVBQVU7QUNnRmQ7O0FEOUVFO0VBQ0UsVUFBVTtBQ2lGZDs7QUQvRUU7RUFFRSxxQkFBcUI7QUNpRnpCOztBRC9FRTtFQUNHLGdDQUErQjtFQUNoQyxnQkFBZ0I7RUFDaEIsZ0JBQWU7QUNrRm5COztBRC9FRTtFQUNFLG9CQUFvQjtBQ2tGeEI7O0FEaEZJO0VBQ0EsK0JBQStCO0FDbUZuQzs7QURqRkU7RUFDRSxZQUFZO0FDb0ZoQjs7QURsRkU7RUFDRSxpQkFBaUI7QUNxRnJCOztBRG5GRTtFQUNFLHlCQUF5QjtFQUN6QixVQUFVO0VBQ1YsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGFBQWE7QUNzRmpCOztBRG5GRTtFQUVFLHFCQUFxQjtBQ3FGekI7O0FEakZFO0VBRUUscUJBQXFCO0FDbUZ6Qjs7QUQvRUU7RUFFRSxxQkFBcUI7QUNpRnpCOztBRC9FRTtFQUNJLGdCQUFnQjtFQUNoQixlQUFlO0FDa0ZyQjs7QURoRkU7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsY0FBYztBQ21GbEI7O0FEaEZJO0VBQ0EsOEJBQThCO0FDbUZsQzs7QURqRkU7RUFDRSxXQUFXO0FDb0ZmOztBRGxGRTtFQUVNLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsZUFBZTtFQUNmLFdBQVc7RUFDWCxnQkFBZ0I7QUNvRnhCOztBRDdGRTtFQVlNLDJDQUEyQztFQUMzQyx5QkFBeUI7QUNxRmpDOztBRGxGRTtFQUNNLFdBQVc7RUFDWCxZQUFZO0VBRVosdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQ29GM0I7O0FEbEZPO0VBQ0UsV0FBVztFQUNYLFdBQVc7QUNxRnBCOztBRG5GRztFQUNLLGNBQWM7RUFDZCxRQUFPO0FDc0ZmOztBRHBGSTtFQUNFLGFBQVk7QUN1RmxCOztBRHJGSTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLG9DQUFvQztFQUNwQyxrQkFBa0I7QUN3RnhCOztBRHRGRTtFQUNFLFlBQVc7QUN5RmY7O0FEdkZFO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtFQUVqQixpQkFBaUI7QUN5RnJCOztBRHZGSTtFQUNFLHVCQUF1QjtFQUNyQixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osa0JBQWtCO0FDMEYxQjs7QUR4Rkk7RUFDRSxrQkFBa0I7QUMyRnhCOztBRHpGSTtFQUNFLFlBQVk7RUFDZCxZQUFZO0VBQ1osVUFBVTtFQUNWLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixnQkFBZTtBQzRGbkI7O0FEMUZJO0VBQ0UsWUFBWTtBQzZGbEI7O0FEM0ZFO0VBQ0E7SUFDSSxnQkFBZTtFQzhGbkI7QUFDRjs7QUQ1RkU7RUFDSSxrQkFBa0I7QUMrRnhCOztBRDVGRTtFQUNFLFdBQVc7RUFDWCxXQUFVO0FDK0ZkOztBRDdGRTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUV0QixjQUFhO0VBQ2Isa0JBQWlCO0FDK0ZyQjs7QUQ3Rkk7RUFDRSxZQUFZO0FDZ0dsQjs7QUQ5Rk07RUFDQSxVQUFVO0VBQ1YsaUJBQWlCO0FDaUd2Qjs7QUQ5Rk07RUFDRSxVQUFVO0VBQ1YsaUJBQWdCO0FDaUd4Qjs7QUQvRkk7RUFDRSxnQkFBZ0I7RUFDZCxnQkFBZ0I7QUNrR3hCOztBRGhHSTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFFWCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FDa0d6Qjs7QUQ1R0k7RUFZRixpQkFBaUI7QUNvR25COztBRGpHTTtFQUNFLGdCQUFlO0FDb0d2Qjs7QURsR007RUFDRSxjQUFjO0FDcUd0Qjs7QUR0R007RUFHSSxVQUFVO0VBQ1YsZ0JBQWdCO0FDdUcxQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW52ZW50b3J5LW1vZHVsZS9zYWxlLWl0ZW0vc2FsZS1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcbiAgICBtYXJnaW46IDBweDtcbiAgICBcbiAgfVxuICBib2R5e1xuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgfVxuICAuZmxleHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG4gIC5ibHVlX2J1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEwOUNGMTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMHB4IDIwcHg7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBsaW5lLWhlaWdodDogMzVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgLndoaXRlX2J1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBjb2xvcjogIzEwOUNGMTtcbiAgICBwYWRkaW5nOiAwcHggMjBweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgYm9yZGVyOjFweCBzb2xpZCAjMTA5Q0YxO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAgLnNlbGVjdHtcbiAgICBwYWRkaW5nOiA3cHggMjBweDtcbiAgIC8vIHBhZGRpbmc6IDdweCAycHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogIzc4N0E3RDtcbiAgfVxuICAuaW5wdXR7XG4gICAgcGFkZGluZzogN3B4IDIwcHg7XG4gICAgXG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGhlaWdodDozNXB4O1xuICAgIH1cblxuICAgaW5wdXQ6Zm9jdXMsIHNlbGVjdDpmb2N1cyxidXR0b246Zm9jdXN7XG4gICAgICAgb3V0bGluZTogbm9uZTtcbiAgIH1cbiAgLnBhZ2VfaGVhZGluZz5we1xuICAgIGNvbG9yOiAjMzM0RDZFO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgfVxuICAuZmxleHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG4gIC5kaXNwbGF5e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG4gIC53OTh7XG4gICAgd2lkdGg6IDk4JTtcbiAgICBtYXJnaW46IDBweCBhdXRvO1xuICB9XG4gIC5oZWFkX3BhZGRpbmd7XG4gICAgICBib3gtc2hhZG93OiAwcHggN3B4IDVweCAtM3B4IHJnYmEoMCwwLDAsMC4xKTtcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDdweCA1cHggLTNweCByZ2JhKDAsMCwwLDAuMSk7XG4gICAgICAtbW96LWJveC1zaGFkb3c6IDBweCA3cHggNXB4IC0zcHggcmdiYSgwLDAsMCwwLjEpO1xuICAgIHBhZGRpbmc6IDE1cHggMHB4O1xuICB9XG4gIC5wYWdlaGVhZGluZ3NwYWNle1xuICAgIG1hcmdpbi1ib3R0b206IDdweDtcbiAgfVxuICAudGFibGVfaGVhZGluZ3tcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREZFNUYwO1xuICAgLyogcGFkZGluZzogMTBweCAwcHg7Ki9cbiAgICAvL21hcmdpbjogMTBweCAwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgXG4gIH1cbiAgXG4gIC50YWJsZV9oZWFkaW5nPmRpdntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICMzMjNDNDc7XG4gICBsaW5lLWhlaWdodDogMzVweDtcbiAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cbiAgXG4gIC50YWJsZV9ib2R5e1xuICAgICB3aWR0aDogMTAwJTtcbiAgICAvL21hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIH1cbiAgLnRhYmxlX2JvZHk+ZGl2e1xuICAgIFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICMzMjNDNDc7XG4gICAvKiBwYWRkaW5nOiA1cHggMHB4OyovXG4gICAgIG1hcmdpbjogYXV0bztcbiAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIFxuICB9XG4gIFxuICAubXIxMHtcbiAgbWFyZ2luLXJpZ2h0OjEwcHg7XG4gIH1cbiAgLncyNDB7XG4gICB3aWR0aDogMjQwcHg7XG4gIH1cbiAgXG4gIC5pdGVtX2NhdCAudGFibGVfYm9keT5kaXYsLml0ZW1fY2F0IC50YWJsZV9oZWFkaW5nPmRpdntcbiAgICB3aWR0aDogY2FsYygoMTAwJSAtIDI1MHB4KSAvIDIpO1xuICB9XG4gIC5pdGVtX2NhdCAudGFibGVfaGVhZGluZz5kaXY6Zmlyc3QtY2hpbGQsLml0ZW1fY2F0IC50YWJsZV9ib2R5PmRpdjpmaXJzdC1jaGlsZHtcbiAgICB3aWR0aDogNTBweDtcbiAgfVxuICAuaXRlbV9jYXQgLnRhYmxlX2hlYWRpbmc+ZGl2Omxhc3QtY2hpbGQsLml0ZW1fY2F0IC50YWJsZV9ib2R5PmRpdjpsYXN0LWNoaWxke1xuICAgIHdpZHRoOiAyMDBweDtcbiAgfVxuICAuZ3JvdXAxOHtcbiAgICB3aWR0aDogMThweDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbiAgLnB0MTV7XG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgfVxuICAuYm90dG9tX3BhZ2lnbmF0aW9ue1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDBweDtcbiAgICB6LWluZGV4OiAxMDA7XG4gIH1cbiAgLmJvdHRvbV9wYWdpZ25hdGlvbiBwe1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICB9XG4gIC5ib3R0b21fcGFnaWduYXRpb24gc2VsZWN0e1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICMwMDc5RkY7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICB9XG4gIC5ib3R0b21fcGFnaWduYXRpb24gLncyMHtcbiAgICB3aWR0aDogMjAlO1xuICB9XG4gIC5ib3R0b21fcGFnaWduYXRpb24gLncxMHtcbiAgICB3aWR0aDogMTAlO1xuICB9XG4gIC5ib3R0b21fcGFnaWduYXRpb24gLnc1MHtcbiAgICB3aWR0aDogNTAlO1xuICB9XG4gIC5ib3R0b21fcGFnaWduYXRpb24gLnc0MHtcbiAgICB3aWR0aDogNDAlO1xuICB9XG4gIC5udW1iZXJ7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgbWFyZ2luOjBweCA0cHg7XG4gIH1cbiAgLmFjdGl2ZV9jaXJjbGV7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6MnB4IDdweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiAjMDA3OUZGO1xuICB9XG4gIC5uZXh0e1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gIGNvbG9yOiAjMDA3OUZGO1xuICBcbiAgfVxuICAudzQ1MHtcbiAgICB3aWR0aDogNDUwcHg7XG4gIH1cbiAgLndoaXRle1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIyN3B4KTtcbiAgICBib3JkZXItdG9wOiAzcHggc29saWQgI0VkZWRlZDtcbiAgfVxuICAubmF2LWl0ZW0gLm5hdi1saW5re1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGNvbG9yOiAjNDA1ODc3O1xuICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogMTNweFxuICB9XG4gIFxuICAubmF2LWl0ZW0gLm5hdi1saW5rLmFjdGl2ZSB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMTA5Q0YxICFpbXBvcnRhbnQ7XG4gICAgICBjb2xvcjogIzEwOUNGMSAhaW1wb3J0YW50O1xuICB9XG4gIC5uYXYtbGluayB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHBhZGRpbmc6IDEuNXJlbSAwcmVtO1xuICAgICAgbWFyZ2luOiAtMXJlbSAxLjVyZW07XG4gICAgICBtYXJnaW4tbGVmdDogMHJlbTtcbiAgfVxuICAuZmxleHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG4gIC53MTV7XG4gICAgd2lkdGg6IDE1JTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREZFNUYwO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cbiAgLmxpc3Q+bGl7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiA3cHggMHB4O1xuICAgIG1hcmdpbjogN3B4IDBweDtcbiAgfVxuICAubGlzdD5saT5hPnNwYW57XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICMzMzRENkU7XG4gIH1cbiAgLmxpc3Q+bGkgaW1ne1xuICBwYWRkaW5nOiAwcHggMTBweDtcbiAgfSBcbiAgLm1hZ25pZnlpbmctZ2xhc3N7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltYWdlcy9hc3NldHMvVmVjdG9yLnN2ZycpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjpsZWZ0IGNlbnRlcjtcbiAgICB0ZXh0LWluZGVudDogMTBweDtcbiAgfVxuICAuc3BhY2UzM3tcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgfVxuICAuaXRlbV9tYW4gLnRhYmxlX2JvZHk+ZGl2LC5pdGVtX21hbiAudGFibGVfaGVhZGluZz5kaXZ7XG4gICAgd2lkdGg6IGNhbGMoKDEwMCUgLSAxMDBweCkgLyA4KTtcbiAgfVxuICBcbiAgLml0ZW1fbWFuIC50YWJsZV9oZWFkaW5nPmRpdjpsYXN0LWNoaWxkLC5pdGVtX21hbiAudGFibGVfYm9keT5kaXY6bGFzdC1jaGlsZHtcbiAgICB3aWR0aDogMTAwcHg7XG4gIH1cbiAgLml0ZW1fbWFuIC50YWJsZV9oZWFkaW5nPmRpdjpudGgtY2hpbGQoNSksLml0ZW1fbWFuIC50YWJsZV9oZWFkaW5nPmRpdjpudGgtY2hpbGQoNiksLml0ZW1fbWFuIC50YWJsZV9oZWFkaW5nPmRpdjpudGgtY2hpbGQoOCl7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7fVxuICBcbiAgLmRyb3Bkb3duMSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBsaW5lLWhlaWdodDogMzVweDtcbiAgfVxuICBcbiAgLmRyb3Bkb3duLWNvbnRlbnQxIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIG1pbi13aWR0aDoyMDBweDtcbiAgICByaWdodDozcHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICB0b3A6IC0xNTBweDtcbiAgICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcbiAgICB6LWluZGV4OiAxMjAwO1xuICB9XG4gIFxuICAuZHJvcGRvd24tY29udGVudDEgYSB7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICBcbiAgLmRyb3Bkb3duLWNvbnRlbnQxIGE6aG92ZXIge2JhY2tncm91bmQtY29sb3I6ICNkZGQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDt9XG4gIFxuICAuZHJvcGRvd24xOmhvdmVyIC5kcm9wZG93bi1jb250ZW50MSB7ZGlzcGxheTogYmxvY2s7fVxuICAuZG90M3tcbiAgcGFkZGluZzogMTBweCAwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAud2lkMTAwe1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC53aWQ4MHtcbiAgICB3aWR0aDogODAlO1xuICB9XG4gIFxuICAucHQxMHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgfVxuICBpbnB1dFt0eXBlPVwiZGF0ZVwiXTo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcbiAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcxL2NhbC5zdmcpIG5vLXJlcGVhdDtcbiAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgYm9yZGVyLXdpZHRoOiB0aGluO1xuICAgICAgcGFkZGluZzogMnB4IDBweDtcbiAgfVxuICBpbnB1dFt0eXBlPVwiZGF0ZVwiXXtcbiAgICBjb2xvcjogIzc4N0E3RDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgaW5wdXQ6Zm9jdXN7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuICBidXR0b246Zm9jdXN7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuICAubW9kYWwgdGV4dGFyZWF7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgfVxuICAuYWxlcnR7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI3cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgICBjb2xvcjogIzRENTg2OTtcbiAgfVxuICAuYWxlcnRfdGV4dHtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gICAgY29sb3I6ICM4NTg1ODU7XG4gICAgbWFyZ2luOiAwcHggNDBweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICBcbiAgfVxuICAuY2VudGVye1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuY2VudGVyIGltZ3tcbiAgICB3aWR0aDogNDRweDtcbiAgaGVpZ2h0OiAzNHB4O1xuICB9XG5cbiAgXG4gICNkZWxldGUxTW9kYWwgLm1vZGFsLWRpYWxvZywjZGVsZXRlaXRlbU1vZGFsIC5tb2RhbC1kaWFsb2cge1xuICAgICAgd2lkdGg6IDM1MHB4O1xuICB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiA1NzZweCl7XG4gICNkZWxldGUxTW9kYWwgLm1vZGFsLWRpYWxvZywjZGVsZXRlaXRlbU1vZGFsIC5tb2RhbC1kaWFsb2cgIHtcbiAgICAgIG1heC13aWR0aDozNTBweDtcbiAgfVxuICB9XG4gICNkZWxldGVNb2RhbCAubW9kYWwtZGlhbG9nIHtcbiAgICAgIHdpZHRoOiAzNTBweDtcbiAgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpe1xuICAgI2RlbGV0ZU1vZGFsIC5tb2RhbC1kaWFsb2cge1xuICAgICAgbWF4LXdpZHRoOjM1MHB4O1xuICB9XG4gIH1cbiAgLnB0MTAxe1xuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgIG1hcmdpbjogMHB4IDMwcHg7XG4gIH1cbiAgI2l0ZW1Nb2RhbCAubW9kYWwtZGlhbG9nLCNlZGl0aXRlbU1vZGFsIC5tb2RhbC1kaWFsb2csI3N1YmJyYW5jaE1vZGFsIC5tb2RhbC1kaWFsb2csI2FkZDFNb2RhbCAubW9kYWwtZGlhbG9nLCNhZGRwYXlNb2RhbCAubW9kYWwtZGlhbG9nLCN2aWV3cGF5TW9kYWwgLm1vZGFsLWRpYWxvZyB7XG4gICAgICB3aWR0aDogNzUwcHg7XG4gIH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KXtcbiAgICNpdGVtTW9kYWwgLm1vZGFsLWRpYWxvZywjZWRpdGl0ZW1Nb2RhbCAubW9kYWwtZGlhbG9nLCNzdWJicmFuY2hNb2RhbCAubW9kYWwtZGlhbG9nLCNhZGQxTW9kYWwgLm1vZGFsLWRpYWxvZywjYWRkcGF5TW9kYWwgLm1vZGFsLWRpYWxvZywjdmlld3BheU1vZGFsIC5tb2RhbC1kaWFsb2cge1xuICAgICAgbWF4LXdpZHRoOjc1MHB4O1xuICB9XG4gIH1cbiAgLnNlYzEsLnNlYzJ7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxuICAuc2VjMXtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICB9XG4gIC5zZWMye1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgfVxuICBpbnB1dFt0eXBlPVwiZGF0ZVwiXTpmb2N1czpiZWZvcmUsXG4gICAgaW5wdXRbdHlwZT1cImRhdGVcIl06dmFsaWQ6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgfVxuICBcbiAgIC8qIGlucHV0W3R5cGU9ZGF0ZV06Oi13ZWJraXQtZGF0ZXRpbWUtZWRpdC10ZXh0IHtcbiAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgaW5wdXRbdHlwZT1kYXRlXTo6LXdlYmtpdC1kYXRldGltZS1lZGl0LW1vbnRoLWZpZWxke1xuICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICBpbnB1dFt0eXBlPWRhdGVdOjotd2Via2l0LWRhdGV0aW1lLWVkaXQtZGF5LWZpZWxkIHtcbiAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgaW5wdXRbdHlwZT1kYXRlXTo6LXdlYmtpdC1kYXRldGltZS1lZGl0LXllYXItZmllbGQge1xuICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgfSovXG4gIFxuICAgaW5wdXRbdHlwZT1cImRhdGVcIl06YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6IGF0dHIocGxhY2Vob2xkZXIpICFpbXBvcnRhbnQ7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgIH1cbiAgICAuYWxsb19oaXN0b3J5IC50YWJsZV9ib2R5PmRpdiwuYWxsb19oaXN0b3J5IC50YWJsZV9oZWFkaW5nPmRpdntcbiAgICB3aWR0aDogY2FsYygoMTAwJSAtIDUwcHgpIC8gNSk7XG4gIH1cbiAgLmFsbG9faGlzdG9yeSAudGFibGVfaGVhZGluZz5kaXY6Zmlyc3QtY2hpbGQsLmFsbG9faGlzdG9yeSAudGFibGVfYm9keT5kaXY6Zmlyc3QtY2hpbGR7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDQ7XG4gIH1cbiAgLmluMXtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYmFja2dyb3VuZDogI0NDRkZBQztcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgICBjb2xvcjogIzMyM0M0NztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLm91dHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYmFja2dyb3VuZDogI0ZGQ0Y4ODtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gICAgY29sb3I6ICMzMjNDNDc7XG4gIH1cbiAgI2hpc3RvcnlNb2RhbCAubW9kYWwtZGlhbG9nLCNoaXN0b3J5TW9kYWwgLm1vZGFsLWRpYWxvZyB7XG4gICAgICB3aWR0aDogNjUwcHg7XG4gIH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KXtcbiAgICNoaXN0b3J5TW9kYWwgLm1vZGFsLWRpYWxvZywjaGlzdG9yeU1vZGFsIC5tb2RhbC1kaWFsb2cge1xuICAgICAgbWF4LXdpZHRoOjY1MHB4O1xuICB9XG4gIH1cbiAgICAuc3VwcGxpZXJfbSAudGFibGVfYm9keT5kaXYsLnN1cHBsaWVyX20gLnRhYmxlX2hlYWRpbmc+ZGl2e1xuICAgIHdpZHRoOiBjYWxjKCgxMDAlIC0gMjAwcHgpIC8gNSk7XG4gIH1cbiAgLnN1cHBsaWVyX20gLnRhYmxlX2hlYWRpbmc+ZGl2Omxhc3QtY2hpbGQsLnN1cHBsaWVyX20gLnRhYmxlX2JvZHk+ZGl2Omxhc3QtY2hpbGR7XG4gICAgd2lkdGg6IDIwMHB4O1xuICB9XG4gICAgLnB1cmNoYXNlIC50YWJsZV9ib2R5PmRpdiwucHVyY2hhc2UgLnRhYmxlX2hlYWRpbmc+ZGl2e1xuICAgIHdpZHRoOiBjYWxjKCgxMDAlIC0gMTAwcHgpIC8gNik7XG4gIH1cbiAgLnB1cmNoYXNlIC50YWJsZV9oZWFkaW5nPmRpdjpsYXN0LWNoaWxkLC5wdXJjaGFzZSAudGFibGVfYm9keT5kaXY6bGFzdC1jaGlsZHtcbiAgICB3aWR0aDogMTAwcHg7XG4gIH1cbiAgaW5wdXRbdHlwZT1maWxlXTo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjZTNkYWRiO1xuICAgIHBhZGRpbmc6IC42ZW0gLjRlbTtcbiAgICBib3JkZXItcmFkaXVzOiAuMmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgdHJhbnNpdGlvbjogMXM7XG4gICAgY29sb3I6ICMxMDlDRjE7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuICBcbiAgaW5wdXRbdHlwZT1maWxlXSB7XG4gICAgcGFkZGluZzogMHB4O1xuICAgICBjb2xvcjogI0I2QjVCMTtcbiAgICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIC5kaXZfMXtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRDVEN0RBO1xuICAgIHdpZHRoOiAyNSU7XG4gICAgaGVpZ2h0OiAyN3JlbTtcbiAgICBtYXJnaW46IDBweCAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gIH1cbiAgLnB0MTAye1xuICAgIHBhZGRpbmctYm90dG9tOjIwcHg7XG4gIH1cbiAgLnRleHRhcmVhMXtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICB9XG4gIC5oZWFkaW5nMXtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICAgIGNvbG9yOiAjMzM0RDZFO1xuICB9XG4gIFxuICAuZGl2XzJ7XG4gICAgd2lkdGg6IDc1JTtcbiAgICBtYXJnaW46IDBweCAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gIH1cbiAgLnRhYmxlaGVhZHtcbiAgICBiYWNrZ3JvdW5kOiAjREZFNUYwO1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuICAudGFibGVoZWFkPmRpdntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAvIDUpO1xuICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICBjb2xvcjogIzMyM0M0NztcbiAgfVxuICAuc2VsMXtcbiAgICB3aWR0aDogMjUycHg7XG4gICAgYmFja2dyb3VuZDogI0ZBRkFGQTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRjBFREVEO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgfVxuICAudGFibGVib2R5e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgI0RGRTVGMDtcbiAgfVxuICAudGFibGVib2R5PmRpdntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAvIDUpO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gICAgY29sb3I6ICMzMjNDNDc7XG4gIH1cbiAgLnRhYmxldG90YWx7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBiYWNrZ3JvdW5kOiAjRDRGRkYyO1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgICBjb2xvcjogIzMyM0M0NztcbiAgfVxuICAudGFibGV0b3RhbD5kaXZ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyA1KTtcbiAgfVxuICAudGFibGV0b3RhbD5kaXY6bnRoLWNoaWxkKDQpe1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuICAuY3JlYXRlZF9kYXRle1xuICAgLy8gYmFja2dyb3VuZDp1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZzEvdGVhbF9yZWMuc3ZnKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgd2lkdGg6IDE5NHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gICAgY29sb3I6ICMzMjNDNDc7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBcbiAgfVxuICAubXIxMHtcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxuICAuZmxleDMwe1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgXG4gICAgXG4gIH1cbiAgLmZsZXgzMD5kaXZ7XG4gICAgcGFkZGluZy1sZWZ0OjIwcHg7XG4gICAgd2lkdGg6IGNhbGMoIDEwMCUgLyAzKTtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjRTVFM0VFO1xuICB9XG4gIC5mbGV4MzA+ZGl2Omxhc3QtY2hpbGR7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICB9XG4gIC5uYW1lMntcbiAgICB3aWR0aDogMzQlO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gICAgY29sb3I6ICMzMjNDNDc7XG4gIFxuICB9XG4gIC52YWx1ZTJ7XG4gICAgd2lkdGg6IDY2JTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIFxuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICBjb2xvcjogICMzMjNDNDc7XG4gIFxuICB9XG4gXG4gIC5mbGV4MzA+ZGl2Omxhc3QtY2hpbGQgLm5hbWUye1xuICAgIHdpZHRoOiA0NSU7XG4gIH1cbiAgLmZsZXgzMD5kaXY6bGFzdC1jaGlsZCAudmFsdWUye1xuICAgIHdpZHRoOiA1NSU7XG4gIH1cbiAgLml0ZW0gLnRhYmxlaGVhZD5kaXYsLml0ZW0gLnRhYmxlYm9keT5kaXZ7XG4gIFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyA0KTtcbiAgfVxuICAuaXRlbSAudGFibGV0b3RhbHtcbiAgICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgI0RGRTVGMDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJveC1zaGFkb3c6bm9uZTtcbiAgXG4gIH1cbiAgLml0ZW0gLnRhYmxldG90YWw+ZGl2e1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLzQpO1xuICB9XG4gICAgLnNhbGUgLnRhYmxlX2JvZHk+ZGl2LC5zYWxlIC50YWJsZV9oZWFkaW5nPmRpdntcbiAgICB3aWR0aDogY2FsYygoMTAwJSAtIDEwMHB4KSAvIDYpO1xuICB9XG4gIC5zYWxlIC50YWJsZV9oZWFkaW5nPmRpdjpsYXN0LWNoaWxkLC5zYWxlIC50YWJsZV9ib2R5PmRpdjpsYXN0LWNoaWxke1xuICAgIHdpZHRoOiAxMDBweDtcbiAgfVxuICAuc2FsZSAudGFibGVfaGVhZGluZz5kaXY6bnRoLWNoaWxkKDEwKSwuc2FsZSAudGFibGVfYm9keT5kaXY6bnRoLWNoaWxkKDEwKXtcbiAgICBsaW5lLWhlaWdodDogMThweDtcbiAgfVxuICAuZGl2XzExe1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNENUQ3REE7XG4gICAgd2lkdGg6IDI1JTtcbiAgICBoZWlnaHQ6IDM3cmVtO1xuICAgIG1hcmdpbjogMHB4IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgfVxuICBcbiAgLnNhbGVfYWRkIC50YWJsZWhlYWQ+ZGl2e1xuICBcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gNik7XG4gIFxuICB9XG4gIFxuICAuc2FsZV9hZGQgLnRhYmxlYm9keT5kaXZ7XG4gIFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyA2KTtcbiAgXG4gIH1cbiAgXG4gIC5zYWxlX2FkZCAudGFibGV0b3RhbD5kaXZ7XG4gIFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyA2KTtcbiAgfVxuICAuc2FsZV9hZGQgLnRhYmxldG90YWw+ZGl2Om50aC1jaGlsZCg1KXtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbiAgLmZpbGVfbmFtZXtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICAgIGNvbG9yOiAjMTA5Q0YxO1xuICBcbiAgfVxuICAgIC5oaXN0b3J5IC50YWJsZV9ib2R5PmRpdiwuaGlzdG9yeSAudGFibGVfaGVhZGluZz5kaXZ7XG4gICAgd2lkdGg6IGNhbGMoKDEwMCUgLSA1MHB4KSAvIDUpO1xuICB9XG4gIC5oaXN0b3J5IC50YWJsZV9oZWFkaW5nPmRpdjpmaXJzdC1jaGlsZCwuaGlzdG9yeSAudGFibGVfYm9keT5kaXY6Zmlyc3QtY2hpbGR7XG4gICAgd2lkdGg6IDUwcHg7XG4gIH1cbiAgLm5hdi1pdGVtIHtcbiAgICAubmF2LWxpbmsge1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBjb2xvcjogIzQwNTg3NztcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICB9XG4gICAgLmFjdGl2ZSB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMTA5Y2YxICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiAjMTA5Y2YxICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG4gIC5tb2RhbCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgIH1cbiAgICAgICAucmlnaHR7XG4gICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgIH1cbiAgIC5tb2RhbC1kaWFsb2cge1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgdG9wOjEwJTtcbiAgICB9XG4gICAgLm1vZGFsLWhlYWRlcjpiZWZvcmV7XG4gICAgICBkaXNwbGF5Om5vbmU7XG4gICAgfVxuICAgIC5tb2RhbC10aXRsZSB7XG4gICAgICBjb2xvcjogIzJCMjYyNjtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIH1cbiAgLmVycm9ybXNne1xuICAgIGhlaWdodDoxMHB4O1xuICB9XG4gIC5oZWxwLWJsb2Nre1xuICAgIGNvbG9yOiByZWQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMCU7XG4gICAgLy90ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy1sZWZ0OiAycHg7XG4gICAgfVxuICAgIC5jYW5jZWx7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgY29sb3I6ICMxMDlDRjE7XG4gICAgICAgIHBhZGRpbmc6IDBweCAyMHB4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGJvcmRlcjogc29saWQgMnB4ICMxMDlDRjE7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgfVxuICAgIC5hbGlnbntcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgLm11bHRpc2VsZWN0e1xuICAgICAgd2lkdGg6IDMzMHB4O1xuICAgIGhlaWdodDogMzVweDtcbiAgICBsZWZ0OiAzMHB4O1xuICAgIHRvcDogNjNweDtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIG1hcmdpbi10b3A6MjBweDtcbiAgICB9XG4gICAgI2RlbGV0ZXNNb2RhbCAubW9kYWwtZGlhbG9nIHtcbiAgICAgIHdpZHRoOiAzNTBweDtcbiAgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpe1xuICAjZGVsZXRlc01vZGFsIC5tb2RhbC1kaWFsb2cge1xuICAgICAgbWF4LXdpZHRoOjM1MHB4O1xuICB9XG4gIH1cbiAgLmNlbnRlcntcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuIFxuICAuZGVsZXRlSW1nLGxpe1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbjozcHg7XG4gIH1cbiAgLnBfdGl0bGV7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgICAvL2NvbG9yOiAjMkIyNjI2O1xuICAgIGNvbG9yOiMzMjNDNDc7XG4gICAgbWFyZ2luLWJvdHRvbTo1cHg7XG4gICAgfVxuICAgIC5oYXMtZXJyb3IgLmNvbnRyb2wtbGFiZWx7XG4gICAgICBjb2xvcjogYmxhY2s7XG4gICAgICB9XG4gICAgICAuaGVscC1ibG9ja3tcbiAgICAgIGNvbG9yOiByZWQ7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwJTtcbiAgICAgIFxuICAgICAgfVxuICAgICAgLnRleHQtZGFuZ2Vye1xuICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6MnB4O1xuICAgICAgfVxuICAgIC5zY3JvbGxhYmxle1xuICAgICAgbWF4LWhlaWdodDogNzB2aDtcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICB9XG4gICAgLmRyb3Bkb3duLWNvbnRlbnQxe1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICBtaW4td2lkdGg6IDIwMHB4O1xuICAgICAgcmlnaHQ6IDNweDtcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICB0b3A6IC0xMDBweDtcbiAgICAgIC8vdG9wOi0xMXB4O1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgIGF7XG4gIHBhZGRpbmctbGVmdDogOHB4OztcbiAgICAgfVxuICAgICAgfVxuICAgICAgLnNlcntcbiAgICAgICAgbWFyZ2luOjEwcHggMHB4O1xuICAgICAgfVxuICAgICAgLmlsbHVzdHJhdGlvbi1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgLmlsbHVzdHJhdGlvbi1pbWcge1xuICAgICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDI1JTtcbiAgICAgICAgfVxuICAgICAgfSBcbiAgICAiLCJAaW1wb3J0IFwiLi4vaW52ZW50b3J5LW1vZHVsZS5jb21wb25lbnQuc2Nzc1wiO1xuIl19 */";
      /***/
    },

    /***/
    "./src/app/components/inventory-module/sale-item/sale-item.component.ts":
    /*!******************************************************************************!*\
      !*** ./src/app/components/inventory-module/sale-item/sale-item.component.ts ***!
      \******************************************************************************/

    /*! exports provided: SaleItemComponent */

    /***/
    function srcAppComponentsInventoryModuleSaleItemSaleItemComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SaleItemComponent", function () {
        return SaleItemComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _services_export_to_pdf_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../services/export-to-pdf.service */
      "./src/app/services/export-to-pdf.service.ts");
      /* harmony import */


      var _services_excel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../services/excel.service */
      "./src/app/services/excel.service.ts");
      /* harmony import */


      var _services_message_show_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../services/message-show.service */
      "./src/app/services/message-show.service.ts");
      /* harmony import */


      var _services_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../services/http.service */
      "./src/app/services/http.service.ts");
      /* harmony import */


      var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../services/authenticator.service */
      "./src/app/services/authenticator.service.ts");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! moment */
      "./node_modules/moment/moment.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

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

      var SaleItemComponent =
      /** @class */
      function () {
        var SaleItemComponent = /*#__PURE__*/function () {
          function SaleItemComponent(httpService, auth, msgService, _pdfService, excelService, router) {
            _classCallCheck(this, SaleItemComponent);

            this.httpService = httpService;
            this.auth = auth;
            this.msgService = msgService;
            this._pdfService = _pdfService;
            this.excelService = excelService;
            this.router = router;
            this.tempLocationList = [];
            this.assignDataforDownload = [];
            this.sizeArr = [25, 50, 100, 150, 200, 500, 1000];
            this.pageIndex = 1;
            this.totalRecords = 0;
            this.displayBatchSize = 25;
            this.staticPageData = [];
            this.staticPageDataSouece = [];
            this.sortingDir = "asc";
            this.saleAllData = [];
            this.model = {
              purchase_id: 0,
              supplier_id: '',
              purchase_date: '',
              purchase_description: '',
              institution_id: sessionStorage.getItem('institute_id'),
              total_amount: 100,
              total_paid_amount: 0,
              is_refunded: false,
              purchased_item_list: []
            };
            this.paymentModel = {
              sale_id: '',
              purchased_by_user_id: 0,
              paid_amount: '',
              payment_date: '',
              reference_no: '',
              payment_method: '',
              institute_id: sessionStorage.getItem('institute_id')
            };
            this.paymentHistoryData = [];
            this.viewdatas = []; //download in excel format

            this.headerSetting = [{
              primary_key: 'reference_number',
              value: "Reference No."
            }, {
              primary_key: 'user_role',
              value: "Role"
            }, {
              primary_key: 'user_name',
              value: "User"
            }, {
              primary_key: 'sale_date',
              value: "Date"
            }, // {
            //   primary_key: 'bill_image_url',
            //   value: "File",
            // },
            {
              primary_key: 'total_amount',
              value: "Grand Total"
            }, {
              primary_key: 'total_paid_amount',
              value: "Paid"
            }, {
              primary_key: 'balanced_amount',
              value: "Balance  (To be Paid)"
            }];
            this.institution_id = sessionStorage.getItem('institution_id');
          }

          _createClass(SaleItemComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.getSaleDetails();
            }
          }, {
            key: "getSaleDetails",
            value: function getSaleDetails() {
              var _this51 = this;

              this.auth.showLoader(); //pageOffset=2&pageSize=10

              this.httpService.getData('/api/v1/inventory/sale/all?pageOffset=' + this.pageIndex + '&pageSize=' + this.displayBatchSize + '&instituteId=' + this.institution_id).subscribe(function (res) {
                _this51.auth.hideLoader();

                _this51.saleAllData = res.result.response; // this.saleAllData =saleData;

                _this51.staticPageData = res.result.response;
                _this51.tempLocationList = res.result.response;
                _this51.totalRecords = res.result.totalElements; // for (let keys of saleData) {
                //   console.log(keys);
                //   console.log(keys)
                //   // console.log(this.purchaseAllData[keys]);
                //   for (let data of keys.sale_item_list) {
                //     let obj: any = {};
                //     obj.item_name = data.item_name;
                //     obj.item_name = data.item_name;
                //     obj.reference_number = keys.reference_number;
                //     obj.user_name = keys.user_name;
                //     obj.user_role = keys.user_role;
                //     obj.supplier_company_name = keys.supplier_company_name;
                //     obj.sale_date = keys.sale_date;
                //     obj.sale_type = data.sale_type;
                //     obj.total_paid_amount = keys.total_paid_amount;
                //     obj.total_amount = keys.total_amount;
                //     obj.balanced_amount = keys.balanced_amount;
                //     obj.bill_image_url = keys.bill_image_url;
                //     obj.sale_id =keys.sale_id;
                //     console.log(obj);
                //     this.saleAllData.push(obj)
                //   }
                //   console.log(saleData)
                // }
                // this.staticPageData = res.result.response;
                // this.tempLocationList = res.result.response;
                // this.totalRecords = res.result.total_elements;

                _this51.auth.hideLoader();
              }, function (err) {
                _this51.auth.hideLoader();
              });
            }
          }, {
            key: "showAddPaymentModel",
            value: function showAddPaymentModel(data) {
              //document.getElementById('action_btn').style.display="none";
              this.sale_id = data.sale_id;
              $('#addpayModal').modal('show');
            }
          }, {
            key: "addPayment",
            value: function addPayment() {
              var _this52 = this;

              // document.getElementById('action_btn').style.display="none";
              //this.router.navigate(['/view/inventory-management/purchase-item']);
              if (this.addform.valid) {
                var file = document.getElementById('billImageFile').files[0];
                this.paymentModel.institute_id = sessionStorage.getItem('institute_id');
                var formData = new FormData();
                var salePaymentDto = {};
                salePaymentDto.institute_id = sessionStorage.getItem('institute_id');
                salePaymentDto.sale_id = this.sale_id;
                salePaymentDto.purchased_by_user_id = this.paymentModel.purchased_by_user_id;
                salePaymentDto.paid_amount = this.paymentModel.paid_amount;
                salePaymentDto.payment_date = moment__WEBPACK_IMPORTED_MODULE_6__(this.paymentModel.payment_date).format("YYYY-MM-DD");
                salePaymentDto.reference_no = this.paymentModel.reference_no;
                salePaymentDto.paid_amount = this.paymentModel.paid_amount;
                salePaymentDto.payment_method = this.paymentModel.payment_method;
                formData.append('salePaymentDto', JSON.stringify(salePaymentDto));

                if (file) {
                  formData.append('billImageFile', file);
                }

                if (this.isedit) {} //this.isedit?this.model.id:delete(this.model.id);


                var base = this.auth.baseUrl; //let base = "https://test999.proctur.com/StdMgmtWebAPI"
                // let urlPostXlsDocument = base + "/prod/api/v2/asset/purchase/create";

                var urlPostXlsDocument = base + "/api/v1/inventory/sale/payment/create";
                var newxhr = new XMLHttpRequest();
                var auths = {
                  userid: sessionStorage.getItem('userid'),
                  userType: sessionStorage.getItem('userType'),
                  password: sessionStorage.getItem('password'),
                  institution_id: sessionStorage.getItem('institute_id')
                };
                var Authorization = btoa(auths.userid + "|" + auths.userType + ":" + auths.password + ":" + auths.institution_id);
                newxhr.open("POST", urlPostXlsDocument, true);
                newxhr.setRequestHeader("Authorization", Authorization);
                newxhr.setRequestHeader("x-proc-authorization", Authorization);
                newxhr.setRequestHeader("x-prod-inst-id", sessionStorage.getItem('institute_id'));
                newxhr.setRequestHeader("x-prod-user-id", sessionStorage.getItem('userid'));
                newxhr.setRequestHeader("enctype", "multipart/form-data;");
                newxhr.setRequestHeader("Accept", "application/json, text/javascript"); //newxhr.setRequestHeader("Access-Control-Allow-Origin", "*");

                if (!this.auth.isRippleLoad.getValue()) {
                  this.auth.showLoader();

                  newxhr.onreadystatechange = function () {
                    _this52.auth.hideLoader();

                    if (newxhr.readyState == 4) {
                      if (newxhr.status >= 200 && newxhr.status < 300) {
                        var msg = 'Payment updated successfully';

                        _this52.msgService.showErrorMessage(_this52.msgService.toastTypes.success, '', msg);

                        $('#addpayModal').modal('hide');

                        _this52.getSaleDetails(); //this.cancel(false)

                      } else {
                        // this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', "File format is not suported");
                        _this52.msgService.showErrorMessage(_this52.msgService.toastTypes.error, '', JSON.parse(newxhr.response).error[0].errorMessage);
                      }
                    }
                  };

                  newxhr.send(formData);
                }
              } else {
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', "Please fill all mandatory field ");
              }
            }
          }, {
            key: "validateFutureDate",
            value: function validateFutureDate() {
              var today = moment__WEBPACK_IMPORTED_MODULE_6__(new Date());
              var selectedDate = moment__WEBPACK_IMPORTED_MODULE_6__(this.paymentModel.payment_date);
              var diff = moment__WEBPACK_IMPORTED_MODULE_6__(selectedDate.diff(today))['_i'];

              if (diff > 0) {
                this.msgService.showErrorMessage('info', '', "Future date is not allowed");
                this.paymentModel.payment_date = moment__WEBPACK_IMPORTED_MODULE_6__(new Date()).format('YYYY-MM-DD');
              }
            }
          }, {
            key: "validatePayment",
            value: function validatePayment(data) {
              var amount = Number(data.paid_amount);
              var balance = Number(data.balanced_amount);

              if (amount < 1) {
                this.msgService.showErrorMessage(this.msgService.toastTypes.info, '', "Payment Amount is LESS than one");
              }

              if (amount <= amount) {
                this.msgService.showErrorMessage(this.msgService.toastTypes.info, '', "Payment amount is greater than remaining amount");
              }
            }
          }, {
            key: "getPaymentHistory",
            value: function getPaymentHistory(id) {
              var _this53 = this;

              // document.getElementById('action_btn').style.display="none";
              this.auth.showLoader(); ///api/v1/inventory/sale/payment/all?instituteId=100058&saleId=3

              $('#viewpayModal').modal('show');
              this.httpService.getData('/api/v1/inventory/sale/payment/all?&instituteId=' + this.paymentModel.institute_id + '&saleId=' + id).subscribe(function (res) {
                _this53.paymentHistoryData = res.result;

                _this53.auth.hideLoader();
              }, function (err) {
                _this53.msgService.showErrorMessage(_this53.msgService.toastTypes.error, '', err.error.message);
              });
            }
          }, {
            key: "showConfirm",
            value: function showConfirm(obj) {
              this.sale_id = obj.sale_id;
              $('#deletesModal').modal('show');
              document.getElementById('action_btn').style.display = "none";
            }
          }, {
            key: "deleteRow",
            value: function deleteRow() {
              var _this54 = this;

              //document.getElementById('action_btn').style.display="none";
              ///api/v1/inventory/sale/delete/5?instituteId=100058
              this.auth.showLoader();
              this.httpService.deleteData('/api/v1/inventory/sale/delete/' + this.sale_id + '?instituteId=' + this.model.institution_id, null).subscribe(function (res) {
                _this54.auth.hideLoader();

                _this54.msgService.showErrorMessage('success', '', 'Sale Deleted Successfully');

                _this54.getSaleDetails();

                $('#deletesModal').modal('hide');
              }, function (err) {
                _this54.msgService.showErrorMessage('error', '', err.error.message);

                _this54.auth.hideLoader();
              });
            }
          }, {
            key: "viewNavigate",
            value: function viewNavigate(obj) {
              //../purchase-view
              sessionStorage.setItem('viewData', obj);
              this.router.navigate(['/view/inventory-management/sale-view']);
            }
          }, {
            key: "cancelData",
            value: function cancelData(purchase_id) {
              var _this55 = this;

              document.getElementById('action_btn').style.display = "none";
              this.httpService.getData('/api/v1/inventory/sale/cancelSale?saleId=' + purchase_id + '&instituteId=' + this.institution_id).subscribe(function (res) {
                if (res.statusCode == 200) {
                  _this55.msgService.showErrorMessage(_this55.msgService.toastTypes.success, '', 'Sale cancelled successfully');

                  _this55.getSaleDetails();
                } else {}
              }, function (err) {
                _this55.msgService.showErrorMessage(_this55.msgService.toastTypes.error, '', err.error.message);
              });
            }
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
              this.getSaleDetails();
            }
          }, {
            key: "updateTableBatchSize",
            value: function updateTableBatchSize(event) {
              this.pageIndex = 1;
              this.displayBatchSize = event;
              this.fetchTableDataByPage(this.pageIndex);
            }
          }, {
            key: "searchDatabase",
            value: function searchDatabase() {
              var _this56 = this;

              if (this.searchParams == undefined || this.searchParams == null) {
                this.searchParams = "";
                this.staticPageData = this.tempLocationList;
              } else {
                var searchData = this.tempLocationList.filter(function (item) {
                  return Object.keys(item).some(function (k) {
                    return item[k] != null && item[k].toString().toLowerCase().includes(_this56.searchParams.toLowerCase());
                  });
                });
                this.staticPageData = searchData;
                this.totalRecords = this.staticPageData.length;
              }
            }
          }, {
            key: "downloadPdf",
            value: function downloadPdf() {
              var _this57 = this;

              ///api/v1/inventory/purchase/all?all=1 + '&&instituteId=' + this.institution_id
              this.httpService.getData('/api/v1/inventory/sale/all?all=1&&instituteId=' + this.institution_id).subscribe(function (res) {
                _this57.assignDataforDownload = res.result.response;

                for (var i = 0; i < _this57.assignDataforDownload.length; i++) {
                  _this57.assignDataforDownload[i].id = i + 1;
                }

                var arr = [];

                _this57.assignDataforDownload.map(function (ele) {
                  var json = [ele.id, ele.reference_number, ele.user_role, ele.user_name, ele.sale_date, // ele.bill_image_url,
                  ele.total_amount, ele.total_paid_amount, ele.balanced_amount];
                  arr.push(json);
                });

                var rows = [];
                rows = [['#', 'Reference No.', ' Role', ' User', 'Date ', 'Grand Total', 'Paid ', 'Balance(To be Paid)']]; // let columns = arr;

                console.log('122', arr);

                _this57._pdfService.exportToPdf(rows, arr, 'Inventory_sale_list');

                _this57.auth.hideLoader();
              }, function (err) {
                _this57.auth.hideLoader();
              });
            }
          }, {
            key: "exportToExcel",
            value: function exportToExcel() {
              var _this58 = this;

              ///api/v1/inventory/sale/all?instituteId=' + this.institution_id
              this.httpService.getData('/api/v1/inventory/sale/all?all=1&&instituteId=' + this.institution_id).subscribe(function (res) {
                _this58.auth.showLoader();

                _this58.assignDataforDownload = res.result.response;
                var Excelarr = [];

                _this58.assignDataforDownload.map(function (ele) {
                  var json = {};

                  _this58.headerSetting.map(function (keys) {
                    json[keys.value] = ele[keys.primary_key];
                  });

                  Excelarr.push(json);
                });

                _this58.excelService.exportAsExcelFile(Excelarr, 'asset_assign');

                _this58.auth.hideLoader();
              }, function (err) {
                _this58.auth.hideLoader();
              });
              this.auth.hideLoader();
            }
          }]);

          return SaleItemComponent;
        }();

        SaleItemComponent.ctorParameters = function () {
          return [{
            type: _services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]
          }, {
            type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticatorService"]
          }, {
            type: _services_message_show_service__WEBPACK_IMPORTED_MODULE_3__["MessageShowService"]
          }, {
            type: _services_export_to_pdf_service__WEBPACK_IMPORTED_MODULE_1__["ExportToPdfService"]
          }, {
            type: _services_excel_service__WEBPACK_IMPORTED_MODULE_2__["ExcelService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
          }];
        };

        SaleItemComponent.propDecorators = {
          addform: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['addform', {
              "static": false
            }]
          }]
        };
        SaleItemComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
          selector: 'app-sale-item',
          template: __importDefault(__webpack_require__(
          /*! raw-loader!./sale-item.component.html */
          "./node_modules/raw-loader/dist/cjs.js!./src/app/components/inventory-module/sale-item/sale-item.component.html"))["default"],
          styles: [__importDefault(__webpack_require__(
          /*! ./sale-item.component.scss */
          "./src/app/components/inventory-module/sale-item/sale-item.component.scss"))["default"]]
        }), __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"], _services_authenticator_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticatorService"], _services_message_show_service__WEBPACK_IMPORTED_MODULE_3__["MessageShowService"], _services_export_to_pdf_service__WEBPACK_IMPORTED_MODULE_1__["ExportToPdfService"], _services_excel_service__WEBPACK_IMPORTED_MODULE_2__["ExcelService"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])], SaleItemComponent);
        return SaleItemComponent;
      }();
      /***/

    },

    /***/
    "./src/app/components/inventory-module/sale-view/sale-view.component.scss":
    /*!********************************************************************************!*\
      !*** ./src/app/components/inventory-module/sale-view/sale-view.component.scss ***!
      \********************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsInventoryModuleSaleViewSaleViewComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "* {\n  margin: 0px;\n}\n\nbody {\n  font-family: 'Open Sans', sans-serif;\n}\n\n.flex {\n  display: flex;\n}\n\n.blue_button {\n  background-color: #109CF1;\n  color: white;\n  padding: 0px 20px;\n  font-size: 13px;\n  border: none;\n  border-radius: 5px;\n  font-weight: 600;\n  line-height: 35px;\n  cursor: pointer;\n}\n\n.white_button {\n  background-color: #fff;\n  color: #109CF1;\n  padding: 0px 20px;\n  font-size: 12px;\n  border: 1px solid #109CF1;\n  border-radius: 5px;\n  font-weight: 500;\n  line-height: 35px;\n  cursor: pointer;\n}\n\n.select {\n  padding: 7px 20px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-size: 12px;\n  font-weight: 500;\n  color: #787A7D;\n}\n\n.input {\n  padding: 7px 20px;\n  font-size: 12px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-weight: 500;\n  height: 35px;\n}\n\ninput:focus, select:focus, button:focus {\n  outline: none;\n}\n\n.page_heading > p {\n  color: #334D6E;\n  font-weight: 600;\n  font-size: 14px;\n  margin-bottom: 0px;\n}\n\n.flex {\n  display: flex;\n}\n\n.display {\n  display: flex;\n  justify-content: space-between;\n}\n\n.w98 {\n  width: 98%;\n  margin: 0px auto;\n}\n\n.head_padding {\n  box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  -webkit-box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  -moz-box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  padding: 15px 0px;\n}\n\n.pageheadingspace {\n  margin-bottom: 7px;\n}\n\n.table_heading {\n  width: 100%;\n  background-color: #DFE5F0;\n  /* padding: 10px 0px;*/\n  display: flex;\n  border-radius: 5px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);\n}\n\n.table_heading > div {\n  text-align: center;\n  font-weight: 600;\n  font-size: 12px;\n  color: #323C47;\n  line-height: 35px;\n  text-align: left;\n}\n\n.table_body {\n  width: 100%;\n  display: flex;\n  border-radius: 5px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);\n  text-align: left;\n  line-height: 18px;\n}\n\n.table_body > div {\n  text-align: left;\n  font-weight: 500;\n  font-size: 12px;\n  color: #323C47;\n  /* padding: 5px 0px;*/\n  margin: auto;\n  line-height: 18px;\n}\n\n.mr10 {\n  margin-right: 10px;\n}\n\n.w240 {\n  width: 240px;\n}\n\n.item_cat .table_body > div, .item_cat .table_heading > div {\n  width: calc((100% - 250px) / 2);\n}\n\n.item_cat .table_heading > div:first-child, .item_cat .table_body > div:first-child {\n  width: 50px;\n}\n\n.item_cat .table_heading > div:last-child, .item_cat .table_body > div:last-child {\n  width: 200px;\n}\n\n.group18 {\n  width: 18px;\n  height: auto;\n}\n\n.pt15 {\n  padding-top: 15px;\n  padding-bottom: 5px;\n}\n\n.bottom_pagignation {\n  padding-top: 10px;\n  background-color: #fff;\n  position: fixed;\n  bottom: 0px;\n  z-index: 100;\n}\n\n.bottom_pagignation p {\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 20px;\n}\n\n.bottom_pagignation select {\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-size: 13px;\n  font-weight: 500;\n  color: #0079FF;\n  display: inline;\n}\n\n.bottom_pagignation .w20 {\n  width: 20%;\n}\n\n.bottom_pagignation .w10 {\n  width: 10%;\n}\n\n.bottom_pagignation .w50 {\n  width: 50%;\n}\n\n.bottom_pagignation .w40 {\n  width: 40%;\n}\n\n.number {\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 20px;\n  letter-spacing: 0.01em;\n  color: #000000;\n  margin: 0px 4px;\n}\n\n.active_circle {\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 20px;\n  letter-spacing: 0.01em;\n  color: #fff;\n  padding: 2px 7px;\n  border-radius: 50%;\n  background: #0079FF;\n}\n\n.next {\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 20px;\n  letter-spacing: 0.01em;\n  color: #0079FF;\n}\n\n.w450 {\n  width: 450px;\n}\n\n.white {\n  background-color: #fff;\n  width: calc(100% - 227px);\n  border-top: 3px solid #Ededed;\n}\n\n.nav-item .nav-link {\n  font-weight: 600;\n  color: #405877;\n  padding-bottom: 8px;\n  cursor: pointer;\n  font-size: 13px;\n}\n\n.nav-item .nav-link.active {\n  border-bottom: 3px solid #109CF1 !important;\n  color: #109CF1 !important;\n}\n\n.nav-link {\n  display: block;\n  padding: 1.5rem 0rem;\n  margin: -1rem 1.5rem;\n  margin-left: 0rem;\n}\n\n.flex {\n  display: flex;\n}\n\n.w15 {\n  width: 15%;\n  background-color: #DFE5F0;\n  padding: 10px;\n}\n\n.list > li {\n  background-color: #fff;\n  padding: 7px 0px;\n  margin: 7px 0px;\n}\n\n.list > li > a > span {\n  text-decoration: none;\n  font-size: 10px;\n  font-weight: 500;\n  color: #334D6E;\n}\n\n.list > li img {\n  padding: 0px 10px;\n}\n\n.magnifying-glass {\n  background-image: url(\"/assets/images/assets/Vector.svg\");\n  background-repeat: no-repeat;\n  background-position: left center;\n  text-indent: 10px;\n}\n\n.space33 {\n  padding-left: 5px;\n}\n\n.item_man .table_body > div, .item_man .table_heading > div {\n  width: calc((100% - 100px) / 8);\n}\n\n.item_man .table_heading > div:last-child, .item_man .table_body > div:last-child {\n  width: 100px;\n}\n\n.item_man .table_heading > div:nth-child(5), .item_man .table_heading > div:nth-child(6), .item_man .table_heading > div:nth-child(8) {\n  line-height: 18px;\n}\n\n.dropdown1 {\n  position: relative;\n  display: inline-block;\n  line-height: 35px;\n}\n\n.dropdown-content1 {\n  display: none;\n  position: absolute;\n  background-color: #fff;\n  min-width: 200px;\n  right: 3px;\n  margin-top: 20px;\n  top: -150px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1200;\n}\n\n.dropdown-content1 a {\n  color: black;\n  text-decoration: none;\n  display: block;\n}\n\n.dropdown-content1 a:hover {\n  background-color: #ddd;\n  border-radius: 5px;\n}\n\n.dropdown1:hover .dropdown-content1 {\n  display: block;\n}\n\n.dot3 {\n  padding: 10px 0px;\n  cursor: pointer;\n}\n\n.wid100 {\n  width: 100%;\n}\n\n.wid80 {\n  width: 80%;\n}\n\n.pt10 {\n  padding-bottom: 10px;\n}\n\ninput[type=\"date\"]::-webkit-calendar-picker-indicator {\n  color: rgba(0, 0, 0, 0);\n  opacity: 1;\n  display: block;\n  background: url('cal.svg') no-repeat;\n  width: 20px;\n  height: 20px;\n  border-width: thin;\n  padding: 2px 0px;\n}\n\ninput[type=\"date\"] {\n  color: #787A7D;\n  cursor: pointer;\n}\n\ninput:focus {\n  outline: none;\n}\n\nbutton:focus {\n  outline: none;\n}\n\n.modal textarea {\n  height: 100px;\n}\n\n.alert {\n  font-weight: 400;\n  font-size: 18px;\n  line-height: 27px;\n  letter-spacing: 0.01em;\n  color: #4D5869;\n}\n\n.alert_text {\n  text-align: justify;\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 19px;\n  letter-spacing: 0.01em;\n  color: #858585;\n  margin: 0px 40px;\n  margin-top: 20px;\n}\n\n.center {\n  text-align: center;\n}\n\n.center img {\n  width: 44px;\n  height: 34px;\n}\n\n#delete1Modal .modal-dialog, #deleteitemModal .modal-dialog {\n  width: 350px;\n}\n\n@media (min-width: 576px) {\n  #delete1Modal .modal-dialog, #deleteitemModal .modal-dialog {\n    max-width: 350px;\n  }\n}\n\n#deleteModal .modal-dialog {\n  width: 350px;\n}\n\n@media (min-width: 576px) {\n  #deleteModal .modal-dialog {\n    max-width: 350px;\n  }\n}\n\n.pt101 {\n  padding-top: 30px;\n  margin: 0px 30px;\n}\n\n#itemModal .modal-dialog, #edititemModal .modal-dialog, #subbranchModal .modal-dialog, #add1Modal .modal-dialog, #addpayModal .modal-dialog, #viewpayModal .modal-dialog {\n  width: 750px;\n}\n\n@media (min-width: 576px) {\n  #itemModal .modal-dialog, #edititemModal .modal-dialog, #subbranchModal .modal-dialog, #add1Modal .modal-dialog, #addpayModal .modal-dialog, #viewpayModal .modal-dialog {\n    max-width: 750px;\n  }\n}\n\n.sec1, .sec2 {\n  width: 50%;\n}\n\n.sec1 {\n  padding-right: 10px;\n}\n\n.sec2 {\n  padding-left: 10px;\n}\n\ninput[type=\"date\"]:focus:before,\ninput[type=\"date\"]:valid:before {\n  content: \"\";\n}\n\n/* input[type=date]::-webkit-datetime-edit-text {\n      -webkit-appearance: none;\n      display: none;\n  }\n  input[type=date]::-webkit-datetime-edit-month-field{\n      -webkit-appearance: none;\n      display: none;\n  }\n  input[type=date]::-webkit-datetime-edit-day-field {\n      -webkit-appearance: none;\n      display: none;\n  }\n  input[type=date]::-webkit-datetime-edit-year-field {\n      -webkit-appearance: none;\n      display: none;\n  }*/\n\ninput[type=\"date\"]:before {\n  content: attr(placeholder) !important;\n  padding-right: 20px;\n}\n\n.allo_history .table_body > div, .allo_history .table_heading > div {\n  width: calc((100% - 50px) / 5);\n}\n\n.allo_history .table_heading > div:first-child, .allo_history .table_body > div:first-child {\n  width: 50px;\n  line-height: 4;\n}\n\n.in1 {\n  display: inline-block;\n  background: #CCFFAC;\n  border-radius: 5px;\n  width: 40px;\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 24px;\n  letter-spacing: 0.01em;\n  color: #323C47;\n  text-align: center;\n}\n\n.out {\n  display: inline-block;\n  background: #FFCF88;\n  border-radius: 5px;\n  width: 40px;\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 24px;\n  text-align: center;\n  letter-spacing: 0.01em;\n  color: #323C47;\n}\n\n#historyModal .modal-dialog, #historyModal .modal-dialog {\n  width: 650px;\n}\n\n@media (min-width: 576px) {\n  #historyModal .modal-dialog, #historyModal .modal-dialog {\n    max-width: 650px;\n  }\n}\n\n.supplier_m .table_body > div, .supplier_m .table_heading > div {\n  width: calc((100% - 200px) / 5);\n}\n\n.supplier_m .table_heading > div:last-child, .supplier_m .table_body > div:last-child {\n  width: 200px;\n}\n\n.purchase .table_body > div, .purchase .table_heading > div {\n  width: calc((100% - 100px) / 6);\n}\n\n.purchase .table_heading > div:last-child, .purchase .table_body > div:last-child {\n  width: 100px;\n}\n\ninput[type=file]::-webkit-file-upload-button {\n  border: none;\n  border-right: 2px solid #e3dadb;\n  padding: .6em .4em;\n  border-radius: .2em;\n  background-color: #fff;\n  -webkit-transition: 1s;\n  transition: 1s;\n  color: #109CF1;\n  outline: none;\n}\n\ninput[type=file] {\n  padding: 0px;\n  color: #B6B5B1;\n  cursor: pointer;\n}\n\n.div_1 {\n  border: 1px solid #D5D7DA;\n  width: 25%;\n  height: 27rem;\n  margin: 0px 10px;\n  border-radius: 5px;\n  margin-top: 20px;\n  padding: 20px;\n}\n\n.pt102 {\n  padding-bottom: 20px;\n}\n\n.textarea1 {\n  height: 100px;\n}\n\n.heading1 {\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: 0.01em;\n  color: #334D6E;\n}\n\n.div_2 {\n  width: 75%;\n  margin: 0px 10px;\n  border-radius: 5px;\n  margin-top: 20px;\n  padding: 20px;\n}\n\n.tablehead {\n  background: #DFE5F0;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n  line-height: 40px;\n  display: flex;\n}\n\n.tablehead > div {\n  text-align: center;\n  width: calc(100% / 5);\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 40px;\n  text-align: center;\n  letter-spacing: 0.01em;\n  color: #323C47;\n}\n\n.sel1 {\n  width: 252px;\n  background: #FAFAFA;\n  border: 1px solid #F0EDED;\n  border-radius: 4px;\n}\n\n.tablebody {\n  display: flex;\n  border-bottom: 1px solid #DFE5F0;\n}\n\n.tablebody > div {\n  text-align: center;\n  width: calc(100% / 5);\n  font-weight: normal;\n  font-size: 13px;\n  line-height: 60px;\n  letter-spacing: 0.01em;\n  color: #323C47;\n}\n\n.tabletotal {\n  display: flex;\n  background: #D4FFF2;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n  font-weight: 600;\n  font-size: 13px;\n  letter-spacing: 0.01em;\n  color: #323C47;\n}\n\n.tabletotal > div {\n  text-align: center;\n  line-height: 60px;\n  width: calc(100% / 5);\n}\n\n.tabletotal > div:nth-child(4) {\n  font-weight: 700;\n  font-size: 16px;\n}\n\n.created_date {\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 194px;\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 30px;\n  letter-spacing: 0.01em;\n  color: #323C47;\n  text-align: center;\n}\n\n.mr10 {\n  margin-right: 10px;\n}\n\n.flex30 {\n  display: flex;\n}\n\n.flex30 > div {\n  padding-left: 20px;\n  width: calc( 100% / 3);\n  line-height: 30px;\n  border-right: 1px solid #E5E3EE;\n}\n\n.flex30 > div:last-child {\n  border-right: none;\n}\n\n.name2 {\n  width: 34%;\n  font-weight: 600;\n  font-size: 12px;\n  letter-spacing: 0.01em;\n  color: #323C47;\n}\n\n.value2 {\n  width: 66%;\n  font-weight: 400;\n  font-size: 12px;\n  letter-spacing: 0.01em;\n  color: #323C47;\n}\n\n.flex30 > div:last-child .name2 {\n  width: 45%;\n}\n\n.flex30 > div:last-child .value2 {\n  width: 55%;\n}\n\n.item .tablehead > div, .item .tablebody > div {\n  width: calc(100% / 4);\n}\n\n.item .tabletotal {\n  border-bottom: 1px solid #DFE5F0;\n  background: #fff;\n  box-shadow: none;\n}\n\n.item .tabletotal > div {\n  width: calc(100% /4);\n}\n\n.sale .table_body > div, .sale .table_heading > div {\n  width: calc((100% - 100px) / 6);\n}\n\n.sale .table_heading > div:last-child, .sale .table_body > div:last-child {\n  width: 100px;\n}\n\n.sale .table_heading > div:nth-child(10), .sale .table_body > div:nth-child(10) {\n  line-height: 18px;\n}\n\n.div_11 {\n  border: 1px solid #D5D7DA;\n  width: 25%;\n  height: 37rem;\n  margin: 0px 10px;\n  border-radius: 5px;\n  margin-top: 20px;\n  padding: 20px;\n}\n\n.sale_add .tablehead > div {\n  width: calc(100% / 6);\n}\n\n.sale_add .tablebody > div {\n  width: calc(100% / 6);\n}\n\n.sale_add .tabletotal > div {\n  width: calc(100% / 6);\n}\n\n.sale_add .tabletotal > div:nth-child(5) {\n  font-weight: 700;\n  font-size: 16px;\n}\n\n.file_name {\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 18px;\n  letter-spacing: 0.01em;\n  color: #109CF1;\n}\n\n.history .table_body > div, .history .table_heading > div {\n  width: calc((100% - 50px) / 5);\n}\n\n.history .table_heading > div:first-child, .history .table_body > div:first-child {\n  width: 50px;\n}\n\n.nav-item .nav-link {\n  font-weight: 600;\n  color: #405877;\n  padding-bottom: 8px;\n  padding-top: 10px;\n  cursor: pointer;\n  font-size: 13px;\n  float: left;\n  background: none;\n}\n\n.nav-item .active {\n  border-bottom: 3px solid #109cf1 !important;\n  color: #109cf1 !important;\n}\n\n.modal {\n  width: 100%;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n}\n\n.right {\n  float: left;\n  margin: 5px;\n}\n\n.modal-dialog {\n  margin: 0 auto;\n  top: 10%;\n}\n\n.modal-header:before {\n  display: none;\n}\n\n.modal-title {\n  color: #2B2626;\n  font-weight: 600;\n  font-size: 13px;\n  font-family: 'Open Sans', sans-serif;\n  margin-bottom: 0px;\n}\n\n.errormsg {\n  height: 10px;\n}\n\n.help-block {\n  color: red;\n  margin-bottom: 0%;\n  padding-left: 2px;\n}\n\n.cancel {\n  background-color: white;\n  color: #109CF1;\n  padding: 0px 20px;\n  font-size: 12px;\n  border: solid 2px #109CF1;\n  border-radius: 5px;\n  font-weight: 500;\n  height: 35px;\n  margin-right: 15px;\n}\n\n.align {\n  text-align: center;\n}\n\n.multiselect {\n  width: 330px;\n  height: 35px;\n  left: 30px;\n  top: 63px;\n  background: #FFFFFF;\n  box-sizing: border-box;\n  border-radius: 4px;\n  margin-top: 20px;\n}\n\n#deletesModal .modal-dialog {\n  width: 350px;\n}\n\n@media (min-width: 576px) {\n  #deletesModal .modal-dialog {\n    max-width: 350px;\n  }\n}\n\n.center {\n  text-align: center;\n}\n\n.deleteImg, li {\n  float: left;\n  margin: 3px;\n}\n\n.p_title {\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 15px;\n  letter-spacing: 0.01em;\n  color: #323C47;\n  margin-bottom: 5px;\n}\n\n.has-error .control-label {\n  color: black;\n}\n\n.help-block {\n  color: red;\n  margin-bottom: 0%;\n}\n\n.text-danger {\n  color: red;\n  padding-left: 2px;\n}\n\n.scrollable {\n  max-height: 70vh;\n  overflow-y: auto;\n}\n\n.dropdown-content1 {\n  display: none;\n  position: absolute;\n  background-color: #fff;\n  min-width: 200px;\n  right: 3px;\n  margin-top: 20px;\n  top: -100px;\n  text-align: left;\n  border-radius: 10px;\n}\n\n.dropdown-content1 a {\n  padding-left: 8px;\n}\n\n.ser {\n  margin: 10px 0px;\n}\n\n.illustration-container {\n  display: block;\n}\n\n.illustration-container .illustration-img {\n  width: 40%;\n  margin-left: 25%;\n}\n\n* {\n  margin: 0px;\n}\n\nbody {\n  font-family: 'Open Sans', sans-serif;\n}\n\n.flex {\n  display: flex;\n}\n\n.blue_button {\n  background-color: #109CF1;\n  color: white;\n  padding: 0px 20px;\n  font-size: 13px;\n  border: none;\n  border-radius: 5px;\n  font-weight: 600;\n  line-height: 35px;\n  cursor: pointer;\n}\n\n.white_button {\n  background-color: #fff;\n  color: #109CF1;\n  padding: 0px 20px;\n  font-size: 12px;\n  border: 1px solid #109CF1;\n  border-radius: 5px;\n  font-weight: 500;\n  line-height: 35px;\n  cursor: pointer;\n}\n\n.select {\n  padding: 7px 20px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-size: 12px;\n  font-weight: 500;\n  color: #787A7D;\n}\n\n.input {\n  padding: 7px 20px;\n  font-size: 12px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-weight: 500;\n  height: 35px;\n}\n\ninput:focus, select:focus, button:focus {\n  outline: none;\n}\n\n.page_heading > p {\n  color: #334D6E;\n  font-weight: 600;\n  font-size: 14px;\n  margin-bottom: 0px;\n}\n\n.flex {\n  display: flex;\n}\n\n.display {\n  display: flex;\n  justify-content: space-between;\n}\n\n.w98 {\n  width: 98%;\n  margin: 0px auto;\n}\n\n.head_padding {\n  box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  -webkit-box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  -moz-box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  padding: 15px 0px;\n}\n\n.pageheadingspace {\n  margin-bottom: 7px;\n}\n\n.table_heading {\n  width: 100%;\n  background-color: #DFE5F0;\n  /* padding: 10px 0px;*/\n  display: flex;\n  border-radius: 5px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);\n}\n\n.table_heading > div {\n  text-align: center;\n  font-weight: 600;\n  font-size: 12px;\n  color: #323C47;\n  line-height: 35px;\n  text-align: left;\n}\n\n.table_body {\n  width: 100%;\n  display: flex;\n  border-radius: 5px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);\n  text-align: left;\n  line-height: 18px;\n}\n\n.table_body > div {\n  text-align: left;\n  font-weight: 500;\n  font-size: 12px;\n  color: #323C47;\n  /* padding: 5px 0px;*/\n  margin: auto;\n  line-height: 18px;\n}\n\n.mr10 {\n  margin-right: 10px;\n}\n\n.w240 {\n  width: 240px;\n}\n\n.item_cat .table_body > div, .item_cat .table_heading > div {\n  width: calc((100% - 250px) / 2);\n}\n\n.item_cat .table_heading > div:first-child, .item_cat .table_body > div:first-child {\n  width: 50px;\n}\n\n.item_cat .table_heading > div:last-child, .item_cat .table_body > div:last-child {\n  width: 200px;\n}\n\n.group18 {\n  width: 18px;\n  height: auto;\n}\n\n.pt15 {\n  padding-top: 15px;\n  padding-bottom: 5px;\n}\n\n.bottom_pagignation {\n  padding-top: 10px;\n  background-color: #fff;\n  position: fixed;\n  bottom: 0px;\n  z-index: 100;\n}\n\n.bottom_pagignation p {\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 20px;\n}\n\n.bottom_pagignation select {\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-size: 13px;\n  font-weight: 500;\n  color: #0079FF;\n  display: inline;\n}\n\n.bottom_pagignation .w20 {\n  width: 20%;\n}\n\n.bottom_pagignation .w10 {\n  width: 10%;\n}\n\n.bottom_pagignation .w50 {\n  width: 50%;\n}\n\n.bottom_pagignation .w40 {\n  width: 40%;\n}\n\n.number {\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 20px;\n  letter-spacing: 0.01em;\n  color: #000000;\n  margin: 0px 4px;\n}\n\n.active_circle {\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 20px;\n  letter-spacing: 0.01em;\n  color: #fff;\n  padding: 2px 7px;\n  border-radius: 50%;\n  background: #0079FF;\n}\n\n.next {\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 20px;\n  letter-spacing: 0.01em;\n  color: #0079FF;\n}\n\n.w450 {\n  width: 450px;\n}\n\n.white {\n  background-color: #fff;\n  width: calc(100% - 227px);\n  border-top: 3px solid #Ededed;\n}\n\n.nav-item .nav-link {\n  font-weight: 600;\n  color: #405877;\n  padding-bottom: 8px;\n  cursor: pointer;\n  font-size: 13px;\n}\n\n.nav-item .nav-link.active {\n  border-bottom: 3px solid #109CF1 !important;\n  color: #109CF1 !important;\n}\n\n.nav-link {\n  display: block;\n  padding: 1.5rem 0rem;\n  margin: -1rem 1.5rem;\n  margin-left: 0rem;\n}\n\n.flex {\n  display: flex;\n}\n\n.w15 {\n  width: 15%;\n  background-color: #DFE5F0;\n  padding: 10px;\n}\n\n.list > li {\n  background-color: #fff;\n  padding: 7px 0px;\n  margin: 7px 0px;\n}\n\n.list > li > a > span {\n  text-decoration: none;\n  font-size: 10px;\n  font-weight: 500;\n  color: #334D6E;\n}\n\n.list > li img {\n  padding: 0px 10px;\n}\n\n.magnifying-glass {\n  background-image: url(\"/assets/images/assets/Vector.svg\");\n  background-repeat: no-repeat;\n  background-position: left center;\n  text-indent: 10px;\n}\n\n.space33 {\n  padding-left: 5px;\n}\n\n.item_man .table_body > div, .item_man .table_heading > div {\n  width: calc((100% - 100px) / 8);\n}\n\n.item_man .table_heading > div:last-child, .item_man .table_body > div:last-child {\n  width: 100px;\n}\n\n.item_man .table_heading > div:nth-child(5), .item_man .table_heading > div:nth-child(6), .item_man .table_heading > div:nth-child(8) {\n  line-height: 18px;\n}\n\n.dropdown1 {\n  position: relative;\n  display: inline-block;\n  line-height: 35px;\n}\n\n.dropdown-content1 {\n  display: none;\n  position: absolute;\n  background-color: #fff;\n  min-width: 200px;\n  right: 3px;\n  margin-top: 20px;\n  top: -150px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1200;\n}\n\n.dropdown-content1 a {\n  color: black;\n  text-decoration: none;\n  display: block;\n}\n\n.dropdown-content1 a:hover {\n  background-color: #ddd;\n  border-radius: 5px;\n}\n\n.dropdown1:hover .dropdown-content1 {\n  display: block;\n}\n\n.dot3 {\n  padding: 10px 0px;\n  cursor: pointer;\n}\n\n.wid100 {\n  width: 100%;\n}\n\n.wid80 {\n  width: 80%;\n}\n\n.pt10 {\n  padding-bottom: 10px;\n}\n\ninput[type=\"date\"]::-webkit-calendar-picker-indicator {\n  color: rgba(0, 0, 0, 0);\n  opacity: 1;\n  display: block;\n  background: url('cal.svg') no-repeat;\n  width: 20px;\n  height: 20px;\n  border-width: thin;\n  padding: 2px 0px;\n}\n\ninput[type=\"date\"] {\n  color: #787A7D;\n  cursor: pointer;\n}\n\ninput:focus {\n  outline: none;\n}\n\nbutton:focus {\n  outline: none;\n}\n\n.modal textarea {\n  height: 100px;\n}\n\n.alert {\n  font-weight: 400;\n  font-size: 18px;\n  line-height: 27px;\n  letter-spacing: 0.01em;\n  color: #4D5869;\n}\n\n.alert_text {\n  text-align: justify;\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 19px;\n  letter-spacing: 0.01em;\n  color: #858585;\n  margin: 0px 40px;\n  margin-top: 20px;\n}\n\n.center {\n  text-align: center;\n}\n\n.center img {\n  width: 44px;\n  height: 34px;\n}\n\n#delete1Modal .modal-dialog, #deleteitemModal .modal-dialog {\n  width: 350px;\n}\n\n@media (min-width: 576px) {\n  #delete1Modal .modal-dialog, #deleteitemModal .modal-dialog {\n    max-width: 350px;\n  }\n}\n\n#deleteModal .modal-dialog {\n  width: 350px;\n}\n\n@media (min-width: 576px) {\n  #deleteModal .modal-dialog {\n    max-width: 350px;\n  }\n}\n\n.pt101 {\n  padding-top: 30px;\n  margin: 0px 30px;\n}\n\n#itemModal .modal-dialog, #edititemModal .modal-dialog, #subbranchModal .modal-dialog, #add1Modal .modal-dialog, #addpayModal .modal-dialog, #viewpayModal .modal-dialog {\n  width: 750px;\n}\n\n@media (min-width: 576px) {\n  #itemModal .modal-dialog, #edititemModal .modal-dialog, #subbranchModal .modal-dialog, #add1Modal .modal-dialog, #addpayModal .modal-dialog, #viewpayModal .modal-dialog {\n    max-width: 750px;\n  }\n}\n\n.sec1, .sec2 {\n  width: 50%;\n}\n\n.sec1 {\n  padding-right: 10px;\n}\n\n.sec2 {\n  padding-left: 10px;\n}\n\ninput[type=\"date\"]:focus:before,\ninput[type=\"date\"]:valid:before {\n  content: \"\";\n}\n\n/* input[type=date]::-webkit-datetime-edit-text {\n      -webkit-appearance: none;\n      display: none;\n  }\n  input[type=date]::-webkit-datetime-edit-month-field{\n      -webkit-appearance: none;\n      display: none;\n  }\n  input[type=date]::-webkit-datetime-edit-day-field {\n      -webkit-appearance: none;\n      display: none;\n  }\n  input[type=date]::-webkit-datetime-edit-year-field {\n      -webkit-appearance: none;\n      display: none;\n  }*/\n\ninput[type=\"date\"]:before {\n  content: attr(placeholder) !important;\n  padding-right: 20px;\n}\n\n.allo_history .table_body > div, .allo_history .table_heading > div {\n  width: calc((100% - 50px) / 5);\n}\n\n.allo_history .table_heading > div:first-child, .allo_history .table_body > div:first-child {\n  width: 50px;\n  line-height: 4;\n}\n\n.in1 {\n  display: inline-block;\n  background: #CCFFAC;\n  border-radius: 5px;\n  width: 40px;\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 24px;\n  letter-spacing: 0.01em;\n  color: #323C47;\n  text-align: center;\n}\n\n.out {\n  display: inline-block;\n  background: #FFCF88;\n  border-radius: 5px;\n  width: 40px;\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 24px;\n  text-align: center;\n  letter-spacing: 0.01em;\n  color: #323C47;\n}\n\n#historyModal .modal-dialog, #historyModal .modal-dialog {\n  width: 650px;\n}\n\n@media (min-width: 576px) {\n  #historyModal .modal-dialog, #historyModal .modal-dialog {\n    max-width: 650px;\n  }\n}\n\n.supplier_m .table_body > div, .supplier_m .table_heading > div {\n  width: calc((100% - 200px) / 5);\n}\n\n.supplier_m .table_heading > div:last-child, .supplier_m .table_body > div:last-child {\n  width: 200px;\n}\n\n.purchase .table_body > div, .purchase .table_heading > div {\n  width: calc((100% - 100px) / 6);\n}\n\n.purchase .table_heading > div:last-child, .purchase .table_body > div:last-child {\n  width: 100px;\n}\n\ninput[type=file]::-webkit-file-upload-button {\n  border: none;\n  border-right: 2px solid #e3dadb;\n  padding: .6em .4em;\n  border-radius: .2em;\n  background-color: #fff;\n  -webkit-transition: 1s;\n  transition: 1s;\n  color: #109CF1;\n  outline: none;\n}\n\ninput[type=file] {\n  padding: 0px;\n  color: #B6B5B1;\n  cursor: pointer;\n}\n\n.div_1 {\n  border: 1px solid #D5D7DA;\n  width: 25%;\n  height: 27rem;\n  margin: 0px 10px;\n  border-radius: 5px;\n  margin-top: 20px;\n  padding: 20px;\n}\n\n.pt102 {\n  padding-bottom: 20px;\n}\n\n.textarea1 {\n  height: 100px;\n}\n\n.heading1 {\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: 0.01em;\n  color: #334D6E;\n}\n\n.div_2 {\n  width: 75%;\n  margin: 0px 10px;\n  border-radius: 5px;\n  margin-top: 20px;\n  padding: 20px;\n}\n\n.tablehead {\n  background: #DFE5F0;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n  line-height: 40px;\n  display: flex;\n}\n\n.tablehead > div {\n  text-align: center;\n  width: calc(100% / 5);\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 40px;\n  text-align: center;\n  letter-spacing: 0.01em;\n  color: #323C47;\n}\n\n.sel1 {\n  width: 252px;\n  background: #FAFAFA;\n  border: 1px solid #F0EDED;\n  border-radius: 4px;\n}\n\n.tablebody {\n  display: flex;\n  border-bottom: 1px solid #DFE5F0;\n}\n\n.tablebody > div {\n  text-align: center;\n  width: calc(100% / 5);\n  font-weight: normal;\n  font-size: 13px;\n  line-height: 60px;\n  letter-spacing: 0.01em;\n  color: #323C47;\n}\n\n.tabletotal {\n  display: flex;\n  background: #D4FFF2;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n  font-weight: 600;\n  font-size: 13px;\n  letter-spacing: 0.01em;\n  color: #323C47;\n}\n\n.tabletotal > div {\n  text-align: center;\n  line-height: 60px;\n  width: calc(100% / 5);\n}\n\n.tabletotal > div:nth-child(4) {\n  font-weight: 700;\n  font-size: 16px;\n}\n\n.created_date {\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 194px;\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 30px;\n  letter-spacing: 0.01em;\n  color: #323C47;\n  text-align: center;\n}\n\n.mr10 {\n  margin-right: 10px;\n}\n\n.flex30 {\n  display: flex;\n}\n\n.flex30 > div {\n  padding-left: 20px;\n  width: calc( 100% / 3);\n  line-height: 30px;\n  border-right: 1px solid #E5E3EE;\n}\n\n.flex30 > div:last-child {\n  border-right: none;\n}\n\n.name2 {\n  width: 34%;\n  font-weight: 600;\n  font-size: 12px;\n  letter-spacing: 0.01em;\n  color: #323C47;\n}\n\n.value2 {\n  width: 66%;\n  font-weight: 400;\n  font-size: 12px;\n  letter-spacing: 0.01em;\n  color: #323C47;\n}\n\n.flex30 > div:last-child .name2 {\n  width: 45%;\n}\n\n.flex30 > div:last-child .value2 {\n  width: 55%;\n}\n\n.item .tablehead > div, .item .tablebody > div {\n  width: calc(100% / 4);\n}\n\n.item .tabletotal {\n  border-bottom: 1px solid #DFE5F0;\n  background: #fff;\n  box-shadow: none;\n}\n\n.item .tabletotal > div {\n  width: calc(100% /4);\n}\n\n.sale .table_body > div, .sale .table_heading > div {\n  width: calc((100% - 100px) / 6);\n}\n\n.sale .table_heading > div:last-child, .sale .table_body > div:last-child {\n  width: 100px;\n}\n\n.sale .table_heading > div:nth-child(10), .sale .table_body > div:nth-child(10) {\n  line-height: 18px;\n}\n\n.div_11 {\n  border: 1px solid #D5D7DA;\n  width: 25%;\n  height: 37rem;\n  margin: 0px 10px;\n  border-radius: 5px;\n  margin-top: 20px;\n  padding: 20px;\n}\n\n.sale_add .tablehead > div {\n  width: calc(100% / 6);\n}\n\n.sale_add .tablebody > div {\n  width: calc(100% / 6);\n}\n\n.sale_add .tabletotal > div {\n  width: calc(100% / 6);\n}\n\n.sale_add .tabletotal > div:nth-child(5) {\n  font-weight: 700;\n  font-size: 16px;\n}\n\n.file_name {\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 18px;\n  letter-spacing: 0.01em;\n  color: #109CF1;\n}\n\n.history .table_body > div, .history .table_heading > div {\n  width: calc((100% - 50px) / 5);\n}\n\n.history .table_heading > div:first-child, .history .table_body > div:first-child {\n  width: 50px;\n}\n\n.nav-item .nav-link {\n  font-weight: 600;\n  color: #405877;\n  padding-bottom: 8px;\n  padding-top: 10px;\n  cursor: pointer;\n  font-size: 13px;\n  float: left;\n  background: none;\n}\n\n.nav-item .active {\n  border-bottom: 3px solid #109cf1 !important;\n  color: #109cf1 !important;\n}\n\n.modal {\n  width: 100%;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n}\n\n.right {\n  float: left;\n  margin: 5px;\n}\n\n.modal-dialog {\n  margin: 0 auto;\n  top: 10%;\n}\n\n.modal-header:before {\n  display: none;\n}\n\n.modal-title {\n  color: #2B2626;\n  font-weight: 600;\n  font-size: 13px;\n  font-family: 'Open Sans', sans-serif;\n  margin-bottom: 0px;\n}\n\n.errormsg {\n  height: 10px;\n}\n\n.help-block {\n  color: red;\n  margin-bottom: 0%;\n  padding-left: 2px;\n}\n\n.cancel {\n  background-color: white;\n  color: #109CF1;\n  padding: 0px 20px;\n  font-size: 12px;\n  border: solid 2px #109CF1;\n  border-radius: 5px;\n  font-weight: 500;\n  height: 35px;\n  margin-right: 15px;\n}\n\n.align {\n  text-align: center;\n}\n\n.multiselect {\n  width: 330px;\n  height: 35px;\n  left: 30px;\n  top: 63px;\n  background: #FFFFFF;\n  box-sizing: border-box;\n  border-radius: 4px;\n  margin-top: 20px;\n}\n\n#deletesModal .modal-dialog {\n  width: 350px;\n}\n\n@media (min-width: 576px) {\n  #deletesModal .modal-dialog {\n    max-width: 350px;\n  }\n}\n\n.center {\n  text-align: center;\n}\n\n.deleteImg, li {\n  float: left;\n  margin: 3px;\n}\n\n.p_title {\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 15px;\n  letter-spacing: 0.01em;\n  color: #323C47;\n  margin-bottom: 5px;\n}\n\n.has-error .control-label {\n  color: black;\n}\n\n.help-block {\n  color: red;\n  margin-bottom: 0%;\n}\n\n.text-danger {\n  color: red;\n  padding-left: 2px;\n}\n\n.scrollable {\n  max-height: 70vh;\n  overflow-y: auto;\n}\n\n.dropdown-content1 {\n  display: none;\n  position: absolute;\n  background-color: #fff;\n  min-width: 200px;\n  right: 3px;\n  margin-top: 20px;\n  top: -100px;\n  text-align: left;\n  border-radius: 10px;\n}\n\n.dropdown-content1 a {\n  padding-left: 8px;\n}\n\n.ser {\n  margin: 10px 0px;\n}\n\n.illustration-container {\n  display: block;\n}\n\n.illustration-container .illustration-img {\n  width: 40%;\n  margin-left: 25%;\n}\n\n@media print {\n  .header, .hide {\n    visibility: hidden;\n  }\n  .name2 {\n    color: #8B817E !important;\n  }\n  .created {\n    -webkit-print-color-adjust: exact;\n    background-repeat: no-repeat !important;\n    background-size: cover !important;\n    width: 194px !important;\n    font-weight: 400 !important;\n    font-size: 13px !important;\n    line-height: 30px !important;\n    letter-spacing: 0.01em !important;\n    color: #110f0f !important;\n    text-align: center !important;\n  }\n  .thead {\n    -webkit-print-color-adjust: exact;\n    background: #DFE5F0 !important;\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1) !important;\n    border-radius: 5px;\n    line-height: 40px;\n    display: flex;\n  }\n  .tbody {\n    border-bottom: 1px solid #DFE5F0 !important;\n  }\n  .tbody > div {\n    text-align: center !important;\n    font-weight: normal !important;\n    font-size: 13px !important;\n    line-height: 60px !important;\n    letter-spacing: 0.01em !important;\n    color: #323C47 !important;\n  }\n  .totalss {\n    background: #D4FFF2 !important;\n    border-radius: 5px !important;\n    font-weight: 600 !important;\n    font-size: 13px !important;\n    letter-spacing: 0.01em !important;\n    color: #323C47 !important;\n  }\n  .totalss > div {\n    text-align: center !important;\n    line-height: 60px !important;\n  }\n  .value2 {\n    width: 66%;\n    font-weight: 400;\n    font-size: 13px;\n    letter-spacing: 0.01em;\n    color: #4C555E;\n  }\n  .val {\n    padding-left: 30px;\n  }\n  @page :footer {\n    display: none;\n  }\n  @page :header {\n    display: none;\n  }\n}\n\n.tabletotal > div {\n  line-height: 45px;\n}\n\n.tablebody > div {\n  line-height: 45px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbnZlbnRvcnktbW9kdWxlL2ludmVudG9yeS1tb2R1bGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaW52ZW50b3J5LW1vZHVsZS9zYWxlLXZpZXcvc2FsZS12aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVztBQ0NmOztBREVFO0VBQ0Usb0NBQW9DO0FDQ3hDOztBRENFO0VBQ0UsYUFBYTtBQ0VqQjs7QURBRTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZUFBZTtBQ0duQjs7QURERTtFQUNFLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZix5QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZUFBZTtBQ0luQjs7QURGRztFQUNDLGlCQUFpQjtFQUVqQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7QUNJbEI7O0FERkU7RUFDRSxpQkFBaUI7RUFFakIsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNkLFlBQVc7QUNJakI7O0FEREc7RUFDSSxhQUFhO0FDSXBCOztBREZFO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysa0JBQWtCO0FDS3RCOztBREhFO0VBQ0UsYUFBYTtBQ01qQjs7QURKRTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7QUNPbEM7O0FETEU7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0FDUXBCOztBRE5FO0VBQ0ksK0NBQTRDO0VBQzVDLHVEQUFvRDtFQUNwRCxvREFBaUQ7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b3J5LW1vZHVsZS9zYWxlLXZpZXcvc2FsZS12aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcbiAgICBtYXJnaW46IDBweDtcbiAgICBcbiAgfVxuICBib2R5e1xuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgfVxuICAuZmxleHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG4gIC5ibHVlX2J1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEwOUNGMTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMHB4IDIwcHg7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBsaW5lLWhlaWdodDogMzVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgLndoaXRlX2J1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBjb2xvcjogIzEwOUNGMTtcbiAgICBwYWRkaW5nOiAwcHggMjBweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgYm9yZGVyOjFweCBzb2xpZCAjMTA5Q0YxO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAgLnNlbGVjdHtcbiAgICBwYWRkaW5nOiA3cHggMjBweDtcbiAgIC8vIHBhZGRpbmc6IDdweCAycHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogIzc4N0E3RDtcbiAgfVxuICAuaW5wdXR7XG4gICAgcGFkZGluZzogN3B4IDIwcHg7XG4gICAgXG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGhlaWdodDozNXB4O1xuICAgIH1cblxuICAgaW5wdXQ6Zm9jdXMsIHNlbGVjdDpmb2N1cyxidXR0b246Zm9jdXN7XG4gICAgICAgb3V0bGluZTogbm9uZTtcbiAgIH1cbiAgLnBhZ2VfaGVhZGluZz5we1xuICAgIGNvbG9yOiAjMzM0RDZFO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgfVxuICAuZmxleHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG4gIC5kaXNwbGF5e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG4gIC53OTh7XG4gICAgd2lkdGg6IDk4JTtcbiAgICBtYXJnaW46IDBweCBhdXRvO1xuICB9XG4gIC5oZWFkX3BhZGRpbmd7XG4gICAgICBib3gtc2hhZG93OiAwcHggN3B4IDVweCAtM3B4IHJnYmEoMCwwLDAsMC4xKTtcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDdweCA1cHggLTNweCByZ2JhKDAsMCwwLDAuMSk7XG4gICAgICAtbW96LWJveC1zaGFkb3c6IDBweCA3cHggNXB4IC0zcHggcmdiYSgwLDAsMCwwLjEpO1xuICAgIHBhZGRpbmc6IDE1cHggMHB4O1xuICB9XG4gIC5wYWdlaGVhZGluZ3NwYWNle1xuICAgIG1hcmdpbi1ib3R0b206IDdweDtcbiAgfVxuICAudGFibGVfaGVhZGluZ3tcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREZFNUYwO1xuICAgLyogcGFkZGluZzogMTBweCAwcHg7Ki9cbiAgICAvL21hcmdpbjogMTBweCAwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgXG4gIH1cbiAgXG4gIC50YWJsZV9oZWFkaW5nPmRpdntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICMzMjNDNDc7XG4gICBsaW5lLWhlaWdodDogMzVweDtcbiAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cbiAgXG4gIC50YWJsZV9ib2R5e1xuICAgICB3aWR0aDogMTAwJTtcbiAgICAvL21hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIH1cbiAgLnRhYmxlX2JvZHk+ZGl2e1xuICAgIFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICMzMjNDNDc7XG4gICAvKiBwYWRkaW5nOiA1cHggMHB4OyovXG4gICAgIG1hcmdpbjogYXV0bztcbiAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIFxuICB9XG4gIFxuICAubXIxMHtcbiAgbWFyZ2luLXJpZ2h0OjEwcHg7XG4gIH1cbiAgLncyNDB7XG4gICB3aWR0aDogMjQwcHg7XG4gIH1cbiAgXG4gIC5pdGVtX2NhdCAudGFibGVfYm9keT5kaXYsLml0ZW1fY2F0IC50YWJsZV9oZWFkaW5nPmRpdntcbiAgICB3aWR0aDogY2FsYygoMTAwJSAtIDI1MHB4KSAvIDIpO1xuICB9XG4gIC5pdGVtX2NhdCAudGFibGVfaGVhZGluZz5kaXY6Zmlyc3QtY2hpbGQsLml0ZW1fY2F0IC50YWJsZV9ib2R5PmRpdjpmaXJzdC1jaGlsZHtcbiAgICB3aWR0aDogNTBweDtcbiAgfVxuICAuaXRlbV9jYXQgLnRhYmxlX2hlYWRpbmc+ZGl2Omxhc3QtY2hpbGQsLml0ZW1fY2F0IC50YWJsZV9ib2R5PmRpdjpsYXN0LWNoaWxke1xuICAgIHdpZHRoOiAyMDBweDtcbiAgfVxuICAuZ3JvdXAxOHtcbiAgICB3aWR0aDogMThweDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbiAgLnB0MTV7XG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgfVxuICAuYm90dG9tX3BhZ2lnbmF0aW9ue1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDBweDtcbiAgICB6LWluZGV4OiAxMDA7XG4gIH1cbiAgLmJvdHRvbV9wYWdpZ25hdGlvbiBwe1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICB9XG4gIC5ib3R0b21fcGFnaWduYXRpb24gc2VsZWN0e1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICMwMDc5RkY7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICB9XG4gIC5ib3R0b21fcGFnaWduYXRpb24gLncyMHtcbiAgICB3aWR0aDogMjAlO1xuICB9XG4gIC5ib3R0b21fcGFnaWduYXRpb24gLncxMHtcbiAgICB3aWR0aDogMTAlO1xuICB9XG4gIC5ib3R0b21fcGFnaWduYXRpb24gLnc1MHtcbiAgICB3aWR0aDogNTAlO1xuICB9XG4gIC5ib3R0b21fcGFnaWduYXRpb24gLnc0MHtcbiAgICB3aWR0aDogNDAlO1xuICB9XG4gIC5udW1iZXJ7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgbWFyZ2luOjBweCA0cHg7XG4gIH1cbiAgLmFjdGl2ZV9jaXJjbGV7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6MnB4IDdweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiAjMDA3OUZGO1xuICB9XG4gIC5uZXh0e1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gIGNvbG9yOiAjMDA3OUZGO1xuICBcbiAgfVxuICAudzQ1MHtcbiAgICB3aWR0aDogNDUwcHg7XG4gIH1cbiAgLndoaXRle1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIyN3B4KTtcbiAgICBib3JkZXItdG9wOiAzcHggc29saWQgI0VkZWRlZDtcbiAgfVxuICAubmF2LWl0ZW0gLm5hdi1saW5re1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGNvbG9yOiAjNDA1ODc3O1xuICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogMTNweFxuICB9XG4gIFxuICAubmF2LWl0ZW0gLm5hdi1saW5rLmFjdGl2ZSB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMTA5Q0YxICFpbXBvcnRhbnQ7XG4gICAgICBjb2xvcjogIzEwOUNGMSAhaW1wb3J0YW50O1xuICB9XG4gIC5uYXYtbGluayB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHBhZGRpbmc6IDEuNXJlbSAwcmVtO1xuICAgICAgbWFyZ2luOiAtMXJlbSAxLjVyZW07XG4gICAgICBtYXJnaW4tbGVmdDogMHJlbTtcbiAgfVxuICAuZmxleHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG4gIC53MTV7XG4gICAgd2lkdGg6IDE1JTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREZFNUYwO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cbiAgLmxpc3Q+bGl7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiA3cHggMHB4O1xuICAgIG1hcmdpbjogN3B4IDBweDtcbiAgfVxuICAubGlzdD5saT5hPnNwYW57XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICMzMzRENkU7XG4gIH1cbiAgLmxpc3Q+bGkgaW1ne1xuICBwYWRkaW5nOiAwcHggMTBweDtcbiAgfSBcbiAgLm1hZ25pZnlpbmctZ2xhc3N7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltYWdlcy9hc3NldHMvVmVjdG9yLnN2ZycpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjpsZWZ0IGNlbnRlcjtcbiAgICB0ZXh0LWluZGVudDogMTBweDtcbiAgfVxuICAuc3BhY2UzM3tcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgfVxuICAuaXRlbV9tYW4gLnRhYmxlX2JvZHk+ZGl2LC5pdGVtX21hbiAudGFibGVfaGVhZGluZz5kaXZ7XG4gICAgd2lkdGg6IGNhbGMoKDEwMCUgLSAxMDBweCkgLyA4KTtcbiAgfVxuICBcbiAgLml0ZW1fbWFuIC50YWJsZV9oZWFkaW5nPmRpdjpsYXN0LWNoaWxkLC5pdGVtX21hbiAudGFibGVfYm9keT5kaXY6bGFzdC1jaGlsZHtcbiAgICB3aWR0aDogMTAwcHg7XG4gIH1cbiAgLml0ZW1fbWFuIC50YWJsZV9oZWFkaW5nPmRpdjpudGgtY2hpbGQoNSksLml0ZW1fbWFuIC50YWJsZV9oZWFkaW5nPmRpdjpudGgtY2hpbGQoNiksLml0ZW1fbWFuIC50YWJsZV9oZWFkaW5nPmRpdjpudGgtY2hpbGQoOCl7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7fVxuICBcbiAgLmRyb3Bkb3duMSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBsaW5lLWhlaWdodDogMzVweDtcbiAgfVxuICBcbiAgLmRyb3Bkb3duLWNvbnRlbnQxIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIG1pbi13aWR0aDoyMDBweDtcbiAgICByaWdodDozcHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICB0b3A6IC0xNTBweDtcbiAgICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcbiAgICB6LWluZGV4OiAxMjAwO1xuICB9XG4gIFxuICAuZHJvcGRvd24tY29udGVudDEgYSB7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICBcbiAgLmRyb3Bkb3duLWNvbnRlbnQxIGE6aG92ZXIge2JhY2tncm91bmQtY29sb3I6ICNkZGQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDt9XG4gIFxuICAuZHJvcGRvd24xOmhvdmVyIC5kcm9wZG93bi1jb250ZW50MSB7ZGlzcGxheTogYmxvY2s7fVxuICAuZG90M3tcbiAgcGFkZGluZzogMTBweCAwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAud2lkMTAwe1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC53aWQ4MHtcbiAgICB3aWR0aDogODAlO1xuICB9XG4gIFxuICAucHQxMHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgfVxuICBpbnB1dFt0eXBlPVwiZGF0ZVwiXTo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcbiAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcxL2NhbC5zdmcpIG5vLXJlcGVhdDtcbiAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgYm9yZGVyLXdpZHRoOiB0aGluO1xuICAgICAgcGFkZGluZzogMnB4IDBweDtcbiAgfVxuICBpbnB1dFt0eXBlPVwiZGF0ZVwiXXtcbiAgICBjb2xvcjogIzc4N0E3RDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgaW5wdXQ6Zm9jdXN7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuICBidXR0b246Zm9jdXN7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuICAubW9kYWwgdGV4dGFyZWF7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgfVxuICAuYWxlcnR7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI3cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgICBjb2xvcjogIzRENTg2OTtcbiAgfVxuICAuYWxlcnRfdGV4dHtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gICAgY29sb3I6ICM4NTg1ODU7XG4gICAgbWFyZ2luOiAwcHggNDBweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICBcbiAgfVxuICAuY2VudGVye1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuY2VudGVyIGltZ3tcbiAgICB3aWR0aDogNDRweDtcbiAgaGVpZ2h0OiAzNHB4O1xuICB9XG5cbiAgXG4gICNkZWxldGUxTW9kYWwgLm1vZGFsLWRpYWxvZywjZGVsZXRlaXRlbU1vZGFsIC5tb2RhbC1kaWFsb2cge1xuICAgICAgd2lkdGg6IDM1MHB4O1xuICB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiA1NzZweCl7XG4gICNkZWxldGUxTW9kYWwgLm1vZGFsLWRpYWxvZywjZGVsZXRlaXRlbU1vZGFsIC5tb2RhbC1kaWFsb2cgIHtcbiAgICAgIG1heC13aWR0aDozNTBweDtcbiAgfVxuICB9XG4gICNkZWxldGVNb2RhbCAubW9kYWwtZGlhbG9nIHtcbiAgICAgIHdpZHRoOiAzNTBweDtcbiAgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpe1xuICAgI2RlbGV0ZU1vZGFsIC5tb2RhbC1kaWFsb2cge1xuICAgICAgbWF4LXdpZHRoOjM1MHB4O1xuICB9XG4gIH1cbiAgLnB0MTAxe1xuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgIG1hcmdpbjogMHB4IDMwcHg7XG4gIH1cbiAgI2l0ZW1Nb2RhbCAubW9kYWwtZGlhbG9nLCNlZGl0aXRlbU1vZGFsIC5tb2RhbC1kaWFsb2csI3N1YmJyYW5jaE1vZGFsIC5tb2RhbC1kaWFsb2csI2FkZDFNb2RhbCAubW9kYWwtZGlhbG9nLCNhZGRwYXlNb2RhbCAubW9kYWwtZGlhbG9nLCN2aWV3cGF5TW9kYWwgLm1vZGFsLWRpYWxvZyB7XG4gICAgICB3aWR0aDogNzUwcHg7XG4gIH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KXtcbiAgICNpdGVtTW9kYWwgLm1vZGFsLWRpYWxvZywjZWRpdGl0ZW1Nb2RhbCAubW9kYWwtZGlhbG9nLCNzdWJicmFuY2hNb2RhbCAubW9kYWwtZGlhbG9nLCNhZGQxTW9kYWwgLm1vZGFsLWRpYWxvZywjYWRkcGF5TW9kYWwgLm1vZGFsLWRpYWxvZywjdmlld3BheU1vZGFsIC5tb2RhbC1kaWFsb2cge1xuICAgICAgbWF4LXdpZHRoOjc1MHB4O1xuICB9XG4gIH1cbiAgLnNlYzEsLnNlYzJ7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxuICAuc2VjMXtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICB9XG4gIC5zZWMye1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgfVxuICBpbnB1dFt0eXBlPVwiZGF0ZVwiXTpmb2N1czpiZWZvcmUsXG4gICAgaW5wdXRbdHlwZT1cImRhdGVcIl06dmFsaWQ6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgfVxuICBcbiAgIC8qIGlucHV0W3R5cGU9ZGF0ZV06Oi13ZWJraXQtZGF0ZXRpbWUtZWRpdC10ZXh0IHtcbiAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgaW5wdXRbdHlwZT1kYXRlXTo6LXdlYmtpdC1kYXRldGltZS1lZGl0LW1vbnRoLWZpZWxke1xuICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICBpbnB1dFt0eXBlPWRhdGVdOjotd2Via2l0LWRhdGV0aW1lLWVkaXQtZGF5LWZpZWxkIHtcbiAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgaW5wdXRbdHlwZT1kYXRlXTo6LXdlYmtpdC1kYXRldGltZS1lZGl0LXllYXItZmllbGQge1xuICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgfSovXG4gIFxuICAgaW5wdXRbdHlwZT1cImRhdGVcIl06YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6IGF0dHIocGxhY2Vob2xkZXIpICFpbXBvcnRhbnQ7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgIH1cbiAgICAuYWxsb19oaXN0b3J5IC50YWJsZV9ib2R5PmRpdiwuYWxsb19oaXN0b3J5IC50YWJsZV9oZWFkaW5nPmRpdntcbiAgICB3aWR0aDogY2FsYygoMTAwJSAtIDUwcHgpIC8gNSk7XG4gIH1cbiAgLmFsbG9faGlzdG9yeSAudGFibGVfaGVhZGluZz5kaXY6Zmlyc3QtY2hpbGQsLmFsbG9faGlzdG9yeSAudGFibGVfYm9keT5kaXY6Zmlyc3QtY2hpbGR7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDQ7XG4gIH1cbiAgLmluMXtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYmFja2dyb3VuZDogI0NDRkZBQztcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgICBjb2xvcjogIzMyM0M0NztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLm91dHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYmFja2dyb3VuZDogI0ZGQ0Y4ODtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gICAgY29sb3I6ICMzMjNDNDc7XG4gIH1cbiAgI2hpc3RvcnlNb2RhbCAubW9kYWwtZGlhbG9nLCNoaXN0b3J5TW9kYWwgLm1vZGFsLWRpYWxvZyB7XG4gICAgICB3aWR0aDogNjUwcHg7XG4gIH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KXtcbiAgICNoaXN0b3J5TW9kYWwgLm1vZGFsLWRpYWxvZywjaGlzdG9yeU1vZGFsIC5tb2RhbC1kaWFsb2cge1xuICAgICAgbWF4LXdpZHRoOjY1MHB4O1xuICB9XG4gIH1cbiAgICAuc3VwcGxpZXJfbSAudGFibGVfYm9keT5kaXYsLnN1cHBsaWVyX20gLnRhYmxlX2hlYWRpbmc+ZGl2e1xuICAgIHdpZHRoOiBjYWxjKCgxMDAlIC0gMjAwcHgpIC8gNSk7XG4gIH1cbiAgLnN1cHBsaWVyX20gLnRhYmxlX2hlYWRpbmc+ZGl2Omxhc3QtY2hpbGQsLnN1cHBsaWVyX20gLnRhYmxlX2JvZHk+ZGl2Omxhc3QtY2hpbGR7XG4gICAgd2lkdGg6IDIwMHB4O1xuICB9XG4gICAgLnB1cmNoYXNlIC50YWJsZV9ib2R5PmRpdiwucHVyY2hhc2UgLnRhYmxlX2hlYWRpbmc+ZGl2e1xuICAgIHdpZHRoOiBjYWxjKCgxMDAlIC0gMTAwcHgpIC8gNik7XG4gIH1cbiAgLnB1cmNoYXNlIC50YWJsZV9oZWFkaW5nPmRpdjpsYXN0LWNoaWxkLC5wdXJjaGFzZSAudGFibGVfYm9keT5kaXY6bGFzdC1jaGlsZHtcbiAgICB3aWR0aDogMTAwcHg7XG4gIH1cbiAgaW5wdXRbdHlwZT1maWxlXTo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjZTNkYWRiO1xuICAgIHBhZGRpbmc6IC42ZW0gLjRlbTtcbiAgICBib3JkZXItcmFkaXVzOiAuMmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgdHJhbnNpdGlvbjogMXM7XG4gICAgY29sb3I6ICMxMDlDRjE7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuICBcbiAgaW5wdXRbdHlwZT1maWxlXSB7XG4gICAgcGFkZGluZzogMHB4O1xuICAgICBjb2xvcjogI0I2QjVCMTtcbiAgICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIC5kaXZfMXtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRDVEN0RBO1xuICAgIHdpZHRoOiAyNSU7XG4gICAgaGVpZ2h0OiAyN3JlbTtcbiAgICBtYXJnaW46IDBweCAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gIH1cbiAgLnB0MTAye1xuICAgIHBhZGRpbmctYm90dG9tOjIwcHg7XG4gIH1cbiAgLnRleHRhcmVhMXtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICB9XG4gIC5oZWFkaW5nMXtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICAgIGNvbG9yOiAjMzM0RDZFO1xuICB9XG4gIFxuICAuZGl2XzJ7XG4gICAgd2lkdGg6IDc1JTtcbiAgICBtYXJnaW46IDBweCAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gIH1cbiAgLnRhYmxlaGVhZHtcbiAgICBiYWNrZ3JvdW5kOiAjREZFNUYwO1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuICAudGFibGVoZWFkPmRpdntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAvIDUpO1xuICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICBjb2xvcjogIzMyM0M0NztcbiAgfVxuICAuc2VsMXtcbiAgICB3aWR0aDogMjUycHg7XG4gICAgYmFja2dyb3VuZDogI0ZBRkFGQTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRjBFREVEO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgfVxuICAudGFibGVib2R5e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgI0RGRTVGMDtcbiAgfVxuICAudGFibGVib2R5PmRpdntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAvIDUpO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gICAgY29sb3I6ICMzMjNDNDc7XG4gIH1cbiAgLnRhYmxldG90YWx7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBiYWNrZ3JvdW5kOiAjRDRGRkYyO1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgICBjb2xvcjogIzMyM0M0NztcbiAgfVxuICAudGFibGV0b3RhbD5kaXZ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyA1KTtcbiAgfVxuICAudGFibGV0b3RhbD5kaXY6bnRoLWNoaWxkKDQpe1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuICAuY3JlYXRlZF9kYXRle1xuICAgLy8gYmFja2dyb3VuZDp1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZzEvdGVhbF9yZWMuc3ZnKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgd2lkdGg6IDE5NHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gICAgY29sb3I6ICMzMjNDNDc7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBcbiAgfVxuICAubXIxMHtcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxuICAuZmxleDMwe1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgXG4gICAgXG4gIH1cbiAgLmZsZXgzMD5kaXZ7XG4gICAgcGFkZGluZy1sZWZ0OjIwcHg7XG4gICAgd2lkdGg6IGNhbGMoIDEwMCUgLyAzKTtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjRTVFM0VFO1xuICB9XG4gIC5mbGV4MzA+ZGl2Omxhc3QtY2hpbGR7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICB9XG4gIC5uYW1lMntcbiAgICB3aWR0aDogMzQlO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gICAgY29sb3I6ICMzMjNDNDc7XG4gIFxuICB9XG4gIC52YWx1ZTJ7XG4gICAgd2lkdGg6IDY2JTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIFxuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICBjb2xvcjogICMzMjNDNDc7XG4gIFxuICB9XG4gXG4gIC5mbGV4MzA+ZGl2Omxhc3QtY2hpbGQgLm5hbWUye1xuICAgIHdpZHRoOiA0NSU7XG4gIH1cbiAgLmZsZXgzMD5kaXY6bGFzdC1jaGlsZCAudmFsdWUye1xuICAgIHdpZHRoOiA1NSU7XG4gIH1cbiAgLml0ZW0gLnRhYmxlaGVhZD5kaXYsLml0ZW0gLnRhYmxlYm9keT5kaXZ7XG4gIFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyA0KTtcbiAgfVxuICAuaXRlbSAudGFibGV0b3RhbHtcbiAgICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgI0RGRTVGMDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJveC1zaGFkb3c6bm9uZTtcbiAgXG4gIH1cbiAgLml0ZW0gLnRhYmxldG90YWw+ZGl2e1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLzQpO1xuICB9XG4gICAgLnNhbGUgLnRhYmxlX2JvZHk+ZGl2LC5zYWxlIC50YWJsZV9oZWFkaW5nPmRpdntcbiAgICB3aWR0aDogY2FsYygoMTAwJSAtIDEwMHB4KSAvIDYpO1xuICB9XG4gIC5zYWxlIC50YWJsZV9oZWFkaW5nPmRpdjpsYXN0LWNoaWxkLC5zYWxlIC50YWJsZV9ib2R5PmRpdjpsYXN0LWNoaWxke1xuICAgIHdpZHRoOiAxMDBweDtcbiAgfVxuICAuc2FsZSAudGFibGVfaGVhZGluZz5kaXY6bnRoLWNoaWxkKDEwKSwuc2FsZSAudGFibGVfYm9keT5kaXY6bnRoLWNoaWxkKDEwKXtcbiAgICBsaW5lLWhlaWdodDogMThweDtcbiAgfVxuICAuZGl2XzExe1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNENUQ3REE7XG4gICAgd2lkdGg6IDI1JTtcbiAgICBoZWlnaHQ6IDM3cmVtO1xuICAgIG1hcmdpbjogMHB4IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgfVxuICBcbiAgLnNhbGVfYWRkIC50YWJsZWhlYWQ+ZGl2e1xuICBcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gNik7XG4gIFxuICB9XG4gIFxuICAuc2FsZV9hZGQgLnRhYmxlYm9keT5kaXZ7XG4gIFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyA2KTtcbiAgXG4gIH1cbiAgXG4gIC5zYWxlX2FkZCAudGFibGV0b3RhbD5kaXZ7XG4gIFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyA2KTtcbiAgfVxuICAuc2FsZV9hZGQgLnRhYmxldG90YWw+ZGl2Om50aC1jaGlsZCg1KXtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbiAgLmZpbGVfbmFtZXtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICAgIGNvbG9yOiAjMTA5Q0YxO1xuICBcbiAgfVxuICAgIC5oaXN0b3J5IC50YWJsZV9ib2R5PmRpdiwuaGlzdG9yeSAudGFibGVfaGVhZGluZz5kaXZ7XG4gICAgd2lkdGg6IGNhbGMoKDEwMCUgLSA1MHB4KSAvIDUpO1xuICB9XG4gIC5oaXN0b3J5IC50YWJsZV9oZWFkaW5nPmRpdjpmaXJzdC1jaGlsZCwuaGlzdG9yeSAudGFibGVfYm9keT5kaXY6Zmlyc3QtY2hpbGR7XG4gICAgd2lkdGg6IDUwcHg7XG4gIH1cbiAgLm5hdi1pdGVtIHtcbiAgICAubmF2LWxpbmsge1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBjb2xvcjogIzQwNTg3NztcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICB9XG4gICAgLmFjdGl2ZSB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMTA5Y2YxICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiAjMTA5Y2YxICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG4gIC5tb2RhbCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgIH1cbiAgICAgICAucmlnaHR7XG4gICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgIH1cbiAgIC5tb2RhbC1kaWFsb2cge1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgdG9wOjEwJTtcbiAgICB9XG4gICAgLm1vZGFsLWhlYWRlcjpiZWZvcmV7XG4gICAgICBkaXNwbGF5Om5vbmU7XG4gICAgfVxuICAgIC5tb2RhbC10aXRsZSB7XG4gICAgICBjb2xvcjogIzJCMjYyNjtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIH1cbiAgLmVycm9ybXNne1xuICAgIGhlaWdodDoxMHB4O1xuICB9XG4gIC5oZWxwLWJsb2Nre1xuICAgIGNvbG9yOiByZWQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMCU7XG4gICAgLy90ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy1sZWZ0OiAycHg7XG4gICAgfVxuICAgIC5jYW5jZWx7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgY29sb3I6ICMxMDlDRjE7XG4gICAgICAgIHBhZGRpbmc6IDBweCAyMHB4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGJvcmRlcjogc29saWQgMnB4ICMxMDlDRjE7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgfVxuICAgIC5hbGlnbntcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgLm11bHRpc2VsZWN0e1xuICAgICAgd2lkdGg6IDMzMHB4O1xuICAgIGhlaWdodDogMzVweDtcbiAgICBsZWZ0OiAzMHB4O1xuICAgIHRvcDogNjNweDtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIG1hcmdpbi10b3A6MjBweDtcbiAgICB9XG4gICAgI2RlbGV0ZXNNb2RhbCAubW9kYWwtZGlhbG9nIHtcbiAgICAgIHdpZHRoOiAzNTBweDtcbiAgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpe1xuICAjZGVsZXRlc01vZGFsIC5tb2RhbC1kaWFsb2cge1xuICAgICAgbWF4LXdpZHRoOjM1MHB4O1xuICB9XG4gIH1cbiAgLmNlbnRlcntcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuIFxuICAuZGVsZXRlSW1nLGxpe1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbjozcHg7XG4gIH1cbiAgLnBfdGl0bGV7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgICAvL2NvbG9yOiAjMkIyNjI2O1xuICAgIGNvbG9yOiMzMjNDNDc7XG4gICAgbWFyZ2luLWJvdHRvbTo1cHg7XG4gICAgfVxuICAgIC5oYXMtZXJyb3IgLmNvbnRyb2wtbGFiZWx7XG4gICAgICBjb2xvcjogYmxhY2s7XG4gICAgICB9XG4gICAgICAuaGVscC1ibG9ja3tcbiAgICAgIGNvbG9yOiByZWQ7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwJTtcbiAgICAgIFxuICAgICAgfVxuICAgICAgLnRleHQtZGFuZ2Vye1xuICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6MnB4O1xuICAgICAgfVxuICAgIC5zY3JvbGxhYmxle1xuICAgICAgbWF4LWhlaWdodDogNzB2aDtcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICB9XG4gICAgLmRyb3Bkb3duLWNvbnRlbnQxe1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICBtaW4td2lkdGg6IDIwMHB4O1xuICAgICAgcmlnaHQ6IDNweDtcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICB0b3A6IC0xMDBweDtcbiAgICAgIC8vdG9wOi0xMXB4O1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgIGF7XG4gIHBhZGRpbmctbGVmdDogOHB4OztcbiAgICAgfVxuICAgICAgfVxuICAgICAgLnNlcntcbiAgICAgICAgbWFyZ2luOjEwcHggMHB4O1xuICAgICAgfVxuICAgICAgLmlsbHVzdHJhdGlvbi1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgLmlsbHVzdHJhdGlvbi1pbWcge1xuICAgICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDI1JTtcbiAgICAgICAgfVxuICAgICAgfSBcbiAgICAiLCJAaW1wb3J0IFwiLi4vaW52ZW50b3J5LW1vZHVsZS5jb21wb25lbnQuc2Nzc1wiO1xuQGltcG9ydCBcIi4uL2ludmVudG9yeS1tb2R1bGUuY29tcG9uZW50LnNjc3NcIjtcbkBtZWRpYSBwcmludCB7XG5cbiAgLmhlYWRlciwgLmhpZGUgeyB2aXNpYmlsaXR5OiBoaWRkZW4gfVxuICAgIC5uYW1lMntcbiAgICBcbiAgY29sb3I6ICM4QjgxN0UgIWltcG9ydGFudDtcbiAgICBcbiAgICBcbiAgICAgIH1cbiAgICAgIC5jcmVhdGVke1xuICAgICAgLXdlYmtpdC1wcmludC1jb2xvci1hZGp1c3Q6IGV4YWN0OyBcbiAgICAgICAvLyBiYWNrZ3JvdW5kOnVybCgvYXNzZXRzL2ltZzEvdGVhbF9yZWMuc3ZnKSAhaW1wb3J0YW50O1xuICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogY2FkZXRibHVlICFpbXBvcnRhbnQ7XG4gICAgICAgLy9ib3JkZXItdG9wLWxlZnQtcmFkaXVzOjgwJSA7XG4gICAgICAvLyBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjgwJSA7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICAgICAgICB3aWR0aDogMTk0cHggIWltcG9ydGFudDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMCAhaW1wb3J0YW50O1xuICAgICAgICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHggIWltcG9ydGFudDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbSAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogIzExMGYwZiAhaW1wb3J0YW50O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICAgIFxuICAgICAgfVxuICAgICAgLnRoZWFke1xuICAgICAgICAtd2Via2l0LXByaW50LWNvbG9yLWFkanVzdDogZXhhY3Q7IFxuICAgICAgICBiYWNrZ3JvdW5kOiAjREZFNUYwICFpbXBvcnRhbnQ7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKSAhaW1wb3J0YW50O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgfVxuICAgICAgLnRib2R5e1xuICAgICAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjREZFNUYwICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgICAudGJvZHk+ZGl2e1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbCAhaW1wb3J0YW50O1xuICAgICAgICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDYwcHggIWltcG9ydGFudDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbSAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogIzMyM0M0NyAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgICAgLnRvdGFsc3N7XG4gICAgICAgIGJhY2tncm91bmQ6ICNENEZGRjIgIWltcG9ydGFudDtcbiAgICAgICAgLy9ib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSkgIWltcG9ydGFudDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW0gIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6ICMzMjNDNDcgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICAgIC50b3RhbHNzPmRpdntcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgXG4gICAgICB9XG4gICAgICAudmFsdWUye1xuICAgICAgICB3aWR0aDogNjYlO1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgXG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICAgICAgY29sb3I6ICM0QzU1NUU7XG4gICAgICBcbiAgICAgIH1cblxuICAgICBcbiAgICAgIC52YWx7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICAgIH1cbiAgICAgIEBwYWdlIDpmb290ZXIge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIEBwYWdlIDpoZWFkZXIge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbi8vIC5iYWNrYnRue1xuLy8gICBkaXNwbGF5OiBub25lO1xuLy8gfVxuICAgIH1cbiAgICAudGFibGV0b3RhbD5kaXZ7XG4gICAgICBsaW5lLWhlaWdodDogNDVweDtcbiAgICB9XG4gICAgLnRhYmxlYm9keT5kaXZ7XG4gICAgICBsaW5lLWhlaWdodDogNDVweDsgXG4gICAgfVxuICAvLyAgIEBtZWRpYSBwcmludCB7XG4gIC8vICAgICBAcGFnZSA6Zm9vdGVyIHtcbiAgLy8gICAgICAgICBkaXNwbGF5OiBub25lO1xuICAvLyAgICAgfVxuICBcbiAgLy8gICAgIEBwYWdlIDpoZWFkZXIge1xuICAvLyAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gIC8vICAgICB9XG4gIC8vIH0iXX0= */";
      /***/
    },

    /***/
    "./src/app/components/inventory-module/sale-view/sale-view.component.ts":
    /*!******************************************************************************!*\
      !*** ./src/app/components/inventory-module/sale-view/sale-view.component.ts ***!
      \******************************************************************************/

    /*! exports provided: SaleViewComponent */

    /***/
    function srcAppComponentsInventoryModuleSaleViewSaleViewComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SaleViewComponent", function () {
        return SaleViewComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _services_export_to_pdf_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../services/export-to-pdf.service */
      "./src/app/services/export-to-pdf.service.ts");
      /* harmony import */


      var _services_excel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../services/excel.service */
      "./src/app/services/excel.service.ts");
      /* harmony import */


      var _services_message_show_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../services/message-show.service */
      "./src/app/services/message-show.service.ts");
      /* harmony import */


      var _services_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../services/http.service */
      "./src/app/services/http.service.ts");
      /* harmony import */


      var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../services/authenticator.service */
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

      var __importDefault = undefined && undefined.__importDefault || function (mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };

      var SaleViewComponent =
      /** @class */
      function () {
        var SaleViewComponent = /*#__PURE__*/function () {
          function SaleViewComponent(httpService, auth, msgService, _pdfService, excelService) {
            _classCallCheck(this, SaleViewComponent);

            this.httpService = httpService;
            this.auth = auth;
            this.msgService = msgService;
            this._pdfService = _pdfService;
            this.excelService = excelService;
            this.viewDatas = [];
            this.institute_id = sessionStorage.getItem('institute_id');
            this.DataForView = [];
          }

          _createClass(SaleViewComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.viewDatas = sessionStorage.getItem('viewData');
              console.log(this.viewDatas);
              this.getViewDataById();
            }
          }, {
            key: "getViewDataById",
            value: function getViewDataById() {
              var _this59 = this;

              this.auth.showLoader();
              this.httpService.getData('/api/v1/inventory/sale/' + this.viewDatas + '?instituteId=' + this.institute_id).subscribe(function (res) {
                _this59.DataForView = res.result;

                _this59.auth.hideLoader();
              }, function (err) {
                _this59.auth.hideLoader();
              });
            }
          }, {
            key: "printData",
            value: function printData(divName) {
              //window.print();
              var printContents = document.getElementById(divName).innerHTML;
              var originalContents = document.body.innerHTML;
              document.body.innerHTML = printContents;
              window.print();
              document.body.innerHTML = originalContents;
            }
          }]);

          return SaleViewComponent;
        }();

        SaleViewComponent.ctorParameters = function () {
          return [{
            type: _services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]
          }, {
            type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticatorService"]
          }, {
            type: _services_message_show_service__WEBPACK_IMPORTED_MODULE_3__["MessageShowService"]
          }, {
            type: _services_export_to_pdf_service__WEBPACK_IMPORTED_MODULE_1__["ExportToPdfService"]
          }, {
            type: _services_excel_service__WEBPACK_IMPORTED_MODULE_2__["ExcelService"]
          }];
        };

        SaleViewComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
          selector: 'app-sale-view',
          template: __importDefault(__webpack_require__(
          /*! raw-loader!./sale-view.component.html */
          "./node_modules/raw-loader/dist/cjs.js!./src/app/components/inventory-module/sale-view/sale-view.component.html"))["default"],
          styles: [__importDefault(__webpack_require__(
          /*! ./sale-view.component.scss */
          "./src/app/components/inventory-module/sale-view/sale-view.component.scss"))["default"]]
        }), __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"], _services_authenticator_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticatorService"], _services_message_show_service__WEBPACK_IMPORTED_MODULE_3__["MessageShowService"], _services_export_to_pdf_service__WEBPACK_IMPORTED_MODULE_1__["ExportToPdfService"], _services_excel_service__WEBPACK_IMPORTED_MODULE_2__["ExcelService"]])], SaleViewComponent);
        return SaleViewComponent;
      }();
      /***/

    },

    /***/
    "./src/app/components/inventory-module/supplier/supplier.component.scss":
    /*!******************************************************************************!*\
      !*** ./src/app/components/inventory-module/supplier/supplier.component.scss ***!
      \******************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsInventoryModuleSupplierSupplierComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "* {\n  margin: 0px;\n}\n\nbody {\n  font-family: 'Open Sans', sans-serif;\n}\n\n.flex {\n  display: flex;\n}\n\n.blue_button {\n  background-color: #109CF1;\n  color: white;\n  padding: 0px 20px;\n  font-size: 13px;\n  border: none;\n  border-radius: 5px;\n  font-weight: 600;\n  line-height: 35px;\n  cursor: pointer;\n}\n\n.white_button {\n  background-color: #fff;\n  color: #109CF1;\n  padding: 0px 20px;\n  font-size: 12px;\n  border: 1px solid #109CF1;\n  border-radius: 5px;\n  font-weight: 500;\n  line-height: 35px;\n  cursor: pointer;\n}\n\n.select {\n  padding: 7px 20px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-size: 12px;\n  font-weight: 500;\n  color: #787A7D;\n}\n\n.input {\n  padding: 7px 20px;\n  font-size: 12px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-weight: 500;\n  height: 35px;\n}\n\ninput:focus, select:focus, button:focus {\n  outline: none;\n}\n\n.page_heading > p {\n  color: #334D6E;\n  font-weight: 600;\n  font-size: 14px;\n  margin-bottom: 0px;\n}\n\n.flex {\n  display: flex;\n}\n\n.display {\n  display: flex;\n  justify-content: space-between;\n}\n\n.w98 {\n  width: 98%;\n  margin: 0px auto;\n}\n\n.head_padding {\n  box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  -webkit-box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  -moz-box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  padding: 15px 0px;\n}\n\n.pageheadingspace {\n  margin-bottom: 7px;\n}\n\n.table_heading {\n  width: 100%;\n  background-color: #DFE5F0;\n  /* padding: 10px 0px;*/\n  display: flex;\n  border-radius: 5px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);\n}\n\n.table_heading > div {\n  text-align: center;\n  font-weight: 600;\n  font-size: 12px;\n  color: #323C47;\n  line-height: 35px;\n  text-align: left;\n}\n\n.table_body {\n  width: 100%;\n  display: flex;\n  border-radius: 5px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);\n  text-align: left;\n  line-height: 18px;\n}\n\n.table_body > div {\n  text-align: left;\n  font-weight: 500;\n  font-size: 12px;\n  color: #323C47;\n  /* padding: 5px 0px;*/\n  margin: auto;\n  line-height: 18px;\n}\n\n.mr10 {\n  margin-right: 10px;\n}\n\n.w240 {\n  width: 240px;\n}\n\n.item_cat .table_body > div, .item_cat .table_heading > div {\n  width: calc((100% - 250px) / 2);\n}\n\n.item_cat .table_heading > div:first-child, .item_cat .table_body > div:first-child {\n  width: 50px;\n}\n\n.item_cat .table_heading > div:last-child, .item_cat .table_body > div:last-child {\n  width: 200px;\n}\n\n.group18 {\n  width: 18px;\n  height: auto;\n}\n\n.pt15 {\n  padding-top: 15px;\n  padding-bottom: 5px;\n}\n\n.bottom_pagignation {\n  padding-top: 10px;\n  background-color: #fff;\n  position: fixed;\n  bottom: 0px;\n  z-index: 100;\n}\n\n.bottom_pagignation p {\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 20px;\n}\n\n.bottom_pagignation select {\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-size: 13px;\n  font-weight: 500;\n  color: #0079FF;\n  display: inline;\n}\n\n.bottom_pagignation .w20 {\n  width: 20%;\n}\n\n.bottom_pagignation .w10 {\n  width: 10%;\n}\n\n.bottom_pagignation .w50 {\n  width: 50%;\n}\n\n.bottom_pagignation .w40 {\n  width: 40%;\n}\n\n.number {\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 20px;\n  letter-spacing: 0.01em;\n  color: #000000;\n  margin: 0px 4px;\n}\n\n.active_circle {\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 20px;\n  letter-spacing: 0.01em;\n  color: #fff;\n  padding: 2px 7px;\n  border-radius: 50%;\n  background: #0079FF;\n}\n\n.next {\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 20px;\n  letter-spacing: 0.01em;\n  color: #0079FF;\n}\n\n.w450 {\n  width: 450px;\n}\n\n.white {\n  background-color: #fff;\n  width: calc(100% - 227px);\n  border-top: 3px solid #Ededed;\n}\n\n.nav-item .nav-link {\n  font-weight: 600;\n  color: #405877;\n  padding-bottom: 8px;\n  cursor: pointer;\n  font-size: 13px;\n}\n\n.nav-item .nav-link.active {\n  border-bottom: 3px solid #109CF1 !important;\n  color: #109CF1 !important;\n}\n\n.nav-link {\n  display: block;\n  padding: 1.5rem 0rem;\n  margin: -1rem 1.5rem;\n  margin-left: 0rem;\n}\n\n.flex {\n  display: flex;\n}\n\n.w15 {\n  width: 15%;\n  background-color: #DFE5F0;\n  padding: 10px;\n}\n\n.list > li {\n  background-color: #fff;\n  padding: 7px 0px;\n  margin: 7px 0px;\n}\n\n.list > li > a > span {\n  text-decoration: none;\n  font-size: 10px;\n  font-weight: 500;\n  color: #334D6E;\n}\n\n.list > li img {\n  padding: 0px 10px;\n}\n\n.magnifying-glass {\n  background-image: url(\"/assets/images/assets/Vector.svg\");\n  background-repeat: no-repeat;\n  background-position: left center;\n  text-indent: 10px;\n}\n\n.space33 {\n  padding-left: 5px;\n}\n\n.item_man .table_body > div, .item_man .table_heading > div {\n  width: calc((100% - 100px) / 8);\n}\n\n.item_man .table_heading > div:last-child, .item_man .table_body > div:last-child {\n  width: 100px;\n}\n\n.item_man .table_heading > div:nth-child(5), .item_man .table_heading > div:nth-child(6), .item_man .table_heading > div:nth-child(8) {\n  line-height: 18px;\n}\n\n.dropdown1 {\n  position: relative;\n  display: inline-block;\n  line-height: 35px;\n}\n\n.dropdown-content1 {\n  display: none;\n  position: absolute;\n  background-color: #fff;\n  min-width: 200px;\n  right: 3px;\n  margin-top: 20px;\n  top: -150px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1200;\n}\n\n.dropdown-content1 a {\n  color: black;\n  text-decoration: none;\n  display: block;\n}\n\n.dropdown-content1 a:hover {\n  background-color: #ddd;\n  border-radius: 5px;\n}\n\n.dropdown1:hover .dropdown-content1 {\n  display: block;\n}\n\n.dot3 {\n  padding: 10px 0px;\n  cursor: pointer;\n}\n\n.wid100 {\n  width: 100%;\n}\n\n.wid80 {\n  width: 80%;\n}\n\n.pt10 {\n  padding-bottom: 10px;\n}\n\ninput[type=\"date\"]::-webkit-calendar-picker-indicator {\n  color: rgba(0, 0, 0, 0);\n  opacity: 1;\n  display: block;\n  background: url('cal.svg') no-repeat;\n  width: 20px;\n  height: 20px;\n  border-width: thin;\n  padding: 2px 0px;\n}\n\ninput[type=\"date\"] {\n  color: #787A7D;\n  cursor: pointer;\n}\n\ninput:focus {\n  outline: none;\n}\n\nbutton:focus {\n  outline: none;\n}\n\n.modal textarea {\n  height: 100px;\n}\n\n.alert {\n  font-weight: 400;\n  font-size: 18px;\n  line-height: 27px;\n  letter-spacing: 0.01em;\n  color: #4D5869;\n}\n\n.alert_text {\n  text-align: justify;\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 19px;\n  letter-spacing: 0.01em;\n  color: #858585;\n  margin: 0px 40px;\n  margin-top: 20px;\n}\n\n.center {\n  text-align: center;\n}\n\n.center img {\n  width: 44px;\n  height: 34px;\n}\n\n#delete1Modal .modal-dialog, #deleteitemModal .modal-dialog {\n  width: 350px;\n}\n\n@media (min-width: 576px) {\n  #delete1Modal .modal-dialog, #deleteitemModal .modal-dialog {\n    max-width: 350px;\n  }\n}\n\n#deleteModal .modal-dialog {\n  width: 350px;\n}\n\n@media (min-width: 576px) {\n  #deleteModal .modal-dialog {\n    max-width: 350px;\n  }\n}\n\n.pt101 {\n  padding-top: 30px;\n  margin: 0px 30px;\n}\n\n#itemModal .modal-dialog, #edititemModal .modal-dialog, #subbranchModal .modal-dialog, #add1Modal .modal-dialog, #addpayModal .modal-dialog, #viewpayModal .modal-dialog {\n  width: 750px;\n}\n\n@media (min-width: 576px) {\n  #itemModal .modal-dialog, #edititemModal .modal-dialog, #subbranchModal .modal-dialog, #add1Modal .modal-dialog, #addpayModal .modal-dialog, #viewpayModal .modal-dialog {\n    max-width: 750px;\n  }\n}\n\n.sec1, .sec2 {\n  width: 50%;\n}\n\n.sec1 {\n  padding-right: 10px;\n}\n\n.sec2 {\n  padding-left: 10px;\n}\n\ninput[type=\"date\"]:focus:before,\ninput[type=\"date\"]:valid:before {\n  content: \"\";\n}\n\n/* input[type=date]::-webkit-datetime-edit-text {\n      -webkit-appearance: none;\n      display: none;\n  }\n  input[type=date]::-webkit-datetime-edit-month-field{\n      -webkit-appearance: none;\n      display: none;\n  }\n  input[type=date]::-webkit-datetime-edit-day-field {\n      -webkit-appearance: none;\n      display: none;\n  }\n  input[type=date]::-webkit-datetime-edit-year-field {\n      -webkit-appearance: none;\n      display: none;\n  }*/\n\ninput[type=\"date\"]:before {\n  content: attr(placeholder) !important;\n  padding-right: 20px;\n}\n\n.allo_history .table_body > div, .allo_history .table_heading > div {\n  width: calc((100% - 50px) / 5);\n}\n\n.allo_history .table_heading > div:first-child, .allo_history .table_body > div:first-child {\n  width: 50px;\n  line-height: 4;\n}\n\n.in1 {\n  display: inline-block;\n  background: #CCFFAC;\n  border-radius: 5px;\n  width: 40px;\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 24px;\n  letter-spacing: 0.01em;\n  color: #323C47;\n  text-align: center;\n}\n\n.out {\n  display: inline-block;\n  background: #FFCF88;\n  border-radius: 5px;\n  width: 40px;\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 24px;\n  text-align: center;\n  letter-spacing: 0.01em;\n  color: #323C47;\n}\n\n#historyModal .modal-dialog, #historyModal .modal-dialog {\n  width: 650px;\n}\n\n@media (min-width: 576px) {\n  #historyModal .modal-dialog, #historyModal .modal-dialog {\n    max-width: 650px;\n  }\n}\n\n.supplier_m .table_body > div, .supplier_m .table_heading > div {\n  width: calc((100% - 200px) / 5);\n}\n\n.supplier_m .table_heading > div:last-child, .supplier_m .table_body > div:last-child {\n  width: 200px;\n}\n\n.purchase .table_body > div, .purchase .table_heading > div {\n  width: calc((100% - 100px) / 6);\n}\n\n.purchase .table_heading > div:last-child, .purchase .table_body > div:last-child {\n  width: 100px;\n}\n\ninput[type=file]::-webkit-file-upload-button {\n  border: none;\n  border-right: 2px solid #e3dadb;\n  padding: .6em .4em;\n  border-radius: .2em;\n  background-color: #fff;\n  -webkit-transition: 1s;\n  transition: 1s;\n  color: #109CF1;\n  outline: none;\n}\n\ninput[type=file] {\n  padding: 0px;\n  color: #B6B5B1;\n  cursor: pointer;\n}\n\n.div_1 {\n  border: 1px solid #D5D7DA;\n  width: 25%;\n  height: 27rem;\n  margin: 0px 10px;\n  border-radius: 5px;\n  margin-top: 20px;\n  padding: 20px;\n}\n\n.pt102 {\n  padding-bottom: 20px;\n}\n\n.textarea1 {\n  height: 100px;\n}\n\n.heading1 {\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: 0.01em;\n  color: #334D6E;\n}\n\n.div_2 {\n  width: 75%;\n  margin: 0px 10px;\n  border-radius: 5px;\n  margin-top: 20px;\n  padding: 20px;\n}\n\n.tablehead {\n  background: #DFE5F0;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n  line-height: 40px;\n  display: flex;\n}\n\n.tablehead > div {\n  text-align: center;\n  width: calc(100% / 5);\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 40px;\n  text-align: center;\n  letter-spacing: 0.01em;\n  color: #323C47;\n}\n\n.sel1 {\n  width: 252px;\n  background: #FAFAFA;\n  border: 1px solid #F0EDED;\n  border-radius: 4px;\n}\n\n.tablebody {\n  display: flex;\n  border-bottom: 1px solid #DFE5F0;\n}\n\n.tablebody > div {\n  text-align: center;\n  width: calc(100% / 5);\n  font-weight: normal;\n  font-size: 13px;\n  line-height: 60px;\n  letter-spacing: 0.01em;\n  color: #323C47;\n}\n\n.tabletotal {\n  display: flex;\n  background: #D4FFF2;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n  font-weight: 600;\n  font-size: 13px;\n  letter-spacing: 0.01em;\n  color: #323C47;\n}\n\n.tabletotal > div {\n  text-align: center;\n  line-height: 60px;\n  width: calc(100% / 5);\n}\n\n.tabletotal > div:nth-child(4) {\n  font-weight: 700;\n  font-size: 16px;\n}\n\n.created_date {\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 194px;\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 30px;\n  letter-spacing: 0.01em;\n  color: #323C47;\n  text-align: center;\n}\n\n.mr10 {\n  margin-right: 10px;\n}\n\n.flex30 {\n  display: flex;\n}\n\n.flex30 > div {\n  padding-left: 20px;\n  width: calc( 100% / 3);\n  line-height: 30px;\n  border-right: 1px solid #E5E3EE;\n}\n\n.flex30 > div:last-child {\n  border-right: none;\n}\n\n.name2 {\n  width: 34%;\n  font-weight: 600;\n  font-size: 12px;\n  letter-spacing: 0.01em;\n  color: #323C47;\n}\n\n.value2 {\n  width: 66%;\n  font-weight: 400;\n  font-size: 12px;\n  letter-spacing: 0.01em;\n  color: #323C47;\n}\n\n.flex30 > div:last-child .name2 {\n  width: 45%;\n}\n\n.flex30 > div:last-child .value2 {\n  width: 55%;\n}\n\n.item .tablehead > div, .item .tablebody > div {\n  width: calc(100% / 4);\n}\n\n.item .tabletotal {\n  border-bottom: 1px solid #DFE5F0;\n  background: #fff;\n  box-shadow: none;\n}\n\n.item .tabletotal > div {\n  width: calc(100% /4);\n}\n\n.sale .table_body > div, .sale .table_heading > div {\n  width: calc((100% - 100px) / 6);\n}\n\n.sale .table_heading > div:last-child, .sale .table_body > div:last-child {\n  width: 100px;\n}\n\n.sale .table_heading > div:nth-child(10), .sale .table_body > div:nth-child(10) {\n  line-height: 18px;\n}\n\n.div_11 {\n  border: 1px solid #D5D7DA;\n  width: 25%;\n  height: 37rem;\n  margin: 0px 10px;\n  border-radius: 5px;\n  margin-top: 20px;\n  padding: 20px;\n}\n\n.sale_add .tablehead > div {\n  width: calc(100% / 6);\n}\n\n.sale_add .tablebody > div {\n  width: calc(100% / 6);\n}\n\n.sale_add .tabletotal > div {\n  width: calc(100% / 6);\n}\n\n.sale_add .tabletotal > div:nth-child(5) {\n  font-weight: 700;\n  font-size: 16px;\n}\n\n.file_name {\n  font-weight: 600;\n  font-size: 13px;\n  line-height: 18px;\n  letter-spacing: 0.01em;\n  color: #109CF1;\n}\n\n.history .table_body > div, .history .table_heading > div {\n  width: calc((100% - 50px) / 5);\n}\n\n.history .table_heading > div:first-child, .history .table_body > div:first-child {\n  width: 50px;\n}\n\n.nav-item .nav-link {\n  font-weight: 600;\n  color: #405877;\n  padding-bottom: 8px;\n  padding-top: 10px;\n  cursor: pointer;\n  font-size: 13px;\n  float: left;\n  background: none;\n}\n\n.nav-item .active {\n  border-bottom: 3px solid #109cf1 !important;\n  color: #109cf1 !important;\n}\n\n.modal {\n  width: 100%;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n}\n\n.right {\n  float: left;\n  margin: 5px;\n}\n\n.modal-dialog {\n  margin: 0 auto;\n  top: 10%;\n}\n\n.modal-header:before {\n  display: none;\n}\n\n.modal-title {\n  color: #2B2626;\n  font-weight: 600;\n  font-size: 13px;\n  font-family: 'Open Sans', sans-serif;\n  margin-bottom: 0px;\n}\n\n.errormsg {\n  height: 10px;\n}\n\n.help-block {\n  color: red;\n  margin-bottom: 0%;\n  padding-left: 2px;\n}\n\n.cancel {\n  background-color: white;\n  color: #109CF1;\n  padding: 0px 20px;\n  font-size: 12px;\n  border: solid 2px #109CF1;\n  border-radius: 5px;\n  font-weight: 500;\n  height: 35px;\n  margin-right: 15px;\n}\n\n.align {\n  text-align: center;\n}\n\n.multiselect {\n  width: 330px;\n  height: 35px;\n  left: 30px;\n  top: 63px;\n  background: #FFFFFF;\n  box-sizing: border-box;\n  border-radius: 4px;\n  margin-top: 20px;\n}\n\n#deletesModal .modal-dialog {\n  width: 350px;\n}\n\n@media (min-width: 576px) {\n  #deletesModal .modal-dialog {\n    max-width: 350px;\n  }\n}\n\n.center {\n  text-align: center;\n}\n\n.deleteImg, li {\n  float: left;\n  margin: 3px;\n}\n\n.p_title {\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 15px;\n  letter-spacing: 0.01em;\n  color: #323C47;\n  margin-bottom: 5px;\n}\n\n.has-error .control-label {\n  color: black;\n}\n\n.help-block {\n  color: red;\n  margin-bottom: 0%;\n}\n\n.text-danger {\n  color: red;\n  padding-left: 2px;\n}\n\n.scrollable {\n  max-height: 70vh;\n  overflow-y: auto;\n}\n\n.dropdown-content1 {\n  display: none;\n  position: absolute;\n  background-color: #fff;\n  min-width: 200px;\n  right: 3px;\n  margin-top: 20px;\n  top: -100px;\n  text-align: left;\n  border-radius: 10px;\n}\n\n.dropdown-content1 a {\n  padding-left: 8px;\n}\n\n.ser {\n  margin: 10px 0px;\n}\n\n.illustration-container {\n  display: block;\n}\n\n.illustration-container .illustration-img {\n  width: 40%;\n  margin-left: 25%;\n}\n\n#deletesModal .modal-dialog {\n  width: 350px;\n}\n\n@media (min-width: 576px) {\n  #deletesModal .modal-dialog {\n    max-width: 350px;\n  }\n}\n\n.center {\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbnZlbnRvcnktbW9kdWxlL2ludmVudG9yeS1tb2R1bGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaW52ZW50b3J5LW1vZHVsZS9zdXBwbGllci9zdXBwbGllci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVc7QUNDZjs7QURFRTtFQUNFLG9DQUFvQztBQ0N4Qzs7QURDRTtFQUNFLGFBQWE7QUNFakI7O0FEQUU7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGVBQWU7QUNHbkI7O0FEREU7RUFDRSxzQkFBc0I7RUFDdEIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YseUJBQXdCO0VBQ3hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGVBQWU7QUNJbkI7O0FERkc7RUFDQyxpQkFBaUI7RUFFakIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0FDSWxCOztBREZFO0VBQ0UsaUJBQWlCO0VBRWpCLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDZCxZQUFXO0FDSWpCOztBRERHO0VBQ0ksYUFBYTtBQ0lwQjs7QURGRTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGtCQUFrQjtBQ0t0Qjs7QURIRTtFQUNFLGFBQWE7QUNNakI7O0FESkU7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0FDT2xDOztBRExFO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtBQ1FwQjs7QURORTtFQUNJLCtDQUE0QztFQUM1Qyx1REFBb0Q7RUFDcEQsb0RBQWlEO0VB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QUFpQjtFQUNqQixzQkFBc0I7RUFFdEIsY0FBYTtFQUNiLGtCQUFpQjtBQytGckI7O0FEN0ZJO0VBQ0UsWUFBWTtBQ2dHbEI7O0FEOUZNO0VBQ0EsVUFBVTtFQUNWLGlCQUFpQjtBQ2lHdkI7O0FEOUZNO0VBQ0UsVUFBVTtFQUNWLGlCQUFnQjtBQ2lHeEI7O0FEL0ZJO0VBQ0UsZ0JBQWdCO0VBQ2QsZ0JBQWdCO0FDa0d4Qjs7QURoR0k7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixXQUFXO0VBRVgsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQ2tHekI7O0FENUdJO0VBWUYsaUJBQWlCO0FDb0duQjs7QURqR007RUFDRSxnQkFBZTtBQ29HdkI7O0FEbEdNO0VBQ0UsY0FBYztBQ3FHdEI7O0FEdEdNO0VBR0ksVUFBVTtFQUNWLGdCQUFnQjtBQ3VHMUI7O0FBMzZCQTtFQUNJLFlBQVk7QUE4NkJoQjs7QUE1NkJBO0VBQ0E7SUFDSSxnQkFBZTtFQSs2QmpCO0FBQ0Y7O0FBNzZCQTtFQUNJLGtCQUFrQjtBQWc3QnRCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9pbnZlbnRvcnktbW9kdWxlL3N1cHBsaWVyL3N1cHBsaWVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcbiAgICBtYXJnaW46IDBweDtcbiAgICBcbiAgfVxuICBib2R5e1xuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgfVxuICAuZmxleHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG4gIC5ibHVlX2J1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEwOUNGMTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMHB4IDIwcHg7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBsaW5lLWhlaWdodDogMzVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgLndoaXRlX2J1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBjb2xvcjogIzEwOUNGMTtcbiAgICBwYWRkaW5nOiAwcHggMjBweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgYm9yZGVyOjFweCBzb2xpZCAjMTA5Q0YxO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAgLnNlbGVjdHtcbiAgICBwYWRkaW5nOiA3cHggMjBweDtcbiAgIC8vIHBhZGRpbmc6IDdweCAycHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogIzc4N0E3RDtcbiAgfVxuICAuaW5wdXR7XG4gICAgcGFkZGluZzogN3B4IDIwcHg7XG4gICAgXG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGhlaWdodDozNXB4O1xuICAgIH1cblxuICAgaW5wdXQ6Zm9jdXMsIHNlbGVjdDpmb2N1cyxidXR0b246Zm9jdXN7XG4gICAgICAgb3V0bGluZTogbm9uZTtcbiAgIH1cbiAgLnBhZ2VfaGVhZGluZz5we1xuICAgIGNvbG9yOiAjMzM0RDZFO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgfVxuICAuZmxleHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG4gIC5kaXNwbGF5e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG4gIC53OTh7XG4gICAgd2lkdGg6IDk4JTtcbiAgICBtYXJnaW46IDBweCBhdXRvO1xuICB9XG4gIC5oZWFkX3BhZGRpbmd7XG4gICAgICBib3gtc2hhZG93OiAwcHggN3B4IDVweCAtM3B4IHJnYmEoMCwwLDAsMC4xKTtcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDdweCA1cHggLTNweCByZ2JhKDAsMCwwLDAuMSk7XG4gICAgICAtbW96LWJveC1zaGFkb3c6IDBweCA3cHggNXB4IC0zcHggcmdiYSgwLDAsMCwwLjEpO1xuICAgIHBhZGRpbmc6IDE1cHggMHB4O1xuICB9XG4gIC5wYWdlaGVhZGluZ3NwYWNle1xuICAgIG1hcmdpbi1ib3R0b206IDdweDtcbiAgfVxuICAudGFibGVfaGVhZGluZ3tcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREZFNUYwO1xuICAgLyogcGFkZGluZzogMTBweCAwcHg7Ki9cbiAgICAvL21hcmdpbjogMTBweCAwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgXG4gIH1cbiAgXG4gIC50YWJsZV9oZWFkaW5nPmRpdntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICMzMjNDNDc7XG4gICBsaW5lLWhlaWdodDogMzVweDtcbiAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cbiAgXG4gIC50YWJsZV9ib2R5e1xuICAgICB3aWR0aDogMTAwJTtcbiAgICAvL21hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIH1cbiAgLnRhYmxlX2JvZHk+ZGl2e1xuICAgIFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICMzMjNDNDc7XG4gICAvKiBwYWRkaW5nOiA1cHggMHB4OyovXG4gICAgIG1hcmdpbjogYXV0bztcbiAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIFxuICB9XG4gIFxuICAubXIxMHtcbiAgbWFyZ2luLXJpZ2h0OjEwcHg7XG4gIH1cbiAgLncyNDB7XG4gICB3aWR0aDogMjQwcHg7XG4gIH1cbiAgXG4gIC5pdGVtX2NhdCAudGFibGVfYm9keT5kaXYsLml0ZW1fY2F0IC50YWJsZV9oZWFkaW5nPmRpdntcbiAgICB3aWR0aDogY2FsYygoMTAwJSAtIDI1MHB4KSAvIDIpO1xuICB9XG4gIC5pdGVtX2NhdCAudGFibGVfaGVhZGluZz5kaXY6Zmlyc3QtY2hpbGQsLml0ZW1fY2F0IC50YWJsZV9ib2R5PmRpdjpmaXJzdC1jaGlsZHtcbiAgICB3aWR0aDogNTBweDtcbiAgfVxuICAuaXRlbV9jYXQgLnRhYmxlX2hlYWRpbmc+ZGl2Omxhc3QtY2hpbGQsLml0ZW1fY2F0IC50YWJsZV9ib2R5PmRpdjpsYXN0LWNoaWxke1xuICAgIHdpZHRoOiAyMDBweDtcbiAgfVxuICAuZ3JvdXAxOHtcbiAgICB3aWR0aDogMThweDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbiAgLnB0MTV7XG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgfVxuICAuYm90dG9tX3BhZ2lnbmF0aW9ue1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDBweDtcbiAgICB6LWluZGV4OiAxMDA7XG4gIH1cbiAgLmJvdHRvbV9wYWdpZ25hdGlvbiBwe1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICB9XG4gIC5ib3R0b21fcGFnaWduYXRpb24gc2VsZWN0e1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICMwMDc5RkY7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICB9XG4gIC5ib3R0b21fcGFnaWduYXRpb24gLncyMHtcbiAgICB3aWR0aDogMjAlO1xuICB9XG4gIC5ib3R0b21fcGFnaWduYXRpb24gLncxMHtcbiAgICB3aWR0aDogMTAlO1xuICB9XG4gIC5ib3R0b21fcGFnaWduYXRpb24gLnc1MHtcbiAgICB3aWR0aDogNTAlO1xuICB9XG4gIC5ib3R0b21fcGFnaWduYXRpb24gLnc0MHtcbiAgICB3aWR0aDogNDAlO1xuICB9XG4gIC5udW1iZXJ7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgbWFyZ2luOjBweCA0cHg7XG4gIH1cbiAgLmFjdGl2ZV9jaXJjbGV7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6MnB4IDdweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiAjMDA3OUZGO1xuICB9XG4gIC5uZXh0e1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gIGNvbG9yOiAjMDA3OUZGO1xuICBcbiAgfVxuICAudzQ1MHtcbiAgICB3aWR0aDogNDUwcHg7XG4gIH1cbiAgLndoaXRle1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIyN3B4KTtcbiAgICBib3JkZXItdG9wOiAzcHggc29saWQgI0VkZWRlZDtcbiAgfVxuICAubmF2LWl0ZW0gLm5hdi1saW5re1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGNvbG9yOiAjNDA1ODc3O1xuICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogMTNweFxuICB9XG4gIFxuICAubmF2LWl0ZW0gLm5hdi1saW5rLmFjdGl2ZSB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMTA5Q0YxICFpbXBvcnRhbnQ7XG4gICAgICBjb2xvcjogIzEwOUNGMSAhaW1wb3J0YW50O1xuICB9XG4gIC5uYXYtbGluayB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHBhZGRpbmc6IDEuNXJlbSAwcmVtO1xuICAgICAgbWFyZ2luOiAtMXJlbSAxLjVyZW07XG4gICAgICBtYXJnaW4tbGVmdDogMHJlbTtcbiAgfVxuICAuZmxleHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG4gIC53MTV7XG4gICAgd2lkdGg6IDE1JTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREZFNUYwO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cbiAgLmxpc3Q+bGl7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiA3cHggMHB4O1xuICAgIG1hcmdpbjogN3B4IDBweDtcbiAgfVxuICAubGlzdD5saT5hPnNwYW57XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICMzMzRENkU7XG4gIH1cbiAgLmxpc3Q+bGkgaW1ne1xuICBwYWRkaW5nOiAwcHggMTBweDtcbiAgfSBcbiAgLm1hZ25pZnlpbmctZ2xhc3N7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltYWdlcy9hc3NldHMvVmVjdG9yLnN2ZycpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjpsZWZ0IGNlbnRlcjtcbiAgICB0ZXh0LWluZGVudDogMTBweDtcbiAgfVxuICAuc3BhY2UzM3tcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgfVxuICAuaXRlbV9tYW4gLnRhYmxlX2JvZHk+ZGl2LC5pdGVtX21hbiAudGFibGVfaGVhZGluZz5kaXZ7XG4gICAgd2lkdGg6IGNhbGMoKDEwMCUgLSAxMDBweCkgLyA4KTtcbiAgfVxuICBcbiAgLml0ZW1fbWFuIC50YWJsZV9oZWFkaW5nPmRpdjpsYXN0LWNoaWxkLC5pdGVtX21hbiAudGFibGVfYm9keT5kaXY6bGFzdC1jaGlsZHtcbiAgICB3aWR0aDogMTAwcHg7XG4gIH1cbiAgLml0ZW1fbWFuIC50YWJsZV9oZWFkaW5nPmRpdjpudGgtY2hpbGQoNSksLml0ZW1fbWFuIC50YWJsZV9oZWFkaW5nPmRpdjpudGgtY2hpbGQoNiksLml0ZW1fbWFuIC50YWJsZV9oZWFkaW5nPmRpdjpudGgtY2hpbGQoOCl7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7fVxuICBcbiAgLmRyb3Bkb3duMSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBsaW5lLWhlaWdodDogMzVweDtcbiAgfVxuICBcbiAgLmRyb3Bkb3duLWNvbnRlbnQxIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIG1pbi13aWR0aDoyMDBweDtcbiAgICByaWdodDozcHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICB0b3A6IC0xNTBweDtcbiAgICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcbiAgICB6LWluZGV4OiAxMjAwO1xuICB9XG4gIFxuICAuZHJvcGRvd24tY29udGVudDEgYSB7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICBcbiAgLmRyb3Bkb3duLWNvbnRlbnQxIGE6aG92ZXIge2JhY2tncm91bmQtY29sb3I6ICNkZGQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDt9XG4gIFxuICAuZHJvcGRvd24xOmhvdmVyIC5kcm9wZG93bi1jb250ZW50MSB7ZGlzcGxheTogYmxvY2s7fVxuICAuZG90M3tcbiAgcGFkZGluZzogMTBweCAwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAud2lkMTAwe1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC53aWQ4MHtcbiAgICB3aWR0aDogODAlO1xuICB9XG4gIFxuICAucHQxMHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgfVxuICBpbnB1dFt0eXBlPVwiZGF0ZVwiXTo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcbiAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcxL2NhbC5zdmcpIG5vLXJlcGVhdDtcbiAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgYm9yZGVyLXdpZHRoOiB0aGluO1xuICAgICAgcGFkZGluZzogMnB4IDBweDtcbiAgfVxuICBpbnB1dFt0eXBlPVwiZGF0ZVwiXXtcbiAgICBjb2xvcjogIzc4N0E3RDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgaW5wdXQ6Zm9jdXN7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuICBidXR0b246Zm9jdXN7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuICAubW9kYWwgdGV4dGFyZWF7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgfVxuICAuYWxlcnR7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI3cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgICBjb2xvcjogIzRENTg2OTtcbiAgfVxuICAuYWxlcnRfdGV4dHtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gICAgY29sb3I6ICM4NTg1ODU7XG4gICAgbWFyZ2luOiAwcHggNDBweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICBcbiAgfVxuICAuY2VudGVye1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuY2VudGVyIGltZ3tcbiAgICB3aWR0aDogNDRweDtcbiAgaGVpZ2h0OiAzNHB4O1xuICB9XG5cbiAgXG4gICNkZWxldGUxTW9kYWwgLm1vZGFsLWRpYWxvZywjZGVsZXRlaXRlbU1vZGFsIC5tb2RhbC1kaWFsb2cge1xuICAgICAgd2lkdGg6IDM1MHB4O1xuICB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiA1NzZweCl7XG4gICNkZWxldGUxTW9kYWwgLm1vZGFsLWRpYWxvZywjZGVsZXRlaXRlbU1vZGFsIC5tb2RhbC1kaWFsb2cgIHtcbiAgICAgIG1heC13aWR0aDozNTBweDtcbiAgfVxuICB9XG4gICNkZWxldGVNb2RhbCAubW9kYWwtZGlhbG9nIHtcbiAgICAgIHdpZHRoOiAzNTBweDtcbiAgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpe1xuICAgI2RlbGV0ZU1vZGFsIC5tb2RhbC1kaWFsb2cge1xuICAgICAgbWF4LXdpZHRoOjM1MHB4O1xuICB9XG4gIH1cbiAgLnB0MTAxe1xuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgIG1hcmdpbjogMHB4IDMwcHg7XG4gIH1cbiAgI2l0ZW1Nb2RhbCAubW9kYWwtZGlhbG9nLCNlZGl0aXRlbU1vZGFsIC5tb2RhbC1kaWFsb2csI3N1YmJyYW5jaE1vZGFsIC5tb2RhbC1kaWFsb2csI2FkZDFNb2RhbCAubW9kYWwtZGlhbG9nLCNhZGRwYXlNb2RhbCAubW9kYWwtZGlhbG9nLCN2aWV3cGF5TW9kYWwgLm1vZGFsLWRpYWxvZyB7XG4gICAgICB3aWR0aDogNzUwcHg7XG4gIH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KXtcbiAgICNpdGVtTW9kYWwgLm1vZGFsLWRpYWxvZywjZWRpdGl0ZW1Nb2RhbCAubW9kYWwtZGlhbG9nLCNzdWJicmFuY2hNb2RhbCAubW9kYWwtZGlhbG9nLCNhZGQxTW9kYWwgLm1vZGFsLWRpYWxvZywjYWRkcGF5TW9kYWwgLm1vZGFsLWRpYWxvZywjdmlld3BheU1vZGFsIC5tb2RhbC1kaWFsb2cge1xuICAgICAgbWF4LXdpZHRoOjc1MHB4O1xuICB9XG4gIH1cbiAgLnNlYzEsLnNlYzJ7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxuICAuc2VjMXtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICB9XG4gIC5zZWMye1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgfVxuICBpbnB1dFt0eXBlPVwiZGF0ZVwiXTpmb2N1czpiZWZvcmUsXG4gICAgaW5wdXRbdHlwZT1cImRhdGVcIl06dmFsaWQ6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgfVxuICBcbiAgIC8qIGlucHV0W3R5cGU9ZGF0ZV06Oi13ZWJraXQtZGF0ZXRpbWUtZWRpdC10ZXh0IHtcbiAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgaW5wdXRbdHlwZT1kYXRlXTo6LXdlYmtpdC1kYXRldGltZS1lZGl0LW1vbnRoLWZpZWxke1xuICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICBpbnB1dFt0eXBlPWRhdGVdOjotd2Via2l0LWRhdGV0aW1lLWVkaXQtZGF5LWZpZWxkIHtcbiAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgaW5wdXRbdHlwZT1kYXRlXTo6LXdlYmtpdC1kYXRldGltZS1lZGl0LXllYXItZmllbGQge1xuICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgfSovXG4gIFxuICAgaW5wdXRbdHlwZT1cImRhdGVcIl06YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6IGF0dHIocGxhY2Vob2xkZXIpICFpbXBvcnRhbnQ7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgIH1cbiAgICAuYWxsb19oaXN0b3J5IC50YWJsZV9ib2R5PmRpdiwuYWxsb19oaXN0b3J5IC50YWJsZV9oZWFkaW5nPmRpdntcbiAgICB3aWR0aDogY2FsYygoMTAwJSAtIDUwcHgpIC8gNSk7XG4gIH1cbiAgLmFsbG9faGlzdG9yeSAudGFibGVfaGVhZGluZz5kaXY6Zmlyc3QtY2hpbGQsLmFsbG9faGlzdG9yeSAudGFibGVfYm9keT5kaXY6Zmlyc3QtY2hpbGR7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDQ7XG4gIH1cbiAgLmluMXtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYmFja2dyb3VuZDogI0NDRkZBQztcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgICBjb2xvcjogIzMyM0M0NztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLm91dHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYmFja2dyb3VuZDogI0ZGQ0Y4ODtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gICAgY29sb3I6ICMzMjNDNDc7XG4gIH1cbiAgI2hpc3RvcnlNb2RhbCAubW9kYWwtZGlhbG9nLCNoaXN0b3J5TW9kYWwgLm1vZGFsLWRpYWxvZyB7XG4gICAgICB3aWR0aDogNjUwcHg7XG4gIH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KXtcbiAgICNoaXN0b3J5TW9kYWwgLm1vZGFsLWRpYWxvZywjaGlzdG9yeU1vZGFsIC5tb2RhbC1kaWFsb2cge1xuICAgICAgbWF4LXdpZHRoOjY1MHB4O1xuICB9XG4gIH1cbiAgICAuc3VwcGxpZXJfbSAudGFibGVfYm9keT5kaXYsLnN1cHBsaWVyX20gLnRhYmxlX2hlYWRpbmc+ZGl2e1xuICAgIHdpZHRoOiBjYWxjKCgxMDAlIC0gMjAwcHgpIC8gNSk7XG4gIH1cbiAgLnN1cHBsaWVyX20gLnRhYmxlX2hlYWRpbmc+ZGl2Omxhc3QtY2hpbGQsLnN1cHBsaWVyX20gLnRhYmxlX2JvZHk+ZGl2Omxhc3QtY2hpbGR7XG4gICAgd2lkdGg6IDIwMHB4O1xuICB9XG4gICAgLnB1cmNoYXNlIC50YWJsZV9ib2R5PmRpdiwucHVyY2hhc2UgLnRhYmxlX2hlYWRpbmc+ZGl2e1xuICAgIHdpZHRoOiBjYWxjKCgxMDAlIC0gMTAwcHgpIC8gNik7XG4gIH1cbiAgLnB1cmNoYXNlIC50YWJsZV9oZWFkaW5nPmRpdjpsYXN0LWNoaWxkLC5wdXJjaGFzZSAudGFibGVfYm9keT5kaXY6bGFzdC1jaGlsZHtcbiAgICB3aWR0aDogMTAwcHg7XG4gIH1cbiAgaW5wdXRbdHlwZT1maWxlXTo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjZTNkYWRiO1xuICAgIHBhZGRpbmc6IC42ZW0gLjRlbTtcbiAgICBib3JkZXItcmFkaXVzOiAuMmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgdHJhbnNpdGlvbjogMXM7XG4gICAgY29sb3I6ICMxMDlDRjE7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuICBcbiAgaW5wdXRbdHlwZT1maWxlXSB7XG4gICAgcGFkZGluZzogMHB4O1xuICAgICBjb2xvcjogI0I2QjVCMTtcbiAgICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIC5kaXZfMXtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRDVEN0RBO1xuICAgIHdpZHRoOiAyNSU7XG4gICAgaGVpZ2h0OiAyN3JlbTtcbiAgICBtYXJnaW46IDBweCAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gIH1cbiAgLnB0MTAye1xuICAgIHBhZGRpbmctYm90dG9tOjIwcHg7XG4gIH1cbiAgLnRleHRhcmVhMXtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICB9XG4gIC5oZWFkaW5nMXtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICAgIGNvbG9yOiAjMzM0RDZFO1xuICB9XG4gIFxuICAuZGl2XzJ7XG4gICAgd2lkdGg6IDc1JTtcbiAgICBtYXJnaW46IDBweCAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gIH1cbiAgLnRhYmxlaGVhZHtcbiAgICBiYWNrZ3JvdW5kOiAjREZFNUYwO1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuICAudGFibGVoZWFkPmRpdntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAvIDUpO1xuICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICBjb2xvcjogIzMyM0M0NztcbiAgfVxuICAuc2VsMXtcbiAgICB3aWR0aDogMjUycHg7XG4gICAgYmFja2dyb3VuZDogI0ZBRkFGQTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRjBFREVEO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgfVxuICAudGFibGVib2R5e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgI0RGRTVGMDtcbiAgfVxuICAudGFibGVib2R5PmRpdntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAvIDUpO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gICAgY29sb3I6ICMzMjNDNDc7XG4gIH1cbiAgLnRhYmxldG90YWx7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBiYWNrZ3JvdW5kOiAjRDRGRkYyO1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgICBjb2xvcjogIzMyM0M0NztcbiAgfVxuICAudGFibGV0b3RhbD5kaXZ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyA1KTtcbiAgfVxuICAudGFibGV0b3RhbD5kaXY6bnRoLWNoaWxkKDQpe1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuICAuY3JlYXRlZF9kYXRle1xuICAgLy8gYmFja2dyb3VuZDp1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZzEvdGVhbF9yZWMuc3ZnKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgd2lkdGg6IDE5NHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gICAgY29sb3I6ICMzMjNDNDc7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBcbiAgfVxuICAubXIxMHtcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxuICAuZmxleDMwe1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgXG4gICAgXG4gIH1cbiAgLmZsZXgzMD5kaXZ7XG4gICAgcGFkZGluZy1sZWZ0OjIwcHg7XG4gICAgd2lkdGg6IGNhbGMoIDEwMCUgLyAzKTtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjRTVFM0VFO1xuICB9XG4gIC5mbGV4MzA+ZGl2Omxhc3QtY2hpbGR7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICB9XG4gIC5uYW1lMntcbiAgICB3aWR0aDogMzQlO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gICAgY29sb3I6ICMzMjNDNDc7XG4gIFxuICB9XG4gIC52YWx1ZTJ7XG4gICAgd2lkdGg6IDY2JTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIFxuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICBjb2xvcjogICMzMjNDNDc7XG4gIFxuICB9XG4gXG4gIC5mbGV4MzA+ZGl2Omxhc3QtY2hpbGQgLm5hbWUye1xuICAgIHdpZHRoOiA0NSU7XG4gIH1cbiAgLmZsZXgzMD5kaXY6bGFzdC1jaGlsZCAudmFsdWUye1xuICAgIHdpZHRoOiA1NSU7XG4gIH1cbiAgLml0ZW0gLnRhYmxlaGVhZD5kaXYsLml0ZW0gLnRhYmxlYm9keT5kaXZ7XG4gIFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyA0KTtcbiAgfVxuICAuaXRlbSAudGFibGV0b3RhbHtcbiAgICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgI0RGRTVGMDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJveC1zaGFkb3c6bm9uZTtcbiAgXG4gIH1cbiAgLml0ZW0gLnRhYmxldG90YWw+ZGl2e1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLzQpO1xuICB9XG4gICAgLnNhbGUgLnRhYmxlX2JvZHk+ZGl2LC5zYWxlIC50YWJsZV9oZWFkaW5nPmRpdntcbiAgICB3aWR0aDogY2FsYygoMTAwJSAtIDEwMHB4KSAvIDYpO1xuICB9XG4gIC5zYWxlIC50YWJsZV9oZWFkaW5nPmRpdjpsYXN0LWNoaWxkLC5zYWxlIC50YWJsZV9ib2R5PmRpdjpsYXN0LWNoaWxke1xuICAgIHdpZHRoOiAxMDBweDtcbiAgfVxuICAuc2FsZSAudGFibGVfaGVhZGluZz5kaXY6bnRoLWNoaWxkKDEwKSwuc2FsZSAudGFibGVfYm9keT5kaXY6bnRoLWNoaWxkKDEwKXtcbiAgICBsaW5lLWhlaWdodDogMThweDtcbiAgfVxuICAuZGl2XzExe1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNENUQ3REE7XG4gICAgd2lkdGg6IDI1JTtcbiAgICBoZWlnaHQ6IDM3cmVtO1xuICAgIG1hcmdpbjogMHB4IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgfVxuICBcbiAgLnNhbGVfYWRkIC50YWJsZWhlYWQ+ZGl2e1xuICBcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gNik7XG4gIFxuICB9XG4gIFxuICAuc2FsZV9hZGQgLnRhYmxlYm9keT5kaXZ7XG4gIFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyA2KTtcbiAgXG4gIH1cbiAgXG4gIC5zYWxlX2FkZCAudGFibGV0b3RhbD5kaXZ7XG4gIFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyA2KTtcbiAgfVxuICAuc2FsZV9hZGQgLnRhYmxldG90YWw+ZGl2Om50aC1jaGlsZCg1KXtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbiAgLmZpbGVfbmFtZXtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICAgIGNvbG9yOiAjMTA5Q0YxO1xuICBcbiAgfVxuICAgIC5oaXN0b3J5IC50YWJsZV9ib2R5PmRpdiwuaGlzdG9yeSAudGFibGVfaGVhZGluZz5kaXZ7XG4gICAgd2lkdGg6IGNhbGMoKDEwMCUgLSA1MHB4KSAvIDUpO1xuICB9XG4gIC5oaXN0b3J5IC50YWJsZV9oZWFkaW5nPmRpdjpmaXJzdC1jaGlsZCwuaGlzdG9yeSAudGFibGVfYm9keT5kaXY6Zmlyc3QtY2hpbGR7XG4gICAgd2lkdGg6IDUwcHg7XG4gIH1cbiAgLm5hdi1pdGVtIHtcbiAgICAubmF2LWxpbmsge1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBjb2xvcjogIzQwNTg3NztcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICB9XG4gICAgLmFjdGl2ZSB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMTA5Y2YxICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiAjMTA5Y2YxICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG4gIC5tb2RhbCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgIH1cbiAgICAgICAucmlnaHR7XG4gICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgIH1cbiAgIC5tb2RhbC1kaWFsb2cge1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgdG9wOjEwJTtcbiAgICB9XG4gICAgLm1vZGFsLWhlYWRlcjpiZWZvcmV7XG4gICAgICBkaXNwbGF5Om5vbmU7XG4gICAgfVxuICAgIC5tb2RhbC10aXRsZSB7XG4gICAgICBjb2xvcjogIzJCMjYyNjtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIH1cbiAgLmVycm9ybXNne1xuICAgIGhlaWdodDoxMHB4O1xuICB9XG4gIC5oZWxwLWJsb2Nre1xuICAgIGNvbG9yOiByZWQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMCU7XG4gICAgLy90ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy1sZWZ0OiAycHg7XG4gICAgfVxuICAgIC5jYW5jZWx7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgY29sb3I6ICMxMDlDRjE7XG4gICAgICAgIHBhZGRpbmc6IDBweCAyMHB4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGJvcmRlcjogc29saWQgMnB4ICMxMDlDRjE7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgfVxuICAgIC5hbGlnbntcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgLm11bHRpc2VsZWN0e1xuICAgICAgd2lkdGg6IDMzMHB4O1xuICAgIGhlaWdodDogMzVweDtcbiAgICBsZWZ0OiAzMHB4O1xuICAgIHRvcDogNjNweDtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIG1hcmdpbi10b3A6MjBweDtcbiAgICB9XG4gICAgI2RlbGV0ZXNNb2RhbCAubW9kYWwtZGlhbG9nIHtcbiAgICAgIHdpZHRoOiAzNTBweDtcbiAgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpe1xuICAjZGVsZXRlc01vZGFsIC5tb2RhbC1kaWFsb2cge1xuICAgICAgbWF4LXdpZHRoOjM1MHB4O1xuICB9XG4gIH1cbiAgLmNlbnRlcntcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuIFxuICAuZGVsZXRlSW1nLGxpe1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbjozcHg7XG4gIH1cbiAgLnBfdGl0bGV7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgICAvL2NvbG9yOiAjMkIyNjI2O1xuICAgIGNvbG9yOiMzMjNDNDc7XG4gICAgbWFyZ2luLWJvdHRvbTo1cHg7XG4gICAgfVxuICAgIC5oYXMtZXJyb3IgLmNvbnRyb2wtbGFiZWx7XG4gICAgICBjb2xvcjogYmxhY2s7XG4gICAgICB9XG4gICAgICAuaGVscC1ibG9ja3tcbiAgICAgIGNvbG9yOiByZWQ7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwJTtcbiAgICAgIFxuICAgICAgfVxuICAgICAgLnRleHQtZGFuZ2Vye1xuICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6MnB4O1xuICAgICAgfVxuICAgIC5zY3JvbGxhYmxle1xuICAgICAgbWF4LWhlaWdodDogNzB2aDtcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICB9XG4gICAgLmRyb3Bkb3duLWNvbnRlbnQxe1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICBtaW4td2lkdGg6IDIwMHB4O1xuICAgICAgcmlnaHQ6IDNweDtcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICB0b3A6IC0xMDBweDtcbiAgICAgIC8vdG9wOi0xMXB4O1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgIGF7XG4gIHBhZGRpbmctbGVmdDogOHB4OztcbiAgICAgfVxuICAgICAgfVxuICAgICAgLnNlcntcbiAgICAgICAgbWFyZ2luOjEwcHggMHB4O1xuICAgICAgfVxuICAgICAgLmlsbHVzdHJhdGlvbi1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgLmlsbHVzdHJhdGlvbi1pbWcge1xuICAgICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDI1JTtcbiAgICAgICAgfVxuICAgICAgfSBcbiAgICAiLCJAaW1wb3J0IFwiLi4vaW52ZW50b3J5LW1vZHVsZS5jb21wb25lbnQuc2Nzc1wiO1xuXG4jZGVsZXRlc01vZGFsIC5tb2RhbC1kaWFsb2cge1xuICAgIHdpZHRoOiAzNTBweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCl7XG4jZGVsZXRlc01vZGFsIC5tb2RhbC1kaWFsb2cge1xuICAgIG1heC13aWR0aDozNTBweDtcbn1cbn1cbi5jZW50ZXJ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl19 */";
      /***/
    },

    /***/
    "./src/app/components/inventory-module/supplier/supplier.component.ts":
    /*!****************************************************************************!*\
      !*** ./src/app/components/inventory-module/supplier/supplier.component.ts ***!
      \****************************************************************************/

    /*! exports provided: SupplierComponent */

    /***/
    function srcAppComponentsInventoryModuleSupplierSupplierComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SupplierComponent", function () {
        return SupplierComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _services_export_to_pdf_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../services/export-to-pdf.service */
      "./src/app/services/export-to-pdf.service.ts");
      /* harmony import */


      var _services_excel_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../services/excel.service */
      "./src/app/services/excel.service.ts");
      /* harmony import */


      var _services_message_show_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../services/message-show.service */
      "./src/app/services/message-show.service.ts");
      /* harmony import */


      var _services_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../services/http.service */
      "./src/app/services/http.service.ts");
      /* harmony import */


      var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../services/authenticator.service */
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

      var __importDefault = undefined && undefined.__importDefault || function (mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };

      var SupplierComponent =
      /** @class */
      function () {
        var SupplierComponent = /*#__PURE__*/function () {
          function SupplierComponent(httpService, auth, msgService, _pdfService, excelService) {
            _classCallCheck(this, SupplierComponent);

            this.httpService = httpService;
            this.auth = auth;
            this.msgService = msgService;
            this._pdfService = _pdfService;
            this.excelService = excelService;
            this.totalRow = 0;
            this.searchData = [];
            this.searchflag = false;
            this.pagedSupplierData = [];
            this.institute_id = sessionStorage.getItem('institute_id');
            this.sizeArr = [25, 50, 100, 150, 200, 500, 1000];
            this.pageIndex = 1;
            this.totalRecords = 0;
            this.displayBatchSize = 25;
            this.staticPageData = [];
            this.staticPageDataSouece = [];
            this.isedit = false;
            this.model = {
              supplier_id: 0,
              company_name: '',
              supplier_name: '',
              address: '',
              email_id: '',
              phone_no: '',
              institute_id: sessionStorage.getItem('institution_id'),
              //item_ids:[],  
              category_ids: [],
              category_id: 0
            };
            this.submitted = false;
            this.url = "/api/v1/inventory/";
            this.titles = "select role";
            this.moderatorSettings = {
              singleSelection: false,
              idField: 'category_id',
              textField: 'category_name',
              enableCheckAll: false,
              itemsShowLimit: 2
            };
            this.moderatorSettingsforitem = {
              singleSelection: false,
              idField: 'item_id',
              textField: 'item_name',
              enableCheckAll: false,
              itemsShowLimit: 2
            };
            this.maxlength = 10;
            this.itemAgainstCata = [];
            this.supplierAllData = [];
            this.tempObj = {
              supplier_id: ''
            };
            this.tempLocationList = [];
            this.supplierDataForDownload = [{
              primary_key: 'company_name',
              value: "Company Name"
            }, {
              primary_key: 'supplier_name',
              value: "Supplier Name"
            }, {
              primary_key: 'address',
              value: "Address"
            }, {
              primary_key: 'email_id',
              value: "Email Id"
            }, {
              primary_key: 'phone_no',
              value: "Mobile"
            }];
            this.model.institute_id = sessionStorage.getItem('institution_id');
          }

          _createClass(SupplierComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.setTableData();
              this.getCategoryDetails();
              this.getVendorDetails(); //console.log(this.totalRecords)
            }
          }, {
            key: "setTableData",
            value: function setTableData() {
              this.headerSetting = [{
                primary_key: 'company_name',
                value: "Company Name",
                charactLimit: 25,
                sorting: true,
                visibility: true
              }, {
                primary_key: 'supplier_name',
                value: " Supplier Name",
                charactLimit: 25,
                sorting: true,
                visibility: true
              }, {
                primary_key: 'address',
                value: " Address",
                charactLimit: 25,
                sorting: false,
                visibility: true
              }, {
                primary_key: 'email_id',
                value: "Email Id",
                charactLimit: 25,
                sorting: false,
                visibility: true
              }, {
                primary_key: 'phone_no',
                value: "Mobile",
                charactLimit: 25,
                sorting: false,
                visibility: true
              }, // {
              //   primary_key: 'category_names',
              //   value: "Category Name",
              //   charactLimit: 25,
              //   sorting: false,
              //   visibility: true
              // },
              // {
              //   primary_key: 'item_names',
              //   value: "Item Name",
              //   charactLimit: 25,
              //   sorting: false,
              //   visibility: true
              // },
              {
                primary_key: 'action',
                value: "Action",
                charactLimit: 10,
                sorting: false,
                visibility: true,
                view: false,
                edit: true,
                "delete": true
              }];
              this.tableSetting = {
                width: "100%",
                height: "58vh"
              };
              this.rowColumns = [{
                width: "16%",
                textAlign: "left"
              }, {
                width: "15%",
                textAlign: "left"
              }, {
                width: "20%",
                textAlign: "left"
              }, {
                width: "20%",
                textAlign: "left"
              }, {
                width: "20%",
                textAlign: "left"
              }, // {
              //   width: "20%",
              //   textAlign: "left"
              // },
              // {
              //   width: "15%",
              //   textAlign: "left"
              // },
              {
                width: "10%",
                textAlign: "left"
              }];
            } //get category details

          }, {
            key: "getCategoryDetails",
            value: function getCategoryDetails() {
              var _this60 = this;

              this.auth.showLoader();
              this.httpService.getData(this.url + 'category/all/' + this.model.institute_id).subscribe(function (res) {
                _this60.auth.hideLoader();

                _this60.categoryAllData = res;

                _this60.auth.hideLoader();
              }, function (err) {
                _this60.auth.hideLoader();
              });
            } //fordropdown

          }, {
            key: "getItemForSelectedCat",
            value: function getItemForSelectedCat(object) {
              var _this61 = this;

              // alert("hii")
              var categoryids = [];

              var _iterator5 = _createForOfIteratorHelper(object),
                  _step5;

              try {
                for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                  var data = _step5.value;
                  categoryids.push(data.category_id);
                }
              } catch (err) {
                _iterator5.e(err);
              } finally {
                _iterator5.f();
              }

              console.log(categoryids);
              this.httpService.getData('/api/v1/inventory/item/getItemsByCategory/' + this.model.institute_id + '?categoryIdList=' + categoryids).subscribe(function (res) {
                var result = res.result;
                var temp = [];
                console.log(result);

                for (var i = 0; i < result.length; i++) {
                  for (var j = 0; j < result[i].items.length; j++) {
                    temp.push(result[i].items[j]);
                  }
                }

                _this61.itemAgainstCata = temp;
                console.log(_this61.itemAgainstCata);
              }, function (err) {}); //  }
            }
          }, {
            key: "getVendorDetails",
            value: function getVendorDetails() {
              var _this62 = this;

              this.auth.showLoader();
              this.httpService.getData('/api/v1/inventory/supplier/all?pageOffset=' + this.pageIndex + '&pageSize=' + this.displayBatchSize + '&sortBy=supplierName&instituteId=' + this.model.institute_id).subscribe(function (res) {
                _this62.supplierAllData = res.result.response;
                _this62.staticPageData = res.result.response; //this.totalRow =  res.result.length;

                _this62.auth.hideLoader();

                _this62.tempLocationList = res.result.response;
                _this62.totalRecords = res.result.totalElements;

                _this62.auth.hideLoader();
              }, function (err) {
                _this62.auth.hideLoader();
              });
            }
          }, {
            key: "saveSupplierDetails",
            value: function saveSupplierDetails() {
              var _this63 = this;

              if (this.addVendorForm.valid) {
                var obj = {
                  supplier_id: this.model.supplier_id,
                  company_name: this.model.company_name,
                  institute_id: sessionStorage.getItem('institute_id'),
                  supplier_name: this.model.supplier_name,
                  address: this.model.address,
                  email_id: this.model.email_id,
                  phone_no: this.model.phone_no
                };
                delete this.model.category_id; //  let newasset = []
                //     let item_idss:any = obj.item_ids;
                //    for (let data in item_idss) {
                //      newasset.push(item_idss[data].item_id);
                //     }
                //    obj.item_ids = newasset

                this.httpService.postData('/api/v1/inventory/supplier/create', obj).subscribe(function (res) {
                  $('#add1Modal').modal('hide');

                  _this63.auth.hideLoader();

                  if (res.statusCode == 200) {
                    _this63.msgService.showErrorMessage(_this63.msgService.toastTypes.success, '', 'Supplier detail Added Successfully');

                    _this63.getVendorDetails();

                    _this63.cancel(false);
                  }
                }, function (err) {
                  _this63.auth.hideLoader();

                  _this63.msgService.showErrorMessage(_this63.msgService.toastTypes.error, '', err.error.error[0].errorMessage);
                });
              } else {
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', "Please fill all mandatory field");
              }
            }
          }, {
            key: "editRow",
            value: function editRow(object) {
              this.isedit = true;
              this.isedit = true;
              this.model.supplier_id = object.data.supplier_id;
              this.model.supplier_name = object.data.supplier_name;
              this.model.company_name = object.data.company_name;
              this.model.phone_no = object.data.phone_no;
              this.model.email_id = object.data.email_id; //this.model.item_ids =object.data.item_ids;

              this.model.address = object.data.address; //let temp = object.data.item_ids;
              //  let item_names = object.data.item_names.split(',');
              //  this.model.item_ids = [];
              //   for (let i = 0; i < temp.length; i++) {
              //     let obj:any = {
              //       item_id: '',
              //       item_name: ''
              //     }
              //     obj.item_id = temp[i];
              //     obj.item_name = item_names[i];
              //     this.model.item_ids.push(obj);
              //   }
              //   let temp2 = object.data.category_ids;
              //   let category_names = object.data.category_names.split(',');
              //   this.model.category_ids = [];
              //   for (let i = 0; i < temp2.length; i++) {
              //     let obj2 = {
              //       category_id: '',
              //       category_name: ''
              //     }
              //     obj2.category_id = temp2[i];
              //     obj2.category_name = category_names[i];
              //     this.model.category_ids.push(obj2);
              //   }
              //   console.log(this.model.category_ids)

              $('#add1Modal').modal('show');
            } //search filter

          }, {
            key: "updateSupplierDetails",
            value: function updateSupplierDetails() {
              var _this64 = this;

              if (this.addVendorForm.valid) {
                var obj = {
                  supplier_id: this.model.supplier_id,
                  institute_id: sessionStorage.getItem('institution_id'),
                  company_name: this.model.company_name,
                  supplier_name: this.model.supplier_name,
                  address: this.model.address,
                  email_id: this.model.email_id,
                  phone_no: this.model.phone_no
                }; // console.log(obj.item_ids)
                // let newasset = [];
                //   let item_ids: any = obj.item_ids;
                //   for (let data in item_ids) {
                //    newasset.push(item_ids[data].item_id);
                //   }
                //  obj.item_ids = newasset;

                $('#add1Modal').modal('show');
                this.auth.hideLoader();
                this.httpService.putData('/api/v1/inventory/supplier/update', obj).subscribe(function () {
                  _this64.msgService.showErrorMessage(_this64.msgService.toastTypes.success, '', " Supplier detail Updated Successfully");

                  _this64.getVendorDetails();

                  _this64.cancel(false);

                  $('#add1Modal').modal('hide');
                }, function (err) {
                  _this64.auth.hideLoader();

                  _this64.msgService.showErrorMessage(_this64.msgService.toastTypes.error, '', err.error.error[0].errorMessage);
                });
              } else {
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', "Please Fill All Required Fields");
              }
            }
          }, {
            key: "showConfirm",
            value: function showConfirm(obj) {
              this.tempObj = obj;
              this.tempObj.supplier_id = obj.data.supplier_id;
              $('#deletesModal').modal('show');
            }
          }, {
            key: "deleteRow",
            value: function deleteRow(obj) {
              var _this65 = this;

              this.auth.showLoader();
              this.httpService.deleteData(this.url + 'supplier/delete/' + obj.data.supplier_id + '?instituteId=' + this.institute_id, null).subscribe(function (res) {
                _this65.auth.hideLoader();

                _this65.msgService.showErrorMessage('success', '', 'Supplier Deleted Successfully');

                _this65.getVendorDetails();

                $('#deletesModal').modal('hide');
              }, function (err) {
                _this65.msgService.showErrorMessage('error', '', err.error.message);

                _this65.auth.hideLoader();
              });
            }
          }, {
            key: "cancel",
            value: function cancel(param) {
              this.isedit = false;
              this.model = {
                supplier_id: 0,
                company_name: '',
                supplier_name: '',
                address: '',
                email_id: '',
                phone_no: '',
                institute_id: '',
                // item_ids:[],
                category_ids: [],
                category_id: 0
              };
              this.addVendorForm.resetForm(this.model);
            } //search 

            /* ==========================================Download Data for supplier=============*/

          }, {
            key: "downloadPdf",
            value: function downloadPdf() {
              var _this66 = this;

              this.httpService.getData('/api/v1/inventory/supplier/all?all=1&instituteId=' + this.model.institute_id).subscribe(function (res) {
                _this66.supplierAllData = res.result.response;

                for (var i = 0; i < _this66.supplierAllData.length; i++) {
                  _this66.supplierAllData[i].id = i + 1;
                }

                var arrforSupplier = [];

                _this66.supplierAllData.map(function (ele) {
                  var json = [// ele.id,
                  ele.company_name, ele.supplier_name, ele.address, ele.email_id, ele.phone_no];
                  arrforSupplier.push(json);
                });

                var rows = [];
                rows = [['Company Name', 'Supplier Name', 'Address', 'Email Id', 'Mobile']];
                var columns = arrforSupplier;

                _this66._pdfService.exportToPdf(rows, columns, 'Supplier List');

                _this66.auth.hideLoader();
              }, function (err) {
                _this66.auth.hideLoader();
              });
            }
          }, {
            key: "exportToExcel",
            value: function exportToExcel() {
              var _this67 = this;

              this.httpService.getData('/api/v1/inventory/supplier/all?all=1&instituteId=' + this.model.institute_id).subscribe(function (res) {
                _this67.supplierAllData = res.result.response;
              }, function (err) {
                _this67.auth.hideLoader();
              });
              var Excelarr = [];
              this.supplierAllData.map(function (ele) {
                var json = {};

                _this67.supplierDataForDownload.map(function (keys) {
                  json[keys.value] = ele[keys.primary_key];
                });

                Excelarr.push(json);
              });
              this.excelService.exportAsExcelFile(Excelarr, 'inventory_item');
              this.auth.hideLoader();
            }
          }, {
            key: "fetchTableDataByPage",
            value: function fetchTableDataByPage(index) {
              this.pageIndex = index;
              var startindex = this.displayBatchSize * (index - 1);
              this.getDataFromDataSource(startindex);
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
              this.getVendorDetails();
            }
          }, {
            key: "updateTableBatchSize",
            value: function updateTableBatchSize(event) {
              this.pageIndex = 1;
              this.displayBatchSize = event;
              this.fetchTableDataByPage(this.pageIndex);
            }
          }, {
            key: "searchDatabase",
            value: function searchDatabase() {
              var _this68 = this;

              if (this.searchParams == undefined || this.searchParams == null) {
                this.searchParams = "";
                this.staticPageData = this.tempLocationList;
              } else {
                var searchData = this.tempLocationList.filter(function (item) {
                  return Object.keys(item).some(function (k) {
                    return item[k] != null && item[k].toString().toLowerCase().includes(_this68.searchParams.toLowerCase());
                  });
                });
                this.staticPageData = searchData;
                this.totalRecords = this.staticPageData.length;
              }
            }
          }, {
            key: "validateMobile",
            value: function validateMobile(phone_no) {
              if (this.model.phone_no.length < 10) {
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', "Please Enter 10 Digit Mobile Number");
              }

              return true;
            }
          }, {
            key: "maxlenth",
            value: function maxlenth(data, limit) {
              if (data.length > limit) {
                this.msgService.showErrorMessage(this.msgService.toastTypes.info, '', "Please Enter upto" + " " + limit + " " + "characters only");
              }
            }
          }]);

          return SupplierComponent;
        }();

        SupplierComponent.ctorParameters = function () {
          return [{
            type: _services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]
          }, {
            type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticatorService"]
          }, {
            type: _services_message_show_service__WEBPACK_IMPORTED_MODULE_4__["MessageShowService"]
          }, {
            type: _services_export_to_pdf_service__WEBPACK_IMPORTED_MODULE_2__["ExportToPdfService"]
          }, {
            type: _services_excel_service__WEBPACK_IMPORTED_MODULE_3__["ExcelService"]
          }];
        };

        SupplierComponent.propDecorators = {
          addVendorForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['addVendorForm', {
              "static": false
            }]
          }]
        };
        SupplierComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
          selector: 'app-supplier',
          template: __importDefault(__webpack_require__(
          /*! raw-loader!./supplier.component.html */
          "./node_modules/raw-loader/dist/cjs.js!./src/app/components/inventory-module/supplier/supplier.component.html"))["default"],
          styles: [__importDefault(__webpack_require__(
          /*! ./supplier.component.scss */
          "./src/app/components/inventory-module/supplier/supplier.component.scss"))["default"]]
        }), __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"], _services_authenticator_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticatorService"], _services_message_show_service__WEBPACK_IMPORTED_MODULE_4__["MessageShowService"], _services_export_to_pdf_service__WEBPACK_IMPORTED_MODULE_2__["ExportToPdfService"], _services_excel_service__WEBPACK_IMPORTED_MODULE_3__["ExcelService"]])], SupplierComponent);
        return SupplierComponent;
      }();
      /***/

    }
  }]);
})();
//# sourceMappingURL=components-inventory-module-inventory-module-module-es5.js.map