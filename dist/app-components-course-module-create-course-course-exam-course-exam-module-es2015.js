(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-components-course-module-create-course-course-exam-course-exam-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/create-course/course-exam/course-exam.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/create-course/course-exam/course-exam.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"middle-section\">\n    <section class=\"exam-schedule\">\n        <div class=\"heading-section\">\n            <!-- <h1>\n                Exam Schedule Details\n            </h1> -->\n        </div>\n\n        <div class=\"common-search-filter\">\n            <div *ngIf=\"isLangInstitute\">\n                <div class=\"row\">\n                    <div class=\"c-sm-3 c-md-3 c-lg-3\">\n                        <div class=\"field-wrapper\" [ngClass]=\"{'has-value': batchData.standard_id != '-1'}\">\n                            <label for=\"ddnMAsterCourse\">Master Course<span class=\"text-danger\">*</span></label>\n                            <select id=\"ddnMAsterCourse\" name=\"ddnMAsterCourse\" class=\"form-ctrl\"\n                                [(ngModel)]=\"batchData.standard_id\"\n                                (ngModelChange)=\"onBatchMasterCourseSelection($event)\">\n                                <option value=\"-1\">Select Master Course</option>\n                                <option [value]=\"master.standard_id\" *ngFor=\"let  master of masterCourseList\">\n                                    {{master.standard_name}}\n                                </option>\n                            </select>\n                        </div>\n                    </div>\n                    <div class=\"c-sm-3 c-md-3 c-lg-3\">\n                        <div class=\"field-wrapper\" [ngClass]=\"{'has-value': batchData.subject_id != '-1'}\">\n                            <label for=\"ddnMAsterCourse\">Course<span class=\"text-danger\">*</span></label>\n                            <select id=\"ddnMAsterCourse\" name=\"ddnMAsterCourse\" class=\"form-ctrl\"\n                                [(ngModel)]=\"batchData.subject_id\" (ngModelChange)=\"onBatchCourseSelection($event)\">\n                                <option value=\"-1\">Select Course</option>\n                                <option [value]=\"master.subject_id\" *ngFor=\"let  master of courseList\">\n                                    {{master.subject_name}}\n                                </option>\n                            </select>\n\n                        </div>\n                    </div>\n                    <div class=\"c-sm-3 c-md-3 c-lg-3\">\n                        <div class=\"field-wrapper\" [ngClass]=\"{'has-value': batchData.batch_id != '-1'}\">\n                            <label for=\"sc\">Batch<span class=\"text-danger\">*</span></label>\n                            <select id=\"sc\" class=\"form-ctrl\" [(ngModel)]=\"batchData.batch_id\">\n                                <option value=\"-1\">Select Batch</option>\n                                <option [value]=\"subject.batch_id\" *ngFor=\"let subject of batchesList\">\n                                    {{subject.batch_name}}\n                                </option>\n                            </select>\n\n                        </div>\n                    </div>\n                    <div class=\"c-sm-3 c-md-3 c-lg-3\" style=\"margin-top: 25px\">\n                        <button class=\"btn fullBlue\" (click)=\"batchModelGoClick()\">Go</button>\n                    </div>\n                </div>\n                <div class=\"row\" *ngIf=\"showCourseStartEndDate\">\n                    <div class=\"c-sm-6 c-md-6 c-lg-6\">\n                        <span class=\"spanText\">Course Start Date : {{batchStartDate | date: 'dd-MMM-yyyy'}}</span>\n                        &emsp;\n                        <span class=\"spanText\">Course End Date : {{batchEndDate | date: 'dd-MMM-yyyy'}} </span>\n                    </div>\n                </div>\n            </div>\n\n            <div *ngIf=\"!isLangInstitute\">\n\n                <div class=\"row\" style=\"margin-top: -50px;\">\n\n                    <div class=\"c-sm-3 c-md-3 c-lg-3\">\n                        <div class=\"field-wrapper\" [ngClass]=\"{'has-value': courseData.master_course != ''}\">\n                            <!-- changes by Nalini - to handle school model conditions -->\n                            <label for=\"ddnMAsterCourse\">{{schoolModel ? 'Standard' : 'Master Course'}}\n                                <span class=\"text-danger\">*</span>\n                            </label>\n                            <select id=\"ddnMAsterCourse\" name=\"ddnMAsterCourse\" class=\"form-ctrl\"\n                                [(ngModel)]=\"courseData.master_course\" (ngModelChange)=\"getCourseList(event)\">\n                                <option value=\"-1\">Select {{schoolModel ? 'Standard' : 'Master Course'}}</option>\n                                <option [value]=\"master\" *ngFor=\"let  master of masterCourseList\">\n                                    {{master}}\n                                </option>\n                            </select>\n\n                        </div>\n                    </div>\n\n                    <div class=\"c-sm-3 c-md-3 c-lg-3\">\n                        <div class=\"field-wrapper\" [ngClass]=\"{'has-value': courseData.course_id != -1}\">\n                            <label for=\"ddnMAsterCourse\">{{schoolModel ? 'Section' : 'Course'}}\n                                <span class=\"text-danger\">*</span>\n                            </label>\n                            <select id=\"ddnMAsterCourse\" name=\"ddnMAsterCourse\" class=\"form-ctrl\"\n                                [(ngModel)]=\"courseData.course_id\" (ngModelChange)=\"displayCourseDate()\">\n                                <option value=\"-1\">Select {{schoolModel ? 'Section' : 'Course'}}</option>\n                                <option [value]=\"master.course_id\" *ngFor=\"let  master of courseList\">\n                                    {{master.course_name}}\n                                </option>\n                            </select>\n\n                        </div>\n                    </div>\n\n                    <div class=\"c-sm-3 c-md-3 c-lg-3\">\n\n                        <div class=\"field-wrapper datePickerBox has-value\">\n                            <label for=\"reqDate\">Exam Schedule Date\n                                <span class=\"text-danger\">*</span>\n                            </label>\n                            <input type=\"text\" value=\"\" id=\"reqDate\" class=\"form-ctrl bsDatepicker\"\n                                [(ngModel)]=\"courseData.requested_date\" readonly=\"true\" name=\"reqDate\" bsDatepicker\n                                style=\"z-index: 1;\">\n\n                        </div>\n\n                    </div>\n\n                    <div class=\"c-sm-3 c-md-3 c-lg-3\" style=\"margin-top: 25px\">\n                        <button class=\"btn fullBlue\" (click)=\"getExamSchedule()\">Go</button>\n                    </div>\n                </div>\n\n                <div class=\"row\" *ngIf=\"showCourseStartEndDate\" style=\"margin-top: 5px;\">\n                    <div class=\"c-sm-6 c-md-6 c-lg-6\">\n                        <span class=\"spanText\">Course Start Date : <span\n                                style=\"font-weight: 600;\">{{batchStartDate | date: 'dd-MMM-yyyy'}}</span></span>\n                        &emsp;\n                        <span class=\"spanText\">Course End Date : <span\n                                style=\"font-weight: 600;\">{{batchEndDate | date: 'dd-MMM-yyyy'}}</span></span>\n                    </div>\n                </div>\n\n            </div>\n\n        </div>\n\n        <div class=\"content-section\" *ngIf=\"showContentSection\">\n\n\n            <div *ngIf=\"isLangInstitute\" class=\"langModelCss\">\n\n                <div class=\"row\">\n\n                    <div class=\"c-sm-6 c-md-6 c-lg-6\">\n                        <span class=\"spanText\">{{batchStartDate}} to {{batchEndDate}}</span>\n                    </div>\n\n                </div>\n\n                <div class=\"row examAdder\" *ngIf=\"jsonVar.isSheduleBatch\">\n\n                    <div class=\"c-lg-2 c-md-2 c-sm-2 \">\n                        <div class=\"form-wrapper datePickerBox\">\n                            <label for=\"csd\">Date\n                                <span class=\"text-danger\">*</span>\n                            </label>\n                            <input type=\"text\" value=\"\" id=\"csd\" class=\"side-form-ctrl bsDatepicker constantHeight\"\n                                [(ngModel)]=\"batchAdderData.exam_date\" readonly=\"true\" name=\"csd\" bsDatepicker>\n                        </div>\n                    </div>\n\n                    <div class=\"c-lg-1 c-md-1 c-sm-1\" style=\"padding: 0;\">\n                        <div class=\"form-wrapper topicsBox\">\n                            <label>\n                                <span>Topic</span>\n                            </label><br>\n                            <input type=\"text\" class=\"side-form-ctrl text-center\" *ngIf=\"!selectedTopicsListObj.length\"\n                                (click)=\"fetchTopics()\" style=\"height: 30px;cursor:pointer\" value=\"\"\n                                placeholder=\"Link\" />\n                            <i class=\"fa fa-link\" (click)=\"fetchTopics()\" *ngIf=\"!selectedTopicsListObj.length\"\n                                style=\"position: absolute;  top: 28px; right: 10px;cursor: pointer\"></i>\n\n                            <!--when topics are not linked-->\n                            <input type=\"text\" class=\"side-form-ctrl text-center\" *ngIf=\"selectedTopicsListObj.length\"\n                                (click)=\"fetchSelectedTopics()\" style=\"height: 30px;cursor:pointer;    border-color: blue;\n                            color: blue;\" value=\"\" placeholder=\"Linked\" />\n                            <i class=\"fa fa-link\" (click)=\"fetchSelectedTopics()\" *ngIf=\"selectedTopicsListObj.length\"\n                                style=\"position: absolute;  top: 28px; right: 10px;cursor: pointer;color:blue\"></i>\n                        </div>\n                    </div>\n\n                    <div class=\"c-sm-2 c-lg-2 c-md-2\">\n\n                        <div class=\"form-wrapper timepick\">\n                            <label for=\"startTime\">Start Time</label><br>\n                            <div class=\"tbox\">\n                                <div class=\"times\">\n                                    <select id=\"\" class=\"mins side-form-ctrl constantHeight\"\n                                        [(ngModel)]=\"batchAdderData.start_time.hour\" name=\"startTime\">\n                                        <option [value]=\"time\" *ngFor=\"let time of times\">\n                                            {{time}}\n                                        </option>\n                                    </select>\n                                </div>\n                                <div class=\"times\">\n                                    <select id=\"\" class=\"mers side-form-ctrl constantHeight\"\n                                        [(ngModel)]=\"batchAdderData.start_time.minute\" name=\"minute\">\n                                        <option *ngFor=\"let minute of minArr\" [value]=\"minute\">\n                                            {{minute}}\n                                        </option>\n                                    </select>\n                                </div>\n                            </div>\n                        </div>\n\n                    </div>\n\n                    <div class=\"c-sm-2 c-lg-2 c-md-2\">\n\n                        <div class=\"form-wrapper timepick\">\n                            <label for=\"startTime\">End Time</label><br>\n                            <div class=\"tbox\">\n                                <div class=\"times\">\n                                    <select id=\"\" class=\"mins side-form-ctrl constantHeight\"\n                                        [(ngModel)]=\"batchAdderData.end_time.hour\" name=\"startTime\">\n                                        <option [value]=\"time\" *ngFor=\"let time of times\">\n                                            {{time}}\n                                        </option>\n                                    </select>\n                                </div>\n                                <div class=\"times\">\n                                    <select id=\"\" class=\"mers side-form-ctrl constantHeight\"\n                                        [(ngModel)]=\"batchAdderData.end_time.minute\" name=\"minute\">\n                                        <option *ngFor=\"let minute of minArr\" [value]=\"minute\">\n                                            {{minute}}\n                                        </option>\n                                    </select>\n                                </div>\n                            </div>\n                        </div>\n\n                    </div>\n\n                    <div class=\"c-sm-2 c-lg-2 c-md-2\">\n                        <div class=\"form-wrapper\">\n                            <label for=\"customDescTxt\">Description</label>\n                            <textarea class=\"side-form-ctrl constantHeight\" [(ngModel)]=\"batchAdderData.exam_desc\"\n                                id=\"customDescTxt\" name=\"customDescTxt\" placeholder=\"Enter Exam Description\"></textarea>\n                        </div>\n                    </div>\n\n                    <div class=\"c-sm-2 c-lg-2 c-md-2\" *ngIf=\"examScheduleData.is_exam_grad_feature == 0\">\n                        <div class=\"form-wrapper\" style=\"width: 75px\">\n                            <label for=\"inpTotalMarks\">Total Marks</label>\n                            <input type=\"text\" onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57)\"\n                                class=\"side-form-ctrl constantHeight\" [(ngModel)]=\"batchAdderData.total_marks\">\n                        </div>\n                    </div>\n\n                    <div class=\"btnAdd\">\n                        <i class=\"fas fa-plus-circle\"\n                            style=\"font-family: FontAwesome;font-size: 25px;color: #0083f6;cursor: pointer;\"\n                            (click)=\"addNewExamSchedule()\"></i>\n                        <!-- <button class=\"btn fullBlue\">Add</button> -->\n                    </div>\n\n                </div>\n                <div class=\"row text-center\" style=\"color: red; margin-bottom: 10px;font-weight: 600;\"\n                    *ngIf=\"!jsonVar.isSheduleBatch\">\n                    You are not allowed to schedule Class/Exam as current Batch is expired !!!!!!\n                </div>\n                <div class=\"table-wrapper-Lang\">\n                    <div class=\"\">\n                        <table>\n                            <thead>\n                                <tr>\n                                    <th>\n                                        Date\n                                    </th>\n                                    <th>\n                                        Topics\n                                    </th>\n                                    <th>\n                                        Start Time\n                                    </th>\n                                    <th>\n                                        End Time\n                                    </th>\n                                    <th *ngIf=\"examScheduleData.is_exam_grad_feature == 0\">\n                                        Total Marks\n                                    </th>\n                                    <th>\n                                        Description\n                                    </th>\n                                    <th *ngIf=\"jsonVar.isSheduleBatch\">\n                                        Action\n                                    </th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr *ngFor=\"let row of examSchedule ; let i= index ; trackBy : index\">\n                                    <td>\n                                        {{row.exam_date | dateMonthYear}}\n                                    </td>\n                                    <td>\n                                        <input type=\"textbox\" class=\"side-form-ctrl topic-link\"\n                                            *ngIf=\"row.topics_covered != '' && row.topics_covered != null\" name=\"label\"\n                                            style=\"height: 30px;border:1px solid blue;text-align:center;cursor:pointer\"\n                                            id=\"classDetailsTxt9\" placeholder=\"Linked\" readonly\n                                            (click)=\"editTopics(row)\" />\n                                        <i class=\"fa fa-link\" (click)=\"editTopics(row)\"\n                                            *ngIf=\"row.topics_covered != '' && row.topics_covered != null\"\n                                            style=\"cursor: pointer;font-size: 15px;margin-left: -30px;margin-top:6px;color:#0084f6\"></i>\n\n                                        <input type=\"textbox\" class=\"side-form-ctrl topic-link\"\n                                            *ngIf=\"row.topics_covered == '' || row.topics_covered == null\" name=\"label\"\n                                            style=\"height: 30px;cursor:pointer;text-align:center;border:1px solid lightgrey\"\n                                            id=\"classDetailsTxt9\" placeholder=\"Link\" readonly\n                                            (click)=\"editTopics(row)\" />\n                                        <i class=\"fa fa-link\" (click)=\"editTopics(row)\"\n                                            *ngIf=\"row.topics_covered == '' || row.topics_covered == null\"\n                                            style=\"cursor: pointer;color: #bdbdbd;font-size: 15px;margin-left: -30px;margin-top:6px\"></i>\n                                    </td>\n                                    <td>\n                                        {{row.start_time}}\n                                    </td>\n                                    <td>\n                                        {{row.end_time}}\n                                    </td>\n                                    <td *ngIf=\"examScheduleData.is_exam_grad_feature == 0\">\n                                        <div class=\"form-wrapper\">\n                                            <input type=\"text\"\n                                                onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57)\"\n                                                class=\"side-form-ctrl torlMarksWidth\" name=\"label\"\n                                                [(ngModel)]=\"row.total_marks\">\n                                        </div>\n                                    </td>\n                                    <td>\n                                        <div class=\"form-wrapper\">\n                                            <input type=\"textbox\" class=\"side-form-ctrl\" name=\"label\"\n                                                [(ngModel)]=\"row.exam_desc\">\n                                        </div>\n                                    </td>\n                                    <td *ngIf=\"jsonVar.isSheduleBatch\">\n\n                                        <div class=\"action-box\">\n                                            <span class=\"mail-notification\"\n                                                *ngIf=\"row.schd_id != 0 && (currentDate <= row.exam_date)\"\n                                                (click)=\"notifyExamSchedule(row)\" title=\"Notify\">\n                                            </span>\n                                            <span class=\"delete-btn\" style=\"font-family: FontAwesome;font-size: 20px\"\n                                                *ngIf=\"row.schd_id == 0 || (currentDate < row.exam_date)\"\n                                                (click)=\"deleteExamSchedule(row,i)\" title=\"Delete\">\n                                                <i class=\"fa fa-trash-o \" aria-hidden=\"true \"></i>\n                                            </span>\n                                            <!-- <span *ngIf=\"row.schd_id != 0\" (click)=\"markAttendanceSchedule(row)\" title=\"Mark Attendance\">\n                                                <img src=\"../../../../assets/images/attendance.png\" width=\"20px\" height=\"20px\" style=\"position: relative;top: 2px;\">\n                                            </span> -->\n                                            <span *ngIf=\"row.schd_id != 0 && (currentDate <= row.exam_date)\"\n                                                (click)=\"cancelExamSchedule(row)\" title=\"Cancel Exam\">\n                                                <i class=\"fa fa-times\"\n                                                    style=\"font-family: FontAwesome;font-size: 20px; position: relative;top: -1px\"\n                                                    aria-hidden=\"true\"></i>\n                                            </span>\n                                        </div>\n                                    </td>\n                                </tr>\n                                <tr *ngIf=\"examSchedule.length == 0\">\n                                    <td colspan=\"6\">\n                                        No Schedule OF Exam\n                                    </td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n\n                <div class=\"row btn-Group\">\n                    <div class=\"pull-left\" style=\"margin-left: 7%\">\n                        <button type=\"button\" class=\"btn\" Style=\"margin-left: 0px;\" name=\"button\"\n                            routerLink=\"/view/course/coursePlanner/exam\"\n                            *ngIf=\"coursePlannerStatus=='true'\">Back</button>\n                    </div>\n                    <button class=\"btn fullBlue pull-right\" *ngIf=\"examSchedule.length > 0\"\n                        [disabled]=\"auth.isRippleLoad.getValue()\" (click)=\"addDataToExamSchedule()\">Create Exam\n                        Schedule</button>\n                    <!-- <button class=\"btn fullBlue pull-right\" *ngIf=\"examScheduleData.otherSchd.length !=0\" (click)=\"addDataToExamSchedule()\">Update</button> -->\n                </div>\n\n                <h3 class=\"row\">Cancelled Exams</h3>\n\n                <div class=\"cancelClass-table\">\n                    <div class=\"\">\n                        <table>\n                            <thead>\n                                <tr>\n                                    <th>Date</th>\n                                    <th>Start Time</th>\n                                    <th>End Time</th>\n                                    <th *ngIf=\"examScheduleData.is_exam_grad_feature == 0\">Total Marks</th>\n                                    <th>Cancel Reason</th>\n                                    <th *ngIf=\"jsonVar.isSheduleBatch\">Action</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr *ngFor=\"let row of cancelledSchedule ; let i= index ; trackBy : index\">\n                                    <td>\n                                        {{row.exam_date}}\n                                    </td>\n                                    <td>\n                                        {{row.start_time}}\n                                    </td>\n                                    <td>\n                                        {{row.end_time}}\n                                    </td>\n                                    <td *ngIf=\"examScheduleData.is_exam_grad_feature == 0\">\n                                        {{row.total_marks}}\n                                    </td>\n                                    <td>\n                                        {{row.exam_desc}}\n                                    </td>\n                                    <td *ngIf=\"jsonVar.isSheduleBatch\">\n                                        <div class=\"action-Menu\">\n\n                                            <div class=\"action-box\">\n                                                <span class=\"mail-notification\"\n                                                    title=\"Send notification for cancelled exam schedule\"\n                                                    (click)=\"notifyCancelClass(row)\">\n                                                </span>\n                                                <span class=\"delete-btn\"\n                                                    style=\"font-family: FontAwesome;font-size: 20px\"\n                                                    title=\"Uncancel Schedule\" *ngIf=\"(currentDate < row.exam_date)\"\n                                                    (click)=\"unCancelClass(row)\">\n                                                    <i class=\"fa fa-trash-o \" aria-hidden=\"true \"></i>\n                                                </span>\n                                            </div>\n\n                                            <!-- <a title=\"Send notification for cancelled exam schedule\" (click)=\"notifyCancelClass(row)\">Notify</a>\n                                            <a title=\"Uncancel Schedule\" *ngIf=\"(currentDate < row.exam_date)\" (click)=\"unCancelClass(row)\">Uncancel Class</a> -->\n                                        </div>\n                                    </td>\n                                </tr>\n                                <tr *ngIf=\"cancelledSchedule.length ==0\">\n                                    <td colspan=\"6\">\n                                        No Cancelled Schedule\n                                    </td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n\n\n            </div>\n\n            <div *ngIf=\"!isLangInstitute\" class=\"courseModelWrapper\">\n\n                <!-- <div class=\"row spli-Btn\"> -->\n\n                <!-- <p-selectButton [options]=\"types\" [(ngModel)]=\"selectedType\" (onChange)=\"onChanged($event)\"></p-selectButton> -->\n\n                <!-- <div class=\"pull-right\" *ngIf=\"selectedType == 'course' && examScheduleData.coursesList[0].courseClassSchdList\" style=\"margin-right:10px;\">\n                        <button class=\"btn fullBlue small-btn add_exam_btn\" (click)=\"addMoreSchedule()\" title=\"Used to create an additional/ multiple exams in same course on same day but with different timings.\">+ Add Exam</button>\n                    </div> -->\n\n                <!-- </div> -->\n\n                <div class=\"row course-model\" *ngIf=\"selectedType == 'course'\">\n\n                    <!-- Add new Exam HTML -->\n\n                    <div class=\"exam_adder_div\">\n\n                        <div class=\"row dateInfo\">\n\n                            <div class=\"c-sm-3 c-lg-3 c-md-3\">\n\n                                <div class=\"form-wrapper timepick\">\n                                    <label for=\"startTime\">Start Time</label>\n                                    <div class=\"tbox\">\n                                        <div class=\"times\">\n                                            <select id=\"\" class=\"mins side-form-ctrl constantHeight\"\n                                                [(ngModel)]=\"newExamData.startTimeHrs\" name=\"startTime\">\n                                                <option [value]=\"time\" *ngFor=\"let time of times\">\n                                                    {{time}}\n                                                </option>\n                                            </select>\n                                        </div>\n                                        <div class=\"times\">\n                                            <select id=\"\" class=\"mers side-form-ctrl constantHeight\"\n                                                [(ngModel)]=\"newExamData.startTimeMins\" name=\"minute\">\n                                                <option *ngFor=\"let minute of minArr\" [value]=\"minute\">\n                                                    {{minute}}\n                                                </option>\n                                            </select>\n                                        </div>\n                                    </div>\n                                </div>\n\n                            </div>\n\n                            <div class=\"c-sm-3 c-lg-3 c-md-3\">\n\n                                <div class=\"form-wrapper timepick\">\n                                    <label for=\"startTime\">End Time</label>\n                                    <div class=\"tbox\">\n                                        <div class=\"times\">\n                                            <select id=\"\" class=\"mins side-form-ctrl constantHeight\"\n                                                [(ngModel)]=\"newExamData.endTimeHrs\" name=\"startTime\">\n                                                <option [value]=\"time\" *ngFor=\"let time of times\">\n                                                    {{time}}\n                                                </option>\n                                            </select>\n                                        </div>\n                                        <div class=\"times\">\n                                            <select id=\"\" class=\"mers side-form-ctrl constantHeight\"\n                                                [(ngModel)]=\"newExamData.endTimeMins\" name=\"minute\">\n                                                <option *ngFor=\"let minute of minArr\" [value]=\"minute\">\n                                                    {{minute}}\n                                                </option>\n                                            </select>\n                                        </div>\n                                    </div>\n                                </div>\n\n                            </div>\n\n                            <div class=\"pull-right\" style=\"margin-right:10px;\">\n                                <button (click)=\"clearField()\" class=\"btn\">Clear</button>\n                            </div>\n\n                        </div>\n\n                        <div class=\"row basic-detail\">\n\n                            <div class=\"c-sm-2 c-lg-2 c-md-2\">\n                                <div class=\"form-wrapper\">\n                                    <label for=\"subject\">Subject\n                                        <span class=\"text-danger\">*</span>\n                                    </label>\n                                    <select id=\"subject\" class=\"side-form-ctrl constantHeight subjectName\"\n                                        [(ngModel)]=\"subject_id\" (ngModelChange)=\"subjectChanged()\">\n                                        <option value=\"-1\" selected=\"selected\">Select Subject</option>\n                                        <option [value]=\"time.subject_id\" *ngFor=\"let time of subjectListData[0]\">\n                                            {{time.is_optional_subject?time.subject_name+'(Optional)':time.subject_name}}\n                                        </option>\n                                    </select>\n                                </div>\n                            </div>\n                            <div class=\"c-sm-2 c-lg-2 c-md-2\" *ngIf=\"schoolModel\">\n                                <div class=\"form-wrapper\">\n                                    <label for=\"examType\">Exam Type\n                                        <span class=\"text-danger\">*</span>\n                                    </label>\n                                    <select id=\"examType\" class=\"side-form-ctrl constantHeight subjectName\"\n                                        [(ngModel)]=\"selectedExamTypeId\" >\n                                        <option value=\"-1\" selected=\"selected\">Select Exam Type</option>\n                                        <option [value]=\"list.exam_type_id+','+list.exam_type\" *ngFor=\"let list of examTypeList\">\n                                            {{list.exam_type}}\n                                        </option>\n                                    </select>\n                                </div>\n                            </div>\n\n                            <div class=\"c-sm-1 c-lg-1 c-md-1\">\n                                <div class=\"form-wrapper\" style=\"width: 75px\">\n                                    <label for=\"marks\">Marks\n                                        <span class=\"text-danger\">*</span>\n                                    </label>\n                                    <input type=\"number\" class=\"side-form-ctrl constantHeight\" style=\"width:90px;\"\n                                        (ngModelChange)=\"checkNgetiveValue($event)\" [(ngModel)]=\"exam_marks\" id=\"marks\">\n                                </div>\n                            </div>\n\n                            <div class=\"c-sm-2 c-lg-2 c-md-2\" *ngIf=\"!schoolModel\">\n                                <div class=\"form-wrapper\">\n                                    <label for=\"topics\">Topic</label>\n                                    <input type=\"textbox\" class=\"side-form-ctrl constantHeight\" name=\"label\"\n                                        style=\"height: 31px;\" id=\"classDetailsTxt9\" placeholder=\"Link Topic\" readonly\n                                        (click)=\"topicListing()\"\n                                        [ngClass]=\"topicsName.length > 0 && subject_id != '' ? 'topic-linked' : 'topic-link'\">\n                                    <i class=\"fa fa-link\" aria-hidden=\"true\" (click)=\"topicListing()\"\n                                        style=\"cursor: pointer;color: #bdbdbd;font-size: 15px;position: absolute; top: 28px; right: 25px;\"></i>\n                                </div>\n                            </div>\n\n                            <div class=\"c-sm-2 c-lg-2 c-md-2\">\n                                <div class=\"form-wrapper\">\n                                    <label for=\"customDescTxt\">Description</label>\n                                    <textarea class=\"side-form-ctrl constantHeight\" [(ngModel)]=\"exam_desc\"\n                                        id=\"customDescTxt\" name=\"customDescTxt\"\n                                        placeholder=\"Enter Exam Description\"></textarea>\n                                </div>\n                            </div>\n\n                            <div class=\"c-sm-2 c-lg-2 c-md-2\">\n                                <div class=\"form-wrapper\" style=\"width: 75px\">\n                                    <label for=\"inpTotalMarks\">Room No</label>\n                                    <input type=\"string\" class=\"side-form-ctrl constantHeight\"\n                                        [(ngModel)]=\"exam_room_no\" id=\"inpTotalMarks\">\n                                </div>\n                            </div>\n\n                            <div class=\"c-sm-2 c-lg-2 c-md-2 pull-right\" style=\"margin-top: 15px;\">\n                                <button type=\"button\" name=\"button\" (click)=\"addNewExamSubject()\"\n                                    class=\"btn  small-btn action_btn pull-right\">Add Subject &nbsp;<i\n                                        class=\"fas fa-plus-circle\"\n                                        style=\"font-family: FontAwesome;font-size: 14px;color: #0083f6;cursor: pointer;\"></i></button>\n                            </div>\n\n                        </div>\n\n\n                        <div class=\"row displayComp\"\n                            *ngFor=\"let row of newExamSubjectData; let i= index ; trackBy : index\"\n                            style=\"padding:0px 6px;\" id=\"row{{i}}\">\n\n                            <div class=\"c-sm-2 c-lg-2 c-md-2\">\n                                <span class=\"view-comp\">{{row.is_optional_subject?row.subject_name+'(Optional)':row.subject_name}}</span>\n                                <span class=\"edit-comp\">{{row.is_optional_subject?row.subject_name+'(Optional)':row.subject_name}}</span>\n                                <!-- <div class=\"form-wrapper edit-comp\">\n                            <select id=\"subject\" class=\"side-form-ctrl constantHeight subjectName\" [(ngModel)]=\"edit_subject_id\">\n                                <option value=\"-1\" selected=\"selected\">Select Subject</option>\n                                <option [value]=\"time.subject_id\" *ngFor=\"let time of subjectListData[0]\">\n                                    {{time.subject_name}}\n                                </option>\n                            </select>\n                          </div> -->\n                            </div>\n                            <div class=\"c-sm-2 c-lg-2 c-md-2\" *ngIf=\"schoolModel\">\n                                <span class=\"view-comp\">{{row.exam_type}}</span>\n                                <span class=\"edit-comp\">{{row.exam_type}}</span>\n                                <!-- <div class=\"form-wrapper edit-comp\">\n                            <select id=\"subject\" class=\"side-form-ctrl constantHeight subjectName\" [(ngModel)]=\"edit_subject_id\">\n                                <option value=\"-1\" selected=\"selected\">Select Subject</option>\n                                <option [value]=\"time.subject_id\" *ngFor=\"let time of subjectListData[0]\">\n                                    {{time.subject_name}}\n                                </option>\n                            </select>\n                          </div> -->\n                            </div>\n\n                            <div class=\"c-sm-2 c-lg-2 c-md-2\">\n                                <span class=\"view-comp\">{{row.exam_marks}} marks</span>\n                                <div class=\"form-wrapper edit-comp\">\n                                    <input type=\"number\" class=\"side-form-ctrl constantHeight\" style=\"width:90px;\"\n                                        [(ngModel)]=\"edit_exam_marks\">\n                                </div>\n                            </div>\n\n                            <div class=\"c-sm-2 c-lg-2 c-md-2 topictext\" *ngIf=\"!schoolModel\">\n                                <span class=\"view-comp\"\n                                    title={{row.subject_topics}}>{{row.subject_topics | slice:0:20}}</span>\n                                <div class=\"form-wrapper edit-comp\">\n                                    <input type=\"textbox\" class=\"side-form-ctrl constantHeight\" name=\"label\"\n                                        style=\"height: 31px;\" id=\"classDetailsTxt9\" placeholder=\"Link Topic\" readonly\n                                        (click)=\"preSelectedTopicListing()\"\n                                        [ngClass]=\"row.subject_topics ? 'topic-linked' : 'topic-link'\">\n                                    <i class=\"fa fa-link\" aria-hidden=\"true\" (click)=\"preSelectedTopicListing()\"\n                                        style=\"cursor: pointer;color: #bdbdbd;font-size: 15px;position: absolute; top: 10px; right: 25px;\"></i>\n                                </div>\n                            </div>\n\n\n                            <div class=\"c-sm-2 c-lg-2 c-md-2\">\n                                <span class=\"view-comp\">{{row.exam_desc}}</span>\n                                <div class=\"form-wrapper edit-comp\">\n                                    <textarea class=\"side-form-ctrl constantHeight\" [(ngModel)]=\"edit_exam_desc\"\n                                        id=\"customDescTxt\" name=\"customDescTxt\"\n                                        placeholder=\"Enter Exam Description\"></textarea>\n                                </div>\n                            </div>\n\n                            <div class=\"c-sm-2 c-lg-2 c-md-2\">\n                                <span class=\"view-comp\">{{row.exam_room_no}}</span>\n                                <div class=\"form-wrapper edit-comp\">\n                                    <input type=\"string\" class=\"side-form-ctrl constantHeight\"\n                                        [(ngModel)]=\"edit_exam_room_no\">\n                                </div>\n                            </div>\n\n                            <div class=\"c-sm-2 c-lg-2 c-md-2 pull-right\">\n                                <div class=\"action-Menu view-comp\" *ngIf=\"row.isReferenced != 'Y'\">\n                                    <i class=\"fa fa-trash-o pull-right\" style=\"color:red;margin: 0px 10px;\"\n                                        aria-hidden=\"true\" (click)=\"deleteSubject(row.subject_id)\" title=\"Delete\"></i>\n                                    <i class=\"fa fa-pencil pull-right\" style=\"color:#1283f4;margin: 0px 10px;\"\n                                        aria-hidden=\"true\" (click)=\"editSubject(i , row)\" title=\"Edit\"></i>\n                                </div>\n                                <div class=\"action-Menu edit-comp\" *ngIf=\"row.isReferenced != 'Y'\">\n                                    <i class=\"fa fa-trash-o pull-right\" style=\"color:red;margin: 0px 10px;\"\n                                        aria-hidden=\"true\" (click)=\"deleteSubject(row.subject_id)\" title=\"Delete\"></i>\n                                    <!-- <i class=\"fa fa-pencil pull-right\" style=\"color:#1283f4;margin: 0px 10px;\" aria-hidden=\"true\" (click)=\"editSubject(i , row)\" title=\"Edit\"></i> -->\n                                    <span style=\"color:#1283f4;margin: 0px 10px;\" class=\"pull-right\"\n                                        (click)=\"updateSubject(i , row)\">Save</span>\n                                </div>\n                            </div>\n\n                        </div>\n\n                        <div class=\"row\" style=\"padding: 6px; border-top: 1px solid rgba(119, 119, 119, 0.419608);\"\n                            *ngIf=\"newExamSubjectData.length > 0\">\n                            <div class=\"c-sm-2 c-lg-2 c-md-2\">\n                                <span style=\"font-weight: 600;\">Total Marks</span>\n                            </div>\n\n                            <div class=\"c-sm-2 c-lg-2 c-md-2\">\n                                <span class=\"view-comp\" style=\"font-weight: 600;\">{{total_marks_to_show}} marks</span>\n                            </div>\n                        </div>\n\n                    </div>\n\n                    <!-- Showing Already Scheduled Exam List with their edit option -->\n                    <div class=\"\" *ngIf=\"viewList?.length\">\n                        <div class=\"loopingDiv\" *ngFor=\"let data of viewList;let j= index ; trackBy : index\">\n\n                            <div class=\"row dateInfo\" *ngIf=\"data.courseTableList.length > 0\">\n\n                                <div class=\"c-sm-3 c-lg-3 c-md-3\">\n\n                                    <div class=\"form-wrapper timepick\">\n                                        <label for=\"startTime\">Exam Start Time</label>\n                                        <div class=\"tbox\">\n                                            <div class=\"times\">\n                                                <select id=\"\" class=\"mins side-form-ctrl constantHeight\"\n                                                    [(ngModel)]=\"data.courseModelAdder.start_time.hour\"\n                                                    name=\"startTime\">\n                                                    <option [value]=\"time\" *ngFor=\"let time of times\">\n                                                        {{time}}\n                                                    </option>\n                                                </select>\n                                            </div>\n                                            <div class=\"times\">\n                                                <select id=\"\" class=\"mers side-form-ctrl constantHeight\"\n                                                    [(ngModel)]=\"data.courseModelAdder.start_time.minute\" name=\"minute\">\n                                                    <option *ngFor=\"let minute of minArr\" [value]=\"minute\">\n                                                        {{minute}}\n                                                    </option>\n                                                </select>\n                                            </div>\n                                        </div>\n                                    </div>\n\n                                </div>\n\n                                <div class=\"c-sm-3 c-lg-3 c-md-3\">\n\n                                    <div class=\"form-wrapper timepick\">\n                                        <label for=\"startTime\">Exam End Time</label>\n                                        <div class=\"tbox\">\n                                            <div class=\"times\">\n                                                <select id=\"\" class=\"mins side-form-ctrl constantHeight\"\n                                                    [(ngModel)]=\"data.courseModelAdder.end_time.hour\" name=\"startTime\">\n                                                    <option [value]=\"time\" *ngFor=\"let time of times\">\n                                                        {{time}}\n                                                    </option>\n                                                </select>\n                                            </div>\n                                            <div class=\"times\">\n                                                <select id=\"\" class=\"mers side-form-ctrl constantHeight\"\n                                                    [(ngModel)]=\"data.courseModelAdder.end_time.minute\" name=\"minute\">\n                                                    <option *ngFor=\"let minute of minArr\" [value]=\"minute\">\n                                                        {{minute}}\n                                                    </option>\n                                                </select>\n                                            </div>\n                                        </div>\n                                    </div>\n\n                                </div>\n\n                                <div class=\"pull-right\" style=\"margin-right:10px;\">\n                                    <button *ngIf=\"data.selectedCourseList.course_exam_schedule_id == -1\"\n                                        (click)=\"deleteWholeCourse(data, j)\"\n                                        class=\"btn fullBlue small-btn\">Delete</button>\n                                    <button (click)=\"cancelExamForFullCourse(data,j)\"\n                                        class=\"btn  small-btn action_btn\">Cancel Exam</button>\n                                    <button (click)=\"sendReminderForCourse(data,j)\"\n                                        class=\"btn  small-btn action_btn\">Notify</button>\n                                </div>\n\n                            </div>\n\n\n                            <div class=\"row basic-detail\" *ngIf=\"data.courseTableList.length > 0\">\n\n                                <div class=\"c-sm-2 c-lg-2 c-md-2\">\n                                    <div class=\"form-wrapper\">\n                                        <label for=\"subject\">Subject\n                                            <span class=\"text-danger\">*</span>\n                                        </label>\n                                        <select id=\"subject\" class=\"side-form-ctrl constantHeight subjectName\"\n                                            [(ngModel)]=\"data.coursetableAdder.batch_id\" name=\"startTime\"\n                                            (ngModelChange)=\"subjectChanged()\">\n                                            <option value=\"-1\">Select Subject</option>\n                                            <option [value]=\"time.batch_id\" *ngFor=\"let time of data.subjectList\">\n                                                {{time.is_optional_subject?time.subject_name+'(Optional)':time.subject_name}}\n                                            </option>\n                                        </select>\n                                    </div>\n                                </div>\n                                <div class=\"c-sm-2 c-lg-2 c-md-2\" *ngIf=\"schoolModel\">\n                                    <div class=\"form-wrapper\">\n                                        <label for=\"examType\">Exam Type\n                                            <span class=\"text-danger\">*</span>\n                                        </label>\n                                        <select id=\"examType\" class=\"side-form-ctrl constantHeight subjectName\"\n                                            [(ngModel)]=\"selectedExamTypeId\" (ngModelChange)=\"subjectChanged()\">\n                                            <option value=\"-1\" selected=\"selected\">Select Exam Type</option>\n                                            <option [value]=\"list.exam_type_id\" *ngFor=\"let list of examTypeList\">\n                                                {{list.exam_type}}\n                                            </option>\n                                        </select>\n                                    </div>\n                                </div>\n\n\n                                <div class=\"c-sm-1 c-lg-1 c-md-1\"\n                                    *ngIf=\"(data.selectedCourseList.is_exam_grad_feature == 0)\">\n                                    <div class=\"form-wrapper\" style=\"width: 75px\">\n                                        <label for=\"marks\">Marks\n                                            <span class=\"text-danger\">*</span>\n                                        </label>\n                                        <input type=\"number\" class=\"side-form-ctrl constantHeight\" style=\"width:90px;\"\n                                            (ngModelChange)=\"checkNgetiveValue($event)\"\n                                            [(ngModel)]=\"data.coursetableAdder.total_marks\" id=\"marks\">\n                                    </div>\n                                </div>\n\n                                <div class=\"c-sm-2 c-lg-2 c-md-2\" *ngIf=\"!schoolModel\">\n                                    <div class=\"form-wrapper\">\n                                        <label for=\"topics\">Topic</label>\n                                        <input type=\"textbox\" class=\"side-form-ctrl constantHeight\" name=\"label\"\n                                            style=\"height: 31px;\" id=\"classDetailsTxt9\" placeholder=\"Link Topic\"\n                                            readonly (click)=\"topicLinking(data.subjectList, j)\"\n                                            [ngClass]=\"changeColor ? 'topic-linked' : 'topic-link'\">\n                                        <!----   [ngClass]=\"checkedKeys.length > 0 ? 'topic-linked' : 'topic-link'\"   ----->\n                                        <i class=\"fa fa-link\" aria-hidden=\"true\"\n                                            (click)=\"topicLinking(data.subjectList, j)\"\n                                            style=\"cursor: pointer;color: #bdbdbd;font-size: 15px;position: absolute; top: 28px; right: 25px;\"></i>\n                                    </div>\n                                </div>\n\n                                <!-- <div class=\"c-sm-2 c-lg-2 c-md-2\" *ngIf=\"(data.selectedCourseList.is_exam_grad_feature == 0)\">\n                                <div class=\"form-wrapper\" style=\"width: 70px\">\n                                    <label for=\"inpTotalMarks\">Total Marks</label>\n                                    <input type=\"number\" class=\"side-form-ctrl constantHeight\" [(ngModel)]=\"data.courseModelAdder.total_marks\">\n                                </div>\n                            </div> -->\n\n                                <div class=\"c-sm-2 c-lg-2 c-md-2\">\n                                    <div class=\"form-wrapper\">\n                                        <label for=\"customDescTxt\">Description</label>\n                                        <textarea class=\"side-form-ctrl constantHeight\"\n                                            [(ngModel)]=\"data.coursetableAdder.exam_desc\" id=\"customDescTxt\"\n                                            name=\"customDescTxt\" placeholder=\"Enter Exam Description\"></textarea>\n                                    </div>\n                                </div>\n\n                                <div class=\"c-sm-2 c-lg-2 c-md-2\">\n                                    <div class=\"form-wrapper\" style=\"width: 75px\">\n                                        <label for=\"inpTotalMarks\">Room No</label>\n                                        <input type=\"string\" class=\"side-form-ctrl constantHeight\"\n                                            [(ngModel)]=\"data.coursetableAdder.room_no\" id=\"inpTotalMarks\">\n                                    </div>\n                                </div>\n\n                                <div class=\"c-sm-2 c-lg-2 c-md-2 pull-right\" style=\"margin-top: 15px;\">\n                                    <button type=\"button\" name=\"button\" (click)=\"addNewExamSubjectCourse(j)\"\n                                        class=\"btn  small-btn action_btn pull-right\">Add Subject &nbsp;<i\n                                            class=\"fas fa-plus-circle\"\n                                            style=\"font-family: FontAwesome;font-size: 14px;color: #0083f6;cursor: pointer;\"></i></button>\n                                </div>\n\n                            </div>\n\n\n                            <div class=\"row displayComp\"\n                                *ngFor=\"let row of data.courseTableList; let i= index ; trackBy : index\"\n                                id=\"row_already{{i}}_{{j}}\" style=\"padding:0px 6px;\">\n                                <div class=\"c-sm-2 c-lg-2 c-md-2\">\n                                    <span class=\"view-comp\">{{row.is_optional_subject?row.subject_name+'(Optional)':row.subject_name}}</span>\n                                    <span class=\"edit-comp\">{{row.is_optional_subject?row.subject_name+'(Optional)':row.subject_name}}</span>\n                                    <!-- <div class=\"form-wrapper edit-comp\">\n                              <select id=\"subject\" class=\"side-form-ctrl constantHeight subjectName\" [(ngModel)]=\"edit_subject_id\">\n                                  <option value=\"-1\" selected=\"selected\">Select Subject</option>\n                                  <option [value]=\"time.subject_id\" *ngFor=\"let time of subjectListData[0]\">\n                                      {{time.subject_name}}\n                                  </option>\n                              </select>\n                            </div> -->\n                                </div>\n                                <div class=\"c-sm-2 c-lg-2 c-md-2\" *ngIf=\"schoolModel\">\n                                    <span class=\"view-comp\">{{row.exam_type}}</span>\n                                    <span class=\"edit-comp\">{{row.exam_type}}</span>\n                                </div>\n\n                                <div class=\"c-sm-2 c-lg-2 c-md-2\">\n                                    <span class=\"view-comp\">{{row.total_marks}} marks</span>\n                                    <div class=\"form-wrapper edit-comp\">\n                                        <input type=\"number\" class=\"side-form-ctrl constantHeight\" style=\"width:90px;\"\n                                            [(ngModel)]=\"row_edit_exam_marks\">\n                                    </div>\n                                </div>\n\n                                <div class=\"c-sm-2 c-lg-2 c-md-2 topictext\" *ngIf=\"!schoolModel\">\n                                    <span class=\"view-comp \"\n                                        title={{row.topicName}}>{{row.topicName | slice:0:20}}</span>\n                                    <div class=\"form-wrapper edit-comp\">\n                                        <input type=\"textbox\" class=\"side-form-ctrl constantHeight\" name=\"label\"\n                                            style=\"height: 31px;\" id=\"classDetailsTxt9\" placeholder=\"Link Topic\"\n                                            readonly (click)=\"topicLinkingForPreSelectedTopics(data.subjectList)\"\n                                            [ngClass]=\"row_edit_subject_topicId != '' && row_edit_subject_topicId != undefined ? 'topic-linked' : 'topic-link'\">\n                                        <i class=\"fa fa-link\" aria-hidden=\"true\"\n                                            (click)=\"topicLinkingForPreSelectedTopics(data.subjectList)\"\n                                            style=\"cursor: pointer;color: #bdbdbd;font-size: 15px;position: absolute; top: 10px; right: 25px;\"></i>\n                                    </div>\n                                </div>\n\n\n                                <div class=\"c-sm-2 c-lg-2 c-md-2\">\n                                    <span class=\"view-comp\">{{row.class_desc}}</span>\n                                    <div class=\"form-wrapper edit-comp\">\n                                        <textarea class=\"side-form-ctrl constantHeight\" [(ngModel)]=\"row_edit_exam_desc\"\n                                            id=\"customDescTxt\" name=\"customDescTxt\"\n                                            placeholder=\"Enter Exam Description\"></textarea>\n                                    </div>\n                                </div>\n\n                                <div class=\"c-sm-2 c-lg-2 c-md-2\">\n                                    <span class=\"view-comp\">{{row.room_no}}</span>\n                                    <div class=\"form-wrapper edit-comp\">\n                                        <input type=\"string\" class=\"side-form-ctrl constantHeight\"\n                                            [(ngModel)]=\"row_edit_exam_room_no\">\n                                    </div>\n                                </div>\n\n\n                                <div class=\"c-sm-2 c-lg-2 c-md-2 pull-right\">\n                                    <div class=\"action-Menu view-comp\" *ngIf=\"row.isReferenced != 'Y'\">\n                                        <i class=\"fa fa-trash-o pull-right\" style=\"color:red;margin: 0px 10px;\"\n                                            aria-hidden=\"true\" (click)=\"deleteFromCourse(row , i , j)\" title=\"Delete\"\n                                            *ngIf=\"row.is_attendance_marked!='Y'\"></i>\n                                        <i class=\"fa fa-pencil pull-right\" style=\"color:#1283f4;margin: 0px 10px;\"\n                                            aria-hidden=\"true\" (click)=\"editFromCourse(row , i , j)\" title=\"Edit\"\n                                            *ngIf=\"row.is_attendance_marked!='Y'\"></i>\n                                    </div>\n                                    <div class=\"action-Menu edit-comp\" *ngIf=\"row.isReferenced != 'Y'\">\n                                        <i class=\"fa fa-trash-o pull-right\" style=\"color:red;margin: 0px 10px;\"\n                                            aria-hidden=\"true\" (click)=\"deleteFromCourse(row.subject_id)\" title=\"Delete\"\n                                            *ngIf=\"row.is_attendance_marked!='Y'\"></i>\n                                        <!-- <i class=\"fa fa-pencil pull-right\" style=\"color:#1283f4;margin: 0px 10px;\" aria-hidden=\"true\" (click)=\"editSubject(i , row)\" title=\"Edit\"></i> -->\n                                        <span style=\"color:#1283f4;margin: 0px 10px;\" class=\"pull-right\"\n                                            (click)=\"updateEditedSubject(row , i , j)\"\n                                            *ngIf=\"row.is_attendance_marked!='Y'\">Save</span>\n                                    </div>\n                                </div>\n\n                            </div>\n\n                            <div class=\"row\" style=\"padding: 6px; border-top: 1px solid rgba(119, 119, 119, 0.419608);\"\n                                *ngIf=\"data.courseTableList.length > 0\">\n                                <div class=\"c-sm-2 c-lg-2 c-md-2\">\n                                    <span style=\"font-weight: 600;\">Total Marks</span>\n                                </div>\n\n                                <div class=\"c-sm-2 c-lg-2 c-md-2\">\n                                    <span class=\"view-comp\"\n                                        style=\"font-weight: 600;\">{{data.courseModelAdder.total_marks}} marks</span>\n                                </div>\n                            </div>\n\n                        </div>\n                    </div>\n                    <div class=\"row\" style=\"padding-right:25px;\" class=\"save_btn_container\">\n                        <div class=\"pull-left\" style=\"margin-left: 11%\">\n                            <button type=\"button\" class=\"btn\" Style=\"margin-left: 0px;\" name=\"button\"\n                                routerLink=\"/view/course/coursePlanner/exam\"\n                                *ngIf=\"coursePlannerStatus=='true'\">Back</button>\n                        </div>\n                        <div class=\"pull-right\">\n                            <button class=\"btn\" (click)=\"saveExamScheduleCourse()\"\n                                [disabled]=\"multiClickDisabled\">Save</button>\n                            <button type=\"button\" name=\"button\" class=\"btn\">Cancel</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n\n</section>\n\n<!-- ///////// POPUP/////////////////////////////////// -->\n<!-- ///////// POPUP/////////////////////////////////// -->\n<!-- ///////// POPUP/////////////////////////////////// -->\n\n<section [hidden]=\"topicBox\">\n    <div class=\"topicBox\">\n        <div class=\"close-btn\">\n            <span (click)=\"closeAlert()\">X</span>\n        </div>\n        <div class=\"header-container\">\n            <div class=\"sub-header\">\n                <span style=\"font-weight: 600;\">Subject : </span>\n                <span id=\"topicSubName\">{{subject_name}}</span>\n            </div>\n            <div class=\"total-topic\">\n                <span style=\"font-weight: 600;\">Total Topic : </span>\n                <span id=\"topicCount\">{{topicsData?.length}}</span>\n            </div>\n        </div>\n        <!-- <div class=\"field-checkbox-wrapper\" style=\"margin:10px;\">\n      <input type=\"checkbox\" name=\"checkbx\" id=\"select_all_topics\" [(ngModel)]=\"selectAllTopics\" (ngModelChange)=\"checkAllTopics()\"\n        class=\"form-checkbox\">\n      <label for=\"select_all_topics\">\n        Select All\n      </label>\n    </div> -->\n        <div class=\"topic-listing-container\">\n            <kendo-treeview [nodes]=\"topicsData\" [hasChildren]=\"hasChildren\" [children]=\"children\"\n                kendoTreeViewSelectable kendoTreeViewHierarchyBinding kendoTreeViewExpandable textField=\"topicName\"\n                [kendoTreeViewCheckable]=\"checkableSettings\" [(checkedKeys)]=\"checkedKeys\" checkBy=\"topicId\"\n                (checkedChange)=\"handleChecking($event)\">\n            </kendo-treeview>\n        </div>\n        <!-- <div class=\"example-config\">\n           Checked keys: {{checkedKeys.join(\"|\")}}\n       </div> -->\n        <div class=\"extraMargin row  pull-right\" style=\"margin: 15px\">\n            <button class=\"btn\" (click)=\"saveTopic()\">Save</button>\n            <button class=\"btn\" (click)=\"closeAlert()\">Cancel</button>\n        </div>\n    </div>\n</section>\n\n<section *ngIf=\"showTopicsPopUp\">\n    <div class=\"topicBox\">\n        <div class=\"close-btn\">\n            <span (click)=\"closeTopicModal()\">X</span>\n        </div>\n        <div class=\"header-container\">\n            <div class=\"sub-header\">\n                <span style=\"font-weight: 600;\">Subject : </span>\n                <span id=\"topicSubName\">{{selectedCourseName}}</span>\n            </div>\n\n        </div>\n        <div class=\"topic-listing-container\" style=\"overflow-x: hidden;\">\n            <ng-container *ngTemplateOutlet=\"topicsRecursiveList; context:{$implicit: topicsList, level: 1 }\">\n            </ng-container>\n        </div>\n        <div class=\"extraMargin row  pull-right\" style=\"margin: 15px\">\n            <button class=\"btn \" *ngIf=\"showTopicsPopUp && !showExamEditModal\"\n                (click)=\"saveSelectedTopics()\">Save</button>\n            <button class=\"btn \" *ngIf=\"showExamEditModal\" (click)=\"linkTopics()\">Save</button>\n            <button class=\"btn\" (click)=\"closeTopicModal()\">Cancel</button>\n\n        </div>\n    </div>\n</section>\n<ng-template #topicsRecursiveList let-topicsList let-level=\"level\">\n    <div style=\"margin:2px !important\" *ngFor=\"let topic of topicsList\">\n        <div class=\"topic-container\" [ngClass]=\"level == 1 ? 'level1Topic': 'subTopicLevel'\">\n            <div class=\"arrow-icon\" [style.visibility]=\"topic.subTopic.length ? 'visible':'hidden'\"\n                (click)=\"toggleArrow(topic)\">\n                <i [ngClass]=\"topic.isExpand ? 'fa fa-caret-down': 'fa fa-caret-right'\"\n                    style=\"font-size: 15px!important;\"></i>\n            </div>\n            <div class=\"field-checkbox-wrapper\" style=\"margin-bottom: 5px !important;padding-left:0px !important\">\n                <input type=\"checkbox\" [(ngModel)]=\"topic.checked\" class=\"form-checkbox\" value=\"{{topic.checked}}\"\n                    (click)=\"selectTopics(topic,$event)\" id=\"topic-{{topic.topicId}}\" />\n                <label for=\"topic-{{topic.topicId}}\" style=\"margin-left:25px !important\">{{topic.topicName}}</label>\n                <div *ngIf=\"topic.isExpand\">\n                    <ng-container\n                        *ngTemplateOutlet=\"topicsRecursiveList; context:{ $implicit: topic.subTopic, level: level + 1  }\">\n                    </ng-container>\n                </div>\n            </div>\n\n        </div>\n    </div>\n</ng-template>\n\n<div class=\"black-bg\" id=\"black-bg\" [hidden]=\"topicBox\" (click)=\"closeAlert()\">\n\n</div>\n<div class=\"black-bg\" id=\"black-bg\" [hidden]=\"!showTopicsPopUp\">\n\n</div>\n\n<!-- ///////// POPUP/////////////////////////////////// -->\n<!-- ///////// POPUP/////////////////////////////////// -->\n<!-- ///////// POPUP/////////////////////////////////// -->\n\n<section id=\"popup \" class=\"popupWrapper fadeIn \" *ngIf=\"markAttendancePopUp\">\n    <div class=\"popup pos-abs popup-body-container \">\n        <div class=\"popup-wrapper pos-rel \">\n            <span class=\"closePopup pos-abs fbold show \" id=\"popupCloseBtn \" (click)=\"closeCourseLevelAttendance()\">\n                <svg xmlns=\"http://www.w3.org/2000/svg \" viewBox=\"9310 2185 16 16 \">\n                    <g id=\"Group_1228 \" data-name=\"Group 1228 \" transform=\"translate(8298 1888) \">\n                        <g id=\"Group_1213 \" data-name=\"Group 1213 \" transform=\"translate(34.189 -7.77) \">\n                            <line id=\"Line_274 \" data-name=\"Line 274 \" class=\"cls-1 \" y2=\"19.798 \" transform=\"translate(992.81 305.77)\n                      rotate(45) \" />\n                            <line id=\"Line_275 \" data-name=\"Line 275 \" class=\"cls-1 \" x1=\"19.798 \" transform=\"translate(978.81 305.77)\n                      rotate(45) \" />\n                        </g>\n                        <rect id=\"Rectangle_686 \" data-name=\"Rectangle 686 \" style=\"stroke:none; \" class=\"cls-2 \" width=\"16\n                      \" height=\"16 \" transform=\"translate(1012 297) \" />\n                    </g>\n                </svg>\n            </span>\n            <div class=\"popup-content\">\n                <h2>Mark/Update Exam Attendance</h2>\n\n                <div class=\"attendanceWrapperCourse\">\n\n                    <div class=\"row attendance-Note\">\n                        <div class=\"c-sm-6 c-md-6 c-lg-6\">\n                            <div class=\"form-wrapper\">\n                                <label for=\"attedNote\">Exam Description</label>\n                                <textarea class=\"side-form-ctrl\" [(ngModel)]=\"attendanceNote\" id=\"attedNote\"\n                                    name=\"attedNote\" placeholder=\"Enter Exam Description\"></textarea>\n                            </div>\n                        </div>\n                        <div class=\"c-sm-6 c-md-6 c-lg-6\" style=\"margin-top: 20px;\">\n                            <div class=\"field-checkbox-wrapper\">\n\n                                <input type=\"checkbox\" value=\"\" id=\"msgAbsentees\" name=\"msgAbsentees\"\n                                    class=\"form-checkbox\" [(ngModel)]=\"smsAbsenteesChkbx\">\n                                <label for=\"msgAbsentees\">Send Sms For Absentees</label>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"row filterSection\">\n                        <div class=\"c-sm-3 c-md-3 c-lg-3\">\n                            <h3>Total Students : {{studentList.length}} </h3>\n                        </div>\n\n                        <div class=\"c-sm-6 c-md-6 c-lg-6\">\n\n                            <span class=\"leave\">{{leaveCount}}</span>\n                            <h5>Leave</h5>\n\n                            <span class=\"absent\">{{absentCount}}</span>\n                            <h5>Absent</h5>\n\n                            <span class=\"present\">{{presentCount}}</span>\n                            <h5>Present</h5>\n                        </div>\n\n                        <div class=\"c-sm-3 c-md-3 c-lg-3\">\n                            <div class=\"field-checkbox-wrapper\">\n\n                                <input type=\"checkbox\" value=\"\" class=\"form-checkbox\" id=\"MarkPresent\"\n                                    [checked]=\"checkCheckAllChkboxStatus()\" (change)=\"markAllPresent($event)\">\n                                <label for=\"MarkAllPresent\">Mark All Present</label>\n                            </div>\n                        </div>\n\n                    </div>\n\n                    <div class=\"attendanceMain\">\n                        <div class=\"table-scroll-wrapper\">\n                            <div class=\"table table-responsive\">\n                                <table>\n                                    <thead>\n                                        <tr>\n                                            <th style=\"font-size: 14px;font-weight: 600;\">Student Id</th>\n                                            <th style=\"font-size: 14px;font-weight: 600;\">Student Name</th>\n                                            <th style=\"font-size: 14px;font-weight: 600;\">Attendance</th>\n                                        </tr>\n                                    </thead>\n                                    <tbody>\n                                        <tr *ngFor=\"let s of studentList; let i=index;\">\n                                            <td>\n                                                {{s.student_disp_id}}\n                                            </td>\n                                            <td>\n                                                {{s.student_name}}\n                                            </td>\n                                            <td>\n                                                <div class=\"btnGroup\">\n                                                    <button id=\"leaveBtnCourse{{s.student_id}}\"\n                                                        [disabled]=\"getDisability(s)\"\n                                                        (click)=\"markAttendaceBtnClickCourse($event , s , i)\"\n                                                        class=\"btn\" [ngClass]=\"getClassForLeave(s)\">L</button>\n                                                    <button id=\"absentBtnCourse{{s.student_id}}\"\n                                                        [disabled]=\"getDisability(s)\"\n                                                        (click)=\"markAttendaceBtnClickCourse($event , s, i)\" class=\"btn\"\n                                                        [ngClass]=\"getClassForAbsent(s)\">A</button>\n                                                    <button id=\"presentBtnCourse{{s.student_id}}\"\n                                                        [disabled]=\"getDisability(s)\"\n                                                        (click)=\"markAttendaceBtnClickCourse($event , s, i)\" class=\"btn\"\n                                                        [ngClass]=\"getClassForPresent(s)\">P</button>\n                                                </div>\n                                            </td>\n\n                                        </tr>\n                                        <tr *ngIf=\"studentList.length == 0\">\n                                            <td colspan=\"3\">\n                                                No Students Record\n                                            </td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"clearfix\" style=\"margin-top: 10px\">\n                        <aside class=\"pull-right popup-btn\">\n                            <input type=\"button\" value=\"Cancel\" class=\"btn\" (click)=\"closeCourseLevelAttendance()\">\n                            <input type=\"button\" value=\"Mark Attendance\" (click)=\"updateCourseAttendance()\" class=\"btn\">\n                        </aside>\n                    </div>\n\n                </div>\n\n            </div>\n        </div>\n    </div>\n</section>\n\n\n<!-- ///////// POPUP/////////////////////////////////// -->\n<!-- ///////// POPUP/////////////////////////////////// -->\n<!-- ///////// POPUP/////////////////////////////////// -->\n\n<section id=\"popup \" class=\"popupWrapper fadeIn \" *ngIf=\"cancelExamPopUp\">\n    <div class=\"popup pos-abs popup-body-container \">\n        <div class=\"popup-wrapper pos-rel \">\n            <span class=\"closePopup pos-abs fbold show \" id=\"popupCloseBtn \" (click)=\"closeCancelExamPopUp()\">\n                <svg class=\"artdeco-icon\" focusable=\"false\" height=\"24px\" preserveAspectRatio=\"xMinYMin meet\"\n                    viewBox=\"0 0 24 24\" width=\"24px\" x=\"0\" y=\"0\">\n                    <path class=\"large-icon\"\n                        d=\"M20,5.32L13.32,12,20,18.68,18.66,20,12,13.33,5.34,20,4,18.68,10.68,12,4,5.32,5.32,4,12,10.69,18.68,4Z\"\n                        style=\"fill: currentColor\"></path>\n                </svg>\n            </span>\n            <div class=\"popup-content\">\n                <h2 *ngIf=\"isLangInstitute\">Batch Exam Schedule ({{cancelExamData.exam_date}}\n                    ({{cancelExamData.start_time}} - {{cancelExamData.end_time}}))\n                    Cancellation\n                </h2>\n                <h2 *ngIf=\"!isLangInstitute\">\n                    Do you want to cancel scheduled Exam?\n                </h2>\n\n                <div class=\"cancel-Class-Wrapper\">\n\n                    <div class=\"row attendance-Note\">\n                        <div class=\"c-sm-12 c-md-12 c-lg-12\" style=\"padding: 0px 0px;\">\n                            <div class=\"form-wrapper\">\n                                <label for=\"cancelTxtBx\">Cancellation Reason\n                                    <span class=\"text-danger\">*</span>\n                                </label>\n                                <textarea class=\"side-form-ctrl\" style=\"height: 90px;\"\n                                    [(ngModel)]=\"cancelPopUpData.reason\" id=\"cancelTxtBx\" name=\"cancelTxtBx\"></textarea>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"clearfix\" style=\"margin-top: 10px\">\n                        <aside class=\"pull-left\" style=\"margin-top: 10px\">\n                            <div class=\"field-checkbox-wrapper\">\n                                <input type=\"checkbox\" value=\"\" id=\"chkBxNotifyStudent\" name=\"chkBxNotifyStudent\"\n                                    class=\"form-checkbox\" [(ngModel)]=\"cancelPopUpData.notify\">\n                                <label for=\"chkBxNotifyStudent\">Notify Students</label>\n                            </div>\n                        </aside>\n                        <aside *ngIf=\"isLangInstitute\" class=\"pull-right popup-btn\">\n                            <input type=\"button\" value=\"No\" class=\"btn\" (click)=\"closeCancelExamPopUp()\"\n                                style=\"width:70px;\">\n                            <input type=\"button\" value=\"Yes\" (click)=\"cancelExamClassSchedule()\" class=\"fullBlue btn\"\n                                style=\"width:70px;\">\n                        </aside>\n                        <aside *ngIf=\"!isLangInstitute\" class=\"pull-right popup-btn\">\n                            <input type=\"button\" value=\"No\" class=\"btn\" (click)=\"closeCancelExamPopUp()\"\n                                style=\"width:70px;\">\n                            <input *ngIf=\"jsonVar.cancelCourseLevel\" type=\"button\" value=\"Yes\"\n                                (click)=\"cancelCourseLevelExam()\" class=\"fullBlue btn\" style=\"width:70px;\">\n                            <input *ngIf=\"!jsonVar.cancelCourseLevel\" type=\"button\" value=\"Yes\"\n                                (click)=\"cancelCourseExam()\" class=\"fullBlue btn\" style=\"width:70px;\">\n                        </aside>\n                    </div>\n\n                </div>\n\n            </div>\n        </div>\n    </div>\n</section>\n\n\n<!--\n<div class=\"c-sm-2 c-lg-2 c-md-2\">\n  <span>{{row.subject_name}}</span>\n\n</div>\n\n<div class=\"c-sm-1 c-lg-1 c-md-1\" *ngIf=\"(data.selectedCourseList.is_exam_grad_feature == 0)\">\n  <span>{{row.total_marks}}</span>\n  <input type=\"text\" class=\"side-form-ctrl torlMarksWidth\" name=\"label\" [(ngModel)]=\"row.total_marks\">\n</div>\n\n<div class=\"c-sm-2 c-lg-2 c-md-2\">\n  <span>{{row.class_desc}}</span>\n  <input type=\"text\" class=\"side-form-ctrl torlMarksWidth\" name=\"label\" [(ngModel)]=\"row.total_marks\">\n  <input type=\"Text\" class=\"side-form-ctrl  constantHeight\" placeholder=\"Topics\" id=\"topics\">\n</div>\n\n\n  <div class=\"c-sm-2 c-lg-2 c-md-2\">\n    <span>{{row.exam_desc}}</span>\n    <textarea class=\"side-form-ctrl constantHeight\" [(ngModel)]=\"data.courseModelAdder.exam_desc\" id=\"customDescTxt\" name=\"customDescTxt\"></textarea>\n  </div>\n\n  <div class=\"c-sm-2 c-lg-2 c-md-2\">\n    <span>{{row.room_no}}</span>\n    <input type=\"string\" class=\"side-form-ctrl constantHeight\" [(ngModel)]=\"data.courseModelAdder.room_no\" id=\"inpTotalMarks\">\n  </div> -->");

/***/ }),

/***/ "./src/app/components/course-module/create-course/course-exam/course-exam.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/course-module/create-course/course-exam/course-exam.component.scss ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* ===============================header colors=======================*/\n.table-format-first .table-responsive table th,\n.table-format-first .table-responsive table td {\n  text-align: center;\n  padding: 10px 5px;\n}\n.table-format-first .table-responsive table th {\n  text-transform: capitalize;\n  font-size: 14px;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper {\n  display: inline-block;\n  overflow: initial;\n  margin-left: 0;\n  width: auto;\n  position: relative;\n  background: transparent;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox {\n  z-index: 2;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label {\n  font-size: 16px;\n  margin-left: 7px;\n  font-weight: 600;\n  vertical-align: middle;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:after, .table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:before {\n  z-index: 1;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper:after {\n  content: '';\n  width: 20px;\n  height: 20px;\n  background: #fff;\n  left: 0;\n  top: 0;\n  position: absolute;\n}\n.table-format-first .table-responsive table tbody tr td .fa-trash-o {\n  color: #f44336;\n  font-size: 20px;\n}\n.table-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-top: 10px;\n}\n.table-container .heading-container {\n  background: #e0eaec;\n  display: flex;\n  flex-direction: row;\n  font-size: 14px;\n  font-weight: 600;\n  text-align: left;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n}\n.table-container .heading-container .heading-item {\n  width: 10%;\n  text-align: center;\n}\n.table-container .value-outer-container {\n  display: flex;\n  flex-direction: column;\n  min-height: 53vh;\n  max-height: 54vh;\n  overflow-x: hidden;\n  overflow-y: auto;\n  border: 1px solid #ccc;\n}\n.table-container .value-outer-container .value-container {\n  display: flex;\n  flex-direction: row;\n  text-align: left;\n  padding: 4px;\n  font-size: 12px;\n  border-bottom: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n  border-top: none;\n}\n.table-container .value-outer-container .value-container .value-item {\n  width: 10%;\n  text-align: center;\n}\n.middle-section {\n  padding: 10px 10px;\n}\n.btn {\n  background: #0084f6;\n  color: white;\n}\n.langModelCss .examAdder .btnAdd {\n  margin-top: 20px;\n}\n.langModelCss .row {\n  margin-top: 10px;\n}\n.langModelCss .btn-Group {\n  margin-right: 5px;\n  margin-bottom: 5px;\n}\n.langModelCss .cancelClass-table {\n  margin-top: 5px;\n}\n.langModelCss h3 {\n  margin-top: 10px;\n  margin-left: 0px;\n}\n.common-search-filter {\n  border-bottom: 1px solid #d3d4d5;\n  padding: 5px 5px 10px 5px;\n}\n.common-search-filter .field-wrapper {\n  background: transparent;\n}\n.common-search-filter .field-wrapper .form-ctrl {\n  border-radius: 4px;\n}\n.common-search-filter .batchTimeDet {\n  margin-top: 5px;\n}\n.content-section {\n  margin: 5px 0px;\n}\n.content-section .action-Menu {\n  cursor: pointer;\n}\n.content-section .action-Menu span {\n  margin-right: 5px;\n}\n.constantHeight {\n  height: 30px;\n}\n.form-wrapper {\n  background: transparent;\n}\n.form-wrapper.datepicker span {\n  position: absolute;\n  top: 35px;\n  right: 20px;\n  font-weight: 600;\n  font-size: 16px;\n  color: red;\n  cursor: pointer;\n  width: 20px;\n  text-align: center;\n  /* &::before {\n                content: '';\n                background: url('/assets/images/calendar.svg') no-repeat;\n                position: absolute;\n                right: 25px;\n                top: 0px;\n                width: 21px;\n                height: 21px;\n                z-index: 0;\n            } */\n}\n.form-wrapper label {\n  font-size: 12px;\n  color: rgba(0, 0, 0, 0.77);\n  padding-bottom: 2px;\n  text-decoration: none;\n  -webkit-font-smoothing: antialiased;\n  font-weight: 600;\n}\n.form-wrapper .side-form-ctrl {\n  background: white;\n  border: 1px solid rgba(119, 119, 119, 0.419608);\n  width: 100%;\n  padding: 8px 5px;\n  border-radius: 4px;\n  font-size: 14px;\n  color: black;\n}\n.form-wrapper .side-form-ctrl.bsDatepicker {\n  padding: 5px;\n  width: 100%;\n}\n.form-wrapper.timepick {\n  padding: 1px 0px;\n}\n.form-wrapper.timepick .tbox {\n  display: inline-block;\n}\n.form-wrapper.timepick .tbox .times {\n  display: inline-block;\n}\n.form-wrapper.timepick .tbox .side-form-ctrl {\n  background: white;\n  border: 1px solid rgba(119, 119, 119, 0.419608);\n  width: 100%;\n  padding: 4px 5px;\n  font-size: 14px;\n  border-radius: 4px;\n  color: black;\n}\n.form-wrapper.timepick .tbox .side-form-ctrl.mins {\n  width: auto;\n}\n.form-wrapper.timepick .tbox .side-form-ctrl.mers {\n  width: 50px;\n}\n.save_btn_container {\n  position: absolute;\n  bottom: 0px;\n  right: 0px;\n  width: 85%;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  background: white;\n}\n.field-wrapper.datePickerBox:after {\n  content: '';\n  background: url(/./assets/images/calendar.svg) no-repeat;\n  position: absolute;\n  right: 5px;\n  top: 28px;\n  width: 21px;\n  height: 21px;\n  z-index: 0;\n}\n.attendanceWrapperCourse {\n  border-top: 2px solid #eee;\n  margin-top: 15px;\n  max-height: 480px;\n  overflow: hidden;\n}\n.attendanceWrapperCourse .filterSection {\n  padding: 20px 0px 10px 0px !important;\n  margin: 0px !important;\n  background-color: #efefef;\n}\n.attendanceWrapperCourse .filterSection span {\n  padding: 4px 12px;\n  margin-left: 4px;\n}\n.attendanceWrapperCourse .filterSection h5 {\n  margin-left: 4px;\n  display: inline-block;\n  font-weight: 200;\n  font-size: 13px;\n}\n.attendanceWrapperCourse .filterSection .absent {\n  color: white;\n  background: #fe552a;\n  border-radius: 5px;\n}\n.attendanceWrapperCourse .filterSection .present {\n  color: white;\n  background: #4191da;\n  border-radius: 5px;\n}\n.attendanceWrapperCourse .filterSection .leave {\n  color: white;\n  background: #7a7a7a;\n  border-radius: 5px;\n}\n.attendanceWrapperCourse .attendanceMain .table-scroll-wrapper {\n  max-height: 375px;\n  overflow: auto;\n}\n.attendanceWrapperCourse .attendanceMain ::-webkit-scrollbar {\n  display: block;\n}\n.attendanceWrapperCourse tr td {\n  padding: 0px 20px !important;\n}\n.attendanceWrapperCourse .form-wrapper .form-ctrl {\n  border: 2px solid #efefef;\n}\n.btnGroup {\n  display: inline-flex;\n  margin-bottom: 4px !important;\n}\n.btnGroup .btn {\n  padding: 0px 8px 0px 8px;\n  margin: 0px 5px;\n  width: 29%;\n  height: 22px;\n  font-size: 14px;\n  border-radius: 6px;\n}\n.btnGroup .classLeaveBtn {\n  color: white;\n  text-align: center;\n  background: #7a7a7a;\n}\n.btnGroup .classAbsentBtn {\n  color: white;\n  text-align: center;\n  background: #fe552a;\n}\n.btnGroup .classPresentBtn {\n  color: white;\n  background: #4191da;\n  color: white;\n  text-align: center;\n}\n@media only screen and (max-width: 767px) {\n  .attendanceWrapper {\n    border-top: 2px solid #eee;\n    margin-top: 15px;\n    max-height: 420px;\n    overflow: hidden;\n  }\n  .attendanceWrapper .row {\n    display: flex;\n  }\n  .attendanceWrapper .row .tableSection {\n    display: inline-block;\n    width: 100%;\n    padding: 10px;\n    background: #fff;\n  }\n  .attendanceWrapper .row .tableSection .button-row {\n    position: relative;\n    height: 45px;\n    padding: 0px 10px;\n  }\n  .attendanceWrapper .row .tableSection .button-row button {\n    position: absolute;\n    right: 10px;\n    border: 2px solid #0084f6;\n  }\n  .attendanceWrapper .row .tableSection .filterSection {\n    padding: 20px 0px 10px 0px !important;\n    margin: 0px !important;\n    background-color: #efefef;\n  }\n  .attendanceWrapper .row .tableSection .filterSection span {\n    padding: 4px 12px;\n  }\n  .attendanceWrapper .row .tableSection .filterSection .absent {\n    color: white;\n    background: #fe552a;\n    border-radius: 5px;\n  }\n  .attendanceWrapper .row .tableSection .filterSection .present {\n    color: white;\n    background: #4191da;\n    border-radius: 5px;\n  }\n  .attendanceWrapper .row .tableSection .filterSection .leave {\n    color: white;\n    background: #7a7a7a;\n    border-radius: 5px;\n  }\n  .attendanceWrapper .row .tableSection .studentTableWrapper {\n    width: 100%;\n  }\n  .attendanceWrapper .row .tableSection .studentTableWrapper .schedule-bottom {\n    width: 100%;\n  }\n  .attendanceWrapper .row .tableSection .studentTableWrapper .schedule-bottom ul {\n    border-left: 2px solid rgba(211, 212, 213, 0.5);\n    border-right: 2px solid rgba(211, 212, 213, 0.5);\n  }\n  .attendanceWrapper .row .tableSection .row {\n    margin-left: 10px;\n  }\n}\n.torlMarksWidth {\n  width: 50px !important;\n}\n/* popUp Scss */\n.popupWrapper {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  bottom: 0;\n  top: 0px;\n  right: 0;\n  left: 0px;\n  background: rgba(230, 230, 230, 0.5);\n  z-index: 100;\n  visibility: hidden;\n  opacity: 0;\n  transition: all 0.5s ease-in;\n}\n.popupWrapper .popup {\n  max-width: 40%;\n  width: 100%;\n  height: auto;\n  left: 0;\n  right: 0;\n  top: 10%;\n  bottom: 0;\n  margin: auto;\n}\n.popup-wrapper {\n  padding: 20px 20px;\n  box-sizing: border-box;\n  box-shadow: 1px 8px 20px 5px #9c9c9c;\n  transition: unset;\n  background: #fff;\n  border-radius: 6px;\n}\n.popup-wrapper h2 {\n  margin-bottom: 15px;\n  font-size: 14px;\n}\n.popup-wrapper h4 {\n  margin: 25px 0 15px;\n  font-weight: 600;\n}\n.closePopup {\n  right: 10px;\n  top: 10px;\n  font-size: 18px;\n  cursor: pointer;\n  line-height: 20px;\n  width: 26px;\n  height: 26px;\n  box-sizing: border-box;\n  text-align: center;\n  padding-top: 3px;\n  display: none;\n}\n.closePopup.bottomRight {\n  bottom: 2px;\n  top: auto;\n  left: auto;\n  right: 0;\n}\n.closePopup.topLeft {\n  left: 0;\n  right: auto;\n  top: 1px;\n  bottom: auto;\n}\n.closePopup.bottomLeft {\n  left: 0;\n  right: auto;\n  bottom: 2px;\n  top: auto;\n}\n.closePopup svg {\n  width: 16px;\n}\n.closePopup svg .cls-1 {\n  stroke: #c1c1c1;\n  stroke-width: 2px;\n}\n.closePopup:hover .cls-1 {\n  stroke: #0084f6;\n}\n.popup-content {\n  height: 100%;\n  overflow: hidden;\n  visibility: visible;\n}\n.fadeIn {\n  opacity: 1;\n  visibility: visible;\n}\n.popupWrapperMob {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  bottom: 0;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 100;\n  background: rgba(0, 0, 0, 0.5);\n  visibility: hidden;\n  transition: all 0.5s ease-in;\n}\n.popupWrapperMob .closePopup {\n  right: -25px;\n  top: -27px;\n  display: block;\n}\n.popup-mob {\n  left: 0;\n  width: 100%;\n  max-height: 70%;\n  background: #fff;\n  padding: 30px;\n  box-sizing: border-box;\n  height: 100%;\n  overflow: auto;\n  z-index: 1;\n  bottom: -70%;\n  transition: all 0.5s ease-in;\n}\n.popupWrapperMob.showPopupMob {\n  z-index: 100;\n  visibility: visible;\n  opacity: 1;\n}\n.popupWrapperMob.showPopupMob .popup-mob {\n  bottom: 0;\n}\n.spanText {\n  font-size: 12px;\n}\ninput[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n.courseModelWrapper {\n  margin-bottom: 35px;\n}\n.courseModelWrapper .row {\n  margin: 5px 0px;\n}\n.courseModelWrapper table thead tr th {\n  padding: 5px 0px !important;\n}\n.subjectName {\n  width: 185px !important;\n  padding: 0px 0px !important;\n}\n.exam_adder_div {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  border-spacing: 0px 2px;\n  box-shadow: 0px 3px 6px #696969;\n}\n.exam_adder_div .dateInfo, .exam_adder_div .basic-detail {\n  padding: 6px;\n}\n.exam_adder_div .dateInfo {\n  margin-bottom: 0px;\n}\n.exam_adder_div .basic-detail {\n  margin-top: 0px;\n}\n.exam_adder_div .topic-link {\n  cursor: pointer;\n  border: 1px solid #cccccc;\n}\n.exam_adder_div .topic-linked {\n  cursor: pointer;\n  border: 1px solid #1283f4;\n}\n.exam_adder_div .topic-linked::-moz-placeholder {\n  color: #1283f4;\n}\n.exam_adder_div .topic-linked:-ms-input-placeholder {\n  color: #1283f4;\n}\n.exam_adder_div .topic-linked::placeholder {\n  color: #1283f4;\n}\n.topic-link {\n  cursor: pointer;\n  border: 1px solid #cccccc;\n}\n.topic-link::-moz-placeholder {\n  color: #cccccc;\n}\n.topic-link:-ms-input-placeholder {\n  color: #cccccc;\n}\n.topic-link::placeholder {\n  color: #cccccc;\n}\n.topic-linked {\n  cursor: pointer;\n  border: 1px solid #1283f4 !important;\n}\n.topic-linked::-moz-placeholder {\n  color: #1283f4;\n}\n.topic-linked:-ms-input-placeholder {\n  color: #1283f4;\n}\n.topic-linked::placeholder {\n  color: #1283f4;\n}\n.topictext {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  max-width: 12%;\n}\n.displayComp .edit-comp {\n  display: none;\n}\n.editComp .view-comp {\n  display: none;\n}\n.black-bg {\n  background: rgba(10, 10, 10, 0.3);\n  position: fixed;\n  top: 0px;\n  height: 100%;\n  left: 0px;\n  z-index: 1;\n  width: 100%;\n}\n.topicBox {\n  position: fixed;\n  top: 20%;\n  left: 20%;\n  right: 20%;\n  width: 60%;\n  z-index: 100;\n  background: #f7f5f5;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);\n  border-radius: 4px;\n}\n.close-btn {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  font-size: 16px;\n  font-weight: 600;\n}\n.close-btn span {\n  cursor: pointer;\n}\n.header-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  padding: 10px;\n  margin-top: 20px;\n  border-bottom: 1px solid rgba(10, 10, 10, 0.7);\n}\n.sub-header {\n  width: 30%;\n}\n.total-topic {\n  width: 20%;\n  margin-left: 10%;\n}\n.topic-listing-container {\n  overflow-y: scroll;\n  max-height: 270px;\n}\n.tooltip {\n  position: relative;\n  display: inline-block;\n  border-bottom: 1px dotted black;\n  /* If you want dots under the hoverable text */\n}\n/* Tooltip text */\n.tooltip .tooltiptext {\n  visibility: hidden;\n  width: 120px;\n  background-color: black;\n  color: #fff;\n  text-align: center;\n  padding: 5px 0;\n  border-radius: 6px;\n  /* Position the tooltip text - see examples below! */\n  position: absolute;\n  z-index: 1;\n}\n/* Show the tooltip text when you mouse over the tooltip container */\n.tooltip:hover .tooltiptext {\n  visibility: visible;\n}\n.k-treeview .k-in.k-state-selected {\n  background-color: transparent;\n  color: #656565;\n}\n.k-treeview .k-in.k-state-selected {\n  background-color: white;\n  color: #656565;\n}\n.k-checkbox:indeterminate + .k-checkbox-label::after {\n  background-color: #0084f6;\n}\n.k-checkbox:checked + .k-checkbox-label::before {\n  border-color: #0084f6;\n  background-color: #0084f6;\n}\n.k-treeview .k-content, .k-treeview > .k-group, .k-treeview .k-item > .k-group {\n  padding: 10px;\n}\n.k-checkbox:indeterminate + .k-checkbox-label::after {\n  background-color: #0084f6;\n}\n.k-checkbox:indeterminate + .k-checkbox-label::after {\n  content: \"\";\n  transform: scale(1);\n  width: 8px;\n  height: 8px;\n  top: 4px;\n  left: 4px;\n}\n.loopingDiv {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  border-spacing: 0px 2px;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);\n}\n.loopingDiv .dateInfo, .loopingDiv .basic-detail {\n  background: #f9f9f9;\n  padding: 6px;\n}\n.loopingDiv .dateInfo {\n  margin-bottom: 0px;\n}\n.loopingDiv .basic-detail {\n  margin-top: 0px;\n}\n.small-btn {\n  height: auto !important;\n  padding: 0.4em 0.8em !important;\n  border-radius: 0.2em !important;\n}\n.action_btn {\n  background: white;\n  color: #3d89f0;\n  border-radius: 4px;\n}\n.add_exam_btn {\n  background: #3d89f0;\n  color: white;\n  border-radius: 4px;\n}\n.mail-notification {\n  width: 20px;\n  height: 20px;\n  background: url('mial_notification.svg') no-repeat;\n  cursor: pointer;\n  display: inline-block;\n}\n.form-wrapper.datePickerBox:after {\n  content: '';\n  background: url(/./assets/images/calendar.svg) no-repeat;\n  position: absolute;\n  right: 18px;\n  top: 28px;\n  width: 21px;\n  height: 21px;\n  z-index: 0;\n}\n.black-bg {\n  background: rgba(12, 11, 11, 0.3);\n  position: fixed;\n  top: 0px;\n  height: 100%;\n  left: 0px;\n  z-index: 6;\n  width: 100%;\n}\n.topic-container {\n  margin-right: 0 !important;\n  margin-left: 0 !important;\n  display: flex;\n  flex-direction: row;\n}\n.arrow-icon {\n  padding: 0 5px;\n}\n.level1Topic {\n  padding-top: 4px;\n  padding-bottom: 2px;\n}\n.subTopicLevel {\n  padding-top: 8px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY3NzL2NvbW1vbi92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jb3Vyc2UtbW9kdWxlL2NyZWF0ZS1jb3Vyc2UvY291cnNlLWV4YW0vY291cnNlLWV4YW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWUEsdUVBQUE7QUFXQTs7RUFLZ0Isa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQ3hCakM7QURrQkE7RUFTZ0IsMEJBQTBCO0VBQzFCLGVBQWU7QUN2Qi9CO0FEYUE7RUFnQjRCLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsdUJBQXVCO0FDekJuRDtBRElBO0VBdUJnQyxVQUFVO0FDdkIxQztBREFBO0VBMEJnQyxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixzQkFBc0I7QUN0QnREO0FEUEE7RUFnQ29DLFVBQVU7QUNyQjlDO0FEWEE7RUFvQ2dDLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixPQUFPO0VBQ1AsTUFBTTtFQUNOLGtCQUFrQjtBQ3JCbEQ7QURyQkE7RUE4QzRCLGNBbERiO0VBbURhLGVBQWU7QUNyQjNDO0FEOEJBO0VBQ0ksYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsZ0JBQWdCO0FDM0JwQjtBRHVCQTtFQU1NLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLHlCQUF5QjtBQ3pCL0I7QURVQTtFQWlCUSxVQUFVO0VBQ1Ysa0JBQWtCO0FDdkIxQjtBREtBO0VBc0JNLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtBQ3ZCNUI7QURMQTtFQThCUSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZUFBZTtFQUNmLDZCQUE2QjtFQUM3QixvQkFBb0I7RUFDcEIseUJBQXlCO0VBQ3pCLGdCQUFnQjtBQ3JCeEI7QURqQkE7RUF3Q1UsVUFBVTtFQUNWLGtCQUFrQjtBQ25CNUI7QUFsR0E7RUFDSSxrQkFBa0I7QUFxR3RCO0FBbkdBO0VBQ0ksbUJBQW1CO0VBQ25CLFlBQVk7QUFzR2hCO0FBcEdBO0VBR1ksZ0JBQWdCO0FBcUc1QjtBQXhHQTtFQU9RLGdCQUFnQjtBQXFHeEI7QUE1R0E7RUFVUSxpQkFBaUI7RUFDakIsa0JBQWtCO0FBc0cxQjtBQWpIQTtFQWNRLGVBQWU7QUF1R3ZCO0FBckhBO0VBaUJRLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUF3R3hCO0FBcEdBO0VBRUksZ0NBQWdDO0VBQ2hDLHlCQUF5QjtBQXNHN0I7QUF6R0E7RUFLUSx1QkFBdUI7QUF3Ry9CO0FBN0dBO0VBT1Usa0JBQWtCO0FBMEc1QjtBQWpIQTtFQWdCUSxlQUFlO0FBcUd2QjtBQWpHQTtFQUNJLGVBQWU7QUFvR25CO0FBckdBO0VBR1EsZUFBZTtBQXNHdkI7QUF6R0E7RUFLWSxpQkFBaUI7QUF3RzdCO0FBbkdBO0VBQ0ksWUFBWTtBQXNHaEI7QUFuR0E7RUFDSSx1QkFBdUI7QUFzRzNCO0FBdkdBO0VBS1ksa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixVQUFVO0VBQ1YsZUFBZTtFQUNmLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEI7Ozs7Ozs7OztlQThHRztBQUNmO0FBN0hBO0VBNEJRLGVBQWU7RUFDZiwwQkFBMEI7RUFDMUIsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixtQ0FBbUM7RUFDbkMsZ0JBQWdCO0FBcUd4QjtBQXRJQTtFQW9DUSxpQkFBaUI7RUFDakIsK0NBQXlEO0VBQ3pELFdBQVc7RUFDWCxnQkFBZ0I7RUFFaEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixZQUFZO0FBcUdwQjtBQWhKQTtFQTZDWSxZQUFZO0VBQ1osV0FBVztBQXVHdkI7QUFySkE7RUFrRFEsZ0JBQWdCO0FBdUd4QjtBQXpKQTtFQW9EWSxxQkFBcUI7QUF5R2pDO0FBN0pBO0VBdURnQixxQkFBcUI7QUEwR3JDO0FBaktBO0VBMERnQixpQkFBaUI7RUFDakIsK0NBQXlEO0VBQ3pELFdBQVc7RUFDWCxnQkFBZ0I7RUFFaEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixZQUFZO0FBMEc1QjtBQTNLQTtFQW1Fb0IsV0FBVztBQTRHL0I7QUEvS0E7RUFzRW9CLFdBQVc7QUE2Ry9CO0FBdEdBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxVQUFVO0VBQ1YsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsaUJBQWlCO0FBeUduQjtBQXRHQTtFQUNJLFdBQVc7RUFDWCx3REFBd0Q7RUFDeEQsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVk7RUFDWixVQUFVO0FBeUdkO0FBdEdBO0VBQ0ksMEJBQTBCO0VBQzFCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBeUdwQjtBQTdHQTtFQU1RLHFDQUFxQztFQUNyQyxzQkFBc0I7RUFDdEIseUJBQXlCO0FBMkdqQztBQW5IQTtFQVVZLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUE2RzVCO0FBeEhBO0VBY1ksZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsZUFBZTtBQThHM0I7QUEvSEE7RUFvQlksWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixrQkFBa0I7QUErRzlCO0FBcklBO0VBeUJZLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBZ0g5QjtBQTNJQTtFQThCWSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGtCQUFrQjtBQWlIOUI7QUFqSkE7RUFxQ1ksaUJBQWlCO0VBQ2pCLGNBQWM7QUFnSDFCO0FBdEpBO0VBeUNZLGNBQWM7QUFpSDFCO0FBMUpBO0VBOENZLDRCQUE0QjtBQWdIeEM7QUE5SkE7RUFtRFkseUJBQXlCO0FBK0dyQztBQTFHQTtFQUNJLG9CQUFvQjtFQUNwQiw2QkFBNkI7QUE2R2pDO0FBL0dBO0VBSVEsd0JBQXdCO0VBQ3hCLGVBQWU7RUFDZixVQUFVO0VBQ1YsWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0I7QUErRzFCO0FBeEhBO0VBWVEsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFnSDNCO0FBOUhBO0VBaUJRLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBaUgzQjtBQXBJQTtFQXNCUSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixrQkFBa0I7QUFrSDFCO0FBOUdBO0VBQ0k7SUFDSSwwQkFBMEI7SUFDMUIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixnQkFBZ0I7RUFpSHRCO0VBckhFO0lBTVEsYUFBYTtFQWtIdkI7RUF4SEU7SUFRWSxxQkFBcUI7SUFDckIsV0FBVztJQUNYLGFBQWE7SUFDYixnQkFBZ0I7RUFtSDlCO0VBOUhFO0lBYWdCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osaUJBQWlCO0VBb0huQztFQW5JRTtJQWlCb0Isa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCx5QkFBeUI7RUFxSC9DO0VBeElFO0lBdUJnQixxQ0FBcUM7SUFDckMsc0JBQXNCO0lBQ3RCLHlCQUF5QjtFQW9IM0M7RUE3SUU7SUEyQm9CLGlCQUFpQjtFQXFIdkM7RUFoSkU7SUE4Qm9CLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsa0JBQWtCO0VBcUh4QztFQXJKRTtJQW1Db0IsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7RUFxSHhDO0VBMUpFO0lBd0NvQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGtCQUFrQjtFQXFIeEM7RUEvSkU7SUErQ2dCLFdBQVc7RUFtSDdCO0VBbEtFO0lBaURvQixXQUFXO0VBb0hqQztFQXJLRTtJQW1Ed0IsK0NBQTZDO0lBQzdDLGdEQUE4QztFQXFIeEU7RUF6S0U7SUF5RGdCLGlCQUFpQjtFQW1IbkM7QUFDRjtBQTdHQTtFQUNJLHNCQUFzQjtBQWdIMUI7QUE1R0EsZUFBQTtBQUVBO0VBQ0ksZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0VBQ1osU0FBUztFQUNULFFBQVE7RUFDUixRQUFRO0VBQ1IsU0FBUztFQUNULG9DQUFvQztFQUNwQyxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFVBQVU7RUFLViw0QkFBNEI7QUE4R2hDO0FBOUhBO0VBa0JRLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtFQUNaLE9BQU87RUFDUCxRQUFRO0VBQ1IsUUFBUTtFQUNSLFNBQVM7RUFDVCxZQUFZO0FBZ0hwQjtBQTVHQTtFQUNJLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsb0NBQW9DO0VBQ3BDLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBK0d0QjtBQXJIQTtFQVFRLG1CQUFtQjtFQUNuQixlQUFlO0FBaUh2QjtBQTFIQTtFQVlRLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFrSHhCO0FBOUdBO0VBQ0ksV0FBVztFQUNYLFNBQVM7RUFDVCxlQUFlO0VBQ2YsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFpSGpCO0FBNUhBO0VBYVEsV0FBVztFQUNYLFNBQVM7RUFDVCxVQUFVO0VBQ1YsUUFBUTtBQW1IaEI7QUFuSUE7RUFtQlEsT0FBTztFQUNQLFdBQVc7RUFDWCxRQUFRO0VBQ1IsWUFBWTtBQW9IcEI7QUExSUE7RUF5QlEsT0FBTztFQUNQLFdBQVc7RUFDWCxXQUFXO0VBQ1gsU0FBUztBQXFIakI7QUFqSkE7RUErQlEsV0FBVztBQXNIbkI7QUFySkE7RUFpQ1ksZUFBZTtFQUNmLGlCQUFpQjtBQXdIN0I7QUExSkE7RUF1Q1ksZUQ5WVM7QUNxZ0JyQjtBQWxIQTtFQUNJLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBcUh2QjtBQWxIQTtFQUNJLFVBQVU7RUFDVixtQkFBbUI7QUFxSHZCO0FBakhBO0VBQ0ksZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0VBQ1osU0FBUztFQUNULE1BQU07RUFDTixRQUFRO0VBQ1IsT0FBTztFQUNQLFlBQVk7RUFDWiw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBS2xCLDRCQUE0QjtBQW9IaEM7QUFuSUE7RUFpQlEsWUFBWTtFQUNaLFVBQVU7RUFDVixjQUFjO0FBc0h0QjtBQWxIQTtFQUNJLE9BQU87RUFDUCxXQUFXO0VBQ1gsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixjQUFjO0VBQ2QsVUFBVTtFQUNWLFlBQVk7RUFLWiw0QkFBNEI7QUFxSGhDO0FBbEhBO0VBQ0ksWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixVQUFVO0FBcUhkO0FBbEhBO0VBQ0ksU0FBUztBQXFIYjtBQWxIQTtFQUNJLGVBQWU7QUFxSG5CO0FBaEhBOztFQUVJLHdCQUF3QjtFQUN4QixTQUFTO0FBbUhiO0FBL0dBO0VBQ0UsbUJBQW1CO0FBa0hyQjtBQW5IQTtFQUdRLGVBQWU7QUFvSHZCO0FBdkhBO0VBVW9CLDJCQUEyQjtBQWlIL0M7QUExR0E7RUFDSSx1QkFBdUI7RUFDdkIsMkJBQTJCO0FBNkcvQjtBQTFHQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBRXZCLCtCQUErQjtBQTRHakM7QUFqSEE7RUFRSSxZQUFZO0FBNkdoQjtBQXJIQTtFQVdNLGtCQUFrQjtBQThHeEI7QUF6SEE7RUFjSSxlQUFlO0FBK0duQjtBQTdIQTtFQWlCSSxlQUFlO0VBQ2YseUJBQW9DO0FBZ0h4QztBQWxJQTtFQXFCSSxlQUFlO0VBQ2YseUJBQXlCO0FBaUg3QjtBQXZJQTtFQXlCSSxjQUFjO0FBa0hsQjtBQTNJQTtFQXlCSSxjQUFjO0FBa0hsQjtBQTNJQTtFQXlCSSxjQUFjO0FBa0hsQjtBQTlHQTtFQUNFLGVBQWU7RUFDZix5QkFBb0M7QUFpSHRDO0FBL0dBO0VBQ0UsY0FBeUI7QUFrSDNCO0FBbkhBO0VBQ0UsY0FBeUI7QUFrSDNCO0FBbkhBO0VBQ0UsY0FBeUI7QUFrSDNCO0FBL0dBO0VBQ0UsZUFBZTtFQUNmLG9DQUFvQztBQWtIdEM7QUFoSEE7RUFDRSxjQUFjO0FBbUhoQjtBQXBIQTtFQUNFLGNBQWM7QUFtSGhCO0FBcEhBO0VBQ0UsY0FBYztBQW1IaEI7QUFoSEE7RUFDSSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixjQUFjO0FBbUhsQjtBQWpIQTtFQUtRLGFBQ0o7QUErR0o7QUE1R0E7RUFFUSxhQUNKO0FBNkdKO0FBeEdBO0VBQ0UsaUNBQThCO0VBQzlCLGVBQWU7RUFDZixRQUFRO0VBQ1IsWUFBWTtFQUNaLFNBQVM7RUFDVCxVQUFVO0VBQ1YsV0FBVztBQTJHYjtBQXZHQTtFQUNFLGVBQWU7RUFDZixRQUFRO0VBQ1IsU0FBUztFQUNULFVBQVU7RUFDVixVQUFVO0VBQ1YsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQiwyQ0FBMkM7RUFDM0Msa0JBQWtCO0FBMEdwQjtBQXhHQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsU0FBUztFQUNULGVBQWU7RUFDZixnQkFBZ0I7QUEyR2xCO0FBaEhBO0VBT0ksZUFBZTtBQTZHbkI7QUExR0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLDhDQUEyQztBQTZHN0M7QUEzR0E7RUFDRSxVQUFVO0FBOEdaO0FBNUdBO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtBQStHbEI7QUE3R0E7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBZ0huQjtBQTdHQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsK0JBQStCO0VBQUUsOENBQUE7QUFpSG5DO0FBOUdBLGlCQUFBO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxrQkFBa0I7RUFFbEIsb0RBQUE7RUFDQSxrQkFBa0I7RUFDbEIsVUFBVTtBQWdIWjtBQTdHQSxvRUFBQTtBQUNBO0VBQ0UsbUJBQW1CO0FBZ0hyQjtBQTVHQTtFQUNFLDZCQUE2QjtFQUM3QixjQUFjO0FBK0doQjtBQTdHQTtFQUNFLHVCQUF1QjtFQUN2QixjQUFjO0FBZ0hoQjtBQTlHQTtFQUNJLHlCQUF5QjtBQWlIN0I7QUEvR0E7RUFDSSxxQkFBcUI7RUFDckIseUJBQXlCO0FBa0g3QjtBQWhIQTtFQUNFLGFBQWE7QUFtSGY7QUFqSEE7RUFDSSx5QkFBeUI7QUFvSDdCO0FBbEhBO0VBQ0ksV0FBVztFQUdYLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsV0FBVztFQUNYLFFBQVE7RUFDUixTQUFTO0FBcUhiO0FBakhBO0VBQ0ksZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsMkNBQXdDO0FBb0g1QztBQXhIQTtFQU1NLG1CQUFtQjtFQUNuQixZQUFZO0FBc0hsQjtBQTdIQTtFQVVRLGtCQUFrQjtBQXVIMUI7QUFqSUE7RUFhTSxlQUFlO0FBd0hyQjtBQXBIQTtFQUNJLHVCQUF1QjtFQUN2QiwrQkFBK0I7RUFDL0IsK0JBQStCO0FBdUhuQztBQXJIQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2Qsa0JBQWtCO0FBd0hwQjtBQXRIQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osa0JBQWtCO0FBeUhwQjtBQXRIQTtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0RBQTZFO0VBQzdFLGVBQWU7RUFDZixxQkFBcUI7QUF5SHpCO0FBdEhBO0VBRVEsV0FBVztFQUNYLHdEQUF3RDtFQUN4RCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFNBQVM7RUFDVCxXQUFXO0VBQ1gsWUFBWTtFQUNaLFVBQVU7QUF3SGxCO0FBcEhBO0VBQ0ksaUNBQWlDO0VBQ2pDLGVBQWU7RUFDZixRQUFRO0VBQ1IsWUFBWTtFQUNaLFNBQVM7RUFDVCxVQUFVO0VBQ1YsV0FBVztBQXVIZjtBQXJIRTtFQUNFLDBCQUF5QjtFQUN6Qix5QkFBd0I7RUFDeEIsYUFBYTtFQUNiLG1CQUFtQjtBQXdIdkI7QUF0SEE7RUFDSSxjQUFjO0FBeUhsQjtBQXZIQTtFQUNJLGdCQUFnQjtFQUNoQixtQkFBbUI7QUEwSHZCO0FBeEhBO0VBQ0ksZ0JBQWdCO0FBMkhwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY291cnNlLW1vZHVsZS9jcmVhdGUtY291cnNlL2NvdXJzZS1leGFtL2NvdXJzZS1leGFtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHB1bGwtTDogbGVmdDtcbiRwdWxsLVI6IHJpZ2h0O1xuJHB1bGwtbm9uZTogbm9uZTtcbiRmdWxsLXdpZHRoOiAxMDAlO1xuJGJvcmRlci1ib3g6IGJvcmRlci1ib3g7XG4kYm9yZGVyLWNvbG9yOiAjZGVlYWVlO1xuJGJnLXdoaXRlOiAjZmZmO1xuJGVycm9yLWNvbG9yOiAjZmYwMDAwO1xuJGNvbW1vbi1ibHVlOiAjMDA4NGY2O1xuJHByaW1hcnktY29sb3I6ICMzMzM7XG4kYm9yZGVyLWNvbW1vbjojZWFlYWViO1xuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09aGVhZGVyIGNvbG9ycz09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuJGhlYWRlci1iZzojMDA2MEEzO1xuJGhlYWRlci1ib3JkZXI6I2VhZWFlYjtcbiRsZWZ0TWVudUJnOiNmYWZhZmE7XG4kbGVmdE1lbnVIb3ZlckJnOiMwMDg0ZjY7XG4kbGVmdE1lbnVUZXh0SG92ZXJDb2xvcjojZmZmO1xuJHJlZEJ0bjojZjQ0MzM2O1xuJGJvcmRlcmNjYzojY2NjO1xuJGxpZ2h0Qmx1ZTojZWZmN2ZmO1xuJHRhYmxlSGVhZGluZ0JnQ29sb3I6ICMwMDRhN2U7XG4udGFibGUtZm9ybWF0LWZpcnN0IHtcbiAgICAudGFibGUtcmVzcG9uc2l2ZSB7XG4gICAgICAgIHRhYmxlIHtcbiAgICAgICAgICAgIHRoLFxuICAgICAgICAgICAgdGQge1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoIHtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0Ym9keSB7XG4gICAgICAgICAgICAgICAgdHIge1xuICAgICAgICAgICAgICAgICAgICB0ZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuZmllbGQtY2hlY2tib3gtd3JhcHBlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBpbml0aWFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZm9ybS1jaGVja2JveCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mb3JtLWNoZWNrYm94K2xhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogN3B4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmFmdGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLmZhLXRyYXNoLW8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkcmVkQnRuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnRhYmxlLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgLmhlYWRpbmctY29udGFpbmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICNlMGVhZWM7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgICAuaGVhZGluZy1pdGVtIHtcbiAgICAgICAgd2lkdGg6IDEwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgIH1cbiAgICAudmFsdWUtb3V0ZXItY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgbWluLWhlaWdodDogNTN2aDtcbiAgICAgIG1heC1oZWlnaHQ6IDU0dmg7XG4gICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgIC52YWx1ZS1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgICAgICBib3JkZXItdG9wOiBub25lO1xuICAgICAgICAudmFsdWUtaXRlbSB7XG4gICAgICAgICAgd2lkdGg6IDEwJTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0iLCJAaW1wb3J0IFwiLi9zcmMvYXNzZXRzL2Nzcy9jb21tb24vdmFyaWFibGVzLnNjc3NcIjtcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi5taWRkbGUtc2VjdGlvbiB7XG4gICAgcGFkZGluZzogMTBweCAxMHB4O1xufVxuLmJ0biB7XG4gICAgYmFja2dyb3VuZDogIzAwODRmNjtcbiAgICBjb2xvcjogd2hpdGU7XG59XG4ubGFuZ01vZGVsQ3NzIHtcbiAgICAuZXhhbUFkZGVyIHtcbiAgICAgICAgLmJ0bkFkZCB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5yb3cge1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIH1cbiAgICAuYnRuLUdyb3VwIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICB9XG4gICAgLmNhbmNlbENsYXNzLXRhYmxlIHtcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIH1cbiAgICBoMyB7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgfVxufVxuXG4uY29tbW9uLXNlYXJjaC1maWx0ZXIge1xuICAgIC8vIG1hcmdpbi10b3A6IDVweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2QzZDRkNTtcbiAgICBwYWRkaW5nOiA1cHggNXB4IDEwcHggNXB4O1xuICAgIC5maWVsZC13cmFwcGVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIC5mb3JtLWN0cmwge1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuYnRuIHtcbiAgICAgICAgJi5mdWxsQmx1ZSB7XG4gICAgICAgICAgICAvLyBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5iYXRjaFRpbWVEZXQge1xuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgfVxufVxuXG4uY29udGVudC1zZWN0aW9uIHtcbiAgICBtYXJnaW46IDVweCAwcHg7XG4gICAgLmFjdGlvbi1NZW51IHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uY29uc3RhbnRIZWlnaHQge1xuICAgIGhlaWdodDogMzBweDtcbn1cblxuLmZvcm0td3JhcHBlciB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgLy8gbWFyZ2luOiA1cHggMHB4O1xuICAgICYuZGF0ZXBpY2tlciB7XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAzNXB4O1xuICAgICAgICAgICAgcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgLyogJjo6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2NhbGVuZGFyLnN2ZycpIG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDI1cHg7XG4gICAgICAgICAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDIxcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMXB4O1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IDA7XG4gICAgICAgICAgICB9ICovXG4gICAgICAgIH1cbiAgICB9XG4gICAgbGFiZWwge1xuICAgICAgICAvLyBjb2xvcjogIzMwOWJmOCAhaW1wb3J0YW50O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzcpO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cbiAgICAuc2lkZS1mb3JtLWN0cmwge1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxMTksIDExOSwgMTE5LCAwLjQxOTYwNzg0MzEzNzI1NDkpO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZzogOHB4IDVweDtcbiAgICAgICAgLy8gZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgJi5ic0RhdGVwaWNrZXIge1xuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgJi50aW1lcGljayB7XG4gICAgICAgIHBhZGRpbmc6IDFweCAwcHg7XG4gICAgICAgIC50Ym94IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIC8vIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgLnRpbWVzIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc2lkZS1mb3JtLWN0cmwge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTE5LCAxMTksIDExOSwgMC40MTk2MDc4NDMxMzcyNTQ5KTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA0cHggNXB4O1xuICAgICAgICAgICAgICAgIC8vIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgICAgJi5taW5zIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICYubWVycyB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnNhdmVfYnRuX2NvbnRhaW5lcntcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDBweDtcbiAgcmlnaHQ6IDBweDtcbiAgd2lkdGg6IDg1JTtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLmZpZWxkLXdyYXBwZXIuZGF0ZVBpY2tlckJveDphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgYmFja2dyb3VuZDogdXJsKC8uL2Fzc2V0cy9pbWFnZXMvY2FsZW5kYXIuc3ZnKSBuby1yZXBlYXQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiA1cHg7XG4gICAgdG9wOiAyOHB4O1xuICAgIHdpZHRoOiAyMXB4O1xuICAgIGhlaWdodDogMjFweDtcbiAgICB6LWluZGV4OiAwO1xufVxuXG4uYXR0ZW5kYW5jZVdyYXBwZXJDb3Vyc2Uge1xuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjZWVlO1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgbWF4LWhlaWdodDogNDgwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAuZmlsdGVyU2VjdGlvbiB7XG4gICAgICAgIHBhZGRpbmc6IDIwcHggMHB4IDEwcHggMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgcGFkZGluZzogNHB4IDEycHg7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xuICAgICAgICB9XG4gICAgICAgIGg1IHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMjAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICB9XG4gICAgICAgIC5hYnNlbnQge1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZlNTUyYTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgfVxuICAgICAgICAucHJlc2VudCB7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNDE5MWRhO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICB9XG4gICAgICAgIC5sZWF2ZSB7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjN2E3YTdhO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5hdHRlbmRhbmNlTWFpbiB7XG4gICAgICAgIC50YWJsZS1zY3JvbGwtd3JhcHBlciB7XG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAzNzVweDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICB9XG4gICAgICAgIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdHIge1xuICAgICAgICB0ZCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwcHggMjBweCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5mb3JtLXdyYXBwZXIge1xuICAgICAgICAuZm9ybS1jdHJsIHtcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNlZmVmZWY7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5idG5Hcm91cCB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgbWFyZ2luLWJvdHRvbTogNHB4ICFpbXBvcnRhbnQ7XG4gICAgLmJ0biB7XG4gICAgICAgIHBhZGRpbmc6IDBweCA4cHggMHB4IDhweDtcbiAgICAgICAgbWFyZ2luOiAwcHggNXB4O1xuICAgICAgICB3aWR0aDogMjklO1xuICAgICAgICBoZWlnaHQ6IDIycHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIH1cbiAgICAuY2xhc3NMZWF2ZUJ0biB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjN2E3YTdhO1xuICAgIH1cbiAgICAuY2xhc3NBYnNlbnRCdG4ge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZlNTUyYTtcbiAgICB9XG4gICAgLmNsYXNzUHJlc2VudEJ0biB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgYmFja2dyb3VuZDogIzQxOTFkYTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgLmF0dGVuZGFuY2VXcmFwcGVyIHtcbiAgICAgICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNlZWU7XG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgIG1heC1oZWlnaHQ6IDQyMHB4O1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAucm93IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAudGFibGVTZWN0aW9uIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgICAgIC5idXR0b24tcm93IHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjMDA4NGY2O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5maWx0ZXJTZWN0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjBweCAwcHggMTBweCAwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcbiAgICAgICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA0cHggMTJweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuYWJzZW50IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZTU1MmE7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnByZXNlbnQge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzQxOTFkYTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAubGVhdmUge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzdhN2E3YTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuc3R1ZGVudFRhYmxlV3JhcHBlciB7XG4gICAgICAgICAgICAgICAgICAgIC8vYm9yZGVyOiAycHggc29saWQgI2VlZTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIC5zY2hlZHVsZS1ib3R0b20ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICB1bCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCBoc2xhKDIxMCwgMiUsIDgzJSwgLjUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIGhzbGEoMjEwLCAyJSwgODMlLCAuNSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnJvdyB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnRvcmxNYXJrc1dpZHRoIHtcbiAgICB3aWR0aDogNTBweCAhaW1wb3J0YW50O1xufVxuXG4vLy8vLy8vLy8vLy8vL1BPUFVQIENTU1MvLy8vLy8vLy8vLy8vLy8vL1xuLyogcG9wVXAgU2NzcyAqL1xuXG4ucG9wdXBXcmFwcGVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvdHRvbTogMDtcbiAgICB0b3A6IDBweDtcbiAgICByaWdodDogMDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyMzAsIDIzMCwgMjMwLCAwLjUpO1xuICAgIHotaW5kZXg6IDEwMDsgLy8gZGlzcGxheTogbm9uZTtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbjtcbiAgICAucG9wdXAge1xuICAgICAgICBtYXgtd2lkdGg6IDQwJTsgLy8gbWF4LWhlaWdodDogMzUwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB0b3A6IDEwJTtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBtYXJnaW46IGF1dG87IC8vIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICB9XG59XG5cbi5wb3B1cC13cmFwcGVyIHtcbiAgICBwYWRkaW5nOiAyMHB4IDIwcHg7IC8vIGhlaWdodDogMTAwJTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJveC1zaGFkb3c6IDFweCA4cHggMjBweCA1cHggIzljOWM5YztcbiAgICB0cmFuc2l0aW9uOiB1bnNldDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBoMiB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG4gICAgaDQge1xuICAgICAgICBtYXJnaW46IDI1cHggMCAxNXB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cbn1cblxuLmNsb3NlUG9wdXAge1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIHRvcDogMTBweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiAyNnB4O1xuICAgIGhlaWdodDogMjZweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogM3B4O1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgJi5ib3R0b21SaWdodCB7XG4gICAgICAgIGJvdHRvbTogMnB4O1xuICAgICAgICB0b3A6IGF1dG87XG4gICAgICAgIGxlZnQ6IGF1dG87XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgIH1cbiAgICAmLnRvcExlZnQge1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogYXV0bztcbiAgICAgICAgdG9wOiAxcHg7XG4gICAgICAgIGJvdHRvbTogYXV0bztcbiAgICB9XG4gICAgJi5ib3R0b21MZWZ0IHtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICAgIGJvdHRvbTogMnB4O1xuICAgICAgICB0b3A6IGF1dG87XG4gICAgfVxuICAgIHN2ZyB7XG4gICAgICAgIHdpZHRoOiAxNnB4O1xuICAgICAgICAuY2xzLTEge1xuICAgICAgICAgICAgc3Ryb2tlOiAjYzFjMWMxO1xuICAgICAgICAgICAgc3Ryb2tlLXdpZHRoOiAycHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgJjpob3ZlciB7XG4gICAgICAgIC5jbHMtMSB7XG4gICAgICAgICAgICBzdHJva2U6ICRjb21tb24tYmx1ZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnBvcHVwLWNvbnRlbnQge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi5mYWRlSW4ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Y3NzIGZvciBtb2IgcG9wdXBcbi5wb3B1cFdyYXBwZXJNb2Ige1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm90dG9tOiAwO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHotaW5kZXg6IDEwMDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuOyAvLyBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbjtcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xuICAgIC5jbG9zZVBvcHVwIHtcbiAgICAgICAgcmlnaHQ6IC0yNXB4O1xuICAgICAgICB0b3A6IC0yN3B4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG59XG5cbi5wb3B1cC1tb2Ige1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LWhlaWdodDogNzAlO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgcGFkZGluZzogMzBweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICB6LWluZGV4OiAxO1xuICAgIGJvdHRvbTogLTcwJTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbjtcbn1cblxuLnBvcHVwV3JhcHBlck1vYi5zaG93UG9wdXBNb2Ige1xuICAgIHotaW5kZXg6IDEwMDtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIG9wYWNpdHk6IDE7XG59XG5cbi5wb3B1cFdyYXBwZXJNb2Iuc2hvd1BvcHVwTW9iIC5wb3B1cC1tb2Ige1xuICAgIGJvdHRvbTogMDtcbn1cblxuLnNwYW5UZXh0IHtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8vLy8gVHVybiBvZmYgc3Bpbm5lclxuaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxuaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLmNvdXJzZU1vZGVsV3JhcHBlciB7XG4gIG1hcmdpbi1ib3R0b206IDM1cHg7XG4gICAgLnJvdyB7XG4gICAgICAgIG1hcmdpbjogNXB4IDBweDtcblxuICAgIH1cbiAgICB0YWJsZSB7XG4gICAgICAgIHRoZWFkIHtcbiAgICAgICAgICAgIHRyIHtcbiAgICAgICAgICAgICAgICB0aCB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5zdWJqZWN0TmFtZSB7XG4gICAgd2lkdGg6IDE4NXB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMHB4IDBweCAhaW1wb3J0YW50O1xufVxuXG4uZXhhbV9hZGRlcl9kaXZ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGJvcmRlci1zcGFjaW5nOiAwcHggMnB4O1xuLy8gICBib3gtc2hhZG93OiAwcHggM3B4IDZweCByZ2JhKDAsMCwwLDAuMTYpO1xuICBib3gtc2hhZG93OiAwcHggM3B4IDZweCAjNjk2OTY5O1xuICAuZGF0ZUluZm8sIC5iYXNpYy1kZXRhaWx7XG4gICAgLy8gYmFja2dyb3VuZDogI2Y5ZjlmOTtcbiAgICBwYWRkaW5nOiA2cHg7XG4gIH1cbiAgLmRhdGVJbmZve1xuICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICB9XG4gIC5iYXNpYy1kZXRhaWx7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICB9XG4gIC50b3BpYy1saW5re1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjA0LCAyMDQsIDIwNCk7XG4gIH1cbiAgLnRvcGljLWxpbmtlZHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzEyODNmNDtcbiAgfVxuICAudG9waWMtbGlua2VkOjpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICMxMjgzZjQ7XG4gIH1cbn1cblxuLnRvcGljLWxpbmt7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIwNCwgMjA0LCAyMDQpO1xufVxuLnRvcGljLWxpbms6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHJnYigyMDQsIDIwNCwgMjA0KTtcbn1cblxuLnRvcGljLWxpbmtlZHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMTI4M2Y0ICFpbXBvcnRhbnQ7XG59XG4udG9waWMtbGlua2VkOjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjMTI4M2Y0O1xufVxuXG4udG9waWN0ZXh0e1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBtYXgtd2lkdGg6IDEyJTtcbn1cbi5kaXNwbGF5Q29tcCB7XG5cbiAgICAudmlldy1jb21wIHtcbiAgICB9XG4gICAgLmVkaXQtY29tcCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmVcbiAgICB9XG59XG5cbi5lZGl0Q29tcCB7XG4gICAgLnZpZXctY29tcCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmVcbiAgICB9XG4gICAgLmVkaXQtY29tcCB7XG4gICAgfVxufVxuXG4uYmxhY2stYmd7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTAsMTAsMTAsMC4zKTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBsZWZ0OiAwcHg7XG4gIHotaW5kZXg6IDE7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5cbi50b3BpY0JveHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDIwJTtcbiAgbGVmdDogMjAlO1xuICByaWdodDogMjAlO1xuICB3aWR0aDogNjAlO1xuICB6LWluZGV4OiAxMDA7XG4gIGJhY2tncm91bmQ6ICNmN2Y1ZjU7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5jbG9zZS1idG57XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRvcDogMTBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBzcGFue1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufVxuLmhlYWRlci1jb250YWluZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMTAsMTAsMTAsMC43KTtcbn1cbi5zdWItaGVhZGVye1xuICB3aWR0aDogMzAlO1xufVxuLnRvdGFsLXRvcGlje1xuICB3aWR0aDogMjAlO1xuICBtYXJnaW4tbGVmdDogMTAlO1xufVxuLnRvcGljLWxpc3RpbmctY29udGFpbmVye1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIG1heC1oZWlnaHQ6IDI3MHB4O1xufVxuXG4udG9vbHRpcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkIGJsYWNrOyAvKiBJZiB5b3Ugd2FudCBkb3RzIHVuZGVyIHRoZSBob3ZlcmFibGUgdGV4dCAqL1xufVxuXG4vKiBUb29sdGlwIHRleHQgKi9cbi50b29sdGlwIC50b29sdGlwdGV4dCB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgd2lkdGg6IDEyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNXB4IDA7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcblxuICAvKiBQb3NpdGlvbiB0aGUgdG9vbHRpcCB0ZXh0IC0gc2VlIGV4YW1wbGVzIGJlbG93ISAqL1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG59XG5cbi8qIFNob3cgdGhlIHRvb2x0aXAgdGV4dCB3aGVuIHlvdSBtb3VzZSBvdmVyIHRoZSB0b29sdGlwIGNvbnRhaW5lciAqL1xuLnRvb2x0aXA6aG92ZXIgLnRvb2x0aXB0ZXh0IHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuLy8gVHJlZSBWaWV3IFN0eWxlXG4uay10cmVldmlldyAuay1pbi5rLXN0YXRlLXNlbGVjdGVke1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICM2NTY1NjU7XG59XG4uay10cmVldmlldyAuay1pbi5rLXN0YXRlLXNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiAjNjU2NTY1O1xufVxuLmstY2hlY2tib3g6aW5kZXRlcm1pbmF0ZSsuay1jaGVja2JveC1sYWJlbDo6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDg0ZjY7XG59XG4uay1jaGVja2JveDpjaGVja2VkKy5rLWNoZWNrYm94LWxhYmVsOjpiZWZvcmUge1xuICAgIGJvcmRlci1jb2xvcjogIzAwODRmNjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4NGY2O1xufVxuLmstdHJlZXZpZXcgLmstY29udGVudCwgLmstdHJlZXZpZXc+LmstZ3JvdXAsIC5rLXRyZWV2aWV3IC5rLWl0ZW0+LmstZ3JvdXB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4uay1jaGVja2JveDppbmRldGVybWluYXRlKy5rLWNoZWNrYm94LWxhYmVsOjphZnRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwODRmNjtcbn1cbi5rLWNoZWNrYm94OmluZGV0ZXJtaW5hdGUrLmstY2hlY2tib3gtbGFiZWw6OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIHdpZHRoOiA4cHg7XG4gICAgaGVpZ2h0OiA4cHg7XG4gICAgdG9wOiA0cHg7XG4gICAgbGVmdDogNHB4O1xufVxuXG5cbi5sb29waW5nRGl2IHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgYm9yZGVyLXNwYWNpbmc6IDBweCAycHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggcmdiYSgwLDAsMCwwLjE2KTtcbiAgICAuZGF0ZUluZm8sIC5iYXNpYy1kZXRhaWx7XG4gICAgICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xuICAgICAgcGFkZGluZzogNnB4O1xuICAgIH1cbiAgICAuZGF0ZUluZm97XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICB9XG4gICAgLmJhc2ljLWRldGFpbHtcbiAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICB9XG59XG5cbi5zbWFsbC1idG4ge1xuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDAuNGVtIDAuOGVtICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMC4yZW0gIWltcG9ydGFudDtcbn1cbi5hY3Rpb25fYnRue1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY29sb3I6ICMzZDg5ZjA7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5hZGRfZXhhbV9idG57XG4gIGJhY2tncm91bmQ6ICMzZDg5ZjA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4ubWFpbC1ub3RpZmljYXRpb24ge1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9taWFsX25vdGlmaWNhdGlvbi5zdmcpIG5vLXJlcGVhdDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uZm9ybS13cmFwcGVyIHtcbiAgICAmLmRhdGVQaWNrZXJCb3g6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKC8uL2Fzc2V0cy9pbWFnZXMvY2FsZW5kYXIuc3ZnKSBuby1yZXBlYXQ7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDE4cHg7XG4gICAgICAgIHRvcDogMjhweDtcbiAgICAgICAgd2lkdGg6IDIxcHg7XG4gICAgICAgIGhlaWdodDogMjFweDtcbiAgICAgICAgei1pbmRleDogMDtcbiAgICB9XG59XG5cbi5ibGFjay1iZ3tcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDEyLCAxMSwgMTEsIDAuMyk7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBsZWZ0OiAwcHg7XG4gICAgei1pbmRleDogNjtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAudG9waWMtY29udGFpbmVye1xuICAgIG1hcmdpbi1yaWdodDogMCFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDAhaW1wb3J0YW50O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbi5hcnJvdy1pY29ue1xuICAgIHBhZGRpbmc6IDAgNXB4O1xufVxuLmxldmVsMVRvcGlje1xuICAgIHBhZGRpbmctdG9wOiA0cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDJweDtcbn1cbi5zdWJUb3BpY0xldmVse1xuICAgIHBhZGRpbmctdG9wOiA4cHg7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/components/course-module/create-course/course-exam/course-exam.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/course-module/create-course/course-exam/course-exam.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: CourseExamComponent, DateMonthFormat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseExamComponent", function() { return CourseExamComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateMonthFormat", function() { return DateMonthFormat; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/authenticator.service */ "./src/app/services/authenticator.service.ts");
/* harmony import */ var _services_course_services_exam_schedule_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/course-services/exam-schedule.service */ "./src/app/services/course-services/exam-schedule.service.ts");
/* harmony import */ var _services_course_services_topic_listing_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/course-services/topic-listing.service */ "./src/app/services/course-services/topic-listing.service.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_common_api_call_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../services/common-api-call.service */ "./src/app/services/common-api-call.service.ts");
/* harmony import */ var _services_message_show_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../services/message-show.service */ "./src/app/services/message-show.service.ts");
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










let CourseExamComponent = /** @class */ (() => {
    let CourseExamComponent = class CourseExamComponent {
        constructor(apiService, toastCtrl, auth, topicService, cd, _http, commonApiCall, msgSrvc) {
            this.apiService = apiService;
            this.toastCtrl = toastCtrl;
            this.auth = auth;
            this.topicService = topicService;
            this.cd = cd;
            this._http = _http;
            this.commonApiCall = commonApiCall;
            this.msgSrvc = msgSrvc;
            this.masterCourseList = [];
            this.courseList = [];
            this.batchesList = [];
            this.fullResponse = [];
            this.examScheduleData = [];
            this.cancelledSchedule = [];
            this.studentList = [];
            this.examSchedule = [];
            this.viewList = [];
            this.subjectListData = [];
            this.newExamSubjectData = [];
            this.subjectListDataSource = [];
            this.subject_topics = [];
            this.row_edit_subject_topicId = [];
            this.checkedKeys = [];
            this.topicsName = [];
            this.isLangInstitute = false;
            this.showContentSection = false;
            this.showCourseStartEndDate = false;
            this.markAttendancePopUp = false;
            this.cancelExamPopUp = false;
            this.smsAbsenteesChkbx = false;
            this.absentCount = 0;
            this.presentCount = 0;
            this.leaveCount = 0;
            this.attendanceNote = "";
            this.batchAdderData = {
                exam_date: moment__WEBPACK_IMPORTED_MODULE_1__().format("YYYY-MM-DD"),
                exam_desc: "",
                start_time: {
                    hour: "12 PM",
                    minute: '00'
                },
                end_time: {
                    hour: "1 PM",
                    minute: "00"
                },
                total_marks: 0,
                topics_covered: ''
            };
            this.batchData = {
                standard_id: -1,
                subject_id: -1,
                batch_id: -1,
            };
            this.cancelPopUpData = {
                reason: "",
                notify: true
            };
            this.courseData = {
                master_course: '-1',
                course_id: -1,
                requested_date: moment__WEBPACK_IMPORTED_MODULE_1__().format("YYYY-MM-DD")
            };
            this.types = [
                { label: 'Course', value: 'course' },
                { label: 'Subject', value: 'subject' }
            ];
            this.batchStartDate = "";
            this.batchEndDate = "";
            this.markAttendanceData = "";
            this.cancelExamData = "";
            this.times = ['1 AM', '2 AM', '3 AM', '4 AM', '5 AM', '6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM', '9 PM', '10 PM', '11 PM', '12 AM'];
            this.minArr = ['00', '05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55'];
            this.selectedType = "course";
            this.currentDate = moment__WEBPACK_IMPORTED_MODULE_1__().format("YYYY-MM-DD");
            this.jsonVar = {
                isSheduleBatch: true,
                cancelCourseLevel: false
            };
            this.newExamData = {
                startTimeHrs: '12 PM',
                startTimeMins: '00',
                endTimeHrs: '1 PM',
                endTimeMins: '00',
                total_marks: ''
            };
            this.exam_desc = '';
            this.exam_room_no = '';
            this.subject_id = '';
            this.subject_name = '';
            this.exam_marks = '';
            this.edit_subject_id = '';
            this.edit_subject_name = '';
            this.edit_exam_marks = '';
            this.edit_subject_topics = '';
            this.edit_exam_desc = '';
            this.edit_exam_room_no = '';
            this.row_edit_subject_id = '';
            this.row_edit_subject_name = '';
            this.row_edit_exam_marks = '';
            this.row_edit_subject_topics = '';
            this.row_edit_exam_desc = '';
            this.row_edit_exam_room_no = '';
            this.total_marks_to_show = 0;
            // Topic listing variables
            this.topicBox = true;
            this.selectAllTopics = false;
            this.showTopicsPopUp = false;
            this.topicsList = [];
            this.totalTopicsList = [];
            this.subjectsList = [];
            this.selectedTopicsListObj = [];
            this.selectedTopics = '';
            this.getSubjectObject = '';
            this.showExamEditModal = false;
            this.enableCheck = true;
            this.checkChildren = true;
            this.checkParents = true;
            this.checkOnClick = true;
            this.checkMode = 'multiple';
            this.topicLinkColor = false;
            this.changeColor = false;
            this.multiClickDisabled = false;
            this.selectedRow = "";
            this.coursePlannerStatus = false;
            this.schoolModel = false;
            this.examTypeList = [];
            this.selectedExamTypeId = "-1";
        }
        get checkableSettings() {
            return {
                checkChildren: this.checkChildren,
                checkParents: this.checkParents,
                enabled: this.enableCheck,
                mode: this.checkMode,
                checkOnClick: this.checkOnClick
            };
        }
        ngOnInit() {
            this.institute_id = sessionStorage.getItem('institute_id');
            this.checkInstituteType();
            this.fetchPrefillData();
            this.checkForCoursePlannerRoute();
            // changes by Nalini - to handle school model conditions
            this.auth.schoolModel.subscribe(res => {
                this.schoolModel = false;
                if (res) {
                    this.schoolModel = true;
                }
            });
            if (this.schoolModel) {
                this.fetchInstituteExamTypes();
            }
        }
        checkForCoursePlannerRoute() {
            this.coursePlannerStatus = sessionStorage.getItem('isFromCoursePlanner');
        }
        fetchPrefillData() {
            if (this.isLangInstitute) {
                // this.getMasterCourseBatchData();
                this.getMasterCourseBatchDataNew();
            }
            else {
                // this.getMasterCourseList();
                this.getMasterCourse();
            }
        }
        getMasterCourseBatchData() {
            this.auth.showLoader();
            this.apiService.getCombinedList(this.batchData.standard_id, this.batchData.subject_id).subscribe((res) => {
                this.auth.hideLoader();
                if (this.masterCourseList.length == 0) {
                    this.masterCourseList = res.standardLi;
                }
                if (res.batchLi != null && res.batchLi.length > 0) {
                    this.batchesList = res.batchLi;
                    this.subjectsList = res.subjectLi;
                }
                if (res.subjectLi != null && res.subjectLi.length > 0) {
                    this.courseList = res.subjectLi;
                    this.subjectsList = res.subjectLi;
                }
            }, err => {
                console.log(err);
                this.auth.hideLoader();
            });
        }
        getMasterCourseBatchDataNew() {
            let url = "/api/v1/standards/standard-subject-list/" + this.institute_id + '?is_active=Y&is_subject_required=true';
            this.auth.showLoader();
            this._http.getData(url).subscribe((data) => {
                this.auth.hideLoader();
                this.masterCourseList = data.result;
            }, (error) => {
                this.auth.hideLoader();
                console.log(error);
            });
        }
        getCourse() {
            for (let i = 0; i < this.masterCourseList.length; i++) {
                if (this.batchData.standard_id == this.masterCourseList[i].standard_id) {
                    this.courseList = this.masterCourseList[i].subject_list;
                }
            }
        }
        getBatchList() {
            this.auth.showLoader();
            let url = '/api/v1/batches/batch-list/' + this.institute_id + '/' + this.batchData.subject_id + '?is_active_not_expire=A&sorted_by=batch_name';
            this._http.getData(url).subscribe((data) => {
                this.auth.hideLoader();
                this.batchesList = data.result;
                // this.batchPro = data.batchLi;
            }, (error) => {
                this.auth.hideLoader();
                return error;
            });
        }
        fetchTopics() {
            this.auth.showLoader();
            this.totalTopicsList = [];
            this.selectedTopics = '';
            this.selectedTopicsListObj = [];
            this.topicService.getAllTopicsSubTopics(this.batchData.subject_id).subscribe(data => {
                this.topicsList = [];
                this.topicsList = data;
                if (this.topicsList.length && this.topicsList != null) {
                    this.showTopicsPopUp = true;
                    this.auth.hideLoader();
                    this.topicsList.forEach(tpc => {
                        this.totalTopicsList.push(tpc);
                        tpc.checked = false;
                        if (tpc.subTopic.length) {
                            this.getAllTopics(tpc.subTopic);
                        }
                    });
                }
                else {
                    this.auth.hideLoader();
                    this.messageNotifier('info', 'Info', 'No topics available to link !');
                }
            }, err => {
                this.auth.hideLoader();
                this.messageNotifier('error', '', err.error.message);
            });
        }
        saveSelectedTopics() {
            /* if(this.totalTopicsList.filter(el => el.checked == true).length == 0){
              this.messageNotifier('info','Info', 'Please select topics to save !')    }
            else { */
            this.auth.showLoader();
            this.selectedTopicsListObj = [];
            this.selectedTopicsListObj = this.totalTopicsList.filter(obj => obj.checked == true);
            if (this.selectedTopicsListObj != undefined) {
                this.selectedTopics = this.selectedTopicsListObj.map(obj => {
                    return obj.topicId;
                });
                this.selectedTopics = this.selectedTopics.join('|');
            }
            this.messageNotifier('success', '', 'Topics linked successfully');
            this.auth.hideLoader();
            this.showTopicsPopUp = false;
            // }
        }
        fetchSelectedTopics() {
            this.auth.showLoader();
            this.showTopicsPopUp = true;
            this.selectedTopicsListObj.forEach(obj => {
                var getTopicObject = this.totalTopicsList.find(ele => ele.topicId == obj.topicId);
                getTopicObject.checked = true;
            });
            this.auth.hideLoader();
        }
        getAllTopics(topic) {
            topic.forEach(obj => {
                this.totalTopicsList.push(obj);
                obj.checked = false;
                if (obj.subTopic.length) {
                    this.getAllTopics(obj.subTopic);
                }
            });
        }
        toggleArrow(topic) {
            topic.isExpand = !(topic.isExpand);
        }
        closeTopicModal(topic) {
            this.showTopicsPopUp = false;
            this.showExamEditModal = false;
        }
        linkTopics() {
            /* if(this.totalTopicsList.filter(el => el.checked == true).length == 0){
             this.messageNotifier('info','Info','No topics selected')
            }
            else { */
            this.auth.showLoader();
            var getSelectedTopics = this.totalTopicsList.filter(el => el.checked == true);
            var getTopicIds;
            ;
            if (getSelectedTopics != undefined) {
                getTopicIds = getSelectedTopics.map(obj => {
                    return obj.topicId;
                });
                getTopicIds = getTopicIds.join('|');
                this.getSubjectObject.topics_covered = getTopicIds;
                this.examSchedule.find(ele => ele.schd_id == this.getSubjectObject.schd_id).topics_covered = getTopicIds;
            }
            this.showTopicsPopUp = false;
            this.auth.hideLoader();
            this.showExamEditModal = false;
            this.messageNotifier('success', '', 'Topics updated successfully');
            // }
        }
        //on checkbox check
        selectTopics(topic, event) {
            topic.checked = !topic.checked;
            if (topic.subTopic.length) {
                this.checkAllSubTopics(topic.subTopic, event.target.checked);
            }
            if (!event.target.checked) {
                if (topic.parentTopicId != 0) {
                    this.uncheckParent(topic);
                }
            }
            this.checkParent(topic);
        }
        // check/uncheck all subtopics if parent is checked/unchecked
        checkAllSubTopics(topic, param) {
            topic.forEach(obj => {
                if (param) {
                    obj.checked = true;
                }
                else {
                    obj.checked = false;
                }
                if (obj.subTopic.length) {
                    this.checkAllSubTopics(obj.subTopic, param);
                }
            });
        }
        //check parent if all subtopics are checked
        checkParent(topic) {
            var checkAll = true;
            if (this.totalTopicsList.find(el => el.topicId == topic.topicId) != undefined) {
                var parentTopic = this.totalTopicsList.find(ele => ele.topicId == topic.parentTopicId);
                if (parentTopic != undefined) {
                    if (parentTopic.subTopic.length) {
                        parentTopic.subTopic.forEach(subTpc => {
                            if (!subTpc.checked) {
                                checkAll = false;
                            }
                        });
                        if (checkAll) {
                            parentTopic.checked = true;
                            if (parentTopic.parentTopicId != 0) {
                                this.checkParent(parentTopic);
                            }
                        }
                    }
                }
            }
        }
        //uncheck parent if any of the child is deselected
        uncheckParent(topic) {
            var getParentTopic = this.totalTopicsList.find(obj => obj.topicId == topic.parentTopicId);
            if (getParentTopic != undefined) {
                getParentTopic.checked = false;
                if (getParentTopic.parentTopicId != 0) {
                    this.uncheckParent(getParentTopic);
                }
            }
        }
        editTopics(row) {
            console.log('inside edit topics:', row);
            this.getSubjectObject = '';
            this.getSubjectObject = row;
            this.auth.showLoader();
            if (row.topics_covered != '' && row.topics_covered != null) {
                var selectedTopicIds = row.topics_covered.split('|');
            }
            var list = [];
            this.topicService.getAllTopicsSubTopics(this.batchData.subject_id).subscribe(res => {
                this.topicsList = [];
                this.topicsList = res;
                if (this.topicsList != null && this.topicsList.length) {
                    this.showTopicsPopUp = true;
                    this.showExamEditModal = true;
                    this.auth.hideLoader();
                    this.topicsList.forEach(obj => {
                        list.push(obj);
                        if (selectedTopicIds != undefined) {
                            if (selectedTopicIds.indexOf((obj.topicId).toString()) > -1) {
                                obj.checked = true;
                            }
                        }
                        if (obj.subTopic.length) {
                            this.fetchAllTopics(obj.subTopic, list, selectedTopicIds);
                        }
                    });
                    this.totalTopicsList = [];
                    this.totalTopicsList = list;
                }
                else {
                    this.auth.hideLoader();
                    // this.msgService.showErrorMessage(this.msgService.toastTypes.error, 'Error', "No topics available to Link");
                    this.messageNotifier('info', 'Info', 'No topics available to link');
                }
            }, err => {
                this.auth.hideLoader();
                // this.msgService.showErrorMessage(this.msgService.toastTypes.error, 'Error', err.error.message);
                this.messageNotifier('error', '', err.error.message);
            });
        }
        fetchAllTopics(topic, list, idList) {
            topic.forEach(key => {
                if (idList != undefined && idList != null) {
                    if (idList.indexOf((key.topicId).toString()) > -1) {
                        key.checked = true;
                    }
                }
                list.push(key);
                if (key.subTopic.length) {
                    this.fetchAllTopics(key.subTopic, list, idList);
                }
            });
        }
        onBatchMasterCourseSelection(event) {
            this.batchData.subject_id = -1;
            this.batchData.batch_id = -1;
            this.courseList = [];
            this.batchesList = [];
            // this.getMasterCourseBatchData();
            this.getCourse();
        }
        onBatchCourseSelection(event) {
            this.batchData.batch_id = -1;
            if (this.batchData.subject_id != -1) {
                this.batchesList = [];
                // this.getMasterCourseBatchData();
                this.getBatchList();
                // this.getMasterCourseBatchDataNew();
            }
            this.getCourseName(event);
        }
        getCourseName(eve) {
            this.selectedCourseName = '';
            this.selectedCourseName = this.subjectsList.find(ob => ob.subject_id == eve).subject_name;
        }
        batchModelGoClick() {
            if (this.batchData.batch_id != -1) {
                this.cancelledSchedule = [];
                this.examSchedule = [];
                this.auth.showLoader();
                this.apiService.getExamSchedule(this.batchData.batch_id).subscribe((res) => {
                    this.auth.hideLoader();
                    this.showContentSection = true;
                    this.jsonVar.isSheduleBatch = true;
                    this.examScheduleData = res;
                    console.log("this.examScheduleData", this.examScheduleData);
                    this.batchStartDate = this.examScheduleData.batch_start_date;
                    this.batchEndDate = this.examScheduleData.batch_end_date;
                    if (moment__WEBPACK_IMPORTED_MODULE_1__(this.batchEndDate).format("YYYY-MM-DD") < moment__WEBPACK_IMPORTED_MODULE_1__().format("YYYY-MM-DD")) {
                        this.jsonVar.isSheduleBatch = false;
                    }
                    else {
                        this.jsonVar.isSheduleBatch = true;
                    }
                    if (res.otherSchd != "" && res.otherSchd != null) {
                        if (res.otherSchd.length > 0) {
                            this.examSchedule = res.otherSchd;
                        }
                    }
                    if (res.cancelSchd != "" && res.cancelSchd != null) {
                        if (res.cancelSchd.length > 0) {
                            this.cancelledSchedule = res.cancelSchd;
                        }
                    }
                }, err => {
                    this.auth.hideLoader();
                    //console.log(err);
                    this.messageNotifier('error', '', err.error.message);
                });
            }
            else {
                if (this.batchData.standard_id == -1) {
                    this.messageNotifier('error', '', 'Please Select Master Course, Course and then Batch or Batch');
                }
                else if (this.batchData.subject_id == -1) {
                    this.messageNotifier('error', '', 'Please Select Course and then Batch or Batch');
                }
                else if (this.batchData.batch_id == -1) {
                    this.messageNotifier('error', '', 'Please Select Batch');
                }
            }
        }
        addNewExamSchedule() {
            if (this.examScheduleData.is_exam_grad_feature <= 0) {
                this.batchAdderData.total_marks = Number(this.batchAdderData.total_marks);
                if (this.batchAdderData.total_marks == 0) {
                    this.messageNotifier('error', '', 'Please provide total marks');
                    return;
                }
            }
            let obj = {};
            obj.total_marks = this.batchAdderData.total_marks;
            obj.exam_date = moment__WEBPACK_IMPORTED_MODULE_1__(this.batchAdderData.exam_date).format('YYYY-MM-DD');
            let start_time = moment__WEBPACK_IMPORTED_MODULE_1__(this.createTimeInFormat(this.batchAdderData.start_time.hour, this.batchAdderData.start_time.minute, 'comp'), 'h:mma');
            let end_time = moment__WEBPACK_IMPORTED_MODULE_1__(this.createTimeInFormat(this.batchAdderData.end_time.hour, this.batchAdderData.end_time.minute, 'comp'), 'h:mma');
            if (!(start_time.isBefore(end_time))) {
                this.messageNotifier('error', '', 'Please enter correct start time and end time');
                return false;
            }
            else {
                obj.start_time = this.createTimeInFormat(this.batchAdderData.start_time.hour, this.batchAdderData.start_time.minute, '');
                obj.end_time = this.createTimeInFormat(this.batchAdderData.end_time.hour, this.batchAdderData.end_time.minute, '');
                obj.duration = end_time.diff(start_time, 'minutes');
            }
            obj.exam_desc = this.batchAdderData.exam_desc;
            obj.topics_covered = this.selectedTopics;
            obj.schd_id = 0;
            obj.isReferenced = "Y";
            this.examSchedule.push(obj);
            this.batchAdderData = {
                exam_date: moment__WEBPACK_IMPORTED_MODULE_1__().format("YYYY-MM-DD"),
                exam_desc: "",
                start_time: {
                    hour: "12 PM",
                    minute: '00'
                },
                end_time: {
                    hour: "1 PM",
                    minute: "00"
                },
                total_marks: 0,
                topics_covered: ''
            };
            this.selectedTopics = '';
            this.selectedTopicsListObj = [];
        }
        addDataToExamSchedule() {
            let dataToSend = this.makeJsonToSendData();
            if (dataToSend == false) {
                return;
            }
            let type = "";
            if (this.examScheduleData.otherSchd == 0) {
                type = "post";
            }
            else if (this.examScheduleData.otherSchd == null) {
                type = "post";
            }
            else if (this.examScheduleData.otherSchd == undefined) {
                type = "post";
            }
            else {
                type = "put";
            }
            if (!this.auth.isRippleLoad.getValue()) {
                this.auth.showLoader();
                this.apiService.serverRequestToSaveSchedule(dataToSend, type).subscribe(res => {
                    this.auth.hideLoader();
                    this.messageNotifier('success', 'Successfully', 'Schedule Created Successfully');
                    this.batchModelGoClick();
                }, err => {
                    this.auth.hideLoader();
                    //console.log(err);
                    this.messageNotifier('error', '', err.error.message);
                });
            }
            this.selectedTopics = '';
            this.selectedTopicsListObj = [];
        }
        makeJsonToSendData() {
            let obj = {};
            obj.batch_id = this.batchData.batch_id;
            obj.exam_freq = "OTHER";
            obj.otherSchd = [];
            if (this.examSchedule.length > 0) {
                for (let i = 0; i < this.examSchedule.length; i++) {
                    let test = {};
                    test.exam_date = moment__WEBPACK_IMPORTED_MODULE_1__(this.examSchedule[i].exam_date).format('YYYY-MM-DD'),
                        test.start_time = this.examSchedule[i].start_time;
                    test.end_time = this.examSchedule[i].end_time;
                    test.total_marks = this.examSchedule[i].total_marks;
                    test.exam_desc = this.examSchedule[i].exam_desc;
                    test.isReferenced = this.examSchedule[i].isReferenced;
                    test.duration = this.examSchedule[i].duration;
                    test.schd_id = this.examSchedule[i].schd_id;
                    test.topics_covered = this.examSchedule[i].topics_covered;
                    obj.otherSchd.push(test);
                }
            }
            return obj;
        }
        // Table Action Menu
        clearExam() {
            if (this.examScheduleData.coursesList[0].courseClassSchdList) {
                this.calculateTotalMarks();
                this.clearAllField();
            }
            else {
                this.messageNotifier('error', '', "Only class present");
            }
        }
        editSubject(row_no, subject_data) {
            if (this.selectedRow !== "") {
                if (this.row_edit_subject_id != "" && this.row_edit_subject_id != undefined) {
                    document.getElementById(("row_already" + this.selectedRow).toString()).classList.add('displayComp');
                    document.getElementById(("row_already" + this.selectedRow).toString()).classList.remove('editComp');
                }
                else {
                    document.getElementById(("row" + this.selectedRow).toString()).classList.add('displayComp');
                    document.getElementById(("row" + this.selectedRow).toString()).classList.remove('editComp');
                }
            }
            this.selectedRow = row_no;
            document.getElementById(("row" + row_no).toString()).classList.remove('displayComp');
            document.getElementById(("row" + row_no).toString()).classList.add('editComp');
            this.edit_subject_id = subject_data.subject_id;
            this.edit_subject_name = subject_data.subject_name;
            this.edit_exam_marks = subject_data.exam_marks;
            this.edit_subject_topics = subject_data.subject_topics;
            this.edit_subject_topicId = subject_data.topicsId;
            this.edit_exam_desc = subject_data.exam_desc;
            this.edit_exam_room_no = subject_data.exam_room_no;
            this.checkedKeys = subject_data.topicsId;
        }
        updateSubject(row_no, subject_data) {
            if (this.edit_subject_id == null || this.edit_subject_id == '') {
                this.messageNotifier('error', '', 'No subject(s) added!');
                return;
            }
            if (this.edit_exam_marks == '' || this.edit_exam_marks == null) {
                this.messageNotifier('error', '', 'Please Provide Marks');
                return;
            }
            let subjectName = "";
            if (this.subjectListData.length > 0) {
                this.subjectListData[0].forEach(ele => {
                    if (this.edit_subject_id == ele.subject_id) {
                        subjectName = ele.subject_name;
                    }
                });
            }
            let topic_names = this.topicsName.join(", ");
            this.newExamSubjectData[row_no].subject_id = this.edit_subject_id;
            this.newExamSubjectData[row_no].subject_name = subjectName;
            this.newExamSubjectData[row_no].exam_marks = this.edit_exam_marks;
            this.newExamSubjectData[row_no].subject_topics = topic_names;
            this.newExamSubjectData[row_no].topicsId = this.checkedKeys;
            this.newExamSubjectData[row_no].exam_desc = this.edit_exam_desc;
            this.newExamSubjectData[row_no].exam_room_no = this.edit_exam_room_no;
            this.edit_subject_id = '';
            this.edit_subject_name = '';
            this.edit_exam_marks = '';
            this.edit_subject_topics = '';
            this.edit_exam_desc = '';
            this.edit_exam_room_no = '';
            this.edit_subject_topicId = [];
            this.calculateTotalMarks();
            document.getElementById(("row" + row_no).toString()).classList.add('displayComp');
            document.getElementById(("row" + row_no).toString()).classList.remove('editComp');
            this.selectedRow = "";
        }
        clearAllField() {
            this.newExamSubjectData = [];
            this.newExamData.startTimeHrs = '12 PM';
            this.newExamData.startTimeMins = '00';
            this.newExamData.endTimeHrs = '1 PM';
            this.newExamData.endTimeMins = '00';
            this.newExamData.total_marks = '';
            this.clearField();
        }
        deleteExamSchedule(data, index) {
            this.examSchedule.splice(index, 1);
        }
        notifyExamSchedule(data) {
            if (confirm('Are you sure u want to send Exam Schedule SMS to the batch?')) {
                this.apiService.notifyStudentExam(data.schd_id).subscribe(res => {
                    this.messageNotifier('success', 'Notified', 'Notification Sent Successfully');
                }, err => {
                    //console.log(err);
                    this.messageNotifier('error', '', err.error.message);
                });
            }
        }
        //cancelExamSchedule
        cancelExamSchedule(data) {
            this.cancelExamPopUp = true;
            this.cancelExamData = data;
        }
        closeCancelExamPopUp() {
            this.jsonVar.cancelCourseLevel = false;
            this.cancelExamPopUp = false;
            this.cancelExamData = "";
            this.cancelPopUpData = {
                reason: "",
                notify: true
            };
        }
        cancelExamClassSchedule() {
            if (this.cancelPopUpData.reason.trim() == "" || null) {
                this.messageNotifier('error', '', 'Please enter cancellation reason');
                return;
            }
            let notify = "";
            if (this.cancelPopUpData.notify) {
                notify = "Y";
            }
            else {
                notify = "N";
            }
            if (!this.auth.isRippleLoad.getValue()) {
                this.auth.showLoader();
                let obj = {
                    batch_id: this.batchData.batch_id,
                    exam_freq: "OTHER",
                    cancelSchd: [{
                            schd_id: this.cancelExamData.schd_id,
                            exam_desc: this.cancelPopUpData.reason,
                            is_notified: notify
                        }]
                };
                this.apiService.cancelExamSchedule(obj).subscribe(res => {
                    this.messageNotifier('success', 'Successfully Cancelled', 'Scheduled exam cancelled successfully');
                    this.auth.hideLoader();
                    this.batchModelGoClick();
                    this.closeCancelExamPopUp();
                }, err => {
                    //console.log(err);
                    this.auth.hideLoader();
                    this.messageNotifier('error', '', err.error.message);
                });
            }
        }
        // Mark Attendance Popup
        markAttendanceSchedule(data) {
            this.markAttendancePopUp = true;
            this.markAttendanceData = data;
            this.getStudentList();
        }
        getStudentList() {
            let obj = {
                attendanceSchdId: this.markAttendanceData.schd_id,
                batch_id: this.batchData.batch_id
            };
            this.auth.showLoader();
            this.apiService.fetchStudentList(obj).subscribe((res) => {
                this.auth.hideLoader();
                this.studentList = res;
                this.getTotalCountForCourse(res);
                if (res.length > 0) {
                    this.attendanceNote = res[0].dateLi[0].attendance_note;
                }
                else {
                    this.attendanceNote = "";
                }
            }, err => {
                //console.log(err);
                this.auth.hideLoader();
                this.messageNotifier('error', '', err.error.message);
                this.closeCourseLevelAttendance();
            });
        }
        getDisability(s) {
            if (s.dateLi[0].status == "L" && s.dateLi[0].isStatusModified == "N") {
                return true;
            }
            else {
                return false;
            }
        }
        markAttendaceBtnClickCourse(event, rowData, index) {
            document.getElementById('leaveBtnCourse' + rowData.student_id).classList.remove('classLeaveBtn');
            document.getElementById('absentBtnCourse' + rowData.student_id).classList.remove('classAbsentBtn');
            document.getElementById('presentBtnCourse' + rowData.student_id).classList.remove('classPresentBtn');
            if (event.target.innerText == "L") {
                document.getElementById('leaveBtnCourse' + rowData.student_id).classList.add('classLeaveBtn');
                this.studentList[index].dateLi[0].status = "L";
                this.studentList[index].dateLi[0].isStatusModified = "Y";
            }
            else if (event.target.innerText == "A") {
                document.getElementById('absentBtnCourse' + rowData.student_id).classList.add('classAbsentBtn');
                this.studentList[index].dateLi[0].status = "A";
                this.studentList[index].dateLi[0].isStatusModified = "Y";
            }
            else {
                document.getElementById('presentBtnCourse' + rowData.student_id).classList.add('classPresentBtn');
                this.studentList[index].dateLi[0].status = "P";
                this.studentList[index].dateLi[0].isStatusModified = "Y";
            }
            this.getTotalCountForCourse(this.studentList);
        }
        getTotalCountForCourse(data) {
            this.absentCount = 0;
            this.presentCount = 0;
            this.leaveCount = 0;
            for (let i = 0; i < data.length; i++) {
                if (data[i].dateLi[0].status == "P") {
                    this.presentCount++;
                }
                else if (data[i].dateLi[0].status == "A") {
                    this.absentCount++;
                }
                else {
                    this.leaveCount++;
                }
            }
        }
        getClassForLeave(data) {
            if (data.dateLi[0].status == "L") {
                return "classLeaveBtn";
            }
            else {
                return "";
            }
        }
        getClassForAbsent(data) {
            if (data.dateLi[0].status == "A") {
                return "classAbsentBtn";
            }
            else {
                return "";
            }
        }
        getClassForPresent(data) {
            if (data.dateLi[0].status == "P") {
                return "classPresentBtn";
            }
            else {
                return "";
            }
        }
        closeCourseLevelAttendance() {
            this.markAttendancePopUp = false;
            this.studentList = [];
            this.absentCount = 0;
            this.presentCount = 0;
            this.leaveCount = 0;
            this.attendanceNote = "";
            this.smsAbsenteesChkbx = false;
            this.markAttendanceData = "";
        }
        markAllPresent(e) {
            if (e.target.checked) {
                this.studentList.forEach(e => {
                    if (e.dateLi[0].status == "L" && e.dateLi[0].isStatusModified == "N") {
                        //Do Nothing
                    }
                    else {
                        document.getElementById('leaveBtnCourse' + e.student_id).classList.remove('classLeaveBtn');
                        document.getElementById('absentBtnCourse' + e.student_id).classList.remove('classAbsentBtn');
                        document.getElementById('presentBtnCourse' + e.student_id).classList.remove('classPresentBtn');
                        document.getElementById('presentBtnCourse' + e.student_id).classList.add('classPresentBtn');
                        e.dateLi[0].status = "P";
                        e.dateLi[0].isStatusModified = "Y";
                    }
                });
            }
            else {
                this.studentList.forEach(e => {
                    if (e.dateLi[0].status == "L" && e.dateLi[0].isStatusModified == "N") {
                        //Do Nothing
                    }
                    else {
                        document.getElementById('leaveBtnCourse' + e.student_id).classList.remove('classLeaveBtn');
                        document.getElementById('absentBtnCourse' + e.student_id).classList.remove('classAbsentBtn');
                        document.getElementById('presentBtnCourse' + e.student_id).classList.remove('classPresentBtn');
                        e.dateLi[0].status = "A";
                        e.dateLi[0].isStatusModified = "Y";
                    }
                });
            }
            this.getTotalCountForCourse(this.studentList);
        }
        checkCheckAllChkboxStatus() {
            let check = false;
            for (let i = 0; i < this.studentList.length; i++) {
                if (this.studentList[i].dateLi[0].status == "P") {
                    check = true;
                }
                else {
                    check = false;
                    break;
                }
            }
            return check;
        }
        updateCourseAttendance() {
            this.auth.showLoader();
            let dataToSend = this.makeJsonForAttendceMark();
            this.apiService.markAttendance(dataToSend).subscribe(res => {
                this.auth.hideLoader();
                this.messageNotifier('success', 'Attendance Marked', 'Attendance Marked Successfully');
                this.closeCourseLevelAttendance();
            }, err => {
                this.auth.hideLoader();
                //console.log(err);
                this.messageNotifier('error', '', err.error.message);
            });
        }
        makeJsonForAttendceMark() {
            let notify = "";
            if (this.smsAbsenteesChkbx) {
                notify = "Y";
            }
            else {
                notify = "N";
            }
            let obj = [];
            for (let i = 0; i < this.studentList.length; i++) {
                let test = {};
                test.batch_id = this.batchData.batch_id;
                test.isNotify = notify;
                test.student_id = this.studentList[i].student_id;
                test.dateLi = [{
                        date: this.studentList[i].dateLi[0].date,
                        status: this.studentList[i].dateLi[0].status,
                        isStatusModified: this.studentList[i].dateLi[0].isStatusModified,
                        attendance_note: this.attendanceNote,
                        schId: this.studentList[i].dateLi[0].schId.toString()
                    }];
                obj.push(test);
            }
            return obj;
        }
        // Cancel table Action///////
        notifyCancelClass(data) {
            if (confirm('Are you sure, You want to notify?')) {
                let obj = {
                    batch_id: this.batchData.batch_id,
                    class_schedule_id: data.schd_id,
                    is_exam_schedule: 'Y'
                };
                this.apiService.notifyCancelledClass(obj).subscribe(res => {
                    this.messageNotifier('success', 'Success', 'Notified Successfully');
                }, err => {
                    //console.log(err);
                    this.messageNotifier('error', '', err.error.message);
                });
            }
        }
        unCancelClass(data) {
            if (confirm("Are you sure, you want  to uncancel the exam schedule??")) {
                let obj = {
                    batch_id: this.batchData.batch_id,
                    cancelSchd: [{
                            schd_id: data.schd_id
                        }]
                };
                this.apiService.uncancelClassSchedule(obj).subscribe(res => {
                    this.messageNotifier('success', 'Uncancelled Succesfully', 'Exam Uncancelled Successfully');
                    this.batchModelGoClick();
                }, err => {
                    //console.log(err);
                    this.messageNotifier('error', '', err.error.message);
                });
            }
        }
        ////////// Course Model
        getMasterCourseList() {
            this.auth.showLoader();
            this.apiService.getMasterCourse().subscribe(res => {
                this.auth.hideLoader();
                this.masterCourseList = res;
            }, err => {
                console.log(err);
                this.auth.hideLoader();
            });
        }
        getMasterCourse() {
            let url = "/api/v1/courseMaster/master-course-list/" + this.institute_id + '?is_active_not_expire=Y&sorted_by=course_name';
            let keys;
            this.auth.showLoader();
            this._http.getData(url).subscribe((data) => {
                this.auth.hideLoader();
                this.fullResponse = data.result;
                keys = Object.keys(data.result);
                console.log("keys", keys);
                for (let i = 0; i < keys.length; i++) {
                    this.masterCourseList.push(keys[i]);
                }
            }, (error) => {
                this.auth.hideLoader();
                console.log(error);
            });
        }
        getCourseList(event) {
            this.courseList = [];
            let temp = this.fullResponse[this.courseData.master_course];
            for (let i = 0; i < temp.length; i++) {
                this.courseList.push(temp[i]);
            }
            // this.courseData.course_id = -1;
            // if (event != -1) {
            //   this.auth.showLoader();
            //   this.apiService.fetchCourseListData(this.courseData.master_course).subscribe(
            //     res => {
            //       this.auth.hideLoader();
            //       this.courseList = res;
            //     },
            //     err => {
            //       console.log(err);
            //       this.auth.hideLoader();
            //     }
            //   )
            // }
        }
        displayCourseDate() {
            console.log(this.courseData.course_id);
            this.showCourseStartEndDate = true;
            for (let i = 0; i < this.courseList.length; i++) {
                if (this.courseList[i].course_id == this.courseData.course_id) {
                    this.batchStartDate = this.courseList[i].start_date;
                    this.batchEndDate = this.courseList[i].end_date;
                }
            }
        }
        validateDateRange() {
            let selectedCourse = {};
            let check = true;
            if (this.courseList.length > 0) {
                selectedCourse = this.courseList.filter(el => el.course_id == this.courseData.course_id);
                let requested_date = this.courseData.requested_date;
                if (moment__WEBPACK_IMPORTED_MODULE_1__(selectedCourse[0].start_date).format('YYYY-MM-DD') <= moment__WEBPACK_IMPORTED_MODULE_1__(requested_date).format('YYYY-MM-DD') && moment__WEBPACK_IMPORTED_MODULE_1__(requested_date).format('YYYY-MM-DD') <= moment__WEBPACK_IMPORTED_MODULE_1__(selectedCourse[0].end_date).format('YYYY-MM-DD')) {
                    check = true;
                }
                else {
                    this.messageNotifier('error', 'Date Out Of Range', 'You have selected date out of course start date ' + selectedCourse[0].start_date + " and course end date " + selectedCourse[0].end_date);
                    check = false;
                }
            }
            return check;
        }
        getExamSchedule() {
            if (this.courseData.master_course != "" && this.courseData.course_id != -1) {
                if (!this.validateDateRange()) {
                    this.showContentSection = false;
                    return false;
                }
                this.clearAllField();
                this.auth.showLoader();
                this.courseData.requested_date = moment__WEBPACK_IMPORTED_MODULE_1__(this.courseData.requested_date).format('YYYY-MM-DD');
                this.apiService.getSchedule(this.courseData).subscribe((res) => {
                    // this.courseData.requested_date = moment(this.examScheduleData.requested_date).format('YYYY-MM-DD');
                    this.auth.hideLoader();
                    this.multiClickDisabled = false;
                    this.examScheduleData = res;
                    this.calculateDataAsPerSelection(res);
                    // console.log(this.subjectListData);
                    this.showContentSection = true;
                    //console.log(res);
                }, err => {
                    this.auth.hideLoader();
                    //console.log(err);
                    this.messageNotifier('error', '', err.error.message);
                });
            }
            else {
                this.messageNotifier('error', '', 'Please Provide Mandatory Fields');
            }
        }
        subjectChanged() {
            this.checkedKeys = [];
            this.changeColor = false;
            this.topicsName = [];
        }
        calculateDataAsPerSelection(result) {
            this.subjectListData = [];
            this.viewList = [];
            if (result != null) {
                if (result.coursesList.length > 0) {
                    for (let i = 0; i < result.coursesList.length; i++) {
                        // if(result.coursesList[i].courseClassSchdList != null && result.coursesList[i].courseClassSchdList.length > 0){
                        if (this.courseData.course_id == result.coursesList[i].course_id) {
                            this.subjectListData.push(result.coursesList[i].batchesList);
                            let obj = {};
                            obj.selectedCourseList = result.coursesList[i];
                            obj.subjectList = result.coursesList[i].batchesList;
                            obj.courseModelAdder = {
                                start_time: {
                                    hour: "12 PM",
                                    minute: '00'
                                },
                                end_time: {
                                    hour: "1 PM",
                                    minute: "00"
                                },
                                total_marks: "",
                                exam_desc: "",
                                room_no: ""
                            };
                            obj.coursetableAdder = {
                                batch_id: -1,
                                total_marks: ""
                            };
                            if (result.coursesList[i].courseClassSchdList != null && result.coursesList[i].courseClassSchdList.length > 0) {
                                obj.courseTableList = result.coursesList[i].courseClassSchdList;
                                obj.courseModelAdder.start_time = this.breakTimeFormat(result.coursesList[i].courseClassSchdList[0].start_time);
                                obj.courseModelAdder.end_time = this.breakTimeFormat(result.coursesList[i].courseClassSchdList[0].end_time);
                                obj.courseModelAdder.exam_desc = result.coursesList[i].courseClassSchdList[0].class_desc;
                                obj.courseModelAdder.room_no = result.coursesList[i].courseClassSchdList[0].room_no;
                                obj.courseModelAdder.total_marks = 0;
                                result.coursesList[i].courseClassSchdList.forEach(element => {
                                    obj.courseModelAdder.total_marks += Number(element.total_marks);
                                });
                            } //end if
                            else {
                                obj.courseTableList = [];
                            }
                            this.viewList.push(obj);
                        }
                    }
                }
            }
        }
        /**
         * check negative value
         */
        checkNgetiveValue($event) {
            // console.log($event);
            if ($event < 0) {
                this.messageNotifier('error', '', 'Negative mark not allowed');
            }
        }
        topicLinking(subjectData, index) {
            let subject_id;
            for (let i = 0; i < subjectData.length; i++) {
                if (this.viewList[index].coursetableAdder.batch_id == subjectData[i].batch_id) {
                    subject_id = subjectData[i].subject_id;
                }
            }
            if (subject_id == '' || subject_id == null || subject_id == '-1' || subject_id == undefined) {
                this.messageNotifier('error', '', 'Please Select Subject');
                return;
            }
            else {
                this.auth.showLoader();
                this.topicService.getAllTopicsSubTopics(subject_id).subscribe(res => {
                    this.topicLinkColor = true;
                    let temp;
                    temp = res;
                    if (temp != null && temp.length != 0) {
                        this.topicBox = false;
                        this.auth.hideLoader();
                        this.topicsData = res;
                        let subjectName = "";
                        subjectData.forEach(ele => {
                            if (ele.subject_id == this.subject_id) {
                                subjectName = ele.subject_name;
                            }
                        });
                        document.getElementById("topicSubName").innerHTML = subjectName;
                        document.getElementById("topicCount").innerHTML = this.topicsData.length;
                        this.children = (dataItem) => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(dataItem.subTopic);
                        this.hasChildren = (item) => item.subTopic && item.subTopic.length > 0;
                    }
                    else {
                        this.auth.hideLoader();
                        this.messageNotifier('info', 'Info', 'No topics available to Link');
                    }
                }, err => {
                    this.auth.hideLoader();
                    this.messageNotifier('error', '', err.error.message);
                });
            }
        }
        topicLinkingForPreSelectedTopics(subjectData) {
            if (this.row_edit_subject_id == '' || this.row_edit_subject_id == null || this.row_edit_subject_id == '-1' || this.row_edit_subject_id == undefined) {
                this.messageNotifier('error', '', 'Please Select Subject');
                return;
            }
            else {
                this.auth.showLoader();
                this.topicService.getAllTopicsSubTopics(this.row_edit_subject_id).subscribe(res => {
                    this.checkedKeys = [];
                    let temp;
                    temp = res;
                    if (temp != null && temp.length != 0) {
                        this.topicBox = false;
                        this.auth.hideLoader();
                        this.topicsData = res;
                        let subjectName = "";
                        let tempCheckedKeys;
                        let data = this.row_edit_subject_topicId.toString();
                        if (data != undefined && data.includes("|")) {
                            tempCheckedKeys = data.split("|");
                        }
                        else {
                            tempCheckedKeys = data.split(" ");
                        }
                        tempCheckedKeys.forEach((value) => {
                            if (value != " " || value != "0") {
                                this.checkedKeys.push(Number(value));
                            }
                        });
                        subjectData.forEach(ele => {
                            if (ele.subject_id == this.row_edit_subject_id) {
                                subjectName = ele.subject_name;
                            }
                        });
                        this.subject_name = subjectName;
                        this.children = (dataItem) => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(dataItem.subTopic);
                        this.hasChildren = (item) => item.subTopic && item.subTopic.length > 0;
                    }
                    else {
                        this.auth.hideLoader();
                        this.messageNotifier('info', 'Info', 'No topics available to Link');
                    }
                }, err => {
                    this.auth.hideLoader();
                    this.messageNotifier('error', '', err.error.message);
                });
            }
        }
        topicListing() {
            if (this.subject_id == '' || this.subject_id == null || this.subject_id == '-1' || this.subject_id == undefined) {
                this.messageNotifier('error', '', 'Please Select Subject');
                return;
            }
            else {
                this.auth.showLoader();
                this.topicService.getAllTopicsSubTopics(this.subject_id).subscribe(res => {
                    let temp;
                    temp = res;
                    if (temp != null && temp.length != 0) {
                        this.topicBox = false;
                        this.auth.hideLoader();
                        this.topicsData = res;
                        let subjectName = "";
                        this.subjectListData[0].forEach(ele => {
                            if (this.subject_id == ele.subject_id) {
                                this.subject_name = ele.subject_name;
                            }
                        });
                        this.children = (dataItem) => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(dataItem.subTopic);
                        this.hasChildren = (item) => item.subTopic && item.subTopic.length > 0;
                    }
                    else {
                        this.auth.hideLoader();
                        this.messageNotifier('info', 'Info', 'No topics available to Link');
                    }
                }, err => {
                    this.auth.hideLoader();
                    this.messageNotifier('error', '', err.error.message);
                });
            }
        }
        handleChecking(itemLookup) {
            let subTopic = itemLookup.item.dataItem.subTopic;
            let arrayIndex = this.checkedKeys.indexOf(itemLookup.item.dataItem.topicId);
            if (arrayIndex > -1) {
                // this.checkedKeys.splice(arrayIndex, 1);
                let subTopic = itemLookup.item.dataItem.subTopic;
                subTopic.length ? this.removeNLevelTopic(subTopic) : '';
            }
            else {
                // this.checkedKeys.push(itemLookup.item.dataItem.topicId);
                if (subTopic.length)
                    this.AddNLevelTopic(subTopic);
            }
            this.cd.markForCheck();
        }
        removeNLevelTopic(subTopics) {
            if (subTopics.length == 0) {
                let arrayIndex = this.checkedKeys.indexOf(subTopics.topicId);
                this.checkedKeys.splice(arrayIndex, 1);
                return;
            }
            else {
                subTopics.forEach((object) => {
                    let arrayIndex = this.checkedKeys.indexOf(object.topicId);
                    if (arrayIndex > -1) {
                        this.checkedKeys.splice(arrayIndex, 1);
                    }
                    if (object.subTopic.length) {
                        this.removeNLevelTopic(object.subTopic);
                    }
                });
            }
            this.cd.markForCheck();
        }
        AddNLevelTopic(subTopics) {
            if (subTopics.length == 0) {
                this.checkedKeys.push(subTopics.topicId);
                return;
            }
            else {
                subTopics.forEach((object) => {
                    let arrayIndex = this.checkedKeys.indexOf(object.topicId);
                    if (arrayIndex == -1) {
                        this.checkedKeys.push(object.topicId);
                    }
                    if (object.subTopic.length) {
                        this.AddNLevelTopic(object.subTopic);
                    }
                });
            }
        }
        preSelectedTopicListing() {
            if (this.edit_subject_id == '' || this.edit_subject_id == null || this.edit_subject_id == '-1' || this.edit_subject_id == undefined) {
                this.messageNotifier('error', '', 'Please Select Subject');
                return;
            }
            else {
                this.auth.showLoader();
                this.topicService.getAllTopicsSubTopics(this.edit_subject_id).subscribe(res => {
                    let temp;
                    temp = res;
                    if (temp != null && temp.length != 0) {
                        this.topicBox = false;
                        this.auth.hideLoader();
                        this.topicsData = res;
                        this.checkedKeys = this.edit_subject_topicId;
                        this.subjectListDataSource.forEach(ele => {
                            if (ele.subject_id == this.subject_id) {
                                this.subject_name = ele.subject_name;
                            }
                        });
                        this.children = (dataItem) => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(dataItem.subTopic);
                        this.hasChildren = (item) => item.subTopic && item.subTopic.length > 0;
                    }
                    else {
                        this.auth.hideLoader();
                        this.messageNotifier('info', 'Info', 'No topics available to Link');
                    }
                }, err => {
                    this.auth.hideLoader();
                    this.messageNotifier('error', '', err.error.message);
                });
            }
        }
        saveTopic() {
            let temp = this.checkedKeys;
            this.topicsName = [];
            let join = temp.join("|");
            let tempTopicData = this.topicsData;
            this.checkedKeys.forEach(ele => {
                this.findNameInJSON(this.topicsData, ele);
            });
            for (var i = 0; i < this.topicsName.length; i++) {
                if (this.topicsName[i] == undefined) {
                    this.topicsName.splice(i, 1);
                }
            }
            if (this.row_edit_subject_id) {
                this.row_edit_subject_topicId = this.checkedKeys;
                let joinedArr = this.row_edit_subject_topicId.join(",").toString();
                let x = joinedArr.replace(/,/g, "|");
                let y = x.split("|");
                this.row_edit_subject_topicId = y;
            }
            console.log(this.topicsName);
            this.topicBox = true;
            if (this.topicLinkColor) {
                this.changeColor = true;
            }
        }
        findNameInJSON(arr, nameVal) {
            for (var i = 0; i < arr.length; i++) {
                var item = arr[i];
                if (item.topicId.toString() == nameVal.toString()) {
                    this.topicsName.push(item.topicName);
                }
                if (item.subTopic.length > 0) {
                    this.findNameInJSON(item.subTopic, nameVal);
                }
            }
        }
        closeAlert() {
            this.topicBox = true;
            this.topicLinkColor = false;
            this.changeColor = false;
        }
        addNewExamSubject() {
            if (this.schoolModel) {
                if (this.newExamSubjectData.length >= 1) {
                    this.messageNotifier('error', '', 'You can not add multiple subject!');
                    return;
                }
                if (this.selectedExamTypeId == null || this.selectedExamTypeId == '-1') {
                    this.messageNotifier('error', '', 'Please select exam type!');
                    return;
                }
            }
            if (this.newExamData.startTimeHrs == this.newExamData.endTimeHrs
                && this.newExamData.startTimeMins == this.newExamData.endTimeMins) {
                this.messageNotifier('error', '', 'Exam start time and end time cannot be same!');
                return;
            }
            if (this.subject_id == null || this.subject_id == '') {
                this.messageNotifier('error', '', 'No subject(s) added!');
                return;
            }
            if (this.exam_marks == '' || this.exam_marks == null) {
                this.messageNotifier('error', '', 'Please provide marks!');
                return;
            }
            for (let i = 0; i < this.newExamSubjectData.length; i++) {
                if (this.newExamSubjectData[i].subject_id == this.subject_id) {
                    this.messageNotifier('error', '', 'Selected subject already added!');
                    return;
                }
            }
            let subjectName = "";
            let is_optional_subject = false;
            this.subjectListData[0].forEach(ele => {
                if (this.subject_id == ele.subject_id) {
                    subjectName = ele.subject_name;
                    if (this.schoolModel)
                        is_optional_subject = ele.is_optional_subject;
                }
            });
            let topic_names = this.topicsName.join(", ");
            let obj = {};
            obj.subject_id = this.subject_id;
            obj.subject_name = subjectName;
            obj.exam_marks = this.exam_marks;
            obj.subject_topics = topic_names;
            obj.topicsId = this.checkedKeys;
            obj.exam_desc = this.exam_desc;
            obj.exam_room_no = this.exam_room_no;
            if (this.schoolModel) {
                let examTypeArr = this.selectedExamTypeId.split(',');
                obj.exam_type = examTypeArr[1];
                obj.exam_type_id = examTypeArr[0];
                obj.is_optional_subject = is_optional_subject;
            }
            this.newExamSubjectData.push(obj);
            this.calculateTotalMarks();
            this.clearField();
            this.subject_topics = [];
        }
        calculateTotalMarks() {
            this.total_marks_to_show = 0;
            for (let i = 0; i < this.newExamSubjectData.length; i++) {
                this.total_marks_to_show += this.newExamSubjectData[i].exam_marks;
            }
        }
        clearField() {
            this.subject_id = '';
            this.subject_name = '';
            this.exam_marks = '';
            this.subject_topics = [];
            this.exam_desc = '';
            this.exam_room_no = '';
            this.checkedKeys = [];
            this.topicsName = [];
            this.selectedExamTypeId = "-1";
        }
        addNewExamSubjectCourse(index) {
            if (this.schoolModel) {
                if (this.viewList[index].courseTableList.length >= 1) {
                    this.messageNotifier('error', '', 'You can not add multiple subject!');
                    return;
                }
                if (this.selectedExamTypeId == null || this.selectedExamTypeId == '-1') {
                    this.messageNotifier('error', '', 'Please select exam type!');
                    return;
                }
            }
            if (this.viewList[index].coursetableAdder.batch_id == -1) {
                this.messageNotifier('error', '', 'No subject(s) added!');
                return;
            }
            ;
            if (this.viewList[index].selectedCourseList.is_exam_grad_feature == '0') {
                if (this.viewList[index].coursetableAdder.total_marks == 0) {
                    this.messageNotifier('error', '', 'Please Provide Marks');
                    return;
                }
            }
            let selectedSubjectDemo = this.getSubjectName(this.viewList[index].subjectList, this.viewList[index].coursetableAdder.batch_id);
            for (let i = 0; i < this.viewList[index].courseTableList.length; i++) {
                if (this.viewList[index].courseTableList[i].subject_name == selectedSubjectDemo.subject_name) {
                    this.messageNotifier('error', '', 'Selected subject already added!');
                    return;
                }
            }
            let topic_names = this.topicsName.join(", ");
            let obj = {};
            obj.total_marks = this.viewList[index].coursetableAdder.total_marks;
            obj.class_schedule_id = '0';
            let selectedSubject = this.getSubjectName(this.viewList[index].subjectList, this.viewList[index].coursetableAdder.batch_id);
            obj.subject_name = selectedSubject.subject_name;
            obj.batch_id = this.viewList[index].coursetableAdder.batch_id;
            obj.otherData = selectedSubject;
            obj.topicName = topic_names;
            obj.topics_covered = this.checkedKeys;
            obj.class_desc = this.viewList[index].coursetableAdder.exam_desc;
            obj.room_no = this.viewList[index].coursetableAdder.room_no;
            this.viewList[index].courseTableList.push(obj);
            this.viewList[index].courseModelAdder.total_marks += this.viewList[index].coursetableAdder.total_marks;
            this.viewList[index].coursetableAdder = {
                batch_id: -1,
                total_marks: 0
            };
            this.topicLinkColor = false;
            this.changeColor = false;
        }
        getSubjectName(data, id) {
            for (let i = 0; i < data.length; i++) {
                if (data[i].batch_id == id) {
                    return data[i];
                }
            }
        }
        deleteSubject(subject_id) {
            for (let i = 0; i < this.newExamSubjectData.length; i++) {
                if (this.newExamSubjectData[i].subject_id == subject_id) {
                    this.newExamSubjectData.splice(i, 1);
                }
            }
            this.messageNotifier('success', 'Success', 'Scheduled exam deleted successfully');
        }
        deleteFromCourse(data, index, j) {
            if (this.viewList[j].courseTableList.length == 1) {
                this.messageNotifier('error', '', "Subject can't be deleted from the scheduled exam since only one subject is left!");
                return;
            }
            else {
                this.viewList[j].courseTableList.splice(index, 1);
                this.messageNotifier('success', 'Success', 'Scheduled exam deleted successfully');
            }
            let total = 0;
            for (let i = 0; i < this.viewList[j].courseTableList.length; i++) {
                total += this.viewList[j].courseTableList[i].total_marks;
            }
            this.viewList[j].courseModelAdder.total_marks = total;
        }
        editFromCourse(data, index, j) {
            if (this.selectedRow !== "") {
                if (this.edit_subject_id) {
                    document.getElementById(("row" + this.selectedRow).toString()).classList.add('displayComp');
                    document.getElementById(("row" + this.selectedRow).toString()).classList.remove('editComp');
                }
                else {
                    document.getElementById(("row_already" + this.selectedRow).toString()).classList.add('displayComp');
                    document.getElementById(("row_already" + this.selectedRow).toString()).classList.remove('editComp');
                }
            }
            this.selectedRow = index + "_" + j;
            document.getElementById(("row_already" + index + "_" + j).toString()).classList.remove('displayComp');
            document.getElementById(("row_already" + index + "_" + j).toString()).classList.add('editComp');
            let subject_id;
            if (data.otherData) {
                subject_id = data.otherData.subject_id;
            }
            else {
                subject_id = data.subject_id;
            }
            this.row_edit_subject_id = subject_id;
            this.row_edit_subject_name = data.subject_name;
            this.row_edit_exam_marks = data.total_marks;
            this.row_edit_subject_topics = data.topicName;
            this.row_edit_subject_topicId = data.topics_covered;
            this.row_edit_exam_desc = data.class_desc;
            this.row_edit_exam_room_no = data.room_no;
            //
            let temp;
            if (data.topics_covered != undefined) {
                if (data.topics_covered.includes("|")) {
                    temp = data.topics_covered.replace("|", ",");
                }
                else {
                    temp = data.topics_covered;
                }
                this.checkedKeys = temp;
                this.topicsName = data.topicName;
            }
        }
        updateEditedSubject(row, index, j) {
            if (this.row_edit_exam_marks == '' || this.row_edit_exam_marks == null) {
                this.messageNotifier('error', '', 'Please Provide Marks');
                return;
            }
            let subjectName = "";
            this.viewList[j].subjectList.forEach(ele => {
                if (this.row_edit_subject_id == ele.subject_id) {
                    subjectName = ele.subject_name;
                }
            });
            // let topic_names = this.topicsName.join(",");
            let topic_names = this.topicsName;
            let topics_covered_ids = this.row_edit_subject_topicId;
            if (Array.isArray(this.row_edit_subject_topicId)) {
                let y = this.row_edit_subject_topicId.join("|");
                topics_covered_ids = y.replace(/,/g, "|");
            }
            this.viewList[j].courseTableList[index].subject_id = this.row_edit_subject_id;
            this.viewList[j].courseTableList[index].subject_name = subjectName;
            this.viewList[j].courseTableList[index].total_marks = this.row_edit_exam_marks;
            this.viewList[j].courseTableList[index].topicName = topic_names;
            this.viewList[j].courseTableList[index].topics_covered = topics_covered_ids;
            this.viewList[j].courseTableList[index].class_desc = this.row_edit_exam_desc;
            this.viewList[j].courseTableList[index].room_no = this.row_edit_exam_room_no;
            this.row_edit_subject_id = '';
            this.row_edit_subject_name = '';
            this.row_edit_exam_marks = '';
            this.row_edit_subject_topics = '';
            this.row_edit_subject_topicId = [];
            this.row_edit_exam_desc = '';
            this.row_edit_exam_room_no = '';
            let total = 0;
            for (let i = 0; i < this.viewList[j].courseTableList.length; i++) {
                total += this.viewList[j].courseTableList[i].total_marks;
            }
            this.viewList[j].courseModelAdder.total_marks = total;
            this.checkedKeys = [];
            this.topicsName = [];
            document.getElementById(("row_already" + index + "_" + j).toString()).classList.remove('editComp');
            document.getElementById(("row_already" + index + "_" + j).toString()).classList.add('displayComp');
            this.selectedRow = "";
        }
        saveExamScheduleCourse() {
            this.multiClickDisabled = true;
            this.auth.showLoader();
            let dataToSend = this.makeDataJsonToSendServer();
            if (dataToSend == false || dataToSend == undefined) {
                this.auth.hideLoader();
                this.multiClickDisabled = false;
                return;
            }
            if (dataToSend.coursesList.length > 0) {
                let flag = false;
                dataToSend.coursesList.forEach((object, index) => {
                    if (object) {
                        if (object.courseClassSchdList.length) {
                            flag = true;
                        }
                        else {
                            object.exam_start_time = null;
                            object.exam_end_time = null;
                        }
                    }
                    else {
                        dataToSend.coursesList.splice(index, 1);
                    }
                });
                if (flag) {
                    this.apiService.updateExamSch(dataToSend).subscribe((res) => {
                        this.auth.hideLoader();
                        if (res.statusCode == 200) {
                            this.messageNotifier('success', 'Success', 'Exam scheduled successfully');
                            this.clearAllField();
                            this.getExamSchedule();
                        }
                        else {
                            this.messageNotifier('error', '', res.message);
                        }
                    }, err => {
                        this.auth.hideLoader();
                        this.multiClickDisabled = false;
                        console.log(err);
                        this.messageNotifier('error', '', err.error.message);
                    });
                }
            }
            else {
                this.multiClickDisabled = false;
                this.auth.hideLoader();
                this.messageNotifier('error', '', 'Required fields not mentioned!');
            }
        }
        makeDataJsonToSendServer() {
            let coursesLists = [];
            /// This section makes json for perticular selected course
            let data = {};
            let total = 0;
            data.master_course = this.courseData.master_course;
            data.requested_date = moment__WEBPACK_IMPORTED_MODULE_1__(this.courseData.requested_date).format('YYYY-MM-DD');
            data.coursesList = [];
            // FOR ALREADY PRESENT EXAM
            let validation_flag = false;
            for (let p = 0; p < this.viewList.length; p++) {
                if (this.viewList[p].courseTableList.length > 0) {
                    validation_flag = true;
                }
            }
            if (validation_flag) {
                for (let i = 0; i < this.viewList.length; i++) {
                    let test = {};
                    test.course_id = this.viewList[i].selectedCourseList.course_id;
                    test.course_exam_schedule_id = this.viewList[i].selectedCourseList.course_exam_schedule_id;
                    let check = this.validateTime(this.viewList[i].courseModelAdder.start_time, this.viewList[i].courseModelAdder.end_time);
                    if (check == false) {
                        return;
                    }
                    let startTime = this.createTimeInFormat(this.viewList[i].courseModelAdder.start_time.hour, this.viewList[i].courseModelAdder.start_time.minute, '');
                    let endTime = this.createTimeInFormat(this.viewList[i].courseModelAdder.end_time.hour, this.viewList[i].courseModelAdder.end_time.minute, '');
                    test.exam_start_time = startTime;
                    test.exam_end_time = endTime;
                    test.courseClassSchdList = [];
                    for (let j = 0; j < this.viewList[i].courseTableList.length; j++) {
                        let classLi = {};
                        if (this.viewList[i].courseTableList[j].total_marks == undefined) {
                            this.messageNotifier('error', '', 'please enter total marks');
                            return false;
                        }
                        let topics = this.viewList[i].courseTableList[j].topics_covered;
                        classLi.batch_id = this.viewList[i].courseTableList[j].batch_id.toString();
                        classLi.start_time = startTime;
                        classLi.end_time = endTime;
                        classLi.class_desc = this.viewList[i].courseTableList[j].class_desc;
                        classLi.duration = check;
                        classLi.total_marks = this.viewList[i].courseTableList[j].total_marks.toString();
                        if (topics && topics.includes(",")) {
                            classLi.topics_covered = topics.replace(/,/g, "|");
                        }
                        else {
                            if (typeof topics != 'string') {
                                classLi.topics_covered = topics ? (topics.length == 0 ? "" : topics.join("|")) : "";
                            }
                            else {
                                classLi.topics_covered = topics;
                            }
                        }
                        classLi.room_no = this.viewList[i].courseTableList[j].room_no;
                        classLi.class_schedule_id = this.viewList[i].courseTableList[j].class_schedule_id.toString();
                        ;
                        if (this.schoolModel) {
                            classLi.exam_type_id = this.viewList[i].courseTableList[j].exam_type_id;
                            classLi.is_optional_subject = this.viewList[i].courseTableList[j].is_optional_subject;
                        }
                        total += Number(this.viewList[i].courseTableList[j].total_marks);
                        test.courseClassSchdList.push(classLi);
                    }
                    if (total != this.viewList[i].courseModelAdder.total_marks) {
                        this.messageNotifier('error', '', 'Please check total marks provided');
                        return false;
                    }
                    total = 0;
                    coursesLists.push(test);
                    if (this.newExamSubjectData.length == 0) {
                        data.coursesList.push(test);
                    }
                }
            }
            // FOR NEWLY ADDED EXAM
            if (this.newExamSubjectData.length > 0) {
                // for (let i = 0; i < this.newExamSubjectData.length; i++) {
                let test = { course_id: '', course_exam_schedule_id: '-1' };
                if (this.viewList.length > 0) {
                    test.course_id = this.viewList[0].selectedCourseList.course_id;
                }
                let check = this.validateTime2();
                if (check == false) {
                    return;
                }
                let startTime = this.createTimeInFormat(this.newExamData.startTimeHrs, this.newExamData.startTimeMins, '');
                let endTime = this.createTimeInFormat(this.newExamData.endTimeHrs, this.newExamData.endTimeMins, '');
                test.exam_start_time = startTime;
                test.exam_end_time = endTime;
                test.courseClassSchdList = [];
                if (this.newExamSubjectData.length > 0) {
                    for (let j = 0; j < this.newExamSubjectData.length; j++) {
                        let classLi = {};
                        let bactch_id = "";
                        for (let k = 0; k < this.subjectListData[0].length; k++) {
                            if (this.newExamSubjectData[j].subject_id == this.subjectListData[0][k].subject_id) {
                                bactch_id = this.subjectListData[0][k].batch_id;
                            }
                        }
                        classLi.batch_id = bactch_id.toString();
                        ;
                        classLi.start_time = startTime;
                        classLi.end_time = endTime;
                        classLi.class_desc = this.newExamSubjectData[j].exam_desc;
                        classLi.duration = check;
                        classLi.topics_covered = this.newExamSubjectData[j].topicsId.join("|");
                        classLi.total_marks = this.newExamSubjectData[j].exam_marks.toString();
                        classLi.room_no = this.newExamSubjectData[j].exam_room_no;
                        classLi.class_schedule_id = "0";
                        if (this.schoolModel) {
                            classLi.exam_type_id = this.newExamSubjectData[j].exam_type_id;
                            classLi.is_optional_subject = this.newExamSubjectData[j].is_optional_subject;
                        }
                        total += Number(this.newExamSubjectData[j].exam_marks.toString());
                        test.courseClassSchdList.push(classLi);
                    }
                    // if (total != this.viewList[i].courseModelAdder.total_marks) {
                    //   this.messageNotifier('error', '', 'Please check total marks provided');
                    //   return false;
                    // }
                }
                total = 0;
                data.coursesList.push(test);
                if (validation_flag) {
                    for (let m = 0; m < coursesLists.length; m++) {
                        let isPush = false;
                        console.log(coursesLists[m]);
                        this.examScheduleData.coursesList.forEach((object, index) => {
                            if (object.course_exam_schedule_id == coursesLists[m].course_exam_schedule_id) {
                                isPush = true;
                                ;
                            }
                        });
                        if (isPush) {
                            coursesLists[m] && coursesLists[m].courseClassSchdList.length != 0 ? data.coursesList.push(coursesLists[m]) : '';
                        }
                    }
                }
                // }
            }
            /// This section makes json for unselected course
            if (this.examScheduleData.coursesList.length > 0) {
                let startIndex = 0;
                for (let i = 0; i < this.examScheduleData.coursesList.length; i++) {
                    if (this.examScheduleData.coursesList[i].course_id != this.courseData.course_id) {
                        let unselected = {};
                        let timeStart = null;
                        let timeEnd = null;
                        unselected.course_id = this.examScheduleData.coursesList[i].course_id.toString();
                        unselected.courseClassSchdList = [];
                        unselected.course_exam_schedule_id = 0;
                        if (this.examScheduleData.coursesList[i].courseClassSchdList != null) {
                            let courseSch = this.examScheduleData.coursesList[i].courseClassSchdList;
                            if (courseSch.length > 0) {
                                for (let j = 0; j < courseSch.length; j++) {
                                    let classLi = {};
                                    timeStart = courseSch[j].start_time;
                                    timeEnd = courseSch[j].end_time;
                                    classLi.batch_id = courseSch[j].batch_id.toString();
                                    classLi.start_time = courseSch[j].start_time;
                                    classLi.end_time = courseSch[j].end_time;
                                    classLi.class_desc = courseSch[j].class_desc;
                                    classLi.duration = courseSch[j].duration;
                                    classLi.total_marks = courseSch[j].total_marks.toString();
                                    classLi.room_no = courseSch[j].room_no;
                                    classLi.class_schedule_id = courseSch[j].class_schedule_id.toString();
                                    unselected.courseClassSchdList.push(classLi);
                                }
                                unselected.course_exam_schedule_id = this.examScheduleData.coursesList[i].course_exam_schedule_id.toString();
                            }
                        }
                        unselected.exam_start_time = timeStart;
                        unselected.exam_end_time = timeEnd;
                        data.coursesList.push(unselected);
                    }
                    else if (this.examScheduleData.coursesList[i].course_id == this.courseData.course_id &&
                        this.examScheduleData.coursesList[i] && this.examScheduleData.coursesList[i].courseClassSchdList == null &&
                        this.examScheduleData.coursesList[i].course_exam_schedule_id != 0) {
                        /** this condition used  for cancel exam if user try to create exam
                         * using  same time and type then cancel exam course_exam_schedule_id need to send in new created
                         * exam object  --- added laxmi */
                        if (data.coursesList[i] && this.examScheduleData.coursesList[i]) {
                            data.coursesList[startIndex].course_exam_schedule_id = this.examScheduleData.coursesList[i].course_exam_schedule_id;
                            startIndex++;
                        }
                        else if (this.examScheduleData.coursesList[i]) {
                            let obj = {
                                "course_id": this.examScheduleData.coursesList[i].course_id,
                                "courseClassSchdList": [],
                                "exam_start_time": null,
                                "exam_end_time": null,
                                "course_exam_schedule_id": this.examScheduleData.coursesList[i].course_exam_schedule_id
                            };
                            data.coursesList.push(obj);
                        }
                    }
                    else if (this.examScheduleData.coursesList[i].course_id == this.courseData.course_id &&
                        this.examScheduleData.coursesList[i] && this.examScheduleData.coursesList[i].courseClassSchdList) {
                        let isNeedToAdd = true;
                        data.coursesList.forEach((obj) => {
                            if (obj.course_exam_schedule_id == this.examScheduleData.coursesList[i].course_exam_schedule_id) {
                                isNeedToAdd = false;
                            }
                        });
                        if (isNeedToAdd) {
                            if (coursesLists[i]) {
                                data.coursesList.push(coursesLists[i]);
                            }
                        }
                    }
                }
            }
            return data;
        }
        ////cancel Exam popup/////
        cancelExamCourse(data, index, j) {
            this.cancelExamPopUp = true;
            this.cancelExamData = this.viewList[j].courseTableList[index];
        }
        cancelCourseExam() {
            if (this.cancelPopUpData.reason.trim() == "" || null) {
                this.messageNotifier('error', '', 'Please Provide Cancellation Reason');
                return;
            }
            let notify = "";
            if (this.cancelPopUpData.notify) {
                notify = "Y";
            }
            else {
                notify = "N";
            }
            if (!this.auth.isRippleLoad.getValue()) {
                this.auth.showLoader();
                let obj = {
                    batch_id: this.cancelExamData.batch_id,
                    exam_freq: "OTHER",
                    cancelSchd: [{
                            schd_id: this.cancelExamData.class_schedule_id,
                            exam_desc: this.cancelPopUpData.reason,
                            is_notified: notify
                        }]
                };
                this.apiService.cancelExamSchedule(obj).subscribe(res => {
                    this.auth.hideLoader();
                    this.messageNotifier('success', 'Successfully Cancelled', 'Scheduled exam cancelled successfully');
                    this.closeCancelExamPopUp();
                    this.getExamSchedule();
                }, err => {
                    //console.log(err);
                    this.auth.hideLoader();
                    this.messageNotifier('error', '', err.error.message);
                });
            }
        }
        // cancel Button next to Send Reminder
        cancelExamForFullCourse(data, index) {
            this.cancelExamPopUp = true;
            this.cancelExamData = data;
            this.jsonVar.cancelCourseLevel = true;
        }
        cancelCourseLevelExam() {
            if (this.cancelPopUpData.reason.trim() == "" || null) {
                this.messageNotifier('error', '', 'Please Provide Cancellation Reason');
                return;
            }
            let notify = "";
            if (this.cancelPopUpData.notify) {
                notify = "Y";
            }
            else {
                notify = "N";
            }
            if (!this.auth.isRippleLoad.getValue()) {
                this.auth.showLoader();
                let obj = {
                    cancel_reason: this.cancelPopUpData.reason,
                    course_exam_schedule_id: this.cancelExamData.selectedCourseList.course_exam_schedule_id,
                    course_id: this.courseData.course_id,
                    is_cancel_notify: notify,
                    requested_date: moment__WEBPACK_IMPORTED_MODULE_1__(this.courseData.requested_date).format('YYYY-MM-DD')
                };
                this.apiService.cancelExamScheduleCourse(obj).subscribe(res => {
                    this.auth.hideLoader();
                    this.messageNotifier('success', 'Successfully Cancelled', 'Scheduled exam cancelled successfully');
                    this.closeCancelExamPopUp();
                    this.getExamSchedule();
                }, err => {
                    //console.log(err);
                    this.auth.hideLoader();
                    this.messageNotifier('error', '', err.error.message);
                });
            }
        }
        //Toggle Buttons////
        onChanged(event) {
            this.selectedType = event.value;
        }
        // Send Reminder
        sendReminderForCourse(data, index) {
            if (confirm('Are you sure, You want to notify?')) {
                let obj = {
                    course_exam_schedule_id: data.selectedCourseList.course_exam_schedule_id,
                    course_id: this.courseData.course_id,
                    requested_date: moment__WEBPACK_IMPORTED_MODULE_1__(this.courseData.requested_date).format('YYYY-MM-DD')
                };
                this.apiService.sendReminder(obj).subscribe(res => {
                    this.messageNotifier('success', 'Reminder Sent', 'Notification sent successfully');
                }, err => {
                    //console.log(err);
                    this.messageNotifier('error', '', "SMS notification can't be sent due to any of the following reasons: SMS setting is not enabled for the institute. SMS quota is not sufficient for the institute. No student(s) assigned in the course to notify");
                });
            }
        }
        deleteWholeCourse(data, index) {
            this.viewList.splice(index, 1);
        }
        // Helper Function
        validateTime(start, end) {
            let start_time = moment__WEBPACK_IMPORTED_MODULE_1__(this.createTimeInFormat(start.hour, start.minute, 'comp'), 'h:mma');
            let end_time = moment__WEBPACK_IMPORTED_MODULE_1__(this.createTimeInFormat(end.hour, end.minute, 'comp'), 'h:mma');
            if (!(start_time.isBefore(end_time))) {
                this.messageNotifier('error', '', 'Please enter correct start time and end time');
                return false;
            }
            else {
                let duration = end_time.diff(start_time, 'minutes');
                return duration;
            }
        }
        validateTime2() {
            let start_time = moment__WEBPACK_IMPORTED_MODULE_1__(this.createTimeInFormat(this.newExamData.startTimeHrs, this.newExamData.startTimeMins, 'comp'), 'h:mma');
            let end_time = moment__WEBPACK_IMPORTED_MODULE_1__(this.createTimeInFormat(this.newExamData.endTimeHrs, this.newExamData.endTimeMins, 'comp'), 'h:mma');
            if (!(start_time.isBefore(end_time))) {
                this.messageNotifier('error', '', 'Please enter correct start time and end time');
                return false;
            }
            else {
                let duration = end_time.diff(start_time, 'minutes');
                return duration;
            }
        }
        breakTimeFormat(time) {
            let obj = {};
            obj.hour = time.split(':')[0] + " " + time.split(':')[1].split(' ')[1];
            obj.minute = time.split(':')[1].split(' ')[0];
            return obj;
        }
        createTimeInFormat(hrMeri, minute, format) {
            let time = hrMeri.split(' ');
            if (format == "comp") {
                let t = time[0] + ":" + minute + time[1];
                return t;
            }
            else {
                let t = time[0] + ":" + minute + " " + time[1];
                return t;
            }
        }
        messageNotifier(type, title, msg) {
            let data = {
                type: type,
                title: title,
                body: msg
            };
            this.toastCtrl.popToast(data);
        }
        checkInstituteType() {
            this.auth.institute_type.subscribe(res => {
                if (res == "LANG") {
                    this.isLangInstitute = true;
                }
                else {
                    this.isLangInstitute = false;
                }
            });
        }
        fetchInstituteExamTypesv2() {
            this.commonApiCall.fetchInstituteExamTypes(sessionStorage.getItem("institute_id")).subscribe((data) => {
                this.examTypeList = data.result;
            }, err => {
                this.msgSrvc.showErrorMessage(this.msgSrvc.toastTypes.error, '', err.error.message);
            });
        }
        fetchInstituteExamTypes() {
            this.commonApiCall.examTypeList.subscribe((data) => {
                this.examTypeList = data;
            });
        }
    };
    CourseExamComponent.ctorParameters = () => [
        { type: _services_course_services_exam_schedule_service__WEBPACK_IMPORTED_MODULE_5__["ExamCourseService"] },
        { type: _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"] },
        { type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticatorService"] },
        { type: _services_course_services_topic_listing_service__WEBPACK_IMPORTED_MODULE_6__["TopicListingService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: _services_http_service__WEBPACK_IMPORTED_MODULE_7__["HttpService"] },
        { type: _services_common_api_call_service__WEBPACK_IMPORTED_MODULE_8__["CommonApiCallService"] },
        { type: _services_message_show_service__WEBPACK_IMPORTED_MODULE_9__["MessageShowService"] }
    ];
    CourseExamComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-course-exam',
            template: __importDefault(__webpack_require__(/*! raw-loader!./course-exam.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/create-course/course-exam/course-exam.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./course-exam.component.scss */ "./src/app/components/course-module/create-course/course-exam/course-exam.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_services_course_services_exam_schedule_service__WEBPACK_IMPORTED_MODULE_5__["ExamCourseService"],
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _services_authenticator_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticatorService"],
            _services_course_services_topic_listing_service__WEBPACK_IMPORTED_MODULE_6__["TopicListingService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _services_http_service__WEBPACK_IMPORTED_MODULE_7__["HttpService"],
            _services_common_api_call_service__WEBPACK_IMPORTED_MODULE_8__["CommonApiCallService"],
            _services_message_show_service__WEBPACK_IMPORTED_MODULE_9__["MessageShowService"]])
    ], CourseExamComponent);
    return CourseExamComponent;
})();

let DateMonthFormat = /** @class */ (() => {
    let DateMonthFormat = class DateMonthFormat {
        transform(value) {
            if (value != "" && value != null && value != undefined) {
                return moment__WEBPACK_IMPORTED_MODULE_1__(value).format('DD-MM-YYYY');
            }
            else {
                return value;
            }
        }
    };
    DateMonthFormat = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'dateMonthYear'
        })
    ], DateMonthFormat);
    return DateMonthFormat;
})();



/***/ }),

/***/ "./src/app/components/course-module/create-course/course-exam/course-exam.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/components/course-module/create-course/course-exam/course-exam.module.ts ***!
  \******************************************************************************************/
/*! exports provided: CourseExamModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseExamModule", function() { return CourseExamModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/components/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _course_exam_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./course-exam.component */ "./src/app/components/course-module/create-course/course-exam/course-exam.component.ts");
/* harmony import */ var _course_exam_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./course-exam.routing.module */ "./src/app/components/course-module/create-course/course-exam/course-exam.routing.module.ts");
/* harmony import */ var _services_course_services_exam_schedule_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/course-services/exam-schedule.service */ "./src/app/services/course-services/exam-schedule.service.ts");
/* harmony import */ var _progress_kendo_angular_treeview__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @progress/kendo-angular-treeview */ "./node_modules/@progress/kendo-angular-treeview/__ivy_ngcc__/dist/fesm2015/index.js");
/* harmony import */ var _services_course_services_topic_listing_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../services/course-services/topic-listing.service */ "./src/app/services/course-services/topic-listing.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import {BsDatepickerConfig, BsDatepickerModule} from 'ngx-bootstrap/datepicker';





//import { SplitButtonModule, MenuModule, MenuItem, SelectButtonModule, TabViewModule, ButtonModule } from 'primeng/primeng';


let CourseExamModule = /** @class */ (() => {
    let CourseExamModule = class CourseExamModule {
    };
    CourseExamModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _progress_kendo_angular_treeview__WEBPACK_IMPORTED_MODULE_7__["TreeViewModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                // BsDatepickerModule,
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
                _course_exam_routing_module__WEBPACK_IMPORTED_MODULE_5__["CourseExamRouting"],
            ],
            exports: [],
            declarations: [
                _course_exam_component__WEBPACK_IMPORTED_MODULE_4__["CourseExamComponent"],
                _course_exam_component__WEBPACK_IMPORTED_MODULE_4__["DateMonthFormat"]
            ],
            providers: [
                _services_course_services_exam_schedule_service__WEBPACK_IMPORTED_MODULE_6__["ExamCourseService"],
                _services_course_services_topic_listing_service__WEBPACK_IMPORTED_MODULE_8__["TopicListingService"]
            ]
        })
    ], CourseExamModule);
    return CourseExamModule;
})();



/***/ }),

/***/ "./src/app/components/course-module/create-course/course-exam/course-exam.routing.module.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/components/course-module/create-course/course-exam/course-exam.routing.module.ts ***!
  \**************************************************************************************************/
/*! exports provided: CourseExamRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseExamRouting", function() { return CourseExamRouting; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _course_exam_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./course-exam.component */ "./src/app/components/course-module/create-course/course-exam/course-exam.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let CourseExamRouting = /** @class */ (() => {
    let CourseExamRouting = class CourseExamRouting {
    };
    CourseExamRouting = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _course_exam_component__WEBPACK_IMPORTED_MODULE_2__["CourseExamComponent"],
                        pathMatch: 'prefix',
                    }
                ])
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], CourseExamRouting);
    return CourseExamRouting;
})();



/***/ })

}]);
//# sourceMappingURL=app-components-course-module-create-course-course-exam-course-exam-module-es2015.js.map