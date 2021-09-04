(function () {
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-components-course-module-create-course-course-class-course-class-module~app-components-c~3c57cc5b"], {
    /***/
    "./node_modules/@progress/kendo-angular-l10n/__ivy_ngcc__/dist/fesm2015/index.js":
    /*!***************************************************************************************!*\
      !*** ./node_modules/@progress/kendo-angular-l10n/__ivy_ngcc__/dist/fesm2015/index.js ***!
      \***************************************************************************************/

    /*! exports provided: MessageService, ComponentMessages, L10N_PREFIX, LocalizationService, RTL */

    /***/
    function node_modulesProgressKendoAngularL10n__ivy_ngcc__DistFesm2015IndexJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MessageService", function () {
        return MessageService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComponentMessages", function () {
        return ComponentMessages;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "L10N_PREFIX", function () {
        return L10N_PREFIX;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LocalizationService", function () {
        return LocalizationService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RTL", function () {
        return RTL;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/Subject */
      "./node_modules/rxjs/Subject.js");
      /* harmony import */


      var rxjs_Subject__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var rxjs_operators_skip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators/skip */
      "./node_modules/rxjs/operators/skip.js");
      /* harmony import */


      var rxjs_operators_skip__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators_skip__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/BehaviorSubject */
      "./node_modules/rxjs/BehaviorSubject.js");
      /* harmony import */


      var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var rxjs_operators_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators/map */
      "./node_modules/rxjs/operators/map.js");
      /* harmony import */


      var rxjs_operators_map__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators_map__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var rxjs_operators_tap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators/tap */
      "./node_modules/rxjs/operators/tap.js");
      /* harmony import */


      var rxjs_operators_tap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators_tap__WEBPACK_IMPORTED_MODULE_5__);
      /* tslint:disable:max-line-length */

      /**
       * A base class for a service that returns localized messages.
       *
       * For more information, refer to the section on [using the message service]({% slug messages_l10n %}#toc-using-the-message-service).
       */


      var MessageService = /*#__PURE__*/function () {
        function MessageService() {
          _classCallCheck(this, MessageService);

          /**
           * @hidden
           */
          this.changes = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        }
        /**
         * Notifies the components that the messages were changed.
         *
         * @param rtl - (Optional) A new value for the [text direction token]({% slug api_l10n_rtl %}).
         */


        _createClass(MessageService, [{
          key: "notify",
          value: function notify(rtl) {
            this.changes.next({
              rtl: rtl
            });
          }
          /**
           * Returns a localized message for the supplied key.
           *
           * @param key - The message key. For example, `"kendo.grid.noRecords"`.
           * @return - The localized message for this key or `undefined` if not found.
           */

        }, {
          key: "get",
          value: function get(key) {
            return undefined;
          }
        }]);

        return MessageService;
      }();

      MessageService.ɵfac = function MessageService_Factory(t) {
        return new (t || MessageService)();
      };

      MessageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: MessageService,
        factory: MessageService.ɵfac
      });
      /** @nocollapse */

      MessageService.ctorParameters = function () {
        return [];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessageService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [];
        }, null);
      })();
      /**
       * Base class that acts as a component messages container.
       *
       * For internal use.
       * @hidden
       */


      var ComponentMessages = /*#__PURE__*/function () {
        function ComponentMessages() {
          _classCallCheck(this, ComponentMessages);
        }

        _createClass(ComponentMessages, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            this.register(changes);

            if (Object.keys(changes).some(function (field) {
              return !changes[field].isFirstChange();
            })) {
              this.service.notifyChanges();
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.subscription = this.service.changes.pipe(Object(rxjs_operators_skip__WEBPACK_IMPORTED_MODULE_2__["skip"])(1)).subscribe(function () {
              return _this.register(_this);
            });
          }
        }, {
          key: "register",
          value: function register(changes) {
            var _this2 = this;

            var keys = Object.keys(changes);
            keys.forEach(function (key) {
              return _this2.service.register(key, _this2[key], _this2.override);
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.subscription) {
              this.subscription.unsubscribe();
            }
          }
        }, {
          key: "override",
          get: function get() {
            return false;
          }
        }]);

        return ComponentMessages;
      }();

      ComponentMessages.ɵfac = function ComponentMessages_Factory(t) {
        return new (t || ComponentMessages)();
      };

      ComponentMessages.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: ComponentMessages,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });
      /**
       * A token that specifies the text direction of Kendo UI for Angular components.
       *
       * @example
       * {% embed_file rtl/app.module.ts preview %}
       * {% embed_file rtl/app.component.ts %}
       * {% embed_file shared/main.ts hidden %}
       *
       */

      var RTL = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]("Kendo UI Right-to-Left token");
      /**
       * Localization prefix for the component messages.
       *
       * For internal use.
       * @hidden
       */

      var L10N_PREFIX = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('Localization key prefix');
      /**
       * Component localization service.
       *
       * For internal use.
       * @hidden
       */

      var LocalizationService = /*#__PURE__*/function () {
        function LocalizationService(prefix, messageService, _rtl) {
          var _this3 = this;

          _classCallCheck(this, LocalizationService);

          this.prefix = prefix;
          this.messageService = messageService;
          this._rtl = _rtl;
          this.changes = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]({
            rtl: this._rtl
          });
          this.dictionary = {};

          if (messageService) {
            this.subscription = messageService.changes.pipe(Object(rxjs_operators_map__WEBPACK_IMPORTED_MODULE_4__["map"])(function (_ref) {
              var rtl = _ref.rtl;
              return rtl !== undefined ? rtl : _this3._rtl;
            }), Object(rxjs_operators_tap__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (rtl) {
              return _this3._rtl = rtl;
            })).subscribe(function (rtl) {
              _this3.dictionary = {};

              _this3.changes.next({
                rtl: rtl
              });
            });
          }
        }

        _createClass(LocalizationService, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.subscription) {
              this.subscription.unsubscribe();
            }
          }
        }, {
          key: "get",
          value: function get(shortKey) {
            var key = this.key(shortKey);
            return this.dictionary[key];
          }
        }, {
          key: "register",
          value: function register(shortKey, value) {
            var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
            var key = this.key(shortKey);
            var message = value;

            if (!override) {
              if (this.dictionary.hasOwnProperty(key)) {
                return;
              }

              message = this.defaultValue(key, value);
            }

            this.dictionary[key] = message;
          }
        }, {
          key: "notifyChanges",
          value: function notifyChanges() {
            this.changes.next({
              rtl: this.rtl
            });
          }
        }, {
          key: "key",
          value: function key(shortKey) {
            return this.prefix + '.' + shortKey;
          }
        }, {
          key: "defaultValue",
          value: function defaultValue(key, value) {
            if (!this.messageService) {
              return value;
            }

            var alt = this.messageService.get(key);
            return alt === undefined ? value : alt;
          }
        }, {
          key: "rtl",
          get: function get() {
            return this._rtl;
          }
        }]);

        return LocalizationService;
      }();

      LocalizationService.ɵfac = function LocalizationService_Factory(t) {
        return new (t || LocalizationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](L10N_PREFIX), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](MessageService, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](RTL, 8));
      };

      LocalizationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: LocalizationService,
        factory: LocalizationService.ɵfac
      });
      /** @nocollapse */

      LocalizationService.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [L10N_PREFIX]
          }]
        }, {
          type: MessageService,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [RTL]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocalizationService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [L10N_PREFIX]
            }]
          }, {
            type: MessageService,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [RTL]
            }]
          }];
        }, null);
      })();
      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzswR0FHRTtBQUNGO0FBQ0E7OztnREFBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7eUhBR0U7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7a0NBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIEluamVjdGlvblRva2VuLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCBhcyBTdWJqZWN0JDEgfSBmcm9tICdyeGpzL1N1YmplY3QnO1xuaW1wb3J0IHsgc2tpcCBhcyBza2lwJDEgfSBmcm9tICdyeGpzL29wZXJhdG9ycy9za2lwJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCBhcyBCZWhhdmlvclN1YmplY3QkMSB9IGZyb20gJ3J4anMvQmVoYXZpb3JTdWJqZWN0JztcbmltcG9ydCB7IG1hcCBhcyBtYXAkMSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzL21hcCc7XG5pbXBvcnQgeyB0YXAgYXMgdGFwJDEgfSBmcm9tICdyeGpzL29wZXJhdG9ycy90YXAnO1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGggKi9cbi8qKlxuICogQSBiYXNlIGNsYXNzIGZvciBhIHNlcnZpY2UgdGhhdCByZXR1cm5zIGxvY2FsaXplZCBtZXNzYWdlcy5cbiAqXG4gKiBGb3IgbW9yZSBpbmZvcm1hdGlvbiwgcmVmZXIgdG8gdGhlIHNlY3Rpb24gb24gW3VzaW5nIHRoZSBtZXNzYWdlIHNlcnZpY2VdKHslIHNsdWcgbWVzc2FnZXNfbDEwbiAlfSN0b2MtdXNpbmctdGhlLW1lc3NhZ2Utc2VydmljZSkuXG4gKi9cbmNsYXNzIE1lc3NhZ2VTZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBoaWRkZW5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuY2hhbmdlcyA9IG5ldyBTdWJqZWN0JDEoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogTm90aWZpZXMgdGhlIGNvbXBvbmVudHMgdGhhdCB0aGUgbWVzc2FnZXMgd2VyZSBjaGFuZ2VkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHJ0bCAtIChPcHRpb25hbCkgQSBuZXcgdmFsdWUgZm9yIHRoZSBbdGV4dCBkaXJlY3Rpb24gdG9rZW5dKHslIHNsdWcgYXBpX2wxMG5fcnRsICV9KS5cbiAgICAgKi9cbiAgICBub3RpZnkocnRsKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlcy5uZXh0KHsgcnRsIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgbG9jYWxpemVkIG1lc3NhZ2UgZm9yIHRoZSBzdXBwbGllZCBrZXkuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ga2V5IC0gVGhlIG1lc3NhZ2Uga2V5LiBGb3IgZXhhbXBsZSwgYFwia2VuZG8uZ3JpZC5ub1JlY29yZHNcImAuXG4gICAgICogQHJldHVybiAtIFRoZSBsb2NhbGl6ZWQgbWVzc2FnZSBmb3IgdGhpcyBrZXkgb3IgYHVuZGVmaW5lZGAgaWYgbm90IGZvdW5kLlxuICAgICAqL1xuICAgIGdldChrZXkpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG59XG5NZXNzYWdlU2VydmljZS5kZWNvcmF0b3JzID0gW1xuICAgIHsgdHlwZTogSW5qZWN0YWJsZSB9LFxuXTtcbi8qKiBAbm9jb2xsYXBzZSAqL1xuTWVzc2FnZVNlcnZpY2UuY3RvclBhcmFtZXRlcnMgPSAoKSA9PiBbXTtcblxuLyoqXG4gKiBCYXNlIGNsYXNzIHRoYXQgYWN0cyBhcyBhIGNvbXBvbmVudCBtZXNzYWdlcyBjb250YWluZXIuXG4gKlxuICogRm9yIGludGVybmFsIHVzZS5cbiAqIEBoaWRkZW5cbiAqL1xuY2xhc3MgQ29tcG9uZW50TWVzc2FnZXMge1xuICAgIGdldCBvdmVycmlkZSgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzKSB7XG4gICAgICAgIHRoaXMucmVnaXN0ZXIoY2hhbmdlcyk7XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhjaGFuZ2VzKS5zb21lKGZpZWxkID0+ICFjaGFuZ2VzW2ZpZWxkXS5pc0ZpcnN0Q2hhbmdlKCkpKSB7XG4gICAgICAgICAgICB0aGlzLnNlcnZpY2Uubm90aWZ5Q2hhbmdlcygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMuc2VydmljZS5jaGFuZ2VzLnBpcGUoc2tpcCQxKDEpKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5yZWdpc3Rlcih0aGlzKSk7XG4gICAgfVxuICAgIHJlZ2lzdGVyKGNoYW5nZXMpIHtcbiAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGNoYW5nZXMpO1xuICAgICAgICBrZXlzLmZvckVhY2goa2V5ID0+IHRoaXMuc2VydmljZS5yZWdpc3RlcihrZXksIHRoaXNba2V5XSwgdGhpcy5vdmVycmlkZSkpO1xuICAgIH1cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vKipcbiAqIEEgdG9rZW4gdGhhdCBzcGVjaWZpZXMgdGhlIHRleHQgZGlyZWN0aW9uIG9mIEtlbmRvIFVJIGZvciBBbmd1bGFyIGNvbXBvbmVudHMuXG4gKlxuICogQGV4YW1wbGVcbiAqIHslIGVtYmVkX2ZpbGUgcnRsL2FwcC5tb2R1bGUudHMgcHJldmlldyAlfVxuICogeyUgZW1iZWRfZmlsZSBydGwvYXBwLmNvbXBvbmVudC50cyAlfVxuICogeyUgZW1iZWRfZmlsZSBzaGFyZWQvbWFpbi50cyBoaWRkZW4gJX1cbiAqXG4gKi9cbmNvbnN0IFJUTCA9IG5ldyBJbmplY3Rpb25Ub2tlbihcIktlbmRvIFVJIFJpZ2h0LXRvLUxlZnQgdG9rZW5cIik7XG5cbi8qKlxuICogTG9jYWxpemF0aW9uIHByZWZpeCBmb3IgdGhlIGNvbXBvbmVudCBtZXNzYWdlcy5cbiAqXG4gKiBGb3IgaW50ZXJuYWwgdXNlLlxuICogQGhpZGRlblxuICovXG5jb25zdCBMMTBOX1BSRUZJWCA9IG5ldyBJbmplY3Rpb25Ub2tlbignTG9jYWxpemF0aW9uIGtleSBwcmVmaXgnKTtcbi8qKlxuICogQ29tcG9uZW50IGxvY2FsaXphdGlvbiBzZXJ2aWNlLlxuICpcbiAqIEZvciBpbnRlcm5hbCB1c2UuXG4gKiBAaGlkZGVuXG4gKi9cbmNsYXNzIExvY2FsaXphdGlvblNlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKHByZWZpeCwgbWVzc2FnZVNlcnZpY2UsIF9ydGwpIHtcbiAgICAgICAgdGhpcy5wcmVmaXggPSBwcmVmaXg7XG4gICAgICAgIHRoaXMubWVzc2FnZVNlcnZpY2UgPSBtZXNzYWdlU2VydmljZTtcbiAgICAgICAgdGhpcy5fcnRsID0gX3J0bDtcbiAgICAgICAgdGhpcy5jaGFuZ2VzID0gbmV3IEJlaGF2aW9yU3ViamVjdCQxKHsgcnRsOiB0aGlzLl9ydGwgfSk7XG4gICAgICAgIHRoaXMuZGljdGlvbmFyeSA9IHt9O1xuICAgICAgICBpZiAobWVzc2FnZVNlcnZpY2UpIHtcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gbWVzc2FnZVNlcnZpY2UuY2hhbmdlc1xuICAgICAgICAgICAgICAgIC5waXBlKG1hcCQxKCh7IHJ0bCB9KSA9PiBydGwgIT09IHVuZGVmaW5lZCA/IHJ0bCA6IHRoaXMuX3J0bCksIHRhcCQxKHJ0bCA9PiB0aGlzLl9ydGwgPSBydGwpKVxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUocnRsID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmRpY3Rpb25hcnkgPSB7fTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZXMubmV4dCh7IHJ0bCB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldCBydGwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ydGw7XG4gICAgfVxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICBpZiAodGhpcy5zdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0KHNob3J0S2V5KSB7XG4gICAgICAgIGNvbnN0IGtleSA9IHRoaXMua2V5KHNob3J0S2V5KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGljdGlvbmFyeVtrZXldO1xuICAgIH1cbiAgICByZWdpc3RlcihzaG9ydEtleSwgdmFsdWUsIG92ZXJyaWRlID0gZmFsc2UpIHtcbiAgICAgICAgY29uc3Qga2V5ID0gdGhpcy5rZXkoc2hvcnRLZXkpO1xuICAgICAgICBsZXQgbWVzc2FnZSA9IHZhbHVlO1xuICAgICAgICBpZiAoIW92ZXJyaWRlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5kaWN0aW9uYXJ5Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtZXNzYWdlID0gdGhpcy5kZWZhdWx0VmFsdWUoa2V5LCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kaWN0aW9uYXJ5W2tleV0gPSBtZXNzYWdlO1xuICAgIH1cbiAgICBub3RpZnlDaGFuZ2VzKCkge1xuICAgICAgICB0aGlzLmNoYW5nZXMubmV4dCh7IHJ0bDogdGhpcy5ydGwgfSk7XG4gICAgfVxuICAgIGtleShzaG9ydEtleSkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcmVmaXggKyAnLicgKyBzaG9ydEtleTtcbiAgICB9XG4gICAgZGVmYXVsdFZhbHVlKGtleSwgdmFsdWUpIHtcbiAgICAgICAgaWYgKCF0aGlzLm1lc3NhZ2VTZXJ2aWNlKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYWx0ID0gdGhpcy5tZXNzYWdlU2VydmljZS5nZXQoa2V5KTtcbiAgICAgICAgcmV0dXJuIChhbHQgPT09IHVuZGVmaW5lZCkgPyB2YWx1ZSA6IGFsdDtcbiAgICB9XG59XG5Mb2NhbGl6YXRpb25TZXJ2aWNlLmRlY29yYXRvcnMgPSBbXG4gICAgeyB0eXBlOiBJbmplY3RhYmxlIH0sXG5dO1xuLyoqIEBub2NvbGxhcHNlICovXG5Mb2NhbGl6YXRpb25TZXJ2aWNlLmN0b3JQYXJhbWV0ZXJzID0gKCkgPT4gW1xuICAgIHsgdHlwZTogdW5kZWZpbmVkLCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBJbmplY3QsIGFyZ3M6IFtMMTBOX1BSRUZJWCxdIH0sXSB9LFxuICAgIHsgdHlwZTogTWVzc2FnZVNlcnZpY2UsIGRlY29yYXRvcnM6IFt7IHR5cGU6IE9wdGlvbmFsIH0sXSB9LFxuICAgIHsgdHlwZTogdW5kZWZpbmVkLCBkZWNvcmF0b3JzOiBbeyB0eXBlOiBPcHRpb25hbCB9LCB7IHR5cGU6IEluamVjdCwgYXJnczogW1JUTCxdIH0sXSB9LFxuXTtcblxuLyoqXG4gKiBHZW5lcmF0ZWQgYnVuZGxlIGluZGV4LiBEbyBub3QgZWRpdC5cbiAqL1xuXG5leHBvcnQgeyBNZXNzYWdlU2VydmljZSwgQ29tcG9uZW50TWVzc2FnZXMsIEwxME5fUFJFRklYLCBMb2NhbGl6YXRpb25TZXJ2aWNlLCBSVEwgfTtcbiJdfQ==

      /***/

    },

    /***/
    "./node_modules/@progress/kendo-angular-treeview/__ivy_ngcc__/dist/fesm2015/index.js":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/@progress/kendo-angular-treeview/__ivy_ngcc__/dist/fesm2015/index.js ***!
      \*******************************************************************************************/

    /*! exports provided: CheckBoxComponent, CheckBoxModule, DataChangeNotificationService, ExpandStateService, IndexBuilderService, LoadingIndicatorDirective, LoadingNotificationService, NavigationService, NodeChildrenService, SelectionService, SharedModule, TreeViewGroupComponent, TreeViewItemContentDirective, TreeViewItemDirective, TreeViewLookupService, TreeViewComponent, TreeViewModule, NodeTemplateDirective, CheckDirective, DisableDirective, ExpandDirective, SelectDirective, HierarchyBindingDirective, FlatDataBindingDirective */

    /***/
    function node_modulesProgressKendoAngularTreeview__ivy_ngcc__DistFesm2015IndexJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckBoxComponent", function () {
        return CheckBoxComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckBoxModule", function () {
        return CheckBoxModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataChangeNotificationService", function () {
        return DataChangeNotificationService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExpandStateService", function () {
        return ExpandStateService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IndexBuilderService", function () {
        return IndexBuilderService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoadingIndicatorDirective", function () {
        return LoadingIndicatorDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoadingNotificationService", function () {
        return LoadingNotificationService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavigationService", function () {
        return NavigationService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NodeChildrenService", function () {
        return NodeChildrenService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectionService", function () {
        return SelectionService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
        return SharedModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TreeViewGroupComponent", function () {
        return TreeViewGroupComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TreeViewItemContentDirective", function () {
        return TreeViewItemContentDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TreeViewItemDirective", function () {
        return TreeViewItemDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TreeViewLookupService", function () {
        return TreeViewLookupService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TreeViewComponent", function () {
        return TreeViewComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TreeViewModule", function () {
        return TreeViewModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NodeTemplateDirective", function () {
        return NodeTemplateDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckDirective", function () {
        return CheckDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DisableDirective", function () {
        return DisableDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExpandDirective", function () {
        return ExpandDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectDirective", function () {
        return SelectDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HierarchyBindingDirective", function () {
        return HierarchyBindingDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FlatDataBindingDirective", function () {
        return FlatDataBindingDirective;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _progress_kendo_angular_l10n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @progress/kendo-angular-l10n */
      "./node_modules/@progress/kendo-angular-l10n/__ivy_ngcc__/dist/fesm2015/index.js");
      /* harmony import */


      var rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/Subject */
      "./node_modules/rxjs/Subject.js");
      /* harmony import */


      var rxjs_Subject__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var rxjs_Subscription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/Subscription */
      "./node_modules/rxjs/Subscription.js");
      /* harmony import */


      var rxjs_Subscription__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_Subscription__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/BehaviorSubject */
      "./node_modules/rxjs/BehaviorSubject.js");
      /* harmony import */


      var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var rxjs_observable_of__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/observable/of */
      "./node_modules/rxjs/observable/of.js");
      /* harmony import */


      var rxjs_observable_of__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_observable_of__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/animations */
      "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
      /* harmony import */


      var rxjs_observable_empty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/observable/empty */
      "./node_modules/rxjs/observable/empty.js");
      /* harmony import */


      var rxjs_observable_empty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rxjs_observable_empty__WEBPACK_IMPORTED_MODULE_7__);
      /* harmony import */


      var rxjs_operators_catchError__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs/operators/catchError */
      "./node_modules/rxjs/operators/catchError.js");
      /* harmony import */


      var rxjs_operators_catchError__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators_catchError__WEBPACK_IMPORTED_MODULE_8__);
      /* harmony import */


      var rxjs_operators_tap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs/operators/tap */
      "./node_modules/rxjs/operators/tap.js");
      /* harmony import */


      var rxjs_operators_tap__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators_tap__WEBPACK_IMPORTED_MODULE_9__);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var rxjs_operators_filter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! rxjs/operators/filter */
      "./node_modules/rxjs/operators/filter.js");
      /* harmony import */


      var rxjs_operators_filter__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators_filter__WEBPACK_IMPORTED_MODULE_11__);
      /* harmony import */


      var rxjs_operators_take__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! rxjs/operators/take */
      "./node_modules/rxjs/operators/take.js");
      /* harmony import */


      var rxjs_operators_take__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators_take__WEBPACK_IMPORTED_MODULE_12__);
      /* harmony import */


      var rxjs_operators_switchMap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! rxjs/operators/switchMap */
      "./node_modules/rxjs/operators/switchMap.js");
      /* harmony import */


      var rxjs_operators_switchMap__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators_switchMap__WEBPACK_IMPORTED_MODULE_13__);
      /* harmony import */


      var rxjs_operators_map__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! rxjs/operators/map */
      "./node_modules/rxjs/operators/map.js");
      /* harmony import */


      var rxjs_operators_map__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators_map__WEBPACK_IMPORTED_MODULE_14__);
      /* harmony import */


      var rxjs_observable_merge__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! rxjs/observable/merge */
      "./node_modules/rxjs/observable/merge.js");
      /* harmony import */


      var rxjs_observable_merge__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(rxjs_observable_merge__WEBPACK_IMPORTED_MODULE_15__);
      /* harmony import */


      var rxjs_operators_delay__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! rxjs/operators/delay */
      "./node_modules/rxjs/operators/delay.js");
      /* harmony import */


      var rxjs_operators_delay__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators_delay__WEBPACK_IMPORTED_MODULE_16__);
      /* harmony import */


      var rxjs_operators_takeUntil__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! rxjs/operators/takeUntil */
      "./node_modules/rxjs/operators/takeUntil.js");
      /* harmony import */


      var rxjs_operators_takeUntil__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators_takeUntil__WEBPACK_IMPORTED_MODULE_17__);
      /**
       * Represents the template for the TreeView nodes ([more information and example]({% slug nodetemplate_treeview %})).
       * The template helps to customize the content of the nodes. To define the node template, nest an `<ng-template>`
       * tag with the `kendoTreeViewNodeTemplate` directive inside a `<kendo-treeview>` tag. The template context is set
       * to the data item of the current node.
       *
       * @example
       * ```ts
       *
       *  import { Component } from '@angular/core';
       *  @Component({
       *      selector: 'my-app',
       *      template: `
       *      <kendo-treeview
       *          [nodes]="data"
       *          kendoTreeViewExpandable
       *
       *          kendoTreeViewHierarchyBinding
       *          childrenField="items">
       *        <ng-template kendoTreeViewNodeTemplate let-dataItem>
       *          <span [style.fontWeight]="dataItem.items ? 'bolder': 'normal' ">{{dataItem.text}}</span>
       *        </ng-template>
       *      </kendo-treeview>
       *    `
       *  })
       *  export class AppComponent {
       *      public data: any[] = [
       *          {
       *              text: "Inbox",
       *              items: [{ text: "Read Mail" }]
       *          },
       *          {
       *              text: "Drafts"
       *          },
       *          {
       *              text: "Search Folders",
       *              items: [
       *                  { text: "Categorized Mail" },
       *                  { text: "Large Mail" },
       *                  { text: "Unread Mail"}
       *              ]
       *          },
       *          { text: "Settings" }
       *      ];
       *  }
       *
       * ```
       */


      var _c0 = ["kendoTreeViewGroup", ""];

      function TreeViewGroupComponent_li_0_span_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TreeViewGroupComponent_li_0_span_2_Template_span_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            var index_r2 = ctx_r9.index;
            var node_r1 = ctx_r9.$implicit;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r8.expandNode(ctx_r8.nodeIndex(index_r2), node_r1, !ctx_r8.isExpanded(node_r1, ctx_r8.nodeIndex(index_r2)));
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var node_r1 = ctx_r11.$implicit;
          var index_r2 = ctx_r11.index;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("k-i-collapse", ctx_r3.isExpanded(node_r1, ctx_r3.nodeIndex(index_r2)))("k-i-expand", !ctx_r3.isExpanded(node_r1, ctx_r3.nodeIndex(index_r2)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("kendoTreeViewLoading", ctx_r3.nodeIndex(index_r2));
        }
      }

      function TreeViewGroupComponent_li_0_kendo_checkbox_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "kendo-checkbox", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("checkStateChange", function TreeViewGroupComponent_li_0_kendo_checkbox_3_Template_kendo_checkbox_checkStateChange_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

            var index_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r12.checkNode(ctx_r12.nodeIndex(index_r2));
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var node_r1 = ctx_r15.$implicit;
          var index_r2 = ctx_r15.index;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("node", node_r1)("index", ctx_r4.nodeIndex(index_r2))("isChecked", ctx_r4.isChecked);
        }
      }

      function TreeViewGroupComponent_li_0_ng_container_6_ng_template_1_Template(rf, ctx) {}

      var _c1 = function _c1(a0, a1) {
        return {
          $implicit: a0,
          index: a1
        };
      };

      function TreeViewGroupComponent_li_0_ng_container_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TreeViewGroupComponent_li_0_ng_container_6_ng_template_1_Template, 0, 0, "ng-template", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var node_r1 = ctx_r17.$implicit;
          var index_r2 = ctx_r17.index;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r5.nodeTemplateRef)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c1, node_r1, ctx_r5.nodeIndex(index_r2)));
        }
      }

      function TreeViewGroupComponent_li_0_ng_container_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var node_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.nodeText(node_r1), " ");
        }
      }

      function TreeViewGroupComponent_li_0_ul_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ul", 13);
        }

        if (rf & 2) {
          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var node_r1 = ctx_r19.$implicit;
          var index_r2 = ctx_r19.index;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nodes", ctx_r7.fetchChildren)("checkboxes", ctx_r7.checkboxes)("expandIcons", ctx_r7.expandIcons)("children", ctx_r7.children)("hasChildren", ctx_r7.hasChildren)("isChecked", ctx_r7.isChecked)("isDisabled", ctx_r7.isDisabled)("disabled", ctx_r7.disabled || ctx_r7.isDisabled(node_r1, ctx_r7.nodeIndex(index_r2)))("isExpanded", ctx_r7.isExpanded)("isSelected", ctx_r7.isSelected)("nodeTemplateRef", ctx_r7.nodeTemplateRef)("parentIndex", ctx_r7.nodeIndex(index_r2))("parentDataItem", node_r1)("textField", ctx_r7.nextFields)("@toggle", true);
        }
      }

      function TreeViewGroupComponent_li_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TreeViewGroupComponent_li_0_span_2_Template, 1, 5, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TreeViewGroupComponent_li_0_kendo_checkbox_3_Template, 1, 3, "kendo-checkbox", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](5, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TreeViewGroupComponent_li_0_ng_container_6_Template, 2, 5, "ng-container", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TreeViewGroupComponent_li_0_ng_container_7_Template, 2, 1, "ng-container", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TreeViewGroupComponent_li_0_ul_8_Template, 1, 15, "ul", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var node_r1 = ctx.$implicit;
          var index_r2 = ctx.index;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataItem", node_r1)("index", ctx_r0.nodeIndex(index_r2))("parentDataItem", ctx_r0.parentDataItem)("parentIndex", ctx_r0.parentIndex)("isChecked", ctx_r0.isChecked(node_r1, ctx_r0.nodeIndex(index_r2)))("isDisabled", ctx_r0.disabled || ctx_r0.isDisabled(node_r1, ctx_r0.nodeIndex(index_r2)))("isExpanded", ctx_r0.isExpanded(node_r1, ctx_r0.nodeIndex(index_r2)))("isSelected", ctx_r0.isSelected(node_r1, ctx_r0.nodeIndex(index_r2)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-treeindex", ctx_r0.nodeIndex(index_r2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.expandIcons && ctx_r0.hasChildren(node_r1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.checkboxes);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataItem", node_r1)("index", ctx_r0.nodeIndex(index_r2))("initialSelection", ctx_r0.isSelected(node_r1, ctx_r0.nodeIndex(index_r2)))("isSelected", ctx_r0.isSelected);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-treeindex", ctx_r0.nodeIndex(index_r2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx_r0.hasTemplate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isExpanded(node_r1, ctx_r0.nodeIndex(index_r2)) && ctx_r0.hasChildren(node_r1));
        }
      }

      var NodeTemplateDirective = function NodeTemplateDirective(templateRef) {
        _classCallCheck(this, NodeTemplateDirective);

        this.templateRef = templateRef;
      };

      NodeTemplateDirective.ɵfac = function NodeTemplateDirective_Factory(t) {
        return new (t || NodeTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], 8));
      };

      NodeTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: NodeTemplateDirective,
        selectors: [["", "kendoTreeViewNodeTemplate", ""]]
      });
      /** @nocollapse */

      NodeTemplateDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NodeTemplateDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[kendoTreeViewNodeTemplate]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }]
          }];
        }, null);
      })();
      /**
       * @hidden
       */


      var ExpandStateService = /*#__PURE__*/function () {
        function ExpandStateService() {
          _classCallCheck(this, ExpandStateService);

          this.changes = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        }

        _createClass(ExpandStateService, [{
          key: "expand",
          value: function expand(index, dataItem) {
            this.changes.next({
              dataItem: dataItem,
              index: index,
              expand: true
            });
          }
        }, {
          key: "collapse",
          value: function collapse(index, dataItem) {
            this.changes.next({
              dataItem: dataItem,
              index: index,
              expand: false
            });
          }
        }]);

        return ExpandStateService;
      }();

      ExpandStateService.ɵfac = function ExpandStateService_Factory(t) {
        return new (t || ExpandStateService)();
      };

      ExpandStateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ExpandStateService,
        factory: ExpandStateService.ɵfac
      });
      /** @nocollapse */

      ExpandStateService.ctorParameters = function () {
        return [];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExpandStateService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [];
        }, null);
      })();
      /**
       * @hidden
       */


      var IndexBuilderService = /*#__PURE__*/function () {
        function IndexBuilderService() {
          _classCallCheck(this, IndexBuilderService);

          this.INDEX_SEPARATOR = '_';
        }

        _createClass(IndexBuilderService, [{
          key: "nodeIndex",
          value: function nodeIndex() {
            var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            var parentIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
            return "".concat(parentIndex).concat(parentIndex ? this.INDEX_SEPARATOR : '').concat(index);
          }
        }, {
          key: "indexForLevel",
          value: function indexForLevel(index, level) {
            return index.split(this.INDEX_SEPARATOR).slice(0, level).join(this.INDEX_SEPARATOR);
          }
        }, {
          key: "lastLevelIndex",
          value: function lastLevelIndex() {
            var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            var parts = index.split(this.INDEX_SEPARATOR);

            if (!parts.length) {
              return NaN;
            }

            return parseInt(parts[parts.length - 1], 10);
          }
        }, {
          key: "level",
          value: function level(index) {
            return index.split(this.INDEX_SEPARATOR).length;
          }
        }]);

        return IndexBuilderService;
      }();

      IndexBuilderService.ɵfac = function IndexBuilderService_Factory(t) {
        return new (t || IndexBuilderService)();
      };

      IndexBuilderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: IndexBuilderService,
        factory: IndexBuilderService.ɵfac
      });
      /** @nocollapse */

      IndexBuilderService.ctorParameters = function () {
        return [];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IndexBuilderService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [];
        }, null);
      })();
      /**
       * @hidden
       */


      var LoadingNotificationService = /*#__PURE__*/function () {
        function LoadingNotificationService() {
          _classCallCheck(this, LoadingNotificationService);

          this.changes = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        }

        _createClass(LoadingNotificationService, [{
          key: "notifyLoaded",
          value: function notifyLoaded(index) {
            this.changes.next(index);
          }
        }]);

        return LoadingNotificationService;
      }();

      LoadingNotificationService.ɵfac = function LoadingNotificationService_Factory(t) {
        return new (t || LoadingNotificationService)();
      };

      LoadingNotificationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: LoadingNotificationService,
        factory: LoadingNotificationService.ɵfac
      });
      /** @nocollapse */

      LoadingNotificationService.ctorParameters = function () {
        return [];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingNotificationService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [];
        }, null);
      })();
      /**
       * @hidden
       */


      var NodeChildrenService = /*#__PURE__*/function () {
        function NodeChildrenService() {
          _classCallCheck(this, NodeChildrenService);

          this.changes = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        }

        _createClass(NodeChildrenService, [{
          key: "childrenLoaded",
          value: function childrenLoaded(item, children) {
            this.changes.next({
              item: item,
              children: children
            });
          }
        }]);

        return NodeChildrenService;
      }();

      NodeChildrenService.ɵfac = function NodeChildrenService_Factory(t) {
        return new (t || NodeChildrenService)();
      };

      NodeChildrenService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: NodeChildrenService,
        factory: NodeChildrenService.ɵfac
      });
      /** @nocollapse */

      NodeChildrenService.ctorParameters = function () {
        return [];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NodeChildrenService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [];
        }, null);
      })();

      var focusableRegex = /^(?:a|input|select|option|textarea|button|object)$/i;
      /**
       * @hidden
       */

      var match = function match(element, selector) {
        var matcher = element.matches || element.msMatchesSelector || element.webkitMatchesSelector;

        if (!matcher) {
          return false;
        }

        return matcher.call(element, selector);
      };

      var closestWithMatch = function closestWithMatch(element, selector) {
        if (!document.documentElement.contains(element)) {
          return null;
        }

        var parent = element;

        while (parent !== null && parent.nodeType === 1) {
          if (match(parent, selector)) {
            return parent;
          }

          parent = parent.parentElement || parent.parentNode;
        }

        return null;
      };
      /**
       * @hidden
       */


      var noop = function noop() {};
      /**
       * @hidden
       */


      var isPresent = function isPresent(value) {
        return value !== null && value !== undefined;
      };
      /**
       * @hidden
       */


      var isBlank = function isBlank(value) {
        return value === null || value === undefined;
      };
      /**
       * @hidden
       */


      var isArray = function isArray(value) {
        return Array.isArray(value);
      };
      /**
       * @hidden
       */


      var isNullOrEmptyString = function isNullOrEmptyString(value) {
        return isBlank(value) || value.trim().length === 0;
      };
      /**
       * @hidden
       */


      var isDocumentAvailable = function isDocumentAvailable() {
        return typeof document !== 'undefined';
      };
      /**
       * @hidden
       */


      var hasObservers = function hasObservers(emitter) {
        return emitter.observers.length > 0;
      };
      /**
       * @hidden
       */


      var isChanged = function isChanged(propertyName, changes) {
        var skipFirstChange = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
        return changes[propertyName] && (!changes[propertyName].isFirstChange() || !skipFirstChange) && changes[propertyName].previousValue !== changes[propertyName].currentValue;
      };
      /**
       * @hidden
       */

      /**
       * @hidden
       */


      var closestNode = function closestNode(element) {
        var selector = 'li.k-treeview-item';

        if (!isDocumentAvailable()) {
          return null;
        }

        if (element.closest) {
          return element.closest(selector);
        } else {
          return closestWithMatch(element, selector);
        }
      };
      /**
       * @hidden
       */


      var isFocusable = function isFocusable(element) {
        if (element.tagName) {
          var tagName = element.tagName.toLowerCase();
          var tabIndex = element.getAttribute('tabIndex');
          var skipTab = tabIndex === '-1';
          var focusable = tabIndex !== null && !skipTab;

          if (focusableRegex.test(tagName)) {
            focusable = !element.disabled && !skipTab;
          }

          return focusable;
        }

        return false;
      };
      /**
       * @hidden
       */


      var isContent = function isContent(element) {
        var scopeSelector = '.k-in,.k-treeview-item,.k-treeview';

        if (!isDocumentAvailable()) {
          return null;
        }

        var node = element;

        while (node && !match(node, scopeSelector)) {
          node = node.parentNode;
        }

        if (node) {
          return match(node, '.k-in');
        }
      };
      /**
       * @hidden
       */


      var closest = function closest(node, predicate) {
        while (node && !predicate(node)) {
          node = node.parentNode;
        }

        return node;
      };
      /**
       * @hidden
       */


      var hasParent = function hasParent(element, container) {
        return Boolean(closest(element, function (node) {
          return node === container;
        }));
      };
      /**
       * @hidden
       */


      var focusableNode = function focusableNode(element) {
        return element.nativeElement.querySelector('li[tabindex="0"]');
      };
      /**
       * @hidden
       */

      /**
       * @hidden
       */


      var nodeId = function nodeId(node) {
        return node ? node.getAttribute('data-treeindex') : '';
      };
      /**
       * @hidden
       */


      var nodeIndex = function nodeIndex(item) {
        return (item || {}).index;
      };
      /**
       * @hidden
       */


      var guid = function guid() {
        var id = "",
            random;

        for (var i = 0; i < 32; i++) {
          random = Math.random() * 16 | 0; // tslint:disable-line:no-bitwise

          if (i === 8 || i === 12 || i === 16 || i === 20) {
            id += "-";
          }

          id += (i === 12 ? 4 : i === 16 ? random & 3 | 8 : random).toString(16); // tslint:disable-line:no-bitwise
        }

        return id;
      };

      var last = function last(list) {
        return list[list.length - 1];
      };

      var safe = function safe(node) {
        return node || {};
      };

      var safeChildren = function safeChildren(node) {
        return safe(node).children || [];
      };

      var findLast = function findLast(node) {
        var lastNode = node;
        var children = [].concat(safeChildren(node));

        while (children.length) {
          children = children.concat(safeChildren(last(children)));
          lastNode = children.shift();
        }

        return lastNode;
      };
      /**
       * @hidden
       */


      var NavigationModel = /*#__PURE__*/function () {
        function NavigationModel() {
          _classCallCheck(this, NavigationModel);

          this.ib = new IndexBuilderService();
          this.nodes = [];
        }

        _createClass(NavigationModel, [{
          key: "firstNode",
          value: function firstNode() {
            return this.nodes[0] || null;
          }
        }, {
          key: "lastNode",
          value: function lastNode() {
            var node = this.nodes[this.nodes.length - 1];

            if (!node) {
              return null;
            }

            return findLast(last(this.container(node))) || node;
          }
        }, {
          key: "closestNode",
          value: function closestNode(index) {
            var _safe = safe(this.findNode(index)),
                prev = _safe.prev;

            var sibling = prev || this.firstNode();
            return safe(sibling).index === index ? this.sibling(sibling, 1) : sibling;
          }
        }, {
          key: "findNode",
          value: function findNode(index) {
            return this.find(index, this.nodes);
          }
        }, {
          key: "findParent",
          value: function findParent(index) {
            var parentLevel = this.ib.level(index) - 1;
            return this.findNode(this.ib.indexForLevel(index, parentLevel));
          }
        }, {
          key: "findChild",
          value: function findChild(index) {
            return safeChildren(this.findNode(index))[0] || null;
          }
        }, {
          key: "findPrev",
          value: function findPrev(item) {
            var index = item.index;
            var parent = this.findParent(index);
            var levelIndex = this.ib.lastLevelIndex(index);

            if (levelIndex === 0) {
              return parent;
            }

            var currentNode = this.findNode(index);
            var prev = this.sibling(currentNode, -1);

            if (prev) {
              var children = this.container(prev);

              while (children.length > 0) {
                prev = last(children);
                children = this.container(prev);
              }
            }

            return prev;
          }
        }, {
          key: "findNext",
          value: function findNext(item) {
            var children = this.container(item);

            if (children.length === 0) {
              return this.sibling(item, 1);
            }

            return children[0];
          }
        }, {
          key: "registerItem",
          value: function registerItem(id, index, disabled) {
            var children = [];
            var level = this.ib.level(index);
            var parent = this.findParent(index);

            if (parent || level === 1) {
              var node = {
                id: id,
                children: children,
                index: index,
                parent: parent,
                disabled: disabled
              };
              this.insert(node, parent);
            }
          }
        }, {
          key: "unregisterItem",
          value: function unregisterItem(id, index) {
            var node = this.find(index, this.nodes);

            if (!node || node.id !== id) {
              return;
            }

            var children = this.container(node.parent);
            children.splice(children.indexOf(node), 1);
          }
        }, {
          key: "childLevel",
          value: function childLevel(nodes) {
            var children = nodes.filter(function (node) {
              return isPresent(node);
            });

            if (!children || !children.length) {
              return 1;
            }

            return this.ib.level(children[0].index);
          }
        }, {
          key: "container",
          value: function container(node) {
            return node ? node.children : this.nodes;
          }
        }, {
          key: "find",
          value: function find(index, nodes) {
            var childLevel = this.childLevel(nodes);
            var indexToMatch = this.ib.indexForLevel(index, childLevel);
            var isLeaf = childLevel === this.ib.level(index);
            var node = nodes.find(function (n) {
              return n && n.index === indexToMatch;
            });

            if (!node) {
              return null;
            }

            return isLeaf ? node : this.find(index, node.children);
          }
        }, {
          key: "insert",
          value: function insert(node, parent) {
            var nodes = this.container(parent);
            nodes[this.ib.lastLevelIndex(node.index)] = node;
          }
        }, {
          key: "sibling",
          value: function sibling(node, offset) {
            if (!node) {
              return null;
            }

            var parent = this.findParent(node.index);
            var container = this.container(parent);
            return container[container.indexOf(node) + offset] || this.sibling(parent, offset) || null;
          }
        }]);

        return NavigationModel;
      }();
      /**
       * @hidden
       */


      var Keys;

      (function (Keys) {
        Keys[Keys["enter"] = 13] = "enter";
        Keys[Keys["shift"] = 16] = "shift";
        Keys[Keys["space"] = 32] = "space";
        Keys[Keys["end"] = 35] = "end";
        Keys[Keys["home"] = 36] = "home";
        Keys[Keys["left"] = 37] = "left";
        Keys[Keys["up"] = 38] = "up";
        Keys[Keys["right"] = 39] = "right";
        Keys[Keys["down"] = 40] = "down";
      })(Keys || (Keys = {}));
      /**
       * @hidden
       */


      var NavigationService = /*#__PURE__*/function () {
        function NavigationService(localization) {
          var _this4 = this,
              _this$actions;

          _classCallCheck(this, NavigationService);

          this.localization = localization;
          this.expands = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.moves = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.checks = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.selects = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this.navigable = true;
          this.actions = (_this$actions = {}, _defineProperty(_this$actions, Keys.up, function () {
            return _this4.activate(_this4.model.findPrev(_this4.focusableItem));
          }), _defineProperty(_this$actions, Keys.down, function () {
            return _this4.activate(_this4.model.findNext(_this4.focusableItem));
          }), _defineProperty(_this$actions, Keys.left, function () {
            return _this4.expand({
              expand: _this4.localization.rtl,
              intercept: _this4.localization.rtl ? _this4.moveToChild : _this4.moveToParent
            });
          }), _defineProperty(_this$actions, Keys.right, function () {
            return _this4.expand({
              expand: !_this4.localization.rtl,
              intercept: _this4.localization.rtl ? _this4.moveToParent : _this4.moveToChild
            });
          }), _defineProperty(_this$actions, Keys.home, function () {
            return _this4.activate(_this4.model.firstNode());
          }), _defineProperty(_this$actions, Keys.end, function () {
            return _this4.activate(_this4.model.lastNode());
          }), _defineProperty(_this$actions, Keys.enter, function () {
            return _this4.navigable && _this4.selectIndex(nodeIndex(_this4.activeItem));
          }), _defineProperty(_this$actions, Keys.space, function () {
            return _this4.navigable && _this4.checkIndex(nodeIndex(_this4.activeItem));
          }), _this$actions);
          this.isFocused = false;
          this._model = new NavigationModel();
          this.moveToChild = this.moveToChild.bind(this);
          this.moveToParent = this.moveToParent.bind(this);
        }

        _createClass(NavigationService, [{
          key: "activate",
          value: function activate(item) {
            if (!this.navigable || !item || this.isActive(nodeIndex(item))) {
              return;
            }

            this.isFocused = true;
            this.activeItem = item || this.activeItem;
            this.notifyMove();
          }
        }, {
          key: "activateParent",
          value: function activateParent(index) {
            this.activate(this.model.findParent(index));
          }
        }, {
          key: "activateIndex",
          value: function activateIndex(index) {
            if (!index) {
              return;
            }

            this.activate(this.model.findNode(index));
          }
        }, {
          key: "activateClosest",
          value: function activateClosest(index) {
            if (!index || nodeIndex(this.focusableItem) !== index) {
              return;
            }

            this.activeItem = this.model.closestNode(index);
            this.notifyMove();
          }
        }, {
          key: "activateFocusable",
          value: function activateFocusable() {
            if (this.activeItem) {
              return;
            }

            this.activeItem = this.model.firstNode();
            this.notifyMove();
          }
        }, {
          key: "deactivate",
          value: function deactivate() {
            if (!this.navigable || !this.isFocused) {
              return;
            }

            this.isFocused = false;
            this.notifyMove();
          }
        }, {
          key: "checkIndex",
          value: function checkIndex(index) {
            if (!this.isDisabled(index)) {
              this.checks.next(index);
            }
          }
        }, {
          key: "selectIndex",
          value: function selectIndex(index) {
            if (!this.isDisabled(index)) {
              this.selects.next(index);
            }
          }
        }, {
          key: "isActive",
          value: function isActive(index) {
            if (!index) {
              return false;
            }

            return this.isFocused && this.activeIndex === index;
          }
        }, {
          key: "isFocusable",
          value: function isFocusable(index) {
            return nodeIndex(this.focusableItem) === index;
          }
        }, {
          key: "isDisabled",
          value: function isDisabled(index) {
            return this.model.findNode(index).disabled;
          }
        }, {
          key: "registerItem",
          value: function registerItem(id, index, disabled) {
            this.model.registerItem(id, index, disabled);
          }
        }, {
          key: "unregisterItem",
          value: function unregisterItem(id, index) {
            if (this.isActive(index)) {
              this.activateParent(index);
            }

            this.model.unregisterItem(id, index);
          }
        }, {
          key: "move",
          value: function move(e) {
            if (!this.navigable) {
              return;
            }

            var moveAction = this.actions[e.keyCode];

            if (!moveAction) {
              return;
            }

            moveAction();
            e.preventDefault();
          }
        }, {
          key: "expand",
          value: function expand(_ref2) {
            var _expand = _ref2.expand,
                intercept = _ref2.intercept;
            var index = nodeIndex(this.activeItem);

            if (!index || intercept(index)) {
              return;
            }

            this.notifyExpand(_expand);
          }
        }, {
          key: "moveToParent",
          value: function moveToParent() {
            if (this.isActiveExpanded) {
              return false;
            }

            this.activate(this.model.findParent(nodeIndex(this.activeItem)));
            return true;
          }
        }, {
          key: "moveToChild",
          value: function moveToChild() {
            if (!this.isActiveExpanded) {
              return false;
            }

            this.activate(this.model.findChild(nodeIndex(this.activeItem)));
            return true;
          }
        }, {
          key: "notifyExpand",
          value: function notifyExpand(expand) {
            this.expands.next(this.navigationState(expand));
          }
        }, {
          key: "notifyMove",
          value: function notifyMove() {
            this.moves.next(this.navigationState());
          }
        }, {
          key: "navigationState",
          value: function navigationState() {
            var expand = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            return {
              expand: expand,
              index: nodeIndex(this.activeItem),
              isFocused: this.isFocused
            };
          }
        }, {
          key: "model",
          get: function get() {
            return this._model;
          },
          set: function set(model) {
            this._model = model;
          }
        }, {
          key: "activeIndex",
          get: function get() {
            return nodeIndex(this.activeItem) || null;
          }
        }, {
          key: "focusableItem",
          get: function get() {
            return this.activeItem || this.model.firstNode();
          }
        }, {
          key: "isActiveExpanded",
          get: function get() {
            return this.activeItem && this.activeItem.children.length > 0;
          }
        }]);

        return NavigationService;
      }();

      NavigationService.ɵfac = function NavigationService_Factory(t) {
        return new (t || NavigationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_progress_kendo_angular_l10n__WEBPACK_IMPORTED_MODULE_1__["LocalizationService"]));
      };

      NavigationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: NavigationService,
        factory: NavigationService.ɵfac
      });
      /** @nocollapse */

      NavigationService.ctorParameters = function () {
        return [{
          type: _progress_kendo_angular_l10n__WEBPACK_IMPORTED_MODULE_1__["LocalizationService"]
        }];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _progress_kendo_angular_l10n__WEBPACK_IMPORTED_MODULE_1__["LocalizationService"]
          }];
        }, null);
      })();
      /**
       * @hidden
       */


      var SelectionService = /*#__PURE__*/function () {
        function SelectionService() {
          _classCallCheck(this, SelectionService);

          this.changes = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        }

        _createClass(SelectionService, [{
          key: "isFirstSelected",
          value: function isFirstSelected(index) {
            return this.firstIndex === index;
          }
        }, {
          key: "setFirstSelected",
          value: function setFirstSelected(index, selected) {
            if (this.firstIndex === index && selected === false) {
              this.firstIndex = null;
            } else if (!this.firstIndex && selected) {
              this.firstIndex = index;
            }
          }
        }, {
          key: "select",
          value: function select(index, dataItem) {
            this.changes.next({
              dataItem: dataItem,
              index: index
            });
          }
        }]);

        return SelectionService;
      }();

      SelectionService.ɵfac = function SelectionService_Factory(t) {
        return new (t || SelectionService)();
      };

      SelectionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: SelectionService,
        factory: SelectionService.ɵfac
      });
      /** @nocollapse */

      SelectionService.ctorParameters = function () {
        return [];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectionService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [];
        }, null);
      })();

      var INDEX_REGEX = /\d+$/;
      /**
       * @hidden
       */

      var TreeViewLookupService = /*#__PURE__*/function () {
        function TreeViewLookupService() {
          _classCallCheck(this, TreeViewLookupService);

          this.map = new Map();
        }

        _createClass(TreeViewLookupService, [{
          key: "registerItem",
          value: function registerItem(item, parent) {
            var currentLookup = {
              children: [],
              item: item,
              parent: this.item(nodeIndex(parent))
            };
            this.map.set(item.index, currentLookup);
          }
        }, {
          key: "registerChildren",
          value: function registerChildren(index, children) {
            var item = this.item(index);

            if (!item) {
              return;
            }

            item.children = children;
          }
        }, {
          key: "unregisterItem",
          value: function unregisterItem(index, dataItem) {
            var current = this.item(index);

            if (current && current.item.dataItem === dataItem) {
              this.map["delete"](index);

              if (current.parent && current.parent.children) {
                current.parent.children = current.parent.children.filter(function (item) {
                  return item.dataItem !== dataItem;
                });
              }
            }
          }
        }, {
          key: "replaceItem",
          value: function replaceItem(index, item, parent) {
            if (!item) {
              return;
            }

            this.unregisterItem(index, item.dataItem);
            this.registerItem(item, parent);
            this.addToParent(item, parent);
          }
        }, {
          key: "itemLookup",
          value: function itemLookup(index) {
            var item = this.item(index);

            if (!item) {
              return null;
            }

            return {
              children: this.mapChildren(item.children),
              item: item.item,
              parent: item.parent
            };
          }
        }, {
          key: "hasItem",
          value: function hasItem(index) {
            return this.map.has(index);
          }
        }, {
          key: "item",
          value: function item(index) {
            return this.map.get(index) || null;
          }
        }, {
          key: "addToParent",
          value: function addToParent(item, parent) {
            if (parent) {
              var parentItem = this.item(parent.index);
              var index = parseInt(INDEX_REGEX.exec(item.index)[0], 10);
              parentItem.children = parentItem.children || [];
              parentItem.children.splice(index, 0, item);
            }
          }
        }, {
          key: "mapChildren",
          value: function mapChildren() {
            var _this5 = this;

            var children = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            return children.map(function (c) {
              var _this5$item = _this5.item(c.index),
                  item = _this5$item.item,
                  parent = _this5$item.parent,
                  children = _this5$item.children;

              return {
                children: _this5.mapChildren(children),
                item: item,
                parent: parent
              };
            });
          }
        }]);

        return TreeViewLookupService;
      }();

      TreeViewLookupService.ɵfac = function TreeViewLookupService_Factory(t) {
        return new (t || TreeViewLookupService)();
      };

      TreeViewLookupService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: TreeViewLookupService,
        factory: TreeViewLookupService.ɵfac
      });
      /** @nocollapse */

      TreeViewLookupService.ctorParameters = function () {
        return [];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TreeViewLookupService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [];
        }, null);
      })();
      /**
       * @hidden
       */


      var hasChildren = function hasChildren() {
        return false;
      };
      /**
       * @hidden
       */


      var isChecked = function isChecked() {
        return 'none';
      };
      /**
       * @hidden
       */


      var isDisabled = function isDisabled() {
        return false;
      };
      /**
       * @hidden
       */


      var isExpanded = function isExpanded() {
        return true;
      };
      /**
       * @hidden
       */


      var isSelected = function isSelected() {
        return false;
      };
      /**
       * @hidden
       */


      var DataChangeNotificationService = /*#__PURE__*/function () {
        function DataChangeNotificationService() {
          _classCallCheck(this, DataChangeNotificationService);

          this.changes = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(DataChangeNotificationService, [{
          key: "notify",
          value: function notify() {
            this.changes.emit();
          }
        }]);

        return DataChangeNotificationService;
      }();

      DataChangeNotificationService.ɵfac = function DataChangeNotificationService_Factory(t) {
        return new (t || DataChangeNotificationService)();
      };

      DataChangeNotificationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: DataChangeNotificationService,
        factory: DataChangeNotificationService.ɵfac
      });
      /* tslint:disable:member-ordering */

      var providers = [ExpandStateService, IndexBuilderService, TreeViewLookupService, LoadingNotificationService, NodeChildrenService, NavigationService, SelectionService, DataChangeNotificationService, _progress_kendo_angular_l10n__WEBPACK_IMPORTED_MODULE_1__["LocalizationService"], {
        provide: _progress_kendo_angular_l10n__WEBPACK_IMPORTED_MODULE_1__["L10N_PREFIX"],
        useValue: 'kendo.treeview'
      }];
      /**
       * Represents the [Kendo UI TreeView component for Angular]({% slug overview_treeview %}).
       *
       * @example
       * {% meta height:350 %}
       * ```ts-preview
       * import { Component } from '@angular/core';
       *
       *  _@Component({
       *      selector: 'my-app',
       *      template: `
       *      <kendo-treeview
       *          [nodes]="data"
       *          textField="text"
       *          kendoTreeViewCheckable
       *          kendoTreeViewExpandable
       *          kendoTreeViewSelectable
       *
       *          kendoTreeViewHierarchyBinding
       *          childrenField="items">
       *      </kendo-treeview>
       *  `
       *  })
       *  export class AppComponent {
       *      public data: any[] = [
       *          {
       *              text: "Furniture", items: [
       *                  { text: "Tables & Chairs" },
       *                  { text: "Sofas" },
       *                  { text: "Occasional Furniture" }
       *              ]
       *          },
       *          {
       *              text: "Decor", items: [
       *                  { text: "Bed Linen" },
       *                  { text: "Curtains & Blinds" },
       *                  { text: "Carpets" }
       *              ]
       *          }
       *      ];
       *  }
       * ```
       * {% endmeta %}
       */

      var TreeViewComponent = /*#__PURE__*/function () {
        function TreeViewComponent(expandService, navigationService, nodeChildrenService, selectionService, treeViewLookupService, ngZone, renderer, element, dataChangeNotification, localization) {
          var _this6 = this;

          _classCallCheck(this, TreeViewComponent);

          this.expandService = expandService;
          this.navigationService = navigationService;
          this.nodeChildrenService = nodeChildrenService;
          this.selectionService = selectionService;
          this.treeViewLookupService = treeViewLookupService;
          this.ngZone = ngZone;
          this.renderer = renderer;
          this.element = element;
          this.dataChangeNotification = dataChangeNotification;
          this.localization = localization;
          this.classNames = true;
          /** @hidden */

          this.fetchNodes = function () {
            return _this6.data;
          };
          /**
           * Fires when the children of the expanded node are loaded.
           */


          this.childrenLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /**
           * Fires when the user blurs the component.
           */

          this.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); //tslint:disable-line:no-output-rename

          /**
           * Fires when the user focuses the component.
           */

          this.onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); //tslint:disable-line:no-output-rename

          /**
           * Fires when the user expands a TreeView node.
           */

          this.expand = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /**
           * Fires when the user collapses a TreeView node.
           */

          this.collapse = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /**
           * Fires when the user selects a TreeView node checkbox
           * ([see example]({% slug checkboxes_treeview %}#toc-modifying-the-checked-state)).
           */

          this.checkedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /**
           * Fires when the user selects a TreeView node
           * ([see example]({% slug selection_treeview %}#toc-modifying-the-selection)).
           */

          this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /**
           * Fires when the user clicks a TreeView node.
           */

          this.nodeClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /**
           * Fires when the user double clicks a TreeView node.
           */

          this.nodeDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /**
           * A function which determines if a specific node is disabled.
           */

          this.isDisabled = isDisabled;
          /**
           * Determines whether the TreeView keyboard navigable is enabled.
           */

          this.navigable = true;
          /**
           * A function which provides the child nodes for a given parent node
           * ([see example]({% slug databinding_treeview %})).
           */

          this.children = function () {
            return Object(rxjs_observable_of__WEBPACK_IMPORTED_MODULE_5__["of"])([]);
          };

          this.checkboxes = false;
          this.expandIcons = false;
          this.isActive = false;
          this.data = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
          this._animate = true;
          this.subscriptions = new rxjs_Subscription__WEBPACK_IMPORTED_MODULE_3__["Subscription"](function () {});
          this.domSubscriptions = [];
        }

        _createClass(TreeViewComponent, [{
          key: "ngOnChanges",
          value: function ngOnChanges(_) {
            this.navigationService.navigable = Boolean(this.navigable);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscriptions.unsubscribe();
            this.domSubscriptions.forEach(function (subscription) {
              return subscription();
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this7 = this;

            this.subscriptions.add(this.nodeChildrenService.changes.subscribe(function (x) {
              return _this7.childrenLoaded.emit(x);
            }));
            this.subscriptions.add(this.expandService.changes.subscribe(function (_ref3) {
              var index = _ref3.index,
                  dataItem = _ref3.dataItem,
                  expand = _ref3.expand;
              return expand ? _this7.expand.emit({
                index: index,
                dataItem: dataItem
              }) : _this7.collapse.emit({
                index: index,
                dataItem: dataItem
              });
            }));
            this.subscriptions.add(this.navigationService.checks.subscribe(function (x) {
              return _this7.checkedChange.emit(_this7.treeViewLookupService.itemLookup(x));
            }));
            this.subscriptions.add(this.selectionService.changes.subscribe(function (x) {
              if (hasObservers(_this7.selectionChange)) {
                _this7.ngZone.run(function () {
                  _this7.selectionChange.emit(x);
                });
              }
            }));

            if (this.element) {
              this.ngZone.runOutsideAngular(function () {
                _this7.attachDomHandlers();
              });
            }
          }
          /**
           * Blurs the focused TreeView item.
           */

        }, {
          key: "blur",
          value: function blur() {
            if (!isDocumentAvailable()) {
              return;
            }

            var target = focusableNode(this.element);

            if (document.activeElement === target) {
              target.blur();
            }
          }
          /**
           * Focuses the first focusable item in the TreeView component if no hierarchical index is provided.
           *
           * @example
           * ```ts
           * import { Component } from '@angular/core';
           *
           *  @Component({
           *      selector: 'my-app',
           *      template: `
           *      <button (click)="treeview.focus('1')">Focuses the second node</button>
           *      <kendo-treeview
           *          #treeview
           *          [nodes]="data"
           *          textField="text"
           *      >
           *      </kendo-treeview>
           *  `
           *  })
           *  export class AppComponent {
           *      public data: any[] = [
           *          { text: "Furniture" },
           *          { text: "Decor" }
           *      ];
           *  }
           * ```
           */

        }, {
          key: "focus",
          value: function focus(index) {
            this.navigationService.activateIndex(index);
            var target = focusableNode(this.element);

            if (target) {
              target.focus();
            }
          }
          /**
           * Based on the specified index, returns the TreeItemLookup node.
           *
           * @param index - The index of the node.
           * @returns {TreeItemLookup} - The item that was searched (looked up).
           */

        }, {
          key: "itemLookup",
          value: function itemLookup(index) {
            return this.treeViewLookupService.itemLookup(index);
          }
          /**
           * @hidden
           */

        }, {
          key: "isDisabledNode",
          value: function isDisabledNode(node) {
            return this.navigationService.isDisabled(node.item.index);
          }
        }, {
          key: "attachDomHandlers",
          value: function attachDomHandlers() {
            var element = this.element.nativeElement;
            this.clickHandler = this.clickHandler.bind(this);
            this.domSubscriptions.push(this.renderer.listen(element, 'contextmenu', this.clickHandler), this.renderer.listen(element, 'click', this.clickHandler), this.renderer.listen(element, 'dblclick', this.clickHandler), this.renderer.listen(element, 'focusin', this.focusHandler.bind(this)), this.renderer.listen(element, 'focusout', this.blurHandler.bind(this)), this.renderer.listen(element, 'keydown', this.keydownHandler.bind(this)));
          }
        }, {
          key: "focusHandler",
          value: function focusHandler(e) {
            var _this8 = this;

            var focusItem;

            if (match(e.target, '.k-treeview-item')) {
              focusItem = e.target;
            } else if (!isFocusable(e.target)) {
              focusItem = closestNode(e.target);
            }

            if (focusItem) {
              this.navigationService.activateIndex(nodeId(e.target));

              if (!this.isActive && hasObservers(this.onFocus)) {
                this.ngZone.run(function () {
                  _this8.onFocus.emit();
                });
              }

              this.isActive = true;
            }
          }
        }, {
          key: "blurHandler",
          value: function blurHandler(e) {
            var _this9 = this;

            if (this.isActive && match(e.target, '.k-treeview-item') && (!e.relatedTarget || !match(e.relatedTarget, '.k-treeview-item') || !hasParent(e.relatedTarget, this.element.nativeElement))) {
              this.navigationService.deactivate();
              this.isActive = false;

              if (hasObservers(this.onBlur)) {
                this.ngZone.run(function () {
                  _this9.onBlur.emit();
                });
              }
            }
          }
        }, {
          key: "clickHandler",
          value: function clickHandler(e) {
            var _this10 = this;

            var target = e.target;

            if (e.type === 'contextmenu' && !hasObservers(this.nodeClick) || e.type === 'click' && !hasObservers(this.nodeClick) && !hasObservers(this.selectionChange) || e.type === 'dblclick' && !hasObservers(this.nodeDblClick) || isFocusable(target) || !isContent(target) || !hasParent(target, this.element.nativeElement)) {
              return;
            }

            var index = nodeId(closestNode(target)); // the disabled check is probably not needed due to the k-state-disabled styles

            if (!index || this.navigationService.isDisabled(index)) {
              return;
            }

            this.ngZone.run(function () {
              var lookup = _this10.treeViewLookupService.itemLookup(index);

              if (e.type === 'click') {
                _this10.navigationService.selectIndex(index);
              }

              var emitter = e.type === 'dblclick' ? _this10.nodeDblClick : _this10.nodeClick;
              emitter.emit({
                item: lookup.item,
                originalEvent: e,
                type: e.type
              });
            });
          }
        }, {
          key: "keydownHandler",
          value: function keydownHandler(e) {
            var _this11 = this;

            if (this.isActive && this.navigable) {
              this.ngZone.run(function () {
                _this11.navigationService.move(e);
              });
            }
          }
        }, {
          key: "role",
          get: function get() {
            return 'tree';
          }
          /** @hidden */

        }, {
          key: "direction",
          get: function get() {
            return this.localization.rtl ? 'rtl' : 'ltr';
          }
          /**
           * Determines whether the content animation is enabled.
           */

        }, {
          key: "animate",
          set: function set(value) {
            this._animate = value;
          },
          get: function get() {
            return !this._animate;
          }
          /**
           * The nodes which will be displayed by the TreeView
           * ([see example]({% slug databinding_treeview %})).
           */

        }, {
          key: "nodes",
          set: function set(value) {
            this.dataChangeNotification.notify();
            this.data.next(value);
          }
          /**
           * A function which determines if a specific node has child nodes
           * ([see example]({% slug databinding_treeview %})).
           */

        }, {
          key: "hasChildren",
          get: function get() {
            return this._hasChildren || hasChildren;
          },
          set: function set(callback) {
            this._hasChildren = callback;
            this.expandIcons = Boolean(this._isExpanded && this._hasChildren);
          }
          /**
           * A function which determines if a specific node is selected
           * ([see example]({% slug checkboxes_treeview %}#toc-modifying-the-checked-state)).
           */

        }, {
          key: "isChecked",
          get: function get() {
            return this._isChecked || isChecked;
          },
          set: function set(callback) {
            this._isChecked = callback;
            this.checkboxes = Boolean(this._isChecked);
          }
          /**
           * A function which determines if a specific node is expanded.
           */

        }, {
          key: "isExpanded",
          get: function get() {
            return this._isExpanded || isExpanded;
          },
          set: function set(callback) {
            this._isExpanded = callback;
            this.expandIcons = Boolean(this._isExpanded && this._hasChildren);
          }
          /**
           * A function which determines if a specific node is selected
           * ([see example]({% slug selection_treeview %}#toc-modifying-the-selection)).
           */

        }, {
          key: "isSelected",
          get: function get() {
            return this._isSelected || isSelected;
          },
          set: function set(callback) {
            this._isSelected = callback;
          }
        }]);

        return TreeViewComponent;
      }();

      TreeViewComponent.ɵfac = function TreeViewComponent_Factory(t) {
        return new (t || TreeViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ExpandStateService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NavigationService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NodeChildrenService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](SelectionService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TreeViewLookupService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](DataChangeNotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_progress_kendo_angular_l10n__WEBPACK_IMPORTED_MODULE_1__["LocalizationService"]));
      };

      TreeViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TreeViewComponent,
        selectors: [["kendo-treeview"]],
        contentQueries: function TreeViewComponent_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NodeTemplateDirective, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.nodeTemplate = _t.first);
          }
        },
        hostVars: 7,
        hostBindings: function TreeViewComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("role", ctx.role)("dir", ctx.direction);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵupdateSyntheticHostBinding"]("@.disabled", ctx.animate);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("k-widget", ctx.classNames)("k-treeview", ctx.classNames);
          }
        },
        inputs: {
          isDisabled: "isDisabled",
          navigable: "navigable",
          children: "children",
          animate: "animate",
          nodes: "nodes",
          hasChildren: "hasChildren",
          isChecked: "isChecked",
          isExpanded: "isExpanded",
          isSelected: "isSelected",
          textField: "textField"
        },
        outputs: {
          childrenLoaded: "childrenLoaded",
          onBlur: "blur",
          onFocus: "focus",
          expand: "expand",
          collapse: "collapse",
          checkedChange: "checkedChange",
          selectionChange: "selectionChange",
          nodeClick: "nodeClick",
          nodeDblClick: "nodeDblClick"
        },
        exportAs: ["kendoTreeView"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"](providers), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
        decls: 1,
        vars: 11,
        consts: [["kendoTreeViewGroup", "", "role", "group", 1, "k-treeview-lines", 3, "checkboxes", "expandIcons", "children", "hasChildren", "isChecked", "isDisabled", "isExpanded", "isSelected", "nodeTemplateRef", "textField", "nodes"]],
        template: function TreeViewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ul", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checkboxes", ctx.checkboxes)("expandIcons", ctx.expandIcons)("children", ctx.children)("hasChildren", ctx.hasChildren)("isChecked", ctx.isChecked)("isDisabled", ctx.isDisabled)("isExpanded", ctx.isExpanded)("isSelected", ctx.isSelected)("nodeTemplateRef", ctx.nodeTemplate == null ? null : ctx.nodeTemplate.templateRef)("textField", ctx.textField)("nodes", ctx.fetchNodes);
          }
        },
        directives: function directives() {
          return [TreeViewGroupComponent];
        },
        encapsulation: 2
      });
      /** @nocollapse */

      TreeViewComponent.ctorParameters = function () {
        return [{
          type: ExpandStateService
        }, {
          type: NavigationService
        }, {
          type: NodeChildrenService
        }, {
          type: SelectionService
        }, {
          type: TreeViewLookupService
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: DataChangeNotificationService
        }, {
          type: _progress_kendo_angular_l10n__WEBPACK_IMPORTED_MODULE_1__["LocalizationService"]
        }];
      };

      TreeViewComponent.propDecorators = {
        'classNames': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ["class.k-widget"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ["class.k-treeview"]
        }],
        'role': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ["attr.role"]
        }],
        'direction': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ["attr.dir"]
        }],
        'animate': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['@.disabled']
        }],
        'childrenLoaded': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        'onBlur': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['blur']
        }],
        'onFocus': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['focus']
        }],
        'expand': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        'collapse': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        'checkedChange': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        'selectionChange': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        'nodeClick': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        'nodeDblClick': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        'nodeTemplate': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
          args: [NodeTemplateDirective]
        }],
        'nodes': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'textField': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'hasChildren': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'isChecked': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'isDisabled': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'isExpanded': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'isSelected': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'navigable': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'children': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TreeViewComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].Default,
            exportAs: 'kendoTreeView',
            providers: providers,
            selector: 'kendo-treeview',
            template: "\n    <ul class=\"k-treeview-lines\"\n      kendoTreeViewGroup\n      role=\"group\"\n      [checkboxes]=\"checkboxes\"\n      [expandIcons]=\"expandIcons\"\n      [children]=\"children\"\n      [hasChildren]=\"hasChildren\"\n      [isChecked]=\"isChecked\"\n      [isDisabled]=\"isDisabled\"\n      [isExpanded]=\"isExpanded\"\n      [isSelected]=\"isSelected\"\n      [nodeTemplateRef]=\"nodeTemplate?.templateRef\"\n      [textField]=\"textField\"\n      [nodes]=\"fetchNodes\"\n      >\n    </ul>\n  "
          }]
        }], function () {
          return [{
            type: ExpandStateService
          }, {
            type: NavigationService
          }, {
            type: NodeChildrenService
          }, {
            type: SelectionService
          }, {
            type: TreeViewLookupService
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: DataChangeNotificationService
          }, {
            type: _progress_kendo_angular_l10n__WEBPACK_IMPORTED_MODULE_1__["LocalizationService"]
          }];
        }, {
          classNames: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ["class.k-widget"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ["class.k-treeview"]
          }],
          childrenLoaded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          onBlur: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['blur']
          }],
          onFocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['focus']
          }],
          expand: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          collapse: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          checkedChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          selectionChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          nodeClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          nodeDblClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          isDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          navigable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          children: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          role: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ["attr.role"]
          }],
          direction: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ["attr.dir"]
          }],
          animate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['@.disabled']
          }],
          nodes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          hasChildren: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          isChecked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          isExpanded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          isSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          nodeTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [NodeTemplateDirective]
          }],
          textField: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      var FIELD_REGEX = /\[(?:(\d+)|['"](.*?)['"])\]|((?:(?!\[.*?\]|\.).)+)/g;
      var getterCache = {}; // tslint:disable-next-line:no-string-literal

      getterCache['undefined'] = function (obj) {
        return obj;
      };
      /**
       * @hidden
       */


      var getter = function getter(field, safe) {
        var key = field + safe;

        if (getterCache[key]) {
          return getterCache[key];
        }

        var fields = [];
        field.replace(FIELD_REGEX, function (_, index, indexAccessor, field) {
          fields.push(isPresent(index) ? index : indexAccessor || field);
          return undefined;
        });

        getterCache[key] = function (obj) {
          var result = obj;

          for (var idx = 0; idx < fields.length; idx++) {
            result = result[fields[idx]];

            if (!isPresent(result) && safe) {
              return result;
            }
          }

          return result;
        };

        return getterCache[key];
      };
      /**
       * @hidden
       */


      var TreeViewGroupComponent = /*#__PURE__*/function () {
        function TreeViewGroupComponent(expandService, loadingService, indexBuilder, treeViewLookupService, navigationService, nodeChildrenService, dataChangeNotification) {
          _classCallCheck(this, TreeViewGroupComponent);

          this.expandService = expandService;
          this.loadingService = loadingService;
          this.indexBuilder = indexBuilder;
          this.treeViewLookupService = treeViewLookupService;
          this.navigationService = navigationService;
          this.nodeChildrenService = nodeChildrenService;
          this.dataChangeNotification = dataChangeNotification;
          this.kGroupClass = true;
          this.textField = "";
          this._data = [];

          this.isChecked = function () {
            return 'none';
          };

          this.isDisabled = function () {
            return false;
          };

          this.isExpanded = function () {
            return false;
          };

          this.isSelected = function () {
            return false;
          };

          this.children = function () {
            return Object(rxjs_observable_of__WEBPACK_IMPORTED_MODULE_5__["of"])([]);
          };

          this.hasChildren = function () {
            return false;
          };
        }

        _createClass(TreeViewGroupComponent, [{
          key: "expandNode",
          value: function expandNode(index, dataItem, expand) {
            if (expand) {
              this.expandService.expand(index, dataItem);
            } else {
              this.expandService.collapse(index, dataItem);
            }
          }
        }, {
          key: "checkNode",
          value: function checkNode(index) {
            this.navigationService.checkIndex(index);
            this.navigationService.activateIndex(index);
          }
        }, {
          key: "nodeIndex",
          value: function nodeIndex(index) {
            return this.indexBuilder.nodeIndex(index.toString(), this.parentIndex);
          }
        }, {
          key: "nodeText",
          value: function nodeText(dataItem) {
            var textField = isArray(this.textField) ? this.textField[0] : this.textField;
            return getter(textField, true)(dataItem);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.nodesSubscription) {
              this.nodesSubscription.unsubscribe();
            }

            if (this.dataChangeSubscription) {
              this.dataChangeSubscription.unsubscribe();
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.subscribeToNodesChange();
            this.dataChangeSubscription = this.dataChangeNotification.changes.subscribe(this.subscribeToNodesChange.bind(this));
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes.parentIndex) {
              this.setNodeChildren(this.mapToTreeItem(this.data));
            }
          }
        }, {
          key: "fetchChildren",
          value: function fetchChildren(node, index) {
            var _this12 = this;

            return this.children(node).pipe(Object(rxjs_operators_catchError__WEBPACK_IMPORTED_MODULE_8__["catchError"])(function () {
              _this12.loadingService.notifyLoaded(index);

              return Object(rxjs_observable_empty__WEBPACK_IMPORTED_MODULE_7__["empty"])();
            }), Object(rxjs_operators_tap__WEBPACK_IMPORTED_MODULE_9__["tap"])(function () {
              return _this12.loadingService.notifyLoaded(index);
            }));
          }
        }, {
          key: "setNodeChildren",
          value: function setNodeChildren(children) {
            this.treeViewLookupService.registerChildren(this.parentIndex, children);
          }
        }, {
          key: "mapToTreeItem",
          value: function mapToTreeItem(data) {
            var _this13 = this;

            if (!this.parentIndex) {
              return [];
            }

            return data.map(function (dataItem, idx) {
              return {
                dataItem: dataItem,
                index: _this13.nodeIndex(idx)
              };
            });
          }
        }, {
          key: "emitChildrenLoaded",
          value: function emitChildrenLoaded(children) {
            if (!this.parentIndex) {
              return;
            }

            this.nodeChildrenService.childrenLoaded({
              dataItem: this.parentDataItem,
              index: this.parentIndex
            }, children);
          }
        }, {
          key: "subscribeToNodesChange",
          value: function subscribeToNodesChange() {
            var _this14 = this;

            if (this.nodesSubscription) {
              this.nodesSubscription.unsubscribe();
            }

            this.nodesSubscription = this.nodes(this.parentDataItem, this.parentIndex).subscribe(function (x) {
              _this14.data = x;
            });
          }
        }, {
          key: "role",
          get: function get() {
            return 'group';
          }
        }, {
          key: "data",
          get: function get() {
            return this._data;
          },
          set: function set(data) {
            this._data = data;
            var mappedChildren = this.mapToTreeItem(data);
            this.setNodeChildren(mappedChildren);
            this.emitChildrenLoaded(mappedChildren);
          }
        }, {
          key: "hasTemplate",
          get: function get() {
            return isPresent(this.nodeTemplateRef);
          }
        }, {
          key: "nextFields",
          get: function get() {
            if (isArray(this.textField)) {
              return this.textField.length > 1 ? this.textField.slice(1) : this.textField;
            }

            return [this.textField];
          }
        }]);

        return TreeViewGroupComponent;
      }();

      TreeViewGroupComponent.ɵfac = function TreeViewGroupComponent_Factory(t) {
        return new (t || TreeViewGroupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ExpandStateService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](LoadingNotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](IndexBuilderService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TreeViewLookupService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NavigationService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NodeChildrenService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](DataChangeNotificationService));
      };

      TreeViewGroupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TreeViewGroupComponent,
        selectors: [["", "kendoTreeViewGroup", ""]],
        hostVars: 3,
        hostBindings: function TreeViewGroupComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("role", ctx.role);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("k-group", ctx.kGroupClass);
          }
        },
        inputs: {
          textField: "textField",
          isChecked: "isChecked",
          isDisabled: "isDisabled",
          isExpanded: "isExpanded",
          isSelected: "isSelected",
          children: "children",
          hasChildren: "hasChildren",
          checkboxes: "checkboxes",
          expandIcons: "expandIcons",
          disabled: "disabled",
          nodes: "nodes",
          parentDataItem: "parentDataItem",
          parentIndex: "parentIndex",
          nodeTemplateRef: "nodeTemplateRef"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
        attrs: _c0,
        decls: 1,
        vars: 1,
        consts: [["class", "k-item k-treeview-item", "kendoTreeViewItem", "", 3, "dataItem", "index", "parentDataItem", "parentIndex", "isChecked", "isDisabled", "isExpanded", "isSelected", 4, "ngFor", "ngForOf"], ["kendoTreeViewItem", "", 1, "k-item", "k-treeview-item", 3, "dataItem", "index", "parentDataItem", "parentIndex", "isChecked", "isDisabled", "isExpanded", "isSelected"], [1, "k-mid"], ["class", "k-icon", 3, "k-i-collapse", "k-i-expand", "kendoTreeViewLoading", "click", 4, "ngIf"], ["tabindex", "-1", 3, "node", "index", "isChecked", "checkStateChange", 4, "ngIf"], ["kendoTreeViewItemContent", "", 1, "k-in", 3, "dataItem", "index", "initialSelection", "isSelected"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], ["kendoTreeViewGroup", "", "role", "group", 3, "nodes", "checkboxes", "expandIcons", "children", "hasChildren", "isChecked", "isDisabled", "disabled", "isExpanded", "isSelected", "nodeTemplateRef", "parentIndex", "parentDataItem", "textField", 4, "ngIf"], [1, "k-icon", 3, "kendoTreeViewLoading", "click"], ["tabindex", "-1", 3, "node", "index", "isChecked", "checkStateChange"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["kendoTreeViewGroup", "", "role", "group", 3, "nodes", "checkboxes", "expandIcons", "children", "hasChildren", "isChecked", "isDisabled", "disabled", "isExpanded", "isSelected", "nodeTemplateRef", "parentIndex", "parentDataItem", "textField"]],
        template: function TreeViewGroupComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TreeViewGroupComponent_li_0_Template, 9, 19, "li", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data);
          }
        },
        directives: function directives() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], TreeViewItemDirective, _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], TreeViewItemContentDirective, _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgSwitchDefault"], LoadingIndicatorDirective, CheckBoxComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgTemplateOutlet"], TreeViewGroupComponent];
        },
        encapsulation: 2,
        data: {
          animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('toggle', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('void => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
            height: 0
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('0.1s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
            height: "*"
          }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('* => void', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
            height: "*"
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('0.1s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
            height: 0
          }))])])]
        }
      });
      /** @nocollapse */

      TreeViewGroupComponent.ctorParameters = function () {
        return [{
          type: ExpandStateService
        }, {
          type: LoadingNotificationService
        }, {
          type: IndexBuilderService
        }, {
          type: TreeViewLookupService
        }, {
          type: NavigationService
        }, {
          type: NodeChildrenService
        }, {
          type: DataChangeNotificationService
        }];
      };

      TreeViewGroupComponent.propDecorators = {
        'kGroupClass': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ["class.k-group"]
        }],
        'role': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ["attr.role"]
        }],
        'checkboxes': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'expandIcons': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'disabled': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'nodes': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'textField': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'parentDataItem': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'parentIndex': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'nodeTemplateRef': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'isChecked': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'isDisabled': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'isExpanded': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'isSelected': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'children': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'hasChildren': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TreeViewGroupComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('toggle', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('void => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
              height: 0
            }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('0.1s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
              height: "*"
            }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('* => void', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
              height: "*"
            }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])('0.1s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
              height: 0
            }))])])],
            selector: '[kendoTreeViewGroup]',
            template: "\n        <li\n            *ngFor=\"let node of data; let index = index\" class=\"k-item k-treeview-item\"\n            kendoTreeViewItem\n            [dataItem]=\"node\"\n            [index]=\"nodeIndex(index)\"\n            [parentDataItem]=\"parentDataItem\"\n            [parentIndex]=\"parentIndex\"\n            [isChecked]=\"isChecked(node, nodeIndex(index))\"\n            [isDisabled]=\"disabled || isDisabled(node, nodeIndex(index))\"\n            [isExpanded]=\"isExpanded(node, nodeIndex(index))\"\n            [isSelected]=\"isSelected(node, nodeIndex(index))\"\n            [attr.data-treeindex]=\"nodeIndex(index)\"\n        >\n            <div class=\"k-mid\">\n                <span\n                    class=\"k-icon\"\n                    [class.k-i-collapse]=\"isExpanded(node, nodeIndex(index))\"\n                    [class.k-i-expand]=\"!isExpanded(node, nodeIndex(index))\"\n                    [kendoTreeViewLoading]=\"nodeIndex(index)\"\n                    (click)=\"expandNode(nodeIndex(index), node, !isExpanded(node, nodeIndex(index)))\"\n                    *ngIf=\"expandIcons && hasChildren(node)\"\n                    >\n                </span>\n                <kendo-checkbox\n                    *ngIf=\"checkboxes\"\n                    [node]=\"node\"\n                    [index]=\"nodeIndex(index)\"\n                    [isChecked]=\"isChecked\"\n                    (checkStateChange)=\"checkNode(nodeIndex(index))\"\n                    tabindex=\"-1\"\n                ></kendo-checkbox>\n                <span kendoTreeViewItemContent\n                    [attr.data-treeindex]=\"nodeIndex(index)\"\n                    [dataItem]=\"node\"\n                    [index]=\"nodeIndex(index)\"\n                    [initialSelection]=\"isSelected(node, nodeIndex(index))\"\n                    [isSelected]=\"isSelected\"\n                    class=\"k-in\"\n                >\n                    <ng-container [ngSwitch]=\"hasTemplate\">\n                        <ng-container *ngSwitchCase=\"true\">\n                            <ng-template\n                                [ngTemplateOutlet]=\"nodeTemplateRef\" [ngTemplateOutletContext]=\"{$implicit: node, index: nodeIndex(index)}\"\n                                >\n                            </ng-template>\n                        </ng-container>\n                        <ng-container *ngSwitchDefault>\n                            {{nodeText(node)}}\n                        </ng-container>\n                    </ng-container>\n                </span>\n            </div>\n            <ul\n                *ngIf=\"isExpanded(node, nodeIndex(index)) && hasChildren(node)\"\n                kendoTreeViewGroup\n                role=\"group\"\n                [nodes]=\"fetchChildren\"\n                [checkboxes]=\"checkboxes\"\n                [expandIcons]=\"expandIcons\"\n                [children]=\"children\"\n                [hasChildren]=\"hasChildren\"\n                [isChecked]=\"isChecked\"\n                [isDisabled]=\"isDisabled\"\n                [disabled]=\"disabled || isDisabled(node, nodeIndex(index))\"\n                [isExpanded]=\"isExpanded\"\n                [isSelected]=\"isSelected\"\n                [nodeTemplateRef]=\"nodeTemplateRef\"\n                [parentIndex]=\"nodeIndex(index)\"\n                [parentDataItem]=\"node\"\n                [textField]=\"nextFields\"\n                [@toggle]=\"true\"\n                >\n            </ul>\n        </li>\n    "
          }]
        }], function () {
          return [{
            type: ExpandStateService
          }, {
            type: LoadingNotificationService
          }, {
            type: IndexBuilderService
          }, {
            type: TreeViewLookupService
          }, {
            type: NavigationService
          }, {
            type: NodeChildrenService
          }, {
            type: DataChangeNotificationService
          }];
        }, {
          kGroupClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ["class.k-group"]
          }],
          textField: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          isChecked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          isDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          isExpanded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          isSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          children: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          hasChildren: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          role: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ["attr.role"]
          }],
          checkboxes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          expandIcons: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          nodes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          parentDataItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          parentIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          nodeTemplateRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      var indexChecked = function indexChecked(keys, index) {
        return keys.filter(function (k) {
          return k === index;
        }).length > 0;
      };

      var matchKey = function matchKey(index) {
        return function (k) {
          if (index === k) {
            return true;
          }

          if (!k.split) {
            return false;
          }

          return k.split('_').reduce(function (_ref4, part) {
            var key = _ref4.key,
                result = _ref4.result;
            key += part;

            if (index === key || result) {
              return {
                result: true
              };
            }

            key += "_";
            return {
              key: key,
              result: false
            };
          }, {
            key: "",
            result: false
          }).result;
        };
      };
      /**
       * A directive which manages the in-memory checked state of the TreeView node
       * ([see example]({% slug checkboxes_treeview %})).
       */


      var CheckDirective = /*#__PURE__*/function () {
        function CheckDirective(treeView, zone) {
          var _this15 = this;

          _classCallCheck(this, CheckDirective);

          this.treeView = treeView;
          this.zone = zone;
          /**
           * Fires when the `checkedKeys` collection was updated.
           */

          this.checkedKeysChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.subscriptions = new rxjs_Subscription__WEBPACK_IMPORTED_MODULE_3__["Subscription"](function () {});
          this.checkActions = {
            'multiple': function multiple(e) {
              return _this15.checkMultiple(e);
            },
            'single': function single(e) {
              return _this15.checkSingle(e);
            }
          };
          this._checkedKeys = [];
          this.subscriptions.add(this.treeView.checkedChange.subscribe(function (e) {
            return _this15.check(e);
          }));
          this.subscriptions.add(this.treeView.childrenLoaded.pipe(Object(rxjs_operators_filter__WEBPACK_IMPORTED_MODULE_11__["filter"])(function () {
            return _this15.options.checkChildren;
          }), Object(rxjs_operators_switchMap__WEBPACK_IMPORTED_MODULE_13__["switchMap"])(function (e) {
            return _this15.zone.onStable.pipe(Object(rxjs_operators_take__WEBPACK_IMPORTED_MODULE_12__["take"])(1), Object(rxjs_operators_map__WEBPACK_IMPORTED_MODULE_14__["map"])(function () {
              return e;
            }));
          })).subscribe(function (e) {
            return _this15.addChildrenKeys(e);
          }));
          this.treeView.isChecked = this.isItemChecked.bind(this);
        }
        /**
         * @hidden
         */


        _createClass(CheckDirective, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes.checkable) {
              this.treeView.checkboxes = this.options.enabled;
              this.toggleCheckOnClick();
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscriptions.unsubscribe();
            this.unsubscribeClick();
          }
        }, {
          key: "isItemChecked",
          value: function isItemChecked(dataItem, index) {
            if (!this.checkKey) {
              return this.isIndexChecked(index);
            }

            var keyIndex = this.checkedKeys.indexOf(this.itemKey({
              dataItem: dataItem,
              index: index
            }));
            return keyIndex > -1 ? 'checked' : 'none';
          }
        }, {
          key: "isIndexChecked",
          value: function isIndexChecked(index) {
            var checkedKeys = this.checkedKeys.filter(matchKey(index));

            if (indexChecked(checkedKeys, index)) {
              return 'checked';
            }

            var _this$options = this.options,
                mode = _this$options.mode,
                checkParents = _this$options.checkParents;

            if (mode === 'multiple' && checkParents && checkedKeys.length) {
              return 'indeterminate';
            }

            return 'none';
          }
        }, {
          key: "itemKey",
          value: function itemKey(e) {
            if (!this.checkKey) {
              return e.index;
            }

            if (typeof this.checkKey === "string") {
              return e.dataItem[this.checkKey];
            }

            if (typeof this.checkKey === "function") {
              return this.checkKey(e);
            }
          }
        }, {
          key: "check",
          value: function check(e) {
            var _this$options2 = this.options,
                enabled = _this$options2.enabled,
                mode = _this$options2.mode;
            var performSelection = this.checkActions[mode] || noop;

            if (!enabled) {
              return;
            }

            performSelection(e);
          }
        }, {
          key: "checkSingle",
          value: function checkSingle(node) {
            var key = this.itemKey(node.item);
            this.checkedKeys = this.checkedKeys[0] !== key ? [key] : [];
            this.notify();
          }
        }, {
          key: "checkMultiple",
          value: function checkMultiple(node) {
            this.checkNode(node);

            if (this.options.checkParents) {
              this.checkParents(node.parent);
            }

            this.notify();
          }
        }, {
          key: "toggleCheckOnClick",
          value: function toggleCheckOnClick() {
            var _this16 = this;

            this.unsubscribeClick();

            if (this.options.checkOnClick) {
              this.clickSubscription = this.treeView.nodeClick.subscribe(function (args) {
                if (args.type === 'click') {
                  var lookup = _this16.treeView.itemLookup(args.item.index);

                  _this16.check(lookup);
                }
              });
            }
          }
        }, {
          key: "unsubscribeClick",
          value: function unsubscribeClick() {
            if (this.clickSubscription) {
              this.clickSubscription.unsubscribe();
              this.clickSubscription = null;
            }
          }
        }, {
          key: "checkNode",
          value: function checkNode(node, check) {
            var _this17 = this;

            var key = this.itemKey(node.item);
            var idx = this.checkedKeys.indexOf(key);
            var isChecked = idx > -1;
            var shouldCheck = check === undefined ? !isChecked : check;

            if (!isPresent(key) || isChecked && check || this.treeView.isDisabledNode(node)) {
              return;
            }

            if (isChecked) {
              this.checkedKeys.splice(idx, 1);
            } else {
              this.checkedKeys.push(key);
            }

            if (this.options.checkChildren) {
              node.children.map(function (n) {
                return _this17.checkNode(n, shouldCheck);
              });
            }
          }
        }, {
          key: "checkParents",
          value: function checkParents(parent) {
            var currentParent = parent;

            while (currentParent) {
              var parentKey = this.itemKey(currentParent.item);
              var parentIndex = this.checkedKeys.indexOf(parentKey);

              if (this.allChildrenSelected(currentParent.children)) {
                if (parentIndex === -1) {
                  this.checkedKeys.push(parentKey);
                }
              } else if (parentIndex > -1) {
                this.checkedKeys.splice(parentIndex, 1);
              }

              currentParent = currentParent.parent;
            }
          }
        }, {
          key: "allChildrenSelected",
          value: function allChildrenSelected(children) {
            var _this18 = this;

            var isCheckedReducer = function isCheckedReducer(acc, item) {
              return acc && _this18.isItemChecked(item.dataItem, item.index) === 'checked';
            };

            return children.reduce(isCheckedReducer, true);
          }
        }, {
          key: "notify",
          value: function notify() {
            this.checkedKeysChange.emit(this.checkedKeys.slice());
          }
        }, {
          key: "addChildrenKeys",
          value: function addChildrenKeys(args) {
            var _this19 = this;

            if (this.checkedKeys.indexOf(this.itemKey(args.item)) === -1) {
              return;
            }

            var keys = args.children.reduce(function (acc, item) {
              var itemKey = _this19.itemKey(item);

              var existingKey = _this19.checkedKeys.find(function (key) {
                return itemKey === key;
              });

              if (!existingKey) {
                acc.push(itemKey);
              }

              return acc;
            }, []);

            if (keys.length) {
              this.checkedKeys = this.checkedKeys.concat(keys);
              this.zone.run(function () {
                _this19.notify();
              });
            }
          }
        }, {
          key: "isChecked",
          set: function set(value) {
            this.treeView.isChecked = value;
          }
          /**
           * Defines the collection that will store the checked keys
           * ([see example]({% slug checkboxes_treeview %})).
           */

        }, {
          key: "checkedKeys",
          get: function get() {
            return this._checkedKeys;
          },
          set: function set(keys) {
            this._checkedKeys = keys;
          }
        }, {
          key: "options",
          get: function get() {
            var defaultOptions = {
              checkChildren: true,
              checkParents: true,
              enabled: true,
              mode: "multiple"
            };

            if (!isPresent(this.checkable)) {
              return defaultOptions;
            }

            var isBoolean = typeof this.checkable === 'boolean';
            var checkSettings = isBoolean ? {
              enabled: this.checkable
            } : this.checkable;
            return Object.assign(defaultOptions, checkSettings);
          }
        }]);

        return CheckDirective;
      }();

      CheckDirective.ɵfac = function CheckDirective_Factory(t) {
        return new (t || CheckDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TreeViewComponent), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
      };

      CheckDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: CheckDirective,
        selectors: [["", "kendoTreeViewCheckable", ""]],
        inputs: {
          isChecked: "isChecked",
          checkedKeys: "checkedKeys",
          checkKey: ["checkBy", "checkKey"],
          checkable: ["kendoTreeViewCheckable", "checkable"]
        },
        outputs: {
          checkedKeysChange: "checkedKeysChange"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });
      /** @nocollapse */

      CheckDirective.ctorParameters = function () {
        return [{
          type: TreeViewComponent
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }];
      };

      CheckDirective.propDecorators = {
        'isChecked': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'checkKey': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ["checkBy"]
        }],
        'checkedKeys': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'checkable': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['kendoTreeViewCheckable']
        }],
        'checkedKeysChange': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheckDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[kendoTreeViewCheckable]'
          }]
        }], function () {
          return [{
            type: TreeViewComponent
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }];
        }, {
          checkedKeysChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          isChecked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          checkedKeys: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          checkKey: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["checkBy"]
          }],
          checkable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['kendoTreeViewCheckable']
          }]
        });
      })();
      /**
       * A directive which manages the disabled in-memory state of the TreeView node
       * ([see example]({% slug disabledstate_treeview %})).
       */


      var DisableDirective = /*#__PURE__*/function () {
        function DisableDirective(treeView, cdr) {
          var _this20 = this;

          _classCallCheck(this, DisableDirective);

          this.treeView = treeView;
          this.cdr = cdr;
          /**
           * Defines the collection that will store the disabled keys.
           */

          this.disabledKeys = [];

          this.treeView.isDisabled = function (dataItem, index) {
            return _this20.disabledKeys.indexOf(_this20.itemKey({
              dataItem: dataItem,
              index: index
            })) > -1;
          };
        }
        /**
         * @hidden
         */


        _createClass(DisableDirective, [{
          key: "ngOnChanges",
          value: function ngOnChanges() {
            var changes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var disabledKeys = changes.disabledKeys;

            if (disabledKeys && !disabledKeys.firstChange) {
              this.cdr.markForCheck();
            }
          }
        }, {
          key: "itemKey",
          value: function itemKey(e) {
            if (!this.disableKey) {
              return e.index;
            }

            if (typeof this.disableKey === "string") {
              return e.dataItem[this.disableKey];
            }

            if (typeof this.disableKey === "function") {
              return this.disableKey(e);
            }
          }
        }, {
          key: "isDisabled",
          set: function set(value) {
            this.treeView.isDisabled = value;
          }
        }]);

        return DisableDirective;
      }();

      DisableDirective.ɵfac = function DisableDirective_Factory(t) {
        return new (t || DisableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TreeViewComponent), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
      };

      DisableDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: DisableDirective,
        selectors: [["", "kendoTreeViewDisable", ""]],
        inputs: {
          disabledKeys: "disabledKeys",
          isDisabled: "isDisabled",
          disableKey: ["kendoTreeViewDisable", "disableKey"]
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });
      /** @nocollapse */

      DisableDirective.ctorParameters = function () {
        return [{
          type: TreeViewComponent
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }];
      };

      DisableDirective.propDecorators = {
        'isDisabled': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'disableKey': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ["kendoTreeViewDisable"]
        }],
        'disabledKeys': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DisableDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[kendoTreeViewDisable]'
          }]
        }], function () {
          return [{
            type: TreeViewComponent
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }];
        }, {
          disabledKeys: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          isDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          disableKey: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["kendoTreeViewDisable"]
          }]
        });
      })();
      /**
       * A directive which manages the expanded state of the TreeView
       * ([see example]({% slug expandedstate_treeview %})).
       */


      var ExpandDirective = /*#__PURE__*/function () {
        function ExpandDirective(treeView) {
          var _this21 = this;

          _classCallCheck(this, ExpandDirective);

          this.treeView = treeView;
          /**
           * Fires when the `expandedKeys` collection was updated.
           */

          this.expandedKeysChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.subscriptions = new rxjs_Subscription__WEBPACK_IMPORTED_MODULE_3__["Subscription"](function () {});
          this._expandedKeys = [];
          this.subscriptions.add(Object(rxjs_observable_merge__WEBPACK_IMPORTED_MODULE_15__["merge"])(this.treeView.expand.pipe(Object(rxjs_operators_map__WEBPACK_IMPORTED_MODULE_14__["map"])(function (e) {
            return Object.assign({
              expand: true
            }, e);
          })), this.treeView.collapse.pipe(Object(rxjs_operators_map__WEBPACK_IMPORTED_MODULE_14__["map"])(function (e) {
            return Object.assign({
              expand: false
            }, e);
          }))).subscribe(this.toggleExpand.bind(this)));

          this.treeView.isExpanded = function (dataItem, index) {
            return _this21.expandedKeys.indexOf(_this21.itemKey({
              dataItem: dataItem,
              index: index
            })) > -1;
          };
        }
        /**
         * @hidden
         */


        _createClass(ExpandDirective, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscriptions.unsubscribe();
          }
        }, {
          key: "itemKey",
          value: function itemKey(e) {
            if (this.expandKey) {
              if (typeof this.expandKey === "string") {
                return e.dataItem[this.expandKey];
              }

              if (typeof this.expandKey === "function") {
                return this.expandKey(e);
              }
            }

            return e.index;
          }
        }, {
          key: "toggleExpand",
          value: function toggleExpand(_ref5) {
            var index = _ref5.index,
                dataItem = _ref5.dataItem,
                expand = _ref5.expand;
            var item = this.itemKey({
              index: index,
              dataItem: dataItem
            });
            var idx = this.expandedKeys.indexOf(item);
            var notify = false;

            if (idx > -1 && !expand) {
              this.expandedKeys.splice(idx, 1);
              notify = true;
            } else if (idx === -1 && expand) {
              this.expandedKeys.push(item);
              notify = true;
            }

            if (notify) {
              this.expandedKeysChange.emit(this.expandedKeys);
            }
          }
        }, {
          key: "isExpanded",
          set: function set(value) {
            this.treeView.isExpanded = value;
          }
          /**
           * Defines the collection that will store the expanded keys.
           */

        }, {
          key: "expandedKeys",
          get: function get() {
            return this._expandedKeys;
          },
          set: function set(keys) {
            this._expandedKeys = keys;
          }
        }]);

        return ExpandDirective;
      }();

      ExpandDirective.ɵfac = function ExpandDirective_Factory(t) {
        return new (t || ExpandDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TreeViewComponent));
      };

      ExpandDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: ExpandDirective,
        selectors: [["", "kendoTreeViewExpandable", ""]],
        inputs: {
          isExpanded: "isExpanded",
          expandedKeys: "expandedKeys",
          expandKey: ["expandBy", "expandKey"]
        },
        outputs: {
          expandedKeysChange: "expandedKeysChange"
        }
      });
      /** @nocollapse */

      ExpandDirective.ctorParameters = function () {
        return [{
          type: TreeViewComponent
        }];
      };

      ExpandDirective.propDecorators = {
        'isExpanded': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'expandKey': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ["expandBy"]
        }],
        'expandedKeysChange': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        'expandedKeys': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExpandDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[kendoTreeViewExpandable]'
          }]
        }], function () {
          return [{
            type: TreeViewComponent
          }];
        }, {
          expandedKeysChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          isExpanded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          expandedKeys: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          expandKey: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["expandBy"]
          }]
        });
      })();
      /**
       * A directive which manages the in-memory selection state of the TreeView node
       * ([see example]({% slug selection_treeview %})).
       */


      var SelectDirective = /*#__PURE__*/function () {
        function SelectDirective(treeView) {
          var _this22 = this;

          _classCallCheck(this, SelectDirective);

          this.treeView = treeView;
          /**
           * Fires when the `selectedKeys` collection was updated.
           */

          this.selectedKeysChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.subscriptions = new rxjs_Subscription__WEBPACK_IMPORTED_MODULE_3__["Subscription"](function () {});
          this.selectActions = {
            'multiple': function multiple(e) {
              return _this22.selectMultiple(e);
            },
            'single': function single(e) {
              return _this22.selectSingle(e);
            }
          };
          this._selectedKeys = [];
          this.subscriptions.add(this.treeView.selectionChange.subscribe(this.select.bind(this)));

          this.treeView.isSelected = function (dataItem, index) {
            return _this22.selectedKeys.indexOf(_this22.itemKey({
              dataItem: dataItem,
              index: index
            })) > -1;
          };
        }
        /**
         * @hidden
         */


        _createClass(SelectDirective, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscriptions.unsubscribe();
          }
        }, {
          key: "itemKey",
          value: function itemKey(e) {
            if (!this.selectKey) {
              return e.index;
            }

            if (typeof this.selectKey === 'string') {
              return e.dataItem[this.selectKey];
            }

            if (typeof this.selectKey === 'function') {
              return this.selectKey(e);
            }
          }
        }, {
          key: "select",
          value: function select(e) {
            var _this$options3 = this.options,
                enabled = _this$options3.enabled,
                mode = _this$options3.mode;
            var performSelection = this.selectActions[mode] || noop;

            if (!enabled) {
              return;
            }

            performSelection(e);
          }
        }, {
          key: "selectSingle",
          value: function selectSingle(node) {
            var key = this.itemKey(node);

            if (this.selectedKeys[0] === key) {
              return;
            }

            this.selectedKeys = [key];
            this.notify();
          }
        }, {
          key: "selectMultiple",
          value: function selectMultiple(node) {
            var key = this.itemKey(node);
            var idx = this.selectedKeys.indexOf(key);
            var isSelected = idx > -1;

            if (!isPresent(key)) {
              return;
            }

            if (isSelected) {
              this.selectedKeys.splice(idx, 1);
            } else {
              this.selectedKeys.push(key);
            }

            this.notify();
          }
        }, {
          key: "notify",
          value: function notify() {
            this.selectedKeysChange.emit(this.selectedKeys.slice());
          }
        }, {
          key: "isSelected",
          set: function set(value) {
            this.treeView.isSelected = value;
          }
          /**
           * Defines the collection that will store the selected keys
           * ([see example]({% slug selection_treeview %}#toc-selection-modes)).
           */

        }, {
          key: "selectedKeys",
          get: function get() {
            return this._selectedKeys;
          },
          set: function set(keys) {
            this._selectedKeys = keys;
          }
        }, {
          key: "getAriaMultiselectable",
          get: function get() {
            return this.options.mode === 'multiple';
          }
        }, {
          key: "options",
          get: function get() {
            var defaultOptions = {
              enabled: true,
              mode: 'single'
            };

            if (!isPresent(this.selection)) {
              return defaultOptions;
            }

            var isBoolean = typeof this.selection === 'boolean';
            var selectionSettings = isBoolean ? {
              enabled: this.selection
            } : this.selection;
            return Object.assign(defaultOptions, selectionSettings);
          }
        }]);

        return SelectDirective;
      }();

      SelectDirective.ɵfac = function SelectDirective_Factory(t) {
        return new (t || SelectDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TreeViewComponent));
      };

      SelectDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: SelectDirective,
        selectors: [["", "kendoTreeViewSelectable", ""]],
        hostVars: 1,
        hostBindings: function SelectDirective_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-multiselectable", ctx.getAriaMultiselectable);
          }
        },
        inputs: {
          isSelected: "isSelected",
          selectedKeys: "selectedKeys",
          selectKey: ["selectBy", "selectKey"],
          selection: ["kendoTreeViewSelectable", "selection"]
        },
        outputs: {
          selectedKeysChange: "selectedKeysChange"
        }
      });
      /** @nocollapse */

      SelectDirective.ctorParameters = function () {
        return [{
          type: TreeViewComponent
        }];
      };

      SelectDirective.propDecorators = {
        'isSelected': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'selectKey': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['selectBy']
        }],
        'selection': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['kendoTreeViewSelectable']
        }],
        'selectedKeys': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'selectedKeysChange': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        'getAriaMultiselectable': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['attr.aria-multiselectable']
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[kendoTreeViewSelectable]'
          }]
        }], function () {
          return [{
            type: TreeViewComponent
          }];
        }, {
          selectedKeysChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          isSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          selectedKeys: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          getAriaMultiselectable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.aria-multiselectable']
          }],
          selectKey: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['selectBy']
          }],
          selection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['kendoTreeViewSelectable']
          }]
        });
      })();
      /**
       * A directive which encapsulates the retrieval of child nodes.
       */


      var HierarchyBindingDirective = /*#__PURE__*/function () {
        function HierarchyBindingDirective(treeView) {
          _classCallCheck(this, HierarchyBindingDirective);

          this.treeView = treeView;
        }
        /**
         * The field name which holds the data items of the child component.
         */


        _createClass(HierarchyBindingDirective, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this23 = this;

            if (isPresent(this.childrenField)) {
              this.treeView.children = function (item) {
                return Object(rxjs_observable_of__WEBPACK_IMPORTED_MODULE_5__["of"])(getter(_this23.childrenField, true)(item));
              };

              this.treeView.hasChildren = function (item) {
                var children = getter(_this23.childrenField, true)(item);
                return Boolean(children && children.length);
              };
            }
          }
        }, {
          key: "childrenField",
          set: function set(value) {
            if (!value) {
              throw new Error("'childrenField' cannot be empty");
            }

            this._childrenField = value;
          }
          /**
           * The field name which holds the data items of the child component.
           */
          ,
          get: function get() {
            return this._childrenField;
          }
        }]);

        return HierarchyBindingDirective;
      }();

      HierarchyBindingDirective.ɵfac = function HierarchyBindingDirective_Factory(t) {
        return new (t || HierarchyBindingDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TreeViewComponent));
      };

      HierarchyBindingDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: HierarchyBindingDirective,
        selectors: [["", "kendoTreeViewHierarchyBinding", ""]],
        inputs: {
          childrenField: "childrenField"
        }
      });
      /** @nocollapse */

      HierarchyBindingDirective.ctorParameters = function () {
        return [{
          type: TreeViewComponent
        }];
      };

      HierarchyBindingDirective.propDecorators = {
        'childrenField': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HierarchyBindingDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[kendoTreeViewHierarchyBinding]'
          }]
        }], function () {
          return [{
            type: TreeViewComponent
          }];
        }, {
          childrenField: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /**
       * @hidden
       */


      var LoadingIndicatorDirective = /*#__PURE__*/function () {
        function LoadingIndicatorDirective(expandService, loadingService, cd) {
          _classCallCheck(this, LoadingIndicatorDirective);

          this.expandService = expandService;
          this.loadingService = loadingService;
          this.cd = cd;
          this._loading = false;
        }

        _createClass(LoadingIndicatorDirective, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this24 = this;

            var loadingNotifications = this.loadingService.changes.pipe(Object(rxjs_operators_filter__WEBPACK_IMPORTED_MODULE_11__["filter"])(function (index) {
              return index === _this24.index;
            }));
            this.subscription = this.expandService.changes.pipe(Object(rxjs_operators_filter__WEBPACK_IMPORTED_MODULE_11__["filter"])(function (_ref6) {
              var index = _ref6.index;
              return index === _this24.index;
            }), Object(rxjs_operators_tap__WEBPACK_IMPORTED_MODULE_9__["tap"])(function (_ref7) {
              var expand = _ref7.expand;

              if (!expand && _this24.loading) {
                _this24.loading = false;
              }
            }), Object(rxjs_operators_filter__WEBPACK_IMPORTED_MODULE_11__["filter"])(function (_ref8) {
              var expand = _ref8.expand;
              return expand;
            }), Object(rxjs_operators_switchMap__WEBPACK_IMPORTED_MODULE_13__["switchMap"])(function (x) {
              return Object(rxjs_observable_of__WEBPACK_IMPORTED_MODULE_5__["of"])(x).pipe(Object(rxjs_operators_delay__WEBPACK_IMPORTED_MODULE_16__["delay"])(100), Object(rxjs_operators_takeUntil__WEBPACK_IMPORTED_MODULE_17__["takeUntil"])(loadingNotifications));
            })).subscribe(function () {
              return _this24.loading = true;
            });
            this.subscription.add(loadingNotifications.subscribe(function () {
              return _this24.loading = false;
            }));
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.subscription) {
              this.subscription.unsubscribe();
            }
          }
        }, {
          key: "loading",
          get: function get() {
            return this._loading;
          },
          set: function set(value) {
            this._loading = value;
            this.cd.markForCheck();
          }
        }]);

        return LoadingIndicatorDirective;
      }();

      LoadingIndicatorDirective.ɵfac = function LoadingIndicatorDirective_Factory(t) {
        return new (t || LoadingIndicatorDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ExpandStateService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](LoadingNotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
      };

      LoadingIndicatorDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: LoadingIndicatorDirective,
        selectors: [["", "kendoTreeViewLoading", ""]],
        hostVars: 2,
        hostBindings: function LoadingIndicatorDirective_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("k-i-loading", ctx.loading);
          }
        },
        inputs: {
          index: ["kendoTreeViewLoading", "index"]
        }
      });
      /** @nocollapse */

      LoadingIndicatorDirective.ctorParameters = function () {
        return [{
          type: ExpandStateService
        }, {
          type: LoadingNotificationService
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }];
      };

      LoadingIndicatorDirective.propDecorators = {
        'loading': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ["class.k-i-loading"]
        }],
        'index': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ["kendoTreeViewLoading"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingIndicatorDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[kendoTreeViewLoading]'
          }]
        }], function () {
          return [{
            type: ExpandStateService
          }, {
            type: LoadingNotificationService
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }];
        }, {
          loading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ["class.k-i-loading"]
          }],
          index: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["kendoTreeViewLoading"]
          }]
        });
      })();
      /**
       * @hidden
       * Performs the right-to-left function composition. Functions must have a unary.
       */


      var compose = function compose() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return function (data) {
          return args.reduceRight(function (acc, curr) {
            return curr(acc);
          }, data);
        };
      };

      var findChildren = function findChildren(prop, nodes, value) {
        return nodes.filter(function (x) {
          return prop(x) === value;
        });
      };
      /**
       * A directive which encapsulates the retrieval of the child nodes.
       */


      var FlatDataBindingDirective = /*#__PURE__*/function () {
        function FlatDataBindingDirective(treeView) {
          _classCallCheck(this, FlatDataBindingDirective);

          this.treeView = treeView;
          this.originalData = [];
        }
        /**
         * The nodes which will be displayed by the TreeView.
         */


        _createClass(FlatDataBindingDirective, [{
          key: "ngOnInit",

          /**
           * @hidden
           */
          value: function ngOnInit() {
            var _this25 = this;

            if (isPresent(this.parentIdField) && isPresent(this.idField)) {
              var fetchChildren = function fetchChildren(node) {
                return findChildren(getter(_this25.parentIdField, true), _this25.originalData || [], getter(_this25.idField, true)(node));
              };

              this.treeView.hasChildren = function (node) {
                return fetchChildren(node).length > 0;
              };

              this.treeView.children = function (node) {
                return Object(rxjs_observable_of__WEBPACK_IMPORTED_MODULE_5__["of"])(fetchChildren(node));
              };
            }
          }
          /**
           * @hidden
           */

        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (isChanged("parentIdField", changes, false)) {
              this.nodes = this.originalData;
            }
          }
        }, {
          key: "nodes",
          set: function set(values) {
            this.originalData = values || [];

            if (!isNullOrEmptyString(this.parentIdField)) {
              var prop = getter(this.parentIdField, true);
              this.treeView.nodes = this.originalData.filter(compose(isBlank, prop));
            } else {
              this.treeView.nodes = this.originalData.slice(0);
            }
          }
        }]);

        return FlatDataBindingDirective;
      }();

      FlatDataBindingDirective.ɵfac = function FlatDataBindingDirective_Factory(t) {
        return new (t || FlatDataBindingDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TreeViewComponent));
      };

      FlatDataBindingDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: FlatDataBindingDirective,
        selectors: [["", "kendoTreeViewFlatDataBinding", ""]],
        inputs: {
          nodes: "nodes",
          parentIdField: "parentIdField",
          idField: "idField"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });
      /** @nocollapse */

      FlatDataBindingDirective.ctorParameters = function () {
        return [{
          type: TreeViewComponent
        }];
      };

      FlatDataBindingDirective.propDecorators = {
        'nodes': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'parentIdField': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'idField': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FlatDataBindingDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[kendoTreeViewFlatDataBinding]'
          }]
        }], function () {
          return [{
            type: TreeViewComponent
          }];
        }, {
          nodes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          parentIdField: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          idField: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      var buildItem = function buildItem(index, dataItem) {
        return {
          dataItem: dataItem,
          index: index
        };
      };

      var id = 0;
      /**
       * @hidden
       *
       * A directive which manages the expanded state of the TreeView.
       */

      var TreeViewItemDirective = /*#__PURE__*/function () {
        function TreeViewItemDirective(element, expandService, navigationService, selectionService, lookupService, renderer, ib) {
          _classCallCheck(this, TreeViewItemDirective);

          this.element = element;
          this.expandService = expandService;
          this.navigationService = navigationService;
          this.selectionService = selectionService;
          this.lookupService = lookupService;
          this.renderer = renderer;
          this.ib = ib;
          this.isDisabled = false;
          this.ariaChecked = 'false';
          this.id = id++;
          this.isInitialized = false;
          this.subscriptions = [];
          this.subscribe();
        }

        _createClass(TreeViewItemDirective, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.lookupService.registerItem(this.treeItem, this.parentTreeItem);
            this.registerNavigationItem();
            this.isInitialized = true;
            this.setAttribute('role', 'treeitem');
            this.setAriaAttributes();
            this.setDisabledClass();
            this.updateTabIndex();
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var index = changes.index,
                isDisabled = changes.isDisabled;

            if (index || changes.isChecked || changes.isExpanded || changes.isSelected) {
              this.setAriaAttributes();
            }

            if (isDisabled) {
              this.setDisabledClass();
            }

            this.moveLookupItem(changes);
            this.moveNavigationItem(index);
            this.disableNavigationItem(isDisabled);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.navigationService.unregisterItem(this.id, this.index);
            this.lookupService.unregisterItem(this.index, this.dataItem);
            this.subscriptions = this.subscriptions.reduce(function (list, callback) {
              return callback.unsubscribe(), list;
            }, []);
          }
        }, {
          key: "subscribe",
          value: function subscribe() {
            var _this26 = this;

            this.subscriptions = [this.navigationService.moves.subscribe(function () {
              _this26.updateTabIndex();

              _this26.focusItem();
            }), this.navigationService.expands.pipe(Object(rxjs_operators_filter__WEBPACK_IMPORTED_MODULE_11__["filter"])(function (_ref9) {
              var index = _ref9.index;
              return index === _this26.index && !_this26.isDisabled;
            })).subscribe(function (_ref10) {
              var expand = _ref10.expand;
              return _this26.expand(expand);
            })];
          }
        }, {
          key: "registerNavigationItem",
          value: function registerNavigationItem() {
            this.navigationService.registerItem(this.id, this.index, this.isDisabled);
            this.activateItem();
          }
        }, {
          key: "activateItem",
          value: function activateItem() {
            if (this.isDisabled) {
              return;
            }

            var navigationService = this.navigationService;
            var selectionService = this.selectionService;
            var index = this.index;
            selectionService.setFirstSelected(index, this.isSelected);

            if (!navigationService.isActive(index) && selectionService.isFirstSelected(index)) {
              navigationService.activateIndex(index);
            }
          }
        }, {
          key: "expand",
          value: function expand(shouldExpand) {
            this.expandService[shouldExpand ? 'expand' : 'collapse'](this.index, this.dataItem);
          }
        }, {
          key: "isFocusable",
          value: function isFocusable() {
            return !this.isDisabled && this.navigationService.isFocusable(this.index);
          }
        }, {
          key: "focusItem",
          value: function focusItem() {
            if (this.isInitialized && this.navigationService.isActive(this.index)) {
              this.element.nativeElement.focus();
            }
          }
        }, {
          key: "moveLookupItem",
          value: function moveLookupItem() {
            var changes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var dataItem = changes.dataItem,
                index = changes.index,
                parentDataItem = changes.parentDataItem,
                parentIndex = changes.parentIndex;

            if (index && index.firstChange || //skip first change
            !dataItem && !index && !parentDataItem && !parentIndex) {
              return;
            }

            var oldIndex = (index || {}).previousValue || this.index;
            this.lookupService.replaceItem(oldIndex, this.treeItem, this.parentTreeItem);
          }
        }, {
          key: "moveNavigationItem",
          value: function moveNavigationItem() {
            var indexChange = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var currentValue = indexChange.currentValue,
                firstChange = indexChange.firstChange,
                previousValue = indexChange.previousValue;

            if (!firstChange && isPresent(currentValue) && isPresent(previousValue)) {
              this.navigationService.unregisterItem(this.id, previousValue);
              this.navigationService.registerItem(this.id, currentValue, this.isDisabled);
            }
          }
        }, {
          key: "disableNavigationItem",
          value: function disableNavigationItem(disableChange) {
            if (!disableChange || disableChange.firstChange) {
              return;
            }

            var service = this.navigationService;

            if (this.isDisabled) {
              service.activateClosest(this.index); //activate before unregister the item
            } else {
              service.activateFocusable();
            }

            service.unregisterItem(this.id, this.index);
            service.registerItem(this.id, this.index, this.isDisabled);
          }
        }, {
          key: "setAriaAttributes",
          value: function setAriaAttributes() {
            this.setAttribute('aria-level', this.ib.level(this.index).toString());
            this.setAttribute('aria-expanded', this.isExpanded.toString());
            this.setAttribute('aria-selected', this.isSelected.toString());
            this.setAttribute('aria-checked', this.ariaChecked);
          }
        }, {
          key: "setDisabledClass",
          value: function setDisabledClass() {
            this.setClass('k-state-disabled', this.isDisabled);
          }
        }, {
          key: "setClass",
          value: function setClass(className, toggle) {
            var action = toggle ? 'addClass' : 'removeClass';
            this.renderer[action](this.element.nativeElement, className);
          }
        }, {
          key: "updateTabIndex",
          value: function updateTabIndex() {
            this.setAttribute('tabIndex', this.isFocusable() ? '0' : '-1');
          }
        }, {
          key: "setAttribute",
          value: function setAttribute(attr, value) {
            this.renderer.setAttribute(this.element.nativeElement, attr, value);
          }
        }, {
          key: "isChecked",
          set: function set(checked) {
            if (checked === 'checked') {
              this.ariaChecked = 'true';
            } else if (checked === 'indeterminate') {
              this.ariaChecked = 'mixed';
            } else {
              this.ariaChecked = 'false';
            }
          }
        }, {
          key: "isExpanded",
          get: function get() {
            return this._isExpanded || false;
          },
          set: function set(isExpanded) {
            this._isExpanded = isExpanded;
          }
        }, {
          key: "isSelected",
          get: function get() {
            return this._isSelected || false;
          },
          set: function set(isSelected) {
            this._isSelected = isSelected;
          }
        }, {
          key: "treeItem",
          get: function get() {
            return buildItem(this.index, this.dataItem);
          }
        }, {
          key: "parentTreeItem",
          get: function get() {
            return this.parentDataItem ? buildItem(this.parentIndex, this.parentDataItem) : null;
          }
        }]);

        return TreeViewItemDirective;
      }();

      TreeViewItemDirective.ɵfac = function TreeViewItemDirective_Factory(t) {
        return new (t || TreeViewItemDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ExpandStateService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NavigationService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](SelectionService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TreeViewLookupService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](IndexBuilderService));
      };

      TreeViewItemDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: TreeViewItemDirective,
        selectors: [["", "kendoTreeViewItem", ""]],
        inputs: {
          isDisabled: "isDisabled",
          isChecked: "isChecked",
          isExpanded: "isExpanded",
          isSelected: "isSelected",
          dataItem: "dataItem",
          index: "index",
          parentDataItem: "parentDataItem",
          parentIndex: "parentIndex"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });
      /** @nocollapse */

      TreeViewItemDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: ExpandStateService
        }, {
          type: NavigationService
        }, {
          type: SelectionService
        }, {
          type: TreeViewLookupService
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: IndexBuilderService
        }];
      };

      TreeViewItemDirective.propDecorators = {
        'dataItem': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'index': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'parentDataItem': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'parentIndex': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'isChecked': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'isDisabled': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'isExpanded': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'isSelected': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TreeViewItemDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[kendoTreeViewItem]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: ExpandStateService
          }, {
            type: NavigationService
          }, {
            type: SelectionService
          }, {
            type: TreeViewLookupService
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }, {
            type: IndexBuilderService
          }];
        }, {
          isDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          isChecked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          isExpanded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          isSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          dataItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          index: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          parentDataItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          parentIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /**
       * @hidden
       *
       * A directive which manages the expanded state of the TreeView.
       */


      var TreeViewItemContentDirective = /*#__PURE__*/function () {
        function TreeViewItemContentDirective(element, navigationService, selectionService, renderer) {
          var _this27 = this;

          _classCallCheck(this, TreeViewItemContentDirective);

          this.element = element;
          this.navigationService = navigationService;
          this.selectionService = selectionService;
          this.renderer = renderer;
          this.initialSelection = false;
          this.subscriptions = new rxjs_Subscription__WEBPACK_IMPORTED_MODULE_3__["Subscription"](function () {});
          this.subscriptions.add(this.navigationService.moves.subscribe(this.updateItem.bind(this)));
          this.subscriptions.add(this.navigationService.selects.pipe(Object(rxjs_operators_filter__WEBPACK_IMPORTED_MODULE_11__["filter"])(function (index) {
            return index === _this27.index;
          })).subscribe(function (index) {
            return _this27.selectionService.select(index, _this27.dataItem);
          }));
          this.subscriptions.add(this.selectionService.changes.subscribe(function () {
            _this27.updateSelection(_this27.isSelected(_this27.dataItem, _this27.index));
          }));
        }

        _createClass(TreeViewItemContentDirective, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes.initialSelection) {
              this.updateSelection(this.initialSelection);
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.updateSelection(this.initialSelection);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscriptions.unsubscribe();
          }
        }, {
          key: "updateItem",
          value: function updateItem() {
            this.render(this.navigationService.isActive(this.index), 'k-state-focused');
          }
        }, {
          key: "updateSelection",
          value: function updateSelection(selected) {
            this.render(selected, 'k-state-selected');
          }
        }, {
          key: "render",
          value: function render(addClass, className) {
            var action = addClass ? 'addClass' : 'removeClass';
            this.renderer[action](this.element.nativeElement, className);
          }
        }]);

        return TreeViewItemContentDirective;
      }();

      TreeViewItemContentDirective.ɵfac = function TreeViewItemContentDirective_Factory(t) {
        return new (t || TreeViewItemContentDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NavigationService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](SelectionService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]));
      };

      TreeViewItemContentDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: TreeViewItemContentDirective,
        selectors: [["", "kendoTreeViewItemContent", ""]],
        inputs: {
          initialSelection: "initialSelection",
          dataItem: "dataItem",
          index: "index",
          isSelected: "isSelected"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });
      /** @nocollapse */

      TreeViewItemContentDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: NavigationService
        }, {
          type: SelectionService
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }];
      };

      TreeViewItemContentDirective.propDecorators = {
        'dataItem': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'index': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'initialSelection': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'isSelected': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TreeViewItemContentDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[kendoTreeViewItemContent]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: NavigationService
          }, {
            type: SelectionService
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }];
        }, {
          initialSelection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          dataItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          index: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          isSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /**
       * @hidden
       *
       * Represents the CheckBox component of the Kendo UI TreeView for Angular.
       *
       */


      var CheckBoxComponent = /*#__PURE__*/function () {
        function CheckBoxComponent(element, renderer, changeDetector) {
          _classCallCheck(this, CheckBoxComponent);

          this.element = element;
          this.renderer = renderer;
          this.changeDetector = changeDetector;
          /**
           * Specifies the [`id`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id) of the component.
           */

          this.id = "_".concat(guid());
          /**
           * Specifies the [`tabindex`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) of the component.
           */

          this.tabindex = 0;
          /**
           * Fires when the user changes the check state of the component.
           */

          this.checkStateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.checkState = 'none';
        } //XXX: implement ComponentValueAccessor
        //XXX: focus/blur methods


        _createClass(CheckBoxComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.renderer.removeAttribute(this.element.nativeElement, "tabindex");
          }
        }, {
          key: "ngDoCheck",
          value: function ngDoCheck() {
            this.checkState = this.isChecked(this.node, this.index);
          }
        }, {
          key: "handleChange",
          value: function handleChange(e) {
            var state = e.target.checked ? 'checked' : 'none'; // update the View State so that Angular updates the input if the isChecked value is the same

            this.checkState = state;
            this.changeDetector.detectChanges();
            this.checkStateChange.emit(state);
          }
        }, {
          key: "classWrapper",
          get: function get() {
            return true;
          }
        }, {
          key: "indeterminate",
          get: function get() {
            return this.checkState === 'indeterminate';
          }
        }, {
          key: "checked",
          get: function get() {
            return this.checkState === 'checked';
          }
        }]);

        return CheckBoxComponent;
      }();

      CheckBoxComponent.ɵfac = function CheckBoxComponent_Factory(t) {
        return new (t || CheckBoxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
      };

      CheckBoxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CheckBoxComponent,
        selectors: [["kendo-checkbox"]],
        hostVars: 2,
        hostBindings: function CheckBoxComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("k-checkbox-wrapper", ctx.classWrapper);
          }
        },
        inputs: {
          id: "id",
          tabindex: "tabindex",
          isChecked: "isChecked",
          node: "node",
          index: "index",
          labelText: "labelText"
        },
        outputs: {
          checkStateChange: "checkStateChange"
        },
        decls: 3,
        vars: 6,
        consts: [["type", "checkbox", 1, "k-checkbox", 3, "id", "checked", "indeterminate", "tabindex", "change"], ["tabindex", "-1", 1, "k-checkbox-label", 3, "for"]],
        template: function CheckBoxComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CheckBoxComponent_Template_input_change_0_listener($event) {
              return ctx.handleChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.id)("checked", ctx.checked)("indeterminate", ctx.indeterminate)("tabindex", ctx.tabindex);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", ctx.id);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.labelText);
          }
        },
        encapsulation: 2
      });
      /** @nocollapse */

      CheckBoxComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }];
      };

      CheckBoxComponent.propDecorators = {
        'classWrapper': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.k-checkbox-wrapper']
        }],
        'id': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'isChecked': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'node': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'index': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'labelText': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'tabindex': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        'checkStateChange': [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheckBoxComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'kendo-checkbox',
            template: "\n        <input\n            class=\"k-checkbox\"\n            type=\"checkbox\"\n            [id]=\"id\"\n            [checked]=\"checked\"\n            [indeterminate]=\"indeterminate\"\n            [tabindex]=\"tabindex\"\n            (change)=\"handleChange($event)\"\n        />\n        <label\n            class=\"k-checkbox-label\"\n            tabindex=\"-1\"\n            [for]=\"id\"\n        >{{labelText}}</label>\n    "
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }];
        }, {
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          tabindex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          checkStateChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          classWrapper: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.k-checkbox-wrapper']
          }],
          isChecked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          node: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          index: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          labelText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      var COMPONENT_DIRECTIVES = [CheckBoxComponent];
      /**
       * @hidden
       *
       * Represents the [NgModule]({{ site.data.urls.angular['ngmoduleapi'] }}) definition for the CheckBox component.
       */

      var CheckBoxModule = function CheckBoxModule() {
        _classCallCheck(this, CheckBoxModule);
      };

      CheckBoxModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: CheckBoxModule
      });
      CheckBoxModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function CheckBoxModule_Factory(t) {
          return new (t || CheckBoxModule)();
        }
      });
      /** @nocollapse */

      CheckBoxModule.ctorParameters = function () {
        return [];
      };

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CheckBoxModule, {
          declarations: [CheckBoxComponent],
          exports: [CheckBoxComponent]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheckBoxModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [COMPONENT_DIRECTIVES],
            exports: [COMPONENT_DIRECTIVES]
          }]
        }], null, null);
      })();

      var COMPONENT_DIRECTIVES$1 = [TreeViewComponent, TreeViewGroupComponent, TreeViewItemDirective, TreeViewItemContentDirective, NodeTemplateDirective, CheckDirective, DisableDirective, ExpandDirective, SelectDirective, HierarchyBindingDirective, LoadingIndicatorDirective, FlatDataBindingDirective];
      /**
       * @hidden
       */

      var SharedModule = function SharedModule() {
        _classCallCheck(this, SharedModule);
      };

      SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: SharedModule
      });
      SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function SharedModule_Factory(t) {
          return new (t || SharedModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"], CheckBoxModule]]
      });
      /** @nocollapse */

      SharedModule.ctorParameters = function () {
        return [];
      };

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, {
          declarations: function declarations() {
            return [TreeViewComponent, TreeViewGroupComponent, TreeViewItemDirective, TreeViewItemContentDirective, NodeTemplateDirective, CheckDirective, DisableDirective, ExpandDirective, SelectDirective, HierarchyBindingDirective, LoadingIndicatorDirective, FlatDataBindingDirective];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"], CheckBoxModule];
          },
          exports: function exports() {
            return [TreeViewComponent, TreeViewGroupComponent, TreeViewItemDirective, TreeViewItemContentDirective, NodeTemplateDirective, CheckDirective, DisableDirective, ExpandDirective, SelectDirective, HierarchyBindingDirective, LoadingIndicatorDirective, FlatDataBindingDirective];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [COMPONENT_DIRECTIVES$1],
            exports: [COMPONENT_DIRECTIVES$1],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"], CheckBoxModule]
          }]
        }], null, null);
      })();

      var EXPORTS = [TreeViewComponent, NodeTemplateDirective, CheckDirective, DisableDirective, ExpandDirective, SelectDirective, HierarchyBindingDirective, FlatDataBindingDirective];
      /**
       * Represents the [NgModule]({{ site.data.urls.angular['ngmoduleapi'] }}) definition for the TreeView component.
       */

      var TreeViewModule = function TreeViewModule() {
        _classCallCheck(this, TreeViewModule);
      };

      TreeViewModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: TreeViewModule
      });
      TreeViewModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function TreeViewModule_Factory(t) {
          return new (t || TreeViewModule)();
        },
        imports: [[SharedModule]]
      });
      /** @nocollapse */

      TreeViewModule.ctorParameters = function () {
        return [];
      };

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TreeViewModule, {
          imports: [SharedModule],
          exports: [TreeViewComponent, NodeTemplateDirective, CheckDirective, DisableDirective, ExpandDirective, SelectDirective, HierarchyBindingDirective, FlatDataBindingDirective]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TreeViewModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            exports: [EXPORTS],
            imports: [SharedModule]
          }]
        }], null, null);
      })();
      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OzJJQUtFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O2tDQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztzSEFHRTtBQUNGO0FBQ0E7OztnREFBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O3lIQUdFO0FBQ0Y7QUFDQTs7O2dEQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OzhJQUdFO0FBQ0Y7QUFDQTs7O2dEQUFxRDtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O3lIQUdFO0FBQ0Y7QUFDQTs7O2dEQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O21IQUdFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7OztvRkFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O2dIQUdFO0FBQ0Y7QUFDQTs7O2dEQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzsrSEFHRTtBQUNGO0FBQ0E7OztnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OzJGQTBCRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUE2RkU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzsrV0FHRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztvQkFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7NlJBR0U7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7b0JBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OzhSQUdFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7b0JBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O2lPQUdFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzttTUFHRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7b0JBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O2lFQUdFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7b0JBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OzZRQUdFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O29CQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztrWUFHRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O21UQUdFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztvQkFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFxQkU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7dUlBTUU7QUFDRjtBQUNBOzs7Ozs7OzswQkFBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7NEtBT0U7QUFDRjtBQUNBOzs7Ozs7Ozs7MEJBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztrS0FNRTtBQUNGO0FBQ0E7Ozs7Ozs7OzBCQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgQ29udGVudENoaWxkLCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSG9zdEJpbmRpbmcsIEluamVjdGFibGUsIElucHV0LCBOZ01vZHVsZSwgTmdab25lLCBPcHRpb25hbCwgT3V0cHV0LCBSZW5kZXJlcjIsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMMTBOX1BSRUZJWCwgTG9jYWxpemF0aW9uU2VydmljZSB9IGZyb20gJ0Bwcm9ncmVzcy9rZW5kby1hbmd1bGFyLWwxMG4nO1xuaW1wb3J0IHsgU3ViamVjdCBhcyBTdWJqZWN0JDEgfSBmcm9tICdyeGpzL1N1YmplY3QnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIGFzIFN1YnNjcmlwdGlvbiQxIH0gZnJvbSAncnhqcy9TdWJzY3JpcHRpb24nO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IGFzIEJlaGF2aW9yU3ViamVjdCQxIH0gZnJvbSAncnhqcy9CZWhhdmlvclN1YmplY3QnO1xuaW1wb3J0IHsgb2YgYXMgb2YkMSB9IGZyb20gJ3J4anMvb2JzZXJ2YWJsZS9vZic7XG5pbXBvcnQgeyBhbmltYXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlciB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgZW1wdHkgYXMgZW1wdHkkMSB9IGZyb20gJ3J4anMvb2JzZXJ2YWJsZS9lbXB0eSc7XG5pbXBvcnQgeyBjYXRjaEVycm9yIGFzIGNhdGNoRXJyb3IkMSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzL2NhdGNoRXJyb3InO1xuaW1wb3J0IHsgdGFwIGFzIHRhcCQxIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMvdGFwJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBmaWx0ZXIgYXMgZmlsdGVyJDEgfSBmcm9tICdyeGpzL29wZXJhdG9ycy9maWx0ZXInO1xuaW1wb3J0IHsgdGFrZSBhcyB0YWtlJDEgfSBmcm9tICdyeGpzL29wZXJhdG9ycy90YWtlJztcbmltcG9ydCB7IHN3aXRjaE1hcCBhcyBzd2l0Y2hNYXAkMSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzL3N3aXRjaE1hcCc7XG5pbXBvcnQgeyBtYXAgYXMgbWFwJDEgfSBmcm9tICdyeGpzL29wZXJhdG9ycy9tYXAnO1xuaW1wb3J0IHsgbWVyZ2UgYXMgbWVyZ2UkMSB9IGZyb20gJ3J4anMvb2JzZXJ2YWJsZS9tZXJnZSc7XG5pbXBvcnQgeyBkZWxheSBhcyBkZWxheSQxIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMvZGVsYXknO1xuaW1wb3J0IHsgdGFrZVVudGlsIGFzIHRha2VVbnRpbCQxIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMvdGFrZVVudGlsJztcblxuLyoqXG4gKiBSZXByZXNlbnRzIHRoZSB0ZW1wbGF0ZSBmb3IgdGhlIFRyZWVWaWV3IG5vZGVzIChbbW9yZSBpbmZvcm1hdGlvbiBhbmQgZXhhbXBsZV0oeyUgc2x1ZyBub2RldGVtcGxhdGVfdHJlZXZpZXcgJX0pKS5cbiAqIFRoZSB0ZW1wbGF0ZSBoZWxwcyB0byBjdXN0b21pemUgdGhlIGNvbnRlbnQgb2YgdGhlIG5vZGVzLiBUbyBkZWZpbmUgdGhlIG5vZGUgdGVtcGxhdGUsIG5lc3QgYW4gYDxuZy10ZW1wbGF0ZT5gXG4gKiB0YWcgd2l0aCB0aGUgYGtlbmRvVHJlZVZpZXdOb2RlVGVtcGxhdGVgIGRpcmVjdGl2ZSBpbnNpZGUgYSBgPGtlbmRvLXRyZWV2aWV3PmAgdGFnLiBUaGUgdGVtcGxhdGUgY29udGV4dCBpcyBzZXRcbiAqIHRvIHRoZSBkYXRhIGl0ZW0gb2YgdGhlIGN1cnJlbnQgbm9kZS5cbiAqXG4gKiBAZXhhbXBsZVxuICogYGBgdHNcbiAqXG4gKiAgaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4gKiAgQENvbXBvbmVudCh7XG4gKiAgICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAqICAgICAgdGVtcGxhdGU6IGBcbiAqICAgICAgPGtlbmRvLXRyZWV2aWV3XG4gKiAgICAgICAgICBbbm9kZXNdPVwiZGF0YVwiXG4gKiAgICAgICAgICBrZW5kb1RyZWVWaWV3RXhwYW5kYWJsZVxuICpcbiAqICAgICAgICAgIGtlbmRvVHJlZVZpZXdIaWVyYXJjaHlCaW5kaW5nXG4gKiAgICAgICAgICBjaGlsZHJlbkZpZWxkPVwiaXRlbXNcIj5cbiAqICAgICAgICA8bmctdGVtcGxhdGUga2VuZG9UcmVlVmlld05vZGVUZW1wbGF0ZSBsZXQtZGF0YUl0ZW0+XG4gKiAgICAgICAgICA8c3BhbiBbc3R5bGUuZm9udFdlaWdodF09XCJkYXRhSXRlbS5pdGVtcyA/ICdib2xkZXInOiAnbm9ybWFsJyBcIj57e2RhdGFJdGVtLnRleHR9fTwvc3Bhbj5cbiAqICAgICAgICA8L25nLXRlbXBsYXRlPlxuICogICAgICA8L2tlbmRvLXRyZWV2aWV3PlxuICogICAgYFxuICogIH0pXG4gKiAgZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gKiAgICAgIHB1YmxpYyBkYXRhOiBhbnlbXSA9IFtcbiAqICAgICAgICAgIHtcbiAqICAgICAgICAgICAgICB0ZXh0OiBcIkluYm94XCIsXG4gKiAgICAgICAgICAgICAgaXRlbXM6IFt7IHRleHQ6IFwiUmVhZCBNYWlsXCIgfV1cbiAqICAgICAgICAgIH0sXG4gKiAgICAgICAgICB7XG4gKiAgICAgICAgICAgICAgdGV4dDogXCJEcmFmdHNcIlxuICogICAgICAgICAgfSxcbiAqICAgICAgICAgIHtcbiAqICAgICAgICAgICAgICB0ZXh0OiBcIlNlYXJjaCBGb2xkZXJzXCIsXG4gKiAgICAgICAgICAgICAgaXRlbXM6IFtcbiAqICAgICAgICAgICAgICAgICAgeyB0ZXh0OiBcIkNhdGVnb3JpemVkIE1haWxcIiB9LFxuICogICAgICAgICAgICAgICAgICB7IHRleHQ6IFwiTGFyZ2UgTWFpbFwiIH0sXG4gKiAgICAgICAgICAgICAgICAgIHsgdGV4dDogXCJVbnJlYWQgTWFpbFwifVxuICogICAgICAgICAgICAgIF1cbiAqICAgICAgICAgIH0sXG4gKiAgICAgICAgICB7IHRleHQ6IFwiU2V0dGluZ3NcIiB9XG4gKiAgICAgIF07XG4gKiAgfVxuICpcbiAqIGBgYFxuICovXG5jbGFzcyBOb2RlVGVtcGxhdGVEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKHRlbXBsYXRlUmVmKSB7XG4gICAgICAgIHRoaXMudGVtcGxhdGVSZWYgPSB0ZW1wbGF0ZVJlZjtcbiAgICB9XG59XG5Ob2RlVGVtcGxhdGVEaXJlY3RpdmUuZGVjb3JhdG9ycyA9IFtcbiAgICB7IHR5cGU6IERpcmVjdGl2ZSwgYXJnczogW3tcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ1trZW5kb1RyZWVWaWV3Tm9kZVRlbXBsYXRlXSdcbiAgICAgICAgICAgIH0sXSB9LFxuXTtcbi8qKiBAbm9jb2xsYXBzZSAqL1xuTm9kZVRlbXBsYXRlRGlyZWN0aXZlLmN0b3JQYXJhbWV0ZXJzID0gKCkgPT4gW1xuICAgIHsgdHlwZTogVGVtcGxhdGVSZWYsIGRlY29yYXRvcnM6IFt7IHR5cGU6IE9wdGlvbmFsIH0sXSB9LFxuXTtcblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmNsYXNzIEV4cGFuZFN0YXRlU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlcyA9IG5ldyBTdWJqZWN0JDEoKTtcbiAgICB9XG4gICAgZXhwYW5kKGluZGV4LCBkYXRhSXRlbSkge1xuICAgICAgICB0aGlzLmNoYW5nZXMubmV4dCh7IGRhdGFJdGVtLCBpbmRleCwgZXhwYW5kOiB0cnVlIH0pO1xuICAgIH1cbiAgICBjb2xsYXBzZShpbmRleCwgZGF0YUl0ZW0pIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VzLm5leHQoeyBkYXRhSXRlbSwgaW5kZXgsIGV4cGFuZDogZmFsc2UgfSk7XG4gICAgfVxufVxuRXhwYW5kU3RhdGVTZXJ2aWNlLmRlY29yYXRvcnMgPSBbXG4gICAgeyB0eXBlOiBJbmplY3RhYmxlIH0sXG5dO1xuLyoqIEBub2NvbGxhcHNlICovXG5FeHBhbmRTdGF0ZVNlcnZpY2UuY3RvclBhcmFtZXRlcnMgPSAoKSA9PiBbXTtcblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmNsYXNzIEluZGV4QnVpbGRlclNlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLklOREVYX1NFUEFSQVRPUiA9ICdfJztcbiAgICB9XG4gICAgbm9kZUluZGV4KGluZGV4ID0gJycsIHBhcmVudEluZGV4ID0gJycpIHtcbiAgICAgICAgcmV0dXJuIGAke3BhcmVudEluZGV4fSR7cGFyZW50SW5kZXggPyB0aGlzLklOREVYX1NFUEFSQVRPUiA6ICcnfSR7aW5kZXh9YDtcbiAgICB9XG4gICAgaW5kZXhGb3JMZXZlbChpbmRleCwgbGV2ZWwpIHtcbiAgICAgICAgcmV0dXJuIGluZGV4LnNwbGl0KHRoaXMuSU5ERVhfU0VQQVJBVE9SKS5zbGljZSgwLCBsZXZlbCkuam9pbih0aGlzLklOREVYX1NFUEFSQVRPUik7XG4gICAgfVxuICAgIGxhc3RMZXZlbEluZGV4KGluZGV4ID0gJycpIHtcbiAgICAgICAgY29uc3QgcGFydHMgPSBpbmRleC5zcGxpdCh0aGlzLklOREVYX1NFUEFSQVRPUik7XG4gICAgICAgIGlmICghcGFydHMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gTmFOO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXJzZUludChwYXJ0c1twYXJ0cy5sZW5ndGggLSAxXSwgMTApO1xuICAgIH1cbiAgICBsZXZlbChpbmRleCkge1xuICAgICAgICByZXR1cm4gaW5kZXguc3BsaXQodGhpcy5JTkRFWF9TRVBBUkFUT1IpLmxlbmd0aDtcbiAgICB9XG59XG5JbmRleEJ1aWxkZXJTZXJ2aWNlLmRlY29yYXRvcnMgPSBbXG4gICAgeyB0eXBlOiBJbmplY3RhYmxlIH0sXG5dO1xuLyoqIEBub2NvbGxhcHNlICovXG5JbmRleEJ1aWxkZXJTZXJ2aWNlLmN0b3JQYXJhbWV0ZXJzID0gKCkgPT4gW107XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5jbGFzcyBMb2FkaW5nTm90aWZpY2F0aW9uU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlcyA9IG5ldyBTdWJqZWN0JDEoKTtcbiAgICB9XG4gICAgbm90aWZ5TG9hZGVkKGluZGV4KSB7XG4gICAgICAgIHRoaXMuY2hhbmdlcy5uZXh0KGluZGV4KTtcbiAgICB9XG59XG5Mb2FkaW5nTm90aWZpY2F0aW9uU2VydmljZS5kZWNvcmF0b3JzID0gW1xuICAgIHsgdHlwZTogSW5qZWN0YWJsZSB9LFxuXTtcbi8qKiBAbm9jb2xsYXBzZSAqL1xuTG9hZGluZ05vdGlmaWNhdGlvblNlcnZpY2UuY3RvclBhcmFtZXRlcnMgPSAoKSA9PiBbXTtcblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmNsYXNzIE5vZGVDaGlsZHJlblNlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNoYW5nZXMgPSBuZXcgU3ViamVjdCQxKCk7XG4gICAgfVxuICAgIGNoaWxkcmVuTG9hZGVkKGl0ZW0sIGNoaWxkcmVuKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlcy5uZXh0KHsgaXRlbSwgY2hpbGRyZW4gfSk7XG4gICAgfVxufVxuTm9kZUNoaWxkcmVuU2VydmljZS5kZWNvcmF0b3JzID0gW1xuICAgIHsgdHlwZTogSW5qZWN0YWJsZSB9LFxuXTtcbi8qKiBAbm9jb2xsYXBzZSAqL1xuTm9kZUNoaWxkcmVuU2VydmljZS5jdG9yUGFyYW1ldGVycyA9ICgpID0+IFtdO1xuXG5jb25zdCBmb2N1c2FibGVSZWdleCA9IC9eKD86YXxpbnB1dHxzZWxlY3R8b3B0aW9ufHRleHRhcmVhfGJ1dHRvbnxvYmplY3QpJC9pO1xuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmNvbnN0IG1hdGNoID0gKGVsZW1lbnQsIHNlbGVjdG9yKSA9PiB7XG4gICAgY29uc3QgbWF0Y2hlciA9IGVsZW1lbnQubWF0Y2hlcyB8fCBlbGVtZW50Lm1zTWF0Y2hlc1NlbGVjdG9yIHx8IGVsZW1lbnQud2Via2l0TWF0Y2hlc1NlbGVjdG9yO1xuICAgIGlmICghbWF0Y2hlcikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBtYXRjaGVyLmNhbGwoZWxlbWVudCwgc2VsZWN0b3IpO1xufTtcbmNvbnN0IGNsb3Nlc3RXaXRoTWF0Y2ggPSAoZWxlbWVudCwgc2VsZWN0b3IpID0+IHtcbiAgICBpZiAoIWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jb250YWlucyhlbGVtZW50KSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgbGV0IHBhcmVudCA9IGVsZW1lbnQ7XG4gICAgd2hpbGUgKHBhcmVudCAhPT0gbnVsbCAmJiBwYXJlbnQubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgICAgaWYgKG1hdGNoKHBhcmVudCwgc2VsZWN0b3IpKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyZW50O1xuICAgICAgICB9XG4gICAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnRFbGVtZW50IHx8IHBhcmVudC5wYXJlbnROb2RlO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn07XG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuY29uc3Qgbm9vcCA9ICgpID0+IHsgfTtcbi8qKlxuICogQGhpZGRlblxuICovXG5jb25zdCBpc1ByZXNlbnQgPSAodmFsdWUpID0+IHZhbHVlICE9PSBudWxsICYmIHZhbHVlICE9PSB1bmRlZmluZWQ7XG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuY29uc3QgaXNCbGFuayA9ICh2YWx1ZSkgPT4gdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZDtcbi8qKlxuICogQGhpZGRlblxuICovXG5jb25zdCBpc0FycmF5ID0gKHZhbHVlKSA9PiBBcnJheS5pc0FycmF5KHZhbHVlKTtcbi8qKlxuICogQGhpZGRlblxuICovXG5jb25zdCBpc051bGxPckVtcHR5U3RyaW5nID0gKHZhbHVlKSA9PiBpc0JsYW5rKHZhbHVlKSB8fCB2YWx1ZS50cmltKCkubGVuZ3RoID09PSAwO1xuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmNvbnN0IGlzRG9jdW1lbnRBdmFpbGFibGUgPSAoKSA9PiB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnO1xuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmNvbnN0IGhhc09ic2VydmVycyA9IChlbWl0dGVyKSA9PiBlbWl0dGVyLm9ic2VydmVycy5sZW5ndGggPiAwO1xuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmNvbnN0IGlzQ2hhbmdlZCA9IChwcm9wZXJ0eU5hbWUsIGNoYW5nZXMsIHNraXBGaXJzdENoYW5nZSA9IHRydWUpID0+IChjaGFuZ2VzW3Byb3BlcnR5TmFtZV0gJiYgKCFjaGFuZ2VzW3Byb3BlcnR5TmFtZV0uaXNGaXJzdENoYW5nZSgpIHx8ICFza2lwRmlyc3RDaGFuZ2UpICYmXG4gICAgY2hhbmdlc1twcm9wZXJ0eU5hbWVdLnByZXZpb3VzVmFsdWUgIT09IGNoYW5nZXNbcHJvcGVydHlOYW1lXS5jdXJyZW50VmFsdWUpO1xuLyoqXG4gKiBAaGlkZGVuXG4gKi9cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmNvbnN0IGNsb3Nlc3ROb2RlID0gKGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBzZWxlY3RvciA9ICdsaS5rLXRyZWV2aWV3LWl0ZW0nO1xuICAgIGlmICghaXNEb2N1bWVudEF2YWlsYWJsZSgpKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBpZiAoZWxlbWVudC5jbG9zZXN0KSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50LmNsb3Nlc3Qoc2VsZWN0b3IpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNsb3Nlc3RXaXRoTWF0Y2goZWxlbWVudCwgc2VsZWN0b3IpO1xuICAgIH1cbn07XG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuY29uc3QgaXNGb2N1c2FibGUgPSAoZWxlbWVudCkgPT4ge1xuICAgIGlmIChlbGVtZW50LnRhZ05hbWUpIHtcbiAgICAgICAgY29uc3QgdGFnTmFtZSA9IGVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCB0YWJJbmRleCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCd0YWJJbmRleCcpO1xuICAgICAgICBjb25zdCBza2lwVGFiID0gdGFiSW5kZXggPT09ICctMSc7XG4gICAgICAgIGxldCBmb2N1c2FibGUgPSB0YWJJbmRleCAhPT0gbnVsbCAmJiAhc2tpcFRhYjtcbiAgICAgICAgaWYgKGZvY3VzYWJsZVJlZ2V4LnRlc3QodGFnTmFtZSkpIHtcbiAgICAgICAgICAgIGZvY3VzYWJsZSA9ICFlbGVtZW50LmRpc2FibGVkICYmICFza2lwVGFiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmb2N1c2FibGU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn07XG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuY29uc3QgaXNDb250ZW50ID0gKGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBzY29wZVNlbGVjdG9yID0gJy5rLWluLC5rLXRyZWV2aWV3LWl0ZW0sLmstdHJlZXZpZXcnO1xuICAgIGlmICghaXNEb2N1bWVudEF2YWlsYWJsZSgpKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBsZXQgbm9kZSA9IGVsZW1lbnQ7XG4gICAgd2hpbGUgKG5vZGUgJiYgIW1hdGNoKG5vZGUsIHNjb3BlU2VsZWN0b3IpKSB7XG4gICAgICAgIG5vZGUgPSBub2RlLnBhcmVudE5vZGU7XG4gICAgfVxuICAgIGlmIChub2RlKSB7XG4gICAgICAgIHJldHVybiBtYXRjaChub2RlLCAnLmstaW4nKTtcbiAgICB9XG59O1xuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmNvbnN0IGNsb3Nlc3QgPSAobm9kZSwgcHJlZGljYXRlKSA9PiB7XG4gICAgd2hpbGUgKG5vZGUgJiYgIXByZWRpY2F0ZShub2RlKSkge1xuICAgICAgICBub2RlID0gbm9kZS5wYXJlbnROb2RlO1xuICAgIH1cbiAgICByZXR1cm4gbm9kZTtcbn07XG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuY29uc3QgaGFzUGFyZW50ID0gKGVsZW1lbnQsIGNvbnRhaW5lcikgPT4ge1xuICAgIHJldHVybiBCb29sZWFuKGNsb3Nlc3QoZWxlbWVudCwgKG5vZGUpID0+IG5vZGUgPT09IGNvbnRhaW5lcikpO1xufTtcbi8qKlxuICogQGhpZGRlblxuICovXG5jb25zdCBmb2N1c2FibGVOb2RlID0gKGVsZW1lbnQpID0+IGVsZW1lbnQubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdsaVt0YWJpbmRleD1cIjBcIl0nKTtcbi8qKlxuICogQGhpZGRlblxuICovXG5cbi8qKlxuICogQGhpZGRlblxuICovXG5jb25zdCBub2RlSWQgPSAobm9kZSkgPT4gbm9kZSA/IG5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLXRyZWVpbmRleCcpIDogJyc7XG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuY29uc3Qgbm9kZUluZGV4ID0gKGl0ZW0pID0+IChpdGVtIHx8IHt9KS5pbmRleDtcbi8qKlxuICogQGhpZGRlblxuICovXG5jb25zdCBndWlkID0gKCkgPT4ge1xuICAgIGxldCBpZCA9IFwiXCIsIHJhbmRvbTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDMyOyBpKyspIHtcbiAgICAgICAgcmFuZG9tID0gTWF0aC5yYW5kb20oKSAqIDE2IHwgMDsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1iaXR3aXNlXG4gICAgICAgIGlmIChpID09PSA4IHx8IGkgPT09IDEyIHx8IGkgPT09IDE2IHx8IGkgPT09IDIwKSB7XG4gICAgICAgICAgICBpZCArPSBcIi1cIjtcbiAgICAgICAgfVxuICAgICAgICBpZCArPSAoaSA9PT0gMTIgPyA0IDogKGkgPT09IDE2ID8gKHJhbmRvbSAmIDMgfCA4KSA6IHJhbmRvbSkpLnRvU3RyaW5nKDE2KTsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1iaXR3aXNlXG4gICAgfVxuICAgIHJldHVybiBpZDtcbn07XG5cbmNvbnN0IGxhc3QgPSAobGlzdCkgPT4gbGlzdFtsaXN0Lmxlbmd0aCAtIDFdO1xuY29uc3Qgc2FmZSA9IG5vZGUgPT4gKG5vZGUgfHwge30pO1xuY29uc3Qgc2FmZUNoaWxkcmVuID0gbm9kZSA9PiAoc2FmZShub2RlKS5jaGlsZHJlbiB8fCBbXSk7XG5jb25zdCBmaW5kTGFzdCA9IG5vZGUgPT4ge1xuICAgIGxldCBsYXN0Tm9kZSA9IG5vZGU7XG4gICAgbGV0IGNoaWxkcmVuID0gW10uY29uY2F0KHNhZmVDaGlsZHJlbihub2RlKSk7XG4gICAgd2hpbGUgKGNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICBjaGlsZHJlbiA9IGNoaWxkcmVuLmNvbmNhdChzYWZlQ2hpbGRyZW4obGFzdChjaGlsZHJlbikpKTtcbiAgICAgICAgbGFzdE5vZGUgPSBjaGlsZHJlbi5zaGlmdCgpO1xuICAgIH1cbiAgICByZXR1cm4gbGFzdE5vZGU7XG59O1xuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmNsYXNzIE5hdmlnYXRpb25Nb2RlbCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaWIgPSBuZXcgSW5kZXhCdWlsZGVyU2VydmljZSgpO1xuICAgICAgICB0aGlzLm5vZGVzID0gW107XG4gICAgfVxuICAgIGZpcnN0Tm9kZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZXNbMF0gfHwgbnVsbDtcbiAgICB9XG4gICAgbGFzdE5vZGUoKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLm5vZGVzW3RoaXMubm9kZXMubGVuZ3RoIC0gMV07XG4gICAgICAgIGlmICghbm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZpbmRMYXN0KGxhc3QodGhpcy5jb250YWluZXIobm9kZSkpKSB8fCBub2RlO1xuICAgIH1cbiAgICBjbG9zZXN0Tm9kZShpbmRleCkge1xuICAgICAgICBjb25zdCB7IHByZXYgfSA9IHNhZmUodGhpcy5maW5kTm9kZShpbmRleCkpO1xuICAgICAgICBjb25zdCBzaWJsaW5nID0gcHJldiB8fCB0aGlzLmZpcnN0Tm9kZSgpO1xuICAgICAgICByZXR1cm4gc2FmZShzaWJsaW5nKS5pbmRleCA9PT0gaW5kZXggPyB0aGlzLnNpYmxpbmcoc2libGluZywgMSkgOiBzaWJsaW5nO1xuICAgIH1cbiAgICBmaW5kTm9kZShpbmRleCkge1xuICAgICAgICByZXR1cm4gdGhpcy5maW5kKGluZGV4LCB0aGlzLm5vZGVzKTtcbiAgICB9XG4gICAgZmluZFBhcmVudChpbmRleCkge1xuICAgICAgICBjb25zdCBwYXJlbnRMZXZlbCA9IHRoaXMuaWIubGV2ZWwoaW5kZXgpIC0gMTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmluZE5vZGUodGhpcy5pYi5pbmRleEZvckxldmVsKGluZGV4LCBwYXJlbnRMZXZlbCkpO1xuICAgIH1cbiAgICBmaW5kQ2hpbGQoaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIHNhZmVDaGlsZHJlbih0aGlzLmZpbmROb2RlKGluZGV4KSlbMF0gfHwgbnVsbDtcbiAgICB9XG4gICAgZmluZFByZXYoaXRlbSkge1xuICAgICAgICBjb25zdCBpbmRleCA9IGl0ZW0uaW5kZXg7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IHRoaXMuZmluZFBhcmVudChpbmRleCk7XG4gICAgICAgIGNvbnN0IGxldmVsSW5kZXggPSB0aGlzLmliLmxhc3RMZXZlbEluZGV4KGluZGV4KTtcbiAgICAgICAgaWYgKGxldmVsSW5kZXggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY3VycmVudE5vZGUgPSB0aGlzLmZpbmROb2RlKGluZGV4KTtcbiAgICAgICAgbGV0IHByZXYgPSB0aGlzLnNpYmxpbmcoY3VycmVudE5vZGUsIC0xKTtcbiAgICAgICAgaWYgKHByZXYpIHtcbiAgICAgICAgICAgIGxldCBjaGlsZHJlbiA9IHRoaXMuY29udGFpbmVyKHByZXYpO1xuICAgICAgICAgICAgd2hpbGUgKGNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBwcmV2ID0gbGFzdChjaGlsZHJlbik7XG4gICAgICAgICAgICAgICAgY2hpbGRyZW4gPSB0aGlzLmNvbnRhaW5lcihwcmV2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJldjtcbiAgICB9XG4gICAgZmluZE5leHQoaXRlbSkge1xuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMuY29udGFpbmVyKGl0ZW0pO1xuICAgICAgICBpZiAoY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zaWJsaW5nKGl0ZW0sIDEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjaGlsZHJlblswXTtcbiAgICB9XG4gICAgcmVnaXN0ZXJJdGVtKGlkLCBpbmRleCwgZGlzYWJsZWQpIHtcbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBbXTtcbiAgICAgICAgY29uc3QgbGV2ZWwgPSB0aGlzLmliLmxldmVsKGluZGV4KTtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gdGhpcy5maW5kUGFyZW50KGluZGV4KTtcbiAgICAgICAgaWYgKHBhcmVudCB8fCBsZXZlbCA9PT0gMSkge1xuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IHsgaWQsIGNoaWxkcmVuLCBpbmRleCwgcGFyZW50LCBkaXNhYmxlZCB9O1xuICAgICAgICAgICAgdGhpcy5pbnNlcnQobm9kZSwgcGFyZW50KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1bnJlZ2lzdGVySXRlbShpZCwgaW5kZXgpIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IHRoaXMuZmluZChpbmRleCwgdGhpcy5ub2Rlcyk7XG4gICAgICAgIGlmICghbm9kZSB8fCBub2RlLmlkICE9PSBpZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy5jb250YWluZXIobm9kZS5wYXJlbnQpO1xuICAgICAgICBjaGlsZHJlbi5zcGxpY2UoY2hpbGRyZW4uaW5kZXhPZihub2RlKSwgMSk7XG4gICAgfVxuICAgIGNoaWxkTGV2ZWwobm9kZXMpIHtcbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBub2Rlcy5maWx0ZXIobm9kZSA9PiBpc1ByZXNlbnQobm9kZSkpO1xuICAgICAgICBpZiAoIWNoaWxkcmVuIHx8ICFjaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmliLmxldmVsKGNoaWxkcmVuWzBdLmluZGV4KTtcbiAgICB9XG4gICAgY29udGFpbmVyKG5vZGUpIHtcbiAgICAgICAgcmV0dXJuIG5vZGUgPyBub2RlLmNoaWxkcmVuIDogdGhpcy5ub2RlcztcbiAgICB9XG4gICAgZmluZChpbmRleCwgbm9kZXMpIHtcbiAgICAgICAgY29uc3QgY2hpbGRMZXZlbCA9IHRoaXMuY2hpbGRMZXZlbChub2Rlcyk7XG4gICAgICAgIGNvbnN0IGluZGV4VG9NYXRjaCA9IHRoaXMuaWIuaW5kZXhGb3JMZXZlbChpbmRleCwgY2hpbGRMZXZlbCk7XG4gICAgICAgIGNvbnN0IGlzTGVhZiA9IGNoaWxkTGV2ZWwgPT09IHRoaXMuaWIubGV2ZWwoaW5kZXgpO1xuICAgICAgICBjb25zdCBub2RlID0gbm9kZXMuZmluZChuID0+IG4gJiYgbi5pbmRleCA9PT0gaW5kZXhUb01hdGNoKTtcbiAgICAgICAgaWYgKCFub2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXNMZWFmID8gbm9kZSA6IHRoaXMuZmluZChpbmRleCwgbm9kZS5jaGlsZHJlbik7XG4gICAgfVxuICAgIGluc2VydChub2RlLCBwYXJlbnQpIHtcbiAgICAgICAgY29uc3Qgbm9kZXMgPSB0aGlzLmNvbnRhaW5lcihwYXJlbnQpO1xuICAgICAgICBub2Rlc1t0aGlzLmliLmxhc3RMZXZlbEluZGV4KG5vZGUuaW5kZXgpXSA9IG5vZGU7XG4gICAgfVxuICAgIHNpYmxpbmcobm9kZSwgb2Zmc2V0KSB7XG4gICAgICAgIGlmICghbm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFyZW50ID0gdGhpcy5maW5kUGFyZW50KG5vZGUuaW5kZXgpO1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmNvbnRhaW5lcihwYXJlbnQpO1xuICAgICAgICByZXR1cm4gY29udGFpbmVyW2NvbnRhaW5lci5pbmRleE9mKG5vZGUpICsgb2Zmc2V0XSB8fCB0aGlzLnNpYmxpbmcocGFyZW50LCBvZmZzZXQpIHx8IG51bGw7XG4gICAgfVxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xudmFyIEtleXM7XG4oZnVuY3Rpb24gKEtleXMpIHtcbiAgICBLZXlzW0tleXNbXCJlbnRlclwiXSA9IDEzXSA9IFwiZW50ZXJcIjtcbiAgICBLZXlzW0tleXNbXCJzaGlmdFwiXSA9IDE2XSA9IFwic2hpZnRcIjtcbiAgICBLZXlzW0tleXNbXCJzcGFjZVwiXSA9IDMyXSA9IFwic3BhY2VcIjtcbiAgICBLZXlzW0tleXNbXCJlbmRcIl0gPSAzNV0gPSBcImVuZFwiO1xuICAgIEtleXNbS2V5c1tcImhvbWVcIl0gPSAzNl0gPSBcImhvbWVcIjtcbiAgICBLZXlzW0tleXNbXCJsZWZ0XCJdID0gMzddID0gXCJsZWZ0XCI7XG4gICAgS2V5c1tLZXlzW1widXBcIl0gPSAzOF0gPSBcInVwXCI7XG4gICAgS2V5c1tLZXlzW1wicmlnaHRcIl0gPSAzOV0gPSBcInJpZ2h0XCI7XG4gICAgS2V5c1tLZXlzW1wiZG93blwiXSA9IDQwXSA9IFwiZG93blwiO1xufSkoS2V5cyB8fCAoS2V5cyA9IHt9KSk7XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5jbGFzcyBOYXZpZ2F0aW9uU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IobG9jYWxpemF0aW9uKSB7XG4gICAgICAgIHRoaXMubG9jYWxpemF0aW9uID0gbG9jYWxpemF0aW9uO1xuICAgICAgICB0aGlzLmV4cGFuZHMgPSBuZXcgU3ViamVjdCQxKCk7XG4gICAgICAgIHRoaXMubW92ZXMgPSBuZXcgU3ViamVjdCQxKCk7XG4gICAgICAgIHRoaXMuY2hlY2tzID0gbmV3IFN1YmplY3QkMSgpO1xuICAgICAgICB0aGlzLnNlbGVjdHMgPSBuZXcgU3ViamVjdCQxKCk7XG4gICAgICAgIHRoaXMubmF2aWdhYmxlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hY3Rpb25zID0ge1xuICAgICAgICAgICAgW0tleXMudXBdOiAoKSA9PiB0aGlzLmFjdGl2YXRlKHRoaXMubW9kZWwuZmluZFByZXYodGhpcy5mb2N1c2FibGVJdGVtKSksXG4gICAgICAgICAgICBbS2V5cy5kb3duXTogKCkgPT4gdGhpcy5hY3RpdmF0ZSh0aGlzLm1vZGVsLmZpbmROZXh0KHRoaXMuZm9jdXNhYmxlSXRlbSkpLFxuICAgICAgICAgICAgW0tleXMubGVmdF06ICgpID0+ICh0aGlzLmV4cGFuZCh7XG4gICAgICAgICAgICAgICAgZXhwYW5kOiB0aGlzLmxvY2FsaXphdGlvbi5ydGwsXG4gICAgICAgICAgICAgICAgaW50ZXJjZXB0OiB0aGlzLmxvY2FsaXphdGlvbi5ydGwgPyB0aGlzLm1vdmVUb0NoaWxkIDogdGhpcy5tb3ZlVG9QYXJlbnRcbiAgICAgICAgICAgIH0pKSxcbiAgICAgICAgICAgIFtLZXlzLnJpZ2h0XTogKCkgPT4gKHRoaXMuZXhwYW5kKHtcbiAgICAgICAgICAgICAgICBleHBhbmQ6ICF0aGlzLmxvY2FsaXphdGlvbi5ydGwsXG4gICAgICAgICAgICAgICAgaW50ZXJjZXB0OiB0aGlzLmxvY2FsaXphdGlvbi5ydGwgPyB0aGlzLm1vdmVUb1BhcmVudCA6IHRoaXMubW92ZVRvQ2hpbGRcbiAgICAgICAgICAgIH0pKSxcbiAgICAgICAgICAgIFtLZXlzLmhvbWVdOiAoKSA9PiB0aGlzLmFjdGl2YXRlKHRoaXMubW9kZWwuZmlyc3ROb2RlKCkpLFxuICAgICAgICAgICAgW0tleXMuZW5kXTogKCkgPT4gdGhpcy5hY3RpdmF0ZSh0aGlzLm1vZGVsLmxhc3ROb2RlKCkpLFxuICAgICAgICAgICAgW0tleXMuZW50ZXJdOiAoKSA9PiB0aGlzLm5hdmlnYWJsZSAmJiB0aGlzLnNlbGVjdEluZGV4KG5vZGVJbmRleCh0aGlzLmFjdGl2ZUl0ZW0pKSxcbiAgICAgICAgICAgIFtLZXlzLnNwYWNlXTogKCkgPT4gdGhpcy5uYXZpZ2FibGUgJiYgdGhpcy5jaGVja0luZGV4KG5vZGVJbmRleCh0aGlzLmFjdGl2ZUl0ZW0pKVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmlzRm9jdXNlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9tb2RlbCA9IG5ldyBOYXZpZ2F0aW9uTW9kZWwoKTtcbiAgICAgICAgdGhpcy5tb3ZlVG9DaGlsZCA9IHRoaXMubW92ZVRvQ2hpbGQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5tb3ZlVG9QYXJlbnQgPSB0aGlzLm1vdmVUb1BhcmVudC5iaW5kKHRoaXMpO1xuICAgIH1cbiAgICBnZXQgbW9kZWwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tb2RlbDtcbiAgICB9XG4gICAgc2V0IG1vZGVsKG1vZGVsKSB7XG4gICAgICAgIHRoaXMuX21vZGVsID0gbW9kZWw7XG4gICAgfVxuICAgIGdldCBhY3RpdmVJbmRleCgpIHtcbiAgICAgICAgcmV0dXJuIG5vZGVJbmRleCh0aGlzLmFjdGl2ZUl0ZW0pIHx8IG51bGw7XG4gICAgfVxuICAgIGdldCBmb2N1c2FibGVJdGVtKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hY3RpdmVJdGVtIHx8IHRoaXMubW9kZWwuZmlyc3ROb2RlKCk7XG4gICAgfVxuICAgIGdldCBpc0FjdGl2ZUV4cGFuZGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hY3RpdmVJdGVtICYmIHRoaXMuYWN0aXZlSXRlbS5jaGlsZHJlbi5sZW5ndGggPiAwO1xuICAgIH1cbiAgICBhY3RpdmF0ZShpdGVtKSB7XG4gICAgICAgIGlmICghdGhpcy5uYXZpZ2FibGUgfHwgIWl0ZW0gfHwgdGhpcy5pc0FjdGl2ZShub2RlSW5kZXgoaXRlbSkpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc0ZvY3VzZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0gPSBpdGVtIHx8IHRoaXMuYWN0aXZlSXRlbTtcbiAgICAgICAgdGhpcy5ub3RpZnlNb3ZlKCk7XG4gICAgfVxuICAgIGFjdGl2YXRlUGFyZW50KGluZGV4KSB7XG4gICAgICAgIHRoaXMuYWN0aXZhdGUodGhpcy5tb2RlbC5maW5kUGFyZW50KGluZGV4KSk7XG4gICAgfVxuICAgIGFjdGl2YXRlSW5kZXgoaW5kZXgpIHtcbiAgICAgICAgaWYgKCFpbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWN0aXZhdGUodGhpcy5tb2RlbC5maW5kTm9kZShpbmRleCkpO1xuICAgIH1cbiAgICBhY3RpdmF0ZUNsb3Nlc3QoaW5kZXgpIHtcbiAgICAgICAgaWYgKCFpbmRleCB8fCBub2RlSW5kZXgodGhpcy5mb2N1c2FibGVJdGVtKSAhPT0gaW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0gPSB0aGlzLm1vZGVsLmNsb3Nlc3ROb2RlKGluZGV4KTtcbiAgICAgICAgdGhpcy5ub3RpZnlNb3ZlKCk7XG4gICAgfVxuICAgIGFjdGl2YXRlRm9jdXNhYmxlKCkge1xuICAgICAgICBpZiAodGhpcy5hY3RpdmVJdGVtKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hY3RpdmVJdGVtID0gdGhpcy5tb2RlbC5maXJzdE5vZGUoKTtcbiAgICAgICAgdGhpcy5ub3RpZnlNb3ZlKCk7XG4gICAgfVxuICAgIGRlYWN0aXZhdGUoKSB7XG4gICAgICAgIGlmICghdGhpcy5uYXZpZ2FibGUgfHwgIXRoaXMuaXNGb2N1c2VkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc0ZvY3VzZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5ub3RpZnlNb3ZlKCk7XG4gICAgfVxuICAgIGNoZWNrSW5kZXgoaW5kZXgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzRGlzYWJsZWQoaW5kZXgpKSB7XG4gICAgICAgICAgICB0aGlzLmNoZWNrcy5uZXh0KGluZGV4KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZWxlY3RJbmRleChpbmRleCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNEaXNhYmxlZChpbmRleCkpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0cy5uZXh0KGluZGV4KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpc0FjdGl2ZShpbmRleCkge1xuICAgICAgICBpZiAoIWluZGV4KSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuaXNGb2N1c2VkICYmIHRoaXMuYWN0aXZlSW5kZXggPT09IGluZGV4O1xuICAgIH1cbiAgICBpc0ZvY3VzYWJsZShpbmRleCkge1xuICAgICAgICByZXR1cm4gbm9kZUluZGV4KHRoaXMuZm9jdXNhYmxlSXRlbSkgPT09IGluZGV4O1xuICAgIH1cbiAgICBpc0Rpc2FibGVkKGluZGV4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1vZGVsLmZpbmROb2RlKGluZGV4KS5kaXNhYmxlZDtcbiAgICB9XG4gICAgcmVnaXN0ZXJJdGVtKGlkLCBpbmRleCwgZGlzYWJsZWQpIHtcbiAgICAgICAgdGhpcy5tb2RlbC5yZWdpc3Rlckl0ZW0oaWQsIGluZGV4LCBkaXNhYmxlZCk7XG4gICAgfVxuICAgIHVucmVnaXN0ZXJJdGVtKGlkLCBpbmRleCkge1xuICAgICAgICBpZiAodGhpcy5pc0FjdGl2ZShpbmRleCkpIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZhdGVQYXJlbnQoaW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubW9kZWwudW5yZWdpc3Rlckl0ZW0oaWQsIGluZGV4KTtcbiAgICB9XG4gICAgbW92ZShlKSB7XG4gICAgICAgIGlmICghdGhpcy5uYXZpZ2FibGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtb3ZlQWN0aW9uID0gdGhpcy5hY3Rpb25zW2Uua2V5Q29kZV07XG4gICAgICAgIGlmICghbW92ZUFjdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIG1vdmVBY3Rpb24oKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgICBleHBhbmQoeyBleHBhbmQsIGludGVyY2VwdCB9KSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gbm9kZUluZGV4KHRoaXMuYWN0aXZlSXRlbSk7XG4gICAgICAgIGlmICghaW5kZXggfHwgaW50ZXJjZXB0KGluZGV4KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubm90aWZ5RXhwYW5kKGV4cGFuZCk7XG4gICAgfVxuICAgIG1vdmVUb1BhcmVudCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNBY3RpdmVFeHBhbmRlZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWN0aXZhdGUodGhpcy5tb2RlbC5maW5kUGFyZW50KG5vZGVJbmRleCh0aGlzLmFjdGl2ZUl0ZW0pKSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBtb3ZlVG9DaGlsZCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzQWN0aXZlRXhwYW5kZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFjdGl2YXRlKHRoaXMubW9kZWwuZmluZENoaWxkKG5vZGVJbmRleCh0aGlzLmFjdGl2ZUl0ZW0pKSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBub3RpZnlFeHBhbmQoZXhwYW5kKSB7XG4gICAgICAgIHRoaXMuZXhwYW5kcy5uZXh0KHRoaXMubmF2aWdhdGlvblN0YXRlKGV4cGFuZCkpO1xuICAgIH1cbiAgICBub3RpZnlNb3ZlKCkge1xuICAgICAgICB0aGlzLm1vdmVzLm5leHQodGhpcy5uYXZpZ2F0aW9uU3RhdGUoKSk7XG4gICAgfVxuICAgIG5hdmlnYXRpb25TdGF0ZShleHBhbmQgPSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gKHsgZXhwYW5kLCBpbmRleDogbm9kZUluZGV4KHRoaXMuYWN0aXZlSXRlbSksIGlzRm9jdXNlZDogdGhpcy5pc0ZvY3VzZWQgfSk7XG4gICAgfVxufVxuTmF2aWdhdGlvblNlcnZpY2UuZGVjb3JhdG9ycyA9IFtcbiAgICB7IHR5cGU6IEluamVjdGFibGUgfSxcbl07XG4vKiogQG5vY29sbGFwc2UgKi9cbk5hdmlnYXRpb25TZXJ2aWNlLmN0b3JQYXJhbWV0ZXJzID0gKCkgPT4gW1xuICAgIHsgdHlwZTogTG9jYWxpemF0aW9uU2VydmljZSwgfSxcbl07XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5jbGFzcyBTZWxlY3Rpb25TZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VzID0gbmV3IFN1YmplY3QkMSgpO1xuICAgIH1cbiAgICBpc0ZpcnN0U2VsZWN0ZWQoaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmlyc3RJbmRleCA9PT0gaW5kZXg7XG4gICAgfVxuICAgIHNldEZpcnN0U2VsZWN0ZWQoaW5kZXgsIHNlbGVjdGVkKSB7XG4gICAgICAgIGlmICh0aGlzLmZpcnN0SW5kZXggPT09IGluZGV4ICYmIHNlbGVjdGVkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5maXJzdEluZGV4ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICghdGhpcy5maXJzdEluZGV4ICYmIHNlbGVjdGVkKSB7XG4gICAgICAgICAgICB0aGlzLmZpcnN0SW5kZXggPSBpbmRleDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZWxlY3QoaW5kZXgsIGRhdGFJdGVtKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlcy5uZXh0KHsgZGF0YUl0ZW0sIGluZGV4IH0pO1xuICAgIH1cbn1cblNlbGVjdGlvblNlcnZpY2UuZGVjb3JhdG9ycyA9IFtcbiAgICB7IHR5cGU6IEluamVjdGFibGUgfSxcbl07XG4vKiogQG5vY29sbGFwc2UgKi9cblNlbGVjdGlvblNlcnZpY2UuY3RvclBhcmFtZXRlcnMgPSAoKSA9PiBbXTtcblxuY29uc3QgSU5ERVhfUkVHRVggPSAvXFxkKyQvO1xuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmNsYXNzIFRyZWVWaWV3TG9va3VwU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubWFwID0gbmV3IE1hcCgpO1xuICAgIH1cbiAgICByZWdpc3Rlckl0ZW0oaXRlbSwgcGFyZW50KSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRMb29rdXAgPSB7XG4gICAgICAgICAgICBjaGlsZHJlbjogW10sXG4gICAgICAgICAgICBpdGVtLFxuICAgICAgICAgICAgcGFyZW50OiB0aGlzLml0ZW0obm9kZUluZGV4KHBhcmVudCkpXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMubWFwLnNldChpdGVtLmluZGV4LCBjdXJyZW50TG9va3VwKTtcbiAgICB9XG4gICAgcmVnaXN0ZXJDaGlsZHJlbihpbmRleCwgY2hpbGRyZW4pIHtcbiAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMuaXRlbShpbmRleCk7XG4gICAgICAgIGlmICghaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGl0ZW0uY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgICB9XG4gICAgdW5yZWdpc3Rlckl0ZW0oaW5kZXgsIGRhdGFJdGVtKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnQgPSB0aGlzLml0ZW0oaW5kZXgpO1xuICAgICAgICBpZiAoY3VycmVudCAmJiBjdXJyZW50Lml0ZW0uZGF0YUl0ZW0gPT09IGRhdGFJdGVtKSB7XG4gICAgICAgICAgICB0aGlzLm1hcC5kZWxldGUoaW5kZXgpO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnQucGFyZW50ICYmIGN1cnJlbnQucGFyZW50LmNoaWxkcmVuKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudC5wYXJlbnQuY2hpbGRyZW4gPSBjdXJyZW50LnBhcmVudC5jaGlsZHJlbi5maWx0ZXIoaXRlbSA9PiBpdGVtLmRhdGFJdGVtICE9PSBkYXRhSXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVwbGFjZUl0ZW0oaW5kZXgsIGl0ZW0sIHBhcmVudCkge1xuICAgICAgICBpZiAoIWl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVucmVnaXN0ZXJJdGVtKGluZGV4LCBpdGVtLmRhdGFJdGVtKTtcbiAgICAgICAgdGhpcy5yZWdpc3Rlckl0ZW0oaXRlbSwgcGFyZW50KTtcbiAgICAgICAgdGhpcy5hZGRUb1BhcmVudChpdGVtLCBwYXJlbnQpO1xuICAgIH1cbiAgICBpdGVtTG9va3VwKGluZGV4KSB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLml0ZW0oaW5kZXgpO1xuICAgICAgICBpZiAoIWl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjaGlsZHJlbjogdGhpcy5tYXBDaGlsZHJlbihpdGVtLmNoaWxkcmVuKSxcbiAgICAgICAgICAgIGl0ZW06IGl0ZW0uaXRlbSxcbiAgICAgICAgICAgIHBhcmVudDogaXRlbS5wYXJlbnRcbiAgICAgICAgfTtcbiAgICB9XG4gICAgaGFzSXRlbShpbmRleCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tYXAuaGFzKGluZGV4KTtcbiAgICB9XG4gICAgaXRlbShpbmRleCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tYXAuZ2V0KGluZGV4KSB8fCBudWxsO1xuICAgIH1cbiAgICBhZGRUb1BhcmVudChpdGVtLCBwYXJlbnQpIHtcbiAgICAgICAgaWYgKHBhcmVudCkge1xuICAgICAgICAgICAgY29uc3QgcGFyZW50SXRlbSA9IHRoaXMuaXRlbShwYXJlbnQuaW5kZXgpO1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBwYXJzZUludChJTkRFWF9SRUdFWC5leGVjKGl0ZW0uaW5kZXgpWzBdLCAxMCk7XG4gICAgICAgICAgICBwYXJlbnRJdGVtLmNoaWxkcmVuID0gcGFyZW50SXRlbS5jaGlsZHJlbiB8fCBbXTtcbiAgICAgICAgICAgIHBhcmVudEl0ZW0uY2hpbGRyZW4uc3BsaWNlKGluZGV4LCAwLCBpdGVtKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBtYXBDaGlsZHJlbihjaGlsZHJlbiA9IFtdKSB7XG4gICAgICAgIHJldHVybiBjaGlsZHJlbi5tYXAoYyA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IGl0ZW0sIHBhcmVudCwgY2hpbGRyZW4gfSA9IHRoaXMuaXRlbShjLmluZGV4KTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IHRoaXMubWFwQ2hpbGRyZW4oY2hpbGRyZW4pLFxuICAgICAgICAgICAgICAgIGl0ZW0sXG4gICAgICAgICAgICAgICAgcGFyZW50XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9XG59XG5UcmVlVmlld0xvb2t1cFNlcnZpY2UuZGVjb3JhdG9ycyA9IFtcbiAgICB7IHR5cGU6IEluamVjdGFibGUgfSxcbl07XG4vKiogQG5vY29sbGFwc2UgKi9cblRyZWVWaWV3TG9va3VwU2VydmljZS5jdG9yUGFyYW1ldGVycyA9ICgpID0+IFtdO1xuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuY29uc3QgaGFzQ2hpbGRyZW4gPSAoKSA9PiBmYWxzZTtcbi8qKlxuICogQGhpZGRlblxuICovXG5jb25zdCBpc0NoZWNrZWQgPSAoKSA9PiAnbm9uZSc7XG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuY29uc3QgaXNEaXNhYmxlZCA9ICgpID0+IGZhbHNlO1xuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmNvbnN0IGlzRXhwYW5kZWQgPSAoKSA9PiB0cnVlO1xuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmNvbnN0IGlzU2VsZWN0ZWQgPSAoKSA9PiBmYWxzZTtcblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmNsYXNzIERhdGFDaGFuZ2VOb3RpZmljYXRpb25TZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VzID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIH1cbiAgICBub3RpZnkoKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlcy5lbWl0KCk7XG4gICAgfVxufVxuXG4vKiB0c2xpbnQ6ZGlzYWJsZTptZW1iZXItb3JkZXJpbmcgKi9cbmNvbnN0IHByb3ZpZGVycyA9IFtcbiAgICBFeHBhbmRTdGF0ZVNlcnZpY2UsXG4gICAgSW5kZXhCdWlsZGVyU2VydmljZSxcbiAgICBUcmVlVmlld0xvb2t1cFNlcnZpY2UsXG4gICAgTG9hZGluZ05vdGlmaWNhdGlvblNlcnZpY2UsXG4gICAgTm9kZUNoaWxkcmVuU2VydmljZSxcbiAgICBOYXZpZ2F0aW9uU2VydmljZSxcbiAgICBTZWxlY3Rpb25TZXJ2aWNlLFxuICAgIERhdGFDaGFuZ2VOb3RpZmljYXRpb25TZXJ2aWNlLFxuICAgIExvY2FsaXphdGlvblNlcnZpY2UsXG4gICAge1xuICAgICAgICBwcm92aWRlOiBMMTBOX1BSRUZJWCxcbiAgICAgICAgdXNlVmFsdWU6ICdrZW5kby50cmVldmlldydcbiAgICB9XG5dO1xuLyoqXG4gKiBSZXByZXNlbnRzIHRoZSBbS2VuZG8gVUkgVHJlZVZpZXcgY29tcG9uZW50IGZvciBBbmd1bGFyXSh7JSBzbHVnIG92ZXJ2aWV3X3RyZWV2aWV3ICV9KS5cbiAqXG4gKiBAZXhhbXBsZVxuICogeyUgbWV0YSBoZWlnaHQ6MzUwICV9XG4gKiBgYGB0cy1wcmV2aWV3XG4gKiBpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbiAqXG4gKiAgX0BDb21wb25lbnQoe1xuICogICAgICBzZWxlY3RvcjogJ215LWFwcCcsXG4gKiAgICAgIHRlbXBsYXRlOiBgXG4gKiAgICAgIDxrZW5kby10cmVldmlld1xuICogICAgICAgICAgW25vZGVzXT1cImRhdGFcIlxuICogICAgICAgICAgdGV4dEZpZWxkPVwidGV4dFwiXG4gKiAgICAgICAgICBrZW5kb1RyZWVWaWV3Q2hlY2thYmxlXG4gKiAgICAgICAgICBrZW5kb1RyZWVWaWV3RXhwYW5kYWJsZVxuICogICAgICAgICAga2VuZG9UcmVlVmlld1NlbGVjdGFibGVcbiAqXG4gKiAgICAgICAgICBrZW5kb1RyZWVWaWV3SGllcmFyY2h5QmluZGluZ1xuICogICAgICAgICAgY2hpbGRyZW5GaWVsZD1cIml0ZW1zXCI+XG4gKiAgICAgIDwva2VuZG8tdHJlZXZpZXc+XG4gKiAgYFxuICogIH0pXG4gKiAgZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gKiAgICAgIHB1YmxpYyBkYXRhOiBhbnlbXSA9IFtcbiAqICAgICAgICAgIHtcbiAqICAgICAgICAgICAgICB0ZXh0OiBcIkZ1cm5pdHVyZVwiLCBpdGVtczogW1xuICogICAgICAgICAgICAgICAgICB7IHRleHQ6IFwiVGFibGVzICYgQ2hhaXJzXCIgfSxcbiAqICAgICAgICAgICAgICAgICAgeyB0ZXh0OiBcIlNvZmFzXCIgfSxcbiAqICAgICAgICAgICAgICAgICAgeyB0ZXh0OiBcIk9jY2FzaW9uYWwgRnVybml0dXJlXCIgfVxuICogICAgICAgICAgICAgIF1cbiAqICAgICAgICAgIH0sXG4gKiAgICAgICAgICB7XG4gKiAgICAgICAgICAgICAgdGV4dDogXCJEZWNvclwiLCBpdGVtczogW1xuICogICAgICAgICAgICAgICAgICB7IHRleHQ6IFwiQmVkIExpbmVuXCIgfSxcbiAqICAgICAgICAgICAgICAgICAgeyB0ZXh0OiBcIkN1cnRhaW5zICYgQmxpbmRzXCIgfSxcbiAqICAgICAgICAgICAgICAgICAgeyB0ZXh0OiBcIkNhcnBldHNcIiB9XG4gKiAgICAgICAgICAgICAgXVxuICogICAgICAgICAgfVxuICogICAgICBdO1xuICogIH1cbiAqIGBgYFxuICogeyUgZW5kbWV0YSAlfVxuICovXG5jbGFzcyBUcmVlVmlld0NvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoZXhwYW5kU2VydmljZSwgbmF2aWdhdGlvblNlcnZpY2UsIG5vZGVDaGlsZHJlblNlcnZpY2UsIHNlbGVjdGlvblNlcnZpY2UsIHRyZWVWaWV3TG9va3VwU2VydmljZSwgbmdab25lLCByZW5kZXJlciwgZWxlbWVudCwgZGF0YUNoYW5nZU5vdGlmaWNhdGlvbiwgbG9jYWxpemF0aW9uKSB7XG4gICAgICAgIHRoaXMuZXhwYW5kU2VydmljZSA9IGV4cGFuZFNlcnZpY2U7XG4gICAgICAgIHRoaXMubmF2aWdhdGlvblNlcnZpY2UgPSBuYXZpZ2F0aW9uU2VydmljZTtcbiAgICAgICAgdGhpcy5ub2RlQ2hpbGRyZW5TZXJ2aWNlID0gbm9kZUNoaWxkcmVuU2VydmljZTtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25TZXJ2aWNlID0gc2VsZWN0aW9uU2VydmljZTtcbiAgICAgICAgdGhpcy50cmVlVmlld0xvb2t1cFNlcnZpY2UgPSB0cmVlVmlld0xvb2t1cFNlcnZpY2U7XG4gICAgICAgIHRoaXMubmdab25lID0gbmdab25lO1xuICAgICAgICB0aGlzLnJlbmRlcmVyID0gcmVuZGVyZXI7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMuZGF0YUNoYW5nZU5vdGlmaWNhdGlvbiA9IGRhdGFDaGFuZ2VOb3RpZmljYXRpb247XG4gICAgICAgIHRoaXMubG9jYWxpemF0aW9uID0gbG9jYWxpemF0aW9uO1xuICAgICAgICB0aGlzLmNsYXNzTmFtZXMgPSB0cnVlO1xuICAgICAgICAvKiogQGhpZGRlbiAqL1xuICAgICAgICB0aGlzLmZldGNoTm9kZXMgPSAoKSA9PiB0aGlzLmRhdGE7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBGaXJlcyB3aGVuIHRoZSBjaGlsZHJlbiBvZiB0aGUgZXhwYW5kZWQgbm9kZSBhcmUgbG9hZGVkLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5jaGlsZHJlbkxvYWRlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZpcmVzIHdoZW4gdGhlIHVzZXIgYmx1cnMgdGhlIGNvbXBvbmVudC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMub25CbHVyID0gbmV3IEV2ZW50RW1pdHRlcigpOyAvL3RzbGludDpkaXNhYmxlLWxpbmU6bm8tb3V0cHV0LXJlbmFtZVxuICAgICAgICAvKipcbiAgICAgICAgICogRmlyZXMgd2hlbiB0aGUgdXNlciBmb2N1c2VzIHRoZSBjb21wb25lbnQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm9uRm9jdXMgPSBuZXcgRXZlbnRFbWl0dGVyKCk7IC8vdHNsaW50OmRpc2FibGUtbGluZTpuby1vdXRwdXQtcmVuYW1lXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBGaXJlcyB3aGVuIHRoZSB1c2VyIGV4cGFuZHMgYSBUcmVlVmlldyBub2RlLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5leHBhbmQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBGaXJlcyB3aGVuIHRoZSB1c2VyIGNvbGxhcHNlcyBhIFRyZWVWaWV3IG5vZGUuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmNvbGxhcHNlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgICAgICAvKipcbiAgICAgICAgICogRmlyZXMgd2hlbiB0aGUgdXNlciBzZWxlY3RzIGEgVHJlZVZpZXcgbm9kZSBjaGVja2JveFxuICAgICAgICAgKiAoW3NlZSBleGFtcGxlXSh7JSBzbHVnIGNoZWNrYm94ZXNfdHJlZXZpZXcgJX0jdG9jLW1vZGlmeWluZy10aGUtY2hlY2tlZC1zdGF0ZSkpLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5jaGVja2VkQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgICAgICAvKipcbiAgICAgICAgICogRmlyZXMgd2hlbiB0aGUgdXNlciBzZWxlY3RzIGEgVHJlZVZpZXcgbm9kZVxuICAgICAgICAgKiAoW3NlZSBleGFtcGxlXSh7JSBzbHVnIHNlbGVjdGlvbl90cmVldmlldyAlfSN0b2MtbW9kaWZ5aW5nLXRoZS1zZWxlY3Rpb24pKS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgICAgICAvKipcbiAgICAgICAgICogRmlyZXMgd2hlbiB0aGUgdXNlciBjbGlja3MgYSBUcmVlVmlldyBub2RlLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5ub2RlQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBGaXJlcyB3aGVuIHRoZSB1c2VyIGRvdWJsZSBjbGlja3MgYSBUcmVlVmlldyBub2RlLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5ub2RlRGJsQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIGZ1bmN0aW9uIHdoaWNoIGRldGVybWluZXMgaWYgYSBzcGVjaWZpYyBub2RlIGlzIGRpc2FibGVkLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5pc0Rpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIERldGVybWluZXMgd2hldGhlciB0aGUgVHJlZVZpZXcga2V5Ym9hcmQgbmF2aWdhYmxlIGlzIGVuYWJsZWQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm5hdmlnYWJsZSA9IHRydWU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIGZ1bmN0aW9uIHdoaWNoIHByb3ZpZGVzIHRoZSBjaGlsZCBub2RlcyBmb3IgYSBnaXZlbiBwYXJlbnQgbm9kZVxuICAgICAgICAgKiAoW3NlZSBleGFtcGxlXSh7JSBzbHVnIGRhdGFiaW5kaW5nX3RyZWV2aWV3ICV9KSkuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmNoaWxkcmVuID0gKCkgPT4gb2YkMShbXSk7XG4gICAgICAgIHRoaXMuY2hlY2tib3hlcyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmV4cGFuZEljb25zID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kYXRhID0gbmV3IEJlaGF2aW9yU3ViamVjdCQxKFtdKTtcbiAgICAgICAgdGhpcy5fYW5pbWF0ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucyA9IG5ldyBTdWJzY3JpcHRpb24kMSgoKSA9PiB7IH0pO1xuICAgICAgICB0aGlzLmRvbVN1YnNjcmlwdGlvbnMgPSBbXTtcbiAgICB9XG4gICAgZ2V0IHJvbGUoKSB7IHJldHVybiAndHJlZSc7IH1cbiAgICAvKiogQGhpZGRlbiAqL1xuICAgIGdldCBkaXJlY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvY2FsaXphdGlvbi5ydGwgPyAncnRsJyA6ICdsdHInO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGNvbnRlbnQgYW5pbWF0aW9uIGlzIGVuYWJsZWQuXG4gICAgICovXG4gICAgc2V0IGFuaW1hdGUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fYW5pbWF0ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgYW5pbWF0ZSgpIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLl9hbmltYXRlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUaGUgbm9kZXMgd2hpY2ggd2lsbCBiZSBkaXNwbGF5ZWQgYnkgdGhlIFRyZWVWaWV3XG4gICAgICogKFtzZWUgZXhhbXBsZV0oeyUgc2x1ZyBkYXRhYmluZGluZ190cmVldmlldyAlfSkpLlxuICAgICAqL1xuICAgIHNldCBub2Rlcyh2YWx1ZSkge1xuICAgICAgICB0aGlzLmRhdGFDaGFuZ2VOb3RpZmljYXRpb24ubm90aWZ5KCk7XG4gICAgICAgIHRoaXMuZGF0YS5uZXh0KHZhbHVlKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQSBmdW5jdGlvbiB3aGljaCBkZXRlcm1pbmVzIGlmIGEgc3BlY2lmaWMgbm9kZSBoYXMgY2hpbGQgbm9kZXNcbiAgICAgKiAoW3NlZSBleGFtcGxlXSh7JSBzbHVnIGRhdGFiaW5kaW5nX3RyZWV2aWV3ICV9KSkuXG4gICAgICovXG4gICAgZ2V0IGhhc0NoaWxkcmVuKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faGFzQ2hpbGRyZW4gfHwgaGFzQ2hpbGRyZW47XG4gICAgfVxuICAgIHNldCBoYXNDaGlsZHJlbihjYWxsYmFjaykge1xuICAgICAgICB0aGlzLl9oYXNDaGlsZHJlbiA9IGNhbGxiYWNrO1xuICAgICAgICB0aGlzLmV4cGFuZEljb25zID0gQm9vbGVhbih0aGlzLl9pc0V4cGFuZGVkICYmIHRoaXMuX2hhc0NoaWxkcmVuKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQSBmdW5jdGlvbiB3aGljaCBkZXRlcm1pbmVzIGlmIGEgc3BlY2lmaWMgbm9kZSBpcyBzZWxlY3RlZFxuICAgICAqIChbc2VlIGV4YW1wbGVdKHslIHNsdWcgY2hlY2tib3hlc190cmVldmlldyAlfSN0b2MtbW9kaWZ5aW5nLXRoZS1jaGVja2VkLXN0YXRlKSkuXG4gICAgICovXG4gICAgZ2V0IGlzQ2hlY2tlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzQ2hlY2tlZCB8fCBpc0NoZWNrZWQ7XG4gICAgfVxuICAgIHNldCBpc0NoZWNrZWQoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5faXNDaGVja2VkID0gY2FsbGJhY2s7XG4gICAgICAgIHRoaXMuY2hlY2tib3hlcyA9IEJvb2xlYW4odGhpcy5faXNDaGVja2VkKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQSBmdW5jdGlvbiB3aGljaCBkZXRlcm1pbmVzIGlmIGEgc3BlY2lmaWMgbm9kZSBpcyBleHBhbmRlZC5cbiAgICAgKi9cbiAgICBnZXQgaXNFeHBhbmRlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzRXhwYW5kZWQgfHwgaXNFeHBhbmRlZDtcbiAgICB9XG4gICAgc2V0IGlzRXhwYW5kZWQoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5faXNFeHBhbmRlZCA9IGNhbGxiYWNrO1xuICAgICAgICB0aGlzLmV4cGFuZEljb25zID0gQm9vbGVhbih0aGlzLl9pc0V4cGFuZGVkICYmIHRoaXMuX2hhc0NoaWxkcmVuKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQSBmdW5jdGlvbiB3aGljaCBkZXRlcm1pbmVzIGlmIGEgc3BlY2lmaWMgbm9kZSBpcyBzZWxlY3RlZFxuICAgICAqIChbc2VlIGV4YW1wbGVdKHslIHNsdWcgc2VsZWN0aW9uX3RyZWV2aWV3ICV9I3RvYy1tb2RpZnlpbmctdGhlLXNlbGVjdGlvbikpLlxuICAgICAqL1xuICAgIGdldCBpc1NlbGVjdGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNTZWxlY3RlZCB8fCBpc1NlbGVjdGVkO1xuICAgIH1cbiAgICBzZXQgaXNTZWxlY3RlZChjYWxsYmFjaykge1xuICAgICAgICB0aGlzLl9pc1NlbGVjdGVkID0gY2FsbGJhY2s7XG4gICAgfVxuICAgIG5nT25DaGFuZ2VzKF8pIHtcbiAgICAgICAgdGhpcy5uYXZpZ2F0aW9uU2VydmljZS5uYXZpZ2FibGUgPSBCb29sZWFuKHRoaXMubmF2aWdhYmxlKTtcbiAgICB9XG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy51bnN1YnNjcmliZSgpO1xuICAgICAgICB0aGlzLmRvbVN1YnNjcmlwdGlvbnMuZm9yRWFjaChzdWJzY3JpcHRpb24gPT4gc3Vic2NyaXB0aW9uKCkpO1xuICAgIH1cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLmFkZCh0aGlzLm5vZGVDaGlsZHJlblNlcnZpY2VcbiAgICAgICAgICAgIC5jaGFuZ2VzXG4gICAgICAgICAgICAuc3Vic2NyaWJlKCh4KSA9PiB0aGlzLmNoaWxkcmVuTG9hZGVkLmVtaXQoeCkpKTtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLmFkZCh0aGlzLmV4cGFuZFNlcnZpY2UuY2hhbmdlc1xuICAgICAgICAgICAgLnN1YnNjcmliZSgoeyBpbmRleCwgZGF0YUl0ZW0sIGV4cGFuZCB9KSA9PiBleHBhbmRcbiAgICAgICAgICAgID8gdGhpcy5leHBhbmQuZW1pdCh7IGluZGV4LCBkYXRhSXRlbSB9KVxuICAgICAgICAgICAgOiB0aGlzLmNvbGxhcHNlLmVtaXQoeyBpbmRleCwgZGF0YUl0ZW0gfSkpKTtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLmFkZCh0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLmNoZWNrc1xuICAgICAgICAgICAgLnN1YnNjcmliZSgoeCkgPT4gdGhpcy5jaGVja2VkQ2hhbmdlLmVtaXQodGhpcy50cmVlVmlld0xvb2t1cFNlcnZpY2UuaXRlbUxvb2t1cCh4KSkpKTtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLmFkZCh0aGlzLnNlbGVjdGlvblNlcnZpY2UuY2hhbmdlc1xuICAgICAgICAgICAgLnN1YnNjcmliZSgoeCkgPT4ge1xuICAgICAgICAgICAgaWYgKGhhc09ic2VydmVycyh0aGlzLnNlbGVjdGlvbkNoYW5nZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZS5lbWl0KHgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KSk7XG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmF0dGFjaERvbUhhbmRsZXJzKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBCbHVycyB0aGUgZm9jdXNlZCBUcmVlVmlldyBpdGVtLlxuICAgICAqL1xuICAgIGJsdXIoKSB7XG4gICAgICAgIGlmICghaXNEb2N1bWVudEF2YWlsYWJsZSgpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZm9jdXNhYmxlTm9kZSh0aGlzLmVsZW1lbnQpO1xuICAgICAgICBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gdGFyZ2V0KSB7XG4gICAgICAgICAgICB0YXJnZXQuYmx1cigpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEZvY3VzZXMgdGhlIGZpcnN0IGZvY3VzYWJsZSBpdGVtIGluIHRoZSBUcmVlVmlldyBjb21wb25lbnQgaWYgbm8gaGllcmFyY2hpY2FsIGluZGV4IGlzIHByb3ZpZGVkLlxuICAgICAqXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBgYGB0c1xuICAgICAqIGltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuICAgICAqXG4gICAgICogIEBDb21wb25lbnQoe1xuICAgICAqICAgICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgICAqICAgICAgdGVtcGxhdGU6IGBcbiAgICAgKiAgICAgIDxidXR0b24gKGNsaWNrKT1cInRyZWV2aWV3LmZvY3VzKCcxJylcIj5Gb2N1c2VzIHRoZSBzZWNvbmQgbm9kZTwvYnV0dG9uPlxuICAgICAqICAgICAgPGtlbmRvLXRyZWV2aWV3XG4gICAgICogICAgICAgICAgI3RyZWV2aWV3XG4gICAgICogICAgICAgICAgW25vZGVzXT1cImRhdGFcIlxuICAgICAqICAgICAgICAgIHRleHRGaWVsZD1cInRleHRcIlxuICAgICAqICAgICAgPlxuICAgICAqICAgICAgPC9rZW5kby10cmVldmlldz5cbiAgICAgKiAgYFxuICAgICAqICB9KVxuICAgICAqICBleHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgICAgKiAgICAgIHB1YmxpYyBkYXRhOiBhbnlbXSA9IFtcbiAgICAgKiAgICAgICAgICB7IHRleHQ6IFwiRnVybml0dXJlXCIgfSxcbiAgICAgKiAgICAgICAgICB7IHRleHQ6IFwiRGVjb3JcIiB9XG4gICAgICogICAgICBdO1xuICAgICAqICB9XG4gICAgICogYGBgXG4gICAgICovXG4gICAgZm9jdXMoaW5kZXgpIHtcbiAgICAgICAgdGhpcy5uYXZpZ2F0aW9uU2VydmljZS5hY3RpdmF0ZUluZGV4KGluZGV4KTtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZm9jdXNhYmxlTm9kZSh0aGlzLmVsZW1lbnQpO1xuICAgICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgICAgICB0YXJnZXQuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBCYXNlZCBvbiB0aGUgc3BlY2lmaWVkIGluZGV4LCByZXR1cm5zIHRoZSBUcmVlSXRlbUxvb2t1cCBub2RlLlxuICAgICAqXG4gICAgICogQHBhcmFtIGluZGV4IC0gVGhlIGluZGV4IG9mIHRoZSBub2RlLlxuICAgICAqIEByZXR1cm5zIHtUcmVlSXRlbUxvb2t1cH0gLSBUaGUgaXRlbSB0aGF0IHdhcyBzZWFyY2hlZCAobG9va2VkIHVwKS5cbiAgICAgKi9cbiAgICBpdGVtTG9va3VwKGluZGV4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRyZWVWaWV3TG9va3VwU2VydmljZS5pdGVtTG9va3VwKGluZGV4KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIGlzRGlzYWJsZWROb2RlKG5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmF2aWdhdGlvblNlcnZpY2UuaXNEaXNhYmxlZChub2RlLml0ZW0uaW5kZXgpO1xuICAgIH1cbiAgICBhdHRhY2hEb21IYW5kbGVycygpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICAgICAgICB0aGlzLmNsaWNrSGFuZGxlciA9IHRoaXMuY2xpY2tIYW5kbGVyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZG9tU3Vic2NyaXB0aW9ucy5wdXNoKHRoaXMucmVuZGVyZXIubGlzdGVuKGVsZW1lbnQsICdjb250ZXh0bWVudScsIHRoaXMuY2xpY2tIYW5kbGVyKSwgdGhpcy5yZW5kZXJlci5saXN0ZW4oZWxlbWVudCwgJ2NsaWNrJywgdGhpcy5jbGlja0hhbmRsZXIpLCB0aGlzLnJlbmRlcmVyLmxpc3RlbihlbGVtZW50LCAnZGJsY2xpY2snLCB0aGlzLmNsaWNrSGFuZGxlciksIHRoaXMucmVuZGVyZXIubGlzdGVuKGVsZW1lbnQsICdmb2N1c2luJywgdGhpcy5mb2N1c0hhbmRsZXIuYmluZCh0aGlzKSksIHRoaXMucmVuZGVyZXIubGlzdGVuKGVsZW1lbnQsICdmb2N1c291dCcsIHRoaXMuYmx1ckhhbmRsZXIuYmluZCh0aGlzKSksIHRoaXMucmVuZGVyZXIubGlzdGVuKGVsZW1lbnQsICdrZXlkb3duJywgdGhpcy5rZXlkb3duSGFuZGxlci5iaW5kKHRoaXMpKSk7XG4gICAgfVxuICAgIGZvY3VzSGFuZGxlcihlKSB7XG4gICAgICAgIGxldCBmb2N1c0l0ZW07XG4gICAgICAgIGlmIChtYXRjaChlLnRhcmdldCwgJy5rLXRyZWV2aWV3LWl0ZW0nKSkge1xuICAgICAgICAgICAgZm9jdXNJdGVtID0gZS50YXJnZXQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIWlzRm9jdXNhYmxlKGUudGFyZ2V0KSkge1xuICAgICAgICAgICAgZm9jdXNJdGVtID0gY2xvc2VzdE5vZGUoZS50YXJnZXQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmb2N1c0l0ZW0pIHtcbiAgICAgICAgICAgIHRoaXMubmF2aWdhdGlvblNlcnZpY2UuYWN0aXZhdGVJbmRleChub2RlSWQoZS50YXJnZXQpKTtcbiAgICAgICAgICAgIGlmICghdGhpcy5pc0FjdGl2ZSAmJiBoYXNPYnNlcnZlcnModGhpcy5vbkZvY3VzKSkge1xuICAgICAgICAgICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25Gb2N1cy5lbWl0KCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBibHVySGFuZGxlcihlKSB7XG4gICAgICAgIGlmICh0aGlzLmlzQWN0aXZlICYmIG1hdGNoKGUudGFyZ2V0LCAnLmstdHJlZXZpZXctaXRlbScpICYmXG4gICAgICAgICAgICAoIWUucmVsYXRlZFRhcmdldCB8fCAhbWF0Y2goZS5yZWxhdGVkVGFyZ2V0LCAnLmstdHJlZXZpZXctaXRlbScpIHx8ICFoYXNQYXJlbnQoZS5yZWxhdGVkVGFyZ2V0LCB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCkpKSB7XG4gICAgICAgICAgICB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLmRlYWN0aXZhdGUoKTtcbiAgICAgICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmIChoYXNPYnNlcnZlcnModGhpcy5vbkJsdXIpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkJsdXIuZW1pdCgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGNsaWNrSGFuZGxlcihlKSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xuICAgICAgICBpZiAoKGUudHlwZSA9PT0gJ2NvbnRleHRtZW51JyAmJiAhaGFzT2JzZXJ2ZXJzKHRoaXMubm9kZUNsaWNrKSkgfHxcbiAgICAgICAgICAgIChlLnR5cGUgPT09ICdjbGljaycgJiYgIWhhc09ic2VydmVycyh0aGlzLm5vZGVDbGljaykgJiYgIWhhc09ic2VydmVycyh0aGlzLnNlbGVjdGlvbkNoYW5nZSkpIHx8XG4gICAgICAgICAgICAoZS50eXBlID09PSAnZGJsY2xpY2snICYmICFoYXNPYnNlcnZlcnModGhpcy5ub2RlRGJsQ2xpY2spKSB8fCBpc0ZvY3VzYWJsZSh0YXJnZXQpIHx8XG4gICAgICAgICAgICAhaXNDb250ZW50KHRhcmdldCkgfHwgIWhhc1BhcmVudCh0YXJnZXQsIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGluZGV4ID0gbm9kZUlkKGNsb3Nlc3ROb2RlKHRhcmdldCkpO1xuICAgICAgICAvLyB0aGUgZGlzYWJsZWQgY2hlY2sgaXMgcHJvYmFibHkgbm90IG5lZWRlZCBkdWUgdG8gdGhlIGstc3RhdGUtZGlzYWJsZWQgc3R5bGVzXG4gICAgICAgIGlmICghaW5kZXggfHwgdGhpcy5uYXZpZ2F0aW9uU2VydmljZS5pc0Rpc2FibGVkKGluZGV4KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsb29rdXAgPSB0aGlzLnRyZWVWaWV3TG9va3VwU2VydmljZS5pdGVtTG9va3VwKGluZGV4KTtcbiAgICAgICAgICAgIGlmIChlLnR5cGUgPT09ICdjbGljaycpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLnNlbGVjdEluZGV4KGluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGVtaXR0ZXIgPSBlLnR5cGUgPT09ICdkYmxjbGljaycgPyB0aGlzLm5vZGVEYmxDbGljayA6IHRoaXMubm9kZUNsaWNrO1xuICAgICAgICAgICAgZW1pdHRlci5lbWl0KHtcbiAgICAgICAgICAgICAgICBpdGVtOiBsb29rdXAuaXRlbSxcbiAgICAgICAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBlLFxuICAgICAgICAgICAgICAgIHR5cGU6IGUudHlwZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBrZXlkb3duSGFuZGxlcihlKSB7XG4gICAgICAgIGlmICh0aGlzLmlzQWN0aXZlICYmIHRoaXMubmF2aWdhYmxlKSB7XG4gICAgICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmF2aWdhdGlvblNlcnZpY2UubW92ZShlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuVHJlZVZpZXdDb21wb25lbnQuZGVjb3JhdG9ycyA9IFtcbiAgICB7IHR5cGU6IENvbXBvbmVudCwgYXJnczogW3tcbiAgICAgICAgICAgICAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LkRlZmF1bHQsXG4gICAgICAgICAgICAgICAgZXhwb3J0QXM6ICdrZW5kb1RyZWVWaWV3JyxcbiAgICAgICAgICAgICAgICBwcm92aWRlcnM6IHByb3ZpZGVycyxcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2tlbmRvLXRyZWV2aWV3JyxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogYFxuICAgIDx1bCBjbGFzcz1cImstdHJlZXZpZXctbGluZXNcIlxuICAgICAga2VuZG9UcmVlVmlld0dyb3VwXG4gICAgICByb2xlPVwiZ3JvdXBcIlxuICAgICAgW2NoZWNrYm94ZXNdPVwiY2hlY2tib3hlc1wiXG4gICAgICBbZXhwYW5kSWNvbnNdPVwiZXhwYW5kSWNvbnNcIlxuICAgICAgW2NoaWxkcmVuXT1cImNoaWxkcmVuXCJcbiAgICAgIFtoYXNDaGlsZHJlbl09XCJoYXNDaGlsZHJlblwiXG4gICAgICBbaXNDaGVja2VkXT1cImlzQ2hlY2tlZFwiXG4gICAgICBbaXNEaXNhYmxlZF09XCJpc0Rpc2FibGVkXCJcbiAgICAgIFtpc0V4cGFuZGVkXT1cImlzRXhwYW5kZWRcIlxuICAgICAgW2lzU2VsZWN0ZWRdPVwiaXNTZWxlY3RlZFwiXG4gICAgICBbbm9kZVRlbXBsYXRlUmVmXT1cIm5vZGVUZW1wbGF0ZT8udGVtcGxhdGVSZWZcIlxuICAgICAgW3RleHRGaWVsZF09XCJ0ZXh0RmllbGRcIlxuICAgICAgW25vZGVzXT1cImZldGNoTm9kZXNcIlxuICAgICAgPlxuICAgIDwvdWw+XG4gIGBcbiAgICAgICAgICAgIH0sXSB9LFxuXTtcbi8qKiBAbm9jb2xsYXBzZSAqL1xuVHJlZVZpZXdDb21wb25lbnQuY3RvclBhcmFtZXRlcnMgPSAoKSA9PiBbXG4gICAgeyB0eXBlOiBFeHBhbmRTdGF0ZVNlcnZpY2UsIH0sXG4gICAgeyB0eXBlOiBOYXZpZ2F0aW9uU2VydmljZSwgfSxcbiAgICB7IHR5cGU6IE5vZGVDaGlsZHJlblNlcnZpY2UsIH0sXG4gICAgeyB0eXBlOiBTZWxlY3Rpb25TZXJ2aWNlLCB9LFxuICAgIHsgdHlwZTogVHJlZVZpZXdMb29rdXBTZXJ2aWNlLCB9LFxuICAgIHsgdHlwZTogTmdab25lLCB9LFxuICAgIHsgdHlwZTogUmVuZGVyZXIyLCB9LFxuICAgIHsgdHlwZTogRWxlbWVudFJlZiwgfSxcbiAgICB7IHR5cGU6IERhdGFDaGFuZ2VOb3RpZmljYXRpb25TZXJ2aWNlLCB9LFxuICAgIHsgdHlwZTogTG9jYWxpemF0aW9uU2VydmljZSwgfSxcbl07XG5UcmVlVmlld0NvbXBvbmVudC5wcm9wRGVjb3JhdG9ycyA9IHtcbiAgICAnY2xhc3NOYW1lcyc6IFt7IHR5cGU6IEhvc3RCaW5kaW5nLCBhcmdzOiBbXCJjbGFzcy5rLXdpZGdldFwiLF0gfSwgeyB0eXBlOiBIb3N0QmluZGluZywgYXJnczogW1wiY2xhc3Muay10cmVldmlld1wiLF0gfSxdLFxuICAgICdyb2xlJzogW3sgdHlwZTogSG9zdEJpbmRpbmcsIGFyZ3M6IFtcImF0dHIucm9sZVwiLF0gfSxdLFxuICAgICdkaXJlY3Rpb24nOiBbeyB0eXBlOiBIb3N0QmluZGluZywgYXJnczogW1wiYXR0ci5kaXJcIixdIH0sXSxcbiAgICAnYW5pbWF0ZSc6IFt7IHR5cGU6IElucHV0IH0sIHsgdHlwZTogSG9zdEJpbmRpbmcsIGFyZ3M6IFsnQC5kaXNhYmxlZCcsXSB9LF0sXG4gICAgJ2NoaWxkcmVuTG9hZGVkJzogW3sgdHlwZTogT3V0cHV0IH0sXSxcbiAgICAnb25CbHVyJzogW3sgdHlwZTogT3V0cHV0LCBhcmdzOiBbJ2JsdXInLF0gfSxdLFxuICAgICdvbkZvY3VzJzogW3sgdHlwZTogT3V0cHV0LCBhcmdzOiBbJ2ZvY3VzJyxdIH0sXSxcbiAgICAnZXhwYW5kJzogW3sgdHlwZTogT3V0cHV0IH0sXSxcbiAgICAnY29sbGFwc2UnOiBbeyB0eXBlOiBPdXRwdXQgfSxdLFxuICAgICdjaGVja2VkQ2hhbmdlJzogW3sgdHlwZTogT3V0cHV0IH0sXSxcbiAgICAnc2VsZWN0aW9uQ2hhbmdlJzogW3sgdHlwZTogT3V0cHV0IH0sXSxcbiAgICAnbm9kZUNsaWNrJzogW3sgdHlwZTogT3V0cHV0IH0sXSxcbiAgICAnbm9kZURibENsaWNrJzogW3sgdHlwZTogT3V0cHV0IH0sXSxcbiAgICAnbm9kZVRlbXBsYXRlJzogW3sgdHlwZTogQ29udGVudENoaWxkLCBhcmdzOiBbTm9kZVRlbXBsYXRlRGlyZWN0aXZlLF0gfSxdLFxuICAgICdub2Rlcyc6IFt7IHR5cGU6IElucHV0IH0sXSxcbiAgICAndGV4dEZpZWxkJzogW3sgdHlwZTogSW5wdXQgfSxdLFxuICAgICdoYXNDaGlsZHJlbic6IFt7IHR5cGU6IElucHV0IH0sXSxcbiAgICAnaXNDaGVja2VkJzogW3sgdHlwZTogSW5wdXQgfSxdLFxuICAgICdpc0Rpc2FibGVkJzogW3sgdHlwZTogSW5wdXQgfSxdLFxuICAgICdpc0V4cGFuZGVkJzogW3sgdHlwZTogSW5wdXQgfSxdLFxuICAgICdpc1NlbGVjdGVkJzogW3sgdHlwZTogSW5wdXQgfSxdLFxuICAgICduYXZpZ2FibGUnOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG4gICAgJ2NoaWxkcmVuJzogW3sgdHlwZTogSW5wdXQgfSxdLFxufTtcblxuY29uc3QgRklFTERfUkVHRVggPSAvXFxbKD86KFxcZCspfFsnXCJdKC4qPylbJ1wiXSlcXF18KCg/Oig/IVxcWy4qP1xcXXxcXC4pLikrKS9nO1xuY29uc3QgZ2V0dGVyQ2FjaGUgPSB7fTtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1zdHJpbmctbGl0ZXJhbFxuZ2V0dGVyQ2FjaGVbJ3VuZGVmaW5lZCddID0gb2JqID0+IG9iajtcbi8qKlxuICogQGhpZGRlblxuICovXG5jb25zdCBnZXR0ZXIgPSAoZmllbGQsIHNhZmUpID0+IHtcbiAgICBjb25zdCBrZXkgPSBmaWVsZCArIHNhZmU7XG4gICAgaWYgKGdldHRlckNhY2hlW2tleV0pIHtcbiAgICAgICAgcmV0dXJuIGdldHRlckNhY2hlW2tleV07XG4gICAgfVxuICAgIGNvbnN0IGZpZWxkcyA9IFtdO1xuICAgIGZpZWxkLnJlcGxhY2UoRklFTERfUkVHRVgsIChfLCBpbmRleCwgaW5kZXhBY2Nlc3NvciwgZmllbGQpID0+IHtcbiAgICAgICAgZmllbGRzLnB1c2goaXNQcmVzZW50KGluZGV4KSA/IGluZGV4IDogKGluZGV4QWNjZXNzb3IgfHwgZmllbGQpKTtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9KTtcbiAgICBnZXR0ZXJDYWNoZVtrZXldID0gb2JqID0+IHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IG9iajtcbiAgICAgICAgZm9yIChsZXQgaWR4ID0gMDsgaWR4IDwgZmllbGRzLmxlbmd0aDsgaWR4KyspIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdFtmaWVsZHNbaWR4XV07XG4gICAgICAgICAgICBpZiAoIWlzUHJlc2VudChyZXN1bHQpICYmIHNhZmUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICByZXR1cm4gZ2V0dGVyQ2FjaGVba2V5XTtcbn07XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5jbGFzcyBUcmVlVmlld0dyb3VwQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihleHBhbmRTZXJ2aWNlLCBsb2FkaW5nU2VydmljZSwgaW5kZXhCdWlsZGVyLCB0cmVlVmlld0xvb2t1cFNlcnZpY2UsIG5hdmlnYXRpb25TZXJ2aWNlLCBub2RlQ2hpbGRyZW5TZXJ2aWNlLCBkYXRhQ2hhbmdlTm90aWZpY2F0aW9uKSB7XG4gICAgICAgIHRoaXMuZXhwYW5kU2VydmljZSA9IGV4cGFuZFNlcnZpY2U7XG4gICAgICAgIHRoaXMubG9hZGluZ1NlcnZpY2UgPSBsb2FkaW5nU2VydmljZTtcbiAgICAgICAgdGhpcy5pbmRleEJ1aWxkZXIgPSBpbmRleEJ1aWxkZXI7XG4gICAgICAgIHRoaXMudHJlZVZpZXdMb29rdXBTZXJ2aWNlID0gdHJlZVZpZXdMb29rdXBTZXJ2aWNlO1xuICAgICAgICB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlID0gbmF2aWdhdGlvblNlcnZpY2U7XG4gICAgICAgIHRoaXMubm9kZUNoaWxkcmVuU2VydmljZSA9IG5vZGVDaGlsZHJlblNlcnZpY2U7XG4gICAgICAgIHRoaXMuZGF0YUNoYW5nZU5vdGlmaWNhdGlvbiA9IGRhdGFDaGFuZ2VOb3RpZmljYXRpb247XG4gICAgICAgIHRoaXMua0dyb3VwQ2xhc3MgPSB0cnVlO1xuICAgICAgICB0aGlzLnRleHRGaWVsZCA9IFwiXCI7XG4gICAgICAgIHRoaXMuX2RhdGEgPSBbXTtcbiAgICAgICAgdGhpcy5pc0NoZWNrZWQgPSAoKSA9PiAnbm9uZSc7XG4gICAgICAgIHRoaXMuaXNEaXNhYmxlZCA9ICgpID0+IGZhbHNlO1xuICAgICAgICB0aGlzLmlzRXhwYW5kZWQgPSAoKSA9PiBmYWxzZTtcbiAgICAgICAgdGhpcy5pc1NlbGVjdGVkID0gKCkgPT4gZmFsc2U7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4gPSAoKSA9PiBvZiQxKFtdKTtcbiAgICAgICAgdGhpcy5oYXNDaGlsZHJlbiA9ICgpID0+IGZhbHNlO1xuICAgIH1cbiAgICBnZXQgcm9sZSgpIHsgcmV0dXJuICdncm91cCc7IH1cbiAgICBnZXQgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGE7XG4gICAgfVxuICAgIHNldCBkYXRhKGRhdGEpIHtcbiAgICAgICAgdGhpcy5fZGF0YSA9IGRhdGE7XG4gICAgICAgIGNvbnN0IG1hcHBlZENoaWxkcmVuID0gdGhpcy5tYXBUb1RyZWVJdGVtKGRhdGEpO1xuICAgICAgICB0aGlzLnNldE5vZGVDaGlsZHJlbihtYXBwZWRDaGlsZHJlbik7XG4gICAgICAgIHRoaXMuZW1pdENoaWxkcmVuTG9hZGVkKG1hcHBlZENoaWxkcmVuKTtcbiAgICB9XG4gICAgZ2V0IGhhc1RlbXBsYXRlKCkge1xuICAgICAgICByZXR1cm4gaXNQcmVzZW50KHRoaXMubm9kZVRlbXBsYXRlUmVmKTtcbiAgICB9XG4gICAgZXhwYW5kTm9kZShpbmRleCwgZGF0YUl0ZW0sIGV4cGFuZCkge1xuICAgICAgICBpZiAoZXhwYW5kKSB7XG4gICAgICAgICAgICB0aGlzLmV4cGFuZFNlcnZpY2UuZXhwYW5kKGluZGV4LCBkYXRhSXRlbSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmV4cGFuZFNlcnZpY2UuY29sbGFwc2UoaW5kZXgsIGRhdGFJdGVtKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjaGVja05vZGUoaW5kZXgpIHtcbiAgICAgICAgdGhpcy5uYXZpZ2F0aW9uU2VydmljZS5jaGVja0luZGV4KGluZGV4KTtcbiAgICAgICAgdGhpcy5uYXZpZ2F0aW9uU2VydmljZS5hY3RpdmF0ZUluZGV4KGluZGV4KTtcbiAgICB9XG4gICAgbm9kZUluZGV4KGluZGV4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmluZGV4QnVpbGRlci5ub2RlSW5kZXgoaW5kZXgudG9TdHJpbmcoKSwgdGhpcy5wYXJlbnRJbmRleCk7XG4gICAgfVxuICAgIG5vZGVUZXh0KGRhdGFJdGVtKSB7XG4gICAgICAgIGNvbnN0IHRleHRGaWVsZCA9IGlzQXJyYXkodGhpcy50ZXh0RmllbGQpID8gdGhpcy50ZXh0RmllbGRbMF0gOiB0aGlzLnRleHRGaWVsZDtcbiAgICAgICAgcmV0dXJuIGdldHRlcih0ZXh0RmllbGQsIHRydWUpKGRhdGFJdGVtKTtcbiAgICB9XG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLm5vZGVzU3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGVzU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZGF0YUNoYW5nZVN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgdGhpcy5kYXRhQ2hhbmdlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuc3Vic2NyaWJlVG9Ob2Rlc0NoYW5nZSgpO1xuICAgICAgICB0aGlzLmRhdGFDaGFuZ2VTdWJzY3JpcHRpb24gPSB0aGlzLmRhdGFDaGFuZ2VOb3RpZmljYXRpb25cbiAgICAgICAgICAgIC5jaGFuZ2VzXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHRoaXMuc3Vic2NyaWJlVG9Ob2Rlc0NoYW5nZS5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlcykge1xuICAgICAgICBpZiAoY2hhbmdlcy5wYXJlbnRJbmRleCkge1xuICAgICAgICAgICAgdGhpcy5zZXROb2RlQ2hpbGRyZW4odGhpcy5tYXBUb1RyZWVJdGVtKHRoaXMuZGF0YSkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZldGNoQ2hpbGRyZW4obm9kZSwgaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hpbGRyZW4obm9kZSlcbiAgICAgICAgICAgIC5waXBlKGNhdGNoRXJyb3IkMSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxvYWRpbmdTZXJ2aWNlLm5vdGlmeUxvYWRlZChpbmRleCk7XG4gICAgICAgICAgICByZXR1cm4gZW1wdHkkMSgpO1xuICAgICAgICB9KSwgdGFwJDEoKCkgPT4gdGhpcy5sb2FkaW5nU2VydmljZS5ub3RpZnlMb2FkZWQoaW5kZXgpKSk7XG4gICAgfVxuICAgIGdldCBuZXh0RmllbGRzKCkge1xuICAgICAgICBpZiAoaXNBcnJheSh0aGlzLnRleHRGaWVsZCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRleHRGaWVsZC5sZW5ndGggPiAxID8gdGhpcy50ZXh0RmllbGQuc2xpY2UoMSkgOiB0aGlzLnRleHRGaWVsZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW3RoaXMudGV4dEZpZWxkXTtcbiAgICB9XG4gICAgc2V0Tm9kZUNoaWxkcmVuKGNoaWxkcmVuKSB7XG4gICAgICAgIHRoaXMudHJlZVZpZXdMb29rdXBTZXJ2aWNlLnJlZ2lzdGVyQ2hpbGRyZW4odGhpcy5wYXJlbnRJbmRleCwgY2hpbGRyZW4pO1xuICAgIH1cbiAgICBtYXBUb1RyZWVJdGVtKGRhdGEpIHtcbiAgICAgICAgaWYgKCF0aGlzLnBhcmVudEluZGV4KSB7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRhdGEubWFwKChkYXRhSXRlbSwgaWR4KSA9PiAoeyBkYXRhSXRlbSwgaW5kZXg6IHRoaXMubm9kZUluZGV4KGlkeCkgfSkpO1xuICAgIH1cbiAgICBlbWl0Q2hpbGRyZW5Mb2FkZWQoY2hpbGRyZW4pIHtcbiAgICAgICAgaWYgKCF0aGlzLnBhcmVudEluZGV4KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ub2RlQ2hpbGRyZW5TZXJ2aWNlLmNoaWxkcmVuTG9hZGVkKHsgZGF0YUl0ZW06IHRoaXMucGFyZW50RGF0YUl0ZW0sIGluZGV4OiB0aGlzLnBhcmVudEluZGV4IH0sIGNoaWxkcmVuKTtcbiAgICB9XG4gICAgc3Vic2NyaWJlVG9Ob2Rlc0NoYW5nZSgpIHtcbiAgICAgICAgaWYgKHRoaXMubm9kZXNTdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgIHRoaXMubm9kZXNTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5vZGVzU3Vic2NyaXB0aW9uID0gdGhpcy5ub2Rlcyh0aGlzLnBhcmVudERhdGFJdGVtLCB0aGlzLnBhcmVudEluZGV4KS5zdWJzY3JpYmUoeCA9PiB7IHRoaXMuZGF0YSA9IHg7IH0pO1xuICAgIH1cbn1cblRyZWVWaWV3R3JvdXBDb21wb25lbnQuZGVjb3JhdG9ycyA9IFtcbiAgICB7IHR5cGU6IENvbXBvbmVudCwgYXJnczogW3tcbiAgICAgICAgICAgICAgICBhbmltYXRpb25zOiBbXG4gICAgICAgICAgICAgICAgICAgIHRyaWdnZXIoJ3RvZ2dsZScsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gKicsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZSh7IGhlaWdodDogMCB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRlKCcwLjFzIGVhc2UtaW4nLCBzdHlsZSh7IGhlaWdodDogXCIqXCIgfSkpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb24oJyogPT4gdm9pZCcsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZSh7IGhlaWdodDogXCIqXCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZSgnMC4xcyBlYXNlLWluJywgc3R5bGUoeyBoZWlnaHQ6IDAgfSkpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdba2VuZG9UcmVlVmlld0dyb3VwXScsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGxpXG4gICAgICAgICAgICAqbmdGb3I9XCJsZXQgbm9kZSBvZiBkYXRhOyBsZXQgaW5kZXggPSBpbmRleFwiIGNsYXNzPVwiay1pdGVtIGstdHJlZXZpZXctaXRlbVwiXG4gICAgICAgICAgICBrZW5kb1RyZWVWaWV3SXRlbVxuICAgICAgICAgICAgW2RhdGFJdGVtXT1cIm5vZGVcIlxuICAgICAgICAgICAgW2luZGV4XT1cIm5vZGVJbmRleChpbmRleClcIlxuICAgICAgICAgICAgW3BhcmVudERhdGFJdGVtXT1cInBhcmVudERhdGFJdGVtXCJcbiAgICAgICAgICAgIFtwYXJlbnRJbmRleF09XCJwYXJlbnRJbmRleFwiXG4gICAgICAgICAgICBbaXNDaGVja2VkXT1cImlzQ2hlY2tlZChub2RlLCBub2RlSW5kZXgoaW5kZXgpKVwiXG4gICAgICAgICAgICBbaXNEaXNhYmxlZF09XCJkaXNhYmxlZCB8fCBpc0Rpc2FibGVkKG5vZGUsIG5vZGVJbmRleChpbmRleCkpXCJcbiAgICAgICAgICAgIFtpc0V4cGFuZGVkXT1cImlzRXhwYW5kZWQobm9kZSwgbm9kZUluZGV4KGluZGV4KSlcIlxuICAgICAgICAgICAgW2lzU2VsZWN0ZWRdPVwiaXNTZWxlY3RlZChub2RlLCBub2RlSW5kZXgoaW5kZXgpKVwiXG4gICAgICAgICAgICBbYXR0ci5kYXRhLXRyZWVpbmRleF09XCJub2RlSW5kZXgoaW5kZXgpXCJcbiAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImstbWlkXCI+XG4gICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJrLWljb25cIlxuICAgICAgICAgICAgICAgICAgICBbY2xhc3Muay1pLWNvbGxhcHNlXT1cImlzRXhwYW5kZWQobm9kZSwgbm9kZUluZGV4KGluZGV4KSlcIlxuICAgICAgICAgICAgICAgICAgICBbY2xhc3Muay1pLWV4cGFuZF09XCIhaXNFeHBhbmRlZChub2RlLCBub2RlSW5kZXgoaW5kZXgpKVwiXG4gICAgICAgICAgICAgICAgICAgIFtrZW5kb1RyZWVWaWV3TG9hZGluZ109XCJub2RlSW5kZXgoaW5kZXgpXCJcbiAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImV4cGFuZE5vZGUobm9kZUluZGV4KGluZGV4KSwgbm9kZSwgIWlzRXhwYW5kZWQobm9kZSwgbm9kZUluZGV4KGluZGV4KSkpXCJcbiAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJleHBhbmRJY29ucyAmJiBoYXNDaGlsZHJlbihub2RlKVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPGtlbmRvLWNoZWNrYm94XG4gICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiY2hlY2tib3hlc1wiXG4gICAgICAgICAgICAgICAgICAgIFtub2RlXT1cIm5vZGVcIlxuICAgICAgICAgICAgICAgICAgICBbaW5kZXhdPVwibm9kZUluZGV4KGluZGV4KVwiXG4gICAgICAgICAgICAgICAgICAgIFtpc0NoZWNrZWRdPVwiaXNDaGVja2VkXCJcbiAgICAgICAgICAgICAgICAgICAgKGNoZWNrU3RhdGVDaGFuZ2UpPVwiY2hlY2tOb2RlKG5vZGVJbmRleChpbmRleCkpXCJcbiAgICAgICAgICAgICAgICAgICAgdGFiaW5kZXg9XCItMVwiXG4gICAgICAgICAgICAgICAgPjwva2VuZG8tY2hlY2tib3g+XG4gICAgICAgICAgICAgICAgPHNwYW4ga2VuZG9UcmVlVmlld0l0ZW1Db250ZW50XG4gICAgICAgICAgICAgICAgICAgIFthdHRyLmRhdGEtdHJlZWluZGV4XT1cIm5vZGVJbmRleChpbmRleClcIlxuICAgICAgICAgICAgICAgICAgICBbZGF0YUl0ZW1dPVwibm9kZVwiXG4gICAgICAgICAgICAgICAgICAgIFtpbmRleF09XCJub2RlSW5kZXgoaW5kZXgpXCJcbiAgICAgICAgICAgICAgICAgICAgW2luaXRpYWxTZWxlY3Rpb25dPVwiaXNTZWxlY3RlZChub2RlLCBub2RlSW5kZXgoaW5kZXgpKVwiXG4gICAgICAgICAgICAgICAgICAgIFtpc1NlbGVjdGVkXT1cImlzU2VsZWN0ZWRcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImstaW5cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwiaGFzVGVtcGxhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRdPVwibm9kZVRlbXBsYXRlUmVmXCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInskaW1wbGljaXQ6IG5vZGUsIGluZGV4OiBub2RlSW5kZXgoaW5kZXgpfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaERlZmF1bHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3tub2RlVGV4dChub2RlKX19XG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8dWxcbiAgICAgICAgICAgICAgICAqbmdJZj1cImlzRXhwYW5kZWQobm9kZSwgbm9kZUluZGV4KGluZGV4KSkgJiYgaGFzQ2hpbGRyZW4obm9kZSlcIlxuICAgICAgICAgICAgICAgIGtlbmRvVHJlZVZpZXdHcm91cFxuICAgICAgICAgICAgICAgIHJvbGU9XCJncm91cFwiXG4gICAgICAgICAgICAgICAgW25vZGVzXT1cImZldGNoQ2hpbGRyZW5cIlxuICAgICAgICAgICAgICAgIFtjaGVja2JveGVzXT1cImNoZWNrYm94ZXNcIlxuICAgICAgICAgICAgICAgIFtleHBhbmRJY29uc109XCJleHBhbmRJY29uc1wiXG4gICAgICAgICAgICAgICAgW2NoaWxkcmVuXT1cImNoaWxkcmVuXCJcbiAgICAgICAgICAgICAgICBbaGFzQ2hpbGRyZW5dPVwiaGFzQ2hpbGRyZW5cIlxuICAgICAgICAgICAgICAgIFtpc0NoZWNrZWRdPVwiaXNDaGVja2VkXCJcbiAgICAgICAgICAgICAgICBbaXNEaXNhYmxlZF09XCJpc0Rpc2FibGVkXCJcbiAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWQgfHwgaXNEaXNhYmxlZChub2RlLCBub2RlSW5kZXgoaW5kZXgpKVwiXG4gICAgICAgICAgICAgICAgW2lzRXhwYW5kZWRdPVwiaXNFeHBhbmRlZFwiXG4gICAgICAgICAgICAgICAgW2lzU2VsZWN0ZWRdPVwiaXNTZWxlY3RlZFwiXG4gICAgICAgICAgICAgICAgW25vZGVUZW1wbGF0ZVJlZl09XCJub2RlVGVtcGxhdGVSZWZcIlxuICAgICAgICAgICAgICAgIFtwYXJlbnRJbmRleF09XCJub2RlSW5kZXgoaW5kZXgpXCJcbiAgICAgICAgICAgICAgICBbcGFyZW50RGF0YUl0ZW1dPVwibm9kZVwiXG4gICAgICAgICAgICAgICAgW3RleHRGaWVsZF09XCJuZXh0RmllbGRzXCJcbiAgICAgICAgICAgICAgICBbQHRvZ2dsZV09XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2xpPlxuICAgIGBcbiAgICAgICAgICAgIH0sXSB9LFxuXTtcbi8qKiBAbm9jb2xsYXBzZSAqL1xuVHJlZVZpZXdHcm91cENvbXBvbmVudC5jdG9yUGFyYW1ldGVycyA9ICgpID0+IFtcbiAgICB7IHR5cGU6IEV4cGFuZFN0YXRlU2VydmljZSwgfSxcbiAgICB7IHR5cGU6IExvYWRpbmdOb3RpZmljYXRpb25TZXJ2aWNlLCB9LFxuICAgIHsgdHlwZTogSW5kZXhCdWlsZGVyU2VydmljZSwgfSxcbiAgICB7IHR5cGU6IFRyZWVWaWV3TG9va3VwU2VydmljZSwgfSxcbiAgICB7IHR5cGU6IE5hdmlnYXRpb25TZXJ2aWNlLCB9LFxuICAgIHsgdHlwZTogTm9kZUNoaWxkcmVuU2VydmljZSwgfSxcbiAgICB7IHR5cGU6IERhdGFDaGFuZ2VOb3RpZmljYXRpb25TZXJ2aWNlLCB9LFxuXTtcblRyZWVWaWV3R3JvdXBDb21wb25lbnQucHJvcERlY29yYXRvcnMgPSB7XG4gICAgJ2tHcm91cENsYXNzJzogW3sgdHlwZTogSG9zdEJpbmRpbmcsIGFyZ3M6IFtcImNsYXNzLmstZ3JvdXBcIixdIH0sXSxcbiAgICAncm9sZSc6IFt7IHR5cGU6IEhvc3RCaW5kaW5nLCBhcmdzOiBbXCJhdHRyLnJvbGVcIixdIH0sXSxcbiAgICAnY2hlY2tib3hlcyc6IFt7IHR5cGU6IElucHV0IH0sXSxcbiAgICAnZXhwYW5kSWNvbnMnOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG4gICAgJ2Rpc2FibGVkJzogW3sgdHlwZTogSW5wdXQgfSxdLFxuICAgICdub2Rlcyc6IFt7IHR5cGU6IElucHV0IH0sXSxcbiAgICAndGV4dEZpZWxkJzogW3sgdHlwZTogSW5wdXQgfSxdLFxuICAgICdwYXJlbnREYXRhSXRlbSc6IFt7IHR5cGU6IElucHV0IH0sXSxcbiAgICAncGFyZW50SW5kZXgnOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG4gICAgJ25vZGVUZW1wbGF0ZVJlZic6IFt7IHR5cGU6IElucHV0IH0sXSxcbiAgICAnaXNDaGVja2VkJzogW3sgdHlwZTogSW5wdXQgfSxdLFxuICAgICdpc0Rpc2FibGVkJzogW3sgdHlwZTogSW5wdXQgfSxdLFxuICAgICdpc0V4cGFuZGVkJzogW3sgdHlwZTogSW5wdXQgfSxdLFxuICAgICdpc1NlbGVjdGVkJzogW3sgdHlwZTogSW5wdXQgfSxdLFxuICAgICdjaGlsZHJlbic6IFt7IHR5cGU6IElucHV0IH0sXSxcbiAgICAnaGFzQ2hpbGRyZW4nOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG59O1xuXG5jb25zdCBpbmRleENoZWNrZWQgPSAoa2V5cywgaW5kZXgpID0+IGtleXMuZmlsdGVyKGsgPT4gayA9PT0gaW5kZXgpLmxlbmd0aCA+IDA7XG5jb25zdCBtYXRjaEtleSA9IGluZGV4ID0+IGsgPT4ge1xuICAgIGlmIChpbmRleCA9PT0gaykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKCFrLnNwbGl0KSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIGsuc3BsaXQoJ18nKS5yZWR1Y2UoKHsga2V5LCByZXN1bHQgfSwgcGFydCkgPT4ge1xuICAgICAgICBrZXkgKz0gcGFydDtcbiAgICAgICAgaWYgKGluZGV4ID09PSBrZXkgfHwgcmVzdWx0KSB7XG4gICAgICAgICAgICByZXR1cm4geyByZXN1bHQ6IHRydWUgfTtcbiAgICAgICAgfVxuICAgICAgICBrZXkgKz0gXCJfXCI7XG4gICAgICAgIHJldHVybiB7IGtleSwgcmVzdWx0OiBmYWxzZSB9O1xuICAgIH0sIHsga2V5OiBcIlwiLCByZXN1bHQ6IGZhbHNlIH0pLnJlc3VsdDtcbn07XG4vKipcbiAqIEEgZGlyZWN0aXZlIHdoaWNoIG1hbmFnZXMgdGhlIGluLW1lbW9yeSBjaGVja2VkIHN0YXRlIG9mIHRoZSBUcmVlVmlldyBub2RlXG4gKiAoW3NlZSBleGFtcGxlXSh7JSBzbHVnIGNoZWNrYm94ZXNfdHJlZXZpZXcgJX0pKS5cbiAqL1xuY2xhc3MgQ2hlY2tEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKHRyZWVWaWV3LCB6b25lKSB7XG4gICAgICAgIHRoaXMudHJlZVZpZXcgPSB0cmVlVmlldztcbiAgICAgICAgdGhpcy56b25lID0gem9uZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZpcmVzIHdoZW4gdGhlIGBjaGVja2VkS2V5c2AgY29sbGVjdGlvbiB3YXMgdXBkYXRlZC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuY2hlY2tlZEtleXNDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucyA9IG5ldyBTdWJzY3JpcHRpb24kMSgoKSA9PiB7IH0pO1xuICAgICAgICB0aGlzLmNoZWNrQWN0aW9ucyA9IHtcbiAgICAgICAgICAgICdtdWx0aXBsZSc6IChlKSA9PiB0aGlzLmNoZWNrTXVsdGlwbGUoZSksXG4gICAgICAgICAgICAnc2luZ2xlJzogKGUpID0+IHRoaXMuY2hlY2tTaW5nbGUoZSlcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fY2hlY2tlZEtleXMgPSBbXTtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLmFkZCh0aGlzLnRyZWVWaWV3LmNoZWNrZWRDaGFuZ2VcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKGUpID0+IHRoaXMuY2hlY2soZSkpKTtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLmFkZCh0aGlzLnRyZWVWaWV3LmNoaWxkcmVuTG9hZGVkXG4gICAgICAgICAgICAucGlwZShmaWx0ZXIkMSgoKSA9PiB0aGlzLm9wdGlvbnMuY2hlY2tDaGlsZHJlbiksIHN3aXRjaE1hcCQxKGUgPT4gdGhpcy56b25lLm9uU3RhYmxlLnBpcGUodGFrZSQxKDEpLCBtYXAkMSgoKSA9PiBlKSkpKVxuICAgICAgICAgICAgLnN1YnNjcmliZSgoZSkgPT4gdGhpcy5hZGRDaGlsZHJlbktleXMoZSkpKTtcbiAgICAgICAgdGhpcy50cmVlVmlldy5pc0NoZWNrZWQgPSB0aGlzLmlzSXRlbUNoZWNrZWQuYmluZCh0aGlzKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHNldCBpc0NoZWNrZWQodmFsdWUpIHtcbiAgICAgICAgdGhpcy50cmVlVmlldy5pc0NoZWNrZWQgPSB2YWx1ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRGVmaW5lcyB0aGUgY29sbGVjdGlvbiB0aGF0IHdpbGwgc3RvcmUgdGhlIGNoZWNrZWQga2V5c1xuICAgICAqIChbc2VlIGV4YW1wbGVdKHslIHNsdWcgY2hlY2tib3hlc190cmVldmlldyAlfSkpLlxuICAgICAqL1xuICAgIGdldCBjaGVja2VkS2V5cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NoZWNrZWRLZXlzO1xuICAgIH1cbiAgICBzZXQgY2hlY2tlZEtleXMoa2V5cykge1xuICAgICAgICB0aGlzLl9jaGVja2VkS2V5cyA9IGtleXM7XG4gICAgfVxuICAgIGdldCBvcHRpb25zKCkge1xuICAgICAgICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGNoZWNrQ2hpbGRyZW46IHRydWUsXG4gICAgICAgICAgICBjaGVja1BhcmVudHM6IHRydWUsXG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgbW9kZTogXCJtdWx0aXBsZVwiXG4gICAgICAgIH07XG4gICAgICAgIGlmICghaXNQcmVzZW50KHRoaXMuY2hlY2thYmxlKSkge1xuICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRPcHRpb25zO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGlzQm9vbGVhbiA9IHR5cGVvZiB0aGlzLmNoZWNrYWJsZSA9PT0gJ2Jvb2xlYW4nO1xuICAgICAgICBjb25zdCBjaGVja1NldHRpbmdzID0gaXNCb29sZWFuXG4gICAgICAgICAgICA/IHsgZW5hYmxlZDogdGhpcy5jaGVja2FibGUgfVxuICAgICAgICAgICAgOiB0aGlzLmNoZWNrYWJsZTtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oZGVmYXVsdE9wdGlvbnMsIGNoZWNrU2V0dGluZ3MpO1xuICAgIH1cbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzKSB7XG4gICAgICAgIGlmIChjaGFuZ2VzLmNoZWNrYWJsZSkge1xuICAgICAgICAgICAgdGhpcy50cmVlVmlldy5jaGVja2JveGVzID0gdGhpcy5vcHRpb25zLmVuYWJsZWQ7XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZUNoZWNrT25DbGljaygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgdGhpcy51bnN1YnNjcmliZUNsaWNrKCk7XG4gICAgfVxuICAgIGlzSXRlbUNoZWNrZWQoZGF0YUl0ZW0sIGluZGV4KSB7XG4gICAgICAgIGlmICghdGhpcy5jaGVja0tleSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXNJbmRleENoZWNrZWQoaW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGtleUluZGV4ID0gdGhpcy5jaGVja2VkS2V5cy5pbmRleE9mKHRoaXMuaXRlbUtleSh7IGRhdGFJdGVtLCBpbmRleCB9KSk7XG4gICAgICAgIHJldHVybiBrZXlJbmRleCA+IC0xID8gJ2NoZWNrZWQnIDogJ25vbmUnO1xuICAgIH1cbiAgICBpc0luZGV4Q2hlY2tlZChpbmRleCkge1xuICAgICAgICBjb25zdCBjaGVja2VkS2V5cyA9IHRoaXMuY2hlY2tlZEtleXMuZmlsdGVyKG1hdGNoS2V5KGluZGV4KSk7XG4gICAgICAgIGlmIChpbmRleENoZWNrZWQoY2hlY2tlZEtleXMsIGluZGV4KSkge1xuICAgICAgICAgICAgcmV0dXJuICdjaGVja2VkJztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IG1vZGUsIGNoZWNrUGFyZW50cyB9ID0gdGhpcy5vcHRpb25zO1xuICAgICAgICBpZiAobW9kZSA9PT0gJ211bHRpcGxlJyAmJiBjaGVja1BhcmVudHMgJiYgY2hlY2tlZEtleXMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2luZGV0ZXJtaW5hdGUnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnbm9uZSc7XG4gICAgfVxuICAgIGl0ZW1LZXkoZSkge1xuICAgICAgICBpZiAoIXRoaXMuY2hlY2tLZXkpIHtcbiAgICAgICAgICAgIHJldHVybiBlLmluZGV4O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5jaGVja0tleSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgcmV0dXJuIGUuZGF0YUl0ZW1bdGhpcy5jaGVja0tleV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmNoZWNrS2V5ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoZWNrS2V5KGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNoZWNrKGUpIHtcbiAgICAgICAgY29uc3QgeyBlbmFibGVkLCBtb2RlIH0gPSB0aGlzLm9wdGlvbnM7XG4gICAgICAgIGNvbnN0IHBlcmZvcm1TZWxlY3Rpb24gPSB0aGlzLmNoZWNrQWN0aW9uc1ttb2RlXSB8fCBub29wO1xuICAgICAgICBpZiAoIWVuYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBwZXJmb3JtU2VsZWN0aW9uKGUpO1xuICAgIH1cbiAgICBjaGVja1NpbmdsZShub2RlKSB7XG4gICAgICAgIGNvbnN0IGtleSA9IHRoaXMuaXRlbUtleShub2RlLml0ZW0pO1xuICAgICAgICB0aGlzLmNoZWNrZWRLZXlzID0gdGhpcy5jaGVja2VkS2V5c1swXSAhPT0ga2V5ID8gW2tleV0gOiBbXTtcbiAgICAgICAgdGhpcy5ub3RpZnkoKTtcbiAgICB9XG4gICAgY2hlY2tNdWx0aXBsZShub2RlKSB7XG4gICAgICAgIHRoaXMuY2hlY2tOb2RlKG5vZGUpO1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmNoZWNrUGFyZW50cykge1xuICAgICAgICAgICAgdGhpcy5jaGVja1BhcmVudHMobm9kZS5wYXJlbnQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubm90aWZ5KCk7XG4gICAgfVxuICAgIHRvZ2dsZUNoZWNrT25DbGljaygpIHtcbiAgICAgICAgdGhpcy51bnN1YnNjcmliZUNsaWNrKCk7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuY2hlY2tPbkNsaWNrKSB7XG4gICAgICAgICAgICB0aGlzLmNsaWNrU3Vic2NyaXB0aW9uID0gdGhpcy50cmVlVmlldy5ub2RlQ2xpY2suc3Vic2NyaWJlKGFyZ3MgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChhcmdzLnR5cGUgPT09ICdjbGljaycpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbG9va3VwID0gdGhpcy50cmVlVmlldy5pdGVtTG9va3VwKGFyZ3MuaXRlbS5pbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2sobG9va3VwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1bnN1YnNjcmliZUNsaWNrKCkge1xuICAgICAgICBpZiAodGhpcy5jbGlja1N1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgdGhpcy5jbGlja1N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgdGhpcy5jbGlja1N1YnNjcmlwdGlvbiA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2hlY2tOb2RlKG5vZGUsIGNoZWNrKSB7XG4gICAgICAgIGNvbnN0IGtleSA9IHRoaXMuaXRlbUtleShub2RlLml0ZW0pO1xuICAgICAgICBjb25zdCBpZHggPSB0aGlzLmNoZWNrZWRLZXlzLmluZGV4T2Yoa2V5KTtcbiAgICAgICAgY29uc3QgaXNDaGVja2VkID0gaWR4ID4gLTE7XG4gICAgICAgIGNvbnN0IHNob3VsZENoZWNrID0gY2hlY2sgPT09IHVuZGVmaW5lZCA/ICFpc0NoZWNrZWQgOiBjaGVjaztcbiAgICAgICAgaWYgKCFpc1ByZXNlbnQoa2V5KSB8fCAoaXNDaGVja2VkICYmIGNoZWNrKSB8fCB0aGlzLnRyZWVWaWV3LmlzRGlzYWJsZWROb2RlKG5vZGUpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzQ2hlY2tlZCkge1xuICAgICAgICAgICAgdGhpcy5jaGVja2VkS2V5cy5zcGxpY2UoaWR4LCAxKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tlZEtleXMucHVzaChrZXkpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuY2hlY2tDaGlsZHJlbikge1xuICAgICAgICAgICAgbm9kZS5jaGlsZHJlbi5tYXAobiA9PiB0aGlzLmNoZWNrTm9kZShuLCBzaG91bGRDaGVjaykpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNoZWNrUGFyZW50cyhwYXJlbnQpIHtcbiAgICAgICAgbGV0IGN1cnJlbnRQYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIHdoaWxlIChjdXJyZW50UGFyZW50KSB7XG4gICAgICAgICAgICBjb25zdCBwYXJlbnRLZXkgPSB0aGlzLml0ZW1LZXkoY3VycmVudFBhcmVudC5pdGVtKTtcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudEluZGV4ID0gdGhpcy5jaGVja2VkS2V5cy5pbmRleE9mKHBhcmVudEtleSk7XG4gICAgICAgICAgICBpZiAodGhpcy5hbGxDaGlsZHJlblNlbGVjdGVkKGN1cnJlbnRQYXJlbnQuY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudEluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrZWRLZXlzLnB1c2gocGFyZW50S2V5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChwYXJlbnRJbmRleCA+IC0xKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja2VkS2V5cy5zcGxpY2UocGFyZW50SW5kZXgsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3VycmVudFBhcmVudCA9IGN1cnJlbnRQYXJlbnQucGFyZW50O1xuICAgICAgICB9XG4gICAgfVxuICAgIGFsbENoaWxkcmVuU2VsZWN0ZWQoY2hpbGRyZW4pIHtcbiAgICAgICAgY29uc3QgaXNDaGVja2VkUmVkdWNlciA9IChhY2MsIGl0ZW0pID0+IChhY2MgJiYgdGhpcy5pc0l0ZW1DaGVja2VkKGl0ZW0uZGF0YUl0ZW0sIGl0ZW0uaW5kZXgpID09PSAnY2hlY2tlZCcpO1xuICAgICAgICByZXR1cm4gY2hpbGRyZW4ucmVkdWNlKGlzQ2hlY2tlZFJlZHVjZXIsIHRydWUpO1xuICAgIH1cbiAgICBub3RpZnkoKSB7XG4gICAgICAgIHRoaXMuY2hlY2tlZEtleXNDaGFuZ2UuZW1pdCh0aGlzLmNoZWNrZWRLZXlzLnNsaWNlKCkpO1xuICAgIH1cbiAgICBhZGRDaGlsZHJlbktleXMoYXJncykge1xuICAgICAgICBpZiAodGhpcy5jaGVja2VkS2V5cy5pbmRleE9mKHRoaXMuaXRlbUtleShhcmdzLml0ZW0pKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBrZXlzID0gYXJncy5jaGlsZHJlbi5yZWR1Y2UoKGFjYywgaXRlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXRlbUtleSA9IHRoaXMuaXRlbUtleShpdGVtKTtcbiAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nS2V5ID0gdGhpcy5jaGVja2VkS2V5cy5maW5kKGtleSA9PiBpdGVtS2V5ID09PSBrZXkpO1xuICAgICAgICAgICAgaWYgKCFleGlzdGluZ0tleSkge1xuICAgICAgICAgICAgICAgIGFjYy5wdXNoKGl0ZW1LZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgfSwgW10pO1xuICAgICAgICBpZiAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tlZEtleXMgPSB0aGlzLmNoZWNrZWRLZXlzLmNvbmNhdChrZXlzKTtcbiAgICAgICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubm90aWZ5KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbkNoZWNrRGlyZWN0aXZlLmRlY29yYXRvcnMgPSBbXG4gICAgeyB0eXBlOiBEaXJlY3RpdmUsIGFyZ3M6IFt7IHNlbGVjdG9yOiAnW2tlbmRvVHJlZVZpZXdDaGVja2FibGVdJyB9LF0gfSxcbl07XG4vKiogQG5vY29sbGFwc2UgKi9cbkNoZWNrRGlyZWN0aXZlLmN0b3JQYXJhbWV0ZXJzID0gKCkgPT4gW1xuICAgIHsgdHlwZTogVHJlZVZpZXdDb21wb25lbnQsIH0sXG4gICAgeyB0eXBlOiBOZ1pvbmUsIH0sXG5dO1xuQ2hlY2tEaXJlY3RpdmUucHJvcERlY29yYXRvcnMgPSB7XG4gICAgJ2lzQ2hlY2tlZCc6IFt7IHR5cGU6IElucHV0IH0sXSxcbiAgICAnY2hlY2tLZXknOiBbeyB0eXBlOiBJbnB1dCwgYXJnczogW1wiY2hlY2tCeVwiLF0gfSxdLFxuICAgICdjaGVja2VkS2V5cyc6IFt7IHR5cGU6IElucHV0IH0sXSxcbiAgICAnY2hlY2thYmxlJzogW3sgdHlwZTogSW5wdXQsIGFyZ3M6IFsna2VuZG9UcmVlVmlld0NoZWNrYWJsZScsXSB9LF0sXG4gICAgJ2NoZWNrZWRLZXlzQ2hhbmdlJzogW3sgdHlwZTogT3V0cHV0IH0sXSxcbn07XG5cbi8qKlxuICogQSBkaXJlY3RpdmUgd2hpY2ggbWFuYWdlcyB0aGUgZGlzYWJsZWQgaW4tbWVtb3J5IHN0YXRlIG9mIHRoZSBUcmVlVmlldyBub2RlXG4gKiAoW3NlZSBleGFtcGxlXSh7JSBzbHVnIGRpc2FibGVkc3RhdGVfdHJlZXZpZXcgJX0pKS5cbiAqL1xuY2xhc3MgRGlzYWJsZURpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IodHJlZVZpZXcsIGNkcikge1xuICAgICAgICB0aGlzLnRyZWVWaWV3ID0gdHJlZVZpZXc7XG4gICAgICAgIHRoaXMuY2RyID0gY2RyO1xuICAgICAgICAvKipcbiAgICAgICAgICogRGVmaW5lcyB0aGUgY29sbGVjdGlvbiB0aGF0IHdpbGwgc3RvcmUgdGhlIGRpc2FibGVkIGtleXMuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmRpc2FibGVkS2V5cyA9IFtdO1xuICAgICAgICB0aGlzLnRyZWVWaWV3LmlzRGlzYWJsZWQgPSAoZGF0YUl0ZW0sIGluZGV4KSA9PiAodGhpcy5kaXNhYmxlZEtleXMuaW5kZXhPZih0aGlzLml0ZW1LZXkoeyBkYXRhSXRlbSwgaW5kZXggfSkpID4gLTEpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgc2V0IGlzRGlzYWJsZWQodmFsdWUpIHtcbiAgICAgICAgdGhpcy50cmVlVmlldy5pc0Rpc2FibGVkID0gdmFsdWU7XG4gICAgfVxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXMgPSB7fSkge1xuICAgICAgICBjb25zdCB7IGRpc2FibGVkS2V5cyB9ID0gY2hhbmdlcztcbiAgICAgICAgaWYgKGRpc2FibGVkS2V5cyAmJiAhZGlzYWJsZWRLZXlzLmZpcnN0Q2hhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpdGVtS2V5KGUpIHtcbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVLZXkpIHtcbiAgICAgICAgICAgIHJldHVybiBlLmluZGV4O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5kaXNhYmxlS2V5ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICByZXR1cm4gZS5kYXRhSXRlbVt0aGlzLmRpc2FibGVLZXldO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5kaXNhYmxlS2V5ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRpc2FibGVLZXkoZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5EaXNhYmxlRGlyZWN0aXZlLmRlY29yYXRvcnMgPSBbXG4gICAgeyB0eXBlOiBEaXJlY3RpdmUsIGFyZ3M6IFt7IHNlbGVjdG9yOiAnW2tlbmRvVHJlZVZpZXdEaXNhYmxlXScgfSxdIH0sXG5dO1xuLyoqIEBub2NvbGxhcHNlICovXG5EaXNhYmxlRGlyZWN0aXZlLmN0b3JQYXJhbWV0ZXJzID0gKCkgPT4gW1xuICAgIHsgdHlwZTogVHJlZVZpZXdDb21wb25lbnQsIH0sXG4gICAgeyB0eXBlOiBDaGFuZ2VEZXRlY3RvclJlZiwgfSxcbl07XG5EaXNhYmxlRGlyZWN0aXZlLnByb3BEZWNvcmF0b3JzID0ge1xuICAgICdpc0Rpc2FibGVkJzogW3sgdHlwZTogSW5wdXQgfSxdLFxuICAgICdkaXNhYmxlS2V5JzogW3sgdHlwZTogSW5wdXQsIGFyZ3M6IFtcImtlbmRvVHJlZVZpZXdEaXNhYmxlXCIsXSB9LF0sXG4gICAgJ2Rpc2FibGVkS2V5cyc6IFt7IHR5cGU6IElucHV0IH0sXSxcbn07XG5cbi8qKlxuICogQSBkaXJlY3RpdmUgd2hpY2ggbWFuYWdlcyB0aGUgZXhwYW5kZWQgc3RhdGUgb2YgdGhlIFRyZWVWaWV3XG4gKiAoW3NlZSBleGFtcGxlXSh7JSBzbHVnIGV4cGFuZGVkc3RhdGVfdHJlZXZpZXcgJX0pKS5cbiAqL1xuY2xhc3MgRXhwYW5kRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3Rvcih0cmVlVmlldykge1xuICAgICAgICB0aGlzLnRyZWVWaWV3ID0gdHJlZVZpZXc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBGaXJlcyB3aGVuIHRoZSBgZXhwYW5kZWRLZXlzYCBjb2xsZWN0aW9uIHdhcyB1cGRhdGVkLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5leHBhbmRlZEtleXNDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucyA9IG5ldyBTdWJzY3JpcHRpb24kMSgoKSA9PiB7IH0pO1xuICAgICAgICB0aGlzLl9leHBhbmRlZEtleXMgPSBbXTtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLmFkZChtZXJnZSQxKHRoaXMudHJlZVZpZXcuZXhwYW5kLnBpcGUobWFwJDEoZSA9PiAoT2JqZWN0LmFzc2lnbih7IGV4cGFuZDogdHJ1ZSB9LCBlKSkpKSwgdGhpcy50cmVlVmlldy5jb2xsYXBzZS5waXBlKG1hcCQxKGUgPT4gKE9iamVjdC5hc3NpZ24oeyBleHBhbmQ6IGZhbHNlIH0sIGUpKSkpKS5zdWJzY3JpYmUodGhpcy50b2dnbGVFeHBhbmQuYmluZCh0aGlzKSkpO1xuICAgICAgICB0aGlzLnRyZWVWaWV3LmlzRXhwYW5kZWQgPSAoZGF0YUl0ZW0sIGluZGV4KSA9PiB0aGlzLmV4cGFuZGVkS2V5cy5pbmRleE9mKHRoaXMuaXRlbUtleSh7IGRhdGFJdGVtLCBpbmRleCB9KSkgPiAtMTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHNldCBpc0V4cGFuZGVkKHZhbHVlKSB7XG4gICAgICAgIHRoaXMudHJlZVZpZXcuaXNFeHBhbmRlZCA9IHZhbHVlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEZWZpbmVzIHRoZSBjb2xsZWN0aW9uIHRoYXQgd2lsbCBzdG9yZSB0aGUgZXhwYW5kZWQga2V5cy5cbiAgICAgKi9cbiAgICBnZXQgZXhwYW5kZWRLZXlzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZXhwYW5kZWRLZXlzO1xuICAgIH1cbiAgICBzZXQgZXhwYW5kZWRLZXlzKGtleXMpIHtcbiAgICAgICAgdGhpcy5fZXhwYW5kZWRLZXlzID0ga2V5cztcbiAgICB9XG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICBpdGVtS2V5KGUpIHtcbiAgICAgICAgaWYgKHRoaXMuZXhwYW5kS2V5KSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuZXhwYW5kS2V5ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGUuZGF0YUl0ZW1bdGhpcy5leHBhbmRLZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmV4cGFuZEtleSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXhwYW5kS2V5KGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlLmluZGV4O1xuICAgIH1cbiAgICB0b2dnbGVFeHBhbmQoeyBpbmRleCwgZGF0YUl0ZW0sIGV4cGFuZCB9KSB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLml0ZW1LZXkoeyBpbmRleCwgZGF0YUl0ZW0gfSk7XG4gICAgICAgIGNvbnN0IGlkeCA9IHRoaXMuZXhwYW5kZWRLZXlzLmluZGV4T2YoaXRlbSk7XG4gICAgICAgIGxldCBub3RpZnkgPSBmYWxzZTtcbiAgICAgICAgaWYgKGlkeCA+IC0xICYmICFleHBhbmQpIHtcbiAgICAgICAgICAgIHRoaXMuZXhwYW5kZWRLZXlzLnNwbGljZShpZHgsIDEpO1xuICAgICAgICAgICAgbm90aWZ5ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpZHggPT09IC0xICYmIGV4cGFuZCkge1xuICAgICAgICAgICAgdGhpcy5leHBhbmRlZEtleXMucHVzaChpdGVtKTtcbiAgICAgICAgICAgIG5vdGlmeSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5vdGlmeSkge1xuICAgICAgICAgICAgdGhpcy5leHBhbmRlZEtleXNDaGFuZ2UuZW1pdCh0aGlzLmV4cGFuZGVkS2V5cyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5FeHBhbmREaXJlY3RpdmUuZGVjb3JhdG9ycyA9IFtcbiAgICB7IHR5cGU6IERpcmVjdGl2ZSwgYXJnczogW3sgc2VsZWN0b3I6ICdba2VuZG9UcmVlVmlld0V4cGFuZGFibGVdJyB9LF0gfSxcbl07XG4vKiogQG5vY29sbGFwc2UgKi9cbkV4cGFuZERpcmVjdGl2ZS5jdG9yUGFyYW1ldGVycyA9ICgpID0+IFtcbiAgICB7IHR5cGU6IFRyZWVWaWV3Q29tcG9uZW50LCB9LFxuXTtcbkV4cGFuZERpcmVjdGl2ZS5wcm9wRGVjb3JhdG9ycyA9IHtcbiAgICAnaXNFeHBhbmRlZCc6IFt7IHR5cGU6IElucHV0IH0sXSxcbiAgICAnZXhwYW5kS2V5JzogW3sgdHlwZTogSW5wdXQsIGFyZ3M6IFtcImV4cGFuZEJ5XCIsXSB9LF0sXG4gICAgJ2V4cGFuZGVkS2V5c0NoYW5nZSc6IFt7IHR5cGU6IE91dHB1dCB9LF0sXG4gICAgJ2V4cGFuZGVkS2V5cyc6IFt7IHR5cGU6IElucHV0IH0sXSxcbn07XG5cbi8qKlxuICogQSBkaXJlY3RpdmUgd2hpY2ggbWFuYWdlcyB0aGUgaW4tbWVtb3J5IHNlbGVjdGlvbiBzdGF0ZSBvZiB0aGUgVHJlZVZpZXcgbm9kZVxuICogKFtzZWUgZXhhbXBsZV0oeyUgc2x1ZyBzZWxlY3Rpb25fdHJlZXZpZXcgJX0pKS5cbiAqL1xuY2xhc3MgU2VsZWN0RGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3Rvcih0cmVlVmlldykge1xuICAgICAgICB0aGlzLnRyZWVWaWV3ID0gdHJlZVZpZXc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBGaXJlcyB3aGVuIHRoZSBgc2VsZWN0ZWRLZXlzYCBjb2xsZWN0aW9uIHdhcyB1cGRhdGVkLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5zZWxlY3RlZEtleXNDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucyA9IG5ldyBTdWJzY3JpcHRpb24kMSgoKSA9PiB7IH0pO1xuICAgICAgICB0aGlzLnNlbGVjdEFjdGlvbnMgPSB7XG4gICAgICAgICAgICAnbXVsdGlwbGUnOiAoZSkgPT4gdGhpcy5zZWxlY3RNdWx0aXBsZShlKSxcbiAgICAgICAgICAgICdzaW5nbGUnOiAoZSkgPT4gdGhpcy5zZWxlY3RTaW5nbGUoZSlcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWRLZXlzID0gW107XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5hZGQodGhpcy50cmVlVmlldy5zZWxlY3Rpb25DaGFuZ2Uuc3Vic2NyaWJlKHRoaXMuc2VsZWN0LmJpbmQodGhpcykpKTtcbiAgICAgICAgdGhpcy50cmVlVmlldy5pc1NlbGVjdGVkID0gKGRhdGFJdGVtLCBpbmRleCkgPT4gKHRoaXMuc2VsZWN0ZWRLZXlzLmluZGV4T2YodGhpcy5pdGVtS2V5KHsgZGF0YUl0ZW0sIGluZGV4IH0pKSA+IC0xKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQGhpZGRlblxuICAgICAqL1xuICAgIHNldCBpc1NlbGVjdGVkKHZhbHVlKSB7XG4gICAgICAgIHRoaXMudHJlZVZpZXcuaXNTZWxlY3RlZCA9IHZhbHVlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEZWZpbmVzIHRoZSBjb2xsZWN0aW9uIHRoYXQgd2lsbCBzdG9yZSB0aGUgc2VsZWN0ZWQga2V5c1xuICAgICAqIChbc2VlIGV4YW1wbGVdKHslIHNsdWcgc2VsZWN0aW9uX3RyZWV2aWV3ICV9I3RvYy1zZWxlY3Rpb24tbW9kZXMpKS5cbiAgICAgKi9cbiAgICBnZXQgc2VsZWN0ZWRLZXlzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWRLZXlzO1xuICAgIH1cbiAgICBzZXQgc2VsZWN0ZWRLZXlzKGtleXMpIHtcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWRLZXlzID0ga2V5cztcbiAgICB9XG4gICAgZ2V0IGdldEFyaWFNdWx0aXNlbGVjdGFibGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMubW9kZSA9PT0gJ211bHRpcGxlJztcbiAgICB9XG4gICAgZ2V0IG9wdGlvbnMoKSB7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIG1vZGU6ICdzaW5nbGUnXG4gICAgICAgIH07XG4gICAgICAgIGlmICghaXNQcmVzZW50KHRoaXMuc2VsZWN0aW9uKSkge1xuICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRPcHRpb25zO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGlzQm9vbGVhbiA9IHR5cGVvZiB0aGlzLnNlbGVjdGlvbiA9PT0gJ2Jvb2xlYW4nO1xuICAgICAgICBjb25zdCBzZWxlY3Rpb25TZXR0aW5ncyA9IGlzQm9vbGVhbiA/IHsgZW5hYmxlZDogdGhpcy5zZWxlY3Rpb24gfSA6IHRoaXMuc2VsZWN0aW9uO1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihkZWZhdWx0T3B0aW9ucywgc2VsZWN0aW9uU2V0dGluZ3MpO1xuICAgIH1cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIGl0ZW1LZXkoZSkge1xuICAgICAgICBpZiAoIXRoaXMuc2VsZWN0S2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gZS5pbmRleDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHRoaXMuc2VsZWN0S2V5ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIGUuZGF0YUl0ZW1bdGhpcy5zZWxlY3RLZXldO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5zZWxlY3RLZXkgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNlbGVjdEtleShlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZWxlY3QoZSkge1xuICAgICAgICBjb25zdCB7IGVuYWJsZWQsIG1vZGUgfSA9IHRoaXMub3B0aW9ucztcbiAgICAgICAgY29uc3QgcGVyZm9ybVNlbGVjdGlvbiA9IHRoaXMuc2VsZWN0QWN0aW9uc1ttb2RlXSB8fCBub29wO1xuICAgICAgICBpZiAoIWVuYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBwZXJmb3JtU2VsZWN0aW9uKGUpO1xuICAgIH1cbiAgICBzZWxlY3RTaW5nbGUobm9kZSkge1xuICAgICAgICBjb25zdCBrZXkgPSB0aGlzLml0ZW1LZXkobm9kZSk7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkS2V5c1swXSA9PT0ga2V5KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZWxlY3RlZEtleXMgPSBba2V5XTtcbiAgICAgICAgdGhpcy5ub3RpZnkoKTtcbiAgICB9XG4gICAgc2VsZWN0TXVsdGlwbGUobm9kZSkge1xuICAgICAgICBjb25zdCBrZXkgPSB0aGlzLml0ZW1LZXkobm9kZSk7XG4gICAgICAgIGNvbnN0IGlkeCA9IHRoaXMuc2VsZWN0ZWRLZXlzLmluZGV4T2Yoa2V5KTtcbiAgICAgICAgY29uc3QgaXNTZWxlY3RlZCA9IGlkeCA+IC0xO1xuICAgICAgICBpZiAoIWlzUHJlc2VudChrZXkpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzU2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRLZXlzLnNwbGljZShpZHgsIDEpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEtleXMucHVzaChrZXkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubm90aWZ5KCk7XG4gICAgfVxuICAgIG5vdGlmeSgpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEtleXNDaGFuZ2UuZW1pdCh0aGlzLnNlbGVjdGVkS2V5cy5zbGljZSgpKTtcbiAgICB9XG59XG5TZWxlY3REaXJlY3RpdmUuZGVjb3JhdG9ycyA9IFtcbiAgICB7IHR5cGU6IERpcmVjdGl2ZSwgYXJnczogW3sgc2VsZWN0b3I6ICdba2VuZG9UcmVlVmlld1NlbGVjdGFibGVdJyB9LF0gfSxcbl07XG4vKiogQG5vY29sbGFwc2UgKi9cblNlbGVjdERpcmVjdGl2ZS5jdG9yUGFyYW1ldGVycyA9ICgpID0+IFtcbiAgICB7IHR5cGU6IFRyZWVWaWV3Q29tcG9uZW50LCB9LFxuXTtcblNlbGVjdERpcmVjdGl2ZS5wcm9wRGVjb3JhdG9ycyA9IHtcbiAgICAnaXNTZWxlY3RlZCc6IFt7IHR5cGU6IElucHV0IH0sXSxcbiAgICAnc2VsZWN0S2V5JzogW3sgdHlwZTogSW5wdXQsIGFyZ3M6IFsnc2VsZWN0QnknLF0gfSxdLFxuICAgICdzZWxlY3Rpb24nOiBbeyB0eXBlOiBJbnB1dCwgYXJnczogWydrZW5kb1RyZWVWaWV3U2VsZWN0YWJsZScsXSB9LF0sXG4gICAgJ3NlbGVjdGVkS2V5cyc6IFt7IHR5cGU6IElucHV0IH0sXSxcbiAgICAnc2VsZWN0ZWRLZXlzQ2hhbmdlJzogW3sgdHlwZTogT3V0cHV0IH0sXSxcbiAgICAnZ2V0QXJpYU11bHRpc2VsZWN0YWJsZSc6IFt7IHR5cGU6IEhvc3RCaW5kaW5nLCBhcmdzOiBbJ2F0dHIuYXJpYS1tdWx0aXNlbGVjdGFibGUnLF0gfSxdLFxufTtcblxuLyoqXG4gKiBBIGRpcmVjdGl2ZSB3aGljaCBlbmNhcHN1bGF0ZXMgdGhlIHJldHJpZXZhbCBvZiBjaGlsZCBub2Rlcy5cbiAqL1xuY2xhc3MgSGllcmFyY2h5QmluZGluZ0RpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IodHJlZVZpZXcpIHtcbiAgICAgICAgdGhpcy50cmVlVmlldyA9IHRyZWVWaWV3O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUaGUgZmllbGQgbmFtZSB3aGljaCBob2xkcyB0aGUgZGF0YSBpdGVtcyBvZiB0aGUgY2hpbGQgY29tcG9uZW50LlxuICAgICAqL1xuICAgIHNldCBjaGlsZHJlbkZpZWxkKHZhbHVlKSB7XG4gICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIidjaGlsZHJlbkZpZWxkJyBjYW5ub3QgYmUgZW1wdHlcIik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fY2hpbGRyZW5GaWVsZCA9IHZhbHVlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUaGUgZmllbGQgbmFtZSB3aGljaCBob2xkcyB0aGUgZGF0YSBpdGVtcyBvZiB0aGUgY2hpbGQgY29tcG9uZW50LlxuICAgICAqL1xuICAgIGdldCBjaGlsZHJlbkZpZWxkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2hpbGRyZW5GaWVsZDtcbiAgICB9XG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGlmIChpc1ByZXNlbnQodGhpcy5jaGlsZHJlbkZpZWxkKSkge1xuICAgICAgICAgICAgdGhpcy50cmVlVmlldy5jaGlsZHJlbiA9IGl0ZW0gPT4gb2YkMShnZXR0ZXIodGhpcy5jaGlsZHJlbkZpZWxkLCB0cnVlKShpdGVtKSk7XG4gICAgICAgICAgICB0aGlzLnRyZWVWaWV3Lmhhc0NoaWxkcmVuID0gaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBnZXR0ZXIodGhpcy5jaGlsZHJlbkZpZWxkLCB0cnVlKShpdGVtKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gQm9vbGVhbihjaGlsZHJlbiAmJiBjaGlsZHJlbi5sZW5ndGgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbn1cbkhpZXJhcmNoeUJpbmRpbmdEaXJlY3RpdmUuZGVjb3JhdG9ycyA9IFtcbiAgICB7IHR5cGU6IERpcmVjdGl2ZSwgYXJnczogW3sgc2VsZWN0b3I6ICdba2VuZG9UcmVlVmlld0hpZXJhcmNoeUJpbmRpbmddJyB9LF0gfSxcbl07XG4vKiogQG5vY29sbGFwc2UgKi9cbkhpZXJhcmNoeUJpbmRpbmdEaXJlY3RpdmUuY3RvclBhcmFtZXRlcnMgPSAoKSA9PiBbXG4gICAgeyB0eXBlOiBUcmVlVmlld0NvbXBvbmVudCwgfSxcbl07XG5IaWVyYXJjaHlCaW5kaW5nRGlyZWN0aXZlLnByb3BEZWNvcmF0b3JzID0ge1xuICAgICdjaGlsZHJlbkZpZWxkJzogW3sgdHlwZTogSW5wdXQgfSxdLFxufTtcblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmNsYXNzIExvYWRpbmdJbmRpY2F0b3JEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKGV4cGFuZFNlcnZpY2UsIGxvYWRpbmdTZXJ2aWNlLCBjZCkge1xuICAgICAgICB0aGlzLmV4cGFuZFNlcnZpY2UgPSBleHBhbmRTZXJ2aWNlO1xuICAgICAgICB0aGlzLmxvYWRpbmdTZXJ2aWNlID0gbG9hZGluZ1NlcnZpY2U7XG4gICAgICAgIHRoaXMuY2QgPSBjZDtcbiAgICAgICAgdGhpcy5fbG9hZGluZyA9IGZhbHNlO1xuICAgIH1cbiAgICBnZXQgbG9hZGluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvYWRpbmc7XG4gICAgfVxuICAgIHNldCBsb2FkaW5nKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2xvYWRpbmcgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGNvbnN0IGxvYWRpbmdOb3RpZmljYXRpb25zID0gdGhpcy5sb2FkaW5nU2VydmljZVxuICAgICAgICAgICAgLmNoYW5nZXNcbiAgICAgICAgICAgIC5waXBlKGZpbHRlciQxKGluZGV4ID0+IGluZGV4ID09PSB0aGlzLmluZGV4KSk7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5leHBhbmRTZXJ2aWNlXG4gICAgICAgICAgICAuY2hhbmdlc1xuICAgICAgICAgICAgLnBpcGUoZmlsdGVyJDEoKHsgaW5kZXggfSkgPT4gaW5kZXggPT09IHRoaXMuaW5kZXgpLCB0YXAkMSgoeyBleHBhbmQgfSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFleHBhbmQgJiYgdGhpcy5sb2FkaW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLCBmaWx0ZXIkMSgoeyBleHBhbmQgfSkgPT4gZXhwYW5kKSwgc3dpdGNoTWFwJDEoeCA9PiBvZiQxKHgpLnBpcGUoZGVsYXkkMSgxMDApLCB0YWtlVW50aWwkMShsb2FkaW5nTm90aWZpY2F0aW9ucykpKSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5sb2FkaW5nID0gdHJ1ZSk7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZChsb2FkaW5nTm90aWZpY2F0aW9ucy5zdWJzY3JpYmUoKCkgPT4gdGhpcy5sb2FkaW5nID0gZmFsc2UpKTtcbiAgICB9XG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLnN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbkxvYWRpbmdJbmRpY2F0b3JEaXJlY3RpdmUuZGVjb3JhdG9ycyA9IFtcbiAgICB7IHR5cGU6IERpcmVjdGl2ZSwgYXJnczogW3sgc2VsZWN0b3I6ICdba2VuZG9UcmVlVmlld0xvYWRpbmddJyB9LF0gfSxcbl07XG4vKiogQG5vY29sbGFwc2UgKi9cbkxvYWRpbmdJbmRpY2F0b3JEaXJlY3RpdmUuY3RvclBhcmFtZXRlcnMgPSAoKSA9PiBbXG4gICAgeyB0eXBlOiBFeHBhbmRTdGF0ZVNlcnZpY2UsIH0sXG4gICAgeyB0eXBlOiBMb2FkaW5nTm90aWZpY2F0aW9uU2VydmljZSwgfSxcbiAgICB7IHR5cGU6IENoYW5nZURldGVjdG9yUmVmLCB9LFxuXTtcbkxvYWRpbmdJbmRpY2F0b3JEaXJlY3RpdmUucHJvcERlY29yYXRvcnMgPSB7XG4gICAgJ2xvYWRpbmcnOiBbeyB0eXBlOiBIb3N0QmluZGluZywgYXJnczogW1wiY2xhc3Muay1pLWxvYWRpbmdcIixdIH0sXSxcbiAgICAnaW5kZXgnOiBbeyB0eXBlOiBJbnB1dCwgYXJnczogW1wia2VuZG9UcmVlVmlld0xvYWRpbmdcIixdIH0sXSxcbn07XG5cbi8qKlxuICogQGhpZGRlblxuICogUGVyZm9ybXMgdGhlIHJpZ2h0LXRvLWxlZnQgZnVuY3Rpb24gY29tcG9zaXRpb24uIEZ1bmN0aW9ucyBtdXN0IGhhdmUgYSB1bmFyeS5cbiAqL1xuY29uc3QgY29tcG9zZSA9ICguLi5hcmdzKSA9PiAoZGF0YSkgPT4gYXJncy5yZWR1Y2VSaWdodCgoYWNjLCBjdXJyKSA9PiBjdXJyKGFjYyksIGRhdGEpO1xuXG5jb25zdCBmaW5kQ2hpbGRyZW4gPSAocHJvcCwgbm9kZXMsIHZhbHVlKSA9PiBub2Rlcy5maWx0ZXIoeCA9PiBwcm9wKHgpID09PSB2YWx1ZSk7XG4vKipcbiAqIEEgZGlyZWN0aXZlIHdoaWNoIGVuY2Fwc3VsYXRlcyB0aGUgcmV0cmlldmFsIG9mIHRoZSBjaGlsZCBub2Rlcy5cbiAqL1xuY2xhc3MgRmxhdERhdGFCaW5kaW5nRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3Rvcih0cmVlVmlldykge1xuICAgICAgICB0aGlzLnRyZWVWaWV3ID0gdHJlZVZpZXc7XG4gICAgICAgIHRoaXMub3JpZ2luYWxEYXRhID0gW107XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRoZSBub2RlcyB3aGljaCB3aWxsIGJlIGRpc3BsYXllZCBieSB0aGUgVHJlZVZpZXcuXG4gICAgICovXG4gICAgc2V0IG5vZGVzKHZhbHVlcykge1xuICAgICAgICB0aGlzLm9yaWdpbmFsRGF0YSA9IHZhbHVlcyB8fCBbXTtcbiAgICAgICAgaWYgKCFpc051bGxPckVtcHR5U3RyaW5nKHRoaXMucGFyZW50SWRGaWVsZCkpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb3AgPSBnZXR0ZXIodGhpcy5wYXJlbnRJZEZpZWxkLCB0cnVlKTtcbiAgICAgICAgICAgIHRoaXMudHJlZVZpZXcubm9kZXMgPSAodGhpcy5vcmlnaW5hbERhdGEpLmZpbHRlcihjb21wb3NlKGlzQmxhbmssIHByb3ApKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudHJlZVZpZXcubm9kZXMgPSB0aGlzLm9yaWdpbmFsRGF0YS5zbGljZSgwKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGlmIChpc1ByZXNlbnQodGhpcy5wYXJlbnRJZEZpZWxkKSAmJiBpc1ByZXNlbnQodGhpcy5pZEZpZWxkKSkge1xuICAgICAgICAgICAgY29uc3QgZmV0Y2hDaGlsZHJlbiA9IG5vZGUgPT4gZmluZENoaWxkcmVuKGdldHRlcih0aGlzLnBhcmVudElkRmllbGQsIHRydWUpLCB0aGlzLm9yaWdpbmFsRGF0YSB8fCBbXSwgZ2V0dGVyKHRoaXMuaWRGaWVsZCwgdHJ1ZSkobm9kZSkpO1xuICAgICAgICAgICAgdGhpcy50cmVlVmlldy5oYXNDaGlsZHJlbiA9IG5vZGUgPT4gZmV0Y2hDaGlsZHJlbihub2RlKS5sZW5ndGggPiAwO1xuICAgICAgICAgICAgdGhpcy50cmVlVmlldy5jaGlsZHJlbiA9IG5vZGUgPT4gb2YkMShmZXRjaENoaWxkcmVuKG5vZGUpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlcykge1xuICAgICAgICBpZiAoaXNDaGFuZ2VkKFwicGFyZW50SWRGaWVsZFwiLCBjaGFuZ2VzLCBmYWxzZSkpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZXMgPSB0aGlzLm9yaWdpbmFsRGF0YTtcbiAgICAgICAgfVxuICAgIH1cbn1cbkZsYXREYXRhQmluZGluZ0RpcmVjdGl2ZS5kZWNvcmF0b3JzID0gW1xuICAgIHsgdHlwZTogRGlyZWN0aXZlLCBhcmdzOiBbeyBzZWxlY3RvcjogJ1trZW5kb1RyZWVWaWV3RmxhdERhdGFCaW5kaW5nXScgfSxdIH0sXG5dO1xuLyoqIEBub2NvbGxhcHNlICovXG5GbGF0RGF0YUJpbmRpbmdEaXJlY3RpdmUuY3RvclBhcmFtZXRlcnMgPSAoKSA9PiBbXG4gICAgeyB0eXBlOiBUcmVlVmlld0NvbXBvbmVudCwgfSxcbl07XG5GbGF0RGF0YUJpbmRpbmdEaXJlY3RpdmUucHJvcERlY29yYXRvcnMgPSB7XG4gICAgJ25vZGVzJzogW3sgdHlwZTogSW5wdXQgfSxdLFxuICAgICdwYXJlbnRJZEZpZWxkJzogW3sgdHlwZTogSW5wdXQgfSxdLFxuICAgICdpZEZpZWxkJzogW3sgdHlwZTogSW5wdXQgfSxdLFxufTtcblxuY29uc3QgYnVpbGRJdGVtID0gKGluZGV4LCBkYXRhSXRlbSkgPT4gKHsgZGF0YUl0ZW0sIGluZGV4IH0pO1xubGV0IGlkID0gMDtcbi8qKlxuICogQGhpZGRlblxuICpcbiAqIEEgZGlyZWN0aXZlIHdoaWNoIG1hbmFnZXMgdGhlIGV4cGFuZGVkIHN0YXRlIG9mIHRoZSBUcmVlVmlldy5cbiAqL1xuY2xhc3MgVHJlZVZpZXdJdGVtRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBleHBhbmRTZXJ2aWNlLCBuYXZpZ2F0aW9uU2VydmljZSwgc2VsZWN0aW9uU2VydmljZSwgbG9va3VwU2VydmljZSwgcmVuZGVyZXIsIGliKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMuZXhwYW5kU2VydmljZSA9IGV4cGFuZFNlcnZpY2U7XG4gICAgICAgIHRoaXMubmF2aWdhdGlvblNlcnZpY2UgPSBuYXZpZ2F0aW9uU2VydmljZTtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25TZXJ2aWNlID0gc2VsZWN0aW9uU2VydmljZTtcbiAgICAgICAgdGhpcy5sb29rdXBTZXJ2aWNlID0gbG9va3VwU2VydmljZTtcbiAgICAgICAgdGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyO1xuICAgICAgICB0aGlzLmliID0gaWI7XG4gICAgICAgIHRoaXMuaXNEaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmFyaWFDaGVja2VkID0gJ2ZhbHNlJztcbiAgICAgICAgdGhpcy5pZCA9IGlkKys7XG4gICAgICAgIHRoaXMuaXNJbml0aWFsaXplZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMgPSBbXTtcbiAgICAgICAgdGhpcy5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgc2V0IGlzQ2hlY2tlZChjaGVja2VkKSB7XG4gICAgICAgIGlmIChjaGVja2VkID09PSAnY2hlY2tlZCcpIHtcbiAgICAgICAgICAgIHRoaXMuYXJpYUNoZWNrZWQgPSAndHJ1ZSc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY2hlY2tlZCA9PT0gJ2luZGV0ZXJtaW5hdGUnKSB7XG4gICAgICAgICAgICB0aGlzLmFyaWFDaGVja2VkID0gJ21peGVkJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYXJpYUNoZWNrZWQgPSAnZmFsc2UnO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldCBpc0V4cGFuZGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNFeHBhbmRlZCB8fCBmYWxzZTtcbiAgICB9XG4gICAgc2V0IGlzRXhwYW5kZWQoaXNFeHBhbmRlZCkge1xuICAgICAgICB0aGlzLl9pc0V4cGFuZGVkID0gaXNFeHBhbmRlZDtcbiAgICB9XG4gICAgZ2V0IGlzU2VsZWN0ZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc1NlbGVjdGVkIHx8IGZhbHNlO1xuICAgIH1cbiAgICBzZXQgaXNTZWxlY3RlZChpc1NlbGVjdGVkKSB7XG4gICAgICAgIHRoaXMuX2lzU2VsZWN0ZWQgPSBpc1NlbGVjdGVkO1xuICAgIH1cbiAgICBnZXQgdHJlZUl0ZW0oKSB7XG4gICAgICAgIHJldHVybiBidWlsZEl0ZW0odGhpcy5pbmRleCwgdGhpcy5kYXRhSXRlbSk7XG4gICAgfVxuICAgIGdldCBwYXJlbnRUcmVlSXRlbSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50RGF0YUl0ZW0gPyBidWlsZEl0ZW0odGhpcy5wYXJlbnRJbmRleCwgdGhpcy5wYXJlbnREYXRhSXRlbSkgOiBudWxsO1xuICAgIH1cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5sb29rdXBTZXJ2aWNlLnJlZ2lzdGVySXRlbSh0aGlzLnRyZWVJdGVtLCB0aGlzLnBhcmVudFRyZWVJdGVtKTtcbiAgICAgICAgdGhpcy5yZWdpc3Rlck5hdmlnYXRpb25JdGVtKCk7XG4gICAgICAgIHRoaXMuaXNJbml0aWFsaXplZCA9IHRydWU7XG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdyb2xlJywgJ3RyZWVpdGVtJyk7XG4gICAgICAgIHRoaXMuc2V0QXJpYUF0dHJpYnV0ZXMoKTtcbiAgICAgICAgdGhpcy5zZXREaXNhYmxlZENsYXNzKCk7XG4gICAgICAgIHRoaXMudXBkYXRlVGFiSW5kZXgoKTtcbiAgICB9XG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlcykge1xuICAgICAgICBjb25zdCB7IGluZGV4LCBpc0Rpc2FibGVkIH0gPSBjaGFuZ2VzO1xuICAgICAgICBpZiAoaW5kZXggfHwgY2hhbmdlcy5pc0NoZWNrZWQgfHwgY2hhbmdlcy5pc0V4cGFuZGVkIHx8IGNoYW5nZXMuaXNTZWxlY3RlZCkge1xuICAgICAgICAgICAgdGhpcy5zZXRBcmlhQXR0cmlidXRlcygpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0Rpc2FibGVkKSB7XG4gICAgICAgICAgICB0aGlzLnNldERpc2FibGVkQ2xhc3MoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1vdmVMb29rdXBJdGVtKGNoYW5nZXMpO1xuICAgICAgICB0aGlzLm1vdmVOYXZpZ2F0aW9uSXRlbShpbmRleCk7XG4gICAgICAgIHRoaXMuZGlzYWJsZU5hdmlnYXRpb25JdGVtKGlzRGlzYWJsZWQpO1xuICAgIH1cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5uYXZpZ2F0aW9uU2VydmljZS51bnJlZ2lzdGVySXRlbSh0aGlzLmlkLCB0aGlzLmluZGV4KTtcbiAgICAgICAgdGhpcy5sb29rdXBTZXJ2aWNlLnVucmVnaXN0ZXJJdGVtKHRoaXMuaW5kZXgsIHRoaXMuZGF0YUl0ZW0pO1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMgPSB0aGlzLnN1YnNjcmlwdGlvbnMucmVkdWNlKChsaXN0LCBjYWxsYmFjaykgPT4gKGNhbGxiYWNrLnVuc3Vic2NyaWJlKCksIGxpc3QpLCBbXSk7XG4gICAgfVxuICAgIHN1YnNjcmliZSgpIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zID0gW1xuICAgICAgICAgICAgdGhpcy5uYXZpZ2F0aW9uU2VydmljZS5tb3Zlc1xuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVGFiSW5kZXgoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmZvY3VzSXRlbSgpO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLmV4cGFuZHNcbiAgICAgICAgICAgICAgICAucGlwZShmaWx0ZXIkMSgoeyBpbmRleCB9KSA9PiBpbmRleCA9PT0gdGhpcy5pbmRleCAmJiAhdGhpcy5pc0Rpc2FibGVkKSlcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKCh7IGV4cGFuZCB9KSA9PiB0aGlzLmV4cGFuZChleHBhbmQpKVxuICAgICAgICBdO1xuICAgIH1cbiAgICByZWdpc3Rlck5hdmlnYXRpb25JdGVtKCkge1xuICAgICAgICB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLnJlZ2lzdGVySXRlbSh0aGlzLmlkLCB0aGlzLmluZGV4LCB0aGlzLmlzRGlzYWJsZWQpO1xuICAgICAgICB0aGlzLmFjdGl2YXRlSXRlbSgpO1xuICAgIH1cbiAgICBhY3RpdmF0ZUl0ZW0oKSB7XG4gICAgICAgIGlmICh0aGlzLmlzRGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuYXZpZ2F0aW9uU2VydmljZSA9IHRoaXMubmF2aWdhdGlvblNlcnZpY2U7XG4gICAgICAgIGNvbnN0IHNlbGVjdGlvblNlcnZpY2UgPSB0aGlzLnNlbGVjdGlvblNlcnZpY2U7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5pbmRleDtcbiAgICAgICAgc2VsZWN0aW9uU2VydmljZS5zZXRGaXJzdFNlbGVjdGVkKGluZGV4LCB0aGlzLmlzU2VsZWN0ZWQpO1xuICAgICAgICBpZiAoIW5hdmlnYXRpb25TZXJ2aWNlLmlzQWN0aXZlKGluZGV4KSAmJiBzZWxlY3Rpb25TZXJ2aWNlLmlzRmlyc3RTZWxlY3RlZChpbmRleCkpIHtcbiAgICAgICAgICAgIG5hdmlnYXRpb25TZXJ2aWNlLmFjdGl2YXRlSW5kZXgoaW5kZXgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGV4cGFuZChzaG91bGRFeHBhbmQpIHtcbiAgICAgICAgdGhpcy5leHBhbmRTZXJ2aWNlW3Nob3VsZEV4cGFuZCA/ICdleHBhbmQnIDogJ2NvbGxhcHNlJ10odGhpcy5pbmRleCwgdGhpcy5kYXRhSXRlbSk7XG4gICAgfVxuICAgIGlzRm9jdXNhYmxlKCkge1xuICAgICAgICByZXR1cm4gIXRoaXMuaXNEaXNhYmxlZCAmJiB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLmlzRm9jdXNhYmxlKHRoaXMuaW5kZXgpO1xuICAgIH1cbiAgICBmb2N1c0l0ZW0oKSB7XG4gICAgICAgIGlmICh0aGlzLmlzSW5pdGlhbGl6ZWQgJiYgdGhpcy5uYXZpZ2F0aW9uU2VydmljZS5pc0FjdGl2ZSh0aGlzLmluZGV4KSkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBtb3ZlTG9va3VwSXRlbShjaGFuZ2VzID0ge30pIHtcbiAgICAgICAgY29uc3QgeyBkYXRhSXRlbSwgaW5kZXgsIHBhcmVudERhdGFJdGVtLCBwYXJlbnRJbmRleCB9ID0gY2hhbmdlcztcbiAgICAgICAgaWYgKChpbmRleCAmJiBpbmRleC5maXJzdENoYW5nZSkgfHwgLy9za2lwIGZpcnN0IGNoYW5nZVxuICAgICAgICAgICAgKCFkYXRhSXRlbSAmJiAhaW5kZXggJiYgIXBhcmVudERhdGFJdGVtICYmICFwYXJlbnRJbmRleCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBvbGRJbmRleCA9IChpbmRleCB8fCB7fSkucHJldmlvdXNWYWx1ZSB8fCB0aGlzLmluZGV4O1xuICAgICAgICB0aGlzLmxvb2t1cFNlcnZpY2UucmVwbGFjZUl0ZW0ob2xkSW5kZXgsIHRoaXMudHJlZUl0ZW0sIHRoaXMucGFyZW50VHJlZUl0ZW0pO1xuICAgIH1cbiAgICBtb3ZlTmF2aWdhdGlvbkl0ZW0oaW5kZXhDaGFuZ2UgPSB7fSkge1xuICAgICAgICBjb25zdCB7IGN1cnJlbnRWYWx1ZSwgZmlyc3RDaGFuZ2UsIHByZXZpb3VzVmFsdWUgfSA9IGluZGV4Q2hhbmdlO1xuICAgICAgICBpZiAoIWZpcnN0Q2hhbmdlICYmIGlzUHJlc2VudChjdXJyZW50VmFsdWUpICYmIGlzUHJlc2VudChwcmV2aW91c1ZhbHVlKSkge1xuICAgICAgICAgICAgdGhpcy5uYXZpZ2F0aW9uU2VydmljZS51bnJlZ2lzdGVySXRlbSh0aGlzLmlkLCBwcmV2aW91c1ZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMubmF2aWdhdGlvblNlcnZpY2UucmVnaXN0ZXJJdGVtKHRoaXMuaWQsIGN1cnJlbnRWYWx1ZSwgdGhpcy5pc0Rpc2FibGVkKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkaXNhYmxlTmF2aWdhdGlvbkl0ZW0oZGlzYWJsZUNoYW5nZSkge1xuICAgICAgICBpZiAoIWRpc2FibGVDaGFuZ2UgfHwgZGlzYWJsZUNoYW5nZS5maXJzdENoYW5nZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzLm5hdmlnYXRpb25TZXJ2aWNlO1xuICAgICAgICBpZiAodGhpcy5pc0Rpc2FibGVkKSB7XG4gICAgICAgICAgICBzZXJ2aWNlLmFjdGl2YXRlQ2xvc2VzdCh0aGlzLmluZGV4KTsgLy9hY3RpdmF0ZSBiZWZvcmUgdW5yZWdpc3RlciB0aGUgaXRlbVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2VydmljZS5hY3RpdmF0ZUZvY3VzYWJsZSgpO1xuICAgICAgICB9XG4gICAgICAgIHNlcnZpY2UudW5yZWdpc3Rlckl0ZW0odGhpcy5pZCwgdGhpcy5pbmRleCk7XG4gICAgICAgIHNlcnZpY2UucmVnaXN0ZXJJdGVtKHRoaXMuaWQsIHRoaXMuaW5kZXgsIHRoaXMuaXNEaXNhYmxlZCk7XG4gICAgfVxuICAgIHNldEFyaWFBdHRyaWJ1dGVzKCkge1xuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnYXJpYS1sZXZlbCcsIHRoaXMuaWIubGV2ZWwodGhpcy5pbmRleCkudG9TdHJpbmcoKSk7XG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgdGhpcy5pc0V4cGFuZGVkLnRvU3RyaW5nKCkpO1xuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcsIHRoaXMuaXNTZWxlY3RlZC50b1N0cmluZygpKTtcbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2FyaWEtY2hlY2tlZCcsIHRoaXMuYXJpYUNoZWNrZWQpO1xuICAgIH1cbiAgICBzZXREaXNhYmxlZENsYXNzKCkge1xuICAgICAgICB0aGlzLnNldENsYXNzKCdrLXN0YXRlLWRpc2FibGVkJywgdGhpcy5pc0Rpc2FibGVkKTtcbiAgICB9XG4gICAgc2V0Q2xhc3MoY2xhc3NOYW1lLCB0b2dnbGUpIHtcbiAgICAgICAgY29uc3QgYWN0aW9uID0gdG9nZ2xlID8gJ2FkZENsYXNzJyA6ICdyZW1vdmVDbGFzcyc7XG4gICAgICAgIHRoaXMucmVuZGVyZXJbYWN0aW9uXSh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgY2xhc3NOYW1lKTtcbiAgICB9XG4gICAgdXBkYXRlVGFiSW5kZXgoKSB7XG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCd0YWJJbmRleCcsIHRoaXMuaXNGb2N1c2FibGUoKSA/ICcwJyA6ICctMScpO1xuICAgIH1cbiAgICBzZXRBdHRyaWJ1dGUoYXR0ciwgdmFsdWUpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIGF0dHIsIHZhbHVlKTtcbiAgICB9XG59XG5UcmVlVmlld0l0ZW1EaXJlY3RpdmUuZGVjb3JhdG9ycyA9IFtcbiAgICB7IHR5cGU6IERpcmVjdGl2ZSwgYXJnczogW3sgc2VsZWN0b3I6ICdba2VuZG9UcmVlVmlld0l0ZW1dJyB9LF0gfSxcbl07XG4vKiogQG5vY29sbGFwc2UgKi9cblRyZWVWaWV3SXRlbURpcmVjdGl2ZS5jdG9yUGFyYW1ldGVycyA9ICgpID0+IFtcbiAgICB7IHR5cGU6IEVsZW1lbnRSZWYsIH0sXG4gICAgeyB0eXBlOiBFeHBhbmRTdGF0ZVNlcnZpY2UsIH0sXG4gICAgeyB0eXBlOiBOYXZpZ2F0aW9uU2VydmljZSwgfSxcbiAgICB7IHR5cGU6IFNlbGVjdGlvblNlcnZpY2UsIH0sXG4gICAgeyB0eXBlOiBUcmVlVmlld0xvb2t1cFNlcnZpY2UsIH0sXG4gICAgeyB0eXBlOiBSZW5kZXJlcjIsIH0sXG4gICAgeyB0eXBlOiBJbmRleEJ1aWxkZXJTZXJ2aWNlLCB9LFxuXTtcblRyZWVWaWV3SXRlbURpcmVjdGl2ZS5wcm9wRGVjb3JhdG9ycyA9IHtcbiAgICAnZGF0YUl0ZW0nOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG4gICAgJ2luZGV4JzogW3sgdHlwZTogSW5wdXQgfSxdLFxuICAgICdwYXJlbnREYXRhSXRlbSc6IFt7IHR5cGU6IElucHV0IH0sXSxcbiAgICAncGFyZW50SW5kZXgnOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG4gICAgJ2lzQ2hlY2tlZCc6IFt7IHR5cGU6IElucHV0IH0sXSxcbiAgICAnaXNEaXNhYmxlZCc6IFt7IHR5cGU6IElucHV0IH0sXSxcbiAgICAnaXNFeHBhbmRlZCc6IFt7IHR5cGU6IElucHV0IH0sXSxcbiAgICAnaXNTZWxlY3RlZCc6IFt7IHR5cGU6IElucHV0IH0sXSxcbn07XG5cbi8qKlxuICogQGhpZGRlblxuICpcbiAqIEEgZGlyZWN0aXZlIHdoaWNoIG1hbmFnZXMgdGhlIGV4cGFuZGVkIHN0YXRlIG9mIHRoZSBUcmVlVmlldy5cbiAqL1xuY2xhc3MgVHJlZVZpZXdJdGVtQ29udGVudERpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgbmF2aWdhdGlvblNlcnZpY2UsIHNlbGVjdGlvblNlcnZpY2UsIHJlbmRlcmVyKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMubmF2aWdhdGlvblNlcnZpY2UgPSBuYXZpZ2F0aW9uU2VydmljZTtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25TZXJ2aWNlID0gc2VsZWN0aW9uU2VydmljZTtcbiAgICAgICAgdGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyO1xuICAgICAgICB0aGlzLmluaXRpYWxTZWxlY3Rpb24gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zID0gbmV3IFN1YnNjcmlwdGlvbiQxKCgpID0+IHsgfSk7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5hZGQodGhpcy5uYXZpZ2F0aW9uU2VydmljZS5tb3Zlc1xuICAgICAgICAgICAgLnN1YnNjcmliZSh0aGlzLnVwZGF0ZUl0ZW0uYmluZCh0aGlzKSkpO1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMuYWRkKHRoaXMubmF2aWdhdGlvblNlcnZpY2Uuc2VsZWN0c1xuICAgICAgICAgICAgLnBpcGUoZmlsdGVyJDEoKGluZGV4KSA9PiBpbmRleCA9PT0gdGhpcy5pbmRleCkpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChpbmRleCkgPT4gdGhpcy5zZWxlY3Rpb25TZXJ2aWNlLnNlbGVjdChpbmRleCwgdGhpcy5kYXRhSXRlbSkpKTtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLmFkZCh0aGlzLnNlbGVjdGlvblNlcnZpY2UuY2hhbmdlc1xuICAgICAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNlbGVjdGlvbih0aGlzLmlzU2VsZWN0ZWQodGhpcy5kYXRhSXRlbSwgdGhpcy5pbmRleCkpO1xuICAgICAgICB9KSk7XG4gICAgfVxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXMpIHtcbiAgICAgICAgaWYgKGNoYW5nZXMuaW5pdGlhbFNlbGVjdGlvbikge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTZWxlY3Rpb24odGhpcy5pbml0aWFsU2VsZWN0aW9uKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy51cGRhdGVTZWxlY3Rpb24odGhpcy5pbml0aWFsU2VsZWN0aW9uKTtcbiAgICB9XG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICB1cGRhdGVJdGVtKCkge1xuICAgICAgICB0aGlzLnJlbmRlcih0aGlzLm5hdmlnYXRpb25TZXJ2aWNlLmlzQWN0aXZlKHRoaXMuaW5kZXgpLCAnay1zdGF0ZS1mb2N1c2VkJyk7XG4gICAgfVxuICAgIHVwZGF0ZVNlbGVjdGlvbihzZWxlY3RlZCkge1xuICAgICAgICB0aGlzLnJlbmRlcihzZWxlY3RlZCwgJ2stc3RhdGUtc2VsZWN0ZWQnKTtcbiAgICB9XG4gICAgcmVuZGVyKGFkZENsYXNzLCBjbGFzc05hbWUpIHtcbiAgICAgICAgY29uc3QgYWN0aW9uID0gYWRkQ2xhc3MgPyAnYWRkQ2xhc3MnIDogJ3JlbW92ZUNsYXNzJztcbiAgICAgICAgdGhpcy5yZW5kZXJlclthY3Rpb25dKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCBjbGFzc05hbWUpO1xuICAgIH1cbn1cblRyZWVWaWV3SXRlbUNvbnRlbnREaXJlY3RpdmUuZGVjb3JhdG9ycyA9IFtcbiAgICB7IHR5cGU6IERpcmVjdGl2ZSwgYXJnczogW3sgc2VsZWN0b3I6ICdba2VuZG9UcmVlVmlld0l0ZW1Db250ZW50XScgfSxdIH0sXG5dO1xuLyoqIEBub2NvbGxhcHNlICovXG5UcmVlVmlld0l0ZW1Db250ZW50RGlyZWN0aXZlLmN0b3JQYXJhbWV0ZXJzID0gKCkgPT4gW1xuICAgIHsgdHlwZTogRWxlbWVudFJlZiwgfSxcbiAgICB7IHR5cGU6IE5hdmlnYXRpb25TZXJ2aWNlLCB9LFxuICAgIHsgdHlwZTogU2VsZWN0aW9uU2VydmljZSwgfSxcbiAgICB7IHR5cGU6IFJlbmRlcmVyMiwgfSxcbl07XG5UcmVlVmlld0l0ZW1Db250ZW50RGlyZWN0aXZlLnByb3BEZWNvcmF0b3JzID0ge1xuICAgICdkYXRhSXRlbSc6IFt7IHR5cGU6IElucHV0IH0sXSxcbiAgICAnaW5kZXgnOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG4gICAgJ2luaXRpYWxTZWxlY3Rpb24nOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG4gICAgJ2lzU2VsZWN0ZWQnOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG59O1xuXG4vKipcbiAqIEBoaWRkZW5cbiAqXG4gKiBSZXByZXNlbnRzIHRoZSBDaGVja0JveCBjb21wb25lbnQgb2YgdGhlIEtlbmRvIFVJIFRyZWVWaWV3IGZvciBBbmd1bGFyLlxuICpcbiAqL1xuY2xhc3MgQ2hlY2tCb3hDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIHJlbmRlcmVyLCBjaGFuZ2VEZXRlY3Rvcikge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLnJlbmRlcmVyID0gcmVuZGVyZXI7XG4gICAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3IgPSBjaGFuZ2VEZXRlY3RvcjtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNwZWNpZmllcyB0aGUgW2BpZGBdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUTUwvR2xvYmFsX2F0dHJpYnV0ZXMvaWQpIG9mIHRoZSBjb21wb25lbnQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmlkID0gYF8ke2d1aWQoKX1gO1xuICAgICAgICAvKipcbiAgICAgICAgICogU3BlY2lmaWVzIHRoZSBbYHRhYmluZGV4YF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRNTC9HbG9iYWxfYXR0cmlidXRlcy90YWJpbmRleCkgb2YgdGhlIGNvbXBvbmVudC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudGFiaW5kZXggPSAwO1xuICAgICAgICAvKipcbiAgICAgICAgICogRmlyZXMgd2hlbiB0aGUgdXNlciBjaGFuZ2VzIHRoZSBjaGVjayBzdGF0ZSBvZiB0aGUgY29tcG9uZW50LlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5jaGVja1N0YXRlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgICAgICB0aGlzLmNoZWNrU3RhdGUgPSAnbm9uZSc7XG4gICAgfVxuICAgIC8vWFhYOiBpbXBsZW1lbnQgQ29tcG9uZW50VmFsdWVBY2Nlc3NvclxuICAgIC8vWFhYOiBmb2N1cy9ibHVyIG1ldGhvZHNcbiAgICBnZXQgY2xhc3NXcmFwcGVyKCkgeyByZXR1cm4gdHJ1ZTsgfVxuICAgIGdldCBpbmRldGVybWluYXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGVja1N0YXRlID09PSAnaW5kZXRlcm1pbmF0ZSc7XG4gICAgfVxuICAgIGdldCBjaGVja2VkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGVja1N0YXRlID09PSAnY2hlY2tlZCc7XG4gICAgfVxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUF0dHJpYnV0ZSh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgXCJ0YWJpbmRleFwiKTtcbiAgICB9XG4gICAgbmdEb0NoZWNrKCkge1xuICAgICAgICB0aGlzLmNoZWNrU3RhdGUgPSB0aGlzLmlzQ2hlY2tlZCh0aGlzLm5vZGUsIHRoaXMuaW5kZXgpO1xuICAgIH1cbiAgICBoYW5kbGVDaGFuZ2UoZSkge1xuICAgICAgICBjb25zdCBzdGF0ZSA9IGUudGFyZ2V0LmNoZWNrZWQgPyAnY2hlY2tlZCcgOiAnbm9uZSc7XG4gICAgICAgIC8vIHVwZGF0ZSB0aGUgVmlldyBTdGF0ZSBzbyB0aGF0IEFuZ3VsYXIgdXBkYXRlcyB0aGUgaW5wdXQgaWYgdGhlIGlzQ2hlY2tlZCB2YWx1ZSBpcyB0aGUgc2FtZVxuICAgICAgICB0aGlzLmNoZWNrU3RhdGUgPSBzdGF0ZTtcbiAgICAgICAgdGhpcy5jaGFuZ2VEZXRlY3Rvci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIHRoaXMuY2hlY2tTdGF0ZUNoYW5nZS5lbWl0KHN0YXRlKTtcbiAgICB9XG59XG5DaGVja0JveENvbXBvbmVudC5kZWNvcmF0b3JzID0gW1xuICAgIHsgdHlwZTogQ29tcG9uZW50LCBhcmdzOiBbe1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAna2VuZG8tY2hlY2tib3gnLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgY2xhc3M9XCJrLWNoZWNrYm94XCJcbiAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICBbaWRdPVwiaWRcIlxuICAgICAgICAgICAgW2NoZWNrZWRdPVwiY2hlY2tlZFwiXG4gICAgICAgICAgICBbaW5kZXRlcm1pbmF0ZV09XCJpbmRldGVybWluYXRlXCJcbiAgICAgICAgICAgIFt0YWJpbmRleF09XCJ0YWJpbmRleFwiXG4gICAgICAgICAgICAoY2hhbmdlKT1cImhhbmRsZUNoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICBjbGFzcz1cImstY2hlY2tib3gtbGFiZWxcIlxuICAgICAgICAgICAgdGFiaW5kZXg9XCItMVwiXG4gICAgICAgICAgICBbZm9yXT1cImlkXCJcbiAgICAgICAgPnt7bGFiZWxUZXh0fX08L2xhYmVsPlxuICAgIGBcbiAgICAgICAgICAgIH0sXSB9LFxuXTtcbi8qKiBAbm9jb2xsYXBzZSAqL1xuQ2hlY2tCb3hDb21wb25lbnQuY3RvclBhcmFtZXRlcnMgPSAoKSA9PiBbXG4gICAgeyB0eXBlOiBFbGVtZW50UmVmLCB9LFxuICAgIHsgdHlwZTogUmVuZGVyZXIyLCB9LFxuICAgIHsgdHlwZTogQ2hhbmdlRGV0ZWN0b3JSZWYsIH0sXG5dO1xuQ2hlY2tCb3hDb21wb25lbnQucHJvcERlY29yYXRvcnMgPSB7XG4gICAgJ2NsYXNzV3JhcHBlcic6IFt7IHR5cGU6IEhvc3RCaW5kaW5nLCBhcmdzOiBbJ2NsYXNzLmstY2hlY2tib3gtd3JhcHBlcicsXSB9LF0sXG4gICAgJ2lkJzogW3sgdHlwZTogSW5wdXQgfSxdLFxuICAgICdpc0NoZWNrZWQnOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG4gICAgJ25vZGUnOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG4gICAgJ2luZGV4JzogW3sgdHlwZTogSW5wdXQgfSxdLFxuICAgICdsYWJlbFRleHQnOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG4gICAgJ3RhYmluZGV4JzogW3sgdHlwZTogSW5wdXQgfSxdLFxuICAgICdjaGVja1N0YXRlQ2hhbmdlJzogW3sgdHlwZTogT3V0cHV0IH0sXSxcbn07XG5cbmNvbnN0IENPTVBPTkVOVF9ESVJFQ1RJVkVTID0gW1xuICAgIENoZWNrQm94Q29tcG9uZW50XG5dO1xuLyoqXG4gKiBAaGlkZGVuXG4gKlxuICogUmVwcmVzZW50cyB0aGUgW05nTW9kdWxlXSh7eyBzaXRlLmRhdGEudXJscy5hbmd1bGFyWyduZ21vZHVsZWFwaSddIH19KSBkZWZpbml0aW9uIGZvciB0aGUgQ2hlY2tCb3ggY29tcG9uZW50LlxuICovXG5jbGFzcyBDaGVja0JveE1vZHVsZSB7XG59XG5DaGVja0JveE1vZHVsZS5kZWNvcmF0b3JzID0gW1xuICAgIHsgdHlwZTogTmdNb2R1bGUsIGFyZ3M6IFt7XG4gICAgICAgICAgICAgICAgZGVjbGFyYXRpb25zOiBbQ09NUE9ORU5UX0RJUkVDVElWRVNdLFxuICAgICAgICAgICAgICAgIGV4cG9ydHM6IFtDT01QT05FTlRfRElSRUNUSVZFU11cbiAgICAgICAgICAgIH0sXSB9LFxuXTtcbi8qKiBAbm9jb2xsYXBzZSAqL1xuQ2hlY2tCb3hNb2R1bGUuY3RvclBhcmFtZXRlcnMgPSAoKSA9PiBbXTtcblxuY29uc3QgQ09NUE9ORU5UX0RJUkVDVElWRVMkMSA9IFtcbiAgICBUcmVlVmlld0NvbXBvbmVudCxcbiAgICBUcmVlVmlld0dyb3VwQ29tcG9uZW50LFxuICAgIFRyZWVWaWV3SXRlbURpcmVjdGl2ZSxcbiAgICBUcmVlVmlld0l0ZW1Db250ZW50RGlyZWN0aXZlLFxuICAgIE5vZGVUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICBDaGVja0RpcmVjdGl2ZSxcbiAgICBEaXNhYmxlRGlyZWN0aXZlLFxuICAgIEV4cGFuZERpcmVjdGl2ZSxcbiAgICBTZWxlY3REaXJlY3RpdmUsXG4gICAgSGllcmFyY2h5QmluZGluZ0RpcmVjdGl2ZSxcbiAgICBMb2FkaW5nSW5kaWNhdG9yRGlyZWN0aXZlLFxuICAgIEZsYXREYXRhQmluZGluZ0RpcmVjdGl2ZVxuXTtcbi8qKlxuICogQGhpZGRlblxuICovXG5jbGFzcyBTaGFyZWRNb2R1bGUge1xufVxuU2hhcmVkTW9kdWxlLmRlY29yYXRvcnMgPSBbXG4gICAgeyB0eXBlOiBOZ01vZHVsZSwgYXJnczogW3tcbiAgICAgICAgICAgICAgICBkZWNsYXJhdGlvbnM6IFtDT01QT05FTlRfRElSRUNUSVZFUyQxXSxcbiAgICAgICAgICAgICAgICBleHBvcnRzOiBbQ09NUE9ORU5UX0RJUkVDVElWRVMkMV0sXG4gICAgICAgICAgICAgICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgQ2hlY2tCb3hNb2R1bGVdXG4gICAgICAgICAgICB9LF0gfSxcbl07XG4vKiogQG5vY29sbGFwc2UgKi9cblNoYXJlZE1vZHVsZS5jdG9yUGFyYW1ldGVycyA9ICgpID0+IFtdO1xuXG5jb25zdCBFWFBPUlRTID0gW1xuICAgIFRyZWVWaWV3Q29tcG9uZW50LFxuICAgIE5vZGVUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICBDaGVja0RpcmVjdGl2ZSxcbiAgICBEaXNhYmxlRGlyZWN0aXZlLFxuICAgIEV4cGFuZERpcmVjdGl2ZSxcbiAgICBTZWxlY3REaXJlY3RpdmUsXG4gICAgSGllcmFyY2h5QmluZGluZ0RpcmVjdGl2ZSxcbiAgICBGbGF0RGF0YUJpbmRpbmdEaXJlY3RpdmVcbl07XG4vKipcbiAqIFJlcHJlc2VudHMgdGhlIFtOZ01vZHVsZV0oe3sgc2l0ZS5kYXRhLnVybHMuYW5ndWxhclsnbmdtb2R1bGVhcGknXSB9fSkgZGVmaW5pdGlvbiBmb3IgdGhlIFRyZWVWaWV3IGNvbXBvbmVudC5cbiAqL1xuY2xhc3MgVHJlZVZpZXdNb2R1bGUge1xufVxuVHJlZVZpZXdNb2R1bGUuZGVjb3JhdG9ycyA9IFtcbiAgICB7IHR5cGU6IE5nTW9kdWxlLCBhcmdzOiBbe1xuICAgICAgICAgICAgICAgIGV4cG9ydHM6IFtFWFBPUlRTXSxcbiAgICAgICAgICAgICAgICBpbXBvcnRzOiBbU2hhcmVkTW9kdWxlXVxuICAgICAgICAgICAgfSxdIH0sXG5dO1xuLyoqIEBub2NvbGxhcHNlICovXG5UcmVlVmlld01vZHVsZS5jdG9yUGFyYW1ldGVycyA9ICgpID0+IFtdO1xuXG4vKipcbiAqIEdlbmVyYXRlZCBidW5kbGUgaW5kZXguIERvIG5vdCBlZGl0LlxuICovXG5cbmV4cG9ydCB7IENoZWNrQm94Q29tcG9uZW50LCBDaGVja0JveE1vZHVsZSwgRGF0YUNoYW5nZU5vdGlmaWNhdGlvblNlcnZpY2UsIEV4cGFuZFN0YXRlU2VydmljZSwgSW5kZXhCdWlsZGVyU2VydmljZSwgTG9hZGluZ0luZGljYXRvckRpcmVjdGl2ZSwgTG9hZGluZ05vdGlmaWNhdGlvblNlcnZpY2UsIE5hdmlnYXRpb25TZXJ2aWNlLCBOb2RlQ2hpbGRyZW5TZXJ2aWNlLCBTZWxlY3Rpb25TZXJ2aWNlLCBTaGFyZWRNb2R1bGUsIFRyZWVWaWV3R3JvdXBDb21wb25lbnQsIFRyZWVWaWV3SXRlbUNvbnRlbnREaXJlY3RpdmUsIFRyZWVWaWV3SXRlbURpcmVjdGl2ZSwgVHJlZVZpZXdMb29rdXBTZXJ2aWNlLCBUcmVlVmlld0NvbXBvbmVudCwgVHJlZVZpZXdNb2R1bGUsIE5vZGVUZW1wbGF0ZURpcmVjdGl2ZSwgQ2hlY2tEaXJlY3RpdmUsIERpc2FibGVEaXJlY3RpdmUsIEV4cGFuZERpcmVjdGl2ZSwgU2VsZWN0RGlyZWN0aXZlLCBIaWVyYXJjaHlCaW5kaW5nRGlyZWN0aXZlLCBGbGF0RGF0YUJpbmRpbmdEaXJlY3RpdmUgfTtcbiJdfQ==

      /***/

    },

    /***/
    "./node_modules/rxjs-compat/BehaviorSubject.js":
    /*!*****************************************************!*\
      !*** ./node_modules/rxjs-compat/BehaviorSubject.js ***!
      \*****************************************************/

    /*! no static exports found */

    /***/
    function node_modulesRxjsCompatBehaviorSubjectJs(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");

      exports.BehaviorSubject = rxjs_1.BehaviorSubject; //# sourceMappingURL=BehaviorSubject.js.map

      /***/
    },

    /***/
    "./node_modules/rxjs-compat/Subscription.js":
    /*!**************************************************!*\
      !*** ./node_modules/rxjs-compat/Subscription.js ***!
      \**************************************************/

    /*! no static exports found */

    /***/
    function node_modulesRxjsCompatSubscriptionJs(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");

      exports.Subscription = rxjs_1.Subscription; //# sourceMappingURL=Subscription.js.map

      /***/
    },

    /***/
    "./node_modules/rxjs-compat/observable/empty.js":
    /*!******************************************************!*\
      !*** ./node_modules/rxjs-compat/observable/empty.js ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function node_modulesRxjsCompatObservableEmptyJs(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");

      exports.empty = rxjs_1.empty; //# sourceMappingURL=empty.js.map

      /***/
    },

    /***/
    "./node_modules/rxjs-compat/observable/merge.js":
    /*!******************************************************!*\
      !*** ./node_modules/rxjs-compat/observable/merge.js ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function node_modulesRxjsCompatObservableMergeJs(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");

      exports.merge = rxjs_1.merge; //# sourceMappingURL=merge.js.map

      /***/
    },

    /***/
    "./node_modules/rxjs-compat/observable/of.js":
    /*!***************************************************!*\
      !*** ./node_modules/rxjs-compat/observable/of.js ***!
      \***************************************************/

    /*! no static exports found */

    /***/
    function node_modulesRxjsCompatObservableOfJs(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");

      exports.of = rxjs_1.of; //# sourceMappingURL=of.js.map

      /***/
    },

    /***/
    "./node_modules/rxjs-compat/operators/catchError.js":
    /*!**********************************************************!*\
      !*** ./node_modules/rxjs-compat/operators/catchError.js ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function node_modulesRxjsCompatOperatorsCatchErrorJs(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");

      exports.catchError = operators_1.catchError; //# sourceMappingURL=catchError.js.map

      /***/
    },

    /***/
    "./node_modules/rxjs-compat/operators/delay.js":
    /*!*****************************************************!*\
      !*** ./node_modules/rxjs-compat/operators/delay.js ***!
      \*****************************************************/

    /*! no static exports found */

    /***/
    function node_modulesRxjsCompatOperatorsDelayJs(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");

      exports.delay = operators_1.delay; //# sourceMappingURL=delay.js.map

      /***/
    },

    /***/
    "./node_modules/rxjs-compat/operators/filter.js":
    /*!******************************************************!*\
      !*** ./node_modules/rxjs-compat/operators/filter.js ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function node_modulesRxjsCompatOperatorsFilterJs(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");

      exports.filter = operators_1.filter; //# sourceMappingURL=filter.js.map

      /***/
    },

    /***/
    "./node_modules/rxjs-compat/operators/map.js":
    /*!***************************************************!*\
      !*** ./node_modules/rxjs-compat/operators/map.js ***!
      \***************************************************/

    /*! no static exports found */

    /***/
    function node_modulesRxjsCompatOperatorsMapJs(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");

      exports.map = operators_1.map; //# sourceMappingURL=map.js.map

      /***/
    },

    /***/
    "./node_modules/rxjs-compat/operators/skip.js":
    /*!****************************************************!*\
      !*** ./node_modules/rxjs-compat/operators/skip.js ***!
      \****************************************************/

    /*! no static exports found */

    /***/
    function node_modulesRxjsCompatOperatorsSkipJs(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");

      exports.skip = operators_1.skip; //# sourceMappingURL=skip.js.map

      /***/
    },

    /***/
    "./node_modules/rxjs-compat/operators/switchMap.js":
    /*!*********************************************************!*\
      !*** ./node_modules/rxjs-compat/operators/switchMap.js ***!
      \*********************************************************/

    /*! no static exports found */

    /***/
    function node_modulesRxjsCompatOperatorsSwitchMapJs(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");

      exports.switchMap = operators_1.switchMap; //# sourceMappingURL=switchMap.js.map

      /***/
    },

    /***/
    "./node_modules/rxjs-compat/operators/take.js":
    /*!****************************************************!*\
      !*** ./node_modules/rxjs-compat/operators/take.js ***!
      \****************************************************/

    /*! no static exports found */

    /***/
    function node_modulesRxjsCompatOperatorsTakeJs(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");

      exports.take = operators_1.take; //# sourceMappingURL=take.js.map

      /***/
    },

    /***/
    "./node_modules/rxjs-compat/operators/takeUntil.js":
    /*!*********************************************************!*\
      !*** ./node_modules/rxjs-compat/operators/takeUntil.js ***!
      \*********************************************************/

    /*! no static exports found */

    /***/
    function node_modulesRxjsCompatOperatorsTakeUntilJs(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");

      exports.takeUntil = operators_1.takeUntil; //# sourceMappingURL=takeUntil.js.map

      /***/
    },

    /***/
    "./node_modules/rxjs-compat/operators/tap.js":
    /*!***************************************************!*\
      !*** ./node_modules/rxjs-compat/operators/tap.js ***!
      \***************************************************/

    /*! no static exports found */

    /***/
    function node_modulesRxjsCompatOperatorsTapJs(module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var operators_1 = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");

      exports.tap = operators_1.tap; //# sourceMappingURL=tap.js.map

      /***/
    },

    /***/
    "./node_modules/rxjs/BehaviorSubject.js":
    /*!**********************************************!*\
      !*** ./node_modules/rxjs/BehaviorSubject.js ***!
      \**********************************************/

    /*! no static exports found */

    /***/
    function node_modulesRxjsBehaviorSubjectJs(module, exports, __webpack_require__) {
      "use strict";

      function __export(m) {
        for (var p in m) {
          if (!exports.hasOwnProperty(p)) exports[p] = m[p];
        }
      }

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      __export(__webpack_require__(
      /*! rxjs-compat/BehaviorSubject */
      "./node_modules/rxjs-compat/BehaviorSubject.js")); //# sourceMappingURL=BehaviorSubject.js.map

      /***/

    },

    /***/
    "./node_modules/rxjs/Subscription.js":
    /*!*******************************************!*\
      !*** ./node_modules/rxjs/Subscription.js ***!
      \*******************************************/

    /*! no static exports found */

    /***/
    function node_modulesRxjsSubscriptionJs(module, exports, __webpack_require__) {
      "use strict";

      function __export(m) {
        for (var p in m) {
          if (!exports.hasOwnProperty(p)) exports[p] = m[p];
        }
      }

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      __export(__webpack_require__(
      /*! rxjs-compat/Subscription */
      "./node_modules/rxjs-compat/Subscription.js")); //# sourceMappingURL=Subscription.js.map

      /***/

    },

    /***/
    "./node_modules/rxjs/observable/empty.js":
    /*!***********************************************!*\
      !*** ./node_modules/rxjs/observable/empty.js ***!
      \***********************************************/

    /*! no static exports found */

    /***/
    function node_modulesRxjsObservableEmptyJs(module, exports, __webpack_require__) {
      "use strict";

      function __export(m) {
        for (var p in m) {
          if (!exports.hasOwnProperty(p)) exports[p] = m[p];
        }
      }

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      __export(__webpack_require__(
      /*! rxjs-compat/observable/empty */
      "./node_modules/rxjs-compat/observable/empty.js")); //# sourceMappingURL=empty.js.map

      /***/

    },

    /***/
    "./node_modules/rxjs/observable/merge.js":
    /*!***********************************************!*\
      !*** ./node_modules/rxjs/observable/merge.js ***!
      \***********************************************/

    /*! no static exports found */

    /***/
    function node_modulesRxjsObservableMergeJs(module, exports, __webpack_require__) {
      "use strict";

      function __export(m) {
        for (var p in m) {
          if (!exports.hasOwnProperty(p)) exports[p] = m[p];
        }
      }

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      __export(__webpack_require__(
      /*! rxjs-compat/observable/merge */
      "./node_modules/rxjs-compat/observable/merge.js")); //# sourceMappingURL=merge.js.map

      /***/

    },

    /***/
    "./node_modules/rxjs/observable/of.js":
    /*!********************************************!*\
      !*** ./node_modules/rxjs/observable/of.js ***!
      \********************************************/

    /*! no static exports found */

    /***/
    function node_modulesRxjsObservableOfJs(module, exports, __webpack_require__) {
      "use strict";

      function __export(m) {
        for (var p in m) {
          if (!exports.hasOwnProperty(p)) exports[p] = m[p];
        }
      }

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      __export(__webpack_require__(
      /*! rxjs-compat/observable/of */
      "./node_modules/rxjs-compat/observable/of.js")); //# sourceMappingURL=of.js.map

      /***/

    },

    /***/
    "./node_modules/rxjs/operators/catchError.js":
    /*!***************************************************!*\
      !*** ./node_modules/rxjs/operators/catchError.js ***!
      \***************************************************/

    /*! no static exports found */

    /***/
    function node_modulesRxjsOperatorsCatchErrorJs(module, exports, __webpack_require__) {
      "use strict";

      function __export(m) {
        for (var p in m) {
          if (!exports.hasOwnProperty(p)) exports[p] = m[p];
        }
      }

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      __export(__webpack_require__(
      /*! rxjs-compat/operators/catchError */
      "./node_modules/rxjs-compat/operators/catchError.js")); //# sourceMappingURL=catchError.js.map

      /***/

    },

    /***/
    "./node_modules/rxjs/operators/delay.js":
    /*!**********************************************!*\
      !*** ./node_modules/rxjs/operators/delay.js ***!
      \**********************************************/

    /*! no static exports found */

    /***/
    function node_modulesRxjsOperatorsDelayJs(module, exports, __webpack_require__) {
      "use strict";

      function __export(m) {
        for (var p in m) {
          if (!exports.hasOwnProperty(p)) exports[p] = m[p];
        }
      }

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      __export(__webpack_require__(
      /*! rxjs-compat/operators/delay */
      "./node_modules/rxjs-compat/operators/delay.js")); //# sourceMappingURL=delay.js.map

      /***/

    },

    /***/
    "./node_modules/rxjs/operators/filter.js":
    /*!***********************************************!*\
      !*** ./node_modules/rxjs/operators/filter.js ***!
      \***********************************************/

    /*! no static exports found */

    /***/
    function node_modulesRxjsOperatorsFilterJs(module, exports, __webpack_require__) {
      "use strict";

      function __export(m) {
        for (var p in m) {
          if (!exports.hasOwnProperty(p)) exports[p] = m[p];
        }
      }

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      __export(__webpack_require__(
      /*! rxjs-compat/operators/filter */
      "./node_modules/rxjs-compat/operators/filter.js")); //# sourceMappingURL=filter.js.map

      /***/

    },

    /***/
    "./node_modules/rxjs/operators/map.js":
    /*!********************************************!*\
      !*** ./node_modules/rxjs/operators/map.js ***!
      \********************************************/

    /*! no static exports found */

    /***/
    function node_modulesRxjsOperatorsMapJs(module, exports, __webpack_require__) {
      "use strict";

      function __export(m) {
        for (var p in m) {
          if (!exports.hasOwnProperty(p)) exports[p] = m[p];
        }
      }

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      __export(__webpack_require__(
      /*! rxjs-compat/operators/map */
      "./node_modules/rxjs-compat/operators/map.js")); //# sourceMappingURL=map.js.map

      /***/

    },

    /***/
    "./node_modules/rxjs/operators/skip.js":
    /*!*********************************************!*\
      !*** ./node_modules/rxjs/operators/skip.js ***!
      \*********************************************/

    /*! no static exports found */

    /***/
    function node_modulesRxjsOperatorsSkipJs(module, exports, __webpack_require__) {
      "use strict";

      function __export(m) {
        for (var p in m) {
          if (!exports.hasOwnProperty(p)) exports[p] = m[p];
        }
      }

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      __export(__webpack_require__(
      /*! rxjs-compat/operators/skip */
      "./node_modules/rxjs-compat/operators/skip.js")); //# sourceMappingURL=skip.js.map

      /***/

    },

    /***/
    "./node_modules/rxjs/operators/switchMap.js":
    /*!**************************************************!*\
      !*** ./node_modules/rxjs/operators/switchMap.js ***!
      \**************************************************/

    /*! no static exports found */

    /***/
    function node_modulesRxjsOperatorsSwitchMapJs(module, exports, __webpack_require__) {
      "use strict";

      function __export(m) {
        for (var p in m) {
          if (!exports.hasOwnProperty(p)) exports[p] = m[p];
        }
      }

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      __export(__webpack_require__(
      /*! rxjs-compat/operators/switchMap */
      "./node_modules/rxjs-compat/operators/switchMap.js")); //# sourceMappingURL=switchMap.js.map

      /***/

    },

    /***/
    "./node_modules/rxjs/operators/take.js":
    /*!*********************************************!*\
      !*** ./node_modules/rxjs/operators/take.js ***!
      \*********************************************/

    /*! no static exports found */

    /***/
    function node_modulesRxjsOperatorsTakeJs(module, exports, __webpack_require__) {
      "use strict";

      function __export(m) {
        for (var p in m) {
          if (!exports.hasOwnProperty(p)) exports[p] = m[p];
        }
      }

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      __export(__webpack_require__(
      /*! rxjs-compat/operators/take */
      "./node_modules/rxjs-compat/operators/take.js")); //# sourceMappingURL=take.js.map

      /***/

    },

    /***/
    "./node_modules/rxjs/operators/takeUntil.js":
    /*!**************************************************!*\
      !*** ./node_modules/rxjs/operators/takeUntil.js ***!
      \**************************************************/

    /*! no static exports found */

    /***/
    function node_modulesRxjsOperatorsTakeUntilJs(module, exports, __webpack_require__) {
      "use strict";

      function __export(m) {
        for (var p in m) {
          if (!exports.hasOwnProperty(p)) exports[p] = m[p];
        }
      }

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      __export(__webpack_require__(
      /*! rxjs-compat/operators/takeUntil */
      "./node_modules/rxjs-compat/operators/takeUntil.js")); //# sourceMappingURL=takeUntil.js.map

      /***/

    },

    /***/
    "./node_modules/rxjs/operators/tap.js":
    /*!********************************************!*\
      !*** ./node_modules/rxjs/operators/tap.js ***!
      \********************************************/

    /*! no static exports found */

    /***/
    function node_modulesRxjsOperatorsTapJs(module, exports, __webpack_require__) {
      "use strict";

      function __export(m) {
        for (var p in m) {
          if (!exports.hasOwnProperty(p)) exports[p] = m[p];
        }
      }

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      __export(__webpack_require__(
      /*! rxjs-compat/operators/tap */
      "./node_modules/rxjs-compat/operators/tap.js")); //# sourceMappingURL=tap.js.map

      /***/

    },

    /***/
    "./src/app/services/course-services/topic-listing.service.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/services/course-services/topic-listing.service.ts ***!
      \*******************************************************************/

    /*! exports provided: TopicListingService */

    /***/
    function srcAppServicesCourseServicesTopicListingServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TopicListingService", function () {
        return TopicListingService;
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

      var TopicListingService =
      /** @class */
      function () {
        var TopicListingService = /*#__PURE__*/function () {
          function TopicListingService(http, auth) {
            var _this28 = this;

            _classCallCheck(this, TopicListingService);

            this.http = http;
            this.auth = auth;
            this.baseUrl = '';
            this.drl = "assets/data.json";
            this.auth.currentAuthKey.subscribe(function (key) {
              _this28.Authorization = key;
              _this28.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Authorization": _this28.Authorization
              });
            });
            this.auth.currentInstituteId.subscribe(function (id) {
              _this28.institute_id = id;
            });
            this.baseUrl = this.auth.getBaseUrl();
          }

          _createClass(TopicListingService, [{
            key: "getSatndard",
            value: function getSatndard() {
              var url = this.baseUrl + "/api/v1/standards/all/" + this.institute_id + "?active=Y";
              return this.http.get(url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (data) {
                return data;
              }, function (error) {
                return error;
              }));
            }
          }, {
            key: "getSubject",
            value: function getSubject(obj) {
              var url = this.baseUrl + "/api/v1/subjects/standards/" + obj + "?active=Y";
              return this.http.get(url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (data) {
                return data;
              }, function (error) {
                return error;
              }));
            }
          }, {
            key: "postTopic",
            value: function postTopic(obj) {
              var url = this.baseUrl + "/api/v1/topic_manager/add/" + this.institute_id;
              return this.http.post(url, obj, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (data) {
                return data;
              }, function (error) {
                return error;
              }));
            }
          }, {
            key: "getZeroLevelTopics",
            value: function getZeroLevelTopics(subject_id) {
              var url = this.baseUrl + "/api/v1/topic_manager/add/" + this.institute_id + "/subjects/" + subject_id + "/topics";
              return this.http.get(url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (data) {
                return data;
              }, function (error) {
                return error;
              }));
            }
          }, {
            key: "getAllTopicsSubTopics",
            value: function getAllTopicsSubTopics(subject_id) {
              var url = this.baseUrl + "/api/v1/topic_manager/standards/-1/subjects/" + subject_id + "/topics";
              return this.http.get(url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (data) {
                return data;
              }, function (error) {
                return error;
              }));
            }
          }, {
            key: "getSubTopics",
            value: function getSubTopics(parent_topic_id) {
              var url = this.baseUrl + "/api/v1/topic_manager/subTopicList/" + this.institute_id + "/" + parent_topic_id;
              return this.http.get(url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (data) {
                return data;
              }, function (error) {
                return error;
              }));
            }
          }]);

          return TopicListingService;
        }();

        TopicListingService.ctorParameters = function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }, {
            type: _authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"]
          }];
        };

        TopicListingService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"]])], TopicListingService);
        return TopicListingService;
      }();
      /***/

    }
  }]);
})();
//# sourceMappingURL=default~app-components-course-module-create-course-course-class-course-class-module~app-components-c~3c57cc5b-es5.js.map