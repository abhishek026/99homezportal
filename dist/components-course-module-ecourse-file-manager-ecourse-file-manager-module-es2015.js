(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-course-module-ecourse-file-manager-ecourse-file-manager-module"],{

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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/ecourse-file-manager/core/upload-file/upload-file.component.html":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/ecourse-file-manager/core/upload-file/upload-file.component.html ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"ga-modal-wrapper\" *ngIf=\"showModal\">\n  <div class=\"ga-modal-container\">\n    <div class=\"ga-modal\">\n      <div class=\"ga-modal-head\">\n        <span>Upload Files {{varJson.topic_id}}</span>\n        <span class=\"close\" (click)=\"clearuploadObject()\"></span>\n      </div>\n      <div class=\"ga-modal-body\">\n        <div class=\"row upload-box\">\n          <div class=\"col-md-4 file-form\">\n            <div class=\"form-group\">\n              <select class=\"form-ctrl ga-form-input\" [disabled]=\"material_dataShow\" [(ngModel)]=\"varJson.course_types\"\n                (change)=\"getSubjectsList($event.target.value)\">\n                <option value=\"\"> Select course</option>\n                <option *ngFor=\"let exam of categiesList; \" [value]=\"exam.course_type_id\">{{exam.course_type}}</option>\n              </select>\n            </div>\n            <div class=\"form-group\">\n              <select [(ngModel)]=\"varJson.subject_id\" [disabled]=\"material_dataShow\" class=\"form-ctrl ga-form-input\"\n                (change)=\"getTopicsList($event.target.value)\">\n                <option value=\"0\">Select subject</option>\n                <option *ngFor=\"let subject of subjectList;\" [value]=\"subject.subject_id\">{{subject.subject_name}}\n                </option>\n              </select>\n            </div>\n            <div class=\"form-group\">\n              <select class=\"form-ctrl ga-form-input\" [(ngModel)]=\"varJson.topic_id\"\n                (change)=\"getSubtopicList($event.target.value)\">\n                <option value=\"0\">Select topic</option>\n                <option *ngFor=\"let topic of topicList; \" [value]=\"topic.institute_topic_id\">{{topic.name}}</option>\n              </select>\n            </div>\n            <div class=\"form-group\">\n              <select class=\"form-ctrl ga-form-input\" [(ngModel)]=\"varJson.sub_topic_id\">\n                <option value=\"0\">Select subtopic</option>\n                <option *ngFor=\"let subtopic of subtopicList; \" [value]=\"subtopic.institute_topic_id\">{{subtopic.name}}\n                </option>\n              </select>\n            </div>\n          </div>\n          <div class=\"file-drop-wrapper\"\n            [ngClass]=\"{'col-md-10': varJson.category_id==330,'col-md-8': varJson.category_id!=330}\">\n            <div class=\"drop-box\">\n              <select [(ngModel)]=\"varJson.category_id\" (change)=\"setCategoryType($event.target.value)\"\n                class=\"form-ctrl ga-form-input\" style=\"margin-bottom: 0.8em\">\n                <option value=\"0\">Select file type</option>\n                <option *ngFor=\"let category of categiesTypeList; \" [value]=\"category.category_id\">\n                  {{category.category_name}}</option>\n              </select>\n              <div class=\"row\" *ngIf=\"varJson.category_id==235\">\n                <div class=\"col-md-7\">\n                  <div class=\"field-wrapper\">\n                    <label>Privacy Settings<div class=\"questionInfo inline-relative\">\n                        <span class=\"qInfoIcon i-class\">i</span>\n                        <div class=\"tooltip-box-field\">\n                          Set the video visibility mode to private or public.\n                          In private mode, video will be visible to the enrolled students.\n                          In public mode, video will be visible to guest users & enrolled students\n                        </div>\n                      </div></label>\n                    <div class=\"row\" style=\"padding: 15px 30px;\">\n                      <label class=\"toggle\">\n                        <span class=\"toggle-label\" id=\"unassigned\"\n                          [ngClass]=\"(varJson.is_private)?'inactive_toggle_button':'active_toggle_button'\">Private</span>\n                        <input class=\"toggle-checkbox\" type=\"checkbox\" [(ngModel)]=\"varJson.is_private\">\n                        <div class=\"toggle-switch\"></div>\n                        <span class=\"toggle-label\" id=\"assigned\"\n                          [ngClass]=\"(varJson.is_private)?'active_toggle_button':'inactive_toggle_button'\">Public\n                        </span>\n                      </label>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-md-5\">\n                  <div class=\"field-wrapper\" style=\"margin-left: -50px;\">\n                    <div class=\"dropdown-div\">\n                      <label>Enable Watermark <div class=\"questionInfo inline-relative\">\n                          <span class=\"qInfoIcon i-class\">i</span>\n                          <div class=\"tooltip-box-field\">\n                            Enable or disable the watermark visibility in the video with this setting\n                          </div>\n                        </div>&nbsp;&nbsp;\n                        <div class=\"row\" style=\"padding: 15px 30px;\">\n                          <label class=\"toggle\">\n                            <span class=\"toggle-label\" id=\"unassigned\"\n                              [ngClass]=\"(varJson.enable_watermark)?'inactive_toggle_button':'active_toggle_button'\">Disable\n                            </span>\n                            <input class=\"toggle-checkbox\" type=\"checkbox\" [(ngModel)]=\"varJson.enable_watermark\">\n                            <div class=\"toggle-switch\"></div>\n                            <span class=\"toggle-label\" id=\"assigned\"\n                              [ngClass]=\"(varJson.enable_watermark)?'active_toggle_button':'inactive_toggle_button'\">Enable\n                            </span>\n                          </label>\n                        </div>\n                      </label>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <input type=\"text\" style=\"margin-bottom: 0.8em;\" *ngIf=\"varJson.category_id==235\"\n                class=\"form-ctrl video-input\" placeholder=\"Video Title\" [(ngModel)]=\"varJson.title\">\n\n                <input type=\"text\" style=\"margin-bottom: 0.8em;\" class=\"form-ctrl video-input\"\n                *ngIf=\"varJson.category_id==230\" placeholder=\"Video URL\" [(ngModel)]=\"varJson.video_url\">\n\n                <div class=\"btn-div\" *ngIf=\"varJson.category_id==230\">\n                <input class=\"btn fullBlue\" type=\"button\" value=\"Upload\" [disabled]=\"varJson.video_url==''\"\n                  (click)=\"uploadYoutubeURL($event)\">\n                <input class=\"btn\" (click)=\" clearuploadObject()\" type=\"button\" value=\"Cancel\">\n              </div>\n              <div style=\"height: 22rem; overflow:hidden;   overflow-y: scroll;\"\n                class=\"table table-responsive table-made\" *ngIf=\"varJson.category_id==330\">\n                <table>\n                  <thead>\n                    <tr style=\"background:#005cbf;\">\n                      <td>#</td>\n                      <td>Title</td>\n                      <td>Size</td>\n                      <td>Date</td>\n                      <td>Source</td>\n                      <td>Links</td>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let video of existVideos; let i= index\" >\n                      <td>\n                        <div class=\"field-radio-wrapper\">\n                          <input type=\"radio\" name=\"bothRadio\" id=\"bothRadio\" class=\"form-radio\"\n                            [(ngModel)]=\"jsonData.selectedVideo\" [value]=\"video.video_id\"\n                            (ngModelChange)=\"onRadioButtonChange($event,video)\">\n                          <label for=\"bothRadio\"></label>\n                        </div>\n                      </td>\n                      <td>\n                        <span class=\"txt-title text-left\"\n                          title=\"{{video.video_title}}\">{{video.video_title.length>20?(video.video_title | slice:0:20):video.video_title}}</span>\n                      </td>\n                      <td>{{video.video_size}} MB {{i}}</td>\n                      <td>{{video.video_upload_date | date: 'dd-MMM-yyyy'}}</td>\n                      <td>\n                        <span class=\"txt-title\"\n                          title=\"{{getSourceName(video)}}\">{{(getSourceName(video)?.length>30)?(getSourceName(video) | slice:0:30) + '...':(getSourceName(video))}}</span>\n                      </td>\n                      <td>\n                        <div class=\"questionInfo inline-relative\" *ngIf=\"video.link_video_list.length\">\n                          <span class=\"qInfoIcon i-class\"><b>{{video.link_video_list.length}}</b></span>\n                          <div class=\"tooltip-box-field text-left\" >\n                            <span *ngFor=\"let data of video.link_video_list;let i=index\"  style=\"padding: 5px;\">\n                              {{videoGetDetails(data,i+1)}} <br>\n                            </span>\n                          </div>\n                        </div>\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n              <div class=\"btn-div\" *ngIf=\"varJson.category_id==330\"\n                style=\" position: absolute; right: 1rem; bottom: 0;\">\n                <input class=\"btn fullBlue\" type=\"button\" value=\"Link Video\" [disabled]=\"varJson.title==''\"\n                  (click)=\"linkAlreadyUploadedVideo($event)\">\n                <input class=\"btn\" (click)=\" clearuploadObject()\" type=\"button\" value=\"Cancel\">\n              </div>\n              <p-fileUpload customUpload=\"true\" type=\"submit\" (uploadHandler)=\"uploadHandler2($event,values)\"\n                [showCancelButton]=\"false\"\n                *ngIf=\"varJson.category_id==235 && varJson.category_id!=0 && varJson.category_id!=330\">\n              </p-fileUpload>\n\n              <p-fileUpload customUpload=\"true\" multiple=\"multiple\" type=\"submit\"\n                (uploadHandler)=\"uploadHandler($event,values)\" [showCancelButton]=\"false\"\n                *ngIf=\"varJson.category_id!=230 && varJson.category_id!=235 && varJson.category_id!=330\">\n              </p-fileUpload>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div> -->\n\n<div class=\"ga-modal-wrapper\" *ngIf=\"showParentTopicModel\">\n  <div class=\"ga-modal-container\">\n    <div class=\"ga-modal\">\n      <div class=\"ga-modal-head\">\n        <span>Upload Files</span>\n        <span class=\"close\" (click)=\"clearuploadObject()\"></span>\n      </div>\n      <div class=\"ga-modal-body\">\n        <div class=\"row upload-box\">\n          <div class=\"col-md-12 file-form\">\n            <div class=\"form-group\">\n              <!-- changes by Nalini - to handle school model conditions -->\n              <label class=\"title\">{{schoolModel ? 'Section' : 'Course'}}</label>\n              <select class=\"form-ctrl ga-form-input\" [disabled]=\"material_dataShow\" [(ngModel)]=\"varJson.course_types\"\n                (change)=\"getSubjectsList($event.target.value)\">\n                <option value=\"\"> Select {{schoolModel ? 'Section' : 'course'}}</option>\n                <option *ngFor=\"let exam of categiesList; \" title=\"{{exam.course_type}}\" [value]=\"exam.course_type_id\">\n                  {{(exam.course_type?.length>30)?(exam.course_type | slice:0:30) + '...':(exam.course_type)}}\n                </option>\n              </select>\n            </div>\n          </div>\n          <div class=\"col-md-12 file-form\">\n            <div class=\"form-group\">\n              <label class=\"title\">Subject</label>\n              <select [(ngModel)]=\"varJson.subject_id\" [disabled]=\"material_dataShow\" class=\"form-ctrl ga-form-input\"\n                (change)=\"getTopicsList($event.target.value)\">\n                <option value=\"0\">Select subject</option>\n                <option *ngFor=\"let subject of subjectList;\" title=\"{{subject.subject_name}}\"\n                  [value]=\"subject.subject_id\">\n                  {{(subject.subject_name?.length>30)?(subject.subject_name| slice:0:30) + '...':(subject.subject_name)}}\n\n                </option>\n              </select>\n            </div>\n          </div>\n        </div>\n        <div class=\"row upload-box\" *ngIf=\"showModal\">\n          <div class=\"col-md-12 file-form\">\n            <div class=\"form-group\">\n              <label class=\"title\">Topic</label>\n              <select class=\"form-ctrl ga-form-input\" [(ngModel)]=\"varJson.topic_id\"\n                (change)=\"getSubtopicList($event.target.value)\">\n                <option value=\"0\">Select topic</option>\n                <option *ngFor=\"let topic of topicList; \" title=\"{{topic.name}}\" [value]=\"topic.institute_topic_id\">\n                  {{(topic.name?.length>30)?(topic.name| slice:0:30) + '...':(topic.name)}}\n                </option>\n              </select>\n            </div>\n          </div>\n          <div class=\"col-md-12 file-form\">\n            <div class=\"form-group\">\n              <label class=\"title\">Subtopic</label>\n              <select class=\"form-ctrl ga-form-input\" [(ngModel)]=\"varJson.sub_topic_id\">\n                <option value=\"0\">Select subtopic</option>\n                <option *ngFor=\"let subtopic of subtopicList; \" title=\"{{subtopic.name}}\"\n                  [value]=\"subtopic.institute_topic_id\">\n                  {{(subtopic.name?.length>30)?(subtopic.name| slice:0:30) + '...':(subtopic.name)}}\n                </option>\n              </select>\n            </div>\n          </div>\n        </div>\n        <div class=\"row upload-box\"\n          *ngIf=\"varJson.category_id==63 || varJson.category_id==182 || varJson.category_id==229 || varJson.category_id==233 || varJson.category_id==234\">\n          <div class=\"col-md-12 file-form\">\n            <div class=\"form-group\">\n              <input type=\"checkbox\" style=\"-webkit-appearance: checkbox;\" [(ngModel)]=\"varJson.is_readonly\">\n              <label class=\"title\">Is Read-Only</label>\n            </div>\n          </div>\n        </div>\n        <div class=\"row upload-box\" *ngIf=\"!showModal\">\n          <div class=\"col-md-12 file-form\">\n            <div class=\"form-group\">\n              <label class=\"title\">Topic &nbsp;:&nbsp;</label>\n              <label\n                title=\"{{jsonData.parentTopic}}\">{{(jsonData.parentTopic?.length>30)?(jsonData.parentTopic | slice:0:30) + '...':(jsonData.parentTopic)}}\n              </label>\n\n            </div>\n          </div>\n          <div class=\"col-md-12 file-form\">\n            <div class=\"form-group\">\n              <label class=\"title\">Subtopic &nbsp;:&nbsp;</label>\n              <label\n                title=\"{{jsonData.parentTopic}}\">{{(jsonData.mainTopic?.length>30)?(jsonData.mainTopic | slice:0:30) + '...':(jsonData.mainTopic)}}</label>\n            </div>\n          </div>\n\n        </div>\n\n\n\n        <div class=\"row upload-box\">\n          <div class=\"col-md-12 file-drop-wrapper\">\n            <div class=\"drop-box\">\n              <select [(ngModel)]=\"varJson.category_id\" (change)=\"setCategoryType($event.target.value)\"\n                class=\"form-ctrl ga-form-input\" style=\"margin-bottom: 0.8em\">\n                <option value=\"0\">Select file type</option>\n                <option *ngFor=\"let category of categiesTypeList; \" [value]=\"category.category_id\">\n                  {{category.category_name}}</option>\n              </select>\n              <div class=\"row\" *ngIf=\"varJson.category_id==235\">\n                <div class=\"col-md-7\">\n                  <div class=\"field-wrapper\">\n                    <label>Privacy Settings<div class=\"questionInfo inline-relative\">\n                        <span class=\"qInfoIcon i-class\">i</span>\n                        <div class=\"tooltip-box-field\">\n                          Set the video visibility mode to private or public.\n                          In private mode, video will be visible to the enrolled students.\n                          In public mode, video will be visible to guest users & enrolled students\n                        </div>\n                      </div></label>\n                    <div class=\"row\" style=\"padding: 15px 30px;\">\n                      <label class=\"toggle\">\n                        <span class=\"toggle-label\" id=\"unassigned\"\n                          [ngClass]=\"(varJson.is_private)?'inactive_toggle_button':'active_toggle_button'\">Private</span>\n                        <input class=\"toggle-checkbox\" type=\"checkbox\" [(ngModel)]=\"varJson.is_private\">\n                        <div class=\"toggle-switch\"></div>\n                        <span class=\"toggle-label\" id=\"assigned\"\n                          [ngClass]=\"(varJson.is_private)?'active_toggle_button':'inactive_toggle_button'\">Public\n                        </span>\n                      </label>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-md-5\">\n                  <div class=\"field-wrapper\" style=\"margin-left: -50px;\">\n                    <div class=\"dropdown-div\">\n                      <label>Enable Watermark <div class=\"questionInfo inline-relative\">\n                          <span class=\"qInfoIcon i-class\">i</span>\n                          <div class=\"tooltip-box-field\">\n                            Enable or disable the watermark visibility in the video with this setting\n                          </div>\n                        </div>&nbsp;&nbsp;\n                        <div class=\"row\" style=\"padding: 15px 30px;\">\n                          <label class=\"toggle\">\n                            <span class=\"toggle-label\" id=\"unassigned\"\n                              [ngClass]=\"(varJson.enable_watermark)?'inactive_toggle_button':'active_toggle_button'\">Disable\n                            </span>\n                            <input class=\"toggle-checkbox\" type=\"checkbox\" [(ngModel)]=\"varJson.enable_watermark\">\n                            <div class=\"toggle-switch\"></div>\n                            <span class=\"toggle-label\" id=\"assigned\"\n                              [ngClass]=\"(varJson.enable_watermark)?'active_toggle_button':'inactive_toggle_button'\">Enable\n                            </span>\n                          </label>\n                        </div>\n                      </label>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <input type=\"text\" style=\"margin-bottom: 0.8em;\" *ngIf=\"varJson.category_id==235 || varJson.name=='Vimeo'\"\n                class=\"form-ctrl video-input\" placeholder=\"Video Title\" [(ngModel)]=\"varJson.title\">\n              <!-- <div class=\"col-md-12 file-form\" *ngIf=\"varJson.category_id==235\"\n                style=\"background: #ecf7ff;margin-bottom: 20px;\">\n                <div class=\"form-group\">\n                  <input type=\"checkbox\" style=\"-webkit-appearance: checkbox;\" [(ngModel)]=\"manual_multiplier_update\">\n                  <label class=\"title\">For this video</label>\n                </div>\n                <label *ngIf=\"manual_multiplier_update\">Multiplier</label>\n                <input type=\"number\" style=\"margin-bottom: 0.8em;\" *ngIf=\"manual_multiplier_update\"\n                  class=\"form-ctrl video-input\" placeholder=\"Multiplier\" [(ngModel)]=\"watch_multiplier\">\n              </div><br> -->\n\n\n              <!-- <input type=\"text\" style=\"margin-bottom: 0.8em;\"\n                 class=\"form-ctrl video-input\" *ngIf=\"varJson.name=='Vimeo'\"\n                placeholder=\"Video Description\" [(ngModel)]=\"varJson.description\"> -->\n\n              <input type=\"text\" style=\"margin-bottom: 0.8em;\" class=\"form-ctrl video-input\"\n                *ngIf=\"varJson.category_id==230\" placeholder=\"Video URL\" [(ngModel)]=\"varJson.video_url\">\n\n              <div class=\"btn-div\" *ngIf=\"varJson.category_id==230\">\n                <input class=\"btn fullBlue\" type=\"button\" value=\"Upload\" [disabled]=\"varJson.video_url==''\"\n                  (click)=\"uploadYoutubeURL($event)\">\n                <input class=\"btn\" (click)=\" clearuploadObject()\" type=\"button\" value=\"Cancel\">\n              </div>\n              <div style=\" height: 22rem;overflow:hidden; overflow-y: scroll;\" class=\"table table-responsive table-made\"\n                *ngIf=\"varJson.category_id==330\">\n                <table>\n                  <thead>\n                    <tr style=\"background:#005cbf;\">\n                      <td>#</td>\n                      <td>Title</td>\n                      <td>Size</td>\n                      <td>Date</td>\n                      <td>Source</td>\n                      <td>Links</td>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let video of existVideos;\">\n                      <td>\n                        <div class=\"field-radio-wrapper\">\n                          <input type=\"radio\" name=\"bothRadio\" id=\"bothRadio\" class=\"form-radio\"\n                            [(ngModel)]=\"jsonData.selectedVideo\" [value]=\"video.video_id\"\n                            (ngModelChange)=\"onRadioButtonChange($event,video)\">\n                          <label for=\"bothRadio\"></label>\n                        </div>\n                      </td>\n                      <td>\n                        <span class=\"txt-title text-left\"\n                          title=\"{{video.video_title}}\">{{video.video_title?.length>20?(video.video_title | slice:0:20):video.video_title}}</span>\n                      </td>\n                      <td>{{video.video_size}} MB</td>\n                      <td>{{video.video_upload_date | date: 'dd-MMM-yyyy'}}</td>\n                      <td><span class=\"txt-title\"\n                          title=\"{{getSourceName(video)}}\">{{(getSourceName(video)?.length>30)?(getSourceName(video) | slice:0:30) + '...':(getSourceName(video))}}</span>\n                      </td>\n                      <td>\n                        <span *ngIf=\"video.link_video_list.length==0\">-</span>\n                        <div class=\"questionInfo inline-relative\" *ngIf=\"video.link_video_list.length\">\n                          <span class=\"qInfoIcon i-class\"><b>{{video.link_video_list?.length}}</b></span>\n                          <div class=\"tooltip-box-field text-left\">\n                            <span *ngFor=\"let data of video.link_video_list;let i=index\" style=\"padding: 5px;\">\n                              {{videoGetDetails(data,i+1)}} <br>\n                            </span>\n                          </div>\n                        </div>\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n              <div class=\"btn-div\" *ngIf=\"varJson.category_id==330\"\n                style=\" position: absolute; right: 1rem; bottom: -10px;\">\n                <input class=\"btn fullBlue\" type=\"button\" value=\"Link Video\" (click)=\"linkAlreadyUploadedVideo($event)\">\n                <input class=\"btn\" (click)=\" clearuploadObject()\" type=\"button\" value=\"Cancel\">\n              </div>\n              <p-fileUpload customUpload=\"true\" type=\"submit\" (uploadHandler)=\"uploadHandler2($event,values)\"\n                [showCancelButton]=\"false\"\n                *ngIf=\"varJson.category_id==235 && varJson.category_id!=0 && varJson.category_id!=330 && varJson.name!='Vimeo'\">\n              </p-fileUpload>\n\n              <!-- <p-fileUpload customUpload=\"true\" type=\"submit\" (uploadHandler)=\"uploadHandler2($event,fileUpload)\"\n                [showCancelButton]=\"false\"\n                *ngIf=\"varJson.name=='Vimeo' && varJson.category_id!=235 && varJson.category_id!=0 && varJson.category_id!=330\">\n              </p-fileUpload> -->\n\n              <p-fileUpload customUpload=\"true\" multiple=\"multiple\" type=\"submit\"\n                (uploadHandler)=\"uploadHandler($event,values)\" [showCancelButton]=\"false\"\n                *ngIf=\"varJson.category_id!=230 && varJson.category_id!=235 && varJson.category_id!=330 && varJson.name!='Vimeo'\">\n              </p-fileUpload>\n\n              <!-- Developed by - Nalini\n                Form to upload vimeo file\n               -->\n              <form style=\"height: 100px;\"\n                *ngIf=\"varJson.name=='Vimeo' && varJson.category_id!=235 && varJson.category_id!=0 && varJson.category_id!=330\"\n                #form method=\"post\" id=\"form\" enctype=\"multipart/form-data\">\n                <div>\n                  <input style=\"float: left;\" type=\"file\" id=\"file\" accept=\"video/mp4,video/x-m4v,video/*\"\n                    (change)=\"onFileChange($event)\" name=\"file_data\">\n\n                  <div *ngIf=\"Vimeofile.files?.length\" style=\"margin-left: 15px;float: left;margin-top: 4px;\">\n                    {{(Vimeofile.files[0].size / 1024) / 1024 | number:'.3-3'}} MB</div>\n                  <div>\n                    <button class=\"uploadVimeo\" (click)=\"uploadHandler2(Vimeofile, '')\"> Upload </button>\n                  </div>\n                  <div class=\"row\" *ngIf=\"progressBar\">\n                    <div class=\"c-lg-8 progress-bar-wrapper\">\n                      <div class=\"upload-bar\">\n                        <div id=\"progress-width\"></div>\n                      </div>\n                      <span>{{progress}} %</span>\n                    </div>\n                  </div>\n                </div>\n                <div>\n                </div>\n              </form>\n\n              <!-- <div class=\"uploadProcessAndFileName clearfix\" *ngIf=\"isUploadingXls\">\n                <div class=\"progress-bar-wrapper\">\n                  <div class=\"upload-bar\">\n                    <div id=\"progress-width\"></div>\n                  </div>\n                  <span>{{progress}} %</span>\n                </div>\n              </div> -->\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/ecourse-file-manager/ecourse-file-manager.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/ecourse-file-manager/ecourse-file-manager.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mainDiv\">\n  <div class=\"row\" style=\"margin-top: -15px;\">\n    <div class=\"col-md-12 text-headline\">\n      <a>\n        <!--{{isLangInstitue ? 'Batch' : 'Course'}}-->\n        Content Library\n      </a>\n     &gt;\n      <span *ngIf=\"!currentRoute\"> Study Materials</span>\n    &gt;\n    <span *ngIf=\"currentRoute\"> Settings</span>\n      <span>\n        <ng-container *ngIf=\"_http.routeList.length\">\n          <span class=\"breadcrums\" (click)=\"gotoPageData(route)\" style=\"cursor: pointer;\"\n            *ngFor=\"let route of _http.routeList ;let i = index\">\n            <span *ngIf=\"route.name == 'E-Course'\" style=\"color: #0084f6;\">{{route.name}}</span>\n            <span *ngIf=\"route.name != 'E-Course'\">{{route.name}}</span>\n            <i class=\"fa fa-angle-right\" *ngIf=\" i < (_http.routeList.length-1) \"></i>\n          </span>\n        </ng-container>\n      </span>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-2 file-mgr-sidebar\" style=\"margin-top: 1.6em;float: right;width: 20%;\">\n      <div>\n        <button class=\"btn btn-wide-blue\" (click)=\"toggleFileUploadModal()\" style=\"border-radius: 4px;\">Upload\n          File</button>\n      </div>\n      <div *ngIf=\"enable_vdoCipher_feature || enable_vimeo_feature\" style=\"margin-top: 15px;\">\n        <button class=\"btn btn-wide-blue\" (click)=\"getSettingDetails()\" style=\"border-radius: 4px;\">VDOCipher\n          Setting</button>\n      </div>\n      <div *ngIf=\"enable_vdoCipher_feature\" style=\"margin-top: 15px;\">\n        <button class=\"btn btn-wide-blue\" routerLink=\"/view/course/analytics\" style=\"border-radius: 4px;\">VDOCipher\n          Analytics</button>\n      </div>\n\n      <!-- <div class=\"sidecard\">\n    <ul>\n      <li class=\"btn-wide-blue\">E-Course</li>\n    </ul>\n  </div> -->\n\n      <!-- <div class=\"sidecard\">\n      <div class=\"wrap\">\n        <h4>Download Usage<div class=\"questionInfo inline-relative\">\n          <span class=\"qInfoIcon i-class\">i</span>\n          <div class=\"tooltip-box-field lg\" style=\"width: 80px;\">\n            This doesn't <br>include video<br> storage!\n          </div>\n        </div></h4>\n        <p class=\"small usage\">{{_fservice.storageData.uploaded_size | number :'.2-2'}} GB used of\n          {{_fservice.storageData.storage_allocated | number:'.2-2'}}\n          GB</p>\n        <div class=\"progress-bar\">\n          <div class=\"progress-stat\" [ngStyle]=\"{'width': _fservice.storageData.width+'%'}\"></div>\n        </div>\n      </div>\n    </div> -->\n\n\n\n      <!-- <div class=\"sidecard\" *ngIf=\"enable_vdoCipher_feature\">\n        <div class=\"wrap\">\n          <h4>Used Bandwidth Capacity\n          </h4>\n          <p class=\"small usage\">\n            {{(vDOCipher_used_bandwidth?vDOCipher_used_bandwidth:0)| number:'.2-2'}} GB\n          </p>\n        </div>\n      </div> -->\n\n      <div class=\"sidecard\" *ngIf=\"enable_vdoCipher_feature\" style=\"height: 90px;\">\n        <div class=\"wrap\">\n          <h4> VDOCipher Storage\n          </h4>\n          <p class=\"small usage\">\n            {{(vDOCipher_used_storage?vDOCipher_used_storage:0)| number:'.2-2'}} GB of\n            {{(vDOCipher_allocated_storage?vDOCipher_allocated_storage:0)| number:'.2-2'}} GB used\n          </p>\n          <div style=\"width: 100px;height: 10%;margin-top: 9px;\">\n            <svg style=\"height: 60px;\" [ngStyle]=\"{'width': storagePercent+'px'}\">\n              <rect style=\"fill:#F08080;\" height=\"10%\" width=\"100%\"></rect>\n            </svg>\n            <svg style=\"position: absolute;height: 60px\" [ngStyle]=\"{'width': storageRemainPercent+'px'}\">\n              <rect style=\"fill:#d3e3f2;\" height=\"10%\" width=\"100%\"></rect>\n            </svg>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"sidecard\" *ngIf=\"enable_vdoCipher_feature\" style=\"height: 90px;\">\n        <div class=\"wrap\">\n          <h4>VDOCipher Bandwidth\n          </h4>\n          <p class=\"small usage\">\n            {{(vDOCipher_used_bandwidth?vDOCipher_used_bandwidth:0)| number:'.2-2'}} GB of\n            {{(vDOCipher_allocated_bandwidth?vDOCipher_allocated_bandwidth:0)| number:'.2-2'}} GB used\n          </p>\n          <div style=\"width: 100px;height: 10%;margin-top: 9px;\">\n            <svg style=\"height: 60px;\" [ngStyle]=\"{'width': percent+'px'}\">\n              <rect style=\"fill:#F08080;\" height=\"10%\" width=\"100%\"></rect>\n            </svg>\n            <svg style=\"position: absolute;height: 60px\" [ngStyle]=\"{'width': remainPercent+'px'}\">\n              <rect style=\"fill:#d3e3f2;\" height=\"10%\" width=\"100%\"></rect>\n            </svg>\n          </div>\n\n        </div>\n      </div>\n      <!-- <div class=\"sidecard\" *ngIf=\"enable_vdoCipher_feature\">\n        <div class=\"wrap\">\n          <h4>Used Storage Capacity\n          </h4>\n          <p class=\"small usage\">\n            {{(vDOCipher_used_storage?vDOCipher_used_storage:0)| number:'.2-2'}} GB\n          </p>\n        </div>\n      </div> -->\n\n      <div class=\"sidecard\" *ngIf=\"enable_vimeo_feature\" style=\"height: 90px;\">\n        <div class=\"wrap\">\n          <h4>Vimeo Storage\n          </h4>\n          <p class=\"small usage\">\n            {{(vimeo_consumed_storage?vimeo_consumed_storage:0)| number:'.2-2'}} GB of\n            {{(vimeo_allocated_storage?vimeo_allocated_storage:0)| number:'.2-2'}} GB used\n          </p>\n          <div style=\"width: 100px;height: 10%;margin-top: 9px;\">\n            <svg style=\"height: 60px;\" [ngStyle]=\"{'width': vimeoPercent+'px'}\">\n              <rect style=\"fill:#F08080;\" height=\"10%\" width=\"100%\"></rect>\n            </svg>\n            <svg style=\"position: absolute;height: 60px\" [ngStyle]=\"{'width': vimeoRemainPercent+'px'}\">\n              <rect style=\"fill:#d3e3f2;\" height=\"10%\" width=\"100%\"></rect>\n            </svg>\n          </div>\n        </div>\n      </div>\n\n      <!-- <div class=\"sidecard\" *ngIf=\"enable_vimeo_feature\">\n        <div class=\"wrap\">\n          <h4>Vimeo Used Storage\n          </h4>\n          <p class=\"small usage\">\n            {{(vimeo_consumed_storage?vimeo_consumed_storage:0)| number:'.2-2'}} GB\n          </p>\n        </div>\n      </div> -->\n\n    </div>\n    <div class=\"col-md-10 file-mgr-wrapper\" style=\"width: 80%;\">\n      <div class=\"row\">\n        <div class=\"col-md-12 file-mgr-breadcrumb\">\n          <!-- <h2>\n          <ng-container *ngIf=\"_http.routeList.length\">\n            <a class=\"breadcrums\" (click)=\"gotoPageData(route)\" *ngFor=\"let route of _http.routeList ;let i = index\">\n              {{route.name}}\n              <i class=\"fas fa-angle-right\" *ngIf=\" i < (_http.routeList.length-1) \"></i>\n            </a>\n          </ng-container>\n        </h2> -->\n        </div>\n\n        <div class=\"col-md-12 file-mgr-body\">\n          <router-outlet></router-outlet>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div>\n    <app-upload-file></app-upload-file>\n  </div>\n</div>\n\n<div class=\"ga-modal-wrapper\" [hidden]=\"showSettings\">\n  <div class=\"ga-modal-container\">\n    <div class=\"ga-modal\">\n      <div class=\"ga-modal-head\" style=\"text-align: left\">\n        <span>VDOCipher Settings </span>\n        <div class=\"btn_cross\"> <button class=\"btn btn-xs btn-ga-white\" (click)=\"showSettings = true\"\n            style=\"padding: 0;border: none;\">X</button></div>\n      </div>\n      <div class=\"ga-modal-body\">\n        <div class=\"row upload-box\">\n          <div style=\"height: 430px;overflow-x: hidden;padding-bottom: 10px;\" class=\"model_body_div\">\n            <div class=\"field-wrapper\">\n              <label>Dynamic Watermark</label>\n              <div class=\"row\" style=\"padding: 15px 30px;\">\n                <div class=\"col-md-4\">\n                  <input type=\"checkbox\" id=\"name\" style=\"-webkit-appearance: checkbox;\"\n                    [(ngModel)]=\"settingDetails.watermark_name\" />\n                  <label for=\"name\">Name</label>\n                </div>\n                <div class=\"col-md-4\">\n                  <input id=\"phone\" type=\"checkbox\" style=\"-webkit-appearance: checkbox;\"\n                    [(ngModel)]=\"settingDetails.watermark_phone\" />\n                  <label for=\"phone\">Phone</label>\n                </div>\n                <div class=\"col-md-4\">\n                  <input id=\"email\" type=\"checkbox\" style=\"-webkit-appearance: checkbox;\"\n                    [(ngModel)]=\"settingDetails.watermark_email\" />\n                  <label for=\"email\">Email</label>\n                </div>\n              </div>\n            </div>\n            <div class=\"field-wrapper\">\n              <label>Privacy Settings<div class=\"questionInfo inline-relative\">\n                  <span class=\"qInfoIcon i-class\">i</span>\n                  <div class=\"tooltip-box-field\">\n                    Set the video visibility <br>mode to private or public.<br>\n                    In private mode, video will<br> be visible to the enrolled <br>students.\n                    In public mode,<br> video will be visible to<br> guest users & enrolled<br> students\n                  </div>\n                </div></label>\n              <div class=\"row\" style=\"padding: 15px 30px;\">\n                <label class=\"toggle\">\n                  <span class=\"toggle-label\" id=\"unassigned\"\n                    [ngClass]=\"(is_video_public)?'inactive_toggle_button':'active_toggle_button'\">Private</span>\n                  <input class=\"toggle-checkbox\" type=\"checkbox\" [(ngModel)]=\"is_video_public\">\n                  <div class=\"toggle-switch\"></div>\n                  <span class=\"toggle-label\" id=\"assigned\"\n                    [ngClass]=\"(is_video_public)?'active_toggle_button':'inactive_toggle_button'\">Public\n                  </span>\n                </label>\n              </div>\n            </div>\n            <br>\n            <div class=\"row\">\n              <div class=\"col-md-7\" style=\"padding-left: 0;\">\n                <div class=\"field-wrapper\">\n                  <label>Watermark\n                    <div class=\"questionInfo inline-relative\">\n                      <span class=\"qInfoIcon i-class\">i</span>\n                      <div class=\"tooltip-box-field\">\n                        Set the text to be shown <br> as\n                        watermark in the video\n                      </div>\n                    </div>\n                  </label>\n                  <div class=\"dropdown-div\">\n                    <input class=\"dropdown\" [(ngModel)]=\"settingDetails.video_watermark\" type=\"text\"\n                      placeholder=\"  enter watermark\" />\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-md-5\">\n                <div class=\"field-wrapper\" style=\"margin-left: -50px;\">\n                  <div class=\"dropdown-div\">\n                    <label>Colour <div class=\"questionInfo inline-relative\">\n                        <span class=\"qInfoIcon i-class\">i</span>\n                        <div class=\"tooltip-box-field\">\n                          Pick the choice of<br> colour\n                          for the watermark<br> text.\n                        </div>\n                      </div>&nbsp;&nbsp;\n                      <div class=\"row\" style=\"padding: 15px 30px;\">\n                        <input [(ngModel)]=\"settingDetails.watermark_color\" type=\"color\" />\n                      </div>\n                    </label>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"field-wrapper\">\n              <label>Opacity\n                <div class=\"questionInfo inline-relative\">\n                  <span class=\"qInfoIcon i-class\">i</span>\n                  <div class=\"tooltip-box-field\">\n                    It is the opacity of the <br>watermark text.\n                    It defines<br> how much watermark text<br>\n                    will obscure the <br>background image\n                  </div>\n                </div>\n              </label>\n              <div class=\"row\" style=\"padding: 15px 30px;\">\n                <div class=\"col-md-9\">\n                  <input type=\"range\" min=\"0.00\" max=\"1.00\" step=\"0.05\"\n                    [(ngModel)]=\"settingDetails.watermark_opacity\" />\n                </div>\n                <div class=\"col-md-3\">{{settingDetails.watermark_opacity}}</div>\n              </div>\n            </div>\n            <div class=\"field-wrapper\">\n              <label>Font Size <div class=\"questionInfo inline-relative\">\n                  <span class=\"qInfoIcon i-class\">i</span>\n                  <div class=\"tooltip-box-field\">\n                    It is the overall<br> size (height) of the<br>\n                    watermark text font<br>\n                    shown on the screen\n                  </div>\n                </div></label>\n              <div class=\"row\" style=\"padding: 15px 30px;\">\n                <div class=\"col-md-9\">\n                  <input type=\"range\" min=\"1\" max=\"100\" [(ngModel)]=\"settingDetails.watermark_font_size\" />\n                </div>\n                <div class=\"col-md-3\">{{settingDetails.watermark_font_size}} px</div>\n              </div>\n            </div>\n            <div class=\"field-wrapper\">\n              <label>Interval <div class=\"questionInfo inline-relative\">\n                  <span class=\"qInfoIcon i-class\">i</span>\n                  <div class=\"tooltip-box-field\">\n                    Specify the interval over<br> which\n                    watermark changes<br> position.\n                    The value is the <br> interval in\n                    seconds when <br>the text changes position.\n                  </div>\n                </div></label>\n              <div class=\"row\" style=\"padding: 15px 30px;\">\n                <div class=\"col-md-9\">\n                  <input type=\"range\" min=\"1\" max=\"100\" [(ngModel)]=\"settingDetails.watermark_text_moving_interval\" />\n                </div>\n                <div class=\"col-md-3\">{{settingDetails.watermark_text_moving_interval}} Sec</div>\n              </div>\n            </div>\n            <div class=\"field-wrapper\">\n              <label>Bandwidth Threshold Alerts <div class=\"questionInfo inline-relative\">\n                  <span class=\"qInfoIcon i-class\">i</span>\n                  <div class=\"tooltip-box-field\">\n                    Set limits (in percentage)<br> for\n                    bandwidth utilization<br> to receive\n                    the alerts in <br>SMS & email.\n                  </div>\n                </div></label>\n              <div class=\"row\" style=\"padding: 15px 30px;\">\n                <div class=\"col-md-9\">\n                  <input type=\"range\" min=\"1\" max=\"100\" [(ngModel)]=\"settingDetails.vdocipher_bandwidth_threshold\" />\n                </div>\n                <div class=\"col-md-3\">{{settingDetails.vdocipher_bandwidth_threshold}}%</div>\n              </div>\n            </div>\n            <div class=\"field-wrapper\">\n              <label>Storage Capacity Threshold Alerts <div class=\"questionInfo inline-relative\">\n                  <span class=\"qInfoIcon i-class\">i</span>\n                  <div class=\"tooltip-box-field\">\n                    Set limits (in percentage)<br> for\n                    storage utilization <br>to receive\n                    the alerts in SMS<br> & email\n                  </div>\n                </div></label>\n              <div class=\"row\" style=\"padding: 15px 30px;\">\n                <div class=\"col-md-9\">\n                  <input type=\"range\" min=\"1\" max=\"100\"\n                    [(ngModel)]=\"settingDetails.vdocipher_storage_capacity_threshold\" />\n                </div>\n                <div class=\"col-md-3\">{{settingDetails.vdocipher_storage_capacity_threshold}} %</div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"ga-modal-head\" style=\"text-align: right;\">\n        <div class=\"modal-footer\" style=\"padding: 0;border: none;\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"clearObject()\"\n            style=\"height: 30px;\">Cancel</button>\n          <button type=\"button\" class=\"btn btn-primary fullBlue\" (click)=\"Save_Setting_Details()\">Save </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/ecourse-file-manager/ecourse-list/ecourse-list.component.html":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/ecourse-file-manager/ecourse-list/ecourse-list.component.html ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"!schoolModel\" class=\"row\">\n  <div class=\"head\" id=\"addDiv\" style=\"text-align: right\">\n    <button class=\"btn_addecourse\" routerLink=\"/view/course/ecoursemapping\">\n      <i class=\"fa fa-plus\" aria-hidden=\"true\"></i> &nbsp; E-course &nbsp;\n    </button>\n  </div>\n</div>\n\n<div class=\"row  wrap-data\">\n  <div class=\"search-filter-wrapper\">\n    <input type=\"text\" style=\"width: 25%;padding: 5px;border: 1px solid #ddd;border-radius: 4px;margin-right: 5px;\"\n      #teacherSearch class=\"normal-field pull-right\" id=\"searchTeacher\" placeholder=\"Search\" [(ngModel)]=\"searchValue\"\n      (keyup)=\"searchTeacher()\">\n  </div>\n  <div class=\"col-md-3 ecourse-item\" *ngFor=\"let ecourse of searchData;  \">\n    <div class=\"ecourse-card\" (click)=\"getToSubject(ecourse)\">\n      <div class=\"head\" title=\"{{ecourse.course_type}}\">\n        <span>{{ecourse.course_type}}{{ecourse.eCourseType=='Online'? (Online):''}} </span>\n        <span style=\"float: right;\"> Total Size: {{(ecourse.size == 0.00) ? '-' : (ecourse.size | number:'.2-2')}}\n          <span *ngIf=\"ecourse.size!='0.00'\"> GB</span>\n        </span>\n      </div>\n      <div class=\"body\">\n        <span *ngIf=\"ecourse.categoryDtoList.length==0\" style=\"display: flex;font-size: 12px;padding-bottom: 5px;\">No\n          materials added</span>\n        <div style=\"flex-wrap: wrap;display: flex;flex-direction: row;\">\n          <div\n            style=\" width: 20%;justify-content: flex-start;display: flex;flex-direction: column;font-size:12px;padding-bottom:5px\"\n            *ngFor=\"let item of ecourse.categoryDtoList\">\n            <span\n              *ngIf=\"item.category_name != 'VDOCipher' && item.category_name != 'Youtube URL'\">{{item.category_name}} -\n              {{item.count}}</span>\n            <span *ngIf=\"item.category_name == 'VDOCipher'\">Video - {{item.count}}</span>\n            <span *ngIf=\"item.category_name == 'Youtube URL'\">Youtube Video - {{item.count}}</span>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n  <div class=\"col-md-12\" style=\"margin-top:12px;\" *ngIf=\"categiesList.length==0\">\n    {{outputMessage}}\n  </div>\n\n</div>\n\n<pagination style=\"margin-top: 2%;\" (goPage)=\"fetchTableDataByPage($event)\" (goNext)=\"fetchNext()\"\n  (goPrev)=\"fetchPrevious()\" [pagesToShow]=\"10\" [page]=\"PageIndex\" [perPage]=\"displayBatchSize\" [sizeArr]=\"sizeArr\"\n  [count]=\"totalRecords\" (sizeChange)=\"updateTableBatchSize($event)\">\n</pagination>\n<!-- Developed by- Nalini walunj\nPopup to show vimeo uploaded successfully msg\n-->\n<div id=\"thankYou\" class=\"modal fade\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h1>Thank You</h1>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"new-modules-list\">\n          <div class=\"module-title\">\n            <span>\n              Video is successfully Uploaded!\n            </span>\n          </div>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/ecourse-file-manager/ecourse-subject-list/ecourse-subject-list.component.html":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/ecourse-file-manager/ecourse-subject-list/ecourse-subject-list.component.html ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"head\" id=\"addDiv\" style=\"text-align: right\">\n    <button class=\"btn_addecourse\" (click)=\"gotoAddTopic()\">\n      <i class=\"fa fa-plus\" aria-hidden=\"true\" style=\"font-size: 14px;\"></i> Topic &nbsp;\n    </button>\n  </div>\n</div>\n\n<div>\n    <div class=\"row\">\n        <div class=\"col-md-12 subject-wrapper\" style=\"padding: 0;\">\n          <div class=\"subject-title\">\n            Subject List \n          </div>\n          <div class=\"deleteFile\" (click)=\"setRemoveDataFile()\">\n            Delete File\n          </div>\n        </div>\n      </div>\n      <div class=\"row\" *ngIf=\"subjectList.length==0\">\n        <div class=\"col-md-12 subject-wrapper\" style=\"margin: 2%;margin-left: 0;text-align: center;\">\n          <div>\n            {{outputMessage}}\n          </div>\n        </div>\n      </div>\n      \n      <div class=\"fluid-container data-wrapper\">\n        <div class=\"row main-topic-row\" *ngFor=\"let topic of subjectList;\">\n          <div class=\"row singleton-row col-md-12 topic-data main-topic-data\">\n            <!-- <div class=\"field-checkbox-wrapper\">\n              <input type=\"checkbox\" name=\"topicIds[]\" id=\"topic{{topic.topic_id}}\" class=\"topic-selector form-checkbox\">\n              <label for=\"topic{{topic.topic_id}}\"></label>\n            </div> -->\n      \n            <div class=\"col-md-12 topic-name\">\n              <div class=\"col-md-4\">\n              <span style=\"margin-right: 10px;\">\n              <button class=\"btn-ga-collapse\">\n                <i class=\"fa fa-minus\" *ngIf=\"topic.isExpand\" (click)=\"collapseAll(topic, false)\"></i>\n                <i class=\"fa fa-plus\" *ngIf=\"!topic.isExpand\" (click)=\"collapseAll(topic, true)\"></i>\n              </button> {{topic.subjectName}}</span>\n              </div>\n              <div class=\"col-md-7\">\n              <span *ngFor=\"let count of topic.category_count\" title=\"{{count.category_name}}\" class=\"category_name\">\n                <span *ngIf=\"count.category_name != 'VDOCipher' && count.category_name != 'Youtube URL'\">{{(count.category_name.length > 13) ? (count.category_name | slice:0:13) + '...' : count.category_name}}</span>\n                <span *ngIf=\"count.category_name == 'VDOCipher'\">Video</span>\n                <span *ngIf=\"count.category_name == 'Youtube URL'\">Youtube Video</span>\n                 - {{count.count}}\n              </span>\n              </div>\n            </div>\n            <div class=\"col-md-1\">\n              <div style=\"cursor: pointer;\">\n                <button class=\"btn btn-xs btn-ga-white\" (click)=\"uploadPopupOpen(topic)\"><i class=\"fa fa-upload\" title=\"Upload\"></i></button>\n                <!-- <button class=\"btn btn-xs btn-ga-white\" (click)=\"getToSubjectMaterials(topic)\">view topic</button> -->\n                <!-- <button class=\"btn btn-xs btn-ga-white\">Add Topic</button> -->\n              </div>\n            </div>\n          </div>\n          <div class=\"row col-md-12 p-0\" *ngIf=\"topic.isExpand\">\n            <div class=\"col-md-12 topic-material-data\">\n              <ng-container *ngTemplateOutlet=\"youtubeData; context:{$implicit: topic.studyMaterialMap.YoutubeURL, level: 1}\"></ng-container>\n              <ng-container *ngTemplateOutlet=\"VDOCipher ; context:{$implicit: topic.studyMaterialMap.VDOCipher , level: 1}\"></ng-container>\n              <ng-container *ngTemplateOutlet=\"assignmentData; context:{$implicit: topic.studyMaterialMap.Assignment, level: 1}\">\n              </ng-container>\n              <ng-container *ngTemplateOutlet=\"imagelistData; context:{$implicit: topic.studyMaterialMap.Images, level: 1}\"></ng-container>\n              <ng-container *ngTemplateOutlet=\"audioNotesData; context:{$implicit: topic.studyMaterialMap.AudioNotes, level: 1}\">\n              </ng-container>\n              <ng-container *ngTemplateOutlet=\"notesData; context:{$implicit: topic.studyMaterialMap.Notes, level: level+1}\">\n              </ng-container>\n              <ng-container *ngTemplateOutlet=\"Vimeo; context:{$implicit: topic.studyMaterialMap.Vimeo, level: level+1}\">\n              </ng-container>\n              <ng-container\n                *ngTemplateOutlet=\"previousYearQuesListData; context:{$implicit: topic.studyMaterialMap.PreviousYearQuestionsPaper, level: level+1}\">\n              </ng-container>\n              <ng-container *ngTemplateOutlet=\"slidesListData; context:{$implicit: topic.studyMaterialMap.Slides, level: level+1}\">\n              </ng-container>\n              <ng-container\n                *ngTemplateOutlet=\"studyMaterialList; context:{$implicit: topic.studyMaterialMap.EBook, level: level+1}\">\n              </ng-container>\n            </div>\n            <div class=\"row col-md-12 subTopics-data\" *ngIf=\"topic.isExpand\">\n              <ng-container *ngTemplateOutlet=\"recursiveNodes; context: { $implicit: topic, subLevel: 1 } \">\n              </ng-container>\n            </div>\n          </div>\n        </div>\n      </div>\n</div>\n\n\n<ng-template #recursiveNodes let-subTopics let-level=\"subLevel\">\n  <div class=\"row topic-row\" *ngFor=\"let topic of subTopics.subtopicList\">\n    <div class=\"row singleton-row col-md-12 topic-data\" style=\"background: #ebf6ff;\">\n      <div class=\"col-md-7 topic-name\" [ngStyle]=\"{'padding-left': level+'em'}\">\n        <button class=\"btn-ga-collapse\">\n          <i class=\"fa fa-minus\" *ngIf=\"topic.isExpand\" (click)=\"toggleObject(topic)\"></i>\n          <i class=\"fa fa-plus\" *ngIf=\"!topic.isExpand && (calculateStudyMaterialMapLength(topic)>0 || topic.subtopicList?.length>0)\" (click)=\"toggleObject(topic)\"></i>\n        </button>\n        <span class=\"txt-title\"\n          title=\"{{topic.topicName}}\" style=\"font-weight: 600;\">{{(topic.topicName?.length>60)?(topic.topicName | slice:0:60) + '...':(topic.topicName)}}</span>\n        <!-- **{{topic.studyMaterialMapLength}}** {{topic.subtopicList.length}} -->\n      </div>\n      <div class=\"col-md-4\">\n\n      </div>\n      <div class=\"col-md-1\" style=\"padding-right: 0;\">\n        <div style=\"float: right;\">\n          <button class=\"btn btn-xs btn-ga-white\" (click)=\"uploadTopicLevelPopupOpen(topic, subTopics)\"><i class=\"fa fa-upload\" title=\"Upload\"></i></button>\n          <!-- <button class=\"btn btn-xs btn-ga-white\">Add Topic</button> -->\n        </div>\n      </div>\n    </div>\n    <div class=\"row col-md-12 p-0\" *ngIf=\"topic.isExpand\">\n      <div class=\"row col-md-12 topic-material-data\">\n        <ng-container *ngTemplateOutlet=\"youtubeData; context:{$implicit: topic.studyMaterialMap.YoutubeURL, level: level+1}\">\n        </ng-container>\n        <ng-container *ngTemplateOutlet=\"VDOCipher; context:{$implicit: topic.studyMaterialMap.VDOCipher, level: level+1}\">\n        </ng-container>\n        <ng-container *ngTemplateOutlet=\"assignmentData; context:{$implicit: topic.studyMaterialMap.Assignment, level: level+1}\">\n        </ng-container>\n        <ng-container *ngTemplateOutlet=\"imagelistData; context:{$implicit: topic.studyMaterialMap.Images, level: level+1}\">\n        </ng-container>\n        <ng-container *ngTemplateOutlet=\"audioNotesData; context:{$implicit: topic.studyMaterialMap.AudioNotes, level: level+1}\">\n        </ng-container>\n        <ng-container *ngTemplateOutlet=\"notesData; context:{$implicit: topic.studyMaterialMap.Notes, level: level+1}\">\n        </ng-container>\n        <ng-container *ngTemplateOutlet=\"Vimeo; context:{$implicit: topic.studyMaterialMap.Vimeo, level: level+1}\">\n        </ng-container>\n        <ng-container\n          *ngTemplateOutlet=\"previousYearQuesListData; context:{$implicit: topic.studyMaterialMap.PreviousYearQuestionsPaper, level: level+1}\">\n        </ng-container>\n        <ng-container *ngTemplateOutlet=\"slidesListData; context:{$implicit: topic.studyMaterialMap.Slides, level: level+1}\">\n        </ng-container>\n        <ng-container\n          *ngTemplateOutlet=\"studyMaterialList; context:{$implicit: topic.studyMaterialMap.EBook, level: level+1}\">\n        </ng-container>\n\n      </div>\n      <div class=\"row col-md-12 subTopics-data\">\n        <ng-container *ngTemplateOutlet=\"recursiveNodes; context: { $implicit: topic, subLevel: level+1 } \">\n        </ng-container>\n      </div>\n    </div>\n  </div>\n</ng-template>\n\n\n<ng-template #youtubeData let-youtube let-level=\"level\">\n  <div class=\"row singleton-row material-row\" *ngFor=\"let video of youtube\">\n    <div class=\"col-md-1\" style=\"width: 1%;\">\n      <input type=\"checkbox\" (change)=\"checkSelectedFile(video, $event.target.checked)\" [(ngModel)]=\"video.selected\" style=\"-webkit-appearance: checkbox;\">\n    </div>\n    <div class=\"col-md-6 material-title txt-color\" (click)=\"getVdocipherVideoOtp(video)\" [ngStyle]=\"{'padding-left': level+'em'}\">\n      <h4 class=\"file__title\" title=\"{{video.title}}\">\n        <img src=\"{{video.posterList[0].posterUrl}}\" style=\"width:20px; height:20px;\" aria-hidden=\"true\" *ngIf=\"(video.posterList!=null && video.posterList?.length>0 && video.posterList[0].posterUrl!=null) && video.category_id==230\">\n        <i class=\"fa fa-youtube-play text-red\" aria-hidden=\"true\" *ngIf=\"(video.posterList==null || video.posterList?.length == 0 || video.posterList[0].posterUrl==null) && video.category_id==230\"></i>        \n        <!-- <div> -->\n          <span\n            title=\"{{video.title}}\" class=\"txt-color txt-title\" (click)=\"playYoutubeVideo(video)\" style=\"cursor: pointer;\">{{(video.title?.length>60)?(video.title | slice:0:60) + '...':(video.title)}}</span>\n        <!-- </div> -->\n      </h4>\n    </div>\n    <div class=\"col-md-1 txt-font\">\n      Youtube Video\n    </div>\n    <div class=\"col-md-1\"><span style=\"font-size: 12px;color: #eb634b;\" *ngIf=\"video.is_hide == 'Y'\">Hidden</span></div>\n    <div class=\"col-md-1\"></div>\n    <div class=\"col-md-1\"></div>\n    <div class=\"col-md-1\" style=\"padding:0\">\n      <div class=\"action-buttons\" style=\"float: right;\">\n        <button class=\"btn btn-xs btn-ga-white\" (click)=\"editFile(video)\">Edit</button>\n      </div>\n    </div>\n  </div>\n</ng-template>\n\n<ng-template #VDOCipher let-youtube let-level=\"level\">\n  <div class=\"row singleton-row material-row\" *ngFor=\"let video of youtube\">\n    <div class=\"col-md-1\" style=\"width: 1%;\">\n      <input type=\"checkbox\" (change)=\"checkVDOCipherSelectedFile(video, $event.target.checked)\" [(ngModel)]=\"video.selected\" style=\"-webkit-appearance: checkbox;\">\n    </div>\n    <div class=\"col-md-5 material-title txt-color\" (click)=\"getVdocipherVideoOtp(video)\" [ngStyle]=\"{'padding-left': level+'em'}\">\n      <h4 class=\"file__title\" title=\"{{video.title}}\">\n        <img src=\"{{video.posterList[0].posterUrl}}\" style=\"width:20px; height:20px;\" aria-hidden=\"true\" *ngIf=\"(video.posterList!=null && video.posterList?.length && video.posterList[0].posterUrl!=null)\">\n        <i class=\"fa fa-play-circle-o\" aria-hidden=\"true\" style=\"color: blue;font-size: 16px;\" *ngIf=\"(video.posterList==null  || !video.posterList?.length || video.posterList[0].posterUrl==null)\"></i>\n\n        <a class=\"txt-color\">\n          <span class=\"txt-title\"  style=\"cursor: pointer\"\n            title=\"{{video.title}}\">{{(video.title?.length>60)?(video.title | slice:0:60) + '...':(video.title)}}</span>\n        </a>\n      </h4>\n    </div>\n    <div class=\"col-md-1 txt-font\">\n      <span *ngIf=\"video.video_status=='ready'\">{{video.size | number:'.2-2'}}&nbsp;MB</span>\n    </div>\n    <div class=\"col-md-1 txt-font\" style=\"padding-right: 0;\">\n      <span *ngIf=\"video.video_status=='ready'\">{{video.watch_count}} &nbsp;viewed </span>\n    </div>\n    <div class=\"col-md-2 txt-font\">\n      <span [ngClass]=\"{'hide': video.video_time==null}\" *ngIf=\"video.video_status=='ready'\">  {{video.video_time }}&nbsp;Hr</span>&nbsp;\n      <span style=\"font-size: 12px;color: #eb634b;\" *ngIf=\"video.is_hide == 'Y'\">Hidden</span>\n    </div>\n    <div class=\"col-md-1 txt-font\" style=\"color:blue;\" *ngIf=\"video.video_status=='ready'\">\n        {{video.video_status |titlecase}} &nbsp;\n      </div>\n      <div class=\"col-md-1 txt-font\" style=\"color:blue;\" *ngIf=\"video.video_status!='ready'\">\n        Processing &nbsp;\n      </div>\n    <div class=\"col-md-2\" style=\"padding: 0;\">\n      <div class=\"action-buttons\" style=\"float: right;\">\n        <button class=\"btn btn-xs btn-ga-white\" (click)=\"editFile(video)\">Edit</button>\n        <button class=\"btn btn-xs btn-ga-white\" *ngIf=\"video.is_video_linked!='N'\" (click)=\"deleteVideoCipherFile(video,'unlink')\">Unlink</button>\n        <button class=\"btn btn-xs btn-ga-white\" *ngIf=\"video.is_video_linked=='N'\" (click)=\"deleteVideoCipherFile(video,'unlink all')\">Unlink All</button>\n      </div>\n    </div>\n  </div>\n</ng-template>\n\n<ng-template #Vimeo let-youtube let-level=\"level\">\n  <div class=\"row singleton-row material-row\" *ngFor=\"let video of youtube\">\n    <div class=\"col-md-1\" style=\"width: 1%;\">\n      <input type=\"checkbox\" (change)=\"checkVDOCipherSelectedFile(video, $event.target.checked)\" [(ngModel)]=\"video.selected\" style=\"-webkit-appearance: checkbox;\">\n    </div>\n    <div class=\"col-md-5 material-title txt-color\" (click)=\"playVimeoVideo(video)\" [ngStyle]=\"{'padding-left': level+'em'}\">\n      <h4 class=\"file__title\" title=\"{{video.title}}\">\n        <img src=\"{{video.posterList[0].posterUrl}}\" style=\"width:20px; height:20px;\" aria-hidden=\"true\" *ngIf=\"(video.posterList!=null && video.posterList?.length && video.posterList[0].posterUrl!=null)\">\n        <i class=\"fa fa-play-circle-o\" aria-hidden=\"true\" style=\"color: blue;font-size: 16px;\" *ngIf=\"(video.posterList==null  || !video.posterList?.length || video.posterList[0].posterUrl==null)\"></i>\n\n        <a class=\"txt-color\">\n          <span class=\"txt-title\"  style=\"cursor: pointer\"\n            title=\"{{video.title}}\">{{(video.title?.length>60)?(video.title | slice:0:60) + '...':(video.title)}}</span>\n        </a>\n      </h4>\n    </div>\n    <div class=\"col-md-1 txt-font\">\n      <span *ngIf=\"video.video_status=='ready'\">{{video.size | number:'.2-2'}}&nbsp;MB</span>\n    </div>\n    <div class=\"col-md-1 txt-font\" style=\"padding-right: 0;\" (click)=\"viewUserListFun(video)\">\n      <span style=\"cursor: pointer;\" *ngIf=\"video.video_status=='ready'\">{{video.watch_count}} &nbsp;viewed </span>\n    </div>\n    <div class=\"col-md-2 txt-font\">\n      <span [ngClass]=\"{'hide': video.video_time==null}\" *ngIf=\"video.video_status=='ready'\">  {{video.video_time }}&nbsp;Hr &nbsp;</span>\n      <span style=\"font-size: 12px;color: #eb634b;\" *ngIf=\"video.is_hide == 'Y'\">Hidden</span>\n    </div>\n    <div class=\"col-md-1 txt-font\" style=\"color:blue;\" *ngIf=\"video.video_status=='ready'\">\n        {{video.video_status |titlecase}} &nbsp;\n      </div>\n      <div class=\"col-md-1 txt-font\" style=\"color:blue;\" *ngIf=\"video.video_status!='ready'\">\n        Processing &nbsp;\n      </div>\n    <div class=\"col-md-2\" style=\"padding: 0;\">\n      <div class=\"action-buttons\" style=\"float: right;\">\n        <button style=\"margin-left: 0;\" class=\"btn btn-xs btn-ga-white\" (click)=\"editFile(video)\">Edit</button>\n        <button style=\"margin-left: 0;padding: 0;\" class=\"btn btn-xs btn-ga-white\" *ngIf=\"video.is_video_linked!='N'\" (click)=\"deleteVideoCipherFile(video,'unlink')\">Unlink</button>\n        <button style=\"margin-left: 0;padding: 0;\" class=\"btn btn-xs btn-ga-white\" *ngIf=\"video.is_video_linked=='N'\" (click)=\"deleteVideoCipherFile(video,'unlink all')\">Unlink All</button>\n        <button style=\"margin-left: 0;\" class=\"btn btn-xs btn-ga-white\" *ngIf=\"vimeo_video_downlodable\" (click)=\"getVimeoDownloadData(video)\">\n          <i class=\"fa fa-download\" title=\"Download\"></i>\n        </button>\n      </div>\n    </div>\n  </div>\n</ng-template>\n\n<ng-template #imagelistData let-image let-level=\"level\">\n  <div class=\"row singleton-row material-row\" *ngFor=\"let file of image\">\n    <div class=\"col-md-1\" style=\"width: 1%;\">\n      <input type=\"checkbox\" (change)=\"checkSelectedFile(file, $event.target.checked)\" [(ngModel)]=\"file.selected\" style=\"-webkit-appearance: checkbox;\">\n    </div>\n    <div class=\"col-md-6 material-title txt-color \" [ngStyle]=\"{'padding-left': level+'em'}\">\n      <h4 class=\"file__title\" title=\"{{file.title}}\">\n        <i [class]=\"file?.extension\" aria-hidden=\"true\"></i>\n        <span class=\"txt-title\"\n          title=\"{{file.title}}\">{{(file.title?.length>60)?(file.title | slice:0:60) + '...':(file.title)}}</span>\n      </h4>\n    </div>\n    <div class=\"col-md-1 txt-font\">\n      {{file.size | number:'.2-2'}}&nbsp;MB\n    </div>\n    <div class=\"col-md-2 txt-font\">\n        {{file.downloads}} &nbsp;Downloads &nbsp;\n      </div>\n      <div class=\"col-md-1\"><span style=\"font-size: 12px;color: #eb634b;\" *ngIf=\"file.is_hide == 'Y'\">Hidden</span></div>\n    <div class=\"col-md-2\" style=\"padding: 0;\">\n      <div class=\"action-buttons\" style=\"float: right;\">\n        <button class=\"btn btn-xs btn-ga-white\" (click)=\"editFile(file)\">Edit</button>\n        <button class=\"btn btn-xs btn-ga-white\" (click)=\"addDownloadCount(file)\">\n          <a [href]=\"file.file_name\" class=\"btn-ga-white-download\" [download]=\"file.title\"><i class=\"fa fa-download\" title=\"Download\"></i></a>\n        </button>\n      </div>\n    </div>\n  </div>\n</ng-template>\n\n<ng-template #assignmentData let-assignment let-level=\"level\">\n  <div class=\"row singleton-row material-row\" *ngFor=\"let file of assignment\">\n    <div class=\"col-md-1\" style=\"width: 1%;\">\n      <input type=\"checkbox\" (change)=\"checkSelectedFile(file, $event.target.checked)\" [(ngModel)]=\"file.selected\" style=\"-webkit-appearance: checkbox;\">\n    </div>\n    <div class=\"col-md-6 material-title txt-color\" [ngStyle]=\"{'padding-left': level+'em'}\">\n      <h4 class=\"file__title\" title=\"{{file.title}}\">\n        <i [class]=\"file?.extension\" aria-hidden=\"true\"></i>\n        <span class=\"txt-title\"\n          title=\"{{file.title}}\">{{(file.title?.length>60)?(file.title | slice:0:60) + '...':(file.title)}}</span>\n      </h4>\n    </div>\n    <div class=\"col-md-1 txt-font\">\n      {{file.size | number:'.2-2'}}&nbsp;MB\n    </div>\n    <div class=\"col-md-2 txt-font\">\n        {{file.downloads}} &nbsp;Downloads &nbsp;\n      </div>\n      <div class=\"col-md-1\"><span style=\"font-size: 12px;color: #eb634b;\" *ngIf=\"file.is_hide == 'Y'\">Hidden</span></div>\n    <div class=\"col-md-2\" style=\"padding: 0;\">\n      <div class=\"action-buttons\" style=\"float: right;\">\n        <button class=\"btn btn-xs btn-ga-white\" (click)=\"editFile(file)\">Edit</button>\n        <button class=\"btn btn-xs btn-ga-white\" (click)=\"addDownloadCount(file)\">\n          <a [href]=\"file.file_name\" class=\"btn-ga-white-download\" [download]=\"file.title\"><i class=\"fa fa-download\" title=\"Download\"></i></a>\n        </button>\n        <!-- <button class=\"btn btn-xs btn-ga-white\" (click)=\"setRemoveDataFile()\"><i class=\"fa fa-trash\" title=\"Delete\"></i></button> -->\n      </div>\n    </div>\n  </div>\n</ng-template>\n\n<ng-template #notesData let-notes let-level=\"level\">\n  <div class=\"row singleton-row material-row\" *ngFor=\"let file of notes\">\n    <div class=\"col-md-1\" style=\"width: 1%;\">\n      <input type=\"checkbox\" (change)=\"checkSelectedFile(file, $event.target.checked)\" [(ngModel)]=\"file.selected\" style=\"-webkit-appearance: checkbox;\">\n    </div>\n    <div class=\"col-md-6 material-title txt-color\" [ngStyle]=\"{'padding-left': level+'em'}\">\n      <h4 class=\"file__title\" title=\"{{file.title}}\">\n        <i [class]=\"file?.extension\" aria-hidden=\"true\"></i>\n        <span class=\"txt-title\"\n          title=\"{{file.title}}\">{{(file.title?.length>60)?(file.title | slice:0:60) + '...':(file.title)}}</span>\n      </h4>\n    </div>\n    <div class=\"col-md-1 txt-font\">\n      {{file.size | number :'.2-2'}}&nbsp;MB\n    </div>\n    <div class=\"col-md-2 txt-font\">\n        {{file.downloads}} &nbsp;Downloads &nbsp;\n      </div>\n      <div class=\"col-md-1\"><span style=\"font-size: 12px;color: #eb634b;\" *ngIf=\"file.is_hide == 'Y'\">Hidden</span></div>\n    <div class=\"col-md-2\" style=\"padding: 0;\">\n      <div class=\"action-buttons\" style=\"float: right;\">\n        <button class=\"btn btn-xs btn-ga-white\" (click)=\"editFile(file)\">Edit</button>\n        <button class=\"btn btn-xs btn-ga-white\" (click)=\"addDownloadCount(file)\">\n          <a [href]=\"file.file_name\" class=\"btn-ga-white-download\" [download]=\"file.title\"><i class=\"fa fa-download\" title=\"Download\"></i></a>\n        </button>\n      </div>\n    </div>\n  </div>\n</ng-template>\n\n<ng-template #audioNotesData let-audios let-level=\"level\">\n  <div class=\"row singleton-row material-row\" *ngFor=\"let audio of audios\">\n    <div class=\"col-md-1\" style=\"width: 1%;\">\n      <input type=\"checkbox\" (change)=\"checkSelectedFile(audio, $event.target.checked)\" [(ngModel)]=\"audio.selected\" style=\"-webkit-appearance: checkbox;\">\n    </div>\n    <div class=\"col-md-6 material-title txt-color\" [ngStyle]=\"{'padding-left': level+'em'}\">\n      <h4 class=\"file__title\" title=\"{{audio.title}}\">\n        <i [class]=\"audio?.extension\" aria-hidden=\"true\"></i>\n        <span class=\"txt-title\"\n          title=\"{{audio.title}}\">{{(audio.title?.length>60)?(audio.title | slice:0:60) + '...':(audio.title)}}</span>\n      </h4>\n    </div>\n    <div class=\"col-md-1 txt-font\">\n      {{audio.size | number :'.2-2'}}&nbsp;MB\n    </div>\n    <div class=\"col-md-2 txt-font\">\n        {{audio.downloads}} &nbsp;Downloads &nbsp;\n      </div>\n      <div class=\"col-md-1\"><span style=\"font-size: 12px;color: #eb634b;\" *ngIf=\"audio.is_hide == 'Y'\">Hidden</span></div>\n    <div class=\"col-md-2\" style=\"padding: 0;\">\n      <div class=\"action-buttons\" style=\"float: right;\">\n        <button class=\"btn btn-xs btn-ga-white\" (click)=\"editFile(audio)\">Edit</button>\n        <button class=\"btn btn-xs btn-ga-white\" (click)=\"addDownloadCount(audio)\">\n          <a [href]=\"audio.file_name\" class=\"btn-ga-white\" [download]=\"audio.title\"><i class=\"fa fa-download\" title=\"Download\"></i></a>\n        </button>\n      </div>\n    </div>\n  </div>\n</ng-template>\n\n<ng-template #previousYearQuesListData let-previousYearQuesList let-level=\"level\">\n  <div class=\"row singleton-row material-row\" *ngFor=\"let file of previousYearQuesList\">\n    <div class=\"col-md-1\" style=\"width: 1%;\">\n      <input type=\"checkbox\" (change)=\"checkSelectedFile(file, $event.target.checked)\" [(ngModel)]=\"file.selected\" style=\"-webkit-appearance: checkbox;\">\n    </div>\n    <div class=\"col-md-6 material-title txt-color\" [ngStyle]=\"{'padding-left': level+'em'}\">\n      <h4 class=\"file__title\" title=\"{{file.title}}\">\n        <i [class]=\"file?.extension\" aria-hidden=\"true\"></i>\n        <span class=\"txt-title\"\n          title=\"{{file.title}}\">{{(file.title?.length>60)?(file.title | slice:0:60) + '...':(file.title)}}</span>\n      </h4>\n    </div>\n    <div class=\"col-md-1 txt-font\">\n      {{file.size | number :'.2-2'}}&nbsp;MB\n    </div>\n    <div class=\"col-md-2 txt-font\">\n        {{file.downloads}} &nbsp;Downloads &nbsp;\n      </div>\n      <div class=\"col-md-1\"><span style=\"font-size: 12px;color: #eb634b;\" *ngIf=\"file.is_hide == 'Y'\">Hidden</span></div>\n    <div class=\"col-md-2\" style=\"padding: 0;\">\n      <div class=\"action-buttons\" style=\"float: right;\">\n        <button class=\"btn btn-xs btn-ga-white\" (click)=\"editFile(file)\">Edit</button>\n        <button class=\"btn btn-xs btn-ga-white\" (click)=\"addDownloadCount(file)\">\n          <a [href]=\"file.file_name\" class=\"btn-ga-white-download\" [download]=\"file.title\"><i class=\"fa fa-download\" title=\"Download\"></i></a>\n        </button>\n      </div>\n    </div>\n  </div>\n</ng-template>\n\n\n<ng-template #slidesListData let-slidesList let-level=\"level\">\n  <div class=\"row singleton-row material-row\" *ngFor=\"let file of slidesList\">\n    <div class=\"col-md-1\" style=\"width: 1%;\">\n      <input type=\"checkbox\" (change)=\"checkSelectedFile(file, $event.target.checked)\" [(ngModel)]=\"file.selected\" style=\"-webkit-appearance: checkbox;\">\n    </div>\n    <div class=\"col-md-6 material-title txt-color\" [ngStyle]=\"{'padding-left': level+'em'}\">\n      <h4 class=\"file__title\" title=\"{{file.title}}\">\n        <i [class]=\"file?.extension\" aria-hidden=\"true\"></i>\n        <span class=\"txt-title\"\n          title=\"{{file.title}}\">{{(file.title?.length>60)?(file.title | slice:0:60) + '...':(file.title)}}</span>\n      </h4>\n    </div>\n    <div class=\"col-md-1 txt-font\">\n      {{file.size | number:'.2-2'}}&nbsp;MB\n    </div>\n    <div class=\"col-md-2 txt-font\">\n        {{file.downloads}} &nbsp;Downloads &nbsp;\n      </div>\n      <div class=\"col-md-1\"><span style=\"font-size: 12px;color: #eb634b;\" *ngIf=\"file.is_hide == 'Y'\">Hidden</span></div>\n    <div class=\"col-md-2\" style=\"padding: 0;\">\n      <div class=\"action-buttons\" style=\"float: right;\">\n        <button class=\"btn btn-xs btn-ga-white\" (click)=\"editFile(file)\">Edit</button>\n        <button class=\"btn btn-xs btn-ga-white\" (click)=\"addDownloadCount(file)\">\n          <a [href]=\"file.file_name\" class=\"btn-ga-white-download\" [download]=\"file.title\"><i class=\"fa fa-download\" title=\"Download\"></i></a>\n        </button>\n      </div>\n    </div>\n  </div>\n</ng-template>\n\n<ng-template #studyMaterialList let-studyList let-level=\"level\">\n  <div class=\"row singleton-row material-row\" *ngFor=\"let file of studyList\">\n    <div class=\"col-md-1\" style=\"width: 1%;\">\n      <input type=\"checkbox\" (change)=\"checkSelectedFile(file, $event.target.checked)\" [(ngModel)]=\"file.selected\" style=\"-webkit-appearance: checkbox;\">\n    </div>\n    <div class=\"col-md-6 material-title txt-color\" [ngStyle]=\"{'padding-left': level+'em'}\">\n      <h4 class=\"file__title\" title=\"{{file.title}}\">\n        <i [class]=\"file?.extension\" aria-hidden=\"true\"></i>\n        <span class=\"txt-title\"\n          title=\"{{file.title}}\">{{(file.title?.length>60)?(file.title | slice:0:60) + '...':(file.title)}}</span>\n      </h4>\n    </div>\n    <div class=\"col-md-1 txt-font\">\n      {{file.size | number:'.2-2'}}&nbsp;MB\n    </div>\n    <div class=\"col-md-2 txt-font\">\n        {{file.downloads}} &nbsp;Downloads\n      </div>\n      <div class=\"col-md-1\"><span style=\"font-size: 12px;color: #eb634b;\" *ngIf=\"file.is_hide == 'Y'\">Hidden</span></div>\n    <div class=\"col-md-2\" style=\"padding: 0;\">\n      <div class=\"action-buttons\" style=\"float: right;\">\n        <button class=\"btn btn-xs btn-ga-white\" (click)=\"editFile(file)\">Edit</button>\n        <button class=\"btn btn-xs btn-ga-white\" (click)=\"addDownloadCount(file)\">\n          <a [href]=\"file.file_name\" class=\"btn-ga-white-download\" [download]=\"file.title\"><i class=\"fa fa-download\" title=\"Download\"></i></a>\n        </button>\n      </div>\n    </div>\n  </div>\n</ng-template>\n\n<div class=\"ga-modal-wrapper\" *ngIf=\"showModal\">\n  <div class=\"ga-modal-container\">\n    <div class=\"ga-modal\">\n      <div class=\"ga-modal-head\" *ngIf=\"type!='unlink all' && type!='unlink'\">\n        <span>Do you want to {{type}} this file ?</span>\n      </div>\n      <div class=\"ga-modal-head\" *ngIf=\"type=='unlink all'\">\n        <span>Do you want to {{type}} video(s) ?</span>\n      </div>\n      <div class=\"ga-modal-head\" *ngIf=\"type=='unlink'\">\n        <span>Do you want to {{type}} this video ?</span>\n      </div>\n      <div class=\"ga-modal-body\">\n        <div class=\"row upload-box\">\n          <div class=\"col-md-12 file-form\">\n            <button class=\"btn btn-xs btn-ga-white btn-border btn-type\" (click)=\"removeData(type)\">{{type|titlecase}}</button>\n            <button class=\"btn btn-xs btn-ga-white btn-border\" (click)=\"showModal = false\">Cancel</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"ga-modal-wrapper\" *ngIf=\"showEditModal\">\n  <div class=\"ga-modal-container\">\n    <div class=\"ga-modal\" style=\"max-width: 50%;margin-top: 10%;\">\n      <div class=\"ga-modal-head\">\n        <span>Edit File</span>\n      </div>\n      <div class=\"ga-modal-body\" style=\"text-align: left;\">\n        <div class=\"row upload-box\">\n          <div class=\"c-lg-12 field-wrapper\">\n            <label>Title</label>\n            <input type=\"text\" class=\"form-ctrl\" style=\"margin-top: 5px;\" placeholder=\"Please enter title\" id=\"youtubeUrl\" name=\"youtubeUrl\" [(ngModel)]=\"editObj.title\">\n          </div>\n          <div class=\"col-md-12 file-form\" style=\"margin-top: 10px;\" *ngIf=\"editObj.extension == 'fa fa-file-pdf-o pdf-color' || editObj.extension == 'fa fa-file-powerpoint-o text-blue' \">\n            <div class=\"form-group\">\n              <input type=\"checkbox\" style=\"-webkit-appearance: checkbox;\" [(ngModel)]=\"editObj.is_readonly\">\n              <label class=\"title\">Is Read-Only</label>\n            </div>\n          </div>\n          <div class=\"col-md-12 file-form field-wrapper\" style=\"display: -webkit-box;-webkit-box-align: center;\" *ngIf=\"editObj.category_id == 235\" style=\"margin-top: 10px;\">\n              <label>Watch Multiplier</label>\n              <input type=\"text\" class=\"form-ctrl\" style=\"margin-top: 5px;\" placeholder=\"Please enter watch multiplier\" id=\"manual_multiplier_update\" name=\"manual_multiplier_update\" [(ngModel)]=\"editObj.watch_multiplier\">\n          </div>\n          <div class=\"c-lg-12 field-wrapper\" style=\"display: -webkit-box;-webkit-box-align: center;\">\n            <div class=\"c-lg-6\" style=\"padding-left: 0;\">\n            <div class=\"c-md-4 main-setting\" style=\"padding-left: 0;\">\n              <label for=\"ch18\">File Hide</label>\n            </div>\n            <div class=\"c-md-5\">\n              <label class=\"switch switch-n\">\n                <input type=\"checkbox\" [checked]=\"(editObj.is_hide)\"\n                  [(ngModel)]=\"editObj.is_hide\" name=\"sFilter\" class=\"form-radio\" value=\"is_hide\"\n                  id=\"is_hide\">\n                <span class=\"slider round\"></span>\n              </label>\n            </div>\n          </div>\n          <div class=\"c-lg-4\" style=\"padding-left: 0;\">\n            <div class=\"field-wrapper datePickerBox has-value\" style=\"padding-top: 8px;\">\n              <label for=\"fromDate\" style=\"font-size: 13px; padding: 1px;\">End Date</label>\n              <input type=\"text\" value=\"\" id=\"fromDate\" class=\"form-ctrl bsDatepicker\" style=\"border: solid 1px #e2ebee;\n              border-radius: 4px;\" readonly=\"true\" name=\"fromDate\" [(ngModel)]=\"editObj.file_visibility_till_date\" bsDatepicker />\n            </div>\n          </div>\n          </div>\n          <div class=\"col-md-12 file-form\" style=\"text-align: right;margin-top: 10px;\">\n            <button class=\"btn btn-xs btn-ga-white btn-border btn-type\" style=\"border: 1px solid #07f;background: #07f;color: white;\" (click)=\"updateFile()\">Update</button>\n            <button class=\"btn btn-xs btn-ga-white btn-border\" style=\"border: 1px solid #07f;color: #07f;\" (click)=\"cancelEditFile()\">Cancel</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"ga-modal-wrapper\" [hidden]=\"showVideo\">\n  <div class=\"ga-modal-container\">\n    <div class=\"ga-modal\" >\n      <div class=\"ga-modal-head\" style=\"text-align: left;padding:.5em 1em .5em 1em\" >\n        <span>{{tempData.title}}</span>\n\n\n        <!-- <div class=\"btn_cross\" >  -->\n            <button  class=\"btn btn-xs btn-ga-white\" style=\"float: right;font-size: 14px;\" (click)=\"stopVideo()\">X</button>\n          <!-- </div> -->\n      </div>\n      <div class=\"ga-modal-body\">\n        <div class=\"row upload-box\">\n          <div id=\"embedBox\" style=\"width:700px;max-width:100%;height:auto;\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal topic-add-model\" id=\"addTopic\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\t\n  <div class=\"modal-dialog\" role=\"document\">\t\n    <div class=\"modal-content\">\t\n      <div class=\"modal-header\">\t\n        <h2 class=\"modal-title\" id=\"addTopic\">Add Topic</h2>\t\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Cancel\" (click)=\"clearObject()\">\t\n          <span aria-hidden=\"true\">&times;</span>\t\n        </button>\t\n      </div>\t\n      <div class=\"modal-body\">\t\n        <div class=\"model_body_div\">\t\n          <div class=\"field-wrapper\">\t\n            <label *ngIf=\"!isProfessional\">Standard Name<span class=\"text-danger\">*</span></label>\t\n            <label *ngIf=\"isProfessional\">Master Course<span class=\"text-danger\">*</span></label>\t\n            <div class=\"dropdown-div\">\t\n              <select class=\"dropdown\" [(ngModel)]=\"addTopic.standard_id\" (change)=\"getAllSubjectList($event.target.value)\">\t\n                <option value=\"-1\">   Select Standard </option>\t\n                <option *ngFor=\"let standard of standardData;let i=index; \" [value]=\"standard.standard_id\" title=\"{{standard.standard_name}}\">\t\n                  {{standard.standard_name.length>30 ?  (standard.standard_name | slice:0:30) + '...' : standard.standard_name}}</option>\t\n              </select>\t\n            </div>\t\n          </div>\t\n          <div class=\"field-wrapper\">\t\n            <label *ngIf=\"!isProfessional\">Subject Name<span class=\"text-danger\">*</span></label>\t\n            <label *ngIf=\"isProfessional\">Course<span class=\"text-danger\">*</span></label>\t\n            <div class=\"dropdown-div\">\t\n              <select class=\"dropdown\"  [(ngModel)]=\"addTopic.subject_id\">\t\n                <option value=\"-1\"> Select Subject </option>\t\n                <option *ngFor=\"let subject of subjectTempData;let i=index; \" [value]=\"subject.subject_id\" title=\"{{subject.subject_name}}\">\t\n                  {{subject.subject_name.length>30 ?  (subject.subject_name | slice:0:30) + '...' : subject.subject_name}}\t\n                </option>\t\n              </select>\t\n            </div>\t\n          </div>\t\n          <div class=\"field-wrapper\">\t\n            <label>Topic Name <span class=\"text-danger\">*</span></label>\t\n            <div class=\"dropdown-div\">\t\n                <input class=\"dropdown\" [(ngModel)]=\"addTopic.name\" type=\"text\" placeholder=\"  Enter Topic Name\" />\t\n            </div>\t\n          </div>\t\n          <div class=\"field-wrapper\">\t\n            <label>Duration (only minutes)</label>\t\n            <div class=\"dropdown-div\">\t\n              <input class=\"dropdown\" maxlength=\"3\" onkeypress=\"return (event.charCode >= 48 && event.charCode <= 57)\" [(ngModel)]=\"addTopic.estimated_time\" type=\"text\" placeholder=\"  Enter Estimated Time\" />\t\n            </div>\t\n          </div>\t\n        </div>\t\n      </div>\t\n      <div class=\"modal-footer\">\t\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"clearObject()\">Cancel</button>\t\n        <button type=\"button\" class=\"btn btn-primary fullBlue\" [disabled]=\"(addTopic.name=='') ||(addTopic.standard_id==-1) || (addTopic.subject_id==-1)\" (click)=\"Add_New_Topic_Details()\">Save </button>\t\n      </div>\t\n    </div>\t\n  </div>\t\n</div>\n\n<div class=\"videoplayer\" *ngIf=\"videoplayer\">\n  <iframe width=\"650\" height=\"400\"\n    [src]=\"currentProjectUrl\"\n    frameborder=\"0\" style=\"border-radius: 10px;\"\n    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen>\n  </iframe>\n</div>\n\n<div class=\"black-bg\" id=\"black-bg\" *ngIf=\"videoplayer\" (click)=\"closePlayer()\"></div>\n\n<app-upload-file></app-upload-file>\n\n<proctur-popup [sizeWidth]=\"'small'\" *ngIf=\"deletePopup\">\n\n  <span class=\"closePopup pos-abs fbold show\" close-button (click)=\"closeDeletePopup()\">\n    <svg  class=\"artdeco-icon\" focusable=\"false\" height=\"24px\" preserveAspectRatio=\"xMinYMin meet\" viewBox=\"0 0 24 24\" width=\"24px\" x=\"0\" y=\"0\">\n      <path  class=\"large-icon\" d=\"M20,5.32L13.32,12,20,18.68,18.66,20,12,13.33,5.34,20,4,18.68,10.68,12,4,5.32,5.32,4,12,10.69,18.68,4Z\" style=\"fill: currentColor\"></path>\n    </svg>\n  </span>\n  <div popup-header class=\"popup-header-content\">\n    <h2>Delete Files ({{selectedRowCount}} Files Selected)</h2>\n  </div>\n  <div popup-content class=\"popup-header-content\">\n    <!-- <div class=\"row\"> -->\n      <div style=\"margin-bottom: 10px;\">\n      <span style=\"font-size: 14px;font-weight: 600;\">Are you sure, you want to delete files?\n        <span style=\"font-size: 14px;\" *ngIf=\"fileSharedArray?.length>0\"> As file is shared with following : </span></span>\n      </div>\n      <span *ngFor=\"let msg of fileSharedArray\">\n        <span> {{msg.errorMessage}}</span><br>\n      </span>\n    <!-- </div> -->\n    <div style=\"text-align: right;margin-top: 10px;\">\n    <input type=\"button\" value=\"Cancel\" style=\"color: #0084f6;background: white;\" class=\"btn fullBlue\" (click)=\"closeDeletePopup()\">\n    <input type=\"button\" value=\"Delete\" class=\"btn fullBlue\" (click)=\"confirmDelete()\">\n  </div>\n  </div>\n</proctur-popup>\n\n<!-- \n  Developed by - Nalini\n  To show watch user list\n -->\n<section *ngIf=\"viewUserList\">\n  <div class=\"confirmation_popup download_popup\">\n    <div class=\"confirm_title\" style=\"font-size: 14px;margin-bottom: 10px;\">\n      <!-- <span>{{download_links.session_name}}</span> -->\n      <span style=\"cursor: pointer;float:right\" (click)=\"viewUserList=false\">X</span>\n    </div>\n    <section>\n      <div class=\"table-container\">\n        <div class=\"heading-container\">\n          <div class=\"heading-item\" style=\"width: 15%;\">\n            <span>Sr. No. </span>\n          </div>\n          <div class=\"heading-item\" style=\"width: 75%;text-align: left;\">\n            <span>User Name</span>\n          </div>\n          <div class=\"heading-item\" style=\"width: 10%;\">\n            <span>Count</span>\n          </div>\n        </div>\n        <div class=\"value-outer-container\">\n          <div class=\"value-container\" *ngFor=\"let data of video_watch_history_det;let i = index;\">\n            <div class=\"value-item\" style=\"width: 15%;\">\n              {{i+1}}\n            </div>\n            <div class=\"value-item\" style=\"width: 75%;text-align: left;\">\n              <span title=\"{{data?.user_name}}\" *ngIf=\"data?.user_name!=null\">{{data.user_name}}</span>\n              <span *ngIf=\"data?.user_name==null\">-</span>\n            </div>\n            <div class=\"value-item\" style=\"width: 10%;\">\n              <span title=\"{{data.watch_count}}\" *ngIf=\"data.watch_count!=null\">{{data.watch_count}}</span>\n              <span *ngIf=\"data.watch_count==null\">-</span>\n            </div>\n        </div>\n      </div>\n      </div>\n    </section>\n  </div>\n</section>\n\n<div class=\"black-bg\" id=\"black-bg\" *ngIf=\"viewUserList\" (click)=\"viewUserList=false\"></div>\n\n<!-- Download option pop up\n  Developed by Nalini -->\n<div id=\"downloadOption\" class=\"modal fade\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h4 class=\"modal-title\">Please select the size for downloading</h4>\n      </div>\n      <div class=\"modal-body\">\n        <section>\n          <div class=\"table-container\">\n            <div class=\"heading-container\">\n              <div class=\"heading-item\" style=\"text-align: left;width: 10%;\">\n                <span></span>\n              </div>\n              <div class=\"heading-item\" style=\"width: 45%;text-align: left;\">\n                <span>Dimension (Width x Height)</span>\n              </div>\n              <div class=\"heading-item\" style=\"width: 45%;\">\n                <span>Size</span>\n              </div>\n            </div>\n            <div class=\"value-outer-container\">\n              <div class=\"value-container\" *ngFor=\"let data of vimeoDownloadLinks; let i = index;\">\n                <div class=\"value-item\" style=\"text-align: left;width: 10%;\">\n                  <div class=\"field-radio-wrapper\" style=\"width: 25%;margin: 0;\">\n                    <input type=\"radio\" [value]=\"i\" [id]=\"'bothRadio-'+i\" class=\"form-radio\" [(ngModel)]=\"data.selected\"\n                    (ngModelChange)=\"changeSelectedSize(data)\" name=\"select\" id=\"select\">\n                      <label></label>\n                  </div>\n                </div>\n                <div class=\"value-item\" style=\"text-align: left;width: 45%;\">\n                  <span title=\"{{data.width}}\">{{data.width}} x {{data.height}}</span>\n                </div>\n                <div class=\"value-item\" style=\"width: 45%;\">\n                  <span title=\"{{data.size_short}}\">{{data.size_short}}</span>\n                </div>\n              </div>\n            </div>\n          </div>\n        </section>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"downloadVimeoVdo()\">Download</button>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./src/app/components/course-module/ecourse-file-manager/core/upload-file/upload-file.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/components/course-module/ecourse-file-manager/core/upload-file/upload-file.component.scss ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* ===============================header colors=======================*/\n.table-format-first .table-responsive table th,\n.table-format-first .table-responsive table td {\n  text-align: center;\n  padding: 10px 5px;\n}\n.table-format-first .table-responsive table th {\n  text-transform: capitalize;\n  font-size: 14px;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper {\n  display: inline-block;\n  overflow: initial;\n  margin-left: 0;\n  width: auto;\n  position: relative;\n  background: transparent;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox {\n  z-index: 2;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label {\n  font-size: 16px;\n  margin-left: 7px;\n  font-weight: 600;\n  vertical-align: middle;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:after, .table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:before {\n  z-index: 1;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper:after {\n  content: '';\n  width: 20px;\n  height: 20px;\n  background: #fff;\n  left: 0;\n  top: 0;\n  position: absolute;\n}\n.table-format-first .table-responsive table tbody tr td .fa-trash-o {\n  color: #f44336;\n  font-size: 20px;\n}\n.table-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-top: 10px;\n}\n.table-container .heading-container {\n  background: #e0eaec;\n  display: flex;\n  flex-direction: row;\n  font-size: 14px;\n  font-weight: 600;\n  text-align: left;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n}\n.table-container .heading-container .heading-item {\n  width: 10%;\n  text-align: center;\n}\n.table-container .value-outer-container {\n  display: flex;\n  flex-direction: column;\n  min-height: 53vh;\n  max-height: 54vh;\n  overflow-x: hidden;\n  overflow-y: auto;\n  border: 1px solid #ccc;\n}\n.table-container .value-outer-container .value-container {\n  display: flex;\n  flex-direction: row;\n  text-align: left;\n  padding: 4px;\n  font-size: 12px;\n  border-bottom: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n  border-top: none;\n}\n.table-container .value-outer-container .value-container .value-item {\n  width: 10%;\n  text-align: center;\n}\n.ga-modal-wrapper {\n  right: 0;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  background: rgba(136, 136, 136, 0.6);\n  z-index: 999;\n}\n.ga-modal-wrapper .ga-modal-container {\n  display: flex;\n  overflow-y: auto;\n  height: 100%;\n}\n.ga-modal-wrapper .ga-modal-container .ga-modal {\n  margin: auto;\n  background: #fff;\n  border: 2pt solid #fff;\n  border-radius: .2em;\n  box-shadow: 0 2pt 3pt #999;\n  min-height: 80vh;\n  max-height: 82vh;\n  overflow-y: auto;\n  overflow-x: hidden;\n  min-width: 50%;\n}\n.ga-modal-wrapper .ga-modal-container .ga-modal .ga-modal-head {\n  padding: .5em 1em;\n  border-bottom: 1pt solid #ddd;\n  font-weight: bold;\n}\n.ga-modal-wrapper .ga-modal-container .ga-modal .ga-modal-head .close {\n  font-weight: bold;\n  font-size: 1.2em;\n  position: relative;\n  right: -0.6em;\n  top: -0.4em;\n  background: #fff;\n  border-radius: 100%;\n  width: 24px;\n  height: 24px;\n  display: flex;\n  opacity: 1;\n  cursor: pointer;\n}\n.ga-modal-wrapper .ga-modal-container .ga-modal .ga-modal-head .close:after {\n  content: 'X';\n  margin: auto;\n  font-size: .85em;\n}\n.ga-modal-wrapper .ga-modal-container .ga-modal .ga-modal-body {\n  padding: 1em;\n}\n.ga-form-input {\n  border: 1pt solid #ddd;\n  width: 100%;\n  border-radius: 3px;\n  padding: .2em;\n  color: #334e4c;\n  box-shadow: inset 0 0 2pt #f1f1f1;\n}\n.field-checkbox-wrapper, .field-radio-wrapper {\n  position: relative;\n  padding-left: 0px;\n  margin-bottom: 0px;\n}\n.upload-box {\n  display: flex;\n}\n.upload-box .file-drop-wrapper {\n  padding: 0 1em;\n}\n.upload-box .file-drop-wrapper .drop-box {\n  background: #ecf7ff;\n  height: 100%;\n  border: 1pt solid #9E9E9E;\n  border-style: dashed;\n  margin-bottom: 30px;\n}\n::ng-deep .ui-fileupload {\n  width: 100%;\n  cursor: pointer;\n}\n::ng-deep .ui-fileupload-buttonbar {\n  background: #0060A3;\n  width: auto;\n}\n::ng-deep .ui-fileupload-content {\n  min-height: 200px;\n  width: auto;\n  padding: 5px;\n  border-top: none;\n  border-right: 3px dashed #eaeaeb;\n  border-bottom: 3px dashed #eaeaeb;\n  border-left: 3px dashed #eaeaeb;\n  cursor: pointer;\n}\n::ng-deep .ui-fileupload-content::after {\n  content: \"Drag & Drop Files Here\";\n  color: rgba(0, 0, 0, 0.09);\n  position: absolute;\n  top: 35%;\n  left: 5%;\n  font-size: 36px;\n}\n.video-input {\n  border: 1pt solid #ddd;\n  width: 100%;\n  border-radius: 3px;\n  padding: 1em;\n  color: #334e4c;\n  -webkit-box-shadow: inset 0 0 2pt #f1f1f1;\n}\n.btn-div {\n  float: right;\n  margin-top: 3em;\n  margin-right: 1em;\n  margin-bottom: 1em;\n}\n.title {\n  font-weight: 600;\n}\n.qInfoIcon {\n  width: 20px;\n  margin-left: 5px;\n  height: 20px;\n  border: 1px solid #ccc;\n  border-radius: 50%;\n  display: block;\n  text-align: center;\n  box-sizing: border-box;\n  line-height: 20px;\n  font-weight: 600;\n  font-size: 12px;\n  cursor: pointer;\n  box-shadow: 0px 0px 1px 0px #ccc inset;\n  color: #888;\n  transition: all 0.2s linear;\n}\n.qInfoIcon:hover {\n  border-color: #0060A3;\n  box-shadow: 0px 0px 1px 0px #0060A3 inset;\n  color: #0060A3;\n}\n.tooltip-box-field {\n  color: white;\n  min-height: 22px;\n  width: 300px !important;\n  left: -300px !important;\n  background: grey;\n}\n.active_toggle_button {\n  color: #00a2ff;\n}\n.inactive_toggle_button {\n  color: lightgray;\n}\n.qInfoIcon {\n  width: 20px;\n  margin-left: 5px;\n  height: 20px;\n  border: 1px solid #ccc;\n  border-radius: 50%;\n  display: block;\n  text-align: center;\n  box-sizing: border-box;\n  line-height: 20px;\n  font-weight: 600;\n  font-size: 12px;\n  cursor: pointer;\n  box-shadow: 0px 0px 1px 0px #ccc inset;\n  color: #888;\n  transition: all 0.2s linear;\n}\n.qInfoIcon:hover {\n  border-color: #0060A3;\n  box-shadow: 0px 0px 1px 0px #0060A3 inset;\n  color: #0060A3;\n}\n.toggle-switch {\n  display: inline-block;\n  background: #0084f6;\n  border-radius: 16px;\n  width: 46px;\n  height: 16px;\n  position: relative;\n  vertical-align: middle;\n  transition: background 0.25s;\n}\n.toggle-switch:before, .toggle-switch:after {\n  content: \"\";\n}\n.toggle-switch:before {\n  display: block;\n  background: linear-gradient(to bottom, #fff 0%, #eee 100%);\n  border-radius: 50%;\n  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);\n  width: 16px;\n  height: 16px;\n  position: absolute;\n  transition: left 0.25s;\n}\n.toggle:hover .toggle-switch:before {\n  background: linear-gradient(to bottom, #fff 0%, #fff 100%);\n  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.5);\n}\n.toggle-checkbox:checked + .toggle-switch {\n  background: #0084f6;\n}\n.toggle-checkbox:checked + .toggle-switch:before {\n  left: 30px;\n}\n.field-wrapper {\n  padding-left: 10px;\n}\n.black-bg {\n  background: rgba(12, 11, 11, 0.3);\n  position: fixed;\n  top: 0px;\n  height: 100%;\n  left: 0px;\n  z-index: 1100;\n  width: 100%;\n}\n.progress-bar-wrapper {\n  float: left;\n  width: 100%;\n}\n.upload-bar {\n  position: relative;\n  height: 8px;\n  width: 100%;\n  background: #ccc;\n  border-radius: 0;\n  overflow: hidden;\n  margin: 10px 0 5px;\n}\n.upload-bar > div {\n  position: absolute;\n  height: 100%;\n  width: 0%;\n  left: 0;\n  background: #2680eb;\n  top: 0;\n  border-radius: 0;\n  transition: all 0.5s ease;\n}\n.uploadVimeo {\n  border: 1px solid #2399e5;\n  color: #FFFFFF;\n  background: #2399e5;\n  padding: 5px;\n  border-radius: 4px;\n  float: right;\n  margin-right: 10px;\n  cursor: pointer;\n}\ninput[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY3NzL2NvbW1vbi92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jb3Vyc2UtbW9kdWxlL2Vjb3Vyc2UtZmlsZS1tYW5hZ2VyL2NvcmUvdXBsb2FkLWZpbGUvdXBsb2FkLWZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWUEsdUVBQUE7QUFXQTs7RUFLZ0Isa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQ3hCakM7QURrQkE7RUFTZ0IsMEJBQTBCO0VBQzFCLGVBQWU7QUN2Qi9CO0FEYUE7RUFnQjRCLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsdUJBQXVCO0FDekJuRDtBRElBO0VBdUJnQyxVQUFVO0FDdkIxQztBREFBO0VBMEJnQyxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixzQkFBc0I7QUN0QnREO0FEUEE7RUFnQ29DLFVBQVU7QUNyQjlDO0FEWEE7RUFvQ2dDLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixPQUFPO0VBQ1AsTUFBTTtFQUNOLGtCQUFrQjtBQ3JCbEQ7QURyQkE7RUE4QzRCLGNBbERiO0VBbURhLGVBQWU7QUNyQjNDO0FEOEJBO0VBQ0ksYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsZ0JBQWdCO0FDM0JwQjtBRHVCQTtFQU1NLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLHlCQUF5QjtBQ3pCL0I7QURVQTtFQWlCUSxVQUFVO0VBQ1Ysa0JBQWtCO0FDdkIxQjtBREtBO0VBc0JNLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtBQ3ZCNUI7QURMQTtFQThCUSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZUFBZTtFQUNmLDZCQUE2QjtFQUM3QixvQkFBb0I7RUFDcEIseUJBQXlCO0VBQ3pCLGdCQUFnQjtBQ3JCeEI7QURqQkE7RUF3Q1UsVUFBVTtFQUNWLGtCQUFrQjtBQ25CNUI7QUFuR0E7RUFDRSxRQUFRO0VBQ1IsZUFBZTtFQUNmLE1BQU07RUFDTixTQUFTO0VBQ1QsT0FBTztFQUNQLG9DQUFvQztFQUNwQyxZQUFZO0FBc0dkO0FBN0dBO0VBVUksYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixZQUFZO0FBdUdoQjtBQW5IQTtFQWVNLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQiwwQkFBMEI7RUFDMUIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGNBQWM7QUF3R3BCO0FBaElBO0VBMkJRLGlCQUFpQjtFQUNqQiw2QkFBNkI7RUFDN0IsaUJBQWlCO0FBeUd6QjtBQXRJQTtFQWdDVSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsVUFBVTtFQUNWLGVBQWU7QUEwR3pCO0FBckpBO0VBOENZLFlBQVk7RUFDWixZQUFZO0VBQ1osZ0JBQWdCO0FBMkc1QjtBQTNKQTtFQXNEUSxZQUFZO0FBeUdwQjtBQW5HQTtFQUNFLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixjQUFjO0VBQ2QsaUNBQWlDO0FBc0duQztBQW5HQTtFQUNFLGtCQUFrQjtFQUNqQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBc0dyQjtBQW5HQTtFQUNFLGFBQWE7QUFzR2Y7QUF2R0E7RUFNSSxjQUFjO0FBcUdsQjtBQTNHQTtFQVNNLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLG9CQUFvQjtFQUNwQixtQkFBbUI7QUFzR3pCO0FBakdBO0VBQ0UsV0FBVztFQUNYLGVBQWU7QUFvR2pCO0FBakdBO0VBQ0UsbUJEdkZnQjtFQ3dGaEIsV0FBVztBQW9HYjtBQWpHQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixnQ0RwR29CO0VDcUdwQixpQ0RyR29CO0VDc0dwQiwrQkR0R29CO0VDdUdwQixlQUFlO0FBb0dqQjtBQTVHQTtFQVdJLGlDQUFpQztFQUNqQywwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixRQUFRO0VBQ1IsZUFBZTtBQXFHbkI7QUFqR0E7RUFDRSxzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osY0FBYztFQUNkLHlDQUF5QztBQW9HM0M7QUFqR0E7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFvR3BCO0FBakdBO0VBQ0UsZ0JBQWdCO0FBb0dsQjtBQWpHQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZUFBZTtFQUNmLHNDQUFzQztFQUN0QyxXQUFXO0VBQ1gsMkJBQTJCO0FBb0c3QjtBQW5IQTtFQWlCTSxxQkRwSlk7RUNxSloseUNBQTRDO0VBQzVDLGNEdEpZO0FDNFBsQjtBQS9GSTtFQUNFLFlBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QixnQkFBZTtBQWtHckI7QUEvRkk7RUFDRSxjQUFjO0FBa0dwQjtBQS9GSTtFQUNFLGdCQUFnQjtBQWtHdEI7QUEvRkk7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGVBQWU7RUFDZixzQ0FBc0M7RUFDdEMsV0FBVztFQUNYLDJCQUEyQjtBQWtHakM7QUFqSEk7RUFpQk0scUJEOUxRO0VDK0xSLHlDQUE0QztFQUM1QyxjRGhNUTtBQ29TbEI7QUFoR0k7RUFDRSxxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsNEJBQTRCO0FBbUdsQztBQTNHSTtFQVlJLFdBQVc7QUFtR25CO0FBL0dJO0VBZ0JJLGNBQWM7RUFDZCwwREFBMEQ7RUFDMUQsa0JBQWtCO0VBQ2xCLHlDQUF5QztFQUN6QyxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixzQkFBc0I7QUFtRzlCO0FBaEdNO0VBQ0UsMERBQTBEO0VBQzFELHdDQUF3QztBQW1HaEQ7QUFoR007RUFDRSxtQkFBbUI7QUFtRzNCO0FBcEdNO0VBSUksVUFBVTtBQW9HcEI7QUEvRkk7RUFDRSxrQkFBa0I7QUFrR3hCO0FBL0ZJO0VBQ0UsaUNBQWlDO0VBQ2pDLGVBQWU7RUFDZixRQUFRO0VBQ1IsWUFBWTtFQUNaLFNBQVM7RUFDVCxhQUFhO0VBQ2IsV0FBVztBQWtHakI7QUE5Rkk7RUFDSSxXQUFXO0VBQ1gsV0FBVztBQWlHbkI7QUE5Rkk7RUFDSSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFpRzFCO0FBeEdJO0VBU1Esa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixTQUFTO0VBQ1QsT0FBTztFQUNQLG1CQUFtQjtFQUNuQixNQUFNO0VBQ04sZ0JBQWdCO0VBQ2hCLHlCQUF5QjtBQW1HckM7QUEvRkk7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtBQWtHckI7QUEvRkk7O0VBRUEsd0JBQXdCO0VBQ3hCLFNBQVM7QUFrR2IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvdXJzZS1tb2R1bGUvZWNvdXJzZS1maWxlLW1hbmFnZXIvY29yZS91cGxvYWQtZmlsZS91cGxvYWQtZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRwdWxsLUw6IGxlZnQ7XG4kcHVsbC1SOiByaWdodDtcbiRwdWxsLW5vbmU6IG5vbmU7XG4kZnVsbC13aWR0aDogMTAwJTtcbiRib3JkZXItYm94OiBib3JkZXItYm94O1xuJGJvcmRlci1jb2xvcjogI2RlZWFlZTtcbiRiZy13aGl0ZTogI2ZmZjtcbiRlcnJvci1jb2xvcjogI2ZmMDAwMDtcbiRjb21tb24tYmx1ZTogIzAwODRmNjtcbiRwcmltYXJ5LWNvbG9yOiAjMzMzO1xuJGJvcmRlci1jb21tb246I2VhZWFlYjtcblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PWhlYWRlciBjb2xvcnM9PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiRoZWFkZXItYmc6IzAwNjBBMztcbiRoZWFkZXItYm9yZGVyOiNlYWVhZWI7XG4kbGVmdE1lbnVCZzojZmFmYWZhO1xuJGxlZnRNZW51SG92ZXJCZzojMDA4NGY2O1xuJGxlZnRNZW51VGV4dEhvdmVyQ29sb3I6I2ZmZjtcbiRyZWRCdG46I2Y0NDMzNjtcbiRib3JkZXJjY2M6I2NjYztcbiRsaWdodEJsdWU6I2VmZjdmZjtcbiR0YWJsZUhlYWRpbmdCZ0NvbG9yOiAjMDA0YTdlO1xuLnRhYmxlLWZvcm1hdC1maXJzdCB7XG4gICAgLnRhYmxlLXJlc3BvbnNpdmUge1xuICAgICAgICB0YWJsZSB7XG4gICAgICAgICAgICB0aCxcbiAgICAgICAgICAgIHRkIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aCB7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGJvZHkge1xuICAgICAgICAgICAgICAgIHRyIHtcbiAgICAgICAgICAgICAgICAgICAgdGQge1xuICAgICAgICAgICAgICAgICAgICAgICAgLmZpZWxkLWNoZWNrYm94LXdyYXBwZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaW5pdGlhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZvcm0tY2hlY2tib3gge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZm9ybS1jaGVja2JveCtsYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDdweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJjphZnRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5mYS10cmFzaC1vIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHJlZEJ0bjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi50YWJsZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIC5oZWFkaW5nLWNvbnRhaW5lciB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZTBlYWVjO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgICAgLmhlYWRpbmctaXRlbSB7XG4gICAgICAgIHdpZHRoOiAxMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICB9XG4gICAgLnZhbHVlLW91dGVyLWNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIG1pbi1oZWlnaHQ6IDUzdmg7XG4gICAgICBtYXgtaGVpZ2h0OiA1NHZoO1xuICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICAudmFsdWUtY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgcGFkZGluZzogNHB4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICAgICAgLnZhbHVlLWl0ZW0ge1xuICAgICAgICAgIHdpZHRoOiAxMCU7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IiwiQGltcG9ydCBcIi4vc3JjL2Fzc2V0cy9jc3MvY29tbW9uL3ZhcmlhYmxlcy5zY3NzXCI7XG5cbi5nYS1tb2RhbC13cmFwcGVyIHtcbiAgcmlnaHQ6IDA7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTM2LCAxMzYsIDEzNiwgMC42KTtcbiAgei1pbmRleDogOTk5O1xuXG4gIC5nYS1tb2RhbC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAuZ2EtbW9kYWwge1xuICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgIGJvcmRlcjogMnB0IHNvbGlkICNmZmY7XG4gICAgICBib3JkZXItcmFkaXVzOiAuMmVtO1xuICAgICAgYm94LXNoYWRvdzogMCAycHQgM3B0ICM5OTk7XG4gICAgICBtaW4taGVpZ2h0OiA4MHZoO1xuICAgICAgbWF4LWhlaWdodDogODJ2aDtcbiAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICBtaW4td2lkdGg6IDUwJTtcblxuICAgICAgLmdhLW1vZGFsLWhlYWQge1xuICAgICAgICBwYWRkaW5nOiAuNWVtIDFlbTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB0IHNvbGlkICNkZGQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuXG4gICAgICAgIC5jbG9zZSB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgcmlnaHQ6IC0wLjZlbTtcbiAgICAgICAgICB0b3A6IC0wLjRlbTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgICAgd2lkdGg6IDI0cHg7XG4gICAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdYJztcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogLjg1ZW07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5nYS1tb2RhbC1ib2R5IHtcbiAgICAgICAgcGFkZGluZzogMWVtO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uZ2EtZm9ybS1pbnB1dCB7XG4gIGJvcmRlcjogMXB0IHNvbGlkICNkZGQ7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHBhZGRpbmc6IC4yZW07XG4gIGNvbG9yOiAjMzM0ZTRjO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMnB0ICNmMWYxZjE7XG59XG5cbi5maWVsZC1jaGVja2JveC13cmFwcGVyLCAuZmllbGQtcmFkaW8td3JhcHBlcntcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi51cGxvYWQtYm94IHtcbiAgZGlzcGxheTogZmxleDtcblxuICAuZmlsZS1mb3JtIHt9XG5cbiAgLmZpbGUtZHJvcC13cmFwcGVyIHtcbiAgICBwYWRkaW5nOiAwIDFlbTtcblxuICAgIC5kcm9wLWJveCB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZWNmN2ZmO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgYm9yZGVyOiAxcHQgc29saWQgIzlFOUU5RTtcbiAgICAgIGJvcmRlci1zdHlsZTogZGFzaGVkO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICB9XG4gIH1cbn1cblxuOjpuZy1kZWVwIC51aS1maWxldXBsb2FkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuOjpuZy1kZWVwIC51aS1maWxldXBsb2FkLWJ1dHRvbmJhciB7XG4gIGJhY2tncm91bmQ6ICRoZWFkZXItYmc7XG4gIHdpZHRoOiBhdXRvO1xufVxuXG46Om5nLWRlZXAgLnVpLWZpbGV1cGxvYWQtY29udGVudCB7XG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICB3aWR0aDogYXV0bztcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItdG9wOiBub25lO1xuICBib3JkZXItcmlnaHQ6IDNweCBkYXNoZWQgJGJvcmRlci1jb21tb247XG4gIGJvcmRlci1ib3R0b206IDNweCBkYXNoZWQgJGJvcmRlci1jb21tb247XG4gIGJvcmRlci1sZWZ0OiAzcHggZGFzaGVkICRib3JkZXItY29tbW9uO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgJjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiRHJhZyAmIERyb3AgRmlsZXMgSGVyZVwiO1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDkpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDM1JTtcbiAgICBsZWZ0OiA1JTtcbiAgICBmb250LXNpemU6IDM2cHg7XG4gIH1cbn1cblxuLnZpZGVvLWlucHV0IHtcbiAgYm9yZGVyOiAxcHQgc29saWQgI2RkZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgcGFkZGluZzogMWVtO1xuICBjb2xvcjogIzMzNGU0YztcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgMnB0ICNmMWYxZjE7XG59XG5cbi5idG4tZGl2IHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tdG9wOiAzZW07XG4gIG1hcmdpbi1yaWdodDogMWVtO1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG59XG5cbi50aXRsZXtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLnFJbmZvSWNvbiB7XG4gIHdpZHRoOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAwcHggI2NjYyBpbnNldDtcbiAgY29sb3I6ICM4ODg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcbiAgJjpob3ZlciB7XG4gICAgICBib3JkZXItY29sb3I6ICRoZWFkZXItYmc7XG4gICAgICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAwcHggJGhlYWRlci1iZyBpbnNldDtcbiAgICAgIGNvbG9yOiAkaGVhZGVyLWJnO1xuICB9XG59XG5cblxuXG5cbiAgICAudG9vbHRpcC1ib3gtZmllbGQge1xuICAgICAgY29sb3I6d2hpdGU7XG4gICAgICBtaW4taGVpZ2h0OiAyMnB4O1xuICAgICAgd2lkdGg6IDMwMHB4ICFpbXBvcnRhbnQ7XG4gICAgICBsZWZ0OiAtMzAwcHggIWltcG9ydGFudDtcbiAgICAgIGJhY2tncm91bmQ6Z3JleTtcbiAgICB9XG5cbiAgICAuYWN0aXZlX3RvZ2dsZV9idXR0b24ge1xuICAgICAgY29sb3I6ICMwMGEyZmY7XG4gICAgfVxuXG4gICAgLmluYWN0aXZlX3RvZ2dsZV9idXR0b24ge1xuICAgICAgY29sb3I6IGxpZ2h0Z3JheTtcbiAgICB9XG5cbiAgICAucUluZm9JY29uIHtcbiAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgIGhlaWdodDogMjBweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAwcHggI2NjYyBpbnNldDtcbiAgICAgIGNvbG9yOiAjODg4O1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAkaGVhZGVyLWJnO1xuICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDBweCAkaGVhZGVyLWJnIGluc2V0O1xuICAgICAgICAgIGNvbG9yOiAkaGVhZGVyLWJnO1xuICAgICAgfVxuICAgIH1cblxuICAgIC50b2dnbGUtc3dpdGNoIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIGJhY2tncm91bmQ6ICMwMDg0ZjY7XG4gICAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgICAgd2lkdGg6IDQ2cHg7XG4gICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjI1cztcblxuICAgICAgJjpiZWZvcmUsXG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIH1cblxuICAgICAgJjpiZWZvcmUge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2ZmZiAwJSwgI2VlZSAxMDAlKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAxcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgICAgICAgd2lkdGg6IDE2cHg7XG4gICAgICAgIGhlaWdodDogMTZweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0cmFuc2l0aW9uOiBsZWZ0IDAuMjVzO1xuICAgICAgfVxuXG4gICAgICAudG9nZ2xlOmhvdmVyICY6YmVmb3JlIHtcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2ZmZiAwJSwgI2ZmZiAxMDAlKTtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMXB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICAgIH1cblxuICAgICAgLnRvZ2dsZS1jaGVja2JveDpjaGVja2VkKyYge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMDA4NGY2O1xuXG4gICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICBsZWZ0OiAzMHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmZpZWxkLXdyYXBwZXJ7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgfVxuXG4gICAgLmJsYWNrLWJne1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgxMiwgMTEsIDExLCAwLjMpO1xuICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgdG9wOiAwcHg7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBsZWZ0OiAwcHg7XG4gICAgICB6LWluZGV4OiAxMTAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG5cbiAgICAucHJvZ3Jlc3MtYmFyLXdyYXBwZXIge1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgLnVwbG9hZC1iYXIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGhlaWdodDogOHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZDogI2NjYztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgbWFyZ2luOiAxMHB4IDAgNXB4O1xuICAgICAgICAmPmRpdiB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB3aWR0aDogMCU7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzI2ODBlYjtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnVwbG9hZFZpbWVvIHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMyMzk5ZTU7XG4gICAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICAgIGJhY2tncm91bmQ6ICMyMzk5ZTU7XG4gICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuXG4gICAgaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxuaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgbWFyZ2luOiAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/course-module/ecourse-file-manager/core/upload-file/upload-file.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/components/course-module/ecourse-file-manager/core/upload-file/upload-file.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: UploadFileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadFileComponent", function() { return UploadFileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../services/authenticator.service */ "./src/app/services/authenticator.service.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_message_show_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../services/message-show.service */ "./src/app/services/message-show.service.ts");
/* harmony import */ var _file_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../file.service */ "./src/app/components/course-module/ecourse-file-manager/file.service.ts");
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






let UploadFileComponent = /** @class */ (() => {
    let UploadFileComponent = class UploadFileComponent {
        constructor(_http, auth, msgService, router, _fservice, renderer) {
            this._http = _http;
            this.auth = auth;
            this.msgService = msgService;
            this.router = router;
            this._fservice = _fservice;
            this.renderer = renderer;
            this.subjectList = [];
            this.topicList = [];
            this.progressBar = false;
            this.subtopicList = [];
            this.manual_multiplier_update = false;
            this.watch_multiplier = 0;
            this.categiesList = [];
            this.categiesTypeList = [];
            this.existVideos = [];
            this.showModal = false;
            this.fileUploadXHR = '';
            this.dragoverflag = false;
            this.addCategoryPopup = false;
            this.material_dataShow = false;
            this.showParentTopicModel = false;
            this.material_dataFlag = '';
            this.jsonData = {
                parentTopic: '',
                mainTopic: '',
                selectedVideo: '',
                mainTopicId: '',
                parentTopicId: ''
            };
            this.payload = {
                "clientPayload": {
                    "policy": "",
                    "key": "",
                    "x-amz-signature": "",
                    "x-amz-algorithm": "",
                    "x-amz-date": "",
                    "x-amz-credential": "",
                    "uploadLink": ""
                },
                "videoId": ""
            };
            this.varJson = {
                category_id: 0,
                name: '',
                topic_id: 0,
                course_types: "",
                video_url: "",
                sub_topic_id: 0,
                subject_id: 0,
                file_id: 0,
                is_readonly: false,
                title: '',
                is_private: false,
                enable_watermark: true,
                description: '',
            };
            this.progress = 0;
            this.isUploadingXls = false;
            this.Existing_video_category_id = 0;
            this.Vimeopayload = {};
            this.Vimeofile = {
                files: []
            };
            this.schoolModel = false;
            this.selectedFiles = [];
            this.auth.currentInstituteId.subscribe(id => {
                this.institute_id = id;
            });
            // changes by Nalini - to handle school model conditions
            this.auth.schoolModel.subscribe(res => {
                this.schoolModel = false;
                if (res) {
                    this.schoolModel = true;
                }
            });
        }
        ngOnInit() {
            this.dragoverflag = true;
            this.getcategoriesList();
            this.getCategories();
            this._http.data.subscribe(data => {
                if (data == 'material-web') {
                    this.material_dataFlag = 'material';
                    this._http.updatedDataSelection(null);
                }
            });
        }
        ngAfterViewChecked() {
            // if(document.getElementsByClassName('ui-fileupload-row').length){
            //   this.renderer.setStyle(document.getElementsByClassName('ui-fileupload-row')[0].children[2], 'display', 'none');
            // }
        }
        getVDOCipherLinkedDate() {
            let url = "/api/v1/instFileSystem/VDOCipher/" + this.institute_id;
            this.existVideos = [];
            this.auth.showLoader();
            this._http.getData(url).subscribe((res) => {
                // console.log(res);
                this.auth.hideLoader();
                if (res) {
                    this.existVideos = res;
                }
            }, (err) => {
                this.auth.hideLoader();
                this.existVideos = [];
            });
        }
        linkAlreadyUploadedVideo($event) {
            if (this.jsonData.selectedVideo != '') {
                let url = "/api/v1/instFileSystem/linkVideos";
                let object = {
                    "institute_id": this.institute_id,
                    "videoID": this.jsonData.selectedVideo,
                    "course_types": this.varJson.course_types,
                    "subject_id": this.varJson.subject_id,
                    "topic_id": this.varJson.topic_id,
                    "sub_topic_id": this.varJson.sub_topic_id,
                    "title": this.varJson.title,
                    "category_id": this.Existing_video_category_id,
                };
                if (!this.showModal) {
                    object.sub_topic_id = Number(this.jsonData.mainTopicId),
                        object.topic_id = Number(this.jsonData.parentTopicId);
                }
                let flag = this.uploadDatavalidation();
                if (!this.auth.isRippleLoad.getValue() && (flag)) {
                    this.auth.showLoader();
                    this._http.postData(url, object).subscribe((res) => {
                        // console.log(res);
                        this.auth.hideLoader();
                        if (res) {
                            this.clearuploadObject();
                            this.refreshList();
                            this.msgService.showErrorMessage(this.msgService.toastTypes.success, '', res.message);
                        }
                    }, (err) => {
                        this.auth.hideLoader();
                        this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err.error.message);
                    });
                }
            }
            else {
                this.msgService.showErrorMessage('error', '', 'Please select Video');
            }
        }
        getSourceName(video) {
            //{{video.subject_name}}
            let source = video.ecourse_name + ' > ' + video.subject_name;
            if (video.parent_topic_name != null) {
                source += ' > ' + video.parent_topic_name;
                if (video.sub_topic_name != null) {
                    source += ' > ' + video.sub_topic_name;
                }
            }
            return source;
        }
        uploadYoutubeURL($event) {
            let flag = this.uploadDatavalidation();
            if (flag) {
                var pattern = /^(http|https|www)?:\/\/[a-zA-Z0-9-\.]+\.[a-z]{2,4}/;
                if (!pattern.test(this.varJson.video_url)) {
                    this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', "Incorrect url");
                    return false;
                }
                // if (this.varJson.title == '') {
                //   this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', "please add video title");
                //   return false;
                // }
                const formData = new FormData();
                let fileJson = {
                    institute_id: this.institute_id,
                    category_id: this.varJson.category_id,
                    topic_id: this.varJson.topic_id,
                    course_types: this.varJson.course_types,
                    video_url: this.varJson.video_url,
                    sub_topic_id: this.varJson.sub_topic_id,
                    subject_id: this.varJson.subject_id,
                    file_id: -1,
                    is_readonly: this.varJson.is_readonly ? 'Y' : 'N',
                    "size": 0
                };
                if (!this.showModal) {
                    fileJson.sub_topic_id = Number(this.jsonData.mainTopicId),
                        fileJson.topic_id = Number(this.jsonData.parentTopicId);
                }
                let base = this.auth.getBaseUrl();
                let urlPostUpload = base + "/api/v1/instFileSystem/uploadFile";
                let newxhr = new XMLHttpRequest();
                formData.append('fileJson', JSON.stringify(fileJson));
                let auths = {
                    userid: sessionStorage.getItem('userid'),
                    userType: sessionStorage.getItem('userType'),
                    password: sessionStorage.getItem('password'),
                    institution_id: sessionStorage.getItem('institute_id'),
                };
                let Authorization = btoa(auths.userid + "|" + auths.userType + ":" + auths.password + ":" + auths.institution_id);
                newxhr.open("POST", urlPostUpload, true);
                newxhr.setRequestHeader("Authorization", Authorization);
                newxhr.setRequestHeader("enctype", "multipart/form-data;");
                newxhr.setRequestHeader("Accept", "application/json, text/javascript");
                newxhr.setRequestHeader("Access-Control-Allow-Origin", "*");
                if (!this.auth.isRippleLoad.getValue()) {
                    this.auth.showLoader();
                    newxhr.onreadystatechange = () => {
                        this.auth.hideLoader();
                        if (newxhr.readyState == 4) {
                            if (newxhr.status >= 200 && newxhr.status < 300) {
                                this.msgService.showErrorMessage(this.msgService.toastTypes.success, '', "File uploaded successfully");
                                this.clearuploadObject();
                                // this.material_dataShow ? this._http.updatedDataSelection('material') :
                                //   this.material_dataFlag == 'material' ? this._http.updatedDataSelection('material') : this._http.updatedDataSelection('list');
                                this.refreshList();
                            }
                            else {
                                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', JSON.parse(newxhr.response).message);
                            }
                        }
                    };
                    newxhr.send(formData);
                }
            }
        }
        refreshList() {
            if (this.material_dataShow && this.material_dataFlag == 'material') {
                this._http.updatedDataSelection('material');
            }
            else if (this.material_dataShow && this.material_dataFlag == 'subject-list') {
                this._http.updatedDataSelection('subject');
            }
            else {
                this._http.updatedDataSelection('list');
            }
            // console.log(this.material_dataFlag);
        }
        checkListCall() {
            switch (this.material_dataFlag) {
                default:
                    this._http.updatedDataSelection('subject');
            }
        }
        clearuploadObject() {
            this.showModal = false;
            this.showParentTopicModel = false;
            this.varJson = {
                category_id: 0,
                name: '',
                topic_id: -0,
                course_types: "",
                video_url: "",
                sub_topic_id: 0,
                subject_id: 0,
                file_id: 0,
                is_readonly: false,
                title: '',
                is_private: false,
                enable_watermark: true,
                description: '',
            };
            this.varJson.name = '';
        }
        uploadDatavalidation() {
            if (this.varJson.category_id == 0) {
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', "select file type to upload data");
                return false;
            }
            if (this.varJson.course_types == "" || this.varJson.course_types == '0') {
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', "please select course to upload data");
                return false;
            }
            if (this.varJson.subject_id == 0) {
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', "please select subject to upload data");
                return false;
            }
            // if (this.varJson.topic_id == 0) {
            //   this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', "please select topic to upload data");
            //   return false;
            // }
            return true;
        }
        uploadHandler($event) {
            let flag = this.uploadDatavalidation();
            // console.log(this.material_dataFlag);
            if (flag && this.checkCategoriesType($event.files)) {
                const formData = new FormData();
                let fileJson = {
                    institute_id: this.institute_id,
                    category_id: this.varJson.category_id,
                    topic_id: this.varJson.topic_id,
                    course_types: this.varJson.course_types,
                    video_url: this.varJson.video_url,
                    sub_topic_id: this.varJson.sub_topic_id,
                    subject_id: this.varJson.subject_id,
                    file_id: -1,
                    is_readonly: (this.varJson.is_readonly == true) ? 'Y' : 'N'
                };
                if (!this.showModal) {
                    fileJson.sub_topic_id = Number(this.jsonData.mainTopicId),
                        fileJson.topic_id = Number(this.jsonData.parentTopicId);
                }
                formData.append('fileJson', JSON.stringify(fileJson));
                if ($event.files && $event.files.length) {
                    $event.files.forEach(file => {
                        formData.append('files', file);
                    });
                    // formData.append('files', $event.files);
                }
                let base = this.auth.getBaseUrl();
                let urlPostXlsDocument = base + "/api/v1/instFileSystem/uploadFile";
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
                if (!this.auth.isRippleLoad.getValue()) {
                    this.auth.showLoader();
                    newxhr.onreadystatechange = () => {
                        this.auth.hideLoader();
                        if (newxhr.readyState == 4) {
                            if (newxhr.status >= 200 && newxhr.status < 300) {
                                this.clearuploadObject();
                                this.refreshList();
                                this.msgService.showErrorMessage(this.msgService.toastTypes.success, '', "File uploaded successfully");
                                this.getDataUsedInCourseList();
                            }
                            else {
                                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', JSON.parse(newxhr.response).message);
                            }
                        }
                    };
                    newxhr.send(formData);
                }
            }
        }
        setCategoryType(value) {
            // console.log(value);
            this.categiesTypeList.forEach(element => {
                if (element.category_id == value) {
                    if (element.category_id == -1) {
                        this.varJson.name = element.videoCategoryList[0].category_name;
                    }
                    else {
                        this.varJson.name = element.category_name;
                    }
                }
            });
            this.Vimeofile = {
                files: []
            };
            if (value == '330') {
                this.jsonData.selectedVideo = '';
                this.getVDOCipherLinkedDate();
            }
        }
        // user data usage get
        getDataUsedInCourseList() {
            let url = "/api/v1/instFileSystem/getUsedSpace/" + this.institute_id;
            this._http.getData(url).subscribe((res) => {
                // console.log(res);
                this._fservice.storageData.storage_allocated = (Number(res.storage_allocated) * 0.001048576);
                this._fservice.storageData.uploaded_size = (Number(res.uploaded_size) * 0.001048576);
                let width = 1;
                if (this._fservice.storageData.uploaded_size != 0 &&
                    this._fservice.storageData.uploaded_size <= this._fservice.storageData.storage_allocated) {
                    width = (100 * this._fservice.storageData.uploaded_size) / this._fservice.storageData.storage_allocated;
                }
                this._fservice.storageData.width = Math.round(width);
            });
        }
        checkCategoriesType(files) {
            let flag = true;
            switch (this.varJson.name) {
                case "Notes":
                case "Assignment":
                case "EBook":
                case "Previous Year Questions Paper": {
                    for (let i = 0; i < files.length; i++) { //
                        let pattern = /([a-zA-Z0-9\s_\\.\-\(\):])+(.xls|.xlsx|.doc|.docx|.pdf|.gif|.png|.jpg|.jpeg|.ppt|.pptx|.epub)$/i;
                        // console.log(pattern.test(files[i].name));
                        if (!pattern.test(files[i].name)) {
                            this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', "please select " + this.varJson.name + " in pdf, doc, docx ,gif, png, jpg , xls, xlsx  form");
                            flag = false;
                            break;
                        }
                    }
                    break;
                }
                case "Images": {
                    for (let i = 0; i < files.length; i++) {
                        let pattern = /([a-zA-Z0-9\s_\\.\-\(\):])+(.gif|.png|.jpg|.jpeg)$/i;
                        if (!pattern.test(files[i].name)) {
                            this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', "please select " + this.varJson.name + "in gif, png, jpg form");
                            flag = false;
                            break;
                        }
                    }
                    break;
                }
                case "VDOCipher": {
                    if (this.varJson.title == '') {
                        this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', "Please add video title");
                        flag = false;
                    }
                    for (let i = 0; i < files.length; i++) {
                        let pattern = /([a-zA-Z0-9\s_\\.\-\(\):])+(.AVI|.FLV|.WMV|.MP4|.MOV|.FIV|.flv|.mp4|.mov|.webm|.WEBM|.mkv|.MKV|.ogv|.OGV|.vob|.VOB|.gifv|.GIFV|.mng|.MNG|.avi|.gif|.GIF|.drc|.DRC|.ogg|.OGG|.MTS|.mts|.M2TS|.m2ts|.TS|.ts|.qt|.QT|.wmv|.yuv|.YUV|.rm|.RM|.rmvb|.RMVB)/i;
                        if (!pattern.test(files[i].name)) {
                            this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', "Please select " + this.varJson.name + " in avi,flv,wmv,mp4 ,webm, mkv ,ogv, vob,gifv, mng, avi,gif, drc, ogg, MTS, M2TS , TS, mov, qt , yuv, rm,rmvb and mov form");
                            flag = false;
                            break;
                        }
                    }
                    break;
                }
                // case "EBook": {
                //   for (let i = 0; i < files.length; i++) {
                //     let pattern = /([a-zA-Z0-9\s_\\.\-\(\):])+(.pdf|.epub)$/i;
                //     if (!pattern.test(files[i].name)) {
                //       this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', "please select " + this.varJson.name + " file in epub, pdf form");
                //       flag = false;
                //       break;
                //     }
                //   }
                //   break;
                // }
                case "Audio Notes": {
                    for (let i = 0; i < files.length; i++) {
                        let pattern = /([a-zA-Z0-9\s_\\.\-\(\):])+(.mp3|.wav|.aac|.wma)$/i;
                        if (!pattern.test(files[i].name)) {
                            this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', "please select Audio Notes in mp3, wav, aac, wma form");
                            flag = false;
                            break;
                        }
                    }
                    break;
                }
                case "Slides": {
                    for (let i = 0; i < files.length; i++) {
                        let pattern = /([a-zA-Z0-9\s_\\.\-\(\):])+(.ppt|.pptx)$/i;
                        if (!pattern.test(files[i].name)) {
                            this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', "please select slides in ppt, pptx form");
                            flag = false;
                            break;
                        }
                    }
                    break;
                }
                case "Vimeo": {
                    if (this.varJson.title == '') {
                        this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', "Please add video title");
                        flag = false;
                    }
                    if (files.length) {
                        for (let i = 0; i < files.length; i++) {
                            let pattern = /([a-zA-Z0-9\s_\\.\-\(\):])+(.AVI|.FLV|.WMV|.MP4|.MOV|.FIV|.flv|.mp4|.mov|.webm|.WEBM|.mkv|.MKV|.ogv|.OGV|.vob|.VOB|.gifv|.GIFV|.mng|.MNG|.avi|.gif|.GIF|.drc|.DRC|.ogg|.OGG|.MTS|.mts|.M2TS|.m2ts|.TS|.ts|.qt|.QT|.wmv|.yuv|.YUV|.rm|.RM|.rmvb|.RMVB)/i;
                            if (!pattern.test(files[i].name)) {
                                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', "Please select " + this.varJson.name + " in avi,flv,wmv,mp4 ,webm, mkv ,ogv, vob,gifv, mng, avi,gif, drc, ogg, MTS, M2TS , TS, mov, qt , yuv, rm,rmvb and mov form");
                                flag = false;
                                break;
                            }
                        }
                    }
                    else {
                        this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', "Please select file");
                        flag = false;
                        break;
                    }
                    break;
                }
                default:
                    {
                        this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', "please select type");
                        flag = false;
                        break;
                    }
            }
            return flag;
        }
        videoGetDetails(video, index) {
            let url = index + ' ) ' + video.ecourse_name + ' > ' + video.subject_name;
            if (video.parent_topic_name) {
                url = url + ' > ' + video.parent_topic_name;
                if (video.sub_topic_name) {
                    url = url + ' > ' + video.sub_topic_name;
                }
            }
            return url;
        }
        getCategories() {
            this.categiesTypeList = [];
            // this.auth.showLoader();
            let url = "/api/v1/instFileSystem/v2/categories";
            this._http.getData(url).subscribe((res) => {
                // console.log(res);
                let temp = [{ category_id: 330, category_name: 'Existing video' }];
                res.forEach(category => {
                    if (category.category_id == -1) {
                        category.videoCategoryList.forEach(vdoType => {
                            temp.push(vdoType);
                        });
                    }
                    else {
                        temp.push(category);
                    }
                });
                // this.auth.hideLoader();
                this.categiesTypeList = temp;
                if (sessionStorage.getItem('enable_vdoCipher_feature') != '1') {
                    temp.forEach((object, index) => {
                        if (object.category_id == 235) {
                            temp.splice(index, 1);
                        }
                    });
                }
                if (sessionStorage.getItem('enable_vimeo_feature') != '1') {
                    temp.forEach((object, index) => {
                        if (object.category_name == 'Vimeo') {
                            temp.splice(index, 1);
                        }
                    });
                }
                if (sessionStorage.getItem('enable_vdoCipher_feature') != '1' && sessionStorage.getItem('enable_vimeo_feature') != '1') {
                    temp.forEach((object, index) => {
                        if (object.category_id == 330) {
                            temp.splice(index, 1);
                        }
                    });
                }
            }, err => {
                // this.auth.hideLoader();
            });
        }
        getTopicsList(subjectId) {
            this.topicList = [];
            this.auth.showLoader();
            let url = "/api/v1/topic_manager/" + this.institute_id + "/subjects/" + subjectId + "/topics";
            this._http.getData(url).subscribe((res) => {
                // console.log(res);
                this.auth.hideLoader();
                this.topicList = res;
                this.varJson.sub_topic_id = 0;
                this.subtopicList = [];
            }, err => {
                this.auth.hideLoader();
            });
        }
        //Get Subtopic of a Parent Topic
        getSubtopicList(subjectId) {
            this.subtopicList = [];
            this.auth.showLoader();
            let url = "/api/v1/topic_manager/subTopicList/" + this.institute_id + "/" + subjectId;
            this._http.getData(url).subscribe((res) => {
                // console.log(res);
                this.auth.hideLoader();
                this.subtopicList = res;
                this.varJson.sub_topic_id = 0;
            }, err => {
                this.auth.hideLoader();
            });
        }
        getcategoriesList() {
            this.categiesList = [];
            let url = "/api/v1/instFileSystem/institute/" + this.institute_id + "/ecourses-list";
            this._http.getData(url).subscribe((res) => {
                // console.log(res);
                this.categiesList = res;
            }, err => {
            });
        }
        //Get subjects of ecourse
        getSubjectsList(ecourseId) {
            this.subjectList = [];
            this.auth.showLoader();
            let url = "/api/v1/ecourse/" + this.institute_id + "/" + ecourseId + "/subjects";
            this._http.getData(url).subscribe((res) => {
                // console.log(res);
                this.subjectList = res;
                if (this.material_dataShow && this.material_dataFlag != 'subject-list') {
                    this.varJson.subject_id = 0;
                }
                this.varJson.sub_topic_id = 0;
                this.subtopicList = [];
                this.auth.hideLoader();
            }, err => {
                this.auth.hideLoader();
            });
        }
        onRadioButtonChange($event, video) {
            // console.log(video);
            this.varJson.title = video.video_title;
            this.Existing_video_category_id = video.category_id;
        }
        uploadHandler2($event, value) {
            // console.log(this.material_dataFlag);
            let flag = this.uploadDatavalidation();
            let fileJson;
            if (flag && this.checkCategoriesType($event.files)) {
                let is_private = this.varJson.is_private == false ? 'Y' : 'N';
                let enable_watermark = this.varJson.enable_watermark == true ? 'Y' : 'N';
                let size = 0;
                this.selectedFiles = $event.files[0];
                size = $event.files && $event.files[0] ? $event.files[0].size : 0;
                fileJson = {
                    "institute_id": this.institute_id,
                    "category_id": this.varJson.category_id,
                    "topic_id": this.varJson.topic_id,
                    "course_types": this.varJson.course_types,
                    "video_url": null,
                    "sub_topic_id": this.varJson.sub_topic_id,
                    "subject_id": this.varJson.subject_id,
                    "is_raw_data": "Y",
                    "is_url": "N",
                    "is_private": is_private,
                    "title": this.varJson.title,
                    "enable_watermark": enable_watermark,
                    // "size": (size / (1024 * 1024)).toFixed(3)
                    "size": (this.varJson.category_id == 305) ? size : (size / (1024 * 1024)).toFixed(3)
                };
                if (this.varJson.category_id == 235) {
                    fileJson = {
                        "institute_id": this.institute_id,
                        "category_id": this.varJson.category_id,
                        "topic_id": this.varJson.topic_id,
                        "course_types": this.varJson.course_types,
                        "video_url": null,
                        "sub_topic_id": this.varJson.sub_topic_id,
                        "subject_id": this.varJson.subject_id,
                        "is_raw_data": "Y",
                        "is_url": "N",
                        "is_private": is_private,
                        "title": this.varJson.title,
                        "enable_watermark": enable_watermark,
                        "size": (size / (1024 * 1024)).toFixed(3),
                        "manual_multiplier_update": this.manual_multiplier_update,
                        "watch_multiplier": this.watch_multiplier
                    };
                }
                if (!this.showModal) {
                    fileJson.sub_topic_id = Number(this.jsonData.mainTopicId),
                        fileJson.topic_id = Number(this.jsonData.parentTopicId);
                }
                let base = this.auth.getBaseUrl();
                let urlPostXlsDocument = base + "/api/v1/instFileSystem/uploadFile";
                let newxhr = new XMLHttpRequest();
                let auths = {
                    userid: sessionStorage.getItem('userid'),
                    userType: sessionStorage.getItem('userType'),
                    password: sessionStorage.getItem('password'),
                    institution_id: sessionStorage.getItem('institute_id'),
                };
                let Authorization = btoa(auths.userid + "|" + auths.userType + ":" + auths.password + ":" + auths.institution_id);
                const formData = new FormData();
                formData.append('fileJson', JSON.stringify(fileJson));
                newxhr.open("POST", urlPostXlsDocument, true);
                newxhr.setRequestHeader("Authorization", Authorization);
                newxhr.setRequestHeader("enctype", "multipart/form-data;");
                newxhr.setRequestHeader("Accept", "application/json, text/javascript");
                newxhr.setRequestHeader("Access-Control-Allow-Origin", "*");
                this.auth.hideLoader();
                if (!this.auth.isRippleLoad.getValue()) {
                    this.auth.showLoader();
                    this.isUploadingXls = true;
                    newxhr.upload.addEventListener('progress', (e) => {
                        if (e.lengthComputable) {
                            this.progress = Math.round((e.loaded * 100) / e.total);
                            document.getElementById('progress-width').style.width = this.progress + '%';
                        }
                    }, false);
                    newxhr.onreadystatechange = () => {
                        this.auth.hideLoader();
                        if (newxhr.readyState == 4) {
                            this.progress = 0;
                            if (newxhr.status >= 200 && newxhr.status < 300) {
                                this.auth.hideLoader();
                                // this.isUploadingXls = false;
                                if (this.varJson.category_id == 235) {
                                    var files = $event.files;
                                    this.file = files[0];
                                    let payloadObject = JSON.parse(newxhr.response);
                                    this.payload = payloadObject;
                                    // this.watchDuration(this.payload);
                                    this.upload();
                                }
                                else {
                                    let payloadObject = JSON.parse(newxhr.response);
                                    this.Vimeopayload = payloadObject;
                                    var res = this.Vimeopayload.upload_link.substring(0, this.Vimeopayload.upload_link.lastIndexOf("="));
                                    let url = window.location.href;
                                    url = url.substring(0, url.lastIndexOf("#"));
                                    res = res.concat('=' + url + '#/view/course/ecourse-file-manager/ecourses?videoId=' + this.Vimeopayload.videoId);
                                    if (this.Vimeopayload.upload_link != '' && this.Vimeopayload.upload_link != null) {
                                        // (document.getElementById('form') as HTMLFormElement).action = res;
                                        // this.form.nativeElement.submit();
                                        this.patchRequest(this.Vimeopayload);
                                    }
                                }
                            }
                            else {
                                this.isUploadingXls = false;
                                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', JSON.parse(newxhr.response).message);
                            }
                        }
                    };
                    newxhr.send(formData);
                }
            }
            // var files = $event.files;
            // this.file = files[0];
            // console.log(this.file);
            // this.upload();
        }
        patchRequest(obj) {
            // this.auth.showLoader();
            let base = this.auth.getBaseUrl();
            let urlPostXlsDocument = obj.upload_link;
            this.fileUploadXHR = new XMLHttpRequest();
            this.fileUploadXHR.open("PATCH", urlPostXlsDocument, true);
            this.fileUploadXHR.setRequestHeader("Tus-Resumable", '1.0.0');
            this.fileUploadXHR.setRequestHeader("Upload-Offset", '0');
            this.fileUploadXHR.setRequestHeader("Content-Type", "application/offset+octet-stream");
            this.fileUploadXHR.setRequestHeader("Accept", "application/vnd.vimeo.*+json;version=3.4");
            this.progressBar = true;
            this.isUploadingXls = true;
            this.fileUploadXHR.upload.addEventListener('progress', (e) => {
                if (e.lengthComputable) {
                    this.progress = Math.round((e.loaded * 100) / e.total);
                    document.getElementById('progress-width').style.width = this.progress + '%';
                }
            }, false);
            this.fileUploadXHR.onreadystatechange = () => {
                if (this.fileUploadXHR.readyState == 4) {
                    if (this.fileUploadXHR.status >= 200 && this.fileUploadXHR.status < 300) {
                        this.auth.hideLoader();
                        this.updateVideoStatus(obj.videoId);
                        this.isUploadingXls = false;
                    }
                }
                else {
                    this.progress = 0;
                    this.progressBar = false;
                    this.isUploadingXls = false;
                    this.auth.hideLoader();
                }
                console.log("this.selectedFiles[0]", this.selectedFiles);
            };
            this.fileUploadXHR.send(this.selectedFiles);
        }
        onFileChange($event) {
            this.Vimeofile = $event.target;
        }
        upload() {
            var formData = new FormData();
            var xhr = new XMLHttpRequest();
            var self = this;
            //Build AWS S3 Request
            formData.append('key', this.payload.clientPayload.key);
            formData.append('x-amz-credential', this.payload.clientPayload['x-amz-credential']);
            formData.append('x-amz-algorithm', this.payload.clientPayload['x-amz-algorithm']);
            formData.append('x-amz-date', this.payload.clientPayload['x-amz-date']);
            formData.append('policy', this.payload.clientPayload['policy']);
            formData.append('x-amz-signature', this.payload.clientPayload['x-amz-signature']);
            formData.append("success_action_status", "201");
            formData.append("success_action_redirect", "");
            formData.append('file', this.file);
            xhr.open('POST', this.payload.clientPayload['uploadLink'], false);
            xhr.onreadystatechange = () => {
                var parser, xmlDoc;
                if (xhr.readyState == 4 && xhr.status == 201) {
                    console.log(xhr.response);
                    var text = '' + xhr.response + '';
                    parser = new DOMParser();
                    xmlDoc = parser.parseFromString(text, "text/xml");
                    if (xmlDoc.getElementsByTagName("ETag")) {
                        var videoID = xmlDoc.getElementsByTagName("ETag")[0].childNodes[0].nodeValue;
                        this.updateVideoStatus(this.payload['videoId']);
                    }
                }
            };
            xhr.send(formData);
        }
        updateVideoStatus(videoID) {
            let obj = {
                "videoID": videoID,
                "institute_id": sessionStorage.getItem('institute_id'),
                "video_status": "Queued",
                "category_id": Number(this.varJson.category_id)
            };
            let url = "/api/v1/instFileSystem/updateVideoStatus";
            this._http.postData(url, obj).subscribe((res) => {
                // console.log(res);
                this.clearuploadObject();
                this.refreshList();
                this._http.updatedDataSelection('subject');
                this.msgService.showErrorMessage(this.msgService.toastTypes.success, '', "Video uploaded successfully");
            }, (err) => {
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', "some problem arise please check with support ");
            });
        }
    };
    UploadFileComponent.ctorParameters = () => [
        { type: _services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] },
        { type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticatorService"] },
        { type: _services_message_show_service__WEBPACK_IMPORTED_MODULE_4__["MessageShowService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _file_service__WEBPACK_IMPORTED_MODULE_5__["FileService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }
    ];
    UploadFileComponent.propDecorators = {
        form: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['form', { static: false },] }]
    };
    UploadFileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-upload-file',
            template: __importDefault(__webpack_require__(/*! raw-loader!./upload-file.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/ecourse-file-manager/core/upload-file/upload-file.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./upload-file.component.scss */ "./src/app/components/course-module/ecourse-file-manager/core/upload-file/upload-file.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"],
            _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticatorService"],
            _services_message_show_service__WEBPACK_IMPORTED_MODULE_4__["MessageShowService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _file_service__WEBPACK_IMPORTED_MODULE_5__["FileService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], UploadFileComponent);
    return UploadFileComponent;
})();



/***/ }),

/***/ "./src/app/components/course-module/ecourse-file-manager/ecourse-file-manager-routing.module.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/components/course-module/ecourse-file-manager/ecourse-file-manager-routing.module.ts ***!
  \******************************************************************************************************/
/*! exports provided: EcourseFileManagerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EcourseFileManagerRoutingModule", function() { return EcourseFileManagerRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ecourse_list_ecourse_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ecourse-list/ecourse-list.component */ "./src/app/components/course-module/ecourse-file-manager/ecourse-list/ecourse-list.component.ts");
/* harmony import */ var _ecourse_file_manager_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ecourse-file-manager.component */ "./src/app/components/course-module/ecourse-file-manager/ecourse-file-manager.component.ts");
/* harmony import */ var _ecourse_subject_list_ecourse_subject_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ecourse-subject-list/ecourse-subject-list.component */ "./src/app/components/course-module/ecourse-file-manager/ecourse-subject-list/ecourse-subject-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//import { SettingsComponent } from './settings/settings.component';
const routes = [
    {
        path: '',
        component: _ecourse_file_manager_component__WEBPACK_IMPORTED_MODULE_3__["EcourseFileManagerComponent"],
        pathMatch: 'prefix',
        children: [
            {
                path: '',
                redirectTo: 'ecourses'
            },
            {
                path: 'ecourses',
                component: _ecourse_list_ecourse_list_component__WEBPACK_IMPORTED_MODULE_2__["EcourseListComponent"]
            },
            {
                path: 'ecourses/:ecourse_id/subjects',
                component: _ecourse_subject_list_ecourse_subject_list_component__WEBPACK_IMPORTED_MODULE_4__["EcourseSubjectListComponent"]
            },
        ]
    }
];
let EcourseFileManagerRoutingModule = /** @class */ (() => {
    let EcourseFileManagerRoutingModule = class EcourseFileManagerRoutingModule {
    };
    EcourseFileManagerRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], EcourseFileManagerRoutingModule);
    return EcourseFileManagerRoutingModule;
})();



/***/ }),

/***/ "./src/app/components/course-module/ecourse-file-manager/ecourse-file-manager.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/course-module/ecourse-file-manager/ecourse-file-manager.component.scss ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".row {\n  margin: 0;\n}\n\na {\n  text-decoration: none;\n}\n\na i {\n  color: black;\n  font-family: 'FontAwesome';\n}\n\n.text-headline {\n  font-size: 14px;\n  font-weight: 600;\n  padding: 0;\n}\n\n.btn-wide-blue {\n  background: #2680eb;\n  color: #fff;\n  border-radius: 2px;\n  box-shadow: none;\n  border: 0;\n  width: 100%;\n  margin: 0;\n}\n\n.file-mgr-sidebar .sidecard {\n  box-shadow: 0px 3px 6px #696969;\n  border-radius: 2px;\n  margin: 1em 0;\n  padding: .5em 0;\n  width: 220px;\n  cursor: default;\n  background: white;\n}\n\n.file-mgr-sidebar .sidecard ul li {\n  padding: .4em .6em;\n  cursor: pointer;\n  font-weight: bold;\n  padding-top: 0;\n}\n\n.file-mgr-sidebar .sidecard .wrap {\n  padding: .4em .6em;\n  display: inline-block;\n}\n\n.file-mgr-sidebar .sidecard .wrap h4 {\n  font-weight: 500;\n  margin-bottom: .5em;\n}\n\n.file-mgr-sidebar .sidecard .wrap .progress-bar {\n  background: #e8e8e8;\n  height: 4px;\n  width: 100%;\n  margin: .2em 0;\n  border: 0;\n  border-radius: 2px;\n}\n\n.file-mgr-sidebar .sidecard .wrap .progress-bar .progress-stat {\n  background: #2680eb;\n  width: 79%;\n  height: 4px;\n}\n\n.file-mgr-wrapper .file-mgr-breadcrumb {\n  border-bottom: 1pt solid #ddd;\n  padding: .5em 0;\n  margin-bottom: .8em;\n  cursor: pointer;\n}\n\n.file-mgr-wrapper .file-mgr-body {\n  padding: 0;\n}\n\na.breadcrums {\n  color: black !important;\n  font-size: 12px;\n}\n\n.usage {\n  color: black !important;\n}\n\n.mainDiv {\n  height: 90vh;\n  padding: 1%;\n  padding-bottom: 0;\n}\n\n.qInfoIcon {\n  width: 15px !important;\n  height: 15px !important;\n  color: #0084f6 !important;\n  border: 1px solid #0084f6 !important;\n  border-radius: 50% !important;\n  padding: 0px 1px !important;\n  margin-left: 3px !important;\n  font-size: 12px !important;\n  line-height: 14px !important;\n  font-weight: bolder !important;\n  width: 20px;\n  margin-left: 5px;\n  height: 20px;\n  border: 1px solid #ccc;\n  border-radius: 50%;\n  display: block;\n  text-align: center;\n  box-sizing: border-box;\n  line-height: 20px;\n  font-weight: 600;\n  font-size: 12px;\n  cursor: pointer;\n  box-shadow: 0px 0px 1px 0px #ccc inset;\n  color: #888;\n  transition: all 0.2s linear;\n}\n\n.tooltip-box-field {\n  width: 150px;\n  white-space: nowrap;\n  min-height: 41px;\n  line-height: 18px;\n  padding: 5px 5px;\n  overflow: visible;\n  color: black;\n  visibility: hidden;\n  font-weight: bold;\n}\n\n.tooltip-box-field.lg {\n  width: 200px;\n  white-space: nowrap;\n  line-height: 20px;\n  padding: 5px 5px;\n}\n\n.tooltip-box-field.sm {\n  width: 100px;\n  white-space: nowrap;\n  min-height: 40px;\n  padding: 5px 5px;\n}\n\n.ga-modal-wrapper {\n  right: 0;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  background: rgba(136, 136, 136, 0.6);\n  z-index: 999;\n}\n\n.ga-modal-wrapper .ga-modal-container {\n  display: flex;\n  overflow-y: auto;\n  height: 100%;\n}\n\n.ga-modal-wrapper .ga-modal-container .ga-modal {\n  margin: auto;\n  background: #fff;\n  border: 2pt solid #fff;\n  border-radius: .2em;\n  box-shadow: 0 2pt 3pt #999;\n  min-width: 30%;\n  max-width: 35%;\n}\n\n.ga-modal-wrapper .ga-modal-container .ga-modal .ga-modal-head {\n  padding: .5em 1em;\n  border-bottom: 1pt solid #ddd;\n  font-weight: bold;\n  text-align: center;\n}\n\n.ga-modal-wrapper .ga-modal-container .ga-modal .ga-modal-body {\n  padding: 1em;\n  text-align: center;\n  padding-top: 0px;\n}\n\n.model_body_div .field-wrapper label {\n  color: #3e3d4a;\n  font-weight: 600;\n}\n\n.model_body_div .field-wrapper .dropdown-div .dropdown {\n  width: 100%;\n  height: 30px;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n}\n\n.toggle {\n  cursor: pointer;\n  display: inline-block;\n}\n\n.toggle-switch {\n  display: inline-block;\n  background: #0084f6;\n  border-radius: 16px;\n  width: 46px;\n  height: 16px;\n  position: relative;\n  vertical-align: middle;\n  transition: background 0.25s;\n}\n\n.toggle-switch:before, .toggle-switch:after {\n  content: \"\";\n}\n\n.toggle-switch:before {\n  display: block;\n  background: linear-gradient(to bottom, #fff 0%, #eee 100%);\n  border-radius: 50%;\n  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);\n  width: 16px;\n  height: 16px;\n  position: absolute;\n  transition: left 0.25s;\n}\n\n.toggle:hover .toggle-switch:before {\n  background: linear-gradient(to bottom, #fff 0%, #fff 100%);\n  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.5);\n}\n\n.toggle-checkbox:checked + .toggle-switch {\n  background: #0084f6;\n}\n\n.toggle-checkbox:checked + .toggle-switch:before {\n  left: 30px;\n}\n\n.toggle-checkbox {\n  position: absolute;\n  visibility: hidden;\n}\n\n.toggle-label {\n  margin-left: 5px;\n  margin-right: 5px;\n  position: relative;\n  top: 2px;\n  font-weight: 600;\n}\n\n.active_toggle_button {\n  color: #00a2ff;\n}\n\n.inactive_toggle_button {\n  color: lightgray;\n}\n\n.qInfoIcon {\n  width: 20px;\n  margin-left: 5px;\n  height: 20px;\n  border: 1px solid #ccc;\n  border-radius: 50%;\n  display: block;\n  text-align: center;\n  box-sizing: border-box;\n  line-height: 20px;\n  font-weight: 600;\n  font-size: 12px;\n  cursor: pointer;\n  box-shadow: 0px 0px 1px 0px #ccc inset;\n  color: #888;\n  transition: all 0.2s linear;\n}\n\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\n  input[type='range'] {\n    overflow: hidden;\n    -webkit-appearance: none;\n    background-color: #337ab7;\n  }\n  input[type='range']::-webkit-slider-thumb {\n    width: 0px;\n    -webkit-appearance: none;\n    height: 10px;\n    cursor: ew-resize;\n    box-shadow: -8px 0 0 8px orange;\n  }\n}\n\n.btn_cross {\n  text-align: right;\n  margin-bottom: -25px;\n  position: relative;\n  bottom: 1.4rem;\n  right: -.7rem;\n}\n\n.field-wrapper {\n  position: relative;\n  padding-top: 10px;\n  text-align: LEFT;\n  padding: 20px 20px 0px 20px;\n  padding-top: 10px;\n  padding-right: 20px;\n  padding-bottom: 0px;\n  padding-left: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb3Vyc2UtbW9kdWxlL2Vjb3Vyc2UtZmlsZS1tYW5hZ2VyL2Vjb3Vyc2UtZmlsZS1tYW5hZ2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUZBO0VBR0ksWUFBWTtFQUNaLDBCQUEwQjtBQUc5Qjs7QUFDQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsVUFBVTtBQUVaOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsU0FBUztBQUNYOztBQUVBO0VBR0ksK0JBQStCO0VBQy9CLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsZUFBZTtFQUNmLFlBQVk7RUFDWixlQUFlO0VBQ2YsaUJBQWlCO0FBRHJCOztBQVJBO0VBYVEsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0FBYztBQUR0Qjs7QUFmQTtFQXlCTSxrQkFBa0I7RUFDbEIscUJBQXFCO0FBTjNCOztBQXBCQTtFQTZCUSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBTDNCOztBQXpCQTtFQWtDUSxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFdBQVc7RUFDWCxjQUFjO0VBQ2QsU0FBUztFQUNULGtCQUFrQjtBQUwxQjs7QUFsQ0E7RUEwQ1UsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixXQUFXO0FBSnJCOztBQVdBO0VBRUksNkJBQTZCO0VBQzdCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsZUFBZTtBQVRuQjs7QUFJQTtFQVNJLFVBQVU7QUFUZDs7QUFhQTtFQUNFLHVCQUF1QjtFQUN2QixlQUFlO0FBVmpCOztBQVlBO0VBQ0UsdUJBQXVCO0FBVHpCOztBQVlBO0VBRUUsWUFBWTtFQUNWLFdBQVc7RUFDWCxpQkFBaUI7QUFWckI7O0FBYUE7RUFDRSxzQkFBc0I7RUFDcEIsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixvQ0FBb0M7RUFDcEMsNkJBQTZCO0VBQzdCLDJCQUEyQjtFQUMzQiwyQkFBMkI7RUFDM0IsMEJBQTBCO0VBQzFCLDRCQUE0QjtFQUM1Qiw4QkFBOEI7RUFDaEMsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixlQUFlO0VBQ2Ysc0NBQXNDO0VBQ3RDLFdBQVc7RUFDWCwyQkFBMkI7QUFWN0I7O0FBY0E7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQVhuQjs7QUFFQTtFQVdNLFlBQVk7RUFDWixtQkFBbUI7RUFFbkIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQVZ0Qjs7QUFMQTtFQWtCTSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFUdEI7O0FBYUE7RUFDRSxRQUFRO0VBQ1IsZUFBZTtFQUNmLE1BQU07RUFDTixTQUFTO0VBQ1QsT0FBTztFQUNQLG9DQUFvQztFQUNwQyxZQUFZO0FBVmQ7O0FBR0E7RUFVSSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFUaEI7O0FBSEE7RUFlTSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsMEJBQTBCO0VBQzFCLGNBQWM7RUFDZCxjQUFjO0FBUnBCOztBQWJBO0VBd0JRLGlCQUFpQjtFQUNqQiw2QkFBNkI7RUFDN0IsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQVAxQjs7QUFwQkE7RUErQlEsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFQeEI7O0FBWUE7RUFHTSxjQUFjO0VBQ2QsZ0JBQWdCO0FBWHRCOztBQU9BO0VBU1EsV0FBVztFQUNYLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBWjFCOztBQW1CQTtFQUNFLGVBQWU7RUFDZixxQkFBcUI7QUFoQnZCOztBQW1CQTtFQUNFLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0Qiw0QkFBNEI7QUFoQjlCOztBQVFBO0VBWUksV0FBVztBQWhCZjs7QUFJQTtFQWdCSSxjQUFjO0VBQ2QsMERBQTBEO0VBQzFELGtCQUFrQjtFQUNsQix5Q0FBeUM7RUFDekMsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsc0JBQXNCO0FBaEIxQjs7QUFtQkU7RUFDRSwwREFBMEQ7RUFDMUQsd0NBQXdDO0FBaEI1Qzs7QUFtQkU7RUFDRSxtQkFBbUI7QUFoQnZCOztBQWVFO0VBSUksVUFBVTtBQWZoQjs7QUFvQkE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0FBakJwQjs7QUFvQkE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsZ0JBQWdCO0FBakJsQjs7QUFvQkE7RUFDRSxjQUFjO0FBakJoQjs7QUFvQkE7RUFDRSxnQkFBZ0I7QUFqQmxCOztBQXFCQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZUFBZTtFQUNmLHNDQUFzQztFQUN0QyxXQUFXO0VBQ1gsMkJBQTJCO0FBbEI3Qjs7QUE0QkE7RUFDRTtJQUNFLGdCQUFnQjtJQUVoQix3QkFBd0I7SUFDeEIseUJBQXlCO0VBMUIzQjtFQTZCQTtJQUNFLFVBQVU7SUFDVix3QkFBd0I7SUFDeEIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQiwrQkFBK0I7RUEzQmpDO0FBQ0Y7O0FBOEJBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGFBQWE7QUEzQmY7O0FBNkJBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsMkJBQTJCO0VBQzNCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQTFCcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvdXJzZS1tb2R1bGUvZWNvdXJzZS1maWxlLW1hbmFnZXIvZWNvdXJzZS1maWxlLW1hbmFnZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93IHtcbiAgbWFyZ2luOiAwO1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBpIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC1mYW1pbHk6ICdGb250QXdlc29tZSc7XG4gIH1cbn1cblxuLnRleHQtaGVhZGxpbmUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmc6IDA7XG4gIC8vIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG4uYnRuLXdpZGUtYmx1ZSB7XG4gIGJhY2tncm91bmQ6ICMyNjgwZWI7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlcjogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMDtcbn1cblxuLmZpbGUtbWdyLXNpZGViYXIge1xuICAuc2lkZWNhcmQge1xuICAgIC8vIGJveC1zaGFkb3c6IDAgMXB0IDNwdCAwIHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggIzY5Njk2OTtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgbWFyZ2luOiAxZW0gMDtcbiAgICBwYWRkaW5nOiAuNWVtIDA7XG4gICAgd2lkdGg6IDIyMHB4O1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcblxuICAgIHVsIHtcbiAgICAgIGxpIHtcbiAgICAgICAgcGFkZGluZzogLjRlbSAuNmVtO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBwYWRkaW5nLXRvcDogMDtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAvLyBiYWNrZ3JvdW5kOiAjY2VkZmYzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLndyYXAge1xuICAgICAgcGFkZGluZzogLjRlbSAuNmVtO1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXG4gICAgICBoNCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IC41ZW07XG4gICAgICB9XG5cbiAgICAgIC5wcm9ncmVzcy1iYXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xuICAgICAgICBoZWlnaHQ6IDRweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbjogLjJlbSAwO1xuICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcblxuICAgICAgICAucHJvZ3Jlc3Mtc3RhdCB7XG4gICAgICAgICAgYmFja2dyb3VuZDogIzI2ODBlYjtcbiAgICAgICAgICB3aWR0aDogNzklO1xuICAgICAgICAgIGhlaWdodDogNHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5maWxlLW1nci13cmFwcGVyIHtcbiAgLmZpbGUtbWdyLWJyZWFkY3J1bWIge1xuICAgIGJvcmRlci1ib3R0b206IDFwdCBzb2xpZCAjZGRkO1xuICAgIHBhZGRpbmc6IC41ZW0gMDtcbiAgICBtYXJnaW4tYm90dG9tOiAuOGVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIC5maWxlLW1nci1ib2R5IHtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG59XG5cbmEuYnJlYWRjcnVtc3tcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi51c2FnZXtcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG59XG5cbi5tYWluRGl2e1xuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICBoZWlnaHQ6IDkwdmg7XG4gICAgcGFkZGluZzogMSU7XG4gICAgcGFkZGluZy1ib3R0b206IDA7XG59XG5cbi5xSW5mb0ljb24ge1xuICB3aWR0aDogMTVweCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMTVweCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjMDA4NGY2ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwODRmNiAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDBweCAxcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogM3B4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gICAgbGluZS1oZWlnaHQ6IDE0cHggIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogYm9sZGVyICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAwcHggI2NjYyBpbnNldDtcbiAgY29sb3I6ICM4ODg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcbn1cblxuXG4udG9vbHRpcC1ib3gtZmllbGQge1xuICB3aWR0aDogMTUwcHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG1pbi1oZWlnaHQ6IDQxcHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICBwYWRkaW5nOiA1cHggNXB4O1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgY29sb3I6IGJsYWNrO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAmLmxnIHtcbiAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAvLyBtaW4taGVpZ2h0OiA1MHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICBwYWRkaW5nOiA1cHggNXB4O1xuICB9XG4gICYuc20ge1xuICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIG1pbi1oZWlnaHQ6IDQwcHg7XG4gICAgICBwYWRkaW5nOiA1cHggNXB4O1xuICB9XG59XG5cbi5nYS1tb2RhbC13cmFwcGVyIHtcbiAgcmlnaHQ6IDA7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTM2LCAxMzYsIDEzNiwgMC42KTtcbiAgei1pbmRleDogOTk5O1xuXG4gIC5nYS1tb2RhbC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAuZ2EtbW9kYWwge1xuICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgIGJvcmRlcjogMnB0IHNvbGlkICNmZmY7XG4gICAgICBib3JkZXItcmFkaXVzOiAuMmVtO1xuICAgICAgYm94LXNoYWRvdzogMCAycHQgM3B0ICM5OTk7XG4gICAgICBtaW4td2lkdGg6IDMwJTtcbiAgICAgIG1heC13aWR0aDogMzUlO1xuXG4gICAgICAuZ2EtbW9kYWwtaGVhZCB7XG4gICAgICAgIHBhZGRpbmc6IC41ZW0gMWVtO1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHQgc29saWQgI2RkZDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgLmdhLW1vZGFsLWJvZHkge1xuICAgICAgICBwYWRkaW5nOiAxZW07XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZy10b3A6IDBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi5tb2RlbF9ib2R5X2RpdiB7XG4gIC5maWVsZC13cmFwcGVyIHtcbiAgICBsYWJlbCB7XG4gICAgICBjb2xvcjogIzNlM2Q0YTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgfVxuXG4gICAgLmRyb3Bkb3duLWRpdiB7XG4gICAgICAuZHJvcGRvd24ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuLnRvZ2dsZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4udG9nZ2xlLXN3aXRjaCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYmFja2dyb3VuZDogIzAwODRmNjtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgd2lkdGg6IDQ2cHg7XG4gIGhlaWdodDogMTZweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMjVzO1xuXG4gICY6YmVmb3JlLFxuICAmOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICB9XG5cbiAgJjpiZWZvcmUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNmZmYgMCUsICNlZWUgMTAwJSk7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDFweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAgIHdpZHRoOiAxNnB4O1xuICAgIGhlaWdodDogMTZweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdHJhbnNpdGlvbjogbGVmdCAwLjI1cztcbiAgfVxuXG4gIC50b2dnbGU6aG92ZXIgJjpiZWZvcmUge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNmZmYgMCUsICNmZmYgMTAwJSk7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMXB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgfVxuXG4gIC50b2dnbGUtY2hlY2tib3g6Y2hlY2tlZCsmIHtcbiAgICBiYWNrZ3JvdW5kOiAjMDA4NGY2O1xuXG4gICAgJjpiZWZvcmUge1xuICAgICAgbGVmdDogMzBweDtcbiAgICB9XG4gIH1cbn1cblxuLnRvZ2dsZS1jaGVja2JveCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4udG9nZ2xlLWxhYmVsIHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5hY3RpdmVfdG9nZ2xlX2J1dHRvbiB7XG4gIGNvbG9yOiAjMDBhMmZmO1xufVxuXG4uaW5hY3RpdmVfdG9nZ2xlX2J1dHRvbiB7XG4gIGNvbG9yOiBsaWdodGdyYXk7XG59XG5cblxuLnFJbmZvSWNvbiB7XG4gIHdpZHRoOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAwcHggI2NjYyBpbnNldDtcbiAgY29sb3I6ICM4ODg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcbiAgJjpob3ZlciB7XG4gICAgICAvLyBib3JkZXItY29sb3I6ICRoZWFkZXItYmc7XG4gICAgICAvLyBib3gtc2hhZG93OiAwcHggMHB4IDFweCAwcHggJGhlYWRlci1iZyBpbnNldDtcbiAgICAgIC8vIGNvbG9yOiAkaGVhZGVyLWJnO1xuICB9XG59XG5cblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOjApIHtcbiAgaW5wdXRbdHlwZT0ncmFuZ2UnXSB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAvLyB3aWR0aDogMjAwcHg7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzdhYjc7XG4gIH1cblxuICBpbnB1dFt0eXBlPSdyYW5nZSddOjotd2Via2l0LXNsaWRlci10aHVtYiB7XG4gICAgd2lkdGg6IDBweDtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICAgIGN1cnNvcjogZXctcmVzaXplO1xuICAgIGJveC1zaGFkb3c6IC04cHggMCAwIDhweCBvcmFuZ2U7XG4gIH1cblxufVxuLmJ0bl9jcm9zcyB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW4tYm90dG9tOiAtMjVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3R0b206IDEuNHJlbTtcbiAgcmlnaHQ6IC0uN3JlbTtcbn1cbi5maWVsZC13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgdGV4dC1hbGlnbjogTEVGVDtcbiAgcGFkZGluZzogMjBweCAyMHB4IDBweCAyMHB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/course-module/ecourse-file-manager/ecourse-file-manager.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/course-module/ecourse-file-manager/ecourse-file-manager.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: EcourseFileManagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EcourseFileManagerComponent", function() { return EcourseFileManagerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_upload_file_upload_file_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/upload-file/upload-file.component */ "./src/app/components/course-module/ecourse-file-manager/core/upload-file/upload-file.component.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/authenticator.service */ "./src/app/services/authenticator.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _file_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./file.service */ "./src/app/components/course-module/ecourse-file-manager/file.service.ts");
/* harmony import */ var _services_message_show_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/message-show.service */ "./src/app/services/message-show.service.ts");
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







let EcourseFileManagerComponent = /** @class */ (() => {
    let EcourseFileManagerComponent = class EcourseFileManagerComponent {
        constructor(_http, auth, router, _fservice, msgService) {
            this._http = _http;
            this.auth = auth;
            this.router = router;
            this._fservice = _fservice;
            this.msgService = msgService;
            this.showUploadFileModal = false;
            this.vDOCipher_allocated_storage = '0';
            this.vDOCipher_used_storage = '0';
            this.enable_vdoCipher_feature = false;
            this.enable_vimeo_feature = false;
            this.showSettings = true;
            this.is_video_public = true;
            this.settingDetails = {
                "institute_id": 100058,
                "video_watermark": "Megha",
                "is_video_public": true,
                "watermark_opacity": 1,
                "watermark_color": "#2680eb",
                "watermark_font_size": 10,
                "video_watch_limit_per_video": 1,
                "storage_capacity_threshold_alerts": 1,
                "bandwidth_threshold_alerts": 1,
                "watermark_text_moving_interval": 1,
                watermark_name: '',
                watermark_phone: '',
                watermark_email: ''
            };
            console.log(router.url);
            router.events.filter(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"])
                .subscribe(event => {
                this.currentRoute = router.url;
                console.log(event);
            });
        }
        ngOnInit() {
            this.auth.currentInstituteId.subscribe(id => {
                this.institute_id = id;
                this.getDataUsedInCourseList();
            });
            this.auth.institute_type.subscribe(res => {
                if (res == "LANG") {
                    this.isLangInstitue = true;
                }
                else {
                    this.isLangInstitue = false;
                }
            });
            this.enable_vdoCipher_feature = sessionStorage.getItem('enable_vdoCipher_feature') == '1' ? true : false;
            this.enable_vimeo_feature = sessionStorage.getItem('enable_vimeo_feature') == '1' ? true : false;
        }
        toggleFileUploadModal() {
            this.uploadFile.showParentTopicModel = (this.uploadFile.showParentTopicModel) ? false : true;
            this.uploadFile.showModal = (this.uploadFile.showModal) ? false : true;
        }
        gotoPageData(route) {
            console.log(route);
            this.router.navigate([route.routeLink], { queryParams: route.data });
        }
        // user data usage get
        getDataUsedInCourseList() {
            let url = "/api/v1/instFileSystem/getUsedSpace/" + this.institute_id;
            this._http.getData(url).subscribe((res) => {
                console.log(res);
                this._fservice.storageData.storage_allocated = (Number(res.storage_allocated) * 0.001048576);
                this._fservice.storageData.uploaded_size = (Number(res.uploaded_size) * 0.001048576);
                this.vDOCipher_allocated_bandwidth = (Number(res.vDOCipher_allocated_bandwidth) / 1024).toFixed(3);
                this.vDOCipher_used_bandwidth = (Number(res.vDOCipher_used_bandwidth) / 1024).toFixed(3);
                let tempPer = ((100 * this.vDOCipher_used_bandwidth) / this.vDOCipher_allocated_bandwidth).toFixed(3);
                this.percent = tempPer * 2;
                this.remainPercent = 200 - this.percent;
                this.vDOCipher_allocated_storage = (Number(res.vDOCipher_allocated_storage) / 1024).toFixed(3);
                this.vDOCipher_used_storage = (Number(res.vDOCipher_used_storage) / 1024).toFixed(3);
                let storagetempPer = ((100 * this.vDOCipher_used_storage) / this.vDOCipher_allocated_storage).toFixed(3);
                this.storagePercent = storagetempPer * 2;
                this.storageRemainPercent = 200 - this.storagePercent;
                this.vimeo_allocated_storage = (Number(res.vimeo_allocated_storage) / 1024).toFixed(3);
                sessionStorage.setItem('vimeo_allocated_storage', this.vimeo_allocated_storage);
                this.vimeo_consumed_storage = (Number(res.vimeo_consumed_storage) / 1024).toFixed(3);
                let vimeotempPer = ((100 * this.vimeo_consumed_storage) / this.vimeo_allocated_storage).toFixed(3);
                this.vimeoPercent = vimeotempPer * 2;
                this.vimeoRemainPercent = 200 - this.vimeoPercent;
                let width = 1;
                if (this._fservice.storageData.uploaded_size != 0 &&
                    this._fservice.storageData.uploaded_size <= this._fservice.storageData.storage_allocated) {
                    width = (100 * this._fservice.storageData.uploaded_size) / this._fservice.storageData.storage_allocated;
                }
                this._fservice.storageData.width = Math.round(width);
            });
        }
        getSettingDetails() {
            // <base_url>/instFileSystem/getStudyMaterialSetting/{institute_id}
            let url = "/api/v1/instFileSystem/getStudyMaterialSetting/" + this.institute_id;
            this.auth.showLoader();
            this.showSettings = true;
            this._http.getData(url).subscribe((res) => {
                console.log("getSettingDetails", res);
                this.auth.hideLoader();
                this.settingDetails = res;
                this.is_video_public = this.settingDetails.is_video_public == 'Y' ? true : false;
                if (this.settingDetails.dynamic_watermark_text != null && this.settingDetails.dynamic_watermark_text != 'NA') {
                    let temp_details = this.settingDetails.dynamic_watermark_text.split(',');
                    for (let i = 0; i < 3; i++) {
                        if (temp_details[i] == 'name') {
                            this.settingDetails.watermark_name = true;
                        }
                        else if (temp_details[i] == 'phone') {
                            this.settingDetails.watermark_phone = true;
                        }
                        else if (temp_details[i] == 'email') {
                            this.settingDetails.watermark_email = true;
                        }
                    }
                }
                this.showSettings = false;
            }, err => {
                this.auth.hideLoader();
            });
        }
        clearObject() {
            this.showSettings = !this.showSettings;
        }
        Save_Setting_Details() {
            this.auth.showLoader();
            //<base_url>/instFileSystem/updateStudyMaterialSetting
            let url = "/api/v1/instFileSystem/updateStudyMaterialSetting";
            this.settingDetails.institute_id = this.institute_id;
            this.settingDetails.is_video_public = this.is_video_public == true ? 'Y' : 'N';
            let temp = [];
            (this.settingDetails.watermark_name) ? (temp.push('name')) : '';
            (this.settingDetails.watermark_phone) ? (temp.push('phone')) : '';
            (this.settingDetails.watermark_email) ? (temp.push('email')) : '';
            temp = temp.join(',');
            if (temp == '' || temp == null) {
                temp = 'NA';
            }
            let object = {
                "institute_id": this.settingDetails.institute_id,
                "video_watermark": this.settingDetails.video_watermark,
                "is_video_public": this.settingDetails.is_video_public,
                "watermark_opacity": this.settingDetails.watermark_opacity,
                "watermark_color": this.settingDetails.watermark_color,
                "watermark_font_size": this.settingDetails.watermark_font_size,
                "watermark_text_moving_interval": this.settingDetails.watermark_text_moving_interval,
                "vdocipher_bandwidth_threshold": this.settingDetails.vdocipher_bandwidth_threshold,
                "vdocipher_storage_capacity_threshold": this.settingDetails.vdocipher_storage_capacity_threshold,
                dynamic_watermark_text: temp
            };
            this._http.putData(url, object).subscribe((res) => {
                console.log(res);
                this.auth.hideLoader();
                this.showSettings = true;
                this.msgService.showErrorMessage(this.msgService.toastTypes.success, '', res.message);
            }, err => {
                console.log(err);
                this.auth.hideLoader();
                this.msgService.showErrorMessage(this.msgService.toastTypes.error, '', err.message);
            });
        }
    };
    EcourseFileManagerComponent.ctorParameters = () => [
        { type: _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] },
        { type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _file_service__WEBPACK_IMPORTED_MODULE_5__["FileService"] },
        { type: _services_message_show_service__WEBPACK_IMPORTED_MODULE_6__["MessageShowService"] }
    ];
    EcourseFileManagerComponent.propDecorators = {
        uploadFile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [_core_upload_file_upload_file_component__WEBPACK_IMPORTED_MODULE_1__["UploadFileComponent"], { static: false },] }]
    };
    EcourseFileManagerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ecourse-file-manager',
            template: __importDefault(__webpack_require__(/*! raw-loader!./ecourse-file-manager.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/ecourse-file-manager/ecourse-file-manager.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./ecourse-file-manager.component.scss */ "./src/app/components/course-module/ecourse-file-manager/ecourse-file-manager.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _file_service__WEBPACK_IMPORTED_MODULE_5__["FileService"],
            _services_message_show_service__WEBPACK_IMPORTED_MODULE_6__["MessageShowService"]])
    ], EcourseFileManagerComponent);
    return EcourseFileManagerComponent;
})();



/***/ }),

/***/ "./src/app/components/course-module/ecourse-file-manager/ecourse-file-manager.module.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/course-module/ecourse-file-manager/ecourse-file-manager.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: EcourseFileManagerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EcourseFileManagerModule", function() { return EcourseFileManagerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ecourse_file_manager_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ecourse-file-manager.component */ "./src/app/components/course-module/ecourse-file-manager/ecourse-file-manager.component.ts");
/* harmony import */ var _ecourse_file_manager_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ecourse-file-manager-routing.module */ "./src/app/components/course-module/ecourse-file-manager/ecourse-file-manager-routing.module.ts");
/* harmony import */ var _ecourse_list_ecourse_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ecourse-list/ecourse-list.component */ "./src/app/components/course-module/ecourse-file-manager/ecourse-list/ecourse-list.component.ts");
/* harmony import */ var _core_upload_file_upload_file_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/upload-file/upload-file.component */ "./src/app/components/course-module/ecourse-file-manager/core/upload-file/upload-file.component.ts");
/* harmony import */ var _ecourse_subject_list_ecourse_subject_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ecourse-subject-list/ecourse-subject-list.component */ "./src/app/components/course-module/ecourse-file-manager/ecourse-subject-list/ecourse-subject-list.component.ts");
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/fileupload */ "./node_modules/primeng/fileupload.js");
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_fileupload__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/components/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _file_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./file.service */ "./src/app/components/course-module/ecourse-file-manager/file.service.ts");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var _services_institute_setting_service_institute_setting_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../services/institute-setting-service/institute-setting.service */ "./src/app/services/institute-setting-service/institute-setting.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












//import { SettingsComponent } from './settings/settings.component';

let EcourseFileManagerModule = /** @class */ (() => {
    let EcourseFileManagerModule = class EcourseFileManagerModule {
    };
    EcourseFileManagerModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ecourse_file_manager_routing_module__WEBPACK_IMPORTED_MODULE_3__["EcourseFileManagerRoutingModule"],
                primeng_fileupload__WEBPACK_IMPORTED_MODULE_7__["FileUploadModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]
            ],
            declarations: [
                _ecourse_file_manager_component__WEBPACK_IMPORTED_MODULE_2__["EcourseFileManagerComponent"],
                _ecourse_list_ecourse_list_component__WEBPACK_IMPORTED_MODULE_4__["EcourseListComponent"],
                _core_upload_file_upload_file_component__WEBPACK_IMPORTED_MODULE_5__["UploadFileComponent"],
                _ecourse_subject_list_ecourse_subject_list_component__WEBPACK_IMPORTED_MODULE_6__["EcourseSubjectListComponent"],
            ],
            providers: [
                _file_service__WEBPACK_IMPORTED_MODULE_10__["FileService"],
                _services_products_service__WEBPACK_IMPORTED_MODULE_11__["ProductService"],
                _services_institute_setting_service_institute_setting_service__WEBPACK_IMPORTED_MODULE_12__["InstituteSettingService"]
            ]
        })
    ], EcourseFileManagerModule);
    return EcourseFileManagerModule;
})();



/***/ }),

/***/ "./src/app/components/course-module/ecourse-file-manager/ecourse-list/ecourse-list.component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/components/course-module/ecourse-file-manager/ecourse-list/ecourse-list.component.scss ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* ===============================header colors=======================*/\n.table-format-first .table-responsive table th,\n.table-format-first .table-responsive table td {\n  text-align: center;\n  padding: 10px 5px;\n}\n.table-format-first .table-responsive table th {\n  text-transform: capitalize;\n  font-size: 14px;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper {\n  display: inline-block;\n  overflow: initial;\n  margin-left: 0;\n  width: auto;\n  position: relative;\n  background: transparent;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox {\n  z-index: 2;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label {\n  font-size: 16px;\n  margin-left: 7px;\n  font-weight: 600;\n  vertical-align: middle;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:after, .table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:before {\n  z-index: 1;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper:after {\n  content: '';\n  width: 20px;\n  height: 20px;\n  background: #fff;\n  left: 0;\n  top: 0;\n  position: absolute;\n}\n.table-format-first .table-responsive table tbody tr td .fa-trash-o {\n  color: #f44336;\n  font-size: 20px;\n}\n.table-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-top: 10px;\n}\n.table-container .heading-container {\n  background: #e0eaec;\n  display: flex;\n  flex-direction: row;\n  font-size: 14px;\n  font-weight: 600;\n  text-align: left;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n}\n.table-container .heading-container .heading-item {\n  width: 10%;\n  text-align: center;\n}\n.table-container .value-outer-container {\n  display: flex;\n  flex-direction: column;\n  min-height: 53vh;\n  max-height: 54vh;\n  overflow-x: hidden;\n  overflow-y: auto;\n  border: 1px solid #ccc;\n}\n.table-container .value-outer-container .value-container {\n  display: flex;\n  flex-direction: row;\n  text-align: left;\n  padding: 4px;\n  font-size: 12px;\n  border-bottom: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n  border-top: none;\n}\n.table-container .value-outer-container .value-container .value-item {\n  width: 10%;\n  text-align: center;\n}\n.wrap-data {\n  height: 72vh;\n  overflow-y: scroll;\n  overflow-x: none;\n}\n.wrap-data ::-webkit-scrollbar {\n  display: block !important;\n  width: 7px;\n  height: 7px;\n}\n.btn_cross {\n  text-align: right;\n  margin-bottom: -25px;\n  position: relative;\n  bottom: 1.4rem;\n  right: -.7rem;\n}\n#addDiv {\n  text-align: right;\n  position: absolute;\n  right: 30px;\n  top: -3rem;\n}\n#addDiv .btn_addecourse {\n  padding: 8px;\n  border-radius: 4px;\n  color: #fff;\n  background: #2680eb;\n  font-weight: 600;\n  font-size: 12px;\n}\n.icons:hover {\n  color: #2680eb;\n}\n.ecourse-item {\n  padding: 7px;\n  width: 100%;\n  justify-content: center;\n  display: flex;\n  flex-direction: row;\n  margin-bottom: 5px;\n}\n.ecourse-item .ecourse-card {\n  border-radius: 4px;\n  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);\n  border: solid 1px #cedff3;\n  background-color: #ffffff;\n  height: 100%;\n  width: 100%;\n  cursor: pointer;\n}\n.ecourse-item .ecourse-card:hover .head {\n  background: #b1ccec;\n}\n.ecourse-item .ecourse-card .head {\n  padding: .4em .6em;\n  background-color: #d3e3f2;\n  font-weight: bold;\n  color: #3f2e2e;\n  height: 30px;\n  overflow: hidden;\n}\n.ecourse-item .ecourse-card .body {\n  padding: .6em .8em;\n}\n.ecourse-item .ecourse-card .body ul {\n  padding-left: 1.4em;\n}\n.ecourse-item .ecourse-card .body ul li {\n  padding: .2em 0;\n  font-size: .9em;\n  color: #212c34;\n  width: 15%;\n  float: left;\n}\n.ecourse-item .ecourse-card .body ul {\n  list-style: none;\n}\n.ecourse-item .ecourse-card .body ul li::before {\n  content: \"\\2022\";\n  color: #85bdff;\n  font-weight: bold;\n  display: inline-block;\n  width: 1em;\n  margin-left: -1em;\n}\n.black-bg {\n  background: rgba(12, 11, 11, 0.3);\n  position: fixed;\n  top: 0px;\n  height: 100%;\n  left: 0px;\n  z-index: 6;\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY3NzL2NvbW1vbi92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jb3Vyc2UtbW9kdWxlL2Vjb3Vyc2UtZmlsZS1tYW5hZ2VyL2Vjb3Vyc2UtbGlzdC9lY291cnNlLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWUEsdUVBQUE7QUFXQTs7RUFLZ0Isa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQ3hCakM7QURrQkE7RUFTZ0IsMEJBQTBCO0VBQzFCLGVBQWU7QUN2Qi9CO0FEYUE7RUFnQjRCLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsdUJBQXVCO0FDekJuRDtBRElBO0VBdUJnQyxVQUFVO0FDdkIxQztBREFBO0VBMEJnQyxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixzQkFBc0I7QUN0QnREO0FEUEE7RUFnQ29DLFVBQVU7QUNyQjlDO0FEWEE7RUFvQ2dDLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixPQUFPO0VBQ1AsTUFBTTtFQUNOLGtCQUFrQjtBQ3JCbEQ7QURyQkE7RUE4QzRCLGNBbERiO0VBbURhLGVBQWU7QUNyQjNDO0FEOEJBO0VBQ0ksYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsZ0JBQWdCO0FDM0JwQjtBRHVCQTtFQU1NLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLHlCQUF5QjtBQ3pCL0I7QURVQTtFQWlCUSxVQUFVO0VBQ1Ysa0JBQWtCO0FDdkIxQjtBREtBO0VBc0JNLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtBQ3ZCNUI7QURMQTtFQThCUSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZUFBZTtFQUNmLDZCQUE2QjtFQUM3QixvQkFBb0I7RUFDcEIseUJBQXlCO0VBQ3pCLGdCQUFnQjtBQ3JCeEI7QURqQkE7RUF3Q1UsVUFBVTtFQUNWLGtCQUFrQjtBQ25CNUI7QUFwR0E7RUFFRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQXNHbEI7QUExR0E7RUFPSSx5QkFBeUI7RUFDekIsVUFBVTtFQUNWLFdBQVc7QUF1R2Y7QUFuR0E7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsYUFBYTtBQXNHZjtBQW5HQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsV0FBVztFQUVYLFVBQVU7QUFxR1o7QUExR0E7RUFRSSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFzR25CO0FBbEdBO0VBQ0UsY0FBYztBQXFHaEI7QUFsR0E7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQXFHcEI7QUEzR0E7RUFTSSxrQkFBa0I7RUFDbEIsMkNBQTJDO0VBQzNDLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFdBQVc7RUFDWCxlQUFlO0FBc0duQjtBQXJIQTtFQW1CUSxtQkFBbUI7QUFzRzNCO0FBekhBO0VBeUJNLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxZQUFZO0VBQ1osZ0JBQWdCO0FBb0d0QjtBQWxJQTtFQWtDTSxrQkFBa0I7QUFvR3hCO0FBdElBO0VBc0NRLG1CQUFtQjtBQW9HM0I7QUExSUE7RUF5Q1UsZUFBZTtFQUNmLGVBQWU7RUFDZixjQUFjO0VBQ2QsVUFBVTtFQUNWLFdBQVc7QUFxR3JCO0FBbEpBO0VBa0RRLGdCQUFnQjtBQW9HeEI7QUF0SkE7RUFzRFEsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixpQkFBaUI7QUFvR3pCO0FBM0ZBO0VBQ0UsaUNBQWlDO0VBQ2pDLGVBQWU7RUFDZixRQUFRO0VBQ1IsWUFBWTtFQUNaLFNBQVM7RUFDVCxVQUFVO0VBQ1YsV0FBVztBQThGYiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY291cnNlLW1vZHVsZS9lY291cnNlLWZpbGUtbWFuYWdlci9lY291cnNlLWxpc3QvZWNvdXJzZS1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHB1bGwtTDogbGVmdDtcbiRwdWxsLVI6IHJpZ2h0O1xuJHB1bGwtbm9uZTogbm9uZTtcbiRmdWxsLXdpZHRoOiAxMDAlO1xuJGJvcmRlci1ib3g6IGJvcmRlci1ib3g7XG4kYm9yZGVyLWNvbG9yOiAjZGVlYWVlO1xuJGJnLXdoaXRlOiAjZmZmO1xuJGVycm9yLWNvbG9yOiAjZmYwMDAwO1xuJGNvbW1vbi1ibHVlOiAjMDA4NGY2O1xuJHByaW1hcnktY29sb3I6ICMzMzM7XG4kYm9yZGVyLWNvbW1vbjojZWFlYWViO1xuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09aGVhZGVyIGNvbG9ycz09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuJGhlYWRlci1iZzojMDA2MEEzO1xuJGhlYWRlci1ib3JkZXI6I2VhZWFlYjtcbiRsZWZ0TWVudUJnOiNmYWZhZmE7XG4kbGVmdE1lbnVIb3ZlckJnOiMwMDg0ZjY7XG4kbGVmdE1lbnVUZXh0SG92ZXJDb2xvcjojZmZmO1xuJHJlZEJ0bjojZjQ0MzM2O1xuJGJvcmRlcmNjYzojY2NjO1xuJGxpZ2h0Qmx1ZTojZWZmN2ZmO1xuJHRhYmxlSGVhZGluZ0JnQ29sb3I6ICMwMDRhN2U7XG4udGFibGUtZm9ybWF0LWZpcnN0IHtcbiAgICAudGFibGUtcmVzcG9uc2l2ZSB7XG4gICAgICAgIHRhYmxlIHtcbiAgICAgICAgICAgIHRoLFxuICAgICAgICAgICAgdGQge1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoIHtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0Ym9keSB7XG4gICAgICAgICAgICAgICAgdHIge1xuICAgICAgICAgICAgICAgICAgICB0ZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuZmllbGQtY2hlY2tib3gtd3JhcHBlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBpbml0aWFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZm9ybS1jaGVja2JveCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mb3JtLWNoZWNrYm94K2xhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogN3B4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmFmdGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLmZhLXRyYXNoLW8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkcmVkQnRuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnRhYmxlLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgLmhlYWRpbmctY29udGFpbmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICNlMGVhZWM7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgICAuaGVhZGluZy1pdGVtIHtcbiAgICAgICAgd2lkdGg6IDEwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgIH1cbiAgICAudmFsdWUtb3V0ZXItY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgbWluLWhlaWdodDogNTN2aDtcbiAgICAgIG1heC1oZWlnaHQ6IDU0dmg7XG4gICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgIC52YWx1ZS1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgICAgICBib3JkZXItdG9wOiBub25lO1xuICAgICAgICAudmFsdWUtaXRlbSB7XG4gICAgICAgICAgd2lkdGg6IDEwJTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0iLCJAaW1wb3J0IFwiLi9zcmMvYXNzZXRzL2Nzcy9jb21tb24vdmFyaWFibGVzLnNjc3NcIjtcbi53cmFwLWRhdGEge1xuXG4gIGhlaWdodDogNzJ2aDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBvdmVyZmxvdy14OiBub25lO1xuXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDdweDtcbiAgICBoZWlnaHQ6IDdweDtcbiAgfVxufVxuXG4uYnRuX2Nyb3NzIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIG1hcmdpbi1ib3R0b206IC0yNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogMS40cmVtO1xuICByaWdodDogLS43cmVtO1xufVxuXG4jYWRkRGl2IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDMwcHg7XG4gIC8vIHJpZ2h0OiAwcHg7XG4gIHRvcDogLTNyZW07XG5cbiAgLmJ0bl9hZGRlY291cnNlIHtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQ6ICMyNjgwZWI7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbn1cblxuLmljb25zOmhvdmVyIHtcbiAgY29sb3I6ICMyNjgwZWI7XG59XG5cbi5lY291cnNlLWl0ZW0ge1xuICBwYWRkaW5nOiA3cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuXG4gIC5lY291cnNlLWNhcmQge1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3gtc2hhZG93OiAwIDNweCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICAgIGJvcmRlcjogc29saWQgMXB4ICNjZWRmZjM7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAuaGVhZCB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNiMWNjZWM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmhlYWQge1xuICAgICAgLy8gdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgcGFkZGluZzogLjRlbSAuNmVtO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2QzZTNmMjtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgY29sb3I6ICMzZjJlMmU7XG4gICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIH1cblxuICAgIC5ib2R5IHtcbiAgICAgIHBhZGRpbmc6IC42ZW0gLjhlbTtcbiAgICAgIC8vIGhlaWdodDogMTVlbTtcblxuICAgICAgdWwge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEuNGVtO1xuXG4gICAgICAgIGxpIHtcbiAgICAgICAgICBwYWRkaW5nOiAuMmVtIDA7XG4gICAgICAgICAgZm9udC1zaXplOiAuOWVtO1xuICAgICAgICAgIGNvbG9yOiAjMjEyYzM0O1xuICAgICAgICAgIHdpZHRoOiAxNSU7XG4gICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdWwge1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgfVxuXG4gICAgICB1bCBsaTo6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogXCJcXDIwMjJcIjtcbiAgICAgICAgY29sb3I6ICM4NWJkZmY7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHdpZHRoOiAxZW07XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMWVtO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5cblxuXG4uYmxhY2stYmd7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTIsIDExLCAxMSwgMC4zKTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBsZWZ0OiAwcHg7XG4gIHotaW5kZXg6IDY7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/course-module/ecourse-file-manager/ecourse-list/ecourse-list.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/components/course-module/ecourse-file-manager/ecourse-list/ecourse-list.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: EcourseListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EcourseListComponent", function() { return EcourseListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/authenticator.service */ "./src/app/services/authenticator.service.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/http.service */ "./src/app/services/http.service.ts");
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





let EcourseListComponent = /** @class */ (() => {
    let EcourseListComponent = class EcourseListComponent {
        constructor(_http, auth, msgService, router, cd, activatedRoute) {
            this._http = _http;
            this.auth = auth;
            this.msgService = msgService;
            this.router = router;
            this.cd = cd;
            this.activatedRoute = activatedRoute;
            this.categiesList = [];
            this.totalRecords = 0;
            this.searchData = [];
            this.is_video_public = true;
            this.outputMessage = '';
            this.searchValue = '';
            this.PageIndex = 1;
            this.searchDataDataSource = [];
            this.displayBatchSize = 25;
            this.sizeArr = [25, 50, 100, 150, 200, 500, 1000];
            this.schoolModel = false;
            this.auth.currentInstituteId.subscribe(id => {
                this.institute_id = id;
            });
            this.auth.schoolModel.subscribe(res => {
                this.schoolModel = false;
                if (res) {
                    this.schoolModel = true;
                }
            });
            console.log("EcourseListComponent");
        }
        ngOnInit() {
            this.getcategoriesList();
            this._http.routeList = [];
            let obj = { routeLink: '/view/course/ecourse-file-manager/ecourses', name: 'E-Course', data: { data: null } };
            this._http.routeList.push(obj);
            sessionStorage.setItem('routeListForEcourse', JSON.stringify(this._http.routeList));
            this.cd.detectChanges();
            this._http.data.subscribe(data => {
                // console.log(data);
                if (data == 'list') {
                    this.getcategoriesList();
                    this._http.updatedDataSelection(null);
                }
            });
            this.getParams();
        }
        //Developed by - Nalini 
        // When vimeo file uploaded successfully then video status api is called based on video id and pop up msg is displayed
        getParams() {
            let url = window.location.href;
            if (url.indexOf("?") > -1) {
                let arr = url.split('?');
                if (url.length > 1 && arr[1] !== '') {
                    window.location.href = url.substring(0, arr[0].length);
                    this.activatedRoute.queryParams.subscribe(params => {
                        let videoId = params['videoId'];
                        if (videoId != '' && videoId != null) {
                            $('#thankYou').modal('show');
                            let obj = {
                                "videoID": videoId,
                                "institute_id": sessionStorage.getItem('institute_id'),
                                "video_status": "Queued",
                                "category_id": 305
                            };
                            let url = "/api/v1/instFileSystem/updateVideoStatus";
                            this._http.postData(url, obj).subscribe((res) => {
                                console.log(res);
                            }, (err) => {
                            });
                        }
                    });
                }
            }
        }
        getToSubject(ecourse) {
            if (sessionStorage.getItem('routeListForEcourse')) {
                let course_type = btoa(ecourse.course_type.replace(/[\u00A0-\u2666]/g, function (c) {
                    return '&#' + c.charCodeAt(0) + ';';
                }));
                this.router.navigate(['/view/course/ecourse-file-manager/ecourses/' + ecourse.course_type_id + "/subjects"], { queryParams: { data: course_type } });
            }
        }
        getcategoriesList() {
            this.categiesList = [];
            this.auth.showLoader();
            let url = "/api/v1/instFileSystem/institute/" + this.institute_id + "/ecourses-list";
            this._http.getData(url).subscribe((res) => {
                console.log(res);
                this.auth.hideLoader();
                this.categiesList = res;
                this.categiesList.forEach(element => {
                    element.size = 0;
                    element.categoryDtoList.forEach(category => {
                        element.size = element.size + category.size;
                    });
                    element.size = (element.size / 1024);
                });
                this.searchDataDataSource = res;
                this.searchData = this.getDataFromDataSource(0);
                this.totalRecords = this.searchDataDataSource.length;
                console.log("Total Records", this.totalRecords);
                // this.searchData = res;
                if (this.categiesList.length == 0) {
                    this.outputMessage = 'No data found';
                }
            }, err => {
                this.auth.hideLoader();
            });
        }
        searchTeacher() {
            if (this.searchValue != "" && this.searchValue != null) {
                let searchData = this.categiesList.filter(item => Object.keys(item).some(k => item[k] != null && item[k].toString().toLowerCase().includes(this.searchValue.toLowerCase())));
                this.searchData = searchData;
            }
            else {
                this.searchData = this.categiesList;
            }
        }
        // pagination functions
        fetchTableDataByPage(index) {
            this.PageIndex = index;
            let startindex = this.displayBatchSize * (index - 1);
            this.searchData = this.getDataFromDataSource(startindex);
        }
        fetchNext() {
            this.PageIndex++;
            this.fetchTableDataByPage(this.PageIndex);
        }
        fetchPrevious() {
            if (this.PageIndex != 1) {
                this.PageIndex--;
                this.fetchTableDataByPage(this.PageIndex);
            }
        }
        getDataFromDataSource(startindex) {
            let t = this.searchDataDataSource.slice(startindex, startindex + this.displayBatchSize);
            return t;
        }
        updateTableBatchSize(event) {
            this.displayBatchSize = event;
            this.fetchTableDataByPage(this.PageIndex);
        }
    };
    EcourseListComponent.ctorParameters = () => [
        { type: _services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] },
        { type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticatorService"] },
        { type: _services_message_show_service__WEBPACK_IMPORTED_MODULE_4__["MessageShowService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }
    ];
    EcourseListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ecourse-list',
            template: __importDefault(__webpack_require__(/*! raw-loader!./ecourse-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/ecourse-file-manager/ecourse-list/ecourse-list.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./ecourse-list.component.scss */ "./src/app/components/course-module/ecourse-file-manager/ecourse-list/ecourse-list.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"],
            _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticatorService"],
            _services_message_show_service__WEBPACK_IMPORTED_MODULE_4__["MessageShowService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], EcourseListComponent);
    return EcourseListComponent;
})();



/***/ }),

/***/ "./src/app/components/course-module/ecourse-file-manager/ecourse-subject-list/ecourse-subject-list.component.scss":
/*!************************************************************************************************************************!*\
  !*** ./src/app/components/course-module/ecourse-file-manager/ecourse-subject-list/ecourse-subject-list.component.scss ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".scroll_table {\n  height: 80vh;\n  overflow-x: hidden;\n}\n\n.subject-title {\n  cursor: pointer;\n  font-weight: 600;\n  font-size: 14px;\n  margin-bottom: 0.4em;\n}\n\n.subject-label {\n  cursor: pointer;\n  padding: 0.6em 1em;\n  font-weight: bold;\n  border-radius: 3px;\n  font-size: 0.95em;\n  border: 1pt solid #eee;\n  background-color: #fff;\n  box-shadow: 0 1pt 2pt 0 rgba(0, 0, 0, 0.16);\n}\n\n.subject-label:hover {\n  background-color: #cedff3;\n}\n\n.subject-label:after {\n  content: '>';\n  position: absolute;\n  right: 19px;\n  top: 25%;\n  width: 21px;\n  height: 21px;\n  z-index: 0;\n  font-size: 1rem;\n}\n\n#addDiv {\n  text-align: right;\n  position: absolute;\n  right: 0;\n  top: -3rem;\n}\n\n#addDiv .btn_addecourse {\n  padding: 8px;\n  border-radius: 4px;\n  color: #fff;\n  background: #2680eb;\n  font-weight: 600;\n  font-size: 12px;\n}\n\ni.fa {\n  margin-right: .4em;\n  font-size: 12px;\n}\n\n.row {\n  margin: 0;\n}\n\n.text-red {\n  color: red;\n}\n\n.text-blue {\n  color: #2680eb;\n}\n\n.img-color {\n  color: blueviolet;\n  font-size: 14px !important;\n}\n\n.doc-color {\n  color: #3d89f0;\n  font-size: 14px !important;\n}\n\n.assign-color {\n  color: #c59441;\n  font-size: 14px !important;\n}\n\n.btn-ga-white-download {\n  color: #555;\n}\n\n.txt-notes {\n  color: #3d89f0;\n  font-size: 14px !important;\n}\n\n.audio-color {\n  color: #9968be;\n  font-size: 14px !important;\n}\n\n.pdf-color {\n  color: #d55252;\n  font-size: 14px !important;\n}\n\n.epub-color {\n  color: #2bc38a;\n  font-size: 14px !important;\n}\n\n.txt-color {\n  color: #3f2e2e !important;\n  text-decoration: none;\n}\n\n.txt-color .txt-title {\n  font-weight: 400;\n  font-size: 12px;\n  display: inline-block;\n  overflow: hidden;\n  width: 72%;\n  text-overflow: ellipsis;\n  line-height: 15px;\n  white-space: nowrap;\n}\n\n.txt-font {\n  font-size: 12px;\n}\n\n.btn-ga-collapse {\n  vertical-align: middle;\n  background: transparent;\n}\n\n.btn-ga-collapse:hover {\n  color: #3f2e2e;\n}\n\n.btn-ga-white {\n  padding: .2em .8em;\n  height: auto;\n  color: #555;\n}\n\n.btn-ga-white:hover {\n  color: #07f;\n}\n\n.btn-ga-white:focus {\n  outline: none;\n}\n\n.btn-ga-white:active {\n  box-shadow: none;\n  color: #fff;\n  background: #0084f6;\n  border: 1px solid #0084f6;\n}\n\n.btn-xs {\n  font-size: .8em;\n  border: none;\n  background: none;\n}\n\n.field-checkbox-wrapper,\n.field-radio-wrapper {\n  position: absolute;\n  margin-left: -0.6em;\n  margin-top: .4em;\n}\n\n.singleton-row .action-buttons {\n  visibility: hidden;\n}\n\n.singleton-row:hover {\n  background: #ebf6ff;\n}\n\n.singleton-row:hover .action-buttons {\n  visibility: visible;\n}\n\n.material-row,\n.topic-data {\n  padding-left: 1.2em !important;\n}\n\n.main-topic-row {\n  padding: 0;\n  margin: 1em 0;\n  border: 1pt solid #ddd;\n  background: white;\n}\n\n.topic-row {\n  padding: 0;\n}\n\n.topic-data {\n  border-top: 1px solid #eee;\n  padding: .4em 0;\n  display: flex;\n}\n\n.topic-data .topic-name {\n  margin: auto;\n}\n\n.main-topic-data {\n  color: #000;\n  font-weight: bold;\n  padding-left: 0 !important;\n  background: #b8d6eead;\n}\n\n.topic-material-data {\n  padding: 0;\n}\n\n.topic-material-data .material-row {\n  border-top: 1px solid #eee;\n  padding: .4em 0;\n  display: flex;\n}\n\n.topic-material-data .material-row .material-title {\n  margin: 0;\n  display: inline-block;\n  line-height: 15px;\n  padding: 0 7px;\n  word-wrap: break-word;\n}\n\n.subTopics-data {\n  padding: 0;\n}\n\n.ga-modal-wrapper {\n  right: 0;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  background: rgba(136, 136, 136, 0.6);\n  z-index: 999;\n}\n\n.ga-modal-wrapper .ga-modal-container {\n  display: flex;\n  overflow-y: auto;\n  height: 100%;\n}\n\n.ga-modal-wrapper .ga-modal-container .ga-modal {\n  margin: auto;\n  background: #fff;\n  border: 2pt solid #fff;\n  border-radius: .2em;\n  box-shadow: 0 2pt 3pt #999;\n  min-width: 30%;\n}\n\n.ga-modal-wrapper .ga-modal-container .ga-modal .ga-modal-head {\n  padding: .5em 1em;\n  border-bottom: 1pt solid #ddd;\n  font-weight: bold;\n  text-align: center;\n}\n\n.ga-modal-wrapper .ga-modal-container .ga-modal .ga-modal-body {\n  padding: 1em;\n  text-align: center;\n}\n\n.videoplayer {\n  position: fixed;\n  top: 15%;\n  left: 30%;\n  z-index: 10;\n}\n\n.black-bg {\n  background: rgba(12, 11, 11, 0.3);\n  position: fixed;\n  top: 0px;\n  height: 100%;\n  left: 0px;\n  z-index: 6;\n  width: 100%;\n}\n\n.category_name {\n  width: 15%;\n  margin-right: 5px;\n  font-size: 12px;\n  font-weight: normal;\n}\n\n.fa-trash {\n  color: red;\n}\n\n.topic-add-model .modal-dialog {\n  width: 30%;\n  margin-top: 10%;\n}\n\n.topic-add-model .modal-dialog .modal-header {\n  padding: 15px 15px 1px;\n  font-size: 14px;\n}\n\n.topic-add-model .modal-dialog .modal-header .close {\n  margin-bottom: -20px;\n  position: relative;\n  top: -1.0em;\n  font-size: 30px;\n}\n\n.topic-add-model .modal-dialog .modal-body {\n  padding-top: 0px;\n}\n\n.topic-add-model .modal-dialog .modal-body .model_body_div .field-wrapper label {\n  color: #3e3d4a;\n  font-weight: 600;\n  margin-bottom: 5px;\n}\n\n.topic-add-model .modal-dialog .modal-body .model_body_div .field-wrapper .dropdown-div .dropdown {\n  width: 100%;\n  height: 30px;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  padding: 3px;\n}\n\n.deleteFile {\n  float: right;\n  padding: 5px;\n  cursor: pointer;\n  border-radius: 4px;\n  color: #2680eb;\n  background: #fff;\n  font-weight: 600;\n  font-size: 12px;\n  border: 1px solid #2680eb;\n  box-shadow: 0 1pt 3pt 0 rgba(0, 0, 0, 0.16);\n}\n\n.confirmation_popup {\n  position: fixed;\n  top: 35%;\n  left: 40%;\n  width: 300px;\n  background: white;\n  height: auto;\n  padding: 20px;\n  z-index: 100;\n  border-radius: 6px;\n  border-top: 4px solid rgba(255, 0, 0, 0.7);\n  box-shadow: 1px 8px 20px 5px #9c9c9c;\n}\n\n.download_popup {\n  border: none;\n  width: 50%;\n  top: 20%;\n  left: 30%;\n}\n\n.table-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n\n.table-container .heading-container {\n  background: #e0eaec;\n  display: flex;\n  flex-direction: row;\n  font-size: 14px;\n  font-weight: 600;\n  text-align: left;\n  padding: 10px;\n  border: 1px solid #ccc;\n}\n\n.table-container .heading-container .heading-item {\n  width: 60%;\n}\n\n.table-container .value-outer-container {\n  display: flex;\n  flex-direction: column;\n  min-height: 40vh;\n  max-height: 40vh;\n  overflow-x: hidden;\n  overflow-y: auto;\n  border: 1px solid #ccc;\n}\n\n.table-container .value-outer-container .value-container {\n  display: flex;\n  flex-direction: row;\n  text-align: left;\n  padding: 10px;\n  font-size: 12px;\n  border-bottom: 1px solid #ccc;\n  border-top: none;\n}\n\n.table-container .value-outer-container .value-container .value-item {\n  width: 60%;\n}\n\n.black-bg {\n  background: rgba(10, 10, 10, 0.3);\n  position: fixed;\n  top: 0px;\n  height: 100%;\n  left: 0px;\n  z-index: 1;\n  width: 100%;\n}\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 50px;\n  height: 21px;\n}\n\n.switch input {\n  display: none;\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: .4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 16px;\n  width: 16px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  transition: .4s;\n  top: 3px;\n}\n\n.switch-n input:checked + .slider {\n  background-color: #2196F3;\n}\n\n.switch-n input:focus + .slider {\n  box-shadow: 0 0 1px #2196F3;\n}\n\n.switch-n input:checked + .slider:before {\n  transform: translateX(26px);\n}\n\n/* Rounded sliders */\n\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb3Vyc2UtbW9kdWxlL2Vjb3Vyc2UtZmlsZS1tYW5hZ2VyL2Vjb3Vyc2Utc3ViamVjdC1saXN0L2Vjb3Vyc2Utc3ViamVjdC1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWTtFQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtFQUNJLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLG9CQUFvQjtBQUN4Qjs7QUFFQTtFQUNJLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QiwyQ0FBMkM7QUFDL0M7O0FBVEE7RUFVUSx5QkFBeUI7QUFHakM7O0FBYkE7RUFhUSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxRQUFRO0VBQ1IsV0FBVztFQUNYLFlBQVk7RUFDWixVQUFVO0VBQ1YsZUFBZTtBQUl2Qjs7QUFDQTtFQUNJLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFVBQVU7QUFFZDs7QUFOQTtFQU9NLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsZUFBZTtBQUdyQjs7QUFDRTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0FBRW5COztBQUNFO0VBQ0UsU0FBUztBQUViOztBQUNFO0VBQ0UsVUFBVTtBQUVkOztBQUNFO0VBQ0UsY0FBYztBQUVsQjs7QUFBRTtFQUNFLGlCQUFpQjtFQUNqQiwwQkFBMEI7QUFHOUI7O0FBQUU7RUFDRSxjQUFjO0VBQ2QsMEJBQTBCO0FBRzlCOztBQUFFO0VBQ0UsY0FBYztFQUNkLDBCQUEwQjtBQUc5Qjs7QUFBRTtFQUNFLFdBQVc7QUFHZjs7QUFERTtFQUNFLGNBQWM7RUFDZCwwQkFBMEI7QUFJOUI7O0FBREU7RUFDRSxjQUFjO0VBQ2QsMEJBQTBCO0FBSTlCOztBQURFO0VBQ0UsY0FBYztFQUNkLDBCQUEwQjtBQUk5Qjs7QUFERTtFQUNFLGNBQWE7RUFDYiwwQkFBMEI7QUFJOUI7O0FBQUU7RUFDRSx5QkFBeUI7RUFDekIscUJBQXFCO0FBR3pCOztBQUxFO0VBSUksZ0JBQWdCO0VBQ2hCLGVBQWM7RUFDZCxxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVix1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUt6Qjs7QUFERTtFQUNFLGVBQWM7QUFJbEI7O0FBRkU7RUFDRSxzQkFBc0I7RUFDdEIsdUJBQXVCO0FBSzNCOztBQVBFO0VBS0ksY0FBYztBQU1wQjs7QUFGRTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBRVosV0FBVztBQUlmOztBQVJFO0VBT0ksV0FBVztBQUtqQjs7QUFaRTtFQVdJLGFBQWE7QUFLbkI7O0FBaEJFO0VBZUksZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIseUJBQXlCO0FBSy9COztBQURFO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixnQkFBZ0I7QUFJcEI7O0FBREU7O0VBRUUsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFJcEI7O0FBREU7RUFFSSxrQkFBa0I7QUFHeEI7O0FBTEU7RUFNSSxtQkFBbUI7QUFHekI7O0FBVEU7RUFTTSxtQkFBbUI7QUFJM0I7O0FBQ0U7O0VBRUUsOEJBQThCO0FBRWxDOztBQUNFO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsaUJBQWlCO0FBRXJCOztBQUNFO0VBQ0UsVUFBVTtBQUVkOztBQUNFO0VBQ0UsMEJBQTBCO0VBQzFCLGVBQWU7RUFDZixhQUFhO0FBRWpCOztBQUxFO0VBTUksWUFBWTtBQUdsQjs7QUFFRTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsMEJBQTBCO0VBQzFCLHFCQUFxQjtBQUN6Qjs7QUFFRTtFQUNFLFVBQVU7QUFDZDs7QUFGRTtFQUlJLDBCQUEwQjtFQUMxQixlQUFlO0VBQ2YsYUFBYTtBQUVuQjs7QUFSRTtFQVNNLFNBQVM7RUFFVCxxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxxQkFBcUI7QUFFN0I7O0FBR0U7RUFDRSxVQUFVO0FBQWQ7O0FBRUU7RUFDRSxRQUFRO0VBQ1IsZUFBZTtFQUNmLE1BQU07RUFDTixTQUFTO0VBQ1QsT0FBTztFQUNQLG9DQUFvQztFQUNwQyxZQUFZO0FBQ2hCOztBQVJFO0VBVUksYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixZQUFZO0FBRWxCOztBQWRFO0VBZU0sWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLDBCQUEwQjtFQUMxQixjQUFjO0FBR3RCOztBQXZCRTtFQXVCUSxpQkFBaUI7RUFDakIsNkJBQTZCO0VBQzdCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFJNUI7O0FBOUJFO0VBOEJRLFlBQVk7RUFDWixrQkFBa0I7QUFJNUI7O0FBRUU7RUFDRSxlQUFlO0VBQ2YsUUFBUTtFQUNSLFNBQVM7RUFDVCxXQUFXO0FBQ2Y7O0FBRUU7RUFDRSxpQ0FBaUM7RUFDakMsZUFBZTtFQUNmLFFBQVE7RUFDUixZQUFZO0VBQ1osU0FBUztFQUNULFVBQVU7RUFDVixXQUFXO0FBQ2Y7O0FBQ0U7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixtQkFBbUI7QUFFdkI7O0FBQUE7RUFDRSxVQUFVO0FBR1o7O0FBREE7RUFFSSxVQUFVO0VBQ1YsZUFBZTtBQUduQjs7QUFOQTtFQU1NLHNCQUFzQjtFQUN0QixlQUFlO0FBSXJCOztBQVhBO0VBU1Esb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZUFBZTtBQU12Qjs7QUFsQkE7RUFpQk0sZ0JBQWdCO0FBS3RCOztBQXRCQTtFQXFCWSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUs5Qjs7QUE1QkE7RUEyQmMsV0FBVztFQUNYLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLFlBQVk7QUFLMUI7O0FBR0E7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QiwyQ0FBMkM7QUFBN0M7O0FBR0E7RUFDRSxlQUFlO0VBQ2YsUUFBUTtFQUNSLFNBQVM7RUFDVCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQiwwQ0FBdUM7RUFDdkMsb0NBQW9DO0FBQXRDOztBQUVBO0VBQ0UsWUFBWTtFQUNWLFVBQVU7RUFDVixRQUFRO0VBQ1IsU0FBUztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0FBQ2I7O0FBSkE7RUFLSSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0JBQXNCO0FBRzFCOztBQWZBO0VBY00sVUFBVTtBQUtoQjs7QUFuQkE7RUFrQkksYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0FBSzFCOztBQTdCQTtFQTBCTSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsZUFBZTtFQUNmLDZCQUE2QjtFQUM3QixnQkFBZ0I7QUFPdEI7O0FBdkNBO0VBa0NRLFVBQVU7QUFTbEI7O0FBSEE7RUFDRSxpQ0FBOEI7RUFDOUIsZUFBZTtFQUNmLFFBQVE7RUFDUixZQUFZO0VBQ1osU0FBUztFQUNULFVBQVU7RUFDVixXQUFXO0FBTWI7O0FBSkE7RUFFRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0FBTWQ7O0FBSEE7RUFDRSxhQUFhO0FBTWY7O0FBSEE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7RUFDVCxzQkFBc0I7RUFFdEIsZUFBZTtBQU1qQjs7QUFIQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7RUFDWCxTQUFTO0VBQ1QsV0FBVztFQUNYLHVCQUF1QjtFQUV2QixlQUFlO0VBQ2YsUUFBTztBQU1UOztBQUhBO0VBQ0UseUJBQXlCO0FBTTNCOztBQUhBO0VBQ0UsMkJBQTJCO0FBTTdCOztBQUhBO0VBR0UsMkJBQTJCO0FBTTdCOztBQUhBLG9CQUFBOztBQUVBO0VBQ0UsbUJBQW1CO0FBS3JCOztBQUhBO0VBQ0Usa0JBQWtCO0FBTXBCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb3Vyc2UtbW9kdWxlL2Vjb3Vyc2UtZmlsZS1tYW5hZ2VyL2Vjb3Vyc2Utc3ViamVjdC1saXN0L2Vjb3Vyc2Utc3ViamVjdC1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNjcm9sbF90YWJsZXtcbiAgICBoZWlnaHQ6IDgwdmg7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG4uc3ViamVjdC10aXRsZXtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMC40ZW07XG59XG5cbi5zdWJqZWN0LWxhYmVse1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwYWRkaW5nOiAwLjZlbSAxZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGZvbnQtc2l6ZTogMC45NWVtO1xuICAgIGJvcmRlcjogMXB0IHNvbGlkICNlZWU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3gtc2hhZG93OiAwIDFwdCAycHQgMCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICAgICY6aG92ZXJ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjZWRmZjM7XG4gICAgfVxuICAgICY6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnPic7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDE5cHg7XG4gICAgICAgIHRvcDogMjUlO1xuICAgICAgICB3aWR0aDogMjFweDtcbiAgICAgICAgaGVpZ2h0OiAyMXB4OyAgIFxuICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgfVxuXG59XG5cbiNhZGREaXYge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IC0zcmVtO1xuICBcbiAgICAuYnRuX2FkZGVjb3Vyc2Uge1xuICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICBiYWNrZ3JvdW5kOiAjMjY4MGViO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG4gIH1cblxuICBpLmZhIHtcbiAgICBtYXJnaW4tcmlnaHQ6IC40ZW07XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG5cbiAgLnJvdyB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG4gIFxuICAudGV4dC1yZWQge1xuICAgIGNvbG9yOiByZWQ7XG4gIH1cbiAgXG4gIC50ZXh0LWJsdWUge1xuICAgIGNvbG9yOiAjMjY4MGViO1xuICB9XG4gIC5pbWctY29sb3Ige1xuICAgIGNvbG9yOiBibHVldmlvbGV0O1xuICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICB9XG4gIFxuICAuZG9jLWNvbG9yIHtcbiAgICBjb2xvcjogIzNkODlmMDtcbiAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgfVxuICBcbiAgLmFzc2lnbi1jb2xvciB7XG4gICAgY29sb3I6ICNjNTk0NDE7XG4gICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC5idG4tZ2Etd2hpdGUtZG93bmxvYWQge1xuICAgIGNvbG9yOiAjNTU1O1xuICB9XG4gIC50eHQtbm90ZXN7XG4gICAgY29sb3I6ICMzZDg5ZjA7XG4gICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC5hdWRpby1jb2xvcntcbiAgICBjb2xvcjogIzk5NjhiZTtcbiAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgfVxuICBcbiAgLnBkZi1jb2xvciB7XG4gICAgY29sb3I6ICNkNTUyNTI7XG4gICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC5lcHViLWNvbG9ye1xuICAgIGNvbG9yOiMyYmMzOGE7XG4gICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIFxuICAudHh0LWNvbG9yIHtcbiAgICBjb2xvcjogIzNmMmUyZSAhaW1wb3J0YW50O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgXG4gICAgLnR4dC10aXRsZXtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICBmb250LXNpemU6MTJweDsgXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgd2lkdGg6IDcyJTtcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIH0gXG4gIH1cbiAgXG4gIC50eHQtZm9udHtcbiAgICBmb250LXNpemU6MTJweDsgXG4gIH1cbiAgLmJ0bi1nYS1jb2xsYXBzZSB7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgXG4gICAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogIzNmMmUyZTsvLyMwN2Y7XG4gICAgfVxuICB9XG4gIFxuICAuYnRuLWdhLXdoaXRlIHtcbiAgICBwYWRkaW5nOiAuMmVtIC44ZW07XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIC8vIGJveC1zaGFkb3c6IDFwdCAxcHQgMCAjZjFmMWYxO1xuICAgIGNvbG9yOiAjNTU1O1xuICBcbiAgICAmOmhvdmVyIHtcbiAgICAgIGNvbG9yOiAjMDdmO1xuICAgIH1cbiAgXG4gICAgJjpmb2N1cyB7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgIH1cbiAgXG4gICAgJjphY3RpdmUge1xuICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgYmFja2dyb3VuZDogIzAwODRmNjtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDg0ZjY7XG4gICAgfVxuICB9XG4gIFxuICAuYnRuLXhzIHtcbiAgICBmb250LXNpemU6IC44ZW07XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gIH1cbiAgXG4gIC5maWVsZC1jaGVja2JveC13cmFwcGVyLFxuICAuZmllbGQtcmFkaW8td3JhcHBlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1hcmdpbi1sZWZ0OiAtMC42ZW07XG4gICAgbWFyZ2luLXRvcDogLjRlbTtcbiAgfVxuICBcbiAgLnNpbmdsZXRvbi1yb3cge1xuICAgIC5hY3Rpb24tYnV0dG9ucyB7XG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgfVxuICBcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICNlYmY2ZmY7XG4gIFxuICAgICAgLmFjdGlvbi1idXR0b25zIHtcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIC5tYXRlcmlhbC1yb3csXG4gIC50b3BpYy1kYXRhIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEuMmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC5tYWluLXRvcGljLXJvdyB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDFlbSAwO1xuICAgIGJvcmRlcjogMXB0IHNvbGlkICNkZGQ7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gIH1cbiAgXG4gIC50b3BpYy1yb3cge1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbiAgXG4gIC50b3BpYy1kYXRhIHtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2VlZTtcbiAgICBwYWRkaW5nOiAuNGVtIDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgXG4gICAgLnRvcGljLW5hbWUge1xuICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgLy8gY29sb3I6ICMwMDg0ZjY7XG4gICAgfVxuICB9XG4gIFxuICAubWFpbi10b3BpYy1kYXRhIHtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kOiAjYjhkNmVlYWQ7XG4gIH1cbiAgXG4gIC50b3BpYy1tYXRlcmlhbC1kYXRhIHtcbiAgICBwYWRkaW5nOiAwO1xuICBcbiAgICAubWF0ZXJpYWwtcm93IHtcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlO1xuICAgICAgcGFkZGluZzogLjRlbSAwO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgXG4gICAgICAubWF0ZXJpYWwtdGl0bGUge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIC8vIHdpZHRoOiAzMiU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gICAgICAgIHBhZGRpbmc6IDAgN3B4O1xuICAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICAuc3ViVG9waWNzLWRhdGEge1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbiAgLmdhLW1vZGFsLXdyYXBwZXIge1xuICAgIHJpZ2h0OiAwO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYmFja2dyb3VuZDogcmdiYSgxMzYsIDEzNiwgMTM2LCAwLjYpO1xuICAgIHotaW5kZXg6IDk5OTtcbiAgXG4gICAgLmdhLW1vZGFsLWNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgXG4gICAgICAuZ2EtbW9kYWwge1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgIGJvcmRlcjogMnB0IHNvbGlkICNmZmY7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IC4yZW07XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMnB0IDNwdCAjOTk5O1xuICAgICAgICBtaW4td2lkdGg6IDMwJTtcbiAgXG4gICAgICAgIC5nYS1tb2RhbC1oZWFkIHtcbiAgICAgICAgICBwYWRkaW5nOiAuNWVtIDFlbTtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHQgc29saWQgI2RkZDtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgXG4gICAgICAgIC5nYS1tb2RhbC1ib2R5IHtcbiAgICAgICAgICBwYWRkaW5nOiAxZW07XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnZpZGVvcGxheWVye1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDE1JTtcbiAgICBsZWZ0OiAzMCU7XG4gICAgei1pbmRleDogMTA7XG4gIH1cblxuICAuYmxhY2stYmd7XG4gICAgYmFja2dyb3VuZDogcmdiYSgxMiwgMTEsIDExLCAwLjMpO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDBweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbGVmdDogMHB4O1xuICAgIHotaW5kZXg6IDY7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmNhdGVnb3J5X25hbWUge1xuICAgIHdpZHRoOiAxNSU7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG4uZmEtdHJhc2gge1xuICBjb2xvcjogcmVkO1xufVxuLnRvcGljLWFkZC1tb2RlbCB7XHRcbiAgLm1vZGFsLWRpYWxvZyB7XHRcbiAgICB3aWR0aDogMzAlO1x0XG4gICAgbWFyZ2luLXRvcDogMTAlO1x0XG4gIFxuICAgIC5tb2RhbC1oZWFkZXIge1x0XG4gICAgICBwYWRkaW5nOiAxNXB4IDE1cHggMXB4O1x0XG4gICAgICBmb250LXNpemU6IDE0cHg7XHRcbiAgICAgIC5jbG9zZXtcdFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAtMjBweDtcdFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHRcbiAgICAgICAgdG9wOiAtMS4wZW07XHRcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1x0XG4gICAgICB9XHRcbiAgICB9XHRcbiAgXG4gICAgLm1vZGFsLWJvZHkge1x0XG4gICAgICBwYWRkaW5nLXRvcDogMHB4O1x0XG4gICAgICAubW9kZWxfYm9keV9kaXYge1x0XG4gICAgICAgIC5maWVsZC13cmFwcGVye1x0XG4gICAgICAgICAgbGFiZWx7XHRcbiAgICAgICAgICAgIGNvbG9yOiAjM2UzZDRhO1x0XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1x0XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHRcbiAgICAgICAgICB9XHRcbiAgICAgICAgICAuZHJvcGRvd24tZGl2IHtcdFxuICAgICAgICAgICAgLmRyb3Bkb3duIHtcdFxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcdFxuICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHRcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcdFxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHRcbiAgICAgICAgICAgICAgcGFkZGluZzogM3B4O1x0XG4gICAgICAgICAgICB9XHRcbiAgICAgICAgICB9XHRcbiAgICAgICAgfSAgICAgICAgXHRcbiAgICAgIH1cdFxuICAgIH1cdFxuICB9XHRcbn1cbi5kZWxldGVGaWxlIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwYWRkaW5nOiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjb2xvcjogIzI2ODBlYjtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMjY4MGViO1xuICBib3gtc2hhZG93OiAwIDFwdCAzcHQgMCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xufVxuXG4uY29uZmlybWF0aW9uX3BvcHVwe1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMzUlO1xuICBsZWZ0OiA0MCU7XG4gIHdpZHRoOiAzMDBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZzogMjBweDtcbiAgei1pbmRleDogMTAwO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJvcmRlci10b3A6IDRweCBzb2xpZCByZ2JhKDI1NSwwLDAsMC43KTtcbiAgYm94LXNoYWRvdzogMXB4IDhweCAyMHB4IDVweCAjOWM5YzljO1xufVxuLmRvd25sb2FkX3BvcHVwe1xuICBib3JkZXI6IG5vbmU7XG4gICAgd2lkdGg6IDUwJTtcbiAgICB0b3A6IDIwJTtcbiAgICBsZWZ0OiAzMCU7XG59XG5cbi50YWJsZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbiAgLmhlYWRpbmctY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZTBlYWVjO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAuaGVhZGluZy1pdGVtIHtcbiAgICAgIHdpZHRoOiA2MCU7XG4gICAgfVxuICB9XG4gIC52YWx1ZS1vdXRlci1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtaW4taGVpZ2h0OiA0MHZoO1xuICAgIG1heC1oZWlnaHQ6IDQwdmg7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAudmFsdWUtY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgICAudmFsdWUtaXRlbSB7XG4gICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbn1cbi5ibGFjay1iZ3tcbiAgYmFja2dyb3VuZDogcmdiYSgxMCwxMCwxMCwwLjMpO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGxlZnQ6IDBweDtcbiAgei1pbmRleDogMTtcbiAgd2lkdGg6IDEwMCU7XG59XG4uc3dpdGNoIHtcbiAgLy8gbWFyZ2luLXRvcDogMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDIxcHg7XG59XG5cbi5zd2l0Y2ggaW5wdXQge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uc2xpZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XG4gIHRyYW5zaXRpb246IC40cztcbn1cblxuLnNsaWRlcjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogMTZweDtcbiAgd2lkdGg6IDE2cHg7XG4gIGxlZnQ6IDRweDtcbiAgYm90dG9tOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcbiAgdHJhbnNpdGlvbjogLjRzO1xuICB0b3A6M3B4O1xufVxuXG4uc3dpdGNoLW4gaW5wdXQ6Y2hlY2tlZCsuc2xpZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZGMztcbn1cblxuLnN3aXRjaC1uIGlucHV0OmZvY3VzKy5zbGlkZXIge1xuICBib3gtc2hhZG93OiAwIDAgMXB4ICMyMTk2RjM7XG59XG5cbi5zd2l0Y2gtbiBpbnB1dDpjaGVja2VkKy5zbGlkZXI6YmVmb3JlIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcbn1cblxuLyogUm91bmRlZCBzbGlkZXJzICovXG5cbi5zbGlkZXIucm91bmQge1xuICBib3JkZXItcmFkaXVzOiAzNHB4O1xufVxuLnNsaWRlci5yb3VuZDpiZWZvcmUge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/course-module/ecourse-file-manager/ecourse-subject-list/ecourse-subject-list.component.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/components/course-module/ecourse-file-manager/ecourse-subject-list/ecourse-subject-list.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: EcourseSubjectListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EcourseSubjectListComponent", function() { return EcourseSubjectListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/authenticator.service */ "./src/app/services/authenticator.service.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_message_show_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/message-show.service */ "./src/app/services/message-show.service.ts");
/* harmony import */ var _core_upload_file_upload_file_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/upload-file/upload-file.component */ "./src/app/components/course-module/ecourse-file-manager/core/upload-file/upload-file.component.ts");
/* harmony import */ var _create_course_topic_topic_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../create-course/topic/topic.model */ "./src/app/components/course-module/create-course/topic/topic.model.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
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

// import { ActivatedRoute, Router } from '../../../../../../node_modules/@angular/router';









let EcourseSubjectListComponent = /** @class */ (() => {
    let EcourseSubjectListComponent = class EcourseSubjectListComponent {
        constructor(_http, auth, route, router, msgService, sanitizer, productService) {
            this._http = _http;
            this.auth = auth;
            this.route = route;
            this.router = router;
            this.msgService = msgService;
            this.sanitizer = sanitizer;
            this.productService = productService;
            this.subjectList = [];
            this.existVideos = [];
            this.isRippleLoad = false;
            this.showModal = false;
            this.showVideo = true;
            this.type = 'delete';
            this.outputMessage = '';
            this.tempData = {};
            this.videoplayer = false;
            this.showEditModal = false;
            this.editObj = '';
            this.subjectId = '';
            this.addTopic = new _create_course_topic_topic_model__WEBPACK_IMPORTED_MODULE_6__["Create_Topic"]();
            this.subjectTempData = [];
            this.standardData = [];
            this.fileSharedArray = [];
            this.selectedFilesArray = [];
            this.deletePopup = false;
            this.vdoCipherFile = false;
            this.Confirm_deleteFile = false;
            this.selectedRowCount = 0;
            this.viewUserList = false;
            this.video_watch_history_det = [];
            this.vimeo_video_downlodable = false;
            this.vimeoDownloadLinks = [];
            this.selectedDownloadSize = {};
            this.auth.currentInstituteId.subscribe(id => {
                this.institute_id = id;
            });
            this.route.params.subscribe(params => {
                this.ecourse_id = params.ecourse_id;
            });
            this.route
                .queryParams
                .subscribe(params => {
                let name = window.atob(params['data']);
                name = this.decodeEntities(name);
                if (sessionStorage.getItem('routeListForEcourse')) {
                    this._http.routeList = JSON.parse(sessionStorage.getItem('routeListForEcourse'));
                    this._http.routeList.splice(1, this._http.routeList.length);
                    let obj = { routeLink: '/view/course/ecourse-file-manager/ecourses/' + this.ecourse_id + '/subjects', data: { data: params['data'] }, name: name };
                    console.log("updated date " + obj);
                    this._http.routeList.push(obj);
                    sessionStorage.setItem('routeListForEcourse', JSON.stringify(this._http.routeList));
                }
            });
        }
        decodeEntities(encodedString) {
            var translate_re = /&(nbsp|amp|quot|lt|gt);/g;
            var translate = {
                "nbsp": " ",
                "amp": "&",
                "quot": "\"",
                "lt": "<",
                "gt": ">"
            };
            return encodedString.replace(translate_re, function (match, entity) {
                return translate[entity];
            }).replace(/&#(\d+);/gi, function (match, numStr) {
                var num = parseInt(numStr, 10);
                return String.fromCharCode(num);
            });
        }
        watchHistory() {
            console.log("totalPlayed", this.videoObject.totalPlayed);
            if (this.videoObject.totalPlayed != 0) {
                let url = '/api/v1/instFileSystem/allocateWatchHistory';
                let obj = {
                    "video_id": sessionStorage.getItem("VideoIdWatchHistor"),
                    "watch_duration": this.videoObject.totalPlayed
                };
                this._http.postData(url, obj).subscribe((response) => {
                    this.auth.hideLoader();
                    console.log(response);
                }, (err) => {
                    this.auth.hideLoader();
                    this.msgService.showErrorMessage('error', '', err.error.message);
                });
            }
        }
        ngOnInit() {
            this.getSubjectList();
            this._http.routeList.splice(2, this._http.routeList.length);
            this._http.updatedDataSelection('subject-list');
            this._http.data.subscribe(data => {
                if (data == 'subject') {
                    this.getSubjectList();
                    this._http.updatedDataSelection(null);
                }
            });
        }
        ngOnDestroy() {
            if (!this.showVideo) {
                this.watchHistory();
            }
        }
        uploadPopupOpen(topic) {
            // console.log(topic);
            this.uploadFile.showParentTopicModel = (this.uploadFile.showParentTopicModel) ? false : true;
            this.uploadFile.showModal = true;
            this.uploadFile.material_dataShow = true;
            this.uploadFile.material_dataFlag = 'subject-list';
            this.uploadFile.varJson.course_types = this.ecourse_id;
            this.uploadFile.getSubjectsList(this.ecourse_id);
            this.uploadFile.varJson.subject_id = topic.subjectId;
            this.uploadFile.getTopicsList(topic.subjectId);
            // if (a.topicId && a.topicId != '-1') {
            //   this.uploadTopicPopupOpen(a);
            // }
        }
        uploadTopicLevelPopupOpen(topic, subtopic) {
            this.uploadFile.showParentTopicModel = (this.uploadFile.showParentTopicModel) ? false : true;
            this.uploadFile.showModal = true;
            this.uploadFile.material_dataShow = true;
            this.uploadFile.material_dataFlag = 'subject-list';
            this.uploadFile.varJson.course_types = this.ecourse_id;
            this.uploadFile.getSubjectsList(this.ecourse_id);
            this.uploadFile.varJson.subject_id = topic.subject_id;
            this.uploadFile.getTopicsList(topic.subject_id);
            if (topic.topicId && topic.topicId != '-1') {
                if (subtopic.topicId && subtopic.topicId != '-1') {
                    topic.parent_topic_id = subtopic.topicId;
                    topic.parent_topic_name = subtopic.topicName;
                    topic.sub_topic_id = topic.topicId;
                    topic.topic_name = topic.topicName;
                }
                this.uploadTopicPopupOpen(topic);
            }
            else if (subtopic.topicId && subtopic.topicId != '') {
                this.uploadTopicPopupOpen(subtopic);
            }
        }
        // get otp details to show video
        getVdocipherVideoOtp(video) {
            if (video.video_status == 'ready') {
                sessionStorage.setItem("VideoIdWatchHistor", video.videoID);
                if (video.category_name == 'VDOCipher') {
                    let url = "/api/v1/instFileSystem/videoOTP";
                    let data = {
                        "videoID": video.videoID,
                        "institute_id": sessionStorage.getItem("institute_id"),
                        "user_id": sessionStorage.getItem("userid"),
                        "file_id": video.file_id
                    };
                    this.tempData = video;
                    console.log(video);
                    this.auth.showLoader();
                    this._http.postData(url, data).subscribe((response) => {
                        this.auth.hideLoader();
                        console.log(response);
                        if (response == null) {
                            let obj = {
                                "otp": "20160313versASE323ND0ylfz5VIJXZEVtOIgZO8guUTY5fTa92lZgixRcokG2xm",
                                "playbackInfo": "eyJ2aWRlb0lkIjoiNGQ1YjRiMzA5YjQ5NGUzYTgxOGU1ZDE3NDZiNzU2ODAifQ=="
                            };
                            console.log(obj);
                            this.ShowVideo(obj.otp, obj.playbackInfo);
                        }
                        else {
                            let obj = {
                                "otp": response['otp'],
                                "playbackInfo": response['playbackInfo']
                            };
                            console.log(obj);
                            this.ShowVideo(obj.otp, obj.playbackInfo);
                        }
                    }, (err) => {
                        this.auth.hideLoader();
                        this.msgService.showErrorMessage('error', '', err.error.message);
                    });
                }
            }
            else {
                this.msgService.showErrorMessage('error', '', 'Video is not ready yet, try again after sometime.');
            }
        }
        // vdocipher stop video
        stopVideo() {
            this.showVideo = true;
            if (this.videoObject) {
                this.videoObject.pause(); // removes video
            }
            this.watchHistory();
        }
        // vdocipher start video
        ShowVideo(otpString, playbackInfoString) {
            this.showVideo = false;
            var video = new window.VdoPlayer({
                otp: otpString,
                playbackInfo: playbackInfoString,
                theme: "9ae8bbe8dd964ddc9bdb932cca1cb59a",
                container: document.querySelector("#embedBox"),
            });
            this.videoObject = video;
            console.log("totalPlayed", this.videoObject.totalPlayed);
            // video.addEventListener(`mpmlLoad`, (data) => {
            //   video.play();
            // });
            var container = document.querySelector('.embedBox');
        }
        uploadTopicPopupOpen(topic) {
            // console.log(topic);
            if (!topic.parent_topic_id || topic.parent_topic_id == 0) {
                this.uploadFile.showModal = true;
                this.uploadFile.varJson.topic_id = topic.topicId; // parent 
                this.uploadFile.getSubtopicList(topic.topicId);
            }
            else {
                this.uploadFile.showModal = false;
                this.uploadFile.jsonData.mainTopic = topic.topic_name;
                this.uploadFile.jsonData.mainTopicId = topic.sub_topic_id;
                this.uploadFile.varJson.sub_topic_id = topic.sub_topic_id; // topic
                this.uploadFile.varJson.topic_id = topic.parent_topic_id; // parent  
                this.uploadFile.jsonData.parentTopic = topic.parent_topic_name;
                this.uploadFile.jsonData.parentTopicId = topic.parent_topic_id;
            }
        }
        getSubjectList() {
            this.subjectList = [];
            this.selectedFilesArray = [];
            let array = [];
            this.auth.showLoader();
            let url = "/api/v1/instFileSystem/get-study-material";
            let object = {
                "institute_id": this.institute_id,
                "ecourse_id": this.ecourse_id,
            };
            this._http.postData(url, object).subscribe((res) => {
                console.log(res);
                this.auth.hideLoader();
                if (res.result && res.result.length > 0) {
                    this.subjectList = res.result;
                    this.subjectList.forEach((element) => {
                        if (element && element.subjectId) {
                            element.isExpand = false;
                            this.addMaterialExtension(element);
                            array.push(element);
                        }
                    });
                    this.vimeo_video_downlodable = this.subjectList[0].vimeo_video_downlodable;
                }
                this.subjectList = array;
                if (this.subjectList.length == 0) {
                    this.outputMessage = 'No data found';
                }
            }, err => {
                this.auth.hideLoader();
            });
        }
        toggleObject(subject) {
            if (subject.subjectId) {
                this.subjectId = subject.subjectId;
            }
            subject.isExpand = !subject.isExpand;
            if (subject.isExpand) {
                subject.topicId = subject.topicId == undefined ? '-1' : subject.topicId;
                this.addMaterialExtension(subject);
                // this.getTopicListData(subject.subject_id, subject);
            }
        }
        /// removed data
        removeData(key) {
            if (key != 'unlink all') {
                let data = [this.tempfile.file_id];
                this.deleteFiles(key, data);
            }
            else {
                this.getVDOCipherLinkedDate(key);
            }
        }
        deleteFiles(key, fileIdArray) {
            this.showModal = false;
            this.auth.showLoader();
            let url = "/api/v1/instFileSystem/deleteFiles?key=" + key;
            let data = {
                "institute_id": this.institute_id,
                "fileIdArray": fileIdArray
            };
            console.log(data);
            this._http.deleteData(url, data).subscribe((res) => {
                // console.log(res);
                this.auth.hideLoader();
                this.msgService.showErrorMessage('success', '', res.message);
                this.getSubjectList();
            }, (err) => {
                this.auth.hideLoader();
                this.msgService.showErrorMessage('error', '', err.error.message);
            });
        }
        getVDOCipherLinkedDate(key) {
            this.auth.showLoader();
            let url = "/api/v1/instFileSystem/VDOCipher/" + this.institute_id;
            this.existVideos = [];
            this._http.getData(url).subscribe((res) => {
                console.log(res);
                this.auth.hideLoader();
                if (res) {
                    this.existVideos = res;
                    this.UnlikeAllVideos();
                }
            }, (err) => {
                this.auth.hideLoader();
                this.existVideos = [];
            });
        }
        UnlikeAllVideos() {
            let array_ids = [];
            if (this.existVideos && this.existVideos.length) {
                for (let i = 0; i < this.existVideos.length; i++) {
                    let object = this.existVideos[i];
                    if (object.video_id == this.tempfile.videoID) {
                        object && object.link_video_list && object.link_video_list.forEach((video) => {
                            array_ids.push(video.file_id);
                        });
                        if (array_ids.length) {
                            this.deleteFiles('unlink', array_ids);
                        }
                        else {
                            this.showModal = false;
                            this.msgService.showErrorMessage('info', '', 'No data found to unlink');
                        }
                    }
                }
            }
        }
        addDownloadCount(file) {
            this.auth.showLoader();
            let url = "/api/v1/instFileSystem/fileDownloadCount";
            let data = {
                "institute_id": this.institute_id,
                "file_id": file.file_id
            };
            this._http.postData(url, data).subscribe((res) => {
                // console.log(res);
                this.auth.hideLoader();
                file.downloads++;
            }, (err) => {
                this.auth.hideLoader();
            });
        }
        getToSubjectMaterials(subject) {
            this.router.navigate(["/view/activity/ecourse-file-manager/ecourses/" + this.ecourse_id + "/subjects/" + subject.subject_id + "/materials"], { queryParams: { data: window.btoa(subject.subject_name) } });
        }
        checkVDOCipherSelectedFile(obj, event) {
            event ? (this.vdoCipherFile = true) : (this.vdoCipherFile = false);
            this.checkSelectedFile(obj, event);
        }
        checkSelectedFile(obj, event) {
            if (event) {
                this.selectedFilesArray.push(obj);
            }
        }
        deleteVideoCipherFile(file, type) {
            this.tempfile = file;
            this.type = type;
            this.showModal = true;
        }
        setRemoveDataFile() {
            let temp = [];
            if (this.selectedFilesArray && this.selectedFilesArray.length) {
                this.selectedFilesArray.forEach(data => {
                    if (data.selected) {
                        temp.push(data.file_id);
                    }
                });
            }
            if (temp && temp.length) {
                this.selectedRowCount = temp.length;
                let obj = {
                    "source": 2,
                    "file_id_list": temp,
                    "institute_id": sessionStorage.getItem('institute_id'),
                };
                if (this.vdoCipherFile) {
                    obj.video_status = 'Delete';
                }
                if (this.Confirm_deleteFile) {
                    obj.delete_source = 3;
                }
                this.auth.showLoader();
                this._http.postData('/api/v1/instFileSystem/files/delete', obj).subscribe((res) => {
                    this.auth.hideLoader();
                    if (this.Confirm_deleteFile) {
                        this.msgService.showErrorMessage('success', '', 'Deleted Successfully');
                        this.closeDeletePopup();
                        this.getSubjectList();
                    }
                    else {
                        this.fileSharedArray = [];
                        this.deletePopup = true;
                    }
                }, err => {
                    this.auth.hideLoader();
                    this.fileSharedArray = err.error.error;
                    if (!this.Confirm_deleteFile) {
                        this.deletePopup = true;
                    }
                });
            }
            else {
                this.msgService.showErrorMessage('error', '', 'Please select file(s)');
            }
        }
        closeDeletePopup() {
            this.deletePopup = false;
            console.log(this.selectedFilesArray);
            this.selectedFilesArray.forEach(data => {
                data.selected = false;
            });
            this.selectedFilesArray = [];
            this.Confirm_deleteFile = false;
        }
        confirmDelete() {
            this.Confirm_deleteFile = true;
            this.setRemoveDataFile();
        }
        calculateStudyMaterialMapLength(object) {
            return Object.keys(object.studyMaterialMap).length;
        }
        addMaterialExtension(object) {
            let keys = ["Notes", "Assignment", "EBook", "Images", "PreviousYearQuestionsPaper", "AudioNotes", "Slides"];
            keys.forEach(key => {
                if (object.studyMaterialMap[key]) {
                    object.studyMaterialMap[key].forEach(element => {
                        let str = element.file_path;
                        let ext = str.substr(str.lastIndexOf(".") + 1, str.length);
                        switch (ext) {
                            case 'epub': {
                                element.extension = "fa fa-file epub-color";
                                break;
                            }
                            case 'pdf': {
                                element.extension = "fa fa-file-pdf-o pdf-color";
                                break;
                            }
                            case 'docx':
                            case 'doc': {
                                element.extension = "fa fa-book assign-color ";
                                break;
                            }
                            case 'xls':
                            case 'xlsx': {
                                element.extension = "fa fa-file-excel-o assign-color";
                                break;
                            }
                            case 'ppt':
                            case 'pptx': {
                                element.extension = "fa fa-file-powerpoint-o text-blue";
                                break;
                            }
                            case 'mp3':
                            case 'wav':
                            case 'aac':
                            case 'wma': {
                                element.extension = "fa fa-file-audio-o audio-color";
                                break;
                            }
                            case 'jpeg':
                            case 'jpg':
                            case 'png':
                            case 'gif': {
                                element.extension = "fa fa-file-image-o img-color";
                                break;
                            }
                            default: {
                                element.extension = "fa fa-file-o assign-color";
                            }
                        }
                    });
                }
            });
        }
        playYoutubeVideo(obj) {
            this.videoplayer = true;
            const video_id = atob(obj.proc_id);
            this.currentProjectUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + video_id);
        }
        playVimeoVideo(obj) {
            this.videoplayer = true;
            this.currentProjectUrl = this.sanitizer.bypassSecurityTrustResourceUrl(obj.video_url);
        }
        closePlayer() {
            this.videoplayer = false;
        }
        gotoAddTopic() {
            $('#addTopic').modal('show');
            this.getAllStandards();
        }
        getAllStandards() {
            let userType = sessionStorage.getItem('userType');
            let teacher_id = -1;
            if (userType == 3) {
                teacher_id = sessionStorage.getItem('login_teacher_id');
            }
            let url = "/api/v1/standards/all/" + this.institute_id + "?active=Y" + '&teacher_id=' + teacher_id;
            this.auth.showLoader();
            this._http.getData(url).subscribe((data) => {
                this.auth.hideLoader();
                this.standardData = data;
                // console.log(data);
            }, (error) => {
                this.auth.hideLoader();
                console.log(error);
            });
        }
        getAllSubjectList(standards_id) {
            this.subjectTempData = [];
            this.auth.showLoader();
            let url = "/api/v1/subjects/standards/" + standards_id + '?active=Y';
            this._http.getData(url).subscribe((data) => {
                this.auth.hideLoader();
                this.subjectTempData = data;
                console.log(data);
            }, error => {
                this.auth.hideLoader();
                console.log(error);
            });
        }
        Add_New_Topic_Details() {
            this.auth.showLoader();
            let url = "/api/v1/topic_manager/add/" + this.institute_id;
            this._http.postData(url, this.addTopic).subscribe((data) => {
                this.auth.hideLoader();
                this.msgService.showErrorMessage('success', '', "Topic Added Successfully");
                $('#addTopic').modal('hide');
                this.getSubjectList();
                this.clearObject();
            }, (error) => {
                this.auth.hideLoader();
                this.msgService.showErrorMessage('error', '', "Something went wrong try again ");
                console.log(error);
            });
        }
        editFile(obj) {
            this.editObj = obj;
            this.editObj.is_readonly = (this.editObj.is_readonly == 'Y') ? true : false;
            this.editObj.is_hide = (this.editObj.is_hide == 'Y') ? true : false;
            this.editObj.file_visibility_till_date = this.editObj.file_visibility_till_date ? moment__WEBPACK_IMPORTED_MODULE_9__(this.editObj.file_visibility_till_date).format('YYYY-MM-DD') : '';
            this.showEditModal = true;
        }
        cancelEditFile() {
            this.editObj.is_readonly = (this.editObj.is_readonly) ? 'Y' : 'N';
            this.editObj.is_hide = (this.editObj.is_hide) ? 'Y' : 'N';
            this.editObj.file_visibility_till_date = this.editObj.file_visibility_till_date ? moment__WEBPACK_IMPORTED_MODULE_9__(this.editObj.file_visibility_till_date).format('YYYY-MM-DD') : '';
            this.showEditModal = false;
            this.getSubjectList();
        }
        updateFile() {
            let obj = {
                "title": this.editObj.title,
                "institute_id": sessionStorage.getItem('institute_id'),
                "category_id": this.editObj.category_id,
                "is_readonly": this.editObj.is_readonly ? 'Y' : 'N',
                "manual_multiplier_update": true,
                "watch_multiplier": (this.editObj.watch_multiplier != null && this.editObj.watch_multiplier != '') ? this.editObj.watch_multiplier : 0,
                "is_hide": this.editObj.is_hide ? 'Y' : 'N',
                "file_visibility_till_date": this.editObj.file_visibility_till_date ? moment__WEBPACK_IMPORTED_MODULE_9__(this.editObj.file_visibility_till_date).format('YYYY-MM-DD') : ''
            };
            this.auth.showLoader();
            this._http.putData('/api/v1/instFileSystem/update/' + this.editObj.file_id, obj).subscribe((res) => {
                this.auth.hideLoader();
                this.msgService.showErrorMessage('success', '', 'File updated successfully');
                this.cancelEditFile();
            }, err => {
                this.auth.hideLoader();
                this.cancelEditFile();
            });
        }
        clearObject() {
            this.addTopic = {
                name: '',
                standard_id: '-1',
                subject_id: '-1',
                parent_topic_id: '-1',
                description: '',
                estimated_time: 0,
                institute_topic_id: '-1',
                priority_order: 0
            };
        }
        collapseAll(obj, cond) {
            if (obj.subjectId) {
                this.subjectId = obj.subjectId;
            }
            obj.isExpand = cond;
            if (obj.subtopicList) {
                obj.subtopicList.forEach(element => {
                    element.isExpand = cond;
                    element.subject_id = this.subjectId;
                    this.addMaterialExtension(element);
                    this.collapseAll(element, cond);
                });
            }
        }
        // developed by = Nalini
        // To show watch user list
        viewUserListFun(obj) {
            this.auth.showLoader();
            this._http.getData('/api/v1/instFileSystem/get-video-watch-history/' + this.institute_id + '/' + obj.videoID).subscribe((data) => {
                this.auth.hideLoader();
                this.video_watch_history_det = data.result;
                this.viewUserList = true;
            }, (error) => {
                this.auth.hideLoader();
            });
        }
        // Developed by Nalini
        // To download vimeo file
        getVimeoDownloadData(obj) {
            this.auth.showLoader();
            this.productService.getMethod('vimeo/download-links/' + obj.videoID, null).subscribe((res) => {
                this.auth.hideLoader();
                this.vimeoDownloadLinks = res.result;
                if (this.vimeoDownloadLinks && this.vimeoDownloadLinks.length) {
                    $('#downloadOption').modal('show');
                }
                else {
                    this.msgService.showErrorMessage('error', '', 'No download links found');
                }
            }, err => {
                this.auth.hideLoader();
                console.log(err);
            });
        }
        changeSelectedSize(obj) {
            this.selectedDownloadSize = obj;
        }
        downloadVimeoVdo() {
            window.open(this.selectedDownloadSize.link, "_blank");
            $('#downloadOption').modal('hide');
        }
    };
    EcourseSubjectListComponent.ctorParameters = () => [
        { type: _services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] },
        { type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticatorService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _services_message_show_service__WEBPACK_IMPORTED_MODULE_4__["MessageShowService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"] },
        { type: _services_products_service__WEBPACK_IMPORTED_MODULE_8__["ProductService"] }
    ];
    EcourseSubjectListComponent.propDecorators = {
        uploadFile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [_core_upload_file_upload_file_component__WEBPACK_IMPORTED_MODULE_5__["UploadFileComponent"], { static: false },] }]
    };
    EcourseSubjectListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ecourse-subject-list',
            template: __importDefault(__webpack_require__(/*! raw-loader!./ecourse-subject-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/ecourse-file-manager/ecourse-subject-list/ecourse-subject-list.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./ecourse-subject-list.component.scss */ "./src/app/components/course-module/ecourse-file-manager/ecourse-subject-list/ecourse-subject-list.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"],
            _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticatorService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_message_show_service__WEBPACK_IMPORTED_MODULE_4__["MessageShowService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"],
            _services_products_service__WEBPACK_IMPORTED_MODULE_8__["ProductService"]])
    ], EcourseSubjectListComponent);
    return EcourseSubjectListComponent;
})();



/***/ }),

/***/ "./src/app/components/course-module/ecourse-file-manager/file.service.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/course-module/ecourse-file-manager/file.service.ts ***!
  \*******************************************************************************/
/*! exports provided: FileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileService", function() { return FileService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/authenticator.service */ "./src/app/services/authenticator.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let FileService = /** @class */ (() => {
    let FileService = class FileService {
        constructor(http, auth) {
            this.http = http;
            this.auth = auth;
            this.baseUrl = '';
            this.storageData = {
                storage_allocated: 10,
                uploaded_size: 1,
                width: 1
            };
            this.auth.currentAuthKey.subscribe(key => {
                this.Authorization = key;
                this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ "Content-Type": "application/json", "Authorization": this.Authorization });
            });
            this.auth.currentInstituteId.subscribe(id => {
                this.institute_id = id;
            });
            this.baseUrl = this.auth.getBaseUrl();
        }
    };
    FileService.ctorParameters = () => [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] },
        { type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticatorService"] }
    ];
    FileService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticatorService"]])
    ], FileService);
    return FileService;
})();



/***/ })

}]);
//# sourceMappingURL=components-course-module-ecourse-file-manager-ecourse-file-manager-module-es2015.js.map