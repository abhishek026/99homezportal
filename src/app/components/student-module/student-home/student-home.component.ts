import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import * as moment from "moment";
import { MenuItem } from "primeng/primeng";
import "rxjs/Rx";
import { SubscriptionLike as ISubscription } from "rxjs";
import { AppComponent } from "../../../app.component";
import { instituteInfo } from "../../../model/instituteinfo";
import { StudentForm } from "../../../model/student-add-form";
import { AuthenticatorService } from "../../../services/authenticator.service";
import { CommonServiceFactory } from "../../../services/common-service";
import { FetchprefilldataService } from "../../../services/fetchprefilldata.service";
import { HttpService } from "../../../services/http.service";
import { ProductService } from "../../../services/products.service";
import { AddStudentPrefillService } from "../../../services/student-services/add-student-prefill.service";
import { FetchStudentService } from "../../../services/student-services/fetch-student.service";
import { PostStudentDataService } from "../../../services/student-services/post-student-data.service";
import { WidgetService } from "../../../services/widget.service";
import { ColumnSetting } from "../../shared/custom-table/layout.model";
import { role } from "../../../model/role_features";
var jsPDF = require("jspdf");
declare var $;

@Component({
  selector: "app-student-home",
  templateUrl: "./student-home.component.html",
  styleUrls: ["./student-home.component.scss"],
})
export class StudentHomeComponent implements OnInit {
  private subscriptionStudent: ISubscription;
  private subscriptionCustomComp: ISubscription;
  @ViewChild("studentPage", { static: false }) studentPage: ElementRef;
  @ViewChild("mySidenav", { static: true }) mySidenav: ElementRef;
  @ViewChild("optMenu", { static: true }) optMenu: ElementRef;

  sizeArr: any[] = [50, 100, 250, 500, 1000];
  private enqstatus: any = [];
  emailMessageList: any = [];
  subject: any;
  previewedMessage: any;
  previewBox: boolean = false;
  private masterCourseList: any = [];
  private schoolList: any = [];
  private subjectList: any = [];
  private studentStatusList: any = [];
  private batchList: any = [];
  private standardList: any = [];
  private subCourseList: any = [];
  private customComponent: any = [];
  private studentDataSource: any[] = [];
  showEmailSubject: boolean = false;
  private selectedRowGroup: any[] = [];
  private optionsModel: any = null;
  private customComponents: any[] = [];
  bulkActionItems: MenuItem[];
  private slots: any[] = [];
  private selectedSlots: any[] = [];
  academicYear: any[] = [];
  defaultAcadYear: any;
  private slotIdArr: any[] = [];
  StudentSettings: ColumnSetting[];
  leaveDataArray: any = [];
  messageList: any = [];
  selectedUserId: any = [];
  studentbatchList: any[] = [];
  studentByIdcustomComponents: any[] = [];
  filterCustomComponent: any[] = [];
  private studentdisplaysize: number = 100;
  perPage: number = 10;
  PageIndex: number = 1;
  maxPageSize: number = 0;
  totalRow: number = 0;
  selectedRowCount: number = 0;
  loading_message: number = 1;
  paymentMode: number = 0;
  isConfirmBulkDelete: boolean;
  isNotifyStudent: boolean;
  isMarkLeave: boolean;
  isShareDetails: boolean = false;
  private advancedFilter: boolean = false;
  private isAllSelected: boolean = false;
  isDeleteStudentPrompt: boolean = false;
  isProfessional: boolean = false;
  isAddComment: boolean = false;
  isSideBar: boolean = false;
  isOptions: boolean = false;
  private isAssignBatch: boolean = false;
  isEdit: boolean = true;
  private selectedRow: any;
  studentDetailsById: any;
  studentCustomComponent: any;
  today: any;
  searchBarData: any = null;
  private selectedSlotsID: string = "";
  private selectedSlotsString: string = "";
  private assignedBatchString: string = "";
  currentDirection: string = "asc";
  sortBy: string = "student_name";
  downloadStudentReportAccess: boolean = false;
  showQuickFilter = false;
  isAdvFilter = false;
  schoolModel: boolean = false;

  private editForm: any = {
    comments: "",
    institution_id: sessionStorage.getItem("institute_id"),
  };

  instituteData: instituteInfo = {
    school_id: -1,
    standard_id: -1,
    batch_id: -1,
    name: "",
    is_active_status: 1,
    mobile: "",
    language_inst_status: -1,
    subject_id: -1,
    slot_id: "",
    master_course_name: "-1",
    course_id: -1,
    start_index: 0,
    batch_size: this.studentdisplaysize,
    sorted_by: "",
    order_by: "",
    doa_from_date: moment().format("YYYY-MM-DD"),
    doa_to_date: moment().format("YYYY-MM-DD"),
  };

  advancedFilterForm: instituteInfo = {
    school_id: -1,
    standard_id: -1,
    batch_id: -1,
    name: "",
    is_active_status: 1,
    mobile: "",
    language_inst_status: -1,
    subject_id: -1,
    slot_id: "",
    master_course_name: "-1",
    course_id: -1,
    start_index: 0,
    batch_size: this.studentdisplaysize,
    sorted_by: "",
    order_by: "",
    doa_from_date: moment().format("YYYY-MM-DD"),
    doa_to_date: moment().format("YYYY-MM-DD"),
    country_id: "-1",
    state_id: "-1",
    city_id: "-1",
    assign_to: "0",
  };

  enqAssignTo: any = [];
  role_feature = role.features;

  applyLeave = {
    student_id: "",
    start_date: moment().format("YYYY-MM-DD"),
    end_date: moment().format("YYYY-MM-DD"),
    reason: "",
  };

  sendNotification = {
    loginMessageChkbx: false,
    smsChkbx: true,
    emailChkbx: false,
    studentChkbx: true,
    parentChkbx: false,
    gaurdianChkbx: false,
    subjectMessage: "",
  };
  loginField = { checkBox: 0 };

  studentData: any = {
    studentName: "",
    batchName: "",
    projectName: "",
    dateFrom: "",
    dateTo: "",
    trainingLocation: "",
    dob: "",
    roll_no: "",
    branch: "",
    parent_name: "",
  };
  studentCustomField: any = {};
  @ViewChild("content", { static: false }) content: ElementRef;

  private studentAddFormData: StudentForm = {
    student_name: "",
    student_sex: "",
    student_email: "",
    student_phone: "",
    student_curr_addr: "",
    dob: "",
    doj: moment().format("YYYY-MM-DD"),
    school_name: "-1",
    student_class_key: "",
    parent_name: "",
    parent_email: "",
    parent_phone: "",
    guardian_name: "",
    guardian_email: "",
    guardian_phone: "",
    is_active: "Y",
    institution_id: sessionStorage.getItem("institute_id"),
    assignedBatches: [],
    assignedBatchescademicYearArray: [""],
    assignedCourse_Subject_FeeTemplateArray: [""],
    fee_type: 0,
    fee_due_day: 0,
    batchJoiningDates: [],
    comments: "",
    photo: null,
    enquiry_id: "",
    student_disp_id: "",
    student_manual_username: null,
    social_medium: -1,
    attendance_device_id: "",
    religion: "",
    standard_id: "-1",
    subject_id: "-1",
    slot_id: null,
    language_inst_status: "admitted",
    stuCustomLi: [],
    deleteCourse_SubjectUnPaidFeeSchedules: false,
  };
  assignedStandard = "-1";
  isRippleLoad: boolean;
  labelForAssignStandard = "";
  countryList: any[] = [];
  stateList: any[] = [];
  cityList: any[] = [];
  attendanceCertificate: boolean = false;
  selectedFilterData: any=null;
  /* =================================================================================================== */
  constructor(
    private prefill: FetchprefilldataService,
    private router: Router,
    private studentFetch: FetchStudentService,
    private appC: AppComponent,
    private studentPrefill: AddStudentPrefillService,
    private widgetService: WidgetService,
    private postService: PostStudentDataService,
    private actRoute: ActivatedRoute,
    private auth: AuthenticatorService,
    private _commService: CommonServiceFactory,
    private http: ProductService,
    private http_service: HttpService
  ) {
    // changes by Nalini - to handle school model conditions
    this.auth.schoolModel.subscribe(
      res => {
        this.schoolModel = false;
        if (res) {
          this.schoolModel = true;
        }
      }
    )
    this.auth.institute_type.subscribe(
      res => {
        if (res == 'LANG') {
          this.isProfessional = true; // batch module
          this.labelForAssignStandard = 'Master Course';
        } else {
          this.isProfessional = false;  //course module
          this.labelForAssignStandard = 'Standard';
        }
      }
    );
    this.today = moment().format("DD MMM YYYY");
    let institute_id = sessionStorage.getItem("institute_id");
    if (
      institute_id == "100292" ||
      institute_id == "100058" ||
      institute_id == "100127"
    ) {
      // if (institute_id == "100292" || institute_id == "100127") {
      this.attendanceCertificate = true;
    }
    this.actRoute.queryParams.subscribe((e) => {
      if (e.id != null && e.id != undefined && e.id != "") {
        if (e.action == undefined || e.action == undefined || e.action == "") {
          this.router.navigate(["/view/students/edit/" + e.id]);
        } else {
          switch (e.action) {
            case "studentEdit": {
              this.router.navigate(["/view/students/edit/" + e.id]);
              break;
            }
            case "studentFee": {
              this.editFeePDCDetails(e.id);
              break;
            }
            case "studentInventory": {
              this.editInventory(e.id);
              break;
            }
            case "studentLeave": {
              //console.log(e);
              break;
            }
            case "studentDelete": {
              //console.log(e);
              break;
            }
          }
        }
      } else {
        if (this.isProfessional) {
          this.StudentSettings = [
            { primaryKey: "student_disp_id", header: "Student Id" },
            { primaryKey: "student_name", header: "Name" },
            { primaryKey: "student_phone", header: "Contact No" },
            { primaryKey: "student_class", header: "Master Course" },
            { primaryKey: "batchesAssigned", header: "Batch Assigned" },
          ];
          this.fetchLangStudentStatus();
        } else {
          this.StudentSettings = [
            { primaryKey: 'student_disp_id', header: 'Student Id' },
            { primaryKey: 'student_name', header: 'Name' },
            { primaryKey: 'student_phone', header: 'Contact No' },
            { primaryKey: 'student_class', header: 'Standard' },
            { primaryKey: 'batchesAssigned', header: this.schoolModel ? 'Section Assigned' : 'Course Assigned' }
          ];
        }
      }
    });
  }

  /* OnInit function to set toggle default columns and load student data for table*/
  /* =================================================================================================== */
  ngOnInit() {
    this.auth.showLoader();
    this.fetchStudentPrefill();
    this.loading_message = 3;
    this.studentDataSource = [];
    this.totalRow = this.studentDataSource.length;
    this.bulkActionItems = [
      {
        label: "Send Notification",
        icon: "far fa-bell",
        command: () => {
          this.notifySelectedStudent();
        },
      },
      {
        label: "Admission Form",
        icon: "fa fa-address-card",
        command: () => {
          this.downloadStudentAdmissionForm();
        },
      },
      // {
      //   label: "Fee Installment",
      //   icon: "fa fa-dollar",
      //   command: () => {
      //     this.studentFeeInstallment(-1); // because fee install ment at multiple student has some issues
      //     // this.isShareDetails = true;
      //   },
      // },
      {
        label: "Download ID card",
        icon: "fa fa-download",
        command: () => {
          this.downloadStudentIDCard(); // because fee install ment at multiple student has some issues
          // this.isShareDetails = true;
        },
      },
      {
        label: "Assign " + this.labelForAssignStandard,
        icon: "fa fa-users",
        command: () => {
          $("#assignStandard").modal("show");
        },
      },
    ];
    this.checkDownloadRoleAccess();
    this.getAcademmicYear();
    this.fetchCustomComponent();
  }

  checkCustomeComponentElement(index) {
    if (!(index % 3)) {
      return true;
    } else {
      return false;
    }
  }

  // Assign standard to multiple students at single time. -- Developed by Swapnil
  assignStandard() {
    if (this.assignedStandard != "-1") {
      if (
        confirm(
          "Are you sure you want to assign the " +
            this.labelForAssignStandard +
            "?"
        )
      ) {
        let studentArray = {};
        for (let index = 0; index < this.selectedRowGroup.length; index++) {
          studentArray[this.selectedRowGroup[index]] = true;
        }
        let obj = {
          institute_id: sessionStorage.getItem("institute_id"),
          studentArray: studentArray,
        };
        let url = `/api/v1/students/${this.assignedStandard}/assignStandard`;
        this.auth.showLoader();
        this.http_service.postData(url, obj).subscribe(
          (data: any) => {
            let alert = {
              type: "success",
              title: "",
              body:
                this.labelForAssignStandard +
                " assigned to students successfully",
            };
            this.appC.popToast(alert);
            this.auth.hideLoader();
            this.assignedStandard = "-1";
            this.loadTableDataSource(this.instituteData);
            $("#assignStandard").modal("hide");
          },
          (error: any) => {
            this.auth.hideLoader();
            let alert = {
              type: "error",
              title: "",
              body: error,
            };
            this.appC.popToast(alert);
          }
        );
      }
    } else {
      let alert = {
        type: "info",
        title: "",
        body: "Please select " + this.labelForAssignStandard,
      };
      this.appC.popToast(alert);
    }
  }

  checkDownloadRoleAccess() {
    if (sessionStorage.getItem("downloadStudentReportAccess") == "true") {
      this.downloadStudentReportAccess = true;
    } else {
      this.bulkActionItems.splice(3, 1);
    }
  }

  /* Fetch data from server and convert to custom array */
  loadTableDataSource(obj) {
    console.log(obj);
    this.auth.showLoader();
    this.selectedRow = null;
    this.selectedRowGroup = [];
    this.closeSideBar();
    this.loading_message = 1;
    this.isAllSelected = false;
    if (obj.start_index == 0) {
      return this.studentFetch.fetchAllStudentDetails(obj).subscribe(
        (res) => {
          this.auth.hideLoader();
          /* records */
          if (res.length != 0) {
            this.totalRow = res[0].total_student_count;
            //  this._commService.contactNoPatternChange(res);
            this.contactNoPatternChange(res);
            this.studentDataSource = res;
          } else {
            let alert = {
              type: "info",
              title: "No Records Found",
              body: "We did not find any student for the specified query",
            };
            this.appC.popToast(alert);
            this.loading_message = 2;
            this.studentDataSource = [];
            this.totalRow = this.studentDataSource.length;
          }
        },
        (err) => {
          this.auth.hideLoader();
          let alert = {
            type: "error",
            title: "Failed To Fetch Student List",
            body: "please check your internet connnection or try again",
          };
          this.loading_message = 2;
          this.studentDataSource = [];
          this.totalRow = 0;
          this.appC.popToast(alert);
        }
      );
    } else {
      //console.log("start index not zero" +obj.start_index);
      return this.studentFetch.fetchAllStudentDetails(obj).subscribe(
        (res) => {
          this.auth.hideLoader();
          if (res.length != 0) {
            //this._commService.contactNoPatternChange(res);
            this.contactNoPatternChange(res);
            this.studentDataSource = res;
          } else {
            let alert = {
              type: "info",
              title: "No Records Found",
              body: "We did not find any student for the specified query",
            };
            this.loading_message = 2;
            this.studentDataSource = [];
            this.appC.popToast(alert);
            //this.totalRow = 0;
            this.studentDataSource = res;
          }
        },
        (err) => {
          this.auth.hideLoader();
          let alert = {
            type: "error",
            title: "Failed To Fetch Student List",
            body: "please check your internet connnection or try again",
          };
          this.appC.popToast(alert);
          this.studentDataSource = [];
          this.loading_message = 2;
        }
      );
    }
  }

  contactNoPatternChange(list) {
    if (
      sessionStorage.getItem("userType") != "0" ||
      sessionStorage.getItem("username") != "admin"
    ) {
      // if user is admin
      if (
        sessionStorage.getItem("permissions") != null &&
        sessionStorage.getItem("permissions") != ""
      ) {
        var permissions = JSON.parse(sessionStorage.getItem("permissions"));
        if (!this.role_feature.MOBILE_NUMBER_VISIBILITY) {
          list.forEach((el) => {
            var countryCode = el.student_phone.split("-")[0];
            var phnNo = el.student_phone.split("-")[1];
            var result;
            if (phnNo.length > 4) {
              result = phnNo.replace(/\d{4}$/, "XXXX");
            } else {
              result = phnNo.replace(/\d{1}$/, "X");
            }
            el.student_phone = countryCode + "-" + result;
          });
        }
      }
    }
  }

  downloadStudentIDCard() {
    console.log(this.selectedUserId);
    let studentId = this.getListOfIds(this.selectedRowGroup).split(",");
    const url = "/admit-card/download";
    this.auth.showLoader();
    this.postService.stdPostData(url, studentId).subscribe(
      (res: any) => {
        console.log(res);
        this.auth.hideLoader();
        if (res) {
          let resp = res.response;
          if (resp.document != "") {
            let byteArr = this._commService.convertBase64ToArray(resp.document);
            let fileName = "card.pdf"; //res.docTitle;
            let file = new Blob([byteArr], {
              type: "application/pdf;charset=utf-8;",
            });
            let url = URL.createObjectURL(file);
            let dwldLink = document.getElementById("downloadFileClick1");
            dwldLink.setAttribute("href", url);
            dwldLink.setAttribute("download", fileName);
            document.body.appendChild(dwldLink);
            dwldLink.click();
          } else {
            this._commService.showErrorMessage(
              "info",
              "Info",
              "Document does not have any data."
            );
          }
        } else {
          this.auth.hideLoader();
          this._commService.showErrorMessage(
            "info",
            "Info",
            "Document does not have any data."
          );
        }
      },
      (err) => {
        this.auth.hideLoader();
        console.log(err);
      }
    );
  }

  /* =================================================================================================== */
  /* =================================================================================================== */
  getDirection(e) {
    //console.log(this.currentDirection);
    if (e) {
      this.currentDirection = "asc";
    } else {
      this.currentDirection = "desc";
    }
  }

  /* fetch the data from server based on specific page number by converting the index into start_index */
  /* =================================================================================================== */
  /* =================================================================================================== */
  fectchTableDataByPage(index) {
    this.PageIndex = index;
    let startindex = this.studentdisplaysize * (index - 1);
    this.instituteData.start_index = startindex;
    //this.instituteData.sorted_by = sessionStorage.getItem('sorted_by') != null ? sessionStorage.getItem('sorted_by') : '';
    //this.instituteData.order_by = sessionStorage.getItem('order_by') != null ? sessionStorage.getItem('order_by') : '';
    //this.instituteData.filtered_statuses = this.statusString.join(',');
    let obj: any = {
      name: "",
      is_active_status: this.advancedFilterForm.is_active_status,
      mobile: "",
      start_index: startindex,
      batch_size: this.studentdisplaysize,
      is_quick_filter: "Y",
      master_course_name: this.advancedFilterForm.master_course_name,
      course_id: this.advancedFilterForm.course_id,
      standard_id: this.advancedFilterForm.standard_id,
    };
    if (this.advancedFilterForm.master_course_name == "-1") {
      obj.master_course_name = "";
    }
    if (this.showQuickFilter && !this.isProfessional) {
      this.selectedFilterData=obj;
      this.loadTableDataSource(obj);
    } else if (
      this.searchBarData != "" &&
      this.searchBarData != null &&
      this.searchBarData != undefined &&
      !this.isProfessional
    ) {
      this.searchBarData = this.searchBarData.trim();
      /* If input is of type string then validate string validity*/
      if (/^[\s()+-]*([0-9][\s()+-]*){0,20}$/.test(this.searchBarData)) {
        obj.mobile = this.searchBarData;
      } else if (isNaN(this.searchBarData)) {
        obj.name = this.searchBarData;
      }
      if (this.advancedFilterForm.master_course_name == "-1") {
        obj.master_course_name = "";
      }
      obj.master_course_name = "";
      obj.course_id = "-1";
      obj.standard_id = "-1";
      this.selectedFilterData=obj;
      this.loadTableDataSource(obj);
    } else if (
      (this.searchBarData == "" ||
        this.searchBarData == null ||
        this.searchBarData == undefined) &&
      !this.isAdvFilter &&
      !this.isProfessional
    ) {
      this.loadTableDataSource(obj);
      this.selectedFilterData=obj;
    } else {
      this.selectedFilterData=this.instituteData;
      this.loadTableDataSource(this.instituteData);
    }
  }

  /* Fetch next set of data from server and update table */
  /* =================================================================================================== */
  /* =================================================================================================== */
  fetchNext() {
    this.PageIndex++;
    this.fectchTableDataByPage(this.PageIndex);
  }

  /* Fetch previous set of data from server and update table */
  /* =================================================================================================== */
  /* =================================================================================================== */
  fetchPrevious() {
    this.PageIndex--;
    this.fectchTableDataByPage(this.PageIndex);
  }

  /* navigate the user to edit page for the specific student */
  /* =================================================================================================== */
  /* =================================================================================================== */
  editStudent(id) {
    alert(id)
    this.router.navigate(["/view/students/edit/" + id]);
  }

  /* Delete the student selected or archieve the student selected */
  /* =================================================================================================== */
  /* =================================================================================================== */
  deleteStudent(id) {
    let obj = {
      studentIds: this.selectedRow.student_id.toString(),
      studentAlumniArrayString: "Y",
    };
    this.postService.archieveStudents(obj).subscribe((res) => {
      let msg = {
        type: "success",
        title: "",
        body: "Requested record has been removed from student list",
      };
      this.closeSideBar();
      this.appC.popToast(msg);
      this.closeDeletePopup();
      this.loadTableDataSource(this.selectedFilterData!=null?this.selectedFilterData:this.instituteData);
    },
    (err:any)=>{
      let msg = {
        type: "error",
        title: "",
        body: err.error.message,
      };
      this.appC.popToast(msg);
    }
    );
  }

  /* =================================================================================================== */
  /* =================================================================================================== */
  confirmDeleteBulk() {
    this.isConfirmBulkDelete = true;
  }

  /* =================================================================================================== */
  /* =================================================================================================== */
  cancelDeleteBulk() {
    this.isConfirmBulkDelete = false;
  }

  /* =================================================================================================== */
  /* =================================================================================================== */
  deleteBulkStudent() {
    //console.log(this.selectedRowGroup);
  }

  /* =================================================================================================== */
  /* =================================================================================================== */
  deleteStudentOpen(row) {
    this.selectedRow = row;
    if (this.selectedRow.noOfBatchesAssigned == 0) {
      this.isDeleteStudentPrompt = true;
    } else {
      let msg = {
        type: "error",
        title: "Unable to Delete Student",
        body:
          "Requested student cannot be deleted as he/she has been assigned to a batch/course",
      };
      this.appC.popToast(msg);
    }
  }

  /* =================================================================================================== */
  /* =================================================================================================== */
  closeDeletePopup() {
    this.isDeleteStudentPrompt = false;
  }

  /* Perform the bulk action for checcked row on basis of the id of selected LI */
  /* =================================================================================================== */
  /* =================================================================================================== */
  bulkActionPerformer(id) {
    if (id == 1) {
      if (this.selectedRowGroup.length != 0) {
        //console.log('bulk action' + id + 'selected');
        //console.log(this.selectedRowGroup);
      } else {
        let msg = {
          type: "warning",
          title: "",
          body: "Please select atleast one row to perform bulk action",
        };
        this.appC.popToast(msg);
      }
    } else if (id == 2) {
      if (this.selectedRowGroup.length != 0) {
        //console.log('bulk action' + id + 'selected');
      } else {
        let msg = {
          type: "warning",
          title: "",
          body: "Please select atleast one row to perform bulk action",
        };
        this.appC.popToast(msg);
      }
    }
  }

  // get custome filter component details if is_searchable is applicable --laxmi
  getSearchableCustomeComponents(array) {
    this.filterCustomComponent = array.filter(
      (object) => object.is_searchable == "Y"
    );
  }

  /* Function to open advanced filter */
  /* =================================================================================================== */
  /* =================================================================================================== */
  openAdFilter() {
    this.isAdvFilter = true;
    this.showQuickFilter = false;
    this.searchBarData = "";
    this.closeSideBar();
    //document.getElementById('middleMainForEnquiryList').classList.add('hasFilter');
    document.getElementById("adFilterOpen").classList.add("hide");
    if (document.getElementById("basic-search")) {
      document.getElementById("basic-search").classList.add("hide");
    }
    document.getElementById("adFilterExit").classList.remove("hide");
    // document.getElementById('black-bg').classList.remove('hide');
    document.getElementById("advanced-filter-section").classList.remove("hide");
    this.fetchStudentPrefill();
  }

  /* Function to close advanced filter */
  /* =================================================================================================== */
  /* =================================================================================================== */
  closeAdFilter() {
    //document.getElementById('middleMainForEnquiryList').classList.remove('hasFilter');
    document.getElementById("adFilterExit").classList.add("hide");
    // document.getElementById('basic-search').classList.remove('hide');
    document.getElementById("adFilterOpen").classList.remove("hide");
    // document.getElementById('black-bg').classList.add('hide');
    document.getElementById("advanced-filter-section").classList.add("hide");
    this.isAdvFilter = false;
  }

  /* update the advanced filter forn */
  /* =================================================================================================== */
  /* =================================================================================================== */
  advancedSearch() {
    let tempCustomArr: any[] = [];
    this.filterCustomComponent.forEach((el) => {
      //console.log(el);
      if (el.value != "") {
        let obj = {
          component_id: el.id,
          enq_custom_value: "",
        };
        if (
          el.type == 5 &&
          el.value != "" &&
          el.value != null &&
          el.value != "Invalid date"
        ) {
          obj.enq_custom_value = moment(el.value).format("YYYY-MM-DD");
        } else if (el.type == "2") {
          obj.enq_custom_value = el.value ? "Y" : "N";
        } else {
          obj.enq_custom_value = el.value;
        }
        tempCustomArr.push(obj);
      }
    });

    if (tempCustomArr.length != 0) {
      this.advancedFilterForm.stuCustomLi = tempCustomArr;
    }

    if (
      moment(this.advancedFilterForm.doa_from_date).format("YYYY-MM-DD") >
      moment(this.advancedFilterForm.doa_to_date).format("YYYY-MM-DD")
    ) {
      this.appC.popToast({
        type: "error",
        title: "",
        body: "From date cannot be greater than to date",
      });
      return false;
    } else {
      this.advancedFilterForm.doa_from_date = this._commService.sourceValueCheck(
        this.advancedFilterForm.doa_from_date
      )
        ? ""
        : moment(this.advancedFilterForm.doa_from_date).format("YYYY-MM-DD");
      this.advancedFilterForm.doa_to_date = this._commService.sourceValueCheck(
        this.advancedFilterForm.doa_to_date
      )
        ? ""
        : moment(this.advancedFilterForm.doa_to_date).format("YYYY-MM-DD");
    }

    this.advancedFilterForm.is_active_status = parseInt(
      this.advancedFilterForm.is_active_status
    );
    this.instituteData = this.advancedFilterForm;
    if (this.advancedFilterForm.master_course_name == "-1") {
      this.instituteData.master_course_name = "";
    }
    this.PageIndex = 1;
    this.instituteData.start_index = 0;
    this.loadTableDataSource(this.instituteData);
    this.closeAdFilter();
    this.isAdvFilter=true;
  }

  /* If the user select the top checkbox and update its status, all the rows are selectedd or unselected on this basis*/
  /* =================================================================================================== */
  /* =================================================================================================== */
  /* Fetches Data as per the user selected batch size */
  /* =================================================================================================== */
  /* =================================================================================================== */
  updateTableBatchSize(num) {
    this.PageIndex = 1;
    this.studentdisplaysize = parseInt(num);
    this.bulkActionFunction();
    this.instituteData.batch_size = this.studentdisplaysize;
    this.PageIndex = 1;
    // Changes done by - Nalini
    // to handle quick filter cases while changing batch size
    this.fectchTableDataByPage(this.PageIndex);
    // this.instituteData.start_index = 0;
    // this.studentDataSource = [];
    // this.auth.showLoader();
    // this.studentFetch.fetchAllStudentDetails(this.instituteData).subscribe(
    //   res => {
    //     this.auth.hideLoader();
    //     if (res.length != 0) {
    //       this.totalRow = res[0].total_student_count;
    //       this.studentDataSource = res;
    //     }
    //     else {
    //       let alert = {
    //         type: 'info',
    //         title: 'No Records Found',
    //         body: 'We did not find any student for the specified query'
    //       }
    //       this.loading_message = 2;
    //       this.appC.popToast(alert);
    //       this.studentDataSource = [];
    //       this.totalRow = this.studentDataSource.length;
    //     }
    //   },
    //   err => {
    //     this.auth.hideLoader();
    //   }
    // );
  }

  /* Toggle page size menu on Click */
  /* =================================================================================================== */
  /* =================================================================================================== */
  bulkActionFunction() {
    document.getElementById("bulk-drop").classList.toggle("show");
  }

  /* Download the records for student as per the set institute data */
  /* =================================================================================================== */
  /* =================================================================================================== */
  downloadAllStudent() {
    let data: any = {};
    if (this.isAdvFilter) {
      data.school_id = this.instituteData.school_id,
        data.standard_id = this.instituteData.standard_id,
        data.filtered_slots = this.instituteData.filtered_slots,
        data.batch_id = this.instituteData.batch_id,
        data.subject_id = this.instituteData.subject_id,
        data.name = "",
        data.language_inst_status = this.instituteData.language_inst_status,
        data.is_active_status = this.instituteData.is_active_status,
        data.mobile = "",
        data.master_course_name = this.instituteData.master_course_name,
        data.course_id = this.instituteData.course_id,
        data.country_id = this.advancedFilterForm.country_id,
        data.city_id = this.advancedFilterForm.city_id,
        data.state_id = this.advancedFilterForm.state_id
    }
    if (!this.isAdvFilter) {
      data.school_id = -1,
        data.standard_id = this.advancedFilterForm.standard_id,
        data.batch_id = -1,
        data.subject_id = -1,
        data.name = "",
        data.language_inst_status = -1,
        data.is_active_status = this.advancedFilterForm.is_active_status==''?'-1':Number(this.advancedFilterForm.is_active_status),
        data.mobile = "",
        data.master_course_name =this.advancedFilterForm.master_course_name=='-1'?'':this.advancedFilterForm.master_course_name,
        data.course_id = this.advancedFilterForm.course_id=='-1'?'':Number(this.advancedFilterForm.course_id),
        data.country_id = -1,
        data.city_id = -1,
        data.state_id = -1,
        data.is_quick_filter = 'Y';
    }

    this.auth.showLoader();
    this.studentFetch.downloadStudentTableasXls(data).subscribe(
      (res: any) => {
        this.auth.hideLoader();
        let byteArr = this._commService.convertBase64ToArray(res.document);
        let format = res.format;
        let fileName = res.docTitle;
        let file = new Blob([byteArr], { type: "text/csv;charset=utf-8;" });
        let url = URL.createObjectURL(file);
        let dwldLink = document.getElementById("student_download");
        dwldLink.setAttribute("href", url);
        dwldLink.setAttribute("download", fileName);
        document.body.appendChild(dwldLink);
        dwldLink.click();
      },
      (err) => {
        this.auth.hideLoader();
        let msg = {
          type: "error",
          title: "Failed To Download XLS",
          body: err.error.message,
        };
        this.appC.popToast(msg);
      }
    );
  }

  /* Store the prefill data for student add form component */
  /* =================================================================================================== */
  /* =================================================================================================== */
  fetchStudentPrefill() {
    this.auth.showLoader();
    this.studentPrefill.fetchBatchDetails().subscribe((data) => {
      this.batchList = data;
    });

    this.studentPrefill.fetchLangStudentStatus().subscribe((data) => {
      this.studentStatusList = data;
    });

    this.studentPrefill.fetchMasterCourse().subscribe((data) => {
      this.auth.hideLoader();
      this.masterCourseList = data;
    });

    if (!this.standardList.length) {
      this.auth.showLoader();
      if(!this.schoolModel) {
      this.prefill.getEnqStardards().subscribe((data) => {
        this.standardList = data;
      });
    } else {
      this.getStandard();
    }
    }

    if (!this.schoolList.length) {
      this.prefill.getSchoolDetails().subscribe((data) => {
        this.schoolList = data;
      });
    }

    this.prefill.getAssignTo().subscribe(
      (data) => {
        this.enqAssignTo = data;
      },
      (err) => {
        this.auth.hideLoader();
      }
    );

    if (this.isProfessional) {
      // batch module
      this.batchModuleCalls();
    } else {
      //course module
      this.courseModuleCalls();
    }

    this.fetchDataForCountryDetails();
  }

  getStandard() {
    let url = "/api/v1/courseMaster/standard-section-list/" + sessionStorage.getItem("institute_id");
    let keys;
    this.auth.showLoader();
    this.http_service.getData(url).subscribe(
      (data: any) => {
        this.standardList = [];
        this.auth.hideLoader();
        this.standardList = data.result;
      },
      (error: any) => {
        this.auth.hideLoader();
        console.log(error);
      }
    )
  }

  updateCourseList(ev) {
    this.advancedFilterForm.course_id = "-1";
    this.subCourseList = [];
    let standard_obj = this.standardList.filter(
      (standard) => (ev == standard.standard_id)
    );
    if(standard_obj && standard_obj.length) {
      this.subCourseList = standard_obj[0].section_list;
    }
  }

  getAcademmicYear() {
    this.auth.showLoader();
    this.prefill.getAllFinancialYear().subscribe(
      (data: any) => {
        this.auth.hideLoader();
        this.academicYear = data;
        this.academicYear.forEach((e) => {
          if (e.default_academic_year == 1) {
            this.defaultAcadYear = e.inst_acad_year_id;
          }
        });
      },
      (err) => {
        let msg = err.error.message;
        this.auth.hideLoader();
        let obj = {
          type: "error",
          title: msg,
          body: "",
        };
        this.appC.popToast(obj);
      }
    );
  }

  fetchCustomComponent() {
    this.studentPrefill.fetchCustomComponentById(0, "", 2).subscribe((data) => {
      if (data != null) {
        this.auth.hideLoader();
        data.forEach((el) => {
          let obj = {
            data: el,
            id: el.component_id,
            is_required: el.is_required,
            is_searchable: el.is_searchable,
            label: el.label,
            prefilled_data: this.createPrefilledData(
              el.prefilled_data.split(",")
            ),
            selected: [],
            selectedString: "",
            type: el.type,
            value: el.enq_custom_value,
          };
          if (el.type == 4) {
            obj = {
              data: el,
              id: el.component_id,
              is_required: el.is_required,
              is_searchable: el.is_searchable,
              label: el.label,
              prefilled_data: this.createPrefilledDataType4(
                el.prefilled_data.split(","),
                el.enq_custom_value.split(","),
                el.defaultValue.split(",")
              ),
              selected:
                el.enq_custom_value.trim().split(",").length == 1 &&
                el.enq_custom_value.trim().split(",")[0] == ""
                  ? this.getDefaultArr(el.defaultValue)
                  : el.enq_custom_value.split(","),
              selectedString:
                el.enq_custom_value.trim().split(",").length == 1 &&
                el.enq_custom_value.trim().split(",")[0] == ""
                  ? el.defaultValue
                  : el.enq_custom_value,
              type: el.type,
              value: el.enq_custom_value,
            };
          }
          if (el.type == 3) {
            obj = {
              data: el,
              id: el.component_id,
              is_required: el.is_required,
              is_searchable: el.is_searchable,
              label: el.label,
              prefilled_data: this.createPrefilledData(
                el.prefilled_data.split(",")
              ),
              selected: [],
              selectedString: "",
              type: el.type,
              value: el.enq_custom_value,
            };
          }
          if (el.type == 2) {
            obj = {
              data: el,
              id: el.component_id,
              is_required: el.is_required,
              is_searchable: el.is_searchable,
              label: el.label,
              prefilled_data: this.createPrefilledData(
                el.prefilled_data.split(",")
              ),
              selected: [],
              selectedString: "",
              type: el.type,
              value: el.enq_custom_value == "" ? false : true,
            };
          } else if (el.type != 2 && el.type != 4 && el.type != 3) {
            obj = {
              data: el,
              id: el.component_id,
              is_required: el.is_required,
              is_searchable: el.is_searchable,
              label: el.label,
              prefilled_data: this.createPrefilledData(
                el.prefilled_data.split(",")
              ),
              selected: [],
              selectedString: "",
              type: el.type,
              value: el.enq_custom_value,
            };
          }
          this.customComponents.push(obj);
        });

        this.getSearchableCustomeComponents(this.customComponents);
      }
    });
  }

  //get default lang student status
  fetchLangStudentStatus() {
    this.auth.showLoader();
    this.studentPrefill.fetchLangStudentStatus().subscribe((data) => {
      this.studentStatusList = data;
      this.auth.hideLoader();
    });
  }

  batchModuleCalls() {
    this.getSlots();
    !this.batchList.length &&
      this.studentPrefill.fetchBatchDetails().subscribe((data) => {
        this.batchList = data;
        this.auth.hideLoader();
      });
  }

  courseModuleCalls() {
    !this.masterCourseList.length &&
      this.studentPrefill.fetchMasterCourse().subscribe((data) => {
        this.masterCourseList = data;
        this.auth.hideLoader();
      });
  }

  /* =================================================================================================== */
  /* =================================================================================================== */
  getDefaultArr(d): any[] {
    let a: any[] = [];
    a.push(d);
    return a;
  }

  /* =================================================================================================== */
  /* =================================================================================================== */
  createPrefilledDataType4(dataArr: any[], selected: any[], def: any[]): any[] {
    let customPrefilled: any[] = [];
    if (selected.length != 0 && selected[0] != "") {
      dataArr.forEach((el) => {
        let obj = {
          data: el,
          checked: selected.includes(el),
        };
        customPrefilled.push(obj);
      });
    } else {
      dataArr.forEach((el) => {
        let obj = {
          data: el,
          checked: def.indexOf(el) != -1,
        };
        customPrefilled.push(obj);
      });
    }
    return customPrefilled;
  }

  /* Custom Compoenent array creater */
  /* =================================================================================================== */
  /* =================================================================================================== */
  createPrefilledData(dataArr: any[]): any[] {
    let customPrefilled: any[] = [];
    dataArr.forEach((el) => {
      let obj = {
        data: el.toString(),
        checked: false,
      };
      customPrefilled.push(obj);
    });

    return customPrefilled;
  }

  /* if custom component is of type multielect then toggle the visibility of the dropdowm */
  /* =================================================================================================== */
  /* =================================================================================================== */
  multiselectVisible(elid) {
    let targetid = elid + "multi";
    if (elid != null && elid != "") {
      if (document.getElementById(targetid).classList.contains("hide")) {
        document.getElementById(targetid).classList.remove("hide");
      } else {
        document.getElementById(targetid).classList.add("hide");
      }
    }
  }

  /* if custom component is of type multielect then update the selected or unselected data*/
  /* =================================================================================================== */
  /* =================================================================================================== */
  updateMultiSelect(data, id) {
    this.filterCustomComponent.forEach((el) => {
      if (el.id == id) {
        let x = [];
        let y = el.prefilled_data;
        y.forEach((e) => {
          if (e.checked) {
            x.push(e.data);
          }
        });
        el.selected = x;
        el.selectedString = el.selected.join(",");
        el.value = el.selectedString;
      }
    });
  }

  /* When user select the master course or standard then fetch the sub or sub course for them */
  /* =================================================================================================== */
  /* =================================================================================================== */
  updateSubCourse(course) {
    if(this.schoolModel) {
      this.updateCourseList(course)
    } else {
    this.advancedFilterForm.course_id = "-1";
    this.subCourseList = [];
    this.masterCourseList.forEach((el) => {
      if (el.master_course == course) {
        this.subCourseList = el.coursesList;
      }
    });
  }
  }

  /* when the user select the master course then fetch course for the related */
  /* =================================================================================================== */
  /* =================================================================================================== */
  fetchCourseForMaster(id) {
    if(this.schoolModel) {
      this.updateCourseList(id);
    } else {
    this.advancedFilterForm.subject_id = "-1";
    this.subjectList = [];
    this.studentPrefill.fetchCourseList(id).subscribe((res) => {
      this.subjectList = res;
    });
    }
  }

  /* =================================================================================================== */
  /* =================================================================================================== */
  clearAdvancedFilterForm() {
    this.advancedFilterForm = {
      school_id: -1,
      standard_id: -1,
      batch_id: -1,
      name: "",
      is_active_status: 1,
      mobile: "",
      language_inst_status: -1,
      subject_id: -1,
      slot_id: "",
      master_course_name: "-1",
      course_id: -1,
      start_index: 0,
      batch_size: this.studentdisplaysize,
      country_id: "-1",
      state_id: "-1",
      city_id: "-1",
    };

    this.subjectList = [];

    this.customComponents.forEach((el) => {
      //console.log(el);
      el.selectedString = "";
      el.selected = [];
      el.value = "";
    });
  }

  /* =================================================================================================== */
  /* =================================================================================================== */
  searchDatabase() {
    this.PageIndex = 1;
    this.instituteData.start_index = 0;
    let obj: any = {
      name: "",
      is_active_status: this.advancedFilterForm.is_active_status,
      mobile: "",
      start_index: 0,
      batch_size: this.studentdisplaysize,
      is_quick_filter: "Y",
      master_course_name: this.advancedFilterForm.master_course_name,
      course_id: this.advancedFilterForm.course_id,
      standard_id: this.advancedFilterForm.standard_id,
    };

    if (this.advancedFilterForm.master_course_name == "-1") {
      obj.master_course_name = "";
    }

    if (!this.isProfessional) {
      if (
        this.searchBarData == "" ||
        this.searchBarData == null ||
        this.searchBarData == undefined
      ) {
        obj.name = "";
        obj.mobile = "";
        if (!this.showQuickFilter) {
          obj.master_course_name = "";
          obj.course_id = "-1";
          obj.standard_id = "-1";
          this.advancedFilterForm.master_course_name = "-1";
          this.advancedFilterForm.course_id = "-1";
          this.advancedFilterForm.standard_id = "-1";
        }
      } else {
        this.searchBarData = this.searchBarData.trim();
        /* If input is of type string then validate string validity*/
        // if (isNaN(this.searchBarData)) {
        //   obj.name = this.searchBarData;
        // }/* If not string then use the data as a number*/
        if (/^[\s()+-]*([0-9][\s()+-]*){0,20}$/.test(this.searchBarData)) {
          obj.mobile = this.searchBarData;
        } else if (isNaN(this.searchBarData)) {
          obj.name = this.searchBarData;
        }
        obj.master_course_name = '';
        obj.course_id = '-1';
        obj.standard_id = '-1';
      }
      this.selectedFilterData=obj;
      this.loadTableDataSource(obj);
    } else {
      /* If User has entered an empty value needs to be informed */
      if (
        this.searchBarData == "" ||
        this.searchBarData == " " ||
        this.searchBarData == null ||
        this.searchBarData == undefined
      ) {
        this.instituteData = {
          school_id: -1,
          standard_id: -1,
          batch_id: -1,
          name: "",
          is_active_status: 1,
          mobile: "",
          language_inst_status: -1,
          subject_id: -1,
          slot_id: "",
          master_course_name: -1,
          course_id: -1,
          start_index: 0,
          batch_size: this.studentdisplaysize,
          sorted_by: "",
          order_by: "",
        };
        this.selectedFilterData=this.instituteData;
        this.loadTableDataSource(this.instituteData);
      } else {
      /* valid input detected, check for type of input */
        this.searchBarData = this.searchBarData.trim();
        /* If input is of type string then validate string validity*/
        if (isNaN(this.searchBarData)) {
          this.instituteData = {
            school_id: -1,
            standard_id: -1,
            batch_id: -1,
            name: this.searchBarData,
            is_active_status: 1,
            mobile: "",
            language_inst_status: -1,
            subject_id: -1,
            slot_id: "",
            master_course_name: -1,
            course_id: -1,
            start_index: 0,
            batch_size: this.studentdisplaysize,
            sorted_by: "",
            order_by: "",
          };
          this.selectedFilterData=this.instituteData;
          this.loadTableDataSource(this.instituteData);
        } /* If not string then use the data as a number*/ else {
          this.instituteData = {
            school_id: -1,
            standard_id: -1,
            batch_id: -1,
            name: "",
            is_active_status: 1,
            mobile: this.searchBarData,
            language_inst_status: -1,
            subject_id: -1,
            slot_id: "",
            master_course_name: -1,
            course_id: -1,
            start_index: 0,
            batch_size: this.studentdisplaysize,
            sorted_by: "",
            order_by: "",
          };
          this.selectedFilterData=this.instituteData;
          this.loadTableDataSource(this.instituteData);
        }
      }
    }
  }

  /* update the latest comment for the selected student */
  /* =================================================================================================== */
  /* =================================================================================================== */
  openEditComment(row) {
    this.selectedRow = row;
    this.isAddComment = true;
  }

  /* update the latest comment for the selected student */
  /* =================================================================================================== */
  /* =================================================================================================== */
  closeEditComment() {
    this.isAddComment = false;
  }

  /* update the latest comment for the selected student */
  /* =================================================================================================== */
  /* =================================================================================================== */
  updateComment() {
    this.editForm.comments = this.selectedRow.comments;
    this.postService
      .updateComment(this.editForm, this.selectedRow.student_id)
      .subscribe(
        (res) => {
          let msg = {
            type: "success",
            title: "Comment Added",
          };
          this.appC.popToast(msg);
          this.editForm.comments = "";
          this.closeEditComment();
        },
        (err) => {
          let msg = {
            type: "error",
            title: "Failed To Add Comment",
            body:
              "Please check your internet connection, if the issue persist contact proctur support",
          };
          this.appC.popToast(msg);
        }
      );
  }

  /* =================================================================================================== */
  /* =================================================================================================== */
  getMin(): number {
    return (
      this.studentdisplaysize * this.PageIndex - this.studentdisplaysize + 1
    );
  }

  /* =================================================================================================== */
  /* =================================================================================================== */
  getMax(): number {
    if (this.studentDataSource.length != 0) {
      let max = this.studentdisplaysize * this.PageIndex;
      if (max > this.totalRow) {
        max = this.totalRow;
      }
      return max;
    }
  }

  /* =================================================================================================== */
  /* =================================================================================================== */
  getSlots() {
    this.auth.showLoader();
    if (!this.slots.length) {
      return this.studentPrefill.fetchSlots().subscribe(
        (res) => {
          this.auth.hideLoader();
          res.forEach((el) => {
            let obj = {
              label: el.slot_name,
              value: el,
              status: false,
            };
            this.slots.push(obj);
          });
          // console.log(this.slots);
        },
        (err) => {
          this.auth.hideLoader();
        }
      );
    }
  }

  /* =================================================================================================== */
  /* =================================================================================================== */
  updateSlotSelected(data) {
    /* slot checked */
    if (data.status) {
      this.slotIdArr.push(data.value.slot_id);
      this.selectedSlots.push(data.value.slot_name);
      if (this.selectedSlots.length != 0) {
        document.getElementById("slotwrapper").classList.add("has-value");
      } else {
        document.getElementById("slotwrapper").classList.remove("has-value");
      }
      this.selectedSlotsID = this.slotIdArr.join(",");
      this.selectedSlotsString = this.selectedSlots.join(",");
      this.advancedFilterForm.filtered_slots = this.selectedSlotsID;
    } else {
    /* slot unchecked */
      if (this.selectedSlots.length < 0) {
        document.getElementById("slotwrapper").classList.add("has-value");
      } else if (this.selectedSlots.length == 0) {
        document.getElementById("slotwrapper").classList.remove("has-value");
      } else if (this.selectedSlots.length == 1) {
        document.getElementById("slotwrapper").classList.remove("has-value");
      }
      var index = this.selectedSlots.indexOf(data.value.slot_name);
      if (index > -1) {
        this.selectedSlots.splice(index, 1);
      }
      this.selectedSlotsString = this.selectedSlots.join(",");

      var index2 = this.slotIdArr.indexOf(data.value.slot_id);
      if (index2 > -1) {
        this.slotIdArr.splice(index, 1);
      }
      this.selectedSlotsID = this.slotIdArr.join(",");
      this.advancedFilterForm.filtered_slots = this.selectedSlotsID;
    }
  }

  /* =================================================================================================== */
  /* =================================================================================================== */
  getSelected(ev) {
    this.selectedRowGroup = ev;
  }

  /* =================================================================================================== */
  /* =================================================================================================== */
  getSelectedUserIDS(ev) {
    this.selectedUserId = ev;
    sessionStorage.removeItem("global_search_edit_student");
  }

  /* =================================================================================================== */
  /* =================================================================================================== */
  getRowCount(ev) {
    //console.log(ev);
    this.selectedRowCount = ev;
  }

  /* =================================================================================================== */
  /* =================================================================================================== */
  userRowSelect(ev) {
    if (ev != null) {
      this.studentAddFormData = {
        student_name: "",
        student_sex: "",
        student_email: "",
        student_phone: "",
        student_curr_addr: "",
        dob: "",
        doj: moment().format("YYYY-MM-DD"),
        school_name: "-1",
        student_class_key: "",
        parent_name: "",
        parent_email: "",
        parent_phone: "",
        guardian_name: "",
        guardian_email: "",
        guardian_phone: "",
        is_active: "Y",
        institution_id: sessionStorage.getItem("institute_id"),
        assignedBatches: [],
        assignedBatchescademicYearArray: [""],
        assignedCourse_Subject_FeeTemplateArray: [""],
        fee_type: 0,
        fee_due_day: 0,
        batchJoiningDates: [],
        comments: "",
        photo: null,
        enquiry_id: "",
        student_disp_id: "",
        student_manual_username: null,
        social_medium: -1,
        attendance_device_id: "",
        religion: "",
        standard_id: "-1",
        subject_id: "-1",
        slot_id: null,
        language_inst_status: "admitted",
        stuCustomLi: [],
        deleteCourse_SubjectUnPaidFeeSchedules: false,
      };
      this.openSideBar(ev);
      this.selectedRow = ev;
    }
    if (this.isSideBar) {
      this.subscriptionStudent.unsubscribe();
      this.subscriptionCustomComp.unsubscribe();
    }
  }

  /* =================================================================================================== */
  /* =================================================================================================== */
  sortTableById(id) {
    this.sortBy = id;
    //console.log(id);
    if (id != "batchesAssigned") {
      this.instituteData.sorted_by = id;
      this.instituteData.order_by = this.currentDirection;
      this.PageIndex = 1;
      this.instituteData.start_index = 0;
      this.loadTableDataSource(this.instituteData);
    }
  }

  /* =================================================================================================== */
  /* =================================================================================================== */
  openSideBar(ev) {
    let mySidenavWidth = "27%";
    if (window.innerWidth < 768) mySidenavWidth = "100%";
    this.studentPage.nativeElement.style.width = "70%";
    this.studentPage.nativeElement.style.marginRight = mySidenavWidth;
    this.mySidenav.nativeElement.style.width = mySidenavWidth;
    this.mySidenav.nativeElement.style.display = "block";
    // this.optMenu.nativeElement.classList.add('shorted');
    let id = ev.student_id;
    this.isSideBar = false;
    this.auth.showLoader();
    this.studentByIdcustomComponents = [];
    this.subscriptionStudent = this.studentFetch
      .getStudentById(id)
      .subscribe((res: any) => {
        this.studentDetailsById = res;
        this.studentAddFormData = res;
        this.studentAddFormData.student_class = res.student_class_key;
        this.subscriptionCustomComp = this.studentPrefill
          .fetchCustomComponentById(id, undefined, 2)
          .subscribe(
            (cus) => {
              if (cus != null) {
                this.studentCustomComponent = cus;
                cus.forEach((el) => {
                  let obj = {
                    data: el,
                    id: el.component_id,
                    is_required: el.is_required,
                    is_searchable: el.is_searchable,
                    label: el.label,
                    prefilled_data: this.createPrefilledData(
                      el.prefilled_data.split(",")
                    ),
                    selected: [],
                    selectedString: "",
                    type: el.type,
                    value: el.enq_custom_value,
                    comp_length: el.comp_length,
                  };
                  if (el.type == 4) {
                    obj = {
                      data: el,
                      id: el.component_id,
                      is_required: el.is_required,
                      is_searchable: el.is_searchable,
                      label: el.label,
                      prefilled_data: this.createPrefilledDataType4(
                        el.prefilled_data.split(","),
                        el.enq_custom_value.split(","),
                        el.defaultValue.split(",")
                      ),
                      selected:
                        el.enq_custom_value.trim().split(",").length == 1 &&
                        el.enq_custom_value.trim().split(",")[0] == ""
                          ? this.getDefaultArr(el.defaultValue)
                          : el.enq_custom_value.split(","),
                      selectedString:
                        el.enq_custom_value.trim().split(",").length == 1 &&
                        el.enq_custom_value.trim().split(",")[0] == ""
                          ? el.defaultValue
                          : el.enq_custom_value,
                      type: el.type,
                      value:
                        el.enq_custom_value.trim().split(",").length == 1 &&
                        el.enq_custom_value.trim().split(",")[0] == ""
                          ? el.defaultValue
                          : el.enq_custom_value,
                      comp_length: el.comp_length,
                    };
                  }
                  if (el.type == 3) {
                    obj = {
                      data: el,
                      id: el.component_id,
                      is_required: el.is_required,
                      is_searchable: el.is_searchable,
                      label: el.label,
                      prefilled_data: this.createPrefilledData(
                        el.prefilled_data.split(",")
                      ),
                      selected: [],
                      selectedString: "",
                      type: el.type,
                      value:
                        el.enq_custom_value.trim().split(",").length == 1 &&
                        el.enq_custom_value.trim().split(",")[0] == ""
                          ? el.defaultValue
                          : el.enq_custom_value,
                      comp_length: el.comp_length,
                    };
                  }
                  if (el.type == 2) {
                    obj = {
                      data: el,
                      id: el.component_id,
                      is_required: el.is_required,
                      is_searchable: el.is_searchable,
                      label: el.label,
                      prefilled_data: this.createPrefilledData(
                        el.prefilled_data.split(",")
                      ),
                      selected: [],
                      selectedString: "",
                      type: el.type,
                      value: this.getCustomComponentCheckboxValue(
                        el.enq_custom_value
                      ),
                      comp_length: el.comp_length,
                    };
                  } else if (el.type != 2 && el.type != 4 && el.type != 3) {
                    obj = {
                      data: el,
                      id: el.component_id,
                      is_required: el.is_required,
                      is_searchable: el.is_searchable,
                      label: el.label,
                      prefilled_data: this.createPrefilledData(
                        el.prefilled_data.split(",")
                      ),
                      selected: [],
                      selectedString: "",
                      type: el.type,
                      value: el.enq_custom_value,
                      comp_length: el.comp_length,
                    };
                  }
                  this.studentByIdcustomComponents.push(obj);
                });
                this.studentBatchDetailsLoader(id);
              } else {
                this.studentBatchDetailsLoader(id);
              }
            },
            (err) => {
              this.auth.hideLoader();
            }
          );
      });
  }

  /* ============================================================================================================================ */
  getCustomComponentCheckboxValue(e): boolean {
    if (e == "Y") {
      return true;
    } else {
      return false;
    }
  }

  /* ============================================================================================================================ */

  /* ============================================================================================================================ */
  /* ============================================================================================================================ */
  getAssignDate(e): string {
    if (e == "" || e == null) {
      return moment().format("YYYY-MM-DD");
    } else {
      return moment(e).format("YYYY-MM-DD");
    }
  }

  /* ============================================================================================================================ */
  /* ============================================================================================================================ */
  updateAssignedBatches(arr: any[]) {
    let batchString: any[] = [];
    this.studentAddFormData.assignedBatches = [];
    this.studentAddFormData.batchJoiningDates = [];
    this.studentAddFormData.assignedBatchescademicYearArray = [""];
    this.studentAddFormData.assignedCourse_Subject_FeeTemplateArray = [""];
    let temp: any[] = [];
    let tempDate: any[] = [];
    arr.forEach((el) => {
      if (el.isSelected) {
        if (this.isProfessional) {
          temp.push(el.data.batch_id.toString());
          tempDate.push(moment(el.assignDate).format("YYYY-MM-DD"));
          batchString.push(el.data.batch_name);
          this.studentAddFormData.assignedBatchescademicYearArray.push(
            el.data.academic_year_id
          );
          this.studentAddFormData.assignedCourse_Subject_FeeTemplateArray.push(
            el.data.selected_fee_template_id
          );
        } else {
          temp.push(el.data.course_id.toString());
          tempDate.push(moment(el.assignDate).format("YYYY-MM-DD"));
          batchString.push(el.data.course_name);
          this.studentAddFormData.assignedBatchescademicYearArray.push(
            el.data.academic_year_id
          );
          this.studentAddFormData.assignedCourse_Subject_FeeTemplateArray.push(
            el.data.selected_fee_template_id
          );
        }
      }
    });
    this.studentAddFormData.assignedBatches = temp;
    this.studentAddFormData.batchJoiningDates = tempDate;
    this.assignedBatchString = batchString.join(",");
  }

  /* ============================================================================================================================ */
  /* ============================================================================================================================ */
  studentBatchDetailsLoader(id) {
    /* For Batch Model Fetch the Student Batches */
    if (this.isProfessional) {
      /* Fetching the student Slots */
      this.studentPrefill.fetchStudentBatchDetails(id).subscribe(
        (data) => {
          this.studentbatchList = [];
          data.forEach((el) => {
            /*
              if batch is not havng any templete by selected by default then we select the
              default template provided for the selected course
             */
            if (
              el.feeTemplateList != null &&
              el.feeTemplateList.length != 0 &&
              el.selected_fee_template_id == -1
            ) {
              el.feeTemplateList.forEach((e) => {
                if (e.is_default == 1) {
                  el.selected_fee_template_id = e.template_id;
                }
              });
            }

            /*
            If the user has selected any fee template be previous interaction then we do not apply any template for the user
            */
            if (
              el.feeTemplateList != null &&
              el.feeTemplateList.length != 0 &&
              el.selected_fee_template_id != -1
            ) {
              // el.feeTemplateList.forEach(e => {
              //   if (e.is_default == 1) {
              //     el.selected_fee_template_id = e.template_id;
              //   }
              // })
            }

            /*
               If the user has not selected any academic year than we set the academic for the selected user by default
            */
            if (el.academic_year_id == "-1") {
              el.academic_year_id = this.defaultAcadYear;
            }

            let obj = {
              isSelected: el.isAssigned == "Y" ? true : false,
              data: el,
              assignDate: this.getAssignDate(el.created_date),
            };

            this.studentbatchList.push(obj);
          });

          this.updateAssignedBatches(this.studentbatchList);

          this.auth.hideLoader();
          this.isSideBar = true;
        },
        (err) => {
          let msg = err.error.message;
          this.auth.hideLoader();
          let obj = {
            type: "error",
            title: msg,
            body: "",
          };
          this.appC.popToast(obj);
          //alert("Error Fetching Student Batch");
        }
      );
    } else {
    /* For Course Model fetch the Student Courses */
      this.studentPrefill.fetchStudentCourseDetails(id, this.studentAddFormData.standard_id).subscribe(
        (res) => {
          this.studentbatchList = [];
          if (res != null) {
            if (res.coursesList != null && res.coursesList.length > 0) {
              res.coursesList.forEach((el) => {
                if (
                  el.feeTemplateList != null &&
                  el.feeTemplateList.length != 0 &&
                  el.selected_fee_template_id == -1
                ) {
                  el.feeTemplateList.forEach((e) => {
                    if (e.is_default == 1) {
                      el.selected_fee_template_id = e.template_id;
                    }
                  });
                }
                if (el.academic_year_id == "-1") {
                  el.academic_year_id = this.defaultAcadYear;
                }
                let obj = {
                  isSelected: el.isAssigned == "Y" ? true : false,
                  data: el,
                  assignDate: this.getAssignDate(el.created_date),
                };
                this.studentbatchList.push(obj);
                this.updateAssignedBatches(this.studentbatchList);
              });
            }
          }
          this.auth.hideLoader();
          this.isSideBar = true;
        },
        (err) => {
          let msg = err.error.message;
          this.auth.hideLoader();
          let obj = {
            type: "error",
            title: msg,
            body: "",
          };
          this.appC.popToast(obj);
        }
      );
    }
  }

  /* =================================================================================================== */
  /* =================================================================================================== */
  closeSideBar() {
    this.isSideBar = false;
    this.studentPage.nativeElement.style.width = "100%";
    this.studentPage.nativeElement.style.marginRight = "0";
    this.mySidenav.nativeElement.style.width = "0";
    this.mySidenav.nativeElement.style.display = "none";
    // this.optMenu.nativeElement.classList.remove('shorted');
  }

  /* =================================================================================================== */
  /* =================================================================================================== */
  markStudentLeave(event) {
    this.applyLeave.student_id = event;
    this.isMarkLeave = true;
    this.fetchLEaveData();
  }

  /* =================================================================================================== */
  /* =================================================================================================== */
  fetchLEaveData() {
    this.leaveDataArray = [];
    this.auth.showLoader();
    this.studentFetch.getStudentLeaveData(this.applyLeave.student_id).subscribe(
      (res) => {
        this.auth.hideLoader();
        this.leaveDataArray = res;
      },
      (err) => {
        this.auth.hideLoader();
        //console.log(err);
      }
    );
  }

  /* =================================================================================================== */
  /* =================================================================================================== */
  closeMarkLeave() {
    this.isMarkLeave = false;
    this.applyLeave = {
      student_id: "",
      start_date: moment().format("YYYY-MM-DD"),
      end_date: moment().format("YYYY-MM-DD"),
      reason: "",
    };
  }

  /* =================================================================================================== */
  /* =================================================================================================== */
  checkDatesSelection() {
    let currentDate: any = moment();
    let start_date: any = moment(this.applyLeave.start_date);
    let end_date: any = moment(this.applyLeave.end_date);
    let startDiff = start_date.diff(currentDate);
    let btwDiff = end_date.diff(start_date);
    if (startDiff > 0 && btwDiff >= 0) {
      return true;
    } else {
      let msg = {
        type: "error",
        title: "Date Selection",
        body: "Please select future dates for Start and End date",
      };
      this.appC.popToast(msg);
      return false;
    }
  }

  /* =================================================================================================== */
  /* =================================================================================================== */
  updateMarkLeave() {
    let check = this.checkDatesSelection();
    if (check == false) {
      return;
    }
    let obj = {
      student_id: this.applyLeave.student_id,
      start_date: moment(this.applyLeave.start_date).format("YYYY-MM-DD"),
      end_date: moment(this.applyLeave.end_date).format("YYYY-MM-DD"),
      reason: this.applyLeave.reason,
    };
    this.auth.showLoader();
    this.studentFetch.markLeaveForDays(obj).subscribe(
      (res) => {
        this.auth.hideLoader();
        let msg = {
          type: "success",
          title: "Leave Applied",
          body: "Leave applied for dates successfull",
        };
        this.appC.popToast(msg);
        this.fetchLEaveData();
      },
      (err) => {
        //console.log(err);
        this.auth.hideLoader();
        let msg = {
          type: "error",
          title: "",
          body: JSON.parse(err._body).message,
        };
        this.appC.popToast(msg);
      }
    );
  }

  /* =================================================================================================== */
  /* =================================================================================================== */
  deletePerticularLeave(row) {
    //console.log(row);
    this.studentFetch.cancelLeaveOfDay(row.leave_id).subscribe(
      (res) => {
        //console.log(res);
        let msg = {
          type: "success",
          title: "Leave Removed",
          body: "Leave removed for dates successfull",
        };
        this.appC.popToast(msg);
        this.fetchLEaveData();
      },
      (err) => {
        //console.log(err);
      }
    );
  }

  /* =================================================================================================== */
  /* =================================================================================================== */
  showDeleteBtn(data) {
    let currentDate = moment();
    let startDate = moment(data.start_date);
    let diff = startDate.diff(currentDate);
    if (diff > 0) {
      return false;
    } else {
      return true;
    }
  }

  /* =================================================================================================== */
  /* =================================================================================================== */
  editFeePDCDetails(event) {
    sessionStorage.setItem("editPdc", "true");
    this.router.navigate(['/view/fee/update-fee/view-fee/'+event]);
    // this.router.navigate(["/view/students/edit/" + event]);
  }

  /* =================================================================================================== */
  /* =================================================================================================== */
  editInventory(e) {
    sessionStorage.setItem("editInv", "true");
    this.router.navigate(["/view/students/edit/" + e]);
  }

  /* =================================================================================================== */
  /* =================================================================================================== */
  notifySelectedStudent() {
    this.isNotifyStudent = true;
    this.getAllMessageFromServer();
    this.sendNotification = {
      loginMessageChkbx: false,
      smsChkbx: true,
      emailChkbx: false,
      studentChkbx: true,
      parentChkbx: false,
      gaurdianChkbx: false,
      subjectMessage: "",
    };
    this.loginField = {
      checkBox: 0,
    };
  }

  /* =================================================================================================== */
  /* =================================================================================================== */
  closeNotifyStudent() {
    this.isNotifyStudent = false;
  }

  // SEND NOTIFICATION POPUP
  /* =================================================================================================== */
  /* =================================================================================================== */
  getAllMessageFromServer() {
    this.messageList = [];
    this.emailMessageList = [];
    let tempMessageList: any = [];
    this.auth.showLoader();
    let obj = {
      from_date: moment().subtract(1, "months").format("YYYY-MM-DD"),
      status: 1,
      to_date: moment().format("YYYY-MM-DD"),
    };
    this.widgetService.getMessageList(obj).subscribe(
      (res) => {
        this.auth.hideLoader();
        console.log("Message List Get All message", res);
        tempMessageList = res;
        for (let i = 0; i < tempMessageList.length; i++) {
          if (tempMessageList[i].source === "EMAIL") {
            this.emailMessageList.push(tempMessageList[i]);
          } else if (tempMessageList[i].source === "SMS") {
            this.messageList.push(tempMessageList[i]);
          }
        }
        // this.messageList = this.addKeys(res, false);
      },
      (err) => {
        this.auth.hideLoader();
        //console.log(err);
      }
    );
  }

  /* =================================================================================================== */
  /* =================================================================================================== */
  getAllSavedMessages() {
    this.auth.showLoader();
    this.messageList = [];
    this.emailMessageList = [];
    let tempMessageList: any = [];
    this.widgetService.getMessageList({ status: 1 }).subscribe(
      (res) => {
        this.auth.hideLoader();
        tempMessageList = res;
        for (let i = 0; i < tempMessageList.length; i++) {
          if (tempMessageList[i].source === "EMAIL") {
            this.emailMessageList.push(tempMessageList[i]);
          } else if (tempMessageList[i].source === "SMS") {
            this.messageList.push(tempMessageList[i]);
          }
        }
      },
      (err) => {
        this.auth.hideLoader();
        //console.log(err);
      }
    );
  }

  /* =================================================================================================== */
  /* =================================================================================================== */
  getDeliveryModeValue() {
    if (
      this.sendNotification.smsChkbx == true &&
      this.sendNotification.emailChkbx == true
    ) {
      return 2;
    } else if (
      this.sendNotification.smsChkbx == true &&
      this.sendNotification.emailChkbx == false
    ) {
      return 0;
    } else if (
      this.sendNotification.smsChkbx == false &&
      this.sendNotification.emailChkbx == true
    ) {
      return 1;
    }
  }

  /* =================================================================================================== */
  /* =================================================================================================== */
  validateAllFields() {
    if (
      this.sendNotification.smsChkbx == false &&
      this.sendNotification.emailChkbx == false
    ) {
      let msg = {
        type: "error",
        title: "",
        body: "Please select Delivery Mode(SMS , Email)",
      };
      this.appC.popToast(msg);
      return false;
    }

    if (this.sendNotification.emailChkbx == true) {
      if (
        this.sendNotification.subjectMessage.trim() == "" ||
        this.sendNotification.subjectMessage.trim() == null
      ) {
        let msg = {
          type: "error",
          title: "",
          body: "Please enter Email Subject",
        };
        this.appC.popToast(msg);
        return false;
      }
    }

    if (
      this.sendNotification.studentChkbx == false &&
      this.sendNotification.parentChkbx == false &&
      this.sendNotification.gaurdianChkbx == false
    ) {
      let msg = {
        type: "error",
        title: "",
        body: "Please correct option in Send SMS To..",
      };
      this.appC.popToast(msg);
      return false;
    }
  }

  /* =================================================================================================== */
  /* =================================================================================================== */
  getNotificationMessage() {
    let sms = (document.getElementById("smsC") as HTMLInputElement).checked;
    let email = (document.getElementById("mailC") as HTMLInputElement).checked;
    let count = 0;
    if (sms === true) {
      for (let t = 0; t < this.messageList.length; t++) {
        if (this.messageList[t].assigned == true) {
          return {
            message: this.messageList[t].message,
            messageId: this.messageList[t].message_id,
          };
        } else {
          count++;
        }
      }
      if (this.messageList.length == count) {
        let msg = {
          type: "error",
          title: "",
          body: "Please select message",
        };
        this.appC.popToast(msg);
        return false;
      }
    } else if (email === true) {
      for (let t = 0; t < this.emailMessageList.length; t++) {
        if (this.emailMessageList[t].assigned == true) {
          return {
            message: this.emailMessageList[t].message,
            messageId: this.emailMessageList[t].message_id,
          };
        } else {
          count++;
        }
      }
      if (this.emailMessageList.length == count) {
        let msg = {
          type: "error",
          title: "",
          body: "Please select message",
        };
        this.appC.popToast(msg);
        return false;
      }
    }
  }

  /* =================================================================================================== */
  /* =================================================================================================== */
  getDestinationValue() {
    if (
      this.sendNotification.studentChkbx == true &&
      this.sendNotification.parentChkbx == false &&
      this.sendNotification.gaurdianChkbx == false
    ) {
      return 0;
    } else if (
      this.sendNotification.studentChkbx == false &&
      this.sendNotification.parentChkbx == true &&
      this.sendNotification.gaurdianChkbx == false
    ) {
      return 1;
    } else if (
      this.sendNotification.studentChkbx == false &&
      this.sendNotification.parentChkbx == false &&
      this.sendNotification.gaurdianChkbx == true
    ) {
      return 3;
    } else if (
      this.sendNotification.studentChkbx &&
      this.sendNotification.parentChkbx &&
      this.sendNotification.gaurdianChkbx == false
    ) {
      return 2;
    } else if (
      this.sendNotification.studentChkbx &&
      this.sendNotification.gaurdianChkbx &&
      this.sendNotification.parentChkbx == false
    ) {
      return 5;
    } else if (
      this.sendNotification.parentChkbx &&
      this.sendNotification.gaurdianChkbx &&
      this.sendNotification.studentChkbx == false
    ) {
      return 6;
    } else if (
      this.sendNotification.studentChkbx &&
      this.sendNotification.parentChkbx &&
      this.sendNotification.gaurdianChkbx
    ) {
      return 4;
    }
  }

  /* =================================================================================================== */
  /* =================================================================================================== */
  sendNotificationMessage() {
    let check = this.validateAllFields();
    if (check === false) {
      return false;
    }
    let messageSelected = this.getNotificationMessage();
    if (messageSelected === false) {
      return;
    }
    let obj = {
      delivery_mode: Number(this.getDeliveryModeValue()),
      notifn_message: messageSelected.message,
      notifn_subject: this.sendNotification.subjectMessage.trim(),
      destination: Number(this.getDestinationValue()),
      student_ids: this.getListOfIds(this.selectedRowGroup),
      batch_id: "-1",
      cancel_date: "",
      isEnquiry_notifn: 0,
      isAlumniSMS: 0,
      isTeacherSMS: 0,
      configuredMessage: true,
      message_id: messageSelected.messageId,
    };

    this.widgetService.sendNotification(obj).subscribe(
      (res) => {
        //console.log(res);
        let msg = {
          type: "success",
          title: "Message",
          body: "Sent successfully",
        };
        this.appC.popToast(msg);
        this.close();
        this.closeNotifyStudent();
      },
      (err) => {
        let msg = {
          type: "error",
          title: "error",
          body: err.error.message,
        };
        this.appC.popToast(msg);
        //console.log(err);
      }
    );
  }

  /* =================================================================================================== */
  /* =================================================================================================== */
  sendPushNotification() {
    let messageSelected = this.getNotificationMessage();
    if (messageSelected === false) {
      return;
    }
    let obj = {
      notifn_message: messageSelected.message,
      message_id: messageSelected.messageId,
      student_ids: this.getListOfIds(this.selectedRowGroup),
    };
    this.widgetService.sendPushNotificationToServer(obj).subscribe(
      (res) => {
        //console.log(res);
        let msg = {
          type: "success",
          title: "Message",
          body: "Sent successfully",
        };
        this.appC.popToast(msg);
        this.close();
        this.closeNotifyStudent();
      },
      (err) => {
        let msg = {
          type: "error",
          title: "error",
          body: err.error.message,
        };
        this.appC.popToast(msg);
        //console.log(err);
      }
    );
  }

  /* =================================================================================================== */
  /* =================================================================================================== */
  sendSmsForApp(value) {
    if (confirm("Are you sure you want to send SMS to selected users?")) {
      let obj = {
        app_sms_type: Number(value),
        studentArray: this.selectedRowGroup,
        userArray: this.selectedUserId,
        user_role: this.loginField.checkBox,
      };
      this.widgetService.smsForAddDownload(obj).subscribe(
        (res) => {
          let msg = {
            type: "success",
            title: "Message",
            body: "Sent successfully",
          };
          this.appC.popToast(msg);
        },
        (err) => {
          let msg = {
            type: "error",
            title: "error",
            body: err.message,
          };
          this.appC.popToast(msg);
        }
      );
    }
  }

  /* =================================================================================================== */
  /* =================================================================================================== */
  addKeys(data, val) {
    data.forEach((element) => {
      element.assigned = val;
    });
    return data;
  }

  /* =================================================================================================== */
  /* =================================================================================================== */
  getListOfIds(data) {
    return data.join(",");
  }

  /* =================================================================================================== */
  /* =================================================================================================== */
  getLeaveNumber(data) {
    return moment(data.end_date).diff(moment(data.start_date), "days") + 1;
  }
  /* =================================================================================================== */
  /* =================================================================================================== */
  /* Open batch assign popup */
  openAssignBatch(e) {
    this.isAssignBatch = true;
  }

  showToggleLoader($event) {
    if ($event) {
      this.auth.showLoader();
    } else {
      this.auth.hideLoader();
    }
  }
  /* ============================================================================================================================ */
  /* ============================================================================================================================ */
  /* close batch assign popup */
  closeBatchAssign() {
    /* batch has been already selected */
    if (
      this.studentAddFormData.assignedBatches != null &&
      this.studentAddFormData.assignedBatches.length != 0
    ) {
      for (let i in this.studentbatchList) {
        if (this.isProfessional) {
          /* course has been assigned */
          if (
            this.studentAddFormData.assignedBatches.includes(
              this.studentbatchList[i].data.batch_id.toString()
            )
          ) {
            this.studentbatchList[i].isSelected = true;
          } else {
            this.studentbatchList[i].isSelected = false;
          }
        } else {
          /* course has been assigned */
          if (
            this.studentAddFormData.assignedBatches.includes(
              this.studentbatchList[i].data.course_id.toString()
            )
          ) {
            this.studentbatchList[i].isSelected = true;
          } else {
            this.studentbatchList[i].isSelected = false;
          }
        }
      }
      this.isAssignBatch = false;
    } else if (
      this.studentAddFormData.assignedBatches == null ||
      this.studentAddFormData.assignedBatches.length == 0
    ) {
      for (let i in this.studentbatchList) {
        this.studentbatchList[i].isSelected = false;
      }
      this.isAssignBatch = false;
    }
  }

  /* ============================================================================================================================ */
  /* ============================================================================================================================ */
  getassignedBatchList(e) {
    this.studentAddFormData.assignedBatches = e.assignedBatches;
    this.studentAddFormData.batchJoiningDates = e.batchJoiningDates;
    this.studentAddFormData.assignedBatchescademicYearArray =
      e.assignedBatchescademicYearArray;
    this.studentAddFormData.assignedCourse_Subject_FeeTemplateArray =
      e.assignedCourse_Subject_FeeTemplateArray;
    this.studentAddFormData.deleteCourse_SubjectUnPaidFeeSchedules =
      e.deleteCourse_SubjectUnPaidFeeSchedules;
    this.assignedBatchString = e.assignedBatchString;
    this.isAssignBatch = e.isAssignBatch;
    this.studentAddFormData.optional_subject_id = e.optional_subject_id;
    this.updateStudentDataOnServer();
  }

  updateStudentDataOnServer() {
    let customArr = [];

    this.studentByIdcustomComponents.forEach((el) => {
      let max_length = el.comp_length == 0 ? 100 : el.comp_length;
      /* Not Checkbox and value not empty */
      if (el.value != "" && el.type != 2 && el.type != 5) {
        let obj = {
          component_id: el.id,
          enq_custom_id: el.data.enq_custom_id,
          enq_custom_value: el.value,
          type: el.type,
          label: el.label,
          comp_length: max_length,
        };
        customArr.push(obj);
      } else if (el.type == 2) {
      /* Checkbox Custom Component */
        if (el.value == "Y" || el.value == true) {
          let obj = {
            component_id: el.id,
            enq_custom_id: el.data.enq_custom_id,
            enq_custom_value: "Y",
            type: el.type,
            label: el.label,
            comp_length: max_length,
          };
          customArr.push(obj);
        } else if (el.value == "N" || el.value == false) {
          let obj = {
            component_id: el.id,
            enq_custom_id: el.data.enq_custom_id,
            enq_custom_value: "N",
            type: el.type,
            label: el.label,
            comp_length: max_length,
          };
          customArr.push(obj);
        }
      } else if (
      /* Date Type Custom Component */
        el.type == 5 &&
        el.value != "" &&
        el.value != null &&
        el.value != "Invalid date"
      ) {
        let obj = {
          component_id: el.id,
          enq_custom_id: el.data.enq_custom_id,
          enq_custom_value: moment(el.value).format("YYYY-MM-DD"),
          type: el.type,
          label: el.label,
          comp_length: max_length,
        };
        customArr.push(obj);
      }
    });

    /* Get slot data and store on form */
    this.studentAddFormData.slot_id = this.selectedSlotsID;
    this.studentAddFormData.stuCustomLi = customArr;

    if (
      this.studentAddFormData.assignedBatches == null ||
      this.studentAddFormData.assignedBatches.length == 0
    ) {
      this.studentAddFormData.assignedBatches = null;
      this.studentAddFormData.assignedBatchescademicYearArray = null;
      this.studentAddFormData.assignedCourse_Subject_FeeTemplateArray = null;
    }

    this.postService
      .quickEditStudent(this.studentAddFormData, this.selectedRow.student_id)
      .subscribe(
        (res: any) => {
          console.log(res);
          let alert = {
            type: "success",
            title: "Student Details Updated",
            body: "",
          };
          this.appC.popToast(alert);
          this.isSideBar = false;
          this.studentPage.nativeElement.style.width = "100%";
          this.studentPage.nativeElement.style.marginRight = "0";
          this.mySidenav.nativeElement.style.width = "0";
          this.mySidenav.nativeElement.style.display = "none";
          // this.optMenu.nativeElement.classList.remove('shorted');
          this.searchDatabase();
        },
        (err) => {
          let msg = err.error.message;
          this.auth.hideLoader();
          let obj = {
            type: "error",
            title: msg,
            body: "",
          };
          this.appC.popToast(obj);
        }
      );
  }

  downloadStudentAdmissionForm() {
    
    let obj: any = {
      studentIds: this.selectedRowGroup.join(","),
    };
    this.auth.showLoader();
    this.postService.downloadAdmissionForm(obj).subscribe(
      (res: any) => {
        this.auth.hideLoader();
        let byteArr = this._commService.convertBase64ToArray(res.document);
        let fileName = res.docTitle;
        let file = new Blob([byteArr], { type: "text/csv;charset=utf-8;" });
        let url = URL.createObjectURL(file);
        let dwldLink = document.getElementById("hiddenAnchorTag");
        dwldLink.setAttribute("href", url);
        dwldLink.setAttribute("download", fileName);
        document.body.appendChild(dwldLink);
        dwldLink.click();
      },
      (err) => {
        this.auth.hideLoader();
        this._commService.showErrorMessage("error", "", err.error.message);
      }
    );
  }

  //get all selected studnet fee installment
  studentFeeInstallment(userType) {
    console.log("studentFeeInstallment");
    let object = {
      student_ids: this.selectedRowGroup.toString(), // string by ids common seperated
      institution_id: "",
      sendEmail: userType,
    };
    if (userType == 1) {
      object["user_role"] = this.paymentMode;
    }
    this.auth.showLoader();

    this.postService.getFeeInstallments(object).subscribe(
      (res: any) => {
        this.auth.hideLoader();
        if (userType == -1) {
          let byteArr = this._commService.convertBase64ToArray(res.document);
          let fileName = res.docTitle;
          let file = new Blob([byteArr], { type: "text/csv;charset=utf-8;" });
          let url = URL.createObjectURL(file);
          let dwldLink = document.getElementById("hiddenAnchorTag2");
          dwldLink.setAttribute("href", url);
          dwldLink.setAttribute("download", fileName);
          document.body.appendChild(dwldLink);
          dwldLink.click();
        } else {
          this.isShareDetails = false;
          let obj = {
            type: "success",
            title: "Mails send successfully",
            body: "",
          };
          this.appC.popToast(obj);
        }
      },
      (err) => {
        this.auth.hideLoader();
        this._commService.showErrorMessage("error", "", err.error.message);
      }
    );
  }

  getCertificateData(event) {
    this.auth.showLoader();
    let url = `/api/v1/students/studentCertificateDetails/?studentId=${event}`;
    let institute_id = sessionStorage.getItem("institute_id");
    let url1 = `/api/v1/enquiry/fetchCustomEnquiryComponents/${institute_id}?id=${event}&isSearhable=undefined&student_enq_id=undefined&page=2`;
    this.http.getCertificateData(url).subscribe(
      (res: any) => {
        console.log("Url", url);
        console.log("Response", res);
        this.studentData = res;
        if (this.studentData.dateFrom != null) {
          this.studentData.dateFrom = moment(this.studentData.dateFrom).format(
            "DD-MM-YYYY"
          );
        }
        if (this.studentData.dateTo != null) {
          this.studentData.dateTo = moment(this.studentData.dateTo).format(
            "DD-MM-YYYY"
          );
        }
        this.http.getCertificateData(url1).subscribe((res: any) => {
          console.log("Response 2", res);
          for (let i = 0; i < res.length; i++) {
            if (res[i].label === "Certificate Number") {
              this.studentCustomField.certificateNo = res[i].enq_custom_value;
              console.log(res[i].enq_custom_value);
            }
            if (res[i].label === "Registered Number") {
              this.studentCustomField.registeredNo = res[i].enq_custom_value;
              console.log(res[i].enq_custom_value);
            }
            if (res[i].label === "Grade") {
              this.studentCustomField.grade = res[i].enq_custom_value;
              console.log(res[i].enq_custom_value);
            }
            if (res[i].label === "Course Name") {
              this.studentCustomField.courseName = res[i].enq_custom_value;
              console.log(res[i].enq_custom_value);
            }
            if (res[i].label === "Academic Year") {
              this.studentCustomField.academicYear = res[i].enq_custom_value;
            }
          }
        });
        setTimeout(() => {
          this.printDiv();
        }, 2000);
        this.auth.hideLoader();
      },
      (err) => {
        console.log(err);
      }
    );
  }
  // ======================================================================================
  printDiv() {
    let institute_id = sessionStorage.getItem("institute_id");
    if (this.attendanceCertificate) {
      document.getElementById("dvContainer_one").className =
        "certificate-outer-container";
      const doc = new jsPDF("l", "in", "a4");
      console.log(doc);
      doc.internal.scaleFactor = 1;
      doc.addHTML(this.content.nativeElement, function () {
        doc.save("certificate.pdf");
      });
      document.getElementById("dvContainer_one").className = "hide";
    } else {
      if (institute_id == "102026" || institute_id == "100135") {
        document.getElementById("dvContainer_two").className =
          "cert-outer-container";
        const doc = new jsPDF("l", "in", "a4");
        console.log(doc);
        doc.internal.scaleFactor = 1;
        doc.addHTML($("#dvContainer_two"), function () {
          doc.save("certificate.pdf");
        });
        document.getElementById("dvContainer_two").className = "hide";
      } else if (institute_id == "101238") {
        console.log("Growth");
        document.getElementById("dvContainer_three").className =
          "cert-outer-container";
        const doc = new jsPDF("l", "in", "a4");
        console.log(doc);
        doc.internal.scaleFactor = 1;

        doc.addHTML($("#dvContainer_three"), function () {
          doc.save("certificate.pdf");
        });
        document.getElementById("dvContainer_three").className = "hide";
      } else {
        document.getElementById("dvContainer").className = "outer-container";
        const doc = new jsPDF("l", "in", "a4");
        console.log(doc);
        doc.internal.scaleFactor = 1;

        doc.addHTML($("#dvContainer"), function () {
          doc.save("certificate.pdf");
        });
        document.getElementById("dvContainer").className = "hide";
      }
    }
  }

  fetchDataForCountryDetails() {
    let encryptedData = sessionStorage.getItem("country_data");
    let data = JSON.parse(encryptedData);
    if (data && data.length > 0) {
      this.countryList = data;
    }
    console.log(this.countryList);
  }

  getStateList() {
    this.stateList = [];
    this.cityList = [];
    this.advancedFilterForm.state_id = "-1";
    this.advancedFilterForm.city_id = "-1";
    if (this.advancedFilterForm.country_id != -1) {
      const url = `/api/v1/country/state?country_ids=${this.advancedFilterForm.country_id}`;
      this.auth.showLoader();
      this.http_service.getData(url).subscribe(
        (res: any) => {
          this.auth.hideLoader();
          if (res.result && res.result.length > 0) {
            this.stateList = res.result[0].stateList;
          }
        },
        (err) => {
          this.auth.hideLoader();
          let obj = {
            type: "error",
            title: "",
            body: err,
          };
          this.appC.popToast(obj);
        }
      );
    }
  }

  // get city list as per state selection
  getCityList() {
    this.cityList = [];
    this.advancedFilterForm.city_id = "-1";
    if (this.advancedFilterForm.state_id != -1) {
      const url = `/api/v1/country/city?state_ids=${this.advancedFilterForm.state_id}`;
      this.auth.showLoader();
      this.http_service.getData(url).subscribe(
        (res: any) => {
          this.auth.hideLoader();
          if (res.result.length > 0) {
            this.cityList = res.result[0].cityList;
          }
        },
        (err) => {
          this.auth.hideLoader();
          let obj = {
            type: "error",
            title: "",
            body: err,
          };
          this.appC.popToast(obj);
        }
      );
    }
  }

  openQuickFilter() {
    this.isAdvFilter = false;
    this.searchBarData = "";
    if(!this.schoolModel) {
    document.getElementById("adFilterExit").classList.add("hide");
    document.getElementById("adFilterOpen").classList.remove("hide");
    }
    // document.getElementById('black-bg').classList.add('hide');
    document.getElementById("advanced-filter-section").classList.add("hide");
    this.showQuickFilter = true;
    if (!this.standardList.length) {
      this.auth.showLoader();
      if(this.schoolModel) {
        this.getStandard();
      } else {
        this.prefill.getEnqStardards().subscribe((data) => {
          this.auth.hideLoader();
          this.standardList = data;
        });
      }
    }
    this.auth.showLoader();
    this.studentPrefill.fetchBatchDetails().subscribe((data) => {
      this.auth.hideLoader();
      this.batchList = data;
    });
  }

  closeQuickFilter() {
    this.showQuickFilter = false;
    this.advancedFilterForm.standard_id = "-1";
    this.advancedFilterForm.subject_id = "-1";
    this.advancedFilterForm.is_active_status = "1";
    this.advancedFilterForm.master_course_name = "-1";
    this.advancedFilterForm.course_id = "-1";
    this.advancedFilterForm.standard_id = "-1";
    this.searchBarData = "";
  }
  emailCheckBoxClick(event) {
    if (event.target.checked) {
      this.sendNotification.emailChkbx = true;
      (document.getElementById("smsC") as HTMLInputElement).checked = false; //Added By AKG to check only one checkbox at a time
    } else {
      this.sendNotification.emailChkbx = false;
      (document.getElementById("smsC") as HTMLInputElement).checked = true; //Added By AKG to check only one checkbox at a time
    }
  }
  smsCheckBoxClick(event) {
    if (event.target.checked) {
      this.sendNotification.emailChkbx = false;
      (document.getElementById("mailC") as HTMLInputElement).checked = false; //Added By AKG to check only one checkbox at a time
    } else {
      this.sendNotification.emailChkbx = true;
      (document.getElementById("mailC") as HTMLInputElement).checked = true; //Added By AKG to check only one checkbox at a time
    }
  }
  onCheckBoxSelection(index, data) {
    let sms = (document.getElementById("smsC") as HTMLInputElement).checked;
    let email = (document.getElementById("mailC") as HTMLInputElement).checked;
    if (sms === true) {
      this.messageList.map((ele) => {
        if (ele.message_id == data.message_id) {
          ele.assigned = true;
        } else {
          ele.assigned = false;
        }
      });
    } else if (email === true) {
      this.emailMessageList.map((ele) => {
        if (ele.message_id == data.message_id) {
          ele.assigned = true;
        } else {
          ele.assigned = false;
        }
      });
    }
  }
  close() {
    this.previewBox = false;
  }
  // Function for preview email message Added by ashwini gupta
  previewMessage() {
    this.previewedMessage = "";
    let check = this.validateAllFields();
    if (check === false) {
      return false;
    }
    let messageSelected: any = this.getNotificationMessage();
    this.previewedMessage = messageSelected.message;
    console.log("messageSelected", messageSelected.message);
    this.previewBox = true;

    if (messageSelected === false) {
      this.previewBox = false;
      return;
    }
  }

  // Changes done by Nalini - To handle role based conditions
  //  Role Based Access
  checkIfUserHadAccess(id) {
    let permissionArray = sessionStorage.getItem("permissions");
    if (permissionArray == "" || permissionArray == null || !permissionArray) {
      return true;
    } else {
      if (id) {
        return true;
      } else {
        return false;
      }
    }
  }
}
