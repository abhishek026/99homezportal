(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-reports-reports-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/reports/reports.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/reports/reports.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<!-- =================institute-report-popups================= -->\n<div class=\"sumerry-report\">\n<div class=\"black-bg1\"  id=\"black-bg1\"  *ngIf=\"viewPopUp\"  ></div>\n    <section id=\"\" class=\"popupWrapper fadeIn\" *ngIf=\"downloadReportFor.summaryOptions\">\n\n    <div class=\"popup  popup-body-container\" style=\"max-width: 30% ;top: 14% !important;\" >\n        <div class=\"popup-wrapper pos-rel\">\n            <span class=\"closePopup pos-abs fbold show\" id=\"popupCloseBtn\" (click)=\"closeViewPopUp()\" >\n                <svg class=\"artdeco-icon\" focusable=\"false\" height=\"24px\" preserveAspectRatio=\"xMinYMin meet\"\n                    viewBox=\"0 0 24 24\" width=\"24px\" x=\"0\" y=\"0\">\n                    <path class=\"large-icon\"\n                        d=\"M20,5.32L13.32,12,20,18.68,18.66,20,12,13.33,5.34,20,4,18.68,10.68,12,4,5.32,5.32,4,12,10.69,18.68,4Z\"\n                        style=\"fill: currentColor\" ></path>\n                </svg>\n            </span>\n <!-- <div id=\"addAccountModal\" class=\"modal fade\" role=\"dialog\" data-backdrop=\"static\">\n <div class=\"modal-dialog\">\n<div class=\"modal-content\" > -->\n<h2>Download Summary Report</h2>\n<div class=\"content-section\">\n  <div class=\"download-report\">\n      <div class=\"label-container\">\n          <span>Download summary report for</span>\n      </div>\n      <div class=\"checkbox-container\">\n          <div class=\"field-checkbox-wrapper\">\n              <input type=\"checkbox\" value=\"\" name=\"slotLabel\"\n                  [(ngModel)]=\"downloadReportFor.enquiry\" class=\"form-checkbox\" id=\"enq-download\">\n              <label for=\"enq-download\">Enquiry</label>\n          </div>\n          <div class=\"field-checkbox-wrapper\">\n              <input type=\"checkbox\" value=\"\" name=\"slotLabel\"\n                  [(ngModel)]=\"downloadReportFor.admissions\" class=\"form-checkbox\"\n                  id=\"enq-admissions\">\n              <label for=\"enq-admissions\">Admissions</label>\n          </div>\n          <div class=\"field-checkbox-wrapper\">\n              <input type=\"checkbox\" value=\"\" name=\"slotLabel\"\n                  [(ngModel)]=\"downloadReportFor.fees\" class=\"form-checkbox\" id=\"enq-fees\">\n              <label for=\"enq-fees\">Fees</label>\n          </div>\n      </div>\n  </div>\n  <div id=\"divDropDownSection\" *ngIf=\"!downloadReportFor.showDateRange\" class=\"row dropDownSection\">\n      <div class=\"c-sm-6 c-lg-6 c-lg-6\">\n          <div class=\"field-wrapper has-value\">\n              <label for=\"priorityEdit\">Select Duration</label>\n              <select id=\"month\" class=\"form-ctrl\" [(ngModel)]=\"downloadReportFor.downloadReportOption\"\n                  name=\"priority\">\n                  <option value=\"1\">Select Month</option>\n                  <option value=\"2\">This Month</option>\n                  <option value=\"3\">Previous Month</option>\n                  <option value=\"4\">Last Two Month</option>\n              </select>\n          </div>\n      </div>\n      <div style=\"padding-top: 16px;\" class=\"c-sm-6 c-lg-6 c-lg-6\">\n          <button class=\"btn fullBlue\" (click)=\"downloadSummaryReportXl()\"\n              style=\"margin-top: 10px\" id=\"btnDownloadSummary\">Download</button>\n      </div>\n  </div>\n  <div id=\"divRangeSelection\" *ngIf=\"downloadReportFor.showDateRange\" class=\"row select-dates\"\n      style=\"margin:0 -15px\">\n      <div class=\"c-sm-4 c-lg-4 c-lg-4\">\n          <div class=\"field-wrapper datePickerBox\">\n              <label for=\"fromDate\">From Date</label>\n              <input type=\"text\" value=\"\" id=\"\" class=\"form-ctrl bsDatepicker\"\n                  [(ngModel)]=\"downloadReportFor.summaryReport.from_date\" name=\"from_date\" readonly=\"true\"\n                  bsDatepicker />\n\n\n          </div>\n      </div>\n      <div class=\"c-sm-4 c-lg-4 c-lg-4\">\n          <div class=\"field-wrapper datePickerBox\">\n              <label for=\"toDate\">To Date</label>\n              <input type=\"text\" value=\"\" id=\"\" class=\"form-ctrl bsDatepicker\"\n                  [(ngModel)]=\"downloadReportFor.summaryReport.to_date\" name=\"to_date\" readonly=\"true\"\n                  bsDatepicker />\n\n          </div>\n      </div>\n      <div class=\"c-sm-4 c-lg-4 c-lg-4\" style=\"margin-top: 15px;\">\n          <button class=\"btn fullBlue\" (click)=\"downloadSummaryReportXlDateWise()\"\n              style=\"margin-top: 10px; padding: 5px\" id=\"btnDownloadDatewise\">Download</button>\n      </div>\n  </div>\n  <a id=\"anchTagToggle\" class=\"pull-right\" (click)=\"toggleDateSection()\"\n      style=\"cursor: pointer;margin-top: -5px;color:#0084f6;\">Download By Date Range</a>\n  <a id=\"downloadSummaryReport121\" class=\"hide\"></a>\n</div>\n</div>\n</div>\n\n</section>\n</div>\n<!-- =============end================ -->\n<section class=\"clearFix\" style=\"padding-right: 2%;\">\n  \n  <!-- Header and Navigation -->\n  <section class=\"middle-top mb0 clearFix\">\n    <h1 class=\"pull-left\" style=\"margin-left:50px\">\n      <span>Reports</span>\n    </h1>\n  </section>\n  <!-- ======institut-report========= -->\n  <div *ngIf=\"!isProfessional\">\n  <div class=\"leads-menu-section-container\">\n    <div class=\"leads-menu-item eleads-menu-item\">\n      <div class=\"menu-title\"><br>\n        <img src=\"../../../assets/images/Frame 185.svg\" alt=\"\">\n        <span class=\"head-font \"> Institute Report</span>\n\n      </div>\n      <div class=\" menu-description\">\n        <hr class=\"heading_hr\">\n\n\n        <div class=\"row \">\n          <a  class=\"icon_click\"><img\n              src=\"./assets/images/Reporticons/enquiryreport.png\" alt=\"\"></a>\n\n\n          <div class=\"col-sm\" style=\"margin-top:-31px;margin-left:6px;cursor: pointer;\" >\n            <span class=\"sub-head\" (click)=\"downloadSummaryReport()\" >Summary Report</span>\n          </div>    \n\n      </div>\n      </div>\n      </div>\n      </div>\n      </div>\n      <!-- ==========end============= -->\n\n  <div class=\"leads-menu-section-container\" *ngIf=\"!facultyAccount && (isShowCampaignReport || (isShowEnqReport && checkIfUserHadAccess(role_feature.REPORT_LEAD_ENQUIRY_REPORT)) || (enable_online_payment == 1 && isOnlineFees))\">\n    <div class=\"leads-menu-item eleads-menu-item\">\n      <div class=\"menu-title\"><br>\n        <img src=\"./assets/images/Reporticons/eh.png\" alt=\"\">\n        <span class=\"head-font \" aria-hidden=\"true\">Enquiry</span>\n\n      </div>\n      <div class=\" menu-description\">\n        <hr class=\"heading_hr\">\n\n\n        <div class=\"row \" *ngIf=\"checkIfUserHadAccess(role_feature.REPORT_LEAD_ENQUIRY_REPORT)\">\n          <a routerLink=\"/view/leads/enquiryReport/counsellor\" class=\"icon_click\"><img\n              src=\"./assets/images/Reporticons/enquiryreport.png\" alt=\"\"></a>\n\n\n          <div class=\"col-sm\" style=\"margin-top:-31px;margin-left:6px;\">\n            <span class=\"sub-head\"> <a routerLink=\"/view/leads/enquiryReport/counsellor\">Enquiry Report</a></span>\n          </div>\n          <div class=\"col-sm\" style=\"margin-top: 12px;margin-left:-13px;\">\n            <h6 class=\"content\">Enquiry reports counsellor wise, source wise and referral wise. </h6>\n            <hr class=\"content_hr\" style=\"margin-left:-20px;\">\n          </div>\n        </div>\n\n\n        <div class=\"row\" *ngIf=\"isShowCampaignReport\">\n          <a routerLink=\"/view/leads/campaign-reports/sms-report\" class=\"icon_click\"> <img\n              src=\"./assets/images/Reporticons/campaignreport.png\" alt=\"\"></a>\n          <div class=\"col-sm\" style=\"margin-top:-30px;margin-left:6px;\">\n            <span class=\"sub-head\"><a routerLink=\"/view/leads/campaign-reports/sms-report\">Campaign Report</a></span>\n          </div>\n          <div class=\"col-sm\" style=\"margin-top:10px;margin-left:-13px\">\n            <h6 class=\"content\">Campaign reports for the SMS sent to Leads.</h6>\n          </div>\n\n        </div>\n\n      </div>\n    </div>\n\n\n\n  </div>\n  \n\n  <div class=\"leads-menu-section-container\" *ngIf=\"!facultyAccount && (isCourseWise || isFeeDues || (is_tax_enabled=='1' && isGstReport) || (checkIfUserHadAccess(role_feature.FEE_PAYMENT_HISTORY))) \">\n    <div class=\"leads-menu-item fleads-menu-item\">\n      <div class=\"menu-title\">\n        <img src=\"./assets/images/Reporticons/fh.png\" alt=\" \">\n        <span class=\"head-font\" style=\"margin-top:-4px;\">Fees</span>\n\n      </div>\n      <div class=\"menu-description\">\n        <hr class=\"heading_hr\">\n        <div class=\"row\" *ngIf=\"isCourseWise\">\n          <a routerLink=\"/view/fee/moduleReport\" class=\"icon_click\"><img\n              src=\"./assets/images/Reporticons/coursewise.png\" alt=\" \"></a>\n\n          <div class=\"col-sm\" style=\"margin-top:-31px;margin-left:8px;\">\n            <span class=\"sub-head\"><a routerLink=\"/view/fee/moduleReport\">{{schoolModel ? 'Section' : 'Course'}} wise</a></span>\n          </div>\n          <div class=\"col-sm\" style=\"margin-top:9px;margin-left:-10px;\">\n            <h6 class=\"content\">Paid and Due Reports {{schoolModel ? 'Section' : 'Course'}} wise.</h6>\n            <hr class=\"content_hr\">\n          </div>\n        </div>\n        <div class=\"row\" *ngIf=\"checkIfUserHadAccess(role_feature.REPORT_FEES_DUE_REPORT)\">\n          <a routerLink=\"/view/fee/allDueReport\" class=\"icon_click\"><img src=\"./assets/images/Reporticons/duereport.png\"\n              alt=\" \"></a>\n          <div class=\"col-sm\" style=\"margin-top:-32px;margin-left:8px;\">\n            <span class=\"sub-head\"><a routerLink=\"/view/fee/allDueReport\">Due Report</a></span>\n          </div>\n          <div class=\"col-sm\" style=\"margin-top:10px;margin-left:-10px;\">\n            <h6 class=\"content\">Check student Fee Due details, download and send reminders.</h6>\n            <hr class=\"content_hr\">\n          </div>\n        </div>\n        <div class=\"row\" *ngIf=\"is_tax_enabled=='1' && isGstReport && checkIfUserHadAccess(role_feature.REPORT_FEE_GST_REPORT)\">\n          <a routerLink=\"/view/fee/gst\" class=\"icon_click\"> <img src=\"./assets/images/Reporticons/gst.png\" alt=\" \"></a>\n          <div class=\"col-sm\" style=\"margin-top:-27px;margin-left:8px;\">\n            <span class=\"sub-head\"><a routerLink=\"/view/fee/gst\">GST Report</a></span>\n          </div>\n          <div class=\"col-sm\" style=\"margin-top:9px;margin-left:-10px;\">\n            <h6 class=\"content\">Get detailed Tax-wise bifurcation for each Payment. </h6>\n            <hr class=\"content_hr\">\n          </div>\n        </div>\n        <div class=\"row\" *ngIf=\"checkIfUserHadAccess(role_feature.FEE_PAYMENT_HISTORY)\">\n          <a routerLink=\"/view/fee/paymentHistory\" class=\"icon_click\"> <img\n              src=\"./assets/images/Reporticons/duereport.png\" alt=\" \" style=\"margin-left:3px;\"></a>\n          <div class=\"col-sm\" style=\"margin-top:-35px;margin-left:8px\">\n            <span class=\"sub-head\"> <a routerLink=\"/view/fee/paymentHistory\">Payment History</a></span>\n          </div>\n          <div class=\"col-sm\" style=\"margin-top:9px;margin-left:-10px\">\n            <h6 class=\"content\">Date wise payment history of students for analysis, making changes and download.</h6>\n            <hr class=\"content_hr\">\n          </div>\n        </div>\n        <div class=\"row\" *ngIf=\"enable_online_payment == 1 && isOnlineFees && checkIfUserHadAccess(role_feature.REPORT_FEES_ONLINE_FEES)\">\n          <a routerLink=\"/view/fee/onlinePayment\" class=\"icon_click\"> <img\n              src=\"./assets/images/Reporticons/onlinefees.png\" alt=\" \" style=\"margin-left:3px;\"></a>\n          <div class=\"col-sm\" style=\"margin-top:-35px;margin-left:8px\">\n            <span class=\"sub-head\"> <a routerLink=\"/view/fee/onlinePayment\">Online Fees Report</a></span>\n          </div>\n          <div class=\"col-sm\" style=\"margin-top:9px;margin-left:-10px\">\n            <h6 class=\"content\">Report of Online collected fees through app.</h6>\n          </div>\n        </div>\n      </div>\n    </div>\n\n\n\n  </div>\n  <div class=\"leads-menu-section-container\" *ngIf=\"JsonFlags.isShowAttendanceReport || JsonFlags.showBiomentricR || (JsonFlags.isShowExamReport && !schoolModel)\">\n    <div class=\"leads-menu-item  cleads-menu-item\">\n      <div class=\"menu-title\">\n        <img src=\"./assets/images/Reporticons/ch.png\" alt=\" \">\n\n        <span class=\"head-font\" style=\"margin-top:-6px;\">{{schoolModel ? 'Section' : 'Course'}}</span>\n      </div>\n      <div class=\"menu-description\">\n        <hr class=\"heading_hr\">\n        <div class=\"row\" *ngIf=\"JsonFlags.isShowAttendanceReport\">\n          <a routerLink=\"/view/course/reports/attendance\" class=\"icon_click\"><img\n              src=\"./assets/images/Reporticons/attendencereport.png\" alt=\" \"></a>\n          <div class=\"col-sm\" style=\"margin-top:-28px;margin-left:13px;\">\n            <span class=\"sub-head\"><a routerLink=\"/view/course/reports/attendance\">Attendance Report</a></span>\n          </div>\n          <div class=\"col-sm\" style=\"margin-top:9px; margin-left:-6px;\">\n\n            <h6 class=\"content\">Attendance report for students.</h6>\n            <hr class=\"content_hr\" style=\"margin-left:-28px;\">\n          </div>\n        </div>\n        <div class=\"row\" *ngIf=\"JsonFlags.showBiomentricR\">\n          <a routerLink=\"/view/course/reports/biometric\" class=\"icon_click\"><img\n              src=\"./assets/images/Reporticons/biometricreport.png\" alt=\" \"></a>\n          <div class=\"col-sm\" style=\"margin-top:-30px;margin-left:13px;\">\n\n            <span class=\"sub-head\"><a routerLink=\"/view/course/reports/biometric\">Biometric Report</a></span>\n          </div>\n          <div class=\"col-sm\" style=\"margin-top:9px; margin-left:-6px;\">\n            <h6 class=\"content\">Reports for attendance report with institute that has biometric system installed.</h6>\n            <hr class=\"content_hr\" style=\"margin-left:-28px;\">\n          </div>\n        </div>\n        <div class=\"row\" *ngIf=\"JsonFlags.isShowExamReport && !schoolModel\">\n\n          <a routerLink=\"/view/course/reports/exam\" class=\"icon_click\"> <img\n              src=\"./assets/images/Reporticons/examreport.png\" alt=\" \"></a>\n          <div class=\"col-sm\" style=\"margin-top:-34px;margin-left:13px;\">\n            <span class=\"sub-head\"><a routerLink=\"/view/course/reports/exam\">Exam Report</a></span>\n          </div>\n          <div class=\"col-sm\" style=\"margin-top:9px;margin-left:-6px;\">\n            <h6 class=\"content\">Exam report of student as per their performance.</h6>\n            <hr class=\"content_hr\" style=\"margin-left:-28px;\">\n          </div>\n        </div>\n        <!-- <div class=\"row\" *ngIf=\"JsonFlags.isShowExamDash\">\n\n          <a routerLink=\"/view/course/reports/exam-dashboard\" class=\"icon_click\"><img\n              src=\"./assets/images/Reporticons/examdashboard.png\" alt=\" \"></a>\n          <div class=\"col-sm\" style=\"margin-top:-32px;margin-left:13px;\">\n            <span class=\"sub-head\"><a routerLink=\"/view/course/reports/exam-dashboard\">Exam Dashboard</a></span>\n          </div>\n          <div class=\"col-sm\" style=\"margin-top:9px;margin-left:-6px;\">\n            <h6 class=\"content\">In-depth exam report of students.</h6>\n          </div>\n        </div> -->\n      </div>\n    </div>\n\n\n\n  </div>\n  <div class=\"leads-menu-section-container\" *ngIf=\"(!facultyAccount && !schoolModel && jsonEstoreFlags.isEstoreMenu) && (jsonEstoreFlags.isSalesReport || jsonEstoreFlags.isCouponReport)\">\n    <div class=\"leads-menu-item pleads-menu-item\">\n      <div class=\"menu-title\">\n        <!--  <img src=\"./assets/images/leads/data-setup.svg\" alt=\"data setup\">-->\n        <img src=\"./assets/images/Reporticons/ph.png\" alt=\" \">\n        <span class=\"head-font\" style=\"margin-top:-5px;\">Product</span>\n      </div>\n      <div class=\"menu-description\">\n        <hr class=\"heading_hr\">\n        <div class=\"row\" *ngIf=\"jsonEstoreFlags.isSalesReport\">\n\n          <a routerLink=\"/view/e-store/sales-report\" class=\"icon_click\"><img\n              src=\"./assets/images/Reporticons/salesreport.png\" alt=\" \"></a>\n          <div class=\"col-sm\" style=\"margin-top:-34px; margin-left:13px;\">\n            <span class=\"sub-head\"><a routerLink=\"/view/e-store/sales-report\">Sales Report</a></span>\n          </div>\n          <div class=\"col-sm\" style=\"margin-top:10px;margin-left:-6px;\">\n            <h6 class=\"content\">Report of products to students.</h6>\n            <hr class=\"content_hr\" style=\"margin-left:-28px;\">\n          </div>\n        </div>\n        <div class=\"row\" *ngIf=\"jsonEstoreFlags.isCouponReport\">\n          <a routerLink=\"/view/e-store/offer-history\" class=\"icon_click\"><img\n              src=\"./assets/images/Reporticons/offerhistory.png\" alt=\" \"></a>\n          <div class=\"col-sm\" style=\"margin-top:-31px;margin-left:13px;\">\n            <span class=\"sub-head\"> <a routerLink=\"/view/e-store/offer-history\">Offer History </a></span>\n          </div>\n          <div class=\"col-sm\" style=\"margin-top:9px;margin-left:-6px;\">\n            <h6 class=\"content\">Coupoun / Voucher usage report.</h6>\n          </div>\n        </div>\n      </div>\n    </div>\n\n\n\n  </div>\n  <div class=\"leads-menu-section-container\" *ngIf=\"isShowExpense == 'true' && checkIfUserHadAccess(role_feature.REPORT_INCOME_EXPENSE_REPORT)\">\n    <div class=\"leads-menu-item pleads-menu-item\">\n      <div class=\"menu-title\">\n        <!--  <img src=\"./assets/images/leads/data-setup.svg\" alt=\"data setup\">-->\n        <img src=\"../../../assets/images/estore/Expenses.svg\" alt=\" \">\n        <span class=\"head-font\" style=\"margin-top:-5px;\">Expense</span>\n      </div>\n      <div class=\"menu-description\">\n        <hr class=\"heading_hr\">\n        <div class=\"row\">\n\n          <a routerLink=\"/view/expense/report\" class=\"icon_click\"><img\n              src=\"./assets/images/Reporticons/salesreport.png\" alt=\" \"></a>\n          <div class=\"col-sm\" style=\"margin-top:-34px; margin-left:13px;\">\n            <span class=\"sub-head\"><a routerLink=\"/view/expense/report\">Income and Expense Report</a></span>\n          </div>\n          <div class=\"col-sm\" style=\"margin-top:10px;margin-left:-6px;\">\n            <h6 class=\"content\">Income and Expense Report of the Institution.</h6>\n            <hr class=\"content_hr\" style=\"margin-left:-28px;\">\n          </div>\n        </div>\n  </div>\n  </div>\n  </div>\n  <!-- ================certificate================================ -->\n\n  <!-- <div class=\"leads-menu-section-container\">\n    <div class=\"leads-menu-item pleads-menu-item\">\n      <div class=\"menu-title\">\n        <img src=\"../../../assets/images/estore/Expenses.svg\" alt=\" \">\n        <span class=\"head-font\" style=\"margin-top:-5px;\">Certificate</span>\n      </div>\n      <div class=\"menu-description\">\n        <hr class=\"heading_hr\">\n        <div class=\"row\">\n\n          <a routerLink=\"/view/students/certificate-report\" class=\"icon_click\"><img\n              src=\"./assets/images/Reporticons/salesreport.png\" alt=\" \"></a>\n          <div class=\"col-sm\" style=\"margin-top:-34px; margin-left:13px;\">\n            <span class=\"sub-head\"><a routerLink=\"/view/students/certificate-report\">Certificate Generation Report</a></span>\n          </div>\n          <div class=\"col-sm\" style=\"margin-top:10px;margin-left:-6px;\">\n            <h6 class=\"content\">Certificate Generate Report of the Institution.</h6>\n            <hr class=\"content_hr\" style=\"margin-left:-28px;\">\n          </div>\n        </div>\n  </div>\n  </div>\n  </div> -->\n  <!-- ================end===================================== -->\n\n  <!-- <div class=\"leads-menu-section-container\" *ngIf=\"!facultyAccount\">\n    <div class=\"leads-menu-item mleads-menu-item\">\n      <div class=\"menu-title\">\n        <img src=\"./assets/images/Reporticons/mh.png\" alt=\"\">\n        <span class=\"head-font\" style=\"margin-top:-6px;\">Miscellanious</span>\n      </div>\n      <div class=\"menu-description\">\n        <hr class=\"heading_hr\">\n        <div class=\"row\" *ngIf=\"showSMSReport\">\n          <a routerLink=\"/view/communicate/sms\" class=\"icon_click\"><img src=\"./assets/images/Reporticons/sms.png\"\n              alt=\" \"></a>\n          <div class=\"col-sm\" style=\"margin-top:-33px; margin-left:13px;\">\n            <span class=\"sub-head\"><a routerLink=\"/view/communicate/sms\">SMS Report</a></span>\n          </div>\n          <div class=\"col-sm\" style=\"margin-top:10px;margin-left:-6px;\">\n            <h6 class=\"content\">Report of all SMS sent from the system.</h6>\n            <hr class=\"content_hr\" style=\"margin-left:-28px;\">\n          </div>\n        </div>\n        <div class=\"row\" *ngIf=\"showEmailReport\">\n          <a routerLink=\"/view/communicate/email\" class=\"icon_click\"><img src=\"./assets/images/Reporticons/email.png\"\n              alt=\" \"></a>\n          <div class=\"col-sm\" style=\"margin-top:-33px;margin-left:13px;\">\n            <span class=\"sub-head\"><a routerLink=\"/view/communicate/email\">Email Report</a></span>\n          </div>\n          <div class=\"col-sm\" style=\"margin-top:10px; margin-left:-6px;\">\n            <h6 class=\"content\">Report of all the Emails sent from the system.</h6>\n          </div>\n        </div>\n      </div>\n    </div>\n\n\n\n  </div> -->\n  <!-- <div class=\"black-bg1\" id=\"black-bg1\"></div> -->\n \n\n  <div class=\"leads-menu-section-container\" *ngIf=\"schoolModel\">\n    <div class=\"leads-menu-item eleads-menu-item\">\n      <div class=\"menu-title\"><br>\n        <img src=\"./assets/images/Reporticons/eh.png\" alt=\"\">\n        <span class=\"head-font \">Exam</span>\n\n      </div>\n      <div class=\" menu-description\">\n        <hr class=\"heading_hr\">\n\n\n        <div class=\"row \">\n          <a routerLink=\"/view/leads/enquiryReport/counsellor\" class=\"icon_click\"><img\n              src=\"./assets/images/Reporticons/enquiryreport.png\" alt=\"\"></a>\n\n\n          <div class=\"col-sm\" style=\"margin-top:-31px;margin-left:6px;\">\n            <span class=\"sub-head\"> <a routerLink=\"/view/exams/reports/terminal-report\">Terminal Report</a></span>\n          </div>\n          <div class=\"col-sm\" style=\"margin-top: 12px;margin-left:-13px;\">\n            <h6 class=\"content\">Terminal Report</h6>\n            <hr class=\"content_hr\" style=\"margin-left:-20px;\">\n          </div>\n        </div>\n\n\n        <div class=\"row\">\n          <a routerLink=\"/view/leads/campaign-reports/sms-report\" class=\"icon_click\"> <img\n              src=\"./assets/images/Reporticons/campaignreport.png\" alt=\"\"></a>\n          <div class=\"col-sm\" style=\"margin-top:-30px;margin-left:6px;\">\n            <span class=\"sub-head\"><a routerLink=\"/view/exams/reports/merit-stage-report\">Merit Stage Report</a></span>\n          </div>\n          <div class=\"col-sm\" style=\"margin-top:10px;margin-left:-13px\">\n            <h6 class=\"content\">Merit Stage Report</h6>\n          </div>\n\n        </div>\n\n      </div>\n    </div>\n\n\n\n  </div>\n</section>\n");

/***/ }),

/***/ "./src/app/components/reports/reports-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/reports/reports-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: ReportsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsRoutingModule", function() { return ReportsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _reports_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reports.component */ "./src/app/components/reports/reports.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



const routes = [];
let ReportsRoutingModule = /** @class */ (() => {
    let ReportsRoutingModule = class ReportsRoutingModule {
    };
    ReportsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _reports_component__WEBPACK_IMPORTED_MODULE_2__["ReportsComponent"],
                        children: [
                            {
                                path: '',
                                redirectTo: 'list'
                            },
                            {
                                path: 'list',
                                component: _reports_component__WEBPACK_IMPORTED_MODULE_2__["ReportsComponent"]
                            },
                        ]
                    }
                ])
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ReportsRoutingModule);
    return ReportsRoutingModule;
})();



/***/ }),

/***/ "./src/app/components/reports/reports.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/reports/reports.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* ===============================header colors=======================*/\n.table-format-first .table-responsive table th,\n.table-format-first .table-responsive table td {\n  text-align: center;\n  padding: 10px 5px;\n}\n.table-format-first .table-responsive table th {\n  text-transform: capitalize;\n  font-size: 14px;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper {\n  display: inline-block;\n  overflow: initial;\n  margin-left: 0;\n  width: auto;\n  position: relative;\n  background: transparent;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox {\n  z-index: 2;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label {\n  font-size: 16px;\n  margin-left: 7px;\n  font-weight: 600;\n  vertical-align: middle;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:after, .table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:before {\n  z-index: 1;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper:after {\n  content: '';\n  width: 20px;\n  height: 20px;\n  background: #fff;\n  left: 0;\n  top: 0;\n  position: absolute;\n}\n.table-format-first .table-responsive table tbody tr td .fa-trash-o {\n  color: #f44336;\n  font-size: 20px;\n}\n.table-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-top: 10px;\n}\n.table-container .heading-container {\n  background: #e0eaec;\n  display: flex;\n  flex-direction: row;\n  font-size: 14px;\n  font-weight: 600;\n  text-align: left;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n}\n.table-container .heading-container .heading-item {\n  width: 10%;\n  text-align: center;\n}\n.table-container .value-outer-container {\n  display: flex;\n  flex-direction: column;\n  min-height: 53vh;\n  max-height: 54vh;\n  overflow-x: hidden;\n  overflow-y: auto;\n  border: 1px solid #ccc;\n}\n.table-container .value-outer-container .value-container {\n  display: flex;\n  flex-direction: row;\n  text-align: left;\n  padding: 4px;\n  font-size: 12px;\n  border-bottom: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n  border-top: none;\n}\n.table-container .value-outer-container .value-container .value-item {\n  width: 10%;\n  text-align: center;\n}\n/* ===============================header colors=======================*/\n.table-format-first .table-responsive table th,\n.table-format-first .table-responsive table td {\n  text-align: center;\n  padding: 10px 5px;\n}\n.table-format-first .table-responsive table th {\n  text-transform: capitalize;\n  font-size: 14px;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper {\n  display: inline-block;\n  overflow: initial;\n  margin-left: 0;\n  width: auto;\n  position: relative;\n  background: transparent;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox {\n  z-index: 2;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label {\n  font-size: 16px;\n  margin-left: 7px;\n  font-weight: 600;\n  vertical-align: middle;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:after, .table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper .form-checkbox + label:before {\n  z-index: 1;\n}\n.table-format-first .table-responsive table tbody tr td .field-checkbox-wrapper:after {\n  content: '';\n  width: 20px;\n  height: 20px;\n  background: #fff;\n  left: 0;\n  top: 0;\n  position: absolute;\n}\n.table-format-first .table-responsive table tbody tr td .fa-trash-o {\n  color: #f44336;\n  font-size: 20px;\n}\n.table-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-top: 10px;\n}\n.table-container .heading-container {\n  background: #e0eaec;\n  display: flex;\n  flex-direction: row;\n  font-size: 14px;\n  font-weight: 600;\n  text-align: left;\n  padding: 10px;\n  border: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n}\n.table-container .heading-container .heading-item {\n  width: 10%;\n  text-align: center;\n}\n.table-container .value-outer-container {\n  display: flex;\n  flex-direction: column;\n  min-height: 53vh;\n  max-height: 54vh;\n  overflow-x: hidden;\n  overflow-y: auto;\n  border: 1px solid #ccc;\n}\n.table-container .value-outer-container .value-container {\n  display: flex;\n  flex-direction: row;\n  text-align: left;\n  padding: 4px;\n  font-size: 12px;\n  border-bottom: 1px solid #ccc;\n  display: -webkit-box;\n  -webkit-box-align: center;\n  border-top: none;\n}\n.table-container .value-outer-container .value-container .value-item {\n  width: 10%;\n  text-align: center;\n}\n/** these css for gear icon download options\n* created by laxmi\n*/\nsvg:hover #gearIcon {\n  fill: #0084f6;\n}\n.asHover:hover {\n  color: #0084f6 !important;\n}\n.download:hover {\n  cursor: pointer;\n}\n.made-in {\n  font-size: 17px;\n  font-weight: bold;\n  text-align: left;\n}\n.dropdown > ul {\n  background: #fff;\n  padding: 10px 20px;\n  border: 1px solid #eaeaeb;\n  border-top: 0;\n  margin-top: 3px;\n  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 6px 10px 0 rgba(0, 0, 0, 0.12);\n}\n.dropdown > ul li {\n  color: #333;\n}\n.dropdown > ul li strong {\n  font-weight: 600;\n  display: block;\n}\n.dropdown > ul li a {\n  display: block;\n  color: #333;\n}\n.login-tube nav > ul > li {\n  display: inline-block;\n  position: relative;\n}\n.login-tube nav > ul > li > a {\n  color: #333;\n  text-decoration: none;\n  padding: 5px 10px;\n  display: block;\n  transition: all .4s;\n}\n.login-tube nav > ul > li > a:hover,\n.login-tube nav > ul > li:hover > a {\n  text-decoration: none;\n  background: #ccc;\n}\n.login-tube nav > ul > li .dropdown {\n  position: absolute;\n  visibility: hidden;\n  right: 0;\n  top: 100%;\n  min-width: 200px;\n  border-top: 0;\n  opacity: 0;\n  transition: all 0.1s cubic-bezier(0.55, 0, 0.55, 0.2);\n  transition-duration: .2s;\n  transform: scale(0.5);\n}\n.login-tube nav > ul > li .dropdown > ul li {\n  line-height: normal;\n}\n.login-tube nav > ul > li .dropdown > ul li a {\n  display: block;\n  margin: 5px 0;\n}\n.login-tube nav > ul > li .dropdown > ul li a:hover {\n  color: #0084f6;\n}\n.login-tube nav > ul > li .dropdown > ul ul {\n  padding-left: 15px;\n  padding-top: 10px;\n}\n.login-tube nav > ul > li .dropdown > ul ul ul {\n  padding-top: 0;\n}\n.login-tube nav > ul > li:hover .dropdown {\n  visibility: visible;\n  position: absolute;\n  opacity: 1;\n  right: 0;\n  top: 100%;\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition-duration: .5s;\n  transform: scale(1);\n}\n.span-button {\n  border: 1px solid #0084f6;\n  padding: 4px 8px;\n  color: #0084f6;\n  font-size: .9em;\n  border-radius: 2px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.span-button svg {\n  margin: -3px 0;\n  height: 14px;\n}\nlogin-nav > li {\n  display: inline-block;\n  padding: 0 7px;\n  cursor: pointer;\n  vertical-align: text-bottom;\n}\nlogin-nav > li .dropdown {\n  position: absolute;\n  right: 0;\n  top: 100%;\n  padding-top: 10px;\n}\nlogin-nav > li .icons {\n  width: 35px;\n  height: 35px;\n  display: block;\n  text-align: center;\n  box-sizing: border-box;\n  border-radius: 50%;\n  padding-top: 3px;\n  transition: all 0.1s;\n  border: 1px solid transparent;\n}\nlogin-nav > li .icons svg {\n  width: 25px;\n  color: #034979;\n}\nlogin-nav > li .icons svg .cls-1 {\n  stroke: #034979;\n  stroke-linejoin: unset;\n  border: none;\n}\nlogin-nav > li .user-info {\n  white-space: nowrap;\n  margin-right: 40px;\n  width: auto;\n  display: block;\n  position: relative;\n}\nlogin-nav > li .user-info > .icons {\n  display: inline-block;\n  vertical-align: middle;\n}\nlogin-nav > li .user-info > span {\n  vertical-align: middle;\n  display: inline-block;\n}\nlogin-nav > li .user-info:after {\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  content: \"\\f107\";\n  font-size: 17px;\n  position: absolute;\n  right: -20px;\n  top: 10px;\n}\n/**\n  this css is for report section css for cards\n  added by laxmi\n*/\n.report-box {\n  width: 100%;\n  height: 100%;\n  padding: 10px;\n}\n.report-box ul.card-box li.card-row {\n  margin: 10px 0px;\n}\n.report-box ul.card {\n  padding: 15px 10px;\n  border: 1px solid #efefef;\n  background: #fff;\n  height: 120px;\n  border-radius: 4px;\n  cursor: pointer;\n  text-align: left;\n  margin: 10px 0px;\n  box-shadow: 0px 0px 2px 0px;\n}\n.report-box ul.card li {\n  padding: 5px;\n}\n.report-box ul.card li:first-child {\n  font-size: 14px;\n  font-weight: 600;\n  padding: 10px 5px;\n}\n.report-box ul.card li:nth-child(2n) {\n  font-size: 12px;\n}\n.disabled {\n  cursor: not-allowed;\n  background: lightgrey;\n}\n.middle-section {\n  padding: 1%;\n}\n.leads-menu-section-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  flex-wrap: wrap;\n  width: 100%;\n}\n.leads-menu-section-container .leads-menu-item {\n  padding: 15px 10px;\n  width: 100%;\n  background: #fff;\n  border-radius: 4px;\n  text-align: left;\n  margin: 1%;\n  box-shadow: 0px 3px 6px #eee4e4;\n}\n.leads-menu-section-container .leads-menu-item .menu-title {\n  width: 100%;\n  justify-content: flex-start;\n  font-size: 14px;\n  font-weight: 600;\n  display: flex;\n  flex-direction: row;\n  margin-left: 30px;\n}\n.leads-menu-section-container .leads-menu-item .menu-title span {\n  margin-left: 10px;\n  margin-top: 5px;\n  margin-left: 37px;\n  margin-top: -3px;\n}\n.leads-menu-section-container .leads-menu-item .menu-description {\n  padding: 10px;\n  font-size: 12px;\n  margin-left: 75px;\n}\n.head-font {\n  font-family: 'Open Sans', sans-serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 24px;\n  position: absolute;\n  letter-spacing: 0.01em;\n  margin-left: 37px;\n  margin-top: -4px;\n}\n.sub-head {\n  font-family: 'Open Sans', sans-serif;\n  font-size: 13px;\n  line-height: 19px;\n  letter-spacing: 0.01em;\n  margin-left: 30px;\n  color: #334D6E;\n}\n.content {\n  margin-left: 50px;\n  font-family: 'Open Sans', sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 10px;\n  line-height: 15px;\n  letter-spacing: 0.01em;\n  margin-top: -8px;\n  color: #979797;\n}\na {\n  color: black;\n}\n.heading_hr {\n  margin-left: -5%;\n  background: #E3DEDE;\n}\n.content_hr {\n  margin-left: -24px;\n  width: 50%;\n}\n.icon_click {\n  display: inline-block;\n  position: relative;\n  z-index: 1;\n  padding: 1em;\n  margin: -1em;\n}\n/* popUp Scss */\n.sumerry-report .popupWrapper {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  bottom: 0;\n  top: 0;\n  right: 0;\n  left: 0;\n  background: rgba(230, 230, 230, 0.5);\n  z-index: 100;\n  visibility: hidden;\n  opacity: 0;\n  transition: all .5s ease-in;\n}\n.sumerry-report .popupWrapper .popup {\n  max-width: 850px;\n  width: 100%;\n  height: auto;\n  left: 0;\n  right: 0;\n  top: 5%;\n  bottom: 0;\n  margin: auto;\n}\n.sumerry-report .black-bg1 {\n  background: rgba(10, 10, 10, 0.3);\n  position: fixed;\n  top: 0;\n  height: 100%;\n  left: 0;\n  z-index: 500;\n  width: 100%;\n}\n.sumerry-report .download-report {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n}\n.sumerry-report .download-report .checkbox-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  margin-top: 10px;\n}\n.sumerry-report input[type=radio] {\n  -webkit-appearance: radio;\n     -moz-appearance: radio;\n          appearance: radio;\n}\n.sumerry-report .closePopup {\n  right: 10px;\n  top: 10px;\n  font-size: 18px;\n  cursor: pointer;\n  line-height: 20px;\n  width: 26px;\n  height: 26px;\n  box-sizing: border-box;\n  text-align: center;\n  padding-top: 3px;\n  display: none;\n}\n.sumerry-report .closePopup.bottomRight {\n  bottom: 2px;\n  top: auto;\n  left: auto;\n  right: 0;\n}\n.sumerry-report .closePopup.topLeft {\n  left: 0;\n  right: auto;\n  top: 1px;\n  bottom: auto;\n}\n.sumerry-report .closePopup.bottomLeft {\n  left: 0;\n  right: auto;\n  bottom: 2px;\n  top: auto;\n}\n.sumerry-report .closePopup svg {\n  width: 16px;\n}\n.sumerry-report .closePopup svg .cls-1 {\n  stroke: #c1c1c1;\n  stroke-width: 2px;\n}\n.sumerry-report .closePopup:hover .cls-1 {\n  stroke: #0084f6;\n}\n.sumerry-report .modal-content {\n  height: 100%;\n  overflow: hidden;\n  visibility: visible;\n}\n.sumerry-report .fadeIn {\n  opacity: 1;\n  visibility: visible;\n}\n.sumerry-report .field-wrapper .date-clear {\n  position: absolute;\n  right: 0;\n  top: 58px;\n  cursor: pointer;\n  color: #0084f6;\n  z-index: 1;\n}\n.sumerry-report .field-wrapper.datePickerBox:after {\n  content: '';\n  background: url('calendar.svg') no-repeat;\n  position: absolute;\n  left: 78% !important;\n  top: 33px !important;\n  width: 21px;\n  height: 21px;\n  z-index: 0;\n}\n.sumerry-report .field-wrapper .select-dates .field-wrapper.datePickerBox:after {\n  content: '';\n  background: url('calendar.svg') no-repeat;\n  position: absolute;\n  right: 2px;\n  top: 28px;\n  width: 21px;\n  height: 21px;\n  z-index: 20;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY3NzL2NvbW1vbi92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9yZXBvcnRzL3JlcG9ydHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXNzZXRzL2Nzcy9jb21tb24vY29tbW9uLXdlYi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVlBLHVFQUFBO0FBV0E7O0VBS2dCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUN4QmpDO0FEa0JBO0VBU2dCLDBCQUEwQjtFQUMxQixlQUFlO0FDdkIvQjtBRGFBO0VBZ0I0QixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHVCQUF1QjtBQ3pCbkQ7QURJQTtFQXVCZ0MsVUFBVTtBQ3ZCMUM7QURBQTtFQTBCZ0MsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0FDdEJ0RDtBRFBBO0VBZ0NvQyxVQUFVO0FDckI5QztBRFhBO0VBb0NnQyxXQUFXO0VBQ1gsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsT0FBTztFQUNQLE1BQU07RUFDTixrQkFBa0I7QUNyQmxEO0FEckJBO0VBOEM0QixjQWxEYjtFQW1EYSxlQUFlO0FDckIzQztBRDhCQTtFQUNJLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGdCQUFnQjtBQzNCcEI7QUR1QkE7RUFNTSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQix5QkFBeUI7QUN6Qi9CO0FEVUE7RUFpQlEsVUFBVTtFQUNWLGtCQUFrQjtBQ3ZCMUI7QURLQTtFQXNCTSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixz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YTtBQWthakI7QUFuZUE7RUFvRU0sV0FBVztFQUNYLFNBQVM7RUFDVCxVQUFVO0VBQ1YsUUFBUTtBQW1hZDtBQTFlQTtFQTJFTSxPQUFPO0VBQ1AsV0FBVztFQUNYLFFBQVE7RUFDUixZQUFZO0FBbWFsQjtBQWpmQTtFQWtGTSxPQUFPO0VBQ1AsV0FBVztFQUNYLFdBQVc7RUFDWCxTQUFTO0FBbWFmO0FBeGZBO0VBeUZNLFdBQVc7QUFtYWpCO0FBNWZBO0VBNEZRLGVBQWU7RUFDZixpQkFBaUI7QUFvYXpCO0FBamdCQTtFQW1HUSxlRGxPYTtBQ29vQnJCO0FBcmdCQTtFQXlHSSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQWdhdkI7QUEzZ0JBO0VBK0dJLFVBQVU7RUFDVixtQkFBbUI7QUFnYXZCO0FBaGhCQTtFQXNITSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxlQUFlO0VBQ2YsY0FBYztFQUNkLFVBQVU7QUE4WmhCO0FBemhCQTtFQWdJUSxXQUFXO0VBQ1gseUNBQWlFO0VBQ2pFLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCxZQUFZO0VBQ1osVUFBVTtBQTZabEI7QUFwaUJBO0VBNElRLFdBQVc7RUFDWCx5Q0FBZ0U7RUFDaEUsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0FBNFpuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVwb3J0cy9yZXBvcnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHB1bGwtTDogbGVmdDtcbiRwdWxsLVI6IHJpZ2h0O1xuJHB1bGwtbm9uZTogbm9uZTtcbiRmdWxsLXdpZHRoOiAxMDAlO1xuJGJvcmRlci1ib3g6IGJvcmRlci1ib3g7XG4kYm9yZGVyLWNvbG9yOiAjZGVlYWVlO1xuJGJnLXdoaXRlOiAjZmZmO1xuJGVycm9yLWNvbG9yOiAjZmYwMDAwO1xuJGNvbW1vbi1ibHVlOiAjMDA4NGY2O1xuJHByaW1hcnktY29sb3I6ICMzMzM7XG4kYm9yZGVyLWNvbW1vbjojZWFlYWViO1xuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09aGVhZGVyIGNvbG9ycz09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuJGhlYWRlci1iZzojMDA2MEEzO1xuJGhlYWRlci1ib3JkZXI6I2VhZWFlYjtcbiRsZWZ0TWVudUJnOiNmYWZhZmE7XG4kbGVmdE1lbnVIb3ZlckJnOiMwMDg0ZjY7XG4kbGVmdE1lbnVUZXh0SG92ZXJDb2xvcjojZmZmO1xuJHJlZEJ0bjojZjQ0MzM2O1xuJGJvcmRlcmNjYzojY2NjO1xuJGxpZ2h0Qmx1ZTojZWZmN2ZmO1xuJHRhYmxlSGVhZGluZ0JnQ29sb3I6ICMwMDRhN2U7XG4udGFibGUtZm9ybWF0LWZpcnN0IHtcbiAgICAudGFibGUtcmVzcG9uc2l2ZSB7XG4gICAgICAgIHRhYmxlIHtcbiAgICAgICAgICAgIHRoLFxuICAgICAgICAgICAgdGQge1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoIHtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0Ym9keSB7XG4gICAgICAgICAgICAgICAgdHIge1xuICAgICAgICAgICAgICAgICAgICB0ZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuZmllbGQtY2hlY2tib3gtd3JhcHBlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBpbml0aWFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZm9ybS1jaGVja2JveCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mb3JtLWNoZWNrYm94K2xhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogN3B4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmFmdGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLmZhLXRyYXNoLW8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkcmVkQnRuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnRhYmxlLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgLmhlYWRpbmctY29udGFpbmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICNlMGVhZWM7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgICAuaGVhZGluZy1pdGVtIHtcbiAgICAgICAgd2lkdGg6IDEwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgIH1cbiAgICAudmFsdWUtb3V0ZXItY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgbWluLWhlaWdodDogNTN2aDtcbiAgICAgIG1heC1oZWlnaHQ6IDU0dmg7XG4gICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgIC52YWx1ZS1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgICAgICBib3JkZXItdG9wOiBub25lO1xuICAgICAgICAudmFsdWUtaXRlbSB7XG4gICAgICAgICAgd2lkdGg6IDEwJTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0iLCJAaW1wb3J0IFwiLi9zcmMvYXNzZXRzL2Nzcy9jb21tb24vdmFyaWFibGVzLnNjc3NcIjtcbkBpbXBvcnQgXCIuL3NyYy9hc3NldHMvY3NzL2NvbW1vbi9jb21tb24td2ViLnNjc3NcIjtcbi5taWRkbGUtc2VjdGlvbntcbiAgICBwYWRkaW5nOiAxJTtcbiAgfVxuICBcbiAgLmxlYWRzLW1lbnUtc2VjdGlvbi1jb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLmxlYWRzLW1lbnUtaXRlbXtcbiAgICAgIHBhZGRpbmc6IDE1cHggMTBweDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgIFxuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICBcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBtYXJnaW46IDElO1xuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggM3B4IDZweCAjNjk2OTY5O1xuICAgICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggI2VlZTRlNDtcbiAgICAgIC5tZW51LXRpdGxle1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICAgICAgICAvL2ltZ3tcbiAgICAgICAgLy8gIHdpZHRoOiAyNXB4O1xuICAgICAgICAgLy8gaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgIFxuICAgICAgICAvL31cbiAgICAgICAgc3BhbntcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDM3cHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogLTNweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLm1lbnUtZGVzY3JpcHRpb257XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6NzVweDtcbiAgICAgIH1cbiAgICB9XG4gICBcbiAgICB9XG4gICAgXG4gICAgLmhlYWQtZm9udHtcbiAgICAgIC8vZm9udC13ZWlnaHQ6NjAwO1xuICAgIFxuICAgICAgLy9mb250LXNpemU6MTZweDtcbiAgICAgZm9udC1mYW1pbHk6ICAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgICAgXG5mb250LXN0eWxlOiBub3JtYWw7XG5mb250LXdlaWdodDogNTAwO1xuZm9udC1zaXplOiAxNnB4O1xubGluZS1oZWlnaHQ6IDI0cHg7XG5wb3NpdGlvbjogYWJzb2x1dGU7XG5sZXR0ZXItc3BhY2luZzogMC4wMWVtO1xubWFyZ2luLWxlZnQ6IDM3cHg7XG5tYXJnaW4tdG9wOiAtNHB4O1xuICBcbiAgICB9XG5cbiAgICAuc3ViLWhlYWR7XG4gICAgIC8vIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBcbiAgICAgLy8gZm9udC1zaXplOiAxNHB4O1xuICAgICAvLyBtYXJnaW4tbGVmdDogMzBweDtcbiAgICAgLy8gcGFkZGluZy10b3A6IDIwcHg7XG4gICAgIGZvbnQtZmFtaWx5OiAgJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gICAgIGZvbnQtc2l6ZTogMTNweDtcbmxpbmUtaGVpZ2h0OiAxOXB4O1xubGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbm1hcmdpbi1sZWZ0OiAzMHB4O1xuXG5cbmNvbG9yOiAjMzM0RDZFO1xuXG4gICAgXG4gICAgfVxuICAgIC5jb250ZW50e1xuXG4gICAgIC8vIGZvbnQtd2VpZ2h0OjMwMDtcbiAgICAgLy8gZm9udC1zaXplOjEycHg7XG4gICAgICBtYXJnaW4tbGVmdDogNTBweDtcbiAgICAgIGZvbnQtZmFtaWx5OiAgJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gICAgXG5mb250LXN0eWxlOiBub3JtYWw7XG5mb250LXdlaWdodDogbm9ybWFsO1xuZm9udC1zaXplOiAxMHB4O1xubGluZS1oZWlnaHQ6IDE1cHg7XG5sZXR0ZXItc3BhY2luZzogMC4wMWVtO1xubWFyZ2luLXRvcDotOHB4O1xuXG5jb2xvcjogIzk3OTc5NztcblxuICAgIH1cbiAgIFxuICAgIFxuXG4gIGF7XG4gICAgY29sb3I6IGJsYWNrO1xuICB9XG4gIC5oZWFkaW5nX2hye1xuXG4gIFxuICAgIG1hcmdpbi1sZWZ0Oi01JTtcblxuXG5iYWNrZ3JvdW5kOiAjRTNERURFO1xuICB9XG4gIC5jb250ZW50X2hyXG4gIHtcbiAgICBcbiAgICBtYXJnaW4tbGVmdDotMjRweDtcbiAgICB3aWR0aDo1MCU7XG4gIH1cbiAgLmljb25fY2xpY2t7XG5cbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDE7XG4gICAgcGFkZGluZzogMWVtO1xuICAgIG1hcmdpbjogLTFlbTtcbiAgICBcbiAgfVxuICAvLyA9PT09PT09PT09PT09PT09PT09PWluc3RpdHV0LXJlcG9ydC1ieSBBc2hhPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgLyogcG9wVXAgU2NzcyAqL1xuXG4uc3VtZXJyeS1yZXBvcnR7XG4ucG9wdXBXcmFwcGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3R0b206IDA7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjMwLCAyMzAsIDIzMCwgMC41KTtcbiAgei1pbmRleDogMTAwOyAvLyBkaXNwbGF5OiBub25lO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIG9wYWNpdHk6IDA7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlLWluO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAuNXMgZWFzZS1pbjtcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAuNXMgZWFzZS1pbjtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlLWluO1xuICB0cmFuc2l0aW9uOiBhbGwgLjVzIGVhc2UtaW47XG5cbiAgLnBvcHVwIHtcbiAgICBtYXgtd2lkdGg6IDg1MHB4OyAvLyBtYXgtaGVpZ2h0OiAzNTBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDUlO1xuICAgIGJvdHRvbTogMDtcbiAgICBtYXJnaW46IGF1dG87IC8vIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgfVxufVxuICAuYmxhY2stYmcxIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDEwLDEwLDEwLDAuMyk7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbGVmdDogMDtcbiAgICB6LWluZGV4OiA1MDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmRvd25sb2FkLXJlcG9ydHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIC5jaGVja2JveC1jb250YWluZXJ7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgfVxuICB9XG4gIGlucHV0W3R5cGU9cmFkaW9de1xuICAgIGFwcGVhcmFuY2U6IHJhZGlvO1xuICB9XG5cbiAgLmNsb3NlUG9wdXAge1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIHRvcDogMTBweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiAyNnB4O1xuICAgIGhlaWdodDogMjZweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogM3B4O1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIFxuICAgICYuYm90dG9tUmlnaHQge1xuICAgICAgYm90dG9tOiAycHg7XG4gICAgICB0b3A6IGF1dG87XG4gICAgICBsZWZ0OiBhdXRvO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgfVxuICBcbiAgICAmLnRvcExlZnQge1xuICAgICAgbGVmdDogMDtcbiAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgdG9wOiAxcHg7XG4gICAgICBib3R0b206IGF1dG87XG4gICAgfVxuICBcbiAgICAmLmJvdHRvbUxlZnQge1xuICAgICAgbGVmdDogMDtcbiAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgYm90dG9tOiAycHg7XG4gICAgICB0b3A6IGF1dG87XG4gICAgfVxuICBcbiAgICBzdmcge1xuICAgICAgd2lkdGg6IDE2cHg7XG4gIFxuICAgICAgLmNscy0xIHtcbiAgICAgICAgc3Ryb2tlOiAjYzFjMWMxO1xuICAgICAgICBzdHJva2Utd2lkdGg6IDJweDtcbiAgICAgIH1cbiAgICB9XG4gIFxuICAgICY6aG92ZXIge1xuICAgICAgLmNscy0xIHtcbiAgICAgICAgc3Ryb2tlOiAkY29tbW9uLWJsdWU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICAubW9kYWwtY29udGVudCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgfVxuICBcbiAgLmZhZGVJbiB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB9XG4gIC5maWVsZC13cmFwcGVyIHtcbiAgICAvLyBtYXJnaW46IDVweCAwO1xuXG4gICAgLmRhdGUtY2xlYXIge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICB0b3A6IDU4cHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBjb2xvcjogIzAwODRmNjtcbiAgICAgIHotaW5kZXg6IDE7XG4gICAgfVxuXG4gICAgJi5kYXRlUGlja2VyQm94IHtcbiAgICAgICY6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2NhbGVuZGFyLnN2ZyAnKSBuby1yZXBlYXQ7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogNzglICFpbXBvcnRhbnQ7XG4gICAgICAgIHRvcDogMzNweCAhaW1wb3J0YW50O1xuICAgICAgICB3aWR0aDogMjFweDtcbiAgICAgICAgaGVpZ2h0OiAyMXB4O1xuICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgfVxuICAgIH1cbiAgICAuc2VsZWN0LWRhdGVzIHtcbiAgICAgIC5maWVsZC13cmFwcGVyLmRhdGVQaWNrZXJCb3g6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9jYWxlbmRhci5zdmdcIikgbm8tcmVwZWF0O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAycHg7XG4gICAgICAgIHRvcDogMjhweDtcbiAgICAgICAgd2lkdGg6IDIxcHg7XG4gICAgICAgIGhlaWdodDogMjFweDtcbiAgICAgICAgei1pbmRleDogMjA7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICB9XG4gIFxufVxuIiwiQGltcG9ydCBcIi4vc3JjL2Fzc2V0cy9jc3MvY29tbW9uL3ZhcmlhYmxlcy5zY3NzXCI7XG4vKiogdGhlc2UgY3NzIGZvciBnZWFyIGljb24gZG93bmxvYWQgb3B0aW9uc1xuKiBjcmVhdGVkIGJ5IGxheG1pXG4qL1xuc3ZnOmhvdmVyICNnZWFySWNvbiB7XG4gIGZpbGw6ICMwMDg0ZjY7XG59XG5cbi5hc0hvdmVyOmhvdmVyIHtcbiAgY29sb3I6ICMwMDg0ZjYgIWltcG9ydGFudDtcbn1cblxuLmRvd25sb2FkOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubWFkZS1pbiB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5kcm9wZG93biB7XG4gICYgPiB1bCB7XG4gICAgYmFja2dyb3VuZDogJGJnLXdoaXRlO1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDsgLy8gd2lkdGg6IDIwMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICRoZWFkZXItYm9yZGVyO1xuICAgIGJvcmRlci10b3A6IDA7XG4gICAgbWFyZ2luLXRvcDogM3B4O1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA0cHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCA2cHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG5cbiAgICBsaSB7XG4gICAgICBjb2xvcjogIzMzMztcblxuICAgICAgc3Ryb25nIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG5cbiAgICAgIGEge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5sb2dpbi10dWJlIG5hdiA+IHVsID4gbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmxvZ2luLXR1YmUgbmF2ID4gdWwgPiBsaSA+IGEge1xuICBjb2xvcjogIzMzMztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRyYW5zaXRpb246IGFsbCAuNHM7XG59XG5cbi5sb2dpbi10dWJlIG5hdiA+IHVsID4gbGkgPiBhOmhvdmVyLFxuLmxvZ2luLXR1YmUgbmF2ID4gdWwgPiBsaTpob3ZlciA+IGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJhY2tncm91bmQ6ICNjY2M7XG59XG5cbi5sb2dpbi10dWJlIG5hdiA+IHVsID4gbGkgLmRyb3Bkb3duIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDEwMCU7XG4gIG1pbi13aWR0aDogMjAwcHg7XG4gIGJvcmRlci10b3A6IDA7XG4gIG9wYWNpdHk6IDA7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4xcyBjdWJpYy1iZXppZXIoLjU1LCAwLCAuNTUsIC4yKTtcbiAgdHJhbnNpdGlvbjogYWxsIC4xcyBjdWJpYy1iZXppZXIoLjU1LCAwLCAuNTUsIC4yKTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAuMjVzO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuMnM7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcblxuICAmID4gdWwge1xuICAgIGxpIHtcbiAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG5cbiAgICAgIGEge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWFyZ2luOiA1cHggMDtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBjb2xvcjogJGNvbW1vbi1ibHVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdWwge1xuICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG5cbiAgICAgIHVsIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5sb2dpbi10dWJlIG5hdiA+IHVsID4gbGk6aG92ZXIgLmRyb3Bkb3duIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvcGFjaXR5OiAxO1xuICByaWdodDogMDtcbiAgdG9wOiAxMDAlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuNHMgY3ViaWMtYmV6aWVyKC4yNSwgLjgsIC4yNSwgMSk7XG4gIHRyYW5zaXRpb246IGFsbCAuNHMgY3ViaWMtYmV6aWVyKC4yNSwgLjgsIC4yNSwgMSk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogLjVzO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuNXM7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG5cbi5wdWxsLXJpZ2h0IHtcbiAgLy8gbWFyZ2luLXRvcDogMjZweDtcbiAgLy8gbWFyZ2luLWxlZnQ6IDEyMnB4O1xufVxuXG4uc3Bhbi1idXR0b24ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDA4NGY2O1xuICBwYWRkaW5nOiA0cHggOHB4O1xuICBjb2xvcjogIzAwODRmNjtcbiAgZm9udC1zaXplOiAuOWVtO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICBzdmcge1xuICAgIG1hcmdpbjogLTNweCAwO1xuICAgIGhlaWdodDogMTRweDtcbiAgfVxufVxuXG5sb2dpbi1uYXYge1xuICAgICY+bGkge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHBhZGRpbmc6IDAgN3B4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbTtcbiAgICAgICAgLmRyb3Bkb3duIHtcbiAgICAgICAgICAgIC8vIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIHRvcDogMTAwJTtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgLmRyb3Bkb3duIHtcbiAgICAgICAgICAgICAgICAvLyBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5pY29ucyB7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuaWNvbnMge1xuICAgICAgICAgICAgd2lkdGg6IDM1cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDM1cHg7IC8vIGJvcmRlcjogMXB4IHNvbGlkICRib3JkZXItY29sb3I7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogM3B4O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMXM7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIHN2ZyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICAgICAgICAgICAgY29sb3I6IzAzNDk3OTtcblxuICAgICAgICAgICAgICAgIC5jbHMtMSB7XG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZTogIzAzNDk3OTtcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlLWxpbmVqb2luOiB1bnNldDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAudXNlci1pbmZvIHtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XG4gICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgJj4uaWNvbnMge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJj5zcGFuIHtcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICBmb250OiBub3JtYWwgbm9ybWFsIG5vcm1hbCAxNHB4LzEgRm9udEF3ZXNvbWU7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgICAgICAgICAgICAgIHRleHQtcmVuZGVyaW5nOiBhdXRvO1xuICAgICAgICAgICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXFxmMTA3XCI7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICByaWdodDogLTIwcHg7XG4gICAgICAgICAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4vKipcbiAgdGhpcyBjc3MgaXMgZm9yIHJlcG9ydCBzZWN0aW9uIGNzcyBmb3IgY2FyZHNcbiAgYWRkZWQgYnkgbGF4bWlcbiovXG4ucmVwb3J0LWJveCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHVsIHtcbiAgICAgICYuY2FyZC1ib3gge1xuICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgJi5jYXJkLXJvdyB7XG4gICAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgICAgJi5jYXJkIHtcbiAgICAgICAgICBwYWRkaW5nOiAxNXB4IDEwcHg7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VmZWZlZjtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgIGhlaWdodDogMTIwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgIG1hcmdpbjogMTBweCAwcHg7XG4gICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAycHggMHB4O1xuICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCA1cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgJjpudGgtY2hpbGQoMm4pe1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICB9XG4gICAgICB9XG4gIH1cbn1cblxuLmRpc2FibGVke1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICBiYWNrZ3JvdW5kOiBsaWdodGdyZXk7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/components/reports/reports.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/reports/reports.component.ts ***!
  \*********************************************************/
/*! exports provided: ReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsComponent", function() { return ReportsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_services_authenticator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app/services/authenticator.service */ "./src/app/services/authenticator.service.ts");
/* harmony import */ var _model_role_features__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/role_features */ "./src/app/model/role_features.ts");
/* harmony import */ var _services_enquiry_services_fetchenquiry_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../.././services/enquiry-services/fetchenquiry.service */ "./src/app/services/enquiry-services/fetchenquiry.service.ts");
/* harmony import */ var _services_message_show_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../.././services/message-show.service */ "./src/app/services/message-show.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../.././services/common-service */ "./src/app/services/common-service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
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







let ReportsComponent = /** @class */ (() => {
    let ReportsComponent = class ReportsComponent {
        constructor(auth, enquire, messageService, _commService) {
            this.auth = auth;
            this.enquire = enquire;
            this.messageService = messageService;
            this._commService = _commService;
            this.facultyAccount = false;
            this.isShowEnqReport = false;
            this.isShowCampaignReport = false;
            this.role_feature = _model_role_features__WEBPACK_IMPORTED_MODULE_2__["role"].features;
            this.isCourseWise = false;
            this.isFeeDues = false;
            this.isGstReport = false;
            this.isOnlineFees = false;
            this.showSMSReport = false;
            this.showEmailReport = false;
            this.isShowExpense = false;
            this.schoolModel = false;
            this.isProfessional = false;
            this.viewPopUp = false;
            this.downloadEnquiryReportAccess = false;
            this.JsonFlags = {
                biometricAttendanceEnable: false,
                isShowAttendanceReport: false,
                isShowExamReport: false,
                isShowExamDash: false,
                showBiomentricR: false
            };
            this.jsonEstoreFlags = {
                isEstoreMenu: false,
                isSalesReport: false,
                isCouponReport: false
            };
            this.downloadReportFor = {
                enquiry: false,
                admissions: false,
                fees: false,
                downloadReportOption: 1,
                showDateRange: false,
                summaryReport: { from_date: "", to_date: "" },
                followUpDate: this.getDateFormated(null, 'YYYY-MM-DD'),
                summaryOptions: false,
                showDownloadSummary: false
            };
            this.auth.schoolModel.subscribe(res => {
                this.schoolModel = false;
                if (res) {
                    this.schoolModel = true;
                }
            });
            this.auth.institute_type.subscribe(res => {
                if (res == 'LANG') {
                    this.isProfessional = true;
                }
                else {
                    this.isProfessional = false;
                }
            });
        }
        ngOnInit() {
            if (sessionStorage.getItem('userType') == '3') {
                this.facultyAccount = true;
            }
            this.checkRoleAccess();
            this.fetchAndUpdatePermissions();
            this.is_tax_enabled = sessionStorage.getItem('enable_tax_applicable_fee_installments');
            this.enable_online_payment = sessionStorage.getItem('enable_online_payment_feature');
            this.isShowExpense = sessionStorage.getItem('isShowExpense');
        }
        checkRoleAccess() {
            if (this.role_feature.REPORTS_ENQUIRY_REFFER_BY
                || this.role_feature.REPORTS_ENQUIRY_SOURCE || this.role_feature.REPORT_ENQUIRY_COUNSELLOR) {
                this.isShowEnqReport = true;
            }
            this.isShowCampaignReport = this.role_feature.REPORTS_ENQUIRY_CAMPAIGN;
            // Changes done by Nalini - To handle role based fee menu conditions
            this.isFeeDues = this.role_feature.FEE_DUE_DETAILS;
            this.isCourseWise = this.role_feature.REPORT_ENQUIRY_COURSE_WISE;
            this.isGstReport = this.role_feature.REPORT_FEE_GST_REPORT;
            this.isOnlineFees = this.role_feature.REPORT_FEES_ONLINE_FEES;
        }
        fetchAndUpdatePermissions() {
            let permissions = sessionStorage.getItem('permissions');
            /* Admin Account Detected */
            if (permissions == '' || permissions == null || permissions == undefined) {
                if (sessionStorage.getItem('userType') == '0') {
                    this.JsonFlags.isShowExamReport = true;
                    this.JsonFlags.isShowAttendanceReport = true;
                    // Changes done by Nalini - To handle role based conditions
                    this.JsonFlags.isShowExamDash = true;
                    this.JsonFlags.showBiomentricR = true;
                    this.showSMSReport = true;
                    this.isShowEnqReport = true;
                    this.showEmailReport = true;
                    this.isFeeDues = true;
                    this.isCourseWise = true;
                    this.isGstReport = true;
                    this.isOnlineFees = true;
                    this.isShowCampaignReport = true;
                    if (sessionStorage.getItem('enable_eLearn_feature') == '1') {
                        this.jsonEstoreFlags.isEstoreMenu = true;
                        this.jsonEstoreFlags.isSalesReport = true;
                        this.jsonEstoreFlags.isCouponReport = true;
                    }
                }
                else if (sessionStorage.getItem('userType') == '3') { // reaport 
                    this.JsonFlags.isShowExamReport = true;
                    this.JsonFlags.isShowAttendanceReport = true;
                    this.JsonFlags.isShowExamDash = true;
                    this.JsonFlags.showBiomentricR = true;
                }
            }
            else {
                /* attendance */
                // Changes done by Nalini - To handle role based conditions
                this.JsonFlags.isShowAttendanceReport = this.role_feature.REPORT_COURSE_ATTENDANCE;
                if (this.role_feature.REPORTS_MENU && this.role_feature.REPORT_COURSE_EXAM_R) {
                    this.JsonFlags.isShowExamReport = true;
                }
                if (this.role_feature.REPORTS_MENU && this.role_feature.REPORT_COURSE_EXAM_DASHBOARD) {
                    this.JsonFlags.isShowExamDash = true;
                }
                this.JsonFlags.showBiomentricR = this.role_feature.REPORT_COURSE_BIOMETRIC;
                this.showSMSReport = (this.role_feature.REPORT_MISC_SMS) ? true : false; //sms visiblity
                this.showEmailReport = (this.role_feature.REPORTS_MISC_EMAIL) ? true : false; //email visiblity
                if (sessionStorage.getItem('enable_eLearn_feature') == '1') {
                    this.jsonEstoreFlags.isEstoreMenu = this.role_feature.ESTORE_MENU;
                    this.jsonEstoreFlags.isSalesReport = this.role_feature.REPORT_PRODUCT_SALES;
                    this.jsonEstoreFlags.isCouponReport = this.role_feature.REPORT_PRODUCT_COUPON;
                }
            }
        }
        checkIfUserHadAccess(id) {
            let permissionArray = sessionStorage.getItem('permissions');
            if (permissionArray == "" || permissionArray == null || !permissionArray) {
                return true;
            }
            else {
                if (id) {
                    return true;
                }
                else {
                    return false;
                }
            }
        }
        // ===============institute-report-funtionality===========================
        closeViewPopUp() {
            this.viewPopUp = false;
            this.downloadReportFor.summaryOptions = false;
        }
        downloadSummaryReport() {
            this.downloadReportFor.summaryOptions = true;
            setTimeout(() => {
                document.getElementById('anchTagToggle').textContent = "Download By Date Range";
            }, 100);
        }
        toggleDateSection() {
            if (this.downloadReportFor.showDateRange == false) {
                this.downloadReportFor.showDateRange = true;
                document.getElementById('anchTagToggle').textContent = "Hide";
            }
            else {
                this.downloadReportFor.showDateRange = false;
                document.getElementById('anchTagToggle').textContent = "Download By Date Range";
            }
        }
        getDateFormated(value, format) {
            if (value) {
                return moment__WEBPACK_IMPORTED_MODULE_6__(value).format(format);
            }
            return moment__WEBPACK_IMPORTED_MODULE_6__().format(format);
        }
        performDownloadAction(res) {
            let byteArr = this._commService.convertBase64ToArray(res.document);
            let format = res.format;
            let fileName = res.docTitle;
            let file = new Blob([byteArr], { type: 'text/csv;charset=utf-8;' });
            let url = URL.createObjectURL(file);
            let dwldLink = document.getElementById('downloadSummaryReport121');
            dwldLink.setAttribute("href", url);
            dwldLink.setAttribute("download", fileName);
            document.body.appendChild(dwldLink);
            dwldLink.click();
        }
        reportFor() {
            let reportFor = [];
            if (this.downloadReportFor.enquiry) {
                reportFor.push("Enquiry");
            }
            if (this.downloadReportFor.admissions) {
                reportFor.push("Admissions");
            }
            if (this.downloadReportFor.fees) {
                reportFor.push("Fees");
            }
            return reportFor.toString();
        }
        downloadSummaryReportXl() {
            let report = this.reportFor();
            switch (Number(this.downloadReportFor.downloadReportOption)) {
                case 1:
                    this.messageService.showErrorMessage(this.messageService.toastTypes.error, 'Selection', 'Please select other options');
                    break;
                case 2:
                    {
                        this.auth.showLoader();
                        this.enquire.getSummaryReportOfThisMonth(report).subscribe(res => {
                            this.auth.hideLoader();
                            this.performDownloadAction(res);
                        }, err => {
                            this.auth.hideLoader();
                        });
                    }
                    break;
                case 3:
                    {
                        this.auth.showLoader();
                        this.enquire.getPreviousMSummary(report).subscribe(res => {
                            this.auth.hideLoader();
                            this.performDownloadAction(res);
                        }, err => { this.auth.hideLoader(); });
                    }
                    break;
                case 4: {
                    this.auth.showLoader();
                    this.enquire.getSummaryReportOfLastTwoMonth(report).subscribe(res => {
                        this.auth.hideLoader();
                        this.performDownloadAction(res);
                    }, err => { this.auth.hideLoader(); });
                }
            }
        }
        downloadSummaryReportXlDateWise() {
            if (this.downloadReportFor.summaryReport.to_date != "" && this.downloadReportFor.summaryReport.from_date != "") {
                this.auth.showLoader();
                let report = this.reportFor();
                let obj = { to_date: this.getDateFormated(this.downloadReportFor.summaryReport.to_date, 'YYYY-MM-DD'), from_date: this.getDateFormated(this.downloadReportFor.summaryReport.from_date, 'YYYY-MM-DD') };
                this.enquire.getSummaryReportFromDates(obj, report).subscribe(res => { this.auth.hideLoader(); this.performDownloadAction(res); }, err => { this.auth.hideLoader(); });
            }
            else {
                this.messageService.showErrorMessage(this.messageService.toastTypes.error, '', 'Please enter dates');
            }
        }
    };
    ReportsComponent.ctorParameters = () => [
        { type: _app_services_authenticator_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticatorService"] },
        { type: _services_enquiry_services_fetchenquiry_service__WEBPACK_IMPORTED_MODULE_3__["FetchenquiryService"] },
        { type: _services_message_show_service__WEBPACK_IMPORTED_MODULE_4__["MessageShowService"] },
        { type: _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonServiceFactory"] }
    ];
    ReportsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reports',
            template: __importDefault(__webpack_require__(/*! raw-loader!./reports.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/reports/reports.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./reports.component.scss */ "./src/app/components/reports/reports.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_app_services_authenticator_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticatorService"],
            _services_enquiry_services_fetchenquiry_service__WEBPACK_IMPORTED_MODULE_3__["FetchenquiryService"],
            _services_message_show_service__WEBPACK_IMPORTED_MODULE_4__["MessageShowService"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonServiceFactory"]])
    ], ReportsComponent);
    return ReportsComponent;
})();



/***/ }),

/***/ "./src/app/components/reports/reports.module.ts":
/*!******************************************************!*\
  !*** ./src/app/components/reports/reports.module.ts ***!
  \******************************************************/
/*! exports provided: ReportsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsModule", function() { return ReportsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _reports_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reports-routing.module */ "./src/app/components/reports/reports-routing.module.ts");
/* harmony import */ var _reports_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reports.component */ "./src/app/components/reports/reports.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let ReportsModule = /** @class */ (() => {
    let ReportsModule = class ReportsModule {
    };
    ReportsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _reports_component__WEBPACK_IMPORTED_MODULE_3__["ReportsComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _reports_routing_module__WEBPACK_IMPORTED_MODULE_2__["ReportsRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_5__["BsDatepickerModule"]
            ]
        })
    ], ReportsModule);
    return ReportsModule;
})();



/***/ })

}]);
//# sourceMappingURL=components-reports-reports-module-es2015.js.map