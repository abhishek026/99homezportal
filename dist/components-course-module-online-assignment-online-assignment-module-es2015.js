(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-course-module-online-assignment-online-assignment-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/online-assignment/list-assignment/list-assignment.component.html":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/online-assignment/list-assignment/list-assignment.component.html ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"clear-fix\" style=\"padding-right: 2%;\">\n  <!-- breadcrumb -->\n  <section class=\"middle-top clearFix bulk-header\" style=\"border-bottom: 1px solid lightgrey;\">\n    <div>\n      <h1 class=\"pull-left\">\n        <!--<a routerLink=\"/view/course\" *ngIf=\"!jsonFlag.isProfessional\" style=\"padding:0px; \">\n          Course\n        </a>-->\n        <!-- <a routerLink=\"/view/batch\" *ngIf=\"jsonFlag.isProfessional\" style=\"padding:0px; \">\n          Batch\n        </a> -->\n        <i style=\"font-family: 'FontAwesome';\" class=\"\"></i>\n        <span>Assignments</span>\n      </h1>\n    </div>\n  </section>\n\n  <!-- filter container -->\n  <section>\n    <div class=\"filter-container\">\n      <div class=\"search-filter-wrapper\">\n        <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n        <input type=\"text\" class=\"normal-field\" placeholder=\"Search\" name=\"searchData\" [(ngModel)]=\"searchText\"\n          (keyup)=\"searchDatabase()\">\n      </div>\n      <div class=\"filter-item field-wrapper datePickerBox\">\n        <!-- <label for=\"date-range\">Select Date Range</label> -->\n        <input type=\"text\" value=\"\" id=\"date-range\" [(ngModel)]=\"dateFilterRange\"\n          (ngModelChange)=\"dateRangeChange($event)\" class=\"form-ctrl widgetDatepicker bsDatepicker\"\n          style=\"padding: 6px;\" readonly=\"true\" name=\"date-range\" placeholder=\"Date\" bsDaterangepicker />\n      </div>\n\n      <div class=\"manage-assignment-btn-container\">\n        <button type=\"button\" name=\"button\" class=\"btn\" routerLink='/view/course/online-assignment/create-assignment'>\n          <!-- <i class=\"fa fa-plus\" aria-hidden=\"true\" style=\"color: #0084f6;\"></i>&nbsp; -->\n          New Assignment</button>\n      </div>\n    </div>\n  </section>\n\n  <!-- list container -->\n  <section>\n    <div class=\"list-table-container\">\n      <div class=\"list-header-container\">\n        <div class=\"list-header-item v-small-item\">\n          <span>ID</span>\n        </div>\n        <div class=\"list-header-item small-item\">\n          <span>Title</span>\n        </div>\n        <div class=\"list-header-item small-item\" style=\"width: 12.5%\">\n          <span>Start Date</span>\n        </div>\n        <div class=\"list-header-item small-item\" style=\"width: 12.5%\">\n          <span>Due Date</span>\n        </div>\n        <div class=\"list-header-item small-item\">\n          <span>{{schoolModel ? 'Section' : 'Course'}}</span>\n        </div>\n        <div class=\"list-header-item small-item\">\n          <span>Subject</span>\n        </div>\n        <div class=\"list-header-item medium-item\">\n          <span>Topic</span>\n        </div>\n        <div class=\"list-header-item small-item\">\n          <span>Status</span>\n        </div>\n        <div class=\"list-header-item v-small-item\">\n          <span>Submissions\n            <div class=\"questionInfo inline-relative\" style=\"left:0%;top:5px;\">\n              <span class=\"qInfoIcon i-class\">i</span>\n              <div class=\"tooltip-box-field md\">\n                Status shown \"Number of Students Submitted the Assignment / Total Number of Students.\n              </div>\n            </div>\n          </span>\n        </div>\n        <div class=\"list-header-item small-item align-right\" style=\"margin-right: 10px;\">\n          <span>Action</span>\n        </div>\n      </div>\n      <div class=\"list-value-outer-container\">\n        <div class=\"list-value-container\" [ngClass]=\"{'border-published-class': assignment.assignment_status == 'Published',\n                    'border-draft-class': assignment.assignment_status == 'Draft'}\"\n          *ngFor=\"let assignment of assignmentList\">\n          <div class=\"list-value-item v-small-item\">\n            <span>{{assignment.file_id}}</span>\n          </div>\n          <div class=\"list-value-item small-item\">\n            <span\n              title=\"{{assignment?.title}}\">{{ (!assignment.title) ? '-' : (assignment.title.length > 12) ? (assignment.title | slice:0:12) + '...' : assignment.title}}</span>\n          </div>\n          <div class=\"list-value-item small-item\" style=\"width: 12.5%\">\n            <span>{{assignment.start_date | date: 'dd-MMM-yy'}} {{assignment.start_time}}</span>\n          </div>\n          <div class=\"list-value-item small-item\" style=\"width: 12.5%\">\n            <span>{{assignment.end_date | date: 'dd-MMM-yy'}} {{assignment.end_time}}</span>\n          </div>\n          <div class=\"list-value-item small-item\">\n            <span\n              title=\"{{assignment?.course_name}}\">{{ (!assignment.course_name) ? '-' : (assignment.course_name.length > 20) ? (assignment.course_name | slice:0:20) + '...' : assignment.course_name}}</span>\n          </div>\n          <div class=\"list-value-item small-item\">\n            <span\n              title=\"{{assignment?.subject_name}}\">{{ (!assignment.subject_name) ? '-' : (assignment.subject_name.length > 20) ? (assignment.subject_name | slice:0:20) + '...' : assignment.subject_name}}</span>\n          </div>\n          <div class=\"list-value-item medium-item\">\n            <span>{{assignment.topic_name}}-{{assignment.sub_topic_name}}</span>\n            <!-- <span title=\"{{assignment?.title}}\" >{{ (!assignment.title) ? '-' : (assignment.title.length > 30) ? (assignment.title | slice:0:30) + '...' : assignment.title}}</span> -->\n          </div>\n          <div class=\"list-value-item small-item\">\n            <span>{{assignment.assignment_status}}</span>\n          </div>\n          <div class=\"list-value-item v-small-item action-container\">\n            <span\n              *ngIf=\"assignment.assignment_status == 'Published' && assignment.total_assign_submitted_count!=0\">{{assignment.total_assign_submitted_count}}/{{assignment.total_assign_students}}</span>\n            <span\n              *ngIf=\"assignment.assignment_status != 'Published' || assignment.total_assign_submitted_count == 0\">-</span>\n          </div>\n          <div class=\"list-value-item small-item align-center action-container\">\n            <div class=\"dropdown dropleft\">\n              <button class=\"btn btn-light btn-xs dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\"\n                aria-haspopup=\"true\" aria-expanded=\"false\">\n                <i class=\"fa fa-caret-left\" aria-hidden=\"true\"></i> &nbsp; Action\n              </button>\n              <div class=\"dropdown-menu horizontal-menu\" aria-labelledby=\"actionMenu\">\n                <span class=\"dropdown-item\" (click)=\"viewSubmission(assignment.file_id)\"\n                  *ngIf=\"assignment.assignment_status == 'Published' || assignment.assignment_status == 'Under Evalution' || assignment.assignment_status == 'Pending Evaluation'\">\n                  <i class=\"fa fa-eye\" style=\"margin-top: 3px;\" aria-hidden=\"true\"></i> View\n                </span>\n                <span class=\"dropdown-item\" (click)=\"editAssignment(assignment.file_id)\"\n                  *ngIf=\"assignment.assignment_status == 'Published' || assignment.assignment_status == 'Draft' || assignment.assignment_status == 'Scheduled'\">\n                  <i class=\"fa fa-pencil\" style=\"margin-top: 3px;\" aria-hidden=\"true\"></i> Edit\n                </span>\n                <span class=\"dropdown-item\" (click)=\"deleteAssignment(assignment.file_id)\"\n                  *ngIf=\"assignment.assignment_status == 'Draft' || assignment.assignment_status == 'Scheduled'\">\n                  <i class=\"fa fa-trash\" style=\"margin-top: 3px;\" aria-hidden=\"true\"></i> Delete\n                </span>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"no-records\" *ngIf=\"assignmentList?.length  == 0\">\n          <span>No Records Found</span>\n        </div>\n      </div>\n\n\n\n    </div>\n  </section>\n\n  <div class=\"row filter-res pagination\" #pager id=\"pager\" style=\"width: 100%;\">\n    <div class=\"c-lg-12 c-md-12 c-sm-12 align-right\">\n      <pagination (goPage)=\"fectchTableDataByPage($event)\" (goNext)=\"fetchNext()\" (goPrev)=\"fetchPrevious()\"\n        [pagesToShow]=\"10\" [page]=\"pageIndex\" [perPage]=\"displayBatchSize\" [sizeArr]=\"sizeArr\"\n        (sizeChange)=\"updateTableBatchSize($event)\" [count]=\"totalCount\">\n      </pagination>\n    </div>\n  </div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/online-assignment/manage-assignment/manage-assignment.component.html":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/online-assignment/manage-assignment/manage-assignment.component.html ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--add tag master modal-->\n<div class=\"modal fade\" id=\"addTag\" role=\"dialog\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h3 class=\"modal-title\">Create Master Tag</h3>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"field-wrapper\">\n          <label>Tag Name<span class=\"text-danger\">*</span></label>\n          <div class=\"dropdown-div pt-2\">\n            <input class=\"tags-dropdown\" type=\"text\" [(ngModel)]=\"newTagName\" placeholder=\" Enter Tag Name\" />\n          </div>\n        </div>\n        <div class=\"field-wrapper\">\n          <label>Description</label>\n          <div class=\"dropdown-div pt-2\">\n            <input class=\"tags-dropdown\" type=\"text\" [(ngModel)]=\"newTagDescription\" placeholder=\" Enter Description\" />\n          </div>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary create-btn\" (click)=\"createMasterTag()\">Create</button>\n      </div>\n    </div>\n\n  </div>\n</div>\n\n<div class=\"clear-fix\">\n  <!-- breadcrumb -->\n  <section class=\"middle-top clearFix bulk-header\">\n    <div>\n      <h1 class=\"pull-left\" style=\"margin-bottom: 0;\">\n        <!-- <a routerLink=\"/view/course\" *ngIf=\"!jsonFlag.isProfessional\" style=\"padding:0px; \">\n          Course\n        </a>\n        <a routerLink=\"/view/batch\" *ngIf=\"jsonFlag.isProfessional\" style=\"padding:0px; \">\n          Batch\n        </a>\n        <i style=\"font-family: 'FontAwesome';\" class=\"fas fa-angle-right\"></i> -->\n        <a routerLink=\"/view/{{jsonFlag.type}}/online-assignment\" style=\"padding:0px; \">\n          Assignments\n        </a>\n        <i style=\"font-family: 'FontAwesome';\" class=\"fas fa-angle-right\"></i>\n        <span>Manage Assignment</span>\n      </h1>\n    </div>\n  </section>\n\n  <section>\n    <div class=\"manage-assignment-container\">\n\n      <div class=\"assignment-details\">\n        <div class=\"assignment-details-item\" style=\"flex-direction: column;\">\n          <label for=\"tags\" style=\"font-size: 12px; margin-top:10px; margin-right: 10px;\">Title<span\n              class=\"danger\">*</span></label>\n          <input type=\"text\" name=\"\" class=\"assignment-input\" value=\"\" [(ngModel)]=\"assignmentDetails.title\"\n            placeholder=\"Assignment Title\">\n        </div>\n        <div class=\"assignment-details-item\" style=\"flex-direction: column;\">\n          <label for=\"tags\" style=\"font-size: 12px; margin-top:10px; margin-right: 10px;\">Description</label>\n          <textarea name=\"name\" class=\"assignment-textarea\" style=\"height: 85px;\" rows=\"5\" [(ngModel)]=\"assignmentDetails.description\"\n            placeholder=\"Description\" cols=\"78\"></textarea>\n        </div>\n        <!-- <div class=\"assignment-details-item field-wrapper tags\">\n          <label for=\"tags\" style=\"font-size: 12px; margin-top:5px; margin-right: 10px;\">\n            Tags\n            <div class=\"questionInfo inline-relative\" style=\"left:0%;top:5px;\">\n              <span class=\"qInfoIcon i-class\">i</span>\n              <div class=\"tooltip-box-field md\">\n                Tags will help you\n                <br> in searching particular\n                <br> assignments later on\n              </div>\n            </div>\n          </label>\n          <ng-multiselect-dropdown class=\"container dropdown\"\n            [placeholder]=\"'Select Tags(s)'\"\n            [data]=\"tagList\"\n            [settings]=\"tagsListSettings\"\n            [(ngModel)]=\"selectedTagsList\" >\n          </ng-multiselect-dropdown>\n          <button type=\"button\" name=\"button\" class=\"manage-assignment-btn\" data-target=\"#addTag\" data-toggle=\"modal\">\n            <i class=\"fa fa-plus\" aria-hidden=\"true\" style=\"color: #0084f6;\"></i>&nbsp;\n            Add Tags</button>\n        </div> -->\n        <div class=\"assignment-details-item\">\n          <div class=\"field-checkbox-wrapper\">\n            <input type=\"checkbox\" value=\"\" class=\"form-checkbox\" id=\"marks\" [(ngModel)]=\"assignmentDetails.marks\"\n              (ngModelChange)=\"toggleMarks($event)\">\n            <label for=\"marks\">\n              Evaluation required\n            </label>\n            <div class=\"questionInfo inline-relative\" style=\"position: absolute;left: 100%;top: 0;\">\n              <span class=\"qInfoIcon i-class\" style=\"line-height: 17px;\">i</span>\n              <div class=\"tooltip-box-field md\">\n                Choose this to\n                <br> specify the evaluation\n                <br> marks for this\n                <br> assignment\n              </div>\n            </div>\n          </div>\n          <div class=\"field-radio-wrapper\" style=\"margin-left: 5%;padding-left: 5px;width: 115px;\" *ngIf=\"showMarks\">\n            <input type=\"radio\" value=\"false\" style=\"-webkit-appearance: radio;\" class=\"form-checkbox\" id=\"enable_grade\"\n              [(ngModel)]=\"assignmentDetails.enable_grade\">\n            <label for=\"enable_grade\">\n              Enable marks\n            </label>\n          </div>\n          <div class=\"field-radio-wrapper\" style=\"margin-left: 5%;padding-left: 5px;width: 115px;\" *ngIf=\"showMarks\">\n            <input type=\"radio\" value=\"true\" style=\"-webkit-appearance: radio;\" class=\"form-checkbox\" id=\"enable_grade\"\n              [(ngModel)]=\"assignmentDetails.enable_grade\">\n            <label for=\"enable_grade\">\n              Enable Grade\n            </label>\n          </div>\n          <div class=\"marks-container\" *ngIf=\"showMarks && assignmentDetails.enable_grade=='false'\">\n            <input type=\"number\" name=\"\" value=\"\" placeholder=\"Enter marks\"\n              [(ngModel)]=assignmentDetails.evaluation_marks>\n          </div>\n        </div>\n\n        <div class=\"assignment-details-item \" style=\"flex-direction: row;\">\n          <div class=\"date-time field-wrapper datePickerBox\">\n            <label for=\"state-date\" style=\"font-size: 12px;\">Start Date & Time<span class=\"danger\">*</span></label>\n            <input type=\"text\" value=\"\" id=\"state-date\" class=\"form-ctrl widgetDatepicker bsDatepicker datepicker1\"\n              [(ngModel)]=\"assignmentDetails.startDate\" style=\"padding: 6px;\" readonly=\"true\" name=\"payment-date\"\n              [disabled]=\"assignmentDetails.assignment_status == 'Published'\" placeholder=\"Date\" bsDatepicker />\n            <div>\n              <select class=\"made-out\" id=\"from1\" [(ngModel)]=\"assignmentDetails.startHr\"\n                [disabled]=\"assignmentDetails.assignment_status == 'Published'\"\n                (ngModelChange)=\"getEventHourFrom($event)\">\n                <option value=\"\" disabled selected=\"selected\" hidden>HH</option>\n                <option *ngFor=\"let i of hour\" [value]=\"i\">\n                  {{i}}\n                </option>\n              </select>\n              <select class=\"made-out\" id=\"from2\" style=\"margin-left:10px;\" [(ngModel)]=\"assignmentDetails.startMin\"\n                [disabled]=\"assignmentDetails.assignment_status == 'Published'\"\n                (ngModelChange)=\"getEventHourFrom($event)\">\n                <option value=\"\" disabled selected=\"selected\" hidden>MM</option>\n                <option [value]=\"i\" *ngFor=\"let i of minutes\">\n                  {{i}}\n                </option>\n              </select>\n            </div>\n          </div>\n\n          <div class=\"date-time field-wrapper datePickerBox\">\n            <label for=\"end-date\" style=\"font-size: 12px;\">Due Date & Time<span class=\"danger\"></span></label>\n            <input type=\"text\" value=\"\" id=\"end-date\" class=\"form-ctrl widgetDatepicker bsDatepicker datepicker1\"\n              [(ngModel)]=\"assignmentDetails.endDate\" style=\"padding: 6px;\" readonly=\"true\" name=\"payment-date\"\n              placeholder=\"Date\" bsDatepicker />\n            <div>\n              <select class=\"made-out\" id=\"from1\" [(ngModel)]=\"assignmentDetails.endHr\"\n                (ngModelChange)=\"getEventHourFrom($event)\">\n                <option value=\"\" disabled selected=\"selected\" hidden>HH</option>\n                <option *ngFor=\"let i of hour\" [value]=\"i\">\n                  {{i}}\n                </option>\n              </select>\n              <select class=\"made-out\" id=\"from2\" style=\"margin-left:10px;\" [(ngModel)]=\"assignmentDetails.endMin\"\n                (ngModelChange)=\"getEventHourFrom($event)\">\n                <option value=\"\" disabled selected=\"selected\" hidden>MM</option>\n                <option [value]=\"i\" *ngFor=\"let i of minutes\">\n                  {{i}}\n                </option>\n              </select>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"assignment-details-item field-wrapper EvaluationDate datePickerBox\" style=\"flex-direction: column;\">\n          <label for=\"tags\" style=\"font-size: 12px; margin-top:10px; margin-right: 10px;\">Evaluation Date <span\n              class=\"text-danger\">*</span>\n            <div class=\"questionInfo inline-relative\" style=\"left:0%;top:5px;\">\n              <span class=\"qInfoIcon i-class\">i</span>\n              <div class=\"tooltip-box-field md\">\n                We can specify the Evaltion\n                Date for Assignment ,This\n                date will be visible to Students\n              </div>\n            </div>\n          </label>\n          <input type=\"text\" value=\"\" id=\"state-date\" class=\"form-ctrl widgetDatepicker bsDatepicker datepicker1\"\n            [(ngModel)]=\"assignmentDetails.evaluation_date\" style=\"padding: 6px;\" readonly=\"true\" name=\"payment-date\"\n            placeholder=\"Date\" bsDatepicker />\n        </div>\n\n        <div class=\"assignment-details-item\">\n          <div class=\"field-checkbox-wrapper\">\n            <input type=\"checkbox\" value=\"\" class=\"form-checkbox\" id=\"late-submission\"\n              [(ngModel)]=\"assignmentDetails.lateSubmission\">\n            <label for=\"late-submission\">Allow late submission</label>\n          </div>\n        </div>\n        <div *ngIf=\"assignmentDetails.lateSubmission\"\n          class=\"assignment-details-item field-wrapper EvaluationDate datePickerBox\" style=\"flex-direction: column;\">\n          <label for=\"tags\" style=\"font-size: 12px; margin-top:10px; margin-right: 10px;\">Late Submission Date</label>\n          <input type=\"text\" value=\"\" id=\"state-date\" class=\"form-ctrl widgetDatepicker bsDatepicker datepicker1\"\n            [(ngModel)]=\"assignmentDetails.assignment_late_submission_date\" style=\"padding: 6px;\" readonly=\"true\"\n            name=\"payment-date\" placeholder=\"Date\" bsDatepicker />\n        </div>\n        <div class=\"assignment-details-item field-wrapper\">\n          <label for=\"uploadFileControl\" style=\"font-size: 12px;margin-top: 7px;\">Upload Assignment</label>\n          <input type=\"file\" class=\"form-ctrl upload-file\" id=\"uploadFileControl\" name=\"uploadFileBox\" accept=\"application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,\n          text/plain, application/pdf, image/*\" [(ngModel)]=\"upFile\" />\n          <button type=\"button\" name=\"button\" class=\"upload-docs-btn\" (click)=\"fillFiles()\">Upload</button>\n        </div>\n        <div style=\"margin-left: 118px;font-size: 12px;\">Allowed Formats: pdf, doc, docx, xls, xlsx, csv, txt, jpg,\n          jpeg, png, gif,zip (Max Upto 15MB)\n        </div>\n\n        <div class=\"assignment-details-item field-wrapper\">\n          <input type=\"text\" name=\"\" class=\"assignment-input url\" value=\"\" placeholder=\"Link Title\"\n            [(ngModel)]=\"urlDetails.name\">\n          <input type=\"text\" name=\"\" class=\"assignment-input url\" value=\"\" placeholder=\"Provide Link\"\n            style=\"margin-left: 10px;\" [(ngModel)]=\"urlDetails.url\">\n          <button type=\"button\" name=\"button\" class=\"upload-docs-btn\" (click)=\"uploadURL()\">Add</button>\n        </div>\n\n        <!-- used while createing assignmnet -->\n        <div class=\"attachment-container\">\n          <div class=\"link-attachment-container\" *ngIf=\"assignmentDetails?.urlLists.length > 0\">\n            <div class=\"link-attachment-item\" *ngFor=\"let url of assignmentDetails.urlLists\">\n              <i class=\"fa fa-globe\" aria-hidden=\"true\"></i>\n              <span>{{url.display_name}}</span>\n              <i class=\"fa fa-times\" aria-hidden=\"true\" (click)=\"removeLink(url.display_name)\" style=\"color:red;\"></i>\n            </div>\n          </div>\n          <div class=\"file-attachment-container\">\n            <div class=\"file-attachment-item\" *ngFor=\"let file of fileArray\">\n              <i class=\"fa fa-file\" aria-hidden=\"true\"></i>\n              <span title=\"{{file.fileName}}\">{{ (file.fileName.length > 30) ? (file.fileName | slice:0:30) + '...' : file.fileName }}\n                .{{file.fileType}}</span>\n              <i class=\"fa fa-times\" aria-hidden=\"true\" (click)=\"removeFile(file.name)\" style=\"color:red;\"></i>\n            </div>\n          </div>\n        </div>\n\n        <!-- Used for Edit assignment -->\n        <div class=\"attachment-container\" *ngIf=\"sectionName == 'Edit'\">\n          <div class=\"link-attachment-container\" *ngIf=\"editUrlList?.length > 0\">\n            <div class=\"link-attachment-item\" *ngFor=\"let url of editUrlList\">\n              <i class=\"fa fa-globe\" aria-hidden=\"true\"></i>\n              <span>{{url.attachment_display_name}}</span>\n              <i class=\"fa fa-times\" aria-hidden=\"true\" (click)=\"removeOldLink(url.attachment_display_name)\"\n                style=\"color:red;\"></i>\n            </div>\n          </div>\n          <div class=\"file-attachment-container\" *ngIf=\"editAttachmentList?.length > 0\">\n            <div class=\"file-attachment-item\" *ngFor=\"let file of editAttachmentList\">\n              <i class=\"fa fa-file\" aria-hidden=\"true\"></i>\n              <span title=\"{{file.attachment_name}}\">{{ (file.attachment_name.length > 50) ? (file.attachment_name | slice:0:50) + '...' : file.attachment_name }}</span>\n              <i class=\"fa fa-times\" aria-hidden=\"true\" (click)=\"removeOldFile(file.file_id)\" style=\"color:red;\"></i>\n            </div>\n          </div>\n        </div>\n\n\n      </div>\n\n      <div class=\"course-details\">\n        <!-- For Course Model -->\n        <div class=\"course-details-item field-wrapper\" *ngIf=\"!this.jsonFlag.isProfessional && !schoolModel\">\n          <label for=\"\" style=\"font-size: 12px;\">{{schoolModel ? 'Standard' : 'Master Course'}}<span class=\"danger\">*</span></label>\n          <select class=\"course-input\" name=\"\" [(ngModel)]=\"assignmentDetails.masterCourse\"\n            [disabled]=\"assignmentDetails.assignment_status == 'Published'\" (ngModelChange)=\"getCourses()\">\n            <option value=\"-1\">Select {{schoolModel ? 'Standard' : 'Master Course'}}</option>\n            <option [value]=\"master.master_course\" *ngFor=\"let master of masterCourseList\">\n              {{ (master.master_course.length > 30) ? (master.master_course | slice:0:30) + '...' : master.master_course }}\n            </option>\n          </select>\n        </div>\n        <div class=\"course-details-item field-wrapper\" *ngIf=\"!this.jsonFlag.isProfessional && schoolModel\">\n          <label for=\"\" style=\"font-size: 12px;\">Standard<span class=\"danger\">*</span></label>\n          <select class=\"course-input\" name=\"\" [(ngModel)]=\"assignmentDetails.standard_id\"\n            [disabled]=\"assignmentDetails.assignment_status == 'Published'\" (ngModelChange)=\"getCourseList($event)\">\n            <option value=\"-1\">Select Standard</option>\n            <option [value]=\"master.standard_id\" *ngFor=\"let master of masterCourseList\">\n              {{ (master.standard_name.length > 30) ? (master.standard_name | slice:0:30) + '...' : master.standard_name }}\n            </option>\n          </select>\n        </div>\n        <div class=\"course-details-item field-wrapper\" *ngIf=\"!this.jsonFlag.isProfessional\">\n          <label for=\"\" style=\"font-size: 12px;\">{{schoolModel ? 'Section' : 'Course'}}<span class=\"danger\">*</span></label>\n          <select class=\"course-input\" name=\"\" [(ngModel)]=\"assignmentDetails.course\"\n            [disabled]=\"assignmentDetails.assignment_status == 'Published'\" (ngModelChange)=\"getSubjects()\">\n            <option value=\"-1\">Select {{schoolModel ? 'Section' : 'Course'}}</option>\n            <option [value]=\"course.course_id\" *ngFor=\"let course of courseList\">\n              {{ (course.course_name.length > 30) ? (course.course_name | slice:0:30) + '...' : course.course_name }}\n            </option>\n          </select>\n        </div>\n        <div class=\"course-details-item field-wrapper\" *ngIf=\"!this.jsonFlag.isProfessional\">\n          <label for=\"\" style=\"font-size: 12px;\">Subject<span class=\"danger\"></span></label>\n          <select class=\"course-input\" name=\"\" [(ngModel)]=\"assignmentDetails.subject\" (ngModelChange)=\"getTopic()\">\n            <option value=\"-1\">Select Subject</option>\n            <option [value]=\"subject.subject_id\" *ngFor=\"let subject of subjectList\">\n              {{ (subject.subject_name.length > 30) ? (subject.subject_name | slice:0:30) + '...' : subject.subject_name }}\n            </option>\n          </select>\n        </div>\n\n        <!-- For Batch model -->\n        <div class=\"course-details-item field-wrapper\" *ngIf=\"this.jsonFlag.isProfessional\">\n          <label for=\"\" style=\"font-size: 12px;\">Master Course<span class=\"danger\">*</span></label>\n          <select class=\"course-input\" name=\"\" [(ngModel)]=\"assignmentDetails.masterCourse\"\n            (ngModelChange)=\"updateCoursesList()\">\n            <option value=\"-1\">Select Master Course</option>\n            <option [value]=\"standard.standard_id\" *ngFor=\"let standard of masterCourseList\">{{standard.standard_name}}\n            </option>\n          </select>\n        </div>\n\n        <div class=\"course-details-item field-wrapper\" *ngIf=\"this.jsonFlag.isProfessional\">\n          <label for=\"\" style=\"font-size: 12px;\">Course<span class=\"danger\">*</span></label>\n          <select class=\"course-input\" name=\"\" [(ngModel)]=\"assignmentDetails.course\"\n            (ngModelChange)=\"updateSubjectsList()\">\n            <option value=\"-1\">Select Course</option>\n            <option [value]=\"subject.subject_id\" *ngFor=\"let subject of courseList\">{{subject.subject_name}}</option>\n          </select>\n        </div>\n\n        <div class=\"course-details-item field-wrapper\" *ngIf=\"this.jsonFlag.isProfessional\">\n          <label for=\"\" style=\"font-size: 12px;\">Batch<span class=\"danger\">*</span></label>\n          <select class=\"course-input\" name=\"\" [(ngModel)]=\"assignmentDetails.batch\" (ngModelChange)=\"getTopic()\">\n            <option value=\"-1\">Select Batch</option>\n            <option [value]=\"batch.batch_id\" *ngFor=\"let batch of batchList\">{{batch.batch_name}}</option>\n          </select>\n        </div>\n\n\n        <div class=\"course-details-item field-wrapper\">\n          <label for=\"\" style=\"font-size: 12px;\">Topic</label>\n          <select class=\"course-input\" name=\"\" [(ngModel)]=\"assignmentDetails.topic\" (ngModelChange)=\"getSubTopic()\">\n            <option value=\"-1\">Select Topic</option>\n            <option [value]=\"topic.topicId\" *ngFor=\"let topic of topicList\">\n              {{ (topic.topicName.length > 30) ? (topic.topicName | slice:0:30) + '...' : topic.topicName }}</option>\n          </select>\n        </div>\n        <div class=\"course-details-item field-wrapper\">\n          <label for=\"\" style=\"font-size: 12px;\">Sub Topic</label>\n          <select class=\"course-input\" name=\"\" [(ngModel)]=\"assignmentDetails.subtopic\">\n            <option value=\"-1\">Select Sub Topic</option>\n            <option [value]=\"topic.topicId\" *ngFor=\"let topic of subTopicList\">\n              {{ (topic.topicName.length > 30) ? (topic.topicName | slice:0:30) + '...' : topic.topicName }}</option>\n          </select>\n        </div>\n        <div class=\"course-details-item field-wrapper\">\n          <label for=\"\" style=\"font-size: 12px;\">Student(s)<span class=\"danger\">*</span></label>\n          <ng-multiselect-dropdown class=\"container dropdown\" [placeholder]=\"'Select Student(s)'\" [data]=\"studentsList\"\n            [settings]=\"studentListSettings\" [(ngModel)]=\"selectedStudentList\">\n          </ng-multiselect-dropdown>\n        </div>\n        <div class=\"course-details-item field-wrapper\">\n          <label for=\"\" style=\"font-size: 12px;\">Teacher<span class=\"danger\">*</span></label>\n          <select class=\"course-input\" [disabled]=\"userType == 3\" name=\"\" [(ngModel)]=\"assignmentDetails.teacher\">\n            <option value=\"-1\">Select Teacher</option>\n            <option [value]=\"teacher.teacher_id\" *ngFor=\"let teacher of facultyList\">\n              {{ (teacher.teacher_name.length > 30) ? (teacher.teacher_name | slice:0:30) + '...' : teacher.teacher_name }}\n            </option>\n          </select>\n        </div>\n      </div>\n\n    </div>\n  </section>\n\n  <footer>\n    <div class=\"action-btn-container\" style=\"padding-right: 2%;\">\n      <div class=\"action-btn\">\n        <button type=\"button\" name=\"button\" class=\"btn btn-light\" (click)=\"saveAsDraft()\">Save as Draft</button>\n      </div>\n      <div class=\"action-btn\">\n        <button type=\"button\" name=\"button\" class=\"btn btn-primary\" (click)=\"saveAssignment()\">Save & Publish</button>\n      </div>\n    </div>\n  </footer>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/online-assignment/online-assignment.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/online-assignment/online-assignment.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/online-assignment/review-assignment/review-assignment.component.html":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/online-assignment/review-assignment/review-assignment.component.html ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"clear-fix\">\n\n  <div id=\"bulk\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n\n      <!-- Modal content-->\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          <h4 class=\"modal-title\">Upload solution in Bulk</h4>\n        </div>\n        <div class=\"modal-body\">\n          <div class=\"assignment-details-item field-wrapper\">\n            <label for=\"uploadFileControl\" style=\"font-size: 14px;margin-top: 7px;\">Upload File</label>\n            <input type=\"file\" class=\"form-ctrl upload-file\" id=\"uploadFileControl\" name=\"uploadFileBox\" accept=\"application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,\n          text/plain, application/pdf, image/*\" [(ngModel)]=\"upFile\" />\n            <button type=\"button\" name=\"button\" class=\"upload-docs-btn\" (click)=\"fillFiles()\">Upload</button>\n          </div>\n\n          <div class=\"assignment-details-item field-wrapper\">\n            <input type=\"text\" name=\"\" class=\"assignment-input url\" value=\"\" placeholder=\"Link Title\"\n              [(ngModel)]=\"urlDetails.name\">\n            <input type=\"text\" name=\"\" class=\"assignment-input url\" value=\"\" placeholder=\"Provide Link\"\n              style=\"margin-left: 10px;\" [(ngModel)]=\"urlDetails.url\">\n            <button type=\"button\" name=\"button\" class=\"upload-docs-btn\" (click)=\"uploadURL()\">Add</button>\n          </div>\n\n          <div class=\"attachment-container\">\n            <div class=\"link-attachment-container\" *ngIf=\"bulkUrlList?.length > 0\">\n              <div class=\"link-attachment-item\" *ngFor=\"let url of bulkUrlList\">\n                <i class=\"fa fa-globe\" aria-hidden=\"true\"></i>\n                <span\n                  title=\"{{url.display_name}}\">{{(url.display_name.length > 45) ? (url.display_name | slice:0:45) + '...' : url.display_name}}</span>\n                <i class=\"fa fa-times\" aria-hidden=\"true\" (click)=\"removeLink(url.display_name)\" style=\"color:red;\"></i>\n              </div>\n            </div>\n            <div class=\"file-attachment-container\">\n              <div class=\"file-attachment-item\" *ngFor=\"let file of fileArray\">\n                <i class=\"fa fa-file\" aria-hidden=\"true\"></i>\n                <span>{{file.fileName}}.{{file.fileType}}</span>\n                <i class=\"fa fa-times\" aria-hidden=\"true\" (click)=\"removeFile(file)\" style=\"color:red;\"></i>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n          <button type=\"button\" class=\"btn btn-default\" (click)=\"uploadAttachments()\">Update</button>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n  <!-- Modal -->\n  <div id=\"updateStudent\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n\n      <!-- Modal content-->\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          <h4 class=\"modal-title\">Update Status</h4>\n        </div>\n        <div class=\"modal-body\">\n          <div class=\"update-status-container\" *ngIf=\"editStatus && editStatus != '' && editStatus != null\">\n            <div class=\"student-container\">\n              <div class=\"name-status-container\">\n                <div class=\"name-container\">\n                  <span class=\"name\">Student Name: </span>\n                  <span\n                    title=\"{{editStatus?.student_name}}\">{{ (!editStatus.student_name) ? '-' : (editStatus.student_name.length > 30) ? (editStatus.student_name | slice:0:30) + '...' : editStatus.student_name}}</span>\n                </div>\n                <div class=\"status-container\">\n                  <span class=\"name\">Student Status: </span>\n                  <span\n                    title=\"{{editStatus?.student_status}}\">{{ (!editStatus.student_status) ? '-' : (editStatus.student_status.length > 30) ? (editStatus.student_status | slice:0:30) + '...' : editStatus.student_status}}</span>\n                </div>\n              </div>\n              <div class=\"student-remarks-container\">\n                <span class=\"name\">Student Remarks:</span>\n                <span\n                  title=\"{{editStatus?.student_comment}}\">{{ (!editStatus.student_comment) ? '-' : (editStatus.student_comment.length > 30) ? (editStatus.student_comment | slice:0:30) + '...' : editStatus.student_comment}}</span>\n              </div>\n              <div class=\"url-list-container\" *ngIf=\"editStudentAttachments.urlList?.length > 0\">\n                <div class=\"link-attachment-item\" *ngFor=\"let url of editStudentAttachments.urlList\">\n                  <i class=\"fa fa-globe\" aria-hidden=\"true\"></i>\n                  <span style=\"width: 40%;\" *ngIf=\"url.attachment_display_name!=''\">\n                    {{ (url.attachment_display_name.length >50) ? (url.attachment_display_name | slice:0:50) + '...' : url.attachment_display_name }}\n                  </span>\n                  <span style=\"width: 40%;\">\n                    <a href=\"url.attachment_url\">\n                      {{ (url.attachment_url.length >50) ? (url.attachment_url | slice:0:50) + '...' : url.attachment_url }}\n                    </a>\n                  </span>\n                </div>\n              </div>\n              <div class=\"attachment-list\" *ngIf=\"editStudentAttachments.attachmentList?.length > 0\">\n                <div class=\"file-attachment-item\" *ngFor=\"let file of editStudentAttachments.attachmentList\">\n                  <i class=\"fa fa-file\" aria-hidden=\"true\"></i>\n                  <span>{{file.attachment_name}}</span>\n                  <i class=\"fa fa-download\" aria-hidden=\"true\" style=\"color:#0084f6; cursor: pointer;\"\n                    (click)=\"downloadFile(file)\"></i>\n                </div>\n                <a id=\"downloadFile\" class=\"hide\"></a>\n              </div>\n            </div>\n          </div>\n          <div class=\"faculty-container\">\n            <div class=\"name-status-container\">\n              <!-- <div class=\"status-container field-wrapper\" *ngIf=\"editStatus?.teacher_status != null\" style=\"flex-direction: column;\">\n                <label for=\"state-date\">Faculty Status</label>\n                <select name=\"\" class=\"course-input marks-input form-ctrl\" [(ngModel)]=\"editStatus.teacher_status\" style=\"width:78%; margin-top: 5px;\">\n                  <option value=\"Open\">Open</option>\n                  <option value=\"Inreview\">Under Evaluation</option>\n                  <option value=\"Reviewed\">Evaluated</option>\n                </select>\n              </div> -->\n              <div class=\"marks-container field-wrapper\" *ngIf=\"editStatus?.evaluation_required == 'Y' && !assignmentDetails.enable_grade\">\n                <label for=\"state-date\" style=\"font-size: 12px;\">Teacher Marks</label>\n                <input type=\"text\" name=\"\" value=\"\" class=\"form-ctrl marks-input\"  placeholder=\"Teacher Marks\" onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57)\"  [(ngModel)]=\"editStatus.evaluation_marks\">\n              </div>\n              <div class=\"marks-container field-wrapper\" *ngIf=\"editStatus?.evaluation_required == 'Y' && assignmentDetails.enable_grade\">\n                <label for=\"state-date\" style=\"font-size: 12px;\">Teacher Grade</label>\n                <select name=\"\" class=\"course-input marks-input form-ctrl\" [(ngModel)]=\"editStatus.grade_id\" style=\"width:78%; margin-top: 5px;\">\n                  <option value=\"\">Select</option>\n                  <option value=\"{{data.grade_id}}\" *ngFor=\"let data of gradeDetails\">{{data.grade}}</option>\n                </select>\n              </div>\n\n              <div class=\"marks-remarks-container\">\n                <div class=\"remarks-container field-wrapper\">\n                  <label for=\"state-date\" style=\"font-size: 12px;\">Teacher Remarks</label>\n                  <textarea name=\"name\" rows=\"4\" cols=\"40\" class=\"form-ctrl\" placeholder=\"Teacher Remarks\"\n                    [(ngModel)]=\"editStatus.teacher_comment\"></textarea>\n                </div>\n              </div>\n\n              <div class=\"assignment-details-item field-wrapper\">\n                <label for=\"updateUploadFile\" style=\"font-size: 12px;margin-top: 7px;\">Upload File</label>\n                <input type=\"file\" class=\"form-ctrl upload-file\" id=\"updateUploadFile\" name=\"uploadFileBox\" accept=\"application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,\n              text/plain, application/pdf, image/*\" [(ngModel)]=\"uploadFiles\" />\n                <button type=\"button\" name=\"button\" class=\"upload-docs-btn\" (click)=\"updateUpdateFile()\">Upload</button>\n              </div>\n\n              <div class=\"assignment-details-item field-wrapper\">\n                <input type=\"text\" name=\"\" class=\"assignment-input url\" value=\"\" placeholder=\"URL Name\"\n                  [(ngModel)]=\"UploadUrlDetails.name\">\n                <input type=\"text\" name=\"\" class=\"assignment-input url\" value=\"\" placeholder=\"URL\"\n                  style=\"margin-left: 10px;\" [(ngModel)]=\"UploadUrlDetails.url\">\n                <button type=\"button\" name=\"button\" class=\"upload-docs-btn\" (click)=\"updateUploadURL()\">Upload</button>\n              </div>\n\n              <div class=\"url-list-container\" *ngIf=\"editTeacherAttachments.urlList?.length > 0\"\n                style=\"padding-top: 10px; border-top: 1px solid #ccc;\">\n                <div class=\"link-attachment-item\" *ngFor=\"let url of editTeacherAttachments.urlList\">\n                  <i class=\"fa fa-globe\" aria-hidden=\"true\"></i>\n                  <span>{{url.attachment_display_name}}</span>\n                  <i class=\"fa fa-times\" aria-hidden=\"true\" (click)=\"removeUpdateLink(url.attachment_display_name)\"\n                    style=\"color:red;\"></i>\n                </div>\n              </div>\n              <div class=\"attachment-list\" *ngIf=\"editTeacherAttachments.attachmentList?.length > 0\">\n                <div class=\"file-attachment-item\" *ngFor=\"let file of editTeacherAttachments.attachmentList\">\n                  <i class=\"fa fa-file\" aria-hidden=\"true\"></i>\n                  <span *ngIf=\"file?.attachment_name\">{{file.attachment_name}}</span>\n                  <i class=\"fa fa-times\" aria-hidden=\"true\" (click)=\"removeFacultyAttachment(file.attachment_id)\"\n                    style=\"color:red;\"></i>\n                </div>\n              </div>\n\n              <div class=\"url-list-container\" *ngIf=\"facultyUrlList?.length > 0\"\n                style=\"padding-top: 10px; border-top: 1px solid #ccc;\">\n                <div class=\"link-attachment-item\" *ngFor=\"let url of facultyUrlList\">\n                  <i class=\"fa fa-globe\" aria-hidden=\"true\"></i>\n                  <span>{{url.display_name}}</span>\n                  <i class=\"fa fa-times\" aria-hidden=\"true\" (click)=\"removeNewlyAddedLink(url.display_name)\"\n                    style=\"color:red;\"></i>\n                </div>\n              </div>\n              <div class=\"attachment-list\" *ngIf=\"facultyAttachments?.length > 0\">\n                <div class=\"file-attachment-item\" *ngFor=\"let file of facultyAttachments\">\n                  <i class=\"fa fa-file\" aria-hidden=\"true\"></i>\n                  <span>{{file.name}}</span>\n                  <i class=\"fa fa-times\" aria-hidden=\"true\" (click)=\"removeNewlyAddedFile(file.name)\"\n                    style=\"color:red;\"></i>\n                </div>\n              </div>\n\n            </div>\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n          <button type=\"button\" class=\"btn btn-default\" (click)=\"updateStudentStatus()\">Update</button>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n  <!-- breadcrumb -->\n  <section class=\"middle-top clearFix bulk-header\">\n    <div>\n      <h1 class=\"pull-left\">\n        <!-- <a routerLink=\"/view/course\" *ngIf=\"!jsonFlag.isProfessional\" style=\"padding:0px; \">\n          Course\n        </a>\n        <a routerLink=\"/view/batch\" *ngIf=\"jsonFlag.isProfessional\" style=\"padding:0px; \">\n          Batch\n        </a>\n        <i style=\"font-family: 'FontAwesome';\" class=\"fas fa-angle-right\"></i> -->\n        <a routerLink=\"/view/{{jsonFlag.type}}/online-assignment\" style=\"padding:0px; \">\n          Assignments\n        </a>\n        <i style=\"font-family: 'FontAwesome';\" class=\"fas fa-angle-right\"></i>\n        <span>Student Submission Status</span>\n      </h1>\n    </div>\n  </section>\n  <div class=\"stat-item\"  *ngIf=\"assignmentDetails\">\n      <span class=\"stat-heading\" style=\"margin-left: 16px;font-weight: 600;\">Assignment Title : </span>\n      <span\n        title=\"{{assignmentDetails.title}}\">{{ (assignmentDetails?.title.length > 70) ? (assignmentDetails.title | slice:0:70) + '...' : assignmentDetails.title }}</span>\n    </div>\n  <section class=\"stats-container\" *ngIf=\"assignmentDetails\">\n\n    <!-- <div class=\"stat-item\">\n      <span class=\"stat-heading\">Assignment Title : </span>\n      <span\n        title=\"{{assignmentDetails.title}}\">{{ (assignmentDetails?.title.length > 70) ? (assignmentDetails.title | slice:0:70) + '...' : assignmentDetails.title }}</span>\n    </div> -->\n    <div class=\"stat-item\">\n      <span class=\"stat-heading\">Start Date : </span>\n      <span>{{assignmentDetails?.start_date}} {{assignmentDetails.start_time}}</span>\n    </div>\n    <div class=\"stat-item\">\n      <span class=\"stat-heading\">Due Date : </span>\n      <span>{{assignmentDetails?.end_date}} {{assignmentDetails.end_time}}</span>\n    </div>\n    <div class=\"stat-item\" *ngIf=\"assignmentDetails?.evaluation_required == 'Y'\">\n      <span class=\"stat-heading\">Evaluation Marks : </span>\n      <span>{{assignmentDetails?.evaluation_marks}}</span>\n    </div>\n    <div class=\"stat-item\">\n      <span class=\"stat-heading\">No of Students Assigned : </span>\n      <span>{{assignmentDetails.studentId_lists.length}}</span>\n    </div>\n  </section>\n\n\n  <!-- filter container -->\n  <section>\n    <div class=\"filter-container\" [hidden]=\"rowSelectedCount == 0\">\n      <div class=\"manage-assignment-btn-container\">\n        <button type=\"button\" name=\"button\" class=\"manage-assignment-btn\" (click)='bulkUpload()'>Upload\n          Solution</button>\n      </div>\n    </div>\n  </section>\n\n  <section>\n    <div class=\"list-table-container\">\n      <div class=\"list-header-container\">\n        <div class=\"list-header-item small-item field-checkbox-wrapper\" style=\"background: transparent;\">\n          <input type=\"checkbox\" value=\"\" name=\"check\" [checked]=\"isAllChecked()\" (change)=\"selectAllRows($event)\"\n            class=\"form-checkbox\">\n          <label></label>\n        </div>\n        <div class=\"list-header-item small-item\">\n          <span>Student Id</span>\n        </div>\n        <div class=\"list-header-item small-item\">\n          <span>Student Name</span>\n        </div>\n        <div class=\"list-header-item small-item\">\n          <span>Phone Number</span>\n        </div>\n        <div class=\"list-header-item small-item\">\n          <span>Status</span>\n        </div>\n        <div class=\"list-header-item small-item align-center\">\n          <span>Action</span>\n        </div>\n      </div>\n      <div class=\"list-value-outer-container\">\n        <div class=\"list-value-container\" *ngFor=\"let student of tempStudentList\" [class.selected]=\"i == selectedRow\">\n          <div class=\"list-value-item small-item field-checkbox-wrapper\">\n            <input type=\"checkbox\" name=\"recordcb[]\" value=\"\" name=\"check\" class=\"rowCheckbox form-checkbox\"\n              [(ngModel)]=\"student.uiSelected\" (ngModelChange)=\"rowCheckboxChange(student)\">\n            <label></label>\n          </div>\n          <div class=\"list-value-item small-item\">\n            <span>{{student.student_display_id}}</span>\n          </div>\n          <div class=\"list-value-item small-item\">\n            <span>{{student.student_name}}</span>\n          </div>\n          <div class=\"list-value-item small-item\">\n            <span\n              title=\"{{student?.student_phone}}\">{{ (!student.student_phone) ? '-' : (student.student_phone.length > 25) ? (student.student_phone | slice:0:25) + '...' : student.student_phone}}</span>\n          </div>\n          <div class=\"list-value-item small-item\">\n            <span\n              title=\"{{student?.student_status}}\">{{ (!student.student_status) ? '-' : (student.student_status.length > 25) ? (student.student_status | slice:0:25) + '...' : student.student_status}}</span>\n          </div>\n          <div class=\"list-value-item small-item align-center\" style=\"display: flex;justify-content: center;\">\n            <button type=\"button\" name=\"button\" class=\"status-btn\" [disabled]=\"(student.student_status!='Submitted' || student.teacher_status == 'Evaluated') || !assignmentDetails?.show_evaluate\" (click)=\"updateStatus(student)\">\n              {{student.teacher_status == 'Evaluated' ? 'Evaluated' : 'Evaluate'}}\n            </button>\n          </div>\n        </div>\n        <div class=\"no-records\" *ngIf=\"tempStudentList?.length  == 0\">\n          <span>No Records Found</span>\n        </div>\n      </div>\n    </div>\n  </section>");

/***/ }),

/***/ "./src/app/components/course-module/online-assignment/list-assignment/list-assignment.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/components/course-module/online-assignment/list-assignment/list-assignment.component.scss ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".middle-section {\n  padding: 1%;\n}\n\n.filter-container {\n  display: flex;\n  flex-direction: row;\n  margin: 10px 0;\n  justify-content: flex-end;\n}\n\n.filter-container .search-filter-wrapper {\n  position: relative;\n  margin: 0 10px;\n}\n\n.filter-container .search-filter-wrapper i {\n  position: absolute;\n  right: 15px;\n  padding: 7px 9px;\n  top: 1px;\n  background: white;\n  pointer-events: none;\n}\n\n.filter-container .search-filter-wrapper .normal-field {\n  padding: 7px 10px;\n  border: 1px solid #ccc;\n  box-sizing: border-box;\n  margin: 0;\n  height: 35px;\n  font-size: 14px;\n  border-radius: 4px;\n}\n\n.filter-container .manage-assignment-btn-container {\n  margin: 0 10px;\n  margin-right: 0;\n}\n\n.filter-container .manage-assignment-btn-container .manage-assignment-btn {\n  background: white;\n  border-radius: 4px;\n  border: 1px solid #0084f6;\n  outline: none;\n  text-align: center;\n  padding: 8px 10px;\n  height: 35px;\n  font-weight: 600;\n  color: #0084f6;\n  box-shadow: 0px 0px 1px #0084f6;\n}\n\n.btn {\n  background: #0084f6;\n  color: white;\n}\n\n.list-table-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n\n.list-table-container .list-header-container {\n  border-top: 1px solid #ccc;\n  border-bottom: 1px solid #ccc;\n  background-color: #e0eaec !important;\n  display: flex;\n  flex-direction: row;\n  font-size: 12px;\n  font-weight: 600;\n  text-align: left;\n  padding: 10px;\n  padding-left: 15px;\n  margin-bottom: 10px;\n}\n\n.list-table-container .list-header-container .list-header-item {\n  color: black;\n}\n\n.list-table-container .list-value-outer-container {\n  display: flex;\n  flex-direction: column;\n  border-top: none;\n  min-height: 48vh;\n  max-height: 48vh;\n  overflow-y: auto;\n}\n\n.list-table-container .list-value-outer-container .list-value-container {\n  display: flex;\n  flex-direction: row;\n  text-align: left;\n  background: #ffffff;\n  border-radius: 4px;\n  margin-bottom: 10px;\n  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);\n}\n\n.list-table-container .list-value-outer-container .list-value-container .list-value-item {\n  color: black;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 1.5;\n  display: -webkit-box;\n  -webkit-box-align: center;\n  word-break: break-all;\n  padding: 10px;\n}\n\n.list-table-container .small-item {\n  width: 10%;\n}\n\n.list-table-container .v-small-item {\n  width: 8%;\n}\n\n.list-table-container .medium-item {\n  width: 15%;\n}\n\n.list-table-container .align-center {\n  text-align: center;\n}\n\n.list-table-container .align-right {\n  text-align: right;\n}\n\n.list-table-container .no-records {\n  display: block;\n  text-align: center;\n  padding: 10px;\n  font-size: 14px;\n  font-weight: 600;\n}\n\n.list-table-container .border-draft-class {\n  border-left: 5px solid #8d8d8d;\n}\n\n.list-table-container .border-published-class {\n  border-left: 5px solid #00b55a;\n}\n\n.list-table-container .action-container {\n  display: flex;\n  justify-content: center;\n}\n\n.list-table-container .action-container .fa {\n  margin: 0px 5px;\n  max-width: 14px;\n  height: 14px;\n  cursor: pointer;\n}\n\n.action-drop {\n  border: 1px solid #ccc;\n  width: 100px;\n}\n\n.field-wrapper {\n  padding-top: 0px;\n}\n\n.field-wrapper input {\n  padding: 7px 10px;\n  border: 1px solid #ccc;\n  box-sizing: border-box;\n  margin: 0;\n  height: 35px;\n  font-size: 14px;\n  border-radius: 4px;\n  width: 230px;\n}\n\n.field-wrapper.datePickerBox:after {\n  content: '';\n  background: url(/./assets/images/calendar.svg) no-repeat;\n  position: absolute;\n  right: 5px;\n  top: 5px;\n  width: 21px;\n  height: 21px;\n  z-index: 0;\n}\n\n.dropdown-menu {\n  position: absolute;\n  top: -.5rem;\n  left: -9.5rem;\n  min-width: 160px;\n}\n\n.dropdown-menu .dropdown-item {\n  padding: .4em 1em;\n  border-right: 1pt solid #eee;\n  color: black;\n  display: flex;\n  cursor: pointer;\n  color: #0084f6;\n}\n\n.dropdown-menu .dropdown-item .fa-trash {\n  color: red;\n}\n\n.dropdown-menu .dropdown-item:hover {\n  color: white;\n  background: #0084f6;\n}\n\n.questionInfo {\n  position: relative;\n  left: 55%;\n  top: -13px;\n  height: 20px;\n  width: 20px;\n  z-index: 2;\n}\n\n.questionInfo.lefts {\n  left: 80%;\n}\n\n.questionInfo.lefts .tooltip-box-field {\n  color: black;\n  min-height: 22px;\n  width: 140px !important;\n  left: -135px !important;\n  z-index: 1;\n  padding: 5px 10px !important;\n  top: -12px !important;\n}\n\n.questionInfo.lefts .tooltip-box-field:after {\n  display: none;\n}\n\n.questionInfo .qInfoIcon {\n  margin-left: 5px;\n  width: 20px;\n  height: 20px;\n  border: 1px solid #ccc;\n  border-radius: 50%;\n  display: block;\n  text-align: center;\n  box-sizing: border-box;\n  line-height: 20px;\n  font-weight: 600;\n  font-size: 12px;\n  cursor: pointer;\n  box-shadow: 0px 0px 1px 0px #ccc inset;\n  color: #888;\n  transition: all 0.2s linear;\n}\n\n.questionInfo .qInfoIcon:hover {\n  border-color: #0084f6;\n  box-shadow: 0px 0px 1px 0px #0084f6 inset;\n}\n\n.questionInfo.hover.lefts {\n  left: 80%;\n}\n\n.questionInfo.hover.lefts .tooltip-box-field {\n  color: black;\n  min-height: 22px;\n  width: 140px !important;\n  left: -135px !important;\n  z-index: 1;\n  padding: 5px 10px !important;\n  top: -12px !important;\n}\n\n.questionInfo.hover.lefts .tooltip-box-field:after {\n  display: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb3Vyc2UtbW9kdWxlL29ubGluZS1hc3NpZ25tZW50L2xpc3QtYXNzaWdubWVudC9saXN0LWFzc2lnbm1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCx5QkFBeUI7QUFDM0I7O0FBTEE7RUFNSSxrQkFBa0I7RUFDbEIsY0FBYztBQUdsQjs7QUFWQTtFQVNNLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLFFBQVE7RUFDUixpQkFBaUI7RUFDakIsb0JBQW9CO0FBSzFCOztBQW5CQTtFQWlCUSxpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0I7QUFNMUI7O0FBN0JBO0VBMkJJLGNBQWM7RUFDZCxlQUFlO0FBTW5COztBQWxDQTtFQThCTSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGNBQWM7RUFFZCwrQkFBK0I7QUFRckM7O0FBSEE7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtBQU1kOztBQUhBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0FBTWI7O0FBVEE7RUFLSSwwQkFBMEI7RUFDMUIsNkJBQTZCO0VBQzdCLG9DQUFvQztFQUNwQyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBUXZCOztBQXZCQTtFQWlCTSxZQUFZO0FBVWxCOztBQTNCQTtFQXNCSSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQVNwQjs7QUFwQ0E7RUE2Qk0sYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsMkNBQTJDO0FBV2pEOztBQTlDQTtFQXNDUSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsYUFBYTtBQVlyQjs7QUF6REE7RUFrREksVUFBVTtBQVdkOztBQTdEQTtFQXFESSxTQUFTO0FBWWI7O0FBakVBO0VBd0RJLFVBQVU7QUFhZDs7QUFyRUE7RUEyREksa0JBQWtCO0FBY3RCOztBQXpFQTtFQThESSxpQkFBaUI7QUFlckI7O0FBN0VBO0VBaUVJLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGVBQWU7RUFDZixnQkFBZ0I7QUFnQnBCOztBQXJGQTtFQXlFSSw4QkFBOEI7QUFnQmxDOztBQXpGQTtFQTRFSSw4QkFBOEI7QUFpQmxDOztBQTdGQTtFQStFSSxhQUFhO0VBQ2IsdUJBQXVCO0FBa0IzQjs7QUFsR0E7RUFrRk0sZUFBZTtFQUNmLGVBQWU7RUFDZixZQUFZO0VBQ1osZUFBZTtBQW9CckI7O0FBYkE7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtBQWdCZDs7QUFiQTtFQUNFLGdCQUFnQjtBQWdCbEI7O0FBakJBO0VBR0ksaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsU0FBUztFQUNULFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFlBQVk7QUFrQmhCOztBQWRBO0VBQ0UsV0FBVztFQUNYLHdEQUF3RDtFQUN4RCxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFFBQVE7RUFDUixXQUFXO0VBQ1gsWUFBWTtFQUNaLFVBQVU7QUFpQlo7O0FBZkE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGFBQWE7RUFDYixnQkFBZ0I7QUFrQmxCOztBQXRCQTtFQU9JLGlCQUFpQjtFQUNqQiw0QkFBNEI7RUFDNUIsWUFBWTtFQUNaLGFBQWE7RUFDYixlQUFlO0VBQ2YsY0FBYztBQW1CbEI7O0FBL0JBO0VBY00sVUFBVTtBQXFCaEI7O0FBbkNBO0VBa0JNLFlBQVk7RUFDWixtQkFBbUI7QUFxQnpCOztBQWJBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsWUFBWTtFQUNaLFdBQVc7RUFDWCxVQUFVO0FBZ0JaOztBQXRCQTtFQVFNLFNBQVM7QUFrQmY7O0FBMUJBO0VBVVUsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLFVBQVU7RUFDViw0QkFBNEI7RUFDNUIscUJBQXFCO0FBb0IvQjs7QUFwQ0E7RUFrQmMsYUFBYTtBQXNCM0I7O0FBeENBO0VBdUJNLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZUFBZTtFQUNmLHNDQUFzQztFQUN0QyxXQUFXO0VBQ1gsMkJBQTJCO0FBcUJqQzs7QUExREE7RUF1Q1UscUJBQXFCO0VBQ3JCLHlDQUF5QztBQXVCbkQ7O0FBL0RBO0VBNkNVLFNBQVM7QUFzQm5COztBQW5FQTtFQStDYyxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsVUFBVTtFQUNWLDRCQUE0QjtFQUM1QixxQkFBcUI7QUF3Qm5DOztBQTdFQTtFQXVEa0IsYUFBYTtBQTBCL0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvdXJzZS1tb2R1bGUvb25saW5lLWFzc2lnbm1lbnQvbGlzdC1hc3NpZ25tZW50L2xpc3QtYXNzaWdubWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5taWRkbGUtc2VjdGlvbntcbiAgICBwYWRkaW5nOiAxJTtcbn1cblxuLmZpbHRlci1jb250YWluZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIG1hcmdpbjogMTBweCAwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAuc2VhcmNoLWZpbHRlci13cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luOiAwIDEwcHg7XG4gICAgaSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICByaWdodDogMTVweDtcbiAgICAgIHBhZGRpbmc6IDdweCA5cHg7XG4gICAgICB0b3A6IDFweDtcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICB9XG4gICAgLm5vcm1hbC1maWVsZCB7XG4gICAgICAgIHBhZGRpbmc6IDdweCAxMHB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgfVxuICB9XG4gIC5tYW5hZ2UtYXNzaWdubWVudC1idG4tY29udGFpbmVye1xuICAgIG1hcmdpbjogMCAxMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAubWFuYWdlLWFzc2lnbm1lbnQtYnRue1xuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDA4NGY2O1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDhweCAxMHB4O1xuICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGNvbG9yOiAjMDA4NGY2O1xuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDFweCAjMDA4NGY2O1xuICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggIzAwODRmNjtcbiAgICB9XG4gIH1cblxufVxuLmJ0biB7XG4gIGJhY2tncm91bmQ6ICMwMDg0ZjY7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmxpc3QtdGFibGUtY29udGFpbmVye1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbiAgLmxpc3QtaGVhZGVyLWNvbnRhaW5lcntcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2NjYztcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlYWVjICFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAubGlzdC1oZWFkZXItaXRlbXtcbiAgICAgIGNvbG9yOiBibGFjaztcbiAgICB9XG4gIH1cblxuICAubGlzdC12YWx1ZS1vdXRlci1jb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgbWluLWhlaWdodDogNDh2aDtcbiAgICBtYXgtaGVpZ2h0OiA0OHZoO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgLmxpc3QtdmFsdWUtY29udGFpbmVye1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICBib3gtc2hhZG93OiAwIDNweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICAgICAgLy8gcGFkZGluZzogMTBweDtcbiAgICAgIC5saXN0LXZhbHVlLWl0ZW17XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAuc21hbGwtaXRlbXtcbiAgICB3aWR0aDogMTAlO1xuICB9XG4gIC52LXNtYWxsLWl0ZW17XG4gICAgd2lkdGg6IDglO1xuICB9XG4gIC5tZWRpdW0taXRlbXtcbiAgICB3aWR0aDogMTUlO1xuICB9XG4gIC5hbGlnbi1jZW50ZXJ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5hbGlnbi1yaWdodHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgfVxuICAubm8tcmVjb3Jkc3tcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgfVxuXG4gIC5ib3JkZXItZHJhZnQtY2xhc3N7XG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjOGQ4ZDhkO1xuICB9XG4gIC5ib3JkZXItcHVibGlzaGVkLWNsYXNze1xuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzAwYjU1YTtcbiAgfVxuICAuYWN0aW9uLWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIC5mYXtcbiAgICAgIG1hcmdpbjogMHB4IDVweDtcbiAgICAgIG1heC13aWR0aDogMTRweDtcbiAgICAgIGhlaWdodDogMTRweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgIH1cbiAgfVxuXG59XG5cbi5hY3Rpb24tZHJvcHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgd2lkdGg6IDEwMHB4O1xufVxuXG4uZmllbGQtd3JhcHBlcntcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgaW5wdXR7XG4gICAgcGFkZGluZzogN3B4IDEwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIG1hcmdpbjogMDtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICB3aWR0aDogMjMwcHg7XG4gIH1cbn1cblxuLmZpZWxkLXdyYXBwZXIuZGF0ZVBpY2tlckJveDphZnRlciB7XG4gIGNvbnRlbnQ6ICcnO1xuICBiYWNrZ3JvdW5kOiB1cmwoLy4vYXNzZXRzL2ltYWdlcy9jYWxlbmRhci5zdmcpIG5vLXJlcGVhdDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNXB4O1xuICB0b3A6IDVweDtcbiAgd2lkdGg6IDIxcHg7XG4gIGhlaWdodDogMjFweDtcbiAgei1pbmRleDogMDtcbn1cbi5kcm9wZG93bi1tZW51IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0uNXJlbTtcbiAgbGVmdDogLTkuNXJlbTtcbiAgbWluLXdpZHRoOiAxNjBweDtcblxuICAuZHJvcGRvd24taXRlbSB7XG4gICAgcGFkZGluZzogLjRlbSAxZW07XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHQgc29saWQgI2VlZTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6ICMwMDg0ZjY7XG4gICAgLmZhLXRyYXNoIHtcbiAgICAgIGNvbG9yOiByZWQ7XG4gICAgfVxuXG4gICAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBiYWNrZ3JvdW5kOiAjMDA4NGY2O1xuICAgICAgLy8gLmZhLXRyYXNoIHtcbiAgICAgIC8vICAgY29sb3I6IHdoaXRlO1xuICAgICAgLy8gfVxuICAgIH1cbiAgfVxufVxuXG4ucXVlc3Rpb25JbmZvIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiA1NSU7XG4gIHRvcDogLTEzcHg7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIHotaW5kZXg6IDI7XG4gICYubGVmdHMge1xuICAgICAgbGVmdDogODAlO1xuICAgICAgLnRvb2x0aXAtYm94LWZpZWxkIHtcbiAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgbWluLWhlaWdodDogMjJweDtcbiAgICAgICAgICB3aWR0aDogMTQwcHggIWltcG9ydGFudDtcbiAgICAgICAgICBsZWZ0OiAtMTM1cHggIWltcG9ydGFudDtcbiAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgdG9wOiAtMTJweCAhaW1wb3J0YW50O1xuICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgfVxuICAucUluZm9JY29uIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICB3aWR0aDogMjBweDtcbiAgICAgIGhlaWdodDogMjBweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAwcHggI2NjYyBpbnNldDtcbiAgICAgIGNvbG9yOiAjODg4O1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDA4NGY2O1xuICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDBweCAjMDA4NGY2IGluc2V0O1xuICAgICAgfVxuICB9XG4gICYuaG92ZXIge1xuICAgICAgJi5sZWZ0cyB7XG4gICAgICAgICAgbGVmdDogODAlO1xuICAgICAgICAgIC50b29sdGlwLWJveC1maWVsZCB7XG4gICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgICAgbWluLWhlaWdodDogMjJweDtcbiAgICAgICAgICAgICAgd2lkdGg6IDE0MHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgIGxlZnQ6IC0xMzVweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICB0b3A6IC0xMnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgIH1cbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/course-module/online-assignment/list-assignment/list-assignment.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/components/course-module/online-assignment/list-assignment/list-assignment.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: ListAssignmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListAssignmentComponent", function() { return ListAssignmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/authenticator.service */ "./src/app/services/authenticator.service.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_message_show_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/message-show.service */ "./src/app/services/message-show.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
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






let ListAssignmentComponent = /** @class */ (() => {
    let ListAssignmentComponent = class ListAssignmentComponent {
        constructor(msgService, httpService, router, auth) {
            this.msgService = msgService;
            this.httpService = httpService;
            this.router = router;
            this.auth = auth;
            // global variables
            this.jsonFlag = {
                isProfessional: false,
                institute_id: '',
            };
            this.assignmentList = [];
            this.tempAssignmnetList = [];
            this.allData = []; // used for pagination purpose
            this.startDate = new Date(moment__WEBPACK_IMPORTED_MODULE_5__().date(1).format("YYYY-MM-DD"));
            this.endDate = moment__WEBPACK_IMPORTED_MODULE_5__(new Date).format("YYYY-MM-DD");
            // FOR PAGINATION
            this.pageIndex = 1;
            this.displayBatchSize = 10;
            this.totalCount = 0;
            this.sizeArr = [20, 50, 100, 150, 200, 500];
            this.schoolModel = false;
            this.jsonFlag.institute_id = sessionStorage.getItem('institution_id');
            this.auth.schoolModel.subscribe(res => {
                this.schoolModel = false;
                if (res) {
                    this.schoolModel = true;
                }
            });
        }
        ngOnInit() {
            this.getAssignmentList();
        }
        getAssignmentList() {
            let obj = {
                "institute_id": this.jsonFlag.institute_id,
                "category_id": "255",
                "course_id": -1,
                "batch_id": -1,
                "subject_id": -1,
                "from_date": moment__WEBPACK_IMPORTED_MODULE_5__(this.startDate).format('YYYY-MM-DD'),
                "to_date": moment__WEBPACK_IMPORTED_MODULE_5__(this.endDate).format('YYYY-MM-DD'),
                "assignment_status": null
            };
            this.getAllAssignment(obj);
        }
        getAllAssignment(obj) {
            this.auth.showLoader();
            const url = `/api/v2/onlineAssignment/getAssignmentsDetail`;
            this.httpService.postData(url, obj).subscribe((res) => {
                this.auth.hideLoader();
                if (res.statusCode >= 200 && res.statusCode < 300) {
                    this.assignmentList = res.result;
                    this.tempAssignmnetList = res.result;
                    this.allData = res.result;
                    this.totalCount = this.allData.length;
                    this.pageIndex = 1;
                    this.fectchTableDataByPage(this.pageIndex);
                }
                else {
                    this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', res.message);
                }
            }, err => {
                this.auth.hideLoader();
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err);
            });
        }
        dateRangeChange(e) {
            this.startDate = moment__WEBPACK_IMPORTED_MODULE_5__(e[0]).format("YYYY-MM-DD");
            this.endDate = moment__WEBPACK_IMPORTED_MODULE_5__(e[1]).format("YYYY-MM-DD");
            let obj = {
                institute_id: this.jsonFlag.institute_id,
                category_id: "255",
                course_id: -1,
                batch_id: -1,
                subject_id: -1,
                from_date: this.startDate,
                to_date: this.endDate,
                assignment_status: null
            };
            this.getAllAssignment(obj);
        }
        searchDatabase() {
            this.assignmentList = this.tempAssignmnetList;
            if (this.searchText == undefined || this.searchText == null) {
                this.searchText = "";
            }
            else {
                let searchData = this.tempAssignmnetList.filter(item => Object.keys(item).some(k => item[k] != null && item[k].toString().toLowerCase().includes(this.searchText.toLowerCase())));
                this.assignmentList = searchData;
            }
        }
        viewSubmission(file_id) {
            this.router.navigate(['/view/course/online-assignment/review-assignment/' + file_id]);
        }
        editAssignment(file_id) {
            this.router.navigate(['/view/course/online-assignment/manage-assignment/' + file_id]);
        }
        deleteAssignment(file_id) {
            var prompt = confirm("Are you sure, you want to delete the assignment?");
            if (prompt) {
                this.auth.showLoader();
                let obj = {};
                const url = `/api/v2/onlineAssignment/delete/${this.jsonFlag.institute_id}/${file_id}`;
                this.httpService.deleteData(url, obj).subscribe((res) => {
                    if (res.statusCode >= "200" && res.statusCode < "300") {
                        this.msgService.showErrorMessage('success', '', 'Assignment deleted successfully');
                        this.getAssignmentList();
                        this.router.navigate(['/view/course/online-assignment']);
                    }
                    else {
                        this.msgService.showErrorMessage('error', '', res.message);
                    }
                    this.auth.hideLoader();
                }, err => {
                    this.auth.hideLoader();
                    this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err);
                });
            }
        }
        /*** pagination functions */
        /* Fetch next set of data from server and update table */
        fetchNext() {
            this.pageIndex++;
            this.fectchTableDataByPage(this.pageIndex);
        }
        /* Fetch previous set of data from server and update table */
        fetchPrevious() {
            this.pageIndex--;
            this.fectchTableDataByPage(this.pageIndex);
        }
        /* Fetch table data by page index */
        fectchTableDataByPage(index) {
            this.pageIndex = index;
            let startindex = this.displayBatchSize * (index - 1);
            this.assignmentList = this.getDataFromDataSource(startindex);
        }
        // get  appropriate course planner data according to page
        getDataFromDataSource(startindex) {
            let t = this.allData.slice(startindex, startindex + this.displayBatchSize);
            return t;
        }
        /* Fetches Data as per the user selected batch size */
        updateTableBatchSize(num) {
            this.pageIndex = 1;
            this.displayBatchSize = parseInt(num);
            this.getAssignmentList();
        }
    };
    ListAssignmentComponent.ctorParameters = () => [
        { type: _services_message_show_service__WEBPACK_IMPORTED_MODULE_4__["MessageShowService"] },
        { type: _services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticatorService"] }
    ];
    ListAssignmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-assignment',
            template: __importDefault(__webpack_require__(/*! raw-loader!./list-assignment.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/online-assignment/list-assignment/list-assignment.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./list-assignment.component.scss */ "./src/app/components/course-module/online-assignment/list-assignment/list-assignment.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_services_message_show_service__WEBPACK_IMPORTED_MODULE_4__["MessageShowService"],
            _services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticatorService"]])
    ], ListAssignmentComponent);
    return ListAssignmentComponent;
})();



/***/ }),

/***/ "./src/app/components/course-module/online-assignment/manage-assignment/manage-assignment.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/components/course-module/online-assignment/manage-assignment/manage-assignment.component.scss ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".middle-section {\n  padding: 1%;\n}\n\n/* Chrome, Safari, Edge, Opera */\n\ninput::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n/* Firefox */\n\ninput[type=number] {\n  -moz-appearance: textfield;\n}\n\ninput, textarea, select, option, label {\n  font-size: 12px;\n}\n\n.multiselect-dropdown {\n  font-size: 12px;\n}\n\n.manage-assignment-btn {\n  background: white;\n  border-radius: 4px;\n  border: 1px solid #0084f6;\n  outline: none;\n  text-align: center;\n  padding: 8px 20px;\n  height: 35px;\n  font-weight: 600;\n  color: #0084f6;\n  box-shadow: 0px 0px 1px #0084f6;\n}\n\n.manage-assignment-container {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  border-top: 1px solid #e0e0e0;\n  padding-top: 10px;\n  margin-top: 10px;\n  height: 71vh;\n  max-height: 86vh;\n  overflow-y: auto;\n}\n\n.manage-assignment-container .assignment-details {\n  width: 70%;\n  display: flex;\n  flex-direction: column;\n  margin-top: 10px;\n  color: black;\n}\n\n.manage-assignment-container .assignment-details .assignment-details-item {\n  width: 70%;\n  margin-bottom: 10px;\n  display: flex;\n  position: relative;\n}\n\n.manage-assignment-container .assignment-details .assignment-details-item .assignment-input {\n  width: 100%;\n  border: 1px solid #e0e0e0;\n  padding: 6px;\n  border-radius: 4px;\n}\n\n.manage-assignment-container .assignment-details .assignment-details-item .assignment-textarea {\n  border: 1px solid #e0e0e0;\n  padding: 6px;\n  border-radius: 4px;\n}\n\n.manage-assignment-container .assignment-details .assignment-details-item .field-checkbox-wrapper, .manage-assignment-container .assignment-details .assignment-details-item .field-radio-wrapper {\n  position: relative;\n  padding-left: 25px;\n  margin-bottom: 10px;\n  margin-top: 10px;\n}\n\n.manage-assignment-container .assignment-details .assignment-details-item .marks-container {\n  margin-left: 40px;\n}\n\n.manage-assignment-container .assignment-details .assignment-details-item .marks-container input {\n  width: 75%;\n  border: 1px solid #e0e0e0;\n  padding: 10px;\n  border-radius: 4px;\n}\n\n.manage-assignment-container .assignment-details .assignment-details-item .add-btn {\n  background: white;\n  color: #202124;\n  display: flex;\n  border: 1px solid #ccc;\n  padding: 10px;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\n.manage-assignment-container .assignment-details .assignment-details-item .add-btn .add-btn-svg {\n  box-align: center;\n  align-items: center;\n  display: flex;\n  color: currentcolor;\n  fill: currentcolor;\n  margin-right: 8px;\n}\n\n.manage-assignment-container .assignment-details .assignment-details-item .add-btn .add-btn-svg svg {\n  height: 1.125rem;\n  width: 1.125rem;\n}\n\n.manage-assignment-container .assignment-details .assignment-details-item .add-btn .add-btn-text {\n  display: inline-block;\n  margin: 0;\n  overflow: hidden;\n}\n\n.manage-assignment-container .assignment-details .assignment-details-item .attachment-container {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  background: white;\n  box-shadow: 0 3px 6px #ccc;\n  border-radius: 4px;\n  width: 20%;\n  top: 45px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.87);\n}\n\n.manage-assignment-container .assignment-details .assignment-details-item .attachment-container .attachment-item-container {\n  padding: 6px;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.manage-assignment-container .assignment-details .assignment-details-item .attachment-container .attachment-item-container .fa {\n  margin-right: 5px;\n}\n\n.manage-assignment-container .assignment-details .assignment-details-item .attachment-container .attachment-item-container:hover {\n  background: #5f6368;\n  color: white;\n}\n\n.manage-assignment-container .assignment-details .assignment-details-item .attachment-container .attachment-item-container:hover .fa {\n  color: white;\n}\n\n.manage-assignment-container .date-time {\n  display: flex;\n  flex-direction: column;\n  width: 50%;\n  position: relative;\n}\n\n.manage-assignment-container .made-out {\n  border: 1px solid #efefef;\n  text-align: center;\n  padding: 5px;\n  border-radius: 4px;\n  width: 30%;\n}\n\n.manage-assignment-container .datepicker1 {\n  width: 45%;\n  margin: 10px 0;\n}\n\n.manage-assignment-container .time-container {\n  display: flex;\n  flex-direction: row;\n  width: 50%;\n}\n\n.manage-assignment-container .upload-docs-btn {\n  background: #0084f6;\n  color: white;\n  padding: 6px 10px;\n  border: 2px solid #0084f6;\n  box-shadow: none;\n  border-radius: 4px;\n  margin-left: 10px;\n  font-size: 12px;\n}\n\n.manage-assignment-container .upload-file {\n  width: 60%;\n  margin: 0 10px;\n}\n\n.manage-assignment-container .url {\n  width: 40%;\n}\n\n.manage-assignment-container .attachment-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding: 10px 0;\n}\n\n.manage-assignment-container .attachment-container .link-attachment-container, .manage-assignment-container .attachment-container .file-attachment-container {\n  display: flex;\n  flex-direction: column;\n  width: 70%;\n}\n\n.manage-assignment-container .attachment-container .link-attachment-container .link-attachment-item, .manage-assignment-container .attachment-container .link-attachment-container .file-attachment-item, .manage-assignment-container .attachment-container .file-attachment-container .link-attachment-item, .manage-assignment-container .attachment-container .file-attachment-container .file-attachment-item {\n  margin-bottom: 10px;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  padding: 10px;\n  border: 1px solid #e0e0e0;\n  border-radius: 4px;\n}\n\n.manage-assignment-container .attachment-container .link-attachment-container .link-attachment-item .fa, .manage-assignment-container .attachment-container .link-attachment-container .file-attachment-item .fa, .manage-assignment-container .attachment-container .file-attachment-container .link-attachment-item .fa, .manage-assignment-container .attachment-container .file-attachment-container .file-attachment-item .fa {\n  width: 24px;\n}\n\n.manage-assignment-container .attachment-container .link-attachment-container .link-attachment-item .fa-times, .manage-assignment-container .attachment-container .link-attachment-container .file-attachment-item .fa-times, .manage-assignment-container .attachment-container .file-attachment-container .link-attachment-item .fa-times, .manage-assignment-container .attachment-container .file-attachment-container .file-attachment-item .fa-times {\n  cursor: pointer;\n}\n\n.manage-assignment-container .attachment-container .link-attachment-container .link-attachment-item span, .manage-assignment-container .attachment-container .link-attachment-container .file-attachment-item span, .manage-assignment-container .attachment-container .file-attachment-container .link-attachment-item span, .manage-assignment-container .attachment-container .file-attachment-container .file-attachment-item span {\n  width: 92%;\n}\n\n.manage-assignment-container .course-details {\n  width: 30%;\n  border-left: 1px solid #e0e0e0;\n  display: flex;\n  flex-direction: column;\n  margin-top: 10px;\n  color: black;\n}\n\n.manage-assignment-container .course-details .course-details-item {\n  margin-bottom: 7px;\n  display: flex;\n  flex-direction: column;\n  width: 80%;\n  margin-left: 10%;\n}\n\n.manage-assignment-container .course-details .course-details-item .course-input {\n  width: 100%;\n  border: 1px solid #e0e0e0;\n  padding: 6px;\n  border-radius: 4px;\n}\n\n.action-btn-container {\n  margin: 10px;\n  border-top: 1px solid #e0e0e0;\n  display: flex;\n  justify-content: flex-end;\n  position: fixed;\n  bottom: 0px;\n  width: 86%;\n  margin-bottom: 0px;\n}\n\n.action-btn-container .action-btn {\n  margin: 10px;\n}\n\n.multiselect-dropdown {\n  font-size: 12px !important;\n}\n\n.multiselect-dropdown .dropdown-down {\n  border-top: 5px solid black;\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n}\n\n.multiselect-dropdown .dropdown-up {\n  border-bottom: 5px solid black;\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n}\n\n.dropdown {\n  width: 100% !important;\n  padding: 0px !important;\n}\n\n.tags .dropdown {\n  width: 60% !important;\n  padding: 0px !important;\n}\n\n.dropdown-div .tags-dropdown {\n  width: 50%;\n  height: 30px;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n}\n\n.pt-2 {\n  padding-top: 2px;\n}\n\n.tag-detail-container {\n  /*  margin-top: 15px; */\n}\n\n.p-0-5 {\n  padding: 0 5px !important;\n}\n\ninput[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n.field-wrapper .form-ctrl {\n  border-radius: 4px;\n  border-color: #ccc;\n}\n\n.field-wrapper.datePickerBox:after {\n  content: '';\n  background: url(/./assets/images/calendar.svg) no-repeat;\n  position: absolute;\n  right: 58%;\n  top: 38px;\n  width: 21px;\n  height: 21px;\n  z-index: 0;\n}\n\n.field-checkbox-wrapper .form-checkbox + label {\n  font-size: 12px;\n}\n\n.ng-multiselect-dropdown .multiselect-dropdown {\n  font-size: 12px !important;\n}\n\n.questionInfo {\n  position: relative;\n  left: 55%;\n  top: -13px;\n  height: 20px;\n  width: 20px;\n  z-index: 2;\n}\n\n.questionInfo.lefts {\n  left: 80%;\n}\n\n.questionInfo.lefts .tooltip-box-field {\n  color: black;\n  min-height: 22px;\n  width: 140px !important;\n  left: -135px !important;\n  z-index: 1;\n  padding: 5px 10px !important;\n  top: -12px !important;\n}\n\n.questionInfo.lefts .tooltip-box-field:after {\n  display: none;\n}\n\n.questionInfo .qInfoIcon {\n  margin-left: 5px;\n  width: 20px;\n  height: 20px;\n  border: 1px solid #ccc;\n  border-radius: 50%;\n  display: block;\n  text-align: center;\n  box-sizing: border-box;\n  line-height: 20px;\n  font-weight: 600;\n  font-size: 12px;\n  cursor: pointer;\n  box-shadow: 0px 0px 1px 0px #ccc inset;\n  color: #888;\n  transition: all 0.2s linear;\n}\n\n.questionInfo .qInfoIcon:hover {\n  border-color: #0084f6;\n  box-shadow: 0px 0px 1px 0px #0084f6 inset;\n}\n\n.questionInfo.hover.lefts {\n  left: 80%;\n}\n\n.questionInfo.hover.lefts .tooltip-box-field {\n  color: black;\n  min-height: 22px;\n  width: 140px !important;\n  left: -135px !important;\n  z-index: 1;\n  padding: 5px 10px !important;\n  top: -12px !important;\n}\n\n.questionInfo.hover.lefts .tooltip-box-field:after {\n  display: none;\n}\n\n.EvaluationDate.datePickerBox:after {\n  top: 52px;\n}\n\n:disabled {\n  cursor: no-drop !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb3Vyc2UtbW9kdWxlL29ubGluZS1hc3NpZ25tZW50L21hbmFnZS1hc3NpZ25tZW50L21hbmFnZS1hc3NpZ25tZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVztBQUNmOztBQUNBLGdDQUFBOztBQUNBOztFQUVFLHdCQUF3QjtFQUN4QixTQUFTO0FBRVg7O0FBQ0EsWUFBQTs7QUFDQTtFQUNFLDBCQUF5QjtBQUUzQjs7QUFBQTtFQUNFLGVBQWU7QUFHakI7O0FBREE7RUFDRSxlQUFlO0FBSWpCOztBQUZBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixjQUFjO0VBRWQsK0JBQStCO0FBS2pDOztBQUhBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsNkJBQTZCO0VBQzdCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFNbEI7O0FBZkE7RUFXSSxVQUFVO0VBQ1YsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsWUFBWTtBQVFoQjs7QUF2QkE7RUFpQk0sVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isa0JBQWtCO0FBVXhCOztBQTlCQTtFQXNCUSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixrQkFBa0I7QUFZMUI7O0FBckNBO0VBNEJRLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osa0JBQWtCO0FBYTFCOztBQTNDQTtFQWlDUSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFjeEI7O0FBbERBO0VBdUNRLGlCQUFpQjtBQWV6Qjs7QUF0REE7RUF5Q1UsVUFBVTtFQUNWLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2Isa0JBQWtCO0FBaUI1Qjs7QUE3REE7RUFnRFEsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsZUFBZTtBQWlCdkI7O0FBdkVBO0VBeURVLGlCQUFpQjtFQUVqQixtQkFBbUI7RUFHbkIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBbUIzQjs7QUFwRkE7RUFtRVksZ0JBQWdCO0VBQ2hCLGVBQWU7QUFxQjNCOztBQXpGQTtFQXdFVSxxQkFBcUI7RUFDckIsU0FBUztFQUNULGdCQUFnQjtBQXFCMUI7O0FBL0ZBO0VBOEVRLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQiwwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixTQUFTO0VBQ1QsNENBQXlDO0FBcUJqRDs7QUEzR0E7RUF3RlUsWUFBWTtFQUNaLDBCQUF1QjtBQXVCakM7O0FBaEhBO0VBMkZZLGlCQUFpQjtBQXlCN0I7O0FBcEhBO0VBOEZZLG1CQUFtQjtFQUNuQixZQUFZO0FBMEJ4Qjs7QUF6SEE7RUFpR2MsWUFBWTtBQTRCMUI7O0FBN0hBO0VBMEdJLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLGtCQUFrQjtBQXVCdEI7O0FBcElBO0VBaUhJLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixVQUFVO0FBdUJkOztBQTVJQTtFQXdISSxVQUFVO0VBQ1YsY0FBYztBQXdCbEI7O0FBakpBO0VBNEhJLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsVUFBVTtBQXlCZDs7QUF2SkE7RUFpSUksbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixpQkFBaUI7RUFDakIseUJBQXlCO0VBRXpCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7QUEwQm5COztBQW5LQTtFQTZJSSxVQUFVO0VBQ1YsY0FBYztBQTBCbEI7O0FBeEtBO0VBaUpJLFVBQVU7QUEyQmQ7O0FBNUtBO0VBb0pJLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGVBQWU7QUE0Qm5COztBQW5MQTtFQXlKTSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFVBQVU7QUE4QmhCOztBQXpMQTtFQTZKUSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0IsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFnQzFCOztBQW5NQTtFQXFLVSxXQUFXO0FBa0NyQjs7QUF2TUE7RUF3S1UsZUFBZTtBQW1DekI7O0FBM01BO0VBMktVLFVBQVU7QUFvQ3BCOztBQS9NQTtFQWtMSSxVQUFVO0VBQ1YsOEJBQThCO0VBQzlCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFpQ2hCOztBQXhOQTtFQXlMTSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsZ0JBQWdCO0FBbUN0Qjs7QUFoT0E7RUErTFEsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osa0JBQWtCO0FBcUMxQjs7QUE5QkE7RUFDRSxZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLFdBQVc7RUFDWCxVQUFVO0VBQ1Ysa0JBQWtCO0FBaUNwQjs7QUF6Q0E7RUFVSSxZQUFZO0FBbUNoQjs7QUE5QkE7RUFDRSwwQkFBMEI7QUFpQzVCOztBQWxDQTtFQUdJLDJCQUEyQjtFQUMzQixrQ0FBa0M7RUFDbEMsbUNBQW1DO0FBbUN2Qzs7QUF4Q0E7RUFRSSw4QkFBOEI7RUFDOUIsa0NBQWtDO0VBQ2xDLG1DQUFtQztBQW9DdkM7O0FBaENBO0VBQ0Usc0JBQXNCO0VBQ3RCLHVCQUF1QjtBQW1DekI7O0FBakNBO0VBRUkscUJBQXFCO0VBQ3JCLHVCQUF1QjtBQW1DM0I7O0FBaENBO0VBRU0sVUFBVTtFQUNWLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBa0N4Qjs7QUEvQkM7RUFDSSxnQkFBZ0I7QUFrQ3JCOztBQWhDQztFQUNHLHVCQUFBO0FBbUNKOztBQWpDQztFQUNJLHlCQUF5QjtBQW9DOUI7O0FBbENBOztFQUVFLHdCQUF3QjtFQUN4QixTQUFTO0FBcUNYOztBQW5DQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFzQ3BCOztBQXBDQTtFQUNFLFdBQVc7RUFDWCx3REFBd0Q7RUFDeEQsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVk7RUFDWixVQUFVO0FBdUNaOztBQXJDQTtFQUNFLGVBQWU7QUF3Q2pCOztBQW5DQTtFQUNHLDBCQUF5QjtBQXNDNUI7O0FBbkNBO0VBQ0ksa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsWUFBWTtFQUNaLFdBQVc7RUFDWCxVQUFVO0FBc0NkOztBQTVDQTtFQVFRLFNBQVM7QUF3Q2pCOztBQWhEQTtFQVVZLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QixVQUFVO0VBQ1YsNEJBQTRCO0VBQzVCLHFCQUFxQjtBQTBDakM7O0FBMURBO0VBa0JnQixhQUFhO0FBNEM3Qjs7QUE5REE7RUF1QlEsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixlQUFlO0VBQ2Ysc0NBQXNDO0VBQ3RDLFdBQVc7RUFDWCwyQkFBMkI7QUEyQ25DOztBQWhGQTtFQXVDWSxxQkFBcUI7RUFDckIseUNBQXlDO0FBNkNyRDs7QUFyRkE7RUE2Q1ksU0FBUztBQTRDckI7O0FBekZBO0VBK0NnQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsVUFBVTtFQUNWLDRCQUE0QjtFQUM1QixxQkFBcUI7QUE4Q3JDOztBQW5HQTtFQXVEb0IsYUFBYTtBQWdEakM7O0FBMUNBO0VBRUksU0FBUztBQTRDYjs7QUF6Q0E7RUFDRSwwQkFBMEI7QUE0QzVCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb3Vyc2UtbW9kdWxlL29ubGluZS1hc3NpZ25tZW50L21hbmFnZS1hc3NpZ25tZW50L21hbmFnZS1hc3NpZ25tZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1pZGRsZS1zZWN0aW9ue1xuICAgIHBhZGRpbmc6IDElO1xufVxuLyogQ2hyb21lLCBTYWZhcmksIEVkZ2UsIE9wZXJhICovXG5pbnB1dDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcbmlucHV0Ojotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBtYXJnaW46IDA7XG59XG5cbi8qIEZpcmVmb3ggKi9cbmlucHV0W3R5cGU9bnVtYmVyXSB7XG4gIC1tb3otYXBwZWFyYW5jZTp0ZXh0ZmllbGQ7XG59XG5pbnB1dCwgdGV4dGFyZWEsIHNlbGVjdCwgb3B0aW9uLCBsYWJlbHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLm11bHRpc2VsZWN0LWRyb3Bkb3due1xuICBmb250LXNpemU6IDEycHg7XG59XG4ubWFuYWdlLWFzc2lnbm1lbnQtYnRue1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDA4NGY2O1xuICBvdXRsaW5lOiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDhweCAyMHB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMDA4NGY2O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMXB4ICMwMDg0ZjY7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMXB4ICMwMDg0ZjY7XG59XG4ubWFuYWdlLWFzc2lnbm1lbnQtY29udGFpbmVye1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlMGUwZTA7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBoZWlnaHQ6IDcxdmg7XG4gIG1heC1oZWlnaHQ6IDg2dmg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIC5hc3NpZ25tZW50LWRldGFpbHN7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgLmFzc2lnbm1lbnQtZGV0YWlscy1pdGVte1xuICAgICAgd2lkdGg6IDcwJTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgLmFzc2lnbm1lbnQtaW5wdXR7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xuICAgICAgICBwYWRkaW5nOiA2cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIH1cbiAgICAgIC5hc3NpZ25tZW50LXRleHRhcmVhe1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xuICAgICAgICBwYWRkaW5nOiA2cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIH1cbiAgICAgIC5maWVsZC1jaGVja2JveC13cmFwcGVyLCAuZmllbGQtcmFkaW8td3JhcHBlciB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgfVxuICAgICAgLm1hcmtzLWNvbnRhaW5lcntcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gICAgICAgIGlucHV0e1xuICAgICAgICAgIHdpZHRoOiA3NSU7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLmFkZC1idG57XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICBjb2xvcjogIzIwMjEyNDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIC5hZGQtYnRuLXN2Z3tcbiAgICAgICAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGJveC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGNvbG9yOiBjdXJyZW50Y29sb3I7XG4gICAgICAgICAgZmlsbDogY3VycmVudGNvbG9yO1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgICAgIHN2Z3tcbiAgICAgICAgICAgIGhlaWdodDogMS4xMjVyZW07XG4gICAgICAgICAgICB3aWR0aDogMS4xMjVyZW07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5hZGQtYnRuLXRleHR7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAuYXR0YWNobWVudC1jb250YWluZXJ7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCAjY2NjO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIHdpZHRoOiAyMCU7XG4gICAgICAgIHRvcDogNDVweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC44Nyk7XG4gICAgICAgIC5hdHRhY2htZW50LWl0ZW0tY29udGFpbmVye1xuICAgICAgICAgIHBhZGRpbmc6IDZweDtcbiAgICAgICAgICBjb2xvcjogcmdiYSgwLDAsMCwwLjg3KTtcbiAgICAgICAgICAuZmF7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgJjpob3ZlcntcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM1ZjYzNjg7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAuZmF7XG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuZGF0ZS10aW1le1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogNTAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuXG4gIC5tYWRlLW91dCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VmZWZlZjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICB3aWR0aDogMzAlO1xuICB9XG4gIC5kYXRlcGlja2VyMXtcbiAgICB3aWR0aDogNDUlO1xuICAgIG1hcmdpbjogMTBweCAwO1xuICB9XG4gIC50aW1lLWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxuICAudXBsb2FkLWRvY3MtYnRue1xuICAgIGJhY2tncm91bmQ6ICMwMDg0ZjY7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDZweCAxMHB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDg0ZjY7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxuXG4gIC51cGxvYWQtZmlsZXtcbiAgICB3aWR0aDogNjAlO1xuICAgIG1hcmdpbjogMCAxMHB4O1xuICB9XG4gIC51cmx7XG4gICAgd2lkdGg6IDQwJTtcbiAgfVxuICAuYXR0YWNobWVudC1jb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICAubGluay1hdHRhY2htZW50LWNvbnRhaW5lciwgLmZpbGUtYXR0YWNobWVudC1jb250YWluZXJ7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAubGluay1hdHRhY2htZW50LWl0ZW0sIC5maWxlLWF0dGFjaG1lbnQtaXRlbXtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIC5mYXtcbiAgICAgICAgICB3aWR0aDogMjRweDtcbiAgICAgICAgfVxuICAgICAgICAuZmEtdGltZXN7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICAgIHNwYW57XG4gICAgICAgICAgd2lkdGg6IDkyJTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5jb3Vyc2UtZGV0YWlsc3tcbiAgICB3aWR0aDogMzAlO1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2UwZTBlMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgLmNvdXJzZS1kZXRhaWxzLWl0ZW17XG4gICAgICBtYXJnaW4tYm90dG9tOiA3cHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIHdpZHRoOiA4MCU7XG4gICAgICBtYXJnaW4tbGVmdDogMTAlO1xuICAgICAgLmNvdXJzZS1pbnB1dHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XG4gICAgICAgIHBhZGRpbmc6IDZweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5cbi5hY3Rpb24tYnRuLWNvbnRhaW5lcntcbiAgbWFyZ2luOiAxMHB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2UwZTBlMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDBweDtcbiAgd2lkdGg6IDg2JTtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAuYWN0aW9uLWJ0bntcbiAgICBtYXJnaW46IDEwcHg7XG4gIH1cbn1cblxuXG4ubXVsdGlzZWxlY3QtZHJvcGRvd257XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICAuZHJvcGRvd24tZG93bntcbiAgICBib3JkZXItdG9wOiA1cHggc29saWQgYmxhY2s7XG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgfVxuICAuZHJvcGRvd24tdXB7XG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIH1cbn1cblxuLmRyb3Bkb3due1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cbi50YWdze1xuICAuZHJvcGRvd257XG4gICAgd2lkdGg6IDYwJSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICB9XG59XG4uZHJvcGRvd24tZGl2IHtcbiAgICAudGFncy1kcm9wZG93biB7XG4gICAgICB3aWR0aDogNTAlO1xuICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICB9XG4gfVxuIC5wdC0ye1xuICAgICBwYWRkaW5nLXRvcDogMnB4O1xuIH1cbiAudGFnLWRldGFpbC1jb250YWluZXJ7XG4gICAgLyogIG1hcmdpbi10b3A6IDE1cHg7ICovXG4gfVxuIC5wLTAtNXtcbiAgICAgcGFkZGluZzogMCA1cHggIWltcG9ydGFudDtcbiB9XG5pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXG5pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIG1hcmdpbjogMDtcbn1cbi5maWVsZC13cmFwcGVyIC5mb3JtLWN0cmx7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyLWNvbG9yOiAjY2NjO1xufVxuLmZpZWxkLXdyYXBwZXIuZGF0ZVBpY2tlckJveDphZnRlciB7XG4gIGNvbnRlbnQ6ICcnO1xuICBiYWNrZ3JvdW5kOiB1cmwoLy4vYXNzZXRzL2ltYWdlcy9jYWxlbmRhci5zdmcpIG5vLXJlcGVhdDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNTglO1xuICB0b3A6IDM4cHg7XG4gIHdpZHRoOiAyMXB4O1xuICBoZWlnaHQ6IDIxcHg7XG4gIHotaW5kZXg6IDA7XG59XG4uZmllbGQtY2hlY2tib3gtd3JhcHBlciAuZm9ybS1jaGVja2JveCArIGxhYmVse1xuICBmb250LXNpemU6IDEycHg7XG59XG46Om5nLWRlZXAgLmJzLWRhdGVwaWNrZXItY29udGFpbmVyLCAuYnMtZGF0ZXJhbmdlcGlja2VyLWNvbnRhaW5lcntcbiAgLy8gbWFyZ2luLWxlZnQ6IDEwJSAhaW1wb3J0YW50O1xufVxuLm5nLW11bHRpc2VsZWN0LWRyb3Bkb3duIC5tdWx0aXNlbGVjdC1kcm9wZG93bntcbiAgIGZvbnQtc2l6ZToxMnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5xdWVzdGlvbkluZm8ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiA1NSU7XG4gICAgdG9wOiAtMTNweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgei1pbmRleDogMjtcbiAgICAmLmxlZnRzIHtcbiAgICAgICAgbGVmdDogODAlO1xuICAgICAgICAudG9vbHRpcC1ib3gtZmllbGQge1xuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgbWluLWhlaWdodDogMjJweDtcbiAgICAgICAgICAgIHdpZHRoOiAxNDBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgbGVmdDogLTEzNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgcGFkZGluZzogNXB4IDEwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIHRvcDogLTEycHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnFJbmZvSWNvbiB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAwcHggI2NjYyBpbnNldDtcbiAgICAgICAgY29sb3I6ICM4ODg7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICMwMDg0ZjY7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAwcHggIzAwODRmNiBpbnNldDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAmLmhvdmVyIHtcbiAgICAgICAgJi5sZWZ0cyB7XG4gICAgICAgICAgICBsZWZ0OiA4MCU7XG4gICAgICAgICAgICAudG9vbHRpcC1ib3gtZmllbGQge1xuICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAyMnB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxNDBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGxlZnQ6IC0xMzVweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDEwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB0b3A6IC0xMnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuLkV2YWx1YXRpb25EYXRlLmRhdGVQaWNrZXJCb3h7XG4gICY6YWZ0ZXIge1xuICAgIHRvcDogNTJweDtcbiAgfVxufVxuOmRpc2FibGVkIHtcbiAgY3Vyc29yOiBuby1kcm9wICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/course-module/online-assignment/manage-assignment/manage-assignment.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/components/course-module/online-assignment/manage-assignment/manage-assignment.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: ManageAssignmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageAssignmentComponent", function() { return ManageAssignmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/authenticator.service */ "./src/app/services/authenticator.service.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_message_show_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/message-show.service */ "./src/app/services/message-show.service.ts");
/* harmony import */ var _data_setup_master_tag_master_tag_component_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data-setup/master-tag/master-tag.component.service */ "./src/app/components/course-module/data-setup/master-tag/master-tag.component.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
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







class fileObj {
    constructor(fileName, fileType, fileSize) {
        this.fileName = fileName;
        this.fileType = fileType;
        this.fileSize = this.getSizeMB(fileSize);
    }
    getSizeMB(size) {
        return size + "KB";
    }
    getSize() {
        return this.fileSize;
    }
}
let ManageAssignmentComponent = /** @class */ (() => {
    let ManageAssignmentComponent = class ManageAssignmentComponent {
        constructor(msgService, tagSrvc, httpService, auth, router) {
            this.msgService = msgService;
            this.tagSrvc = tagSrvc;
            this.httpService = httpService;
            this.auth = auth;
            this.router = router;
            this.jsonFlag = {
                isProfessional: false,
                institute_id: '',
                showHideColumn: false,
                type: 'course'
            };
            // new tags
            this.newTagName = '';
            this.newTagDescription = '';
            this.studentListSettings = {};
            this.tagsListSettings = {};
            this.selectedStudentList = [];
            this.selectedTagsList = [];
            this.assignment_status = "Publish";
            this.tagList = [];
            this.masterCourseList = [];
            this.courseList = [];
            this.subjectList = [];
            this.batchList = [];
            this.facultyList = [];
            this.courseModelList = [];
            this.batchModelList = [];
            this.studentsList = [];
            this.topicList = [];
            this.subTopicList = [];
            this.hour = ['01 AM', '02 AM', '03 AM', '04 AM', '05 AM', '06 AM', '07 AM', '08 AM', '09 AM', '10 AM', '11 AM', '12 PM', '01 PM', '02 PM', '03 PM', '04 PM', '05 PM', '06 PM', '07 PM', '08 PM', '09 PM', '10 PM', '11 PM', '12 AM'];
            this.minutes = ['00', '05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55'];
            this.assignmentDetails = {
                title: "",
                description: "",
                tags: [],
                marks: false,
                evaluation_marks: 0,
                lateSubmission: false,
                masterCourse: '-1',
                standard_id: '-1',
                course: "-1",
                subject: "-1",
                batch: "-1",
                topic: "-1",
                subtopic: "-1",
                students: [],
                teacher: "-1",
                startDate: moment__WEBPACK_IMPORTED_MODULE_5__(new Date).format('YYYY-MM-DD'),
                startHr: "12 AM",
                startMin: "00",
                endDate: moment__WEBPACK_IMPORTED_MODULE_5__(new Date).add(1, 'days').format('YYYY-MM-DD'),
                endHr: "12 AM",
                endMin: "00",
                urlLists: [],
                attachmentId_array: [],
                file_id: "-1",
                assignment_late_submission_date: '',
                enable_grade: false,
                evaluation_date: '',
                assignment_status: ''
            };
            this.addAttachment = false;
            this.showAttachments = true;
            this.showMarks = false;
            // File upload
            this.customFileArr = [];
            this.tempArr = [];
            this.urlDetails = {
                name: '',
                url: ''
            };
            this.selectedFiles = [];
            this.fileArray = [];
            // Edit Assignment
            this.sectionName = '';
            this.editFileId = '';
            this.editUrlList = [];
            this.editAttachmentList = [];
            this.removedAttachments = [];
            this.removedLinks = [];
            this.userType = 0;
            this.schoolModel = false;
            this.auth.institute_type.subscribe(res => {
                if (res == 'LANG') {
                    this.jsonFlag.isProfessional = true;
                    this.jsonFlag.type = 'batch';
                }
                else {
                    this.jsonFlag.isProfessional = false;
                    this.jsonFlag.type = 'course';
                }
            });
            this.auth.schoolModel.subscribe(res => {
                this.schoolModel = false;
                if (res) {
                    this.schoolModel = true;
                }
            });
            this.jsonFlag.institute_id = sessionStorage.getItem('institution_id');
        }
        ngOnInit() {
            const promises = [];
            let arr = [];
            this.userType = sessionStorage.getItem('userType');
            if (this.userType == 3) {
                this.assignmentDetails.teacher = sessionStorage.getItem('teacherIDs');
            }
            if (this.jsonFlag.isProfessional) {
                arr.push(this.getBatchList());
            }
            else {
                if (this.schoolModel) {
                    arr.push(this.getStandard());
                }
                else {
                    arr.push(this.getMasterCourse());
                }
            }
            arr.push(this.getFacultyList());
            arr.push(this.setMultiSelectSetting());
            arr.push(this.getTagList());
            // console.log("before promise")
            Promise.all(promises)
                .then(response => {
                let currentURL = window.location.href;
                if (currentURL.includes('create')) {
                    this.sectionName = 'Add';
                }
                else {
                    this.sectionName = 'Edit';
                    let splitURL = currentURL.split("/");
                    this.editFileId = splitURL[splitURL.length - 1];
                    // console.log("before edit")
                    this.getEditAssignmentDetails();
                }
            });
        }
        getEditAssignmentDetails() {
            this.auth.showLoader();
            const url = `/api/v2/onlineAssignment/get/${this.jsonFlag.institute_id}/${this.editFileId}`;
            this.httpService.getData(url).subscribe((res) => {
                this.auth.hideLoader();
                this.editAssignmentDetails = res.result;
                // console.log("edit");
                this.setEditDetails();
            }, err => {
                this.auth.hideLoader();
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err);
            });
        }
        setEditDetails() {
            // console.log("after edit")
            this.assignmentDetails.file_id = this.editAssignmentDetails.file_id;
            this.assignmentDetails.title = this.editAssignmentDetails.title;
            this.assignmentDetails.description = this.editAssignmentDetails.description;
            this.assignmentDetails.assignment_status = this.editAssignmentDetails.assignment_status;
            if (this.editAssignmentDetails.evaluation_required == "N") {
                this.assignmentDetails.marks = false;
                this.showMarks = false;
            }
            else if (this.editAssignmentDetails.evaluation_required == "Y") {
                this.assignmentDetails.marks = true;
                this.showMarks = true;
                this.assignmentDetails.evaluation_marks = this.editAssignmentDetails.evaluation_marks;
            }
            if (this.editAssignmentDetails.allow_assignment_late_submission == 'Y') {
                this.assignmentDetails.lateSubmission = true;
            }
            else {
                this.assignmentDetails.lateSubmission = false;
            }
            let tags = [];
            if (this.editAssignmentDetails.tag_lists) {
                for (let i = 0; i < this.editAssignmentDetails.tag_lists.length; i++) {
                    tags.push(this.editAssignmentDetails.tag_lists[i]);
                }
                this.selectedTagsList = tags;
            }
            // console.log(this.selectedTagsList)
            this.assignmentDetails.standard_id = this.editAssignmentDetails.standard_id;
            this.assignmentDetails.course = this.editAssignmentDetails.course_id;
            if (!this.jsonFlag.isProfessional && !this.schoolModel) {
                this.assignmentDetails.masterCourse = this.editAssignmentDetails.master_course_name;
            }
            // else{
            //   this.assignmentDetails.masterCours
            // }
            this.assignmentDetails.subject = this.editAssignmentDetails.subject_id;
            this.assignmentDetails.topic = this.editAssignmentDetails.topic_id;
            this.assignmentDetails.subtopic = this.editAssignmentDetails.sub_topic_id;
            this.assignmentDetails.enable_grade = this.editAssignmentDetails.enable_grade.toString();
            if (this.editAssignmentDetails.assignment_late_submission_date != null && this.editAssignmentDetails.assignment_late_submission_date != '') {
                this.assignmentDetails.assignment_late_submission_date = moment__WEBPACK_IMPORTED_MODULE_5__(this.editAssignmentDetails.assignment_late_submission_date).format('YYYY-MM-DD');
                ;
            }
            this.assignmentDetails.evaluation_date = moment__WEBPACK_IMPORTED_MODULE_5__(this.editAssignmentDetails.evaluation_date).format('YYYY-MM-DD');
            this.assignmentDetails.students = [];
            this.assignmentDetails.teacher = this.editAssignmentDetails.teacher_id;
            this.assignmentDetails.startDate = moment__WEBPACK_IMPORTED_MODULE_5__(this.editAssignmentDetails.start_date).format('YYYY-MM-DD');
            this.assignmentDetails.endDate = moment__WEBPACK_IMPORTED_MODULE_5__(this.editAssignmentDetails.end_date).format('YYYY-MM-DD');
            if (this.editAssignmentDetails.start_time != null) {
                let start = this.editAssignmentDetails.start_time.split(' ')[0];
                let min = this.editAssignmentDetails.start_time.split(':')[1];
                let shh = start.split(':')[0];
                start = shh + " " + this.editAssignmentDetails.start_time.split(' ')[1];
                this.assignmentDetails.startHr = start;
                this.assignmentDetails.startMin = min.split(' ')[0];
            }
            if (this.editAssignmentDetails.end_time != null) {
                let start = this.editAssignmentDetails.end_time.split(' ')[0];
                let min = this.editAssignmentDetails.end_time.split(':')[1];
                let shh = start.split(':')[0];
                start = shh + " " + this.editAssignmentDetails.end_time.split(' ')[1];
                this.assignmentDetails.endHr = start;
                this.assignmentDetails.endMin = min.split(' ')[0];
            }
            if (this.editAssignmentDetails.attachment_lists) {
                for (let index = 0; index < this.editAssignmentDetails.attachment_lists.length; index++) {
                    if (this.editAssignmentDetails.attachment_lists[index].attachment_name == "URL") {
                        this.editUrlList.push(this.editAssignmentDetails.attachment_lists[index]);
                    }
                    else {
                        this.editAttachmentList.push(this.editAssignmentDetails.attachment_lists[index]);
                    }
                }
            }
            if (this.schoolModel) {
                this.getCourseList(this.assignmentDetails.standard_id);
            }
        }
        setMultiSelectSetting() {
            this.studentListSettings = {
                singleSelection: false,
                idField: 'student_id',
                textField: 'student_name',
                selectAllText: 'Select All',
                unSelectAllText: 'UnSelect All',
                itemsShowLimit: 2,
                enableCheckAll: true
            };
            this.tagsListSettings = {
                singleSelection: false,
                idField: 'tagId',
                textField: 'tagName',
                selectAllText: 'Select All',
                unSelectAllText: 'UnSelect All',
                itemsShowLimit: 3,
                enableCheckAll: true,
                allowSearchFilter: true
            };
        }
        getBatchList() {
            this.auth.showLoader();
            const url = `/api/v1/batches/fetchCombinedBatchData/${this.jsonFlag.institute_id}/?standard_id=-1&subject_id=-1&assigned=Y`;
            this.httpService.getData(url).subscribe((res) => {
                this.auth.hideLoader();
                this.masterCourseList = res.standardLi;
                this.batchList = res.batchLi;
            }, err => {
                this.auth.hideLoader();
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err);
            });
        }
        updateCoursesList() {
            const url = `/api/v1/batches/fetchCombinedBatchData/${this.jsonFlag.institute_id}/?standard_id=${this.assignmentDetails.masterCourse}&subject_id=-1&assigned=Y`;
            this.auth.showLoader();
            this.httpService.getData(url).subscribe(res => {
                this.auth.hideLoader();
                let result;
                result = res;
                this.courseList = result.subjectLi;
                this.batchList = result.batchLi;
                this.auth.hideLoader();
                this.updateSubjectsList();
            }, err => {
                this.auth.hideLoader();
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err);
            });
        }
        updateSubjectsList() {
            this.auth.showLoader();
            const url = `/api/v1/batches/fetchCombinedBatchData/${this.jsonFlag.institute_id}/?standard_id=${this.assignmentDetails.masterCourse}&subject_id=${this.assignmentDetails.course}&assigned=Y`;
            this.auth.showLoader();
            this.httpService.getData(url).subscribe(res => {
                this.auth.hideLoader();
                let result;
                result = res;
                this.batchList = result.batchLi;
            }, err => {
                this.auth.hideLoader();
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err);
            });
        }
        getStudentsListForBatch() {
            if (this.assignmentDetails.batch != '-1') {
                this.auth.showLoader();
                const url = `/api/v1/studentBatchMap/batches/${this.assignmentDetails.batch}`;
                this.auth.showLoader();
                this.httpService.postData(url, null).subscribe(res => {
                    this.auth.hideLoader();
                    let result;
                    result = res;
                    this.studentsList = result;
                }, err => {
                    this.auth.hideLoader();
                    this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err);
                });
            }
        }
        getMasterCourse() {
            // if(this.schoolModel) {
            //   this.getStandard();
            // } else {
            this.auth.showLoader();
            const url = `/api/v1/courseMaster/fetch/${this.jsonFlag.institute_id}/all`;
            this.httpService.getData(url).subscribe((res) => {
                this.auth.hideLoader();
                this.courseModelList = res;
                this.masterCourseList = this.courseModelList;
                console.log("master c");
                if (this.sectionName == 'Edit') {
                    this.getCourses();
                }
            }, err => {
                this.auth.hideLoader();
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err);
            });
            // }
        }
        getStandard() {
            this.auth.showLoader();
            this.httpService.getData('/api/v1/courseMaster/standard-section-list/' + sessionStorage.getItem('institute_id')).subscribe((res) => {
                this.auth.hideLoader();
                this.masterCourseList = res.result;
                if (this.sectionName == 'Edit') {
                    this.getCourseList(this.assignmentDetails.standard_id);
                }
            }, err => {
                this.auth.hideLoader();
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', 'Please check your internet connection or contact at support@proctur.com if the issue persist');
            });
        }
        getCourseList(ev) {
            // this.assignmentDetails.course = "-1";
            // this.assignmentDetails.subject = '-1';
            if (this.assignmentDetails.standard_id != "-1") {
                this.courseList = [];
                let standard_obj = this.masterCourseList.filter((standard) => (ev == standard.standard_id));
                if (standard_obj && standard_obj.length) {
                    this.courseList = standard_obj[0].section_list;
                }
                if (this.sectionName == 'Edit') {
                    this.getStudentsList();
                    this.getSchoolSubjects();
                }
            }
            else {
                this.courseList = [];
                this.subjectList = [];
                this.topicList = [];
                this.subTopicList = [];
                this.studentsList = [];
                this.selectedStudentList = [];
                this.assignmentDetails.course = "-1";
                this.assignmentDetails.subject = "-1";
                this.assignmentDetails.batch = "-1";
                this.assignmentDetails.topic = "-1";
                this.assignmentDetails.subtopic = "-1";
                this.assignmentDetails.students = [];
            }
        }
        getSchoolSubjects() {
            this.auth.showLoader();
            this.subjectList = [];
            const url = "/api/v1/courseMaster/fetch/courses/" + sessionStorage.getItem('institute_id') + '/' + this.assignmentDetails.course;
            this.httpService.getData(url).subscribe((res) => {
                this.auth.hideLoader();
                //console.log('Subject', res);
                this.subjectList = res.batchesList;
                if (this.sectionName == 'Edit' && this.assignmentDetails.subject != "0") {
                    this.getTopic();
                }
            }, err => {
                this.msgService.showErrorMessage('error', '', err.error.message);
                this.auth.hideLoader();
                //console.log(err);
            });
        }
        getCourses() {
            if (this.assignmentDetails.masterCourse != "-1") {
                for (let index = 0; index < this.masterCourseList.length; index++) {
                    if (this.masterCourseList[index].master_course == this.assignmentDetails.masterCourse) {
                        this.courseList = this.masterCourseList[index].coursesList;
                    }
                }
                console.log("course");
                if (this.sectionName == 'Edit') {
                    this.getSubjects();
                }
            }
            else {
                this.courseList = [];
                this.subjectList = [];
                this.topicList = [];
                this.subTopicList = [];
                this.studentsList = [];
                this.selectedStudentList = [];
                this.assignmentDetails.course = "-1";
                this.assignmentDetails.subject = "-1";
                this.assignmentDetails.batch = "-1";
                this.assignmentDetails.topic = "-1";
                this.assignmentDetails.subtopic = "-1";
                this.assignmentDetails.students = [];
            }
        }
        getSubjects() {
            if (this.assignmentDetails.course != "-1") {
                this.getStudentsList();
                if (this.schoolModel) {
                    this.getSchoolSubjects();
                }
                else {
                    for (let index = 0; index < this.courseList.length; index++) {
                        if (this.courseList[index].course_id == this.assignmentDetails.course) {
                            this.subjectList = this.courseList[index].batchesList;
                        }
                    }
                }
                if (this.sectionName == 'Edit' && this.assignmentDetails.subject != "0") {
                    this.getTopic();
                }
                else {
                    this.assignmentDetails.topic = "-1";
                    this.assignmentDetails.subtopic = "-1";
                }
            }
            else {
                this.subjectList = [];
                this.topicList = [];
                this.subTopicList = [];
                this.studentsList = [];
                this.selectedStudentList = [];
                this.assignmentDetails.subject = "-1";
                this.assignmentDetails.batch = "-1";
                this.assignmentDetails.topic = "-1";
                this.assignmentDetails.subtopic = "-1";
                this.assignmentDetails.students = [];
            }
        }
        getTopic() {
            if (this.jsonFlag.isProfessional) {
                this.getStudentsListForBatch();
            }
            let url = "";
            if (!this.jsonFlag.isProfessional) {
                if (this.assignmentDetails.subject != "-1") {
                    url = `/api/v1/topic_manager/standards/-1/subjects/${this.assignmentDetails.subject}/topics`;
                }
                else {
                    this.topicList = [];
                    this.subTopicList = [];
                    // this.studentsList = [];
                    this.selectedStudentList = [];
                    this.assignmentDetails.subject = "-1";
                    this.assignmentDetails.topic = "-1";
                    this.assignmentDetails.subtopic = "-1";
                    this.assignmentDetails.students = [];
                }
            }
            if (this.jsonFlag.isProfessional) {
                if (this.assignmentDetails.batch != "-1") {
                    for (let i = 0; i < this.batchList.length; i++) {
                        if (this.batchList[i].batch_id == this.assignmentDetails.batch) {
                            url = `/api/v1/topic_manager/standards/-1/subjects/${this.batchList[i].subject_id}/topics`;
                            break;
                        }
                    }
                }
                else {
                    this.topicList = [];
                    this.subTopicList = [];
                    this.studentsList = [];
                    this.selectedStudentList = [];
                    this.assignmentDetails.batch = "-1";
                    this.assignmentDetails.topic = "-1";
                    this.assignmentDetails.subtopic = "-1";
                    this.assignmentDetails.students = [];
                }
            }
            if (url != '') {
                this.auth.showLoader();
                this.httpService.getData(url).subscribe((res) => {
                    this.auth.hideLoader();
                    this.topicList = res;
                    if (this.sectionName == 'Edit') {
                        this.getSubTopic();
                    }
                }, err => {
                    this.auth.hideLoader();
                    this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err);
                });
            }
        }
        getSubTopic() {
            if (this.assignmentDetails.topic != "-1") {
                for (let index = 0; index < this.topicList.length; index++) {
                    if (this.topicList[index].topicId == this.assignmentDetails.topic) {
                        this.subTopicList = this.topicList[index].subTopic;
                    }
                }
            }
            else {
                this.subTopicList = [];
                // this.studentsList = [];
                this.selectedStudentList = [];
                this.assignmentDetails.subtopic = "-1";
                this.assignmentDetails.students = [];
            }
        }
        getFacultyList() {
            this.auth.showLoader();
            const url = `/api/v1/teachers/all/${this.jsonFlag.institute_id}/?active=Y`;
            this.httpService.getData(url).subscribe((res) => {
                this.auth.hideLoader();
                this.facultyList = res;
            }, err => {
                this.auth.hideLoader();
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err);
            });
        }
        getTagList() {
            this.auth.showLoader();
            const url = `/api/v2/tag_master/getAll/${this.jsonFlag.institute_id}`;
            this.httpService.getData(url).subscribe((res) => {
                this.auth.hideLoader();
                this.tagList = res;
                console.log("tag list");
            }, err => {
                this.auth.hideLoader();
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err);
            });
        }
        getStudentsList() {
            let obj = {
                course_id: this.assignmentDetails.course,
                master_course_name: this.assignmentDetails.masterCourse
            };
            this.auth.showLoader();
            const url = `/api/v1/studentBatchMap/manageBatchStudent/${this.jsonFlag.institute_id}`;
            this.httpService.postData(url, obj).subscribe((res) => {
                this.auth.hideLoader();
                this.studentsList = res;
                console.log(this.studentsList);
                if (this.sectionName == 'Edit') {
                    let studentArr = [];
                    for (let i = 0; i < this.studentsList.length; i++) {
                        for (let j = 0; j < this.editAssignmentDetails.studentId_lists.length; j++) {
                            if (this.studentsList[i].student_id == this.editAssignmentDetails.studentId_lists[j]) {
                                studentArr.push(this.studentsList[i]);
                            }
                        }
                    }
                    this.selectedStudentList = studentArr;
                }
            }, err => {
                this.auth.hideLoader();
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err);
            });
        }
        saveAsDraft() {
            this.assignment_status = "Draft";
            this.assignmentDetails.tags = [];
            this.assignmentDetails.students = [];
            let start_date = moment__WEBPACK_IMPORTED_MODULE_5__(this.assignmentDetails.startDate);
            let todaysDate = moment__WEBPACK_IMPORTED_MODULE_5__(new Date());
            if (start_date > todaysDate) {
                this.assignment_status = "Scheduled";
            }
            for (let i = 0; i < this.selectedTagsList.length; i++) {
                this.assignmentDetails.tags.push(this.selectedTagsList[i].tagId);
            }
            for (let i = 0; i < this.selectedStudentList.length; i++) {
                this.assignmentDetails.students.push(this.selectedStudentList[i].student_id);
            }
            if (this.assignmentDetails.title.trim() != '' && this.assignmentDetails.title.trim() != null) {
                if (this.assignmentDetails.startHr.trim() != '' && this.assignmentDetails.startMin.trim() != '') {
                    if (this.assignmentDetails.endHr.trim() != '' && this.assignmentDetails.endMin.trim() != '') {
                        if (this.assignmentDetails.evaluation_date != '' && this.assignmentDetails.evaluation_date != null) {
                            if (this.assignmentDetails.course != '-1') {
                                if (this.assignmentDetails.teacher != '-1') {
                                    if (!this.assignmentDetails.lateSubmission || this.assignmentDetails.assignment_late_submission_date != '') {
                                        if (this.checkFileAndURL()) {
                                            if (this.getEventHourTo()) {
                                                if (this.checkEvaluationDate()) {
                                                    let lateSub = 'Y';
                                                    if (!this.assignmentDetails.lateSubmission) {
                                                        lateSub = 'N';
                                                    }
                                                    let ev = 'N';
                                                    let marks = 0;
                                                    if (this.assignmentDetails.marks) {
                                                        marks = this.assignmentDetails.evaluation_marks;
                                                        ev = 'Y';
                                                    }
                                                    else {
                                                        marks = 0;
                                                    }
                                                    let shr = this.assignmentDetails.startHr.split(' ');
                                                    let ehr = this.assignmentDetails.endHr.split(' ');
                                                    let obj = {
                                                        institute_id: this.jsonFlag.institute_id,
                                                        category_id: "255",
                                                        course_id: this.assignmentDetails.course,
                                                        batch_id: this.assignmentDetails.batch,
                                                        subject_id: this.assignmentDetails.subject,
                                                        topic_id: this.assignmentDetails.topic,
                                                        sub_topic_id: this.assignmentDetails.subtopic,
                                                        title: this.assignmentDetails.title,
                                                        desc: this.assignmentDetails.description,
                                                        start_date: moment__WEBPACK_IMPORTED_MODULE_5__(this.assignmentDetails.startDate).format('YYYY-MM-DD'),
                                                        end_date: moment__WEBPACK_IMPORTED_MODULE_5__(this.assignmentDetails.endDate).format('YYYY-MM-DD'),
                                                        start_time: shr[0] + ":" + this.assignmentDetails.startMin + " " + shr[1],
                                                        end_time: ehr[0] + ":" + this.assignmentDetails.endMin + " " + ehr[1],
                                                        allow_assignment_late_submission: lateSub,
                                                        evaluation_marks: marks,
                                                        evaluation_required: ev,
                                                        file_id: this.assignmentDetails.file_id,
                                                        teacher_id: this.assignmentDetails.teacher,
                                                        assignment_status: this.assignment_status,
                                                        tagId_array: this.assignmentDetails.tags,
                                                        studentId_array: this.assignmentDetails.students,
                                                        url_lists: this.assignmentDetails.urlLists,
                                                        enable_grade: this.assignmentDetails.enable_grade,
                                                        evaluation_date: this.assignmentDetails.evaluation_date,
                                                        assignment_late_submission_date: '',
                                                        attachmentId_array: this.removeOldFile,
                                                    };
                                                    if (lateSub == 'Y') {
                                                        obj.assignment_late_submission_date = this.assignmentDetails.assignment_late_submission_date;
                                                    }
                                                    this.createOnlineAssignment(obj);
                                                    console.log(obj);
                                                }
                                            }
                                        }
                                    }
                                    else {
                                        this.msgService.showErrorMessage('error', '', "Please select late submission date");
                                    }
                                }
                                else {
                                    this.msgService.showErrorMessage('error', '', "Please select Teacher");
                                }
                            }
                            else {
                                this.msgService.showErrorMessage('error', '', "Please select course");
                            }
                        }
                        else {
                            this.msgService.showErrorMessage('error', '', "Please Select Evaluation Date");
                        }
                    }
                    else {
                        this.msgService.showErrorMessage('error', '', "Please select assignment end time hrs & mins");
                    }
                }
                else {
                    this.msgService.showErrorMessage('error', '', "Please select assignment start time hrs & mins");
                }
            }
            else {
                this.msgService.showErrorMessage('error', '', "Please enter assignment title");
            }
        }
        saveAssignment() {
            let start_date = moment__WEBPACK_IMPORTED_MODULE_5__(this.assignmentDetails.startDate);
            let todaysDate = moment__WEBPACK_IMPORTED_MODULE_5__(new Date());
            this.assignment_status = "Published";
            if (start_date > todaysDate) {
                this.assignment_status = "Scheduled";
            }
            this.assignmentDetails.tags = [];
            this.assignmentDetails.students = [];
            for (let i = 0; i < this.selectedTagsList.length; i++) {
                this.assignmentDetails.tags.push(this.selectedTagsList[i].tagId);
            }
            for (let i = 0; i < this.selectedStudentList.length; i++) {
                this.assignmentDetails.students.push(this.selectedStudentList[i].student_id);
            }
            let file_id = "-1";
            if (this.sectionName == "Edit") {
                file_id = this.assignmentDetails.file_id;
            }
            if (this.assignmentDetails.title.trim() != '' && this.assignmentDetails.title.trim() != null) {
                if (this.assignmentDetails.startHr.trim() != '' && this.assignmentDetails.startMin.trim() != '') {
                    if ((!this.schoolModel && this.assignmentDetails.masterCourse != '-1') || (this.schoolModel && this.assignmentDetails.standard_id != '-1')) {
                        if (this.assignmentDetails.course != '-1') {
                            if (this.selectedStudentList.length > 0) {
                                if (this.assignmentDetails.evaluation_date != '' && this.assignmentDetails.evaluation_date != null) {
                                    if (this.assignmentDetails.teacher != '-1') {
                                        if (!this.assignmentDetails.lateSubmission || this.assignmentDetails.assignment_late_submission_date != '') {
                                            if (this.checkFileAndURL()) {
                                                if (this.getEventHourTo()) {
                                                    if (this.checkEvaluationDate()) {
                                                        let lateSub = 'Y';
                                                        if (!this.assignmentDetails.lateSubmission) {
                                                            lateSub = 'N';
                                                        }
                                                        let ev = 'N';
                                                        let marks = 0;
                                                        if (this.assignmentDetails.marks) {
                                                            marks = this.assignmentDetails.evaluation_marks;
                                                            ev = 'Y';
                                                        }
                                                        else {
                                                            marks = 0;
                                                        }
                                                        let shr = this.assignmentDetails.startHr.split(' ');
                                                        let ehr = this.assignmentDetails.endHr.split(' ');
                                                        let obj = {
                                                            institute_id: this.jsonFlag.institute_id,
                                                            category_id: "255",
                                                            course_id: this.assignmentDetails.course,
                                                            batch_id: this.assignmentDetails.batch,
                                                            subject_id: this.assignmentDetails.subject,
                                                            topic_id: this.assignmentDetails.topic,
                                                            sub_topic_id: this.assignmentDetails.subtopic,
                                                            title: this.assignmentDetails.title,
                                                            desc: this.assignmentDetails.description,
                                                            start_date: moment__WEBPACK_IMPORTED_MODULE_5__(this.assignmentDetails.startDate).format('YYYY-MM-DD'),
                                                            end_date: moment__WEBPACK_IMPORTED_MODULE_5__(this.assignmentDetails.endDate).format('YYYY-MM-DD'),
                                                            start_time: shr[0] + ":" + this.assignmentDetails.startMin + " " + shr[1],
                                                            end_time: ehr[0] + ":" + this.assignmentDetails.endMin + " " + ehr[1],
                                                            allow_assignment_late_submission: lateSub,
                                                            evaluation_marks: marks,
                                                            evaluation_required: ev,
                                                            file_id: file_id,
                                                            teacher_id: this.assignmentDetails.teacher,
                                                            assignment_status: this.assignment_status,
                                                            tagId_array: this.assignmentDetails.tags,
                                                            studentId_array: this.assignmentDetails.students,
                                                            url_lists: this.assignmentDetails.urlLists,
                                                            attachmentId_array: [],
                                                            enable_grade: this.assignmentDetails.enable_grade,
                                                            evaluation_date: this.assignmentDetails.evaluation_date,
                                                            assignment_late_submission_date: '',
                                                        };
                                                        if (lateSub == 'Y') {
                                                            obj.assignment_late_submission_date = this.assignmentDetails.assignment_late_submission_date;
                                                        }
                                                        this.createOnlineAssignment(obj);
                                                        console.log(obj);
                                                    }
                                                }
                                            }
                                        }
                                        else {
                                            this.msgService.showErrorMessage('error', '', "Please select late submission date");
                                        }
                                    }
                                    else {
                                        this.msgService.showErrorMessage('error', '', "Please select faculty");
                                    }
                                }
                                else {
                                    this.msgService.showErrorMessage('error', '', "Please Select Evaluation Date");
                                }
                            }
                            else {
                                this.msgService.showErrorMessage('error', '', "Please select Student(s)");
                            }
                        }
                        else {
                            let msg = this.schoolModel ? 'Please seclect section' : 'Please select course';
                            this.msgService.showErrorMessage('error', '', msg);
                        }
                    }
                    else {
                        let msg = this.schoolModel ? 'Please seclect standard' : 'Please select master course';
                        this.msgService.showErrorMessage('error', '', msg);
                    }
                }
                else {
                    this.msgService.showErrorMessage('error', '', "Please select assignment start time hrs & mins");
                }
            }
            else {
                this.msgService.showErrorMessage('error', '', "Please enter assignment title");
            }
        }
        createOnlineAssignment(obj) {
            let formData = new FormData();
            formData.append("fileJson", JSON.stringify(obj));
            if (this.selectedFiles.length > 0) {
                for (let i = 0; i < this.selectedFiles.length; i++) {
                    formData.append("files", this.selectedFiles[i]);
                }
            }
            // else{
            //   formData.append('files', );
            // }
            let newxhr = new XMLHttpRequest();
            let auths = {
                userid: sessionStorage.getItem('userid'),
                userType: sessionStorage.getItem('userType'),
                password: sessionStorage.getItem('password'),
                institution_id: sessionStorage.getItem('institute_id'),
            };
            this.auth.showLoader();
            let Authorization = btoa(auths.userid + "|" + auths.userType + ":" + auths.password + ":" + auths.institution_id);
            let base = this.auth.getBaseUrl();
            let urlPostXlsDocument = '';
            if (this.sectionName == 'Edit') {
                urlPostXlsDocument = base + "/api/v2/onlineAssignment/update";
                newxhr.open("POST", urlPostXlsDocument, true);
            }
            else {
                urlPostXlsDocument = base + "/api/v2/onlineAssignment/create";
                newxhr.open("POST", urlPostXlsDocument, true);
            }
            newxhr.setRequestHeader("Authorization", Authorization);
            newxhr.setRequestHeader("enctype", "multipart/form-data;");
            newxhr.setRequestHeader("Accept", "application/json, text/javascript");
            newxhr.setRequestHeader("Access-Control-Allow-Origin", "*");
            newxhr.onreadystatechange = () => {
                if (newxhr.readyState == 4) {
                    this.auth.hideLoader();
                    if (newxhr.status >= 200 && newxhr.status < 300) {
                        let data = JSON.parse((newxhr.response));
                        if (data.statusCode >= 200 && data.statusCode < 300) {
                            this.msgService.showErrorMessage('success', '', 'Assignment created successfully');
                            this.router.navigate(['/view/course/online-assignment']);
                        }
                        else {
                            this.msgService.showErrorMessage('error', '', data.message);
                        }
                    }
                    else {
                        let data = JSON.parse((newxhr.response));
                        this.msgService.showErrorMessage('error', '', data.message);
                    }
                }
            };
            newxhr.send(formData);
        }
        fillFiles(files) {
            const preview = document.getElementById('uploadFileControl').files[0];
            if (preview != null || preview != undefined) {
                setTimeout(() => {
                    let manualUploadedFileList = document.getElementById('uploadFileControl').files;
                    let filesArr = Array.from(manualUploadedFileList);
                    this.selectedFiles.push(filesArr[0]);
                    this.customFileArr = this.generateFilePreview(filesArr);
                    document.getElementById('uploadFileControl').value = null;
                }, 500);
            }
            else {
                this.msgService.showErrorMessage('error', '', "No file selected");
            }
        }
        checkFileAndURL() {
            if ((this.selectedFiles && this.selectedFiles.length) || (this.assignmentDetails.urlLists && this.assignmentDetails.urlLists.length) || (this.editAttachmentList && this.editAttachmentList.length) || (this.editUrlList && this.editUrlList.length)) {
                return true;
            }
            else {
                this.msgService.showErrorMessage('error', '', "Please select file or add Link");
                return false;
            }
        }
        getName(file) {
            return file.split(".")[0];
        }
        getType(file) {
            let str = file.substring(file.lastIndexOf(".") + 1, file.length);
            return str;
        }
        generateFilePreview(fileList) {
            let size = fileList.length;
            let tempArr = [];
            this.tempArr = tempArr;
            let file;
            if (size > 0) {
                for (let i = 0; i < size; i++) {
                    file = fileList[i];
                    tempArr.push(new fileObj(this.getName(file.name), this.getType(file.name), file.size));
                }
            }
            let obj = {
                fileName: this.tempArr[0].fileName,
                fileType: this.tempArr[0].fileType
            };
            this.fileArray.push(obj);
            return tempArr;
        }
        removeFile(fileName) {
            for (let index = 0; index < this.selectedFiles.length; index++) {
                if (this.selectedFiles[index].fileName == fileName) {
                    this.fileArray.splice(index, 1);
                    this.selectedFiles.splice(index, 1);
                    break;
                }
            }
        }
        uploadURL() {
            if (this.urlDetails.name.trim() != '') {
                if (this.urlDetails.url.trim() != '') {
                    if (this.isUrlValid(this.urlDetails.url.trim())) {
                        let obj = {
                            display_name: this.urlDetails.name,
                            url: this.urlDetails.url
                        };
                        this.assignmentDetails.urlLists.push(obj);
                        this.urlDetails.name = "";
                        this.urlDetails.url = "";
                    }
                    else {
                        this.msgService.showErrorMessage('error', '', "Please enter valid URL");
                    }
                }
                else {
                    this.msgService.showErrorMessage('error', '', "Please enter URL");
                }
            }
            else {
                this.msgService.showErrorMessage('error', '', "Please enter URL name");
            }
        }
        isUrlValid(userInput) {
            var res = userInput.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
            if (res == null)
                return false;
            else
                return true;
        }
        removeLink(display_name) {
            for (let index = 0; index < this.assignmentDetails.urlLists.length; index++) {
                if (this.assignmentDetails.urlLists[index].display_name == display_name) {
                    this.assignmentDetails.urlLists.splice(index, 1);
                    break;
                }
            }
        }
        getEventHourFrom(e) {
            // this.assignmentDetails.startMin = "00";
            if (this.assignmentDetails.startHr != "" && this.assignmentDetails.startHr != null && this.assignmentDetails.startMin == "") {
                this.assignmentDetails.startMin = "00";
            }
            else if (this.assignmentDetails.endHr != "" && this.assignmentDetails.endHr != null && this.assignmentDetails.endMin == "") {
                this.assignmentDetails.endMin = "00";
            }
            if (this.assignmentDetails.startHr != "" && this.assignmentDetails.startHr != null && this.assignmentDetails.startMin != "" && this.assignmentDetails.startMin != null
                && this.assignmentDetails.endHr != "" && this.assignmentDetails.endHr != null && this.assignmentDetails.endMin != "" && this.assignmentDetails.endMin != null) {
                this.getEventHourTo();
            }
        }
        getEventHourTo() {
            let fromTime = moment__WEBPACK_IMPORTED_MODULE_5__(this.assignmentDetails.startDate).format('YYYY-MM-DD') + " " + this.assignmentDetails.startHr.split(' ')[0] + ":" + this.assignmentDetails.startMin + " " + this.assignmentDetails.startHr.split(' ')[1];
            let toTime = moment__WEBPACK_IMPORTED_MODULE_5__(this.assignmentDetails.endDate).format('YYYY-MM-DD') + " " + this.assignmentDetails.endHr.split(' ')[0] + ":" + this.assignmentDetails.endMin + " " + this.assignmentDetails.endHr.split(' ')[1];
            let fromTimeT = moment__WEBPACK_IMPORTED_MODULE_5__(fromTime).format('YYYY-MM-DD hh:mm a');
            let toTimeT = moment__WEBPACK_IMPORTED_MODULE_5__(toTime).format('YYYY-MM-DD hh:mm a');
            if (moment__WEBPACK_IMPORTED_MODULE_5__(fromTimeT).diff(moment__WEBPACK_IMPORTED_MODULE_5__(toTimeT), 'minutes') > 0) {
                this.msgService.showErrorMessage('error', '', "From time cannot be greater than to time");
                return false;
            }
            else if (this.assignmentDetails.startHr == "" || this.assignmentDetails.endHr == "" || this.assignmentDetails.startMin == "" || this.assignmentDetails.startMin == "") {
                this.msgService.showErrorMessage('error', '', "All fields are required");
                return false;
            }
            else if (moment__WEBPACK_IMPORTED_MODULE_5__(fromTimeT).diff(moment__WEBPACK_IMPORTED_MODULE_5__(), 'minutes') <= 0) {
                this.msgService.showErrorMessage('error', '', "Time cannot be schedule before current time");
                return false;
            }
            else if (fromTimeT == toTimeT) {
                this.msgService.showErrorMessage('error', '', "From time and to time cannot be same");
                return false;
            }
            else {
                return true;
            }
        }
        checkEvaluationDate() {
            let evaluationDate = moment__WEBPACK_IMPORTED_MODULE_5__(this.assignmentDetails.evaluation_date).format('YYYY-MM-DD');
            let toTime = moment__WEBPACK_IMPORTED_MODULE_5__(this.assignmentDetails.endDate).format('YYYY-MM-DD') + " " + this.assignmentDetails.endHr.split(' ')[0] + ":" + this.assignmentDetails.endMin + " " + this.assignmentDetails.endHr.split(' ')[1];
            let lateSubmissionDate = moment__WEBPACK_IMPORTED_MODULE_5__(this.assignmentDetails.assignment_late_submission_date).format('YYYY-MM-DD');
            let evaluationTimeT = moment__WEBPACK_IMPORTED_MODULE_5__(evaluationDate).format('YYYY-MM-DD hh:mm a');
            let toTimeT = moment__WEBPACK_IMPORTED_MODULE_5__(toTime).format('YYYY-MM-DD hh:mm a');
            let lateSubT = moment__WEBPACK_IMPORTED_MODULE_5__(lateSubmissionDate).format('YYYY-MM-DD hh:mm a');
            if (this.assignmentDetails.lateSubmission && moment__WEBPACK_IMPORTED_MODULE_5__(lateSubT).diff(moment__WEBPACK_IMPORTED_MODULE_5__(evaluationTimeT), 'minutes') > 0) {
                this.msgService.showErrorMessage('error', '', "Evaluation date can't be lesser than Late Submission Date");
                return false;
            }
            else if (moment__WEBPACK_IMPORTED_MODULE_5__(toTime).diff(moment__WEBPACK_IMPORTED_MODULE_5__(evaluationTimeT), 'minutes') > 0) {
                this.msgService.showErrorMessage('error', '', "Evaluation date can't be lesser than End Date");
                return false;
            }
            else {
                return true;
            }
        }
        // removed url while edit
        removeOldLink(display_name) {
            for (let index = 0; index < this.editUrlList.length; index++) {
                if (this.editUrlList[index].attachment_display_name == display_name) {
                    this.editUrlList.splice(index, 1);
                    break;
                }
            }
        }
        // removed File while edit
        removeOldFile(file_id) {
            for (let index = 0; index < this.editAttachmentList.length; index++) {
                if (this.editAttachmentList[index].file_id == file_id) {
                    this.editAttachmentList.splice(index, 1);
                    this.removedAttachments.push(file_id);
                    break;
                }
            }
        }
        toggleMarks() {
            if (this.assignmentDetails.marks) {
                this.showMarks = true;
            }
            else {
                this.showMarks = false;
            }
        }
        createMasterTag() {
            if (this.newTagName == '') {
                this.msgService.showErrorMessage('error', '', "Enter tag name");
                return false;
            }
            if (this.newTagName.length > 100) {
                this.msgService.showErrorMessage('error', '', "Tag name cannot be so long");
                return false;
            }
            if (this.newTagDescription.length > 500) {
                this.msgService.showErrorMessage('error', '', "Description cannot be so long");
                return false;
            }
            // else {
            this.auth.showLoader();
            let payload = {};
            payload = {
                "tagName": this.newTagName,
                "description": this.newTagDescription,
                "instituteId": this.jsonFlag.institute_id
            };
            this.tagSrvc.addMasterTagInInstitute(payload).subscribe(data => {
                let temp = data;
                this.msgService.showErrorMessage('success', '', temp.message);
                this.auth.hideLoader();
                this.newTagDescription = '';
                this.newTagName = '';
                $('#addTag').modal('hide');
                this.getTagList();
            }, error => {
                this.auth.hideLoader();
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', error.error.message);
            });
            //}
        }
    };
    ManageAssignmentComponent.ctorParameters = () => [
        { type: _services_message_show_service__WEBPACK_IMPORTED_MODULE_3__["MessageShowService"] },
        { type: _data_setup_master_tag_master_tag_component_service__WEBPACK_IMPORTED_MODULE_4__["MasterTagService"] },
        { type: _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
        { type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticatorService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
    ];
    ManageAssignmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-manage-assignment',
            template: __importDefault(__webpack_require__(/*! raw-loader!./manage-assignment.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/online-assignment/manage-assignment/manage-assignment.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./manage-assignment.component.scss */ "./src/app/components/course-module/online-assignment/manage-assignment/manage-assignment.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_services_message_show_service__WEBPACK_IMPORTED_MODULE_3__["MessageShowService"],
            _data_setup_master_tag_master_tag_component_service__WEBPACK_IMPORTED_MODULE_4__["MasterTagService"],
            _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _services_authenticator_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticatorService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], ManageAssignmentComponent);
    return ManageAssignmentComponent;
})();



/***/ }),

/***/ "./src/app/components/course-module/online-assignment/online-assignment-routing.module.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/components/course-module/online-assignment/online-assignment-routing.module.ts ***!
  \************************************************************************************************/
/*! exports provided: OnlineAssignmentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlineAssignmentRoutingModule", function() { return OnlineAssignmentRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _online_assignment_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./online-assignment.component */ "./src/app/components/course-module/online-assignment/online-assignment.component.ts");
/* harmony import */ var _list_assignment_list_assignment_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-assignment/list-assignment.component */ "./src/app/components/course-module/online-assignment/list-assignment/list-assignment.component.ts");
/* harmony import */ var _manage_assignment_manage_assignment_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./manage-assignment/manage-assignment.component */ "./src/app/components/course-module/online-assignment/manage-assignment/manage-assignment.component.ts");
/* harmony import */ var _review_assignment_review_assignment_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./review-assignment/review-assignment.component */ "./src/app/components/course-module/online-assignment/review-assignment/review-assignment.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let OnlineAssignmentRoutingModule = /** @class */ (() => {
    let OnlineAssignmentRoutingModule = class OnlineAssignmentRoutingModule {
    };
    OnlineAssignmentRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _online_assignment_component__WEBPACK_IMPORTED_MODULE_2__["OnlineAssignmentComponent"],
                        pathMatch: 'prefix',
                        children: [
                            {
                                path: '',
                                component: _list_assignment_list_assignment_component__WEBPACK_IMPORTED_MODULE_3__["ListAssignmentComponent"],
                            },
                            {
                                path: 'home',
                                component: _list_assignment_list_assignment_component__WEBPACK_IMPORTED_MODULE_3__["ListAssignmentComponent"],
                                pathMatch: 'prefix',
                            },
                            {
                                path: 'create-assignment',
                                component: _manage_assignment_manage_assignment_component__WEBPACK_IMPORTED_MODULE_4__["ManageAssignmentComponent"],
                                pathMatch: 'prefix',
                            },
                            {
                                path: 'manage-assignment/:id',
                                component: _manage_assignment_manage_assignment_component__WEBPACK_IMPORTED_MODULE_4__["ManageAssignmentComponent"],
                                pathMatch: 'prefix',
                            },
                            {
                                path: 'review-assignment/:id',
                                component: _review_assignment_review_assignment_component__WEBPACK_IMPORTED_MODULE_5__["ReviewAssignmentComponent"],
                                pathMatch: 'prefix',
                            },
                        ]
                    }
                ])],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], OnlineAssignmentRoutingModule);
    return OnlineAssignmentRoutingModule;
})();



/***/ }),

/***/ "./src/app/components/course-module/online-assignment/online-assignment.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/course-module/online-assignment/online-assignment.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY291cnNlLW1vZHVsZS9vbmxpbmUtYXNzaWdubWVudC9vbmxpbmUtYXNzaWdubWVudC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/course-module/online-assignment/online-assignment.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/course-module/online-assignment/online-assignment.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: OnlineAssignmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlineAssignmentComponent", function() { return OnlineAssignmentComponent; });
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

let OnlineAssignmentComponent = /** @class */ (() => {
    let OnlineAssignmentComponent = class OnlineAssignmentComponent {
        constructor() { }
        ngOnInit() {
        }
    };
    OnlineAssignmentComponent.ctorParameters = () => [];
    OnlineAssignmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-online-assignment',
            template: __importDefault(__webpack_require__(/*! raw-loader!./online-assignment.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/online-assignment/online-assignment.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./online-assignment.component.scss */ "./src/app/components/course-module/online-assignment/online-assignment.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], OnlineAssignmentComponent);
    return OnlineAssignmentComponent;
})();



/***/ }),

/***/ "./src/app/components/course-module/online-assignment/online-assignment.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/components/course-module/online-assignment/online-assignment.module.ts ***!
  \****************************************************************************************/
/*! exports provided: OnlineAssignmentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlineAssignmentModule", function() { return OnlineAssignmentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _online_assignment_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./online-assignment-routing.module */ "./src/app/components/course-module/online-assignment/online-assignment-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _list_assignment_list_assignment_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-assignment/list-assignment.component */ "./src/app/components/course-module/online-assignment/list-assignment/list-assignment.component.ts");
/* harmony import */ var _manage_assignment_manage_assignment_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./manage-assignment/manage-assignment.component */ "./src/app/components/course-module/online-assignment/manage-assignment/manage-assignment.component.ts");
/* harmony import */ var _review_assignment_review_assignment_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./review-assignment/review-assignment.component */ "./src/app/components/course-module/online-assignment/review-assignment/review-assignment.component.ts");
/* harmony import */ var _online_assignment_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./online-assignment.component */ "./src/app/components/course-module/online-assignment/online-assignment.component.ts");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/__ivy_ngcc__/fesm2015/ng-multiselect-dropdown.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/components/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



/* Modules */

// import {BsDatepickerConfig, BsDatepickerModule} from 'ngx-bootstrap/datepicker';

// online assignmetn components used






let OnlineAssignmentModule = /** @class */ (() => {
    let OnlineAssignmentModule = class OnlineAssignmentModule {
    };
    OnlineAssignmentModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                // BsDatepickerModule,
                primeng_primeng__WEBPACK_IMPORTED_MODULE_4__["FileUploadModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_4__["SplitButtonModule"],
                _online_assignment_routing_module__WEBPACK_IMPORTED_MODULE_2__["OnlineAssignmentRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_9__["NgMultiSelectDropDownModule"].forRoot()
            ],
            declarations: [
                _online_assignment_component__WEBPACK_IMPORTED_MODULE_8__["OnlineAssignmentComponent"],
                _list_assignment_list_assignment_component__WEBPACK_IMPORTED_MODULE_5__["ListAssignmentComponent"],
                _manage_assignment_manage_assignment_component__WEBPACK_IMPORTED_MODULE_6__["ManageAssignmentComponent"],
                _review_assignment_review_assignment_component__WEBPACK_IMPORTED_MODULE_7__["ReviewAssignmentComponent"]
            ]
        })
    ], OnlineAssignmentModule);
    return OnlineAssignmentModule;
})();



/***/ }),

/***/ "./src/app/components/course-module/online-assignment/review-assignment/review-assignment.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/components/course-module/online-assignment/review-assignment/review-assignment.component.scss ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".middle-section {\n  padding: 1%;\n}\n\n.assignment-details-item {\n  width: 100%;\n  margin-bottom: 10px;\n  display: flex;\n  position: relative;\n}\n\n.assignment-details-item .assignment-input {\n  width: 100%;\n  border: 1px solid #e0e0e0;\n  padding: 6px;\n  border-radius: 4px;\n}\n\n.assignment-details-item .assignment-textarea {\n  border: 1px solid #e0e0e0;\n  padding: 6px;\n  border-radius: 4px;\n}\n\n.assignment-details-item .field-checkbox-wrapper, .assignment-details-item .field-radio-wrapper {\n  position: relative;\n  padding-left: 25px;\n  margin-bottom: 10px;\n  margin-top: 10px;\n}\n\n.assignment-details-item .marks-container {\n  margin-left: 20px;\n}\n\n.assignment-details-item .marks-container input {\n  width: 75%;\n  border: 1px solid #e0e0e0;\n  padding: 10px;\n  border-radius: 4px;\n}\n\n.assignment-details-item .add-btn {\n  background: white;\n  color: #202124;\n  display: flex;\n  border: 1px solid #ccc;\n  padding: 10px;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\n.assignment-details-item .add-btn .add-btn-svg {\n  box-align: center;\n  align-items: center;\n  display: flex;\n  color: currentcolor;\n  fill: currentcolor;\n  margin-right: 8px;\n}\n\n.assignment-details-item .add-btn .add-btn-svg svg {\n  height: 1.125rem;\n  width: 1.125rem;\n}\n\n.assignment-details-item .add-btn .add-btn-text {\n  display: inline-block;\n  margin: 0;\n  overflow: hidden;\n}\n\n.assignment-details-item .attachment-container {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  background: white;\n  box-shadow: 0 3px 6px #ccc;\n  border-radius: 4px;\n  width: 20%;\n  top: 45px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.87);\n}\n\n.assignment-details-item .attachment-container .attachment-item-container {\n  padding: 6px;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.assignment-details-item .attachment-container .attachment-item-container .fa {\n  margin-right: 5px;\n}\n\n.assignment-details-item .attachment-container .attachment-item-container:hover {\n  background: #5f6368;\n  color: white;\n}\n\n.assignment-details-item .attachment-container .attachment-item-container:hover .fa {\n  color: white;\n}\n\n.upload-docs-btn {\n  background: #0084f6;\n  color: white;\n  padding: 6px 10px;\n  border: 2px solid #0084f6;\n  box-shadow: none;\n  border-radius: 4px;\n  margin-left: 10px;\n}\n\n.upload-file {\n  width: 60%;\n  margin: 0 10px;\n}\n\n.url {\n  width: 40%;\n}\n\n.attachment-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding: 10px 0;\n}\n\n.attachment-container .link-attachment-container, .attachment-container .file-attachment-container {\n  display: flex;\n  flex-direction: column;\n  width: 70%;\n}\n\n.link-attachment-item, .file-attachment-item {\n  margin-bottom: 10px;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  padding: 10px;\n  border: 1px solid #e0e0e0;\n  border-radius: 4px;\n}\n\n.link-attachment-item .fa, .file-attachment-item .fa {\n  width: 24px;\n}\n\n.link-attachment-item .fa-times, .file-attachment-item .fa-times {\n  cursor: pointer;\n}\n\n.link-attachment-item span, .file-attachment-item span {\n  width: 92%;\n}\n\n.stats-container {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  padding: 1em;\n}\n\n.stats-container .stat-item {\n  display: flex;\n  flex-direction: row;\n  width: 25%;\n  font-size: 14px;\n  font-weight: 400;\n}\n\n.stats-container .stat-item .stat-heading {\n  font-weight: 600;\n  margin-right: 5px;\n}\n\n.update-status-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding: 1%;\n}\n\n.update-status-container .student-container, .update-status-container .faculty-container {\n  display: flex;\n  flex-direction: column;\n  margin: 10px 0px;\n  font-size: 12px;\n}\n\n.update-status-container .faculty-container {\n  border-top: 1px solid #ccc;\n  padding-top: 10px;\n}\n\n.update-status-container .name-status-container {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  margin-bottom: 10px;\n}\n\n.update-status-container .name-status-container .name-container, .update-status-container .name-status-container .status-container {\n  width: 48%;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n}\n\n.update-status-container .name-status-container .name-container label, .update-status-container .name-status-container .status-container label {\n  font-weight: 600;\n}\n\n.update-status-container .student-remarks-container {\n  display: flex;\n  flex-direction: row;\n}\n\n.update-status-container .name {\n  width: 35%;\n  font-weight: 600;\n}\n\n.update-status-container .marks-remarks-container {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n}\n\n.update-status-container .marks-container {\n  width: 48%;\n}\n\n.update-status-container .marks-container .marks-input {\n  width: 150px;\n  border: 1px solid #e0e0e0;\n  padding: 6px;\n  border-radius: 4px;\n  margin-top: 5px;\n}\n\n.update-status-container .course-input {\n  width: 100%;\n  border: 1px solid #e0e0e0;\n  padding: 6px;\n  border-radius: 4px;\n}\n\n.update-status-container .url-list-container {\n  display: flex;\n  flex-direction: column;\n  margin-top: 10px;\n}\n\n.filter-container {\n  display: flex;\n  flex-direction: row;\n  margin: 10px 0;\n  margin-top: 0;\n  justify-content: flex-end;\n}\n\n.filter-container .manage-assignment-btn-container {\n  margin: 0 20px;\n}\n\n.filter-container .manage-assignment-btn-container .manage-assignment-btn {\n  background: white;\n  border-radius: 4px;\n  border: 1px solid #0084f6;\n  outline: none;\n  text-align: center;\n  padding: 8px 20px;\n  height: 35px;\n  font-weight: 600;\n  color: #0084f6;\n  box-shadow: 0px 0px 1px #0084f6;\n}\n\n.list-table-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-top: 10px;\n}\n\n.list-table-container .list-header-container {\n  border-top: 1px solid #ccc;\n  border-bottom: 1px solid #ccc;\n  display: flex;\n  flex-direction: row;\n  font-size: 12px;\n  font-weight: 600;\n  text-align: left;\n  padding: 10px;\n  margin-bottom: 10px;\n  padding-left: 9px;\n}\n\n.list-table-container .list-header-item {\n  color: #585574;\n}\n\n.list-table-container .list-value-outer-container {\n  display: flex;\n  flex-direction: column;\n  border-top: none;\n  min-height: 71vh;\n  max-height: 71vh;\n  overflow-y: auto;\n}\n\n.list-table-container .list-value-outer-container .list-value-container {\n  display: flex;\n  flex-direction: row;\n  text-align: left;\n  background: #ffffff;\n  border-radius: 4px;\n  margin-bottom: 10px;\n  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);\n  padding: 10px;\n  margin-left: 6px;\n}\n\n.list-table-container .list-value-outer-container .list-value-container .list-value-item {\n  position: relative;\n  color: #585574;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 1.5;\n  display: -webkit-box;\n  -webkit-box-align: center;\n  padding: 0px 5px;\n  word-break: break-all;\n}\n\n.list-table-container .list-value-outer-container .list-value-container:last-child {\n  border-bottom: none;\n}\n\n.list-table-container .small-item {\n  width: 12.5%;\n}\n\n.list-table-container .medium-item {\n  width: 15%;\n}\n\n.list-table-container .align-center {\n  text-align: center;\n}\n\n.list-table-container .align-right {\n  text-align: right;\n}\n\n.list-table-container .no-records {\n  display: block;\n  text-align: center;\n  padding: 10px;\n  font-size: 14px;\n  font-weight: 600;\n}\n\n.list-table-container .fa-pencil {\n  color: #0084f6;\n  cursor: pointer;\n}\n\n.list-table-container .status-btn {\n  background: #0084f6;\n  color: white;\n  padding: 5px 10px;\n  border-radius: 4px;\n  text-align: center;\n}\n\n.field-checkbox-wrapper,\n.field-radio-wrapper {\n  position: relative;\n  padding-left: 33px;\n  margin-bottom: 0px;\n  line-height: 0;\n}\n\n.field-checkbox-wrapper .form-checkbox:checked + label:before,\n.field-radio-wrapper .form-checkbox:checked + label:before {\n  border-color: #0084f6;\n  z-index: 1;\n}\n\n.field-checkbox-wrapper .form-checkbox:checked + label:after,\n.field-radio-wrapper .form-checkbox:checked + label:after {\n  border-color: #0084f6;\n  background: white;\n}\n\n.field-checkbox-wrapper .form-checkbox:checked + label,\n.field-radio-wrapper .form-checkbox:checked + label {\n  color: rgba(0, 0, 0, 0.4);\n  text-decoration: line-through;\n}\n\n.field-checkbox-wrapper .form-checkbox:checked + label:before {\n  border-left: 2px solid #0084f6;\n  border-bottom: 2px solid #0084f6;\n  width: 12px;\n  height: 5px;\n  left: 31px;\n  top: 5px;\n}\n\n.field-checkbox-wrapper .form-checkbox + label:after {\n  content: '';\n  width: 16px;\n  height: 16px;\n  border: 2px solid #ccc;\n  border-radius: 2px;\n  position: absolute;\n  left: 29px;\n  top: 0;\n}\n\n.list-table-container .field-checkbox-wrapper .form-checkbox {\n  opacity: 0;\n  position: absolute;\n  left: 28px;\n  top: 2px;\n  width: 20px;\n  height: 20px;\n  z-index: 1;\n}\n\nbutton[disabled] {\n  cursor: no-drop;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb3Vyc2UtbW9kdWxlL29ubGluZS1hc3NpZ25tZW50L3Jldmlldy1hc3NpZ25tZW50L3Jldmlldy1hc3NpZ25tZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVztBQUNmOztBQUlBO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isa0JBQWtCO0FBRHBCOztBQUhBO0VBTUksV0FBVztFQUNYLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osa0JBQWtCO0FBQ3RCOztBQVZBO0VBWUkseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixrQkFBa0I7QUFFdEI7O0FBaEJBO0VBaUJJLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUdwQjs7QUF2QkE7RUF1QkksaUJBQWlCO0FBSXJCOztBQTNCQTtFQXlCTSxVQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixrQkFBa0I7QUFNeEI7O0FBbENBO0VBZ0NJLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGVBQWU7QUFNbkI7O0FBNUNBO0VBeUNNLGlCQUFpQjtFQUVqQixtQkFBbUI7RUFHbkIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBUXZCOztBQXpEQTtFQW1EUSxnQkFBZ0I7RUFDaEIsZUFBZTtBQVV2Qjs7QUE5REE7RUF3RE0scUJBQXFCO0VBQ3JCLFNBQVM7RUFDVCxnQkFBZ0I7QUFVdEI7O0FBcEVBO0VBOERJLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQiwwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixTQUFTO0VBQ1QsNENBQXlDO0FBVTdDOztBQWhGQTtFQXdFTSxZQUFZO0VBQ1osMEJBQXVCO0FBWTdCOztBQXJGQTtFQTJFUSxpQkFBaUI7QUFjekI7O0FBekZBO0VBOEVRLG1CQUFtQjtFQUNuQixZQUFZO0FBZXBCOztBQTlGQTtFQWlGVSxZQUFZO0FBaUJ0Qjs7QUFWQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUV6QixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQWFuQjs7QUFWQTtFQUNFLFVBQVU7RUFDVixjQUFjO0FBYWhCOztBQVhBO0VBQ0UsVUFBVTtBQWNaOztBQVpBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsZUFBZTtBQWVqQjs7QUFuQkE7RUFNSSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFVBQVU7QUFpQmQ7O0FBYkE7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0IsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFnQnBCOztBQXZCQTtFQVNJLFdBQVc7QUFrQmY7O0FBM0JBO0VBWUksZUFBZTtBQW1CbkI7O0FBL0JBO0VBZUksVUFBVTtBQW9CZDs7QUFiQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQVk7QUFnQmQ7O0FBcEJBO0VBTUksYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsZUFBZTtFQUNmLGdCQUFnQjtBQWtCcEI7O0FBNUJBO0VBWU0sZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQW9CdkI7O0FBUEE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxXQUFXO0FBVWI7O0FBZEE7RUFNSSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUVkLGVBQWU7QUFXckI7O0FBckJBO0VBYUksMEJBQTBCO0VBQzFCLGlCQUFpQjtBQVlyQjs7QUExQkE7RUFpQkksYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsbUJBQW1CO0FBYXZCOztBQWpDQTtFQXNCTSxVQUFVO0VBQ1YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwyQkFBMkI7QUFlakM7O0FBeENBO0VBMkJRLGdCQUFnQjtBQWlCeEI7O0FBNUNBO0VBZ0NJLGFBQWE7RUFDYixtQkFBbUI7QUFnQnZCOztBQWpEQTtFQW9DSSxVQUFVO0VBQ1YsZ0JBQWdCO0FBaUJwQjs7QUF0REE7RUF3Q0ksYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixXQUFXO0FBa0JmOztBQTVEQTtFQTZDSSxVQUFVO0FBbUJkOztBQWhFQTtFQStDTSxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtBQXFCckI7O0FBeEVBO0VBdURJLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGtCQUFrQjtBQXFCdEI7O0FBL0VBO0VBNkRJLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZ0JBQWdCO0FBc0JwQjs7QUFkQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGFBQWE7RUFDYix5QkFBeUI7QUFpQjNCOztBQXRCQTtFQU9JLGNBQWM7QUFtQmxCOztBQTFCQTtFQVNNLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsY0FBYztFQUVkLCtCQUErQjtBQXFCckM7O0FBZkE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxnQkFBZ0I7QUFrQmxCOztBQXRCQTtFQU1JLDBCQUEwQjtFQUMxQiw2QkFBNkI7RUFDN0IsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixhQUFhO0VBRWIsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQW1CckI7O0FBbkNBO0VBb0JJLGNBQWM7QUFtQmxCOztBQXZDQTtFQXVCSSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQW9CcEI7O0FBaERBO0VBOEJNLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLDJDQUEyQztFQUMzQyxhQUFhO0VBQ2IsZ0JBQWdCO0FBc0J0Qjs7QUE1REE7RUF3Q1Esa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixxQkFBcUI7QUF3QjdCOztBQXhFQTtFQW9ETSxtQkFBbUI7QUF3QnpCOztBQTVFQTtFQXdESSxZQUFZO0FBd0JoQjs7QUFoRkE7RUEyREksVUFBVTtBQXlCZDs7QUFwRkE7RUE4REksa0JBQWtCO0FBMEJ0Qjs7QUF4RkE7RUFpRUksaUJBQWlCO0FBMkJyQjs7QUE1RkE7RUFvRUksY0FBYztFQUNkLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsZUFBZTtFQUNmLGdCQUFnQjtBQTRCcEI7O0FBcEdBO0VBMkVJLGNBQWM7RUFDZCxlQUFlO0FBNkJuQjs7QUF6R0E7RUErRUksbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQThCdEI7O0FBekJBOztFQUVJLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGNBQWM7QUE0QmxCOztBQWpDQTs7RUFPUSxxQkFBcUI7RUFDckIsVUFBVTtBQStCbEI7O0FBdkNBOztFQVdRLHFCQUFxQjtFQUNyQixpQkFBaUI7QUFpQ3pCOztBQTdDQTs7RUFlUSx5QkFBeUI7RUFDekIsNkJBQTZCO0FBbUNyQzs7QUEvQkE7RUFDSSw4QkFBOEI7RUFDOUIsZ0NBQWdDO0VBQ2hDLFdBQVc7RUFDWCxXQUFXO0VBQ1gsVUFBVTtFQUNWLFFBQVE7QUFrQ1o7O0FBL0JBO0VBQ0ksV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLE1BQU07QUFrQ1Y7O0FBaENBO0VBRUksVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsUUFBUTtFQUNSLFdBQVc7RUFDWCxZQUFZO0VBQ1osVUFBVTtBQWtDZDs7QUEvQkE7RUFDRSxlQUFlO0FBa0NqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY291cnNlLW1vZHVsZS9vbmxpbmUtYXNzaWdubWVudC9yZXZpZXctYXNzaWdubWVudC9yZXZpZXctYXNzaWdubWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5taWRkbGUtc2VjdGlvbntcbiAgICBwYWRkaW5nOiAxJTtcbn1cblxuLy8gcG9wIHVwIHN0eWxlc1xuXG4uYXNzaWdubWVudC1kZXRhaWxzLWl0ZW17XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC5hc3NpZ25tZW50LWlucHV0e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XG4gICAgcGFkZGluZzogNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgfVxuICAuYXNzaWdubWVudC10ZXh0YXJlYXtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xuICAgIHBhZGRpbmc6IDZweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIH1cbiAgLmZpZWxkLWNoZWNrYm94LXdyYXBwZXIsIC5maWVsZC1yYWRpby13cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxuICAubWFya3MtY29udGFpbmVye1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIGlucHV0e1xuICAgICAgd2lkdGg6IDc1JTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIH1cbiAgfVxuICAuYWRkLWJ0bntcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBjb2xvcjogIzIwMjEyNDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIC5hZGQtYnRuLXN2Z3tcbiAgICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgICBib3gtYWxpZ246IGNlbnRlcjtcbiAgICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBjb2xvcjogY3VycmVudGNvbG9yO1xuICAgICAgZmlsbDogY3VycmVudGNvbG9yO1xuICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgICBzdmd7XG4gICAgICAgIGhlaWdodDogMS4xMjVyZW07XG4gICAgICAgIHdpZHRoOiAxLjEyNXJlbTtcbiAgICAgIH1cbiAgICB9XG4gICAgLmFkZC1idG4tdGV4dHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgfVxuICB9XG4gIC5hdHRhY2htZW50LWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICB3aWR0aDogMjAlO1xuICAgIHRvcDogNDVweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLDAsMCwwLjg3KTtcbiAgICAuYXR0YWNobWVudC1pdGVtLWNvbnRhaW5lcntcbiAgICAgIHBhZGRpbmc6IDZweDtcbiAgICAgIGNvbG9yOiByZ2JhKDAsMCwwLDAuODcpO1xuICAgICAgLmZhe1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgIH1cbiAgICAgICY6aG92ZXJ7XG4gICAgICAgIGJhY2tncm91bmQ6ICM1ZjYzNjg7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgLmZhe1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4udXBsb2FkLWRvY3MtYnRue1xuICBiYWNrZ3JvdW5kOiAjMDA4NGY2O1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDZweCAxMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjMDA4NGY2O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi51cGxvYWQtZmlsZXtcbiAgd2lkdGg6IDYwJTtcbiAgbWFyZ2luOiAwIDEwcHg7XG59XG4udXJse1xuICB3aWR0aDogNDAlO1xufVxuLmF0dGFjaG1lbnQtY29udGFpbmVye1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweCAwO1xuICAubGluay1hdHRhY2htZW50LWNvbnRhaW5lciwgLmZpbGUtYXR0YWNobWVudC1jb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiA3MCU7XG4gIH1cbn1cblxuLmxpbmstYXR0YWNobWVudC1pdGVtLCAuZmlsZS1hdHRhY2htZW50LWl0ZW17XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAuZmF7XG4gICAgd2lkdGg6IDI0cHg7XG4gIH1cbiAgLmZhLXRpbWVze1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICBzcGFue1xuICAgIHdpZHRoOiA5MiU7XG4gIH1cbn1cbi8vIGVuZCBvZiB0aGUgcG9wIHVwIGJ1bGtcblxuXG4vLyBzdGF0cyBzdHlsZXNcbi5zdGF0cy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMWVtO1xuICAuc3RhdC1pdGVtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgd2lkdGg6IDI1JTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAuc3RhdC1oZWFkaW5nIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICB9XG5cbiAgfVxufVxuXG5cblxuXG5cbi8vIFN0YXRzIHN0eWxlIGVuZFxuXG4vLyAgdXBkYXRlIHN0YXR1cyBwb3AgdXBcbi51cGRhdGUtc3RhdHVzLWNvbnRhaW5lcntcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDElO1xuICAuc3R1ZGVudC1jb250YWluZXIsIC5mYWN1bHR5LWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luOiAxMHB4IDBweDtcbiAgICAvLyBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxuICAuZmFjdWx0eS1jb250YWluZXJ7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjY2M7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gIH1cbiAgLm5hbWUtc3RhdHVzLWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAubmFtZS1jb250YWluZXIsIC5zdGF0dXMtY29udGFpbmVye1xuICAgICAgd2lkdGg6IDQ4JTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgbGFiZWx7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5zdHVkZW50LXJlbWFya3MtY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxuICAubmFtZXtcbiAgICB3aWR0aDogMzUlO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIH1cbiAgLm1hcmtzLXJlbWFya3MtY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAubWFya3MtY29udGFpbmVye1xuICAgIHdpZHRoOiA0OCU7XG4gICAgLm1hcmtzLWlucHV0e1xuICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcbiAgICAgIHBhZGRpbmc6IDZweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICB9XG4gIH1cbiAgLmNvdXJzZS1pbnB1dHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwO1xuICAgIHBhZGRpbmc6IDZweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIH1cbiAgLnVybC1saXN0LWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxufVxuXG5cbiAvLyBlbmQgb2YgdGhlIHVwZGF0ZSBwb3AgdXBcblxuXG4uZmlsdGVyLWNvbnRhaW5lcntcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIG1hcmdpbi10b3A6IDA7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIC5tYW5hZ2UtYXNzaWdubWVudC1idG4tY29udGFpbmVye1xuICAgIG1hcmdpbjogMCAyMHB4O1xuICAgIC5tYW5hZ2UtYXNzaWdubWVudC1idG57XG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDg0ZjY7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgcGFkZGluZzogOHB4IDIwcHg7XG4gICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY29sb3I6ICMwMDg0ZjY7XG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMXB4ICMwMDg0ZjY7XG4gICAgICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAjMDA4NGY2O1xuICAgIH1cbiAgfVxufVxuXG5cbi5saXN0LXRhYmxlLWNvbnRhaW5lcntcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIC5saXN0LWhlYWRlci1jb250YWluZXJ7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICAvLyBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDlweDtcblxuICB9XG4gIC5saXN0LWhlYWRlci1pdGVte1xuICAgIGNvbG9yOiAjNTg1NTc0O1xuICB9XG4gIC5saXN0LXZhbHVlLW91dGVyLWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICBtaW4taGVpZ2h0OiA3MXZoO1xuICAgIG1heC1oZWlnaHQ6IDcxdmg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAubGlzdC12YWx1ZS1jb250YWluZXJ7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDZweDtcbiAgICAgIC5saXN0LXZhbHVlLWl0ZW17XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgY29sb3I6ICM1ODU1NzQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDBweCA1cHg7XG4gICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgLmxpc3QtdmFsdWUtY29udGFpbmVyOmxhc3QtY2hpbGR7XG4gICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgIH1cbiAgfVxuICAuc21hbGwtaXRlbXtcbiAgICB3aWR0aDogMTIuNSU7XG4gIH1cbiAgLm1lZGl1bS1pdGVte1xuICAgIHdpZHRoOiAxNSU7XG4gIH1cbiAgLmFsaWduLWNlbnRlcntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLmFsaWduLXJpZ2h0e1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICB9XG4gIC5uby1yZWNvcmRze1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICB9XG4gIC5mYS1wZW5jaWx7XG4gICAgY29sb3I6ICMwMDg0ZjY7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIC5zdGF0dXMtYnRue1xuICAgIGJhY2tncm91bmQ6ICMwMDg0ZjY7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cblxuXG4uZmllbGQtY2hlY2tib3gtd3JhcHBlcixcbi5maWVsZC1yYWRpby13cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZy1sZWZ0OiAzM3B4O1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICBsaW5lLWhlaWdodDogMDtcbiAgICAuZm9ybS1jaGVja2JveDpjaGVja2VkK2xhYmVsOmJlZm9yZSB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogIzAwODRmNjtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICB9XG4gICAgLmZvcm0tY2hlY2tib3g6Y2hlY2tlZCtsYWJlbDphZnRlciB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogIzAwODRmNjtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgfVxuICAgIC5mb3JtLWNoZWNrYm94OmNoZWNrZWQrbGFiZWwge1xuICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgICB9XG59XG5cbi5maWVsZC1jaGVja2JveC13cmFwcGVyIC5mb3JtLWNoZWNrYm94OmNoZWNrZWQgKyBsYWJlbDpiZWZvcmUge1xuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzAwODRmNjtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzAwODRmNjtcbiAgICB3aWR0aDogMTJweDtcbiAgICBoZWlnaHQ6IDVweDtcbiAgICBsZWZ0OiAzMXB4O1xuICAgIHRvcDogNXB4O1xufVxuXG4uZmllbGQtY2hlY2tib3gtd3JhcHBlciAuZm9ybS1jaGVja2JveCArIGxhYmVsOmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICB3aWR0aDogMTZweDtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDI5cHg7XG4gICAgdG9wOiAwO1xufVxuLmxpc3QtdGFibGUtY29udGFpbmVye1xuICAuZmllbGQtY2hlY2tib3gtd3JhcHBlciAuZm9ybS1jaGVja2JveCB7XG4gICAgb3BhY2l0eTogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMjhweDtcbiAgICB0b3A6IDJweDtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgei1pbmRleDogMTtcbiAgfVxufVxuYnV0dG9uW2Rpc2FibGVkXSB7XG4gIGN1cnNvcjogbm8tZHJvcDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/course-module/online-assignment/review-assignment/review-assignment.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/components/course-module/online-assignment/review-assignment/review-assignment.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: ReviewAssignmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewAssignmentComponent", function() { return ReviewAssignmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/authenticator.service */ "./src/app/services/authenticator.service.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_message_show_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/message-show.service */ "./src/app/services/message-show.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
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





class fileObj {
    constructor(fileName, fileType, fileSize) {
        this.fileName = fileName;
        this.fileType = fileType;
        this.fileSize = this.getSizeMB(fileSize);
    }
    getSizeMB(size) {
        return size + "KB";
    }
    getSize() {
        return this.fileSize;
    }
}
let ReviewAssignmentComponent = /** @class */ (() => {
    let ReviewAssignmentComponent = class ReviewAssignmentComponent {
        constructor(msgService, httpService, auth, cd) {
            this.msgService = msgService;
            this.httpService = httpService;
            this.auth = auth;
            this.cd = cd;
            // global variables
            this.jsonFlag = {
                isProfessional: false,
                institute_id: '',
                showHideColumn: false,
                type: 'course'
            };
            this.studentList = [];
            this.tempStudentList = [];
            this.isAllSelected = false;
            this.selectedRowGroup = [];
            this.rowSelectedCount = 0;
            this.rowSelectedId = [];
            // file upload
            this.customFileArr = [];
            this.tempArr = [];
            this.urlDetails = {
                name: '',
                url: ''
            };
            this.selectedFiles = [];
            this.fileArray = [];
            // url upload
            this.bulkUrlList = [];
            this.UploadUrlDetails = {
                name: '',
                url: ''
            };
            // status update
            this.editStatus = {
                evaluation_marks: 0,
                evaluation_required: "",
                file_id: "",
                student_comment: "",
                student_display_id: "",
                student_email: "",
                student_id: "",
                student_marks: "",
                student_name: "",
                student_phone: "",
                student_status: "Open",
                teacher_comment: "",
                // teacher_status: "Open",
                grade_id: ''
            };
            this.editStudentAttachments = {
                urlList: [],
                attachmentList: []
            };
            this.editTeacherAttachments = {
                urlList: [],
                attachmentList: []
            };
            this.removedAttchedDocsIds = [];
            this.facultyAttachments = [];
            this.facultyUrlList = [];
            this.gradeDetails = [];
            this.auth.institute_type.subscribe(res => {
                if (res == 'LANG') {
                    this.jsonFlag.isProfessional = true;
                    this.jsonFlag.type = 'batch';
                }
                else {
                    this.jsonFlag.isProfessional = false;
                    this.jsonFlag.type = 'course';
                }
            });
            this.jsonFlag.institute_id = sessionStorage.getItem('institution_id');
        }
        ngOnInit() {
            let currentURL = window.location.href;
            let splitURL = currentURL.split("/");
            this.reviewAssignmentId = splitURL[splitURL.length - 1];
            this.getStudentsList();
            this.getAssignmentDetails();
        }
        checkEvaluateButton() {
            let end_date = '';
            this.assignmentDetails.show_evaluate = false;
            end_date = (this.assignmentDetails.allow_assignment_late_submission == 'Y') ? this.assignmentDetails.assignment_late_submission_date : this.assignmentDetails.end_date;
            let currentDate = moment__WEBPACK_IMPORTED_MODULE_4__(new Date()).format('YYYY-MM-DD');
            end_date = moment__WEBPACK_IMPORTED_MODULE_4__(end_date).format('YYYY-MM-DD');
            if (moment__WEBPACK_IMPORTED_MODULE_4__(end_date).valueOf() < moment__WEBPACK_IMPORTED_MODULE_4__(currentDate).valueOf()) {
                this.assignmentDetails.show_evaluate = true;
            }
        }
        getAssignmentDetails() {
            this.auth.showLoader();
            const url = `/api/v2/onlineAssignment/get/${this.jsonFlag.institute_id}/${this.reviewAssignmentId}`;
            this.httpService.getData(url).subscribe((res) => {
                this.auth.hideLoader();
                this.assignmentDetails = res.result;
                if (this.assignmentDetails.enable_grade) {
                    this.getGradeDetails();
                }
                this.checkEvaluateButton();
            }, err => {
                this.auth.hideLoader();
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err);
            });
        }
        getStudentsList() {
            let obj = {
                "institute_id": this.jsonFlag.institute_id,
                "file_id": this.reviewAssignmentId,
                "student_status": null,
                "teacher_status": null
            };
            this.auth.showLoader();
            const url = `/api/v2/onlineAssignment/getStudentsDetail`;
            this.httpService.postData(url, obj).subscribe((res) => {
                this.auth.hideLoader();
                this.studentList = res.result;
                this.tempStudentList = res.result;
                for (let i; i < this.studentList.length; i++) {
                    this.studentList[i].uiSelected = false;
                }
            }, err => {
                this.auth.hideLoader();
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err);
            });
        }
        updateStatus(student) {
            this.editStudentAttachments.urlList = [];
            this.editStudentAttachments.attachmentList = [];
            this.editStatus.evaluation_marks = student.evaluation_marks;
            this.editStatus.evaluation_required = student.evaluation_required;
            this.editStatus.file_id = student.file_id;
            this.editStatus.student_comment = student.student_comment;
            this.editStatus.student_display_id = student.student_display_id;
            this.editStatus.student_email = student.student_email;
            this.editStatus.student_id = student.student_id;
            this.editStatus.student_marks = student.student_marks;
            this.editStatus.student_name = student.student_name;
            this.editStatus.student_phone = student.student_phone;
            this.editStatus.student_status = student.student_status;
            this.editStatus.teacher_comment = student.teacher_comment;
            // this.editStatus.teacher_status = 'Done';
            this.auth.showLoader();
            const url = `/api/v2/onlineAssignment/studentAttachmentsDetail/${this.jsonFlag.institute_id}/${this.editStatus.student_id}/${this.reviewAssignmentId}`;
            this.httpService.getData(url).subscribe((res) => {
                this.auth.hideLoader();
                $('#updateStudent').modal('show');
                if (res.result.student_attachment && res.result.student_attachment != null) {
                    for (let i = 0; i < res.result.student_attachment.length; i++) {
                        if (res.result.student_attachment[i].attachment_name == 'URL') {
                            this.editStudentAttachments.urlList.push(res.result.student_attachment[i]);
                        }
                        else {
                            this.editStudentAttachments.attachmentList.push(res.result.student_attachment[i]);
                        }
                    }
                }
                if (res.result.teacher_attachment && res.result.teacher_attachment != null) {
                    for (let i = 0; i < res.result.teacher_attachment.length; i++) {
                        if (res.result.teacher_attachment[i].attachment_name == 'URL') {
                            this.editTeacherAttachments.urlList.push(res.result.teacher_attachment[i]);
                        }
                        else {
                            this.editTeacherAttachments.attachmentList.push(res.result.teacher_attachment[i]);
                        }
                    }
                }
            }, err => {
                this.auth.hideLoader();
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err);
            });
        }
        // developed by - Nalini walunj
        // To get Grade details
        getGradeDetails() {
            let url = "/api/v1/grade_manager/getDetail/" + sessionStorage.getItem('institute_id');
            this.httpService.getData(url).subscribe((res) => {
                this.gradeDetails = res;
            }, err => {
            });
        }
        updateUpdateFile(files) {
            const preview = document.getElementById('updateUploadFile').files[0];
            if (preview != null || preview != undefined) {
                setTimeout(() => {
                    let manualUploadedFileList = document.getElementById('updateUploadFile').files;
                    let filesArr = Array.from(manualUploadedFileList);
                    this.facultyAttachments.push(filesArr[0]);
                    document.getElementById('updateUploadFile').value = null;
                }, 500);
            }
            else {
                this.msgService.showErrorMessage('error', '', "No file selected");
            }
        }
        removeNewlyAddedFile(fileName) {
            for (let index = 0; index < this.facultyAttachments.length; index++) {
                if (this.facultyAttachments[index].name == fileName) {
                    this.facultyAttachments.splice(index, 1);
                    break;
                }
            }
        }
        updateUploadURL() {
            if (this.UploadUrlDetails.name.trim() != '') {
                if (this.UploadUrlDetails.url.trim() != '') {
                    if (this.isUrlValid(this.UploadUrlDetails.url.trim())) {
                        let obj = {
                            display_name: this.UploadUrlDetails.name,
                            url: this.UploadUrlDetails.url
                        };
                        this.facultyUrlList.push(obj);
                        this.UploadUrlDetails.name = "";
                        this.UploadUrlDetails.url = "";
                    }
                    else {
                        this.msgService.showErrorMessage('error', '', "Please enter valid URL");
                    }
                }
                else {
                    this.msgService.showErrorMessage('error', '', "Please enter URL");
                }
            }
            else {
                this.msgService.showErrorMessage('error', '', "Please enter URL name");
            }
        }
        removeUpdateLink(attachment_display_name) {
            for (let index = 0; index < this.editTeacherAttachments.urlList.length; index++) {
                if (this.editTeacherAttachments.urlList[index].attachment_display_name == attachment_display_name) {
                    this.editTeacherAttachments.urlList.splice(index, 1);
                    break;
                }
            }
        }
        removeNewlyAddedLink(display_name) {
            for (let index = 0; index < this.facultyUrlList.length; index++) {
                if (this.facultyUrlList[index].display_name == display_name) {
                    this.facultyUrlList.splice(index, 1);
                    break;
                }
            }
        }
        updateStudentStatus() {
            let obj = {
                "file_id": this.reviewAssignmentId,
                "institute_id": this.jsonFlag.institute_id,
                "studentId_array": [this.editStatus.student_id],
                "category_id": "255",
                "url_lists": this.facultyUrlList,
                "attachmentId_array": this.removedAttchedDocsIds,
                "teacher_comment": this.editStatus.teacher_comment,
                // "teacher_status": 'Reviewed',
                "marks": this.editStatus.evaluation_marks,
                "grade_id": this.editStatus.grade_id
            };
            console.log(obj);
            if (this.editStatus.evaluation_required == 'Y' && !this.assignmentDetails.enable_grade && this.editStatus.evaluation_marks > this.assignmentDetails.evaluation_marks) {
                this.msgService.showErrorMessage('error', '', 'Evaluation marks cannot be greater than total marks');
                return false;
            }
            let formData = new FormData();
            formData.append("fileJson", JSON.stringify(obj));
            for (let i = 0; i < this.facultyAttachments.length; i++) {
                formData.append("files", this.facultyAttachments[i]);
            }
            let base = this.auth.getBaseUrl();
            let urlPostXlsDocument = base + "/api/v2/onlineAssignment/updateStudentAssignment";
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
            newxhr.setRequestHeader("enctype", "multipart/form-data;");
            newxhr.setRequestHeader("Accept", "application/json, text/javascript");
            newxhr.setRequestHeader("Access-Control-Allow-Origin", "*");
            newxhr.onreadystatechange = () => {
                if (newxhr.readyState == 4) {
                    if (newxhr.status >= 200 && newxhr.status < 300) {
                        // this.msgService.showErrorMessage('success', '', newxhr.response.message);
                        this.msgService.showErrorMessage('success', '', 'Updated successfully');
                        $('#updateStudent').modal('hide');
                        this.editStatus.evaluation_marks = 0;
                        this.editStatus.evaluation_required = "";
                        this.editStatus.file_id = "";
                        this.editStatus.student_comment = "";
                        this.editStatus.student_display_id = "";
                        this.editStatus.student_email = "";
                        this.editStatus.student_id = "";
                        this.editStatus.student_marks = "";
                        this.editStatus.student_name = "";
                        this.editStatus.student_phone = "";
                        this.editStatus.student_status = "Open";
                        this.editStatus.teacher_comment = "";
                        // this.editStatus.teacher_status = "Open";
                        this.editStudentAttachments.urlList = [];
                        this.editStudentAttachments.attachmentList = [];
                        this.editTeacherAttachments.urlList = [];
                        this.editTeacherAttachments.attachmentList = [];
                        this.removedAttchedDocsIds = [];
                        this.facultyAttachments = [];
                        this.facultyUrlList = [];
                        this.getStudentsList();
                    }
                    else {
                        this.msgService.showErrorMessage('error', '', newxhr.response.message);
                    }
                }
            };
            newxhr.send(formData);
        }
        removeFacultyAttachment(id) {
            for (let index = 0; index < this.editTeacherAttachments.attachmentList.length; index++) {
                if (this.editTeacherAttachments.attachmentList[index].attachment_id == id) {
                    this.editTeacherAttachments.attachmentList.splice(index, 1);
                    this.removedAttchedDocsIds.push(id);
                    break;
                }
            }
        }
        bulkUpload() {
            if (this.rowSelectedId.length > 0) {
                $('#bulk').modal('show');
            }
            else {
                this.msgService.showErrorMessage("error", '', "No student(s) selected");
            }
        }
        uploadAttachments() {
            let obj = {
                "file_id": this.reviewAssignmentId,
                "institute_id": this.jsonFlag.institute_id,
                "studentId_array": this.rowSelectedId,
                "category_id": "255",
                "url_lists": this.bulkUrlList,
                "attachmentId_array": []
            };
            let formData = new FormData();
            formData.append("fileJson", JSON.stringify(obj));
            for (let i = 0; i < this.selectedFiles.length; i++) {
                formData.append("files", this.selectedFiles[i]);
            }
            let base = this.auth.getBaseUrl();
            let urlPostXlsDocument = base + "/api/v2/onlineAssignment/uploadAssignmentSolution";
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
            newxhr.setRequestHeader("enctype", "multipart/form-data;");
            newxhr.setRequestHeader("Accept", "application/json, text/javascript");
            newxhr.setRequestHeader("Access-Control-Allow-Origin", "*");
            newxhr.onreadystatechange = () => {
                if (newxhr.readyState == 4) {
                    if (newxhr.status >= 200 && newxhr.status < 300) {
                        console.log(newxhr.response);
                        console.log(newxhr);
                        this.msgService.showErrorMessage('success', '', 'Solution uploaded successfully');
                        $('#bulk').modal('hide');
                    }
                    else {
                        this.msgService.showErrorMessage('error', '', newxhr.response.message);
                    }
                }
            };
            newxhr.send(formData);
        }
        fillFiles() {
            const preview = document.getElementById('uploadFileControl').files[0];
            if (preview != null || preview != undefined) {
                setTimeout(() => {
                    let manualUploadedFileList = document.getElementById('uploadFileControl').files;
                    let filesArr = Array.from(manualUploadedFileList);
                    this.selectedFiles.push(filesArr[0]);
                    this.customFileArr = this.generateFilePreview(filesArr);
                    document.getElementById('uploadFileControl').value = null;
                }, 500);
            }
            else {
                this.msgService.showErrorMessage('error', '', "No file selected");
            }
        }
        getName(file) {
            return file.split(".")[0];
        }
        getType(file) {
            let str = file.substring(file.lastIndexOf(".") + 1, file.length);
            return str;
        }
        generateFilePreview(fileList) {
            let size = fileList.length;
            let tempArr = [];
            this.tempArr = tempArr;
            let file;
            if (size > 0) {
                for (let i = 0; i < size; i++) {
                    file = fileList[i];
                    tempArr.push(new fileObj(this.getName(file.name), this.getType(file.name), file.size));
                }
            }
            let obj = {
                fileName: this.tempArr[0].fileName,
                fileType: this.tempArr[0].fileType
            };
            this.fileArray.push(obj);
            return tempArr;
        }
        removeFile(file) {
            for (let index = 0; index < this.fileArray.length; index++) {
                if (this.fileArray[index].fileName + '.' + this.fileArray[index].fileType == file.fileName + '.' + file.fileType) {
                    this.fileArray.splice(index, 1);
                    break;
                }
            }
        }
        uploadURL() {
            if (this.urlDetails.name.trim() != '') {
                if (this.urlDetails.url.trim() != '') {
                    if (this.isUrlValid(this.urlDetails.url.trim())) {
                        let obj = {
                            display_name: this.urlDetails.name,
                            url: this.urlDetails.url
                        };
                        this.bulkUrlList.push(obj);
                        this.urlDetails.name = "";
                        this.urlDetails.url = "";
                    }
                    else {
                        this.msgService.showErrorMessage('error', '', "Please enter valid URL");
                    }
                }
                else {
                    this.msgService.showErrorMessage('error', '', "Please enter URL");
                }
            }
            else {
                this.msgService.showErrorMessage('error', '', "Please enter URL name");
            }
        }
        isUrlValid(userInput) {
            var res = userInput.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
            if (res == null)
                return false;
            else
                return true;
        }
        removeLink(display_name) {
            for (let index = 0; index < this.bulkUrlList.length; index++) {
                if (this.bulkUrlList[index].display_name == display_name) {
                    this.bulkUrlList.splice(index, 1);
                    break;
                }
            }
        }
        selectAllRows(ev) {
            this.cd.reattach();
            this.cd.markForCheck();
            ev.preventDefault();
            ev.stopPropagation();
            if (ev.target.checked) {
                this.studentList.forEach(x => x.uiSelected = ev.target.checked);
                this.rowSelectedCount = this.studentList.length;
                this.getSelectedRows();
            }
            else {
                this.studentList.forEach(x => x.uiSelected = ev.target.checked);
                this.rowSelectedCount = 0;
                this.getSelectedRows();
            }
            this.cd.detectChanges();
            this.cd.detach();
        }
        getSelectedRows() {
            this.rowSelectedId = [];
            this.studentList.forEach(e => {
                if (e.uiSelected) {
                    this.rowSelectedId.push(e.student_id);
                }
            });
        }
        isAllChecked() {
            return this.studentList.every(_ => _.uiSelected);
        }
        removeFromSelectedArr(id) {
            return this.rowSelectedId.filter(e => e != id);
        }
        rowCheckboxChange(eve) {
            this.cd.markForCheck();
            let status = eve.uiSelected;
            /* if the checkbox is already checked uncheck it and perform operation */
            if (status == false) {
                eve.uiSelected = false;
                this.rowSelectedCount--;
                this.rowSelectedId = this.removeFromSelectedArr(eve.student_id);
            }
            else if (status == true) {
                eve.uiSelected = true;
                this.rowSelectedCount++;
                this.rowSelectedId.push(eve.student_id);
            }
            this.isAllChecked();
            this.getSelectedRows();
        }
        // Download files
        downloadFile(object) {
            let obj = {
                'institute_id': this.jsonFlag.institute_id,
                'attachmentId_array': [object.attachment_id]
            };
            this.auth.showLoader();
            const url = `/api/v2/onlineAssignment/downloadFile`;
            this.httpService.postData(url, obj).subscribe((res) => {
                this.auth.hideLoader();
                var result = res.result;
                var hiddenDownloader = document.getElementById('downloadFile');
                hiddenDownloader.setAttribute('href', result.body);
                hiddenDownloader.setAttribute('target', '_blank');
                hiddenDownloader.click();
                // if (result.data != '' && result.data != null) {
                //     var blob = new Blob([result.data]);
                //     let fileUrl = (window.URL.createObjectURL(blob));
                //     if (fileUrl != null) {
                //       var file = object.attachment_display_name + '.' + object.extension;
                //     }
                // }
            }, err => {
                this.auth.hideLoader();
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err);
            });
        }
    };
    ReviewAssignmentComponent.ctorParameters = () => [
        { type: _services_message_show_service__WEBPACK_IMPORTED_MODULE_3__["MessageShowService"] },
        { type: _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
        { type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticatorService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
    ];
    ReviewAssignmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-review-assignment',
            template: __importDefault(__webpack_require__(/*! raw-loader!./review-assignment.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/online-assignment/review-assignment/review-assignment.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./review-assignment.component.scss */ "./src/app/components/course-module/online-assignment/review-assignment/review-assignment.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_services_message_show_service__WEBPACK_IMPORTED_MODULE_3__["MessageShowService"],
            _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _services_authenticator_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticatorService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], ReviewAssignmentComponent);
    return ReviewAssignmentComponent;
})();



/***/ })

}]);
//# sourceMappingURL=components-course-module-online-assignment-online-assignment-module-es2015.js.map