(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-components-course-module-create-course-topic-topic-module"],{

/***/ "./node_modules/primeng/fileupload.js":
/*!********************************************!*\
  !*** ./node_modules/primeng/fileupload.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/fileupload/fileupload */ "./node_modules/primeng/components/fileupload/fileupload.js"));

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/create-course/topic/topic-bulk-upload/topic-bulk-upload.component.html":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/create-course/topic/topic-bulk-upload/topic-bulk-upload.component.html ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\" clearFix\">\n\n  <div class=\"topic_details\">\n    <section class=\"header-section\">\n      <div>\n        <div class=\"header-title\">\n          <h2>\n            <!-- <a routerLink=\"/view/course/create/topic/home\" style=\"color: #0084f6;\">\n              Topic\n            </a> -->\n            <!-- <i style=\"font-family: 'FontAwesome';\" class=\"fas fa-angle-right\"></i>  -->\n            Bulk Upload\n          </h2>\n        </div>\n      </div>\n    </section>\n    <br>\n    <div class=\"filter_div\" style=\"border-bottom: 1px solid lightgrey;    margin-top: -50px;\">\n      <div class=\"field-wrapper\" style=\"margin-left:0px\">\n        <label *ngIf=\"!isProfessional\">Standard<span class=\"text-danger\">*</span></label>\n        <label *ngIf=\"isProfessional\">Master Course<span class=\"text-danger\">*</span></label>\n        <div class=\"dropdown-div\">\n          <select class=\"dropdown\" [(ngModel)]=\"filterData.standard_id\"\n            (change)=\"getAllSubjectListFromServer($event.target.value)\">\n            <option value=\"-1\"></option>\n            <option *ngFor=\"let standard of standardData;let i=index; \" [value]=\"standard.standard_id\">\n              {{standard.standard_name}}</option>\n          </select>\n        </div>\n      </div>\n      <div class=\"field-wrapper\">\n        <label *ngIf=\"!isProfessional\">Subject<span class=\"text-danger\">*</span></label>\n        <label *ngIf=\"isProfessional\">Course<span class=\"text-danger\">*</span></label>\n        <div class=\"dropdown-div\">\n          <select class=\"dropdown\" [(ngModel)]=\"filterData.subject_id\">\n            <option value=\"-1\"></option>\n            <option *ngFor=\"let subject of subjectData;let i=index; \" [value]=\"subject.subject_id\">\n              {{subject.subject_name}}</option>\n          </select>\n        </div>\n      </div>\n      <!-- <button class=\"btn fullBlue\" style=\"margin-bottom: 5px;\" [disabled]=\"(filterData.standard_id==-1) || (filterData.subject_id==-1)\" (click)=\"getTopicDetails('view')\" >Upload</button> -->\n      <div class=\"pull-right\">\n        <a>\n          <input type=\"button\" value=\"Download Template\" class=\"btn fullBlue\" data-backdrop=\"static\"\n            (click)=\"downloadBulkTemplate()\" style=\"margin-top: 18px; font-size: 12px;\" />\n        </a>\n        <a id=\"template_link\" href=\"#\"></a>\n        <button class=\"btn fullBlue\" style=\"margin-top: 18px; font-size: 12px;\" (click)=\"fetchBulkUploadStatusData()\">\n          Bulk Upload Report\n        </button>\n      </div>\n    </div>\n  </div>\n\n  <!--====================================middle <Main> section==========================-->\n  <section class=\"middle-main clearFix\" id=\"bulkEnquiryMain\">\n    <div class=\"file-upload-box\">\n      <div class=\"select-file-upload\">\n        <h5 style=\"font-weight: 500;\">Select a file to upload</h5>\n        <div class=\"file-wrapper\">\n          <ul>\n            <li>\n              <!-- accept=\"application/vnd.ms-excel\" -->\n              <p-fileUpload #fileUpload customUpload=\"true\" type=\"submit\"\n                (uploadHandler)=\"uploadHandler($event, fileUpload)\" [showCancelButton]=\"false\">\n              </p-fileUpload>\n\n              <div class=\"uploadProcessAndFileName clearfix\" *ngIf=\"isUploadingXls\">\n                <div class=\"file-uploaded\">\n                  {{fileLoading}}\n                </div>\n                <div class=\"progress-bar-wrapper\">\n                  <div class=\"upload-bar\">\n                    <div id=\"progress-width\"></div>\n                  </div>\n                  <span>{{progress}} %</span>\n                </div>\n              </div>\n            </li>\n          </ul>\n        </div>\n      </div>\n\n    </div>\n  </section>\n\n\n\n  <!-- Download Template Modal -->\n  <div class=\"modal fade\" id=\"downloadTemplate\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\" style=\"padding: 1em;\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\" style=\"width: 99%;font-weight: 600;\">Download Template</h4>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        </div>\n        <div class=\"modal-body body-container\">\n          <div class=\"field-wrapper\">\n            <label *ngIf=\"!isProfessional\">Standard<span class=\"text-danger\">*</span></label>\n            <label *ngIf=\"isProfessional\">Master Course<span class=\"text-danger\">*</span></label>\n            <div class=\"dropdown-div\">\n              <select class=\"dropdown\" [(ngModel)]=\"downloadTempData.standard_id\"\n                (change)=\"getAllSubjectListForDownloadTemp($event.target.value)\">\n                <option value=\"-1\">Select Standard</option>\n                <option *ngFor=\"let standard of standardData;let i=index; \" [value]=\"standard.standard_id\">\n                  {{standard.standard_name}}</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"field-wrapper\">\n            <label *ngIf=\"!isProfessional\">Subject<span class=\"text-danger\">*</span></label>\n            <label *ngIf=\"isProfessional\">Course<span class=\"text-danger\">*</span></label>\n            <div class=\"dropdown-div\">\n              <select class=\"dropdown\" [(ngModel)]=\"downloadTempData.subject_id\">\n                <option value=\"-1\">Select Subject</option>\n                <option *ngFor=\"let subject of templateSubjectData;let i=index; \" [value]=\"subject.subject_id\">\n                  {{subject.subject_name}}</option>\n              </select>\n            </div>\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn\" data-dismiss=\"modal\">Cancel</button>\n          <button type=\"button\" class=\"btn\" (click)=\"downloadBulkTemplate()\">Download </button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n\n  <!-- Bulk Topic Update Status -->\n  <div class=\"modal fade\" id=\"uploadReport\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n    <div class=\"modal-dialog \" style=\"width: 700px;margin-left: 30%;    top: 5%;\">\n      <div class=\"modal-content\" style=\"padding: 1em;\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\" style=\"width: 99%;font-weight: 600;\">Bulk Topic Update Status</h4>\n          <button type=\"button\" style=\"margin-top: -53px;\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        </div>\n        <div class=\"modal-body body-container\" style=\"    margin-top: -36px;\">\n\n          <div class=\"row\">\n            <div class=\"\" style=\"height: 60vh;overflow-y: auto;\">\n              <table>\n                <thead>\n                  <tr>\n                    <th>Created Date</th>\n                    <th>Status</th>\n                    <!-- <th>Comments</th> -->\n                    <th>Total Count</th>\n                    <th>Success</th>\n                    <th>Failed</th>\n                    <th>Action</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let record of bulkUploadRecords\">\n                    <td>{{record.created_date}}</td>\n                    <td>{{record.statusValue}}</td>\n                    <td>{{record.total_count}}</td>\n                    <td>\n                      <a *ngIf=\"record.success_path != ''\" id=\"success{{record.list_id}}\">\n                        Success\n                      </a>\n                      <span *ngIf=\"record.success_path == ''\">\n                        -\n                      </span>\n                    </td>\n                    <td>\n                      <a *ngIf=\"record.failure_path != ''\" id=\"failure{{record.list_id}}\">\n                        Fail\n                      </a>\n                      <span *ngIf=\"record.failure_path == ''\">\n                        -\n                      </span>\n                    </td>\n                    <td>\n                      <a *ngIf=\"record.success_path.includes('https://s3-')\" style=\"color: #0084f6;\"\n                        href=\"{{record.success_path}}\">Generate\n                        Report<i class=\"fa fa-download download-icon\" aria-hidden=\"true\"></i></a>\n                      <a *ngIf=\"record.failure_path.includes('https://s3-')\" style=\"color: #0084f6;\"\n                        href=\"{{record.failure_path}}\">Generate\n                        Report<i class=\"fa fa-download download-icon\" aria-hidden=\"true\"></i></a>\n                      <a style=\"color: #0084f6;\"\n                        *ngIf=\"record.success_path != '' && !record.success_path.includes('https://s3-') \"\n                        (click)=\"genrateReport(record)\">Generate Report<i class=\"fa fa-download download-icon\"\n                          aria-hidden=\"true\"></i></a>\n                      <a style=\"color: #0084f6;\"\n                        *ngIf=\"record.failure_path != '' && !record.failure_path.includes('https://s3-') \"\n                        (click)=\"genrateReport(record)\">Generate Report<i class=\"fa fa-download download-icon\"\n                          aria-hidden=\"true\"></i></a>\n                      <span *ngIf=\"record.failure_path == '' && record.success_path == ''\">-</span>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/create-course/topic/topic-list/topic-list.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/create-course/topic/topic-list/topic-list.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-md-12 subject-wrapper\">\n    <div class=\"subject-item\" *ngFor=\"let topic of dataList;\">\n      <div class=\"subject-label row border-radius-0\">\n        <div class=\"col-md-4\">\n          <i class=\"fa fa-chevron-down \" (click)=\"toggleObject(topic)\" *ngIf=\"topic.subTopic.length && topic.isExpand\"></i>\n          <i class=\"fa fa-chevron-up \" (click)=\"toggleObject(topic)\" *ngIf=\"topic.subTopic.length && (!topic.isExpand)\"></i>\n          &nbsp; {{topic.topicId}} &nbsp; {{topic.topicName}}\n        </div>\n        <div class=\"col-md-4\">\n          <span style=\"font-weight: 600;\">Est. Time :</span> &nbsp; {{topic.estimated_time}}\n        </div>\n        <div class=\"col-md-2\">\n          <span style=\"font-weight: 600;\">Priority :</span> &nbsp; {{topic.priority_order}}\n        </div>\n        <div class=\"pull-right\">\n          <i class=\"fa fa-plus-circle btn_action pad_icon\" (click)=\"addSubtopic(topic)\" title=\"Add subTopic \" aria-hidden=\"true\"></i>\n          <i class=\"fa fa-pencil btn_action pad_icon\" (click)=\"eventAction('Edit',topic)\" title=\"Edit\"></i>\n          <i class=\"fa fa-trash-o btn_delete pad_icon\" (click)=\"eventAction('Delete',topic)\" title=\"Delete\"></i>\n        </div>\n\n        <div class=\"row col-md-12 p-0\" *ngIf=\"topic.isExpand\">\n          <div class=\"col-md-12 topic-material-data\">\n            <ng-container *ngTemplateOutlet=\"recursiveAddNodes; context:{$implicit: topic.addSubtopic,topic:topic, level: 1}\"></ng-container>\n            <ng-container *ngTemplateOutlet=\"recursiveNodes; context:{$implicit: topic.subTopic, level: 1}\"></ng-container>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <ng-template #recursiveAddNodes let-addSubtopic  let-topicData=\"topic\" let-level=\"level\">\n    <div class=\"row topic-row\" style=\"padding: 1em 0em 0em .6em;\" *ngFor=\"let topic of addSubtopic\">\n      <div [class]=\"'subject-label row'\" style=\"border: 1px solid #0080f6; padding: 0.3em 0em;\">\n        <div class=\"col-md-4\">\n          <div class=\"dropdown-div\">\n            <input class=\"dropdown\" [(ngModel)]=\"topic.name\" placeholder=\"Enter Subtopic Name\" type=\"text\">\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n        </div>\n        <div class=\"col-md-2\">\n          <input class=\"dropdown\" [(ngModel)]=\"topic.priority_order\" placeholder=\"Enter Priority of Topic\" type=\"text\" onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57)\">\n        </div>\n        <div class=\"pull-right\" style=\" padding-right: 1em;\">\n          <button class=\"btn\" [disabled]=\"disableAddBtn\" (click)=\"addEditSubtopicDetails(topic,'Subtopic')\" style=\"padding: 0px 7px; font-size: 12px; height: 25px;\">\n            <i class=\"fa fa-plus\" style=\"padding: 0px 5px\" aria-hidden=\"true\"></i>Add</button>\n          <button class=\"btn_delete\">\n            <i aria-hidden=\"true\" (click)=\"cancelAdd(topicData)\" class=\"fa fa-times-circle delete_icon\"  title=\"Cancel\"></i>\n          </button>\n        </div>\n      </div>\n    </div>\n  </ng-template>\n\n  <ng-template #recursiveNodes let-subTopics let-level=\"level\">\n    <div class=\"row topic-row\" style=\"padding: 1em 0em 0em .6em;\" *ngFor=\"let topic of subTopics\">\n      <div [class]=\"'subject-label row border-radius-'+level\" *ngIf=\"!topic.isEdit\">\n        <div class=\"col-md-4\">\n          <i class=\"fa fa-chevron-down \" (click)=\"toggleObject(topic)\" *ngIf=\"topic.subTopic.length && topic.isExpand\"></i>\n          <i class=\"fa fa-chevron-up \" (click)=\"toggleObject(topic)\" *ngIf=\"topic.subTopic.length && (!topic.isExpand)\"></i>\n          &nbsp;{{topic.topicId}} &nbsp; {{topic.topicName}}\n        </div>\n        <div class=\"col-md-4\">\n        </div>\n        <div class=\"col-md-2\">\n          <span style=\"font-weight: 600;\">Priority :</span> &nbsp; {{topic.priority_order}}\n        </div>\n        <div class=\"pull-right\">\n          <i class=\"fa fa-plus-circle btn_action pad_icon\" (click)=\"addSubtopic(topic)\" title=\"Add subTopic \" aria-hidden=\"true\"></i>\n          <i class=\"fa fa-pencil btn_action pad_icon\" (click)=\"EditSubtopic(topic)\" title=\"Update Topic\"></i>\n          <i class=\"fa fa-trash-o btn_delete pad_icon\" (click)=\"eventAction('Delete',topic)\" title=\"Delete Topic\"></i>\n        </div>\n        <div class=\"row col-md-12 p-0\" *ngIf=\"topic.isExpand\">\n          <div class=\"col-md-12 topic-material-data\">\n            <ng-container *ngTemplateOutlet=\"recursiveAddNodes; context:{$implicit: topic.addSubtopic, topic:topic,level: level+1}\"></ng-container>\n            <ng-container *ngTemplateOutlet=\"recursiveNodes; context:{$implicit: topic.subTopic, level: level+1 }\"></ng-container>\n          </div>\n        </div>\n      </div>\n      <div class=\"row topic-row\" style=\"padding: 1em 0em 0em .6em;\" *ngIf=\"topic.isEdit\">\n        <div [class]=\"'subject-label row'\" style=\"border: 1px solid #0080f6;    padding: 0.3em 0em;\">\n          <div class=\"col-md-4\">\n            <div class=\"dropdown-div\">\n              <input class=\"dropdown\" [(ngModel)]=\"topic.name\" placeholder=\"Enter Subtopic Name\" type=\"text\">\n            </div>\n          </div>\n          <div class=\"col-md-4\">\n          </div>\n          <div class=\"col-md-2\">\n              <input class=\"dropdown\" [(ngModel)]=\"topic.priority_order\" placeholder=\"Enter Priority of Subtopic\" type=\"text\">\n          </div>\n          <div class=\"pull-right\" style=\" padding-right: 1em;\">\n            <button class=\"btn\" (click)=\"addEditSubtopicDetails(topic,'EditSubtopic')\" style=\"padding: 0px 7px; font-size: 12px; height: 25px;\">\n              Update</button>\n            <button class=\"btn\" (click)=\"clearObject(topic)\" style=\"padding: 0px 7px; font-size: 12px; height: 25px;\">\n              Cancel</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </ng-template>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/create-course/topic/topic-tree/topic-tree.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/create-course/topic/topic-tree/topic-tree.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"topic_details\">\n  <div class=\"topic_filter_div\">\n    <!-- <div class=\"topic_title\">Topic</div> -->\n  </div>\n  <div class=\"filter_div\" style=\"border-bottom: 1px solid lightgrey;\">\n    <div class=\"field-wrapper\" style=\"margin-left:0px\">\n      <label *ngIf=\"!isProfessional\">Standard<span class=\"text-danger\">*</span></label>\n      <label *ngIf=\"isProfessional\">Master Course<span class=\"text-danger\">*</span></label>\n      <div class=\"dropdown-div\">\n        <select class=\"dropdown\" [(ngModel)]=\"filterData.standard_id\"\n          (change)=\"getAllSubjectListFromServer($event.target.value)\">\n          <option value=\"-1\"></option>\n          <option *ngFor=\"let standard of standardData;let i=index; \" [value]=\"standard.standard_id\">\n            {{standard.standard_name}}</option>\n        </select>\n      </div>\n    </div>\n    <div class=\"field-wrapper\">\n      <label *ngIf=\"!isProfessional\">Subject<span class=\"text-danger\">*</span></label>\n      <label *ngIf=\"isProfessional\">Course<span class=\"text-danger\">*</span></label>\n      <div class=\"dropdown-div\">\n        <select class=\"dropdown\" [(ngModel)]=\"filterData.subject_id\">\n          <option value=\"-1\"></option>\n          <option *ngFor=\"let subject of subjectData;let i=index; \" [value]=\"subject.subject_id\">\n            {{subject.subject_name}}</option>\n        </select>\n      </div>\n    </div>\n    <button class=\"btn fullBlue\" style=\"margin-bottom: 5px;\"\n      [disabled]=\"(filterData.standard_id==-1) || (filterData.subject_id==-1)\"\n      (click)=\"getTopicDetails('view')\">View</button>\n    <div class=\"pull-right\">\n      <input type=\"button\" [routerLink]=\"['../bulkUpload']\" value=\"Bulk Upload\" class=\"btn fullBlue\"\n        style=\"margin-top: 20px;\">\n      <button class=\"btn fullBlue \" style=\"margin-top: 18px;\" data-backdrop=\"static\" data-toggle=\"modal\"\n        data-target=\"#addTopic\">\n        <i class=\"fa fa-plus\" aria-hidden=\"true\" (click)=\"clearObject()\"></i>&nbsp; Add Topic</button>\n    </div>\n  </div>\n</div>\n\n<div class=\"topic_details_view\">\n  <app-topic-list [dataList]=\"subjectList\" (editView)=\"eventAction($event)\"></app-topic-list>\n</div>\n\n<!-- Modal -->\n<div class=\"modal topic-add-model\" id=\"addTopic\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\" style=\"top: 8%;\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h2 class=\"modal-title\" id=\"addTopic\" *ngIf=\"option_type=='Add'\">Create New Topic</h2>\n        <h2 class=\"modal-title\" id=\"addTopic\" *ngIf=\"option_type=='Edit'\">Update Topic</h2>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Cancel\" (click)=\"clearObject()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"model_body_div\">\n          <div class=\"field-wrapper\">\n            <label *ngIf=\"!isProfessional\">Standard Name<span class=\"text-danger\">*</span></label>\n            <label *ngIf=\"isProfessional\">Master Course<span class=\"text-danger\">*</span></label>\n            <div class=\"dropdown-div\">\n              <select class=\"dropdown\" [(ngModel)]=\"addTopic.standard_id\"\n                (change)=\"getAllSubjectList($event.target.value)\">\n                <option value=\"-1\"> Select {{isProfessional ? 'Master Course' : 'Standard'}} </option>\n                <option *ngFor=\"let standard of standardData;let i=index; \" [value]=\"standard.standard_id\">\n                  {{standard.standard_name}}</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"field-wrapper\">\n            <label *ngIf=\"!isProfessional\">Subject Name<span class=\"text-danger\">*</span></label>\n            <label *ngIf=\"isProfessional\">Course<span class=\"text-danger\">*</span></label>\n            <div class=\"dropdown-div\">\n              <select class=\"dropdown\" [(ngModel)]=\"addTopic.subject_id\">\n                <option value=\"-1\"> Select {{isProfessional ? 'Course' : 'Subject'}} </option>\n                <option *ngFor=\"let subject of subjectTempData;let i=index; \" [value]=\"subject.subject_id\">\n                  {{subject.subject_name}}</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"field-wrapper\">\n            <label>Topic Name <span class=\"text-danger\">*</span></label>\n            <div class=\"dropdown-div\">\n              <input class=\"dropdown\" [(ngModel)]=\"addTopic.name\" type=\"text\" placeholder=\"  Enter Topic Name\" />\n            </div>\n          </div>\n          <div class=\"field-wrapper\">\n            <label>Duration (only minutes)</label>\n            <div class=\"dropdown-div\">\n              <input class=\"dropdown\" maxlength=\"3\" onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57)\"\n                [(ngModel)]=\"addTopic.estimated_time\" type=\"text\" placeholder=\"  Enter Estimated Time\" />\n            </div>\n          </div>\n          <div class=\"field-wrapper\">\n            <label>Priority</label>\n            <div class=\"dropdown-div\">\n              <input class=\"dropdown\" maxlength=\"3\" onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57)\"\n                [(ngModel)]=\"addTopic.priority_order\" type=\"text\" placeholder=\"Enter Priority of Topic\" />\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-primary fullBlue\" *ngIf=\"option_type=='Add'\"\n          [disabled]=\"(addTopic.name=='') ||(addTopic.standard_id==-1) || (addTopic.subject_id==-1)\"\n          (click)=\"Add_New_Topic_Details()\">Save </button>\n        <button type=\"button\" class=\"btn btn-primary fullBlue\" *ngIf=\"option_type=='Edit'\"\n          [disabled]=\"(addTopic.name=='') ||(addTopic.standard_id==-1) || (addTopic.subject_id==-1)\"\n          (click)=\"Update_Topic_Details('edit',null)\">Update </button>\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"clearObject()\">Cancel</button>\n\n\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Delete Modal -->\n<div class=\"modal topic-add-model\" style=\"position: fixed; top: 16em;\" id=\"DeleteTopic\" tabindex=\"-1\" role=\"dialog\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\" style=\"padding: 1em;\">\n      <div class=\"modal-body\">\n        <div class=\"model_body_div\">\n          Are you sure, you want to delete this topic?\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn\" style=\"color: indianred;\" [disabled]=\"disableDeleteBtn\"\n          (click)=\"deleteTopicObject()\">Delete </button>\n        <button type=\"button\" class=\"btn\" data-dismiss=\"modal\" (click)=\"clearObject()\">Cancel</button>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/create-course/topic/topic.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/create-course/topic/topic.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./src/app/components/course-module/create-course/topic/topic-bulk-upload/topic-bulk-upload.component.scss":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/components/course-module/create-course/topic/topic-bulk-upload/topic-bulk-upload.component.scss ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* ===============================header colors=======================*/\n.table-format-first .table-responsive table th,\n.table-format-first .table-responsive table td {\n  text-align: center;\n  padding: 10px 5px;\n}\n.table-format-first .table-responsive table th {\n  text-transform: capitalize;\n  font-size: 14px;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper {\n  display: inline-block;\n  overflow: initial;\n  margin-left: 0;\n  width: auto;\n  position: relative;\n  background: transparent;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox {\n  z-index: 2;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label {\n  font-size: 16px;\n  margin-left: 7px;\n  font-weight: 600;\n  vertical-align: middle;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:after, .table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:before {\n  z-index: 1;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper:after {\n  content: '';\n  width: 20px;\n  height: 20px;\n  background: #fff;\n  left: 0;\n  top: 0;\n  position: absolute;\n}\n.table-format-first .table-responsive table tbody tr td .fa-trash-o {\n  color: #f44336;\n  font-size: 20px;\n}\n.table-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-top: 10px;\n}\n.table-container .heading-container {\n  background: #e0eaec;\n  display: flex;\n  flex-direction: row;\n  font-size: 14px;\n  font-weight: 600;\n  text-align: left;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n}\n.table-container .heading-container .heading-item {\n  width: 10%;\n  text-align: center;\n}\n.table-container .value-outer-container {\n  display: flex;\n  flex-direction: column;\n  min-height: 53vh;\n  max-height: 54vh;\n  overflow-x: hidden;\n  overflow-y: auto;\n  border: 1px solid #ccc;\n}\n.table-container .value-outer-container .value-container {\n  display: flex;\n  flex-direction: row;\n  text-align: left;\n  padding: 4px;\n  font-size: 12px;\n  border-bottom: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n  border-top: none;\n}\n.table-container .value-outer-container .value-container .value-item {\n  width: 10%;\n  text-align: center;\n}\n.middle-section {\n  padding: 1%;\n}\nth {\n  background-color: #e0eaec !important;\n}\n.bulk-update-report {\n  max-height: 400px !important;\n  overflow-y: scroll !important;\n  overflow-x: hidden !important;\n  max-width: 98% !important;\n}\n#bulk-head {\n  padding-top: 20px;\n}\n.topic_details {\n  padding: .6em;\n}\n.topic_details .topic_filter_div {\n  padding-bottom: 1rem;\n}\n.topic_details .topic_filter_div .topic_title {\n  font-size: 14px;\n  font-weight: 600;\n}\n.topic_details .filter_div {\n  padding: 1rem;\n  border-radius: 4px;\n}\n.topic_details .field-wrapper {\n  margin-left: 20px;\n  padding-top: 0;\n  display: inline-block;\n}\n.topic_details .dropdown-div {\n  width: 160px;\n}\n.topic_details .dropdown-div .dropdown {\n  width: 100%;\n  height: 30px;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n}\n.modal-header {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n.body-container {\n  display: flex;\n  flex-direction: column;\n}\n.body-container .field-wrapper {\n  margin-left: 0px;\n  padding-top: 0;\n  display: inline-block;\n  width: 100%;\n  margin-bottom: 10px;\n}\n.body-container .dropdown-div .dropdown {\n  width: 50%;\n  height: 30px;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n}\n.link, a {\n  text-decoration: none;\n  color: black;\n}\n.bulk-enquiry-form {\n  padding-top: 30px;\n}\n.bulk-enquiry-form table thead tr {\n  line-height: 25px;\n}\n.bulk-enquiry-form table tbody tr {\n  line-height: 20px;\n}\n.bulk-enquiry-form table tbody tr td {\n  text-overflow: ellipsis;\n}\n.bulk-enquiry-form table tbody tr td .download-icon {\n  cursor: pointer;\n}\n.bulk-enquiry-form table tbody tr td .download-icon::after {\n  content: \"\\f0ed\";\n  font-family: FontAwesome;\n}\n.download-icon {\n  cursor: pointer;\n  color: #0084f6;\n  margin-left: 5px;\n}\n.fadeIn {\n  opacity: 1;\n  visibility: visible;\n}\n.bulk-header .row {\n  margin: 0px 15px;\n}\n.file-upload-box {\n  padding: 35px 20px;\n  max-width: 100%;\n}\n.file-upload-box h5 {\n  font-weight: 600;\n  margin-bottom: 30px;\n  font-size: 15px;\n}\n.file-upload-box .select-file-upload ul li label {\n  display: block;\n  font-size: 15px;\n  margin-bottom: 10px;\n}\n.file-upload-box .select-file-upload ul li .choose-file {\n  position: relative;\n  margin-bottom: 15px;\n}\n.file-upload-box .select-file-upload ul li .choose-file input[type=\"file\"] {\n  opacity: 0;\n  z-index: 1;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  cursor: pointer;\n}\n.file-upload-box .select-file-upload ul li .choose-file input[type=\"text\"] {\n  height: 34px;\n  border: 1px solid #ccc;\n  width: 77%;\n  box-sizing: border-box;\n  padding: 5px 10px;\n  font-size: 14px;\n}\n.file-upload-box .select-file-upload ul li .choose-file .btn {\n  width: 21%;\n  float: right;\n  margin: 0;\n}\n.file-upload-box .drag-drop-box {\n  margin-top: 50px;\n}\n.file-upload-box .drag-drop-box .dropable-area {\n  width: 100%;\n  border: 1px solid #ccc;\n  height: 150px;\n  cursor: pointer;\n  text-align: center;\n  line-height: 150px;\n  font-size: 16px;\n  margin-bottom: 10px;\n}\n.file-upload-box .file-uploaded {\n  margin: 25px 0 30px;\n  font-weight: 600;\n  font-size: 16px;\n}\n.file-upload-box .file-uploaded span {\n  display: inline-block;\n  vertical-align: middle;\n  cursor: pointer;\n}\n.file-upload-box .file-uploaded span svg {\n  margin-right: 10px;\n  width: 15px;\n}\n.file-upload-box .file-uploaded span svg .cls-1 {\n  stroke: #888;\n  stroke-width: 2;\n}\n.file-upload-box .file-uploaded span svg:hover .cls-1 {\n  stroke: #0084f6;\n}\n.btn.fullBlue {\n  padding: 6px 10px;\n}\n.progress-bar-wrapper {\n  float: left;\n  width: 80%;\n}\n.upload-bar {\n  position: relative;\n  height: 8px;\n  width: 100%;\n  background: #ccc;\n  border-radius: 0;\n  overflow: hidden;\n  margin: 10px 0 5px;\n}\n.upload-bar > div {\n  position: absolute;\n  height: 100%;\n  width: 0%;\n  left: 0;\n  background: blue;\n  top: 0;\n  border-radius: 0;\n  transition: all 0.5s ease;\n}\n.cancel-upload {\n  float: right;\n  cursor: pointer;\n  margin: 4px 0 0 0px;\n}\n.upload-another {\n  margin: 15px 0px;\n}\n.file-wrapper {\n  padding-left: 0px;\n}\n::ng-deep .ui-fileupload {\n  width: 100%;\n  cursor: pointer;\n}\n::ng-deep .ui-fileupload-buttonbar {\n  background: #0060A3;\n  width: 100%;\n}\n::ng-deep .ui-fileupload-content {\n  min-height: 300px;\n  width: 100%;\n  padding: 5px;\n  border-top: none;\n  border-right: 3px dashed #eaeaeb;\n  border-bottom: 3px dashed #eaeaeb;\n  border-left: 3px dashed #eaeaeb;\n  cursor: pointer;\n}\n::ng-deep .ui-fileupload-content::after {\n  content: \"Drag & Drop Files Here\";\n  color: rgba(0, 0, 0, 0.09);\n  position: absolute;\n  top: 35%;\n  left: 25%;\n  font-size: 36px;\n}\nth {\n  font-size: 14px !important;\n}\ntd {\n  font-size: 12px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY3NzL2NvbW1vbi92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jb3Vyc2UtbW9kdWxlL2NyZWF0ZS1jb3Vyc2UvdG9waWMvdG9waWMtYnVsay11cGxvYWQvdG9waWMtYnVsay11cGxvYWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWUEsdUVBQUE7QUFXQTs7RUFLZ0Isa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQ3hCakM7QURrQkE7RUFTZ0IsMEJBQTBCO0VBQzFCLGVBQWU7QUN2Qi9CO0FEYUE7RUFnQjRCLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsdUJBQXVCO0FDekJuRDtBRElBO0VBdUJnQyxVQUFVO0FDdkIxQztBREFBO0VBMEJnQyxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixzQkFBc0I7QUN0QnREO0FEUEE7RUFnQ29DLFVBQVU7QUNyQjlDO0FEWEE7RUFvQ2dDLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixPQUFPO0VBQ1AsTUFBTTtFQUNOLGtCQUFrQjtBQ3JCbEQ7QURyQkE7RUE4QzRCLGNBbERiO0VBbURhLGVBQWU7QUNyQjNDO0FEOEJBO0VBQ0ksYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsZ0JBQWdCO0FDM0JwQjtBRHVCQTtFQU1NLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLHlCQUF5QjtBQ3pCL0I7QURVQTtFQWlCUSxVQUFVO0VBQ1Ysa0JBQWtCO0FDdkIxQjtBREtBO0VBc0JNLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtBQ3ZCNUI7QURMQTtFQThCUSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZUFBZTtFQUNmLDZCQUE2QjtFQUM3QixvQkFBb0I7RUFDcEIseUJBQXlCO0VBQ3pCLGdCQUFnQjtBQ3JCeEI7QURqQkE7RUF3Q1UsVUFBVTtFQUNWLGtCQUFrQjtBQ25CNUI7QUFuR0E7RUFDRSxXQUFXO0FBc0diO0FBcEdBO0VBQ0ksb0NBQW9DO0FBdUd4QztBQXBHQTtFQUNJLDRCQUE0QjtFQUM1Qiw2QkFBNkI7RUFDN0IsNkJBQTZCO0VBQzdCLHlCQUF5QjtBQXVHN0I7QUFwR0E7RUFDSSxpQkFBaUI7QUF1R3JCO0FBckdBO0VBQ0UsYUFBYTtBQXdHZjtBQXpHQTtFQUlJLG9CQUFvQjtBQXlHeEI7QUE3R0E7RUFNTSxlQUFlO0VBQ2YsZ0JBQWdCO0FBMkd0QjtBQWxIQTtFQVlJLGFBQWE7RUFDYixrQkFBa0I7QUEwR3RCO0FBdkhBO0VBZ0JJLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QscUJBQXFCO0FBMkd6QjtBQTdIQTtFQXFCSSxZQUFZO0FBNEdoQjtBQWpJQTtFQXVCTSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixrQkFBa0I7QUE4R3hCO0FBekdBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7QUE0R2hDO0FBMUdBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQTZHeEI7QUEvR0E7RUFJSSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsbUJBQW1CO0FBK0d2QjtBQXZIQTtFQVlNLFVBQVU7RUFDVixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQStHeEI7QUExR0E7RUFDSSxxQkFBcUI7RUFDckIsWUFBWTtBQTZHaEI7QUF6R0E7RUFDSSxpQkFBaUI7QUE0R3JCO0FBN0dBO0VBS2dCLGlCQUFpQjtBQTRHakM7QUFqSEE7RUFVZ0IsaUJBQWlCO0FBMkdqQztBQXJIQTtFQVlvQix1QkFBdUI7QUE2RzNDO0FBekhBO0VBY3dCLGVBQWU7QUErR3ZDO0FBN0hBO0VBZ0I0QixnQkFBZ0I7RUFDaEIsd0JBQXdCO0FBaUhwRDtBQXhHQTtFQUNJLGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0JBQWdCO0FBMkdwQjtBQXhHQTtFQUNJLFVBQVU7RUFDVixtQkFBbUI7QUEyR3ZCO0FBeEdBO0VBRVEsZ0JBQWdCO0FBMEd4QjtBQXRHQTtFQUNJLGtCQUFrQjtFQUNsQixlQUFlO0FBeUduQjtBQTNHQTtFQUlRLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZUFBZTtBQTJHdkI7QUFqSEE7RUFZb0IsY0FBYztFQUNkLGVBQWU7RUFDZixtQkFBbUI7QUF5R3ZDO0FBdkhBO0VBaUJvQixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBMEd2QztBQTVIQTtFQW9Cd0IsVUFBVTtFQUNWLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixPQUFPO0VBQ1AsTUFBTTtFQUNOLGVBQWU7QUE0R3ZDO0FBdklBO0VBOEJ3QixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGVBQWU7QUE2R3ZDO0FBaEpBO0VBc0N3QixVQUFVO0VBQ1YsWUFBWTtFQUNaLFNBQVM7QUE4R2pDO0FBdEpBO0VBK0NRLGdCQUFnQjtBQTJHeEI7QUExSkE7RUFpRFksV0FBVztFQUNYLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLG1CQUFtQjtBQTZHL0I7QUFyS0E7RUE0RFEsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixlQUFlO0FBNkd2QjtBQTNLQTtFQWdFWSxxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLGVBQWU7QUErRzNCO0FBakxBO0VBb0VnQixrQkFBa0I7RUFDbEIsV0FBVztBQWlIM0I7QUF0TEE7RUF1RW9CLFlBQVk7RUFDWixlQUFlO0FBbUhuQztBQTNMQTtFQTRFd0IsZURoTUg7QUNtVHJCO0FBNUdBO0VBRUksaUJBQWlCO0FBOEdyQjtBQTVHQTtFQUNJLFdBQVc7RUFDWCxVQUFVO0FBK0dkO0FBNUdBO0VBQ0ksa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBK0d0QjtBQXRIQTtFQVNRLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osU0FBUztFQUNULE9BQU87RUFDUCxnQkFBZ0I7RUFDaEIsTUFBTTtFQUNOLGdCQUFnQjtFQUNoQix5QkFBeUI7QUFpSGpDO0FBN0dBO0VBQ0ksWUFBWTtFQUNaLGVBQWU7RUFDZixtQkFBbUI7QUFnSHZCO0FBN0dBO0VBQ0ksZ0JBQWdCO0FBZ0hwQjtBQTdHQTtFQUNJLGlCQUFpQjtBQWdIckI7QUE3R0E7RUFDSSxXQUFXO0VBQ1gsZUFBZTtBQWdIbkI7QUE3R0E7RUFDSSxtQkRsUGM7RUNtUGQsV0FBVztBQWdIZjtBQTdHQTtFQUNJLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixnQ0QvUGtCO0VDZ1FsQixpQ0RoUWtCO0VDaVFsQiwrQkRqUWtCO0VDa1FsQixlQUFlO0FBZ0huQjtBQXhIQTtFQVVRLGlDQUFpQztFQUNqQywwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsZUFBZTtBQWtIdkI7QUEvR0E7RUFDSSwwQkFBMEI7QUFrSDlCO0FBaEhBO0VBQ0ksZUFBZTtBQW1IbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvdXJzZS1tb2R1bGUvY3JlYXRlLWNvdXJzZS90b3BpYy90b3BpYy1idWxrLXVwbG9hZC90b3BpYy1idWxrLXVwbG9hZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRwdWxsLUw6IGxlZnQ7XG4kcHVsbC1SOiByaWdodDtcbiRwdWxsLW5vbmU6IG5vbmU7XG4kZnVsbC13aWR0aDogMTAwJTtcbiRib3JkZXItYm94OiBib3JkZXItYm94O1xuJGJvcmRlci1jb2xvcjogI2RlZWFlZTtcbiRiZy13aGl0ZTogI2ZmZjtcbiRlcnJvci1jb2xvcjogI2ZmMDAwMDtcbiRjb21tb24tYmx1ZTogIzAwODRmNjtcbiRwcmltYXJ5LWNvbG9yOiAjMzMzO1xuJGJvcmRlci1jb21tb246I2VhZWFlYjtcblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PWhlYWRlciBjb2xvcnM9PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiRoZWFkZXItYmc6IzAwNjBBMztcbiRoZWFkZXItYm9yZGVyOiNlYWVhZWI7XG4kbGVmdE1lbnVCZzojZmFmYWZhO1xuJGxlZnRNZW51SG92ZXJCZzojMDA4NGY2O1xuJGxlZnRNZW51VGV4dEhvdmVyQ29sb3I6I2ZmZjtcbiRyZWRCdG46I2Y0NDMzNjtcbiRib3JkZXJjY2M6I2NjYztcbiRsaWdodEJsdWU6I2VmZjdmZjtcbiR0YWJsZUhlYWRpbmdCZ0NvbG9yOiAjMDA0YTdlO1xuLnRhYmxlLWZvcm1hdC1maXJzdCB7XG4gICAgLnRhYmxlLXJlc3BvbnNpdmUge1xuICAgICAgICB0YWJsZSB7XG4gICAgICAgICAgICB0aCxcbiAgICAgICAgICAgIHRkIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aCB7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGJvZHkge1xuICAgICAgICAgICAgICAgIHRyIHtcbiAgICAgICAgICAgICAgICAgICAgdGQge1xuICAgICAgICAgICAgICAgICAgICAgICAgLmZpZWxkLWNoZWNrYm94LXdyYXBwZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaW5pdGlhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZvcm0tY2hlY2tib3gge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZm9ybS1jaGVja2JveCtsYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDdweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJjphZnRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5mYS10cmFzaC1vIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHJlZEJ0bjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi50YWJsZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIC5oZWFkaW5nLWNvbnRhaW5lciB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZTBlYWVjO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgICAgLmhlYWRpbmctaXRlbSB7XG4gICAgICAgIHdpZHRoOiAxMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICB9XG4gICAgLnZhbHVlLW91dGVyLWNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIG1pbi1oZWlnaHQ6IDUzdmg7XG4gICAgICBtYXgtaGVpZ2h0OiA1NHZoO1xuICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICAudmFsdWUtY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgcGFkZGluZzogNHB4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICAgICAgLnZhbHVlLWl0ZW0ge1xuICAgICAgICAgIHdpZHRoOiAxMCU7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IiwiQGltcG9ydCBcIi4vc3JjL2Fzc2V0cy9jc3MvY29tbW9uL3ZhcmlhYmxlcy5zY3NzXCI7XG5cbi5taWRkbGUtc2VjdGlvbntcbiAgcGFkZGluZzogMSU7XG59XG50aHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlYWVjICFpbXBvcnRhbnQ7XG59XG5cbi5idWxrLXVwZGF0ZS1yZXBvcnQge1xuICAgIG1heC1oZWlnaHQ6IDQwMHB4ICFpbXBvcnRhbnQ7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsICFpbXBvcnRhbnQ7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuICFpbXBvcnRhbnQ7XG4gICAgbWF4LXdpZHRoOiA5OCUgIWltcG9ydGFudDtcbn1cblxuI2J1bGstaGVhZCB7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG59XG4udG9waWNfZGV0YWlscyB7XG4gIHBhZGRpbmc6IC42ZW07XG5cbiAgLnRvcGljX2ZpbHRlcl9kaXYge1xuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICAgIC50b3BpY190aXRsZSB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cbiAgfVxuICAuZmlsdGVyX2RpdiB7XG4gICAgLy8gYmFja2dyb3VuZDogI2RkZDtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgfVxuICAuZmllbGQtd3JhcHBlciB7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgcGFkZGluZy10b3A6IDA7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG4gIC5kcm9wZG93bi1kaXYge1xuICAgIHdpZHRoOiAxNjBweDtcbiAgICAuZHJvcGRvd24ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIH1cbiAgfVxufVxuXG4ubW9kYWwtaGVhZGVye1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uYm9keS1jb250YWluZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIC5maWVsZC13cmFwcGVyIHtcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xuICAgIHBhZGRpbmctdG9wOiAwO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG4gIC5kcm9wZG93bi1kaXYge1xuICAgIC5kcm9wZG93biB7XG4gICAgICB3aWR0aDogNTAlO1xuICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICB9XG4gIH1cbn1cblxuLmxpbmssIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cblxuLmJ1bGstZW5xdWlyeS1mb3JtIHtcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICB0YWJsZSB7XG4gICAgICAgIHRoZWFkIHtcbiAgICAgICAgICAgIHRyIHtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0Ym9keSB7XG4gICAgICAgICAgICB0ciB7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgdGQge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICAgICAgICAgICAgLmRvd25sb2FkLWljb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXFxmMGVkXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IEZvbnRBd2Vzb21lO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uZG93bmxvYWQtaWNvbiB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiAjMDA4NGY2O1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi5mYWRlSW4ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuLmJ1bGstaGVhZGVyIHtcbiAgICAucm93IHtcbiAgICAgICAgbWFyZ2luOiAwcHggMTVweDtcbiAgICB9XG59XG5cbi5maWxlLXVwbG9hZC1ib3gge1xuICAgIHBhZGRpbmc6IDM1cHggMjBweDtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgaDUge1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgfVxuICAgIC5zZWxlY3QtZmlsZS11cGxvYWQge1xuICAgICAgICB1bCB7XG4gICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuY2hvb3NlLWZpbGUge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0W3R5cGU9XCJmaWxlXCJdIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzclO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5idG4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIxJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAuZHJhZy1kcm9wLWJveCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgICAgIC5kcm9wYWJsZS1hcmVhIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgICAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTUwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5maWxlLXVwbG9hZGVkIHtcbiAgICAgICAgbWFyZ2luOiAyNXB4IDAgMzBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTVweDtcbiAgICAgICAgICAgICAgICAuY2xzLTEge1xuICAgICAgICAgICAgICAgICAgICBzdHJva2U6ICM4ODg7XG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZS13aWR0aDogMjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIC5jbHMtMSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJva2U6ICRjb21tb24tYmx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbi5idG4uZnVsbEJsdWUge1xuXG4gICAgcGFkZGluZzogNnB4IDEwcHg7XG59XG4ucHJvZ3Jlc3MtYmFyLXdyYXBwZXIge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiA4MCU7XG59XG5cbi51cGxvYWQtYmFyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiA4cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWFyZ2luOiAxMHB4IDAgNXB4O1xuICAgICY+ZGl2IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAwJTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgYmFja2dyb3VuZDogYmx1ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xuICAgIH1cbn1cblxuLmNhbmNlbC11cGxvYWQge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbWFyZ2luOiA0cHggMCAwIDBweDtcbn1cblxuLnVwbG9hZC1hbm90aGVyIHtcbiAgICBtYXJnaW46IDE1cHggMHB4O1xufVxuXG4uZmlsZS13cmFwcGVyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbn1cblxuOjpuZy1kZWVwIC51aS1maWxldXBsb2FkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbjo6bmctZGVlcCAudWktZmlsZXVwbG9hZC1idXR0b25iYXIge1xuICAgIGJhY2tncm91bmQ6ICRoZWFkZXItYmc7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbjo6bmctZGVlcCAudWktZmlsZXVwbG9hZC1jb250ZW50IHtcbiAgICBtaW4taGVpZ2h0OiAzMDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICBib3JkZXItcmlnaHQ6IDNweCBkYXNoZWQgJGJvcmRlci1jb21tb247XG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IGRhc2hlZCAkYm9yZGVyLWNvbW1vbjtcbiAgICBib3JkZXItbGVmdDogM3B4IGRhc2hlZCAkYm9yZGVyLWNvbW1vbjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgJjo6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIkRyYWcgJiBEcm9wIEZpbGVzIEhlcmVcIjtcbiAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wOSk7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAzNSU7XG4gICAgICAgIGxlZnQ6IDI1JTtcbiAgICAgICAgZm9udC1zaXplOiAzNnB4O1xuICAgIH1cbn1cbnRoe1xuICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xufVxudGR7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/course-module/create-course/topic/topic-bulk-upload/topic-bulk-upload.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/components/course-module/create-course/topic/topic-bulk-upload/topic-bulk-upload.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: TopicBulkUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicBulkUploadComponent", function() { return TopicBulkUploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs/Rx.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../services/authenticator.service */ "./src/app/services/authenticator.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../services/common-service */ "./src/app/services/common-service.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_message_show_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../services/message-show.service */ "./src/app/services/message-show.service.ts");
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







let TopicBulkUploadComponent = /** @class */ (() => {
    let TopicBulkUploadComponent = class TopicBulkUploadComponent {
        constructor(router, _http, auth, commonService, msgService) {
            this.router = router;
            this._http = _http;
            this.auth = auth;
            this.commonService = commonService;
            this.msgService = msgService;
            this.progress = 0;
            this.fileLoading = "";
            this.isUploadingXls = false;
            this.isProfessional = false;
            this.subjectData = [];
            this.standardData = [];
            this.filterData = {
                standard_id: -1,
                subject_id: -1
            };
            this.downloadTempData = {
                standard_id: -1,
                subject_id: -1
            };
            this.templateSubjectData = [];
            this.bulkUploadRecords = [];
            this.auth.currentInstituteId.subscribe(id => {
                this.institute_id = id;
            });
            this.auth.institute_type.subscribe(res => {
                if (res == "LANG") {
                    this.isProfessional = true;
                }
                else {
                    this.isProfessional = false;
                }
            });
        }
        ngOnInit() {
            this.getAllStandards();
        }
        // get standard
        getAllStandards() {
            let url = "/api/v1/standards/standard-subject-list/" + this.institute_id + "?is_active=Y" + '&is_subject_required=true';
            this.auth.showLoader();
            this._http.getData(url).subscribe((data) => {
                this.auth.hideLoader();
                this.standardData = data.result;
                // console.log(data);
            }, (error) => {
                this.auth.hideLoader();
                console.log(error);
            });
        }
        getAllSubjectListFromServer(standards_id) {
            this.subjectData = [];
            this.filterData.subject_id = -1;
            for (let i = 0; i < this.standardData.length; i++) {
                if (this.standardData[i].standard_id == this.filterData.standard_id) {
                    this.subjectData = this.standardData[i].subject_list;
                }
            }
            // this.auth.showLoader();
            // let url = "/api/v1/subjects/standards/" + standards_id + '?active=Y';
            // this._http.getData(url).subscribe(
            //   (data: any) => {
            //     this.auth.hideLoader();
            //     this.subjectData = data;
            //     console.log(data);
            //   },
            //   error => {
            //     this.auth.hideLoader();
            //     console.log(error);
            //   }
            // );
        }
        getAllSubjectListForDownloadTemp(standards_id) {
            this.templateSubjectData = [];
            this.downloadTempData.subject_id = -1;
            this.auth.showLoader();
            let url = "/api/v1/subjects/standards/" + standards_id + '?active=Y';
            this._http.getData(url).subscribe((data) => {
                this.auth.hideLoader();
                this.templateSubjectData = data;
                console.log(data);
            }, error => {
                this.auth.hideLoader();
                console.log(error);
            });
        }
        /* base64 data to be converted to xls file */
        downloadBulkTemplate() {
            if ((this.filterData.standard_id != -1) && (this.filterData.subject_id != -1)) {
                this.auth.showLoader();
                let url = "/api/v1/topic_manager/" + this.filterData.subject_id + '/download-template';
                this._http.getData(url).subscribe((res) => {
                    this.auth.hideLoader();
                    var result = res.result;
                    let byteArr = this.commonService.convertBase64ToArray(result.document);
                    let format = result.format;
                    let fileName = result.docTitle;
                    let file = new Blob([byteArr], { type: 'text/csv;charset=utf-8;' });
                    let url = URL.createObjectURL(file);
                    let dwldLink = document.getElementById('template_link');
                    dwldLink.setAttribute("href", url);
                    dwldLink.setAttribute("download", fileName);
                    dwldLink.click();
                    this.downloadTempData.standard_id = -1;
                    this.downloadTempData.subject_id = -1;
                    $("#downloadTemplate").modal("hide");
                }, error => {
                    this.auth.hideLoader();
                    console.log(error);
                });
            }
            else {
                if (!this.isProfessional) {
                    this.msgService.showErrorMessage('error', 'Please Select standard and subject', '');
                }
                else {
                    this.msgService.showErrorMessage('error', 'Please Select Master course and course', '');
                }
            }
        }
        /* fetch the status of the data updated to server */
        fetchBulkUploadStatusData() {
            this.auth.showLoader();
            let obj = { "func_type": "TopicBulkUpload" };
            let url = "/api/v1/bulkUpload/" + this.institute_id;
            this._http.postData(url, obj).subscribe((res) => {
                this.auth.hideLoader();
                this.bulkUploadRecords = res;
                if (this.bulkUploadRecords.length) {
                    $("#uploadReport").modal("show");
                }
                else {
                }
            }, err => {
                this.auth.hideLoader();
            });
        }
        /* download the xls status report for a particular file uploaded */
        downloadSuccess(el) {
            this.auth.showLoader();
            let url = "/api/v1/bulkUpload/" + this.institute_id + "/success/download/" + el.list_id;
            this._http.getData(url).subscribe(res => {
                var result = res;
                let byteArr = this.commonService.convertBase64ToArray(result.document);
                let format = result.format;
                let fileName = result.docTitle;
                let fileId = el.list_id.toString();
                let file = new Blob([byteArr], { type: 'text/csv;charset=utf-8;' });
                let url = URL.createObjectURL(file);
                let dwldLink = document.getElementById('success' + fileId);
                if (dwldLink.getAttribute('href') == null || dwldLink.getAttribute('href') == undefined || dwldLink.getAttribute('href') == '') {
                    dwldLink.setAttribute("href", url);
                    dwldLink.setAttribute("download", fileName);
                    dwldLink.click();
                    dwldLink.setAttribute("href", null);
                    dwldLink.setAttribute("download", '');
                }
                this.auth.hideLoader();
            }, err => {
                this.auth.hideLoader();
            });
        }
        downloadFailure(el) {
            this.auth.showLoader();
            let url = "/api/v1/bulkUpload/" + this.institute_id + "/download/" + el.list_id;
            this._http.getData(url).subscribe(res => {
                this.auth.hideLoader();
                var result = res;
                let byteArr = this.commonService.convertBase64ToArray(result.document);
                let format = result.format;
                let fileName = result.docTitle;
                let fileId = el.list_id.toString();
                let file = new Blob([byteArr], { type: 'text/csv;charset=utf-8;' });
                let url = URL.createObjectURL(file);
                let dwldLink = document.getElementById('failure' + fileId);
                if (dwldLink.getAttribute('href') == null || dwldLink.getAttribute('href') == undefined || dwldLink.getAttribute('href') == '') {
                    dwldLink.setAttribute("href", url);
                    dwldLink.setAttribute("download", fileName);
                    dwldLink.click();
                    dwldLink.setAttribute("href", null);
                    dwldLink.setAttribute("download", '');
                }
            }, err => {
                this.auth.hideLoader();
            });
        }
        /* function to upload the xls file as formdata */
        uploadHandler(event, fileUpload) {
            if ((this.filterData.standard_id != -1) && (this.filterData.subject_id != -1)) {
                let formData = new FormData();
                let arr = Array.from(event.files);
                arr.map((ele, index) => {
                    formData.append("file_" + index, ele);
                });
                let base = this.auth.getBaseUrl();
                let urlPostXlsDocument = base + "/api/v1/topic_manager/bulkUpload";
                let newxhr = new XMLHttpRequest();
                let auths = {
                    userid: sessionStorage.getItem('userid'),
                    userType: sessionStorage.getItem('userType'),
                    password: sessionStorage.getItem('password'),
                    institution_id: sessionStorage.getItem('institute_id'),
                };
                let Authorization = btoa(auths.userid + "|" + auths.userType + ":" + auths.password + ":" + auths.institution_id);
                newxhr.open("POST", urlPostXlsDocument, true);
                newxhr.setRequestHeader("Authorization", Authorization);
                newxhr.setRequestHeader("subject_id", this.filterData.subject_id.toString());
                newxhr.setRequestHeader("enctype", "multipart/form-data;");
                newxhr.setRequestHeader("Accept", "application/json, text/javascript");
                newxhr.setRequestHeader("Access-Control-Allow-Origin", "*");
                this.isUploadingXls = true;
                newxhr.upload.addEventListener('progress', (e) => {
                    if (e.lengthComputable) {
                        this.progress = Math.round((e.loaded * 100) / e.total);
                        document.getElementById('progress-width').style.width = this.progress + '%';
                        this.fileLoading = "Topic Data Upload";
                    }
                }, false);
                newxhr.onreadystatechange = () => {
                    if (newxhr.readyState == 4) {
                        this.progress = 0;
                        if (newxhr.status >= 200 && newxhr.status < 300) {
                            this.isUploadingXls = false;
                            this.msgService.showErrorMessage(this.msgService.toastTypes.success, 'File uploaded Successfully', newxhr.response.fileName);
                            this.filterData.standard_id = -1;
                            this.filterData.subject_id = -1;
                            fileUpload.clear(); // this will clear your selected file
                        }
                        else {
                            this.isUploadingXls = false;
                            this.msgService.showErrorMessage(this.msgService.toastTypes.error, 'Unable to upload file', newxhr.response.fileName);
                        }
                    }
                };
                newxhr.send(formData);
            }
            else {
                if (!this.isProfessional) {
                    this.msgService.showErrorMessage('error', 'Please Select standard and subject', '');
                }
                else {
                    this.msgService.showErrorMessage('error', 'Please Select Master course and course', '');
                }
            }
        }
        /* function to upload the xls file as formdata */
        uploader(inp) {
            let obj = {
                file: inp,
                file_extn: "xls",
                comments: "",
                institute_id: sessionStorage.getItem('institute_id')
            };
            let base = this.auth.getBaseUrl();
            let urlPostXlsDocument = base + "/api/v1/topic_manager/bulkUpload";
            let xhr = new XMLHttpRequest();
            xhr.open("POST", urlPostXlsDocument, true);
            xhr.setRequestHeader("Content-Type", "application/json");
            let auths = {
                userid: sessionStorage.getItem('userid'),
                userType: sessionStorage.getItem('userType'),
                password: sessionStorage.getItem('password'),
                institution_id: sessionStorage.getItem('institute_id'),
                subject_id: this.filterData.subject_id
            };
            let Authorization = btoa(auths.userid + "|" + auths.userType + ":" + auths.password + ":" + auths.institution_id);
            xhr.setRequestHeader("Authorization", Authorization);
            xhr.setRequestHeader("enctype", "multipart/form-data;");
            xhr.setRequestHeader("Accept", "application/json, text/javascript");
            this.isUploadingXls = true;
            xhr.upload.addEventListener('progress', (e) => {
                if (e.lengthComputable) {
                    this.progress = Math.round((e.loaded * 100) / e.total);
                    document.getElementById('progress-width').style.width = this.progress + '%';
                    this.fileLoading = "Student Data Upload";
                }
            }, false);
            //Call function when onload.
            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4) {
                    this.progress = 0;
                    if (xhr.status >= 200 && xhr.status < 300) {
                        this.isUploadingXls = false;
                        this.msgService.showErrorMessage(this.msgService.toastTypes.success, 'File uploaded Successfully', xhr.response.fileName);
                    }
                    else {
                        this.isUploadingXls = false;
                        this.msgService.showErrorMessage(this.msgService.toastTypes.error, 'Unable to upload file', xhr.response.fileName);
                    }
                }
            };
            xhr.send(JSON.stringify(obj));
        }
        genrateReport(obj) {
            if (obj.failure_path != '') {
                this.downloadFailure(obj);
            }
            else if (obj.success_path != '') {
                this.downloadSuccess(obj);
            }
        }
    };
    TopicBulkUploadComponent.ctorParameters = () => [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"] },
        { type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"] },
        { type: _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonServiceFactory"] },
        { type: _services_message_show_service__WEBPACK_IMPORTED_MODULE_6__["MessageShowService"] }
    ];
    TopicBulkUploadComponent.propDecorators = {
        fileUpload: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['fileUpload', { static: false },] }]
    };
    TopicBulkUploadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-topic-bulk-upload',
            template: __importDefault(__webpack_require__(/*! raw-loader!./topic-bulk-upload.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/create-course/topic/topic-bulk-upload/topic-bulk-upload.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./topic-bulk-upload.component.scss */ "./src/app/components/course-module/create-course/topic/topic-bulk-upload/topic-bulk-upload.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"],
            _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonServiceFactory"],
            _services_message_show_service__WEBPACK_IMPORTED_MODULE_6__["MessageShowService"]])
    ], TopicBulkUploadComponent);
    return TopicBulkUploadComponent;
})();



/***/ }),

/***/ "./src/app/components/course-module/create-course/topic/topic-list/topic-list.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/course-module/create-course/topic/topic-list/topic-list.component.scss ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".subject-wrapper .subject-item {\n  padding: 0.6em;\n}\n\n.subject-wrapper .subject-item .subject-label {\n  margin: 0px;\n  cursor: pointer;\n  padding: 0.6em 1em;\n  font-weight: bold;\n  border-radius: 6px;\n  font-size: 0.95em;\n  border: 1pt solid #eee;\n  background-color: #fff;\n  border-left: 3pt solid #0084f6;\n  box-shadow: 0 1pt 2pt 0 rgba(0, 0, 0, 0.16);\n}\n\n.subject-wrapper .subject-item .border-radius-0 {\n  border-left: 3pt solid #0084f6;\n}\n\n.subject-wrapper .subject-item .border-radius-1 {\n  border-left: 3pt solid #ff9100;\n}\n\n.subject-wrapper .subject-item .border-radius-2 {\n  border-left: 3pt solid  #e75480;\n}\n\n.subject-wrapper .subject-item .border-radius-3 {\n  border-left: 3pt solid #fa3145;\n}\n\n.subject-title {\n  cursor: pointer;\n  font-weight: 900;\n  font-size: 1.4em;\n  margin-bottom: 0.4em;\n}\n\n.pad_icon {\n  padding: 0 10px;\n}\n\n.btn_action {\n  color: #1283f4;\n  font-size: 1.2em;\n}\n\n.btn_delete {\n  color: #fa3145;\n  font-size: 1.2em;\n}\n\n.col-md-12 {\n  padding-right: 0px;\n  padding-left: 0px;\n}\n\n.row {\n  margin-right: 0px;\n  margin-left: 0px;\n}\n\n.dropdown {\n  width: 100%;\n  height: 30px;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n}\n\n.btn_delete {\n  padding: 1px 7px;\n  background: white;\n}\n\n.btn_delete .delete_icon {\n  color: red;\n  font-size: 1.1rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb3Vyc2UtbW9kdWxlL2NyZWF0ZS1jb3Vyc2UvdG9waWMvdG9waWMtbGlzdC90b3BpYy1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsY0FBYztBQUF0Qjs7QUFGQTtFQUlZLFdBQVc7RUFDWCxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsOEJBQThCO0VBQzlCLDJDQUEyQztBQUV2RDs7QUFmQTtFQWlCWSw4QkFBOEI7QUFFMUM7O0FBbkJBO0VBcUJZLDhCQUE4QjtBQUUxQzs7QUF2QkE7RUF5QlksK0JBQStCO0FBRTNDOztBQTNCQTtFQTRCWSw4QkFBOEI7QUFHMUM7O0FBRUE7RUFDSSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixvQkFBb0I7QUFDeEI7O0FBRUE7RUFDSSxlQUNKO0FBQUE7O0FBRUE7RUFDSSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0VBQ0ksY0FBYztFQUNkLGdCQUFnQjtBQUNwQjs7QUFFQTtFQUNJLGtCQUFrQjtFQUNqQixpQkFBaUI7QUFDdEI7O0FBQ0E7RUFDSSxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBRXBCOztBQUNFO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBRXRCOztBQUNFO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUVyQjs7QUFKRTtFQUlNLFVBQVU7RUFDVixpQkFBaUI7QUFJekIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvdXJzZS1tb2R1bGUvY3JlYXRlLWNvdXJzZS90b3BpYy90b3BpYy1saXN0L3RvcGljLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3ViamVjdC13cmFwcGVye1xuICAgIC5zdWJqZWN0LWl0ZW17XG4gICAgICAgIHBhZGRpbmc6IDAuNmVtO1xuICAgICAgICAuc3ViamVjdC1sYWJlbHtcbiAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgcGFkZGluZzogMC42ZW0gMWVtO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuOTVlbTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB0IHNvbGlkICNlZWU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDNwdCBzb2xpZCAjMDA4NGY2O1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAxcHQgMnB0IDAgcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLmJvcmRlci1yYWRpdXMtMHtcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAzcHQgc29saWQgIzAwODRmNjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLmJvcmRlci1yYWRpdXMtMXtcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAzcHQgc29saWQgI2ZmOTEwMDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLmJvcmRlci1yYWRpdXMtMntcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAzcHQgc29saWQgICNlNzU0ODB9XG4gICAgICAgIFxuICAgICAgICAuYm9yZGVyLXJhZGl1cy0ze1xuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDNwdCBzb2xpZCAjZmEzMTQ1O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uc3ViamVjdC10aXRsZXtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBmb250LXNpemU6IDEuNGVtO1xuICAgIG1hcmdpbi1ib3R0b206IDAuNGVtO1xufVxuXG4ucGFkX2ljb257XG4gICAgcGFkZGluZzogMCAxMHB4XG59XG5cbi5idG5fYWN0aW9ue1xuICAgIGNvbG9yOiAjMTI4M2Y0O1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG59XG5cbi5idG5fZGVsZXRle1xuICAgIGNvbG9yOiAjZmEzMTQ1O1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG59XG5cbi5jb2wtbWQtMTJ7XG4gICAgcGFkZGluZy1yaWdodDogMHB4OyBcbiAgICAgcGFkZGluZy1sZWZ0OiAwcHg7IFxufVxuLnJvd3tcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xuICB9XG5cbiAgLmRyb3Bkb3due1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMzBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgfVxuXG4gIC5idG5fZGVsZXRle1xuICAgIHBhZGRpbmc6IDFweCA3cHg7IFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIC5kZWxldGVfaWNvbntcbiAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICB9XG4gIH1cbiAgXG5cbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/course-module/create-course/topic/topic-list/topic-list.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/course-module/create-course/topic/topic-list/topic-list.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: TopicListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicListComponent", function() { return TopicListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _topic_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../topic.model */ "./src/app/components/course-module/create-course/topic/topic.model.ts");
/* harmony import */ var _services_message_show_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../services/message-show.service */ "./src/app/services/message-show.service.ts");
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



let TopicListComponent = /** @class */ (() => {
    let TopicListComponent = class TopicListComponent {
        constructor(_toastPopup) {
            this._toastPopup = _toastPopup;
            this.eventHandler = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.editView = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.disableAddBtn = false;
        }
        ngOnInit() {
        }
        toggleObject(topic) {
            topic.isExpand = (!topic.isExpand);
            if (topic.isExpand) {
                this.expandAllTopic(topic);
            }
        }
        expandAllTopic(topic) {
            if (topic.subTopic.length == 0) {
                return;
            }
            else {
                topic.subTopic.forEach(object => {
                    object.isExpand = true;
                    if (object.subTopic.length > 0) {
                        this.expandAllTopic(object);
                    }
                });
            }
        }
        addSubtopic(topic) {
            topic.addSubtopic = topic.addSubtopic == undefined ? [] : topic.addSubtopic;
            if (!topic.addSubtopic.length) {
                topic.addSubtopic = [];
                topic.isExpand = true;
                let object_topic = new _topic_model__WEBPACK_IMPORTED_MODULE_1__["Create_Topic"]();
                object_topic.parent_topic_id = topic.topicId;
                object_topic.estimated_time = topic.estimated_time;
                topic.addSubtopic.push(object_topic);
            }
            else {
                topic.addSubtopic = [];
            }
        }
        cancelAdd(parentTopic) {
            // console.log(parentTopic);
            parentTopic.addSubtopic = [];
        }
        addEditSubtopicDetails(topic, type) {
            this.disableAddBtn = true;
            if (topic.name == "") {
                this._toastPopup.showErrorMessage('error', '', "please add subtopic name");
                this.disableAddBtn = false;
                return;
            }
            this.eventAction(type, topic);
        }
        eventAction(type, topic) {
            this.editView.emit({ 'data': topic, option: type });
            this.disableAddBtn = false;
            // console.log(topic);
        }
        clearObject(topic) {
            // console.log(topic);
            topic.name = topic.topicName;
            topic.isEdit = (!topic.isEdit);
        }
        EditSubtopic(topic) {
            topic.isEdit = !(topic.isEdit);
            topic.name = topic.topicName;
        }
    };
    TopicListComponent.ctorParameters = () => [
        { type: _services_message_show_service__WEBPACK_IMPORTED_MODULE_2__["MessageShowService"] }
    ];
    TopicListComponent.propDecorators = {
        dataList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        eventHandler: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        editView: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    TopicListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-topic-list',
            template: __importDefault(__webpack_require__(/*! raw-loader!./topic-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/create-course/topic/topic-list/topic-list.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./topic-list.component.scss */ "./src/app/components/course-module/create-course/topic/topic-list/topic-list.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_services_message_show_service__WEBPACK_IMPORTED_MODULE_2__["MessageShowService"]])
    ], TopicListComponent);
    return TopicListComponent;
})();



/***/ }),

/***/ "./src/app/components/course-module/create-course/topic/topic-routing.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/course-module/create-course/topic/topic-routing.module.ts ***!
  \**************************************************************************************/
/*! exports provided: TopicRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicRoutingModule", function() { return TopicRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _topic_tree_topic_tree_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./topic-tree/topic-tree.component */ "./src/app/components/course-module/create-course/topic/topic-tree/topic-tree.component.ts");
/* harmony import */ var _topic_bulk_upload_topic_bulk_upload_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./topic-bulk-upload/topic-bulk-upload.component */ "./src/app/components/course-module/create-course/topic/topic-bulk-upload/topic-bulk-upload.component.ts");
/* harmony import */ var _topic_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./topic.component */ "./src/app/components/course-module/create-course/topic/topic.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





const routes = [{
        path: '',
        component: _topic_component__WEBPACK_IMPORTED_MODULE_4__["TopicComponent"],
        pathMatch: 'prefix',
        children: [
            {
                path: '',
                redirectTo: 'home'
            },
            {
                path: 'home',
                component: _topic_tree_topic_tree_component__WEBPACK_IMPORTED_MODULE_2__["TopicTreeComponent"]
            },
            {
                path: 'bulkUpload',
                component: _topic_bulk_upload_topic_bulk_upload_component__WEBPACK_IMPORTED_MODULE_3__["TopicBulkUploadComponent"]
            }
        ]
    }];
let TopicRoutingModule = /** @class */ (() => {
    let TopicRoutingModule = class TopicRoutingModule {
    };
    TopicRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], TopicRoutingModule);
    return TopicRoutingModule;
})();



/***/ }),

/***/ "./src/app/components/course-module/create-course/topic/topic-tree/topic-tree.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/course-module/create-course/topic/topic-tree/topic-tree.component.scss ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn {\n  font-size: 12px;\n  height: 30px;\n  padding: 1px 12px;\n}\n\n.topic_details {\n  padding: .6em;\n}\n\n.topic_details .topic_filter_div {\n  padding-bottom: 1rem;\n}\n\n.topic_details .topic_filter_div .topic_title {\n  font-size: 14px;\n  font-weight: 600;\n}\n\n.topic_details .filter_div {\n  padding: 1rem;\n  border-radius: 4px;\n}\n\n.topic_details .filter_div .field-wrapper {\n  margin-left: 20px;\n  padding-top: 0;\n  display: inline-block;\n}\n\n.topic_details .filter_div .dropdown-div {\n  width: 160px;\n}\n\n.topic_details .filter_div .dropdown-div .dropdown {\n  width: 100%;\n  height: 30px;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n}\n\n.topic_details_view {\n  padding: .6em;\n}\n\n.topic-add-model .modal-dialog {\n  width: 350px;\n}\n\n.topic-add-model .modal-dialog .modal-header {\n  padding: 15px 15px 1px;\n  font-size: 14px;\n}\n\n.topic-add-model .modal-dialog .modal-header .close {\n  margin-bottom: -20px;\n  position: relative;\n  top: -1.0em;\n  font-size: 30px;\n}\n\n.topic-add-model .modal-dialog .modal-body {\n  padding-top: 0px;\n}\n\n.topic-add-model .modal-dialog .modal-body .model_body_div .field-wrapper label {\n  color: #3e3d4a;\n  font-weight: 600;\n}\n\n.topic-add-model .modal-dialog .modal-body .model_body_div .field-wrapper .dropdown-div .dropdown {\n  width: 100%;\n  height: 30px;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n}\n\n::-moz-placeholder {\n  color: #ddd;\n  opacity: 1;\n  /* Firefox */\n}\n\n:-ms-input-placeholder {\n  color: #ddd;\n  opacity: 1;\n  /* Firefox */\n}\n\n::placeholder {\n  color: #ddd;\n  opacity: 1;\n  /* Firefox */\n}\n\noption {\n  width: 20% !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb3Vyc2UtbW9kdWxlL2NyZWF0ZS1jb3Vyc2UvdG9waWMvdG9waWMtdHJlZS90b3BpYy10cmVlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRkE7RUFJSSxvQkFBb0I7QUFFeEI7O0FBTkE7RUFPTSxlQUFlO0VBQ2YsZ0JBQWdCO0FBR3RCOztBQVhBO0VBY0ksYUFBYTtFQUNiLGtCQUFrQjtBQUN0Qjs7QUFoQkE7RUFpQk0saUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxxQkFBcUI7QUFHM0I7O0FBdEJBO0VBdUJNLFlBQVk7QUFHbEI7O0FBMUJBO0VBMEJRLFdBQVc7RUFDWCxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUkxQjs7QUFFQTtFQUNFLGFBQVk7QUFDZDs7QUFFQTtFQUVJLFlBQVk7QUFBaEI7O0FBRkE7RUFLTSxzQkFBc0I7RUFDdEIsZUFBZTtBQUNyQjs7QUFQQTtFQVFRLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGVBQWU7QUFHdkI7O0FBZEE7RUFnQk0sZ0JBQWdCO0FBRXRCOztBQWxCQTtFQW9CWSxjQUFjO0VBQ2QsZ0JBQWdCO0FBRTVCOztBQXZCQTtFQXlCYyxXQUFXO0VBQ1gsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFFaEM7O0FBT0E7RUFDRSxXQUFZO0VBQ1osVUFBVTtFQUFFLFlBQUE7QUFIZDs7QUFDQTtFQUNFLFdBQVk7RUFDWixVQUFVO0VBQUUsWUFBQTtBQUhkOztBQUNBO0VBQ0UsV0FBWTtFQUNaLFVBQVU7RUFBRSxZQUFBO0FBSGQ7O0FBS0E7RUFDRSxxQkFBcUI7QUFGdkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvdXJzZS1tb2R1bGUvY3JlYXRlLWNvdXJzZS90b3BpYy90b3BpYy10cmVlL3RvcGljLXRyZWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIHBhZGRpbmc6IDFweCAxMnB4O1xufVxuXG4udG9waWNfZGV0YWlscyB7XG4gIHBhZGRpbmc6IC42ZW07XG5cbiAgLnRvcGljX2ZpbHRlcl9kaXYge1xuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuXG4gICAgLnRvcGljX3RpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgfVxuICB9XG5cbiAgLmZpbHRlcl9kaXYge1xuICAgIC8vIGJhY2tncm91bmQ6ICNkZGQ7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgLmZpZWxkLXdyYXBwZXIge1xuICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICBwYWRkaW5nLXRvcDogMDtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB9XG5cbiAgICAuZHJvcGRvd24tZGl2IHtcbiAgICAgIHdpZHRoOiAxNjBweDtcblxuICAgICAgLmRyb3Bkb3duIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4udG9waWNfZGV0YWlsc192aWV3e1xuICBwYWRkaW5nOi42ZW07XG59XG5cbi50b3BpYy1hZGQtbW9kZWwge1xuICAubW9kYWwtZGlhbG9nIHtcbiAgICB3aWR0aDogMzUwcHg7XG5cbiAgICAubW9kYWwtaGVhZGVyIHtcbiAgICAgIHBhZGRpbmc6IDE1cHggMTVweCAxcHg7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAuY2xvc2V7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IC0yMHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRvcDogLTEuMGVtO1xuICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm1vZGFsLWJvZHkge1xuICAgICAgcGFkZGluZy10b3A6IDBweDtcbiAgICAgIC5tb2RlbF9ib2R5X2RpdiB7XG4gICAgICAgIC5maWVsZC13cmFwcGVye1xuICAgICAgICAgIGxhYmVse1xuICAgICAgICAgICAgY29sb3I6ICMzZTNkNGE7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZHJvcGRvd24tZGl2IHtcbiAgICAgICAgICAgIC5kcm9wZG93biB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuOjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAgI2RkZDtcbiAgb3BhY2l0eTogMTsgLyogRmlyZWZveCAqL1xufVxub3B0aW9ue1xuICB3aWR0aDogMjAlICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/course-module/create-course/topic/topic-tree/topic-tree.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/course-module/create-course/topic/topic-tree/topic-tree.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: TopicTreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicTreeComponent", function() { return TopicTreeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../services/authenticator.service */ "./src/app/services/authenticator.service.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_message_show_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../services/message-show.service */ "./src/app/services/message-show.service.ts");
/* harmony import */ var _topic_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../topic.model */ "./src/app/components/course-module/create-course/topic/topic.model.ts");
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





/**
 * created by laxmi
 */
let TopicTreeComponent = /** @class */ (() => {
    let TopicTreeComponent = class TopicTreeComponent {
        constructor(_http, auth, _toastPopup) {
            this._http = _http;
            this.auth = auth;
            this._toastPopup = _toastPopup;
            this.isProfessional = false;
            this.option_type = 'Add';
            this.subjectData = [];
            this.subjectTempData = [];
            this.standardData = [];
            this.subjectList = [];
            this.teacher_id = -1;
            this.addTopic = new _topic_model__WEBPACK_IMPORTED_MODULE_4__["Create_Topic"]();
            this.disableDeleteBtn = false;
            this.filterData = {
                standard_id: -1,
                subject_id: -1
            };
            this.auth.currentInstituteId.subscribe(id => {
                this.institute_id = id;
            });
            this.auth.institute_type.subscribe(res => {
                if (res == "LANG") {
                    this.isProfessional = true;
                }
                else {
                    this.isProfessional = false;
                }
            });
            console.log('model typ:', this.isProfessional);
        }
        ngOnInit() {
            let userType = sessionStorage.getItem('userType');
            if (userType == 3) {
                this.teacher_id = sessionStorage.getItem('login_teacher_id');
            }
            this.getAllStandards();
        }
        getAllSubjectList(standards_id) {
            this.subjectTempData = [];
            // if(this.option_type!='Edit') {
            //   this.filterData.subject_id = -1;
            // }
            for (let i = 0; i < this.standardData.length; i++) {
                if (this.standardData[i].standard_id == this.addTopic.standard_id) {
                    this.subjectTempData = this.standardData[i].subject_list;
                }
            }
        }
        // get subject
        getAllSubjectListFromServer(standards_id) {
            this.subjectData = [];
            this.subjectList = [];
            this.filterData.subject_id = -1;
            for (let i = 0; i < this.standardData.length; i++) {
                if (this.standardData[i].standard_id == this.filterData.standard_id) {
                    this.subjectData = this.standardData[i].subject_list;
                }
            }
        }
        //
        Update_Topic_Details(type, editObejct) {
            let object = type == 'edit' ? this.addTopic : editObejct;
            this.auth.showLoader();
            let url = "/api/v1/topic_manager/update/" + this.institute_id;
            this._http.putData(url, object).subscribe((res) => {
                this.auth.hideLoader();
                if (res.statusCode == 200) {
                    console.log(res);
                    this.addTopic = new _topic_model__WEBPACK_IMPORTED_MODULE_4__["Create_Topic"]();
                    this.option_type = 'Add';
                    $('#addTopic').modal('hide');
                    this._toastPopup.showErrorMessage('success', '', "Topic Updated Successfully");
                    this.getTopicDetails(null);
                }
                else {
                    this._toastPopup.showErrorMessage('error', '', "something went wrong please try again");
                }
            }, (error) => {
                this.auth.hideLoader();
                console.log(error);
                this._toastPopup.showErrorMessage('error', '', error.error.message);
            });
        }
        // get standard
        getAllStandards() {
            // let url = "/api/v1/standards/all/" + this.institute_id + "?active=Y" + '&teacher_id=' + this.teacher_id;
            let url = "/api/v1/standards/standard-subject-list/" + this.institute_id + "?is_active=Y" + '&is_subject_required=true';
            this.auth.showLoader();
            this._http.getData(url).subscribe((data) => {
                this.auth.hideLoader();
                this.standardData = data.result;
                console.log(data.result);
            }, (error) => {
                this.auth.hideLoader();
                console.log(error);
            });
        }
        clearObject() {
            this.addTopic = new _topic_model__WEBPACK_IMPORTED_MODULE_4__["Create_Topic"]();
            this.option_type = 'Add';
        }
        clearFilter() {
            this.filterData = {
                standard_id: -1,
                subject_id: -1
            };
        }
        /**
         * eventaction edit and delete option
         * @param $event
         */
        eventAction($event) {
            console.log($event);
            switch ($event.option) {
                case 'Edit': {
                    this.editTopicDetails($event.data);
                    break;
                }
                case 'EditSubtopic': {
                    let object = {
                        "name": $event.data.name,
                        "parent_topic_id": $event.data.parentTopicId,
                        "institute_topic_id": $event.data.topicId,
                        "description": $event.data.description,
                        "priority_order": $event.data.priority_order
                    };
                    this.Update_Topic_Details('EditSubtopic', object);
                    break;
                }
                case 'Delete': {
                    this.temp_object = $event.data;
                    $('#DeleteTopic').modal('show');
                    break;
                }
                case 'Subtopic': {
                    this.auth.showLoader();
                    let object = $event.data;
                    object.subject_id = this.filterData.subject_id;
                    object.standard_id = this.filterData.standard_id;
                    // this.auth.showLoader();
                    let url = "/api/v1/topic_manager/add/" + this.institute_id;
                    this._http.postData(url, object).subscribe((data) => {
                        this.auth.hideLoader();
                        this._toastPopup.showErrorMessage('success', '', "Subtopic added successfully");
                        if ((this.filterData.standard_id != -1) && (this.filterData.subject_id != -1)) {
                            this.getTopicDetails(null);
                        }
                    }, (error) => {
                        this.auth.hideLoader();
                        this._toastPopup.showErrorMessage('error', '', error.error.message);
                        console.log(error);
                    });
                }
            }
        }
        //delete object
        deleteTopicObject() {
            this.disableDeleteBtn = true;
            let url = "/api/v1/topic_manager/" + this.institute_id + "/" + this.temp_object.topicId;
            this._http.deleteData(url, null).subscribe((res) => {
                this.auth.hideLoader();
                $('#DeleteTopic').modal('hide');
                this._toastPopup.showErrorMessage('success', '', "Topic Deleted Successfully");
                this.getTopicDetails(null);
                this.disableDeleteBtn = false;
            }, (err) => {
                this.auth.hideLoader();
                console.log(err);
                this._toastPopup.showErrorMessage('error', '', err.error.message);
                this.disableDeleteBtn = false;
            });
        }
        //edit object
        editTopicDetails(data) {
            this.auth.showLoader();
            let url = "/api/v1/topic_manager/getTopic/" + this.institute_id + "/" + data.topicId;
            this._http.getData(url).subscribe((data) => {
                this.auth.hideLoader();
                console.log(data);
                if (data) {
                    this.addTopic = new _topic_model__WEBPACK_IMPORTED_MODULE_4__["Create_Topic"]();
                    this.addTopic = data;
                    console.log(this.addTopic);
                    this.option_type = 'Edit';
                    this.getAllSubjectList(data.standard_id);
                    $('#addTopic').modal('show');
                }
                else {
                    this._toastPopup.showErrorMessage('error', '', "something went wrong please try again");
                }
            }, (err) => {
                this.auth.hideLoader();
                console.log(err);
                this._toastPopup.showErrorMessage('error', '', err.error.message);
            });
        }
        // add topic
        Add_New_Topic_Details() {
            this.auth.showLoader();
            let url = "/api/v1/topic_manager/add/" + this.institute_id;
            this._http.postData(url, this.addTopic).subscribe((data) => {
                this.auth.hideLoader();
                this.addTopic = new _topic_model__WEBPACK_IMPORTED_MODULE_4__["Create_Topic"]();
                this._toastPopup.showErrorMessage('success', '', "Topic Added Successfully");
                $('#addTopic').modal('hide');
                if ((this.filterData.standard_id != -1) && (this.filterData.subject_id != -1)) {
                    this.getTopicDetails('view');
                }
                console.log(data);
            }, (error) => {
                this.auth.hideLoader();
                this._toastPopup.showErrorMessage('error', '', error.error.message);
                console.log(error);
            });
        }
        getTopicDetails(type) {
            if (this.filterData.standard_id == -1) {
                this._toastPopup.showErrorMessage('error', '', "Select the standard");
                return;
            }
            if (this.filterData.subject_id == -1) {
                this._toastPopup.showErrorMessage('error', '', "Select the subject");
                return;
            }
            this.auth.showLoader();
            let url = "/api/v1/topic_manager/standards/" + this.filterData.standard_id + "/subjects/" + this.filterData.subject_id + "/topics";
            this._http.getData(url).subscribe((data) => {
                this.auth.hideLoader();
                if (data) {
                    if (type == 'view') {
                        this.subjectList = data;
                        this.subjectList.forEach((object) => {
                            object.addSubtopic = [];
                        });
                    }
                    else {
                        for (let i = 0; i < data.length; i++) {
                            data[i].isExpand = this.subjectList[i].isExpand;
                            if (this.subjectList[i].addSubtopic[0]) {
                                let object = this.subjectList[i].addSubtopic[0];
                                object.name = object && object.name ? '' : '';
                                data[i].addSubtopic = this.subjectList[i].addSubtopic;
                            }
                            else {
                                data[i].addSubtopic = [];
                            }
                            this.expandAllTopic(data[i], this.subjectList[i]);
                        }
                        this.subjectList = data;
                    }
                }
                if (!data.length || data == null) {
                    this._toastPopup.showErrorMessage('info', '', 'No topics linked');
                }
            }, (error) => {
                this.auth.hideLoader();
                console.log(error);
            });
        }
        expandAllTopic(topic, subjectList) {
            if (topic.subTopic.length == 0) {
                return;
            }
            else {
                for (let i = 0; i < topic.subTopic.length; i++) {
                    let object = topic.subTopic[i];
                    let subject = subjectList != undefined ? subjectList.subTopic[i] : '';
                    object.addSubtopic = subject && subject.addSubtopic ? subject.addSubtopic : [];
                    if (subject && subject.addSubtopic && subject.addSubtopic[0]) {
                        let add_sub_object = subject.addSubtopic[0];
                        add_sub_object.name = add_sub_object && add_sub_object.name ? '' : '';
                        object.addSubtopic = subject.addSubtopic;
                    }
                    else {
                        object.addSubtopic = [];
                    }
                    object.isExpand = subject && subject.isExpand;
                    if (object.subTopic.length > 0) {
                        this.expandAllTopic(object, subject);
                    }
                }
            }
        }
    };
    TopicTreeComponent.ctorParameters = () => [
        { type: _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
        { type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticatorService"] },
        { type: _services_message_show_service__WEBPACK_IMPORTED_MODULE_3__["MessageShowService"] }
    ];
    TopicTreeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-topic-tree',
            template: __importDefault(__webpack_require__(/*! raw-loader!./topic-tree.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/create-course/topic/topic-tree/topic-tree.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./topic-tree.component.scss */ "./src/app/components/course-module/create-course/topic/topic-tree/topic-tree.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _services_authenticator_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticatorService"],
            _services_message_show_service__WEBPACK_IMPORTED_MODULE_3__["MessageShowService"]])
    ], TopicTreeComponent);
    return TopicTreeComponent;
})();



/***/ }),

/***/ "./src/app/components/course-module/create-course/topic/topic.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/course-module/create-course/topic/topic.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY291cnNlLW1vZHVsZS9jcmVhdGUtY291cnNlL3RvcGljL3RvcGljLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/course-module/create-course/topic/topic.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/course-module/create-course/topic/topic.component.ts ***!
  \*********************************************************************************/
/*! exports provided: TopicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicComponent", function() { return TopicComponent; });
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

let TopicComponent = /** @class */ (() => {
    let TopicComponent = class TopicComponent {
        constructor() { }
        ngOnInit() {
        }
    };
    TopicComponent.ctorParameters = () => [];
    TopicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-topic',
            template: __importDefault(__webpack_require__(/*! raw-loader!./topic.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/create-course/topic/topic.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./topic.component.scss */ "./src/app/components/course-module/create-course/topic/topic.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], TopicComponent);
    return TopicComponent;
})();



/***/ }),

/***/ "./src/app/components/course-module/create-course/topic/topic.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/course-module/create-course/topic/topic.module.ts ***!
  \******************************************************************************/
/*! exports provided: TopicModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicModule", function() { return TopicModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _topic_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./topic-routing.module */ "./src/app/components/course-module/create-course/topic/topic-routing.module.ts");
/* harmony import */ var _topic_list_topic_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./topic-list/topic-list.component */ "./src/app/components/course-module/create-course/topic/topic-list/topic-list.component.ts");
/* harmony import */ var _topic_tree_topic_tree_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./topic-tree/topic-tree.component */ "./src/app/components/course-module/create-course/topic/topic-tree/topic-tree.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/components/shared/shared.module.ts");
/* harmony import */ var _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../node_modules/@angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _topic_bulk_upload_topic_bulk_upload_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./topic-bulk-upload/topic-bulk-upload.component */ "./src/app/components/course-module/create-course/topic/topic-bulk-upload/topic-bulk-upload.component.ts");
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/fileupload */ "./node_modules/primeng/fileupload.js");
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_fileupload__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _topic_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./topic.component */ "./src/app/components/course-module/create-course/topic/topic.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










let TopicModule = /** @class */ (() => {
    let TopicModule = class TopicModule {
    };
    TopicModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _topic_routing_module__WEBPACK_IMPORTED_MODULE_2__["TopicRoutingModule"],
                _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                primeng_fileupload__WEBPACK_IMPORTED_MODULE_8__["FileUploadModule"]
            ],
            declarations: [
                _topic_component__WEBPACK_IMPORTED_MODULE_9__["TopicComponent"],
                _topic_list_topic_list_component__WEBPACK_IMPORTED_MODULE_3__["TopicListComponent"],
                _topic_tree_topic_tree_component__WEBPACK_IMPORTED_MODULE_4__["TopicTreeComponent"],
                _topic_bulk_upload_topic_bulk_upload_component__WEBPACK_IMPORTED_MODULE_7__["TopicBulkUploadComponent"]
            ]
        })
    ], TopicModule);
    return TopicModule;
})();



/***/ })

}]);
//# sourceMappingURL=app-components-course-module-create-course-topic-topic-module-es2015.js.map