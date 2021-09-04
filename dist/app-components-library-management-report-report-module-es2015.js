(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-components-library-management-report-report-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/library-management/report/fine-collection/fine-collection.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/library-management/report/fine-collection/fine-collection.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section>\n  <div class=\"filter-date-container\">\n    <button class=\"pull-right\" (click)=\"openCalendar('fineCollectionRange')\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n            <g fill=\"#0084F6\" fill-rule=\"nonzero\">\n                <path d=\"M18.667 5.5H16.5v-1a.5.5 0 1 0-1 0v1h-3v-1a.5.5 0 1 0-1 0v1h-3v-1a.5.5 0 1 0-1 0v1H5.333C4.598 5.5 4 6.096 4 6.833v11.833C4 19.403 4.597 20 5.333 20h13.334c.736 0 1.333-.597 1.333-1.334V6.833c0-.737-.596-1.333-1.333-1.333zM19 18.666c0 .184-.15.334-.333.334H5.333A.334.334 0 0 1 5 18.666V6.833c0-.184.15-.333.333-.333H7.5v1a.5.5 0 1 0 1 0v-1h3v1a.5.5 0 1 0 1 0v-1h3v1a.5.5 0 1 0 1 0v-1h2.167c.183 0 .333.15.333.333v11.833z\"\n                />\n                <path d=\"M7.5 10h2v1.5h-2zM7.5 12.5h2V14h-2zM7.5 15h2v1.5h-2zM11 15h2v1.5h-2zM11 12.5h2V14h-2zM11 10h2v1.5h-2zM14.5 15h2v1.5h-2zM14.5 12.5h2V14h-2zM14.5 10h2v1.5h-2z\"\n                />\n            </g>\n        </svg>\n    </button>\n    <input type=\"text\" value=\"\" id=\"fineCollectionRange\" class=\"widgetDatepicker bsDatepicker\" name=\"fineCollectionRange\" [(ngModel)]=\"fineCollectionRange\"\n        (ngModelChange)=\"updateDateRange($event)\" readonly=\"true\" bsDaterangepicker/>\n    <span class=\"enquiry-state-date pull-right\">\n        {{getStartDate()| date: 'dd MMM yyyy'}} To {{getEndDate()| date: 'dd MMM yyyy'}}\n    </span>\n  </div>\n  <div class=\"filter-search-container\">\n    <input class=\"search-box form-ctrl\" type=\"text\" placeholder=\"Search\" (keyup)=\"searchDatabase()\" [(ngModel)]=\"searchText\">\n  </div>\n</section>\n\n<section>\n  <div class=\"table-container\">\n    <div class=\"heading-container\">\n      <div class=\"heading-item\">\n        <span>BooK Title</span>\n      </div>\n      <div class=\"heading-item\">\n        <span>Borrower Name</span>\n      </div>\n      <div class=\"heading-item\" style=\"width: 15%;\">\n        <span>Issue Date</span>\n      </div>\n      <div class=\"heading-item\" style=\"width: 15%;\">\n        <span>Due Date</span>\n      </div>\n      <div class=\"heading-item\" style=\"width: 22%;\">\n        <span>Return Date</span>\n      </div>\n      <div class=\"heading-item\">\n        <span>No. of Late Days</span>\n      </div>\n      <div class=\"heading-item\">\n        <span>Status</span>\n      </div>\n      <div class=\"heading-item\">\n        <span>Total Fine</span>\n      </div> \n    </div>\n    <div class=\"value-outer-container\">\n      <div class=\"value-container\" *ngFor=\"let report of tempFineCollectionReportList\">\n        <div class=\"value-item\">\n            <span title=\"{{report.title}}\">{{ (report.title.length > 20) ? (report.title | slice:0:20) + '...' : report.title }}</span>\n        </div>\n        <div class=\"value-item\">\n            <span title=\"{{report.borrower}}\">{{ (report.borrower.length > 20) ? (report.borrower | slice:0:20) + '...' : report.borrower }}</span>\n        </div>\n        <div class=\"value-item\" style=\"width: 15%;\">\n          <span title=\"{{report.issuedDate | date: 'dd MMM yyyy'}}\">{{report.issuedDate | date: 'dd MMM yyyy'}}</span>\n        </div>\n        <div class=\"value-item\" style=\"width: 15%;\">\n          <span title=\"{{report.returnDate | date: 'dd MMM yyyy'}}\">{{report.returnDate | date: 'dd MMM yyyy'}}</span>\n        </div>\n        <div class=\"value-item\" style=\"width: 22%;\">\n          <span *ngIf=\"(report.status !== 40 && report.status !== 60)\" title=\"{{report.actualReturnDate | date: 'dd MMM yyyy'}}\">{{report.actualReturnDate | date: 'dd MMM yyyy'}}</span>\n          <span title=\"-\" *ngIf=\"(report.status === 40 || report.status === 60)\">-</span>\n        </div>\n        <div class=\"value-item\">\n          <span title=\"{{report.noOfLateDays==0 ?'-':report.noOfLateDays}}\">{{report.noOfLateDays==0 ?'-':report.noOfLateDays}}</span>\n        </div>\n        <div class=\"value-item\">\n          <span *ngIf=\"report.status==10\" title=\"Issued\">Issued</span>            \n          <span *ngIf=\"report.status==20\" title=\"Returned\">Returned</span>\n          <span *ngIf=\"report.status==30\" title=\"Overdue\">Overdue</span>\n          <span *ngIf=\"report.status==40\" title=\"Lost By Student\">Lost By Student</span>\n          <span *ngIf=\"report.status==50\" title=\"Scrapped By Student\">Scrapped By Student</span>\n          <span *ngIf=\"report.status==60\" title=\"Lost In Library\">Lost In Library</span>\n          <span *ngIf=\"report.status==70\" title=\"Scrapped In Library\">Scrapped In Library</span>\n        </div>\n        <div class=\"value-item\">\n          <span title=\"{{report.totalFine}}\">{{report.totalFine}}</span>\n        </div>\n      </div>\n      <div class=\"no-records\" *ngIf=\"tempFineCollectionReportList?.length == 0 || tempFineCollectionReportList==null\">\n        <span>No Records Found</span>\n      </div>\n    </div>\n  </div>\n</section>\n<div class=\"row filter-res pagination\" #pager id=\"pager\" style=\"width: 100%;\">\n    <div class=\"c-lg-12 c-md-12 c-sm-12 align-right\">\n      <pagination (goPage)=\"fectchTableDataByPage($event)\" (goNext)=\"fetchNext()\" (goPrev)=\"fetchPrevious()\"\n        [pagesToShow]=\"10\" [page]=\"pageIndex\" [perPage]=\"displayBatchSize\" [sizeArr]=\"sizeArr\"\n        (sizeChange)=\"updateTableBatchSize($event)\" [count]=\"totalCount\">\n      </pagination>\n    </div>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/library-management/report/issued-book/issued-book.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/library-management/report/issued-book/issued-book.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section>\n  <div class=\"filter-date-container\">\n    <button class=\"pull-right\" (click)=\"openCalendar('issueBookRange')\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n            <g fill=\"#0084F6\" fill-rule=\"nonzero\">\n                <path d=\"M18.667 5.5H16.5v-1a.5.5 0 1 0-1 0v1h-3v-1a.5.5 0 1 0-1 0v1h-3v-1a.5.5 0 1 0-1 0v1H5.333C4.598 5.5 4 6.096 4 6.833v11.833C4 19.403 4.597 20 5.333 20h13.334c.736 0 1.333-.597 1.333-1.334V6.833c0-.737-.596-1.333-1.333-1.333zM19 18.666c0 .184-.15.334-.333.334H5.333A.334.334 0 0 1 5 18.666V6.833c0-.184.15-.333.333-.333H7.5v1a.5.5 0 1 0 1 0v-1h3v1a.5.5 0 1 0 1 0v-1h3v1a.5.5 0 1 0 1 0v-1h2.167c.183 0 .333.15.333.333v11.833z\"\n                />\n                <path d=\"M7.5 10h2v1.5h-2zM7.5 12.5h2V14h-2zM7.5 15h2v1.5h-2zM11 15h2v1.5h-2zM11 12.5h2V14h-2zM11 10h2v1.5h-2zM14.5 15h2v1.5h-2zM14.5 12.5h2V14h-2zM14.5 10h2v1.5h-2z\"\n                />\n            </g>\n        </svg>\n    </button>\n    <input type=\"text\" value=\"\" id=\"issueBookRange\" class=\"widgetDatepicker bsDatepicker\" name=\"issueBookRange\" [(ngModel)]=\"issueBookRange\"\n        (ngModelChange)=\"updateDateRange($event)\" readonly=\"true\" bsDaterangepicker/>\n    <span class=\"enquiry-state-date pull-right\">\n        {{getStartDate()| date: 'dd MMM yyyy'}} To {{getEndDate()| date: 'dd MMM yyyy'}}\n    </span>\n  </div>\n  <div class=\"filter-search-container\">\n    <input class=\"search-box form-ctrl\" type=\"text\" placeholder=\"Search\" (keyup)=\"searchDatabase()\" [(ngModel)]=\"searchText\">\n  </div>\n</section>\n\n<section>\n  <div class=\"table-container\">\n    <div class=\"heading-container\">\n      <div class=\"heading-item\">\n        <span>Book Title</span>\n      </div>\n      <div class=\"heading-item\">\n        <span>Borrower Name</span>\n      </div>\n      <div class=\"heading-item\">\n        <span>Issue Date</span>\n      </div>\n      <div class=\"heading-item\">\n        <span>Due Date</span>\n      </div>\n    </div>\n    <div class=\"value-outer-container\">\n      <div class=\"value-container\" *ngFor=\"let report of issueBookReportList\">\n        <div class=\"value-item\">\n            <span title=\"{{report.title}}\">{{ (report.title.length > 20) ? (report.title | slice:0:20) + '...' : report.title }}</span>\n        </div>\n        <div class=\"value-item\">\n            <span title=\"{{report.borrower}}\">{{ (report.borrower.length > 20) ? (report.borrower | slice:0:20) + '...' : report.borrower }}</span>\n        </div>\n        <div class=\"value-item\">\n          <span title=\"{{report.issuedDate | date: 'dd MMM yyyy'}}\">{{report.issuedDate | date: 'dd MMM yyyy'}}</span>\n        </div>\n        <div class=\"value-item\">\n          <span title=\"{{report.returnDate | date: 'dd MMM yyyy'}}\">{{report.returnDate | date: 'dd MMM yyyy'}}</span>\n        </div>\n      </div>\n      <div class=\"no-records\" *ngIf=\"issueBookReportList?.length == 0 ||issueBookReportList==null \">\n        <span>No Records Found</span>\n      </div>\n    </div>\n  </div>\n</section>\n<div class=\"row filter-res pagination\" #pager id=\"pager\" style=\"width: 100%;\">\n    <div class=\"c-lg-12 c-md-12 c-sm-12 align-right\">\n      <pagination (goPage)=\"fectchTableDataByPage($event)\" (goNext)=\"fetchNext()\" (goPrev)=\"fetchPrevious()\"\n        [pagesToShow]=\"10\" [page]=\"pageIndex\" [perPage]=\"displayBatchSize\" [sizeArr]=\"sizeArr\"\n        (sizeChange)=\"updateTableBatchSize($event)\" [count]=\"totalCount\">\n      </pagination>\n    </div>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/library-management/report/lost-book/lost-book.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/library-management/report/lost-book/lost-book.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section>\n  <div class=\"filter-date-container\">\n    <button class=\"pull-right\" (click)=\"openCalendar('lostbookrange')\">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n        <g fill=\"#0084F6\" fill-rule=\"nonzero\">\n          <path d=\"M18.667 5.5H16.5v-1a.5.5 0 1 0-1 0v1h-3v-1a.5.5 0 1 0-1 0v1h-3v-1a.5.5 0 1 0-1 0v1H5.333C4.598 5.5 4 6.096 4 6.833v11.833C4 19.403 4.597 20 5.333 20h13.334c.736 0 1.333-.597 1.333-1.334V6.833c0-.737-.596-1.333-1.333-1.333zM19 18.666c0 .184-.15.334-.333.334H5.333A.334.334 0 0 1 5 18.666V6.833c0-.184.15-.333.333-.333H7.5v1a.5.5 0 1 0 1 0v-1h3v1a.5.5 0 1 0 1 0v-1h3v1a.5.5 0 1 0 1 0v-1h2.167c.183 0 .333.15.333.333v11.833z\"\n          />\n          <path d=\"M7.5 10h2v1.5h-2zM7.5 12.5h2V14h-2zM7.5 15h2v1.5h-2zM11 15h2v1.5h-2zM11 12.5h2V14h-2zM11 10h2v1.5h-2zM14.5 15h2v1.5h-2zM14.5 12.5h2V14h-2zM14.5 10h2v1.5h-2z\"\n          />\n        </g>\n      </svg>\n    </button>\n    <input type=\"text\" value=\"\" id=\"lostbookrange\" class=\"widgetDatepicker bsDatepicker\" name=\"lostbookrange\"\n      [(ngModel)]=\"lostbookrange\" (ngModelChange)=\"updateEnqChartByDate($event)\"  bsDaterangepicker/>\n    <span class=\"enquiry-state-date pull-right\">\n        {{getStartDate()| date: 'dd MMM yyyy'}} To {{getEndDate()| date: 'dd MMM yyyy'}}\n    </span>\n  </div>\n  <div class=\"filter-search-container\">\n    <input class=\"search-box form-ctrl\" type=\"text\" placeholder=\"Search\" (keyup)=\"searchDatabase()\" [(ngModel)]=\"searchText\">\n  </div>\n</section>\n\n<section>\n  <div class=\"table-container\">\n    <div class=\"heading-container\">\n      <div class=\"heading-item\">\n        <span>Book Title</span>\n      </div>\n      <div class=\"heading-item\">\n        <span>Borrower Name</span>\n      </div>\n      <div class=\"heading-item\">\n        <span>Lost Date</span>\n      </div>\n      <div class=\"heading-item\">\n        <span>Remarks</span>\n      </div>\n    </div>\n    <div class=\"value-outer-container\">\n      <div class=\"value-container\" *ngFor=\"let report of lostBookReportList\">\n        <div class=\"value-item\">\n            <span title=\"{{report.title}}\">{{ (report.title.length > 20) ? (report.title | slice:0:20) + '...' : report.title }}</span>\n        </div>\n        <div class=\"value-item\">\n            <span title=\"{{report.borrower}}\">{{ (report.borrower.length > 20) ? (report.borrower | slice:0:20) + '...' : report.borrower }}</span>\n        </div>\n        <div class=\"value-item\">\n          <span title=\"{{report.date | date: 'dd MMM yyyy'}}\">{{report.date | date: 'dd MMM yyyy'}}</span>\n        </div>\n        <div class=\"value-item\">\n            <span title=\"{{report.remark}}\">{{ (report.remark.length > 20) ? (report.remark | slice:0:20) + '...' : report.remark }}</span>\n        </div>\n      </div>\n      <div class=\"no-records\" *ngIf=\"lostBookReportList.length == 0\">\n        <span>No Records Found</span>\n      </div>\n    </div>\n  </div>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/library-management/report/never-issued/never-issued.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/library-management/report/never-issued/never-issued.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <section>\n  <div class=\"filter-date-container\">\n    <button class=\"pull-right\" (click)=\"openCalendar('neverIssueCollectionRange')\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n            <g fill=\"#0084F6\" fill-rule=\"nonzero\">\n                <path d=\"M18.667 5.5H16.5v-1a.5.5 0 1 0-1 0v1h-3v-1a.5.5 0 1 0-1 0v1h-3v-1a.5.5 0 1 0-1 0v1H5.333C4.598 5.5 4 6.096 4 6.833v11.833C4 19.403 4.597 20 5.333 20h13.334c.736 0 1.333-.597 1.333-1.334V6.833c0-.737-.596-1.333-1.333-1.333zM19 18.666c0 .184-.15.334-.333.334H5.333A.334.334 0 0 1 5 18.666V6.833c0-.184.15-.333.333-.333H7.5v1a.5.5 0 1 0 1 0v-1h3v1a.5.5 0 1 0 1 0v-1h3v1a.5.5 0 1 0 1 0v-1h2.167c.183 0 .333.15.333.333v11.833z\"\n                />\n                <path d=\"M7.5 10h2v1.5h-2zM7.5 12.5h2V14h-2zM7.5 15h2v1.5h-2zM11 15h2v1.5h-2zM11 12.5h2V14h-2zM11 10h2v1.5h-2zM14.5 15h2v1.5h-2zM14.5 12.5h2V14h-2zM14.5 10h2v1.5h-2z\"\n                />\n            </g>\n        </svg>\n    </button>\n    <input type=\"text\" value=\"\" id=\"neverIssueCollectionRange\" class=\"widgetDatepicker bsDatepicker\" name=\"fineCollectionRange\" [(ngModel)]=\"neverIssueCollectionRange\"\n        (ngModelChange)=\"updateDateRange($event)\" readonly=\"true\" bsDaterangepicker/>\n    <span class=\"enquiry-state-date pull-right\">\n        {{getStartDate()| date: 'dd MMM yyyy'}} To {{getEndDate()| date: 'dd MMM yyyy'}}\n    </span>\n  </div>\n</section> -->\n<section>\n  <div class=\"table-container\">\n    <div class=\"heading-container\">\n      <div class=\"heading-item\">\n        <span>Book Title</span>\n      </div>\n      <div class=\"heading-item\">\n        <span>Book Count</span>\n      </div>\n      <div class=\"heading-item\">\n        <span>Added Date</span>\n      </div>\n      <div class=\"heading-item\">\n        <span>Edition</span>\n      </div>\n      <div class=\"heading-item\">\n        <span>Publication</span>\n      </div>\n      <div class=\"heading-item\">\n        <span>Subject</span>\n      </div>\n      <div class=\"heading-item\">\n        <span>Volume</span>\n      </div>\n    </div>\n    <div class=\"value-outer-container\">\n      <div class=\"value-container\" *ngFor=\"let report of neverIssuedBookReportList\">\n        <div class=\"value-item\">\n            <span title=\"{{report.book.title}}\">{{ (report.book.title.length > 20) ? (report.book.title | slice:0:20) + '...' : report.book.title }}</span>\n        </div>\n        <div class=\"value-item\">\n            <span title=\"{{report.count}}\">{{ (report.count.length > 20) ? (report.count | slice:0:20) + '...' : report.count }}</span>\n        </div>\n        <div class=\"value-item\">\n          <span title=\"{{report.book.createdDate | date: 'dd MMM yyyy'}}\">{{report.book.createdDate | date: 'dd MMM yyyy'}}</span>\n        </div>\n        <div class=\"value-item\">\n            <span title=\"{{report.book.edition}}\">{{ (report.book.edition.length > 20) ? (report.book.edition | slice:0:20) + '...' : report.book.edition }}</span>\n        </div>\n        <div class=\"value-item\">\n            <span title=\"{{report.book.publication.name}}\">{{ (report.book.publication.name.length > 20) ? (report.book.publication.name | slice:0:20) + '...' : report.book.publication.name }}</span>\n        </div>\n        <div class=\"value-item\">\n            <span title=\"{{report.book.subject.name}}\">{{ (report.book.subject.name.length > 20) ? (report.book.subject.name | slice:0:20) + '...' : report.book.subject.name }}</span>\n        </div>\n        <div class=\"value-item\">\n            <span title=\"{{report.book.volume}}\">{{ (report.book.volume.length > 20) ? (report.book.volume | slice:0:20) + '...' : report.book.volume }}</span>\n        </div>\n      </div>\n      <div class=\"no-records\" *ngIf=\"neverIssuedBookReportList.length == 0\">\n        <span>No Records Found</span>\n      </div>\n    </div>\n  </div>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/library-management/report/overdue-book/overdue-book.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/library-management/report/overdue-book/overdue-book.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <section>\n  <div class=\"filter-date-container\">\n    <button class=\"pull-right\" (click)=\"openCalendar('overdueCollectionRange')\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n            <g fill=\"#0084F6\" fill-rule=\"nonzero\">\n                <path d=\"M18.667 5.5H16.5v-1a.5.5 0 1 0-1 0v1h-3v-1a.5.5 0 1 0-1 0v1h-3v-1a.5.5 0 1 0-1 0v1H5.333C4.598 5.5 4 6.096 4 6.833v11.833C4 19.403 4.597 20 5.333 20h13.334c.736 0 1.333-.597 1.333-1.334V6.833c0-.737-.596-1.333-1.333-1.333zM19 18.666c0 .184-.15.334-.333.334H5.333A.334.334 0 0 1 5 18.666V6.833c0-.184.15-.333.333-.333H7.5v1a.5.5 0 1 0 1 0v-1h3v1a.5.5 0 1 0 1 0v-1h3v1a.5.5 0 1 0 1 0v-1h2.167c.183 0 .333.15.333.333v11.833z\"\n                />\n                <path d=\"M7.5 10h2v1.5h-2zM7.5 12.5h2V14h-2zM7.5 15h2v1.5h-2zM11 15h2v1.5h-2zM11 12.5h2V14h-2zM11 10h2v1.5h-2zM14.5 15h2v1.5h-2zM14.5 12.5h2V14h-2zM14.5 10h2v1.5h-2z\"\n                />\n            </g>\n        </svg>\n    </button>\n    <input type=\"text\" value=\"\" id=\"overdueCollectionRange\" class=\"widgetDatepicker bsDatepicker\" name=\"overdueCollectionRange\" [(ngModel)]=\"overdueCollectionRange\"\n        (ngModelChange)=\"updateDateRange($event)\" readonly=\"true\" bsDaterangepicker/>\n    <span class=\"enquiry-state-date pull-right\">\n        {{getStartDate()| date: 'dd MMM yyyy'}} To {{getEndDate()| date: 'dd MMM yyyy'}}\n    </span>\n  </div>\n  <div class=\"filter-search-container\">\n    <input class=\"search-box form-ctrl\" type=\"text\" placeholder=\"Search\" (keyup)=\"searchDatabase()\" [(ngModel)]=\"searchText\">\n  </div>\n</section> -->\n\n<section>\n  <div class=\"table-container\">\n    <div class=\"heading-container\">\n      <div class=\"heading-item\">\n        <span>Book Title</span>\n      </div>\n      <div class=\"heading-item\">\n        <span>Borrower Name</span>\n      </div>\n      <div class=\"heading-item\">\n        <span>Issue Date</span>\n      </div>\n      <div class=\"heading-item\">\n        <span>Due Date</span>\n      </div>\n      <div class=\"heading-item\" style=\"text-align:center;\">\n        <span>No. of Late Days</span>\n      </div>\n      <div class=\"heading-item\" style=\"text-align:center;\">\n        <span>Total Fine</span>\n      </div>\n      <!-- <div class=\"heading-item\" style=\"text-align:center;\">\n        <span>Action</span>\n      </div> -->\n    </div>\n    <div class=\"value-outer-container\">\n      <div class=\"value-container\" *ngFor=\"let report of overdueBookReportList\">\n        <div class=\"value-item\">\n            <span title=\"{{report.title}}\">{{ (report.title.length > 20) ? (report.title | slice:0:20) + '...' : report.title }}</span>\n        </div>\n        <div class=\"value-item\">\n            <span title=\"{{report.borrower}}\">{{ (report.borrower.length > 20) ? (report.borrower | slice:0:20) + '...' : report.borrower }}</span>\n        </div>\n        <div class=\"value-item\">\n          <span title=\"{{report.issuedDate | date: 'dd MMM yyyy'}}\">{{report.issuedDate | date: 'dd MMM yyyy'}}</span>\n        </div>\n        <div class=\"value-item\">\n          <span title=\"{{report.returnDate | date: 'dd MMM yyyy'}}\">{{report.returnDate | date: 'dd MMM yyyy'}}</span>\n        </div>\n        <div class=\"value-item\"  style=\"text-align:center;\">\n            <span title=\"{{report.noOfLateDays}}\">{{ (report.noOfLateDays.length > 20) ? (report.noOfLateDays | slice:0:20) + '...' : report.noOfLateDays }}</span>\n        </div>\n        <div class=\"value-item\"  style=\"text-align:center;\">\n            <span title=\"{{report.totalFine}}\">{{ (report.totalFine.length > 20) ? (report.totalFine | slice:0:20) + '...' : report.totalFine }}</span>\n        </div>\n        <!-- <div class=\"value-item\"  style=\"text-align:center;\">\n          <i class=\"fa fa-download\" aria-hidden=\"true\"  style=\"cursor: pointer;\" (click)=printFeeReceipt(report.issueBookId)></i>\n        </div> -->\n      </div>\n      <div class=\"no-records\" *ngIf=\"overdueBookReportList.length == 0\">\n        <span>No Records Found</span>\n      </div>\n    </div>\n  </div>\n\n</section>\n<div class=\"row filter-res pagination\" #pager id=\"pager\" style=\"width: 100%;margin-bottom: 0;\">\n  <div class=\"c-lg-12 c-md-12 c-sm-12 align-right\">\n    <pagination (goPage)=\"fectchTableDataByPage($event)\" (goNext)=\"fetchNext()\" (goPrev)=\"fetchPrevious()\"\n      [pagesToShow]=\"10\" [page]=\"pageIndex\" [perPage]=\"displayBatchSize\" [sizeArr]=\"sizeArr\"\n      (sizeChange)=\"updateTableBatchSize($event)\" [count]=\"totalCount\">\n    </pagination>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/library-management/report/report.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/library-management/report/report.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section>\n  <div class=\"horizontal-menu\">\n    <div class=\"horizontal-menu-item active-menu\" id=\"lost\">\n      <span routerLink=\"/view/library/report/lost\" (click)=\"toggle('lost')\">Lost Books</span>\n    </div>\n    <div class=\"horizontal-menu-item hide\" id=\"scrap\">\n      <span routerLink=\"/view/library/report/scrap\" (click)=\"toggle('scrap')\">Scrap Books</span>\n    </div>\n    <div class=\"horizontal-menu-item\" id=\"fine\">\n      <span routerLink=\"/view/library/report/fine\" (click)=\"toggle('fine')\">Fine Collection</span>\n    </div>\n    <div class=\"horizontal-menu-item\" id=\"issued\">\n      <span routerLink=\"/view/library/report/issued\" (click)=\"toggle('issued')\">Issued Books</span>\n    </div>\n    <div class=\"horizontal-menu-item\" id=\"overdue\">\n      <span routerLink=\"/view/library/report/overdue\" (click)=\"toggle('overdue')\">Overdue Books</span>\n    </div>\n    <div class=\"horizontal-menu-item\" id=\"never\">\n      <span routerLink=\"/view/library/report/never-issued\" (click)=\"toggle('never')\">Never Issued Books</span>\n    </div>\n    <div class=\"horizontal-menu-item\" id=\"return\">\n      <span routerLink=\"/view/library/report/retrun-book\" (click)=\"toggle('return')\">Returned Books</span>\n    </div>\n  </div>\n</section>\n\n<section class=\"report-sction\">\n  <router-outlet></router-outlet>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/library-management/report/return-book/return-book.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/library-management/report/return-book/return-book.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section>\n  <div style=\"text-align: center;color: #9b9b9b;font-size: 18px;margin-top: 10%;\">Comming Soon</div>\n\n  <!-- <div class=\"filter-date-container\">\n    <button class=\"pull-right\" (click)=\"openCalendar('returnbookrange')\">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n        <g fill=\"#0084F6\" fill-rule=\"nonzero\">\n          <path d=\"M18.667 5.5H16.5v-1a.5.5 0 1 0-1 0v1h-3v-1a.5.5 0 1 0-1 0v1h-3v-1a.5.5 0 1 0-1 0v1H5.333C4.598 5.5 4 6.096 4 6.833v11.833C4 19.403 4.597 20 5.333 20h13.334c.736 0 1.333-.597 1.333-1.334V6.833c0-.737-.596-1.333-1.333-1.333zM19 18.666c0 .184-.15.334-.333.334H5.333A.334.334 0 0 1 5 18.666V6.833c0-.184.15-.333.333-.333H7.5v1a.5.5 0 1 0 1 0v-1h3v1a.5.5 0 1 0 1 0v-1h3v1a.5.5 0 1 0 1 0v-1h2.167c.183 0 .333.15.333.333v11.833z\"\n          />\n          <path d=\"M7.5 10h2v1.5h-2zM7.5 12.5h2V14h-2zM7.5 15h2v1.5h-2zM11 15h2v1.5h-2zM11 12.5h2V14h-2zM11 10h2v1.5h-2zM14.5 15h2v1.5h-2zM14.5 12.5h2V14h-2zM14.5 10h2v1.5h-2z\"\n          />\n        </g>\n      </svg>\n    </button>\n    <input style=\"margin-left:12%;\" type=\"text\" value=\"\" id=\"returnbookrange\" class=\"widgetDatepicker bsDatepicker\" name=\"returnbookrange\"\n      [(ngModel)]=\"returnbookrange\" (ngModelChange)=\"updateEnqChartByDate($event)\"  bsDaterangepicker/>\n    <span class=\"enquiry-state-date pull-right\">\n        {{getStartDate()| date: 'dd MMM yyyy'}} To {{getEndDate()| date: 'dd MMM yyyy'}}\n    </span>\n  </div>\n  <div class=\"filter-search-container\">\n    <input class=\"search-box form-ctrl\" type=\"text\" placeholder=\"Search\" (keyup)=\"searchDatabase()\" [(ngModel)]=\"searchText\">\n  </div> -->\n</section>\n\n<!-- <section>\n  <div class=\"table-container\">\n    <div class=\"heading-container\">\n      <div class=\"heading-item\">\n        <span>Book Title</span>\n      </div>\n      <div class=\"heading-item\">\n        <span>Borrower Name</span>\n      </div>\n      <div class=\"heading-item\">\n        <span>Issued Date</span>\n      </div>\n      <div class=\"heading-item\">\n        <span>Return Date</span>\n      </div>\n      <div class=\"heading-item\" style=\"text-align:center;\">\n        <span>No of Late Days</span>\n      </div>\n      <div class=\"heading-item\" style=\"text-align:center;\">\n        <span>Total Fine</span>\n      </div>\n    </div>\n    <div class=\"value-outer-container\">\n      <div class=\"value-container\" *ngFor=\"let report of returnBookReportList\">\n        <div class=\"value-item\">\n          <span>{{report.title}}</span>\n        </div>\n        <div class=\"value-item\">\n          <span>{{report.borrower}}</span>\n        </div>\n        <div class=\"value-item\">\n          <span>{{report.issuedDate | date: 'dd MMM yyyy'}}</span>\n        </div>\n        <div class=\"value-item\">\n          <span>{{report.returnDate | date: 'dd MMM yyyy'}}</span>\n        </div>\n        <div class=\"value-item\"  style=\"text-align:center;\">\n          <span>{{report.noOfLateDays}}</span>\n        </div>\n        <div class=\"value-item\"  style=\"text-align:center;\">\n          <span>{{report.totalFine}}</span>\n        </div>\n      </div>\n      <div class=\"no-records\" *ngIf=\"returnBookReportList.length == 0\">\n        <span>No Records Found</span>\n      </div>\n    </div>\n  </div>\n</section> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/library-management/report/scrap-book/scrap-book.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/library-management/report/scrap-book/scrap-book.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section>\n  <div class=\"filter-date-container\">\n    <button class=\"pull-right\" (click)=\"openCalendar('scrapbookrange')\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n            <g fill=\"#0084F6\" fill-rule=\"nonzero\">\n                <path d=\"M18.667 5.5H16.5v-1a.5.5 0 1 0-1 0v1h-3v-1a.5.5 0 1 0-1 0v1h-3v-1a.5.5 0 1 0-1 0v1H5.333C4.598 5.5 4 6.096 4 6.833v11.833C4 19.403 4.597 20 5.333 20h13.334c.736 0 1.333-.597 1.333-1.334V6.833c0-.737-.596-1.333-1.333-1.333zM19 18.666c0 .184-.15.334-.333.334H5.333A.334.334 0 0 1 5 18.666V6.833c0-.184.15-.333.333-.333H7.5v1a.5.5 0 1 0 1 0v-1h3v1a.5.5 0 1 0 1 0v-1h3v1a.5.5 0 1 0 1 0v-1h2.167c.183 0 .333.15.333.333v11.833z\"\n                />\n                <path d=\"M7.5 10h2v1.5h-2zM7.5 12.5h2V14h-2zM7.5 15h2v1.5h-2zM11 15h2v1.5h-2zM11 12.5h2V14h-2zM11 10h2v1.5h-2zM14.5 15h2v1.5h-2zM14.5 12.5h2V14h-2zM14.5 10h2v1.5h-2z\"\n                />\n            </g>\n        </svg>\n    </button>\n    <input type=\"text\" value=\"\" id=\"scrapbookrange\" class=\"widgetDatepicker bsDatepicker\" name=\"scrapbookrange\" [(ngModel)]=\"scrapbookrange\"\n        (ngModelChange)=\"updateEnqChartByDate($event)\" readonly=\"true\" bsDaterangepicker/>\n    <span class=\"enquiry-state-date pull-right\">\n        {{getStartDate()| date: 'dd MMM yyyy'}} To {{getEndDate()| date: 'dd MMM yyyy'}}\n    </span>\n  </div>\n  <div class=\"filter-search-container\">\n    <input class=\"search-box form-ctrl\" type=\"text\" placeholder=\"Search\" (keyup)=\"searchDatabase()\" [(ngModel)]=\"searchText\">\n  </div>\n</section>\n\n<section>\n  <div class=\"table-container\">\n    <div class=\"heading-container\">\n      <div class=\"heading-item\">\n        <span>Book Title</span>\n      </div>\n      <div class=\"heading-item\">\n        <span>Borrower Name</span>\n      </div>\n      <div class=\"heading-item\">\n        <span>Scrap Date</span>\n      </div>\n      <div class=\"heading-item\">\n        <span>Remarks</span>\n      </div>\n    </div>\n    <div class=\"value-outer-container\">\n      <div class=\"value-container\" *ngFor=\"let report of scrapBookReportList\">\n        <div class=\"value-item\">\n            <span title=\"{{report.title}}\">{{ (report.title.length > 20) ? (report.title | slice:0:20) + '...' : report.title }}</span>\n        </div>\n        <div class=\"value-item\">\n            <span title=\"{{report.borrower}}\">{{ (report.borrower.length > 20) ? (report.borrower | slice:0:20) + '...' : report.borrower }}</span>\n        </div>\n        <div class=\"value-item\">\n\n          <span title=\"{{report.date | date: 'dd MMM yyyy'}}\">{{report.date | date: 'dd MMM yyyy'}}</span>\n        </div>\n        <div class=\"value-item\">\n            <span title=\"{{report.remark}}\">{{ (report.remark.length > 20) ? (report.remark | slice:0:20) + '...' : report.remark }}</span>\n        </div>\n      </div>\n      <div class=\"no-records\" *ngIf=\"scrapBookReportList.length == 0\">\n        <span>No Records Found</span>\n      </div>\n    </div>\n  </div>\n</section>\n");

/***/ }),

/***/ "./src/app/components/library-management/report/fine-collection/fine-collection.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/components/library-management/report/fine-collection/fine-collection.component.scss ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".filter-date-container {\n  position: relative;\n}\n\n.filter-date-container .enquiry-state-date {\n  font-size: 14px;\n  color: #666;\n  margin-right: 10px;\n  padding-top: 4px;\n  display: inline-block;\n}\n\n.widgetDatepicker {\n  position: absolute;\n  margin-left: -10%;\n  width: 1px;\n  visibility: hidden;\n  opacity: 0;\n}\n\nbutton {\n  background: transparent;\n}\n\nbutton.drag-button {\n  cursor: all-scroll;\n  margin-left: 16px;\n}\n\n.table-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n\n.table-container .heading-container {\n  background: #e0eaec;\n  display: flex;\n  flex-direction: row;\n  font-size: 14px;\n  font-weight: 600;\n  text-align: left;\n  padding: 10px;\n  border: 1px solid #ccc;\n}\n\n.table-container .heading-container .heading-item {\n  width: 20%;\n}\n\n.table-container .value-outer-container {\n  display: flex;\n  flex-direction: column;\n  min-height: 50vh;\n  max-height: 50vh;\n  overflow-x: hidden;\n  overflow-y: auto;\n  border: 1px solid #ccc;\n}\n\n.table-container .value-outer-container .value-container {\n  display: flex;\n  flex-direction: row;\n  text-align: left;\n  padding: 10px;\n  font-size: 12px;\n  border-bottom: 1px solid #ccc;\n  border-top: none;\n}\n\n.table-container .value-outer-container .value-container .value-item {\n  width: 20%;\n}\n\n.table-container .value-outer-container .no-records {\n  display: flex;\n  justify-content: center;\n  padding: 10px;\n  font-size: 14px;\n  font-weight: 600;\n  border: 1px solid #ccc;\n  border-top: none;\n}\n\n::ng-deep .bs-daterangepicker-container {\n  z-index: 1100;\n  left: 650px !important;\n}\n\n.search-box {\n  border: 1px solid #ccc;\n  padding: 5px;\n  width: 20%;\n  float: right;\n  margin-right: 25px;\n  margin-bottom: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9saWJyYXJ5LW1hbmFnZW1lbnQvcmVwb3J0L2ZpbmUtY29sbGVjdGlvbi9maW5lLWNvbGxlY3Rpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxrQkFBa0I7QUFEcEI7O0FBQUE7RUFJTSxlQUFlO0VBQ2YsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIscUJBQXFCO0FBQTNCOztBQUdBO0VBQ0ksa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFVBQVU7QUFBZDs7QUFHQTtFQUNJLHVCQUF1QjtBQUEzQjs7QUFEQTtFQUdRLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFFekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7QUFDYjs7QUFKQTtFQUtJLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixzQkFBc0I7QUFHMUI7O0FBZkE7RUFjTSxVQUFVO0FBS2hCOztBQW5CQTtFQWtCSSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixzQkFBc0I7QUFLMUI7O0FBN0JBO0VBMEJNLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLGdCQUFnQjtBQU90Qjs7QUF2Q0E7RUFrQ1EsVUFBVTtBQVNsQjs7QUEzQ0E7RUFzQ00sYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsZ0JBQWdCO0FBU3RCOztBQUhBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQU14Qjs7QUFKQTtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osVUFBVTtFQUNWLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBT3JCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9saWJyYXJ5LW1hbmFnZW1lbnQvcmVwb3J0L2ZpbmUtY29sbGVjdGlvbi9maW5lLWNvbGxlY3Rpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAaW1wb3J0IFwiLi9zcmMvYXNzZXRzL2Nzcy9jb21tb24vdmFyaWFibGVzLnNjc3NcIjtcbi8vIEBpbXBvcnQgXCIuL3NyYy9hc3NldHMvY3NzL2NvbW1vbi9jb21tb24td2ViLnNjc3NcIjtcbi5maWx0ZXItZGF0ZS1jb250YWluZXJ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAuZW5xdWlyeS1zdGF0ZS1kYXRlIHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGNvbG9yOiAjNjY2O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgcGFkZGluZy10b3A6IDRweDtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxufVxuLndpZGdldERhdGVwaWNrZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXJnaW4tbGVmdDogLTEwJTtcbiAgICB3aWR0aDogMXB4O1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBvcGFjaXR5OiAwO1xufVxuXG5idXR0b24ge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICYuZHJhZy1idXR0b24ge1xuICAgICAgICBjdXJzb3I6IGFsbC1zY3JvbGw7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgIH1cbn1cblxuLnRhYmxlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xuICAuaGVhZGluZy1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQ6ICNlMGVhZWM7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIC5oZWFkaW5nLWl0ZW0ge1xuICAgICAgd2lkdGg6IDIwJTtcbiAgICB9XG4gIH1cbiAgLnZhbHVlLW91dGVyLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1pbi1oZWlnaHQ6IDUwdmg7XG4gICAgbWF4LWhlaWdodDogNTB2aDtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIC52YWx1ZS1jb250YWluZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICAgICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICAgIC52YWx1ZS1pdGVtIHtcbiAgICAgICAgd2lkdGg6IDIwJTtcbiAgICAgIH1cbiAgICB9XG4gICAgLm5vLXJlY29yZHN7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICBib3JkZXItdG9wOiBub25lO1xuICAgIH1cbiAgfVxuXG59XG5cbjo6bmctZGVlcCAuYnMtZGF0ZXJhbmdlcGlja2VyLWNvbnRhaW5lciB7XG4gIHotaW5kZXg6IDExMDA7XG4gIGxlZnQ6IDY1MHB4ICFpbXBvcnRhbnQ7XG59XG4uc2VhcmNoLWJveCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIHBhZGRpbmc6IDVweDtcbiAgd2lkdGg6IDIwJTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/library-management/report/fine-collection/fine-collection.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/library-management/report/fine-collection/fine-collection.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: FineCollectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FineCollectionComponent", function() { return FineCollectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/authenticator.service */ "./src/app/services/authenticator.service.ts");
/* harmony import */ var _services_library_report_report_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/library/report/report.service */ "./src/app/services/library/report/report.service.ts");
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





let FineCollectionComponent = /** @class */ (() => {
    let FineCollectionComponent = class FineCollectionComponent {
        constructor(router, cd, auth, reportService) {
            this.router = router;
            this.cd = cd;
            this.auth = auth;
            this.reportService = reportService;
            this.jsonFlag = {
                isProfessional: false
            };
            this.fineCollectionReportList = {
                results: [],
                totalRecords: 0
            };
            this.tempFineCollectionReportList = [];
            this.fineCollectionRange = [];
            this.sort = false;
            // FOR PAGINATION
            this.pageIndex = 1;
            this.displayBatchSize = 10;
            this.totalCount = 0;
            this.sizeArr = [10, 25, 50, 100, 150, 200, 500];
        }
        ngOnInit() {
            this.fineCollectionRange[0] = new Date(moment__WEBPACK_IMPORTED_MODULE_2__().date(1).format("YYYY-MM-DD"));
            this.fineCollectionRange[1] = new Date();
            this.getFineCollectionReport(this.fineCollectionRange[0], this.fineCollectionRange[1]);
        }
        searchDatabase() {
            if (this.searchText != "" && this.searchText != null) {
                let searchData;
                let data = this.fineCollectionReportList.results;
                const peopleArray = Object.keys(data).map(i => data[i]);
                searchData = peopleArray.filter(item => Object.keys(item).some(k => item[k] != null && item[k].toString().toLowerCase().includes(this.searchText.toLowerCase())));
                this.tempFineCollectionReportList = searchData;
            }
            else {
                this.tempFineCollectionReportList = this.fineCollectionReportList.results;
            }
        }
        getFineCollectionReport(startDate, endDate) {
            let obj = {
                "between": {
                    "from": startDate,
                    "to": endDate
                },
                "sortBy": {
                    "assending": this.sort
                },
                "pageNo": this.pageIndex,
                "noOfRecords": this.displayBatchSize
            };
            this.auth.showLoader();
            this.reportService.getFineCollectionReport(obj).subscribe(response => {
                this.auth.hideLoader();
                let res;
                res = response;
                this.fineCollectionReportList = res;
                this.totalCount = res.totalRecords;
                this.tempFineCollectionReportList = res.results;
            }, errorResponse => {
                this.auth.hideLoader();
            });
        }
        getStartDate() {
            this.cd.markForCheck();
            let date = moment__WEBPACK_IMPORTED_MODULE_2__().date(1).format("YYYY-MM-DD");
            return this.fineCollectionRange[0];
        }
        getEndDate() {
            this.cd.markForCheck();
            return this.fineCollectionRange[1];
        }
        updateDateRange(e) {
            this.cd.markForCheck();
            this.getFineCollectionReport(moment__WEBPACK_IMPORTED_MODULE_2__(e[0]).format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_2__(e[1]).format("YYYY-MM-DD"));
        }
        openCalendar(id) {
            document.getElementById(id).click();
        }
        sortTable(obj) {
            this.sort = !this.sort;
            // this.fineCollectionRange[0] = new Date(moment().date(1).format("YYYY-MM-DD"));
            // this.fineCollectionRange[1] = new Date();
            // console.log(this.fineCollectionRange)
            this.getFineCollectionReport(moment__WEBPACK_IMPORTED_MODULE_2__(this.fineCollectionRange[0]).format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_2__(this.fineCollectionRange[1]).format("YYYY-MM-DD"));
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
            this.getFineCollectionReport(moment__WEBPACK_IMPORTED_MODULE_2__(this.fineCollectionRange[0]).format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_2__(this.fineCollectionRange[1]).format("YYYY-MM-DD"));
        }
        /* Fetches Data as per the user selected batch size */
        updateTableBatchSize(num) {
            this.pageIndex = 1;
            this.displayBatchSize = parseInt(num);
            this.getFineCollectionReport(moment__WEBPACK_IMPORTED_MODULE_2__(this.fineCollectionRange[0]).format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_2__(this.fineCollectionRange[1]).format("YYYY-MM-DD"));
        }
    };
    FineCollectionComponent.ctorParameters = () => [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"] },
        { type: _services_library_report_report_service__WEBPACK_IMPORTED_MODULE_4__["ReportService"] }
    ];
    FineCollectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fine-collection',
            template: __importDefault(__webpack_require__(/*! raw-loader!./fine-collection.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/library-management/report/fine-collection/fine-collection.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./fine-collection.component.scss */ "./src/app/components/library-management/report/fine-collection/fine-collection.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"],
            _services_library_report_report_service__WEBPACK_IMPORTED_MODULE_4__["ReportService"]])
    ], FineCollectionComponent);
    return FineCollectionComponent;
})();



/***/ }),

/***/ "./src/app/components/library-management/report/issued-book/issued-book.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/library-management/report/issued-book/issued-book.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".filter-date-container {\n  position: relative;\n}\n\n.filter-date-container .enquiry-state-date {\n  font-size: 14px;\n  color: #666;\n  margin-right: 10px;\n  padding-top: 4px;\n  display: inline-block;\n}\n\n::ng-deep .bs-datepicker-container, .bs-daterangepicker-container {\n  left: 650 !important;\n}\n\n.widgetDatepicker {\n  position: absolute;\n  right: 30%;\n  width: 1px;\n  visibility: hidden;\n  opacity: 0;\n}\n\n.search-box {\n  border: 1px solid #ccc;\n  padding: 5px;\n  width: 20%;\n  float: right;\n  margin-right: 25px;\n  margin-bottom: 10px;\n}\n\nbutton {\n  background: transparent;\n}\n\nbutton.drag-button {\n  cursor: all-scroll;\n  margin-left: 16px;\n}\n\n.table-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n\n.table-container .heading-container {\n  background: #e0eaec;\n  display: flex;\n  flex-direction: row;\n  font-size: 14px;\n  font-weight: 600;\n  text-align: left;\n  padding: 10px;\n  border: 1px solid #ccc;\n}\n\n.table-container .heading-container .heading-item {\n  width: 20%;\n}\n\n.table-container .value-outer-container {\n  display: flex;\n  flex-direction: column;\n  min-height: 50vh;\n  max-height: 50vh;\n  overflow-x: hidden;\n  overflow-y: auto;\n  border: 1px solid #ccc;\n}\n\n.table-container .value-outer-container .value-container {\n  display: flex;\n  flex-direction: row;\n  text-align: left;\n  padding: 10px;\n  font-size: 12px;\n  border-bottom: 1px solid #ccc;\n  border-top: none;\n}\n\n.table-container .value-outer-container .value-container .value-item {\n  width: 20%;\n}\n\n.table-container .value-outer-container .no-records {\n  display: flex;\n  justify-content: center;\n  padding: 10px;\n  font-size: 14px;\n  font-weight: 600;\n  border: 1px solid #ccc;\n  border-top: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9saWJyYXJ5LW1hbmFnZW1lbnQvcmVwb3J0L2lzc3VlZC1ib29rL2lzc3VlZC1ib29rLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUZBO0VBR00sZUFBZTtFQUNmLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtBQUczQjs7QUFDQTtFQUNFLG9CQUFvQjtBQUV0Qjs7QUFFQTtFQUNJLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixVQUFVO0FBQ2Q7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFVBQVU7RUFDVixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNJLHVCQUF1QjtBQUMzQjs7QUFGQTtFQUdRLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFHekI7O0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7QUFFYjs7QUFMQTtFQUtJLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixzQkFBc0I7QUFJMUI7O0FBaEJBO0VBY00sVUFBVTtBQU1oQjs7QUFwQkE7RUFrQkksYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0FBTTFCOztBQTlCQTtFQTBCTSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsZUFBZTtFQUNmLDZCQUE2QjtFQUM3QixnQkFBZ0I7QUFRdEI7O0FBeENBO0VBa0NRLFVBQVU7QUFVbEI7O0FBNUNBO0VBc0NNLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtBQVV0QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGlicmFyeS1tYW5hZ2VtZW50L3JlcG9ydC9pc3N1ZWQtYm9vay9pc3N1ZWQtYm9vay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maWx0ZXItZGF0ZS1jb250YWluZXJ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLmVucXVpcnktc3RhdGUtZGF0ZSB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBjb2xvcjogIzY2NjtcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgIHBhZGRpbmctdG9wOiA0cHg7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cbn1cblxuOjpuZy1kZWVwIC5icy1kYXRlcGlja2VyLWNvbnRhaW5lciwgLmJzLWRhdGVyYW5nZXBpY2tlci1jb250YWluZXJ7XG4gIGxlZnQ6IDY1MCAhaW1wb3J0YW50OyBcbn1cblxuXG4ud2lkZ2V0RGF0ZXBpY2tlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAzMCU7XG4gICAgd2lkdGg6IDFweDtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgb3BhY2l0eTogMDtcbn1cblxuLnNlYXJjaC1ib3gge1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBwYWRkaW5nOiA1cHg7XG4gIHdpZHRoOiAyMCU7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG5idXR0b24ge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICYuZHJhZy1idXR0b24ge1xuICAgICAgICBjdXJzb3I6IGFsbC1zY3JvbGw7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgIH1cbn1cblxuLnRhYmxlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xuICAuaGVhZGluZy1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQ6ICNlMGVhZWM7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIC5oZWFkaW5nLWl0ZW0ge1xuICAgICAgd2lkdGg6IDIwJTtcbiAgICB9XG4gIH1cbiAgLnZhbHVlLW91dGVyLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1pbi1oZWlnaHQ6IDUwdmg7XG4gICAgbWF4LWhlaWdodDogNTB2aDtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIC52YWx1ZS1jb250YWluZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICAgICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICAgIC52YWx1ZS1pdGVtIHtcbiAgICAgICAgd2lkdGg6IDIwJTtcbiAgICAgIH1cbiAgICB9XG4gICAgLm5vLXJlY29yZHN7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICBib3JkZXItdG9wOiBub25lO1xuICAgIH1cbiAgfVxuXG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/components/library-management/report/issued-book/issued-book.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/library-management/report/issued-book/issued-book.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: IssuedBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssuedBookComponent", function() { return IssuedBookComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/authenticator.service */ "./src/app/services/authenticator.service.ts");
/* harmony import */ var _services_library_report_report_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/library/report/report.service */ "./src/app/services/library/report/report.service.ts");
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





let IssuedBookComponent = /** @class */ (() => {
    let IssuedBookComponent = class IssuedBookComponent {
        constructor(router, cd, auth, reportService) {
            this.router = router;
            this.cd = cd;
            this.auth = auth;
            this.reportService = reportService;
            this.jsonFlag = {
                isProfessional: false,
                isRippleLoad: false
            };
            this.issueBookReportList = [];
            this.issueBookRange = [];
            // FOR PAGINATION
            this.pageIndex = 1;
            this.displayBatchSize = 10;
            this.totalCount = 0;
            this.sizeArr = [10, 25, 50, 100, 150, 200, 500];
        }
        ngOnInit() {
            this.issueBookRange[0] = new Date(moment__WEBPACK_IMPORTED_MODULE_2__().date(1).format("YYYY-MM-DD"));
            this.issueBookRange[1] = new Date(moment__WEBPACK_IMPORTED_MODULE_2__().format("YYYY-MM-DD"));
            // this.getIssueBookReport(this.issueBookRange[0], this.issueBookRange[1]);
        }
        getIssueBookReport(startDate, endDate) {
            let obj = {
                "between": {
                    "from": startDate,
                    "to": endDate
                },
                "in": [
                    {
                        "column": "status",
                        "values": [10]
                    }
                ],
                "pageNo": this.pageIndex,
                "noOfRecords": this.displayBatchSize
            };
            this.auth.showLoader();
            this.reportService.getIssueBookReport(obj).subscribe(response => {
                this.auth.hideLoader();
                let res;
                res = response;
                this.issueBookReportList = res.results;
                this.fixedIssueBookList = res.results;
                this.totalCount = res.totalRecords;
            }, errorResponse => {
                this.auth.hideLoader();
            });
        }
        searchDatabase() {
            if (this.searchText != "" && this.searchText != null) {
                let searchData;
                const peopleArray = Object.keys(this.fixedIssueBookList).map(i => this.fixedIssueBookList[i]);
                searchData = peopleArray.filter(item => Object.keys(item).some(k => item[k] != null && item[k].toString().toLowerCase().includes(this.searchText.toLowerCase())));
                this.issueBookReportList = searchData;
            }
            else {
                this.issueBookReportList = this.fixedIssueBookList;
            }
        }
        getStartDate() {
            this.cd.markForCheck();
            let date = new Date(moment__WEBPACK_IMPORTED_MODULE_2__().date(1).format("YYYY-MM-DD"));
            return this.issueBookRange[0];
        }
        getEndDate() {
            this.cd.markForCheck();
            return this.issueBookRange[1];
        }
        updateDateRange(e) {
            this.cd.markForCheck();
            this.getIssueBookReport(moment__WEBPACK_IMPORTED_MODULE_2__(e[0]).format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_2__(e[1]).format("YYYY-MM-DD"));
        }
        openCalendar(id) {
            document.getElementById(id).click();
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
            this.getIssueBookReport(moment__WEBPACK_IMPORTED_MODULE_2__(this.issueBookRange[0]).format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_2__(this.issueBookRange[1]).format("YYYY-MM-DD"));
        }
        /* Fetches Data as per the user selected batch size */
        updateTableBatchSize(num) {
            this.pageIndex = 1;
            this.displayBatchSize = parseInt(num);
            this.getIssueBookReport(moment__WEBPACK_IMPORTED_MODULE_2__(this.issueBookRange[0]).format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_2__(this.issueBookRange[1]).format("YYYY-MM-DD"));
        }
    };
    IssuedBookComponent.ctorParameters = () => [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"] },
        { type: _services_library_report_report_service__WEBPACK_IMPORTED_MODULE_4__["ReportService"] }
    ];
    IssuedBookComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-issued-book',
            template: __importDefault(__webpack_require__(/*! raw-loader!./issued-book.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/library-management/report/issued-book/issued-book.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./issued-book.component.scss */ "./src/app/components/library-management/report/issued-book/issued-book.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"],
            _services_library_report_report_service__WEBPACK_IMPORTED_MODULE_4__["ReportService"]])
    ], IssuedBookComponent);
    return IssuedBookComponent;
})();



/***/ }),

/***/ "./src/app/components/library-management/report/lost-book/lost-book.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/library-management/report/lost-book/lost-book.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".filter-date-container .enquiry-state-date {\n  font-size: 14px;\n  color: #666;\n  margin-right: 10px;\n  padding-top: 4px;\n  display: inline-block;\n}\n\n.widgetDatepicker {\n  position: absolute;\n  margin-left: -10%;\n  width: 1px;\n  visibility: hidden;\n  opacity: 0;\n}\n\n.bsDatepicker {\n  padding: 5px;\n  width: 100%;\n  position: absolute;\n}\n\n.search-box {\n  border: 1px solid #ccc;\n  padding: 5px;\n  width: 20%;\n  float: right;\n  margin-right: 25px;\n  margin-bottom: 10px;\n}\n\nbutton {\n  background: transparent;\n}\n\nbutton.drag-button {\n  cursor: all-scroll;\n  margin-left: 16px;\n}\n\n.table-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n\n.table-container .heading-container {\n  background: #e0eaec;\n  display: flex;\n  flex-direction: row;\n  font-size: 14px;\n  font-weight: 600;\n  text-align: left;\n  padding: 10px;\n  border: 1px solid #ccc;\n}\n\n.table-container .heading-container .heading-item {\n  width: 20%;\n}\n\n.table-container .value-outer-container {\n  display: flex;\n  flex-direction: column;\n  min-height: 50vh;\n  max-height: 50vh;\n  overflow-x: hidden;\n  overflow-y: auto;\n  border: 1px solid #ccc;\n}\n\n.table-container .value-outer-container .value-container {\n  display: flex;\n  flex-direction: row;\n  text-align: left;\n  padding: 10px;\n  font-size: 12px;\n  border-bottom: 1px solid #ccc;\n  border-top: none;\n}\n\n.table-container .value-outer-container .value-container .value-item {\n  width: 20%;\n}\n\n.table-container .value-outer-container .no-records {\n  display: flex;\n  justify-content: center;\n  padding: 10px;\n  font-size: 14px;\n  font-weight: 600;\n  border: 1px solid #ccc;\n  border-top: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9saWJyYXJ5LW1hbmFnZW1lbnQvcmVwb3J0L2xvc3QtYm9vay9sb3N0LWJvb2suY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFTSxlQUFlO0VBQ2YsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIscUJBQXFCO0FBQTNCOztBQUdBO0VBQ0ksa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFVBQVU7QUFBZDs7QUFHQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0FBQXBCOztBQUdBO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixVQUFVO0VBQ1YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFBckI7O0FBR0E7RUFDSSx1QkFBdUI7QUFBM0I7O0FBREE7RUFHUSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBRXpCOztBQUdBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0FBQWI7O0FBSEE7RUFLSSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0JBQXNCO0FBRTFCOztBQWRBO0VBY00sVUFBVTtBQUloQjs7QUFsQkE7RUFrQkksYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0FBSTFCOztBQTVCQTtFQTBCTSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsZUFBZTtFQUNmLDZCQUE2QjtFQUM3QixnQkFBZ0I7QUFNdEI7O0FBdENBO0VBa0NRLFVBQVU7QUFRbEI7O0FBMUNBO0VBc0NNLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtBQVF0QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGlicmFyeS1tYW5hZ2VtZW50L3JlcG9ydC9sb3N0LWJvb2svbG9zdC1ib29rLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpbHRlci1kYXRlLWNvbnRhaW5lcntcbiAgLmVucXVpcnktc3RhdGUtZGF0ZSB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBjb2xvcjogIzY2NjtcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgIHBhZGRpbmctdG9wOiA0cHg7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cbn1cbi53aWRnZXREYXRlcGlja2VyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luLWxlZnQ6IC0xMCU7XG4gICAgd2lkdGg6IDFweDtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgb3BhY2l0eTogMDtcbn1cblxuLmJzRGF0ZXBpY2tlciB7XG4gIHBhZGRpbmc6IDVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLnNlYXJjaC1ib3gge1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBwYWRkaW5nOiA1cHg7XG4gIHdpZHRoOiAyMCU7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG5idXR0b24ge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICYuZHJhZy1idXR0b24ge1xuICAgICAgICBjdXJzb3I6IGFsbC1zY3JvbGw7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgIH1cbn1cblxuXG4udGFibGUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG4gIC5oZWFkaW5nLWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZDogI2UwZWFlYztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgLmhlYWRpbmctaXRlbSB7XG4gICAgICB3aWR0aDogMjAlO1xuICAgIH1cbiAgfVxuICAudmFsdWUtb3V0ZXItY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWluLWhlaWdodDogNTB2aDtcbiAgICBtYXgtaGVpZ2h0OiA1MHZoO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgLnZhbHVlLWNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gICAgICBib3JkZXItdG9wOiBub25lO1xuICAgICAgLnZhbHVlLWl0ZW0ge1xuICAgICAgICB3aWR0aDogMjAlO1xuICAgICAgfVxuICAgIH1cbiAgICAubm8tcmVjb3Jkc3tcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgfVxuICB9XG5cblxuXG5cbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/library-management/report/lost-book/lost-book.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/library-management/report/lost-book/lost-book.component.ts ***!
  \***************************************************************************************/
/*! exports provided: LostBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LostBookComponent", function() { return LostBookComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/authenticator.service */ "./src/app/services/authenticator.service.ts");
/* harmony import */ var _services_library_report_report_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/library/report/report.service */ "./src/app/services/library/report/report.service.ts");
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





let LostBookComponent = /** @class */ (() => {
    let LostBookComponent = class LostBookComponent {
        constructor(router, cd, auth, reportService) {
            this.router = router;
            this.cd = cd;
            this.auth = auth;
            this.reportService = reportService;
            this.jsonFlag = {
                isProfessional: false,
            };
            this.lostbookrange = [];
            this.lostBookReportList = [];
        }
        ngOnInit() {
            this.lostbookrange[0] = new Date(moment__WEBPACK_IMPORTED_MODULE_2__().date(1).format("YYYY-MM-DD"));
            this.lostbookrange[1] = new Date(moment__WEBPACK_IMPORTED_MODULE_2__().format("YYYY-MM-DD"));
            // this.getLostBookReport(this.lostbookrange[0],this.lostbookrange[1]);
        }
        getLostBookReport(startDate, endDate) {
            let obj = {
                "between": {
                    "from": startDate,
                    "to": endDate
                },
                "in": [
                    {
                        "column": "status",
                        "values": [40, 60]
                    }
                ]
            };
            this.auth.showLoader();
            this.reportService.getLostBookReport(obj).subscribe(response => {
                this.auth.hideLoader();
                let result;
                result = response;
                if (result.length > 0) {
                    this.lostBookReportList = result;
                    this.fixedLostBookList = result;
                }
            }, errorResponse => {
                this.auth.hideLoader();
            });
        }
        searchDatabase() {
            if (this.searchText != "" && this.searchText != null) {
                let searchData;
                const peopleArray = Object.keys(this.fixedLostBookList).map(i => this.fixedLostBookList[i]);
                searchData = peopleArray.filter(item => Object.keys(item).some(k => item[k] != null && item[k].toString().toLowerCase().includes(this.searchText.toLowerCase())));
                this.lostBookReportList = searchData;
            }
            else {
                this.lostBookReportList = this.fixedLostBookList;
            }
        }
        getStartDate() {
            this.cd.markForCheck();
            let date = moment__WEBPACK_IMPORTED_MODULE_2__().date(1).format("YYYY-MM-DD");
            return this.lostbookrange[0];
        }
        getEndDate() {
            this.cd.markForCheck();
            return this.lostbookrange[1];
        }
        updateEnqChartByDate(e) {
            this.cd.markForCheck();
            this.getLostBookReport(moment__WEBPACK_IMPORTED_MODULE_2__(e[0]).format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_2__(e[1]).format("YYYY-MM-DD"));
        }
        openCalendar(id) {
            document.getElementById(id).click();
        }
    };
    LostBookComponent.ctorParameters = () => [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"] },
        { type: _services_library_report_report_service__WEBPACK_IMPORTED_MODULE_4__["ReportService"] }
    ];
    LostBookComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lost-book',
            template: __importDefault(__webpack_require__(/*! raw-loader!./lost-book.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/library-management/report/lost-book/lost-book.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./lost-book.component.scss */ "./src/app/components/library-management/report/lost-book/lost-book.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"],
            _services_library_report_report_service__WEBPACK_IMPORTED_MODULE_4__["ReportService"]])
    ], LostBookComponent);
    return LostBookComponent;
})();



/***/ }),

/***/ "./src/app/components/library-management/report/never-issued/never-issued.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/library-management/report/never-issued/never-issued.component.scss ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".table-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n\n.table-container .heading-container {\n  background: #e0eaec;\n  display: flex;\n  flex-direction: row;\n  font-size: 14px;\n  font-weight: 600;\n  text-align: left;\n  padding: 10px;\n  border: 1px solid #ccc;\n}\n\n.table-container .heading-container .heading-item {\n  width: 20%;\n}\n\n.table-container .value-outer-container {\n  display: flex;\n  flex-direction: column;\n  min-height: 50vh;\n  max-height: 50vh;\n  overflow-x: hidden;\n  overflow-y: auto;\n  border: 1px solid #ccc;\n}\n\n.table-container .value-outer-container .value-container {\n  display: flex;\n  flex-direction: row;\n  text-align: left;\n  padding: 10px;\n  font-size: 12px;\n  border-bottom: 1px solid #ccc;\n  border-top: none;\n}\n\n.table-container .value-outer-container .value-container .value-item {\n  width: 20%;\n}\n\n.table-container .value-outer-container .no-records {\n  display: flex;\n  justify-content: center;\n  padding: 10px;\n  font-size: 14px;\n  font-weight: 600;\n  border: 1px solid #ccc;\n  border-top: none;\n}\n\n.search-box {\n  border: 1px solid #ccc;\n  padding: 5px;\n  width: 20%;\n  float: right;\n  margin-right: 25px;\n  margin-bottom: 10px;\n}\n\n::ng-deep .bs-datepicker-container, .bs-daterangepicker-container {\n  left: 650 !important;\n}\n\n.filter-date-container {\n  position: relative;\n}\n\n.filter-date-container .enquiry-state-date {\n  font-size: 14px;\n  color: #666;\n  margin-right: 10px;\n  padding-top: 4px;\n  display: inline-block;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9saWJyYXJ5LW1hbmFnZW1lbnQvcmVwb3J0L25ldmVyLWlzc3VlZC9uZXZlci1pc3N1ZWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7QUFDYjs7QUFKQTtFQUtJLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixzQkFBc0I7QUFHMUI7O0FBZkE7RUFjTSxVQUFVO0FBS2hCOztBQW5CQTtFQWtCSSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixzQkFBc0I7QUFLMUI7O0FBN0JBO0VBMEJNLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLGdCQUFnQjtBQU90Qjs7QUF2Q0E7RUFrQ1EsVUFBVTtBQVNsQjs7QUEzQ0E7RUFzQ00sYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsZ0JBQWdCO0FBU3RCOztBQUZBO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixVQUFVO0VBQ1YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFLckI7O0FBRkE7RUFDRSxvQkFBb0I7QUFLdEI7O0FBRkE7RUFDRSxrQkFBa0I7QUFLcEI7O0FBTkE7RUFHTSxlQUFlO0VBQ2YsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIscUJBQXFCO0FBTzNCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9saWJyYXJ5LW1hbmFnZW1lbnQvcmVwb3J0L25ldmVyLWlzc3VlZC9uZXZlci1pc3N1ZWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG4gIC5oZWFkaW5nLWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZDogI2UwZWFlYztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgLmhlYWRpbmctaXRlbSB7XG4gICAgICB3aWR0aDogMjAlO1xuICAgIH1cbiAgfVxuICAudmFsdWUtb3V0ZXItY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWluLWhlaWdodDogNTB2aDtcbiAgICBtYXgtaGVpZ2h0OiA1MHZoO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgLnZhbHVlLWNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gICAgICBib3JkZXItdG9wOiBub25lO1xuICAgICAgLnZhbHVlLWl0ZW0ge1xuICAgICAgICB3aWR0aDogMjAlO1xuICAgICAgfVxuICAgIH1cbiAgICAubm8tcmVjb3Jkc3tcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgfVxuICB9XG5cbn1cblxuXG4uc2VhcmNoLWJveCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIHBhZGRpbmc6IDVweDtcbiAgd2lkdGg6IDIwJTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbjo6bmctZGVlcCAuYnMtZGF0ZXBpY2tlci1jb250YWluZXIsIC5icy1kYXRlcmFuZ2VwaWNrZXItY29udGFpbmVye1xuICBsZWZ0OiA2NTAgIWltcG9ydGFudDsgXG59XG5cbi5maWx0ZXItZGF0ZS1jb250YWluZXJ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLmVucXVpcnktc3RhdGUtZGF0ZSB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBjb2xvcjogIzY2NjtcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgIHBhZGRpbmctdG9wOiA0cHg7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cbn1cblxuIl19 */");

/***/ }),

/***/ "./src/app/components/library-management/report/never-issued/never-issued.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/library-management/report/never-issued/never-issued.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: NeverIssuedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NeverIssuedComponent", function() { return NeverIssuedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/authenticator.service */ "./src/app/services/authenticator.service.ts");
/* harmony import */ var _services_library_report_report_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/library/report/report.service */ "./src/app/services/library/report/report.service.ts");
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




let NeverIssuedComponent = /** @class */ (() => {
    let NeverIssuedComponent = class NeverIssuedComponent {
        constructor(reportService, auth, cd) {
            this.reportService = reportService;
            this.auth = auth;
            this.cd = cd;
            this.jsonFlag = {
                isProfessional: false,
            };
            this.neverIssuedBookReportList = [];
            this.lostbookrange = [];
            this.lostBookReportList = [];
            this.neverIssueCollectionRange = [];
        }
        ngOnInit() {
            this.lostbookrange[0] = new Date(moment__WEBPACK_IMPORTED_MODULE_1__().date(1).format("YYYY-MM-DD"));
            this.lostbookrange[1] = new Date(moment__WEBPACK_IMPORTED_MODULE_1__().format("YYYY-MM-DD"));
            this.getNeverIssuedBookReport();
        }
        openCalendar(id) {
            document.getElementById(id).click();
        }
        getStartDate() {
            this.cd.markForCheck();
            let date = moment__WEBPACK_IMPORTED_MODULE_1__().date(1).format("YYYY-MM-DD");
            return this.neverIssueCollectionRange[0];
        }
        getEndDate() {
            this.cd.markForCheck();
            return this.neverIssueCollectionRange[1];
        }
        getNeverIssuedBookReport() {
            this.auth.showLoader();
            this.reportService.getNeverIssuedBookReport().subscribe(response => {
                this.auth.hideLoader();
                let res;
                res = response;
                this.neverIssuedBookReportList = res.response;
                console.log(this.neverIssuedBookReportList);
            }, errorResponse => {
                this.auth.hideLoader();
            });
        }
    };
    NeverIssuedComponent.ctorParameters = () => [
        { type: _services_library_report_report_service__WEBPACK_IMPORTED_MODULE_3__["ReportService"] },
        { type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticatorService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
    ];
    NeverIssuedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-never-issued',
            template: __importDefault(__webpack_require__(/*! raw-loader!./never-issued.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/library-management/report/never-issued/never-issued.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./never-issued.component.scss */ "./src/app/components/library-management/report/never-issued/never-issued.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_services_library_report_report_service__WEBPACK_IMPORTED_MODULE_3__["ReportService"],
            _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticatorService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], NeverIssuedComponent);
    return NeverIssuedComponent;
})();



/***/ }),

/***/ "./src/app/components/library-management/report/overdue-book/overdue-book.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/library-management/report/overdue-book/overdue-book.component.scss ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".table-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n\n.table-container .heading-container {\n  background: #e0eaec;\n  display: flex;\n  flex-direction: row;\n  font-size: 14px;\n  font-weight: 600;\n  text-align: left;\n  padding: 10px;\n  border: 1px solid #ccc;\n}\n\n.table-container .heading-container .heading-item {\n  width: 20%;\n}\n\n.table-container .value-outer-container {\n  display: flex;\n  flex-direction: column;\n  min-height: 50vh;\n  max-height: 50vh;\n  overflow-x: hidden;\n  overflow-y: auto;\n  border: 1px solid #ccc;\n}\n\n.table-container .value-outer-container .value-container {\n  display: flex;\n  flex-direction: row;\n  text-align: left;\n  padding: 10px;\n  font-size: 12px;\n  border-bottom: 1px solid #ccc;\n  border-top: none;\n}\n\n.table-container .value-outer-container .value-container .value-item {\n  width: 20%;\n}\n\n.table-container .value-outer-container .no-records {\n  display: flex;\n  justify-content: center;\n  padding: 10px;\n  font-size: 14px;\n  font-weight: 600;\n  border: 1px solid #ccc;\n  border-top: none;\n}\n\n.filter-date-container {\n  position: relative;\n}\n\n.filter-date-container .enquiry-state-date {\n  font-size: 14px;\n  color: #666;\n  margin-right: 10px;\n  padding-top: 4px;\n  display: inline-block;\n}\n\n.search-box {\n  border: 1px solid #ccc;\n  padding: 5px;\n  width: 20%;\n  float: right;\n  margin-right: 25px;\n  margin-bottom: 10px;\n}\n\n::ng-deep .bs-datepicker-container, .bs-daterangepicker-container {\n  left: 650 !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9saWJyYXJ5LW1hbmFnZW1lbnQvcmVwb3J0L292ZXJkdWUtYm9vay9vdmVyZHVlLWJvb2suY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7QUFDYjs7QUFKQTtFQUtJLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixzQkFBc0I7QUFHMUI7O0FBZkE7RUFjTSxVQUFVO0FBS2hCOztBQW5CQTtFQWtCSSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixzQkFBc0I7QUFLMUI7O0FBN0JBO0VBMEJNLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLGdCQUFnQjtBQU90Qjs7QUF2Q0E7RUFrQ1EsVUFBVTtBQVNsQjs7QUEzQ0E7RUFzQ00sYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsZ0JBQWdCO0FBU3RCOztBQUhBO0VBQ0Usa0JBQWtCO0FBTXBCOztBQVBBO0VBR00sZUFBZTtFQUNmLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtBQVEzQjs7QUFKQTtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osVUFBVTtFQUNWLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBT3JCOztBQUpBO0VBQ0Usb0JBQW9CO0FBT3RCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9saWJyYXJ5LW1hbmFnZW1lbnQvcmVwb3J0L292ZXJkdWUtYm9vay9vdmVyZHVlLWJvb2suY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG4gIC5oZWFkaW5nLWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZDogI2UwZWFlYztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgLmhlYWRpbmctaXRlbSB7XG4gICAgICB3aWR0aDogMjAlO1xuICAgIH1cbiAgfVxuICAudmFsdWUtb3V0ZXItY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWluLWhlaWdodDogNTB2aDtcbiAgICBtYXgtaGVpZ2h0OiA1MHZoO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgLnZhbHVlLWNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gICAgICBib3JkZXItdG9wOiBub25lO1xuICAgICAgLnZhbHVlLWl0ZW0ge1xuICAgICAgICB3aWR0aDogMjAlO1xuICAgICAgfVxuICAgIH1cbiAgICAubm8tcmVjb3Jkc3tcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgfVxuICB9XG5cbn1cblxuLmZpbHRlci1kYXRlLWNvbnRhaW5lcntcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAuZW5xdWlyeS1zdGF0ZS1kYXRlIHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGNvbG9yOiAjNjY2O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgcGFkZGluZy10b3A6IDRweDtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxufVxuXG4uc2VhcmNoLWJveCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIHBhZGRpbmc6IDVweDtcbiAgd2lkdGg6IDIwJTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbjo6bmctZGVlcCAuYnMtZGF0ZXBpY2tlci1jb250YWluZXIsIC5icy1kYXRlcmFuZ2VwaWNrZXItY29udGFpbmVye1xuICBsZWZ0OiA2NTAgIWltcG9ydGFudDsgXG59Il19 */");

/***/ }),

/***/ "./src/app/components/library-management/report/overdue-book/overdue-book.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/library-management/report/overdue-book/overdue-book.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: OverdueBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverdueBookComponent", function() { return OverdueBookComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/authenticator.service */ "./src/app/services/authenticator.service.ts");
/* harmony import */ var _services_library_report_report_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/library/report/report.service */ "./src/app/services/library/report/report.service.ts");
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




let OverdueBookComponent = /** @class */ (() => {
    let OverdueBookComponent = class OverdueBookComponent {
        constructor(cd, auth, reportService) {
            this.cd = cd;
            this.auth = auth;
            this.reportService = reportService;
            this.jsonFlag = {
                isProfessional: false,
                isRippleLoad: false
            };
            this.overdueBookReportList = [];
            this.tempOverdueBookReportList = {};
            this.overdueCollectionRange = [];
            // FOR PAGINATION
            this.pageIndex = 1;
            this.displayBatchSize = 10;
            this.totalCount = 0;
            this.sizeArr = [10, 25, 50, 100, 150, 200, 500];
        }
        ngOnInit() {
            this.overdueCollectionRange[0] = new Date(moment__WEBPACK_IMPORTED_MODULE_1__().date(1).format("YYYY-MM-DD"));
            this.overdueCollectionRange[1] = new Date();
            this.getOverDueBookReport();
        }
        searchDatabase() {
            if (this.searchText != "" && this.searchText != null) {
                let searchData;
                let data = this.tempOverdueBookReportList;
                const peopleArray = Object.keys(data).map(i => data[i]);
                searchData = peopleArray.filter(item => Object.keys(item).some(k => item[k] != null && item[k].toString().toLowerCase().includes(this.searchText.toLowerCase())));
                this.tempOverdueBookReportList = searchData;
            }
            else {
                this.overdueBookReportList = this.tempOverdueBookReportList;
            }
        }
        openCalendar(id) {
            document.getElementById(id).click();
        }
        getStartDate() {
            this.cd.markForCheck();
            let date = moment__WEBPACK_IMPORTED_MODULE_1__().date(1).format("YYYY-MM-DD");
            return this.overdueCollectionRange[0];
        }
        getEndDate() {
            this.cd.markForCheck();
            return this.overdueCollectionRange[1];
        }
        getOverDueBookReport() {
            let obj = {
                "pageNo": this.pageIndex,
                "noOfRecords": this.displayBatchSize
            };
            this.auth.showLoader();
            this.reportService.getOverDueBookReport(obj).subscribe(response => {
                this.auth.hideLoader();
                let res;
                res = response;
                if (res.results.length > 0) {
                    this.overdueBookReportList = res.results;
                    this.tempOverdueBookReportList = res;
                    this.totalCount = res.totalRecords;
                }
            }, errorResponse => {
                this.auth.hideLoader();
            });
        }
        // printFeeReceipt(issueBookId){
        //   this.auth.showLoader();
        //   this.reportService.downloadReceipt(issueBookId).subscribe(
        //     response => {
        //       let res: any;
        //       res = response;
        //       this.auth.hideLoader();
        //       let byteArr = this.convertBase64ToArray(res.document);
        //       let fileName = res.docTitle;
        //       let file = new Blob([byteArr], { type: 'text/csv;charset=utf-8;' });
        //       let url = URL.createObjectURL(file);
        //       let dwldLink = document.getElementById('timeTable_download');
        //       dwldLink.setAttribute("href", url);
        //       dwldLink.setAttribute("download", fileName);
        //       document.body.appendChild(dwldLink);
        //       dwldLink.click();
        //     })
        // }
        //
        // convertBase64ToArray(val) {
        //
        //   var binary_string = window.atob(val);
        //   var len = binary_string.length;
        //   var bytes = new Uint8Array(len);
        //   for (var i = 0; i < len; i++) {
        //     bytes[i] = binary_string.charCodeAt(i);
        //   }
        //   return bytes.buffer;
        //
        // }
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
            this.getOverDueBookReport();
        }
        /* Fetches Data as per the user selected batch size */
        updateTableBatchSize(num) {
            this.pageIndex = 1;
            this.displayBatchSize = parseInt(num);
            this.getOverDueBookReport();
        }
    };
    OverdueBookComponent.ctorParameters = () => [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticatorService"] },
        { type: _services_library_report_report_service__WEBPACK_IMPORTED_MODULE_3__["ReportService"] }
    ];
    OverdueBookComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-overdue-book',
            template: __importDefault(__webpack_require__(/*! raw-loader!./overdue-book.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/library-management/report/overdue-book/overdue-book.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./overdue-book.component.scss */ "./src/app/components/library-management/report/overdue-book/overdue-book.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _services_authenticator_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticatorService"],
            _services_library_report_report_service__WEBPACK_IMPORTED_MODULE_3__["ReportService"]])
    ], OverdueBookComponent);
    return OverdueBookComponent;
})();



/***/ }),

/***/ "./src/app/components/library-management/report/report-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/library-management/report/report-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: ReportRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportRoutingModule", function() { return ReportRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _report_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./report.component */ "./src/app/components/library-management/report/report.component.ts");
/* harmony import */ var _lost_book_lost_book_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lost-book/lost-book.component */ "./src/app/components/library-management/report/lost-book/lost-book.component.ts");
/* harmony import */ var _scrap_book_scrap_book_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scrap-book/scrap-book.component */ "./src/app/components/library-management/report/scrap-book/scrap-book.component.ts");
/* harmony import */ var _fine_collection_fine_collection_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fine-collection/fine-collection.component */ "./src/app/components/library-management/report/fine-collection/fine-collection.component.ts");
/* harmony import */ var _issued_book_issued_book_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./issued-book/issued-book.component */ "./src/app/components/library-management/report/issued-book/issued-book.component.ts");
/* harmony import */ var _overdue_book_overdue_book_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./overdue-book/overdue-book.component */ "./src/app/components/library-management/report/overdue-book/overdue-book.component.ts");
/* harmony import */ var _never_issued_never_issued_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./never-issued/never-issued.component */ "./src/app/components/library-management/report/never-issued/never-issued.component.ts");
/* harmony import */ var _return_book_return_book_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./return-book/return-book.component */ "./src/app/components/library-management/report/return-book/return-book.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










let ReportRoutingModule = /** @class */ (() => {
    let ReportRoutingModule = class ReportRoutingModule {
    };
    ReportRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _report_component__WEBPACK_IMPORTED_MODULE_2__["ReportComponent"],
                        pathMatch: 'prefix',
                        children: [
                            {
                                path: '',
                                component: _lost_book_lost_book_component__WEBPACK_IMPORTED_MODULE_3__["LostBookComponent"],
                                pathMatch: 'prefix'
                            },
                            {
                                path: 'home',
                                component: _lost_book_lost_book_component__WEBPACK_IMPORTED_MODULE_3__["LostBookComponent"],
                                pathMatch: 'prefix'
                            },
                            {
                                path: 'lost',
                                component: _lost_book_lost_book_component__WEBPACK_IMPORTED_MODULE_3__["LostBookComponent"],
                                pathMatch: 'prefix'
                            },
                            {
                                path: 'scrap',
                                component: _scrap_book_scrap_book_component__WEBPACK_IMPORTED_MODULE_4__["ScrapBookComponent"],
                                pathMatch: 'prefix'
                            },
                            {
                                path: 'fine',
                                component: _fine_collection_fine_collection_component__WEBPACK_IMPORTED_MODULE_5__["FineCollectionComponent"],
                                pathMatch: 'prefix'
                            },
                            {
                                path: 'issued',
                                component: _issued_book_issued_book_component__WEBPACK_IMPORTED_MODULE_6__["IssuedBookComponent"],
                                pathMatch: 'prefix'
                            },
                            {
                                path: 'overdue',
                                component: _overdue_book_overdue_book_component__WEBPACK_IMPORTED_MODULE_7__["OverdueBookComponent"],
                                pathMatch: 'prefix'
                            },
                            {
                                path: 'never-issued',
                                component: _never_issued_never_issued_component__WEBPACK_IMPORTED_MODULE_8__["NeverIssuedComponent"],
                                pathMatch: 'prefix'
                            },
                            {
                                path: 'retrun-book',
                                component: _return_book_return_book_component__WEBPACK_IMPORTED_MODULE_9__["ReturnBookComponent"],
                                pathMatch: 'prefix'
                            }
                        ]
                    }
                ])],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ReportRoutingModule);
    return ReportRoutingModule;
})();



/***/ }),

/***/ "./src/app/components/library-management/report/report.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/components/library-management/report/report.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".horizontal-menu {\n  display: flex;\n  flex-direction: row;\n}\n\n.horizontal-menu .horizontal-menu-item {\n  display: inline-block;\n  margin: 0 16px;\n  font-weight: bold;\n  position: relative;\n  bottom: -1px;\n}\n\n.horizontal-menu .horizontal-menu-item span {\n  color: #9b9b9b;\n  padding-bottom: 8px;\n  cursor: pointer;\n}\n\n.horizontal-menu .active-menu span {\n  border-bottom: 3px solid #528ff0;\n  color: #528ff0;\n}\n\n.horizontal-menu .horizontal-menu-item span:hover {\n  color: #528ff0;\n  border-bottom: 3px solid #528ff0;\n  padding-bottom: 10px;\n  cursor: pointer;\n}\n\n.report-sction {\n  margin-top: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9saWJyYXJ5LW1hbmFnZW1lbnQvcmVwb3J0L3JlcG9ydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBSEE7RUFJSSxxQkFBcUI7RUFDckIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsWUFBWTtBQUdoQjs7QUFYQTtFQVVNLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsZUFBZTtBQUtyQjs7QUFqQkE7RUFnQkksZ0NBQWdDO0VBQ2hDLGNBQWM7QUFLbEI7O0FBdEJBO0VBb0JNLGNBQWM7RUFDZCxnQ0FBZ0M7RUFDaEMsb0JBQW9CO0VBQ3BCLGVBQWU7QUFNckI7O0FBRkE7RUFDRSxnQkFBZ0I7QUFLbEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xpYnJhcnktbWFuYWdlbWVudC9yZXBvcnQvcmVwb3J0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvcml6b250YWwtbWVudXtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgLmhvcml6b250YWwtbWVudS1pdGVte1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW46IDAgMTZweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm90dG9tOiAtMXB4O1xuICAgIHNwYW57XG4gICAgICBjb2xvcjogIzliOWI5YjtcbiAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICB9XG4gIC5hY3RpdmUtbWVudSBzcGFue1xuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjNTI4ZmYwO1xuICAgIGNvbG9yOiAjNTI4ZmYwO1xuICB9XG4gIC5ob3Jpem9udGFsLW1lbnUtaXRlbSBzcGFuOmhvdmVye1xuICAgICAgY29sb3I6ICM1MjhmZjA7XG4gICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzUyOGZmMDtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbn1cblxuLnJlcG9ydC1zY3Rpb257XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/components/library-management/report/report.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/library-management/report/report.component.ts ***!
  \**************************************************************************/
/*! exports provided: ReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportComponent", function() { return ReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
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


let ReportComponent = /** @class */ (() => {
    let ReportComponent = class ReportComponent {
        constructor(router) {
            this.router = router;
        }
        ngOnInit() {
            this.checkWhichTabIsOpen();
        }
        toggle(id) {
            for (let i = 0; i < 7; i++) {
                document.getElementsByClassName("horizontal-menu-item")[i].classList.remove("active-menu");
            }
            document.getElementById(id).classList.add("active-menu");
        }
        checkWhichTabIsOpen() {
            if (this.router.url.includes('lost')) {
                this.toggle('lost');
            }
            else if (this.router.url.includes('scrap')) {
                this.toggle('scrap');
            }
            else if (this.router.url.includes('fine')) {
                this.toggle('fine');
            }
            else if (this.router.url.includes('report/issued')) {
                this.toggle('issued');
            }
            else if (this.router.url.includes('overdue')) {
                this.toggle('overdue');
            }
            else if (this.router.url.includes('never')) {
                this.toggle('never');
            }
            else if (this.router.url.includes('retrun-book')) {
                this.toggle('return');
            }
        }
    };
    ReportComponent.ctorParameters = () => [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ];
    ReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-report',
            template: __importDefault(__webpack_require__(/*! raw-loader!./report.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/library-management/report/report.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./report.component.scss */ "./src/app/components/library-management/report/report.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ReportComponent);
    return ReportComponent;
})();



/***/ }),

/***/ "./src/app/components/library-management/report/report.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/library-management/report/report.module.ts ***!
  \***********************************************************************/
/*! exports provided: ReportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportModule", function() { return ReportModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _report_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./report-routing.module */ "./src/app/components/library-management/report/report-routing.module.ts");
/* harmony import */ var _report_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./report.component */ "./src/app/components/library-management/report/report.component.ts");
/* harmony import */ var _lost_book_lost_book_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lost-book/lost-book.component */ "./src/app/components/library-management/report/lost-book/lost-book.component.ts");
/* harmony import */ var _scrap_book_scrap_book_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scrap-book/scrap-book.component */ "./src/app/components/library-management/report/scrap-book/scrap-book.component.ts");
/* harmony import */ var _fine_collection_fine_collection_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fine-collection/fine-collection.component */ "./src/app/components/library-management/report/fine-collection/fine-collection.component.ts");
/* harmony import */ var _issued_book_issued_book_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./issued-book/issued-book.component */ "./src/app/components/library-management/report/issued-book/issued-book.component.ts");
/* harmony import */ var _overdue_book_overdue_book_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./overdue-book/overdue-book.component */ "./src/app/components/library-management/report/overdue-book/overdue-book.component.ts");
/* harmony import */ var _never_issued_never_issued_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./never-issued/never-issued.component */ "./src/app/components/library-management/report/never-issued/never-issued.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/components/shared/shared.module.ts");
/* harmony import */ var _services_library_report_report_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../services/library/report/report.service */ "./src/app/services/library/report/report.service.ts");
/* harmony import */ var _return_book_return_book_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./return-book/return-book.component */ "./src/app/components/library-management/report/return-book/return-book.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















let ReportModule = /** @class */ (() => {
    let ReportModule = class ReportModule {
    };
    ReportModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                // BsDatepickerModule,
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _report_routing_module__WEBPACK_IMPORTED_MODULE_2__["ReportRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"]
            ],
            declarations: [
                _report_component__WEBPACK_IMPORTED_MODULE_3__["ReportComponent"],
                _lost_book_lost_book_component__WEBPACK_IMPORTED_MODULE_4__["LostBookComponent"],
                _scrap_book_scrap_book_component__WEBPACK_IMPORTED_MODULE_5__["ScrapBookComponent"],
                _fine_collection_fine_collection_component__WEBPACK_IMPORTED_MODULE_6__["FineCollectionComponent"],
                _issued_book_issued_book_component__WEBPACK_IMPORTED_MODULE_7__["IssuedBookComponent"],
                _overdue_book_overdue_book_component__WEBPACK_IMPORTED_MODULE_8__["OverdueBookComponent"],
                _never_issued_never_issued_component__WEBPACK_IMPORTED_MODULE_9__["NeverIssuedComponent"],
                _return_book_return_book_component__WEBPACK_IMPORTED_MODULE_14__["ReturnBookComponent"]
            ],
            entryComponents: [
                _lost_book_lost_book_component__WEBPACK_IMPORTED_MODULE_4__["LostBookComponent"]
            ],
            providers: [
                _services_library_report_report_service__WEBPACK_IMPORTED_MODULE_13__["ReportService"]
            ]
        })
    ], ReportModule);
    return ReportModule;
})();



/***/ }),

/***/ "./src/app/components/library-management/report/return-book/return-book.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/library-management/report/return-book/return-book.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".filter-date-container .enquiry-state-date {\n  font-size: 14px;\n  color: #666;\n  margin-right: 10px;\n  padding-top: 4px;\n  display: inline-block;\n}\n\n.widgetDatepicker {\n  position: absolute;\n  margin-left: -10%;\n  width: 1px;\n  visibility: hidden;\n  opacity: 0;\n}\n\n.bsDatepicker {\n  padding: 5px;\n  width: 100%;\n  position: absolute;\n}\n\n.search-box {\n  border: 1px solid #ccc;\n  padding: 5px;\n  width: 20%;\n  float: right;\n  margin-right: 25px;\n  margin-bottom: 10px;\n}\n\nbutton {\n  background: transparent;\n}\n\nbutton.drag-button {\n  cursor: all-scroll;\n  margin-left: 16px;\n}\n\n.table-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n\n.table-container .heading-container {\n  background: #e0eaec;\n  display: flex;\n  flex-direction: row;\n  font-size: 14px;\n  font-weight: 600;\n  text-align: left;\n  padding: 10px;\n  border: 1px solid #ccc;\n}\n\n.table-container .heading-container .heading-item {\n  width: 20%;\n}\n\n.table-container .value-outer-container {\n  display: flex;\n  flex-direction: column;\n  min-height: 50vh;\n  max-height: 50vh;\n  overflow-x: hidden;\n  overflow-y: auto;\n  border: 1px solid #ccc;\n}\n\n.table-container .value-outer-container .value-container {\n  display: flex;\n  flex-direction: row;\n  text-align: left;\n  padding: 10px;\n  font-size: 12px;\n  border-bottom: 1px solid #ccc;\n  border-top: none;\n}\n\n.table-container .value-outer-container .value-container .value-item {\n  width: 20%;\n}\n\n.table-container .value-outer-container .no-records {\n  display: flex;\n  justify-content: center;\n  padding: 10px;\n  font-size: 14px;\n  font-weight: 600;\n  border: 1px solid #ccc;\n  border-top: none;\n}\n\n.search-box {\n  border: 1px solid #ccc;\n  padding: 5px;\n  width: 20%;\n  float: right;\n  margin-right: 25px;\n  margin-bottom: 10px;\n}\n\n::ng-deep .bs-datepicker-container, .bs-daterangepicker-container {\n  left: 650 !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9saWJyYXJ5LW1hbmFnZW1lbnQvcmVwb3J0L3JldHVybi1ib29rL3JldHVybi1ib29rLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRU0sZUFBZTtFQUNmLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtBQUEzQjs7QUFHQTtFQUNJLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixVQUFVO0FBQWQ7O0FBR0E7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtBQUFwQjs7QUFHQTtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osVUFBVTtFQUNWLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQXJCOztBQUdBO0VBQ0ksdUJBQXVCO0FBQTNCOztBQURBO0VBR1Esa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUV6Qjs7QUFHQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsV0FBVztBQUFiOztBQUhBO0VBS0ksbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNCQUFzQjtBQUUxQjs7QUFkQTtFQWNNLFVBQVU7QUFJaEI7O0FBbEJBO0VBa0JJLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtBQUkxQjs7QUE1QkE7RUEwQk0sYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0IsZ0JBQWdCO0FBTXRCOztBQXRDQTtFQWtDUSxVQUFVO0FBUWxCOztBQTFDQTtFQXNDTSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixnQkFBZ0I7QUFRdEI7O0FBRkE7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFVBQVU7RUFDVixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUtyQjs7QUFGQTtFQUNFLG9CQUFvQjtBQUt0QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGlicmFyeS1tYW5hZ2VtZW50L3JlcG9ydC9yZXR1cm4tYm9vay9yZXR1cm4tYm9vay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maWx0ZXItZGF0ZS1jb250YWluZXJ7XG4gIC5lbnF1aXJ5LXN0YXRlLWRhdGUge1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgY29sb3I6ICM2NjY7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICBwYWRkaW5nLXRvcDogNHB4O1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG59XG4ud2lkZ2V0RGF0ZXBpY2tlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1hcmdpbi1sZWZ0OiAtMTAlO1xuICAgIHdpZHRoOiAxcHg7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIG9wYWNpdHk6IDA7XG59XG5cbi5ic0RhdGVwaWNrZXIge1xuICBwYWRkaW5nOiA1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5zZWFyY2gtYm94IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgcGFkZGluZzogNXB4O1xuICB3aWR0aDogMjAlO1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogMjVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAmLmRyYWctYnV0dG9uIHtcbiAgICAgICAgY3Vyc29yOiBhbGwtc2Nyb2xsO1xuICAgICAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICB9XG59XG5cblxuLnRhYmxlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xuICAuaGVhZGluZy1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQ6ICNlMGVhZWM7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIC5oZWFkaW5nLWl0ZW0ge1xuICAgICAgd2lkdGg6IDIwJTtcbiAgICB9XG4gIH1cbiAgLnZhbHVlLW91dGVyLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1pbi1oZWlnaHQ6IDUwdmg7XG4gICAgbWF4LWhlaWdodDogNTB2aDtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIC52YWx1ZS1jb250YWluZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICAgICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICAgIC52YWx1ZS1pdGVtIHtcbiAgICAgICAgd2lkdGg6IDIwJTtcbiAgICAgIH1cbiAgICB9XG4gICAgLm5vLXJlY29yZHN7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICBib3JkZXItdG9wOiBub25lO1xuICAgIH1cbiAgfVxuXG59XG5cbi5zZWFyY2gtYm94IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgcGFkZGluZzogNXB4O1xuICB3aWR0aDogMjAlO1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogMjVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuOjpuZy1kZWVwIC5icy1kYXRlcGlja2VyLWNvbnRhaW5lciwgLmJzLWRhdGVyYW5nZXBpY2tlci1jb250YWluZXJ7XG4gIGxlZnQ6IDY1MCAhaW1wb3J0YW50OyBcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/library-management/report/return-book/return-book.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/library-management/report/return-book/return-book.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ReturnBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReturnBookComponent", function() { return ReturnBookComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/authenticator.service */ "./src/app/services/authenticator.service.ts");
/* harmony import */ var _services_library_report_report_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/library/report/report.service */ "./src/app/services/library/report/report.service.ts");
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





let ReturnBookComponent = /** @class */ (() => {
    let ReturnBookComponent = class ReturnBookComponent {
        constructor(router, cd, auth, reportService) {
            this.router = router;
            this.cd = cd;
            this.auth = auth;
            this.reportService = reportService;
            this.jsonFlag = {
                isProfessional: false
            };
            this.returnbookrange = [];
            this.returnBookReportList = [];
        }
        ngOnInit() {
            this.returnbookrange[0] = new Date(moment__WEBPACK_IMPORTED_MODULE_2__().date(1).format("YYYY-MM-DD"));
            this.returnbookrange[1] = new Date(moment__WEBPACK_IMPORTED_MODULE_2__().format("YYYY-MM-DD"));
            // this.getReturnBookReport(this.returnbookrange[0],this.returnbookrange[1]);
        }
        getReturnBookReport(startDate, endDate) {
            let obj = {
                "between": {
                    "from": startDate,
                    "to": endDate
                },
                "in": [
                    {
                        "column": "status",
                        "values": [40, 60]
                    }
                ]
            };
            this.auth.showLoader();
            this.reportService.getReturnBookReport(obj).subscribe(response => {
                this.auth.hideLoader();
                let result;
                result = response;
                if (result.length > 0) {
                    this.returnBookReportList = result;
                    this.fixedReturnBookList = result;
                }
            }, errorResponse => {
                this.auth.hideLoader();
            });
        }
        searchDatabase() {
            if (this.searchText != "" && this.searchText != null) {
                let searchData;
                const peopleArray = Object.keys(this.fixedReturnBookList).map(i => this.fixedReturnBookList[i]);
                searchData = peopleArray.filter(item => Object.keys(item).some(k => item[k] != null && item[k].toString().toLowerCase().includes(this.searchText.toLowerCase())));
                this.returnBookReportList = searchData;
            }
            else {
                this.returnBookReportList = this.fixedReturnBookList;
            }
        }
        getStartDate() {
            this.cd.markForCheck();
            let date = moment__WEBPACK_IMPORTED_MODULE_2__().date(1).format("YYYY-MM-DD");
            return this.returnbookrange[0];
        }
        getEndDate() {
            this.cd.markForCheck();
            return this.returnbookrange[1];
        }
        updateEnqChartByDate(e) {
            this.cd.markForCheck();
            this.getReturnBookReport(moment__WEBPACK_IMPORTED_MODULE_2__(e[0]).format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_2__(e[1]).format("YYYY-MM-DD"));
        }
        openCalendar(id) {
            document.getElementById(id).click();
        }
    };
    ReturnBookComponent.ctorParameters = () => [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"] },
        { type: _services_library_report_report_service__WEBPACK_IMPORTED_MODULE_4__["ReportService"] }
    ];
    ReturnBookComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-return-book',
            template: __importDefault(__webpack_require__(/*! raw-loader!./return-book.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/library-management/report/return-book/return-book.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./return-book.component.scss */ "./src/app/components/library-management/report/return-book/return-book.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"],
            _services_library_report_report_service__WEBPACK_IMPORTED_MODULE_4__["ReportService"]])
    ], ReturnBookComponent);
    return ReturnBookComponent;
})();



/***/ }),

/***/ "./src/app/components/library-management/report/scrap-book/scrap-book.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/library-management/report/scrap-book/scrap-book.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".filter-date-container .enquiry-state-date {\n  font-size: 14px;\n  color: #666;\n  margin-right: 10px;\n  padding-top: 4px;\n  display: inline-block;\n}\n\n.widgetDatepicker {\n  position: absolute;\n  margin-left: -10%;\n  width: 1px;\n  visibility: hidden;\n  opacity: 0;\n}\n\nbutton {\n  background: transparent;\n}\n\nbutton.drag-button {\n  cursor: all-scroll;\n  margin-left: 16px;\n}\n\n.search-box {\n  border: 1px solid #ccc;\n  padding: 5px;\n  width: 20%;\n  float: right;\n  margin-right: 25px;\n  margin-bottom: 10px;\n}\n\n.table-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n\n.table-container .heading-container {\n  background: #e0eaec;\n  display: flex;\n  flex-direction: row;\n  font-size: 14px;\n  font-weight: 600;\n  text-align: left;\n  padding: 10px;\n  border: 1px solid #ccc;\n}\n\n.table-container .heading-container .heading-item {\n  width: 20%;\n}\n\n.table-container .value-outer-container {\n  display: flex;\n  flex-direction: column;\n  min-height: 50vh;\n  max-height: 50vh;\n  overflow-x: hidden;\n  overflow-y: auto;\n  border: 1px solid #ccc;\n}\n\n.table-container .value-outer-container .value-container {\n  display: flex;\n  flex-direction: row;\n  text-align: left;\n  padding: 10px;\n  font-size: 12px;\n  border-bottom: 1px solid #ccc;\n  border-top: none;\n}\n\n.table-container .value-outer-container .value-container .value-item {\n  width: 20%;\n}\n\n.table-container .value-outer-container .no-records {\n  display: flex;\n  justify-content: center;\n  padding: 10px;\n  font-size: 14px;\n  font-weight: 600;\n  border: 1px solid #ccc;\n  border-top: none;\n}\n\n.search-box {\n  border: 1px solid #ccc;\n  padding: 5px;\n  width: 20%;\n  float: right;\n  margin-right: 25px;\n  margin-bottom: 10px;\n}\n\n::ng-deep .bs-datepicker-container, .bs-daterangepicker-container {\n  left: 650 !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9saWJyYXJ5LW1hbmFnZW1lbnQvcmVwb3J0L3NjcmFwLWJvb2svc2NyYXAtYm9vay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVNLGVBQWU7RUFDZixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixxQkFBcUI7QUFBM0I7O0FBR0E7RUFDSSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsVUFBVTtBQUFkOztBQUdBO0VBQ0ksdUJBQXVCO0FBQTNCOztBQURBO0VBR1Esa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUV6Qjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osVUFBVTtFQUNWLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0FBQ2I7O0FBSkE7RUFLSSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0JBQXNCO0FBRzFCOztBQWZBO0VBY00sVUFBVTtBQUtoQjs7QUFuQkE7RUFrQkksYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0FBSzFCOztBQTdCQTtFQTBCTSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsZUFBZTtFQUNmLDZCQUE2QjtFQUM3QixnQkFBZ0I7QUFPdEI7O0FBdkNBO0VBa0NRLFVBQVU7QUFTbEI7O0FBM0NBO0VBc0NNLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtBQVN0Qjs7QUFIQTtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osVUFBVTtFQUNWLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBTXJCOztBQUhBO0VBQ0Usb0JBQW9CO0FBTXRCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9saWJyYXJ5LW1hbmFnZW1lbnQvcmVwb3J0L3NjcmFwLWJvb2svc2NyYXAtYm9vay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maWx0ZXItZGF0ZS1jb250YWluZXJ7XG4gIC5lbnF1aXJ5LXN0YXRlLWRhdGUge1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgY29sb3I6ICM2NjY7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICBwYWRkaW5nLXRvcDogNHB4O1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG59XG4ud2lkZ2V0RGF0ZXBpY2tlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1hcmdpbi1sZWZ0OiAtMTAlO1xuICAgIHdpZHRoOiAxcHg7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIG9wYWNpdHk6IDA7XG59XG5cbmJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgJi5kcmFnLWJ1dHRvbiB7XG4gICAgICAgIGN1cnNvcjogYWxsLXNjcm9sbDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgfVxufVxuXG4uc2VhcmNoLWJveCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIHBhZGRpbmc6IDVweDtcbiAgd2lkdGg6IDIwJTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi50YWJsZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbiAgLmhlYWRpbmctY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZTBlYWVjO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAuaGVhZGluZy1pdGVtIHtcbiAgICAgIHdpZHRoOiAyMCU7XG4gICAgfVxuICB9XG4gIC52YWx1ZS1vdXRlci1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtaW4taGVpZ2h0OiA1MHZoO1xuICAgIG1heC1oZWlnaHQ6IDUwdmg7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAudmFsdWUtY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgICAudmFsdWUtaXRlbSB7XG4gICAgICAgIHdpZHRoOiAyMCU7XG4gICAgICB9XG4gICAgfVxuICAgIC5uby1yZWNvcmRze1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICB9XG4gIH1cblxufVxuXG4uc2VhcmNoLWJveCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIHBhZGRpbmc6IDVweDtcbiAgd2lkdGg6IDIwJTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbjo6bmctZGVlcCAuYnMtZGF0ZXBpY2tlci1jb250YWluZXIsIC5icy1kYXRlcmFuZ2VwaWNrZXItY29udGFpbmVye1xuICBsZWZ0OiA2NTAgIWltcG9ydGFudDsgXG59Il19 */");

/***/ }),

/***/ "./src/app/components/library-management/report/scrap-book/scrap-book.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/library-management/report/scrap-book/scrap-book.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ScrapBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrapBookComponent", function() { return ScrapBookComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/authenticator.service */ "./src/app/services/authenticator.service.ts");
/* harmony import */ var _services_library_report_report_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/library/report/report.service */ "./src/app/services/library/report/report.service.ts");
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





let ScrapBookComponent = /** @class */ (() => {
    let ScrapBookComponent = class ScrapBookComponent {
        constructor(router, cd, auth, reportService) {
            this.router = router;
            this.cd = cd;
            this.auth = auth;
            this.reportService = reportService;
            this.jsonFlag = {
                isProfessional: false
            };
            this.scrapbookrange = [];
            this.scrapBookReportList = [];
        }
        ngOnInit() {
            this.scrapbookrange[0] = new Date(moment__WEBPACK_IMPORTED_MODULE_2__().date(1).format("YYYY-MM-DD"));
            this.scrapbookrange[1] = new Date(moment__WEBPACK_IMPORTED_MODULE_2__().format("YYYY-MM-DD"));
            // this.getScrapBookReport(this.scrapbookrange[0],this.scrapbookrange[1]);
        }
        getScrapBookReport(startDate, endDate) {
            let obj = {
                "between": {
                    "from": startDate,
                    "to": endDate
                },
                "in": [
                    {
                        "column": "status",
                        "values": [50, 70] //  Book scraped by librarian or student
                    }
                ]
            };
            this.auth.showLoader();
            this.reportService.getScrapBookReport(obj).subscribe(response => {
                this.auth.hideLoader();
                let result;
                result = response;
                if (result.length > 0) {
                    this.scrapBookReportList = result;
                    this.fixedScrapBookList = result;
                }
            }, errorResponse => {
                this.auth.hideLoader();
            });
        }
        searchDatabase() {
            if (this.searchText != "" && this.searchText != null) {
                let searchData;
                const peopleArray = Object.keys(this.fixedScrapBookList).map(i => this.fixedScrapBookList[i]);
                searchData = peopleArray.filter(item => Object.keys(item).some(k => item[k] != null && item[k].toString().toLowerCase().includes(this.searchText.toLowerCase())));
                this.scrapBookReportList = searchData;
            }
            else {
                this.scrapBookReportList = this.fixedScrapBookList;
            }
        }
        getStartDate() {
            this.cd.markForCheck();
            let date = moment__WEBPACK_IMPORTED_MODULE_2__().date(1).format("YYYY-MM-DD");
            return this.scrapbookrange[0];
        }
        getEndDate() {
            this.cd.markForCheck();
            return this.scrapbookrange[1];
        }
        updateEnqChartByDate(e) {
            this.cd.markForCheck();
            this.getScrapBookReport(moment__WEBPACK_IMPORTED_MODULE_2__(e[0]).format("YYYY-MM-DD"), moment__WEBPACK_IMPORTED_MODULE_2__(e[1]).format("YYYY-MM-DD"));
        }
        openCalendar(id) {
            document.getElementById(id).click();
        }
    };
    ScrapBookComponent.ctorParameters = () => [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
        { type: _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"] },
        { type: _services_library_report_report_service__WEBPACK_IMPORTED_MODULE_4__["ReportService"] }
    ];
    ScrapBookComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-scrap-book',
            template: __importDefault(__webpack_require__(/*! raw-loader!./scrap-book.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/library-management/report/scrap-book/scrap-book.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./scrap-book.component.scss */ "./src/app/components/library-management/report/scrap-book/scrap-book.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _services_authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"],
            _services_library_report_report_service__WEBPACK_IMPORTED_MODULE_4__["ReportService"]])
    ], ScrapBookComponent);
    return ScrapBookComponent;
})();



/***/ }),

/***/ "./src/app/services/library/report/report.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/services/library/report/report.service.ts ***!
  \***********************************************************/
/*! exports provided: ReportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportService", function() { return ReportService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _authenticator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../authenticator.service */ "./src/app/services/authenticator.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let ReportService = /** @class */ (() => {
    let ReportService = class ReportService {
        constructor(http, auth) {
            this.http = http;
            this.auth = auth;
            this.baseUrl = '';
            this.userid = sessionStorage.getItem('userid');
            this.auth.currentInstituteId.subscribe(id => {
                this.institute_id = id;
            });
            this.auth.currentAuthKey.subscribe(key => {
                this.Authorization = key;
                this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
                this.headers = this.headers.append('Content-Type', 'application/json');
                this.headers = this.headers.append('Authorization', this.Authorization);
                this.headers = this.headers.append("Accept", "*");
                this.headers = this.headers.append("x-proc-inst-id", this.institute_id.toString());
                this.headers = this.headers.append("x-proc-user-id", this.userid.toString());
            });
            this.baseUrl = this.auth.getBaseUrl();
        }
        getLostBookReport(obj) {
            let url = this.baseUrl + "/library/report/lostBookReport";
            return this.http.post(url, obj, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(response => {
                return response;
            }, errorResponse => {
                return errorResponse;
            }));
        }
        getScrapBookReport(obj) {
            let url = this.baseUrl + "/library/report/scrapBookReport";
            return this.http.post(url, obj, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(response => {
                return response;
            }, errorResponse => {
                return errorResponse;
            }));
        }
        getOverDueBookReport(obj) {
            let url = this.baseUrl + "/library/report/overdueBookReport";
            return this.http.post(url, obj, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(response => {
                return response;
            }, errorResponse => {
                return errorResponse;
            }));
        }
        getNeverIssuedBookReport() {
            let url = this.baseUrl + "/library/analytics/never-issued-books";
            return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(response => {
                return response;
            }, errorResponse => {
                return errorResponse;
            }));
        }
        getFineCollectionReport(obj) {
            let url = this.baseUrl + "/library/report/fineCollectionReportBorrowerWise";
            return this.http.post(url, obj, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(response => {
                return response;
            }, errorResponse => {
                return errorResponse;
            }));
        }
        getIssueBookReport(obj) {
            let url = this.baseUrl + "/library/report/issuedBookReport";
            return this.http.post(url, obj, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(response => {
                return response;
            }, errorResponse => {
                return errorResponse;
            }));
        }
        getReturnBookReport(obj) {
            let url = this.baseUrl + "/library/report/overdueBookReport";
            return this.http.post(url, obj, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(response => {
                return response;
            }, errorResponse => {
                return errorResponse;
            }));
        }
        downloadReceipt(issueBookId) {
            let url = this.baseUrl + "/library/book/download?issueBookId=" + issueBookId;
            return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(response => {
                return response;
            }, errorResponse => {
                return errorResponse;
            }));
        }
    };
    ReportService.ctorParameters = () => [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"] }
    ];
    ReportService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _authenticator_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticatorService"]])
    ], ReportService);
    return ReportService;
})();



/***/ })

}]);
//# sourceMappingURL=app-components-library-management-report-report-module-es2015.js.map