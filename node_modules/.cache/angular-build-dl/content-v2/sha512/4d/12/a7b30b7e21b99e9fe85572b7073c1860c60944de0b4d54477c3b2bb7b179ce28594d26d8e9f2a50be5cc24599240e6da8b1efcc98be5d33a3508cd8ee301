(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-course-module-file-manager-file-manager-module"], {
    /***/
    "./node_modules/primeng/fileupload.js":
    /*!********************************************!*\
      !*** ./node_modules/primeng/fileupload.js ***!
      \********************************************/

    /*! no static exports found */

    /***/
    function node_modulesPrimengFileuploadJs(module, exports, __webpack_require__) {
      "use strict";
      /* Shorthand */

      function __export(m) {
        for (var p in m) {
          if (!exports.hasOwnProperty(p)) exports[p] = m[p];
        }
      }

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      __export(__webpack_require__(
      /*! ./components/fileupload/fileupload */
      "./node_modules/primeng/components/fileupload/fileupload.js"));
      /***/

    },

    /***/
    "./node_modules/primeng/tree.js":
    /*!**************************************!*\
      !*** ./node_modules/primeng/tree.js ***!
      \**************************************/

    /*! no static exports found */

    /***/
    function node_modulesPrimengTreeJs(module, exports, __webpack_require__) {
      "use strict";
      /* Shorthand */

      function __export(m) {
        for (var p in m) {
          if (!exports.hasOwnProperty(p)) exports[p] = m[p];
        }
      }

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      __export(__webpack_require__(
      /*! ./components/tree/tree */
      "./node_modules/primeng/components/tree/tree.js"));
      /***/

    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/file-manager/drive-home/drive-home.component.html":
    /*!**********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/file-manager/drive-home/drive-home.component.html ***!
      \**********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsCourseModuleFileManagerDriveHomeDriveHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- Main screen where content will be rendered -->\n\n<div class=\"center-content\">\n\n  <div id=\"dropZone\" #dropZone (drop)=\"onDrop($event)\" (dragover)=\"onDragOver($event)\" (dragleave)=\"onDragLeave($event)\"\n    class=\"drop-area\">\n\n    <p-fileUpload #uploaders mode=\"advanced\" *ngIf=\"dragoverflag\" customUpload=\"true\" multiple=\"multiple\"\n      (onSelect)=\"onSelect($event, uploaders)\" (clear)=\"clearSelectedFiles($event)\">\n    </p-fileUpload>\n\n  </div>\n\n\n  <!-- Header for the Drive -->\n  <header class=\"top-nav\">\n\n    <h1 class=\"pull-left\">\n      <a style=\"float: left;\">\n        Content Library\n      </a>\n      <div style=\"float: left;\">\n        &nbsp;<i style=\"font-family: 'FontAwesome';\" class=\"fas fa-angle-right\"></i> File Manager\n        <span *ngIf=\"pathArray?.length>0\">\n          <i style=\"font-family: 'FontAwesome';\" class=\"fas fa-angle-right\"></i>\n        </span>\n        <span style=\"font-size: 14px;margin-top: 6px;\">\n          <a class=\"pathAnchor\" *ngFor=\"let path of pathArray; let j = index\" (click)=\"collapseString(j)\">\n            {{path}} /\n          </a>\n        </span>\n      </div>\n    </h1>\n    <div class=\"pull-right\" style=\"position: relative;top: 14px; width:15%;margin-bottom: 10px;\">\n      <span *ngIf=\"SelectedFilesArray?.length>0\">\n        <input type=\"button\" value=\"Delete File\" class=\"btn fullBlue\"\n          style=\"background: none;color: #0084f6;margin-right: 10px;\" (click)=\"deleteFile()\">\n      </span>\n      <i class=\"fa fa-upload\" (click)=\"uploadBox()\" title=\"Upload File\"\n        style=\"font-family: 'FontAwesome' ; display: inline-block; font-size: 19px; color: #52454596;\" id=\"upload\">\n      </i>&nbsp;&nbsp;&nbsp;\n      <i class=\"fa fa-folder-open\" style=\"font-size: 19px; color: #52454596; margin-left: 1%; display: inline-block;\"\n        title=\"Create Folder\" (click)=\"makeFolderOpen()\"></i>\n    </div>\n  </header>\n\n  <div class=\"files-cont\">\n    <!-- Files and Folder for Group to be Inserted  -->\n    <div #DragContainer class=\"grid__container row row--no-right\">\n      <!-- Side Tree View For Folder Display -->\n      <div class=\"col-sm-3 tree__view\" (dragover)=\"onDragOverFolder($event, null)\"\n        (dragleave)=\"onDragLeaveFolder($event, null)\">\n        <h3></h3>\n        <p-tree (onNodeCollapse)=\"onNodeCollapse($event)\" (onNodeContextMenuSelect)=\"onNodeContextMenuSelect($event)\"\n          (onNodeExpand)=\"onNodeExpand($event)\" (onNodeSelect)=\"onNodeSelect($event)\" selectionMode=\"single\"\n          [styleClass]=\"'tree__view_list'\" #expandingTree [value]=\"treeNodeData\">\n        </p-tree>\n\n      </div>\n\n      <!-- Preview Mode for Viewing the files on grid or list view -->\n      <div class=\"col-sm-9\" style=\"min-height: 90vh;max-height: 90vh;overflow-y: auto;\">\n        <div class=\"\" (dragover)=\"onDragOverFolder($event, null)\" (dragleave)=\"onDragLeaveFolder($event, null)\">\n          <div class=\"file table__header\">\n            <div class=\"file__img\"></div>\n            <div class=\"file__info\" style=\"background: #e0eaec;\">\n              <h2 class=\"file__details file__header__name\" style=\"font-weight: 600;color: black;\">\n                File Name\n              </h2>\n\n              <div class=\"file__details\" style=\"width:15%;font-weight: 600;color: black;\">\n                Category\n              </div>\n\n              <div class=\"file__details file__owner\" style=\"font-weight: 600;color: black;\">\n                Owner\n              </div>\n\n              <div class=\"file__details file__date\" style=\"font-weight: 600;color: black;\">\n                Uploaded On\n              </div>\n\n              <div class=\"file__details file__size\" style=\"font-weight: 600;color: black;\">\n                File Size\n              </div>\n\n              <div class=\"file__details\" style=\"width: 10%;font-weight: 600;color: black;\">\n                View\n              </div>\n              <div class=\"file__details\" style=\"width: 7%;font-weight: 600;color: black;\">\n                Action\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div>\n          <div (dragover)=\"onDragOverFolder($event, folder)\" (dragleave)=\"onDragLeaveFolder($event, folder)\"\n            (click)=\"folderSelected(folder)\" *ngFor=\"let folder of folderDisplayArr\"\n            class=\"file folder folder-file row\">\n            <div class=\"c-md-1\" style=\"width: 1%;\"></div>\n            <div class=\"c-md-11\" style=\"width: 96%;padding: 0;\">\n              <div class=\"file__img\"></div>\n              <div class=\"file__info\">\n\n                <h2 class=\"file__title\" title=\"{{folder.label}}\">\n                  {{folder.label}}\n                </h2>\n\n                <div class=\"file__details\" style=\"text-transform: capitalize;\">\n                  {{folder.type}}\n                </div>\n\n                <div class=\"file__details file__owner\">{{folder.data.uploaded_by}}</div>\n\n                <div class=\"file__details file__date\">{{folder.data.uploaded_time}}</div>\n\n                <div class=\"file__details file__size\">{{folder.data.size}} MB</div>\n\n                <div class=\"file__details file__Data\">{{folder.data.downloads}}</div>\n\n                <div style=\"width: 7%;float: right;margin-right: 20px;\">\n                  <!-- <i class=\"fa fa-trash\" style=\"font-size: 17px; color: red;\" title=\"Delete folder\" (click)=\"getFilesDeleted(folder)\"></i> -->\n                  <span>-</span>\n                </div>\n\n              </div>\n            </div>\n          </div>\n\n          <div *ngIf=\"fileDisplayArr.length != 0\">\n            <file-card (draggedover)=\"onDragOver($event)\" (draggedleave)=\"onDragLeave($event)\" [data]=\"folder\" *ngFor=\"let folder of fileDisplayArr\"\n              (getFilesAndFolder)=\"getFilesAndFolder($event)\" (status)=\"status($event)\" (downloadStatus)=\"downloadStatus($event)\" (getPopupValue)=\"getPopupValue($event)\"\n              (fileid)=\"fileId($event)\" (fileArr)=\"fileArr($event)\" (shareOptions)=\"handleOptions($event)\" [fileDisplayArr]=\"fileDisplayArr\"\n              [selectedFolder]=\"selectedFolder\" (filePath)=\"filePath($event)\" (playYoutubeVideo)=\"getYoutubeLink($event)\" (editYoutubeVideo)=\"editYoutubeVideo($event)\" (ShowDeleteFileButton)=\"ShowDeleteFileButton($event)\"\n              (playVimeoVideo)=\"playVimeoVideo($event)\" [vimeo_video_downlodable]=\"vimeo_video_downlodable\" (getVimeoDownloadData)=\"getVimeoDownloadData($event)\">\n            </file-card>\n          </div>\n\n          <div class=\"file folder folder-file\" *ngIf=\"isFolderEmpty == true\">\n            <h2 class=\"file__title\" id=\"noFFs\">\n              No Files Or Folders Found\n            </h2>\n          </div>\n        </div>\n\n      </div>\n      <!-- ======================================================= -->\n    </div>\n  </div>\n\n</div>\n\n<app-upload-popup *ngIf=\"addCategoryPopup\" [manualUpload]=\"manualUpload\" [selectedFiles]=\"selectedFiles\"\n  [currentFolder]=\"selectedFolder\" [pathArray]=\"pathArray\" (closePopupValue)=\"close($event)\"\n  (getFilesAndFolder)=\"getFilesAndFolder($event)\" (filePath)=\"filePathUpload($event)\"\n  [currentFilesArray]=\"fileDisplayArr\" (uploadStatus)=\"uploadStatus($event)\" [editView]=\"editYoutubeFile\">\n</app-upload-popup>\n\n<share-file *ngIf=\"getPopupOpen\" (treeUpdater)=\"treeUpdater($event)\" (closePopup)=\"closeSharePopup($event)\"\n  [fileIdGet]=\"fileIdGet\" [fileName]=\"fileName\" [shareOptions]=\"shareOptions\"></share-file>\n\n\n<proctur-popup [sizeWidth]=\"'small'\" *ngIf=\"createFolderControl\">\n\n  <span class=\"closePopup pos-abs fbold show\" close-button (click)=\"closeFolderControl()\">\n    <svg class=\"artdeco-icon\" focusable=\"false\" height=\"24px\" preserveAspectRatio=\"xMinYMin meet\" viewBox=\"0 0 24 24\"\n      width=\"24px\" x=\"0\" y=\"0\">\n      <path class=\"large-icon\"\n        d=\"M20,5.32L13.32,12,20,18.68,18.66,20,12,13.33,5.34,20,4,18.68,10.68,12,4,5.32,5.32,4,12,10.69,18.68,4Z\"\n        style=\"fill: currentColor\"></path>\n    </svg>\n  </span>\n  <div popup-header class=\"popup-header-content\">\n    <h2>Create Folder</h2>\n  </div>\n  <div popup-content class=\"popup-header-content\">\n    <div class=\"row\">\n      <div class=\"c-lg-8 field-wrapper\">\n        <label>Folder Name\n          <!-- <div class=\"questionInfo inline-relative\">\n            <span class=\"qInfoIcon i-class\"> ?</span>\n            <div class=\"tooltip-box-field\">\n                Dot(.) is not allowed .\n            </div>\n          </div> -->\n          <span style=\"padding-left: 10px;\">* Dot(.) is not allowed .</span>\n        </label>\n        <input type=\"text\" class=\"form-ctrl\" [(ngModel)]=\"createFetchFolder.folderName\">\n      </div>\n      <div class=\"c-lg-2\" style=\"margin-top: 4%;\">\n        <input type=\"button\" value=\"Create\" class=\"btn fullBlue\" (click)=\"createFolder()\">\n      </div>\n    </div>\n  </div>\n</proctur-popup>\n\n<div class=\"black-bg\" *ngIf=\"jsonFlag.downloading\">\n  <span>Downloading...</span>\n</div>\n\n<div class=\"black-bg\" *ngIf=\"jsonFlag.uploading\">\n  <span>Uploading...</span>\n</div>\n<div class=\"videoplayer\" *ngIf=\"videoplayer\">\n  <iframe width=\"650\" height=\"400\" [src]=\"currentProjectUrl\" frameborder=\"0\" style=\"border-radius: 10px;\"\n    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen>\n  </iframe>\n</div>\n\n<div class=\"black-bg\" id=\"black-bg\" *ngIf=\"videoplayer\" (click)=\"closePlayer()\"></div>\n\n<proctur-popup [sizeWidth]=\"'small'\" *ngIf=\"deletePopup\">\n\n  <span class=\"closePopup pos-abs fbold show\" close-button (click)=\"closeDeletePopup()\">\n    <svg class=\"artdeco-icon\" focusable=\"false\" height=\"24px\" preserveAspectRatio=\"xMinYMin meet\" viewBox=\"0 0 24 24\"\n      width=\"24px\" x=\"0\" y=\"0\">\n      <path class=\"large-icon\"\n        d=\"M20,5.32L13.32,12,20,18.68,18.66,20,12,13.33,5.34,20,4,18.68,10.68,12,4,5.32,5.32,4,12,10.69,18.68,4Z\"\n        style=\"fill: currentColor\"></path>\n    </svg>\n  </span>\n  <div popup-header class=\"popup-header-content\">\n    <h2>Delete Files ({{SelectedFilesArray?.length}} Files Selected)</h2>\n  </div>\n  <div popup-content class=\"popup-header-content\" style=\"font-size:14px\">\n    <!-- <div class=\"row\"> -->\n    <span style=\"font-weight: 600;font-size: 14px;\">Are you sure, you want to delete files?\n      <span *ngIf=\"fileSharedArray?.length>0\" style=\"font-weight: 600;font-size: 14px;\"> As file is shared with\n        following : </span></span>\n    <div style=\"margin-top: 10px;\">\n      <span *ngFor=\"let msg of fileSharedArray\" style=\"font-size: 14px;\">\n        <span> {{msg.errorMessage}}</span><br>\n      </span>\n    </div>\n    <!-- </div> -->\n    <div style=\"text-align: right;margin-top: 10px;\">\n      <input type=\"button\" value=\"Cancel\" style=\"color: #0084f6;background: white;\" class=\"btn fullBlue\"\n        (click)=\"closeDeletePopup()\">\n      <input type=\"button\" value=\"Delete\" class=\"btn fullBlue\" (click)=\"confirmDelete()\">\n    </div>\n  </div>\n</proctur-popup>\n\n<!-- Developed by- Nalini walunj\nPopup to show vimeo uploaded successfully msg\n-->\n<div id=\"thankYou\" class=\"modal fade\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h1>Thank You</h1>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"new-modules-list\">\n          <div class=\"module-title\">\n            <span>\n              Video is successfully Uploaded!\n            </span>\n          </div>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n\n  </div>\n</div>\n\n<!-- Download option pop up\n  Developed by Nalini -->\n<div id=\"downloadOption\" class=\"modal fade\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h4 class=\"modal-title\">Please select the size for downloading</h4>\n      </div>\n      <div class=\"modal-body\">\n        <section>\n          <div class=\"table-container\">\n            <div class=\"heading-container\">\n              <div class=\"heading-item\" style=\"text-align: left;width: 10%;\">\n                <span></span>\n              </div>\n              <div class=\"heading-item\" style=\"width: 45%;text-align: left;\">\n                <span>Dimension (Width x Height)</span>\n              </div>\n              <div class=\"heading-item\" style=\"width: 45%;\">\n                <span>Size</span>\n              </div>\n            </div>\n            <div class=\"value-outer-container\">\n              <div class=\"value-container\" style=\"padding: 10px;\" *ngFor=\"let data of vimeoDownloadLinks; let i = index;\">\n                <div class=\"value-item\" style=\"text-align: left;width: 10%;\">\n                  <div class=\"field-radio-wrapper\" style=\"width: 25%;margin: 0;\">\n                    <input type=\"radio\" [value]=\"i\" [id]=\"'bothRadio-'+i\" class=\"form-radio\" [(ngModel)]=\"data.selected\"\n                    (ngModelChange)=\"changeSelectedSize(data)\" name=\"select\" id=\"select\">\n                      <label></label>\n                  </div>\n                </div>\n                <div class=\"value-item\" style=\"text-align: left;width: 45%;\">\n                  <span title=\"{{data.width}}\">{{data.width}} x {{data.height}}</span>\n                </div>\n                <div class=\"value-item\" style=\"width: 45%;\">\n                  <span title=\"{{data.size_short}}\">{{data.size_short}}</span>\n                </div>\n              </div>\n            </div>\n          </div>\n        </section>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"downloadVimeoVdo()\">Download</button>\n      </div>\n    </div>\n  </div>\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/file-manager/file-card/file-card.component.html":
    /*!********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/file-manager/file-card/file-card.component.html ***!
      \********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsCourseModuleFileManagerFileCardFileCardComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div #fileHeader class=\"file row\" (dragover)=\"onDragOver($event)\" (dragleave)=\"onDragLeave($event)\">\n  <div class=\"form-ctrl c-md-1\" style=\"width: 1%;\">\n    <input type=\"checkbox\" [(ngModel)]=\"fileObj.res.selected\" [disabled]=\"!fileObj.res.teacher_access\" (ngModelChange)=\"getFilesDeleted(fileObj)\" style=\"-webkit-appearance: checkbox;float: left;\" >\n  </div>\n  <div class=\"c-md-11\" style=\"padding: 0;width: 96%;\">\n  <div #fileImage class=\"file__img\" *ngIf=\"fileObj.res.category_id!=230 && fileObj.res.category_id!=vimeo_category_id\"></div>\n  <div  #fileImage class=\"file__img\" *ngIf=\"(fileObj.res.category_id==230 || fileObj.res.category_id == vimeo_category_id) &&(fileObj.res.thumbnail_list==null || (!fileObj.res.thumbnail_list?.length || fileObj.res.thumbnail_list[0].posterUrl==null))\"></div>\n  <img class=\"youtube_thumbnail\" aria-hidden=\"true\" *ngIf=\"(fileObj.res.category_id==230 || fileObj.res.category_id == vimeo_category_id) && (fileObj.res.thumbnail_list!=null && fileObj.res.thumbnail_list?.length && fileObj.res.thumbnail_list[0].posterUrl!=null)\" src=\"{{fileObj.res.thumbnail_list[0].posterUrl}}\">\n  <div class=\"file__info\" *ngIf=\"fileDisplayArr.length!=0\">\n    <h2 class=\"file__title\" title=\"{{getOriginalFileName(fileObj.res.file_name)}} {{fileObj.res.category_id==vimeo_category_id ? '(' + fileObj.res.video_status + ')' : ''}}\">\n      {{getOriginalFileName(fileObj.res.file_name)}}\n      <span *ngIf=\"fileObj.res.category_id==vimeo_category_id\"> ({{fileObj.res.video_status}})</span>\n    </h2>\n\n    <div class=\"file__made\" title=\"{{fileObj.res.category_name}}\">\n      {{fileObj.res.category_name}}\n    </div>\n\n    <div class=\"file__details file__owner\">{{fileObj.res.uploadedBy}}</div>\n\n    <div class=\"file__details file__date\">{{fileObj.res.uploaded_time}}</div>\n\n    <div class=\"file__details file__size\">{{fileObj.res.size}} MB</div>\n\n    <div class=\"file__details\">{{fileObj.res.downloads}}</div>\n\n    <!-- <i class=\"fa fa-trash\" style=\"font-size: 17px;  color: red;\" title=\"Delete File\" *ngIf=\"fileObj.res.user_type!=3\" (click)=\"getFilesDeleted(fileObj)\"></i> -->\n    <i class=\"fa fa-edit\" style=\"font-size: 15px;  color: #0084f6;\" title=\"Edit File\" *ngIf=\"fileObj.res.category_id==230 || fileObj.res.category_id==vimeo_category_id\" (click)=\"editYoutubeUrl(fileObj)\"></i>\n    <i class=\"fa fa-share-alt\" style=\"font-size: 17px; color: #0084f6; margin-left: 1%;\" title=\"Share File\" (click)=\"getPopupOpen(fileObj)\" *ngIf=\"!(fileObj.res.category_id==vimeo_category_id && fileObj.res.video_status != 'ready')\"></i>\n    <a class=\"fa fa-download\" style=\"font-size: 17px; color: #0084f6; margin-left: 1%;\" *ngIf=\"fileObj.res.category_id!=230 && fileObj.res.teacher_access && fileObj.res.category_id!=vimeo_category_id\" title=\"Download File\" (click)=\"getFileDownloaded(fileObj);\"\n      id=\"downloadFile\" ></a>\n      <!-- Changes done by Nalini to download vimeo file -->\n      <a class=\"fa fa-download\" style=\"font-size: 17px; color: #0084f6; margin-left: 1%;\" *ngIf=\"(fileObj.res.category_id==vimeo_category_id && vimeo_video_downlodable)\" title=\"Download File\" (click)=\"getFileDownloaded(fileObj);\"\n      id=\"downloadFile\" ></a>\n    <a [href]='fileURL' id=\"downloadFileClick\" class=\"hide\" ></a>\n    <a class=\"fa fa-play\" style=\"font-size: 17px; color: #0084f6; margin-left: 1%;\" *ngIf=\"fileObj.res.category_id==230\" title=\"Play\" (click)=\"getYoutubeLink(fileObj);\"\n      id=\"downloadFile\" ></a>\n    <a class=\"fa fa-play\" style=\"font-size: 17px; color: #0084f6; margin-left: 1%;\" *ngIf=\"fileObj.res.category_id==vimeo_category_id\" title=\"Play\" (click)=\"getVimeoVideo(fileObj);\"\n      id=\"downloadFile\" ></a>\n  </div>\n</div>\n  <!-- <div *ngIf=\"fileDisplayArr.length == 0\" class=\"file__info\">\n    <h2 class=\"file__title\">\n      No Files Found !!\n    </h2>\n  </div> -->\n\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/file-manager/file-manager.component.html":
    /*!*************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/file-manager/file-manager.component.html ***!
      \*************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsCourseModuleFileManagerFileManagerComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<router-outlet></router-outlet>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/file-manager/share-file/share-file.component.html":
    /*!**********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/file-manager/share-file/share-file.component.html ***!
      \**********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsCourseModuleFileManagerShareFileShareFileComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<proctur-popup [sizeWidth]=\"'medium'\">\n  <div popup-header class=\"popup-header-content shareHeader\">\n    <div class=\"row\">\n      <div class=\"c-lg-2\">\n        <h2>\n          Share File\n        </h2>\n      </div>\n      <div class=\"c-lg-10\" style=\"padding:0\">\n        <div class=\"row\">\n          <div class=\"c-lg-12\">\n            <div class=\"c-lg-12 \" style=\"margin-bottom: 10px;\">\n              <div style=\"width: 90%;\">\n              <span class=\"form-file\">File Name :\n              </span>\n              <span class=\"bold-font\" title=\"{{fileName.res.file_name}}\">{{(fileName.res.file_name.length > 45) ? (fileName.res.file_name | slice:0:45) + '...' : fileName.res.file_name}} </span>\n              </div>\n              <div>\n              <span class=\"closePopup pos-abs fbold show\" style=\"top: 0;\" close-button (click)=\"close()\">\n                <svg style=\"color: #109CF1;\" class=\"artdeco-icon\" focusable=\"false\" height=\"24px\" preserveAspectRatio=\"xMinYMin meet\" viewBox=\"0 0 24 24\" width=\"24px\" x=\"0\" y=\"0\">\n                  <path  class=\"large-icon\" d=\"M20,5.32L13.32,12,20,18.68,18.66,20,12,13.33,5.34,20,4,18.68,10.68,12,4,5.32,5.32,4,12,10.69,18.68,4Z\" style=\"fill: currentColor\"></path>\n                </svg>\n              </span>\n            </div>\n            </div>\n            <div class=\"c-lg-12\">\n              <div style=\"padding:0\" class=\"c-lg-4\">\n              <span class=\"form-file\">Downloads :\n              </span>\n              <span class=\"bold-font\">{{fileName.res.downloads}}</span>\n            </div>\n              <div style=\"padding:0\" class=\"c-lg-4\">\n                <span class=\"form-file\">\n                  File Size :\n                </span>\n                <span class=\"bold-font\">{{fileName.res.size}} KB</span>\n              </div>\n              <div style=\"padding:0\" class=\"c-lg-4\">\n                <span class=\"form-file\">\n                  Category :\n                </span>\n                <span class=\"bold-font\">{{fileName.res.category_name}}</span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div popup-content class=\"popup-header-content\" style=\"margin-top: 10px;\">\n    <div class=\"row\" *ngIf=\"activeSession == 1\">\n      <div class=\"c-lg-2 field-radio-wrapper\" style=\"margin-top: 10px; margin-left: 15px;\">\n        <input type=\"radio\" class=\"form-radio\" name=\"common\" id=\"batch\" [(ngModel)]=\"getBatch\" (ngModelChange)=\"fetchCoursesData(subjectId , $event)\"\n          [value]=\"'0'\">\n        <label for=\"batch\">{{schoolModel ? 'Section' : 'Batch'}} Level</label>\n      </div>\n      <div class=\"c-lg-3 field-radio-wrapper\" style=\"margin-top: 10px; margin-left: 15px;\">\n        <input type=\"radio\" class=\"form-radio\" name=\"common\" id=\"student\" [(ngModel)]=\"getStudent\" (ngModelChange)=\"fetchCoursesData(subjectId , $event, editBatchShare)\"\n          [value]=\"1\">\n        <label for=\"student\">Student Level</label>\n      </div>\n    </div>\n    <div class=\"shareTab\" [ngStyle]=\"{'margin-top': (activeSession == 1) ? '' : '25px'}\" style=\"box-shadow:0px 0px 8px rgb(0 0 0 / 15%)\">\n    <input *ngIf=\"!schoolModel\" type=\"button\" id=\"tab1\" style=\"border-radius: 4px;\" (click)=\"selectTab(1)\" [ngClass]=\"(activeSession == 1) ? 'activeSession' : '' \" class=\"btn shareToBtn\" value=\"Student\"\n      [disabled]=\"categoryId == '62'\">\n    <input *ngIf=\"!schoolModel\" type=\"button\" id=\"tab2\" style=\"border-radius: 4px;\" [ngClass]=\"(activeSession == 2) ? 'activeSession' : '' \" (click)=\"selectTab(2)\" class=\"btn\" value=\"Public\">\n    <input *ngIf=\"!schoolModel\" type=\"button\" id=\"tab3\" style=\"border-radius: 4px;\" (click)=\"selectTab(3)\" [ngClass]=\"(activeSession == 3) ? 'activeSession' : '' \" class=\"btn\" value=\"Institute\"\n      [disabled]=\"categoryId != '62'\">\n    </div>\n    <br/>\n    <div style=\"min-height: 40vh;\">\n    <div id=\"tab1Content\">\n      <div class=\"tab\">\n        <div class=\"row\">\n          <div class=\"c-lg-3 field-wrapper\" style=\"padding-right: 0;\">\n            <!-- <label class=\"forms\" *ngIf=\"isProfessional\">Master Course</label>\n            <label class=\"forms\" *ngIf=\"!isProfessional\">Standards</label> -->\n            <select class=\"form-ctrl\" [(ngModel)]=\"getStandardsId\" (ngModelChange)=\"getAllSubjects($event)\">\n              <option value=\"\"> {{isProfessional ? 'Select Master Course' : 'Select Standards'}}</option>\n              <option *ngFor=\"let i of getStandards\" [value]=\"i.standard_id\">\n                {{(i.standard_name.length > 30) ? (i.standard_name | slice:0:30) + '...' : i.standard_name}} \n              </option>\n            </select>\n          </div>\n          <div class=\"c-lg-3 field-wrapper\" style=\"padding-right: 0;\">\n            <!-- <label class=\"forms\" *ngIf=\"isProfessional\">Course</label>\n            <label class=\"forms\" *ngIf=\"!isProfessional\">Subjects</label> -->\n            <select class=\"form-ctrl\" [(ngModel)]=\"subjectId\" (ngModelChange)=\"getBatches(1)\">\n              <option value=\"\"> {{isProfessional ? 'Select Course' : 'Select Subjects'}} </option>\n              <option *ngFor=\"let i of getSubjects\" [value]=\"i.subject_id\">\n                {{(i.subject_name.length > 30) ? (i.subject_name | slice:0:30) + '...' : i.subject_name}}\n              </option>\n            </select>\n          </div>\n          <div class=\"c-lg-6 field-wrapper\">\n            <!-- <label class=\"forms\">Comments</label> -->\n            <textarea class=\"form-ctrl\" placeholder=\"comments\" style=\"height: 31px;\" [(ngModel)]=\"fetchShareOption.desc\"></textarea>\n          </div>\n        </div>\n      </div>\n      <div style=\"border-top: none;width: 100%;min-height: 30vh;\">\n\n        <div class=\"table table-responsive table-ne\" style=\"margin-left: 24px;\n        max-width: 94%;\">\n          <table>\n            <thead *ngIf=\"batchesId\">\n              <tr>\n                <th style=\"box-shadow: 0px 4px 4px rgb(0 0 0 / 10%);\">\n                  <div class=\"field-checkbox-wrapper\" style=\"display: inline-block;\n                  margin-right: 10px; margin-left: 15px;vertical-align: middle;\">\n                    <input type=\"checkbox\" class=\"form-checkbox\" [(ngModel)]=\"isChecked\" (ngModelChange)=\"fileSharedBatches($event)\">\n                    <label></label>\n                  </div>\n                  <span>\n                  {{schoolModel ? 'Section' : 'Batch'}} Name\n                </span>\n                </th>\n                <th style=\"box-shadow: 0px 4px 4px rgb(0 0 0 / 10%);\">\n                  Access Start Date\n                </th>\n                <th style=\"box-shadow: 0px 4px 4px rgb(0 0 0 / 10%);\">\n                  Access End Date\n                </th>\n              </tr>\n            </thead>\n            <thead *ngIf=\"studentsId\">\n              <tr style=\"text-align: left;\n              padding: 5px 0px 10px 5px;\">\n                <th style=\"box-shadow: 0px 4px 4px rgb(0 0 0 / 10%); \">\n                  <div class=\"field-checkbox-wrapper\" style=\"display: inline-block;margin-right: 10px; margin-left: 15px;vertical-align: middle;\">\n                    <input type=\"checkbox\" class=\"form-checkbox\" [(ngModel)]=\"isStudentChecked\" (ngModelChange)=\"fileSharedStudents($event)\">\n                    <label></label>\n                  </div>\n                  <span>\n                  Id\n                </span>\n                </th>\n                <th style=\"box-shadow: 0px 4px 4px rgb(0 0 0 / 10%);\">\n                  Student Name\n                </th>\n                <th style=\"box-shadow: 0px 4px 4px rgb(0 0 0 / 10%);\">\n                  Access Start Date\n                </th>\n                <th style=\"box-shadow: 0px 4px 4px rgb(0 0 0 / 10%);\">\n                  Access End Date\n                </th>\n              </tr>\n            </thead>\n            <tbody *ngIf=\"batchesId && getBatchesData.length!=0\">\n              <tr *ngFor=\"let i of getBatchesData ; let j =index;\">\n                <td style=\"text-align: left; \">\n                  <div style=\"vertical-align: middle;margin-right: 10px;margin-left: 0;\" class=\"field-checkbox-wrapper\">\n                    <input type=\"checkbox\" class=\"form-checkbox\" [(ngModel)]=\"i.isChecked\" (ngModelChange)=\"getFileSharedBatches($event , j)\">\n                    <label></label>\n                  </div>\n                <span title=\"{{i.batch_name}}\">{{(i.batch_name.length > 30) ? (i.batch_name | slice:0:30) + '...' : i.batch_name}}</span>\n                </td>\n                <td style=\"text-align: left; padding: 0px;\">\n                  <div class=\"field-wrapper datePickerBox\">\n                    <input type=\"text\" style=\"border: none;\" readonly=\"true\" class=\"form-ctrl\" bsDatepicker [(ngModel)]=\"i.file_access_start_time\">\n                  </div>\n                  <!-- <div class=\"row row-fix\">\n                    <div class=\"c-lg-12\">\n                      <div class=\"c-lg-3\">\n                        <label class=\"norm\">Date</label>\n                        <select style=\"border: 1px solid #efefef;\" [(ngModel)]=\"i.start_date\" (ngModelChange)=\"getStartDate($event , j)\">\n                          <option></option>\n                          <option *ngFor=\"let date of date\" [value]=\"date\">\n                            {{date}}\n                          </option>\n                        </select>\n                      </div>\n                      <div class=\"c-lg-3\">\n                        <label class=\"norm\">Month</label>\n                        <select style=\"border: 1px solid #efefef;\" [(ngModel)]=\"i.start_month\" (ngModelChange)=\"getStartMonth($event  , j)\">\n                          <option></option>\n                          <option *ngFor=\"let month of month\" [value]=\"month\">\n                            {{month}}\n                          </option>\n                        </select>\n                      </div>\n                      <div class=\"c-lg-5\">\n                        <label class=\"norm\">Year</label>\n                        <select style=\"border: 1px solid #efefef;\" [(ngModel)]=\"i.start_year\" (ngModelChange)=\"getStartYear($event  , j)\">\n                          <option></option>\n                          <option *ngFor=\"let year of year\" [value]=\"year\">\n                            {{year}}\n                          </option>\n                        </select>\n                      </div>\n                    </div>\n                  </div> -->\n                </td>\n                <td style=\"text-align: left; padding: 0px;\">\n                  <div class=\"field-wrapper datePickerBox\">\n                    <input type=\"text\" style=\"border: none;\" readonly=\"true\" class=\"form-ctrl\" bsDatepicker [(ngModel)]=\"i.file_access_end_time\">\n                  </div>\n                  <!-- <div class=\"row row-fix\">\n                    <div class=\"c-lg-12\">\n                      <div class=\"c-lg-3\">\n                        <label class=\"norm\">Date</label>\n                        <select style=\"border: 1px solid #efefef;\" [(ngModel)]=\"i.end_date\" (ngModelChange)=\"getEndDate($event  , j)\">\n                          <option></option>\n                          <option *ngFor=\"let year of date\" [value]=\"year\">\n                            {{year}}\n                          </option>\n                        </select>\n                      </div>\n                      <div class=\"c-lg-3\">\n                        <label class=\"norm\">Month</label>\n                        <select style=\"border: 1px solid #efefef;\" [(ngModel)]=\"i.end_month\" (ngModelChange)=\"getEndMonth($event  , j)\">\n                          <option></option>\n                          <option *ngFor=\"let month of month\" [value]=\"month\">\n                            {{month}}\n                          </option>\n                        </select>\n                      </div>\n                      <div class=\"c-lg-5\">\n                        <label class=\"norm\">Year</label>\n                        <select style=\"border: 1px solid #efefef;\" [(ngModel)]=\"i.end_year\" (ngModelChange)=\"getEndYear($event  , j)\">\n                          <option></option>\n                          <option *ngFor=\"let year of year\" [value]=\"year\">\n                            {{year}}\n                          </option>\n                        </select>\n                      </div>\n                    </div>\n                  </div> -->\n                </td>\n              </tr>\n            </tbody>\n            <tbody *ngIf=\"batchesId && getBatchesData.length==0 && dataStatus === false\">\n              <tr>\n                <td colspan=\"3\">No Records Found</td>\n              </tr>\n            </tbody>\n            <tbody *ngIf=\"batchesId && getBatchesData.length == 0 && dataStatus === true\">\n              <tr *ngFor=\"let dummy of dummyArr\">\n                <td *ngFor=\"let c of columnMaps\" style=\"padding:10px;\">\n                  <div class=\"skeleton\">\n                  </div>\n                </td>\n              </tr>\n            </tbody>\n            <tbody *ngIf=\"studentsId && getStudentsData.length!=0\">\n              <tr *ngFor=\"let i of getStudentsData ; let j =index;\">\n                <td style=\"text-align: left; width:21%;\">\n                  <div style=\"vertical-align: middle;margin-right: 10px;margin-left: 0;\" class=\"field-checkbox-wrapper\">\n                    <input type=\"checkbox\" class=\"form-checkbox\" [(ngModel)]=\"i.isChecked\" (ngModelChange)=\"getFileSharedStudents($event , j)\">\n                    <label></label>\n                  </div>\n                  {{i.student_disp_id}}\n                </td>\n                <td style=\"text-align: left;\" title=\"{{i.student_name}}\">\n                  {{(i.student_name.length > 20) ? (i.student_name | slice:0:20) + '...' : i.student_name}}\n                </td>\n                <td style=\"text-align: left; padding: 0px;\">\n                  <div class=\"field-wrapper datePickerBox\">\n                    <input type=\"text\" style=\"border: none;\" readonly=\"true\" class=\"form-ctrl\" bsDatepicker [(ngModel)]=\"i.file_access_start_time\">\n                  </div>\n                  <!-- <div class=\"row row-fix\">\n                    <div class=\"c-lg-12\">\n                      <div class=\"c-lg-3\">\n                        <label class=\"norm\">Date</label>\n                        <select style=\"border: 1px solid #efefef;\" [(ngModel)]=\"i.start_date\" (ngModelChange)=\"getStartDate($event , j)\">\n                          <option></option>\n                          <option *ngFor=\"let date of date\" [value]=\"date\">\n                            {{date}}\n                          </option>\n                        </select>\n                      </div>\n                      <div class=\"c-lg-3\">\n                        <label class=\"norm\">Month</label>\n                        <select style=\"border: 1px solid #efefef;\" [(ngModel)]=\"i.start_month\" (ngModelChange)=\"getStartMonth($event , j)\">\n                          <option></option>\n                          <option *ngFor=\"let month of month\" [value]=\"month\">\n                            {{month}}\n                          </option>\n                        </select>\n                      </div>\n                      <div class=\"c-lg-5\">\n                        <label class=\"norm\">Year</label>\n                        <select style=\"border: 1px solid #efefef;\" [(ngModel)]=\"i.start_year\" (ngModelChange)=\"getStartYear($event , j)\">\n                          <option></option>\n                          <option *ngFor=\"let year of year\" [value]=\"year\">\n                            {{year}}\n                          </option>\n\n                        </select>\n                      </div>\n                    </div>\n                  </div> -->\n                </td>\n                <td style=\"text-align: left; padding: 0px;\">\n                  <div class=\"field-wrapper datePickerBox\">\n                    <input type=\"text\" style=\"border: none;\" readonly=\"true\" class=\"form-ctrl\" bsDatepicker [(ngModel)]=\"i.file_access_end_time\">\n                  </div>\n                  <!-- <div class=\"row row-fix\">\n                    <div class=\"c-lg-12\">\n                      <div class=\"c-lg-3\">\n                        <label class=\"norm\">Date</label>\n                        <select style=\"border: 1px solid #efefef;\" [(ngModel)]=\"i.end_date\" (ngModelChange)=\"getEndDate($event , j)\">\n                          <option></option>\n                          <option *ngFor=\"let date of date\" [value]=\"date\">\n                            {{date}}\n                          </option>\n                        </select>\n                      </div>\n                      <div class=\"c-lg-3\">\n                        <label class=\"norm\">Month</label>\n                        <select style=\"border: 1px solid #efefef;\" [(ngModel)]=\"i.end_month\" (ngModelChange)=\"getEndMonth($event , j)\">\n\n                          <option></option>\n                          <option *ngFor=\"let month of month\" [value]=\"month\">\n                            {{month}}\n                          </option>\n                        </select>\n                      </div>\n                      <div class=\"c-lg-5\">\n\n                        <label class=\"norm\">Year</label>\n                        <select style=\"border: 1px solid #efefef;\" [(ngModel)]=\"i.end_year\" (ngModelChange)=\"getEndYear($event , j)\">\n\n                          <option></option>\n                          <option *ngFor=\"let year of year\" [value]=\"year\">\n                            {{year}}\n                          </option>\n                        </select>\n                      </div>\n                    </div>\n                  </div> -->\n                </td>\n              </tr>\n            </tbody>\n            <tbody *ngIf=\"studentsId && getStudentsData.length==0 && dataStatus === false\">\n              <tr>\n                <td colspan=\"4\">No Records Found</td>\n              </tr>\n            </tbody>\n            <tbody *ngIf=\"studentsId && getStudentsData.length == 0 && dataStatus === true\">\n              <tr *ngFor=\"let dummy of dummyArr\">\n                <td *ngFor=\"let c of columnMaps\" style=\"padding:10px;\">\n                  <div class=\"skeleton\">\n                  </div>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n\n\n    <div id=\"tab2Content\">\n      <div class=\"tab\" *ngIf=\"categoryId!=62\">\n        <div class=\"row\">\n          <div class=\"c-lg-4 field-wrapper\">\n            <label class=\"forms\" *ngIf=\"isProfessional\">Master Course</label>\n            <label class=\"forms\" *ngIf=\"!isProfessional\">Standards</label>\n            <select class=\"form-ctrl\" [(ngModel)]=\"fileSharePublic.standard_id\" (ngModelChange)=\"getAllSubjects($event)\">\n              <option value=\"-1\">{{isProfessional ? 'Select Master Course' : 'Select Standards'}}</option>\n              <option *ngFor=\"let i of getStandards\" [value]=\"i.standard_id\">\n                {{(i.standard_name.length > 30) ? (i.standard_name | slice:0:30) + '...' : i.standard_name}}\n              </option>\n            </select>\n          </div>\n          <div class=\"c-lg-4 field-wrapper\">\n            <label class=\"forms\" *ngIf=\"isProfessional\">Course</label>\n            <label class=\"forms\" *ngIf=\"!isProfessional\">Subjects</label>\n            <select class=\"form-ctrl\" [(ngModel)]=\"fileSharePublic.subject_id\">\n              <option value=\"-1\">{{isProfessional ? 'Select Course' : 'Select Subjects'}}</option>\n              <option *ngFor=\"let i of getSubjects\" [value]=\"i.subject_id\">\n                {{(i.subject_name.length > 30) ? (i.subject_name | slice:0:30) + '...' : i.subject_name}}\n              </option>\n            </select>\n          </div>\n          <div class=\"c-lg-4 field-wrapper\">\n            <label class=\"forms\">Course Types<span class=\"text-danger\">*</span></label>\n            <select id=\"courses\" class=\"form-ctrl\" multiple [(ngModel)]=\"courseType\" style=\"height: 75px;\" (ngModelChange)=\"courseTypeSelection($event)\">\n              <option *ngFor=\"let i of courseMappingArray\" [value]=\"i.course_type_id\" [selected]=\"prefillSelected(i.course_type_id)\">{{i.course_type}}</option>\n            </select>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div id=\"tab3Content\" class=\"\">\n\n    </div>\n  </div>\n  </div>\n\n  <div popup-footer style=\"margin-top: 2%;\">\n    <div *ngIf=\"tabChoice == 'institute'\" class=\"row\" style=\"text-align: right ; width:94%;\">\n      <div class=\"c-lg-8\" *ngIf=\"!editInstituteShare\">\n        <div class=\"c-lg-3 field-checkbox-wrapper\" *ngIf=\"getFileType == 'pdf'\" style=\"width:26%;\">\n          <input type=\"checkbox\" class=\"form-checkbox\"\n          id=\"institute\" [(ngModel)]=\"isReadonlyInst\" (ngModelChange)=\"getReadonlyinst($event)\">\n          <label for=\"institute\">\n            Read Only\n          </label>\n        </div>\n      </div>\n      <div class=\"c-lg-6\" *ngIf=\"editInstituteShare\">\n        <div class=\"c-lg-4 field-checkbox-wrapper\" *ngIf=\"getFileType == 'pdf'\" style=\"width:26%;\">\n          <input type=\"checkbox\" class=\"form-checkbox\" id=\"institute\" [(ngModel)]=\"isReadonlyInst\" (ngModelChange)=\"getReadonlyinst($event)\">\n          <label for=\"institute\">\n            Read Only\n          </label>\n        </div>\n      </div>\n\n      <div class=\"c-lg-2\" *ngIf=\"!editInstituteShare\" style=\"text-align: right;\">\n        <input type=\"button\" value=\"Share\" class=\"btn fullBlue\" (click)=\"shareFile()\" style=\"width:100%\">\n      </div>\n      <div class=\"c-lg-2\" *ngIf=\"editInstituteShare\">\n        <input type=\"button\" value=\"Update\" class=\"btn fullBlue\" (click)=\"shareFile()\" style=\"width:100%\">\n      </div>\n      <div class=\"c-lg-2\" *ngIf=\"editInstituteShare\">\n        <input type=\"button\" value=\"UnShare\" class=\"btn fullBlue\" (click)=\"shareFile('1')\" style=\"width:100%\">\n      </div>\n      <div class=\"c-lg-2\">\n        <input type=\"button\" value=\"Close\" class=\"btn fullBlue\" (click)=\"close()\" style=\"width:100%\">\n      </div>\n    </div>\n\n    <div *ngIf=\"tabChoice == 'public'\" class=\"row\" style=\"text-align: right ; width:94%\">\n      <div class=\"c-lg-8\" *ngIf=\"!editPublicShare\">\n        <div class=\"c-lg-3 field-checkbox-wrapper\" *ngIf=\"getFileType == 'pdf'\" style=\"width:26%;\">\n          <input type=\"checkbox\" class=\"form-checkbox\" id=\"public\" [(ngModel)]=\"isReadonlyPub\" (ngModelChange)=\"getReadonlypublic($event)\">\n          <label for=\"public\">\n            Read Only\n          </label>\n        </div>\n\n      </div>\n      <div class=\"c-lg-6\" *ngIf=\"editPublicShare\">\n        <div class=\"c-lg-4 field-checkbox-wrapper\" *ngIf=\"getFileType == 'pdf'\" style=\"width:36%;\">\n          <input type=\"checkbox\" class=\"form-checkbox\" id=\"public\" [(ngModel)]=\"isReadonlyPub\" (ngModelChange)=\"getReadonlypublic($event)\">\n          <label for=\"public\">\n            Read Only\n          </label>\n        </div>\n      </div>\n\n      <div class=\"c-lg-2\" *ngIf=\"!editPublicShare\" style=\"text-align: right;\">\n        <input type=\"button\" value=\"Share\" class=\"btn fullBlue\" (click)=\"shareFile()\" style=\"width:100%\">\n      </div>\n      <div class=\"c-lg-2\" *ngIf=\"editPublicShare \">\n        <input type=\"button\" value=\"Update\" class=\"btn fullBlue\" (click)=\"shareFile()\" style=\"width:100%\">\n      </div>\n      <div class=\"c-lg-2\" *ngIf=\"editPublicShare\">\n        <input type=\"button\" value=\"UnShare\" class=\"btn fullBlue\" (click)=\"shareFile('1')\" style=\"width:100%\">\n      </div>\n      <div class=\"c-lg-2\">\n        <input type=\"button\" value=\"Close\" class=\"btn fullBlue\" (click)=\"close()\" style=\"width:100%\">\n      </div>\n    </div>\n\n    <div *ngIf=\"tabChoice == 'student'\" class=\"row\" style=\"text-align: right ; width:94%\">\n      <div class=\"c-lg-8\">\n        <div class=\"c-lg-3 field-checkbox-wrapper\" *ngIf=\"getFileType == 'pdf'\" style=\"float: left;width:26%;\">\n          <input type=\"checkbox\" class=\"form-checkbox\" id=\"student\" [(ngModel)]=\"isReadonlyStu\" (ngModelChange)=\"getReadonlystu($event)\">\n          <label for=\"student\">\n            Read Only\n          </label>\n        </div>\n      </div>\n\n      <div class=\"c-lg-2\">\n        <input *ngIf=\"!editBatchShare \" type=\"button\" value=\"Share\" class=\"btn fullBlue\" (click)=\"shareFile()\" style=\"width:100%\">\n        <input *ngIf=\"editBatchShare\" type=\"button\" value=\"Update\" class=\"btn fullBlue\" (click)=\"shareFile()\" style=\"width:100%\">\n      </div>\n      <div class=\"c-lg-2\">\n        <input type=\"button\" value=\"Close\" class=\"btn fullBlue\" (click)=\"close()\" style=\"width:100%\">\n      </div>\n    </div>\n  </div>\n\n</proctur-popup>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/file-manager/upload-popup/upload-popup.component.html":
    /*!**************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/file-manager/upload-popup/upload-popup.component.html ***!
      \**************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsCourseModuleFileManagerUploadPopupUploadPopupComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<proctur-popup [sizeWidth]=\"'small'\">\n\n  <span class=\"closePopup pos-abs fbold show\" close-button (click)=\"close()\">\n    <svg class=\"artdeco-icon\" focusable=\"false\" height=\"24px\" preserveAspectRatio=\"xMinYMin meet\" viewBox=\"0 0 24 24\"\n      width=\"24px\" x=\"0\" y=\"0\">\n      <path class=\"large-icon\"\n        d=\"M20,5.32L13.32,12,20,18.68,18.66,20,12,13.33,5.34,20,4,18.68,10.68,12,4,5.32,5.32,4,12,10.69,18.68,4Z\"\n        style=\"fill: currentColor\"></path>\n    </svg>\n  </span>\n\n  <div popup-header class=\"popup-header-content\">\n    <h2 style=\"text-align: center;\">{{!editView.editView ? 'Upload File': 'Update File'}}</h2>\n  </div>\n\n  <div popup-content class=\"popup-header-content\">\n\n    <div *ngIf=\"!manualUpload\">\n      <div class=\"row\">\n        <div class=\"c-lg-8 field-wrapper\">\n          <label>Select Category</label>\n          <select class=\"form-ctrl\" [(ngModel)]=\"cacategory_id\" (ngModelChange)=\"categoryCheck($event)\">\n            <option value=\"-1\">Select Category</option>\n            <option *ngFor=\"let i of getCategoryData\" [value]=\"i.category_id\">\n              {{i.category_name}}\n            </option>\n          </select>\n        </div>\n        <div class=\"c-lg-1\">\n          <i class=\"fa fa-upload\" title=\"Upload File\" (click)=\"uploadHandler()\"\n            style=\"font-family: 'FontAwesome' ; display: inline-block; font-size: 19px; color: #0d171f; margin-top: 30px;  margin-left: -14px;\">\n          </i>&nbsp;&nbsp;&nbsp;\n        </div>\n        <div class=\"c-lg-3\">\n          <div class=\"uploadProcessAndFileName clearfix\" *ngIf=\"isUploadingXls\">\n            <div class=\"file-uploaded\">\n              {{fileLoading}}\n            </div>\n            <div class=\"progress-bar-wrapper\">\n              <div class=\"upload-bar\">\n                <div id=\"progress-width\"></div>\n              </div>\n              <!-- <span>0</span>\n              <span style=\"margin-left: 55%;\">100</span> -->\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\" *ngIf=\"type!='' && category_id!=230\" style=\"margin-top: 10px;\n      margin-left: 14px;\">\n        <label>Format supported :\n          <span>{{type}}</span>\n        </label>\n      </div>\n      <div class=\"row\" style=\"margin-left: 2%;\">\n\n        <ul *ngFor=\"let file of customFileArr\" style=\"display: inline-block; width:40%;\" class=\"shadow\">\n          <div class=\"row\">\n            <div class=\"c-lg-2\">\n              <li style=\"display:inline-block;width: 30px;\n                  display: inline-block;\n                  margin-top: 4px;\">\n                <img src=\"assets/images/file_manager/image.svg\" style=\"width: 96px;\n                    height: 32px;\n                    margin-left: -11px;\" *ngIf=\"category_image.hasOwnProperty(file.fileType)\">\n                <img src=\"assets/images/file_manager/xlsx.png\" style=\"width: 96px;\n                    height: 32px;\n                    margin-left: -11px;\" *ngIf=\"category_docx.hasOwnProperty(file.fileType)\">\n                <img src=\"assets/images/file_manager/pdf.png\" style=\"width: 96px;\n                    height: 32px;\n                    margin-left: -11px;\" *ngIf=\"category_pdf.hasOwnProperty(file.fileType)\">\n              </li>\n            </div>\n            <div class=\"c-lg-10\">\n              <li style=\"display: inline-block;\">\n                File Name : {{file.fileName}}\n              </li>\n              <li>\n                File Type : {{file.fileType}}\n              </li>\n              <li>\n                File Size : {{file.fileSize}}\n              </li>\n            </div>\n          </div>\n\n        </ul>\n\n      </div>\n    </div>\n    <div *ngIf=\"manualUpload\">\n      <div class=\"row\">\n        <div class=\"c-lg-8 field-wrapper\">\n          <label>Select Category</label>\n          <select class=\"form-ctrl\" [(ngModel)]=\"category_id\" (ngModelChange)=\"categoryCheck()\">\n            <option value=\"-1\">Select Category</option>\n            <option *ngFor=\"let i of getCategoryData\" [value]=\"i.category_id\">\n              {{i.category_name}}\n            </option>\n\n          </select>\n        </div>\n        <div class=\"c-lg-3\">\n          <div class=\"uploadProcessAndFileName clearfix\" *ngIf=\"isUploadingXls\">\n            <div class=\"file-uploaded\">\n              {{fileLoading}}\n            </div>\n            <div class=\"progress-bar-wrapper\">\n              <div class=\"upload-bar\">\n                <div id=\"progress-width\"></div>\n              </div>\n              <!-- <span>0</span>\n              <span style=\"margin-left: 55%;\">100</span> -->\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\" *ngIf=\"type!='' && category_id!=230 && category_id!=vimeo_category_id\" style=\"margin-top: 10px;\n      margin-left: 14px;\">\n        <label>Format supported :\n          <span>{{type}}</span>\n        </label>\n      </div>\n      <div class=\"row\">\n        <div class=\"c-lg-8 field-wrapper\"\n          *ngIf='category_id!=\"230\" && !editView.editView && category_id!=vimeo_category_id'>\n          <label>Choose Multiple Files(Ctrl + ) To Upload</label>\n          <input type=\"file\" class=\"form-ctrl\" id=\"uploadFileControl\" name=\"uploadFileBox\" (change)=\"fillFiles()\"\n            multiple />\n        </div>\n\n        <div class=\"c-lg-8 field-wrapper\"\n          *ngIf='category_id==\"230\" && !editView.editView && category_id!=vimeo_category_id'>\n          <label></label>\n          <input type=\"text\" class=\"form-ctrl\" placeholder=\"Please enter URL\" id=\"youtubeUrl\" name=\"youtubeUrl\"\n            [(ngModel)]=\"youtubeUrl\">\n        </div>\n        <div class=\"c-lg-8 field-wrapper\" *ngIf='editView.editView'>\n          <label>Title</label>\n          <input type=\"text\" class=\"form-ctrl\" placeholder=\"Please enter title\" id=\"youtubeUrl\" name=\"youtubeUrl\"\n            [(ngModel)]=\"youtubeUrl\">\n        </div>\n\n        <div class=\"c-lg-2\" *ngIf=\"(!editView.editView && category_id!=vimeo_category_id) || editView.editView\">\n          <button class=\"btn fullBlue\" (click)=\"uploadHandler()\"\n            *ngIf=\"!editView.editView && category_id!=vimeo_category_id\" style=\"margin-top: 4vh;\">Upload</button>\n          <button class=\"btn fullBlue\" (click)=\"updateYoutubeURL()\" *ngIf=\"editView.editView\"\n            style=\"margin-top: 4vh;\">Update</button>\n        </div>\n\n        <!-- Developed by - Nalini\n                Form to upload vimeo file\n               -->\n        <div class=\"c-lg-8 field-wrapper\" *ngIf='category_id == vimeo_category_id && !editView.editView'>\n          <label>Title</label>\n          <input type=\"text\" class=\"form-ctrl\" placeholder=\"Please enter title\" id=\"youtubeUrl\" name=\"youtubeUrl\"\n            [(ngModel)]=\"youtubeUrl\">\n        </div>\n        <form style=\"height: 100px;\" *ngIf=\"category_id == vimeo_category_id && !editView.editView\" #form method=\"post\"\n          id=\"form\" enctype=\"multipart/form-data\">\n          <div>\n            <div class=\"row\">\n              <div class=\"c-lg-9\" style=\"margin-top: 10px\">\n                <input style=\"float: left;\" type=\"file\" id=\"file\" accept=\"video/mp4,video/x-m4v,video/*\"\n                  (change)=\"onFileChange($event)\" name=\"file_data\">\n                <div *ngIf=\"Vimeofile.files?.length\" style=\"margin-left: 15px;float: left;margin-top: 4px;\">\n                  {{(Vimeofile.files[0].size / 1024) / 1024 | number:'.3-3'}} MB</div>\n              </div>\n              <div class=\"c-lg-3\">\n                <button class=\"btn fullBlue\" (click)=\"uploadHandler()\"> Upload </button>\n              </div>\n\n            </div>\n          </div>\n          <div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\" *ngIf=\"progressBar\">\n    <div class=\"c-lg-8 progress-bar-wrapper\">\n      <div class=\"upload-bar\">\n        <div id=\"progress-width\"></div>\n      </div>\n      <span>{{progress}} %</span>\n    </div>\n  </div>";
      /***/
    },

    /***/
    "./src/app/components/course-module/file-manager/drive-home/drive-home.component.scss":
    /*!********************************************************************************************!*\
      !*** ./src/app/components/course-module/file-manager/drive-home/drive-home.component.scss ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsCourseModuleFileManagerDriveHomeDriveHomeComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/* ===============================header colors=======================*/\n.table-format-first .table-responsive table th,\n.table-format-first .table-responsive table td {\n  text-align: center;\n  padding: 10px 5px;\n}\n.table-format-first .table-responsive table th {\n  text-transform: capitalize;\n  font-size: 14px;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper {\n  display: inline-block;\n  overflow: initial;\n  margin-left: 0;\n  width: auto;\n  position: relative;\n  background: transparent;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox {\n  z-index: 2;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label {\n  font-size: 16px;\n  margin-left: 7px;\n  font-weight: 600;\n  vertical-align: middle;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:after, .table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:before {\n  z-index: 1;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper:after {\n  content: '';\n  width: 20px;\n  height: 20px;\n  background: #fff;\n  left: 0;\n  top: 0;\n  position: absolute;\n}\n.table-format-first .table-responsive table tbody tr td .fa-trash-o {\n  color: #f44336;\n  font-size: 20px;\n}\n.table-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-top: 10px;\n}\n.table-container .heading-container {\n  background: #e0eaec;\n  display: flex;\n  flex-direction: row;\n  font-size: 14px;\n  font-weight: 600;\n  text-align: left;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n}\n.table-container .heading-container .heading-item {\n  width: 10%;\n  text-align: center;\n}\n.table-container .value-outer-container {\n  display: flex;\n  flex-direction: column;\n  min-height: 53vh;\n  max-height: 54vh;\n  overflow-x: hidden;\n  overflow-y: auto;\n  border: 1px solid #ccc;\n}\n.table-container .value-outer-container .value-container {\n  display: flex;\n  flex-direction: row;\n  text-align: left;\n  padding: 4px;\n  font-size: 12px;\n  border-bottom: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n  border-top: none;\n}\n.table-container .value-outer-container .value-container .value-item {\n  width: 10%;\n  text-align: center;\n}\n.file-manager-header {\n  padding: 10px 30px;\n}\n.file-manager-header h1 {\n  font-size: 24px;\n}\n/*----------------------------------------\nCENTER CONTENT\n----------------------------------------*/\n.center-content {\n  display: table;\n  width: 100%;\n  height: 100%;\n  background-color: #f4f5f7;\n}\n/*----------------------------------------\nTOP BAR\n----------------------------------------*/\n.top-nav {\n  padding: 10px 15px 10px 20px;\n  background-color: #f4f5f7;\n  display: table;\n  width: 100%;\n}\n.top-nav h1 {\n  font-size: 14px;\n}\n.pathAnchor:hover {\n  cursor: pointer;\n  background: #efefef;\n}\n.search {\n  display: table-cell;\n  -webkit-appearance: none;\n  appearance: none;\n  -moz-appearance: none;\n  -o-appearance: none;\n  border: none;\n  box-shadow: none;\n  background-image: url(\"data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDYyNi41MiA2MjYuNTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDYyNi41MiA2MjYuNTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8cGF0aCBkPSJNNjExLjUzMSw1ODEuNDk0TDQ3MC45NzQsNDQwLjkzN2M0MS41NzMtNDYuOTAyLDY3LjYxNC0xMDcuODUsNjcuNjE0LTE3NS4yOTJDNTM4LjU2NiwxMTkuMTU1LDQxOS4zODksMCwyNzIuODk5LDAgICBDMTI2LjQzMSwwLDcuMjU0LDExOS4xNTUsNy4yNTQsMjY1LjY0NWMwLDE0Ni40NDcsMTE5LjE3NywyNjUuNjAyLDI2NS42NDUsMjY1LjYwMmM2MC4wNDIsMCwxMTQuODE5LTIwLjc1NSwxNTkuMzctNTQuNDMyICAgbDE0MS45MzgsMTQxLjk4YzUuMTc4LDUuMTU2LDExLjkwOCw3LjcyNCwxOC42NjEsNy43MjRzMTMuNTA2LTIuNTY3LDE4LjY2Mi03LjcyNCAgIEM2MjEuODQzLDYwOC41MDUsNjIxLjg0Myw1OTEuODA3LDYxMS41MzEsNTgxLjQ5NHogTTYwLjAyNSwyNjUuNjQ1YzAtMTE3LjM2NCw5NS41MS0yMTIuODk2LDIxMi44OTYtMjEyLjg5NiAgIGMxMTcuNDA4LDAsMjEyLjg5Niw5NS41MDksMjEyLjg5NiwyMTIuODk2cy05NS40ODgsMjEyLjgzMi0yMTIuODk2LDIxMi44MzJDMTU1LjUzNSw0NzguNDc3LDYwLjAyNSwzODMuMDMxLDYwLjAyNSwyNjUuNjQ1eiIgZmlsbD0iI2IzYjRiYSIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=\");\n  height: 45px;\n  padding: 8px 15px 8px 38px;\n  background-repeat: no-repeat;\n  background-position-x: 12px;\n  background-position-y: center;\n  background-size: 15px;\n  background-color: #fff;\n  font-size: 20px;\n  font-weight: 500;\n  transition: all 0.3s;\n  -webkit-transition: all 0.3s;\n  -moz-transition: all 0.3s;\n  -ms-transition: all 0.3s;\n  -o-transition: all 0.3s;\n}\n.search:focus {\n  padding-left: 18px;\n  background-position-x: -50px;\n}\n.search--width {\n  width: 25%;\n  border-bottom: 1px solid #777;\n  float: right;\n}\n.user-box {\n  display: none;\n  height: 100%;\n  width: 20%;\n  text-align: center;\n}\n.more__info {\n  width: 30px;\n  height: 30px;\n  font-size: 24px;\n  display: inline-block;\n  vertical-align: middle;\n  color: #777;\n  cursor: pointer;\n}\n.grid__view {\n  width: 30px;\n  height: 27px;\n  font-size: 24px;\n  display: inline-block;\n  vertical-align: middle;\n  color: #777;\n  cursor: pointer;\n}\n.list__view {\n  width: 30px;\n  height: 27px;\n  font-size: 24px;\n  display: inline-block;\n  vertical-align: middle;\n  color: #777;\n  cursor: pointer;\n}\n/*----------------------------------------\nFILE\n----------------------------------------*/\n.row__title {\n  font-size: 16px;\n  font-weight: 600;\n  margin: 0;\n}\n.row__title-box {\n  padding-left: 30px;\n  margin-bottom: 20px;\n  margin-top: 20px;\n}\n.row--no-right {\n  margin-right: 0px;\n  margin-left: -50px;\n}\n.row--no-right.bread {\n  margin-left: -50px;\n}\n.files-cont {\n  margin: 0 auto;\n  padding: 0px 0px 0 50px;\n}\n.file__details {\n  font-size: 13px;\n  color: #8087a2;\n  font-weight: 500;\n  padding: 0px 5px;\n  display: inline-flex;\n  width: 15%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.file__details.file__date {\n  font-size: 13px;\n  color: #8087a2;\n  font-weight: 500;\n  padding: 0px 5px;\n  width: 15%;\n}\n.file__details.file__size {\n  width: 10%;\n}\n.file__details.file__header__name {\n  width: 20%;\n}\n.file__details.file__owner {\n  width: 15%;\n}\n.file__details.file__Data {\n  width: 10%;\n}\n.grid__container ::-webkit-scrollbar {\n  display: block;\n}\n.grid__container .file {\n  cursor: pointer;\n  width: 100%;\n  border-radius: 10px;\n  background-color: #fff;\n  box-shadow: 0px 5px 5px -2px rgba(0, 0, 0, 0.2);\n  border: 1px solid rgba(0, 0, 0, 0.07);\n  float: left;\n  margin-left: 5px;\n  transition: all 0.3s;\n  -webkit-transition: all 0.3s;\n  -moz-transition: all 0.3s;\n  -ms-transition: all 0.3s;\n  -o-transition: all 0.3s;\n  margin-bottom: 0px;\n}\n.grid__container .file.table__header {\n  cursor: default;\n  width: 100%;\n  border-radius: 10px;\n  background-color: #fff;\n  box-shadow: 0px 0px 1px 0px rgba(30, 35, 40, 0.36);\n  border: 1px solid rgba(0, 0, 0, 0.07);\n  float: left;\n  margin-left: 5px;\n  transition: all 0.3s;\n  -webkit-transition: all 0.3s;\n  -moz-transition: all 0.3s;\n  -ms-transition: all 0.3s;\n  -o-transition: all 0.3s;\n  margin-bottom: 5px;\n}\n.grid__container .file.table__header:hover {\n  transform: translate(0, 0px);\n  box-shadow: none;\n}\n.grid__container .file:hover {\n  transform: translate(0, -4px);\n  box-shadow: 0px 7px 8px -2px rgba(0, 0, 0, 0.2);\n}\n.grid__container .file__img {\n  width: 10%;\n  height: 0;\n  padding-bottom: 0;\n  margin-top: 0;\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  border-top-right-radius: 10px;\n  border-top-left-radius: 10px;\n}\n.grid__container .file__title {\n  font-size: 14px;\n  font-weight: 600;\n  color: #252a3b;\n  width: 20%;\n  display: inline-block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  line-height: 15px;\n  white-space: nowrap;\n  padding: 0px 7px;\n}\n.grid__container #noFFs {\n  width: 100% !important;\n  text-align: center !important;\n}\n.grid__container #noFFs::before {\n  content: none !important;\n}\n.grid__container .file__title:before {\n  width: 16px;\n  position: absolute;\n  left: 14px;\n  top: 9px;\n}\n.grid__container .file__date {\n  font-size: 13px;\n  color: #8087a2;\n  font-weight: 500;\n}\n.grid__container .file__info {\n  padding: 8px 5px 5px 35px;\n  position: relative;\n}\n.grid__container .preview__pane {\n  overflow: auto;\n  height: 70vh;\n}\n::ng-deep .tree__view_list {\n  width: 100%;\n  height: 88vh;\n  overflow-y: auto;\n}\n::ng-deep .prime__btn {\n  font-size: 12px;\n  padding: 7px 5px;\n  margin: 0px !important;\n}\n::ng-deep .ui-tree .ui-treenode-label {\n  display: inline-block;\n  padding: 0 .25em;\n  vertical-align: middle;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: 80%;\n  font-size: 14px;\n  text-transform: capitalize;\n  color: #89898c;\n  font-weight: 400;\n}\n::ng-deep .ui-tree .ui-treenode-icon {\n  font-size: 20px;\n  color: teal;\n}\n.folder-file .file__img {\n  background-image: url('folder.jpg');\n}\n.folder .file__title:before {\n  content: url(\"data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDQ3NS4wODIgNDc1LjA4MiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDc1LjA4MiA0NzUuMDgyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPHBhdGggZD0iTTQ1Ni4yMzksMTI4LjQ3NWMtMTIuNTYtMTIuNTYyLTI3LjU5Ny0xOC44NDItNDUuMTEtMTguODQyaC0xOTEuODZ2LTkuMTM2YzAtMTcuNTExLTYuMjgzLTMyLjU0OC0xOC44NDMtNDUuMTA3ICAgYy0xMi41NjItMTIuNTYyLTI3LjYtMTguODQ2LTQ1LjExMS0xOC44NDZINjMuOTUzYy0xNy41MTUsMC0zMi41NTEsNi4yODMtNDUuMTExLDE4Ljg0NkM2LjI4LDY3Ljk0OSwwLDgyLjk4NiwwLDEwMC40OTd2Mjc0LjA4OCAgIGMwLDE3LjUwOCw2LjI4LDMyLjU0NSwxOC44NDIsNDUuMTA0YzEyLjU2MiwxMi41NjUsMjcuNiwxOC44NDksNDUuMTExLDE4Ljg0OWgzNDcuMTc1YzE3LjUxNCwwLDMyLjU1MS02LjI4Myw0NS4xMS0xOC44NDkgICBjMTIuNTY2LTEyLjU2LDE4Ljg0My0yNy41OTcsMTguODQzLTQ1LjEwNFYxNzMuNTlDNDc1LjA4MiwxNTYuMDc4LDQ2OC44MDUsMTQxLjA0Miw0NTYuMjM5LDEyOC40NzV6IiBmaWxsPSIjZmZjYTQ1Ii8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==\");\n}\n.drop-area {\n  position: absolute;\n  right: 0;\n  left: 5.3%;\n  bottom: 0;\n  top: 22%;\n  width: 94%;\n  background: transparent;\n}\n.drop-area ::ng-deep .ui-tree .ui-treenode {\n  padding: 10px 5px;\n}\n.drop-area ::ng-deep .ui-button {\n  display: none;\n}\n.drop-area ::ng-deep .ui-fileupload {\n  width: 100%;\n  cursor: pointer;\n}\n.drop-area ::ng-deep .ui-fileupload-buttonbar {\n  display: none;\n}\n.drop-area ::ng-deep .ui-fileupload-content {\n  height: 71vh;\n  padding: 5px;\n  border-top: none;\n  cursor: pointer;\n  cursor: pointer;\n}\n.drop-area ::ng-deep .ui-fileupload-content::after {\n  content: \"Drag & Drop Files Here\";\n  color: rgba(0, 0, 0, 0.09);\n  position: absolute;\n  top: 35%;\n  left: 25%;\n  font-size: 36px;\n}\n.over {\n  z-index: 100;\n  background-color: rgba(147, 147, 147, 0.5);\n  border: 3px dashed #128cf7;\n}\n.drop-zone {\n  margin: auto;\n  height: 100px;\n  border: 2px dotted #0782d0;\n  border-radius: 30px;\n}\n.content {\n  color: #0782d0;\n  height: 100px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.questionInfo {\n  position: absolute;\n  right: 55px;\n  bottom: 37px;\n  height: 20px;\n  width: 20px;\n  z-index: 2;\n}\n.questionInfo .qInfoIcon {\n  width: 20px;\n  height: 20px;\n  border: 1px solid #ccc;\n  border-radius: 50%;\n  display: block;\n  text-align: center;\n  box-sizing: border-box;\n  line-height: 20px;\n  font-weight: 600;\n  font-size: 12px;\n  cursor: pointer;\n  box-shadow: 0px 0px 1px 0px #ccc inset;\n  color: #888;\n  transition: all 0.6s linear;\n}\n.questionInfo .qInfoIcon:hover {\n  border-color: #0060A3;\n  box-shadow: 0px 0px 1px 0px #0060A3 inset;\n  color: #0060A3;\n}\n.black-bg {\n  background: rgba(10, 10, 10, 0.3);\n  position: fixed;\n  top: 0px;\n  height: 100%;\n  left: 0px;\n  z-index: 101;\n  width: 100%;\n}\n.black-bg span {\n  font-size: 18px;\n  color: white;\n  font-weight: 600;\n  text-align: center;\n  position: fixed;\n  top: 43%;\n  left: 46%;\n}\n/*\n============================================================================================\n================================== REjected Grid View ==================================\n============================================================================================\n*/\n/*\n.row__title {\n    font-size: 16px;\n    font-weight: 600;\n    margin: 0;\n}\n\n.row__title-box {\n    padding-left: 30px;\n    margin-bottom: 40px;\n    margin-top: 40px;\n}\n\n.row--no-right {\n    margin-right: 0px;\n    margin-left: -50px;\n}\n\n.files-cont {\n    max-width: 1200px;\n    margin: 0 auto;\n    padding: 0 50px;\n}\n\n.file {\n    cursor: pointer;\n    width: calc(15% - 30px);\n    border-radius: 10px;\n    background-color: #fff;\n    box-shadow: 0px 9px 10px -2px rgba(0, 0, 0, 0.2);\n    border: 1px solid rgba(0, 0, 0, 0.05);\n    float: left;\n    margin-left: 30px;\n    transition: all 0.3s;\n    -webkit-transition: all 0.3s;\n    -moz-transition: all 0.3s;\n    -ms-transition: all 0.3s;\n    -o-transition: all 0.3s;\n    margin-bottom: 30px;\n}\n\n.file:hover {\n    transform: translate(0, -4px);\n    box-shadow: 0px 17px 19px -2px rgba(0, 0, 0, 0.2);\n}\n\n.file__img {\n    width: 100%;\n    height: 0;\n    //padding-bottom: 50%;\n    padding-bottom: 35%;\n    margin-top: 5%;\n    background-repeat: no-repeat;\n    background-size: contain;\n    background-position: center;\n    border-top-right-radius: 10px;\n    border-top-left-radius: 10px;\n}\n\n\n.file__title {\n    font-size: 14px;\n    margin-bottom: 5px;\n    margin-top: 0px;\n    font-weight: 600;\n    color: #252a3b;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n    line-height: 18px;\n}\n\n.file__title:before {\n    width: 16px;\n    position: absolute;\n    left: 14px;\n    top: 22px;\n}\n\n\n.file__date {\n    font-size: 13px;\n    color: #8087a2;\n    font-weight: 500;\n}\n\n.file__info {\n    padding: 20px 20px 20px 45px;\n    position: relative;\n}\n\n@media screen and (max-width:1440px) {\n    .btn--small {\n        padding: 0 5px;\n        width: auto;\n    }\n    .starage-pro {\n        display: none;\n    }\n}\n\n@media screen and (max-width:1024px) {}\n\n@media screen and (max-width:767px) {\n    .center-content {\n        padding-left: 0;\n    }\n    .search--width {\n        width: 100%;\n        height: 40px;\n        font-size: 11px;\n    }\n    .top-nav {\n        padding: 15px;\n    }\n    .file {\n        margin-left: 15px;\n        margin-bottom: 15px;\n        width: calc(10% - 15px);\n    }\n    .file__info {\n        padding: 12px 12px 12px 35px;\n    }\n    .file__date {\n        font-size: 12px;\n    }\n    .file__title {\n        font-size: 13px;\n        margin-bottom: 0;\n        line-height: 20px;\n    }\n    .file__title:before {\n        left: 10px;\n        top: 14px;\n    }\n    .row--no-right {\n        margin: 0 0px 0 -15px;\n    }\n    .files-cont {\n        padding: 0 20px;\n    }\n    .row__title-box {\n        padding-left: 30px;\n        margin-bottom: 15px;\n        margin-top: 15px;\n    }\n    .row__title {\n        font-size: 20px;\n    }\n}\n\n@media screen and (max-width:640px) {\n    .file {\n        margin-left: 15px;\n        margin-bottom: 15px;\n        width: calc(33.3% - 15px);\n    }\n    .file__date {\n        font-size: 11px;\n    }\n    .file__title {\n        font-size: 12px;\n        margin-bottom: 0;\n        line-height: 20px;\n    }\n    .row__title {\n        font-size: 18px;\n    }\n    .file--last {\n        display: none;\n    }\n    .row__title-box {\n        padding-left: 15px;\n        margin-bottom: 20px;\n        margin-top: 20px;\n    }\n}\n\n@media screen and (max-width:480px) {\n    .file {\n        margin-left: 15px;\n        margin-bottom: 15px;\n        width: calc(50% - 15px);\n    }\n    .file--last {\n        display: block;\n    }\n}\n\n@media screen and (max-width:360px) {\n    .file {\n        margin-left: 0;\n        margin-bottom: 20px;\n        width: 100%;\n    }\n    .row--no-right {\n        margin: 0;\n    }\n    .row__title-box {\n        padding-left: 0;\n    }\n    .row__title {\n        font-size: 16px;\n    }\n}\n\n\n*/\n.videoplayer {\n  position: fixed;\n  top: 15%;\n  left: 30%;\n  z-index: 10;\n}\n.black-bg {\n  background: rgba(12, 11, 11, 0.3);\n  position: fixed;\n  top: 0px;\n  height: 100%;\n  left: 0px;\n  z-index: 6;\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY3NzL2NvbW1vbi92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jb3Vyc2UtbW9kdWxlL2ZpbGUtbWFuYWdlci9kcml2ZS1ob21lL2RyaXZlLWhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWUEsdUVBQUE7QUFXQTs7RUFLZ0Isa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQ3hCakM7QURrQkE7RUFTZ0IsMEJBQTBCO0VBQzFCLGVBQWU7QUN2Qi9CO0FEYUE7RUFnQjRCLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsdUJBQXVCO0FDekJuRDtBRElBO0VBdUJnQyxVQUFVO0FDdkIxQztBREFBO0VBMEJnQyxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixzQkFBc0I7QUN0QnREO0FEUEE7RUFnQ29DLFVBQVU7QUNyQjlDO0FEWEE7RUFvQ2dDLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixPQUFPO0VBQ1AsTUFBTTtFQUNOLGtCQUFrQjtBQ3JCbEQ7QURyQkE7RUE4QzRCLGNBbERiO0VBbURhLGVBQWU7QUNyQjNDO0FEOEJBO0VBQ0ksYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsZ0JBQWdCO0FDM0JwQjtBRHVCQTtFQU1NLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLHlCQUF5QjtBQ3pCL0I7QURVQTtFQWlCUSxVQUFVO0VBQ1Ysa0JBQWtCO0FDdkIxQjtBREtBO0VBc0JNLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtBQ3ZCNUI7QURMQTtFQThCUSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZUFBZTtFQUNmLDZCQUE2QjtFQUM3QixvQkFBb0I7RUFDcEIseUJBQXlCO0VBQ3pCLGdCQUFnQjtBQ3JCeEI7QURqQkE7RUF3Q1UsVUFBVTtFQUNWLGtCQUFrQjtBQ25CNUI7QUFuR0E7RUFDSSxrQkFBa0I7QUFzR3RCO0FBdkdBO0VBR1EsZUFBZTtBQXdHdkI7QUFwR0E7O3lDQXdHeUM7QUFwR3pDO0VBQ0ksY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0VBQ1oseUJBQXlCO0FBc0c3QjtBQW5HQTs7eUNBdUd5QztBQW5HekM7RUFDSSw0QkFBNEI7RUFDNUIseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxXQUFXO0FBcUdmO0FBekdBO0VBTVEsZUFBZTtBQXVHdkI7QUFuR0E7RUFDSSxlQUFjO0VBQ2QsbUJBQW1CO0FBc0d2QjtBQW5HQTtFQUNJLG1CQUFtQjtFQUNuQix3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQiw0b0RBQTRvRDtFQUM1b0QsWUFBWTtFQUNaLDBCQUEwQjtFQUMxQiw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLDZCQUE2QjtFQUM3QixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLDRCQUE0QjtFQUM1Qix5QkFBeUI7RUFDekIsd0JBQXdCO0VBQ3hCLHVCQUF1QjtBQXNHM0I7QUFuR0E7RUFDSSxrQkFBa0I7RUFDbEIsNEJBQTRCO0FBc0doQztBQW5HQTtFQUNJLFVBQVU7RUFDViw2QkFBNkI7RUFDN0IsWUFBWTtBQXNHaEI7QUFuR0E7RUFDSSxhQUFhO0VBQ2IsWUFBWTtFQUNaLFVBQVU7RUFDVixrQkFBa0I7QUFzR3RCO0FBbkdBO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsZUFBZTtBQXNHbkI7QUFuR0E7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxlQUFlO0FBc0duQjtBQW5HQTtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGVBQWU7QUFzR25CO0FBbkdBOzt5Q0F1R3lDO0FBbkd6QztFQUNJLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsU0FBUztBQXFHYjtBQWxHQTtFQUNJLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBcUdwQjtBQWxHQTtFQUNJLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFxR3RCO0FBdkdBO0VBSVEsa0JBQWtCO0FBdUcxQjtBQW5HQTtFQUNJLGNBQWM7RUFDZCx1QkFBdUI7QUFzRzNCO0FBbkdBO0VBQ0ksZUFBZTtFQUNmLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFzR3ZCO0FBL0dBO0VBV1EsZUFBZTtFQUNmLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFVBQVU7QUF3R2xCO0FBdkhBO0VBa0JRLFVBQVU7QUF5R2xCO0FBM0hBO0VBcUJRLFVBQVU7QUEwR2xCO0FBL0hBO0VBd0JRLFVBQVU7QUEyR2xCO0FBbklBO0VBMkJRLFVBQVM7QUE0R2pCO0FBeEdBO0VBRVEsY0FBYztBQTBHdEI7QUE1R0E7RUFLUSxlQUFlO0VBQ2YsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsK0NBQStDO0VBQy9DLHFDQUFxQztFQUNyQyxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQiw0QkFBNEI7RUFDNUIseUJBQXlCO0VBQ3pCLHdCQUF3QjtFQUN4Qix1QkFBdUI7RUFDdkIsa0JBQWtCO0FBMkcxQjtBQTdIQTtFQW9CWSxlQUFlO0VBQ2YsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsa0RBQWtEO0VBQ2xELHFDQUFxQztFQUNyQyxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQiw0QkFBNEI7RUFDNUIseUJBQXlCO0VBQ3pCLHdCQUF3QjtFQUN4Qix1QkFBdUI7RUFDdkIsa0JBQWtCO0FBNkc5QjtBQTlJQTtFQW1DZ0IsNEJBQTRCO0VBQzVCLGdCQUFnQjtBQStHaEM7QUFuSkE7RUF3Q1ksNkJBQTZCO0VBQzdCLCtDQUErQztBQStHM0Q7QUF4SkE7RUE2Q1EsVUFBVTtFQUNWLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLDRCQUE0QjtFQUM1Qix3QkFBd0I7RUFDeEIsMkJBQTJCO0VBQzNCLDZCQUE2QjtFQUM3Qiw0QkFBNEI7QUErR3BDO0FBcEtBO0VBd0RRLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLFVBQVU7RUFDVixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQWdIeEI7QUFqTEE7RUFvRVEsc0JBQXNCO0VBQ3RCLDZCQUE2QjtBQWlIckM7QUF0TEE7RUF3RVEsd0JBQXdCO0FBa0hoQztBQTFMQTtFQTJFUSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixRQUFRO0FBbUhoQjtBQWpNQTtFQWlGUSxlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtBQW9IeEI7QUF2TUE7RUFzRlEseUJBQXlCO0VBQ3pCLGtCQUFrQjtBQXFIMUI7QUE1TUE7RUEwRlEsY0FBYztFQUNkLFlBQVk7QUFzSHBCO0FBOUdBO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7QUFpSHBCO0FBOUdBO0VBQ0ksZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixzQkFBc0I7QUFpSDFCO0FBOUdBO0VBQ0kscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsVUFBVTtFQUNWLGVBQWU7RUFDZiwwQkFBMEI7RUFDMUIsY0FBYztFQUNkLGdCQUFnQjtBQWlIcEI7QUE5R0E7RUFDSSxlQUFlO0VBQ2YsV0FBVztBQWlIZjtBQTVHQTtFQUNJLG1DQUE2RTtBQStHakY7QUE1R0E7RUFDSSxtaERBQW1oRDtBQStHdmhEO0FBNUdBO0VBQ0ksa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixVQUFVO0VBQ1YsU0FBUztFQUNULFFBQVE7RUFDUixVQUFVO0VBQ1YsdUJBQXVCO0FBK0czQjtBQXRIQTtFQVNRLGlCQUFpQjtBQWlIekI7QUExSEE7RUFhUSxhQUFhO0FBaUhyQjtBQTlIQTtFQWlCUSxXQUFXO0VBQ1gsZUFBZTtBQWlIdkI7QUFuSUE7RUFzQlEsYUFBYTtBQWlIckI7QUF2SUE7RUEwQlEsWUFBWTtFQUNaLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGVBQWU7QUFpSHZCO0FBL0lBO0VBZ0NZLGlDQUFpQztFQUNqQywwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsZUFBZTtBQW1IM0I7QUE5R0E7RUFDSSxZQUFZO0VBQ1osMENBQTBDO0VBQzFDLDBCQUEwQjtBQWlIOUI7QUE5R0E7RUFDSSxZQUFZO0VBQ1osYUFBYTtFQUNiLDBCQUEwQjtFQUMxQixtQkFBbUI7QUFpSHZCO0FBOUdBO0VBQ0ksY0FBYztFQUNkLGFBQWE7RUFDYixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQWlIdkI7QUEvR0E7RUFDSSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0VBQ1osV0FBVztFQUNYLFVBQVU7QUFrSGQ7QUF4SEE7RUFRUSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZUFBZTtFQUNmLHNDQUFzQztFQUN0QyxXQUFXO0VBQ1gsMkJBQTJCO0FBb0huQztBQXpJQTtFQXVCWSxxQkQvWE07RUNnWU4seUNBQTRDO0VBQzVDLGNEallNO0FDdWZsQjtBQWpIRTtFQUNFLGlDQUE4QjtFQUM5QixlQUFlO0VBQ2YsUUFBUTtFQUNSLFlBQVk7RUFDWixTQUFTO0VBQ1QsWUFBWTtFQUNaLFdBQVc7QUFvSGY7QUEzSEU7RUFTSSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFFBQVE7RUFDUixTQUFTO0FBc0hmO0FBbEhBOzs7O0NBd0hDO0FBbEhEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FrVUM7QUFsSEQ7RUFDSSxlQUFlO0VBQ2YsUUFBUTtFQUNSLFNBQVM7RUFDVCxXQUFXO0FBb0hmO0FBakhFO0VBQ0UsaUNBQWlDO0VBQ2pDLGVBQWU7RUFDZixRQUFRO0VBQ1IsWUFBWTtFQUNaLFNBQVM7RUFDVCxVQUFVO0VBQ1YsV0FBVztBQW9IZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY291cnNlLW1vZHVsZS9maWxlLW1hbmFnZXIvZHJpdmUtaG9tZS9kcml2ZS1ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHB1bGwtTDogbGVmdDtcbiRwdWxsLVI6IHJpZ2h0O1xuJHB1bGwtbm9uZTogbm9uZTtcbiRmdWxsLXdpZHRoOiAxMDAlO1xuJGJvcmRlci1ib3g6IGJvcmRlci1ib3g7XG4kYm9yZGVyLWNvbG9yOiAjZGVlYWVlO1xuJGJnLXdoaXRlOiAjZmZmO1xuJGVycm9yLWNvbG9yOiAjZmYwMDAwO1xuJGNvbW1vbi1ibHVlOiAjMDA4NGY2O1xuJHByaW1hcnktY29sb3I6ICMzMzM7XG4kYm9yZGVyLWNvbW1vbjojZWFlYWViO1xuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09aGVhZGVyIGNvbG9ycz09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuJGhlYWRlci1iZzojMDA2MEEzO1xuJGhlYWRlci1ib3JkZXI6I2VhZWFlYjtcbiRsZWZ0TWVudUJnOiNmYWZhZmE7XG4kbGVmdE1lbnVIb3ZlckJnOiMwMDg0ZjY7XG4kbGVmdE1lbnVUZXh0SG92ZXJDb2xvcjojZmZmO1xuJHJlZEJ0bjojZjQ0MzM2O1xuJGJvcmRlcmNjYzojY2NjO1xuJGxpZ2h0Qmx1ZTojZWZmN2ZmO1xuJHRhYmxlSGVhZGluZ0JnQ29sb3I6ICMwMDRhN2U7XG4udGFibGUtZm9ybWF0LWZpcnN0IHtcbiAgICAudGFibGUtcmVzcG9uc2l2ZSB7XG4gICAgICAgIHRhYmxlIHtcbiAgICAgICAgICAgIHRoLFxuICAgICAgICAgICAgdGQge1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoIHtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0Ym9keSB7XG4gICAgICAgICAgICAgICAgdHIge1xuICAgICAgICAgICAgICAgICAgICB0ZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuZmllbGQtY2hlY2tib3gtd3JhcHBlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBpbml0aWFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZm9ybS1jaGVja2JveCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mb3JtLWNoZWNrYm94K2xhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogN3B4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmFmdGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLmZhLXRyYXNoLW8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkcmVkQnRuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnRhYmxlLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgLmhlYWRpbmctY29udGFpbmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICNlMGVhZWM7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgICAuaGVhZGluZy1pdGVtIHtcbiAgICAgICAgd2lkdGg6IDEwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgIH1cbiAgICAudmFsdWUtb3V0ZXItY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgbWluLWhlaWdodDogNTN2aDtcbiAgICAgIG1heC1oZWlnaHQ6IDU0dmg7XG4gICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgIC52YWx1ZS1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgICAgICBib3JkZXItdG9wOiBub25lO1xuICAgICAgICAudmFsdWUtaXRlbSB7XG4gICAgICAgICAgd2lkdGg6IDEwJTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0iLCJAaW1wb3J0IFwiLi9zcmMvYXNzZXRzL2Nzcy9jb21tb24vdmFyaWFibGVzLnNjc3NcIjtcblxuLmZpbGUtbWFuYWdlci1oZWFkZXIge1xuICAgIHBhZGRpbmc6IDEwcHggMzBweDtcbiAgICBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICB9XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuQ0VOVEVSIENPTlRFTlRcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4uY2VudGVyLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNWY3O1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblRPUCBCQVJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4udG9wLW5hdiB7XG4gICAgcGFkZGluZzogMTBweCAxNXB4IDEwcHggMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNWY3O1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGgxe1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxufVxuXG4ucGF0aEFuY2hvcjpob3ZlcntcbiAgICBjdXJzb3I6cG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xufVxuXG4uc2VhcmNoIHtcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgICAtby1hcHBlYXJhbmNlOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sO3V0Zjg7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlhWE52TFRnNE5Ua3RNU0kvUGdvOElTMHRJRWRsYm1WeVlYUnZjam9nUVdSdlltVWdTV3hzZFhOMGNtRjBiM0lnTVRZdU1DNHdMQ0JUVmtjZ1JYaHdiM0owSUZCc2RXY3RTVzRnTGlCVFZrY2dWbVZ5YzJsdmJqb2dOaTR3TUNCQ2RXbHNaQ0F3S1NBZ0xTMCtDandoUkU5RFZGbFFSU0J6ZG1jZ1VGVkNURWxESUNJdEx5OVhNME12TDBSVVJDQlRWa2NnTVM0eEx5OUZUaUlnSW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTDBkeVlYQm9hV056TDFOV1J5OHhMakV2UkZSRUwzTjJaekV4TG1SMFpDSStDanh6ZG1jZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWlCNGJXeHVjenA0YkdsdWF6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNVGs1T1M5NGJHbHVheUlnZG1WeWMybHZiajBpTVM0eElpQnBaRDBpUTJGd1lWOHhJaUI0UFNJd2NIZ2lJSGs5SWpCd2VDSWdkMmxrZEdnOUlqRTJjSGdpSUdobGFXZG9kRDBpTVRad2VDSWdkbWxsZDBKdmVEMGlNQ0F3SURZeU5pNDFNaUEyTWpZdU5USWlJSE4wZVd4bFBTSmxibUZpYkdVdFltRmphMmR5YjNWdVpEcHVaWGNnTUNBd0lEWXlOaTQxTWlBMk1qWXVOVEk3SWlCNGJXdzZjM0JoWTJVOUluQnlaWE5sY25abElqNEtQR2MrQ2drOGNHRjBhQ0JrUFNKTk5qRXhMalV6TVN3MU9ERXVORGswVERRM01DNDVOelFzTkRRd0xqa3pOMk0wTVM0MU56TXRORFl1T1RBeUxEWTNMall4TkMweE1EY3VPRFVzTmpjdU5qRTBMVEUzTlM0eU9USkROVE00TGpVMk5pd3hNVGt1TVRVMUxEUXhPUzR6T0Rrc01Dd3lOekl1T0RrNUxEQWdJQ0JETVRJMkxqUXpNU3d3TERjdU1qVTBMREV4T1M0eE5UVXNOeTR5TlRRc01qWTFMalkwTldNd0xERTBOaTQwTkRjc01URTVMakUzTnl3eU5qVXVOakF5TERJMk5TNDJORFVzTWpZMUxqWXdNbU0yTUM0d05ESXNNQ3d4TVRRdU9ERTVMVEl3TGpjMU5Td3hOVGt1TXpjdE5UUXVORE15SUNBZ2JERTBNUzQ1TXpnc01UUXhMams0WXpVdU1UYzRMRFV1TVRVMkxERXhMamt3T0N3M0xqY3lOQ3d4T0M0Mk5qRXNOeTQzTWpSek1UTXVOVEEyTFRJdU5UWTNMREU0TGpZMk1pMDNMamN5TkNBZ0lFTTJNakV1T0RRekxEWXdPQzQxTURVc05qSXhMamcwTXl3MU9URXVPREEzTERZeE1TNDFNekVzTlRneExqUTVOSG9nVFRZd0xqQXlOU3d5TmpVdU5qUTFZekF0TVRFM0xqTTJOQ3c1TlM0MU1TMHlNVEl1T0RrMkxESXhNaTQ0T1RZdE1qRXlMamc1TmlBZ0lHTXhNVGN1TkRBNExEQXNNakV5TGpnNU5pdzVOUzQxTURrc01qRXlMamc1Tml3eU1USXVPRGsyY3kwNU5TNDBPRGdzTWpFeUxqZ3pNaTB5TVRJdU9EazJMREl4TWk0NE16SkRNVFUxTGpVek5TdzBOemd1TkRjM0xEWXdMakF5TlN3ek9ETXVNRE14TERZd0xqQXlOU3d5TmpVdU5qUTFlaUlnWm1sc2JEMGlJMkl6WWpSaVlTSXZQZ284TDJjK0NqeG5QZ284TDJjK0NqeG5QZ284TDJjK0NqeG5QZ284TDJjK0NqeG5QZ284TDJjK0NqeG5QZ284TDJjK0NqeG5QZ284TDJjK0NqeG5QZ284TDJjK0NqeG5QZ284TDJjK0NqeG5QZ284TDJjK0NqeG5QZ284TDJjK0NqeG5QZ284TDJjK0NqeG5QZ284TDJjK0NqeG5QZ284TDJjK0NqeG5QZ284TDJjK0NqeG5QZ284TDJjK0Nqd3ZjM1puUGdvPScpO1xuICAgIGhlaWdodDogNDVweDtcbiAgICBwYWRkaW5nOiA4cHggMTVweCA4cHggMzhweDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogMTJweDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDE1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuXG4uc2VhcmNoOmZvY3VzIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDE4cHg7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiAtNTBweDtcbn1cblxuLnNlYXJjaC0td2lkdGgge1xuICAgIHdpZHRoOiAyNSU7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM3Nzc7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4udXNlci1ib3gge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAyMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubW9yZV9faW5mbyB7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBjb2xvcjogIzc3NztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5ncmlkX192aWV3IHtcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDI3cHg7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGNvbG9yOiAjNzc3O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmxpc3RfX3ZpZXcge1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMjdweDtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgY29sb3I6ICM3Nzc7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbkZJTEVcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4ucm93X190aXRsZSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4ucm93X190aXRsZS1ib3gge1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5yb3ctLW5vLXJpZ2h0IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgICBtYXJnaW4tbGVmdDogLTUwcHg7XG4gICAgJi5icmVhZCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtNTBweDtcbiAgICB9XG59XG5cbi5maWxlcy1jb250IHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBwYWRkaW5nOiAwcHggMHB4IDAgNTBweDtcbn1cblxuLmZpbGVfX2RldGFpbHMge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBjb2xvcjogIzgwODdhMjtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIHBhZGRpbmc6IDBweCA1cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgd2lkdGg6IDE1JTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgJi5maWxlX19kYXRlIHtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBjb2xvcjogIzgwODdhMjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgcGFkZGluZzogMHB4IDVweDtcbiAgICAgICAgd2lkdGg6IDE1JTtcbiAgICB9XG4gICAgJi5maWxlX19zaXplIHtcbiAgICAgICAgd2lkdGg6IDEwJTtcbiAgICB9XG4gICAgJi5maWxlX19oZWFkZXJfX25hbWUge1xuICAgICAgICB3aWR0aDogMjAlO1xuICAgIH1cbiAgICAmLmZpbGVfX293bmVyIHtcbiAgICAgICAgd2lkdGg6IDE1JTtcbiAgICB9XG4gICAgJi5maWxlX19EYXRhe1xuICAgICAgICB3aWR0aDoxMCU7XG4gICAgfVxufVxuXG4uZ3JpZF9fY29udGFpbmVyIHtcbiAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAgIC5maWxlIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDVweCA1cHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wNyk7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICAgICAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgICAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgICAgICAmLnRhYmxlX19oZWFkZXIge1xuICAgICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDBweCByZ2JhKDMwLCAzNSwgNDAsIDAuMzYpO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA3KTtcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgICAgICAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgICAgICAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDBweCk7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC00cHgpO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDdweCA4cHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmZpbGVfX2ltZyB7XG4gICAgICAgIHdpZHRoOiAxMCU7XG4gICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbiAgICB9XG4gICAgLmZpbGVfX3RpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBjb2xvcjogIzI1MmEzYjtcbiAgICAgICAgd2lkdGg6IDIwJTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIHBhZGRpbmc6IDBweCA3cHg7XG4gICAgfVxuICAgICNub0ZGc3tcbiAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgICNub0ZGczo6YmVmb3Jle1xuICAgICAgICBjb250ZW50OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5maWxlX190aXRsZTpiZWZvcmUge1xuICAgICAgICB3aWR0aDogMTZweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAxNHB4O1xuICAgICAgICB0b3A6IDlweDtcbiAgICB9XG4gICAgLmZpbGVfX2RhdGUge1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIGNvbG9yOiAjODA4N2EyO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cbiAgICAuZmlsZV9faW5mbyB7XG4gICAgICAgIHBhZGRpbmc6IDhweCA1cHggNXB4IDM1cHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG4gICAgLnByZXZpZXdfX3BhbmUge1xuICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgaGVpZ2h0OiA3MHZoO1xuICAgIH1cbiAgICAudHJlZV9fdmlldyB7XG4gICAgICAgIC8vIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICAvLyBoZWlnaHQ6IDg4dmg7XG4gICAgfVxufVxuXG46Om5nLWRlZXAgLnRyZWVfX3ZpZXdfbGlzdCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA4OHZoO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbjo6bmctZGVlcCAucHJpbWVfX2J0biB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHBhZGRpbmc6IDdweCA1cHg7XG4gICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC51aS10cmVlIC51aS10cmVlbm9kZS1sYWJlbCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmc6IDAgLjI1ZW07XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgY29sb3I6ICM4OTg5OGM7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuOjpuZy1kZWVwIC51aS10cmVlIC51aS10cmVlbm9kZS1pY29uIHtcbiAgICBmb250LXNpemU6IDIwcHg7IC8vY29sb3I6ICMwZjhjZjY7XG4gICAgY29sb3I6IHRlYWw7XG59XG5cblxuXG4uZm9sZGVyLWZpbGUgLmZpbGVfX2ltZyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2ZpbGVfbWFuYWdlci9mb2xkZXIuanBnJyk7XG59XG5cbi5mb2xkZXIgLmZpbGVfX3RpdGxlOmJlZm9yZSB7XG4gICAgY29udGVudDogdXJsKCdkYXRhOmltYWdlL3N2Zyt4bWw7dXRmODtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaWFYTnZMVGc0TlRrdE1TSS9QZ284SVMwdElFZGxibVZ5WVhSdmNqb2dRV1J2WW1VZ1NXeHNkWE4wY21GMGIzSWdNVFl1TUM0d0xDQlRWa2NnUlhod2IzSjBJRkJzZFdjdFNXNGdMaUJUVmtjZ1ZtVnljMmx2YmpvZ05pNHdNQ0JDZFdsc1pDQXdLU0FnTFMwK0Nqd2hSRTlEVkZsUVJTQnpkbWNnVUZWQ1RFbERJQ0l0THk5WE0wTXZMMFJVUkNCVFZrY2dNUzR4THk5RlRpSWdJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5MMGR5WVhCb2FXTnpMMU5XUnk4eExqRXZSRlJFTDNOMlp6RXhMbVIwWkNJK0NqeHpkbWNnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JaUI0Yld4dWN6cDRiR2x1YXowaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1UazVPUzk0YkdsdWF5SWdkbVZ5YzJsdmJqMGlNUzR4SWlCcFpEMGlRMkZ3WVY4eElpQjRQU0l3Y0hnaUlIazlJakJ3ZUNJZ2QybGtkR2c5SWpFMmNIZ2lJR2hsYVdkb2REMGlNVFp3ZUNJZ2RtbGxkMEp2ZUQwaU1DQXdJRFEzTlM0d09ESWdORGMxTGpBNE1pSWdjM1I1YkdVOUltVnVZV0pzWlMxaVlXTnJaM0p2ZFc1a09tNWxkeUF3SURBZ05EYzFMakE0TWlBME56VXVNRGd5T3lJZ2VHMXNPbk53WVdObFBTSndjbVZ6WlhKMlpTSStDanhuUGdvSlBIQmhkR2dnWkQwaVRUUTFOaTR5TXprc01USTRMalEzTldNdE1USXVOVFl0TVRJdU5UWXlMVEkzTGpVNU55MHhPQzQ0TkRJdE5EVXVNVEV0TVRndU9EUXlhQzB4T1RFdU9EWjJMVGt1TVRNMll6QXRNVGN1TlRFeExUWXVNamd6TFRNeUxqVTBPQzB4T0M0NE5ETXRORFV1TVRBM0lDQWdZeTB4TWk0MU5qSXRNVEl1TlRZeUxUSTNMall0TVRndU9EUTJMVFExTGpFeE1TMHhPQzQ0TkRaSU5qTXVPVFV6WXkweE55NDFNVFVzTUMwek1pNDFOVEVzTmk0eU9ETXRORFV1TVRFeExERTRMamcwTmtNMkxqSTRMRFkzTGprME9Td3dMRGd5TGprNE5pd3dMREV3TUM0ME9UZDJNamMwTGpBNE9DQWdJR013TERFM0xqVXdPQ3cyTGpJNExETXlMalUwTlN3eE9DNDRORElzTkRVdU1UQTBZekV5TGpVMk1pd3hNaTQxTmpVc01qY3VOaXd4T0M0NE5Ea3NORFV1TVRFeExERTRMamcwT1dnek5EY3VNVGMxWXpFM0xqVXhOQ3d3TERNeUxqVTFNUzAyTGpJNE15dzBOUzR4TVMweE9DNDRORGtnSUNCak1USXVOVFkyTFRFeUxqVTJMREU0TGpnME15MHlOeTQxT1Rjc01UZ3VPRFF6TFRRMUxqRXdORll4TnpNdU5UbERORGMxTGpBNE1pd3hOVFl1TURjNExEUTJPQzQ0TURVc01UUXhMakEwTWl3ME5UWXVNak01TERFeU9DNDBOelY2SWlCbWFXeHNQU0lqWm1aallUUTFJaTgrQ2p3dlp6NEtQR2MrQ2p3dlp6NEtQR2MrQ2p3dlp6NEtQR2MrQ2p3dlp6NEtQR2MrQ2p3dlp6NEtQR2MrQ2p3dlp6NEtQR2MrQ2p3dlp6NEtQR2MrQ2p3dlp6NEtQR2MrQ2p3dlp6NEtQR2MrQ2p3dlp6NEtQR2MrQ2p3dlp6NEtQR2MrQ2p3dlp6NEtQR2MrQ2p3dlp6NEtQR2MrQ2p3dlp6NEtQR2MrQ2p3dlp6NEtQR2MrQ2p3dlp6NEtQQzl6ZG1jK0NnPT0nKTtcbn1cblxuLmRyb3AtYXJlYSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIGxlZnQ6IDUuMyU7XG4gICAgYm90dG9tOiAwO1xuICAgIHRvcDogMjIlO1xuICAgIHdpZHRoOiA5NCU7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgOjpuZy1kZWVwIC51aS10cmVlIC51aS10cmVlbm9kZSB7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggNXB4O1xuICAgIH1cblxuICAgIDo6bmctZGVlcCAudWktYnV0dG9uIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICA6Om5nLWRlZXAgLnVpLWZpbGV1cGxvYWQge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cblxuICAgIDo6bmctZGVlcCAudWktZmlsZXVwbG9hZC1idXR0b25iYXIge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIDo6bmctZGVlcCAudWktZmlsZXVwbG9hZC1jb250ZW50IHtcbiAgICAgICAgaGVpZ2h0OiA3MXZoO1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICBjb250ZW50OiBcIkRyYWcgJiBEcm9wIEZpbGVzIEhlcmVcIjtcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDkpO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAzNSU7XG4gICAgICAgICAgICBsZWZ0OiAyNSU7XG4gICAgICAgICAgICBmb250LXNpemU6IDM2cHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5vdmVyIHtcbiAgICB6LWluZGV4OiAxMDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNDcsIDE0NywgMTQ3LCAwLjUpO1xuICAgIGJvcmRlcjogM3B4IGRhc2hlZCAjMTI4Y2Y3O1xufVxuXG4uZHJvcC16b25lIHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBib3JkZXI6IDJweCBkb3R0ZWQgIzA3ODJkMDtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xufVxuXG4uY29udGVudCB7XG4gICAgY29sb3I6ICMwNzgyZDA7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ucXVlc3Rpb25JbmZvIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDU1cHg7XG4gICAgYm90dG9tOiAzN3B4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICB3aWR0aDogMjBweDtcbiAgICB6LWluZGV4OiAyO1xuICAgIC5xSW5mb0ljb24ge1xuICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggMHB4ICNjY2MgaW5zZXQ7XG4gICAgICAgIGNvbG9yOiAjODg4O1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC42cyBsaW5lYXI7XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkaGVhZGVyLWJnO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxcHggMHB4ICRoZWFkZXItYmcgaW5zZXQ7XG4gICAgICAgICAgICBjb2xvcjogJGhlYWRlci1iZztcbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5ibGFjay1iZ3tcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDEwLDEwLDEwLDAuMyk7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBsZWZ0OiAwcHg7XG4gICAgei1pbmRleDogMTAxO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHNwYW57XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgdG9wOiA0MyU7XG4gICAgICBsZWZ0OiA0NiU7XG4gICAgfVxuICB9XG5cbi8qXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBSRWplY3RlZCBHcmlkIFZpZXcgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiovXG5cbi8qXG4ucm93X190aXRsZSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4ucm93X190aXRsZS1ib3gge1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG59XG5cbi5yb3ctLW5vLXJpZ2h0IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgICBtYXJnaW4tbGVmdDogLTUwcHg7XG59XG5cbi5maWxlcy1jb250IHtcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBwYWRkaW5nOiAwIDUwcHg7XG59XG5cbi5maWxlIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgd2lkdGg6IGNhbGMoMTUlIC0gMzBweCk7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJveC1zaGFkb3c6IDBweCA5cHggMTBweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLmZpbGU6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC00cHgpO1xuICAgIGJveC1zaGFkb3c6IDBweCAxN3B4IDE5cHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbi5maWxlX19pbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMDtcbiAgICAvL3BhZGRpbmctYm90dG9tOiA1MCU7XG4gICAgcGFkZGluZy1ib3R0b206IDM1JTtcbiAgICBtYXJnaW4tdG9wOiA1JTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbn1cblxuXG4uZmlsZV9fdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICMyNTJhM2I7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xufVxuXG4uZmlsZV9fdGl0bGU6YmVmb3JlIHtcbiAgICB3aWR0aDogMTZweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMTRweDtcbiAgICB0b3A6IDIycHg7XG59XG5cblxuLmZpbGVfX2RhdGUge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBjb2xvcjogIzgwODdhMjtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uZmlsZV9faW5mbyB7XG4gICAgcGFkZGluZzogMjBweCAyMHB4IDIwcHggNDVweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTQ0MHB4KSB7XG4gICAgLmJ0bi0tc21hbGwge1xuICAgICAgICBwYWRkaW5nOiAwIDVweDtcbiAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgfVxuICAgIC5zdGFyYWdlLXBybyB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEwMjRweCkge31cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjdweCkge1xuICAgIC5jZW50ZXItY29udGVudCB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICB9XG4gICAgLnNlYXJjaC0td2lkdGgge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgfVxuICAgIC50b3AtbmF2IHtcbiAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICB9XG4gICAgLmZpbGUge1xuICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAlIC0gMTVweCk7XG4gICAgfVxuICAgIC5maWxlX19pbmZvIHtcbiAgICAgICAgcGFkZGluZzogMTJweCAxMnB4IDEycHggMzVweDtcbiAgICB9XG4gICAgLmZpbGVfX2RhdGUge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxuICAgIC5maWxlX190aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgfVxuICAgIC5maWxlX190aXRsZTpiZWZvcmUge1xuICAgICAgICBsZWZ0OiAxMHB4O1xuICAgICAgICB0b3A6IDE0cHg7XG4gICAgfVxuICAgIC5yb3ctLW5vLXJpZ2h0IHtcbiAgICAgICAgbWFyZ2luOiAwIDBweCAwIC0xNXB4O1xuICAgIH1cbiAgICAuZmlsZXMtY29udCB7XG4gICAgICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgICB9XG4gICAgLnJvd19fdGl0bGUtYm94IHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIH1cbiAgICAucm93X190aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjQwcHgpIHtcbiAgICAuZmlsZSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICB3aWR0aDogY2FsYygzMy4zJSAtIDE1cHgpO1xuICAgIH1cbiAgICAuZmlsZV9fZGF0ZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICB9XG4gICAgLmZpbGVfX3RpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICB9XG4gICAgLnJvd19fdGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgfVxuICAgIC5maWxlLS1sYXN0IHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgLnJvd19fdGl0bGUtYm94IHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo0ODBweCkge1xuICAgIC5maWxlIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgIHdpZHRoOiBjYWxjKDUwJSAtIDE1cHgpO1xuICAgIH1cbiAgICAuZmlsZS0tbGFzdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDozNjBweCkge1xuICAgIC5maWxlIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICAucm93LS1uby1yaWdodCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gICAgLnJvd19fdGl0bGUtYm94IHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIH1cbiAgICAucm93X190aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG59XG5cblxuKi9cbi52aWRlb3BsYXllcntcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAxNSU7XG4gICAgbGVmdDogMzAlO1xuICAgIHotaW5kZXg6IDEwO1xuICB9XG5cbiAgLmJsYWNrLWJne1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMTIsIDExLCAxMSwgMC4zKTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwcHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGxlZnQ6IDBweDtcbiAgICB6LWluZGV4OiA2O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9Il19 */";
      /***/
    },

    /***/
    "./src/app/components/course-module/file-manager/drive-home/drive-home.component.ts":
    /*!******************************************************************************************!*\
      !*** ./src/app/components/course-module/file-manager/drive-home/drive-home.component.ts ***!
      \******************************************************************************************/

    /*! exports provided: DriveHomeComponent */

    /***/
    function srcAppComponentsCourseModuleFileManagerDriveHomeDriveHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DriveHomeComponent", function () {
        return DriveHomeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var primeng_tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! primeng/tree */
      "./node_modules/primeng/tree.js");
      /* harmony import */


      var primeng_tree__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_tree__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../services/authenticator.service */
      "./src/app/services/authenticator.service.ts");
      /* harmony import */


      var _services_message_show_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../services/message-show.service */
      "./src/app/services/message-show.service.ts");
      /* harmony import */


      var _file_manager_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../file-manager.service */
      "./src/app/components/course-module/file-manager/file-manager.service.ts");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _services_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../services/http.service */
      "./src/app/services/http.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _services_products_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../services/products.service */
      "./src/app/services/products.service.ts");

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

      var DriveHomeComponent =
      /** @class */
      function () {
        var DriveHomeComponent = /*#__PURE__*/function () {
          function DriveHomeComponent(zone, fileService, auth, msgService, sanitizer, http, activatedRoute, productService) {
            _classCallCheck(this, DriveHomeComponent);

            this.zone = zone;
            this.fileService = fileService;
            this.auth = auth;
            this.msgService = msgService;
            this.sanitizer = sanitizer;
            this.http = http;
            this.activatedRoute = activatedRoute;
            this.productService = productService;
            this.jsonFlag = {
              downloading: false,
              uploading: false
            };
            this.treeNodeData = [{
              label: "My Drive",
              data: null,
              expandedIcon: "fa fa-folder-open",
              collapsedIcon: "fa fa-folder",
              type: "folder",
              children: []
            }];
            this.createFetchFolder = {
              folderName: "",
              institute_id: this.fileService.institute_id,
              keyName: ""
            };
            this.customstyle = "drop-area";
            this.selectedFiles = [];
            this.getCategoryData = [];
            this.addNewRow = [];
            this.pathArray = [];
            this.children = [];
            this.fileDisplayArr = [];
            this.folderDisplayArr = [];
            this.folderFileArr = [];
            this.isFolderEmpty = false;
            this.collapseFlag = false;
            this.getPopupOpen = false;
            this.createFolderControl = false;
            this.dragoverflag = false;
            this.addCategoryPopup = false;
            this.isGridView = true;
            this.isFirstTimeLoad = false;
            this.manualUpload = false;
            this.msg = '';
            this.getPath = "";
            this.headertext = '';
            this.videoplayer = false;
            this.editYoutubeFile = {
              editView: false
            };
            this.fileSharedArray = [];
            this.deletePopup = false;
            this.deleteConfirmation = false;
            this.SelectedFilesArray = [];
            this.vimeo_video_downlodable = false;
            this.vimeoDownloadLinks = [];
            this.selectedDownloadSize = {};
          }

          _createClass(DriveHomeComponent, [{
            key: "ngOnInit",
            value: function ngOnInit(refreshTree) {
              var institute_id = sessionStorage.getItem("institute_id");
              this.editYoutubeFile.editView = false;

              if (refreshTree == true) {
                this.fetchPrefillFolderAndFiles(institute_id + "/", refreshTree);
              } else {
                this.fetchPrefillFolderAndFiles(institute_id + "/");
              }

              this.fetchUsedSpace();
              this.getParams();
            } //Developed by - Nalini 
            // When vimeo file uploaded successfully then video status api is called based on video id and pop up msg is displayed

          }, {
            key: "getParams",
            value: function getParams() {
              var _this = this;

              var url = window.location.href;

              if (url.indexOf("?") > -1) {
                var arr = url.split('?');

                if (url.length > 1 && arr[1] !== '') {
                  window.location.href = url.substring(0, arr[0].length);
                  this.activatedRoute.queryParams.subscribe(function (params) {
                    var videoId = params['videoId'];

                    if (videoId != '' && videoId != null) {
                      $('#thankYou').modal('show');
                      var obj = {
                        "videoID": videoId,
                        "institute_id": sessionStorage.getItem('institute_id'),
                        "video_status": "Queued",
                        "category_id": 305
                      };
                      var _url = "/api/v1/instFileSystem/updateVideoStatus";

                      _this.http.postData(_url, obj).subscribe(function (res) {
                        console.log(res);
                      }, function (err) {});
                    }
                  });
                }
              }
            }
          }, {
            key: "fetchPrefillFolderAndFiles",
            value: function fetchPrefillFolderAndFiles(path, backLoad) {
              var _this2 = this;

              var institute_id = sessionStorage.getItem("institute_id");
              var obj = {
                keyName: path,
                institute_id: institute_id
              };
              this.SelectedFilesArray = [];
              this.auth.showLoader();
              this.fileService.getAllFolderFiles(obj).subscribe(function (res) {
                _this2.auth.hideLoader();

                _this2.children = res;
                console.log("children", _this2.children);
                _this2.getPath = obj.keyName;
                _this2.pathArray = _this2.getPath.split('/');

                _this2.pathArray.pop();

                _this2.vimeo_video_downlodable = res.vimeo_video_downlodable; // for End Empty Character

                if (backLoad) {
                  _this2.generateTreeNodes(res, obj.keyName, true);
                } else {
                  _this2.generateTreeNodes(res, obj.keyName);
                }
              });
            }
          }, {
            key: "fetchUsedSpace",
            value: function fetchUsedSpace() {
              var _this3 = this;

              this.fileService.getUsedSpace().subscribe(function (res) {
                _this3.usedSpaceDetails = res;
              });
            }
          }, {
            key: "getFilesAndFolder",
            value: function getFilesAndFolder(event) {
              if (event >= 200 && event < 300) {
                this.fetchPrefillFolderAndFiles(this.filePathPopup, true);
              }
            }
          }, {
            key: "closeSharePopup",
            value: function closeSharePopup(event) {
              console.log(event);
              this.getPopupOpen = event;
            }
          }, {
            key: "collapseString",
            value: function collapseString(index) {
              // let pathArray = this.getPath.split('/');
              this.pathArray = this.pathArray.filter(function (ele, i) {
                if (index >= i) {
                  return true;
                } else {
                  return false;
                }
              }); // console.log(this.pathArray);

              var basePath = this.pathArray.join('/'); // console.log(basePath);

              if (this.pathArray.length == 1) {
                basePath = basePath + '/';
                this.fetchPrefillFolderAndFiles(basePath, true);
              } else {
                this.collapseFlag = true;
                this.fetchPrefillFolderAndFiles(basePath + '/');
              }
            }
          }, {
            key: "getFilesDeleted",
            value: function getFilesDeleted(data) {
              var _this4 = this;

              var path = this.pathArray.join('/') + '/' + data.label + "/";
              var getDeletedFiles = [{
                file_id: "0",
                keyName: path
              }];

              if (confirm('Are you sure, you want to delete the file?')) {
                this.fileService.deleteFiles(getDeletedFiles).subscribe(function (data) {
                  _this4.msgService.showErrorMessage('success', '', "Folder Deleted Successfully");

                  var path = getDeletedFiles[0].keyName.split('/');
                  path.pop();
                  path.pop();
                  var newPath = path.join('/');

                  if (newPath == _this4.fileService.institute_id + '/') {
                    _this4.fetchPrefillFolderAndFiles(newPath + "/", true);
                  } else {
                    _this4.fetchPrefillFolderAndFiles(newPath + '/', true);
                  }
                }, function (error) {
                  _this4.msgService.showErrorMessage('success', '', error.error.message);
                });
              }
            }
          }, {
            key: "fileId",
            value: function fileId(event) {
              this.fileIdGet = event;
            }
          }, {
            key: "fileArr",
            value: function fileArr(event) {
              this.fileName = event;
            }
          }, {
            key: "makeFolderOpen",
            value: function makeFolderOpen() {
              this.createFolderControl = true;
            }
          }, {
            key: "duplicateFolderCheck",
            value: function duplicateFolderCheck(name) {
              for (var i = 0; i < this.folderDisplayArr.length; i++) {
                if (this.folderDisplayArr[i].label == name) {
                  this.msgService.showErrorMessage('error', '', "Folder already exists");
                  return false;
                }
              }

              return true;
            }
          }, {
            key: "createFolder",
            value: function createFolder() {
              var _this5 = this;

              if (this.duplicateFolderCheck(this.createFetchFolder.folderName) == false) {
                return;
              } else if (this.createFetchFolder.folderName == "") {
                this.msgService.showErrorMessage('error', '', "Folder name is manadatory");
                return;
              } else {
                var path = "";
                var institute_id = sessionStorage.getItem("institute_id");
                path = this.pathArray.join('/') + '/';
                this.createFetchFolder.keyName = path;
                this.auth.showLoader();
                this.fileService.craeteFolder(this.createFetchFolder).subscribe(function (data) {
                  _this5.auth.hideLoader();

                  _this5.createFolderControl = false;
                  _this5.createFetchFolder.folderName = "";

                  _this5.msgService.showErrorMessage('success', '', "Folder Created successfully");

                  _this5.fetchPrefillFolderAndFiles(_this5.createFetchFolder.keyName, true); // this.ngOnInit(true);

                }, function (error) {
                  _this5.auth.hideLoader();

                  _this5.msgService.showErrorMessage('error', '', error.error.message);
                });
              }
            }
          }, {
            key: "toggleView",
            value: function toggleView() {
              var _this6 = this;

              this.zone.runOutsideAngular(function () {
                if (_this6.dragBox.nativeElement.classList.contains("grid__container")) {
                  _this6.dragBox.nativeElement.classList.remove("grid__container");

                  _this6.dragBox.nativeElement.classList.add("list__container");

                  _this6.isGridView = false;
                } else {
                  _this6.dragBox.nativeElement.classList.add("grid__container");

                  _this6.dragBox.nativeElement.classList.remove("list__container");

                  _this6.isGridView = true;
                }
              });
            }
          }, {
            key: "onNodeExpand",
            value: function onNodeExpand(event) {}
          }, {
            key: "onNodeSelect",
            value: function onNodeSelect(event) {
              this.filePathPopup = event.node.data.keyName;

              if (event.node.type == 'folder') {
                this.selectedFolder = event;
                this.getFilesAndFolder('200');
              }
            }
          }, {
            key: "onNodeCollapse",
            value: function onNodeCollapse(event) {}
          }, {
            key: "onNodeClick",
            value: function onNodeClick(event) {
              console.log(event);
            }
          }, {
            key: "folderSelected",
            value: function folderSelected(folder) {
              this.selectedFolder = folder; // this.getChildFolders(folder);

              if (folder.data.hasOwnProperty('keyName')) {
                this.fetchPrefillFolderAndFiles(folder.data.keyName, true);
              }
            }
          }, {
            key: "generateTreeNodes",
            value: function generateTreeNodes(res, path, backLoad) {
              if (backLoad == true) {
                this.isFirstTimeLoad = false;
              } else {
                this.prevLocalFolder = this.folderDisplayArr;
              }

              this.fileDisplayArr = [];
              this.folderDisplayArr = [];
              /* Local Directory Structure to be created from the incoming response */

              var localFolder = [];
              var childArr = [];
              var folderArr = [];

              if (res.files != null) {
                childArr = this.getChildArray(res.files);
              }

              if (res.folders != null) {
                folderArr = this.getChildFolders(res.folders);
              }

              if (res.files == null && res.folders == null) {
                var temp = [{
                  label: 'empty',
                  data: [],
                  expandedIcon: "",
                  collapsedIcon: "",
                  type: "",
                  children: []
                }];
                this.isFolderEmpty = true;
                this.updateTreeNode(temp);
                return;
              }

              this.isFolderEmpty = false;
              this.fileDisplayArr = childArr;
              this.folderDisplayArr = folderArr;
              localFolder = folderArr.concat(childArr);
              this.folderFileArr = localFolder;

              if (backLoad == true) {
                this.prevLocalFolder = localFolder;
              }
              /* Only When Calling the Home Folder Refresh the TreeNode */


              if (path.split("/")[1] == "") {
                /* If user has requested API for first time then fetch shell of outer folder */
                if (!this.isFirstTimeLoad) {
                  this.treeNodeData = localFolder;
                  this.isFirstTimeLoad = true;
                } else {
                  this.updateTreeNode(localFolder);
                }
              }
              /* Adding Data to Tree Node */
              else {
                  if (this.collapseFlag == true) {
                    this.collapseFlag = false;
                  } else {
                    this.updateTreeNode(localFolder);
                  }
                }
            }
          }, {
            key: "updateTreeNode",
            value: function updateTreeNode(localFolder) {
              var _this7 = this;

              this.treeNodeData.forEach(function (node) {
                if (node.type == "folder") {
                  if (node.label == _this7.selectedFolder.label) {
                    if (node.children.length == 0) {
                      node.children = localFolder;
                    } else {
                      _this7.findNode(node, localFolder);
                    }
                  } else {
                    if (node.children.length != 0) {
                      _this7.findNode(node, localFolder);
                    }
                  }
                }
              });
            }
          }, {
            key: "getCategories",
            value: function getCategories() {
              var _this8 = this;

              this.addCategoryPopup = true;
              this.fileService.getCategories().subscribe(function (data) {
                _this8.getCategoryData = data;
              }, function (error) {});
            }
          }, {
            key: "closeCategoryPopup",
            value: function closeCategoryPopup() {
              this.addCategoryPopup = false;
            }
          }, {
            key: "addNewRowToPopup",
            value: function addNewRowToPopup(a) {
              var arr = [];

              if (this.addNewRow.length > 4) {} else {
                this.addNewRow.push(arr);
              }
            }
          }, {
            key: "findNode",
            value: function findNode(node, localFolder) {
              var _this9 = this;

              this.nodes = node;
              this.localFolder = localFolder;
              node.children.forEach(function (child) {
                if (child.type === "folder") {
                  if (child.label === _this9.selectedFolder.label) {
                    child.children = localFolder;
                  } else {
                    if (child.children != null) {
                      if (child.children.length != 0) {
                        _this9.findNode(child, localFolder);
                      } else {
                        child.children = [];
                      }
                    } else {
                      child.children = [];
                    }
                  }
                }
              });
            }
          }, {
            key: "getChildArray",
            value: function getChildArray(obj) {
              var tempChildArr = [];
              var size = Object.keys(obj).length;

              if (size > 0) {
                for (var key in obj) {
                  /* Structure for child files directly  under a folder */
                  var childFile = {
                    label: this.generateName(key, 'file'),
                    icon: this.generateFileType(key),
                    data: obj[key],
                    type: "file"
                  };
                  tempChildArr.push(childFile);
                }

                return tempChildArr;
              }

              return tempChildArr;
            }
          }, {
            key: "getChildFolders",
            value: function getChildFolders(obj) {
              var tempFolderArr = [];
              var size = Object.keys(obj).length;

              if (size > 0) {
                for (var key in obj) {
                  /* Structure to define a folder */
                  var folderObj = {
                    label: this.generateName(key, 'folder'),
                    data: obj[key],
                    expandedIcon: "fa fa-folder-open",
                    collapsedIcon: "fa fa-folder",
                    type: "folder",
                    children: []
                  };
                  tempFolderArr.push(folderObj);
                }

                return tempFolderArr;
              }

              return tempFolderArr;
            }
          }, {
            key: "generateName",
            value: function generateName(key, type) {
              var tempArr = key.split('/');

              if (tempArr.length >= 1) {
                if (type == "file") {
                  return tempArr[tempArr.length - 1];
                }

                return tempArr[tempArr.length - 2];
              }

              return "";
            }
          }, {
            key: "generateFileType",
            value: function generateFileType(key) {
              var tempArr = key.split('.');

              if (tempArr.length >= 1) {
                var type = tempArr[1];

                if (type == "pdf") {
                  return "fa-file-pdf-o";
                } else if (type == "mp3") {
                  return "fa fa-music";
                } else if (type == "wav") {
                  return "fa fa-music";
                } else if (type == "wmv") {
                  return "fa fa-music";
                } else if (type == "mp4") {
                  return "fa fa-film";
                } else if (type == "flv") {
                  return "fa fa-film";
                } else if (type == "mov") {
                  return "fa fa-film";
                } else if (type == "jpg") {
                  return "fa fa-picture-o";
                } else if (type == "jpeg") {
                  return "fa fa-picture-o";
                } else if (type == "gif") {
                  return "fa fa-picture-o";
                } else if (type == "png") {
                  return "fa fa-picture-o";
                } else if (type == "doc") {
                  return "fa fa-file-word-o";
                } else if (type == "docx") {
                  return "fa fa-file-word-o";
                } else if (type == "xls") {
                  return "fa fa-file-excel-o";
                } else if (type == "xlsx") {
                  return "fa fa-file-excel-o";
                } else if (type == "csv") {
                  return "fa fa-file-excel-o";
                } else if (type == "ppt") {
                  return "fa fa-file-powerpoint-o";
                } else if (type == "pptx") {
                  return "fa fa-file-powerpoint-o";
                } else if (type == "zip") {
                  return "fa fa-file-archive-o";
                } else if (type == "rar") {
                  return "fa fa-file-archive-o";
                } else if (type == "7z") {
                  return "fa fa-file-archive-o";
                }

                return "fa-file-o";
              }

              return "fa-file-o";
            }
          }, {
            key: "navigateTo",
            value: function navigateTo(location) {
              if (location == "") {
                var institute_id = sessionStorage.getItem("institute_id");
                this.fetchPrefillFolderAndFiles(institute_id + "/");
              }
            }
          }, {
            key: "preventAndStop",
            value: function preventAndStop(event) {
              event.stopPropagation();
              event.preventDefault();
            }
          }, {
            key: "onDragOver",
            value: function onDragOver(event) {
              this.dragoverflag = true;
              this.dropZone.nativeElement.classList.add("over");
              this.preventAndStop(event);
            }
          }, {
            key: "onDragLeave",
            value: function onDragLeave(event) {
              if (event.target.classList.contains("ui-fileupload-content")) {
                this.dragoverflag = false;
                this.dropZone.nativeElement.classList.remove("over");
                this.preventAndStop(event);
              }

              this.preventAndStop(event);
            }
          }, {
            key: "onDrop",
            value: function onDrop(event) {
              this.preventAndStop(event);
              this.dropZone.nativeElement.classList.remove("over");
              this.dragoverflag = false;
              alert("files Uploaded");
            }
          }, {
            key: "onDragOverFolder",
            value: function onDragOverFolder(event, folder) {
              console.log(folder);
              this.dragoverflag = true;
              this.dropZone.nativeElement.classList.add("over");
              this.preventAndStop(event);

              if (folder != null) {}
            }
          }, {
            key: "onDragLeaveFolder",
            value: function onDragLeaveFolder(event, folder) {
              this.dragoverflag = true;
              this.dropZone.nativeElement.classList.add("over");
              this.preventAndStop(event);

              if (folder != null) {}
            }
          }, {
            key: "uploadBox",
            value: function uploadBox() {
              this.manualUpload = true;
              this.addCategoryPopup = true;
            }
          }, {
            key: "getPopupValue",
            value: function getPopupValue(event) {
              this.getPopupOpen = true;
            }
          }, {
            key: "close",
            value: function close(event) {
              this.manualUpload = false;
              this.addCategoryPopup = false;
              this.editYoutubeFile = {};
              this.editYoutubeFile.editView = false;
            }
          }, {
            key: "onSelect",
            value: function onSelect(event, uploaders) {
              /* Remove the overlay from layout  */
              this.dropZone.nativeElement.classList.remove("over");
              this.dragoverflag = false;
              this.addCategoryPopup = true;
              this.selectedFiles = event.files;
            }
          }, {
            key: "status",
            value: function status(event) {
              if (event == 200) {
                this.fetchPrefillFolderAndFiles(this.filePath1 + '/', true); // this.generateTreeNodes(event, "");
              } else {}
            }
          }, {
            key: "downloadStatus",
            value: function downloadStatus(event) {
              this.toggleLoader(event);
              this.jsonFlag.downloading = event;
            }
          }, {
            key: "uploadStatus",
            value: function uploadStatus(event) {
              this.toggleLoader(event);
              this.jsonFlag.uploading = event;
            }
          }, {
            key: "toggleLoader",
            value: function toggleLoader(event) {
              if (event) {
                this.auth.showLoader();
              } else {
                this.auth.hideLoader();
              }
            }
          }, {
            key: "treeUpdater",
            value: function treeUpdater(event) {
              var institute_id = this.fileService.institute_id;

              if (event == true) {
                this.fetchPrefillFolderAndFiles(this.getPath, true); // it maintain the state of file  user stay in that state -- laxmi
              }
            }
          }, {
            key: "filePath",
            value: function filePath(event) {
              this.filePath1 = event;
            }
          }, {
            key: "filePathUpload",
            value: function filePathUpload(event) {
              this.filePathPopup = event;
            }
          }, {
            key: "handleOptions",
            value: function handleOptions(options) {
              this.shareOptions = options;
            }
          }, {
            key: "closeFolderControl",
            value: function closeFolderControl() {
              this.createFolderControl = false;
            }
          }, {
            key: "getYoutubeLink",
            value: function getYoutubeLink(file) {
              this.videoplayer = true;
              var video_id = atob(file.res.proc_id);
              this.currentProjectUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + video_id);
            }
          }, {
            key: "closePlayer",
            value: function closePlayer() {
              this.videoplayer = false;
            }
          }, {
            key: "editYoutubeVideo",
            value: function editYoutubeVideo(file) {
              this.manualUpload = true;
              this.addCategoryPopup = true;
              this.editYoutubeFile = file;
              this.editYoutubeFile.editView = true;
            }
          }, {
            key: "ShowDeleteFileButton",
            value: function ShowDeleteFileButton(file) {
              var _this10 = this;

              this.SelectedFilesArray = [];
              this.fileDisplayArr.forEach(function (data) {
                if (data.data.selected) {
                  _this10.SelectedFilesArray.push(data.data);
                }
              });
            }
          }, {
            key: "deleteFile",
            value: function deleteFile() {
              var _this11 = this;

              var fileArray = [];

              if (this.SelectedFilesArray && this.SelectedFilesArray.length) {
                if (this.SelectedFilesArray[0].category_id == 230 || this.SelectedFilesArray[0].category_id == 305) {
                  var key = this.SelectedFilesArray[0].keyName.split('/https');

                  if (key && key.length) {
                    var newPath = key[0].concat('/');
                    this.filePathPopup = newPath;
                  }
                } else {
                  var path = this.SelectedFilesArray[0].keyName.split('/');
                  path.pop();

                  var _newPath = path.join('/');

                  _newPath = _newPath.concat('/');
                  this.filePathPopup = _newPath;
                }

                this.SelectedFilesArray.forEach(function (element) {
                  fileArray.push(element.file_id);
                });
              } else {
                this.msgService.showErrorMessage('error', '', 'Please select File');
                return;
              }

              var obj = {
                "source": 1,
                "file_id_list": fileArray,
                "institute_id": sessionStorage.getItem('institute_id')
              };

              if (this.deleteConfirmation) {
                obj.delete_source = 3;
              }

              this.auth.showLoader();
              this.http.postData('/api/v1/instFileSystem/files/delete', obj).subscribe(function (res) {
                _this11.auth.hideLoader();

                if (_this11.deleteConfirmation) {
                  _this11.msgService.showErrorMessage('success', '', 'Deleted Successfully');

                  _this11.closeDeletePopup();

                  _this11.getFilesAndFolder('200');
                } else {
                  _this11.fileSharedArray = [];
                  _this11.deletePopup = true;
                }
              }, function (err) {
                _this11.auth.hideLoader();

                _this11.fileSharedArray = err.error.error;

                if (!_this11.deleteConfirmation) {
                  _this11.deletePopup = true;
                }
              });
            }
          }, {
            key: "closeDeletePopup",
            value: function closeDeletePopup() {
              this.deletePopup = false;
              this.fileDisplayArr.forEach(function (data) {
                data.data.selected = false;
              });
              this.getFilesAndFolder('200');
              this.SelectedFilesArray = [];
              this.deleteConfirmation = false;
            }
          }, {
            key: "confirmDelete",
            value: function confirmDelete() {
              this.deleteConfirmation = true;
              this.deleteFile();
            }
          }, {
            key: "playVimeoVideo",
            value: function playVimeoVideo(obj) {
              this.videoplayer = true;
              this.currentProjectUrl = this.sanitizer.bypassSecurityTrustResourceUrl(obj.res.video_url);
            } // Developed by Nalini
            // To download vimeo file

          }, {
            key: "getVimeoDownloadData",
            value: function getVimeoDownloadData(obj) {
              var _this12 = this;

              this.auth.showLoader();
              this.productService.getMethod('vimeo/download-links/' + obj.res.video_id, null).subscribe(function (res) {
                _this12.auth.hideLoader();

                _this12.vimeoDownloadLinks = res.result;

                if (_this12.vimeoDownloadLinks && _this12.vimeoDownloadLinks.length) {
                  $('#downloadOption').modal('show');
                } else {
                  _this12.msgService.showErrorMessage('error', '', 'No download links found');
                }
              }, function (err) {
                _this12.auth.hideLoader();

                console.log(err);
              });
            }
          }, {
            key: "changeSelectedSize",
            value: function changeSelectedSize(obj) {
              this.selectedDownloadSize = obj;
            }
          }, {
            key: "downloadVimeoVdo",
            value: function downloadVimeoVdo() {
              window.open(this.selectedDownloadSize.link, "_blank");
              $('#downloadOption').modal('hide');
            }
          }]);

          return DriveHomeComponent;
        }();

        DriveHomeComponent.ctorParameters = function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }, {
            type: _file_manager_service__WEBPACK_IMPORTED_MODULE_4__["FileManagerService"]
          }, {
            type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticatorService"]
          }, {
            type: _services_message_show_service__WEBPACK_IMPORTED_MODULE_3__["MessageShowService"]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]
          }, {
            type: _services_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
          }, {
            type: _services_products_service__WEBPACK_IMPORTED_MODULE_8__["ProductService"]
          }];
        };

        DriveHomeComponent.propDecorators = {
          dragBox: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['DragContainer', {
              "static": false
            }]
          }],
          dropZone: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['dropZone', {
              "static": false
            }]
          }],
          uploaders: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['uploaders', {
              "static": false
            }]
          }],
          expandingTree: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['expandingTree', {
              "static": false
            }]
          }]
        };
        DriveHomeComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
          selector: 'app-drive-home',
          template: __importDefault(__webpack_require__(
          /*! raw-loader!./drive-home.component.html */
          "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/file-manager/drive-home/drive-home.component.html"))["default"],
          styles: [__importDefault(__webpack_require__(
          /*! ./drive-home.component.scss */
          "./src/app/components/course-module/file-manager/drive-home/drive-home.component.scss"))["default"]]
        }), __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _file_manager_service__WEBPACK_IMPORTED_MODULE_4__["FileManagerService"], _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticatorService"], _services_message_show_service__WEBPACK_IMPORTED_MODULE_3__["MessageShowService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"], _services_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], _services_products_service__WEBPACK_IMPORTED_MODULE_8__["ProductService"]])], DriveHomeComponent);
        return DriveHomeComponent;
      }();
      /***/

    },

    /***/
    "./src/app/components/course-module/file-manager/file-card/file-card.component.scss":
    /*!******************************************************************************************!*\
      !*** ./src/app/components/course-module/file-manager/file-card/file-card.component.scss ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsCourseModuleFileManagerFileCardFileCardComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".file {\n  cursor: pointer;\n  width: 100%;\n  border-radius: 10px;\n  background-color: #fff;\n  box-shadow: 0px 5px 5px -2px rgba(0, 0, 0, 0.2);\n  border: 1px solid rgba(0, 0, 0, 0.07);\n  float: left;\n  margin-left: 5px;\n  transition: all 0.3s;\n  -webkit-transition: all 0.3s;\n  -moz-transition: all 0.3s;\n  -ms-transition: all 0.3s;\n  -o-transition: all 0.3s;\n  margin-bottom: 0px;\n}\n\n.file.table__header {\n  cursor: default;\n  width: 100%;\n  border-radius: 10px;\n  background-color: #fff;\n  box-shadow: 0px 0px 1px 0px rgba(30, 35, 40, 0.36);\n  border: 1px solid rgba(0, 0, 0, 0.07);\n  float: left;\n  margin-left: 5px;\n  transition: all 0.3s;\n  -webkit-transition: all 0.3s;\n  -moz-transition: all 0.3s;\n  -ms-transition: all 0.3s;\n  -o-transition: all 0.3s;\n  margin-bottom: 5px;\n}\n\n.file.table__header:hover {\n  transform: translate(0, 0px);\n  box-shadow: none;\n}\n\n.file:hover {\n  transform: translate(0, -4px);\n  box-shadow: 0px 7px 8px -2px rgba(0, 0, 0, 0.2);\n}\n\n.file:hover {\n  transform: translate(0, -4px);\n  box-shadow: 0px 17px 19px -2px rgba(0, 0, 0, 0.2);\n}\n\n.file__img {\n  width: 10%;\n  height: 0;\n  padding-bottom: 0;\n  margin-top: 0;\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  border-top-right-radius: 10px;\n  border-top-left-radius: 10px;\n}\n\n.file__info {\n  padding: 8px 5px 5px 35px;\n  position: relative;\n}\n\n.file__title {\n  font-size: 14px;\n  font-weight: 600;\n  color: #252a3b;\n  width: 20%;\n  display: inline-block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  line-height: 15px;\n  white-space: nowrap;\n  padding: 0px 7px;\n}\n\n.file__made {\n  font-size: 13px;\n  color: #8087a2;\n  width: 15%;\n  display: inline-block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  line-height: 15px;\n  white-space: nowrap;\n  padding: 0px 7px;\n}\n\n.file__title:before {\n  width: 16px;\n  position: absolute;\n  left: 10px;\n  top: 6px;\n}\n\n.file__details {\n  font-size: 13px;\n  color: #8087a2;\n  font-weight: 500;\n  padding: 0px 5px;\n  display: inline-flex;\n  width: 10%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.file__details.file__date {\n  font-size: 13px;\n  color: #8087a2;\n  font-weight: 500;\n  padding: 0px 5px;\n  width: 15%;\n}\n\n.file__details.file__size {\n  width: 10%;\n}\n\n.file__details.file__size.small {\n  color: green;\n}\n\n.file__details.file__size.normal {\n  color: blue;\n}\n\n.file__details.file__size.large {\n  color: red;\n}\n\n.file__details.file__owner {\n  width: 15%;\n}\n\n.tree__view {\n  overflow: auto;\n  height: 375px;\n}\n\n.audio-file .file__img {\n  background-image: url('audio.svg');\n}\n\n.doc-file .file__img {\n  background-image: url('docx.png');\n}\n\n.file-file .file__img {\n  background-image: url('file.svg');\n}\n\n.folder-file .file__img {\n  background-image: url('folder.jpg');\n}\n\n.image-file .file__img {\n  background-image: url('image.svg');\n}\n\n.pdf-file .file__img {\n  background-image: url('pdf.png');\n}\n\n.text-file .file__img {\n  background-image: url('txt.png');\n}\n\n.video-file .file__img {\n  background-image: url('video.svg');\n}\n\n.xlsx-file .file__img {\n  background-image: url('xlsx.png');\n}\n\n.zip-file .file__img {\n  background-image: url('zip.svg');\n}\n\n.image .file__title:before {\n  content: url(\"data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDMxNS41OCAzMTUuNTgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMxNS41OCAzMTUuNTg7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4Ij4KPGc+Cgk8cGF0aCBkPSJNMzEwLjU4LDMzLjMzMUg1Yy0yLjc2MSwwLTUsMi4yMzgtNSw1djIzOC45MThjMCwyLjc2MiwyLjIzOSw1LDUsNWgzMDUuNThjMi43NjMsMCw1LTIuMjM4LDUtNVYzOC4zMzEgICBDMzE1LjU4LDM1LjU2OSwzMTMuMzQzLDMzLjMzMSwzMTAuNTgsMzMuMzMxeiBNMjg1LjU4LDI0Mi4zODZsLTY4Ljc2Ni03MS4yMTRjLTAuNzYtMC43ODUtMi4wMDMtMC44MzYtMi44MjMtMC4xMTRsLTQ3LjY5NSw0MS45NzkgICBsLTYwLjk2Mi03NS4wNjFjLTAuMzk2LTAuNDktMC45NzUtMC43Ny0xLjYzLTAuNzU2Yy0wLjYzMSwwLjAxMy0xLjIyLDAuMzE2LTEuNTk3LDAuODIyTDMwLDIzNC43OTdWNjMuMzMxaDI1NS41OFYyNDIuMzg2eiIgZmlsbD0iIzQ4ODVmNCIvPgoJPHBhdGggZD0iTTIxMC4wNTksMTM1LjU1NWMxMy41MzgsMCwyNC41MjktMTAuOTgyLDI0LjUyOS0yNC41MzFjMC0xMy41NDUtMTAuOTkxLTI0LjUzMy0yNC41MjktMjQuNTMzICAgYy0xMy41NDksMC0yNC41MjgsMTAuOTg4LTI0LjUyOCwyNC41MzNDMTg1LjUzMSwxMjQuNTcyLDE5Ni41MTEsMTM1LjU1NSwyMTAuMDU5LDEzNS41NTV6IiBmaWxsPSIjNDg4NWY0Ii8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==\");\n}\n\n.folder .file__title:before {\n  content: url(\"data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDQ3NS4wODIgNDc1LjA4MiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDc1LjA4MiA0NzUuMDgyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPHBhdGggZD0iTTQ1Ni4yMzksMTI4LjQ3NWMtMTIuNTYtMTIuNTYyLTI3LjU5Ny0xOC44NDItNDUuMTEtMTguODQyaC0xOTEuODZ2LTkuMTM2YzAtMTcuNTExLTYuMjgzLTMyLjU0OC0xOC44NDMtNDUuMTA3ICAgYy0xMi41NjItMTIuNTYyLTI3LjYtMTguODQ2LTQ1LjExMS0xOC44NDZINjMuOTUzYy0xNy41MTUsMC0zMi41NTEsNi4yODMtNDUuMTExLDE4Ljg0NkM2LjI4LDY3Ljk0OSwwLDgyLjk4NiwwLDEwMC40OTd2Mjc0LjA4OCAgIGMwLDE3LjUwOCw2LjI4LDMyLjU0NSwxOC44NDIsNDUuMTA0YzEyLjU2MiwxMi41NjUsMjcuNiwxOC44NDksNDUuMTExLDE4Ljg0OWgzNDcuMTc1YzE3LjUxNCwwLDMyLjU1MS02LjI4Myw0NS4xMS0xOC44NDkgICBjMTIuNTY2LTEyLjU2LDE4Ljg0My0yNy41OTcsMTguODQzLTQ1LjEwNFYxNzMuNTlDNDc1LjA4MiwxNTYuMDc4LDQ2OC44MDUsMTQxLjA0Miw0NTYuMjM5LDEyOC40NzV6IiBmaWxsPSIjZmZjYTQ1Ii8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==\");\n}\n\n.audio .file__title:before {\n  content: url(\"data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDU1IDU1IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1NSA1NTsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSIxNnB4IiBoZWlnaHQ9IjE2cHgiPgo8cGF0aCBkPSJNNTIuNjYsMC4yNDljLTAuMjE2LTAuMTg5LTAuNTAxLTAuMjc1LTAuNzg5LTAuMjQxbC0zMSw0LjAxMUMyMC4zNzMsNC4wODQsMjAsNC41MDcsMjAsNS4wMXY2LjAxN3Y0LjIxMnYyNS4zODQgIEMxOC4xNzQsMzguNDI4LDE1LjI3MywzNywxMiwzN2MtNS41MTQsMC0xMCw0LjAzNy0xMCw5czQuNDg2LDksMTAsOXMxMC00LjAzNywxMC05YzAtMC4yMzItMC4wMTktMC40Ni0wLjAzOS0wLjY4NyAgQzIxLjk3NCw0NS4yNDgsMjIsNDUuMTg5LDIyLDQ1LjEyMVYxNi4xMThsMjktMy43NTN2MTguMjU3QzQ5LjE3NCwyOC40MjgsNDYuMjczLDI3LDQzLDI3Yy01LjUxNCwwLTEwLDQuMDM3LTEwLDlzNC40ODYsOSwxMCw5ICBjNS40NjQsMCw5LjkxMy0zLjk2Niw5Ljk5My04Ljg2N2MwLTAuMDEzLDAuMDA3LTAuMDI0LDAuMDA3LTAuMDM3VjExLjIyN1Y3LjAxNlYxQzUzLDAuNzEyLDUyLjg3NiwwLjQzOCw1Mi42NiwwLjI0OXoiIGZpbGw9IiNmZjUwNDEiLz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==\");\n}\n\n.video .file__title:before {\n  content: url(\"data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDkwIDkwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA5MCA5MDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxwYXRoIGlkPSJZb3VUdWJlX194MjhfYWx0X3gyOV8iIGQ9Ik05MCwyNi45NThDOTAsMTkuNTI1LDgzLjk3OSwxMy41LDc2LjU1LDEzLjVoLTYzLjFDNi4wMjEsMTMuNSwwLDE5LjUyNSwwLDI2Ljk1OHYzNi4wODQgICBDMCw3MC40NzUsNi4wMjEsNzYuNSwxMy40NSw3Ni41aDYzLjFDODMuOTc5LDc2LjUsOTAsNzAuNDc1LDkwLDYzLjA0MlYyNi45NTh6IE0zNiw2MC4yMjVWMjYuMzNsMjUuNzAyLDE2Ljk0N0wzNiw2MC4yMjV6IiBmaWxsPSIjOTk3MmZlIi8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==\");\n}\n\n.pdf .file__title:before {\n  content: url(\"data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIHN0eWxlPSJmaWxsOiNFMkU1RTc7IiBkPSJNMTI4LDBjLTE3LjYsMC0zMiwxNC40LTMyLDMydjQ0OGMwLDE3LjYsMTQuNCwzMiwzMiwzMmgzMjBjMTcuNiwwLDMyLTE0LjQsMzItMzJWMTI4TDM1MiwwSDEyOHoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNCMEI3QkQ7IiBkPSJNMzg0LDEyOGg5NkwzNTIsMHY5NkMzNTIsMTEzLjYsMzY2LjQsMTI4LDM4NCwxMjh6Ii8+DQo8cG9seWdvbiBzdHlsZT0iZmlsbDojQ0FEMUQ4OyIgcG9pbnRzPSI0ODAsMjI0IDM4NCwxMjggNDgwLDEyOCAiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGMTU2NDI7IiBkPSJNNDE2LDQxNmMwLDguOC03LjIsMTYtMTYsMTZINDhjLTguOCwwLTE2LTcuMi0xNi0xNlYyNTZjMC04LjgsNy4yLTE2LDE2LTE2aDM1MmM4LjgsMCwxNiw3LjIsMTYsMTYNCglWNDE2eiIvPg0KPGc+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIGQ9Ik0xMDEuNzQ0LDMwMy4xNTJjMC00LjIyNCwzLjMyOC04LjgzMiw4LjY4OC04LjgzMmgyOS41NTJjMTYuNjQsMCwzMS42MTYsMTEuMTM2LDMxLjYxNiwzMi40OA0KCQljMCwyMC4yMjQtMTQuOTc2LDMxLjQ4OC0zMS42MTYsMzEuNDg4aC0yMS4zNnYxNi44OTZjMCw1LjYzMi0zLjU4NCw4LjgxNi04LjE5Miw4LjgxNmMtNC4yMjQsMC04LjY4OC0zLjE4NC04LjY4OC04LjgxNlYzMDMuMTUyeg0KCQkgTTExOC42MjQsMzEwLjQzMnYzMS44NzJoMjEuMzZjOC41NzYsMCwxNS4zNi03LjU2OCwxNS4zNi0xNS41MDRjMC04Ljk0NC02Ljc4NC0xNi4zNjgtMTUuMzYtMTYuMzY4SDExOC42MjR6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIGQ9Ik0xOTYuNjU2LDM4NGMtNC4yMjQsMC04LjgzMi0yLjMwNC04LjgzMi03Ljkydi03Mi42NzJjMC00LjU5Miw0LjYwOC03LjkzNiw4LjgzMi03LjkzNmgyOS4yOTYNCgkJYzU4LjQ2NCwwLDU3LjE4NCw4OC41MjgsMS4xNTIsODguNTI4SDE5Ni42NTZ6IE0yMDQuNzIsMzExLjA4OFYzNjguNGgyMS4yMzJjMzQuNTQ0LDAsMzYuMDgtNTcuMzEyLDAtNTcuMzEySDIwNC43MnoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRkZGRkZGOyIgZD0iTTMwMy44NzIsMzEyLjExMnYyMC4zMzZoMzIuNjI0YzQuNjA4LDAsOS4yMTYsNC42MDgsOS4yMTYsOS4wNzJjMCw0LjIyNC00LjYwOCw3LjY4LTkuMjE2LDcuNjgNCgkJaC0zMi42MjR2MjYuODY0YzAsNC40OC0zLjE4NCw3LjkyLTcuNjY0LDcuOTJjLTUuNjMyLDAtOS4wNzItMy40NC05LjA3Mi03Ljkydi03Mi42NzJjMC00LjU5MiwzLjQ1Ni03LjkzNiw5LjA3Mi03LjkzNmg0NC45MTINCgkJYzUuNjMyLDAsOC45NiwzLjM0NCw4Ljk2LDcuOTM2YzAsNC4wOTYtMy4zMjgsOC43MDQtOC45Niw4LjcwNGgtMzcuMjQ4VjMxMi4xMTJ6Ii8+DQo8L2c+DQo8cGF0aCBzdHlsZT0iZmlsbDojQ0FEMUQ4OyIgZD0iTTQwMCw0MzJIOTZ2MTZoMzA0YzguOCwwLDE2LTcuMiwxNi0xNnYtMTZDNDE2LDQyNC44LDQwOC44LDQzMiw0MDAsNDMyeiIvPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=\");\n}\n\n.docx .file__title:before {\n  content: url(\"data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwb2x5Z29uIHN0eWxlPSJmaWxsOiNFMkUyRTI7IiBwb2ludHM9IjMzOC44NTYsMCA0NDUuODgsMTA3LjAyNCA0NDUuODgsNTEyIDU5LjI0LDUxMiA1OS4yNCwwICIvPg0KPHBvbHlnb24gc3R5bGU9ImZpbGw6Izk5OTk5OTsiIHBvaW50cz0iNDQ1Ljg4LDEwNy4wMjQgMzM4Ljg0LDEwNy4wMjQgMzM4Ljg0LDAgIi8+DQo8cG9seWdvbiBzdHlsZT0iZmlsbDojMzMzMzMzOyIgcG9pbnRzPSI0MDcuNTI4LDQyMi44OTYgMjIuMDQsNDIyLjg5NiAyMi4wNCwyOTMuMDA4IDQ4OS45NiwyOTMuMDA4ICIvPg0KPHBvbHlnb24gc3R5bGU9ImZpbGw6Izk5OTk5OTsiIHBvaW50cz0iNTkuMjQsNDYwLjA4IDU5LjI0LDQyMi44OTYgMjIuMDQsNDIyLjg5NiAiLz4NCjxnPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiBkPSJNODcuODY0LDM5NS40NTZWMzIwLjhoMzYuNzA0YzEwLjQxNiwwLDE3LjcxMiwyLjI4OCwyMS44ODgsNi44NDgNCgkJYzQuMTkyLDQuNTYsNi4yNzIsMTIuNTQ0LDYuMjcyLDIzLjk1MmMwLDE4LjYyNC0xLjY2NCwzMC41OTItNS4wMjQsMzUuOTA0Yy0zLjM0NCw1LjI5Ni0xMC45MjgsNy45NTItMjIuNjg4LDcuOTUyTDg3Ljg2NCwzOTUuNDU2DQoJCUw4Ny44NjQsMzk1LjQ1NnogTTEwMi4wNCwzODMuNTM2aDIwLjE3NmM2Ljc4NCwwLDExLjE2OC0xLjU2OCwxMy4xNTItNC42NzJjMS45ODQtMy4xMiwyLjk5Mi0xMCwyLjk5Mi0yMC42NTYNCgkJYzAtMTEuMDA4LTAuODk2LTE4LTIuNjg4LTIwLjk5MmMtMS43NzYtMi45OTItNS45NjgtNC40NjQtMTIuNTc2LTQuNDY0SDEwMi4wNFYzODMuNTM2eiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiBkPSJNMTk0LjA3MiwzMjAuMTQ0YzEzLjU2OCwwLDIyLjMwNCwyLjI3MiwyNi4yMDgsNi43NjhjMy44ODgsNC40OTYsNS44NCwxNC41NzYsNS44NCwzMC4yMDgNCgkJYzAsMTcuMTA0LTEuOTUyLDI3Ljg3Mi01Ljg3MiwzMi4zMzZjLTMuOTIsNC40NjQtMTMuNDA4LDYuNjcyLTI4LjQ2NCw2LjY3MmMtMTMuNTY4LDAtMjIuMzM2LTIuMjA4LTI2LjMwNC02LjU5Mg0KCQljLTMuOTg0LTQuMzg0LTUuOTY4LTE0LjA2NC01Ljk2OC0yOC45OTJjMC0xNy43OTIsMS45NTItMjguOTc2LDUuODU2LTMzLjUzNkMxNjkuMjU2LDMyMi40MTYsMTc4Ljg0LDMyMC4xNDQsMTk0LjA3MiwzMjAuMTQ0eg0KCQkgTTE5Mi45NjgsMzMyLjMwNGMtOS41MiwwLTE1LjA3MiwxLjIxNi0xNi42NzIsMy42NjRjLTEuNjE2LDIuNDMyLTIuNCwxMC45MTItMi40LDI1LjM3NmMwLDEwLjcyLDAuOTQ0LDE3LjE2OCwyLjgxNiwxOS4zNg0KCQljMS44NzIsMi4xOTIsNy40MDgsMy4yOCwxNi41OTIsMy4yOGM4LjgsMCwxNC4wNjQtMS4yMzIsMTUuODA4LTMuNjhjMS43NDQtMi40NjQsMi42MjQtOS45MiwyLjYyNC0yMi4zODQNCgkJYzAtMTIuNTEyLTAuODMyLTE5LjkwNC0yLjQ4LTIyLjE5MkMyMDcuNTkyLDMzMy40MjQsMjAyLjE2OCwzMzIuMzA0LDE5Mi45NjgsMzMyLjMwNHoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRkZGRkZGOyIgZD0iTTI4MS43NjgsMzY4LjgzMmgxNC4yMjR2Mi41NmMwLDEwLjM4NC0xLjg3MiwxNy4xMDQtNS42OCwyMC4xNmMtMy43NzYsMy4wNC0xMi4xNiw0LjU2LTI1LjE1Miw0LjU2DQoJCWMtMTQuNzA0LDAtMjMuNzYtMi40LTI3LjE1Mi03LjIxNnMtNS4wODgtMTcuNjgtNS4wODgtMzguNjA4YzAtMTIuMzM2LDIuMzA0LTIwLjQxNiw2Ljg5Ni0yNC4zMg0KCQljNC41OTItMy44NzIsMTQuMjA4LTUuODI0LDI4LjgzMi01LjgyNGMxMC42MjQsMCwxNy43NDQsMS42MTYsMjEuMzEyLDQuOGMzLjYsMy4xODQsNS4zNzYsOS41Miw1LjM3NiwxOS4wMDhsMC4wMzIsMS42OTZoLTE0LjIyNA0KCQl2LTEuOTJjMC00Ljg5Ni0wLjkxMi04LjAxNi0yLjc1Mi05LjM3NmMtMS44NC0xLjM3Ni02LjAzMi0yLjA0OC0xMi41OTItMi4wNDhjLTguOCwwLTE0LjA2NCwxLjA1Ni0xNS44MjQsMy4yMTYNCgkJYy0xLjc3NiwyLjE2LTIuNjU2LDguNTI4LTIuNjU2LDE5LjEzNmMwLDE0LjMwNCwwLjgsMjIuNzUyLDIuMzY4LDI1LjM3NmMxLjYsMi42MjQsNi43MDQsMy45MzYsMTUuMzkyLDMuOTM2DQoJCWM3LjAyNCwwLDExLjYtMC43MzYsMTMuNjgtMi4xOTJzMy4xNTItNC42NzIsMy4xNTItOS42MzJMMjgxLjc2OCwzNjguODMyeiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiBkPSJNMzY3LjgxNiwzMjAuOEwzNDUuNCwzNTYuOTZsMjMuOTA0LDM4LjQ5NkgzNTIuNjhsLTEwLjcyLTE3LjkzNg0KCQljLTEuNjY0LTIuNzY4LTMuMjE2LTUuNTg0LTQuNzItOC40MTZsLTEuNTM2LTIuOTZsLTEuNTg0LTIuOTEyaC0wLjIyNGwtMS41ODQsMi45NzZjLTEuOTA0LDMuNTY4LTQuMDY0LDcuMzQ0LTYuNDY0LDExLjMxMg0KCQlsLTEwLjc2OCwxNy45MzZoLTE3LjA1NmwyNC40OTYtMzguNDk2bC0yMi43NTItMzYuMTZoMTYuODk2bDkuOTY4LDE2LjYyNGMxLjU2OCwyLjYyNCwzLjAyNCw1LjIxNiw0LjQxNiw3Ljc3NmwxLjM2LDIuNjI0DQoJCWwxLjM3NiwyLjYyNGgwLjIyNGMwLjYyNC0xLjE2OCwxLjA3Mi0yLjA0OCwxLjM3Ni0yLjYyNGwxLjM2LTIuNTc2YzEuMTY4LTIuMjcyLDIuNjI0LTQuODQ4LDQuMzY4LTcuNzZsOS45NTItMTYuNjg4DQoJCUwzNjcuODE2LDMyMC44TDM2Ny44MTYsMzIwLjh6Ii8+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==\");\n}\n\n.xlsx .file__title:before {\n  content: url(\"data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNNDM5LjY1OCw5MS4yMUwzNTEuNDM1LDIuOTg3QzM0OS41MjIsMS4wNzUsMzQ2LjkyOCwwLDM0NC4yMjMsMEg3OS41NTRjLTUuNjMzLDAtMTAuMTk5LDQuNTY2LTEwLjE5OSwxMC4xOTl2NDkxLjYwMg0KCQkJYzAsNS42MzMsNC41NjYsMTAuMTk5LDEwLjE5OSwxMC4xOTloMzUyLjg5MmM1LjYzMiwwLDEwLjE5OS00LjU2NiwxMC4xOTktMTAuMTk5Vjk4LjQyMg0KCQkJQzQ0Mi42NDUsOTUuNzE3LDQ0MS41Nyw5My4xMjMsNDM5LjY1OCw5MS4yMXogTTM1NC40MjIsMzQuODIzbDUzLjQwMSw1My40aC01My40MDFWMzQuODIzeiBNNDIyLjI0Nyw0OTEuNjAySDg5Ljc1M1YyMC4zOTgNCgkJCWgyNDQuMjcxdjc4LjAyNGMwLDUuNjMzLDQuNTY3LDEwLjE5OSwxMC4xOTksMTAuMTk5aDc4LjAyNFY0OTEuNjAyeiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNMjgyLjAxMiw0NTQuODg0SDExOS4zMzFjLTUuNjMzLDAtMTAuMTk5LDQuNTY2LTEwLjE5OSwxMC4xOTlzNC41NjYsMTAuMTk5LDEwLjE5OSwxMC4xOTloMTYyLjY4MQ0KCQkJYzUuNjMyLDAsMTAuMTk5LTQuNTY2LDEwLjE5OS0xMC4xOTlTMjg3LjY0NCw0NTQuODg0LDI4Mi4wMTIsNDU0Ljg4NHoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZD0iTTMzNC4wMjYsNDU0Ljg4NGgtMTEuMDY3Yy01LjYzMiwwLTEwLjE5OSw0LjU2Ni0xMC4xOTksMTAuMTk5czQuNTY3LDEwLjE5OSwxMC4xOTksMTAuMTk5aDExLjA2Nw0KCQkJYzUuNjMyLDAsMTAuMTk5LTQuNTY2LDEwLjE5OS0xMC4xOTlTMzM5LjY1OCw0NTQuODg0LDMzNC4wMjYsNDU0Ljg4NHoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZD0iTTMxMS42LDI2My4xMzlsNzUuNzM3LTkzLjUzNGMyLjQ3My0zLjA1NiwyLjk3Mi03LjI2MSwxLjI3OC0xMC44MDljLTEuNjkyLTMuNTQ5LTUuMjc0LTUuODA4LTkuMjA1LTUuODA4aC04NC45NTINCgkJCWMtMy4wNzgsMC01Ljk5LDEuMzg5LTcuOTI2LDMuNzgxTDI1NiwxOTQuNDc1bC0zMC41MzItMzcuNzA2Yy0xLjkzNi0yLjM5Mi00Ljg0OS0zLjc4MS03LjkyNi0zLjc4MUgxMzIuNTkNCgkJCWMtMy45MzEsMC03LjUxMywyLjI1OS05LjIwNiw1LjgwOGMtMS42OTMsMy41NDgtMS4xOTQsNy43NTQsMS4yNzksMTAuODA5bDc1LjczNyw5My41MzRsLTc1LjczNyw5My41MzQNCgkJCWMtMi40NzQsMy4wNTYtMi45NzIsNy4yNjEtMS4yNzksMTAuODA5YzEuNjkzLDMuNTQ4LDUuMjc0LDUuODA4LDkuMjA2LDUuODA4aDg0Ljk1MmMzLjA3NywwLDUuOTktMS4zODksNy45MjYtMy43ODFMMjU2LDMzMS44MDQNCgkJCWwzMC41MzEsMzcuNzA2YzEuOTM2LDIuMzkyLDQuODQ5LDMuNzgxLDcuOTI2LDMuNzgxaDg0Ljk1M2MzLjkzMSwwLDcuNTEzLTIuMjU5LDkuMjA1LTUuODA4DQoJCQljMS42OTMtMy41NDgsMS4xOTUtNy43NTQtMS4yNzktMTAuODA5TDMxMS42LDI2My4xMzl6IE0yOTkuMzIzLDE3My4zODZoNTguNzA2bC01OS41NTMsNzMuNTQ1bC0yOS4zNTItMzYuMjVMMjk5LjMyMywxNzMuMzg2eg0KCQkJIE0yMTIuNjc3LDM1Mi44OTJoLTU4LjcwNmw1OS41NTItNzMuNTQ1bDI5LjM1MiwzNi4yNUwyMTIuNjc3LDM1Mi44OTJ6IE0yOTkuMzIzLDM1Mi44OTJMMTUzLjk3MSwxNzMuMzg2aDU4LjcwNmwxNDUuMzUxLDE3OS41MDYNCgkJCUgyOTkuMzIzeiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K\");\n}\n\n.zip .file__title:before {\n  content: url(\"data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE4LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDU2IDU2IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1NiA1NjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0U5RTlFMDsiIGQ9Ik0zNi45ODUsMEg3Ljk2M0M3LjE1NSwwLDYuNSwwLjY1NSw2LjUsMS45MjZWNTVjMCwwLjM0NSwwLjY1NSwxLDEuNDYzLDFoNDAuMDc0DQoJCWMwLjgwOCwwLDEuNDYzLTAuNjU1LDEuNDYzLTFWMTIuOTc4YzAtMC42OTYtMC4wOTMtMC45Mi0wLjI1Ny0xLjA4NUwzNy42MDcsMC4yNTdDMzcuNDQyLDAuMDkzLDM3LjIxOCwwLDM2Ljk4NSwweiIvPg0KCTxwb2x5Z29uIHN0eWxlPSJmaWxsOiNEOUQ3Q0E7IiBwb2ludHM9IjM3LjUsMC4xNTEgMzcuNSwxMiA0OS4zNDksMTIgCSIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiM1NTYwODA7IiBkPSJNNDguMDM3LDU2SDcuOTYzQzcuMTU1LDU2LDYuNSw1NS4zNDUsNi41LDU0LjUzN1YzOWg0M3YxNS41MzdDNDkuNSw1NS4zNDUsNDguODQ1LDU2LDQ4LjAzNyw1NnoiLz4NCgk8Zz4NCgkJPHBhdGggc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIGQ9Ik0yNS4yNjYsNDIuOTI0djEuMzI2bC00Ljc5OSw3LjIwNWwtMC4yNzMsMC4yMTloNS4wNzJWNTNoLTYuNjk5di0xLjMyNmw0Ljc5OS03LjIwNWwwLjI4Ny0wLjIxOQ0KCQkJaC01LjA4NnYtMS4zMjZIMjUuMjY2eiIvPg0KCQk8cGF0aCBzdHlsZT0iZmlsbDojRkZGRkZGOyIgZD0iTTI5LjI3MSw1M2gtMS42NjhWNDIuOTI0aDEuNjY4VjUzeiIvPg0KCQk8cGF0aCBzdHlsZT0iZmlsbDojRkZGRkZGOyIgZD0iTTMzLjQxNCw1M2gtMS42NDFWNDIuOTI0aDIuODk4YzAuNDI4LDAsMC44NTIsMC4wNjgsMS4yNzEsMC4yMDUNCgkJCWMwLjQxOSwwLjEzNywwLjc5NSwwLjM0MiwxLjEyOCwwLjYxNWMwLjMzMywwLjI3MywwLjYwMiwwLjYwNCwwLjgwNywwLjk5MXMwLjMwOCwwLjgyMiwwLjMwOCwxLjMwNg0KCQkJYzAsMC41MTEtMC4wODcsMC45NzMtMC4yNiwxLjM4OGMtMC4xNzMsMC40MTUtMC40MTUsMC43NjQtMC43MjUsMS4wNDZjLTAuMzEsMC4yODItMC42ODQsMC41MDEtMS4xMjEsMC42NTYNCgkJCXMtMC45MjEsMC4yMzItMS40NDksMC4yMzJoLTEuMjE3VjUzeiBNMzMuNDE0LDQ0LjE2OHYzLjk5MmgxLjUwNGMwLjIsMCwwLjM5OC0wLjAzNCwwLjU5NS0wLjEwMw0KCQkJYzAuMTk2LTAuMDY4LDAuMzc2LTAuMTgsMC41NC0wLjMzNXMwLjI5Ni0wLjM3MSwwLjM5Ni0wLjY0OWMwLjEtMC4yNzgsMC4xNS0wLjYyMiwwLjE1LTEuMDMyYzAtMC4xNjQtMC4wMjMtMC4zNTQtMC4wNjgtMC41NjcNCgkJCWMtMC4wNDYtMC4yMTQtMC4xMzktMC40MTktMC4yOC0wLjYxNWMtMC4xNDItMC4xOTYtMC4zNC0wLjM2LTAuNTk1LTAuNDkyYy0wLjI1NS0wLjEzMi0wLjU5My0wLjE5OC0xLjAxMi0wLjE5OEgzMy40MTR6Ii8+DQoJPC9nPg0KCTxnPg0KCQk8cGF0aCBzdHlsZT0iZmlsbDojQzhCREI4OyIgZD0iTTI4LjUsMjR2LTJoMnYtMmgtMnYtMmgydi0yaC0ydi0yaDJ2LTJoLTJ2LTJoMlY4aC0yVjZoLTJ2MmgtMnYyaDJ2MmgtMnYyaDJ2MmgtMnYyaDJ2MmgtMnYyaDJ2Mg0KCQkJaC00djVjMCwyLjc1NywyLjI0Myw1LDUsNXM1LTIuMjQzLDUtNXYtNUgyOC41eiBNMzAuNSwyOWMwLDEuNjU0LTEuMzQ2LDMtMywzcy0zLTEuMzQ2LTMtM3YtM2g2VjI5eiIvPg0KCQk8cGF0aCBzdHlsZT0iZmlsbDojQzhCREI4OyIgZD0iTTI2LjUsMzBoMmMwLjU1MiwwLDEtMC40NDcsMS0xcy0wLjQ0OC0xLTEtMWgtMmMtMC41NTIsMC0xLDAuNDQ3LTEsMVMyNS45NDgsMzAsMjYuNSwzMHoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==\");\n}\n\n.texts .file__title:before {\n  content: url(\"data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTggNTgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDU4IDU4OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8cG9seWdvbiBzdHlsZT0iZmlsbDojRURFQURBOyIgcG9pbnRzPSI1MS41LDE0IDM3LjUsMCA2LjUsMCA2LjUsNTggNTEuNSw1OCAiLz4NCjxnPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNDRUM5QUU7IiBkPSJNMTYuNSwyM2gyNWMwLjU1MiwwLDEtMC40NDcsMS0xcy0wLjQ0OC0xLTEtMWgtMjVjLTAuNTUyLDAtMSwwLjQ0Ny0xLDFTMTUuOTQ4LDIzLDE2LjUsMjN6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0NFQzlBRTsiIGQ9Ik0xNi41LDE1aDEwYzAuNTUyLDAsMS0wLjQ0NywxLTFzLTAuNDQ4LTEtMS0xaC0xMGMtMC41NTIsMC0xLDAuNDQ3LTEsMVMxNS45NDgsMTUsMTYuNSwxNXoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojQ0VDOUFFOyIgZD0iTTQxLjUsMjloLTI1Yy0wLjU1MiwwLTEsMC40NDctMSwxczAuNDQ4LDEsMSwxaDI1YzAuNTUyLDAsMS0wLjQ0NywxLTFTNDIuMDUyLDI5LDQxLjUsMjl6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0NFQzlBRTsiIGQ9Ik00MS41LDM3aC0yNWMtMC41NTIsMC0xLDAuNDQ3LTEsMXMwLjQ0OCwxLDEsMWgyNWMwLjU1MiwwLDEtMC40NDcsMS0xUzQyLjA1MiwzNyw0MS41LDM3eiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNDRUM5QUU7IiBkPSJNNDEuNSw0NWgtMjVjLTAuNTUyLDAtMSwwLjQ0Ny0xLDFzMC40NDgsMSwxLDFoMjVjMC41NTIsMCwxLTAuNDQ3LDEtMVM0Mi4wNTIsNDUsNDEuNSw0NXoiLz4NCjwvZz4NCjxwb2x5Z29uIHN0eWxlPSJmaWxsOiNDRUM5QUU7IiBwb2ludHM9IjM3LjUsMCAzNy41LDE0IDUxLjUsMTQgIi8+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==\");\n}\n\n/* \n============================================================================================\n================================== REjected Grid View ==================================\n============================================================================================\n*/\n\n/* \n.file {\n    cursor: pointer;\n    width: calc(15% - 30px);\n    border-radius: 10px;\n    background-color: #fff;\n    box-shadow: 0px 9px 10px -2px rgba(0, 0, 0, 0.2);\n    border: 1px solid rgba(0, 0, 0, 0.07);\n    float: left;\n    margin-left: 15px;\n    transition: all 0.3s;\n    -webkit-transition: all 0.3s;\n    -moz-transition: all 0.3s;\n    -ms-transition: all 0.3s;\n    -o-transition: all 0.3s;\n    margin-bottom: 30px;\n}\n\n.file:hover {\n    transform: translate(0, -4px);\n    box-shadow: 0px 17px 19px -2px rgba(0, 0, 0, 0.2);\n}\n\n.file__img {\n    width: 100%;\n    height: 0;\n    padding-bottom: 35%;\n    margin-top: 5%;\n    background-repeat: no-repeat;\n    background-size: contain;\n    background-position: center;\n    border-top-right-radius: 10px;\n    border-top-left-radius: 10px;\n}\n\n.file__title {\n    font-size: 14px;\n    margin-bottom: 5px;\n    margin-top: 0px;\n    font-weight: 600;\n    color: #252a3b;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n    line-height: 18px;\n}\n\n.file__title:before {\n    width: 16px;\n    position: absolute;\n    left: 14px;\n    top: 22px;\n}\n\n.file__date {\n    font-size: 13px;\n    color: #8087a2;\n    font-weight: 500;\n}\n\n.file__info {\n    padding: 21px 5px 10px 35px;\n    position: relative;\n}\n*/\n\n/* \n============================================================================================\n================================== Responsiveness Handles ==================================\n============================================================================================\n*/\n\n@media screen and (max-width: 767px) {\n  .file {\n    margin-left: 15px;\n    margin-bottom: 15px;\n    width: calc(10% - 15px);\n  }\n  .file__info {\n    padding: 21px 5px 10px 35px;\n  }\n  .file__date {\n    font-size: 12px;\n  }\n  .file__title {\n    font-size: 13px;\n    margin-bottom: 0;\n    line-height: 20px;\n  }\n  .file__title:before {\n    left: 10px;\n    top: 14px;\n  }\n  .center-content {\n    padding-left: 0;\n  }\n  .search--width {\n    width: 100%;\n    height: 40px;\n    font-size: 11px;\n  }\n  .top-nav {\n    padding: 15px;\n  }\n  .row--no-right {\n    margin: 0 0px 0 15px;\n  }\n  .files-cont {\n    padding: 0px 0px 0 20px;\n  }\n  .row__title-box {\n    padding-left: 30px;\n    margin-bottom: 15px;\n    margin-top: 15px;\n  }\n  .row__title {\n    font-size: 20px;\n  }\n}\n\n@media screen and (max-width: 640px) {\n  .row__title {\n    font-size: 18px;\n  }\n  .row__title-box {\n    padding-left: 15px;\n    margin-bottom: 20px;\n    margin-top: 20px;\n  }\n  .file {\n    margin-left: 15px;\n    margin-bottom: 15px;\n    width: calc(33.3% - 15px);\n  }\n  .file__date {\n    font-size: 11px;\n  }\n  .file__title {\n    font-size: 12px;\n    margin-bottom: 0;\n    line-height: 20px;\n  }\n  .file--last {\n    display: none;\n  }\n}\n\n@media screen and (max-width: 480px) {\n  .file {\n    margin-left: 15px;\n    margin-bottom: 15px;\n    width: calc(50% - 15px);\n  }\n  .file--last {\n    display: block;\n  }\n}\n\n@media screen and (max-width: 360px) {\n  .file {\n    margin-left: 0;\n    margin-bottom: 20px;\n    width: 100%;\n  }\n  .row--no-right {\n    margin: 0;\n  }\n  .row__title-box {\n    padding-left: 0;\n  }\n  .row__title {\n    font-size: 16px;\n  }\n}\n\n.youtube_thumbnail {\n  width: 20px;\n  height: 20px;\n  float: left;\n  margin: 5px;\n  margin-left: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb3Vyc2UtbW9kdWxlL2ZpbGUtbWFuYWdlci9maWxlLWNhcmQvZmlsZS1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBZTtFQUNmLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLCtDQUErQztFQUMvQyxxQ0FBcUM7RUFDckMsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsNEJBQTRCO0VBQzVCLHlCQUF5QjtFQUN6Qix3QkFBd0I7RUFDeEIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtBQUN0Qjs7QUFmQTtFQWdCUSxlQUFlO0VBQ2YsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsa0RBQWtEO0VBQ2xELHFDQUFxQztFQUNyQyxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQiw0QkFBNEI7RUFDNUIseUJBQXlCO0VBQ3pCLHdCQUF3QjtFQUN4Qix1QkFBdUI7RUFDdkIsa0JBQWtCO0FBRzFCOztBQWhDQTtFQStCWSw0QkFBNEI7RUFDNUIsZ0JBQWdCO0FBSzVCOztBQXJDQTtFQW9DUSw2QkFBNkI7RUFDN0IsK0NBQStDO0FBS3ZEOztBQURBO0VBQ0ksNkJBQTZCO0VBQzdCLGlEQUFpRDtBQUlyRDs7QUFEQTtFQUNJLFVBQVU7RUFDVixTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYiw0QkFBNEI7RUFDNUIsd0JBQXdCO0VBQ3hCLDJCQUEyQjtFQUMzQiw2QkFBNkI7RUFDN0IsNEJBQTRCO0FBSWhDOztBQURBO0VBQ0kseUJBQXlCO0VBQ3pCLGtCQUFrQjtBQUl0Qjs7QUFEQTtFQUNJLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLFVBQVU7RUFDVixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUlwQjs7QUFEQTtFQUNJLGVBQWU7RUFDZixjQUFjO0VBQ2QsVUFBVTtFQUNWLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBSXBCOztBQURBO0VBQ0ksV0FBVztFQUNYLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsUUFBUTtBQUlaOztBQURBO0VBQ0ksZUFBZTtFQUNmLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFJdkI7O0FBYkE7RUFXUSxlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsVUFBVTtBQU1sQjs7QUFyQkE7RUFrQlEsVUFBVTtBQU9sQjs7QUF6QkE7RUFvQlksWUFBWTtBQVN4Qjs7QUE3QkE7RUF1QlksV0FBVztBQVV2Qjs7QUFqQ0E7RUEwQlksVUFBVTtBQVd0Qjs7QUFyQ0E7RUE4QlEsVUFBVTtBQVdsQjs7QUFQQTtFQUNJLGNBQWM7RUFDZCxhQUFhO0FBVWpCOztBQVBBO0VBQ0ksa0NBQTRFO0FBVWhGOztBQVBBO0VBQ0ksaUNBQTJFO0FBVS9FOztBQVBBO0VBQ0ksaUNBQTJFO0FBVS9FOztBQVBBO0VBQ0ksbUNBQTZFO0FBVWpGOztBQVBBO0VBQ0ksa0NBQTRFO0FBVWhGOztBQVBBO0VBQ0ksZ0NBQTBFO0FBVTlFOztBQVBBO0VBQ0ksZ0NBQTBFO0FBVTlFOztBQVBBO0VBQ0ksa0NBQTRFO0FBVWhGOztBQVBBO0VBQ0ksaUNBQTJFO0FBVS9FOztBQVBBO0VBQ0ksZ0NBQTBFO0FBVTlFOztBQVBBO0VBQ0ksdXBEQUF1cEQ7QUFVM3BEOztBQVBBO0VBQ0ksbWhEQUFtaEQ7QUFVdmhEOztBQVBBO0VBQ0ksKzJDQUErMkM7QUFVbjNDOztBQVBBO0VBQ0ksK3NDQUErc0M7QUFVbnRDOztBQVBBO0VBQ0ksbXJGQUFtckY7QUFVdnJGOztBQVBBO0VBQ0ksbXJJQUFtckk7QUFVdnJJOztBQVBBO0VBQ0ksMjlGQUEyOUY7QUFVLzlGOztBQVBBO0VBQ0ksbW1HQUFtbUc7QUFVdm1HOztBQVBBO0VBQ0ksK3ZEQUErdkQ7QUFVbndEOztBQWtCQTs7OztDQVpDOztBQWtCRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQStDQzs7QUFvQkQ7Ozs7Q0FmQzs7QUF3QkQ7RUFDSTtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsdUJBQXVCO0VBdEI3QjtFQXdCRTtJQUNJLDJCQUEyQjtFQXRCakM7RUF3QkU7SUFDSSxlQUFlO0VBdEJyQjtFQXdCRTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0VBdEJ2QjtFQXdCRTtJQUNJLFVBQVU7SUFDVixTQUFTO0VBdEJmO0VBd0JFO0lBQ0ksZUFBZTtFQXRCckI7RUF3QkU7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7RUF0QnJCO0VBd0JFO0lBQ0ksYUFBYTtFQXRCbkI7RUF3QkU7SUFDSSxvQkFBb0I7RUF0QjFCO0VBd0JFO0lBQ0ksdUJBQXVCO0VBdEI3QjtFQXdCRTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0VBdEJ0QjtFQXdCRTtJQUNJLGVBQWU7RUF0QnJCO0FBQ0Y7O0FBeUJBO0VBQ0k7SUFDSSxlQUFlO0VBdEJyQjtFQXdCRTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0VBdEJ0QjtFQXdCRTtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIseUJBQXlCO0VBdEIvQjtFQXdCRTtJQUNJLGVBQWU7RUF0QnJCO0VBd0JFO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7RUF0QnZCO0VBd0JFO0lBQ0ksYUFBYTtFQXRCbkI7QUFDRjs7QUF5QkE7RUFDSTtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsdUJBQXVCO0VBdEI3QjtFQXdCRTtJQUNJLGNBQWM7RUF0QnBCO0FBQ0Y7O0FBeUJBO0VBQ0k7SUFDSSxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLFdBQVc7RUF0QmpCO0VBd0JFO0lBQ0ksU0FBUztFQXRCZjtFQXdCRTtJQUNJLGVBQWU7RUF0QnJCO0VBd0JFO0lBQ0ksZUFBZTtFQXRCckI7QUFDRjs7QUF3QkE7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7RUFDWCxXQUFXO0VBQ1gsaUJBQWlCO0FBckJyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY291cnNlLW1vZHVsZS9maWxlLW1hbmFnZXIvZmlsZS1jYXJkL2ZpbGUtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maWxlIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJveC1zaGFkb3c6IDBweCA1cHggNXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wNyk7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICAmLnRhYmxlX19oZWFkZXJ7XG4gICAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDBweCByZ2JhKDMwLCAzNSwgNDAsIDAuMzYpO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDcpO1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgJjpob3ZlcntcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDBweCk7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lOyAgICAgICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cbiAgICAmOmhvdmVye1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNHB4KTtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDdweCA4cHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgfVxufVxuXG4uZmlsZTpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTRweCk7XG4gICAgYm94LXNoYWRvdzogMHB4IDE3cHggMTlweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLmZpbGVfX2ltZyB7XG4gICAgd2lkdGg6IDEwJTtcbiAgICBoZWlnaHQ6IDA7XG4gICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbn1cblxuLmZpbGVfX2luZm8ge1xuICAgIHBhZGRpbmc6IDhweCA1cHggNXB4IDM1cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZmlsZV9fdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiAjMjUyYTNiO1xuICAgIHdpZHRoOiAyMCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBwYWRkaW5nOiAwcHggN3B4O1xufVxuXG4uZmlsZV9fbWFkZXtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgY29sb3I6ICM4MDg3YTI7XG4gICAgd2lkdGg6IDE1JTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBsaW5lLWhlaWdodDogMTVweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHBhZGRpbmc6IDBweCA3cHg7XG59XG5cbi5maWxlX190aXRsZTpiZWZvcmUge1xuICAgIHdpZHRoOiAxNnB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAxMHB4O1xuICAgIHRvcDogNnB4O1xufVxuXG4uZmlsZV9fZGV0YWlscyB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGNvbG9yOiAjODA4N2EyO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgcGFkZGluZzogMHB4IDVweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICB3aWR0aDogMTAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAmLmZpbGVfX2RhdGUge1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIGNvbG9yOiAjODA4N2EyO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBwYWRkaW5nOiAwcHggNXB4O1xuICAgICAgICB3aWR0aDogMTUlO1xuICAgIH1cbiAgICAmLmZpbGVfX3NpemUge1xuICAgICAgICB3aWR0aDogMTAlO1xuICAgICAgICAmLnNtYWxse1xuICAgICAgICAgICAgY29sb3I6IGdyZWVuO1xuICAgICAgICB9XG4gICAgICAgICYubm9ybWFsIHtcbiAgICAgICAgICAgIGNvbG9yOiBibHVlO1xuICAgICAgICB9XG4gICAgICAgICYubGFyZ2Uge1xuICAgICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAmLmZpbGVfX293bmVyIHtcbiAgICAgICAgd2lkdGg6IDE1JTtcbiAgICB9XG59XG5cbi50cmVlX192aWV3IHtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBoZWlnaHQ6IDM3NXB4O1xufVxuXG4uYXVkaW8tZmlsZSAuZmlsZV9faW1nIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZmlsZV9tYW5hZ2VyL2F1ZGlvLnN2ZycpO1xufVxuXG4uZG9jLWZpbGUgLmZpbGVfX2ltZyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2ZpbGVfbWFuYWdlci9kb2N4LnBuZycpO1xufVxuXG4uZmlsZS1maWxlIC5maWxlX19pbWcge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9maWxlX21hbmFnZXIvZmlsZS5zdmcnKTtcbn1cblxuLmZvbGRlci1maWxlIC5maWxlX19pbWcge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9maWxlX21hbmFnZXIvZm9sZGVyLmpwZycpO1xufVxuXG4uaW1hZ2UtZmlsZSAuZmlsZV9faW1nIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZmlsZV9tYW5hZ2VyL2ltYWdlLnN2ZycpO1xufVxuXG4ucGRmLWZpbGUgLmZpbGVfX2ltZyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2ZpbGVfbWFuYWdlci9wZGYucG5nJyk7XG59XG5cbi50ZXh0LWZpbGUgLmZpbGVfX2ltZyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2ZpbGVfbWFuYWdlci90eHQucG5nJyk7XG59XG5cbi52aWRlby1maWxlIC5maWxlX19pbWcge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9maWxlX21hbmFnZXIvdmlkZW8uc3ZnJyk7XG59XG5cbi54bHN4LWZpbGUgLmZpbGVfX2ltZyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2ZpbGVfbWFuYWdlci94bHN4LnBuZycpO1xufVxuXG4uemlwLWZpbGUgLmZpbGVfX2ltZyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2ZpbGVfbWFuYWdlci96aXAuc3ZnJyk7XG59XG5cbi5pbWFnZSAuZmlsZV9fdGl0bGU6YmVmb3JlIHtcbiAgICBjb250ZW50OiB1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4O2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpYVhOdkxUZzROVGt0TVNJL1BnbzhJUzB0SUVkbGJtVnlZWFJ2Y2pvZ1FXUnZZbVVnU1d4c2RYTjBjbUYwYjNJZ01UZ3VNQzR3TENCVFZrY2dSWGh3YjNKMElGQnNkV2N0U1c0Z0xpQlRWa2NnVm1WeWMybHZiam9nTmk0d01DQkNkV2xzWkNBd0tTQWdMUzArQ2p3aFJFOURWRmxRUlNCemRtY2dVRlZDVEVsRElDSXRMeTlYTTBNdkwwUlVSQ0JUVmtjZ01TNHhMeTlGVGlJZ0ltaDBkSEE2THk5M2QzY3Vkek11YjNKbkwwZHlZWEJvYVdOekwxTldSeTh4TGpFdlJGUkVMM04yWnpFeExtUjBaQ0krQ2p4emRtY2dlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklpQjRiV3h1Y3pwNGJHbHVhejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TVRrNU9TOTRiR2x1YXlJZ2RtVnljMmx2YmowaU1TNHhJaUJwWkQwaVEyRndZVjh4SWlCNFBTSXdjSGdpSUhrOUlqQndlQ0lnZG1sbGQwSnZlRDBpTUNBd0lETXhOUzQxT0NBek1UVXVOVGdpSUhOMGVXeGxQU0psYm1GaWJHVXRZbUZqYTJkeWIzVnVaRHB1WlhjZ01DQXdJRE14TlM0MU9DQXpNVFV1TlRnN0lpQjRiV3c2YzNCaFkyVTlJbkJ5WlhObGNuWmxJaUIzYVdSMGFEMGlNVFp3ZUNJZ2FHVnBaMmgwUFNJeE5uQjRJajRLUEdjK0NnazhjR0YwYUNCa1BTSk5NekV3TGpVNExETXpMak16TVVnMVl5MHlMamMyTVN3d0xUVXNNaTR5TXpndE5TdzFkakl6T0M0NU1UaGpNQ3d5TGpjMk1pd3lMakl6T1N3MUxEVXNOV2d6TURVdU5UaGpNaTQzTmpNc01DdzFMVEl1TWpNNExEVXROVll6T0M0ek16RWdJQ0JETXpFMUxqVTRMRE0xTGpVMk9Td3pNVE11TXpRekxETXpMak16TVN3ek1UQXVOVGdzTXpNdU16TXhlaUJOTWpnMUxqVTRMREkwTWk0ek9EWnNMVFk0TGpjMk5pMDNNUzR5TVRSakxUQXVOell0TUM0M09EVXRNaTR3TURNdE1DNDRNell0TWk0NE1qTXRNQzR4TVRSc0xUUTNMalk1TlN3ME1TNDVOemtnSUNCc0xUWXdMamsyTWkwM05TNHdOakZqTFRBdU16azJMVEF1TkRrdE1DNDVOelV0TUM0M055MHhMall6TFRBdU56VTJZeTB3TGpZek1Td3dMakF4TXkweExqSXlMREF1TXpFMkxURXVOVGszTERBdU9ESXlURE13TERJek5DNDNPVGRXTmpNdU16TXhhREkxTlM0MU9GWXlOREl1TXpnMmVpSWdabWxzYkQwaUl6UTRPRFZtTkNJdlBnb0pQSEJoZEdnZ1pEMGlUVEl4TUM0d05Ua3NNVE0xTGpVMU5XTXhNeTQxTXpnc01Dd3lOQzQxTWprdE1UQXVPVGd5TERJMExqVXlPUzB5TkM0MU16RmpNQzB4TXk0MU5EVXRNVEF1T1RreExUSTBMalV6TXkweU5DNDFNamt0TWpRdU5UTXpJQ0FnWXkweE15NDFORGtzTUMweU5DNDFNamdzTVRBdU9UZzRMVEkwTGpVeU9Dd3lOQzQxTXpORE1UZzFMalV6TVN3eE1qUXVOVGN5TERFNU5pNDFNVEVzTVRNMUxqVTFOU3d5TVRBdU1EVTVMREV6TlM0MU5UVjZJaUJtYVd4c1BTSWpORGc0TldZMElpOCtDand2Wno0S1BHYytDand2Wno0S1BHYytDand2Wno0S1BHYytDand2Wno0S1BHYytDand2Wno0S1BHYytDand2Wno0S1BHYytDand2Wno0S1BHYytDand2Wno0S1BHYytDand2Wno0S1BHYytDand2Wno0S1BHYytDand2Wno0S1BHYytDand2Wno0S1BHYytDand2Wno0S1BHYytDand2Wno0S1BHYytDand2Wno0S1BHYytDand2Wno0S1BDOXpkbWMrQ2c9PScpO1xufVxuXG4uZm9sZGVyIC5maWxlX190aXRsZTpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sO3V0Zjg7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlhWE52TFRnNE5Ua3RNU0kvUGdvOElTMHRJRWRsYm1WeVlYUnZjam9nUVdSdlltVWdTV3hzZFhOMGNtRjBiM0lnTVRZdU1DNHdMQ0JUVmtjZ1JYaHdiM0owSUZCc2RXY3RTVzRnTGlCVFZrY2dWbVZ5YzJsdmJqb2dOaTR3TUNCQ2RXbHNaQ0F3S1NBZ0xTMCtDandoUkU5RFZGbFFSU0J6ZG1jZ1VGVkNURWxESUNJdEx5OVhNME12TDBSVVJDQlRWa2NnTVM0eEx5OUZUaUlnSW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTDBkeVlYQm9hV056TDFOV1J5OHhMakV2UkZSRUwzTjJaekV4TG1SMFpDSStDanh6ZG1jZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWlCNGJXeHVjenA0YkdsdWF6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNVGs1T1M5NGJHbHVheUlnZG1WeWMybHZiajBpTVM0eElpQnBaRDBpUTJGd1lWOHhJaUI0UFNJd2NIZ2lJSGs5SWpCd2VDSWdkMmxrZEdnOUlqRTJjSGdpSUdobGFXZG9kRDBpTVRad2VDSWdkbWxsZDBKdmVEMGlNQ0F3SURRM05TNHdPRElnTkRjMUxqQTRNaUlnYzNSNWJHVTlJbVZ1WVdKc1pTMWlZV05yWjNKdmRXNWtPbTVsZHlBd0lEQWdORGMxTGpBNE1pQTBOelV1TURneU95SWdlRzFzT25Od1lXTmxQU0p3Y21WelpYSjJaU0krQ2p4blBnb0pQSEJoZEdnZ1pEMGlUVFExTmk0eU16a3NNVEk0TGpRM05XTXRNVEl1TlRZdE1USXVOVFl5TFRJM0xqVTVOeTB4T0M0NE5ESXRORFV1TVRFdE1UZ3VPRFF5YUMweE9URXVPRFoyTFRrdU1UTTJZekF0TVRjdU5URXhMVFl1TWpnekxUTXlMalUwT0MweE9DNDRORE10TkRVdU1UQTNJQ0FnWXkweE1pNDFOakl0TVRJdU5UWXlMVEkzTGpZdE1UZ3VPRFEyTFRRMUxqRXhNUzB4T0M0NE5EWklOak11T1RVell5MHhOeTQxTVRVc01DMHpNaTQxTlRFc05pNHlPRE10TkRVdU1URXhMREU0TGpnME5rTTJMakk0TERZM0xqazBPU3d3TERneUxqazROaXd3TERFd01DNDBPVGQyTWpjMExqQTRPQ0FnSUdNd0xERTNMalV3T0N3MkxqSTRMRE15TGpVME5Td3hPQzQ0TkRJc05EVXVNVEEwWXpFeUxqVTJNaXd4TWk0MU5qVXNNamN1Tml3eE9DNDRORGtzTkRVdU1URXhMREU0TGpnME9XZ3pORGN1TVRjMVl6RTNMalV4TkN3d0xETXlMalUxTVMwMkxqSTRNeXcwTlM0eE1TMHhPQzQ0TkRrZ0lDQmpNVEl1TlRZMkxURXlMalUyTERFNExqZzBNeTB5Tnk0MU9UY3NNVGd1T0RRekxUUTFMakV3TkZZeE56TXVOVGxETkRjMUxqQTRNaXd4TlRZdU1EYzRMRFEyT0M0NE1EVXNNVFF4TGpBME1pdzBOVFl1TWpNNUxERXlPQzQwTnpWNklpQm1hV3hzUFNJalptWmpZVFExSWk4K0Nqd3ZaejRLUEdjK0Nqd3ZaejRLUEdjK0Nqd3ZaejRLUEdjK0Nqd3ZaejRLUEdjK0Nqd3ZaejRLUEdjK0Nqd3ZaejRLUEdjK0Nqd3ZaejRLUEdjK0Nqd3ZaejRLUEdjK0Nqd3ZaejRLUEdjK0Nqd3ZaejRLUEdjK0Nqd3ZaejRLUEdjK0Nqd3ZaejRLUEdjK0Nqd3ZaejRLUEdjK0Nqd3ZaejRLUEdjK0Nqd3ZaejRLUEdjK0Nqd3ZaejRLUEM5emRtYytDZz09Jyk7XG59XG5cbi5hdWRpbyAuZmlsZV9fdGl0bGU6YmVmb3JlIHtcbiAgICBjb250ZW50OiB1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4O2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpYVhOdkxUZzROVGt0TVNJL1BnbzhJUzB0SUVkbGJtVnlZWFJ2Y2pvZ1FXUnZZbVVnU1d4c2RYTjBjbUYwYjNJZ01Ua3VNQzR3TENCVFZrY2dSWGh3YjNKMElGQnNkV2N0U1c0Z0xpQlRWa2NnVm1WeWMybHZiam9nTmk0d01DQkNkV2xzWkNBd0tTQWdMUzArQ2p4emRtY2dlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklpQjRiV3h1Y3pwNGJHbHVhejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TVRrNU9TOTRiR2x1YXlJZ2RtVnljMmx2YmowaU1TNHhJaUJwWkQwaVEyRndZVjh4SWlCNFBTSXdjSGdpSUhrOUlqQndlQ0lnZG1sbGQwSnZlRDBpTUNBd0lEVTFJRFUxSWlCemRIbHNaVDBpWlc1aFlteGxMV0poWTJ0bmNtOTFibVE2Ym1WM0lEQWdNQ0ExTlNBMU5Uc2lJSGh0YkRwemNHRmpaVDBpY0hKbGMyVnlkbVVpSUhkcFpIUm9QU0l4Tm5CNElpQm9aV2xuYUhROUlqRTJjSGdpUGdvOGNHRjBhQ0JrUFNKTk5USXVOallzTUM0eU5EbGpMVEF1TWpFMkxUQXVNVGc1TFRBdU5UQXhMVEF1TWpjMUxUQXVOemc1TFRBdU1qUXhiQzB6TVN3MExqQXhNVU15TUM0ek56TXNOQzR3T0RRc01qQXNOQzQxTURjc01qQXNOUzR3TVhZMkxqQXhOM1kwTGpJeE1uWXlOUzR6T0RRZ0lFTXhPQzR4TnpRc016Z3VOREk0TERFMUxqSTNNeXd6Tnl3eE1pd3pOMk10TlM0MU1UUXNNQzB4TUN3MExqQXpOeTB4TUN3NWN6UXVORGcyTERrc01UQXNPWE14TUMwMExqQXpOeXd4TUMwNVl6QXRNQzR5TXpJdE1DNHdNVGt0TUM0ME5pMHdMakF6T1Mwd0xqWTROeUFnUXpJeExqazNOQ3cwTlM0eU5EZ3NNaklzTkRVdU1UZzVMREl5TERRMUxqRXlNVll4Tmk0eE1UaHNNamt0TXk0M05UTjJNVGd1TWpVM1F6UTVMakUzTkN3eU9DNDBNamdzTkRZdU1qY3pMREkzTERRekxESTNZeTAxTGpVeE5Dd3dMVEV3TERRdU1ETTNMVEV3TERsek5DNDBPRFlzT1N3eE1DdzVJQ0JqTlM0ME5qUXNNQ3c1TGpreE15MHpMamsyTml3NUxqazVNeTA0TGpnMk4yTXdMVEF1TURFekxEQXVNREEzTFRBdU1ESTBMREF1TURBM0xUQXVNRE0zVmpFeExqSXlOMVkzTGpBeE5sWXhRelV6TERBdU56RXlMRFV5TGpnM05pd3dMalF6T0N3MU1pNDJOaXd3TGpJME9Yb2lJR1pwYkd3OUlpTm1aalV3TkRFaUx6NEtQR2MrQ2p3dlp6NEtQR2MrQ2p3dlp6NEtQR2MrQ2p3dlp6NEtQR2MrQ2p3dlp6NEtQR2MrQ2p3dlp6NEtQR2MrQ2p3dlp6NEtQR2MrQ2p3dlp6NEtQR2MrQ2p3dlp6NEtQR2MrQ2p3dlp6NEtQR2MrQ2p3dlp6NEtQR2MrQ2p3dlp6NEtQR2MrQ2p3dlp6NEtQR2MrQ2p3dlp6NEtQR2MrQ2p3dlp6NEtQR2MrQ2p3dlp6NEtQQzl6ZG1jK0NnPT0nKVxufVxuXG4udmlkZW8gLmZpbGVfX3RpdGxlOmJlZm9yZSB7XG4gICAgY29udGVudDogdXJsKCdkYXRhOmltYWdlL3N2Zyt4bWw7dXRmODtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaWFYTnZMVGc0TlRrdE1TSS9QZ284SVMwdElFZGxibVZ5WVhSdmNqb2dRV1J2WW1VZ1NXeHNkWE4wY21GMGIzSWdNVFl1TUM0d0xDQlRWa2NnUlhod2IzSjBJRkJzZFdjdFNXNGdMaUJUVmtjZ1ZtVnljMmx2YmpvZ05pNHdNQ0JDZFdsc1pDQXdLU0FnTFMwK0Nqd2hSRTlEVkZsUVJTQnpkbWNnVUZWQ1RFbERJQ0l0THk5WE0wTXZMMFJVUkNCVFZrY2dNUzR4THk5RlRpSWdJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5MMGR5WVhCb2FXTnpMMU5XUnk4eExqRXZSRlJFTDNOMlp6RXhMbVIwWkNJK0NqeHpkbWNnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JaUI0Yld4dWN6cDRiR2x1YXowaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1UazVPUzk0YkdsdWF5SWdkbVZ5YzJsdmJqMGlNUzR4SWlCcFpEMGlRMkZ3WVY4eElpQjRQU0l3Y0hnaUlIazlJakJ3ZUNJZ2QybGtkR2c5SWpFMmNIZ2lJR2hsYVdkb2REMGlNVFp3ZUNJZ2RtbGxkMEp2ZUQwaU1DQXdJRGt3SURrd0lpQnpkSGxzWlQwaVpXNWhZbXhsTFdKaFkydG5jbTkxYm1RNmJtVjNJREFnTUNBNU1DQTVNRHNpSUhodGJEcHpjR0ZqWlQwaWNISmxjMlZ5ZG1VaVBnbzhaejRLQ1R4d1lYUm9JR2xrUFNKWmIzVlVkV0psWDE5NE1qaGZZV3gwWDNneU9WOGlJR1E5SWswNU1Dd3lOaTQ1TlRoRE9UQXNNVGt1TlRJMUxEZ3pMamszT1N3eE15NDFMRGMyTGpVMUxERXpMalZvTFRZekxqRkROaTR3TWpFc01UTXVOU3d3TERFNUxqVXlOU3d3TERJMkxqazFPSFl6Tmk0d09EUWdJQ0JETUN3M01DNDBOelVzTmk0d01qRXNOell1TlN3eE15NDBOU3czTmk0MWFEWXpMakZET0RNdU9UYzVMRGMyTGpVc09UQXNOekF1TkRjMUxEa3dMRFl6TGpBME1sWXlOaTQ1TlRoNklFMHpOaXcyTUM0eU1qVldNall1TXpOc01qVXVOekF5TERFMkxqazBOMHd6Tml3Mk1DNHlNalY2SWlCbWFXeHNQU0lqT1RrM01tWmxJaTgrQ2p3dlp6NEtQR2MrQ2p3dlp6NEtQR2MrQ2p3dlp6NEtQR2MrQ2p3dlp6NEtQR2MrQ2p3dlp6NEtQR2MrQ2p3dlp6NEtQR2MrQ2p3dlp6NEtQR2MrQ2p3dlp6NEtQR2MrQ2p3dlp6NEtQR2MrQ2p3dlp6NEtQR2MrQ2p3dlp6NEtQR2MrQ2p3dlp6NEtQR2MrQ2p3dlp6NEtQR2MrQ2p3dlp6NEtQR2MrQ2p3dlp6NEtQR2MrQ2p3dlp6NEtQQzl6ZG1jK0NnPT0nKVxufVxuXG4ucGRmIC5maWxlX190aXRsZTpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sO3V0Zjg7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlhWE52TFRnNE5Ua3RNU0kvUGcwS1BDRXRMU0JIWlc1bGNtRjBiM0k2SUVGa2IySmxJRWxzYkhWemRISmhkRzl5SURFNUxqQXVNQ3dnVTFaSElFVjRjRzl5ZENCUWJIVm5MVWx1SUM0Z1UxWkhJRlpsY25OcGIyNDZJRFl1TURBZ1FuVnBiR1FnTUNrZ0lDMHRQZzBLUEhOMlp5QjJaWEp6YVc5dVBTSXhMakVpSUdsa1BTSk1ZWGxsY2w4eElpQjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUlIaHRiRzV6T25oc2FXNXJQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh4T1RrNUwzaHNhVzVySWlCNFBTSXdjSGdpSUhrOUlqQndlQ0lOQ2drZ2RtbGxkMEp2ZUQwaU1DQXdJRFV4TWlBMU1USWlJSE4wZVd4bFBTSmxibUZpYkdVdFltRmphMmR5YjNWdVpEcHVaWGNnTUNBd0lEVXhNaUExTVRJN0lpQjRiV3c2YzNCaFkyVTlJbkJ5WlhObGNuWmxJajROQ2p4d1lYUm9JSE4wZVd4bFBTSm1hV3hzT2lORk1rVTFSVGM3SWlCa1BTSk5NVEk0TERCakxURTNMallzTUMwek1pd3hOQzQwTFRNeUxETXlkalEwT0dNd0xERTNMallzTVRRdU5Dd3pNaXd6TWl3ek1tZ3pNakJqTVRjdU5pd3dMRE15TFRFMExqUXNNekl0TXpKV01USTRURE0xTWl3d1NERXlPSG9pTHo0TkNqeHdZWFJvSUhOMGVXeGxQU0ptYVd4c09pTkNNRUkzUWtRN0lpQmtQU0pOTXpnMExERXlPR2c1Tmt3ek5USXNNSFk1TmtNek5USXNNVEV6TGpZc016WTJMalFzTVRJNExETTROQ3d4TWpoNklpOCtEUW84Y0c5c2VXZHZiaUJ6ZEhsc1pUMGlabWxzYkRvalEwRkVNVVE0T3lJZ2NHOXBiblJ6UFNJME9EQXNNakkwSURNNE5Dd3hNamdnTkRnd0xERXlPQ0FpTHo0TkNqeHdZWFJvSUhOMGVXeGxQU0ptYVd4c09pTkdNVFUyTkRJN0lpQmtQU0pOTkRFMkxEUXhObU13TERndU9DMDNMaklzTVRZdE1UWXNNVFpJTkRoakxUZ3VPQ3d3TFRFMkxUY3VNaTB4TmkweE5sWXlOVFpqTUMwNExqZ3NOeTR5TFRFMkxERTJMVEUyYURNMU1tTTRMamdzTUN3eE5pdzNMaklzTVRZc01UWU5DZ2xXTkRFMmVpSXZQZzBLUEdjK0RRb0pQSEJoZEdnZ2MzUjViR1U5SW1acGJHdzZJMFpHUmtaR1Jqc2lJR1E5SWsweE1ERXVOelEwTERNd015NHhOVEpqTUMwMExqSXlOQ3d6TGpNeU9DMDRMamd6TWl3NExqWTRPQzA0TGpnek1tZ3lPUzQxTlRKak1UWXVOalFzTUN3ek1TNDJNVFlzTVRFdU1UTTJMRE14TGpZeE5pd3pNaTQwT0EwS0NRbGpNQ3d5TUM0eU1qUXRNVFF1T1RjMkxETXhMalE0T0Mwek1TNDJNVFlzTXpFdU5EZzRhQzB5TVM0ek5uWXhOaTQ0T1Raak1DdzFMall6TWkwekxqVTROQ3c0TGpneE5pMDRMakU1TWl3NExqZ3hObU10TkM0eU1qUXNNQzA0TGpZNE9DMHpMakU0TkMwNExqWTRPQzA0TGpneE5sWXpNRE11TVRVeWVnMEtDUWtnVFRFeE9DNDJNalFzTXpFd0xqUXpNbll6TVM0NE56Sm9NakV1TXpaak9DNDFOellzTUN3eE5TNHpOaTAzTGpVMk9Dd3hOUzR6TmkweE5TNDFNRFJqTUMwNExqazBOQzAyTGpjNE5DMHhOaTR6TmpndE1UVXVNell0TVRZdU16WTRTREV4T0M0Mk1qUjZJaTgrRFFvSlBIQmhkR2dnYzNSNWJHVTlJbVpwYkd3NkkwWkdSa1pHUmpzaUlHUTlJazB4T1RZdU5qVTJMRE00TkdNdE5DNHlNalFzTUMwNExqZ3pNaTB5TGpNd05DMDRMamd6TWkwM0xqa3lkaTAzTWk0Mk56SmpNQzAwTGpVNU1pdzBMall3T0MwM0xqa3pOaXc0TGpnek1pMDNMamt6Tm1neU9TNHlPVFlOQ2drSll6VTRMalEyTkN3d0xEVTNMakU0TkN3NE9DNDFNamdzTVM0eE5USXNPRGd1TlRJNFNERTVOaTQyTlRaNklFMHlNRFF1TnpJc016RXhMakE0T0ZZek5qZ3VOR2d5TVM0eU16SmpNelF1TlRRMExEQXNNell1TURndE5UY3VNekV5TERBdE5UY3VNekV5U0RJd05DNDNNbm9pTHo0TkNnazhjR0YwYUNCemRIbHNaVDBpWm1sc2JEb2pSa1pHUmtaR095SWdaRDBpVFRNd015NDROeklzTXpFeUxqRXhNbll5TUM0ek16Wm9Nekl1TmpJMFl6UXVOakE0TERBc09TNHlNVFlzTkM0Mk1EZ3NPUzR5TVRZc09TNHdOekpqTUN3MExqSXlOQzAwTGpZd09DdzNMalk0TFRrdU1qRTJMRGN1TmpnTkNna0phQzB6TWk0Mk1qUjJNall1T0RZMFl6QXNOQzQwT0MwekxqRTROQ3czTGpreUxUY3VOalkwTERjdU9USmpMVFV1TmpNeUxEQXRPUzR3TnpJdE15NDBOQzA1TGpBM01pMDNMamt5ZGkwM01pNDJOekpqTUMwMExqVTVNaXd6TGpRMU5pMDNMamt6Tml3NUxqQTNNaTAzTGprek5tZzBOQzQ1TVRJTkNna0pZelV1TmpNeUxEQXNPQzQ1Tml3ekxqTTBOQ3c0TGprMkxEY3VPVE0yWXpBc05DNHdPVFl0TXk0ek1qZ3NPQzQzTURRdE9DNDVOaXc0TGpjd05HZ3RNemN1TWpRNFZqTXhNaTR4TVRKNklpOCtEUW84TDJjK0RRbzhjR0YwYUNCemRIbHNaVDBpWm1sc2JEb2pRMEZFTVVRNE95SWdaRDBpVFRRd01DdzBNekpJT1RaMk1UWm9NekEwWXpndU9Dd3dMREUyTFRjdU1pd3hOaTB4Tm5ZdE1UWkROREUyTERReU5DNDRMRFF3T0M0NExEUXpNaXcwTURBc05ETXllaUl2UGcwS1BHYytEUW84TDJjK0RRbzhaejROQ2p3dlp6NE5DanhuUGcwS1BDOW5QZzBLUEdjK0RRbzhMMmMrRFFvOFp6NE5Dand2Wno0TkNqeG5QZzBLUEM5blBnMEtQR2MrRFFvOEwyYytEUW84Wno0TkNqd3ZaejROQ2p4blBnMEtQQzluUGcwS1BHYytEUW84TDJjK0RRbzhaejROQ2p3dlp6NE5DanhuUGcwS1BDOW5QZzBLUEdjK0RRbzhMMmMrRFFvOFp6NE5Dand2Wno0TkNqeG5QZzBLUEM5blBnMEtQQzl6ZG1jK0RRbz0nKVxufVxuXG4uZG9jeCAuZmlsZV9fdGl0bGU6YmVmb3JlIHtcbiAgICBjb250ZW50OiB1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4O2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpYVhOdkxUZzROVGt0TVNJL1BnMEtQQ0V0TFNCSFpXNWxjbUYwYjNJNklFRmtiMkpsSUVsc2JIVnpkSEpoZEc5eUlERTVMakF1TUN3Z1UxWkhJRVY0Y0c5eWRDQlFiSFZuTFVsdUlDNGdVMVpISUZabGNuTnBiMjQ2SURZdU1EQWdRblZwYkdRZ01Da2dJQzB0UGcwS1BITjJaeUIyWlhKemFXOXVQU0l4TGpFaUlHbGtQU0pNWVhsbGNsOHhJaUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lJSGh0Ykc1ek9uaHNhVzVyUFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eE9UazVMM2hzYVc1cklpQjRQU0l3Y0hnaUlIazlJakJ3ZUNJTkNna2dkbWxsZDBKdmVEMGlNQ0F3SURVeE1pQTFNVElpSUhOMGVXeGxQU0psYm1GaWJHVXRZbUZqYTJkeWIzVnVaRHB1WlhjZ01DQXdJRFV4TWlBMU1USTdJaUI0Yld3NmMzQmhZMlU5SW5CeVpYTmxjblpsSWo0TkNqeHdiMng1WjI5dUlITjBlV3hsUFNKbWFXeHNPaU5GTWtVeVJUSTdJaUJ3YjJsdWRITTlJak16T0M0NE5UWXNNQ0EwTkRVdU9EZ3NNVEEzTGpBeU5DQTBORFV1T0Rnc05URXlJRFU1TGpJMExEVXhNaUExT1M0eU5Dd3dJQ0l2UGcwS1BIQnZiSGxuYjI0Z2MzUjViR1U5SW1acGJHdzZJems1T1RrNU9Uc2lJSEJ2YVc1MGN6MGlORFExTGpnNExERXdOeTR3TWpRZ016TTRMamcwTERFd055NHdNalFnTXpNNExqZzBMREFnSWk4K0RRbzhjRzlzZVdkdmJpQnpkSGxzWlQwaVptbHNiRG9qTXpNek16TXpPeUlnY0c5cGJuUnpQU0kwTURjdU5USTRMRFF5TWk0NE9UWWdNakl1TURRc05ESXlMamc1TmlBeU1pNHdOQ3d5T1RNdU1EQTRJRFE0T1M0NU5pd3lPVE11TURBNElDSXZQZzBLUEhCdmJIbG5iMjRnYzNSNWJHVTlJbVpwYkd3Nkl6azVPVGs1T1RzaUlIQnZhVzUwY3owaU5Ua3VNalFzTkRZd0xqQTRJRFU1TGpJMExEUXlNaTQ0T1RZZ01qSXVNRFFzTkRJeUxqZzVOaUFpTHo0TkNqeG5QZzBLQ1R4d1lYUm9JSE4wZVd4bFBTSm1hV3hzT2lOR1JrWkdSa1k3SWlCa1BTSk5PRGN1T0RZMExETTVOUzQwTlRaV016SXdMamhvTXpZdU56QTBZekV3TGpReE5pd3dMREUzTGpjeE1pd3lMakk0T0N3eU1TNDRPRGdzTmk0NE5EZ05DZ2tKWXpRdU1Ua3lMRFF1TlRZc05pNHlOeklzTVRJdU5UUTBMRFl1TWpjeUxESXpMamsxTW1Nd0xERTRMall5TkMweExqWTJOQ3d6TUM0MU9USXROUzR3TWpRc016VXVPVEEwWXkwekxqTTBOQ3cxTGpJNU5pMHhNQzQ1TWpnc055NDVOVEl0TWpJdU5qZzRMRGN1T1RVeVREZzNMamcyTkN3ek9UVXVORFUyRFFvSkNVdzROeTQ0TmpRc016azFMalExTm5vZ1RURXdNaTR3TkN3ek9ETXVOVE0yYURJd0xqRTNObU0yTGpjNE5Dd3dMREV4TGpFMk9DMHhMalUyT0N3eE15NHhOVEl0TkM0Mk56SmpNUzQ1T0RRdE15NHhNaXd5TGprNU1pMHhNQ3d5TGprNU1pMHlNQzQyTlRZTkNna0pZekF0TVRFdU1EQTRMVEF1T0RrMkxURTRMVEl1TmpnNExUSXdMams1TW1NdE1TNDNOell0TWk0NU9USXROUzQ1TmpndE5DNDBOalF0TVRJdU5UYzJMVFF1TkRZMFNERXdNaTR3TkZZek9ETXVOVE0yZWlJdlBnMEtDVHh3WVhSb0lITjBlV3hsUFNKbWFXeHNPaU5HUmtaR1JrWTdJaUJrUFNKTk1UazBMakEzTWl3ek1qQXVNVFEwWXpFekxqVTJPQ3d3TERJeUxqTXdOQ3d5TGpJM01pd3lOaTR5TURnc05pNDNOamhqTXk0NE9EZ3NOQzQwT1RZc05TNDROQ3d4TkM0MU56WXNOUzQ0TkN3ek1DNHlNRGdOQ2drSll6QXNNVGN1TVRBMExURXVPVFV5TERJM0xqZzNNaTAxTGpnM01pd3pNaTR6TXpaakxUTXVPVElzTkM0ME5qUXRNVE11TkRBNExEWXVOamN5TFRJNExqUTJOQ3cyTGpZM01tTXRNVE11TlRZNExEQXRNakl1TXpNMkxUSXVNakE0TFRJMkxqTXdOQzAyTGpVNU1nMEtDUWxqTFRNdU9UZzBMVFF1TXpnMExUVXVPVFk0TFRFMExqQTJOQzAxTGprMk9DMHlPQzQ1T1RKak1DMHhOeTQzT1RJc01TNDVOVEl0TWpndU9UYzJMRFV1T0RVMkxUTXpMalV6TmtNeE5qa3VNalUyTERNeU1pNDBNVFlzTVRjNExqZzBMRE15TUM0eE5EUXNNVGswTGpBM01pd3pNakF1TVRRMGVnMEtDUWtnVFRFNU1pNDVOamdzTXpNeUxqTXdOR010T1M0MU1pd3dMVEUxTGpBM01pd3hMakl4TmkweE5pNDJOeklzTXk0Mk5qUmpMVEV1TmpFMkxESXVORE15TFRJdU5Dd3hNQzQ1TVRJdE1pNDBMREkxTGpNM05tTXdMREV3TGpjeUxEQXVPVFEwTERFM0xqRTJPQ3d5TGpneE5pd3hPUzR6TmcwS0NRbGpNUzQ0TnpJc01pNHhPVElzTnk0ME1EZ3NNeTR5T0N3eE5pNDFPVElzTXk0eU9HTTRMamdzTUN3eE5DNHdOalF0TVM0eU16SXNNVFV1T0RBNExUTXVOamhqTVM0M05EUXRNaTQwTmpRc01pNDJNalF0T1M0NU1pd3lMall5TkMweU1pNHpPRFFOQ2drSll6QXRNVEl1TlRFeUxUQXVPRE15TFRFNUxqa3dOQzB5TGpRNExUSXlMakU1TWtNeU1EY3VOVGt5TERNek15NDBNalFzTWpBeUxqRTJPQ3d6TXpJdU16QTBMREU1TWk0NU5qZ3NNek15TGpNd05Ib2lMejROQ2drOGNHRjBhQ0J6ZEhsc1pUMGlabWxzYkRvalJrWkdSa1pHT3lJZ1pEMGlUVEk0TVM0M05qZ3NNelk0TGpnek1tZ3hOQzR5TWpSMk1pNDFObU13TERFd0xqTTROQzB4TGpnM01pd3hOeTR4TURRdE5TNDJPQ3d5TUM0eE5tTXRNeTQzTnpZc015NHdOQzB4TWk0eE5pdzBMalUyTFRJMUxqRTFNaXcwTGpVMkRRb0pDV010TVRRdU56QTBMREF0TWpNdU56WXRNaTQwTFRJM0xqRTFNaTAzTGpJeE5uTXROUzR3T0RndE1UY3VOamd0TlM0d09EZ3RNemd1TmpBNFl6QXRNVEl1TXpNMkxESXVNekEwTFRJd0xqUXhOaXcyTGpnNU5pMHlOQzR6TWcwS0NRbGpOQzQxT1RJdE15NDROeklzTVRRdU1qQTRMVFV1T0RJMExESTRMamd6TWkwMUxqZ3lOR014TUM0Mk1qUXNNQ3d4Tnk0M05EUXNNUzQyTVRZc01qRXVNekV5TERRdU9HTXpMallzTXk0eE9EUXNOUzR6TnpZc09TNDFNaXcxTGpNM05pd3hPUzR3TURoc01DNHdNeklzTVM0Mk9UWm9MVEUwTGpJeU5BMEtDUWwyTFRFdU9USmpNQzAwTGpnNU5pMHdMamt4TWkwNExqQXhOaTB5TGpjMU1pMDVMak0zTm1NdE1TNDROQzB4TGpNM05pMDJMakF6TWkweUxqQTBPQzB4TWk0MU9USXRNaTR3TkRoakxUZ3VPQ3d3TFRFMExqQTJOQ3d4TGpBMU5pMHhOUzQ0TWpRc015NHlNVFlOQ2drSll5MHhMamMzTml3eUxqRTJMVEl1TmpVMkxEZ3VOVEk0TFRJdU5qVTJMREU1TGpFek5tTXdMREUwTGpNd05Dd3dMamdzTWpJdU56VXlMREl1TXpZNExESTFMak0zTm1NeExqWXNNaTQyTWpRc05pNDNNRFFzTXk0NU16WXNNVFV1TXpreUxETXVPVE0yRFFvSkNXTTNMakF5TkN3d0xERXhMall0TUM0M016WXNNVE11TmpndE1pNHhPVEp6TXk0eE5USXROQzQyTnpJc015NHhOVEl0T1M0Mk16Sk1Namd4TGpjMk9Dd3pOamd1T0RNeWVpSXZQZzBLQ1R4d1lYUm9JSE4wZVd4bFBTSm1hV3hzT2lOR1JrWkdSa1k3SWlCa1BTSk5NelkzTGpneE5pd3pNakF1T0V3ek5EVXVOQ3d6TlRZdU9UWnNNak11T1RBMExETTRMalE1Tmtnek5USXVOamhzTFRFd0xqY3lMVEUzTGprek5nMEtDUWxqTFRFdU5qWTBMVEl1TnpZNExUTXVNakUyTFRVdU5UZzBMVFF1TnpJdE9DNDBNVFpzTFRFdU5UTTJMVEl1T1Rac0xURXVOVGcwTFRJdU9URXlhQzB3TGpJeU5Hd3RNUzQxT0RRc01pNDVOelpqTFRFdU9UQTBMRE11TlRZNExUUXVNRFkwTERjdU16UTBMVFl1TkRZMExERXhMak14TWcwS0NRbHNMVEV3TGpjMk9Dd3hOeTQ1TXpab0xURTNMakExTm13eU5DNDBPVFl0TXpndU5EazJiQzB5TWk0M05USXRNell1TVRab01UWXVPRGsyYkRrdU9UWTRMREUyTGpZeU5HTXhMalUyT0N3eUxqWXlOQ3d6TGpBeU5DdzFMakl4Tml3MExqUXhOaXczTGpjM05td3hMak0yTERJdU5qSTBEUW9KQ1d3eExqTTNOaXd5TGpZeU5HZ3dMakl5TkdNd0xqWXlOQzB4TGpFMk9Dd3hMakEzTWkweUxqQTBPQ3d4TGpNM05pMHlMall5Tkd3eExqTTJMVEl1TlRjMll6RXVNVFk0TFRJdU1qY3lMREl1TmpJMExUUXVPRFE0TERRdU16WTRMVGN1Tnpac09TNDVOVEl0TVRZdU5qZzREUW9KQ1V3ek5qY3VPREUyTERNeU1DNDRURE0yTnk0NE1UWXNNekl3TGpoNklpOCtEUW84TDJjK0RRbzhaejROQ2p3dlp6NE5DanhuUGcwS1BDOW5QZzBLUEdjK0RRbzhMMmMrRFFvOFp6NE5Dand2Wno0TkNqeG5QZzBLUEM5blBnMEtQR2MrRFFvOEwyYytEUW84Wno0TkNqd3ZaejROQ2p4blBnMEtQQzluUGcwS1BHYytEUW84TDJjK0RRbzhaejROQ2p3dlp6NE5DanhuUGcwS1BDOW5QZzBLUEdjK0RRbzhMMmMrRFFvOFp6NE5Dand2Wno0TkNqeG5QZzBLUEM5blBnMEtQR2MrRFFvOEwyYytEUW84TDNOMlp6NE5DZz09Jylcbn1cblxuLnhsc3ggLmZpbGVfX3RpdGxlOmJlZm9yZSB7XG4gICAgY29udGVudDogdXJsKCdkYXRhOmltYWdlL3N2Zyt4bWw7dXRmODtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaWFYTnZMVGc0TlRrdE1TSS9QZzBLUENFdExTQkhaVzVsY21GMGIzSTZJRUZrYjJKbElFbHNiSFZ6ZEhKaGRHOXlJREU1TGpBdU1Dd2dVMVpISUVWNGNHOXlkQ0JRYkhWbkxVbHVJQzRnVTFaSElGWmxjbk5wYjI0NklEWXVNREFnUW5WcGJHUWdNQ2tnSUMwdFBnMEtQSE4yWnlCMlpYSnphVzl1UFNJeExqRWlJR2xrUFNKTVlYbGxjbDh4SWlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpSUhodGJHNXpPbmhzYVc1clBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHhPVGs1TDNoc2FXNXJJaUI0UFNJd2NIZ2lJSGs5SWpCd2VDSU5DZ2tnZG1sbGQwSnZlRDBpTUNBd0lEVXhNaUExTVRJaUlITjBlV3hsUFNKbGJtRmliR1V0WW1GamEyZHliM1Z1WkRwdVpYY2dNQ0F3SURVeE1pQTFNVEk3SWlCNGJXdzZjM0JoWTJVOUluQnlaWE5sY25abElqNE5DanhuUGcwS0NUeG5QZzBLQ1FrOGNHRjBhQ0JrUFNKTk5ETTVMalkxT0N3NU1TNHlNVXd6TlRFdU5ETTFMREl1T1RnM1F6TTBPUzQxTWpJc01TNHdOelVzTXpRMkxqa3lPQ3d3TERNME5DNHlNak1zTUVnM09TNDFOVFJqTFRVdU5qTXpMREF0TVRBdU1UazVMRFF1TlRZMkxURXdMakU1T1N3eE1DNHhPVGwyTkRreExqWXdNZzBLQ1FrSll6QXNOUzQyTXpNc05DNDFOallzTVRBdU1UazVMREV3TGpFNU9Td3hNQzR4T1Rsb016VXlMamc1TW1NMUxqWXpNaXd3TERFd0xqRTVPUzAwTGpVMk5pd3hNQzR4T1RrdE1UQXVNVGs1VmprNExqUXlNZzBLQ1FrSlF6UTBNaTQyTkRVc09UVXVOekUzTERRME1TNDFOeXc1TXk0eE1qTXNORE01TGpZMU9DdzVNUzR5TVhvZ1RUTTFOQzQwTWpJc016UXVPREl6YkRVekxqUXdNU3cxTXk0MGFDMDFNeTQwTURGV016UXVPREl6ZWlCTk5ESXlMakkwTnl3ME9URXVOakF5U0RnNUxqYzFNMVl5TUM0ek9UZ05DZ2tKQ1dneU5EUXVNamN4ZGpjNExqQXlOR013TERVdU5qTXpMRFF1TlRZM0xERXdMakU1T1N3eE1DNHhPVGtzTVRBdU1UazVhRGM0TGpBeU5GWTBPVEV1TmpBeWVpSXZQZzBLQ1R3dlp6NE5Dand2Wno0TkNqeG5QZzBLQ1R4blBnMEtDUWs4Y0dGMGFDQmtQU0pOTWpneUxqQXhNaXcwTlRRdU9EZzBTREV4T1M0ek16RmpMVFV1TmpNekxEQXRNVEF1TVRrNUxEUXVOVFkyTFRFd0xqRTVPU3d4TUM0eE9UbHpOQzQxTmpZc01UQXVNVGs1TERFd0xqRTVPU3d4TUM0eE9UbG9NVFl5TGpZNE1RMEtDUWtKWXpVdU5qTXlMREFzTVRBdU1UazVMVFF1TlRZMkxERXdMakU1T1MweE1DNHhPVGxUTWpnM0xqWTBOQ3cwTlRRdU9EZzBMREk0TWk0d01USXNORFUwTGpnNE5Ib2lMejROQ2drOEwyYytEUW84TDJjK0RRbzhaejROQ2drOFp6NE5DZ2tKUEhCaGRHZ2daRDBpVFRNek5DNHdNallzTkRVMExqZzROR2d0TVRFdU1EWTNZeTAxTGpZek1pd3dMVEV3TGpFNU9TdzBMalUyTmkweE1DNHhPVGtzTVRBdU1UazVjelF1TlRZM0xERXdMakU1T1N3eE1DNHhPVGtzTVRBdU1UazVhREV4TGpBMk53MEtDUWtKWXpVdU5qTXlMREFzTVRBdU1UazVMVFF1TlRZMkxERXdMakU1T1MweE1DNHhPVGxUTXpNNUxqWTFPQ3cwTlRRdU9EZzBMRE16TkM0d01qWXNORFUwTGpnNE5Ib2lMejROQ2drOEwyYytEUW84TDJjK0RRbzhaejROQ2drOFp6NE5DZ2tKUEhCaGRHZ2daRDBpVFRNeE1TNDJMREkyTXk0eE16bHNOelV1TnpNM0xUa3pMalV6TkdNeUxqUTNNeTB6TGpBMU5pd3lMamszTWkwM0xqSTJNU3d4TGpJM09DMHhNQzQ0TURsakxURXVOamt5TFRNdU5UUTVMVFV1TWpjMExUVXVPREE0TFRrdU1qQTFMVFV1T0RBNGFDMDROQzQ1TlRJTkNna0pDV010TXk0d056Z3NNQzAxTGprNUxERXVNemc1TFRjdU9USTJMRE11TnpneFRESTFOaXd4T1RRdU5EYzFiQzB6TUM0MU16SXRNemN1TnpBMll5MHhMamt6TmkweUxqTTVNaTAwTGpnME9TMHpMamM0TVMwM0xqa3lOaTB6TGpjNE1VZ3hNekl1TlRrTkNna0pDV010TXk0NU16RXNNQzAzTGpVeE15d3lMakkxT1MwNUxqSXdOaXcxTGpnd09HTXRNUzQyT1RNc015NDFORGd0TVM0eE9UUXNOeTQzTlRRc01TNHlOemtzTVRBdU9EQTViRGMxTGpjek55dzVNeTQxTXpSc0xUYzFMamN6Tnl3NU15NDFNelFOQ2drSkNXTXRNaTQwTnpRc015NHdOVFl0TWk0NU56SXNOeTR5TmpFdE1TNHlOemtzTVRBdU9EQTVZekV1TmprekxETXVOVFE0TERVdU1qYzBMRFV1T0RBNExEa3VNakEyTERVdU9EQTRhRGcwTGprMU1tTXpMakEzTnl3d0xEVXVPVGt0TVM0ek9Ea3NOeTQ1TWpZdE15NDNPREZNTWpVMkxETXpNUzQ0TURRTkNna0pDV3d6TUM0MU16RXNNemN1TnpBMll6RXVPVE0yTERJdU16a3lMRFF1T0RRNUxETXVOemd4TERjdU9USTJMRE11TnpneGFEZzBMamsxTTJNekxqa3pNU3d3TERjdU5URXpMVEl1TWpVNUxEa3VNakExTFRVdU9EQTREUW9KQ1Fsak1TNDJPVE10TXk0MU5EZ3NNUzR4T1RVdE55NDNOVFF0TVM0eU56a3RNVEF1T0RBNVRETXhNUzQyTERJMk15NHhNemw2SUUweU9Ua3VNekl6TERFM015NHpPRFpvTlRndU56QTJiQzAxT1M0MU5UTXNOek11TlRRMWJDMHlPUzR6TlRJdE16WXVNalZNTWprNUxqTXlNeXd4TnpNdU16ZzJlZzBLQ1FrSklFMHlNVEl1TmpjM0xETTFNaTQ0T1RKb0xUVTRMamN3Tm13MU9TNDFOVEl0TnpNdU5UUTFiREk1TGpNMU1pd3pOaTR5TlV3eU1USXVOamMzTERNMU1pNDRPVEo2SUUweU9Ua3VNekl6TERNMU1pNDRPVEpNTVRVekxqazNNU3d4TnpNdU16ZzJhRFU0TGpjd05td3hORFV1TXpVeExERTNPUzQxTURZTkNna0pDVWd5T1RrdU16SXplaUl2UGcwS0NUd3ZaejROQ2p3dlp6NE5DanhuUGcwS1BDOW5QZzBLUEdjK0RRbzhMMmMrRFFvOFp6NE5Dand2Wno0TkNqeG5QZzBLUEM5blBnMEtQR2MrRFFvOEwyYytEUW84Wno0TkNqd3ZaejROQ2p4blBnMEtQQzluUGcwS1BHYytEUW84TDJjK0RRbzhaejROQ2p3dlp6NE5DanhuUGcwS1BDOW5QZzBLUEdjK0RRbzhMMmMrRFFvOFp6NE5Dand2Wno0TkNqeG5QZzBLUEM5blBnMEtQR2MrRFFvOEwyYytEUW84Wno0TkNqd3ZaejROQ2p3dmMzWm5QZzBLJylcbn1cblxuLnppcCAuZmlsZV9fdGl0bGU6YmVmb3JlIHtcbiAgICBjb250ZW50OiB1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4O2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpYVhOdkxUZzROVGt0TVNJL1BnMEtQQ0V0TFNCSFpXNWxjbUYwYjNJNklFRmtiMkpsSUVsc2JIVnpkSEpoZEc5eUlERTRMakF1TUN3Z1UxWkhJRVY0Y0c5eWRDQlFiSFZuTFVsdUlDNGdVMVpISUZabGNuTnBiMjQ2SURZdU1EQWdRblZwYkdRZ01Da2dJQzB0UGcwS1BDRkVUME5VV1ZCRklITjJaeUJRVlVKTVNVTWdJaTB2TDFjelF5OHZSRlJFSUZOV1J5QXhMakV2TDBWT0lpQWlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZSM0poY0docFkzTXZVMVpITHpFdU1TOUVWRVF2YzNabk1URXVaSFJrSWo0TkNqeHpkbWNnZG1WeWMybHZiajBpTVM0eElpQnBaRDBpUTJGd1lWOHhJaUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lJSGh0Ykc1ek9uaHNhVzVyUFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eE9UazVMM2hzYVc1cklpQjRQU0l3Y0hnaUlIazlJakJ3ZUNJTkNna2dkbWxsZDBKdmVEMGlNQ0F3SURVMklEVTJJaUJ6ZEhsc1pUMGlaVzVoWW14bExXSmhZMnRuY205MWJtUTZibVYzSURBZ01DQTFOaUExTmpzaUlIaHRiRHB6Y0dGalpUMGljSEpsYzJWeWRtVWlQZzBLUEdjK0RRb0pQSEJoZEdnZ2MzUjViR1U5SW1acGJHdzZJMFU1UlRsRk1Ec2lJR1E5SWswek5pNDVPRFVzTUVnM0xqazJNME0zTGpFMU5Td3dMRFl1TlN3d0xqWTFOU3cyTGpVc01TNDVNalpXTlRWak1Dd3dMak0wTlN3d0xqWTFOU3d4TERFdU5EWXpMREZvTkRBdU1EYzBEUW9KQ1dNd0xqZ3dPQ3d3TERFdU5EWXpMVEF1TmpVMUxERXVORFl6TFRGV01USXVPVGM0WXpBdE1DNDJPVFl0TUM0d09UTXRNQzQ1TWkwd0xqSTFOeTB4TGpBNE5Vd3pOeTQyTURjc01DNHlOVGRETXpjdU5EUXlMREF1TURrekxETTNMakl4T0N3d0xETTJMams0TlN3d2VpSXZQZzBLQ1R4d2IyeDVaMjl1SUhOMGVXeGxQU0ptYVd4c09pTkVPVVEzUTBFN0lpQndiMmx1ZEhNOUlqTTNMalVzTUM0eE5URWdNemN1TlN3eE1pQTBPUzR6TkRrc01USWdDU0l2UGcwS0NUeHdZWFJvSUhOMGVXeGxQU0ptYVd4c09pTTFOVFl3T0RBN0lpQmtQU0pOTkRndU1ETTNMRFUyU0RjdU9UWXpRemN1TVRVMUxEVTJMRFl1TlN3MU5TNHpORFVzTmk0MUxEVTBMalV6TjFZek9XZzBNM1l4TlM0MU16ZERORGt1TlN3MU5TNHpORFVzTkRndU9EUTFMRFUyTERRNExqQXpOeXcxTm5vaUx6NE5DZ2s4Wno0TkNna0pQSEJoZEdnZ2MzUjViR1U5SW1acGJHdzZJMFpHUmtaR1Jqc2lJR1E5SWsweU5TNHlOallzTkRJdU9USTBkakV1TXpJMmJDMDBMamM1T1N3M0xqSXdOV3d0TUM0eU56TXNNQzR5TVRsb05TNHdOekpXTlROb0xUWXVOams1ZGkweExqTXlObXcwTGpjNU9TMDNMakl3Tld3d0xqSTROeTB3TGpJeE9RMEtDUWtKYUMwMUxqQTRObll0TVM0ek1qWklNalV1TWpZMmVpSXZQZzBLQ1FrOGNHRjBhQ0J6ZEhsc1pUMGlabWxzYkRvalJrWkdSa1pHT3lJZ1pEMGlUVEk1TGpJM01TdzFNMmd0TVM0Mk5qaFdOREl1T1RJMGFERXVOalk0VmpVemVpSXZQZzBLQ1FrOGNHRjBhQ0J6ZEhsc1pUMGlabWxzYkRvalJrWkdSa1pHT3lJZ1pEMGlUVE16TGpReE5DdzFNMmd0TVM0Mk5ERldOREl1T1RJMGFESXVPRGs0WXpBdU5ESTRMREFzTUM0NE5USXNNQzR3Tmpnc01TNHlOekVzTUM0eU1EVU5DZ2tKQ1dNd0xqUXhPU3d3TGpFek55d3dMamM1TlN3d0xqTTBNaXd4TGpFeU9Dd3dMall4TldNd0xqTXpNeXd3TGpJM015d3dMall3TWl3d0xqWXdOQ3d3TGpnd055d3dMams1TVhNd0xqTXdPQ3d3TGpneU1pd3dMak13T0N3eExqTXdOZzBLQ1FrSll6QXNNQzQxTVRFdE1DNHdPRGNzTUM0NU56TXRNQzR5Tml3eExqTTRPR010TUM0eE56TXNNQzQwTVRVdE1DNDBNVFVzTUM0M05qUXRNQzQzTWpVc01TNHdORFpqTFRBdU16RXNNQzR5T0RJdE1DNDJPRFFzTUM0MU1ERXRNUzR4TWpFc01DNDJOVFlOQ2drSkNYTXRNQzQ1TWpFc01DNHlNekl0TVM0ME5Ea3NNQzR5TXpKb0xURXVNakUzVmpVemVpQk5Nek11TkRFMExEUTBMakUyT0hZekxqazVNbWd4TGpVd05HTXdMaklzTUN3d0xqTTVPQzB3TGpBek5Dd3dMalU1TlMwd0xqRXdNdzBLQ1FrSll6QXVNVGsyTFRBdU1EWTRMREF1TXpjMkxUQXVNVGdzTUM0MU5DMHdMak16TlhNd0xqSTVOaTB3TGpNM01Td3dMak01Tmkwd0xqWTBPV013TGpFdE1DNHlOemdzTUM0eE5TMHdMall5TWl3d0xqRTFMVEV1TURNeVl6QXRNQzR4TmpRdE1DNHdNak10TUM0ek5UUXRNQzR3TmpndE1DNDFOamNOQ2drSkNXTXRNQzR3TkRZdE1DNHlNVFF0TUM0eE16a3RNQzQwTVRrdE1DNHlPQzB3TGpZeE5XTXRNQzR4TkRJdE1DNHhPVFl0TUM0ek5DMHdMak0yTFRBdU5UazFMVEF1TkRreVl5MHdMakkxTlMwd0xqRXpNaTB3TGpVNU15MHdMakU1T0MweExqQXhNaTB3TGpFNU9FZ3pNeTQwTVRSNklpOCtEUW9KUEM5blBnMEtDVHhuUGcwS0NRazhjR0YwYUNCemRIbHNaVDBpWm1sc2JEb2pRemhDUkVJNE95SWdaRDBpVFRJNExqVXNNalIyTFRKb01uWXRNbWd0TW5ZdE1tZ3lkaTB5YUMweWRpMHlhREoyTFRKb0xUSjJMVEpvTWxZNGFDMHlWalpvTFRKMk1tZ3RNbll5YURKMk1tZ3RNbll5YURKMk1tZ3RNbll5YURKMk1tZ3RNbll5YURKMk1nMEtDUWtKYUMwMGRqVmpNQ3d5TGpjMU55d3lMakkwTXl3MUxEVXNOWE0xTFRJdU1qUXpMRFV0TlhZdE5VZ3lPQzQxZWlCTk16QXVOU3d5T1dNd0xERXVOalUwTFRFdU16UTJMRE10TXl3emN5MHpMVEV1TXpRMkxUTXRNM1l0TTJnMlZqSTVlaUl2UGcwS0NRazhjR0YwYUNCemRIbHNaVDBpWm1sc2JEb2pRemhDUkVJNE95SWdaRDBpVFRJMkxqVXNNekJvTW1Nd0xqVTFNaXd3TERFdE1DNDBORGNzTVMweGN5MHdMalEwT0MweExURXRNV2d0TW1NdE1DNDFOVElzTUMweExEQXVORFEzTFRFc01WTXlOUzQ1TkRnc016QXNNall1TlN3ek1Ib2lMejROQ2drOEwyYytEUW84TDJjK0RRbzhaejROQ2p3dlp6NE5DanhuUGcwS1BDOW5QZzBLUEdjK0RRbzhMMmMrRFFvOFp6NE5Dand2Wno0TkNqeG5QZzBLUEM5blBnMEtQR2MrRFFvOEwyYytEUW84Wno0TkNqd3ZaejROQ2p4blBnMEtQQzluUGcwS1BHYytEUW84TDJjK0RRbzhaejROQ2p3dlp6NE5DanhuUGcwS1BDOW5QZzBLUEdjK0RRbzhMMmMrRFFvOFp6NE5Dand2Wno0TkNqeG5QZzBLUEM5blBnMEtQR2MrRFFvOEwyYytEUW84TDNOMlp6NE5DZz09Jylcbn1cblxuLnRleHRzIC5maWxlX190aXRsZTpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sO3V0Zjg7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlhWE52TFRnNE5Ua3RNU0kvUGcwS1BDRXRMU0JIWlc1bGNtRjBiM0k2SUVGa2IySmxJRWxzYkhWemRISmhkRzl5SURFNUxqQXVNQ3dnVTFaSElFVjRjRzl5ZENCUWJIVm5MVWx1SUM0Z1UxWkhJRlpsY25OcGIyNDZJRFl1TURBZ1FuVnBiR1FnTUNrZ0lDMHRQZzBLUEhOMlp5QjJaWEp6YVc5dVBTSXhMakVpSUdsa1BTSkRZWEJoWHpFaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJZ2VHMXNibk02ZUd4cGJtczlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5MekU1T1RrdmVHeHBibXNpSUhnOUlqQndlQ0lnZVQwaU1IQjRJZzBLQ1NCMmFXVjNRbTk0UFNJd0lEQWdOVGdnTlRnaUlITjBlV3hsUFNKbGJtRmliR1V0WW1GamEyZHliM1Z1WkRwdVpYY2dNQ0F3SURVNElEVTRPeUlnZUcxc09uTndZV05sUFNKd2NtVnpaWEoyWlNJK0RRbzhjRzlzZVdkdmJpQnpkSGxzWlQwaVptbHNiRG9qUlVSRlFVUkJPeUlnY0c5cGJuUnpQU0kxTVM0MUxERTBJRE0zTGpVc01DQTJMalVzTUNBMkxqVXNOVGdnTlRFdU5TdzFPQ0FpTHo0TkNqeG5QZzBLQ1R4d1lYUm9JSE4wZVd4bFBTSm1hV3hzT2lORFJVTTVRVVU3SWlCa1BTSk5NVFl1TlN3eU0yZ3lOV013TGpVMU1pd3dMREV0TUM0ME5EY3NNUzB4Y3kwd0xqUTBPQzB4TFRFdE1XZ3RNalZqTFRBdU5UVXlMREF0TVN3d0xqUTBOeTB4TERGVE1UVXVPVFE0TERJekxERTJMalVzTWpONklpOCtEUW9KUEhCaGRHZ2djM1I1YkdVOUltWnBiR3c2STBORlF6bEJSVHNpSUdROUlrMHhOaTQxTERFMWFERXdZekF1TlRVeUxEQXNNUzB3TGpRME55d3hMVEZ6TFRBdU5EUTRMVEV0TVMweGFDMHhNR010TUM0MU5USXNNQzB4TERBdU5EUTNMVEVzTVZNeE5TNDVORGdzTVRVc01UWXVOU3d4TlhvaUx6NE5DZ2s4Y0dGMGFDQnpkSGxzWlQwaVptbHNiRG9qUTBWRE9VRkZPeUlnWkQwaVRUUXhMalVzTWpsb0xUSTFZeTB3TGpVMU1pd3dMVEVzTUM0ME5EY3RNU3d4Y3pBdU5EUTRMREVzTVN3eGFESTFZekF1TlRVeUxEQXNNUzB3TGpRME55d3hMVEZUTkRJdU1EVXlMREk1TERReExqVXNNamw2SWk4K0RRb0pQSEJoZEdnZ2MzUjViR1U5SW1acGJHdzZJME5GUXpsQlJUc2lJR1E5SWswME1TNDFMRE0zYUMweU5XTXRNQzQxTlRJc01DMHhMREF1TkRRM0xURXNNWE13TGpRME9Dd3hMREVzTVdneU5XTXdMalUxTWl3d0xERXRNQzQwTkRjc01TMHhVelF5TGpBMU1pd3pOeXcwTVM0MUxETTNlaUl2UGcwS0NUeHdZWFJvSUhOMGVXeGxQU0ptYVd4c09pTkRSVU01UVVVN0lpQmtQU0pOTkRFdU5TdzBOV2d0TWpWakxUQXVOVFV5TERBdE1Td3dMalEwTnkweExERnpNQzQwTkRnc01Td3hMREZvTWpWak1DNDFOVElzTUN3eExUQXVORFEzTERFdE1WTTBNaTR3TlRJc05EVXNOREV1TlN3ME5Yb2lMejROQ2p3dlp6NE5Danh3YjJ4NVoyOXVJSE4wZVd4bFBTSm1hV3hzT2lORFJVTTVRVVU3SWlCd2IybHVkSE05SWpNM0xqVXNNQ0F6Tnk0MUxERTBJRFV4TGpVc01UUWdJaTgrRFFvOFp6NE5Dand2Wno0TkNqeG5QZzBLUEM5blBnMEtQR2MrRFFvOEwyYytEUW84Wno0TkNqd3ZaejROQ2p4blBnMEtQQzluUGcwS1BHYytEUW84TDJjK0RRbzhaejROQ2p3dlp6NE5DanhuUGcwS1BDOW5QZzBLUEdjK0RRbzhMMmMrRFFvOFp6NE5Dand2Wno0TkNqeG5QZzBLUEM5blBnMEtQR2MrRFFvOEwyYytEUW84Wno0TkNqd3ZaejROQ2p4blBnMEtQQzluUGcwS1BHYytEUW84TDJjK0RRbzhMM04yWno0TkNnPT0nKVxufVxuXG4ueW91dHViZSAuZmlsZV9fdGl0bGU6YmVmb3JlIHtcbiAgICAvLyBjb250ZW50OiB1cmwoJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQkFBQUFBUUNBWUFBQUFmOC85aEFBQUFCSE5DU1ZRSUNBZ0lmQWhraUFBQUFBbHdTRmx6QUFBQVdRQUFBRmtCcXAycGhnQUFBQmwwUlZoMFUyOW1kSGRoY21VQWQzZDNMbWx1YTNOallYQmxMbTl5WjV2dVBCb0FBQURIU1VSQlZEaU54ZE10VGdOUkVNRHgzM3RCQXBLdHdxd2xtQ1lWMVNSd2o1Nmh4K2tWZW9zdVNTWEJycW5xV2tCQXpXQzZDZUtWTEYzQkpQK01tSy9NVjRvSVl5U1Bpc1lGU09rV2Q3Z3VBRzhGWGtYc0JJL0JWeEIvNURONEVLelBDTzVaWjB5S3pkWDFrQkZNTXFxaWFibGtzMkU2L1MxQmRUb0J6T2RzdDZ4V1ZFVzNtN0ZyekJuZFNYUFRNSnV4V05BVjNUcEJVNXh3WFEvWnduUEd2bGk5YlllMHNPOFA2WERHRFJ5Q3B4UVJwRlRqSGxjL3VEeHFlTWZIVWZlOGlHalR2My9qTnk2RXA5SWdiV2hxQUFBQUFFbEZUa1N1UW1DQycpXG59XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8qIFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gUkVqZWN0ZWQgR3JpZCBWaWV3ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4qL1xuXG4vKiBcbi5maWxlIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgd2lkdGg6IGNhbGMoMTUlIC0gMzBweCk7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJveC1zaGFkb3c6IDBweCA5cHggMTBweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDcpO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLmZpbGU6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC00cHgpO1xuICAgIGJveC1zaGFkb3c6IDBweCAxN3B4IDE5cHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbi5maWxlX19pbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMzUlO1xuICAgIG1hcmdpbi10b3A6IDUlO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xufVxuXG4uZmlsZV9fdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICMyNTJhM2I7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xufVxuXG4uZmlsZV9fdGl0bGU6YmVmb3JlIHtcbiAgICB3aWR0aDogMTZweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMTRweDtcbiAgICB0b3A6IDIycHg7XG59XG5cbi5maWxlX19kYXRlIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgY29sb3I6ICM4MDg3YTI7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmZpbGVfX2luZm8ge1xuICAgIHBhZGRpbmc6IDIxcHggNXB4IDEwcHggMzVweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4qL1xuXG5cbi8qIFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gUmVzcG9uc2l2ZW5lc3MgSGFuZGxlcyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuKi9cblxuXG5cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjdweCkge1xuICAgIC5maWxlIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgIHdpZHRoOiBjYWxjKDEwJSAtIDE1cHgpO1xuICAgIH1cbiAgICAuZmlsZV9faW5mbyB7XG4gICAgICAgIHBhZGRpbmc6IDIxcHggNXB4IDEwcHggMzVweDtcbiAgICB9XG4gICAgLmZpbGVfX2RhdGUge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxuICAgIC5maWxlX190aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgfVxuICAgIC5maWxlX190aXRsZTpiZWZvcmUge1xuICAgICAgICBsZWZ0OiAxMHB4O1xuICAgICAgICB0b3A6IDE0cHg7XG4gICAgfVxuICAgIC5jZW50ZXItY29udGVudCB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICB9XG4gICAgLnNlYXJjaC0td2lkdGgge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgfVxuICAgIC50b3AtbmF2IHtcbiAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICB9XG4gICAgLnJvdy0tbm8tcmlnaHQge1xuICAgICAgICBtYXJnaW46IDAgMHB4IDAgMTVweDtcbiAgICB9XG4gICAgLmZpbGVzLWNvbnQge1xuICAgICAgICBwYWRkaW5nOiAwcHggMHB4IDAgMjBweDtcbiAgICB9XG4gICAgLnJvd19fdGl0bGUtYm94IHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIH1cbiAgICAucm93X190aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjQwcHgpIHtcbiAgICAucm93X190aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB9XG4gICAgLnJvd19fdGl0bGUtYm94IHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIH1cbiAgICAuZmlsZSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICB3aWR0aDogY2FsYygzMy4zJSAtIDE1cHgpO1xuICAgIH1cbiAgICAuZmlsZV9fZGF0ZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICB9XG4gICAgLmZpbGVfX3RpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICB9XG4gICAgLmZpbGUtLWxhc3Qge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo0ODBweCkge1xuICAgIC5maWxlIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgIHdpZHRoOiBjYWxjKDUwJSAtIDE1cHgpO1xuICAgIH1cbiAgICAuZmlsZS0tbGFzdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDozNjBweCkge1xuICAgIC5maWxlIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICAucm93LS1uby1yaWdodCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gICAgLnJvd19fdGl0bGUtYm94IHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIH1cbiAgICAucm93X190aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG59XG4ueW91dHViZV90aHVtYm5haWwge1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW46IDVweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/components/course-module/file-manager/file-card/file-card.component.ts":
    /*!****************************************************************************************!*\
      !*** ./src/app/components/course-module/file-manager/file-card/file-card.component.ts ***!
      \****************************************************************************************/

    /*! exports provided: File, FileCardComponent */

    /***/
    function srcAppComponentsCourseModuleFileManagerFileCardFileCardComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "File", function () {
        return File;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FileCardComponent", function () {
        return FileCardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/Rx */
      "./node_modules/rxjs/Rx.js");
      /* harmony import */


      var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _services_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../services/http.service */
      "./src/app/services/http.service.ts");
      /* harmony import */


      var _file_manager_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../file-manager.service */
      "./src/app/components/course-module/file-manager/file-manager.service.ts");

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

      var File = function File(name, type, res) {
        _classCallCheck(this, File);

        this.name = name;
        this.type = type;
        this.res = res;
      };

      var FileCardComponent =
      /** @class */
      function () {
        var FileCardComponent = /*#__PURE__*/function () {
          function FileCardComponent(cd, fileService, appC, _http, sanitizer) {
            _classCallCheck(this, FileCardComponent);

            this.cd = cd;
            this.fileService = fileService;
            this.appC = appC;
            this._http = _http;
            this.sanitizer = sanitizer; // global variables

            this.jsonFlag = {
              isRippleLoad: false
            };
            this.draggedover = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](null);
            this.draggedleave = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](null);
            this.fileid = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.status = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.filePath = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.fileDisplayArr = [];
            this.selectedFolder = [];
            this.getPopupValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.getPopupValueOpen = true;
            this.fileArr = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.shareOptions = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.playYoutubeVideo = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.editYoutubeVideo = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.ShowDeleteFileButton = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.playVimeoVideo = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.getVimeoDownloadData = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.dwnldLink = "";
            this.arr = [];
            this.vimeo_category_id = '305';
            this.downloadStatus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          }

          _createClass(FileCardComponent, [{
            key: "ngOnChanges",
            value: function ngOnChanges() {
              this.generateFile(this.data);
            }
          }, {
            key: "ngOnInit",
            value: function ngOnInit() {}
          }, {
            key: "generateFile",
            value: function generateFile(data) {
              if (data.data.category_id == "182") {
                data.data.category_name = "Study Material";
              }

              var userid = sessionStorage.getItem('userid');
              data.data.teacher_access = true;

              if (sessionStorage.getItem('userType') == '3' && userid != data.data.uploadedUserId) {
                data.data.teacher_access = false;
              }

              data.data.selected = false; // let name = data.label.split(".")[0];
              // let type = data.label.split(".")[1];

              var name = data.label.substring(0, data.label.lastIndexOf("_"));
              var type = data.label.substring(data.label.lastIndexOf(".") + 1);
              this.fileObj = new File(name, type, data.data);

              if (data.data.category_id == "230") {
                this.fileHeader.nativeElement.classList.add("youtube");
                this.fileHeader.nativeElement.classList.add("youtube-url");
              } else if (data.data.category_id == this.vimeo_category_id && (data.data.thumbnail_list == null || !data.data.thumbnail_list || !data.data.thumbnail_list.length || data.data.thumbnail_list[0].posterUrl == null)) {
                this.fileHeader.nativeElement.classList.add("video");
                this.fileHeader.nativeElement.classList.add("vimeo-url");
              } else {
                this.setImageAndIcons(type);
              }

              this.cd.detectChanges();
              this.cd.detach();
            }
          }, {
            key: "setImageAndIcons",
            value: function setImageAndIcons(type) {
              /* Document File */
              if (type === "doc" || type === "docx") {
                this.fileHeader.nativeElement.classList.add("docx");
                this.fileHeader.nativeElement.classList.add("doc-file");
              }
              /* PDF format */
              else if (type === 'pdf') {
                  this.fileHeader.nativeElement.classList.add("pdf");
                  this.fileHeader.nativeElement.classList.add("pdf-file");
                }
                /* Ms Excel Files */
                else if (type === 'xls' || type === "xlsx" || type === "csv") {
                    this.fileHeader.nativeElement.classList.add("xlsx");
                    this.fileHeader.nativeElement.classList.add("xlsx-file");
                  }
                  /* Text & RTF files */
                  else if (type === 'txt' || type === "rtf") {
                      this.fileHeader.nativeElement.classList.add("texts");
                      this.fileHeader.nativeElement.classList.add("text-file");
                    }
                    /* jpg,jpeg,png */
                    else if (type === 'jpg' || type === 'jpeg' || type === 'png' || type == "bmp" || type === "tif") {
                        this.fileHeader.nativeElement.classList.add("image");
                        this.fileHeader.nativeElement.classList.add("image-file");
                      }
                      /* Videos */
                      else if (type === 'mp4' || type === 'flv' || type === 'wmv' || type === 'mov') {
                          this.fileHeader.nativeElement.classList.add("video");
                          this.fileHeader.nativeElement.classList.add("video-file");
                        }
                        /* Power point Slides */
                        else if (type === 'ppt' || type === 'pptx') {
                            this.fileHeader.nativeElement.classList.add("texts");
                            this.fileHeader.nativeElement.classList.add("file-file");
                          }
                          /* Power point Slides */
                          else if (type === 'mp3' || type === 'wav') {
                              this.fileHeader.nativeElement.classList.add("audio");
                              this.fileHeader.nativeElement.classList.add("audio-file");
                            }
                            /* Power point Slides */
                            else if (type === 'rar' || type === 'zip') {
                                this.fileHeader.nativeElement.classList.add("zip");
                                this.fileHeader.nativeElement.classList.add("zip-file");
                              }
                              /* Default Case */
                              else {
                                  this.fileHeader.nativeElement.classList.add("texts");
                                  this.fileHeader.nativeElement.classList.add(".file-file");
                                }
            }
          }, {
            key: "onDragOver",
            value: function onDragOver(event) {
              this.draggedover.emit(event);
              this.preventAndStop(event);
            }
          }, {
            key: "onDragLeave",
            value: function onDragLeave(event) {
              //this.draggedleave.emit(event);
              this.draggedover.emit(event);
              this.preventAndStop(event);
            }
          }, {
            key: "preventAndStop",
            value: function preventAndStop(event) {
              event.stopPropagation();
              event.preventDefault();
            }
          }, {
            key: "getFilesDeleted",
            value: function getFilesDeleted(event) {
              this.ShowDeleteFileButton.emit(event);
            }
          }, {
            key: "getPopupOpen",
            value: function getPopupOpen(fileObj) {
              var shareOptions = {
                publicShare: fileObj.res.public_share,
                instituteShare: fileObj.res.inst_share,
                batchShare: fileObj.res.student_batch_share,
                isReadonly: fileObj.res.is_readonly,
                fileType: fileObj.type
              };

              if (shareOptions.publicShare == 0 && shareOptions.instituteShare == 0 && shareOptions.batchShare == 0) {
                this.shareOptions.emit("new");
                this.shareOptions.emit(shareOptions);
              } else {
                this.shareOptions.emit(shareOptions);
              }

              this.fileArr.emit(fileObj);
              this.fileid.emit(fileObj.res.file_id);
              this.getPopupValue.emit(this.getPopupValueOpen);
            }
          }, {
            key: "convertBase64ToArray",
            value: function convertBase64ToArray(val) {
              var binary_string = window.btoa(encodeURI(val));
              var len = binary_string.length;
              var bytes = new Uint8Array(len);

              for (var i = 0; i < len; i++) {
                bytes[i] = binary_string.charCodeAt(i);
              }

              return bytes.buffer;
            }
          }, {
            key: "getFileDownloaded",
            value: function getFileDownloaded(fileObj) {
              var _this13 = this;

              if (fileObj.res.category_id != this.vimeo_category_id) {
                var file_type = fileObj.type;
                var url = "/api/v1/instFileSystem/downloadFile/" + this.fileService.institute_id + "?fileId=" + fileObj.res.file_id;
                this.downloadStatus.emit(true);

                this._http.downloadItem(url, file_type).subscribe(function (response) {
                  if (response) {
                    var blob = new Blob([response], {
                      type: file_type
                    });
                    _this13.fileURL = _this13.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));

                    if (_this13.fileURL != null) {
                      setTimeout(function () {
                        var hiddenDownload = document.getElementById('downloadFileClick');
                        hiddenDownload.href = _this13.fileURL.changingThisBreaksApplicationSecurity;
                        hiddenDownload.download = fileObj.res.file_name;
                        hiddenDownload.click();

                        _this13.downloadStatus.emit(false);
                      }, 500);
                    }
                  }
                }, function (err) {
                  _this13.downloadStatus.emit(false);

                  console.log(err);
                });
              } else {
                this.getVimeoDownloadData.emit(fileObj);
              }
            }
            /**
             *
             * Method to get the original file name from filename(with autoID)
             *
             */
            // getFileName(fileName) {
            //   return fileName;//.substring(0, fileName.lastIndexOf("_"));
            // }

          }, {
            key: "getOriginalFileName",
            value: function getOriginalFileName(fileName) {
              var filenamePart1 = fileName.substring(0, fileName.lastIndexOf("_"));
              var filenamePart2 = fileName.substring(fileName.lastIndexOf("."));
              fileName = filenamePart1 + filenamePart2; // if(fileName.length>20){
              //   return  filenamePart1.substring(0,20)+filenamePart2;
              // }else{

              return fileName; // }    
            }
          }, {
            key: "getYoutubeLink",
            value: function getYoutubeLink(file) {
              this.playYoutubeVideo.emit(file);
            }
          }, {
            key: "editYoutubeUrl",
            value: function editYoutubeUrl(file) {
              this.editYoutubeVideo.emit(file);
            }
          }, {
            key: "getVimeoVideo",
            value: function getVimeoVideo(file) {
              this.playVimeoVideo.emit(file);
            }
          }]);

          return FileCardComponent;
        }();

        FileCardComponent.ctorParameters = function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }, {
            type: _file_manager_service__WEBPACK_IMPORTED_MODULE_5__["FileManagerService"]
          }, {
            type: _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
          }, {
            type: _services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]
          }];
        };

        FileCardComponent.propDecorators = {
          data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          draggedover: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          draggedleave: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          fileid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          fileHeader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["fileHeader", {
              "static": true
            }]
          }],
          fileImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["fileHeader", {
              "static": true
            }]
          }],
          status: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          filePath: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          fileDisplayArr: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          selectedFolder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          getPopupValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          fileArr: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          shareOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          playYoutubeVideo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          editYoutubeVideo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          ShowDeleteFileButton: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          playVimeoVideo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          vimeo_video_downlodable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          getVimeoDownloadData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          downloadStatus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        };
        FileCardComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
          selector: 'file-card',
          template: __importDefault(__webpack_require__(
          /*! raw-loader!./file-card.component.html */
          "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/file-manager/file-card/file-card.component.html"))["default"],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          styles: [__importDefault(__webpack_require__(
          /*! ./file-card.component.scss */
          "./src/app/components/course-module/file-manager/file-card/file-card.component.scss"))["default"]]
        }), __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _file_manager_service__WEBPACK_IMPORTED_MODULE_5__["FileManagerService"], _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])], FileCardComponent);
        return FileCardComponent;
      }();
      /***/

    },

    /***/
    "./src/app/components/course-module/file-manager/file-manager-routing.module.ts":
    /*!**************************************************************************************!*\
      !*** ./src/app/components/course-module/file-manager/file-manager-routing.module.ts ***!
      \**************************************************************************************/

    /*! exports provided: FileManagerRoutingModule */

    /***/
    function srcAppComponentsCourseModuleFileManagerFileManagerRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FileManagerRoutingModule", function () {
        return FileManagerRoutingModule;
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


      var _file_manager_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./file-manager.component */
      "./src/app/components/course-module/file-manager/file-manager.component.ts");
      /* harmony import */


      var _drive_home_drive_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./drive-home/drive-home.component */
      "./src/app/components/course-module/file-manager/drive-home/drive-home.component.ts");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var FileManagerRoutingModule =
      /** @class */
      function () {
        var FileManagerRoutingModule = function FileManagerRoutingModule() {
          _classCallCheck(this, FileManagerRoutingModule);
        };

        FileManagerRoutingModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
            path: '',
            component: _file_manager_component__WEBPACK_IMPORTED_MODULE_2__["FileManagerComponent"],
            pathMatch: 'prefix',
            children: [{
              path: '',
              redirectTo: 'drive'
            }, {
              path: 'drive',
              component: _drive_home_drive_home_component__WEBPACK_IMPORTED_MODULE_3__["DriveHomeComponent"]
            }]
          }])],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })], FileManagerRoutingModule);
        return FileManagerRoutingModule;
      }();
      /***/

    },

    /***/
    "./src/app/components/course-module/file-manager/file-manager.component.scss":
    /*!***********************************************************************************!*\
      !*** ./src/app/components/course-module/file-manager/file-manager.component.scss ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsCourseModuleFileManagerFileManagerComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY291cnNlLW1vZHVsZS9maWxlLW1hbmFnZXIvZmlsZS1tYW5hZ2VyLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/components/course-module/file-manager/file-manager.component.ts":
    /*!*********************************************************************************!*\
      !*** ./src/app/components/course-module/file-manager/file-manager.component.ts ***!
      \*********************************************************************************/

    /*! exports provided: FileManagerComponent */

    /***/
    function srcAppComponentsCourseModuleFileManagerFileManagerComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FileManagerComponent", function () {
        return FileManagerComponent;
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

      var __importDefault = undefined && undefined.__importDefault || function (mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };

      var FileManagerComponent =
      /** @class */
      function () {
        var FileManagerComponent = function FileManagerComponent() {
          _classCallCheck(this, FileManagerComponent);
        };

        FileManagerComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
          selector: 'file-manager',
          template: __importDefault(__webpack_require__(
          /*! raw-loader!./file-manager.component.html */
          "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/file-manager/file-manager.component.html"))["default"],
          styles: [__importDefault(__webpack_require__(
          /*! ./file-manager.component.scss */
          "./src/app/components/course-module/file-manager/file-manager.component.scss"))["default"]]
        })], FileManagerComponent);
        return FileManagerComponent;
      }();
      /***/

    },

    /***/
    "./src/app/components/course-module/file-manager/file-manager.module.ts":
    /*!******************************************************************************!*\
      !*** ./src/app/components/course-module/file-manager/file-manager.module.ts ***!
      \******************************************************************************/

    /*! exports provided: FileManagerModule */

    /***/
    function srcAppComponentsCourseModuleFileManagerFileManagerModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FileManagerModule", function () {
        return FileManagerModule;
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


      var primeng_fileupload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! primeng/fileupload */
      "./node_modules/primeng/fileupload.js");
      /* harmony import */


      var primeng_fileupload__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_fileupload__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! moment */
      "./node_modules/moment/moment.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var hammerjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! hammerjs */
      "./node_modules/hammerjs/hammer.js");
      /* harmony import */


      var hammerjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../shared/shared.module */
      "./src/app/components/shared/shared.module.ts");
      /* harmony import */


      var primeng_tree__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! primeng/tree */
      "./node_modules/primeng/tree.js");
      /* harmony import */


      var primeng_tree__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_tree__WEBPACK_IMPORTED_MODULE_7__);
      /* harmony import */


      var _file_manager_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./file-manager.component */
      "./src/app/components/course-module/file-manager/file-manager.component.ts");
      /* harmony import */


      var _file_manager_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./file-manager-routing.module */
      "./src/app/components/course-module/file-manager/file-manager-routing.module.ts");
      /* harmony import */


      var _drive_home_drive_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./drive-home/drive-home.component */
      "./src/app/components/course-module/file-manager/drive-home/drive-home.component.ts");
      /* harmony import */


      var _file_card_file_card_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./file-card/file-card.component */
      "./src/app/components/course-module/file-manager/file-card/file-card.component.ts");
      /* harmony import */


      var _file_manager_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./file-manager.service */
      "./src/app/components/course-module/file-manager/file-manager.service.ts");
      /* harmony import */


      var _upload_popup_upload_popup_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./upload-popup/upload-popup.component */
      "./src/app/components/course-module/file-manager/upload-popup/upload-popup.component.ts");
      /* harmony import */


      var _share_file_share_file_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./share-file/share-file.component */
      "./src/app/components/course-module/file-manager/share-file/share-file.component.ts");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      }; // import {BsDatepickerConfig, BsDatepickerModule} from 'ngx-bootstrap/datepicker';


      var FileManagerModule =
      /** @class */
      function () {
        var FileManagerModule = function FileManagerModule() {
          _classCallCheck(this, FileManagerModule);
        };

        FileManagerModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
          imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], // BsDatepickerModule,
          _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _file_manager_routing_module__WEBPACK_IMPORTED_MODULE_9__["FileManagerRoutingModule"], primeng_tree__WEBPACK_IMPORTED_MODULE_7__["TreeModule"], primeng_fileupload__WEBPACK_IMPORTED_MODULE_2__["FileUploadModule"]],
          declarations: [_file_manager_component__WEBPACK_IMPORTED_MODULE_8__["FileManagerComponent"], _drive_home_drive_home_component__WEBPACK_IMPORTED_MODULE_10__["DriveHomeComponent"], _file_card_file_card_component__WEBPACK_IMPORTED_MODULE_11__["FileCardComponent"], _upload_popup_upload_popup_component__WEBPACK_IMPORTED_MODULE_13__["UploadPopupComponent"], _share_file_share_file_component__WEBPACK_IMPORTED_MODULE_14__["ShareFileComponent"]],
          entryComponents: [_file_card_file_card_component__WEBPACK_IMPORTED_MODULE_11__["FileCardComponent"]],
          providers: [_file_manager_service__WEBPACK_IMPORTED_MODULE_12__["FileManagerService"]]
        })], FileManagerModule);
        return FileManagerModule;
      }();
      /***/

    },

    /***/
    "./src/app/components/course-module/file-manager/file-manager.service.ts":
    /*!*******************************************************************************!*\
      !*** ./src/app/components/course-module/file-manager/file-manager.service.ts ***!
      \*******************************************************************************/

    /*! exports provided: FileManagerService */

    /***/
    function srcAppComponentsCourseModuleFileManagerFileManagerServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FileManagerService", function () {
        return FileManagerService;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
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

      var FileManagerService =
      /** @class */
      function () {
        var FileManagerService = /*#__PURE__*/function () {
          function FileManagerService(http, auth) {
            var _this14 = this;

            _classCallCheck(this, FileManagerService);

            this.http = http;
            this.auth = auth;
            this.baseUrl = '';
            this.auth.currentAuthKey.subscribe(function (key) {
              _this14.Authorization = key;
              _this14.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Authorization": _this14.Authorization
              });
            });
            this.auth.currentInstituteId.subscribe(function (id) {
              _this14.institute_id = id;
            });
            this.baseUrl = this.auth.getBaseUrl();
          }

          _createClass(FileManagerService, [{
            key: "getAllFolderFiles",
            value: function getAllFolderFiles(obj) {
              var url = this.baseUrl + "/api/v1/instFileSystem/getFolder";
              return this.http.post(url, obj, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (data) {
                return data;
              }, function (error) {
                return error;
              }));
            }
          }, {
            key: "getUsedSpace",
            value: function getUsedSpace() {
              var url = this.baseUrl + "/api/v1/instFileSystem/getUsedSpace/" + this.institute_id;
              return this.http.get(url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (data) {
                return data;
              }, function (error) {
                return error;
              }));
            }
          }, {
            key: "getCategories",
            value: function getCategories() {
              var url = this.baseUrl + "/api/v1/instFileSystem/categories";
              return this.http.get(url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (data) {
                return data;
              }, function (error) {
                return error;
              }));
            }
          }, {
            key: "createFiles",
            value: function createFiles(obj) {
              var url = this.baseUrl + "/api/v1/instFileSystem/createFiles";
              return this.http.post(url, obj, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (data) {
                return data;
              }, function (error) {
                return error;
              }));
            }
          }, {
            key: "deleteFiles",
            value: function deleteFiles(obj) {
              var url = this.baseUrl + "/api/v1/instFileSystem/deleteFolder";
              return this.http.post(url, obj, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (data) {
                return data;
              }, function (error) {
                return error;
              }));
            }
          }, {
            key: "downloadFromAWS",
            value: function downloadFromAWS(url, file_id) {
              var ur = "".concat(url, "/api/v1/instFileSystem/downloadFile/").concat(this.institute_id, "/?fileId=").concat(file_id);
              return this.http.get(ur, {
                headers: this.headers,
                responseType: 'text'
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (res) {
                return res;
              }, function (err) {
                return err;
              }));
            }
          }, {
            key: "getAllStandards",
            value: function getAllStandards() {
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
            key: "getSubjects",
            value: function getSubjects(obj) {
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
            key: "shareFileWithStudents",
            value: function shareFileWithStudents(obj) {
              var url = this.baseUrl + "/api/v1/fileShare/students";
              return this.http.post(url, obj, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (data) {
                return data;
              }, function (error) {
                return error;
              }));
            }
          }, {
            key: "shareFileWithBatches",
            value: function shareFileWithBatches(obj) {
              var url = this.baseUrl + "/api/v1/fileShare/batches";
              return this.http.post(url, obj, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (data) {
                return data;
              }, function (error) {
                return error;
              }));
            }
          }, {
            key: "shareFile",
            value: function shareFile(obj) {
              var url = this.baseUrl + "/api/v1/fileShare";
              return this.http.put(url, obj, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (data) {
                return data;
              }, function (error) {
                return error;
              }));
            }
          }, {
            key: "editFileShare",
            value: function editFileShare(obj) {
              var url = this.baseUrl + "/api/v1/fileShare";
              return this.http.post(url, obj, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (data) {
                return data;
              }, function (error) {
                return error;
              }));
            }
          }, {
            key: "courseMapping",
            value: function courseMapping() {
              var url = this.baseUrl + "/api/v1/institute/courseMapping/" + this.institute_id;
              return this.http.get(url, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (data) {
                return data;
              }, function (error) {
                return error;
              }));
            }
          }, {
            key: "craeteFolder",
            value: function craeteFolder(obj) {
              var url = this.baseUrl + "/api/v1/instFileSystem/createFolder";
              return this.http.post(url, obj, {
                headers: this.headers
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (data) {
                return data;
              }, function (error) {
                return error;
              }));
            }
          }]);

          return FileManagerService;
        }();

        FileManagerService.ctorParameters = function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }, {
            type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"]
          }];
        };

        FileManagerService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"]])], FileManagerService);
        return FileManagerService;
      }();
      /***/

    },

    /***/
    "./src/app/components/course-module/file-manager/share-file/share-file.component.scss":
    /*!********************************************************************************************!*\
      !*** ./src/app/components/course-module/file-manager/share-file/share-file.component.scss ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsCourseModuleFileManagerShareFileShareFileComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#tab1Content {\n  display: block;\n}\n\n#tab1Content th {\n  text-align: left;\n  padding: 5px 0 !important;\n  background: #DFE5F0;\n  border-radius: 0px;\n}\n\n#tab2Content,\n#tab3Content {\n  display: none;\n}\n\n.skeleton {\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 12px;\n  background: #efefef;\n  border-radius: 2px;\n}\n\n.skeleton::after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(90deg, #efefef, white, #efefef);\n  -webkit-animation: progress 1s ease-in-out infinite;\n          animation: progress 1s ease-in-out infinite;\n}\n\n.forms {\n  color: black;\n}\n\n.row-fix .c-lg-5 {\n  width: 25%;\n}\n\n.table-ne .field-wrapper .form-ctrl {\n  width: 75%;\n  margin-bottom: 10px;\n  height: 25px;\n  background: transparent;\n}\n\n.table-ne .field-wrapper {\n  position: relative;\n}\n\n.table-ne .field-wrapper.datePickerBox .form-ctrl {\n  cursor: pointer;\n  position: relative;\n  z-index: 1;\n  background: transparent;\n}\n\n.table-ne .field-wrapper.datePickerBox:after {\n  content: '';\n  background: url(/./assets/images/calendar.svg) no-repeat;\n  position: absolute;\n  right: 28%;\n  top: 12px;\n  width: 21px;\n  height: 21px;\n  z-index: 0;\n}\n\n.tab {\n  padding-bottom: 18px;\n  color: #fff;\n  width: 100%;\n  /* height: 72%; */\n  /* min-height: 46%; */\n  /* max-height: 73vh; */\n  height: auto;\n  z-index: 4;\n  margin-top: 1px;\n  /* box-shadow: -15px 24px 5px #008; */\n}\n\n.norm {\n  font-size: 8px;\n}\n\n.common {\n  color: black;\n}\n\n.form-file {\n  font-size: 14px;\n  color: #666666;\n}\n\n.bold-font {\n  font-size: 14px;\n  color: black;\n  font-weight: bold;\n}\n\n.shareToBtn {\n  display: inline-block;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.activeSession {\n  background-color: #0084f6;\n  color: #fff;\n}\n\n.shareHeader {\n  background: #F4F3F8;\n  border-radius: 0px 0px 30px 30px;\n  padding: 25px;\n  padding-bottom: 10px;\n}\n\n.shareTab {\n  background: #FFFFFF;\n  border: 1px solid #E9EBED;\n  box-sizing: border-box;\n  border-radius: 4px;\n  width: 96%;\n  margin-left: 10px;\n}\n\n.shareTab input {\n  width: 33%;\n  border: 0;\n  margin: 0;\n  outline: none;\n}\n\n.field-wrapper .form-ctrl {\n  border: 1px solid #D5D0D0;\n  border-radius: 4px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb3Vyc2UtbW9kdWxlL2ZpbGUtbWFuYWdlci9zaGFyZS1maWxlL3NoYXJlLWZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFjO0FBQ2xCOztBQUZBO0VBR1EsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBRzFCOztBQUNBOztFQUVJLGFBQWE7QUFFakI7O0FBSUE7RUFDSSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBUGdCO0VBUWhCLGtCQUFrQjtBQUR0Qjs7QUFMQTtFQVFRLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLDJEQUE4RTtFQUM5RSxtREFBMkM7VUFBM0MsMkNBQTJDO0FBQ25EOztBQUdBO0VBQ0ksWUFBWTtBQUFoQjs7QUFHQTtFQUVRLFVBQVU7QUFEbEI7O0FBS0E7RUFHWSxVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWix1QkFBdUI7QUFKbkM7O0FBRkE7RUFVUSxrQkFBa0I7QUFKMUI7O0FBTkE7RUFhZ0IsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsdUJBQXVCO0FBSHZDOztBQWJBO0VBbUJnQixXQUFXO0VBQ1gsd0RBQXdEO0VBQ3hELGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsU0FBUztFQUNULFdBQVc7RUFDWCxZQUFZO0VBQ1osVUFBVTtBQUYxQjs7QUFRQTtFQUNJLG9CQUFvQjtFQUdwQixXQUFXO0VBQ1gsV0FBVztFQUNYLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQVk7RUFDWixVQUFVO0VBQ1YsZUFBZTtFQUNmLHFDQUFBO0FBUEo7O0FBVUE7RUFDSSxjQUFjO0FBUGxCOztBQVVBO0VBQ0ksWUFBWTtBQVBoQjs7QUFVQTtFQUNJLGVBQWU7RUFDZixjQUFjO0FBUGxCOztBQVdBO0VBQ0ksZUFBZTtFQUNmLFlBQVk7RUFDWixpQkFBaUI7QUFSckI7O0FBVUE7RUFDSSxxQkFBcUI7RUFDcEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQVB4Qjs7QUFTQTtFQUNJLHlCQUF5QjtFQUN6QixXQUFXO0FBTmY7O0FBUUE7RUFDSSxtQkFBbUI7RUFDbkIsZ0NBQWdDO0VBQ2hDLGFBQWE7RUFDYixvQkFBb0I7QUFMeEI7O0FBT0E7RUFDSSxtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUV0QixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGlCQUFpQjtBQUxyQjs7QUFGQTtFQVNRLFVBQVU7RUFDVixTQUFTO0VBQ1QsU0FBUztFQUNULGFBQWE7QUFIckI7O0FBTUE7RUFDSSx5QkFBeUI7RUFDekIsa0JBQWtCO0FBSHRCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb3Vyc2UtbW9kdWxlL2ZpbGUtbWFuYWdlci9zaGFyZS1maWxlL3NoYXJlLWZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjdGFiMUNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRoIHtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgcGFkZGluZzogNXB4IDAgIWltcG9ydGFudDtcbiAgICAgICAgYmFja2dyb3VuZDogI0RGRTVGMDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIH1cbn1cblxuI3RhYjJDb250ZW50LFxuI3RhYjNDb250ZW50IHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4kY29sb3ItYmFzZTogI2VmZWZlZjtcbiRjb2xvci1iYXNlOiAjZWZlZmVmO1xuJGNvbG9yLWhpZ2hsaWdodDogbGlnaHRlbigkY29sb3ItYmFzZSwgNyUpO1xuLnNrZWxldG9uIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEycHg7XG4gICAgYmFja2dyb3VuZDogJGNvbG9yLWJhc2U7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICY6OmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICRjb2xvci1iYXNlLCAkY29sb3ItaGlnaGxpZ2h0LCAkY29sb3ItYmFzZSk7XG4gICAgICAgIGFuaW1hdGlvbjogcHJvZ3Jlc3MgMXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG4gICAgfVxufVxuXG4uZm9ybXMge1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuLnJvdy1maXgge1xuICAgIC5jLWxnLTUge1xuICAgICAgICB3aWR0aDogMjUlO1xuICAgIH1cbn1cblxuLnRhYmxlLW5lIHtcbiAgICAuZmllbGQtd3JhcHBlciB7XG4gICAgICAgIC5mb3JtLWN0cmwge1xuICAgICAgICAgICAgd2lkdGg6IDc1JTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuZmllbGQtd3JhcHBlciB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgJi5kYXRlUGlja2VyQm94IHtcbiAgICAgICAgICAgIC5mb3JtLWN0cmwge1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgvLi9hc3NldHMvaW1hZ2VzL2NhbGVuZGFyLnN2Zykgbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICByaWdodDogMjglO1xuICAgICAgICAgICAgICAgIHRvcDogMTJweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjFweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIxcHg7XG4gICAgICAgICAgICAgICAgei1pbmRleDogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnRhYiB7XG4gICAgcGFkZGluZy1ib3R0b206IDE4cHg7XG4gICAgLy8gbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgLy8gYmFja2dyb3VuZDogI2VmZWZlZjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvKiBoZWlnaHQ6IDcyJTsgKi9cbiAgICAvKiBtaW4taGVpZ2h0OiA0NiU7ICovXG4gICAgLyogbWF4LWhlaWdodDogNzN2aDsgKi9cbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgei1pbmRleDogNDtcbiAgICBtYXJnaW4tdG9wOiAxcHg7XG4gICAgLyogYm94LXNoYWRvdzogLTE1cHggMjRweCA1cHggIzAwODsgKi9cbn1cblxuLm5vcm0ge1xuICAgIGZvbnQtc2l6ZTogOHB4O1xufVxuXG4uY29tbW9uIHtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbi5mb3JtLWZpbGUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogIzY2NjY2NjtcbiAgICAvLyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uYm9sZC1mb250IHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnNoYXJlVG9CdG4ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5hY3RpdmVTZXNzaW9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4NGY2O1xuICAgIGNvbG9yOiAjZmZmO1xufVxuLnNoYXJlSGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjRjRGM0Y4O1xuICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMzBweCAzMHB4O1xuICAgIHBhZGRpbmc6IDI1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG4uc2hhcmVUYWIge1xuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0U5RUJFRDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC8vIGJveC1zaGFkb3c6IDBweCAwcHggOHB4IHJnYigwIDAgMCAvIDE1JSk7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHdpZHRoOiA5NiU7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgaW5wdXQge1xuICAgICAgICB3aWR0aDogMzMlO1xuICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICB9XG59XG4uZmllbGQtd3JhcHBlciAuZm9ybS1jdHJsIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRDVEMEQwO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/components/course-module/file-manager/share-file/share-file.component.ts":
    /*!******************************************************************************************!*\
      !*** ./src/app/components/course-module/file-manager/share-file/share-file.component.ts ***!
      \******************************************************************************************/

    /*! exports provided: ShareFileComponent */

    /***/
    function srcAppComponentsCourseModuleFileManagerShareFileShareFileComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShareFileComponent", function () {
        return ShareFileComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _file_manager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../file-manager.service */
      "./src/app/components/course-module/file-manager/file-manager.service.ts");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! moment */
      "./node_modules/moment/moment.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../services/authenticator.service */
      "./src/app/services/authenticator.service.ts");
      /* harmony import */


      var _services_message_show_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../services/message-show.service */
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

      var ShareFileComponent =
      /** @class */
      function () {
        var ShareFileComponent = /*#__PURE__*/function () {
          function ShareFileComponent(fileService, appC, auth, services) {
            _classCallCheck(this, ShareFileComponent);

            this.fileService = fileService;
            this.appC = appC;
            this.auth = auth;
            this.services = services;
            this.closePopup = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.CloseValuePopup = false;
            this.getStandards = [];
            this.getStandardsId = "";
            this.getSubjects = [];
            this.fetchBatchesData = {
              institute_id: this.fileService.institute_id,
              file_id: "",
              subject_id: ""
            };
            this.getStudentsData = [];
            this.subjectId = "";
            this.getBatchesData = [];
            this.studentsId = false;
            this.batchesId = true;
            this.dataStatus = false;
            this.isProfessional = false;
            this.dummyArr = [0, 1, 2, 0, 1, 2];
            this.columnMaps = [0, 1, 2, 3];
            this.getBatch = "0";
            this.getStudent = "";
            this.fetchShareOption = {
              batches: [],
              desc: "",
              file_id: "",
              institute_id: this.fileService.institute_id,
              share_type: "",
              standard_id: "",
              student_batch_share: "",
              students: [],
              subject_id: "",
              is_readonly: "N"
            };
            this.fileSharePublic = {
              course_types: "",
              file_id: "",
              institute_id: this.fileService.institute_id,
              public_share: 1,
              share_type: 2,
              standard_id: "",
              subject_id: "",
              is_readonly: "N"
            };
            this.startAccessTimeStudent = moment__WEBPACK_IMPORTED_MODULE_3__().format('YYYY-MM-DD');
            this.endAccessTimeStudent = moment__WEBPACK_IMPORTED_MODULE_3__().format('YYYY-MM-DD');
            this.endAccessTimeBatch = moment__WEBPACK_IMPORTED_MODULE_3__().format('YYYY-MM-DD');
            this.startAccessTimeBatch = moment__WEBPACK_IMPORTED_MODULE_3__().format('YYYY-MM-DD');
            this.isChecked = false;
            this.isStudentChecked = false;
            this.isReadonlyStu = false;
            this.isReadonlyInst = false;
            this.isReadonlyPub = false;
            this.treeUpdater = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.courseMappingArray = [];
            this.tabChoice = "student";
            this.editBatchShare = false;
            this.editInstituteShare = false;
            this.editPublicShare = false;
            this.courseValue = "";
            this.courseType = [];
            this.date = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
            this.month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
            this.year = [2015, 2016, 2017, 2018, 2019, 2020];
            this.instituteObj = {
              file_id: '',
              institute_id: this.fileService.institute_id,
              share_type: 1,
              is_readonly: "N"
            };
            this.temparrBatch = [];
            this.temparrStudent = [];
            this.publicObj = {
              file_id: '',
              institute_id: this.fileService.institute_id,
              share_type: 2,
              is_readonly: "N"
            };
            this.getFileType = "";
            this.schoolModel = false;
            this.activeSession = '1';
          }

          _createClass(ShareFileComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              var _this15 = this;

              this.getAllStandards();
              this.multiCourseMapping();
              this.auth.institute_type.subscribe(function (res) {
                if (res == "LANG") {
                  _this15.isProfessional = true;
                } else {
                  _this15.isProfessional = false;
                }
              }); // changes by Nalini - to handle school model conditions

              this.auth.schoolModel.subscribe(function (res) {
                _this15.schoolModel = false;

                if (res) {
                  _this15.schoolModel = true;
                }
              });
            }
          }, {
            key: "ngOnChanges",
            value: function ngOnChanges() {
              this.editBatchShare = false;
              this.editInstituteShare = false;
              this.editPublicShare = false;
              this.categoryId = this.fileName.res.category_id;

              if (this.categoryId == '62') {
                this.selectTab(2);
              } else {
                this.selectTab(1);
              }
            }
          }, {
            key: "close",
            value: function close() {
              this.closePopup.emit(this.CloseValuePopup);
            }
          }, {
            key: "chooseTab",
            value: function chooseTab(index) {
              this.getFileType = this.shareOptions.fileType;
              /*Disabling Buttons
              if(this.shareOptions.batchShare == '0'){
                (<HTMLFormElement>document.getElementById('tab1')).disabled = true;
              }else if(this.shareOptions.publicShare == '0'){
                (<HTMLFormElement>document.getElementById('tab2')).disabled = true;
              }else if(this.shareOptions.instituteShare == '0'){
                (<HTMLFormElement>document.getElementById('tab3')).disabled = true;
              }*/

              var share_type = 0;

              if (index == '1' && this.shareOptions.batchShare == '1') {
                share_type = 3;
                this.editBatchShare = true;

                if (this.shareOptions.isReadonly == "N") {
                  this.isReadonlyStu = false;
                } else {
                  this.isReadonlyStu = true;
                }
              } else if (index == '2' && this.shareOptions.publicShare == '1') {
                share_type = 2;
                this.editPublicShare = true;

                if (this.shareOptions.isReadonly == "N") {
                  this.isReadonlyPub = false;
                } else {
                  this.isReadonlyPub = true;
                }
              } else if (index == '3' && this.shareOptions.instituteShare == '1') {
                share_type = 1;
                this.editInstituteShare = true;

                if (this.shareOptions.isReadonly == "N") {
                  this.isReadonlyInst = false;
                } else {
                  this.isReadonlyInst = true;
                }
              }

              if (share_type != 0) {
                this.editFileFetch(share_type);
              }
            }
          }, {
            key: "editApiSwitch",
            value: function editApiSwitch(key) {
              switch (key) {
                case 1:
                  break;

                case 2:
                  break;

                case 3:
                  break;
              }
            }
          }, {
            key: "editFileFetch",
            value: function editFileFetch(share_type) {
              var _this16 = this;

              var Obj = {
                file_id: this.fileIdGet,
                institute_id: this.fileService.institute_id,
                share_type: share_type
              };
              this.fileService.editFileShare(Obj).subscribe(function (data) {
                if (share_type == '2') {
                  if (_this16.categoryId != '62') {
                    _this16.fileSharePublic.standard_id = data.standard_id;

                    _this16.getAllSubjects(data.standard_id);

                    _this16.fileSharePublic.subject_id = data.subject_id;
                    _this16.courseType = data.course_types.split(','); // this.courseTypeSelection(this.courseType);

                    _this16.fileSharePublic.course_types = data.course_types;

                    if (_this16.shareOptions.isReadonly == "N") {
                      _this16.isReadonlyPub = false;
                    } else {
                      _this16.isReadonlyPub = true;
                    }
                  }
                } else if (share_type == '3') {
                  _this16.getStandardsId = data.standard_id;
                  _this16.getStandardsId = _this16.getStandardsId == '0' ? '' : _this16.getStandardsId;

                  _this16.getAllSubjects(data.standard_id);

                  _this16.subjectId = data.subject_id;
                  _this16.subjectId = _this16.subjectId == '0' ? '' : _this16.subjectId;
                  _this16.fetchShareOption.desc = data.desc;

                  _this16.getBatches(1);

                  _this16.fetchCoursesData(_this16.subjectId, 0, 1);

                  if (_this16.shareOptions.isReadonly == "N") {
                    _this16.isReadonlyStu = false;
                  } else {
                    _this16.isReadonlyStu = true;
                  }
                }
              }, function (error) {});
            }
          }, {
            key: "getAllStandards",
            value: function getAllStandards() {
              var _this17 = this;

              this.fileService.getAllStandards().subscribe(function (data) {
                _this17.getStandards = data;
                _this17.getStudentsData = [];
                _this17.getBatchesData = [];
                _this17.studentsId = false;
                _this17.batchesId = true;
              }, function (error) {});
            }
          }, {
            key: "getReadonlystu",
            value: function getReadonlystu(event) {
              if (event == true) {
                this.fetchShareOption.is_readonly = "Y";
              } else {
                this.fetchShareOption.is_readonly = "N";
              }
            }
          }, {
            key: "getReadonlypublic",
            value: function getReadonlypublic(event) {
              if (event == true) {
                this.fileSharePublic.is_readonly = "Y";
                this.publicObj.is_readonly = "Y";
              } else {
                this.fileSharePublic.is_readonly = "N";
                this.publicObj.is_readonly = "N";
              }
            }
          }, {
            key: "getReadonlyinst",
            value: function getReadonlyinst(event) {
              if (event == true) {
                this.instituteObj.is_readonly = "Y";
              } else {
                this.instituteObj.is_readonly = "N";
              }
            }
          }, {
            key: "getAllSubjects",
            value: function getAllSubjects(i) {
              var _this18 = this;

              this.fileService.getSubjects(i).subscribe(function (data) {
                _this18.getSubjects = data;
                _this18.studentsId = false;
                _this18.batchesId = true;
              }, function (error) {});
            }
          }, {
            key: "getBatches",
            value: function getBatches(update) {
              var _this19 = this;

              this.getBatchesData = [];
              var batchesData = [];
              this.isChecked = false;
              this.getBatch = "0";
              this.batchesId = true;
              this.studentsId = false;
              this.dataStatus = true;
              document.getElementById('batch').checked = true;
              this.fetchBatchesData = {
                institute_id: this.fileService.institute_id,
                file_id: this.fileIdGet,
                subject_id: this.subjectId
              };
              this.fileService.shareFileWithBatches(this.fetchBatchesData).subscribe(function (data) {
                var currentDate = new Date();
                _this19.dataStatus = false;
                var filterbatches = data;
                filterbatches.forEach(function (batch) {
                  var batchDate = new Date(batch.file_access_end_time);

                  if (batchDate.getTime() >= currentDate.getTime()) {
                    batchesData.push(batch);
                  }
                });
                _this19.getBatchesData = batchesData;

                _this19.getBatchesData.map(function (data) {
                  if (data.file_access_start_time == "") {
                    data.file_access_start_time = moment__WEBPACK_IMPORTED_MODULE_3__().format('YYYY-MM-DD');
                  }

                  if (data.file_access_end_time == "") {
                    data.file_access_end_time = moment__WEBPACK_IMPORTED_MODULE_3__().format('YYYY-MM-DD');
                  }

                  if (update != 1) {
                    data.is_file_shared = "N";
                    data.isChecked = false;
                  } else {
                    data.isUpdated = false;

                    if (data.is_file_shared == 'Y') {
                      data.isChecked = true;
                    } else {
                      data.isChecked = false;
                    }
                  }
                });
              }, function (error) {
                _this19.dataStatus = false;
              });
            } // fetchUpdatedBatches(){
            //   this.fetchBatchesData = {
            //     institute_id: this.fileService.institute_id,
            //     file_id: this.fileIdGet,
            //     subject_id: this.subjectId
            //   }
            //   this.fileService.shareFileWithBatches(this.fetchBatchesData).subscribe(
            //     (data: any) => {
            //       this.getBatchesData = data;
            //     }
            //   )
            // }
            // fetchStudentsShare(){
            //     this.studentsId = true;
            //     this.batchesId = false;
            //     this.fetchBatchesData = {
            //       institute_id: this.fileService.institute_id,
            //       file_id: this.fileIdGet,
            //       subject_id: subject_id
            //     }
            //     this.fileService.shareFileWithStudents(this.fetchBatchesData).subscribe(
            //       (data: any) => {
            //         this.getStudentsData = data;
            //         this.getStudentsData.map(
            //           (data: any) => {
            //             data.start_month = moment().month() + 1;
            //             data.start_year = moment().year();
            //             data.start_date = moment().date();
            //             data.end_date = moment().date();
            //             data.end_month = moment().month() + 1;
            //             data.end_year = moment().year();
            //             data.is_file_shared = "N",
            //               data.isChecked = false
            //           }
            //         )
            //       },
            //       (error: any) => {
            //       }
            //     )
            // }

          }, {
            key: "prefillSelected",
            value: function prefillSelected(courseId) {
              for (var i = 0; i < this.courseType.length; i++) {
                if (this.courseType[i] == courseId) {
                  return true;
                }
              }

              return false;
            }
          }, {
            key: "multiCourseMapping",
            value: function multiCourseMapping() {
              var _this20 = this;

              this.fileService.courseMapping().subscribe(function (data) {
                _this20.courseMappingArray = data;
              }, function (error) {
                var msg = {
                  type: "error",
                  body: error.error.message
                };

                _this20.appC.popToast(msg);
              });
            }
          }, {
            key: "fetchCoursesData",
            value: function fetchCoursesData(subject_id, event, update) {
              var _this21 = this;

              this.getStudentsData = [];
              this.dataStatus = true;
              this.isStudentChecked = false;
              update == true ? update = 1 : update = 0;

              if (event == 0) {
                var arr = [];
                this.studentsId = false;
                this.batchesId = true;
                this.dataStatus = false;
              } else if (event == "1") {
                this.studentsId = true;
                this.batchesId = false;
                this.fetchBatchesData = {
                  institute_id: this.fileService.institute_id,
                  file_id: this.fileIdGet,
                  subject_id: subject_id
                };
                this.fileService.shareFileWithStudents(this.fetchBatchesData).subscribe(function (data) {
                  _this21.dataStatus = false;
                  _this21.getStudentsData = data;

                  _this21.getStudentsData.map(function (data) {
                    if (data.file_access_end_time == "") {
                      data.file_access_end_time = moment__WEBPACK_IMPORTED_MODULE_3__().format('YYYY-MM-DD');
                    }

                    if (data.file_access_start_time == "") {
                      data.file_access_start_time = moment__WEBPACK_IMPORTED_MODULE_3__().format('YYYY-MM-DD');
                    }

                    if (update != 1) {
                      data.is_file_shared = "N";
                      data.isChecked = false;
                    } else {
                      if (data.is_file_shared == 'Y') {
                        data.isChecked = true;
                      } else {
                        data.isChecked = false;
                      }
                    }
                  });
                }, function (error) {
                  _this21.dataStatus = false;
                });
              }
            }
          }, {
            key: "fileSharedBatches",
            value: function fileSharedBatches(event) {
              if (event == true) {
                for (var i = 0; i < this.getBatchesData.length; i++) {
                  this.getBatchesData[i].is_file_shared = "Y";
                  this.getBatchesData[i].isChecked = true;
                }
              } else if (event == false) {
                for (var _i = 0; _i < this.getBatchesData.length; _i++) {
                  this.getBatchesData[_i].is_file_shared = "N";
                  this.getBatchesData[_i].isChecked = false;
                }
              }
            }
          }, {
            key: "fileSharedStudents",
            value: function fileSharedStudents(event) {
              if (event == true) {
                for (var i = 0; i < this.getStudentsData.length; i++) {
                  this.getStudentsData[i].is_file_shared = "Y";
                  this.getStudentsData[i].isChecked = true;
                }
              } else if (event == false) {
                for (var _i2 = 0; _i2 < this.getStudentsData.length; _i2++) {
                  this.getStudentsData[_i2].is_file_shared = "N";
                  this.getStudentsData[_i2].isChecked = false;
                }
              }
            }
          }, {
            key: "getFileSharedBatches",
            value: function getFileSharedBatches(event, index) {
              if (event == true) {
                this.getBatchesData[index].is_file_shared = "Y";
                this.getBatchesData[index].isChecked = true;

                if (!this.getBatchesData[index].isUpdated) {
                  this.getBatchesData[index].isUpdated = true;
                }
              } else {
                this.getBatchesData[index].is_file_shared = "N";
                this.isChecked = false;
                this.getBatchesData[index].isChecked = false;

                if (!this.getBatchesData[index].isUpdated) {
                  this.getBatchesData[index].isUpdated = true;
                }
              }
            }
          }, {
            key: "getFileSharedStudents",
            value: function getFileSharedStudents(event, index) {
              if (event == true) {
                this.getStudentsData[index].is_file_shared = "Y";
                this.getStudentsData[index].isChecked = true;
              } else {
                this.getStudentsData[index].is_file_shared = "N";
                this.isStudentChecked = false;
                this.getStudentsData[index].isChecked = false;
              }
            }
          }, {
            key: "fetchApiStudentsAndBatches",
            value: function fetchApiStudentsAndBatches() {
              var _this22 = this;

              console.log(this.getBatchesData);
              console.log(this.getStudentsData);
              this.getBatchesData.map(function (ele) {
                if (ele.isChecked == true) {
                  var obj = {
                    file_access_end_time: moment__WEBPACK_IMPORTED_MODULE_3__(ele.file_access_end_time).format('YYYY-MM-DD'),
                    file_access_start_time: moment__WEBPACK_IMPORTED_MODULE_3__(ele.file_access_start_time).format('YYYY-MM-DD'),
                    is_file_shared: ele.is_file_shared,
                    batch_id: ele.batch_id
                  };

                  _this22.temparrBatch.push(obj);
                } else {
                  var _obj = {
                    is_file_shared: ele.is_file_shared,
                    batch_id: ele.batch_id
                  };

                  _this22.temparrBatch.push(_obj);
                }
              });
              this.getStudentsData.map(function (ele) {
                if (ele.isChecked == true) {
                  var obj = {
                    file_access_end_time: moment__WEBPACK_IMPORTED_MODULE_3__(ele.file_access_end_time).format('YYYY-MM-DD'),
                    file_access_start_time: moment__WEBPACK_IMPORTED_MODULE_3__(ele.file_access_start_time).format('YYYY-MM-DD'),
                    is_file_shared: ele.is_file_shared,
                    student_id: ele.student_id
                  };

                  _this22.temparrStudent.push(obj);
                } else {
                  var _obj2 = {
                    is_file_shared: ele.is_file_shared,
                    student_id: ele.student_id
                  };

                  _this22.temparrStudent.push(_obj2);
                }
              });
              this.fetchShareOption.is_readonly = this.isReadonlyStu ? 'Y' : 'N';
              this.fileService.shareFile(this.fetchShareOption).subscribe(function (data) {
                var msg = {
                  type: "success",
                  body: "File Shared Successfully"
                };

                _this22.appC.popToast(msg);

                _this22.treeUpdater.emit(true);

                _this22.closePopup.emit(_this22.CloseValuePopup);
              }, function (error) {
                var msg = {
                  type: "error",
                  body: error.error.message
                };

                _this22.appC.popToast(msg);
              });
            }
          }, {
            key: "validationsOfTime",
            value: function validationsOfTime() {
              var isNotCountSelected = 0;

              if (this.batchesId) {
                for (var i = 0; i < this.getBatchesData.length; i++) {
                  if (this.getBatchesData[i].isChecked) {
                    var a = new Date(this.getBatchesData[i].file_access_start_time.toString());
                    var b = new Date(this.getBatchesData[i].file_access_end_time.toString());

                    if (a.getTime() > b.getTime()) {
                      this.services.showErrorMessage("error", "Incorrect Details", "Access start Date Cannot be more than access end date");
                      return false;
                    }
                  } else {
                    if (!this.getBatchesData[i].isUpdated) {
                      isNotCountSelected++;
                    }
                  }
                }

                if (isNotCountSelected == this.getBatchesData.length) {
                  var msg = this.schoolModel ? "Please select section for share file" : "Please select batch for share file";
                  this.services.showErrorMessage("error", "Incorrect Details", msg);
                  return false;
                }

                return true;
              } else if (this.studentsId) {
                for (var _i3 = 0; _i3 < this.getStudentsData.length; _i3++) {
                  if (moment__WEBPACK_IMPORTED_MODULE_3__(this.getStudentsData[_i3].file_access_start_time) > moment__WEBPACK_IMPORTED_MODULE_3__(this.getStudentsData[_i3].file_access_end_time)) {
                    this.services.showErrorMessage("error", "Incorrect Details", "Access start Date Cannot be more than access end date");
                    return false;
                  }
                }

                return true;
              }
            }
          }, {
            key: "shareFile",
            value: function shareFile(unshare) {
              var _this23 = this;

              this.fetchShareOption.file_id = this.fileIdGet;
              this.fetchShareOption.share_type = "3";
              this.fetchShareOption.student_batch_share = "1";
              this.fetchShareOption.standard_id = this.getStandardsId;
              this.fetchShareOption.subject_id = this.subjectId;
              this.fetchShareOption.batches = this.temparrBatch;
              this.fetchShareOption.students = this.temparrStudent;

              if (this.tabChoice == "student") {
                if (this.fetchShareOption.standard_id == "" || this.fetchShareOption.subject_id == "") {
                  var temp_msg = !this.isProfessional ? 'Please select standard and subject' : 'Please select master course and course';
                  this.services.showErrorMessage("error", "", temp_msg);
                } else if (this.getBatchesData == []) {
                  this.services.showErrorMessage("error", "Incorrect Details", "No batches/students found");
                } else {
                  if (this.validationsOfTime() == true) {
                    this.fetchApiStudentsAndBatches();
                    return;
                  }
                }
              } else if (this.tabChoice == "public") {
                if (unshare == '1') {
                  var Obj = {
                    file_id: this.fileIdGet,
                    institute_id: this.fileService.institute_id,
                    public_share: '1',
                    share_type: 0
                  };
                  this.fileService.shareFile(Obj).subscribe(function (data) {
                    var msg = {
                      type: "success",
                      body: "File UnShared Successfully"
                    };

                    _this23.appC.popToast(msg);

                    _this23.treeUpdater.emit(true);

                    _this23.closePopup.emit(_this23.CloseValuePopup);
                  }, function (error) {});
                } else {
                  this.fileSharePublic.file_id = this.fileIdGet;

                  if (this.categoryId != '62') {
                    if (this.fileSharePublic.standard_id == "" || this.fileSharePublic.subject_id == "") {
                      var _temp_msg = !this.isProfessional ? 'Please select standard and subject' : 'Please select master course and course';

                      var msg = {
                        type: "error",
                        body: _temp_msg
                      };
                      this.appC.popToast(msg);
                    } else if (this.courseType.length == 0) {
                      var _msg = {
                        type: "error",
                        body: "Course type is mandatory"
                      };
                      this.appC.popToast(_msg);
                    } else {
                      this.courseValue = this.courseType.join();
                      this.fileSharePublic.course_types = this.courseValue;
                      this.fetchShareOption.is_readonly = this.isReadonlyPub ? 'Y' : 'N';
                      this.fileService.shareFile(this.fileSharePublic).subscribe(function (data) {
                        var msg = {
                          type: "success",
                          body: "File Shared Successfully"
                        };

                        _this23.appC.popToast(msg);

                        _this23.treeUpdater.emit(true);

                        _this23.closePopup.emit(_this23.CloseValuePopup);
                      }, function (error) {
                        var msg = {
                          type: "error",
                          body: error.error.message
                        };

                        _this23.appC.popToast(msg);
                      });
                    }
                  } else {
                    this.publicObj.file_id = this.fileIdGet;
                    this.fileService.shareFile(this.publicObj).subscribe(function (data) {
                      var msg = {
                        type: "success",
                        body: "File Shared Successfully"
                      };

                      _this23.appC.popToast(msg);

                      _this23.treeUpdater.emit(true);

                      _this23.closePopup.emit(_this23.CloseValuePopup);
                    }, function (error) {
                      var msg = {
                        type: "error",
                        body: error.error.message
                      };

                      _this23.appC.popToast(msg);
                    });
                  }
                }
              } else if (this.tabChoice == "institute") {
                this.instituteObj.file_id = this.fileIdGet;
                var mess = "Shared";

                if (unshare == '1') {
                  this.instituteObj.share_type = 0;
                  mess = "Unshared";
                }

                this.fileService.shareFile(this.instituteObj).subscribe(function (data) {
                  var msg = {
                    type: "success",
                    body: "File " + mess + " Successfully"
                  };

                  _this23.appC.popToast(msg);

                  _this23.treeUpdater.emit(true);

                  _this23.closePopup.emit(_this23.CloseValuePopup);
                }, function (error) {});
              }
            }
          }, {
            key: "courseTypeSelection",
            value: function courseTypeSelection(event) {
              this.courseType = event;
            }
          }, {
            key: "selectTab",
            value: function selectTab(tabIndex) {
              //Hide All Tabs
              document.getElementById('tab1Content').style.display = "none";
              document.getElementById('tab2Content').style.display = "none";
              document.getElementById('tab3Content').style.display = "none";
              this.activeSession = tabIndex;

              if (tabIndex == 1) {
                this.tabChoice = "student";
                this.getBatch = '0'; // (<HTMLFormElement>document.getElementById('batch')).checked = true;
              } else if (tabIndex == 2) {
                this.tabChoice = "public";
              } else {
                this.tabChoice = "institute";
              } //Show the Selected Tab


              document.getElementById('tab' + tabIndex + 'Content').style.display = "block";
              this.chooseTab(tabIndex);
            }
          }]);

          return ShareFileComponent;
        }();

        ShareFileComponent.ctorParameters = function () {
          return [{
            type: _file_manager_service__WEBPACK_IMPORTED_MODULE_1__["FileManagerService"]
          }, {
            type: _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
          }, {
            type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticatorService"]
          }, {
            type: _services_message_show_service__WEBPACK_IMPORTED_MODULE_5__["MessageShowService"]
          }];
        };

        ShareFileComponent.propDecorators = {
          closePopup: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          fileIdGet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          fileName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          shareOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          treeUpdater: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        };
        ShareFileComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
          selector: 'share-file',
          template: __importDefault(__webpack_require__(
          /*! raw-loader!./share-file.component.html */
          "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/file-manager/share-file/share-file.component.html"))["default"],
          styles: [__importDefault(__webpack_require__(
          /*! ./share-file.component.scss */
          "./src/app/components/course-module/file-manager/share-file/share-file.component.scss"))["default"]]
        }), __metadata("design:paramtypes", [_file_manager_service__WEBPACK_IMPORTED_MODULE_1__["FileManagerService"], _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _services_authenticator_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticatorService"], _services_message_show_service__WEBPACK_IMPORTED_MODULE_5__["MessageShowService"]])], ShareFileComponent);
        return ShareFileComponent;
      }();
      /***/

    },

    /***/
    "./src/app/components/course-module/file-manager/upload-popup/upload-popup.component.scss":
    /*!************************************************************************************************!*\
      !*** ./src/app/components/course-module/file-manager/upload-popup/upload-popup.component.scss ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsCourseModuleFileManagerUploadPopupUploadPopupComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".shadow {\n  border: 1px solid #e8e5e5cf;\n  display: inline-block;\n  border-radius: 3px;\n  margin: 1%;\n  padding: 1%;\n  box-shadow: 5px 5px 5px #efefef;\n}\n\n.file-uploaded {\n  margin: 25px 0 30px;\n  font-weight: 600;\n  font-size: 16px;\n}\n\n.file-uploaded span {\n  display: inline-block;\n  vertical-align: middle;\n  cursor: pointer;\n}\n\n.file-uploaded span svg {\n  margin-right: 10px;\n  width: 15px;\n}\n\n.file-uploaded span svg .cls-1 {\n  stroke: #888;\n  stroke-width: 2;\n}\n\n.file-uploaded span svg:hover .cls-1 {\n  stroke: blue;\n}\n\n.progress-bar-wrapper {\n  float: left;\n  width: 80%;\n}\n\n.upload-bar {\n  position: relative;\n  height: 8px;\n  width: 100%;\n  background: #ccc;\n  border-radius: 0;\n  overflow: hidden;\n  margin: 10px 0 5px;\n}\n\n.upload-bar > div {\n  position: absolute;\n  height: 100%;\n  width: 0%;\n  left: 0;\n  background: blue;\n  top: 0;\n  border-radius: 0;\n  transition: all 0.5s ease;\n}\n\n.cancel-upload {\n  float: right;\n  cursor: pointer;\n  margin: 4px 0 0 0px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb3Vyc2UtbW9kdWxlL2ZpbGUtbWFuYWdlci91cGxvYWQtcG9wdXAvdXBsb2FkLXBvcHVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksMkJBQTJCO0VBQzNCLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7RUFDWCwrQkFBK0I7QUFEbkM7O0FBS0E7RUFDSSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFGbkI7O0FBREE7RUFLUSxxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLGVBQWU7QUFBdkI7O0FBUEE7RUFTWSxrQkFBa0I7RUFDbEIsV0FBVztBQUV2Qjs7QUFaQTtFQVlnQixZQUFZO0VBQ1osZUFBZTtBQUkvQjs7QUFqQkE7RUFpQm9CLFlBQVk7QUFJaEM7O0FBR0E7RUFDSSxXQUFXO0VBQ1gsVUFBVTtBQUFkOztBQUdBO0VBQ0ksa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQXRCOztBQVBBO0VBU1Esa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixTQUFTO0VBQ1QsT0FBTztFQUNQLGdCQUFnQjtFQUNoQixNQUFNO0VBQ04sZ0JBQWdCO0VBQ2hCLHlCQUF5QjtBQUVqQzs7QUFFQTtFQUNJLFlBQVk7RUFDWixlQUFlO0VBQ2YsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb3Vyc2UtbW9kdWxlL2ZpbGUtbWFuYWdlci91cGxvYWQtcG9wdXAvdXBsb2FkLXBvcHVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbi5zaGFkb3d7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U4ZTVlNWNmO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgbWFyZ2luOiAxJTtcbiAgICBwYWRkaW5nOiAxJTtcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDVweCAjZWZlZmVmO1xufVxuXG5cbi5maWxlLXVwbG9hZGVkIHtcbiAgICBtYXJnaW46IDI1cHggMCAzMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIHNwYW4ge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgICAgICAgLmNscy0xIHtcbiAgICAgICAgICAgICAgICBzdHJva2U6ICM4ODg7XG4gICAgICAgICAgICAgICAgc3Ryb2tlLXdpZHRoOiAyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgLmNscy0xIHtcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiBibHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnByb2dyZXNzLWJhci13cmFwcGVyIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogODAlO1xufVxuXG4udXBsb2FkLWJhciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogOHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6ICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG1hcmdpbjogMTBweCAwIDVweDtcbiAgICAmPmRpdiB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMCU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIGJhY2tncm91bmQ6IGJsdWU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcbiAgICB9XG59XG5cbi5jYW5jZWwtdXBsb2FkIHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG1hcmdpbjogNHB4IDAgMCAwcHg7XG59XG5cblxuIl19 */";
      /***/
    },

    /***/
    "./src/app/components/course-module/file-manager/upload-popup/upload-popup.component.ts":
    /*!**********************************************************************************************!*\
      !*** ./src/app/components/course-module/file-manager/upload-popup/upload-popup.component.ts ***!
      \**********************************************************************************************/

    /*! exports provided: UploadPopupComponent */

    /***/
    function srcAppComponentsCourseModuleFileManagerUploadPopupUploadPopupComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UploadPopupComponent", function () {
        return UploadPopupComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../services/authenticator.service */
      "./src/app/services/authenticator.service.ts");
      /* harmony import */


      var _file_manager_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../file-manager.service */
      "./src/app/components/course-module/file-manager/file-manager.service.ts");
      /* harmony import */


      var _services_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../services/http.service */
      "./src/app/services/http.service.ts");
      /* harmony import */


      var ___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../.. */
      "./src/app/index.ts");

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

      var fileObj = /*#__PURE__*/function () {
        function fileObj(fileName, fileType, fileSize) {
          _classCallCheck(this, fileObj);

          this.fileName = fileName;
          this.fileType = fileType;
          this.fileSize = this.getSizeMB(fileSize);
        }

        _createClass(fileObj, [{
          key: "getSizeMB",
          value: function getSizeMB(size) {
            return size + "KB";
          }
        }, {
          key: "getSize",
          value: function getSize() {
            return this.fileSize;
          }
        }]);

        return fileObj;
      }();

      var UploadPopupComponent =
      /** @class */
      function () {
        var UploadPopupComponent = /*#__PURE__*/function () {
          function UploadPopupComponent(cd, fileService, appC, auth, httpService, msgService) {
            _classCallCheck(this, UploadPopupComponent);

            this.cd = cd;
            this.fileService = fileService;
            this.appC = appC;
            this.auth = auth;
            this.httpService = httpService;
            this.msgService = msgService;
            this.getCategoryData = [];
            this.closePopupValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
            this.selectedFiles = [];
            this.currentFolder = null;
            this.manualUpload = false;
            this.pathArray = [];
            this.currentFilesArray = [];
            this.getFilesAndFolder = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.filesAndFolder = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.filePath = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.fileLoading = "";
            this.uploadStatus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            this.progress = 0;
            this.progressBar = false;
            this.type = "";
            this.customFileArr = [];
            this.category_id = "-1";
            this.youtubeUrl = '';
            this.is_readonly = '';
            this.vimeo_category_id = '305';
            this.fileUploadXHR = '';
            this.category_image = {
              png: "1",
              jpg: "4",
              jpeg: "5",
              bmp: "6",
              mp4: "7",
              mp3: "8"
            };
            this.category_docx = {
              xls: "4",
              xlsx: "5"
            };
            this.category_pdf = {
              pdf: "2"
            };
            this.category_txt = {
              txt: "6",
              rtf: "7",
              gif: "7",
              tif: "8"
            };
            this.acceptedFiles = {
              62: {
                png: "1",
                pdf: "2",
                mp4: "3",
                jpg: "4",
                jpeg: "5",
                bmp: "6",
                gif: "7",
                tif: "8"
              },
              63: {
                pdf: "1",
                doc: "2",
                docx: "3",
                xls: "4",
                xlsx: "5",
                txt: "6",
                rtf: "7",
                jpg: "8",
                jpeg: "9",
                png: "10",
                pptx: "11",
                ppt: "12",
                zip: '13'
              },
              66: {
                pdf: "1",
                doc: "2",
                docx: "3",
                xls: "4",
                xlsx: "5",
                txt: "6",
                rtf: "7",
                jpg: "8",
                jpeg: "9",
                png: "10",
                pptx: "11",
                ppt: "12",
                zip: '13',
                mp3: "14",
                wav: "15"
              },
              67: {
                pdf: "1",
                doc: "2",
                docx: "3",
                xls: "4",
                xlsx: "5",
                txt: "6",
                rtf: "7",
                zip: '8'
              },
              182: {
                pdf: "1",
                doc: "2",
                docx: "3",
                xls: "4",
                xlsx: "5",
                txt: "6",
                rtf: "7",
                zip: '8'
              },
              305: {
                avi: '1',
                flv: '2',
                wmv: '3',
                mp4: '4',
                webm: '5',
                mkv: '6',
                ogv: '7',
                vob: '8',
                gifv: '9',
                mng: '10',
                gif: '11',
                drc: '12',
                ogg: '13',
                MTS: '14',
                M2TS: '15',
                TS: '16',
                mov: '17',
                qt: '18',
                yuv: '19',
                rm: '20',
                rmvb: '21'
              }
            };
            this.tempArr = [];
            this.isUploadingXls = false;
            this.Vimeofile = {
              files: []
            };
          }

          _createClass(UploadPopupComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.getCategories();

              if (this.editView && this.editView.editView == true) {
                this.category_id = this.editView.res.category_id;
                this.youtubeUrl = this.editView.res.file_name;
                this.is_readonly = this.editView.res.is_readonly;
              }

              console.log(this.editView);
            }
          }, {
            key: "ngOnChanges",
            value: function ngOnChanges() {
              this.customFileArr = this.generateFilePreview(this.selectedFiles);
              this.cd.detectChanges();
            }
          }, {
            key: "getCategories",
            value: function getCategories() {
              var _this24 = this;

              this.fileService.getCategories().subscribe(function (data) {
                _this24.getCategoryData = data;

                _this24.getCategoryData.map(function (ele) {
                  if (ele.category_id == "182") {
                    ele.category_name = "Study Material";
                  }
                });

                _this24.cd.detectChanges();
              }, function (error) {
                var msg = {
                  type: "error",
                  body: error.error.message
                };

                _this24.appC.popToast(msg);
              });
            }
          }, {
            key: "close",
            value: function close() {
              this.manualUpload = false;
              this.closePopupValue.emit(false);
              this.cd.detectChanges();
            }
          }, {
            key: "getName",
            value: function getName(file) {
              return file.split(".")[0];
            }
          }, {
            key: "getType",
            value: function getType(file) {
              var str = file.substring(file.lastIndexOf(".") + 1, file.length);
              return str;
            }
          }, {
            key: "generateFilePreview",
            value: function generateFilePreview(fileList) {
              var size = fileList.length;
              var tempArr = [];
              this.tempArr = tempArr;
              var file;

              if (size > 0) {
                for (var i = 0; i < size; i++) {
                  file = fileList[i];
                  tempArr.push(new fileObj(this.getName(file.name), this.getType(file.name), file.size));
                }
              }

              return tempArr;
            }
          }, {
            key: "convertBase64ToArray",
            value: function convertBase64ToArray(val) {
              var binary_string = window.atob(val);
              var len = binary_string.length;
              var bytes = new Uint8Array(len);

              for (var i = 0; i < len; i++) {
                bytes[i] = binary_string.charCodeAt(i);
              }

              return bytes.buffer;
            }
          }, {
            key: "updateXlsHeaders",
            value: function updateXlsHeaders(ev) {
              ev.xhr.setRequestHeader("processData", "false");
              ev.xhr.setRequestHeader("contentType", "false");
              ev.xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
              ev.xhr.setRequestHeader("enctype", "multipart/form-data");
              ev.xhr.setRequestHeader("Authorization", sessionStorage.getItem("Authorization"));
            }
          }, {
            key: "uploadHandler",
            value: function uploadHandler() {
              if (this.category_id != 230) {
                if (this.categoryCheck(this.category_id) == true) {
                  if (this.selectedFiles.length == 0) {
                    this.appC.popToast({
                      type: "error",
                      body: "No file selected"
                    });
                    return;
                  }

                  if (this.duplicateFileCheck() == false) {
                    this.appC.popToast({
                      type: "error",
                      body: "File already exists"
                    });
                    return;
                  }

                  if (this.category_id == this.vimeo_category_id) {
                    this.uploadVimeo();
                  } else {
                    this.uploadFile();
                  }
                }
              } else {
                this.uploadFile();
              }
            }
          }, {
            key: "uploadVimeo",
            value: function uploadVimeo() {
              var _this25 = this;

              var path = "";
              var institute_id = sessionStorage.getItem("institute_id");
              path = this.pathArray.join('/') + '/';
              var formData = new FormData(); // formData.append("file", this.selectedFiles[0]);

              var size = 0;
              var fileJson = {
                "size": '',
                "title": ''
              };

              if (this.category_id == this.vimeo_category_id) {
                if (this.youtubeUrl == '') {
                  this.appC.popToast({
                    type: "error",
                    body: "Please Enter title"
                  });
                  return;
                }

                this.selectedFiles1 = this.Vimeofile.files[0];
                size = this.Vimeofile.files && this.Vimeofile.files[0] ? this.Vimeofile.files[0].size : 0;
                fileJson.size = this.Vimeofile.files && this.Vimeofile.files[0] ? this.Vimeofile.files[0].size : 0;
                fileJson.title = this.youtubeUrl;
              } else {
                var arr = Array.from(this.selectedFiles);
                arr.map(function (ele, index) {
                  formData.append("file_" + index, ele);
                });
              }

              formData.append('fileJson', JSON.stringify(fileJson));
              this.uploadStatus.emit(true);
              var base = this.auth.getBaseUrl();
              var urlPostXlsDocument = base + "/api/v1/instFileSystem/createFiles";
              var newxhr = new XMLHttpRequest();
              var auths = {
                userid: sessionStorage.getItem('userid'),
                userType: sessionStorage.getItem('userType'),
                password: sessionStorage.getItem('password'),
                institution_id: sessionStorage.getItem('institute_id'),
                category_id: this.category_id
              };
              var Authorization = btoa(auths.userid + "|" + auths.userType + ":" + auths.password + ":" + auths.institution_id);
              newxhr.open("POST", urlPostXlsDocument, true); // newxhr.setRequestHeader("Pragma", "no-cache");
              // newxhr.setRequestHeader("Cache-Control", "no-cache, no-store, must-revalidate");
              // newxhr.setRequestHeader("processData", "false");

              newxhr.setRequestHeader("category_id", this.category_id.toString());
              newxhr.setRequestHeader("institute_id", institute_id);

              if (this.category_id != this.vimeo_category_id) {
                newxhr.setRequestHeader("youtubeUrl", this.youtubeUrl);
              }

              newxhr.setRequestHeader("Authorization", Authorization);
              newxhr.setRequestHeader("enctype", "multipart/form-data;");
              newxhr.setRequestHeader("keyName", path);
              newxhr.setRequestHeader("Accept", "application/json, text/javascript"); // newxhr.setRequestHeader("Access-Control-Allow-Headers", "*");
              // newxhr.setRequestHeader("dataType", "json");

              newxhr.setRequestHeader("Access-Control-Allow-Origin", "*");
              this.isUploadingXls = true;

              var _iterator = _createForOfIteratorHelper(this.tempArr),
                  _step;

              try {
                var _loop = function _loop() {
                  var file = _step.value;
                  newxhr.upload.addEventListener('progress', function (e) {
                    if (e.lengthComputable) {
                      _this25.progress = Math.round(e.loaded * 100 / e.total);
                      document.getElementById('progress-width').style.width = _this25.progress + '%';
                      _this25.fileLoading = file.name;
                    }
                  }, false);
                };

                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  _loop();
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              newxhr.onreadystatechange = function () {
                if (newxhr.readyState == 4) {
                  _this25.progress = 0;

                  if (newxhr.status >= 200 && newxhr.status < 300) {
                    _this25.isUploadingXls = false;

                    if (_this25.category_id != _this25.vimeo_category_id) {
                      var data = {
                        type: 'success',
                        title: "File uploaded successfully",
                        body: newxhr.response.fileName
                      };

                      _this25.appC.popToast(data);
                    } else {
                      var payloadObject = JSON.parse(newxhr.response);
                      var Vimeopayload = payloadObject;
                      var res = Vimeopayload.upload_link.substring(0, Vimeopayload.upload_link.lastIndexOf("="));
                      var url = window.location.href;
                      url = url.substring(0, url.lastIndexOf("#"));
                      res = res.concat('=' + url + '#/view/course/file-manager/drive?videoId=' + Vimeopayload.videoId);

                      if (Vimeopayload.upload_link != '' && Vimeopayload.upload_link != null) {
                        // (document.getElementById('form') as HTMLFormElement).action = res;	
                        // this.form.nativeElement.submit();	
                        _this25.patchRequest(Vimeopayload, path);
                      } else {
                        _this25.getFilesAndFolder.emit(newxhr.status);

                        _this25.uploadStatus.emit(false);

                        _this25.manualUpload = false;

                        _this25.filePath.emit(path);

                        _this25.closePopupValue.emit(false);
                      }
                    } // this.uploadStatus.emit(false);
                    // this.manualUpload = false;
                    // this.filePath.emit(path);
                    // this.closePopupValue.emit(false);
                    // this.getFilesAndFolder.emit(newxhr.status);

                  } else {
                    _this25.isUploadingXls = false;

                    _this25.uploadStatus.emit(false);

                    var _data = {
                      type: 'error',
                      title: "File uploaded failed",
                      body: newxhr.response.fileName
                    };

                    _this25.appC.popToast(_data);
                  }
                }
              };

              newxhr.send(formData);
            }
          }, {
            key: "uploadFile",
            value: function uploadFile() {
              var _this26 = this;

              var path = "";
              var institute_id = sessionStorage.getItem("institute_id");
              path = this.pathArray.join('/') + '/';
              var formData = new FormData(); // formData.append("file", this.selectedFiles[0]);

              var size = 0;
              var fileJson = {
                "size": '',
                "title": ''
              };

              if (this.category_id == this.vimeo_category_id) {
                if (this.youtubeUrl == '') {
                  this.appC.popToast({
                    type: "error",
                    body: "Please Enter title"
                  });
                  return;
                }

                size = this.Vimeofile.files && this.Vimeofile.files[0] ? this.Vimeofile.files[0].size : 0;
                fileJson.size = this.Vimeofile.files && this.Vimeofile.files[0] ? this.Vimeofile.files[0].size : 0; // fileJson.size = (size / (1024 * 1024)).toFixed(3);

                fileJson.title = this.youtubeUrl;
              } else {
                var arr = Array.from(this.selectedFiles);
                arr.map(function (ele, index) {
                  formData.append("file_" + index, ele);
                });
              }

              formData.append('fileJson', JSON.stringify(fileJson));
              this.uploadStatus.emit(true);
              var base = this.auth.getBaseUrl();
              var urlPostXlsDocument = base + "/api/v1/instFileSystem/createFiles";
              var newxhr = new XMLHttpRequest();
              var auths = {
                userid: sessionStorage.getItem('userid'),
                userType: sessionStorage.getItem('userType'),
                password: sessionStorage.getItem('password'),
                institution_id: sessionStorage.getItem('institute_id'),
                category_id: this.category_id
              };
              var Authorization = btoa(auths.userid + "|" + auths.userType + ":" + auths.password + ":" + auths.institution_id);
              newxhr.open("POST", urlPostXlsDocument, true); // newxhr.setRequestHeader("Pragma", "no-cache");
              // newxhr.setRequestHeader("Cache-Control", "no-cache, no-store, must-revalidate");
              // newxhr.setRequestHeader("processData", "false");

              newxhr.setRequestHeader("category_id", this.category_id.toString());
              newxhr.setRequestHeader("institute_id", institute_id);

              if (this.category_id != this.vimeo_category_id) {
                newxhr.setRequestHeader("youtubeUrl", this.youtubeUrl);
              }

              newxhr.setRequestHeader("Authorization", Authorization);
              newxhr.setRequestHeader("enctype", "multipart/form-data;");
              newxhr.setRequestHeader("keyName", path);
              newxhr.setRequestHeader("Accept", "application/json, text/javascript"); // newxhr.setRequestHeader("Access-Control-Allow-Headers", "*");
              // newxhr.setRequestHeader("dataType", "json");

              newxhr.setRequestHeader("Access-Control-Allow-Origin", "*");
              this.isUploadingXls = true;

              var _iterator2 = _createForOfIteratorHelper(this.tempArr),
                  _step2;

              try {
                var _loop2 = function _loop2() {
                  var file = _step2.value;
                  newxhr.upload.addEventListener('progress', function (e) {
                    if (e.lengthComputable) {
                      _this26.progress = Math.round(e.loaded * 100 / e.total);
                      document.getElementById('progress-width').style.width = _this26.progress + '%';
                      _this26.fileLoading = file.name;
                    }
                  }, false);
                };

                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  _loop2();
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }

              newxhr.onreadystatechange = function () {
                if (newxhr.readyState == 4) {
                  _this26.progress = 0;

                  if (newxhr.status >= 200 && newxhr.status < 300) {
                    _this26.isUploadingXls = false;

                    if (_this26.category_id != _this26.vimeo_category_id) {
                      var data = {
                        type: 'success',
                        title: "File uploaded successfully",
                        body: newxhr.response.fileName
                      };

                      _this26.appC.popToast(data);
                    } else {
                      var payloadObject = JSON.parse(newxhr.response);
                      var Vimeopayload = payloadObject;
                      var res = Vimeopayload.upload_link.substring(0, Vimeopayload.upload_link.lastIndexOf("="));
                      var url = window.location.href;
                      url = url.substring(0, url.lastIndexOf("#"));
                      res = res.concat('=' + url + '#/view/course/file-manager/drive?videoId=' + Vimeopayload.videoId);

                      if (Vimeopayload.upload_link != '' && Vimeopayload.upload_link != null) {
                        document.getElementById('form').action = res;

                        _this26.form.nativeElement.submit();
                      }
                    }

                    _this26.uploadStatus.emit(false);

                    _this26.manualUpload = false;

                    _this26.filePath.emit(path);

                    _this26.closePopupValue.emit(false);

                    _this26.getFilesAndFolder.emit(newxhr.status);
                  } else {
                    _this26.isUploadingXls = false;

                    _this26.uploadStatus.emit(false);

                    var _data2 = {
                      type: 'error',
                      title: "File uploaded failed",
                      body: newxhr.response.fileName
                    };

                    _this26.appC.popToast(_data2);
                  }
                }
              };

              newxhr.send(formData);
            }
          }, {
            key: "patchRequest",
            value: function patchRequest(obj, path) {
              var _this27 = this;

              // this.auth.showLoader();
              var base = this.auth.getBaseUrl();
              var urlPostXlsDocument = obj.upload_link;
              this.fileUploadXHR = new XMLHttpRequest();
              this.fileUploadXHR.open("PATCH", urlPostXlsDocument, true);
              this.fileUploadXHR.setRequestHeader("Tus-Resumable", '1.0.0');
              this.fileUploadXHR.setRequestHeader("Upload-Offset", '0');
              this.fileUploadXHR.setRequestHeader("Content-Type", "application/offset+octet-stream");
              this.fileUploadXHR.setRequestHeader("Accept", "application/vnd.vimeo.*+json;version=3.4");
              this.progressBar = true;
              this.isUploadingXls = true;
              this.fileUploadXHR.upload.addEventListener('progress', function (e) {
                if (e.lengthComputable) {
                  _this27.progress = Math.round(e.loaded * 100 / e.total);
                  document.getElementById('progress-width').style.width = _this27.progress + '%';
                }
              }, false);

              this.fileUploadXHR.onreadystatechange = function () {
                if (_this27.fileUploadXHR.readyState == 4) {
                  if (_this27.fileUploadXHR.status >= 200 && _this27.fileUploadXHR.status < 300) {
                    _this27.auth.hideLoader();

                    _this27.updateVimeoStatus(obj.videoId);

                    _this27.isUploadingXls = false;

                    _this27.getFilesAndFolder.emit(200);

                    _this27.uploadStatus.emit(false);

                    _this27.manualUpload = false;

                    _this27.filePath.emit(path);

                    _this27.closePopupValue.emit(false);
                  }
                } else {
                  _this27.progress = 0;
                  _this27.progressBar = false;
                  _this27.isUploadingXls = false;

                  _this27.auth.hideLoader();
                }
              };

              console.log("this.selectedFiles[0]", this.selectedFiles1);
              this.fileUploadXHR.send(this.selectedFiles1);
            }
          }, {
            key: "updateVimeoStatus",
            value: function updateVimeoStatus(videoId) {
              var _this28 = this;

              var obj = {
                "videoID": videoId,
                "institute_id": sessionStorage.getItem("institute_id"),
                "video_status": "Queued",
                "category_id": Number(this.vimeo_category_id)
              };
              this.httpService.postData('/api/v1/instFileSystem/updateVideoStatus', obj).subscribe(function (res) {
                _this28.msgService.showErrorMessage('success', '', 'File(s) uploaded successfully'); // $('#uploadRec').modal('hide');


                _this28.fileUploadXHR = '';
              }, function (err) {
                console.log(err);
              });
            }
          }, {
            key: "duplicateFileCheck",
            value: function duplicateFileCheck() {
              for (var i = 0; i < this.selectedFiles.length; i++) {
                for (var j = 0; j < this.currentFilesArray.length; j++) {
                  if (this.selectedFiles[i].name == this.currentFilesArray[j].file_name) {
                    return false;
                  }
                }
              }

              return true;
            }
          }, {
            key: "categoryCheck",
            value: function categoryCheck(id) {
              if (this.category_id == '-1') {
                this.createErrorToast("Please select a category");
                return false;
              } else {
                if (this.category_id != 230) {
                  this.type = Object.keys(this.acceptedFiles[this.category_id]).join();

                  for (var i = 0; i < this.selectedFiles.length; i++) {
                    var type = this.getType(this.selectedFiles[i].name);

                    if (this.acceptedFiles[this.category_id].hasOwnProperty(type) == false) {
                      this.createErrorToast("File doesn\'t match with the selected category ");
                      return false;
                    } else if (new RegExp("[~#%\&'{}+\|]|\\.\\.|^\\.|\\.$").test(this.selectedFiles[i].name)) {
                      this.createErrorToast("Special characters in file name are not allowed");
                      return false;
                    }
                  }
                }

                return true;
              }
            }
          }, {
            key: "fillFiles",
            value: function fillFiles(files) {
              var _this29 = this;

              setTimeout(function () {
                var manualUploadedFileList = document.getElementById('uploadFileControl').files;
                var filesArr = Array.from(manualUploadedFileList);
                _this29.selectedFiles = filesArr;
                _this29.customFileArr = _this29.generateFilePreview(_this29.selectedFiles);
              }, 500);
            }
          }, {
            key: "createErrorToast",
            value: function createErrorToast(message) {
              var msg = {
                type: "error",
                body: message
              };
              this.appC.popToast(msg);
            }
          }, {
            key: "updateYoutubeURL",
            value: function updateYoutubeURL() {
              var _this30 = this;

              var obj = {
                "title": this.youtubeUrl,
                "institute_id": sessionStorage.getItem('institute_id'),
                "category_id": this.category_id,
                "is_readonly": this.is_readonly
              };
              this.auth.showLoader();
              this.httpService.putData('/api/v1/instFileSystem/update/' + this.editView.res.file_id, obj).subscribe(function (res) {
                _this30.auth.hideLoader();

                _this30.manualUpload = false;
                var data = {
                  type: 'success',
                  title: _this30.youtubeUrl + " updated successfully",
                  body: ''
                };

                _this30.appC.popToast(data);

                if (_this30.category_id == 230 || _this30.category_id == _this30.vimeo_category_id) {
                  var temp = _this30.editView.res.keyName.split('/https');

                  if (temp && temp.length) {
                    var newPath = temp[0].concat('/');

                    _this30.filePath.emit(newPath);
                  }
                } else {
                  var path = _this30.editView.res.keyName.split('/');

                  path.pop();

                  var _newPath2 = path.join('/');

                  _newPath2 = _newPath2.concat('/');

                  _this30.filePath.emit(_newPath2);
                }

                _this30.getFilesAndFolder.emit(200);

                _this30.closePopupValue.emit(false);
              });
            }
          }, {
            key: "onFileChange",
            value: function onFileChange($event) {
              this.Vimeofile = $event.target;
              this.selectedFiles = $event.target.files;
            }
          }]);

          return UploadPopupComponent;
        }();

        UploadPopupComponent.ctorParameters = function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }, {
            type: _file_manager_service__WEBPACK_IMPORTED_MODULE_3__["FileManagerService"]
          }, {
            type: _app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]
          }, {
            type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticatorService"]
          }, {
            type: _services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]
          }, {
            type: ___WEBPACK_IMPORTED_MODULE_5__["MessageShowService"]
          }];
        };

        UploadPopupComponent.propDecorators = {
          icon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['icon', {
              "static": false
            }]
          }],
          closePopupValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          selectedFiles: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          currentFolder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          fetchPrefillFolderAndFiles: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          manualUpload: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          pathArray: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          currentFilesArray: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          editView: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          getFilesAndFolder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          filesAndFolder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          filePath: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          uploadStatus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          form: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['form']
          }]
        };
        UploadPopupComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
          selector: 'app-upload-popup',
          template: __importDefault(__webpack_require__(
          /*! raw-loader!./upload-popup.component.html */
          "./node_modules/raw-loader/dist/cjs.js!./src/app/components/course-module/file-manager/upload-popup/upload-popup.component.html"))["default"],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          styles: [__importDefault(__webpack_require__(
          /*! ./upload-popup.component.scss */
          "./src/app/components/course-module/file-manager/upload-popup/upload-popup.component.scss"))["default"]]
        }), __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _file_manager_service__WEBPACK_IMPORTED_MODULE_3__["FileManagerService"], _app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"], _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticatorService"], _services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"], ___WEBPACK_IMPORTED_MODULE_5__["MessageShowService"]])], UploadPopupComponent);
        return UploadPopupComponent;
      }();
      /***/

    }
  }]);
})();
//# sourceMappingURL=components-course-module-file-manager-file-manager-module-es5.js.map