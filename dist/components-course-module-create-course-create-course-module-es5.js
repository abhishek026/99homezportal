(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-course-module-create-course-create-course-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/create-course/create-course.component.html":
    /*!***************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/create-course/create-course.component.html ***!
      \***************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsCourseModuleCreateCourseCreateCourseComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"clearFix\">\n\n    <!-- <section class=\"middle-main clearFix\"> -->\n    <!-- <div class=\"common-tab\" *ngIf=\"isFromSection\">\n            <ul>\n                <li id=\"liStandard\" *ngIf=\"jsonFlags.liStandard\" #liStandard (click)=\"switchActiveView('liStandard')\" class=\"\">\n                    <a *ngIf=\"(isLangInstitue)\" routerLink=\"/view/batch/create\">Master Course</a>\n                    <a *ngIf=\"(!isLangInstitue)\" routerLink=\"/view/course/create\">Standard</a>\n                </li>\n                <li id=\"liSubject\" *ngIf=\"jsonFlags.liSubject\" #liSubject (click)=\"switchActiveView('liSubject')\" class=\"\">\n                    <a *ngIf=\"(isLangInstitue)\" routerLink=\"/view/course/create/subject\">Course</a>\n                    <a *ngIf=\"(!isLangInstitue)\" routerLink=\"/view/course/create/subject\">Subject</a>\n                </li>\n                <li id=\"liTopic\" #liTopic (click)=\"switchActiveView('liTopic')\" class=\"\">\n                    <a routerLink=\"/view/course/create/topic\">Topic</a>\n                </li>\n                <li id=\"liManageBatch\" *ngIf=\"jsonFlags.liManageBatch\" #liManageBatch (click)=\"switchActiveView('liManageBatch')\" class=\"\">\n                    <a *ngIf=\"(isLangInstitue)\" routerLink=\"/view/course/create/managebatch\">Batch</a>\n                    <a *ngIf=\"(!isLangInstitue)\" routerLink=\"/view/course/create/courselist\">{{schoolModel ? 'Section' : 'Courses'}}</a>\n                </li>\n                <li id=\"liEcourseMapping\" style=\"width: 12%;\" #liEcourseMapping *ngIf=\"!schoolModel\" (click)=\"switchActiveView('liEcourseMapping')\" class=\"\">\n                    <a routerLink=\"/view/course/create/ecoursemapping\">Ecourse Mapping</a>\n\n                </li>\n            </ul>\n        </div> -->\n\n    <div *ngIf=\"isFromSection\">\n        <div class=\"w98 p-15\">\n            <!-- Nav tabs -->\n            <ul class=\"nav main-shadow\">\n                <li id=\"liManageBatch\" class=\"nav-item\" *ngIf=\"jsonFlags.liManageBatch\" #liManageBatch\n                    (click)=\"switchActiveView('liManageBatch')\">\n                    <a class=\"nav-link\" [ngClass]=\"(activeSession == 'liManageBatch') ? 'active' : ''\"\n                        *ngIf=\"(isLangInstitue)\" routerLink=\"/view/course/create/managebatch\">Batch</a>\n                    <!-- changes by Nalini - to handle school model conditions -->\n                    <a class=\"nav-link\" [ngClass]=\"(activeSession == 'liManageBatch') ? 'active' : ''\"\n                        *ngIf=\"(!isLangInstitue)\" routerLink=\"/view/course/create/courselist\">{{schoolModel ?\n                        'Section' : 'Courses'}}</a>\n                </li>\n                <li id=\"liStandard\" class=\"nav-item\" *ngIf=\"jsonFlags.liStandard\" #liStandard\n                    (click)=\"switchActiveView('liStandard')\">\n                    <a class=\"nav-link\" [ngClass]=\"(activeSession == 'liStandard') ? 'active' : ''\"\n                        *ngIf=\"(isLangInstitue)\" routerLink=\"/view/batch/create\">Master Course</a>\n                    <a class=\"nav-link\" [ngClass]=\"(activeSession == 'liStandard') ? 'active' : ''\"\n                        *ngIf=\"(!isLangInstitue)\" routerLink=\"/view/course/create\">Standard</a>\n                </li>\n                <li id=\"liSubject\" class=\"nav-item\" *ngIf=\"jsonFlags.liSubject\" #liSubject\n                    (click)=\"switchActiveView('liSubject')\">\n                    <a class=\"nav-link\" [ngClass]=\"(activeSession == 'liSubject') ? 'active' : ''\"\n                        *ngIf=\"(isLangInstitue)\" routerLink=\"/view/course/create/subject\">Course</a>\n                    <a class=\"nav-link\" [ngClass]=\"(activeSession == 'liSubject') ? 'active' : ''\"\n                        *ngIf=\"(!isLangInstitue)\" routerLink=\"/view/course/create/subject\">Subject</a>\n                </li>\n                <li id=\"liTopic\" class=\"nav-item\" #liTopic (click)=\"switchActiveView('liTopic')\">\n                    <a class=\"nav-link\" [ngClass]=\"(activeSession == 'liTopic') ? 'active' : ''\"\n                        routerLink=\"/view/course/create/topic\">Topic</a>\n                </li>\n                <li id=\"liRoutine\" *ngIf=\"schoolModel\" class=\"nav-item\" #liRoutine (click)=\"switchActiveView('liRoutine')\">\n                    <a class=\"nav-link\" data-toggle=\"tab\" [ngClass]=\"(activeSession == 'liRoutine') ? 'active' : ''\"\n                        routerLink=\"/view/course/create/routine/list\">Routine</a>\n                </li>\n                <li id=\"liEcourseMapping\" class=\"nav-item\" #liEcourseMapping *ngIf=\"!schoolModel\"\n                    (click)=\"switchActiveView('liEcourseMapping')\">\n                    <a class=\"nav-link\" [ngClass]=\"(activeSession == 'liEcourseMapping') ? 'active' : ''\"\n                         routerLink=\"/view/course/create/ecoursemapping\">Ecourse Mapping</a>\n                </li>\n            </ul>\n        </div>\n    </div>\n\n    <div class=\"router-container\">\n        <router-outlet></router-outlet>\n    </div>\n    <!-- </section> -->\n</div>";
      /***/
    },

    /***/
    "./src/app/components/course-module/create-course/create-course-routing.module.ts":
    /*!****************************************************************************************!*\
      !*** ./src/app/components/course-module/create-course/create-course-routing.module.ts ***!
      \****************************************************************************************/

    /*! exports provided: CreateCourseRoutingModule */

    /***/
    function srcAppComponentsCourseModuleCreateCourseCreateCourseRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateCourseRoutingModule", function () {
        return CreateCourseRoutingModule;
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


      var _ecourse_mapping_ecourse_mapping_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../ecourse-mapping/ecourse-mapping.component */
      "./src/app/components/course-module/ecourse-mapping/ecourse-mapping.component.ts");
      /* harmony import */


      var _create_course_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./create-course.component */
      "./src/app/components/course-module/create-course/create-course.component.ts");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var CreateCourseRoutingModule =
      /** @class */
      function () {
        var CreateCourseRoutingModule = function CreateCourseRoutingModule() {
          _classCallCheck(this, CreateCourseRoutingModule);
        };

        CreateCourseRoutingModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
            path: '',
            component: _create_course_component__WEBPACK_IMPORTED_MODULE_3__["CreateCourseComponent"],
            pathMatch: 'prefix',
            children: [{
              path: '',
              redirectTo: 'standardlist'
            }, {
              path: 'standardlist',
              loadChildren: function loadChildren() {
                return __webpack_require__.e(
                /*! import() | app-components-course-module-create-course-course-home-course-home-module */
                "app-components-course-module-create-course-course-home-course-home-module").then(__webpack_require__.bind(null,
                /*! app/components/course-module/create-course/course-home/course-home.module */
                "./src/app/components/course-module/create-course/course-home/course-home.module.ts")).then(function (m) {
                  return m.CourseHomeModule;
                });
              },
              // loadChildren: 'app/components/course-module/create-course//course-home/course-home.module#CourseHomeModule',
              pathMatch: 'prefix'
            }, {
              path: 'subject',
              loadChildren: function loadChildren() {
                return __webpack_require__.e(
                /*! import() | app-components-course-module-create-course-course-subject-course-subject-module */
                "app-components-course-module-create-course-course-subject-course-subject-module").then(__webpack_require__.bind(null,
                /*! app/components/course-module/create-course/course-subject/course-subject.module */
                "./src/app/components/course-module/create-course/course-subject/course-subject.module.ts")).then(function (m) {
                  return m.CourseSubjectModule;
                });
              },
              // loadChildren: "app/components/course-module/create-course/course-subject/course-subject.module#CourseSubjectModule",
              pathMatch: 'prefix'
            }, {
              path: 'exam',
              loadChildren: function loadChildren() {
                return Promise.all(
                /*! import() | app-components-course-module-create-course-course-exam-course-exam-module */
                [__webpack_require__.e("default~app-components-course-module-create-course-course-class-course-class-module~app-components-c~3c57cc5b"), __webpack_require__.e("common"), __webpack_require__.e("app-components-course-module-create-course-course-exam-course-exam-module")]).then(__webpack_require__.bind(null,
                /*! app/components/course-module/create-course/course-exam/course-exam.module */
                "./src/app/components/course-module/create-course/course-exam/course-exam.module.ts")).then(function (m) {
                  return m.CourseExamModule;
                });
              },
              // loadChildren: "app/components/course-module/create-course/course-exam/course-exam.module#CourseExamModule",
              pathMatch: 'prefix'
            }, {
              path: 'topic',
              loadChildren: function loadChildren() {
                return Promise.all(
                /*! import() | app-components-course-module-create-course-topic-topic-module */
                [__webpack_require__.e("default~app-components-course-module-create-course-course-class-course-class-module~app-components-c~8a90b495"), __webpack_require__.e("default~app-components-course-module-create-course-course-class-course-class-module~app-components-c~a9a5f287"), __webpack_require__.e("common"), __webpack_require__.e("app-components-course-module-create-course-topic-topic-module")]).then(__webpack_require__.bind(null,
                /*! app/components/course-module/create-course/topic/topic.module */
                "./src/app/components/course-module/create-course/topic/topic.module.ts")).then(function (m) {
                  return m.TopicModule;
                });
              },
              // loadChildren: "app/components/course-module/create-course/topic/topic.module#TopicModule",
              pathMatch: 'prefix'
            }, {
              path: 'courselist',
              loadChildren: function loadChildren() {
                return __webpack_require__.e(
                /*! import() | course-course-list-v2-course-course-list-v2-module */
                "course-course-list-v2-course-course-list-v2-module").then(__webpack_require__.bind(null,
                /*! ./course-course-list-v2/course-course-list-v2.module */
                "./src/app/components/course-module/create-course/course-course-list-v2/course-course-list-v2.module.ts")).then(function (m) {
                  return m.CourseCourseListV2Module;
                });
              },
              // loadChildren: "app/components/course-module/create-course/course-course-list/course-list.module#CourseListModule",
              pathMatch: 'prefix'
            }, {
              path: 'class',
              loadChildren: function loadChildren() {
                return Promise.all(
                /*! import() | app-components-course-module-create-course-course-class-course-class-module */
                [__webpack_require__.e("default~app-components-course-module-create-course-course-class-course-class-module~app-components-c~8a90b495"), __webpack_require__.e("default~app-components-course-module-create-course-course-class-course-class-module~app-components-c~a9a5f287"), __webpack_require__.e("default~app-components-course-module-create-course-course-class-course-class-module~app-components-c~0b3724e1"), __webpack_require__.e("default~app-components-course-module-create-course-course-class-course-class-module~app-components-e~ce6167d9"), __webpack_require__.e("default~app-components-course-module-create-course-course-class-course-class-module~app-components-e~3fcfeb46"), __webpack_require__.e("default~app-components-course-module-create-course-course-class-course-class-module~app-components-c~3c57cc5b"), __webpack_require__.e("default~app-components-course-module-create-course-course-class-course-class-module~app-components-c~77e6f154"), __webpack_require__.e("app-components-course-module-create-course-course-class-course-class-module")]).then(__webpack_require__.bind(null,
                /*! app/components/course-module/create-course/course-class/course-class.module */
                "./src/app/components/course-module/create-course/course-class/course-class.module.ts")).then(function (m) {
                  return m.CourseClassModule;
                });
              },
              // loadChildren: "app/components/course-module/create-course/course-class/course-class.module#CourseClassModule",
              pathMatch: 'prefix'
            }, {
              path: 'managebatch',
              loadChildren: function loadChildren() {
                return __webpack_require__.e(
                /*! import() | app-components-course-module-create-course-manage-batch-manage-batch-module */
                "app-components-course-module-create-course-manage-batch-manage-batch-module").then(__webpack_require__.bind(null,
                /*! app/components/course-module/create-course/manage-batch/manage-batch.module */
                "./src/app/components/course-module/create-course/manage-batch/manage-batch.module.ts")).then(function (m) {
                  return m.ManageBatchModule;
                });
              },
              // loadChildren: "app/components/course-module/create-course/manage-batch/manage-batch.module#ManageBatchModule",
              pathMatch: 'prefix'
            }, {
              path: 'ecoursemapping',
              component: _ecourse_mapping_ecourse_mapping_component__WEBPACK_IMPORTED_MODULE_2__["EcourseMappingComponent"],
              pathMatch: 'prefix'
            }, {
              path: 'routine',
              // component: AnalyticsComponent
              loadChildren: function loadChildren() {
                return __webpack_require__.e(
                /*! import() | routine-routine-module */
                "routine-routine-module").then(__webpack_require__.bind(null,
                /*! ./routine/routine.module */
                "./src/app/components/course-module/create-course/routine/routine.module.ts")).then(function (m) {
                  return m.RoutineModule;
                });
              },
              pathMatch: 'prefix'
            }]
          }])],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })], CreateCourseRoutingModule);
        return CreateCourseRoutingModule;
      }();
      /***/

    },

    /***/
    "./src/app/components/course-module/create-course/create-course.component.scss":
    /*!*************************************************************************************!*\
      !*** ./src/app/components/course-module/create-course/create-course.component.scss ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsCourseModuleCreateCourseCreateCourseComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/* ===============================header colors=======================*/\n.table-format-first .table-responsive table th,\n.table-format-first .table-responsive table td {\n  text-align: center;\n  padding: 10px 5px;\n}\n.table-format-first .table-responsive table th {\n  text-transform: capitalize;\n  font-size: 14px;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper {\n  display: inline-block;\n  overflow: initial;\n  margin-left: 0;\n  width: auto;\n  position: relative;\n  background: transparent;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox {\n  z-index: 2;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label {\n  font-size: 16px;\n  margin-left: 7px;\n  font-weight: 600;\n  vertical-align: middle;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:after, .table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:before {\n  z-index: 1;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper:after {\n  content: '';\n  width: 20px;\n  height: 20px;\n  background: #fff;\n  left: 0;\n  top: 0;\n  position: absolute;\n}\n.table-format-first .table-responsive table tbody tr td .fa-trash-o {\n  color: #f44336;\n  font-size: 20px;\n}\n.table-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-top: 10px;\n}\n.table-container .heading-container {\n  background: #e0eaec;\n  display: flex;\n  flex-direction: row;\n  font-size: 14px;\n  font-weight: 600;\n  text-align: left;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n}\n.table-container .heading-container .heading-item {\n  width: 10%;\n  text-align: center;\n}\n.table-container .value-outer-container {\n  display: flex;\n  flex-direction: column;\n  min-height: 53vh;\n  max-height: 54vh;\n  overflow-x: hidden;\n  overflow-y: auto;\n  border: 1px solid #ccc;\n}\n.table-container .value-outer-container .value-container {\n  display: flex;\n  flex-direction: row;\n  text-align: left;\n  padding: 4px;\n  font-size: 12px;\n  border-bottom: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n  border-top: none;\n}\n.table-container .value-outer-container .value-container .value-item {\n  width: 10%;\n  text-align: center;\n}\n.middle-section {\n  padding: 1%;\n}\n.router-container {\n  width: 100%;\n}\n.w98 {\n  width: 100%;\n  margin: 0px auto;\n}\n.nav-item .nav-link {\n  font-weight: 600;\n  color: #405877;\n  padding-bottom: 8px;\n  cursor: pointer;\n  font-size: 13px;\n  float: left;\n  background: none;\n}\n.nav-item .active {\n  border-bottom: 3px solid #109cf1 !important;\n  color: #109cf1 !important;\n  font-weight: 600;\n  color: #405877;\n  padding-bottom: 8px;\n  cursor: pointer;\n  font-size: 13px;\n  float: left;\n  background: none;\n  display: block;\n  padding: 0.5rem 0rem;\n  margin: 0;\n  margin-left: 0rem;\n  margin-right: 3.5rem;\n}\n.nav-link {\n  font-weight: 600;\n  color: #405877;\n  padding-bottom: 8px;\n  cursor: pointer;\n  font-size: 13px;\n  float: left;\n  display: block;\n  padding: 0.5rem 0rem;\n  margin: 0;\n  margin-left: 0rem;\n  margin-right: 3.5rem;\n}\n.flex {\n  display: flex;\n}\n.main-shadow {\n  box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  -webkit-box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n  -moz-box-shadow: 0px 7px 5px -3px rgba(0, 0, 0, 0.1);\n}\n.p-15 {\n  padding-bottom: 15px;\n}\n.nav > li > a:focus, .nav > li > a:hover {\n  background: none !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY3NzL2NvbW1vbi92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jb3Vyc2UtbW9kdWxlL2NyZWF0ZS1jb3Vyc2UvY3JlYXRlLWNvdXJzZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZQSx1RUFBQTtBQVdBOztFQUtnQixrQkFBa0I7RUFDbEIsaUJBQWlCO0FDeEJqQztBRGtCQTtFQVNnQiwwQkFBMEI7RUFDMUIsZUFBZTtBQ3ZCL0I7QURhQTtFQWdCNEIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsV0FBVztFQUNYLGtCQUFrQjtFQUNsQix1QkFBdUI7QUN6Qm5EO0FESUE7RUF1QmdDLFVBQVU7QUN2QjFDO0FEQUE7RUEwQmdDLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtBQ3RCdEQ7QURQQTtFQWdDb0MsVUFBVTtBQ3JCOUM7QURYQTtFQW9DZ0MsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLE9BQU87RUFDUCxNQUFNO0VBQ04sa0JBQWtCO0FDckJsRDtBRHJCQTtFQThDNEIsY0FsRGI7RUFtRGEsZUFBZTtBQ3JCM0M7QUQ4QkE7RUFDSSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxnQkFBZ0I7QUMzQnBCO0FEdUJBO0VBTU0sbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIseUJBQXlCO0FDekIvQjtBRFVBO0VBaUJRLFVBQVU7RUFDVixrQkFBa0I7QUN2QjFCO0FES0E7RUFzQk0sYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0FDdkI1QjtBRExBO0VBOEJRLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLG9CQUFvQjtFQUNwQix5QkFBeUI7RUFDekIsZ0JBQWdCO0FDckJ4QjtBRGpCQTtFQXdDVSxVQUFVO0VBQ1Ysa0JBQWtCO0FDbkI1QjtBQXBHQTtFQUNFLFdBQVc7QUF1R2I7QUFyR0E7RUFFSSxXQUFXO0FBdUdmO0FBbEdBO0VBQ0ksV0FBVztFQUNYLGdCQUFnQjtBQXFHcEI7QUFuR0U7RUFFTSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZUFBZTtFQUNmLFdBQVc7RUFDWCxnQkFBZ0I7QUFxR3hCO0FBN0dFO0VBV00sMkNBQTJDO0VBQzNDLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZUFBZTtFQUNmLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLG9CQUFvQjtFQUNwQixTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQXNHNUI7QUFsR0U7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZUFBZTtFQUNmLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsb0JBQW9CO0FBcUd4QjtBQW5HRTtFQUNFLGFBQWE7QUFzR2pCO0FBcEdFO0VBQ0UsK0NBQStDO0VBQy9DLHVEQUF1RDtFQUN2RCxvREFBb0Q7QUF1R3hEO0FBcEdFO0VBQ0Usb0JBQW9CO0FBdUd4QjtBQXJHRTtFQUNJLDJCQUEyQjtBQXdHakMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvdXJzZS1tb2R1bGUvY3JlYXRlLWNvdXJzZS9jcmVhdGUtY291cnNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHB1bGwtTDogbGVmdDtcbiRwdWxsLVI6IHJpZ2h0O1xuJHB1bGwtbm9uZTogbm9uZTtcbiRmdWxsLXdpZHRoOiAxMDAlO1xuJGJvcmRlci1ib3g6IGJvcmRlci1ib3g7XG4kYm9yZGVyLWNvbG9yOiAjZGVlYWVlO1xuJGJnLXdoaXRlOiAjZmZmO1xuJGVycm9yLWNvbG9yOiAjZmYwMDAwO1xuJGNvbW1vbi1ibHVlOiAjMDA4NGY2O1xuJHByaW1hcnktY29sb3I6ICMzMzM7XG4kYm9yZGVyLWNvbW1vbjojZWFlYWViO1xuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09aGVhZGVyIGNvbG9ycz09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuJGhlYWRlci1iZzojMDA2MEEzO1xuJGhlYWRlci1ib3JkZXI6I2VhZWFlYjtcbiRsZWZ0TWVudUJnOiNmYWZhZmE7XG4kbGVmdE1lbnVIb3ZlckJnOiMwMDg0ZjY7XG4kbGVmdE1lbnVUZXh0SG92ZXJDb2xvcjojZmZmO1xuJHJlZEJ0bjojZjQ0MzM2O1xuJGJvcmRlcmNjYzojY2NjO1xuJGxpZ2h0Qmx1ZTojZWZmN2ZmO1xuJHRhYmxlSGVhZGluZ0JnQ29sb3I6ICMwMDRhN2U7XG4udGFibGUtZm9ybWF0LWZpcnN0IHtcbiAgICAudGFibGUtcmVzcG9uc2l2ZSB7XG4gICAgICAgIHRhYmxlIHtcbiAgICAgICAgICAgIHRoLFxuICAgICAgICAgICAgdGQge1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoIHtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0Ym9keSB7XG4gICAgICAgICAgICAgICAgdHIge1xuICAgICAgICAgICAgICAgICAgICB0ZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuZmllbGQtY2hlY2tib3gtd3JhcHBlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBpbml0aWFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZm9ybS1jaGVja2JveCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mb3JtLWNoZWNrYm94K2xhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogN3B4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmFmdGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLmZhLXRyYXNoLW8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkcmVkQnRuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnRhYmxlLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgLmhlYWRpbmctY29udGFpbmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICNlMGVhZWM7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgICAuaGVhZGluZy1pdGVtIHtcbiAgICAgICAgd2lkdGg6IDEwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgIH1cbiAgICAudmFsdWUtb3V0ZXItY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgbWluLWhlaWdodDogNTN2aDtcbiAgICAgIG1heC1oZWlnaHQ6IDU0dmg7XG4gICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgIC52YWx1ZS1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgICAgICBib3JkZXItdG9wOiBub25lO1xuICAgICAgICAudmFsdWUtaXRlbSB7XG4gICAgICAgICAgd2lkdGg6IDEwJTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0iLCJAaW1wb3J0IFwiLi9zcmMvYXNzZXRzL2Nzcy9jb21tb24vdmFyaWFibGVzLnNjc3NcIjtcbi5taWRkbGUtc2VjdGlvbntcbiAgcGFkZGluZzogMSU7XG59XG4ucm91dGVyLWNvbnRhaW5lciB7XG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgI2RlZWFlZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvLyBoZWlnaHQ6IDgwdmg7XG4gICAgLy8gb3ZlcmZsb3cteDogYXV0bztcbiAgICAvLyBvdmVyZmxvdy15OiBhdXRvO1xufVxuLnc5OCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwcHggYXV0bztcbiAgfVxuICAubmF2LWl0ZW0ge1xuICAgIC5uYXYtbGluayB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGNvbG9yOiAjNDA1ODc3O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgfVxuICAgIC5hY3RpdmUge1xuICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzEwOWNmMSAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogIzEwOWNmMSAhaW1wb3J0YW50O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBjb2xvcjogIzQwNTg3NztcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcGFkZGluZzogMC41cmVtIDByZW07XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDByZW07XG4gICAgICAgIG1hcmdpbi1yaWdodDogMy41cmVtO1xuICAgIH1cbiAgfVxuICBcbiAgLm5hdi1saW5rIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiAjNDA1ODc3O1xuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nOiAwLjVyZW0gMHJlbTtcbiAgICBtYXJnaW46IDA7XG4gICAgbWFyZ2luLWxlZnQ6IDByZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAzLjVyZW07XG4gIH1cbiAgLmZsZXgge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbiAgLm1haW4tc2hhZG93IHtcbiAgICBib3gtc2hhZG93OiAwcHggN3B4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCA3cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDdweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgLy8gcGFkZGluZy1ib3R0b206IDE1cHg7XG4gIH1cbiAgLnAtMTUge1xuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICB9XG4gIC5uYXY+bGk+YTpmb2N1cywgLm5hdj5saT5hOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcbiAgfSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/components/course-module/create-course/create-course.component.ts":
    /*!***********************************************************************************!*\
      !*** ./src/app/components/course-module/create-course/create-course.component.ts ***!
      \***********************************************************************************/

    /*! exports provided: CreateCourseComponent */

    /***/
    function srcAppComponentsCourseModuleCreateCourseCreateCourseComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateCourseComponent", function () {
        return CreateCourseComponent;
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


      var _model_role_features__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../model/role_features */
      "./src/app/model/role_features.ts");
      /* harmony import */


      var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
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

      var CreateCourseComponent =
      /** @class */
      function () {
        var CreateCourseComponent = /*#__PURE__*/function () {
          function CreateCourseComponent(router, auth) {
            _classCallCheck(this, CreateCourseComponent);

            this.router = router;
            this.auth = auth;
            this.isLangInstitue = false;
            this.role_feature = _model_role_features__WEBPACK_IMPORTED_MODULE_2__["role"].features;
            this.jsonFlags = {
              classMenu: false,
              examMenu: false,
              liStandard: false,
              liSubject: false,
              liManageBatch: false
            };
            this.schoolModel = false;
            this.isFromSection = true;
            this.activeSession = '';
          }

          _createClass(CreateCourseComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              var _this = this;

              this.auth.institute_type.subscribe(function (res) {
                if (res == "LANG") {
                  _this.isLangInstitue = true;
                } else {
                  _this.isLangInstitue = false;
                }
              }); // changes by Nalini - to handle school model conditions

              this.auth.schoolModel.subscribe(function (res) {
                _this.schoolModel = false;

                if (res) {
                  _this.schoolModel = true;
                }
              });
              this.checkInstituteType();
            }
          }, {
            key: "checkInstituteType",
            value: function checkInstituteType() {
              if (this.isLangInstitue) {
                this.checkUserAcessForLang();
              } else {
                this.checkUserAcessForNotLang();
              }
            }
          }, {
            key: "checkWhichTabIsOpen",
            value: function checkWhichTabIsOpen() {
              if (this.router.url.includes('standardlist')) {
                this.switchActiveView('liStandard');
                this.isFromSection = true;
              } else if (this.router.url.includes('subject')) {
                this.switchActiveView('liSubject');
                this.isFromSection = true;
              } else if (this.router.url.includes('courselist')) {
                this.switchActiveView('liManageBatch');
                this.isFromSection = true;
              } else if (this.router.url.includes('exam')) {
                this.switchActiveView('liExam');
                this.isFromSection = false;
              } else if (this.router.url.includes('class')) {
                this.switchActiveView('liClass');
                this.isFromSection = false;
              } else if (this.router.url.includes('managebatch')) {
                this.switchActiveView('liManageBatch');
                this.isFromSection = true;
              } else if (this.router.url.includes('topic')) {
                this.switchActiveView('liTopic');
                this.isFromSection = true;
              } else if (this.router.url.includes('ecoursemapping')) {
                this.switchActiveView('liEcourseMapping');
                this.isFromSection = true;
              } else if (this.router.url.includes('routine')) {
                this.switchActiveView('liRoutine');
                this.isFromSection = true;
              }
            }
          }, {
            key: "switchActiveView",
            value: function switchActiveView(showId) {
              var _this2 = this;

              var lists = ['liStandard', 'liSubject', 'liManageBatch', 'liExam', 'liEcourseMapping'];
              lists.forEach(function (object) {
                if (_this2[object]) {
                  _this2[object].nativeElement.classList.remove('active');
                }
              });

              if (!this.isLangInstitue && this.liTopic) {
                this.liTopic.nativeElement.classList.remove('active');
              }

              setTimeout(function () {
                if (document.getElementById(showId) && document.getElementById(showId).classList) {
                  document.getElementById(showId).classList.add('active');
                  _this2.activeSession = showId;
                }
              }, 500);
            }
          }, {
            key: "checkUserAcessForNotLang",
            value: function checkUserAcessForNotLang() {
              var userType = Number(sessionStorage.getItem('userType'));
              var permissionArray = sessionStorage.getItem('permissions');

              if (userType != 3) {
                if (permissionArray == "" || permissionArray == null) {
                  this.showAllTabs();
                  this.checkWhichTabIsOpen();
                } else {
                  this.hideAllTabs(); // if (permissionArray != null && permissionArray != "") {
                  // Changes done by Nalini - To handle role based conditions

                  this.isFromSection = false;

                  if (this.role_feature.CLASS_MENU) {
                    this.jsonFlags.liManageBatch = true;
                    this.jsonFlags.liStandard = true;
                    this.jsonFlags.liSubject = true;
                    this.isFromSection = true; // this.router.navigateByUrl('/view/course/create/standardlist');
                    // this.switchActiveView('liStandard');
                  }

                  if (this.role_feature.CLASS_MENU) {
                    this.jsonFlags.classMenu = true; // if(!this.role_feature.SETUP_MENU) {
                    // this.router.navigateByUrl('/view/course/create/class/home');
                    // this.switchActiveView('liClass');
                    // }
                  }

                  if (this.role_feature.EXAMS_MENU) {
                    this.jsonFlags.examMenu = true; // if(!this.role_feature.CLASS_MENU && !this.role_feature.SETUP_MENU) {
                    // this.router.navigateByUrl('/view/course/create/exam');
                    // this.switchActiveView('liExam');
                    // }
                  }

                  if (sessionStorage.getItem('isFromCoursePlanner') == 'true') {
                    this.isFromSection = false;
                  } // if(!this.role_feature.CLASS_MENU && !this.role_feature.EXAMS_MENU && !this.role_feature.SETUP_MENU) {
                  //   this.switchActiveView('liTopic');
                  //   this.router.navigateByUrl('/view/course/create/topic/home');
                  // }
                  // this.routeToSubTabs(permissionArray);

                }
              } else {
                this.teacherLoginFound();
              }
            }
          }, {
            key: "routeToSubTabs",
            value: function routeToSubTabs(data) {// if (this.role_feature.SETUP_MENU) {
              //   this.router.navigateByUrl('/view/course/create/standardlist');
              //   this.switchActiveView('liStandard');
              // } else if (data.indexOf('502') != -1) {
              //   this.router.navigateByUrl('/view/course/create/subject');
              //   this.switchActiveView('liSubject');
              // } else if (data.indexOf('505') != -1) {
              //   this.router.navigateByUrl('/view/course/create/courselist');
              //   this.switchActiveView('liManageBatch');
              // } else if (data.indexOf('701') >= 0 || this.role_feature.CLASS_MENU) {
              //   this.router.navigateByUrl('/view/course/create/class/home');
              //   this.switchActiveView('liClass');
              // } else if (data.indexOf('702') >= 0) {
              //   this.router.navigateByUrl('/view/course/create/exam');
              //   this.switchActiveView('liExam');
              // }
            }
          }, {
            key: "checkUserAcessForLang",
            value: function checkUserAcessForLang() {
              var userType = Number(sessionStorage.getItem('userType'));
              var permissionArray = sessionStorage.getItem('permissions');

              if (userType != 3) {
                if (permissionArray == "" || permissionArray == null) {
                  this.showAllTabs();
                  this.checkWhichTabIsOpen();
                } else {
                  this.hideAllTabs(); // if (permissionArray != null && permissionArray != "") {
                  // Changes done by Nalini - To handle role based conditions

                  this.isFromSection = true;

                  if (this.role_feature.CLASS_MENU) {
                    this.jsonFlags.liSubject = true;
                    this.jsonFlags.liStandard = true;
                    this.jsonFlags.liManageBatch = true;
                    this.isFromSection = true; // this.router.navigateByUrl('/view/course/create/standardlist');
                    // this.switchActiveView('liStandard');
                  }

                  if (this.role_feature.CLASS_MENU) {
                    this.jsonFlags.classMenu = false; // this.isFromSection = false;
                    // if(!this.role_feature.SETUP_MENU) {
                    //   this.router.navigateByUrl('/view/course/create/class/home');
                    //   this.switchActiveView('liClass');
                    // }
                  }

                  if (this.role_feature.EXAMS_MENU) {
                    this.jsonFlags.examMenu = true; // this.isFromSection = false;
                    // if(!this.role_feature.SETUP_MENU && !this.role_feature.CLASS_MENU) {
                    //   this.router.navigateByUrl('/view/course/create/exam');
                    //   this.switchActiveView('liExam');
                    // }
                  }

                  if (sessionStorage.getItem('isFromCoursePlanner') == 'true') {
                    this.isFromSection = false;
                  } // if(!this.role_feature.CLASS_MENU && !this.role_feature.EXAMS_MENU && !this.role_feature.SETUP_MENU) {
                  //   this.switchActiveView('liTopic');
                  //   this.router.navigateByUrl('/view/course/create/topic/home');
                  // }
                  // this.routeToSubTabsForLang(permissionArray);
                  // }

                }
              } else {
                this.teacherLoginFound();
              }
            } // routeToSubTabsForLang(data) {
            //   if (data.indexOf('501') != -1) {
            //     this.router.navigateByUrl('/view/course/create/standardlist');
            //     this.switchActiveView('liStandard');
            //   } else if (data.indexOf('502') != -1) {
            //     this.router.navigateByUrl('/view/course/create/subject');
            //     this.switchActiveView('liSubject');
            //   } else if (data.indexOf('401') != -1) {
            //     this.router.navigateByUrl('/view/batch/create/managebatch');
            //     this.switchActiveView('liManageBatch');
            //   } else if (data.indexOf('402') >= 0 || this.role_feature.CLASS_MENU) {
            //     this.router.navigateByUrl('view/batch/create/class/home');
            //     this.switchActiveView('liClass');
            //   } else if (data.indexOf('404') >= 0) {
            //     this.router.navigateByUrl('/view/course/create/exam');
            //     this.switchActiveView('liExam');
            //   }
            // }

          }, {
            key: "showAllTabs",
            value: function showAllTabs() {
              var _this3 = this;

              // Changes done by Nalini - To show all tabs
              var array = Object.keys(this.jsonFlags);
              array.forEach(function (flag) {
                _this3.jsonFlags[flag] = true;
              });
            }
          }, {
            key: "hideAllTabs",
            value: function hideAllTabs() {
              var _this4 = this;

              // Changes done by Nalini - To hide all tabs
              var array = Object.keys(this.jsonFlags);
              array.forEach(function (flag) {
                _this4.jsonFlags[flag] = false;
              });
            }
          }, {
            key: "teacherLoginFound",
            value: function teacherLoginFound() {
              this.hideAllTabs(); // Changes done by Nalini - To handle role based conditions

              this.jsonFlags.liManageBatch = true;
              this.jsonFlags.classMenu = true;
              this.jsonFlags.examMenu = true;
              this.checkWhichTabIsOpen(); // if (this.isLangInstitue) {
              //   this.router.navigateByUrl('/view/batch/create/managebatch');
              //   this.switchActiveView('liManageBatch');
              // } else {
              //   this.router.navigateByUrl('/view/course/create/courselist');
              //   this.switchActiveView('liManageBatch');
              // }
            }
          }]);

          return CreateCourseComponent;
        }();

        CreateCourseComponent.ctorParameters = function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"]
          }];
        };

        CreateCourseComponent.propDecorators = {
          liStandard: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['liStandard', {
              "static": false
            }]
          }],
          liSubject: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['liSubject', {
              "static": false
            }]
          }],
          liManageBatch: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['liManageBatch', {
              "static": false
            }]
          }],
          liClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['liClass', {
              "static": false
            }]
          }],
          liExam: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['liExam', {
              "static": false
            }]
          }],
          liTopic: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['liTopic', {
              "static": false
            }]
          }],
          liEcourseMapping: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['liEcourseMapping', {
              "static": false
            }]
          }],
          liRoutine: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['liRoutine', {
              "static": false
            }]
          }]
        };
        CreateCourseComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
          selector: 'app-create-course',
          template: __importDefault(__webpack_require__(
          /*! raw-loader!./create-course.component.html */
          "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/create-course/create-course.component.html"))["default"],
          styles: [__importDefault(__webpack_require__(
          /*! ./create-course.component.scss */
          "./src/app/components/course-module/create-course/create-course.component.scss"))["default"]]
        }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"]])], CreateCourseComponent);
        return CreateCourseComponent;
      }();
      /***/

    },

    /***/
    "./src/app/components/course-module/create-course/create-course.module.ts":
    /*!********************************************************************************!*\
      !*** ./src/app/components/course-module/create-course/create-course.module.ts ***!
      \********************************************************************************/

    /*! exports provided: CreateCourseModule */

    /***/
    function srcAppComponentsCourseModuleCreateCourseCreateCourseModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateCourseModule", function () {
        return CreateCourseModule;
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


      var _create_course_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./create-course.component */
      "./src/app/components/course-module/create-course/create-course.component.ts");
      /* harmony import */


      var _create_course_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./create-course-routing.module */
      "./src/app/components/course-module/create-course/create-course-routing.module.ts");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var CreateCourseModule =
      /** @class */
      function () {
        var CreateCourseModule = function CreateCourseModule() {
          _classCallCheck(this, CreateCourseModule);
        };

        CreateCourseModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _create_course_routing_module__WEBPACK_IMPORTED_MODULE_3__["CreateCourseRoutingModule"]],
          declarations: [_create_course_component__WEBPACK_IMPORTED_MODULE_2__["CreateCourseComponent"]],
          entryComponents: [],
          providers: [],
          exports: [_create_course_component__WEBPACK_IMPORTED_MODULE_2__["CreateCourseComponent"]]
        })], CreateCourseModule);
        return CreateCourseModule;
      }();
      /***/

    }
  }]);
})();
//# sourceMappingURL=components-course-module-create-course-create-course-module-es5.js.map