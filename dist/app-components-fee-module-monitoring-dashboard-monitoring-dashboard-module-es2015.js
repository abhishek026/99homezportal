(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-components-fee-module-monitoring-dashboard-monitoring-dashboard-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fee-module/monitoring-dashboard/dashboard-home/dashboard-home.component.html":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fee-module/monitoring-dashboard/dashboard-home/dashboard-home.component.html ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"monitor-wrapper\">\n\n    <section class=\"c-lg-12 header\">\n        <h2 class=\"pull-left\">\n            <a routerLink=\"/view/fee\">\n                Fees\n            </a>\n            <i style=\"font-family: 'FontAwesome';\" class=\"fas fa-angle-right\"></i> Monitoring Dashboard\n        </h2>\n        <aside class=\"pull-right\">\n        </aside>\n    </section>\n\n    <div style=\"margin-top: 5px;\" class=\"c-lg-12\">\n        <div class=\"c-lg-4\">\n            <fee-stackbar></fee-stackbar>\n        </div>\n        <div class=\"c-lg-2\"></div>\n        <div class=\"c-lg-6\">\n            <fee-pie></fee-pie>\n        </div>\n    </div>\n\n    <div class=\"c-lg-12\">\n        <fee-line></fee-line>\n    </div>\n\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fee-module/monitoring-dashboard/fee-line-widget/fee-line.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fee-module/monitoring-dashboard/fee-line-widget/fee-line.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"line-wrapper\">\n\n    <section class=\"row pie-filter\" [ngClass]=\"{'hide': !isDataLoaded}\">\n        <div class=\"field-wrapper\">\n            <!-- <label for=\"duration\">Duration</label> -->\n            <select name=\"\" id=\"duration\" [(ngModel)]=\"rangelineSelected\" (ngModelChange)=\"datelineRangeUpdated($event)\" class=\"form-ctrl\">\n                <option value=\"1\" selected=\"\">Last 7 days</option>\n                <option value=\"2\">This Month</option>\n                <option value=\"3\">Last 30 Days</option>\n                <option value=\"4\">Last Month</option>\n                <option value=\"5\">Last 3 Months</option>\n            </select>\n        </div>\n    </section>\n    <section class=\"row\" [ngClass]=\"{'hide': !isDataLoaded}\">\n        <div id=\"lineContainer\">\n        </div>\n    </section>\n\n    <div style=\"padding: 5px;\" [ngClass]=\"{'hide': isDataLoaded}\">\n        Loading Data...\n    </div>\n\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fee-module/monitoring-dashboard/fee-pie-widget/fee-pie.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fee-module/monitoring-dashboard/fee-pie-widget/fee-pie.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"pie-wrapper\">\n\n    <section class=\"row pie-filter\" [ngClass]=\"{'hide': !isDataLoaded}\">\n        <div class=\"field-wrapper\">\n            <!-- <label for=\"duration\">Duration</label> -->\n            <select name=\"\" id=\"duration\" [(ngModel)]=\"rangeSelected\" (ngModelChange)=\"dateRangeUpdated($event)\" class=\"form-ctrl\">\n                <option value=\"1\" selected=\"\">Last 7 days</option>\n                <option value=\"2\">This month</option>\n                <option value=\"3\">Last 30 days</option>\n                <option value=\"4\">Last month</option>\n                <option value=\"5\">Last 3 months</option>\n            </select>\n        </div>\n    </section>\n    <section class=\"row\" [ngClass]=\"{'hide': !isDataLoaded}\">\n        <div id=\"pieContainer\">\n        </div>\n    </section>\n\n    <div style=\"padding: 5px;\" [ngClass]=\"{'hide': isDataLoaded}\">\n        Loading Data...\n    </div>\n\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fee-module/monitoring-dashboard/fee-stackbar-widget/fee-stackbar.component.html":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fee-module/monitoring-dashboard/fee-stackbar-widget/fee-stackbar.component.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"stackwrapper\">\n\n    <div [ngClass]=\"{'hide': !isDataLoaded}\" id=\"feestackbar\">\n    </div>\n\n    <div style=\"padding: 5px;\" [ngClass]=\"{'hide': isDataLoaded}\">\n        Loading Data...\n    </div>\n\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fee-module/monitoring-dashboard/monitoring-dashboard.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fee-module/monitoring-dashboard/monitoring-dashboard.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./src/app/components/fee-module/monitoring-dashboard/dashboard-home/dashboard-home.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/components/fee-module/monitoring-dashboard/dashboard-home/dashboard-home.component.scss ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".monitor-wrapper {\n  width: 100%;\n  background: #efefef;\n  overflow: auto;\n}\n\n.monitor-wrapper ::-webkit-scrollbar {\n  display: block;\n}\n\n.monitor-wrapper .header {\n  margin: 10px 12px;\n  width: 98%;\n  padding: 15px 15px;\n  border-bottom: 1px solid rgba(10, 10, 10, 0.5);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mZWUtbW9kdWxlL21vbml0b3JpbmctZGFzaGJvYXJkL2Rhc2hib2FyZC1ob21lL2Rhc2hib2FyZC1ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksV0FBVztFQUNYLG1CQUFtQjtFQUNuQixjQUFjO0FBQWxCOztBQUpBO0VBTVEsY0FBYztBQUV0Qjs7QUFSQTtFQVNRLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1Ysa0JBQWtCO0VBRWxCLDhDQUE4QztBQUV0RCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZmVlLW1vZHVsZS9tb25pdG9yaW5nLWRhc2hib2FyZC9kYXNoYm9hcmQtaG9tZS9kYXNoYm9hcmQtaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb25pdG9yLXdyYXBwZXIge1xuICAgIC8vIGhlaWdodDogODV2aDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIDo6LXdlYmtpdC1zY3JvbGxiYXJ7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAuaGVhZGVye1xuICAgICAgICBtYXJnaW46IDEwcHggMTJweDtcbiAgICAgICAgd2lkdGg6IDk4JTtcbiAgICAgICAgcGFkZGluZzogMTVweCAxNXB4O1xuICAgICAgICAvLyBib3gtc2hhZG93OiAwcHggMHB4IDJweCAxcHg7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDEwLCAxMCwgMTAsIDAuNSk7XG4gICAgICAgIC8vIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/fee-module/monitoring-dashboard/dashboard-home/dashboard-home.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/components/fee-module/monitoring-dashboard/dashboard-home/dashboard-home.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: DashboardHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardHomeComponent", function() { return DashboardHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let DashboardHomeComponent = /** @class */ (() => {
    let DashboardHomeComponent = class DashboardHomeComponent {
    };
    DashboardHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dashboard-home',
            template: __importDefault(__webpack_require__(/*! raw-loader!./dashboard-home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fee-module/monitoring-dashboard/dashboard-home/dashboard-home.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./dashboard-home.component.scss */ "./src/app/components/fee-module/monitoring-dashboard/dashboard-home/dashboard-home.component.scss")).default]
        })
    ], DashboardHomeComponent);
    return DashboardHomeComponent;
})();



/***/ }),

/***/ "./src/app/components/fee-module/monitoring-dashboard/fee-line-widget/fee-line.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/components/fee-module/monitoring-dashboard/fee-line-widget/fee-line.component.scss ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".line-wrapper {\n  margin: 20px 14px 10px;\n  box-shadow: 0px 0px 2px 1px;\n  background: #fff;\n}\n\n.line-wrapper .row {\n  margin: 0px;\n}\n\n.line-wrapper .field-wrapper {\n  width: 200px;\n  float: right;\n  margin-right: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mZWUtbW9kdWxlL21vbml0b3JpbmctZGFzaGJvYXJkL2ZlZS1saW5lLXdpZGdldC9mZWUtbGluZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsZ0JBQWdCO0FBQ3BCOztBQUpBO0VBS1EsV0FBVztBQUduQjs7QUFSQTtFQVFRLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0FBSTFCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mZWUtbW9kdWxlL21vbml0b3JpbmctZGFzaGJvYXJkL2ZlZS1saW5lLXdpZGdldC9mZWUtbGluZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saW5lLXdyYXBwZXJ7XG4gICAgbWFyZ2luOiAyMHB4IDE0cHggMTBweDtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDJweCAxcHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAucm93e1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICB9XG4gICAgLmZpZWxkLXdyYXBwZXJ7XG4gICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/fee-module/monitoring-dashboard/fee-line-widget/fee-line.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/components/fee-module/monitoring-dashboard/fee-line-widget/fee-line.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: FeeLineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeeLineComponent", function() { return FeeLineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_monitoring_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/monitoring.service */ "./src/app/components/fee-module/monitoring-dashboard/services/monitoring.service.ts");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/common-service */ "./src/app/services/common-service.ts");
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





let FeeLineComponent = /** @class */ (() => {
    let FeeLineComponent = class FeeLineComponent {
        constructor(getService, _commService) {
            this.getService = getService;
            this._commService = _commService;
            this.datelineRange = [];
            this.rangelineSelected = '2';
            this.rangeType = 'This Month';
            this.isDataLoaded = false;
            this.datelineRange[0] = moment__WEBPACK_IMPORTED_MODULE_1__(new Date()).startOf('month').format('YYYY-MM-DD');
            this.datelineRange[1] = moment__WEBPACK_IMPORTED_MODULE_1__(new Date()).endOf('month').format('YYYY-MM-DD');
        }
        ngOnInit() {
            this.fetchFeeStackMonitor();
        }
        datelineRangeUpdated(e) {
            /* last 7 days */
            if (e == 1) {
                this.datelineRange[1] = moment__WEBPACK_IMPORTED_MODULE_1__(new Date()).format('YYYY-MM-DD');
                this.datelineRange[0] = moment__WEBPACK_IMPORTED_MODULE_1__(new Date()).subtract(7, 'days').format('YYYY-MM-DD');
                this.rangeType = "Last 7 days";
            }
            /* this month */
            else if (e == 2) {
                this.datelineRange[0] = moment__WEBPACK_IMPORTED_MODULE_1__(new Date()).startOf('month').format('YYYY-MM-DD');
                this.datelineRange[1] = moment__WEBPACK_IMPORTED_MODULE_1__(new Date()).endOf('month').format('YYYY-MM-DD');
                this.rangeType = "This Month";
            }
            /* last 30 days */
            else if (e == 3) {
                this.datelineRange[1] = moment__WEBPACK_IMPORTED_MODULE_1__(new Date()).format('YYYY-MM-DD');
                this.datelineRange[0] = moment__WEBPACK_IMPORTED_MODULE_1__(new Date()).subtract(30, 'days').format('YYYY-MM-DD');
                this.rangeType = "Last 30 Days";
            }
            /* last month */
            else if (e == 4) {
                this.datelineRange[0] = moment__WEBPACK_IMPORTED_MODULE_1__(new Date()).startOf('month').subtract(1, 'months').format('YYYY-MM-DD');
                this.datelineRange[1] = moment__WEBPACK_IMPORTED_MODULE_1__(new Date()).startOf('month').subtract(1, 'months').endOf('month').format('YYYY-MM-DD');
                this.rangeType = "Last Month";
            }
            /* last 3 month */
            else if (e == 5) {
                this.datelineRange[0] = moment__WEBPACK_IMPORTED_MODULE_1__(new Date()).startOf('month').subtract(3, 'months').format('YYYY-MM-DD');
                this.datelineRange[1] = moment__WEBPACK_IMPORTED_MODULE_1__(new Date()).format('YYYY-MM-DD');
                this.rangeType = "Last 3 Months";
            }
            this.fetchFeeStackMonitor();
        }
        fetchFeeStackMonitor() {
            let obj = {
                from_date: moment__WEBPACK_IMPORTED_MODULE_1__(this.datelineRange[0]).format('YYYY-MM-DD'),
                high_charts_name: "",
                institute_id: sessionStorage.getItem('institute_id'),
                to_date: moment__WEBPACK_IMPORTED_MODULE_1__(this.datelineRange[1]).format('YYYY-MM-DD')
            };
            this.getService.fetchFeeMonitor(obj).subscribe(res => {
                this.isDataLoaded = true;
                this.generateChartData(res);
            }, err => {
                this.isDataLoaded = true;
            });
        }
        generateChartData(res) {
            let dateMap = [];
            let feeMap = [];
            res.map(e => {
                dateMap.push(e.paid_date);
                feeMap.push(e.total_fees);
            });
            this.createChart(dateMap, feeMap);
        }
        createChart(d, f) {
            highcharts__WEBPACK_IMPORTED_MODULE_3__["chart"]('lineContainer', {
                chart: {
                    zoomType: 'x'
                    //type: 'line'
                },
                title: {
                    text: 'Fee Collection'
                },
                subtitle: {
                    text: this.rangeType
                },
                xAxis: {
                    categories: d
                },
                yAxis: {
                    title: {
                        text: 'Amount(Rs)'
                    }
                },
                tooltip: {
                    pointFormat: '<span style="color:{series.color}">●</span> {series.name}: <b> ' + this._commService.currency_default_symbol + ' {point.y} </b>'
                },
                plotOptions: {
                    area: {
                        fillColor: {
                            linearGradient: {
                                x1: 0,
                                y1: 0,
                                x2: 0,
                                y2: 1
                            },
                            stops: [
                                [0, highcharts__WEBPACK_IMPORTED_MODULE_3__["getOptions"]().colors[0]],
                                [1, highcharts__WEBPACK_IMPORTED_MODULE_3__["Color"](highcharts__WEBPACK_IMPORTED_MODULE_3__["getOptions"]().colors[1])]
                            ]
                        },
                        marker: {
                            radius: 2
                        },
                        lineWidth: 1,
                        states: {
                            hover: {
                                lineWidth: 1
                            }
                        },
                        threshold: null
                    },
                    line: {
                        dataLabels: {
                            enabled: true,
                            format: this._commService.currency_default_symbol + ' {y}'
                        },
                        enableMouseTracking: true
                    }
                },
                series: [{
                        name: 'Dates',
                        data: f
                    }]
            });
        }
    };
    FeeLineComponent.ctorParameters = () => [
        { type: _services_monitoring_service__WEBPACK_IMPORTED_MODULE_2__["monitoringService"] },
        { type: _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonServiceFactory"] }
    ];
    FeeLineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fee-line',
            template: __importDefault(__webpack_require__(/*! raw-loader!./fee-line.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fee-module/monitoring-dashboard/fee-line-widget/fee-line.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./fee-line.component.scss */ "./src/app/components/fee-module/monitoring-dashboard/fee-line-widget/fee-line.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_services_monitoring_service__WEBPACK_IMPORTED_MODULE_2__["monitoringService"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonServiceFactory"]])
    ], FeeLineComponent);
    return FeeLineComponent;
})();



/***/ }),

/***/ "./src/app/components/fee-module/monitoring-dashboard/fee-pie-widget/fee-pie.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/components/fee-module/monitoring-dashboard/fee-pie-widget/fee-pie.component.scss ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".pie-wrapper {\n  box-shadow: 0px 0px 2px 1px;\n  background: #fff;\n}\n\n.pie-wrapper .row {\n  margin: 0px;\n}\n\n.pie-wrapper .field-wrapper {\n  width: 200px;\n  float: right;\n  margin-right: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mZWUtbW9kdWxlL21vbml0b3JpbmctZGFzaGJvYXJkL2ZlZS1waWUtd2lkZ2V0L2ZlZS1waWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyQkFBMkI7RUFDM0IsZ0JBQWdCO0FBQ3BCOztBQUhBO0VBSVEsV0FBVztBQUduQjs7QUFQQTtFQU9RLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0FBSTFCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mZWUtbW9kdWxlL21vbml0b3JpbmctZGFzaGJvYXJkL2ZlZS1waWUtd2lkZ2V0L2ZlZS1waWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGllLXdyYXBwZXJ7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAycHggMXB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgLnJvd3tcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgfVxuICAgIC5maWVsZC13cmFwcGVye1xuICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/fee-module/monitoring-dashboard/fee-pie-widget/fee-pie.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/components/fee-module/monitoring-dashboard/fee-pie-widget/fee-pie.component.ts ***!
  \************************************************************************************************/
/*! exports provided: FeePieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeePieComponent", function() { return FeePieComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_monitoring_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/monitoring.service */ "./src/app/components/fee-module/monitoring-dashboard/services/monitoring.service.ts");
/* harmony import */ var highcharts_highcharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts/highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts_highcharts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_highcharts__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/common-service */ "./src/app/services/common-service.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/http.service */ "./src/app/services/http.service.ts");
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






let FeePieComponent = /** @class */ (() => {
    let FeePieComponent = class FeePieComponent {
        constructor(getService, _commService, httpService) {
            this.getService = getService;
            this._commService = _commService;
            this.httpService = httpService;
            this.FeeDataData = [0, 0, 0, 0];
            this.isDataLoaded = false;
            this.dateRange = [];
            this.rangeSelected = '2';
            this.Payment_Modes = [];
            this.dateRange[0] = moment__WEBPACK_IMPORTED_MODULE_1__(new Date()).startOf('month').format('YYYY-MM-DD');
            this.dateRange[1] = moment__WEBPACK_IMPORTED_MODULE_1__(new Date()).endOf('month').format('YYYY-MM-DD');
        }
        ngOnInit() {
            this.fetchFeeStackMonitor();
        }
        dateRangeUpdated(e) {
            /* last 7 days */
            if (e == 1) {
                this.dateRange[1] = moment__WEBPACK_IMPORTED_MODULE_1__(new Date()).format('YYYY-MM-DD');
                this.dateRange[0] = moment__WEBPACK_IMPORTED_MODULE_1__(new Date()).subtract(7, 'days').format('YYYY-MM-DD');
            }
            /* this month */
            else if (e == 2) {
                this.dateRange[0] = moment__WEBPACK_IMPORTED_MODULE_1__(new Date()).startOf('month').format('YYYY-MM-DD');
                this.dateRange[1] = moment__WEBPACK_IMPORTED_MODULE_1__(new Date()).endOf('month').format('YYYY-MM-DD');
            }
            /* last 30 days */
            else if (e == 3) {
                this.dateRange[1] = moment__WEBPACK_IMPORTED_MODULE_1__(new Date()).format('YYYY-MM-DD');
                this.dateRange[0] = moment__WEBPACK_IMPORTED_MODULE_1__(new Date()).subtract(30, 'days').format('YYYY-MM-DD');
            }
            /* last month */
            else if (e == 4) {
                this.dateRange[0] = moment__WEBPACK_IMPORTED_MODULE_1__(new Date()).startOf('month').subtract(1, 'months').format('YYYY-MM-DD');
                this.dateRange[1] = moment__WEBPACK_IMPORTED_MODULE_1__(new Date()).startOf('month').subtract(1, 'months').endOf('month').format('YYYY-MM-DD');
            }
            /* last 3 month */
            else if (e == 5) {
                this.dateRange[0] = moment__WEBPACK_IMPORTED_MODULE_1__(new Date()).startOf('month').subtract(3, 'months').format('YYYY-MM-DD');
                this.dateRange[1] = moment__WEBPACK_IMPORTED_MODULE_1__(new Date()).format('YYYY-MM-DD');
            }
            this.fetchFeeStackMonitor();
        }
        fetchFeeStackMonitor() {
            let obj = {
                from_date: moment__WEBPACK_IMPORTED_MODULE_1__(this.dateRange[0]).format('YYYY-MM-DD'),
                high_charts_name: "pieCharts",
                institute_id: sessionStorage.getItem('institute_id'),
                to_date: moment__WEBPACK_IMPORTED_MODULE_1__(this.dateRange[1]).format('YYYY-MM-DD')
            };
            this.getService.fetchFeeMonitor(obj).subscribe(res => {
                this.isDataLoaded = true;
                this.generateChartData(res);
            }, err => {
                this.isDataLoaded = false;
            });
        }
        generateChartData(res) {
            let temp = res;
            this.httpService.getData('/api/v1/masterData/type/PAYMENT_MODES').subscribe((res) => {
                this.Payment_Modes = res;
                if (this.Payment_Modes && this.Payment_Modes.length > 0) {
                    this.Payment_Modes.forEach(e => {
                        e.value = 0;
                    });
                }
                temp.forEach(e => {
                    this.Payment_Modes.forEach(mode => {
                        if (e.paymentMode == mode.data_key) {
                            mode.value = e.total_fees;
                        }
                    });
                });
                this.createChart(this.Payment_Modes);
            }, err => {
                console.log(err);
            });
        }
        createChart(obj) {
            let tempData = [];
            obj.forEach(mode => {
                if (mode.data_key == "Cash") {
                    let temp = {
                        name: mode.data_key,
                        y: mode.value,
                        sliced: true,
                        selected: true
                    };
                    tempData.push(temp);
                }
                else {
                    let temp = {
                        name: mode.data_key,
                        y: mode.value
                    };
                    tempData.push(temp);
                }
            });
            highcharts_highcharts__WEBPACK_IMPORTED_MODULE_3__["chart"]('pieContainer', {
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false,
                    type: 'pie',
                    options3d: {
                        enabled: true,
                        alpha: 45,
                        beta: 0
                    }
                },
                title: {
                    text: 'Payment Mode'
                },
                tooltip: {
                    pointFormat: '<span style="color:{series.color}">●</span> {series.name}: <b> ' + this._commService.currency_default_symbol + ' {point.y} </b>'
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: true,
                            format: this._commService.currency_default_symbol + '{y}'
                        },
                        showInLegend: true
                    }
                },
                series: [{
                        name: 'Payment Mode',
                        colorByPoint: true,
                        data: tempData
                    }]
            });
        }
    };
    FeePieComponent.ctorParameters = () => [
        { type: _services_monitoring_service__WEBPACK_IMPORTED_MODULE_2__["monitoringService"] },
        { type: _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonServiceFactory"] },
        { type: _services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"] }
    ];
    FeePieComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fee-pie',
            template: __importDefault(__webpack_require__(/*! raw-loader!./fee-pie.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fee-module/monitoring-dashboard/fee-pie-widget/fee-pie.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./fee-pie.component.scss */ "./src/app/components/fee-module/monitoring-dashboard/fee-pie-widget/fee-pie.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_services_monitoring_service__WEBPACK_IMPORTED_MODULE_2__["monitoringService"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonServiceFactory"],
            _services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]])
    ], FeePieComponent);
    return FeePieComponent;
})();



/***/ }),

/***/ "./src/app/components/fee-module/monitoring-dashboard/fee-stackbar-widget/fee-stackbar.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/components/fee-module/monitoring-dashboard/fee-stackbar-widget/fee-stackbar.component.scss ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".stackwrapper {\n  padding-top: 44px;\n  box-shadow: 0px 0px 2px 1px;\n  background: #fff;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mZWUtbW9kdWxlL21vbml0b3JpbmctZGFzaGJvYXJkL2ZlZS1zdGFja2Jhci13aWRnZXQvZmVlLXN0YWNrYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQWlCO0VBQ2pCLDJCQUEyQjtFQUMzQixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2ZlZS1tb2R1bGUvbW9uaXRvcmluZy1kYXNoYm9hcmQvZmVlLXN0YWNrYmFyLXdpZGdldC9mZWUtc3RhY2tiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RhY2t3cmFwcGVye1xuICAgIHBhZGRpbmctdG9wOiA0NHB4O1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMnB4IDFweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/fee-module/monitoring-dashboard/fee-stackbar-widget/fee-stackbar.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/components/fee-module/monitoring-dashboard/fee-stackbar-widget/fee-stackbar.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: FeeStackbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeeStackbarComponent", function() { return FeeStackbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_monitoring_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/monitoring.service */ "./src/app/components/fee-module/monitoring-dashboard/services/monitoring.service.ts");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/common-service */ "./src/app/services/common-service.ts");
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




let FeeStackbarComponent = /** @class */ (() => {
    let FeeStackbarComponent = class FeeStackbarComponent {
        constructor(getService, _commService) {
            this.getService = getService;
            this._commService = _commService;
            this.isDataLoaded = false;
            this.FeeDataData = [0, 0, 0, 0];
        }
        ngOnInit() {
            this.fetchFeeStackMonitor();
        }
        fetchFeeStackMonitor() {
            this.getService.fetchFeeStackMonitor().subscribe(res => {
                this.isDataLoaded = true;
                if (this.isDataLoaded) {
                    this.generateChartData(res);
                }
            }, err => {
                this.isDataLoaded = false;
            });
        }
        generateChartData(res) {
            let fd = parseInt(res.total_future_dues);
            let n = parseInt(res.total_dues_amount_in_next_thirty_days);
            let pd = parseInt(res.total_dues_pending);
            let p = parseInt(res.total_paid_amount_in_last_thirty_days);
            this.createChart(fd, n, pd, p);
        }
        createChart(fd, n, pd, p) {
            highcharts__WEBPACK_IMPORTED_MODULE_2__["chart"]('feestackbar', {
                chart: {
                    type: 'column',
                    options3d: {
                        enabled: true,
                        alpha: 15,
                        beta: 15,
                        viewDistance: 25,
                        depth: 40
                    },
                    backgroundColor: '#FFF',
                },
                title: {
                    text: ''
                },
                xAxis: {
                    categories: ['Future dues', "Dues in next 30 days", "Past dues", "Paid in last 30 days"],
                    labels: {
                        skew3d: true,
                        style: {
                            fontSize: '16px'
                        }
                    }
                },
                yAxis: {
                    visible: false,
                    allowDecimals: false,
                    min: 0,
                    title: {
                        text: 'Amount in Rs',
                        skew3d: true
                    }
                },
                tooltip: {
                    headerFormat: '<b>{point.key}</b><br>',
                    pointFormat: '{series.name}: ' + this._commService.currency_default_symbol + ' {point.y}'
                },
                plotOptions: {
                    column: {
                        dataLabels: {
                            enabled: true,
                            color: '#FFF',
                            format: this._commService.currency_default_symbol + ' {y}',
                            x: 0
                        },
                        stacking: 'normal',
                        depth: 40
                    }
                },
                series: [
                    {
                        data: [
                            { y: fd, name: 'Future dues', color: '#80cbc4' },
                            { y: n, name: 'Dues in next 30 days', color: '#37474f' },
                            { y: pd, name: 'Past dues', color: '#536DFE' },
                            { y: p, name: 'Paid in last 30 days', color: '#2e7d32' }
                        ]
                    }
                    // { name: 'Future Dues', data: [fd], crisp: false },
                    // { name: 'Dues in Next 30 Days', data: [n], crisp: false },
                    // { name: 'Past Dues', data: [pd], crisp: false },
                    // { name: 'Paid in Last 30 Days', data: [p], crisp: false },
                ]
            });
        }
    };
    FeeStackbarComponent.ctorParameters = () => [
        { type: _services_monitoring_service__WEBPACK_IMPORTED_MODULE_1__["monitoringService"] },
        { type: _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonServiceFactory"] }
    ];
    FeeStackbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fee-stackbar',
            template: __importDefault(__webpack_require__(/*! raw-loader!./fee-stackbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fee-module/monitoring-dashboard/fee-stackbar-widget/fee-stackbar.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./fee-stackbar.component.scss */ "./src/app/components/fee-module/monitoring-dashboard/fee-stackbar-widget/fee-stackbar.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_services_monitoring_service__WEBPACK_IMPORTED_MODULE_1__["monitoringService"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonServiceFactory"]])
    ], FeeStackbarComponent);
    return FeeStackbarComponent;
})();



/***/ }),

/***/ "./src/app/components/fee-module/monitoring-dashboard/monitoring-dashboard-routing.module.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/fee-module/monitoring-dashboard/monitoring-dashboard-routing.module.ts ***!
  \***************************************************************************************************/
/*! exports provided: MonitoringRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonitoringRoutingModule", function() { return MonitoringRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _dashboard_home_dashboard_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard-home/dashboard-home.component */ "./src/app/components/fee-module/monitoring-dashboard/dashboard-home/dashboard-home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let MonitoringRoutingModule = /** @class */ (() => {
    let MonitoringRoutingModule = class MonitoringRoutingModule {
    };
    MonitoringRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _dashboard_home_dashboard_home_component__WEBPACK_IMPORTED_MODULE_2__["DashboardHomeComponent"],
                        pathMatch: 'prefix',
                        children: [
                            {
                                path: '',
                                redirectTo: 'home'
                            },
                            {
                                path: 'home',
                                component: _dashboard_home_dashboard_home_component__WEBPACK_IMPORTED_MODULE_2__["DashboardHomeComponent"]
                            }
                        ]
                    }
                ])
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], MonitoringRoutingModule);
    return MonitoringRoutingModule;
})();



/***/ }),

/***/ "./src/app/components/fee-module/monitoring-dashboard/monitoring-dashboard.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/components/fee-module/monitoring-dashboard/monitoring-dashboard.component.scss ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZmVlLW1vZHVsZS9tb25pdG9yaW5nLWRhc2hib2FyZC9tb25pdG9yaW5nLWRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/fee-module/monitoring-dashboard/monitoring-dashboard.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/fee-module/monitoring-dashboard/monitoring-dashboard.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: MonitoringDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonitoringDashboardComponent", function() { return MonitoringDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let MonitoringDashboardComponent = /** @class */ (() => {
    let MonitoringDashboardComponent = class MonitoringDashboardComponent {
    };
    MonitoringDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'monitoring-dashboard',
            template: __importDefault(__webpack_require__(/*! raw-loader!./monitoring-dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fee-module/monitoring-dashboard/monitoring-dashboard.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./monitoring-dashboard.component.scss */ "./src/app/components/fee-module/monitoring-dashboard/monitoring-dashboard.component.scss")).default]
        })
    ], MonitoringDashboardComponent);
    return MonitoringDashboardComponent;
})();



/***/ }),

/***/ "./src/app/components/fee-module/monitoring-dashboard/monitoring-dashboard.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/fee-module/monitoring-dashboard/monitoring-dashboard.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: MonitoringDashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonitoringDashboardModule", function() { return MonitoringDashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_monitoring_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/monitoring.service */ "./src/app/components/fee-module/monitoring-dashboard/services/monitoring.service.ts");
/* harmony import */ var _monitoring_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./monitoring-dashboard-routing.module */ "./src/app/components/fee-module/monitoring-dashboard/monitoring-dashboard-routing.module.ts");
/* harmony import */ var _monitoring_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./monitoring-dashboard.component */ "./src/app/components/fee-module/monitoring-dashboard/monitoring-dashboard.component.ts");
/* harmony import */ var _dashboard_home_dashboard_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard-home/dashboard-home.component */ "./src/app/components/fee-module/monitoring-dashboard/dashboard-home/dashboard-home.component.ts");
/* harmony import */ var _fee_line_widget_fee_line_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fee-line-widget/fee-line.component */ "./src/app/components/fee-module/monitoring-dashboard/fee-line-widget/fee-line.component.ts");
/* harmony import */ var _fee_pie_widget_fee_pie_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./fee-pie-widget/fee-pie.component */ "./src/app/components/fee-module/monitoring-dashboard/fee-pie-widget/fee-pie.component.ts");
/* harmony import */ var _fee_stackbar_widget_fee_stackbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./fee-stackbar-widget/fee-stackbar.component */ "./src/app/components/fee-module/monitoring-dashboard/fee-stackbar-widget/fee-stackbar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';









let MonitoringDashboardModule = /** @class */ (() => {
    let MonitoringDashboardModule = class MonitoringDashboardModule {
    };
    MonitoringDashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _monitoring_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_6__["MonitoringRoutingModule"]
            ],
            declarations: [
                _monitoring_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["MonitoringDashboardComponent"],
                _dashboard_home_dashboard_home_component__WEBPACK_IMPORTED_MODULE_8__["DashboardHomeComponent"],
                _fee_line_widget_fee_line_component__WEBPACK_IMPORTED_MODULE_9__["FeeLineComponent"],
                _fee_pie_widget_fee_pie_component__WEBPACK_IMPORTED_MODULE_10__["FeePieComponent"],
                _fee_stackbar_widget_fee_stackbar_component__WEBPACK_IMPORTED_MODULE_11__["FeeStackbarComponent"]
            ],
            entryComponents: [
                _fee_line_widget_fee_line_component__WEBPACK_IMPORTED_MODULE_9__["FeeLineComponent"],
                _fee_pie_widget_fee_pie_component__WEBPACK_IMPORTED_MODULE_10__["FeePieComponent"],
                _fee_stackbar_widget_fee_stackbar_component__WEBPACK_IMPORTED_MODULE_11__["FeeStackbarComponent"]
            ],
            providers: [
                _services_monitoring_service__WEBPACK_IMPORTED_MODULE_5__["monitoringService"]
            ]
        })
    ], MonitoringDashboardModule);
    return MonitoringDashboardModule;
})();



/***/ }),

/***/ "./src/app/components/fee-module/monitoring-dashboard/services/monitoring.service.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/fee-module/monitoring-dashboard/services/monitoring.service.ts ***!
  \*******************************************************************************************/
/*! exports provided: monitoringService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "monitoringService", function() { return monitoringService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/authenticator.service */ "./src/app/services/authenticator.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let monitoringService = /** @class */ (() => {
    let monitoringService = class monitoringService {
        /* set default value for each url, header and autherization on service creation */
        constructor(http, auth) {
            this.http = http;
            this.auth = auth;
            this.baseUrl = '';
            this.institute_id = sessionStorage.getItem('institute_id');
            this.auth.currentAuthKey.subscribe(key => {
                this.Authorization = key;
                this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ "Content-Type": "application/json", "Authorization": this.Authorization });
            });
            this.auth.currentInstituteId.subscribe(id => {
                this.institute_id = id;
            });
            this.baseUrl = this.auth.getBaseUrl();
        }
        fetchFeeStackMonitor() {
            let url = this.baseUrl + "/api/v1/studentWise/fee/students/highCharts/" + this.institute_id;
            return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => {
                return res;
            }, err => {
                return err;
            }));
        }
        fetchFeeMonitor(obj) {
            let url = this.baseUrl + "/api/v1/studentWise/fee/students/highChartsRender";
            return this.http.post(url, obj, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => {
                return res;
            }, err => {
                return err;
            }));
        }
    };
    monitoringService.ctorParameters = () => [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"] }
    ];
    monitoringService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"]])
    ], monitoringService);
    return monitoringService;
})();



/***/ })

}]);
//# sourceMappingURL=app-components-fee-module-monitoring-dashboard-monitoring-dashboard-module-es2015.js.map