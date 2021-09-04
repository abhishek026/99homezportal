(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-components-library-management-library-management-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/library-management/activity/activity.component.html":
    /*!**********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/library-management/activity/activity.component.html ***!
      \**********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsLibraryManagementActivityActivityComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"coming_soon\">\n  <span>Coming soon</span>\n</div>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/library-management/add-book/add-book.component.html":
    /*!**********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/library-management/add-book/add-book.component.html ***!
      \**********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsLibraryManagementAddBookAddBookComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<section>\n  <div class=\"add_book_container\">\n\n    <div class=\"add_book_item\">\n      <span style=\"margin-bottom:3px;\">Title<span class=\"text-danger\">*</span></span>\n      <input type=\"text\" name=\"\" value=\"\" placeholder=\"Enter Book Name\" class=\"add_input\" [(ngModel)]=\"title\">\n    </div>\n\n    <div class=\"add_book_item\">\n      <span style=\"margin-bottom:3px;\">Category<span class=\"text-danger\">*</span></span>\n      <div class=\"select_with_add\">\n        <select class=\"add_input1\" name=\"\" (ngModelChange)=\"getSubCategory($event)\" [(ngModel)]=\"categoryName\">\n          <option value=\"-1\">Select Category Name</option>\n          <option [value]=\"category.category_id\" *ngFor=\"let category of categoryList let i = index\">{{category.category_name}}</option>\n        </select>\n        <!-- <div class=\"add\" *ngIf=\"!addCategory\">\n          <button type=\"button\" name=\"button\" class=\"add_new\" (click)=\"addNewCategory()\">\n            <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n          </button>\n        </div> -->\n        <!-- <div class=\"\" *ngIf=\"addCategory\">\n          <input type=\"number\" name=\"\" value=\"\" placeholder=\"Enter Category Name\" class=\"add_input1\">\n        </div>\n        <div class=\"save_and_cancel\" *ngIf=\"addCategory\">\n          <span class=\"save\">Save</span>\n          <span class=\"cancel\">Cancel</span>\n        </div> -->\n      </div>\n    </div>\n\n\n    <div class=\"add_book_item\">\n      <span style=\"margin-bottom:3px;\">Sub-Category</span>\n      <select class=\"add_input1\" name=\"\" [(ngModel)]=\"subcategoryName\">\n        <option value=\"-1\">Select Sub-Category Name</option>\n        <option [value]=\"subCategory.category_id\" *ngFor=\"let subCategory of subcategoryList let i = index\">{{subCategory.category_name}}</option>\n      </select>\n    </div>\n\n    <div class=\"add_book_item\">\n      <span style=\"margin-bottom:3px;\">Subject<span class=\"text-danger\">*</span></span>\n      <select class=\"add_input1\" name=\"\" [(ngModel)]=\"subjectName\">\n        <option value=\"-1\">Select Subject Name</option>\n        <option [value]=\"subject.subject_id\" *ngFor=\"let subject of subjectList let i = index\">{{subject.subject_name}}</option>\n      </select>\n    </div>\n\n    <div class=\"add_book_item\">\n      <span style=\"margin-bottom:3px;\">Publication<span class=\"text-danger\">*</span></span>\n      <select class=\"add_input1\" name=\"\" [(ngModel)]=\"publicationName\">\n        <option value=\"-1\">Select Publication Name</option>\n        <option [value]=\"publication.publication_id\" *ngFor=\"let publication of publicationList let i = index\">{{publication.publication_name}}</option>\n      </select>\n    </div>\n\n    <div class=\"add_book_item\">\n      <span style=\"margin-bottom:3px;\">Author<span class=\"text-danger\">*</span></span>\n      <!-- <select class=\"add_input1\" name=\"\" [(ngModel)]=\"authorName\">\n        <option value=\"-1\">Select Author Name</option>\n        <option [value]=\"author.author_id\" *ngFor=\"let author of authorList let i = index\">{{author.author_name}}</option>\n      </select> -->\n      <ng-multiselect-dropdown\n        [placeholder]=\"'Select Author Name'\"\n        [data]=\"authorList\"\n        [settings]=\"authorSettings\"\n        [(ngModel)]=\"selectedAuthorList\" >\n      </ng-multiselect-dropdown>\n    </div>\n\n    <div class=\"add_book_item\">\n      <span style=\"margin-bottom:3px;\">Quantity<span class=\"text-danger\">*</span></span>\n      <input type=\"number\" name=\"\" value=\"\" placeholder=\"No of Books\" class=\"add_input2\" [(ngModel)]=\"bookQty\">\n    </div>\n\n    <div class=\"add_book_item\">\n      <span style=\"margin-bottom:3px;\">Amount in Rs.<span class=\"text-danger\">*</span></span>\n      <input type=\"number\" name=\"\" value=\"\" placeholder=\"Price per book\" class=\"add_input2\" [(ngModel)]=\"bookAmt\">\n    </div>\n\n    <!-- <div class=\"add_book_item\">\n      <span style=\"margin-bottom:3px;\">Book Add Date*</span>\n      <input type=\"text\" name=\"\" value=\"\" placeholder=\"\" disabled class=\"add_input2\" [(ngModel)]=\"today\">\n      <i class=\"fa fa-calendar\" style=\"cursor: pointer;color: #1283f4;\" (click)=\"openCalendar('addDate')\"></i>\n\n      <input  type=\"text\" value=\"\" id=\"addDate\" class=\"widgetDatepicker bsDatepicker\" name=\"addDate\"\n       [(ngModel)]=\"bookAddDate\" (ngModelChange)=\"addNewDate($event)\" readonly=\"true\" bsDatepicker  style=\"width:0px;margin-right: 10px;\"/>\n    </div> -->\n\n    <div class=\"add_book_item\">\n      <span style=\"margin-bottom:3px;\">Language<span class=\"text-danger\">*</span></span>\n      <select class=\"add_input1\" name=\"\" [(ngModel)]=\"bookLang\">\n        <option value=\"-1\">Select Language</option>\n        <option [value]=\"language.language_id\" *ngFor=\"let language of languageList let i = index\">{{language.language_name}}</option>\n      </select>\n    </div>\n\n  </div>\n</section>\n\n<section>\n  <div class=\"add_details_btn_container\">\n    <button type=\"button\" name=\"button\" class=\"add_details\" (click)=\"showAdditionalDetails()\">\n      <i class=\"fa fa-plus\" aria-hidden=\"true\" *ngIf=\"!additiobnalDetailsDisplay\"></i>\n      <i class=\"fa fa-minus\" aria-hidden=\"true\" *ngIf=\"additiobnalDetailsDisplay\"></i> &nbsp;&nbsp;\n       Additional Details\n    </button>\n  </div>\n</section>\n\n<section class=\"addtional_details_section\" *ngIf=\"additiobnalDetailsDisplay\">\n  <div class=\"add_book_more_details\">\n\n    <div class=\"add_book_item\">\n      <span style=\"margin-bottom:3px;\">Barcode Number</span>\n      <input type=\"text\" name=\"\" value=\"\" placeholder=\"Enter Barcode Number\" class=\"add_input2\" [(ngModel)]=\"bookBarCodeNumber\">\n    </div>\n\n    <div class=\"add_book_item\">\n      <span style=\"margin-bottom:3px;\">ISBN Number</span>\n      <input type=\"text\" name=\"\" value=\"\" placeholder=\"Enter ISBN Number\" class=\"add_input2\" [(ngModel)]=\"bookISBN\">\n    </div>\n\n    <div class=\"add_book_item\">\n      <span style=\"margin-bottom:3px;\">Number of pages</span>\n      <input type=\"number\" name=\"\" value=\"\" placeholder=\"Enter No. of pages\" class=\"add_input2\" [(ngModel)]=\"bookPagesCount\">\n    </div>\n\n    <div class=\"add_book_item\">\n      <span style=\"margin-bottom:3px;\">Volume</span>\n      <input type=\"number\" name=\"\" value=\"\" placeholder=\"Enter Volume of books\" class=\"add_input2\" [(ngModel)]=\"bookVolume\">\n    </div>\n\n    <div class=\"add_book_item\">\n      <span style=\"margin-bottom:3px;\">Edition</span>\n      <input type=\"text\" name=\"\" value=\"\" placeholder=\"Enter Edition\" class=\"add_input2\" [(ngModel)]=\"bookEdition\">\n    </div>\n\n    <div class=\"add_book_item\">\n      <span style=\"margin-bottom:3px;\">Reference</span>\n      <select class=\"add_input2\" name=\"\" [(ngModel)]=\"bookReference\">\n        <option value=\"-1\">Select Reference</option>\n        <option [value]=\"reference.reference_id\" *ngFor=\"let reference of referenceList let i = index\">{{reference.reference_name}}</option>\n      </select>\n    </div>\n\n    <!-- <div class=\"add_book_item\">\n      <span style=\"margin-bottom:3px;\">Language</span>\n      <select class=\"add_input2\" name=\"\" [(ngModel)]=\"bookLang\">\n        <option value=\"-1\">Select Language</option>\n        <option [value]=\"language.language_id\" *ngFor=\"let language of languageList let i = index\">{{language.language_name}}</option>\n      </select>\n    </div> -->\n\n  </div>\n\n  <hr>\n\n  <div class=\"book_detail_name_container\">\n    <span>Book Bill Details</span>\n  </div>\n\n  <div class=\"books_details_container\">\n\n    <div class=\"add_book_item\">\n      <span style=\"margin-bottom:3px;\">Bill Number</span>\n      <input type=\"text\" name=\"\" value=\"\" placeholder=\"Enter Bill Number\" class=\"add_input2\" [(ngModel)]=\"bookBillNumber\">\n    </div>\n\n    <div class=\"add_book_item\">\n      <span style=\"margin-bottom:3px;\">Book Lost Amount in Rs.</span>\n      <input type=\"number\" name=\"\" value=\"\" placeholder=\"Enter Book Lost Amount\" class=\"add_input2\" [(ngModel)]=\"bookLostAmt\">\n    </div>\n\n    <div class=\"add_book_item\">\n      <span style=\"margin-bottom:3px;\">Bill Date</span>\n      <input type=\"text\" name=\"\" value=\"\" placeholder=\"\" class=\"add_input2\" readonly [(ngModel)]=\"tempBillDate\" (click)=\"openCalendar('billDate')\">\n      <i class=\"fa fa-calendar\" style=\"cursor: pointer;color: #1283f4;\" (click)=\"openCalendar('billDate')\"></i>\n\n      <input  type=\"text\" value=\"\" id=\"billDate\" class=\"widgetDatepicker bsDatepicker\" name=\"billDate\"\n       [(ngModel)]=\"bookBillDate\" (ngModelChange)=\"addBookDate($event)\" readonly=\"true\" bsDatepicker  style=\"width:0px;margin-right: 10px;\"/>\n    </div>\n\n  </div>\n\n  <div class=\"books_details_remark_container\">\n    <div class=\"add_book_item\">\n      <span style=\"margin-bottom:3px;\">Remark</span>\n      <textarea name=\"name\" rows=\"3\" class=\"add_input3\" placeholder=\"Enter Remarks...\" [(ngModel)]=\"bookRemarks\"></textarea>\n    </div>\n  </div>\n\n</section>\n\n\n<section style=\"background: #fdfdfd;\">\n  <div class=\"action_button_container\">\n    <button type=\"button\" name=\"button\" class=\"cancel_btn\" (click)=\"clearAllFields()\">Cancel</button>\n    <button type=\"button\" name=\"button\" class=\"save_btn\" (click)=\"addNewBook()\" [disabled]=\"multiClickDisabled\">Save</button>\n  </div>\n</section>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/library-management/dashboard/dashboard.component.html":
    /*!************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/library-management/dashboard/dashboard.component.html ***!
      \************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsLibraryManagementDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<section class=\"row\" [ngClass]=\"{'hide': !isDataLoaded}\">\n    <div id=\"pieContainer\">\n    </div>\n</section>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/library-management/issue-book/issue-book.component.html":
    /*!**************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/library-management/issue-book/issue-book.component.html ***!
      \**************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsLibraryManagementIssueBookIssueBookComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<section class=\"main_container\">\n  <section *ngIf=\"!bookSuggestion\">\n    <div class=\"search_bar_container\">\n      <input type=\"text\" name=\"\" value=\"\" placeholder=\"Search Book\" class=\"search_box\" (keyup)=\"searchInList($event)\"\n        [(ngModel)]=\"searchInput\">\n      <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n      <i class=\"fa fa-sort-desc\" aria-hidden=\"true\" (click)=\"showFilter()\"></i>\n\n      <!-- <span *ngIf=\"!searchResult\">&#8701; Search here! </span> -->\n    </div>\n\n    <!-- FILTER -->\n    <div class=\"search_box_filter_container\" *ngIf=\"filter\" (click)=\"closeBookTitleSuggestion()\">\n\n      <div class=\"filter_item\">\n        <div class=\"label_container\">\n          <span style=\"top: 10px;\">Book Title</span>\n        </div>\n        <div class=\"input_container\">\n          <input type=\"text\" name=\"\" value=\"\" placeholder=\"Enter Book Name\" [(ngModel)]=\"searchTitle\"\n            (keyup)=\"searchInBookList($event)\">\n          <div class=\"book_suggestion_container\" *ngIf=\"bookSuggestionForTitle\">\n            <div class=\"book_suggestion_item\" *ngFor=\"let book of bookSuggestionListForTitle let i = index\">\n              <div class=\"name_container\" (click)=\"selectBookForAdvanceSearch(book.title)\">\n                <span>{{book.title}}</span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"filter_item\">\n        <div class=\"label_container\">\n          <span>Author</span>\n        </div>\n        <div class=\"input_container\">\n          <select class=\"add_input1\" name=\"\" [(ngModel)]=\"searchAuthorId\">\n            <option value=\"-1\" style=\"color: #cfcfcf;\">Select Author Name</option>\n            <option [value]=\"author.author_id\" *ngFor=\"let author of authorList let i = index\">{{author.author_name}}\n            </option>\n          </select>\n        </div>\n      </div>\n\n      <div class=\"filter_item\">\n        <div class=\"label_container\">\n          <span>Category</span>\n        </div>\n        <div class=\"input_container\">\n          <select class=\"add_input1\" name=\"\" (ngModelChange)=\"getSubCategory($event)\" [(ngModel)]=\"searchCategoryId\">\n            <option value=\"-1\" style=\"color: #cfcfcf;\">Select Category Name</option>\n            <option [value]=\"category.category_id\" [attr.id]=\"category.category_id\"\n              *ngFor=\"let category of categoryList let i = index\">{{category.category_name}}</option>\n          </select>\n        </div>\n      </div>\n\n      <div class=\"filter_item\">\n        <div class=\"label_container\">\n          <span>Sub-Category</span>\n        </div>\n        <div class=\"input_container\">\n          <select class=\"add_input1\" name=\"\" [(ngModel)]=\"searchSubcategoryId\">\n            <option value=\"-1\" style=\"color: #cfcfcf;\">Select Sub-Category Name</option>\n            <option [value]=\"subCategory.category_id\" *ngFor=\"let subCategory of subcategoryList let i = index\">\n              {{subCategory.category_name}}</option>\n          </select>\n        </div>\n      </div>\n\n      <div class=\"filter_item\">\n        <div class=\"label_container\">\n          <span>Subject</span>\n        </div>\n        <div class=\"input_container\">\n          <select class=\"add_input1\" name=\"\" [(ngModel)]=\"searchSubjectId\">\n            <option value=\"-1\" style=\"color: #cfcfcf;\">Select Subject Name</option>\n            <option [value]=\"subject.subject_id\" *ngFor=\"let subject of subjectList let i = index\">\n              {{subject.subject_name}}</option>\n          </select>\n        </div>\n      </div>\n\n      <div class=\"filter_item\">\n        <div class=\"label_container\">\n          <span>Publication</span>\n        </div>\n        <div class=\"input_container\">\n          <select class=\"add_input1\" name=\"\" [(ngModel)]=\"searchPublicationId\">\n            <option value=\"-1\" style=\"color: #cfcfcf;\">Select Publication Name</option>\n            <option [value]=\"publication.publication_id\" *ngFor=\"let publication of publicationList let i = index\">\n              {{publication.publication_name}}</option>\n          </select>\n        </div>\n      </div>\n\n\n      <div class=\"filter_item\">\n        <div class=\"label_container\">\n          <span>Language</span>\n        </div>\n        <div class=\"input_container\">\n          <select class=\"add_input2\" name=\"\" [(ngModel)]=\"searchLangId\">\n            <option value=\"-1\" style=\"color: #cfcfcf;\">Select Language</option>\n            <option [value]=\"language.language_id\" *ngFor=\"let language of languageList let i = index\">\n              {{language.language_name}}</option>\n          </select>\n        </div>\n      </div>\n\n      <div class=\"action_btn_container pull-right\">\n        <button type=\"button\" name=\"button\" class=\"reset_btn\" (click)=\"resetFilter()\">Reset</button>\n        <button type=\"button\" name=\"button\" class=\"search_btn\" (click)=\"advanceSearch()\">Search</button>\n      </div>\n\n    </div>\n\n    <!-- Suggestion -->\n    <div class=\"suggestions_container\" *ngIf=\"suggestion\" (click)=\"closeSuggestionAndFilter()\">\n      <div class=\"suggestion\">\n        <div class=\"suggestion_item\" *ngFor=\"let suggestion of suggestionList let i = index\"\n          (click)=\"selectBookForIssue(suggestion.book_id)\">\n          <div class=\"img_container\">\n            <img src=\"./assets/images/library/gray_book.svg\" alt=\"\">\n          </div>\n          <div class=\"book_details\">\n            <div class=\"name_container\">\n              <span>{{suggestion.title}}</span>\n            </div>\n            <div class=\"book_more_info\">\n              <span>Publication - {{ suggestion.publications.publication_name | slice:0:12 }}</span>\n              <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>\n              <span>Author(s) - <span\n                  *ngFor=\"let author of suggestion.authorObjects | slice:0:1;\">{{author.author_name | slice:0:12}} <span\n                    *ngIf=\"suggestion?.authorObjects?.length > 1\">...</span></span></span>\n            </div>\n          </div>\n        </div>\n        <!-- <div style=\"text-align: center; font-weight: 600;\" *ngIf=\"suggestionList.length == 0\">\n          <span>No result found!</span>\n        </div> -->\n      </div>\n    </div>\n\n  </section>\n\n  <section *ngIf=\"!searchResult && !bookSuggestion\">\n    <div class=\"illustartion_container\" (click)=\"closeSuggestionAndFilter()\">\n      <img src=\"./assets/images/library/search_book.svg\" alt=\"\">\n    </div>\n  </section>\n\n  <hr *ngIf=\"searchResult\">\n\n  <section *ngIf=\"searchResult\" (click)=\"closeSuggestionAndFilter()\">\n    <div class=\"search_result_container\">\n      <div class=\"header_container\">\n        <div class=\"header_item1\">\n          <span>Book Title</span>\n        </div>\n        <div class=\"header_item\">\n          <span>ISBN No.</span>\n        </div>\n        <div class=\"header_item1\">\n          <span>Publication</span>\n        </div>\n        <div class=\"header_item1\">\n          <span>Author</span>\n        </div>\n        <div class=\"header_item\">\n          <span>Available</span>\n        </div>\n        <div class=\"header_item\">\n          <span>Issued</span>\n        </div>\n        <div class=\"header_item\">\n          <span>Lost/Scrap</span>\n        </div>\n        <div class=\"header_item\" style=\"text-align: right;\">\n          <span>Actions</span>\n        </div>\n      </div>\n      <div class=\"value_container\" *ngFor=\"let book of bookSearchData\"\n        [ngClass]=\"book.totalBooksAvailable != 0 ? 'border_div' : 'non_border_div'\">\n        <div class=\"value_item1\">\n          <span>{{book.title}}</span>\n        </div>\n        <div class=\"value_item\">\n          <span title=\"{{book.isbn_number}}\">\n            {{ (book.isbn_number?.length > 13) ? (book.isbn_number | slice:0:13) + '...' : book.isbn_number }}\n          </span>\n        </div>\n        <div class=\"value_item1\">\n          <span>{{book.publications.publication_name | slice:0:25}}</span>\n        </div>\n        <div class=\"value_item1\">\n          <span title=\"{{book.authorNameData}}\">\n            {{ (book.authorNameData?.length > 10) ? (book.authorNameData | slice:0:10) + '...' : book.authorNameData }}\n          </span>\n        </div>\n        <div class=\"value_item\">\n          <span>{{book.totalBooksAvailable}} of {{book.totalBooksAdded}}</span>\n        </div>\n        <div class=\"value_item\">\n          <span>{{book.totalBooksIssued}}</span>\n        </div>\n        <div class=\"value_item\">\n          <span>{{book.totalBooksLost}}</span>\n        </div>\n        <div class=\"value_item\" style=\"text-align: right;display: block;\">\n          <img src=\"./assets/images/library/issue_gray.svg\" alt=\"non issue\" class=\"action_img\" title=\"Issue Book\"\n            (click)=\"showIssueBookPopup(book)\" *ngIf=\"book.totalBooksAvailable != 0\">\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <section class=\"for_book_details\" *ngIf=\"bookSuggestion\" (click)=\"closeSuggestionAndFilter()\">\n    <div class=\"book_details_container\" (click)=\"closeSuggestionAndFilter()\">\n\n      <div class=\"book_details_item_1\">\n        <img src=\"./assets/images/library/color_book.svg\" alt=\"\" class=\"book_icon\">\n        <div class=\"book_name_container\">\n          <span class=\"title\">Book Title</span>\n          <span class=\"book_name\">{{bookDataForIssue.title}}</span>\n        </div>\n        <div class=\"book_isbn\">\n          <span class=\"title\">ISBN No.</span>\n          <span class=\"isbn_number\">{{bookDataForIssue.isbn_number}}</span>\n        </div>\n        <button type=\"button\" name=\"button\" class=\"available_btn\"\n          *ngIf=\"bookDataForIssue.totalBooksAvailable != 0\">Available :\n          {{bookDataForIssue.totalBooksAvailable}}</button>\n        <button type=\"button\" name=\"button\" class=\"not_available_btn\"\n          *ngIf=\"bookDataForIssue.totalBooksAvailable == 0\">Not Available</button>\n      </div>\n\n      <div class=\"book_details_item_2\">\n        <div class=\"book_more_info_item_1\">\n          <span class=\"title\">Author</span>\n          <span title=\"{{concatAuthorList(bookDataForIssue.authorObjects)}}\">\n            <span class=\"more_info_value\"\n              *ngFor=\"let author of bookDataForIssue.authorObjects | slice:start:end let p = index;\">\n              <span *ngIf=\"p < 2\">{{author.author_name | slice:0:10}}<span\n                  *ngIf=\"bookDataForIssue?.authorObjects?.length > 1\">,&nbsp;</span><span\n                  *ngIf=\"p < 3 && p == 1\">...</span>\n\n              </span>\n            </span>\n          </span>\n        </div>\n        <div class=\"book_more_info_item_1\">\n          <span class=\"title\">Publication</span>\n          <span class=\"more_info_value\">{{bookDataForIssue.publications.publication_name | slice:0:25}}</span>\n        </div>\n        <div class=\"book_more_info_item_2\">\n          <span class=\"title\">Category</span>\n          <span class=\"more_info_value\">{{bookDataForIssue.category.category_name}}</span>\n        </div>\n        <div class=\"book_more_info_item_2\">\n          <span class=\"title\">Sub-Category</span>\n          <span class=\"more_info_value\"\n            *ngIf=\"bookDataForIssue.sub_category != null\">{{bookDataForIssue.sub_category.category_name}}</span>\n        </div>\n        <div class=\"book_more_info_item_2\">\n          <span class=\"title\">Subject</span>\n          <span class=\"more_info_value\">{{bookDataForIssue.subject.subject_name}}</span>\n        </div>\n        <div class=\"book_more_info_item_2\">\n          <span class=\"title\">Language</span>\n          <span class=\"more_info_value\">{{bookDataForIssue.language.language_name}}</span>\n        </div>\n      </div>\n\n      <div class=\"book_details_item_3\">\n        <div class=\"search_box_container\">\n          <input type=\"text\" name=\"\" value=\"\" placeholder=\"Enter Borrower Name/Mobile Number \" class=\"search_box\"\n            (keyup)=\"searchBorrower($event)\" [(ngModel)]=\"borrower\">\n          <div class=\"bor_suggestions_container\" *ngIf=\"borSuggestions\">\n            <div class=\"suggestion\">\n              <div class=\"suggestion_item\" *ngFor=\"let borrower of borrowerSearchData\"\n                (click)=\"selectStudent(borrower)\">\n                <div class=\"img_container\">\n                  <img src=\"./assets/images/library/profile.svg\" alt=\"\">\n                </div>\n                <div class=\"book_details\">\n                  <div class=\"name_container\">\n                    <span>{{borrower.student_name}}</span>\n                  </div>\n                  <div class=\"book_more_info\">\n                    <span>Mobile No. - {{borrower.student_phone}}</span>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"book_in_hand_container\" *ngIf=\"booksInHandStatus\">\n          <span *ngIf=\"bookInHand != 0\">Books in hand : <span style=\"font-weight: 600;\">{{bookInHand}}</span></span>\n          <span *ngIf=\"bookInHand == 0\">No books in hand!</span>\n        </div>\n\n        <div class=\"books_in_hand_details_container\" *ngIf=\"booksInHandStatus\">\n          <div class=\"books_in_hand_details_item\" *ngFor=\"let book of booksInHandDetails\">\n            <div class=\"item_container\">\n              <img src=\"./assets/images/library/color_book.svg\" alt=\"\" class=\"book_icon\">\n              <div class=\"book_name_container\">\n                <span class=\"title\">Book Title</span>\n                <span class=\"book_name\">{{book.book_complete_details.title}}</span>\n              </div>\n              <div class=\"issue_date\">\n                <span class=\"title\">Issued Date</span>\n                <span class=\"book_name\">{{book.issued_book.issued_on | date: 'dd MMM yyyy'}}</span>\n              </div>\n              <div class=\"return_date\">\n                <span class=\"title\">Return Date</span>\n                <span class=\"book_name\">{{book.issued_book.to_return_on_date | date: 'dd MMM yyyy'}}</span>\n              </div>\n              <div class=\"book_status_container\">\n                <button type=\"button\" name=\"button\" class=\"issued_btn\"\n                  *ngIf=\"book.issued_book.no_of_late_days == 0\">Issued</button>\n                <button type=\"button\" name=\"button\" class=\"overdue_btn\"\n                  *ngIf=\"book.issued_book.no_of_late_days != 0\">Overdue</button>\n              </div>\n            </div>\n            <!-- <div class=\"action_container\">\n              <img src=\"./assets/images/library/issue_btn.svg\" alt=\"\" class=\"book_icon\" (click)=\"returnBook(book)\">\n            </div> -->\n          </div>\n        </div>\n\n      </div>\n\n      <div class=\"book_details_item_4\">\n        <div class=\"date_container\">\n          <div class=\"from_date\">\n            <span>From</span>\n            <input type=\"text\" name=\"\" value=\"\" placeholder=\"\" readonly [(ngModel)]=\"tempFromDate\"\n              (click)=\"openCalendar('bookFromDate')\">\n            <i class=\"fa fa-calendar\" style=\"cursor: pointer;color: #1283f4;\"\n              (click)=\"openCalendar('bookFromDate')\"></i>\n\n            <input type=\"text\" value=\"\" id=\"bookFromDate\" class=\"widgetDatepicker bsDatepicker\" name=\"bookFromDate\"\n              [(ngModel)]=\"bookFromDate\" (ngModelChange)=\"selectBookFromDate($event)\" readonly=\"true\" bsDatepicker\n              style=\"width:0px;margin-right: 10px;\" />\n          </div>\n          <div class=\"to_date\">\n            <span>To</span>\n            <input type=\"text\" name=\"\" value=\"\" placeholder=\"\" readonly [(ngModel)]=\"tempToDate\"\n              (click)=\"openCalendar('bookToDate')\">\n            <i class=\"fa fa-calendar\" style=\"cursor: pointer;color: #1283f4;\" (click)=\"openCalendar('bookToDate')\"></i>\n            <input type=\"text\" value=\"\" id=\"bookToDate\" class=\"widgetDatepicker bsDatepicker\" name=\"bookToDate\"\n              [(ngModel)]=\"bookToDate\" (ngModelChange)=\"selectBookToDate($event)\" readonly=\"true\" bsDatepicker\n              style=\"width:0px;margin-right: 10px;\" />\n\n            <!-- <div class=\"questionInfo inline-relative\">\n              <span class=\"qInfoIcon i-class\">i</span>\n              <div class=\"tooltip-box-field\">\n                Enable this to\n                <br> start sending SMS\n              </div>\n            </div> -->\n            <!-- <i class=\"fa fa-calendar\" style=\"cursor: pointer;color: #1283f4;\" (click)=\"openCalendar('bookToDate')\"></i> -->\n\n            <!-- <input  type=\"text\" value=\"\" id=\"bookToDate\" class=\"widgetDatepicker bsDatepicker\" name=\"bookToDate\" -->\n            <!-- [(ngModel)]=\"bookToDate\" (ngModelChange)=\"selectBookToDate($event)\" readonly=\"true\" bsDatepicker  style=\"width:0px;margin-right: 10px;\"/> -->\n          </div>\n        </div>\n        <!-- <div class=\"notify_container\">\n          <div class=\"field-checkbox-wrapper checkbox_container\">\n            <input type=\"checkbox\" value=\"\" name=\"notify\" class=\"form-checkbox\">\n            <label for=\"notify\">Notify to Student</label>\n          </div>\n          <div class=\"field-checkbox-wrapper checkbox_container\">\n            <input type=\"checkbox\" value=\"\" name=\"download\" class=\"form-checkbox\">\n            <label for=\"download\">Download Receipt</label>\n          </div>\n        </div> -->\n      </div>\n\n      <div class=\"book_details_item_5\">\n        <div class=\"left_side\">\n          <button type=\"button\" name=\"button\" class=\"back_btn\" (click)=\"showSearchResult()\">Back</button>\n        </div>\n        <div class=\"right_side\">\n          <button type=\"button\" name=\"button\" class=\"cancel_btn\" (click)=\"clearResult()\">Clear</button>\n          <button type=\"button\" name=\"button\" class=\"issue_btn\" (click)=\"issueBook()\"\n            [disabled]=\"multiClickDisabled\">Issue</button>\n        </div>\n      </div>\n\n    </div>\n  </section>\n\n</section>\n\n<div class=\"row filter-res pagination\" #pager id=\"pager\" style=\"width: 100%;\" *ngIf=\"!bookSuggestion\">\n  <div class=\"c-lg-12 c-md-12 c-sm-12 align-right\" style=\"    padding-left: 3%;\">\n    <pagination (goPage)=\"fectchTableDataByPage($event)\" (goNext)=\"fetchNext()\" (goPrev)=\"fetchPrevious()\"\n      [pagesToShow]=\"10\" [page]=\"pageIndex\" [perPage]=\"displayBatchSize\" [sizeArr]=\"sizeArr\"\n      (sizeChange)=\"updateTableBatchSize($event)\" [count]=\"totalCount\">\n    </pagination>\n  </div>\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/library-management/library-management.component.html":
    /*!***********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/library-management/library-management.component.html ***!
      \***********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsLibraryManagementLibraryManagementComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<section style=\"padding-bottom: 0;padding-right: 2%;\" class=\"clearFix\">\n  <!-- Library Menu -->\n  <section class=\"menu_section\">\n    <div class=\"library_menu_container\">\n      <div class=\"library_menu_item\" routerLink=\"/view/library/issue\">\n        <div class=\"lib_menu_img\">\n          <img src=\"./assets/images/library/gray/issue.svg\" alt=\"issue\" *ngIf=\"activeSession !='issue'\">\n          <img src=\"./assets/images/library/color/issue.svg\" alt=\"issue\" *ngIf=\"activeSession =='issue'\">\n        </div>\n        <div class=\"lib_menu_name\" [ngClass]=\"activeSession =='issue' ? 'activeMenu' : 'nonActive'\">\n          <i class=\"fa fa-circle-o ring\" aria-hidden=\"true\"></i>\n          <span>Issue Book</span>\n        </div>\n      </div>\n      <div class=\"library_menu_item\" routerLink=\"/view/library/return\">\n        <div class=\"lib_menu_img\">\n          <img src=\"./assets/images/library/gray/return.svg\" alt=\"return\" *ngIf=\"activeSession !='return'\">\n          <img src=\"./assets/images/library/color/return.svg\" alt=\"return\" *ngIf=\"activeSession =='return'\">\n        </div>\n        <div class=\"lib_menu_name\" [ngClass]=\"activeSession =='return' ? 'activeMenu' : 'nonActive'\">\n          <i class=\"fa fa-circle-o ring\" aria-hidden=\"true\"></i>\n          <span>Return Book</span>\n        </div>\n      </div>\n      <div class=\"library_menu_item\">\n        <div class=\"lib_menu_img\" routerLink=\"/view/library/add\">\n          <img src=\"./assets/images/library/gray/add.svg\" alt=\"add\" *ngIf=\"activeSession !='add'\">\n          <img src=\"./assets/images/library/color/add.svg\" alt=\"add\" *ngIf=\"activeSession =='add'\">\n        </div>\n        <div class=\"lib_menu_name\" [ngClass]=\"activeSession =='add' ? 'activeMenu' : 'nonActive'\">\n          <i class=\"fa fa-circle-o ring\" aria-hidden=\"true\"></i>\n          <span>Add New Book</span>\n        </div>\n      </div>\n      <!-- <div class=\"library_menu_item\">\n        <div class=\"lib_menu_img\" (click)=\"menuChange('activity')\">\n          <img src=\"./assets/images/library/gray/activity.svg\" alt=\"activity\" *ngIf=\"!activity\">\n          <img src=\"./assets/images/library/color/activity.svg\" alt=\"activity\" *ngIf=\"activity\">\n        </div>\n        <div class=\"lib_menu_name\" [ngClass]=\"activity ? 'activeMenu' : 'nonActive'\" (click)=\"menuChange('activity')\">\n          <i class=\"fa fa-circle-o ring\" aria-hidden=\"true\"></i>\n          <span>Activity</span>\n        </div>\n      </div> -->\n      <div class=\"library_menu_item\">\n        <div class=\"lib_menu_img\" routerLink=\"/view/library/report/lost\">\n          <img src=\"./assets/images/library/gray/report.svg\" alt=\"report\" *ngIf=\"activeSession !='report'\">\n          <img src=\"./assets/images/library/color/report.svg\" alt=\"report\" *ngIf=\"activeSession =='report'\">\n        </div>\n        <div class=\"lib_menu_name\" [ngClass]=\"activeSession =='report' ? 'activeMenu' : 'nonActive'\">\n          <i class=\"fa fa-circle-o ring\" aria-hidden=\"true\"></i>\n          <span>Report</span>\n        </div>\n      </div>\n      <div class=\"library_menu_item\">\n        <div class=\"lib_menu_img\" routerLink=\"/view/library/dashboard\">\n          <img src=\"./assets/images/library/gray/dashboard.svg\" alt=\"dashboard\" *ngIf=\"activeSession !='dashboard'\">\n          <img src=\"./assets/images/library/color/dashboard.svg\" alt=\"dashboard\" *ngIf=\"activeSession =='dashboard'\">\n        </div>\n        <div class=\"lib_menu_name\" [ngClass]=\"activeSession =='dashboard' ? 'activeMenu' : 'nonActive'\">\n          <i class=\"fa fa-circle-o ring\" aria-hidden=\"true\"></i>\n          <span>Dashboard</span>\n        </div>\n      </div>\n      <div class=\"library_menu_item\">\n        <div class=\"lib_menu_img\" routerLink=\"/view/library/master\">\n          <img src=\"./assets/images/library/gray/master.svg\" alt=\"dashboard\" *ngIf=\"activeSession !='master'\">\n          <img src=\"./assets/images/library/color/master.svg\" alt=\"dashboard\" *ngIf=\"activeSession =='master'\">\n        </div>\n        <div class=\"lib_menu_name\" [ngClass]=\"activeSession =='master' ? 'activeMenu' : 'nonActive'\">\n          <i class=\"fa fa-circle-o ring\" aria-hidden=\"true\"></i>\n          <span>Setup</span>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <section class=\"middle\">\n    <router-outlet></router-outlet>\n  </section>\n\n</section>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/library-management/masters/masters.component.html":
    /*!********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/library-management/masters/masters.component.html ***!
      \********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsLibraryManagementMastersMastersComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<section style=\"padding: 10px;height: -webkit-fill-available;\" class=\"middle-section clearFix\">\n  <section class=\"middle-top mb0 clearFix\">\n    <h1 class=\"pull-left\">\n        Create Library Master\n    </h1>\n  </section>\n\n  <hr style=\"color:#f9f9f9;\">\n\n  <!-- HEADER LIST -->\n\n  <section class=\"master_list\">\n    <div class=\"master_list_container\">\n\n      <div class=\"master_menu\">\n        <div class=\"master_list_item\">\n          <button type=\"button\" name=\"button\" class=\"master_list_btn active\" id=\"item1\" (click)=\"changeMasterCategory('item1', 'for_category')\">Category & Sub-categories</button>\n        </div>\n        <div class=\"master_list_item\">\n          <button type=\"button\" name=\"button\" class=\"master_list_btn\" id=\"item2\" (click)=\"changeMasterCategory('item2', 'for_subject')\">Subject</button>\n        </div>\n        <div class=\"master_list_item\">\n          <button type=\"button\" name=\"button\" class=\"master_list_btn\" id=\"item3\" (click)=\"changeMasterCategory('item3', 'for_publication')\">Publication</button>\n        </div>\n        <div class=\"master_list_item\">\n          <button type=\"button\" name=\"button\" class=\"master_list_btn\" id=\"item4\" (click)=\"changeMasterCategory('item4', 'for_author')\">Author</button>\n        </div>\n        <div class=\"master_list_item\">\n          <button type=\"button\" name=\"button\" class=\"master_list_btn\" id=\"item5\" (click)=\"changeMasterCategory('item5', 'for_reference')\">References</button>\n        </div>\n        <div class=\"master_list_item\">\n          <button type=\"button\" name=\"button\" class=\"master_list_btn\" id=\"item6\" (click)=\"changeMasterCategory('item6', 'for_languages')\">Language</button>\n        </div>\n      </div>\n\n      <div class=\"search_container pull-right\">\n        <div class=\"pull-right\" style=\"margin-right: 15px;\">\n            <div class=\"search-filter-wrapper \">\n                <input type=\"text\" class=\"normal-field pull-right\" placeholder=\"Search\" name=\"searchData\" (keyup)=\"searchInList($event)\" [(ngModel)]=\"searchInput\">\n            </div>\n        </div>\n      </div>\n\n    </div>\n  </section>\n\n\n  <!-- FOR Category and Sub-Category -->\n\n  <section id=\"for_category\" class=\"middle_section\">\n    <div class=\"add_container\">\n      <div class=\"main_name_container\">\n        <div class=\"name_container\">\n          <span style=\"margin-bottom:5px;font-size: 12px;\">Category<span class=\"text-danger\">*</span></span>\n          <input type=\"text\" name=\"\" value=\"\" placeholder=\"Enter Category Name\" class=\"add_input\" style=\"width: 100%;\" [(ngModel)]=\"categoryName\" > <!--  (keyup)=\"showCategorySuggestions($event)\" -->\n          <i class=\"fa fa-sort-desc\" aria-hidden=\"true\" (click)=\"showSuggestions()\"></i>\n        </div>\n        <div class=\"name_container\" style=\"margin-left: 10px;\">\n          <span style=\"margin-bottom:5px;font-size: 12px;\">Sub-Category</span>\n          <input type=\"text\" name=\"\" value=\"\" placeholder=\"Enter Sub-Category Name\" class=\"add_input\" style=\"width: 100%;\" [(ngModel)]=\"subcategoryName\">\n        </div>\n      </div>\n      <div class=\"add_btn\">\n        <button type=\"button\" name=\"button\" (click)=\"addCatAndSubCat()\" [disabled]=\"multiClickDisabled\">Add <i class=\"fa fa-plus-circle\" style=\"color:#1984f6\" aria-hidden=\"true\"></i></button>\n      </div>\n\n      <div class=\"category_suggestions_container\" *ngIf=\"categorySuggestions\">\n        <div class=\"category_suggestions_item\" *ngFor=\"let category of categoryList let i = index\" (click)=\"chooseCategory(category.category_name)\">\n          <span>{{category.category_name}}</span>\n        </div>\n      </div>\n\n\n    </div>\n\n\n    <div class=\"added_list_container\">\n\n      <div class=\"added_list_item\" *ngFor=\"let category of categorySubCatList let i = index\">\n        <div class=\"display_com\" id=\"cat_row_dis{{i}}\">\n          <div class=\"value_container\">\n            <div class=\"value_item1 display_com\" id=\"\">\n              <span>{{category.category_name}}</span>\n            </div>\n            <div class=\"value_item2\" style=\"margin-left: 10px;\">\n              <span>{{category.sub_category_name}}</span>\n            </div>\n          </div>\n          <div class=\"action_container\">\n            <i class=\"fa fa-pencil\" style=\"color:#1283f4;\" aria-hidden=\"true\" (click)=\"editCat(category, i)\"></i>\n            <i class=\"fa fa-trash\" style=\"color:#fa3145;\" aria-hidden=\"true\"  (click)=\"deleteCat(category)\"></i>\n          </div>\n        </div>\n        <div class=\"edit_com\" id=\"cat_row_edit{{i}}\">\n          <div class=\"value_container\">\n            <div class=\"value_item1\">\n              <input type=\"text\" name=\"\" value=\"\" placeholder=\"Enter Category Name\" class=\"edit_input\" [(ngModel)]=\"editCategoryName\">\n            </div>\n            <div class=\"value_item2\" style=\"margin-left: 10px;\" *ngIf=\"subcatEdit\">\n              <input type=\"text\" name=\"\" value=\"\" placeholder=\"Enter Sub-Category Name\" class=\"edit_input\" [(ngModel)]=\"editSubCategoryName\">\n            </div>\n          </div>\n          <div class=\"action_container\">\n            <span (click)=\"saveCat(category.category_id, category.sub_category_id)\">Save</span>\n          </div>\n        </div>\n      </div>\n\n      <!-- <div class=\"new_sub_cat\" *ngIf=\"newSubCat\">\n        <div class=\"new_sub_cat_item\">\n          <input type=\"text\" name=\"\" value=\"\" placeholder=\"Enter Sub-Category Name\" class=\"edit_input\" >\n        </div>\n        <div class=\"new_sub_cat_action_item\">\n          <button type=\"button\" name=\"button\" class=\"new_cat_save_btn\">Save</button>\n          <button type=\"button\" name=\"button\" class=\"new_cat_cancel_btn\">Cancel</button>\n        </div>\n      </div> -->\n\n    </div>\n\n    <div class=\"noResult\" *ngIf=\"categorySubCatList.length == 0\">\n      <span *ngIf=\"searchInput == ''\">No category added!</span>\n      <span *ngIf=\"searchInput != ''\">No search result found!</span>\n    </div>\n\n  </section>\n\n  <!-- FOR SUBJECT  -->\n\n  <section id=\"for_subject\" class=\"middle_section\">\n    <div class=\"add_container\">\n      <div class=\"name_container\">\n        <span style=\"margin-bottom:5px;font-size: 12px;\">Subject<span class=\"text-danger\">*</span></span>\n        <input type=\"text\" name=\"\" value=\"\" placeholder=\"Enter Subject Name\" class=\"add_input\" [(ngModel)]=\"subjectName\">\n      </div>\n      <div class=\"add_btn\">\n        <button type=\"button\" name=\"button\" (click)=\"addSubject()\" [disabled]=\"multiClickDisabled\">Add <i class=\"fa fa-plus-circle\" style=\"color:#1984f6\" aria-hidden=\"true\"></i></button>\n      </div>\n    </div>\n\n    <div class=\"added_list_container\">\n      <div class=\"added_list_item\" *ngFor=\"let subject of subjectList let i = index\">\n        <div class=\"display_com\" id=\"subject_row_dis{{i}}\">\n          <div class=\"value_container\">\n            <span>{{subject.subject_name}}</span>\n          </div>\n          <div class=\"action_container\">\n            <i class=\"fa fa-pencil\" style=\"color:#1283f4;\" aria-hidden=\"true\" (click)=\"editSubject(subject, i)\"></i>\n            <i class=\"fa fa-trash\" style=\"color:#fa3145;\" aria-hidden=\"true\" (click)=\"delete(subject.subject_id, 'subject')\"></i>\n          </div>\n        </div>\n        <div class=\"edit_com\" id=\"subject_row_edit{{i}}\">\n          <div class=\"value_container\">\n            <input type=\"text\" name=\"\" value=\"\" placeholder=\"Enter Subject Name\" class=\"edit_input\" [(ngModel)]=\"editSubjectName\">\n          </div>\n          <div class=\"action_container\">\n            <span (click)=\"saveSubject(subject.subject_id)\">Save</span>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"noResult\" *ngIf=\"subjectList.length == 0\">\n      <span *ngIf=\"searchInput == ''\">No subject added!</span>\n      <span *ngIf=\"searchInput != ''\">No search result found!</span>\n    </div>\n  </section>\n\n  <!-- FOR PUBLICATION -->\n\n  <section id=\"for_publication\" class=\"middle_section\">\n    <div class=\"add_container\">\n      <div class=\"name_container\">\n        <span style=\"margin-bottom:5px;font-size: 12px;\">Publication<span class=\"text-danger\">*</span></span>\n        <input type=\"text\" name=\"\" value=\"\" placeholder=\"Enter Publication Name\" class=\"add_input\" [(ngModel)]=\"publicationName\">\n      </div>\n      <div class=\"add_btn\">\n        <button type=\"button\" name=\"button\" (click)=\"addPublication()\" [disabled]=\"multiClickDisabled\">Add <i class=\"fa fa-plus-circle\" style=\"color:#1984f6\" aria-hidden=\"true\"></i></button>\n      </div>\n    </div>\n\n    <div class=\"added_list_container\">\n      <div class=\"added_list_item\" *ngFor=\"let publication of publicationList let i = index\">\n        <div class=\"display_com\" id=\"publication_row_dis{{i}}\">\n          <div class=\"value_container\">\n            <span>{{publication.publication_name}}</span>\n          </div>\n          <div class=\"action_container\">\n            <i class=\"fa fa-pencil\" style=\"color:#1283f4;\" aria-hidden=\"true\" (click)=\"editPublication(publication, i)\"></i>\n            <i class=\"fa fa-trash\" style=\"color:#fa3145;\" aria-hidden=\"true\" (click)=\"delete(publication.publication_id, 'publication')\"></i>\n          </div>\n        </div>\n        <div class=\"edit_com\" id=\"publication_row_edit{{i}}\">\n          <div class=\"value_container\">\n            <input type=\"text\" name=\"\" value=\"\" placeholder=\"Enter Publication Name\" class=\"edit_input\" [(ngModel)]=\"editPublicationName\">\n          </div>\n          <div class=\"action_container\">\n            <span (click)=\"savePublication(publication.publication_id)\">Save</span>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"noResult\" *ngIf=\"publicationList.length == 0\">\n      <span *ngIf=\"searchInput == ''\">No publication added!</span>\n      <span *ngIf=\"searchInput != ''\">No search result found!</span>\n    </div>\n  </section>\n\n\n  <!-- FOR AUTHOR -->\n\n  <section id=\"for_author\" class=\"middle_section\">\n    <div class=\"add_container\">\n      <div class=\"name_container\">\n        <span style=\"margin-bottom:5px;font-size: 12px;\">Author<span class=\"text-danger\">*</span></span>\n        <input type=\"text\" name=\"\" value=\"\" placeholder=\"Enter Author Name\" class=\"add_input\" [(ngModel)]=\"authorName\">\n      </div>\n      <div class=\"add_btn\">\n        <button type=\"button\" name=\"button\" (click)=\"addAuthor()\" [disabled]=\"multiClickDisabled\">Add <i class=\"fa fa-plus-circle\" style=\"color:#1984f6\" aria-hidden=\"true\"></i></button>\n      </div>\n    </div>\n\n    <div class=\"added_list_container\">\n      <div class=\"added_list_item\" *ngFor=\"let author of authorList let i = index\">\n        <div class=\"display_com\" id=\"author_row_dis{{i}}\">\n          <div class=\"value_container\">\n            <span>{{author.author_name}}</span>\n          </div>\n          <div class=\"action_container\">\n            <i class=\"fa fa-pencil\" style=\"color:#1283f4;\" aria-hidden=\"true\" (click)=\"editAuthor(author, i)\"></i>\n            <i class=\"fa fa-trash\" style=\"color:#fa3145;\" aria-hidden=\"true\" (click)=\"delete(author.author_id, 'author')\"></i>\n          </div>\n        </div>\n        <div class=\"edit_com\" id=\"author_row_edit{{i}}\">\n          <div class=\"value_container\">\n            <input type=\"text\" name=\"\" value=\"\" placeholder=\"Enter Author Name\" class=\"edit_input\" [(ngModel)]=\"editAuthorName\">\n          </div>\n          <div class=\"action_container\">\n            <span (click)=\"saveAuthor(author.author_id)\">Save</span>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"noResult\" *ngIf=\"authorList.length == 0\">\n      <span *ngIf=\"searchInput == ''\">No author added!</span>\n      <span *ngIf=\"searchInput != ''\">No search result found!</span>\n    </div>\n  </section>\n\n  <!-- FOR REFERENCES -->\n\n  <section id=\"for_reference\" class=\"middle_section\">\n    <div class=\"add_container\">\n      <div class=\"name_container\">\n        <span style=\"margin-bottom:5px;font-size: 12px;\">References<span class=\"text-danger\">*</span></span>\n        <input type=\"text\" name=\"\" value=\"\" placeholder=\"Enter References Name\" class=\"add_input\" [(ngModel)]=\"referenceName\">\n      </div>\n      <div class=\"add_btn\">\n        <button type=\"button\" name=\"button\" (click)=\"addReference()\" [disabled]=\"multiClickDisabled\">Add <i class=\"fa fa-plus-circle\" style=\"color:#1984f6\" aria-hidden=\"true\"></i></button>\n      </div>\n    </div>\n\n    <div class=\"added_list_container\">\n      <div class=\"added_list_item\" *ngFor=\"let reference of referenceList let i = index\">\n        <div class=\"display_com\" id=\"reference_row_dis{{i}}\">\n          <div class=\"value_container\">\n            <span>{{reference.reference_name}}</span>\n          </div>\n          <div class=\"action_container\">\n            <i class=\"fa fa-pencil\" style=\"color:#1283f4;\" aria-hidden=\"true\" (click)=\"editReference(reference, i)\"></i>\n            <i class=\"fa fa-trash\" style=\"color:#fa3145;\" aria-hidden=\"true\" (click)=\"delete(reference.reference_id, 'reference')\"></i>\n          </div>\n        </div>\n        <div class=\"edit_com\" id=\"reference_row_edit{{i}}\">\n          <div class=\"value_container\">\n            <input type=\"text\" name=\"\" value=\"\" placeholder=\"Enter Reference Name\" class=\"edit_input\" [(ngModel)]=\"editReferenceName\">\n          </div>\n          <div class=\"action_container\">\n            <span (click)=\"saveReference(reference.reference_id)\">Save</span>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"noResult\" *ngIf=\"referenceList.length == 0\">\n      <span *ngIf=\"searchInput == ''\">No reference added!</span>\n      <span *ngIf=\"searchInput != ''\">No search result found!</span>\n    </div>\n  </section>\n\n\n  <!-- FOR LANGUAGES -->\n\n  <section id=\"for_languages\" class=\"middle_section\">\n    <div class=\"add_container\">\n      <div class=\"name_container\">\n        <span style=\"margin-bottom:5px;font-size: 12px;\">Language<span class=\"text-danger\">*</span></span>\n        <input type=\"text\" name=\"\" value=\"\" placeholder=\"Enter Language Name\" class=\"add_input\" [(ngModel)]=\"languageName\">\n      </div>\n      <div class=\"add_btn\">\n        <button type=\"button\" name=\"button\" (click)=\"addLanguage()\" [disabled]=\"multiClickDisabled\">Add <i class=\"fa fa-plus-circle\" style=\"color:#1984f6\" aria-hidden=\"true\"></i></button>\n      </div>\n    </div>\n\n    <div class=\"added_list_container\">\n      <div class=\"added_list_item\" *ngFor=\"let language of languageList let i = index\">\n        <div class=\"display_com\" id=\"language_row_dis{{i}}\">\n          <div class=\"value_container\">\n            <span>{{language.language_name}}</span>\n          </div>\n          <div class=\"action_container\">\n            <i class=\"fa fa-pencil\" style=\"color:#1283f4;\" aria-hidden=\"true\" (click)=\"editLanguage(language, i)\"></i>\n            <i class=\"fa fa-trash\" style=\"color:#fa3145;\" aria-hidden=\"true\" (click)=\"delete(language.language_id, 'language')\"></i>\n          </div>\n        </div>\n        <div class=\"edit_com\" id=\"language_row_edit{{i}}\">\n          <div class=\"value_container\">\n            <input type=\"text\" name=\"\" value=\"\" placeholder=\"Enter Language Name\" class=\"edit_input\" [(ngModel)]=\"editLanguageName\">\n          </div>\n          <div class=\"action_container\">\n            <span (click)=\"saveLanguage(language.language_id)\">Save</span>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"noResult\" *ngIf=\"languageList.length == 0\">\n      <span *ngIf=\"searchInput == ''\">No language added!</span>\n      <span *ngIf=\"searchInput != ''\">No search result found!</span>\n    </div>\n  </section>\n\n\n\n</section>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/library-management/return-book/return-book.component.html":
    /*!****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/library-management/return-book/return-book.component.html ***!
      \****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsLibraryManagementReturnBookReturnBookComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<section *ngIf=\"!bookSuggestion\">\n  <div class=\"search_bar_container\">\n    <input type=\"text\" name=\"\" value=\"\" placeholder=\"Search by Borrower Name/Issued book\" class=\"search_box\"  (keyup)=\"searchInList($event)\" [(ngModel)]=\"searchInput\">\n    <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n    <!-- <i class=\"fa fa-times\" aria-hidden=\"true\" (click)=\"clearFilter()\" ></i> -->\n    <!-- <i class=\"fa fa-sort-desc\" aria-hidden=\"true\" (click)=\"showFilter()\"></i> -->\n    <!-- <span *ngIf=\"!searchResult\">&#8701; Search here! </span> -->\n  </div>\n\n  <!-- FILTER -->\n  <!-- <div class=\"search_box_filter_container\" *ngIf=\"filter\">\n\n    <div class=\"filter_item\">\n      <div class=\"label_container\">\n        <span style=\"top: 10px;\">Book Title</span>\n      </div>\n      <div class=\"input_container\">\n        <input type=\"text\" name=\"\" value=\"\" placeholder=\"Enter Book Name\" [(ngModel)]=\"searchTitle\">\n      </div>\n    </div>\n\n    <div class=\"filter_item\">\n      <div class=\"label_container\">\n        <span>Author</span>\n      </div>\n      <div class=\"input_container\">\n        <select class=\"add_input1\" name=\"\" [(ngModel)]=\"searchAuthorId\">\n          <option value=\"-1\" style=\"color: #cfcfcf;\">Select Author Name</option>\n          <option [value]=\"author.author_id\" *ngFor=\"let author of authorList let i = index\">{{author.author_name}}</option>\n        </select>\n      </div>\n    </div>\n\n    <div class=\"filter_item\">\n      <div class=\"label_container\">\n        <span>Category</span>\n      </div>\n      <div class=\"input_container\">\n        <select class=\"add_input1\" name=\"\" (ngModelChange)=\"getSubCategory($event)\" [(ngModel)]=\"searchCategoryId\">\n          <option value=\"-1\" style=\"color: #cfcfcf;\">Select Category Name</option>\n          <option [value]=\"category.category_id\" [attr.id]=\"category.category_id\" *ngFor=\"let category of categoryList let i = index\">{{category.category_name}}</option>\n        </select>\n      </div>\n    </div>\n\n    <div class=\"filter_item\">\n      <div class=\"label_container\">\n        <span>Sub-Category</span>\n      </div>\n      <div class=\"input_container\">\n        <select class=\"add_input1\" name=\"\" [(ngModel)]=\"searchSubcategoryId\">\n          <option value=\"-1\" style=\"color: #cfcfcf;\">Select Sub-Category Name</option>\n          <option [value]=\"subCategory.category_id\" *ngFor=\"let subCategory of subcategoryList let i = index\">{{subCategory.category_name}}</option>\n        </select>\n      </div>\n    </div>\n\n    <div class=\"filter_item\">\n      <div class=\"label_container\">\n        <span>Subject</span>\n      </div>\n      <div class=\"input_container\">\n        <select class=\"add_input1\" name=\"\" [(ngModel)]=\"searchSubjectId\">\n          <option value=\"-1\" style=\"color: #cfcfcf;\">Select Subject Name</option>\n          <option [value]=\"subject.subject_id\" *ngFor=\"let subject of subjectList let i = index\">{{subject.subject_name}}</option>\n        </select>\n      </div>\n    </div>\n\n    <div class=\"filter_item\">\n      <div class=\"label_container\">\n        <span>Publication</span>\n      </div>\n      <div class=\"input_container\">\n        <select class=\"add_input1\" name=\"\" [(ngModel)]=\"searchPublicationId\">\n          <option value=\"-1\" style=\"color: #cfcfcf;\">Select Publication Name</option>\n          <option [value]=\"publication.publication_id\" *ngFor=\"let publication of publicationList let i = index\">{{publication.publication_name}}</option>\n        </select>\n      </div>\n    </div>\n\n\n    <div class=\"filter_item\">\n      <div class=\"label_container\">\n        <span>Language</span>\n      </div>\n      <div class=\"input_container\">\n        <select class=\"add_input2\" name=\"\" [(ngModel)]=\"searchLangId\">\n          <option value=\"-1\" style=\"color: #cfcfcf;\">Select Language</option>\n          <option [value]=\"language.language_id\" *ngFor=\"let language of languageList let i = index\">{{language.language_name}}</option>\n        </select>\n      </div>\n    </div>\n\n    <div class=\"action_btn_container pull-right\">\n      <button type=\"button\" name=\"button\" class=\"reset_btn\" (click)=\"resetFilter()\">Reset</button>\n      <button type=\"button\" name=\"button\" class=\"search_btn\" (click)=\"advanceSearch()\">Search</button>\n    </div>\n\n  </div> -->\n\n  <!-- Suggestion -->\n  <div class=\"suggestions_container\" *ngIf=\"suggestion\">\n    <div class=\"suggestion\">\n\n      <div class=\"suggestion_item\" *ngFor=\"let suggestion of suggestionList.libraryBookDTOs let i = index\" (click)=\"getIssuedBooksByBook(suggestion.book_id, suggestion.title)\">\n        <div class=\"img_container\">\n          <img src=\"./assets/images/library/gray_book.svg\" alt=\"\">\n        </div>\n        <div class=\"book_details\">\n          <div class=\"name_container\">\n            <span>{{suggestion.title}}</span>\n          </div>\n          <div class=\"book_more_info\">\n            <span>Publication - {{ suggestion.publications.publication_name | slice:0:12 }}</span>\n            <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>\n            <span>Author(s) - <span *ngFor=\"let author of suggestion.authorObjects | slice:0:1;\">{{author.author_name | slice:0:12}} &nbsp; </span></span>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"suggestion_item\" *ngFor=\"let suggestion of suggestionList.students let i = index\" (click)=\"getIssuedBooksByStudent(suggestion.student_id, suggestion.student_name)\">\n        <div class=\"img_container\">\n          <img src=\"./assets/images/library/profile.svg\" alt=\"\">\n        </div>\n        <div class=\"book_details\">\n          <div class=\"name_container\">\n            <span>{{suggestion.student_name}}</span>\n          </div>\n          <div class=\"book_more_info\">\n            <span>Mobile No. - {{suggestion.student_phone}}</span>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n</section>\n\n<section *ngIf=\"!searchResult\">\n  <div class=\"illustartion_container\" (close)=\"closeSuggestions()\">\n    <img src=\"./assets/images/library/search_book.svg\" alt=\"\">\n  </div>\n</section>\n\n<hr *ngIf=\"searchResult\">\n\n\n<section *ngIf=\"searchResult\">\n  <div class=\"search_result_container\">\n    <div class=\"search_result_item\" *ngFor=\"let returnBook of returnBookData let p = index\">\n      <div class=\"sub_item_1_container\">\n        <div class=\"sub_item1\">\n          <img src=\"./assets/images/library/color_book.svg\" alt=\"\" class=\"book_icon\">\n          <div class=\"book_name_container\">\n            <span class=\"title\">Book Title</span>\n            <span class=\"book_name\">{{returnBook.book_complete_details.title}}</span>\n          </div>\n        </div>\n        <div class=\"sub_item2\">\n          <img src=\"./assets/images/library/profile_color.svg\" alt=\"\" class=\"book_icon\">\n          <div class=\"book_name_container\">\n            <span class=\"title\">Borrower</span>\n            <span class=\"book_name\">{{returnBook.issued_book.student.student_name}}</span>\n          </div>\n        </div>\n        <div class=\"sub_item3\">\n          <div class=\"book_name_container\">\n            <span class=\"title\">Mobile Number</span>\n            <span class=\"more_info\" style=\"font-weight: 600;\">{{returnBook.issued_book.student.student_phone}}</span>\n          </div>\n        </div>\n        <div class=\"sub_item3\">\n          <div class=\"book_name_container\">\n            <span class=\"title\">ISBN No.</span>\n            <span class=\"more_info\" style=\"font-weight: 600;\" title=\"{{returnBook.book_complete_details.isbn_number}}\">\n              {{ (returnBook.book_complete_details.isbn_number?.length >10) ? (returnBook.book_complete_details.isbn_number | slice:0:10) + '...' : (returnBook.book_complete_details.isbn_number) }}\n            </span>\n          </div>\n        </div>\n        <div class=\"sub_item3\">\n          <div class=\"book_name_container\">\n            <span class=\"title\">Issue Date</span>\n            <span class=\"more_info\" style=\"font-weight: 600;\">{{returnBook.issued_book.issued_on | date: 'dd MMM yyyy'}}</span>\n          </div>\n        </div>\n        <div class=\"sub_item3\">\n          <div class=\"book_name_container\">\n            <span class=\"title\">Due Date</span>\n            <span class=\"more_info\" style=\"font-weight: 600;\">{{returnBook.issued_book.to_return_on_date | date: 'dd MMM yyyy'}}</span>\n          </div>\n        </div>\n        <div class=\"sub_item3\" style=\"text-align: right;\">\n          <span class=\"issue_span\" *ngIf=\"returnBook.issued_book.no_of_late_days == 0\">Issued</span>\n          <span class=\"overdue_span\" *ngIf=\"returnBook.issued_book.no_of_late_days != 0\">Overdue</span>\n        </div>\n      </div>\n      <div class=\"sub_item_2_container\">\n        <div class=\"item\">\n          <div class=\"sub_item3\">\n            <div class=\"book_name_container\">\n              <span class=\"title\">Author</span>\n              <div class=\"\">\n                <span title=\"{{returnBook.authorNameData}}\">\n                  {{ (returnBook.authorNameData?.length > 15) ? (returnBook.authorNameData | slice:0:15) + '...' : returnBook.authorNameData }}\n              </span>\n              </div>\n              <!-- <span class=\"more_info\">{{returnBook.book_complete_details.authorObjects}}</span> -->\n            </div>\n          </div>\n          <div class=\"sub_item3\">\n            <div class=\"book_name_container\">\n              <span class=\"title\">Publication</span>\n              <span class=\"more_info\">{{returnBook.book_complete_details.publications.publication_name}}</span>\n            </div>\n          </div>\n          <div class=\"sub_item3\">\n            <div class=\"book_name_container\">\n              <span class=\"title\">Subject</span>\n              <span class=\"more_info\">{{returnBook.book_complete_details.subject.subject_name}}</span>\n            </div>\n          </div>\n        </div>\n        <div class=\"item_2\">\n          <button type=\"button\" name=\"button\" class=\"return_btn\" (click)=\"showReturnBook(returnBook)\">Return</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n\n<!-- POP UP -->\n\n<section *ngIf=\"returnBookPopup\">\n  <div class=\"return_book_pop_up_container\">\n    <div class=\"header_container\">\n      <span>Return Book</span>\n      <i class=\"fa fa-times\" aria-hidden=\"true\" (click)=\"closePopup()\"></i>\n    </div>\n    <div class=\"details_container\">\n      <div class=\"book_info_container\">\n        <div class=\"book_info_item1\">\n          <img src=\"./assets/images/library/color_book.svg\" alt=\"\" class=\"book_icon\">\n          <div class=\"book_name_container\">\n            <span class=\"title\">Book Title</span>\n            <span class=\"book_name\">{{returnBookTitle}}</span>\n          </div>\n        </div>\n        <div class=\"book_info_item2\">\n          <div class=\"book_name_container\">\n            <span class=\"title\">Issue Date</span>\n            <span class=\"more_info\">{{returnBookIssuedDate}}</span>\n          </div>\n        </div>\n        <div class=\"book_info_item2\">\n          <div class=\"book_name_container\">\n            <span class=\"title\">Due Date</span>\n            <span class=\"more_info\">{{returnBookReturnDate}}</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"book_status_container\">\n        <span>Status of Book : </span>\n        <div class=\"field-checkbox-wrapper checkbox_container\">\n          <input type=\"checkbox\" value=\"lostBook\" name=\"lost\" class=\"form-checkbox\" [(ngModel)]=\"lostBook\">\n          <label for=\"lost\">Lost/Scrap</label>\n        </div>\n      </div>\n      <div class=\"return_info_container\" *ngIf=\"!lostBook\">\n        <div class=\"return_info_item\">\n          <span>Return Date</span>\n          <input type=\"text\" name=\"\" value=\"\" readonly [(ngModel)]=\"tempReturnDate\" (click)=\"openCalendar('returnDate')\">\n          <i class=\"fa fa-calendar\" style=\"cursor: pointer;color: #1283f4;\" (click)=\"openCalendar('returnDate')\"></i>\n\n          <input  type=\"text\" value=\"\" id=\"returnDate\" class=\"widgetDatepicker bsDatepicker\" name=\"returnDate\"\n           [(ngModel)]=\"tempReturnDate\" (ngModelChange)=\"selectReturnDate($event)\" readonly=\"true\" bsDatepicker  style=\"width:0px;margin-right: 10px;\"/>\n        </div>\n        <div class=\"return_info_item\">\n          <span>No. of late days<span class=\"text-danger\">*</span></span>\n          <div class=\"input_container_for_days\">\n            <input type=\"number\" name=\"\" value=\"\" placeholder=\"\" style=\"width: 30%;\" [(ngModel)]=\"noOfLateDays\" (ngModelChange)=\"calculateLateFine()\" [disabled]=\"true\">\n            <span>X</span>\n            <span>{{perDayFine}}/- per day</span>\n          </div>\n        </div>\n        <div class=\"return_info_item\">\n          <span>Total Fine in Rs.</span>\n          <input type=\"number\" name=\"\" value=\"\" placeholder=\"\" style=\"font-weight: 600;\" [(ngModel)]=\"totalLateFine\" [disabled]=\"disableReturnAmt\" readonly>\n        </div>\n      </div>\n      <div class=\"lost_book_container\" *ngIf=\"lostBook\">\n        <div class=\"lost_book_item\">\n          <span>Lost/Scrap Date</span>\n          <input type=\"text\" name=\"\" value=\"\" readonly [(ngModel)]=\"tempLostDate\" (click)=\"openCalendar('lostDate')\">\n          <i class=\"fa fa-calendar\" style=\"cursor: pointer;color: #1283f4;\" (click)=\"openCalendar('lostDate')\"></i>\n\n          <input  type=\"text\" value=\"\" id=\"lostDate\" class=\"widgetDatepicker bsDatepicker\" name=\"lostDate\"\n           [(ngModel)]=\"lostDate\" (ngModelChange)=\"selectBookLostDate($event)\" readonly=\"true\" bsDatepicker  style=\"width:0px;margin-right: 10px;\"/>\n        </div>\n        <div class=\"lost_book_item\">\n          <span>Lost/Scrap Amount in Rs.</span>\n          <input type=\"number\" name=\"\" value=\"\" placeholder=\"\" style=\"font-weight: 600;\" [(ngModel)]=\"lostBookAmt\">\n        </div>\n      </div>\n      <div class=\"remarks_container\">\n        <span>Remarks</span>\n        <textarea name=\"name\" class=\"remarks_textarea\" placeholder=\"Write Remarks...\" [(ngModel)]=\"returnBookRemarks\"></textarea>\n      </div>\n      <!-- <div class=\"notify_container\">\n        <div class=\"field-checkbox-wrapper checkbox_container\">\n          <input type=\"checkbox\" value=\"\" name=\"notify\" class=\"form-checkbox\">\n          <label for=\"notify\">Notify to Student</label>\n        </div>\n        <div class=\"field-checkbox-wrapper checkbox_container\">\n          <input type=\"checkbox\" value=\"\" name=\"download\" class=\"form-checkbox\">\n          <label for=\"download\">Download Receipt</label>\n        </div>\n      </div> -->\n      <div class=\"action_btn_container pull-right\">\n        <button type=\"button\" name=\"button\" class=\"cancel_btn\" (click)=\"cancelReturnBook()\">Cancel</button>\n        <button type=\"button\" name=\"button\" class=\"return_btn\" [disabled]=\"multiClickDisabled\" (click)=\"returnBook()\">Return</button>\n      </div>\n    </div>\n  </div>\n</section>\n<a id=\"feeReceipt_download\" href=\"\" class=\"hide\"></a>\n\n<div class=\"black-bg\" id=\"black-bg\" *ngIf=\"returnBookPopup\" (click)=\"closePopup()\">\n\n</div>";
      /***/
    },

    /***/
    "./src/app/components/library-management/activity/activity.component.scss":
    /*!********************************************************************************!*\
      !*** ./src/app/components/library-management/activity/activity.component.scss ***!
      \********************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsLibraryManagementActivityActivityComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".coming_soon {\n  display: flex;\n  justify-content: center;\n  margin-top: 50px;\n  font-size: 16px;\n  font-weight: 600;\n  color: #9b9b9b;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9saWJyYXJ5LW1hbmFnZW1lbnQvYWN0aXZpdHkvYWN0aXZpdHkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xpYnJhcnktbWFuYWdlbWVudC9hY3Rpdml0eS9hY3Rpdml0eS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb21pbmdfc29vbntcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICM5YjliOWI7XG59XG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/components/library-management/activity/activity.component.ts":
    /*!******************************************************************************!*\
      !*** ./src/app/components/library-management/activity/activity.component.ts ***!
      \******************************************************************************/

    /*! exports provided: ActivityComponent */

    /***/
    function srcAppComponentsLibraryManagementActivityActivityComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ActivityComponent", function () {
        return ActivityComponent;
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

      var ActivityComponent =
      /** @class */
      function () {
        var ActivityComponent = /*#__PURE__*/function () {
          function ActivityComponent() {
            _classCallCheck(this, ActivityComponent);
          }

          _createClass(ActivityComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {}
          }]);

          return ActivityComponent;
        }();

        ActivityComponent.ctorParameters = function () {
          return [];
        };

        ActivityComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
          selector: 'app-activity',
          template: __importDefault(__webpack_require__(
          /*! raw-loader!./activity.component.html */
          "./node_modules/raw-loader/dist/cjs.js!./src/app/components/library-management/activity/activity.component.html"))["default"],
          styles: [__importDefault(__webpack_require__(
          /*! ./activity.component.scss */
          "./src/app/components/library-management/activity/activity.component.scss"))["default"]]
        }), __metadata("design:paramtypes", [])], ActivityComponent);
        return ActivityComponent;
      }();
      /***/

    },

    /***/
    "./src/app/components/library-management/add-book/add-book.component.scss":
    /*!********************************************************************************!*\
      !*** ./src/app/components/library-management/add-book/add-book.component.scss ***!
      \********************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsLibraryManagementAddBookAddBookComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".add_book_container {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-around;\n}\n\n.add_book_container .add_book_item {\n  width: 30%;\n  display: flex;\n  flex-direction: column;\n  color: #3e3d4a;\n  margin-bottom: 20px;\n  position: relative;\n}\n\n.add_book_container .add_book_item .select_with_add {\n  display: flex;\n  flex-direction: row;\n}\n\n.add_book_container .add_book_item .select_with_add .save_and_cancel {\n  margin-left: 10px;\n  margin-top: 5px;\n}\n\n.add_book_container .add_book_item .select_with_add .save_and_cancel .save {\n  color: #1984f6;\n  cursor: pointer;\n  margin-right: 10px;\n}\n\n.add_book_container .add_book_item .select_with_add .save_and_cancel .cancel {\n  color: #dcdcdc;\n  cursor: pointer;\n}\n\n.add_book_container .add_book_item .select_with_add .add {\n  margin-left: 5px;\n}\n\n.add_book_container .add_book_item .select_with_add .add .add_new {\n  border: 1px solid #9b9b9b;\n  border-radius: 4px;\n  color: #9b9b9b;\n  padding: 6px 8px;\n  background: white;\n  height: 28px;\n  font-size: 12px;\n}\n\n.add_book_container .add_book_item span {\n  font-size: 12px;\n}\n\n.add_book_container .add_book_item .add_input {\n  background: white;\n  border-radius: 4px;\n  padding: 5px 10px;\n  border: 1px solid #bdbdbd;\n  width: 80%;\n}\n\n.add_book_container .add_book_item .add_input1 {\n  background: white;\n  border-radius: 4px;\n  border: 1px solid #bdbdbd;\n  width: 70%;\n}\n\n.add_book_container .add_book_item .add_input2 {\n  background: white;\n  border-radius: 4px;\n  padding: 5px 10px;\n  border: 1px solid #bdbdbd;\n  width: 35%;\n}\n\n.add_book_container .add_book_item .fa-calendar {\n  position: absolute;\n  top: 24px;\n  right: 68%;\n}\n\n.add_book_container .add_book_item ::-moz-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #bdbdbd;\n}\n\n.add_book_container .add_book_item :-ms-input-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #bdbdbd;\n}\n\n.add_book_container .add_book_item ::placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #bdbdbd;\n}\n\n.add_book_container .add_book_item .widgetDatepicker {\n  position: absolute;\n  margin-left: 10%;\n  width: 1px;\n  visibility: hidden;\n  opacity: 0;\n}\n\n.add_book_container .add_book_item .bsDatepicker {\n  padding: 5px;\n  width: 100%;\n  position: absolute;\n  left: 80px;\n}\n\n.add_book_container .add_book_item select {\n  height: 28px;\n  padding: 0px 10px;\n}\n\n.addtional_details_section {\n  background: #fdfdfd;\n}\n\n.add_book_more_details {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-around;\n}\n\n.add_book_more_details .add_book_item {\n  width: 30%;\n  display: flex;\n  flex-direction: column;\n  color: #3e3d4a;\n  margin-bottom: 20px;\n  position: relative;\n}\n\n.add_book_more_details .add_book_item span {\n  font-size: 12px;\n}\n\n.add_book_more_details .add_book_item .add_input2 {\n  background: white;\n  border-radius: 4px;\n  padding: 5px 10px;\n  border: 1px solid #bdbdbd;\n  width: 47%;\n}\n\n.add_book_more_details .add_book_item ::-moz-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #bdbdbd;\n}\n\n.add_book_more_details .add_book_item :-ms-input-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #bdbdbd;\n}\n\n.add_book_more_details .add_book_item ::placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #bdbdbd;\n}\n\nhr {\n  margin-top: 0px;\n  margin-bottom: 20px;\n  border: 0;\n  border-top: 1px solid #eee;\n}\n\n.book_detail_name_container {\n  margin-top: 10px;\n  text-align: left;\n  margin-left: 2%;\n}\n\n.book_detail_name_container span {\n  font-weight: 600;\n}\n\n.books_details_container {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  margin-top: 20px;\n}\n\n.books_details_container .add_book_item {\n  width: 30%;\n  display: flex;\n  flex-direction: column;\n  color: #3e3d4a;\n  margin-bottom: 20px;\n  position: relative;\n}\n\n.books_details_container .add_book_item span {\n  font-size: 12px;\n}\n\n.books_details_container .add_book_item i {\n  position: absolute;\n  top: 24px;\n  right: 56%;\n}\n\n.books_details_container .add_book_item .add_input2 {\n  background: white;\n  border-radius: 4px;\n  padding: 5px 10px;\n  border: 1px solid #bdbdbd;\n  width: 47%;\n}\n\n.books_details_container .add_book_item ::-moz-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #bdbdbd;\n}\n\n.books_details_container .add_book_item :-ms-input-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #bdbdbd;\n}\n\n.books_details_container .add_book_item ::placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #bdbdbd;\n}\n\n.books_details_remark_container {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  margin-left: 2%;\n}\n\n.books_details_remark_container .add_book_item {\n  width: 30%;\n  display: flex;\n  flex-direction: column;\n  color: #3e3d4a;\n  margin-bottom: 20px;\n  position: relative;\n}\n\n.books_details_remark_container .add_book_item span {\n  font-size: 12px;\n}\n\n.books_details_remark_container .add_book_item .add_input3 {\n  background: white;\n  border-radius: 4px;\n  padding: 5px 10px;\n  border: 1px solid #bdbdbd;\n  width: 70%;\n}\n\n.books_details_remark_container .add_book_item ::-moz-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #bdbdbd;\n}\n\n.books_details_remark_container .add_book_item :-ms-input-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #bdbdbd;\n}\n\n.books_details_remark_container .add_book_item ::placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #bdbdbd;\n}\n\n.add_details_btn_container {\n  display: flex;\n  justify-content: flex-start;\n  margin-left: 2%;\n  margin-top: 10px;\n  margin-bottom: 20px;\n}\n\n.add_details_btn_container .add_details {\n  color: #1984f6;\n  border-radius: 4px;\n  border: 1px solid #1984f6;\n  padding: 10px;\n  background: white;\n  font-weight: 600;\n}\n\n.action_button_container {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  margin-right: 2%;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  font-weight: 600;\n}\n\n.action_button_container .cancel_btn {\n  background: white;\n  width: 100px;\n  text-align: center;\n  padding: 10px;\n  color: #1984f6;\n  border-radius: 4px;\n  border: 1px solid #1984f6;\n  cursor: pointer;\n  margin-right: 10px;\n}\n\n.action_button_container .save_btn {\n  background: #1984f6;\n  width: 100px;\n  text-align: center;\n  padding: 10px;\n  color: white;\n  border-radius: 4px;\n  border: 1px solid #1984f6;\n  cursor: pointer;\n}\n\ninput[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n.multiselect-dropdown {\n  font-size: 14px !important;\n  width: 70% !important;\n  font-size: 14px !important;\n  background: white;\n}\n\n.multiselect-dropdown .add_book_container .add_book_item span {\n  font-size: 12px;\n  color: #1984f6;\n  font-weight: 600;\n}\n\n.multiselect-dropdown .dropdown-down {\n  border-top: 5px solid black !important;\n  border-left: 5px solid transparent !important;\n  border-right: 5px solid transparent !important;\n}\n\n.multiselect-dropdown .dropdown-up {\n  border-bottom: 5px solid black !important;\n  border-left: 5px solid transparent !important;\n  border-right: 5px solid transparent !important;\n}\n\n.multiselect-dropdown .dropdown-btn {\n  display: inline-block;\n  border: 1px solid #adadad;\n  width: 100%;\n  padding: 4px 8px;\n  margin-bottom: 0;\n  font-weight: 400;\n  line-height: 1.52857143;\n  text-align: left;\n  vertical-align: middle;\n  cursor: pointer;\n  background-image: none;\n  border-radius: 4px;\n  font-size: 12px;\n}\n\n.dropdown-btn {\n  padding: 4px 12px !important;\n}\n\ninput {\n  background: #fdfdfd;\n}\n\nselect {\n  font-size: 12px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9saWJyYXJ5LW1hbmFnZW1lbnQvYWRkLWJvb2svYWRkLWJvb2suY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZiw2QkFBNkI7QUFDL0I7O0FBTEE7RUFNSSxVQUFVO0VBQ1YsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUd0Qjs7QUFkQTtFQWFNLGFBQWE7RUFDYixtQkFBbUI7QUFLekI7O0FBbkJBO0VBZ0JRLGlCQUFpQjtFQUNqQixlQUFlO0FBT3ZCOztBQXhCQTtFQW1CVSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGtCQUFrQjtBQVM1Qjs7QUE5QkE7RUF3QlUsY0FBYztFQUNkLGVBQWU7QUFVekI7O0FBbkNBO0VBNkJRLGdCQUFnQjtBQVV4Qjs7QUF2Q0E7RUErQlUseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osZUFBZTtBQVl6Qjs7QUFqREE7RUEwQ00sZUFBZTtBQVdyQjs7QUFyREE7RUE2Q00saUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLFVBQVU7QUFZaEI7O0FBN0RBO0VBb0RNLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFFbEIseUJBQXlCO0VBQ3pCLFVBQVU7QUFZaEI7O0FBcEVBO0VBMkRNLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixVQUFVO0FBYWhCOztBQTVFQTtFQWtFTSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7QUFjaEI7O0FBbEZBO0VBc0VvQix5Q0FBQTtFQUNkLGNBQWM7QUFnQnBCOztBQXZGQTtFQXNFb0IseUNBQUE7RUFDZCxjQUFjO0FBZ0JwQjs7QUF2RkE7RUFz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LGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixrQkFBa0I7QUFxQ3RCOztBQXREQTtFQW9CSSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsZUFBZTtBQXNDbkI7O0FBakNBOztFQUVFLHdCQUF3QjtFQUN4QixTQUFTO0FBb0NYOztBQWpDQTtFQUNFLDBCQUEwQjtFQUMxQixxQkFBcUI7RUFDckIsMEJBQTBCO0VBQzFCLGlCQUFpQjtBQW9DbkI7O0FBeENBO0VBTUksZUFBZTtFQUNmLGNBQWM7RUFDZCxnQkFBZ0I7QUFzQ3BCOztBQTlDQTtFQVdJLHNDQUFzQztFQUN0Qyw2Q0FBNkM7RUFDN0MsOENBQThDO0FBdUNsRDs7QUFwREE7RUFnQkkseUNBQXlDO0VBQ3pDLDZDQUE2QztFQUM3Qyw4Q0FBOEM7QUF3Q2xEOztBQTFEQTtFQXFCSSxxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixlQUFlO0FBeUNuQjs7QUFyQ0E7RUFDRSw0QkFBNEI7QUF3QzlCOztBQXJDQTtFQUNFLG1CQUFtQjtBQXdDckI7O0FBdENBO0VBQ0UsZUFBZTtBQXlDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xpYnJhcnktbWFuYWdlbWVudC9hZGQtYm9vay9hZGQtYm9vay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZGRfYm9va19jb250YWluZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIC5hZGRfYm9va19pdGVte1xuICAgIHdpZHRoOiAzMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGNvbG9yOiAjM2UzZDRhO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC5zZWxlY3Rfd2l0aF9hZGR7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIC5zYXZlX2FuZF9jYW5jZWx7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgIC5zYXZle1xuICAgICAgICAgIGNvbG9yOiAjMTk4NGY2O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmNhbmNlbHtcbiAgICAgICAgICBjb2xvcjogI2RjZGNkYztcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5hZGR7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICAgIC5hZGRfbmV3e1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM5YjliOWI7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIGNvbG9yOiAjOWI5YjliO1xuICAgICAgICAgIHBhZGRpbmc6IDZweCA4cHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgaGVpZ2h0OiAyOHB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBzcGFue1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cbiAgICAuYWRkX2lucHV0e1xuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiZGJkYmQ7XG4gICAgICB3aWR0aDogODAlO1xuICAgIH1cbiAgICAuYWRkX2lucHV0MXtcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgLy8gcGFkZGluZzogNXB4IDEwcHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjYmRiZGJkO1xuICAgICAgd2lkdGg6IDcwJTtcbiAgICB9XG4gICAgLmFkZF9pbnB1dDJ7XG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2JkYmRiZDtcbiAgICAgIHdpZHRoOiAzNSU7XG4gICAgfVxuICAgIC5mYS1jYWxlbmRhcntcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMjRweDtcbiAgICAgIHJpZ2h0OiA2OCU7XG4gICAgfVxuICAgIDo6cGxhY2Vob2xkZXIgeyAvKiBDaHJvbWUsIEZpcmVmb3gsIE9wZXJhLCBTYWZhcmkgMTAuMSsgKi9cbiAgICAgIGNvbG9yOiAjYmRiZGJkO1xuICAgIH1cblxuICAgIC53aWRnZXREYXRlcGlja2VyIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMCU7XG4gICAgICB3aWR0aDogMXB4O1xuICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgLmJzRGF0ZXBpY2tlciB7XG4gICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IDgwcHhcbiAgICB9XG4gICAgc2VsZWN0e1xuICAgICAgaGVpZ2h0OiAyOHB4O1xuICAgICAgICBwYWRkaW5nOiAwcHggMTBweDtcbiAgICB9XG4gIH1cbn1cblxuLmFkZHRpb25hbF9kZXRhaWxzX3NlY3Rpb257XG4gIGJhY2tncm91bmQ6ICNmZGZkZmQ7XG59XG4uYWRkX2Jvb2tfbW9yZV9kZXRhaWxze1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAuYWRkX2Jvb2tfaXRlbXtcbiAgICB3aWR0aDogMzAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBjb2xvcjogIzNlM2Q0YTtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBzcGFue1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cbiAgICAuYWRkX2lucHV0MntcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjYmRiZGJkO1xuICAgICAgd2lkdGg6IDQ3JTtcbiAgICB9XG4gICAgOjpwbGFjZWhvbGRlciB7IC8qIENocm9tZSwgRmlyZWZveCwgT3BlcmEsIFNhZmFyaSAxMC4xKyAqL1xuICAgICAgY29sb3I6ICNiZGJkYmQ7XG4gICAgfVxuICB9XG59XG5cbmhyIHtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlO1xufVxuXG4uYm9va19kZXRhaWxfbmFtZV9jb250YWluZXJ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi1sZWZ0OiAyJTtcbiAgc3BhbntcbiAgICBmb250LXdlaWdodDogNjAwO1xuICB9XG59XG5cbi5ib29rc19kZXRhaWxzX2NvbnRhaW5lcntcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgLmFkZF9ib29rX2l0ZW17XG4gICAgd2lkdGg6IDMwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgY29sb3I6ICMzZTNkNGE7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgc3BhbntcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG4gICAgaXtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMjRweDtcbiAgICAgIHJpZ2h0OiA1NiU7XG4gICAgfVxuICAgIC5hZGRfaW5wdXQye1xuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiZGJkYmQ7XG4gICAgICB3aWR0aDogNDclO1xuICAgIH1cbiAgICA6OnBsYWNlaG9sZGVyIHsgLyogQ2hyb21lLCBGaXJlZm94LCBPcGVyYSwgU2FmYXJpIDEwLjErICovXG4gICAgICBjb2xvcjogI2JkYmRiZDtcbiAgICB9XG4gIH1cbn1cblxuLmJvb2tzX2RldGFpbHNfcmVtYXJrX2NvbnRhaW5lcntcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIG1hcmdpbi1sZWZ0OiAyJTtcbiAgLmFkZF9ib29rX2l0ZW17XG4gICAgd2lkdGg6IDMwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgY29sb3I6ICMzZTNkNGE7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgc3BhbntcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG4gICAgLmFkZF9pbnB1dDN7XG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2JkYmRiZDtcbiAgICAgIHdpZHRoOiA3MCU7XG4gICAgfVxuICAgIDo6cGxhY2Vob2xkZXIgeyAvKiBDaHJvbWUsIEZpcmVmb3gsIE9wZXJhLCBTYWZhcmkgMTAuMSsgKi9cbiAgICAgIGNvbG9yOiAjYmRiZGJkO1xuICAgIH1cbiAgfVxufVxuXG4uYWRkX2RldGFpbHNfYnRuX2NvbnRhaW5lcntcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBtYXJnaW4tbGVmdDogMiU7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIC5hZGRfZGV0YWlsc3tcbiAgICBjb2xvcjogIzE5ODRmNjtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzE5ODRmNjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIH1cbn1cblxuLmFjdGlvbl9idXR0b25fY29udGFpbmVye1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBtYXJnaW4tcmlnaHQ6IDIlO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIC5jYW5jZWxfYnRue1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBjb2xvcjogIzE5ODRmNjtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzE5ODRmNjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG4gIC5zYXZlX2J0bntcbiAgICBiYWNrZ3JvdW5kOiAjMTk4NGY2O1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMxOTg0ZjY7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG59XG5cblxuaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxuaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBtYXJnaW46IDA7XG59XG5cbi5tdWx0aXNlbGVjdC1kcm9wZG93bntcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA3MCUgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICAuYWRkX2Jvb2tfY29udGFpbmVyIC5hZGRfYm9va19pdGVtIHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogIzE5ODRmNjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICB9XG4gIC5kcm9wZG93bi1kb3due1xuICAgIGJvcmRlci10b3A6IDVweCBzb2xpZCBibGFjayAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICB9XG4gIC5kcm9wZG93bi11cHtcbiAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgYmxhY2sgIWltcG9ydGFudDtcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgfVxuICAuZHJvcGRvd24tYnRue1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYWRhZGFkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDRweCA4cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjUyODU3MTQzO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG59XG5cbi5kcm9wZG93bi1idG57XG4gIHBhZGRpbmc6IDRweCAxMnB4ICFpbXBvcnRhbnQ7XG59XG5cbmlucHV0e1xuICBiYWNrZ3JvdW5kOiAjZmRmZGZkO1xufVxuc2VsZWN0e1xuICBmb250LXNpemU6IDEycHg7XG59XG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/components/library-management/add-book/add-book.component.ts":
    /*!******************************************************************************!*\
      !*** ./src/app/components/library-management/add-book/add-book.component.ts ***!
      \******************************************************************************/

    /*! exports provided: AddBookComponent */

    /***/
    function srcAppComponentsLibraryManagementAddBookAddBookComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddBookComponent", function () {
        return AddBookComponent;
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


      var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! moment */
      "./node_modules/moment/moment.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../services/authenticator.service */
      "./src/app/services/authenticator.service.ts");
      /* harmony import */


      var _services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../services/common-service */
      "./src/app/services/common-service.ts");
      /* harmony import */


      var _services_library_add_add_book_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../services/library/add/add-book.service */
      "./src/app/services/library/add/add-book.service.ts");

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

      var AddBookComponent =
      /** @class */
      function () {
        var AddBookComponent = /*#__PURE__*/function () {
          function AddBookComponent(router, auth, commonService, appC, addBookService) {
            _classCallCheck(this, AddBookComponent);

            this.router = router;
            this.auth = auth;
            this.commonService = commonService;
            this.appC = appC;
            this.addBookService = addBookService;
            this.additiobnalDetailsDisplay = false;
            this.addCategory = false;
            this.authorSettings = {};
            this.selectedAuthorList = [];
            this.multiClickDisabled = false; // Master add book data

            this.title = '';
            this.categoryName = '-1';
            this.subcategoryName = '-1';
            this.subjectName = '-1';
            this.publicationName = '-1';
            this.authorName = '-1';
            this.bookAddDate = '';
            this.bookQty = '';
            this.bookAmt = '';
            this.bookISBN = '';
            this.bookPagesCount = '';
            this.bookVolume = '';
            this.bookEdition = '';
            this.bookReference = '-1';
            this.bookLang = '-1';
            this.bookBillNumber = '';
            this.bookLostAmt = '';
            this.bookBillDate = '';
            this.bookRemarks = '';
          }

          _createClass(AddBookComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.today = moment__WEBPACK_IMPORTED_MODULE_2__(new Date()).format("DD MMM YYYY");
              this.tempBillDate = moment__WEBPACK_IMPORTED_MODULE_2__(new Date()).format("DD MMM YYYY");
              this.getAllMasterData();
              this.authorSettings = {
                singleSelection: false,
                idField: 'author_id',
                textField: 'author_name',
                itemsShowLimit: 1,
                enableCheckAll: false
              };
            }
          }, {
            key: "getAllMasterData",
            value: function getAllMasterData() {
              var _this = this;

              this.auth.showLoader();
              this.addBookService.getAllMasterData().subscribe(function (response) {
                _this.auth.hideLoader();

                var res;
                res = response;
                console.log(response);
                _this.categoryList = res.response.categories;
                _this.subjectList = res.response.subjects;
                _this.publicationList = res.response.publications;
                _this.authorList = res.response.authors;
                _this.languageList = res.response.languages;
                _this.referenceList = res.response.references;
              }, function (errorResponse) {
                _this.auth.hideLoader();

                console.log(errorResponse);
              });
            }
          }, {
            key: "getSubCategory",
            value: function getSubCategory(ev) {
              var _this2 = this;

              this.auth.showLoader();
              this.addBookService.getSubCategories(ev).subscribe(function (response) {
                _this2.auth.hideLoader();

                var res;
                res = response;
                console.log(response);
                _this2.subcategoryList = res.response;
              }, function (errorResponse) {
                _this2.auth.hideLoader();

                console.log(errorResponse);
              });
            }
          }, {
            key: "showAdditionalDetails",
            value: function showAdditionalDetails() {
              if (this.additiobnalDetailsDisplay) {
                this.additiobnalDetailsDisplay = false;
                return;
              }

              if (!this.additiobnalDetailsDisplay) {
                this.additiobnalDetailsDisplay = true;
                return;
              }
            }
          }, {
            key: "addNewCategory",
            value: function addNewCategory() {
              this.addCategory = true;
            }
          }, {
            key: "openCalendar",
            value: function openCalendar(id) {
              document.getElementById(id).click();
            }
          }, {
            key: "addNewDate",
            value: function addNewDate() {
              var check = this.dateGreaterThanCheck(this.bookAddDate);

              if (check) {
                this.today = moment__WEBPACK_IMPORTED_MODULE_2__(this.bookAddDate).format("DD MMM YYYY");
              } else {
                this.messageHandler('error', 'Bill date cannot be future date', '');
              }
            }
          }, {
            key: "addBookDate",
            value: function addBookDate() {
              var check = this.dateGreaterThanCheck(this.bookBillDate);

              if (check) {
                this.tempBillDate = moment__WEBPACK_IMPORTED_MODULE_2__(this.bookBillDate).format("DD MMM YYYY");
              } else {
                this.messageHandler('error', 'Bill date cannot be future date', '');
              }
            }
          }, {
            key: "dateGreaterThanCheck",
            value: function dateGreaterThanCheck(givenDate) {
              var currentDate = new Date();
              givenDate = new Date(givenDate);

              if (givenDate > currentDate) {
                return false;
              } else {
                return true;
              }
            }
          }, {
            key: "addNewBook",
            value: function addNewBook() {
              var _this3 = this;

              var custAuthorIds = [];
              this.selectedAuthorList.map(function (ele) {
                var x = ele.author_id.toString();
                custAuthorIds.push(x);
              });

              if (this.title == null || this.title == '' || this.categoryName == '-1' || this.categoryName == null || this.categoryName == '' || this.subjectName == '-1' || this.subjectName == null || this.subjectName == '' || this.publicationName == '-1' || this.publicationName == null || this.publicationName == '' || this.bookLang == '-1' || this.bookLang == null || this.bookLang == '' || custAuthorIds.length == 0 || this.bookQty == null || this.bookQty == '' || this.bookAmt == null || this.bookAmt == '') {
                this.messageHandler('error', 'Mandatory field(s) are required', '');
              } else if (this.bookQty == 0) {
                this.messageHandler('error', 'Book quantity should not be zero', '');
              } else if (this.bookAmt == 0) {
                this.messageHandler('error', 'Book amount should not be zero', '');
              } else {
                var d;

                if (this.bookBillDate == "") {
                  d = "";
                } else {
                  d = moment__WEBPACK_IMPORTED_MODULE_2__(this.bookBillDate).unix();
                }

                var obj = {
                  "category_id": this.categoryName,
                  "sub_category_id": this.subcategoryName,
                  "subject_id": this.subjectName,
                  "publication_id": this.publicationName,
                  "language_id": this.bookLang,
                  "reference_id": this.bookReference,
                  "authors": custAuthorIds,
                  "title": this.title,
                  // "location": ,
                  "volume": this.bookVolume,
                  // "due_fine_per_day": ,
                  "edition": this.bookEdition,
                  "book_lost_fine": this.bookLostAmt,
                  // "issue_for_days": ,
                  "bar_code_number": this.bookBarCodeNumber,
                  "isbn_number": this.bookISBN,
                  "quantity": this.bookQty,
                  "price_per_book": this.bookAmt,
                  "no_of_pages": this.bookPagesCount,
                  "bill_number": this.bookBillNumber,
                  "bill_date": d,
                  "bill_remark": this.bookRemarks
                };
                this.auth.showLoader();
                this.multiClickDisabled = true;
                console.log(obj);
                this.addBookService.addNewBook(obj).subscribe(function (response) {
                  var res;
                  res = response;

                  if (res.response != null) {
                    _this3.auth.hideLoader();

                    _this3.messageHandler('success', 'Book(s) added successfully', '');

                    var _res;

                    _res = response;
                    console.log(response);
                    _this3.multiClickDisabled = false;

                    _this3.clearAllFields();
                  } else {
                    _this3.multiClickDisabled = false;

                    _this3.auth.hideLoader();

                    if (res.errorResponse[0].errorCode == 700) {
                      _this3.messageHandler('error', 'Book alredy exists', '');
                    }

                    _this3.messageHandler('error', 'Internal Server Error', '');
                  }
                }, function (errorResponse) {
                  _this3.auth.hideLoader();

                  _this3.messageHandler('error', 'Internal Server Error', '');

                  console.log(errorResponse);
                });
              }
            }
          }, {
            key: "clearAllFields",
            value: function clearAllFields() {
              this.today = moment__WEBPACK_IMPORTED_MODULE_2__(new Date()).format("DD MMM YYYY");
              this.tempBillDate = moment__WEBPACK_IMPORTED_MODULE_2__(new Date()).format("DD MMM YYYY");
              this.bookBillDate = moment__WEBPACK_IMPORTED_MODULE_2__(new Date()).format("DD MMM YYYY");
              this.title = "";
              this.categoryName = "-1";
              this.subcategoryName = "-1";
              this.subjectName = "-1";
              this.publicationName = "-1";
              this.authorName = "-1";
              this.bookAddDate = "";
              this.bookQty = "";
              this.bookAmt = "";
              this.bookBarCodeNumber = "";
              this.bookISBN = "";
              this.bookPagesCount = "";
              this.bookVolume = "";
              this.bookEdition = "";
              this.bookReference = "-1";
              this.bookLang = "-1";
              this.bookBillNumber = "";
              this.bookLostAmt = "";
              this.bookRemarks = "";
              this.selectedAuthorList = [];
            }
          }, {
            key: "messageHandler",
            value: function messageHandler(type, title, body) {
              var obj = {
                type: type,
                title: title,
                body: body
              };
              this.appC.popToast(obj);
            }
          }]);

          return AddBookComponent;
        }();

        AddBookComponent.ctorParameters = function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticatorService"]
          }, {
            type: _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonServiceFactory"]
          }, {
            type: _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
          }, {
            type: _services_library_add_add_book_service__WEBPACK_IMPORTED_MODULE_6__["AddBookService"]
          }];
        };

        AddBookComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
          selector: 'app-add-book',
          template: __importDefault(__webpack_require__(
          /*! raw-loader!./add-book.component.html */
          "./node_modules/raw-loader/dist/cjs.js!./src/app/components/library-management/add-book/add-book.component.html"))["default"],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          styles: [__importDefault(__webpack_require__(
          /*! ./add-book.component.scss */
          "./src/app/components/library-management/add-book/add-book.component.scss"))["default"]]
        }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_authenticator_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticatorService"], _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonServiceFactory"], _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _services_library_add_add_book_service__WEBPACK_IMPORTED_MODULE_6__["AddBookService"]])], AddBookComponent);
        return AddBookComponent;
      }();
      /***/

    },

    /***/
    "./src/app/components/library-management/dashboard/dashboard.component.scss":
    /*!**********************************************************************************!*\
      !*** ./src/app/components/library-management/dashboard/dashboard.component.scss ***!
      \**********************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsLibraryManagementDashboardDashboardComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".pie-wrapper {\n  box-shadow: 0px 0px 2px 1px;\n  background: #fff;\n}\n\n.pie-wrapper .row {\n  margin: 0px;\n}\n\n.pie-wrapper .field-wrapper {\n  width: 200px;\n  float: right;\n  margin-right: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9saWJyYXJ5LW1hbmFnZW1lbnQvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJCQUEyQjtFQUMzQixnQkFBZ0I7QUFDcEI7O0FBSEE7RUFJUSxXQUFXO0FBR25COztBQVBBO0VBT1EsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7QUFJMUIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xpYnJhcnktbWFuYWdlbWVudC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBpZS13cmFwcGVye1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMnB4IDFweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIC5yb3d7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgIH1cbiAgICAuZmllbGQtd3JhcHBlcntcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICB9XG59XG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/components/library-management/dashboard/dashboard.component.ts":
    /*!********************************************************************************!*\
      !*** ./src/app/components/library-management/dashboard/dashboard.component.ts ***!
      \********************************************************************************/

    /*! exports provided: DashboardComponent */

    /***/
    function srcAppComponentsLibraryManagementDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
        return DashboardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _services_library_master_masters_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../services/library/master/masters.service */
      "./src/app/services/library/master/masters.service.ts");
      /* harmony import */


      var highcharts_highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! highcharts/highcharts */
      "./node_modules/highcharts/highcharts.js");
      /* harmony import */


      var highcharts_highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts_highcharts__WEBPACK_IMPORTED_MODULE_2__);

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

      var DashboardComponent =
      /** @class */
      function () {
        var DashboardComponent = /*#__PURE__*/function () {
          function DashboardComponent(masterService) {
            _classCallCheck(this, DashboardComponent);

            this.masterService = masterService;
            this.isDataLoaded = false;
          }

          _createClass(DashboardComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.fetchDashboard();
            }
          }, {
            key: "fetchDashboard",
            value: function fetchDashboard() {
              var _this4 = this;

              this.masterService.fetchDashboardMonitor().subscribe(function (res) {
                _this4.isDataLoaded = true;
                var result;
                result = res;

                _this4.generateChartData(result.response);
              }, function (err) {
                _this4.isDataLoaded = false;
              });
            }
          }, {
            key: "generateChartData",
            value: function generateChartData(res) {
              var obj = {
                total_added_books: res.total_added_books,
                total_available_books: res.total_available_books,
                total_issued_books: res.total_issued_books,
                total_lost_books: res.total_lost_books,
                total_overdued_books: res.total_overdued_books,
                total_scrapped_books: res.total_scrapped_books
              };
              this.createChart(obj);
            }
          }, {
            key: "createChart",
            value: function createChart(obj) {
              highcharts_highcharts__WEBPACK_IMPORTED_MODULE_2__["chart"]('pieContainer', {
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
                  text: ''
                },
                tooltip: {
                  pointFormat: '<span style="color:{series.color}">●</span> Books: <b>  {point.y} </b>'
                },
                plotOptions: {
                  pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                      enabled: true,
                      format: '{y}'
                    },
                    showInLegend: true
                  }
                },
                series: [{
                  // name: 'Payment Mode',
                  colorByPoint: true,
                  data: [// {
                  // name: 'total',
                  // y: obj.total_added_books,
                  // sliced: true,
                  // selected: true
                  // },
                  {
                    name: 'Available',
                    y: obj.total_available_books,
                    sliced: true,
                    selected: true
                  }, {
                    name: 'Issued',
                    y: obj.total_issued_books,
                    sliced: true
                  }, {
                    name: 'Lost',
                    y: obj.total_lost_books,
                    sliced: true
                  }, {
                    name: 'Overdue',
                    y: obj.total_overdued_books,
                    sliced: true
                  }, {
                    name: 'Scrapped',
                    y: obj.total_scrapped_books,
                    sliced: true
                  }]
                }]
              });
            }
          }]);

          return DashboardComponent;
        }();

        DashboardComponent.ctorParameters = function () {
          return [{
            type: _services_library_master_masters_service__WEBPACK_IMPORTED_MODULE_1__["MastersService"]
          }];
        };

        DashboardComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
          selector: 'app-dashboard',
          template: __importDefault(__webpack_require__(
          /*! raw-loader!./dashboard.component.html */
          "./node_modules/raw-loader/dist/cjs.js!./src/app/components/library-management/dashboard/dashboard.component.html"))["default"],
          styles: [__importDefault(__webpack_require__(
          /*! ./dashboard.component.scss */
          "./src/app/components/library-management/dashboard/dashboard.component.scss"))["default"]]
        }), __metadata("design:paramtypes", [_services_library_master_masters_service__WEBPACK_IMPORTED_MODULE_1__["MastersService"]])], DashboardComponent);
        return DashboardComponent;
      }();
      /***/

    },

    /***/
    "./src/app/components/library-management/issue-book/issue-book.component.scss":
    /*!************************************************************************************!*\
      !*** ./src/app/components/library-management/issue-book/issue-book.component.scss ***!
      \************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsLibraryManagementIssueBookIssueBookComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@charset \"UTF-8\";\n.main_container {\n  height: 100%;\n  min-height: -webkit-fill-available;\n  min-height: -moz-available;\n  min-height: stretch;\n}\n.search_bar_container {\n  position: relative;\n  margin-left: 2%;\n}\n.search_bar_container .search_box {\n  height: 35px;\n  width: 420px;\n  border: 1px solid #dcdcdc;\n  background: white;\n  border-radius: 4px;\n  padding-left: 32px;\n  padding-right: 18px;\n}\n.search_bar_container .fa-search {\n  position: absolute;\n  left: 1px;\n  top: 1px;\n  padding: 9px;\n  color: #9b9b9b;\n  background: white;\n  border-radius: 4px;\n}\n.search_bar_container .fa-search:hover {\n  color: black;\n}\n.search_bar_container .fa-sort-desc {\n  position: absolute;\n  left: 385px;\n  top: 8px;\n  background: white;\n  cursor: pointer;\n  padding-left: 10px;\n}\n.search_bar_container span {\n  font-family: 'Nanum Pen Script';\n  font-size: 18px;\n  margin-left: 10px;\n}\n::ng-deep .bs-datepicker-container, .bs-daterangepicker-container {\n  left: 160px !important;\n}\n.search_box_filter_container {\n  margin-left: 2%;\n  width: 420px;\n  border-radius: 4px;\n  background: white;\n  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.27);\n  margin-top: 4px;\n  display: flex;\n  flex-direction: column;\n  padding: 16px 26px;\n  position: fixed;\n  z-index: 1000;\n}\n.search_box_filter_container .filter_item {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n.search_box_filter_container .filter_item .label_container {\n  width: 25%;\n  color: #3a3a3a;\n  text-align: left;\n  position: relative;\n}\n.search_box_filter_container .filter_item .label_container span {\n  position: absolute;\n  top: 5px;\n  font-size: 12px;\n}\n.search_box_filter_container .filter_item .input_container {\n  width: 70%;\n}\n.search_box_filter_container .filter_item .input_container input {\n  border-bottom: 1px solid #9b9b9b;\n  padding: 10px;\n  padding-bottom: 3px;\n  padding-left: 0px;\n  width: 100%;\n  color: #3a3a3a;\n  font-size: 12px;\n  line-height: 1.36;\n  letter-spacing: normal;\n  font-weight: normal;\n}\n.search_box_filter_container .filter_item .input_container ::-moz-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #cfcfcf;\n}\n.search_box_filter_container .filter_item .input_container :-ms-input-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #cfcfcf;\n}\n.search_box_filter_container .filter_item .input_container ::placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #cfcfcf;\n}\n.search_box_filter_container .filter_item .input_container select {\n  border-bottom: 1px solid #9b9b9b;\n  padding-bottom: 3px;\n  padding-left: 0px;\n  width: 100%;\n  color: #3a3a3a;\n  font-size: 12px;\n  line-height: 1.36;\n  letter-spacing: normal;\n  font-weight: normal;\n}\n.search_box_filter_container .filter_item .input_container select option {\n  color: #3a3a3a;\n}\n.search_box_filter_container .filter_item .input_container option:first-child {\n  color: #cfcfcf !important;\n}\n.search_box_filter_container .filter_item .input_container input:focus {\n  border-bottom: 1px solid #1283f4;\n}\n.search_box_filter_container .filter_item .input_container select:focus {\n  border-bottom: 1px solid #1283f4;\n}\n.search_box_filter_container .filter_item .input_container .book_suggestion_container {\n  display: flex;\n  flex-direction: column;\n  width: 19%;\n  margin-top: 5px;\n  border-radius: 4px;\n  position: fixed;\n  background: white;\n  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.16);\n  height: 200px;\n  overflow-y: scroll;\n}\n.search_box_filter_container .filter_item .input_container .book_suggestion_container .book_suggestion_item {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  padding: 8px;\n  color: #585574;\n}\n.search_box_filter_container .filter_item .input_container .book_suggestion_container .book_suggestion_item .name_container {\n  font-size: 13px;\n  width: 100%;\n  cursor: pointer;\n}\n.search_box_filter_container .filter_item .input_container .book_suggestion_container .book_suggestion_item:hover {\n  color: #ffffff;\n  background: #1283f4;\n}\n.search_box_filter_container .action_btn_container {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 10px;\n}\n.search_box_filter_container .action_btn_container .reset_btn {\n  margin-right: 10px;\n  padding: 6px 15px;\n  border-radius: 4px;\n  border: 1px solid #585574;\n  color: #585574;\n  text-align: center;\n  background: white;\n}\n.search_box_filter_container .action_btn_container .search_btn {\n  padding: 6px 15px;\n  border-radius: 4px;\n  border: 1px solid #1283f4;\n  color: white;\n  background: #1283f4;\n  text-align: center;\n}\n.suggestions_container {\n  background: white;\n  border-radius: 4px;\n  height: 200px;\n  max-height: 200px;\n  min-height: 200px;\n  overflow-y: auto;\n  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.27);\n  display: flex;\n  flex-direction: column;\n  margin-left: 2%;\n  width: 420px;\n  margin-top: 4px;\n  position: fixed;\n}\n.suggestions_container .suggestion {\n  padding: 10px;\n}\n.suggestions_container .suggestion .suggestion_item {\n  display: flex;\n  flex-direction: row;\n  margin-bottom: 10px;\n  cursor: pointer;\n}\n.suggestions_container .suggestion .suggestion_item .img_container {\n  width: 10%;\n  padding: 6px;\n}\n.suggestions_container .suggestion .suggestion_item .book_details {\n  display: flex;\n  flex-direction: column;\n}\n.suggestions_container .suggestion .suggestion_item .book_details .name_container {\n  color: #585574;\n  font-size: 12px;\n}\n.suggestions_container .suggestion .suggestion_item .book_details .book_more_info {\n  color: #9b9b9b;\n  display: flex;\n  flex-direction: row;\n  font-size: 12px;\n  margin-top: 5px;\n}\nhr {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  border: 0;\n  border-top: 1px solid #eee;\n  width: 96%;\n  margin-left: 2%;\n}\n.widgetDatepicker {\n  position: absolute;\n  margin-left: 10%;\n  width: 1px;\n  visibility: hidden;\n  opacity: 0;\n}\n.bsDatepicker {\n  padding: 5px;\n  width: 100%;\n  position: absolute;\n  left: 80px;\n}\n.illustartion_container {\n  width: 100%;\n}\n.illustartion_container img {\n  max-height: 70%;\n  max-width: 27%;\n  margin-left: 30%;\n}\n.search_result_container {\n  display: flex;\n  flex-direction: column;\n  width: 96%;\n  margin-left: 2%;\n  margin-right: 2%;\n}\n.search_result_container .header_container {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  padding: 10px 0px;\n  padding-top: 0px;\n  padding-left: 16px;\n  padding-right: 10px;\n  font-size: 13px;\n}\n.search_result_container .header_container .header_item, .search_result_container .header_container .header_item1 {\n  color: #9898a3;\n  font-weight: 600;\n  text-align: left;\n  width: 10%;\n}\n.search_result_container .header_container .header_item1 {\n  width: 16%;\n}\n.search_result_container .value_container {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  padding: 5px 10px;\n  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.16);\n  border-radius: 6px;\n  background: white;\n  font-size: 13px;\n  border-left: 6px solid #9b9b9b;\n  margin-bottom: 10px;\n}\n.search_result_container .value_container .value_item, .search_result_container .value_container .value_item1 {\n  color: #585574;\n  text-align: left;\n  width: 10%;\n  /* Firefox */\n  display: -moz-box;\n  -moz-box-align: center;\n  /* Safari, Opera, and Chrome */\n  display: -webkit-box;\n  -webkit-box-align: center;\n  /* W3C */\n}\n.search_result_container .value_container .value_item1 {\n  width: 16%;\n}\n.search_result_container .value_container .action_img {\n  cursor: pointer;\n  width: 25px;\n  height: 25px;\n}\n.search_result_container .border_div {\n  border-left: 6px solid #04bb11;\n}\n.search_result_container .non_border_div {\n  height: 38px;\n  border-left: 6px solid #9b9b9b;\n}\n.for_book_details {\n  background: white;\n  border-radius: 6px;\n  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);\n}\n.for_book_details .book_details_container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n.for_book_details .book_details_container .book_details_item_1 {\n  display: flex;\n  flex-direction: row;\n  border-bottom: 1px solid #DDDDDD;\n  padding: 10px 15px;\n}\n.for_book_details .book_details_container .book_details_item_1 .book_icon {\n  width: 25px;\n  height: 25px;\n}\n.for_book_details .book_details_container .book_details_item_1 .book_name_container {\n  display: flex;\n  flex-direction: column;\n  margin-left: 5px;\n  width: auto;\n  min-width: 20%;\n}\n.for_book_details .book_details_container .book_details_item_1 .book_name_container .title {\n  font-size: 12px;\n  font-weight: normal;\n  font-style: normal;\n  text-align: left;\n  color: #9b9b9b;\n}\n.for_book_details .book_details_container .book_details_item_1 .book_name_container .book_name {\n  font-size: 14px;\n  font-weight: 600;\n  font-style: normal;\n  text-align: left;\n  color: #585574;\n}\n.for_book_details .book_details_container .book_details_item_1 .book_isbn {\n  display: flex;\n  flex-direction: column;\n  width: 20%;\n  margin-left: 15px;\n}\n.for_book_details .book_details_container .book_details_item_1 .book_isbn .title {\n  font-size: 12px;\n  font-weight: normal;\n  font-style: normal;\n  text-align: left;\n  color: #9b9b9b;\n}\n.for_book_details .book_details_container .book_details_item_1 .book_isbn .isbn_number {\n  font-size: 12px;\n  font-weight: 600;\n  font-style: normal;\n  text-align: left;\n  color: #585574;\n}\n.for_book_details .book_details_container .book_details_item_1 .available_btn {\n  background: #cdffd1;\n  border: 1px solid #04bb11;\n  border-radius: 4px;\n  color: #434343;\n  padding: 1px 10px;\n  height: 20px;\n  font-size: 12px;\n  cursor: normal;\n}\n.for_book_details .book_details_container .book_details_item_1 .not_available_btn {\n  background: #f9f9f9;\n  border: 1px solid #b0b0b0;\n  border-radius: 4px;\n  color: #b0b0b0;\n  padding: 1px 10px;\n  height: 20px;\n  font-size: 12px;\n  cursor: normal;\n}\n.for_book_details .book_details_container .book_details_item_2 {\n  display: flex;\n  flex-direction: row;\n  border-bottom: 1px solid #DDDDDD;\n  padding: 10px 15px;\n}\n.for_book_details .book_details_container .book_details_item_2 .title {\n  font-size: 12px;\n  font-weight: normal;\n  font-style: normal;\n  text-align: left;\n  color: #9b9b9b;\n}\n.for_book_details .book_details_container .book_details_item_2 .book_more_info_item_1 {\n  display: flex;\n  flex-direction: column;\n  width: 20%;\n}\n.for_book_details .book_details_container .book_details_item_2 .book_more_info_item_1 .more_info_value {\n  font-size: 12px;\n  font-weight: normal;\n  font-style: normal;\n  text-align: left;\n  color: #585574;\n}\n.for_book_details .book_details_container .book_details_item_2 .book_more_info_item_2 {\n  display: flex;\n  flex-direction: column;\n  width: 15%;\n}\n.for_book_details .book_details_container .book_details_item_2 .book_more_info_item_2 .more_info_value {\n  font-size: 12px;\n  font-weight: normal;\n  font-style: normal;\n  text-align: left;\n  color: #585574;\n}\n.for_book_details .book_details_container .book_details_item_3 {\n  display: flex;\n  flex-direction: row;\n  border-bottom: 1px solid #DDDDDD;\n  padding: 10px 15px;\n}\n.for_book_details .book_details_container .book_details_item_3 .search_box_container .search_box {\n  height: 35px;\n  width: 310px;\n  border: 1px solid #dcdcdc;\n  background: white;\n  border-radius: 4px;\n  padding-left: 10px;\n}\n.for_book_details .book_details_container .book_details_item_3 .book_in_hand_container {\n  text-align: left;\n  width: 34%;\n  padding-left: 20px;\n  padding-top: 10px;\n  color: #585574;\n}\n.for_book_details .book_details_container .book_details_item_3 .books_in_hand_details_container {\n  display: flex;\n  flex-direction: column;\n  width: 40%;\n}\n.for_book_details .book_details_container .book_details_item_3 .books_in_hand_details_container .books_in_hand_details_item {\n  display: flex;\n  flex-direction: row;\n  background: #f2f9ff;\n  border: 1px solid #d4eaff;\n  border-radius: 4px;\n  margin-bottom: 5px;\n}\n.for_book_details .book_details_container .book_details_item_3 .books_in_hand_details_container .books_in_hand_details_item .item_container {\n  display: flex;\n  flex-direction: row;\n  padding: 10px;\n  width: 94%;\n  justify-content: flex-start;\n}\n.for_book_details .book_details_container .book_details_item_3 .books_in_hand_details_container .books_in_hand_details_item .action_container {\n  padding: 10px;\n  border-left: 1px solid #d4eaff;\n}\n.for_book_details .book_details_container .book_details_item_3 .books_in_hand_details_container .books_in_hand_details_item .book_icon {\n  width: 25px;\n  height: 25px;\n}\n.for_book_details .book_details_container .book_details_item_3 .books_in_hand_details_container .books_in_hand_details_item .book_name_container {\n  display: flex;\n  flex-direction: column;\n  margin-left: 5px;\n  width: 35%;\n}\n.for_book_details .book_details_container .book_details_item_3 .books_in_hand_details_container .books_in_hand_details_item .issue_date, .for_book_details .book_details_container .book_details_item_3 .books_in_hand_details_container .books_in_hand_details_item .return_date {\n  display: flex;\n  flex-direction: column;\n  margin-left: 5px;\n  width: 20%;\n}\n.for_book_details .book_details_container .book_details_item_3 .books_in_hand_details_container .books_in_hand_details_item .book_status_container {\n  margin-top: 5px;\n}\n.for_book_details .book_details_container .book_details_item_3 .books_in_hand_details_container .books_in_hand_details_item .book_status_container .issued_btn {\n  cursor: default;\n  background: #dfefff;\n  border: 1px solid #1283f4;\n  padding: 3px 8px;\n  font-size: 12px;\n  font-weight: 400;\n  border-radius: 4px;\n}\n.for_book_details .book_details_container .book_details_item_3 .books_in_hand_details_container .books_in_hand_details_item .book_status_container .overdue_btn {\n  cursor: default;\n  background: #ffdfca;\n  border: 1px solid #ff6600;\n  padding: 3px 8px;\n  font-size: 12px;\n  font-weight: 400;\n  border-radius: 4px;\n}\n.for_book_details .book_details_container .book_details_item_3 .books_in_hand_details_container .books_in_hand_details_item .title {\n  font-size: 12px;\n  font-weight: normal;\n  font-style: normal;\n  text-align: left;\n  color: #9b9b9b;\n}\n.for_book_details .book_details_container .book_details_item_3 .books_in_hand_details_container .books_in_hand_details_item .book_name {\n  font-size: 12px;\n  font-weight: 600;\n  font-style: normal;\n  text-align: left;\n  color: #585574;\n}\n.for_book_details .book_details_container .book_details_item_3 .bor_suggestions_container {\n  background: white;\n  border-radius: 4px;\n  height: 200px;\n  max-height: 200px;\n  min-height: 200px;\n  overflow-y: auto;\n  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.27);\n  display: flex;\n  flex-direction: column;\n  width: 310px;\n  margin-top: 4px;\n  position: fixed;\n  z-index: 100;\n}\n.for_book_details .book_details_container .book_details_item_3 .bor_suggestions_container .suggestion {\n  padding: 10px;\n}\n.for_book_details .book_details_container .book_details_item_3 .bor_suggestions_container .suggestion .suggestion_item {\n  display: flex;\n  flex-direction: row;\n  margin-bottom: 10px;\n  cursor: pointer;\n}\n.for_book_details .book_details_container .book_details_item_3 .bor_suggestions_container .suggestion .suggestion_item .img_container {\n  width: 10%;\n  padding: 6px;\n}\n.for_book_details .book_details_container .book_details_item_3 .bor_suggestions_container .suggestion .suggestion_item .book_details {\n  display: flex;\n  flex-direction: column;\n  margin-left: 10px;\n}\n.for_book_details .book_details_container .book_details_item_3 .bor_suggestions_container .suggestion .suggestion_item .book_details .name_container {\n  color: #585574;\n  font-size: 12px;\n}\n.for_book_details .book_details_container .book_details_item_3 .bor_suggestions_container .suggestion .suggestion_item .book_details .book_more_info {\n  color: #9b9b9b;\n  display: flex;\n  flex-direction: row;\n  font-size: 11px;\n  margin-top: 5px;\n}\n.for_book_details .book_details_container .book_details_item_4 {\n  display: flex;\n  flex-direction: column;\n  padding: 10px 15px;\n}\n.for_book_details .book_details_container .book_details_item_4 .date_container {\n  display: flex;\n  flex-direction: row;\n}\n.for_book_details .book_details_container .book_details_item_4 .date_container .from_date, .for_book_details .book_details_container .book_details_item_4 .date_container .to_date {\n  display: flex;\n  flex-direction: column;\n  width: 20%;\n  position: relative;\n}\n.for_book_details .book_details_container .book_details_item_4 .date_container .from_date span, .for_book_details .book_details_container .book_details_item_4 .date_container .to_date span {\n  color: #9b9b9b;\n  font-size: 12px;\n}\n.for_book_details .book_details_container .book_details_item_4 .date_container .from_date input, .for_book_details .book_details_container .book_details_item_4 .date_container .to_date input {\n  border-radius: 4px;\n  border: 1px solid #dddddd;\n  padding: 5px;\n  width: 50%;\n}\n.for_book_details .book_details_container .book_details_item_4 .date_container .from_date .fa-calendar, .for_book_details .book_details_container .book_details_item_4 .date_container .to_date .fa-calendar {\n  position: absolute;\n  top: 21px;\n  right: 54%;\n}\n.for_book_details .book_details_container .book_details_item_4 .notify_container {\n  display: flex;\n  flex-direction: row;\n}\n.for_book_details .book_details_container .book_details_item_4 .notify_container .checkbox_container {\n  width: 20%;\n  margin-top: 10px;\n}\n.for_book_details .book_details_container .book_details_item_4 .notify_container .field-checkbox-wrapper .form-checkbox + label {\n  vertical-align: middle;\n  font-size: 12px;\n  display: inline-block;\n}\n.for_book_details .book_details_container .book_details_item_4 .notify_container .field-checkbox-wrapper .form-checkbox + label:after {\n  content: '';\n  width: 16px;\n  height: 16px;\n  border: 2px solid #ccc;\n  border-radius: 2px;\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n.for_book_details .book_details_container .book_details_item_4 .notify_container .field-checkbox-wrapper .form-checkbox:checked + label:after {\n  border: 2px solid #0084f6;\n}\n.for_book_details .book_details_container .book_details_item_4 .notify_container .field-checkbox-wrapper .form-checkbox + label:before {\n  width: 1px;\n  height: 1px;\n  left: 8px;\n  top: 9px;\n  position: absolute;\n  content: '';\n  border-top: 0;\n  border-right: 0;\n  border-left: 2px solid transparent;\n  border-bottom: 2px solid transparent;\n  transform: rotate(-45deg);\n}\n.for_book_details .book_details_container .book_details_item_4 .notify_container .field-checkbox-wrapper .form-checkbox:checked + label:before {\n  border-left: 2px solid #0084f6;\n  border-bottom: 2px solid #0084f6;\n  width: 12px;\n  height: 5px;\n  left: 2px;\n  top: 5px;\n}\n.for_book_details .book_details_container .book_details_item_4 .notify_container .field-checkbox-wrapper .form-checkbox:checked + label {\n  color: #0084f6;\n}\n.for_book_details .book_details_container .book_details_item_5 {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 10px 15px;\n  padding-top: 0px;\n}\n.for_book_details .book_details_container .book_details_item_5 .left_side .back_btn {\n  background: white;\n  border-radius: 4px;\n  border: 1px solid #1283f4;\n  padding: 8px 15px;\n  text-align: center;\n  color: #1283f4;\n}\n.for_book_details .book_details_container .book_details_item_5 .right_side {\n  display: flex;\n  flex-direction: row;\n  width: 15%;\n  justify-content: space-around;\n}\n.for_book_details .book_details_container .book_details_item_5 .right_side .cancel_btn {\n  background: white;\n  border-radius: 4px;\n  border: 1px solid #1283f4;\n  padding: 8px 15px;\n  text-align: center;\n  color: #1283f4;\n}\n.for_book_details .book_details_container .book_details_item_5 .right_side .issue_btn {\n  background: #1283f4;\n  border-radius: 4px;\n  border: 1px solid #1283f4;\n  padding: 8px 15px;\n  text-align: center;\n  color: white;\n  font-weight: 600;\n}\ninput {\n  font-size: 12px;\n}\n.filter-res label {\n  font-size: 14px;\n  font-weight: 600;\n}\n.pagination .first:before {\n  content: \"« \";\n  font-size: 16px;\n  font-weight: 800;\n}\n.pagination .last:after {\n  content: \" »\";\n  font-size: 16px;\n  font-weight: 800;\n}\n.pagination .batch-size {\n  font-size: 16px;\n  font-weight: 800;\n  border-bottom: 1px solid black;\n}\n.pagination li {\n  border-right: 1px solid #ccc;\n  padding: 0 7px;\n  margin: 0;\n  line-height: 10px;\n  font-weight: 800;\n  cursor: pointer;\n}\n.pagination li a {\n  line-height: 10px;\n  font-size: 16px;\n  font-weight: 800;\n  border: none;\n  padding: 0 14px;\n}\n.pagination li:last-child {\n  border-right: 0;\n  padding-right: 0;\n}\n.pagination\n.batch-size\n.bulk-dropdown\n.bulk-dropbtn {\n  background: transparent !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9saWJyYXJ5LW1hbmFnZW1lbnQvaXNzdWUtYm9vay9pc3N1ZS1ib29rLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNFLFlBQVk7RUFDWixrQ0FBbUI7RUFBbkIsMEJBQW1CO0VBQW5CLG1CQUFtQjtBQUVyQjtBQUdBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7QUFBakI7QUFGQTtFQUlJLFlBQVk7RUFDWixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUV2QjtBQVpBO0VBYUksa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxRQUFRO0VBQ1IsWUFBWTtFQUNaLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0FBR3RCO0FBdEJBO0VBdUJJLFlBQVk7QUFHaEI7QUExQkE7RUEyQkksa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxRQUFRO0VBQ1IsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixrQkFBa0I7QUFHdEI7QUFuQ0E7RUFvQ0ksK0JBQStCO0VBQy9CLGVBQWU7RUFDZixpQkFBaUI7QUFHckI7QUFDQTtFQUNFLHNCQUFzQjtBQUV4QjtBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLDRDQUE0QztFQUM1QyxlQUFlO0VBQ2YsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGFBQWE7QUFDZjtBQVpBO0VBYUksYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUd2QjtBQXBCQTtFQW1CTSxVQUFVO0VBQ1YsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFLeEI7QUEzQkE7RUF3QlEsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixlQUFlO0FBT3ZCO0FBakNBO0VBOEJNLFVBQVU7QUFPaEI7QUFyQ0E7RUFnQ1EsZ0NBQWdDO0VBQ2hDLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxjQUFjO0VBQ2QsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBUzNCO0FBbERBO0VBMkNzQix5Q0FBQTtFQUNkLGNBQWM7QUFXdEI7QUF2REE7RUEyQ3NCLHlDQUFBO0VBQ2QsY0FBYztBQVd0QjtBQXZEQTtFQTJDc0IseUNBQUE7RUFDZCxjQUFjO0FBV3RCO0FBdkRBO0VBK0NRLGdDQUFnQztFQUNoQyxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxjQUFjO0VBQ2QsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBWTNCO0FBbkVBO0VBeURzQixjQUFjO0FBY3BDO0FBdkVBO0VBMkRRLHlCQUF5QjtBQWdCakM7QUEzRUE7RUE4RE0sZ0NBQWdDO0FBaUJ0QztBQS9FQTtFQWlFTSxnQ0FBZ0M7QUFrQnRDO0FBbkZBO0VBcUVRLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQiw0Q0FBeUM7RUFDekMsYUFBYTtFQUNiLGtCQUFrQjtBQWtCMUI7QUFoR0E7RUFnRlUsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7QUFvQnhCO0FBeEdBO0VBc0ZZLGVBQWU7RUFDZixXQUFXO0VBQ1gsZUFBZTtBQXNCM0I7QUE5R0E7RUE0RlUsY0FBYztFQUNkLG1CQUFtQjtBQXNCN0I7QUFuSEE7RUFxR0ksYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixnQkFBZ0I7QUFrQnBCO0FBekhBO0VBeUdNLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQW9CdkI7QUFuSUE7RUFrSE0saUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFxQnhCO0FBZkE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQiw0Q0FBNEM7RUFDNUMsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsWUFBWTtFQUNaLGVBQWU7RUFDZixlQUFlO0FBa0JqQjtBQS9CQTtFQWVJLGFBQWE7QUFvQmpCO0FBbkNBO0VBaUJNLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGVBQWU7QUFzQnJCO0FBMUNBO0VBc0JRLFVBQVU7RUFDVixZQUFZO0FBd0JwQjtBQS9DQTtFQTBCUSxhQUFhO0VBQ2Isc0JBQXNCO0FBeUI5QjtBQXBEQTtFQTZCVSxjQUFjO0VBQ2QsZUFBZTtBQTJCekI7QUF6REE7RUFpQ1UsY0FBYztFQUNkLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGVBQWU7QUE0QnpCO0FBcEJBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsMEJBQTBCO0VBQzFCLFVBQVU7RUFDVixlQUFlO0FBdUJqQjtBQXBCQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixVQUFVO0FBdUJaO0FBckJBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsVUFDRjtBQXVCQTtBQXJCQTtFQUNFLFdBQVc7QUF3QmI7QUF6QkE7RUFHSSxlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtBQTBCcEI7QUFyQkE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixlQUFlO0VBQ2YsZ0JBQWdCO0FBd0JsQjtBQTdCQTtFQU9JLFdBQVc7RUFDWCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixlQUFlO0FBMEJuQjtBQXhDQTtFQWdCTSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixVQUFVO0FBNEJoQjtBQS9DQTtFQXNCTSxVQUFVO0FBNkJoQjtBQW5EQTtFQTBCSSxXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsNENBQTRDO0VBQzVDLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLDhCQUE4QjtFQUM5QixtQkFBbUI7QUE2QnZCO0FBaEVBO0VBcUNNLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLFlBQUE7RUFDQSxpQkFBZ0I7RUFDaEIsc0JBQXFCO0VBRXJCLDhCQUFBO0VBQ0Esb0JBQW1CO0VBQ25CLHlCQUF3QjtFQUV4QixRQUFBO0FBNkJOO0FBN0VBO0VBcURNLFVBQVU7QUE0QmhCO0FBakZBO0VBd0RNLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtBQTZCbEI7QUF2RkE7RUE4REksOEJBQThCO0FBNkJsQztBQTNGQTtFQWlFSSxZQUFZO0VBQ1osOEJBQThCO0FBOEJsQztBQXhCQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsMkNBQTJDO0FBMkI3QztBQTlCQTtFQUtJLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsV0FBVztBQTZCZjtBQXBDQTtFQVNNLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZ0NBQWdDO0VBQ2hDLGtCQUFrQjtBQStCeEI7QUEzQ0E7RUFjUSxXQUFXO0VBQ1gsWUFBWTtBQWlDcEI7QUFoREE7RUFrQlEsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGNBQWM7QUFrQ3RCO0FBeERBO0VBd0JVLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixjQUFjO0FBb0N4QjtBQWhFQTtFQStCVSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsY0FBYztBQXFDeEI7QUF4RUE7RUF1Q1EsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsaUJBQWlCO0FBcUN6QjtBQS9FQTtFQTRDVSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsY0FBYztBQXVDeEI7QUF2RkE7RUFtRFUsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGNBQWM7QUF3Q3hCO0FBL0ZBO0VBMkRRLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGVBQWU7RUFDZixjQUNGO0FBdUNOO0FBMUdBO0VBcUVRLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGVBQWU7RUFDZixjQUNGO0FBd0NOO0FBckhBO0VBZ0ZNLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZ0NBQWdDO0VBQ2hDLGtCQUFrQjtBQXlDeEI7QUE1SEE7RUFxRlEsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGNBQWM7QUEyQ3RCO0FBcElBO0VBNEZRLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsVUFBVTtBQTRDbEI7QUExSUE7RUFnR1UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGNBQWM7QUE4Q3hCO0FBbEpBO0VBd0dRLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsVUFBVTtBQThDbEI7QUF4SkE7RUE0R1UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFnRHhCO0FBaEtBO0VBc0hNLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZ0NBQWdDO0VBQ2hDLGtCQUFrQjtBQThDeEI7QUF2S0E7RUE0SFUsWUFBWTtFQUNaLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0I7QUErQzVCO0FBaExBO0VBcUlNLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixjQUFjO0FBK0NwQjtBQXhMQTtFQTZJTSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFVBQVU7QUErQ2hCO0FBOUxBO0VBaUpRLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW9CO0VBQ3BCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBaUQxQjtBQXZNQTtFQXdKVSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixVQUFVO0VBQ1YsMkJBQTJCO0FBbURyQztBQS9NQTtFQStKVSxhQUFhO0VBQ2IsOEJBQThCO0FBb0R4QztBQXBOQTtFQW1LVSxXQUFXO0VBQ1gsWUFBWTtBQXFEdEI7QUF6TkE7RUF1S1UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsVUFBVTtBQXNEcEI7QUFoT0E7RUE2S1UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsVUFBVTtBQXVEcEI7QUF2T0E7RUFtTFUsZUFBZTtBQXdEekI7QUEzT0E7RUFxTFksZUFBZTtFQUNmLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBMEQ5QjtBQXJQQTtFQThMWSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7QUEyRDlCO0FBL1BBO0VBd01VLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixjQUFjO0FBMkR4QjtBQXZRQTtFQStNVSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsY0FBYztBQTREeEI7QUEvUUE7RUF5TlEsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsNENBQTRDO0VBQzVDLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGVBQWU7RUFDZixlQUFlO0VBQ2YsWUFBWTtBQTBEcEI7QUEvUkE7RUF1T1UsYUFBYTtBQTREdkI7QUFuU0E7RUF5T1ksYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsZUFBZTtBQThEM0I7QUExU0E7RUE4T2MsVUFBVTtFQUNWLFlBQVk7QUFnRTFCO0FBL1NBO0VBa1BjLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsaUJBQWlCO0FBaUUvQjtBQXJUQTtFQXNQZ0IsY0FBYztFQUNkLGVBQWU7QUFtRS9CO0FBMVRBO0VBMFBnQixjQUFjO0VBQ2QsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZUFBZTtBQW9FL0I7QUFsVUE7RUF1UU0sYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7QUErRHhCO0FBeFVBO0VBMlFRLGFBQWE7RUFDYixtQkFBbUI7QUFpRTNCO0FBN1VBO0VBOFFVLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLGtCQUFrQjtBQW1FNUI7QUFwVkE7RUFtUlksY0FBYztFQUNkLGVBQWU7QUFxRTNCO0FBelZBO0VBdVJZLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFVBQVU7QUFzRXRCO0FBaFdBO0VBNlJZLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtBQXVFdEI7QUF0V0E7RUFvU1EsYUFBYTtFQUNiLG1CQUFtQjtBQXNFM0I7QUEzV0E7RUF1U1UsVUFBVTtFQUNWLGdCQUFnQjtBQXdFMUI7QUFoWEE7RUEyU1ksc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixxQkFBcUI7QUF5RWpDO0FBdFhBO0VBZ1RZLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxNQUFNO0FBMEVsQjtBQWpZQTtFQTBUWSx5QkFBeUI7QUEyRXJDO0FBcllBO0VBNlRZLFVBQVU7RUFDVixXQUFXO0VBQ1gsU0FBUztFQUNULFFBQVE7RUFDUixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGFBQWE7RUFDYixlQUFlO0VBQ2Ysa0NBQWtDO0VBQ2xDLG9DQUFvQztFQUNwQyx5QkFBeUI7QUE0RXJDO0FBblpBO0VBMFVZLDhCQUE4QjtFQUM5QixnQ0FBZ0M7RUFDaEMsV0FBVztFQUNYLFdBQVc7RUFDWCxTQUFTO0VBQ1QsUUFBUTtBQTZFcEI7QUE1WkE7RUFrVlksY0FBYztBQThFMUI7QUFoYUE7RUF5Vk0sYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQTJFdEI7QUF4YUE7RUFnV1UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixjQUFjO0FBNEV4QjtBQWpiQTtFQXlXUSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFVBQVU7RUFDViw2QkFBNkI7QUE0RXJDO0FBeGJBO0VBOFdVLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsY0FBYztBQThFeEI7QUFqY0E7RUFzWFUsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZ0JBQWdCO0FBK0UxQjtBQXhFQTtFQUNFLGVBQWU7QUEyRWpCO0FBeEVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQTJFbEI7QUFwRUE7RUFHTSxhQUFhO0VBQ2IsZUFBZTtFQUNmLGdCQUFnQjtBQXFFdEI7QUExRUE7RUFXTSxhQUFhO0VBQ2IsZUFBZTtFQUNmLGdCQUFnQjtBQW1FdEI7QUFoRkE7RUFrQkksZUFBZTtFQUNmLGdCQUFnQjtFQUNoQiw4QkFBOEI7QUFrRWxDO0FBdEZBO0VBd0JJLDRCQUE0QjtFQUM1QixjQUFjO0VBQ2QsU0FBUztFQUNULGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsZUFBZTtBQWtFbkI7QUEvRkE7RUFnQ00saUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGVBQWU7QUFtRXJCO0FBOURBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQWlFbEI7QUE1REE7Ozs7RUFJTSxrQ0FBa0M7QUErRHhDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9saWJyYXJ5LW1hbmFnZW1lbnQvaXNzdWUtYm9vay9pc3N1ZS1ib29rLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW5fY29udGFpbmVye1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IHN0cmV0Y2g7XG5cbn1cbi8vICBTRUFSQ0ggQkFSIEFORCBEUk9QRE9XTlxuXG4uc2VhcmNoX2Jhcl9jb250YWluZXJ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWxlZnQ6IDIlO1xuICAuc2VhcmNoX2JveHtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgd2lkdGg6IDQyMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkY2RjZGM7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHBhZGRpbmctbGVmdDogMzJweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxOHB4O1xuICB9XG4gIC5mYS1zZWFyY2h7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDFweDtcbiAgICB0b3A6IDFweDtcbiAgICBwYWRkaW5nOiA5cHg7XG4gICAgY29sb3I6ICM5YjliOWI7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB9XG5cbiAgLmZhLXNlYXJjaDpob3ZlcntcbiAgICBjb2xvcjogYmxhY2s7XG4gIH1cblxuICAuZmEtc29ydC1kZXNje1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAzODVweDtcbiAgICB0b3A6IDhweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB9XG5cbiAgc3BhbntcbiAgICBmb250LWZhbWlseTogJ05hbnVtIFBlbiBTY3JpcHQnO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgfVxufVxuXG46Om5nLWRlZXAgLmJzLWRhdGVwaWNrZXItY29udGFpbmVyLCAuYnMtZGF0ZXJhbmdlcGlja2VyLWNvbnRhaW5lcntcbiAgbGVmdDogMTYwcHggIWltcG9ydGFudDsgXG59XG5cblxuLnNlYXJjaF9ib3hfZmlsdGVyX2NvbnRhaW5lcntcbiAgbWFyZ2luLWxlZnQ6IDIlO1xuICB3aWR0aDogNDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMjcpO1xuICBtYXJnaW4tdG9wOiA0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDE2cHggMjZweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAxMDAwO1xuICAuZmlsdGVyX2l0ZW17XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIC5sYWJlbF9jb250YWluZXJ7XG4gICAgICB3aWR0aDogMjUlO1xuICAgICAgY29sb3I6ICMzYTNhM2E7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgc3BhbntcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDVweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgfVxuICAgIH1cbiAgICAuaW5wdXRfY29udGFpbmVye1xuICAgICAgd2lkdGg6IDcwJTtcbiAgICAgIGlucHV0e1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzliOWI5YjtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDNweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBjb2xvcjogIzNhM2EzYTtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMS4zNjtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgIH1cbiAgICAgIDo6cGxhY2Vob2xkZXIgeyAvKiBDaHJvbWUsIEZpcmVmb3gsIE9wZXJhLCBTYWZhcmkgMTAuMSsgKi9cbiAgICAgICAgY29sb3I6ICNjZmNmY2Y7XG4gICAgICB9XG4gICAgICBzZWxlY3R7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjOWI5YjliO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogM3B4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGNvbG9yOiAjM2EzYTNhO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjM2O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgfVxuICAgICAgc2VsZWN0IG9wdGlvbiB7IGNvbG9yOiAjM2EzYTNhOyB9XG4gICAgICBvcHRpb246Zmlyc3QtY2hpbGQge1xuICAgICAgICBjb2xvcjogI2NmY2ZjZiAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgICAgaW5wdXQ6Zm9jdXMge1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMxMjgzZjQ7XG4gICAgICB9XG4gICAgICBzZWxlY3Q6Zm9jdXMge1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMxMjgzZjQ7XG4gICAgICB9XG5cbiAgICAgIC5ib29rX3N1Z2dlc3Rpb25fY29udGFpbmVye1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB3aWR0aDogMTklO1xuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDNweCAxNXB4IHJnYmEoMCwwLDAsMC4xNik7XG4gICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICAgICAgLmJvb2tfc3VnZ2VzdGlvbl9pdGVte1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgICAgY29sb3I6ICM1ODU1NzQ7XG4gICAgICAgICAgLm5hbWVfY29udGFpbmVye1xuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5ib29rX3N1Z2dlc3Rpb25faXRlbTpob3ZlcntcbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMTI4M2Y0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxuICAuYWN0aW9uX2J0bl9jb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgLnJlc2V0X2J0bntcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgIHBhZGRpbmc6IDZweCAxNXB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgIzU4NTU3NDtcbiAgICAgIGNvbG9yOiAjNTg1NTc0O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgfVxuICAgIC5zZWFyY2hfYnRue1xuICAgICAgcGFkZGluZzogNnB4IDE1cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjMTI4M2Y0O1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgYmFja2dyb3VuZDogIzEyODNmNDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gIH1cblxufVxuXG4uc3VnZ2VzdGlvbnNfY29udGFpbmVye1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgbWluLWhlaWdodDogMjAwcHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIGJveC1zaGFkb3c6IDAgM3B4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMjcpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tbGVmdDogMiU7XG4gIHdpZHRoOiA0MjBweDtcbiAgbWFyZ2luLXRvcDogNHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIC5zdWdnZXN0aW9ue1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgLnN1Z2dlc3Rpb25faXRlbXtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIC5pbWdfY29udGFpbmVye1xuICAgICAgICB3aWR0aDogMTAlO1xuICAgICAgICBwYWRkaW5nOiA2cHg7XG4gICAgICB9XG4gICAgICAuYm9va19kZXRhaWxze1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAubmFtZV9jb250YWluZXJ7XG4gICAgICAgICAgY29sb3I6ICM1ODU1NzQ7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICB9XG4gICAgICAgIC5ib29rX21vcmVfaW5mb3tcbiAgICAgICAgICBjb2xvcjogIzliOWI5YjtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5cbmhyIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2VlZTtcbiAgd2lkdGg6IDk2JTtcbiAgbWFyZ2luLWxlZnQ6IDIlO1xufVxuXG4ud2lkZ2V0RGF0ZXBpY2tlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgd2lkdGg6IDFweDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBvcGFjaXR5OiAwO1xufVxuLmJzRGF0ZXBpY2tlciB7XG4gIHBhZGRpbmc6IDVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogODBweFxufVxuXG4uaWxsdXN0YXJ0aW9uX2NvbnRhaW5lcntcbiAgd2lkdGg6IDEwMCU7XG4gIGltZ3tcbiAgICBtYXgtaGVpZ2h0OiA3MCU7XG4gICAgbWF4LXdpZHRoOiAyNyU7XG4gICAgbWFyZ2luLWxlZnQ6IDMwJTtcbiAgfVxufVxuXG4vLyAgU0VBUkNIIEZJTFRFUlxuLnNlYXJjaF9yZXN1bHRfY29udGFpbmVye1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogOTYlO1xuICBtYXJnaW4tbGVmdDogMiU7XG4gIG1hcmdpbi1yaWdodDogMiU7XG4gIC5oZWFkZXJfY29udGFpbmVye1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAuaGVhZGVyX2l0ZW0sIC5oZWFkZXJfaXRlbTF7XG4gICAgICBjb2xvcjogIzk4OThhMztcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgd2lkdGg6IDEwJTtcbiAgICB9XG4gICAgLmhlYWRlcl9pdGVtMXtcbiAgICAgIHdpZHRoOiAxNiU7XG4gICAgfVxuICB9XG4gIC52YWx1ZV9jb250YWluZXJ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgIGJveC1zaGFkb3c6IDAgM3B4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCAjOWI5YjliO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgLnZhbHVlX2l0ZW0sIC52YWx1ZV9pdGVtMXtcbiAgICAgIGNvbG9yOiAjNTg1NTc0O1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIHdpZHRoOiAxMCU7XG4gICAgICAvKiBGaXJlZm94ICovXG4gICAgICBkaXNwbGF5Oi1tb3otYm94O1xuICAgICAgLW1vei1ib3gtYWxpZ246Y2VudGVyO1xuXG4gICAgICAvKiBTYWZhcmksIE9wZXJhLCBhbmQgQ2hyb21lICovXG4gICAgICBkaXNwbGF5Oi13ZWJraXQtYm94O1xuICAgICAgLXdlYmtpdC1ib3gtYWxpZ246Y2VudGVyO1xuXG4gICAgICAvKiBXM0MgKi9cbiAgICAgIC8vIGRpc3BsYXk6Ym94O1xuICAgICAgLy8gYm94LWFsaWduOmNlbnRlcjtcbiAgICB9XG4gICAgLnZhbHVlX2l0ZW0xe1xuICAgICAgd2lkdGg6IDE2JTtcbiAgICB9XG4gICAgLmFjdGlvbl9pbWd7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB3aWR0aDogMjVweDtcbiAgICAgIGhlaWdodDogMjVweDtcbiAgICB9XG4gIH1cbiAgLmJvcmRlcl9kaXZ7XG4gICAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCAjMDRiYjExO1xuICB9XG4gIC5ub25fYm9yZGVyX2RpdntcbiAgICBoZWlnaHQ6IDM4cHg7XG4gICAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCAjOWI5YjliO1xuICB9XG59XG5cblxuLy8gRk9SIEJPT0sgYm9va19kZXRhaWxzXG4uZm9yX2Jvb2tfZGV0YWlsc3tcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYm94LXNoYWRvdzogMCAzcHggNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgLmJvb2tfZGV0YWlsc19jb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC5ib29rX2RldGFpbHNfaXRlbV8xe1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0RERERERDtcbiAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgICAgIC5ib29rX2ljb257XG4gICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICB9XG4gICAgICAuYm9va19uYW1lX2NvbnRhaW5lcntcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgIG1pbi13aWR0aDogMjAlO1xuICAgICAgICAudGl0bGV7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgY29sb3I6ICM5YjliOWI7XG4gICAgICAgIH1cbiAgICAgICAgLmJvb2tfbmFtZXtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICBjb2xvcjogIzU4NTU3NDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLmJvb2tfaXNibntcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgd2lkdGg6IDIwJTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgICAgIC50aXRsZXtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICBjb2xvcjogIzliOWI5YjtcbiAgICAgICAgfVxuICAgICAgICAuaXNibl9udW1iZXJ7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgY29sb3I6ICM1ODU1NzQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5hdmFpbGFibGVfYnRue1xuICAgICAgICBiYWNrZ3JvdW5kOiAjY2RmZmQxO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDRiYjExO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIGNvbG9yOiAjNDM0MzQzO1xuICAgICAgICBwYWRkaW5nOiAxcHggMTBweDtcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGN1cnNvcjogbm9ybWFsXG4gICAgICB9XG4gICAgICAubm90X2F2YWlsYWJsZV9idG57XG4gICAgICAgIGJhY2tncm91bmQ6ICNmOWY5Zjk7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiMGIwYjA7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgY29sb3I6ICNiMGIwYjA7XG4gICAgICAgIHBhZGRpbmc6IDFweCAxMHB4O1xuICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgY3Vyc29yOiBub3JtYWxcbiAgICAgIH1cbiAgICB9XG4gICAgLmJvb2tfZGV0YWlsc19pdGVtXzJ7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjREREREREO1xuICAgICAgcGFkZGluZzogMTBweCAxNXB4O1xuICAgICAgLnRpdGxle1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgY29sb3I6ICM5YjliOWI7XG4gICAgICB9XG4gICAgICAuYm9va19tb3JlX2luZm9faXRlbV8xe1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB3aWR0aDogMjAlO1xuICAgICAgICAubW9yZV9pbmZvX3ZhbHVle1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgIGNvbG9yOiAjNTg1NTc0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAuYm9va19tb3JlX2luZm9faXRlbV8ye1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB3aWR0aDogMTUlO1xuICAgICAgICAubW9yZV9pbmZvX3ZhbHVle1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgIGNvbG9yOiAjNTg1NTc0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmJvb2tfZGV0YWlsc19pdGVtXzN7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjREREREREO1xuICAgICAgcGFkZGluZzogMTBweCAxNXB4O1xuICAgICAgLnNlYXJjaF9ib3hfY29udGFpbmVye1xuICAgICAgICAuc2VhcmNoX2JveHtcbiAgICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICAgICAgd2lkdGg6IDMxMHB4O1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkY2RjZGM7XG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgIH1cbiAgICB9XG4gICAgLmJvb2tfaW5faGFuZF9jb250YWluZXJ7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgd2lkdGg6IDM0JTtcbiAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgY29sb3I6ICM1ODU1NzQ7XG4gICAgfVxuXG4gICAgLmJvb2tzX2luX2hhbmRfZGV0YWlsc19jb250YWluZXJ7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAuYm9va3NfaW5faGFuZF9kZXRhaWxzX2l0ZW17XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGJhY2tncm91bmQ6ICAjZjJmOWZmO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZDRlYWZmO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgLml0ZW1fY29udGFpbmVye1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgIHdpZHRoOiA5NCU7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICB9XG4gICAgICAgIC5hY3Rpb25fY29udGFpbmVye1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZDRlYWZmO1xuICAgICAgICB9XG4gICAgICAgIC5ib29rX2ljb257XG4gICAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICB9XG4gICAgICAgIC5ib29rX25hbWVfY29udGFpbmVye1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgICAgIHdpZHRoOiAzNSU7XG4gICAgICAgIH1cbiAgICAgICAgLmlzc3VlX2RhdGUsIC5yZXR1cm5fZGF0ZXtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgICB3aWR0aDogMjAlO1xuICAgICAgICB9XG4gICAgICAgIC5ib29rX3N0YXR1c19jb250YWluZXJ7XG4gICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgIC5pc3N1ZWRfYnRue1xuICAgICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2RmZWZmZjtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMxMjgzZjQ7XG4gICAgICAgICAgICBwYWRkaW5nOiAzcHggOHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm92ZXJkdWVfYnRue1xuICAgICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZGZjYTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZjY2MDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAzcHggOHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLnRpdGxle1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgIGNvbG9yOiAjOWI5YjliO1xuICAgICAgICB9XG4gICAgICAgIC5ib29rX25hbWV7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgY29sb3I6ICM1ODU1NzQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAgIC5ib3Jfc3VnZ2VzdGlvbnNfY29udGFpbmVye1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgbWluLWhlaWdodDogMjAwcHg7XG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMjcpO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB3aWR0aDogMzEwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB6LWluZGV4OiAxMDA7XG4gICAgICAgIC5zdWdnZXN0aW9ue1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgLnN1Z2dlc3Rpb25faXRlbXtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIC5pbWdfY29udGFpbmVye1xuICAgICAgICAgICAgICB3aWR0aDogMTAlO1xuICAgICAgICAgICAgICBwYWRkaW5nOiA2cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYm9va19kZXRhaWxze1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICAgICAgLm5hbWVfY29udGFpbmVye1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjNTg1NTc0O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuYm9va19tb3JlX2luZm97XG4gICAgICAgICAgICAgICAgY29sb3I6ICM5YjliOWI7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuYm9va19kZXRhaWxzX2l0ZW1fNHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgcGFkZGluZzogMTBweCAxNXB4O1xuICAgICAgLmRhdGVfY29udGFpbmVye1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAuZnJvbV9kYXRlLCAudG9fZGF0ZXtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgd2lkdGg6IDIwJTtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgc3BhbntcbiAgICAgICAgICAgIGNvbG9yOiAjOWI5YjliO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBpbnB1dHtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGRkZGQ7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZmEtY2FsZW5kYXJ7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDIxcHg7XG4gICAgICAgICAgICByaWdodDogNTQlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLm5vdGlmeV9jb250YWluZXJ7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIC5jaGVja2JveF9jb250YWluZXJ7XG4gICAgICAgICAgd2lkdGg6IDIwJTtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5maWVsZC1jaGVja2JveC13cmFwcGVyIC5mb3JtLWNoZWNrYm94K2xhYmVsIHtcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIH1cbiAgICAgICAgLmZpZWxkLWNoZWNrYm94LXdyYXBwZXIgLmZvcm0tY2hlY2tib3grbGFiZWw6YWZ0ZXIge1xuICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICB3aWR0aDogMTZweDtcbiAgICAgICAgICAgIGhlaWdodDogMTZweDtcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNjY2M7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICB9XG4gICAgICAgIC5maWVsZC1jaGVja2JveC13cmFwcGVyIC5mb3JtLWNoZWNrYm94OmNoZWNrZWQrbGFiZWw6YWZ0ZXIge1xuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzAwODRmNjtcbiAgICAgICAgfVxuICAgICAgICAuZmllbGQtY2hlY2tib3gtd3JhcHBlciAuZm9ybS1jaGVja2JveCtsYWJlbDpiZWZvcmUge1xuICAgICAgICAgICAgd2lkdGg6IDFweDtcbiAgICAgICAgICAgIGhlaWdodDogMXB4O1xuICAgICAgICAgICAgbGVmdDogOHB4O1xuICAgICAgICAgICAgdG9wOiA5cHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDA7XG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IDA7XG4gICAgICAgICAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgICAgfVxuICAgICAgICAuZmllbGQtY2hlY2tib3gtd3JhcHBlciAuZm9ybS1jaGVja2JveDpjaGVja2VkK2xhYmVsOmJlZm9yZSB7XG4gICAgICAgICAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICMwMDg0ZjY7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzAwODRmNjtcbiAgICAgICAgICAgIHdpZHRoOiAxMnB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA1cHg7XG4gICAgICAgICAgICBsZWZ0OiAycHg7XG4gICAgICAgICAgICB0b3A6IDVweDtcbiAgICAgICAgfVxuICAgICAgICAuZmllbGQtY2hlY2tib3gtd3JhcHBlciAuZm9ybS1jaGVja2JveDpjaGVja2VkK2xhYmVsIHtcbiAgICAgICAgICAgIGNvbG9yOiAjMDA4NGY2O1xuICAgICAgICB9XG5cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuYm9va19kZXRhaWxzX2l0ZW1fNXtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgcGFkZGluZzogMTBweCAxNXB4O1xuICAgICAgcGFkZGluZy10b3A6IDBweDtcbiAgICAgIC5sZWZ0X3NpZGV7XG4gICAgICAgIC5iYWNrX2J0bntcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzEyODNmNDtcbiAgICAgICAgICBwYWRkaW5nOiA4cHggMTVweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgY29sb3I6ICMxMjgzZjQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5yaWdodF9zaWRle1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICB3aWR0aDogMTUlO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgLmNhbmNlbF9idG57XG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMxMjgzZjQ7XG4gICAgICAgICAgcGFkZGluZzogOHB4IDE1cHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGNvbG9yOiAjMTI4M2Y0O1xuICAgICAgICB9XG4gICAgICAgIC5pc3N1ZV9idG57XG4gICAgICAgICAgYmFja2dyb3VuZDogIzEyODNmNDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzEyODNmNDtcbiAgICAgICAgICBwYWRkaW5nOiA4cHggMTVweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuaW5wdXR7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmZpbHRlci1yZXMgbGFiZWwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5maWx0ZXItcmVzLnBhZ2luYXRpb24ge1xuICAvLyBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4ucGFnaW5hdGlvbiB7XG4gIC5maXJzdCB7XG4gICAgJjpiZWZvcmUge1xuICAgICAgY29udGVudDogXCLCqyBcIjtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgfVxuICB9XG5cbiAgLmxhc3Qge1xuICAgICY6YWZ0ZXIge1xuICAgICAgY29udGVudDogXCIgwrtcIjtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgfVxuICB9XG5cbiAgLmJhdGNoLXNpemUge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbiAgfVxuXG4gIGxpIHtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjY2NjO1xuICAgIHBhZGRpbmc6IDAgN3B4O1xuICAgIG1hcmdpbjogMDtcbiAgICBsaW5lLWhlaWdodDogMTBweDtcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgIGEge1xuICAgICAgbGluZS1oZWlnaHQ6IDEwcHg7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgcGFkZGluZzogMCAxNHB4O1xuICAgIH1cbiAgfVxufVxuXG4ucGFnaW5hdGlvbiBsaTpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLXJpZ2h0OiAwO1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xufVxuXG5cblxuLnBhZ2luYXRpb25cbiAuYmF0Y2gtc2l6ZVxuICAuYnVsay1kcm9wZG93blxuICAgLmJ1bGstZHJvcGJ0bntcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/components/library-management/issue-book/issue-book.component.ts":
    /*!**********************************************************************************!*\
      !*** ./src/app/components/library-management/issue-book/issue-book.component.ts ***!
      \**********************************************************************************/

    /*! exports provided: IssueBookComponent */

    /***/
    function srcAppComponentsLibraryManagementIssueBookIssueBookComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IssueBookComponent", function () {
        return IssueBookComponent;
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


      var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! moment */
      "./node_modules/moment/moment.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../services/authenticator.service */
      "./src/app/services/authenticator.service.ts");
      /* harmony import */


      var _services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../services/common-service */
      "./src/app/services/common-service.ts");
      /* harmony import */


      var _services_library_add_add_book_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../services/library/add/add-book.service */
      "./src/app/services/library/add/add-book.service.ts");
      /* harmony import */


      var _services_library_issue_issue_book_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../services/library/issue/issue-book.service */
      "./src/app/services/library/issue/issue-book.service.ts");

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

      var IssueBookComponent =
      /** @class */
      function () {
        var IssueBookComponent = /*#__PURE__*/function () {
          function IssueBookComponent(router, auth, commonService, appC, addBookService, issueBookService) {
            _classCallCheck(this, IssueBookComponent);

            this.router = router;
            this.auth = auth;
            this.commonService = commonService;
            this.appC = appC;
            this.addBookService = addBookService;
            this.issueBookService = issueBookService;
            this.filter = false;
            this.searchResult = false;
            this.suggestion = false;
            this.bookSuggestion = false;
            this.borSuggestions = false;
            this.multiClickDisabled = false;
            this.hoverTitle = "";
            this.hoverTitleAuthor = "";
            this.searchTitle = "";
            this.searchCategoryId = '-1';
            this.searchSubcategoryId = '-1';
            this.searchSubjectId = '-1';
            this.searchPublicationId = '-1';
            this.searchAuthorId = '-1';
            this.searchLangId = '-1';
            this.booksInHandStatus = false;
            this.bookInHand = 0;
            this.bookSuggestionForTitle = false; // FOR PAGINATION

            this.pageIndex = 1;
            this.displayBatchSize = 20;
            this.totalCount = 0;
            this.sizeArr = [20, 50, 100, 150, 200, 500];
          }

          _createClass(IssueBookComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.tempFromDate = moment__WEBPACK_IMPORTED_MODULE_2__(new Date()).format("DD MMM YYYY");
              this.getAllMasterData();
              this.getInstituteData();
            }
          }, {
            key: "getInstituteData",
            value: function getInstituteData() {
              var _this5 = this;

              this.auth.showLoader();
              this.issueBookService.getInstituteSettingFromServer().subscribe(function (response) {
                _this5.auth.hideLoader();

                var res;
                res = response;
                _this5.numberOfLateDaysWithoutFine = res.lib_issue_for_days;
                console.log(_this5.numberOfLateDaysWithoutFine);
                _this5.tempToDate = moment__WEBPACK_IMPORTED_MODULE_2__(new Date()).add(_this5.numberOfLateDaysWithoutFine, 'days').format("DD MMM YYYY");
              }, function (errorResponse) {
                _this5.auth.hideLoader();

                console.log(errorResponse);
              });
            }
          }, {
            key: "getAllMasterData",
            value: function getAllMasterData() {
              var _this6 = this;

              this.auth.showLoader();
              this.addBookService.getAllMasterData().subscribe(function (response) {
                _this6.auth.hideLoader();

                var res;
                res = response;
                console.log(response);
                var tempCatList = res.response.categories;
                _this6.categoryList = res.response.categories;
                _this6.subjectList = res.response.subjects;
                _this6.publicationList = res.response.publications;
                _this6.authorList = res.response.authors;
                _this6.languageList = res.response.languages;
              }, function (errorResponse) {
                _this6.auth.hideLoader();

                console.log(errorResponse);
              });
            }
          }, {
            key: "getSubCategory",
            value: function getSubCategory(ev) {
              var _this7 = this;

              this.auth.showLoader();
              this.addBookService.getSubCategories(ev).subscribe(function (response) {
                _this7.auth.hideLoader();

                var res;
                res = response;
                console.log(response);
                _this7.subcategoryList = res.response;
              }, function (errorResponse) {
                _this7.auth.hideLoader();

                console.log(errorResponse);
              });
            }
          }, {
            key: "searchInBookList",
            value: function searchInBookList(search_string) {
              var _this8 = this;

              this.auth.showLoader();
              this.issueBookService.getSearchedBooks(this.searchTitle).subscribe(function (response) {
                var res;
                res = response;

                _this8.auth.hideLoader();

                if (res.response.length > 0) {
                  _this8.bookSuggestionForTitle = true;
                  _this8.bookSuggestionListForTitle = res.response;
                } else {
                  _this8.bookSuggestionForTitle = false;
                }
              });
            }
          }, {
            key: "closeBookTitleSuggestion",
            value: function closeBookTitleSuggestion() {
              this.bookSuggestionForTitle = false;
            }
          }, {
            key: "selectBookForAdvanceSearch",
            value: function selectBookForAdvanceSearch(title) {
              this.searchTitle = title;
              this.bookSuggestionForTitle = false;
            }
          }, {
            key: "searchInList",
            value: function searchInList(search_string) {
              if (search_string.which <= 90 && search_string.which >= 48 || search_string.which == 8 || search_string.which == 13) {
                this.filter = false;
                this.suggestionList = [];

                if (this.searchInput != '') {
                  this.getSearchData();
                }

                if (search_string.which == 13) {
                  this.showSearchResult();
                }
              }

              if (this.searchInput == '' || this.searchInput == null) {
                this.suggestion = false;
                this.filter = false;
              }
            }
          }, {
            key: "showFilter",
            value: function showFilter() {
              if (this.filter) {
                this.filter = false;
                return;
              } else {
                this.filter = true;
                this.suggestion = false;
                return;
              }
            }
          }, {
            key: "searchBorrower",
            value: function searchBorrower(search_string) {
              if (search_string.which <= 90 && search_string.which >= 48 || search_string.which == 8) {
                this.selectedBorrowerId = "";
                this.getBorrowerData();
              }

              if (this.borrower.length == 0 || this.borrower == '' || this.borrower == null) {
                this.borSuggestions = false;
              }
            }
          }, {
            key: "getBorrowerData",
            value: function getBorrowerData() {
              var _this9 = this;

              this.issueBookService.getBorrowerData(this.borrower).subscribe(function (response) {
                _this9.auth.hideLoader();

                var res;
                res = response;

                if (res.response != null && res.response.length != 0) {
                  console.log(response);
                  _this9.borSuggestions = true;
                  _this9.borrowerSearchData = res.response;
                } else {
                  if (res.errorResponse[0].errorCode == 700) {
                    _this9.messageHandler('error', 'Book alredy exists', '');
                  }
                }
              });
            }
          }, {
            key: "showSearchResult",
            value: function showSearchResult() {
              this.bookSuggestion = false;
              this.searchResult = true;
            }
          }, {
            key: "getSearchData",
            value: function getSearchData() {
              var _this10 = this;

              this.auth.showLoader();
              this.issueBookService.getSearchedBooks(this.searchInput).subscribe(function (response) {
                var res;
                res = response;

                _this10.auth.hideLoader();

                if (res.response.length > 0) {
                  _this10.suggestion = true;
                  _this10.suggestionList = res.response;
                } else {
                  _this10.suggestion = false;
                } // this.authorSuggestionList = res.response

              });
            }
          }, {
            key: "advanceSearch",
            value: function advanceSearch() {
              var _this11 = this;

              this.filter = false;
              this.suggestion = false;
              var obj = {
                "by": [{
                  "column": "title",
                  "value": this.searchTitle
                }, {
                  "column": "category_id",
                  "value": this.searchCategoryId
                }, {
                  "column": "sub_category_id",
                  "value": this.searchSubcategoryId
                }, {
                  "column": "subject_id",
                  "value": this.searchSubjectId
                }, {
                  "column": "publication_id",
                  "value": this.searchPublicationId
                }, {
                  "column": "language_id",
                  "value": this.searchLangId
                }, {
                  "column": "author_id",
                  "value": this.searchAuthorId
                }],
                // "sort": [
                //   {
                //     "column": "updated",
                //     "assending" : false
                //   }
                // ],
                "pageNo": this.pageIndex,
                "noOfRecords": this.displayBatchSize
              }; // console.log(obj);

              this.auth.showLoader();
              this.issueBookService.getBookFilterData(obj).subscribe(function (response) {
                _this11.auth.hideLoader();

                var res;
                res = response;
                _this11.bookSearchData = [];
                _this11.totalCount = 0;
                _this11.searchResult = true;

                if (res.response.results.length > 0) {
                  console.log(response);
                  _this11.bookSearchData = res.response.results;

                  _this11.bookSearchData.forEach(function (element) {
                    element.authorNameData = Array.prototype.map.call(element.authorObjects, function (author) {
                      return author.author_name;
                    }).toString();
                  });

                  _this11.totalCount = res.response.totalRecords;
                  _this11.searchResult = true;
                } else {
                  _this11.messageHandler('info', 'No data found', ''); // if(res.errorResponse[0].errorCode == 700){
                  //   this.messageHandler('error', 'No data found', '');
                  // }

                }
              });
            }
          }, {
            key: "resetFilter",
            value: function resetFilter() {
              this.searchTitle = "";
              this.searchCategoryId = "-1";
              this.searchSubcategoryId = "-1";
              this.searchSubjectId = "-1";
              this.searchPublicationId = "-1";
              this.searchLangId = "-1";
              this.searchAuthorId = "-1";
            }
          }, {
            key: "selectBookForIssue",
            value: function selectBookForIssue(book_id) {
              var _this12 = this;

              this.suggestion = false;
              this.auth.showLoader();
              this.issueBookService.getBookDetails(book_id).subscribe(function (response) {
                var res;
                res = response;

                if (res.response != null) {
                  console.log(response);
                  _this12.searchResult = true;
                  _this12.bookSearchData = res.response.results;

                  _this12.bookSearchData.forEach(function (element) {
                    element.authorNameData = Array.prototype.map.call(element.authorObjects, function (author) {
                      return author.author_name;
                    }).toString();
                  });

                  _this12.auth.hideLoader();
                } else {
                  if (res.errorResponse[0].errorCode == 700) {
                    _this12.messageHandler('error', 'Book alredy exists', '');
                  }

                  _this12.auth.hideLoader();
                }
              });
            }
          }, {
            key: "selectStudent",
            value: function selectStudent(borrower_details) {
              this.borrower = borrower_details.student_name;
              this.selectedBorrowerId = borrower_details.student_id;
              this.borSuggestions = false;
              this.getBooksStatusForStudent();
            }
          }, {
            key: "getBooksStatusForStudent",
            value: function getBooksStatusForStudent() {
              var _this13 = this;

              this.issueBookService.getBooksStatusForStudent(this.selectedBorrowerId).subscribe(function (response) {
                _this13.auth.hideLoader();

                var res;
                res = response;

                if (res.response != null) {
                  console.log(response);
                  _this13.booksInHandStatus = true;
                  _this13.bookInHand = res.response.length;
                  _this13.booksInHandDetails = res.response;
                } else {
                  _this13.messageHandler('error', 'Internal server error', '');
                }
              });
            }
          }, {
            key: "selectBookFromDate",
            value: function selectBookFromDate() {
              var fromDateNotGreaterThanToday = this.graterThanToday(this.bookFromDate);

              if (fromDateNotGreaterThanToday) {
                this.tempFromDate = moment__WEBPACK_IMPORTED_MODULE_2__(this.bookFromDate).format("DD MMM YYYY");
                this.tempToDate = moment__WEBPACK_IMPORTED_MODULE_2__(this.bookFromDate).add(this.numberOfLateDaysWithoutFine, 'days').format("DD MMM YYYY");
              } else {
                this.messageHandler('error', 'From date cannot be future date', '');
                return;
              }

              var check = this.dateGreaterThanCheck(this.bookFromDate, this.bookToDate);

              if (check) {
                this.tempFromDate = moment__WEBPACK_IMPORTED_MODULE_2__(this.bookFromDate).format("DD MMM YYYY");
              } else {
                this.messageHandler('error', 'From date can not be greater than To date', '');
                this.bookFromDate = moment__WEBPACK_IMPORTED_MODULE_2__(this.tempFromDate).format("DD MMM YYYY");
                return;
              }
            }
          }, {
            key: "selectBookToDate",
            value: function selectBookToDate() {
              var check = this.dateGreaterThanCheck(this.bookFromDate, this.bookToDate);

              if (check) {
                this.tempToDate = moment__WEBPACK_IMPORTED_MODULE_2__(this.bookToDate).format("DD MMM YYYY");
              } else {
                this.messageHandler('error', 'To date must be greater than From date', '');
                this.bookToDate = moment__WEBPACK_IMPORTED_MODULE_2__(this.tempToDate).format("DD MMM YYYY");
                return;
              }
            }
          }, {
            key: "graterThanToday",
            value: function graterThanToday(givenDate) {
              var currentDate = new Date();
              givenDate = new Date(givenDate);

              if (givenDate > currentDate) {
                return false;
              } else {
                return true;
              }
            }
          }, {
            key: "dateGreaterThanCheck",
            value: function dateGreaterThanCheck(from_date, to_date) {
              from_date = new Date(from_date);
              to_date = new Date(to_date);
              var currentDate = new Date();

              if (from_date > to_date) {
                return false;
              } else if (from_date > currentDate) {
                return false;
              } else {
                return true;
              }
            }
          }, {
            key: "issueBook",
            value: function issueBook() {
              var _this14 = this;

              if (this.selectedBorrowerId == "" || this.selectedBorrowerId == null) {
                this.messageHandler('error', 'Please enter borrower name', '');
              } else {
                var obj = {
                  "book_id": this.bookDataForIssue.book_id,
                  "issued_on": moment__WEBPACK_IMPORTED_MODULE_2__(this.tempFromDate).unix() * 1000,
                  "to_return_on_date": moment__WEBPACK_IMPORTED_MODULE_2__(this.tempToDate).unix() * 1000,
                  "issued_to": this.selectedBorrowerId
                };
                console.log(obj);
                this.auth.showLoader();
                this.multiClickDisabled = true;
                this.issueBookService.issueBook(obj).subscribe(function (response) {
                  _this14.auth.hideLoader();

                  _this14.multiClickDisabled = false;
                  var res;
                  res = response;

                  if (res.response != null) {
                    console.log(response);

                    _this14.messageHandler('success', 'Book issued successfully', '');

                    _this14.clearIssueBookRecord();

                    _this14.searchResult = false;
                    _this14.bookSuggestion = false;
                    _this14.filter = false;
                    _this14.searchInput = "";
                  } else if (res.errorResponse[0].errorCode == 2000) {
                    _this14.messageHandler('error', 'No book available in stock', '');
                  } else {
                    _this14.messageHandler('error', 'Internal server error', '');
                  }
                });
              }
            }
          }, {
            key: "clearIssueBookRecord",
            value: function clearIssueBookRecord() {
              this.selectedBorrowerId = "";
              this.tempFromDate = moment__WEBPACK_IMPORTED_MODULE_2__(new Date()).format("DD MMM YYYY");
              this.tempToDate = moment__WEBPACK_IMPORTED_MODULE_2__(new Date()).format("DD MMM YYYY");
              this.bookFromDate = moment__WEBPACK_IMPORTED_MODULE_2__(new Date()).format("DD MMM YYYY");
              this.bookToDate = moment__WEBPACK_IMPORTED_MODULE_2__(new Date()).format("DD MMM YYYY");
              this.booksInHandStatus = false;
              this.bookInHand = 0;
              this.booksInHandDetails = [];
            }
          }, {
            key: "showIssueBookPopup",
            value: function showIssueBookPopup(bookData) {
              this.bookSuggestion = true;
              this.searchResult = false;
              this.borrower = "";
              this.booksInHandDetails = [];
              this.booksInHandStatus = false;
              this.bookInHand = 0;
              this.tempFromDate = moment__WEBPACK_IMPORTED_MODULE_2__(new Date()).format("DD MMM YYYY"); // this.tempToDate = moment(new Date()).format("DD MMM YYYY");

              this.bookFromDate = moment__WEBPACK_IMPORTED_MODULE_2__(new Date()).format("DD MMM YYYY");
              this.bookToDate = this.tempToDate;
              this.bookDataForIssue = bookData;
            }
          }, {
            key: "concatString",
            value: function concatString(authorArray) {
              this.hoverTitle = "";

              for (var i = 0; i < authorArray.length; i++) {
                this.hoverTitle += authorArray[i].author_name;

                if (i < authorArray.length - 1 && authorArray.length > 1) {
                  this.hoverTitle += ", ";
                }
              }

              return this.hoverTitle;
            }
          }, {
            key: "concatAuthorList",
            value: function concatAuthorList(authorArray) {
              this.hoverTitleAuthor = "";

              for (var i = 0; i < authorArray.length; i++) {
                this.hoverTitleAuthor += authorArray[i].author_name;

                if (i >= 0 && i < authorArray.length - 1 && authorArray.length > 1) {
                  this.hoverTitleAuthor += ", ";
                }
              }

              return this.hoverTitleAuthor;
            }
          }, {
            key: "messageHandler",
            value: function messageHandler(type, title, body) {
              var obj = {
                type: type,
                title: title,
                body: body
              };
              this.appC.popToast(obj);
            }
          }, {
            key: "closeSuggestionAndFilter",
            value: function closeSuggestionAndFilter() {
              this.suggestion = false;
              this.filter = false;
              this.borSuggestions = false;
            }
          }, {
            key: "clearResult",
            value: function clearResult() {
              this.borrower = "";
              this.booksInHandStatus = false;
              this.booksInHandDetails = [];
            }
          }, {
            key: "openCalendar",
            value: function openCalendar(id) {
              document.getElementById(id).click();
            }
            /*** pagination functions */

            /* Fetch next set of data from server and update table */

          }, {
            key: "fetchNext",
            value: function fetchNext() {
              this.pageIndex++;
              this.fectchTableDataByPage(this.pageIndex);
            }
            /* Fetch previous set of data from server and update table */

          }, {
            key: "fetchPrevious",
            value: function fetchPrevious() {
              this.pageIndex--;
              this.fectchTableDataByPage(this.pageIndex);
            }
            /* Fetch table data by page index */

          }, {
            key: "fectchTableDataByPage",
            value: function fectchTableDataByPage(index) {
              this.pageIndex = index;
              var startindex = this.displayBatchSize * (index - 1);
              this.advanceSearch();
            }
            /* Fetches Data as per the user selected batch size */

          }, {
            key: "updateTableBatchSize",
            value: function updateTableBatchSize(num) {
              this.pageIndex = 1;
              this.displayBatchSize = parseInt(num);
              this.advanceSearch();
            }
          }]);

          return IssueBookComponent;
        }();

        IssueBookComponent.ctorParameters = function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticatorService"]
          }, {
            type: _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonServiceFactory"]
          }, {
            type: _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
          }, {
            type: _services_library_add_add_book_service__WEBPACK_IMPORTED_MODULE_6__["AddBookService"]
          }, {
            type: _services_library_issue_issue_book_service__WEBPACK_IMPORTED_MODULE_7__["IssueBookService"]
          }];
        };

        IssueBookComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
          selector: 'app-issue-book',
          template: __importDefault(__webpack_require__(
          /*! raw-loader!./issue-book.component.html */
          "./node_modules/raw-loader/dist/cjs.js!./src/app/components/library-management/issue-book/issue-book.component.html"))["default"],
          styles: [__importDefault(__webpack_require__(
          /*! ./issue-book.component.scss */
          "./src/app/components/library-management/issue-book/issue-book.component.scss"))["default"]]
        }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_authenticator_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticatorService"], _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonServiceFactory"], _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _services_library_add_add_book_service__WEBPACK_IMPORTED_MODULE_6__["AddBookService"], _services_library_issue_issue_book_service__WEBPACK_IMPORTED_MODULE_7__["IssueBookService"]])], IssueBookComponent);
        return IssueBookComponent;
      }();
      /***/

    },

    /***/
    "./src/app/components/library-management/library-management-routing.module.ts":
    /*!************************************************************************************!*\
      !*** ./src/app/components/library-management/library-management-routing.module.ts ***!
      \************************************************************************************/

    /*! exports provided: LibraryManagementRoutingModule */

    /***/
    function srcAppComponentsLibraryManagementLibraryManagementRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LibraryManagementRoutingModule", function () {
        return LibraryManagementRoutingModule;
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


      var _library_management_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./library-management.component */
      "./src/app/components/library-management/library-management.component.ts");
      /* harmony import */


      var _masters_masters_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./masters/masters.component */
      "./src/app/components/library-management/masters/masters.component.ts");
      /* harmony import */


      var _add_book_add_book_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./add-book/add-book.component */
      "./src/app/components/library-management/add-book/add-book.component.ts");
      /* harmony import */


      var _return_book_return_book_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./return-book/return-book.component */
      "./src/app/components/library-management/return-book/return-book.component.ts");
      /* harmony import */


      var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./dashboard/dashboard.component */
      "./src/app/components/library-management/dashboard/dashboard.component.ts");
      /* harmony import */


      var _issue_book_issue_book_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./issue-book/issue-book.component */
      "./src/app/components/library-management/issue-book/issue-book.component.ts");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var LibraryManagementRoutingModule =
      /** @class */
      function () {
        var LibraryManagementRoutingModule = function LibraryManagementRoutingModule() {
          _classCallCheck(this, LibraryManagementRoutingModule);
        };

        LibraryManagementRoutingModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{
            path: '',
            component: _library_management_component__WEBPACK_IMPORTED_MODULE_2__["LibraryManagementComponent"],
            pathMatch: 'prefix',
            children: [{
              path: '',
              component: _issue_book_issue_book_component__WEBPACK_IMPORTED_MODULE_7__["IssueBookComponent"],
              pathMatch: 'prefix'
            }, {
              path: 'issue',
              component: _issue_book_issue_book_component__WEBPACK_IMPORTED_MODULE_7__["IssueBookComponent"],
              pathMatch: 'prefix'
            }, {
              path: 'master',
              component: _masters_masters_component__WEBPACK_IMPORTED_MODULE_3__["MastersComponent"],
              pathMatch: 'prefix'
            }, {
              path: 'add',
              component: _add_book_add_book_component__WEBPACK_IMPORTED_MODULE_4__["AddBookComponent"],
              pathMatch: 'prefix'
            }, {
              path: 'return',
              component: _return_book_return_book_component__WEBPACK_IMPORTED_MODULE_5__["ReturnBookComponent"],
              pathMatch: 'prefix'
            }, {
              path: 'dashboard',
              component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
              pathMatch: 'prefix'
            }, {
              path: 'report',
              loadChildren: function loadChildren() {
                return __webpack_require__.e(
                /*! import() | app-components-library-management-report-report-module */
                "app-components-library-management-report-report-module").then(__webpack_require__.bind(null,
                /*! app/components/library-management/report/report.module */
                "./src/app/components/library-management/report/report.module.ts")).then(function (m) {
                  return m.ReportModule;
                });
              },
              // loadChildren: "app/components/library-management/report/report.module#ReportModule",
              pathMatch: 'prefix'
            }]
          }])],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })], LibraryManagementRoutingModule);
        return LibraryManagementRoutingModule;
      }();
      /***/

    },

    /***/
    "./src/app/components/library-management/library-management.component.scss":
    /*!*********************************************************************************!*\
      !*** ./src/app/components/library-management/library-management.component.scss ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsLibraryManagementLibraryManagementComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".middle-section {\n  background: #fdfdfd;\n}\n\n.menu_section {\n  margin: 20px 0px;\n  width: 100%;\n}\n\n.menu_section .library_menu_container {\n  background: #ffffff;\n  border-radius: 8px;\n  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.16);\n  display: flex;\n  flex-direction: row;\n  width: 60%;\n  justify-content: center;\n  margin-left: 20%;\n  margin-right: 20%;\n  height: 55px;\n}\n\n.menu_section .library_menu_container .library_menu_item {\n  display: flex;\n  flex-direction: column;\n  width: 20%;\n}\n\n.menu_section .library_menu_container .library_menu_item .lib_menu_img {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  margin-top: -30px;\n}\n\n.menu_section .library_menu_container .library_menu_item .lib_menu_img img {\n  height: 70px;\n  width: 70px;\n  cursor: pointer;\n}\n\n.menu_section .library_menu_container .library_menu_item .lib_menu_name {\n  text-align: center;\n  font-weight: 600;\n  font-size: 14px;\n  margin-top: 8px;\n  position: relative;\n}\n\n.menu_section .library_menu_container .library_menu_item .lib_menu_name .ring {\n  color: #1984f6;\n  font-size: 10px;\n  font-weight: 600;\n  position: relative;\n  left: 0px;\n  top: -1px;\n}\n\n.menu_section .library_menu_container .library_menu_item .lib_menu_name span {\n  cursor: pointer;\n}\n\n.menu_section .library_menu_container .library_menu_item .activeMenu {\n  color: #1984f6;\n  visibility: visible;\n}\n\n.menu_section .library_menu_container .library_menu_item .nonActive {\n  color: #9b9b9b;\n}\n\n.menu_section .library_menu_container .library_menu_item .nonActive .fa-circle-o {\n  visibility: hidden;\n}\n\n.middle {\n  margin-top: 25px;\n  height: -webkit-fill-available;\n  height: -moz-available;\n  height: stretch;\n  min-height: -webkit-fill-available;\n  min-height: -moz-available;\n  min-height: stretch;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9saWJyYXJ5LW1hbmFnZW1lbnQvbGlicmFyeS1tYW5hZ2VtZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksbUJBQW1CO0FBQXZCOztBQUdFO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFBZjs7QUFGRTtFQUlJLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsNENBQTRDO0VBQzVDLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFlBQVk7QUFFbEI7O0FBZkU7RUFlTSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFVBQVU7QUFJbEI7O0FBckJFO0VBbUJRLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtBQU0zQjs7QUE1QkU7RUF3QlUsWUFBWTtFQUNaLFdBQVc7RUFDWCxlQUFlO0FBUTNCOztBQWxDRTtFQThCUSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixlQUFlO0VBQ2Ysa0JBQWtCO0FBUTVCOztBQTFDRTtFQW9DVSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFNBQVM7QUFVckI7O0FBbkRFO0VBNENVLGVBQWU7QUFXM0I7O0FBdkRFO0VBZ0RRLGNBQWM7RUFDZCxtQkFBbUI7QUFXN0I7O0FBNURFO0VBb0RRLGNBQWM7QUFZeEI7O0FBaEVFO0VBc0RVLGtCQUFrQjtBQWM5Qjs7QUFORTtFQUNFLGdCQUFnQjtFQUNoQiw4QkFBZTtFQUFmLHNCQUFlO0VBQWYsZUFBZTtFQUNmLGtDQUFtQjtFQUFuQiwwQkFBbUI7RUFBbkIsbUJBQW1CO0FBU3ZCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9saWJyYXJ5LW1hbmFnZW1lbnQvbGlicmFyeS1tYW5hZ2VtZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ubWlkZGxlLXNlY3Rpb257XG4gICAgYmFja2dyb3VuZDogI2ZkZmRmZDtcbiAgfVxuICBcbiAgLm1lbnVfc2VjdGlvbntcbiAgICBtYXJnaW46IDIwcHggMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC5saWJyYXJ5X21lbnVfY29udGFpbmVye1xuICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICB3aWR0aDogNjAlO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBtYXJnaW4tbGVmdDogMjAlO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAyMCU7XG4gICAgICBoZWlnaHQ6IDU1cHg7XG4gICAgICAubGlicmFyeV9tZW51X2l0ZW17XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIHdpZHRoOiAyMCU7XG4gICAgICAgIC5saWJfbWVudV9pbWd7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luLXRvcDogLTMwcHg7XG4gICAgICAgICAgaW1ne1xuICAgICAgICAgICAgaGVpZ2h0OiA3MHB4O1xuICAgICAgICAgICAgd2lkdGg6IDcwcHg7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5saWJfbWVudV9uYW1le1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIC5yaW5ne1xuICAgICAgICAgICAgY29sb3I6ICMxOTg0ZjY7XG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICAgICAgdG9wOiAtMXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBzcGFue1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuYWN0aXZlTWVudXtcbiAgICAgICAgICBjb2xvcjogIzE5ODRmNjtcbiAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgICB9XG4gICAgICAgIC5ub25BY3RpdmV7XG4gICAgICAgICAgY29sb3I6ICM5YjliOWI7XG4gICAgICAgICAgLmZhLWNpcmNsZS1ve1xuICAgICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgXG4gIC5taWRkbGV7XG4gICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICBoZWlnaHQ6IHN0cmV0Y2g7XG4gICAgbWluLWhlaWdodDogc3RyZXRjaDtcbiAgfVxuICAiXX0= */";
      /***/
    },

    /***/
    "./src/app/components/library-management/library-management.component.ts":
    /*!*******************************************************************************!*\
      !*** ./src/app/components/library-management/library-management.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: LibraryManagementComponent */

    /***/
    function srcAppComponentsLibraryManagementLibraryManagementComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LibraryManagementComponent", function () {
        return LibraryManagementComponent;
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

      var LibraryManagementComponent =
      /** @class */
      function () {
        var LibraryManagementComponent = /*#__PURE__*/function () {
          function LibraryManagementComponent() {
            _classCallCheck(this, LibraryManagementComponent);

            this.activeSession = 'issue';
          }

          _createClass(LibraryManagementComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {}
          }, {
            key: "ngAfterContentChecked",
            value: function ngAfterContentChecked() {
              this.setActiveClassOnSideNav();
            }
          }, {
            key: "setActiveClassOnSideNav",
            value: function setActiveClassOnSideNav() {
              var pathLastURL;
              var str = window.location.href;
              var pathURL = str.substring(str.lastIndexOf("/") + 1, str.length);

              switch (pathURL) {
                case 'overdue':
                case 'never-issued':
                case 'retrun-book':
                case 'issued':
                case 'lost':
                case 'fine':
                  {
                    this.activeSession = 'report';
                    break;
                  }

                case 'issue':
                  {
                    this.activeSession = pathURL;
                    break;
                  }

                case 'dashboard':
                  {
                    this.activeSession = pathURL;
                    break;
                  }

                case 'issue':
                  {
                    this.activeSession = pathURL;
                    break;
                  }

                case 'return':
                  {
                    this.activeSession = pathURL;
                    break;
                  }

                case 'add':
                  {
                    this.activeSession = pathURL;
                    break;
                  }

                case 'master':
                  {
                    this.activeSession = pathURL;
                    break;
                  }
              }
            }
          }]);

          return LibraryManagementComponent;
        }();

        LibraryManagementComponent.ctorParameters = function () {
          return [];
        };

        LibraryManagementComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
          selector: 'app-library-management',
          template: __importDefault(__webpack_require__(
          /*! raw-loader!./library-management.component.html */
          "./node_modules/raw-loader/dist/cjs.js!./src/app/components/library-management/library-management.component.html"))["default"],
          styles: [__importDefault(__webpack_require__(
          /*! ./library-management.component.scss */
          "./src/app/components/library-management/library-management.component.scss"))["default"]]
        }), __metadata("design:paramtypes", [])], LibraryManagementComponent);
        return LibraryManagementComponent;
      }();
      /***/

    },

    /***/
    "./src/app/components/library-management/library-management.module.ts":
    /*!****************************************************************************!*\
      !*** ./src/app/components/library-management/library-management.module.ts ***!
      \****************************************************************************/

    /*! exports provided: LibraryManagementModule */

    /***/
    function srcAppComponentsLibraryManagementLibraryManagementModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LibraryManagementModule", function () {
        return LibraryManagementModule;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var primeng_primeng__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! primeng/primeng */
      "./node_modules/primeng/primeng.js");
      /* harmony import */


      var primeng_primeng__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! moment */
      "./node_modules/moment/moment.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../shared/shared.module */
      "./src/app/components/shared/shared.module.ts");
      /* harmony import */


      var _library_management_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./library-management-routing.module */
      "./src/app/components/library-management/library-management-routing.module.ts");
      /* harmony import */


      var _library_management_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./library-management.component */
      "./src/app/components/library-management/library-management.component.ts");
      /* harmony import */


      var _masters_masters_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./masters/masters.component */
      "./src/app/components/library-management/masters/masters.component.ts");
      /* harmony import */


      var _add_book_add_book_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./add-book/add-book.component */
      "./src/app/components/library-management/add-book/add-book.component.ts");
      /* harmony import */


      var _issue_book_issue_book_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./issue-book/issue-book.component */
      "./src/app/components/library-management/issue-book/issue-book.component.ts");
      /* harmony import */


      var _return_book_return_book_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./return-book/return-book.component */
      "./src/app/components/library-management/return-book/return-book.component.ts");
      /* harmony import */


      var _activity_activity_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./activity/activity.component */
      "./src/app/components/library-management/activity/activity.component.ts");
      /* harmony import */


      var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./dashboard/dashboard.component */
      "./src/app/components/library-management/dashboard/dashboard.component.ts");
      /* harmony import */


      var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ng-multiselect-dropdown */
      "./node_modules/ng-multiselect-dropdown/__ivy_ngcc__/fesm2015/ng-multiselect-dropdown.js");
      /* harmony import */


      var _services_library_return_return_book_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../services/library/return/return-book.service */
      "./src/app/services/library/return/return-book.service.ts");
      /* harmony import */


      var _services_library_issue_issue_book_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../services/library/issue/issue-book.service */
      "./src/app/services/library/issue/issue-book.service.ts");
      /* harmony import */


      var _services_library_add_add_book_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../services/library/add/add-book.service */
      "./src/app/services/library/add/add-book.service.ts");
      /* harmony import */


      var _services_library_master_masters_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../../services/library/master/masters.service */
      "./src/app/services/library/master/masters.service.ts");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      }; // import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';


      var LibraryManagementModule =
      /** @class */
      function () {
        var LibraryManagementModule = function LibraryManagementModule() {
          _classCallCheck(this, LibraryManagementModule);
        };

        LibraryManagementModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
          imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], // BsDatepickerModule,
          primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["FileUploadModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["SplitButtonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _library_management_routing_module__WEBPACK_IMPORTED_MODULE_6__["LibraryManagementRoutingModule"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_14__["NgMultiSelectDropDownModule"].forRoot()],
          declarations: [_masters_masters_component__WEBPACK_IMPORTED_MODULE_8__["MastersComponent"], _library_management_component__WEBPACK_IMPORTED_MODULE_7__["LibraryManagementComponent"], _add_book_add_book_component__WEBPACK_IMPORTED_MODULE_9__["AddBookComponent"], _issue_book_issue_book_component__WEBPACK_IMPORTED_MODULE_10__["IssueBookComponent"], _return_book_return_book_component__WEBPACK_IMPORTED_MODULE_11__["ReturnBookComponent"], _activity_activity_component__WEBPACK_IMPORTED_MODULE_12__["ActivityComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__["DashboardComponent"]],
          entryComponents: [_add_book_add_book_component__WEBPACK_IMPORTED_MODULE_9__["AddBookComponent"]],
          providers: [_services_library_return_return_book_service__WEBPACK_IMPORTED_MODULE_15__["ReturnBookService"], _services_library_issue_issue_book_service__WEBPACK_IMPORTED_MODULE_16__["IssueBookService"], _services_library_add_add_book_service__WEBPACK_IMPORTED_MODULE_17__["AddBookService"], _services_library_master_masters_service__WEBPACK_IMPORTED_MODULE_18__["MastersService"]]
        })], LibraryManagementModule);
        return LibraryManagementModule;
      }();
      /***/

    },

    /***/
    "./src/app/components/library-management/masters/masters.component.scss":
    /*!******************************************************************************!*\
      !*** ./src/app/components/library-management/masters/masters.component.scss ***!
      \******************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsLibraryManagementMastersMastersComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".middle-section {\n  background: #f9f9f9;\n}\n\nhr {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  border: 0;\n  border-top: 1px solid #eee;\n}\n\n.master_list .master_list_container {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  justify-content: space-between;\n}\n\n.master_list .master_list_container .master_menu {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n}\n\n.master_list .master_list_container .master_list_item {\n  width: auto;\n}\n\n.master_list .master_list_container .master_list_item .master_list_btn {\n  background: white;\n  color: #9b9b9b;\n  padding: 10px;\n  text-align: center;\n  border: 1px solid #d1d1d1;\n}\n\n.master_list .master_list_container .master_list_item .active {\n  background: #1984f6;\n  color: white;\n  border: 1px solid #1984f6;\n}\n\n.master_list .master_list_container .search-filter-wrapper .normal-field {\n  padding: 7px 10px;\n  border: 1px solid #ccc;\n  box-sizing: border-box;\n  margin: 0;\n  float: left;\n  height: 35px;\n  font-size: 14px;\n  border-radius: 4px;\n}\n\n.master_list .master_list_container #item1 {\n  border-top-left-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\n\n.master_list .master_list_container #item6 {\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 4px;\n}\n\n.middle_section {\n  margin-top: 10px;\n  width: 100%;\n  margin-bottom: 20px;\n}\n\n.middle_section .add_container {\n  background: #eeeeee;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n  padding: 5px 10px;\n  display: flex;\n  justify-content: space-between;\n  flex-direction: row;\n  position: relative;\n}\n\n.middle_section .add_container .main_name_container {\n  display: flex;\n  flex-direction: row;\n  width: 35%;\n}\n\n.middle_section .add_container .name_container {\n  display: flex;\n  flex-direction: column;\n  color: #3e3d4a;\n  width: 45%;\n  position: relative;\n}\n\n.middle_section .add_container .name_container .fa-sort-desc {\n  position: absolute;\n  left: 158px;\n  top: 25px;\n  background: white;\n  cursor: pointer;\n  padding-left: 10px;\n  padding-bottom: 5px;\n}\n\n.middle_section .add_container .name_container .add_input {\n  background: white;\n  border-radius: 4px;\n  padding: 5px 10px;\n  border: 1px solid #bdbdbd;\n  width: 35%;\n}\n\n.middle_section .add_container .name_container ::-moz-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #bdbdbd;\n}\n\n.middle_section .add_container .name_container :-ms-input-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #bdbdbd;\n}\n\n.middle_section .add_container .name_container ::placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #bdbdbd;\n}\n\n.middle_section .add_container .add_btn button {\n  border: 1px solid #1283f4;\n  color: #1283f4;\n  border-radius: 4px;\n  padding: 5px 10px;\n  font-weight: 600;\n  background: white;\n  margin-top: 20px;\n}\n\n.middle_section .add_container .category_suggestions_container {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 57px;\n  left: 10px;\n  background: white;\n  width: 15.5%;\n  border-radius: 4px;\n  overflow-y: auto;\n  height: 200px;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);\n}\n\n.middle_section .add_container .category_suggestions_container .category_suggestions_item {\n  width: 100%;\n  text-align: left;\n  font-size: 14px;\n  color: black;\n  padding: 5px;\n  cursor: pointer;\n}\n\n.middle_section .add_container .category_suggestions_container .category_suggestions_item span {\n  width: 100%;\n}\n\n.middle_section .add_container .category_suggestions_container .category_suggestions_item:hover {\n  background: #1283f4;\n  color: white;\n}\n\n.middle_section .added_list_container {\n  display: flex;\n  flex-direction: column;\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);\n  background-color: #ffffff;\n}\n\n.middle_section .added_list_container .added_list_item {\n  padding: 10px;\n  border-bottom: 1px solid #f9f9f9;\n  width: 100%;\n}\n\n.middle_section .added_list_container .added_list_item .value_container {\n  width: 50%;\n  display: flex;\n  flex-direction: row;\n}\n\n.middle_section .added_list_container .added_list_item .value_container .edit_input {\n  background: white;\n  border-radius: 4px;\n  padding: 5px 10px;\n  border: 1px solid #bdbdbd;\n}\n\n.middle_section .added_list_container .added_list_item .value_container ::-moz-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #bdbdbd;\n}\n\n.middle_section .added_list_container .added_list_item .value_container :-ms-input-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #bdbdbd;\n}\n\n.middle_section .added_list_container .added_list_item .value_container ::placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #bdbdbd;\n}\n\n.middle_section .added_list_container .added_list_item .value_item1, .middle_section .added_list_container .added_list_item .value_item2 {\n  width: 32%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.middle_section .added_list_container .added_list_item .value_item1 i, .middle_section .added_list_container .added_list_item .value_item2 i {\n  cursor: pointer;\n  margin: 0px 5px;\n}\n\n.middle_section .added_list_container .added_list_item .action_container .add_sub_cat {\n  border: none;\n  background: white;\n  color: #9b9b9b;\n  font-size: 12px;\n}\n\n.middle_section .added_list_container .added_list_item .action_container .add_sub_cat i {\n  color: #1283f4;\n}\n\n.middle_section .added_list_container .added_list_item .action_container i {\n  cursor: pointer;\n  margin: 0px 5px;\n}\n\n.middle_section .added_list_container .added_list_item .action_container span {\n  color: #1283f4;\n  cursor: pointer;\n  margin: 0px 5px;\n}\n\n.middle_section .added_list_container .new_sub_cat {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 10px;\n  padding-left: 0px;\n  width: 97%;\n  margin-left: 17%;\n}\n\n.middle_section .added_list_container .new_sub_cat .new_sub_cat_item {\n  width: 20%;\n}\n\n.middle_section .added_list_container .new_sub_cat .new_sub_cat_item .edit_input {\n  background: white;\n  border-radius: 4px;\n  padding: 5px 10px;\n  border: 1px solid #bdbdbd;\n  width: 80%;\n}\n\n.middle_section .added_list_container .new_sub_cat .new_sub_cat_action_item {\n  display: flex;\n  flex-direction: row;\n  width: 25.5%;\n}\n\n.middle_section .added_list_container .new_sub_cat .new_sub_cat_action_item .new_cat_save_btn {\n  color: #1283f4;\n  border: 1px solid #1283f4;\n  text-align: center;\n  padding: 5px 10px;\n  background: white;\n  margin-right: 10px;\n}\n\n.middle_section .added_list_container .new_sub_cat .new_sub_cat_action_item .new_cat_cancel_btn {\n  color: #9b9b9b;\n  border: 1px solid #9b9b9b;\n  text-align: center;\n  padding: 5px 10px;\n  background: white;\n}\n\n.middle_section .noResult {\n  width: 100%;\n  text-align: center;\n  font-weight: 600;\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n  color: #9b9b9b;\n  font-size: 16px;\n}\n\n.middle_section .edit_com {\n  display: none;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.middle_section .display_com {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n::ng-deep .bs-datepicker-container, .bs-daterangepicker-container {\n  left: 850 !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9saWJyYXJ5LW1hbmFnZW1lbnQvbWFzdGVycy9tYXN0ZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0ksZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsMEJBQTBCO0FBQzlCOztBQUVBO0VBRUksYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsOEJBQThCO0FBQWxDOztBQUxBO0VBT00sYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwyQkFBMkI7QUFFakM7O0FBWEE7RUFZTSxXQUFXO0FBR2pCOztBQWZBO0VBY1EsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHlCQUF5QjtBQUtqQzs7QUF2QkE7RUFzQlEsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWix5QkFBeUI7QUFLakM7O0FBN0JBO0VBZ0NZLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0I7QUFDOUI7O0FBeENBO0VBMkNNLDJCQUEyQjtFQUMzQiw4QkFBOEI7QUFDcEM7O0FBN0NBO0VBK0NNLDRCQUE0QjtFQUM1QiwrQkFBK0I7QUFFckM7O0FBSUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLG1CQUFtQjtBQURyQjs7QUFGQTtFQUtJLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDdEI7O0FBYkE7RUFjTSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFVBQVU7QUFHaEI7O0FBbkJBO0VBbUJNLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsY0FBYztFQUNkLFVBQVU7RUFDVixrQkFBa0I7QUFJ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TUksYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7QUFtQmxDOztBQWhPQTtFQWdOSSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtBQW9CbEM7O0FBaEJBO0VBQ0Usb0JBQW9CO0FBbUJ0QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGlicmFyeS1tYW5hZ2VtZW50L21hc3RlcnMvbWFzdGVycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5taWRkbGUtc2VjdGlvbntcbiAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcbn1cblxuaHIge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBib3JkZXI6IDA7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZWU7XG59XG5cbi5tYXN0ZXJfbGlzdHtcbiAgLm1hc3Rlcl9saXN0X2NvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIC5tYXN0ZXJfbWVudXtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIH1cbiAgICAubWFzdGVyX2xpc3RfaXRlbXtcbiAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgLm1hc3Rlcl9saXN0X2J0bntcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIGNvbG9yOiAjOWI5YjliO1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkMWQxZDE7XG4gICAgICAgIC8vIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIH1cbiAgICAgIC5hY3RpdmV7XG4gICAgICAgIGJhY2tncm91bmQ6ICMxOTg0ZjY7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzE5ODRmNjtcbiAgICAgIH1cbiAgICB9XG4gICAgLnNlYXJjaF9jb250YWluZXJ7XG5cbiAgICB9XG4gICAgLnNlYXJjaC1maWx0ZXItd3JhcHBlciB7XG4gICAgICAgIC5ub3JtYWwtZmllbGQge1xuICAgICAgICAgICAgcGFkZGluZzogN3B4IDEwcHg7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICB9XG4gICAgfVxuICAgICNpdGVtMXtcbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDRweDtcbiAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDRweDtcbiAgICB9XG4gICAgI2l0ZW02IHtcbiAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0cHg7XG4gICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNHB4O1xuICAgIH1cbiAgfVxufVxuXG5cbi5taWRkbGVfc2VjdGlvbntcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIC5hZGRfY29udGFpbmVye1xuICAgIGJhY2tncm91bmQ6ICNlZWVlZWU7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNHB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0cHg7XG4gICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLm1haW5fbmFtZV9jb250YWluZXJ7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIHdpZHRoOiAzNSU7XG4gICAgfVxuICAgIC5uYW1lX2NvbnRhaW5lcntcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgY29sb3I6ICMzZTNkNGE7XG4gICAgICB3aWR0aDogNDUlO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgLmZhLXNvcnQtZGVzY3tcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAxNThweDtcbiAgICAgICAgdG9wOiAyNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgICB9XG4gICAgICAuYWRkX2lucHV0e1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2JkYmRiZDtcbiAgICAgICAgd2lkdGg6IDM1JTtcbiAgICAgIH1cbiAgICAgIDo6cGxhY2Vob2xkZXIgeyAvKiBDaHJvbWUsIEZpcmVmb3gsIE9wZXJhLCBTYWZhcmkgMTAuMSsgKi9cbiAgICAgICAgY29sb3I6ICNiZGJkYmQ7XG4gICAgICB9XG4gICAgfVxuICAgIC5hZGRfYnRue1xuICAgICAgYnV0dG9ue1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMTI4M2Y0O1xuICAgICAgICBjb2xvcjogIzEyODNmNDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmNhdGVnb3J5X3N1Z2dlc3Rpb25zX2NvbnRhaW5lcntcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XG4gICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDU3cHg7XG4gICAgICBsZWZ0OiAxMHB4O1xuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICB3aWR0aDogMTUuNSU7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IHJnYmEoMCwwLDAsMC4xNik7XG4gICAgICAuY2F0ZWdvcnlfc3VnZ2VzdGlvbnNfaXRlbXtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgc3BhbntcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLmNhdGVnb3J5X3N1Z2dlc3Rpb25zX2l0ZW06aG92ZXJ7XG4gICAgICAgIGJhY2tncm91bmQ6ICMxMjgzZjQ7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuXG5cbiAgLmFkZGVkX2xpc3RfY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA0cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDRweDtcbiAgICBib3gtc2hhZG93OiAwIDNweCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgLmFkZGVkX2xpc3RfaXRlbXtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Y5ZjlmOTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgLy8gbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgIC52YWx1ZV9jb250YWluZXJ7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIC5lZGl0X2lucHV0e1xuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYmRiZGJkO1xuICAgICAgICB9XG4gICAgICAgIDo6cGxhY2Vob2xkZXIgeyAvKiBDaHJvbWUsIEZpcmVmb3gsIE9wZXJhLCBTYWZhcmkgMTAuMSsgKi9cbiAgICAgICAgICBjb2xvcjogI2JkYmRiZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLnZhbHVlX2l0ZW0xLCAudmFsdWVfaXRlbTJ7XG4gICAgICAgIHdpZHRoOiAzMiU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgaXtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgbWFyZ2luOiAwcHggNXB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAuYWN0aW9uX2NvbnRhaW5lcntcbiAgICAgICAgLmFkZF9zdWJfY2F0e1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICBjb2xvcjogIzliOWI5YjtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgaXtcbiAgICAgICAgICAgIGNvbG9yOiAjMTI4M2Y0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpe1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICBtYXJnaW46IDBweCA1cHg7XG4gICAgICAgIH1cbiAgICAgICAgc3BhbntcbiAgICAgICAgICBjb2xvcjogIzEyODNmNDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgbWFyZ2luOiAwcHggNXB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm5ld19zdWJfY2F0e1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gICAgICB3aWR0aDogOTclO1xuICAgICAgbWFyZ2luLWxlZnQ6IDE3JTtcbiAgICAgIC5uZXdfc3ViX2NhdF9pdGVte1xuICAgICAgICB3aWR0aDogMjAlO1xuICAgICAgICAgIC5lZGl0X2lucHV0e1xuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiZGJkYmQ7XG4gICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5uZXdfc3ViX2NhdF9hY3Rpb25faXRlbXtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgd2lkdGg6IDI1LjUlO1xuICAgICAgICAubmV3X2NhdF9zYXZlX2J0bntcbiAgICAgICAgICBjb2xvcjogIzEyODNmNDtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMTI4M2Y0O1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLm5ld19jYXRfY2FuY2VsX2J0bntcbiAgICAgICAgICBjb2xvcjogIzliOWI5YjtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjOWI5YjliO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiAgLm5vUmVzdWx0e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBjb2xvcjogIzliOWI5YjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cblxuICAuZWRpdF9jb217XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxuICAuZGlzcGxheV9jb217XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxufVxuXG46Om5nLWRlZXAgLmJzLWRhdGVwaWNrZXItY29udGFpbmVyLCAuYnMtZGF0ZXJhbmdlcGlja2VyLWNvbnRhaW5lcntcbiAgbGVmdDogODUwICFpbXBvcnRhbnQ7XG59XG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/components/library-management/masters/masters.component.ts":
    /*!****************************************************************************!*\
      !*** ./src/app/components/library-management/masters/masters.component.ts ***!
      \****************************************************************************/

    /*! exports provided: MastersComponent */

    /***/
    function srcAppComponentsLibraryManagementMastersMastersComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MastersComponent", function () {
        return MastersComponent;
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


      var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../services/authenticator.service */
      "./src/app/services/authenticator.service.ts");
      /* harmony import */


      var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../services/common-service */
      "./src/app/services/common-service.ts");
      /* harmony import */


      var _services_library_master_masters_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../services/library/master/masters.service */
      "./src/app/services/library/master/masters.service.ts");

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

      var MastersComponent =
      /** @class */
      function () {
        var MastersComponent = /*#__PURE__*/function () {
          function MastersComponent(router, auth, commonService, appC, masterService) {
            _classCallCheck(this, MastersComponent);

            this.router = router;
            this.auth = auth;
            this.commonService = commonService;
            this.appC = appC;
            this.masterService = masterService;
            this.currentSectionName = '';
            this.searchInput = '';
            this.multiClickDisabled = false; // FOR Category and Subcategory

            this.categorySuggestions = false;
            this.newSubCat = false;
            this.categoryName = '';
            this.subcategoryName = '';
            this.categorySubCatList = [];
            this.editCategoryName = '';
            this.editSubCategoryName = '';
            this.selectedRowForCat = '';
            this.subcatEdit = false; // For Subject

            this.subjectList = [];
            this.subjectName = '';
            this.editSubjectName = '';
            this.selectedRowForSubject = ''; // For Publication

            this.publicationName = '';
            this.publicationList = [];
            this.editPublicationName = '';
            this.selectedRowForPublication = ''; // For Author

            this.authorName = '';
            this.authorList = [];
            this.editAuthorName = '';
            this.selectedRowForAuthor = ''; // For Reference

            this.referenceName = '';
            this.referenceList = [];
            this.editReferenceName = '';
            this.selectedRowForReference = ''; // For Language

            this.languageName = '';
            this.languageList = [];
            this.editLanguageName = '';
            this.selectedRowForLanguage = '';
          }

          _createClass(MastersComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.changeMasterCategory('item1', 'for_category');
            }
          }, {
            key: "changeMasterCategory",
            value: function changeMasterCategory(itemId, section_name) {
              for (var i = 1; i <= 6; i++) {
                document.getElementById("item" + i).classList.remove("active");
              }

              document.getElementById(itemId).classList.add("active");

              for (var _i = 0; _i < 6; _i++) {
                document.getElementsByClassName("middle_section")[_i].classList.add("hide");
              }

              document.getElementById(section_name).classList.remove("hide");
              this.searchInput = '';
              this.getCategory(section_name);
            }
          }, {
            key: "searchInList",
            value: function searchInList(search_string) {
              var _this15 = this;

              if (this.searchInput != '' && this.searchInput != null) {
                if (search_string.which <= 90 && search_string.which >= 48 || search_string.which == 8) {
                  this.auth.showLoader();
                  this.masterService.searchData(this.currentSectionName, this.searchInput).subscribe(function (response) {
                    var res;
                    res = response;

                    _this15.auth.hideLoader();

                    if (res.response != null) {
                      if (_this15.currentSectionName.includes('category')) {
                        _this15.categorySubCatList = res.response;
                      }

                      if (_this15.currentSectionName.includes('subject')) {
                        _this15.subjectList = res.response;
                      }

                      if (_this15.currentSectionName.includes('publication')) {
                        _this15.publicationList = res.response;
                      }

                      if (_this15.currentSectionName.includes('author')) {
                        _this15.authorList = res.response;
                      }

                      if (_this15.currentSectionName.includes('reference')) {
                        _this15.referenceList = res.response;
                      }

                      if (_this15.currentSectionName.includes('language')) {
                        _this15.languageList = res.response;
                      }
                    } else {
                      console.log(res.errorResponse);
                    }
                  });
                }
              } else {
                this.getCategory(this.currentSectionName);
              }
            }
          }, {
            key: "getCategory",
            value: function getCategory(section_name) {
              if (section_name.includes('category')) {
                this.categoryName = "";
                this.subcategoryName = "";
                this.currentSectionName = 'category';
                this.getAllCategory();
                this.getAllParentCategory();
              }

              if (section_name.includes('subject')) {
                this.subjectName = "";
                this.currentSectionName = 'subject';
                this.getAllSubjects();
              }

              if (section_name.includes('publication')) {
                this.publicationName = "";
                this.currentSectionName = 'publication';
                this.getAllPublications();
              }

              if (section_name.includes('author')) {
                this.authorName = "";
                this.currentSectionName = 'author';
                this.getAllAuthors();
              }

              if (section_name.includes('reference')) {
                this.referenceName = "";
                this.currentSectionName = 'reference';
                this.getAllReferences();
              }

              if (section_name.includes('language')) {
                this.languageName = "";
                this.currentSectionName = 'language';
                this.getAllLanguages();
              }
            }
          }, {
            key: "showCategorySuggestions",
            value: function showCategorySuggestions(search_string) {
              this.categoryList = this.tempCatSubList;

              for (var i = 0; i < this.categoryList.length; i++) {
                if (this.categoryList[i].category_name.includes(search_string.key)) {
                  i++;
                } else {
                  this.categoryList.splice(i, 1);
                }
              }

              if (this.categoryList.length > 0) {
                this.categorySuggestions = true;
              } else {
                this.categorySuggestions = false;
              }

              if (this.categoryName == "" || this.categoryName == null) {
                this.categoryList = this.tempCatSubList;
                this.categorySuggestions = false;
              }
            }
          }, {
            key: "showSuggestions",
            value: function showSuggestions() {
              if (this.categorySuggestions) {
                this.categorySuggestions = false;
              } else {
                this.categorySuggestions = true;
              }
            }
          }, {
            key: "chooseCategory",
            value: function chooseCategory(cat_name) {
              this.categoryName = cat_name;
              this.categorySuggestions = false;
            }
          }, {
            key: "addCatAndSubCat",
            value: function addCatAndSubCat() {
              var _this16 = this;

              if (this.categoryName != '' && this.categoryName != null) {
                var obj = {
                  "category_name": this.categoryName
                };

                if (this.subcategoryName != '' && this.subcategoryName != null) {
                  this.addBulkCatAndSubCat();
                } else {
                  this.auth.showLoader();
                  this.multiClickDisabled = true;
                  this.masterService.addCategory(obj).subscribe(function (response) {
                    var res;
                    res = response;
                    _this16.multiClickDisabled = false;

                    _this16.auth.hideLoader();

                    if (res.response != null) {
                      _this16.messageHandler('success', 'Category added successfully', '');

                      _this16.categoryName = "";
                      _this16.subcategoryName = "";
                      _this16.categorySuggestions = false;

                      _this16.getAllCategory();

                      _this16.getAllParentCategory();
                    } else {
                      if (res.errorResponse[0].errorCode == 700) {
                        _this16.messageHandler('error', 'Category already exists', '');
                      }

                      _this16.categorySuggestions = false;
                      console.log(res.errorResponse);
                    }
                  });
                }
              } else {
                this.messageHandler('error', 'Enter category name', '');
              }
            }
          }, {
            key: "addBulkCatAndSubCat",
            value: function addBulkCatAndSubCat() {
              var _this17 = this;

              var obj = {
                "category_name": this.categoryName,
                "sub_category_name": this.subcategoryName
              };
              this.auth.showLoader();
              this.multiClickDisabled = true;
              this.masterService.addCatAndSubCat(obj).subscribe(function (response) {
                var res;
                res = response;
                _this17.multiClickDisabled = false;

                _this17.auth.hideLoader();

                if (res.response != null) {
                  _this17.messageHandler('success', 'Category added successfully', '');

                  _this17.categoryName = "";
                  _this17.subcategoryName = "";
                  _this17.categorySuggestions = false;

                  _this17.getAllCategory();

                  _this17.getAllParentCategory();
                } else {
                  if (res.errorResponse[0].errorCode == 700) {
                    _this17.messageHandler('error', 'Category already exists', '');
                  }

                  _this17.categorySuggestions = false;
                  console.log(res.errorResponse[0].errorCode == 700);
                }
              });
            }
          }, {
            key: "getAllCategory",
            value: function getAllCategory() {
              var _this18 = this;

              this.auth.showLoader();
              this.masterService.getAllCategory().subscribe(function (response) {
                var res;
                res = response;

                _this18.auth.hideLoader();

                if (res.response != null) {
                  _this18.categorySubCatList = res.response;
                  _this18.tempCatSubList = res.response;
                  console.log(_this18.categorySubCatList);
                } else {
                  console.log(res.errorResponse);
                }
              });
            }
          }, {
            key: "getAllParentCategory",
            value: function getAllParentCategory() {
              var _this19 = this;

              this.auth.showLoader();
              this.masterService.getAllParentCategory().subscribe(function (response) {
                var res;
                res = response;

                _this19.auth.hideLoader();

                if (res.response != null) {
                  _this19.categoryList = res.response;
                  _this19.tempCatSubList = res.response;
                } else {
                  console.log(res.errorResponse);
                }
              });
            }
          }, {
            key: "editCat",
            value: function editCat(category, row_no) {
              if (category.sub_category_id != null && category.sub_category_name != null) {
                this.subcatEdit = true;
                this.editSubCategoryName = category.sub_category_name;
              } else {
                this.subcatEdit = false;
              }

              this.categorySuggestions = false;

              if (this.selectedRowForCat !== "") {
                //console.log(this.selectedRow);
                document.getElementById(("cat_row_dis" + this.selectedRowForCat).toString()).style.display = "flex";
                document.getElementById(("cat_row_edit" + this.selectedRowForCat).toString()).style.display = "none";
              }

              this.selectedRowForCat = row_no;
              document.getElementById(("cat_row_dis" + row_no).toString()).style.display = "none";
              document.getElementById(("cat_row_edit" + row_no).toString()).style.display = "flex";
              this.editCategoryName = category.category_name;
            }
          }, {
            key: "saveCat",
            value: function saveCat(cat_id, subcat_id) {
              var _this20 = this;

              if (subcat_id != null) {
                if (this.editCategoryName != '' && this.editCategoryName != null) {
                  var obj = {
                    "category_name": this.editCategoryName,
                    "category_id": cat_id,
                    "sub_category_name": this.editSubCategoryName,
                    "sub_category_id": subcat_id
                  };
                  this.auth.showLoader();
                  this.masterService.updateCatSubCat(obj).subscribe(function (response) {
                    var res;
                    res = response;
                    _this20.categorySuggestions = false;

                    _this20.auth.hideLoader();

                    if (res.response != null) {
                      _this20.messageHandler('success', 'Category updated successfully', '');

                      _this20.editCategoryName = "";
                      _this20.editSubCategoryName = "";

                      _this20.getAllCategory();
                    } else {
                      if (res.errorResponse[0].errorCode == 700) {
                        _this20.messageHandler('error', 'Category already exists', '');
                      }

                      console.log(res.errorResponse);
                    }
                  });
                } else {
                  this.messageHandler('error', 'Enter category name', '');
                }
              } else {
                if (this.editCategoryName != '' && this.editCategoryName != null) {
                  var _obj = {
                    "category_name": this.editCategoryName,
                    "category_id": cat_id
                  };
                  this.auth.showLoader();
                  this.masterService.updateCat(_obj).subscribe(function (response) {
                    var res;
                    res = response;
                    _this20.categorySuggestions = false;

                    _this20.auth.hideLoader();

                    if (res.response != null) {
                      _this20.messageHandler('success', 'Category updated successfully', '');

                      _this20.editCategoryName = "";
                      _this20.editSubCategoryName = "";

                      _this20.getAllCategory();
                    } else {
                      if (res.errorResponse[0].errorCode == 700) {
                        _this20.messageHandler('error', 'Category already exists', '');
                      }

                      console.log(res.errorResponse);
                    }
                  });
                } else {
                  this.messageHandler('error', 'Enter category name', '');
                }
              }
            }
          }, {
            key: "deleteCat",
            value: function deleteCat(category) {
              console.log(category);

              if (category.sub_category_id != null) {
                this["delete"](category.sub_category_id, 'category');
              } else {
                this["delete"](category.category_id, 'category');
              }
            } // For Subject

          }, {
            key: "getAllSubjects",
            value: function getAllSubjects() {
              var _this21 = this;

              this.auth.showLoader();
              this.masterService.getAllSubjects().subscribe(function (response) {
                var res;
                res = response;

                _this21.auth.hideLoader();

                if (res.response != null) {
                  _this21.subjectList = res.response;
                  console.log(_this21.subjectList);
                } else {
                  console.log(res.errorResponse);
                }
              });
            }
          }, {
            key: "addSubject",
            value: function addSubject() {
              var _this22 = this;

              if (this.subjectName != '' && this.subjectName != null) {
                var obj = {
                  "subject_name": this.subjectName
                };
                this.auth.showLoader();
                this.multiClickDisabled = true;
                this.masterService.addSubject(obj).subscribe(function (response) {
                  var res;
                  res = response;
                  _this22.multiClickDisabled = false;

                  _this22.auth.hideLoader();

                  if (res.response != null) {
                    _this22.messageHandler('success', 'Subject added successfully', '');

                    _this22.subjectName = "";

                    _this22.getAllSubjects();
                  } else {
                    if (res.errorResponse[0].errorCode == 700) {
                      _this22.messageHandler('error', 'Subject already exists', '');
                    }

                    console.log(res.errorResponse);
                  }
                });
              } else {
                this.messageHandler('error', 'Enter subject Name', '');
              }
            }
          }, {
            key: "editSubject",
            value: function editSubject(subject, row_no) {
              if (this.selectedRowForSubject !== "") {
                //console.log(this.selectedRow);
                document.getElementById(("subject_row_dis" + this.selectedRowForSubject).toString()).style.display = "flex";
                document.getElementById(("subject_row_edit" + this.selectedRowForSubject).toString()).style.display = "none";
              }

              this.selectedRowForSubject = row_no;
              document.getElementById(("subject_row_dis" + row_no).toString()).style.display = "none";
              document.getElementById(("subject_row_edit" + row_no).toString()).style.display = "flex";
              this.editSubjectName = subject.subject_name;
            }
          }, {
            key: "saveSubject",
            value: function saveSubject(subject_id) {
              var _this23 = this;

              if (this.editSubjectName != '' && this.editSubjectName != null) {
                var obj = {
                  "subject_name": this.editSubjectName,
                  "subject_id": subject_id
                };
                this.auth.showLoader();
                this.masterService.updateSubject(obj).subscribe(function (response) {
                  var res;
                  res = response;

                  _this23.auth.hideLoader();

                  if (res.response != null) {
                    _this23.messageHandler('success', 'Subject updated successfully', '');

                    _this23.editSubjectName = "";

                    _this23.getAllSubjects();
                  } else {
                    console.log(res.errorResponse);
                  }
                });
              } else {
                this.messageHandler('error', 'Enter subject name', '');
              }
            } // FOR PUBLICATION

          }, {
            key: "getAllPublications",
            value: function getAllPublications() {
              var _this24 = this;

              this.auth.showLoader();
              this.masterService.getAllPublications().subscribe(function (response) {
                var res;
                res = response;

                _this24.auth.hideLoader();

                if (res.response != null) {
                  _this24.publicationList = res.response;
                } else {
                  console.log(res.errorResponse);
                }
              });
            }
          }, {
            key: "addPublication",
            value: function addPublication() {
              var _this25 = this;

              if (this.publicationName != '' && this.publicationName != null) {
                var obj = {
                  "publication_name": this.publicationName
                };
                this.auth.showLoader();
                this.multiClickDisabled = true;
                this.masterService.addPublication(obj).subscribe(function (response) {
                  var res;
                  res = response;
                  _this25.multiClickDisabled = false;

                  _this25.auth.hideLoader();

                  if (res.response != null) {
                    _this25.messageHandler('success', 'Publication added successfully', '');

                    _this25.publicationName = "";

                    _this25.getAllPublications();
                  } else {
                    if (res.errorResponse[0].errorCode == 700) {
                      _this25.messageHandler('error', 'Publication already exists', '');
                    }

                    console.log(res.errorResponse);
                  }
                });
              } else {
                this.messageHandler('error', 'Enter publication name', '');
              }
            }
          }, {
            key: "editPublication",
            value: function editPublication(publication, row_no) {
              if (this.selectedRowForPublication !== "") {
                //console.log(this.selectedRow);
                document.getElementById(("publication_row_dis" + this.selectedRowForPublication).toString()).style.display = "flex";
                document.getElementById(("publication_row_edit" + this.selectedRowForPublication).toString()).style.display = "none";
              }

              this.selectedRowForPublication = row_no;
              document.getElementById(("publication_row_dis" + row_no).toString()).style.display = "none";
              document.getElementById(("publication_row_edit" + row_no).toString()).style.display = "flex";
              this.editPublicationName = publication.publication_name;
            }
          }, {
            key: "savePublication",
            value: function savePublication(publication_id) {
              var _this26 = this;

              if (this.editPublicationName != '' && this.editPublicationName != null) {
                var obj = {
                  "publication_name": this.editPublicationName,
                  "publication_id": publication_id
                };
                this.auth.showLoader();
                this.masterService.updatePublication(obj).subscribe(function (response) {
                  var res;
                  res = response;

                  _this26.auth.hideLoader();

                  if (res.response != null) {
                    _this26.messageHandler('success', 'Publication updated successfully', '');

                    _this26.editPublicationName = "";

                    _this26.getAllPublications();
                  } else {
                    console.log(res.errorResponse);
                  }
                });
              } else {
                this.messageHandler('error', 'Enter publication name', '');
              }
            } // FOR AUTHOR

          }, {
            key: "getAllAuthors",
            value: function getAllAuthors() {
              var _this27 = this;

              this.auth.showLoader();
              this.masterService.getAllAuthors().subscribe(function (response) {
                var res;
                res = response;

                _this27.auth.hideLoader();

                if (res.response != null) {
                  _this27.authorList = res.response;
                } else {
                  console.log(res.errorResponse);
                }
              });
            }
          }, {
            key: "addAuthor",
            value: function addAuthor() {
              var _this28 = this;

              if (this.authorName != '' && this.authorName != null) {
                var obj = {
                  "author_name": this.authorName
                };
                this.auth.showLoader();
                this.multiClickDisabled = true;
                this.masterService.addAuthor(obj).subscribe(function (response) {
                  var res;
                  res = response;

                  _this28.auth.hideLoader();

                  _this28.multiClickDisabled = false;

                  if (res.response != null) {
                    _this28.messageHandler('success', 'Author added successfully', '');

                    _this28.authorName = "";

                    _this28.getAllAuthors();
                  } else {
                    if (res.errorResponse[0].errorCode == 700) {
                      _this28.messageHandler('error', 'Author already exists', '');
                    }

                    console.log(res.errorResponse);
                  }
                });
              } else {
                this.messageHandler('error', 'Enter author name', '');
              }
            }
          }, {
            key: "editAuthor",
            value: function editAuthor(author, row_no) {
              if (this.selectedRowForAuthor !== "") {
                //console.log(this.selectedRow);
                document.getElementById(("author_row_dis" + this.selectedRowForAuthor).toString()).style.display = "flex";
                document.getElementById(("author_row_edit" + this.selectedRowForAuthor).toString()).style.display = "none";
              }

              this.selectedRowForAuthor = row_no;
              document.getElementById(("author_row_dis" + row_no).toString()).style.display = "none";
              document.getElementById(("author_row_edit" + row_no).toString()).style.display = "flex";
              this.editAuthorName = author.author_name;
            }
          }, {
            key: "saveAuthor",
            value: function saveAuthor(author_id) {
              var _this29 = this;

              if (this.editAuthorName != '' && this.editAuthorName != null) {
                var obj = {
                  "author_name": this.editAuthorName,
                  "author_id": author_id
                };
                this.auth.showLoader();
                this.masterService.updateAuthor(obj).subscribe(function (response) {
                  var res;
                  res = response;

                  _this29.auth.hideLoader();

                  if (res.response != null) {
                    _this29.messageHandler('success', 'Author updated successfully', '');

                    _this29.editAuthorName = "";

                    _this29.getAllAuthors();
                  } else {
                    console.log(res.errorResponse);
                  }
                });
              } else {
                this.messageHandler('error', 'Enter author name', '');
              }
            } // FOR REFERENCES

          }, {
            key: "getAllReferences",
            value: function getAllReferences() {
              var _this30 = this;

              this.auth.showLoader();
              this.masterService.getAllReferences().subscribe(function (response) {
                var res;
                res = response;

                _this30.auth.hideLoader();

                if (res.response != null) {
                  _this30.referenceList = res.response;
                } else {
                  console.log(res.errorResponse);
                }
              });
            }
          }, {
            key: "addReference",
            value: function addReference() {
              var _this31 = this;

              if (this.referenceName != '' && this.referenceName != null) {
                var obj = {
                  "reference_name": this.referenceName
                };
                this.auth.showLoader();
                this.multiClickDisabled = true;
                this.masterService.addReference(obj).subscribe(function (response) {
                  var res;
                  res = response;

                  _this31.auth.hideLoader();

                  _this31.multiClickDisabled = false;

                  if (res.response != null) {
                    _this31.messageHandler('success', 'Reference added successfully', '');

                    _this31.referenceName = "";

                    _this31.getAllReferences();
                  } else {
                    if (res.errorResponse[0].errorCode == 700) {
                      _this31.messageHandler('error', 'Reference already exists', '');
                    }

                    console.log(res.errorResponse);
                  }
                });
              } else {
                this.messageHandler('error', 'Enter reference name', '');
              }
            }
          }, {
            key: "editReference",
            value: function editReference(reference, row_no) {
              if (this.selectedRowForReference !== "") {
                //console.log(this.selectedRow);
                document.getElementById(("reference_row_dis" + this.selectedRowForReference).toString()).style.display = "flex";
                document.getElementById(("reference_row_edit" + this.selectedRowForReference).toString()).style.display = "none";
              }

              this.selectedRowForReference = row_no;
              document.getElementById(("reference_row_dis" + row_no).toString()).style.display = "none";
              document.getElementById(("reference_row_edit" + row_no).toString()).style.display = "flex";
              this.editReferenceName = reference.reference_name;
            }
          }, {
            key: "saveReference",
            value: function saveReference(reference_id) {
              var _this32 = this;

              if (this.editReferenceName != '' && this.editReferenceName != null) {
                var obj = {
                  "reference_name": this.editReferenceName,
                  "reference_id": reference_id
                };
                this.auth.showLoader();
                this.masterService.updateReference(obj).subscribe(function (response) {
                  var res;
                  res = response;

                  _this32.auth.hideLoader();

                  if (res.response != null) {
                    _this32.messageHandler('success', 'Reference updated successfully', '');

                    _this32.editReferenceName = "";

                    _this32.getAllReferences();
                  } else {
                    console.log(res.errorResponse);
                  }
                });
              } else {
                this.messageHandler('error', 'Enter reference name', '');
              }
            } // For Language

          }, {
            key: "getAllLanguages",
            value: function getAllLanguages() {
              var _this33 = this;

              this.auth.showLoader();
              this.masterService.getAllLanguages().subscribe(function (response) {
                var res;
                res = response;

                if (res.response != null) {
                  _this33.auth.hideLoader();

                  _this33.languageList = res.response;
                } else {
                  _this33.auth.hideLoader();

                  console.log(res.errorResponse);
                }
              });
            }
          }, {
            key: "addLanguage",
            value: function addLanguage() {
              var _this34 = this;

              if (this.languageName != '' && this.languageName != null) {
                var obj = {
                  "language_name": this.languageName
                };
                this.auth.showLoader();
                this.multiClickDisabled = true;
                this.masterService.addLanguage(obj).subscribe(function (response) {
                  var res;
                  res = response;
                  _this34.multiClickDisabled = false;

                  if (res.response != null) {
                    _this34.auth.hideLoader();

                    _this34.messageHandler('success', 'Language added successfully', '');

                    _this34.languageName = "";

                    _this34.getAllLanguages();
                  } else {
                    _this34.auth.hideLoader();

                    if (res.errorResponse[0].errorCode == 700) {
                      _this34.messageHandler('error', 'Language already exists', '');
                    }

                    console.log(res.errorResponse);
                  }
                });
              } else {
                this.messageHandler('error', 'Enter language name', '');
              }
            }
          }, {
            key: "editLanguage",
            value: function editLanguage(language, row_no) {
              if (this.selectedRowForLanguage !== "") {
                //console.log(this.selectedRow);
                document.getElementById(("language_row_dis" + this.selectedRowForLanguage).toString()).style.display = "flex";
                document.getElementById(("language_row_edit" + this.selectedRowForLanguage).toString()).style.display = "none";
              }

              this.selectedRowForLanguage = row_no;
              document.getElementById(("language_row_dis" + row_no).toString()).style.display = "none";
              document.getElementById(("language_row_edit" + row_no).toString()).style.display = "flex";
              this.editLanguageName = language.language_name;
            }
          }, {
            key: "saveLanguage",
            value: function saveLanguage(language_id) {
              var _this35 = this;

              if (this.editLanguageName != '' && this.editLanguageName != null) {
                var obj = {
                  "language_name": this.editLanguageName,
                  "language_id": language_id
                };
                this.auth.showLoader();
                this.masterService.updateLanguage(obj).subscribe(function (response) {
                  var res;
                  res = response;

                  if (res.response != null) {
                    _this35.auth.hideLoader();

                    _this35.messageHandler('success', 'Language updated successfully', '');

                    _this35.editLanguageName = "";

                    _this35.getAllLanguages();
                  } else {
                    _this35.auth.hideLoader();

                    console.log(res.errorResponse);
                  }
                });
              } else {
                this.messageHandler('error', 'Enter language name', '');
              }
            }
          }, {
            key: "delete",
            value: function _delete(id, key_name) {
              var _this36 = this;

              var name = key_name.charAt(0).toUpperCase() + key_name.slice(1);
              this.auth.showLoader();
              this.masterService["delete"](id, key_name).subscribe(function (response) {
                var res;
                res = response;

                if (res.response != null) {
                  _this36.auth.hideLoader();

                  _this36.messageHandler('success', name + ' deleted successfully', '');

                  if (key_name.includes('category')) {
                    _this36.categoryName = "";
                    _this36.subcategoryName = "";

                    _this36.getAllCategory();
                  }

                  if (key_name.includes('subject')) {
                    _this36.subjectName = "";

                    _this36.getAllSubjects();
                  }

                  if (key_name.includes('publication')) {
                    _this36.publicationName = "";

                    _this36.getAllPublications();
                  }

                  if (key_name.includes('author')) {
                    _this36.authorName = "";

                    _this36.getAllAuthors();
                  }

                  if (key_name.includes('reference')) {
                    _this36.referenceName = "";

                    _this36.getAllReferences();
                  }

                  if (key_name.includes('language')) {
                    _this36.languageName = "";

                    _this36.getAllLanguages();
                  }
                } else if (res.errorResponse[0].errorCode == 3000) {
                  _this36.messageHandler('error', name + ' is linked with data and cannot be deleted', '');

                  _this36.auth.hideLoader();
                } else {
                  _this36.auth.hideLoader();

                  console.log(res.errorResponse);
                }
              });
            }
          }, {
            key: "messageHandler",
            value: function messageHandler(type, title, body) {
              var obj = {
                type: type,
                title: title,
                body: body
              };
              this.appC.popToast(obj);
            }
          }]);

          return MastersComponent;
        }();

        MastersComponent.ctorParameters = function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"]
          }, {
            type: _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonServiceFactory"]
          }, {
            type: _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
          }, {
            type: _services_library_master_masters_service__WEBPACK_IMPORTED_MODULE_5__["MastersService"]
          }];
        };

        MastersComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
          selector: 'app-masters',
          template: __importDefault(__webpack_require__(
          /*! raw-loader!./masters.component.html */
          "./node_modules/raw-loader/dist/cjs.js!./src/app/components/library-management/masters/masters.component.html"))["default"],
          styles: [__importDefault(__webpack_require__(
          /*! ./masters.component.scss */
          "./src/app/components/library-management/masters/masters.component.scss"))["default"]]
        }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"], _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonServiceFactory"], _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _services_library_master_masters_service__WEBPACK_IMPORTED_MODULE_5__["MastersService"]])], MastersComponent);
        return MastersComponent;
      }();
      /***/

    },

    /***/
    "./src/app/components/library-management/return-book/return-book.component.scss":
    /*!**************************************************************************************!*\
      !*** ./src/app/components/library-management/return-book/return-book.component.scss ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsLibraryManagementReturnBookReturnBookComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".search_bar_container {\n  position: relative;\n  margin-left: 3%;\n}\n\n.search_bar_container .search_box {\n  height: 35px;\n  width: 420px;\n  border: 1px solid #dcdcdc;\n  background: white;\n  border-radius: 4px;\n  padding-right: 18px;\n  padding-left: 32px;\n}\n\n.search_bar_container .fa-search {\n  position: absolute;\n  left: 1px;\n  top: 1px;\n  padding: 9px;\n  color: #9b9b9b;\n  background: white;\n  border-radius: 4px;\n}\n\n.search_bar_container .fa-times {\n  position: absolute;\n  left: 364px;\n  top: 8px;\n  background: white;\n  cursor: pointer;\n  padding-left: 10px;\n  color: #757575;\n  padding-top: 2px;\n  padding-bottom: 4px;\n}\n\n.search_bar_container .fa-sort-desc {\n  position: absolute;\n  left: 385px;\n  top: 8px;\n  background: white;\n  cursor: pointer;\n  padding-left: 10px;\n  padding-bottom: 5px;\n}\n\n.search_bar_container span {\n  font-family: 'Nanum Pen Script';\n  font-size: 18px;\n  margin-left: 10px;\n}\n\n.search_box_filter_container {\n  margin-left: 3%;\n  width: 420px;\n  border-radius: 4px;\n  background: white;\n  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.27);\n  margin-top: 4px;\n  display: flex;\n  flex-direction: column;\n  padding: 16px 26px;\n  position: fixed;\n}\n\n.search_box_filter_container .filter_item {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n\n.search_box_filter_container .filter_item .label_container {\n  width: 25%;\n  color: #3a3a3a;\n  text-align: left;\n  position: relative;\n}\n\n.search_box_filter_container .filter_item .label_container span {\n  position: absolute;\n  top: 5px;\n  font-size: 12px;\n}\n\n.search_box_filter_container .filter_item .input_container {\n  width: 70%;\n}\n\n.search_box_filter_container .filter_item .input_container input {\n  border-bottom: 1px solid #9b9b9b;\n  padding: 10px;\n  padding-bottom: 3px;\n  padding-left: 0px;\n  width: 100%;\n  color: #3a3a3a;\n  font-size: 12px;\n  line-height: 1.36;\n  letter-spacing: normal;\n  font-weight: normal;\n}\n\n.search_box_filter_container .filter_item .input_container ::-moz-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #cfcfcf;\n}\n\n.search_box_filter_container .filter_item .input_container :-ms-input-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #cfcfcf;\n}\n\n.search_box_filter_container .filter_item .input_container ::placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #cfcfcf;\n}\n\n.search_box_filter_container .filter_item .input_container select {\n  border-bottom: 1px solid #9b9b9b;\n  padding-bottom: 3px;\n  padding-left: 0px;\n  width: 100%;\n  color: #3a3a3a;\n  font-size: 12px;\n  line-height: 1.36;\n  letter-spacing: normal;\n  font-weight: normal;\n}\n\n.search_box_filter_container .filter_item .input_container select option {\n  color: #3a3a3a;\n}\n\n.search_box_filter_container .filter_item .input_container select option:first-child {\n  color: #cfcfcf !important;\n}\n\n.search_box_filter_container .filter_item .input_container input:focus {\n  border-bottom: 1px solid #1283f4;\n}\n\n.search_box_filter_container .filter_item .input_container select:focus {\n  border-bottom: 1px solid #1283f4;\n}\n\n.search_box_filter_container .action_btn_container {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 10px;\n}\n\n.search_box_filter_container .action_btn_container .reset_btn {\n  margin-right: 10px;\n  padding: 6px 15px;\n  border-radius: 4px;\n  border: 1px solid #585574;\n  color: #585574;\n  text-align: center;\n  background: white;\n}\n\n.search_box_filter_container .action_btn_container .search_btn {\n  padding: 6px 15px;\n  border-radius: 4px;\n  border: 1px solid #1283f4;\n  color: white;\n  background: #1283f4;\n  text-align: center;\n}\n\n.suggestions_container {\n  background: white;\n  border-radius: 4px;\n  height: 200px;\n  max-height: 200px;\n  min-height: 200px;\n  overflow-y: auto;\n  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.27);\n  display: flex;\n  flex-direction: column;\n  margin-left: 3%;\n  width: 420px;\n  margin-top: 0px;\n  position: fixed;\n}\n\n.suggestions_container .suggestion {\n  padding: 10px;\n}\n\n.suggestions_container .suggestion .suggestion_item {\n  display: flex;\n  flex-direction: row;\n  margin-bottom: 10px;\n  cursor: pointer;\n}\n\n.suggestions_container .suggestion .suggestion_item .img_container {\n  width: 10%;\n  padding: 6px;\n}\n\n.suggestions_container .suggestion .suggestion_item .book_details {\n  display: flex;\n  flex-direction: column;\n}\n\n.suggestions_container .suggestion .suggestion_item .book_details .name_container {\n  color: #585574;\n  font-size: 12px;\n}\n\n.suggestions_container .suggestion .suggestion_item .book_details .book_more_info {\n  color: #9b9b9b;\n  display: flex;\n  flex-direction: row;\n  font-size: 12px;\n  margin-top: 5px;\n}\n\nhr {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  border: 0;\n  border-top: 1px solid #eee;\n  width: 94%;\n  margin-left: 3%;\n}\n\n.widgetDatepicker {\n  position: absolute;\n  margin-left: 10%;\n  width: 1px;\n  visibility: hidden;\n  opacity: 0;\n}\n\n.bsDatepicker {\n  padding: 5px;\n  width: 100%;\n  position: absolute;\n  left: 80px;\n}\n\n.illustartion_container {\n  width: 100%;\n}\n\n.illustartion_container img {\n  max-height: 70%;\n  max-width: 27%;\n  margin-left: 30%;\n}\n\n.search_result_container {\n  display: flex;\n  flex-direction: column;\n  width: 94%;\n  margin-left: 3%;\n}\n\n.search_result_container .search_result_item {\n  width: 100%;\n  margin-bottom: 10px;\n  border-radius: 6px;\n  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);\n  background: white;\n}\n\n.search_result_container .search_result_item .sub_item_1_container {\n  display: flex;\n  flex-direction: row;\n  padding: 10px;\n  border-bottom: 1px solid #DDDDDD;\n}\n\n.search_result_container .search_result_item .sub_item_1_container .sub_item1 {\n  width: 32%;\n  display: flex;\n  flex-direction: row;\n}\n\n.search_result_container .search_result_item .sub_item_1_container .sub_item2 {\n  width: 18%;\n  display: flex;\n  flex-direction: row;\n}\n\n.search_result_container .search_result_item .sub_item_1_container .sub_item3 {\n  width: 10%;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n}\n\n.search_result_container .search_result_item .sub_item_1_container .more_info {\n  font-size: 12px;\n  font-style: normal;\n  text-align: left;\n  color: #585574;\n}\n\n.search_result_container .search_result_item .sub_item_1_container .issue_span {\n  background: #dfefff;\n  padding: 5px 10px;\n  border-radius: 4px;\n  border: 1px solid #1984f6;\n  height: 27px;\n}\n\n.search_result_container .search_result_item .sub_item_1_container .overdue_span {\n  background: #ffdfca;\n  padding: 5px 10px;\n  border-radius: 4px;\n  border: 1px solid #ff6600;\n  height: 27px;\n}\n\n.search_result_container .search_result_item .sub_item_1_container .book_icon {\n  width: 30px;\n  height: 30px;\n}\n\n.search_result_container .search_result_item .sub_item_1_container .book_name_container {\n  display: flex;\n  flex-direction: column;\n  margin-left: 5px;\n}\n\n.search_result_container .search_result_item .sub_item_1_container .book_name_container .title {\n  font-size: 12px;\n  font-weight: normal;\n  font-style: normal;\n  text-align: left;\n  color: #9b9b9b;\n}\n\n.search_result_container .search_result_item .sub_item_1_container .book_name_container .book_name {\n  font-size: 14px;\n  font-weight: 600;\n  font-style: normal;\n  text-align: left;\n  color: #585574;\n}\n\n.search_result_container .search_result_item .sub_item_2_container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.search_result_container .search_result_item .sub_item_2_container .item, .search_result_container .search_result_item .sub_item_2_container .item_2 {\n  display: flex;\n  flex-direction: row;\n  padding: 10px;\n  width: 80%;\n}\n\n.search_result_container .search_result_item .sub_item_2_container .item_2 {\n  width: 20%;\n  display: flex;\n  justify-content: flex-end;\n}\n\n.search_result_container .search_result_item .sub_item_2_container .sub_item3 {\n  width: 20%;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n}\n\n.search_result_container .search_result_item .sub_item_2_container .return_btn {\n  background: #1984f6;\n  border-radius: 4px;\n  color: white;\n  padding: 10px 25px;\n  font-weight: 600;\n}\n\n.search_result_container .search_result_item .sub_item_2_container .more_info {\n  font-size: 12px;\n  font-style: normal;\n  text-align: left;\n  color: #585574;\n}\n\n.search_result_container .search_result_item .sub_item_2_container .book_name_container {\n  display: flex;\n  flex-direction: column;\n  margin-left: 5px;\n}\n\n.search_result_container .search_result_item .sub_item_2_container .book_name_container .title {\n  font-size: 12px;\n  font-weight: normal;\n  font-style: normal;\n  text-align: left;\n  color: #9b9b9b;\n}\n\n.search_result_container .search_result_item .sub_item_2_container .book_name_container .book_name {\n  font-size: 14px;\n  font-weight: 600;\n  font-style: normal;\n  text-align: left;\n  color: #585574;\n}\n\n.return_book_pop_up_container {\n  position: fixed;\n  top: 20%;\n  left: 25%;\n  right: 25%;\n  width: 50%;\n  background: white;\n  border-radius: 4px;\n  display: flex;\n  flex-direction: column;\n  z-index: 100;\n}\n\n.return_book_pop_up_container .header_container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 15px 20px;\n  background: #f8f8f8;\n  border-bottom: 1px solid #dddddd;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n}\n\n.return_book_pop_up_container .header_container span {\n  font-weight: 600;\n  color: #585574;\n  font-size: 14px;\n}\n\n.return_book_pop_up_container .header_container .fa-times {\n  color: #707070;\n  cursor: pointer;\n}\n\n.return_book_pop_up_container .details_container {\n  padding: 20px;\n  padding-top: 10px;\n  display: flex;\n  flex-direction: column;\n}\n\n.return_book_pop_up_container .details_container .book_info_container {\n  display: flex;\n  flex-direction: row;\n  padding: 10px 0px;\n  border-bottom: 1px solid #dddddd;\n  width: 100%;\n  justify-content: flex-start;\n}\n\n.return_book_pop_up_container .details_container .book_info_container .book_info_item1 {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  width: 40%;\n}\n\n.return_book_pop_up_container .details_container .book_info_container .book_info_item2 {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  width: 25%;\n}\n\n.return_book_pop_up_container .details_container .book_info_container .book_icon {\n  width: 30px;\n  height: 30px;\n}\n\n.return_book_pop_up_container .details_container .book_info_container .book_name_container {\n  display: flex;\n  flex-direction: column;\n  margin-left: 5px;\n}\n\n.return_book_pop_up_container .details_container .book_info_container .book_name_container .title {\n  font-size: 12px;\n  font-weight: normal;\n  font-style: normal;\n  text-align: left;\n  color: #9b9b9b;\n}\n\n.return_book_pop_up_container .details_container .book_info_container .book_name_container .book_name {\n  font-size: 14px;\n  font-weight: 600;\n  font-style: normal;\n  text-align: left;\n  color: #585574;\n}\n\n.return_book_pop_up_container .details_container .book_info_container .book_name_container .more_info {\n  font-size: 12px;\n  font-style: normal;\n  text-align: left;\n  color: #585574;\n  font-weight: 600;\n}\n\n.return_book_pop_up_container .details_container .book_status_container {\n  display: flex;\n  flex-direction: row;\n  padding: 10px 0px;\n  border-bottom: 1px solid #dddddd;\n  width: 100%;\n  justify-content: flex-start;\n  color: #9b9b9b;\n  font-size: 12px;\n}\n\n.return_book_pop_up_container .details_container .book_status_container .checkbox_container {\n  width: 25%;\n  margin-left: 10px;\n  margin-bottom: 0px;\n}\n\n.return_book_pop_up_container .details_container .book_status_container .field-checkbox-wrapper .form-checkbox + label {\n  vertical-align: middle;\n  font-size: 12px;\n  display: inline-block;\n}\n\n.return_book_pop_up_container .details_container .book_status_container .field-checkbox-wrapper .form-checkbox + label:after {\n  content: '';\n  width: 16px;\n  height: 16px;\n  border: 2px solid #ccc;\n  border-radius: 2px;\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n\n.return_book_pop_up_container .details_container .book_status_container .field-checkbox-wrapper .form-checkbox:checked + label:after {\n  border: 2px solid #0084f6;\n}\n\n.return_book_pop_up_container .details_container .book_status_container .field-checkbox-wrapper .form-checkbox + label:before {\n  width: 1px;\n  height: 1px;\n  left: 8px;\n  top: 9px;\n  position: absolute;\n  content: '';\n  border-top: 0;\n  border-right: 0;\n  border-left: 2px solid transparent;\n  border-bottom: 2px solid transparent;\n  transform: rotate(-45deg);\n}\n\n.return_book_pop_up_container .details_container .book_status_container .field-checkbox-wrapper .form-checkbox:checked + label:before {\n  border-left: 2px solid #0084f6;\n  border-bottom: 2px solid #0084f6;\n  width: 12px;\n  height: 5px;\n  left: 2px;\n  top: 5px;\n}\n\n.return_book_pop_up_container .details_container .book_status_container .field-checkbox-wrapper .form-checkbox:checked + label {\n  color: #0084f6;\n}\n\n.return_book_pop_up_container .details_container .return_info_container {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  justify-content: flex-start;\n  padding: 10px 0px;\n  border-bottom: 1px solid #dddddd;\n  color: #9b9b9b;\n}\n\n.return_book_pop_up_container .details_container .return_info_container .return_info_item {\n  display: flex;\n  flex-direction: column;\n  width: 30%;\n  position: relative;\n}\n\n.return_book_pop_up_container .details_container .return_info_container .return_info_item .input_container_for_days {\n  display: flex;\n  flex-direction: row;\n}\n\n.return_book_pop_up_container .details_container .return_info_container .return_info_item .input_container_for_days span {\n  color: #585574;\n  margin-left: 5px;\n  margin-top: 10px;\n}\n\n.return_book_pop_up_container .details_container .return_info_container .return_info_item span {\n  color: #9b9b9b;\n  font-size: 12px;\n}\n\n.return_book_pop_up_container .details_container .return_info_container .return_info_item input {\n  border-radius: 4px;\n  border: 1px solid rgba(0, 0, 0, 0.3);\n  padding: 5px;\n  width: 60%;\n  margin-top: 5px;\n  color: #585574;\n}\n\n.return_book_pop_up_container .details_container .return_info_container .return_info_item .fa-calendar {\n  position: absolute;\n  top: 26px;\n  right: 45%;\n}\n\n.return_book_pop_up_container .details_container .lost_book_container {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  justify-content: flex-start;\n  padding: 10px 0px;\n  border-bottom: 1px solid #dddddd;\n  color: #9b9b9b;\n}\n\n.return_book_pop_up_container .details_container .lost_book_container .lost_book_item {\n  display: flex;\n  flex-direction: column;\n  width: 30%;\n  position: relative;\n}\n\n.return_book_pop_up_container .details_container .lost_book_container .lost_book_item .input_container_for_days {\n  display: flex;\n  flex-direction: row;\n}\n\n.return_book_pop_up_container .details_container .lost_book_container .lost_book_item .input_container_for_days span {\n  color: #585574;\n  margin-left: 5px;\n  margin-top: 10px;\n}\n\n.return_book_pop_up_container .details_container .lost_book_container .lost_book_item span {\n  color: #9b9b9b;\n  font-size: 12px;\n}\n\n.return_book_pop_up_container .details_container .lost_book_container .lost_book_item input {\n  border-radius: 4px;\n  border: 1px solid rgba(0, 0, 0, 0.3);\n  padding: 5px;\n  width: 60%;\n  margin-top: 5px;\n  color: #585574;\n}\n\n.return_book_pop_up_container .details_container .lost_book_container .lost_book_item .fa-calendar {\n  position: absolute;\n  top: 26px;\n  right: 45%;\n}\n\n.return_book_pop_up_container .details_container .remarks_container {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  width: 100%;\n  padding: 10px 0px;\n  color: #9b9b9b;\n}\n\n.return_book_pop_up_container .details_container .remarks_container span {\n  font-size: 12px;\n}\n\n.return_book_pop_up_container .details_container .remarks_container .remarks_textarea {\n  width: 100%;\n  height: 60px;\n  border-radius: 4px;\n  border: solid 1px rgba(0, 0, 0, 0.3);\n  margin-top: 5px;\n  padding: 5px;\n  color: black;\n}\n\n.return_book_pop_up_container .details_container .remarks_container ::-moz-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: rgba(0, 0, 0, 0.3);\n}\n\n.return_book_pop_up_container .details_container .remarks_container :-ms-input-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: rgba(0, 0, 0, 0.3);\n}\n\n.return_book_pop_up_container .details_container .remarks_container ::placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: rgba(0, 0, 0, 0.3);\n}\n\n.return_book_pop_up_container .details_container .notify_container {\n  display: flex;\n  flex-direction: row;\n  padding: 10px 0px;\n}\n\n.return_book_pop_up_container .details_container .notify_container .checkbox_container {\n  width: 30%;\n  margin-top: 10px;\n  color: #9b9b9b;\n  font-size: 12px;\n}\n\n.return_book_pop_up_container .details_container .notify_container .field-checkbox-wrapper .form-checkbox + label {\n  vertical-align: middle;\n  font-size: 12px;\n  display: inline-block;\n}\n\n.return_book_pop_up_container .details_container .notify_container .field-checkbox-wrapper .form-checkbox + label:after {\n  content: '';\n  width: 16px;\n  height: 16px;\n  border: 2px solid #ccc;\n  border-radius: 2px;\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n\n.return_book_pop_up_container .details_container .notify_container .field-checkbox-wrapper .form-checkbox:checked + label:after {\n  border: 2px solid #0084f6;\n}\n\n.return_book_pop_up_container .details_container .notify_container .field-checkbox-wrapper .form-checkbox + label:before {\n  width: 1px;\n  height: 1px;\n  left: 8px;\n  top: 9px;\n  position: absolute;\n  content: '';\n  border-top: 0;\n  border-right: 0;\n  border-left: 2px solid transparent;\n  border-bottom: 2px solid transparent;\n  transform: rotate(-45deg);\n}\n\n.return_book_pop_up_container .details_container .notify_container .field-checkbox-wrapper .form-checkbox:checked + label:before {\n  border-left: 2px solid #0084f6;\n  border-bottom: 2px solid #0084f6;\n  width: 12px;\n  height: 5px;\n  left: 2px;\n  top: 5px;\n}\n\n.return_book_pop_up_container .details_container .notify_container .field-checkbox-wrapper .form-checkbox:checked + label {\n  color: #0084f6;\n}\n\n.return_book_pop_up_container .details_container .action_btn_container {\n  display: flex;\n  justify-content: flex-end;\n  padding: 10px;\n}\n\n.return_book_pop_up_container .details_container .action_btn_container .cancel_btn {\n  margin-right: 10px;\n  padding: 6px 15px;\n  border-radius: 4px;\n  border: solid 1px #1283f4;\n  color: #1984f6;\n  text-align: center;\n  background: white;\n}\n\n.return_book_pop_up_container .details_container .action_btn_container .return_btn {\n  padding: 6px 15px;\n  border-radius: 4px;\n  border: 1px solid #1283f4;\n  color: white;\n  background: #1283f4;\n  text-align: center;\n}\n\ninput[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\ninput, textarea {\n  font-size: 12px;\n}\n\n.black-bg {\n  background: rgba(10, 10, 10, 0.3);\n  position: fixed;\n  top: 0px;\n  height: 100%;\n  left: 0px;\n  z-index: 1;\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9saWJyYXJ5LW1hbmFnZW1lbnQvcmV0dXJuLWJvb2svcmV0dXJuLWJvb2suY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtBQURqQjs7QUFEQTtFQUlJLFlBQVk7RUFDWixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUN0Qjs7QUFYQTtFQWFJLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsUUFBUTtFQUNSLFlBQVk7RUFDWixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUV0Qjs7QUFyQkE7RUFzQkksa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxRQUFRO0VBQ1IsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFHdkI7O0FBakNBO0VBaUNJLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsUUFBUTtFQUNSLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUl2Qjs7QUEzQ0E7RUEyQ0ksK0JBQStCO0VBQy9CLGVBQWU7RUFDZixpQkFBaUI7QUFJckI7O0FBQUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsNENBQTRDO0VBQzVDLGVBQWU7RUFDZixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixlQUFlO0FBR2pCOztBQWJBO0VBWUksYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUt2Qjs7QUFyQkE7RUFrQk0sVUFBVTtFQUNWLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBT3hCOztBQTVCQTtFQXVCUSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNS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Q1YsV0FBVztBQTRGYiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGlicmFyeS1tYW5hZ2VtZW50L3JldHVybi1ib29rL3JldHVybi1ib29rLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gIFNFQVJDSCBCQVIgQU5EIERST1BET1dOXG5cbi5zZWFyY2hfYmFyX2NvbnRhaW5lcntcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tbGVmdDogMyU7XG4gIC5zZWFyY2hfYm94e1xuICAgIGhlaWdodDogMzVweDtcbiAgICB3aWR0aDogNDIwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RjZGNkYztcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgcGFkZGluZy1yaWdodDogMThweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDMycHg7XG4gIH1cbiAgLmZhLXNlYXJjaHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMXB4O1xuICAgIHRvcDogMXB4O1xuICAgIHBhZGRpbmc6IDlweDtcbiAgICBjb2xvcjogIzliOWI5YjtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIH1cbiAgLmZhLXRpbWVze1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAzNjRweDtcbiAgICB0b3A6IDhweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIGNvbG9yOiAjNzU3NTc1O1xuICAgIHBhZGRpbmctdG9wOiAycHg7XG4gICAgcGFkZGluZy1ib3R0b206IDRweDtcbiAgfVxuICAuZmEtc29ydC1kZXNje1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAzODVweDtcbiAgICB0b3A6IDhweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIH1cblxuICBzcGFue1xuICAgIGZvbnQtZmFtaWx5OiAnTmFudW0gUGVuIFNjcmlwdCc7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB9XG59XG5cbi5zZWFyY2hfYm94X2ZpbHRlcl9jb250YWluZXJ7XG4gIG1hcmdpbi1sZWZ0OiAzJTtcbiAgd2lkdGg6IDQyMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3gtc2hhZG93OiAwIDNweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjI3KTtcbiAgbWFyZ2luLXRvcDogNHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAxNnB4IDI2cHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgLmZpbHRlcl9pdGVte1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAubGFiZWxfY29udGFpbmVye1xuICAgICAgd2lkdGg6IDI1JTtcbiAgICAgIGNvbG9yOiAjM2EzYTNhO1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHNwYW57XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA1cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIH1cbiAgICB9XG4gICAgLmlucHV0X2NvbnRhaW5lcntcbiAgICAgIHdpZHRoOiA3MCU7XG4gICAgICBpbnB1dHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM5YjliOWI7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAzcHg7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgY29sb3I6ICMzYTNhM2E7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMzY7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICB9XG4gICAgICA6OnBsYWNlaG9sZGVyIHsgLyogQ2hyb21lLCBGaXJlZm94LCBPcGVyYSwgU2FmYXJpIDEwLjErICovXG4gICAgICAgIGNvbG9yOiAjY2ZjZmNmO1xuICAgICAgfVxuICAgICAgc2VsZWN0e1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzliOWI5YjtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDNweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBjb2xvcjogIzNhM2EzYTtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMS4zNjtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgIH1cbiAgICAgIHNlbGVjdCBvcHRpb24geyBjb2xvcjogIzNhM2EzYTsgfVxuICAgICAgc2VsZWN0IG9wdGlvbjpmaXJzdC1jaGlsZCB7XG4gICAgICAgIGNvbG9yOiAjY2ZjZmNmICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgICBpbnB1dDpmb2N1cyB7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzEyODNmNDtcbiAgICAgIH1cbiAgICAgIHNlbGVjdDpmb2N1cyB7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzEyODNmNDtcbiAgICAgIH1cblxuICAgIH1cbiAgfVxuXG4gIC5hY3Rpb25fYnRuX2NvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAucmVzZXRfYnRue1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgcGFkZGluZzogNnB4IDE1cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjNTg1NTc0O1xuICAgICAgY29sb3I6ICM1ODU1NzQ7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICB9XG4gICAgLnNlYXJjaF9idG57XG4gICAgICBwYWRkaW5nOiA2cHggMTVweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMxMjgzZjQ7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBiYWNrZ3JvdW5kOiAjMTI4M2Y0O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgfVxuXG59XG5cbi5zdWdnZXN0aW9uc19jb250YWluZXJ7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xuICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgYm94LXNoYWRvdzogMCAzcHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4yNyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbi1sZWZ0OiAzJTtcbiAgd2lkdGg6IDQyMHB4O1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgLnN1Z2dlc3Rpb257XG4gICAgcGFkZGluZzogMTBweDtcbiAgICAuc3VnZ2VzdGlvbl9pdGVte1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgLmltZ19jb250YWluZXJ7XG4gICAgICAgIHdpZHRoOiAxMCU7XG4gICAgICAgIHBhZGRpbmc6IDZweDtcbiAgICAgIH1cbiAgICAgIC5ib29rX2RldGFpbHN7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIC5uYW1lX2NvbnRhaW5lcntcbiAgICAgICAgICBjb2xvcjogIzU4NTU3NDtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIH1cbiAgICAgICAgLmJvb2tfbW9yZV9pbmZve1xuICAgICAgICAgIGNvbG9yOiAjOWI5YjliO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmhyIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2VlZTtcbiAgd2lkdGg6IDk0JTtcbiAgbWFyZ2luLWxlZnQ6IDMlO1xufVxuXG4ud2lkZ2V0RGF0ZXBpY2tlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgd2lkdGg6IDFweDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBvcGFjaXR5OiAwO1xufVxuLmJzRGF0ZXBpY2tlciB7XG4gIHBhZGRpbmc6IDVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogODBweFxufVxuXG4uaWxsdXN0YXJ0aW9uX2NvbnRhaW5lcntcbiAgd2lkdGg6IDEwMCU7XG4gIGltZ3tcbiAgICBtYXgtaGVpZ2h0OiA3MCU7XG4gICAgbWF4LXdpZHRoOiAyNyU7XG4gICAgbWFyZ2luLWxlZnQ6IDMwJTtcbiAgfVxufVxuXG4uc2VhcmNoX3Jlc3VsdF9jb250YWluZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiA5NCU7XG4gIG1hcmdpbi1sZWZ0OiAzJTtcbiAgLnNlYXJjaF9yZXN1bHRfaXRlbXtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBib3gtc2hhZG93OiAwIDNweCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIC5zdWJfaXRlbV8xX2NvbnRhaW5lcntcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjREREREREO1xuICAgICAgLnN1Yl9pdGVtMXtcbiAgICAgICAgd2lkdGg6IDMyJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIH1cbiAgICAgIC5zdWJfaXRlbTJ7XG4gICAgICAgIHdpZHRoOiAxOCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICB9XG4gICAgICAuc3ViX2l0ZW0ze1xuICAgICAgICB3aWR0aDogMTAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgfVxuICAgICAgLm1vcmVfaW5mb3tcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIGNvbG9yOiAjNTg1NTc0O1xuICAgICAgfVxuICAgICAgLmlzc3VlX3NwYW57XG4gICAgICAgIGJhY2tncm91bmQ6ICNkZmVmZmY7XG4gICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMxOTg0ZjY7XG4gICAgICAgIGhlaWdodDogMjdweDtcbiAgICAgIH1cbiAgICAgIC5vdmVyZHVlX3NwYW57XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmRmY2E7XG4gICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZjY2MDA7XG4gICAgICAgIGhlaWdodDogMjdweDtcbiAgICAgIH1cbiAgICAgIC5ib29rX2ljb257XG4gICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICB9XG4gICAgICAuYm9va19uYW1lX2NvbnRhaW5lcntcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgLnRpdGxle1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgIGNvbG9yOiAjOWI5YjliO1xuICAgICAgICB9XG4gICAgICAgIC5ib29rX25hbWV7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgY29sb3I6ICM1ODU1NzQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLnN1Yl9pdGVtXzJfY29udGFpbmVye1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAuaXRlbSwgLml0ZW1fMntcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgIH1cbiAgICAgIC5pdGVtXzJ7XG4gICAgICAgIHdpZHRoOiAyMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICB9XG4gICAgICAuc3ViX2l0ZW0ze1xuICAgICAgICB3aWR0aDogMjAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICB9XG4gICAgICAucmV0dXJuX2J0bntcbiAgICAgICAgYmFja2dyb3VuZDogIzE5ODRmNjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMjVweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcblxuICAgICAgfVxuICAgICAgLm1vcmVfaW5mb3tcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIGNvbG9yOiAjNTg1NTc0O1xuICAgICAgfVxuICAgICAgLmJvb2tfbmFtZV9jb250YWluZXJ7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICAgIC50aXRsZXtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICBjb2xvcjogIzliOWI5YjtcbiAgICAgICAgfVxuICAgICAgICAuYm9va19uYW1le1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgIGNvbG9yOiAjNTg1NTc0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIFBPUCBVUCAgU0VDVElPTlxuXG4ucmV0dXJuX2Jvb2tfcG9wX3VwX2NvbnRhaW5lcntcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDIwJTtcbiAgbGVmdDogMjUlO1xuICByaWdodDogMjUlO1xuICB3aWR0aDogNTAlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB6LWluZGV4OiAxMDA7XG4gIC5oZWFkZXJfY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZzogMTVweCAyMHB4O1xuICAgIGJhY2tncm91bmQ6ICNmOGY4Zjg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGRkZGQ7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNHB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0cHg7XG4gICAgc3BhbntcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjb2xvcjogIzU4NTU3NDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG4gICAgLmZhLXRpbWVze1xuICAgICAgY29sb3I6ICM3MDcwNzA7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICB9XG4gIC5kZXRhaWxzX2NvbnRhaW5lcntcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAuYm9va19pbmZvX2NvbnRhaW5lcntcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgcGFkZGluZzogMTBweCAwcHg7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZGRkZDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgLmJvb2tfaW5mb19pdGVtMXtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgfVxuICAgICAgLmJvb2tfaW5mb19pdGVtMntcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICB3aWR0aDogMjUlO1xuICAgICAgfVxuICAgICAgLmJvb2tfaWNvbntcbiAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgIH1cbiAgICAgIC5ib29rX25hbWVfY29udGFpbmVye1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgICAudGl0bGV7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgY29sb3I6ICM5YjliOWI7XG4gICAgICAgIH1cbiAgICAgICAgLmJvb2tfbmFtZXtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICBjb2xvcjogIzU4NTU3NDtcbiAgICAgICAgfVxuICAgICAgICAubW9yZV9pbmZve1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICBjb2xvcjogIzU4NTU3NDtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC5ib29rX3N0YXR1c19jb250YWluZXJ7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIHBhZGRpbmc6IDEwcHggMHB4O1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGRkZGQ7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgIGNvbG9yOiAjOWI5YjliO1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgLmNoZWNrYm94X2NvbnRhaW5lcntcbiAgICAgICAgd2lkdGg6IDI1JTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICAgIH1cbiAgICAgIC5maWVsZC1jaGVja2JveC13cmFwcGVyIC5mb3JtLWNoZWNrYm94K2xhYmVsIHtcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB9XG4gICAgICAuZmllbGQtY2hlY2tib3gtd3JhcHBlciAuZm9ybS1jaGVja2JveCtsYWJlbDphZnRlciB7XG4gICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgd2lkdGg6IDE2cHg7XG4gICAgICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNjY2M7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgIH1cbiAgICAgIC5maWVsZC1jaGVja2JveC13cmFwcGVyIC5mb3JtLWNoZWNrYm94OmNoZWNrZWQrbGFiZWw6YWZ0ZXIge1xuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDg0ZjY7XG4gICAgICB9XG4gICAgICAuZmllbGQtY2hlY2tib3gtd3JhcHBlciAuZm9ybS1jaGVja2JveCtsYWJlbDpiZWZvcmUge1xuICAgICAgICAgIHdpZHRoOiAxcHg7XG4gICAgICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICAgICAgbGVmdDogOHB4O1xuICAgICAgICAgIHRvcDogOXB4O1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICBib3JkZXItdG9wOiAwO1xuICAgICAgICAgIGJvcmRlci1yaWdodDogMDtcbiAgICAgICAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgICAgfVxuICAgICAgLmZpZWxkLWNoZWNrYm94LXdyYXBwZXIgLmZvcm0tY2hlY2tib3g6Y2hlY2tlZCtsYWJlbDpiZWZvcmUge1xuICAgICAgICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzAwODRmNjtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzAwODRmNjtcbiAgICAgICAgICB3aWR0aDogMTJweDtcbiAgICAgICAgICBoZWlnaHQ6IDVweDtcbiAgICAgICAgICBsZWZ0OiAycHg7XG4gICAgICAgICAgdG9wOiA1cHg7XG4gICAgICB9XG4gICAgICAuZmllbGQtY2hlY2tib3gtd3JhcHBlciAuZm9ybS1jaGVja2JveDpjaGVja2VkK2xhYmVsIHtcbiAgICAgICAgICBjb2xvcjogIzAwODRmNjtcbiAgICAgIH1cbiAgICB9XG4gICAgLnJldHVybl9pbmZvX2NvbnRhaW5lcntcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkZGRkO1xuICAgICAgY29sb3I6ICM5YjliOWI7XG4gICAgICAucmV0dXJuX2luZm9faXRlbXtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAuaW5wdXRfY29udGFpbmVyX2Zvcl9kYXlze1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICBzcGFue1xuICAgICAgICAgICAgY29sb3I6ICM1ODU1NzQ7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc3BhbntcbiAgICAgICAgICBjb2xvcjogIzliOWI5YjtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIH1cbiAgICAgICAgaW5wdXR7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4zKTtcbiAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgICAgY29sb3I6ICM1ODU1NzQ7XG4gICAgICAgIH1cbiAgICAgICAgLmZhLWNhbGVuZGFye1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDI2cHg7XG4gICAgICAgICAgcmlnaHQ6IDQ1JTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAubG9zdF9ib29rX2NvbnRhaW5lcntcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkZGRkO1xuICAgICAgY29sb3I6ICM5YjliOWI7XG4gICAgICAubG9zdF9ib29rX2l0ZW17XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgLmlucHV0X2NvbnRhaW5lcl9mb3JfZGF5c3tcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgc3BhbntcbiAgICAgICAgICAgIGNvbG9yOiAjNTg1NTc0O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHNwYW57XG4gICAgICAgICAgY29sb3I6ICM5YjliOWI7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICB9XG4gICAgICAgIGlucHV0e1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMyk7XG4gICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgIGNvbG9yOiAjNTg1NTc0O1xuICAgICAgICB9XG4gICAgICAgIC5mYS1jYWxlbmRhcntcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAyNnB4O1xuICAgICAgICAgIHJpZ2h0OiA0NSU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLnJlbWFya3NfY29udGFpbmVye1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHBhZGRpbmc6IDEwcHggMHB4O1xuICAgICAgY29sb3I6ICM5YjliOWI7XG4gICAgICBzcGFue1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICB9XG4gICAgICAucmVtYXJrc190ZXh0YXJlYXtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBib3JkZXI6IHNvbGlkIDFweCByZ2JhKDAsMCwwLDAuMyk7XG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICB9XG4gICAgICA6OnBsYWNlaG9sZGVyIHsgLyogQ2hyb21lLCBGaXJlZm94LCBPcGVyYSwgU2FmYXJpIDEwLjErICovXG4gICAgICAgIGNvbG9yOiByZ2JhKDAsMCwwLDAuMyk7XG4gICAgICB9XG4gICAgfVxuICAgIC5ub3RpZnlfY29udGFpbmVye1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgICAgIC5jaGVja2JveF9jb250YWluZXJ7XG4gICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIGNvbG9yOiAjOWI5YjliO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICB9XG4gICAgICAuZmllbGQtY2hlY2tib3gtd3JhcHBlciAuZm9ybS1jaGVja2JveCtsYWJlbCB7XG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgfVxuICAgICAgLmZpZWxkLWNoZWNrYm94LXdyYXBwZXIgLmZvcm0tY2hlY2tib3grbGFiZWw6YWZ0ZXIge1xuICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgIHdpZHRoOiAxNnB4O1xuICAgICAgICAgIGhlaWdodDogMTZweDtcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjY2NjO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICB9XG4gICAgICAuZmllbGQtY2hlY2tib3gtd3JhcHBlciAuZm9ybS1jaGVja2JveDpjaGVja2VkK2xhYmVsOmFmdGVyIHtcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjMDA4NGY2O1xuICAgICAgfVxuICAgICAgLmZpZWxkLWNoZWNrYm94LXdyYXBwZXIgLmZvcm0tY2hlY2tib3grbGFiZWw6YmVmb3JlIHtcbiAgICAgICAgICB3aWR0aDogMXB4O1xuICAgICAgICAgIGhlaWdodDogMXB4O1xuICAgICAgICAgIGxlZnQ6IDhweDtcbiAgICAgICAgICB0b3A6IDlweDtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgYm9yZGVyLXRvcDogMDtcbiAgICAgICAgICBib3JkZXItcmlnaHQ6IDA7XG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgIH1cbiAgICAgIC5maWVsZC1jaGVja2JveC13cmFwcGVyIC5mb3JtLWNoZWNrYm94OmNoZWNrZWQrbGFiZWw6YmVmb3JlIHtcbiAgICAgICAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICMwMDg0ZjY7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMDg0ZjY7XG4gICAgICAgICAgd2lkdGg6IDEycHg7XG4gICAgICAgICAgaGVpZ2h0OiA1cHg7XG4gICAgICAgICAgbGVmdDogMnB4O1xuICAgICAgICAgIHRvcDogNXB4O1xuICAgICAgfVxuICAgICAgLmZpZWxkLWNoZWNrYm94LXdyYXBwZXIgLmZvcm0tY2hlY2tib3g6Y2hlY2tlZCtsYWJlbCB7XG4gICAgICAgICAgY29sb3I6ICMwMDg0ZjY7XG4gICAgICB9XG5cbiAgICB9XG4gICAgLmFjdGlvbl9idG5fY29udGFpbmVye1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgLmNhbmNlbF9idG57XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgcGFkZGluZzogNnB4IDE1cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggIzEyODNmNDtcbiAgICAgICAgY29sb3I6ICMxOTg0ZjY7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICB9XG4gICAgICAucmV0dXJuX2J0bntcbiAgICAgICAgcGFkZGluZzogNnB4IDE1cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzEyODNmNDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMTI4M2Y0O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcbmlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xufVxuaW5wdXQsIHRleHRhcmVhe1xuICBmb250LXNpemU6IDEycHg7XG59XG4vLyBCbGFjayBCR1xuXG4uYmxhY2stYmd7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTAsMTAsMTAsMC4zKTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBsZWZ0OiAwcHg7XG4gIHotaW5kZXg6IDE7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/components/library-management/return-book/return-book.component.ts":
    /*!************************************************************************************!*\
      !*** ./src/app/components/library-management/return-book/return-book.component.ts ***!
      \************************************************************************************/

    /*! exports provided: ReturnBookComponent */

    /***/
    function srcAppComponentsLibraryManagementReturnBookReturnBookComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReturnBookComponent", function () {
        return ReturnBookComponent;
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


      var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! moment */
      "./node_modules/moment/moment.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../services/authenticator.service */
      "./src/app/services/authenticator.service.ts");
      /* harmony import */


      var _services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../services/common-service */
      "./src/app/services/common-service.ts");
      /* harmony import */


      var _services_library_add_add_book_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../services/library/add/add-book.service */
      "./src/app/services/library/add/add-book.service.ts");
      /* harmony import */


      var _services_library_issue_issue_book_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../services/library/issue/issue-book.service */
      "./src/app/services/library/issue/issue-book.service.ts");
      /* harmony import */


      var _services_library_return_return_book_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../services/library/return/return-book.service */
      "./src/app/services/library/return/return-book.service.ts");

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

      var ReturnBookComponent =
      /** @class */
      function () {
        var ReturnBookComponent = /*#__PURE__*/function () {
          function ReturnBookComponent(router, auth, _commService, appC, addBookService, issueBookService, returnBookService) {
            _classCallCheck(this, ReturnBookComponent);

            this.router = router;
            this.auth = auth;
            this._commService = _commService;
            this.appC = appC;
            this.addBookService = addBookService;
            this.issueBookService = issueBookService;
            this.returnBookService = returnBookService;
            this.filter = false;
            this.searchResult = false;
            this.suggestion = false;
            this.returnBookPopup = false;
            this.lostBook = false;
            this.bookSuggestion = false;
            this.hoverTitle = "";
            this.multiClickDisabled = false;
            this.searchCategoryId = '-1';
            this.searchSubcategoryId = '-1';
            this.searchSubjectId = '-1';
            this.searchPublicationId = '-1';
            this.searchAuthorId = '-1';
            this.searchLangId = '-1';
            this.disableReturnAmt = false;
          }

          _createClass(ReturnBookComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {
              this.tempReturnDate = moment__WEBPACK_IMPORTED_MODULE_2__(new Date()).format("DD MMM YYYY");
              this.tempLostDate = moment__WEBPACK_IMPORTED_MODULE_2__(new Date()).format("DD MMM YYYY");
              this.getAllMasterData();
              this.getInstituteData();
            }
          }, {
            key: "getInstituteData",
            value: function getInstituteData() {
              var _this37 = this;

              this.auth.showLoader();
              this.issueBookService.getInstituteSettingFromServer().subscribe(function (response) {
                _this37.auth.hideLoader();

                var res;
                res = response;
                _this37.perDayFine = res.lib_due_date_fine_per_day;
                console.log(_this37.perDayFine);
              }, function (errorResponse) {
                _this37.auth.hideLoader();

                console.log(errorResponse);
              });
            }
          }, {
            key: "getAllMasterData",
            value: function getAllMasterData() {
              var _this38 = this;

              this.auth.showLoader();
              this.addBookService.getAllMasterData().subscribe(function (response) {
                _this38.auth.hideLoader();

                var res;
                res = response;
                console.log(response);
                var tempCatList = res.response.categories;
                _this38.categoryList = res.response.categories;
                _this38.subjectList = res.response.subjects;
                _this38.publicationList = res.response.publications;
                _this38.authorList = res.response.authors;
                _this38.languageList = res.response.languages;
              }, function (errorResponse) {
                _this38.auth.hideLoader();

                console.log(errorResponse);
              });
            }
          }, {
            key: "getSubCategory",
            value: function getSubCategory(ev) {
              var _this39 = this;

              this.auth.showLoader();
              this.addBookService.getSubCategories(ev).subscribe(function (response) {
                _this39.auth.hideLoader();

                var res;
                res = response;
                console.log(response);
                _this39.subcategoryList = res.response;
              }, function (errorResponse) {
                _this39.auth.hideLoader();

                console.log(errorResponse);
              });
            }
          }, {
            key: "searchInList",
            value: function searchInList(search_string) {
              if (search_string.which <= 90 && search_string.which >= 48 || search_string.which == 8) {
                this.filter = false;
                this.searchResult = false;

                if (this.searchInput != '') {
                  this.suggestionList = "";
                  this.getSearchData();
                }

                if (search_string.which === 13) {
                  this.showSearchResult();
                }
              }

              if (this.searchInput == '' || this.searchInput == null) {
                this.suggestion = false;
                this.filter = false;
              }
            }
          }, {
            key: "showSearchResult",
            value: function showSearchResult() {
              this.bookSuggestion = false;
              this.searchResult = true;
            }
          }, {
            key: "showFilter",
            value: function showFilter() {
              if (this.filter) {
                this.filter = false;
                return;
              } else {
                this.filter = true;
                this.suggestion = false;
                return;
              }
            }
          }, {
            key: "getSearchData",
            value: function getSearchData() {
              var _this40 = this;

              this.auth.showLoader();
              this.returnBookService.getSearchedBooksOrStudents(this.searchInput).subscribe(function (response) {
                var res;
                res = response;

                if (res.response.libraryBookDTOs.length > 0 || res.response.students.length > 0) {
                  if (_this40.searchInput == '' || _this40.searchInput == null) {
                    _this40.suggestion = false;
                    _this40.filter = false;
                  } else {
                    _this40.suggestion = true;
                  }

                  _this40.suggestionList = res.response;

                  _this40.auth.hideLoader();
                }
              });
            }
          }, {
            key: "advanceSearch",
            value: function advanceSearch() {
              var _this41 = this;

              this.filter = false;
              this.suggestion = false;
              var obj = {
                "by": [{
                  "column": "title",
                  "value": this.searchTitle
                }, {
                  "column": "category_id",
                  "value": this.searchCategoryId
                }, {
                  "column": "sub_category_id",
                  "value": this.searchSubcategoryId
                }, {
                  "column": "subject_id",
                  "value": this.searchSubjectId
                }, {
                  "column": "publication_id",
                  "value": this.searchPublicationId
                }, {
                  "column": "language_id",
                  "value": this.searchLangId
                }, {
                  "column": "author_id",
                  "value": this.searchAuthorId
                }],
                "sort": [{
                  "column": "publication_name",
                  "assending": false
                }],
                "pageNo": 1,
                "noOfRecords": 10
              };
              console.log(obj);
              this.auth.showLoader();
              this.issueBookService.getBookFilterData(obj).subscribe(function (response) {
                _this41.auth.hideLoader();

                var res;
                res = response;

                if (res.response.results.length > 0) {
                  console.log(response); // this.returnBookData = res.response.results;

                  _this41.searchResult = true;
                } else {
                  _this41.messageHandler('error', 'No data found', ''); // if(res.errorResponse[0].errorCode == 700){
                  //   this.messageHandler('error', 'No data found', '');
                  // }

                }
              });
            }
          }, {
            key: "resetFilter",
            value: function resetFilter() {
              this.searchTitle = "";
              this.searchCategoryId = "-1";
              this.searchSubcategoryId = "-1";
              this.searchSubjectId = "-1";
              this.searchPublicationId = "-1";
              this.searchLangId = "-1";
              this.searchAuthorId = "-1";
            }
          }, {
            key: "getIssuedBooksByBook",
            value: function getIssuedBooksByBook(book_id, book_title) {
              var _this42 = this;

              this.auth.showLoader();
              this.returnBookService.getIssuedBooksByBook(book_id).subscribe(function (response) {
                var res;
                res = response;

                _this42.auth.hideLoader();

                _this42.suggestion = false;

                if (res.response.length > 0) {
                  _this42.searchResult = true;
                  _this42.returnBookData = res.response;

                  _this42.returnBookData.forEach(function (element) {
                    element.authorNameData = Array.prototype.map.call(element.book_complete_details.authorObjects, function (author) {
                      return author.author_name;
                    }).toString();
                  });
                } else {
                  _this42.messageHandler('error', book_title + ' has not been issued by any borrower', '');
                }
              });
            }
          }, {
            key: "getIssuedBooksByStudent",
            value: function getIssuedBooksByStudent(student_id, student_name) {
              var _this43 = this;

              this.returnBookService.getIssuedBooksByStudent(student_id).subscribe(function (response) {
                var res;
                res = response;

                _this43.auth.hideLoader();

                _this43.suggestion = false;

                if (res.response.length > 0) {
                  _this43.searchResult = true;
                  _this43.returnBookData = res.response;

                  _this43.returnBookData.forEach(function (element) {
                    element.authorNameData = Array.prototype.map.call(element.book_complete_details.authorObjects, function (author) {
                      return author.author_name;
                    }).toString();
                  });
                } else {
                  _this43.messageHandler('error', 'No book to be returned by ' + student_name, '');
                }
              });
            }
          }, {
            key: "downloadReceipt",
            value: function downloadReceipt(issueBookId) {
              var _this44 = this;

              this.auth.showLoader();
              this.returnBookService.downloadReceipt(issueBookId).subscribe(function (response) {
                var res;
                res = response;

                _this44.auth.hideLoader();

                var byteArr = _this44._commService.convertBase64ToArray(res.document);

                var fileName = res.docTitle;
                var file = new Blob([byteArr], {
                  type: 'text/csv;charset=utf-8;'
                });
                var url = URL.createObjectURL(file);
                var dwldLink = document.getElementById('feeReceipt_download');
                dwldLink.setAttribute("href", url);
                dwldLink.setAttribute("download", fileName);
                document.body.appendChild(dwldLink);
                dwldLink.click();
              });
            }
          }, {
            key: "showReturnBook",
            value: function showReturnBook(returnBookData) {
              this.lostBookAmt = returnBookData.book_complete_details.book_lost_fine;
              this.noOfLateDays = 0;
              this.totalLateFine = 0;
              this.returnBookRemarks = "";
              this.returnBookPopup = true;
              this.returnBookTitle = returnBookData.book_complete_details.title;
              this.returnBookIssuedDate = moment__WEBPACK_IMPORTED_MODULE_2__(returnBookData.issued_book.issued_on).format("DD MMM YYYY");
              this.returnBookReturnDate = moment__WEBPACK_IMPORTED_MODULE_2__(returnBookData.issued_book.to_return_on_date).format("DD MMM YYYY");
              this.returnBookRemarks = "";
              this.returnIssueBookId = returnBookData.issued_book.issue_book_id;
              this.bookId = returnBookData.book_complete_details.book_id;
              this.checkForReturnDate(moment__WEBPACK_IMPORTED_MODULE_2__(returnBookData.issued_book.to_return_on_date).format("DD MMM YYYY"));
              var timeDiff = "";
              var givenDate = new Date(this.returnBookReturnDate);
              var tempDate = new Date(this.tempReturnDate);

              if (givenDate > tempDate) {
                this.noOfLateDays = 0;
              } else {
                timeDiff = Math.abs(moment__WEBPACK_IMPORTED_MODULE_2__(this.returnBookReturnDate).diff(moment__WEBPACK_IMPORTED_MODULE_2__(this.tempReturnDate), 'days'));

                if (timeDiff > 0) {
                  this.noOfLateDays = timeDiff;
                  this.totalLateFine = this.perDayFine * this.noOfLateDays;
                }
              } // this.checkForReturnDate(moment(returnBookData.issued_book.to_return_on_date).format("DD MMM YYYY"));

            }
          }, {
            key: "returnBook",
            value: function returnBook() {
              var _this45 = this;

              console.log(this.lostBook);
              var obj;

              if (this.lostBook) {
                obj = {
                  "issue_book_id": this.returnIssueBookId,
                  "book_id": this.bookId,
                  "returned_date": moment__WEBPACK_IMPORTED_MODULE_2__(this.tempReturnDate).unix() * 1000,
                  "lost_on_date": moment__WEBPACK_IMPORTED_MODULE_2__(this.tempLostDate).unix() * 1000,
                  "scrapped_on_date": moment__WEBPACK_IMPORTED_MODULE_2__(this.tempLostDate).unix() * 1000,
                  "paid_fine": this.lostBookAmt,
                  "remark": this.returnBookRemarks,
                  "no_of_late_days": ""
                };
              } else {
                if (this.noOfLateDays == null && !this.disableReturnAmt) {
                  this.messageHandler('error', 'Enter number of late days', '');
                  return;
                } else {
                  obj = {
                    "issue_book_id": this.returnIssueBookId,
                    "book_id": this.bookId,
                    "returned_date": moment__WEBPACK_IMPORTED_MODULE_2__(this.tempReturnDate).unix() * 1000,
                    "lost_on_date": "",
                    "scrapped_on_date": "",
                    "paid_fine": this.totalLateFine,
                    "remark": this.returnBookRemarks,
                    "no_of_late_days": this.noOfLateDays
                  };
                }
              }

              console.log(obj);
              this.auth.showLoader();
              this.multiClickDisabled = true;
              this.returnBookService.returnBook(obj).subscribe(function (response) {
                var res;
                res = response;

                _this45.auth.hideLoader();

                _this45.returnBookPopup = false;
                _this45.multiClickDisabled = false;
                console.log(res.response);

                if (res.statusCode == 200) {
                  _this45.downloadReceipt(_this45.returnIssueBookId);

                  _this45.bookSuggestion = false;
                  _this45.searchResult = false;
                  _this45.searchInput = "";
                  _this45.lostBookAmt = 0;
                  _this45.noOfLateDays = 0;
                  _this45.totalLateFine = 0;
                  _this45.returnBookRemarks = "";

                  _this45.messageHandler('success', 'Book returned successfully', '');
                } else {
                  _this45.messageHandler('error', 'Internal server error', '');
                }
              });
            }
          }, {
            key: "cancelReturnBook",
            value: function cancelReturnBook() {
              this.returnBookPopup = false;
            }
          }, {
            key: "calculateLateFine",
            value: function calculateLateFine() {
              this.totalLateFine = this.perDayFine * this.noOfLateDays;
              this.totalLateFine = Math.round(this.totalLateFine);
            }
          }, {
            key: "selectReturnDate",
            value: function selectReturnDate() {
              var fromDateNotGreaterThanToday = this.lessThanReturnDate(this.returnBookIssuedDate);
              this.tempReturnDate = moment__WEBPACK_IMPORTED_MODULE_2__(this.tempReturnDate).format("DD MMM YYYY");

              switch (fromDateNotGreaterThanToday) {
                case 'true':
                  var timeDiff = "";
                  timeDiff = Math.abs(moment__WEBPACK_IMPORTED_MODULE_2__(this.returnBookReturnDate).diff(moment__WEBPACK_IMPORTED_MODULE_2__(this.tempReturnDate), 'days'));
                  this.noOfLateDays = timeDiff;
                  this.totalLateFine = this.perDayFine * this.noOfLateDays;
                  break;

                case 'lessThanIssueDate':
                  this.tempReturnDate = moment__WEBPACK_IMPORTED_MODULE_2__().format("DD MMM YYYY");
                  this.messageHandler('error', 'Return date can not be less than issue date', '');
                  break;

                case 'greaterthanFutureDate':
                  this.tempReturnDate = moment__WEBPACK_IMPORTED_MODULE_2__().format("DD MMM YYYY");
                  this.messageHandler('error', 'Return date can not be future date', '');
                  break;

                case 'lessThanReturnDate':
                  this.noOfLateDays = 0;
                  this.totalLateFine = 0;
                  break;
              }
            }
          }, {
            key: "selectBookLostDate",
            value: function selectBookLostDate() {
              var fromDateNotGreaterThanToday = this.graterThanToday(this.lostDate);

              if (fromDateNotGreaterThanToday) {
                this.tempLostDate = moment__WEBPACK_IMPORTED_MODULE_2__(this.lostDate).format("DD MMM YYYY");
              } else {
                this.messageHandler('error', 'Book lost/scrap date cannot be future date', '');
                return;
              }
            }
          }, {
            key: "graterThanToday",
            value: function graterThanToday(givenDate) {
              var currentDate = new Date();
              givenDate = new Date(givenDate);

              if (givenDate > currentDate) {
                return false;
              } else {
                return true;
              }
            }
          }, {
            key: "lessThanReturnDate",
            value: function lessThanReturnDate(givenDate) {
              var currentDate = new Date();
              givenDate = new Date(givenDate);
              var tempDate = this.tempReturnDate;
              tempDate = new Date(tempDate);
              var tempReturnBookReturnDate = this.returnBookReturnDate;
              tempReturnBookReturnDate = new Date(tempReturnBookReturnDate);

              if (tempDate > currentDate) {
                return 'greaterthanFutureDate';
              } else if (givenDate > tempDate) {
                return 'lessThanIssueDate';
              } else if (tempDate < tempReturnBookReturnDate) {
                return 'lessThanReturnDate';
              } else {
                return 'true';
              }
            }
          }, {
            key: "checkForReturnDate",
            value: function checkForReturnDate(givenDate) {
              var currentDate = new Date();
              currentDate.setHours(0, 0, 0, 0);
              givenDate = new Date(givenDate);

              if (givenDate >= currentDate) {
                this.disableReturnAmt = true;
              } else {
                this.disableReturnAmt = false;
              }

              var timeDiff = "";
              var days = "";
              timeDiff = Math.floor(currentDate - givenDate);
              days = timeDiff / (1000 * 60 * 60 * 24);

              if (days > 0) {
                this.noOfLateDays = days;
                this.totalLateFine = this.perDayFine * this.noOfLateDays;
              }
            }
          }, {
            key: "openCalendar",
            value: function openCalendar(id) {
              document.getElementById(id).click();
            }
          }, {
            key: "clearFilter",
            value: function clearFilter() {
              this.searchInput = "";
              this.suggestion = false;
            }
          }, {
            key: "closePopup",
            value: function closePopup() {
              this.returnBookPopup = false;
            }
          }, {
            key: "closeSuggestions",
            value: function closeSuggestions() {
              this.suggestion = false;
            }
          }, {
            key: "concatString",
            value: function concatString(authorArray) {
              this.hoverTitle = "";

              for (var i = 0; i < authorArray.length; i++) {
                this.hoverTitle += authorArray[i].author_name;

                if (i >= 0 && i < authorArray.length) {
                  this.hoverTitle += ", ";
                }
              }

              return this.hoverTitle;
            }
          }, {
            key: "messageHandler",
            value: function messageHandler(type, title, body) {
              var obj = {
                type: type,
                title: title,
                body: body
              };
              this.appC.popToast(obj);
            }
          }]);

          return ReturnBookComponent;
        }();

        ReturnBookComponent.ctorParameters = function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticatorService"]
          }, {
            type: _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonServiceFactory"]
          }, {
            type: _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
          }, {
            type: _services_library_add_add_book_service__WEBPACK_IMPORTED_MODULE_6__["AddBookService"]
          }, {
            type: _services_library_issue_issue_book_service__WEBPACK_IMPORTED_MODULE_7__["IssueBookService"]
          }, {
            type: _services_library_return_return_book_service__WEBPACK_IMPORTED_MODULE_8__["ReturnBookService"]
          }];
        };

        ReturnBookComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
          selector: 'app-return-book',
          template: __importDefault(__webpack_require__(
          /*! raw-loader!./return-book.component.html */
          "./node_modules/raw-loader/dist/cjs.js!./src/app/components/library-management/return-book/return-book.component.html"))["default"],
          styles: [__importDefault(__webpack_require__(
          /*! ./return-book.component.scss */
          "./src/app/components/library-management/return-book/return-book.component.scss"))["default"]]
        }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_authenticator_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticatorService"], _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonServiceFactory"], _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _services_library_add_add_book_service__WEBPACK_IMPORTED_MODULE_6__["AddBookService"], _services_library_issue_issue_book_service__WEBPACK_IMPORTED_MODULE_7__["IssueBookService"], _services_library_return_return_book_service__WEBPACK_IMPORTED_MODULE_8__["ReturnBookService"]])], ReturnBookComponent);
        return ReturnBookComponent;
      }();
      /***/

    }
  }]);
})();
//# sourceMappingURL=app-components-library-management-library-management-module-es5.js.map